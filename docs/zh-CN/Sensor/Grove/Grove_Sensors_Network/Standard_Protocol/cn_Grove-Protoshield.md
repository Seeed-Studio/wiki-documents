---
title: Grove - 原型扩展板
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Protoshield.md/
slug: /cn/Grove-Protoshield
last_update:
  date: 01/06/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proto1.jpg)

这个Grove模块允许您在Grove系统原型中添加自己的电路或组件。它让您可以访问Grove连接器电缆的所有四条线路 - S0、S1、VCC和GND。还有一个为常开按钮预留的空间。标准的2.54mm间距使得在板上安装普通DIP格式的IC和其他组件变得容易。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Protoshield-p-772.html)

## 特性

---

* 标准化Grove接口
* 面包板风格
* 标准间距
* 丝印标签
* 为常开按钮预留空间

## 接口

---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Grove-Protoshield_Interface_1.jpg)

Grove接口的VCC和GND如上图所示被引出为两条总线。您可以在两条电源总线之间找到Sig0和Sig1的焊接焊盘。

## 使用方法

---
Grove接口的VCC和GND如上图所示被引出为两条总线。您可以在两条电源总线之间找到Sig0和Sig1的焊接焊盘。它们用白线标记出来。
右侧的方形区域用于放置常见的临时按钮，您可以轻松地将其卡入其中，如下所示。

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield1.jpg)

原型扩展板还配有两个20针公头。当您需要在其他面包板或原型板上进行扩展时，可以将它们掰成小段并焊接到原型扩展板上。它们与普通面包板跳线配合良好。

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield2.jpg)

**演示：点亮LED**

1. 将LED的长引脚插入VCC接口，短引脚插入Sig0接口。

2. 将LED焊接在原型扩展板上。

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proshield3.jpg)

3. 使用4针Grove电缆将模块连接到Grove - 基础扩展板的数字8端口。

4. 将Grove - 基础扩展板插入Arduino，并使用USB电缆将Arduino连接到PC。

5. 复制并粘贴下面的代码到新的Arduino草图中。如果您不知道如何上传，请点击[这里](https://wiki.seeedstudio.com/cn/Upload_Code)。

```
演示代码：
int led = 8;

// setup例程在按下复位键时运行一次：
void setup() {
    // 将数字引脚初始化为输出。
    pinMode(led, OUTPUT);
}

// loop例程会永远重复运行：
void loop() {
    digitalWrite(led, HIGH);   // 点亮LED（HIGH是电压电平）
    delay(1000);               // 等待一秒
    digitalWrite(led, LOW);    // 通过设置电压为LOW来关闭LED
    delay(1000);               // 等待一秒
}
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---
* [Grove_-_Protoshield Eagle文件](https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip)

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