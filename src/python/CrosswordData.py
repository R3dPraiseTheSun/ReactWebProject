import json
import requests

from string import ascii_uppercase as alc
from bs4 import BeautifulSoup

def get_dict_data():
    crossword_dict = {}
    for letter in alc:
        url = f"https://divertonia.cryssoft.com/dictionar_rebus/index.php?litera={letter}"
        response = requests.get(url)
        soup = BeautifulSoup(response.content, "html.parser")
        soup.prettify()
        
        table = soup.find_all("table")[1]
        
        for tr in table.find_all("tr"):
            for ul in tr.find_all("ul"):
                text_data = ul.text.strip().split("                                    ")
                crossword_dict[tr.find("b").text.strip()] = text_data
    return crossword_dict

def save_to_file(json_file):
    path = "src\python\Crossword_Data\crswrd.json"
    with open(path, "w+", encoding="utf-8") as file:
        json.dump(json_file, file, ensure_ascii=False)