import requests
from bs4 import BeautifulSoup

def get_github_profile_picture():
    # Construct the GitHub profile URL
    url = f"https://github.com/R3dPraiseTheSun"

    # Send a GET request to the GitHub profile page
    response = requests.get(url)

    # Create a BeautifulSoup object with the response content
    soup = BeautifulSoup(response.content, "html.parser")
    # Find the profile picture element
    img_element = soup.find("img", {"class": "avatar avatar-user width-full border color-bg-default"})
    # Extract the URL from the 'src' attribute of the image element
    if img_element:
        picture_url = img_element["src"]
        return picture_url

    return None

def GetGithubData(): 
    data = {
        'image': get_github_profile_picture(),
        'repos': [],
    }
    # URL of the GitHub page to crawl
    url = "https://github.com/R3dPraiseTheSun?tab=repositories"
    # Send a GET request to the URL
    response = requests.get(url)

    # Create a BeautifulSoup object to parse the HTML content
    soup = BeautifulSoup(response.content, "html.parser")

    # Find and extract information from the page
    repository_list = soup.find_all("li", {"class": "col-12 d-flex flex-justify-between width-full py-4 border-bottom color-border-muted public source"})
    # print(repository_list)
    for repository in repository_list:
        repo = {}
        try:
            repo_name = repository.find("a", {"itemprop": "name codeRepository"}).text.strip()
            # print("Repository:", repo_name)
        except AttributeError:
            print("Repository name not formatted correctly!")
        try:
            repo_description = repository.find("p", {"itemprop": "description"}).text.strip()
            # print("Description:", repo_description)
        except AttributeError:
            repo_description = 'Description not found!'
            print("Repository description not found or is formatted incorrectly!")
        repo['title'] = repo_name
        repo['description'] = repo_description
        data['repos'].append(repo)
        # print("----------------------")
    return data
