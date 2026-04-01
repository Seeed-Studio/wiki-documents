---
description: 介绍如何在 SenseCraft 上新建应用。
title: 创建新的应用
keywords:
  - create appllication
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/create-new-application
aliases:
  - /connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/application/create-new-application/
---
# 创建新的应用

## 新建应用

进入 **我的应用&#x20;**&#x9875;面，点击 `新建应用`>`上传`。

为了保护您的劳动成果，进入编辑页面后，您的改动将被**全局自动保存**，导航栏会实时显示保存状态。

## 创作应用

应用创建过程分为四个清晰的步骤，您可以通过顶部导航栏随时切换。

### 第一步 填写应用信息

这是他人最先了解您应用的方式，请务必认真斟酌，让您的应用更吸引人。

- **应用名称**：为您的应用起一个响亮的名字，让别人一眼就能了解这是做什么的。

- **应用简介**：用精炼的语言概括应用的核心场景、使用的技术、设备等。

- **应用场景**：为应用选择最合适的分类标签，这对于您的应用推广至关重要。

- **使用许可**：在这里设定您的许可，包括是否允许他人复制与修改，以及是否允许用于商业用途。

:::caution
如果您后续更改了许可，更改之前发生的行为（例如克隆）及其之上的成果将不受影响。
:::

- **图片**：展示图很大程度决定了应用的吸引程度，请务必认真准备。第一张将默认作为应用封面，最多支持上传16张图片，单张大小不超过2MB，建议图片比例为 4:3。

### 第二步 填写文档说明

这是您应用最核心的区域，您需要撰写详细的**应用介绍**和**应用部署**流程。您可以利用右上角的按钮随时开启或隐藏实时预览，该预览可以帮助您随时从他人的角度检查部署的流程、测试应用的部署。

#### 使用 Markdown 编辑

文本编辑器使用您熟悉的 Markdown 语法。您可以在输入时键入 `/` 唤出快捷菜单，迅速插入标题或工具块（后续更新）。

#### **应用介绍撰写**

您可以在这里自由描述项目的背景、原理、思考等等的文字。在这一部分，您无法添加调用SenseCraft能力的功能块。

#### **应用部署流程**

这一部分，您可以详细撰写您应用的部署流程。请以步骤为单位，指引他人复刻您的应用，并适当说明每一步的前置准备工作。您可以点击 `+` 号为项目添加新的操作步骤。请确保您的步骤先后安排合理，说明足够详细，您可以通过右上角的按钮随时开启或隐藏实时预览，从他人的角度检查是否能成功复刻您的应用。

#### **使用功能块**

在部署流程中，您可以一键插入 SenseCraft AI 专属的集成功能，这些功能能简化您的创作、和用户的部署路径：

##### AI 视觉

用于部署 AI 视觉模型，帮助您在硬件设备上完成物体识别、检测、分类等任务。通过此功能，您的设备可以将推理结果通过 MQTT、GPIO 或串口 (Serial) 等方式实时输出。

目前该功能块支持的视觉任务包括目标检测 (Detection) 和图像分类 (Classification) 。（区域分割与姿态检测将在后续更新中提供）。

**支持设备：**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

**「SenseCraft AI 模型」：**&#x60A8;可以直接在模型库中选用由社区公开分享的优质模型。

**「我的模型」：**&#x60A8;可以从自己保存的私有列表中选择模型。

:::caution
请注意：当您将包含该模型的应用发布至社区时，该私有模型也将被自动设为公开状态。
:::

- **上传模型：**&#x652F;持上传在第三方平台训练的模型文件。上传时，需要填写模型名称、任务类型 (Task)、模型类别 (Class ID 与 Class Name)、上传模型文件并勾选支持的设备。上传完成后，该模型会出现在「我的模型」列表中。

- **训练模型：**&#x5982;果您需要训练新的模型或基于现有模型重新训练，可以点击相关入口进入训练流程。按照指引完成训练后，在「历史模型」中点击「发送至SenseCraft」，您将进入上传模型的流程，然后保存至「我的模型」。

**选择设备**：该模型支持的设备列表，请在下拉菜单中选择您实际使用的硬件。

**调整推荐参数**：您可以根据实际场景微调模型的推理参数和设备的配置参数。这些值将会在部署时作为默认值写入设备中。

- 置信度（Confidence）阈值：指决定 AI 模型是否输出最终预测结果的判定标准。提高阈值能够减少误报（False Negative），降低阈值能够减少漏报（False Positive）。

- 并交比（IOU）阈值：IoU 用于在视觉检测（Detection）任务中评估预测边界框与真实边界框相比的准确性。提高阈值能够更有效地区分多个物体，但过高可能会导致同一个物体上出现多个预测框（增加误报）。降低阈值能够有效去重，但过低可能会出现有两个靠近的物体只检测到一个（漏报增加）。

- 输出模式

  - 无：在通电后不启动模型推理，需要额外的触发机制，适用于低功耗的场景，仅在需要时触发模型推理。

  - MQTT：在通电后立即开始推理，通过WiFi和MQTT协议发送推理结果。

    - **使用 SenseCraft 官方服务（推荐）：**&#x60A8;只需为您的应用选择或者新建一个开发套件 (Dev Kit) 即可，MQTT参数配置将自动完成。您需要前往[SenseCraft Data平台](https://sensecap.seeed.cc)查看并处理接收到的数据。

    - **使用第三方服务**：您可以选择第三方或自建的MQTT服务，并手动完成参数配置。

  - GPIO：通过 GPIO 针脚输出电平信号。

    - **触发条件**：您可以设定具体的触发规则，包括设定识别对象 (Object)、判断条件 (Condition) 以及置信度阈值 (Confidence)。

    - **触发动作**：当满足条件时，设备可执行相应动作。例如将将某个引脚拉高/低、抓拍的图片保存至 SD 卡、点亮板载 LED 灯等。

  - 串口（Serial Port）：使用 [SSCMACore 库](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library)，通过UART(GPIO), I2C, 或 SPI 协议输出模型推理信息。

  ```
    **UART(GPIO)**
    Baud Rate Value: 921600
    Data Format: 8N1
    TX: GPIO43
    RX: GPIO44

    **I2C**
    Slave Address: 0x62
    SDA: GPIO5（PULLUP）
    SCL: GPIO6（PULLUP）
    Protocol:
    - READ：0x10，0x01, LEN &lt;&lt; 8, LEN &amp; 0xff
    - WRITE: 0x10，0x02, LEN &lt;&lt; 8, LEN &amp; 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06

    **SPI**
    Slave CPOL0 CPHA0
    MOSI GPIO9（PULLUP）
    MISO GPIO8,
    SCLK GPIO7（PULLUP）
    CS GPIO4（PULLUP）

    Protocol：
    - READ：0x10，0x01, LEN &lt;&lt; 8, LEN &amp; 0xff
    - WRITE: 0x10，0x02, LEN &lt;&lt; 8, LEN &amp; 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06
  ```

##### AI 声音

用于部署 AI 声音模型，帮助您在硬件设备上完成语音识别任务。通过此功能，您的设备可以将推理结果通过 MQTT、GPIO 或串口 (Serial) 等方式实时输出。

**支持设备：**

- XIAO ESP32S3 Sense

**「SenseCraft AI 模型」：**&#x60A8;可以直接在模型库中选用由社区公开分享的优质模型。

**「我的模型」：**&#x60A8;可以从自己保存的私有列表中选择模型。

> 请注意：当您将包含该模型的应用发布至社区时，该私有模型也将被自动设为公开状态。

- **上传模型：**&#x652F;持上传在第三方平台训练的模型文件。上传时，需要填写模型名称、模型类别 (Class ID 与 Class Name)。上传完成后，该模型会出现在「我的模型」列表中。

- **训练模型：**&#x5982;果您需要训练新的模型或基于现有模型重新训练，可以点击相关入口进入训练流程。按照指引完成训练后，在「历史模型」中点击「发送至SenseCraft」，您将进入上传模型的流程，然后保存至「我的模型」。

**选择设备**：目前声音模型仅支持XIAO ESP32S3 Sense。

**调整推荐参数**：您可以根据实际场景微调模型的推理参数和设备的配置参数。这些值将会在部署时作为默认值写入设备中。

- 识别阈值：指决定 AI 模型是否输出最终预测结果的判定标准。提高阈值能够减少误报（False Negative），降低阈值能够减少漏报（False Positive）。

- 输出模式：声音模型默认输出方式

##### AI震动

用于部署 AI 震动异常检测模型，通过采样设备发出的正常震动，来检测异常震动。

**支持设备：**

- XIAO ESP32S3 Sense（连接 [3-axis Accelerator](https://seeedstudio.feishu.cn/record/QFIprpQsmesStwcOpZWc98Ccn9n))

**调整推荐参数**：您可以根据实际场景微调模型的推理参数和设备的配置参数。这些值将会在部署时作为默认值写入设备中。

- 采集窗口：调整单位时间的采样数量，太大会增加推理时间，太小则可能导致对振动模式的学习不充分。

- 开启默认上电推理：关闭后设备通电后将不启动模型推理，需要额外的触发机制，适用于低功耗的场景，仅在需要时触发模型推理。

- GPIO：通过 GPIO 针脚输出电平信号。在模型检测到异常震动时，设备可执行相应动作。例如将将某个引脚拉高/低、控制板载 LED 灯等。

- 输出模式：震动模型默认输出方式

##### NodeRED

Node-RED 功能块允许您利用可视化的方式为reCamera搭建逻辑工作流。

**准备您的工作流：**&#x5728;编辑器中添加 Node-RED 功能块后，您可以通过以下两种方式配置您的工作流逻辑：

1. **创建新工作流**：您可以使用有线/无线的方式连接reCamera之后，进入 reCamera 的 Dashboard 界面来进行在线编辑与配置。

2. **上传本地文件**：如果您已经在本地配置好了工作流，可以直接选择上传 JSON 文件。系统会自动校验文件类型限制，确保您的文件可以被正确解析。

**选择 AI 视觉模型：**&#x7531;于 Node-RED 的 JSON 工作流文件本身并不包含 AI 模型文件，因此，为了让您的工作流具备 AI 视觉能力，您需要单独在此功能块中为其指定要搭配使用的模型信息。

在模型选择的下拉菜单中，您可以选择三种模型来源：

1. **设备内置**：您可以直接选用 reCamera 设备内置的模型。支持的模型包括 YOLO11n 系列的分类 (Classification)、目标检测 (Detection)、区域检测 (Segmentation)、以及姿态评估 (Pose) 模型。

- **公共模型**：您可以浏览并选用 SenseCraft 公共模型库中其他开发者分享的、且适用于 reCamera 的优秀模型。

- **我的模型 (My model)**：您可以从个人私有模型库中挑选适用于 reCamera 的模型。点击下方的链接来训练新的模型。

:::caution
**发布时注意：**&#x5F53;您在项目中使用了“我的模型”里的私有模型时，如果将该应用发布到公开社区，系统会将该私有的模型同步设为公开状态，您在发布时会收到提示。
:::

##### Aily Blockly

Aily Blockly 是一款强大的可视化编程工具。通过在您的应用中集成此功能块，您可以将您在Aily Blockly中编写好的程序一键烧录至您的边缘计算设备中。

**支持产品：**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

**绑定项目 ID**：您需要在此处输入一串特定的项目代码，以指向您在 Aily Blockly 中创建的公开应用模板。

- 如何获取 Project ID？：打开您的 Aily Blockly 桌面端软件，进入右侧的 **“CLOUD SPACE (云存储列表)”**。找到您的项目卡片，卡片下方显示的一串字符（例如 `prj_be881f`）即为您需要的 Project ID。

![](https://seeedstudio.feishu.cn/space/api/box/stream/download/asynccode/?code=YjczYzljYmQ3NjhlNDg4NzhlNDBiZmM1YjZlNTYzOWRfa1VaTU5hNEFRN2g3WFF6a1g1c0VMNGFkcDNxcWoyTjVfVG9rZW46WWFmSmJER09yb3JVaUh4RmZITGNueFlSbmNlXzE3NzQ4NTczMzg6MTc3NDg2MDkzOF9WNA)

**选择部署设备 (Deployment Device)**：在下拉菜单中选择您实际使用的硬件。

##### 部署容器应用（后续更新）

##### 烧录固件（后续更新）

##### 配置MQTT（后续更新）

##### Debug工具（后续更新）

### 第三步 材料清单 (Bill of Materials)

请详细记录您应用中使用的材料，以便他人复刻。

#### 来自 Seeed Studio

您可以直接搜索并添加Seeed官方的设备。

#### 其他材料

对于非Seeed官方的材料，例如：五金件、特殊的线材、3D打印材料等。您需要提供材料的名称、简介和数量，您可以附带商品链接方便用户购买。

#### 软件和平台（后续更新）

描述复刻您应用需要使用的软件或平台，例如：Arduino IDE、Home Assistant、Edge Impulse等。

### 第四步 发布预览

在最后一步，您将以用户的视角审视整个应用。在点击发布之前，请确保您填写了必填项，并确认您拥有相关代码和素材的分发许可，且内容不包含机密或违法信息。

在点击发布之后，您的应用将进入审核流程，审核期间您将无法继续编辑草稿。

如果您暂时不希望发布，直接退出编辑即可，您的进度将被自动保存。

## 发布应用

:::caution
如果您的应用中有使用未公开的模型（如您自己训练的模型），在发布应用时会同时发布模型，我们会在发布前提醒您。
:::

:::caution
如果您的应用中使用了他人发布的模型，如果未来该模型被下架，您将会收到通知。这不会影响您应用的发布状态，但是您的应用中将无法继续部署该模型。
:::

### 应用审核

:::tip
提交审核之后，如果您需要继续编辑应用，可以随时撤销审核
:::

平台管理员将针对以下几个方面审核您的应用

1. **内容合规与安全性**

   - **版权与开源许可**：上传者必须拥有所包含代码、模型、图片及资产的完整所有权，或者其修改和分发行为严格符合上游的开源协议（如 MIT、Apache 等）。

   - **隐私与数据安全**：应用代码（尤其是涉及摄像头或麦克风等传感器的节点应用）不得包含隐蔽窃取用户隐私数据、未经授权的远端上传逻辑或后门。

   - **合法与社区道德**：内容不得包含商业机密、违法材料、恶意代码，且不包含任何宣扬暴力、色情或仇恨的言论。

2. **模型有效性与硬件兼容性**

   - **模型可用性**：若使用自定义模型，文件必须格式正确且能够被平台成功加载与解析。

   - **描述相符度（准确性）**：模型在实际推理场景下（如目标检测、分类等）的表现需与应用简介中的描述基本一致，拒绝夸大其词。

   - **硬件资源适配**：模型体量和代码逻辑必须与声明支持的硬件板卡性能相匹配。

3. **文档与流程完整性**

   - **基础信息清晰**：应用名称、简介、标签填写准确，封面图片清晰且无误导性。

   - **材料清单 (BOM) 准确**：列出的硬件组件（主控板、传感器、通信模块及周边线材）需与实际部署步骤中使用的完全对应，不遗漏关键配件。

   - **部署步骤 (Deployment) 可复现**：文档中的步骤必须逻辑连贯。如果涉及特定的引脚连接、模型阈值配置或外部网络服务配置（如 MQTT 接入说明），必须给出明确的参数或指导。

4. **社区规范**

   - **拒绝滥发**：禁止发布无意义的、重复的应用，或仅用于广告导流而缺乏实际技术价值的内容。

:::caution
为保障 SenseCraft AI 开源社区的健康、安全与高质量生态，平台保留对任何应用进行审核的最终决定权。对于违反法律法规、社区规范或存在严重安全隐患的项目，平台有权拒绝其发布申请，或随时对已上架的应用执行下架处理。
:::

## 应用管理

### 在「应用广场」中管理您的公开应用

当您从应用广场进入**自己已发布应用**的详情页时，您还可以快捷管理当前的**已发布版本。**

- **克隆：**&#x590D;制当前已发布的稳定版本，作为一个全新的独立项目。

- **编辑：**&#x5FEB;速进入该应用的**草稿**进行修改（和从`我的应用`>`编辑`进入一致）。

- **下架：**&#x5982;果您希望暂时向公众隐藏该应用，可以执行下架操作，其状态将转为`私有`。

### 在「我的应用」中管理**您的应用**

- **编辑：**&#x8FDB;入应用编辑器，这里编辑的内容是一份单独的**草稿**，您的修改不会影响已发布的版本。

- **克隆：**&#x590D;制当前的**草稿**版本，创建一个新的独立副本。

- **发布/发布更新：**&#x70B9;击发布即可将其提交给平台审核。审核通过后，它将公开展示在应用广场中。如果该应用有已发布的版本，审核通过后会自动覆盖之前的版本。

- **下架：**&#x5982;果该应用已经发布在应用广场中，您可以随时在此处将其撤回为私密状态。

:::tip
 **注意：**&#x5982;果您的草稿与发布版本不同，下架之后您将无法访问发布的版本，如果需要基于已发布版本修改，建议在下架之前先克隆该版本。
:::

- **删除：**&#x5C06;应用彻底移除。

:::caution
**注意：**&#x5982;果该应用目前正处于已发布状态，删除操作会先将其从应用广场下架并永久删除，请谨慎操作。
:::
