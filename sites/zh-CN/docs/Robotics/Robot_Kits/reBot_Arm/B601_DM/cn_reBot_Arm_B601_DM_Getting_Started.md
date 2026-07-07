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
  date: 2026-04-13
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-04-13'
url: https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';


# reBot Arm B601-DM 快速入门

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>从开箱、组装到校准，让 reBot Arm B601-DM 安全动起来</h2>
    <p>
      本指南将帮助您快速上手 reBot Arm B601-DM 机械臂，包括产品介绍、电源检查、机械结构组装、
      电机 ID 与 Master ID 写入、零点校准、MotorBridge 软件配置，以及常见问题处理。
    </p>
    <div className="hero-actions">
      <a href="#start-path">选择上手路线</a>
      <a href="#power">检查电源</a>
      <a href="#motorbridge">直接进入 MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推荐阅读方式</strong>
    <span>成品套件用户：跳过机械组装和电机 ID 写入，直接从 Step 3 开始。</span>
    <span>散件套件用户：请严格按照 Step 1 → Step 2 → Step 3 顺序完成。</span>
    <span>推荐使用 Ubuntu 物理机控制机械臂，避免虚拟机 USB 映射和性能问题。</span>
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
      <li>运行校准、遥操作、IK 控制、轨迹控制、重力补偿、MoveIt、LeRobot 数据采集或视觉抓取 Demo 前，请确保机械臂已固定牢靠。</li>
      <li>请保持至少 1 米安全距离，并确保周围人员了解机械臂可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN / PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>


{/* The following Markdown headings are intentionally kept outside the visual cards so Docusaurus can generate the right-side table of contents. */}

<nav className="doc-nav" aria-label="reBot B601-DM quick navigation">
  <a href="#start-path">上手路线</a>
  <a href="#overview">产品介绍</a>
  <a href="#power">电源检查</a>
  <a href="#assembly">Step 1 组装</a>
  <a href="#motor-id">Step 2 电机 ID</a>
  <a href="#motorbridge">Step 3 校准</a>
  <a href="#faq">常见问题</a>
</nav>


## 推荐操作顺序

<section id="course-steps" className="section-card">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>本篇教程的推荐操作顺序</h2>
    <p>下面按照真实上手流程整理为 Step 卡片。建议从前往后完成，尤其是涉及电源、电机使能和真实机械臂运动的步骤。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>确认套件类型</strong><p>成品套件可跳过组装和电机 ID 写入；散件套件需按完整流程操作。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>检查电源与线束</strong><p>确认 24V 电源、输入电压拨码、XT30 接口、电机线和 USB-CAN 转接板连接。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>完成机械结构组装</strong><p>散件用户按照装配视频和结构件方向完成机械臂组装。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>写入电机 ID 与 Master ID</strong><p>逐个配置电机 CAN ID 和 Master ID，确保关节编号和配置表一致。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>使用 MotorBridge 校准</strong><p>完成零点校准、基础运动测试和模型可视化。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>进入后续课程</strong><p>继续学习 LeRobot、Pinocchio、视觉夹取或 ROS2 集成。</p></div>
  </div>
</section>


## 上手路线

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>先确认你的套件类型</h2>
    <p>不同购买配置需要完成的步骤不同。先选择对应路线，可以避免重复操作或误操作。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>我购买的是已组装成品套件</b>
      <span>请直接跳到文章末尾第三步的教程视频，按照视频教程使用，无需重新给电机写入 ID 和校准零位。</span>
      <em>推荐从 Step 3 开始</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>我购买的是散件或需要自己组装</b>
      <span>请先完成机械结构组装，再逐个写入电机 CAN ID / Master ID，最后进行零点校准和 MotorBridge 初体验。</span>
      <em>按 Step 1 → Step 2 → Step 3</em>
    </a>
  </div>

  :::tip
  已验证虚拟机的性能不足以支撑 demo 运行且存在配置问题，建议优先使用 Ubuntu 物理机来控制机械臂。
  :::
</section>


## 项目介绍

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>项目介绍</h2>
    <p>
      reBot Arm 项目已经在 <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a> 上开源。
      本文将带领你快速入门 B601-DM，从组装到使用。
    </p>
  </div>
<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601" />
</p>

  <p align="center">
    <a href="./LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
  </p>

  <p align="center">
    <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
  </p>

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


  <div className="badge-row">
    <span>6-DOF</span>
    <span>MotorBridge</span>
    <span>Python 3.10+</span>
    <span>Linux / Ubuntu</span>
    <span>Pinocchio</span>
  </div>

</section>


## 电源检查

<section id="power" className="section-card warning-section">
  <div className="section-title">
    <span>Before Power On</span>
    <h2>关于电源：上电前必须检查</h2>
    <p>机械臂在发货时并未配备电源 / 默认情况下不带电源。请使用正规品牌 24V 电源，并根据所在地区电压设置电源侧面拨码。</p>
  </div>

  :::danger
  切勿使用杂牌或不安全渠道购买的电源。若因电源选择不当造成风险，后果需由个人承担。插拔 XT30 或电机线之前必须断开电源。
  :::

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>上电前安全确认</strong>
      <p>
        请确认电源规格、输入电压拨码、XT30 接口和电机线连接正确。
        插拔任何电源或电机接口前必须断电，并清空机械臂工作空间  1 米范围。
      </p>
    </div>
  </div>

  <h3>1. 选择 24V 电源并设置输入电压</h3>

  <p>
    您可自行连接电池，或选购我们开源的
    <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html" target="_blank">24V 14.6A MeanWell 电源适配器</a>，
    也可以在
    <a href="https://item.jd.com/10161209537214.html?pcdk=PnAKnVITa6CLRCfJa1bRuUjjKE-kqYkXpDPGKHbwO4IuChTalUbxo5XvL-gKQSl9.rQ4a.tlbT&spmTag=YTAyNDAuYjAwMjQ5My5jMDAwMDQwMjcuMSUyM3NrdV9jYXJkJTQwMTc4MTYxMTAyODQwNiUyMzE3NTAwNjczMzc4MzgxNzg2NTc2MTE1JTIzMjAzMTA0NjkzMw#switch-sku" target="_blank">京东购买</a>。
    如果你的家庭电压是 220V，请把电源侧面拨码调至 230V；如果你的家庭电压是 110V，请把电源拨码调至 115V。
  </p>

  | **220V** | **110V** |
  |:---:|:---:|
  | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |

  <div className="image-frame">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" alt="24V power adapter" />
  </div>

  <h3>2. 自行组装 24V 14.6A MeanWell 电源外壳</h3>

  <p>
    你也可以选择我们开源的 24V 14.6A MeanWell 电源外壳进行自组装，文字步骤和 BOM 已在
    <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/readme_zh.md/#%E5%85%B3%E4%BA%8E%E7%94%B5%E6%BA%90" target="_blank">GitHub 仓库</a>
    中开源。该方式只推荐有相关电源组装经验的开发者使用。
  </p>

  <details className="content-details">
    <summary>查看电源外壳组装参考视频</summary>
    <div className="video-container">
      <iframe loading="lazy" width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116798867506587&bvid=BV1mLjm6xEzn&cid=39341657580&p=1&autoplay=0&muted=1&mute=1&danmaku=0" title="Power supply assembly video" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>


## Step 1：组装机械臂

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>组装机械臂</h2>
      <p>仅散件用户需要完成。已组装成品套件用户可以跳过本步骤，直接进入 Step 3。</p>
    </div>
  </div>

  :::tip
  如果你购买的是组装好的版本，请跳过此步骤，直接前往 <a href="#motorbridge">Step 3：校准机械臂及上手初体验</a>。
  :::

  <div className="checklist-grid">
    <div><strong>耐心核对</strong><span>本套件包含大量螺丝与结构件，部分零件外观相近。请确认螺丝规格、零件型号和安装方向后再固定。</span></div>
    <div><strong>注意零件版本</strong><span>视频为四月初拍摄，后续可能会有零件微调和改动，但不影响跟随视频安装，最终零件以出货为准。</span></div>
    <div><strong>工具建议</strong><span>建议准备电动螺丝刀，并将扭力调至中低档 3~6 kgf.cm，避免扭力过大导致滑丝。</span></div>
    <div><strong>安全操作</strong><span>组装过程中请注意夹手、砸伤风险，儿童需在家长或监护人陪同下完成。</span></div>
  </div>

  <div className="callout warning">
    <strong>防松螺丝提醒：</strong>
    <p>正式出货螺丝涂了防松胶。若出现滑丝风险，请立刻更换螺丝或重新对准后再拧。防松螺丝滑丝后可能无法用滑丝取出器取出，严重时会报废整个零件。</p>
  </div>

  :::tip
  提醒：组装视频中 5 号电机和 6 号电机之间的 D4 × 7 不需要进行安装，是视频介绍错误。如果您购买的是散件版本的 reBot Arm B601-DM，7 颗 D4 × 7 足够完成组装。
  :::

  <details className="content-details">
    <summary>展开组装视频</summary>
    <div className="video-container">
      <iframe loading="lazy" width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116418964097678&bvid=BV1zPdzBEE1R&cid=37577427530&p=1&autoplay=0&muted=1&mute=1&danmaku=0" title="reBot Arm B601-DM assembly video" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>


## Step 2：写入电机 ID 及零点

<section id="motor-id" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>写入电机 ID 及零点</h2>
      <p>仅散件用户需要完成。该步骤会配置每个关节电机对应的 CAN ID 与 Master ID。</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>电机参数配置前安全确认</strong>
      <p>调试与操作过程中请保持至少 1 米安全距离。禁止电机热插拔；插拔 XT30 2+2 接口前必须断开电源。</p>
    </div>
  </div>

  <details className="content-details">
    <summary>AI Agent 辅助提示词</summary>

    :::tip
    该部分内容处于测试阶段。使用过程中请注意安全操作，如果 AI 给出的提示与本文内容不符，请以本文为准，并向我们的工程师取得帮助。
    :::

    尝试让 AI Agent 协助你完成这一过程。将下方提示词复制给你的 AI 助手：

<CodeBlock language="text">
功能还在完善
</CodeBlock>
  </details>

  <details className="content-details">
    <summary>电机复位前须知</summary>

    在进行电机参数配置前，请留意以下准备事项与安全规范：

    - 自备 2 个工装夹具（尺寸 ≥ 3 英寸）以及一台 24V 15A、XT30 输出开关电源（请选用正规品牌产品，严禁使用劣质电源）。
    - 调试与操作过程中，请保持至少 1 米安全距离。
    - 禁止电机热插拔；插拔 XT30 2+2 接口前必须断开电源。
    - 禁止电机超载、超速运行；设备启动前检查线路接线与紧固件；请勿在潮湿、高温、多尘环境下使用。
    - 需设置合理的程序参数与急停功能，防止设备失控。
    - **请严格遵守以上规范。因违规操作、人为失误造成的一切风险与损失，卖家不承担任何责任。**
  </details>

  <details className="content-details">
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
          <li><a href="https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html" target="_blank">24V 15A 电源（XT30 输出）× 1</a></li>
          <li><a href="https://www.seeedstudio.com/reServer-AC-US-p-5052.html" target="_blank">美规电源线</a> / <a href="https://www.seeedstudio.com/reServer-AC-EU-p-5051.html" target="_blank">欧规电源线</a></li>
        </ul>
      </div>
      <div>
        <h4>电脑与软件</h4>
        <ul>
          <li>双系统个人电脑（Windows + Ubuntu / macOS）。</li>
          <li><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool_v2.1.6.8.zip" target="_blank">DM_Tools_v.2.1.6.8.exe</a>，仅支持 Windows 系统。</li>
        </ul>
      </div>
    </div>

    <!-- - [DM_Tools_v.1.8.0.1.exe（仅支持 Windows 系统）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe) -->
  </details>

  <h3>写入电机 ID 并测试使能</h3>

  <p>按照表格中的参数设置各关节电机对应的 CAN ID 与 Master ID。</p>

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
  下面以 1 号电机作为操作示例。注意各关节电机的 CAN ID 与 Master ID 一定要根据上面的表格设置正确参数。
  :::

  <details className="content-details">
    <summary>DM_Tools 操作流程</summary>

    1. 打开 DM_Tools 上位机软件，选择 USB 对应的 COM 串口号，波特率设置为 `921600`。连接成功后，`串口` 界面会有信息打印。

    <div className="image-frame">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_connect_cn.png" alt="DM Tools connect" />
    </div>

    2. 使用 3-pin 线将 1 号电机与 USB-CAN 转接板连接。
    3. 连接完成后进入 `参数设置界面`，点击 `读参数`，将 `CAN ID` 设置为 `0x01`，`Master ID` 设置为 `0x11`。
    4. 设置完成后点击 `写参数` 完成参数写入。

    <div className="image-frame">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_id_set_cn.png" alt="DM Tools set motor id" />
    </div>

    5. 进入到 `调试` 界面，确保 `CAN ID` 与 `Master ID` 设置无误后点击 `电机使能`。此时电机指示灯绿灯常亮，表示进入使能状态，1 号电机测试完成。

    <div className="image-frame">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_enable_cn.png" alt="DM Tools enable motor" />
    </div>

    :::tip
    测试完成后注意点击 `电机失能` 退出使能状态。
    :::
  </details>

  <details className="content-details">
    <summary>查看各电机 3-pin 线连接位置与使能效果</summary>

    **各电机编号时 3-pin 线连接位置与使能效果**

    | **1 号电机接线图** | **2 号电机接线图** | **3 号电机接线图** | **4 号电机接线图** | **5 号电机接线图** | **6 号电机接线图** | **7 号电机接线图** |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" width="4000" /> |

    | **1 号电机使能效果** | **2 号电机使能效果** | **3 号电机使能效果** | **4 号电机使能效果** | **5 号电机使能效果** | **6 号电机使能效果** | **7 号电机使能效果** |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" width="4000" /> |
  </details>

  <details className="content-details">
    <summary>查看电机 ID 设置参考视频</summary>
    <div className="video-container">
      <iframe loading="lazy" width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775862&bvid=BV1r9d1BuESN&cid=37680973414&p=1&autoplay=0&muted=1&mute=1&danmaku=0" title="Motor ID setup video" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>


## Step 3：校准机械臂及上手初体验

<section id="motorbridge" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>校准机械臂及上手初体验</h2>
      <p>跟随视频完成机械臂组装、零点初始化和电机 ID 配置后，即可开始体验 MotorBridge 平台和后续工具。</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>运行前安全确认</strong>
      <p>
        使用 MotorBridge 控制机械臂运动之前，需要重新设置一次零点。请清空机械臂工作空间 1 米范围内 的贵重物品和无关人员。
      </p>
    </div>
  </div>

  <details className="content-details">
    <summary>查看校准机械臂及上手初体验视频</summary>
    <div className="video-container">
      <iframe loading="lazy" width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775355&bvid=BV1r9d1BuE6w&cid=37680974119&p=1&autoplay=0&muted=1&mute=1&danmaku=0" title="MotorBridge getting started video" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <div className="feature-grid">
    <div><strong>MotorBridge 平台</strong><span>一站式电机与机械臂调试平台，支持电机种类持续扩充。</span></div>
    <div><strong>多电机支持</strong><span>涵盖达妙电机、Robstride 电机、高擎电机、脉塔电机、Hexfellow 等多款电机。</span></div>
    <div><strong>reBot 机械臂适配</strong><span>支持一键零点校准、参数写入、拖拽式电机控制和内置模型可视化。</span></div>
    <div><strong>跨平台</strong><span>兼容 Windows、Ubuntu、macOS 操作系统，并提供功能一致的 Python SDK。</span></div>
  </div>

  
### 安装 Miniforge

<section id="miniforge" className="section-card">
    <div className="section-title">
      <span>MotorBridge Setup</span>
      <h2>步骤 1：安装 Miniforge</h2>
      <p>支持 Windows、Ubuntu、macOS、Jetson 和树莓派。推荐创建独立虚拟环境，避免其他环境包干扰导致 Demo 运行失败。</p>
    </div>

    <details className="content-details">
      <summary>Ubuntu / Jetson / 树莓派</summary>

<CodeBlock language="bash">
{`wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh`}
</CodeBlock>
    </details>

    <details className="content-details">
      <summary>macOS</summary>

<CodeBlock language="bash">
{`curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh`}
</CodeBlock>
    </details>

    <details className="content-details">
      <summary>Windows</summary>

      在浏览器中打开 Miniforge 的 Release 页面，找到最新版本的 `Miniforge3-Windows-x86_64.exe` 点击下载：

<CodeBlock language="text">
{`https://github.com/conda-forge/miniforge/releases`}
</CodeBlock>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>MotorBridge Setup</span>
      <h2>步骤 2：环境配置</h2>
    </div>

    创建 Python 3.12 版本虚拟环境：

<CodeBlock language="bash">
{`conda create -y -n rebot python=3.12`}
</CodeBlock>

    随后激活虚拟环境。**每次打开终端使用 reBot 相关功能时，都需要重新执行该激活命令**：

<CodeBlock language="bash">
{`conda activate rebot`}
</CodeBlock>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>MotorBridge Setup</span>
      <h2>步骤 3：安装 motorbridge</h2>
    </div>

    :::tip
    提示 macOS 用户注意：如果您在 macOS 上遥操时帧率偏低，可能是沁恒（WCH）CH34x 驱动版本过旧导致。对于 **macOS 10.14 及以上版本**，系统已内置 AppleUSBCHC0M 驱动，您可以先卸载旧版驱动，改用 macOS 内置驱动，通常能有效提升帧率。
    :::

    激活 reBot 虚拟环境后，执行以下命令安装 motorbridge：

<CodeBlock language="bash">
{`pip install motorbridge`}
</CodeBlock>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>MotorBridge Setup</span>
      <h2>步骤 4：连接机械臂</h2>
    </div>

    使用 USB 数据线将机械臂连接至电脑并接通电源后，需要为串口配置 666 权限。Windows 系统不需要配置权限，跳过此步骤即可。

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>MotorBridge Setup</span>
      <h2>步骤 5：启动 MotorBridge</h2>
    </div>

    在浏览器中打开地址 `https://motorbridge.github.io/motorbridge-studio/`，点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。

    以 Windows 系统为例：

<CodeBlock language="bash">
{`motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20`}
</CodeBlock>

    <div className="image-frame">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" alt="MotorBridge help" />
    </div>
  </section>
</section>


## 常见问题

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
    <p>本节保留原教程中的故障处理内容，并按问题卡片整理，便于快速定位。</p>
  </div>

  <details className="content-details">
    <summary>1. 电机一启动就有很大声的异响？</summary>
    <p>
      可能是在写入 ID 的过程中不小心点了参数标定，这会导致电机原本出厂的转动惯量等参数被破坏。
      你可以用
      <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe" target="_blank">DM_Tools_v.1.8.0.1.exe（仅支持 Windows 系统）</a>
      上位机将同型号正常的电机参数导出，然后再导入到异常电机后，修改相应的 CAN ID，点击写入参数后继续执行零点校准流程。
    </p>

    <div className="image-frame">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_zh.png" alt="DM Tools parameter export" />
    </div>

    <div className="image-frame">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_zh.png" alt="DM Tools parameter import" />
    </div>

    <div className="reference-grid">
      <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt" target="_blank">DM4310 默认参数</a>
      <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt" target="_blank">DM4340P 默认参数</a>
    </div>
  </details>

  <details className="content-details">
    <summary>2. 电机所有 CAN ID 变成了一样？</summary>
    <p>
      在用
      <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe" target="_blank">DM_Tools_v.1.8.0.1.exe（仅支持 Windows 系统）</a>
      校准零点的时候，千万别点 CAN ID 旁边的读取和设置两个按钮。调试页面是通过 CAN 通讯链路完成的，如果点了设置，会把 CAN BUS 上所有的电机设置成同一个 CAN ID。
    </p>
  </details>
</section>


## 后续学习路径

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot Arm B601-DM 学习路径</h2>
    <p>完成快速入门后，可以继续学习 LeRobot、Pinocchio / MeshCat、视觉夹取和 ROS2 集成。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item active" href="/cn/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>B601-DM 快速入门</strong><span>购买选项、组装、电机 ID、零点校准和 MotorBridge 初体验。</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/cn/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>B601-DM 入门 LeRobot</strong><span>遥操作、相机接入、数据采集、训练和评估。</span></span>
      <span className="course-tag">LeRobot</span>
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
