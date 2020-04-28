import os
import time
import sys
import shutil


def add_file_blank(file_path):
    if os.path.exists(file_path): 
        read_input = open(file_path,'r')
        lines = read_input.readlines()
        read_input.flush();
        read_input.close()

        lines[-1] = lines[-1] + " \n"

        write_output = open(file_path,'w')
        for ll in lines:
            write_output.write(ll)
        write_output.flush();
        write_output.close()


def main(site_dir):
    
    while True:
        if os.path.exists(site_dir + "/do_sync"): 
            dirs = os.listdir(site_dir)
            for d in dirs:
                if d == "cn":
                    cn_dirs = os.listdir(site_dir+"/cn")      
                    for cn_d in cn_dirs:
                        add_file_blank(site_dir + "/cn/" + cn_d+"/index.html")
                else:
                    add_file_blank(site_dir + "/" + d+"/index.html")



            
                # if os.path.exists(site_dir + d + "/index.html"):
                #     os.system("echo \"   \"  >> /volume1/web/wiki.seeedstudio.com/" + d + "/index.html")
            os.remove(site_dir + "/do_sync")
            print("do sync ......")
        else:
            time.sleep(5)

if __name__ == '__main__':
	main(sys.argv[1])



