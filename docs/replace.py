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
            fp = open(directoryPath + '\\' + fileName,'w')
            lines = open(directoryPath + '\\' + fileName).readlines() 
            for s in lines:
                fp.write( s.replace('http://wiki.seeed.cc/Grove_System/','http://wiki.seeedstudio.com/Grove_System/')) 
                fp.close() 
            