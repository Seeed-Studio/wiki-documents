---
description: This wiki provides a step-by-step guide to deploying the DeepSeek model on reComputer Jetson devices using MLC for optimized AI inference at the edge.
title: Deploy DeepSeek on reComputer Jetson with MLC
keywords:
- reComputer
- Jetson
- LLM
- MLC
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /deploy_deepseek_on_jetson_with_mlc
last_update:
  date: 02/13/2025
  author: Youjiang
---


# Deploy DeepSeek on reComputer Jetson with MLC

## Introduction

DeepSeek is a cutting-edge AI model suite optimized for efficiency, accuracy, and real-time processing. With advanced optimization for edge computing, DeepSeek enables fast, low-latency AI inference directly on Jetson devices, reducing dependency on cloud computing while maximizing performance.

In a [previous wiki](/deploy_deepseek_on_jetson), we have provided a quick guide to deploying DeepSeek on Jetson. However, the model deployed successfully did not achieve optimal inference speed.

This wiki provides a step-by-step guide to deploying [DeepSeek](https://www.deepseek.com/) on reComputer Jetson devices with [MLC](https://llm.mlc.ai/) for efficient AI inference on the edge.

## Prerequisites

- Jetson device with more than 8GB of memory.
- The jetson device needs to be pre-flashed with the jetpack [5.1.1](https://wiki.seeedstudio.com/reComputer_Intro/) operating system or later.

:::note
In this wiki, we will accomplish the following tasks using the [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), but you can also try using other Jetson devices.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Getting Started

### Hardware Connection

- Connect the Jetson device to the network, mouse, keyboard, and monitor.

:::note
Of course, you can also remotely access the Jetson device via SSH over the local network.
:::

### Install and Configure Jetson's Docker

First, we need to follow the [tutorial](https://www.jetson-ai-lab.com/tips_ssd-docker.html) provided by the Jetson AI Lab to install Docker.

step1. Install `nvidia-container` package.

```bash
sudo apt update
sudo apt install -y nvidia-container
```

:::info
If you flash **Jetson Linux (L4T) R36.x (JetPack 6.x) on your Jetson using SDK Manager, and install nvidia-container using apt , on JetPack 6.x it no longer automatically installs Docker.

Therefore, you need to run the following to manually install Docker and set it up.

```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
```

:::

step2. Restart the Docker service and add your user to the docker group.

```bash
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
```

step3. Add default runtime in `/etc/docker/daemon.json`.

```bash
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
```

step4. Restart Docker.

```bash
sudo systemctl daemon-reload && sudo systemctl restart docker
```

### Load and Run DeepSeek

We can refer to the Docker container provided by the `Jetson AI Lab` to quickly deploy the MLC-quantized DeepSeek model on Jetson.
Open the [Jetson AI Lab](https://www.jetson-ai-lab.com/index.html) website and find the deployment command.

`Models` --> `Orin NX` --> `docker run` --> `copy`

:::info
Before we copy the installation commands, we can modify the relevant parameters on the left.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.png" />
</div>

Open the terminal window on the Jetson device, paste the installation command we just copied into the terminal, and press the `Enter` key on the keyboard to run the command.
When we see the following content in the terminal window, it means the deepseek model has been successfully loaded on the Jetson device.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/success_install_deepseek.png" />
</div>

At this point, we can open a new terminal window and enter the following command to test if the model can perform inference correctly.

:::danger
Please note, do not close the terminal window running the deepseek model.
:::

```bash
curl http://0.0.0.0:9000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer none" \
  -d '{
    "model": "*",
    "messages": [{"role":"user","content":"Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": false,
    "max_tokens": 100
  }'
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/get_response.png" />
</div>

### Install Open WebUI

```bash
sudo docker run -d --network=host \
    -v ${HOME}/open-webui:/app/backend/data \
    -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
    --name open-webui \
    --restart always \
    ghcr.io/open-webui/open-webui:main
```

After the installer finishes running, you can enter `http://<ip_of_jetson>:8080` in the browser to launch the UI interface.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/install_webui.png" />
</div>

Then, we need to configure the large model inference engine for OpenWebUI.

`User(top right corner)` --> `Settings` --> `Admin Settings` --> `Connections`

Change the OpenAI URL to the local MLC inference server where DeepSeek is already loaded.

For example, if the IP address of my Jetson device is `192.168.49.241`, my URL should be `http://192.168.49.241:9000/v1`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/cfg_model.png" />
</div>

After saving the configuration, we can create a new chat window to experience the extremely fast inference speed of the local DeepSeek model!

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/chat.png" />
</div>

### Test Inference Speed

Here, we can use this Python script to roughly test the model's inference speed.

On the Jetson device, create a new Python file named `test_inference_speed.py` and fill it with the following code.

Then, execute the script by running the command `python test_inference_speed.py` in the terminal.

<details>

<summary> test_inference_speed.py </summary>

```python
import time
import requests


url = "http://0.0.0.0:9000/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer none"
}

data = {
    "model": "*",
    "messages": [{"role": "user", "content": "Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": True,
    "max_tokens": 1000
}

start_time = time.time()
response = requests.post(url, headers=headers, json=data, stream=True)

token_count = 0
for chunk in response.iter_lines():
    if chunk:
        token_count += 1
        print(chunk)

end_time = time.time()
elapsed_time = end_time - start_time
tokens_per_second = token_count / elapsed_time

print(f"Total Tokens: {token_count}")
print(f"Elapsed Time: {elapsed_time:.3f} seconds")
print(f"Tokens per second: {tokens_per_second:.2f} tokens/second")
```

</details>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/test_infer_speed.png" />
</div>

The calculation results show that the inference speed of the MLC-compiled deepseek1.5B model deployed on the Jetson Orin NX device is approximately **60 tokens/s**.

## Effect Demonstration

In the demonstration video, the Jetson device operates at just under 20W yet achieves an impressive inference speed.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/ohd_T95br90" title="deploy deepseek on jetson with mlc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References

- https://www.jetson-ai-lab.com/models.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/tag/nvidia.html

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
