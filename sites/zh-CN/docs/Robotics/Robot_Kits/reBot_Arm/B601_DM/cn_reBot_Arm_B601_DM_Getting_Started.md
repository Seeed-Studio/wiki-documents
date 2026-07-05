---
description: 本指南将帮助您快速上手 reBot Arm B601-DM 机械臂，包括购买选项、组装、校准和软件配置。
title: reBot Arm B601-DM 快速入门
keywords:
  - reBot
  - B601-DM
  - 机械臂
  - 机器人
  - Lerobot
  - Pinocchio
  - 6 自由度
# image:
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: ZhuYaohui
createdAt: '2026-04-13'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/
---

# reBot Arm B601-DM 快速入门

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>从开箱到校准，让 reBot Arm B601-DM 安全动起来</h2>
    <p>本教程按照真实上手流程重新整理：先确认你购买的套件类型，再完成电源检查、机械臂组装、电机 ID 设置、零点校准和 MotorBridge 初体验。</p>
    <div className="hero-actions">
      <a href="#start-path">选择上手路线</a>
      <a href="#motorbridge">直接进入 MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推荐阅读方式</strong>
    <span>成品套件用户：跳过组装和电机 ID 设置，直接从 Step 3 开始。</span>
    <span>散件套件用户：请严格按照 Step 1 → Step 2 → Step 3 顺序操作。</span>
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


<div className="quick-note">
  <strong>安全提醒：</strong>机械臂调试涉及 24V 电源、电机使能和机械运动。请在稳定桌面上操作，保持至少 1 米安全距离，并在每次插拔电机或 XT30 接口前断电。
</div>

<nav className="doc-nav" aria-label="reBot B601-DM quick navigation">
  <a href="#start-path">上手路线</a>
  <a href="#power">电源检查</a>
  <a href="#assembly">Step 1 组装</a>
  <a href="#motor-id">Step 2 电机 ID</a>
  <a href="#motorbridge">Step 3 校准</a>
  <a href="#faq">常见问题</a>
</nav>



<section id="course-steps" className="section-card">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>本篇教程的推荐操作顺序</h2>
    <p>下面按照实际调试顺序整理为 Step 卡片。建议从前往后完成，尤其是涉及真实机械臂运动的步骤。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>确认套件类型</strong><p>成品套件可跳过组装和电机 ID，散件套件需按完整流程操作。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>检查电源与线束</strong><p>确认 24V 电源、输入电压拨码、XT30 接口和电机线连接。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>完成机械结构组装</strong><p>散件用户按照装配视频和结构件方向完成机械臂组装。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>写入电机 ID 与 Master ID</strong><p>逐个配置电机 CAN ID，确保关节编号和配置表一致。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>使用 MotorBridge 校准</strong><p>完成零点校准、基础运动测试和模型可视化。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>进入后续课程</strong><p>继续学习 LeRobot、Pinocchio、视觉夹取或 ROS2 集成。</p></div>
  </div>
</section>
<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>先确认你的套件类型</h2>
    <p>不同购买配置需要完成的步骤不同。先选择对应路线，可以避免重复操作或误操作。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>我购买的是已组装成品套件</b>
      <span>跳过 Step 1 和 Step 2，直接检查线束、电源，然后进入 Step 3 进行零点校准和基础体验。</span>
      <em>推荐从 Step 3 开始</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>我购买的是散件或需要自己组装</b>
      <span>请先完成机械结构组装，再逐个写入电机 CAN ID / Master ID，最后进行零点校准。</span>
      <em>按 Step 1 → 2 → 3</em>
    </a>
  </div>

  :::tip
  已验证虚拟机的性能不足以支撑 demo 运行且存在配置问题，建议优先使用 Ubuntu 物理机来控制机械臂。
  :::
</section>

<section className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>项目与购买选项</h2>
    <p>reBot Arm 项目已经在 <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a> 开源。本文将带领你完成 B601-DM 从组装到使用的基础流程。</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
  </div>

  <div className="badge-row">
    <span>Python 3.10+</span>
    <span>Linux / Ubuntu</span>
    <span>Pinocchio</span>
    <span>MotorBridge</span>
  </div>

  <div className="buy-box">
    <a href="https://detail.tmall.com/item.htm?abbucket=16&id=1042412233386&mi_id=0000hhNAEYgKZRabreGKmpExx8eS7wS_DqxaG6ePdGjrn4Q&ns=1&skuId=6073790464610&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%22ef0f0c248fcf6a14c9bd99035ac573f9%22%7D&xxc=taobaoSearch" target="_blank">购买 reBot Arm B601-DM</a>
  </div>

  | 配置 | 本体 | 夹爪 | 电机 | 结构件 | 适合用户 |
  |:---|:---:|:---:|:---:|:---:|:---|
  | **完整套装** | ✅ | ✅ | ✅ | ✅ | 想完整体验机械臂的用户 |
  | **仅夹爪** | ❌ | ✅ | ❌ | ❌ | 已有机械臂，只需要末端执行器 |
  | **仅本体（结构）** | ✅ | ❌ | ❌ | ✅ | 已有电机，想自行装配结构 |
  | **仅本体（电机）** | ✅ | ❌ | ✅ | ❌ | 需要电机版本机械臂本体的用户 |
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>上电前安全确认</strong>
    <p>
      请确认电源规格、输入电压拨码、XT30 接口和电机线连接正确。
      插拔任何电源或电机接口前必须断电，并清空机械臂工作空间 <strong>1 米范围</strong>。
    </p>
  </div>
</div>

<section id="power" className="section-card warning-section">
  <div className="section-title">
    <span>Before Power On</span>
    <h2>关于电源：上电前必须检查</h2>
    <p>机械臂默认发货时不一定包含电源。请使用正规品牌 24V 电源，并根据所在地区电压设置电源侧面拨码。</p>
  </div>

  :::danger
  切勿使用杂牌或不安全渠道购买的电源。请在接线、插拔 XT30 或电机线之前断开电源。
  :::

  <div className="power-grid">
    <div>
      <h4>220V 地区</h4>
      <p>请将电源侧面拨码调至 <strong>230V</strong>。</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="230V switch" />
    </div>
    <div>
      <h4>110V 地区</h4>
      <p>请将电源侧面拨码调至 <strong>115V</strong>。</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="115V switch" />
    </div>
  </div>

  <p>你可以选购我们开源的 <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html" target="_blank">24V 14.6A MeanWell 电源适配器</a>，也可以参考 GitHub 仓库中的 BOM 自行组装电源外壳。自行组装只推荐有相关电源经验的开发者使用。</p>

  <details className="content-details">
    <summary>查看电源外壳组装参考视频</summary>
    <div className="video-container">
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116798867506587&bvid=BV1mLjm6xEzn&cid=39341657580&p=1" title="Power supply assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>组装机械臂</h2>
      <p>仅散件用户需要完成。已组装成品套件用户可以跳过本步骤。</p>
    </div>
  </div>

  :::tip
  如果你购买的是组装好的版本，请跳过此步骤，直接前往 <a href="#motorbridge">Step 3：校准机械臂及上手初体验</a>。
  :::

  <div className="checklist-grid">
    <div><strong>耐心核对</strong><span>套件包含大量螺丝与结构件，部分零件外观相近，请确认规格和方向后再固定。</span></div>
    <div><strong>工具建议</strong><span>建议准备电动螺丝刀，并将扭力调至中低档 3~6 kgf.cm。</span></div>
    <div><strong>安全操作</strong><span>组装时注意夹手和砸伤风险，儿童需在家长或监护人陪同下完成。</span></div>
  </div>

  :::warning
  组装视频中 5 号电机和 6 号电机之间的 D4 × 7 不需要安装。若购买的是散件版本，7 颗 D4 × 7 已足够完成组装。
  :::

  <details className="content-details" open>
    <summary>展开组装视频</summary>
    <div className="video-container">
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116418964097678&bvid=BV1zPdzBEE1R&cid=37577427530&p=1" title="reBot Arm assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
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

<section id="motor-id" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>写入电机 ID 及零点</h2>
      <p>仅散件用户需要完成。该步骤会配置每个关节电机对应的 CAN ID 与 Master ID。</p>
    </div>
  </div>

  :::tip
  如果你购买的是组装好的版本，请跳过此步骤，直接前往 <a href="#motorbridge">Step 3</a>。
  :::

  <div className="danger-list">
    <strong>电机复位前须知</strong>
    <ul>
      <li>自备 2 个工装夹具，尺寸建议 ≥ 3 英寸。</li>
      <li>使用正规品牌 24V 15A、XT30 输出开关电源。</li>
      <li>调试与操作过程中，请保持至少 1 米安全距离。</li>
      <li>禁止电机热插拔；插拔 XT30 2+2 接口前必须断开电源。</li>
      <li>禁止电机超载、超速运行；启动前检查线路接线与紧固件。</li>
      <li>请设置合理的程序参数与急停功能，防止设备失控。</li>
    </ul>
  </div>

  <details className="content-details">
    <summary>AI Agent 辅助提示词</summary>

    :::warning
    该部分内容处于测试阶段。使用过程中请注意安全操作，如果 AI 给出的提示与本文内容不符，请以本文为准，并联系工程师获取帮助。
    :::

    将下方提示词复制给你的 AI 助手：

    ```text
    请参考 AGENTS.md（https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/zh/AGENTS.md）中的流程，帮助用户完成新机械臂的初始化。
    ```
  </details>

  <details className="content-details" open>
    <summary>准备清单</summary>

    <div className="two-col">
      <div>
        <h4>硬件设备</h4>
        <ul>
          <li><a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">reBot Arm B601 DM 机械臂 × 1</a></li>
          <li><a href="https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html" target="_blank">USB-CAN 转接板 × 1</a></li>
          <li><a href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html" target="_blank">信号电源隔离板 × 1</a></li>
          <li>木工夹具 × 2</li>
          <li>USB-C 数据线 × 1</li>
          <li><a href="https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html" target="_blank">24V 15A 电源 × 1</a></li>
        </ul>
      </div>
      <div>
        <h4>电脑与软件</h4>
        <ul>
          <li>双系统个人电脑：Windows + Ubuntu，或 macOS。</li>
          <li><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool_v2.1.6.8.zip" target="_blank">DM_Tools_v.2.1.6.8.exe</a>，仅支持 Windows。</li>
        </ul>
      </div>
    </div>
  </details>

  <h3>电机 ID 对照表</h3>

  | 电机编号 | CAN ID | Master ID |
  |:---|:---:|:---:|
  | 1 号电机 | 0x01 | 0x11 |
  | 2 号电机 | 0x02 | 0x12 |
  | 3 号电机 | 0x03 | 0x13 |
  | 4 号电机 | 0x04 | 0x14 |
  | 5 号电机 | 0x05 | 0x15 |
  | 6 号电机 | 0x06 | 0x16 |
  | 7 号电机 | 0x07 | 0x17 |

  :::danger
  下面以 1 号电机作为操作示例。每个关节电机的 CAN ID 与 Master ID 都必须按照上表设置正确。
  :::

  <details className="content-details" open>
    <summary>DM_Tools 操作流程</summary>

    1. 打开 DM_Tools 上位机软件，选择 USB 对应的 COM 串口号，波特率设置为 `921600`。连接成功后，`串口` 界面会有信息打印。

    <div className="image-frame"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_connect_cn.png" alt="DM Tools connect" /></div>

    2. 使用 3-pin 线将 1 号电机与 USB-CAN 转接板连接。
    3. 进入 `参数设置` 界面，点击 `读参数`，将 `CAN ID` 设置为 `0x01`，`Master ID` 设置为 `0x11`。
    4. 设置完成后点击 `写参数` 完成参数写入。

    <div className="image-frame"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_id_set_cn.png" alt="DM Tools set motor id" /></div>

    5. 进入 `调试` 界面，确认 `CAN ID` 与 `Master ID` 设置无误后点击 `电机使能`。此时电机指示灯绿灯常亮，表示进入使能状态。

    <div className="image-frame"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_enable_cn.png" alt="DM Tools enable motor" /></div>

    :::tip
    测试完成后，请点击 `电机失能` 退出使能状态。
    :::
  </details>

  <details className="content-details">
    <summary>查看各电机 3-pin 线连接位置与使能效果</summary>

    | 1 号电机接线图 | 2 号电机接线图 | 3 号电机接线图 | 4 号电机接线图 | 5 号电机接线图 | 6 号电机接线图 | 7 号电机接线图 |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" /> |

    | 1 号电机使能效果 | 2 号电机使能效果 | 3 号电机使能效果 | 4 号电机使能效果 | 5 号电机使能效果 | 6 号电机使能效果 | 7 号电机使能效果 |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" /> |
  </details>

  <details className="content-details">
    <summary>查看电机 ID 设置参考视频</summary>
    <div className="video-container">
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775862&bvid=BV1r9d1BuESN&cid=37680973414&p=1" title="Motor ID setup video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
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

<section id="motorbridge" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>校准机械臂及上手初体验</h2>
      <p>使用 MotorBridge 完成零点校准、基础控制和模型可视化。</p>
    </div>
  </div>

  :::tip
  如果你购买的是组装好的版本，担心运输过程中线束磨损，关节 1-2 之间线束默认可能没有安装。开箱后请将箱内一侧弯头、一侧直头的线束连接到关节 1-2 上。
  :::

  <details className="content-details" open>
    <summary>一号电机线束卡扣</summary>

    一号电机线束长期拉扯会磨损电机接头，造成电路接触不良。打印下方配件可降低风险。

    | 配件名称 | 示意图 | 文件名称 | 材料 | 数量 | 打印参数说明 |
    | ---- | ---- | ---- | ---- | ---- | ---- |
    | 一号电机双侧线束卡扣 | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.jpg" width="100" /> | [3D File](DM_Motor1_wiring_harness_clip.stp) | 拓竹黑色 PLA | 2 件 | 0.4 mm 喷嘴，0.2 mm 层厚，填充率 30% |
  </details>

  <details className="content-details">
    <summary>查看零点校准与上手体验视频</summary>
    <div className="video-container">
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775355&bvid=BV1r9d1BuE6w&cid=37680974119&p=1" title="Calibration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <div className="feature-grid">
    <div><strong>统一电机平台</strong><span>MotorBridge 支持达妙、RobStride、高擎、脉塔、Hexfellow 等多款电机。</span></div>
    <div><strong>reBot 专属功能</strong><span>支持一键零点校准、参数写入、拖拽式电机控制和内置模型可视化。</span></div>
    <div><strong>跨平台</strong><span>兼容 Windows、Ubuntu、macOS。</span></div>
  </div>

  <h3>步骤 1：安装 Miniforge</h3>

  Ubuntu / Jetson / Raspberry Pi：

  ```bash
  wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
  bash Miniforge3-$(uname)-$(uname -m).sh
  ```

  macOS：

  ```bash
  curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
  bash Miniforge3-MacOSX-$(uname -m).sh
  ```

  Windows：在浏览器中打开 Miniforge Release 页面，下载最新版本的 `Miniforge3-Windows-x86_64.exe`。

  ```text
  https://github.com/conda-forge/miniforge/releases
  ```

  <h3>步骤 2：环境配置</h3>

  创建 Python 3.12 虚拟环境：

  ```bash
  conda create -y -n rebot python=3.12
  ```

  激活虚拟环境。每次打开终端使用 reBot 相关功能时，都需要重新执行该命令：

  ```bash
  conda activate rebot
  ```

  <h3>步骤 3：安装 MotorBridge</h3>

  :::tip
  macOS 用户注意：如果遥操帧率偏低，可能是沁恒（WCH）CH34x 驱动版本过旧导致。macOS 10.14 及以上版本已内置 AppleUSBCHC0M 驱动，可以先卸载旧版驱动，改用系统内置驱动。
  :::

  ```bash
  pip install motorbridge
  ```

  <h3>步骤 4：连接机械臂</h3>

  使用 USB 数据线将机械臂连接至电脑并接通电源后，需要为串口配置权限。Windows 系统不需要配置权限，可以跳过此步骤。

  ```bash
  sudo chmod 666 /dev/ttyACM*
  ```

  <h3>步骤 5：启动 MotorBridge</h3>

  在浏览器中打开地址：

  ```text
  https://motorbridge.github.io/motorbridge-studio/
  ```

  点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中运行。

  以 Windows 系统为例：

  ```bash
  motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
  ```

  <div className="image-frame"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" alt="MotorBridge help" /></div>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
  </div>

  <details className="content-details" open>
    <summary>电机一启动就有很大声的异响？</summary>
    <p>可能是在写入 ID 的过程中不小心点了参数标定，导致电机原本出厂的转动惯量等参数被破坏。</p>
    <p>可以用 <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe" target="_blank">DM_Tools_v.1.8.0.1.exe</a> 将同型号正常电机参数导出，再导入异常电机，修改对应 CAN ID 后点击写入参数，然后继续执行零点校准流程。</p>
    <div className="faq-images">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_zh.png" alt="DM tools parameter issue" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_zh.png" alt="DM tools fix parameter" />
    </div>
    <p><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt" target="_blank">DM4310 默认参数</a> · <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt" target="_blank">DM4340P 默认参数</a></p>
  </details>

  <details className="content-details">
    <summary>电机所有 CAN ID 变成了一样？</summary>
    <p>在使用 DM_Tools_v.1.8.0.1.exe 校准零点时，请勿点击 CAN ID 旁边的读取和设置按钮。调试页面通过 CAN 通讯链路完成，如果误点设置，可能会把 CAN Bus 上所有电机设置成同一个 CAN ID。</p>
  </details>
</section>



<section className="section-card course-path-section">
  <div className="section-title">
    <span>课程导链</span>
    <h2>reBot B601-DM 系列课程跳转</h2>
    <p>建议按照 Robotics Page 的学习顺序阅读：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。也可以通过下面的卡片直接跳转到任意课程。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item active" href="/cn/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>快速入门</strong><span>完成开箱、供电检查、组装、电机 ID、零点校准和基础运动测试。</span></span>
      <span className="course-tag">当前文章</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot 遥操作与数据采集</strong><span>完成主从遥操作、相机接入、数据集采集、训练和策略评估。</span></span>
      <span className="course-tag">Data</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 运动学可视化</strong><span>理解模型、坐标系、FK / IK、轨迹规划、MeshCat 仿真和重力补偿。</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>视觉夹取 Demo</strong><span>结合 RGB-D 感知、YOLO / GraspNet、手眼标定和真实机械臂抓取。</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_ros2_integration/">
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
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "收起"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page :global(table) { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }

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


/* Course navigation and polished step cards */
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, var(--border, rgba(148,163,184,0.28)));
  background: var(--rb-surface, var(--panel-bg, #fff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15,23,42,0.05);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.course-path-item:hover,
.course-step:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.course-path-item.active,
.course-step.active { border-color: rgba(37,99,235,0.50); background: linear-gradient(135deg, rgba(239,246,255,0.94), rgba(240,253,250,0.80)); }
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary, var(--primary, #2563eb));
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}
.course-path-copy strong,
.course-step strong { display: block; color: var(--rb-text, var(--text-main, #111827)); font-size: 1rem; margin-bottom: 0.25rem; }
.course-path-copy span,
.course-step small { display: block; color: var(--rb-muted, var(--text-muted, #64748b)); line-height: 1.6; }
.course-tag,
.course-step em { justify-self: end; white-space: nowrap; padding: 0.35rem 0.7rem; border-radius: 999px; color: var(--rb-primary, var(--primary, #2563eb)); background: var(--rb-primary-soft, var(--primary-soft, #eff6ff)); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.step-card-grid,
.module-summary-grid,
.quick-step-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; margin: 1rem 0 1.35rem; }
.step-card,
.module-summary-card,
.path-card,
.info-card,
.command-card,
.check-card,
.tip-card,
.warning-card,
.danger-card,
.spec-card {
  position: relative;
  padding: 1rem 1.05rem;
  border: 1px solid var(--rb-border, var(--border, rgba(148,163,184,0.28)));
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, var(--panel-bg, #fff)), var(--rb-surface-soft, var(--panel-bg-soft, #f8fafc)));
  box-shadow: 0 10px 24px rgba(15,23,42,0.05);
}
.step-mini,
.step-card > span:first-child,
.path-card > span:first-child,
.step-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary, var(--primary, #2563eb)), var(--rb-accent, var(--accent, #14b8a6)));
  font-weight: 900;
  font-size: 0.86rem;
}
.path-card b,
.path-card strong,
.step-card strong,
.module-summary-card b,
.module-summary-card strong { display: block; color: var(--rb-text, var(--text-main, #111827)); margin-bottom: 0.35rem; }
.path-card p,
.path-card small,
.path-card span:not(:first-child),
.step-card p,
.step-card span:not(:first-child),
.module-summary-card span { display: block; margin: 0; color: var(--rb-muted, var(--text-muted, #64748b)); line-height: 1.65; }
.path-card em { display: inline-flex; width: fit-content; margin-top: 0.75rem; padding: 0.32rem 0.65rem; border-radius: 999px; color: var(--rb-primary, var(--primary, #2563eb)); background: var(--rb-primary-soft, var(--primary-soft, #eff6ff)); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.95rem; align-items: start; margin-bottom: 1rem; }
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .path-card,
html[data-theme='dark'] .info-card,
html[data-theme='dark'] .command-card,
html[data-theme='dark'] .check-card,
html[data-theme='dark'] .tip-card,
html[data-theme='dark'] .warning-card,
html[data-theme='dark'] .danger-card,
html[data-theme='dark'] .spec-card { background: rgba(15,23,42,0.72); border-color: rgba(148,163,184,0.22); }
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
  .step-title-row { grid-template-columns: 1fr; }
}

`}</style>
