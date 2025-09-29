---
description: reServer X86
title: 升级 BIOS 和安装驱动程序
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reServer-Update-BIOS-Install-Drivers
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: Upgrading BIOS and Installing Drivers
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>重要说明</p>
    <p style={{color: '#000000', fontSize: 14}}> 这会<b>清除旧的 BIOS 设置</b>，因此您需要<b>重新激活</b>您的 Windows（如果使用 Windows）（清除激活密钥，需要互联网连接才能再次激活）。<br /></p>
  </div>
</div>

## 升级 BIOS

建议保持您的 reServer BIOS 固件为最新版本，以获得最佳性能和所有错误修复。请按照以下步骤升级 BIOS

### 最新 BIOS 固件

**[ODYSSEY-TGL-A_v2.0a 7/7/2022 16:00:00](https://files.seeedstudio.com/wiki/reServer/ODYSSEY-TGL-A_v2.0a.zip)**

- **SHA256:** 02CC2C24E615EE2665CCCF79257709433D69C5B80326FB6DB12D0341DAC2E5F5

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-main.png" /></div>

### 升级步骤

- **步骤 1.** 将闪存驱动器格式化为 FAT32

- **步骤 2.** 解压 **ODYSSEY-TGL-A_v1.7a.zip**

- **步骤 3.** 将 ODYSSEY-TGL-A_v1.1a 中包含的 3 个文件复制到闪存驱动器的根目录

- **步骤 4.** 如果 reServer 已经开启，请关闭它

- **步骤 5.** 将闪存驱动器插入 reServer

- **步骤 6.** 开启 reServer，然后按 **DELETE** 键进入 BIOS 设置

- **步骤 7.** 选择 **Save & Exit -> Boot Override -> UEFI:Built-in EFI shell**，然后按 **ENTER**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-EFI-start.png" /></div>

- **步骤 8.** 主板将进入 shell 环境（只需等待，不要做任何操作）

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-2.jpg" /></div>

- **步骤 9.** 输入 **fs0:**

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-3.jpg" /></div>

- **步骤 10.** 输入 **dir**，确保文件正确。如果不正确，尝试输入 **fs1:** 或 **fs2:** 或 **fs3:** 然后输入 **dir** 来列出内部文件

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/dir-1.png" /></div>

- **步骤 11.** 输入 **update.nsh** 来刷新 BIOS

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update.nsh.png" /></div>

- **步骤 12.** 如果 BIOS 更新成功，您将看到以下消息

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-6.jpg" /></div>

- **步骤 13.** 按电源按钮关闭主板

- **步骤 14.** 从主板上拔掉 DC 电源和 CMOS 电池

- **步骤 15.** 等待几分钟

- **步骤 16.** 将 DC 电源和 CMOS 电池重新插回主板

- **步骤 17.** 最后再次按电源按钮开启主板

- **步骤 18.** 请耐心等待，**不要**拔掉电源（或硬件）以免损坏更新过程。该过程需要 6 ~ 8 分钟，可以休息一下喝杯咖啡！

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>从 BIOS 升级后的首次启动<b>相对较长</b>，请耐心等待，已安装的操作系统最终会启动。大约需要<b>6 ~ 8 分钟</b>。</p>
  </div>
</div>

## 安装驱动程序

如果您在 reServer 上使用 Windows，建议安装相关驱动程序以获得更好的系统功能。

驱动程序包括：

- Realtek 高清音频驱动程序
- Intel® 芯片组设备软件
- Intel® 显卡驱动程序
- Intel® HID 事件过滤器驱动程序
- Intel® 融合安全和管理引擎驱动程序
- Intel® 串行 IO 主机控制器驱动程序
- WiFi 驱动程序
- 以太网驱动程序
- 蓝牙驱动程序

请按照以下步骤安装上述驱动程序

- **步骤 1.** 下载[此文件](https://files.seeedstudio.com/wiki/reServer/reServer-Drivers.zip)并解压 **reServer-drivers.zip** 文件

- **步骤 2.** 继续执行以下步骤

### Realtek 高清音频驱动程序

- **步骤 1.** 解压 **audio_realtek_6.0.9057.1_w1064.zip**

- **步骤 2.** 打开 **audio_realtek_6.0.9057.1_w1064**

- **步骤 3.** 双击 **Setup.exe**

### Intel® 芯片组设备软件

- **步骤 1.** 解压 **chipset-10.1.18460.8229-public-mup.zip**

- **步骤 2.** 打开 **1_chipset-10.1.18460.8229-public-mup**

- **步骤 3.** 双击 **SetupChipset.exe**

### Intel® 显卡驱动程序

- **步骤 1.** 解压 **Graphics Driver.zip**

- **步骤 2.** 双击 **igfx_win_101.1069.exe**

### Intel® HID 事件过滤器驱动程序

- **步骤 1.** 解压 **Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified.zip**

- **步骤 2.** 导航到 `Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified > Installer`

- **步骤 3.** 双击 **Setup.exe**

### Intel® 融合安全和管理引擎驱动程序

- **步骤 1.** 解压 **intel_(r)_csme_15.0.0.1318v3_b0_cons.zip**

- **步骤 2.** 导航到 `4_intel_(r)_csme_15.0.0.1318v3_b0_cons > intel_(r)_csme_15.0.0.1318v3_b0_cons > MEI-Only Installer MSI`

- **步骤 3.** 双击 **MEISetup.exe**

### Intel® 串行 IO 主机控制器驱动程序

- **步骤 1.** 解压 **SerialIO-Win10-30.100.2129.8.zip**

- **步骤 2.** 双击 **SetupSerialIO.exe**

### WiFi 驱动程序

- **步骤 1.** 解压 **WiFi-22.90.0-Driver64-Win10-Win11.zip**

- **步骤 2.** 双击 **WiFi-22.90.0-Driver64-Win10-Win11.exe**

### 以太网驱动程序

- **步骤 1.** 解压 **Wired_driver_26.6_x64.zip**

- **步骤 2.** 双击 **Wired_driver_26.6_x64.exe**

### 蓝牙驱动程序

- **步骤 1.** 解压 **Wireless Bluetooth.zip**

- **步骤 2.** 双击 **BT-22.90.2-32-64UWD-Win10-Win11.exe**

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
