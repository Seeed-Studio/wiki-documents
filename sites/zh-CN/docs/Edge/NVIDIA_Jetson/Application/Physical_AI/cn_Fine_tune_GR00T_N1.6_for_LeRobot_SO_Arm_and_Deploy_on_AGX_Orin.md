---
description: 本 wiki 介绍了在 J501 Mini（AGX Orin）上部署 AI 和机器人项目的示例工作流程。还提供了详细的分步说明和参考文档。
title: 为 LeRobot SO-101 机械臂微调 Isaac GR00T N1.6 并在 AGX Orin 上部署
keywords:
- J501 mini
- Robotics
- AGX Orin
- gr00t n1.6
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin
sku: E2025123101,114993668
last_update:
  date: 2026-1-6
  author: Dayu
---

# 🤖 为 LeRobot SO-101 机械臂微调 GR00T N1.6 并在 AGX Orin 上部署

## 🚀 简介

本 wiki 解释了如何为 **LeRobot SO-101 机械臂**微调 **NVIDIA Isaac GR00T N1.6** 并在 **AGX Orin 64G** 上部署。您可以通过以下链接购买本 wiki 中使用的 AGX Orin 载板和 SO-ARM 机械臂：

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
    marginTop: '20px',
  }}
>
  {/* ===== Item 1 ===== */}
  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>立即购买 🖱</font>
          </span>
        </strong>
      </a>
    </div>
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993668-so-arm101-low-cost-ai-arm-3d-printed-parts-for-lerobot_1.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>立即购买 🖱️</font>
          </span>
        </strong>
      </a>
    </div>
  </div>
</div>

<p></p>


- 🔧 **LeRobot SO-101** 和 **AGX Orin 64G** 的硬件准备  
- 💻 在 **AGX Orin 64G** 上设置 **GR00T N1.6** 的软件环境 
- 🎯 使用 **LeRobot 训练平台**：数据收集、数据集格式化和 SO-101 机械臂的微调  
- 🚀 在 **L20**（服务器级 GPU）上部署训练好的 GR00T N1.6 策略（LeRobot + SO-101）的示例工作流程
- 🛠️ 故障排除技巧和常见陷阱  

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/form.png"/>
</div>

<p></p>

**📚 提供详细的分步说明和参考文档，帮助您从初始设置到完整部署。**

本 wiki 基于 LeRobot 项目进行数据收集，然后将其转换为 GR00T N1.6 支持的数据集格式。除了 AGX Orin，您还需要准备一台具有超过 48GB 显存的设备来微调预训练模型（**建议租用服务器**）。最后，您将在 AGX Orin 64G 上部署微调后的模型进行推理，实现从盘子中抓取水果的任务。

:::warning
本 wiki 基于 JetPack 6.2 并使用 AGX Orin 64GB 模块。 
:::

## 🛠️ 设置 GR00T N1.6 环境

在 AGX Orin 和 x86 架构服务器上设置 GR00T N1.6 环境的过程类似，但 Jetson 需要手动安装一些依赖项。

### 🔧 在 AGX Orin 上设置环境

克隆 GR00T N1.6 源代码并完成目录结构：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

保持在 `Isaac-GR00T` 目录中创建虚拟环境并安装依赖项：

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

将预编译的 wheel 文件下载到 AGX Orin。这些需要手动安装。点击以下链接下载：

**📦 所需的 Wheel 文件：**
- **PyTorch**：[点击下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCPB-wlwOrsSZNkhH9I27DMAcXbUvnXhRmshioXZz-N4Jk?e=DIrq5U)
- **TorchVision**：[点击下载](https://pypi.jetson-ai-lab.io/jp6/cu126/+f/907/c4c1933789645/torchvision-0.23.0-cp310-cp310-linux_aarch64.whl#sha256=907c4c1933789645ebb20dd9181d40f8647978e6bd30086ae7b01febb937d2d1)
- **Flash-Attention**：[点击下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDsyHCBmfaVQ4iM1dQxOrA0ASs-RgdpKdLPy87XPW5RL20?e=CbZnio)
- **TorchCodec**：[点击下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkC3cpYjGcQ5Qwmei9PF3rAfYWOZY7JqugbcRtQ2VO7ro?e=Llh7yu)
- **Triton**：[点击下载](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxXj1wMjIORbEkjCoZgRmnAWVrarrEHxHqW7-avotuJks?e=cDST1l)

更多 Jetson 的 wheel 文件可以从以下地址下载：  
🔗 [https://pypi.jetson-ai-lab.io/jp6/cu126](https://pypi.jetson-ai-lab.io/jp6/cu126)

下载 `.whl` 文件后，激活虚拟环境并通过 pip 安装：

```bash
source .venv/bin/activate

pip install xxxx.whl

# For example:
# pip install torch-2.8.0a0+gitba56102-cp310-cp310-linux_aarch64.whl
```

:::warning
`flash-attn` 和 `torchvision` 必须在 `pytorch` **之后**安装
:::

返回源代码工作目录并完成最终的依赖项安装：

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install -e .[base]

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```

### 🖥️ 在微调服务器上设置环境

克隆 GR00T N1.6 源代码并完成目录结构：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

保持在 `Isaac-GR00T` 目录中创建虚拟环境并安装依赖项：

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

根据您服务器的 CUDA 版本（作者使用 CUDA 12.8），从 PyTorch 官方网站找到 torch 2.8 和 torchvision 0.22.0 GPU 版本的相应安装命令：

🔗 [点击此处查找安装命令](https://pytorch.org/get-started/previous-versions/)

安装依赖项时确保虚拟环境已激活：

```bash
source .venv/bin/activate

# For example
# pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 --index-url https://download.pytorch.org/whl/cu128
```

:::warning
`flash-attn` 和 `torchvision` 必须在 `pytorch` **之后**安装
:::

返回源代码工作目录并完成最终的依赖项安装：

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install --no-build-isolation flash-attn==2.8.2.post1
pip install -e .[base]
pip install torchcodec==0.4.0

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```


## 📊 使用 SO-ARM 进行数据收集

有关数据收集的详细教程，请参考以下链接：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#record-the-dataset)  
**此链接包含 SO-ARM 的完整教程，涵盖配置、组装、校准、数据收集、训练和推理。**

lerobot 机械臂的数据收集可以在 PC 上执行，也可以直接在 Jetson 设备上执行。

- **方法 1**：使用 Jetson 收集数据
- **方法 2**：使用 Ubuntu PC 收集数据（**推荐**）

两种方法的数据收集程序基本相同。


### LeRobot 环境设置（可选）

Lerobot 的开发环境设置过程可以在以下链接的子部分中找到：  
🔗 [https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#install-lerobot](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#install-lerobot)



### 配置电机

SO-ARM 各关节上的电机需要在组装前进行配置。配置步骤可以在以下链接的子部分中找到：    
🔗 [https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#configure-the-motors](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#configure-the-motors)


### 组装

SO-ARM 主臂和从臂的安装过程可以在以下链接的子部分中找到：  
🔗 [https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#assembly](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#assembly)

### SO-ARM 校准


SO-ARM 完全组装后，需要进行校准。校准程序请参考以下链接的子部分：  
🔗 [https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#calibrate](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#calibrate)



:::note
**校准机械臂时，请不要连接任何 USB 摄像头，因为这可能导致端口冲突或端口分配错误。**
:::

**运行校准脚本后，手动移动机械臂的每个关节以确保其达到完整的运动范围！否则可能导致遥操作期间主臂和从臂姿态不匹配。**




### 摄像头设置

通常建议在机械臂的腕部/夹爪上安装一个摄像头，在桌面表面安装另一个摄像头，以确保对机械臂姿态的适当覆盖。
<mark>具体的安装方法取决于您的应用场景；下面显示的示例仅供参考。</mark>

详细信息请参考以下链接的子章节：  
🔗 [https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#add-cameras](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#add-cameras)



### 数据收集

:::warning
对于 GR00T N1.6，腕部摄像头参数名称应为 `wrist`，第三人称视角摄像头参数名称应为 `front`。

例如：
`--robot.cameras="{ wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 6, width: 640, height: 480, fps: 30}}"`  

如果您在数据收集过程中没有使用这些参数名称，您需要在后续的训练和部署过程中修改源代码中的参数文件和关键字。
:::


完成摄像头安装和机械臂校准后，数据集收集程序可在以下链接的子章节中找到：  
[https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#record-the-dataset)



### 可视化收集的数据


要可视化在 SO-ARM 上收集的数据，请参考以下链接的子章节：  
🔗 [https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#visualize-the-dataset](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#visualize-the-dataset)



:::note
如果您选择在云端训练策略，请确保您的数据集已提前上传到云服务器，或从 Hugging Face Hub 下载。但是，由于直接从 Hugging Face Hub 下载时可能出现网络问题，强烈建议手动将数据集上传到您的云服务器。
:::



## 🚀 使用 L20 训练策略

作者选择了 NVIDIA 的 L20 GPU 来微调预训练模型。您也可以选择租用其他服务器级 GPU，但请确保微调过程有 48GB 的可用显存。

### 数据集格式转换

首先，您需要将前面章节中收集的训练数据集转换为 GR00T N1.6 使用的格式。作者参考了[此链接](https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/finetune_new_embodiment.md)的过程。


如果您已经有 LeRobot v2 格式的数据集，可以**跳过数据集格式转换过程**。

如果您有 LeRobot v3.0 格式的数据集，请使用此脚本将其转换为 LeRobot v2 格式。

如果您有其他格式的数据集，请将其转换为满足以下要求的 LeRobot v2 格式。

**📁 结构要求**
文件夹应遵循如下类似结构并包含这些核心文件夹和文件：

```bash
.
├─meta 
│ ├─episodes.jsonl
│ ├─modality.json # -> GR00T LeRobot specific
│ ├─info.json
│ └─tasks.jsonl
├─videos
│ └─chunk-000
│   └─observation.images.ego_view
│     └─episode_000001.mp4
│     └─episode_000000.mp4
└─data
  └─chunk-000
    ├─episode_000001.parquet
    └─episode_000000.parquet
```

数据集格式转换脚本位于 `Isaac-GR00T/scripts/lerobot_conversion`。使用以下命令转换数据集格式：

```bash
python convert_v3_to_v2.py --repo-id seeed/grap_fruit
```

`--repo-id` 是要转换的源数据集路径。

如果您使用的是 SO-ARM 且收集的数据集缺少 `modality.json`，您可以在 demo_data 目录中找到它：
🔗 [https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json](https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json)

### 下载预训练模型

您可以从 Hugging Face 官方网站下载预训练模型权重（
**GR00T-N1.6-3B**）。下载页面： 
🔗 [https://huggingface.co/nvidia/GR00T-N1.6-3B](https://huggingface.co/nvidia/GR00T-N1.6-3B)

选择下图所示的内容并点击下载。将下载的文件放在同一文件夹中。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/dl-1.6.png" width="800"/>
</div>


### 运行微调

我们将使用 `gr00t/experiment/launch_finetune.py` 作为入口点。确保在启动前启用 uv 环境。您可以通过运行命令 `uv run bash <example_script_name>` 来实现。

**📋 查看可用参数**
```bash
# Display all available arguments
python gr00t/experiment/launch_finetune.py --help
```

**🔧 执行微调**

如果您使用单个 GPU 进行微调，需要根据下图红色高亮部分修改 `/Isaac-GR00T/gr00t/data/dataset/factory.py`：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/modify-gr00t.png" width="800"/>
</div>

```python
# Change torch.distributed.barrier() to:

import torch.distributed as dist
if dist.is_available() and dist.is_initialized():
    dist.barrier()
```

使用以下命令进行微调：

```bash
export NUM_GPUS=1
CUDA_VISIBLE_DEVICES=0 python \
    gr00t/experiment/launch_finetune.py \
    --base-model-path nvidia/GR00T-N1.6-3B \
    --dataset-path ./demo_data/cube_to_bowl_5 \
    --embodiment-tag NEW_EMBODIMENT \
    --modality-config-path examples/SO100/so100_config.py \
    --num-gpus $NUM_GPUS \
    --output-dir /tmp/so100 \
    --save-total-limit 5 \
    --save-steps 2000 \
    --max-steps 2000 \
    --use-wandb \
    --global-batch-size 32 \
    --color-jitter-params brightness 0.3 contrast 0.4 saturation 0.5 hue 0.08 \
    --dataloader-num-workers 4
```

**📊 关键参数**

| 参数 | 描述 |
|-----------|-------------|
| `--base-model-path` | 预训练基础模型检查点的路径 |
| `--dataset-path` | 您的训练数据集路径 |
| `--embodiment-tag` | 用于识别您的机器人实体的标签 |
| `--modality-config-path` | 用户指定的模态配置路径（仅对 NEW_EMBODIMENT 标签必需） |
| `--output-dir` | 保存检查点的目录 |
| `--save-steps` | 每 N 步保存检查点 |
| `--max-steps` | 训练步数总数 |
| `--use-wandb` | 启用 Weights & Biases 日志记录以进行实验跟踪 |



## 🚀 在 AGX Orin 64G 上使用微调模型进行推理

确保您已根据前面的步骤在 AGX Orin 上配置了 GR00T N1.6 环境。

**🖥️ 终端 1：启动本地推理服务器**

打开第一个终端，激活虚拟环境，并使用以下命令启动本地推理服务器：

```bash
source .venv/bin/activate

uv run python gr00t/eval/run_gr00t_server.py \
  --model-path /tmp/so100_finetune/checkpoint-10000 \
  --embodiment-tag NEW_EMBODIMENT 
```

其中 `--model-path` 是微调模型权重的路径。

**🤖 终端 2：启动本地推理客户端**

打开第二个终端，激活虚拟环境，并使用以下命令启动本地推理客户端：

```bash
source .venv/bin/activate

uv run python gr00t/eval/real_robot/SO100/eval_so100.py \
  --robot.type=so101_follower --robot.port=/dev/ttyACM0 \
  --robot.id=orange_follower \
  --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
  --policy_host=localhost --policy_port=5555 \
  --lang_instruction="grasp fruit into plate"
```

其中 `--robot.port` 参数应根据您的实际串口名称进行修改，`index_or_path` 也应根据您两个摄像头的设备索引号进行修改。

**🎥 演示结果**

启动推理请求后，您可以在终端中看到 GR00T N1.6 输出的动作序列。每次推理产生八个动作：

<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/gr00t-infer.jpg" width="800"/> </div>

作者在 AGX Orin 64G 上的 GR00T N1.6 推理结果如下视频所示。**前半部分展示了**启动 GR00T N1.6 程序后终端中的推理输出——您可以看到每次推理输出八个动作。**后半部分**演示了真实世界的结果：机械臂成功抓取水果并将其放置到盘子上。
<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/MuzIkoKYOwU" title="GR00T N1.6 Inference Demo on AGX Orin 64G" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>




## 📚 参考资料

- 🔗 https://developer.nvidia.com/embedded/jetpack
- 🔗 https://github.com/NVIDIA/Isaac-GR00T/tree/main
- 🔗 https://huggingface.co/nvidia/GR00T-N1.6-3B

## 🤝 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
