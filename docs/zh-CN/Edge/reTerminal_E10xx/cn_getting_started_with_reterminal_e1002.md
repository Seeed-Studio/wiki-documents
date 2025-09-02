---
description: 本文将指导您快速开始使用 reTerminal E1002。
title: reTerminal E1002 入门指南
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
---

# reTerminal E1002 入门指南

## 介绍

reTerminal E1002 是一款 7.3 英寸六色电子纸显示终端，专为低功耗信息显示应用而设计。与传统电子阅读器不同，reTerminal E1002 针对在桌面、墙面和零售货架等各种环境中显示生动的文本和图形信息进行了优化。其节能设计和无线连接功能使其成为智能家居仪表板、信息显示、数字标牌和电子相框的理想解决方案，并具有全彩可视化的额外优势。

### 特性

- **7.3 英寸六色电子纸显示屏**：800×480 分辨率，采用 ACeP（高级彩色电子纸）技术
- **ESP32S3 控制器**：强大的主控制器，内置 Wi-Fi 连接功能
- **超低功耗**：专为长时间电池供电而设计
- **集成蜂鸣器**：用于通知和警报
- **电池支持**：JST 连接器，支持 2000mAh 锂电池，带充电电路
- **USB-C 接口**：用于供电和固件更新
- **多个控制按钮**：刷新按钮和导航键，用于用户交互
- **温湿度传感器**：集成 SHT40 传感器，用于环境监测
- **可扩展存储**：MicroSD 卡槽，提供额外存储空间
- **SenseCraft HMI 兼容性**：与 Seeed 的 SenseCraft 平台无缝集成
- **开放硬件和软件**：完全开源，支持定制和开发

## 硬件概述

reTerminal E1002 硬件包括：

1. **7.3 英寸六色电子纸显示屏**：800×480 分辨率的全彩显示屏
2. **刷新按钮**：位于设备顶部，用于手动刷新屏幕
3. **导航按钮**：左右按钮，用于页面导航
4. **电源开关**：位于背面，用于开关设备电源
5. **USB-C 端口**：用于充电和固件更新
6. **电池连接器**：JST 3 针连接器，用于可选锂电池
7. **状态 LED**：
   - 充电指示灯（红色）
   - 用户指示灯（绿色）
8. **MicroSD 卡槽**：用于可扩展存储
9. **温湿度传感器**：集成 SHT40 传感器，位于设备背面左下角，用于环境监测
10. **扩展引脚**：8 针扩展接头，提供 VDD、GND、I2C 和 GPIO 连接

## 入门指南

### 准备工作

**步骤 1.** 拆开您的 reTerminal E1002 包装，确保包含所有组件：
- reTerminal E1002 设备
- USB-C 数据线
- 快速入门指南

**步骤 2.** （可选）如果您计划将设备用作数字相框或需要额外存储空间，请插入 microSD 卡。

:::note
reTerminal E Series ePaper Display 仅支持最大 64GB 的 Fat32 格式 MicroSD 卡。
:::

**步骤 3.** 更新固件以确保您的设备运行最新版本：

1. 使用 USB-C 数据线将您的 reTerminal E1002 连接到计算机

2. 使用背面的电源开关打开设备电源

3. 访问 **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** 并登录您的账户

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. 导航到 **Workspace** 部分

5. 点击右上角的 **Device Flasher**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. 从列表中选择您的 reTerminal E1002 设备。根据本教程，您应该选择 **reTerminal E1002 7.3" Full Color Display**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. 从下拉菜单中选择最新的固件版本

8. 点击 **Flash** 并等待更新过程完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note
更新固件可确保最佳性能并获得最新功能。建议在首次使用设备之前执行此更新。
:::

### 开机

**步骤 1.** 将电源开关滑动到 **ON** 位置以打开设备电源。电源开关位于设备背面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/4.png" style={{width:500, height:'auto'}}/></div>


**步骤 2.** 首次启动时，设备将显示产品信息和网络设置说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**步骤 3.** 绿色用户 LED 将亮起约 30 秒，表示设备已通电并正在初始化。设备无操作 30 秒后，为了确保电源，设备将自动进入睡眠模式，LED 灯将自动关闭。

### 网络设置

**步骤 1.** 从您的智能手机或计算机连接到设备的 Wi-Fi 接入点。AP 名称将显示在屏幕上（无需密码）。网络凭据为 `reTerminal E1002-{MAC Adress}`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**步骤 2.** 连接后，您的手机应该会自动重定向到 Wi-Fi 配置页面。如果没有，请打开浏览器并导航到 `192.168.4.1`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**步骤 3.** 选择您的本地 Wi-Fi 网络并输入密码，然后点击"连接"。

:::note
reTerminal E Series ePaper Display 系列仅支持 2.4GHz WiFi 网络，不支持 5GHz 或其他频段。
:::

**步骤 4.** 连接成功后，设备将发出确认提示音并显示配对码屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### 连接到 SenseCraft 平台

**步骤 1.** 在您的网络浏览器中访问 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 并创建账户或登录。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**步骤 2.** 导航到**工作区**部分并点击**添加设备**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 为您的设备命名，输入设备屏幕上显示的配对码，然后点击**创建**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**步骤 4.** 配对完成后，设备将显示提示您创建第一个仪表板的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

增加个Template的下载作为第一个示例。

## 创建仪表板

reTerminal E1002 与 SenseCraft HMI 平台无缝集成，该平台为您的设备提供了强大的内容创建和自定义工具。我们不在这里详细介绍逐步操作，而是探索平台的关键功能，帮助您了解可能的应用。

### SenseCraft HMI 功能

**AI 生成器**

让人工智能为您设计仪表板！只需描述您想要显示的信息，AI 生成器将自动创建一个美观、实用的布局。这非常适合快速生成天气显示、日历、待办事项列表或信息面板，无需手动设计工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**图库**

使用图库功能将您的 reTerminal E1002 转换为数字相框。上传您喜爱的图片，平台将为电子纸显示屏优化它们。创建具有自定义过渡时间的幻灯片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/13.png" style={{width:1000, height:'auto'}}/></div>

**画布**

使用画布从头开始设计您的仪表板，这是一个拖放界面，提供各种元素：
- 可自定义字体和大小的文本块
- 图像占位符
- 时间、日期和天气小部件
- 数据可视化工具
- 用于布局组织的形状和分隔符

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/14.png" style={{width:1000, height:'auto'}}/></div>

**RSS 订阅集成**

通过向您的仪表板添加 RSS 订阅，随时了解您喜爱的新闻源、博客或网站的最新动态。RSS 功能允许您显示来自多个源的标题、摘要或完整文章。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/15.png" style={{width:1000, height:'auto'}}/></div>

**网页内容显示**

在您的设备上捕获和显示特定的网页内容。网页功能可以渲染网站的选定部分，允许您显示诸如交通时刻表、股票行情或其他在线数据源等信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/22.png" style={{width:1000, height:'auto'}}/></div>

### SenseCraft HMI 入门

按照前一节中描述的方式将您的设备与 SenseCraft 平台配对后，您就可以创建您的第一个仪表板了。有关使用每个功能的详细说明，请参考相应的 Wiki 页面：

- [SenseCraft HMI 概述](https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview)
- [AI 生成器指南](https://wiki.seeedstudio.com/cn/sensecraft_hmi_ai_generation)
- [图库使用指南](https://wiki.seeedstudio.com/cn/sensecraft_hmi_gallery)
- [画布设计工具](https://wiki.seeedstudio.com/cn/sensecraft_hmi_canvas)
- [RSS 订阅配置](https://wiki.seeedstudio.com/cn/sensecraft_hmi_rss)
- [网页内容显示](https://wiki.seeedstudio.com/cn/sensecraft_hmi_web)

在 SenseCraft 平台中创建并保存您的仪表板后，只需点击"部署到设备"，选择您已配对的 reTerminal E1002，您的自定义内容将无线传输到设备。电子纸显示屏将更新以显示您的仪表板，如果您创建了多个页面，可以使用导航按钮在它们之间切换。

## 设备操作

### 刷新按钮

设备顶部的刷新按钮具有多种功能：

- **单击**：手动刷新显示并检查来自 SenseCraft 平台的新内容。蜂鸣器会响一声以确认操作。此按钮也常用于唤醒设备。当设备进入睡眠状态且仪表板刷新命令无法立即传达到设备时，您可以使用此按钮唤醒设备。

- **长按**（未来功能）：将激活语音输入模式。

### 导航按钮

左右按钮允许您在仪表板包含多个页面时在页面之间导航：

- **左按钮**：导航到上一页

- **右按钮**：导航到下一页

### 网络重置

如果您需要连接到不同的 Wi-Fi 网络：

**步骤 1.** 同时按住两个导航按钮（左和右）2 秒钟。

**步骤 2.** 设备将进入 Wi-Fi 配置模式，您可以再次按照"网络设置"步骤连接到新网络。

### LED 指示灯

- **红色 LED**：
  - 熄灭：已充满电或未充电
  - 常亮：正在充电

- **绿色 LED**：
  - 启动时亮 30 秒：设备正在开机

### 电池操作

使用电池供电时：

- 设备将在刷新间隔期间自动进入低功耗模式

- 电池寿命取决于刷新频率（在默认设置下，充满电通常可使用数周）

- 当电池电量低于 20% 时，设备将在右上角显示低电量图标

### 扩展引脚

reTerminal E1002 具有 8 针扩展接头，提供：
- 电源 (VDD)
- 接地 (GND)
- I2C 接口
- GPIO 引脚

这些扩展引脚允许您连接额外的传感器、执行器或其他硬件来扩展设备功能。当您需要添加超出 reTerminal E1002 内置功能的硬件能力时，可以在自定义开发项目中使用它们。

## 设备放置

reTerminal E1002 配有支撑架配件，允许您将设备直立放置以获得最佳观看效果：

**步骤 1.** 找到包装中包含的支撑架。

**步骤 2.** 将支撑架插入 reTerminal E1002 底部背面的指定插槽中。

**步骤 3.** 调整支撑架的角度以达到您偏好的观看位置。

支撑架允许设备放置在桌子、台面或架子上，使其非常适合在各种环境中用作信息显示器或数字相框。

## 故障排除

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线缆为设备充电
- 检查红色 LED 是否常亮（表示正在充电）
- 如果使用电池供电，确保电池正确连接且已充电

### Q2：无法连接到 Wi-Fi

- 验证您输入的 Wi-Fi 密码是否正确
- 确保您的 Wi-Fi 网络正常运行
- 检查您的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示不更新

- 按下刷新按钮手动触发更新
- 验证设备已连接到 Wi-Fi（角落没有断开连接图标）
- 检查您的 SenseCraft 账户以确保仪表板已正确部署
- 如果问题持续存在，尝试重启设备

### Q4：网络连接丢失

- 设备将自动尝试重新连接到已知网络
- 重新连接后，Wi-Fi 断开连接图标将消失
- 如果无法重新连接，请按照上述网络重置程序操作

## 资源

- [reTerminal E1002 原理图 (PDF)](/cn/getting_started_with_reterminal_e1002)
- [ESP32S3 数据手册](/cn/getting_started_with_reterminal_e1002)
- [SenseCraft HMI 平台文档](https://wiki.seeedstudio.com/cn/sensecraft_hmi_overview)
- [GitHub 仓库](/cn/getting_started_with_reterminal_e1002)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>