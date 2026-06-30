---
description: 本示例展示如何在 reCamera 上执行实时人脸检测、属性分析（年龄/性别/种族）和情绪识别，并通过 UDP 将结果流式传输到 PC 进行显示。
title: 使用 reCamera 进行 UDP 人脸分析
keywords:
  - reCamera
  - 人脸检测
  - 年龄 性别 种族
  - 情绪识别
  - UDP 流式传输
  - 边缘 AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif
slug: /recamera_udp_face_analysis
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 12
last_update:
  date: 04/30/2026
  author: Samuel
createdAt: '2026-04-30'
updatedAt: '2026-05-06'
url: https://wiki.seeedstudio.com/cn/recamera_udp_face_analysis/
---

# 使用 reCamera 进行 UDP 人脸分析

## 介绍

本示例演示如何使用 reCamera 构建一个实时人脸分析系统。该系统执行以下功能：

- **人脸检测**：使用 YOLO 人脸检测模型
- **属性分析**：使用 FairFace 模型进行年龄、性别和种族估计
- **情绪识别**：7 类情绪检测
- **UDP 流式传输**：通过 UDP 将带有检测元数据的 JPEG 帧发送到 PC

C++ 应用程序在 reCamera 上运行，并通过 UDP 推送视频帧以及检测结果（边界框、属性）。在你的 PC 上运行的 Python 接收脚本会实时显示带标注的视频流。

**主要特性**：
- 具有置信度阈值控制的实时人脸检测
- 每张人脸的多属性分析（性别、年龄、种族、情绪）
- 使用 JPEG 压缩的高效 UDP 流式传输
- 跳帧推理以降低 CPU/TPU 负载
- 详细的性能统计

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif" /></div>

## 演示搭建

要搭建本示例，你需要：

1. 在你的 PC 上交叉编译 C++ 程序
2. 在 ReCamera 上运行已编译的可执行文件
3. 在你的 PC 上运行 Python 接收脚本

### 1. 编译 C++ 程序

:::note
在构建此解决方案之前，请确保你已经根据主项目文档完成 **ReCamera-OS** 环境的搭建。
:::

在运行 `cmake` 之前，为 **ReCamera-OS** 构建环境设置以下环境变量：

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

首先，确保你拥有所需的模型：
- `yolo_face.cvimodel` - YOLO 人脸检测模型
- `age_gender_race.cvimodel` - 用于年龄/性别/种族的 FairFace 模型
- `emotion.cvimodel` - 情绪识别模型

你可以从 [sscma-example-sg200x v1.0.1 发布页](https://github.com/RobotXTeam/sscma-example-sg200x/releases/tag/v1.0.1)下载这三个模型文件，或者训练你自己的模型，然后将其量化/转换为 `.cvimodel` 格式。

进入解决方案目录并编译：

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/face_udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

编译后的可执行文件位置为：`build/face_udp`

:::note
仓库在解决方案文件夹中已包含预编译模型：
- `yolo-face_mixfp16.cvimodel`
- `age_gender_race_bf16.cvimodel`
- `emotion_bf16.cvimodel`
:::

### 2. 配置 ReCamera

:::warning
在运行 C++ 程序之前，必须停止默认的 Node-RED 服务，因为它们会占用相机资源。请通过 SSH 运行以下命令：
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. 在 ReCamera 上运行可执行文件

将编译好的可执行文件和模型上传到 ReCamera 上的 `/home/recamera/`，然后运行：

```bash
chmod +x face_udp
./face_udp <yolo_face.cvimodel> <age_gender_race.cvimodel> <emotion.cvimodel> [single|multi] [threshold] [skip] [udp_ip] [udp_port] [log_every_n_infer]
```

#### 参数说明

| 参数 | 描述 | 默认值 |
|-----------|-------------|---------|
| `yolo_face.cvimodel` | YOLO 人脸检测模型（必需） | - |
| `age_gender_race.cvimodel` | FairFace 模型（必需） | - |
| `emotion.cvimodel` | 情绪模型（必需） | - |
| `single\|multi` | YOLO head 类型 | multi |
| `threshold` | 检测阈值 | 0.5（multi）/ 0.7（single） |
| `skip` | 每 N 帧进行一次推理 | 3（multi）/ 1（single） |
| `udp_ip` | 用于 UDP 的 PC IP 地址 | - |
| `udp_port` | UDP 端口号 | - |
| `log_every_n_infer` | 每 N 次推理打印一次日志 | 20 |

#### 示例命令

**基础用法（无 UDP 流式传输）**：
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bf16.cvimodel
```

**启用 UDP 流式传输**：
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bfpf16.cvimodel multi 0.5 3 192.168.31.100 5001
```

:::note
请记得将 `192.168.31.100` 替换为与你的 ReCamera 处于同一网络中的 PC 实际 IP 地址。
:::

### 4. 在 PC 上运行 Python 接收端

在你的 PC 上，确保已安装带有所需库的 Python：

```bash
pip install opencv-python numpy
```

进入解决方案目录并运行：

```bash
cd sscma-example-sg200x/solutions/sesg-project/face_udp
python3 udp_receiver.py
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_show.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_demo.gif" /></div>

## 预期输出

### 在 ReCamera 终端上

程序将每 2 秒显示一次实时性能统计：

```
========== Performance Stats (Last 2 Seconds) ==========
Video FPS: 30.2 | UDP FPS: 9.8
Frames: 300 | Inferences: 100

Average YOLO Timing:
  Preprocess: 0.9 ms
  Inference:  35.5 ms
  Postprocess: 32.3 ms
  Total: 68.7 ms

Average Attribute/Emotion Overhead:
  mmap: 1.2 ms
  AGR: 45.3 ms/frame | 45.3 ms/face
  EMO: 12.1 ms/frame | 12.1 ms/face

UDP Send:
  avg_send: 2.1 ms | throughput: 850.5 kbps
======================================
```

### 在 Python 接收窗口中

PC 将显示一个窗口，其中包括：
- 带 JPEG 帧的实时视频流
- 人脸边界框（绿色矩形）
- 左上角的属性标签：
  - 性别（Male/Female）
  - 年龄范围
  - 种族分类
  - 情绪（angry/disgust/fear/happy/sad/surprise/neutral）



## 故障排查

### 相机访问错误

如果你看到 “No camera” 错误：
- 确保 Node-RED 服务已停止（参见上面的步骤 2）
- 检查相机连接

### UDP 连接失败

如果 PC 未收到数据：
- 确认 PC 和 ReCamera 处于同一网络
- 检查 PC 上的防火墙设置
- 确认 UDP 端口 5001 未被阻塞
- 使用 `ping` 在设备之间进行测试

### 模型加载错误

如果模型加载失败：
- 确认模型文件已上传到 `/home/recamera/`
- 使用 `ls -la` 检查文件权限
- 确保有足够的存储空间

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
