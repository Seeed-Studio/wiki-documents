---
description: Renbotics_ServoShield_Rev
title: Renbotics 舵机扩展板 Rev

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Renbotics_ServoShield_Rev
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/h/t/httpsstatics3.seeedstudio.comimagesproductservoshieldkitlarge.jpg" alt="pir" width={600} height="auto" /></p>

Renbotics 舵机扩展板是一款兼容 Arduino 的扩展板，使用两个 4017 十进制计数器，仅使用 4 个引脚（数字引脚 6 到 9）就能驱动多达 16 个舵机，在标准模式下只需一个 8 位定时器（定时器 2），在高精度模式下需要两个 16/8 位定时器（Duemilanove 使用定时器 1 和定时器 2，或 Mega 使用定时器 3）。它还包含一个 196 点面包板式原型制作区域。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

* 16 个舵机通道

* 便捷的舵机电源供应螺丝端子

* 196 点面包板式原型制作区域

* 兼容 Arduino Duemilanove 和 Arduino Mega

* 易于使用的 API

## 应用创意

* 机器人技术

* 电子动画

* 机电艺术

## 使用方法

### 硬件安装

组装视图：

<p style={{textAlign: 'center'}}><img src="http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg" alt="pir" width={600} height="auto" /></p>

### 编程

**示例 1：简单舵机扫描器**

```cpp
#include <ServoShield.h>
ServoShield servos; //创建一个 ServoShield 对象
void setup()
{
    for (int servo = 0; servo < 16; servo++)//初始化所有 16 个舵机
    {
        servos.setbounds(servo, 1000, 2000); //设置最小和最大脉冲持续时间
        servos.setposition(servo, 1500); //设置舵机的初始位置
    }
    servos.start(); //启动舵机扩展板
}
void loop()
{
    for(int pos = 1000; pos < 2000; pos++) //将舵机从 0 度移动到 180 度
    { //以 1 度为步长
        for (int i = 0; i < 16; i++) //对所有 16 个舵机
        servos.setposition(i, pos); //告诉舵机移动到变量 'pos' 中的位置
        delay(1);
    }
    for(int pos = 2000; pos >= 1000; pos--)//将舵机从 180 度移动到 0 度
    {
        for (int i = 0; i < 16; i++) //所有 16 个舵机
        servos.setposition(i, pos); //告诉舵机移动到变量 'pos' 中的位置
        delay(1);
    }
}
```

## 物料清单 (BOM) /零件清单

* 2 x 4017 十进制计数器 DIP16

* 2 x 10nf 电容器

* 2 x 6 针母排扩展板堆叠接头

* 2 x 8 针母排扩展板堆叠接头

* 1 x 2 针螺丝端子

* 3 x 16 针公排分离式接头

## 版本跟踪

| 版本 | 描述 | 发布日期 |
|------|------|----------|
| v1.1 | 初始公开发布 | 2009年8月23日 |

## 资源

* [手册 Rev 1.5](https://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf)

* [Arduino 库 Rev 1.3（更新于 2009-07-09）](https://www.seeedstudio.com/depot/images/product/ServoShield.zip)

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