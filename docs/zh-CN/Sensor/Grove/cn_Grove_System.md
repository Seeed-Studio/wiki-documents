---
description: Grove生态系统介绍
title: Grove生态系统介绍
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_System
last_update:
  date: 03/13/2023
  author: Matthew
---

<!-- ![](https://media-cdn.seeedstudio.com/media/wysiwyg/grove9b5a_.jpeg) -->

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/grove9b5a_.jpeg" style={{width:1000, height:'auto'}}/></div>

## 目录

- [**什么是Grove生态系统？**](#jump1)
- [**Grove生态系统包含什么？**](#jump2)
  - [**Grove传感器**](#jump3)
  - [**Grove网络模块**](#jump4)
  - [**Grove配件**](#jump5)
  - [**支持Grove接口的开发板**](#jump6)
  - [**包含Grove模块和课程的套件**](#jump7)
  - [**共创计划 - Grove模块**](#jump8)
  - [**Grove连接线**](#jump9)
- [**Grove项目**](#jump10)
- [**更多关于Grove生态系统的知识**](#jump11)
- [**Grove资源**](#jump12)
- [**技术支持与产品讨论**](#jump13)

## <span id="jump1"> 什么是Grove生态系统？ </span>

Grove是一个模块化、标准化连接器的原型系统。与使用跳线或焊接的系统相比，Grove的模块化积木式方法使组装真实电子设备变得简单。Grove系统由一个基础单元和各种带有标准化连接器的模块组成。这些模块最初被称为“茎”和“枝”，但这些名称已经被淘汰。

基础单元通常是一个微处理器，允许轻松连接任何来自Grove模块的输入或输出。每个Grove模块通常实现单一功能，例如一个简单的按钮或一个更复杂的心率传感器。您不需要基础单元即可连接其他Grove模块。您可以使用一根线（Grove到针脚头转换器）从Raspberry Pi或Arduino的针脚连接到Grove连接器。

<!-- <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Grow Your Idea</font></span></strong>
    </a>
</div> -->

## <span id="jump2"> Grove生态系统包含什么？ </span>

Grove生态系统提供了一种方便且用户友好的方法来制作原型和构建电子系统。其模块化特性、标准化连接器以及广泛的模块种类使初学者和经验丰富的创客都能快速组装和实验真实的电子设备。

### <span id="jump3"> Grove传感器 </span>

Grove生态系统提供了多种传感器，可以轻松集成到您的电子项目中。这些传感器旨在实现特定功能，并能够提供各种类型的输入数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/GroveSystem/images/grove_cover.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/Grove_Sensor_Intro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki平台</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 购买</font></span></strong></a>
</div>

### <span id="jump4"> Grove网络模块</span>

Grove系统还包括网络模块，这些模块能够在您的项目中实现通信和连接。这些模块允许您将电子设备连接到不同的网络，例如Wi-Fi、蓝牙、LoRa、NFC或其他标准协议。

通过Grove网络模块，您可以轻松为您的项目添加无线功能，实现数据传输、远程控制或与其他设备及互联网的交互。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/Grove_network_module_intro" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki平台</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 购买</font></span></strong></a>
</div>

### <span id="jump5"> Grove配件 </span>

除了传感器和网络模块，Grove生态系统还提供了各种配件，以补充和增强您的电子项目。这些配件包括LCD显示屏、LED矩阵、电机驱动器、继电器模块等组件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/Grove_Accessories_Intro" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki平台</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 购买</font></span></strong></a>
</div>

<!-- - [Grove Sensor](/cn/Grove_Sensor_Intro)
- [Grove Network Module](/cn/Grove_network_module_intro)
- [Grove Accessories](/cn/Grove_Accessories_Intro) -->

<!-- ## Grove选择指南

- [Seeed加速度计选择指南](https://wiki.seeedstudio.com/cn/Sensor_accelerometer/)
- [Seeed气压计选择指南](https://wiki.seeedstudio.com/cn/Barometer-Selection-Guide/)
- [Seeed生物医学传感器选择指南](https://wiki.seeedstudio.com/cn/Sensor_biomedicine/)
- [Seeed距离传感器选择指南](https://wiki.seeedstudio.com/cn/Sensor_distance/)
- [Seeed气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)
- [Seeed光传感器选择指南](https://wiki.seeedstudio.com/cn/Sensor_light/)
- [Seeed继电器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Relay_Page/)
- [Seeed声音传感器选择指南](https://wiki.seeedstudio.com/cn/Sensor_sound/)
 -->

### <span id="jump6"> 支持Grove接口的开发板 </span>

Grove接口设计为兼容多种开发板和微控制器。

#### 由Seeed Studio发布

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Seeed Studio XIAO 扩展板</th>
      <th class="table-trnobg">Grove Arduino 基础扩展板</th>
      <th class="table-trnobg">BitMaker Micro:bit 扩展板</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7fcf1504b9ae121117c384508995ea87/z/h/zheng1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7fcf1504b9ae121117c384508995ea87/h/t/httpsstatics3.seeedstudio.comseeedimg2016-09ojyc6a5jtrgslqwc5j7gw9ti.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7fcf1504b9ae121117c384508995ea87/1/1/114992653_front-05.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/CH-BitMaker-V2-p-5330.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
有关更多支持 Grove 接口的开发板，例如 Raspberry Pi、Pi Zero 或其他由 Seeed Studio 推出的开发板，您可以查看 [这里（扩展板和套件）](https://www.seeedstudio.com/shopby/grove.html)。
:::

#### Arduino 发布

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Arduino MKR Connector Carrier</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://store.arduino.cc/cdn/shop/products/ASX00007_03.front_3c2038d5-8a94-4e18-bd9f-37dfe223be5f_643x483.jpg?v=1649769023" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://store.arduino.cc/products/arduino-mkr-connector-carrier-grove-compatible?queryID=undefined" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

#### Adafruit 发布

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Shield FeatherWing for Particle Mesh 和所有 Feathers</th>
      <th class="table-trnobg">Grove 转 STEMMA QT / Qwiic / JST SH 电缆</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://cdn-shop.adafruit.com/970x728/4309-00.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://cdn-shop.adafruit.com/970x728/4528-07.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.adafruit.com/product/4309" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.adafruit.com/product/4528" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

#### DIGI 发布

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Connector 开发板 - XBee，通孔插座</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://www.digi.com/products/models/76000956/product-images/xbee-th-grove-connector-dev-board" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.digi.com/products/models/76000956" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<!-- <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/Grove_Accessories_Intro" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📖 Wiki 平台</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/grove.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 购买</font></span></strong>
    </a>
</div> -->

### <span id="jump7"> 套件包含 Grove 模块和课程 </span>

#### 基于 Arduino 的开发板

Grove Arduino 初学者套件是最适合初学者的 Arduino 初学者套件之一。它包括一个 Arduino 兼容板以及 10 个额外的 Arduino 传感器，并采用一体化 PCB 设计。所有模块通过 PCB 焊盘连接到 Seeeduino，因此不需要使用 Grove 电缆进行连接。不过，您也可以将模块取出并使用 Grove 电缆连接模块。使用这个 Grove Arduino 初学者套件，您可以构建任何您喜欢的 Arduino 项目！

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Arduino 初学者套件</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg" style={{width:400, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/cn/Grove-Beginner-Kit-For-Arduino" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>


:::tip
关于更多 Arduino 套件，请点击 [这里](https://www.seeedstudio.com/shopby/grove.html)。
:::

#### 基于 Raspberry Pi 的套件

在 Seeed，我们为您设计了 8 个教程，帮助您使用一些基本的 Grove 模块和 Raspberry Pi 4 开始动手实践。本节提供了模块如何组合并应用于实际生活场景的指南。

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove Raspberry Pi 基础套件</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png" style={{width:400, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/cn/Grove_Base_Kit_for_Raspberry_Pi" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
关于更多 Raspberry Pi 套件，请查看 [这里](https://www.seeedstudio.com/shopby/grove.html)。
:::

#### 基于 SeeedStudio XIAO 的套件

“XIAO: 强大性能，小巧板卡”的主要受众包括电子爱好者、学生、教育工作者以及希望探索和最大化紧凑硬件平台潜力的专业人士。这些读者通常可能是电子爱好者、DIY 项目创作者、电子教育工作者，甚至是初级嵌入式系统开发者。随着他们职业生涯的进步，他们可能正在为电子设计工程师、IoT 开发者或机器学习硬件集成者等角色做准备。

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">XIAO: 强大性能，小巧板卡</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" style={{width:400, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/cn/XIAO-Kit-Courses" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
关于更多 Seeed Studio XIAO 系列套件，请查看 [这里](https://www.seeedstudio.com/shopby/grove.html)。
:::

#### 基于 Wio Terminal 的套件

此套件包含 Wio Terminal 和课程书籍。此书专为教育工作者设计，旨在将 Wio Terminal 引入课堂或工作坊，以向学习者展示 TinyML 的强大功能。它提供了教授机器学习基础知识所需的基本内容，同时通过动手练习使概念更加贴近实际。

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">应用套件 ML101 与 Vijay 教授课程</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" style={{width:400, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/cn/Wio-Terminal-TinyML-Kit-Course" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

:::tip
关于更多 Wio Terminal 套件，请查看 [这里](https://www.seeedstudio.com/shopby/grove.html)。
:::


### <span id="jump8"> 共创计划 - Grove 模块 </span>

Seeed Studio Fusion 推出了 Grove 传感器联合品牌活动，帮助工程师将他们的 Grove 设计变成真实产品。参与者可以将他们的设计制造并在 Seeed Studio Bazaar（产品购买页面）上销售。

<div style={{textAlign:'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/project_2.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.google.com/forms/d/e/1FAIpQLSe3A7_rIbn2OLO4JyJd_poGZodItCaRy6M6-3FtdqL3xG1Usg/viewform" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即申请</font></span></strong></a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/co-create.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 更多信息</font></span></strong></a>
</div>

### <span id="jump9"> Grove 电缆 </span>

<!-- ![fusion activity](https://www.seeedstudio.com/blog/wp-content/uploads/2022/07/Grove%E6%B4%BB%E5%8A%A81200x.png) -->

#### 普通 Grove 电缆

以下是适用于您的项目的 5 种 Grove 电缆类型，长度分别为 5cm、20cm、30cm、40cm 和 50cm，如下所示。

| 5cm | 20 cm | 30 cm | 40 cm | 50 cm |
|-----|-------|-------|-------|-------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_20.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_30.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_40.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_50.jpg)|
|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-5-PCs-Pack-p-749.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-30cm-Cable-5-PCs-Pack.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-40cm-Cable-5-PCs-Pack.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-50cm-Cable-5-PCs-Pack.html)|

#### Grove - 分支电缆

使用此电缆可以将两个 I2C Grove 模块连接到一个 I2C 主干连接器。此电缆兼容所有 I2C Grove 模块。当您需要将多个 I2C 设备连接到您的 Grove 系统时，它将非常有用。

<!-- [![// image](https://files.seeedstudio.com/wiki/GroveSystem/images/cable_branch.jpg)](https://www.seeedstudio.com/depot/grove-branch-cable-5pcs-pack-p-847.html?cPath=98_106_57) -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/GroveSystem/images/cable_branch.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
您可以在 [Bazaar 购买页面](https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html) 查看详情。我们还推出了 [Grove - I2C Hub (6 Port)](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html) 来实现此功能。
:::

<!-- 
示例应用包括：

* 连接或串联两个或多个 I2C 设备。可以使用多个分支电缆扩展 I2C 总线。
* 连接需要同时工作的两个设备。例如，可以使用单个 Grove 分支电缆将 LED 和继电器连接到 Grove Shield。这样可以通过单个数字引脚同时控制 LED 和继电器的开关。
-->

#### Grove - 用于舵机的分支电缆

Grove 用于舵机的分支电缆可用于将一个或两个舵机连接到项目中，电源和地线在连接器之间共享，每个舵机的 PWM 信号分别连接到 Arduino 的 PWM 引脚。电缆的四针键控连接器通常连接到 Grove Shield 的数字插座，线缆颜色（黄色或白色）表示舵机输入对应的数字引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/GroveSystem/images/cable_servo.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
您可以在 [Bazaar 购买页面](https://www.seeedstudio.com/Grove-Branch-Cable-for-Servo-5PCs-pack.html) 查看详情。
:::

#### Grove & Qwiic/STEMMA QT 接口到公/母跳线电缆

此电缆可帮助您使用单根电缆将多个 Grove、Qwiic 和 STEMMA QT 模块连接到开发板。

您可以将一个 Grove 模块和一个 Qwiic 模块或 STEMMA QT 模块连接到 [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) 或 [Arduino UNO](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-2995.html)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/114992154/qwiic.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/114992154/stemma.png" style={{width:300, height:'auto'}}/></div>

:::tip
您可以在 [Bazaar 购买页面](https://www.seeedstudio.com/Grove-Qwiic-STEMMA-QT-Interface-to-Male-Female-Jumper-Cables-p-4467.html) 查看详情。
:::

#### Grove - 4 针母跳线到 Grove 4 针转换电缆（每包 5 根）

根据客户的需求，我们推出了 4 针母跳线到 Grove 4 针转换电缆，以便直接使用 Grove 模块与 Arduino 连接。此电缆上的母跳线兼容 2.54mm 间距针脚。使用此电缆，您可以轻松将所有 Seeed 的 Grove 模块连接到任何 2.54mm 间距连接器。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductgrove4p254.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
您可以在 [Bazaar 购买页面](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html) 查看详情。
:::

#### Grove - 4 针公跳线到 Grove 4 针转换电缆（每包 5 根）

Grove 是一个方便的即插即用系统，具有专用接口，但这并不意味着它不能用于开放生态系统，例如面包板。此电缆上的公跳线兼容 2.54mm 间距针脚。使用此电缆，您可以轻松将所有 Seeed 的 Grove 模块连接到任何 2.54mm 间距连接器。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg" style={{width:300, height:'auto'}}/></div>

:::tip
您可以在 [Bazaar 购买页面](https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html) 查看详情。
:::

#### Grove 母头 - DIP-4P-2.0mm-90度

这是一个 4 针、2.0mm 间距、90度版本的 DIP Grove 母头连接器套装，共10个，适用于进行线缆传输并使您的开发板连接到组件。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductuni4901s.jpg" style={{width:300, height:'auto'}}/></div>

:::提示
您可以在 [Bazaar 购买页面](https://www.seeedstudio.com/Grove-Universal-4-pin-connector-90-10-PCs.html) 查看详情。
:::

#### Grove 母头连接器 - DIP-4P-2.0mm-10个装

这是一个 4 针、2.0mm 间距的 DIP Grove 母头连接器套装，共10个，适用于进行线缆传输并使您的开发板连接到组件。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductuni4s.jpg" style={{width:300, height:'auto'}}/></div>

:::提示
您可以在 [Bazaar 购买页面](https://www.seeedstudio.com/Grove-Universal-4-pin-connector.html) 查看详情。
:::

## ✨ 贡献者项目

- 本页面由 [Seeed Studio 贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6) 更新。
- 非常感谢 [Elizabeth 的努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=33931997)，您的贡献将作为我们感谢的一部分展示！

## <span id="jump10"> Grove 项目 </span>

以下是一些使用 Grove 制作的项目供您参考。更多项目请参阅 [Recipe](https://community.seeedstudio.com/discover.html?t=Grove) 或 [Instructables](https://www.instructables.com/howto/Grove/)。

|自动浇水|物联网罐通知器|魔法镜|
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/planting.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/notifier.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Magic_mirror.png)|
|[立即制作！](https://www.instructables.com/id/Automated-Watering-of-Potted-Plants-with-Intel-Edi/)|[立即制作！](https://www.instructables.com/id/IoT-Jar-Chandelier-Physical-Gmail-Twitter-Facebook/)|[立即制作！](https://www.instructables.com/id/Magic-Mirror-Mini-Android-Powered/)|

|疯狂毛毛虫|语音控制红外遥控器|植物浇水设备|
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Crazy_Caterpiller.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Learnable_IR_Remote.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/6.jpg)|
|[立即制作！](https://www.instructables.com/id/Crazy-Caterpillar-an-Arduino-Robot/)|[立即制作！](https://www.instructables.com/id/Make-a-Voice-Control-IR-Remote-Controller-by-Ardui/)|[立即制作！](https://www.instructables.com/id/DIY-an-Automatic-Plant-Watering-Device/)|

|Wi-Fi 音箱|DIY 玩具车|温控 USB 风扇|
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/7.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/8.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Temperature_controlled_fan.png)|
|[立即制作！](https://www.instructables.com/id/DIY-a-Wi-Fi-Speaker/)|[立即制作！](https://www.instructables.com/id/Make-a-mini-toy-car-with-Arduino/)|[立即制作！](https://www.instructables.com/id/Temperature-controlled-USB-fan-MilCandy/)|

|Pokemon Go 安全徽章|LED 粘土装饰|生活质量计|
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/10.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/LED_Clay_Ornament.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/12.jpg)|
|[立即制作！](https://www.instructables.com/id/5-Minutes-to-DIY-Your-Own-Pokemon-Go-SAFETY-BADGE/)|[立即制作！](https://www.instructables.com/id/LED-Clay-Ornament/)|[立即制作！](https://www.instructables.com/id/Quality-of-Life-Meter-Mk2-Smarter-and-Connected/)|

|Grove 简易温度计|更人性化的湿度传感器|PI 游戏盒|
|------------------|--------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/Grove_Minimal_Thermometer.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/More_Humane_Moisture_Sensor.png)|![enter image description here](https://files.seeedstudio.com/wiki/GroveSystem/project_images/15.jpg)|
|[立即制作！](https://www.instructables.com/id/Grove-Minimal-Thermometer/)|[立即制作！](https://www.instructables.com/id/More-Humane-Moisture-sensor/)|[立即制作！](https://www.instructables.com/id/DIY-a-Raspberry-Game-2048/)|

## <span id="jump11">更多关于Grove生态系统的知识</span>

以下信息由Seeed Studio提供，可能已经过时。如果需要更新，我们欢迎社区提供更新内容！

有关如何贡献的更多信息，请点击<strong><a href="/cn/Contributor"><span><font color={'8DC215'} size={"4"}>这里！</font></span></a></strong>

### Grove模块的接口

您可能注意到Grove电缆有4种不同的颜色。

* **Pin 1** - 黄色（例如，I2C Grove连接器上的SCL）
* **Pin 2** - 白色（例如，I2C Grove连接器上的SDA）
* **Pin 3** - 红色 - 所有Grove连接器上的VCC
* **Pin 4** - 黑色 - 所有Grove连接器上的GND

Grove模块主要有4种接口类型。

#### Grove数字接口

数字Grove连接器由进入Grove插头的标准四条线组成。两条信号线通常称为D0和D1。大多数模块只使用D0，但有些模块（例如LED条Grove显示模块）会同时使用两条信号线。通常，基板上的第一个连接器称为D0，第二个称为D1，它们会按D0/D1和D1/D2等方式连接。

Grove数字模块的示例包括：**开关模块**、**风扇模块**和**LED模块**。在图8中，您可以看到LEDGrove模块的原理图中的Grove连接器。它们的复杂程度可以从简单到非常复杂。

|引脚|功能  | 备注   |
|--------|------|-----|
|pin1	| Dn   | 主要数字输入/输出 |
|pin2   | Dn+1 | 次要数字输入/输出|
|pin3   | VCC  | Grove模块的电源，5V/3.3V|
|pin4	| GND  | 地线 |

#### Grove模拟接口

Grove模拟连接器由进入Grove插头的标准四条线组成。两条信号线通常称为A0和A1。大多数模块只使用A0。通常，基板上的第一个连接器称为A0，第二个称为A1，它们会按A0/A1和A1/A2等方式连接。

|引脚|功能  | 备注   |
|--------|------|-----|
|pin1	| An | 主要模拟输入 |
|pin2   | An+1| 次要模拟输入|
|pin3   | VCC  | Grove模块的电源，5V/3.3V|
|pin4	| GND  | 地线 |

#### Grove UART接口

Grove UART模块是Grove数字模块的一个特殊版本。它使用Pin 1和Pin 2进行串行输入和传输。Grove UART插头是从基板的角度标记的。换句话说，Pin 1是RX线（基板用于接收数据，因此是输入），Pin 2是TX线（基板用于向Grove模块传输数据）。

|引脚|功能  | 备注   |
|--------|------|-----|
|pin1	| RX | 串行接收 |
|pin2   | TX| 串行传输|
|pin3   | VCC  | Grove模块的电源，5V/3.3V|
|pin4	| GND  | 地线 |

#### Grove I2C接口

长期阅读本博客的读者知道，我们最喜欢的设备是I2C传感器。市场上有许多类型的I2C Grove传感器。大多数是5V/3.3V设备，但也有一些仅支持3.3V或5.0V。您需要检查规格。

Grove I2C连接器具有标准布局。Pin 1是SCL信号，Pin 2是SDA信号。电源和地线与其他连接器相同。这是Grove数字连接器的另一个特殊版本。实际上，控制器（如ESP8266、Raspberry Pi和Arduino）上的I2C总线通常使用数字I/O引脚来实现I2C总线。Raspberry Pi和Arduino上的引脚具有硬件支持I2C总线的功能。

|引脚|功能  | 备注   |
|--------|------|-----|
|pin1	| SCL | I2C时钟 |
|pin2   | SDA| I2C数据|
|pin3   | VCC  | Grove模块的电源，5V/3.3V|
|pin4	| GND  | 地线 |

### Grove的尺寸

Grove板有5种尺寸可供选择。

| 1X1 | 1X2 | 1X3 | 2X2 | 2X3 |
|---|-----|------|-----|----|
|20x20mm|20x40mm|20x60mm|40x40mm|40x60mm|
|![输入图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/size1x1.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/size1x2.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/size1x3.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/size2x2.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/size2x3.jpg)|

以下是尺寸说明。

- Grove 20X20 DIP: 

![](https://files.seeedstudio.com/wiki/GroveSystem/images/20_20dip.png)

- Grove 20X20 SMD水平: 

![](https://files.seeedstudio.com/wiki/GroveSystem/images/20_20smd_horizontal.png)

- Grove 20X20 SMD垂直: 

![](https://files.seeedstudio.com/wiki/GroveSystem/images/20_20smd_vertical.png)

- Grove 20X40 DIP: 

![](https://files.seeedstudio.com/wiki/GroveSystem/images/40_40dip.png)

- Grove 20X40 SMD水平: 

![](https://files.seeedstudio.com/wiki/GroveSystem/images/40_40smd_horizontal.png)

- Grove 20X40 SMD垂直: 

![](https://files.seeedstudio.com/wiki/GroveSystem/images/40_40smd_vertical.png)

有关详细的机械图纸，请参考[Grove机械图纸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove_Mechnical_Drawing.zip)。

## 选择你的 Grove

需要一些 Grove 模块来完成你的项目吗？以下是一些推荐，更多产品请参考 [Bazaar](https://www.seeedstudio.com/) 或 [Bazaar-Grove](https://www.seeedstudio.com/catalogsearch/result/?q=Grove)。

### Grove 基础输入和输出

| Grove - LED | Grove - 旋转角度传感器 | Grove - 按钮(P) |
|-----------|--------------------------|----------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/45d_small.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/101020017.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Button/image/Button_p_s.png)|
| [更多详情](https://www.seeedstudio.com/Grove-Red-LED.html) | [更多详情](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html) | [更多详情](https://www.seeedstudio.com/Grove-Button-P.html) |

| Grove - 微型开关 | Grove - 编码器 | Grove - I2C 触摸传感器 |
|-----------|--------------------------|----------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/small.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/basic_5.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/45d_small.jpg)|
| [更多详情](https://www.seeedstudio.com/Grove-Micro-Switch.html) | [更多详情](https://www.seeedstudio.com/Grove-Encoder-p-1352.html) | [更多详情](https://www.seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html) |

### Grove 显示模块

| OLED 显示屏 0.96" (SSD1315) | OLED 显示屏 1.12" V2 | 三色电子墨水显示屏 2.13" |
|-----------|--------------------------|----------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/45d_small.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/thumbnail.jpg)|
| [更多详情](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) | [更多详情](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html) | [更多详情](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html) |

| 三色电子墨水显示屏 1.54" | 0.54 红色双字母数字显示屏 | 四位数字显示屏 |
|-----------|--------------------------|----------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front-s.png)|![图片描述](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/Thumbnail.png)|
| [更多详情](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html) | [更多详情](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) | [更多详情](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |

### Grove 运动检测模块

| 单轴模拟加速度计 | 数字加速度计(±400g) | 三轴数字陀螺仪 |
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-Single-Axis-Analog-Accelerometer-100g-ADXL1001/img/Grove---Single-Axis-Analog-Accelerometer-100g-ADXL1001-thumbnail.png)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_2.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_3.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove-Single-Axis-Analog-Accelerometer-100g-ADXL1001-p-4035.html)|[更多详情](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|[更多详情](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|

| 三轴数字指南针 | 三轴数字指南针 V2 | 三轴模拟加速度计 |
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_6.JPG)|
|[更多详情](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|[更多详情](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html)|[更多详情](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html)|

| 三轴数字加速度计(±16g) | 六轴加速度计&指南针 v2.0 | 六轴加速度计&陀螺仪 |
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_7.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_8.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/motion_9.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B116g)-p-1156.html)|[更多详情](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)|[更多详情](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-p-2606.html)|

### Grove 通信模块

| Uart Wifi V2 | 433MHz 简单 RF 链接套件 | 125KHz RFID 读卡器 |
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_2.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_5.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove-UART-WiFi-V2-ESP8285.html)|[更多详情](https://www.seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html)|[更多详情](https://www.seeedstudio.com/Grove-125KHz-RFID-Reader-p-1008.html)|

|BLE|BLE（双模）|BLE Shield|
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_6.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_7.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/small.png)|
|[更多详情](https://www.seeedstudio.com/Grove-BLE-p-1929.html)|[更多详情](https://www.seeedstudio.com/Grove-BLE-(dual-model)-p-2407.html)|[更多详情](https://www.seeedstudio.com/Seeed-Blueseeed-Shield-HM11.html)|

|NFC天线|Grove - NFC|Grove - NFC标签|
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_7.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_8.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/comu_9.jpg)|
|[更多详情](https://www.seeedstudio.com/NFC-Antenna-p-1805.html)|[更多详情](https://www.seeedstudio.com/Grove-NFC-p-1804.html)|[更多详情](https://www.seeedstudio.com/Grove-NFC-Tag-p-1866.html)|

### Grove 环境传感器

|CO2&温度&湿度传感器|多通道气体传感器v2|温度&湿度&气压传感器|
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/env_3.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|[更多详情](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)|[更多详情](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

|圆形力传感器|空气质量传感器v1.3|气体传感器（O2）|
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/thumbnail.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_Air_Quality_Sensor_small.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/env_6.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR402.html)|[更多详情](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)|[更多详情](https://www.seeedstudio.com/Grove-Gas-Sensor(O2)-p-1541.html)|

|粉尘传感器|湿度传感器|集成压力传感器套件|
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/env_7.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/env_8.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-thumbnail.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|[更多详情](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|[更多详情](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)|

### Grove 机器人模块

|I2C迷你电机驱动|I2C电机驱动|Grove - 舵机|
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_2.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_3.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)|[更多详情](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)|[更多详情](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

|线路探测器v1.1|超声波测距仪|80cm红外接近传感器|
|--------------------------|---------------------------|-----------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_5.jpg)|![图片描述](https://files.seeedstudio.com/wiki/GroveSystem/images/robot_6.jpg)|
|[更多详情](https://www.seeedstudio.com/Grove-Line-Finder-v1-1.html)|[更多详情](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|[更多详情](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)|

## <span id="jump12"> Grove 资源 </span>

【**ZIP**】[Grove 机械图纸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove_Mechnical_Drawing.zip)

【**ZIP**】[Grove 20X20 DIP 尺寸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x20-Plug-vertical.zip)

【**ZIP**】[Grove 20X40 DIP 尺寸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x40-Plug-vertical.zip)

【**ZIP**】[Grove 20X20 SMD 垂直尺寸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x20-SMD-vertical.zip)

【**ZIP**】[Grove 20X40 SMD 垂直尺寸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x40-SMD-vertical.zip)

【**ZIP**】[Grove 20X20 SMD 水平尺寸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove20x20-SMD-horizontal.zip)

【**ZIP**】[Grove 20X40 SMD 水平尺寸](https://files.seeedstudio.com/wiki/GroveSystem/res/Grove-20x40-SMD-horizontal.zip)

## <span id="jump13"> 技术支持与产品讨论 </span>

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>