---
description: Frigate is an open-source NVR (Network Video Recorder) with Realtime Object Detection for IP cameras. In this guide, we'll walk through the steps to deploy Frigate on an NVIDIA Jetson device.
title: Deploy Frigate On Jetson 
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /deploy_frigate_on_jetson
last_update:
  date: 08/29/2024
  author: kourosh
---

# Deploy Frigate On a reComputer(NVIDIA Jetson) device

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigate is an open-source NVR (Network Video Recorder) with Realtime Object Detection for IP cameras. In this guide, we'll walk through the steps to deploy Frigate on an NVIDIA Jetson device. NVIDIA Jetson is an edge AI platform that enables efficient deployment of AI workloads. Combining Frigate with Jetson leverages hardware-accelerated machine learning to efficiently process video streams and detect objects.

Project Objectives:

- Set up a Frigate environment on an NVIDIA Jetson device for efficient video processing.
- Enable real-time object detection on video streams from multiple IP cameras.

By the end of this project, users will have a fully operational surveillance system that can detect objects in real-time, send alerts, and integrate with other smart devices. This solution not only enhances security but also ensures that processing is done locally, preserving privacy and reducing dependence on cloud services.

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## Hardware Preparation

To successfully deploy Frigate on an NVIDIA Jetson using a IP camera, you'll need to prepare the following hardware components. This section outlines the necessary equipment and provides brief descriptions to help you get started.

### 1. NVIDIA Jetson Device

An NVIDIA Jetson device serves as the central processing unit for running Frigate and performing real-time object detection. Depending on your requirements and budget, you can choose from several models:

- Jetson Nano: A cost-effective option with sufficient processing power for small-scale surveillance setups with a few cameras.
- Jetson Xavier NX: Offers more power and can handle larger-scale deployments or more complex object detection tasks.
- Jetson Orin Series: The most powerful option, suitable for high-performance applications and multiple camera setups.

:::info
**Accessories Needed**:

- Power supply appropriate for the Jetson model.
- MicroSD card (for Jetson Nano and Orin) or eMMC (for Jetson Xavier NX/AGX Orin) with at least 32GB capacity.
- A cooling solution (e.g., a fan or heatsink) to ensure optimal operating temperatures.
Monitor, keyboard, and mouse for initial setup.

:::

### 2. IP Camera

IP cameras provide high-quality video feeds essential for effective object detection. You will need at least one Dahua IP camera compatible with RTSP (Real-Time Streaming Protocol), which allows Frigate to receive video streams.

### 3. Summary of Required Hardware

- Jetson Device: Jetson Nano, Xavier NX, or Orin series
- IP Camera: Compatible with RTSP
- MicroSD card/eMMC: At least 32GB (for Jetson setup)
- Power Supply and Cooling: For Jetson device
- Network Equipment: Ethernet cables
- Optional: External storage, PoE injector/switch

## Software Preparation

Setting up the software environment is a crucial step for deploying Frigate on your NVIDIA Jetson device. This section outlines the necessary software components and installation steps to ensure your system is ready for running Frigate and processing video streams from the IP camera.

### 1. Operating System(Jetpack)

Ensure your NVIDIA Jetson device is running the latest version of the NVIDIA JetPack SDK. JetPack provides a Linux-based operating system along with essential libraries and tools for AI development.

- Download JetPack SDK: Visit the NVIDIA JetPack Downloads page to download the latest JetPack SDK compatible with your Jetson device (I used Jetpack 5.1.3 with Xavier NX).

- Flash the Jetson Device: Use the SDK Manager to flash the JetPack image onto the Jetson device's SD card (for Jetson Nano) or eMMC (for Jetson Xavier NX/AGX Orin).

For Seeed Jetson-powered devices flashing guides, please refer to the below links:

- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. System Updates and Dependencies

After setting up the operating system, perform a system update and install required dependencies.

:::info
**Update the System: Open a terminal on the Jetson device and run:**

```
sudo apt-get update && sudo apt-get upgrade
```

**Install Additional Dependencies: Install common dependencies required for building and running software on Jetson:**

```
sudo apt-get install -y \
python3-pip \
python3-dev \
python3-venv \
build-essential \
libssl-dev \
libffi-dev \
git
```

:::

### 2. Docker Installation

Frigate runs as a Docker container. Install Docker on the Jetson device using the following steps:

##### 1. install docker

* Install Docker's dependencies:

```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```

* Add Docker’s official GPG key:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

* Add Docker repository:

```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

* install docker:

```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Docker Compose Installation

Docker Compose is used to define and run multi-container Docker applications, such as Frigate and handle yaml files to run docker containers.

- Install Docker Compose: Use the following command to install Docker Compose:

```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```

* Verify Docker Compose Installation:

```
docker-compose --version
```

##### 3. NVIDIA Container Toolkit

For installing the Nvidia container toolkit you can go to linke in the reference. based on your system you can go though the following installation guidelines. you need to install it in order to using GPU in the docker container.

##### 4. Frigate Configuration

* Set Up Configuration Directory: Create a directory to hold Frigate configuration files:

```
mkdir ~/frigate
cd ~/frigate
```

* Create Configuration Files: You will need to create a docker-compose.yml and a config.yml file within the ~/frigate directory. These files will define how Frigate is deployed and how it connects to your IP cameras. docker-compose.yml Defines the Docker services for Frigate and config.yml: Specifies Frigate settings such as camera streams, detection settings, and MQTT integration.

By completing these steps, your NVIDIA Jetson device will be fully prepared to run Frigate, and you will be ready to proceed with setting deploying Frigate and integrating your IP camera for real-time object detection.

## Getting Started

Now that you have your hardware prepared and the software environment set up, it's time to deploy Frigate on your NVIDIA Jetson device and connect it to your Dahua IP camera. Follow these steps to get started with your deployment:

### 1. Pull Frigate docker image

In the Frigate website running in Docker with compose is the recommended install method.First, you need to pull the Frigate Docker image optimized for TensorRT. This image is specifically designed to leverage the GPU capabilities of NVIDIA Jetson devices for efficient object detection.

Here we are working on JP5.1.3 and the pull request is:

```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

The official docker image tags for the current stable version are:

- stable : Standard Frigate build for amd64 & RPi Optimized Frigate build for arm64
- stable-standard-arm64 : Standard Frigate build for arm64
- stable-tensorrt : Frigate build specific for amd64 devices running an nvidia GPU

The community supported docker image tags for the current stable version are:

- stable-tensorrt-jp5 : Frigate build optimized for nvidia Jetson devices running Jetpack 5
- stable-tensorrt-jp4 : Frigate build optimized for nvidia Jetson devices running Jetpack 4.6
- stable-rk : Frigate build for SBCs with Rockchip SoC
- stable-rocm : Frigate build for AMD GPUs and iGPUs

You can use each of these tags based on your deployment. but here we are working with Jetson and tensorrt and Jetpack 5.1.3 so that we need to pull 'stable-tensorrt-jp5'. this docker image contains all pakcages you need to run Frigate and do not need to install tensorrt or etc.

### 2. Prepare Frigate Configuration Files

Before starting the deployment, you need to configure Frigate to work with your specific setup, including camera streams and detection settings.

cinfig.yml file: This file will contain the configuration for Frigate, including camera settings and detection parameters. Create a new file named config.yml using a text editor, and add the following content.This configuration sets up Frigate on an NVIDIA Jetson device using TensorRT for efficient object detection from a Dahua IP camera.

```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- this will be changed to your actual camera later
    enabled: True
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: rtsp://admin:admin1234@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect

birdseye:

  enabled: True
  mode: objects
         
detectors:
  tensorrt:
    type: tensorrt
    device: 0 #This is the default, select the first GPU

model:
  path: /config/model_cache/tensorrt/yolov7-320.trt
  input_tensor: nchw
  input_pixel_format: rgb
  width: 320
  height: 320

detect:
  fps : 20
  width: 1280
  height: 720
  
objects:
  track:
    - person 
```

Key points include:

**MQTT Disabled**: MQTT integration is turned off, so Frigate will not send detection events via MQTT.

**Camera Setup**: A placeholder camera named dummy_camera is enabled, using hardware acceleration for H.264 video streams via FFmpeg. It connects to the Dahua IP camera using an RTSP URL for detection.

**Birdseye View Enabled**: Provides an overview displaying only detected objects from all camera feeds.

**TensorRT Detector**: Uses TensorRT for inference on the primary GPU, optimizing detection speed and efficiency.

**Model Details**: Specifies a TensorRT-optimized YOLOv7 model for object detection, with a 320x320 input size and RGB format.

**Detection Settings**: Processes video at 20 frames per second, with a detection resolution of 1280x720.
Object Tracking: Configured to track only people, reducing computational load and focusing on relevant detection.

### 2. Prepare docker-compose.yml File

This file defines the Frigate service and how it will be run using Docker Compose. Create a new file named docker-compose.yml in the same directory with the following content:

```
services:
  frigate:
    privileged: true
    environment:
      - YOLO_MODELS=yolov7-320
      - USE_FP16=false
    container_name: frigate
    runtime: nvidia 
    #devices:
      #- /dev/video0:/dev/video0 
    volumes:
      - /home/jetson/frigate/config:/config
      - /home/jetson/frigate/storage:/media/frigate
      #- type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

The provided code snippet appears to be a configuration for the Frigate service within a Docker Compose setup. Frigate is an open-source AI-powered video surveillance system that can be used to detect and track objects in real-time.

Here's a breakdown of the configuration:

1. **services**: This section defines the services that will be part of the Docker Compose setup.

2. **frigate**: This is the service name for the Frigate container.

3. **privileged: true**: This grants the Frigate container privileged access, which is often required for accessing hardware devices like cameras.

4. **environment**: This section sets two environment variables for the Frigate container:
   - `YOLO_MODELS=yolov7-320`: Specifies the YOLO (You Only Look Once) model to be used for object detection.
   - `USE_FP16=false`: Disables the use of 16-bit floating-point precision, which can improve performance on some hardware.

5. **container_name: frigate**: Sets the name of the Frigate container.

6. **runtime: nvidia**: Specifies the runtime environment to be used for the Frigate container, in this case, the NVIDIA runtime for GPU-accelerated processing.

7. **volumes**: Mounts the following directories:
   - `/home/jetson/frigate/config:/config`: Mounts the local configuration directory to the container's `/config` directory.
   - `/home/jetson/frigate/storage:/media/frigate`: Mounts the local storage directory to the container's `/media/frigate` directory.
   - The commented-out lines show an optional configuration to use a tmpfs (in-memory filesystem) for caching, which can help reduce wear on storage devices.

8. **ports**: Exposes the following ports:
   - `5000:5000`: Maps the container's port 5000 to the host's port 5000.
   - `8554:8554`: Maps the container's port 8554 to the host's port 8554.

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: Specifies the Docker image to be used for the Frigate container, in this case, the `stable-tensorrt-jp5` tag from the `blakeblackshear/frigate` repository on GitHub Container Registry.

This configuration sets up a Frigate service within a Docker Compose environment, providing a way to run the Frigate video surveillance system with customized settings and hardware acceleration support.

### 3. Deploy Frigate Using Docker Compose

With the configuration files set up and the Docker image pulled, you can now deploy Frigate using Docker Compose.

1. Navigate to the Frigate Directory: Make sure you are in the directory where you created the configuration files:

```
cd ~/frigate
```

2. Start Frigate with Docker Compose: Run the following command to start Frigate:

```
docker-compose up -d
```

This command starts the Frigate service in detached mode. The Docker container will now run in the background.

3. Verify Frigate is Running: Check that the Frigate container is running by using:

```
docker ps
```

4. After running docker you can see Tensorrt logs that it means Frigate is running on GPU.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)

### 4. Access the Frigate Web Interface

Once Frigate is up and running, you can access the web interface to monitor video feeds and configure settings:

1. Open a Web Browser: On a device connected to the same network as your Jetson device, open a web browser.
2. Enter the Jetson Device's IP Address: In the address bar, enter the IP address of your Jetson device followed by the port 5000 (e.g., `http://jetson-ip-address:5000` or `http://127.0.0.1:5000`).
3. View the Dashboard: The Frigate dashboard will display live video feeds from the connected Dahua IP camera(s), detection events, and configuration options.
4. Now you can check the Jetson is using GPU for detection with jtop or in frigate system. below we can see the detection part is running about 33ms for each frame.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## Troubleshooting

Some problems might encounter in the process of hardware connection, software debugging or uploading. spacially in running docker. you can use docker log to overcome the errors.

```
docker logs frigate
```

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

## References

1. [Frigate Website](https://frigate.video/)
2. [Frigate Github](https://github.com/blakeblackshear/frigate)
3. [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
