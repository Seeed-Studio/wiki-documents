---
description: Grove - 环形 LED
title: Grove - 环形 LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Circular_LED
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg" alt="pir" width={600} height="auto" /></p>

这是一个独特的环形模块——它拥有一个华丽的外观，配备24个可控LED。也许它会激发你的灵感，制作一个发光的魔法环！该模块中间有一个1*1的方形镂空，可以放置一个Grove编码器，将其变成一个旋转视觉编码器！

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)

## 特性
---
* 环形设计
* 24个LED，每个通道约5.5mA驱动电流
* 可控LED，具有华丽的效果
* Grove接口

## 原理图
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg" alt="pir" width={600} height="auto" /></p>

## 规格
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col"> 项目</th>
<th scope="col"> 最小值</th>
<th scope="col"> 典型值</th>
<th scope="col"> 最大值</th>
<th scope="col"> 单位</th>
</tr>
<tr>
<th scope="row"> 电压</th>
<td> 4.5</td>
<td> 5</td>
<td> 5.5</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> 电流</th>
<td> /</td>
<td> 每个LED 5.5</td>
<td></td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> 尺寸</th>
<td colspan="3"> 环形：直径4.5</td>
<td> cm</td>
</tr>
<tr>
<th scope="row"> 净重</th>
<td colspan="3"> 12</td>
<td> g</td>
</tr>
</table>

## 接口
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg" alt="pir" width={600} height="auto" /></p>

## 入门指南

**所需材料**

| Seeeduino V4.2 | Base Shield |Grove - 环形 LED|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_S.jpg" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|

>此外，你可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于Seeeduino V4.2和Base Shield的组合。

:::note
**1** 请轻轻插入USB线，否则可能会损坏接口。请使用内部有4根线的USB线，只有2根线的USB线无法传输数据。如果你不确定自己拥有的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果你丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

### 硬件连接

- **步骤1.** 将Grove - 环形 LED连接到Base Shield的**D6**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 使用USB线将Seeeduino连接到PC。

:::note
如果没有Grove Base Shield，我们也可以直接将Grove - 环形 LED连接到Seeeduino，如下所示。
:::
| Seeeduino       | Grove - 环形 LED |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| D7            | 白色                   |
| D6            | 黄色                   |

### 软件

:::note
如果这是你第一次使用Arduino，我们强烈建议你在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::
- **步骤1.** 从Github下载[Grove - LED Bar库](https://github.com/Seeed-Studio/Grove_LED_Bar)。
- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。
- **步骤3.** 打开 **Arduino IDE -> File -> Examples -> Grove_LED_Bar -> BasicControl**。
- **步骤4.** 取消注释 **define MY9221_LED_NUM 24** 并注释 **#define MY9221_LED_NUM 10**，如下所示。

```
//#define MY9221_LED_NUM 10
#define MY9221_LED_NUM 24
```

- **步骤5.** 将示例代码上传到Arduino。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
- **步骤6.** 你可以看到LED从.C、23和AB重复运行。

### 使用Codecraft编程

#### 硬件

**步骤1.** 将Grove - 环形 LED连接到Base Shield的D5端口。

**步骤2.** 将Base Shield插入你的Seeeduino/Arduino。

**步骤3.** 使用USB线将Seeeduino/Arduino连接到PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区。

:::note
如果这是你第一次使用Codecraft，请查看[Codecraft使用Arduino指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤2.** 按下图拖动代码块或打开页面底部提供的cdc文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的 Arduino/Seeeduino。

:::success
    当代码上传完成后，您将看到 LED 以圆形方式运行。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   资源
---
- [CircularLED 库](https://github.com/Seeed-Studio/Grove_LED_Bar)

- [Grove Circular LED 原理图 PDF 文件](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Circular_LED_v0.9b.pdf)

- [Grove-Circular LED Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip)

- [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove_Circular_LED_CDC_File.zip)

## 技术支持与产品讨论
感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>