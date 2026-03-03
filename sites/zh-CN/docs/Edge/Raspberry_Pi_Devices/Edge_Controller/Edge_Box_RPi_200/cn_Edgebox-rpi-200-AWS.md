---
description: AWS IoT Core 与 EdgeBox RPi 200 集成
title: AWS IoT Core 与 EdgeBox RPi 200 集成
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /cn/Edgebox-rpi-200-AWS
last_update:
  date: 3/11/2024
  author: Kasun Thushara
---

## 介绍

AWS IoT Core 是一项帮助安全连接和管理物联网（IoT）设备的服务。它使设备能够相互通信以及与云端通信，促进智能互联应用程序的开发。AWS IoT Core 简化了 IoT 设备与更广泛的 AWS 生态系统的集成，为构建 IoT 解决方案提供了可靠且可扩展的平台。在本指南中，我们将讨论如何将我们的 Edge Box RPi 200 连接到 AWS IoT 云。

## 入门指南

在开始这个项目之前，您可能需要按照此处描述的方式提前准备硬件和软件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件准备

Edge Box-200 预装了树莓派操作系统。如果您是第一次启动此设备，请阅读我们的[入门指南](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/) Wiki

#### 安装 Mqtt 库

在您的终端中输入：

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

## 创建 AWS 账户

如果您还没有 AWS 账户，您可以轻松创建一个。请按照[**此链接**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)获取有关如何设置账户的指导。

## 注册设备

- **步骤 1**：搜索 IoT core 并导航到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 2**：接下来在侧边栏中导航到 **Manage** 主题，在 **All Devices** 下转到 **Things**。

:::info
**什么是 Thing？**
AWS IoT 在 AWS 平台上将物联网 (IoT) 设备称为"things"。每个 IoT 设备，例如此上下文中的 Edge Box 设备，在 AWS 中都表示为一个"thing"。重要的是，一旦创建，"thing"的名称就无法更改。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **步骤 3**：接下来按 **Create things**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 4**：我们将为单个 EdgeBox 设备创建。所以点击 **Create Single Thing。**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 5**：给出一个 Thing 名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thing_type.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 6**：还要为您将来的参考创建一个 thing type

:::info
**什么是 Thing Type？**

Thing types 使您能够存储与同一 thing type 关联的所有 things 共有的描述和配置信息。这简化了注册表中 things 的管理。例如，您可以定义一个 'Factory_HMI' thing type。在此演示中，我们使用 pi 作为 thing type。

:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **步骤 7**：生成证书

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 8**：要附加策略，您需要创建。点击 **Create policy**

:::info
AWS IoT Core 策略是遵循 IAM 策略约定的 JSON 文档。它们支持命名策略，使多个身份能够引用同一策略文档。命名策略是版本化的，便于轻松回滚。
这些策略提供对 AWS IoT Core 数据平面的访问控制，包括连接到 AWS IoT Core 消息代理、发送/接收 MQTT 消息以及访问或更新 thing 的 Device Shadow 等操作。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 9**：为策略提供适当的名称，并按如下设置策略效果、策略操作和策略资源。

:::info
策略包括：

**Effect**：指定操作是被允许还是被拒绝。

**Action**：指定策略允许或拒绝的特定操作。

**Resource**：指定允许或拒绝操作的资源。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 10**：通过您创建的策略附加策略，然后按 **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_policies.png" style={{width:800, height:'auto'}}/></div>

- **步骤 11**：接下来您可以下载证书和密钥。确保下载 **设备证书、私钥和公钥以及根 CA 证书。**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **步骤 12**：附加到 thing（Edge Box RPi 200）
为此，转到 **Security** >> **Certificates**

:::info
当您独立于 AWS IoT thing 创建和注册证书时，它缺乏 AWS IoT 操作的策略，并且不与任何 thing 对象关联。这解释了如何为已注册的证书建立这些连接。证书通过 AWS IoT 对设备进行身份验证以进行连接。将证书链接到 thing 资源会创建设备（通过证书）与 thing 资源之间的关系。要授予设备执行 AWS IoT 操作的权限，例如连接和发布消息，必须将适当的策略附加到设备的证书。

:::

从 **Actions** 下拉菜单中选择您创建的 thing 后，按 **Attach to thing**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/attch_thing.png" style={{width:600, height:'auto'}}/></div>

**步骤 13**：也要附加策略。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/policy_certificate.png" style={{width:600, height:'auto'}}/></div>

## 测试 MQTT

为了完成这个任务，请下载我们的[测试 Python 文件](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py)。确保您的设备证书、密钥文件（公钥和私钥）、根访问文件以及这个 Python 文件都在您设备上的同一个文件夹中。此外，您需要修改连接 URL。

为此：

- **步骤 01**：转到设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **步骤 02**：然后您将找到 URL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 03**：将这些文件名替换为您的文件名并运行文件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/cosw1.PNG" style={{width:800, height:'auto'}}/></div>

## 测试连接

在**测试**选项卡下转到 MQTT 测试客户端，并输入要订阅的主题名称。在这种情况下，它是 device/data。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

输出类似这样。来自 Edge Box 的消息在控制台中弹出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/AWS/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

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
