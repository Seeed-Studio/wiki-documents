---
description: Grove Shield for Intel Joule
title: Grove Shield for Intel Joule
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Shield_for_Intel_Joule
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/1.jpg)

在 2016 年的英特尔开发者论坛上，英特尔宣布推出 Joule 模块，这是一款基于 Linux 的模块化系统，提供高计算能力、RAM 和存储。这款 Grove 扩展板将 Grove 模块系列引入强大的 Intel JouleTM，旨在帮助发明家和物联网开发者更方便、更快速地创建他们的项目。

只需将其插入 Joule 板上，您就可以立即拥有 8 个稳定且易于使用的 Grove 接口，包括 I2C、UART、数字 I/O 和模拟输入接口。除了丰富的 Grove 接口外，扩展板还保留了 2x20 针排针，以便您在项目中需要更多 GPIO 时使用。板上的集成开关允许您选择工作电压为 5V 或 3.3V。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Shield-for-Intel-Joule-p-2782.html)

## 特性

- 接口：8 个 Grove 接口

- 即插即用

- 接口详情：I2C x 3，UART x 1，数字 x 2，模拟 x 2

- 工作电压：5V/3.3V

- 带有选择工作电压的开关

- 4 通道模拟接口，分辨率：12 位

- 工作温度：-40 - 85℃

- 尺寸：84.9*51.7mm

## 硬件概览

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/Grove%20Shield%20for%20intel%20Joule%20Pin.png)

- Grove 模拟端口：⑥/⑨

- Grove 数字端口：⑧/⑩

- Grove UART 端口：⑦

- Grove I2C 端口：③/④/⑤

- [Intel Joule 的 Breakout 1 / J12：①](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- [Intel Joule 的 Breakout 2 / J13：②](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- 3.3V & 5V 电源开关：⑪

### 引脚对引脚图示
|Grove 扩展板连接器/引脚|SOC（原理图）信号|TuChuck连接器/引脚|
|:---:|:---:|:---:|
|J1|Breakout1|J12|
|J2|Breakout2|J13|
|J3-1|I2C_0_SCL_H|J12-13|
|J3-2|I2C_0_SDA_H|J12-11|
|J4-1|I2C_1_SCL_H|J13-33|
|J4-2|I2C_1_SDA_H|J13-31|
|J5-1|I2C_2_SCL_H|J13-37|
|J5-2|I2C_2_SDA_H|J13-35|
|J6-1|AIN2|/|
|J6-2|AIN3|/|
|J7-1|UART_0_TXD|J12-7|
|J7-2|UART_0_RXD|J13-28|
|J8-1|Digital_1_PWM_0|J12-26|
|J8-2|Digital_1_PWM_1|J12-28|
|J9-1|AIN0|/|
|J9-2|AIN01|/|
|J10-1|Digital_2_PWM_2|J12-30|
|J10-2|Digital_2_PWM_3|J12-32|


:::note
    * 插入扩展板时请注意方向。
    * Libmraa 暂时不支持 Joule 的 UART 引脚，因此 UART 接口不可用。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

* [Grove Shield for Intel Joule 原理图文件](https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>