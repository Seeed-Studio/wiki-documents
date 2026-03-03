---
description: 从 Watcher 和 Node-RED 发送数据到 MongoDB
title: Watcher 和 Node-RED 到 MongoDB
keywords:
- Watcher
- MongoDB
- Node-RED
image: https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg
slug: /cn/watcher_node_red_to_mongodb
last_update:
  date: 07/18/2024
  author: Vincent
---

# Watcher 到 MongoDB 快速入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg" style={{width:1000, height:'auto'}}/></div>

[**MongoDB**](https://www.mongodb.com/) 是一个强大的跨平台文档数据库，在处理结构化和非结构化数据方面表现出色。其灵活的无模式数据模型基于类似 JSON 的文档，使其成为需要临时查询和索引的动态应用程序的绝佳选择。

使用 MongoDB 提供了一种直接的方法来**存储和利用来自 Watcher 的数据进行进一步处理或其他项目应用。**

本教程将指导您使用 Watcher API 和 Node-RED 无缝地将数据发送到 MongoDB，这种设置非常适合需要实时数据处理和持久化的项目。

## 第一部分：在 Node-RED 中设置 Watcher

### 步骤 1：安装 Node-RED

首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

此设置需要 Node-RED 以及 Watcher API。如果您尚未安装 Node-RED 或将其与 Watcher API 连接，请从这里开始：[**Watcher 到 Node-RED 快速入门**](https://wiki.seeedstudio.com/cn/watcher_to_node_red)。

### 步骤 2：为 MongoDB 准备数据

将 Watcher 与 Node-RED 集成后，下一步是为 MongoDB 准备来自 Watcher 的数据。在 Node-RED 中使用函数节点来适当地格式化数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

在本教程中，我们将简单地返回所有 Watcher 数据。但是，我们鼓励您根据应用程序的需要转换数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### 格式化数据的 Node-RED 函数示例

```sh
msg.payload = {
    "tlid": msg.payload.value[0].tlid,
    "tn": msg.payload.value[0].tn,
    "content": msg.payload.value[0].content,
    "image_url": msg.payload.value[0].image_url,
    "timestamp": msg.payload.timestamp,
    "orgId": msg.payload.orgId,
    "eui": msg.payload.eui,
    "channel": msg.payload.channel,
    "measurementID": msg.payload.value[0].measurementID
};
return msg;
```

## 第二部分. 设置 MongoDB

### 步骤 3. 创建账户

接下来，创建一个 MongoDB 账户，如果您已经有账户则直接登录。如果您是 MongoDB 新用户，请先访问 [**mongodb.com**](https://www.mongodb.com) 并注册一个免费账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_1.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 部署新集群

登录后，继续部署新集群：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_4.png" style={{width:1000, height:'auto'}}/></div>

1. **选择集群配置**：对于开发环境，我们建议使用 M0 配置，因为它是免费的且足以满足小规模测试需求。但是，如果其他配置更符合您的项目要求，您也可以选择不同的配置。
2. **选择云服务提供商**：我们选择了 AWS，因为它具有广泛的可用性和可靠性，但根据您的地理位置或技术要求，Google Cloud 或 Azure 等其他提供商也同样可行。
3. **选择区域**：这应该是最接近您主要用户群的区域，以最小化延迟并提高性能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 5. 配置数据库安全性

创建节点后，导航到左侧边栏 **Security** 下的 **Quickstart** 菜单。在这里，您将通过指定用户名和密码来创建数据库用户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_6.png" style={{width:1000, height:'auto'}}/></div>

:::note
默认情况下，用户被授予对任何数据库的*读写*权限。您可以选择稍后更新这些权限和/或创建其他用户。
:::

设置用户后，留在 **Quickstart** 页面并向下滚动，将您当前的 IP 地址添加到 IP 访问列表中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_7.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 6. 创建数据库和集合

在左侧边栏中，点击 **Deployment** 类别下的 **Databases** 菜单。然后，点击 **Browse Collections** 打开数据库管理页面。这里是管理所有数据库和集合的地方。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_8.png" style={{width:1000, height:'auto'}}/></div>

在数据库管理器中，点击 **Add My Own Data** 开始创建新数据库和集合的过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_9.png" style={{width:1000, height:'auto'}}/></div>

将出现一个提示，要求您输入新数据库和集合的名称。为每个填入所需的名称。

输入名称后，点击 **Create** 按钮完成新数据库和集合的创建。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_10.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 7. 获取您的主机名

首先登录您的 MongoDB Atlas 仪表板。从这里，导航到左侧边栏的 **Database** 菜单以找到您的集群。找到您所需的集群并点击与其关联的 **Connect** 按钮。这将打开一系列连接选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_11.png" style={{width:1000, height:'auto'}}/></div>

在显示的连接选项中，点击 **Shell**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_12.png" style={{width:1000, height:'auto'}}/></div>

选择 MongoDB Shell 选项后，您将被引导到标题为 **Run your connection string in your command line.** 的部分。在这里，您将找到完整的连接字符串。

在连接字符串中，查找从 `mongodb+srv://` 开始并持续到遇到 `/` 字符的部分。这部分就是您的主机名。它通常包含您的集群名称，后跟 `.mongodb.net`。

例如，如果您的连接字符串是：

```sh
mongosh "mongodb+srv://my-cluster123.mongodb.net" --apiVersion 1 --username my-username
```

The hostname would be:

```sh
my-cluster123.mongodb.net
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_13.png" style={{width:1000, height:'auto'}}/></div>

## 第三部分：将 MongoDB 数据库连接到 Node-RED

### 步骤 8. 安装 MongoDB 模块

点击三条横线图标，然后点击 **Manage palette** 选项。这将打开一个新窗口，您可以在其中添加或删除节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

在调色板管理窗口中切换到 **Install** 选项卡。在搜索栏中，输入 `mongodb-aleph` 来查找模块。然后，点击 **node-red-contrib-mongodb-aleph** 条目旁边的 **install** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
推荐使用 **node-red-contrib-mongodb-aleph** 模块，因为在编写本教程时（2024年7月），它具有当前的兼容性和可靠性。但是，Node-RED 模块的可用性和功能可能会随时间而变化。建议查看 Node-RED 库或 GitHub 存储库中最新的用户反馈和兼容性说明。如果您在使用此模块时遇到问题，请考虑探索 Node-RED 库中列出的其他 MongoDB 模块以获得更合适的选择。
:::

### 步骤 9. 配置 MongoDB 节点

安装 MongoDB 模块后，将 **mongodb - aleph - out** 节点拖拽到您的 Node-RED 流程中，并将其连接到函数节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

双击 MongoDB 节点进行配置。然后，点击服务器字段旁边的加号图标来添加新的服务器配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

1. 输入您之前获取的主机名。
2. 从下拉菜单中将连接拓扑更改为 **DNS Cluster \(mongodb+srv://\)**。
3. 输入您的 MongoDB 数据库名称。
4. 输入您在安全设置中配置的用户名。
5. 输入相应的密码。
6. 为您的 MongoDB 连接提供一个描述性名称，该名称将在 Node-RED 中使用。

然后，点击 **Add** 或 **Update** 保存服务器配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

配置好服务器后，您现在可以指定数据插入的详细信息：

1. 输入您想要插入数据的 MongoDB 集合名称。
2. 将操作设置为 **Insert**，这将向集合中添加新文档。

点击 **Done** 完成设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 10. 部署

最后，通过点击 Node-RED 界面右上角的 Deploy 按钮来部署您的流程。此操作将激活您配置的节点，允许数据从您的函数节点流向 MongoDB。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_9.png" style={{width:1000, height:'auto'}}/></div>

现在，您将看到数据在 MongoDB 中填充。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_Collection_Finished.png" style={{width:1000, height:'auto'}}/></div>

恭喜您成功将 Watcher 与 MongoDB 集成！您已经为开发工作中的大量令人兴奋的机会打开了大门。准备好深入创建利用 MongoDB 强大功能的创新应用程序吧。我们期待看到您接下来将开发的卓越解决方案！

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
