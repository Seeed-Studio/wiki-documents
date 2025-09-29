---
description: 为 C/C++ 开发者提供文档和信息
title: 使用 C/C++ 开发
keywords:
  - Edge
  - reCamera
  - C
  - CPP
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/recamera_develop_with_c_cpp
sidebar_position: 5
last_update:
  date: 06/09/2025
  author: Parker Hu & Yuxin Liang
---

# 在 reCamera 上使用 C&C++ 开发

## 环境配置
Recamera 资源有限，没有配置 C 代码的编译环境。如果您想在 recamera 上使用 C/C++ 开发应用程序，需要配置交叉编译环境（在另一台 Linux 上编译 C/C++ 程序，然后将编译后的文件传输到 recamera 终端执行）。如果您使用的是 Windows，可以安装 Windows 子系统 Linux (WSL) 来运行 Linux（Ubuntu、OpenSUSE、Kali、Debian 或 Arch Linux）。

 **步骤1**：在另一台 Linux 上配置构建环境

```bash
sudo apt update
sudo apt install build-essential

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.1.5/reCameraOS_sdk_v0.1.5.tar.gz

tar -xzvf reCameraOS_sdk_v0.1.5.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```

**步骤2**：编译实例程序或您想要在Linux上运行的程序。注意创建的"build"目录必须位于项目的根目录中（"build"应该与"CMakeLists.txt"处于同一级别）。

```bash
cd $HOME/recamera/sscma-example-sg200x/solutions/helloworld
mkdir build && cd build
cmake ..
make
```

您可以通过输入 `file helloworld` 来查看文件属性。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/1.png" /></div>

绿色的 "helloworld"（与程序文件夹同名）是编译后的可执行文件。

**步骤3**：在这一步中，我们将把编译后的可执行文件传输到 recamera 的 Linux 终端中运行。
首先，我们需要登录到 recamera 终端。您可以使用如下所示的网页版本。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/2.2.png" /></div>

或者，您可以使用远程访问软件（例如 MobaXterm）连接到 recamera。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/3.png" /></div>

然后，在您的 Linux 上输入以下代码（需要密码）：

```bash
sudo scp helloworld recamera@{recamera_IP}:/home/recamera/
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/4.png" /></div>

可执行文件已成功传输。

**步骤4**：在reCamera终端上执行您的可执行文件。

```bash
./helloworld
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/5.png" /></div>

执行成功。

## 更多使用 C&C++ 构建的演示

### 使用 Recamera 捕获流视频

我们为 recamera 提供了更多 C/C++ 演示。您可以从 GitHub 克隆它们：https://github.com/Seeed-Studio/sscma-example-sg200x。您可能已经在"步骤 1"中克隆了它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/6.png" /></div>

**Video_demo** 是一个示例应用程序，演示如何使用 **recamera** 捕获视频帧，以不同格式保存它们，并通过 RTSP（实时流协议）流式传输视频。
您可以按照"步骤 2"进行编译，按照"步骤 3"将其上传到 recamera 终端。
*注意*：在 recamera 终端上执行程序之前，您需要登录到 recamera 工作区（http://192.168.42.1/#/workspace）并终止 Flow，因为此程序会消耗大量缓存资源。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/7.png" /></div>

您需要以超级用户权限运行程序以防止内存分配失败。

```bash
sudo ./video_demo
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/8.png" /></div>

成功执行的输出如上所示。
输出参数说明：
1. 视频已初始化并配置为三个不同格式和帧率的通道：
   - **通道 0**：RGB888 格式，1920x1080 分辨率，10 FPS
   - **通道 1**：NV21 格式，1920x1080 分辨率，5 FPS
   - **通道 2**：H.264 格式，1920x1080 分辨率，30 FPS
2. 根据通道不同：
   - 对于**通道 0** 和**通道 1**：帧分别以 RGB 和 NV21 格式保存。
   - 对于**通道 2**：帧通过 RTSP 流式传输。

要查看和保存 RTSP 流，您可以下载 VLC 媒体播放器并连接到网络流：rtsp://192.168.42.1:8554/live0。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/9.png" /></div>

RTSP 流的延迟大约在 2 秒以内。

应用程序会无限期运行直到被中断（Ctrl C）。应用程序设置了信号处理程序，在接收到终止信号（SIGINT、SIGTERM）时优雅退出。

此示例作为使用 recamera 进行视频处理和流式传输的基础介绍。用户可以修改代码并根据其特定需求进行调整，尝试不同的视频格式和流式传输配置。

更多详细信息，请参考我们的 [GitHub 仓库](https://github.com/Seeed-Studio/OSHW-reCamera-Series)。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 技术支持与产品讨论

感谢您选择我们的产品。我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
