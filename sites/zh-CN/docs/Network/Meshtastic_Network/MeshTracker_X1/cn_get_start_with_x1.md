---
description: 开始使用适用于 Meshtastic 的 SenseCAP MeshTracker X1。本教程将介绍该设备的设置指南和常见问题指南
title: 开始使用 MeshTracker X1
keywords:
  - 追踪器
  - Meshtastic
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /x1_get_started_for_meshtastic
sku: 100087698
sidebar_position: 1
last_update:
  date: 7/13/2026
  author: Michelle Huang
createdAt: '2026-07-13'
updatedAt: '2026-07-24'
url: https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
当设备处于以下状态时，请不要手动重启或关闭电源。否则设备可能会损坏。
1. 尚未完成消息传输过程
2. 正在配置中
:::


## 入门指南


### 打开设备电源

短按一次按键即可打开设备电源。会有一个上升的提示音，并且绿色 🟢 LED 指示灯会常亮约 1 秒。

:::tip
如果按下按键后设备没有响应，请先为其充电。不要使用快充充电器。
::: 

### 关闭设备电源

长按按键超过 5 秒。蜂鸣器发出三声蜂鸣后，设备将关机。

### 通过 App 连接

下载 `Meshtastic` App：

- [IOS App](https://apps.apple.com/us/app/meshtastic/id1586432531)
- [Android App](https://play.google.com/store/apps/details?id=com.geeksville.mesh&referrer=utm_source=downloads-page)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `Pair` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1PinCodee.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 配置 LoRa

为了开始在 Mesh 网络中通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

更多完整列表请参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。当达到限制时，你的设备将停止发射，直到再次被允许。
:::

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)。

### 设备状态

<table>
  <tr>
    <th colspan="2">指示灯状态</th>
    <th colspan="1">设备状态</th>
  </tr>
  <tr>
    <td rowspan="4">🟢green</td>
    <td>常亮</td>
    <td>设备开机中</td>
  </tr>
  <tr>
    <td>快速闪烁 </td>
    <td>正常运行</td>
  </tr>
  <tr>
    <td>慢速闪烁 </td>
    <td>充电中</td>
  </tr>
 <tr>
    <td>常亮</td>
    <td>已充满</td>
  </tr>
  <tr>
    <td>🔴Red</td>
    <td>闪烁</td>
    <td>电量低</td>
  </tr>
    <tr>
    <td>⚪️white</td>
    <td>常亮</td>
    <td>DFU 模式/Bootloader 模式</td>
  </tr>
</table>

### 按键控制

<table>
  <tr>
    <th colspan="1">按键操作</th>
    <th colspan="1">设备响应</th>
  </tr>
  <tr>
   <td>单击一次（关机状态）</td>
    <td>设备开机</td>
  </tr>
  <tr>
   <td>长按 5 秒</td>
    <td>设备关机</td>
  </tr>
  <tr>
    <td>双击</td>
    <td>广播节点 ID 和位置信息</td>
  </tr>
  <tr>
    <td>三击</td>
    <td>打开/关闭 GPS</td>
  </tr>
  <tr>
    <td>四击</td>
    <td>临时打开/关闭蜂鸣器</td>
  </tr>
</table>

## 固件烧录

:::caution note
请 `不要使用 OTA` 更新固件，这可能会导致设备完全损坏。详细信息请[点击这里](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/ota/)
:::
#### 步骤 1：进入 DFU 模式

通过 Web Flasher 进入 DFU。如果多次失败，请手动进入 DFU。

<Tabs>
<TabItem value="method1" label="通过 Web Flasher">

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将设备连接到电脑，在设备列表中选择 `SenseCAP Mesh Tracker X1`，并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SelectX1111.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，此时会显示一个名为 `X1 xxx` 的串口。点击并连接它。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SerialSelectionX111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="手动进入">

将 USB 线连接到电脑，按住设备按键，然后**快速**连接充电线两次。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

如果 X1 处于 DFU 模式，白色 ⚪️ LED 将保持常亮。同时，你的电脑上应显示一个名为 `X1` 的驱动器。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1DriveMAC.png" alt="pir" width={300} height="auto" /></p>

#### 步骤 2：擦除 Flash

在烧录固件之前，请先进行擦除操作！

点击 `垃圾桶` 图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/EraseX11.png" alt="pir" width={800} height="auto" /></p>

下载擦除固件并将其复制到该驱动器中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashFirmwareX11.png" alt="pir" width={800} height="auto" /></p>

此过程可能需要一些时间；请等待该驱动器消失。

#### 步骤 3：烧录固件

选择最新固件，并下载 `UF2` 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashClick.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件复制到 DFU 驱动器中。文件复制完成并且设备重启后，固件即会被烧录。

## 进阶教程

### 配置 GPS

请将 GPS 设置为启用状态。你可以调整更新间隔和广播间隔，以获取更加实时的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请打开 `Accurate Location`。否则定位可能会有偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### 通过网站连接

如果你想在网站中发送文本消息并与其他节点通信，现在可以将设备连接到 [Meshtastic 网站](https://client.meshtastic.org/messages/broadcast/0)。 

  步骤 1：打开网站

    [点击这里](https://client.meshtastic.org/messages/broadcast/0) 进入网站。

  步骤 2：添加新设备 

    点击 "+ New Connection"。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    有两种连接方式，你可以选择自己偏好的方式。

<Tabs>

<TabItem value="11" label="Bluetooth">


    选择 Bluetooth。在弹出的窗口中选择设备 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="12" label="Serial">

    选择串口方式。打开设备管理器查看设备连接的是哪个端口，然后在弹出的窗口中选择该端口。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>
</Tabs>

  你的设备会显示在列表中。点击进行连接。如果连接成功，你可以在网站上直接查看设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Websitestatus.png" alt="pir" width={300} height="auto" /></p>

### 配置传感器

|传感器|描述|
|-|-|
|气压|✅|
|6 轴传感器（未来版本）|✅|
|3 轴传感器（未来版本）|✅|

**蜂鸣器和 LED 配置**

||类型|输出引脚|
|-|-|-|
|蜂鸣器|PWM 蜂鸣器|25|
|LED|RGB|R:03<br/>G:24<br/>B:28|
|振动马达|-|05|

<Tabs>
<TabItem value="ios" label="IOS App">

进入 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

进入 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

更多详情请查看 [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/)。

:::tip
更新设备配置后，设备会重启，这可能需要一些时间。
:::

### 配置铃声

进入 `Settings` -> `Ringtone Config`，然后输入你想用于外部通知的 RTTTL 铃声字符串。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000E20260410.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="塞尔达传说：获得道具">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="超级马里奥主题曲（短版）">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="马里奥金币">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="诺基亚铃声">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="马里奥能量提升">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="莫尔斯电码 CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

### 配置蜂鸣器

蜂鸣器默认启用。如果你想禁用蜂鸣器，请将 `Alert Message buzzer`、`Alert bell buzzer` 和 `Use PWM buzzer` 设置为如下截图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

### 配置消息提醒

消息提醒可以在 `External Notification` 中进行配置。

<Tabs>

<TabItem value="aaa" label="IOS">

进入 `Setting` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ExternalNotificationIOS.png" alt="pir" width={300} height="auto" /></p>

你可以配置为 `buzzer off + vibra off`。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IONotificationOff.png" alt="pir" width={600} height="auto" /></p>

或者 `buzzer on + vibra on`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IOSNotificationOn.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="bbb" label="Android">

进入 `Setting` -> `Module Configuration` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Module_Notification_Android.png" alt="pir" width={600} height="auto" /></p>

启用 `External notification enabled`，然后你可以配置为 `buzzer only`、`vibra only` 或 `buzzer on + vibra on`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/NotificationSettingConfig.png" alt="pir" width={900} height="auto" /></p>

禁用 `External notification enabled`，然后你可以配置为 `buzzer off + vibra off`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Notificationoff.jpg" alt="pir" width={300} height="auto" /></p>


</TabItem>

</Tabs>

## 常见问题


### 如何查看设备 ID

<Tabs>
<TabItem value="23" label="查看设备背面">
MAC 地址的 `最后四位数字` 即为设备 ID

例如，下方设备的设备 ID 为 `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="通过串口工具">
访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 点击 `Open Serial Monitor`，将设备连接到电脑，查看串口日志，关键字为 `using nodenum`。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### 如何重启设备

 长按按键，然后连接充电线。

## 故障排查

### 设备无法开机

- 当 LED 指示灯和蜂鸣器未激活时，设备可能看起来像是断电。在执行上述步骤之前，建议先 `检查以下参数`：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- 使用已知正常的 USB 线连续 `为设备充电` 1–2 小时，以确保电池有足够电量唤醒系统。

- 如果设备在充电后仍无响应，请按如下方式 `执行硬复位`：拔下 USB 线。按住按键不放，然后在保持按键按下的同时插入 USB 线。大约按住 3 秒后松开。这将强制系统复位。

 - 如果仍然无效，将 USB 线连接到电脑。按住设备按键，然后将设备连接到电脑，查看电脑中是否弹出磁盘。如果有，请重新安装 bootloader。

### 设备卡在启动循环中

**现象说明：**

设备会不断重启，串口会反复连接和断开。

**解决方案：**

- 步骤 1：尝试手动进入 DFU 模式：按住设备按键，然后**快速**连接充电线两次

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

如果白色 LED 常亮，则表示设备已进入 DFU 模式。

:::note
要成功进入 DFU 模式，需要快速完成上述操作。你可能需要多次尝试。
:::

- 步骤 2：擦除 Flash

- 步骤 3：烧录固件

### Bootloader 安装


<Tabs>

<TabItem value="m2" label="通过 Adafruit-nrfutil 安装">


- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/mesh_tracker_x1_bootloader-0.10.0-13.zip)

:::danger note
在烧录 bootloader 时，请确保线缆连接稳定，并且在烧录过程中 **不要** 断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，然后在弹出的窗口中输入 "cmd"，再按 "Enter"。这样可以打开命令行。 

对于 Mac 用户，同时按下 "Command" 键和 "Space" 键，以打开 Spotlight。然后输入 "termial"，按 "Return"。这样可以打开命令行。 

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 Python 和 pip 是否已成功安装。

```
python --version
```

```
python -m pip --version
```

然后应该会出现 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 Python。

这是安装最新版本的推荐方式：

```
pip3 install --user adafruit-nrfutil
```

检查安装路径：

```
python -m pip show adafruit-nrfutil
```

这是安装位置：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，你可能需要手动添加路径。复制上一步中显示的安装位置，然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2：检查端口号**

将设备连接到电脑，并检查端口号。

对于 Windows 用户，打开设备管理器，进入 `port`，设备连接后新出现的端口号即为设备端口号。

对于 Mac 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**步骤 3：烧录 bootloader**

在终端或命令提示符中，进入你下载 bootloader 压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **Windows 平台**：

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

请将 COMXX 改为你的 COM 号。例如，如果你的设备在 com6 上，请将命令改为：

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变端口号。因此如果安装失败，请再次检查端口号。

- **适用于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

当你完成上述步骤后，你可以按照这个[步骤](https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/#flash-firmware)烧录应用固件。

</TabItem>

<TabItem value="m3" label="Install from Source">


如果你在使用 PyPi 安装时遇到问题，或者想要修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`；然而，如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上的 Python 3.x 安装仍然使用 python.exe 这个名称

要在你的主目录用户空间中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧，或者被设置为尝试安装到系统目录。在这种情况下，请使用 `--user` 标志：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果你想安装到系统目录（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

要生成该工具的自包含可执行二进制文件（Windows 和 MacOS），请运行以下命令：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

你会在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe（如果你在 Windows 上，则带有 `.exe`）。
为了方便使用，请将其复制或移动到其他位置，例如 %PATH% 中的某个目录。

**步骤 2：检查你的端口号**

将设备连接到电脑，并检查端口号。

对于 Windows 用户，打开设备管理器，进入“端口”，设备连接后新出现的端口号就是设备的端口号。

对于 Mac 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**步骤 3：烧录引导程序（bootloader）**

在终端或命令提示符中，进入你下载引导程序压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **适用于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

请将 COMXX 改为你的 COM 号。例如，如果你的设备在 com6 上，请将命令改为：

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变其端口号。因此如果安装失败，请再次检查端口号。

- **适用于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

当你完成上述步骤后，你可以按照这个[步骤](https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/#flash-firmware)烧录应用固件。

</TabItem>
</Tabs>


**2）设备无法进入 DFU 模式，但可以检测到串口**。

- 打开一个串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   当你连接时，指示灯会短暂闪烁。持续尝试，直到指示灯常亮，这意味着设备可以回到 DFU 模式，然后[烧录引导程序](https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/#bootloader-installation) -> [擦除闪存](https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/#step-2-flash-erase) -> [烧录固件](https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/#step-3-flash-firmware)。

**3）设备无法进入 DFU 模式，且没有串口显示**

- 按住设备按键，然后连接充电线。当电脑上弹出一个磁盘后，你可能会看到串口。

- 如果仍然不行，请断开充电线，将设备放置几天直到电池完全耗尽，然后连接充电线并再次尝试配对。

**4）如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

 ### 设备自动关机

- **现象描述**

 - 设备开机后，过一段时间会自动关机或重启。 
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息传输过程、正在配置中……

- **故障排查**

 [点击这里](https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/#step-2-flash-erase) 执行闪存擦除。 

 ### 恢复出厂设置
如果你想恢复到默认设置，可以执行恢复出厂设置。这里有两种方法可以进行恢复出厂设置。

- [点击这里](https://wiki.seeedstudio.com/cn/x1_get_started_for_meshtastic/#step-2-flash-erase) 擦除设备闪存，然后重新烧录最新固件。

- 在应用中点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 私信发送失败

#### NodeDB 重置

NodeDB 是本地数据库，用于存储当前 Mesh 网络中已发现节点的信息。如果你遇到无法与某个节点通信的情况，可能是因为你的 nodeDB 中存储了该节点的过期信息，你需要对其进行更新。

打开应用并连接到目标设备。进入 **Settings**->**Device**->**Device Config**->**Reset NodeDB**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

#### 交换用户信息

每个节点都会周期性地发送自己的节点信息，使 Mesh 中的其他节点能够“看到”和“识别”它。两个节点需要彼此交换节点信息，才能相互通信。如果你无法与列表中的另一个节点发送或接收私信，可以在应用中手动提示它们交换信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 重新生成私钥

两个节点需要彼此知道对方的私钥，才能相互通信。如果某个节点在私信传输中持续失败，请尝试为其重新生成私钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

重启故障设备以使配置生效。

:::note
在重新生成密钥后，其他设备需要重新与该节点连接。因此最好从其他设备的节点列表中删除该节点。
:::

### 信号质量

  - **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

  - **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。 

      为获得最佳信号效果，请在开阔、无遮挡且干扰最小的区域使用设备。


## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
