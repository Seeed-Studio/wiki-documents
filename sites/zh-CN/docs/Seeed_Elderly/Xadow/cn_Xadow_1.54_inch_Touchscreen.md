---
description: Xadow - 1.54 英寸触摸屏
title: Xadow - 1.54 英寸触摸屏
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_1.54_inch_Touchscreen
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
如果您曾使用或听说过 Rephone，这款全球首款开源模块化手机，那么您对我们即将讨论的产品一定不会陌生。没错！Xadow 1.54 英寸触摸屏正是 Rephone 使用的触摸屏。

该 TFT 显示屏包含 240 x 240 像素，可以单独控制以显示多达 262K 色彩。在显示屏上方是一层电容式触摸屏，提供 29.4mm x 29.4mm 的活动区域，位于显示屏的中心。作为单一触摸屏，它可以在正常操作期间检测活动区域内的任何指尖按压。TFT 驱动器采用 ST7789S IC 驱动器，具有 2 位数据和 4 位控制串行接口，而电容式触摸屏控制器使用 I2C 接口。

![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.JPG)

:::note
    我们对 Xadow 1.54 英寸触摸屏的库进行了少量修改。请参考 **注意事项** 部分了解详细信息。
:::

### 版本追踪

|产品 |版本|发布日期|支持状态|备注|
|---|---|---|---|---|
|Xadow 1.54 英寸触摸屏|(v1.0，旧版本)|2015年10月|支持|无|
|Xadow 1.54 英寸触摸屏|(v1.1，最新版本)|2016年6月|支持|无|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Xadow-1.54-inch-Touchscreen-p-2553.html)

## 特性
---
- 240 x 240 分辨率
- 显示多达 262K 色彩
- 4 个 2mm/0.9 英寸安装孔
- 内置 Xadow 连接器，支持便捷插拔 FPC 电缆
- DIY 手机项目的完美选择

## 规格
---

|通用参数|值|
|---|---|
|**TFT 驱动器**|	ST7789S|
|**触摸屏类型**|	电容式|
|**背光**|	3 个可调白色 LED|
|**电流消耗**|	全背光时约 100mA|
|**分辨率**|240 × 240 像素|
|**连接器**|2 × 35 PIN Xadow 连接器，用于 Xadow / GSM+BLE 和 Xadow Audio|
|**接口**|TFT 显示屏的四线串行接口 / 触摸屏的 I2C 接口|

**尺寸**

|项目 |单位(mm)|单位(英寸)|
|---|---|---|
|电路板 | 50.22mm × 47.21mm   |1.98” × 1.86”|
|触摸屏 | 38.1mm × 37.8mm |1.51”× 1.51”|
|活动区域 | 27.72mm × 27.72mm  |1.09” × 1.09”|
|安装孔|4 × 2mm|4 x 0.9”|

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.png)

:::warning
    请将控制器（如 Xadow GSM+BLE）插入 **右侧**端口，并将音频模块插入 **左侧**端口。
:::

## 注意事项
---
- 产品并不像看起来那么坚固，因此请尽量在稳定的环境中使用，因为温度和湿度的突然变化可能会导致面板故障。
- 尽量保持面板表面清洁，避免在表面上使用任何粘性物质。如果需要清洁屏幕，建议使用干净柔软的布和中性清洁剂或异丙醇。
- 请注意，我们对 Xadow 1.54 英寸触摸屏的库进行了少量修改以适应新版本。如果您使用的是 Xadow 1.54 英寸触摸屏 v1.1：
  - 对于 JavaScript、Lua 和 Arduino 的开发环境或使用 RePhone Create Kit 源代码，您需要注释掉对应的行 `#define _TOUCH_SCREEN_V1_0_` 并取消注释（启用）行 `//#define _TOUCH_SCREEN_V1_1_`。我们已在以下位置提供了这些对应的行：
    - https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone/blob/master/hardware/arduino/mtk/libraries/LDisplay/utility/lcd_sitronix_st7789s.h
    - https://github.com/Seeed-Studio/JavaScript_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h
    - https://github.com/Seeed-Studio/Lua_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h
    - https://github.com/WayenWeng/RePhone_Create_Kit_Source_Code/blob/master/RePhone_Create_Source_Code/lcd_sitronix_st7789s.h
  - 对于 RePhone Create Kit 的 .VXP 文件，请将行 `App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_x.vxp` 更改为 `App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_1.vxp`，位置如下：
    - https://github.com/WayenWeng/RePhone_Create_Kit_VXP/blob/master/RePhone%20Create%20Kit%20VXP/autostart.txt
  - 对于 Eclipse 的开发环境，您无需更改任何内容。

## Rephone 社区
---
[![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）能够聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意和项目，并对未来模块的开发提出反馈。于是，我们创建了 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)。

现在就加入 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)！让我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
以下链接提供了 Xadow 1.54” 触摸屏的原理图：

- [Xadow 1.54”触摸屏原理图文件](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip)

了解更多关于 TFT 显示屏和电容触摸屏的信息：

- [TFT 显示屏数据手册](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/Datasheet-Capacitive_touchscreen.pdf)
- [电容触摸屏数据手册](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/TFT_Display.rar)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>