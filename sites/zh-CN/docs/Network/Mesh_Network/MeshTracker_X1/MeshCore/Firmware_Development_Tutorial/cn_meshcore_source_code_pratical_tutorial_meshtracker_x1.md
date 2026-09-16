---
description: 设置 MeshCore 固件源代码环境、编译 MeshTracker X1 并烧录固件的实用教程。
title: MeshCore 源代码开发教程
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - MeshTracker X1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_meshtracker_x1
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/cn/meshcore_source_code_pratical_tutorial_meshtracker_x1/
createdAt: '2026-03-27'
updatedAt: '2026-08-18'
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

PlatformIO 会自动安装必要的依赖。安装成功后，你可以看到 `Project has been successfully updated`


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:800, height:'auto'}}/></div>


## 固件开发

### 开发教程

找到你目标板卡对应的环境。以 T1000-E 蓝牙 Companion 为例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000EBoard.jpg" style={{width:800, height:'auto'}}/></div>


然后 PlatformIO 会为该板卡准备所需的依赖。

修改你的代码。建议修改对应板卡的 `variant.h` 文件。

完成代码编写后，运行以下命令来编译代码并生成 uf2 文件。

``` bash
pio run -e t1000e_companion_radio_ble
pio run -e t1000e_companion_radio_ble -t create_uf2
```

按住设备按键，然后快速插拔充电线两次，绿色 LED 会常亮。将 uf2 文件拖入弹出的磁盘中。uf2 文件可以在 `.pio\build\t1000e_companion_radio_ble` 中找到。

### 示例

#### 用户灯光控制

本示例演示如何让用户灯常亮。将以下代码复制到 `/examples/companion_radio/ui-new/ui-orig/UITask.cpp`

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


编译并将 uf2 文件烧录到你的 T1000-E。

## （进阶）PR 提交

感谢你考虑为 MeshCore 项目做出贡献！你可以如何贡献？
**1. 报告 Bug**

- 使用 Issues 跟踪器
- 使用清晰的标题（例如 "Crash when calling begin() with invalid pin"）
- 描述复现问题的具体步骤
- 提供你的开发板、IDE 版本、库版本以及相关代码片段
- 如有可能，附上最小可复现示例草图

**2. 提出改进建议 / 新功能**
- 新建一个以 [Feature request] 为前缀的 issue
- 解释使用场景 → 这个改动能解决什么问题？
- 描述你理想中的 API / 行为（代码示例会非常有帮助）
**3. 提交代码更改（Pull Request）**
### 小改动 
（拼写错误、注释、示例、小 Bug 修复）
→ 直接提交 pull request 即可——无需事先创建 issue

### 大改动 / 新功能
1. 先创建一个 issue 来讨论想法
2. 获得维护者的大致 👍 认可
3. 从 `dev` 分支 fork 仓库并创建你的分支（fix/xxx、feature/yyy、docs/whatever）
4. 完成你的修改
5. 在合适的情况下更新或新增示例
6. 在代码中添加/更新注释
7. 提交 pull request

### Pull Request 指南
- 一个功能 / 修复 = 一个 pull request（更小的 PR 更容易也更快被审核）
- 使用有描述性的提交信息
  好：Fix I2C timeout handling on ESP32
  坏：update
- 关联任何相关 issue（Fixes #123、Closes #89 等）
- 如果你修改了公共 API，请更新 README.md 和 library.properties
- 新功能应在 examples/ 中包含一个示例草图
### 代码风格
请遵循现有的 C++ 风格（参考 .clang-format）

- 使用 2 个空格缩进（不要使用 Tab）
- 函数和变量使用 camelCase
- 类名使用 UpperCamelCase / PascalCase
- 使用 ALL_CAPS 定义 `#define` 常量
- 在合理情况下保持每行长度 < ~100 个字符
（但与现有代码保持一致比严格遵守规则更重要）

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>