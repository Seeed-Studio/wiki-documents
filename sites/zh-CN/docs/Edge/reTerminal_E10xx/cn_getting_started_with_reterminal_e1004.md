---
description: reTerminal E1004 是一款 13.3 英寸开源全彩电子纸显示器，基于 ESP32-S3 驱动，采用 E Ink® Spectra™ 6 技术，并支持 SenseCraft HMI。
title: reTerminal E1004 入门指南
sidebar_position: 5
keywords:
  - reTerminal E1004
  - 电子纸显示屏
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - 智能家居仪表盘
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
createdAt: '2026-01-29'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1004/
---
# reTerminal E1004 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

reTerminal E1004 是一款 13.3 英寸开源全彩电子纸显示器，单次充电电池续航最长可达 6 个月。其由 ESP32-S3 提供算力，原生支持我们的 SenseCraft HMI 零代码 UI 平台，可轻松创建仪表盘，同时也支持 Home Assistant、Arduino 和 ESP-IDF 进行进一步开发。凭借 E Ink® Spectra™ 6 全彩电子纸显示技术，它非常适合作为数码相框、多彩仪表盘可视化设备。

### 特性

- **高清彩色显示：** 13.3 英寸 E Ink® Spectra™ 6 全彩电子纸显示屏，分辨率高达 1200x1600 像素。
- **强大处理能力：** 由 ESP32-S3 驱动，配备 8MB PSRAM 和 32MB Flash，性能强劲。
- **超低功耗：** 内置 5000mAh 电池，单次充电可支持最长 6 个月使用（每 6 小时刷新一次）。
- **零代码 UI 开发：** 默认固件支持 SenseCraft HMI，可通过拖拽方式创建仪表盘，并支持 AI 辅助设计。
- **广泛兼容性：** 支持 Home Assistant（ESPHome）、Arduino、PlatformIO 和 ESP-IDF。
- **丰富连接性：** 集成 2.4GHz Wi-Fi（802.11 b/g/n）和 Bluetooth 5.0。
- **集成传感器与音频：** 内置温湿度传感器和用于告警的蜂鸣器。
- **即用型存储：** 随机附带 16GB Micro SD 卡（最高支持 32GB）。

## 规格参数

| 项目 | 描述 |
| :--- | :--- |
| **产品名称** | reTerminal E1004 |
| **处理器** | ESP32-S3，带 8MB PSRAM |
| **存储** | 32MB Flash，支持 Micro SD 卡（最高 32GB，内含 16GB） |
| **显示屏** | 13.3" Spectra™ 6 全彩电子纸 |
| **分辨率** | 1200 x 1600 像素 |
| **无线连接** | 2.4GHz 802.11 b/g/n Wi-Fi，Bluetooth 5.0 |
| **传感器** | 温度、湿度传感器 |
| **音频** | 蜂鸣器（声音告警） |
| **电池** | 5000mAh |
| **电源输入** | USB-C 5V/1A |
| **软件支持** | SenseCraft HMI（默认）、ESPHome、Arduino、PlatformIO、ESP-IDF |
| **工作温度** | 0-40°C |
| **尺寸** | 376mm x 311mm x 40mm |

## 应用场景

- **低功耗电子相框：** 以纸张般的显示效果呈现高分辨率家庭照片或艺术作品，无需担心每日充电。
- **家庭信息看板：** 以时尚、类永远在线的形式展示日历、通知、天气和新闻。
- **家庭自动化仪表盘：** 通过 Home Assistant 可视化实时智能家居数据（温度、湿度、空气质量）。
- **智能办公显示：** 显示会议室日程、使用状态或指引信息。
- **零售与公共标牌：** 用于菜单、时刻表或占用状态指示的节能显示方案。
- **教育与原型开发：** 学习物联网、嵌入式系统和 UI 设计的理想平台。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **上下翻页按键：** 用于导航和翻页。
2. **屏幕刷新按键：** 用于手动刷新电子墨水屏。
3. **红色电源指示灯：** 指示设备电源状态。
4. **USB-C 数据与充电接口：** 用于给设备充电和进行数据传输。
5. **电源开关：** 用于打开或关闭设备电源。
6. **绿色状态指示灯：** 指示当前运行或系统状态。
7. **Boot：** 用于系统启动或进入启动模式。
8. **Reset：** 用于重置硬件组件。
9. **扩展接口：** 用于连接外部扩展模块或外设。
10. **支架安装螺丝：** 用于将设备固定在支架上。
11. **金属支架：** 为设备提供物理支撑和稳定性。

## 搭配 SenseCraft HMI 入门

reTerminal E1004 预装了支持 **SenseCraft HMI** 的固件，这是一个零代码平台，可让你轻松设计并部署个性化仪表盘。

### 步骤 1. 开机与网络配置

1. 打开 **电源按键** 以启动 reTerminal E1004。
2. 使用你的智能手机连接设备的热点（AP 模式），以配置 Wi-Fi 凭据。
3. 屏幕会显示一个“Network Configuration”二维码，或者在浏览器中打开 192.168.4.1 页面。
4. 连接到互联网后，设备会显示 **Device Code** 或 **Binding QR Code**。

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### 步骤 2. 绑定设备

1. 在电脑浏览器中访问 [SenseCraft HMI Platform](https://sensecraft.seeed.cc/)。
2. 登录你的账号（如果没有账号，请先创建一个）。
3. 进入 **Device Management** 部分并点击 **Add Device**。
4. 输入显示在 reTerminal E1004 屏幕上的 **Device Code** 以完成绑定流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 在平台上创建内容

1. 前往 **Home Page** 选择你想要的模板，或进入 **Wrokspace** 从头开始创建你的作品。
2. [如果你在使用 HMI Platform 时有疑问，请点击此链接了解更多使用方法。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 将内容部署到设备

1. 设计完成后，点击 **Preview** 按钮预览效果。
2. 点击 **Save** 或 **deploy** 按钮。
3. 从列表中选择你已绑定的 reTerminal E1004。
4. 平台会通过 Wi-Fi 将数据发送到你的设备，电子纸屏幕会刷新以显示新的仪表盘。

:::note
由于 E Ink 技术的特性，屏幕刷新可能需要几秒钟才能完全更新图像并清除残影。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## 故障排查

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线缆为设备充电
- 检查红色 LED 是否常亮（表示正在充电）
- 如果使用电池供电，请确保电池连接正确且已充电

### Q2：无法连接 Wi-Fi

- 确认你输入了正确的 Wi-Fi 密码
- 确保你的 Wi-Fi 网络工作正常
- 检查你的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示不更新

- 按下刷新按键以手动触发更新
- 确认设备已连接到 Wi-Fi（右上角没有断网图标）
- 在你的 SenseCraft 账号中检查仪表盘是否已正确部署
- 如果问题仍然存在，请尝试重启设备
- 如果重启后设备仍无响应，请在 SenseCraft HMI 平台上重新烧录对应固件，并检查设备是否可以正常刷新

### Q4：网络连接丢失

- 设备会自动尝试重新连接已知网络
- 重新连接成功后，Wi-Fi 断开图标会消失
- 如果仍无法重新连接，请按照上文的网络重置步骤操作

### Q5：在 macOS 上找不到串口（COM）

如果你的 Mac 无法通过 USB 识别 reTerminal，请按照以下简要指南安装 CH340/CH340K 驱动：

**步骤 1. 下载并安装驱动**
从 [官方 WCH 页面](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) 下载驱动并运行 `CH34xVCPDriver.pkg`。 
:::tip
如果 macOS 阻止安装，请前往 **System Settings → Privacy & Security**，向下滚动找到被阻止的 WCH 软件，然后点击 **Allow**。
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**步骤 2. 启用驱动扩展（关键）**
从 Launchpad 打开 **CH34xVCPDriver** 应用，点击 **Install**，然后前往 **System Settings → General → Login Items & Extensions → Driver Extensions**。将 **CH34xVCPDriver Extensions** 切换为 **ON**（蓝色）。
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**步骤 3. 连接并验证**
确保设备 **电源开关已打开**，并使用 **数据 USB-C 线缆**（非仅充电线）。打开 Terminal 并运行：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

如果你在输出中看到设备路径，则说明驱动程序已正确安装，你的 reTerminal 已经可以使用了！

## 资源

- [reTerminal E1004 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
