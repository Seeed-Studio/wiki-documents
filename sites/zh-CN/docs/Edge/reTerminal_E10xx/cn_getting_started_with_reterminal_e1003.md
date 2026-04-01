---
description: reTerminal E1003 是一款 10.3 英寸开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素的高分辨率，在 HMI 固件 v1.1.2 上支持触控交互。
sku: 100090602
title: reTerminal E1003 入门指南
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
last_update:
  date: 3/19/2026
  author: Jackson.Li
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1003/
updatedAt: '2026-03-25'
---

# reTerminal E1003 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

reTerminal E1003 是一款 10.3 英寸开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素的高分辨率，电池续航最长可达 6 个月。目前在 SenseCraft HMI 固件 v1.1.2 上支持触控交互。其由 ESP32-S3 驱动，原生支持我们的 SenseCraft HMI 零代码 UI 平台，可轻松创建仪表盘，同时也支持 Arduino 和 PlatformIO 进行进一步开发。针对 Home Assistant（通过 ESPHome 和 Open Display）的支持计划在未来版本中推出。无论是智能家居仪表盘可视化与控制、办公信息显示，还是教育项目，这款开箱即用的设备都能提供出色的显示效果和灵活的自定义能力，满足你的各种需求。

:::tip
reTerminal E1003 的触控交互自 SenseCraft HMI 固件 v1.1.2 起开始支持。
触控相关的库支持计划在未来开源发布，以提供更大的面板自定义灵活性。更多更新将很快与大家分享。


reTerminal E1003 的 ESPHome 支持正在开发中，将在未来版本中提供。
:::
### 特性

- **最高 16 级灰度清晰度：** 拥有 16 级精细灰度，文本和图形的每一个细节都能被极为清晰锐利地呈现。
- **超低功耗：** 电子纸仅在刷新时消耗电能，从而带来更长的电池寿命和更高的能效。
- **SenseCraft HMI 支持：** reTerminal E 系列显示屏在默认固件中支持 SenseCraft HMI。
- **广泛的应用场景：** 通过 TTL 并行接口（多线、高吞吐）支持高速刷新和低延迟更新——是智能家居控制面板的理想选择。
- **高分辨率触控电子纸显示屏：** 10.3 英寸 1404×1872 黑白电子纸显示屏配备内置灵敏触摸屏，目前在 SenseCraft HMI 固件 v1.1.2 上支持触控交互。
- **适应装饰需求：** 无需布线，使用更自由；支持壁挂和桌面放置，并可灵活切换横屏和竖屏方向。



### 规格

| Item | Description |
| :--- | :--- |
| **Product Name** | reTerminal E1003 |
| **Processor** | ESP32-S3 with 8MB PSRAM |
| **Storage** | 32MB Flash, support Micro SD card |
| **Display** | 10.3" Monochrome/ 16-level Grayscale |
| **Resolution** | 1404x1872 Pixels |
| **Micro SD Card** | Maximum support 32GB SD card, FAT32 format |
| **Wireless Connectivity** | 2.4GHz 802.11 b/g/n Wi-Fi, Bluetooth 5.0 |
| **Sensors** | Temperature, humidity sensors |
| **Microphone** | Reserved for voice interaction application |
| **Audio** | Buzzer for sound alert |
| **Battery** | 3000mAh |
| **Power Input** | USB-C 5V/1A |
| **Software Support** | Default firmware support SenseCraft HMI(https://sensecraft.seeed.cc/hmi/)<br />Support Arduino/PlatformIO development platform |
| **Working Temperature** | 0-40°C |
| **Dimensions** | 224mm*187mm*18.6mm |

### 硬件总览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **屏幕刷新按键**
2. **上下翻页按键**
3. **Wi-Fi 天线区域**
4. **MicroSD 卡/TF 卡接口**
5. **电源开关**
6. **红色电源指示灯**
7. **绿色状态指示灯**
8. **USB-C 数据与充电接口**
9. **扩展接口**
10. **支架安装螺丝孔**
11. **支架**
12. **支架安装螺丝**

### 应用场景

- **家庭自动化仪表盘：** 通过 Home Assistant 显示实时智能家居数据，如温度、湿度和空气质量（针对 E1003 的 ESPHome 驱动支持计划在未来版本中推出）。
- **低功耗黑白电子相框：** 借助 SenseCraft HMI 或 App，你可以轻松地从相册中远程在线上传一系列照片。配合大尺寸、高分辨率的黑白电子墨水屏，实现超低功耗的图像显示，再也不用担心电池续航。
- **智能办公显示屏：** 在低功耗、类永亮的电子纸显示屏上显示会议室占用情况、办公日程或指引信息。
- **零售与公共信息显示：** 用于菜单、时刻表或占用指示的低功耗电子纸标牌，具备长续航能力。

## SenseCraft HMI 入门

reTerminal E1003 预装了支持 **SenseCraft HMI** 的固件，这是一个零代码平台，可让你轻松设计并部署个性化仪表盘。

### 步骤 1. 开机与网络配置

1. 打开 **电源按键** 以启动 reTerminal E1003。
2. 使用你的智能手机连接到设备的热点（AP 模式），以配置 Wi-Fi 凭据。
3. 屏幕会显示一个“Network Configuration”二维码，或者在浏览器中打开 192.168.4.1 页面。
4. 连接到互联网后，设备将显示 **Device Code** 或 **Binding QR Code**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### 步骤 2. 绑定设备

1. 在电脑浏览器中访问 [SenseCraft HMI Platform](https://sensecraft.seeed.cc/)。
2. 登录你的账号（如果还没有账号，请先创建一个）。
3. 进入 **Device Management** 部分并点击 **Add Device**。
4. 输入显示在 reTerminal E1003 屏幕上的 **Device Code** 以完成绑定流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 在平台上创建内容

1. 前往 **Home Page** 选择你想要的模板，或进入 **Workspace** 从零开始创建你的作品。
2. [如果你有疑问，请点击此链接了解如何使用 HMI Platform。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 将内容部署到设备

1. 当你的设计准备就绪后，点击 **Preview** 按钮查看效果。
2. 点击 **Save** 或 **deploy** 按钮。
3. 从列表中选择你已绑定的 reTerminal E1003。
4. 平台会通过 Wi-Fi 将数据发送到你的设备，电子纸屏幕会刷新以显示你的新仪表盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## 故障排查

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线缆为设备充电
- 检查红色指示灯是否常亮（表示正在充电）
- 如果使用电池供电，请确保电池连接正确且已充电

### Q2：无法连接到 Wi-Fi

- 确认你输入了正确的 Wi-Fi 密码
- 确保你的 Wi-Fi 网络工作正常
- 检查你的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示不更新

- 按下刷新按键手动触发一次更新
- 确认设备已连接到 Wi-Fi（角落中没有断网图标）
- 在你的 SenseCraft 账号中检查仪表盘是否已正确部署
- 如果问题仍然存在，尝试重启设备
- 如果设备在重启后仍无响应，请在 SenseCraft HMI 平台上重新烧录对应固件，并检查设备是否可以正常刷新

### Q4：网络连接丢失

- 设备会自动尝试重新连接已知网络
- 重新连接后，Wi-Fi 断开图标会消失
- 如果无法重新连接，请按照上文的网络重置步骤操作

## 资源

- [reTerminal E1003 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
