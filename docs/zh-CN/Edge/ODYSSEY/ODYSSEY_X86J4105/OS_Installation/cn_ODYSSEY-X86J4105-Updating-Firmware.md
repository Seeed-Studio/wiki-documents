---
description: ODYSSEY - X86J41x5
title: 固件升级
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Updating-Firmware
last_update:
  date: 03/16/2023
  author: Lakshantha

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl:
--- -->

本教程演示了如何为 ODYSSEY - X86 更新 BIOS 和 EC（嵌入式控制器）固件。

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意事项</p>
    <p style={{color: '#000000', fontSize: 15}}> 由于<b>Wiki 上提供的固件仅支持 J4105/J4125-V1</b>，在 J4125-V2 主板上更新 Wiki 上的 BIOS 固件将导致主板变砖。请确保您拥有正确版本的 ODYSSEY。</p>
  </div>
</div>

## 硬件需求

- 一台可用的电脑

- 一个 USB 驱动器

- 一台显示器

- 一个键盘

## 如何升级 BIOS

BIOS 类似于操作系统，可以通过升级来修复错误并增强 ODYSSEY - X86J41x5 的性能。以下是如何在 ODYSSEY - X86J41x5 上升级 BIOS 版本的说明。

### 当前最新 BIOS 版本及更新日志

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>重要说明</p>
    <p style={{color: '#000000', fontSize: 14}}> 1. 此操作<b>会清除旧的 BIOS 设置</b>，因此您需要<b>重新激活</b>您的 Windows（如果使用 Windows）（清除激活密钥，需要联网重新激活）。<br /><br /> 2. 如果您使用的是<b>非 EMMC 版本的 ODYSSEY-X86</b>，在更新 BIOS 之前，请确保在 BIOS 设置中<b>禁用 eMMC</b>，更新前后均需禁用。</p>
  </div>
</div>

> 您可以在 BIOS 主页面中查看 BIOS 和 EC 固件的版本。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/SD-BS-CJ41G-300-101-H.jpg" /></div>

### 最新 BIOS 固件

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意事项</p>
    <p style={{color: '#000000', fontSize: 15}}> 由于<b>Wiki 上提供的固件仅支持 J4105/J4125-V1</b>，在 J4125-V2 主板上更新 Wiki 上的 BIOS 固件将导致主板变砖。请确保您拥有正确版本的 ODYSSEY。</p>
  </div>
</div>

<br />

**[SD-BS-CJ41G-300-101-K 07/26/2022 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-K.zip)**

- 提高整体稳定性。

**注意：** 如果您希望上述 BIOS 启用 **分叉功能**，请联系 techsupport@seeed.io

启用分叉功能后，您可以将 M.2 M-Key 用于 4 个 PCIe x1。这使您能够将四个不同的 PCIe x1 设备连接到 M.2，例如多个网络端口、多个 SSD 和其他扩展设备。使用不带分叉功能的普通 BIOS，M.2 M-Key 仅可用于一个 PCIe x4。

>**历史 BIOS：**

**[SD-BS-CJ41G-300-101-H 08/16/2021 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip)**

- **SHA256:** 9ea30178b4ef8453c6f24f037b4b3352ac6d214c7c22f94985428bcb23a178c2

- 提高整体稳定性。

> **[SD-BS-CJ41G-300-101-F 04/16/2021 01:20:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-F.zip)**

> - **SHA256:** 53711DBF9FB6ABE564BE1C7A870840F8B87CAA42239448869D87C08C1BDF0EC5

>    1. 提高整体稳定性。

> **[SD-BS-CJ41G-300-101-C 03/11/2021 16:28:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-C.zip)**

> - **SHA256:** 12f4ce1ab81008525138fcd7d830e18dc13936f3ce4a51e17c314fc55debe480

>    1. 修复错误：设置为加载其他操作系统时加载到非 Windows 系统。

> **[SD-BS-CJ41G-M-101-K 12/31/2020 20:34:37](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-K.zip)**

> - **SHA256:** 7208d39c4f77a4837a0a1072dce45c7bc8feba28597522ea036778a9c09aa61a

>    1. 添加 **安全启动**。
>    2. 添加 **网络唤醒**。
>    3. 修复 Linux 环境下重启进入 BIOS 设置页面的问题（例如 `systemctl reboot --firmware-setup`）。
>    4. 修复 Linux 网络唤醒灯问题。

> **[SD-BS-CJ41G-M-101-G 08/31/2020 14:01:20](http://files.seeedstudio.com/wiki/X86-BIOS/SD-BS-CJ41G-M-101-G.zip)**

> **SHA256:** eb932b69435d26a5b076c485c90e4289a697681ac092c18e85c86804e3fe4206

>1. 在 BIOS 菜单中，**Setup** -> **Chipset** -> **Fan Control**，新增了 **Always On** 选项。

>**[SD-BS-CJ41G-M-101-E 01/07/2020 14:03:11](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-E.zip)**

>**SHA256:** 98bb25d6d32250fb10bf047f5902630b82a8560020fb4336d7723b4dfb3f9df2

>1. 修复了启动时 Seeed logo 屏幕显示不完整的问题。

:::note
最新的 BIOS 支持 **自动刷新功能**，您只需将文件放置在 **FAT32 格式 USB 的根目录**，并选择 USB 驱动器作为启动选项。系统将自动进入刷新过程。
:::

### 第一步 - 下载最新版本的 BIOS

从 [**这里**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip) 下载最新版本的 BIOS。

### 第二步 - 准备可启动的 USB

就像创建用于安装操作系统的可启动 USB 一样，将 USB 格式化为 `FAT32` 文件系统。这次，只需解压下载的文件并将内容复制到 USB 中。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios-files.png
" /></div>

### 第三步 - 升级 BIOS

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>BIOS 升级后的首次启动时间会<b>相对较长</b>，请耐心等待，安装的操作系统最终会启动。这将耗时<b>大约 3 ~ 5 分钟</b>。</p>
  </div>
</div>

将 USB 插入 ODYSSEY - X86J41x5 并启动，按照以下步骤操作：

- 持续按 `F7` 键进入 **启动管理器屏幕**。选择 `UEFI: Built-in EFI Shell` 作为启动设备并按 `Enter`。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios1.jpg" /></div>

- 等待几秒钟进入 EFI shell

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios2.jpg" /></div>

- 您将看到以下信息

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios3.jpg" /></div>

- 输入 **BIOS.nsh** 并按 **ENTER** 开始更新过程

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios4.jpg" /></div>

- 如果 BIOS 更新成功，您将看到以下输出

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios5.jpg" /></div>

### 第四步 - 重启

- 当 BIOS 升级完成后，**按下开关按钮**，您应该看到蓝色指示灯熄灭。

- **拔下 DC 电源插头和 RTC 电池**。

- 等待几分钟。

- 将 RTC 电池和 DC 电源插头重新插回 ODYSSEY-X86。

- **按下开关按钮并耐心等待**。您应该看到蓝色指示灯亮起。

### 第五步 - 耐心等待

请耐心等待，**切勿**拔掉电源（或硬件），以免破坏更新过程。整个过程将耗时 **6 ~ 8 分钟**，您可以去喝杯咖啡！

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>BIOS 升级后的首次启动时间会<b>相对较长</b>，请耐心等待，安装的操作系统最终会启动。这将耗时<b>大约 6 ~ 8 分钟</b>。</p>
  </div>
</div>

## 如何更新嵌入式控制器

X86 设备也配备了一个嵌入式控制器（EC），可以进行更新。更新 EC 的过程与更新 BIOS（自动更新）相同：

1. 下载固件文件。

2. 将文件保存到 FAT32 格式的 USB 驱动器的根目录。

3. 启动 ODYSSEY-X86 并按下 **F7** 键进入 **启动选择模式**。

4. 选择连接的闪存驱动器（如果闪存驱动器有两个选项，请选择以 **UEFI** 开头的那个）。

5. 等待系统自动开始刷写过程。

6. 完成后重启设备。

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/r7M4T-HOZ20" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### 最新 EC 固件

[**SD-EC-CJ41G-M-101-R 07/26/2022 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-R.zip)

1. **修复问题**：提升整体稳定性。

>**历史 EC 固件：**

[**SD-EC-CJ41G-M-101-Q 10/12/2021 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-Q.zip)

- **SHA256:** 6009005FF61A64A580F0862343CED1E1E8B4DE8625E326510582063D6E20BCE4

1. **修复问题**：提升整体稳定性。

[**SD-EC-CJ41G-M-101-O 08/16/2021 15:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-O.zip)

> - **SHA256:** a08605b8b76bda6a50b64e64c4a9b256297d393f7139ffb2525cc93b28556f13

> 1. **修复问题**：提升整体稳定性。

> [**SD-EC-CJ41G-M-101-M 04/16/2021 01:20:07**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-M.zip)

> - **SHA256:** DB6E1F77D6EB4B9A79DDAF6E7A55052B7BE6E63B8339C7B948FF111E5C9CA8AD

> 1. **修复问题**：提升整体稳定性。

> [**SD-EC-CJ41G-M-101-K 03/23/2021 10:57:32**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-K.zip)

> - **SHA256:** 5e479185398121b1913ada3cff03264ea1522196b53f34c9ace77bd1f3ecc47e

> 1. **修复问题**：提升 EC 固件的稳定性。

> [**SD-EC-CJ41G-M-101-J 02/02/2021 15:39:11**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-J.zip)

> - **SHA256:** 4ab099f45439f8f6ec14e25ae50a64f878eed4c998e39000e17f2047df6bbb83

> 1. **修复问题**：在 BIOS 设置页面关闭设备时，ODYSSEY 需要重置电源才能重新启动。

> [**SD-EC-CJ41G-M-101-I 12/31/2020 20:34:37**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-I.zip)

> - **SHA256:** 94f664401120183238c5eaa41ea267b240dd5836fa879c568bf3275bca508c52

> 1. 优化风扇控制逻辑。

>**[SD-EC-CJ41G-M-101-C 08/31/2020 14:01:20](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-C.zip)**

>- **SHA256:** 4b7ed82357eb608c3ec00f6f5f0358a35e63b327ae33855eb5e7608814f8df6a

> 1. 优化风扇启动和关闭温度不正确的问题。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>