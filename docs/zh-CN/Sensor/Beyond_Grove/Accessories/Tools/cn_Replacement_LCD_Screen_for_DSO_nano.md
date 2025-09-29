---
title: DSO nano 替换 LCD 屏幕
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Replacement_LCD_Screen_for_DSO_nano/
slug: /cn/Replacement_LCD_Screen_for_DSO_nano
last_update:
  date: 02/03/2022
  author: gunengyu
---

![https://www.seeedstudio.com/depot/images/product/P1230020.jpg](http://bz.seeedstudio.com/depot/images/product/P1230020.jpg)

DSO nano 替换 LCD 屏幕，如果您损坏了 DSO 的原装屏幕，可以购买此屏幕进行替换。请注意，安装此 LCD 屏幕需要具备基本的焊接技能。

## 使用方法

### 硬件安装

#### 拆解您的 DSO nano

拆解 DSO nano 非常简单，但仍然值得写一篇教程，让大家在拆解之前了解 DSO nano 的内部结构。

<font color="red">
<strong>注意：</strong>
本教程仅供参考，拆解 DSO nano 并按照本教程操作需自行承担风险！
</font>

**您需要准备：**

1. 一把锋利的刀（或其他锋利工具）

2. 一把 1.4mm 螺丝刀

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230049.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230049.jpg)

首先，您需要使用锋利的刀移除顶部面板。顶部面板通过胶水与机身连接，务必慢慢操作，否则可能会损坏亚克力面板。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/123.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/123.jpg)

移除顶部面板后，您可以看到 6 个螺丝（用白色圆圈标记）。使用 1.4mm 螺丝刀将它们移除，然后进入下一步。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230039.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230039.jpg)
![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230043-300x225.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230043-300x225.jpg)

移除剩下的 2 个螺丝，现在您应该可以将子板与主板分离。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230031-300x225.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230031-300x225.jpg)
![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230028-300x225.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230028-300x225.jpg)

子板详细图片。顶部焊接了 6 个金属圆顶按钮，底部有一个 3.5MM TRS 接口和一个 Mini USB 接口。此外，还有一个板对板连接器用于连接两个分离的 PCB。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230019.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230019.jpg)

现在，您可以将屏幕和主板从外壳中取出。

![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230020.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/P1230020.jpg)
![https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/dsoboard2%E5%89%AF%E6%9C%AC.jpg](https://www.seeedstudio.com/blog/wp-content/uploads/2009/12/dsoboard2%E5%89%AF%E6%9C%AC.jpg)

1. 控制器：STM32

2. 稳压电源：3.3V 电压输出

3. 稳压电源：3.0V 电压输出

4. 稳压电源：使用 P3232 RS-232 收发器输出 +5V 和 -5V 电压

5. 通用双 J-FET 运算放大器：用于分离和缩放输入信号

6. 8 通道模拟多路复用器：为不同的 V/div 更改匹配通道

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>