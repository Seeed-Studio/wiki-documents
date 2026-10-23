---
description: "SO-ARM 具身智能入门课程第 10 章 —— 用 lerobot-calibrate 标定 SO-ARM 主臂与从臂、理解关节映射与标定文件，然后跑通第一次主从遥操作。"
title: 第 10 章 - 主从臂标定与遥操作
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - 标定
  - 遥操作
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_10
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 10 章 · 实践</span>
    <h2>10. 主从臂标定与遥操作</h2>
    <p>
      用 lerobot-calibrate 标定 SO-ARM 主臂与从臂，理解关节映射与标定文件的存放位置，然后跑通你的第一次主从遥操作。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前的安全检查</strong>
    <p>
      清空机械臂工作区 1 米范围内的贵重物品与无关人员。运行本章内容前，确认机械臂已牢固固定、电源与线缆连接正常。
    </p>
  </div>
</div>

<a id="overview"></a>

## 为什么整臂标定如此重要

---

第 6 章烧写了 ID 与波特率；第 7 章校准了中位。**整臂标定**是最后一步：它为每个关节学习舵机原始位置读数与物理角度之间的映射，使主从臂在物理姿态一致时上报的数值也一致。

整臂标定重要还有一个更深层的原因：**它让在一台 SO-ARM 上训练的神经网络能用在另一台上。** 因为每台标定过的 SO-ARM 都对"零度"与"行程中点"达成共识，你在你的从臂上录的数据，在我的从臂上同样有效。

:::danger
供电规则回顾：**SO101 标准版**全部使用 5V 电源；**SO101 专业版**在每一步都应使用 5V 电源标定与运行主臂、12V 电源标定与运行从臂。
:::

---

## 标定从臂

---

将 6 个舵机经 3 芯线与控制板接好，授权串口后运行：

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm  # <- 给机器人起一个唯一的名字
```

流程（见下方视频）：

1. **中位姿态**：把机械臂摆到每个关节行程中间的位置（大致"竖直向上"），按 Enter；
2. **全行程**：按提示把每个关节依次转过**完整**行程，工具会采集最小 / 最大值。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://player.bilibili.com/player.html?isOutside=true&bvid=BV1w6UUBcEGR&p=1&autoplay=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
由于 LeRobot 仓库的更新，主从臂标定时终端收不到 5 号舵机信号属于正常现象，可以继续操作。
:::

---

## 标定主臂

---

同样的两步（先中位、再逐关节全行程），换用 teleoperator 的配置键：

```bash
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm  # <- 给主臂起一个唯一的名字
```

:::tip
如果看到 `Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port. Try running lerobot-find-port`，请再次执行 `sudo chmod 666 /dev/ttyACM*` 授权。
:::

### 标定文件存在哪里（以及如何重做）

标定文件以 JSON 形式保存在 `~/.cache/huggingface/lerobot/calibration/robots/` 与 `~/.cache/huggingface/lerobot/calibration/teleoperators/` 下。需要重新标定时，可以：

- **方式一 —— 删除文件**，从头开始：

```bash
rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators
```

- **方式二 —— 响应提示。** 对已标定过的臂重新运行标定命令时会出现：

```text
Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:
```

输入 `c` 并回车开始重新标定；直接回车则保留并使用现有标定数据。

### 标定失败时：`Magnitude ... exceeds 2047`

如果标定或遥操作报 `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`，说明某个舵机零偏异常。先断电重启机械臂再试一次；若仍复现，先做一次**中位标定** —— 用第 7 章的工具，或用 Seeed_RoboController 里的脚本：

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable              # （可选）失能力矩，便于手动扳动关节
python -m src.tools.servo_middle_calibration   # 把当前位置写为 2048
python -m src.tools.servo_center_test          # 移动到 2048 验证
```

然后回到 `lerobot-calibrate` 重做整臂标定。

---

## 关节映射：方向、行程与夹爪

---

标定完成后手动验证：

- **方向**：主臂 1 号关节顺时针转，从臂 1 号关节必须也顺时针转。如果有关节方向反了，多半是标定时把臂摆成了镜像姿态 —— 重做该关节。
- **行程**：把主臂每个关节转到两端限位，从臂应到达对应限位，而不是抵死打印件。
- **夹爪**：主臂夹爪把手完全闭合 —— 从臂夹爪应完全闭合；完全张开对应完全张开。

:::tip
记住第 9 章的规则：这里选定的 `--robot.id` / `--teleop.id` 会与标定文件绑定。后续遥操作、录制、评估必须使用完全相同的 id。
:::

---

## 启动主从遥操作

---

现在到两条臂合为一个系统的时刻了。授权端口并启动遥操作：

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

teleoperate 命令会自动：

1. 检测缺失的标定并启动标定流程；
2. 连接机器人与遥操作设备并开始遥操作。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### 遥操作安全守则

- 首次使能力矩时用手扶住从臂 —— 它会迅速回到标定姿态。
- 主臂动作要**慢**；从臂是以全力矩跟随的。
- 手指远离从臂夹爪与夹点。
- 如果从臂滞后、抖动或某个关节不响应：停止、断电，检查该舵机的总线线缆（舵机 LED 熄灭意味着它前面那根线松了）。

---

## 控制频率与延迟

---

### 延迟从哪里来？为什么不可避免？

每个控制周期都要读主臂、给从臂发目标、（后续）读相机。USB 相机尤其是按自己的节奏出帧。整个环路很快 —— 几十毫秒 —— 但不是零，所以快速的主臂动作在从臂上看起来总会略有平滑。这是正常现象。

### 什么是控制频率？可以配置吗？

LeRobot 以配置的 fps 运行控制环路（SO-ARM 工作流默认 30；后续数据集的 `--dataset.fps` 必须与此一致）。如果遥操作卡顿：

- 避免使用 USB 集线器 —— 机械臂与相机直连电脑；
- 检查是否有其他进程占用串口；
- 用 `lerobot-find-port` 确认没有其他设备共用总线。

---

## 动手练习

---

1. 完成主从臂标定；在 `~/.cache/huggingface/lerobot/calibration/` 下找到两个 JSON 文件；
2. 遥操作 5 分钟：用夹爪触碰鼠标垫的四个角，再抓起一个小物体；
3. 故意体验一次失败路径：用错误的 `--robot.id` 运行 teleoperate 并读懂报错 —— 以后你会永远记得它；
4. 通过 `c` 提示练习重新标定。

控制链验证完毕，下一章将为你的第一个策略设计数据。

</div>
