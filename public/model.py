import sys
import argparse

#python3 -m ln2sql.main -i "Count how many city with cityName is like  Pune?"
# Read data from stdin


from ln2sql import Ln2sql


def main():
    arg_parser = argparse.ArgumentParser(description='A Utility to convert Natural Language to SQL query')
    arg_parser.add_argument('-d', '--database', help='Path to SQL dump file', default="database_store/city.sql")
    arg_parser.add_argument('-l', '--language', help='Path to language configuration file', default="lang_store/english.csv")
    arg_parser.add_argument('-i', '--sentence', help='Input sentence to parse', required=True)
    arg_parser.add_argument('-j', '--json_output', help='path to JSON output file', default="output.json")
    # arg_parser.add_argument('-t', '--thesaurus', help='path to thesaurus file',default=None) #default="thesaurus_store/th_english.dat")
    # arg_parser.add_argument('-s', '--stopwords', help='path to stopwords file',default=None) #default="stopwords/english.txt")

    args = arg_parser.parse_args()

    ln2sql = Ln2sql(
        database_path=args.database,
        language_path=args.language,
        json_output_path=args.json_output
        # thesaurus_path=args.thesaurus,
        # stopwords_path=args.stopwords,
    ).get_query(args.sentence)

if __name__ == '__main__':
    main()
