---
description: 一个用于搭建 MeshCore 固件源代码环境、编译 Tracker L1 并烧录固件的实用教程。
title: MeshCore 源代码开发教程
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_l1
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/cn/meshcore_source_code_pratical_tutorial_l1/
createdAt: '2026-03-27'
updatedAt: '2026-03-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 前置条件

### 必备工具

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

打开一个你希望存放项目的文件夹。在终端中打开该文件夹。[点击这里](https://github.com/meshcore-dev/MeshCore) 使用 git clone 该项目。

打开 VSCode，点击 PlatformIO 图标，选择 `select a folder`。选择你用来克隆项目的文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png" style={{width:700, height:'auto'}}/></div>


PlatformIO 会自动安装必要的依赖。安装成功后，你可以看到 `Project has been successfully updated`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:700, height:'auto'}}/></div>


## 固件开发

### 开发教程

找到你的目标板对应的 environment。以 L1 Pro companion 为例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Board.jpg" style={{width:800, height:'auto'}}/></div>


然后 PlatformIO 会为该板子准备所需的依赖。

修改你的代码。推荐修改对应板子的 `variant.h` 文件。

完成代码编写后，运行以下命令来编译代码并生成 uf2 文件。

``` bash
pio run -e WioTrackerL1_companion_radio_ble
pio run -e WioTrackerL1_companion_radio_ble -t create_uf2
```

然后双击 RST 按钮进入 DFU 模式。将 uf2 文件拖入弹出的磁盘中。uf2 文件可以在 `.pio\build\WioTrackerL1_companion_radio_ble` 中找到。

### 示例

#### 用户显示控制

此示例展示如何修改 L1 Pro 的 UI 显示。它会删除屏幕上的消息显示，持续显示 “Test”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Displayy.jpg" style={{width:500, height:'auto'}}/></div>

将以下代码复制到 `/examples/companion_radio/ui-new/UITask.cpp`

``` python
 if (_page == HomePage::FIRST) {
      display.setColor(DisplayDriver::YELLOW);
      display.setTextSize(2);
      display.drawTextCentered(display.width() / 2, 20, "Test");
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Display.jpg" style={{width:800, height:'auto'}}/></div>

编译它并将 uf2 文件烧录到你的 L1 Pro 上。

## （进阶）提交 PR

感谢你考虑为 MeshCore 项目做出贡献！你可以如何参与贡献？
**1. 报告 Bug**

- 使用 Issues 跟踪器
- 使用清晰的标题（例如："Crash when calling begin() with invalid pin"）
- 描述复现问题的准确步骤
- 包含你的开发板、IDE 版本、库版本和相关代码片段
- 如有可能，附上最小可复现的示例代码

**2. 提出改进建议 / 新功能**
- 提交一个带有前缀 [Feature request] 的 issue
- 解释使用场景 → 这个改动要解决什么问题？
- 描述你理想中的 API / 行为（代码示例会非常有帮助）
**3. 提交代码更改（Pull Requests）**
### 小修改 
（拼写错误、注释、示例、小型 Bug 修复）
→ 直接提交 pull request 即可——不需要事先创建 issue

### 较大改动 / 新功能
1. 先创建一个 issue 来讨论想法
2. 获得维护者的大致认可 👍
3. 从 `dev` 分支 fork 仓库并创建你的分支（fix/xxx、feature/yyy、docs/whatever）
4. 完成你的修改
5. 在合适的情况下更新或添加示例
6. 在代码中添加/更新注释
7. 提交 pull request

### Pull Request 指南
- 一个功能 / 修复 = 一个 pull request（更小的 PR 更容易、更快速地进行审核）
- 使用具有描述性的提交信息
  好：Fix I2C timeout handling on ESP32
  不好：update
- 引用任何相关的 issue（Fixes #123、Closes #89 等）
- 如果你更改了公共 API，请更新 README.md 和 library.properties
- 新功能应在 examples/ 中包含一个示例代码
### 代码风格
请遵循现有的 C++ 风格（参考 .clang-format）

- 使用 2 个空格缩进（不要使用制表符）
- 函数和变量使用 camelCase
- 类名使用 UpperCamelCase / PascalCase
- 使用 ALL_CAPS 来定义 `#define` 常量
- 在合理情况下，尽量将每行保持在约 100 个字符以内
（但与现有代码保持一致比严格遵守规则更重要）
