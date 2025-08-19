---
description: 本维基提供了在 reComputer Jetson 上运行 VLM 的教程。
title: 如何在 reComputer 上运行 VLM
keywords:
- reComputer
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/run_vlm_on_recomputer
last_update:
  date: 2024/7/24
  author: ZhuYaoHui
---

# 如何使用 Jetson 平台服务在 reComputer 上运行 VLM

## 简介
视觉语言模型（VLMs）是一种支持图像、视频和文本的多模态模型，结合了大型语言模型和视觉变换器。基于这种能力，它们能够支持通过文本提示查询视频和图像，从而实现与视频聊天以及定义基于自然语言的警报等功能。[VLM AI 服务](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html)使得可以通过 Jetson 平台服务快速部署 VLM，用于视频洞察应用。VLM 服务通过 REST API 端点暴露功能，用于配置视频流输入、设置警报以及以自然语言询问关于输入视频流的问题。

本维基提供了如何在 [reComputer J4012 Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 上运行 VLM 的教程。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" />
</div>

## 要求
在开始设置过程之前，请确保您的系统满足以下先决条件：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

- 一台运行 Ubuntu `22.04` 或更高版本的 reComputer J4012 Orin NX 16G。
- 驱动版本：`535.113.01`，Jetpack `6.0` 和 CUDA 版本：`12.2`。
- 确保已安装 JetPack 和相关的 Jetson 服务包。
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```
- IP 摄像头或本地视频可以通过 RTSP 流进行传输。（我们推荐使用提供的 [NVStreamer 教程](/cn/getting_started_with_nvstreamer) 来进行 RTSP 流传输。）

## 入门

**步骤 1**：从 NGC 下载应用程序包 **`vlm-1.1.0.tar.gz`** 到您的 Jetson，使用以下链接：[NGC 参考工作流和资源](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。您需要输入您的 NGC 凭证。在页面上，使用 **`Download`** 菜单（右上角）中的任一选项：
```bash
tar -xvf vlm-1.1.0.tar.gz
cd ~/vlm/example_1
```

**步骤 2**：VLM AI 服务将使用 `jetson-ingress` 和 `jetson-monitoring` 服务。您需要配置这两个服务以与 VLM AI 服务集成。将提供的默认配置复制到相应的服务配置目录：
```bash
sudo cp config/vlm-nginx.conf /opt/nvidia/jetson/services/ingress/config
sudo cp config/prometheus.yml /opt/nvidia/jetson/services/monitoring/config/prometheus.yml
sudo cp config/rules.yml /opt/nvidia/jetson/services/monitoring/config/rules.yml
```

**步骤 3**：运行基本服务：
```bash
sudo systemctl start jetson-ingress
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
sudo systemctl start jetson-redis
sudo systemctl start jetson-vst
```

**步骤 4**：首次启动 VLM 服务时，它将自动下载并量化 VLM。此过程可能需要一些时间。如果在 Orin NX16 上部署，您可能需要挂载更多的 SWAP 空间，因为量化过程可能会消耗大量内存。运行以下命令以挂载更多的交换空间：

```bash
sudo fallocate -l 10G /data/10GB.swap
sudo mkswap /data/10GB.swap
sudo swapon /data/10GB.swap
```

**步骤 5**：启动 VLM AI 服务：
```bash
cd ~/vlm/example_1
sudo docker compose up -d
```
要检查是否所有必需的容器都已启动，可以运行以下命令：
```bash
sudo docker ps
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmfig2.png" />
</div>

## 添加 RTSP 流输入
您可以通过以下 curl 命令为 VLM 模型添加一个 RTSP 流。建议使用 [NVStreamer 教程](/cn/getting_started_with_nvstreamer) 进行流媒体传输。
- **步骤 1**：将 `0.0.0.0` 替换为您的 Jetson IP，并将 `liveStreamUrl` 替换为您的 RTSP 链接，然后在终端中输入以下命令：
    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```
    注意：除了使用 curl 命令，您还可以直接通过 API 文档页面测试 REST API，该页面在零样本检测服务启动时可通过 `http://0.0.0.0:5010/docs` 访问。

- **步骤 2**：执行第一步后，将返回一个 ID。您需要记录此 ID，以便在后续步骤中使用：
    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```
    您也可以通过以下命令稍后获取该 ID：

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```
    要通过 ID 删除流，可以使用以下命令：
    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## 设置警报
警报是 VLM 将持续评估实时流输入的问题。对于每个警报规则集，VLM 将根据实时流的最新帧尝试判断其是否为 True 或 False。VLM 确定的 True 和 False 状态将通过 websocket 和 Jetson 监控服务发送。

设置警报时，警报规则应以是/否问题的形式表达，例如“是否有火灾？”或“是否有烟雾？”。请求的主体还必须包含与添加 RTSP 流时返回的流 ID 对应的 “id” 字段。

默认情况下，VLM 服务支持最多 10 个警报规则。可以通过调整配置文件来增加此限制。

**步骤 1**：将 `0.0.0.0` 替换为您的 reComputer IP 地址，修改 `alerts` 以包含您需要警报的对象，并使用上一步返回的 `id`。完成命令后，在终端中输入以下内容：
```bash
curl --location 'http://0.0.0.0:5010/api/v1/alerts' \
--header 'Content-Type: application/json' \
--data '{
    "alerts": ["是否有火灾？", "是否有烟雾？"],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
}'
```

## 查看 RTSP 流结果
检测输出将通过 `rtsp://reComputer_ip:5011/out` 进行流式传输。我们提供了一个 Python 脚本用于可视化视频流输出，您需要提前安装 opencv-python 库，然后运行以下 Python 脚本：
- **步骤 1**：安装 opencv-python 库：
    ```bash
    pip install opencv-python
    ```
- **步骤 2**：运行以下 Python 脚本：
    ```python
    import cv2
    rtsp_url = "rtsp://reComputer_ip:5011/out"
    cap = cv2.VideoCapture(rtsp_url)
    if not cap.isOpened():
        print("无法打开 RTSP 流")
        exit()
    while True:
        ret, frame = cap.read()
        if not ret:
            print("无法获取帧")
            break
        cv2.imshow('RTSP 流', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
    ```

## 关闭服务
要停止零样本检测服务，请在 `compose.yaml` 文件所在的同一目录下运行以下命令：
```bash
sudo docker compose down
```

## 更多详情
关于使用 Jetson 平台服务的视觉语言模型 (VLM)：https://docs.nvidia.com/jetson/jps/inference-services/vlm.html

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>