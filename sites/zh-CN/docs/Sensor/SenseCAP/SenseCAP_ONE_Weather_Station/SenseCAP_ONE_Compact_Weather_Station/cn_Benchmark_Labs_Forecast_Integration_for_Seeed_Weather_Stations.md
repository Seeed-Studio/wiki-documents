---
description: 本指南介绍如何购买和激活 Benchmark Labs 的超本地化特定点天气预报服务，配合您的 Seeed 气象站使用。我们的 AI 驱动系统提供针对您微气候的特定点 10 天逐小时预报，由您的气象站数据提供支持，帮助您做出更好的环境和运营决策。
title: Seeed 气象站的 Benchmark Labs 预报集成
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image62.webp
slug: /cn/benchmark_labs_forecast_integration_for_seeed_weather_stations
last_update:
  date: 6/3/2025
  author: Zeno
---
# Seeed 气象站的 Benchmark Labs 预报集成

本指南介绍如何购买和激活 Benchmark Labs 的超本地化特定点天气预报服务，配合您的 Seeed 气象站使用。我们的 AI 驱动系统提供针对您微气候的特定点 10 天逐小时预报，由您的气象站数据提供支持，帮助您做出更好的环境和运营决策。

## 步骤 1：访问 Benchmark Labs 着陆页

首先访问我们网站上的 [Benchmark Labs 着陆页](https://www.benchmarklabs.com/seeed-landing/)：&lt;https://www.benchmarklabs.com/seeed-landing/&gt;
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image59.png" /></div>

*图 1：Benchmark Labs 着陆页*

点击"GET STARTED NOW"或"SIGN UP NOW"继续进行付款。

**您的订阅包含的内容：**

-   10 天逐小时预报

-   预报变量：
    -    温度
    -    相对湿度
    -    风速和风向
    -    降水量
    -    蒸散量 (ET) 和其他高级变量
-   链接到您气象站位置的特定点预报
-   订阅在我们收到您在步骤 3 中的 API 密钥后开始

注意：预报准确性可能因您的微气候和气象站状况而有所不同。

## 步骤 2：完成 Stripe 付款表单

选择服务后，您将被引导到安全的 Stripe 付款页面。按照表单填写并完成付款信息。

**收集的信息：**

-   姓名
-   电子邮件
    -    *请确认您的电子邮件准确性，因为 Benchmark Labs 团队将在步骤 3 中收到您的气象站 API 详细信息后，通过电子邮件向您提供登录凭据。*
-   气象站数量
    -    *请注意：输入您想要连接到 Benchmark Labs 的气象站数量。您连接的每个气象站都会在您的 Benchmark Labs 仪表板上获得自己的预报。此数量必须与您通过 Stripe 的付款匹配。*
-   付款信息
-   必需的复选框，同意我们的[条款和条件](https://www.benchmarklabs.com/terms-of-use/)

**重要说明：**

-   Benchmark Labs 支持 Seeed 气象站的直接预报集成
-   您的订阅在 Benchmark Labs 收到您的 API 密钥时开始
-   您的气象站必须连接到互联网并主动传输数据
-   预报性能可能因气象站健康状况和当地条件而有所不同

## 步骤 3：提交您的账户设置表单

付款后，您将被引导到一个简短的表单来完成您的账户设置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image60.png" /></div>

*图 2：账户设置流程*

**请填写表单，包含以下详细信息：**

-   您想要连接到 Benchmark Labs 的气象站数量。*请注意，您连接的每个气象站都会获得自己的预报。此数量必须与您在步骤 2 中通过 Stripe 的付款匹配。*
-   API 密钥
    -    提供的说明：*如何从 Seeed 检索您的 API 密钥*
-   气象站纬度和经度
    -    提供的说明：*如何找到您的 SenseCap 气象站经纬度*
-   您的行业或应用领域（例如，葡萄园、可再生能源、研究）

**后续步骤：**

-   表单提交后，您的登录凭据将在 1-2 个工作日内通过电子邮件发送给您。*请注意，此延迟允许机器学习训练在您的气象站上开始。您的订阅日期将在 Benchmark Labs 收到您的 API 密钥并且您收到仪表板登录凭据后才开始。*
-   您还将通过电子邮件收到 Stripe 收据和账户设置页面的链接
-   Benchmark Labs 团队将交叉检查数据，如有任何差异可能会联系您

如果您有疑问，请联系 Benchmark Labs 团队：**info@benchmarklabs.com**

## 步骤 4：登录您的预报仪表板

处理完您的设置后，您将收到一封包含仪表板登录凭据的电子邮件。您的电子邮件将包含如何登录的说明。

**您的仪表板将包括：**

-   预报可视化和工具
-   填充了 IBM 和 Benchmark Labs 预报模型的数据
-   访问实时和历史环境数据

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image61.png" /></div>

## 您已准备就绪

您的 Seeed 气象站现在已与 Benchmark Labs 链接，您将开始接收精确的、特定位置的预报。感谢您选择 Benchmark Labs 为您的环境洞察提供支持。