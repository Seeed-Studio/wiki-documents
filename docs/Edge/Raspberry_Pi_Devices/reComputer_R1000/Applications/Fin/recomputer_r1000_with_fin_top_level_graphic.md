---
description: This article will show you how to create a Top Level Graphic

title: reComputer R1000 with FIN to create a Top Level Graphic
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_top_level_gaphic
last_update:
  date: 07/17/2024
  author: ShuishengPeng
---

## Introduction 
FIN Framework (FIN) is a software framework with application suites that can integrate, control, manage, analyze, visualize and connect. Its capabilities can be integrated by OEMs into a range of products and services.

This article will show you how to use the `Graphics Builder` of FIN Framwork, and to create a `Top Level Graphic` using the `Graphics Builder`.

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

## Steps of create a Top Level Graphic
### Create new Top Level Graphic
**Step 1**: We create three sites. For how to create sites under Equip Tree, you can refer to this [wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/#add-data-points-to-equip-tree). And please keep the system context in the home directory.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_grap_Equip_tree_and_top_path.png" /></center>

**Step 2**: Click `Graphics Builder => New`, and a pop-up window named `Create a Graphic` will appear. You need to fill in the `Graphic Name` and `Select sites to include in Top Level graphic` properties, among which the optional `site` is the `site` we created in the first step. Finally, click `OK` and our newly created Graphic will appear on the right side. Click it and then click `Edit` to enter the editing page.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_1.gif" /></center>

### Configure new Top Level Graphic

**Step 1**: Import the floor plan. First select `IMAGE` in the `TYPE` column in the lower left corner, and then you can import the background image. There are two ways to import background images. The first way is to drag it directly from the folder into the edit box; the second way is to click `BROWSE` in the lower left corner. If you have imported a certain image before, you can click here find that picture. After importing, right-click the mouse and select `Arrange => Send to back` to move the image to the bottom layer.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_2.gif" /></center>

**Step 2**: Since we selected three `site`, the system will automatically generate three labels. For the sake of beauty, we will place them in the lower right corner and align them.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_3.gif" /></center>

**Step 3**: We can add a `label` to explain some information. We find the `label` control on the left and drag it into the workspace, adjust its size, and then change the text and text size of `label` in the lower right corner.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_4.gif" /></center>

**Step 4**: Add `Graphic include` to put our tags together and set a background color to make the visual effect more beautiful

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_5.gif" /></center>

**Step 5**: Draw the polygon. Use the `polygon Tool` at the top to draw a polygon to mark the location of our `site`. After drawing, you can also use the `Edit polygon Tool` tool to adjust the polygon.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_6.gif" /></center>

**Step 6**: Add `Virtual points`. Switch to the `Virtual points` panel on the left, select the `virtual point` that matches the `site` we selected, and drag it into the drawn polygon.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_7.gif" /></center>

**Step 7**: Make the polygon transparent.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_8.gif" /></center>

**Step 8**: After saving the settings, click `Graphics Builder => Menu` and a new interface will appear on the right. Click `Top Level Graphic => Create` in the new interface and a popup named `Edit Top Level Record` will appear. window, select the Graphic we set, and finally click `APPLY`. After returning to the main interface, you can see the Top Level Graphic we set.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" /></center>

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
