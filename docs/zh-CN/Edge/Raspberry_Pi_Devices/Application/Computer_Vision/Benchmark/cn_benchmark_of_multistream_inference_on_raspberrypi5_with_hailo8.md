---
description: 这个wiki演示了在配备hailo8的Raspberry Pi5上进行yolov8m多流检测基准测试。
title: 在配备Hailo8的Raspberry Pi上进行多流推理的基准测试
keywords:
  - Edge
  - RasberryPi 5
  - Object detecton
image: https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/raspberry_pi_ai_hat.webp
slug: /cn/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8
last_update:
  date: 11/21/2024
  author: Jiahao

no_comments: false # for Disqus
---

# 在Raspberry Pi 5配备Hailo8上进行多流推理的基准测试

## 介绍

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once第8版）是最受欢迎的YOLO系列实时姿态估计和目标检测模型。它在前代产品的基础上，在速度、准确性和灵活性方面引入了多项改进。[Hailo8](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html)用于加速推理速度，具有26 TOPS的AI性能。

这个wiki展示了在配备hailo8的Raspberry Pi 5上进行YOLOv8m目标检测的基准测试。所有测试都使用相同的模型（YOLOv8m），量化为int8，输入尺寸为640x640分辨率，批处理大小设置为8。

## 准备硬件

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 在RPi5上安装AI套件

请参考[这里](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## 准备软件

### 更新系统

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### 在 Hailo 官方网站下载 Hailo 软件

> **注意：**
您需要一个官方 Hailo 账户并确保已登录。
点击此[链接](https://hailo.ai/developer-zone/software-downloads/)下载以下必要的库：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/hailo_download.png" alt="pir" width={1000} height="auto"/></p>

### 在树莓派5上安装 hailort_4.19.0_arm64.deb

```
sudo dpkg -i hailort_4.19.0_arm64.deb 

sudo reboot

```

### Install dkms

```
sudo apt-get install dkms
```

### Install hailort-pcie-driver_4.19.0_all.deb

```
sudo dpkg -i hailort-pcie-driver_4.19.0_all.deb 
sudo reboot

```

### Create and activate a Python virtual environment

```
python -m venv hailo_env
source hailo_env/bin/activate
```

### Install hailort-4.19.0-cp311-cp311-linux_aarch64.whl

```
pip install hailort-4.19.0-cp311-cp311-linux_aarch64.whl 
```

### Check if the software is installed

```
hailortcli fw-control identify
```

The result is show as bellow:

```
ain@pi5-hailo:~ $ hailortcli fw-control identify
Executing on device: 0000:01:00.0
Identifying board
Control Protocol Version: 2
Firmware Version: 4.19.0 (release,app,extended context switch buffer)
Logger Version: 0
Board Name: Hailo-8
Device Architecture: HAILO8
Serial Number: HLLWM2B225100548
Part Number: HM218B1C2FAE
Product Name: HAILO-8 AI ACC M.2 M KEY MODULE EXT TEMP
```

### Set pcie to gen2/gen3(gen3 is faster than gen2)

Add following text to ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
如果您想使用 gen2，请注释掉 dtparam=pciex1_gen=3
:::

### 安装 Tapps

#### 安装必要的库

```
sudo apt-get install -y rsync ffmpeg x11-utils python3-dev python3-pip python3-setuptools python3-virtualenv python-gi-dev libgirepository1.0-dev gcc-12 g++-12 cmake git libzmq3-dev

sudo apt-get install -y libopencv-dev python3-opencv

sudo apt-get install -y libcairo2-dev libgirepository1.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio gcc-12 g++-12 python-gi-dev

sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0
```

#### Set hailo_pci force_desc_page_size

```
sudo nano /etc/modprobe.d/hailo_pci.conf
```

And then input the following content.

```
options hailo_pci force_desc_page_size=4096
```

Finally, press `Ctrl+X`, type `Y`, and press `Enter` to save the file

And then reboot the raspberrypi5

```
sudo reboot
```

#### Download Tapps

```
git clone --depth 1 https://github.com/hailo-ai/tappas.git
```

#### Download hailort to tapps

```
cd tappas
mkdir hailort
git clone https://github.com/hailo-ai/hailort.git hailort/sources
```

#### Change common.py

```
nano downloader/common.py
```

然后修改内容如下，在 common.py 中添加 `RaspberryPI5 = 'rpi5'`：

```
class Platform(Enum):
    X86 = 'x86'
    ARM = 'arm'
    IMX8 = 'imx8'
    Rockchip = 'rockchip'
    RaspberryPI = 'rpi'
    RaspberryPI5 = 'rpi5'
    
    ANY = 'any'

    def __str__(self):
        return self.value
```

#### Install tappas

```
./install.sh --skip-hailort --target-platform rpi5

```

#### Change batch size to 8

```
cd ./apps/h8/gstreamer/general/multistream_detection/
nano multi_stream_detection.sh
```

Add `readonly DEFAULT_BATCH_SIZE=8` to the 14 line as follows:

```
readonly DEFAULT_NETWORK_NAME="yolov5"
readonly DEFAULT_BATCH_SIZE=8
readonly MAX_NUM_OF_DEVICES=4
```

Add `batch_size=$DEFAULT_BATCH_SIZE` to the 19 line as follows:

```
network_name=$DEFAULT_NETWORK_NAME
batch_size=$DEFAULT_BATCH_SIZE
num_of_src=12
```

Add `batch-size=$batch_size` to the 154 line as follows:

```
queue name=hailo_pre_infer_q_0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
hailonet hef-path=$hef_path batch-size=$batch_size device-count=$device_count scheduling-algorithm=0 nms-score-threshold=0.3 nms-iou-threshold=0.45 output-format-type=HAILO_FORMAT_TYPE_FLOAT32 ! \
queue name=hailo_postprocess0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
```

最后按 `Ctrl+X` 并输入 `Y` 来保存文件。

## 运行多流推理

```
sudo chmod +x multi_stream_detection.sh
./multi_stream_detection.sh --network yolov8 --num-of-sources 8 --show-fps
```

## 结果

所有结果都基于模型输入尺寸为 640x640、批处理大小为 8、视频分辨率为 1280x760（即 720p）的推理。

<div class="table-center">

| 通道数量            | PCIE Gen2 性能       | PCIE Gen3 性能       |
|---------------------|-----------------------|-----------------------|
| 1 通道流            | 39.82FPS             | 76.99FPS             |
| 2 通道流            | 19.86FPS             | 38.21FPS             |
| 4 通道流            | 8.45FPS              | 16.94FPS             |
| 8 通道流            | 3.85FPS              | 8.15FPS              |
| 12 通道流           | 2.94FPS              | 5.43FPS              |

</div>

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/CHxg7qWTMYw" title="Multistream Inference on Hailo8 with RPi5 AI Box" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
