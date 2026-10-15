---
description: Reachy Mini全面GStreamer安装指南，涵盖Linux、macOS和Windows上的GStreamer安装，包括用于视频和音频流的WebRTC插件设置。
title: GStreamer安装
slug: /reachymini_sdk_gstreamer-installation
keywords:
  - gstreamer
  - installation
  - webrtc
  - video streaming
  - audio streaming
  - linux
  - macos
  - windows
  - dependencies
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_sdk_gstreamer-installation/
---

# 📡 GStreamer安装

> 本指南将帮助您安装[GStreamer](https://gstreamer.freedesktop.org)以接收来自Reachy Mini的视频和音频流。请参阅[媒体架构](/reachymini_sdk_media-architecture)了解如何根据配置本地或远程访问流。

Windows和macOS平台提供了Python wheels，并包含在项目依赖项中。一切都应该开箱即用。Linux用户需要手动安装。

<div align="center">

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ⚠️ 手动安装 | ✅ Python wheels | ✅ Python wheels |

</div>

## 🔧 安装GStreamer

<hfoptions id="gstreamer-install">
<hfoption id="Linux">

### 第1步：安装GStreamer

**对于基于Ubuntu/Debian的系统：**

在您的终端中运行：

```bash
sudo apt-get update
sudo apt-get install -y \
    libgstreamer-plugins-bad1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    libgstreamer1.0-dev \
    libglib2.0-dev \
    libssl-dev \
    libgirepository1.0-dev \
    libcairo2-dev \
    libportaudio2 \
    libnice10 \
    gstreamer1.0-plugins-good \
    gstreamer1.0-alsa \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-nice \
    python3-gi \
    python3-gi-cairo
```

**仅适用于Ubuntu 22.04：** 默认GStreamer版本太旧。需要Gstreamer >=1.22。您需要添加PPA以获取GStreamer 1.24.x：

```bash
sudo add-apt-repository ppa:savoury1/multimedia
sudo apt update
sudo apt install \
    libgstreamer1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    libgstreamer-plugins-good1.0-dev \
    libgstreamer-plugins-bad1.0-dev
```

验证您有正确的版本：
```bash
pkg-config --modversion gstreamer-1.0
# 应该输出1.24.x或更高
```

### 第2步：安装Rust

在Linux上，WebRTC插件默认未启用，需要从Rust源代码手动编译。使用`rustup`从命令行安装Rust：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### 第3步：构建和安装WebRTC插件

要构建和安装WebRTC插件，请运行以下命令：

```bash
# 克隆GStreamer Rust插件仓库
git clone https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs.git
cd gst-plugins-rs
git checkout 0.14.1

# 安装cargo-c构建工具
cargo install cargo-c

# 创建安装目录
sudo mkdir -p /opt/gst-plugins-rs
sudo chown $USER /opt/gst-plugins-rs

# 构建和安装WebRTC插件（这可能需要几分钟）
cargo cinstall -p gst-plugin-webrtc --prefix=/opt/gst-plugins-rs --release

# 将插件路径添加到您的环境
echo 'export GST_PLUGIN_PATH=/opt/gst-plugins-rs/lib/x86_64-linux-gnu:$GST_PLUGIN_PATH' >> ~/.bashrc
source ~/.bashrc
```

> **💡 注意：** 对于ARM64系统（如Raspberry Pi），在export命令中将`x86_64-linux-gnu`替换为`aarch64-linux-gnu`。

## ✅ 验证安装

最后，您可以按如下方式测试您的GStreamer安装：

```bash
# 检查版本
gst-launch-1.0(.exe) --version

# 测试基本功能
gst-launch-1.0 videotestsrc ! autovideosink

# 验证WebRTC插件
gst-inspect-1.0 webrtcsrc
```

您还应该能够导入GStreamer库在Python环境中：
```bash
python -c "import gi"
```

</hfoption>
</hfoptions>

## 故障排除和单元测试

如果您在流方面遇到问题，可以按如下方式单独测试组件。

**测试1：手动创建WebRTC服务器**
在机器人上运行此GStreamer管道以验证摄像头和编码器堆栈：

```bash
gst-launch-1.0 webrtcsink run-signalling-server=true meta="meta,name=reachymini" name=ws libcamerasrc ! capsfilter caps=video/x-raw,width=1280,height=720,framerate=60/1,format=YUY2,colorimetry=bt709,interlace-mode=progressive ! queue !  v4l2h264enc extra-controls="controls,repeat_sequence_header=1" ! 'video/x-h264,level=(string)4' ! ws. alsasrc device=hw:4 ! queue ! audioconvert ! audioresample ! opusenc ! audio/x-opus, rate=48000, channels=2 ! ws.
```