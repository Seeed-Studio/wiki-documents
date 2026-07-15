---
description: Atom-S 入门指南。
title: Atom-S 入门指南
keywords:
  - Humanoid
  - Robotics
  - Atom S
  - XIAO ESP32-S3
  - Servo
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp
slug: /atom_s
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/cn/atom_s/
---

# Atom-S 入门指南

## 简介
Atom-S 是一款 10 自由度（Degrees of Freedom）的开源双足人形机器人套件，面向开发者、创客和教育机构设计。整机由十个 Fashionstar RA8-U25H-M 总线舵机驱动，采用完全开源的 3D 打印结构，并配备 Seeed Studio XIAO ESP32-S3 主控和 Grove 扩展板。出厂已预装完整的控制固件。其核心亮点是免安装的网页可视化动作编辑器——你可以通过浏览器实时调试舵机、录制示教动作，并直接导出 JSON，便于在 Arduino、STM32 和 Raspberry Pi 等平台上复现。随附的 RUC-01 转接板提供 5 V / 3.3 V 稳压电源和 UART 接口，支持蓝牙和网页远程控制。开箱即可使用，是桌面级机器人开发与算法验证的理想平台。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Atom-S-p-6711.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 1. 产品介绍

- **自由度布局**：机器人具备 10 个自由度，覆盖手臂、躯干和双腿。
- **结构与外观**：全 3D 打印结构，官方开源 STP / STL 模型文件，便于零件更换、结构加固和外观改造。
- **关节执行器**：十个 Fashionstar RA8-U25H-M 总线舵机，通过总线通信实现整洁、简化的布线。
- **网页动作编辑器**：基于浏览器的控制面板，支持舵机实时调试和示教编程。完成的动作组可导出为标准 `.json` 文件，便于在 Arduino、STM32 和 Raspberry Pi 平台上解析。
- **开箱即用**：默认搭载 Seeed Studio XIAO ESP32-S3 作为主控板，出厂已预烧演示程序。
- **多模块扩展**：配合 Seeed Studio XIAO 扩展板，板载 Grove 接口可连接 Seeed Grove 传感器和控制器。
- **跨平台兼容性**：RUC-01 转接板提供 5 V / 3.3 V 电源输出和 UART 接口，任何具备串口能力的控制器都可与其通信。
- **生态可扩展性**：借助 Seeed Studio XIAO 扩展板上的 Grove 接口，可快速集成视觉、环境感知等 Grove 生态传感器和控制模块。
- **跨平台兼容性**：标准 RUC-01 驱动转接板提供稳压 5 V / 3.3 V 输出和通用 UART 通信接口，便于外接 Raspberry Pi、STM32、Arduino、ESP32 或 PC 等平台。

## 2. 规格参数

| 参数 | 数值 |
| --------------- | ---------------------------------------------------------------- |
| 自由度（DOF） | 10 |
| 机身结构 | 3D 打印 |
| 舵机 | RA8-U25H-M 总线舵机 |
| 舵机电源 / 接口板 | RUC-01，提供 4 个总线舵机端口、5 V / 3.3 V 控制器电源和串口（Grove） |
| 主控制器 | Seeed Studio XIAO ESP32-S3 + Seeed Studio XIAO 扩展板 |
| 通信方式 | 异步串行通信（UART） |
| 外形尺寸 | 154 × 105 × 283 mm |

## 3. 物料清单

| 项目 | 数量 |
| ------------------------- | ---- |
| 10 自由度机器人（已组装） | 1 |
| KM 螺丝 M2 × 7 mm | 10 |
| KB 螺丝 M2 × 7 mm | 10 |
| PM 螺丝 M3 × 6 mm | 2 |
| 舵机线 200 mm 3 芯 | 2 |

:::tip
**10 自由度机器人组件包含**

- RA8-U25H-M × 10
- 结构件（套件）× 1
- RUC-01 转接板 × 1
- Seeed XIAO ESP32-S3 × 1
- Seeed XIAO 扩展板 × 1

:::

## 4. 外形尺寸

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/dimensions.png" />
</div>

---

## 5. 硬件架构

### 驱动与供电（RUC-01 接口板）

作为整机的电源与通信枢纽，负责总线管理和电源分配：

- **舵机总线**：板载 4 个总线舵机端口，支持串联扩展，同时传输信号与电源。
- **PC 配置接口**：USB Type-C，可直接连接 PC 主机进行配置。
- **系统电源**：负责电压转换，为主控板提供稳定电源。
- **通信接口**：标准 UART 串口，用于接收上位主控的指令。

### 逻辑控制与扩展（MCU + Grove 扩展板）

作为机器人的“大脑”，负责运行控制算法和传感器数据处理：

- **核心 MCU**：Seeed Studio XIAO 系列开发板，体积小巧但性能强大。
- **生态扩展**：Grove 扩展板引出丰富的 I/O 接口。
- **主要功能**：运行机器人运动学程序，并通过 Grove 接口连接传感器（超声波、视觉、语音等），实现交互能力。

### 数据流

**调试 / 编辑模式**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

*说明：通过 PC 端软件直接调整舵机角度并保存动作组，无需经过 XIAO 主控。*

**自主运行模式**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

*说明：XIAO 根据传感器反馈或预存代码自主控制机器人。*

### 通用通信接口参考（跨平台开发必读）

虽然套件默认使用 XIAO ESP32S3 作为主控，但 RUC-01 接口板对任何外部控制器都是开放的。主控与 RUC-01 之间只需四根线即可完成基础通信：

- **5 V / 3.3 V**：RUC-01 可向主控板反向供给稳定电源。
- **GND**：公共地。
- **RX / TX**：标准异步串行通信（UART），用于发送 / 接收控制指令和读取舵机反馈。


| 序号 | 接口说明 | 序号 | 接口说明 |
| ---- | ------------------------------------ | ---- | ----------------------------------------------------- |
| ① | 主电源开关 | ⑤ | 转接板通信 UART / Grove 接口（连接主控 ⑧） |
| ② | 电源输入端口 | ⑥ | 主控 ESP32S3 Type-C 数据口（固件下载） |
| ③ | 舵机端口 × 4 | ⑦ | Seeed XIAO ESP32S3 主控板 |
| ④ | Type-C 数据口（舵机调试，连接 PC） | ⑧ | 主控通信 UART / Grove 接口（连接 RUC-01 接口板 ⑤） |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/hardware_interface.webp" />
</div>

:::warning
RUC-01 接口板上靠近 Type-C 端口 ④ 的拨动开关，以及示意图左侧显示的两个 Type-C 端口，预留用于其他用途，在本项目中**不**使用。请避免误操作。
:::

## 6. 机械结构

- 结构总览与默认舵机 ID

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/servo_id_mapping.webp" />
</div>

- 全部舵机零度姿态

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/zero_pose.png" />
</div>

---

## 7. 图纸与模型下载

如需获取完整的 3D 打印数据，请访问：[MakerWorld - Atom S](https://makerworld.com/zh/models/2394805-atom-s#profileId-2624069)

:::tip
我们将逐步提供更完整的装配视频和图文说明，请持续关注本页面的更新。
:::

## 8. 运行你的第一个示例

### 开箱快速上手指南

:::tip
Atom S 出厂已完成基础控制程序烧录和初步装配。你只需准备电源和一部手机，即可快速体验机器人的动作和远程控制功能。
:::

### 硬件供电准备

由于运输限制，套件默认不附带电池。开始使用前，请准备一块兼容电池并连接到机器人背部的电源接口：

- **电池规格**：3S 12.6 V Li-Po（锂聚合物）电池
- **电池接口类型**：T 型插头
- **上电检查**：接通电源后，主控板（XIAO ESP32S3）上的指示灯会点亮，表示系统已启动。

### 网页遥控器连接

请在手机或支持蓝牙的 PC 上开启蓝牙功能，并根据操作系统选择兼容的浏览器。由于网页遥控依赖底层 Web Bluetooth API，浏览器兼容性至关重要：

- **PC（Windows / macOS）**：请使用 Google Chrome 或 Microsoft Edge。
- **Android**：请使用 Google Chrome；不要使用系统默认浏览器，也不要通过微信扫码打开。
- **iOS**：Safari、Chrome 和 Edge 不支持 Web Bluetooth。请从 App Store 下载支持 WebBLE 协议的第三方浏览器，例如 Bluefy。

**访问网址**：[Remote Controller](https://wiki.fashionrobo.com/ps2v2/)

- 未连接状态：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_disconnected.png" />
</div>

- 点击界面顶部的 **SYSTEM LINK** 按钮搜索并连接设备：
- 在弹出的蓝牙设备列表中，选择名称为 **ESP32_Pro_Remote** 的设备并点击配对。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_pairing.png" />
</div>

- 已连接：连接成功后，机器人会自动做出一次“鞠躬”动作并回到默认站立姿态，表示系统已准备就绪。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_connected.png" />
</div>

### 开始你的第一个连续动作示教序列

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_layout.webp" />
</div>

使用网页虚拟手柄，你可以在无需编写任何代码的情况下，快速教会机器人一个连续动作序列：

- **准备**：点击左上角的 **HOME** 按钮，确保机器人处于标准初始站立姿态。
- **关节解锁**：点击左上角的 **RELAX** 按钮，使机器人进入阻尼模式。此时所有舵机断电，你可以手动移动每个关节。
- **记录第一帧**：手动摆出机器人的姿势，然后点击 **Left ◀** 方向键记录当前姿态。
- **记录后续帧**：继续改变机器人的姿态并再次点击 **Left ◀**。重复此过程以记录一系列动作帧；默认最多支持 100 帧。
- **播放动作序列**：所有姿态记录完成后，点击 **Right ▶** 方向键，机器人将平滑回放所有已记录动作。
- **调整播放速度**：如果播放过快或过慢，可点击 **Up ▲**（加速）或 **Down ▼**（减速）来调整动作速度。
- **一键演示**：点击右侧的 **Square □** 按钮，可直接播放出厂默认演示动作。

:::tip
如果你已经完成快速体验，并希望进一步导出动作 JSON、修改主控逻辑或连接其他控制器，请继续阅读后续章节。
:::

## 9. 自定义动作开发核心流程

### 姿态设计与数据导出（Web 动作编辑器）

- **连接与读取**：通过 PC 浏览器连接 RUC-01 接口板，实时读取机器人的舵机状态。

  [Motion Editor](https://wiki.fashionrobo.com/uartbasic/robotstudiopro/)
- **解锁与示教**：一键让舵机断电进入阻尼模式，手动移动机器人，并记录每一帧姿态。
- **编排与微调**：调整关键帧的执行时间和间隔，并在软件中实时回放以优化动作流畅度。
- **导出 JSON**：确认动作无误后，将整个动作组导出为标准 `.json` 文件。

### 数据集成与固件烧录（ESP32 主控制器）

- **开源项目**：在 Arduino IDE 中打开随附的 ESP32 主控制器项目源码。
- **替换代码**：完整复制导出的 `.json` 数据，替换 `Robot.ino` 文件中现有的 `jsonData` 变量内容。
- **编译与烧录**：重新编译项目，并将更新后的固件烧录到 ESP32S3 主控板。

### 无线遥控与触发执行（Web 远程终端）

- **无线连接**：在手机上打开 [Remote Controller](https://wiki.fashionrobo.com/ps2v2/) 网页遥控，并与机器人配对。
- **一键触发**：点击界面上的 **Square □** 按钮（指令 `0x10`），机器人将在无需数据线的情况下自主连续执行新设计的动作序列。

### 动作编辑器使用指南

#### 编辑器布局

三个主要模块：

1. 串口连接 / 断开与消息状态
2. 舵机状态 / 角度查询与控制
3. 动作组优化与导入 / 导出

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_layout.webp" />
</div>

#### 控制参考

连接 / 断开串口

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_connect.png" />
</div>

实时姿态页面

- **布局**：在画布上拖动各个舵机控制以排布机器人部件；ID 一一对应；点击可锁定布局。
- **扫描**：重新扫描所有在线舵机。
- **检查**：过压 / 欠压保护、堵转及其他异常状态。
- **读取一次**：读取当前角度一次。
- **状态颜色**：绿色 = 角度控制；红色 = 释放 / 阻尼。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_realtime_posture.png" />
</div>

通过拖动进行角度控制：

- **实时读取**：持续读取舵机角度。
- **速度**：在拖动过程中限制速度，以避免动作过大。
- **解锁模式**：释放舵机用于示教（断电释放 / 阻尼释放）。

<div align="center">
    <img width={800}
    src="C:\Users\seeed\Desktop\Atom-S-Final\images2\servo_angle_control.webp" />
</div>

动作组页面

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_1.png" />
</div>

下面对各个按钮进行说明：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_2.png" />
</div>


#### 从编辑器到离线动作（XIAO ESP32S3 Sense）

- **1.** 点击 "Connect" 打开串口。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/connect_serial_port.png" />
</div>

- **2.** 选择目标串口。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/select_serial_port.webp" />
</div>

- **3.** 扫描机器人上的所有舵机。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/scan_all_servos.webp" />
</div>

- **4.** 点击 "Release All" 使所有舵机断电以便手动定位，或只解锁你需要的舵机。
- **5.** 设置 "Time" 和 "Interval"。
- **6.** 每次编辑后，点击 "Add Current" 将其追加到动作组中。
- **7.** 播放以进行验证。

:::info
**注意**

每一帧动作都可以单独编辑（角度、时间、间隔）并进行验证。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/edit_action_frame.webp" />
</div>

- **8.** 点击 "Export (JSON)" 导出动作组。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/export_action_group.webp" />
</div>

- **9.** 打开导出的 JSON，并复制 `frames` 的内容（包括外层的 `[]`）。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/copy_json_frames.webp" />
</div>

- **10.** 将程序中的 `jsonData` 替换为复制的内容；编译并烧录后，即可通过蓝牙手柄控制机器人（详见“机器人控制参数”）。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/replace_jsondata_code.png" />
</div>

### 机器人控制参数（按需调整）

#### 默认值

- `BAUDRATE`：UART 波特率。
- `SERVO_NUM`：舵机数量。

```
#define BAUDRATE               115200     /* Baud rate */
#define SERVO_NUM              10         /* Total number of servos */
```

#### 蓝牙（如使用）

- `BLE_NAME`：手柄名称。
- `BLE_UUID`：手柄 UUID。

```
/* Bluetooth settings -- modify according to actual conditions */
#define BLE_NAME               "LOOKBON"  /* Bluetooth name */
#define BLE_UUID               "AE02"     /* ID for Bluetooth data reception */
```

#### Web 远程（如使用）

- `SERVICE_UUID`：服务 ID。
- `CHARACTERSTIC_UUID`：特征 ID。

```
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID           "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID    "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

#### 示教模式

- `MAX_ACTIONNUM`：示教模式下允许的最大动作帧数。
- `Default_RobotRunSpeed_Demonstration`：默认运行速度。
- `MIN_RobotRunSpeed_Demonstration`：最慢运行速度。
- `MAX_RobotRunSpeed_Demonstration`：最快运行速度。
- `Adjust_RobotRunSpeed_Step`：示教模式下的速度调节步进值（每步 ±200）。

```
#define MAX_ACTIONNUM                         100   /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration   1000  /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration       5000  /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration       500   /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step             200   /* Step value for adjusting teaching run speed */
```

#### 数据字段（按需自定义）

- `RemoteControl_DefaultDemoAction`：默认演示动作（由编辑器导出）。
- `RemoteControl_Exe`：示教模式执行命令。
- `RemoteControl_Record`：示教模式记录命令。
- `RemoteControl_Damping`：阻尼模式命令。
- `RemoteControl_Reset`：复位命令。
- `RemoteControl_ReduceRunSpeed`：降低示教模式运行速度。
- `RemoteControl_AddRunSpeed`：提高示教模式运行速度。

蓝牙说明：实际控制器数据取决于你的设备，请在代码中按需定义各个按键。

```
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0xA1   /* Default demonstration motion */
#define RemoteControl_Exe                     0xA2   /* Teaching mode execution command */
#define RemoteControl_Record                  0xA3   /* Record motion command */
#define RemoteControl_Damping                 0xA4   /* Damping mode command */
#define RemoteControl_Reset                   0xA5   /* Robot reset command */
#define RemoteControl_ReduceRunSpeed          0xA6   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0xA7   /* Increase teaching run speed */
```

Web 远程注意事项：同样，请在集成前确认数据和按键映射。

```
/* Web remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0x10   /* Default demonstration motion */
#define RemoteControl_Exe                     0x08   /* Teaching mode execution command */
#define RemoteControl_Record                  0x04   /* Record motion command */
#define RemoteControl_ReduceRunSpeed          0x02   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0x01   /* Increase teaching run speed */

#define RemoteControl_Damping                 0x04   /* Damping mode command */
#define RemoteControl_Reset                   0x08   /* Robot reset command */
```

#### 复位角度

- `ROBOT_RESET_POSITION_0` ~ `ROBOT_RESET_POSITION_9`：舵机 ID 0–9 的零位（机器人复位姿态）。

注意：请根据你机器人的复位姿态修改这些参数。

```
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 0;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = 0;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

### 遥控参考

#### 蓝牙手柄

1. 长按手柄电源键开机，并与 MCU（XIAO_ESP32S3）配对。
2. 配对成功后，机器人会鞠躬并复位。

动作功能：

- “Run Motion”：执行内置动作。
- “Reset Robot”：回到复位姿态。
- “Damping Mode”：进入可自由拖动关节的示教状态。
- “Record Teaching Motion”：记录当前动作。
- “Execute Teaching Motion”：运行已记录的动作（默认不会清除）。
- “Decrease Teaching Speed”：降低运行速度（右臂舵机 ID 6 摆动以指示速度）。
- “Increase Teaching Speed”：提高运行速度（右臂舵机 ID 6 摆动以指示速度）。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_1.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_2.webp" />
</div>

## 10. 标准主控固件烧录指南（基于 Seeed Studio XIAO ESP32S3）

:::tip
本章节仅适用于标准 XIAO ESP32S3 主控环境。如果你的项目使用 STM32 或 Raspberry Pi，请直接参考附录中的多平台 Fashionstar 舵机控制 SDK。
:::

### 开发环境搭建（Arduino IDE）

从 Arduino 官方网站下载并安装最新的 Arduino IDE，推荐使用 Arduino IDE 2.x。

### 导入 ESP32 硬件支持包

首先，打开 Arduino IDE 的首选项：

- Windows：`File > Preferences`
- macOS：`Arduino IDE > Settings...` 或 `Preferences...`

在 “Additional Boards Manager URLs” 中输入以下 URL：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduino_preferences.png" />
</div>

### 部署 ESP32 编译环境（严格版本要求）

- 打开 `Tools > Board > Boards Manager`
- 搜索 `esp32`
- 找到由 `Espressif Systems` 提供的包
- **手动选择并安装 3.3.5 版本**

:::warning
请**不要**直接安装最新版本。当前项目的蓝牙与总线驱动组合要求使用 3.3.5 版本，否则蓝牙或总线通信可能无法编译或运行异常。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/esp32_board_manager.webp" />
</div>

### 安装所需库（ArduinoJson 和 ArduinoBLE）

系统依赖以下第三方库进行 JSON 解析和蓝牙服务：

- `ArduinoJson`
- `ArduinoBLE`

安装方法：

- 打开 `Sketch > Include Library > Manage Libraries...`
- 搜索并安装 `ArduinoJson`
- 搜索并安装 `ArduinoBLE`

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinojson_library.png" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinoble_library.png" />
</div>

### 部署 Fashion Star 舵机核心驱动 SDK

为确保底层驱动正确调用，需要手动安装官方 SDK：

- 在随附资料包中找到 `fashionstar-uart-servo-arduino-sdk-V2.rar`
- 解压压缩包
- 将整个 SDK 文件夹复制到 Arduino 默认库目录

**默认库路径**：

- Windows：`C:\Users\Username\Documents\Arduino\libraries`
- macOS：`~/Documents/Arduino/libraries`

复制完成后，完全关闭并重新打开 Arduino IDE，以便重新加载本地库。

### 选择开发板并编译 / 烧录

- 使用 Type-C 数据线将 XIAO ESP32S3 连接到电脑
- 打开 `Tools > Board > esp32` 并选择 `XIAO_ESP32S3`
- 打开 `Tools > Port` 并选择对应主控板的端口

端口名称通常为：

- Windows：`COM3`、`COM5` 等
- macOS：`/dev/cu.usbmodem...` 或 `/dev/cu.usbserial...`

最后，在 Arduino IDE 中打开项目源码（`.ino`），点击左上角的 Upload 按钮，等待控制台显示 “Upload successful”。

---

## 11. 底层控制参数配置规范（基于标准主控 Seeed Studio XIAO ESP32S3）

在 Arduino IDE 中打开项目源码后，可根据实际项目需求修改以下宏定义和常量。请确认每个参数所在的文件，避免误改。

### 基础硬件参数
位于 `Control.h`

- `BAUDRATE`：主控与 RUC-01 通信的串口波特率
- `SERVO_NUM`：机器人舵机总数

```cpp
/* User-modifiable robot data area */
/* define */
#define BAUDRATE 115200 /* Baud rate */
#define SERVO_NUM 10    /* Total number of servos */
```

### UART 物理引脚重映射
位于 `Robot.ino`

- `TX_PIN` / `RX_PIN`：ESP32S3 与 RUC-01 转接板通信所使用的串口引脚

```cpp
/* Serial1 -- GPIO D6 = GPIO43 D7 = GPIO44 */
#define TX_PIN 43
#define RX_PIN 44
```

### Web 远程蓝牙通信参数
位于 `Robot.ino` 和 `Control.h`

- `BLE_NAME`：蓝牙广播名称
- `SERVICE_UUID` / `CHARACTERISTIC_UUID`：Web 远程与主控建立通信所依赖的服务 UUID 和特征 UUID

```cpp
/* Set Bluetooth name */
BLE.setLocalName("ESP32_Pro_Remote");
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

### 示教模式参数参考
位于 `Control.h`

- `MAX_ACTIONNUM`：示教模式下可记录的最大动作帧数
- `Default_RobotRunSpeed_Demonstration`：默认运行速度
- `MIN / MAX_RobotRunSpeed_Demonstration`：速度调节的上下限
- `Adjust_RobotRunSpeed_Step`：每次加减速的步进值

```cpp
#define MAX_ACTIONNUM 100                        /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration 1000 /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration 5000     /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration 500      /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step 200            /* Step value for adjusting teaching run speed */
```

### 按键数据与命令宏定义
位于 `Control.h`

在无线遥控通信中，Web 远程会将按键状态打包到两个独立变量中：

- `btn_Main`：主操作区按键
- `btn_border`：系统控制区按键

因此，一些十六进制命令可能会在两个区域中都出现，但它们对应的是不同的变量，不会产生冲突。

```cpp
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
/* The following commands correspond to btn_Main (red hexadecimal labels in the mapping diagram) */
#define RemoteControl_DefaultDemoAction 0x10 /* Default demonstration motion command (Square button) */
#define RemoteControl_Exe               0x08 /* Teaching mode execution command (D-pad Right) */
#define RemoteControl_Record            0x04 /* Record motion frame command (D-pad Left) */
#define RemoteControl_ReduceRunSpeed    0x02 /* Decrease teaching run speed (D-pad Down) */
#define RemoteControl_AddRunSpeed       0x01 /* Increase teaching run speed (D-pad Up) */

/* The following commands correspond to btn_border (yellow hexadecimal labels in the mapping diagram) */
#define RemoteControl_Damping           0x04 /* Damping / release mode command (RELAX button) */
#define RemoteControl_Reset             0x08 /* Robot reset command (HOME button) */
```

### 动作组数据挂载区
位于 `Robot.ino`

将从动作编辑器导出的 `.json` 数据复制到 `jsonData` 变量中，保留 `R(` 和 `)`;`：

```cpp
/* Default demonstration motion */
const char* jsonData = R"(
[
  // Paste the JSON data exported from the motion editor here, completely replacing this section
  {"angles":[{"id":0,"angle":0},{"id":1,"angle":0} ... ],"time":2000,"delay":500}
]
)";
```

### JSON 缓冲区分配大小
位于 `Control.cpp`

如果动作序列过长，可能会导致运行时内存不足或 JSON 解析失败。此时可以适当增大 `DynamicJsonDocument` 的容量：

```cpp
/* Create a JSON document object with sufficient space allocated */
DynamicJsonDocument doc(4096);
```

根据动作复杂度需要，将其增加到 `8192` 或更高。

### 机器人复位角度参数与零点补偿
位于 `Control.h`

`ROBOT_RESET_POSITION_0 ~ 9`：分别对应舵机 ID 0 到 9 的零初始角度

:::tip
由于机械装配公差的存在，每台机器人的绝对零位可能略有差异。建议在确认机器人站立姿态后，对这些参数进行微调和补偿。
:::

```cpp
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 90;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = -90;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

## 12. Web 远程终端功能字典与底层映射

:::tip
关于浏览器兼容性和基础蓝牙配对步骤，请先参考本文档第 2 章。本章主要说明控制界面中的按键布局以及底层十六进制映射关系，以便后续进行二次开发。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_keys.webp" />
</div>

### 系统控制区域
对应代码变量：`btn_border`

该区域主要位于界面顶部和边缘，用于控制机器人的全局状态：

- **HOME** (`0x08`)：中断当前动作，使机器人恢复到默认标定站立姿态，并清除当前内存中的示教数据
- **RELAX** (`0x04`)：进入阻尼 / 释放模式，释放所有舵机的保持力矩，便于手动示教
- **其他黄色标注按键**：如 `L1`、`L2`、`R1`、`R2`、`L3`、`R3` 等，在当前出厂演示程序中未分配任何动作，可由开发者按需扩展

### 主操作区域
对应代码变量：`btn_Main`

主操作区域包含方向键和右侧功能键，主要负责动作编排与执行：

- **方向键左 ◀** (`0x04`)：记录当前动作帧
- **方向键右 ▶** (`0x08`)：回放当前已记录的动作序列
- **方向键上 ▲** (`0x01`)：提高运行速度
- **方向键下 ▼** (`0x02`)：降低运行速度
- **方块键 □** (`0x10`)：执行主控 Flash 中预存的默认 `jsonData` 动作
- **其他红色标注按键**：如 `△`、`○`、`×` 等，在当前固件中未定义，可在底层代码中按需映射

## 常见问题解答（FAQ）

> 源网站页面正在建设中；内容将在可用时补充。

### 常见问答

**Q1: Atom-S 应该使用什么电池？**

A：推荐使用带 XT60 接头的标准 2S 或 3S 锂聚合物（Li-Po）电池。

**Q2: 能否用其他主控替换 XIAO ESP32-S3？**

A：本设计针对 XIAO ESP32-S3 做了优化，但任何具有足够 GPIO 的 ESP32 开发板，只需做少量修改也可以使用。

**Q3: 如何更新固件？**

A：通过 USB 将 XIAO ESP32-S3 连接到电脑，打开 Arduino IDE 或 PlatformIO，然后上传新程序。

**Q4: 动作编辑器在哪里？**

A：Web 动作编辑器可通过浏览器访问。详细操作请参考第 7.1 章。

---

### 常见故障排查

#### 固件烧录无响应 / 卡死

- **现象**：Arduino IDE 报告 `A fatal error occurred: Failed to connect`，或上传过程卡住
- **解决方法**：
  - 保持 USB 线连接
  - 长按开发板上的 BOOT 按钮
  - 在 IDE 中点击 **Upload** 按钮
  - 当控制台显示 `Connecting...` 或开始显示传输进度时松开 BOOT 按钮

#### Web 终端无法枚举蓝牙设备

- **现象**：点击 "Find Device" 后，蓝牙设备列表为空
- **排查步骤**：
  - 确认正在使用支持 `Web Bluetooth API` 的浏览器
  - Windows 用户：确认操作系统版本至少为 Win10（1703+）
  - macOS 用户：检查系统“隐私与安全性”设置，确保已授予浏览器蓝牙权限

#### 关节无力 / 无法保持姿态

- **现象**：固件运行正常且已建立通信，但机器人无法有效支撑负载
- **排查步骤**：
  - 检查 3S 电池的充放电能力是否充足
  - 检查总线接线是否松动或反接
  - 如更换过舵机，确认全部 10 个舵机 ID（0–9）与项目定义一致，避免 ID 冲突
