---
description: 介绍为 reCamera 云台制作的 Node-RED 节点和流程。如果您正在使用 Node-RED 开发云台，本文档将指导您了解如何使用节点来控制您的云台。
title: 云台的 Node-RED 节点和流程
keywords:
  - AI
  - reCamera
  - Gimbal
  - Node-RED
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.webp
slug: /cn/recamera_gimbal_node_red
sidebar_position: 3
last_update:
  date: 04/09/2025
  author: Dawn Yao
---

# 云台的 Node-RED 介绍

本 wiki 提供了如何使用 Node-RED 节点来操作和控制云台上电机的分步指导。设备上的默认流程是一个更全面的示例，展示了如何将 UI 节点与云台节点结合使用，但我们将逐个分解节点来解释如何使用它们。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

如果您是 Node-RED 的新手，或者您有兴趣学习如何将视觉 AI 与云台控制集成，请参考[此页面](https://wiki.seeedstudio.com/cn/recamera_develop_with_node-red/)。

请同时注意云台的轴范围，如下图所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

## 节点

### 设置电机角度

此节点允许您通过传入电机的目标值将云台设置到特定角度。当提供角度时，云台将相应移动以执行所需的定位。

示例：使用注入节点将偏航电机移动到 50°

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_motor_angle.png" /></div>

#### 配置

- Name：节点的自定义命名。
- Input：通过 msg、flow 或 global 变量自由解析角度值。
- Unit：输入值格式：
  - Input in decimal：输入值为十进制度数（例如，180.23°）
  - Input in integer：输入值为整数格式，表示百分之一度（例如，18023 = 180.23°）
- Motor Selection：选择要控制的电机和控制模式：
  - Yaw Axis (Left and Right)：水平移动

  - Pitch Axis (Up and Down)：垂直移动

  - Absolute Position：将电机设置到特定角度
  - Relative Offset：按相对量移动电机
- Set dual axis at the same time：使用单个命令控制两个电机
  - Absolute Position：将两个电机设置到特定角度
  - Relative Offset：按相对量移动两个电机

#### 输入

对于单轴控制，输入是表示角度值的数字。

对于双轴控制，输入应该是具有以下结构的 JSON 对象：

```json
{
    "yaw_angle": value,           // Horizontal angle in degrees
    "yaw_speed": speed_value,     // Optional: 0-720
    "pitch_angle": value,         // Vertical angle in degrees
    "pitch_speed": speed_value    // Optional: 0-720
}
```

#### 输出

此节点不产生任何输出消息。它只设置电机角度并更新其状态显示以反映操作结果。

#### 状态显示

节点在其状态中显示当前操作：

- **处理中**：发送命令时显示蓝点和 `Processing` 文本
- **成功**：成功完成时显示绿点和操作详情：
  - 单轴示例：`Set Yaw: 90°` 或 `Offset Pitch: 10°`
  - 双轴示例：`Set Yaw: 90°, Pitch: 45°` 或 `Offset Yaw: 5°, Pitch: 10°`
- **错误**：设置失败时显示红环和错误消息
- **忙碌**：节点正在处理命令时显示黄环和 `Busy` 文本

### 设置电机速度

该节点为偏航（水平）或俯仰（垂直）电机设置速度值。此速度设置存储在全局上下文中，并在其他电机控制节点使用 SocketCAN 发送移动命令时使用。

示例：使用滑块节点创建 UI 滑块来调整偏航电机速度。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_slider.png" /></div>

仪表板由以下流程构成：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_nodes.png" /></div>

在此示例中，我们要确保将范围设置为 1-720，这是电机速度范围。还必须确保您传递给下一个节点的消息类型。这里我们选择 `msg.topic`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/slider_config.png" /></div>

由于在滑块节点中我们选择了 `msg.topic`，我们必须确保从 `msg.topic` 接收以响应滑块。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/speed_config.png" /></div>

#### 配置

您可以指定从何处获取输入值：

- msg：传入消息的属性（例如，payload）
- flow：流上下文变量
- global：全局上下文变量

电机选择：

- 偏航轴（左右）：设置水平移动电机的速度
- 俯仰轴（上下）：设置垂直移动电机的速度

#### 输入

输入应为表示所需电机速度的数值。如果未设置自定义速度，默认速度值为 `90`。值可以以下列格式提供：

- 数字：90
- 包含数字的字符串："45"

**速度单位**：速度值以 `dps/LSB`（度每秒/最低有效位）为单位测量，这是电机速度控制的分辨率。有效范围为 0 到 65535，云台的典型值在 50 到 720 之间。

**速度参考值**：

- 慢速移动：1-120
- 中速移动：120-360
- 快速移动：360-720

#### 输出

此节点不产生任何输出消息。它只更新以下全局上下文变量：

- 偏航电机：can$$currentYawSpeed
- 俯仰电机：can$$currentPitchSpeed

速度值以十六进制格式（例如，速度 90 为 `5A.00`）存储在全局上下文中。

电机控制节点在通过 CAN 总线发送命令时检索这些值。

#### 状态显示

节点在其状态中显示当前速度设置：

- 成功设置时显示绿点和 `Yaw Speed: X` 或 `Pitch Speed: X`
- 设置失败时显示红环和错误消息。节点将在以下情况下报告错误：

  - 无效输入值（非数字）
  - 空输入值

### 获取电机角度

该节点检索偏航（水平）或俯仰（垂直）电机的当前位置并输出角度。这对于监控相机的当前方向或在流程中实现基于位置的逻辑很有用。

示例：使用按钮获取当前偏航电机角度位置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

仪表板由以下流程构成：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

`按钮 UI 节点`将触发`获取电机角度节点`，然后将结果解析给`文本 UI 节点`。
您也可以将下面的 json 导入到空流程中以获得此示例：

```json
[{"id":"24bca102bda2cc7b","type":"ui-button","z":"4c965edca3cbeb30","group":"e339fda5d481fc57","name":"","label":"Get Angle","order":0,"width":0,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"topic","topicType":"msg","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":180,"y":200,"wires":[["254d3292e774ea35"]]},{"id":"e339fda5d481fc57","type":"ui-group","name":"get angle","page":"d682a21c64a5b02a","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"d682a21c64a5b02a","type":"ui-page","name":"Page 1","ui":"a6b81038728cf4fb","path":"/page1","icon":"home","layout":"grid","theme":"d7858d0ba6eee558","breakpoints":[{"name":"Default","px":0,"cols":3},{"name":"Tablet","px":576,"cols":6},{"name":"Small Desktop","px":768,"cols":9},{"name":"Desktop","px":1024,"cols":12}],"order":1,"className":"","visible":"true","disabled":"false"},{"id":"a6b81038728cf4fb","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"headerContent":"page","navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"d7858d0ba6eee558","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094CE","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

#### 配置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_anlge_node.png" /></div>

电机选择：

- **偏航轴（左右）**：获取水平运动电机的角度
- **俯仰轴（上下）**：获取垂直运动电机的角度

单位：

- **以小数输出**：以十进制度数输出角度值（例如，180.23°）
- **以整数输出**：以表示百分之一度的整数格式输出角度值（例如，18023 = 180.23°）

#### 输入

任何输入消息都会触发节点读取当前电机角度。输入消息的内容不会被使用。

#### 输出

节点在 `msg.payload` 属性中输出当前角度值：

```json
// With "Output in decimal" selected
{
    "payload": 90.5
}

// With "Output in integer" selected
{
    "payload": 9050
}
```

单位：

- **原始整数值**：电机单位（百分之一度，偏航为 0-36000，俯仰为 0-18000）
- **转换后的十进制值**：度数（偏航为 0° 到 360°，俯仰为 0° 到 180°）

#### 状态显示

节点在其状态中显示当前角度：

- 查询电机时显示蓝点和 `Reading`
- 成功获取时显示绿点和 `Yaw: X°` 或 `Pitch: X°`
- 如果另一个查询已在进行中，显示黄色环和 `Busy`
- 如果获取失败，显示红色环和错误消息
  - 与电机的通信错误
  - 来自电机的无效响应
  - 并发请求（将显示 `Busy` 状态）

### 获取电机速度

该节点读取存储在全局上下文中的偏航（水平）或俯仰（垂直）电机的当前速度值。此速度值在其他电机控制节点使用 SocketCAN 发送移动命令时使用。

示例：使用 `injection node` 获取电机速度并解析到调试窗口

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_speed_flow.png" /></div>

通过点击注入节点，您将在调试窗口中看到当前偏航电机速度。

#### 配置

- 偏航轴（左右）：获取水平移动电机的速度设置
- 俯仰轴（上下）：获取垂直移动电机的速度设置
- 速度值以 `dps/LSB`（度每秒/最低有效位）为单位测量，这是电机速度控制的分辨率。有效范围为 0 到 65535，云台的典型值在 50 到 720 之间。

#### 输入

任何输入消息都会触发节点从全局上下文中读取当前电机速度。输入消息的内容不被使用。

#### 输出

节点在 msg.payload 属性中输出当前速度值：

```json
{
  "payload": 90
}
```

#### 状态显示

节点在其状态中显示当前速度值：

- 成功获取时显示绿点和 `Speed: X`
- 获取失败时显示红环和错误消息

### 角度转 CAN

该节点接收数字角度值作为输入，并生成可直接发送到 CAN 总线接口或 CAN 写入节点的 CAN 消息对象。

示例：使用 `inject 节点` 让偏航轴顺时针或逆时针旋转 30 度。`angle to CAN` 节点将数字转换为 CAN 命令，并使用 `CAN Write` 执行命令。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_flow.png" /></div>

您可以在 inject 节点中设置消息载荷如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/counterclockwise.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/clockwise.png" /></div>

并为相对偏移设置 angle to CAN 节点：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can.png" /></div>

对于 `CAN write`，只需添加默认客户端并选择客户端。

#### 配置

- 电机选择：选择要控制的电机和控制模式：
  - 偏航轴（左右）：水平移动

  - 俯仰轴（上下）：垂直移动

  - 绝对位置：将电机设置到特定角度
  - 相对偏移：按相对量移动电机
- 单位：输入值格式：
  - 十进制输入：输入值为十进制度数（例如，180.23°）
  - 整数输入：输入值为整数格式，表示百分之一度（例如，18023 = 180.23°）

#### 输入

指定角度值的来源：

- msg.xxx：使用 msg 中的值
- flow.xxx：使用流上下文中的值
- global.xxx：使用全局上下文中的值

输入应为表示目标角度（用于绝对定位）或角度偏移（用于相对角度移动）的数值。

示例：

    90.5 - 移动到 90.5 度（使用十进制度数时）
    9050 - 移动到 90.5 度（使用电机单位时）
    -10 - 逆时针移动 10 度（使用相对偏移时）
    10 - 顺时针移动 10 度（使用相对偏移时）

#### 输出

该节点输出可直接发送到 CAN 总线的 CAN 消息对象：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_debug.png" /></div>

```json
{
  "payload": {
    "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
    "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]  // Command data as byte array
  }
}
```

注意：321 是偏航电机（ID 141）的十六进制格式，322 是俯仰电机（ID 142）的十六进制格式。

##### 命令格式

输出的 CAN 消息遵循此格式，详细信息请访问[最新电机手册](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)：

##### 绝对位置命令

- **字节 0**：命令类型（0xA4）
- **字节 1**：方向（0x00）
- **字节 2-3**：速度（2 字节，小端序）
- **字节 4-7**：角度（4 字节，小端序）

##### 相对偏移命令

- **字节 0**：命令类型（0xA8）
- **字节 1**：方向（0x00）
- **字节 2-3**：速度（2 字节，小端序）
- **字节 4-7**：偏移量（4 字节，小端序）

##### 角度限制

- **偏航**：-180° 到 +180°
- **俯仰**：-90° 到 +90°

超出这些范围的值将自动限制在允许的范围内。

#### 状态显示

节点在其状态中显示当前角度：

- 绿点显示 `命令 ID` + `电机 ID` + `移动度数`

### Can Write

CAN Write 节点允许您向 CAN 总线设备发送命令帧并接收其响应帧。它特别适用于查询设备状态、发送控制命令和监控来自 CAN 总线设备的响应。

使用示例如上面的 `angle to CAN` 节点所示。

#### 配置

- 名称：节点的可选名称
- 客户端：选择要使用的 CAN 总线配置（必须在 CAN-config 节点中配置）

#### 输入

输入支持两种格式：

##### 格式 1：字符串格式（推荐）

格式为 `ID#DATA` 的字符串，其中 ID 是十六进制的 CAN 标识符，DATA 是点分隔的十六进制字节。

示例：`141#c1.0a.64.00.00.00.00.00`

##### 格式 2：对象格式

具有以下结构的对象：

```json
{
  "id": "141",
  "data": ["A4", "00", "2C", "01", "50", "46", "00", "00"]
}
```

其中：

- **id**：CAN 标识符，以字符串形式表示（十六进制格式，不带 0x 前缀）
- **data**：十六进制数据字节数组（不带 0x 前缀）

#### 输出

节点输出具有以下结构的对象：（有关每个 CAN 命令的详细信息，请访问[最新电机手册](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)）

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

其中：

- **payload**：格式为 `ID#DATA` 的字符串
- **details**：包含详细信息的对象：
  - **ID**：CAN 标识符（与请求相同）
  - **data**：十六进制响应字节数组
  - **raw**：响应字节的点分隔字符串
- **timestamp**：接收响应的时间
- **topic**：设置为 "can-response"

#### 示例

请求（输入字符串）：

```
141#90.00.00.00.00.00.00.00
```

响应（输出）：

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

##### 响应处理

节点等待来自 CAN 设备的响应，并自动过滤响应帧，以确保您收到针对特定命令的相关响应。

##### 超时

如果在配置的超时时间内未收到响应，节点将输出错误消息。

##### 错误处理

节点将在以下情况下报告错误：

- 无效的输入格式
- CAN 总线通信错误
- 响应超时

### CAN to Angle

该节点接收 CAN 消息对象作为输入，并提取电机 ID、命令类型和角度/偏移值。它支持绝对位置命令 (A4)、相对偏移命令 (A8) 和状态查询命令 (94)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

#### 配置

输入字段允许您指定包含 CAN 消息对象的消息属性、流上下文或全局上下文变量。默认情况下，它使用 `msg.payload`。

#### 输入

输入应该是具有以下结构的 CAN 消息对象：

```json
{
  "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
  "data": [...]  // Byte array containing the command data (8 bytes)
}
```

Example:

```json
{
  "id": 0x141,
  "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]
}
```

##### 命令验证

该节点包含高级验证功能，确保只处理有意义的数据命令：

- **94 命令**：剩余字节不能全部为零（这表示查询而非响应）
- **A4/A6 命令**：第二个字节必须是 0x00 或 0x01 才被认为有效（排除像 0x2F 这样的 ACK 响应）
- **A8 命令**：第二个字节必须是 0x00 才被认为有效

这些验证规则防止处理 ACK 响应和查询命令，避免产生错误的角度计算。

##### 单位

- **十进制输出**：以十进制度数输出角度值（例如，180.23°）
- **整数输出**：以表示百分之一度的整数格式输出角度值（例如，18023 = 180.23°）

#### 输出

该节点输出包含解码信息的 JSON 对象：

对于选择了"十进制输出"的绝对位置命令 (A4)：

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 90.5
    }
}
```

对于选择了"以整数输出"的绝对位置命令(A4)：

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 9050
    }
}
```

对于相对偏移命令(A8)，选择"以十进制输出"时：

```json
{
    "payload": {
        "motorId": 0x142,
        "offset": 5.0
    }
}
```

对于选择了"以十进制输出"的状态查询命令(94):

```json
{
    "payload": {
        "motorId": 0x141,
        "status": true,
        "angle": 90.5
    }
}
```

##### 电机 ID

- 偏航电机（水平）：`0x141`
- 俯仰电机（垂直）：`0x142`

##### 命令类型

- `0xA4`：绝对位置命令
- `0xA8`：相对偏移命令
- `0x94`：状态查询命令

## 默认流程说明

默认流程是一个示例，展示了如何使用仪表板 UI 调色板、视觉 AI 调色板和 reCamera 调色板来构建一个可以预览摄像头、跟踪特定对象并控制电机的仪表板。仪表板如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

我们将分解每个单独的功能，帮助您更好地理解这个流程。

### 自动跟踪

流程的这一部分处理自动跟踪功能。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

- `模型节点`：运行 YOLO 模型并输出检测结果，如检测框的 x、y、w、h、对象 ID。

- `函数 get_target_box 节点`：函数节点仅提取所需对象的边界框信息。算法选择最大的边界框，通常是最近或最相关的跟踪目标。

- `函数 control_motor 节点`：计算此边界框中心与摄像头帧中心之间的偏移量。

- `设置电机偏移节点`：接收偏移值，然后解析 CAN 命令到电机，以保持目标在帧中居中。

- `函数 get_track_target 节点`：将 Yolo 算法中的对象 ID 与实际对象名称匹配，并更新全局变量 `trackTarget`。

- `下拉列表 UI 节点`：在仪表板中提供下拉列表 UI。用户可以实时选择 TrackTarget。

- `函数 save_track_target 节点`：从下拉列表交互中更新 TrackTarget。

- `函数 get_track_enable 节点`：获取全局变量 `trackEnabled` 的状态。

- `跟踪启用按钮组节点`：在仪表板中提供切换按钮 UI，供用户启用或禁用自动跟踪。

- `函数 save_track_enabled 节点`：更新全局变量 `trackEnabled` 是否启用。

### 手动控制

手动控制流程允许用户通过与 UI 滑块交互来移动云台电机。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/manual_control_motors.png" /></div>

- `摇杆节点`：使用模板 UI 节点绘制交互式摇杆，将运动数据解析到下一个节点。

- `设置双电机角度节点`：选择*同时设置双轴*配置。使用从摇杆解析的 json 同时控制电机运动。请注意，这控制的是图像的运动，而不是物理云台的实际方向。

- `获取电机角度节点`：在设备上电时检索偏航和俯仰电机的初始位置，并与滑块 UI 节点同步。

- `获取电机速度节点`：在设备上电时检索偏航电机的初始速度，并与滑块 UI 节点同步。

- `滑块 UI 节点`：在仪表板上提供滑块 UI 供用户与电机交互。注意我们这里只使用一个速度滑块来同时控制两个电机的速度。您可以使用 2 个节点为两个电机分配不同的速度。

- `设置电机角度节点`：从滑块 UI 节点接收数据，并解析 CAN 命令执行电机到特定位置。

- `设置电机速度节点`：从滑块 UI 节点接收数据，并更新电机速度的全局变量，准备与位置命令一起发送。

### 快捷按钮

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/short_cut_buttons.png" /></div>

- `按钮 UI 节点`：在仪表板上提供按钮 UI 供用户与云台交互。点击时，节点将发送分配的值：
  - 休眠：

    ```json
    {"yaw_angle":180, "yaw_speed":360, "pitch_angle":175, "pitch_speed":360}
    ```

  - 待机：

    ```json
    {"yaw_angle":180, "yaw_speed":360,"pitch_angle":90, "pitch_speed":360}
    ```

  - 校准：触发执行节点
  - 紧急停止：触发执行节点

通过点击这些按钮，`trackEnabled` 也会被更新为禁用状态以停止自动跟踪（如果它是开启的）。

- `执行节点`：运行系统命令并返回其输出。您可以为云台执行任何 bash 脚本：
  - 校准：

    ```bash
    gimbal cali
    ```

  - 紧急停止：

    ```bash
    gimbal stop 1; gimbal stop 2
    ```

    如果您在终端中输入 `gimbal`，可以查看所有可用的脚本。

    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

### CAN 节点

此示例未显示在仪表板上，因为它没有任何 UI 节点。这是工作区中的一个示例，演示如何使用以下节点。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/eg_using_can.png" /></div>

- `CAN 读取节点`：持续监听配置接口上的 CAN 消息，并以标准化格式输出它们。

- `CAN 转角度`：解码并将从 CAN 总线读取的原始数据转换为角度值。

- `注入节点`：为 `角度转 CAN` 节点解析 `30` 度来移动电机。

- `角度转 CAN`：接受数字角度值（在此情况下为 30）作为输入，并生成可直接发送到 CAN 总线接口或 CAN 写入节点的 CAN 消息对象。

- `CAN 写入`：向 CAN 总线设备发送命令帧并接收其响应帧。在这种情况下，它将解析

    ```json
    "payload": {
        "id": 0x141,  // 十六进制格式的电机 ID（偏航为 0x141，俯仰为 0x142）
        "data": [0xA8, 0x00, 0x5A, 0x00, 0xb8, 0xb, 0x00, 0x00]  // 字节数组形式的命令数据
    }

    ```

    到 CAN 命令以逆时针旋转 30 度。

### PID 控制

请查看[此处](https://wiki.seeedstudio.com/cn/recamera_pid_adjustment/#adjust-pid-with-node-red)关于PID节点的文档。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
