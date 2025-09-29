---
description: This article mainly introduces how to use the modbus rtu function of reComputer R1000 based on CODESYS

title: How to use UPS to read input voltage on reComputer r1000
keywords:
  - Edge Controller
  - reComputer R1000
  - reComputer R1100
  - I2C
image: https://files.seeedstudio.com/wiki/reComputer-R1000/ups/ups_model.webp
slug: /recomputer_use_ups
last_update:
  date: 05/21/2025
  author: Jiahao Li
---
## Introduction

This wiki article primarily explains how to install the UPS module on the reComputer R10 and R11 series and use the UPS to read the input voltage.

## Hardware Preparation

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
      <th class="table-trnobg">UPS model</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
        <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/-/x-110992004-supercap_ups_ltc3350_module.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

>Note
>Please refer to this [link](https://wiki.seeedstudio.com/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module) to install the UPS on the R1000.

## Software prepare

### Step 1: Check UPS module

```
sudo apt update
sudo apt install i2c-tools
sudo i2cdetect -y 6
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/check_ups.png" /></center>

### Step 2: Download repository from GitHub

```
git clone https://github.com/Seeed-Projects/Read-UPS-input-voltage.git
cd Read-UPS-input-voltage
sudo apt update
sudo apt install python3-smbus
```

### Step 3: Start monitoring voltage

```
python -m venv .venv --system-site-packages && source .venv/bin/activate
python read_voltage.py
```

## Result

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/ups_result.png" /></center>

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
