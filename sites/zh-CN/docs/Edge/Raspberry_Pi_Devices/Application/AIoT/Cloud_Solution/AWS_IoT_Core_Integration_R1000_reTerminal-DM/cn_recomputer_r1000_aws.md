---
description: 了解如何将您的 Computer R1000 连接到 AWS IoT Core，这是一个安全连接和管理 IoT 设备的服务，支持设备到云的通信。本指南简化了 IoT 集成到 AWS 生态系统的过程，为构建智能应用程序提供了可扩展的平台。
title: AWS IoT Core 与 reComputer R1000 集成
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /cn/recomputer_r1000_aws
last_update:
  date: 7/10/2024
  author: Kasun Thushara
---

## 介绍

AWS IoT Core 是一个帮助安全连接和管理物联网 (IoT) 设备的服务。它使设备能够相互通信以及与云通信，促进智能和连接应用程序的开发。AWS IoT Core 简化了 IoT 设备集成到更广泛的 AWS 生态系统中的过程，为构建 IoT 解决方案提供了可靠且可扩展的平台。在本指南中，我们将讨论如何将我们的 reComputer R1000 连接到 AWS IoT 云。

## 入门

在开始这个项目之前，您可能需要提前准备硬件和软件，如下所述。

### 硬件准备

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## 创建 AWS 账户

如果您还没有 AWS 账户，您可以轻松创建一个。请按照[**此链接**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)获取如何设置账户的指导。

## 注册设备

- **步骤 1**：搜索 IoT core 并导航到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 2**：接下来在侧边栏中导航到**管理**主题，在**所有设备**下转到**物品**。

:::info
**什么是物品？**
AWS IoT 在 AWS 平台上将物联网 (IoT) 设备称为"物品"。每个 IoT 设备，例如本文中的 reComputer R1000 设备，在 AWS 中都表示为一个"物品"。重要的是，一旦创建，"物品"的名称就无法更改。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **步骤 3**：接下来按**创建物品**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthings.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 4**：我们将为单个 reComputer R1000 设备创建。所以点击**创建单个物品**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createsinglething.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 5**：给出一个物品名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingname.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 6**：还有一个物品类型供您将来参考

:::info
**什么是物品类型？**

物品类型使您能够存储与同一物品类型关联的所有物品共有的描述和配置信息。这简化了注册表中物品的管理。例如，您可以定义一个"Factory_HMI"物品类型。在此演示中，我们使用 edge_controller 作为物品类型。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingtype.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthingtype.PNG" style={{width:400, height:400}}/></div>

- **步骤 7**：生成证书

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/configurecertificate.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 8**：要附加策略，您需要创建。点击**创建策略**

:::info
AWS IoT Core 策略是遵循 IAM 策略约定的 JSON 文档。它们支持命名策略，使多个身份能够引用同一策略文档。命名策略是版本化的，便于回滚。
这些策略提供对 AWS IoT Core 数据平面的访问控制，包括连接到 AWS IoT Core 消息代理、发送/接收 MQTT 消息以及访问或更新物品的设备影子等操作。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createpolicy.png" style={{width:600, height:'auto'}}/></div>

- **步骤 9**：为策略提供适当的名称，并按以下方式设置策略效果、策略操作和策略资源。

:::info
策略包括：

**效果**：指定操作是被允许还是被拒绝。

**操作**：指定策略允许或拒绝的特定操作。

**资源**：指定允许或拒绝操作的资源。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createapolicy.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 10**：通过您创建的策略附加策略，然后按**创建物品**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/policycreatething.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 11**：接下来您可以下载证书和密钥。确保下载**设备证书、私钥和公钥以及根 CA 证书**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/certicates.PNG" style={{width:600, height:450}}/></div>

- **步骤 12**：附加到物品（reComputer R1000）
为此，转到**安全** >> **证书**

:::info
当您独立于 AWS IoT 物品创建和注册证书时，它缺乏 AWS IoT 操作的策略，并且不与任何物品对象关联。这解释了如何为已注册的证书建立这些连接。证书通过 AWS IoT 对设备进行身份验证以进行连接。将证书链接到物品资源会创建设备（通过证书）与物品资源之间的关系。要授予设备执行 AWS IoT 操作的权限，例如连接和发布消息，必须将适当的策略附加到设备的证书。

:::

从**操作**下拉菜单中选择您创建的物品后，按**附加到物品**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_thing.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 13**：也附加策略。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy.PNG" style={{width:600, height:'auto'}}/></div>

## 准备 reComputer R1000

- **步骤 01**：创建虚拟环境。逐一执行这些命令，您将得到一个虚拟环境。

```sh
mkdir AWS_project
cd AWS_project
python -m venv --system-site-packages env
source env/bin/activate
```

- **步骤 02：** 安装 Mqtt 库

```sh
pip3 install "paho-mqtt<2.0.0"
```

## 运行代码
  
为了实现这一点，请下载我们的[测试 Python 文件](https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWStest.py)。确保您的设备证书、密钥文件（公钥和私钥）、根访问文件以及此 Python 文件都在您设备上的同一个文件夹中。此外，您需要修改连接 URL。

为此：

- **步骤 01**：转到设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/settings.PNG" style={{width:200, height:300}}/></div>

- **步骤 02**：然后您将找到 URL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/weburl.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 03**：将这些文件名替换为您的文件名并运行文件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/code.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 04**：导航到文件夹并运行文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/cmd.PNG" style={{width:600, height:'auto'}}/></div>

## 测试连接

在**测试**选项卡下转到 MQTT 测试客户端，并输入要订阅的主题名称。在这种情况下，它是 device/data。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/mqtttest.PNG" style={{width:600, height:'auto'}}/></div>

输出类似这样。来自 reComputer-R1000 的消息在控制台中弹出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/seeedop.PNG" style={{width:600, height:'auto'}}/></div>

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
