---
description: "SO-ARM 具身智能入门课程第 7 章 —— 使用 Seeed_RoboController 舵机调试工具检测舵机状态、重写舵机 ID、写入中位值、单独控制舵机并读取舵机状态。"
title: 第 7 章 - 使用舵机调试工具调试舵机
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 舵机
  - 调试
  - 舵机调试
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_7
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 7 章 · 实践</span>
    <h2>7. 使用舵机调试工具调试舵机</h2>
    <p>
      使用 Seeed_RoboController 舵机调试工具检测舵机状态、重写重复或错误的舵机 ID、写入中位值、单独控制舵机并读取电压、温度、转速与负载。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 这个工具是做什么的

---

舵机调试工具（[Seeed_RoboController](https://github.com/Seeed-Projects/Seeed_RoboController)）是面向 LeRobot / SO-ARM 机械臂的图形化调试工具。用它你可以：

- 快速检测舵机状态；
- 重写重复或错误的舵机 ID；
- 写入中位（中间位置）值；
- 单独控制舵机，读取电压、温度、转速、负载与电流；
- 管理高级舵机寄存器数据、波特率，以及恢复出厂设置。

它支持 **Windows、Ubuntu 与 Mac**，是机械臂表现异常时的第一站 —— 在重新标定、重新拆装、断定舵机损坏之前，先用它查一遍。

---

## 安装

---

**1. 克隆仓库：**

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

**2. 安装依赖。** 建议装在第 5 章的 LeRobot conda 环境里。如果偏好独立安装，请新建一个虚拟环境，避免污染系统 Python：

```bash
pip install -r requirements.txt
```

**3. 检查环境。** 返回 `[OK] Environment check passed` 即可运行：

```bash
python setup.py
```

**4. 启动工具：**

```bash
python -m src.gui.factory_calibration_tool
```

这会启动交互式串口选择。（可选）端口被占用时可手动指定：

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

---

## 检查舵机是否正常

---

首先在串口选择中选择对应端口。如果 1–6 号舵机全部检测成功，说明舵机识别正常、基本功能可用。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="六个舵机全部检测到" />
</div>

如果有舵机显示未检测到：

1. 检查接线是否正确；关闭页面后重新打开。
2. 仍未检测到，则舵机 ID 可能重复 —— 例如把臂标定命令误用成了单舵机标定。此时需要重写这些舵机的 ID（下一节）。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="舵机未检测到" />
</div>

---

## 重写舵机 ID

---

回顾第 4 章：所有舵机共用一条总线，烧写 ID 会影响**所有**同 ID 舵机。因此必须先断开其他舵机，逐个重新烧写。

**第 1 步 —— 拆下舵机间的线束**，从夹爪一路拆到底座：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="断开 6 号到 5 号舵机" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="断开 1 号舵机与控制板" />
</div>

**第 2 步 —— 每次只接一个舵机。** 确保控制板上只连一个舵机。例如按下图把 6 号舵机接到驱动板 —— 其他舵机接法相同，因此不用拆开机械臂也能修 ID。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="单舵机连接到控制板" />
</div>

**第 3 步 —— 改回 ID。** 下图只识别到 4 号舵机，但实际接的是 6 号 —— ID 错了，需要改回 6。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="检测到错误 ID" />
</div>

点击 4 号舵机，把 ID 改成 6。对其他舵机重复同样的操作。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="重写舵机 ID" />
</div>

舵机 ID 校准完成后，把线依次插回去即可。

---

## 写入舵机中位值

---

中位（中间）位置是后续所有标定的测量基准"直立体" —— 内部对应数值 2048。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="参考中位姿态" />
</div>

1. 点击**串口中位测试**，检查机械臂中位是否与上图参考一致。大致相同则中位值正常。
2. 不一致时，把机械臂摆到中位，然后点击**串口中位标定** —— 当前位置会被写入舵机作为中位值。
3. 点击**串口失能电机**，机械臂会掉电松弛 —— 注意用手扶住。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="中位测试与标定按钮" />
</div>

:::tip
这也是 LeRobot 报错 `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)` 的解法：该报错意味着某个舵机的零偏异常。在这里做一次中位标定（或用同仓库的 `servo_middle_calibration.py` 脚本），然后回到第 10 章重做整臂标定。
:::

---

## 单舵机控制与状态

---

页面上所有舵机默认处于中位。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="全部舵机处于中位" />
</div>

**1. 使能力矩并转动单个舵机。** 一键使能全部力矩或单独使能某个舵机，然后拖动滑块让舵机转动。务必**缓慢**：打印件在部分位置存在物理限位，不要把滑块拉到 0 或最大值。失能力矩后机械臂会松弛。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" alt="力矩使能后舵机移动" />
</div>

**2. 单个舵机维护。** 可以对单个舵机做中位标定，并清除其内部的中位、最大与最小位置。

**3. 读取舵机状态面板：**

| 字段 | 含义 |
| :--- | :--- |
| Pos | 位置 |
| V | 电压 |
| T | 温度 |
| Spd | 转速 |
| Load | 力矩 |
| Cur | 电流 |
| Mov | 运动状态 |
| Model | 型号、权限 |
| Status | 正常 / 过流 / 过载 |

长时间遥操作后从臂温度随负载升高属正常现象；静止时持续报 `过流` 或 `过载` 通常意味着关节卡死或中位值错误。

---

## 高级工具

---

更深入的调试可以读写原始寄存器数据、修改波特率、恢复出厂设置。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="高级工具面板" />
</div>

:::warning
盲目写寄存器和恢复出厂设置可能让舵机配置失效。优先使用引导式功能（前面各节），只有明确知道某寄存器含义时才动原始寄存器。
:::

---

## 本章小结

---

- 舵机调试工具是舵机总线的维护控制台：检测、修 ID、设中位、单舵机控制、读状态。
- 舵机 ID 永远是每次只接一个舵机逐个烧写。
- 正确的中位值（2048）是后续所有标定的基础。

机械臂组装完毕、每个舵机验证通过，第二阶段完成。第三阶段先解释机械臂为什么需要学习 —— 然后让你的 SO-ARM 投入数据采集与策略训练。

</div>
