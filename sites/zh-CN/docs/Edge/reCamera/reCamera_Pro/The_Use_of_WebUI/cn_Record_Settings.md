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
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/cn/recamera_pro_record_settings/
---

reCamera Pro 内置规则触发视频录制，用户可以通过自定义规则去设定视频录制、拍摄的时间。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260707152226.png" />

## 录制配置

reCamera Pro 提供录制设置页面，用户可以在 Web UI 中配置视频录制规则、触发方式、录制格式、录制时间表，并进行存储管理和文件预览。该功能适用于安防监控、事件留证、AI 检测结果记录以及定时录像等场景。

进入 Web UI 后，点击左侧菜单中的 **录制设置**，即可进入录制配置页面。

### 页面功能概览

录制设置页面主要包含以下功能模块：

- **录制配置**：配置录像触发规则、录像格式和录像时间表。
- **存储管理**：查看和管理设备存储空间。
- **文件预览**：查看已录制的视频文件。
- **日程管理**：设置录像生效的时间段。

在录制配置页面中，用户可以选择不同的触发方式，并将其应用到录像任务中。

### 录制格式

页面顶部支持选择录制文件格式，例如：

| 参数   | 说明                                      |
| ---- | --------------------------------------- |
| 录制格式 | 设置录像文件保存格式，例如 MP4（视频），JPG图像数据和RAW原始图像数据 |
如果是选择录制mp4格式，每次录制的时长固定为1分钟。

### 触发方式

reCamera Pro 支持多种录像触发方式，用户可以根据实际应用场景选择合适的触发规则。

#### AI 推理触发

**AI 推理触发** 用于根据 AI 模型的识别结果自动触发录像。用户可以配置检测类别、置信度范围和触发区域。当摄像头画面中出现符合条件的目标时，系统会自动开始录像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708161142.png" />

AI 推理触发支持的配置项包括：

| 配置项   | 说明                 |
| ----- | ------------------ |
| 推理任务  | 选择用于触发录像的 AI 推理任务  |
| 置信度范围 | 设置 AI 识别结果的置信度阈值范围 |
| 类别筛选  | 选择需要触发录像的目标类别      |
| 触发区域  | 设置触发检测的画面区域        |

类别筛选支持按模型输出类别进行选择，例如 Person、Vehicle、Hardhat、Mask、Safety Vest、Machinery 等。用户可以只选择关注的类别，减少无关事件触发。

触发区域支持在视频画面中绘制多边形区域。未绘制区域时，默认表示全画面触发；绘制区域后，系统仅在指定区域内判断是否触发录像。该功能适用于出入口、危险区域、设备区域等重点监控场景。

#### 定时触发

**定时触发** 用于按照固定时间间隔触发录像。用户可以配置触发间隔，系统会按照设定的时间周期自动执行录像任务。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708161839.png" />

| 配置项 | 说明 |
|---|---|
| 触发间隔 | 设置定时触发的时间间隔，单位为秒 |

该方式适合周期性记录场景，例如固定时间间隔采集现场视频、设备运行状态记录或巡检留档。

#### GPIO 触发

**GPIO 触发** 用于通过外部硬件信号触发录像。用户可以选择 GPIO 引脚、引脚状态、触发信号和去抖时长。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708161912.png" />

| 配置项       | 说明               |
| --------- | ---------------- |
| GPIO 引脚名称 | 选择用于触发的 GPIO 引脚  |
| 引脚状态      | 设置引脚默认状态，例如浮空    |
| 触发信号      | 设置触发电平，例如高电平     |
| 去抖时长      | 设置触发信号去抖时间，单位为毫秒 |

GPIO 触发适合与外部传感器、按钮、门磁、PIR、继电器等设备联动。当外部设备输出指定电平信号时，reCamera Pro 可以自动开始录像。

#### 串口触发

**串口触发** 用于通过串口命令触发录像。用户可以选择串口名称，并配置触发命令。当设备通过指定串口接收到匹配的命令后，即可触发录像任务。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708161945.png" />

| 配置项 | 说明 |
|---|---|
| 串口名称 | 选择用于监听的串口，例如 ttyS4 |
| 触发命令 | 设置用于触发录像的串口指令 |

该方式适合与外部控制器、MCU、工业设备或自定义主机系统集成。

#### HTTPS 触发

**HTTPS 触发** 提供基于网络请求的录像触发方式。页面会显示对应的 HTTPS 触发地址，外部系统可以通过访问该地址来触发录像。

该方式适用于与第三方平台、业务系统、告警系统或自动化脚本集成。例如，当外部系统检测到某个事件时，可以通过 HTTPS 请求通知 reCamera Pro 开始录像。

#### 循环触发

**循环触发** 用于持续或循环执行录像任务。该方式适合需要长期连续录像的场景，例如全天候监控、现场值守和持续数据采集。

#### 声音事件触发

**声音事件触发** 用于根据音频事件触发录像。用户可以进入声音实验室进行声音模型的可视化、训练或切换，并选择需要触发录像的声音类别。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZFeXlH3v5b.png" />

声音事件触发支持的配置项包括：

| 配置项 | 说明 |
|---|---|
| 声音类别筛选 | 选择用于触发录像的声音类别 |
| 连续活动窗口 | 设置触发所需的连续活动持续时间，单位为毫秒 |
| 置信度范围 | 设置声音识别结果的置信度阈值范围 |

页面中可选择的声音类别包括 Background Noise、Unknown、Stop、Yes、No、Zero、One、Two 等，具体类别取决于当前加载的声音识别模型。

该功能适用于异常声音检测、设备状态声音识别、语音命令触发等场景。

### 日程管理

录制设置页面提供日程管理功能，用户可以通过时间表设置录像规则的生效时间。

日程表按星期和小时展示，用户可以点击或拖动时间格来选择录像时间段，并支持多段时间设置。

页面提供快捷按钮：

| 快捷选项 | 说明 |
|---|---|
| 工作日（9-18点） | 快速选择工作日白天时间段 |
| 夜间（18-06点） | 快速选择夜间录像时间段 |
| 全天24小时 | 快速设置全天候录像 |
| 清空 | 清除当前已选择的时间段 |

通过日程管理，用户可以让录像规则只在指定时间段内生效，例如只在夜间开启录像，或仅在工作时间记录事件。

### 应用配置

每一种触发方式右侧都提供 **配置** 和 **应用** 按钮。

- 点击 **配置**：进入该触发方式的详细参数设置。
- 点击 **应用**：启用当前触发方式并应用到录像任务。
- 顶部状态会显示当前正在使用的触发方式，例如“当前：声音事件触发”。

配置完成后，系统会按照当前触发方式、录制格式和日程计划自动执行录像任务。

### 典型使用场景

录制设置功能适用于以下场景：

- 检测到人员、车辆或指定目标时自动录像
- 在指定时间段内进行定时录像
- 通过外部 GPIO 传感器触发录像
- 通过串口命令与工业设备联动
- 通过 HTTPS 接口接入第三方告警系统
- 检测到指定声音事件后自动录像
- 设置全天候或夜间录像计划

通过录制设置页面，用户可以灵活配置 reCamera Pro 的录像策略，实现从实时预览到事件触发录像的完整闭环。

## 存储管理

在这个页面可以看到当前的设备的磁盘使用情况以及保存在系统中的位置，方便快速查看设备状态以及获取素材存储位置。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708162511.png" />

在存储配置中还可以设定可用的存储大小，配置限额。还可以设定是否覆盖旧文件，确保可以一直保存最新的录制的文件。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708162727.png" />

## 文件预览

在这里可以看到已经录制的文件，每个文件都会按照日期保存到不同的目录下。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708162915.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708163015.png" />

打开对应的文件可以在线预览，并且对该素材进行操作。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/Pasted_image_20260708163106.png" />

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
