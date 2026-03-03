---
description: N3uron 入门指南
title: N3uron 入门指南
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalDM_N3uron_Get_Start
last_update:
  date: 2/27/2024
  author: Xabier Fernández and Kasun Thushara
---

## 什么是 N3uron？

[N3uron](https://n3uron.com/) 是一个完整的 **IIoT 和 DataOps 工业边缘平台**，能够在工业车间和第三方应用程序之间实现无缝集成，无论是本地部署还是云端部署。

使用 N3uron，您可以轻松在 OT 和 IT 系统之间创建双向数据管道，通过在单一可信数据源中整合、建模、处理和可视化所有运营数据来解耦设备与应用程序，最终使这些数据在整个组织中可用。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" /></center>

- **模块化**：它是完全模块化的，拥有近五十个模块，用户可以根据需要进行堆叠以满足项目需求，只需获取应用程序严格必需的模块。
- **跨平台**：N3uron 可以在大多数版本的 Windows 和 Linux 发行版以及 ARM 架构（如 Raspberry Pi）上运行。
- **无限许可证**：N3uron 采用无限许可模式，在标签、用户、设备和连接方面提供无限制使用，价格实惠。
- **基于 Web**：安装完成后，您只需要一个 Web 浏览器即可访问节点。
- **快速部署和开发**：N3uron 可以在不到一分钟内完成安装，其开发环境有助于快速创建数据模型，特别是在使用模板时。
- **极其高效**：单个节点可以轻松管理数十万个标签，同时保持较低的硬件要求。
- **可扩展和多功能架构**：从一开始，N3uron 就被设计为无缝部署具有数百或数千个节点的分布式架构。用户可以使用 N3uron Links 快速连接多个节点，轻松扩展其架构以满足需求。

## 先决条件

### 硬件

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件

我们建议从官方网站安装 **Bullesye** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/)中概述的步骤进行操作。

## 安装

N3uron 可以通过我们的一步式自动安装脚本轻松安装。在继续执行以下步骤之前，请确认您的 reTerminal DM 已连接到互联网。此外，我们假设您正在使用 reTerminal 提供的默认 Raspberry Pi 操作系统。

 **步骤 1**：首先您需要获得对 reTerminal DM 的访问权限。

- 桌面：直接连接鼠标和键盘。请在您的 reTerminal DM 设备上打开终端应用程序。

- VNC：使用虚拟网络计算 (VNC) 进行完整的远程桌面访问。

- SSH：使用安全外壳 (SSH) 进行远程连接。确保您的 reTerminal 可通过网络访问且 SSH 服务器已启用。

更多信息，请访问：[在 reTerminal DM 上设置 SSH 服务器](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh)。

在您的终端中，输入命令：

```sh
ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}
```

在 Raspberry Pi OS 中，默认用户名是 pi。
例如：

```sh
ssh pi@192.168.2.100
```

系统会要求您输入密码，在 Raspberry Pi OS 中，默认密码是 **raspberry**。

- 步骤 2：使用一步自动化安装脚本安装 N3uron。

```sh
curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

几秒钟内，您就可以安装并运行 N3uron 了。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_3.gif" /></center>

## 卸载

要从 reTerminal 卸载 N3uron，请在终端中运行以下命令

**步骤 1：** 卸载 N3uron 服务。

```sh
sudo <n3uron folder>/bin/n3uron uninstall
```
例如，如果 N3uron 安装在 '/opt/n3uron' 文件夹中，命令将是：

```sh
sudo /opt/n3uron/bin/n3uron uninstall
```
**步骤 2:** 删除 N3uron 文件夹（可选）。

```sh
sudo rm -r <n3uron folder>
```
例如，如果 N3uron 文件夹是 '/opt/n3uron'，则命令将是：

```sh
sudo rm -r /opt/n3uron
```

## 访问 N3uron WebUI

要访问 N3uron WebUI，请按照以下步骤操作：

**步骤 1：** 在本地机器上打开网页浏览器。

**步骤 2：** 在浏览器地址栏中输入以下地址之一：

- 本地访问：http://localhost:8003 。
- 局域网内远程访问：http://reTerminal_IpAddress:8003。
- 本地安全访问：https://localhost:8443 。
- 局域网内安全远程访问：https://reTerminal_IpAddress:8443。

**步骤 3：** 按 Enter 键导航到 N3uron WebUI 登录页面。

**步骤 4：** 在提示时输入默认用户名 **admin** 和密码 **n3uron**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_4.gif" /></center>

## 使用方法

N3uron 采用面向微服务的架构设计，其中每个模块作为独立进程运行，Bootstrap 是管理其他进程的核心服务。默认情况下，**WebUI** 模块会自动激活，在安装完成后即可访问，通过创建新的模块实例来启用其他功能。

每个模块都需要有效的许可证才能在生产模式下运行。如果模块找不到有效的许可证，它将在演示模式下运行两小时。要重新启动演示期，必须重启模块。

让我们利用 WebVision 模块来打造我们的第一个 HMI 体验，增强 reTerminal DM 的可视化功能。

## 为 reTerminal DM 引入 WebVision

WebVision 是一个自包含的纯 Web HMI/SCADA 界面，专为工业应用量身定制。完全基于 JavaScript、HTML5 和 CSS 技术构建，WebVision 提供无与伦比的灵活性，使用户能够在智能手机、平板电脑、触摸屏、笔记本电脑、台式电脑和控制室视频墙等各种设备上无缝控制其应用程序。

作为一体化解决方案，WebVision 无需外部应用程序——您需要的一切都开箱即用。从监控和控制到数据收集和分析，WebVision 为效率和便利性设定了标准。
如需更多信息，请访问我们[知识库](https://docs.n3uron.com/docs/web-vision)中的 WebVision 专用网站。

### 实例化 WebVision 模块

**步骤 1：** 打开 N3uron 并导航到 Config 菜单。

**步骤 2：** 点击 Modules，然后创建一个新模块。此实例可以使用任何名称（除了包含特殊字符如 '.'、'/' 等的名称），不过建议用户以与要实例化的模块名称相似的方式命名实例，以便于识别。在此示例中，已选择 WebVision 模块并将其命名为 WebVision。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_5.gif" /></center>

**步骤 3：** 导航到 WebVision 的主配置并选择适当的服务器设置。默认设置应该适用于大多数用例。如需更多详细信息，请参考以下链接：[WebVision 初始配置](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_6.png" /></center>

**步骤 4：** 一旦 WebVision 模块被实例化，第一步是为之前在 WebUI 的 Roles 部分创建的角色分配权限。默认情况下，存在两个角色：Administrator 用于管理访问，User 用于常规访问。您可以向这些角色添加用户或根据需要创建新角色。一旦建立角色，相应地为 Designer 和 Viewer 角色设置权限。
此外，为每个角色建立标签过滤路径。标签过滤路径访问决定了标签模型中的哪些标签可供相应角色进行可视化访问。在这种情况下，我们将为两个角色分配标签模型的完整路径。

- Administrator：
  - Designer：Edit
  - Viewer：View
  - TagFilterPath：
    - Mode：Include
    - Path：/
    - Regex pattern：.*
- User：
  - Designer：None
  - Viewer：View
  - TagFilterPath：
    - Mode：Include
    - Path：/
    - Regex pattern：.*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_7.gif" /></center>

- 有用链接

  - [用户和角色配置](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [访问配置](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**步骤 5：** 为了测试我们的初始 WebVision 屏幕，让我们创建一个标签。转到 WebUI，选择 **Config**，然后点击 **Tag**。在 **Model** 部分，点击菜单并选择 **New Tag**。将其命名为 **TestTag**，例如，选择类型为 **Number**，授予其 **Read-Write permission**，将其初始化为 0（可选），然后保存设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_8.gif" /></center>

**步骤 6：** 接下来，在 Config 部分导航到 WebVision 并点击 **Open Designer**。
使用您的 **Administrator 凭据**登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_9.png" /></center>

**步骤 7：** 在 Templates 部分，创建一个名为 Main 的新 Container。然后，将此容器指定为启动容器。这将把 Main 设置为我们的初始 WebVision 屏幕。它将在旁边显示星号符号 (*)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_10.gif" /></center>

**步骤 8：** 更改 Main 容器的背景颜色。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_11.gif" /></center>

**步骤 9：** 在 Main 容器内，导航到 Components 并添加一个新组件。在此示例中，选择 Gauge 组件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_12.gif" /></center>

**步骤 10：** 在仪表组件中，选择将为仪表组件显示的值提供数据的标签。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_13.gif" /></center>

**步骤 11：** 接下来，在配置部分导航到 WebVision 并点击 Open UI。
使用您的管理员凭据登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

**步骤 12：** 为了测试我们的简单设计，导航到 WebUI 并选择 Data > Realtime。更改 TestTag 的值。然后，返回到 WebVision UI 并验证仪表组件显示的值是否已更新。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_15.gif" /></center>

关于 WebVision 还有很多值得探索的内容，以增强您的 reTerminal DM 体验。有关更多详细信息，请参考我们的 [WebVision 知识库](https://docs.n3uron.com/docs/web-vision-configuration)。

N3uron 的 WebVision 模块与 Seeed Studio 的 reTerminal DM 相结合，为 SCADA 和 HMI 应用提供强大的视觉处理能力，此图像仅用于说明目的。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_16.png" /></center>

您所看到的只是开始。拥抱其令人印象深刻的近 50 个模块阵列所提供的无限可能性。敢于梦想远大，创新，并通过 N3uron 的尖端功能将您的项目提升到新的高度。要深入了解这个强大的平台，请访问 [https://n3uron.com/](https://n3uron.com/) 并踏上激动人心的发现之旅！

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
