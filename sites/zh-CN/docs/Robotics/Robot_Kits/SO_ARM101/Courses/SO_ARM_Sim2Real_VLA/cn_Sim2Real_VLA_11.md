---
description: "SO-ARM101 Sim-to-Real VLA 课程第 11 章 —— 真实环境评估：用解耦的策略服务端与机器人客户端，在物理 SO-101 从臂上闭环运行微调后的 GR00T N1.7。"
title: 第 11 章 - 真实环境评估
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - GR00T N1.7
  - 推理
  - 评估
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_11
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 3 · 第 11 章 · Get Your Own VLA Model</span>
    <h2>11. 真实环境评估</h2>
    <p>
      在真实世界部署微调后的 GR00T N1.7：策略服务端跑模型，机器人客户端驱动
      SO-101 从臂闭环执行。
    </p>
    <div className="hero-actions">
      <a href="#architecture">架构</a>
      <a href="#server">服务端</a>
      <a href="#client">客户端</a>
      <a href="#safety">安全</a>
      <a href="#iterate">迭代</a>
    </div>
  </div>
</section>

## 11.1 部署架构

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>解耦设计</span>
    <h2>11.1 部署架构</h2>
  </div>

Isaac GR00T 的部署架构把推理侧与控制侧解耦：

- **推理侧（服务端）**：只负责执行模型推理；
- **控制侧（客户端）**：负责采集机械臂状态并协调运动控制。

服务端和客户端可以跑在两台设备上（例如 GPU 工作站为一台装在 Jetson 上的
机器人提供策略——第 18 章），也可以像本章演示的那样在同一台电脑上运行。

:::caution 显存
单机评估需要能装下 3B GR00T 模型的 NVIDIA GPU——与微调它（第 10 章）同级。
:::

评估使用 NVIDIA workshop 的 SO-101 真机客户端，它处理完整闭环：观测输入，
返回 16 步动作块，客户端对重叠预测做时间对齐与融合，再以 30 Hz 向从臂连续
下发电机命令。

</section>

## 11.2 终端 1：启动推理服务端

<section id="server" className="section-card">
  <div className="section-title">
    <span>策略服务</span>
    <h2>11.2 终端 1：启动推理服务端</h2>
  </div>

NVIDIA 的真机容器会挂载 GR00T 评估脚本和你的 checkpoint 目录。带上你的输出
目录启动：

```bash
cd ~/Sim-to-Real-SO-101-Workshop
docker run -it --rm --name real-robot --network host --privileged --gpus all \
  -e DISPLAY \
  -v /dev:/dev \
  -v /run/udev:/run/udev:ro \
  -v $HOME/.Xauthority:/root/.Xauthority \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v $HOME/.cache/huggingface/lerobot/calibration:/root/.cache/huggingface/lerobot/calibration \
  -v $HOME/groot_so101_real:/workspace/models/so101 \
  -v $(pwd)/docker/real/scripts:/Isaac-GR00T/gr00t/eval/real_robot/SO100 \
  real-robot \
  /bin/bash
```

在容器里启动服务端，指向你的 checkpoint：

```bash
python Isaac-GR00T/gr00t/eval/run_gr00t_server.py \
  --model-path /workspace/models/so101/checkpoint-5000
```

服务端监听 5555 端口，并且在多次 rollout 之间保持运行——两次尝试之间只需要
停客户端。

</section>

## 11.3 终端 2：启动机器人客户端

<section id="client" className="section-card">
  <div className="section-title">
    <span>闭环</span>
    <h2>11.3 终端 2：启动机器人客户端</h2>
  </div>

给容器再开一个终端：

```bash
docker exec -it real-robot /bin/bash
```

运行评估脚本。注意相机键名：推理时运行时键名是 `wrist` 和 `front`——与第
10 章 modality 文件产出的名字一致。物理相机不变：`wrist` 是夹爪相机，
`front` 是俯视相机。

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=localhost \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack" \
  --rerun True
```

预期行为：

1. 从臂缓慢升到起始位姿；
2. 进入推理模式开始任务；
3. 终端 2 里 `Ctrl+C` 停止并回零；
4. 终端 1 的服务端保持存活，可反复 rollout。

:::tip 评估多个 checkpoint
换 checkpoint 编号重跑客户端（停两个终端、改 `--model-path`、重启），保留
任务成功率最高的那个——而不一定是最后一个。
:::

</section>

## 11.4 安全

<section id="safety" className="section-card">
  <div className="section-title">
    <span>按下回车之前</span>
    <h2>11.4 安全</h2>
  </div>

策略的动作可能比人预期的快：

- rollout 期间手、头发、袖口远离试管区；
- 相机线与电源线避开从臂工作区；
- 从臂电源开关伸手可及——切断电机电源就是急停；
- 每次 rollout 之间把试管放回起始区，并确认机架没有挪动。

</section>

## 11.5 根据观察迭代

<section id="iterate" className="section-card">
  <div className="section-title">
    <span>失败 → 修复</span>
    <h2>11.5 根据观察迭代</h2>
  </div>

第一次真机 rollout 很少次次成功。常见现象与修法：

| 现象 | 可能原因 | 修法 |
| --- | --- | --- |
| 抓取偏差几厘米 | 相机构图与训练时不一致 | 复查第 8 章的相机位姿 |
| 抓住了又掉 | 接触/摩擦差距 | 补录成功抓取的真实 episode |
| 方向对但慢慢漂移 | 校准偏差 | 重跑 `lerobot-calibrate` 和检查脚本 |
| 无视语言指令 | 任务文本不一致 | `--lang_instruction` 用录制时的原句 |
| 服务端拒绝观测 | 相机键名不匹配 | 评估命令里保持 `wrist` 和 `front` |
| 中途停滞 | episode 停在保持状态 | 录制更长、完整的演示 |

按这个顺序迭代：先修摄影棚和相机，再补 5–10 条真实数据（第 9 章），再重新
微调（第 10 章）。先改模型后修数据通常会掩盖真正的问题。

| 症状 | 原因 | 修法 |
| --- | --- | --- |
| 5555 端口 `address already in use` | 旧服务端还在 | 停掉旧容器或进程 |
| 服务端起了但 rollout 无动作 | checkpoint 路径失效 | 确认挂载与 `--model-path` 指向同一 checkpoint |
| 机器人立即回零 | 策略或观测报错 | 看服务端日志；检查相机流和关节名 |
| 容器里 `Cannot find calibration` | 校准目录没挂载 | 挂 `~/.cache/huggingface/lerobot/calibration`（上面的 `docker run` 已包含） |

边缘部署——在 Jetson 而非工作站 GPU 上跑策略——继续看
[第 14 章 —— 准备 Jetson 边缘设备](cn_Sim2Real_VLA_14.md)；或先用可选的
[第 12 章](cn_Sim2Real_VLA_12.md)和[第 13 章](cn_Sim2Real_VLA_13.md)
扩充数据集。

返回课程概览：[SO-ARM101 Sim-to-Real VLA 课程](cn_Sim2Real_VLA_Introduction.md)。

</section>

</div>