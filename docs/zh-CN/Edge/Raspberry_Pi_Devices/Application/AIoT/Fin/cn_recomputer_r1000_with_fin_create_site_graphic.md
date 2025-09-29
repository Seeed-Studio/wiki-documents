---
description: 本文将向您展示如何创建站点图形

title: 使用 reComputer R1000 和 FIN 创建站点图形
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_site_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## 介绍
FIN Framework (FIN) 是一个软件框架，具有可以集成、控制、管理、分析、可视化和连接的应用程序套件。其功能可以被 OEM 厂商集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并使用 `Graphics Builder` 创建 `Site Graphic`。

## 开始使用

在开始此项目之前，您可能需要按照此处所述提前准备硬件和软件。

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

### 软件准备
* 关于如何安装 FIN Framework，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/)。

## 创建站点图形的步骤
### 创建新的站点图形
**步骤 1**：我们创建了 4 个楼层。关于如何创建楼层，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_modbus_tcp_and_rtu/)。然后将上下文放置在相应的 `Site` 下，这里我们将其放置在 `Tower` 路径下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**步骤 2**：创建新的图形并进入编辑界面。点击 `Graphic Builder => new`，将出现 `Create a Graphic` 的弹出窗口。与创建 `Top Level Graphic` 的区别在于，这里的第二个属性变成了 `Select floors to include in site graphic`，我们选择所有创建的 `Floor`，最后点击 `OK`。之后，我们新创建的图形将出现在右侧。点击 `CC Main => Edit` 进入编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### 配置新的站点图形

**步骤 1**：导入背景图像。首先，在左下角的属性栏中选择 `BACGROUND`，选择 `TYPE` 为 `IMAGE`，然后将背景图像导入到工作区，调整大小并固定。有两种导入背景图像的方法。第一种方法是直接从文件夹拖拽到编辑框中；第二种方法是点击左下角的 `BROWSE`。如果您之前导入过某个图像，可以点击这里找到那张图片。导入后，右键点击鼠标并选择 `Arrange => Send to back` 将图像移动到底层。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**步骤 2**：调整标签位置。由于我们导入了 4 个 `Floors`，系统自动为我们生成了 4 个标签。为了美观，我们将这些标签一一映射到楼层。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**步骤 3**：绘制多边形。我们使用 `polygon Tool` 绘制多边形来标记每个 `Floor` 的位置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**步骤 4**：添加 `Virtual points`。切换到左侧的 `Virtual points` 面板，选择与我们选择的 `Floor` 匹配的 `virtual point`，并将其拖入绘制的多边形中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**步骤 5**：使多边形透明。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**步骤 6**：保存设置后，我们可以从 `Top Level Graphic` 进入新的 `Site graphic`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

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