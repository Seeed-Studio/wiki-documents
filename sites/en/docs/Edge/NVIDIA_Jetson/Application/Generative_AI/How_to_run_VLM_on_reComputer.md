---
description: This wiki provides a tutorial on how to run VLM on reComputer Jetson.
title: How to Run VLM on reComputer
keywords:
- reComputer
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /run_vlm_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# How to Run VLM on reComputer with Jetson Platform Services

## Introduction

vision language models (VLMs) are multi modal models supporting images, video and text and using a combination of large language models and vision transformers. Based on this capability, they are able to support text prompts to query videos and images thereby enabling capabilities such as chatting with the video, and defining natural language based alerts. The [VLM AI service](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html), enables quick deployment of VLMs with Jetson Platform Services for video insight applications. The VLM service exposes REST API endpoints to configure the video stream input, set alerts and ask questions in natural language about the input video stream.

This wiki provides a tutorial on how to run VLM on [reComputer J4012 Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" />
</div>

## Requirements

Before proceeding with the setup process, please ensure that your system meets the following prerequisites:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

- A reComputer J4012 Orin NX 16G running Ubuntu `22.04` or `later`.
- Driver Version: `535.113.01`, Jetpack `6.0` and CUDA Version: `12.2`.
- Make sure that JetPack and the related Jetson services packages are installed.

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

- IP cameras or local videos can be streamed via RTSP. (We recommend using our provided [NVStreamer tutorial](/getting_started_with_nvstreamer) for RTSP streaming.)

## Getting Started

**Step 1**: Download the application package **`vlm-1.1.0.tar.gz`** from NGC to your Jetson using this link: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). You will need to enter your NGC credentials. On the page, use one of the options available in the **`Download`** menu (top right corner):

```bash
tar -xvf vlm-1.1.0.tar.gz
cd ~/vlm/example_1
```

**Step 2**: The VLM AI service will use the `jetson-ingress` and `jetson-monitoring` services. You need to configure these two services to integrate with the VLM AI service. Copy the provided default configuration to the corresponding service configuration directory:

```bash
sudo cp config/vlm-nginx.conf /opt/nvidia/jetson/services/ingress/config
sudo cp config/prometheus.yml /opt/nvidia/jetson/services/monitoring/config/prometheus.yml
sudo cp config/rules.yml /opt/nvidia/jetson/services/monitoring/config/rules.yml
```

**Step 3**: Run the basic services:

```bash
sudo systemctl start jetson-ingress
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
sudo systemctl start jetson-redis
sudo systemctl start jetson-vst
```

**Step 4**: When starting the VLM service for the first time, it will automatically download and quantize the VLM. This process may take some time. If deploying on Orin NX16, you might need to mount more SWAP space because the quantization process can consume a large amount of memory. Run the following commands to mount more swap space:

```bash
sudo fallocate -l 10G /data/10GB.swap
sudo mkswap /data/10GB.swap
sudo swapon /data/10GB.swap
```

**Step 5**: Start the VLM AI service:

```bash
cd ~/vlm/example_1
sudo docker compose up -d
```

To check if all required containers have started, you can run the following command:

```bash
sudo docker ps
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmfig2.png" />
</div>

## Add the RTSP stream input

You can first add an RTSP stream for the VLM model to use with the following curl command. It is recommended to use the [NVStreamer tutorial](/getting_started_with_nvstreamer) for streaming.

- **Step 1**: Replace `0.0.0.0` with your Jetson IP and the `liveStreamUrl` link with your RTSP link, then enter the following command in the terminal:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```

    Note: Besides the curl command, you can also directly test the REST API through the API documentation page, which is available at `http://0.0.0.0:5010/docs` when the zero-shot detection service is started.

- **Step 2**: After executing the first step, an ID will be returned. You need to record this ID for use in subsequent steps:

    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```

    You can also obtain the ID later using the following command:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```

    To delete a stream by its ID, you can use the following command:

    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## Set Alerts

Alerts are questions that the VLM will continuously evaluate on the live stream input. For each alert rule set, the VLM will try to decide if it is True or False based on the most recent frame from of the live stream. These True and False states as determined by the VLM, are sent to a websocket and the jetson monitoring service.

When setting alerts, the alert rule should be phrased as a yes/no question. Such as “Is there fire?” or “Is there smoke?”. The body of the request must also have the “id” field that corresponds to the stream ID that was returned when the RTSP stream was added.

By default, the VLM service supports up to 10 alert rules. This can be increased by adjusting the configuration files.

**Step 1**: Replace `0.0.0.0` with your reComputer IP address, modify `alerts` to include the objects you need to alerts, use the `id` returned in the previous step. After completing the command, enter the following in the terminal:

``` bash
curl --location 'http://0.0.0.0:5010/api/v1/alerts' \
--header 'Content-Type: application/json' \
--data '{
    "alerts": ["is there a fire?", "is there smoke?"],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
}'
```

## View RTSP Stream Result

The detection output will be streamed through `rtsp://reComputer_ip:5011/out`. We provide a Python script for visualizing the video stream output, You need to install the opencv-python library in advance and then run the following Python script:

- **Step 1:** Install the opencv-python library:

    ```bash
    pip install opencv-python
    ```

- **Step 2:** Run the following Python script:

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

## Shut Down

To stop the zero-shot detection service, run the following command in the same directory where the `compose.yaml` file is located:

```bash
sudo docker compose down
```

## More Details

Visual Language Models (VLM) with Jetson Platform Services: https://docs.nvidia.com/jetson/jps/inference-services/vlm.html

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
