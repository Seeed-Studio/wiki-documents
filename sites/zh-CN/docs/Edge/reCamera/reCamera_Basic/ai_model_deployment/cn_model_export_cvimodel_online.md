---
description: 在线导出模型
title: 在线导出模型
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png
slug: /recamera_model_export_online
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: yylin
createdAt: '2026-07-19'
updatedAt: '2026-07-30'
url: https://wiki.seeedstudio.com/cn/recamera_model_export_online/
---

# 在 reCamera 网页界面中转换并部署自定义 YOLO 检测模型

reCamera 的网页管理界面提供了内置的云端模型转换功能。在完成 YOLO 检测模型的训练或微调后，用户可以直接上传并导出 ONNX 模型，而无需在本地配置 TPU-MLIR、Docker 或其他模型转换环境。

上传后，系统会自动将 ONNX 模型转换为可在 reCamera 上运行的 `.cvimodel` 格式模型。模型转换成功后，可以直接将该模型应用到当前设备，并在 Dashboard 页面中查看实时检测结果。

## 功能概览

通过 reCamera 网页界面可以完成以下操作：

- 上传已训练或微调完成的 YOLO Detect ONNX 模型；
- 使用 Seeed 的云服务自动转换模型；
- 将 ONNX 模型转换为 reCamera 支持的 `.cvimodel` 格式；
- 下载已转换的模型文件；
- 将模型直接应用到当前 reCamera；
- 在 Dashboard 中实时预览目标检测结果。

整个流程无需用户在本地安装模型转换工具链，非常适合快速验证和部署自定义目标检测模型。

## 支持范围

该功能目前主要面向 YOLO 系列目标检测模型（Detect）。

上传前请确认：

- 模型已导出为 ONNX 格式；
- ONNX 模型使用固定输入尺寸；
- 模型可以在本地 ONNX Runtime 环境中正常执行。

> 此功能主要用于 YOLO Detect 模型。分类、实例分割、姿态估计和旋转框检测模型可能使用不同的输出结构，当前转换流程下可能无法直接部署。

---

## 准备 ONNX 模型

首先使用 Ultralytics 或其他训练框架训练或微调 YOLO 模型，然后将模型导出为 ONNX 格式。

以 Ultralytics YOLO 为例：

```bash
yolo export \
  model=runs/detect/train/weights/best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True
```

:::note
tpu-mlir 仅支持最大 opset 版本为 17。opset > 17 的 ONNX 模型可能无法完成在线转换。
:::

导出后，你将得到类似如下的文件：

```text
best.onnx
```

建议在上传前检查 ONNX 模型：

```bash
pip install model-inspect-tool

model-inspect 
```

一旦模型通过 ONNX 检查，即可上传到 reCamera。

---

## 步骤一：打开模型转换页面

使用浏览器访问 reCamera 的网页管理界面。

在左侧设备管理区域中找到：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image.png" /></div>

进入 **Model Conversion** 页面后，可以看到已经上传或转换过的模型。

页面中的模型通常提供以下操作：

- `Download`下载已转换的模型；
- `Use`将模型设置为当前使用的模型；
- 删除按钮：删除对应的模型记录。

---

## 步骤二：上传 ONNX 模型

点击页面中的 **Upload Model** 按钮，在文件选择窗口中选择你希望转换的 YOLO ONNX 模型。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-1.png" /></div>

选择文件后，点击 "Open"，模型将开始上传。

---

## 步骤三：等待云端模型转换完成

模型上传后，reCamera 会调用 Seeed 提供的云端模型转换服务，将 ONNX 模型转换为 reCamera 可运行的 `.cvimodel` 格式。

在转换过程中，模型卡片会显示当前的转换进度。

在转换过程中，你可以看到：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-2.png" /></div>

- 模型名称；
- 上传时间；
- 当前转换进度；
- `Stop Model Conversion` 按钮。

请确保 reCamera 在模型转换完成前保持稳定的网络连接。

> 上传和转换模型需要访问云端服务。如果设备无法访问互联网，或者网络连接不稳定，模型转换可能失败，或长时间停留在某个进度不再变化。

---

## 步骤四：确认模型转换完成

转换成功后，模型右上角会出现绿色完成标记，并显示如下按钮：

```text
Download
Use
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-3.png" /></div>

这表明云端已完成从 ONNX 到 `.cvimodel` 的转换。

### 下载模型

点击 **Download**，即可将转换后的模型下载到本地电脑进行保存。

下载的文件可以用于：

- 模型备份；
- 自定义 reCamera 应用；
- Node-RED 模型节点；
- C/C++ 推理程序；
- 后续离线部署。

### 使用模型

点击 **Use** 将该模型设置为 reCamera 应用当前使用的推理模型。

应用模型后，当前模型名称会同步到相关的模型节点或预览页面。

> 如果列表中存在多个同名模型，可以根据上传时间来判断需要使用的版本。为便于管理，建议在上传前使用带有版本信息的文件名，例如 `person_detect_v1.onnx`。

---

## 步骤五：部署当前 Node-RED 流程

选择模型后，需要部署当前的 Node-RED 流程，使模型配置正式生效。

点击页面右上角的 **Deploy** 按钮。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-4.png" /></div>

部署完成后，摄像头节点、模型节点以及 Dashboard 页面将按照新的配置运行。

> 仅点击 `Use` 可能只是更新了模型选择。为确保模型切换完全生效，建议在选择模型后再次点击部署按钮。

---

## 步骤六：打开 Dashboard 预览页面

部署完成后，点击页面右上角的 **Dashboard** 按钮。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/recamera-open-dashboard.png" /></div>

浏览器随后会跳转到模型预览与设备控制页面。

在预览区域，你可以看到：

- 当前使用的模型名称；
- IoU 阈值；
- 置信度阈值；
- 摄像头实时画面；
- 目标检测框；
- 检测类别名称；
- 检测置信度。

例如，当检测到人时，画面会显示：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-5.png" /></div>

其中：

- `person` 表示检测类别；
- `91` 表示检测置信度约为 91%。

---

## 常见问题

### 模型长时间停留在转换中

请检查：

1. reCamera 是否可以正常访问互联网？
2. ONNX 文件是否完整上传？
3. 模型文件是否过大？
4. ONNX 模型是否可以正常加载？

也可以停止当前转换任务后重新上传。

### 模型转换失败

常见原因包括：

- ONNX 模型中包含当前尚不支持的算子；
- 模型使用了动态输入尺寸；
- 模型输出结构被自定义修改；
- ONNX 导出版本或 Opset 不兼容；
- 模型文件损坏。

建议重新导出模型，并优先使用固定输入尺寸：

```bash
yolo export \
  model=best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True \
  dynamic=False
```

### 点击 Use 后预览结果没有变化

请确认：

1. 已点击 `Use` 按钮；
2. 已点击右上角的部署按钮；
3. Dashboard 中显示的 Current Model 是否为目标模型；
4. 模型节点是否在运行；
5. 摄像头节点与模型节点是否正确连接。

如有需要，可以重新部署流程或刷新 Dashboard 页面。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
