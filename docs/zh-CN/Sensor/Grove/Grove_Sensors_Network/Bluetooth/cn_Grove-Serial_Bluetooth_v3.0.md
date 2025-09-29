---
title: Grove - 串口蓝牙 v3.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Serial_Bluetooth_v3.0/
slug: /cn/Grove-Serial_Bluetooth_v3.0
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove-Serial_Bluetooth_v3.0.jpg)

Grove - 串口蓝牙是一个易于使用的模块，兼容现有的 Grove Base Shield，专为透明无线串口连接设置而设计。该串口蓝牙模块是完全合格的蓝牙 V2.0+EDR（增强数据速率）2Mbps 调制，具有完整的 2.4GHz 无线收发器和基带。它使用 CSR Bluecore 04-External 单芯片蓝牙系统，采用 CMOS 技术并具有 AFH（自适应跳频功能）。它具有最小的封装尺寸 12.7mm x 27mm。希望它能简化您的整体设计/开发周期。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)

规格参数
--------------

- 工作电压：5.0VDC
- 数据速率：2Mbps
- RF 发射功率（最大）：+4dBm
- 灵敏度：-80dBm
- 完全合格的蓝牙 V2.0+EDR 3Mbps 调制
- 可选择波特率
- 当因超出连接范围而断开连接时，30 分钟内自动重连

:::tip
更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
演示
-------------

两个蓝牙模块的工作方式如下所示：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt5.JPG)

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt6.JPG)

### 硬件安装

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_3_.jpg.png)

### 下载代码并上传

1. 您可以在 github 上下载代码，点击[这里](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip)，然后将其解压到 Arduino 的 libraries 文件夹中。
2. 打开 Arduino IDE，打开 File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Master_Button，然后您打开 Master 的代码，按如下方式修改代码：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_4_.jpg.png)

1. 打开 Arduino IDE，打开 File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_led，然后您打开 Slave 的代码，同样按照上面的方式修改代码。
2. 保存修改并点击 Upload 上传代码，如果您在如何启动 Arduino 方面有任何问题，请点击<a href="/cn/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}> 这里 </font></span></a>获取帮助。

### 检查结果

1. 完成向 Master 和 Slave 上传代码后，同时重置两个设备
2. 您可以看到 LED 闪烁，表示设备正在初始化和连接。
3. 大约几秒钟后，LED 亮起，表示 Master 和 Slave 已连接。

<div class="admonition note">
<p class="admonition-title">注意</p>
如果没有观察到上述现象，请尝试拔掉电源并重新插入。
</div>

参考资料
---------

### 更改默认配置的命令

**1. 设置工作模式**

| 命令  | 描述                                 |
|----------|---------------------------------------------|
| AT+ROLES | 将设备工作模式设置为客户端（从设备）。  |
| AT+ROLEM | 将设备工作模式设置为服务器（主设备）。 |

**2.设置波特率**

| 命令  | 描述                                 |
|----------|---------------------------------------------|
| AT+BAUD4 | 设置波特率 9600。保存并重置。  |
| AT+BAUD5 | 设置波特率 19200。保存并重置。  |
| AT+BAUD6 | 设置波特率 38400。保存并重置。  |
| AT+BAUD7 | 设置波特率 57600。保存并重置。  |
| AT+BAUD8 | 设置波特率 115200。保存并重置。  |
| AT+BAUD9 | 设置波特率 230400。保存并重置。  |
| AT+BAUDA | 设置波特率 460800。保存并重置。  |

**3. 设置设备名称**

| 命令        | 描述                                    |
|----------------|------------------------------------------------|
| AT+NMAEabcdefg | 将设备名称设置为 "abcdefg"。最大长度为 12。 |

**4. 设置配对码**

| 命令    | 描述                          |
|------------|--------------------------------------|
| AT+PIN2222 | 设置配对码 "2222"，最大长度为 12。 |

**5.将所有设置值恢复为出厂设置**

| 命令    | 描述                              |
|------------|------------------------------------------|
| AT+DEFAULT | 将所有设置值恢复为出厂设置 |

**6. 查询模块地址**

| 命令 | 描述          |
|---------|----------------------|
| AT+ADDR | 查询模块地址 |

**7. 查询最后连接的设备地址**

| 命令 | 描述          |
|---------|----------------------|
| AT+RADD | 查询模块地址 |

<!-- ## Schematic Online Viewer -->

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} -&gt; < div>
</div> -->

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [串口蓝牙 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [蓝牙软件说明](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)
- [蓝牙 - 模块数据手册](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Bluetooth_module.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth_v3.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>