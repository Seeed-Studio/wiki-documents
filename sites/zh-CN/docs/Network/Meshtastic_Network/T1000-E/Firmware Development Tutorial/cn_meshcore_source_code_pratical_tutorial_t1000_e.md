---
description: 一篇关于搭建 MeshCore 固件源代码环境、编译 T1000-E 并烧录固件的实用教程。
title: MeshCore 源代码开发教程
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_t1000_e
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/cn/meshcore_source_code_pratical_tutorial_t1000_e/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 前置条件

### 必要工具

在开始之前，请准备以下工具：

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### 安装 PlatformIO

在 VS Code 扩展市场中搜索 `PlatformIO` 并进行安装。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

安装完成后，左侧工具栏中通常会出现一个蚂蚁形状的图标。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 项目准备

打开一个你希望存放项目的文件夹。在终端中打开该文件夹。[点击这里](https://github.com/meshcore-dev/MeshCore) 使用 git 克隆项目。

打开 VSCode，然后点击 PlatformIO 图标，选择 `select a folder`。选择你克隆项目所在的文件夹。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO 会自动安装必要的依赖。安装成功后，你可以看到 `Project has been successfully updated`。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## 固件开发

### 开发教程

找到你的目标板卡对应的 environment。以 Solar node repeater 为例：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

然后 PlatformIO 会为该板卡准备所需的依赖。

修改你的代码。建议修改对应板卡的 `variant.h` 文件。

完成代码编写后，运行以下命令来编译代码并转换为 uf2 文件。

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

然后双击 RST 按钮进入 DFU 模式。将 uf2 文件拖入弹出的磁盘中。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/Dragin.png)

### 示例

#### 用户指示灯控制

此示例展示如何为用户指示灯编写一个闪烁循环。将以下代码复制到 `/examples/simple_repeater/main.cpp`

``` python
#endif
#ifdef LED_WHITE
static void updateUserLightBlink() {
  static unsigned long lastLedPhaseChangeAt = 0;
  static bool lightIsOn = true;

  const unsigned long now = millis();
  if ((unsigned long)(now - lastLedPhaseChangeAt) >= 5000) {
    lightIsOn = !lightIsOn;
    lastLedPhaseChangeAt = now;
  }

  digitalWrite(LED_WHITE, lightIsOn ? LED_STATE_ON : !LED_STATE_ON);
}
```

并编写循环：

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

编译它并将生成的 uf2 文件烧录到你的 Solar node。