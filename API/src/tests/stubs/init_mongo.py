from typing import List

from pymongo import MongoClient
import pandas as pd


def get_books_stub(path) -> list[dict]:
    stubs = pd.read_json(path)
    stubs.rename(columns={
        'ISBN': 'isbn',
        'Book-Title': 'book_title',
        'Book-Author': 'book_author',
        'Year-Of-Publication': 'year_of_publication',
        'Publisher': 'publisher',
        'Image-URL-M': 'image_url',
    }, inplace=True)
    stubs.drop(columns=['Image-URL-S', 'Image-URL-L'], inplace=True)
    return stubs.to_dict('records')


def main():
    client = MongoClient("mongodb://root:example@localhost:27017/")
    client.drop_database('bookstore')
    col = client['bookstore']['books']

    col.insert_many(get_books_stub("books_stub.json"))


if __name__ == '__main__':
    main()
