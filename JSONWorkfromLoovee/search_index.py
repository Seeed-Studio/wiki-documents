# -*- coding: utf-8 -*-
import time
import json
import re

def processJson(inputJsonFile, outputJsonFile):
    fin = open(inputJsonFile, 'r')
    fout = open(outputJsonFile, 'w')
    data_temp = json.load(fin)
    data = []
    data_dict = {"docs": data}

    print("***********************************")
    for eachData in data_temp["docs"]:

        if  eachData["location"].find('/#') >= 0:
            continue

        eachData["text"]= ""
        data.append(eachData)
        # print("the data is ")
        # print(data)
    json_str = json.dumps(data_dict, indent=4)  + '\n'
    # json_str = json.dumps(data_temp, indent=4) + ',' + '\n'
    fout.write(json_str)

    fin.close()  # 关闭文件
    fout.close()



if __name__ == "__main__":
    processJson('search_index.json', 'search_index_new.json')
    while True:
        print("Hello")
        time.sleep(1)

