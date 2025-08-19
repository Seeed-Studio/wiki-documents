---
description: AWS IoT Core 与 reTerminal DM 的集成
title: AWS IoT Core 与 reTerminal DM 的集成
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- 入门指南
- 云服务
slug: /cn/reTerminal-DM_AWS_first
last_update:
  date: 2023/11/22
  author: Kasun Thushara
---
## 简介

AWS IoT Core 是一项服务，旨在帮助安全地连接和管理物联网 (IoT) 设备。它使设备能够相互通信以及与云端通信，从而促进智能和互联应用程序的开发。AWS IoT Core 简化了 IoT 设备与更广泛的 AWS 生态系统的集成，提供了一个可靠且可扩展的平台，用于构建 IoT 解决方案。在本指南中，我们将讨论如何将我们的 reTerminal DM 连接到 AWS IoT 云。

## 入门

在开始此项目之前，您可能需要按照以下说明提前准备好硬件和软件。

### 硬件准备

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们推荐从官方网站安装 **Bullseye** 版本的 Raspberry Pi 64 位操作系统。如果您更倾向于安装新的 Raspbian 操作系统，请按照此 [**指南**](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/) 中的步骤操作。

#### 安装 Mqtt 库
在终端中输入以下命令：

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

:::note

如果您尝试使用 Bookworm OS（截至撰写本文时的最新操作系统），可能需要使用虚拟环境来安装 Python 库。请参考此 [**链接**](https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi) 以获取更多更新。

:::

## 创建 AWS 账户

如果您还没有 AWS 账户，可以轻松创建一个。请按照 [**此链接**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) 的指导来设置您的账户。

## 注册设备

- **步骤 1**：搜索 IoT Core 并导航到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 2**：接下来，在侧边栏中导航到 **Manage** 主题，并在 **All Devices** 下进入 **Things**。

:::info
**什么是 Thing？**

在 AWS IoT 中，物联网 (IoT) 设备被称为 AWS 平台上的 "thing"。每个 IoT 设备（例如本文中的 reTerminal 设备）在 AWS 中都被表示为一个 "thing"。需要注意的是，一旦创建，"thing" 的名称将无法更改。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **步骤 3**：接下来点击 **Create things**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 4**：我们将为单个 reTerminal 设备创建一个 "thing"。因此，点击 **Create Single Thing**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 5**：为 "thing" 命名。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingname.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 6**：同时为您的 "thing" 指定一个类型，以便将来参考。

:::info
**什么是 Thing Type？**

"Thing Type" 允许您存储描述和配置信息，这些信息对于与同一 "thing type" 关联的所有 "thing" 是通用的。这简化了注册表中 "thing" 的管理。例如，您可以定义一个 "Factory_HMI" 类型的 "thing"。在本次演示中，我们使用 "pi" 作为 "thing type"。
:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **步骤 7**：生成证书。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 8**：要附加策略，您需要创建一个策略。点击 **Create policy**。

:::info
AWS IoT Core 策略是遵循 IAM 策略约定的 JSON 文档。它们支持命名策略，使多个身份可以引用相同的策略文档。命名策略是版本化的，便于回滚。
这些策略提供了对 AWS IoT Core 数据平面的访问控制，包括连接到 AWS IoT Core 消息代理、发送/接收 MQTT 消息以及访问或更新 "thing" 的设备影子等操作。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 9**：为策略命名，并按照以下方式设置策略效果、策略操作和策略资源。

:::info
该策略包括：


**效果**: 指定该操作是被允许还是被拒绝。

**操作**: 指定策略允许或拒绝的具体操作。

**资源**: 指定允许或拒绝操作的资源或资源集合。


:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 10**: 通过选择您创建的策略来附加策略，然后点击 **Create thing（创建事物）**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/policycreatething.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 11**: 接下来，您可以下载证书和密钥。请确保下载 **设备证书、私钥和公钥以及根 CA 证书**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/certicates.PNG" style={{width:600, height:450}}/></div>

- **步骤 12**: 将证书附加到事物（reTerminal DM）
为此，请转到 **Security（安全）** >> **Certificates（证书）**

:::info

当您独立于 AWS IoT 事物创建并注册证书时，该证书缺少用于 AWS IoT 操作的策略，并且未与任何事物对象关联。以下说明如何为已注册的证书建立这些连接。证书用于通过 AWS IoT 验证设备连接。将证书链接到事物资源会创建设备（通过证书）与事物资源之间的关系。为了授予设备执行 AWS IoT 操作（如连接和发布消息）的权限，必须将适当的策略附加到设备的证书上。

:::

从 **Actions（操作）** 下拉菜单中选择您创建的事物，然后点击 **Attach to thing（附加到事物）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachtothing.PNG" style={{width:600, height:'auto'}}/></div>

**步骤 13**: 同时附加策略。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachpolicy.PNG" style={{width:600, height:'auto'}}/></div>

## 测试 MQTT

为此，请下载我们的 [测试 Python 文件](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py)。确保您的设备证书、密钥文件（公钥和私钥）、根访问文件以及此 Python 文件位于 reTerminal 设备的同一文件夹中。此外，您需要修改连接 URL。

操作步骤如下：

- **步骤 01**: 转到设置
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/settings.PNG" style={{width:200, height:300}}/></div>

- **步骤 02**: 然后您会找到 URL
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 03**: 将文件名替换为您的文件名并运行文件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## 测试连接

进入 **Test** 标签下的 MQTT 测试客户端，输入主题名称进行订阅。在本例中，主题名称为 `device/data`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

输出结果类似如下所示。来自 reTerminal DM 的消息会弹出显示在控制台中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>