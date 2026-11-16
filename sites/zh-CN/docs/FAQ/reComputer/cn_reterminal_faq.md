---
title: reTerminal 和 reTerminal DM 常见问题
description: 关于 reTerminal 和 reTerminal DM 显示屏的常见问题，包括将操作系统烧录到 eMMC、屏幕和触控行为、SSH 和串口控制台访问以及外设识别等。
slug: /reterminal_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reTerminal 常见问题
  - reTerminal DM 常见问题
  - reTerminal 故障排查
  - reTerminal DM 故障排查
  - reTerminal 黑屏
  - reTerminal 触摸屏
  - Raspberry Pi CM4
  - reTerminal 烧录操作系统
---

<div class="recomputer-faq-page">

# reTerminal 和 reTerminal DM 常见问题

本页面包含针对 reTerminal 和 reTerminal DM 的已验证解答。每个解答都会说明适用的产品型号和固件模式，并给出最近一次根据当前官方资料完成验证的日期。

## 在开始之前

- 确认准确型号：reTerminal 或 reTerminal DM，以及所搭载的 Raspberry Pi CM4 版本。
- 在执行与版本相关的步骤前，检查当前 Raspberry Pi OS 镜像版本。
- 本页答案最近一次验证时间为 2026-11-10；如果你在更晚时间阅读，请重新核对所链接的官方资料。

<!-- RECOMPUTER_FAQ_AUTO_START -->
## 文档与使用 {#documentation-and-usage}

### 如何获取 reTerminal DM（114070201）的 3D 模型文件？ {#reterminal-dm-3d-model}

**适用对象：** reTerminal DM（114070201），面向需要 3D 模型进行结构设计或外壳验证的开发者

**最近验证时间：** 2026-11-01

reTerminal DM（114070201）的 3D 模型可通过以下 STEP 结构设计文件链接获取：https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp 。如需其他设计文件或技术信息，请联系 Seeed 技术支持团队。

**参考资料：**

- [reTerminal DM 结构设计文件（STEP）](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)
- [reTerminal DM 硬件指南](https://wiki.seeedstudio.com/cn/reterminal-dm-hardware-guide/)

## 操作系统与固件 {#os-and-firmware}

### 如何烧录最初随 reTerminal 一同出厂的 Raspberry Pi OS 镜像 {#reterminal-flash-original-shipped-image}

**适用对象：** reTerminal 和 reTerminal DM，用于恢复设备最初出厂时附带的出厂镜像

**最近验证时间：** 2023-11-15

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)

### 如何将 Raspberry Pi OS / 64 位 Ubuntu OS 或其他操作系统烧录到 eMMC {#reterminal-flash-os-to-emmc}

**适用对象：** 搭载带 eMMC 存储的计算模块的 reTerminal 和 reTerminal DM，用于写入系统镜像

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/flash_different_os_to_emmc/)

### 在烧录新的 Raspberry Pi OS / Ubuntu OS 或其他操作系统后，如何安装 reTerminal 驱动 {#reterminal-install-drivers-after-flashing}

**适用对象：** reTerminal 和 reTerminal DM，用于在新操作系统烧录完成后安装 reTerminal 驱动

**最近验证时间：** 2023-11-15

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)

### 如何升级 Raspberry Pi OS 及已安装的软件包 {#reterminal-upgrade-rpios-packages}

**适用对象：** 运行 Raspberry Pi OS 的 reTerminal 和 reTerminal DM，用于日常就地系统更新

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/upgrade-rpiOS_installed-packages/)

### 如果我将 CM4 更换为无 eMMC 版本，如何烧录操作系统 {#reterminal-flash-os-without-emmc-cm4}

**适用对象：** 配备无 eMMC 存储的 Raspberry Pi CM4 的 reTerminal 和 reTerminal DM

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/flashing_os_on_non-eMMC_CM4_replacement/)

### 我无法在睡眠后唤醒 reTerminal 的 LCD {#reterminal-lcd-wakeup-after-sleep}

**适用对象：** 运行 Raspberry Pi OS 且已安装 reTerminal 设备树覆盖驱动的 reTerminal 和 reTerminal DM

**最近验证时间：** 2024-12-16

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/Wakeup_reTerminal_LCD_after_sleep/)

### 如果我想从 USB 闪存盘启动操作系统，该如何操作 {#reterminal-boot-from-usb-flash-drive}

**适用对象：** 带有计算模块引导加载程序的 reTerminal 和 reTerminal DM，用于从外部 USB 盘启动系统

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/Boot_OS_from_USB_flash_drive/)

### 如何在 reTerminal 上安装 Ubuntu？ {#reterminal-install-ubuntu}

**适用对象：** 已将 arm64 Ubuntu Server 镜像写入 eMMC 的 reTerminal 和 reTerminal DM

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/install-ubuntu-on-reterminal/)

### 在安装 Raspberry Pi OS Bullseye 后，屏幕方向不正确 {#reterminal-screen-orientation}

**适用对象：** 使用 Raspberry Pi OS Bullseye 或 Bookworm 镜像并已安装 reTerminal 驱动的 reTerminal 和 reTerminal DM

**最近验证时间：** 2023-11-24

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/Incorrect_screen_orientation_on_RPiOS_Bullseye/)

### 如何在 reTerminal 上禁用屏幕旋转 {#reterminal-disable-screen-rotation}

**适用对象：** 运行 Raspberry Pi OS 的 reTerminal 和 reTerminal DM，适用于需要固定安装且显示屏不能旋转的场景

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/disable_screen_rotation_on_reTerminal/)

### 如何解决屏幕刷新率过低的问题 {#reterminal-screen-refresh-rate}

**适用对象：** 运行 Raspberry Pi OS 的 reTerminal 和 reTerminal DM，用于解决显示存在明显刷新卡顿的问题

**最近验证时间：** 2024-07-02

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/screen_refresh_rate_low/)

## 连接与网络 {#connectivity-and-networking}

### Seeed 是否保存已交付的 reTerminal 或 reTerminal DM 设备的 IMEI 和 LTE Cat 4 EC25 4G 模块序列号？当设备已经部署且无法在现场读取时，如何获取这些信息？ {#reterminal-imei-lte-serial}

**适用对象：** 已交付并部署在现场的 reTerminal 和 reTerminal DM 设备，用于资产登记且需要填写 IMEI 和 LTE Cat 4 EC25 4G 模块序列号的场景

**最近验证时间：** 2026-11-01

Seeed 不会保存已交付设备的 IMEI 和 4G 模块序列号，因此无法仅根据订单、产品型号或主机序列号来填写这些号码。IMEI 和 4G 模块序列号属于具体设备或模块本身，必须从已部署的设备上读取：终端用户或现场技术人员需要打开设备串口控制台或模块 AT 命令接口，运行 `AT+GSN` 查询该 4G 模块的 IMEI；模块序列号 / 模块 ID 应从模块标签或通过 EC25 模块的查询命令获取。在完成登记前，请将查询结果与设备资产编号一一对应匹配。如果当前无法联系到设备所在位置的人员，则需要由当地终端用户或现场技术人员执行上述查询并回传结果；Seeed 无法从原始发货记录中恢复这些信息。

1. 确认每台已部署设备的位置、资产编号以及联系人。
2. 终端用户或现场技术人员连接到设备串口控制台或 4G 模块 AT 命令接口。
3. 运行 `AT+GSN` 并记录返回的 IMEI；注意该命令查询的是 IMEI，与查询模块序列号并不相同。
4. 从模块标签或 LTE Cat 4 EC25 的命令参考中查询并记录 4G 模块序列号 / 模块 ID。
5. 将每台设备的 IMEI、模块 ID 与主机资产编号一一对应匹配，并提交给设备管理员完成登记。
6. 如果无法安排现场或远程连接，则必须由设备所在地的终端用户或现场技术人员执行上述查询。

**成功标准：**

- 每台设备的 IMEI 和 4G 模块 ID 均已从设备端读取并与资产编号完成登记
- 登记记录中不包含任何基于订单或主机序列号猜测得出的号码

**参考资料：**

- [reTerminal DM 入门指南](https://wiki.seeedstudio.com/cn/reterminal-dm/)

### 如何使用 USB 转串口转换器登录 Raspberry Pi OS / Ubuntu OS 或其他操作系统 {#reterminal-usb-serial-console-login}

**适用对象：** 带有 40 针 GPIO 排针的 reTerminal 和 reTerminal DM，用于在无显示屏的情况下通过控制台登录

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/Logging_in_OS_using_USB_to_serial_converter/)

## 硬件与接口 {#hardware-and-interfaces}

### 如何排查 reTerminal 黑屏问题 {#reterminal-black-screen}

**适用对象：** 启动后 LCD 仍保持黑屏，且可通过 PWR 和 SYS 状态指示灯进行诊断的 reTerminal 和 reTerminal DM

**最近验证时间：** 2023-11-15

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/reterminal_black_screen/)

### 为什么 CM4 上的芯片周围有黑色胶水？ {#reterminal-cm4-epoxy-underfill}

**适用对象：** 搭载 Raspberry Pi CM4 计算模块的 reTerminal 和 reTerminal DM，适用于注意到板上黑色材料的用户

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/black_glue_around_CM4/)

### 在安装 reTerminal 驱动后蜂鸣器、LED 不工作，如何解决 {#reterminal-buzzer-leds-after-driver-install}

**适用对象：** 已执行 reTerminal 驱动安装的 reTerminal 和 reTerminal DM

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/buzzer-leds-not-work_by_drivers/)

### 触摸屏不准确的故障排查 {#reterminal-touchscreen-inaccuracy}

**适用对象：** 运行基于 X11 的 Raspberry Pi OS 镜像并已安装 reTerminal 触摸驱动的 reTerminal 和 reTerminal DM

**最近验证时间：** 2023-06-21

详细步骤请点击[这里](https://wiki.seeedstudio.com/cn/troubleshooting-touch-screen-inaccuracy/)

### 如何检查加密芯片是 ATECC608A-SSHDA-B 还是 ATECC608A-TNGTLSS-G {#reterminal-encryption-chip-check}

**适用对象：** 用于识别板载加密协处理器型号的 reTerminal 和 reTerminal DM

**最后确认日期：** 2023-06-21

详情请点击[这里](https://wiki.seeedstudio.com/cn/check_Encryption_Chip/)

## 产品与服务 {#product-and-service}

### 单台 reTerminal DM 订单能否在发货前免费预装并测试双网口/SSD 扩展模块、NVMe M.2 2280 SSD 和蓝牙/ Wi-Fi 天线？ {#reterminal-dm-preinstall-expansion}

**适用对象：** 需要在发货前预装双网口/SSD 扩展模块、NVMe M.2 2280 SSD 和蓝牙/ Wi-Fi 天线的 reTerminal DM 单台订单用户

**最后确认日期：** 2026-11-01

单台订单无法享受免费的工厂预装服务（包括内部配件的安装和测试）。该服务属于轻定制服务，仅适用于达到要求采购数量并支付相应定制费用的订单。对于当前的单台订单，设备将以原厂包装形式发货；到货后，您可以按照官方硬件装配指南自行安装相关配件：https://wiki.seeedstudio.com/cn/reterminal-dm-hardware-guide/ 。

**注意：**

- 工厂预装属于轻定制服务，需要达到一定采购数量并收取定制费用，因此单台订单不符合发货前免费预装和测试的条件。
- 如果后续订单量达到定制门槛，您可以再次向 Seeed 咨询工厂预装服务所适用的条件。

**参考资料：**

- [reTerminal DM 硬件指南](https://wiki.seeedstudio.com/cn/reterminal-dm-hardware-guide/)

### reTerminal DM 能否在 -20°C 环境温度下运行，以及能否以 10 台数量订购 ODM 版本？ {#reterminal-dm-minus20-operating-temp}

**适用对象：** 标准版 reTerminal DM，用于在 -20°C 环境温度下使用设备的项目，以及 10 台数量的 ODM 定制咨询

**最后确认日期：** 2026-11-01

标准版 reTerminal DM 的工作温度范围为 -10°C 至 50°C，因此标准型号本身无法满足 -20°C 的环境温度要求。在 -20°C 下运行需要通过 ODM 定制，采用宽温显示屏或内部加热方案。ODM 定制的最小起订量为 50 台。

**参考资料：**

- [reTerminal DM 入门指南](https://wiki.seeedstudio.com/cn/reterminal-dm/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
