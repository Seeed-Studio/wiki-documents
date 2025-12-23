---
description: This wiki demonstrates yolov8m multistream detection benchmark on Raspberry Pi5 with hailo8. 
title: Benchmark of Multistream Inference on Raspberrypi with Hailo8
keywords:
  - Edge
  - RasberryPi 5
  - Object detecton
image: https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/raspberry_pi_ai_hat.webp
slug: /benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8
last_update:
  date: 11/21/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Benchmark of Multistream Inference on Raspberrypi 5 with Hailo8

## Introduction

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once version 8) is the popular most YOLO series of real-time pose estimation and object detection models. It builds upon the strengths of its predecessors by introducing several advancements in speed, accuracy, and flexibility. The [Hailo8](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html) is used to accelerate inference speed, featuring a 26 TOPS AI performance.

This wiki showcases benchmarking of YOLOv8m for object detection on Raspberry Pi 5 with hailo8. All tests utilize the same model (YOLOv8m), quantized to int8, with an input size of 640x640 resolution, batch size set to 8.

## Prepare Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
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

### Install AI kit on RPi5

Please refer to [this](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## Prepare software

### update the system

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Download hailo software on hailo office web

> **Note:**
you need an official Hailo account and ensure you are logged in.
Click this [link](https://hailo.ai/developer-zone/software-downloads/) download the necessary libs as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/hailo_download.png" alt="pir" width={1000} height="auto"/></p>

### Install hailort_4.19.0_arm64.deb on respberrypi5

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
If you want to use gen2,please comment dtparam=pciex1_gen=3
:::

### Install Tapps

#### Install necessary libs

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

And change the content like below, add `RaspberryPI5 = 'rpi5'`in common.py:

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

Finally `Ctrl+X` and input `Y` to save the file.

## Run multistream inference

```
sudo chmod +x multi_stream_detection.sh
./multi_stream_detection.sh --network yolov8 --num-of-sources 8 --show-fps
```

## Result

All the results are based on inference with a model input size of 640x640, batch size is 8, and a video resolution of 1280x760, which is 720p.

<div class="table-center">

| Channel Count       | PCIE Gen2 Performance | PCIE Gen3 Performance |
|---------------------|-----------------------|-----------------------|
| 1 channel stream    | 39.82FPS             | 76.99FPS             |
| 2 channels streams  | 19.86FPS             | 38.21FPS             |
| 4 channels streams  | 8.45FPS              | 16.94FPS             |
| 8 channels streams  | 3.85FPS              | 8.15FPS              |
| 12 channels streams | 2.94FPS              | 5.43FPS              |

</div>

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/CHxg7qWTMYw" title="Multistream Inference on Hailo8 with RPi5 AI Box" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
