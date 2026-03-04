---
description: This wiki provides a tutorial on how to run Zero-Shot Detection on reComputer Jetson.
title: How to Run Zero-Shot Detection on reComputer
keywords:
- reComputer
- Zero-Shot Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /run_zero_shot_detection_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# How to Run Zero-Shot Detection on reComputer with Jetson Platform Services

## Introduction

Generative AI vision transformers such as CLIP have made it possible to build zero shot detection models capable of open vocabulary object detection. Meaning, the model is not bounded by a set of pre-defined classes to detect. The objects to detect are configured at runtime by the user. The Zero Shot Detection AI service, enables quick deployment of generative AI with Jetson Services for open vocabulary detection on video live stream input. The Zero Shot Detection AI service exposes REST API endpoints to control stream input and objects to detect.

This wiki provides a tutorial on how to run Zero-Shot Detection on [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" />
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

**Step 1**: Download the application package **`zero_shot_detection-1.1.0.tar.gz`** from NGC to your Jetson using this link: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). You will need to enter your NGC credentials. On the page, use one of the options available in the **`Download`** menu (top right corner):

```bash
tar -xvf zero_shot_detection-1.1.0.tar.gz
cd ~/zero_shot_detection/example_1
```

**Step 2**: Zero-shot detection AI service will use the `jetson-ingress` and `jetson-redis` services. You need to configure the jetson-ingress service to expose the zero-shot detection REST API. Copy the provided default configuration to the corresponding service configuration directory.

```bash
sudo cp config/zero_shot_detection-nginx.conf /opt/nvidia/jetson/services/ingress/config
```

**Step 3**: Run the basic services.

```bash
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
```

**Step 4**: Verify that all lines in the platform ingress configuration file (used for monitoring services) are uncommented in the following file:

```bash
/opt/nvidia/jetson/services/ingress/config/platform-nginx.conf
```

**Step 5**: Start the API Gateway to access the monitoring dashboard.

```bash
sudo systemctl restart jetson-ingress
sudo systemctl restart jetson-redis
sudo systemctl restart jetson-vst
```

**Step 6**: Start the zero-shot detection AI service.

```bash
sudo docker compose up -d
```

To check if all required containers have started, you can run the following command:

```bash
sudo docker ps
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig2.png" />
</div>

## Add the RTSP stream input

You can first add an RTSP stream for the zero-shot detection model to use with the following curl command. It is recommended to use the [NVStreamer tutorial](/getting_started_with_nvstreamer) for streaming.

- **Step 1**: Replace `0.0.0.0` with your Jetson IP and the `liveStreamUrl` link with your RTSP link, then enter the following command in the terminal:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```

Note: Besides the curl command, you can also directly test the REST API through the API documentation page, which is available at `http://0.0.0.0:5010/docs` when the zero-shot detection service is started.

- **Step 2**: After executing the first step, an ID will be returned. You need to record this ID for use in subsequent steps.

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

## Add Detection Classes

The zero shot detection model is capable of updating its detection classes at runtime. This endpoint accepts a list of objects to detect and an associated threshold value. The threshold is the sensitivity of the detection. Higher values will reduce false positives. Lower values will increase false positives. Currently this service only supports 1 stream but in the future this API will allow for multi-stream support.

- **Step 1**: Replace `0.0.0.0` with your reComputer IP address, modify `objects` to include the objects you need to detect (up to ten), set `thresholds` for each category, and use the `id` returned in the previous step. After completing the command, enter the following in the terminal:

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

Zero Shot Detection with Jetson Platform Services: https://docs.nvidia.com/jetson/jps/inference-services/zero_shot_detection.html

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
