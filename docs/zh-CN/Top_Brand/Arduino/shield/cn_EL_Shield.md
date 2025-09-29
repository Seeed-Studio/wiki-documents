---
description: EL Shield
title: EL Shield
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/EL_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: EL Shield
category: Shield
bzurl: https://seeedstudio.com/EL-Shield-p-1287.html
oldwikiname: EL_Shield
prodimagename: EL_Shield_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/104030000 1.jpg
surveyurl: https://www.research.net/r/EL_Shield
sku: 104030000
--- -->

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_02.jpg)

这个扩展板用于控制EL设备。它可以同时控制4个EL设备。控制方法就像控制LED一样简单。通过PWM驱动，它可以通过简单的程序控制每根EL线，创造出丰富多彩的效果。结合我们的EL逆变器，它可以驱动长达15米的EL线，为您的设计提供无限可能。此外，扩展板覆盖有亚克力板，增强了用户的安全性。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/el-shield-p-1287.html)

规格参数
--------------

- 工作电压：5V
- 逆变器接口：JST 2.0
- 控制通道接口：2P - 2.5SM插座

硬件概述
---------

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_interface.jpg)

演示
-------------

这里是一个简单的演示，涉及EL扩展板、4条EL胶带和EL扩展板附带的定制逆变器。
按照下图连接所有设备。

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_Hardware_Installation.jpg)

将下面的代码上传到您的微控制器。

```
// EL测试代码
 
void setup(){
 for(int i = 4; i<8; i++)
 {
  pinMode(i, OUTPUT);
 }
}
 
void setEL(int ch) // 设置某个EL开启
{
 for(int i = 4; i<8; i++) // 全部关闭
 digitalWrite(i, LOW);
 digitalWrite(ch+3, HIGH); // ch开启
}
 
int count = 0;
 
void loop()
{
 setEL(count%4 + 1);
 delay(200);
 if(count++ == 1000)
 {
  count = 0;
 }
}
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [EL Shield eagle文件](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip)
- [EL Shield Arduino 1.0源代码文件](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Test_code.zip)
- [BT134W-600D数据手册](https://files.seeedstudio.com/wiki/EL_Shield/res/BT134W-600D.pdf)
- [MOC 3063数据手册](https://files.seeedstudio.com/wiki/EL_Shield/res/MOC3063M.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/EL_Shield -->

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