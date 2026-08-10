---
description: 使用身体感应功能来控制 Subway Surfers。
title: 使用身体传感控制来玩 Subway Surfers
keywords:
  - reCamera
  - 感官控制
  - 游戏
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /use_the_motion-sensing_function_of_recamera_to_play_games
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
createdAt: '2025-11-27'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/use_the_motion-sensing_function_of_recamera_to_play_games/
---

# 使用身体传感控制来玩 Subway Surfers

## 介绍

reCamera 是一款具备强大边缘计算能力的 AI 相机。本示例展示了它在设备端实时运行 YOLO11n-Pose 模型的能力——无需依赖云端，就能精准识别人类身体的关键点和姿态。通过使用 reCamera 捕捉玩家的动作，我们将身体变成控制器，以自然的身体感知来操控 “Subway Run”：跳跃、下蹲、左右闪避，一气呵成！

下面是完成本示例后的使用效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## 硬件准备

一台 reCamera
一台电脑

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera 云台</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. 打开 SenseCraft 并找到名为 “GAME” 的应用

### 1.1 打开 Wiki

SenseCraft 的入口在 Wiki 界面的右上角，点击进入 SenseCraft。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 从 SenseCraft 中打开应用

打开 SenseCraft 的应用部分，在左侧输入框中输入 “GAME”，然后点击进入 GAME 应用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_19.png" /></div>

### 1.3 在 reCamera 上部署此应用

在页面上点击 Deploy Application，然后点击 Visit Workspace Via USB（此时，你应当将 reCamera 连接到电脑）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_23.png" /></div>

随后你会进入 Workspace，Node-RED 节点会加载一段时间，请耐心等待加载完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

加载完成后，你会看到如下界面，点击 No 并退出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

点击右上角的 Deploy 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

部署成功后会弹出提示窗口，然后部署按钮会变成灰色。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

然后打开 Dashboard 查看效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

此时你应该可以成功看到如下检测画面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.4 关闭电脑防火墙并修改 reCamera IP 地址

#### 1.4.1 关闭电脑上的所有防火墙

关闭防火墙是为了避免后续 reCamera 发送的 UDP 消息被拦截。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_22.png" /></div>

#### 1.4.2 将 reCamera 的 IP 地址设置为 192.168.42.2

在电脑上打开控制面板 – 网络和 Internet – 网络连接，找到名为 “UsbNcm Host Device” 的设备，这就是你的 reCamera 设备，右键选择属性进入。   

此步骤是为了让 reCamera 与电脑处于同一网段进行通信。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_20.png" /></div>

选择 IPV4 – 属性 – 使用下面的 IP 地址 – 将 IP 地址改为 192.168.42.2，子网掩码改为 255.255.255.0，选择完成后点击确定。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_21.png" /></div>

### 1.5 测试上下左右四个动作的触发

#### 1.5.1 初始状态

这是初始动作，即回到中间的状态。当你固定好 reCamera、调整好角度后，站在 reCamera 前方，自然地将手臂放在身体两侧，控制小球位于中线且在紫色线与绿色区域之间。此时即可进行其他动作测试。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 左

左臂向左伸出，右臂保持不动，控制小球位于中线左侧，小球会显示为蓝色，此时判定为向左。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 右

右臂向右伸出，左臂保持不动，控制小球位于中线右侧，小球会显示为黄色，此时判定为向右。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 上

双臂向上举，当你看到紫色线超过黄色线时，即判定为向上，小球会保持为白色。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 下

将手臂恢复到中间位置，然后自然下蹲，控制小球进入下蹲区域，小球会变成红色，此时判定为向下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
如果你想连续触发某一组动作，例如连续向左两次，或者先向左再向上，那么在做完第一次向左动作后，应先让小球回到中间，再做第二个动作。
:::

## 2. 下载对应的 python 控制程序并运行

点击此 [GitHub 链接](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git)

进入后，将该项目的压缩包下载到本地。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

解压后，打开 scket_udp.py，然后先下载一个用于控制键盘的依赖。

```bash
pip install pynput
```

然后你就可以运行这个 python 程序了。此时，你应保持 reCamera 检测画面处于有效状态，你会看到动作判定结果的输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. 打开游戏（以地铁跑酷网页版为例）

在确保你的 reCamera 检测和 python 程序都在运行且测试动作输出无误后，打开 [地铁跑酷网页](https://subway-surfers.gg/)，然后点击 “Start Game”，就可以开始玩啦！

:::note
画面中只能出现一个人，当有其他人闯入时，会导致动作判定出错！
:::

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
