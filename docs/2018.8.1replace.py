#!/usr/bin/python
#coding:utf-8
import os
import re
import string
import linecache
import shutil

#Get file name  from given directory
directoryPath = os.getcwd()
#directoryPath2 = os.getcwd() + '\\New'
file_extension = ".md"

if __name__ == '__main__':
    for fileName in os.listdir(directoryPath):
        if(fileName.endswith(file_extension)):
            file1 = directoryPath + '\\' + fileName
            file2 = directoryPath + '\\New\\' + fileName
            with open(file1, "r") as f1, open(file2, "w") as f2:
                for line in f1:
                    if '<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>' in line:
                        line = line.replace('<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>', '<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>')
                    f2.write(line)
            os.remove(file1)
            os.rename(file2, file1)
        