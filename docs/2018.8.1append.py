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
            f1 = open(file1, "a+")
            f1.write("hhkllfirhsaaaadfdfdghjukuilkiolloo")
			#f1.close()
        