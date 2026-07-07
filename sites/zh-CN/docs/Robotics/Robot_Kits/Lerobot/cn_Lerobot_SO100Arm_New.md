---
description: 本 Wiki 提供 SO-ARM100 / SO-ARM101 在 LeRobot 框架内完成 3D 打印、舵机配置、机械臂组装、校准、遥操作、相机接入、数据采集、训练与评估的完整流程。
title: SO-ARM100 / SO-ARM101 入门 LeRobot
keywords:
  - Lerobot
  - Huggingface
  - SO-ARM100
  - SO-ARM101
  - 机械臂
  - 机器人
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 2026-07-05
  author: ZhuYaohui
createdAt: '2025-01-08'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/cn/lerobot_so100m_new/
---

# SO-ARM100 / SO-ARM101 入门 LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div>
      <span className="eyebrow">SO-ARM × LeRobot</span>
      <h2>从组装、舵机配置到遥操作、数据采集和策略训练</h2>
      <p>本教程面向 SO-ARM100 / SO-ARM101 用户，带你按照真实调试顺序完成 3D 打印参考、LeRobot 环境安装、舵机 ID 配置、机械臂组装、整臂校准、主从遥操作、相机接入、数据集采集、训练和评估。</p>
      <div className="hero-actions">
        <a href="#course-steps">查看 Step 流程</a>
        <a href="#install-lerobot">安装 LeRobot</a>
        <a href="#record-dataset">进入数据采集</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 and SO-ARM101 with LeRobot" />
      <strong>SO-ARM10x · LeRobot</strong>
      <span>3D Printing · Servo Setup · Teleoperation · Dataset · Training</span>
    </div>
  </section>

  <div className="safety-alert">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>安全警告：运行前请清空机械臂工作空间</strong>
      <p>在运行任何会驱动机械臂运动的程序前，请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品、易碎物品、工具、线缆和其他无关物体。调试和运行过程中，人员禁止靠近机械臂运动范围。</p>
      <ul>
        <li>机械臂上电后，请勿用手触碰关节、舵机、连杆、夹爪或末端工具。</li>
        <li>校准、遥操作、数据采集、策略评估或视觉抓取前，请确保机械臂固定牢靠。</li>
        <li>SO101 Pro 版本请特别区分 Leader 的 5V 电源和 Follower 的 12V 电源，接错电源可能会损坏舵机。</li>
        <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      </ul>
    </div>
  </div>

  <nav className="doc-nav" aria-label="SO-ARM LeRobot quick navigation">
    <a href="#course-steps">Step 流程</a>
    <a href="#overview">项目概览</a>
    <a href="#printing">3D 打印</a>
    <a href="#install-lerobot">安装环境</a>
    <a href="#motor-setup">舵机配置</a>
    <a href="#calibration">整臂校准</a>
    <a href="#teleoperation">遥操作</a>
    <a href="#camera">相机</a>
    <a href="#record-dataset">数据采集</a>
    <a href="#training">训练评估</a>
    <a href="#course-path">课程导链</a>
  </nav>

  <section id="course-steps" className="section-card">
    <div className="section-title">
      <span>Step Overview</span>
      <h2>本篇教程的推荐操作顺序</h2>
      <p>SO-ARM 的流程比 reBot 更靠近“从套件到完整系统”的上手路线。建议先完成舵机配置和机械组装，再进入 LeRobot 校准、遥操作、数据采集和训练。</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Step 0</span><strong>确认型号与供电</strong><p>区分 SO100 / SO101、标准版 / Pro 版、电机型号、Leader 和 Follower 电源。</p></div>
      <div className="step-card"><span className="step-mini">Step 1</span><strong>准备打印件与硬件</strong><p>按打印平台选择 STL，检查舵机、驱动板、电源、USB-C 线缆和桌面夹具。</p></div>
      <div className="step-card"><span className="step-mini">Step 2</span><strong>安装 LeRobot 环境</strong><p>安装 Miniforge、Seeed LeRobot 仓库、feetech 依赖、ffmpeg，并检查 PyTorch。</p></div>
      <div className="step-card"><span className="step-mini">Step 3</span><strong>配置舵机 ID</strong><p>分别为 Follower 和 Leader 设置 F1–F6、L1–L6 的 ID 和波特率。</p></div>
      <div className="step-card"><span className="step-mini">Step 4</span><strong>组装与整臂校准</strong><p>完成 Leader / Follower 机械组装，并执行 follower 与 leader 的 LeRobot 校准。</p></div>
      <div className="step-card"><span className="step-mini">Step 5</span><strong>遥操作与相机接入</strong><p>先完成无相机遥操作，再接入 OpenCV、RealSense 或 Orbbec 相机。</p></div>
      <div className="step-card"><span className="step-mini">Step 6</span><strong>采集、训练与评估</strong><p>录制本地或 Hub 数据集，从 ACT 跑通训练，再尝试 SmolVLA、Pi0 或 GR00T。</p></div>
    </div>
  </section>

  <section id="overview" className="section-card">
    <div className="section-title">
      <span>Overview</span>
      <h2>项目简介</h2>
      <p>SO-ARM10x 是由 TheRobotStudio 发起的低成本开源机械臂项目，配合 LeRobot 可以完成遥操作、数据采集、模仿学习训练和策略部署。</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>低成本开源机械臂</b><span>提供开源结构文件、3D 打印件、装配参考和主从臂方案，适合教育、科研和具身智能入门。</span></div>
      <div className="module-summary-card"><b>Leader / Follower 架构</b><span>Leader 用于人工遥操作，Follower 执行任务并记录状态、动作和视觉数据。</span></div>
      <div className="module-summary-card"><b>LeRobot 数据闭环</b><span>支持校准、遥操作、数据集录制、可视化、回放、训练和真实机械臂评估。</span></div>
      <div className="module-summary-card"><b>Jetson 与 GPU 工作站</b><span>可在 Ubuntu x86 工作站完成训练，也可在 Jetson Orin 平台上进行部署和边缘推理实验。</span></div>
    </div>

    <div className="notice-grid">
      <div className="notice-card">
        <strong>推荐使用 Seeed-Projects/lerobot</strong>
        <span>本文默认使用 Seeed 验证过的 LeRobot 仓库。上游 LeRobot 主仓更新较快，命令参数、数据格式或依赖可能发生变化。</span>
      </div>
      <div className="notice-card warning">
        <strong>软件问题处理建议</strong>
        <span>Seeed Studio 主要负责硬件质量。软件环境、依赖冲突或上游 LeRobot 问题，建议先查看 FAQ，再向 LeRobot GitHub、Discord 或 Seeed 社区反馈。</span>
      </div>
    </div>

    <details className="content-details">
      <summary>查看项目介绍视频</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819388312&bvid=BV1H6UUBcErT&cid=34226440480&p=1&autoplay=0" title="SO-ARM project introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Hardware</span>
      <h2>规格参数与供电差异</h2>
      <p>SO-ARM101 的 Leader 臂相对 SO-ARM100 调整了部分舵机齿轮比。Pro 版本还需要区分 Leader 与 Follower 的供电电压。</p>
    </div>

    <div className="spec-grid">
      <div className="spec-card"><b>系列</b><span>SO-ARM100 / SO-ARM101</span></div>
      <div className="spec-card"><b>结构</b><span>Leader Arm + Follower Arm</span></div>
      <div className="spec-card"><b>通信方式</b><span>UART / USB-C 舵机驱动板</span></div>
      <div className="spec-card"><b>角度传感器</b><span>12-bit magnetic encoder</span></div>
      <div className="spec-card"><b>标准版供电</b><span>5V power supply for both arms</span></div>
      <div className="spec-card"><b>Pro 版供电</b><span>Leader 使用 5V，Follower 使用 12V</span></div>
      <div className="spec-card"><b>Ubuntu x86</b><span>Ubuntu 22.04 / CUDA 12+ / Python 3.10 / Torch 2.6+</span></div>
      <div className="spec-card"><b>Jetson Orin</b><span>JetPack 6.0 / 6.1，Python 3.10，Torch 2.3+</span></div>
    </div>

    <details className="content-details">
      <summary>查看 SO101 Leader / Follower 舵机对应关系</summary>
      <table>
        <thead><tr><th>舵机型号</th><th>减速比</th><th>对应关节</th></tr></thead>
        <tbody>
          <tr><td>ST-3215-C044 7.4V</td><td>1:191</td><td>L1</td></tr>
          <tr><td>ST-3215-C001 7.4V</td><td>1:345</td><td>L2</td></tr>
          <tr><td>ST-3215-C044 7.4V</td><td>1:191</td><td>L3</td></tr>
          <tr><td>ST-3215-C046 7.4V</td><td>1:147</td><td>L4–L6</td></tr>
          <tr><td>ST-3215-C001 / C018 / C047</td><td>1:345</td><td>F1–F6</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>查看材料清单 BOM</summary>
      <table>
        <thead><tr><th>部件</th><th>数量</th><th>是否包含</th></tr></thead>
        <tbody>
          <tr><td>舵机</td><td>12</td><td>✅</td></tr>
          <tr><td>舵机驱动板</td><td>2</td><td>✅</td></tr>
          <tr><td>USB-C 线缆</td><td>2</td><td>✅</td></tr>
          <tr><td>电源适配器</td><td>2</td><td>✅</td></tr>
          <tr><td>桌面夹具</td><td>4</td><td>✅</td></tr>
          <tr><td>3D 打印结构件</td><td>1 套</td><td>可选</td></tr>
        </tbody>
      </table>
    </details>
  </section>

  <section id="printing" className="section-card">
    <div className="section-title">
      <span>Step 1</span>
      <h2>3D 打印参考参数</h2>
      <p>如果你购买的是非预组装版本，请先准备 3D 打印结构件。SO101 的打印件兼容 SO100 电机套件安装。</p>
    </div>

    <div className="tips-grid">
      <div><b>材料</b><span>推荐 PLA+，适合大多数 FDM 打印机。</span></div>
      <div><b>喷嘴与层高</b><span>0.4 mm 喷嘴配 0.2 mm 层高，或 0.6 mm 喷嘴配 0.4 mm 层高。</span></div>
      <div><b>填充密度</b><span>推荐 15%，兼顾强度、打印时间和材料消耗。</span></div>
      <div><b>支撑设置</b><span>支撑设置为 everywhere，但忽略大于 45° 的斜面；水平螺丝孔内不应有支撑。</span></div>
    </div>

    <details className="content-details">
      <summary>选择对应打印平台的 STL 文件</summary>
      <div className="reference-grid">
        <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl">Ender Follower SO101 STL</a>
        <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl">Ender Leader SO101 STL</a>
        <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl">Prusa Follower SO101 STL</a>
        <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl">Prusa Leader SO101 STL</a>
        <a href="https://makerworld.com/zh/models/908660">SO100 历史打印文件 Makerworld</a>
      </div>
    </details>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Step 2</span>
      <h2>安装 LeRobot</h2>
      <p>建议在物理 Ubuntu 主机上完成数据采集和训练流程。虚拟机可能存在 USB 设备映射、摄像头访问和性能问题。</p>
    </div>

    <details className="content-details">
      <summary>安装视频</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819257025&bvid=BV1r6UUBFEBM&cid=34226636693&p=1&autoplay=0" title="Install LeRobot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="command-flow">
      <div>
        <h3>1. 安装 Miniforge</h3>
        <pre><code>{`# Jetson aarch64
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
source ~/.bashrc

# Ubuntu x86_64
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
source ~/.bashrc
conda init --all`}</code></pre>
      </div>

      <div>
        <h3>2. 创建环境并克隆仓库</h3>
        <pre><code>{`conda create -y -n lerobot python=3.10
conda activate lerobot

git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot`}</code></pre>
      </div>

      <div>
        <h3>3. 安装 ffmpeg 与 feetech 依赖</h3>
        <pre><code>{`conda install ffmpeg -c conda-forge

# 如果遇到视频编码兼容问题，可以指定版本：
conda install ffmpeg=7.1.1 -c conda-forge

cd ~/lerobot
pip install -e ".[feetech]"`}</code></pre>
      </div>

      <div>
        <h3>4. 检查 PyTorch 是否支持 CUDA</h3>
        <pre><code>{`python3
import torch
print(torch.cuda.is_available())
exit()`}</code></pre>
      </div>
    </div>

    <details className="content-details">
      <summary>Jetson JetPack 6.0+ 特殊配置</summary>
      <p>Jetson 用户请先确认安装的是 GPU 版本 PyTorch 和 Torchvision，再执行下面的依赖调整。</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>RTX 50 系列显卡提示</summary>
      <p>RTX 50 系列显卡通常需要 CUDA 12.8 或更高版本的预览版 PyTorch。</p>
      <pre><code>{`pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128`}</code></pre>
    </details>
  </section>

  <section id="motor-setup" className="section-card">
    <div className="section-title">
      <span>Step 3</span>
      <h2>配置舵机 ID 并组装机械臂</h2>
      <p>如果你购买的是预组装版本，可以跳过本节，直接进入整臂校准。如果你购买的是散件版本，请先逐个设置舵机 ID，再进行机械组装。</p>
    </div>

    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>供电确认</strong>
        <p>Leader 臂始终使用 7.4V 舵机，校准和运行时使用 5V 电源。SO101 Pro 的 Follower 臂使用 12V 电源。接错电源可能损坏舵机。</p>
      </div>
    </div>

    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">3.1</span><strong>标记舵机</strong><p>将 Follower 标为 F1–F6，Leader 标为 L1–L6，方便后续校准和排障。</p></div>
      <div className="step-card"><span className="step-mini">3.2</span><strong>查找串口</strong><p>使用 <code>{`lerobot-find-port`}</code> 分别识别 Leader 和 Follower 对应的 USB 端口。</p></div>
      <div className="step-card"><span className="step-mini">3.3</span><strong>配置 Follower</strong><p>用 <code>{`lerobot-setup-motors --robot.type=so101_follower`}</code> 按提示逐个接入舵机。</p></div>
      <div className="step-card"><span className="step-mini">3.4</span><strong>配置 Leader</strong><p>用 <code>{`lerobot-setup-motors --teleop.type=so101_leader`}</code> 设置主臂舵机。</p></div>
      <div className="step-card"><span className="step-mini">3.5</span><strong>机械组装</strong><p>按 Leader 和 Follower 的图片步骤完成结构件安装、线缆整理和桌面固定。</p></div>
    </div>

    <details className="content-details">
      <summary>查看舵机配置完整命令</summary>
      <pre><code>{`lerobot-find-port

sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1

# 配置 Follower 臂舵机
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0

# 配置 Leader 臂舵机
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1`}</code></pre>
      <p>运行过程中，请严格按照终端提示，每次只连接一个舵机到驱动板。按下 Enter 前请检查电源线、三针线和 USB 是否连接牢靠。</p>
    </details>

    <details className="content-details">
      <summary>查看舵机配置视频</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819257278&bvid=BV1r6UUBFECD&cid=34227948757&p=1&autoplay=0" title="SO-ARM servo setup" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <details className="content-details">
      <summary>查看组装视频与图片参考</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819256249&bvid=BV1k6UUBFEw4&cid=34228079335&p=1&autoplay=0" title="SO-ARM assembly" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="callout">
        <b>组装建议</b>
        <p>SO-ARM101 双臂的组装过程与 SO-ARM100 基本相同。区别在于 SO101 增加了线缆夹，并且 Leader 臂部分舵机齿轮比不同。组装前请再次确认 F1–F6 和 L1–L6。</p>
      </div>
    </details>
  </section>

  <section id="calibration" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>运行前安全确认</strong>
        <p>请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。确认机械臂固定牢靠、电源和线缆连接正常后，再运行本节程序。</p>
      </div>
    </div>

    <div className="section-title">
      <span>Step 4</span>
      <h2>校准 Leader 与 Follower 机械臂</h2>
      <p>校准会把物理位置和 LeRobot 读取的关节位置对齐，是后续遥操作、数据采集和策略评估的基础。</p>
    </div>

    <div className="callout warning">
      <b>重新校准说明</b>
      <p>如果需要重新校准，可以删除 <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> 或 <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code> 下对应文件；也可以在命令提示中输入 <code>{`c`}</code> 并回车重新校准。</p>
    </div>

    <div className="command-flow">
      <div>
        <h3>1. 授予串口权限</h3>
        <pre><code>{`sudo chmod 666 /dev/ttyACM*`}</code></pre>
      </div>
      <div>
        <h3>2. 校准 Follower 臂</h3>
        <pre><code>{`lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm`}</code></pre>
      </div>
      <div>
        <h3>3. 校准 Leader 臂</h3>
        <pre><code>{`lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
      </div>
    </div>

    <details className="content-details">
      <summary>查看校准视频</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://player.bilibili.com/player.html?isOutside=true&aid=115607819322806&bvid=BV1w6UUBcEGR&cid=34229387906&p=1&autoplay=0" title="SO-ARM calibration" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <details className="content-details">
      <summary>可选：使用 Seeed SoARM 快捷工具进行中位校准</summary>
      <p>当你遇到 <code>{`Magnitude 30841 exceeds 2047`}</code>、识别不到舵机 ID、舵机 ID 错误或需要验证舵机状态时，可以使用 Seeed_RoboController 工具进行中位校准和检查。</p>
      <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

# 可选：关闭舵机力矩，方便手动调整
python -m src.tools.servo_disable

# 将当前位置写为中位值 2048
python -m src.tools.servo_middle_calibration

# 验证舵机是否能回到 2048 中位
python -m src.tools.servo_center_test`}</code></pre>
      <div className="reference-grid">
        <a href="/cn/lerobot_steering_gear_debugging_tool/">打开舵机调试工具使用教程</a>
      </div>
    </details>
  </section>

  <section id="teleoperation" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>运行前安全确认</strong>
        <p>请清空机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品和无关人员。遥操作前确认 Leader 和 Follower 固定牢靠，电源和 USB 线缆连接稳定。</p>
      </div>
    </div>

    <div className="section-title">
      <span>Step 5</span>
      <h2>遥操作测试</h2>
      <p>在接入相机和采集数据前，先运行无相机遥操作，确认主从臂运动链路稳定。</p>
    </div>

    <div className="callout danger">
      <b>遥操作安全提醒</b>
      <p>如果主从臂电源脱落、信号线脱落或机械臂异常运动，必须先停止程序，让机械臂恢复到初始位置，再重新上电运行。</p>
    </div>

    <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>

    <details className="content-details">
      <summary>查看遥操作演示视频</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="SO-ARM teleoperation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Step 6</span>
      <h2>添加摄像头</h2>
      <p>相机配置直接影响数据质量。建议先用单个 USB / OpenCV 相机跑通，再根据任务需要接入 RealSense 或 Orbbec RGB-D 相机。</p>
    </div>

    <div className="camera-grid">
      <details className="content-details">
        <summary>使用普通 USB / OpenCV 相机</summary>
        <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true`}</code></pre>
        <div className="callout"><b>MJPG 建议</b><p>MJPG 通常可以获得更高分辨率和帧率。不建议多个高分辨率 USB 相机共用同一个 USB HUB。</p></div>
      </details>

      <details className="content-details">
        <summary>使用 RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport

pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
    d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
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
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
    orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
    </div>
  </section>

  <section id="record-dataset" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>运行前安全确认</strong>
        <p>数据采集会连续驱动机械臂，请保持 1 米安全距离，并确认相机、Leader、Follower 和电源线不会被机械臂拉扯。</p>
      </div>
    </div>

    <div className="section-title">
      <span>Step 7</span>
      <h2>数据集制作与采集</h2>
      <p>先从简单、稳定、重复性高的任务开始，例如“抓取黑色方块并放入盒子”。</p>
    </div>

    <div className="tips-grid">
      <div><b>建议数量</b><span>先记录 50 个 episode 左右；如果有 5 个不同位置，每个位置建议至少 10 条。</span></div>
      <div><b>保持一致</b><span>相机位置、光线、桌面背景和抓取动作尽量保持稳定。</span></div>
      <div><b>逐步增加难度</b><span>先让任务稳定成功，再逐步加入新位置、新物体或新视角。</span></div>
    </div>

    <details className="content-details">
      <summary>将数据集保存在本地</summary>
      <pre><code>{`lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeed_so101/test \
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
echo $HF_USER

lerobot-record \
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
      <div className="callout"><b>键盘无响应</b><p>如果键盘按下后没有反应，可以尝试降低 pynput 版本。</p><pre><code>{`pip install pynput==1.6.8`}</code></pre></div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Dataset</span>
      <h2>可视化与回放数据集</h2>
      <p>训练前建议先检查数据集，确认图像、状态、动作和任务描述都正确。</p>
    </div>

    <div className="command-card">
      <h3>可视化本地数据集</h3>
      <pre><code>{`lerobot-dataset-viz \
  --repo-id seeed_so101/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>
    </div>

    <details className="content-details">
      <summary>回放一个 episode</summary>
      <div className="callout warning"><b>可选步骤</b><p>回放功能可能不稳定，可以先跳过，优先完成数据采集和训练。</p></div>
      <pre><code>{`lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeed_so101/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">
    <div className="section-title">
      <span>Step 8</span>
      <h2>训练与评估</h2>
      <p>建议先从 ACT 跑通完整流程，再根据显存和任务复杂度尝试 SmolVLA、Pi0、Pi0.5 或 GR00T。</p>
    </div>

    <details className="content-details">
      <summary>ACT：推荐第一个跑通的策略</summary>
      <h3>训练</h3>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_so101/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <div className="callout"><b>RTX 50 系列提示</b><p>如果是 RTX 50 系列显卡，训练时建议加入 <code>{`--dataset.video_backend=pyav`}</code>。</p></div>
      <h3>评估</h3>
      <pre><code>{`lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --display_data=false \
  --dataset.repo_id=seeed/eval_so101_test \
  --dataset.single_task="Put the cube into the box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>

    <details className="content-details">
      <summary>SmolVLA / Pi0 / Pi0.5 / GR00T 进阶方向</summary>
      <div className="module-summary-grid">
        <div className="module-summary-card"><b>SmolVLA</b><span>适合轻量级 VLA 微调，建议在 ACT 跑通后尝试。</span></div>
        <div className="module-summary-card"><b>Pi0 / Pi0.5</b><span>适合探索语言条件下的机器人策略训练。</span></div>
        <div className="module-summary-card"><b>GR00T</b><span>对 CUDA、PyTorch 和 FlashAttention 要求更高，建议作为进阶实验。</span></div>
      </div>
      <pre><code>{`# SmolVLA
pip install -e ".[smolvla]"

# Pi0 / Pi0.5
pip install -e ".[pi]"

# GR00T
pip install "lerobot[groot]"`}</code></pre>
    </details>

    <details className="content-details">
      <summary>从训练检查点恢复训练</summary>
      <pre><code>{`lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}</code></pre>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>常见问题</h2>
    </div>

    <details className="content-details">
      <summary>为什么推荐使用 Seeed-Projects/lerobot 仓库？</summary>
      <p>本文档使用 Seeed 验证过的仓库作为默认环境。上游 LeRobot 主仓更新较快，可能出现命令参数、数据集版本和依赖变化。</p>
    </details>

    <details className="content-details">
      <summary>无法连接 /dev/ttyACM0 或 /dev/ttyACM1</summary>
      <p>请先确认 USB 已连接，端口没有被其他程序占用，并授予串口权限。</p>
      <pre><code>{`lerobot-find-port
sudo chmod 666 /dev/ttyACM*`}</code></pre>
    </details>

    <details className="content-details">
      <summary>校准时报 Magnitude exceeds 2047</summary>
      <p>通常是舵机当前位置或零点偏移异常。可以使用 Seeed_RoboController 的中位校准工具将当前位置写为 2048，然后重新执行整臂校准。</p>
    </details>

    <details className="content-details">
      <summary>数据采集时键盘快捷键无响应</summary>
      <p>请确认 <code>{`$DISPLAY`}</code> 环境变量已设置，或尝试降低 <code>{`pynput`}</code> 版本。</p>
      <pre><code>{`pip install pynput==1.6.8`}</code></pre>
    </details>

    <details className="content-details">
      <summary>No valid stream found in input file</summary>
      <p>请安装 ffmpeg 7.1.1。</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
  </section>

  <section id="course-path" className="section-card course-path-section">
    <div className="section-title">
      <span>Continue Learning</span>
      <h2>SO-ARM / LeRobot 学习路径</h2>
      <p>SO-ARM 系列建议按“快速开始 → 舵机调试 → 仿真 → Isaac Lab → GR00T → 双臂训练”的顺序继续学习。</p>
    </div>
    <div className="course-path-grid">
      <a className="course-path-item active" href="/cn/lerobot_so100m_new/">
        <span className="course-index">1</span>
        <span className="course-path-copy"><strong>SO100 / SO101 快速开始</strong><span>完成硬件安装、舵机配置、整臂校准、遥操作、数据采集和基础训练。</span></span>
        <span className="course-tag">当前文章</span>
      </a>
      <a className="course-path-item" href="/cn/lerobot_steering_gear_debugging_tool/">
        <span className="course-index">2</span>
        <span className="course-path-copy"><strong>舵机调试工具</strong><span>检查舵机 ID、方向、零点和通信状态，解决硬件调试阶段的常见问题。</span></span>
        <span className="course-tag">排障基础</span>
      </a>
      <a className="course-path-item" href="/cn/simulate_soarm101_by_leisaac/">
        <span className="course-index">3</span>
        <span className="course-path-copy"><strong>LeIsaac 仿真</strong><span>在仿真中理解机械臂模型、场景和任务，为 Sim2Real 做准备。</span></span>
        <span className="course-tag">仿真入门</span>
      </a>
      <a className="course-path-item" href="/cn/training_soarm101_policy_with_isaacLab/">
        <span className="course-index">4</span>
        <span className="course-path-copy"><strong>Isaac Lab 强化学习</strong><span>学习任务、奖励、策略训练和仿真部署流程。</span></span>
        <span className="course-tag">高级训练</span>
      </a>
      <a className="course-path-item" href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
        <span className="course-index">5</span>
        <span className="course-path-copy"><strong>SO101 与 NVIDIA GR00T</strong><span>进入 VLA / 具身智能模型微调与 Jetson 部署流程。</span></span>
        <span className="course-tag">VLA 进阶</span>
      </a>
      <a className="course-path-item" href="/cn/lerobot_double_arm_so_arm_training/">
        <span className="course-index">6</span>
        <span className="course-path-copy"><strong>双臂 SO-ARM 训练</strong><span>学习复杂双臂数据采集、训练和任务执行流程。</span></span>
        <span className="course-tag">复杂任务</span>
      </a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>References</span>
      <h2>参考文档</h2>
    </div>
    <div className="reference-grid">
      <a href="https://github.com/Seeed-Projects/lerobot.git">Seeed LeRobot Repository</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM100</a>
      <a href="https://huggingface.co/docs/lerobot/index">LeRobot Documentation</a>
      <a href="https://wiki.seeedstudio.com/cn/lerobot_steering_gear_debugging_tool/">Seeed 舵机调试工具</a>
      <a href="https://forum.seeedstudio.com/">Seeed Studio Forum</a>
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
.rebot-page * { box-sizing: border-box; }
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); text-align: center; }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-card-grid, .module-summary-grid, .spec-grid, .tips-grid, .notice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.step-card, .module-summary-card, .spec-card, .tips-grid div, .notice-card, .command-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.step-card:hover, .course-path-item:hover, .reference-grid a:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.step-card strong, .module-summary-card b, .spec-card b, .tips-grid b, .notice-card strong { color: var(--rb-text); font-size: 1rem; }
.step-card p, .module-summary-card span, .spec-card span, .tips-grid span, .notice-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; overflow: hidden; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "收起"; }
.command-flow > div, .command-card { margin: 1rem 0; }
.command-flow h3, .command-card h3 { margin-top: 0; color: var(--rb-text); }
.callout { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; }
.callout.warning { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; transition: all 0.18s ease; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; border-collapse: collapse; }
.rebot-page table th, .rebot-page table td { border: 1px solid var(--rb-border); padding: 0.65rem; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .tips-grid div, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); position: static; } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } .safety-alert { grid-template-columns: 1fr; } }
`}</style>
