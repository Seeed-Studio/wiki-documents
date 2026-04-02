---
description: 一个用于搭建 MeshCore 固件源代码环境、编译太阳能节点并烧录固件的实用教程。
title: MeshCore 源代码开发教程
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_solar_node
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/cn/meshcore_source_code_pratical_tutorial_solar_node/
createdAt: '2026-03-27'
updatedAt: '2026-03-27'
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

在 VS Code 扩展市场中搜索 `PlatformIO` 并安装。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

安装完成后，左侧工具栏中通常会出现一个蚂蚁形状的图标。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 项目准备

打开一个你想放置项目的文件夹。在终端中打开该文件夹。[点击这里](https://github.com/meshcore-dev/MeshCore) 来 git clone 该项目。

打开 VSCode，然后点击 PlatformIO 图标，选择 `select a folder`。选择你用于克隆项目的文件夹。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO 会自动安装必要的依赖。安装成功后，你可以看到 `Project has been successfully updated`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## 固件开发

### 开发教程

找到你目标开发板对应的 environment（环境）。以太阳能节点中继为例：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

然后 PlatformIO 会为该开发板准备所需的依赖。

修改你的代码。推荐修改对应开发板的 `variant.h` 文件。

完成编码后，运行以下命令来编译代码并生成 uf2 文件。

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

然后双击 RST 按钮进入 DFU 模式。将 uf2 文件拖入弹出的磁盘。uf2 文件应位于 `.pio\build\SenseCap_Solar_repeater` 中

### 示例

#### 用户指示灯控制

此示例演示如何为用户指示灯编写一个闪烁循环。将以下代码复制到 `/examples/simple_repeater/main.cpp`

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

将其编译，并把生成的 uf2 文件烧录到你的太阳能节点上。

## （进阶）提交 PR

感谢你考虑为 MeshCore 项目做出贡献！你可以如何贡献？
**1. 报告 Bug**

- 使用 Issues 跟踪器
- 使用清晰的标题（例如 "Crash when calling begin() with invalid pin"）
- 描述可复现问题的完整步骤
- 提供你的开发板型号、IDE 版本、库版本以及相关代码片段
- 如有可能，请附上最小可复现的完整示例代码

**2. 提出改进建议 / 新特性**
- 新建一个以 [Feature request] 为前缀的 issue
- 说明使用场景 → 这个功能要解决什么问题？
- 描述你理想中的 API / 行为（代码示例会非常有帮助）
**3. 提交代码修改（Pull Request）**
### 小型修复 
（拼写错误、注释、示例、小 Bug 修复）
→ 直接打开一个 pull request 即可——不需要事先创建 issue

### 大型改动 / 新功能
1. 首先创建一个 issue 来讨论想法
2. 得到维护者的大致认可（👍）
3. 从 `dev` 分支 fork 仓库，并创建你的分支（fix/xxx、feature/yyy、docs/whatever）
4. 完成你的修改
5. 在合适的情况下更新或新增示例
6. 在代码中添加/更新注释
7. 提交 pull request

### Pull Request 指南
- 一个功能 / 修复 = 一个 pull request（小一点的 PR 更容易也更快被审核）
- 使用有描述性的提交信息
  好：Fix I2C timeout handling on ESP32
  不好：update
- 引用任何相关的 issue（Fixes #123、Closes #89 等）
- 如果你修改了公共 API，请更新 README.md 和 library.properties
- 新功能应在 examples/ 中包含一个示例代码
### 代码风格
请遵循现有的 C++ 风格（参考 .clang-format）

- 使用 2 个空格缩进（不要使用制表符）
- 函数和变量使用 camelCase 命名
- 类名使用 UpperCamelCase / PascalCase
- 使用 ALL_CAPS 来定义 `#define` 常量
- 在合理情况下，将每行长度保持在约 100 个字符以内
（但与现有代码保持一致性比严格遵守这些规则更重要）
