---
description: 如何设置 API 密钥
title: 如何设置 API 密钥
keywords:
- Get Started with SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
---

# **如何设置 API 密钥**

:::caution 地理封锁
**注意**：OpenAI API 服务在某些国家（如中国、伊朗和俄罗斯）可能无法使用。请参考[支持的国家和地区列表](https://platform.openai.com/docs/supported-countries)了解更多信息。

请确保您的网络环境允许连接到 OpenAI API。
:::

### 获取 API 密钥

- **步骤 1：** 登录 https://platform.openai.com/signup
  如果您还没有账户，需要先注册一个。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **步骤 2：** 访问您的 [OpenAI 密钥页面](https://platform.openai.com/account/api-keys) 或点击菜单项"View API keys"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **步骤 3：** 点击"Create new secret key"按钮创建新密钥。请参考图片。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **速率限制：**
> OpenAI 对您向 API 发出的请求实施速率限制。这些限制基于每分钟请求数、每分钟令牌数，或对于图像模型，每分钟图像数。
>
> 在[速率限制](https://platform.openai.com/docs/guides/rate-limits/overview)文档中了解更多信息，或参考您的模型的[默认速率限制](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api)。

### 设置密钥

- **步骤 4：** 通过**串口**连接到 Indicator（这里使用 Arduino IDE 提供的串口监视器工具）。

选择开发板和端口。

- **开发板**：Seeed INDICATOR RP2040
- **端口**：usbserial 端口

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **步骤 5：** 打开端口监视器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **步骤 6：** 向设备发送以下命令来设置 APIKey：

```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

您将看到日志显示："`openai_api_key read successful`"，然后您就完成了设置。现在开始享受您的 AI 之旅吧！

# **技术支持**
**需要 SenseCAP Indicator 的帮助？我们随时为您提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>