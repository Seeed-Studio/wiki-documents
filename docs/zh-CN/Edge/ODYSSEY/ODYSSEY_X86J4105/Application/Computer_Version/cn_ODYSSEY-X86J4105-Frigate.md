---
description: ODYSSEY - X86J4105
title: Frigate
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Frigate
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# 使用 Seeed Odyssey 的 FRIGATE NVR 项目

## 什么是 Frigate NVR？

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/ui.jpeg" /></div>

*来自 [frigate 官方网站](https://frigate.video/) 的示例图片*

>"Frigate 是一个基于实时 AI 目标检测的开源 NVR。所有处理均在您自己的硬件上本地完成，您的摄像头视频流永远不会离开您的家。" -- [Frigate NVR](https://frigate.video/)

Frigate NVR 是最受欢迎的网络视频录像机项目之一，它为您的安全摄像头添加了本地处理的 AI 功能，因此您不仅可以避免为云推理服务器支付高昂费用，还可以确保您的宝贵私人摄像头视频流不会暴露在公共互联网中。Frigate 可以通过单个 Google Coral TPU 每秒处理 100 多个目标检测，您可以根据自己的使用场景自定义检测区域和遮罩。它还可以与 Home Assistant 和其他自动化平台集成，只需最少的设置工作即可提供更多安全功能，并将边缘 AI 解决方案集成到您的宝贵资产中。

## 前置条件

* 1 x [Odyssey Blue: Quad Core Celeron J4125 Mini PC with 128GB external SSD](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products)
* 1 x [Coral USB Accelerator](https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products)（可选）
* RTSP 摄像头流
* 键盘和 HDMI 显示器

确保 [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) 已连接到与您的 RTSP 网络摄像头相同的网络，或者可以访问您的 RTSP 网络摄像头。

## 入门指南

在本指南中，我们将向您展示如何配置 Frigate Docker 环境，在 Seeed Studio 的 [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) 上使用 [Coral USB Accelerator](https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products) 对 RTSP 摄像头流进行本地 AI 检测。有关 Home Assistant 插件设置，请继续关注！

**步骤 1：** 确保您已在 [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) 上安装了 Debian 11

请下载 [Debian 11](https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/debian-11.4.0-amd64-DVD-1.iso) 操作系统镜像，并按照[此处](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-OS/)的安装指南在 [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) 上安装 Debian 11 操作系统。

**步骤 2：** 确保您已在 Debian 11 上安装了 Docker 引擎和 Docker Compose

请按照 [在 Debian 上安装 Docker 引擎](https://docs.docker.com/engine/install/debian/#install-using-the-repository) 的指南安装 Docker 引擎和 Docker Compose。

检查是否成功安装了 Docker：

请打开终端应用并输入以下命令：

```bash
docker -v
```

您应该会在终端中看到以下输出：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/check_docker_version.png" /></div>

**步骤 3：** 创建 Frigate Docker 文件

在终端应用中输入以下命令，使用 vi 文本编辑器创建 Frigate Docker 文件：

```bash
1 mkdir ~/Documents/frigate
2 cd ~/Documents/frigate
3 vi frigate.yml
```

在 frigate.yml 文件中插入以下内容以设置 Frigate 的 docker-compose 配置，并根据您的环境设置替换必要的部分。

```bash
version: "3.9"
services:
  frigate:
    container_name: frigate
    privileged: true # 对于所有设置可能不是必需的
    restart: unless-stopped
    image: blakeblackshear/frigate:stable-amd64
    shm_size: "64mb" # 根据上述计算为您的摄像头更新
    devices:
      - /dev/bus/usb:/dev/bus/usb # 传递 USB Coral，需要为其他版本修改
      - /dev/apex_0:/dev/apex_0 # 传递 PCIe Coral，请按照此处的驱动程序说明操作 https://coral.ai/docs/m2/get-started/#2a-on-linux
      - /dev/dri/renderD128 # 用于 Intel 硬件加速，需要根据您的硬件更新
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /path/to/your/config.yml:/config/config.yml:ro
      - /path/to/your/storage:/media/frigate
      - type: tmpfs # 可选：1GB 内存，减少 SSD/SD 卡磨损
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "5000:5000"
      - "1935:1935" # RTMP 流
    environment:
      FRIGATE_RTSP_PASSWORD: "password"
```

有关 Frigate docker-compose yaml 配置选项的更多详细信息，请访问 [Frigate 文档页面](https://docs.frigate.video/installation#docker)。

在我的案例中，我的 frigate.yml 文件如下所示：

```bash
version: "3.7"
services:
  frigate:
    container_name: frigate
    privileged: true # 对于所有设置可能不是必需的
    restart: unless-stopped
    image: blakeblackshear/frigate:stable-amd64
    shm_size: "64mb" # 根据上述计算为您的摄像头更新
    devices:
      - /dev/bus/usb:/dev/bus/usb # 传递 USB Coral，需要为其他版本修改
      - /dev/apex_0:/dev/apex_0 # 传递 PCIe Coral，请按照此处的驱动程序说明操作 https://coral.ai/docs/m2/get-started/#2a-on-linux
      - /dev/dri/renderD128 # 用于 Intel 硬件加速，需要根据您的硬件更新
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /home/seeed/Documents/frigate/config/config.yml:/config/config.yml:ro
      - /home/seeed/Documents/frigate:/media/frigate
      - type: tmpfs # 可选：1GB 内存，减少 SSD/SD 卡磨损
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "5000:5000"
      - "1935:1935" # RTMP 流
    environment:
      FRIGATE_RTSP_PASSWORD: "password"
```

**步骤 4：** 创建 Frigate 配置文件

在终端应用中输入以下命令以创建配置文件夹：

```bash
1 cd ~/Documents/frigate
2 mkdir config/
3 cd config/
```

输入以下命令使用 vi 文本编辑器创建 Frigate 配置文件：

```bash
1 vi config.yml
```

然后复制以下内容以进行最低配置设置，使 Frigate 能够运行：

```bash
mqtt:
  host: mqtt.server.com #请替换为有效的 MQTT Broker
cameras:
  back:
    ffmpeg:
      inputs:
        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/cam/realmonitor?channel=1&subtype=2 #替换为您的 RTSP 摄像头 URL
          roles:
            - detect
            - rtmp
    detect:
      width: 1280
      height: 720
```

请访问 Frigate 文档页面的 [configuration](https://docs.frigate.video/configuration/index) 部分以了解所有配置选项。

在我的情况下，除了以下根据我的设置自定义的配置列表外，其余配置保持默认：

*  MQTT: broker.hivemq.com
*  检测器：[Coral USB Accelerator](https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products)
*  摄像头: rtsp://192.168.8.34:8080/unicast
*  跟踪对象: person, cup (注意：对象标签列表可以在 Frigate 文档页面的 [Objects](https://docs.frigate.video/configuration/objects) 部分找到)
*  录制: 当检测到 Person 或 Cup 时，录制时间为检测前 2 秒和检测后 2 秒。

因此我的 config.yml 文件如下所示：

```bash
mqtt:
  host: broker.hivemq.com # 使用 HiveMQ MQTT Broker 进行测试
detectors:
  # 必需: 检测器名称
  coral:
    # 必需: 检测器类型
    # 有效值为 'edgetpu'（需要下面的设备属性）和 'cpu'。
    type: edgetpu
    # 可选: 设备名称，定义见 https://coral.ai/docs/edgetpu/multiple-edgetpu/#using-the-tensorflow-lite-python-api
    device: usb
# 可选: 模型修改
model:
  # 可选: 模型路径（默认: 根据检测器自动设置）
  path: /edgetpu_model.tflite
  # 可选: 标签映射路径（默认: 如下所示）
  labelmap_path: /labelmap.txt
  # 必需: 对象检测模型输入宽度（默认: 如下所示）
  width: 320
  # 必需: 对象检测模型输入高度（默认: 如下所示）
  height: 320
cameras:
  back:
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.34:8080/unicast
          roles:
            - detect
            - rtmp
# 可选: 检测配置
# 注意: 可以在摄像头级别覆盖
detect:
  # 可选: 用于检测角色输入的帧宽度（默认: 如下所示）
  width: 800
  # 可选: 用于检测角色输入的帧高度（默认: 如下所示）
  height: 600
  # 可选: 摄像头的期望帧率，用于检测角色输入（默认: 如下所示）
  # 注意: 推荐值为 5。理想情况下，尝试降低摄像头的 FPS。
  fps: 8
  # 可选: 启用摄像头检测（默认: True）
  # 此值可以通过 MQTT 设置，并将在启动时根据保留值更新
  enabled: True
  # 可选: 没有检测到对象的帧数，超过此值后 Frigate 将认为对象已消失。（默认: 帧率的 5 倍）
  max_disappeared: 25
  # 可选: 静止对象跟踪配置
  stationary:
    # 可选: 确认静止对象的频率（默认: 如下所示）
    # 设置为 0 时，只有检测到运动时才会确认静止对象。
    # 如果设置为 10，则每 10 帧运行一次对象检测以确认对象仍然存在。
    interval: 0
    # 可选: 对象位置未变化的帧数，超过此值后对象被认为是静止的（默认: 帧率的 10 倍或 10 秒）
    threshold: 50
    # 可选: 跟踪静止对象的最大帧数（默认: 未设置，永久跟踪）
    # 这可以帮助减少误报，例如某些对象应该只静止有限时间。
    max_frames:
      # 可选: 所有对象类型的默认值（默认: 未设置，永久跟踪）
      default: 3000
      # 可选: 特定对象值
      objects:
        person: 1000
# 可选: 对象配置
# 注意: 可以在摄像头级别覆盖
objects:
  # 可选: 从 labelmap.txt 中跟踪的对象列表（默认: 如下所示）
  track:
    - person
    - cup
# 可选: 录制配置
# 注意: 可以在摄像头级别覆盖
record:
  # 可选: 启用录制（默认: 如下所示）
  # 警告: 如果在配置中禁用了录制，稍后通过 UI 或 MQTT 启用将无效。
  # 警告: Frigate 当前不支持根据可用磁盘空间自动限制录制。
  # 如果使用录制，必须为录制段指定保留天数，以适应磁盘空间，否则 Frigate 将崩溃。
  enabled: True
  # 可选: 清理运行之间的分钟数（默认: 如下所示）
  # 如果希望减少磁盘录制段删除的频率以最小化 I/O，可以使用此设置。
  expire_interval: 60
  # 可选: 录制的保留设置
  retain:
    # 可选: 无论事件如何，保留录制的天数（默认: 如下所示）
    # 注意: 如果只希望保留事件的录制，应将此设置为 0，并在下面的事件部分定义保留。
    days: 0
    # 可选: 保留模式。可用选项为: all, motion 和 active_objects
    #   all - 保存所有录制段，无论是否有活动
    #   motion - 保存所有录制段，检测到任何运动
    #   active_objects - 保存所有录制段，检测到活动/移动对象
    # 注意: 此模式仅在上述天数设置大于 0 时适用
    mode: all
  # 可选: 事件录制设置
  events:
    # 可选: 长事件期间保留视频的最大时间长度。（默认: 如下所示）
    # 注意: 如果对象被跟踪的时间超过此值，保留的录制将是事件的最后 x 秒，除非 record->retain->days > 0。
    max_seconds: 300
    # 可选: 包括事件前的秒数（默认: 如下所示）
    pre_capture: 2
    # 可选: 包括事件后的秒数（默认: 如下所示）
    post_capture: 2
    # 可选: 保存录制的对象。（默认: 所有跟踪的对象）
    objects:
      - person
      - cup
    # 可选: 限制录制到进入任何列出的区域的对象（默认: 无需区域）
    required_zones: []
    # 可选: 事件录制的保留设置
    retain:
      # 必需: 默认保留天数（默认: 如下所示）
      default: 10
      # 可选: 保留模式。（默认: 如下所示）
      #   all - 保存所有事件录制段，无论是否有活动
      #   motion - 保存所有事件录制段，检测到任何运动
      #   active_objects - 保存所有事件录制段，检测到活动/移动对象
      mode: motion
      # 可选: 每个对象的保留天数
      objects:
        person: 2
        cup: 3
```

**步骤 5：** 启动 Frigate Docker 容器

```bash
1 cd ~/Documents/frigate
2 sudo docker-compose -f frigate.yml up
```

若需排查问题，可以通过打印 Docker 日志来查看错误：

```bash
sudo docker logs frigate
```

**步骤 6：** 查看 Frigate Web 前端

通过在终端中输入以下命令，找到 [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) 服务器的 IP 地址：

```bash
1 ip a
```

你应该会在终端中看到类似的输出，根据你的连接设置找到有效的 IP 地址：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/ip_address.png" /></div>

一旦找到 [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) 的 IP 地址，请打开你喜欢的网页浏览器，并在地址栏中输入 **ip-address:5000**。例如，在我的情况下，IP 地址是 192.168.8.57，因此我在浏览器地址栏中输入的 URL 是 192.168.8.57:5000，你应该会进入类似于下图的主页：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/home_page.png" /></div>

要观察实时检测，请点击视频流，然后点击主视图右上角的 Debug 按钮，再点击实时视频流下方的 SHOW OPTIONS 按钮，勾选 Bonding Box 或其他你希望在实时视频流中看到的选项。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/live_detection.png" /></div>

**尽情探索 [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) 上的 Frigate 更多选项吧！你还可以查看其他单板计算机（SBC）选项，例如 [reComputer](https://www.seeedstudio.com/catalogsearch/result/?q=recomputer) 系列，为你的应用添加边缘 AI 功能。**

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>