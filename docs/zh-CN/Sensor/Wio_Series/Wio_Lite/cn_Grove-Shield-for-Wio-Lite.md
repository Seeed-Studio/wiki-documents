---
title: Grove-Shield-for-Wio-Lite
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Shield-for-Wio-Lite/
slug: /cn/Grove-Shield-for-Wio-Lite
last_update:
  date: 01/11/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-wiki.jpg)

Grove Shield for Wio Lite 是为 Seeed Studio Wio Lite 系列设计的。目前 Wio Lite W600 已经上市，我们很快会发布更多 Wio 开发板。此外，这款 Grove Shield 也可以与 Adafruit Feather 开发板配合使用。它为 Wio Lite 和 Feather 社区带来了 200+ Grove 模块。


这款 Shield 可以将 Wio Lite 的处理器引脚（例如，Wio Lite W600 的 SAM D21）以排针和 Grove 连接器的形式引出。它有 4 个 Grove 数字连接器和 4 个 Grove 模拟连接器，一个 Grove UART 端口，以及一个 Grove I2C 端口。


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## 规格参数

| 参数             | 数值/范围    |
|-----------------------|----------------|
| 工作电压     | 3.3 / 5V       |
| 工作温度 | -25℃ to +85℃ |
| 模拟端口          | 4              |
| 数字端口         | 4              |
| UART 端口            | 1              |
| I2C 端口             | 1              |
| 尺寸                  | 60mm x52mm     |


## 兼容开发板

Base Shield 已经过测试，完全兼容以下开发板：

- [Wio Lite - W600](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
- [Wio Lite - MG126](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- 基于Adafruit SAMD21的Feather板


这款开发板在外形上也与其他 Adafruit Feather 开发板兼容。当您将此 shield 与那些 Adafruit Feather 开发板一起使用时，请匹配引脚编号。


## 硬件概述


![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0.jpg)


- **模拟端口**: 包括 4 个模拟端口，5 个模拟引脚
 
>A0 端口包括 A0 和 A1 引脚 

>A1 端口包括 A1 和 A2 引脚 

>A2 端口包括 A2 和 A3 引脚 

>A3 端口包括 A3 和 A4 引脚

- **数字端口**: 包括 4 个数字端口，5 个数字引脚
 
>D5 端口包括 D5 和 D6 引脚 

>D6 端口包括 D6 和 D9 引脚 

>D9 端口包括 D9 和 D10 引脚 

>D10 端口包括 D10 和 D11 引脚

:::caution
        由于相邻端口包含相同的引脚，例如，端口 A0 和端口 A1 都有 A1 引脚，在同时使用相邻端口时要小心不要产生引脚冲突。例如，如果模块 X 使用 A0 端口的 A1 引脚，那么您就不应该将 A1 端口的 A1 引脚用于另一个模块。
:::

- **UART 端口**: 1 个 UART 端口。

- **I2C 端口**: 1 个 I2C 端口。

- **电源开关**: 如果您使用 USB Type C 为 Wio Lite 开发板供电，请选择 5V 模式，如果您使用锂电池，请选择 3.3V 模式。


### 引脚图

关于引脚图，请参考此 shield 背面的丝印。

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/wiki-pinout.jpg)


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[ZIP]** [Grove Shield for Wio Lite 原理图文件](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip)


## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>