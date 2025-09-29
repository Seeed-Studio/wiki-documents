---
description: Micro_bit bitcar
title: BitCar
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bitcar
last_update:
  date: 12/29/2023
  author: Seraphina
---

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113289-2b808a5b-f4e6-4205-ba05-f5ef6339f38d.png#align=left&display=inline&height=415&originHeight=415&originWidth=415&size=0&status=done&style=none&width=415) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/9.png)

## 介绍
BitCar 是一个 micro:bit 项目，设计了一款智能、可编程的机器人小车，旨在鼓励孩子们的 STEAM 学习。结合来自 Microsoft MakeCode 的程序后，机器人小车将能够执行循线、避障甚至后轮驱动。小车自带扬声器用于播放旋律和音效，底部有 4 个彩色 RGB LED，前端有一个可拆卸的超声波传感器用于避开路上的障碍物。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113282-0a378b93-75f4-4f4a-a776-9d20a53ffc20.png#align=left&display=inline&height=554&originHeight=554&originWidth=923&size=0&status=done&style=none&width=923) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/10.png)

:::note
包装中不包含 micro:bit、USB 线缆和电池。您需要单独准备这些物品。有关如何组装小车的具体详情，请参见附件 1 BitCar 组装说明。有关外壳和底盘的详情，请参见附件 3 BitCar 外壳和底盘。
:::

## 教程
这里有一些示例教程供您学习如何使用这个套件。让我们开始吧！


### 1. 循线
#### 1.1 实现

小车启动后，可以沿着轨道行驶。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113288-c57403ca-ae55-473e-ae97-42c2b0c7ca78.png#align=left&display=inline&height=632&originHeight=632&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/11.png)

> 请参见附件 2 BitCar 地图

#### 1.2 编写程序
请注意，您需要在 MakeCode 中添加扩展，因为它没有控制小车的积木块。按照以下说明添加扩展。

- 让我们先进入 MakeCode：[https://makecode.microbit.org/](https://makecode.microbit.org/)

- 步骤 1 创建一个新项目，这会带您进入工作区。点击齿轮图标（设置）。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113277-c32373b0-93fd-4471-b79b-e1dfd4958188.png#align=left&display=inline&height=565&originHeight=565&originWidth=1152&size=0&status=done&style=none&width=1152) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/12.png)

- 步骤 2 从下拉列表中点击"扩展"，然后您将进入扩展页面。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-225fdfab-20b1-4d31-bc32-1ae7adad3f6d.png#align=left&display=inline&height=723&originHeight=723&originWidth=945&size=0&status=done&style=none&width=945) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/13.png)

- 步骤 3 复制并粘贴此扩展链接到搜索框：[https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113278-4c8a39b6-2479-47c5-900f-a785f201815c.png#align=left&display=inline&height=448&originHeight=448&originWidth=992&size=0&status=done&style=none&width=992) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/14.png)

> 如果提示说此扩展不存在，请关闭浏览器并重试。

- 步骤 4 点击扩展图标并返回工作区。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-405a3a72-1457-4dbb-a230-84db87fe68d1.png#align=left&display=inline&height=505&originHeight=505&originWidth=1119&size=0&status=done&style=none&width=1119) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/15.png)

添加扩展后，我们可以开始任务。


首先，添加一个"无限循环"积木块。如果在左侧检测到黑线，小车应该进行短暂的左转，这样它仍然可以跟随轨道。在这种情况下，我们将左电机速度设置为 3%，右电机速度设置为 15%。同样，如果在右侧检测到黑线，小车应该进行短暂的右转。我们将右电机速度设置为 3%，左电机速度设置为 15%。

> 您可以根据需要调整电机速度。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113295-500e52b5-b3ff-4474-9e87-ed72c1329f1e.png#align=left&display=inline&height=556&originHeight=556&originWidth=1282&size=0&status=done&style=none&width=1282) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/16.png)

#### 1.3 连接设备
将 micro:bit 滑入 BitCar，注意不要插反。然后，用 USB 线缆将 micro:bit 连接到您的 PC。检查 micro:bit 上的 LED 指示灯是否亮起。如果没有，您需要重新插入 USB 线缆。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113285-2552ad75-17d6-4f40-aa08-4223e9ccb65e.png#align=left&display=inline&height=543&originHeight=543&originWidth=642&size=0&status=done&style=none&width=642) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/17.png)

#### 1.4 上传程序
之前的教程已经向您展示了如何下载您编写的程序。您只需要重命名您的程序，点击"下载"按钮并将其发送到您的 micro:bit。
#### 1.5 运行程序
打开小车上的开关，看看它是否能正常运行。


### 2. 避障
#### 2.1 实现
小车启动后，可以沿着轨道行驶，一旦看到障碍物就会立即停止。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113304-c6853e11-bd23-455c-8ca9-ab9b897a9f74.png#align=left&display=inline&height=311&originHeight=311&originWidth=554&size=0&status=done&style=none&width=554) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/18.png)

#### 2.2 编写程序
我们仍然使用教程1中相同的方法来添加BitCar扩展。<br />
首先，添加一个"Forever"块。如果超声波传感器检测到物体距离小于12，则将左电机速度设置为20%，右电机速度设置为0%。然后设置0.7秒超时。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113303-d80b5cc8-83ce-4109-bdbd-0c9244e69358.png#align=left&display=inline&height=474&originHeight=474&originWidth=1305&size=0&status=done&style=none&width=1305) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/19.png)

#### 2.3 连接设备
将micro:bit滑入BitCar，注意不要插反。然后，用USB线将micro:bit连接到PC。检查micro:bit上的LED指示灯是否亮起。如果没有，需要重新插入USB线。取出超声波传感器并将其安装到小车上。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-308bd885-a798-4c30-9a7c-18c399ba6fce.png#align=left&display=inline&height=314&originHeight=314&originWidth=408&size=0&status=done&style=none&width=408) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/20.png)

如何安装超声波传感器（参见包装中的用户手册）：
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113361-abf193ef-4dc7-4d2e-916b-e6cefef00147.png#align=left&display=inline&height=500&originHeight=500&originWidth=1012&size=0&status=done&style=none&width=1012) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/21.png)

#### 2.4 上传程序
在之前的教程中已经介绍了如何下载程序。您只需要重命名程序，点击"Download"按钮并将其发送到micro:bit。

#### 2.5 运行程序
打开小车上的开关，看看它是否能正常运行。


### 3. 遥控小车（由micro:bit控制）
#### 3.1 实现
小车启动后，如果按下micro:bit上的按钮A，小车将前进；如果按下按钮B，小车将后退。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113317-0bc5b339-1106-4562-839e-8ce42d2f8dd7.png#align=left&display=inline&height=539&originHeight=539&originWidth=944&size=0&status=done&style=none&width=944) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/22.png)

#### 3.2 编写程序
我们仍然使用教程1中相同的方法来添加BitCar扩展。

- micro:bit程序<br />
添加一个"on start"块。将"radio set group"块连接到其中。拖放"Forever"块。按照以下程序逻辑：如果按下按钮A，则无线电将发送数字"1"；如果按下按钮B，则无线电将发送数字"2"。

- BitCar程序<br />
添加一个"on start"块。将"radio set group"块连接到其中。按照以下程序逻辑：无线电接收信号"receivedNumber"。如果"receivedNumber"等于1，则小车将以15%的速度前进。如果"receivedNumber"等于2，则小车将以15%的速度后退。


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113345-98bd2a99-0f62-4ea6-adc8-6522c0cee2cb.png#align=left&display=inline&height=486&originHeight=486&originWidth=1213&size=0&status=done&style=none&width=1213) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/23.png)

micro:bit控制器程序
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113327-1cb7faa3-45f1-440e-9192-7a1ca64bbf2e.png#align=left&display=inline&height=518&originHeight=518&originWidth=1283&size=0&status=done&style=none&width=1283) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/24.png)

BitCar接收器程序

#### 3.3 连接设备
将micro:bit滑入BitCar，注意不要插反。然后，用USB线将micro:bit连接到PC。检查micro:bit上的LED指示灯是否亮起。如果没有，需要重新插入USB线。

:::note
有2组程序，因此这个项目需要2个micro:bit。使用一个micro:bit连接电源，另一个用来控制小车。您还需要分别编写和下载程序来区分两个micro:bit。本教程中提到的micro:bit不包含在包装中。
:::

#### 3.4 上传程序
在之前的教程中已经介绍了如何下载程序。您只需要重命名程序，点击"Download"按钮并将其发送到micro:bit。
#### 3.5 运行程序
打开小车上的开关，看看它是否能正常运行。


### 4. 遥控小车（由micro:bit和BitPlayer控制）
#### 4.1 实现
如果操纵杆向上拉，小车前进；如果操纵杆向后拉，小车后退；如果操纵杆向左拉，小车左转；如果操纵杆向右拉，小车右转；如果按下按钮A，小车站立；如果按下按钮B，小车停止。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-83bb83d6-af28-4ffa-87bc-26df831aef8a.png#align=left&display=inline&height=639&originHeight=639&originWidth=1083&size=0&status=done&style=none&width=1083) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/25.png)

#### 4.2 编写程序
我们仍然使用教程1中相同的方法来添加BitCar扩展。<br />
BitCar扩展：[https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)<br />
BitPlayer扩展：[https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)

- BitPlayer程序<br />
  添加一个"on start"块。将"radio set group"块连接到其中。拖放一个"Forever"块。按照以下程序逻辑开始添加块：如果操纵杆向上拉，无线电将发送数字"1"；如果操纵杆向后拉，无线电将发送数字"2"；如果操纵杆向左拉，无线电将发送数字"3"；如果操纵杆向右拉，无线电将发送数字"4"；如果按下按钮A，无线电将发送数字"5"；如果按下按钮B，无线电将发送数字"6"。

- BitCar 程序<br />
  添加一个"当开机时"积木块。将"无线电设置组"积木块连接到其中。如果"receivedNumber"等于1，小车将以15%的速度前进；如果"receivedNumber"等于2，小车将以15%的速度后退；如果"receivedNumber"等于3，右电机速度将为20%，左电机速度将为0%，然后小车将再次以15%的速度前进；如果"receivedNumber"等于4，左电机速度将为20%，右电机速度将为0%，然后小车将再次以15%的速度前进；如果"receivedNumber"等于5，小车将以100%的速度做立起动作；如果"receivedNumber"等于6，小车将停止。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113324-b23e7a3c-37cf-4616-9d5a-85078a7f7617.png#align=left&display=inline&height=780&originHeight=780&originWidth=857&size=0&status=done&style=none&width=857) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/26.png)

BitPlayer 程序
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113335-24bb344c-3f6e-4af8-abb4-b6d80fe210cb.png#align=left&display=inline&height=851&originHeight=851&originWidth=902&size=0&status=done&style=none&width=902) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/27.png)

BitCar 程序

#### 4.3 连接设备
将 micro:bit 滑入 BitCar，注意不要插反。然后，用 USB 线将 micro:bit 连接到您的电脑。检查 micro:bit 上的 LED 指示灯是否亮起。如果没有亮起，您需要重新插入 USB 线。
:::note
有2组程序，因此您需要2个 micro:bit 来完成这个项目。一个 micro:bit 用于 BitPlayer；另一个用于 BitCar。您还需要分别编写和下载程序来区分这两个 micro:bit。本教程中提到的 micro:bit 不包含在包装中。
:::

#### 4.4 上传程序
您已经在之前的教程中了解了如何下载程序。您只需要重命名您的程序，点击"下载"按钮并将其发送到您的 micro:bit。

#### 4.5 运行程序
打开 BitCar 和 BitPlayer。它们匹配后，观察程序是如何运行的。


### 5. Python


除了上述教程外，您还可以使用 Python 来控制 BitCar。以下是示例程序：


#### 5.1 电机控制
首先，我们将导入所有必要的 micro:bit 模块。

1. 在此处添加您的 Python 代码。例如：
2. from microbit import *

然后我们定义一个名为 movement(left,right) 的函数，left 和 right 的值是每个电机的速度（从 -255 到 255）。

```cpp
1. def movement(left, right):
2.     if left > 0:
3.         pin13.write_analog(0)
4.         pin14.write_analog(left)
5.     elif left < 0:
6.         pin13.write_analog(left)
7.         pin14.write_analog(0)
8.     if right > 0:
9.         pin15.write_analog(0)
10.         pin16.write_analog(right)
11.     elif right > 0:
12.         pin15.write_analog(right)
13.         pin16.write_analog(0)
```

定义另一个名为 stop() 的函数，我们调用这个函数来停止 BitCar。

``` cpp
1. def stop():
2.         pin13.write_analog(0)
3.         pin14.write_analog(0)
4.         pin15.write_analog(0)
5.         pin16.write_analog(0)
```

使用我们刚才定义的函数，我们可以如下控制 BitCar：

**全速前进：**<br />
movement(255, 255) 

**全速后退：**<br />
movement(-255, -255)

**顺时针旋转：**<br />
movement(255, -255)

**停止：** <br />
stop()

## 课程信息和示例课程下载
您可以通过此地址在 Make 2 Learn 上查看相关的 micro:bit 和 BitCar 课程：[https://make2learn.tinkergen.com](https://make2learn.tinkergen.com/)


## IV 附件
#### 附件 1 BitCar 组装说明：[Attachment 1 BitCar Assembly Instruction.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf?_lake_card=%7B%22uid%22%3A%221611139151730-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf%22%2C%22name%22%3A%22Attachment%201%20BitCar%20Assembly%20Instruction.pdf%22%2C%22size%22%3A818663%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22UXHlE%22%2C%22card%22%3A%22file%22%7D)

#### 附件 2 BitCar 地图：[Attachment 2 BitCar Map.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf?_lake_card=%7B%22uid%22%3A%221611139162975-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf%22%2C%22name%22%3A%22Attachment%202%20BitCar%20Map.pdf%22%2C%22size%22%3A753958%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22n0BjB%22%2C%22card%22%3A%22file%22%7D)

#### 附件 3 BitCar 外壳和底盘：[Attachment 3 BitCar Cover - Chassis.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip?_lake_card=%7B%22uid%22%3A%221611139172665-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip%22%2C%22name%22%3A%22Attachment%203%20BitCar%20Cover%20-%20Chassis.zip%22%2C%22size%22%3A367966%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22T1EXv%22%2C%22card%22%3A%22file%22%7D)

#### 附件 4 源代码：[Attachment 4 Source Code.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip?_lake_card=%7B%22uid%22%3A%221611139180453-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip%22%2C%22name%22%3A%22Attachment%204%20Source%20Code.zip%22%2C%22size%22%3A1535318%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%227lUfd%22%2C%22card%22%3A%22file%22%7D)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>