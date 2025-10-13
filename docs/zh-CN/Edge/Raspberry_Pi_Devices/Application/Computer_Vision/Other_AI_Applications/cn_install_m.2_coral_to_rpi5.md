---
description: 本wiki演示如何将M.2 coral安装到rpi5并测试coral。
title: 将M.2 Coral安装到Raspberry Pi 5
keywords:
  - Edge
  - rpi5
  - M.2 coral
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/install_m2_coral_to_rpi5
last_update:
  date: 07/19/2024
  author: Jiahao

no_comments: false # for Disqus
---

# 将M.2 Coral安装到Raspberry Pi 5

## 介绍

[Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) 双Edge TPU是一个M.2模块，为具有可用M.2 E-key插槽的现有系统和产品带来两个Edge TPU协处理器。

[Raspberry Pi第五代旗舰开发计算机](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)配备强大的2.4GHz 64位四核Arm处理器和800MHz VideoCore VII GPU，提供令人印象深刻的图形性能。它提供先进的摄像头支持、多功能连接和增强的外设，非常适合多媒体、游戏和工业任务。

本wiki将向您展示如何将Coral M.2 Accelerator安装到Raspberry Pi 5，最后我们将测试Coral M.2 Accelerator。

## 准备硬件

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 安装硬件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## 安装Python3.8

Coral软件仅支持Python3.6-Python3.9，但最新版本的Raspberry Pi OS Python是Python3.11。所以我们需要安装Python3.8。

### 步骤1：更新系统

打开终端并运行以下命令来更新系统：

```
sudo apt update
sudo apt full-upgrade
```

### 步骤 2：安装依赖

打开终端并运行以下命令来安装所需的软件包：

```
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim
```

### 步骤 3：下载 Python3.8

打开终端并运行以下命令来下载 Python3.8:

```
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
```

### 步骤 4：安装 Python3.8

打开终端并运行以下命令来安装 Python3.8:

```
sudo tar zxf Python-3.8.0.tgz
cd Python-3.8.0
sudo ./configure --enable-optimizations
sudo make -j 4
sudo make altinstall
cd ..
```

### 步骤 5：检查 Python3.8

打开终端并运行以下命令来检查 Python3.8:

```
python3.8 -V
```

结果应该为：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/Python3.8.png" alt="pir" width={1000} height="auto"/></p>

### 步骤 6：使用 Python3.8 创建虚拟环境

```
python3.8 -m venv coral_venv
```

## 配置硬件设置

打开终端并运行以下命令来打开 ```config.txt```：

```
sudo nano /boot/firmware/config.txt
```

然后将以下文本添加到```config.txt```中：

```
[all]
# Enable the PCIe External connector.
dtparam=pciex1
kernel=kernel8.img
# Enable Pineboards Hat Ai
dtoverlay=pineboards-hat-ai
```

通过按 CTRL+X 保存并关闭文件，然后按 Y 确认。之后重启系统。

```
sudo reboot
```

检查内核：

打开终端并运行以下命令来检查内核：

:::note
确保您的内核版本为 6.6.30 或更高版本
:::

```
uname -a
```

## 安装 PCIe 驱动程序和 Edge TPU 运行时

### 步骤 1: 进入虚拟环境

```
source coral_venv/bin/activate
```

### 步骤 2: 安装 Edge TPU 运行时

添加 Google Coral Edge TPU 软件包仓库

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt-get update
```

安装必要的软件包和 Edge TPU 运行时

```
sudo apt-get install cmake libedgetpu1-std devscripts debhelper dkms dh-dkms
```

### 步骤 3: 安装 PCIe 驱动程序

```
git clone https://github.com/google/gasket-driver.git
cd gasket-driver
sudo debuild -us -uc -tc -b
cd ..
sudo dpkg -i gasket-dkms_1.0-18_all.deb
```

## 设置 udev 规则 添加 udev 规则来管理设备权限

打开终端并运行以下命令来设置 udev 规则：

```
sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

sudo groupadd apex

sudo adduser $USER apex

sudo reboot

```

## 检查 Edge TPU

```
lspci -nn | grep 089a
```

结果应该为：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_driver.png" alt="pir" width={1000} height="auto"/></p>

```
ls /dev/apex_0
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_TPU.png" alt="pir" width={1000} height="auto"/></p>

## 安装 PyCoral 库并测试 Edge TPU

### 步骤 1：安装 PyCoral 库

```
source coral_venv/bin/activate
pip install --upgrade pip
python3 -m pip install --extra-index-url https://google-coral.github.io/py-repo/ pycoral~=2.0
```

### 步骤 2: 测试 Edge TPU

为示例安装 retranslations：

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

结果应该是：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/coral_result.png" alt="pir" width={1000} height="auto"/></p>

## 结果

我们已经成功在树莓派 5 上安装了 M.2 Coral 加速器并测试了 Edge TPU。我们还在 Coral M.2 加速器上运行了 YOLOv8s 模型，使用 int8 量化，输入尺寸为 640x640，批处理大小为 1。推理时间约为 800-1000ms，相当于大约 1.1 帧每秒（FPS）。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/4c8UX06d9Tg" title="Raspberry Pi AI: YOLOv8s Object Detection with Int8 Format Using M.2 Coral Accelerator on RPi 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
