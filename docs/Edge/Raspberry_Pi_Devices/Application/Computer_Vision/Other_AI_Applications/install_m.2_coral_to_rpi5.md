---
description: This wiki demonstrates how to install M.2 coral to rpi5 and test coral. 
title: Install M.2 Coral to Raspberry Pi 5
keywords:
  - Edge
  - rpi5
  - M.2 coral
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_m2_coral_to_rpi5
last_update:
  date: 07/19/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Install M.2 Coral to Raspberry Pi 5

## Introduction

The [Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) with Dual Edge TPU is an M.2 module that brings two Edge TPU coprocessors to existing systems and products with an available M.2 E-key slot.

[Raspberry Pi Fifth Flagship Development Computer](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) is assembled with a powerful 2.4GHz 64-bit quad-core Arm processor and an 800MHz VideoCore VII GPU for impressive graphics. It offers advanced camera support, versatile connectivity, and enhanced peripherals, perfect for multimedia, gaming, and industrial tasks.

This wiki we will show you how to install Coral M.2 Accelerator to Raspberry Pi 5 and finally we will test Coral M.2 Accelerator.

## Prepare Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi 5 8GB</th>
  <th>Raspberry Pi M.2 HAT+</th>
  <th>Coral M.2 Accelerator B+M key</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-103990663-raspberry-pi-m.2-hat_-_for-raspberry-pi-5_-font.jpg" style={{width:600, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992124-front.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Install Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## Install Python3.8

Coral software only support Python3.6-Python3.9, but the latest version of Raspberry Pi OS Python is Python3.11. So we need to install Python3.8.

### Step 1: Update system

Open a terminal and run the following commands to update the system:

```
sudo apt update
sudo apt full-upgrade
```

### Step 2: Install requirements

Open a terminal and run the following commands to install the required packages:

```
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim
```

### Step 3: Download Python3.8

Open a terminal and run the following commands to download Python3.8:

```
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
```

### Step 4: Install Python3.8

Open a terminal and run the following commands to install Python3.8:

```
sudo tar zxf Python-3.8.0.tgz
cd Python-3.8.0
sudo ./configure --enable-optimizations
sudo make -j 4
sudo make altinstall
cd ..
```

### Step 5: Check Python3.8

Open a terminal and run the following commands to check Python3.8:

```
python3.8 -V
```

The result should be:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/Python3.8.png" alt="pir" width={1000} height="auto"/></p>

### Step 6: Create a virtual environment with Python3.8

```
python3.8 -m venv coral_venv
```

## Configure Hardware Settings

Open a terminal and run the following commands to open ```config.txt```:

```
sudo nano /boot/firmware/config.txt
```

And then add the following text to ```config.txt```:

```
[all]
# Enable the PCIe External connector.
dtparam=pciex1
kernel=kernel8.img
# Enable Pineboards Hat Ai
dtoverlay=pineboards-hat-ai
```

Save and close the file by pressing CTRL+X, then Y to confirm. And then reboot the system.

```
sudo reboot
```

Check the kernel:

Open a terminal and run the following commands to check the kernel:

:::note
Make sure your kernel version 6.6.30 or higher
:::

```
uname -a
```

## Install the PCIe Driver and Edge TPU Runtime

### Step 1: Enter the virtual environment

```
source coral_venv/bin/activate
```

### Step 2: Install Edge TPU Runtime

Add the Google Coral Edge TPU package repository

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt-get update
```

Install necessary packages and Edge TPU Runtime

```
sudo apt-get install cmake libedgetpu1-std devscripts debhelper dkms dh-dkms
```

### Step 3: Install the PCIe driver

```
git clone https://github.com/google/gasket-driver.git
cd gasket-driver
sudo debuild -us -uc -tc -b
cd ..
sudo dpkg -i gasket-dkms_1.0-18_all.deb
```

## Set Up the udev Rule Add a udev rule to manage device permissions

open a terminal and run the following commands to set up the udev rule:

```
sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

sudo groupadd apex

sudo adduser $USER apex

sudo reboot

```

## Check Edge TPU

```
lspci -nn | grep 089a
```

The result should be:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_driver.png" alt="pir" width={1000} height="auto"/></p>

```
ls /dev/apex_0
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_TPU.png" alt="pir" width={1000} height="auto"/></p>

## Install the PyCoral library and test the Edge TPU

### Step 1: Install the PyCoral library

```
source coral_venv/bin/activate
pip install --upgrade pip
python3 -m pip install --extra-index-url https://google-coral.github.io/py-repo/ pycoral~=2.0
```

### Step 2: Test the Edge TPU

Install resources for the example:

```
mkdir coral && cd coral
git clone https://github.com/google-coral/pycoral.git
cd pycoral
bash examples/install_requirements.sh classify_image.py
```

Test the Edge TPU:

```
python3 examples/classify_image.py \
--model test_data/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels test_data/inat_bird_labels.txt \
--input test_data/parrot.jpg
```

The result should be:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/coral_result.png" alt="pir" width={1000} height="auto"/></p>

## Result

We have successfully installed the M.2 Coral accelerator on a Raspberry Pi 5 and tested the Edge TPU. We also ran the YOLOv8s model on the Coral M.2 Accelerator with int8 quantization, using an input size of 640x640 and a batch size of 1. The inference time is approximately 800-1000ms, which translates to around 1.1 frames per second (FPS).

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/4c8UX06d9Tg" title="Raspberry Pi AI: YOLOv8s Object Detection with Int8 Format Using M.2 Coral Accelerator on RPi 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
