---
description: 本wiki演示了如何在NVIDIA Jetson Orin NX上使用llama.cpp部署开源GPT-OSS-20B大语言模型，展示边缘AI能力。它提供了安装、模型转换、量化和运行推理的分步说明，并可选择集成Web UI。
title: GPT-OSS在reComputer Jetson上实时运行！
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
createdAt: '2025-08-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/deploy_gptoss_on_jetson/
---


# GPT-OSS在reComputer Jetson上实时运行！

## 介绍

这远不仅仅是一个简单的技术移植练习——它是对边缘设备可能性的探索。在本文中，我将演示一个200亿参数的开源大语言模型如何在Nvidia Jetson Orin Nx等边缘设备上运行。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/deploy_gptoss_super.png" />
</div>

[NVIDIA Jetson](https://www.seeedstudio.com/tag/nvidia.html)系列是一个顶级的边缘计算平台，以其卓越的功耗效率和紧凑的外形因子而闻名。与此同时，[GPT-OSS-20B](https://github.com/openai/gpt-oss)代表了免费开源大语言模型的前沿技术。它们的融合不仅展示了边缘设备的未开发潜力，还为离线AI应用开创了新的可能性。

## 前提条件

- reComputer Super J4012

:::note
在本wiki中，我们将使用[reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-Bundle.html)完成以下任务，但您也可以尝试使用其他Jetson设备。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/recomputer_super.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

:::info
后续步骤将涉及在Jetson上设置多个Python环境。我们建议在Jetson设备上安装Conda：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

:::

## 安装 llama.cpp

首先，我们需要在 Jetson 上安装 `llama.cpp` 推理引擎。请在 Jetson 的终端窗口中执行以下命令。

```bash
sudo apt update
sudo apt install -y build-essential cmake git 
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
cmake -B build -DGGML_CUDA=ON
cmake --build build --parallel
```

编译完成后，llama.cpp 的所有可执行文件将在 `build/bin` 中生成。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/install_llamacpp.png" />
</div>

:::note
构建过程通常需要大约 2 小时。
:::

## 准备 GPT-OSS 模型

步骤1. 从 Huggingface 下载 [GPT-OSS-20B](https://huggingface.co/openai/gpt-oss-20b/tree/main) 并上传到 Jetson。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/download_model.png" />
</div>

步骤2. 安装模型转换所需的依赖项。

```bash
conda create -n gpt-oss python=3.10
conda activate gpt-oss
cd /home/seeed/Documents/llama.cpp  # cd `path_of_llama.cpp` 
pip install .
```

步骤3. 运行模型转换过程。

```bash
python convert_hf_to_gguf.py --outfile /home/seeed/Downloads/gpt-oss /home/seeed/Documents/gpt-oss-gguf/
# python convert_hf_to_gguf.py --outfile <path_of_input_model> <path_of_output_model>
```

步骤4. 模型量化。

```bash
./build/bin/llama-quantize /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf /home/seeed/Documents/gpt-oss-gguf-Q4/Gpt-Oss-32x2.4B-Q4.gguf Q4_K
# ./build/bin/llama-quantize <path_of_f16_gguf_model> <path_of_output_model> <quantization_method>
```

## 通过 llama.cpp 启动 GPT-OSS

现在我们可以尝试在 Jetson 终端中启动推理程序。

```bash
./build/bin/llama-cli -m /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf -ngl 40
```

:::info
请根据需要替换模型路径。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/run.gif" />
</div>

## 使用 WebUI 进行推理（可选）

如果您想通过 UI 界面访问模型，可以在 Jetson 上安装 [OpenWebUI](https://github.com/open-webui/open-webui) 来实现。
在 Jetson 中打开新的终端并输入以下命令：

```bash
conda create -n open-webui python=3.11
conda activate open-webui
pip install open-webui
open-webui serve
```

:::note
启动 OpenWebUI 将安装依赖项并下载模型——请耐心等待。
:::

设置完成后，您应该在终端中看到类似的日志。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/openwebui.png" />
</div>

然后，打开浏览器并导航到 `http://<jetson的ip地址>:8080` 来启动 Open WebUI。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/browser.png" />
</div>

:::info
如果您是第一次打开，请按照说明设置您的账户。
:::

转到 ⚙️ 管理员设置 → 连接 → OpenAI 连接，将 url 设置为：`http://127.0.0.1:8081`。保存后，Open WebUI 将开始使用您的本地 Llama.cpp 服务器作为后端！

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/set_model.png" />
</div>

## 效果演示

最后，我将通过视频演示来展示 GPT-OSS-20B 模型在 NVIDIA Jetson Orin NX 上的实际推理性能。

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/kcN731Jyce4" title="GPT-OSS Running Live on NVIDIA Jetson Orin NX!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料

- https://hyd.ai/2025/03/07/llamacpp-on-jetson-orin-agx/
- https://docs.openwebui.com/getting-started/quick-start/starting-with-llama-cpp
- https://github.com/open-webui/open-webui
- https://huggingface.co/openai/gpt-oss-20b
- https://www.seeedstudio.com/tag/nvidia.html

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
