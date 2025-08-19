---
description: EdgeBox RPi 200 搭载 N3uron
title: EdgeBox RPi 200 搭载 N3uron
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edgebox-rpi-200-n3uron
last_update:
  date: 07/29/2023
  author: José Granero Nueda & Kasun Thushara
---

## 什么是 N3uron？

N3uron 是一个完整的工业边缘平台，专为 IIoT 和 DataOps 设计，能够实现工业现场与第三方应用程序之间的无缝集成，无论是在本地还是云端。  
通过 N3uron，您可以轻松创建 OT 和 IT 系统之间的双向数据管道，并通过整合、建模、处理和可视化所有操作数据，将设备与应用程序解耦，最终使整个组织能够访问这些数据。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **模块化**: 它是完全模块化的，拥有近五十个模块，用户可以根据项目需求堆叠，仅获取应用程序严格需要的模块。

- **跨平台**: N3uron 可运行于大多数 Windows 和 Linux 发行版，以及像 Raspberry Pi 这样的 ARM 架构上。

- **无限许可**: N3uron 提供无限许可模式，在标签、用户、设备和连接方面没有任何限制，且价格实惠。

- **基于 Web**: 安装后，您只需通过 Web 浏览器即可访问节点。

- **快速部署与开发**: N3uron 可在不到一分钟内完成安装，其开发环境便于快速创建数据模型，尤其是在使用模板时。

- **极高的效率**: 单个节点可以轻松管理数十万标签，同时保持较低的硬件需求。

- **可扩展且多功能的架构**: 从一开始，N3uron 就被设计为能够无缝部署具有数百或数千个节点的分布式架构。用户可以快速使用 N3uron Links 连接多个节点，轻松扩展架构以满足需求。

## EdgeBox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200 系列是基于 Raspberry Pi 的一体化工业边缘计算控制器，结合了多种工业用途。  
它设计为高扩展性和坚固的工业硬件，配备丰富的 IO 资源，并由强大的 Raspberry Pi 工业软件生态系统支持，是智能自动化和工业物联网 (IIoT) 解决方案的理想选择。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 前置条件

### 硬件
* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)

### 软件
* [N3uron 工业 IIoT 和 DataOps 平台](https://n3uron.com/)

## 安装

N3uron 可以通过我们的一步自动安装脚本轻松安装，只需在 EdgeBox 终端中运行以下命令：

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif1.gif" alt="pir" width="600" height="auto" /></div>

几秒钟后，N3uron 就会安装完成并运行。

如果您更喜欢手动安装，请查看我们的 [知识库部分](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup) 以获取更多信息。

## 使用

N3uron 采用面向微服务的架构设计，其中每个模块作为独立进程运行，而 Bootstrap 是管理其他进程的核心服务。默认情况下，[WebUI 模块](https://docs.n3uron.com/docs/platform-web-user-interface) 会自动激活，使其在安装完成后即可访问，其他功能通过创建新的模块实例启用。

每个模块在生产模式下运行都需要有效的许可证。如果模块未找到有效许可证，它将以演示模式运行两小时。要重新开始演示期，必须重新启动模块。

下面我们通过一个分步示例来了解 N3uron 如何通过 [OPC UA 客户端](https://docs.n3uron.com/docs/opc-ua-client) 轻松实现数据采集，并通过 [MQTT 客户端模块](https://docs.n3uron.com/docs/mqtt) 将数据无缝发布到 MQTT Broker，从而实现通过 MQTT 的持续数据推送。

### 配置 OPC UA 客户端

- **步骤 1**：请在本地网络中的另一台机器上打开您喜欢的浏览器，访问 N3uron WebUI，使用 EdgeBox-RPI-200 的 IP 地址和为 WebUI 配置的端口（默认情况下 HTTP 为 8003，HTTPS 为 8443）。

默认 N3uron WebUI 用户。

<div class="table-center">

|            |   完全访问权限 |  只读访问权限 |  
|---         |     ---       |        ---        |
|  用户名:   |    admin      |       user        |
|  密码:     |    n3uron     |       n3uron      |

</div>

- **步骤 2**：打开 N3uron WebUI，导航到 Config→Modules，点击菜单，然后创建一个 **新模块**，我们将其命名为 **OpcUaClient**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **步骤 3**：选择 **OpcUaClient** 作为模块类型，然后点击下方的 **保存** 按钮以实例化模块。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **步骤 4**：新创建的模块将出现在 Modules 下，导航到其配置并创建一个 **新客户端**，我们将其命名为 **DataSim**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **步骤 5**：配置 OPC UA 客户端以连接到我们的 DataSim 端点，配置如下：

```sh
端点 URL: opc.tcp://datasim.n3uron.com:4840
安全模式: 无
安全策略: 无

认证:
	启用: 是
	用户名: sunn3rgy
	密码: n3uron

``` 

点击 **保存** 以应用更改并重新加载模块。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **步骤 6**：导航到模块内的 OPC 浏览器部分，选择之前创建的 DataSim 客户端。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### 创建标签

- **步骤 1**：将所需对象从浏览器拖放到数据模型部分。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **步骤 2**：现在，您可以在 Config→Tags 中找到新创建的标签，并在 [实时部分](https://docs.n3uron.com/docs/platform-visualizing-real-time-values) 查看其值。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### 创建模板

[模板](https://docs.n3uron.com/docs/platform-templates) 提供了在 N3uron 中利用面向对象数据设计原则的能力，使用户能够显著减少部署新项目所需的时间。

通过创建和使用 [模板](https://docs.n3uron.com/docs/platform-templates)，用户可以生成新实例以快速构建复杂的数据结构和通信配置。对模板定义的任何更改都会被所有实例继承，从而在进行路由更改时大幅节省时间。

只需将所需对象拖放到模板部分，并使用 [自定义属性](https://docs.n3uron.com/docs/platform-templates-custom-properties)、[继承](https://docs.n3uron.com/docs/platform-templates-inheritance) 和 [更多功能](https://docs.n3uron.com/docs/platform-templates-nesting) 开始构建您的模板。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### 配置 MQTT 客户端

**步骤 1**：进入 Config→Modules，点击菜单，然后创建一个名为 MqttClient 的 **新模块**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **步骤 2**: 选择 MqttClient 作为模块类型，然后点击保存。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **步骤 3**: 导航到新模块并创建一个名为 HiveMQ 的**新连接**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **步骤 4**: 配置连接以使用公共 HiveMQ broker：

```sh
Broker URL: broker.hivemq.com
Port: 1883
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>


- **步骤 5**: 创建一个新发布者并设置目标主题，例如 “/n3/edgebox”。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **步骤 6**: 创建一个**标签过滤器**以匹配此节点中的所有标签。标签过滤器用于告诉模块哪些标签应该发布到 broker。点击**保存**以应用所有更改并重新加载模块。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>


- **步骤 7**: 前往诊断页面并启用 MqttClient 模块的实时日志，等待查看模块每次向 broker 发布新数据时生成的日志。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>


### 实例化 WebVision 模块

**步骤 1:** 打开 N3uron 并导航到配置菜单。

**步骤 2:** 点击模块，然后创建一个新模块。此实例可以使用任何名称（但不能包含特殊字符如 ‘.’、‘/’ 等），建议用户将实例命名为与所实例化模块名称相似以便于识别。在此示例中，选择了 WebVision 模块，并将其命名为 WebVision。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_5.gif" /></center>

**步骤 3:** 导航到 WebVision 的主配置并选择适当的服务器设置。默认设置适用于大多数使用场景。有关更多详细信息，请参考以下链接：[WebVision 初始配置](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_6.png" /></center>

**步骤 4:** 一旦 WebVision 模块被实例化，第一步是为之前在 WebUI 的角色部分创建的角色分配权限。默认情况下存在两个角色：Administrator（管理员）用于管理访问，User（用户）用于普通访问。您可以根据需要向这些角色添加用户或创建新角色。角色建立后，为 Designer 和 Viewer 角色设置相应的权限。
此外，为每个角色建立标签过滤路径。标签过滤路径访问决定了哪些标签模型中的标签可供相应角色进行可视化。在此示例中，我们将为两个角色分配标签模型的完整路径。

- 管理员:
    - Designer: 编辑
    - Viewer: 查看
    - TagFilterPath:
        - 模式: 包含
        - 路径: /
        - 正则表达式模式: .*
- 用户:
    - Designer: 无
    - Viewer: 查看
    - TagFilterPath:
        - 模式: 包含
        - 路径: /
        - 正则表达式模式: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_7.gif" /></center>

- 有用链接 

  - [用户和角色配置](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [访问配置](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**步骤 5:** 为了测试我们的初始 WebVision 屏幕，让我们创建一个标签。进入 WebUI，选择**配置**，然后点击**标签**。在**模型**部分，点击菜单并选择**新建标签**。例如，将其命名为 **TestTag**，选择类型为**数字**，授予其**读写权限**，将其初始化为 0（可选），然后保存设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_8.gif" /></center>

**步骤 6:** 接下来，导航到配置部分的 WebVision 并点击**打开设计器**。
使用您的**管理员凭据**登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_9.png" /></center>

**步骤 7:** 在模板部分，创建一个名为 Main 的新容器。然后，将此容器设置为启动容器。这将把 Main 设置为我们的初始 WebVision 屏幕。它将显示一个星号符号（*）在旁边。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_10.gif" /></center>

**步骤 8:** 更改 Main 容器的背景颜色。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_11.gif" /></center>

**步骤 9:** 在 Main 容器内，导航到组件并添加一个新组件。在此示例中，选择 Gauge 组件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_12.gif" /></center>

**步骤 10:** 在 Gauge 组件中，选择将为 Gauge 组件显示值的标签。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_13.gif" /></center>

**步骤 11：** 接下来，导航到配置部分中的 WebVision 并点击 Open UI。  
使用您的管理员凭据登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_14.png" /></center>

**步骤 12：** 为了测试我们的简单设计，导航到 WebUI 并选择 Data > Realtime。更改 TestTag 的值。随后，返回到 WebVision UI 并验证 Gauge 组件显示的值是否已更新。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_15.gif" /></center>

关于 WebVision，还有许多内容可以探索，以增强您的 Edge Box 使用体验。有关更多详细信息，请参阅我们的 [WebVision 知识库](https://docs.n3uron.com/docs/web-vision-configuration)。

您所看到的仅仅是开始。拥抱其近 50 个模块所提供的无限可能性。敢于梦想，勇于创新，并通过 N3uron 的尖端功能将您的项目提升到新的高度。要深入了解这一强大的平台，请访问 [https://n3uron.com/](https://n3uron.com/)，开启一段激动人心的探索之旅吧！