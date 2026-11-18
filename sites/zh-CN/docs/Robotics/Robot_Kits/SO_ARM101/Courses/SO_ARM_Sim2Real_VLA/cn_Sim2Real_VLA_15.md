---
description: "SO-ARM101 Sim-to-Real VLA 课程第 15 章 —— 连接机器人硬件：SO-101 从臂走 USB 串口接入 Jetson，连接双相机、迁移校准文件并做就绪检查。"
title: 第 15 章 - 连接机器人硬件
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - 硬件
  - USB 串口
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_15
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 4 · 第 15 章 · Deploy on Jetson</span>
    <h2>15. 连接机器人硬件</h2>
    <p>
      把 SO-101 从臂经 USB 串口接到 Jetson，连好两台相机并迁移校准——之后
      边缘设备运行时不再需要工作站。
    </p>
    <div className="hero-actions">
      <a href="#requirements">需求</a>
      <a href="#connect">连接</a>
      <a href="#serial">串口</a>
      <a href="#cameras">相机</a>
      <a href="#checklist">检查清单</a>
    </div>
  </div>
</section>

## 15.1 硬件需求

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>需要什么</span>
    <h2>15.1 硬件需求</h2>
  </div>

- Jetson AGX Orin 或 AGX Thor，JetPack 7.2（第 14 章）；
- SO-ARM101 从臂——USB 串口，**不需要 CAN 适配器**；
- 两台 USB 相机（腕部 + 外部，同第 8 章）；
- 一个带电源的 USB 3.0 Hub——Thor 只有两个 Type-A 口，从臂加两台相机不够
  用；
- 从臂的 12 V 电源和 USB 数据线。

:::note 边缘端不需要主臂
主臂只用于数据采集。Jetson 部署需要从臂、相机和策略——仅此而已。
:::

</section>

## 15.2 连接设备

<section id="connect" className="section-card">
  <div className="section-title">
    <span>顺序很重要</span>
    <h2>15.2 连接设备</h2>
  </div>

1. 保持从臂 12 V 断电；
2. 把从臂的 USB 串口接到 Jetson（直连或经带电源的 Hub）；
3. 两台相机经带电源的 Hub 接入；
4. 从工作站复制校准目录（见下）；
5. 最后再给从臂上电。

:::tip 校准也要复制，不只是代码
从臂回放的是为它自己的 ID 写的校准。把工作站的校准复制到 Jetson 相同路径：

```bash
# 在工作站上
rsync -av ~/.cache/huggingface/lerobot/calibration/ \
  jetson:/home/<jetson-user>/.cache/huggingface/lerobot/calibration/
```
:::

</section>

## 15.3 识别串口

<section id="serial" className="section-card">
  <div className="section-title">
    <span>USB 串口</span>
    <h2>15.3 识别串口</h2>
  </div>

给从臂上电，然后查设备节点：

```bash
ls /dev/ttyACM*
```

用 LeRobot 的查找工具确认端口可用（按提示拔插）：

```bash
lerobot-find-port
```

导出后续命令要用的变量——与工作站同名：

```bash
export ROBOT_PORT=/dev/ttyACM0
export ROBOT_ID=so101_follower
```

端口打不开时，在 Jetson 上修权限：

```bash
sudo usermod -aG dialout $USER   # 重新登录一次生效
sudo chmod 666 /dev/ttyACM*
```

</section>

## 15.4 识别相机

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>两个视频节点</span>
    <h2>15.4 识别相机</h2>
  </div>

```bash
ls /dev/video*
lerobot-find-cameras opencv
```

把预览图对应到编号（文件名含设备号）并导出——与第 8 章同名：

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

重启或重新插拔后编号可能变化；每次部署前重查。

</section>

## 15.5 硬件就绪检查

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>进入第 16 章之前</span>
    <h2>15.5 硬件就绪检查</h2>
  </div>

- [ ] Jetson 处于验证过的 JetPack/L4T 版本，可靠启动；
- [ ] 从臂出现在预期的 `/dev/ttyACM*` 节点；
- [ ] `~/.cache/huggingface/lerobot/calibration/` 下校准文件齐全；
- [ ] 两台相机 640×480、30 FPS 枚举与预览正常；
- [ ] `ROBOT_PORT`、`ROBOT_ID`、`CAMERA_GRIPPER`、`CAMERA_EXTERNAL` 已导出；
- [ ] 使用带电源的 Hub；负载下没有设备掉线。

下一章：[第 16 章 —— 配置 GR00T 软件环境](cn_Sim2Real_VLA_16.md)。

</section>

</div>