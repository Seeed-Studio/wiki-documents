---
description: "SO-ARM101 Sim-to-Real VLA 课程第 7 章 —— 准备机械臂：安装 LeRobot 环境、写入舵机 ID（整机跳过）、校准双臂、遥操作验证。"
title: 第 7 章 - 准备机械臂
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - lerobot-setup-motors
  - 校准
  - LeRobot
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_7
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 2 · 第 7 章 · Build Your Robot Lab</span>
    <h2>7. 准备机械臂</h2>
    <p>
      两只机械臂：一只手动的 leader 和一只跟随的 follower。装好环境、写入舵机
      ID（整机跳过）、校准双臂，再用首次遥操作验证。
    </p>
    <div className="hero-actions">
      <a href="#arms">双臂</a>
      <a href="#env">环境</a>
      <a href="#ids">舵机 ID</a>
      <a href="#calibrate">校准</a>
      <a href="#teleop">验证</a>
    </div>
  </div>
</section>

## 7.1 两只机械臂

<section id="arms" className="section-card">
  <div className="section-title">
    <span>主臂与从臂</span>
    <h2>7.1 两只机械臂</h2>
  </div>

**主臂（leader）**——为教学与科研设计的低成本开源臂，有整机版和 DIY 套件
版。六个关节由 7.4 V 级 STS3215 舵机驱动，配 5 V 电源；它只读取关节角度。

**从臂（follower）**——执行的那只。Pro 套件上运行 12 V 舵机；遥操作时镜像
主臂，之后执行训练好的 VLA 策略。

:::caution 不要混用电源
主臂用 5 V，从臂用 12 V。接反可能损坏舵机。更换任何线缆之前先给两只臂
断电。
:::

完整的组装教程在入门课程里：
[入门第 6 章 —— 配置电机与组装](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_6/)
覆盖 3D 打印、电机规划、写 ID 与逐步组装；
[入门第 7 章 —— 舵机调试](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_7/)
覆盖 Feetech 调试工具。

</section>

## 7.2 安装 LeRobot 环境

<section id="env" className="section-card">
  <div className="section-title">
    <span>一次安装</span>
    <h2>7.2 安装 LeRobot 环境</h2>
  </div>

校准之前，先安装后续所有章节使用的环境。先装 `uv`，再创建工作区：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
uv --version

mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# 下载 Seeed LeRobot 分支（含 SO101 主/从臂支持）
git clone https://github.com/Seeed-Projects/lerobot.git

# 创建虚拟环境（Python 3.12）
uv venv --python 3.12 .venv
source .venv/bin/activate

uv pip install --upgrade pip
uv pip install -e ./lerobot

# Feetech 舵机 SDK —— SO-01 总线必需
uv pip install feetech-servo-sdk
```

:::note 重新进入环境
运行环境只需配置一次。后续章节假定你可以这样重新进入：
`cd ~/rebot_lerobot && source .venv/bin/activate`
:::

</section>

## 7.3 套件还是整机？

<section id="ids" className="section-card">
  <div className="section-title">
    <span>整机可跳过写 ID</span>
    <h2>7.3 套件还是整机？</h2>
  </div>

| 你的情况 | 组装 | 写舵机 ID | 校准 |
| --- | --- | --- | --- |
| 3D 打印/套件版 | 需要 | **需要** | 需要 |
| 整机（出厂组装） | 已完成 | **跳过**——工厂已写好 | 需要 |

**如果买的是整机，直接跳到 [7.5 校准双臂](#calibrate)。**

组装前给每个舵机贴标签——从臂写 **F1–F6**，主臂写 **L1–L6**。关节 1 = 肩
部左右、2 = 肩部俯仰、3 = 肘、4 = 腕俯仰、5 = 腕旋转、6 = 夹爪。SO-ARM101
主臂 1–3 关节的减速比与 SO-ARM100 不同——安装前先查
[入门 6.2 的减速比表](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_6/)。

:::caution 一次只接一个舵机
六只舵机共享一条串行总线。写 ID 时控制板上只接这一个舵机，否则重复的 ID
会同时写进所有拥有该 ID 的舵机。
:::

</section>

## 7.4 写入舵机 ID（仅套件版）

<section id="setup-motors" className="section-card">
  <div className="section-title">
    <span>lerobot-setup-motors</span>
    <h2>7.4 写入舵机 ID（仅套件版）</h2>
  </div>

先找控制板的端口：

```bash
lerobot-find-port
```

按提示拔掉再插上控制板，打印出来的端口就是你的（通常是 `/dev/ttyACM0`）。

逐关节写入 ID：

```bash
lerobot-setup-motors \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0
```

工具会点名要连接的关节——只接那一个舵机，按回车，它就会写入 ID 和波特率：

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

从臂六个关节重复一遍，然后对主臂运行同样的工具：

```bash
lerobot-setup-motors \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1
```

配置串口权限（重启后依然有效）：

```bash
sudo usermod -aG dialout $USER   # 重新登录一次生效
sudo chmod 666 /dev/ttyACM*
```

Ubuntu 上 `brltty` 服务可能抢占 USB 串口。如果端口几秒后消失，卸载它：
`sudo apt remove brltty`。

</section>

## 7.5 校准双臂

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>参考位姿</span>
    <h2>7.5 校准双臂</h2>
  </div>

套件和整机都**必须**校准。校准让 LeRobot 知道每个关节的中位和两个机械
限位。校准文件保存在 `~/.cache/huggingface/lerobot/calibration/` 下，按臂的
ID 命名——同一个 ID 只能对应同一只物理臂。

找到两个端口，导出后续所有章节都会用到的变量：

```bash
export TELEOP_PORT=/dev/ttyACM0
export TELEOP_ID=so101_leader
export ROBOT_PORT=/dev/ttyACM1
export ROBOT_ID=so101_follower
```

校准主臂：

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

1. 把每个关节移到**行程中间**。腕旋转轴要特别居中——如果它一开始就停在
   限位上，扫描时编码器可能溢出。
2. 按回车，然后一次一个关节、缓慢地扫到两个机械限位。重复扫没关系，极值
   会被覆盖。
3. 按回车保存。

从臂同理：

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID
```

从臂要停在真实的机械限位上——不是被线缆挡住，也不是被桌面挡住。被夹住的
线缆会记录一个假限位，压缩可用行程。

:::caution 坏校准的特征
如果从臂只镜像主臂一半的动作，或者某个关节直接打到限位，说明扫描行程不够。
重新校准那只臂，每个关节走完整行程。
:::

如果你运行 NVIDIA workshop 的工具链，可以验证从臂的校准质量：

```bash
export ROBOT_PORT ROBOT_ID
python ~/Sim-to-Real-SO-101-Workshop/docker/real/scripts/so101_check_calibration.py
```

好的校准会以这行结尾：

```text
Overall: ✓ PASS — calibration looks good.
```

</section>

## 7.6 验证机械臂

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>首次遥操作</span>
    <h2>7.6 验证机械臂</h2>
  </div>

把两只臂摆到相近的姿态，然后运行：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

缓慢移动主臂。从臂必须朝相同方向跟随每个关节，并到达相同的限位。`Ctrl+C`
停止。

这一步同时确认了课程后续使用的关节顺序：`shoulder_pan`、`shoulder_lift`、
`elbow_flex`、`wrist_flex`、`wrist_roll`、`gripper`。如果某个关节方向反了，
重新校准——不要用软件补偿。

第一次运行时，一只手随时放在从臂的电源开关旁边。

下一章：[第 8 章 —— 搭建工作空间](cn_Sim2Real_VLA_08.md)。

</section>

</div>