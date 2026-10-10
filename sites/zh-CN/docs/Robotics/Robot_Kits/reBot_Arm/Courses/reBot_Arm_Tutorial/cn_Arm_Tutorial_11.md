---
description: "Seeed 具身智能入门课程第三阶段：模仿学习与 LeRobot第 11 章 — Leader 与 Follower 校准及遥操作：如果你的系统还没有安装PCAN驱动，请看这里[reBot Arm B601-RS Quick Start | Seeed Studio Wiki](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/#software-setup-a…"
title: 第 11 章 - Leader 与 Follower 校准及遥操作
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_11
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 11 章 · 实践</span>
    <h2>11. Leader 与 Follower 校准及遥操作</h2>
    <p>
      如果你的系统还没有安装PCAN驱动，请看这里[reBot Arm B601-RS Quick Start | Seeed Studio Wiki](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow)
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## Leader 与 Follower 校准及遥操作

## 开箱接线及固定机械臂

- reBot DM

- reBot RS 

如果你的系统还没有安装PCAN驱动，请看这里[reBot Arm B601-RS Quick Start | Seeed Studio Wiki](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow)

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ 无码化上手 VLA · 免配环境</span>
    <p className="sensecraft-banner__title">不想装环境、不想写代码？一个软件就能跑 reBot Arm 与 LeRobot</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics 是 Seeed 面向 SO-ARM101、reBot Arm 102 + B601-RS / B601-DM 的免代码平台。在引导式界面里完成设备连接、标定、数据采集、模型训练与推理验证 —— 不需要配 Python 环境，也不需要敲命令行。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 步引导式流程</li>
      <li>✅ 云端训练 · 本地无需 GPU</li>
      <li>✅ Windows / macOS 客户端</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/zh?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">前往 SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/cn/sensecraft_robotics/">软件使用教程</a>
  </div>
</div>

## 环境安装

相信大家已经在第二阶段的时候创建了虚拟环境了，接下来我们只需要克隆相应的仓库和在所创建的conda中进行相应环境安装即可，这里一定不要使用虚拟机或者是WSL，最好装个Ubuntu22.04系统。

**第 1 步**：克隆 Seeed 的 LeRobot 仓库

```Bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

**第 2 步**：进入虚拟环境并安装 LeRobot 与 reBot 插件

切记，后续所有的流程都必须在虚拟环境和lerobot环境下进行

```Bash
conda create -y -n rebot_arm python=3.12
pip install -e ./lerobot
```

```Bash
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

**第 3 步**：安装 ffmpeg（视频编解码依赖）

```Bash
conda install ffmpeg -c conda-forge
```

**版本说明**：

- 默认会安装 ffmpeg 7.X（支持 libsvtav1 编码器）
- 如果遇到版本兼容问题，可以指定安装 ffmpeg 7.1.1：

```Bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- 可通过 `ffmpeg -encoders | grep svtav1` 检查是否支持 libsvtav1 编码器

**第 4 步**：Nvidia Jetson 设备特殊配置（电脑端跳过这一步）

1. 对于 Jetson JetPack 6.0+ 设备（请确保在执行此步骤前安装了适配jetson的 PyTorch-gpu 和 Torchvision）：

```Bash
# 通过 conda 安装 OpenCV 和其他依赖，仅适用于 Jetson JetPack 6.0+
conda install -y -c conda-forge "opencv>=4.10.0.84"
 # 卸载 OpenCV
conda remove opencv  
# 使用 pip3 安装指定版本 OpenCV
pip3 install opencv-python==4.10.0.84  
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
 # 该版本需与 Torchvision 兼容
pip3 install numpy==1.26.0 
```

**第 5 步**：检查 PyTorch GPU 是否可用

```Bash
python3

import torch
print(torch.cuda.is_available())   # 应输出 True
```

输入exit()退出

预警：输出 False 说明装成了 CPU 版，需进行重装PyTorch

## 校准 Follower 臂

- 接下来，你需要确保 reBot B601-RS 机器人接上电源和数据线再进行校准。
- `主臂和从臂校准文件分别保存在－/.cache/huggingface/lerobot/calibration/robots`与`－/.cache/huggingface/lerobot/calibration/teleoperators`下，如需重新校准需要删除相应的文件，或者直接运行校准指令终端会提示按下键盘C：重新校准，Enter：沿用之前的校准文件。
- 如果无法连接follower，请跳转至第二阶段使用motorbridge提供的接口测试机械臂是否正常。
- 按照提示，将follower机械臂移动到上图所示的零点,机械臂在组装完成后在相同电脑设备下只需要校准一次，以下是校准指令，参考零位如图（夹爪要完全闭合）。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11cn/ch11-01cn.jpg" alt="" />
</div>

**对于DM从臂校准**

```Bash
sudo chmod 666 /dev/ttyACM*
cd ~/rebot_lerobot/lerobot
lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

**对于RS从臂校准**

```Bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 
sudo ip link set can0 up
cd ~/rebot_lerobot/lerobot

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

（可选）如果你使用 Jetson（Jetpack 6.x），请执行以下命令查找 Jetson 对应的 CAN 端口号：

```Bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

输出示例：

```Plain Text
can2  # 也可能是 can0、can1、其他 can 编号
```

后续所有 follower 命令使用的端口号必须和此处输出保持一致。

若你的 [Jetson 未安装 PCAN 驱动](https://seeedstudio.feishu.cn/wiki/KByAwxOW4iDzvUk1pP8c4ZDJnTh)，通信将会持续异常。

## 校准 Leader 臂

**reBot 102 leader 校准说明**：

- 启动校准时，reBot Arm 102 的每个舵机当前位置会被**重设为零点**
- `joint_ranges`（关节限位）取自配置文件 `config_rebot_arm_102_leader.py`，而非校准数据
- 如果某个关节看起来总是卡在某个限位附近，优先检查 `joint_ranges` 配置
- 关节方向定义在配置文件中，若方向不一致需修改配置而非重新校准
- reBot 102 leader 使用 USB 转 UART 模块，通常映射为 `/dev/ttyUSB*`
- 使用 `ls /dev/ttyUSB*` 查看实际端口号

如果是初次连接，可能会报找不到串口/dev/ttyACM0,此时因为brltty在占用该串口，请执行如下步骤

```Bash
sudo dmesg | grep ttyUSB #看到最后一行显示disconnected
sudo apt remove brltty #移除brltty
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11cn/ch11-02cn.jpg" alt="" />
</div>

按照提示，将leader机械臂移动到上图所示的零点，

```Bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

保持静止，然后按下enter，直到提示校准完成。

## 关节映射：方向、范围与夹爪

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11cn/ch11-03cn.jpg" alt="" />
</div>

## 遥操作安全规范

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11cn/ch11-04cn.jpg" alt="" />
</div>

## 启动主从遥操作

**所有机械臂运动场景同样需要注意!**

遥操作过程中如果主从臂电源脱落，电源接触不良，信号线脱落，必须先停止代码，机械臂恢复到初始0点位置，在通上电源重新运行程序，避免数据错乱导致机械臂失控造成危险。

**DM遥操作**

先对串口给予权限：

```Bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo chmod 666 /dev/ttyACM*
```

运行遥操作：

```Bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

**RS遥操作**

先对串口给予权限：

```Bash
# leader
sudo chmod 666 /dev/ttyUSB*  
# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up  
```

运行遥操作：

```Bash
lerobot-teleoperate \
--robot.type=seeed_b601_rs_follower \
--robot.port=can0 \
--robot.id=follower1 \
--robot.can_adapter=socketcan \
--teleop.type=rebot_arm_102_leader \
--teleop.port=/dev/ttyUSB0 \
--teleop.id=rebot_arm_102_leader
```

## 控制频率与延迟：让遥操作"跟手"

遥操作"跟不跟手"，取决于两件事：转发回路每秒跑多少圈（频率），以及你的手到机械臂之间隔了多久（延迟）。

## 延迟从哪里来？为什么必然存在？

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11cn/ch11-05cn.jpg" alt="" />
</div>

## 控制频率是多少？能设置吗？

遥操作回路默认 **60 Hz**——每秒完成 60 圈"读 Leader → 映射 → 发 CAN → 回读"，每圈的时间预算是 16.7 ms。这个频率可以通过 teleoperate 配置中的 `fps` 参数调整，但有两点要知道：

- **上限由硬件回路耗时决定，不由软件决定。** 上面那条链路跑一圈本身就要十几毫秒，所以这套硬件的实用上限大约在 60–100 Hz。设得更高没有意义：实际频率跑不上去，只会看到周期超时的警告。
- **60 Hz 已经远超需要。** 人手最快的有意识动作也不过 5–10 Hz，60 Hz 相当于给你的每一点细微动作连拍十张快照，采样密度完全覆盖手的带宽。

## 实操练习：抓取、搬运、放置

遥操作稳了，但"能动"和"能干活"之间还差刻意练习。第 13 章的数据质量，取决于你现在的操作熟练度。按三个梯度练习：

- **练习 1：空载移物（熟悉手感）** 在工作区放几个轻便方块，练习：移动到目标上方 → 下降 → 闭合夹爪 → 抬起。目标：10 次动作无碰撞、无中途掉落，单趟动作一气呵成不犹豫。
- **练习 2：搬运与放置（完整任务链）** 完成"抓取 → 搬运 → 放入指定容器"全流程。目标：连续完成 10 次，且每次的起点和终点姿态基本一致。
- **达标标准**：能以稳定节奏连续完成 20 次完整任务而不觉得勉强，就可以进入下一章了。

---

</div>
