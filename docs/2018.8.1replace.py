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
                    if 'title:' in line:
                        line = line.replace('title:', 'name:')
                    f2.write(line)
            os.remove(file1)
            os.rename(file2, file1)
        