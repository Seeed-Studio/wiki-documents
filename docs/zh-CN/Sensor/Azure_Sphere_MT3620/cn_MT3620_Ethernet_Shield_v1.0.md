---
description: MT3620 Ethernet Shield v1.0
title: MT3620 Ethernet Shield v1.0
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/MT3620_Ethernet_Shield_v1.0
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/product_picture.png)

[Azure Sphere MT3620 开发套件](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) 配备了四个 2.54mm 接头，用于从 MT3620 扩展硬件资源。MT3620 Ethernet Shield 是专为 MT3620 开发套件设计的附加扩展板。Azure Sphere Ethernet Shield 仅支持私有局域网连接。请参阅[此处](https://docs.microsoft.com/en-us/azure-sphere/network/connect-private-network)了解更多详情。

Microsoft Azure Sphere 是一个用于创建高度安全、连接的 MCU 驱动设备的解决方案。Azure Sphere 将微软在云、软件和芯片领域的最佳技术结合起来，形成一种独特的安全方法，从芯片开始延伸到云端。Azure Sphere 认证的 MCU、Azure Sphere 操作系统和 Azure Sphere 安全服务共同为您提供信心和能力，重新构想您的业务并创造未来。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
需要外部 Wi-Fi 才能访问互联网和 Azure Sphere 服务。Azure Sphere 不支持在私有局域网和 Wi-Fi 接口之间进行路由或桥接。
:::

## 特性

- 处理器：Microchip，ENC28J60
- IEEE 802.3TM 兼容以太网控制器
- 完全兼容 10/100/1000Base-T 网络
- 集成 MAC 和 10Base-T PHY
- 支持一个带自动极性检测和校正的 10Base-T 端口
- 支持全双工和半双工模式
- SPI 接口，时钟速度最高可达 20 MHz
- 工作温度(℃)：0 ~ +70℃

:::note
如果需要在 -40 ~ +85℃ 下工作，请联系 iot@seeed.cc 进行定制。
:::

## 硬件概览

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> J1**: RJ45 接口，连接到 ENC28J60。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J1.png)

- **<font face="" size="3" font color="ff0000">②</font> LED1**: 3.3V 电源红色 LED，当板子通电时，LED 会亮起。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/led.png)

- **<font face="" size="3" font color="ff0000">③</font> U1**: ENC28J60，带 SPI 接口的独立以太网控制器，将 SPI 转换为以太网接口。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/U1.png)

- **<font face="" size="3" font color="ff0000">④</font> H4**: Azure Sphere（MT3620 开发板），扩展接头，H4

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H4.png)

- **<font face="" size="3" font color="ff0000">⑤</font> H3**: Azure Sphere（MT3620 开发板），扩展接头，H3

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H3.png)

- **<font face="" size="3" font color="ff0000">⑥</font> H2**: Azure Sphere（MT3620 开发板），扩展接头，H2

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H2.png)

- **<font face="" size="3" font color="ff0000">⑦</font> H1**: Azure Sphere（MT3620 开发板），扩展接头，H1

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H1.png)

- **<font face="" size="3" font color="ff0000">⑧</font> J2**: UART3 针头，连接到 MT3620 GPIO66~GPIO69。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J2.png)

**针脚分布**

- H1/H2/H3/H4 的针脚分布与 Azure Sphere 板相同。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**尺寸**

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing1.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing2.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing3.png)

## 应用场景

- 家庭/建筑/设施
- 自动化
- 安全
- 设备管理
- 公用事业
- 公共安全

:::tip
为了了解 Azure Sphere 在实际环境中的工作方式，请参考 [Contoso, Ltd 的场景](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)。
:::

## 入门指南

### 前置条件

**安装 Azure Sphere**

如果您有尚未使用过的 Azure Sphere 开发套件，请首先完成[这些步骤](https://docs.microsoft.com/en-us/azure-sphere/install/overview)以进行设置和启动。

**MT3620 以太网扩展板库**

此示例 C 应用程序演示了如何[将 Azure Sphere 设备连接到私有以太网网络](https://docs.microsoft.com/azure-sphere/network/connect-private-network)。<!-- 链接404 -->它配置 Azure Sphere 设备运行 DHCP 服务器和 SNTP 服务器，同时还实现了一个基本的 TCP 服务器。以下步骤展示了如何通过将您的计算机连接到此私有网络来验证这些功能。

DHCP 和 SNTP 服务器由 Azure Sphere 操作系统根据应用程序提供的配置进行管理。这些服务器仅在应用程序请求启动后才会运行，但即使应用程序停止，它们仍会继续运行。

TCP 服务器在应用程序进程中运行，当应用程序停止时，服务器也会停止。请注意，此示例 TCP 服务器实现是基本的，仅用于演示，它不进行连接的身份验证或加密：您应该用自己的生产逻辑替换它。

此示例使用以下 Azure Sphere 库，并包含[测试版 API](https://docs.microsoft.com/azure-sphere/app-development/use-beta)。

|库         |用途         |
|-----------|-------------|
|log        |在调试期间在 Visual Studio 设备输出窗口中显示消息 |
|networking |获取和设置网络接口配置 |

:::note
目前 MT3620 以太网扩展板不支持互联网连接，因为微软的软件尚未准备好。它仅支持连接到 PC。
:::

**硬件连接**

| MT3620 开发套件 | MT3620 以太网扩展板 |
|-----------------|---------------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/ethernet_s.png)|
|[立即购买](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[立即购买](https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html)|

- 步骤 1. 将 MT3620 以太网扩展板连接到 Azure Sphere MT3620 开发板。
- 步骤 2. 将 USB 数据线连接到 Azure Sphere MT3620 开发板和 PC。
- 步骤 3. 将网络线连接到 MT3620 以太网扩展板和 PC。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/stack_with_azuresphere.png)

**构建并运行示例**

- 按照 [Azure Sphere 文档](https://docs.microsoft.com/azure-sphere/install/install)<!-- 链接404 -->中描述的步骤设置您的 Azure Sphere 设备和开发环境。
- 即使您之前已经完成了设置，请确保您拥有版本 19.02 或更高版本的 Azure Sphere SDK。在 Azure Sphere 开发者命令提示符中运行 **azsphere show-version** 以检查版本。如有需要，请下载并安装[最新 SDK](https://aka.ms/AzureSphereSDKDownload)。
- 通过 USB 将您的 Azure Sphere 设备连接到 PC。
- 如果尚未启用，请启用[应用程序开发](https://docs.microsoft.com/azure-sphere/quickstarts/qs-blink-application#prepare-your-device-for-development-and-debugging)。<!-- 链接404 -->

   `azsphere device prep-debug`

- 为 Microchip ENC286J60 以太网芯片打包并部署[板配置镜像](https://docs.microsoft.com/azure-sphere/network/connect-private-network)。<!-- 链接404 -->

   `azsphere image package-board-config --preset lan-enc28j60-isu0-int5 --output enc28j60-isu0-int5.imagepackage`

   `azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage`

- 克隆 [Azure Sphere 示例](https://github.com/Azure/azure-sphere-samples)仓库并找到 PrivateEthernet 示例。
- 在 Visual Studio 中打开 PrivateEthernet.sln，按 F5 编译并构建解决方案，并将其加载到设备进行调试。
- 在执行以下步骤时，让应用程序保持运行状态。

**故障排除**

如果您在 Visual Studio 错误列表中看到大量关于缺少头文件和未定义标识符的错误，或者在构建应用程序时，在 Visual Studio 构建输出中看到以下错误：

   `error MSB6004: The specified task executable location "C:\Program Files (x86)\Microsoft Azure Sphere SDK\\SysRoot\tools\gcc\arm-poky-linux-musleabi-gcc.exe" is invalid.`

那么可能是您安装了较旧版本的 Azure Sphere SDK；请确保您安装的是版本 19.02 或更新版本。

**在计算机上配置以太网连接**

- 打开设置，然后点击 **网络和互联网** > **更改适配器选项**。
- 右键点击您的以太网适配器并选择 **属性**。
- 在 **以太网属性**窗口中，禁用除 **Internet 协议版本 4 (TCP/IPv4)** 之外的所有项目。
- 选择 **Internet 协议版本 4 (TCP/IPv4)**，然后点击 **属性**按钮以启动 **Internet 协议版本 4 (TCP/IPv4) 属性**窗口。
- 确保选中“自动获取 IP 地址”。（此示例的早期版本在此处需要配置静态 IP 地址。现在不再需要，因为应用程序提供了 DHCP 服务器。）
- 点击 **确定** 关闭 **IPv4 属性窗口**，然后关闭 **以太网属性窗口**。
- 将以太网线从 ENC286J60-H 连接到计算机的以太网接口。

:::note
如果您的计算机受策略管理，禁止同时连接多个网络接口，则在使用此示例时，您可能需要禁用其他网络接口。
:::

:::note
该示例使用了 IP 地址范围 192.168.100.xxx。如果您有其他网络适配器使用了相同的范围，则需要修改示例或暂时禁用其他网络适配器。
:::

**测试设备的 DHCP 服务器**

在您的电脑上打开命令提示符并输入 **ipconfig**。您应该会看到 DHCP 服务器已为您的 PC 的以太网连接分配了 IP 地址 192.168.100.11：

```sh
Ethernet adapter <name>:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::8c67:be24:4d9a:d4bb%9
   IPv4 Address. . . . . . . . . . . : 192.168.100.11
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . :
```

您还可以在您的 PC 上找到、下载并使用 DHCP 客户端测试工具，以更详细地检查 DHCP 服务器的响应，例如查看返回的 NTP 服务器地址。

**测试设备的 SNTP 服务器**

- 确保设备已[连接到 Wi-Fi](https://docs.microsoft.com/azure-sphere/install/configure-wifi)，以便从公共 NTP 服务器获取时间。在设备知道当前时间之前，其 SNTP 服务器不会响应。
- 在您的电脑上打开命令提示符并输入 **w32tm /stripchart /computer:192.168.100.10 /dataonly /samples:1**。此命令调用 [Windows 时间工具](https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings)，以查询设备的 SNTP 服务器并显示您的电脑时间与设备时间之间的计算差异：

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:18:09.
   14:18:09, +00.0349344s
   ```

- 如果 SNTP 服务器未运行或未响应，您可能会看到以下输出。请检查应用是否正在运行以及 Wi-Fi 是否已配置。

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:16:50.
   14:16:50, error: 0x800705B4
   ```

**测试应用程序的 TCP 服务器**

确保示例应用程序仍在您的 Azure Sphere 设备上运行。然后，在您的电脑上使用终端应用程序打开到 Azure Sphere 应用程序 TCP 服务器的原始 TCP 连接，地址为 192.168.100.10，端口为 11000。您可以使用第三方终端应用程序（例如 PuTTY，选择“raw”连接类型），或者使用 Windows 内置的 Telnet 客户端打开此连接。

使用 Windows 内置的 Telnet 客户端：

- 打开控制面板，点击 **程序和功能** > **启用或关闭 Windows 功能**，以启动 **Windows 功能**窗口。
- 确保选中 **Telnet 客户端**，然后点击 **确定**。
- 打开命令提示符并输入 **telnet 192.168.100.10 11000**。

您输入的字符将在 Visual Studio 的调试控制台中呈现——要么立即显示，要么在您输入换行符后显示——表明这些字符已被 MT3620 上的示例 TCP 服务器接收。此外，当您输入换行符时，MT3620 会向终端发送一条字符串，内容为：

   ```sh
   Received "<last-received-line>"
   ```

请注意，此示例服务器有一个简单的 16 字符输入缓冲区。如果您发送超过 16 个字符，Visual Studio 的输出窗口可能会显示：“Input data overflow. Discarding 16 characters.”

**故障排除**

- 如果您在未连接 ENC28J60（或连接不正确）的情况下运行示例，示例应用程序会立即退出。调试输出会显示类似“ERROR: Networking_SetStaticIp: 5 (I/O error)”的错误，然后退出。如果您随后连接或修复了 ENC28J60 的连接，则必须重置 MT3620。
- 如果您在设备上未加载板配置的情况下运行示例，示例应用程序会立即退出。调试输出会显示类似“ERROR: Networking_SetStaticIp: 2 (No such file or directory)”的错误，然后退出。

**移除以太网板配置**

如果您不再需要以太网，例如因为您希望将您的板用于其他项目，则必须手动移除以太网板配置镜像：

- 找到类型为“Board config”的已安装镜像，并记下其组件 ID：

   `azsphere device image list-installed`

- 删除此镜像：

   `azsphere device sideload delete --componentid <component ID>`

- 按下 MT3620 开发板上的重置按钮。

**注意：** 此示例使用 MT3620 上的 ISU0（I2C/SPI/UART 端口 0），该端口也被其他示例使用。其他示例可以适配使用不同的 ISU 端口。目前无法将此私有以太网示例适配为使用其他 ISU 端口。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/MT3620%20Ethernet%20Shield_v1.0_SCH_181220.pdf)
- **[Eagle]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip)
- **[机械图纸]** [MT3620 Ethernet Shield 机械图纸](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/103990403%2C%20MT3620%20Ethernet%20Shield%20v1.0.pdf)
<!-- - **[库文件]** [MT3620 Ethernet Shield 库文件](https://github.com/Azure/azure-sphere-samples/tree/master/Samples/PrivateEthernet)链接缺失 -->
- **[数据手册]** [ENC28J60 数据手册](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/ENC28J60.pdf)
- **[FAQ 网页]** [Azure Sphere 论坛](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ 网页]** [Azure Sphere Github 问题](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>