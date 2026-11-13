---
description: 使用物理按键、MUI 和 Base UI、蓝牙配对、消息、GNSS 和 microSD 地图，开始体验 SenseCAP MeshPager X2 系列。
title: Meshtastic 入门指南
keywords:
  - MeshPager X2 系列
  - Meshtastic
slug: /x2_get_started_for_meshtastic
sidebar_position: 1
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-08-28'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/cn/x2_get_started_for_meshtastic/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SenseCAP MeshPager X2 系列通过物理按键操作两个 Meshtastic 界面：**MUI**（带有图形页面和地图）和 **Base UI**（信息屏幕和菜单）。

有关规格、连接器和引脚分配，请参阅 [SenseCAP MeshPager X2 系列简介](/cn/meshpager_x2_intro/)。

:::caution 上电前
连接与工作频段匹配的 LoRa 天线。使用指定的 X2 电池，其额定充电电压为 **4.4 V**；额定最大充电电压为 4.2 V 的电芯不适用。
:::

## 刷写固件

如果已安装固件，请继续阅读 [入门指南](/cn/x2_get_started_for_meshtastic/#入门指南)。

1. 使用 USB 数据线将 X2 连接到电脑。
2. 在支持 Web Serial 的浏览器（如桌面版 Chrome 或 Edge）中打开 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。
3. 打开 **Select Target Device**，查找 **Seeed MeshPager X2**。如果可用，选择它并选择兼容的固件版本。
4. 点击 **Flash**，并按照提示进入下载模式并选择 X2 当前的 USB 端口。在编程完成前保持 USB 连接。

:::info 如果列表中没有 X2
在编写本指南时，公共 Web Flasher 的设备列表中尚未包含 X2。如果你找不到 **Seeed MeshPager X2**，请使用 X2 出厂镜像并按照[使用 esptool 手动安装固件](/cn/x2_get_started_for_meshtastic/#使用-esptool-手动安装固件)操作。不要为 X2 选择其他设备型号。
:::

要强制 X2 进入固件刷写模式，**同时按住 Power 和 Return 键**，然后**插入 USB 线**。保持两个按键按下 **1 秒** 后再松开。

要刷写已下载的 X2 `.factory.bin`，请参阅[使用 esptool 手动安装固件](/cn/x2_get_started_for_meshtastic/#使用-esptool-手动安装固件)。

:::caution 仅使用 X2 固件
使用 **Seeed MeshPager X2**（`seeed_meshpager_x2`）的固件，并遵循镜像附带的说明。仅在需要时启用完全擦除，并先备份你的设置。
:::

## 入门指南

### 开机与导航

1. 将稳压的 **5 V USB 电源**连接到 USB-C 接口为电池充电。
2. 使用 **Power** 键启动 X2。要离开仅充电界面，先松开 Power，然后再次按住约 **5 秒**。
3. 等待 Base UI 或 MUI 加载完成。

在连接 USB 的情况下关机，可能会使 X2 返回到仅充电界面。

#### 强制重启

要强制 X2 重启，**按下 Power 并同时插入已供电的 USB-C（Type-C）线缆**。

### 按键控制

| 按键 | Base UI | MUI |
| --- | --- | --- |
| 上 / 下 | 浏览菜单项、节点或消息线程。从主界面进入消息编辑器。 | 高亮导航图标或控件。 |
| 左 / 右 | 切换信息屏幕或在键盘按键之间移动。 | 右键进入高亮页面。在页面内切换选项卡、调节滑块或在键盘按键之间移动。 |
| 确认（左侧橙色键） | 打开当前屏幕的菜单或选择项目。 | 激活高亮项目。 |
| 长按确认 | 在支持的情况下，运行所选控件的长按操作。 | 在支持的情况下，运行所选控件的长按操作。 |
| 返回 | 取消输入或关闭菜单。 | 关闭键盘、列表或对话框，或返回上一级。 |
| 电源 | 短按：熄屏/唤醒。长按约 4 秒：关机。 | 短按：熄屏/唤醒。长按约 4 秒：关机。 |

在本指南中，**选择**指使用方向键高亮某个项目并按下 **Confirm**。**Confirm** 是屏幕左下方带有水平线标记的橙色按键。**Left/Right** 指方向键盘上的左右方向。

### UI 切换

在下方选择切换方向。无需重新刷写固件。

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142916.png" alt="Close-up of MeshPager X2 Base UI showing battery, node, satellite, and channel-utilization information" width={1276} height={1010} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Base UI</strong> — 信息屏幕和菜单。</figcaption>
  </figure>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142835.png" alt="Close-up of MeshPager X2 MUI showing the Home page and navigation icons along the left edge" width={1546} height={1172} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>MUI</strong> — 图形页面和地图。</figcaption>
  </figure>
</div>

<Tabs groupId="x2-ui-switch">
<TabItem value="base-to-mui" label="Base UI 到 MUI">

1. 使用 Left/Right 到达 **System**，然后按 Confirm。
2. 选择 **Reboot/Shutdown → Switch to MUI → Yes**。
3. 等待 X2 重启进入 MUI。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: select Switch to MUI in Base UI and confirm the restart">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4">下载 Base UI 到 MUI 的演示视频。</a>
  </video>
  <figcaption>Base UI 到 MUI。视频在重启过程中结束。</figcaption>
</figure>

</TabItem>
<TabItem value="mui-to-base" label="MUI 到 Base UI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. 打开菜单。</strong> 在导航栏中高亮 Settings 并按 Right 进入。选择 Reboot / Shutdown 并按 Confirm。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 reboot menu with red outlines around the Bluetooth icon and left orange Confirm key used to switch to Base UI" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. 长按 Confirm 切换 UI。</strong> 使用 Left/Right 高亮 Bluetooth 图标。<strong>长按 Confirm（左侧橙色键）</strong>，直到出现 <strong>Reboot into BaseUI?</strong> 对话框，然后松开按键。</figcaption>
  </figure>
</div>

**3. 确认重启。** 选择 **OK** 并等待 X2 重启进入 Base UI。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: hold Confirm on the MUI Bluetooth icon and confirm the switch to Base UI">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4">下载 MUI 到 Base UI 的演示视频。</a>
  </video>
  <figcaption>MUI 到 Base UI。视频在重启过程中结束。</figcaption>
</figure>

</TabItem>
</Tabs>

### 手机连接

**步骤 1. 在 X2 上启用蓝牙。**

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

从 MUI 切换后会自动启用蓝牙。要手动启用，在 **System** 中按 Confirm，并选择 **Bluetooth Toggle**。如有重启提示，请按提示重启。如果 Wi-Fi 阻止蓝牙配对，请先关闭 Wi-Fi。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-home.png" alt="X2 Base UI Home screen with BT off and the example node name outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. 检查蓝牙状态。</strong> <code>BT off</code> 表示蓝牙已禁用。此处显示的节点名称仅为示例；请在应用中查找你自己的 X2。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-bluetooth-toggle.png" alt="X2 Base UI System Action menu with Bluetooth Toggle and the left orange Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. 启用蓝牙。</strong> 在 System 屏幕上按 Confirm，选择 Bluetooth Toggle，并按照任何重启提示操作。</figcaption>
  </figure>
</div>

</TabItem>
<TabItem value="mui" label="MUI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. 打开菜单。</strong> 进入 Settings，选择 Reboot / Shutdown，并按 Confirm。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 reboot menu with red outlines around the Bluetooth icon and left orange Confirm key" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. 进入蓝牙连接模式。</strong> 使用左/右键高亮蓝牙图标，然后短按确认键（左侧橙色按键）。</figcaption>
  </figure>
</div>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-145102.png" alt="MeshPager X2 MUI Bluetooth connection screen showing the Bluetooth icon, Programming mode label, and a six-digit pairing PIN" width={480} height={341} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption><strong>3. 等待配对 PIN。</strong> 蓝牙连接界面会显示 Programming mode 和一个六位数 PIN。</figcaption>
</figure>

:::caution 返回 MUI
配置完成后，按下 **Confirm** 返回 MUI。
:::

</TabItem>
</Tabs>

**步骤 2. 下载 Meshtastic App**

[Click here](https://meshtastic.org/downloads/) 下载适用于 **iOS** 或 **Android** 的 Meshtastic 应用。

**步骤 3. 与设备配对**

在手机上启用蓝牙，打开 Meshtastic 应用，并授予请求的蓝牙或附近设备权限。下方截图展示了应用的操作流程；从列表中选择你的 X2 设备名称。

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. 在 Meshtastic 应用中打开 **Bluetooth** 面板，并在 **Available Radios** 下选择你的 X2。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="Meshtastic iOS app Bluetooth panel with an example radio highlighted under Available Radios" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. 输入 X2 屏幕上显示的代码，然后点击 **Pair** 进行连接。如果你配置了固定 PIN，请使用该 PIN。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="iOS Bluetooth pairing request showing the PIN entry field and Pair button" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. 在 Meshtastic 应用中打开 **Connection** 面板，选择 **BLE**，然后在设备列表中选择你的 X2。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="Meshtastic Android app Connection panel with BLE selected and nearby radios listed" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. 输入 X2 屏幕上显示的代码，然后点击 **OK** 进行连接。如果你配置了固定 PIN，请使用该 PIN。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="Android Bluetooth pairing request with a PIN entry field and the OK button highlighted" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

在更改设置之前，请等待设备配置加载完成。

### 配置 LoRa

在通过 Mesh 通信之前，先设置你的 **区域**。该设置控制设备使用的频率范围，并且应与你所在位置、X2 的 **863–928 MHz** 射频硬件以及其天线相匹配。

**区域列表**

| **Region Code** | **Description** | **Frequency Range (MHz)** | **Duty Cycle (%)** | **Power Limit (dBm)** |
| :---: | :---: | :---: | :---: | :---: |
| UNSET | 未设置 | N/A | N/A | N/A |
| US | 美国 | 902.0 - 928.0 | 100 | 30 |
| EU_868 | 欧盟 868MHz | 869.4 - 869.65 | 10 | 27 |

更完整的列表请参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)。上表中的功率限制是 Meshtastic 区域限制；X2 的实际发射功率还取决于其硬件和固件。

:::info EU_868 占空比
EU_868 具有 **10% 占空比限制**，按滚动一小时、每分钟计算。如果设备达到该限制，它会停止发射，直到再次允许发射。
:::

<Tabs groupId="x2-lora-method">
<TabItem value="base" label="Base UI">

1. 使用左/右键进入 **LoRa**，然后按确认键。
2. 选择 **LoRa Region**，选择你的区域，并确认所有提示。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-region.png" alt="X2 Base UI LoRa Actions menu with LoRa Region and the Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>打开区域设置。</strong> 选择 LoRa Region，然后在下一屏中选择你所在位置的区域。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-info.png" alt="X2 Base UI LoRa Info screen showing the example US region, LongTurbo preset, frequency, and a BLE identifier" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>检查当前配置。</strong> LoRa Info 显示区域、调制解调器预设和频率。本示例使用 US / LongTurbo；请使用适合你所在位置和群组的设置。</figcaption>
  </figure>
</div>

LoRa Info 中的四字符 **BLE** 标签是设备标识符，而不是蓝牙配对 PIN。配对时，请使用 X2 配对提示中显示的 PIN 或你配置的固定 PIN。

</TabItem>
<TabItem value="mui" label="MUI">

1. 进入 **Settings → Region**。
2. 选择你的区域并选择 **OK**。如果出现提示，请重启。

</TabItem>
<TabItem value="phone" label="Configure on Phone">

将 Meshtastic 应用连接到 X2，并等待其配置加载完成。根据你的手机选择相应的说明：

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. 如果应用在连接页面显示 **Set LoRa Region**，请点击它。否则，从 **Settings** 中的设备配置里打开 **LoRa**。
2. 为你所在位置设置 **Region**，然后保存配置。
3. 如果 X2 重启，请重新连接并检查区域不再为 **UNSET**。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="Meshtastic iOS app LoRa configuration and region selection" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. 从应用菜单中打开 **Radio Configuration → LoRa**。
2. 选择你的 **Region** 并保存配置。
3. 如果 X2 重启，请重新连接并检查所选区域。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="Meshtastic Android app LoRa settings with the region selector" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

这些截图展示了手机应用的操作流程。请选择你已连接的 X2；菜单名称可能因应用版本而异。

</TabItem>
</Tabs>

要与其他节点通信，需要匹配它们的 **调制解调器预设、频率槽、频道名称和预共享密钥**。你可以在手机应用中配置这些设置，或导入你所在群组的频道配置。

发射功率和占空比设置必须符合当地法规。详情请参阅 [Meshtastic LoRa configuration](https://meshtastic.org/docs/configuration/radio/lora/)。

### 地图使用

<span id="microsd-and-offline-maps"></span>
<span id="wi-fi"></span>

使用 MUI 查看地图。要显示当前位置，请启用 GPS 并在室外等待定位完成；参见 [Configure GPS](/cn/x2_get_started_for_meshtastic/#配置-gps)。

<Tabs groupId="x2-map-mode">
<TabItem value="offline" label="Offline Map">

离线地图需要 **MUI** 和一张 microSD 卡。

**步骤 1. 准备存储卡。**

1. 在格式化前先备份存储卡；格式化会清除其内容。使用 **MBR 分区和 FAT32** 来准备存储卡。
2. 从 [Meshtastic UI map starter kit](https://github.com/meshtastic/device-ui/tree/master/maps) 下载一个样式 ZIP，例如 `osm.zip` 或 `atlas.zip`。
3. 将压缩包解压到存储卡根目录，保留其中的文件夹结构。检查最终路径，而不是在解压文件外再添加一层 `maps` 文件夹：

```text
microSD root/
└── maps/
    └── <style>/
        └── <zoom>/
            └── <x>/
                └── <y>.png
```

例如，名为 `osm` 的样式应位于 `/maps/osm/` 下。避免出现类似 `/maps/maps/osm/` 这样的额外文件夹层级。

4. 复制完成后安全弹出存储卡。

:::tip 从概览地图开始
官方入门套件压缩包包含 **缩放级别 1–6** 的全球瓦片。将地图缩小到 6 级或更低，以检查地图是否加载。若需街道级细节，请下载覆盖你所在区域的更高缩放级别瓦片；仅靠入门套件并不包含这些细节。参见 [map download instructions](https://github.com/meshtastic/device-ui/tree/master/maps#downloading-tiles)。
:::

**步骤 2. 插入存储卡并打开地图。**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="MeshPager X2 microSD card slot with the outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>X2 microSD 卡槽。</figcaption>
</figure>

1. 在插入或取出卡之前，先关闭 X2 并断开 USB 连接。
2. 完全插入 microSD 卡，然后启动 X2 并进入 MUI。
3. 针对你当前的位置，启用 GNSS，并在室外等待定位成功。
4. 进入 **Map** 并选择与你瓦片匹配的样式。

已下载的瓦片在没有 Wi-Fi 或蜂窝网络服务时也能使用。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151638.png" alt="MeshPager X2 MUI Locations Map showing street tiles, location markers, zoom buttons, and navigation controls" width={600} height={455} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>带有位置标记、缩放和导航控件的 MUI 地图。</figcaption>
</figure>

**步骤 3. 使用按键导航。**

| 地图状态 | 操作 |
| --- | --- |
| 浏览 | 使用方向键平移。 |
| 打开控件 | 按 Confirm。 |
| 缩放或定位 | 使用 Up/Down 高亮某个控件，然后按 Confirm。 |
| 返回地图 | 按 Return。 |
| 返回导航栏 | 再次按 Return。 |

</TabItem>
<TabItem value="online" label="在线地图">

**步骤 1. 启用 GPS。**

打开 **Home**，高亮 **location/GPS control**，长按 Confirm 以在 GNSS 被禁用时启用它。如有提示请重启，然后在室外等待定位成功。

**步骤 2. 设置并启用 Wi-Fi。**

在 MUI 中，打开 **Settings → Wi-Fi**，输入 Wi-Fi 网络名称（**WiFi SSID**）和密码（**WiFi pre-shared Key**），然后选择 **OK**。你可以直接在设备上完成这两项配置。

:::tip
连接到 **2.4 GHz** Wi-Fi 网络。**5 GHz** Wi-Fi 不受支持。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="MUI Wi-Fi settings with the network name, password, and OK button highlighted" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

在 **Home** 上，灰色 Wi-Fi 图标并显示 **0.0.0.0** 表示已禁用状态。白色 Wi-Fi 图标并显示已分配的 IP 地址表示已连接状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="MUI Home screen comparing disabled Wi-Fi with 0.0.0.0 and connected Wi-Fi with an assigned IP address" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

长按 **Wi-Fi 图标** 可打开或关闭 Wi-Fi。在 X2 上，先用方向键高亮该图标，然后**长按 Confirm（左侧橙色按键）**来执行长按操作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="MUI Home screen with the Wi-Fi icon highlighted for a long press to change its state" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

蓝牙连接模式会禁用 Wi-Fi。如有需要，在返回 MUI 后重新启用。在线地图要求所连接的 Wi-Fi 网络具备互联网访问能力。

**步骤 3. 查看地图。**

打开 **Map** 并等待地图瓦片加载。加载新区域时保持 Wi-Fi 连接到互联网。

</TabItem>
</Tabs>

### 发送和阅读消息

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

**撰写消息**

1. 使用 Left/Right 切换到 **Home** 信息屏幕。
2. 按 Up 或 Down 打开消息编辑器。
3. 选择 **[Select Destination]**，然后选择一个频道或节点。
4. 选择一条预设消息即可发送，或选择 **[-- Free Text --]** 打开键盘。
5. 使用方向键和 Confirm 输入字符。使用键盘上的退格键删除。
6. 选择键盘上的 **Enter** 键发送。**Return** 取消输入。

你也可以在 **Messages** 屏幕中打开编辑器：按 Confirm 并在 **Message Action** 菜单中选择 **New Preset Msg**。在选择预设消息或输入自由文本前，请先检查目标地址。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-new-preset-message.png" alt="X2 Base UI Message Action menu with New Preset Msg and the Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>打开消息编辑器。</strong> 在 Messages 中，按 Confirm 并选择 New Preset Msg。选择目标地址和一条预设消息，或选择 Free Text 打开键盘。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-keyboard.png" alt="X2 Base UI free-text keyboard with the character keys and ENTER outlined in red, addressed to the example LongTurbo channel" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>输入并发送。</strong> 检查 <code>To:</code> 旁边的收件人，使用方向键和 Confirm 输入，然后选择 ENTER 发送。LongTurbo 是示例目标频道。</figcaption>
  </figure>
</div>

如果编辑器不可用，请在手机应用中启用 **Canned Message** 模块，并使用支持屏幕键盘的固件。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151656.png" alt="MeshPager X2 Base UI showing the Message sent to LongFast confirmation" width={480} height={390} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI：消息已发送到 LongFast 频道。</figcaption>
</figure>

**阅读消息**

使用 Left/Right 切换到消息屏幕，使用 Up/Down 浏览会话线程，并按 Confirm 打开会话操作。

</TabItem>
<TabItem value="mui" label="MUI">

**从节点列表开始一条私信**

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-node-select.png" alt="X2 node list with red outlines around the Nodes icon, selected node 9028, direction Right, and the left orange Confirm key" width={940} height={1270} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. 选择节点。</strong> 在导航栏上高亮 Nodes 并按 Right 进入列表。使用 Up/Down 选择一个节点，然后长按 Confirm（左侧橙色按键）直到其会话打开。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-open-keyboard.png" alt="X2 conversation with red outlines around recipient Meshtastic 9028, the keyboard icon, and the orange Confirm key" width={925} height={1215} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. 打开键盘。</strong> 检查顶部的收件人名称。将焦点移动到文本输入框，按 Right 高亮键盘图标，然后按 Confirm 打开键盘。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-type-send.png" alt="X2 on-screen keyboard with red outlines around the typed letter w, the keyboard, and the lower-right submit checkmark" width={825} height={1085} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. 输入并发送。</strong> 使用方向键选择字符并按 Confirm 输入。选择右下角的对勾并按 Confirm 发送。</figcaption>
  </figure>
</div>

<figure style={{maxWidth: 320, margin: '1.5rem auto', textAlign: 'center'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-message-sent.png" alt="X2 conversation after submission, with red outlines around recipient Meshtastic 9028 and the outgoing message w" width={770} height={1065} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>4. 查看已发出的消息。</strong> 键盘关闭，已发出的消息会显示在会话中。此示例向 Meshtastic 9028 发送了 <code>w</code>。</figcaption>
</figure>

对于频道会话，打开 **Channels** 并选择一个频道。要返回现有会话，打开 **Messages** 并选择该聊天。

**Return** 会在不发送的情况下关闭键盘；再次按下可返回聊天列表。

<h4 id="mute-and-unmute-a-channel">静音和取消静音频道</h4>

1. 在导航栏上高亮 **Channels** 并按 **Right** 进入频道列表。使用 Up/Down 高亮一个已配置的频道，例如本例中的 **LongTurbo**。
2. **长按 Confirm**（左侧橙色按键）直到铃铛图标变为**橙色的被划掉的铃铛**，然后松开按键。该频道的通知现已被静音。
3. 要取消静音同一频道，**再次长按 Confirm**，直到**白色铃铛**恢复，然后松开按键。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-select.png" alt="X2 Group Channels page with red outlines around the Channels icon, selected LongTurbo channel, and left orange Confirm key" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. 选择频道。</strong> 长按左侧橙色 Confirm 键以更改其静音状态。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-muted.png" alt="Selected LongTurbo channel with an orange crossed-out bell outlined in red after holding Confirm" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. 已静音。</strong>橙色的被划掉的铃铛表示该频道通知已被静音。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-unmuted.png" alt="Selected LongTurbo channel with a white bell outlined in red after holding Confirm again" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. 取消静音。</strong>再次长按 Confirm 恢复白色铃铛并启用频道通知。</figcaption>
  </figure>
</div>

</TabItem>
</Tabs>

直接消息需要设备先交换节点信息和公钥。

## 高级用法

<span id="advanced-tutorial"></span>

### 通过网站连接

<span id="connect-via-web-client"></span>

使用 [Meshtastic Web Client](https://client.meshtastic.org/) 从浏览器读取消息、发送文本并配置你的节点。使用桌面版 **Chrome 或 Edge**，并确保固件支持所选连接方式。浏览器支持情况各不相同；请参阅 [Web Client compatibility guide](https://meshtastic.org/docs/software/web-client/)。

**步骤 1. 打开 Web Client。**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="Meshtastic Web Client landing page" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**步骤 2. 添加连接。** 选择 **New Connection**。截图展示的是客户端的操作流程；设备名称和端口号仅为示例。连接时请选择你自己的 X2。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="New Connection button in the Meshtastic Web Client" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**步骤 3. 选择连接方式。**

<Tabs groupId="x2-web-connection">
<TabItem value="bluetooth" label="Bluetooth">

1. 在 X2 上启用蓝牙。在 MUI 中，进入 [Phone Connection](/cn/x2_get_started_for_meshtastic/#phone-connection) 中描述的蓝牙连接模式。
2. 将手机应用与 X2 断开连接，以便浏览器可以连接。
3. 在 Web Client 中选择 **Bluetooth**，并在浏览器的设备选择器中选择 X2。如有提示，请完成配对。
4. 等待节点配置加载完成，然后打开一个频道或会话。

</TabItem>
<TabItem value="serial" label="USB Serial">

1. 在运行 Meshtastic 的状态下启动 X2，并使用 USB **数据**线连接。固件下载模式用于刷写固件，而不是用于 Web Client。
2. 关闭 Web Flasher、串口监视器以及其他正在使用 X2 串口的应用程序。
3. 在 Web Client 中选择 **Serial**，如有提示选择 **New device**，然后在浏览器的设备选择器中选择 X2 的 USB 端口。
4. 等待节点配置加载完成，然后打开一个频道或会话。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="Meshtastic Web Client serial connection and browser serial-port picker" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

USB 设备可能显示为 **USB JTAG/serial debug unit**。如果你重新连接 X2 或更换 USB 接口，请再次选择其当前端口。

</TabItem>
</Tabs>

**步骤 4. 检查连接。** 如果尚未连接，选择已添加的设备以建立连接。随后客户端会显示节点状态并加载其配置。打开消息视图以选择频道或节点会话。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="Example node shown as connected in the Meshtastic Web Client" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### 配置 GPS

<span id="gnss-positioning"></span>

在户外使用 X2，并确保有开阔的天空视野，然后等待卫星定位完成。

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

使用 左/右 键切换到 **Position**，按 Confirm，并选择 **On/Off Toggle → Enabled**。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151648.png" alt="MeshPager X2 Base UI Position screen showing satellite count, latitude, longitude, and altitude" width={480} height={407} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI 位置界面。</figcaption>
</figure>

</TabItem>
<TabItem value="mui" label="MUI">

进入 **Home** 并高亮 **location/GPS control**。如果 GNSS 被禁用，长按 Confirm 以启用它。如有提示，请重启。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151629.png" alt="MeshPager X2 MUI Home page with the location control selected and coordinates, satellite count, and altitude displayed" width={480} height={385} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>MUI Home 页面上的位置状态。</figcaption>
</figure>

</TabItem>
</Tabs>

**在手机上配置**

将 Meshtastic 应用连接到 X2，打开设备无线电配置下的 **Position**，并调整以下设置。保存更改，如果设备重启，请重新连接。

| Setting | 控制内容 |
| --- | --- |
| GPS Mode | 启用或禁用 X2 的 GNSS 接收机。 |
| GPS Update Interval | 设备请求新的 GNSS 位置的频率。 |
| Position Broadcast Interval | 设备通过 mesh 广播其位置的频率。 |
| Smart Position | 根据移动情况允许位置广播，受配置阈值限制。 |
| Fixed Position | 使用固定位置。当你希望设备位置随其移动而变化时，请禁用此项。 |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="Meshtastic phone app Position settings for GPS updates and position broadcasts" width={500} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

更短的时间间隔可以提供更频繁的更新，但会增加功耗或 mesh 流量。根据设备移动的频率选择合适的间隔。参见 [Meshtastic Position configuration](https://meshtastic.org/docs/configuration/radio/position/)。

**iOS 位置权限**

如果你在 Meshtastic 应用中使用**手机的位置**或将其共享给节点，请在 iOS 设置中允许位置访问，并为 Meshtastic 启用 **Precise Location**。此权限控制手机提供的位置；X2 内置的 GNSS 接收机会独立获取自己的定位。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="iOS location permission settings with Precise Location enabled for Meshtastic" width={250} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### 传感器连接

X2 内置了用于环境读数、罗盘航向和运动检测的传感器。根据你想要使用的功能进行配置：

| 传感器 | 功能 | 配置 |
| --- | --- | --- |
| SPA06-003 气压计 | 压力和传感器温度读数。 | 手机应用中的 **Telemetry → Environment**。 |
| BMM350 磁力计 | 罗盘航向。 | Base UI 中的 **Position → Compass** 和 **Compass Calibrate**。 |
| 六轴 IMU | 加速度和角速度测量。 | 由支持的固件功能使用；环境 Telemetry 页面不会显示原始六轴读数。 |

**启用环境遥测**

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. 连接到 X2 并打开 **Settings → Module Configuration → Telemetry**。
2. 启用 **Environment Metrics Enabled** 并设置 **Environment Metrics** 间隔。
3. 如果希望在 Base UI 上显示支持的环境读数，请启用 **Show on device screen**，然后保存设置。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="Meshtastic iOS app Telemetry settings for environmental measurements and on-screen display" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. 连接到 X2 并打开 **Module Configuration → Telemetry**。
2. 启用 **Environment metrics module enabled** 并设置其更新间隔。
3. 启用 **Environment metrics on-screen enabled** 以在 Base UI 上显示支持的环境读数，然后保存设置。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="Meshtastic Android app Telemetry settings with environment metrics and on-screen display options" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

截图中使用的是示例节点和读数。X2 的环境遥测会显示其检测到的传感器和已安装固件所支持的读数。它不会启用罗盘校准，也不会传输原始加速度计和陀螺仪读数。要使用罗盘功能，请在 [Other Function](/cn/x2_get_started_for_meshtastic/#other-function) 下使用 **Position** 选项卡。

### Other Function

<span id="sensors-display-and-audio"></span>

使用方向键高亮某个控件。**按下 Confirm** 以选择它，或**长按 Confirm** 触发其长按操作。按 **Return** 关闭对话框或返回。菜单可用性取决于已安装的固件和启用的模块。

<Tabs groupId="x2-other-ui">
<TabItem value="mui" label="MUI">

<Tabs groupId="x2-mui-function-page">
<TabItem value="menu" label="Menu Bar">

| X2 操作 | 效果 |
| --- | --- |
| 在 **Home** 上长按 Confirm | 使 MUI 与节点的配置和数据重新同步。 |
| 在 **Nodes** 上长按 Confirm | 打开节点筛选器。 |
| 在 **Settings** 上长按 Confirm | 锁定显示屏。使用 Power 唤醒，并在已配置的情况下输入屏幕 PIN。 |

</TabItem>
<TabItem value="home" label="Home Page">

| 高亮控件 | X2 操作 | 效果 |
| --- | --- | --- |
| 消息图标 | 按 Confirm | 打开消息列表。 |
| 节点图标 | 按 Confirm | 打开在线节点列表。 |
| 时钟 | 按 Confirm | 在日期/时间和运行时间之间切换。 |
| LoRa 图标 | 长按 Confirm | 启用或禁用 LoRa 传输。 |
| 通知图标 | 长按 Confirm | 启用或禁用通知。 |
| 通知图标 | 按 Confirm | 在声音、横幅以及声音加横幅之间循环切换。 |
| GPS 图标 | 长按 Confirm | 启用或禁用 GNSS。如有提示，请重启。 |
| Wi-Fi 图标 | 长按 Confirm | 启用或禁用 Wi-Fi，或在缺少凭据时打开 Wi-Fi 设置。 |
| MQTT 图标 | 长按 Confirm | 启用或禁用 MQTT 模块。如有提示，请重启。 |
| 二维码图标 | 按 Confirm | 显示设备的二维码。 |

在使用 MQTT 之前，请在手机应用中配置 MQTT 服务器以及相关通道上行/下行设置。Home 快捷方式用于打开或关闭该模块；有关设置，请参见 [Meshtastic MQTT configuration](https://meshtastic.org/docs/configuration/module/mqtt/)。

</TabItem>
<TabItem value="node" label="Node Page">

| X2 操作 | 效果 |
| --- | --- |
| 高亮某个节点并按 Confirm | 打开其详细信息。 |
| 高亮某个节点并长按 Confirm | 打开与其的私信会话。 |
| 选择某个节点的位置控件 | 在地图上显示其上报的位置（当有位置信息时）。 |

有关带插图的 X2 键盘工作流程，请参见 [发送和读取消息](/cn/x2_get_started_for_meshtastic/#发送和读取消息)。

</TabItem>
<TabItem value="channel" label="Channel Page">

选择一个通道并按 Confirm 以打开其会话。在该通道上长按 Confirm 以静音或取消静音其通知。铃铛会在**白色铃铛**和**橙色划线铃铛**之间切换；参见 [静音和取消静音通道](/cn/x2_get_started_for_meshtastic/#静音和取消静音通道)。

</TabItem>
<TabItem value="message" label="Message Page">

选择一个会话并按 Confirm 打开它。要移除某个会话，请在其上**长按 Confirm** 以显示 **delete** 按钮，然后选择该按钮。这将删除本地会话历史记录。

</TabItem>
<TabItem value="settings" label="Setting Page">

从导航栏打开 **Settings**，高亮某个设置并按 Confirm。在离开其对话框前保存或确认更改。

| 设置 | 效果 |
| --- | --- |
| User Short Name / User Long Name | 更改节点显示的名称。 |
| Lock: Screen / Settings | 配置屏幕和设置的 PIN 锁。 |
| Region | 选择 LoRa 区域。 |
| Modem Preset | 选择无线电调制解调器预设。 |
| Channel | 编辑通道设置。 |
| Device Role | 选择节点角色。 |
| Wi-Fi | 设置网络名称和密码。 |
| Screen Timeout | 设置显示屏保持点亮的时间。 |
| Screen Brightness | 调整背光亮度。 |
| Theme | 在浅色和深色外观之间切换。 |
| Language | 更改显示语言。 |
| Configuration Reset → Factory Reset | 恢复默认配置。 |
| Configuration Reset → NodeDB Reset | 清除已存储的节点信息。 |
| Configuration Reset → Clear Chat History | 清除本地聊天记录。 |
| Reboot / Shutdown → Green restart icon | 重启 X2。 |
| Reboot / Shutdown → Red power icon | 关闭 X2。连接 USB 时，它可能会回到充电屏幕。 |

有关重置说明和截图，请参见 [出厂重置](/cn/x2_get_started_for_meshtastic/#出厂重置)和 [NodeDB 重置](/cn/x2_get_started_for_meshtastic/#NodeDB-重置)。

</TabItem>
<TabItem value="tools" label="Tool">

打开 **Settings & Tools**，然后切换到 **Tools**。高亮某个工具并按 Confirm。当工具要求选择目标时，选择一个节点。

| 工具 | 功能 |
| --- | --- |
| Mesh Detector | 查看最近检测到的节点。 |
| Signal Scanner | 检查接收的信号信息，包括 RSSI 和 SNR。 |
| Trace Route | 请求到选定节点的路由并查看响应。 |
| Statistic | 查看数据包和解码统计信息。 |
| Packet Log | 检查 Mesh 数据包活动。 |

路由或信号结果需要来自相关节点的通信。请留出时间等待回复，并在评估链路时查看 [信号质量](/cn/x2_get_started_for_meshtastic/#信号质量)。

</TabItem>
</Tabs>

</TabItem>
<TabItem value="base" label="Base UI">

使用 Left/Right 到达信息屏幕，按 Confirm 打开其操作菜单，然后使用 Up/Down 和 Confirm 选择条目。

<Tabs groupId="x2-base-function-page">
<TabItem value="home" label="Home">

| 操作 | 效果 |
| --- | --- |
| Sleep Screen / Toggle Backlight | 关闭显示屏或切换其背光，具体取决于固件。使用 Power 唤醒 X2。 |
| Send Position | 在启用 GNSS 且有有效位置时广播当前位置。 |
| Send Node Info | 公告节点信息；当 GNSS 被禁用时会显示此选项。 |

</TabItem>
<TabItem value="node" label="Node">

打开所选节点的 **Node Action** 菜单。

| 操作 | 效果 |
| --- | --- |
| Favorite / Unfavorite | 将节点加入或移出收藏。 |
| Trace Route | 请求到所选节点的路由。 |
| Mute Notifications / Unmute Notifications | 更改该节点的通知。 |

</TabItem>
<TabItem value="position" label="Position">

| 操作 | 效果 |
| --- | --- |
| On/Off Toggle | 启用或禁用 GNSS。 |
| Format | 选择坐标显示格式。 |
| Smart Position | 根据移动情况配置广播。 |
| Update Interval | 设置 GNSS 更新间隔。 |
| Broadcast Interval | 设置位置广播间隔。 |
| Compass | 选择 **Dynamic**、**Fixed Ring** 或 **Freeze Heading**。 |
| Compass Calibrate | 启动 **30-second** 指南针校准。 |

要进行校准，选择 **Compass Calibrate**，并在旋转 X2 至不同朝向的同时按照屏幕提示操作。使其远离磁铁和大型金属物体，并让倒计时完成。该校准选项要求固件检测到受支持的传感器。

</TabItem>
<TabItem value="lora" label="LoRa">

| 操作 | 效果 |
| --- | --- |
| LoRa Region | 选择工作区域。 |
| Device Role | 选择节点角色。 |
| Radio Preset | 选择调制解调器预设。 |
| Frequency Slot | 为所选区域和预设选择频率槽。 |
| Transmit Enabled | 启用或禁用无线电发射。 |

在你希望通信的节点之间协调预设和频率槽的更改。

</TabItem>
<TabItem value="system" label="System">

| 操作 | 效果 |
| --- | --- |
| Notifications | 配置通知和系统声音。 |
| Display Options | 调整固件中提供的显示设置。 |
| Bluetooth Toggle | 启用或禁用 Bluetooth。 |
| WiFi Toggle | 启用或禁用 Wi-Fi。请先配置其网络凭据。 |
| Reboot/Shutdown | 重启、关机或切换 UI。 |

</TabItem>
</Tabs>

</TabItem>
</Tabs>

麦克风和扬声器为未来的语音消息更新提供硬件支持。可以使用上述控件配置通知声音。

## 常见问题

### 设备无法通过 BLE 与手机配对

<span id="x2-is-not-listed-in-the-phone-app"></span>

- **在 MUI 中**，在手机应用中搜索 X2 之前先进入 Bluetooth 配对模式。打开 **Settings → Reboot / Shutdown**，高亮 **Bluetooth 图标**，然后**短按 Confirm**。等待配对屏幕，并使用 X2 上显示的 PIN。 |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="MUI Settings, Reboot / Shutdown menu, and Bluetooth pairing mode" width={800} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

在 X2 上，使用方向键高亮控件并按 **Confirm** 进行选择。有关 X2 按钮示意图，请参见 [手机连接](/cn/x2_get_started_for_meshtastic/#手机连接)。

- **在 Base UI 中**，启用 Wi-Fi 会禁用 Bluetooth。若要继续使用 Wi-Fi，请让手机连接到同一网络，并在 Meshtastic 应用中选择 **Network**，使用 X2 的 IP 地址。若要改为通过 BLE 配对，请禁用 Wi-Fi 并在 X2 上启用 **System → Bluetooth Toggle**。 |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" alt="Meshtastic phone app Network connection settings" width={350} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

- 在手机上启用 Bluetooth，并授予应用其 **Bluetooth / Nearby Devices** 权限。断开任何已连接到 X2 的其他手机或浏览器，然后重新扫描。 |
- 如果配对仍然失败，请在手机的 Bluetooth 设置中忘记旧的 X2 配对记录，并从 Meshtastic 应用重新连接。输入当前屏幕上的 PIN 或你配置的固定 PIN。 |

### 设备无法连接到我的 Wifi

<span id="wi-fi-does-not-connect-or-turns-off"></span>

1. 使用 **2.4 GHz Wi-Fi** 网络。X2 不支持 5 GHz Wi-Fi。要测试连接，可尝试使用配置为 2.4 GHz 的手机热点。 |
2. 检查 Wi-Fi 名称和密码（包括大小写），然后在保存后启用 Wi-Fi。按照 [地图使用](/cn/x2_get_started_for_meshtastic/#地图使用)中的 **Online Map** 选项卡进行操作。 |
3. 检查 MUI Home 页面上的 Wi-Fi 图标和 IP 地址。灰色图标和空的 IP 字段表示 Wi-Fi 被禁用或尚未连接。白色图标并显示 IP 地址表示已连接。 |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="MUI Home page showing Wi-Fi icon and IP address before and after connecting" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

进入蓝牙连接模式会禁用 Wi-Fi。返回 MUI 后，当你需要在线地图时，请再次启用 Wi-Fi。Wi-Fi 网络还必须提供互联网访问，以便下载地图瓦片。

### 设备自动关机

**说明**

- X2 在上电后不久就关机或反复重启。
- 串口日志停止，设备无响应。

**故障排查**

1. 检查电池电量和 USB 供电连接。如果只是屏幕变黑，短按 **Power** 检查 X2 是否仍在运行。屏幕熄灭与关机是不同的。
2. 如果 X2 只显示充电画面，松开 Power，然后按住约 **5 秒** 以启动 Meshtastic。避免在保存设置或写入固件时中断电源。
3. 如果设备仍然无响应，请按照 [Forced Restart](/cn/x2_get_started_for_meshtastic/#forced-restart) 操作。如果之后仍然反复重启，请抓取启动串口日志以帮助定位原因。
4. 如果在电源稳定的情况下问题仍然存在，请对兼容的 X2 固件执行一次干净安装。按照 [Manual Firmware Installation](/cn/x2_get_started_for_meshtastic/#manual-firmware-installation) 完成全擦除出厂镜像流程。

:::caution 干净安装
完全擦除会删除设置、频道、密钥和已保存的数据。继续之前请保存所有需要的内容。重新安装后，需要重新配置 LoRa 区域和频道。
:::

### 恢复出厂设置

恢复出厂设置会还原默认配置。重置前请保存你想保留的设置和频道信息。

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="在 MUI 上配置">

1. 打开 **Settings → Configuration Reset**。
2. 选择 **Factory Reset**，然后使用方向键和确认键选择 **OK**。
3. 等待 X2 以默认配置重启。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="MUI Configuration Reset menu with Factory Reset and its confirmation dialog" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="在手机上配置">

在 Meshtastic 应用中连接到 X2，打开其设备设置并选择 **Factory Reset**。确认重置并等待 X2 重启。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="Meshtastic phone app Factory Reset button" width={400} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

重启后重新连接 X2，并在使用 mesh 之前设置正确的 **LoRa 区域** 和 **频道**。

### 私信发送失败

<span id="direct-messages-fail"></span>

首先检查两个节点是否使用兼容的 LoRa 设置，并且在直连或通过 mesh 的有效范围内。尝试发送共享频道消息。如果频道消息正常而私信失败，请检查下面存储的节点信息和密钥。

#### NodeDB 重置

NodeDB 存储在 mesh 上发现的节点信息。过期的条目（例如在另一节点更改密钥之前保存的条目）可能会阻止私信。重置 NodeDB 会清除本地节点数据库，使设备可以重新发现节点。

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="在 MUI 上配置">

打开 **Settings → Configuration Reset**，选择 **NodeDB Reset**，然后选择 **OK**。在 X2 上使用方向键和确认键。设备将会重启。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="MUI Configuration Reset menu with NodeDB Reset and its confirmation dialog" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="在手机上配置">

将 Meshtastic 应用连接到你想要重置数据库的节点。打开 **Settings → Device → Device Config → Reset NodeDB** 并确认。菜单名称可能会因应用版本不同而有所差异。

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Meshtastic app Settings with Device selected" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in the Meshtastic app Device Config page" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
</div>

</TabItem>
</Tabs>

等待节点列表重新填充，然后交换用户信息，再重试私信。

#### 交换用户信息

节点会定期广播其用户信息，其中包括加密私信所需的 **public key**。如果某个节点的信息缺失或过期，在手机应用中打开该节点条目并选择 **Exchange User Info**。等待交换完成；如有需要，从另一节点重复此操作。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Meshtastic app node menu with Exchange User Info" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

重新尝试私信并检查其投递状态。消息只出现在发送方的会话中并不能确认已被接收。

#### 重新生成私钥

如果在刷新节点信息后私信仍然失败，你可以在手机应用的 **Security** 设置中为受影响的节点重新生成密钥对。使用 **Regenerate Private Key**，保存更改，并按提示重启设备。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Meshtastic phone app Security settings for regenerating the private key" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

:::note 重新生成密钥后
节点的 public key 会发生变化，因此其他节点必须学习它的新信息。如有必要，从其他节点的列表中删除过期条目，然后再次交换用户信息。请对 **private key 保密**；只有 **public key** 会与其他节点共享。参见 [Meshtastic Security configuration](https://meshtastic.org/docs/configuration/radio/security/)。
:::

### 信号质量

- **SNR（信噪比）** 衡量接收信号相对于背景噪声的强度。数值越高通常表示链路越清晰。LoRa 可以接收 SNR 为负的信号；可用极限取决于调制解调器预设。
- **RSSI（接收信号强度指示）** 以 dBm 为单位衡量接收信号功率。数值越不负表示信号越强：例如，**−90 dBm** 比 **−110 dBm** 更强。

结合实际消息投递情况同时检查这两个数值。单次 SNR 或 RSSI 读数不足以证明设备有故障。要改善链路，请使用与工作频段匹配的天线，检查其连接，并移动到更高、更开阔、远离遮挡物和干扰的位置。

### 电脑找不到 X2 或无法连接其串口

1. 使用 USB **数据** 线，并在连接 X2 前后检查电脑的端口列表。仅出现充电画面并不能确认已建立 USB 数据连接。
2. 在重新连接 X2、更换 USB 接口或进入下载模式后重新检查端口。在 macOS 上，`/dev/cu.usbmodem...` 的后缀可能会变化。
3. 关闭使用该端口的其他烧录工具、串口监视器或浏览器连接。在 Linux 上，还要检查 [USB 访问权限](/cn/x2_get_started_for_meshtastic/#linux-usb-access)。
4. 如果在端口列表中找不到该设备，请尝试另一根数据线或直接连接到电脑以检查 USB 连接。
5. 对于固件安装，请按照 [Flash Firmware](/cn/x2_get_started_for_meshtastic/#flash-firmware) 中的说明进入烧录模式。对于 Web Client，请让 Meshtastic 正常运行。

如果烧录工具报告 **No serial data received**，说明尚未与 bootloader 建立通信。仅凭这条消息无法判断是否存在 Flash 容量问题或设备缺陷。

### Linux USB 访问

在连接 X2 前后对比串口列表：

```bash
ls /dev/ttyACM* /dev/ttyUSB* 2>/dev/null
```

如果访问被拒绝，请检查检测到的端口权限（按需替换 `/dev/ttyACM0`）：

```bash
ls -l /dev/ttyACM0
```

在 Ubuntu/Debian 上，如果端口属于 `dialout`，请将你的用户加入该用户组：

```bash
sudo usermod -aG dialout "$USER"
```

注销并重新登录，然后重试。关闭使用该端口的其他应用程序。进入下载模式后重新检查端口名称。

### GNSS 不显示位置

- 使用 [Configure GPS](/cn/x2_get_started_for_meshtastic/#configure-gps) 启用 GNSS。
- 移动到户外、确保视野开阔，并留出时间获取定位。长时间未使用后的首次定位可能比后续定位耗时更长。
- 在期望其位置出现在地图上之前，先在 X2 上检查卫星和位置状态。
- 如果你移动时位置仍然保持不变，请检查手机应用中的 **Fixed Position** 设置和 GNSS 更新间隔。参见 [Meshtastic Position configuration](https://meshtastic.org/docs/configuration/radio/position/)。

### 离线地图为空白

1. 检查存储卡的 **MBR/FAT32** 格式以及 `/maps/<style>/<zoom>/<x>/<y>.png` 文件夹结构。
2. 在 MUI 中选择与复制到存储卡相同的样式。
3. 检查下载的瓦片是否覆盖正在查看的位置和缩放级别。仅安装官方入门套件时，将缩放级别缩小到 **6 或更低**。
4. 对于当前位置，等待 GNSS 获取定位。如果未检测到存储卡，请先关闭 X2 并断开 USB，然后重新插入存储卡。

有关准备步骤，请参阅 [地图使用](/cn/x2_get_started_for_meshtastic/#地图使用)。

### 手动固件安装

使用 [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32s3/) 在 **`0x0`** 地址烧录 X2 的 **`.factory.bin`**。该组合镜像包含引导加载程序、分区表和应用程序。仅包含应用程序的 `.bin` 文件不适用于此操作。

:::caution 完全擦除
下面的烧录命令会擦除所有内部闪存，包括设置、信道和已保存的数据。继续之前请备份所有需要的数据。
:::

1. 下载 [X2 factory firmware 2.8.1.0046b50](https://files.seeedstudio.com/wiki/MeshPagerX2/firmware-seeed_meshpager_x2-2.8.1.0046b50.factory%20copy.bin)。将下载的文件从 **`firmware-seeed_meshpager_x2-2.8.1.0046b50.factory copy.bin`** 重命名为 **`x2.factory.bin`**，并将其放在电脑上的某个文件夹中。
2. 安装 [Python 3.10 或更高版本](https://www.python.org/downloads/)。
3. 使用 USB 数据线将 X2 连接到电脑。关闭 Web Flasher、Web Client 以及任何可能占用串口的串口监视器。
4. 在包含 `x2.factory.bin` 的文件夹中打开终端，并根据你的系统执行相应命令。先发送 **1200 bps 复位**，然后使用带有 **`--before usb-reset`** 的 esptool。

1200 bps 步骤会触发复位；esptool 负责执行固件写入。**1200 bps 不是固件传输速率。** 复位后 USB 端口可能会消失并以不同名称重新出现，因此在烧录前请重新列出端口。

<Tabs groupId="x2-manual-flash-os">
<TabItem value="windows" label="Windows">

在 **PowerShell** 中，安装 esptool 并列出串口：

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade "esptool>=5,<6"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

将 `COM5` 替换为 X2 当前使用的端口，并发送 **1200 bps 复位**：

```powershell
.\.venv\Scripts\python.exe -c "import serial,time; s=serial.Serial('COM5',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

再次检查端口。将下面的 `COM5` 替换为 X2 现在使用的端口，然后开始烧录：

```powershell
.\.venv\Scripts\python.exe -m esptool --chip esp32s3 --port COM5 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

</TabItem>
<TabItem value="linux-macos" label="Linux / macOS">

安装 esptool 并列出串口：

```bash
python3 -m venv .venv
./.venv/bin/python -m pip install --upgrade "esptool>=5,<6"
./.venv/bin/python -m serial.tools.list_ports
```

在 Ubuntu/Debian 上，如果第一条命令提示缺少 `python3-venv`，请使用 `sudo apt install python3-venv` 安装。

将 `/dev/ttyACM0` 替换为 X2 当前使用的端口。在 macOS 上，请使用对应的 `/dev/cu.usbmodem...` 端口。发送 **1200 bps 复位**，然后再次列出端口：

```bash
./.venv/bin/python -c "import serial,time; s=serial.Serial('/dev/ttyACM0',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
./.venv/bin/python -m serial.tools.list_ports
```

将下面的 `/dev/ttyACM0` 替换为 X2 现在使用的端口，然后开始烧录：

```bash
./.venv/bin/python -m esptool --chip esp32s3 --port /dev/ttyACM0 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

如果 Linux 报告权限错误，请参阅 [Linux USB 访问](/cn/x2_get_started_for_meshtastic/#Linux-USB-访问)。

</TabItem>
</Tabs>

保持 USB 连接，直到 esptool 显示 **`Hash of data verified`** 并完成操作。然后在松开 Power 和 Return 的情况下重启 X2，并重新配置 LoRa 区域和信道。

如果 esptool 报告 **No serial data received**，请检查是否有其他应用程序占用该端口，重复执行 1200 bps 复位，并选择新枚举出来的端口。仅降低传输速率并不能让 X2 进入下载模式。

如果软件复位不可用，请使用 [烧录固件](/cn/x2_get_started_for_meshtastic/#烧录固件) 中描述的 X2 按键操作，然后重新检查端口。所需的复位行为可能取决于已安装的固件和硬件版本。

如果已经建立连接但写入多次失败，请使用 `--baud 115200` 重新尝试写入命令。

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="加入 Seeed Studio Meshtastic Facebook 社区"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed Studio technical forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed Studio support"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Studio Discord community"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Seeed Studio Wiki discussion"></a>
</div>
