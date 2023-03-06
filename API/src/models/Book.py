from pydantic import BaseModel


class BookModel(BaseModel):
    isbn: str
    book_title: str
    book_author: str
    year_of_publication: int
    publisher: str
    image_url: str

