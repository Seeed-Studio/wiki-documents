---
description: 如何检测手指触摸
title: 如何检测手指触摸

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_to_detect_finger_touch
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---
<!-- ---
name: How to detect finger touch
category: Tutorial
bzurl:
oldwikiname: How to detect finger touch
prodimagename:  
surveyurl: https://www.research.net/r/How_to_detect_finger_touch
sku:
--- -->

## 如何测量电容

完整的电容测量系统由连接到MPR121感应输入的感应电极焊盘组成，MPR121通过I2C总线和中断输出与主处理器通信。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-1.jpg)

每个感应通道上测量的电容是对地的总电容，可以是对地背景寄生电容(Cb)和手指触摸引起的对地电容(Cx)的组合。MPR121使用恒定直流充电电流方案进行电容测量。每个通道都会周期性地充电然后完全放电到地，以测量电容。所有通道都是顺序测量的，当一个通道处于充电/放电和测量期间时，其他通道都短接到地。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/500px-2.jpg)

施加的电荷量(Q)可通过设置充电电流(I)和充电时间(T)进行编程。一旦电极充电，充电结束时的峰值电压(V)由内部10位ADC测量。该电压V与感应通道上的电容(C)成反比。

```
 C = Q/V = (I*T)/V
```

也就是说，如果用某个电流值(I)和时间(T)对外部电容充电，并得到电压(V)，我们就可以得到电容值，使用这种方法，可以计算出C的可测量范围。

## 如何进行触摸感应

ADC原始数据输出经过3级数字滤波，以滤除遇到的高频和低频噪声。第一级滤波器是简单的移动平均滤波器，第二级滤波器结果是10位的，存储在输出数据寄存器中作为每个感应输入的即时电容，第三级滤波器结果是使用第二级滤波器输出的信号变化的更低频率内容，主要用作基线值，表示长期和缓慢环境变化（如大气湿度和污垢）的电容变化，用于触摸检测。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-3.jpg)

触摸和释放是通过比较即时电容偏差来确定的，即电极第二级滤波输出数据相对于基线值的偏差。如果偏差超过设定阈值，则检测到触摸或释放状态并在状态寄存器中报告。触摸和释放阈值是独立的，每个电极都可以单独编程，提供滞后和电极独立性。去抖动设置可用于进一步的噪声滤波，以提供无毛刺的触摸和释放检测。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-4.jpg)

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