---
description: Flash the Debian 13 image to reCamera Pro
title: Flash the Debian 13 Image to reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - Debian 13
slug: /recamera_pro_debian
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/04/2026
  author: yylin
createdAt: '2026-08-04'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/recamera_pro_debian/
---

## Introduction

reCamera Pro is powered by the RV1126B chip and is available with 2 GB or 4 GB of memory. It ships with Buildroot firmware for a quick start with AI inference. This page provides a Debian 13 image for users who need more flexibility for development and deployment.

After flashing the Debian 13 image, you can compile your own applications with CMake, install required dependencies with `apt`, and run Docker containers. The image is compatible with Seeed's factory drivers and requires no device tree changes. The camera, microphone, speaker, and Wi-Fi work as expected; Bluetooth is not supported.

:::warning
This firmware is currently experimental. Seeed does not maintain it at this time; it is provided as an additional development option.
:::

## Downloads

### Download the Image

[Download the Debian 13 image from Google Drive](https://drive.google.com/file/d/1qLlbsgUB88qC2xBn4-Decl8XBZgr7EI/view?usp=drive_link).

### Download the Flashing Tool and Driver

This guide uses SocToolKit on Windows to flash the image. Download the following files:

- [Driver (DriverAssistant_v5.12.zip)](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link)
- [Flashing tool (SocToolKit-window.zip)](https://drive.google.com/file/d/1wFMHF_KSmbTPvuaAefqutDP-DPQ_NONp/view?usp=drive_link)

## Prepare for Flashing

### Install the Driver

1. Extract the downloaded `DriverAssistant_v5.12.zip` archive.
2. Open the extracted directory and run `DriverInstall.exe`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image.png" /></div>

3. Click **Driver Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-1.png" /></div>

The following screen indicates that the driver was installed successfully.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-2.png" /></div>

### Configure SocToolKit

1. Extract `SocToolKit-window.zip`, open the extracted directory, and run `SocToolKit.exe`.
2. Select the **RV1126B** chip in the tool.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-3.png" /></div>

3. Extract `recamera_pro_debian13_img.tar.gz`.
4. In SocToolKit, right-click and select the last item in the context menu.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-5.png" /></div>

5. Select the `env.img` file in the extracted firmware directory.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-6.png" /></div>

6. Click **Yes** in the confirmation dialog.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-7.png" /></div>

7. Select the `rootfs` entry and click the ellipsis (`...`) on its right. Replace its image file with `rootfs_debian_clean.img` from the extracted firmware directory.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-11.png" /></div>

### Put reCamera Pro into Loader Mode

1. Connect the USB 3.0 port on reCamera Pro to your Windows computer using a USB cable, then power the device through its DC port.
2. Locate the `BOOT` and `RESET` pinholes on the side of the device.
3. Press and hold `BOOT`, then briefly press `RESET` to restart the device.
4. Keep holding `BOOT` for approximately 5 seconds after pressing `RESET`, then release it. The device enters Loader mode.

SocToolKit should now indicate that the device has been detected.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-8.png" /></div>

### Flash the Firmware

After SocToolKit detects the device and loads the firmware, select all partitions except `userdata`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-12.png" /></div>

Click **Download** to start flashing the firmware.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-13.png" /></div>

When flashing is complete, the interface should look like the following:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-14.png" /></div>

## About the New Firmware

After flashing, connect the device to your network using an Ethernet cable. This image does not support the original USB-C virtual network adapter. You can find the device IP address in your router or Wi-Fi management interface. SSH is enabled in the image, so you can log in through SSH directly. If a network connection is unavailable, use the UART serial console at a baud rate of `1500000`.

The system provides only the `root` user, with the default password `123123`. Change the password immediately after the first login:

```bash
passwd
```

Then complete the following system configuration steps.

## Temporarily Configure an HTTP Proxy

If you need an HTTP proxy to access the network, for example when using `apt`, set the following environment variables temporarily. Skip this step if you do not use a proxy. Replace the example address and port with those of your proxy server.

```bash
export http_proxy="http://192.168.4.78:7890"
export https_proxy="http://192.168.4.78:7890"
# Optional: bypass the proxy for local addresses
export no_proxy="localhost,127.0.0.1,::1,192.168.0.0/16"
```

## Configure the Time

On the first boot, the system time may be set to 1970, which causes SSL certificate validation to fail. Since the system does not have automatic time synchronization configured through systemd, set the correct time manually before updating the package index:

```bash
date -s "2026-09-02 15:20:00"

apt update
```

### Configure Camera Orientation

First, find the sensor node that supports flip controls:

```bash
for dev in /dev/v4l-subdev*; do
    echo
    echo "========== $dev =========="
    v4l2-ctl -d "$dev" --list-ctrls 2>&1 | \
        grep -Ei 'flip|mirror|horizontal|vertical|rotate'
done
```

You will typically see output similar to the following:

```bash
========== /dev/v4l-subdev2 ==========
                horizontal_flip 0x00980914 (bool)   : default=0 value=1
                  vertical_flip 0x00980915 (bool)   : default=0 value=1
              vertical_blanking 0x009e0901 (int)    : min=90 max=63375 step=1 default=90 value=90
            horizontal_blanking 0x009e0902 (int)    : min=4294965822 max=4294965822 step=1 default=4294965822 value=-1474 flags=read-only
```

By default, both horizontal and vertical flipping may be enabled. Adjust the command according to the device node shown in the previous output; this example uses `/dev/v4l-subdev2`:

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --set-ctrl=horizontal_flip=0,vertical_flip=0
```

Verify the settings:

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --get-ctrl=horizontal_flip,vertical_flip
```

Expected output:

```bash
horizontal_flip: 0
vertical_flip: 0
```

## Test the Camera

Use V4L2 to capture one NV12 raw frame, then use FFmpeg to convert it to JPEG:

```bash
v4l2-ctl -d /dev/video12 \
  --set-fmt-video=width=3840,height=2160,pixelformat=NV12 \
  --stream-mmap=4 \
  --stream-count=1 \
  --stream-to=/tmp/frame.nv12

ffmpeg \
  -f rawvideo \
  -pixel_format nv12 \
  -video_size 3840x2160 \
  -i /tmp/frame.nv12 \
  -frames:v 1 \
  -q:v 2 \
  -y /tmp/camera.jpg
```

When the command finishes, view the ISP-processed, correctly oriented JPEG image at `/tmp/camera.jpg`.

## Configure the Microphone and Speaker

Install the required dependencies:

```bash
apt install ffmpeg alsa-utils
```

View the available recording and playback devices:

```bash
arecord -l

aplay -l
```

## Configure Docker

Install Docker:

```bash
apt install docker-cli
```

Confirm that Docker is installed correctly:

```bash
command -v docker
docker --version
dockerd --version
```

Expected output is similar to:

```bash
/usr/bin/docker
Docker version 26.1.5+dfsg1, build a72d7cd
Docker version 26.1.5+dfsg1, build 411e817
```

### Configure Docker

Create the Docker daemon configuration file to set the data directory and disable the default network:

```bash
cat >/etc/docker/daemon.json <<'EOF'
{
  "data-root": "/userdata/docker",
  "storage-driver": "overlay2",
  "iptables": false,
  "bridge": "none"
}
EOF
```

Stop Docker and remove leftover runtime files:

```bash
service docker stop 2>/dev/null || true

rm -f /var/run/docker.pid
rm -f /var/run/docker.sock
rm -rf /var/run/docker/containerd
```

Restart Docker:

```bash
service docker restart
```

### Test Docker

Confirm that the Docker daemon is running:

```bash
ps aux | grep '[d]ockerd'
```

Run a test container:

```bash
docker run --rm hello-world
```

If Docker is configured correctly, the output includes:

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## Install GStreamer Tools and Capture Camera Data

Install the required tools:

```bash
apt update

apt install -y \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-base \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-libav
```

Use the following command to capture one frame and save it as a JPEG image:

```bash
gst-launch-1.0 -e \
  v4l2src device=/dev/video12 num-buffers=1 \
  ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 \
  ! videoconvert \
  ! jpegenc quality=95 \
  ! filesink location=/tmp/camera.jpg
```

When the command finishes, view the ISP-processed image at `/tmp/camera.jpg`.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different levels of support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
