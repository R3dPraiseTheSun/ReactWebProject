import numpy as np
import json
import random

from string import ascii_uppercase as alc

HEIGHT = 35
WIDTH = 15

path = "src\python\Crossword_Data\crswrd.json"

with open(path, "r", encoding="utf-8") as file:
    data = json.load(file)
    crossword_dict = dict(data)
    maxi = 0
    for key in crossword_dict.keys():
        if len(key) > maxi: maxi = len(key)
    WIDTH = maxi + 1

    HEIGHT = 8
    WIDTH = 4
    matrix = [['     ' for _ in range(WIDTH)] for _ in range(HEIGHT)]

    matrix[0][0]="rd/dr"
    for i, el in enumerate(matrix[0]):
        if i%2==0 and el.strip() == '':
            matrix[0][i] = 'rd/dd'
    for i, el in enumerate([row[0] for row in matrix]):
        if i%2==0 and el.strip() == '':
            matrix[i][0] = 'rr/dr'
    for i, row in enumerate(matrix):
        for j, el in enumerate(row):                
            if el == 'rd/dr':
                count = 0
                linked_count = (0,[('',-1)])
                text_elements = []
                for rowd in matrix:
                    if rowd[j+1].strip() in alc or rowd[j+1].strip() == '':
                        count += 1
                        max_count = max(linked_count[0], count)
                        if rowd[j+1].strip() != '':
                            text_elements.append((rowd[j+1].strip(), i+1))
                        linked_count = (max_count, (text_elements))
                    else: break
                print(linked_count)

                possible_answ = []
                if 1 < linked_count[0]:
                    for key in crossword_dict.keys():
                        if len(key) <= linked_count[0]:
                            if len(linked_count[1]) > 0:
                                for el in linked_count[1]: 
                                    if key[el[1]] == el[0]:
                                        possible_answ.append(key)
                            else:
                                possible_answ.append(key)
                rand_key = random.randint(0, len(possible_answ))
                print(possible_answ[rand_key])
                for id, char in enumerate(possible_answ[rand_key]):
                    matrix[id][j+1] = f'  {char}  '

                count = 0
                linked_count = (0,[('',-1)])
                text_elements = []
                for id, _ in enumerate(matrix[j+1]): 
                    if matrix[j+1][id].strip() in alc or matrix[j+1][id].strip() == '':
                        count += 1
                        max_count = max(linked_count[0], count)
                        if matrix[j+1][id].strip() != '':
                            text_elements.append((matrix[j+1][id].strip(), i+1))
                        linked_count = (max_count, (text_elements))
                    else: break
                print(linked_count)

                possible_answ = []
                if 1 < linked_count[0]:
                    for key in crossword_dict.keys():
                        if len(key) <= linked_count[0]:
                            if len(linked_count[1]) > 0:
                                for el in linked_count[1]: 
                                    if key[el[1]] == el[0]:
                                        possible_answ.append(key)
                            else:
                                possible_answ.append(key)
                rand_key = random.randint(0, len(possible_answ))
                print(possible_answ[rand_key])
                for id, char in enumerate(possible_answ[rand_key]):
                    matrix[j+1][id] = f'  {char}  '

            if el == 'rd/dd':
                count = 0
                linked_count = (0,[('',-1)])
                text_elements = []
                for rowd in matrix: 
                    if rowd[j+1].strip() in alc or rowd[j+1].strip() == '':
                        count += 1
                        max_count = max(linked_count[0], count)
                        if rowd[j+1].strip() != '':
                            text_elements.append((rowd[j+1].strip(), i+1))
                        linked_count = (max_count, (text_elements))
                    else: break
                print(linked_count)
                
                possible_answ = []
                if 1 < linked_count[0]:
                    for key in crossword_dict.keys():
                        if len(key) <= linked_count[0]:
                            if len(linked_count[1]) > 0:
                                for el in linked_count[1]: 
                                    if key[el[1]] == el[0]:
                                        possible_answ.append(key)
                            else:
                                possible_answ.append(key)
                rand_key = random.randint(0, len(possible_answ))
                print(possible_answ[rand_key])
                for id, char in enumerate(possible_answ[rand_key]):
                    matrix[id][j+1] = f'  {char}  '

                count = 0
                linked_count = (0,[('',-1)])
                text_elements = []
                for rowd in matrix[i+1:]: 
                    if rowd[j].strip() in alc or rowd[j].strip() == '':
                        count += 1
                        max_count = max(linked_count[0], count)
                        if rowd[j].strip() != '':
                            text_elements.append((rowd[j].strip(), i))
                        linked_count = (max_count, (text_elements))
                    else: break
                print(linked_count)

                possible_answ = []
                if 1 < linked_count[0]:
                    for key in crossword_dict.keys():
                        if 3 < len(key) <= linked_count[0]:
                            if len(linked_count[1]) > 0:
                                for el in linked_count[1]: 
                                    if key[el[1]] == el[0]:
                                        possible_answ.append(key)
                            else:
                                possible_answ.append(key)
                rand_key = random.randint(0, len(possible_answ))
                print(possible_answ[rand_key])
                for id, char in enumerate(possible_answ[rand_key]):
                    matrix[id+1][j] = f'  {char}  '


            #     pass
            # if el == 'rr/dr':
            #     for jd, _ in enumerate(matrix[i][j+1:]): matrix[i][jd+1] = '  E  '
            #     for jd, _ in enumerate(matrix[i+1]): matrix[i+1][jd] = '  F  '
            #     pass

    print('\n')
    for i, row in enumerate(matrix):
        print(row)
    
    # Example case
    # matrix[2][1]="-"
    # for i, char in enumerate("AA"):
    #     matrix[0+i][1] = char

    # count = 0
    # linked_count = 0
    # for row in matrix:
    #     if row[1] != '-':
    #         count += 1
    #         linked_count = max(linked_count, count)
    #     else:
    #         count = 0

    # print(np.matrix(matrix))
    # print(linked_count)
    # possible_solutions = []
    # for key in crossword_dict.keys():
    #     if len(key) == linked_count:
    #         possible_solutions.append(key)
    # print(possible_solutions)
    # for i, char in enumerate(possible_solutions[4]):
    #     matrix[3+i][1] = char
    # print(np.matrix(matrix))

    # count = 0
    # linked_count = (0,[(' ', -1)])
    # text_elements = []
    # for i, el in enumerate(matrix[1]):
    #     if el != '-':
    #         count += 1
    #         max_count = max(linked_count[0], count)
    #         if el in alc:
    #             text_elements.append((el,i))
    #         linked_count = (max_count, text_elements)
    #     else:
    #         count = 0
    # print(linked_count)

    # possible_solutions.clear()
    # for key in crossword_dict.keys():
    #     if len(key) == linked_count[0] and key[linked_count[1][0][1]] is linked_count[1][0][0]:
    #         possible_solutions.append(key)
    # print(possible_solutions)

    # for i, char in enumerate(possible_solutions[12]):
    #     matrix[1][0+i] = char
    # print(np.matrix(matrix))
