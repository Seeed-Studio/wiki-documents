---
description: Grove - Light Sensor
title: Grove - Light Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Light_Sensor
last_update:
  date: 2/1/2023
  author: hushuxu
---

英文 wiki ：https://wiki.seeedstudio.com/Grove-Light_Sensor/

---
![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/cover.jpg)


Grove-Light传感器集成了一个光电阻（依赖光强调整电阻）来检测光强。 当光强度增加时，光电阻的电阻降低。 板上的双OpAmp芯片LM358产生与光强度相对应的电压（即基于电阻值）。 输出信号为模拟值，亮度越亮，值越大。

该模块可用于构建光控开关，即在白天关闭灯，并在夜间开启灯。


!!!Warning
    光传感器值仅反映光强度的近似趋势，它不表示确切的明亮程度。


### 版本信息

本文档适用于以下版本的产品：

| 版本 	| 发布日期	| 购买地址	|
|-----------|---------------|---------------|
|Grove - Light Sensor 1.0 |2013年4月28日|不再销售|
|Grove - Light Sensor(P)| 2014 | 不再销售|
|Grove - Light Sensor(P) V1.1|2016年8月| [![enter image description here](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11Pl6vXS&id=558132536414)|


## 产品特性

-----

* **模拟值输出**
* 高可靠性和灵敏度
* 占地面积小
* 能够识别更广泛的频谱

!!!Tip
    关于Grove模块的更多细节请参考 [Grove System](http://wiki.seeedstudio.com/cn/Grove_System/)
### 支持平台




## 规格参数
----
|项目|参数|
|-----|--------|
|工作电压|3~5V|
|工作电流|	0.5~3 mA|
|响应时间|20-30毫秒|
|峰值波长|540 nm|
|重量|4 g|


## 入门指导

!!!Note
    该部分基于Grove-Light Sensor（P）V1.0。

在这里，我们将通过一个简单的演示向您展示Grove-Light传感器的工作原理。 首先，您需要准备以下内容：

| Seeeduino V4 | Grove - Light Sensor | Grove - LED Bar |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_3.jpg)|
|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11CbMRQI&id=544373791068)|[马上购买](http://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11eweTAx&id=520900900588)|


| Base Shield | micro USB cable | Grove cable |
|---------------|---------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_6.jpg)|
|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11crrag2&id=520233320144)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11FPxAuN&id=521385344999)|[马上购买](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11mtGMxC&id=546720638006)|



### 硬件连接

由于Grove系列模块的优点，您不需要焊接或面包板，您需要做的是将模块连接到Base Shield的适当的Grove端口。 对于此演示，我们将使用两个Grove模块。

*  Grove - 光传感器是一个模拟输出模块，让我们将其连接到 **A0**。
* Grove - LED Bar是一个带两条总线的数字输入模块，我们将其连接到 **D2**。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/connect.jpeg)

### 下载描述


Seeeduino Stalker V3.1有一些示例，其中包括：

* 读取传感器原始值的示例
* 这个板子入门的示例
* 秘密盒演示的例子
* LED条形图库

[![](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/sketch_download.png)](https://github.com/Seeed-Studio/Sketch_Grove_Light_Sensor)

下载这些示例并放在任何地方，打开Arduino IDE，**File（文件）> Sketchbook（项目文件夹）**，并将位置路径复制到 **Sketchbook位置**，然后单击确定。 重新打开Arduino IDE，然后设置编辑页面。

### 将代码上传到Arduino

打开Arduino IDE， **File（文件）> Sketchbook（项目文件夹）> GettingStarted**  打开此部分的代码。

然后选择正确的板和COM端口，然后单击上传按钮，此过程将需要几秒钟。 然后让我们用手遮住光线传感器，你会发现LED灯条减少了它的LED。

### 获取原始数据

如果您不想用 Grove-LED Bar，还有另一个可以尝试的例子，打开Arduino IDE， **File（文件）> Sketchbook（项目文件夹）> RawData** 打开代码，将示例上传到Seeeduino V4后，点击 **Tool（工具）>Serial(串口绘图器)** 以获得传感器的变化曲线。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/raw_data.png)


### 项目：秘密箱

在这里，我们将向您展示由Grove - 光传感器 - 秘密盒制作的项目。 首先你需要一个盒子，一个纸盒，一个木盒子，任何一个盒子都可以。 把东西放在盒子里，因为我们把它命名为秘密盒，这意味着我们不想让任何人打开它，否则会有一个闹钟来通知你。

这里我们使用LinkIt ONE作为控制器，它是一个Arduino兼容板，由丰富的功能组成。 你需要下面的东西：

* [LinkIt ONE](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e111fcjR2&id=45453335551)
* Grove - Light Sensor
* Grove - Base Shield
* 一张SIM卡

我们将Grove - 光传感器连接到A0或Base Shield，并打开Arduino IDE， **File(文件)> Sketchbook（项目文件夹）> SecretBox**，您需要做的是将示例上传到LinkIt ONE。 然后有人打开盒子，灯会检测到它，并发送一个短信。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/secret_box.png)

## 项目 Wooden Laser Gun

![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)

Inspired by OVERWATCH, we have made a very cool Wooden Laser Gun toy for fun these day!

The Wooden Laser Gun and the Gun Target are all based on an Arduino board called Seeeduino Lotus. The laser emitter on the Laser Gun is controlled to fire laser pulse to "activate" the Gun Target. And there are 3 light sensors on the Gun Target to detect the laser pulse. It seems very simple right? If you are interested in our project, please make one for yourself or your child! It's worth to spend one day DIY it as a Xmas present.    

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/make.png)](http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

## 资源下载
---

* [Sketchbook for Light Sensor](https://github.com/Seeed-Studio/Sketch_Grove_Light_Sensor)
* [Eagle File for Grove - Light Sensor V1.0](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip)
* [Eagle File for Grove - Light Sensor(P) V1.0](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip)
* [Eagle File for Grove - Light Sensor(P) V1.1](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip)
- [LS06-MΦ5 Reference Information](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LS06-M%CE%A65_datasheet.pdf)
- [LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LM358.pdf)
- [Light Sensor Library](https://github.com/Seeed-Studio/Light_Sensor)
- [Schematic at Easyeda](https://easyeda.com/Seeed/Grove_Light_sensor_v1_1-32d2a4ff5a8a4d928df91da1d8c647a0)
