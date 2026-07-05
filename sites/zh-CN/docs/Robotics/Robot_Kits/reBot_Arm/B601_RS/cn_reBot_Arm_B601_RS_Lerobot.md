---
description: 本 Wiki 提供 reBot Arm B601-RS 在 LeRobot 框架内完成环境配置、CAN 通信、校准、遥操作、相机接入、数据采集、训练与评估的完整流程。
title: reBot Arm B601-RS 入门 LeRobot
keywords:
  - Lerobot
  - Huggingface
  - 机械臂
  - rebot arm
  - 机器人
slug: /rebot_arm_b601_rs_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: ZhuYaoohui
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_lerobot/
---

# reBot Arm B601-RS 入门 LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div className="hero-copy">
      <span className="eyebrow">reBot Arm × LeRobot</span>
      <h2>从遥操作开始，完成数据采集、训练与真实机械臂部署</h2>
      <p>本教程面向已经完成 reBot Arm B601-RS 快速开始和基础检查的用户，带你在 LeRobot 框架中完成环境安装、PCAN-USB / SocketCAN 通信、机械臂校准、遥操作、相机接入、数据集制作、训练、评估和进阶部署。</p>
      <div className="hero-actions">
        <a href="#quick-path">查看学习路线</a>
        <a href="#install-lerobot">开始安装 LeRobot</a>
        <a href="#record-dataset">直接进入数据采集</a>
        <a href="#course-path">课程导链</a>
      </div>
    </div>
    <div className="hero-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
      <span>SocketCAN · Teleoperation · Dataset · Training</span>
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
      <li>运行校准、遥操作、IK 控制、轨迹控制、重力补偿、MoveIt、LeRobot 数据采集或视觉抓取 Demo 前，请确保机械臂已固定牢靠。</li>
      <li>请保持至少 <strong>1 米安全距离</strong>，并确保周围人员了解机械臂可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN / PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="reBot LeRobot quick navigation">
    <a href="#quick-path">学习路线</a>
    <a href="#install-lerobot">安装环境</a>
    <a href="#calibration">校准</a>
    <a href="#teleoperation">遥操作</a>
    <a href="#camera">相机</a>
    <a href="#record-dataset">数据采集</a>
    <a href="#training">训练评估</a>
    <a href="#advanced">进阶部署</a>
    <a href="#faq">FAQ</a>
    <a href="#course-path">课程导链</a>
  </nav>

  <section id="quick-path" className="section-card">
    <div className="section-title">
      <span>Start Here</span>
      <h2>推荐学习路线</h2>
      <p>如果你第一次使用 LeRobot，建议严格按照下面的路线完成。整个流程应先验证通信与遥操作，再接入相机和采集数据，最后再进入训练、评估和部署。</p>
    </div>

    <div className="path-grid">
      <a className="path-card" href="#install-lerobot"><b>1. 安装 LeRobot</b><small>准备 conda 环境、安装 Seeed 验证版本的 LeRobot 和 reBot 插件。</small></a>
      <a className="path-card" href="#calibration"><b>2. 校准机械臂</b><small>分别校准 follower 臂和 reBot 102 leader，确保主从臂位姿一致。</small></a>
      <a className="path-card" href="#teleoperation"><b>3. 遥操作测试</b><small>先不接相机，确认 leader 控制 follower 的运动链路正常。</small></a>
      <a className="path-card" href="#camera"><b>4. 接入相机</b><small>根据设备选择 OpenCV、RealSense 或 Orbbec，并检查画面和帧率。</small></a>
      <a className="path-card" href="#record-dataset"><b>5. 采集数据集</b><small>录制本地数据集或上传到 Hugging Face Hub。</small></a>
      <a className="path-card" href="#training"><b>6. 训练与评估</b><small>从 ACT 开始，再尝试 SmolVLA、Pi0、Pi0.5 或 GR00T。</small></a>
    </div>

    <div className="notice-grid">
      <div className="notice-card">
        <strong>推荐先使用稳定仓库</strong>
        <span>本文默认使用 Seeed-Projects/lerobot，这是经过 reBot 适配验证的版本。官方 LeRobot 主仓实时更新，可能会出现参数、数据格式或依赖变化。</span>
      </div>
      <div className="notice-card warning">
        <strong>安全提醒</strong>
        <span>遥操作过程中如果主从臂电源脱落、信号线脱落或电源接触不良，请先停止程序，让机械臂回到初始零点，再重新上电运行。</span>
      </div>
    </div>
  </section>

  <section id="workflow" className="section-card step-section">
    <div className="section-title">
      <span>Detailed Workflow</span>
      <h2>完整操作流程概览</h2>
      <p>下面的 Step 卡片参考英文版结构整理，便于用户明确每个阶段的目标和进入条件。</p>
    </div>
    <div className="step-card-grid">
      <a className="step-card recommended" href="/cn/rebot_b601_rs_getting_started/"><span className="step-mini">Step 0</span><strong>完成 B601-RS 快速入门</strong><p>先完成供电、PCAN-USB / SocketCAN、零点校准和基础运动测试。</p></a>
      <a className="step-card" href="#install-lerobot"><span className="step-mini">Step 1</span><strong>安装 LeRobot 环境</strong><p>创建 conda 环境，安装 Seeed 验证版 LeRobot、reBot 插件和 MotorBridge。</p></a>
      <a className="step-card" href="#calibration"><span className="step-mini">Step 2</span><strong>校准 follower 与 leader</strong><p>分别校准 B601-RS follower 和 reBot 102 leader，保证主从映射一致。</p></a>
      <a className="step-card" href="#teleoperation"><span className="step-mini">Step 3</span><strong>先完成无相机遥操作</strong><p>确认 leader 到 follower 的控制链路稳定，再进入数据采集。</p></a>
      <a className="step-card" href="#camera"><span className="step-mini">Step 4</span><strong>接入相机并检查画面</strong><p>从 OpenCV USB 相机开始，再根据需要接入 RealSense 或 Orbbec RGB-D 相机。</p></a>
      <a className="step-card" href="#record-dataset"><span className="step-mini">Step 5</span><strong>采集并检查数据集</strong><p>先采集少量本地数据，确认图像、状态、动作和任务描述都正确。</p></a>
      <a className="step-card" href="#training"><span className="step-mini">Step 6</span><strong>训练并评估策略</strong><p>推荐先从 ACT 跑通完整流程，再尝试 SmolVLA、Pi0 / Pi0.5 或 GR00T。</p></a>
      <a className="step-card" href="#advanced"><span className="step-mini">Step 7</span><strong>尝试进阶部署</strong><p>完成基础训练后，再探索 PEFT / LoRA、多 GPU 训练和异步推理。</p></a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Overview</span>
      <h2>项目简介</h2>
    </div>

    <div className="info-card">
      <p><a href="/cn/rebot_b601_rs_getting_started/">reBot Arm B601-RS</a> 是 Seeed Studio 开源的机械臂项目，目标是降低具身智能学习门槛。项目不仅开源代码，也开源机械结构、BOM、软件接口和算法示例。</p>
      <p><a href="https://github.com/huggingface/lerobot/tree/main">LeRobot</a> 为真实机器人提供 PyTorch 模型、数据集和工具，覆盖模仿学习、强化学习、数据采集、训练和部署流程。</p>
    </div>

    <div className="feature-grid">
      <div><b>真开源</b><span>开源结构件、钣金件、3D 打印件、BOM、Python SDK、ROS、Isaac Sim 和 LeRobot 示例。</span></div>
      <div><b>支持 LeRobot</b><span>可完成遥操作、数据采集、训练和评估，适合入门具身智能和 VLA 实验。</span></div>
      <div><b>兼容 Jetson</b><span>可在 reComputer Jetson 平台上进行部署和边缘推理。</span></div>
      <div><b>可扩展硬件</b><span>支持 reBot B601-RS follower 通过 PCAN-USB / SocketCAN 与 reBot 102 leader 配合完成主从遥操作。</span></div>
    </div>

    <details className="content-details">
      <summary>查看 reBot 项目介绍视频</summary>
      <div className="video-placeholder">项目介绍视频待补充</div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Environment</span>
      <h2>初始系统环境</h2>
      <p>建议优先在 Ubuntu 物理机上完成数据采集和训练流程；虚拟机可能存在性能和 USB 设备映射问题。</p>
    </div>

    <div className="env-grid">
      <div>
        <h3>Ubuntu x86</h3>
        <ul>
          <li>Ubuntu 22.04</li>
          <li>CUDA 12+</li>
          <li>Python 3.10 / 3.12</li>
          <li>Torch 2.6 或与 CUDA 匹配的版本</li>
        </ul>
      </div>
      <div>
        <h3>Jetson Orin</h3>
        <ul>
          <li>JetPack 6.0 / 6.1</li>
          <li>Python 3.10</li>
          <li>Torch 2.3+</li>
          <li>需确认 PyTorch 和 Torchvision 均为 GPU 版本</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Step 1</span>
      <h2>安装 LeRobot</h2>
      <p>本教程推荐使用 Seeed 验证过的 LeRobot 仓库，并安装 reBot follower、leader 和 MotorBridge 插件。</p>
    </div>

    <details className="content-details">
      <summary>安装视频</summary>
      <div className="video-placeholder">安装视频待补充</div>
    </details>

    <div className="command-flow">
      <div>
        <h3>1. 安装 Miniforge</h3>
        <pre><code>{`cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc`}</code></pre>
      </div>

      <div>
        <h3>2. 克隆 Seeed LeRobot 仓库</h3>
        <pre><code>{`mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git`}</code></pre>
      </div>

      <div>
        <h3>3. 创建环境并安装依赖</h3>
        <pre><code>{`cd ~/rebot_lerobot

conda create -y -n lerobot python=3.12
conda activate lerobot

pip install -e ./lerobot
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge`}</code></pre>
      </div>

      <div>
        <h3>4. 安装 ffmpeg</h3>
        <pre><code>{`conda install ffmpeg -c conda-forge

# 如果遇到版本兼容问题，可指定版本：
conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
      </div>
    </div>

    <details className="content-details">
      <summary>Jetson JetPack 6.0+ 特殊配置</summary>
      <p>Jetson 用户请先确认已经安装 GPU 版本的 PyTorch 和 Torchvision，再执行以下依赖调整。</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>检查 PyTorch 和 Torchvision</summary>
      <p>通过 pip 安装 LeRobot 环境时可能会替换原有 PyTorch，请确认 CUDA 可用。</p>
      <pre><code>{`python3

import torch
print(torch.cuda.is_available())

# 输出 True 后可以退出 Python：
exit()`}</code></pre>
    </details>
  </section>

  <div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前安全确认</strong>
    <p>
      请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。
      确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
    </p>
  </div>
</div>

<section id="calibration" className="section-card">
    <div className="section-title">
      <span>Step 2</span>
      <h2>校准机械臂</h2>
      <p>校准会影响主从遥操作和数据采集质量。请严格按照零位姿态执行，并保持机械臂静止直到校准完成。</p>
    </div>

    <details className="content-details">
      <summary>校准视频</summary>
      <div className="video-placeholder">校准视频待补充</div>
    </details>

    <div className="callout warning">
      <b>重新校准说明</b>
      <p>如果需要重新校准机械臂，请删除 <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> 或 <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code> 下对应文件后再重新校准。</p>
    </div>

    <h3>1. 配置 leader 串口和 follower CAN 总线</h3>
    <p>B601-RS follower 使用 PCAN-USB / SocketCAN 通信，通常映射为 <code>{`can0`}</code>。每次重新插拔 PCAN-USB 或重启系统后，建议重新执行下面的 CAN 初始化命令。</p>
    <pre><code>{`# leader 臂
sudo chmod 666 /dev/ttyUSB*

# follower 臂，PCAN-USB / SocketCAN
sudo modprobe peak_usb
ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>

    <h3>2. 校准 follower 臂</h3>
    <p>B601-RS 一般只需要在组装完成后校准一次。校准时夹爪需要完全闭合，并按照零位图保持机械臂静止。如果无法连接 follower，请先回到快速入门文档，用 MotorBridge 检查机械臂和 CAN 通信是否正常。</p>

    <pre><code>{`lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan`}</code></pre>

    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg" alt="B601-RS zero position" />
    </div>

    <details className="content-details" open>
      <summary>3. 校准 reBot 102 leader</summary>
      <div className="callout">
        <b>Leader 校准说明</b>
        <p>reBot 102 leader 使用 USB 转 UART 模块，通常映射为 <code>{`/dev/ttyUSB*`}</code>。如果初次连接找不到串口，可能是 <code>{`brltty`}</code> 占用串口。</p>
      </div>

      <pre><code>{`sudo dmesg | grep ttyUSB
sudo apt remove brltty`}</code></pre>

      <div className="image-wrap">
        <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" alt="reBot 102 leader zero position" />
      </div>

      <pre><code>{`sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
    </details>
  </section>

  <div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前安全确认</strong>
    <p>
      请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。
      确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
    </p>
  </div>
</div>

<section id="teleoperation" className="section-card">
    <div className="section-title">
      <span>Step 3</span>
      <h2>遥操作测试</h2>
      <p>在接入相机和采集数据前，先确认 leader 到 follower 的控制链路稳定。</p>
    </div>

    <div className="callout danger">
      <b>遥操作安全提醒</b>
      <p>如果主从臂电源脱落、信号线脱落或机械臂异常运动，必须先停止程序，让机械臂恢复到初始零点位置，再重新上电运行。</p>
    </div>

    <pre><code>{`# leader 臂
sudo chmod 666 /dev/ttyUSB*

# follower 臂
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>

    <details className="content-details">
      <summary>遥操作演示视频</summary>
      <div className="video-placeholder">遥操作演示视频待补充</div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Step 4</span>
      <h2>添加摄像头</h2>
      <p>相机配置会直接影响数据质量。建议先用低分辨率和单相机跑通，再逐步增加相机数量和分辨率。B601-RS 的所有示例均默认 follower 运行在 <code>{`can0`}</code> 上。</p>
    </div>

    <div className="camera-grid">
      <details className="content-details">
        <summary>使用普通 USB / OpenCV 相机</summary>
        <p>先查找相机 ID：</p>
        <pre><code>{`lerobot-find-cameras opencv`}</code></pre>

        <p>单相机遥操作测试：</p>
        <pre><code>{`lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>

        <p>双相机遥操作测试：</p>
        <pre><code>{`lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>

        <div className="callout">
          <b>MJPG 建议</b>
          <p><code>{`MJPG`}</code> 是压缩格式，通常可以获得更高分辨率和帧率。不建议多个高分辨率 USB 摄像头共用同一个 USB HUB。</p>
        </div>
      </details>

      <details className="content-details">
        <summary>使用 RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport

pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense`}</code></pre>

        <pre><code>{`lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
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
      }
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
      </details>

      <details className="content-details">
        <summary>使用 Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport

pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras orbbec`}</code></pre>

        <pre><code>{`lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
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
    --display_data=true`}</code></pre>
      </details>
    </div>
  </section>

  <div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前安全确认</strong>
    <p>
      请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。
      确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。
    </p>
  </div>
</div>

<section id="record-dataset" className="section-card">
    <div className="section-title">
      <span>Step 5</span>
      <h2>数据集制作与采集</h2>
      <p>先从一个简单、稳定、重复性高的任务开始，例如“抓取黑色方块并放入盒子”。</p>
    </div>

    <details className="content-details">
      <summary>数据采集视频</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1W3okBNEAJ" title="Bilibili video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="tips-grid">
      <div><b>建议数量</b><span>先记录 50 个 episode 左右；如果有 5 个不同位置，每个位置建议至少 10 条。</span></div>
      <div><b>保持一致</b><span>相机位置、光线、桌面背景和抓取动作尽量保持稳定。</span></div>
      <div><b>逐步增加难度</b><span>先让任务稳定成功，再逐步加入新位置、新物体或新视角。</span></div>
    </div>

    <details className="content-details" open>
      <summary>将数据集保存在本地</summary>
      <pre><code>{`lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>当 <code>{`--dataset.push_to_hub=false`}</code> 时，数据会保存在 <code>{`~/.cache/huggingface/lerobot`}</code> 下。</p>
    </details>

    <details className="content-details">
      <summary>上传数据集到 Hugging Face Hub</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential

HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER`}</code></pre>

      <pre><code>{`lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
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
    --dataset.reset_time_s=30`}</code></pre>
    </details>

    <details className="content-details">
      <summary>记录过程中的键盘控制</summary>
      <table>
        <thead><tr><th>按键</th><th>动作</th></tr></thead>
        <tbody>
          <tr><td>→ 右箭头</td><td>提前结束当前 episode / reset，进入下一个</td></tr>
          <tr><td>← 左箭头</td><td>取消当前 episode，重新录制</td></tr>
          <tr><td>ESC</td><td>立即停止会话，编码视频并保存 / 上传数据集</td></tr>
        </tbody>
      </table>
      <div className="callout">
        <b>键盘无响应</b>
        <p>如果键盘按下后没有反应，可以尝试降低 pynput 版本。</p>
        <pre><code>{`pip install pynput==1.6.8`}</code></pre>
      </div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Step 6</span>
      <h2>可视化与回放数据集</h2>
    </div>

    <h3>可视化上传到 Hub 的数据集</h3>
    <pre><code>{`echo \${HF_USER}/rebot_test

lerobot-dataset-viz \
  --repo-id \${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>

    <h3>可视化本地数据集</h3>
    <pre><code>{`lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>

    <details className="content-details">
      <summary>回放一个数据集</summary>
      <div className="callout warning">
        <b>可选步骤</b>
        <p>回放功能可能不稳定，可以先跳过，优先完成数据采集和训练。</p>
      </div>
      <pre><code>{`lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">
    <div className="section-title">
      <span>Step 7</span>
      <h2>训练与评估</h2>
      <p>建议先从 ACT 跑通完整流程，再根据显存和任务复杂度尝试 SmolVLA、Pi0、Pi0.5 或 GR00T。</p>
    </div>

    <details className="content-details" open>
      <summary>ACT：推荐第一个跑通的策略</summary>
      <h3>训练</h3>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>

      <div className="callout">
        <b>RTX 50 系列提示</b>
        <p>如果是 RTX 50 系列显卡，训练时建议加入 <code>{`--dataset.video_backend=pyav`}</code>。</p>
      </div>

      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>

      <h3>评估</h3>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>

    <details className="content-details">
      <summary>SmolVLA：轻量级机器人基础模型</summary>
      <pre><code>{`pip install -e ".[smolvla]"`}</code></pre>

      <h3>训练</h3>
      <pre><code>{`lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true`}</code></pre>

      <h3>验证</h3>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Pi0 / Pi0.5：VLA 模型训练入口</summary>
      <pre><code>{`pip install -e ".[pi]"`}</code></pre>

      <h3>Pi0 训练</h3>
      <pre><code>{`lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=\${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}</code></pre>

      <h3>Pi0.5 训练</h3>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=\${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}</code></pre>
    </details>

    <details className="content-details">
      <summary>GR00T N1.5：进阶基础模型微调</summary>
      <div className="callout warning">
        <b>环境要求更高</b>
        <p>GR00T N1.5 通常依赖 CUDA、合适版本的 PyTorch 和 FlashAttention。建议先跑通 ACT / SmolVLA 再尝试。</p>
      </div>

      <pre><code>{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
pip install "lerobot[groot]"`}</code></pre>

      <h3>评估示例</h3>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=\${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10`}</code></pre>
    </details>

    <details className="content-details">
      <summary>从训练检查点恢复训练</summary>
      <pre><code>{`lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}</code></pre>
    </details>
  </section>

  <section id="advanced" className="section-card">
    <div className="section-title">
      <span>Advanced</span>
      <h2>进阶功能</h2>
    </div>

    <details className="content-details">
      <summary>使用 PEFT / LoRA 进行高效微调</summary>
      <pre><code>{`pip install -e ".[peft]"

lerobot-train \
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
  --peft.r=64`}</code></pre>
    </details>

    <details className="content-details">
      <summary>多 GPU 训练</summary>
      <pre><code>{`pip install accelerate

accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}</code></pre>

      <div className="callout">
        <b>参数调整建议</b>
        <p>多 GPU 会增大有效 batch size。可以根据 GPU 数量适当减少 steps，或按 GPU 数量线性增大学习率，但这不是强制规则。</p>
      </div>
    </details>

    <details className="content-details">
      <summary>异步推理部署</summary>
      <div className="callout warning">
        <b>安全提醒</b>
        <p>LeRobot async inference 管线存在未认证 gRPC + pickle 反序列化风险。公网部署时不建议裸露服务，优先使用 VPN、SSH 隧道或安全组限制来源 IP。</p>
      </div>

      <pre><code>{`pip install -e ".[async]"`}</code></pre>

      <h3>启动本地策略服务器</h3>
      <pre><code>{`python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080`}</code></pre>

      <h3>启动客户端</h3>
      <pre><code>{`python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false`}</code></pre>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>常见问题</h2>
    </div>

    <details className="content-details" open>
      <summary>为什么推荐使用 Seeed-Projects/lerobot 仓库？</summary>
      <p>本文档推荐的仓库是针对 reBot 验证过的稳定版本。LeRobot 官方仓库实时更新，可能出现数据集版本、命令参数、依赖包变化等问题。</p>
    </details>

    <details className="content-details">
      <summary>无法连接 /dev/ttyUSB0 或 can0</summary>
      <p>如果 leader 串口存在但无法连接，通常是权限问题；如果 follower 无法连接，请先确认 PCAN-USB 已识别并且 can0 已配置为 1 Mbps。</p>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
    </details>

    <details className="content-details">
      <summary>No valid stream found in input file</summary>
      <p>请安装 ffmpeg 7.1.1。</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>

    <details className="content-details">
      <summary>数据采集时键盘快捷键无响应</summary>
      <p>请确认 <code>{`$DISPLAY`}</code> 环境变量已设置，或尝试降低 <code>{`pynput`}</code> 版本。</p>
      <pre><code>{`pip install pynput==1.6.8`}</code></pre>
    </details>

    <details className="content-details">
      <summary>训练和数据采集有哪些经验建议？</summary>
      <ul>
        <li>ACT 训练 50 组数据，在 RTX 3060 8GB 笔记本上大约需要 6 小时；在 RTX 4090 或 A100 上大约 2~3 小时。</li>
        <li>采集时保持摄像头位置、角度、环境光线稳定。</li>
        <li>减少不稳定背景和行人，避免部署环境变化过大。</li>
        <li>数据采集不要中途手动暂停，否则可能影响均值和方差统计。</li>
        <li>USB 摄像头建议直接接入设备，不建议接在 USB HUB 上。</li>
      </ul>
    </details>
  </section>

  <section id="references" className="section-card">
    <div className="section-title">
      <span>References</span>
      <h2>参考文档</h2>
    </div>

    <div className="reference-grid">
      <a href="https://github.com/Seeed-Projects/lerobot.git">Seeed LeRobot Repository</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://wiki.seeedstudio.com/cn/lerobot_so100m/">SO100 Arm in LeRobot</a>
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://www.jetson-ai-lab.com/lerobot.html">Jetson AI Lab LeRobot</a>
      <a href="https://diffusion-policy.cs.columbia.edu/">Diffusion Policy</a>
    </div>
  </section>


  <section id="course-path" className="section-card course-path-section">
    <div className="section-title">
      <span>课程导链</span>
      <h2>reBot B601-RS 系列课程跳转</h2>
      <p>建议按照 Robotics Page 的学习顺序阅读：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。也可以通过下面的卡片直接跳转到任意课程。</p>
    </div>
    <div className="course-path-grid">
      <a className="course-path-item" href="/cn/rebot_b601_rs_getting_started/">
        <span className="course-index">1</span>
        <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、供电检查、PCAN-USB 配置、零点校准和第一次运动测试。</span></span>
        <span className="course-tag">Start</span>
      </a>
      <a className="course-path-item active" href="/cn/rebot_arm_b601_rs_lerobot/">
        <span className="course-index">2</span>
        <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成主从遥操作、相机接入、数据集采集、训练和策略评估。</span></span>
        <span className="course-tag">当前文章</span>
      </a>
      <a className="course-path-item" href="/cn/rebot_arm_b601_rs_pinocchio_meshcat/">
        <span className="course-index">3</span>
        <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解机器人模型、坐标系、FK / IK、轨迹规划、MeshCat 仿真和重力补偿。</span></span>
        <span className="course-tag">Control</span>
      </a>
      <a className="course-path-item" href="/cn/rebot_arm_b601_rs_grasping_demo/">
        <span className="course-index">4</span>
        <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、手眼标定、YOLO / GraspNet 和抓取位姿生成完成真实抓取。</span></span>
        <span className="course-tag">Application</span>
      </a>
      <a className="course-path-item" href="/cn/rebot_arm_b601_rs_ros2_integration/">
        <span className="course-index">5</span>
        <span className="course-path-copy"><strong>ROS2 集成</strong><span>接入 ROS2、RViz、MoveIt 2、标准 topic / service / action 和规划流程。</span></span>
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
.hero-actions a:nth-child(2), .hero-actions a:nth-child(3) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.hero-card img { width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(95px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .notice-grid, .env-grid, .tips-grid, .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .feature-grid div, .notice-card, .env-grid div, .tips-grid div, .info-grid div, .check-card, .info-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; box-shadow: 0 10px 24px rgba(15,23,42,0.035); }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .feature-grid b, .feature-grid strong, .notice-card strong, .tips-grid b, .info-grid strong, .check-card h3, .info-card strong { color: var(--rb-text); }
.path-card small, .path-card span, .feature-grid span, .notice-card span, .tips-grid span, .info-grid span, .info-card p, .check-card li { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after { content: "收起"; }
.content-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child { margin-bottom: 1rem; }
.command-card, .command-flow > div, .sub-step-block { padding: 1rem; margin: 1rem 0; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.callout, .tip-card, .warning-card, .danger-card, .quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p, .tip-card span, .warning-card span, .danger-card span { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; display: block; }
.callout.warning, .warning-card { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger, .danger-card { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.placeholder-box, .video-placeholder { display: flex; min-height: 160px; align-items: center; justify-content: center; border: 1px dashed var(--rb-border); border-radius: 14px; padding: 1rem; text-align: center; color: var(--rb-muted); background: var(--rb-surface-soft); font-weight: 800; }
.image-wrap, .image-frame { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.camera-grid { display: grid; gap: 0.9rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning, html[data-theme='dark'] .warning-card { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger, html[data-theme='dark'] .danger-card { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(4, minmax(0, 1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } }

.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.2rem 0 1.6rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background:
    linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}

.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}

.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}

.safety-alert-content p {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.72;
}

.safety-alert-content ul {
  margin: 0.65rem 0 0;
  padding-left: 1.2rem;
  color: #7f1d1d;
  line-height: 1.68;
}

.safety-alert-content li + li {
  margin-top: 0.35rem;
}

.safety-alert-content strong,
.safety-alert-content p strong,
.safety-alert-content li strong {
  font-weight: 900;
}

.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}

.safety-alert.compact .safety-alert-content strong {
  margin-bottom: 0.25rem;
}

html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background:
    linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}

html[data-theme='dark'] .safety-alert-icon {
  background: rgba(248, 113, 113, 0.18);
  color: #fca5a5;
}

html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul {
  color: #fecaca;
}

@media (max-width: 560px) {
  .safety-alert {
    grid-template-columns: 1fr;
  }

  .safety-alert-icon {
    width: 2.1rem;
    height: 2.1rem;
  }
}

/* Optimized Step cards and course navigation */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  display: grid;
  gap: 0.45rem;
  padding: 1rem 1.05rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  color: inherit;
  text-decoration: none !important;
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.step-card:hover {
  transform: translateY(-3px);
  border-color: rgba(37,99,235,0.38);
  box-shadow: 0 16px 32px rgba(37,99,235,0.10);
}
.step-card.recommended {
  border-color: rgba(37,99,235,0.45);
  background: linear-gradient(135deg, rgba(239,246,255,0.96), rgba(240,253,250,0.84));
}
.step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.35rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
}
.step-card p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  color: var(--rb-text);
  box-shadow: 0 8px 22px rgba(15,23,42,0.05);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.course-path-item:hover {
  transform: translateY(-2px);
  border-color: rgba(37,99,235,0.42);
  box-shadow: 0 14px 30px rgba(37,99,235,0.12);
}
.course-path-item.active {
  border-color: rgba(37,99,235,0.55);
  background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  background: var(--rb-primary-soft);
  color: var(--rb-primary);
  font-weight: 900;
}
.course-path-item.active .course-index {
  color: #fff;
  background: var(--rb-primary);
  box-shadow: 0 10px 22px rgba(37,99,235,0.25);
}
.course-path-copy strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.22rem;
}
.course-path-copy span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.55;
}
.course-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.20);
  font-size: 0.78rem;
  font-weight: 850;
  white-space: nowrap;
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .course-path-item {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .step-card.recommended,
html[data-theme='dark'] .course-path-item.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}
@media (max-width: 700px) {
  .course-path-item { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag { grid-column: 2; width: fit-content; }
}

`}</style>
