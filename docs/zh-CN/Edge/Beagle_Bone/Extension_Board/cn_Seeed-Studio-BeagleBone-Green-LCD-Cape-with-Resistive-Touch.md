---
description: Seeed Studio BeagleBone® Green LCD Cape with Resistive Touch
title: Seeed Studio BeagleBone® Green LCD Cape with Resistive Touch
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch
last_update:
  date: 1/10/2022
  author: jianjing Huang
---


![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08ddkssqrw2lfthpq0phlecp1r.jpg)

**Green LCD Cape with Resistive Touch** 是为 SeeedStudio BeagleBone® Green 或 BeagleBone Black 设计的，配备紧凑的 5 英寸 LCD，比 7 英寸更小，但提供 800x480 的分辨率，并使用一层 4 线电阻式触摸屏进行用户交互。通过将 2x46 针头连接到 SeeedStudio BeagleBone® Green/BeagleBone® Black 即可轻松设置，提供了扩展板所需的一切，包括电源和显示信号。此外，该扩展板还可以通过背面的内置 micro USB 供电。屏幕下方的按钮（LEFT、RIGHT、UP、DOWN 和 ENTER）提供了与屏幕交互的另一种方式。两个 LED 用于电源和用户状态指示。

**5 英寸**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**7 英寸**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

--------

- 分辨率高达 800x480（5 英寸）/ 1024x600（7 英寸）
- 电阻式触摸屏
- 包括 LEFT、RIGHT、UP、DOWN 和 ENTER 在内的 5 个按钮
- 支持 Debian 系统
- 超低功耗背光
- 4 个 3mm 安装孔
- 内置 USB 电源

## 规格

-------------

| 名称                | 参数                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| 尺寸            | 200mm x130mm x50mm                                                                                              |
| 重量 | G.W 120g                                  |
|工作电压|5V |
|工作电流|110mA |
|功率|0.55W |

## 应用

-----------------

与 BeagleBone® 一起使用以显示您想要的任何内容。

## 硬件

-----------------

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08za8h5rzwtbm1lq3n3oydkcxp.jpg)

**SN74HC245**

- 大范围 IO 驱动电流

**扩展板 I2C 地址开关**

- I2C 地址配置开关

**CAT4139TD**

- 背光，恒流和恒压

### 部件清单

|                            |          |
|----------------------------|----------|
| **名称**             | 数量 |
|  带电阻式触摸的 Green LCD Cape | 1        |

## 入门指南

-----------

***本节将逐步向您展示如何开始使用。***

### 准备工作

- BeagleBone® Green 板或 BeagleBone® Black 板（已安装操作系统 [安装指南](https://beagleboard.org/getting-started)）× 1。
- USB 数据线（A 型到 micro B 型）× 2。

### 硬件连接

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-086yqt2uwelst8w5mwuaklys12.jpg)

:::note
BeagleBone® Green 板和带电阻式触摸的 Green LCD Cape 都需要通过 USB 连接以提供足够的驱动电力。
:::

### 软件配置

1. 在设备管理器中检查 BeagleBone® Green 板使用的 COM 端口。

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png)

2. 使用 putty 通过 COM 端口访问 BeagleBone® Green 板系统。

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/putty-config.png)

账号：debian，密码：temppwd

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/BBG-start.png)

3. 修改 `/boot/uEnv.txt` 中的配置。

```bash
sudo nano /boot/uEnv.txt
```

对于 7 英寸屏幕：

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/7-inch-config.png)

对于 5 英寸屏幕：

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/5-inch-config.png)

对于使用 BeagleBone® HDMI 的显示设备，取消注释 `disable_uboot_overlay_video=1`。

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/HDMI-config.png)

4. 重启系统。LED 开始闪烁，您将看到以下窗口。

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Bbb_vnc.jpg)

## 资源

---------

- **[原理图]** [原理图文件](https://statics3.seeedstudio.com/assets/file/bazaar/product/5INCH_BBG_00A2_SCH.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>