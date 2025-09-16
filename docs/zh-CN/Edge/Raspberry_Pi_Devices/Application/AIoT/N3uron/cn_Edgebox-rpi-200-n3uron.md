---
description: EdgeBox RPi 200 with N3uron
title: EdgeBox RPi 200 with N3uron
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

N3uron 是一个完整的工业边缘平台，用于 IIoT 和 DataOps，能够在工业车间和第三方应用程序之间实现无缝集成，无论是本地部署还是云端部署。
使用 N3uron，您可以轻松在 OT 和 IT 系统之间创建双向数据管道，通过在单一真实数据源中整合、建模、处理和可视化所有运营数据来解耦设备与应用程序，最终使这些数据在整个组织中可用。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **模块化**：它是完全模块化的，拥有近五十个模块，用户可以根据需要进行堆叠以满足项目需求，只需获取应用程序严格必需的模块。

- **跨平台**：N3uron 可以在大多数版本的 Windows 和 Linux 发行版以及 ARM 架构（如 Raspberry Pi）上运行。

- **无限许可证**：N3uron 采用无限许可模式，在标签、用户、设备和连接方面提供无限制使用，价格实惠。

- **基于 Web**：安装后，您只需要一个 Web 浏览器即可访问节点。

- **快速部署和开发**：N3uron 可以在不到一分钟内安装完成，其开发环境有助于快速创建数据模型，特别是在使用模板时。

- **极其高效**：单个节点可以轻松管理数十万个标签，同时保持较低的硬件要求。

- **可扩展和多功能的架构**：从一开始，N3uron 就被设计为无缝部署具有数百或数千个节点的分布式架构。用户可以使用 N3uron Links 快速连接多个节点，轻松扩展其架构以满足需求。

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200 系列是基于 Raspberry Pi 的一体化工业边缘计算控制器，结合了多种工业用途。设计为高可扩展性和坚固的工业硬件，配备丰富的 IO 资源，并由强大的 Raspberry Pi 工业软件生态系统支持，是智能自动化和工业物联网 (IIoT) 解决方案的理想选择。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 先决条件

### 硬件

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)

### 软件

* [N3uron Industrial IIoT & DataOps Platform](https://n3uron.com/)

## 安装

N3uron 可以通过我们的一步自动化安装脚本轻松安装，只需在您的 EdgeBox 终端中运行以下命令：

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif1.gif" alt="pir" width="600" height="auto" /></div>

几秒钟内，您就会安装好 N3uron 并使其运行起来。

如果您更喜欢手动安装，请查看我们的[知识库部分](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup)获取更多信息。

## 使用方法

N3uron 采用面向微服务的架构设计，其中每个模块作为独立进程运行，Bootstrap 是管理其他进程的核心服务。默认情况下，[WebUI 模块](https://docs.n3uron.com/docs/platform-web-user-interface)会自动激活，在安装完成后即可访问，通过创建新的模块实例来启用其他功能。

每个模块都需要有效的许可证才能在生产模式下运行。如果模块找不到有效的许可证，它将在演示模式下运行两小时。为了重新启动演示期，必须重启模块。

让我们看一个分步示例，了解 N3uron 如何通过 [OPC UA 客户端](https://docs.n3uron.com/docs/opc-ua-client)简化数据收集，以及如何使用 [MQTT 客户端模块](https://docs.n3uron.com/docs/mqtt)将这些数据无缝发布到 MQTT 代理，从而实现通过 MQTT 持续推送数据。

### 配置 OPC UA 客户端

- **步骤 1**：请在本地网络上的不同机器上打开您喜欢的浏览器来访问 N3uron WebUI，使用 Edgebox-RPI-200 的 IP 地址和为 WebUI 配置的端口（默认为 HTTP 的 8003 端口或 HTTPS 的 8443 端口）。

默认的 N3uron WebUI 用户。

<div class="table-center">

|            |   完全访问权限 |  只读访问权限 |  
|---         |     ---       |        ---        |
|  用户:     |    admin      |       user        |
|  密码: |    n3uron     |       n3uron      |

</div>

- **步骤 2**：打开 N3uron WebUI 并导航到 Config→Modules，点击菜单然后创建一个**新模块**，我们将其命名为 **OpcUaClient**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **步骤 3**：选择 **OpcUaClient** 作为模块类型，然后点击下方的 **Save** 按钮来实例化模块。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **步骤 4**：新创建的模块将出现在 Modules 下，导航到其配置并创建一个**新客户端**，我们将其命名为 **DataSim**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **步骤 5**：配置 OPC UA 客户端以连接到我们的 DataSim 端点，如下所示：

```sh
Endpoint URL: opc.tcp://datasim.n3uron.com:4840
Security Mode: None
Security Policy: None

Authentication:
 Enabled: Yes
 User: sunn3rgy
 Password: n3uron

```

点击 **保存** 以应用更改并重新加载模块。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **步骤 5**：导航到模块内的 OPC 浏览器部分，选择之前创建的 DataSim 客户端。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### 创建标签

- **步骤 1**：从浏览器中拖拽所需对象到数据模型部分。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **步骤 2**：现在您可以在 Config→Tags 中找到新创建的标签，并在[实时部分](https://docs.n3uron.com/docs/platform-visualizing-real-time-values)查看其值。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### 创建模板

[模板](https://docs.n3uron.com/docs/platform-templates)提供了在 N3uron 中利用面向对象数据设计原则的能力。允许用户大幅减少部署新项目所投入的时间。

通过创建和使用[模板](https://docs.n3uron.com/docs/platform-templates)，用户可以生成新实例来快速构建复杂的数据结构和通信配置。对模板定义的任何更改都会被所有实例继承，在进行路由更改时大大节省时间。

只需将所需对象拖拽到模板部分，并开始使用[自定义属性](https://docs.n3uron.com/docs/platform-templates-custom-properties)、[继承](https://docs.n3uron.com/docs/platform-templates-inheritance)和[更多功能](https://docs.n3uron.com/docs/platform-templates-nesting)构建您的模板。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### 配置 MQTT 客户端

**步骤 1**：转到 Config→Modules，点击菜单，然后创建一个名为 MqttClient 的**新模块**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **步骤 2**：选择 MqttClient 作为模块类型，然后点击保存。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **步骤 3**：导航到新模块并创建一个名为 HiveMQ 的**新连接**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **步骤 4**：配置连接以使用公共 HiveMQ 代理：

```sh
Broker URL: broker.hivemq.com
Port: 1883
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>

- **步骤 5**：创建一个新的发布者并设置目标主题，例如 "/n3/edgebox"。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **步骤 6**：创建一个**标签过滤器**来匹配此节点中的所有标签，标签过滤器是我们告诉模块哪些标签应该发布到代理的方式。点击**保存**以应用所有更改并重新加载模块。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>

- **步骤 7**：前往诊断并启用 MqttClient 模块的实时日志，等待查看模块每次向代理发布新数据时发出的日志。

 <div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>

### 实例化 WebVision 模块

**步骤 1：** 打开 N3uron 并导航到配置菜单。

**步骤 2：** 点击模块，然后创建一个新模块。此实例可以给定任何名称（除了带有特殊字符如 '.'、'/' 等的名称），尽管建议用户以类似于正在实例化的模块名称的方式命名实例，以便于识别。在此示例中，已选择 WebVision 模块并也将其命名为 WebVision。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_5.gif" /></center>

**步骤 3：** 导航到 WebVision 的主配置并选择适当的服务器设置。默认设置应该适用于大多数用例。有关更多详细信息，请参考以下链接：[WebVision 初始配置](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_6.png" /></center>

**步骤 4：** 一旦 WebVision 模块被实例化，第一步是为之前在 WebUI 的角色部分创建的角色分配权限。默认情况下，存在两个角色：管理员用于管理访问，用户用于常规访问。您可以将用户添加到这些角色或根据需要创建新角色。一旦建立角色，相应地为设计器和查看器角色设置权限。
此外，为每个角色建立标签过滤器路径。标签过滤器路径访问确定标签模型中的哪些标签将可供相应角色进行可视化访问。在这种情况下，我们将为两个角色分配标签模型的完整路径。

- 管理员：
  - 设计器：编辑
  - 查看器：查看
  - 标签过滤器路径：
    - 模式：包含
    - 路径：/
    - 正则表达式模式：.*
- 用户：
  - 设计器：无
  - 查看器：查看
  - 标签过滤器路径：
    - 模式：包含
    - 路径：/
    - 正则表达式模式：.*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_7.gif" /></center>

- 有用链接

  - [用户和角色配置](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [访问配置](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**步骤 5：** 为了测试我们的初始 WebVision 屏幕，让我们创建一个标签。转到 WebUI，选择**配置**，然后点击**标签**。在**模型**部分，点击菜单并选择**新建标签**。将其命名为 **TestTag**，例如，选择类型为**数字**，授予其**读写权限**，将其初始化为 0（可选），然后保存设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_8.gif" /></center>

**步骤 6：** 接下来，导航到配置部分的 WebVision 并点击**打开设计器**。
使用您的**管理员凭据**登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_9.png" /></center>

**步骤 7：** 在模板部分，创建一个名为 Main 的新容器。然后，将此容器指定为启动容器。这将设置 Main 为我们的初始 WebVision 屏幕。它将在旁边显示一个星号符号 (*)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_10.gif" /></center>

**步骤 8：** 更改 Main 容器的背景颜色。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_11.gif" /></center>

**步骤 9：** 在 Main 容器内，导航到组件并添加一个新组件。在此示例中，选择仪表组件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_12.gif" /></center>

**步骤 10：** 在仪表组件内，选择将提供在仪表组件上显示的值的标签。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_13.gif" /></center>

**步骤 11：** 接下来，导航到配置部分的 WebVision 并点击打开 UI。
使用您的管理员凭据登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_14.png" /></center>

**步骤 12：** 为了测试我们的简单设计，导航到 WebUI 并选择数据 > 实时。更改 TestTag 的值。之后，返回到 WebVision UI 并验证仪表组件显示的值是否已更新。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_15.gif" /></center>

WebVision 还有很多功能可以探索，以增强您的 Edge Box 体验。更多详细信息，请参考我们的 [WebVision 知识库](https://docs.n3uron.com/docs/web-vision-configuration)。

您所看到的只是开始。拥抱其令人印象深刻的近 50 个模块所提供的无限可能性。敢于梦想，勇于创新，用 N3uron 的前沿功能将您的项目提升到新的高度。要深入了解这个强大的平台，请访问 [https://n3uron.com/](https://n3uron.com/) 并开始一段激动人心的发现之旅！
