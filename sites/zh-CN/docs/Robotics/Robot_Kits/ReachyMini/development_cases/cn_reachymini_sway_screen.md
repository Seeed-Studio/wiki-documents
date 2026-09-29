---
description: 用 XIAO ESP32-S3 Plus 触摸屏的 IMU 传感器，倾斜屏幕即可体感控制 Reachy Mini 机器人身体摇摆、头部转动和点头。
title: Reachy Mini × XIAO 屏幕体感控制
slug: /reachymini_development_cases_sway_screen
image: https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif
keywords:
  - Reachy Mini
  - IMU
  - 体感控制
  - XIAO ESP32-S3
  - 触摸屏
  - LSM6DS3
  - Arduino
  - Python
sku: 100090917, 114993666
last_update:
  date: 2026-09-21
  author: jingyizhang
translation:
  skip: [zh-CN]
createdAt: '2026-09-20'
updatedAt: '2026-09-21'
url: https://wiki.seeedstudio.com/cn/reachymini_development_cases_sway_screen/
---

# Reachy Mini × XIAO 屏幕体感控制

结合 **Reachy Mini** 机器人与 **XIAO ESP32-S3 Plus 触摸屏**，利用屏幕内置 IMU 传感器（LSM6DS3），倾斜屏幕即可体感控制机器人身体左右摇摆、头部左右转动和上下点头。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif"
    alt="Reachy Mini × XIAO 屏幕体感控制演示" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 Reachy Mini 🤖</font></span></strong>
</a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 XIAO 1.47'' 🖥️</font></span></strong>
</a>
</div>

<p align="center">
    <img src="https://img.shields.io/badge/Platform-Reachy%20Mini-blue.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Controller-XIAO%20ESP32--S3%20Plus-green.svg" alt="Controller" />
    <img src="https://img.shields.io/badge/Sensor-LSM6DS3%20IMU-orange.svg" alt="Sensor" />
    <img src="https://img.shields.io/badge/Language-Arduino%20%7C%20Python-yellow.svg" alt="Language" />
</p>

---

## 效果演示

| 操作 | 机器人响应 | 屏幕显示 |
|:-----|:-----------|:---------|
| 左右倾斜屏幕 | 身体左右摇摆 + 头部左右转动 | 颜文字随倾斜方向摆动 |
| 前后倾斜屏幕 | 头部上下点头 | — |
| 屏幕静止 | 保持不动（手动触发） | 颜文字回正 |

屏幕上显示 `≧∇≦` 颜文字，旋转 90° 正立，随倾斜方向摆动。XIAO 屏幕的显示图案可以自定义，参考 [1.47 inch Touch Display 入门教程](https://wiki.seeedstudio.com/getting_started_1.47_inch_touch_display_nrf52840/) 编译烧录你自己的图案。

---

## 硬件清单

| 硬件 | 说明 |
|:-----|:-----|
| [Reachy Mini 无线套件](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | USB 直连电脑 |
| [1.47 inch Touch Display — XIAO ESP32-S3 Plus](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html) | 内置 LSM6DS3 IMU 传感器 |
| PC (Windows) | Python 3.11+ |
| USB 数据线 ×2 | 屏幕和机器人各一根 Type-C |

---

## 软件环境

### 步骤 1. 安装 Arduino CLI

从 [Arduino CLI Releases](https://github.com/arduino/arduino-cli/releases) 下载并安装。

### 步骤 2. 安装 ESP32 开发板支持

```bash
arduino-cli config init
```

编辑配置文件 `~/.arduino15/arduino-cli.yaml`，在 `board_manager.additional_urls` 中添加：

```yaml
board_manager:
  additional_urls:
    - https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

安装 ESP32 核心：

```bash
arduino-cli core install esp32:esp32
```

:::tip
屏幕开发板选择 `XIAO_ESP32S3_Plus` 作为编译目标（fqbn）。
:::

### 步骤 3. 安装 Seeed GFX 库

屏幕显示依赖 [Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX) 库，请从 GitHub 获取并安装到 Arduino libraries 目录。

### 步骤 4. 安装 Python 依赖

```bash
pip install reachy-mini pyserial numpy
```

---

## 步骤一：获取项目代码

```bash
git clone https://github.com/Genie-INSPIRE/reachy-mini-sway-screen.git
cd reachy-mini-sway-screen
```

项目包含：

| 文件 | 作用 |
|:-----|:-----|
| `reachy_sway_screen/reachy_sway_screen.ino` | 屏幕固件：读取 IMU + 串口发送 + 画颜文字 |
| `reachy_sync/sway_follow.py` | 主控制程序：串口读取 + 机器人控制 |
| `reachy_sync/start_daemon.py` | Reachy Mini 守护进程启动脚本 |

---

## 步骤二：烧录屏幕固件

### 1. 查找屏幕 COM 口

插入屏幕 USB，打开 **设备管理器**，找到 **USB-Serial/JTAG** 对应的 COM 口（VID `0x303A`）。

:::note
屏幕通过 VID 自动识别，COM 口编号变化不影响识别。
:::

### 2. 编译并烧录

```bash
arduino-cli compile --fqbn esp32:esp32:XIAO_ESP32S3_Plus -u -p COM9 --warnings none reachy_sway_screen
```

将 `COM9` 替换为你实际的屏幕 COM 口。

### 3. 校准中位

1. 将屏幕**平放在桌面**上（保持水平）
2. 等待 2 秒（屏幕显示 `hold neutral`）
3. 自动采样 0.5 秒，保存中位到 **NVS**（断电不丢失）
4. 如需重新校准：用串口工具（115200 baud）向屏幕发送字母 `c`

:::caution
首次使用或更换屏幕后必须校准中位，否则倾斜角度会有偏差。
:::

---

## 步骤三：启动机器人守护进程

### 1. 查找机器人 COM 口

插入机器人 USB，在设备管理器中找到 **CH343 芯片**对应的 COM 口（VID `0x1A86`）。

### 2. 修改 COM 口

编辑 `reachy_sync/start_daemon.py`，将 `COM14` 改为你实际的机器人 COM 口：

```bash
# 用编辑器打开 start_daemon.py，修改 COM14 为你的实际端口
```

### 3. 启动

```bash
cd reachy_sync
python -u start_daemon.py
```

看到 `Uvicorn running on http://127.0.0.1:8000` 即表示成功。

:::tip
可在浏览器中打开 http://127.0.0.1:8000/ 确认守护进程正在运行。
:::

---

## 步骤四：运行主控制程序

```bash
cd reachy_sync
python -u sway_follow.py
```

看到以下输出即表示成功：

```text
screen connected on COMx
connected
ready: L/R tilt -> body sway + head yaw. F/B tilt -> head pitch.
```

倾斜屏幕，机器人就会跟着动了！

---

## 工作原理

### 数据流

```text
屏幕 IMU (LSM6DS3)
  ax = 左右倾斜, ay = 前后倾斜
  tilt = -asinf(ax), pitch = -asinf(ay)
  死区过滤 + 增益放大 + 低通滤波
  串口发送: "sway <值> pitch <值> rad" (115200 baud)
        ↓
Python (sway_follow.py)
  读取串口数据
  两级低通滤波 (系数 0.22)
  计算 body_yaw, head yaw, head pitch
        ↓
Reachy Mini Daemon (端口 8000)
  set_target(body_yaw, antennas, head)
        ↓
机器人电机执行
```

### 屏幕固件关键参数

| 参数 | 值 | 说明 |
|:-----|:---|:-----|
| `GAIN` | 6.0 | 倾斜放大倍数，越大越灵敏 |
| `FILT` | 0.25 | 低通滤波系数，越小越平滑但越慢 |
| `AMP` | 0.7 | 最大输出幅度 (rad)，约 40° |
| `deadband` | 0.008 | 死区 (rad)，0.5° 以内忽略 |

### 机器人端关键参数

| 参数 | 值 | 说明 |
|:-----|:---|:-----|
| `HEAD_K` | 0.40 | 头部左右转动增益 |
| `HEAD_PITCH_K` | 0.65 | 头部上下点头增益 |
| 滤波系数 | 0.22 / 0.22 | 两级低通，越小越平滑 |

### 天线镜像说明

Reachy Mini 的两个天线电机是镜像安装的：

- **右天线** (index 0)：正值往左倒，负值往右倒
- **左天线** (index 1)：正值往右倒，负值往左倒

要让两个天线往同一方向倒，需要用相反符号：右天线用减，左天线用加。

---

## 参数调优

### 太卡顿

- 增大屏幕 `FILT`（如 0.25 → 0.30）：屏幕端滤波更强
- 减小机器人端滤波系数（如 0.22 → 0.15）：更平滑但响应慢

### 响应太慢

- 增大屏幕 `GAIN`（如 6.0 → 8.0）：小倾斜触发大动作
- 增大机器人端滤波系数（如 0.22 → 0.30）：更快响应

### 头部方向反了

| 问题 | 解决方法 |
|:-----|:---------|
| 左右反 | 翻转 `tilt` 符号（`.ino` 中 `tilt = -asinf(ax)` 加/去负号） |
| 上下反 | 翻转 `pitch` 符号（`.ino` 中 `pt = -asinf(ay)` 同理） |

### 颜文字方向不对

| 问题 | 解决方法 |
|:-----|:---------|
| 旋转角度 | 修改 `.ino` 中 `drawFigure(dyn + 1.5708f)` 的 `1.5708`（= 90°） |
| 倾斜方向反 | 修改 `dyn = kaoDev * 2.0f` 改成 `dyn = -kaoDev * 2.0f` |

---

## FAQ

<details>
<summary><strong>Q: 断电后需要重新做什么？</strong></summary>

A: 重启守护进程（`python start_daemon.py`），再启动 `sway_follow.py`。屏幕固件和中位数据保存在 NVS 里，不会丢失。

</details>

<details>
<summary><strong>Q: COM 口编号变了怎么办？</strong></summary>

A: 屏幕靠 VID（`0x303A`）自动识别，不用改。机器人在 `start_daemon.py` 里改 COM 口号。

</details>

<details>
<summary><strong>Q: 机器人不动？</strong></summary>

A: 检查守护进程是否在 8000 端口运行（浏览器打开 http://127.0.0.1:8000/），不行就重启守护进程。

</details>

<details>
<summary><strong>Q: 屏幕不显示或不发送数据？</strong></summary>

A: 检查 USB 连线、重新烧录固件、用串口工具（115200 baud）查看是否有 `sway ... pitch ... rad` 输出。

</details>

<details>
<summary><strong>Q: 头部方向反了怎么调？</strong></summary>

A: 左右反 → 翻转 `.ino` 中 `tilt = -asinf(ax)` 的负号；上下反 → 翻转 `pt = -asinf(ay)` 的负号。

</details>

---

## 技术支持

- **项目仓库**: [GitHub](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen)
- **提交 Issue**: [Issues](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen/issues)
- **论坛**: [Seeed Studio Forum](https://forum.seeedstudio.com/)
- **购买**: [Reachy Mini](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | [XIAO 1.47'' Touch Display](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html)

---

## 参考文档

- [Reachy Mini 入门指南](/cn/reachymini_getting_started)
- [1.47 inch Touch Display 入门教程](https://wiki.seeedstudio.com/getting_started_1.47_inch_touch_display_nrf52840/)
- [Arduino CLI 文档](https://arduino.github.io/arduino-cli/)
- [LSM6DS3 数据手册](https://www.st.com/en/mems-and-sensors/lsm6ds3.html)
