---
description: Arduino 原型扩展板套件
title: Arduino 原型扩展板套件

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Protoshield_Kit_for_Arduino
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/ProtoShield.jpg" alt="pir" width={600} height="auto" /></p>

使用紧凑灵活的原型扩展板套件构建您自己的 Arduino 扩展板。焊接各种无限可能的电路，并在您的所有 Arduino 项目中重复使用。标准 0.1" 原型网格可接受常用的通孔元件和芯片。套件包含基本元件（电阻、电位器、LED、开关），帮助您开始制作自定义扩展板。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Protoshield-Kit-for-Arduino-p-318.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

##   特性
---
*   兼容 Arduino

*   大面积 0.1 英寸间距原型区域

*   多种通孔尺寸，适合大多数元件

*   Arduino UART 和 I2C 端口引脚引出，便于外部通信接口

*   双 ISP 引出，便于编程和堆叠

*   3.3 伏、5 伏和地电源轨在板上任何地方都可轻松获得

*   面包板风格的原型区域

*   USB B 型连接器

*   包含基本元件（按钮、开关、LED、电阻、USB 插座）


##  套件包含的元件
---
*   1 个 Arduino 兼容原型板

*   1 个 B 型 USB 连接器

*   1 个 40 针 2.54mm 公长排针

*   1 个 40 针 2.54mm 母排针

*   2 个 40 针 2.54mm 公排针

*   1 个 40 针 2.54mm 间隔柱

*   3 个 8 针 2.54mm 母排针

*   1 个 6 针 2.54mm 母排针

*   1 个 ISP 母排针

*   1 个 ISP 公排针

*   1 个 10k 欧姆电位器

*   4 个 1k 欧姆电阻

*   2 个 10k 欧姆电阻

*   2 个 3mm 红色 LED

*   2 个 3mm 绿色 LED

*   1 个 3mm 双色 LED

*   4 个迷你按钮开关

*   2 个 DPDT 开关

##  板子走线原理图
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/ProtoShield_Kit.png" alt="pir" width={600} height="auto" /></p>

##  组装

**步骤 1：** 将红色 LED 焊接到电源插座轮廓中的孔上。确保 LED 的平面与板上的轮廓匹配。将绿色 LED 焊接到板上 pin13 轮廓中的孔上，同样，将 LED 的平面与板轮廓匹配。将两个 1K 电阻焊接到 R1 和 R2。按照下图焊接复位按钮和 ISP 排针。注意：如果在插入 ISP 排针之前先插入复位按钮，会更容易安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step1.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 2：** 焊接母排针和公排针。注意：**仅当**您使用 [Seeeduino](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;zenid=15c0e10e2d81d5481f863ae4eaaf7ca1&amp;keyword=seeeduino&amp;x=0&amp;y=0) 时才焊接 ADC6 和 ADC7。使用 Arduino 时，**不要**焊接 ADC6 和 ADC7。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step2.jpg" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step22.jpg" alt="pir" width={600} height="auto" /></p>


**步骤 3：** 将 USB 连接器焊接到 USB 端口，将电位器焊接到 80 mil 孔中。根据您的项目需要焊接左下角的电源引脚。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/img/Step3.jpg" alt="pir" width={600} height="auto" /></p>

您完成的套件应该看起来与上图类似。


##   资源
---
*   [源文件](https://files.seeedstudio.com/wiki/Protoshield_Kit_for_Arduino/res/ProtoShield.brd)

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