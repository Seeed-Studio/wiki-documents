---
description: Introducing how to use Grove Vision AI V2 to build an intelligent web camera.
title: Intelligent IP Camera With AI Function
keywords:
- vision AI
- intelligent web camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_webcamera
last_update:
  date: 05/09/2024
  author: Allen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 can be advanced surveillance devices that integrate artificial intelligence to enhance security and operational efficiency. These cameras can perform real-time video analysis to detect and alert for unusual activities, recognize faces, and monitor crowd density, making them ideal for applications in areas such as public safety, retail management, and smart home security. By automating surveillance tasks, AI IP cameras reduce the need for constant human monitoring, enabling quicker responses to potential security threats and improving overall safety.

## Materials Required

Before the tutorial content of this article begins, you may need to have the following hardware ready.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2 Kit</th>
   <th>XIAO ESP32S3 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Upload AI Model to Grove Vision AI V2

Now we will quickly get started the modules with SenseCraft AI, and this will only require the module only.

### Step 1. Connect the Grove Vision AI V2 to the SenseCraft AI Model Assistant

First, we need to open the main SenseCraft AI Model Assistant page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>

Please use a Type-C type cable to connect Grove Vision AI V2 to your computer.

In the upper right corner of the SenseCraft AI Model Assistant page, you can select **Grove Vision AI (WE2)**. Then click the **Connect** button on the far right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

In the new window that pops up, select the correct COM port for the device and click the Connect button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### Step 2. Upload a suitable model

Then, just select a model you want to use and click the **Send** button below. Here is an example of Face Detection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/1.png" style={{width:1000, height:'auto'}}/></div>

Please remain on this page for 1-2 minutes until the model is successfully uploaded. Kindly note that switching to another page tab during this process may result in an unsuccessful upload (our team is actively working on resolving this issue, and it will be fixed soon).

### Step 3. Observations

Once the model is uploaded successfully, you will be able to see the live feed from the Grove Vision AI V2 camera in the Preview on the right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/2.png" style={{width:1000, height:'auto'}}/></div>

## Deploy a Http Server With XIAO ESP32S3 Sense

### Step 4. Download the SSCMA package and upload to Arduino IDE

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Download SSCMA Zip</font></span></strong></a>
</div>

Download the zip package from here.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/3.png" style={{width:1000, height:'auto'}}/></div>

Upload this package to Arduino IDE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/4.png" style={{width:1000, height:'auto'}}/></div>

### Step 5. Set your 2.4G wifi and upload the program to ESP32S3 sense

Open **camera web server** demo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/13.png" style={{width:1000, height:'auto'}}/></div>

Set your 2.4G wifi ssid and password.(Please pay attention to 2.4G wifi, not 5G)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
My esp32 borad package version is 2.0.14. If you found your program have some strange error, you can change your version to 2.0.14. It's because version compatibility issues.
:::

Open XIAO ESP32S3 sense PSRAM function and upload. When you use audio or video function of S3 you need to turn this on. Other types of XIAO don't need to do that.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/6.png" style={{width:1000, height:'auto'}}/></div>

When it work successfully, you will see the result like this. If you meet some error, please check **FAQ** at the bottom of this article.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/7.png" style={{width:1000, height:'auto'}}/></div>

## Access Intelligent IP Camera

### Step 6. See the result in browser

First, you need to make sure your computer at the same LAN with Grove Vision AI V2. Open your browser and input the ip address you got from previous step and click **Start Stream** button. You will see AI model run successfully in your browser.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

## FAQ

### 1. Uart buffer length error

If you meet the error like this.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/8.png" style={{width:1000, height:'auto'}}/></div>

First, you need to go to esp32 cores directory, find esp32-hal-uart.c and esp32-hal-uart.h and open them.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/9.png" style={{width:1000, height:'auto'}}/></div>

And then, you need to change the buffer size of uartBegin function from uint16_t to uint32_t. Save them and upload the program again.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/10.png" style={{width:1000, height:'auto'}}/></div>

### 2. Upload program failed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/11.png" style={{width:1000, height:'auto'}}/></div>

Press and hold the Boot button and press the Reset Button, and then let go. That will reboot XIAO and will resolve this problem.

### 3. Keeps coming up with dots

That's because network connection. Check your network if it's available? Is it 2.4G? Change another network or another antenna.

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
