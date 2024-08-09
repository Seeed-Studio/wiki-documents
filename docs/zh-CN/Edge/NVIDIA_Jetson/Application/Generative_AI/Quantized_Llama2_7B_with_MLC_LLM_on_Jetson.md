---
description:  量化的Llama2-7B与MLC LLM在Jetson上的应用
title: 量化的Llama2-7B与MLC LLM在Jetson上的应用
keywords:
  - Edge
  - reComputer
  - Jetson
  - Llama2
  - MLC LLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson
last_update:
  date: 04/1/2024
  author: Jiahao

no_comments: false # for Disqus

---

# 量化的Llama2-7B与MLC LLM在Jetson上的应用

## 前言

I近年来，像GPT-3这样的巨大语言模型彻底改变了自然语言处理任务。 然而，这些模型大多是在大规模数据集上训练的，这需要强大的计算资源，并不适合在边缘设备上部署。 为了解决这个问题，研究人员开发了量化技术，将大型模型压缩为更小的模型，而不牺牲性能。

在本项目中，我们介绍了一个量化版本的[Llama2-7B](https://huggingface.co/meta-llama/Llama-2-7b-hf),这是一个在1.5TB数据上训练的大型语言模型，并将其部署在Jetson Orin上。我们还利用了 [机器学习编译器大型语言模型](https://llm.mlc.ai)(MLC LLM) 来加速模型的推理速度. 通过在 [Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 上部署带有 MLC LLM 的量化 Llama2-7B，开发人员可以构建强大的自然语言处理应用，在边缘设备上实现高准确性和低延迟。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" /></div>

## 硬件组件
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer（或基于 Jetson 的其他设备）</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:1000, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 安装必要项：

```shell
sudo apt-get update && sudo apt-get install git python3-pip
```
```shell
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
```
```shell
cd jetson-containers pip3 install -r requirements.txt
```
```shell 
cd ./data && git clone https://github.com/LJ-Hao/MLC-LLM-on-Jetson-Nano.git && cd ..
```
## 安装并运行 contiainer

### f第一步：安装镜像

```shell
./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'
```
使用 `sudo docker images` 检查镜像是否已安装

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png" alt="pir" width={1000} height="auto"/></p>

### 第二步：安装Llama2-7b-chat-hf并使用MLC量化模型
```shell
./run.sh $(./autotag mlc) \
python3 -m mlc_llm.build \
--model Llama-2-7b-chat-hf \
--quantization q4f16_ft \
--artifact-path /data/models/mlc/dist \
--max-seq-len 4096 \
--target cuda \
--use-cuda-graph \
--use-flash-attn-mqa
```

### 第三步：运行并进入docker
```shell
./run.sh <YOUR IMAGE NAME> 
#for me dustynv/mlc:51fb0f4-builder-r35.4.1 check result of first step
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png" alt="pir" width={1000} height="auto"/></p>

## 让我们运行它
### 运行未量化的Llama，不使用MLC LLM量化

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py 
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png" alt="pir" width={1000} height="auto"/></p>

你可以看到，在不使用MLC量化的情况下，Jetson Nano 16GB可以加载模型但无法运行.

### 运行使用MLC LLM量化的Llama
```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png" alt="pir" width={1000} height="auto"/></p>

##  在Jetson Orin NX 16GB上运行Llama与MLC的视频：

<iframe width="560" height="315" src="https://www.youtube.com/embed/hyhh0Tc6g9Q" title="Llama2-7b on Jetson Orin NX 16GB with MLC 4bit quantization" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 项目拓展

在本项目中，我们展示了如何在Jetson Orin上部署量化版本的Llama2-7B与MLC LLM。借助Jetson Orin强大的计算能力，开发人员可以构建在边缘设备上提供高准确性和低延迟的自然语言处理应用。 在未来，我们将继续探索在边缘设备上部署大型语言模型的潜力，并开发更高效和优化的部署方法。