---
description: Edge Box RPi 200 的 Codesys 使用指南
title: Edge Box RPi 200 的 Codesys 使用指南
keywords:
  - Edge
  - reTerminal 应用
  - 嵌入式机器学习
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edgebox-rpi-200-codesys
last_update:
  date: 2023/2/1
  author: Peter Pan
---

<!-- ---
name: Edgebox-RPI-200
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 102110771
tags:
--- -->

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200 系列是基于树莓派的多合一工业边缘计算控制器，结合了多种工业用途。它采用高扩展性和坚固的工业硬件设计，配备丰富的 IO 资源，并由强大的树莓派工业软件生态系统支持，是智能自动化和工业物联网（IIoT）解决方案的理想选择。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

### 特性

- 多合一工业控制器：
  
  - 不仅仅是 PLC、PAC，还可以实现 IIoT 网关、OPC UA 服务器和工业 PC 的功能。
  
- 强大且灵活的处理器：
  
  - 由树莓派计算模块 4（CM4）驱动，配备高达 4GB RAM 和 16GB eMMC，支持实时操作和多任务处理。

- 丰富的 IO 资源和工业接口：
  
  - 支持多种工业总线协议和标准。

- 多种通信能力：
  
  - 提供全功能无线互联和 RJ45 千兆以太网，支持多种云服务。

- 坚固的工业级硬件设计：
  
  - 集成热管理，采用全铝散热外壳，支持 35mm DIN 导轨和壁挂安装。

- 强大的树莓派工业软件生态系统：
  
  - 支持多种工业软件和平台，包括 Codesys、Node Red、MQTT、OPC UA、Ignition 等。

## 什么是 Codesys？

Codesys 是一个集成的工业标准 IEC 61131-3 软件开发环境，用于编程工业控制器和自动化设备。

在本指南中，我们使用 Codesys Development System V3 软件作为 IDE 来配置和编程软件，以运行在基于树莓派计算模块 4 的 Edgebox-RPI-200 PLC 控制器上。因此，我们将为 Edgebox-RPI-200 安装和配置 CODESYS Control for Raspberry Pi MC 运行时。

## 前置条件

- 1 台 Windows PC 主机
- 1 台 [Edgebox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- [CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en) 软件
- [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) 许可证和安装程序

请访问 [CODESYS Development System V3 下载页面](https://store.codesys.com/engineering/codesys.html?___store=en)，根据您的 Windows PC 主机设置下载 CODESYS Development System V3 安装程序，并按照安装向导安装程序。

请访问 [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) 购买许可证，或者根据您的需求购买 [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-sl.html)，并下载树莓派 CODESYS 安装包。

## 入门指南

### 项目准备

:::note
请确保您的主机电脑上已安装并打开 CODESYS Development System V3 软件。
:::

- **步骤 1：** **在 CODESYS Development System 中安装 CODESYS Control for Raspberry PI 软件包**

- **步骤 1-1：** 请通过点击 "**工具 > CODESYS Installer**" **打开** **Codesys Installer**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer.png"/></div>

- **步骤 1-2：** 请根据安装要求**关闭** **CODESYS Development System V3 软件**，否则您将收到如下警告：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/quit_codesys.png"/></div>

- **步骤 1-3：** 请点击 **"浏览"**，选择 **"CODESYS Control for Raspberry Pi MC SL 软件包"** 并点击 **"安装"**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_1.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_3.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_4.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_6.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_7.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_8.png"/></div>

### 使用 Edgebox-RPI-200 切换用户 LED 项目

:::note
确保 Edgebox-RPI-200 已通电并连接到与主机电脑相同的网络，您需要从连接的路由器的 DHCP 租约表中获取 Edgebox-RPI-200 的 IP 地址。
:::

- **步骤 1：** **项目设置**
- **步骤 1-1：** 打开 CODESYS Development System V3 软件并选择 **"文件 > 新建项目..."**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png"/></div>

- **步骤 1-2：** 在 **"新建项目"** 窗口中，在 **"类别"** 窗口下选择 **"项目"**，在 **"模板"** 下选择 **"标准项目"**，输入您的 **项目名称**，然后点击 **"确定"**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_1.png"/></div>

- **步骤 1-3：** 在标准项目窗口中，为设备选择 **"CODESYS Control for Raspberry Pi MC SL (CODESYS GmBH)"**，为 PLC_PRG 选择 **"梯形逻辑图 (LD)"**，然后点击 **"确定"**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_3.png"/></div>

完成 Raspberry Pi 新项目设置后，您应该会看到类似的界面：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_4.png"/></div>

- **步骤 2：** 配置 Edgebox-RPI-200

- **步骤 2-1：** 选择 **"工具 > 更新 Raspberry Pi"**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi.png"/></div>

- **步骤 2-2：** 在 Raspberry Pi 侧边栏中填写以下信息，然后点击 **"安装"** 按钮，将 **"CODESYS Control for Raspberry Pi MC 运行时"** 安装到 Edgebox-RPI-200。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_1.png"/></div>

- 登录凭据
  - 用户名：pi
  - 密码：raspberry
- 选择目标：
  - IP 地址：192.168.1.40
- CODESYS 运行时软件包
  - 版本：4.6.0.0 (raspberry, armhf)

- **步骤 2-3：** 在 **"配置运行时"** 弹出窗口中，根据您的偏好选择 **"运行时模式"**，在本例中我们选择默认的 **"多核"**，然后点击 **"确定"**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_2.png"/></div>

- **步骤 2-4：** 为确认 **"CODESYS Control for Raspberry Pi MC 运行时"** 已在 **"Edgebox-RPI-200"** 上运行，请点击 **"运行时"** 部分的 **"启动"**，然后检查 **"消息"** 窗口中显示 **"标准输出：codesyscontrol 已在运行"**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_3.png"/></div>

- **步骤 3：** **配置 GPIO 设备：**

- **步骤 3-1：** 在设备选项卡中添加 GPIO，首先在左侧边栏选择 **"设备"** 选项卡，然后 **右键单击** 设备，选择下拉列表中的 **"添加设备"**。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device.png"/></div>

- **步骤 3-2：** 在 **"添加设备"** 窗口中，点击 **"+"** 展开 Miscellaneous，然后选择 **"GPIO"** 选项并点击 **"添加设备"** 确认。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_1.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_2.png"/></div>

现在您应该会在设备选项卡中看到一个新的 GPIO 设备。
<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_3.png"/></div>

- **步骤 3-3：** 添加 1 位 GPIO 设备，在上一步新添加的 **"GPIO"** 设备上右键单击，然后在下拉列表中选择 **"添加设备..."**。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_1.png"/></div>

- **步骤 3-4：** 在 **“添加设备”** 窗口中，选择 **“GPIOS 1 bit”** 选项，然后点击 **“添加设备”** 以确认。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_2.png"/></div>

- **步骤 3-5：** 要配置 GPIO，双击上一步中添加的新设备 **“GPIOS_1_bit(GPIOs 1 bit)”**，以打开主配置窗口。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_3.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_4.png"/></div>

- **步骤 3-6：** 在 **“GPIOs_1_bit”** **主配置**窗口中，选择第一个标签 **“GPIOSysfsModuleParameters”**，以配置并分配 **GPIO 方向**、**引脚编号**和**当前引脚状态**。在本例中，我们将切换 Edgebox-RPI-200 上的 LED2，该 LED2 是 GPIO 引脚 21，根据 [数据手册](#)。因此，引脚配置应如下所示。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_1.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_2.png"/></div>

- **步骤 3-7：** 映射 GPIO I/O，选择第二个标签 **“GPIOSysfsModule I/O Mapping”**，然后为 GPIO 分配一个变量名。在本例中，我将其命名为 **“LED_in”**（用于 **“GPIO 21 输入”**），以及 **“LED_out”**（用于 **“GPIO 21 输出”**）。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_3.png"/></div>

:::note
请删除默认的 **“GPIOs_A_B(GPIOs A/B)”** 设备，否则它会干扰新添加的 GPIO 设备。
:::

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/delete_gpio_AB.png"/></div>

- **步骤 4：** **在在线配置模式下连接到 Edgebox-RPI-200，以测试并切换 Edgebox-RPI-200 上的 LED2**

- **步骤 4-1：** 首先，我们需要通过双击 **“设备 (CODESYS Control for Raspberry Pi MC SL)”** 来设置设备，这将打开 **设备配置**窗口。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device.png"/></div>

- **步骤 4-2：** 在 **“设备配置”** 窗口的 **“通信”** 设置标签中，点击 **“设备”** 下拉列表，然后选择 **“选项>管理收藏设备...”**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_1.png"/></div>

- **步骤 4-3：** 在 **“管理收藏设备”** 窗口中，点击 **“+ 添加”**，在 **“添加收藏”** 窗口中

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_2.png"/></div>

- **步骤 4-4：** 请在 **“输入名称、设备地址或 IP 地址”** 框中输入 **Edgebox-RPI-200 的 IP 地址**。

> 在我的案例中，Edgebox-RPI-200 的 IP 地址是 **“192.168.1.40”**，然后点击 **“确定”** 以确认。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_3.png"/></div>

- **步骤 4-5：** 在 **“管理收藏设备”** 窗口中，为标识字段选择 **新添加的 IP 地址设备**，然后点击 **“确定”** 以确认。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_4.png"/></div>

- **步骤 4-6：** 在 **“设备配置”** 窗口的 **“通信”** 设置标签中，请点击下拉列表并选择新添加的设备 **“IP 地址”**，您应该在下方看到一些关于连接设备的信息。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_6.png"/></div>
  
- **步骤 4-7：** 点击 **“在线配置模式...”** 按钮，从 **“工具栏”** 中，该 **“在线配置模式...”** 的图标应从绿色变为红色，这表示 CODESYS 开发系统 V3 IDE 已连接到 Edgebox-RPI-200，您可以直接从 IDE 测试并与连接的硬件设备交互。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config.png"/></div>

- **步骤 4-8：** 现在双击设备侧边栏中的 **“GPIOs_1_bit(GPIOs 1 bit)”** 以打开配置窗口。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config_1.png"/></div>

- **步骤 4-9：** 在主配置窗口中选择第二个标签 **“GPIOSysfsModule I/O Mapping”**，您应该看到 **“当前值”** 对于 LED_in 和 LED_out 都是 **“False”**，您现在可以通过双击 **“当前值”** 部分中的 **“False”** 来切换 **“True/False”** 值，从而切换 Edgebox-RPI-200 上的 LED2，其中 LED2 应根据 True/False 值打开或关闭。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio_1.png"/></div>

您可以检查 Edgebox-RPI-200 上的 LED2，它应该响应切换的值：

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_led.jpg"/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>