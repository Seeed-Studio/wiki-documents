---
description: 使用 PlatformIO 的 Seeed Studio XIAO RP2040
title: 使用 PlatformIO 的 XIAO RP2040
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.webp
slug: /xiao_rp2040_with_platform_io
last_update:
  date: 04/08/2025
  author: Hugo
createdAt: '2024-08-27'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/cn/xiao_rp2040_with_platform_io/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.jpg" /></div>

## PlatformIO 介绍

PlatformIO 是一个集成了多种开发板并具有良好可扩展性的开发平台。如果平台中没有你需要的开发板类型，你可以手动添加开发板类型。你在 Arduino 上编写的代码也可以使用它，只需添加相应的库即可。

在本篇 wiki 中，我们将介绍如何在 PlatformIO 中安装并运行示例代码。

## 在 XIAO RP2040 上使用 PlatformIO

### 步骤 1 . 下载 VS Code

根据你所使用的系统下载 [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2 . 安装 PlatformIO 扩展

打开 VSCode，点击 Extensions，然后搜索 PlatformIO 并选择安装。安装完成后，重启 VSCode。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### 步骤 3 . 安装 platform-seeedboards 平台包

Seeed Studio XIAO 系列开发板使用自定义的 PlatformIO 平台，因此你需要手动安装对应的平台包。

- 运行以下命令进行全新安装：

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- 如果你之前已经在 PlatformIO 中使用过 Seeed Studio XIAO 系列开发板，请运行下面的命令进行更新：


```bash
pio pkg uninstall -g -p "SeeedStudio"
pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

或者，你也可以基于现有项目进行替换操作。

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
```

:::

### 步骤 4 . 在 PlatformIO 中创建任意项目

打开 PlatformIO 扩展并选择 Create New Project。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

### 步骤 4 . 编译与烧录

将以下程序复制到 `main.c` 中并上传到开发板。

```cpp
#include <Arduino.h>

void setup() {
    pinMode(PIN_LED, OUTPUT);
}

void loop() {
    digitalWrite(PIN_LED, HIGH);
    delay(1000);
    digitalWrite(PIN_LED, LOW);
    delay(1000);
}
```
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>