---
description: reTerminal E1003 是一款 10.3 英寸开源黑白电子纸显示屏，具备 16 级灰度和 1404×1872 像素的高分辨率，在 HMI 固件 v1.1.2 上支持触控交互。
sku: 100090602
title: reTerminal E1003 入门指南
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
last_update:
  date: 3/19/2026
  author: Jackson.Li
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1003/
updatedAt: '2026-03-31'
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
触控相关的库支持计划在未来开源发布，以提供更高的面板自定义灵活性。更多更新将很快与大家分享。


reTerminal E1003 的 ESPHome 支持正在开发中，将在未来版本中提供。
:::
### 特性

- **最高 16 级灰度清晰度：** 拥有 16 级精细灰度，文本和图形的每一个细节都能以极高的锐度和清晰度呈现。
- **超低功耗：** 电子纸仅在刷新时消耗电能，从而实现更长的电池寿命和更高的能效。
- **SenseCraft HMI 支持：** reTerminal E 系列显示屏在默认固件中支持 SenseCraft HMI。
- **广泛的应用场景：** 通过 TTL 并行接口（多线、高吞吐）支持高速刷新，实现低延迟更新——是智能家居控制面板的理想选择。
- **高分辨率触控电子纸显示屏：** 10.3 英寸 1404×1872 黑白电子纸显示屏配备内置响应式触摸屏，目前在 SenseCraft HMI 固件 v1.1.2 上支持触控交互。
- **适配多样化装饰需求：** 无线布置带来更大自由度；支持壁挂和桌面放置，并可灵活切换横屏和竖屏方向。



### 规格参数

| 项目 | 描述 |
| :--- | :--- |
| **产品名称** | reTerminal E1003 |
| **处理器** | ESP32-S3，带 8MB PSRAM |
| **存储** | 32MB Flash，支持 Micro SD 卡 |
| **显示** | 10.3" 黑白 / 16 级灰度 |
| **分辨率** | 1404x1872 像素 |
| **Micro SD 卡** | 最大支持 32GB SD 卡，FAT32 格式 |
| **无线连接** | 2.4GHz 802.11 b/g/n Wi-Fi，Bluetooth 5.0 |
| **传感器** | 温度、湿度传感器 |
| **麦克风** | 预留用于语音交互应用 |
| **音频** | 蜂鸣器用于声音提醒 |
| **电池** | 3000mAh |
| **电源输入** | USB-C 5V/1A |
| **软件支持** | 默认固件支持 SenseCraft HMI(https://sensecraft.seeed.cc/hmi/)<br />支持 Arduino/PlatformIO 开发平台 |
| **工作温度** | 0-40°C |
| **尺寸** | 224mm*187mm*18.6mm |

### 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **屏幕刷新按键**
2. **翻页按键（上一页/下一页）**
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

- **家庭自动化仪表盘：** 通过 Home Assistant 显示温度、湿度和空气质量等智能家居实时数据（E1003 的 ESPHome 驱动支持计划在未来版本中推出）。
- **低功耗黑白电子相框：** 借助 SenseCraft HMI 或 App，你可以轻松在线远程上传相册中的一系列照片。配合大尺寸、高分辨率的黑白电子墨水屏，实现超低功耗的图像显示，再也不用担心电池续航。
- **智能办公显示屏：** 在低功耗、常亮的电子纸显示屏上显示会议室使用情况、办公日程或指引信息。
- **零售与公共信息显示：** 用于菜单、时刻表或占用状态指示的低功耗电子纸标牌，具备长续航能力。

## 搭配 SenseCraft HMI 使用入门

reTerminal E1003 预装了支持 **SenseCraft HMI** 的固件，这是一个零代码平台，可让你轻松设计并部署个性化仪表盘。

### 步骤 1. 开机与网络配置

1. 打开 **电源按键** 以启动 reTerminal E1003。
2. 使用你的智能手机连接设备的热点（AP 模式），以配置 Wi-Fi 凭据。
3. 屏幕会显示一个“网络配置”二维码，或者在浏览器中打开 192.168.4.1 页面。
4. 连接到互联网后，设备会显示 **设备码（Device Code）** 或 **绑定二维码（Binding QR Code）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### 步骤 2. 绑定设备

1. 在电脑浏览器中访问 [SenseCraft HMI 平台](https://sensecraft.seeed.cc/)。
2. 登录你的账号（如果还没有，请先创建一个）。
3. 进入 **设备管理（Device Management）** 部分并点击 **添加设备（Add Device）**。
4. 输入显示在 reTerminal E1003 屏幕上的 **设备码（Device Code）** 以完成绑定流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 在平台上创建内容

1. 前往 **首页（Home Page）** 选择你想要的模板，或进入 **工作区（Workspace）** 从零开始创建你的作品。
2. [如果你在使用 HMI 平台时有疑问，请点击此链接了解更多使用方法。](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### 步骤 4. 将内容部署到设备

1. 当你的设计完成后，点击 **预览（Preview）** 按钮检查显示效果。
2. 点击 **保存（Save）** 或 **部署（deploy）** 按钮。
3. 从列表中选择你已绑定的 reTerminal E1003。
4. 平台会通过 Wi-Fi 将数据发送到你的设备，电子纸屏幕会刷新以显示你的新仪表盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## 故障排查

### Q1：设备无法开机

- 确保电源开关处于 ON 位置
- 连接 USB-C 线缆为设备充电
- 检查红色指示灯是否常亮（表示正在充电）
- 如果使用电池供电，请确保电池连接正确且已充电

### Q2：无法连接 Wi-Fi

- 确认你输入了正确的 Wi-Fi 密码
- 确保你的 Wi-Fi 网络工作正常
- 检查你的 Wi-Fi 路由器是否支持 2.4GHz 网络（不支持 5GHz）
- 尝试将设备放置在更靠近 Wi-Fi 路由器的位置

### Q3：显示不更新

- 按下刷新按键手动触发一次更新
- 确认设备已连接到 Wi-Fi（角落中没有断网图标）
- 检查你的 SenseCraft 账号，确保仪表盘已正确部署
- 如果问题仍然存在，尝试重启设备
- 如果重启后设备仍无响应，请在 SenseCraft HMI 平台上重新烧录对应固件，并检查设备是否可以正常刷新

### Q4：网络连接丢失

- 设备会自动尝试重新连接已知网络
- 重新连接成功后，Wi-Fi 断开图标会消失
- 如果无法重新连接，请按照上文的网络重置步骤操作

### Q5：在 macOS 上找不到串口（COM）

如果你的 Mac 无法通过 USB 识别 reTerminal，请按照这份简要指南安装 CH340/CH340K 驱动：

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
确保设备的**电源开关已打开**，并使用**数据传输型 USB-C 线缆**（而非仅充电线）。打开终端并运行：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

如果你在输出中看到了设备路径，说明驱动已正确安装，你的 reTerminal 已经可以使用了！

## 资源

- [reTerminal E1003 原理图 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

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
