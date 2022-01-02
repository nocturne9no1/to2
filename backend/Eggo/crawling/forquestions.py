import requests
import json
import time
from datetime import datetime


file_path = "./boj_problem_list.json"

with open(file_path, "rt", encoding='utf-8-sig') as json_file:
    problem_data = json.load(json_file)
    # print(problem_data)

# for i in range(len(problem_data)):

result = []
for_check = dict()

total = len(problem_data)
counter = 0

def write_buffer():
    json_file1 = "boj_problem_data_2.json"
    with open(json_file1, 'w', encoding='UTF-8-sig') as outfile:
        json.dump(result, outfile, ensure_ascii=False)
        outfile.flush()
        outfile.close()

    json_file2 = "boj_problem_data_check_2.json"
    with open(json_file2, 'w', encoding='UTF-8-sig') as outfile:
        json.dump(for_check, outfile, ensure_ascii=False)
        outfile.flush()
        outfile.close()


    print(len(result))
    print('----')
    print(len(problem_data))

for i in range(5451,10901):
    
    query = problem_data[i]
    url = 'https://solved.ac/api/v3/search/problem/'
    params = {'query': query}

    res = requests.get(url, params)
    if res.status_code != 200:
        print(f'Status code for query({query}): {res.status_code}')
        print(res.headers)
        break

    tmp = res.json()
    for_check[query] = 'X'
    for item in tmp['items']:
        if item['titleKo'] == query:
            for_check[query] = 'O'
            result.append(item)
            # print(item)
            break
        

    counter = counter + 1
    print(f'{datetime.now()}[{counter}/{total}] : {query} 완료됨' )
    time.sleep(5)
    if counter % 10 == 0:
        write_buffer()
#    print(for_check)

write_buffer()


