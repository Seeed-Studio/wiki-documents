---
description: 本 wiki 介绍如何在 Jetson 设备上安装和配置 Quectel RM520N 5G 模块，涵盖硬件设置步骤和必要的 AT 命令。
title: 适用于 Jetson 的 Quectel RM520N 模块
keywords:
  - Edge
  - reComputer
  - Jetson
  - 4G/5G
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/RM520N.webp
slug: /cn/rm520n_module_for_jetson
last_update:
  date: 11/25/2025
  author: Youjiang
---

RM520N 是一系列专为 IoT/eMBB 应用优化的 5G IoT 模块，采用 M.2 外形设计，符合 3GPP Release 16 规范，支持 5G NSA 和 SA 模式。RM520N 与 Quectel 的 5G 模块系列 RM50xQ、LTE-A Cat 6 模块 EM06、Cat 12 模块系列 EM12/EM12xR/EM120K 以及 Cat 16 模块 EM160R-GL 兼容，便于从 LTE-A 迁移到 5G。

RM520N 是一款工业级模块，仅适用于工业和商业应用。它几乎覆盖了全球所有主流运营商，并支持 Qualcomm® IZat 定位技术 Gen9C Lite（GPS、GLONASS、BDS 和 Galileo）。集成的 GNSS 接收器大大简化了产品设计，提供更快、更准确、更可靠的定位能力。

凭借丰富的互联网协议、行业标准接口和丰富的功能（支持 Windows 10、Linux 和 Android 的 USB 和 PCIe 驱动程序），该模块可广泛应用于 eMBB 和 IoT 应用，包括工业路由器、家庭网关、STB、工业笔记本电脑、消费级笔记本电脑、工业 PDA、加固平板电脑、视频传输和数字标牌。

<!-- Need to image and jump button  -->

## 特性

- M.2 外形的 5G/4G/3G 多模模块，针对 IoT 和 eMBB 应用优化
- 全球 5G 和 LTE-A 覆盖
- 支持 NSA 和 SA 模式
- 多星座 GNSS 接收器可用于需要在任何环境中快速准确定位的应用
- 功能改进：DFOTA 和 VoLTE（可选）

## 规格参数
<div align="center">
  <img width ="950" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/specification.png"/>
</div>

## 支持的设备

- [reComputer Robotis J30/J40](https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html)
- [reComputer Industrial J30/J40](https://www.seeedstudio.com/reComputer-Industrial-optional-accessories.html)
- [reServer Industrial J30/J40](https://www.seeedstudio.com/reServer-Industrial-J401-optional-accessories.html)
- [reServer Industrial J501](https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-board-for-Jetson-AGX-Orin-p-5950.html)

:::note
上面仅列出了经过测试的设备。
:::

## 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/hardware_connection.png"/>
</div>

:::danger
在本 wiki 中，我们将使用 [reComputer Robotics J3011](https://www.seeedstudio.com/reComputer-Robotics-J3011-p-6503.html) 作为示例，演示如何在 Jetson 设备上安装和配置 RM520N-GL 模块。
:::

步骤 1. 准备所有将要使用的材料。

- 配备 Jetpack 6.2 的 reComputer Robotics J4012
- Quectel RM520N-GL 模块

步骤 2. 调整支撑螺丝的位置。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/support_screw.png"/>
</div>

步骤 3. 将 5G 模块插入 M.2 Key B 端口。

步骤 4. 拧紧固定螺丝并安装天线。

步骤 5. 在前面板安装 5G SIM 卡。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/sim.jpg"/>
</div>

## 配置 5G 模块

启动 Jetson 设备并在终端中输入以下命令。
```bash
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2
```

在 minicom 界面中，我们可以使用 AT 命令来配置 5G 模块的操作模式。

```bash
AT+CPIN? # Check SIM card status. A normal response is READY.
AT+QCFG="usbnet",3 # Set module operation mode to RNDIS. A normal response is OK.
AT+CFUN=1,1 # Restart the module. If it fails to start for an extended period, try restarting the Jetson device.
AT+QNWPREFCFG="mode_pref",AUTO # Set automatic network mode or prioritize LTE network mode
AT+QNWPREFCFG="mode_pref",LTE
```

如果一切顺利，您的设备现在应该能够正常访问互联网。

要验证网络质量，您可以使用网速测试工具来测试网络速度。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/speed_test.png"/>
</div>


已知问题：我们发现这种配置方法允许 5G 模块正常连接到网络，但 mmcli 信息显示异常。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/mmcli.png"/>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
