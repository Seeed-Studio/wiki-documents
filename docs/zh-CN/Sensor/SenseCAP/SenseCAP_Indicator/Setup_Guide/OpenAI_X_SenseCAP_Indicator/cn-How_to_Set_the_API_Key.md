---
description: How To Set The API Key
title: How To Set The API Key
keywords:
- Get Started with SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
sidebar_position: 4
last_update:
  date: 3/3/2024
  author: Dukaiyin
---

# **How to Set the API Key**

::: caution 地理阻止
**注意**: OpenAI API服务可能在某些国家（如中国、伊朗和俄罗斯）不可用。请参考[支持的国家和地区列表](https://platform.openai.com/docs/supported-countries) 获得更多详情

确保您的网络环境允许与OpenAI API建立连接。
:::

### 获取API密钥

- **Step 1:** 
登录 https://platform.openai.com/signup
如果您还没有帐户，您需要注册一个。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **Step 2:** 访问您的 [OpenAI密钥页面](https://platform.openai.com/account/api-keys) 或点击菜单项“查看API密钥

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **Step 3:** 通过点击“创建新的秘密密钥”按钮来创建新的密钥。参考图像进行操作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **速率限制:**
> OpenAI对您向API发出的请求进行速率限制。这些限制适用于每分钟请求、每分钟标记数，或在图像模型的情况下，每分钟图像数。
>
> 详细了解请参阅[速率限制](https://platform.openai.com/docs/guides/rate-limits/overview)文档，或查看[默认速率限制](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api)您模型的

### 设置密钥

- **Step 4:** 连接到Indicator通过**串口** (这里使用Arduino IDE提供的串口监视器工具)。

选择板和端口

- **开发板**: Seeed INDICATOR RP2040
- **端口**: usbserial端口

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **Step 5:** 打开串口监视器
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **Step 6:** 向设备发送以下命令以设置API密钥：
```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

您将看到日志显示："`openai_api_key read successful`"，然后您就设置好了。现在尽情享受您的人工智能之旅吧！

# **技术支持**
**在使用SenseCAP Indicator时需要帮助吗？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

