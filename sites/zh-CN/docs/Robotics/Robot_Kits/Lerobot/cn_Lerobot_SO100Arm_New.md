---
description: 本 Wiki 提供 SO-ARM100 / SO-ARM101 的组装、调试、数据采集和训练教程。
title: 基于 LeRobot 的 SO-ARM100 / SO-ARM101 机械臂入门教程
keywords:
  - LeRobot
  - Hugging Face
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 3/11/2026
  author: ZhangJiaQuan
createdAt: '2025-01-08'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/cn/lerobot_so100m_new/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 基于 LeRobot 的 SO-ARM100 / SO-ARM101 机械臂入门教程

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM10x × LeRobot</span>
    <h2>从组装、校准到数据采集、训练与真实机械臂部署</h2>
    <p>
      本 Wiki 提供 SO-ARM100 / SO-ARM101 在 LeRobot 框架内完成组装、校准、遥操作、相机接入、数据采集、训练与评估的完整流程。
    </p>
    <div className="hero-actions">
      <a href="#quick-path">查看学习路线</a>
      <a href="#install-lerobot">安装 LeRobot</a>
      <a href="#record-dataset">进入数据采集</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推荐阅读方式</strong>
    <span>新用户：请从规格、电源和舵机校准开始。</span>
    <span>已有组装版：可直接跳转到整臂校准与遥操作。</span>
    <span>已有环境：可直接进入相机、数据采集、训练或 FAQ。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间 1 米范围内的贵重物品、易碎物品、工具、线缆和其他无关物体。调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行舵机设置、整臂校准、遥操作、数据采集、回放或策略评估前，请确保机械臂固定牢靠。</li>
      <li>请保持至少 1 米安全距离，并确保周围人员了解机械臂可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔舵机线、USB 线、电源接口或驱动板线缆前，必须先断开电源。</li>
    </ul>
  </div>
</div>

{/* The following Markdown headings are intentionally kept outside the visual cards so Docusaurus can generate the right-side table of contents. */}

<nav className="doc-nav" aria-label="SO-ARM10x LeRobot quick navigation">
  <a href="#quick-path">学习路线</a>
  <a href="#overview">项目介绍</a>
  <a href="#install-lerobot">安装环境</a>
  <a href="#setup-motors-assembly">舵机与组装</a>
  <a href="#calibration">校准</a>
  <a href="#teleoperation">遥操作</a>
  <a href="#camera">相机</a>
  <a href="#record-dataset">数据采集</a>
  <a href="#training">训练评估</a>
  <a href="#faq">FAQ</a>
</nav>

## 推荐学习路线

<section id="quick-path" className="section-card course-path-section">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>建议按真实调试流程逐步完成</h2>
    <p>如果你是第一次使用 SO-ARM10x，建议先完成硬件、环境和校准，再进入遥操作、相机、数据集、训练与评估。</p>
  </div>

  <div className="course-path-grid">
    <div className="course-path-item"><span className="course-index">1</span><div className="course-path-copy"><strong>认识套件与规格</strong><p>确认 SO-ARM100 / SO-ARM101 版本、供电、电机和 BOM。</p></div><span className="course-tag">准备</span></div>
    <div className="course-path-item"><span className="course-index">2</span><div className="course-path-copy"><strong>安装 LeRobot</strong><p>搭建 Miniforge、LeRobot、ffmpeg、PyTorch 和相机依赖。</p></div><span className="course-tag">环境</span></div>
    <div className="course-path-item"><span className="course-index">3</span><div className="course-path-copy"><strong>舵机校准与组装</strong><p>为每个舵机设置 ID 和波特率，再按步骤完成 leader / follower 组装。</p></div><span className="course-tag">硬件</span></div>
    <div className="course-path-item"><span className="course-index">4</span><div className="course-path-copy"><strong>整臂校准与遥操作</strong><p>完成 leader 与 follower 校准，并确认主从控制链路稳定。</p></div><span className="course-tag">控制</span></div>
    <div className="course-path-item"><span className="course-index">5</span><div className="course-path-copy"><strong>添加相机与采集数据</strong><p>接入 OpenCV、RealSense 或 Orbbec 相机，录制高质量 episode。</p></div><span className="course-tag">数据</span></div>
    <div className="course-path-item"><span className="course-index">6</span><div className="course-path-copy"><strong>训练与评估策略</strong><p>从 ACT 开始，再尝试 SmolVLA、Pi0、Pi0.5、GR00T 和异步推理。</p></div><span className="course-tag">AI</span></div>
  </div>
</section>

## 项目介绍

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>项目介绍</h2>
    <p>了解 SO-ARM10x、LeRobot 与 Jetson AI 机器人套件的整体定位。</p>
  </div>

:::tip
本教程已更新至最新版 [lerobot](https://huggingface.co/docs/lerobot/index)，如需查阅旧版教程，请点击[此处](https://wiki.seeedstudio.com/cn/lerobot_so100m/)。
:::

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) 是由 [TheRobotStudio](https://www.therobotstudio.com/) 发起的一个完全开源的机器人手臂项目。它包含 Leader Arm 与 Follower Arm，并提供完整的 3D 打印文件、装配说明和操作指南。[LeRobot](https://github.com/huggingface/lerobot/tree/main) 致力于为真实世界的机器人提供 PyTorch 中的模型、数据集和工具。其目标是降低机器人学的入门门槛，使每个人都能通过共享数据集和预训练模型进行贡献和受益。LeRobot 集成了经过验证的前沿方法，专注于模仿学习和强化学习。它提供了一套预训练模型、包含人类收集的示范数据集和仿真环境，使用户无需进行机器人组装即可开始使用。未来几周，计划在当前最具成本效益和性能的机器人上增强对真实世界机器人的支持。

<div className="video-container">
<iframe
  loading="lazy"
  width="900"
  height="600"
  src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819388312&bvid=BV1H6UUBcErT&cid=34226440480&p=1&autoplay=0&muted=1&mute=1&danmaku=0"
  title="B站视频播放器"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
</div>

### 项目简介

SO-ARM10x 可以与 reComputer Jetson AI 智能机器人套件组合使用，将高精度机械臂控制与边缘 AI 计算能力结合，形成完整的机器人开发方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 SO-ARM10x 机器人手臂和 LeRobot AI 框架，为用户提供适用于教育、科研和工业自动化等多种场景的智能机器人系统。

本 Wiki 将从硬件组装与舵机校准开始，逐步完成 LeRobot 环境配置、遥操作、相机接入、数据集采集、策略训练与真实机械臂评估。

<div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="" />
</div>

<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://detail.tmall.com/item.htm?abbucket=14&id=877820346195&pisk=hoQ-FWMreBT8ReF0HdH1ZYYHAS2GAwABO65EOLTWE23dIOgo-Q2UJ9pA13VPK9jvpt6vFaqyK2Hdh6ckAwvhJU8eR8FyykDrGCdQ-D9SRouyJzygIP4LVjTLe6buKyCqcCJXN49WAS3XOBLBOQTQMKOp_pg5deNAGKRENQgWVrgXsQMWR2gShjOpO4gBO3ajlKRBRQTCdsNvtK9BRe6CGZcWV7kbvDgZBdki4_9xWs7AmAv9dKgQCNR87dtC1DpNPtfCra-qflLFiGBdA9ri0UCCVUOGaz3v5_sDYLQ3GDZFbG1GjVZCyR_RWMIqF27Uxib5ohk7zw_RPZjNnmras795iEsjFu7GWwLGban3Akq9eGIPGxeVP5p2zGjqnmjAouOV48UTCjvJ6ERvI7EnYD-0fIpgMSnEY3O2MdV86Doeml1..&rn=c965f4e20da915a38da869c35239c54a&spm=a1z10.5-b.w4011-22390330418.114.75ed1734VACGVS" target="_blank" rel="noopener noreferrer">
    立即购买 / Get One Now 🖱️
  </a>
</div>



<div className="notice-grid">
  <div className="notice-card warning">
    <strong>硬件与软件支持说明</strong>
    <span>Seeed Studio 仅对硬件质量负责。教程会尽量跟随官方文档更新，但 LeRobot 依赖、命令和数据格式可能随上游版本变化。</span>
  </div>
  <div className="notice-card">
    <strong>遇到环境问题怎么办</strong>
    <span>建议先查看文末 FAQ；如果仍无法解决，可联系客服加入 Seeed Studio LeRobot 交流群，也可以在 LeRobot GitHub 或 Discord 频道提问。</span>
  </div>
</div>
</section>

## SO-ARM10x 系列特点

<section id="features" className="section-card">
  <div className="section-title">
    <span>Features</span>
    <h2>SO-ARM10x 系列特点</h2>
    <p>快速了解 SO-ARM10x 的开源、低成本、LeRobot 集成与 NVIDIA 平台兼容特性。</p>
  </div>

<div className="feature-grid">
  <div>
    <strong>开源 & 低成本</strong>
    <span>由 TheRobotStudio 提供，是一套开源、低成本的机器人手臂解决方案。</span>
  </div>
  <div>
    <strong>支持 LeRobot 平台集成</strong>
    <span>面向现实机器人任务的模仿学习，覆盖数据采集、仿真、训练与部署。</span>
  </div>
  <div>
    <strong>丰富的学习资源</strong>
    <span>包含组装、校准、测试、数据采集、训练与部署文档。</span>
  </div>
  <div>
    <strong>兼容 NVIDIA 平台</strong>
    <span>支持通过 reComputer Mini J4012 Orin NX 16GB 平台进行部署。</span>
  </div>
</div>
</section>

## 更新内容

<section id="updates" className="section-card">
  <div className="section-title">
    <span>Updates</span>
    <h2>更新内容</h2>
    <p>查看 SO-ARM101 相比 SO-ARM100 的布线、电机和实时跟随更新。</p>
  </div>

<div className="feature-grid">
  <div>
    <strong>布线优化</strong>
    <span>SO-ARM101 改进了布线，解决第 3 关节处可能断线的问题，并减少对关节活动范围的限制。</span>
  </div>
  <div>
    <strong>主臂齿轮比优化</strong>
    <span>Leader Arm 采用优化后的齿轮比电机，无需外部减速机构，同时提升性能。</span>
  </div>
  <div>
    <strong>新增实时跟随</strong>
    <span>主臂可以实时跟随从臂动作，便于未来策略中的人工干预与动作修正。</span>
  </div>
</div>
</section>

## 规格参数

<section id="specifications" className="section-card">
  <div className="section-title">
    <span>Specifications</span>
    <h2>规格参数</h2>
    <p>展开查看 SO-ARM100 与 SO-ARM101 的电机、电源、通信和控制规格。</p>
  </div>

<details className="content-details">
<summary>点击查看 SO-ARM10x 规格参数</summary>

本教程硬件由[矽递科技Seeed Studio](https://www.seeedstudio.com/)提供

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">标准版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">专业版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">标准版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">专业版</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Leader Arm</td>
      <td rowSpan="2">12 个 ST-3215- C001 (7.4V) 1:345 齿轮比电机，适用于所有关节</td>
      <td rowSpan="2">12 个 ST-3215-C018/ST-3215-C047 (12 V) 1:345 齿轮比电机，适用于所有关节</td>
      <td colSpan="2">
        1 个 ST-3215- C001 (7.4V) 1:345 齿轮比电机，仅用于第2号关节<br />
        2 个 ST-3215-C044 (7.4V) 1:191 齿轮比电机，用于第1号和第3号关节<br />
        3 个 ST-3215-C046 (7.4V) 1:147 齿轮比电机，用于第4号、第5号关节及第6号夹爪
      </td>
    </tr>
    <tr>
      <td>Follower Arm</td>
      <td colSpan="2">与SO-ARM100相同</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>5.5 mm×2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm×2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm×2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm×2.1 mm DC 12 V 2 A（从臂Follower）<br />
        5.5 mm×2.1 mm DC 5 V 4 A（主臂Leader）
      </td>
    </tr>
    <tr>
      <td>角度传感器</td>
      <td colSpan="4">12位磁编码器</td>
    </tr>
    <tr>
      <td>推荐工作温度范围</td>
      <td colSpan="4">0 °C ～ 40 °C</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>控制方式</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger
若购买 **SO101 Arm Kit 标准版**，所有电源均为5 V。若购买 **SO101 Arm Kit Pro 版**，Leader机械臂的校准及每一步骤均使用5 V电源，Follower机械臂的校准及每一步骤均使用12 V电源。
:::

</details>
</section>

## 材料清单（BOM）

<section id="bom" className="section-card">
  <div className="section-title">
    <span>BOM</span>
    <h2>材料清单（BOM）</h2>
    <p>查看套件中包含的舵机、驱动板、线缆、电源和结构件。</p>
  </div>

<details className="content-details">
<summary>点击查看材料清单</summary>

| 部件             | 数量 | 是否包含 |
| ---------------- | ---- | -------- |
| 舵机             | 12   | ✅       |
| 舵机驱动板       | 2    | ✅       |
| USB-C线缆（2条） | 1    | ✅       |
| 电源适配器       | 2    | ✅       |
| 3D 打印桌面夹具   | 4    | ✅       |
| 手臂的3D 打印部件 | 1    | Option   |

</details>
</section>

## 3D 打印参考参数

<section id="3d-printing" className="section-card">
  <div className="section-title">
    <span>3D Printing</span>
    <h2>3D 打印参考参数</h2>
    <p>根据打印机平台选择 STL 文件，并按推荐参数打印结构件。</p>
  </div>

<details className="content-details">
<summary>点击查看 3D 打印参考参数</summary>

:::caution
随着2025年4月28日官方发布 SO101，SO100 将不再支持打印指导，但源文件仍可在我们的 [Makerworld](https://makerworld.com/zh/models/908660) 找到。不过，对于之前购买了SO100 的用户，教程和安装方法以及代码依然兼容。SO101 的打印件也完全兼容 SO100 的电机套件安装。
:::

**第一步：选择打印机**

提供的 STL 文件可以直接在许多 FDM 打印机上打印。以下是经过测试并推荐的设置，但其他设置也可能适用。

- 材料：PLA+
- 喷嘴直径与精度：0.4mm 喷嘴直径，层高 0.2mm，或 0.6mm 喷嘴直径，层高 0.4mm。
- 填充密度：15%

**第二步：设置打印机**

- 确保打印机已校准且打印床水平调整正确，具体操作请参考打印机说明书。
- 清洁打印床，确保无灰尘或油污。如果使用水或其他液体清洁打印床，请确保彻底干燥。
- 如果打印机建议，使用标准胶棒在打印区域涂抹一层薄薄的均匀胶水，避免结块或涂抹不均。
- 按照打印机说明书装载打印机耗材（线材）。
- 确保打印机设置与上述推荐参数匹配（大多数打印机有多种设置选项，请选择最接近的）。
- 设置支撑：支撑应设置为“处处需要”，但忽略与水平面小于 45 度的倾斜面。
- 水平轴方向的螺丝孔内不应有支撑结构。

**第三步：打印零件**

所有关于 Leader 或 Follower 的零件都已经排版好，方便 3D 打印，且朝 Z 轴正方向摆放，以最小化支撑需求。

- 对于打印床尺寸为 220mm x 220mm（如 Ender）的打印机，请打印以下文件：

  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)
- 对于打印床尺寸为 205mm x 250mm（如 Prusa/Up）的打印机，请打印以下文件：

  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

**第四步：打印柔性夹爪（可选）**

如果你希望让机械臂具备抓取柔软、易碎或形状不规则物体的能力，可以选择打印柔性夹爪来替换默认的刚性夹爪。打印文件可在 [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) 仓库中获取。

打印材料说明：

- 两个夹爪：使用 **TPU** 材料打印
- 其他零件：使用 **PLA** 材料打印

</details>
</section>

## 初始系统环境

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Environment</span>
    <h2>初始系统环境</h2>
    <p>确认 Ubuntu、Jetson、CUDA、Python、Torch 等基础环境。</p>
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
    <p>安装 Miniforge、Seeed 验证过的 LeRobot 仓库、ffmpeg、PyTorch 与相关依赖。</p>
  </div>

<div className="notice-grid">
  <div className="notice-card">
    <strong>安装建议</strong>
    <span>本文推荐使用 Seeed 验证过的 LeRobot 仓库。官方仓库实时更新，可能出现命令、依赖或数据格式变化。</span>
  </div>
  <div className="notice-card warning">
    <strong>GPU 环境提醒</strong>
    <span>如果需要训练或推理，请根据 CUDA 版本安装匹配的 PyTorch 与 Torchvision，并在安装后确认 CUDA 可用。</span>
  </div>
</div>

<Tabs defaultValue="Jetson">

<TabItem value="Jetson" label="Jetson">

1. 安装 Miniforge：

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# 按照提示输入 yes 或回车，安装完成后：
source ~/.bashrc`}
</CodeBlock>

2. 创建并激活一个新的 conda 环境用于 lerobot

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. 克隆 LeRobot 仓库：

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. 使用 miniforge 时，在环境中安装 ffmpeg：

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
这通常会为你的平台安装使用 libsvtav1 编码器编译的 ffmpeg 7.X。如果不支持 libsvtav1（可以通过 ffmpeg -encoders 查看支持的编码器），你可以：

- 【适用于所有平台】显式安装 ffmpeg 7.X：

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- 【仅限 Linux】安装 ffmpeg 的构建依赖并从源码编译支持 libsvtav1 的 ffmpeg，并确保使用的 ffmpeg 可执行文件是正确的，可以通过 `which ffmpeg` 确认。

ffmpeg 相关异常说明已统一整理到文末 FAQ。

:::

5. 安装带有 feetech 电机依赖的 LeRobot：

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. 对于 Jetson JetPack 6.0+ 设备（请确保在执行此步骤前按照[此链接教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-PyTorch)的第 5 步安装了 PyTorch-gpu 和 Torchvision）：

<CodeBlock language="bash">
{`conda install -y -c conda-forge "opencv>=4.10.0.84"  # 通过 conda 安装 OpenCV 和其他依赖，仅适用于 Jetson JetPack 6.0+
conda remove opencv   # 卸载 OpenCV
pip3 install opencv-python==4.10.0.84  # 使用 pip3 安装指定版本 OpenCV
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # 该版本需与 Torchvision 兼容`}
</CodeBlock>

7. 检查 PyTorch 和 Torchvision

由于通过 pip 安装 lerobot 环境时会卸载原有的 PyTorch 和 Torchvision 并安装 CPU 版本，因此需要在 Python 中进行检查。

<CodeBlock language="bash">
{`python`}
</CodeBlock>

<CodeBlock language="python">
{`import torch
print(torch.cuda.is_available())
exit()   #  退出python`}
</CodeBlock>

如果输出结果显示为 `False`，表示当前环境中的 PyTorch 是 CPU 版本。若你需要在 Jetson 上使用 GPU 版本 PyTorch 和 Torchvision，请参考[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-PyTorch-and-Tensorflow/README.md#installing-PyTorch-on-recomputer-nvidia-jetson)进行安装。对于需要使用 GPU 训练或推理的环境，最终检查结果应为 `True`。

</TabItem>

<TabItem value="X86" label="X86 Ubuntu 22.04">

1. 安装 Miniforge：

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# 按照提示安装完成后：
source ~/.bashrc
# 初始化所有 shell
conda init --all`}
</CodeBlock>

2. 创建并激活一个新的 conda 环境用于 lerobot

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. 克隆 LeRobot 仓库：

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. 使用 miniforge 时，在环境中安装 ffmpeg：

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
这通常会为你的平台安装使用 libsvtav1 编码器编译的 ffmpeg 7.X。如果不支持 libsvtav1（可以通过 ffmpeg -encoders 查看支持的编码器），你可以：

- 【适用于所有平台】显式安装 ffmpeg 7.X：

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- 【仅限 Linux】安装 ffmpeg 的构建依赖并从源码编译支持 libsvtav1 的 ffmpeg，并确保使用的 ffmpeg 可执行文件是正确的，可以通过 `which ffmpeg` 确认。

ffmpeg 相关异常说明已统一整理到文末 FAQ。

:::

5. 安装带有 feetech 电机依赖的 LeRobot：

:::tip
如果你使用的是新配置的 Ubuntu 22.04 虚拟机，尤其是最小化安装版本，系统可能默认不带 `gcc` 等 C 编译工具。此时在安装带有 feetech 电机依赖的 LeRobot 时，`evdev` Python 包可能会因为缺少 C 编译器而构建失败。

可以先安装基本编译工具：

<CodeBlock language="bash">
{`sudo apt update
sudo apt install build-essential`}
</CodeBlock>

安装完成后，重新执行 LeRobot 安装命令。
:::

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. 检查 PyTorch 和 Torchvision

由于通过 pip 安装 lerobot 环境时会卸载原有的 PyTorch 和 Torchvision 并安装 CPU 版本，因此需要在 Python 中进行检查。

<CodeBlock language="bash">
{`python`}
</CodeBlock>

<CodeBlock language="python">
{`import torch
print(torch.cuda.is_available())
exit()   #  退出python`}
</CodeBlock>

如果输出结果显示为 `False`，表示当前环境中的 PyTorch 是 CPU 版本。若你需要使用 GPU 进行训练或推理，请根据[官网教程](https://PyTorch.org/index.html)安装与你的 CUDA 版本匹配的 PyTorch 和 Torchvision。对于装有 NVIDIA GPU 并需要使用 GPU 的环境，最终检查结果应为 `True`。

:::tip

注意：NVIDIA 的 RTX 50 系列显卡需要安装 CUDA 12.8 及以上版本的预览版。

下载示例如下：

<CodeBlock language="bash">
{`pip install --pre torch Torchvision torchaudio --index-url https://download.PyTorch.org/whl/nightly/cu128`}
</CodeBlock>

:::

</TabItem>

</Tabs>
</section>

## 校准舵机并组装机械臂

<section id="setup-motors-assembly" className="section-card">
  <div className="section-title">
    <span>Step 2</span>
    <h2>校准舵机并组装机械臂</h2>
    <p>对散件舵机设置 ID、波特率和中位值，并按步骤完成机械臂组装。</p>
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
如果你购买的是组装版机械臂，请跳到校准机械臂步骤
:::

<details className="content-details">

<summary>散件机械臂，请按步骤进行</summary>

SO101 的舵机校准初始化与 SO100 方法和代码一致，只是需要注意：SO101 的 Leader 机械臂前三个关节减速比与 SO100 不同，因此需要仔细区分并校准。

为便于校准与后续排查，建议在舵机校准前对每个电机做好标记：

- 标注该舵机属于 Follower（用 **F** 表示）还是 Leader（用 **L** 表示）
- 标注编号从 1 到 6（例如 **F1...F6**、**L1...L6**）
- 编号规则：从底座开始为 **1 号**，向上依次为 **2、3...**，直到夹爪为 **6 号**

后续我们用 F1–F6 表示 Follower 机械臂的 1–6 号关节舵机，用 L1–L6 表示 Leader 机械臂的 1–6 号关节舵机。对应的舵机型号、关节与减速比信息如下。

| 舵机型号                                   | 减速比 | 对应机械臂关节 |
| ------------------------------------------ | ------ | -------------- |
| ST-3215-C044(7.4V)                         | 1:191  | L1             |
| ST-3215-C001(7.4V)                         | 1:345  | L2             |
| ST-3215-C044(7.4V)                         | 1:191  | L3             |
| ST-3215-C046(7.4V)                         | 1:147  | L4–L6         |
| ST-3215-C001(7.4V) / C018(12 V) / C047(12 V) | 1:345  | F1–F6         |

:::danger
现在你需要将 5 V 或 12 V 电源连接到电机总线上。对于 STS3215 7.4V 电机使用 5 V 电源，对于 STS3215 12 V 电机使用 12 V 电源。请注意，Leader 机械臂始终使用 7.4V 电机，因此如果你同时有 12 V 和 7.4V 电机，一定要使用正确的电源，否则可能会烧坏电机！然后，通过 USB 将电机总线连接到你的电脑。请注意，USB 不会为电机供电，因此电源和 USB 都必须连接。
:::

***以下是代码校准步骤，请参照下方 Leader/Follower 舵机校准参考图进行校准***

查找机械臂对应的 USB 端口
为了找到每个机械臂正确的端口，请运行实用脚本两次：

<CodeBlock language="bash">
{`lerobot-find-port`}
</CodeBlock>

示例输出:

<CodeBlock language="bash">
{`Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.
[...Disconnect corresponding leader or follower arm and press Enter...]
The port of this MotorsBus is /dev/ttyACM0
Reconnect the USB cable.`}
</CodeBlock>

:::tip
请记住要拔出 USB 接头，否则将无法检测到接口。
:::

识别从动臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0031751`，或在 Linux 上可能为 `/dev/ttyACM0`）：
识别领导臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0032081`，或在 Linux 上可能为 `/dev/ttyACM1`）：

在 Linux 上，你可能需要通过运行以下命令来赋予 USB 端口访问权限：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}
</CodeBlock>

:::tip

在实际连接主从臂时，第一个插入的是ttyACM0（从臂）、第二个插入的是ttyACM1（主臂）

:::

**配置舵机**

**Leader 舵机校准参考图**

|                              **Leader机械臂6号舵机校准**                              |                              **Leader机械臂5号舵机校准**                              |                              **Leader机械臂4号舵机校准**                              |                              **Leader机械臂3号舵机校准**                              |                              **Leader机械臂2号舵机校准**                              |                              **Leader机械臂1号舵机校准**                              |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**Follower 舵机校准参考图**

|                             **Follower机械臂6号舵机校准**                             |                             **Follower机械臂5号舵机校准**                             |                             **Follower机械臂4号舵机校准**                             |                             **Follower机械臂3号舵机校准**                             |                             **Follower机械臂2号舵机校准**                             |                             **Follower机械臂1号舵机校准**                             |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
再次提醒，请确保舵机关节 ID 和齿轮比与 **SO-ARM101** 的严格对应。
:::

**校准从动臂舵机**

将 USB 线从电脑连接到从动臂的舵机驱动板，并接通电源。然后，运行以下命令。

<CodeBlock language="bash">
{`lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0`}
</CodeBlock>

您会看到以下输出。

<CodeBlock language="bash">
{`Connect the controller board to the 'gripper' motor only and press enter.`}
</CodeBlock>

依照指示，将驱动板单独连接夹爪舵机（即 **6 号舵机**）。请确保它现在是唯一连接到舵机驱动板的舵机：**电脑 → USB 线 → 驱动板 → 三针线 → 6 号舵机**，并且舵机本身没有连接到任何其他舵机。当您按下 **[Enter]** 键后，脚本将自动设置该舵机的 ID 和波特率。

之后，您应该会看到以下信息：

<CodeBlock language="bash">
{`'gripper' motor id set to 6`}
</CodeBlock>

接着是下一条输出是:

<CodeBlock language="bash">
{`Connect the controller board to the 'wrist_roll' motor only and press enter.`}
</CodeBlock>

与之前的舵机一样，请确保它是唯一连接到驱动板的舵机，并且舵机本身没有连接到任何其他舵机。

:::caution
根据指示，对每个舵机重复上述操作。
:::

在每次按 **Enter** 键之前，请务必检查您的线缆连接。例如，在操作电路板时，电源线可能会断开。

当您完成所有步骤后，脚本将自动结束，此时舵机即可投入使用。现在，您可以将每根舵机的 3 针接口依次连接，并将第一个舵机（ID 为 1 的“shoulder pan”舵机）的线缆连接到驱动板。现在可以将驱动板安装到机械臂的底座上。

**校准领导臂舵机**

对领导臂重复相同的步骤。

<CodeBlock language="bash">
{`lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0`}
</CodeBlock>

**组装教程**

<div className="video-container">
<iframe
  loading="lazy"
  width="900"
  height="600"
  src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819256249&bvid=BV1k6UUBFEw4&cid=34228079335&p=1&autoplay=0&muted=1&mute=1&danmaku=0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
</div>

:::tip

- SO-ARM101 双臂的组装过程与 SO-ARM100 相同。唯一的区别在于 SO-ARM101 增加了线缆夹，且主机械臂（Leader Arm）关节舵机的齿轮比不同。因此，SO100 和 SO101 都可以参考以下内容进行安装。
- 组装前，请再次检查您的电机型号、减速比和供电电压。如果您购买的是 SO101，请参考上方舵机型号与关节对应表区分 F1 至 F6 和 L1 至 L6。

:::

**组装领导臂**

|                                         **步骤 1**                                         |                                         **步骤 2**                                         |                                         **步骤 3**                                         |                                         **步骤 4**                                         |                                         **步骤 5**                                         |                                         **步骤 6**                                         |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
|                                         **步骤 7**                                         |                                         **步骤 8**                                         |                                         **步骤 9**                                         |                                         **步骤 10**                                         |                                         **步骤 11**                                         |                                         **步骤 12**                                         |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
|                                         **步骤 13**                                         |                                         **步骤 14**                                         |                                         **步骤 15**                                         |                                         **步骤 16**                                         |                                         **步骤 17**                                         |                                         **步骤 18**                                         |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
|                                         **步骤 19**                                         |                                         **步骤 20**                                         |                                                                                            |                                                                                            |                                                                                            |                                                                                            |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |                                                                                            |                                                                                            |                                                                                            |                                                                                            |

**组装从动臂**

:::tip

- 从动臂的组装步骤与领导臂基本相同。唯一的区别在于第12步之后，末端执行器（夹爪和手柄）的安装方式有所不同。

:::

|                                         **步骤 1**                                         |                                         **步骤 2**                                         |                                         **步骤 3**                                         |                                          **步骤 4**                                          |                                         **步骤 5**                                         |                                         **步骤 6**                                         |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
|                                         **步骤 7**                                         |                                         **步骤 8**                                         |                                         **步骤 9**                                         |                                         **步骤 10**                                         |                                         **步骤 11**                                         |                                         **步骤 12**                                         |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |  ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg)  | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
|                                         **步骤 13**                                         |                                         **步骤 14**                                         |                                         **步骤 15**                                         |                                         **步骤 16**                                         |                                         **步骤 17**                                         |                                                                                            |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |                                                                                            |

</details>
</section>

## 校准机械臂

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>Step 3</span>
    <h2>校准机械臂</h2>
    <p>校准 follower 与 leader，使主从臂在相同物理位置下保持一致。</p>
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

<div className="video-container">
<iframe
  loading="lazy"
  width="900"
  height="600"
  src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819322806&bvid=BV1w6UUBcEGR&cid=34229387906&p=1&autoplay=0&muted=1&mute=1&danmaku=0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
</div>

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

:::danger
若购买 **SO101 Arm Kit 标准版**，所有电源均为5 V。若购买 **SO101 Arm Kit Pro 版**，Leader机械臂的校准及每一步骤均使用5 V电源，Follower机械臂的校准及每一步骤均使用12 V电源。
:::

接下来，你需要对你的 SO-10x 机器人接上电源和数据线进行校准，以确保在相同的物理位置时，Leader 臂和 Follower 臂的位置信息一致。这个校准过程至关重要，因为它可以让在一个 SO-10x 机器人上训练的神经网络在另一个机器人上也能正常工作。

如需重新校准机械臂，请查看文末 FAQ 中的“如何重新校准机械臂？”条目。

请通过 3 针接口连接 6 个机器人舵机的接口，并将底盘舵机连接到舵机驱动板，然后运行以下命令或 API 示例来校准机械臂：

:::tip
以PC(linux)和jetson板卡为例，`第一个`插入usb接口会映射为`ttyACM0`，`第二个`插入usb接口会映射为`ttyACM1`。

在运行代码前请注意leader和follower的映射接口。
:::

首先，您需要授予接口权限，运行以下命令：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

### 校准从动臂

接下来，通过运行以下 Python 命令来校准从动臂：

<CodeBlock language="bash">
{`lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm`}
</CodeBlock>

下面的视频演示了如何执行校准。首先，您需要将机器人移动到所有关节都位于其活动范围中间的位置。然后，按下回车键后，您必须将每个关节在其完整的运动范围内移动。

:::tip

由于lerobot仓库更新，在做主从臂校准时，终端没有收到5号舵机的信号属于正常现象，继续往下进行操作即可

:::

### 校准领导臂

对主机械臂进行校准的步骤与上述相同，请运行以下命令或 API 示例：

<CodeBlock language="bash">
{`lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}
</CodeBlock>

:::tip
如果校准阶段遇到串口连接异常，请先确认端口映射，并查看文末 FAQ 的串口权限说明。
:::

<div className="video-container">
<iframe
  loading="lazy"
  width="900"
  height="600"
  src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819322806&bvid=BV1w6UUBcEGR&cid=34229387906&p=1&autoplay=0&muted=1&mute=1&danmaku=0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
</div>

### 使用 Seeed Studio SoARM 系列快捷校准工具进行中位校准（可选）

如果需要检查舵机 ID、写入中位值、验证舵机是否正常，或排查 `Magnitude exceeds 2047` 等校准问题，可以使用 Seeed Studio SoARM 系列快捷校准工具。具体问题与处理方案已统一整理到文末 FAQ。

<div className="hero-actions">
  <a href="/cn/lerobot_steering_gear_debugging_tool">▶ 打开舵机调试工具使用教程</a>
</div>
</section>

## 遥操作

<section id="teleoperation" className="section-card">
  <div className="section-title">
    <span>Step 4</span>
    <h2>遥操作</h2>
    <p>运行 leader 到 follower 的遥操作链路，确认机械臂运动稳定。</p>
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

现在，您就可以遥控操作您的机器人了！运行这个简单的脚本（它不会连接和显示摄像头）：

请注意，与机器人关联的 **ID** 用于存储校准文件。在使用相同设置进行遥控操作、录制和评估时，使用相同的 **ID** 至关重要。

先对串口给予权限：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

运行遥操作：

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}
</CodeBlock>

遥控操作命令将自动执行以下步骤：

1. 识别任何缺失的校准文件并启动校准程序。
2. 连接机器人和遥控设备，并开始遥控操作。
</section>

## 添加摄像头

<section id="camera" className="section-card">
  <div className="section-title">
    <span>Step 5</span>
    <h2>添加摄像头</h2>
    <p>接入 OpenCV、RealSense 或 Orbbec 相机，为数据采集准备视觉输入。</p>
  </div>

<details className="content-details">

<summary>如果使用 RealSense D435i/D405</summary>

RealSense 深度相机可为 LeRobot 提供 RGB-D 感知能力，适用于目标识别、点云重建与桌面抓取等场景。这里推荐使用 **RealSense D405** 与 **RealSense D435i**。

**RealSense D405**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" alt="" />
</div>

RealSense D405 是一款近距离双目深度相机，适合机械臂桌面操作等高精度近场视觉任务，典型工作范围为 **7 cm 到 50 cm**。

**RealSense D435i**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" alt="" />
</div>

RealSense D435i 集成深度感知、RGB 成像和 IMU，适合三维重建、SLAM 与机器人环境感知等中近距离应用。

**1. 切换到相机分支**

当前相机支持位于 `DepthCameraSupport` 分支上：

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

确认当前分支：

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

预期输出：

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. 以可编辑模式安装RealSense**

如果你只使用 RealSense：

<CodeBlock language="bash">
{`pip install -e ".[realsense]"`}
</CodeBlock>

**3. 赋予相机权限**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. 检测相机**

<CodeBlock language="bash">
{`lerobot-find-cameras realsense`}
</CodeBlock>

该命令会输出以下信息：

- 相机型号（Name）
- 序列号（Serial number）
- USB 信息
- 默认流配置

<div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/realsense_ID.png" alt="" />
</div>

这里需要将采集到的 `Serial number` 输入到下面调用相机命令的 `serial_number_or_name` 参数中。

**5. RealSense 示例**

双 RealSense 测试：

<CodeBlock language="bash">
{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
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
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}
</CodeBlock>

**6. 参数建议**

- `depth_alpha` 用于控制深度图的缩放比例；可以根据画面显示效果和目标距离范围进行调整。
- 如果需要连接三个及以上深度相机，建议将 `fps` 降低到 `15`，以减轻 USB 带宽与系统负载压力。
- 建议优先保持 `640x480` 分辨率，以兼顾稳定性与实时性。

</details>

<details className="content-details">

<summary>如果使用 Orbbec Gemini2/Gemini336 相机</summary>

<div className="image-frame">
    <img width={800} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" alt="" />
</div>
<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://detail.tmall.com/item.htm?abbucket=16&id=877820346195&mi_id=0000Ou_lIzqedYPuPAA8fpFm7RLR5dXIVA-SAX_AOiJab6M&ns=1&skuId=6069820106496&spm=a21n57.1.hoverItem.5&utparam=%7B%22aplus_abtest%22%3A%2275f755ae980dafcddefac00fe2ec6540%22%7D&xxc=taobaoSearch" target="_blank" rel="noopener noreferrer">
    立即购买 / Get One Now 🖱️
  </a>
</div>

Orbbec Gemini 2 是一款适用于机器人场景的高性能 RGB-D 相机，提供同步的 RGB 与深度数据流，并支持精确的深度到彩色对齐。结合双目深度感知与 6 轴 IMU，它非常适合物体检测、三维感知、建图、导航等机器人任务。相机体积紧凑，易于部署，并完整支持 Orbbec SDK，适合研究和实际应用。

<div className="image-frame">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" alt="" />
</div>

Gemini 336 是 Gemini 330 系列中的新成员，继承了 Gemini 335 出色的深度性能，并进一步优化了在室内反光区域、高动态暗部区域以及户外强光环境下的深度成像表现。对于机器人应用来说，它能够提供更稳定的高质量深度数据，适合感知、定位与操作等任务。

**1. 切换到相机分支**

当前相机支持位于 `DepthCameraSupport` 分支上：

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

确认当前分支：

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

预期输出：

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. 以可编辑模式安装 LeRobot**

如果你只使用 Orbbec：

<CodeBlock language="bash">
{`pip install -e ".[orbbec]"`}
</CodeBlock>

**3. 赋予相机权限**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. USBFS 缓存大小配置**

默认情况下，USBFS 缓存大小为 16 MB。此值不足以用于高分辨率图像或多个流和多个设备使用。用户可以将缓存大小增加到 128 MB。

检查 USBFS 缓存大小

<CodeBlock language="bash">
{`cat /sys/module/usbcore/parameters/usbfs_memory_mb`}
</CodeBlock>

临时增加 USBFS 缓存大小

<CodeBlock language="bash">
{`sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'`}
</CodeBlock>

:::tip
Orbbec 相机相关异常说明已统一整理到文末 FAQ。
:::

**5. 检测相机**

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

该命令会输出以下信息：

- 相机型号（Name）
- 序列号（Serial number）
- USB 信息
- 默认流配置

这里需要将采集到的 `Serial number` 输入到下面调用相机命令的 `serial_number_or_name` 参数中

**6. Orbbec 示例**

单 Orbbec 测试：

<CodeBlock language="bash">
{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
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
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}
</CodeBlock>

单 Orbbec 测试 + 普通相机测试：

<CodeBlock language="bash">
{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
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
    },
     side: {
     type: opencv,
     index_or_path: 8,
     width: 640,
     height: 480,
     fps: 30,
     fourcc: "MJPG"}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}
</CodeBlock>

:::tip

在使用单 Orbbec + 普通相机时，建议先插入 Orbbec 后再插入普通相机，因为在使用 `lerobot-find-cameras opencv` 命令查找相机编号时会发现 Orbbec 会存在3 个连续的相机编号，因此建议最后插入普通相机，让普通相机的编号排在最后。

:::

**7. 参数建议**

- `depth_alpha` 用于控制深度图的缩放比例；通常可以从 `0.2` 开始测试，再根据显示效果进行微调。
- 如果需要连接三个及以上深度相机，建议将 `fps` 降低到 `15`，以提升整体稳定性。
- 建议优先保持 `640x480` 分辨率，以获得更稳定的显示与传输效果。

</details>

<details className="content-details">

<summary>如果使用普通相机</summary>

为了实例化摄像头，您需要一个摄像头标识符。这个标识符可能会在您重启电脑或重新插拔摄像头时发生变化，这主要取决于您的操作系统。

要查找连接到您系统的摄像头的**摄像头索引**，请运行以下脚本：

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

之后，您就可以在遥控操作时在电脑上显示摄像头画面了，只需运行以下代码即可。这对于在录制第一个数据集之前准备您的设置非常有用。

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true`}
</CodeBlock>

:::tip
`fourcc: "MJPG"`格式图像是经过压缩后的图像，你可以尝试更高分辨率，当然你可以尝试`YUYV`格式图像，但是这会导致图像的分辨率和FPS降低导致机械臂运行卡顿。目前`MJPG`格式下可支持`3`个摄像头`1920*1080`分辨率并且保持`30FPS`, 但是依然不推荐2 个摄像头通过同一个USB Hub接入电脑。同时，如果摄像头接在 USB 2.0 的接口，也可能会出现无法读取的问题，建议优先使用 USB 3.0 接口并尽量直连设备。
:::

如果您有更多摄像头，可以通过更改 `--robot.cameras` 参数来添加。您应该注意`index_or_path` 的格式，它由 `python -m lerobot.find_cameras opencv` 命令输出的摄像头 ID 的最后一位数字决定。

例如，如果你想添加摄像头:

<CodeBlock language="bash">
{`lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true`}
</CodeBlock>

:::tip
`fourcc: "MJPG"`格式图像是经过压缩后的图像，你可以尝试更高分辨率，当然你可以尝试`YUYV`格式图像，但是这会导致图像的分辨率和FPS降低导致机械臂运行卡顿。目前`MJPG`格式下可支持`3`个摄像头`1920*1080`分辨率并且保持`30FPS`, 但是依然不推荐2 个摄像头通过同一个USB Hub接入电脑。同时，如果摄像头接在 USB 2.0 的接口，也可能会出现无法读取的问题，建议优先使用 USB 3.0 接口并尽量直连设备。
:::

</details>
</section>

## 数据集制作与采集

<section id="record-dataset" className="section-card">
  <div className="section-title">
    <span>Step 6</span>
    <h2>数据集制作与采集</h2>
    <p>从一个简单、稳定、重复性高的任务开始，先完成本地录制，再根据需要上传到 Hugging Face Hub。</p>
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

  <div className="video-container">
    <iframe
      loading="lazy"
      width="900"
      height="600"
      src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819257003&bvid=BV1r6UUBFEzq&cid=34229456824&p=1&autoplay=0&muted=1&mute=1&danmaku=0"
      title="bilibili video player"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

  <div className="notice-grid">
    <div className="notice-card">
      <strong>推荐任务</strong>
      <span>先从“抓取黑色方块”这类短流程任务开始，确保动作稳定、相机固定、物体始终在画面中。</span>
    </div>
    <div className="notice-card warning">
      <strong>数据质量优先</strong>
      <span>失败动作、遮挡、强光变化和背景干扰都会影响训练效果。录制失败时建议舍弃该 episode 并重新采集。</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>方式一：保存数据集到本地</summary>

    如果你只想先在本地验证流程，可以直接运行下面的命令。`repo_id` 可按需要自定义；当 `push_to_hub=false` 时，数据集会保存在 `~/.cache/huggingface/lerobot` 下，并创建对应的 `seeedstudio123/test` 文件夹。

<CodeBlock language="bash">
{`lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>方式二：上传数据集到 Hugging Face Hub</summary>

    如果你希望使用 Hugging Face Hub 管理数据集，请先使用具有写入权限的 token 登录。Token 可在 [Hugging Face 设置](https://huggingface.co/settings/tokens) 中生成。

<CodeBlock language="bash">
{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential`}
</CodeBlock>

    将 Hugging Face 用户名保存到变量中，方便后续命令复用：

<CodeBlock language="bash">
{`HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER`}
</CodeBlock>

    下面的命令会记录 5 个 episode，并将数据集上传到 Hub：

<CodeBlock language="bash">
{`lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}
</CodeBlock>

    运行过程中会看到类似如下日志：

<CodeBlock language="text">
{`INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)`}
</CodeBlock>
  </details>

  <h3>记录功能说明</h3>

  <div className="feature-grid">
    <div>
      <strong>数据存储</strong>
      <span>数据以 LeRobotDataset 格式写入磁盘。默认会在记录结束后推送到 Hugging Face；如需关闭上传，请使用 <code>--dataset.push_to_hub=false</code>。</span>
    </div>
    <div>
      <strong>检查点与恢复</strong>
      <span>记录过程中会自动创建检查点。如果记录中断，可重新运行相同命令并添加 <code>--resume=true</code> 来恢复。</span>
    </div>
    <div>
      <strong>恢复时的 episode 数量</strong>
      <span>恢复记录时，<code>--dataset.num_episodes</code> 应填写“额外要记录的 episode 数量”，而不是最终总数量。</span>
    </div>
    <div>
      <strong>重新开始录制</strong>
      <span>如果想完全从头开始记录，请手动删除旧的数据集目录，再重新运行采集命令。</span>
    </div>
  </div>

  <h3>常用记录参数</h3>

  | 参数 | 描述 | 默认值 |
  | --- | --- | --- |
  | `--dataset.episode_time_s` | 每个 episode 的持续时间，单位为秒。 | 60 |
  | `--dataset.reset_time_s` | 每个 episode 结束后的环境重置时间，单位为秒。 | 60 |
  | `--dataset.num_episodes` | 要记录的 episode 总数。 | 50 |

  <h3>录制过程中的键盘控制</h3>

  | 键 | 动作 |
  | --- | --- |
  | →（右箭头） | 提前结束当前 episode 或 reset，进入下一阶段。 |
  | ←（左箭头） | 取消当前 episode，并重新录制。 |
  | ESC | 立即停止会话，编码视频，并上传数据集。 |

  :::tip
  假设你正在执行“将红色方块抓取并放入盒子”的任务：如果方块掉落或本次动作质量较差，可以先将机械臂操控至休息状态，然后按下左箭头键舍弃当前 episode；如果任务提前完成，也可以按下右箭头键跳过剩余等待时间，直接进入下一个 episode 的准备阶段。

  在录制过程中合理使用方向键，有助于避免失败动作污染数据集，并提升整体录制效率。如需删除或修改已录制数据集，请参阅[数据集工具](/cn/lerobot_dataset_tool)。
  :::

  <h3>数据收集技巧</h3>

  <div className="tips-grid">
    <div><strong>任务建议</strong><span>在不同位置抓取物体并将其放入箱子中。</span></div>
    <div><strong>数据规模</strong><span>建议记录 ≥50 个 episode，例如 5 个位置 × 每个位置 10 个 episode。</span></div>
    <div><strong>保持一致</strong><span>固定摄像头，保持相同抓取行为，并确保目标物体始终可见。</span></div>
    <div><strong>逐步增加难度</strong><span>先录制可靠抓取，再加入位置变化、抓取方式变化或相机调整。</span></div>
  </div>

  💡 **经验法则**：仅使用摄像头画面作为指导，只根据屏幕反馈的视频图像来控制机械臂完成任务。

  如果你想深入了解什么是好的数据集，可以查看 Hugging Face 的[数据集博客文章](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)。
</section>

## 可视化数据集

<section id="visualize-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>可视化数据集</h2>
    <p>录制完成后可视化检查数据集图像、动作和 episode 质量。</p>
  </div>

<CodeBlock language="bash">
{`echo \${HF_USER}/so101_test`}
</CodeBlock>

如果您没有使用 `--dataset.push_to_hub=false` ，并上传了数据，您也可以在本地通过以下命令进行可视化：

<CodeBlock language="bash">
{`lerobot-dataset-viz \
  --repo-id \${HF_USER}/so101_test`}
</CodeBlock>

如果您使用了 `--dataset.push_to_hub=false` ，没有上传数据，您也可以通过以下命令在本地进行可视化：

<CodeBlock language="bash">
{`lerobot-dataset-viz \
  --repo-id seeedstudio123 \
  --root ~/.cache/huggingface/lerobot/seeedstudio123 \
  --episode-index 0 \
  --display-compressed-images false`}
</CodeBlock>

这里，`repo-id`：`seeedstudio123` 是数据收集时自定义的名称，`root` 是数据集在硬盘上的绝对路径，`episode-index` 是想查看的具体轮次。

<div className="image-frame">
      <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="" />
  </div>
</section>

## 回放一个数据集

<section id="replay-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>回放一个数据集</h2>
    <p>将已录制 episode 回放到真实机械臂，检查数据与执行一致性。</p>
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

现在，尝试在您的机器人上重播第一个数据集（数据保存在本地）：

<CodeBlock language="bash">
{`lerobot-replay \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --dataset.repo_id=seeedstudio123 \
  --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
  --dataset.episode=0`}
</CodeBlock>

此时，机器人应该做出与你遥操记录时一样的动作。

这里，`dataset.root` 是指定数据集的物理路径，`dataset.repo_id` 是数据收集时自定义的名称。
</section>

## 训练与评估

<section id="training" className="section-card">
  <div className="section-title">
    <span>Step 7</span>
    <h2>训练与评估</h2>
    <p>使用 ACT、SmolVLA、Pi0、Pi0.5、GR00T、PEFT 和异步推理完成训练与部署。</p>
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

<div className="video-container">
<iframe
  loading="lazy"
  width="900"
  height="600"
  src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819256994&bvid=BV1r6UUBFEz2&cid=34229522064&p=1&autoplay=0&muted=1&mute=1&danmaku=0"
  title="bilibili video player"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
</div>

<details className="content-details">
<summary>[ACT](https://huggingface.co/docs/lerobot/act)</summary>

参考官方教程[ACT](https://huggingface.co/docs/lerobot/act)

**训练**

要训练一个控制您机器人策略，使用 `python -m lerobot.scripts.train` 脚本。需要一些参数。以下是一个示例命令：

<CodeBlock language="bash">
{`lerobot-train \
  --dataset.repo_id=\${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000`}
</CodeBlock>

**如果您想在本地数据集上进行训练，请确保 `repo_id` 与数据收集时使用的名称匹配，并添加 `--policy.push_to_hub=false`。**

<CodeBlock language="bash">
{`lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000`}
</CodeBlock>

:::tip

如果您是 RTX 50 系列显卡，在训练时需要增加--dataset.video_backend=pyav部分，绕过 Torchvision 预览版的 API 缺失，即训练命令为：

<CodeBlock language="bash">
{`lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}
</CodeBlock>

:::

命令解释

- **数据集指定**：我们通过 `--dataset.repo_id=\${HF_USER}/so101_test` 参数提供了数据集。
- **训练步数**：我们通过 `--steps=300000` 修改训练步数，算法默认为800000，根据自己的任务难易程度，来进行调整，如果不确定，可以调高一些，因为训练过程中会生成检查点，评估可以从检查点开始。
- **策略类型**：我们使用 `policy.type=act` 提供了策略，同样你可以更换[act,diffusion,pi0,pi0fast,pi0fast,sac,smolvla]等策略，这将从 `configuration_act.py` 加载配置。重要的是，这个策略会自动适应您机器人（例如 `laptop` 和 `phone`）的电机状态、电机动作和摄像头数量，这些信息已保存在您的数据集中。
- **设备选择**：我们提供了 `policy.device=cuda`，因为我们正在 NVIDIA GPU 上进行训练，但您可以使用 `policy.device=mps` 在 Apple Silicon 上进行训练。
- **可视化工具**：我们提供了 `wandb.enable=true` 来使用 [Weights and Biases](https://docs.wandb.ai/quickstart) 可视化训练图表。这是可选的，但如果您使用它，请确保您已通过运行 `wandb login` 登录。

**评估**

您可以使用 [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) 中的 `record` 功能，但需要将策略训练结果训练结果权重文件作为输入。例如，运行以下命令记录 10 个评估回合：

<CodeBlock language="bash">
{`lerobot-rollout \
  --strategy.type=base \
  --policy.path=\${HF_USER}/act_policy \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras=="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --display_data=true \
  --task="Your task description" \ # can be skipped for ACT
  --duration=60`}
</CodeBlock>

1. `--policy.path` 参数，指示您的策略训练结果权重文件的路径（例如 `outputs/train/act_so101_test/checkpoints/last/pretrained_model`）。如果您将模型训练结果权重文件上传到 Hub，也可以使用模型仓库（例如 `\${HF_USER}/act_so100_test`）。
2. 数据集的名称 `dataset.repo_id`以 `eval_` 开头，这个操作会在你评估的时候为你单独录制评估时候的视频和数据，将保存在 `eval_` 开头的文件夹下，例如`seeed/eval_test123`。
3. 如果评估阶段遇到`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`请先删除`eval_`开头的这个文件夹再次运行程序。
4. 当遇到 `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`请注意 `--robot.cameras` 这个参数中的 `front` 和 `side`等关键词必须和采集数据集的时候保持严格一致。

</details>

<details className="content-details">
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla)</summary>

参考官方教程 [SmolVLA](https://huggingface.co/docs/lerobot/smolvla)。

SmolVLA 是 Hugging Face 提供的**轻量级机器人基础模型**（foundation model）。它的设计目标是：让你把自己录制的 LeRobot 数据集拿来**快速微调（fine-tune）**，更快在真实机器人上跑出效果。

简单理解它的输入/输出：

- 输入：多路相机画面 + 机器人当前状态（传感器/关节等）+ 一句自然语言任务指令
- 输出：一段连续的动作（action chunk），用来驱动机械臂执行任务

<CodeBlock language="bash">
{`pip install -e ".[smolvla]"`}
</CodeBlock>

**收集数据集（建议）**

SmolVLA 是“底座模型”，要在你的桌面、你的相机、你的夹爪/物体上表现好，通常需要用你自己的数据做微调。

- 建议从 ~50 个 episode 开始（太少容易学不会/泛化差）。
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
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_blue_follower_arm \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}
</CodeBlock>

参数怎么填：

- `--robot.port`：改成你自己机器上识别到的串口（常见是 `/dev/ttyACM0` 或 `/dev/ttyUSB0`）。
- `--robot.id`：你的机器人 ID（要和你校准/录制时使用的保持一致）。
- `--robot.cameras`：改成你真实相机的 `index_or_path`，并确保相机键名（比如 `front`、`side`）和你录制数据集时完全一致。
- `--dataset.single_task`：建议与录制数据集时的任务描述一致。
- `--dataset.repo_id`：评估输出的数据集名；如果你登录了 Hugging Face，它会被创建/上传到你的账号下。
- `--policy.path`：
  - 如果模型在本地：填训练输出目录下的权重路径（例如 `outputs/train/my_smolvla/checkpoints/last/pretrained_model`）
  - 如果模型在 Hub：填 `\${HF_USER}/FINETUNE_MODEL_NAME`

可选：如果你想在评估的 episode 之间“手动遥操调整一下”，可以加入 teleop（按你的设备与配置填写）：

<CodeBlock language="bash">
{`--teleop.type=so100_leader \
--teleop.port=/dev/ttyACM0 \
--teleop.id=my_red_leader_arm`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0)</summary>

参考官方教程 [Pi0](https://huggingface.co/docs/lerobot/pi0)。

π₀（Pi0）是 Physical Intelligence 提出的 **Vision-Language-Action（视觉-语言-动作）** 模型，用于更“通用”的机器人控制。你可以把它理解为：它既能看相机画面，也能读懂一句自然语言指令，然后输出控制机械臂的动作。

在 LeRobot 里使用它很简单：训练时把策略类型设为 `--policy.type=pi0` 即可（不重复赘述 ACT 里讲过的通用训练/评估概念）。

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

:::tip
如果你使用的是较旧的 LeRobot 版本（例如 0.4.0），安装 `pi` 依赖时可能需要从 GitHub 源安装（官方说明后续补丁会修复）：

<CodeBlock language="bash">
{`pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"`}
</CodeBlock>

:::

**训练**

<CodeBlock language="bash">
{`lerobot-train \
    --dataset.repo_id=your_dataset \
    --policy.type=pi0 \
    --output_dir=./outputs/pi0_training \
    --job_name=pi0_training \
    --policy.pretrained_path=lerobot/pi0_base \
    --policy.repo_id=your_repo_id \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --policy.dtype=bfloat16 \
    --policy.freeze_vision_encoder=false \
    --policy.train_expert_only=false \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32`}
</CodeBlock>

常用参数（只挑 Pi0 特有/最常调的）：

- `--policy.pretrained_path=lerobot/pi0_base`：基础模型。官方也提供 `lerobot/pi0_libero`（更偏 Libero 数据集的版本），你可以按任务尝试切换。
- `--policy.compile_model=true`：启用编译优化，训练可能更快（首次编译会慢一点）。
- `--policy.gradient_checkpointing=true`：显著省显存，适合显存吃紧时开启。
- `--policy.dtype=bfloat16`：混合精度，速度/显存更友好（硬件支持时推荐）。
- `--policy.train_expert_only=true`（省显存技巧）：冻结大模型（VLM）部分，只训练“动作专家”和投影层；更省显存，但可训练能力会更受限，适合先跑通或小数据快速试验。

**验证**

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=\${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05)</summary>

参考官方教程 [Pi0.5](https://huggingface.co/docs/lerobot/pi05)。

π₀.₅（Pi0.5）同样是 Physical Intelligence 提出的 **Vision-Language-Action（视觉-语言-动作）** 模型，可以理解为 π₀ 的“升级版”，重点增强了**开放世界泛化**能力：不只在训练时见过的固定场景里表现好，还要能在新的房间、新的物体、新的摆放方式下更稳地完成任务。

它要解决的“泛化”大致分三层（举例帮助理解）：

- **物理层**：没见过的勺子/盘子，也能知道该怎么抓（把手/边缘），并在杂乱环境中操作。
- **语义层**：理解“该放哪里/用什么工具”，例如鞋子应该进鞋柜、衣服进洗衣篮。
- **环境层**：适应更真实的“乱糟糟”场景，例如家庭、办公室、医院等。

在 LeRobot 里使用它：把策略类型设为 `--policy.type=pi05` 即可

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

:::tip
如果你使用的是较旧的 LeRobot 版本（例如 0.4.0），安装 `pi` 依赖时可能需要从 GitHub 源安装（官方说明后续补丁会修复）：

<CodeBlock language="bash">
{`pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"`}
</CodeBlock>

:::

**训练**

<CodeBlock language="bash">
{`lerobot-train \
    --dataset.repo_id=your_dataset \
    --policy.type=pi05 \
    --output_dir=./outputs/pi05_training \
    --job_name=pi05_training \
    --policy.repo_id=your_repo_id \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=true \
    --policy.dtype=bfloat16 \
    --policy.freeze_vision_encoder=false \
    --policy.train_expert_only=false \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32`}
</CodeBlock>

常用参数（Pi0.5 相关）：

- `--policy.pretrained_path=lerobot/pi05_base`：基础模型。官方也提供 `lerobot/pi05_libero`（更偏 Libero 数据集的版本），你可以按任务尝试切换。
- `--policy.train_expert_only=true`（省显存技巧）：冻结大模型（VLM）部分，只训练“动作专家”和投影层；更省显存，适合先跑通或小数据试验。
- `--policy.normalization_mapping=...`：如果你的数据集归一化统计不匹配/缺失，可以用该映射强制指定归一化方式（见官方教程示例）。

如果你的数据集没有 quantile 统计（某些版本/格式需要），官方也提供了转换脚本思路：把数据集补齐/转换统计后再训练（具体以官方文档为准）。

**验证**

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=\${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot)</summary>

请参考官方教程 [GR00T N1.5](https://huggingface.co/docs/lerobot/groot)。

GR00T N1.5 是 NVIDIA 提供的一个开放基础模型（foundation model），面向更通用的机器人推理与技能学习。它是跨机体（cross-embodiment）模型：可以同时接收**语言**与**图像**等多模态输入，在不同环境里执行操作任务。

在 LeRobot 中使用它的关键点是把策略类型设为 `--policy.type=groot`。不过需要注意：目前 GR00T N1.5 对环境要求更高（依赖 FlashAttention，且需要 CUDA GPU），建议先把 ACT / Pi0 跑通，再来尝试。

**安装（重要）**

截至官方文档目前的说明，GR00T N1.5 需要 **flash-attn** 才能工作，并且只能在**支持 CUDA 的设备**上使用。

建议步骤（按顺序执行）：

1. 按安装指南先把基础环境准备好（Python、CUDA、驱动等），**这一步先不要安装 `lerobot`**。
2. 安装 PyTorch（版本范围以官方为准；下面是示例写法）：

<CodeBlock language="bash">
{`# 不同 CUDA 版本对应不同 index-url，请按你的系统参考 PyTorch 安装页
pip install "torch>=2.2.1,<2.8.0" "Torchvision>=0.21.0,<0.23.0"`}
</CodeBlock>

:::tip
如果您是RTX 50系列，需要满足下面要求：Python=3.10，CUDA=12.8，Torch=2.7.1

下载命令如下：

<CodeBlock language="bash">
{`pip install torch==2.7.1 Torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.PyTorch.org/whl/cu128`}
</CodeBlock>

:::

3. 安装 flash-attn 依赖与 flash-attn 本体：

<CodeBlock language="bash">
{`pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"`}
</CodeBlock>

:::tip
如果您是RTX 50系列，需要满足下面要求：flash_attn=2.8.0

下载命令如下：

<CodeBlock language="bash">
{`pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation`}
</CodeBlock>

:::

4. 安装 LeRobot 的 groot 依赖：

<CodeBlock language="bash">
{`pip install "lerobot[groot]"`}
</CodeBlock>

:::tip
如果 flash-attn 安装失败，通常与（1）PyTorch/CUDA 版本不匹配、（2）编译依赖缺失或（3）环境过新/过旧有关。遇到这种情况优先对照官方 GR00T 文档与 PyTorch 安装说明排查。
:::

**训练（微调）**

官方给了多 GPU 的训练示例（`accelerate launch --multi_gpu ...`）。如果你只有一张 GPU，也可以先用单进程方式跑通（是否支持/参数细节以官方文档为准）。

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
- `--output_dir`：训练输出目录（权重/检查点会放在这里）。
- `--steps`、`--batch_size`：训练步数与 batch，大模型对显存很敏感，跑不动就先减小 `batch_size`。
- `--policy.repo_id`：如果你要把模型推到 Hub，填你希望创建的模型仓库名。

**验证（上机运行/评估）**

训练完成后可以像其它策略一样用 `lerobot-record` 做评估/录制回放。下面是官方给的“双臂”示例（仅供参考；SO101 单臂用户不需要 `left_arm_port/right_arm_port` 这类参数）：

<CodeBlock language="bash">
{`lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_port=/dev/ttyACM1 \
  --robot.right_arm_port=/dev/ttyACM0 \
  --robot.id=bimanual_follower \
  --robot.cameras='{ right: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}, left: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}, top: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_bimanual \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab and handover the red cube to the other arm" \
  --policy.path=\${HF_USER}/groot-bimanual \
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
{`# 方式一：源码安装（在 lerobot 仓库根目录）
pip install -e ".[peft]"`}
</CodeBlock>

<CodeBlock language="bash">
{`# 方式二：pip 安装
pip install "lerobot[peft]"`}
</CodeBlock>

更多适配方法与概念说明可参考官方文档：
[🤗 PEFT 文档](https://huggingface.co/docs/peft/index)

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

默认情况下，PEFT 往往会针对模型中最关键的投影层（例如注意力的 `q_proj`、`v_proj` 等）注入 LoRA，并可能额外覆盖状态/动作相关的投影层。若需要针对不同层，可以使用 `--peft.target_modules` 指定目标层。

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

### 训练步骤

**方式一：使用命令行参数进行多卡训练**

首先，在 LeRobot 环境中安装训练加速系统。

<CodeBlock language="bash">
{`pip install accelerate`}
</CodeBlock>

接着运行以下命令开始多卡训练。

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

关键的 `accelerate` 参数说明如下。

| 参数 | 说明 |
| --- | --- |
| `--multi_gpu` | 启用多 GPU 训练。 |
| `--num_processes=2` | 使用的 GPU 数量，通常等于 GPU 张数。 |
| `--mixed_precision=fp16` | 使用 fp16 混合精度；如果硬件支持，也可以使用 bf16。 |

请注意，**bf16 需要硬件支持**，并非所有 GPU 都可以使用。

| 精度类型 | 硬件支持情况 |
| --- | --- |
| fp16 | 几乎所有 NVIDIA GPU 均支持。 |
| bf16 | 仅部分较新的 GPU 支持，如 Ampere 及更新架构。 |

如果你的 GPU 不支持 bf16，请在 `accelerate` 配置中选择 fp16，或在命令行中显式指定 fp16。

**方式二：使用 accelerate 配置文件（可选）**

如果你经常进行多卡训练，可以保存训练配置，避免每次重复输入命令行参数。如果你只是想尽快跑起来训练，可以直接跳过本节，使用方式一即可。

`accelerate config` 的作用是将硬件环境（GPU 数量、混合精度等）保存为配置文件。它不会改变 LeRobot 的训练逻辑，只是减少重复输入。

<CodeBlock language="bash">
{`accelerate config`}
</CodeBlock>

单机多 GPU 的常见配置如下。

| 配置项 | 建议选择 |
| --- | --- |
| Compute environment | This machine |
| Number of machines | 1 |
| Number of processes | 使用的 GPU 数量，通常等于 GPU 张数 |
| GPU ids to use | 直接回车，表示使用所有 GPU |
| Mixed precision | 优先选择 fp16；确认 GPU 支持 bf16 时也可选择 bf16 |

完成配置后，可以直接使用以下命令进行训练。

<CodeBlock language="bash">
{`accelerate launch $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}
</CodeBlock>

### 多 GPU 训练参数调整

LeRobot 不会根据 GPU 数量自动调整学习率或训练步骤，以避免在用户不知情的情况下改变训练行为。如果希望在多 GPU 训练时调整超参数，可以参考下面的经验。

**步数调整**

多 GPU 会使有效 batch size 增大，即 `batch_size × num_gpus`。例如单卡训练时 `batch_size = 8`、`steps = 100000`；双卡训练时，如果 `batch_size` 仍为 8，有效 batch size 变为 16，`steps` 可以减少为 50000。

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act`}
</CodeBlock>

**学习率调整**

使用多块 GPU 时，每一步更新会使用更多样本。如果希望模型“学习速度”保持和单卡相近，通常可以按 GPU 数量等比例增大学习率。

- 新学习率 = 单卡学习率 × GPU 数量
- 例如单卡学习率 `optimizer.lr=1e-4`，使用 2 张 GPU 时可以改为 `2e-4`

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \
  --optimizer.lr=2e-4 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act`}
</CodeBlock>

这些调整不是强制规则，而是常见经验做法。如果不确定如何调整，也可以先保持学习率和训练步数不变，只要训练过程稳定，结果依然可用。

如需更高级的配置和故障排除，请参见 [Accelerate 文档](https://huggingface.co/docs/accelerate/index)。如果你想了解更多大规模 GPU 训练，也可以继续查阅原文提到的 Ultrascale Playbook。

</details>

<details className="content-details">
<summary>（可选）在部署时使用异步推理</summary>

在不启用异步推理时，LeRobot 的控制流程可以理解为常规的顺序式 / 同步式推理：策略先预测一段动作，再执行这段动作，之后再等待下一次预测。对于较大的模型，这会导致机器人在等待新动作块时出现明显停顿。异步推理的目标，就是让机器人一边执行当前动作块，一边提前计算下一块动作，从而减少空等并提升响应性。异步推理适用于 LeRobot 支持的策略；包括 ACT、OpenVLA、Pi0、SmolVLA 这类按 chunk 输出动作的策略。由于推理和实际控制解耦，异步推理也有助于利用具有更强算力的机器来为机器人进行推理。

你可以在 Hugging Face 提供的[博客文章](https://huggingface.co/blog/async-robot-inference)中阅读更多关于异步推理的信息。

先理解几个核心概念：

<div className="feature-grid">
  <div><strong>客户端</strong><span>连接机械臂和相机，采集图像、机器人位姿等观测数据，并将服务器返回的动作块按顺序执行。</span></div>
  <div><strong>服务器端</strong><span>提供推理算力，接收客户端观测数据，计算动作块后返回。它可以是本机、局域网电脑或云服务器。</span></div>
  <div><strong>动作块</strong><span>策略一次输出的一组连续机械臂动作指令，客户端会按顺序消费这些动作。</span></div>
  <div><strong>同步推理</strong><span>预测一块、执行一块。大模型或算力不足时，机器人可能出现“运动一段、等待一段”的停顿。</span></div>
  <div><strong>异步推理</strong><span>机器人执行当前动作块时，服务器提前计算下一块动作，并通过聚合减少动作切换突变。</span></div>
</div>

**异步推理的三种部署场景**

**1. 单机部署**

机器人、相机、客户端、服务器都在同一台设备上。
这是最简单的情况，服务器监听 127.0.0.1 即可，客户端也连接 127.0.0.1:端口。官方文档中的命令示例就是这个场景。

**2. 局域网部署**

机器人和相机接在一台轻量设备上，策略服务器运行在同一局域网中的另一台高算力设备上。
此时服务器必须监听一个可被其他机器访问的地址，客户端也必须连接服务器的局域网 IP，而不能再写 127.0.0.1。

**3. 跨网络 / 云端部署**

策略服务器运行在公网可访问的云主机上，客户端通过公网连接它。这种方式可以使用云主机更强的 GPU。在网络状况良好的情况下，网络往返时间（网络延时）有时相对推理耗时较小，但这取决于你的实际网络环境。

> 安全提醒：LeRobot async inference 管线存在未认证 gRPC + pickle 反序列化的风险。如果服务器上有重要信息或者重要服务，公网部署时，不建议把服务直接裸露到互联网；更稳妥的做法是 VPN、SSH 隧道，或至少把安全组来源 IP 限制到你自己的客户端公网地址。

**开始异步推理部署**

**Step1: 环境配置**

首先，使用 pip 安装运行异步推理所需的额外依赖。客户端和服务器端均需要安装 lerobot 并安装额外依赖：

<CodeBlock language="bash">
{`pip install -e ".[async]"`}
</CodeBlock>

**Step2: 网络配置与检查**

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

如果是在云端服务器上运行：
在服务器管理页面的安全组放行 8080 端口，或使用其他已经放行的端口。不同云服务平台的方式并不统一，详见云平台服务商。

**3. 确认 IP 地址**

单机部署可以跳过这一步（单机的 IP 地址恒为 127.0.0.1）。

如果是局域网部署：
需要确认并记住服务器端的局域网 IP 地址。客户端连接时，填写的应当是运行 policy_server 的那台机器的局域网 IP，而不是客户端自己的 IP。

Linux / Jetson / 树莓派：

<CodeBlock language="bash">
{`hostname -I`}
</CodeBlock>

如果输出多个地址，一般选择当前局域网网卡对应的那个，例如 192.168.x.x。
也可以使用：

<CodeBlock language="bash">
{`ip addr`}
</CodeBlock>

查看当前联网网卡下的 inet 字段。

Windows：

<CodeBlock language="bash">
{`ipconfig`}
</CodeBlock>

找到类似 IPv4 地址 . . . . . . . . . . . : 192.168.14.140 的字段，它就是该机器的局域网 IP 地址。

macOS：

<CodeBlock language="bash">
{`ifconfig`}
</CodeBlock>

找到当前联网网卡对应的 inet 字段，它就是局域网 IP 地址。

我们需要将服务器端的局域网 IP 地址记住。我们将用`<局域网IP地址>`来指代它。

如果是云端服务器部署：在服务器控制台寻找公网 IP，一般是这些名字之一：

- Public IPv4
- External IP
- Public IP address
- EIP
- 公网 IP

我们需要将公网 IP 地址记住。我们将用`<服务器公网IP>`来指代它。

**4. 连接测试**

- 单机部署：可跳过这一步
- 局域网 / 云端部署：建议在客户端测试是否能访问服务器端口，测试例子如下：

局域网示例：在客户端运行

<CodeBlock language="bash">
{`nc -vz <局域网IP地址> 8080`}
</CodeBlock>

云端示例：在客户端运行

<CodeBlock language="bash">
{`nc -vz <服务器公网IP> 8080`}
</CodeBlock>

**Step3: 启动服务**

**场景 A：单机部署**

在一个终端中启动本地服务：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \
  --host=127.0.0.1 \
  --port=8080`}
</CodeBlock>

运行成功后，你需要保持这个终端打开，你需要新建新的终端才可以执行其他命令。

**场景 B：局域网内部署**

在服务器端运行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \
  --host=0.0.0.0 \
  --port=8080`}
</CodeBlock>

此时客户端连接时，--server_address 中填写的应当是服务器端的局域网 IP 地址，即 `<局域网IP地址>:8080`。

**场景 C：云端服务器部署**

在服务器端运行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \
  --host=0.0.0.0 \
  --port=8080`}
</CodeBlock>

此时客户端连接时，--server_address 中填写的应当是服务器的公网 IP 地址，即`<服务器公网IP>:8080`。

**Step4: 选择推理参数**

在客户端运行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.robot_client \
  --server_address=<ip地址>:8080 \
  --robot.type=so100_follower \
  --robot.port=/dev/tty.usbmodem585A0076841 \
  --robot.id=follower_so100 \
  --robot.cameras="{ laptop: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}, phone: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \
  --task="dummy" \
  --policy_type=your_policy_type \
  --pretrained_name_or_path=user/model \
  --policy_device=cuda \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --aggregate_fn_name=weighted_average \
  --debug_visualize_queue_size=True`}
</CodeBlock>

参数解释：

- --server_address
  指定策略服务器的地址和端口。`<ip地址>`应该换为 127.0.0.1（本机）或 `<局域网IP地址>`（局域网）或 `<服务器公网IP>`（云服务器）。
- --robot.type、--robot.port、--robot.id、--robot.cameras
  硬件设备参数，与数据集采集时的参数保持一致。
- --task
  任务的描述，SmolVLA 等视觉语言策略可以根据任务文本决定动作目标。
- --policy_type替换成具体策略名，例如：

  - smolvla
  - act
- --pretrained_name_or_path
  这个的值要替换为服务器端的模型路径，或者 Hugging Face 上的模型路径。
- --policy_device
  指定服务器端使用的推理设备。
  可以是 cuda、mps 或 cpu。
- --actions_per_chunk=50指定每次推理输出多少个动作。这个值越大：

  - 优点：动作缓存更充足，不容易断流
  - 缺点：预测跨度更长，控制误差可能累计得更明显
- --chunk_size_threshold=0.5
  指定何时向服务器请求下一块动作。
  这是一个阈值，范围通常在 0 到 1 之间。
  可以理解为：当当前动作队列剩余比例低于这个阈值时，客户端就会提前发送新的观测，请求下一块动作。

  这里设置为 0.5，表示：

  - 当当前动作块大约消耗到一半时
  - 客户端就开始请求下一块动作

  这个值越大，请求会越频繁，系统更灵敏，但服务器负载也更高。
  这个值越小，就越接近同步推理的行为。
- --aggregate_fn_name=weighted_average
  指定重叠动作区间的聚合方式。

  在异步推理中，旧动作块还没完全执行完时，新动作块可能已经回来了。
  这时两块动作会有一部分时间区间重叠，需要用一个聚合函数把它们合成最终执行动作。

  weighted_average 的含义就是：
  对重叠部分使用加权平均的方式进行融合。

  这样通常能让动作切换更平滑，减少突变。
- --debug_visualize_queue_size=True
  是否在运行时可视化动作队列大小。
  打开后可以更直观地看到队列是否频繁触底，从而帮助你调整 actions_per_chunk 和 chunk_size_threshold。

**Step 5：根据机器人表现调整参数**

在异步推理中，有两个同步推理没有的额外参数需要调整：

| 参数                 | 建议初始值 | 说明                                                                                           |
| -------------------- | ---------: | ---------------------------------------------------------------------------------------------- |
| actions_per_chunk    |         50 | 策略一次输出多少动作。典型值：10-50。                                                          |
| chunk_size_threshold |        0.5 | 当动作队列剩余比例 ≤ chunk_size_threshold 时，客户端会发送一个新的动作块。值的范围为 [0, 1]。 |

当 --debug_visualize_queue_size=True 时，会在运行时绘制动作队列大小的变化情况。

异步推理需要平衡的是：服务器生成动作块的速度必须大于等于客户端消耗动作块的速度，否则动作队列会空，机器人将重新出现卡顿（可以在队列可视化中看到曲线触底）。

服务器生成动作块的速度受模型大小、设备类型、显存/内存、GPU 算力等影响。
客户端消耗动作块的速度受设定的执行 fps 影响。

如果队列频繁空，需要加大 actions_per_chunk、chunk_size_threshold，或者减少 fps。
当队列曲线波动频繁，但是队列剩余动作一直充足时，可以适当降低 chunk_size_threshold。

一般来说：

- actions_per_chunk 经验值在 10-50
- chunk_size_threshold 经验值在 0.5-0.7，建议调整时从 0.5 开始，慢慢加大。

</details>

<div className="video-container">
<iframe
  loading="lazy"
  width="900"
  height="600"
  src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
</div>


训练可能需要几个小时。您将在 `outputs/train/act_so101_test/checkpoints` 目录中找到训练结果权重文件。

要从某个训练结果权重文件恢复训练，下面是一个从 `act_so101_test` 策略的最后一个训练结果权重文件恢复训练的示例命令：

<CodeBlock language="bash">
{`lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}
</CodeBlock>
</section>

## FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>FAQ</h2>
    <p>这里集中整理串口、舵机、ffmpeg、数据集、相机与训练评估中最常见的问题。</p>
  </div>

  <div className="notice-grid">
    <div className="notice-card">
      <strong>优先使用验证仓库</strong>
      <span>如果使用本文档教程，请 clone 推荐仓库 <code>https://github.com/Seeed-Projects/lerobot.git</code>。该仓库是经过验证的稳定版本。</span>
    </div>
    <div className="notice-card warning">
      <strong>上游版本差异</strong>
      <span>LeRobot 官方仓库实时更新，可能出现数据集版本、命令参数或依赖变化等不可预期问题。</span>
    </div>
  </div>

  <details className="content-details">
    <summary>校准舵机 ID 时提示找不到 gripper motor</summary>

<CodeBlock language="text">
{`Motor 'gripper' was not found, Make sure it is connected`}
</CodeBlock>

    请仔细检查通信线是否与舵机连接正常，并确认电源电压正确。
  </details>

  <details className="content-details">
    <summary>串口存在但无法连接 /dev/ttyACM0</summary>

<CodeBlock language="text">
{`Could not connect on port "/dev/ttyACM0"`}
</CodeBlock>

    如果通过 `ls /dev/ttyACM*` 可以看到 `ttyACM0`，通常是忘记给串口权限。可以运行：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>ffmpeg 报 No valid stream found</summary>

<CodeBlock language="text">
{`No valid stream found in input file. Is -1 of the desired media type?`}
</CodeBlock>

    请安装 ffmpeg 7.1.1：

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

    <div className="image-frame">
      <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="No valid stream error" />
    </div>
  </details>

  <details className="content-details">
    <summary>读取舵机位置失败或总线无响应</summary>

<CodeBlock language="text">
{`ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!`}
</CodeBlock>

    请检查对应端口号的机械臂是否接通电源，并检查总线舵机数据线是否松动或脱落。通常哪个舵机灯不亮，就需要优先检查它前面的连接线。
  </details>

  <details className="content-details">
    <summary>校准时出现 Magnitude exceeds 2047</summary>

<CodeBlock language="text">
{`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`}
</CodeBlock>

    先对机械臂重新断电和上电，再次尝试校准。如果校准过程中 MAX 角度达到上万，也可以使用同样方法；如果仍然无效，则需要对相应舵机重新进行中位校准和 ID 写入。
  </details>

  <details className="content-details">
    <summary>评估阶段提示 eval 文件夹已存在</summary>

<CodeBlock language="text">
{`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`}
</CodeBlock>

    请先删除 `eval_` 开头的文件夹，然后再次运行评估程序。
  </details>

  <details className="content-details">
    <summary>评估阶段提示 mean is infinity</summary>

<CodeBlock language="text">
{`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`}
</CodeBlock>

    请确认 `--robot.cameras` 参数中的 `front`、`side` 等关键词与采集数据集时完全一致。
  </details>

  <details className="content-details">
    <summary>维修或更换零件后需要重新校准吗？</summary>

    如果维修或更换过机械臂零件，请完全删除 `~/.cache/huggingface/lerobot/calibration/robots` 或 `~/.cache/huggingface/lerobot/calibration/teleoperators` 下的文件，并重新校准机械臂。否则可能沿用旧校准数据导致报错或运动异常。
  </details>

  <details className="content-details">
    <summary>训练时间大概多久？</summary>

    在 3060 8 GB 笔记本上训练 ACT 的 50 组数据大约需要 6 小时；在 4090 或 A100 上训练 50 组数据大约需要 2～3 小时。实际耗时会受到 batch size、显卡性能、数据集大小和视频读取速度影响。
  </details>

  <details className="content-details">
    <summary>数据采集时有哪些稳定性要求？</summary>

    数据采集过程中要保持摄像头位置、角度和环境光线稳定，并减少摄像头画面中的不稳定背景和行人。部署环境变化过大时，机械臂可能无法正常抓取。
  </details>

  <details className="content-details">
    <summary>采集命令可以中途暂停吗？</summary>

    不建议中途手动暂停。`num_episodes` 要确保采集数据足够，因为数据采集结束后才会计算均值和方差，这些统计量是后续训练所必需的。
  </details>

  <details className="content-details">
    <summary>程序无法读取 USB 摄像头图像怎么办？</summary>

    请确认 USB 摄像头没有接在 USB Hub 上。建议将 USB 摄像头直接接入设备，并优先使用 USB 3.0 接口，以确保图像传输速率稳定。
  </details>

  <details className="content-details">
    <summary>如何重新校准机械臂？</summary>

    如果需要重新校准机械臂，有两种方案。

    **方案 1：删除本地校准文件后重新校准**

    请完全删除 `~/.cache/huggingface/lerobot/calibration/robots` 或 `~/.cache/huggingface/lerobot/calibration/teleoperators` 下的文件，然后重新校准机械臂。否则可能会沿用旧校准数据，导致报错或运动异常。校准信息会存储在该目录下的 json 文件中。

    **方案 2：在校准命令中选择重新校准**

    直接在终端输入校准机械臂的命令。如果机械臂曾经被校准过，终端会出现是否重新校准的提示：

<CodeBlock language="text">
{`Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:`}
</CodeBlock>

    输入 `c` 并按下 **Enter** 会重新校准；直接按下 **Enter** 会沿用之前的校准数据。
  </details>

  <details className="content-details">
    <summary>舵机 ID 错误、识别不到舵机或需要中位校准怎么办？</summary>

    如果出现舵机 ID 错误、识别不到舵机、需要验证舵机是否正常，或需要将当前位置设为中位值 **2048**，可以使用 Seeed Studio SoARM 系列快捷校准工具。该工具支持 Windows、Ubuntu 和 macOS。

    <div className="hero-actions">
      <a href="/cn/lerobot_steering_gear_debugging_tool">▶ 打开舵机调试工具使用教程</a>
    </div>
  </details>

  <details className="content-details">
    <summary>Orbbec 相机提示 No Orbbec camera found</summary>

<CodeBlock language="text">
{`No Orbbec camera found for 'XXXX'`}
</CodeBlock>

    通常说明配置中的序列号与当前在线设备不一致。请先运行：

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

    确认实际 `serial` 后，再更新命令中的 `serial_number_or_name`。
  </details>

  <details className="content-details">
    <summary>Orbbec 相机等待帧超时怎么办？</summary>

<CodeBlock language="text">
{`TimeoutError: Timed out waiting for frame from <lerobot.cameras.orbbec.camera_orbbec.OrbbecDepthCamera object at ...>`}
</CodeBlock>

    如果已经增大 USBFS 缓存后仍然超时，可以先重新插拔 Orbbec 相机，再重新运行相机检测或遥操作命令。
  </details>

  <details className="content-details">
    <summary>macOS 使用 RealSense 时提示 failed to set power state</summary>

<CodeBlock language="text">
{`Error finding RealSense cameras: failed to set power state`}
</CodeBlock>

    可以尝试使用 `sudo` 权限运行相同命令。需要注意的是，在 macOS 中使用 Intel RealSense 摄像头并不稳定，建议优先在 Linux 环境中调试。
  </details>

  <details className="content-details">
    <summary>数据采集时方向键或 ESC 没有反应怎么办？</summary>

    如果键盘按下后没有反应，可能需要降低 `pynput` 版本，例如安装 1.6.8：

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

    如果在 Linux 记录过程中右箭头、左箭头或 ESC 仍然无响应，请确认 `$DISPLAY` 环境变量已设置，并参考 [pynput 限制说明](https://pynput.readthedocs.io/en/latest/limitations.html)。
  </details>

  <details className="content-details">
    <summary>训练时报 TypeError: stack(): argument 'tensors' 怎么办？</summary>

<CodeBlock language="text">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

    可以尝试安装指定版本的 `datasets`：

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>
  </details>

  :::tip
  如果仍遇到无法解决的软件或环境依赖问题，可以在 [LeRobot 平台](https://github.com/huggingface/lerobot) 或 [LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU) 反馈。
  :::
</section>

## 参考文档

<section id="references" className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考文档</h2>
    <p>查看官方文档、开源项目和相关算法资料。</p>
  </div>

  <div className="path-grid">
    <a className="path-card" href="https://wiki.seeedstudio.com/cn/lerobot_so100m_new/" target="_blank" rel="noopener noreferrer"><strong>English Document</strong><span>Seeed Studio Wiki documentation.</span></a>
    <a className="path-card" href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer"><strong>SO-ARM10x</strong><span>TheRobotStudio open-source robotic arm project.</span></a>
    <a className="path-card" href="https://github.com/huggingface/lerobot/tree/main" target="_blank" rel="noopener noreferrer"><strong>LeRobot</strong><span>Hugging Face robotics models, datasets, and tools.</span></a>
    <a className="path-card" href="https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot" target="_blank" rel="noopener noreferrer"><strong>Jetson Containers</strong><span>Jetson container resources for LeRobot.</span></a>
    <a className="path-card" href="https://www.jetson-ai-lab.com/lerobot.html" target="_blank" rel="noopener noreferrer"><strong>Jetson AI Lab</strong><span>Jetson AI Lab LeRobot resources.</span></a>
    <a className="path-card" href="https://diffusion-policy.cs.columbia.edu/" target="_blank" rel="noopener noreferrer"><strong>Diffusion Policy</strong><span>Reference for diffusion policy methods.</span></a>
    <a className="path-card" href="https://tonyzhaozh.github.io/aloha/" target="_blank" rel="noopener noreferrer"><strong>ACT / ALOHA</strong><span>Reference for ACT and ALOHA robotic learning.</span></a>
    <a className="path-card" href="https://www.nicklashansen.com/td-mpc/" target="_blank" rel="noopener noreferrer"><strong>TDMPC</strong><span>Reference for TD-MPC methods.</span></a>
    <a className="path-card" href="https://sjlee.cc/vq-bet/" target="_blank" rel="noopener noreferrer"><strong>VQ-BeT</strong><span>Reference for VQ-BeT.</span></a>
  </div>
</section>

## 技术支持与产品讨论

<section id="support" className="section-card">
  <div className="section-title">
    <span>Support</span>
    <h2>技术支持与产品讨论</h2>
    <p>通过论坛、邮件、Discord 和 GitHub Discussions 获取帮助。</p>
  </div>

感谢您选择我们的产品！我们在此为您提供多种支持，以确保您的产品体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="path-grid">
  <a className="path-card" href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer">
    <strong>Forum</strong>
    <span>Ask questions and discuss Seeed products with the community.</span>
  </a>
  <a className="path-card" href="https://www.seeedstudio.com/contacts" target="_blank" rel="noopener noreferrer">
    <strong>Email Support</strong>
    <span>Contact Seeed Studio for product and service support.</span>
  </a>
  <a className="path-card" href="https://discord.gg/eWkprNDMU7" target="_blank" rel="noopener noreferrer">
    <strong>Discord</strong>
    <span>Join the Seeed Studio Discord community.</span>
  </a>
  <a className="path-card" href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" target="_blank" rel="noopener noreferrer">
    <strong>GitHub Discussions</strong>
    <span>Discuss Wiki documents and technical topics on GitHub.</span>
  </a>
</div>
</section>

</div>