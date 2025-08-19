---
description: 本维基提供了在 reComputer Jetson 上运行零样本检测的教程。
title: 如何在 reComputer 上运行零样本检测
keywords:
- reComputer
- 零样本检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/run_zero_shot_detection_on_recomputer
last_update:
  date: 2024/7/24
  author: ZhuYaoHui
---

# 如何使用 Jetson 平台服务在 reComputer 上运行零样本检测

## 简介
生成式 AI 视觉变换器（如 CLIP）使得构建能够进行开放词汇对象检测的零样本检测模型成为可能。这意味着模型不受限于一组预定义的类别进行检测，用户可以在运行时配置需要检测的对象。零样本检测 AI 服务通过 Jetson 服务快速部署生成式 AI，用于视频直播输入的开放词汇检测。零样本检测 AI 服务通过 REST API 端点来控制流输入和检测对象。

本维基提供了如何在 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 上运行零样本检测的教程。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" />
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

**步骤 1**：从 NGC 下载应用程序包 **`zero_shot_detection-1.1.0.tar.gz`** 到 Jetson，使用以下链接：[NGC 参考工作流和资源](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。您需要输入 NGC 凭据。在页面上，使用 **`Download`** 菜单（右上角）中的任一选项：
```bash
tar -xvf zero_shot_detection-1.1.0.tar.gz
cd ~/zero_shot_detection/example_1
```
**步骤 2**：零样本检测 AI 服务将使用 `jetson-ingress` 和 `jetson-redis` 服务。您需要配置 jetson-ingress 服务以暴露零样本检测 REST API。将提供的默认配置复制到相应的服务配置目录。
```bash
sudo cp config/zero_shot_detection-nginx.conf /opt/nvidia/jetson/services/ingress/config
```
**步骤 3**：运行基本服务。
```bash
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
```
**步骤 4**：验证平台入口配置文件（用于监控服务）中的所有行是否在以下文件中取消注释：
```bash
/opt/nvidia/jetson/services/ingress/config/platform-nginx.conf
```
**步骤 5**：启动 API 网关以访问监控仪表板。
```bash
sudo systemctl restart jetson-ingress
sudo systemctl restart jetson-redis
sudo systemctl restart jetson-vst
```
**步骤 6**：启动零样本检测 AI 服务。
```bash
sudo docker compose up -d
```
要检查是否已启动所有必需的容器，可以运行以下命令：
```bash
sudo docker ps
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig2.png" />
</div>

## 添加 RTSP 流输入
您可以首先通过以下 curl 命令为零样本检测模型添加一个 RTSP 流。建议使用 [NVStreamer 教程](/cn/getting_started_with_nvstreamer) 进行流媒体传输。
- **步骤 1**：将 `0.0.0.0` 替换为您的 Jetson IP，将 `liveStreamUrl` 替换为您的 RTSP 链接，然后在终端中输入以下命令：
    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```
注意：除了 curl 命令，您还可以直接通过 API 文档页面测试 REST API。当零样本检测服务启动时，API 文档页面可通过 `http://0.0.0.0:5010/docs` 访问。

- **步骤 2**：执行第一步后，将返回一个 ID。您需要记录此 ID 以便在后续步骤中使用。
    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```
    您还可以使用以下命令稍后获取 ID：

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```
    要通过 ID 删除流，您可以使用以下命令：
    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```
## 添加检测类别
零样本检测模型能够在运行时更新其检测类别。此端点接受一个要检测的对象列表及其关联的阈值。阈值表示检测的灵敏度。较高的值将减少误报，较低的值将增加误报。目前此服务仅支持 1 个流，但未来此 API 将支持多流。
- **步骤 1**：将 `0.0.0.0` 替换为您的 reComputer IP 地址，修改 `objects` 以包含您需要检测的对象（最多十个），为每个类别设置 `thresholds`，并使用上一步返回的 `id`。完成命令后，在终端中输入以下内容：
    ```bash
    curl -X 'POST' \
    'http://192.168.49.101:5010/api/v1/detection/classes' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -d '{
    "objects": [
        "a car", "a people"
    ],
    "thresholds": [
        0.2, 0.04
    ],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
    }'
    ```
## 查看 RTSP 流结果
检测输出将通过 `rtsp://reComputer_ip:5011/out` 进行流式传输。我们提供了一个用于可视化视频流输出的 Python 脚本，您需要提前安装 opencv-python 库，然后运行以下 Python 脚本：
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
        print("Cannot open RTSP stream")
        exit()
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to retrieve frame")
            break
        cv2.imshow('RTSP Stream', frame)
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
Jetson 平台服务的零样本检测： https://docs.nvidia.com/jetson/jps/inference-services/zero_shot_detection.html

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>