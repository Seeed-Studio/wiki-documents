---
description: This article will show you how to create a Floor Graphic

title: reComputer R1000 with FIN to create a Floor Graphic
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_floor_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## Introduction 
FIN Framework (FIN) is a software framework with application suites that can integrate, control, manage, analyze, visualize and connect. Its capabilities can be integrated by OEMs into a range of products and services.

This article will show you how to use the `Graphics Builder` of FIN Framwork, and to create a `Floor Graphic` using the `Graphics Builder`.

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
* Regarding how to use the Modbus function of FIN framwork, you can refer to this [wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/)

## Steps of create a Floor Graphic
### Create new Floor Graphic
**Step 1**: We established a Modbus TCP connection and a Modbus RTU connection, and created the corresponding Equip. Each Equip has a label of `humidty` and `temperature`. For how to implement this step, you can refer to this [wiki]( https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/). At the same time, please put the context of FIN Framwork under the corresponding `Floor`. Here we put the context under `Tower => Floor1`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**Step 2**: Create a new Floor Graphic and enter the editing interface. Click `Graphic Builder => new`, and the pop-up window of `Create a Floorplan Graphic` will appear. 

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
It has four attributes:

  - Craphic Name
  - Pick a Sample Equip
  - Pick Default Point : Attributes that will be displayed in the graphic
  - Pick Comparison Point : Reference point for color range

Clicking 'OK' will bring up a new pop-up window that lists' Equip 'with the same properties as' Pick Default Point'. Here, we select all of them and finally click 'OK'.
After that, our newly created Graphic will appear on the right side. Click `CCFloor1 => Edit` to enter the editing interface.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### Configure new Site Graphic

**Step 1**: Import background image. First, select `BACGROUND` in the property bar in the lower left corner, select `TYPE` as `IMAGE`, then import the background image into the workspace, Select `Center` for the `POSITION` option and `NO REPEAT` for the `REPEAT` option. There are two ways to import background images. The first way is to drag it directly from the folder into the edit box; the second way is to click `BROWSE` in the lower left corner. If you have imported a certain image before, you can click here find that picture. 

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**Step 2**: Draw polygons. We use the `polygon Tool` to draw polygons to mark the position of each `Equip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**Step 3**: Add `Virtual points`. Switch to the `Virtual points` panel on the left, select the `virtual point` that matches the `Equip` we selected, and drag it into the drawn polygon.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**Step 4**: Add smart tags. Click on `Magic Buttons => Smart Label to Polys` to automatically place the label on the corresponding `Virtual Points`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**Step 5**: Adjust the size of smart tags. You can click on the smart label to adjust its size. If you want to modify the size of multiple smart labels at the same time, you can click on `Compulsions=>Smart label=>Select` to select all smart labels, and then adjust their size

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>


**Step 6**: Change the smart tag to `non interactive` so that the tag does not interfere with your operations

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**Step 7**: Save and display the effect.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

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
