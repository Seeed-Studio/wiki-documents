---
description: Use the body-sensing function to control Subway Surfers.
title: Play Subway Surfers with body sensor control
keywords:
  - reCamera
  - Sensory control
  - Game
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif 
slug: /use_the_motion-sensing_function_of_recamera_to_play_games
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
---

# Play Subway Surfers with body sensor control

## Introduction

The reCamera is an AI camera equipped with powerful edge computing capabilities. This demo showcases its ability to run the YOLO11n-Pose model in real-time at the device level - without relying on the cloud, it can accurately identify the key points and postures of the human body. By capturing the player's movements with the reCamera, we transform our bodies into controllers, allowing us to operate "Subway Run" with natural body sensations: jumping, squatting, and dodging left and right, all in one seamless motion!

Here is the usage effect after completing this demo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## Hardware Preparation

One reCamera
one computer

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. Open the SenseCraft and find the Applications named "GAME"

### 1.1 Open Wiki

The SenseCraft entry is in the upper right corner of the Wiki interface, click to enter the SenseCraft

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 Workspace into the reCamera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_2.png" /></div>

### 1.3 Find the Application named GAME and click in

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_3.png" /></div>

### 1.4 Deploy this Application on the reCamera

Slide to the bottom of the page, click on the Open Application, then click on the Visit Workspace Via USB (you should connect the reCamera to your computer at this time)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_4.png" /></div>

Then you will enter the Workspace,Node-RED node will load for a while, please wait patiently for the loading to complete

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

After loading, you will see the following interface, click No and exit

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

Click the Deploy button in the upper right corner

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

After the deployment is successful, a pop-up window will prompt, and then the deployment button will turn gray.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

Then open the Dashboard to see the effect

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

At this point you should be able to successfully see the detection screen as follows

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.5 test the trigger of the four actions up, down, left and right

#### 1.5.1 Initial state

This is the initial action, that is, the return to the middle state. When you fix the reCamera, adjust the angle, stand in front of the reCamera, put your arms on both sides naturally, and control the ball to be on the center line and between the purple line and the green area. At this time, you can perform other actions to test.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 Left

Left arm to the left, keep the right arm still, control the ball to the left of the center line, he will be displayed in blue, at this time determined to be left

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 Right

Right arm to the right, keep the left arm still, control the ball to the right of the center line, he will be displayed in yellow, at this time judged to be right

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 Up

Both arms should be raised upward. When you see the purple line exceeding the yellow line, it is determined to be upward and the ball will remain white.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 DOWN

Keep the arm back to the middle and then squat down naturally. Control the ball to the squat area. The ball will turn red. At this time, it is determined to be downward.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
If you want to trigger a certain set of actions in a row, such as going left twice in a row, or going left and then going up, then when you do the first left action, you should first make the ball back in the middle and then do the second action.
:::

## 2. Download the corresponding python control program and run it.

Click on this [GitHub link](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git)

After entering, download the compressed package of this project to the local

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

After decompression, open scket_udp.py, and then download a dependency that controls the keyboard first.

```bash
pip install pynput
```

Then you can run this python program. At this time, you should keep the reCamera detection screen in effect, and you will see the output of the result of action determination.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. Open the game (take the subway parkour web version as an example)

After ensuring that your reCamera detection and python programs are running and the output of the test actions is no problem, open the [subway parkour web page](https://subway-surfers.gg/),Then click "Start Game" and you can start playing!

:::note
Only one person can appear in the screen. When other people break in, it will lead to an error in the action judgment!
:::

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
