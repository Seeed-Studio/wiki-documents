---
description: recamera_pro_record_settings
title: 录制设置
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/cn/recamera_pro_record_settings/
---

reCamera Pro 内置规则触发的视频录制功能。用户可以自定义规则来设置视频录制和抓拍的时间。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

## 录制配置

reCamera Pro 在 Web UI 中提供了录制设置页面，用户可以配置视频录制规则、触发方式、录制格式和录制计划，并管理存储和预览文件。该功能适用于安防监控、取证录制、AI 检测结果记录以及定时录制等场景。

进入 Web UI 后，点击左侧菜单中的 **Recording Settings** 进入录制配置页面。

### 页面功能概览

录制设置页面主要包括以下功能模块：

- **录制配置**：配置视频录制触发规则、视频格式和录制计划。
- **存储管理**：查看和管理设备的存储空间。
- **文件预览**：查看已录制的视频文件。
- **计划管理**：设置录制规则的生效时间段。

在录制配置页面中，用户可以选择不同的触发方式并将其应用到录制任务中。

### 录制格式

页面顶部支持选择录制文件格式，例如：

| 参数   | 描述                                                              |
| ----------- | ------------------------------------------------------------------------ |
| 录制格式 | 设置保存视频文件的格式，例如 MP4（视频）、JPG 图像数据和 RAW 原始图像数据。 |
如果选择 MP4 格式进行录制，每次录制的固定时长为 1 分钟。

### 触发方式

reCamera Pro 支持多种视频录制触发方式。用户可以根据实际应用场景选择合适的触发规则。

#### AI 推理触发

**AI 推理触发** 用于根据 AI 模型识别结果自动触发录制。用户可以配置检测类别、置信度范围和触发区域。当满足条件的目标出现在摄像头画面中时，系统会自动开始录制。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

AI 推理触发支持的配置项包括：

| 配置项 | 描述                               |
| ------------------ | ----------------------------------------- |
| 推理任务     | 选择用于触发录制的 AI 推理任务 |
| 置信度范围   | 设置 AI 识别结果的置信度阈值范围 |
| 类别过滤    | 选择用于触发录制的目标类别 |
| 触发区域       | 定义触发检测的画面区域 |

类别过滤支持根据模型输出的类别进行选择，例如 Person、Vehicle、Hardhat、Mask、Safety Vest、Machinery 等。用户可以只选择自己感兴趣的类别，以减少无关事件触发。

触发区域支持在视频画面上绘制多边形区域。当未绘制区域时，默认在全屏范围内触发；绘制区域后，系统只会在指定区域内触发录制。该功能适用于出入口、危险区域、设备区域等重点监控场景。

#### 定时触发

**定时触发** 用于按固定时间间隔触发录制。用户可以配置触发间隔，系统会按照设定的时间周期自动执行录制任务。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| 配置项 | 描述                               |
| ------------------ | ----------------------------------------- |
| 触发间隔   | 设置定时触发的时间间隔，单位为秒 |

该方式适用于周期性录制场景，例如按固定间隔抓取现场视频、记录设备运行状态，或用于巡检与归档。

#### GPIO 触发

**GPIO 触发** 用于通过外部硬件信号触发录制。用户可以选择 GPIO 引脚、引脚状态、触发信号以及消抖时长。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| 配置项 | 描述                               |
| ------------------ | ----------------------------------------- |
| GPIO 引脚名称      | 选择用于触发的 GPIO 引脚        |
| 引脚状态          | 设置引脚的默认状态，例如悬空 |
| 触发信号     | 设置触发电平，例如高电平   |
| 消抖时长  | 设置触发信号的消抖时间，单位为毫秒 |

GPIO 触发适合集成外部传感器、按键、门磁、PIR 传感器、继电器等设备。当外部设备输出指定电平信号时，reCamera Pro 可以自动开始录制。

#### 串口触发

**串口触发** 用于通过串口命令触发录制。用户可以选择串口名称并配置触发命令。当设备通过指定串口接收到匹配的命令时，即可触发录制任务。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| 配置项 | 描述                               |
| ------------------ | ----------------------------------------- |
| 串口名称   | 选择要监听的串口，例如 ttyS4 |
| 触发命令    | 设置用于触发录制的串口命令 |

该方式适合集成外部控制器、MCU、工业设备或自定义主机系统。

#### HTTPS 触发

**HTTPS 触发** 提供基于网络请求的录制触发方式。页面会显示对应的 HTTPS 触发地址，外部系统可通过访问该地址来触发录制。

该方式适合集成第三方平台、业务系统、报警系统或自动化脚本。例如，当外部系统检测到事件时，可以通过 HTTPS 请求通知 reCamera Pro 开始录制。

#### 循环触发

**循环触发** 用于持续或周期性地执行录制任务。该方式适用于需要长期连续录制的场景，例如全天候监控、现场值守和持续数据采集。

#### 声音事件触发

**声音事件触发** 用于根据音频事件触发录制。用户可以进入 Sound Lab 对声音模型进行可视化、训练或切换，并选择应触发录制的声音类别。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

声音事件触发支持的配置项包括：

| 配置项 | 描述                               |
| ------------------ | ----------------------------------------- |
| 声音类别过滤 | 选择用于触发录制的声音类别 |
| 连续活动窗口 | 设置触发所需的连续活动时长，单位为毫秒 |
| 置信度范围   | 设置声音识别结果的置信度阈值范围 |

页面中可选择的声音类别包括 Background Noise、Unknown、Stop、Yes、No、Zero、One、Two 等，具体类别取决于当前加载的声音识别模型。

该功能适用于异常声音检测、设备状态声音识别以及语音指令触发等场景。

### 计划管理

录制设置页面提供计划管理功能，允许用户通过时间表设置录制规则的生效时间。

时间表按星期和小时显示。用户可以点击或拖拽时间单元格选择录制时间段，并可设置多个时间段。

页面提供快捷按钮：

| 快捷选项 | 描述                               |
| --------------- | ----------------------------------------- |
| 工作日（9 AM - 6 PM） | 快速选择白天工作时段 |
| 夜间（6 PM - 6 AM） | 快速选择夜间录制时段 |
| 全天（24 小时） | 快速设置全天录制 |
| 清除           | 清除当前选中的时间段 |

通过计划管理，用户可以使录制规则仅在指定时间段内生效，例如只在夜间开启录制，或仅在工作时间记录事件。

### 应用配置

在每种触发方式的右侧，都有 **Configure** 和 **Apply** 按钮。

- 点击 **Configure**：进入该触发方式的详细参数设置。
- 点击 **Apply**：启用当前触发方式并将其应用到录制任务。
- 顶部状态会显示当前使用的触发方式，例如 "Current: Sound Event Trigger"。

配置完成后，系统会根据当前触发方式、录制格式和计划自动执行录制任务。

### 典型使用场景

录制设置功能适用于以下场景：

- 检测到人、车辆或指定目标时自动录制。
- 在指定时间段内进行定时录制。
- 通过外部 GPIO 传感器触发录制。
- 通过串口命令与工业设备对接进行录制触发。
- 通过 HTTPS 接口与第三方报警系统集成。
- 检测到指定声音事件时自动录制。
- 设置全天或夜间录制计划。

通过录制设置页面，用户可以灵活配置 reCamera Pro 的录制策略，实现从实时预览到事件触发录制的完整闭环。

## 存储管理

在此页面，你可以查看设备当前的磁盘使用情况和文件保存位置，便于快速检查设备状态和素材的存储位置。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_65N6rhHetJ.png" />

在存储配置中，你还可以设置可用存储空间大小并配置配额。你也可以设置是否覆盖旧文件，以确保始终保存最新录制的文件。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WZBl9MEr7Z.png" />

## 文件预览

在这里你可以看到已经录制的文件。每个文件都会根据日期保存在不同的目录中。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_0qrpATtHyA.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_hkMMlkzm7i.png" />

打开对应的文件即可进行在线预览和对素材的相关操作。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_Dr3Rfk11yn.jpg" />

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
