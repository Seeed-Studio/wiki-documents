---
description: 验证自定义模型在 reCamera Pro 上是否正确运行——检查推理状态、FPS、检测输出和资源占用。
title: 验证模型性能
keywords:
  - reCamera
  - reCamera Pro
  - 模型验证
  - 推理
  - FPS
  - 性能
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_validate
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_model_validate/
---

# 验证模型性能

在上传或转换自定义模型后，在将其部署到生产环境之前，先验证它能否在 reCamera Pro 上正确运行。

## 步骤 1：启动推理

1. 在 Web UI 中，进入 **AI Inference** → **Inference Configuration**。
2. 启用推理。
3. 将你的模型选择为 **Running Model**。
4. 设置推理频率。
5. 点击 **Save Configuration**。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## 步骤 2：检查实时监控

进入 **Real-time Inference Monitoring** 以观察：

| 指标 | 需要检查的内容 |
|---|---|
| 推理状态 | 运行中或已停止 |
| FPS | 每秒帧数——越高越好 |
| 检测结果 | 类别名称、置信度分数、边界框 |
| 检测数量 | 每帧检测到的目标数量 |

{/* TODO(verify): confirm exact field names displayed in Real-time Inference Monitoring (e.g. whether FPS, CPU usage, NPU usage, or memory usage are shown) */}

## 步骤 3：验证检测精度

1. 将摄像头对准与你检测类别相匹配的测试目标。
2. 观察检测结果是否显示正确的类别名称以及合理的置信度分数。
3. 检查是否存在误报（检测到不存在的目标）和漏检（存在的目标未被检测到）。

### 调整后处理参数

如果检测质量较差，请返回 [Model Configuration](/cn/recamera_pro_rknn_upload/)：

| 参数 | 影响 |
|---|---|
| IOU 阈值 | 较低 → 更少的重复框；较高 → 保留更多重叠框 |
| 置信度阈值 | 较低 → 检测更多（包括误报）；较高 → 检测更少但更可靠 |
| max_obj | 每帧报告的最大目标数量 |

## 步骤 4：检查资源占用

通过 SSH 在推理过程中监控设备资源占用：

```bash
# CPU and memory
top -bn1 | head -5

# NPU usage (if available)
# TODO(verify): confirm the command to check RKNN NPU utilization on reCamera Pro
```

{/* TODO(verify): confirm exact SSH commands for monitoring NPU/RKNN utilization and memory consumption during inference */}

## 常见问题

| 现象 | 可能原因 | 解决方法 |
|---|---|---|
| 模型加载失败 | 不兼容的算子或量化格式 | 使用 RKNN-Toolkit2 重新转换；查看 [Model Compatibility](/cn/recamera_pro_model_compatibility/) |
| FPS 非常低 | 模型过大或过于复杂 | 使用更轻量的模型或降低输入分辨率 |
| 无检测结果 | 类别配置错误或阈值过高 | 确认检测类别与模型输出一致；降低置信度阈值 |
| 类别名称乱码 | 类别列表不匹配 | 在 Model Configuration 中重新导入正确的类别 TXT 文件 |

## 相关页面

- [选择模型部署路径](/cn/recamera_pro_model_path/)
- [上传并配置 RKNN 模型](/cn/recamera_pro_rknn_upload/)
- [配置检测](/cn/recamera_pro_ai_inference/)
- [模型兼容性](/cn/recamera_pro_model_compatibility/)

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
