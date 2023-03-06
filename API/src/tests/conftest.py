import pytest
import mongomock



@pytest.fixture()
def mongo_mock(monkeypatch):
    client = mongomock.MongoClient()
    db = client.get_database("bookstore")
    col = db.get_collection("book")
    emp_data = {
        "isbn": "0195153448",
        "book_title": "Classical Mythology",
        "book_author": "Mark P. O. Morford",
        "year_of_publication": 2002,
        "publisher": "Oxford University Press",
        "image_url": "http:\/\/images.amazon.com\/images\/P\/0195153448.01.LZZZZZZZ.jpg"
    }

    col.insert_one(emp_data)

    monkeypatch.setattr("src.app.main.db", db)
