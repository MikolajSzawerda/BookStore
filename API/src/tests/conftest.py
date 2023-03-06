import pytest
from mongomock_motor import AsyncMongoMockClient
import os

from src.tests.stubs.init_mongo import get_books_stub

STUBS_DIR = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    'stubs'
)

@pytest.fixture()
def books_stub():
    return get_books_stub(os.path.join(STUBS_DIR, 'books_stub.json'))


@pytest.fixture()
async def mongo_mock(monkeypatch, books_stub):
    client = AsyncMongoMockClient()
    db = client.get_database("bookstore")
    col = db.get_collection("books")
    await col.insert_many(books_stub)

    monkeypatch.setattr("src.app.main.db", db)


@pytest.fixture
def anyio_backend():
    return 'asyncio'
