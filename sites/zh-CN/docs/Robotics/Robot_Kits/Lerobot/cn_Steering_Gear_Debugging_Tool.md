---
description: Lerobot 中 SO-ARM 的舵机调试工具。
title: Lerobot 中 SO-ARM 的舵机调试工具
keywords:
  - Lerobot
  - SO-ARM
  - Robotics
  - Servo
  - Calibration
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/cn/lerobot_steering_gear_debugging_tool/
---

# Lerobot 中 SO-ARM 的舵机调试工具

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>使用图形化工具调试舵机 ID、中位值、力矩与 LeRobot 校准文件</h2>
    <p>舵机调试工具，也就是 <strong>Seeed_RoboController</strong>，用于 SO-ARM100 / SO-ARM101 主臂与从臂的装配、维护和故障排查。你可以用它检测舵机状态、修复重复或错误的舵机 ID、写入中位值、单独控制舵机，并管理 LeRobot 校准文件。</p>
    <div className="hero-actions">
      <a href="#quick-path">查看调试流程</a>
      <a href="#install">安装工具</a>
      <a href="#servo-id">修复舵机 ID</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="SO-ARM 舵机调试工具" />
    <strong>Servo Debugging · ID Recovery · Neutral Calibration</strong>
    <span>当舵机识别失败、ID 重复、中位不正确，或 LeRobot 校准文件需要检查时，建议优先使用本工具排查。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：上电、使能力矩和失能力矩都可能带来风险</strong>
    <p>在开启力矩或移动任意舵机前，请清空机械臂周围空间，并让手远离关节、齿轮、连杆和夹爪。点击失能电机后，机械臂会变软并可能下落，请务必用手托住机械臂。</p>
    <ul>
      <li>SO101 Pro 版本中，<strong>Leader Arm 使用 5V</strong>，<strong>Follower Arm 使用 12V</strong>，请勿接错电源。</li>
      <li>写入舵机 ID 时，如果总线上存在重复 ID，必须一次只连接一个舵机。</li>
      <li>单舵机滑条控制时请缓慢移动，不要直接拖到最小值或最大值。</li>
      <li>插拔舵机线束、控制板线缆或电源线前，请先断电。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="SO-ARM 舵机调试工具导航">
  <a href="#quick-path">调试流程</a>
  <a href="#overview">概览</a>
  <a href="#install">安装</a>
  <a href="#check-servos">检测舵机</a>
  <a href="#servo-id">舵机 ID</a>
  <a href="#neutral">中位值</a>
  <a href="#single-servo">单舵机控制</a>
  <a href="#calibration-files">校准文件</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>推荐调试流程</h2>
    <p>当 SO-ARM 主臂或从臂出现舵机无法识别、ID 重复、中位异常、整臂校准失败等问题时，建议按下面顺序排查。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Step 0</span><strong>安装并启动工具</strong><p>克隆 Seeed_RoboController，安装依赖，检查环境，然后启动 GUI。</p><em>必做</em></a>
    <a className="path-card" href="#check-servos"><span>Step 1</span><strong>检测舵机状态</strong><p>确认 1–6 号舵机是否都能被识别。缺失舵机通常与接线、电源或 ID 有关。</p><em>先读状态</em></a>
    <a className="path-card" href="#servo-id"><span>Step 2</span><strong>修复重复或错误 ID</strong><p>断开舵机级联线，一次只连接一个舵机，再重新写入正确 ID。</p><em>ID 修复</em></a>
    <a className="path-card" href="#neutral"><span>Step 3</span><strong>写入中位值</strong><p>将机械臂摆到正确中位姿态，把当前位置写入舵机中位值。</p><em>中位校准</em></a>
    <a className="path-card" href="#single-servo"><span>Step 4</span><strong>单独测试舵机</strong><p>开启力矩后缓慢移动单个舵机，检查位置、电压、温度、负载和状态。</p><em>运动测试</em></a>
    <a className="path-card" href="#calibration-files"><span>Step 5</span><strong>管理校准文件</strong><p>运行、修改、删除或新建 Leader / Follower 的 LeRobot 校准文件。</p><em>LeRobot</em></a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>这个工具可以做什么</h2>
    <p>该 GUI 工具适用于 SO-ARM100 / SO-ARM101 的装配、维护和故障排查，尤其适合在运行 <code>{`lerobot-setup-motors`}</code> 和 <code>{`lerobot-calibrate`}</code> 前后检查硬件状态。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>检测舵机状态</b><span>快速确认 1–6 号舵机是否被识别，判断总线通信是否正常。</span></div>
    <div className="module-summary-card"><b>修复舵机 ID</b><span>当舵机 ID 错误或重复时，可以通过一次只连接一个舵机的方式重新写入 ID。</span></div>
    <div className="module-summary-card"><b>写入中位值</b><span>将当前舵机位置写入为中位值，并验证机械臂是否回到预期中位姿态。</span></div>
    <div className="module-summary-card"><b>单舵机控制</b><span>开启力矩、缓慢移动舵机，并查看位置、电压、温度、速度、负载、电流和状态。</span></div>
    <div className="module-summary-card"><b>高级寄存器工具</b><span>必要时读取或写入寄存器、修改波特率，或恢复出厂设置。</span></div>
    <div className="module-summary-card"><b>校准文件管理</b><span>选择、运行、修改、删除或创建 Leader / Follower 的 LeRobot 校准文件。</span></div>
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 0</span>
    <div>
      <h2>安装并启动 Seeed_RoboController</h2>
      <p>该工具支持 Windows、Ubuntu 和 macOS。建议安装在 LeRobot 虚拟环境中，或者新建独立虚拟环境，避免污染系统 Python。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">0.1</span><strong>克隆仓库</strong><p>从 Seeed-Projects GitHub 仓库下载图形化调试工具。</p></div>
    <div className="step-card"><span className="step-mini">0.2</span><strong>安装依赖</strong><p>在 LeRobot 环境或单独虚拟环境中安装 Python 依赖。</p></div>
    <div className="step-card"><span className="step-mini">0.3</span><strong>检查环境</strong><p>运行环境检查，确认返回 <code>{`[OK] 环境检查通过`}</code>。</p></div>
    <div className="step-card"><span className="step-mini">0.4</span><strong>启动 GUI</strong><p>使用交互式端口选择启动，或在端口被占用时手动指定端口。</p></div>
  </div>

  <details className="content-details">
    <summary>安装命令</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController

# 建议在 LeRobot 虚拟环境中执行
pip install -r requirements.txt

# 环境检查，期望返回：[OK] 环境检查通过
python setup.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>启动 GUI</summary>
    <pre><code>{`# 交互式选择端口
python -m src.gui.factory_calibration_tool

# 可选：手动指定端口
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1`}</code></pre>
  </details>
</section>

<section id="check-servos" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>检测舵机是否被正确识别</h2>
      <p>首先检查 1–6 号舵机是否都能被识别。如果全部识别成功，通常说明舵机总线和基础通信正常。</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="舵机全部识别成功" />
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>正常情况</strong><span>1–6 号舵机均被识别，可以继续进行中位测试、单舵机控制或 LeRobot 校准文件管理。</span></div>
    <div className="notice-card warning"><strong>异常情况</strong><span>如果部分舵机未识别，先检查线束和电源，再关闭页面重新打开。如果仍然异常，通常是舵机 ID 重复或写错。</span></div>
  </div>

  <details className="content-details">
    <summary>示例：部分舵机未识别或识别异常</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="舵机缺失或未识别" />
    </div>
    <p>这种情况可能是误把整臂校准命令当成舵机 ID 配置命令执行，或多个舵机被写成了相同 ID。</p>
  </details>
</section>

<section id="servo-id" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>重要：写入 ID 时必须一次只连接一个舵机</strong>
      <p>SO-ARM 舵机共用同一条串口总线。如果多个相同 ID 的舵机同时在线，修改一个 ID 可能会把所有相同 ID 的舵机一起修改。因此修复 ID 时必须断开级联线，逐个连接并写入。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>修复重复或错误的舵机 ID</h2>
      <p>如果实际连接的是某个舵机，但 GUI 中显示为另一个编号，说明该舵机 ID 错误，需要点击当前识别到的编号并改回正确关节编号。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">2.1</span><strong>拆除舵机级联线</strong><p>断开所有舵机之间的线束，确保后续只有一个舵机接入驱动板。</p></div>
    <div className="step-card"><span className="step-mini">2.2</span><strong>单独连接一个舵机</strong><p>只连接当前需要修复 ID 的舵机，无需完全拆下机械臂。</p></div>
    <div className="step-card"><span className="step-mini">2.3</span><strong>对比实际舵机与识别 ID</strong><p>例如实际连接的是 6 号舵机，但 GUI 识别为 4 号舵机。</p></div>
    <div className="step-card"><span className="step-mini">2.4</span><strong>写入正确 ID</strong><p>点击 GUI 中识别到的舵机编号，将其 ID 改为正确的关节编号。</p></div>
    <div className="step-card"><span className="step-mini">2.5</span><strong>重复并重新接线</strong><p>对其他舵机重复操作，全部完成后再按顺序接回线束。</p></div>
  </div>

  <details className="content-details">
    <summary>Step 2.1：拆除舵机线束</summary>
    <p>依次拆除 6 号到 5 号、5 号到 4 号、4 号到 3 号、3 号到 2 号、2 号到 1 号，以及 1 号到控制板之间的连接线束。</p>
    <div className="image-grid">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="拆除 6 号和 5 号舵机线束" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" alt="拆除 5 号和 4 号舵机线束" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" alt="拆除 4 号和 3 号舵机线束" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" alt="拆除 3 号和 2 号舵机线束" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" alt="拆除 2 号和 1 号舵机线束" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="拆除 1 号舵机和控制板线束" />
    </div>
  </details>

  <details className="content-details">
    <summary>Step 2.2：单独连接舵机并重写 ID</summary>
    <p>下面以 6 号舵机为例。此时只将 6 号舵机接到驱动板，其他舵机不接入总线。</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="单独连接一个舵机到驱动板" />
    </div>
    <p>如果 GUI 中显示 4 号舵机，但实际连接的是 6 号舵机，则点击 4 号舵机并将其 ID 修改为 6。</p>
    <div className="image-grid two-col">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="舵机 ID 识别错误" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="在 GUI 中修改舵机 ID" />
    </div>
  </details>
</section>

<section id="neutral" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>中位写入前请确认姿态</strong>
      <p>中位值会影响后续整臂校准和遥操作效果。写入前请确认机械臂已经摆到正确中位姿态，并保持稳定。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>写入舵机中位值</h2>
      <p>中位值用于定义舵机的机械中心。若机械臂中位姿态明显不正确，可以通过本工具重新写入当前姿态为中位值。</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="SO-ARM 中位姿态参考" />
  </div>

  <details className="content-details">
    <summary>中位测试和中位校准步骤</summary>
    <ol>
      <li>点击 <strong>串口中位测试</strong>，查看机械臂是否回到上图所示的中位姿态。</li>
      <li>如果中位不正确，手动将机械臂移动到正确中位姿态。</li>
      <li>点击 <strong>串口中位校准</strong>，将当前位置写入为舵机中位值。</li>
      <li>点击 <strong>串口失能电机</strong> 后，机械臂会变软，请用手托住。</li>
    </ol>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="中位校准按钮" />
    </div>
  </details>
</section>

<section id="single-servo" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>单个舵机控制与状态检查</h2>
      <p>单舵机控制适合验证舵机方向、活动范围和基础健康状态。第一次测试时请小幅度、慢速移动。</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="舵机默认中位页面" />
  </div>

  <details className="content-details">
    <summary>单舵机控制操作</summary>
    <p>先开启力矩，可以一键开启所有舵机力矩，也可以只开启单个舵机力矩。之后缓慢拖动滑条，让舵机移动到对应位置。</p>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>不要直接拖到 0 或最大值</strong>
        <p>由于 3D 打印件和机械结构可能在边缘位置产生物理干涉，实际机械臂通常无法到达 GUI 滑条的最小值或最大值。</p>
      </div>
    </div>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" alt="开启力矩后单舵机控制" />
    </div>
  </details>

  <details className="content-details">
    <summary>状态字段说明</summary>
    <div className="api-grid">
      <div className="api-card"><b>Pos</b><code>{`Position`}</code><span>当前位置。</span></div>
      <div className="api-card"><b>V</b><code>{`Voltage`}</code><span>舵机电压。</span></div>
      <div className="api-card"><b>T</b><code>{`Temperature`}</code><span>舵机温度。</span></div>
      <div className="api-card"><b>Spd</b><code>{`Speed`}</code><span>当前速度。</span></div>
      <div className="api-card"><b>Load</b><code>{`Torque / Load`}</code><span>负载或力矩。</span></div>
      <div className="api-card"><b>Cur</b><code>{`Current`}</code><span>当前电流。</span></div>
      <div className="api-card"><b>Mov</b><code>{`Motion Status`}</code><span>运动状态。</span></div>
      <div className="api-card"><b>Status</b><code>{`Normal / Overcurrent / Overload`}</code><span>正常、过流或过载。</span></div>
    </div>
  </details>
</section>

<section id="advanced" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>高级工具</h2>
      <p>高级工具用于读取和写入寄存器、修改波特率，以及恢复出厂设置。只有在明确知道参数含义时再使用。</p>
    </div>
  </div>

  <details className="content-details">
    <summary>高级工具界面</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="高级工具界面" />
    </div>
    <ul>
      <li>读取对应寄存器地址数据。</li>
      <li>向对应寄存器写入数据。</li>
      <li>修改波特率。</li>
      <li>恢复出厂设置。</li>
    </ul>
  </details>
</section>

<section id="calibration-files" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 6</span>
    <div>
      <h2>管理和创建 LeRobot 校准文件</h2>
      <p>工具可以读取已有的 Leader / Follower 校准文件，也可以通过 GUI 校准向导创建新的整臂校准文件。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">6.1</span><strong>选择校准文件</strong><p>选择已有的从动臂或领导臂校准文件进行运行、修改或删除。</p></div>
    <div className="step-card"><span className="step-mini">6.2</span><strong>打开 GUI 校准向导</strong><p>选择对应机械臂和端口号，开始创建新的校准文件。</p></div>
    <div className="step-card"><span className="step-mini">6.3</span><strong>记录中位值</strong><p>将每个舵机放到参考姿态，依次记录 1–6 号舵机中位值。</p></div>
    <div className="step-card"><span className="step-mini">6.4</span><strong>记录最大 / 最小范围</strong><p>对每个舵机点击开始记录范围，旋转到最大和最小位置后停止记录。</p></div>
    <div className="step-card"><span className="step-mini">6.5</span><strong>命名并保存</strong><p>所有舵机都完成后，命名并保存新的校准文件。</p></div>
  </div>

  <details className="content-details">
    <summary>管理已有校准文件</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" alt="机械臂校准文件管理" />
    </div>
  </details>

  <details className="content-details">
    <summary>创建新的机械臂校准文件</summary>
    <p>点击 <strong>GUI 校准向导</strong>，选择对应机械臂和端口号。</p>
    <div className="image-grid">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" alt="GUI 校准向导" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" alt="最大最小中位校准" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" alt="记录中位值" />
    </div>
    <p>先记录每个舵机的中位值，再对每个舵机点击 <strong>开始记录范围</strong>，旋转舵机到最大和最小范围后点击 <strong>停止记录范围</strong>。全部完成后命名并保存校准文件。</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
    <p>舵机调试问题通常来自供电、接线、串口权限、重复 ID、中位值错误或 LeRobot 校准文件残留。</p>
  </div>

  <details className="content-details">
    <summary>1. 部分舵机未识别怎么办？</summary>
    <p>先检查电源和线束，再关闭 GUI 重新进入。如果仍然缺失，优先怀疑舵机 ID 重复或写错，需要按本文 Step 2 逐个重写 ID。</p>
  </details>

  <details className="content-details">
    <summary>2. 为什么写 ID 时要一次只连接一个舵机？</summary>
    <p>因为舵机共用串口总线。如果总线上有多个相同 ID，写入 ID 时可能把所有相同 ID 的舵机一起修改，导致问题扩大。</p>
  </details>

  <details className="content-details">
    <summary>3. 点击失能电机后机械臂为什么会下落？</summary>
    <p>失能后舵机不再输出力矩，机械臂会变软。请在点击失能前用手托住机械臂，避免突然下落损坏结构或夹伤手。</p>
  </details>

  <details className="content-details">
    <summary>4. 中位值写错会有什么影响？</summary>
    <p>中位值会影响机械臂姿态、整臂校准、遥操作和数据采集。如果中位明显错误，后续 LeRobot 校准和遥操作会出现姿态偏移。</p>
  </details>

  <details className="content-details">
    <summary>5. SO101 Pro 供电应该如何区分？</summary>
    <p>SO101 Pro 中 Leader Arm 使用 5V，Follower Arm 使用 12V。接错电源可能损坏电机，请在上电前再次确认电机版本和电源规格。</p>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>SO-ARM 学习路径</h2>
    <p>建议先完成 SO-ARM LeRobot 主教程，再根据需要进入舵机调试、仿真、强化学习和 VLA 模型训练。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/lerobot_so100m_new/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>SO-ARM LeRobot 快速开始</strong><span>完成硬件组装、环境安装、校准、遥操作、数据采集、训练和评估。</span></span>
      <span className="course-tag">主教程</span>
    </a>
    <a className="course-path-item active" href="/cn/lerobot_steering_gear_debugging_tool/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>舵机调试工具</strong><span>检查舵机状态、修复 ID、中位校准、单舵机控制和校准文件管理。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
    <a className="course-path-item" href="/cn/simulate_soarm101_by_leisaac/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>LeIsaac 仿真</strong><span>在仿真中理解机械臂模型、场景和任务，为 Sim2Real 做准备。</span></span>
      <span className="course-tag">仿真</span>
    </a>
    <a className="course-path-item" href="/cn/training_soarm101_policy_with_isaacLab/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Isaac Lab 强化学习</strong><span>学习仿真任务、奖励设计、策略训练和部署流程。</span></span>
      <span className="course-tag">RL</span>
    </a>
    <a className="course-path-item" href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>SO101 与 NVIDIA GR00T</strong><span>进入 VLA / 具身智能模型微调与 Jetson 部署流程。</span></span>
      <span className="course-tag">VLA</span>
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
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .step-card-grid, .module-summary-grid, .notice-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .notice-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .notice-card strong, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .step-card p, .module-summary-card span, .notice-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.notice-card.warning { border-color: rgba(245,158,11,0.34); background: linear-gradient(135deg, rgba(255,251,235,0.95), rgba(255,247,237,0.88)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "Collapse"; }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.image-wrap { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-grid img { width: 100%; max-width: 900px; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 10px 24px rgba(15,23,42,0.06); background: #fff; }
.image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem; margin: 1rem 0; }
.image-grid.two-col { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
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
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .notice-card.warning { background: linear-gradient(135deg, rgba(245,158,11,0.14), rgba(251,146,60,0.10)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } .step-title-row { display: grid; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .image-grid.two-col { grid-template-columns: 1fr; } }
`}</style>
