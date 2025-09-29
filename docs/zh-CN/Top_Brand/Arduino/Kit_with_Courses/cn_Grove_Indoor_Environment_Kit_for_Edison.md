---
description: Grove Edison室内环境套件
title: Grove Edison室内环境套件
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Indoor_Environment_Kit_for_Edison
last_update:
  date: 2/17/2023
  author: jianjing Huang
---

<!-- ---
name: Grove Indoor Environment Kit for Edison
category: Others
bzurl: https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html
oldwikiname:  Grove Indoor Environment Kit for Edison
prodimagename: Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG
surveyurl: https://www.research.net/r/Grove_Indoor_Environment_Kit_for_Edison
sku:  110060064
--- -->

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG)

Grove Edison室内环境套件让您可以轻松地使用Intel Edison和Arduino扩展板创建完整的室内环境应用。通过Base Shield V2，开发者可以快速插接多达11个不同的Grove传感器和执行器。我们提供了很酷的演示代码，这些代码将持续更新，即使没有任何编程经验，操作这些传感器和执行器也会非常容易。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html)

## 套件包含什么？

---

* [Base Shield V2](/cn/Base_Shield_V2)  x1

* [Grove - 温湿度传感器（高精度迷你版）](/cn/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0)  x1

* [Grove - 湿度传感器](/cn/Grove-Moisture_Sensor)  x1

* [Grove - 光线传感器](/cn/Grove-Light_Sensor)  x1

* [Grove - 紫外线传感器](/cn/Grove-UV_Sensor)  x1

* [Grove - PIR运动传感器](/cn/Grove-PIR_Motion_Sensor)  x1

* [Grove - 编码器](/cn/Grove-Encoder)  x1

* [Grove - 按钮](/cn/Grove-Button)  x1

* [Grove - LCD RGB背光](/cn/Grove-LCD_RGB_Backlight)  x1

* [Grove - 继电器](/cn/Grove-Relay)  x1

* [Grove - 舵机](/cn/Grove-Servo)  x1

* [Grove - 蜂鸣器](/cn/Grove-Buzzer)  x1

* [9V转桶形插头适配器](https://www.seeedstudio.com/depot/9V-to-Barrel-Jack-Adapter-p-1481.html)  x1

* 26AWG Grove线缆  x10

* USB线缆  x1

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove-Indoor-Environment-Kit-for-Edison.jpg)

## 安装Edison Arduino IDE

---
参考Intel Edison官方网站：[Edison入门指南](https://communities.intel.com/docs/DOC-23147)

1.下载Edison Arduino IDE。（注意：选择您的操作系统。）

2.导航到您下载.zip Edison Arduino IDE的文件夹

3.右键点击.7z文件，高亮"7-zip"，然后选择"解压到'arduino-…'"

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_Extract_7z.png)

4.点击进入创建的文件夹，直到您看到IDE"arduino.exe"文件。双击此文件，应该会打开这个窗口。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_ArduinoIDE.png)

## 安装所需驱动程序

---
1.下载 [FTDI 驱动程序](https://www.ftdichip.com/Drivers/CDM/CDM%20v2.10.00%20WHQL%20Certified.exe)

2.右键单击您下载的 .exe 文件（应该叫做"CDM…"），然后选择"以管理员身份运行"。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver.jpg)

3.点击"Extract"。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install.jpg)

4.点击"Next"。

5.当您看到此屏幕时，点击"Finish"。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install_ok.jpg)

6.下载 [Intel Edison 驱动程序](https://communities.intel.com/docs/DOC-23242) 来安装所需的 RNDIS、CDC 和 DFU 驱动程序。

7.双击 .exe 文件开始安装。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Intel_Edison_Driver.jpg)

## 硬件连接

---
使用 26AWG Grove 线缆进行以下连接：

<table>
  <tbody>
    <tr>
      <th>Grove 模块</th>
      <th>连接到</th>
    </tr>
    <tr>
      <td width="200px">温湿度传感器</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">湿度传感器</td>
      <td width="100px">A1</td>
    </tr>
    <tr>
      <td width="200px">光线传感器</td>
      <td width="100px">A2</td>
    </tr>
    <tr>
      <td width="200px">紫外线传感器</td>
      <td width="100px">A3</td>
    </tr>
    <tr>
      <td width="200px">PIR 运动传感器</td>
      <td width="100px">D7</td>
    </tr>
    <tr>
      <td width="200px">编码器</td>
      <td width="100px">D2</td>
    </tr>
    <tr>
      <td width="200px">按钮</td>
      <td width="100px">UART(D1)</td>
    </tr>
    <tr>
      <td width="200px">LCD RGB 背光</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">继电器</td>
      <td width="100px">D5</td>
    </tr>
    <tr>
      <td width="200px">舵机</td>
      <td width="100px">D6</td>
    </tr>
    <tr>
      <td width="200px">蜂鸣器</td>
      <td width="100px">D4</td>
    </tr>
  </tbody>
</table>

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_Indoor_Wire_Figure.png)

## 运行示例

---
1.打开网站：[Grove_Indoor_Environment_Demo](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo) 下载整个项目。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Github_Demo.png)

2.点击 **Tools > Serial Port** 并选择 Intel Edison 连接的 Com # 端口

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Import_Indoor_Kit_Demo.png)

3.点击 Sketch>Import Library…>Add Library 并导入在**步骤 1** 中下载的库

4.点击 **File>Examples> Grove_Indoor_Environment_Demo** 并选择演示程序，点击**上传**图标

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Upload_Indoor_Kit_Demo.png)

5.打开**串口监视器**，它将打印传感器信息：

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Serial_Monitor.png)

6.旋转编码器在 LCD 上查看传感器值。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Rotate_Encoder.png)

7.在**"发送文本框"**中，您可以输入以下命令来操作传感器和执行器：

_set [传感器][条件：>、< 或 =][阈值],[执行器]=[动作]_

<table>
  <tbody>
    <tr>
      <th>示例</th>
      <th>描述</th>
    </tr>
    <tr>
      <td width="300px">_set temp>40, relay=1_</td>
      <td width="500px">如果温度高于 40℃，继电器打开。</td>
    </tr>
    <tr>
      <td width="300px">_set temp>40, sleep=1_</td>
      <td width="500px">如果温度 >40℃，什么都不做。</td>
    </tr>
    <tr>
      <td width="300px">_set humi>60, buzzer=1_</td>
      <td width="500px">如果湿度 >60%，蜂鸣器响。</td>
    </tr>
    <tr>
      <td width="300px">_set light>600, servo=90_</td>
      <td width="500px">如果光强度 >600，舵机转动 90°。</td>
    </tr>
    <tr>
      <td width="300px">_set uv>80, relay=0_</td>
      <td width="500px">如果紫外线强度 >80，继电器关闭。</td>
    </tr>
    <tr>
      <td width="300px">_set pir=1, buzzer=1_</td>
      <td width="500px">如果检测到人，蜂鸣器响。</td>
    </tr>
    <tr>
      <td width="300px">_set ms>40, relay=1_</td>
      <td width="500px">如果湿度 >40，继电器打开。</td>
    </tr>
    <tr>
      <td width="300px">_set ssid=name, psw=password_</td>
      <td width="500px">设置 wifi SSID 和密码。您可以打开网页浏览器，访问串口监视器或 LCD 上显示的 IP 地址。默认端口是 88。默认端口是 88。例如：192.168.1.101:88</td>
    </tr>
  </tbody>
</table>

注意：

* 命令应该以'/n'结尾，所以应该选择**"NewLine"**（在串口监视器中）。

* 一个执行器只能被一个传感器控制。如果 A 传感器想要控制一个执行器（已被 B 传感器控制），B 传感器应该设置为 sleep。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_command.png)

8.WiFi 连接。打开串口监视器，设置您的 ssid 和密码（如下所示）。在 LCD 或串口监视器上查看本地 IP。在连接到同一网络的设备上，打开网页浏览器，访问上述 IP 地址，您可以看到传感器值。

_**注意：访问网页服务器时，应该添加端口号(88)，例如：172.20.10.2:88。**_

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_SSID_PSW.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Local_IP.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Web_Server.png)

## 资源

---

* [Grove 室内环境套件源代码](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo)

* [Edison 入门指南](https://communities.intel.com/community/makers/edison/getting-started)

* [Intel Edison 软件和文档](https://communities.intel.com/community/makers/edison/documentation)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>