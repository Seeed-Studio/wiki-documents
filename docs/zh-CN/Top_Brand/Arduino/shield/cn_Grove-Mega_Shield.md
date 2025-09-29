---
description: Grove-Mega_Shield
title: Grove-Mega Shield

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Mega_Shield
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/500px-Megashieldn1_03.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mega Shield 是 Arduino Mega 和 Google ADK 的扩展板。我们将所有连接器标准化为 4 针（信号 1、信号 2、VCC 和 GND）2mm 连接器，并保留一些 3 针（信号、VCC 和 GND）2.54mm 排针用于舵机和电子积木，这简化了电子项目的接线。4 针扣式连接器也使接线情况更加稳定。Mega Shield 包括数字 0 - 21 和模拟 0 - 15；我们放弃了数字 22 - 53，以便于将 Mega Shield 与 Xduino Mega/Google ADK 轻松安装。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mega-Shield-v12-p-2539.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性
---
- Arduino Mega1280/2560 兼容
- Grove 兼容
- Google ADK 兼容
- 尺寸：92.8 mm X 57.2 mm。

## 功能模块
---
Grove - Mega Shield 的目的是允许 Xduino Mega/Google ADK 输入和输出引脚轻松连接到 Grove 单元。

每个插座都清楚地标有其匹配的 I/O 引脚。Grove - Mega Shield 可以分为四个部分：复位按钮、模拟区域、数字区域和电源区域。
请参考以下图表：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield001.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mega Shield 的数字区域也可以根据 GPIO 的不同功能分为四个部分：IIC（3 个连接器）、UART（UART0-3）、PWM（PWM2-13）和 ICSP（无连接器）。请注意，PWM 有两种外观形式：3 针 2.54mm 排针和我们的标准 4 针 2mm 连接器。这两种外观形式服务于不同的目的，4 针 2mm 连接器可以连接到我们的标准 Grove，而 3 针 2.54mm 排针可以连接到舵机、超声波测距模块和电子积木。请注意，当在 PWM 上同时使用 3 针和 4 针模块时，请特别注意避免多次使用同一个 GPIO。请参考以下图表：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield002.jpg" alt="pir" width={600} height="auto" /></p>

# Grove - Mega Shield
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - Mega Shield v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
- [Grove - Mega Shield 的 Eagle 文件。](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip)
- [Grove - Mega Shield v1.1 的 Eagle 文件。](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip)

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