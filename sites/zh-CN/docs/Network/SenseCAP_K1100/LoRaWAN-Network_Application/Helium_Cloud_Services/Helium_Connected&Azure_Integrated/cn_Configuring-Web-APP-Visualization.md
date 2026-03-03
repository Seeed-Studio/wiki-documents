---
description: 配置 Web 应用程序可视化
title: 配置 Web 应用程序可视化
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Configuring-Web-APP-Visualization
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# 配置 Web 应用程序可视化

现在我们已经将设备连接到 Helium 网络，并且数据已经从设备通过 Helium 网络流向 Microsoft Azure IoT Hubs，让我们开始探索如何分析和可视化这些数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/192.png" /></div>

## 环境准备

要使用此流程，请提前为您的计算机下载并配置 [Git](https://www.git-scm.com/downloads) 和 Azure CLI。

我们在这里不会详细介绍 Git 的安装和配置，而是重点讲解 Windows 和 MacOS 系统上 Azure CLI 的安装。

Azure 命令行界面 (CLI) 是一个跨平台的命令行工具，用于连接到 Azure 并在 Azure 资源上执行管理命令。它允许通过终端使用交互式命令行提示或脚本执行命令。

对于交互式使用，您首先需要启动一个 shell，例如 Windows 上的 cmd.exe，或 Linux 或 macOS 上的 Bash，然后在 shell 提示符下输入命令。要自动化重复任务，您可以将 CLI 命令组装到一个 shell 脚本中，使用所选 shell 的脚本语法，然后执行该脚本。

### 安装 - Windows

在 Windows 上，Azure CLI 是通过 MSI 安装的，这使您可以通过 Windows 命令提示符 (CMD) 或 PowerShell 访问 CLI。如果为 Windows 子系统 Linux (WSL) 安装，则可以为您的 Linux 发行版获取相应的包。

当前版本的 Azure CLI 是 **2.37.0**。有关最新版本的信息，请参阅 [发行说明](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli)。要查找您已安装的版本并查看是否需要更新，请运行 [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version)。

您还可以使用 PowerShell 安装 Azure CLI。以管理员身份启动 PowerShell 并运行以下命令：

:::note
    PowerShell 必须以管理员身份运行。
:::
以管理员身份启动 PowerShell 并运行以下命令：

```sh
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

这将下载并安装最新版本的 Windows Azure CLI。如果您已经安装了某个版本，安装程序将更新现有版本。

要安装特定版本，请将 `-Uri` 参数替换为 `https://azcliprod.blob.core.windows.net/msi/azure-cli-<version>.msi`，并更改版本段。可用版本可以在 [Azure CLI 发行说明](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli) 中找到。

:::note
安装完成后，您需要重新打开 PowerShell 才能使用 Azure CLI。
:::
现在，您可以通过 Windows 命令提示符或 PowerShell 使用 `az` 命令运行 Azure CLI。

### 安装 - MacOS

对于 macOS 平台，您可以使用 [Homebrew 包管理器](https://brew.sh/) 安装 Azure CLI。Homebrew 使得保持 CLI 的安装版本为最新变得非常简单。CLI 包已在 macOS 10.9 及更高版本上进行了测试。

当前版本的 Azure CLI 是 **2.34.1**。有关最新版本的信息，请参阅 [发行说明](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli)。要查找您已安装的版本并查看是否需要更新，请运行 [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version)。

您可以通过更新 brew 仓库信息，然后运行 `install` 命令来在 macOS 上安装 Azure CLI：

```sh
brew update && brew install azure-cli
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/1.jpg" /></div>

:::note
Azure CLI 依赖于 Homebrew 的 `python@3.10` 包，并会自动安装它。
:::

## 登录到 Microsoft Azure CLI

当您首次在计算机上使用 Microsoft Azure CLI 时，您需要先登录到 IoT 中心，并在命令窗口中输入 `az login` 以打开登录窗口。此时，请完成登录操作。

如果 CLI 能够打开您的默认浏览器，它将启动[授权代码流](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)，并在默认浏览器中加载一个 Azure 登录页面。

否则，它将启动[设备代码流](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code)，并提示您在浏览器页面中打开 [https://aka.ms/devicelogin](https://aka.ms/devicelogin)，然后输入终端中显示的代码。

在浏览器中使用您的账户凭据登录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/161.png" /></div>

## 将 Microsoft Azure CLI 连接到 Microsoft Azure IoT Hub

消费者组为事件流提供独立的视图，使应用程序和 Azure 服务能够独立地从同一个事件中心端点消费数据。在本节中，您将向 IoT 中心的内置端点添加一个消费者组，Web APP 将使用该消费者组读取数据。

IoT 中心创建时会包含几个默认的访问策略。其中一个策略是服务策略，它提供了足够的权限以便服务读取和写入 IoT 中心的端点。运行以下命令以获取符合服务策略的 IoT 中心连接字符串：

```sh
az iot hub connection-string show --hub-name ${YourIotHub} --policy-name service
```

其中，环境变量 `${YourIotHub}` 表示您的 Azure IoT Hub 的名称，如下所示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/157.png" /></div>

连接字符串应类似于以下内容：

```sh
"HostName={YourIotHubName}.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey={YourSharedAccessKey}"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/27.jpg" /></div>

**请记下服务连接字符串**，您将在本教程的后续步骤中用到它。

:::note
如果由于某些原因您无法在计算机上安装 Azure CLI，您可以考虑直接从 IoT 中心面板运行带有 Azure CLI 环境的 bash，以帮助完成后续步骤。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/158.png" /></div>

您可以直接在此处输入上述 az 命令以获取连接字符串。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/159.png" /></div>

## 下载 Web APP 服务框架

请根据您想要使用的传感器类型下载相应的库。

<table align="center">
  <tbody><tr>
      <th>传感器类型</th>
      <th>下载地址</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置光传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/lightsensor-Web-APP">下载</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置 IMU 传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/IMUsensor-Web-APP">下载</a></td>
    </tr>
    <tr>
      <td align="center">土壤湿度传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/soil-moisture-Azure-IoT-hub-Web-APP">下载</a></td>
    </tr>
    <tr>
      <td align="center">VOC 和 eCO2 气体传感器 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SGP30-Azure-IoT-hub-Web-APP">下载</a></td>
    </tr>
    <tr>
      <td align="center">温湿度传感器 (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SHT40-Azure-IoT-hub-Web-APP">下载</a></td>
    </tr>
    <tr>
      <td align="center">视觉 AI 模块</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/VisionAI-Azure-IoT-hub-Web-APP">下载</a></td>
    </tr>
  </tbody></table>

在您喜欢的编辑器中打开 Web APP 库。以下是在 VS Code 中查看的文件结构：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/38.jpg" /></div>

花点时间查看以下文件：

- **Chart-device-data.js** 是一个客户端脚本，它监听 WebSocket，跟踪每个 DeviceId，并存储每个设备最近 50 个数据点。然后将选定的设备数据绑定到图表对象。

- **Index.html** 处理网页的 UI 布局，并引用了客户端逻辑所需的脚本。

- **Event-hub-reader.js** 是一个服务端脚本，它使用指定的连接字符串和消费者组连接到 IoT 中心的内置端点。它从传入消息的元数据中提取 DeviceId 和 EnqueuedTimeUtc，然后使用 server.js 注册的回调方法中继消息。

- **Server.js** 是一个服务端脚本，它初始化 WebSocket 和事件中心包装类。它为事件中心包装类提供了一个回调，该类使用该回调将传入消息广播到 WebSocket。

## 为 Web APP 配置环境变量

为了从 IoT Hub 读取数据，Web APP 需要您的 IoT Hub 的连接字符串以及它应该通过的消费者组的名称。这些字符串可以通过以下 **server.js** 中的代码从进程环境中获取：

```c
const iotHubConnectionString = process.env.IotHubConnectionString;
const eventHubConsumerGroup = process.env.EventHubConsumerGroup;
```

此步骤有两种方法，我们先从更常见的一种开始。

- 第一种方法：在命令窗口中使用以下命令设置环境变量。将占位符值替换为您的 IoT Hub 的服务连接字符串以及您之前创建的消费者组的名称。不要为字符串加引号。

```sh
set IotHubConnectionString = YourIoTHubConnectionString
set EventHubConsumerGroup = YourConsumerGroupName
```

- 第二种方法：我们可以直接在代码中进行修改。这种方法适用于例如在 MacOS 下添加环境变量较为繁琐的情况。

请使用编辑器打开 **server.js** 文件，并根据您创建的消费者组名称以及我们在 [**步骤2**](https://wiki.seeedstudio.com/cn/Configuring-Web-APP-Visualization/#connecting-microsoft-azure-cli-to-microsoft-azure-iot-hub) 中获取的连接字符串进行修改。参考下图进行修改。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/160.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/29.jpg" /></div>

## 运行 Web APP

请根据[之前的 Wiki](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/#upload-code-send-data-to-helium)内容上传代码。确保您的设备正在运行并发送数据。

在命令窗口中运行以下命令以下载和安装引用的包并启动网站：

```sh
npm install
npm start
```

您应该会在控制台中看到输出，表明 Web APP 已成功连接到您的 IoT Hub，并正在监听端口 3000：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/30.jpg" /></div>

## 打开网页查看来自 Azure IoT Hub 的数据

在浏览器中打开 `http://localhost:3000`。

在左上角的列表选择框中，选择您的设备 ID 号。等待下一组发送的数据到达，您可以观察到数据变化的折线图。

### 光传感器实时图像显示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/31.png" /></div>

您还应该在控制台中看到输出，显示您的 Web APP 正在向浏览器客户端广播的消息：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/32.jpg" /></div>

### IMU 传感器实时图像显示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/176.png" /></div>

您还应该在控制台中看到输出，显示您的 Web APP 正在向浏览器客户端广播的消息：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/177.png" /></div>

### 土壤湿度传感器实时图像显示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/188.png" /></div>

您还应该在控制台中看到输出，显示您的 Web APP 正在向浏览器客户端广播的消息：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/187.png" /></div>

### SHT40 传感器实时图像显示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/194.png" /></div>

您还应该在控制台中看到输出，显示您的 Web APP 正在向浏览器客户端广播的消息：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/193.png" /></div>

### SGP30 传感器实时图像显示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/182.png" /></div>

您还应该在控制台中看到输出，显示您的 Web APP 正在向浏览器客户端广播的消息：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/183.png" /></div>

### Grove Vision AI 模块实时图像显示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/201.png" /></div>

您还应该在控制台中看到输出，显示您的 Web APP 正在向浏览器客户端广播的消息：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/199.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>