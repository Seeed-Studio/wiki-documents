---
description: "SO-ARM101 Sim-to-Real VLA 课程第 14 章 —— 准备 Jetson 边缘设备：选择目标、安装 SDK Manager、进入强恢复模式、刷 JetPack 7.2 并验证板卡。"
title: 第 14 章 - 准备 Jetson 边缘设备
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - AGX Orin
  - AGX Thor
  - JetPack
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_14
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_14/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 4 · 第 14 章 · Deploy on Jetson</span>
    <h2>14. 准备 Jetson 边缘设备</h2>
    <p>
      为 GR00T N1.7 TensorRT 部署准备 Jetson 平台：选定目标、刷 JetPack 7.2，
      连接机器人之前先验证板卡。
    </p>
    <div className="hero-actions">
      <a href="#targets">目标</a>
      <a href="#host">主机</a>
      <a href="#recovery">强恢复模式</a>
      <a href="#flash">刷机</a>
      <a href="#verify">验证</a>
    </div>
  </div>
</section>

## 14.1 支持的目标

<section id="targets" className="section-card">
  <div className="section-title">
    <span>Orin 或 Thor</span>
    <h2>14.1 支持的目标</h2>
  </div>

SO-ARM101 流水线验证过的部署目标：

| 目标 | 验证过的软件路径 | 后续使用的运行环境 |
|---|---|---|
| Jetson AGX Orin | JetPack 7.2 / L4T R39.2 | `.venv-jp72` 配 `scripts/deployment/orin_jp72/run_full_trt.sh` |
| Jetson AGX Thor | JetPack 7.2 / L4T R39.2 | `.venv` 配 `scripts/activate_thor.sh` |

:::caution 引擎与目标绑定
TensorRT 引擎依赖 GPU 架构。Orin 和 Thor 可以共享同一个兼容的 checkpoint 和
数据集，但每个目标必须构建自己的引擎包（第 18 章）。
:::

</section>

## 14.2 准备主机

<section id="host" className="section-card">
  <div className="section-title">
    <span>Ubuntu 主机</span>
    <h2>14.2 准备主机</h2>
  </div>

准备一台 Ubuntu 主机：

- 至少 25 GB 空闲空间（SDK Manager 与 JetPack 包）；
- 一根可靠的 USB Type-C 数据线；
- 稳定的网络；
- 管理员权限。

从官方页面安装 NVIDIA SDK Manager：
[https://developer.nvidia.com/sdk-manager](https://developer.nvidia.com/sdk-manager)。

</section>

## 14.3 进入强恢复模式

<section id="recovery" className="section-card">
  <div className="section-title">
    <span>按键操作</span>
    <h2>14.3 进入强恢复模式</h2>
  </div>

### Jetson AGX Thor 开发者套件

1. 关机；
2. 把恢复用 USB Type-C 口连到主机；
3. 按住 Force Recovery 键；
4. 保持按住的同时按一下并松开 Reset；
5. 松开 Force Recovery；
6. 确认 SDK Manager 识别到目标。

| 标记 | 按键 |
|---|---|
| 11 | 电源 |
| 12 | Force Recovery |
| 13 | Reset |

### Jetson AGX Orin 开发者套件

Orin 套件必须**先开机**再做这套操作；用 2 号键（Force Recovery）和 3 号键
（Reset）：

1. 把 10 号 USB Type-C 口——40 pin 排针旁边那个——连到 Ubuntu 主机；
2. 接电并确认套件已开机；
3. 按住 2 号键（Force Recovery）；
4. 保持按住的同时按住 3 号键（Reset）；
5. 同时松开两键；
6. 确认 SDK Manager 识别到 Orin 目标。

| 标记 | 按键或接口 |
|---|---|
| 1 | 电源键 |
| 2 | Force Recovery 键 |
| 3 | Reset 键 |
| 10 | 刷机用 USB Type-C 口 |

### 备选：关机状态下进入恢复模式

1. 确认套件已关机；
2. 按住 2 号键（Force Recovery）；
3. 接上电源。电源灯不亮就按一下 1 号键（电源）；
4. 松开 Force Recovery；
5. 确认 SDK Manager 识别到目标。

参考：[NVIDIA Jetson AGX Orin 用户指南 —— Force Recovery 模式](https://docs.nvidia.com/jetson/agx-orin-devkit/user-guide/latest/setup_bsp.html#hardware-setup)。

</section>

## 14.4 安装 JetPack

<section id="flash" className="section-card">
  <div className="section-title">
    <span>SDK Manager</span>
    <h2>14.4 安装 JetPack</h2>
  </div>

在 SDK Manager 里：

1. 目标硬件选 **Jetson AGX Thor / Jetson AGX Orin**；
2. 选 **JetPack 7.2**；
3. 除非部署流程需要 ISO，否则用 **Direct Flash**；
4. 完成目标安装与初始 Ubuntu 设置。

沿向导走到 **Installation completed successfully** 之后再拔恢复线。

</section>

## 14.5 验证 Jetson

<section id="verify" className="section-card">
  <div className="section-title">
    <span>在设备上</span>
    <h2>14.5 验证 Jetson</h2>
  </div>

在目标机上运行：

```bash
tr -d '\0' < /proc/device-tree/model
cat /etc/nv_tegra_release
df -h /
free -h
```

确认：

- 检测到的型号与预期的 Orin / Thor 一致；
- 系统报告的 JetPack/L4T 版本正确；
- NVMe 或根文件系统有足够空间放 checkpoint、backbone、ONNX 与 TensorRT
  引擎；
- 重启后系统正常启动。

为完整的本地 TensorRT 流程预留约 45–50 GB。

下一章：[第 15 章 —— 连接机器人硬件](cn_Sim2Real_VLA_15.md)。

</section>

</div>