import pytest
from fastapi.testclient import TestClient
from httpx import AsyncClient
from src.app.main import app


@pytest.mark.anyio
async def test_get_book_by_isbn(mongo_mock):
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/books/0195153448")
    assert response.status_code == 200


@pytest.mark.anyio
async def test_getting_feed(mongo_mock):
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/feed/books")
    assert response.status_code == 200
    assert len(response.json()) == 10
