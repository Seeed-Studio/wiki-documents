---
description: "SO-ARM 具身智能入门课程第 6 章 —— 3D 打印结构件、连接舵机总线与供电、用 lerobot-setup-motors 烧写舵机 ID 与波特率，再按步骤组装 SO-ARM 主臂与从臂。"
title: 第 6 章 - 电机配置与机械臂组装
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 组装
  - 舵机
  - 标定
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_6
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 6 章 · 实践</span>
    <h2>6. 电机配置与机械臂组装</h2>
    <p>
      3D 打印结构件、连接舵机总线与供电、用 lerobot-setup-motors 逐个烧写舵机 ID 与波特率，再按步骤组装 SO-ARM 主臂与从臂。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行运动程序前先清空机械臂工作区</strong>
    <p>
      在运行任何能让机械臂运动的程序之前，清空工作区 1 米范围内的贵重物品、易碎品、工具、线缆与无关物品。调试与运行期间，人员远离机械臂运动范围。
    </p>
    <ul>
      <li>机械臂上电后，不要触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>舵机配置、标定、遥操作、数据录制、回放或策略评估前，确认机械臂已牢固固定。</li>
      <li>保持至少 1 米安全距离，并让附近人员知道机械臂可能突然运动。</li>
      <li>出现异常运动、异响、抖动、线缆松动、电源接触不良或通信丢失时，立即停止程序并断电检查。</li>
      <li>插拔舵机线、USB 线、电源接头或电机控制板线缆前先断电。</li>
    </ul>
  </div>
</div>

:::tip
如果你购买的是组装完成版机械臂，可以跳过本章，直接进入第 10 章（整臂标定）。
:::

<a id="overview"></a>

## 3D 打印指南（套件版）

---

如果买的是套件版（只有舵机与五金、不含打印件），先打印结构件。STL 文件在普通 FDM 打印机上即可打印：

- **材料**：PLA+
- **喷嘴 / 层高**：0.4mm 喷嘴 0.2mm 层高，或 0.6mm 喷嘴 0.4mm 层高
- **填充率**：15%
- **支撑**：全域支撑，忽略与水平面夹角大于 45° 的斜面；水平向螺孔内不要生成支撑

主臂或从臂的全部零件都打包在单个 STL 中，且已按 z 轴朝上排布以尽量减少支撑：

- 220mm × 220mm 热床（如 Ender）：[从臂 Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl) · [主臂 Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)
- 205mm × 250mm 热床（如 Prusa / Up）：[从臂 Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl) · [主臂 Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

:::caution
随着官方 SO101 更新，SO100 源文件已停止维护，但仍可在我们的 [Makerworld](https://makerworld.com/zh/models/908660) 找到。已购 SO100 的用户，教程与安装方式仍然兼容 —— SO101 的打印件与 SO100 电机套件的安装完全兼容。
:::

**可选**：为柔软、易碎或不规则物体打印软夹爪（TPU 指夹 + PLA 件），需要装相机时也可打印相机支架嵌件。文件在 [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) 仓库。

---

## 规划电机：标签、ID 与齿轮比

---

为两条臂各准备一个总线舵机适配器和 6 个电机。给每个电机贴标签 **F1–F6**（从臂关节 1–6）或 **L1–L6**（主臂关节 1–6） —— 在舵机外壳上写清楚，能省下大量调试时间。

| 舵机型号 | 齿轮比 | 对应关节 |
| :--- | :--- | :--- |
| ST-3215-C044（7.4V） | 1:191 | L1 |
| ST-3215-C001（7.4V） | 1:345 | L2 |
| ST-3215-C044（7.4V） | 1:191 | L3 |
| ST-3215-C046（7.4V） | 1:147 | L4–L6 |
| ST-3215-C001（7.4V）/ C018（12V）/ C047（12V） | 1:345 | F1–F6 |

:::danger
按舵机类型给总线供电：7.4V 版 STS3215 用 5V，12V 版用 12V。主臂始终使用 7.4V 电机 —— 如果你同时有 12V 和 7.4V 电机，插电前务必核对适配器，否则可能烧毁电机！USB 线不供电：电源与 USB 必须同时插上。
:::

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="全部电机接入总线" />
</div>

:::tip
SO-ARM101 的舵机标定与初始化流程在方法和代码上与 SO-ARM100 相同 —— 但 SO-ARM101 主臂前三个关节的齿轮比与 SO-ARM100 不同，请仔细区分并配置。
:::

---

## 查找 USB 端口

---

运行工具脚本找出每条臂的控制板占用的串口：

```bash
lerobot-find-port
```

示例输出：

```text
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

几个省时的提示：

- 提示拨线时务必真的拔掉 USB，否则无法识别接口。
- 在 Linux 与 Jetson 上，先插的设备通常映射为 `ttyACM0`（一般为从臂），第二个为 `ttyACM1`（主臂）。
- 如果 LeRobot 之后报 `Could not connect on port '/dev/ttyACM0'`，授权后重新检查：

```bash
sudo chmod 666 /dev/ttyACM*
```

---

## 配置舵机 ID 与波特率

---

配置工具会**逐个**舵机烧写正确的 ID 与波特率（第 4 章解释过原因：所有舵机共用总线，重复 ID 会被一并改写）。

标定前请参考以下各关节标准接线姿态图片：

**主臂舵机标定参考图**

| **关节 6** | **关节 5** | **关节 4** | **关节 3** | **关节 2** | **关节 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**从臂舵机标定参考图**

| **关节 6** | **关节 5** | **关节 4** | **关节 3** | **关节 2** | **关节 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

**标定从臂舵机。** 将 USB 线与电源接到从臂控制板，然后运行：

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- 粘贴上一步找到的端口
```

工具会逐关节引导：

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

只把夹爪电机（F6）接到控制板，按 **Enter**，脚本自动写入它的 ID 与波特率：

```text
'gripper' motor id set to 6
```

接着：

```text
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

上一根 3 芯线可以留在夹爪电机的另一端；给腕部回转电机换一根新的 3 芯线，只把这一个电机接到板子上。按提示对每个电机重复 —— 任何时刻都只接一个电机。

:::tip
每次按 Enter 前检查接线 —— 电源线在你摆弄板子时特别容易松脱。
:::

脚本结束后，把电机依次级联：每个电机的 3 芯线插到下一个电机，1 号电机（肩部旋转，ID 1）的线接到控制板，控制板此时可以固定到臂座上。

**主臂舵机标定**方法相同：

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- 粘贴上一步找到的端口
```

:::tip
SO100 用户：SO100 与 SO101 代码兼容 —— 直接使用同样的 `so101_leader` / `so101_follower` 类型和参数即可。
:::

---

## 组装

---

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
SO-ARM101 双臂组装与 SO-ARM100 相同 —— 区别仅在于 SO-ARM101 增加了线缆夹，且主臂关节舵机齿轮比不同。SO100 和 SO101 都可以按以下步骤组装。组装前，再对照 6.2 节的表格核对电机型号、齿轮比与电源电压。
:::

**组装主臂**

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** | **步骤 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **步骤 19** | **步骤 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**组装从臂**

:::tip
从臂组装与主臂基本一致，唯一区别是步骤 12 之后末端执行器（夹爪与把手）的安装方式。
:::

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

---

## 进入下一章前的检查清单

---

- 两条臂已组装，每个舵机都能以预期 ID 响应（用第 7 章的工具验证）；
- 供电电压符合版本规则（标准版两臂均 5V；专业版主臂 5V、从臂 12V）；
- 两块控制板分别以 `/dev/ttyACM0` 与 `/dev/ttyACM1` 出现；
- 线缆插紧、无锐弯、且不进入关节运动范围。

如果有舵机未检测到、ID 疑似重复或中位不对，下一章的舵机调试工具正是为这些问题准备的。

</div>
