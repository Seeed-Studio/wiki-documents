---
description: Guide to use demos downloaded from Seeed's Github
title: Use Demos from Seeed Studio's Github

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Guide_to_use_demos_downloaded_from_Seeed-s_Github
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

It is necessary to use demos from Seeeduino Github frequently and there some slight difficult for a novice to run the demo well.
So we want to show you a scheduled procedure to run the demos quickly.

## Get started

1. You can download sample code and library or header files on [Seeed's Github](https://github.com/Seeed-Studio) sites.

2. Click a button named "Download Zip" at Github.

3. Decompress the downloaded ZIP file.

4. Remove the "-master" twice in decompressed file name.

5. Copy the folder decompressed file _xxx_ into your library folder (In default, it is same with Sketchbook Location which can be found by clicking File &gt; Preference).

6. Under Windows, it will likely be called "My Documents\Arduino\libraries". For Mac users, it will likely be called "Documents/Arduino/libraries". On Linux, it will be the "libraries" folder in your sketchbook.

7. Add ZIP library by the downloaded ZIP file(with "-master" removed first).

![](https://files.seeedstudio.com/wiki/Guide_to_use_demos_downloaded_from_Seeed-s_Github/img/Add_ZIP_library.png)

8. Open _**.ino**_ file in the sub directory _**example**_
9. Compile or Upload demos into your main controller board.

**Tips:** Always add compress a library file(header file in majority circumstances) with **zip** format if Arduino prompt that it can not find a _foo.h_ file.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
