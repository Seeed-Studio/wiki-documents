---
title: reSpeaker Clip 常见问题
description: 关于 reSpeaker Clip 官方文档、实时转写原型设计和机械资源的常见问题。
slug: /respeaker_clip_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker Clip 常见问题
  - reSpeaker Clip 文档
  - 实时转写
  - 机械图纸
createdAt: '2026-09-01'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_faq/
updatedAt: '2026-09-03'
---

<div class="respeaker-faq-page">

# reSpeaker Clip 常见问题

本页面包含针对 reSpeaker Clip 的已核实答案。每个答案都会说明适用的产品版本和固件模式，并给出最近一次根据当前官方信息核实的日期。

## 在开始之前

- 确认设备的具体产品版本以及正在运行的固件模式（USB 或 I2S）。
- 在执行与版本相关的步骤前，检查当前固件版本。
- 本页答案最近一次核实时间为 2026-09-01；如果你在更晚时间阅读，请重新检查链接的官方信息源。

<!-- RESPEAKER_FAQ_AUTO_START -->
## 文档与使用 {#documentation-and-usage}

### 在哪里可以找到当前官方的 ReSpeaker Clip 文档？ {#official-documentation}

**适用对象：** ReSpeaker Clip 用户和开发者

**最近核实时间：** 2026-09-01

请从当前的 ReSpeaker Clip 入门指南页面开始。使用 Basic SDK 指南进行主机端控制和录音传输，只有在需要修改设备端固件时才使用 Firmware Development 指南。旧的 `/respeaker_clip_getting_started/` URL 已废弃，不应再加入书签。

**前提条件：**

- 确认当前任务是正常产品使用、主机端 SDK 集成，还是设备固件开发

1. 打开入门指南，了解安装、应用流程、规格参数以及当前资源列表。
2. 打开 Basic SDK 指南，通过 BLE 或 Wi-Fi 控制录音、管理会话或传输文件。
3. 仅在需要构建、烧录、调试或修改设备端行为时，打开 Firmware Development 指南。
4. 如果已保存的链接仍然失效，请在报告文档故障前，将其替换为对应的当前 Wiki URL。

**成功标准：**

- 选定的当前指南可以正常打开，并覆盖目标产品、主机 SDK 或固件开发层

**备注：**

- 入门指南中的部分资源仍会被明确标记为 `Coming soon`；某个指南上线并不意味着所有机械或固件文件都已发布。

**参考资料：**

- [ReSpeaker Clip 入门指南](https://wiki.seeedstudio.com/cn/respeaker_clip/)
- [ReSpeaker Clip Basic SDK 指南](https://wiki.seeedstudio.com/cn/respeaker_clip_basic_sdk_guide/)
- [ReSpeaker Clip 固件开发指南](https://wiki.seeedstudio.com/cn/respeaker_clip_firmware_development_guide/)

### ReSpeaker Clip 能否用于原型设计实时对话转写？ {#live-conversation-transcription}

**适用对象：** 在单独的电脑或浏览器上显示实时语音转文字的 ReSpeaker Clip 原型

**最近核实时间：** 2026-09-01

可以，作为主机与云端结合的原型方案的一部分。官方 Live STT 示例会将带有 RTC 功能的 Clip 固件通过 BLE 采集的麦克风音频进行流式传输，通过外部 STT 服务商将完整语音话语转换为文本，并在浏览器中显示转写结果。该方案并未被文档化为独立的纯设备端转写。

**前提条件：**

- 支持 RTC 实时流式传输的 ReSpeaker Clip 固件
- Python 3.10 或更高版本，以及可用的 BLE 适配器
- 网络访问能力，以及官方示例所使用 STT 服务商的 API key

1. 按照官方 Live STT 应用指南操作，并安装其 Python 依赖。
2. 通过 BLE 连接 ReSpeaker Clip，并在应用设置中输入 STT 服务商的 key。
3. 选择 `Start Streaming`，开始说话，并等待每个完整话语在浏览器转写中显示出来。
4. 在目标声学环境中测量延迟和转写准确率，在将该原型视为无障碍辅助工具之前完成评估。

**成功标准：**

- RTC 会话可以通过 BLE 启动，且口语话语能以实时文本形式出现在浏览器中
- 已记录目标环境和语言下测试得到的延迟和准确率

**备注：**

- Live STT 使用 BLE 传输 RTC 音频流；文档中的 Wi-Fi 路径用于“录制并处理”的工作流，而非 Live STT。
- 公共示例依赖外部转写服务，尚未被视为经过认证的医疗或辅助设备。请在真实部署前审查隐私、连接性、延迟以及故障行为。

**参考资料：**

- [ReSpeaker Clip Live STT 应用指南](https://wiki.seeedstudio.com/cn/respeaker_clip_python_build_app/)
- [ReSpeaker Clip RTC 流式传输指南](https://wiki.seeedstudio.com/cn/respeaker_clip_rtc_streaming/)
- [ReSpeaker Clip 入门指南](https://wiki.seeedstudio.com/cn/respeaker_clip/)

### 在哪里可以获得官方的 ReSpeaker Clip 尺寸或机械图纸？ {#mechanical-drawing-status}

**适用对象：** ReSpeaker Clip 外壳、夹具或可穿戴配件设计

**最近核实时间：** 2026-09-01

目前尚未发布带有版本标注的机械图纸。官方入门指南的资源表中仍将 `Mechanical Drawing` 标记为 `Coming soon`，其物理参数表也未提供完整的外壳尺寸。

**前提条件：**

- 机械设计需要适配的精确量产硬件版本

1. 检查当前官方资源表中的 Mechanical Drawing 一行。
2. 不要从照片、营销渲染图或无版本标注的原型推导量产尺寸。
3. 如需立即开展设计工作，请测量实际物理样机，并在冻结模具或间隙前，向官方索取带版本标注的机械图纸。

**成功标准：**

- 机械设计基于带版本标注的官方图纸，或基于对精确量产版本的已验证测量

**备注：**

- 这是一个与发布时间相关的状态说明，当资源表发生变化时必须重新确认。
- 未公开图纸并不代表不存在内部机械文件。

**参考资料：**

- [ReSpeaker Clip 规格与资源](https://wiki.seeedstudio.com/cn/respeaker_clip/)

## 产品与业务 {#product-and-business}

### reSpeaker Clip 应用是否需要按月订阅？我能否使用 OpenAI 或自建托管的 STT 和 LLM 模型？ {#app-subscription-and-custom-providers}

**适用对象：** 在当前应用版本中，在 reSpeaker AI 订阅与自有 STT/LLM 服务商之间进行选择的 reSpeaker Clip 应用用户

**最近核实时间：** 2026-10-26

不需要。订阅是可选的。你可以完全基于自己配置的 STT 和 LLM 服务来运行应用——包括通过 Base URL 暴露的自建托管模型——这一路径不会消耗任何 reSpeaker AI 配额。可选的 reSpeaker AI 订阅适用于不希望自己管理服务商凭据和计费的用户。

在应用的 AI CONFIG 页面中，STT 服务需要填写 Provider、Base URL、API key 和 Language；LLM 服务需要填写 API key、Base URL 和 Model Name。两者都提供 Test Connection 操作，因此只要暴露兼容的 API，就可以在使用前检查由 OpenAI 托管的服务或你自建托管的模型。

| 方案 | 中国大陆 | 海外 | AI 分钟数 | 说明 |
| --- | --- | --- | --- | --- |
| 设备激活赠送 | ¥0 | \$0 | 一次性 300 分钟 | 每个账号、设备和支付账号各一次；有效期 180 天 |
| Lite | ¥19/月 或 ¥179/年 | \$4.99/月 或 \$49.99/年 | 300 分钟/月 | 最低付费档位 |
| Pro | ¥59/月 或 ¥649/年 | \$12.99/月 或 \$129/年 | 1,200 分钟/月 | 主要推荐档位 |
| Max | ¥115/月 或 ¥1,249/年 | \$23.99/月 或 \$249/年 | 2,400 分钟/月 | 高优先级处理队列 |
| 加油包 | ¥9/100 分钟；¥25/300 分钟 | \$1.99/100 分钟；\$4.99/300 分钟 | 100 或 300 分钟 | 仅限已订阅用户；有效期至当前月度周期结束 |

平台的 1 分钟 AI 时长覆盖一次转写加一次该录音的基础摘要。

**前提条件：**

- 带有 AI CONFIG 页面的 reSpeaker Clip 应用，以及一台可用于测试录音的设备
- 对于自定义服务商路径：服务商的 Base URL 和 API key，或可从手机访问的自建端点
- 对于订阅路径：拥有套餐或设备激活赠送的 reSpeaker 账号

1. 在应用中打开 AI CONFIG，检查 STT Service 和 LLM Service 条目。
2. 对于 STT，输入 Provider、Base URL、API key 和 Language，点击 Test Connection，然后保存配置（Save Configuration）。
3. 对于 LLM，输入 API key、Base URL 和 Model Name，点击 Test Connection，然后保存配置（Save Configuration）。
4. 处理一段录音，确认转写和摘要都来自已配置的服务商。
5. 如需改用 reSpeaker AI 订阅，请在应用中选择平台 AI 服务；此时转写和摘要会消耗套餐中的 AI 分钟数。

**成功标准：**

- STT 和 LLM 服务的 Test Connection 均通过
- 一段测试录音已通过配置的服务商完成转写和摘要
- 在自定义服务商路径下，不会消耗 reSpeaker AI 配额

**备注：**

- 套餐、配额和价格以 2026-10-26 为准。应用会显示当前价格及任何地区差异，价格和配额可能发生变化。
- 月度订阅配额不会结转。加油包仅在当前月度周期结束前有效，同样不会结转。取消自动续费后，套餐会在已付费周期结束前保持可用。
- 在自定义服务商路径下，平台不会计量用量；服务商的收费、速率限制和可用性由你自行负责。
- 自建端点必须可从手机访问，并暴露兼容的 API；在服务可用前，Test Connection 操作必须通过。
- 更简单的自部署 LLM 选项计划在后续版本中提供。在此之前，可以通过自定义 Base URL 和 Model Name 字段配置自建托管的 LLM。

**参考资料：**

- [reSpeaker Clip 入门指南（AI CONFIG、STT 和 LLM 服务商设置）](https://wiki.seeedstudio.com/cn/respeaker_clip/)
- [reSpeaker Clip Live STT 应用指南](https://wiki.seeedstudio.com/cn/respeaker_clip_python_build_app/)

<!-- RESPEAKER_FAQ_AUTO_END -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
