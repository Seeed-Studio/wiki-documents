---
description: AWS IoT Core 与 EdgeBox RPi 200 的集成
title: AWS IoT Core 与 EdgeBox RPi 200 的集成
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- 入门指南
- 云服务
slug: /cn/Edgebox-rpi-200-AWS
last_update:
  date: 3/11/2024
  author: Kasun Thushara
---

## 简介

AWS IoT Core 是一项服务，旨在帮助安全连接和管理物联网 (IoT) 设备。它使设备能够相互通信以及与云端通信，从而促进智能和互联应用的开发。AWS IoT Core 简化了 IoT 设备与更广泛的 AWS 生态系统的集成，提供了一个可靠且可扩展的平台来构建 IoT 解决方案。在本指南中，我们将讨论如何将 Edge Box RPi 200 连接到 AWS IoT 云。

## 入门

在开始此项目之前，您可能需要提前准备好硬件和软件，如下所述。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

Edge Box-200 随设备预装了 Raspberry Pi OS。如果您是首次启动此设备，请阅读我们的 [入门指南](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/) Wiki。

#### 安装 MQTT 库
在终端中输入以下命令：

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

## 创建 AWS 账户

如果您还没有 AWS 账户，可以轻松创建一个。请按照 [**此链接**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) 的指导来设置您的账户。

## 注册设备

- **步骤 1**：搜索 IoT Core 并导航到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 2**：接下来，在侧边栏中导航到 **Manage** 主题，并在 **All Devices** 下进入 **Things**。

:::info
**什么是 Thing？**
AWS IoT 在 AWS 平台上将物联网 (IoT) 设备称为 "Thing"。每个 IoT 设备，例如本指南中的 Edge Box 设备，都在 AWS 中表示为一个 "Thing"。需要注意的是，一旦创建，"Thing" 的名称无法更改。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **步骤 3**：接下来点击 **Create things**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 4**：我们将为单个 EdgeBox 设备创建一个 Thing。因此点击 **Create Single Thing**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 5**：为 Thing 命名。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thing_type.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 6**：为 Thing 设置一个类型，以便将来参考。

:::info
**什么是 Thing 类型？**

Thing 类型允许您存储与同一 Thing 类型关联的所有 Thing 通用的描述和配置信息。这简化了注册表中 Thing 的管理。例如，您可以定义一个 'Factory_HMI' Thing 类型。在本演示中，我们使用 pi 作为 Thing 类型。

:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **步骤 7**：生成证书。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 8**：要附加策略，您需要创建策略。点击 **Create policy**。

:::info
AWS IoT Core 策略是遵循 IAM 策略约定的 JSON 文档。它们支持命名策略，使多个身份可以引用相同的策略文档。命名策略是版本化的，便于回滚。
这些策略提供了对 AWS IoT Core 数据平面的访问控制，包括连接到 AWS IoT Core 消息代理、发送/接收 MQTT 消息以及访问或更新 Thing 的设备影子。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 9**：为策略命名，并按照以下设置策略效果、策略操作和策略资源。

:::info
策略包括：

**Effect**：指定操作是允许还是拒绝。

**Action**：指定策略允许或拒绝的具体操作。

**Resource**：指定允许或拒绝操作的资源或资源集合。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 10**：通过您创建的策略附加策略，然后点击 **Create thing**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_policies.png" style={{width:800, height:'auto'}}/></div>

- **步骤 11**：接下来，您可以下载证书和密钥。请确保下载 **设备证书、私钥和公钥以及根 CA 证书。**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **步骤 12**：将证书附加到设备（Edge Box RPi 200）  
为此，请转到 **Security** >> **Certificates**

:::info
当您独立于 AWS IoT 设备创建并注册证书时，该证书缺少用于 AWS IoT 操作的策略，并且未与任何设备对象关联。以下说明如何为已注册的证书建立这些连接。证书用于设备与 AWS IoT 的连接认证。将证书链接到设备资源会创建设备（通过证书）与设备资源之间的关系。为了授予设备执行 AWS IoT 操作（例如连接和发布消息）的权限，必须将适当的策略附加到设备的证书上。

:::

从 **Actions** 下拉菜单中选择您创建的设备，然后点击 **Attach to thing**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_thing.png" style={{width:600, height:'auto'}}/></div>

**步骤 13**：同时附加策略。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/policy_certificate.png" style={{width:600, height:'auto'}}/></div>

## 测试 MQTT

为实现此目的，请下载我们的 [测试 Python 文件](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py)。确保您的设备证书、密钥文件（公钥和私钥）、根访问文件以及此 Python 文件位于设备上的同一文件夹中。此外，您需要修改连接 URL。

操作步骤如下：

- **步骤 01**：进入设置  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **步骤 02**：然后您会找到 URL  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 03**：将文件名替换为您的文件名并运行文件  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## 测试连接

进入 **Test** 标签下的 MQTT 测试客户端，并输入主题名称进行订阅。在本例中，主题名称为 device/data。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

输出类似如下。来自 Edge Box 的消息会弹出在控制台中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>