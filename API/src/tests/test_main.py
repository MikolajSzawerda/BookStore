import pytest
from fastapi.testclient import TestClient
from src.app.main import app

client = TestClient(app)


def test_get_book_by_isbn(mongo_mock):
    response = client.get("/books/0195153448")
    assert response.status_code == 200
