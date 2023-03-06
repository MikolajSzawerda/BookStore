from pymongo import MongoClient
import pandas as pd


def main():
    client = MongoClient("mongodb://root:example@localhost:27017/")
    # if not client.is_mongos:
    #     raise Exception("No mongo running")
    client.drop_database('bookstore')
    col = client['bookstore']['books']
    stubs = pd.read_json("books_stub.json")
    stubs.rename(columns={
        'ISBN': 'isbn',
        'Book-Title': 'book_title',
        'Book-Author': 'book_author',
        'Year-Of-Publication': 'year_of_publication',
        'Publisher': 'publisher',
        'Image-URL-M': 'image_url',
    }, inplace=True)
    stubs.drop(columns=['Image-URL-S', 'Image-URL-L'], inplace=True)
    col.insert_many(stubs.to_dict('records'))


if __name__ == '__main__':
    main()
