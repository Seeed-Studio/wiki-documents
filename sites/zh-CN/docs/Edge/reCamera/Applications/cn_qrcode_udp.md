---
description: 本示例展示如何在 reCamera 上执行实时二维码识别，并通过 UDP 将视频帧及识别结果推送到 PC 端进行显示。
title: 在 reCamera 上进行实时二维码识别
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - ZXing
  - UDP Streaming
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 06/12/2026
  author: Xuanjun Zhu
createdAt: '2026-06-15'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/cn/recamera_qrcode_udp/
---

# 在 reCamera 上进行实时二维码识别

## 介绍

本示例演示如何使用 reCamera 搭建一个**实时二维码识别系统**。系统通过摄像头采集实时视频帧，使用 **ZXing** 库解码二维码，并通过 **UDP** 将视频帧（JPEG）及识别结果推送到 PC 端进行显示。

**主要特性**：
- 实时摄像头采集与二维码识别
- 支持视频流模式和单张图片模式
- 通过 UDP 将 JPEG 帧 + 识别结果推送到 PC
- 详细的性能统计（采集 FPS、解码 FPS、平均解码时间）
- PC 端 Python 接收脚本，用于实时视频与结果显示

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/testvideo.gif" /></div>

## 工作原理

### 视频流模式（默认）

实时识别流程如下：

1. **摄像头采集**：通过 `sscma-micro` 摄像头接口采集 RGB888 帧（默认 640×480）
2. **灰度转换**：将 RGB888 图像转换为灰度图（二维码识别所需）
4. **ZXing 解码**：使用 `MultiFormatReader` + `HybridBinarizer` 进行条码检测与解码（为保证实时性能，默认关闭 `TryHarder`）
5. **结果输出**：当检测到新的二维码时，将解码内容打印到终端
6. **UDP 推送**：通过 `SeSg stream_udp` 组件将 JPEG 帧 + 识别结果发送到 PC

在视频场景中，当“未找到二维码”时，ZXing 会产生较大的搜索开销。为保证实时性能，程序采用 150ms 解码节流策略——每 150ms 解码一次，而不是对每一帧都进行解码。这在不影响识别体验的前提下，大幅降低了 CPU 负载。

## 演示搭建

要搭建本演示，你需要：

1. 在 PC 上交叉编译 C++ 程序
2. 在 ReCamera 上运行编译好的可执行文件
3. 在 PC 上运行 Python 接收脚本

### 1. 编译 C++ 程序

:::note
在构建本方案前，请确保你已经按照[主项目文档](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp/)配置好 **ReCamera-OS** 环境（版本 0.2.1 或更高），包括 SDK 路径和交叉编译工具链。
:::

为交叉编译工具链设置环境变量：

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

克隆仓库并进入对应方案目录进行编译。在 PC 终端中按顺序运行以下命令。如果你已经按照 [Developing with C/C++](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp/) 文档下载并配置好交叉编译环境，可以直接运行下面的编译命令。

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
## compile cmd
rm -rf build && mkdir build && cd build 
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

编译完成后，可执行文件位于 `build/qrcode_udp`。使用 scp 命令将其上传到 ReCamera 的 `/home/recamera/` 目录：

```bash
sudo scp qrcode_udp recamera@192.168.4.53:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
在提示时输入对应平台的密码，以完成 `qrcode_udp` 的传输。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/cppbuildlog.png" /></div>


### 2. 配置 ReCamera

:::warning
在运行 C++ 程序之前，必须先停止默认的 Node-RED 服务，因为它们会占用摄像头资源。请通过 SSH 运行以下命令：
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. 在 ReCamera 上运行可执行文件

然后运行以下命令授予执行权限：

```bash
chmod +x qrcode_udp
```

#### 参数说明

| Parameter | Description | Default |
|-----------|-------------|---------|
| `udp_ip` | PC IP 地址（启用 UDP 推流） | `192.168.4.48` |
| `udp_port` | UDP 端口号 | `5001` |

#### 示例命令

**视频流模式（无 UDP 推流，仅本地识别）**：
```bash
sudo ./qrcode_udp
```

**视频流模式 + UDP 推流**：
```bash
sudo ./qrcode_udp 192.168.4.48 5001
```

:::note
请将 `192.168.4.48` 替换为与你的 ReCamera 处于同一网络中的 PC 实际 IP 地址。
:::
### 在 ReCamera 终端上

**视频流模式** — 程序会每秒输出一次性能统计信息：

```
[Performance] CaptureFPS=2.60 | DecodeFPS=2.60 | AvgDecodeTime=323.0ms | DecodeSuccess=0 | NewCode=0
[Performance] CaptureFPS=1.94 | DecodeFPS=1.94 | AvgDecodeTime=434.0ms | DecodeSuccess=0 | NewCode=0
[QRCode] https://wiki.seeedstudio.com/recamera_software_docs/
[Performance] CaptureFPS=4.45 | DecodeFPS=4.45 | AvgDecodeTime=174.8ms | DecodeSuccess=3 | NewCode=1
[Performance] CaptureFPS=4.62 | DecodeFPS=4.62 | AvgDecodeTime=163.6ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=4.86 | DecodeFPS=4.86 | AvgDecodeTime=165.4ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=4.60 | DecodeFPS=4.60 | AvgDecodeTime=169.8ms | DecodeSuccess=4 | NewCode=0
[Performance] CaptureFPS=4.33 | DecodeFPS=4.33 | AvgDecodeTime=184.4ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=2.78 | DecodeFPS=2.78 | AvgDecodeTime=305.8ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=1.96 | DecodeFPS=1.96 | AvgDecodeTime=404.0ms | DecodeSuccess=2 | NewCode=0
[Performance] CaptureFPS=4.72 | DecodeFPS=4.72 | AvgDecodeTime=166.0ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.56 | DecodeFPS=4.56 | AvgDecodeTime=178.5ms | DecodeSuccess=6 | NewCode=0
[QRCode] zxj
[Performance] CaptureFPS=5.32 | DecodeFPS=5.32 | AvgDecodeTime=145.3ms | DecodeSuccess=7 | NewCode=1
[Performance] CaptureFPS=5.30 | DecodeFPS=5.30 | AvgDecodeTime=149.1ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.70 | DecodeFPS=4.70 | AvgDecodeTime=170.8ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=1.85 | DecodeFPS=1.85 | AvgDecodeTime=455.0ms | DecodeSuccess=1 | NewCode=0
```

- **CaptureFPS**：摄像头采集帧率
- **DecodeFPS**：实际执行解码的帧率（受 150ms 节流限制）
- **AvgDecodeTime**：单次 ZXing 解码的平均耗时
- **DecodeSuccess**：成功识别二维码的次数
- **NewCode**：二维码文本发生变化的次数


### 4. 在 PC 上运行 Python 接收端

在 PC 上，确保已安装 Python 及所需库：

```bash
pip install opencv-python numpy
```

进入方案目录并运行：

```bash
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
python tools/udp_receiver.py --port 5001 --show --print-dets
```

#### Python 接收端参数

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--ip` | 监听 IP 地址 | `0.0.0.0` |
| `--port` | 监听端口 | `5001` |
| `--show` | 显示视频窗口 | off |
| `--print-dets` | 打印识别到的二维码文本 | off |



### 在 Python 接收端窗口中

PC 端会显示一个实时视频窗口，其中包括：
- JPEG 视频流
- 当识别到二维码时，在画面左上角叠加显示解码文本（黄色字体）
- 帧编号（绿色字体）
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/pcpicture.png" /></div>


## 依赖项

| Dependency | Description | Source |
|------------|-------------|--------|
| **sscma-micro** | 摄像头访问（Device、Camera 接口） | 仓库组件 `components/sscma-micro` |
| **stream_udp** | UDP 推流（JPEG + 检测结果） | 仓库组件 `components/SeSg/stream_udp` |
| **OpenCV** (core, imgproc, imgcodecs) | 图像处理、灰度转换、降采样 | SG200X SDK sysroot |
| **ZXing** (libzxing) | 多格式条码/二维码解码 | SG200X SDK sysroot |
| **ReCameraOS ≥ 0.2.1** | 运行环境 | 设备固件 |

## 故障排查

### 摄像头访问错误

如果看到 “No camera device found” 错误：
- 确认已停止 Node-RED 服务（见上文步骤 2）
- 检查摄像头连接

### UDP 连接失败

如果 PC 未收到数据：
- 确认 PC 与 ReCamera 处于同一网络
- 检查 PC 上的防火墙设置
- 确认 UDP 端口 5001 未被阻塞
- 使用 `ping` 测试设备间连通性

### 二维码识别失败

如果画面中有二维码但未被识别：
- 确保二维码在画面中足够大且清晰
- 避免过度模糊、旋转或光照不均
- 注意：为优先保证实时性能，默认关闭 `TryHarder` 模式

### 编译错误

如果遇到与 ZXing 或 sscma-micro 相关的编译错误：
- 确认 `SG200X_SDK_PATH` 环境变量设置正确
- 确保工具链路径已添加到 `PATH` 环境变量
- 检查仓库子模块是否已完整拉取（`git submodule update --init --recursive`）

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>