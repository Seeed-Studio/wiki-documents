---
description: 本教程介绍如何基于 reBot Arm B601-RS、RGB-D 深度相机、YOLO / OBB 与可选 GraspNet 抓取管线，搭建完整的桌面级视觉夹取 Demo。
title: reBot Arm B601-RS 视觉夹取 Demo
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
keywords:
  - reBot Arm
  - B601-RS
  - 抓取
  - RGB-D
  - YOLO
  - GraspNet
  - 手眼标定
  - 机器人
slug: /rebot_arm_b601_rs_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip:
    - zh-CN
createdAt: '2026-06-15'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_grasping_demo/
---

# reBot Arm B601-RS 视觉夹取 Demo

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>用 RGB-D 视觉、YOLO 和 B601-RS 构建桌面级自主夹取系统</h2>
      <p>
        本教程将一个完整的视觉夹取流程拆解为更安全的学习顺序：先准备硬件和环境，
        再验证 RGB-D 相机、完成手眼标定、运行 YOLO / OBB 或 GraspNet 感知管线，
        最后再让真实机械臂执行抓取动作。
      </p>
      <div className="hero-actions">
        <a href="#quick-path">查看流程</a>
        <a href="#run">运行 Demo</a>
        <a href="#config">配置参数</a>
      </div>
    </div>
    <div className="hero-card">
      <strong>推荐硬件组合</strong>
      <span>reBot Arm B601-RS</span>
      <span>Orbbec Gemini 2 或 RealSense D435i / D405</span>
      <span>Ubuntu 22.04+ · Python 3.10 · PCAN-USB / SocketCAN</span>
    </div>
  </section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间
      <strong> 1 米范围内 </strong>
      的贵重物品、易碎物品、工具、线缆和其他无关物体。
      调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行手眼标定、MotorBridge、IK 控制、轨迹控制、视觉抓取、GraspNet、ROS2 action 或 MoveIt 真实执行前，请确保机械臂已经固定牢靠。</li>
      <li>如果出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="visual grasping navigation">
  <a href="#quick-path">Workflow</a>
  <a href="#hardware">硬件</a>
  <a href="#install">安装</a>
  <a href="#camera-sdk">相机 SDK</a>
  <a href="#graspnet">GraspNet</a>
  <a href="#run">运行调试</a>
  <a href="#config">配置</a>
  <a href="#faq">FAQ</a>
</nav>

<div className="image-frame hero-media">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS 视觉夹取 Demo" />
</div>

<p align="center">
  <strong>深度感知 · 目标检测 · 手眼标定 · 自主抓取 · 全开源</strong>
</p>

<div className="video-placeholder">视频待补充：B601-RS 视觉夹取演示</div>

<section id="quick-path" className="section-card step-section">
  <div className="section-title">
    <span>Start Here</span>
    <h2>推荐安全工作流</h2>
    <p>
      视觉夹取涉及感知、标定、坐标变换、IK 和真实机械臂执行。建议按照下面顺序推进，
      先做感知和 dry-run，再允许机械臂真实运动。
    </p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="/cn/rebot_b601_rs_getting_started/">
      <span className="step-mini">Step 0</span>
      <strong>先完成 B601-RS 快速入门</strong>
      <p>确认 48V 电源、PCAN-USB / SocketCAN、零点、MotorBridge 和基础运动测试均正常。</p>
      <em>必须先完成</em>
    </a>
    <a className="step-card" href="#hardware">
      <span className="step-mini">Step 1</span>
      <strong>准备机械臂和 RGB-D 相机</strong>
      <p>确认机械臂版本、CAN 速率、相机型号、USB 权限和工作空间安全状态。</p>
      <em>Hardware</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Step 2</span>
      <strong>安装项目环境</strong>
      <p>创建 conda 环境，安装机械臂 SDK、相机 SDK、YOLO，以及可选的 GraspNet 依赖。</p>
      <em>Environment</em>
    </a>
    <a className="step-card" href="#run">
      <span className="step-mini">Step 3</span>
      <strong>完成 Eye-in-Hand 手眼标定</strong>
      <p>采集 ArUco 位姿样本，求解相机坐标系到机械臂末端 / 基坐标系的变换关系。</p>
      <em>Calibration</em>
    </a>
    <a className="step-card" href="#run">
      <span className="step-mini">Step 4</span>
      <strong>先验证感知结果</strong>
      <p>运行 OBB 或 GraspNet 相机 Demo，不连接机械臂，检查目标框、深度和抓取姿态。</p>
      <em>Perception</em>
    </a>
    <a className="step-card" href="#run">
      <span className="step-mini">Step 5</span>
      <strong>先 dry-run，再执行真实抓取</strong>
      <p>用 dry-run 检查目标位姿、IK 可达性、预抓取点和碰撞风险，通过后再使能机械臂。</p>
      <em>Execution</em>
    </a>
  </div>

  <div className="callout warning">
    <strong>调试原则：</strong>如果手眼标定、相机深度、IK 可达性或抓取姿态仍不稳定，请不要直接运行真实机械臂抓取。先在 dry-run 和感知-only 模式下定位问题。
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>这个视觉夹取 Demo 包含什么</h2>
    <p>
      该项目围绕 B601-RS、RGB-D 相机和 reBotArm_control_py 控制库构建，
      通过 YOLO / OBB 或 GraspNet 估计抓取位姿，并通过手眼标定把相机坐标系下的目标转换到机械臂基坐标系。
    </p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>RGB-D 深度感知</b><span>支持 Orbbec Gemini 2、RealSense D435i / D405 等 RGB-D 相机，用于获取彩色图、深度图和点云信息。</span></div>
    <div className="module-summary-card"><b>YOLO / OBB 抓取管线</b><span>使用 YOLO 进行目标检测和实例分割，再通过最小外接矩形短轴估计夹爪朝向。</span></div>
    <div className="module-summary-card"><b>GraspNet 6D 抓取</b><span>可选接入 GraspNet，生成更丰富的 6D 抓取候选，适合复杂形状物体。</span></div>
    <div className="module-summary-card"><b>真实机械臂执行</b><span>通过 reBotArm_control_py 完成 IK、轨迹控制、预抓取、下降、闭合夹爪、提升和返回预备位。</span></div>
  </div>

  <div className="feature-grid">
    <div><strong>手眼标定</strong><span>使用 Eye-in-Hand 方式采集 ArUco 样本，求解相机到末端的变换矩阵。</span></div>
    <div><strong>抓取前检查</strong><span>通过 dry-run 验证相机检测、目标位姿、IK 可达性和路径安全。</span></div>
    <div><strong>可配置管线</strong><span>通过 <code>{`config/default.yaml`}</code> 配置相机、检测阈值、深度分位数、预抓取偏移和夹爪参数。</span></div>
    <div><strong>开源可扩展</strong><span>可以替换检测模型、相机驱动、抓取策略或下游机械臂执行逻辑。</span></div>
  </div>
</section>

<section id="hardware" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>确认硬件配置</h2>
      <p>在安装软件前，先确认机械臂版本、RGB-D 相机、电源和 CAN 通信接口。</p>
    </div>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>机械臂</b><span>reBot Arm B601-RS</span></div>
    <div className="spec-card"><b>深度相机</b><span>Orbbec Gemini 2 或 Intel RealSense D435i / D405</span></div>
    <div className="spec-card"><b>通信接口</b><span>PCAN-USB / SocketCAN，CAN bitrate 1 Mbps</span></div>
    <div className="spec-card"><b>主机环境</b><span>Ubuntu 22.04+，Python 3.10，x86_64</span></div>
    <div className="spec-card"><b>电源</b><span>B601-RS 使用 48V DC 电源</span></div>
    <div className="spec-card"><b>推荐流程</b><span>先完成快速入门，再运行视觉夹取 Demo</span></div>
  </div>

  <div className="command-grid">
    <div className="command-card">
      <h3>设置深度相机 USB 权限</h3>
      <pre><code>{`sudo chmod a+rw /dev/bus/usb/*/*`}</code></pre>
    </div>
    <div className="command-card">
      <h3>启动 B601-RS CAN 接口</h3>
      <pre><code>{`sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
    </div>
  </div>

  <div className="callout danger">
    <strong>B601-RS 电源提醒：</strong>B601-RS 使用 48V DC 电源。运行任何标定或抓取脚本前，请确认电源、PCAN-USB / SocketCAN 接口和 SDK 配置均匹配 RS 版本。
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>安装视觉夹取环境</h2>
      <p>创建项目环境，安装 reBotArm_control_py、相机 SDK、YOLO 依赖和可选 GraspNet 依赖。</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card"><span className="step-mini">2.1</span><strong>克隆项目仓库</strong><p>优先使用 Seeed-Projects 官方仓库作为视觉夹取工作区。</p></div>
    <div className="step-card"><span className="step-mini">2.2</span><strong>创建 conda 环境</strong><p>根据 environment.yml 创建 rebotarm 环境并激活。</p></div>
    <div className="step-card"><span className="step-mini">2.3</span><strong>安装机械臂控制库</strong><p>将 reBotArm_control_py 安装到当前环境中，供抓取脚本调用。</p></div>
    <div className="step-card"><span className="step-mini">2.4</span><strong>确认 RS 配置</strong><p>确认 SDK 的 hardware_yaml 指向 rebotarm_rs.yaml。</p></div>
  </div>

  <details className="content-details" open>
    <summary>2.1 克隆视觉夹取仓库</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>2.2 创建并激活 conda 环境</summary>
    <pre><code>{`conda env create -f environment.yml
conda activate rebotarm`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>2.3 安装机械臂控制库</summary>
    <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..`}</code></pre>

    <p>如果 <code>{`pip install -e .`}</code> 报 <code>{`Multiple top-level packages discovered in a flat-layout`}</code>，请在 <code>{`reBotArm_control_py/pyproject.toml`}</code> 中加入：</p>
    <pre><code>{`[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>2.4 确认 B601-RS 硬件配置</summary>
    <p>请确认 <code>{`sdk/reBotArm_control_py/config/rebotarm.yaml`}</code> 中使用 RS 硬件配置：</p>
    <pre><code>{`hardware_yaml: rebotarm_rs.yaml`}</code></pre>
  </details>
</section>

<section id="camera-sdk" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>安装并验证深度相机 SDK</h2>
      <p>在手眼标定前，请先确认 RGB-D 相机可以稳定输出彩色图和深度图。</p>
    </div>
  </div>

  <details open className="content-details">
    <summary>Orbbec Gemini 2</summary>
    <p>Orbbec Gemini 2 依赖 <code>{`pyorbbecsdk`}</code>。优先推荐直接安装预编译 Python 包：</p>
    <pre><code>{`pip install pyorbbecsdk2`}</code></pre>

    <p>也可以从源码安装：</p>
    <pre><code>{`sudo apt-get install -y cmake build-essential libusb-1.0-0-dev
cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .`}</code></pre>

    <p>中国大陆用户也可以使用：</p>
    <pre><code>{`git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git`}</code></pre>

    <p>首次使用建议安装 udev 规则：</p>
    <pre><code>{`sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Intel RealSense D435i / D405</summary>
    <pre><code>{`pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"`}</code></pre>
    <p>如果需要完整 RealSense 工具链或 udev 规则，请参考 Intel RealSense SDK 官方文档安装 <code>{`librealsense2`}</code>。</p>
  </details>
</section>

<section id="graspnet" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Optional</span>
    <div>
      <h2>配置 GraspNet 抓取管线</h2>
      <p>如果只想先跑通 YOLO + OBB 抓取流程，可以跳过本节。需要复杂 6D 抓取候选时再配置 GraspNet。</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>确认 CUDA 编译环境</summary>
    <pre><code>{`nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"`}</code></pre>
    <p>如果没有 <code>{`nvcc`}</code>，或版本与 <code>{`torch.version.cuda`}</code> 不一致，请安装与当前 PyTorch CUDA 版本匹配的 CUDA 编译器。例如 PyTorch 显示 <code>{`13.0`}</code> 时：</p>
    <pre><code>{`conda install -c nvidia cuda-nvcc=13.0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>编译 GraspNet 本地算子</summary>
    <pre><code>{`cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline
pip install open3d tensorboard Pillow tqdm

export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>配置预训练模型</summary>
    <p>下载 GraspNet 官方预训练权重 <code>{`checkpoint-rs.tar`}</code>，放到：</p>
    <pre><code>{`sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar`}</code></pre>
    <p>然后确认 <code>{`config/default.yaml`}</code>：</p>
    <pre><code>{`graspnet:
  checkpoint: "checkpoint-rs.tar"`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Project Layout</span>
    <h2>目录结构</h2>
    <p>项目将配置、标定、驱动、抓取脚本和外部 SDK 分开放置，便于后续扩展。</p>
  </div>

  <pre><code>{`rebot_grasp/
├── config/
│   ├── default.yaml
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz
│           └── hand_eye.npz
├── drivers/
│   ├── camera/
│   └── robot/
├── calibration/
│   ├── aruco_pose.py
│   └── hand_eye.py
├── utils/
├── scripts/
│   ├── main.py
│   ├── set.py
│   ├── ordinary_grasp_pipeline.py
│   ├── graspnet_camera_demo.py
│   ├── grasp.py
│   └── collect_handeye_eih.py
├── sdk/
└── environment.yml`}</code></pre>
</section>

<section id="run" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行真实抓取前必须先 dry-run</strong>
      <p>请先验证相机检测、手眼标定、目标位姿和 IK 可达性，再允许机械臂真实运动。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>运行与调试</h2>
      <p>先完成手眼标定，再运行 perception-only 和 dry-run，最后执行真实抓取。</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card"><span className="step-mini">4.1</span><strong>确认 SDK 配置</strong><p>确保 rebotarm.yaml 指向 rebotarm_rs.yaml。</p></div>
    <div className="step-card"><span className="step-mini">4.2</span><strong>采集手眼标定样本</strong><p>自动或手动采集 ArUco 位姿样本，至少 5 个，建议 15 个以上。</p></div>
    <div className="step-card"><span className="step-mini">4.3</span><strong>运行主抓取程序 dry-run</strong><p>检查目标点、预抓取点、IK 和路径风险。</p></div>
    <div className="step-card"><span className="step-mini">4.4</span><strong>运行 perception-only Demo</strong><p>不连接机械臂，只验证 OBB 或 GraspNet 感知结果。</p></div>
    <div className="step-card"><span className="step-mini">4.5</span><strong>执行真实抓取</strong><p>只在 dry-run 和感知结果均稳定后运行。</p></div>
  </div>

  <details className="content-details" open>
    <summary>4.1 确认机械臂版本与 SDK 配置</summary>
    <pre><code>{`# B601-RS
hardware_yaml: rebotarm_rs.yaml`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.2 手眼标定</summary>
    <pre><code>{`python scripts/collect_handeye_eih.py`}</code></pre>
    <p>自动模式下，机械臂会遍历预设位姿，检测到 ArUco 稳定后自动采样。至少需要 5 个样本，建议采集 15 个以上样本。</p>
    <p>如需手动移动机械臂采集：</p>
    <pre><code>{`python scripts/collect_handeye_eih.py --manual`}</code></pre>
    <div className="callout warning">
      <strong>精度补偿：</strong>如果抓取精度不满足要求，可在 <code>{`config/default.yaml`}</code> 的 <code>{`calibration.hand_eye_compensation_m`}</code> 中微调 X、Y、Z 平移补偿。
    </div>
  </details>

  <details className="content-details" open>
    <summary>4.3 主抓取程序：scripts/main.py</summary>
    <p>完整流程包括相机初始化、机械臂使能、YOLO 检测、OBB 抓取估计、手眼变换、预抓取、下降、闭合夹爪、提升和回到预备位。</p>
    <pre><code>{`python scripts/main.py

# 调试时建议先运行：
python scripts/main.py --dry-run`}</code></pre>
  </details>

  <details className="content-details">
    <summary>4.4 抓取与放置程序：scripts/set.py</summary>
    <p>该脚本演示将香蕉抓取并放置到盒子中的完整流程。</p>
    <pre><code>{`python scripts/set.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>4.5 简化 OBB 抓取测试：scripts/ordinary_grasp_pipeline.py</summary>
    <p>不连接机械臂，仅验证 OBB 抓取姿态估计和可视化结果。</p>
    <pre><code>{`python scripts/ordinary_grasp_pipeline.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>4.6 GraspNet 相机估计：scripts/graspnet_camera_demo.py</summary>
    <p>不连接机械臂，仅使用 RGB-D 相机运行 GraspNet 6D 抓取姿态估计。</p>
    <pre><code>{`python scripts/graspnet_camera_demo.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>4.7 GraspNet 机械臂抓取：scripts/grasp.py</summary>
    <pre><code>{`python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"`}</code></pre>
  </details>
</section>

<section id="config" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Config</span>
    <div>
      <h2><code>{`default.yaml`}</code> 参数说明</h2>
      <p>运行 Demo 前，请检查相机、标定、检测、抓取、机器人和夹爪参数。</p>
    </div>
  </div>

  <details open className="content-details">
    <summary>相机与标定配置</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>参数项</th><th>类型 / 可选值</th><th>含义</th></tr></thead>
        <tbody>
          <tr><td><code>{`camera.type`}</code></td><td><code>{`realsense_d435i`}</code> / <code>{`realsense_d405`}</code> / <code>{`orbbec_gemini2`}</code></td><td>当前连接的相机类型。</td></tr>
          <tr><td><code>{`camera.serial`}</code></td><td><code>{`string`}</code> / <code>{`null`}</code></td><td>设备序列号；为 <code>{`null`}</code> 时使用第一台可用设备。</td></tr>
          <tr><td><code>{`calibration.aruco.marker_length_m`}</code></td><td><code>{`float`}</code></td><td>ArUco 标定码边长，单位为米。</td></tr>
          <tr><td><code>{`calibration.hand_eye_compensation_m`}</code></td><td><code>{`array`}</code></td><td>机械臂基坐标系下的 XYZ 平移补偿，单位为米。</td></tr>
        </tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>检测与抓取管线配置</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>参数项</th><th>类型</th><th>含义</th></tr></thead>
        <tbody>
          <tr><td><code>{`detection.conf_threshold`}</code></td><td><code>{`float`}</code></td><td>YOLO 检测置信度阈值。</td></tr>
          <tr><td><code>{`detection.iou_threshold`}</code></td><td><code>{`float`}</code></td><td>YOLO NMS IoU 阈值。</td></tr>
          <tr><td><code>{`grasp_pipeline.infer_every_live`}</code></td><td><code>{`int`}</code></td><td>实时预览时每 N 帧运行一次检测。</td></tr>
          <tr><td><code>{`grasp_pipeline.grasp.depth_quantile`}</code></td><td><code>{`float`}</code></td><td>OBB 抓取管线使用的深度分位数。</td></tr>
          <tr><td><code>{`grasp_pipeline.grasp.pregrasp_offset_m`}</code></td><td><code>{`float`}</code></td><td>预抓取位相对于最终抓取位的后退距离。</td></tr>
          <tr><td><code>{`grasp_pipeline.grasp.insertion_depth_m`}</code></td><td><code>{`float`}</code></td><td>GraspNet 执行抓取时的额外插入深度。</td></tr>
          <tr><td><code>{`grasp_pipeline.grasp.min_base_z_m`}</code></td><td><code>{`float`}</code></td><td>机械臂基坐标系下最低抓取高度限制。</td></tr>
        </tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>机器人与夹爪配置</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>参数项</th><th>类型 / 可选值</th><th>含义</th></tr></thead>
        <tbody>
          <tr><td><code>{`robot.repo_root`}</code></td><td><code>{`string`}</code> / <code>{`null`}</code></td><td><code>{`reBotArm_control_py`}</code> 仓库路径。为 <code>{`null`}</code> 时使用 <code>{`sdk/reBotArm_control_py`}</code>。</td></tr>
          <tr><td><code>{`robot.ready_pose`}</code></td><td><code>{`array`}</code></td><td>启动后和抓取完成后返回的预备位。</td></tr>
          <tr><td><code>{`robot.gripper.dm`}</code> / <code>{`robot.gripper.rs`}</code></td><td><code>{`object`}</code></td><td>DM / RS 夹爪硬件参数，系统会按 SDK 配置自动选择。</td></tr>
        </tbody>
      </table>
    </div>
    <p><code>{`angle_open`}</code>、<code>{`close_torque`}</code> 和 <code>{`default_force`}</code> 需要填写正数；<code>{`counterclockwise`}</code> 用于指定闭合方向；<code>{`tau_max`}</code> 为力矩上限。</p>
  </details>

  <details className="content-details">
    <summary>YOLO 模型选择</summary>
    <p>YOLO 模型会从 <code>{`rebot_grasp/models/`}</code> 目录加载；如果模型文件不存在，Ultralytics 通常会尝试自动下载。</p>
    <div className="table-wrap">
      <table>
        <thead><tr><th>模型</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td><code>{`yoloe-26l-seg.pt`}</code></td><td>开放词汇 + 分割，当前默认。</td></tr>
          <tr><td><code>{`yoloe-26s-seg.pt`}</code></td><td>更轻量，速度更快。</td></tr>
          <tr><td><code>{`yolov8n-seg.pt`}</code></td><td>封闭类别分割，小模型。</td></tr>
          <tr><td><code>{`yolov8s-seg.pt`}</code></td><td>封闭类别分割，精度更高。</td></tr>
        </tbody>
      </table>
    </div>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">FAQ</span>
    <div>
      <h2>常见问题</h2>
      <p>安装、标定、检测、GraspNet 编译和真实抓取过程中常见问题可以从这里排查。</p>
    </div>
  </div>

  <div className="faq-grid">
    <details className="content-details" open>
      <summary>1. <code>{`ModuleNotFoundError: No module named 'motorbridge'`}</code></summary>
      <p>确认已经激活项目环境，并重新同步环境与安装机械臂 SDK：</p>
      <pre><code>{`conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2. 按 <code>{`G`}</code> 后不执行抓取</summary>
      <p>常见原因包括：<code>{`hand_eye.npz`}</code> 不存在、手眼标定模式不是 <code>{`eye_in_hand`}</code>、当前目标位姿 IK 不可达。建议先使用 dry-run 模式验证：</p>
      <pre><code>{`python scripts/main.py --dry-run`}</code></pre>
    </details>

    <details className="content-details">
      <summary>3. 抓取点深度不稳定</summary>
      <p>优先检查 <code>{`grasp_pipeline.grasp.depth_quantile`}</code>、相机安装高度、目标反光情况以及工作区深度质量。</p>
    </details>

    <details className="content-details">
      <summary>4. GraspNet 报 <code>{`pointnet2_utils`}</code> 无法导入</summary>
      <p>通常是 <code>{`pointnet2`}</code> / <code>{`knn`}</code> 本地 CUDA 扩展没有在当前 conda 环境中正确编译安装。请重新编译：</p>
      <pre><code>{`conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation`}</code></pre>
    </details>

    <details className="content-details">
      <summary>5. GraspNet 推理报 <code>{`RuntimeError: CPU not supported`}</code></summary>
      <p><code>{`pointnet2`}</code> 采样算子只支持 CUDA tensor。请确认 CUDA 可用，并重新编译本地扩展：</p>
      <pre><code>{`python -c "import torch; print(torch.cuda.is_available())"`}</code></pre>
    </details>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>References</span>
    <h2>参考资料</h2>
  </div>
  <div className="reference-grid">
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://github.com/Seeed-Projects/reBot-DevArm">reBot-DevArm</a>
    <a href="https://github.com/orbbec/OrbbecSDK_v2">Orbbec SDK v2</a>
    <a href="https://github.com/orbbec/pyorbbecsdk">pyorbbecsdk</a>
    <a href="https://github.com/realsenseai/librealsense">RealSense SDK</a>
    <a href="https://github.com/graspnet/graspnet-baseline">graspnet/graspnet-baseline</a>
    <a href="https://github.com/ultralytics/ultralytics">Ultralytics YOLO</a>
  </div>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>课程导链</span>
    <h2>reBot B601-RS 系列课程跳转</h2>
    <p>建议按照 Robotics Page 的学习顺序阅读：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。也可以通过下面的卡片直接跳转到任意课程。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、供电检查、PCAN-USB / SocketCAN 配置、校准和第一次运动测试。</span></span>
      <span className="course-tag">Start</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成主从遥操作、相机接入、数据集采集和模仿学习任务准备。</span></span>
      <span className="course-tag">Data</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解模型、关节、坐标系、FK / IK、轨迹和重力补偿。</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item active" href="/cn/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、手眼标定、YOLO / GraspNet 和真实抓取执行。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 集成</strong><span>接入 ROS2、RViz、MoveIt 2、规划和高层机器人工作流。</span></span>
      <span className="course-tag">Integration</span>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1rem; align-items: start; margin-bottom: 1.1rem; }
.step-pill, .step-mini { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-pill { padding: 0.5rem 0.8rem; white-space: nowrap; }
.step-title-row h2 { margin: 0 0 0.35rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-card-grid, .module-summary-grid, .spec-grid, .command-grid, .feature-grid, .reference-grid, .faq-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; }
.step-card-grid.small { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.step-card, .module-summary-card, .spec-card, .command-card, .content-details, .reference-grid a, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05); }
.step-card { transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.step-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.step-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.96), rgba(240,253,250,0.82)); }
.step-card .step-mini { width: fit-content; min-width: 2.1rem; height: 2.1rem; padding: 0 0.65rem; margin-bottom: 0.3rem; font-size: 0.86rem; }
.step-card strong, .module-summary-card b, .spec-card b, .feature-grid strong, .command-card h3 { color: var(--rb-text); margin: 0; }
.step-card p, .module-summary-card span, .spec-card span, .feature-grid span, .content-details p { color: var(--rb-muted); line-height: 1.65; margin: 0; }
.step-card em { display: inline-flex; width: fit-content; margin-top: 0.65rem; padding: 0.32rem 0.65rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 850; font-size: 0.78rem; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.table-wrap, .content-table { overflow-x: auto; }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.image-frame img { width: 100%; border-radius: 14px; display: block; }
.hero-media { max-width: 960px; margin-left: auto; margin-right: auto; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); color: var(--rb-muted); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.36); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.38); background: #fef2f2; color: #7f1d1d; }
.video-placeholder { display: flex; align-items: center; justify-content: center; min-height: 132px; margin: 1rem 0; padding: 1.1rem; border-radius: 16px; border: 1px dashed rgba(37,99,235,0.35); background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 850; text-align: center; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .command-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .feature-grid div, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .step-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(127,29,29,0.26); color: #fecaca; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .step-title-row { grid-template-columns: 1fr; } }
`}</style>
