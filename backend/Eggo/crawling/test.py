from selenium import webdriver
import json
fianl_reulst = []

for i in range(1, 230):
    backJoonCategoryUrl = f'https://www.acmicpc.net/problemset/{i}'
    # backJoonCategoryUrl = f'https://www.acmicpc.net/problemset/1'
    print(backJoonCategoryUrl)
    # selenium webdriver
    browser = webdriver.Chrome()
    # 문제 분류 초기페이지
    browser.get(backJoonCategoryUrl)

    # 카테고리 tr태그 한 줄 묶음으로 분류
    # categorys = browser.find_elements_by_css_selector('table.table.table-bordered.table-striped tbody tr')
    problems = browser.find_elements_by_css_selector('table.table-striped.table-bordered.clickable-table tbody tr')
    # print(problems)
    categoryNames = []
    for problem in problems:
        problemName = problem.find_element_by_css_selector('td > a').text
        categoryNames.append(problemName)
        fianl_reulst.append(problemName)
    print(categoryNames)

json_file = "boj_problem_list.json"
with open(json_file, 'w', encoding='UTF-8-sig') as outfile:
    json.dump(fianl_reulst, outfile, ensure_ascii=False)

