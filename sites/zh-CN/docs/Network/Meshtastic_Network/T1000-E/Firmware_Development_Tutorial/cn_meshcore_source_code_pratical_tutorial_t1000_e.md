---
description: 一篇关于搭建 MeshCore 固件源代码环境、编译 T1000-E 并烧录固件的实用教程。
title: MeshCore 源代码开发教程
keywords:
  - MeshCore
  - 源代码
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_t1000_e
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/cn/meshcore_source_code_pratical_tutorial_t1000_e/
createdAt: '2026-03-27'
updatedAt: '2026-04-02'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 前置准备

### 必要工具

在开始之前，请准备以下工具：

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### 安装 PlatformIO

在 VS Code 扩展市场中搜索 `PlatformIO` 并安装。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

安装完成后，左侧工具栏通常会出现一个蚂蚁形状的图标。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 项目准备

打开一个你希望放置项目的文件夹。在终端中打开该文件夹。[点击这里](https://github.com/meshcore-dev/MeshCore) 来 git clone 该项目。

打开 VSCode，然后点击 Platform IO 图标，选择 `select a folder`。选择你克隆项目所在的文件夹。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO 会自动安装必要的依赖。安装成功后，你可以看到 `Project has been successfully updated`


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:800, height:'auto'}}/></div>


## 固件开发

### 开发教程

找到你的目标板所对应的 environment。以 T1000-E Bluetooth Copanion 为例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000EBoard.jpg" style={{width:800, height:'auto'}}/></div>


然后 PlatformIO 会为该开发板准备所需的依赖。

修改你的代码。推荐修改对应开发板的 `variant.h` 文件。

完成代码编写后，运行以下命令来编译代码并生成 uf2 文件。

``` bash
pio run -e t1000e_companion_radio_ble
pio run -e t1000e_companion_radio_ble -t create_uf2
```

按住设备按键，然后快速插入充电线两次，绿灯会常亮。将 uf2 文件拖入弹出的磁盘中。uf2 文件可以在 `.pio\build\t1000e_companion_radio_ble` 中找到。

### 示例

#### 用户指示灯控制

本示例演示如何控制用户指示灯常亮。将以下代码复制到 `/examples/companion_radio/ui-new/ui-orig/UITask.cpp`

``` python
void UITask::userLedHandler() {
#ifdef PIN_STATUS_LED
#ifdef T1000_E
  // T1000-E: keep status LED continuously on.
  digitalWrite(PIN_STATUS_LED, LED_STATE_ON);
  return;
#endif
  static int state = 0;
  static int next_change = 0;
  static int last_increment = 0;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000ELight.jpg" style={{width:900, height:'auto'}}/></div>


编译它并将生成的 uf2 文件烧录到你的 T1000-E 上。

## （进阶）PR 提交

感谢你考虑为 MeshCore 项目做出贡献！你可以如何参与贡献？
**1. 报告 Bug**

- 使用 Issues 追踪器
- 使用清晰的标题（例如 "Crash when calling begin() with invalid pin"）
- 描述可以复现问题的具体步骤
- 提供你的开发板、IDE 版本、库版本以及相关代码片段
- 如有可能，附上最小可复现示例代码

**2. 建议改进 / 新特性**
- 创建一个以 [Feature request] 为前缀的 issue
- 说明使用场景 → 这个改动能解决什么问题？
- 描述你理想中的 API / 行为（代码示例会非常有帮助）
**3. 提交代码改动（Pull Requests）**
### 小改动
（拼写错误、注释、示例、小 Bug 修复）
→ 直接打开一个 pull request——无需事先创建 issue

### 较大改动 / 新特性
1. 首先创建一个 issue 来讨论你的想法
2. 获得维护者的大致 👍 认可
3. 从 `dev` 分支 fork 仓库并创建你的分支（fix/xxx、feature/yyy、docs/whatever）
4. 完成你的改动
5. 在合适的情况下更新或新增示例
6. 在代码中添加 / 更新注释
7. 提交 pull request

### Pull Request 指南
- 一个特性 / 修复 = 一个 pull request（更小的 PR 更易于也更快速地审查）
- 使用有描述性的提交信息
  好：Fix I2C timeout handling on ESP32
  不好：update
- 关联任何相关 issue（Fixes #123、Closes #89 等）
- 如果你更改了公共 API，请更新 README.md 和 library.properties
- 新特性应在 examples/ 中附带示例代码
### 代码风格
请遵循现有的 C++ 风格（参照 .clang-format）

- 使用 2 个空格缩进（不用 Tab）
- 函数和变量使用 camelCase 命名
- 类名使用 UpperCamelCase / PascalCase
- 使用 ALL_CAPS 定义 `#define` 常量
- 在合理的情况下保持每行长度 < ~100 个字符
（但与现有代码保持一致比严格遵守规则更重要）
