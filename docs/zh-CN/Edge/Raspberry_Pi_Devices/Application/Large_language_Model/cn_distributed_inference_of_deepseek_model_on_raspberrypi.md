---
description: 本 wiki 演示了在树莓派 AI 盒子上进行 deepseek 模型的分布式推理。
title: 在 Raspberry Pi AI box 和工业盒子上进行 DeepSeek 模型的分布式推理
keywords:
  - RasberryPi Ai box
  - Deepseek
  - Distributed inference
image: https://files.seeedstudio.com/wiki/distributed-inference/model_install.webp
slug: /cn/distributed_inference_of_deepseek_model_on_raspberrypi
last_update:
  date: 03/17/2025
  author: Jiahao

no_comments: false # for Disqus
---

# 在 Raspberry Pi AI box 和工业盒子上进行 DeepSeek 模型的分布式推理

## 简介

本 wiki 解释了如何使用 [distributed-llama](https://github.com/b4rtaz/distributed-llama) 在多个 Raspberry Pi AI 盒子上部署 [DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM) 模型。在本 wiki 中，我使用了一个**配备 8GB RAM 的 Raspberry Pi** 作为**根节点**，以及**三个配备 4GB RAM 的 Raspberry Pi** 作为**工作节点**来运行 **DeepSeek 8B 模型**。推理速度达到了**每秒 6.06 个 token**。

## 准备硬件

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 准备软件

### 更新系统：

使用 `Ctrl+Alt+T` 打开终端并输入如下命令：

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### 在根节点和工作节点上安装分布式 llama

使用 `Ctrl+Alt+T` 打开终端并输入如下命令来安装 [distributed-llama](https://github.com/b4rtaz/distributed-llama.git)：

```
git clone https://github.com/b4rtaz/distributed-llama.git
cd distributed-llama
make dllama
make dllama-api
```

### 在工作节点上运行

然后输入如下命令使工作节点开始工作：

```
cd distributed-llama
sudo nice -n -20 ./dllama worker --port 9998 --nthreads 4
```

### 在根节点上运行

#### 创建并激活 python 虚拟环境

```
cd distributed-llama
python -m venv .env
source .env/bin/acitvate
```

#### 安装必要的库

```
pip install numpy==1.23.5
pip install tourch=2.0.1
pip install safetensors==0.4.2
pip install sentencepiece==0.1.99
pip install transformers
```

#### 安装 deepseek 8b q40 模型

```
git lfs install
git clone https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama
```

#### 在根节点上运行分布式推理

> **注意：** `--workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998` 是工作节点的 IP 地址。

```
cd ..
./dllama chat --model ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256

```

> **注意：** 如果您想测试推理速度，请使用以下命令。

```
cd ..
./dllama inference --model ./model/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./model/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256
```

## 结果

以下是使用 4 个 Raspberry Pi 进行 [DeepSeek Llama 8b](https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama) 模型推理的结果。


<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/distributed-inference/distributed_llama.gif" />
</div>


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