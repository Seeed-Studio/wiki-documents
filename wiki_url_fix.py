import os
import requests

#https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png
def main():
    url = 0
    docs_md = os.listdir("docs")
    fin = []
    for doc_md in docs_md:
        if doc_md[-3:] == ".md":
            doc = open("docs/" + doc_md, "rt")
            for line in doc:
                if line.find("https://github.com/SeeedDocument") != -1 :
                    url = line[line.find("https://github.com/SeeedDocument")+33:]
                    if url[:url.find("/master/")][-3:] == "raw" :
                        name = url[:url.find("/master/") - 4]
                        ddd = "https://github.com/SeeedDocument/" +name + "/raw/master"
                    else:
                        name  = url[:url.find("/master/") - 5]
                        ddd = "https://github.com/SeeedDocument/" + name + "/blob/master"
                    print(line)
                    new_line = line.replace(ddd,"https://files.seeedstudio.com/wiki/"+name)
                    print(new_line)
                    line = new_line
                    # if len(new_line[a:b]) > 1:
                    #     print(new_line[a:b])
                    #     try:
                    #         response = requests.get(new_line[a:b])
                    #     except requests.RequestException as e:
                    #         print("Couldn't communicate with the server. If it's running, take a look at its output.")
                    #         fin.append(line)
                    #         response.close()
                    #         continue

                    #     if response.status_code == 404:
                    #         print("url is lost!!")

                    #     else:
                    #         # print "url is reachable!"
                    #         print("status code: " + str(response.status_code))
                    #         print("GET request succeeded!")
                    #         response.close()
                    #         line = new_line
                if line.find("https://raw.githubusercontent.com/SeeedDocument") != -1:
                    url = line[line.find("https://raw.githubusercontent.com/SeeedDocument")+48:]
                    name = url[:url.find("/master")]

                    #print(line)
                    print("https://raw.githubusercontent.com/SeeedDocument/" + name + "/master")
                    print("https://files.seeedstudio.com/wiki/" + name)
                    new_line = line.replace("https://raw.githubusercontent.com/SeeedDocument/" + name + "/master","https://files.seeedstudio.com/wiki/" + name)
                    line = new_line

                if line.find("https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)\"") != -1:
                    new_line = line.replace(
                        "https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)\"", \
                             "https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png")
                    line = new_line

                if line.find("https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg") != -1:
                    new_line = line.replace(
                        "https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg", \
                             "https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo_n.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo_n.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo_n.jpg")
                    line = new_line


                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg")
                    line = new_line


                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg")
                    line = new_line


                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg", \
                             "https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg")
                    line = new_line

                if line.find("https://github.com/SeeedDocument/wiki_english/raw/master") != -1:
                    new_line = line.replace(
                        "https://github.com/SeeedDocument/wiki_english/raw/master", \
                             "https://files.seeedstudio.com/wiki/wiki_english")
                    line = new_line

                if line.find("https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master", \
                             "https://files.seeedstudio.com/wiki/Seeed-WiKi")
                    line = new_line


                if line.find("https://raw.githubusercontent.com/SeeedDocument/common/master") != -1:
                    new_line = line.replace(
                        "https://raw.githubusercontent.com/SeeedDocument/common/master", \
                             "https://files.seeedstudio.com/wiki/common")
                    line = new_line

                if line.find("https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png /></a></p>") != -1:
                    new_line = line.replace(
                        "https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png /></a></p>", \
                             "https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png\" /></a></p>")
                    line = new_line
                fin.append(line)


            doc.close()
            doc  = open("docs/" + doc_md, "wt")
            for line in fin:
                doc.write(line)
            doc.close()
            print(doc_md)
            fin.clear()

                # if line.find("raw.githubusercontent.com/SeeedDocument") != -1 :
                #     new_line = line.replace(
                #         "raw/master/", "").replace("github.com/SeeedDocument", "files.seeedstudio.com")

    #print(url)


if __name__ == "__main__":
    main()


