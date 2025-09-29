---
description: 本文将向您展示如何创建楼层图形

title: 使用 reComputer R1000 和 FIN 创建楼层图形
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_floor_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## 介绍

FIN Framework (FIN) 是一个软件框架，具有可以集成、控制、管理、分析、可视化和连接的应用程序套件。其功能可以被 OEM 厂商集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并使用 `Graphics Builder` 创建 `Floor Graphic`。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

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
- 关于如何使用 FIN framework 的 Modbus 功能，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_modbus_tcp_and_rtu/)

## 创建楼层图形的步骤

### 创建新的楼层图形

**步骤 1**：我们建立了一个 Modbus TCP 连接和一个 Modbus RTU 连接，并创建了相应的 Equip。每个 Equip 都有 `humidty` 和 `temperature` 标签。关于如何实现这一步，您可以参考这个 [wiki]( https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_modbus_tcp_and_rtu/)。同时，请将 FIN Framework 的上下文放在相应的 `Floor` 下。这里我们将上下文放在 `Tower => Floor1` 下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**步骤 2**：创建新的楼层图形并进入编辑界面。点击 `Graphic Builder => new`，将出现 `Create a Floorplan Graphic` 的弹出窗口。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
它有四个属性：

- Craphic Name
- Pick a Sample Equip
- Pick Default Point：将在图形中显示的属性
- Pick Comparison Point：颜色范围的参考点

点击 'OK' 将弹出一个新的弹出窗口，列出与 'Pick Default Point' 具有相同属性的 'Equip'。在这里，我们选择所有这些，最后点击 'OK'。
之后，我们新创建的 Graphic 将出现在右侧。点击 `CCFloor1 => Edit` 进入编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### 配置新的站点图形

**步骤 1**：导入背景图像。首先，在左下角的属性栏中选择 `BACGROUND`，将 `TYPE` 选择为 `IMAGE`，然后将背景图像导入到工作区，为 `POSITION` 选项选择 `Center`，为 `REPEAT` 选项选择 `NO REPEAT`。有两种方式导入背景图像。第一种方式是直接从文件夹拖拽到编辑框中；第二种方式是点击左下角的 `BROWSE`。如果您之前导入过某个图像，可以点击这里找到那张图片。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**步骤 2**：绘制多边形。我们使用 `polygon Tool` 绘制多边形来标记每个 `Equip` 的位置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**步骤 3**：添加 `Virtual points`。切换到左侧的 `Virtual points` 面板，选择与我们选择的 `Equip` 匹配的 `virtual point`，并将其拖入绘制的多边形中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**步骤 4**：添加智能标签。点击 `Magic Buttons => Smart Label to Polys` 自动将标签放置在相应的 `Virtual Points` 上。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**步骤 5**：调整智能标签的大小。您可以点击智能标签来调整其大小。如果您想同时修改多个智能标签的大小，可以点击 `Compulsions=>Smart label=>Select` 选择所有智能标签，然后调整它们的大小

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>

**步骤 6**：将智能标签更改为 `non interactive`，这样标签就不会干扰您的操作

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**步骤 7**：保存并显示效果。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

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
