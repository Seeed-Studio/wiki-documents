---
description: 在 reTerminal DM 上集成历史数据模块进行可视化
title: 在 reTerminal DM 上集成历史数据模块进行可视化
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
  - Historian
  - MangoDB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalDM_N3uron_Historian
last_update:
  date: 4/4/2024
  author: Xabier Fernández and Kasun Thushara
---
## 介绍

介绍 [N3uron](https://n3uron.com/) Historian：一个基于 MongoDB 构建的强大时间序列存储系统。可以轻松配置它在 x64 位、x32 位和 ARM 架构上存储来自 MongoDB 的数据。使用 Neuron Historian，您可以存储本地或通过 N3uron Links 远程收集的标签值。此外，它还提供了便捷的存储和转发功能，用于在通信中断期间保留数据。得益于高效的压缩和分区技术，它可以处理海量数据而不会出现性能损失。作为参考，1GB 的存储空间可以容纳大约 1 亿个事件。让我们逐步深入了解如何设置它！

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

我们强烈建议学习如何[将 N3uron 与 AWS IoT Core 连接](https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_AWS/)。在本教程的后续部分，您将学习如何使用历史数据模块创建图表。如果您是 N3uron 的新手，我们建议从[N3uron 入门指南](https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_Get_Start/)开始。该指南涵盖了 N3uron Web 界面导航、理解 Web UI 和 Web Vision 模块等概念、掌握标签概念以及创建基本仪表板。建议在继续之前先探索这些基础知识。您可以通过提供的链接访问该指南。

## 在您的 reTerminal DM 上安装 MongoDB

在 x32 和 ARM 架构中，用户需要首先安装 MongoDB 并配置历史数据模块以将数据存储在外部 MongoDB 实例中。

- **步骤 1**：整理文件

将提供的[文件](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/n3uron_historian.zip)（install.sh、uninstall.sh、libcryto.so.1.1 和 libssl.so1.1）放置在您的 reTerminal DM 桌面或任何其他首选位置的单独文件夹中。

- **步骤 2**：导航到文件夹

打开终端并导航到包含文件的文件夹。

```sh
cd your/folder/path
```

- **步骤 3**：运行安装脚本

执行 install.sh 文件以安装 MongoDB。

```sh
./install.sh
```

在安装过程中，您可能会被提示输入您的 sudo 密码。

- **步骤 4**：验证安装

安装完成后，输入以下命令来访问 MongoDB：

```sh
mongo
```

这将打开 MongoDB shell。

- **步骤 5**：创建数据库

在 MongoDB shell 中，输入以下命令来创建一个名为 "mongo" 的数据库（如果不存在的话）：

```sh
use mongo
```

现在，MongoDB 已安装在您的 reTerminal DM 上，并且您已创建了一个名为 "mongo" 的数据库。

- **步骤 6**：如果您的发行版不提供这些库，请将 libcryto.so.1.1 和 libssl.so1.1 分别放置在 /usr/lib 和 /lib 文件夹中。
使用以下命令来完成此操作

```sh
sudo cp /path/to/your/folder/libcryto.so.1.1 /usr/lib
sudo cp /path/to/your/folder/libcryto.so.1.1 /lib

sudo cp /path/to/your/folder/ libssl.so1.1 /usr/lib
sudo cp /path/to/your/folder/ libssl.so1.1 /lib

```

## 创建历史记录模块

- **步骤 1**：访问 N3uron 界面

在您的网页浏览器中访问 `http://localhost:8003`。

- **步骤 2**：导航到配置

在导航菜单下，选择 **Config**，然后选择 **Modules**。点击三条横线图标并选择 **New Module** 来创建一个名为 **Historian** 的新模块。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule.PNG" /></center>

- **步骤 3**：配置模块

选择 **Module type** 为 Historian 并保存配置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule2.PNG" /></center>

- **步骤 4**：更改数据库类型

点击您刚创建的 Historian 模块。将数据库类型更改为 External。您将看到协议为 **mongodb**，数据库为 **mongo**。启用 Node History 模式并保存设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historianconfig.PNG" /></center>

## 启用 Node History 模式

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/nodemode.PNG" /></center>

## 创建历史记录标签

- **步骤 01**：在 **Explorer panel** 中，选择 **Tags**。

- **步骤 02**：在 Model 菜单中，右键点击文件夹图标，选择 **New Tag** 并为其命名。在此示例中，我们将使用 **TestVal**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newtag.PNG" /></center>

- **步骤 3**：启用仿真和历史记录

将 **Simulation** 更改为 **Enabled**，确保历史记录已启用，并将模块名称设置为 **Historian**。**保存** 设置。

:::note
如果您的标签没有数据源并且想要模拟它，您可以启用仿真（可选），或者给它读/写权限并手动为标签提供值。但是如果您将此标签的源设置为来自 AWS 的 MQTT，那么源就是 Aws。因此您必须禁用仿真。否则您只是在读取来自仿真的数据，而不是来自 AWS 的数据。所以在这种情况下仿真不适用，因为您正在设置标签的源来自 MQTT。
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/tagconfig.PNG" /></center>

## 配置历史记录标签到源启用标签

要将历史记录标签嵌入到之前创建的订阅 AWS IoT Core 主题的标签中，请按如下方式修改 **Subscribed_value** 设置：

确保 **History** 为 **Enabled**，模块名称设置为 **Historian**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historyenabled.png" /></center>

## 可视化

如果您已经创建了 **WebVision** 模块，您可以按照以下步骤操作：

**步骤 1**：导航到 WebVision

转到 Config 部分并点击 **Open Designer**。使用您的管理员凭据登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/opendesigner.PNG" /></center>

**步骤 2**：使用现有的主容器

由于我们在上一个教程中创建了主容器，我们在这里也将使用它。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/template.PNG" /></center>

**步骤 3**：添加图表组件

在 **New component** 部分下，添加一个 **Chart** 并为其命名。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchart.PNG" /></center>

**步骤 4**：创建历史数据集

在图表中，找到数据集。点击三个点并选择 **New Dataset**，然后选择 **HistoricalDataSet**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newhistorian.PNG" /></center>

**步骤 5**：配置历史数据集

通过选择标签为 **Subscribed_value**（订阅 AWS IoT Core 主题）来配置历史数据集。将模式设置为 **raw**，日期模式设置为 **current**，启用自动重新加载，并将间隔设置为 5。将日期偏移设置为 1 分钟。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/confighistorian.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/selecttag.PNG" /></center>

**步骤 6**：添加图表系列

在图表下，选择 **New chartSeries** 来添加新的图表系列。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchartseries.PNG" /></center>

**步骤 7**：将历史记录数据集链接到图表

要将历史记录数据集链接到图表，选择 **Link dataset** 并选择您刚创建的历史记录数据集。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/linkdataset.PNG" /></center>

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datasetseries.PNG" /></center>

您现在将看到折线图。自定义样式以获得更好的可见性。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/styles.PNG" /></center>

为了更深入地了解图表属性，建议参考提供的[文章](https://n3uron.com/solutions-web-visualization/)。N3uron 的 Web 界面提供了具有众多属性的各种小部件，因此必须查阅其文档以获得最佳的用户体验和交互。探索他们的文档以获得详细的格式指南和最大化 N3uron Web 界面潜力的见解。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" /></center>

## 使用历史记录模块生成图表

对于这个任务，我们将利用历史记录模块来加载数据。与之前从头开始的方法不同，这种方法提供了一种更简单的方式来检索CSV格式的数据以供将来分析。

- **步骤 1**：添加按钮组件

向您的UI添加一个按钮组件。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonselect.png" /></center>

- **步骤 2**：选择鼠标点击事件

在按钮的事件下选择**鼠标点击**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonevent.png" /></center>

- **步骤 3**：添加动作

选择鼠标点击事件后，点击**添加动作**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addaction.png" /></center>

- **步骤 4**：选择**打开历史记录**

从动作列表中选择**打开历史记录**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addnewaction.png" /></center>

- **步骤 5**：配置动作属性

在这一步中，您需要根据您的要求配置动作的属性。您需要**选择标签，启用重新加载，设置日期模式、模式和日期偏移**。根据需要调整这些设置，以确保动作按预期运行。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/actionproperties.png" /></center>

- **步骤 6**：保存动作

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/saveaction.png" /></center>

- **步骤 7**：转到打开UI

导航到打开UI部分。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

- **步骤 8**：点击按钮

**点击您添加的按钮**，历史记录模块将加载。为数据检索设置适当的间隔。按**应用**来实施更改。然后您将能够看到图表。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/taglist2.png" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph2_3.gif" /></center>

- **步骤 9**：启用自动重新加载

选择**自动重新加载**并设置适当的时间间隔。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/autoreload.png" /></center>

- **步骤 10**：以表格方式查看数据

选择以表格方式查看数据的选项。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/result_button.png" /></center>

- **步骤 11**：以CSV格式下载数据

按下提供的按钮以CSV格式下载数据。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datacollectiontocsv.png" /></center>

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
