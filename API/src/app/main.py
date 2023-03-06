from fastapi import FastAPI, HTTPException
from motor import motor_asyncio
from typing import Union

from src.models.Book import BookModel

app = FastAPI()
client = motor_asyncio.AsyncIOMotorClient("mongodb://root:example@localhost:27017/")
db = client['bookstore']


@app.get("/books/{isbn}", response_description="get book by isbn", response_model=Union[BookModel, None])
async def show_book(isbn: str) -> Union[BookModel, None]:
    book = await db['books'].find_one({"isbn": isbn})
    if book is None:
        raise HTTPException(status_code=404, detail=f'There is no book of isbn: {isbn}')
    return book


@app.get("/feed/books", response_description="get feed for front", response_model=list[BookModel])
async def book_feed() -> list[BookModel]:
    return await db['books'].find({}).limit(10).to_list(10)
