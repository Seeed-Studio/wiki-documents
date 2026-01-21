---
description: Learn how to use loopback testing to test the RS485 interface of the reComputer series.
title: reComputer RS485 test
keywords:
  - RS485
  - reComputer
  - loopback test
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_rs485_loopback_test
sku: 113991314,113991274, 113991294, 113991295, 113991334, 113991374, 113991375,100020831, 100045506, 100080766, 100026042, 100061305, 100099044, 100097052, 100091962  
last_update:
  date: 01/14/2026
  author: Jiahao
---

## Introduction

This wiki applies to all reComputer devices with RS485 interfaces include reComputer R10/R11/R20/R21 and can be used to test whether the RS485 receiving and transmitting functions are working correctly.

## Hardware Preparation

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>reComputer r1100</th>
  <th>reComputer r2000</th>
  <th>reComputer r2100</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991375_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1035-10-p-5925.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1113-10-p-6258.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Connection 

Select a pair of RS485 interfaces to test， please connect A1 to A2 and connect B1 to B2:

<center><img width={1000} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/RS485_connection.jpg" /></center>

## Prepare software

Use the following command to download：

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
```

Compile

```bash
gcc -o serial_test serial_test.c
```

## Test

```bash
#From ttyACM0 to ttyACM1, send RS485_1 to RS485_2
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```
<center><img width={800} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/compile_and_test.png" /></center>

```bash
# From ttyACM1 to ttyACM0, send RS485_2 to RS485_1
./serial_test /dev/ttyACM1 /dev/ttyACM0 115200
```
<center><img width={1000} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/send_test.png" /></center>


## Tech Support

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
