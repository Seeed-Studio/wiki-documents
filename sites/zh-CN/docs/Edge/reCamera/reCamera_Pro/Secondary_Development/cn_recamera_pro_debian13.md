---
description: 将 Debian 13 镜像烧录到 reCamera Pro
title: 将 Debian 13 镜像烧录到 reCamera Pro
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_debian/
---

## 介绍

reCamera Pro 由 RV1126B 芯片驱动，提供 2 GB 或 4 GB 内存版本。其出厂预装 Buildroot 固件，便于快速开始进行 AI 推理。本页面为需要在开发和部署上获得更高灵活性的用户提供 Debian 13 镜像。

烧录 Debian 13 镜像后，你可以使用 CMake 编译自己的应用程序，使用 `apt` 安装所需依赖，并运行 Docker 容器。该镜像兼容 Seeed 的出厂驱动，无需修改设备树。摄像头、麦克风、扬声器和 Wi-Fi 均可正常工作；不支持蓝牙。

:::warning
该固件目前为实验性固件。Seeed 目前不对其进行维护，仅作为额外的开发选项提供。
:::

## 下载

### 下载镜像

[从 Google Drive 下载 Debian 13 镜像](https://drive.google.com/file/d/1qLlbsgUB88qC2xBn4-Decl8XBZgr7EI/view?usp=drive_link)。

### 下载烧录工具和驱动

本指南在 Windows 上使用 SocToolKit 来烧录镜像。请下载以下文件：

- [驱动 (DriverAssistant_v5.12.zip)](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link)
- [烧录工具 (SocToolKit-window.zip)](https://drive.google.com/file/d/1wFMHF_KSmbTPvuaAefqutDP-DPQ_NONp/view?usp=drive_link)

## 烧录前准备

### 安装驱动

1. 解压下载好的 `DriverAssistant_v5.12.zip` 压缩包。
2. 打开解压后的目录并运行 `DriverInstall.exe`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image.png" /></div>

3. 点击 **Driver Install**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-1.png" /></div>

出现如下界面表示驱动安装成功。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-2.png" /></div>

### 配置 SocToolKit

1. 解压 `SocToolKit-window.zip`，打开解压后的目录并运行 `SocToolKit.exe`。
2. 在工具中选择 **RV1126B** 芯片。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-3.png" /></div>

3. 解压 `recamera_pro_debian13_img.tar.gz`。
4. 在 SocToolKit 中右键单击并选择右键菜单中的最后一项。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-5.png" /></div>

5. 在解压后的固件目录中选择 `env.img` 文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-6.png" /></div>

6. 在确认对话框中点击 **Yes**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-7.png" /></div>

7. 选中 `rootfs` 条目，点击其右侧的省略号（`...`）。将其镜像文件替换为解压后的固件目录中的 `rootfs_debian_clean.img`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-11.png" /></div>

### 将 reCamera Pro 置于 Loader 模式

1. 使用 USB 线将 reCamera Pro 上的 USB 3.0 接口连接到 Windows 电脑，然后通过其 DC 口为设备供电。
2. 在设备侧面找到 `BOOT` 和 `RESET` 小孔。
3. 按住 `BOOT`，然后短按 `RESET` 以重启设备。
4. 在按下 `RESET` 后继续按住 `BOOT` 约 5 秒，然后松开。设备将进入 Loader 模式。

此时 SocToolKit 应该会显示设备已被检测到。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-8.png" /></div>

### 烧录固件

在 SocToolKit 检测到设备并加载固件后，选择除 `userdata` 之外的所有分区。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-12.png" /></div>

点击 **Download** 开始烧录固件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-13.png" /></div>

烧录完成后，界面应类似如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-14.png" /></div>

## 关于新固件

烧录完成后，使用以太网线将设备连接到你的网络。该镜像不支持原有的 USB-C 虚拟网卡。你可以在路由器或 Wi-Fi 管理界面中找到设备的 IP 地址。镜像中已启用 SSH，因此你可以直接通过 SSH 登录。如果无法连接网络，请使用波特率为 `1500000` 的 UART 串口控制台。

系统仅提供 `root` 用户，默认密码为 `123123`。首次登录后请立即修改密码：

```bash
passwd
```

然后完成以下系统配置步骤。

## 临时配置 HTTP 代理

如果你在访问网络时需要 HTTP 代理（例如使用 `apt` 时），可以临时设置以下环境变量。如果不使用代理，请跳过此步骤。将示例地址和端口替换为你的代理服务器地址和端口。

```bash
export http_proxy="http://192.168.4.78:7890"
export https_proxy="http://192.168.4.78:7890"
# Optional: bypass the proxy for local addresses
export no_proxy="localhost,127.0.0.1,::1,192.168.0.0/16"
```

## 配置时间

首次启动时，系统时间可能被设置为 1970 年，这会导致 SSL 证书校验失败。由于系统未通过 systemd 配置自动时间同步，请在更新软件包索引前手动设置正确时间：

```bash
date -s "2026-09-02 15:20:00"

apt update
```

### 配置摄像头方向

首先，找到支持翻转控制的 sensor 节点：

```bash
for dev in /dev/v4l-subdev*; do
    echo
    echo "========== $dev =========="
    v4l2-ctl -d "$dev" --list-ctrls 2>&1 | \
        grep -Ei 'flip|mirror|horizontal|vertical|rotate'
done
```

通常你会看到类似如下的输出：

```bash
========== /dev/v4l-subdev2 ==========
                horizontal_flip 0x00980914 (bool)   : default=0 value=1
                  vertical_flip 0x00980915 (bool)   : default=0 value=1
              vertical_blanking 0x009e0901 (int)    : min=90 max=63375 step=1 default=90 value=90
            horizontal_blanking 0x009e0902 (int)    : min=4294965822 max=4294965822 step=1 default=4294965822 value=-1474 flags=read-only
```

默认情况下，水平和垂直翻转可能都已启用。请根据前面输出中显示的设备节点调整命令；本示例使用 `/dev/v4l-subdev2`：

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --set-ctrl=horizontal_flip=0,vertical_flip=0
```

验证设置：

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --get-ctrl=horizontal_flip,vertical_flip
```

预期输出：

```bash
horizontal_flip: 0
vertical_flip: 0
```

## 测试摄像头

使用 V4L2 采集一帧 NV12 原始图像，然后使用 FFmpeg 将其转换为 JPEG：

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

命令执行完成后，在 `/tmp/camera.jpg` 查看经过 ISP 处理且方向正确的 JPEG 图像。

## 配置麦克风和扬声器

安装所需依赖：

```bash
apt install ffmpeg alsa-utils
```

查看可用的录音和播放设备：

```bash
arecord -l

aplay -l
```

## 配置 Docker

安装 Docker：

```bash
apt install docker-cli
```

确认 Docker 是否正确安装：

```bash
command -v docker
docker --version
dockerd --version
```

预期输出类似于：

```bash
/usr/bin/docker
Docker version 26.1.5+dfsg1, build a72d7cd
Docker version 26.1.5+dfsg1, build 411e817
```

### 配置 Docker

创建 Docker 守护进程配置文件，用于设置数据目录并禁用默认网络：

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

停止 Docker 并删除残留运行时文件：

```bash
service docker stop 2>/dev/null || true

rm -f /var/run/docker.pid
rm -f /var/run/docker.sock
rm -rf /var/run/docker/containerd
```

重启 Docker：

```bash
service docker restart
```

### 测试 Docker

确认 Docker 守护进程正在运行：

```bash
ps aux | grep '[d]ockerd'
```

运行测试容器：

```bash
docker run --rm hello-world
```

如果 Docker 配置正确，输出中会包含：

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

## 安装 GStreamer 工具并采集摄像头数据

安装所需工具：

```bash
apt update

apt install -y \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-base \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-libav
```

使用以下命令捕获一帧并将其保存为 JPEG 图像：

```bash
gst-launch-1.0 -e \
  v4l2src device=/dev/video12 num-buffers=1 \
  ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 \
  ! videoconvert \
  ! jpegenc quality=95 \
  ! filesink location=/tmp/camera.jpg
```

命令执行完成后，在 `/tmp/camera.jpg` 查看经过 ISP 处理的图像。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供不同层级的支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
