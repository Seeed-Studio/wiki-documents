---
description: Providing documentation and info for C/C++ developers
title: Develop with C/C++
keywords:
  - Edge
  - reCamera
  - C
  - CPP
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_develop_with_c_cpp
sidebar_position: 5
last_update:
  date: 06/09/2025
  author: Parker Hu & Yuxin Liang
---

# Develop on reCamera with c&cpp

## Environment Configuration
Recamera has limited resources and no compilation environment for C code is configured. If you want to use C/C++ to develop applications on the recamera, you need to configure the cross-compilation environment (Compile the C/C++ program on another Linux, then transfer the compiled file to the recamera terminal for execution).If you're using Windows, you can install Windows Subsystem for Linux (WSL) to run Linux (Ubuntu, OpenSUSE, Kali, Debian, or Arch Linux).

 **Step1**:Configuring the build environment on another Linux

```bash
sudo apt update
sudo apt install build-essential

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.2.1/sg2002_reCamera_0.2.1_emmc_sdk.tar.gz
tar -xzvf sg2002_reCamera_0.2.1_emmc_sdk.tar.gz

#Note: This tool is over 10GB in size. Please be aware of your disk space.
git clone https://github.com/sophgo/host-tools.git --depth=1
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$PWD/sg2002_recamera_emmc
export PATH=$PWD/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

**Step2**:Compiling the instance program or the program you want to run on the Linux.Note that the created "build" directory must be located in the project's root directory ("build" should be at the same level as "CMakeLists.txt").
check cross-compile tools first
```bash
(base) se@stu:~/recameraos$ riscv64-unknown-linux-musl-gcc -v
Using built-in specs.
COLLECT_GCC=riscv64-unknown-linux-musl-gcc
COLLECT_LTO_WRAPPER=/home/se/recameraos/host-tools/gcc/riscv64-linux-musl-x86_64/bin/../libexec/gcc/riscv64-unknown-linux-musl/10.2.0/lto-wrapper
Target: riscv64-unknown-linux-musl
Configured with: /mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/./source/riscv/riscv-gcc/configure --target=riscv64-unknown-linux-musl --with-gmp=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-mpfr=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-mpc=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-libexpat-prefix=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-libmpfr-prefix=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-pkgversion='Xuantie-900 linux-5.10.4 musl gcc Toolchain V2.6.1 B-20220906' CXXFLAGS='-g -O2 -DTHEAD_VERSION_NUMBER=2.6.1 ' --prefix=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1 --with-sysroot=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/sysroot --with-system-zlib --enable-shared --enable-tls --enable-languages=c,c++ --disable-libmudflap --disable-libssp --disable-libquadmath --disable-libsanitizer --disable-nls --disable-bootstrap --src=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/./source/riscv/riscv-gcc --enable-multilib --with-abi=lp64d --with-arch=rv64gcxthead 'CFLAGS_FOR_TARGET=-O2   -mcmodel=medany' 'CXXFLAGS_FOR_TARGET=-O2   -mcmodel=medany'
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 10.2.0 (Xuantie-900 linux-5.10.4 musl gcc Toolchain V2.6.1 B-20220906)
```
```bash
cd $HOME/recamera/sscma-example-sg200x/solutions/helloworld
mkdir build && cd build
cmake ..
make
```

You can view the file properties by typing `file helloworld`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/1.png" /></div>

The green "helloworld" (with the same name as the program folder) is the compiled executable file.

**Step3**:In this step, we will transfer the compiled executable file to the recamera's Linux terminal to run.
First, we need to log in to the recamera terminal. You can use the web version as shown below.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/2.2.png" /></div>

Alternatively, you can use remote access software (e.g., MobaXterm) to connect to recamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/3.png" /></div>

Then,type the following code on your Linux (password required):

```bash
sudo scp helloworld recamera@{recamera_IP}:/home/recamera/
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/4.png" /></div>

The executable file has been successfully transferred.

**Step4**:Execute your executable file on the recamera terminal.

```bash
./helloworld
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/5.png" /></div>

Execution succeeded.

## More demos built with c&cpp

### ​Use Recamera to Capture Streaming Video

We provide more C/C++ demos for recamera.You can clone them from GitHub:https://github.com/Seeed-Studio/sscma-example-sg200x. You may have already cloned it in "Step 1".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/6.png" /></div>

**Video_demo** is an example application demonstrating how to use the **recamera** to capture video frames, save them in different formats, and stream video over RTSP (Real-Time Streaming Protocol). 
You can follow "Step 2" to compile and "Step 3" to upload it to the recamera terminal.
*Note*: Before executing the program on the recamera terminal, you need to log in to the recamera workspace(http://192.168.42.1/#/workspace) and terminate the Flow, as this program consumes significant cache resources.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/7.png" /></div>

You need to run the program with superuser privileges to prevent memory allocation failures.

```bash
sudo ./video_demo
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/8.png" /></div>

The successful execution output is shown above.
Output Parameter Annotations:
1. The video is initialized and configured for three channels with different formats and frame rates:
   - **Channel 0**: RGB888 format, 1920x1080 resolution, 10 FPS
   - **Channel 1**: NV21 format, 1920x1080 resolution, 5 FPS
   - **Channel 2**: H.264 format, 1920x1080 resolution, 30 FPS
2. Depending on the channel:
   - For **Channel 0** and **Channel 1**: Frames are saved in RGB and NV21 formats, respectively.
   - For **Channel 2**: Frames are streamed over RTSP.

To view and save the RTSP stream, you can download VLC media player and connect to the network stream at:rtsp://192.168.42.1:8554/live0.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/9.png" /></div>

The latency of the RTSP stream is within approximately 2 seconds.

The application runs indefinitely until interrupted(Ctrl C).The application sets up signal handlers to gracefully exit upon receiving termination signals (SIGINT, SIGTERM).

This example serves as a basic introduction to using the recamera for video processing and streaming. Users can modify the code and adapt it for their specific needs, experimenting with different video formats and streaming configurations.

For more details, please refer to our [GitHub repository](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Tech Support & Product Discussion

Thank you for choosing our products. We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
