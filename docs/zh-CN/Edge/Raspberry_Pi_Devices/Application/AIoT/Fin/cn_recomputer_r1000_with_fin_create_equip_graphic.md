---
description: 本文将向您展示如何创建设备图形（Equip Graphic）

title: 使用 reComputer R1000 和 FIN 创建设备图形
keywords:
  - 边缘控制器
  - reComputer R1000
  - FIN
  - ModbusTCP
  - 图形
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_equip_gaphic
last_update:
  date: 2024/07/22
  author: ShuishengPeng
---

## 介绍
FIN Framework（FIN）是一款软件框架，包含应用套件，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并通过 `Graphics Builder` 创建一个 `设备图形（Equip Graphic）`。

## 开始之前

在开始此项目之前，您可能需要按照以下说明提前准备好硬件和软件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备
* 关于如何安装 FIN Framework，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/)。

## 创建设备图形的步骤
### 创建新的设备图形
**步骤 1**：请将上下文放置在路径 `Tower => Floor1 => ModbusEquip` 下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**步骤 2**：创建一个新的 `设备图形（Equip Graphic）`。点击 `Graphic Builder => new`，根据系统上下文，将弹出一个名为 `Create a Graphic` 的窗口：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

弹出窗口主要包含以下属性：
- **Graphic Name（图形名称）：** 允许您为图形输入一个名称。
- **Graphic Template（图形模板）：** 允许您从可用的预构建“管道模板”列表中选择一个起始模板。这不是必填参数，只是为管道工作提供一个起点。（您也可以创建自己的模板以在此处使用）。
- **Graphic On Filter（图形过滤器）：** 图形过滤器指的是图形的“graphicOn”标签，这些标签决定了该图形将在哪些数据库记录上运行。默认情况下，此过滤器将根据您的上下文设备自动填充。（在我们的示例中，我在 VAV 上创建了图形，这就是为什么截图中的过滤器填充了该 VAV 的标签）。如果需要，可以在创建后更改此过滤器。
- **Relative - By Tags（基于标签的相对）：** 此选项使得点根据其当前标签自动以相对方式导入。当点是相对的时，它们不会“硬编码”到一组设备的数据中。它们是相对的，并将在具有类似点的任何设备上加载，基于点的标签。
- **Relative - By navName（基于导航名称的相对）：** 此选项使得点根据其当前导航名称自动以相对方式导入。当点是相对的时，它们不会“硬编码”到一组设备的数据中。它们是相对的，并将在具有类似点的任何设备上加载，基于点的导航名称。
- **Absolute - by Point Ids（基于点 ID 的绝对）：** 此选项使得点以绝对方式（或“硬编码”）导入到您当前所在的设备。当点以“基于点 ID 的绝对”方式导入时，无论图形加载到哪里，路径都会自动硬编码以从该确切点获取数据。
- **Points（点）：** 允许您选择要导入到图形中的点。通过使用 *CTRL* 和/或 *SHIFT* 键，您可以选择多个点。这些点是根据您的上下文设备填充的。您还可以获得与该设备的引用相关联的点。（在我们的示例中，VAV 有一个 ahuRef，因此我们能够选择 ahuRef 中的点以显示在我们的图形中）。
- **Add Components For（为以下内容添加组件）：** 此列表由您在前一个“点”部分中选择的点填充。通过突出显示此部分中的点，您告诉 FIN 根据其标签自动创建图形组件，并将点绑定到图形组件。这不是必需的，但可以节省时间，因为它选择组件，将其导入，将点绑定到它，并为其带出一个显示标签。

配置完成后，点击 `OK` 按钮。一个新的图形将出现在右侧。点击 `EquipGraphic => Edit` 进入编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>


### 配置新的设备图形
**步骤 1**：进入编辑界面后，系统将根据 `Add Components for` 属性中选择的内容自动生成智能标签和组件。移动控件并点击 `Magic Button => Smart Label to GraphicObjects`，使智能标签自动与控件对齐。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**步骤 2**：检查 `虚拟点`。您可以通过电子邮件点击控件并选择 `编辑属性`。在新弹出的窗口中，您可以看到 `虚拟点`，并可以在此处进行修改；您也可以通过左下角的 `高级` 查看控件对应的 `虚拟点`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**步骤 3**：添加新组件并连接 `虚拟点`。除了系统为我们自动生成的组件外，我们还可以自己添加。在左侧的 `组件` 框中有许多组件。用鼠标左键将控件拖到工作控件上，然后在 `虚拟点` 列中选择对应的 `虚拟点`，并将其拖入新的主控件中。这样，新控件与虚拟点的绑定就完成了。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**步骤 4**：添加 `概览框`。我们可以添加一个 `概览框` 来显示所有值。点击 `概览框 => 新建`，一个新的弹窗将会出现：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **迷你组**：如果启用，这将使概览框显示更大的数值和更小的标题区域。这个框比普通框更小，推荐用于需要在图形上显示的场景，例如 VFD（速度、命令、启用、状态）。
- **点**：这将允许您选择要包含在概览框中的点。**提示**：如果您在打开概览框向导之前选择了任何智能标签，这些点将已经在向导中的点列表中被选中。

选择点后，在下一个窗口中输入窗口标题，最后点击 `应用`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**步骤 5**：显示结果

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>