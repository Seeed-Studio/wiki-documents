---
description: 本文将向您展示如何创建一个顶级图形

title: 使用 FIN 在 reComputer R1000 上创建顶级图形
keywords:
  - 边缘控制器
  - reComputer R1000
  - FIN
  - ModbusTCP
  - 图形
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_top_level_gaphic
last_update:
  date: 2024/07/17
  author: ShuishengPeng
---

## 简介
FIN Framework (FIN) 是一个包含应用套件的软件框架，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并通过 `Graphics Builder` 创建一个 `顶级图形`。

## 开始之前

在开始此项目之前，您需要按照以下说明提前准备好硬件和软件。

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

## 创建顶级图形的步骤
### 创建新的顶级图形
**步骤 1**：我们创建三个站点。关于如何在设备树下创建站点，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_modbus_tcp_and_rtu/#add-data-points-to-equip-tree)。请将系统上下文保留在主目录中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_grap_Equip_tree_and_top_path.png" /></center>

**步骤 2**：点击 `Graphics Builder => New`，会弹出一个名为 `Create a Graphic` 的窗口。您需要填写 `Graphic Name` 和 `Select sites to include in Top Level graphic` 属性，其中可选的 `site` 是我们在第一步中创建的 `site`。最后点击 `OK`，我们新创建的图形将出现在右侧。点击它，然后点击 `Edit` 进入编辑页面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_1.gif" /></center>

### 配置新的顶级图形

**步骤 1**：导入平面图。首先在左下角的 `TYPE` 列中选择 `IMAGE`，然后您可以导入背景图片。有两种方式导入背景图片。第一种方式是直接从文件夹中将其拖入编辑框；第二种方式是点击左下角的 `BROWSE`。如果您之前导入过某张图片，可以在这里找到该图片。导入后，右键单击鼠标并选择 `Arrange => Send to back` 将图片移至底层。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_2.gif" /></center>

**步骤 2**：由于我们选择了三个 `site`，系统会自动生成三个标签。为了美观，我们将它们放置在右下角并对齐。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_3.gif" /></center>

**步骤 3**：我们可以添加一个 `label` 来说明一些信息。在左侧找到 `label` 控件并将其拖入工作区，调整其大小，然后在右下角更改 `label` 的文本和文本大小。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_4.gif" /></center>

**步骤 4**：添加 `Graphic include` 将我们的标签组合在一起，并设置一个背景颜色以使视觉效果更美观。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_5.gif" /></center>

**步骤 5**：绘制多边形。使用顶部的 `polygon Tool` 绘制一个多边形以标记我们 `site` 的位置。绘制完成后，您还可以使用 `Edit polygon Tool` 工具调整多边形。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_6.gif" /></center>

**步骤 6**：添加 `Virtual points`。切换到左侧的 `Virtual points` 面板，选择与我们选择的 `site` 匹配的 `virtual point`，并将其拖入绘制的多边形中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_7.gif" /></center>

**步骤 7**：使多边形透明。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_8.gif" /></center>

**步骤 8**：保存设置后，点击 `Graphics Builder => Menu`，右侧会出现一个新界面。在新界面中点击 `Top Level Graphic => Create`，会弹出一个名为 `Edit Top Level Record` 的窗口，选择我们设置的图形，最后点击 `APPLY`。返回主界面后，您可以看到我们设置的顶级图形。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>