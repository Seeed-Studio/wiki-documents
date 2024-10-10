---
description: This article mainly introduces how to use fuxa for WebAPI communication.

title: reComputer R1000 with fuxa to use WebAPI
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - WebAPI
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_web_api
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introduction 
FUXA is a web-based Process Visualization (SCADA/HMI/Dashboard) software. With FUXA you can create modern process visualizations with individual designs for your machines and real-time data display.It supports Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, and other protocols. 

[postman](https://www.postman.com/downloads/?utm_source=postman-home) is an interface debugging and testing tool that supports http protocol. Its main features are powerful functions, simple use and ease of use, often used for interface debugging of WebAPI.

This article mainly introduces how to use fuxa for WebAPI communication.At this stage, fuxa only supports the `GET` function, and the data packet is in Json format.We will use fuxa's `GET` function to obtain the datagram of `postman`.


## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation

* Python 3.11 may be incompatible with fuxa. If your Python version is 3.11, please consider changing to a different Python version.
* Using [fuxa](https://github.com/frangoteam/FUXA) on reComputer R1000.You can refer to the following steps to install fuxa on reComputer R1000
  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

## WebAPI communication steps
**Step 1**: Click the `+` sign in the lower right corner of the `fuxa` interface, enter `Name`, select `WebAPI` for `Type`, select `GET` for `Method`, and select `JSON` for `Format`. Then enter `https://postman-echo.com/get` at the `URL`, and finally click `OK`. You can see that fuxa can successfully establish a connection with `postman`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_webapi.gif" /></center>

**Step 2**: Enter the setting interface, click the `+` button in the upper left corner or lower right corner, you can see the data obtained from `postman` through the `GET` function, we select each data and create a tag, finally click `OK`, so that the `postman` data can be read in real time through the `GET` function.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" /></center>

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
