---
description: 认识 CodeCraft、完成登录、购买与激活会员、管理账单与用量，并获取帮助与支持。
title: CodeCraft 快速入门与账户支持
keywords:
  - CodeCraft
  - 快速入门
sidebar_label: 1. 快速入门与账户支持
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/quick-start-and-support
sidebar_position: 2
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/cn/codecraft/quick-start-and-support/
---

# CodeCraft 快速入门与账户支持

## 1.1 认识 CodeCraft

### 1.1.1 “你说，我做”

CodeCraft 是一款专为硬件场景打造的 AI 编程助手。你只需要用自然语言描述想做的东西，CodeCraft 就能帮助你生成可运行的硬件程序。

它适合想快速完成硬件创作、但不想从零配置开发环境的用户。无论你是学生、老师、创客，还是刚开始接触硬件编程的新手，都可以通过对话完成从想法到运行的过程。

### 1.1.2 从想法到运行，只需四步

<!--![CodeCraft 工作流程](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-how-it-works.png)-->

CodeCraft 的基本工作流程非常简单：

1. **描述 Describe**  
   用自然语言说出你的想法，例如“帮我做一个番茄钟”“让开发板检测温湿度”。

2. **生成 Generate**  
   CodeCraft 会根据你的描述，自动生成可运行的代码和项目说明。

3. **烧录 Flash**  
   通过网页将程序一键上传到你的开发板。

4. **分享 Share**  
   项目完成后，可以发布到 SenseCraft AI 应用社区，方便自己复用，也可以分享给其他用户。

### 1.1.3 CodeCraft 懂你的硬件

<!--![CodeCraft 与通用 Coding 工具对比](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-comparison.png)-->

和通用 AI Coding 工具相比，CodeCraft 更关注硬件场景。它不仅能生成代码，还理解开发板、传感器、通信协议和硬件库。

| 能力 | 通用 Coding 工具 | CodeCraft |
| :--- | :---: | :---: |
| 软件代码生成 | 支持 | 支持 |
| 认识开发板引脚与 MCU 规格 | 不一定支持 | 支持 |
| 传感器与通信协议支持 | 不一定支持 | 支持 |
| 云端编译，零本地环境配置 | 不一定支持 | 支持 |
| 一键烧录到开发板 | 不一定支持 | 支持 |
| 分享到 SenseCraft AI 硬件项目社区 | 不一定支持 | 支持 |

### 1.1.4 核心能力

<!--![CodeCraft 核心能力](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-core-features.png)-->

CodeCraft 的核心能力包括：

| 传统开发流程（太麻烦 ❌） | CodeCraft 核心能力（超简单 ✅） |
| :--- | :--- |
| ❌ **安装庞大 IDE** | ✨ **零安装**：完全基于网页运行，免装客户端 |
| ❌ **配置复杂环境** | ✨ **零配置**：免装驱动与环境，不挑电脑系统 |
| ❌ **从零手写代码** | 🤖 **AI 原生**：理解引脚与传感器，直接生成硬件代码 |
| ❌ **折腾繁琐工具链** | ☁️ **云端编译**：后台全自动编译，告别复杂工具链 |
| ❌ **手动导出与烧录** | 🚀 **一键烧录**：程序直连设备，一键闪电上传 |
| ❌ **封闭独立开发** | 🌐 **社区分享**：通过 SenseCraft AI 应用库发布和复用项目 |


### 1.1.5 支持的硬件生态

![CodeCraft 硬件生态](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-hardware-ecosystem.png)

CodeCraft 与 Seeed Studio 硬件生态无缝衔接，适合搭配以下硬件使用：

* **Wio Terminal**：一体式开发板，带 2.4 英寸彩屏、多种传感器，并支持 Wi-Fi / 蓝牙。
* **XIAO ESP32S3 Sense**：微型开发板，带摄像头和麦克风，适合 AI 视觉与语音相关项目。
* **Grove Beginner Kit**：一块板集成多个常用模块，免接线，适合入门教学和快速体验。
* **300+ Grove 传感器**：支持运动检测、环境监测、显示输出、执行控制、光与声、影像采集等多种硬件场景。

## 1.2 准备与登录

CodeCraft 提供多种登录方式。无论你是个人开发者、学生，还是教学场景中的用户，都可以快速完成登录并开始创作。

### 1.2.1 个人注册与登录

首次使用时，系统会自动为你创建账户，无需复杂注册流程。你可以选择以下方式登录：

* 邮箱登录
* Google 登录
* GitHub 登录
* Apple 登录
* Bazaar 登录(Seeed Studio 官方在线商城账号) 

建议选择一种自己常用的登录方式，后续可以保持项目、账号和云端数据同步，避免更换设备后找不到原来的项目。

![注册登录](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Sign-up-Log-in.png)

### 1.2.2 学生课堂码登录

CodeCraft 也支持课堂码登录，适合教学场景使用。

课堂码登录可以帮助学生跳过邮箱注册流程，直接进入老师指定的课堂环境。

使用方式：

1. 在登录界面选择“课堂码登录”。
2. 输入老师提供的课堂码。
3. 进入对应课堂环境并开始使用。

课堂码通常由教师或学校申请。如果你有教学使用需求，可以通过“联系我们”获取支持。也可以在CodeCraft 教育解决方案页面，查看详情。

![课堂码登录](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Class-Code-Login.png)

## 1.3 购买与激活 CodeCraft 会员

### 1.3.1 订阅方案

![CodeCraft 订阅方案](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/codecraft-plans.png)

CodeCraft 提供不同会员方案，用于满足不同使用强度的需求。用户可以根据使用频率、项目规模和 AI 创作额度选择合适的会员方案。

| 方案 | 适合用户 | 说明 |
| :--- | :--- | :--- |
| FREE 免费版 | 初次体验用户 | 可体验基础 AI 创作能力 |
| Pro 专业版 | 学生、业余爱好者 | 适合日常学习、项目制作和中等频率使用 |
| Max 旗舰版 | 老师、创客、开发者 | 提供更高额度，适合教学、开发和高频使用 |

> 价格、额度和有效期可能会根据活动或购买渠道变化，请以购买页面和订单详情为准。

### 1.3.2 购买方式

CodeCraft 会员目前可以通过以下方式购买。不同渠道的价格、活动、发货方式和有效期可能不同，请以实际购买页面和订单说明为准。

#### 方式一：通过 CodeCraft 官网购买

你可以选择以下两种最便捷的途径升级或购买会员方案：

| 购买途径 | 操作步骤 | 适用场景 |
| :--- | :--- | :--- |
| **<br/>CodeCraft首页直购** | 1. 访问 [CodeCraft 首页](https://codecraft.seeed.cc/pricing)<br/>2. 浏览方案权益并选择<br/>3. 点击购买并完成支付 | • 首次了解 CodeCraft 会员方案的用户<br/>• 想快速查看价格和权益对比的用户<br/> |
| **<br/>CodeCraft工作区升级** | 1. 访问 [CodeCraft 工作区](https://codecraft.seeed.cc/workspace)<br/>2. 点击左下角 **“设置”**<br/>3. 进入 **“账单”**<br/>4. 查看会员方案并完成购买 | • 已经在工作区内使用 CodeCraft 的用户<br/>• 想要直接升级当前账号的用户 |

> 💡 **提示**：两种购买方式最终绑定的账号权益完全一致，请根据你当前所处的页面自由选择。

#### 方式二：通过 Seeed Studio 商城（国内与海外）

| 购买途径 | 操作步骤 | 适用场景 |
| :--- | :--- | :--- |
| **[SeeedStudio淘宝店](https://item.taobao.com/item.htm?id=1061524473439&skuId=6270812574966&spm=a213gs.v2success.0.0.17b14831MkryRQ)** | 1. 访问官方授权淘宝店铺购买<br/>2. 获取系统发放的**“会员兑换码”**<br/>3. 登录 CodeCraft，进入 **“设置” > “账单”**<br/>4. 在兑换码输入框中输入并激活权益 | • 习惯使用淘宝支付的国内个人用户<br/>• 需要通过淘宝订单报销采购的老师或机构<br/> |
| **[Seeed Studio官方商城](https://www.seeedstudio.com/CodeCraft-Hardware-focused-AI-Coding-Assistant-for-Wio-Terminal-Grove-Beginner-Kit-XIAO-ESP32.html)** | 1. 访问 Seeed Studio 官方商城购买<br/>2. 获取系统发放的**“会员兑换码”**<br/>3. 登录 CodeCraft，进入 **“设置” > “账单”**<br/>4. 在兑换码输入框中输入并激活权益 | • 海外用户或习惯使用官方商城的用户<br/>• 需要同时购买硬件和 CodeCraft 会员的用户<br/>• 学校、机构或企业采购场景 |

#### 购买入口与说明

> 购买入口可能会随活动或地区变化。请以 CodeCraft 官方页面、Seeed Studio 官方商城或官方授权淘宝店铺提供的信息为准。


### 1.3.3 使用兑换码激活会员

如果你通过淘宝、官方商城，或其他活动渠道获得了 CodeCraft 兑换码，可以按照以下步骤激活会员：

1. 打开 [https://codecraft.seeed.cc](https://codecraft.seeed.cc)
2. 注册或登录你的 CodeCraft 账号
3. 进入工作空间
4. 点击左下角“设置”
5. 进入“账号”或“账单”
6. 找到“兑换码”入口
7. 输入兑换码并确认兑换

注意事项：

* 每个兑换码通常只能使用一次。
* 兑换成功后不可撤销，请确认登录的是你要使用会员的账号。
* 有效期、方案时长和具体权益以订单详情为准。
* 如果兑换后会员没有立即生效，可以刷新页面或重新登录后再查看。

## 1.4 账单与用量管理

你可以通过个人设置面板查看当前套餐、账户余额、兑换码记录和 AI 服务用量。

进入方式：

1. 打开 CodeCraft 工作区：[https://codecraft.seeed.cc/workspace](https://codecraft.seeed.cc/workspace)
2. 点击左下角“设置”
3. 在左侧菜单中选择“账单”或“用量”

### 1.4.1 账单管理

![codecraft-账单界面](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/billing-interface.png)  

在账单页面中，你可以查看：

* 当前订阅套餐
* 套餐权益与有效期
* 账户可用余额
* 兑换码记录
* 历史账单详情

如果你通过淘宝购买了会员，也建议在兑换完成后检查这里，确认会员是否已经成功到账。

### 1.4.2 用量管理

![codecraft-用量界面](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Usage-Interface.png)  

在用量页面中，你可以查看：

* 每日或每周 AI 服务使用情况
* 当前额度剩余情况
* 额度重置时间
* 额外用量设置
* 历史用量记录

如果你是老师、机构用户，建议定期查看用量，方便安排课程和项目练习。




## 1.5 帮助与支持

如果在登录、购买、兑换或使用过程中遇到问题，可以通过以下方式排查。

### 1.5.1 常见问题 FAQ

**Q: 为什么兑换码不能使用？**  
A: 请先确认兑换码是否输入正确，是否已经被使用过，以及当前登录账号是否是你想激活会员的账号。

**Q: 淘宝购买后没有收到兑换码怎么办？**  
A: 请先查看淘宝订单详情和店铺消息。如果仍未收到，可以联系淘宝店铺客服确认发货状态。

**Q: 兑换成功后，会员没有生效怎么办？**  
A: 可以刷新页面或重新登录 CodeCraft。如果仍未生效，请截图保留订单信息和兑换记录，并联系技术支持。

### 1.5.2 联系与支持

#### 1.5.2.1 寻求技术帮助
如果你需要进一步支持，可以通过以下方式联系：

* 在 CodeCraft 工作区左下角点击“设置”，选择“联系我们”提交问题。
* 个人或学生开发者可以关注 Beta 测试和新功能体验入口。
* 学校或教育机构可以联系官方获取课程包授权、课堂码和定制化支持。
* 硬件采购可以访问 [Seeed Studio 商城](https://seeedstudio.com)。

![codecraft-联系我们](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/contact-us.png)

#### 1.5.2.2 更多支持
获取更多技术方案与创客社区支持：
![codecraft-专业支持](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/1-quick-start-and-support/Professional-Support.png)
