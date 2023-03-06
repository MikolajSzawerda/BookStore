import pandas as pd


def main():
    df = pd.read_csv("data/Books.csv")
    df[:40].to_json("dummy_data.json", indent=4, orient="records")

if __name__ == '__main__':
    main()