---
description: 本维基介绍如何在 reComputer Robotics J3011 上安装和配置 EM12-G GNSS 定位模块。
title: 适用于 reComputer Robotics J3011 的 EM12-G GNSS 模块
keywords:
  - Jetson
  - reComputer Robotics
  - J3011
  - GNSS
  - EM12-G
image: https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png
slug: /em12_g_gnss_module_for_recomputer_robotics_j3011
sku: 100001302
last_update:
  date: 07/01/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/cn/em12_g_gnss_module_for_recomputer_robotics_j3011/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

# 适用于 reComputer Robotics J3011 的 EM12-G GNSS 模块设置指南

EM12-G 是一款为定位应用设计的多星座 GNSS 接收模块。它采用标准 M.2 Key B 外形尺寸，兼容 NVIDIA Jetson、Raspberry Pi 等嵌入式计算平台。它可以在复杂的城市环境和开阔的户外场景中提供稳定可靠的实时定位服务。

本指南以 reComputer Robotics J3011 上的 J401 载板为例，演示如何安装、上电并配置 EM12-G GNSS 定位模块。

## 注意事项

- **串口设备名称可能变化**：本维基使用 `/dev/ttyUSB1` 作为默认 NMEA 数据端口，使用 `/dev/ttyUSB2` 作为默认 AT 命令端口。实际的 USB 串口节点取决于内核枚举顺序，因此端口也可能显示为 `ttyUSB0`、`ttyUSB3` 或其他节点。如果命令提示文件不存在，请先运行 `ls /dev/ttyUSB* /dev/ttyACM*`，确认实际设备节点，并在下面的命令中替换端口名称。
- **需要在户外进行定位**：GNSS 首次定位在室内几乎不可能成功。请在开阔的户外区域完成整个测试。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/1.png"/></div>

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png"/></div>

## 硬件安装

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/3.jpg"/></div>

将模块安装到设备上后，将**无源天线**连接到模块上标有 `G` 的触点。将设备放置在开阔的户外区域。首次搜星可能需要大约 3 到 5 分钟。

## 清理已有的 GPIO 进程

为避免旧的 GPIO 控制进程仍然占用引脚而导致上电失败，先清理已有的 `gpioset` 进程：

```bash
sudo pkill -f gpioset || true
```

:::note
`|| true` 可确保即使未找到已有的 `gpioset` 进程，后续操作也能继续执行。
:::

## 通过 GPIO 为模块上电

:::danger
本节中的 GPIO 命令仅适用于 J401 载板。它们是 EM12-G 模块在 J401 上的专用上电时序。如果你使用的是其他载板，请先查看该载板的硬件原理图。不要在其他载板上运行这些 GPIO 命令，否则可能导致模块无法上电或造成硬件损坏。
:::

在 J401 载板上，EM12-G 的电源使能和唤醒引脚由 Jetson GPIO 控制。按顺序运行以下三条命令，并保持它们在后台运行：

```bash
sudo gpioset --mode=time --sec=200000 2 14=0 &
sudo gpioset --mode=time --sec=200000 2 12=0 &
sudo gpioset --mode=time --sec=200000 1 13=1 &
```

:::note
必须执行这三条命令。它们分别控制模块的电源使能、复位和 `W_DISABLE#` 引脚，组成所需的 J401 上电时序。
:::

## 等待串口设备就绪

模块上电后，USB 串口枚举可能需要数秒到数十秒。手动轮询 NMEA 数据端口：

```bash
for i in $(seq 1 60); do
    [ -e /dev/ttyUSB1 ] && echo "/dev/ttyUSB1 detected." && break
    echo "Waiting... ($i/60)"
    sleep 1
done
```

如果在 60 秒后仍未检测到 `/dev/ttyUSB1`，请运行以下命令检查实际串口。同时确认天线连接正确，且模块已正确插入 M.2 插槽。

```bash
ls /dev/ttyUSB* /dev/ttyACM*
```

确认设备节点存在后，运行以下命令。终端中应开始出现 GNSS NMEA 输出。

```bash
sudo stdbuf -oL cat /dev/ttyUSB1
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/4.png"/></div>

## 配置 AT 命令

打开另一个终端窗口并连接到 AT 命令端口。本指南中的默认端口为 `/dev/ttyUSB2`。

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/5.png"/></div>

进入 `minicom` 后，配置 NMEA 输出并启用 GNSS：

```bash
# Set NMEA output
AT+QGPSCFG="outport","usbnmea"
AT+QCFG="gpsdrx",0

# Enable GNSS
AT+QGPS=1
```

启用 GNSS 后，AT 命令终端中应返回 `OK`，之前的终端应开始打印 NMEA 消息。首次搜星可能需要 3 到 5 分钟。请在开阔的户外区域测试模块。

- 如果 `$GPGGA`、`$GPRMC` 等语句持续刷新，说明模块通信工作正常。
- 在 GGA 语句中，第六个字段表示定位质量。`1` 表示模块已获得有效定位，`0` 表示尚未获得定位。请继续在户外等待 1 到 5 分钟。
- 按下 `Ctrl+C` 停止输出。

下面的示例展示了包含有效经纬度数据的定位信息：

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/6.png"/></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
