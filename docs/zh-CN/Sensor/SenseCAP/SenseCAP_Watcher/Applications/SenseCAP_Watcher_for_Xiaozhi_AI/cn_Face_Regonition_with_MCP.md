---
description: 使用内部 MCP 工具部署人脸识别的指南
title: 使用 MCP 进行人脸识别
sidebar_position: 7
keywords:
- AI
- SenseCAP
- Watcher
- Agent
- Face
- Model
- Context
- protocol
- recognition
- MCP
- reComputer
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /cn/face_regonition_with_mcp
last_update:
  date: 11/25/2025
  author: Twelve
---
# 使用 MCP 扩展人脸识别功能

## 概述

本指南介绍如何使用 **SenseCAP Watcher（小智）** 与 **reComputer Raspberry Pi 系统** 部署人脸识别工作流程。Watcher 捕获图像并将其发送到 reComputer，使用内部 MCP 工具对本地数据库进行人脸匹配。

## 硬件准备

<table align="center">
  <tr>
    <th>SenseCAP Watcher for XiaoZhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 前提条件
按照本指南安装 reComputer Raspberry Pi 系统：[reComputer R2000 系列入门指南](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#flash-os)

## 执行结果

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## 源代码仓库：

- [小智人脸识别固件代码仓库](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)

- [人脸识别 API](https://github.com/suharvest/face_rec_api#)

## 部署过程

### 步骤 1. 记录 reComputer 的 IP 地址

- 将 reComputer 连接到您的网络，如路由器

- 获取其 IP 地址，此处使用的示例 IP：192.168.24.10

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>


### 步骤 2. 将固件刷入 Watcher

- 使用 Type-C 线缆通过底部端口将 PC 连接到 Watcher

- 打开 ESP-IDF 5.5 CMD（版本 5.5.1）并导航到合适的文件夹

- 克隆 Watcher 固件仓库

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

- 找到与 reComputer 通信的代码部分
    - 文件位置：main/boards/sensecap-watcher/sscma_camera.cc（第 769 行）

```cpp
std::string face_rec_url = "http://192.168.10.131.80001/recognize"
```

- 将 IP 地址更改为您的 reComputer 的实际 IP

    ```cpp
    std::string face_rec_url = <Your_reComputer_actual_IP>
    ```
    - 示例

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr4.png" style={{width:800, height:'auto'}}/></div>

- 编译并刷入固件

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### 步骤 3. SSH 连接到 reComputer 并准备环境

- 通过 SSH 连接（根据需要替换用户名和 IP）

```bash
ssh <Your_reComputer's username>@<Your_reComputer's host IP>
# For example : ssh recomputer@192.168.24.10
```

:::note
我们建议在 VS Code 中使用 **Remote - SSH** 扩展来连接您的 reComputer。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>

:::

- 对于中国大陆用户，你可以先用此脚本来配置你的镜像源，以提升你的下载速度

```bash
curl -sSL https://linuxmirrors.cn/main.sh -o gnu_linux_mirror.sh
sudo bash gnu_linux_mirror.sh
```

- 安装 Docker 并设置 docker 用户

```bash
curl -sSL https://linuxmirrors.cn/docker.sh -o install_docker.sh
sudo bash install_docker.sh
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)

sudo groupadd docker
sudo usermod -aG docker $USER
```

- 更新系统软件

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

- 安装 uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 步骤 4. 克隆 API 并更新依赖项

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```
- 安装 DKMS、HailoRT，添加配置并重启

```bash
sudo apt-get install dkms
sudo dpkg --install hailort-4.21.0/hailort_4.21.0_arm64.deb hailort-4.21.0/hailort-pcie-driver_4.21.0_all.deb
echo "options hailo_pci force_desc_page_size=4096" | sudo tee /etc/modprobe.d/hailo_pci.conf
```

- 检查 HailoRT 状态

```bash
sudo reboot
hailortcli scan
hailortcli fw-control identify
```
    - 如果您看到类似以下的信息，说明您的驱动程序已成功安装

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

### 步骤 5. 添加照片并启动人脸识别服务

- 将照片放置在 photos/ 文件夹中

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

- 生成嵌入向量

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

- 赋予执行权限并启动服务

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

- 服务现在正在运行。Watcher 可以与 reComputer 通信以检查数据库中是否存在人脸。您可以使用 `Ctrl + C` 停止服务。

- 您可以添加提示，如："当检测到人员时，使用人脸识别工具检查姓名和置信度：如果置信度大于 40%，则按姓名问候他们；否则，给出通用问候。"

### 步骤 6. 更新人脸数据库

- 停止服务后，将新照片添加到 `photos/` 文件夹中，重新生成嵌入向量并重启服务。

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

### 步骤 7. 清空人脸数据库

- 删除 `photos/` 文件夹中的所有文件。

- 删除 `data/` 文件夹中的 `embedding.json` 文件。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

- 清空后，运行服务，您将看到相同的日志

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## 常见问题

**问：如何让小智 AI 调用人脸识别 API？**

**答：** 只需向 Watcher 询问类似"检查我是否在人脸识别系统中"的问题。
AI 将自动调用 MCP 工具来检查人脸数据库。

**问：如果人脸识别系统无法上传照片该怎么办？**

**答：** 请检查 IP 地址是否正确以及人脸识别服务是否正常运行。

**问：我可以使用其他设备来部署吗？**

**答：** 可以。只要是搭载 Linux 系统且可以联网的设备都能部署，只是 reComputer 的运算性能会更好。

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
