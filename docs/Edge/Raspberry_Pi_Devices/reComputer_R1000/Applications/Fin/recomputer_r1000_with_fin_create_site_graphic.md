---
description: This article will show you how to create a Site Graphic

title: reComputer R1000 with FIN to create a Site Graphic
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_site_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## Introduction 
FIN Framework (FIN) is a software framework with application suites that can integrate, control, manage, analyze, visualize and connect. Its capabilities can be integrated by OEMs into a range of products and services.

This article will show you how to use the `Graphics Builder` of FIN Framwork, and to create a `Site Graphic` using the `Graphics Builder`.

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

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
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation
* Regarding how to install FIN Framwork, you can refer to this [wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/).

## Steps of create a Site Graphic
### Create new Site Graphic
**Step 1**: We created 4 Floors. For how to create Floors, you can refer to this [wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/). Then place the context under the corresponding `Site`, Here we place it under the `Tower` path.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**Step 2**: Create a new Graphic and enter the editing interface. Click `Graphic Builder => new`, and the pop-up window of `Create a Graphic` will appear. The difference from creating `Top Level Graphic` is that the second property here becomes `Select floors to include in site graphic`, We select all the created `Floor` and finally click `OK`. After that, our newly created Graphic will appear on the right side. Click `CC Main => Edit` to enter the editing interface.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### Configure new Site Graphic

**Step 1**: Import background image. First, select `BACGROUND` in the property bar in the lower left corner, select `TYPE` as `IMAGE`, then import the background image into the workspace, adjust the size and fix it. There are two ways to import background images. The first way is to drag it directly from the folder into the edit box; the second way is to click `BROWSE` in the lower left corner. If you have imported a certain image before, you can click here find that picture. After importing, right-click the mouse and select `Arrange => Send to back` to move the image to the bottom layer.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**Step 2**: Adjust label position. Since we imported 4 `Floors`, the system automatically generated 4 labels for us. For the sake of beauty, we mapped these labels to the floors one by one.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**Step 3**: Draw polygons. We use the `polygon Tool` to draw polygons to mark the position of each `Floor`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**Step 4**: Add `Virtual points`. Switch to the `Virtual points` panel on the left, select the `virtual point` that matches the `Floor` we selected, and drag it into the drawn polygon.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**Step 5**: Make the polygon transparent.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**Step 6**: After saving the settings, we can enter the new `Site graphic` from `Top Level Graphic`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
