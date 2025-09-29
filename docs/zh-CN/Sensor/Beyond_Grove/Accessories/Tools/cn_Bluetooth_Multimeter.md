---
title: 蓝牙万用表
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Bluetooth_Multimeter/
slug: /cn/Bluetooth_Multimeter
last_update:
  date: 02/03/2022
  author: gunengyu
---

蓝牙万用表是一款专为工程师设计的智能安卓手机外设。它不仅可以轻松采集电压、电流和电阻等数据，还可以通过蓝牙与手机通信，从而将采集到的数据显示在手机上。硬件和软件的持续优化保证了该万用表的测量精度。

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bluetooth_Multimeter.jpg)

它的硬件和软件均为开源！此外，我们还提供 API 和详细说明，使得这款蓝牙万用表成为开发者使用和二次开发的开放平台。它可以采集各种传感器的数据，例如心跳数据，并将其传输到智能手机进行数据监控。硬件与软件的完美结合为您的应用和开发提供了无限可能。

这款蓝牙万用表配备了内置锂电池和充电电路。软件对功耗的严格控制确保了该产品的易用性。亚克力外壳一方面使组装变得简单，另一方面使产品稳定可靠。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html)

##   规格
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">项目</th>
<th scope="col">最小值</th>
<th scope="col">典型值</th>
<th scope="col">最大值</th>
<th scope="col">单位</th>
</tr>
<tr>
<th scope="row">电压测量范围</th>
<td>-30</td>
<td>-</td>
<td>30</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">电压测量精度</th>
<td colspan="3">3</td>
<td>%</td>
</tr>
<tr>
<th scope="row">电流测量范围（最大值）</th>
<td colspan="3">1</td>
<td>A</td>
</tr>
<tr>
<th scope="row">电流测量精度</th>
<td colspan="3">3</td>
<td>%</td>
</tr>
<tr>
<th scope="row">电阻测量范围</th>
<td>10</td>
<td>-</td>
<td>1,000,000</td>
<td>Ω</td>
</tr>
<tr>
<th scope="row">电压测量精度</th>
<td colspan="3">5</td>
<td>%</td>
</tr>
<tr>
<th scope="row">工作温度</th>
<td>0</td>
<td>-</td>
<td>45</td>
<td>℃</td>
</tr>
</table>

##  产品概览
---
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/产品视图.png)

*   ①：USB 接口。不仅可以提供电源，还可以为内置电池充电。我们选择了一块容量为 500mAh 的锂电池，预计可以使用 10 小时。
*   ②：用于串行蓝牙编程的连接器。
*   ③：蓝牙万用表电源开关。
*   ④：配对指示灯。
<dl><dd>红色指示灯和蓝色指示灯交替闪烁 --- 配对中</dd><dd>蓝色指示灯闪烁 --- 配对成功</dd></dl>

*   ⑤：充电指示灯。
<dl><dd>红色指示灯亮 - 正在充电</dd><dd>绿色指示灯亮 - 充电完成</dd></dl>

*   ⑥：数据传输指示灯。传输数据时会闪烁。
*   ⑦：用于测量电阻的音频连接器。
*   ⑧：用于测量电压的音频连接器。
*   ⑨：用于测量电流的音频连接器。
*   ⑩：电流档位选择开关。

## 工作图表
---
蓝牙万用表和安卓设备的工作示意图如下所示：

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Multimater_Work_Principle_1.jpg)

## 演示
---
这款蓝牙万用表是一种便携式万用表，可以测量电压、电阻和电流，并通过蓝牙将这些数据发送到其他设备，以便我们通过其他设备观察数据。接下来我们将演示如何使用它。

**手机与蓝牙万用表配对**

*   1) 下载 [应用程序包：SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip) 并安装。

*   2) 然后点击 SmartMeter 应用图标运行程序，此时如果手机蓝牙未打开，会出现蓝牙权限请求。点击“YES”以打开蓝牙。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_request.JPG)

*   3) 进入 UI 界面后，打开红色应用开关，屏幕上会显示 0.0。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Switch.jpg)

*   4) 点击蓝牙图标选择设备。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_device.jpg)

*   5) 请选择 BT MULTIMETER 设备与手机配对。如果 BT MULTIMETER 设备不存在，需要点击“Scan for device”搜索设备。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bt_list_device.JPG)

注意：如果没有 BT MULTIMETER 设备可供选择，也没有“Scan for device”选项进行搜索，可以先使用手机与蓝牙万用表配对，然后再运行应用程序。

*   6) 输入“0000”（蓝牙万用表默认密码）或“1234”进行蓝牙配对。建议观察配对指示灯，以帮助判断配对是否成功。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Pair.JPG)

*   7) 恭喜您完成配对。
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_Interface.jpg)

**测量**

与其他万用表一样，蓝牙万用表在使用时有一些注意事项，例如：不要在供电时测量电阻。因此我们强烈建议您阅读万用表的使用注意事项，以免设备无法正常使用。

**测量电阻**
现在我们来测量电阻。当安卓应用程序与万用表连接后，选择电阻（即将光标移动到 Ω），将音频线连接到蓝牙万用表标记为 R 的接口。

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Om.JPG)

**测量电压**
测量电压非常简单。只需将安卓应用程序的光标移动到 V，并将音频线移动到 VOL 接口，然后您就可以看到电压值。

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/V.JPG)

测量电流的方法与其他万用表相同。需要提醒您选择正确的电流范围。

<font color="blue">注意：为了获得精确的数据，必须检查音频线是否连接到对应的接口，并确保光标处于正确的位置。</font>

## 参考
---
### UI界面

我们为蓝牙万用表提供了三个安卓应用程序的UI界面。

|UI 1.jpg|UI 2.jpg|UI 3.jpg|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_1.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_2.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_3.jpg)|

我们一致认为前两个版本的颜色不够鲜艳，应该采用橙色和黑色或红色和黑色这两种万用表通用配色。同时，我们在黄色版本中增加了“保持”按钮、“范围”按钮、拨盘（mA、A、Ω、V、OFF（可选）五档）。我们发布了关于您喜欢哪个版本的帖子。以下是反馈信息：

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Red_Version.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/GreenSumsung.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Yellow.jpg)

### 结构与外观

**效果图**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_effect.jpg)

**打印图片**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Printed_Picture.jpg)


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
- [蓝牙万用表 Eagle 文件](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip)
- [文件：蓝牙万用表库](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMultimeter_Library.zip)
- [应用程序包：SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>