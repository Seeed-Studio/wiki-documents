#coding:utf-8
import os 
import re

class MarkdownFolder():

    def __init__(self, folder_path):
        self._folder_path = folder_path
        self._folder_file_list = os.listdir(self._folder_path)
        self._mdfile_dict = {}
        self._mdfile_num = self.getMdfileNum()
        self._file_num = self.getFileNum()
        self._index = "<!DOCTYPE html>\r\n\
        <html>\r\n\
        <head>\r\n\
            <link rel=\"canonical\" href=\"http://seeed.wiki/%s/\"/>\r\n\
            <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"/>\r\n\
            <meta http-equiv=\"refresh\" content=\"0;url=http://seeed.wiki/%s/\"/>\r\n\
        </head>\r\n\
        </html>"

    def getMdfileNum(self):
        num = 0
        for filename in self._folder_file_list:
            if '.md' in filename:
                num += 1
                self._mdfile_dict.setdefault(filename,'')
        return num

    def getFileNum(self):
        return self._folder_file_list.__len__()

    def getMdfileSku(self):
        pattern = re.compile(r'\d{9}')
        for filename in self._mdfile_dict:
            with open((self._folder_path + '/' + filename), 'r') as f:
                for eachLine in f:
                    if eachLine.find('sku:') != -1:
                        sku=pattern.search(eachLine, pos=4)
                        if sku:
                            t = sku.group()
                            self._mdfile_dict[filename] = t

    def printDict(self):
        for filename in self._mdfile_dict:
            print("{} \t {}".format(filename, self._mdfile_dict[filename]))

# 1. make a folder called "sku"
# 2. read _mdfile_dict and make sub folders of "sku" with the value of _mdfile_dict
# 3. write a index file
    def makeSkuIndex(self):
        try:
            os.mkdir(PATH1)
        except OSError as e:
            print e
        for mdfile in self._mdfile_dict:
            sku = self._mdfile_dict[mdfile]
            board_name =  mdfile.split('.md')
            if sku is not '':
                try:
                    os.mkdir(PATH1+'/%s' % sku)
                    with open(PATH1 + "/%s/index.html" % sku, 'w') as fd:
                        fd.write((self._index % (board_name[0], board_name[0])))
                #if boards sku repeat, how to do?
                except OSError as e:
                    # with open("sku/%s/index.html" % sku, 'w') as fd:
                    #     fd.write((self._index % (board_name[0], board_name[0])))
                    print(e)
                    print("sku重复: {0:_<40}{1}".format(board_name[0], sku))


        # except OSError as e:
        #     print e
        #     pass
    

if __name__ == '__main__':

    PATH = os.getcwd() + "\\docs"
    PATH1 = os.getcwd() + "\\site"
    md = MarkdownFolder(PATH)
    md.getMdfileSku()
    md.makeSkuIndex()
    # md.printDict()

