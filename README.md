
## How to edit Seeed Wiki

We have the English and Chinese Wiki. The procedure is same. This article shows how to edit wiki step by step.

## Wiki Structure

Seeed wiki uses [MkDocs template](https://squidfunk.github.io/mkdocs-material/) desgined by Martin Donath. It includes wiki source files and compiled html files.

- The English wiki source files are located at [github](https://github.com/SeeedDocument/wiki_english). The English html files are located at amazon S3(wiki.seeedstudio.com warehouse).
- The Chinese wiki source files are located at [github](https://github.com/SeeedDocument/wiki_chinese). The Chinese html files are located at amazon S3(wiki.seeedstudio.com/cn warehouse).


Here is the structure of the wiki source files.

![](https://github.com/SeeedDocument/How_to_update_wiki/raw/master/img/source.png)

Here is the structure of the html files.

![](https://github.com/SeeedDocument/How_to_update_wiki/raw/master/img/html.png)


## How to edit source files in github

### Preparation

- Step 1. Install Python, Pip and Mkdocs by following [mkdocs.org](http://www.mkdocs.org/).
- Step 2. run below command to install mkdocs-material

```python
pip install mkdocs-material
```

### Download the source files

- Run below command to download the source files into local folder.

```c
git clone https://github.com/SeeedDocument/wiki_english.git  # please change wiki_english to wiki_chinese for Chinese wiki.
```

###  Create a new wiki

- Step 1. The md files are located at docs folder under wiki_english/wiki_chinese.

  Here are the rules for the wiki name.
    - No Space, use the **_** instead of Space.
    - For Grove modules, start with **Grove-**, NOT Grove_.  

  Here are wiki examples for templates.
    - Grove template: Grove-Ultrasonic_Ranger.md
    - Platform template: Seeeduino_v4.2.md
    - Shield template: Base_Shield_V2.md
    - Kits template: LoRa_LoRaWan_Gateway_Kit.md

- Step 2. Edit the title by following below rules.  

```
title: Grove - Ultrasonic Ranger  # Please do not use Space and NOT **_**.
category: Sensor # Define the category, such as Arduino, Raspberry and so on.
bzurl: https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html  # Define the bazaar website.
oldwikiname: Grove - Ultrasonic Ranger # Ignore
prodimagename: 350px-Ultrasonic_Ranger.jpg # Ignore
surveyurl: https://www.research.net/r/Grove-Ultrasonic-Ranger # Ignore
sku: 101020010 # Define SKU
tags: io_3v3, io_5v, plat_duino, plat_pi # Ignore
```

- Step 3. please follow below structures to design the wiki.

```
- Description 
- Version # [use tablesgenerator to generate the table](tablesgenerator.com)
- Specification # [use tablesgenerator to generate the table](tablesgenerator.com)
- Platform Supported # [use tablesgenerator to generate the table](tablesgenerator.com)
- Getting Started
- FAQs
- Resources
- Tech Support
```

For Desciption session, please use below html code for get one now. Please just replace the href for product bazzar link. 

```
<p style="text-align:center"><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  
```

!!!Note
    For Grove modules, please add platform Supported(refer to ultrasonic sensor) and follow below structure inside of Getting Started.

```
- Getting Started
  - Play with Arduino
    - Hardware
    - Software
  - Play with Raspberry
    - Hardware
    - Software
```


- Step 4. Add the new item into category md file. For example, please edit Sensor.md under docs folder for Grove sensors. Here are the category md files.

```
- Actuator.md
- Arduino.md
- BeagleBone.md
- Communication.md
- Discontinued.md
- Display.md
- Essentials.md
- Grove.md
- IoT.md
- LinkIt.md
- MakerPro.md
- OldWiki-NewWiki-Mapping.csv
- Others.md
- Platform.md
- Raspberry_Pi.md
- RePhone.md
- Respeaker.md
- Sensor.md
- Shield.md
- Tutorial.md
- Wio.md
- Wio_Tracker.md
- Wireless.md
- mbed.md
```


  Here is the example of arduino.md. please follow the format to add the new products.

```
- [4WD Driver Platform V1.0](/4WD_Driver_Platform_V1.0/)
- [4WD Mecanum Wheel Robot Kit Series](/4WD_Mecanum_Wheel_Robot_Kit_Series/)
- [Basic Fastener Kit](/Basic_Fastener_Kit/)
- [Galileo Case](/Galileo_Case/)
- [Grove Maker Kit for Intel Joule](/Grove Maker Kit for Intel Joule/)
- [Grove Speech Recognizer Kit for Arduino](/Grove_Speech_Recognizer_Kit_for_Arduino/)
- [Grove Starter kit for Arduino&amp;Genuino 101](/Grove_Starter_kit_for_Arduino_101/)
- [Hercules Dual 15A 6-20V Motor Controller](/Hercules_Dual_15A_6-20V_Motor_Controller/)
```

- Step 5. Add the new product into mkdocs.yml under wiki_english foler. Then edit the Page tree. Here is the page tree structure. Please follow the template to add new products.

```
- ReSpeaker:
    - ReSpeaker Introduction: ReSpeaker.md
    - ReSpeaker 2-Mics Pi HAT: ReSpeaker_2_Mics_Pi_HAT.md
    - ReSpeaker 4-Mic Array for Raspberry Pi: ReSpeaker_4_Mic_Array_for_Raspberry_Pi.md
    - ReSpeaker Core: ReSpeaker_Core.md
    - ReSpeaker Core v2.0: ReSpeaker_Core_v2.0.md
    - ReSpeaker Drive Unit: ReSpeaker_Drive_Unit.md
    - ReSpeaker Mic Array: ReSpeaker_Mic_Array.md
    - ReSpeaker Mic Array v2.0: ReSpeaker_Mic_Array_v2.0.md
```

- Step 6. Run below command to preview the wiki.

```
mkdocs serve
```

- Step 7. Run below command to generate the wiki html files under site folder. It will take a while to generate more than 600 html files. Please open the site folder to monitor the progress.

```
mkdocs build --clean
```

!!!Note
    If we just update an old wiki, please skip step 4 and step 5.

## How to upload the html files to Amazon S3

- Step 1. Open the [Amazon S3 website](https://s3.console.aws.amazon.com/s3/buckets/wiki.seeed.cc/?region=us-west-2&tab=overview).
- Step 2. Key in account user name and password.
- Step 3. Click **wiki.seeedstudio.com** folder for English wiki.

!!!Warning
    For wiki Chinese, Please search **cn** and select **cn** folder. Then move to Step 4.

- Step 4. Select **Upload** button.
- Step 5. Drag all the folders under site to the pop up window for new wiki. If we just edit an old wiki, please drag the updated wiki only.
- Step 6. Click **Upload** button.
- Step 7. Visit [Wiki English](http://wiki.seeedstudio.com/) to verify the modifications. Or Visit [Wiki Chinese](http://wiki.seeedstudio.com/cn/) to verify the modifications.


## Search file compress

The default json search file is too large, which makes the serch time becomes more and more slow. So we need to compress the search file.


1-copy the big file `search_index.json` from **/site/search** folder.

2-run `search_index.py` 

3-rename the small file `search_index_new.json` to `search_index.json`, and upload this file into S3
wiki **English-->mkdocs**


## How to update the banner

- Step 1. Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 
- Step 2. git clone https://github.com/SeeedDocument/wiki_english.git
- Step 3. cd wiki_english/docs/images/
- Step 4. modify the top_banner.png or right_banner.png
- Step 5. modify the top_banner hyperlink by editing the wiki_english/docs/index.md @ line #1 XXXXXX.

```
<a href="https://XXXXXX" target="_blank">
```

- Step 6. modify the right_banner hyperlink by editing the wiki_english\material\partials\toc.html @ line #32 XXXXXX.

```
<td align="left"><a href="XXXXXX" target="_blank">
```

- Step 7. run below command to push the changes to github

```
git add .
git commit -m "update banner"
git push origin master
```

- Step 8. run below command to build the site. 

```
mkdocs build --clean
```

- Step 9. Follow **How to upload the html files to Amazon S3** to upload to S3.

## FAQ

The yam file format is related with the PyYAML, please install the below version packages, such as "pip install Markdown==2.6.11" 


```
C:\Users\xyu6>pip list
Package                       Version
----------------------------- ----------
Markdown                      2.6.11
mkdocs                        0.17.3
mkdocs-material               2.9.2
Pygments                      2.2.0
pylint                        1.9.2
pymdown-extensions            4.11
PyYAML                        3.12
```

## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue.
