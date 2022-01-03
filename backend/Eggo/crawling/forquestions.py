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
<<<<<<< HEAD
    json_file1 = "boj_problem_data_3_e.json"
=======
    json_file1 = "boj_problem_data_1266_5450.json"
>>>>>>> 44347ce7a32df12b4128db0ad1a66581bd39fef3
    with open(json_file1, 'w', encoding='UTF-8-sig') as outfile:
        json.dump(result, outfile, ensure_ascii=False)
        outfile.flush()
        outfile.close()

<<<<<<< HEAD
    json_file2 = "boj_problem_data_check_3_e.json"
=======
    json_file2 = "boj_problem_data_check_1266_5450.json"
>>>>>>> 44347ce7a32df12b4128db0ad1a66581bd39fef3
    with open(json_file2, 'w', encoding='UTF-8-sig') as outfile:
        json.dump(for_check, outfile, ensure_ascii=False)
        outfile.flush()
        outfile.close()


    print(len(result))
    print('----')
    print(len(problem_data))

<<<<<<< HEAD
for i in range(13271 + 1607 + 294, 16352):
=======
for i in range(1266, 5451):
>>>>>>> 44347ce7a32df12b4128db0ad1a66581bd39fef3
    
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
