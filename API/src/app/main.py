

from fastapi import FastAPI, HTTPException
from motor import motor_asyncio

from src.models.Book import BookModel

app = FastAPI()
client = motor_asyncio.AsyncIOMotorClient("mongodb://root:example@localhost:27017/")
db = client['bookstore']


@app.get("/books/{isbn}", response_description="get book by isbn", response_model=BookModel)
async def show_book(isbn: str) -> BookModel:
    book = await db['books'].find_one({"isbn": isbn})
    if book is not None:
        return book
    raise HTTPException(status_code=404, detail=f'There is no book of isbn: {isbn}')
