---
description: 本 Wiki 提供 reBot Arm B601-DM 在 LeRobot 框架内完成环境配置、校准、遥操作、相机接入、数据采集、训练与评估的完整流程。
title: reBot Arm B601-DM 入门 LeRobot
keywords:
  - Lerobot
  - Huggingface
  - 机械臂
  - rebot arm
  - 机器人
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-04-09'
updatedAt: '2026-04-09'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_lerobot/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';

# reBot Arm B601-DM 入门 LeRobot

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot Arm × LeRobot</span>
    <h2>从遥操作开始，完成数据采集、训练与真实机械臂部署</h2>
    <p>
      本 Wiki 提供 reBot Arm B601-DM 在 LeRobot 框架内完成环境配置、校准、遥操作、相机接入、
      数据集制作、可视化、回放、训练、评估和进阶部署的完整流程。
    </p>
    <div className="hero-actions">
      <a href="#quick-path">查看学习路线</a>
      <a href="#install-lerobot">安装 LeRobot</a>
      <a href="#record-dataset">进入数据采集</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推荐阅读方式</strong>
    <span>第一次使用 reBot Arm：请先完成 B601-DM 快速入门，再进入本文。</span>
    <span>第一次使用 LeRobot：建议按 Step 1 → Step 7 顺序完成。</span>
    <span>已有环境的用户：可直接跳转到校准、相机接入、数据采集或训练章节。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间 1 米范围内
      的贵重物品、易碎物品、工具、线缆和其他无关物体。调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行校准、遥操作、LeRobot 数据采集、策略评估、异步推理或视觉抓取 Demo 前，请确保机械臂已固定牢靠。</li>
      <li>请保持至少 1 米安全距离，并确保周围人员了解机械臂可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN / PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

{/* The following Markdown headings are intentionally kept outside the visual cards so Docusaurus can generate the right-side table of contents. */}

<nav className="doc-nav" aria-label="reBot LeRobot quick navigation">
  <a href="#quick-path">学习路线</a>
  <a href="#overview">项目介绍</a>
  <a href="#install-lerobot">安装环境</a>
  <a href="#calibration">校准</a>
  <a href="#teleoperation">遥操作</a>
  <a href="#camera">相机</a>
  <a href="#record-dataset">数据采集</a>
  <a href="#training">训练评估</a>
  <a href="#faq">FAQ</a>
</nav>

## 推荐学习路线

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>本篇教程的推荐操作顺序</h2>
    <p>下面按照真实调试流程整理为 Step 卡片。建议从前往后完成，尤其是涉及真实机械臂运动和数据采集的步骤。</p>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>完成 B601-DM 快速入门</strong><p>先完成电源、组装、零点、串口、MotorBridge 和基础运动测试。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>安装 LeRobot 环境</strong><p>安装 Miniforge、Seeed LeRobot 仓库、reBot 插件、MotorBridge 和 ffmpeg。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>校准 follower 与 leader</strong><p>分别校准 B601-DM follower 和 reBot 102 leader 的零位，确保主从臂位置一致。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>运行遥操作测试</strong><p>先不接相机，确认 leader 控制 follower 的运动链路稳定。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>接入相机</strong><p>根据设备选择 OpenCV、RealSense 或 Orbbec，并检查画面和帧率。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>采集与可视化数据集</strong><p>录制本地数据集或上传到 Hugging Face Hub，并检查数据质量。</p></div>
    <div className="step-card"><span className="step-mini">Step 6</span><strong>训练与评估策略</strong><p>从 ACT 开始，再尝试 SmolVLA、Pi0、Pi0.5、GR00T、PEFT 或多 GPU 训练。</p></div>
    <div className="step-card"><span className="step-mini">Step 7</span><strong>进阶部署</strong><p>根据算力和网络环境尝试异步推理、本地部署、局域网部署或云端部署。</p></div>
  </div>

  <div className="notice-grid">
    <div className="notice-card">
      <strong>推荐使用稳定仓库</strong>
      <span>本文推荐使用 Seeed-Projects/lerobot，这是针对 reBot 验证过的版本。LeRobot 官方仓库实时更新，可能出现参数、数据格式或依赖变化。</span>
    </div>
    <div className="notice-card warning">
      <strong>真实机械臂安全提醒</strong>
      <span>遥操作过程中如果主从臂电源脱落、信号线脱落或电源接触不良，请先停止程序，让机械臂回到初始零点，再重新上电运行。</span>
    </div>
  </div>
</section>

## 项目介绍

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>项目简介</h2>
    <p>reBot Arm B601-DM 与 LeRobot 结合，可以完成从主从遥操作、数据集采集，到策略训练和真实机械臂评估的完整流程。</p>
  </div>

  <div className="image-frame">
    <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
  </div>

  <div className="image-frame">
    <a href="./LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
  </div>


  <div className="get-one-now-panel" style={{display: 'flex', justifyContent: 'center', margin: '1.2rem 0'}}>
    <a
      className="get-one-now-button"
      style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '220px', minHeight: '48px', padding: '0.85rem 1.4rem', borderRadius: '999px', background: 'linear-gradient(135deg, #2563eb, #14b8a6)', color: '#ffffff', fontWeight: 900, textDecoration: 'none', lineHeight: 1.2, whiteSpace: 'nowrap', boxSizing: 'border-box'}}
      href="https://detail.tmall.com/item.htm?abbucket=16&id=1042412233386&mi_id=0000hhNAEYgKZRabreGKmpExxxW4B15HjvYNlAFLtirfARA&ns=1&priceTId=2150405117834359648414312e11d8&spm=a21n57.1.hoverItem.2&utparam=%7B%22aplus_abtest%22%3A%22ca09d8e41107a6a0c24ff70520779f5e%22%7D&xxc=taobaoSearch&skuId=6073790464610"
      target="_blank"
      rel="noopener noreferrer">
      立即购买 / Get One Now
    </a>
  </div>


  <p>
    <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
  </p>

  <p>
    <a href="https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/">reBot Arm B601-DM</a>
    是由 Seeed Studio 开源的机械臂项目，致力于降低具身智能学习门槛。我们毫无保留地开源了结构设计和代码，希望让机器人技术更加触手可及。
  </p>

  <p>
    <a href="https://github.com/huggingface/lerobot/tree/main">LeRobot</a>
    致力于为真实世界的机器人提供 PyTorch 中的模型、数据集和工具。其目标是降低机器人学的入门门槛，使每个人都能通过共享数据集和预训练模型进行贡献和受益。LeRobot 集成了经过验证的前沿方法，专注于模仿学习和强化学习。它提供了一套预训练模型、包含人类收集的示范数据集和仿真环境，使用户无需进行机器人组装即可开始使用。
  </p>

  <div className="feature-grid">
    <div><strong>真开源</strong><span>不仅开源代码，也开源结构件、钣金件、3D 打印件源文件、BOM 清单、Python SDK、ROS1/2、Isaac Sim 和 LeRobot 示例。</span></div>
    <div><strong>两个版本电机</strong><span>提供 Robostride 和 Damiao 两个版本、同样外观机械臂的全部开源文件。</span></div>
    <div><strong>支持 LeRobot</strong><span>可完成主从遥操作、相机接入、数据集采集、训练和真实机械臂评估。</span></div>
    <div><strong>兼容 NVIDIA 平台</strong><span>支持通过 reComputer Mini J4012 Orin NX 16GB 等 Jetson 平台进行部署。</span></div>
  </div>

  <details className="content-details">
    <summary>搭建属于你的 reBot 机械臂</summary>

    我们提供五种套件方案：

    - **机械臂本体电机套件**：仅包含机械臂所需的电机与线束。
    - **机械臂本体结构件套件**：仅包含机械结构零部件。
    - **夹持器完整套件**：包含夹持器的电机、线束及结构件。
    - **整机完整套件**：包含机械臂本体与夹持器全套组件。
    - **成品组装机械臂**：已完成组装的成品机械臂。

    reBot-DevArm 和 reComputer Jetson AI 智能机器人套件无缝结合了高精度的机器人手臂控制与强大的 AI 计算平台，提供了全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 reBot-DevArm 和 LeRobot AI 框架，为用户提供适用于教育、科研和工业自动化等多种场景的智能机器人系统。

    本维基提供了 reBot-DevArm 调试教程，并在 LeRobot 框架内实现数据收集和训练。
  </details>

  :::caution
  Seeed Studio 教程严格按官方文档更新，如遇无法解决的软件或环境问题，请先查阅文末 FAQ，或者联系客服加入 Seeed Studio LeRobot 交流群询问，也可以在这里询问：[LeRobot GitHub](https://github.com/huggingface/lerobot) 或 [Discord 频道](https://discord.gg/8TnwDdjFGU)。
  :::

  <details className="content-details">
    <summary>查看项目介绍视频</summary>
    <div className="video-container">
      <iframe
        loading="lazy"
        width="900"
        height="600"
        src="//player.bilibili.com/player.html?bvid=BV1mFo7BiEwX&autoplay=0&muted=1&mute=1&danmaku=0"
        title="reBot project introduction video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </details>
</section>

## 初始系统环境

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Environment</span>
    <h2>初始系统环境</h2>
    <p>需要根据你的 CUDA 版本安装 PyTorch 和 Torchvision 等环境。建议优先在 Ubuntu 物理机上完成数据采集和训练流程。</p>
  </div>

  <div className="env-grid">
    <div>
      <h3>For Ubuntu X86</h3>
      <ul>
        <li>Ubuntu 22.04</li>
        <li>CUDA 12+</li>
        <li>Python 3.10</li>
        <li>Torch 2.6</li>
      </ul>
    </div>
    <div>
      <h3>For Jetson Orin</h3>
      <ul>
        <li>Jetson JetPack 6.0 和 6.1，暂不支持 6.2</li>
        <li>Python 3.10</li>
        <li>Torch 2.3+</li>
      </ul>
    </div>
  </div>
</section>

## 安装 LeRobot

<section id="install-lerobot" className="section-card">
  <div className="section-title">
    <span>Step 1</span>
    <h2>安装 LeRobot</h2>
    <p>本教程推荐使用 Seeed 验证过的 LeRobot 仓库，并安装 reBot follower、leader 和 MotorBridge 插件。</p>
  </div>

  <details className="content-details">
    <summary>查看 LeRobot 安装视频</summary>
    <div className="video-container">
      <iframe
        loading="lazy"
        width="900"
        height="600"
        src="//player.bilibili.com/player.html?bvid=BV12Fo7BvE7G&autoplay=0&muted=1&mute=1&danmaku=0"
        title="LeRobot installation video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </details>

  <h3>1. 安装 Miniforge</h3>

<CodeBlock language="bash">
{`cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc`}
</CodeBlock>

  <h3>2. 克隆 LeRobot 仓库</h3>

<CodeBlock language="bash">
{`mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git`}
</CodeBlock>

  <h3>3. 创建 Conda 环境并安装 LeRobot</h3>

  :::tip
  关于功能包的详细功能，请参考：

  - [lerobot-teleoperator-rebot-arm-102](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)
  - [lerobot-robot-seeed-b601](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601)
  :::

  LeRobot 仓库已有 `pyproject.toml`，创建 conda 环境并安装所有依赖包。

<CodeBlock language="bash">
{`cd ~/rebot_lerobot

# 创建 conda 环境（Python 3.12）
conda create -y -n lerobot python=3.12

# 激活环境
conda activate lerobot

# 安装 lerobot 主项目（可编辑模式）
pip install -e ./lerobot

# 添加依赖包
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge`}
</CodeBlock>

  <h3>4. 安装 ffmpeg</h3>

  ffmpeg 是视频解码依赖，通过 conda 安装：

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

  :::tip
  **版本说明**：

  - 默认会安装 ffmpeg 7.X（支持 libsvtav1 编码器）
  - 如果遇到版本兼容问题，可以指定安装 ffmpeg 7.1.1：

  <CodeBlock language="bash">
  {`conda install ffmpeg=7.1.1 -c conda-forge`}
  </CodeBlock>

  - 可通过 `ffmpeg -encoders | grep svtav1` 检查是否支持 libsvtav1 编码器
  :::

  <h3>5. Jetson JetPack 6.0+ 设备特殊配置</h3>

  电脑端可跳过这一步。对于 Jetson JetPack 6.0+ 设备，请确保在执行此步骤前按照
  <a href="https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch" target="_blank" rel="noopener noreferrer">此链接教程</a>
  的第 5 步安装了 Pytorch-gpu 和 Torchvision。

<CodeBlock language="bash">
{`conda install -y -c conda-forge "opencv>=4.10.0.84"  # 通过 conda 安装 OpenCV 和其他依赖，仅适用于 Jetson JetPack 6.0+
conda remove opencv   # 卸载 OpenCV
pip3 install opencv-python==4.10.0.84  # 使用 pip3 安装指定版本 OpenCV
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # 该版本需与 torchvision 兼容`}
</CodeBlock>

  <h3>6. 检查 PyTorch 和 Torchvision</h3>

  :::tip
  如果你使用的是 Jetson 设备，请根据
  <a href="https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson" target="_blank" rel="noopener noreferrer">此教程</a>
  安装 PyTorch 和 Torchvision。
  :::

  由于通过 pip 安装 LeRobot 环境时会卸载原有的 PyTorch 和 Torchvision 并安装 CPU 版本，因此需要在 Python 中进行检查。

<CodeBlock language="bash">
{`python3`}
</CodeBlock>

<CodeBlock language="python">
{`import torch
print(torch.cuda.is_available())  # 输出结果应该为 True`}
</CodeBlock>

  如果输出为 `True`，您可以输入 `exit()` 来退出 Python，继续进行下列步骤。  
  如果输出结果为 `False`，需要根据 <a href="https://pytorch.org/index.html" target="_blank" rel="noopener noreferrer">官网教程</a> 重新安装 PyTorch 和 Torchvision。
</section>

## 校准机械臂

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>Step 2</span>
    <h2>校准机械臂</h2>
    <p>校准会影响主从遥操作和数据采集质量。请严格按照零位姿态执行，并保持机械臂静止直到校准完成。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        请清空机械臂工作空间 1 米范围内的贵重物品和无关人员。
        确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
      </p>
    </div>
  </div>

  <details className="content-details">
    <summary>查看校准视频</summary>
    <div className="video-container">
      <iframe
        loading="lazy"
        width="900"
        height="600"
        src="//player.bilibili.com/player.html?bvid=BV1KFo7BiE1h&autoplay=0&muted=1&mute=1&danmaku=0"
        title="reBot B601-DM calibration video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </details>

  接下来，你需要对你的 reBot B601-DM 机器人接上电源和数据线进行校准，以确保在相同的物理位置时，Leader 臂和 Follower 臂的位置信息一致。  
  这个校准过程至关重要，因为它可以让在一个 reBot B601-DM 机器人上训练的神经网络在另一个机器人上也能正常工作。如果需要重新校准机械臂，请完全删除 `~/.cache/huggingface/lerobot/calibration/robots` 或者 `~/.cache/huggingface/lerobot/calibration/teleoperators` 下的文件并重新校准机械臂，否则会出现报错提示，校准的机械臂信息会存储在该目录下的 json 文件中。

  <h3>1. 授予接口权限</h3>

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyUSB*  # leader 臂
sudo chmod 666 /dev/ttyACM*  # follower 臂（串口桥）`}
</CodeBlock>

  <h3>2. 校准 follower 臂</h3>

  B601-DM 只需要在组装完成后校准一次，以下是校准指令，参考零位如图（夹爪要完全闭合）。

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*  # follower 臂（串口桥）

lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao`}
</CodeBlock>

  <div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" alt="B601-DM follower zero position" />
  </div>

  <h3>3. 校准 leader 臂</h3>

  校准的步骤至关重要，会直接影响机械臂是否正常运行，请严格按照流程执行。

  <details className="content-details">
    <summary>reBot 102 leader</summary>

    :::tip
    **reBot 102 leader 校准说明**：

    - 启动校准时，reBot Arm 102 的每个舵机当前位置会被**重设为零点**
    - `joint_ranges`（关节限位）取自配置文件 `config_rebot_arm_102_leader.py`，而非校准数据
    - 如果某个关节看起来总是卡在某个限位附近，优先检查 `joint_ranges` 配置
    - 关节方向定义在配置文件中，若方向不一致需修改配置而非重新校准
    - reBot 102 leader 使用 USB 转 UART 模块，通常映射为 `/dev/ttyUSB*`
    - 使用 `ls /dev/ttyUSB*` 查看实际端口号

    如果是初次连接，可能会报找不到串口 `/dev/ttyACM0`，此时可能是因为 `brltty` 在占用该串口，请执行如下步骤：
    :::

<CodeBlock language="bash">
{`sudo dmesg | grep ttyUSB # 看到最后一行显示 disconnected
sudo apt remove brltty # 移除 brltty`}
</CodeBlock>

    <div className="image-frame">
      <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" alt="reBot 102 leader zero position" />
    </div>

    按照提示，将 leader 机械臂移动到上图所示的零点。

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}
</CodeBlock>

    保持静止，然后按下 Enter，直到提示校准完成。
  </details>

  :::danger
  遥操作过程中如果主从臂电源脱落、电源接触不良或信号线脱落，必须先停止代码，让机械臂恢复到初始 0 点位置，再重新上电运行程序，避免数据错乱导致机械臂失控造成危险。
  :::
</section>

## 遥操作

<section id="teleoperation" className="section-card">
  <div className="section-title">
    <span>Step 3</span>
    <h2>遥操作</h2>
    <p>在接入相机和采集数据前，先确认 leader 到 follower 的控制链路稳定。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        请清空机械臂工作空间 1 米范围内的贵重物品和无关人员。
        确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
      </p>
    </div>
  </div>

  :::danger
  遥操作过程中如果主从臂电源脱落、电源接触不良或信号线脱落，必须先停止代码，让机械臂恢复到初始 0 点位置，再重新上电运行程序，避免数据错乱导致机械臂失控造成危险。
  :::

  先对串口给予权限：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyUSB*  # leader 臂
sudo chmod 666 /dev/ttyACM*  # follower 臂（串口桥）`}
</CodeBlock>

  运行遥操作：

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}
</CodeBlock>

  <details className="content-details">
    <summary>查看遥操作演示视频</summary>
    <div className="video-container">
      <iframe
        loading="lazy"
        width="900"
        height="600"
        src="https://player.bilibili.com/player.html?bvid=BV1A6JM62EeK&page=1&high_quality=1&autoplay=0&muted=1&mute=1&danmaku=0"
        title="reBot teleoperation demo video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </details>
</section>

## 添加摄像头

<section id="camera" className="section-card">
  <div className="section-title">
    <span>Step 4</span>
    <h2>添加摄像头</h2>
    <p>相机配置会直接影响数据质量。建议先用低分辨率和单相机跑通，再逐步增加相机数量和分辨率。</p>
  </div>

  <details className="content-details">
    <summary>如果使用 RealSense D435i / D405</summary>

    RealSense 深度相机可以为 LeRobot 提供 RGB-D 感知能力，适用于目标识别、点云重建以及桌面操作等任务。这里推荐使用的型号是 **RealSense D405** 和 **RealSense D435i**。

    **RealSense D405**

    <div className="image-frame">
      <img width={420} src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" alt="RealSense D405" />
    </div>

    RealSense D405 是一款短距离双目深度相机，专为高精度近距离任务（如桌面机器人操作）设计，典型工作范围为 **7 cm 到 50 cm**。

    **RealSense D435i**

    <div className="image-frame">
      <img width={420} src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" alt="RealSense D435i" />
    </div>

    RealSense D435i 集成了深度感知、RGB 成像以及 IMU，适用于中近距离应用，例如 3D 重建、SLAM 以及机器人环境感知。

    **1. 切换到 Camera 分支**

    当前相机支持位于 `DepthCameraSupport` 分支：

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

    确认当前分支：

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

    预期输出：

<CodeBlock language="text">
{`DepthCameraSupport`}
</CodeBlock>

    **2. 安装 RealSense**

    如果只使用 RealSense：

<CodeBlock language="bash">
{`pip install -e ".[realsense]"`}
</CodeBlock>

    **3. 给予权限**

<CodeBlock language="bash">
{`sudo chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

    **4. 检测相机**

<CodeBlock language="bash">
{`lerobot-find-cameras realsense`}
</CodeBlock>

    该步骤将输出：

    - 相机型号
    - 序列号
    - USB 信息
    - 默认流配置

    **5. RealSense 示例**

    双 RealSense 测试：

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}
</CodeBlock>

    **6. 参数说明**

    - `depth_alpha` 用于控制深度图的缩放比例，可根据显示效果和目标距离范围进行调整。
    - 如果连接三台及以上深度相机，建议将 `fps` 降低至 `15` 以提高整体稳定性。
    - 建议分辨率保持在 `640x480`，以在稳定性和实时性能之间取得平衡。
  </details>

  <details className="content-details">
    <summary>如果使用 Orbbec Gemini2 深度相机</summary>

    <div className="image-frame">
      <img width={800} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" alt="Orbbec Gemini 2 3D Camera" />
    </div>

    <div className="get-one-now-panel">
      <a className="get-one-now-button" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer">
        立即购买 / Get One Now
      </a>
    </div>

    该设备提供同步的 RGB 和深度数据流，并具有精确的深度与彩色对齐能力。结合双目深度感知和内置 6 轴 IMU，非常适用于目标检测、3D 感知、建图以及导航等机器人任务。其紧凑设计以及完整的 Orbbec SDK 支持，使其既适合科研也适用于实际部署。

    <div className="image-frame">
      <img width={400} src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" alt="Orbbec Gemini 336" />
    </div>

    Gemini 336 是 Gemini 330 系列的新成员。它继承了 Gemini 335 强大的深度性能，并在室内反光区域、高动态场景中的暗区以及户外强光环境下进一步提升了深度成像质量。在机器人应用中，可为感知、定位和操作等任务提供更稳定、更高质量的深度数据。

    **步骤 1：安装 Orbbec SDK 依赖**

    **1. 切换到 Camera 分支**

    当前相机支持位于 `DepthCameraSupport` 分支：

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

    确认当前分支：

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

    预期输出：

<CodeBlock language="text">
{`DepthCameraSupport`}
</CodeBlock>

    **2. 安装 Orbbec**

<CodeBlock language="bash">
{`pip install -e ".[orbbec]"`}
</CodeBlock>

    **3. 给予权限**

<CodeBlock language="bash">
{`sudo chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

    **4. 检测相机**

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

    该步骤将输出：

    - 相机型号
    - 序列号
    - USB 信息
    - 默认流配置

    **5. Orbbec 示例**

    单 Orbbec 测试：

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}
</CodeBlock>

    **6. 参数说明**

    - `depth_alpha` 控制深度图缩放比例，建议从 `0.2` 开始，根据显示效果微调。
    - 如果连接三台及以上深度相机，建议将 `fps` 降低至 `15` 以获得更好的稳定性。
    - 建议分辨率保持在 `640x480`，以获得更稳定的显示和数据传输。

    **6. 常见问题**

    如果出现如下错误：

<CodeBlock language="text">
{`No Orbbec camera found for 'XXXX'`}
</CodeBlock>

    通常表示配置中的序列号与当前连接设备不匹配。请运行：

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

    然后确认实际的 `serial`，并更新命令中的 `serial_number_or_name`。

    **作者与贡献**

    - 作者：张家铨，王文钊 - 华南师范大学
  </details>

  <details className="content-details">
    <summary>如果使用普通相机</summary>

    为了实例化摄像头，您需要一个摄像头标识符。这个标识符可能会在您重启电脑或重新插拔摄像头时发生变化，这主要取决于您的操作系统。

    要查找连接到您系统的**摄像头索引**，请运行以下脚本：

<CodeBlock language="bash">
{`lerobot-find-cameras opencv # or realsense for Intel Realsense cameras`}
</CodeBlock>

    终端会打印相关摄像头信息。

<CodeBlock language="text">
{`--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)`}
</CodeBlock>

    您可以在 `~/lerobot/outputs/captured_images` 目录中找到每台摄像头拍摄的图片。

    :::warning
    在 **macOS** 中使用 Intel RealSense 摄像头时，您可能会遇到 **“Error finding RealSense cameras: failed to set power state”** 的错误。这可以通过使用 `sudo` 权限运行相同的命令来解决。请注意，在 **macOS** 中使用 RealSense 摄像头是不稳定的。
    :::

    之后，您就可以在遥控操作时在电脑上显示摄像头画面了，只需运行以下代码即可。这对于在录制第一个数据集之前准备您的设置非常有用。

    :::danger
    遥操作过程中如果主从臂电源脱落、电源接触不良或信号线脱落，必须先停止代码，让机械臂恢复到初始 0 点位置，再重新上电运行程序，避免数据错乱导致机械臂失控造成危险。
    :::

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}
</CodeBlock>

    :::tip
    `fourcc: "MJPG"` 格式图像是经过压缩后的图像，你可以尝试更高分辨率。当然你也可以尝试 `YUYV` 格式图像，但是这会导致图像的分辨率和 FPS 降低，并可能导致机械臂运行卡顿。目前 `MJPG` 格式下可支持 3 个摄像头以 `1920*1080` 分辨率保持 `30FPS`，但是依然不推荐 2 个摄像头通过同一个 USB HUB 接入电脑。
    :::

    如果您有更多摄像头，可以通过更改 `--robot.cameras` 参数来添加。您应该注意 `index_or_path` 的格式，它由 `python -m lerobot.find_cameras opencv` 命令输出的摄像头 ID 的最后一位数字决定。

    例如，如果你想添加摄像头：

    {/* TODO: reBot 多摄像头配置命令 */}

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}
</CodeBlock>

    :::danger
    遥操作过程中如果主从臂电源脱落、电源接触不良或信号线脱落，必须先停止代码，让机械臂恢复到初始 0 点位置，再重新上电运行程序，避免数据错乱导致机械臂失控造成危险。
    :::
  </details>
</section>

## 数据集制作与采集

<section id="record-dataset" className="section-card">
  <div className="section-title">
    <span>Step 5</span>
    <h2>数据集制作与采集</h2>
    <p>先从一个简单、稳定、重复性高的任务开始，例如“抓取黑色方块并放入盒子”。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        请清空机械臂工作空间 1 米范围内的贵重物品和无关人员。
        确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
      </p>
    </div>
  </div>

  <details className="content-details">
    <summary>查看数据采集视频</summary>
    <div className="video-container">
      <iframe
        loading="lazy"
        width="900"
        height="600"
        src="//player.bilibili.com/player.html?bvid=BV1W3okBNEAJ&autoplay=0&muted=1&mute=1&danmaku=0"
        title="reBot dataset recording video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </details>

  :::danger
  遥操作过程中如果主从臂电源脱落、电源接触不良或信号线脱落，必须先停止代码，让机械臂恢复到初始 0 点位置，再重新上电运行程序，避免数据错乱导致机械臂失控造成危险。
  :::

  <details className="content-details">
    <summary>如果你想数据集保存在本地</summary>

    {/* TODO: reBot 本地数据采集命令 */}

<CodeBlock language="bash">
{`lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}
</CodeBlock>

    其中 `repo_id` 可以自定义修改，`push_to_hub=false`。最后数据集会保存在主目录的 `~/.cache/huggingface/lerobot` 下，并创建上述 `seeed_rebot_b601_dm/test` 文件夹。
  </details>

  <details className="content-details">
    <summary>如果您想使用 Hugging Face Hub 的功能来上传您的数据集</summary>

    如果您想使用 Hugging Face Hub 的功能来上传您的数据集，并且您之前尚未这样做，请确保您已使用具有写入权限的令牌登录，该令牌可以从
    <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener noreferrer">Hugging Face 设置</a>
    中生成。

<CodeBlock language="bash">
{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential`}
</CodeBlock>

    将您的 Hugging Face 仓库名称存储在一个变量中，以运行以下命令：

<CodeBlock language="bash">
{`HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER`}
</CodeBlock>

    记录 5 个回合并将您的数据集上传到 Hub：

    {/* TODO: reBot 数据采集并上传到 Hugging Face 命令 */}

<CodeBlock language="bash">
{`lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}
</CodeBlock>

    你会看到类似如下数据：

<CodeBlock language="text">
{`INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)`}
</CodeBlock>
  </details>

  <h3>记录功能</h3>

  **record** 功能提供了一套工具，用于在机器人运行期间捕获和管理数据。

  **1. 数据存储**

  - 数据以 `LeRobotDataset` 格式存储，并在记录过程中保存到磁盘中。
  - 默认情况下，数据集在记录完成后会推送到你的 Hugging Face 页面。
  - 若要禁用上传，请使用：`--dataset.push_to_hub=False`。

  **2. 检查点与恢复**

  - 在记录过程中会自动创建检查点。
  - 如果记录过程中断，可以通过重新运行相同的命令并添加 `--resume=true` 来恢复记录。

  ⚠️ **重要提示**：在恢复时，需将 `--dataset.num_episodes` 设置为要额外记录的剧集数量（而不是数据集中目标的总剧集数量）。

  - 若要从头开始记录，请**手动删除**数据集目录。

  **3. 记录参数**

  通过命令行参数设置数据记录的流程：

  | 参数 | 描述 | 默认值 |
  |------|------|--------|
  | --dataset.episode_time_s | 每个数据剧集的持续时间（秒） | 60 |
  | --dataset.reset_time_s | 每个剧集后环境重置时间（秒） | 60 |
  | --dataset.num_episodes | 要记录的总剧集数量 | 50 |

  **4. 记录过程中的键盘控制**

  使用键盘快捷键控制数据记录流程：

  | 键 | 动作 |
  |----|------|
  | →（右箭头） | 提前终止当前剧集/重置；进入下一个。 |
  | ←（左箭头） | 取消当前剧集；重新录制。 |
  | ESC | 立即停止会话，编码视频，并上传数据集。 |

  :::tip
  如果你的键盘按下后没有反应，可能你需要降低 `pynput` 的版本，例如安装 1.6.8 版本。
  :::

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

  <h3>数据收集技巧</h3>

  - **任务建议**：在不同位置抓取物体并将其放入箱子中。
  - **规模**：记录 ≥50 个剧集（每个位置 10 个剧集）。
  - **一致性**：
    - 保持摄像头固定。
    - 保持相同的抓取行为。
    - 确保操作的物体在摄像头画面中可见。
  - **逐步推进**：
    - 先从可靠的抓取开始，然后再增加变化（新位置、抓取技巧、摄像头调整）。
    - 避免复杂性急剧增加，以防止失败。

  💡 **经验法则**：仅使用摄像头画面作为指导，只根据屏幕反馈的视频图像，来控制机械臂完成任务。

  如果你想要深入了解这个重要主题，可以查看我们撰写的关于什么是好的数据集的
  <a href="https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset" target="_blank" rel="noopener noreferrer">博客文章</a>。

  <h3>故障排除</h3>

  Linux 问题：如果在记录过程中右箭头 / 左箭头 / ESC 键无响应：

  - 验证 `$DISPLAY` 环境变量是否已设置（参见 <a href="https://pynput.readthedocs.io/en/latest/limitations.html" target="_blank" rel="noopener noreferrer">pynput 限制</a>）。
</section>

## 可视化数据集

<section id="visualize-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>可视化数据集</h2>
    <p>录制完成后，建议先可视化检查数据质量，再进入训练阶段。</p>
  </div>

<CodeBlock language="bash">
{`echo \${HF_USER}/rebot_test`}
</CodeBlock>

  如果您上传了数据，您也可以在本地通过以下命令进行可视化：

<CodeBlock language="bash">
{`lerobot-dataset-viz \
  --repo-id \${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false`}
</CodeBlock>

  如果您使用了 `--dataset.push_to_hub=false`，没有上传数据，您也可以通过以下命令在本地进行可视化：

<CodeBlock language="bash">
{`lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false`}
</CodeBlock>

  这里，`seeed_rebot_b601_dm/test` 是数据收集时自定义的 `repo_id` 名称。
</section>

## 回放一个数据集

<section id="replay-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>回放一个数据集</h2>
    <p>该步骤可用于验证数据集动作与真实机械臂执行之间的一致性。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        请清空机械臂工作空间 1 米范围内的贵重物品和无关人员。
        确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
      </p>
    </div>
  </div>

  :::tip
  不稳定，可跳过，可尝试。
  :::

  现在，尝试在您的机器人上重播第一个数据集：

  {/* TODO: reBot 数据集回放命令 */}

<CodeBlock language="bash">
{`lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0`}
</CodeBlock>

  此时，机器人应该做出与你遥操记录时一样的动作。
</section>

## 训练与评估

<section id="training" className="section-card">
  <div className="section-title">
    <span>Step 6</span>
    <h2>训练与评估</h2>
    <p>建议先从 ACT 跑通完整流程，再根据显存和任务复杂度尝试 SmolVLA、Pi0、Pi0.5 或 GR00T。</p>
  </div>

  <details className="content-details">
    <summary>ACT</summary>

    参考官方教程 <a href="https://huggingface.co/docs/lerobot/act" target="_blank" rel="noopener noreferrer">ACT</a>。

    **训练**

    要训练一个控制您机器人策略，使用 `python -m lerobot.scripts.train` 脚本。需要一些参数。以下是一个示例命令：

<CodeBlock language="bash">
{`lerobot-train \
  --dataset.repo_id=\${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000`}
</CodeBlock>

    **如果您想在本地数据集上进行训练，请确保 `repo_id` 与数据收集时使用的名称匹配，并添加 `--policy.push_to_hub=false`。**

<CodeBlock language="bash">
{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}
</CodeBlock>

    :::tip
    如果您是 RTX 50 系列显卡，在训练时需要增加 `--dataset.video_backend=pyav` 部分，绕过 torchvision 预览版的 API 缺失，即训练命令为：
    :::

<CodeBlock language="bash">
{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}
</CodeBlock>

    **命令解释**

    - **数据集指定**：我们通过 `--dataset.repo_id=\${HF_USER}/rebot_test` 参数提供了数据集。
    - **训练步数**：我们通过 `--steps=300000` 修改训练步数，算法默认为 800000，根据自己的任务难易程度，来进行调整。如果不确定，可以调高一些，因为训练过程中会生成检查点，评估可以从检查点开始。
    - **策略类型**：我们使用 `policy.type=act` 提供了策略，同样你可以更换 [act, diffusion, pi0, pi0fast, sac, smolvla] 等策略，这将从 `configuration_act.py` 加载配置。重要的是，这个策略会自动适应您机器人的电机状态、电机动作和摄像头数量，这些信息已保存在您的数据集中。
    - **设备选择**：我们提供了 `policy.device=cuda`，因为我们正在 Nvidia GPU 上进行训练，但您可以使用 `policy.device=mps` 在 Apple Silicon 上进行训练。
    - **可视化工具**：我们提供了 `wandb.enable=true` 来使用 <a href="https://docs.wandb.ai/quickstart" target="_blank" rel="noopener noreferrer">Weights and Biases</a> 可视化训练图表。这是可选的，但如果您使用它，请确保您已通过运行 `wandb login` 登录。

    **评估**

    您可以使用 <a href="https://github.com/huggingface/lerobot/blob/main/lerobot/record.py" target="_blank" rel="noopener noreferrer">`lerobot/record.py`</a> 中的 `record` 功能，但需要将策略训练结果权重文件作为输入。例如，运行以下命令记录 10 个评估回合：

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model`}
</CodeBlock>

    1. `--policy.path` 参数，指示您的策略训练结果权重文件的路径，例如 `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`。如果您将模型训练结果权重文件上传到 Hub，也可以使用模型仓库，例如 `\${HF_USER}/act_rebot_test`。
    2. 数据集的名称 `dataset.repo_id` 以 `eval_` 开头，这个操作会在你评估的时候为你单独录制评估时候的视频和数据，将保存在 `eval_` 开头的文件夹下，例如 `seeed/eval_test123`。
    3. 如果评估阶段遇到 `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`，请先删除 `eval_` 开头的这个文件夹，再次运行程序。
    4. 当遇到 `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`，请注意 `--robot.cameras` 这个参数中的 `front` 和 `side` 等关键词必须和采集数据集的时候保持严格一致。
  </details>

  <details className="content-details">
    <summary>SmolVLA</summary>

    参考官方教程 <a href="https://huggingface.co/docs/lerobot/smolvla" target="_blank" rel="noopener noreferrer">SmolVLA</a>。

    SmolVLA 是 Hugging Face 提供的**轻量级机器人基础模型**（foundation model）。它的设计目标是：让你把自己录制的 LeRobot 数据集拿来**快速微调（fine-tune）**，更快在真实机器人上跑出效果。

    简单理解它的输入 / 输出：

    - 输入：多路相机画面 + 机器人当前状态（传感器 / 关节等）+ 一句自然语言任务指令
    - 输出：一段连续的动作（action chunk），用来驱动机械臂执行任务

<CodeBlock language="bash">
{`pip install -e ".[smolvla]"`}
</CodeBlock>

    **收集数据集（建议）**

    SmolVLA 是“底座模型”，要在你的桌面、你的相机、你的夹爪 / 物体上表现好，通常需要用你自己的数据做微调。

    - 建议从 ~50 个 episode 开始（太少容易学不会 / 泛化差）。
    - 如果你的任务有“变化项”（例如方块在桌面上的不同位置），请确保每一种变化都有足够示范：
      - 例：5 个位置 × 每个位置 10 个 episode = 50 个 episode
    - 经验：只录 25 个 episode 往往不够，数据质量和数量都很关键。

    **训练**

    使用 `smolvla_base`（预训练的 450M 模型）作为起点，在你的数据集上微调。官方示例是训练 20k steps；在一张 A100 上大约需要 4 小时（仅供参考，实际会因硬件而变）。

    如果你没有可用的 GPU，可以考虑用 Colab 的 notebook 方式训练（见官方教程）。

<CodeBlock language="bash">
{`lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true`}
</CodeBlock>

    提示：

    - 显存不够就先把 `--batch_size` 调小；能跑通后再慢慢加大。
    - 想快速了解可用参数：`lerobot-train --help`

    **验证**

    评估阶段会加载你微调后的模型，让机器人执行任务，并把评估过程录成一个新数据集（便于回看视频、复盘效果）。

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}
</CodeBlock>

    参数怎么填：

    - `--robot.port`：改成你自己机器上识别到的串口，常见是 `/dev/ttyACM0` 或 `/dev/ttyUSB0`。
    - `--robot.id`：你的机器人 ID，要和你校准 / 录制时使用的保持一致。
    - `--robot.cameras`：改成你真实相机的 `index_or_path`，并确保相机键名（比如 `front`、`side`）和你录制数据集时完全一致。
    - `--dataset.single_task`：建议与录制数据集时的任务描述一致。
    - `--dataset.repo_id`：评估输出的数据集名；如果你登录了 Hugging Face，它会被创建 / 上传到你的账号下。
    - `--policy.path`：
      - 如果模型在本地：填训练输出目录下的权重路径，例如 `outputs/train/my_smolvla/checkpoints/last/pretrained_model`
      - 如果模型在 Hub：填 `\${HF_USER}/FINETUNE_MODEL_NAME`

    可选：如果你想在评估的 episode 之间“手动遥操调整一下”，可以加入 teleop（按你的设备与配置填写）：

<CodeBlock language="bash">
{`--teleop.type=rebot_arm_102_leader \
--teleop.port=/dev/ttyUSB0 \
--teleop.id=rebot_arm_102_leader`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>Pi0</summary>

    参考官方教程 <a href="https://huggingface.co/docs/lerobot/pi0" target="_blank" rel="noopener noreferrer">Pi0</a>。

    π₀（Pi0）是 Physical Intelligence 提出的 **Vision-Language-Action（视觉-语言-动作）** 模型，用于更“通用”的机器人控制。你可以把它理解为：它既能看相机画面，也能读懂一句自然语言指令，然后输出控制机械臂的动作。

    在 LeRobot 里使用它很简单：训练时把策略类型设为 `--policy.type=pi0` 即可（不重复赘述 ACT 里讲过的通用训练 / 评估概念）。

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

    :::tip
    如果你使用的是较旧的 LeRobot 版本（例如 0.4.0），安装 `pi` 依赖时可能需要从 GitHub 源安装（官方说明后续补丁会修复）：
    :::

<CodeBlock language="bash">
{`pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"`}
</CodeBlock>

    **训练**

<CodeBlock language="bash">
{`lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=\${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}
</CodeBlock>

    常用参数（只挑 Pi0 特有 / 最常调的）：

    - `--policy.pretrained_path=lerobot/pi0_base`：基础模型。官方也提供 `lerobot/pi0_libero`（更偏 Libero 数据集的版本），你可以按任务尝试切换。
    - `--policy.compile_model=true`：启用编译优化，训练可能更快（首次编译会慢一点）。
    - `--policy.gradient_checkpointing=true`：显著省显存，适合显存吃紧时开启。
    - `--policy.dtype=bfloat16`：混合精度，速度 / 显存更友好（硬件支持时推荐）。
    - `--policy.train_expert_only=true`（省显存技巧）：冻结大模型（VLM）部分，只训练“动作专家”和投影层；更省显存，但可训练能力会更受限，适合先跑通或小数据快速试验。

    **验证**

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=\${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>Pi0.5</summary>

    参考官方教程 <a href="https://huggingface.co/docs/lerobot/pi05" target="_blank" rel="noopener noreferrer">Pi0.5</a>。

    π₀.₅（Pi0.5）同样是 Physical Intelligence 提出的 **Vision-Language-Action（视觉-语言-动作）** 模型，可以理解为 π₀ 的“升级版”，重点增强了**开放世界泛化**能力。

    在 LeRobot 里使用它：把策略类型设为 `--policy.type=pi05` 即可。

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

    :::tip
    如果你使用的是较旧的 LeRobot 版本（例如 0.4.0），安装 `pi` 依赖时可能需要从 GitHub 源安装（官方说明后续补丁会修复）：
    :::

<CodeBlock language="bash">
{`pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"`}
</CodeBlock>

    **训练**

<CodeBlock language="bash">
{`lerobot-train \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=\${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}
</CodeBlock>

    常用参数（Pi0.5 相关）：

    - `--policy.pretrained_path=lerobot/pi05_base`：基础模型。官方也提供 `lerobot/pi05_libero`。
    - `--policy.train_expert_only=true`（省显存技巧）：冻结大模型（VLM）部分，只训练“动作专家”和投影层。
    - `--policy.normalization_mapping=...`：如果你的数据集归一化统计不匹配 / 缺失，可以用该映射强制指定归一化方式。

    **验证**

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=\${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>GR00T N1.5</summary>

    请参考官方教程 <a href="https://huggingface.co/docs/lerobot/groot" target="_blank" rel="noopener noreferrer">GR00T N1.5</a>。

    GR00T N1.5 是 NVIDIA 提供的一个开放基础模型（foundation model）。在 LeRobot 中使用它的关键点是把策略类型设为 `--policy.type=groot`。不过需要注意：目前 GR00T N1.5 对环境要求更高（依赖 FlashAttention，且需要 CUDA GPU），建议先把 ACT / Pi0 跑通，再来尝试。

    **安装（重要）**

    截至官方文档目前的说明，GR00T N1.5 需要 **flash-attn** 才能工作，并且只能在**支持 CUDA 的设备**上使用。

    建议步骤（按顺序执行）：

    1. 按安装指南先把基础环境准备好（Python、CUDA、驱动等），**这一步先不要安装 `lerobot`**。
    2. 安装 PyTorch（版本范围以官方为准）：

<CodeBlock language="bash">
{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"`}
</CodeBlock>

    :::tip
    如果您是 RTX 50 系列，需要满足下面要求：Python=3.10，CUDA=12.8，Torch=2.7.1
    :::

<CodeBlock language="bash">
{`pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128`}
</CodeBlock>

    3. 安装 flash-attn 依赖与 flash-attn 本体：

<CodeBlock language="bash">
{`pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print('Flash Attention imported successfully')"`}
</CodeBlock>

    :::tip
    如果您是 RTX 50 系列，需要满足下面要求：flash_attn=2.8.0
    :::

<CodeBlock language="bash">
{`pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation`}
</CodeBlock>

    4. 安装 LeRobot 的 groot 依赖：

<CodeBlock language="bash">
{`pip install "lerobot[groot]"`}
</CodeBlock>

    :::tip
    如果 flash-attn 安装失败，通常与（1）PyTorch / CUDA 版本不匹配、（2）编译依赖缺失或（3）环境过新 / 过旧有关。遇到这种情况优先对照官方 GR00T 文档与 PyTorch 安装说明排查。
    :::

    **训练（微调）**

    官方给了多 GPU 的训练示例（`accelerate launch --multi_gpu ...`）。如果你只有一张 GPU，也可以先用单进程方式跑通（是否支持 / 参数细节以官方文档为准）。

    多 GPU（变量需要自己替换）：

<CodeBlock language="bash">
{`accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME`}
</CodeBlock>

    参数说明（最常需要修改的几项）：

    - `--dataset.repo_id`：你的训练数据集（Hub 上的 `用户名/数据集名` 或本地缓存对应的 `repo_id`）。
    - `--output_dir`：训练输出目录（权重 / 检查点会放在这里）。
    - `--steps`、`--batch_size`：训练步数与 batch，大模型对显存很敏感，跑不动就先减小 `batch_size`。
    - `--policy.repo_id`：如果你要把模型推到 Hub，填你希望创建的模型仓库名。

    **验证（上机运行 / 评估）**

    训练完成后可以像其它策略一样用 `lerobot-record` 做评估 / 录制回放。对于 reBot B601-DM 单臂用户，请参考以下命令：

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=\${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10`}
</CodeBlock>

    License：该模型遵循 Apache 2.0 许可证（与原始 GR00T 仓库一致）。
  </details>

  <details className="content-details">
    <summary>（可选）使用 PEFT 进行高效微调</summary>

    PEFT（Parameter-Efficient Fine-Tuning，参数高效微调）是一套“参数高效适配”方法与工具，用于在**不更新全部模型参数**的前提下，让大型预训练模型更快适配新任务。对于 LeRobot 的预训练策略（例如 SmolVLA、π₀ 等），通常可以只训练少量“适配器”参数（例如 LoRA），在降低显存占用与训练成本的同时获得接近全量微调的效果。

    **安装**

    安装 LeRobot 的 `peft` 可选依赖后即可使用 PEFT 相关参数：

<CodeBlock language="bash">
{`pip install -e ".[peft]"`}
</CodeBlock>

<CodeBlock language="bash">
{`pip install "lerobot[peft]"`}
</CodeBlock>

    更多适配方法与概念说明可参考官方文档：  
    <a href="https://huggingface.co/docs/peft/index" target="_blank" rel="noopener noreferrer">🤗 PEFT 文档</a>

    **示例：用 LoRA 微调 SmolVLA（Libero 的 libero_spatial 子任务）**

    下面示例展示如何在 `HuggingFaceVLA/libero` 数据集上，对 `lerobot/smolvla_base` 进行 LoRA 微调。参数名称以当前 LeRobot 版本为准，建议同时参考 `lerobot-train --help`。

<CodeBlock language="bash">
{`lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64`}
</CodeBlock>

    **PEFT 关键参数说明**

    - `--peft.method_type`：选择要使用的 PEFT 方法。LoRA（Low-Rank Adapter）是最常用的方法之一。
    - `--peft.r`：LoRA 的 rank。一般来说，rank 越大可表达能力越强，但参数量与显存占用也会增加。

    **指定要注入 LoRA 的层（可选）**

    默认情况下，PEFT 往往会针对模型中最关键的投影层（例如注意力的 `q_proj`、`v_proj` 等）注入 LoRA，并可能额外覆盖状态 / 动作相关的投影层。若需要针对不同层，可以使用 `--peft.target_modules` 指定目标层。

    常见写法包括：

    1）按模块名后缀列表指定（示例）：

<CodeBlock language="bash">
{`--peft.target_modules="['q_proj', 'v_proj']"`}
</CodeBlock>

    2）使用正则表达式指定（示例，需按模型实际模块名调整）：

<CodeBlock language="bash">
{`--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'`}
</CodeBlock>

    **指定某些层进行全量训练（可选）**

    如果希望某些模块“全量训练”（而不是只注入 LoRA），可以使用 `--peft.full_training_modules` 指定。例如仅全量训练 `state_proj`：

<CodeBlock language="bash">
{`--peft.full_training_modules="['state_proj']"`}
</CodeBlock>

    **学习率建议（经验值）**

    LoRA 的学习率通常可以比全量微调更大一个量级（常见经验：约 10×）。例如全量微调常用 `1e-4`，LoRA 可以从 `1e-3` 起步；若你启用了学习率衰减（scheduler），最终学习率也常设置在 `1e-4` 附近作为参考。
  </details>

  <details className="content-details">
    <summary>（可选）在训练时使用多 GPU 训练</summary>

    **1. 训练步骤**

    **方式一：使用命令行参数进行多卡训练**

    首先，在 LeRobot 环境中安装训练加速系统：

<CodeBlock language="bash">
{`pip install accelerate`}
</CodeBlock>

    接着运行以下命令来开始多卡训练：

<CodeBlock language="bash">
{`accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}
</CodeBlock>

    关键的 accelerate 参数说明：

    - `--multi_gpu`：启用多 GPU 训练
    - `--num_processes=2`：使用的 GPU 数量（通常等于 GPU 张数）
    - `--mixed_precision=fp16`：使用 fp16 混合精度（如果硬件支持，也可以使用 bf16）

    请注意，**bf16 需要硬件支持**，并非所有 GPU 都可以使用。

    | 精度类型 | 硬件支持情况 |
    |--|--|
    | fp16 | 几乎所有 NVIDIA GPU 均支持 |
    | bf16 | 仅部分较新的 GPU 支持（如 Ampere 及更新架构） |

    如果你的 GPU 不支持 bf16，请在 accelerate 配置中选择 fp16，或在命令行中显式指定 fp16。

    **方式二：使用 accelerate 配置文件（可选）**

    如果您经常进行多卡训练，也可以将上述的训练配置进行保存，从而避免繁琐的命令行输入。

    > **提示**：如果你不理解这一节的内容，或者只是想尽快跑起来训练，**可以直接跳过本节，使用方式一（命令行参数）即可。**

    `accelerate config` 的作用是：**将您的硬件环境（GPU 数量、混合精度等）保存为一个配置文件，以后运行 `accelerate launch` 时无需重复填写这些信息。**

    它并不会改变 LeRobot 的训练逻辑，只是为了减少重复输入参数。如果只是**偶尔使用多 GPU**，或你是第一次尝试，**不使用它完全没有问题**。

    运行：

<CodeBlock language="bash">
{`accelerate config`}
</CodeBlock>

    在交互式配置过程中，对于单机多 GPU 的常见场景，可以按如下方式选择：

    - Compute environment：This machine
    - Number of machines：1
    - Number of processes：使用的 GPU 数量（通常等于 GPU 张数）
    - GPU ids to use：直接回车（表示使用所有 GPU）
    - Mixed precision：优先选择 fp16；若确认 GPU 支持 bf16，也可选择 bf16

    完成配置后，可以直接使用以下命令进行训练：

<CodeBlock language="bash">
{`accelerate launch $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}
</CodeBlock>

    **多 GPU 训练对于训练参数的影响以及调整策略**

    LeRobot 不会根据 GPU 数量自动调整学习率或训练步骤，以避免用户在不知情的情况下改变训练行为。这与其他常用的分布式训练框架不同。

    如果您希望**在多 GPU 训练时调整超参数**，需要按以下步骤手动完成。

    **对于步数的影响以及调整策略**

    由于多 GPU 会使有效 batch size 增大（batch_size × num_gpus），可以通过以下例子直观理解：如果将训练比作走路，一张卡训练是一步迈出去一米，那么两张卡训练就是一步迈出两米。如果希望达到同等距离（模型学习到的数据总量），双卡训练应该将步数减少至单卡训练的二分之一。同理，n 张卡是 1/n。

    因此在多 GPU 训练的时候，应该适当降低训练的步数（steps）。

    单卡训练时：

    - batch_size = 8
    - steps = 100000

    双卡训练（有效 batch size 变为 16）：

    - batch_size 如果仍然被您设定为 8
    - steps 可以减少为 50000

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act`}
</CodeBlock>

    **对于学习率的影响以及调整策略**

    使用多块 GPU 时，每一步更新会使用更多样本。如果你希望模型“学习速度”保持和单卡相近，通常需要按 GPU 数量等比例增大学习率。

    - 新的学习率 = 单卡学习率 × GPU 数量

    例如，单卡训练时学习率 `optimizer.lr` 为 `1e-4`，使用 2 张 GPU 时，可以改为 `2e-4`：

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \
  --optimizer.lr=2e-4 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act`}
</CodeBlock>

    注意：

    这些并不是强制性的规则，而是常见的经验做法。如果你不确定如何调整，也可以先：

    - 保持学习率不变
    - 保持训练步数不变

    只要训练过程稳定，结果依然是可用的。

    如需更高级的配置和故障排除，请参见 <a href="https://huggingface.co/docs/accelerate/index" target="_blank" rel="noopener noreferrer">Accelerate</a> 文档。如果你想了解更多如何在大量 GPU 上训练，可以看看这份超棒的指南：<a href="https://github.com/huggingface/ultrascale-playbook" target="_blank" rel="noopener noreferrer">Ultrascale Playbook</a>。
  </details>
</section>

## 进阶部署：异步推理

<section id="async-inference" className="section-card">
  <div className="section-title">
    <span>Advanced</span>
    <h2>在部署时使用异步推理</h2>
    <p>异步推理可以让机器人执行当前动作块的同时，服务器提前计算下一块动作，从而减少空等并提升响应性。</p>
  </div>

  <details className="content-details">
    <summary>（可选）在部署时使用异步推理</summary>

    在不启用异步推理时，LeRobot 的控制流程可以理解为常规的顺序式 / 同步式推理：策略先预测一段动作，再执行这段动作，之后再等待下一次预测。对于较大的模型，这会导致机器人在等待新动作块时出现明显停顿。异步推理的目标，就是让机器人一边执行当前动作块，一边提前计算下一块动作，从而减少空等并提升响应性。异步推理适用于 LeRobot 支持的策略；包括 ACT、OpenVLA、Pi0、SmolVLA 这类按 chunk 输出动作的策略。由于推理和实际控制解耦，异步推理也有助于利用具有更强算力的机器来为机器人进行推理。

    你可以在 Hugging Face 提供的 <a href="https://huggingface.co/blog/async-robot-inference" target="_blank" rel="noopener noreferrer">博客文章</a> 中阅读更多关于异步推理的信息。

    先让我们介绍一些基本概念：

    - 客户端：连接机械臂和相机，采集观测数据（如图像、机器人位姿等），把这些观测发送到服务器；同时接收服务器返回的动作块，并按顺序执行。
    - 服务器端：提供算力的设备，接收相机数据和机械臂数据，推理（也就是计算）出动作块发回客户端。它可以是连接机械臂和摄像头的设备本身，也可以是局域网内的另一台电脑，或是网上租赁的云端服务器。
    - 动作块：一系列的机械臂动作指令，由策略经过服务器端推理得到。
    - 同步推理：预测一块动作块、执行一块动作块；机器人在等待下一块动作时会出现等待动作块推理的间隙，这时候机械臂不会移动。在模型参数量更大并且算力不足的时候，推理的时间间隙是显著的，这时候机械臂会运动一段时间，然后停滞一段时间（推理），然后继续运动。
    - 异步推理：不同于同步推理，机器人执行当前动作块的同时，服务器已经在计算下一块动作；重叠部分会做聚合，以得到更及时的控制。

    **异步推理的三种部署场景**

    **1. 单机部署**

    机器人、相机、客户端、服务器都在同一台设备上。  
    这是最简单的情况，服务器监听 127.0.0.1 即可，客户端也连接 127.0.0.1:端口。官方文档中的命令示例就是这个场景。

    **2. 局域网部署**

    机器人和相机接在一台轻量设备上，策略服务器运行在同一局域网中的另一台高算力设备上。  
    此时服务器必须监听一个可被其他机器访问的地址，客户端也必须连接服务器的局域网 IP，而不能再写 127.0.0.1。

    **3. 跨网络 / 云端部署**

    策略服务器运行在公网可访问的云主机上，客户端通过公网连接它。  
    这种方式可以使用云主机更强的 GPU。在网络状况良好的情况下，网络往返时间（网络延时）有时相对推理耗时较小，但这取决于你的实际网络环境。

    > 安全提醒：LeRobot async inference 管线存在未认证 gRPC + pickle 反序列化的风险。如果服务器上有重要信息或者重要服务，公网部署时，不建议把服务直接裸露到互联网；更稳妥的做法是 VPN、SSH 隧道，或至少把安全组来源 IP 限制到你自己的客户端公网地址。

    **开始异步推理部署**

    **Step 1: 环境配置**

    首先，使用 pip 安装运行异步推理所需的额外依赖。客户端和服务器端均需要安装 LeRobot 并安装额外依赖：

<CodeBlock language="bash">
{`pip install -e ".[async]"`}
</CodeBlock>

    **Step 2: 网络配置与检查**

    **1. 代理问题**

    如果你当前终端配置了代理，并且连接出现异常，可以临时取消代理环境变量：

<CodeBlock language="bash">
{`unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY`}
</CodeBlock>

    注意：以上的命令只对一个终端生效，如果你重新开了另一个终端窗口，需要重新运行该命令。

    **2. 在防火墙 / 安全组放行端口**

    - 单机部署：通常可以跳过。
    - 局域网部署：需要在服务器端放行监听端口。

    局域网放行监听端口示例（在服务器端运行）：

<CodeBlock language="bash">
{`sudo ufw allow 8080/tcp`}
</CodeBlock>

    - 云端部署：需要在云服务器安全组中放行该端口，并尽量限制来源 IP。

    如果是在云端服务器上运行：在服务器管理页面的安全组放行 8080 端口，或使用其他已经放行的端口。不同云服务平台的方式并不统一，详见云平台服务商。

    **3. 确认 IP 地址**

    单机部署可以跳过这一步（单机的 IP 地址恒为 127.0.0.1）。

    **4. 连接测试**

    - 单机部署：可跳过这一步
    - 局域网 / 云端部署：建议在客户端测试是否能访问服务器端口，测试例子如下：

<CodeBlock language="bash">
{`nc -vz <局域网IP地址> 8080`}
</CodeBlock>

<CodeBlock language="bash">
{`nc -vz <服务器公网IP> 8080`}
</CodeBlock>

    **Step 3: 启动服务**

    **场景 A：单机部署**

    在一个终端中启动本地服务：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080`}
</CodeBlock>

    运行成功后，你需要保持这个终端打开，你需要新建新的终端才可以执行其他命令。

    **场景 B：局域网内部署**

    在服务器端运行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080`}
</CodeBlock>

    此时客户端连接时，`--server_address` 中填写的应当是服务器端的局域网 IP 地址，即 `<局域网IP地址>:8080`。

    **场景 C：云端服务器部署**

    在服务器端运行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080`}
</CodeBlock>

    此时客户端连接时，`--server_address` 中填写的应当是服务器的公网 IP 地址，即 `<服务器公网IP>:8080`。

    **Step 4: 选择推理参数**

    在客户端运行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false`}
</CodeBlock>

    关键参数说明：

    - `--server_address`：服务器地址，单机部署用 `127.0.0.1:端口`，局域网 / 云端用服务器 IP。
    - `--actions_per_chunk`：每个动作块的大小（动作数量）。值越大推理频率越低但每次推理更稳定；值越小动作更流畅但服务器推理压力更大。
    - `--chunk_size_threshold`：新旧动作块的聚合阈值。当旧动作块执行到此值时，开始与新动作块聚合。
    - `--fixed_update_fps`：控制命令发送频率，对应机械臂的运动流畅度。
    - `--visualize_action_queue`：是否在运行时可视化动作队列大小。打开后可以更直观地看到队列是否频繁触底，从而帮助你调整 actions_per_chunk 和 chunk_size_threshold。

    **Step 5: 根据机器人表现调整参数**

    在异步推理中，有两个同步推理没有的额外参数需要调整：

    - `--actions_per_chunk`：每个动作块的大小。如果机器人运动卡顿 / 不流畅，可以增大此值；如果机器人响应延迟明显，可以减小此值。
    - `--chunk_size_threshold`：新旧动作块的聚合阈值。通常从 `0.5` 开始尝试。

    异步推理需要平衡的是：服务器生成动作块的速度必须大于或等于客户端消费动作块的速度。否则动作队列会清空，机器人开始出现卡顿（这可以在队列可视化曲线中看到触底）。
  </details>
</section>

## 恢复训练

<section id="resume-training" className="section-card">
  <div className="section-title">
    <span>Training</span>
    <h2>从训练结果权重文件恢复训练</h2>
    <p>如果训练中断，或者需要从已有检查点继续训练，可以使用下面的恢复训练命令。</p>
  </div>

  要从某个训练结果权重文件恢复训练，下面是一个从 `act_rebot_test` 策略的最后一个训练结果权重文件恢复训练的示例命令：

<CodeBlock language="bash">
{`lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}
</CodeBlock>
</section>

## FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
    <p>本节保留原教程中的故障处理内容，并按问题卡片整理，便于快速定位。</p>
  </div>

  <details className="content-details">
    <summary>为什么推荐使用 Seeed-Projects/lerobot 仓库？</summary>
    <p>
      如果使用本文档教程，请 git clone 本文档推荐的 GitHub 仓库
      <code>https://github.com/Seeed-Projects/lerobot.git</code>。
      本文档推荐的仓库是验证过后的稳定版本，LeRobot 官方仓库是实时更新的最新版本，可能会出现一些无法预知的问题，例如数据集版本不同、指令不同等。
    </p>
  </details>

  <details className="content-details">
    <summary>无法连接 /dev/ttyUSB0 或 /dev/ttyACM0</summary>
    <p>如果遇到：</p>

<CodeBlock language="text">
{`Could not connect on port "/dev/ttyUSB0" 或 "/dev/ttyACM0"`}
</CodeBlock>

    <p>
      并且通过 <code>ls /dev/ttyUSB*</code> 或 <code>ls /dev/ttyACM*</code> 看到设备存在，则是忘记给串口权限了，终端输入下面命令即可：
    </p>

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>No valid stream found in input file</summary>
    <p>如果遇到：</p>

<CodeBlock language="text">
{`No valid stream found in input file. Is -1 of the desired media type?`}
</CodeBlock>

    <p>请安装 ffmpeg 7.1.1：</p>

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>训练时间大概需要多久？</summary>
    <p>在 3060 的 8G 笔记本上训练 ACT 的 50 组数据的时间大概为 6 小时，在 4090 和 A100 的电脑上训练 50 组数据时间大概为 2~3 小时。</p>
  </details>

  <details className="content-details">
    <summary>数据采集有哪些注意事项？</summary>
    <ul>
      <li>数据采集过程中要确保摄像头位置和角度以及环境光线稳定，并且减少摄像头采集到过多的不稳定背景和行人，否则部署的环境变化过大会导致机械臂无法正常抓取。</li>
      <li>数据采集命令的 num-episodes 要确保采集数据足够，不可中途手动暂停，因为在数据采集结束后才会计算数据的均值和方差，这在训练中是必要的数据。</li>
      <li>如果程序提示无法读取 USB 摄像头图像数据，请确保 USB 摄像头不是接在 Hub 上的，USB 摄像头必须直接接入设备，确保图像传输速率快。</li>
    </ul>
  </details>

  :::tip
  如果你遇到无法解决的软件问题或环境依赖问题，除了查看本教程末尾的常见问题（FAQ）部分外，请及时在 [LeRobot 平台](https://github.com/huggingface/lerobot) 或 [LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU) 反馈问题。
  :::
</section>

## 参考文档

<section id="references" className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考文档</h2>
  </div>

  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/cn/lerobot_so100m/" target="_blank" rel="noopener noreferrer">矽递科技英文 Wiki 文档：How to use the SO100Arm robotic arm in LeRobot</a>
    <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio Project: SO-ARM10x</a>
    <a href="https://github.com/huggingface/lerobot/tree/main" target="_blank" rel="noopener noreferrer">Hugging Face Project: LeRobot</a>
    <a href="https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot" target="_blank" rel="noopener noreferrer">Dusty: Jetson Containers</a>
    <a href="https://www.jetson-ai-lab.com/lerobot.html" target="_blank" rel="noopener noreferrer">Jetson AI Lab</a>
    <a href="https://diffusion-policy.cs.columbia.edu/" target="_blank" rel="noopener noreferrer">Diffusion Policy</a>
    <a href="https://tonyzhaozh.github.io/aloha/" target="_blank" rel="noopener noreferrer">ACT or ALOHA</a>
    <a href="https://www.nicklashansen.com/td-mpc/" target="_blank" rel="noopener noreferrer">TDMPC</a>
    <a href="https://sjlee.cc/vq-bet/" target="_blank" rel="noopener noreferrer">VQ-BeT</a>
  </div>
</section>

## 技术支持与产品讨论

<section id="tech-support" className="section-card">
  <div className="section-title">
    <span>Support</span>
    <h2>技术支持与产品讨论</h2>
    <p>感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。</p>
  </div>

  <div className="reference-grid">
    <a href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer">Seeed Studio Forum</a>
    <a href="https://www.seeedstudio.com/contacts" target="_blank" rel="noopener noreferrer">Contact Seeed Studio</a>
    <a href="https://discord.gg/eWkprNDMU7" target="_blank" rel="noopener noreferrer">Seeed Studio Discord</a>
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" target="_blank" rel="noopener noreferrer">GitHub Discussion</a>
  </div>
</section>

## 后续学习路径

<section id="learning-path" className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot Arm B601-DM 学习路径</h2>
    <p>完成 LeRobot 入门后，可以继续学习 Pinocchio / MeshCat、视觉夹取和 ROS2 集成。</p>
  </div>

  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>B601-DM 快速入门</strong><span>购买选项、组装、电机 ID、零点校准和 MotorBridge 初体验。</span></span>
      <span className="course-tag">Start</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>B601-DM 入门 LeRobot</strong><span>遥操作、相机接入、数据采集、训练和评估。</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 与 MeshCat</strong><span>运动学、轨迹规划、重力补偿和可视化调试。</span></span>
      <span className="course-tag">Kinematics</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>RGB-D、YOLO、GraspNet、手眼标定与真实抓取。</span></span>
      <span className="course-tag">Grasping</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>ROS2、RViz、MoveIt 2 和真实硬件执行。</span></span>
      <span className="course-tag">ROS2</span>
    </a>
  </div>
</section>

</div>
