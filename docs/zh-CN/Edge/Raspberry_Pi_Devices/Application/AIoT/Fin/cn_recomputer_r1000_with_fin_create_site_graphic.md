---
description: 本文将向您展示如何创建站点图形

title: 使用 FIN 在 reComputer R1000 上创建站点图形
keywords:
  - 边缘控制器
  - reComputer R1000
  - FIN
  - ModbusTCP
  - 图形
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_site_gaphic
last_update:
  date: 2024/07/18
  author: ShuishengPeng
---

## 简介
FIN Framework（FIN）是一款软件框架，包含应用套件，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并通过 `Graphics Builder` 创建一个 `站点图形`。

## 开始之前

在开始此项目之前，您需要提前准备好硬件和软件，如下所述。

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

## 创建站点图形的步骤
### 创建新的站点图形
**步骤 1**：我们创建了 4 个楼层。关于如何创建楼层，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_modbus_tcp_and_rtu/)。然后将上下文放置在相应的 `站点` 下，这里我们将其放置在 `Tower` 路径下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**步骤 2**：创建一个新的图形并进入编辑界面。点击 `Graphic Builder => new`，将弹出 `Create a Graphic` 的窗口。与创建 `Top Level Graphic` 的区别在于，这里的第二个属性变为 `Select floors to include in site graphic`，我们选择所有已创建的 `Floor`，最后点击 `OK`。之后，我们新创建的图形将出现在右侧。点击 `CC Main => Edit` 进入编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### 配置新的站点图形

**步骤 1**：导入背景图片。首先，在左下角的属性栏中选择 `BACGROUND`，将 `TYPE` 设置为 `IMAGE`，然后将背景图片导入工作区，调整大小并固定。导入背景图片有两种方式。第一种方式是直接从文件夹中拖动到编辑框中；第二种方式是点击左下角的 `BROWSE`。如果之前已导入某张图片，可以在此处找到该图片。导入后，右键单击鼠标并选择 `Arrange => Send to back` 将图片移动到底层。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**步骤 2**：调整标签位置。由于我们导入了 4 个 `Floors`，系统为我们自动生成了 4 个标签。为了美观，我们将这些标签一一映射到楼层。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**步骤 3**：绘制多边形。我们使用 `polygon Tool` 绘制多边形以标记每个 `Floor` 的位置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**步骤 4**：添加 `虚拟点`。切换到左侧的 `Virtual points` 面板，选择与我们选择的 `Floor` 匹配的 `虚拟点`，并将其拖入绘制的多边形中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**步骤 5**：使多边形透明。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**步骤 6**：保存设置后，我们可以从 `Top Level Graphic` 进入新的 `站点图形`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>