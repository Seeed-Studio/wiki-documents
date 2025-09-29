---
description: Grove 扩展板适用于 LinkIt Smart 7688 Duo
title: Grove 扩展板适用于 LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Breakout_for_LinkIt_Smart_7688_Duo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg)

:::danger
由于 MediaTek Labs 已关闭，所有相关链接均已失效。如果需要下载相关文件，请在以下链接中搜索：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

Grove 扩展板适用于 LinkIt Smart 7688 Duo，是一个集成了 Grove 接口并扩展功能的开发板，专为 LinkIt Smart 7688 Duo[1] 开发板设计。此扩展板通过简化的接线过程，可以大大减少原型开发的工作量，即使是对电子知识了解不多的初学者也能快速开始项目。它支持 I2C、UART 等串行总线，并提供对 LinkItTM Smart 7688 Duo 原始保留引脚的访问。

[1] LinkItTM Smart 7688 Duo 是一个基于 OpenWrt Linux 发行版、MT7688 和 ATmega32u4 的开放开发板。该开发板专为智能家居丰富应用的物联网设备原型设计而打造。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html)

## 特性
---
- 集成 Grove 接口，使接线更简单。
- 更多 Grove 接口，支持更多丰富的 Grove 模块扩展。
- 性价比高。

:::tip
    <!-- 有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/) -->
:::

## 应用场景
---
- 物联网/网关设备
- 机器人
- 智能多媒体设备
- 教学与学习

## 规格
---
- 输入电压：5.0V（通过 USB 电源端口）
- 工作电压：3.3V
- 调试引脚连接 MT7688，其他引脚连接 ATmega32U4。

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Grove_Breakout_for_LinkIt_Smart_7688_Duo_component_with_text_1200_s.jpg)

:::note
     由于需要将 LinkIt Smart 7688 Duo 插入此扩展板，请将 LinkIt Smart 7688 Duo 的 USB micro type-B 一侧与 Grove 扩展板的 Host 丝印一侧对齐。
:::

**Grove 接口**

<!-- 连接丰富的 [Grove](/cn/Grove_System/) 接口功能模块。通过这种接口，您无需跳线或焊接工作，可以使用这些功能模块创建更强大的应用程序。 -->

## 入门指南

**所需材料**

- LinkIt Smart 7688 Duo × 1
- USB 数据线（Type A 至 Micro Type-B）× 1
- USB 转串口适配器 × 1
- 跳线 × 3
- Grove - 蜂鸣器 × 1

**使用 Grove 蜂鸣器发出声音**

<!-- 1.参考 [LinkIt Smart 7688 Duo 的 Wiki](/cn/LinkIt_Smart_7688_Duo/) 将您的 LinkIt Smart 7688 Duo 连接到互联网。 -->

:::note
    1. 您可以在靠近连接 LinkIt Smart 7688 的端口找到 Pin 8、Pin 9 和 Pin GND。
    2. 您可以将跳线插入 MT7688 UART2 端口，而无需将其焊接到 Pin 8、Pin 9 和 Pin GND。
:::

2. 在将 USB 转串口适配器连接到 LinkIt Smart 7688 Duo 后，打开控制台。

3. 按如下所示连接所有部件：

![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

:::note
    将 Grove - 蜂鸣器插入端口 D4。
:::

<!-- 4.参考 [LinkIt Smart 7688 Duo 的 Wiki](/cn/LinkIt_Smart_7688_Duo/) 在主机电脑上为 LinkIt Smart 7688 Duo 平台构建 Arduino 环境。 -->

<!-- 5.下载 [firmata](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Firmata_to_build_Arduino_IDE_for.zip)。参考 [LinkIt Smart 7688 Duo 的 Wiki](/cn/LinkIt_Smart_7688_Duo/) 为 LinkIt Smart 7688 平台安装 Arduino IDE，并将文件 firmata 刷写到开发板。 -->

:::note
    以下步骤在嵌入式操作系统（OpenWRT）上进行。
:::

6. 在控制台中输入 **pip install pyfirmata** 并按 Enter 键安装 Python 库 pyfirmata。

7. 在控制台中输入 vi buzzer.py 创建一个名为 buzzer.py 的文件，并将以下代码复制到其中。

```
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```

8. 保存 buzzer.py 文件，并输入 python buzzer.py 运行示例代码。

9. 现在您将听到蜂鸣声。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [原理图文件](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>