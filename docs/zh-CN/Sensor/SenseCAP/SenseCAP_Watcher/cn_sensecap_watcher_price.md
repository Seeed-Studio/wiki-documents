---
description: 本文介绍了 Watcher 在使用 SenseCraft AI 时的收费计划。
title: 价格和权益
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /cn/watcher_price
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCraft AI for Watcher 计划和权益

在 Watcher，我们致力于为开发者提供清晰透明的定价结构，以便将人工智能集成到他们的项目中。我们理解每个开发者都有独特的需求，这就是为什么我们提供一系列定价计划，旨在满足各种需求和预算。为了帮助您做出明智的决定，我们概述了定价模型的关键方面以及每个计划中包含的具体功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

## 我们的定价计划

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
      <th>本地部署</th>
   <th>SenseCraft 标准版</th>
      <th>SenseCraft 专业版</th>
  </tr>
  <tr>
   <th>数据保留</th>
   <td align="center">用户自行保存</td>
   <td align="center">3 个月</td>
   <td align="center">3 个月</td>
  </tr>
  <tr>
   <th>数据 API</th>
   <td align="center">本地 HTTP API</td>
   <td align="center">MQTT/HTTP API</td>
   <td align="center">MQTT/HTTP API</td>
  </tr>
  <tr>
   <th>任务分析</th>
   <td align="center">无限制</td>
   <td align="center">无限制</td>
   <td align="center">无限制</td>
  </tr>
  <tr>
   <th>图像分析</th>
   <td align="center">无限制</td>
   <td align="center">15 分钟/请求</td>
   <td align="center">20000 次请求</td>
  </tr>
  <tr>
   <th>与 LLM 聊天</th>
   <td align="center">无限制</td>
   <td align="center">200 次请求/月</td>
   <td align="center">1000 次请求</td>
  </tr>
  <tr>
   <th>TinyML 模型和模型训练</th>
   <td align="center">无限制</td>
   <td align="center">无限制</td>
   <td align="center">无限制</td>
  </tr>
    <tr>
   <th>价格</th>
   <td align="center">免费</td>
   <td align="center">免费</td>
   <td align="center">一次免费试用 & 6.9 美元计划</td>
  </tr>
 </table>
</div>

:::caution

1. SenseCraft Pro 的付费计划与每个设备的 EUI 绑定。这意味着如果您有五个设备都想使用 SenseCraft Pro，您需要分别为它们付费。

2. SenseCraft Pro 的计费服务基于请求次数。当您购买服务时，您将获得服务提供的请求次数，其中没有过期日期。

3. 当您的设备连接到 SenseCraft APP 时，SenseCraft Pro 将自动激活试用服务。

4. SenseCraft Pro 激活试用并一次性计算表单中的所有请求，然后在您使用完毕后自动切换到 SenseCraft Standard。

:::

在 Watcher，我们相信为开发者提供成功进行 AI 集成所需的灵活性和可扩展性。我们的定价计划旨在满足广泛的需求，从随意实验到大规模部署。选择最符合您的 AI 使用强度和项目需求的计划，让 Watcher 帮助您释放 SenseCraft AI 的全部潜力。立即开始，按照您自己的条件体验 AI 的力量！

## 了解我们的定价模式

### 数据存储

所有计划都提供慷慨的 **3 个月** 数据存储，包括报警图像、时间戳和报警计数的存储。

### 任务分析

任务分析是指 Watcher 理解和解释用户分配任务的能力，将其分解为更小的可操作组件。这包括确定任务是否可以使用小模型执行、识别要使用的特定模型、识别要检测的行为以及定义要采取的行动。作为 Watcher 功能的基础，我们努力在所有计划中保持任务分析免费。

### 图像分析

图像分析涉及对 Watcher 捕获的图像进行高级检查，能够识别图像中的对象、活动和上下文。此功能需要使用大模型，并收取使用费。当您的任务需要使用大模型进行图像分析时，将计算一次请求。

- 如果您使用的是 **[纯云端 LLM 服务](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/#pure-cloud-based-llm-service)**，请求将根据您设置的 **捕获频率** 进行计算。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- 对于 **[本地 AI + 云端 LLM 服务](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/#local-ai--cloud-based-llm-service)**，当小模型触发检测后调用大模型进行图像识别时，将计算一次请求。请注意，请求之间的最小间隔不会短于您配置的 **捕获频率**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

图像分析也是 Watcher 非常重要的功能之一。因此，当您没有订阅 SenseCraft Pro 时，我们也保证为您提供至少 15 分钟的图像分析服务。

### 与大语言模型聊天

与我们强大的大语言模型进行对话交互是一项高级功能，会产生使用费。当 SenseCraft 确定您与 Watcher 的对话是来回交流且 Watcher 生成响应时，将计算为一次请求。

一旦此计数用完，就无法与 Watcher 聊天。

### 模型仓库、训练和上传

访问我们广泛的 [模型仓库](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice)，以及训练和上传您自己模型的能力，在所有计划中都免费提供。

## 如何订阅？

如果您需要订阅 SenseCraft Pro，那么您需要在 SenseCraft APP 内进行操作。第一步应该是在 APP 上[绑定您的 SenseCAP Watcher](https://wiki.seeedstudio.com/cn/getting_started_with_watcher/#step-3-device-binding)。目前，SenseCraft Pro 订阅仅适用于 SenseCAP Watcher 用户。

进入 SenseCAP Watcher 的聊天界面，点击右上角的设置齿轮按钮，然后在底部附近，会有一个**订阅**选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

在这里您可以看到当前订阅服务剩余的请求次数。您可以在这里完成订阅。目前我们为订阅服务提供三种不同的价格，请根据您的实际使用情况选择不同的套餐。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

确认您想要的套餐后，请同意服务协议以进入支付界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

目前 SenseCraft APP 支持使用 Paypal 进行支付。支付成功后，您将在订阅页面看到您购买的请求次数已更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

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
