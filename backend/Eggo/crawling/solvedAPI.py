import requests

url = 'https://solved.ac/api/v3/search/problem/'
params = {'query': '어린 왕자'}

res = requests.get(url, params)

print(res.json())