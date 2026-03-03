---
description: This wiki demonstrates how to deploy the open-source GPT-OSS-20B large language model on an NVIDIA Jetson Orin NX using llama.cpp, showcasing edge AI capabilities. It provides step-by-step instructions for installation, model conversion, quantization, and running inference with optional web UI integration.
title: GPT-OSS Running Live on reComputer Jetson!
keywords:
- reComputer
- Jetson
- LLM
- GPT-OSS
- llamacpp
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /deploy_gptoss_on_jetson
last_update:
  date: 08/14/2025
  author: Youjiang
---


# GPT-OSS Running Live on reComputer Jetson!

## Introduction

This is far more than a simple technical porting exercise - it's an exploration of what's possible at the edge. In this article, I'll demonstrate how a 20B-parameter open-source large language model comes to life on edge devices like Nvidia Jetson Orin Nx.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/deploy_gptoss_super.png" />
</div>

The [NVIDIA Jetson](https://www.seeedstudio.com/tag/nvidia.html) series stands as a premier edge computing platform, renowned for its exceptional power efficiency and compact form factor. Meanwhile, [GPT-OSS-20B](https://github.com/openai/gpt-oss) represents the cutting edge of freely available open-source large language models. Their convergence not only showcases the untapped potential of edge devices, but also pioneers new possibilities for offline AI applications. 


## Prerequisites

- reComputer Super J4012


:::note
In this wiki, we will accomplish the following tasks using the [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-Bundle.html), but you can also try using other Jetson devices.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/recomputer_super.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::info
The subsequent steps will involve setting up multiple Python environments on the Jetson. We recommend installing Conda on Jetson device:
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```
:::

## Install llama.cpp

First, we need to install the `llama.cpp` inference engine on the Jetson. Please execute the following commands in the terminal window of the Jetson.

```bash
sudo apt update
sudo apt install -y build-essential cmake git 
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
cmake -B build -DGGML_CUDA=ON
cmake --build build --parallel
```

After compilation, all executable files for llama.cpp will be generated in `build/bin`.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/install_llamacpp.png" />
</div>

:::note
The build process typically takes around 2 hours.
:::

## Prepare GPT-OSS Model

Step1. Download the [GPT-OSS-20B](https://huggingface.co/openai/gpt-oss-20b/tree/main) from Huggingface and upload to Jetson.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/download_model.png" />
</div>

Step2. Install the required dependencies for model conversion.

```bash
conda create -n gpt-oss python=3.10
conda activate gpt-oss
cd /home/seeed/Documents/llama.cpp  # cd `path_of_llama.cpp` 
pip install .
```

Step3. Run the model conversion process.

```bash
python convert_hf_to_gguf.py --outfile /home/seeed/Downloads/gpt-oss /home/seeed/Documents/gpt-oss-gguf/
# python convert_hf_to_gguf.py --outfile <path_of_input_model> <path_of_output_model>
```

Step4. Model Quantization.

```bash
./build/bin/llama-quantize /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf /home/seeed/Documents/gpt-oss-gguf-Q4/Gpt-Oss-32x2.4B-Q4.gguf Q4_K
# ./build/bin/llama-quantize <path_of_f16_gguf_model> <path_of_output_model> <quantization_method>
```

## Launch GPT-OSS by llama.cpp

Now we can attempt to launch the inference program in the Jetson terminal.

```bash
./build/bin/llama-cli -m /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf -ngl 40
```

:::info
Please replace the model path as needed.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/run.gif" />
</div>

## Inference with WebUI (Optional)
If you want to access the model through a UI interface, you can install [OpenWebUI](https://github.com/open-webui/open-webui) on the Jetson to achieve this. 
Open a new terminal in Jetson and enter the following command:

```bash
conda create -n open-webui python=3.11
conda activate open-webui
pip install open-webui
open-webui serve
```

:::note
Launching OpenWebUI will install dependencies and download models —— please be patient.
:::

Once the setup is complete, you should see logs similar to this in the terminal.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/openwebui.png" />
</div>

Then, open your browser and navigate to `http://<ip-of-jetson>:8080` to launch Open WebUI.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/browser.png" />
</div>

:::info
If you're opening this for the first time, please follow the instructions to set up your account.
:::

Go to ⚙️ Admin Settings → Connections → OpenAI Connections to set the url as : `http://127.0.0.1:8081`.  Once saved, Open WebUI will begin using your local Llama.cpp server as a backend!

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/set_model.png" />
</div>


## Effect Demonstration

Finally, I will demonstrate the actual inference performance of the GPT-OSS-20B model on an NVIDIA Jetson Orin NX through a video demonstration.

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/kcN731Jyce4" title="GPT-OSS Running Live on NVIDIA Jetson Orin NX!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References
- https://hyd.ai/2025/03/07/llamacpp-on-jetson-orin-agx/
- https://docs.openwebui.com/getting-started/quick-start/starting-with-llama-cpp
- https://github.com/open-webui/open-webui
- https://huggingface.co/openai/gpt-oss-20b
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