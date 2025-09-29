---
description: Seeeduino Cloud 和 Grove IoT 入门套件，由 AWS 提供支持
title: Seeeduino Cloud 和 Grove IoT 入门套件，由 AWS 提供支持
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_seeeduino_wiki_cover.JPG)

*主要文章：从这里开始 <a href="/cn/Grove_IoT_Starter_Kits_Powered_by_AWS" ><span><font size={"3"}> Grove IoT 入门套件，由 AWS 提供支持 </font></span></a> , <a href="/cn/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud 开发板</font></span></a>*

**<a href="/cn/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud 开发板</font></span></a>** 是一款基于 Dragino WiFi IoT 模块 [HE](http://www.dragino.com/products/linux-module/item/87-he.html) 和 ATmega32u4 的微控制器开发板。**HE** 是一个高性能、低成本的 150M、2.4G WiFi 模块，内置开源 OpenWrt 系统。Seeeduino Cloud 也是一款与 [Arduino Yun](https://www.arduino.cc/en/Main/ArduinoBoardYun) 兼容的开发板。该套件包含最常用的传感器和执行器，帮助您将想法转化为基于 AWS 云计算的实际应用。

[![enter image description here](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B01669BB60)

## 特性

--------

- 开箱即用，即插即用，无需面包板或焊接工作。
- 完全符合 AWS 的服务和 AWS 的实践。
- 为开发者和创客提供逐步教程，实现更快速的原型制作。

## 零件清单

-------------------

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_seeeduino_cloud.JPG)

| 开发板/零件                                                                                                                                            | 数量 | 文档                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----|-------------------------------------------------------------------------------|
| [Seeeduino Cloud 开发板](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html?cPath=6_7) | 1   | <a href="/cn/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud 开发板</font></span></a>                               |
| [Base Shield](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html?cPath=98_16)                                                                | 1   | [点击阅读](/cn/Base_Shield_V2/ "Base shield v2")                                 |
| [Grove - LCD RGB 背光](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html?cPath=34_36)                                         | 1   | [点击阅读](/cn/Grove-LCD_RGB_Backlight "Grove - LCD RGB Backlight")             |
| [Grove - 继电器](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)                                                                  | 1   | [点击阅读](/cn/Grove-Relay "Grove - Relay")                                     |
| [Grove - 蜂鸣器](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)                                                                   | 1   | [点击阅读](/cn/Grove-Buzzer "Grove - Buzzer")                                   |
| [Grove - 声音传感器](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                                   | 1   | [点击阅读](/cn/Grove-Sound_Sensor "Grove - Sound Sensor")                       |
| [Grove - 触摸传感器](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)                                                    | 1   | [点击阅读](/cn/Grove-Touch_Sensor "Grove - Touch Sensor")                       |
| [Grove - 旋转角度传感器](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)                                      | 1   | [点击阅读](/cn/Grove-Rotary_Angle_Sensor "Grove - Rotary Angle Sensor")         |
| [Grove - 温度传感器](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                                       | 1   | [点击阅读](/cn/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2") |
| [Grove - LED](https://www.seeedstudio.com/Grove-LED-p-767.html)                                                                                  | 1   | [点击阅读](/cn/Grove-Red_LED "Grove-Red_LED")                                         |
| [Grove - 光线传感器](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)                                                    | 1   | [点击阅读](/cn/Grove-Light_Sensor "Grove - Light Sensor")                       |
| [Grove – 按钮](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)                                                                | 1   | [点击阅读](/cn/Grove-Button "Grove - Button")                                   |
| DIP LED 蓝色-蓝色                                                                                                                                     | 1   |                                                                               |
| DIP LED 绿色-绿色                                                                                                                                   | 1   |                                                                               |
| DIP LED 红色-红色                                                                                                                                       | 1   |                                                                               |
| 迷你舵机                                                                                                                                            | 1   |                                                                               |
| Micro USB 数据线 - 48cm                                                                                                                                | 1   |                                                                               |

## 配置您的 AWS IoT 服务

------------------------------

在本节中，我们将展示如何配置 AWS IoT 服务：

- 步骤 1. 创建一个 [AWS 账户](https://aws.amazon.com/free/?nc1=h_ls)。

- 步骤 2. 前往 [AWS IoT](https://us-west-2.console.aws.amazon.com/iotv2/home?region=us-west-2#/home)。

- 步骤 3. 加载 IoT 控制台后，点击"Get Started"。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Get%20started.png)

- 步骤 4. 点击左侧菜单中的"Manage"，然后点击"Register a thing"。
- 步骤 5. 输入一个名称，任何您喜欢的名称，在原始教程中它被称为 temperature，然后点击"create"（"Register a thing"图片）。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Register%20a%20thing.png)

- 步骤 6. 点击您创建的设备。
- 步骤 7. 点击左侧菜单中的 Security，然后点击 Create certificate。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Thing%20-%20Security.png)

- 步骤 8. 它将显示三个下载链接，分别对应不同的密钥文件或证书。下载这些文件，我们稍后需要它们。同时确保下载根 CA（在"Activate"按钮上方）。点击 Activate，然后点击 Attach a policy，再点击 Create a policy。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20created.png)

- 步骤 9. 为您的策略命名，您可以随意命名，我们将其命名为 policy1。首先，您可以使用 iot:* 作为 Action，使用 * 作为 Resource ARN。勾选 Allow 并点击 create。
作为未来参考，操作和资源 ARN 的 * 允许您对所有设备执行所有操作。生产策略的最佳实践是使其更加具体。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Create%20a%20policy.png)

- 步骤 10. 现在策略已创建，点击左侧的 Certificates。
点击我们之前创建的证书。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificates.png)

- 步骤 11. 点击 Actions 按钮，从菜单中选择 Attach policy。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20Actions.png)

- 步骤 12. 选择我们之前创建的策略并点击 Attach。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Attach%20policy.png)

## 设置您的 Seeeduino Cloud (Arduino Yun)

-----------------------------------------

### Seeeduino Cloud (Arduino Yun) 入门

如果这是您第一次使用 Seeeduino Cloud 或 Arduino Yun，您可以点击 <a href="/cn/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud 开发板</font></span></a> 开始使用。在进行以下步骤之前，请确保您的计算机上已安装 **expect** 并正确安装了 [Arduino IDE](https://www.arduino.cc/en/Main/OldSoftwareReleases)。

### 下载 AWS-IoT-Arduino-Yún-SDK

点击[这里](https://s3.amazonaws.com/aws-iot-device-sdk-arduino-yun/AWS-IoT-Arduino-Yun-SDK-latest.zip)下载 AWS-IoT-Arduino-Yún-SDK 压缩包，并将其解压到您计算机上的 AWS-IoT-Arduino-Yun-SDK 文件夹中。

### 在 Mac OS/Linux 上安装

在进行以下步骤之前，请确保您的计算机上已安装并正确安装了 Arduino IDE。

#### 在 Ubuntu 上安装

对于 Ubuntu，只需运行以下命令。sudo apt-get install expect 对于 Mac OS X，**expect** 默认已安装。

#### 安装 Arduino IDE

有关在 Linux 上安装 Arduino IDE，请访问[这里](http://playground.arduino.cc/Linux/All)。

#### 设置开发板

- 步骤 1. 设置 Arduino Yún 开发板并将其连接到 WiFi。获取其 IP 地址和密码。如果您不知道如何操作，可以按照这个 <a href="/cn/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Seeeduino Cloud 开发板</font></span></a> 教程。
- 步骤 2. 确保您的计算机连接到同一网络（本地 IP 地址范围）。
- 步骤 3. 从[这里](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem)下载 AWS IoT CA 文件。并将其保存为 *root-CA.crt*。
- 步骤 4. 将您的 AWS IoT CA 文件、私钥和证书放入 AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs。
- 步骤 5. 打开终端，cd 到 **AWS-IoT-Arduino-Yun-SDK**。执行 *chmod 755 AWSIoTArduinoYunInstallAll.sh* 并按如下方式执行。默认情况下，对于 Seeeduino Cloud，您的用户名将是 root，密码将是 seeeduino。Arduino Yún 开发板，您的用户名将是 root，密码将是 Arduino。对于步骤 5，设备下载和安装所需的包（distribute、python-OpenSSL、pip、paho-MQTT）可能需要 15-20 分钟。在脚本完成之前不要关闭终端，否则您必须重新开始步骤 5。在重复步骤 5 之前，请确保您在本地终端中。

```
./AWSIoTArduinoYunInstallAll.sh <Board IP> <UserName> <Board Password>.
```

- 步骤 6. 将 **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library** 文件夹复制并粘贴到随 Arduino SDK 安装一起安装的 Arduino 库中。对于 Mac OS 默认设置，它应该在 **Documents/Arduino/libraries** 下。

- 步骤 7. 如果在安装过程中 Arduino IDE 正在运行，请重启它。您应该能够在 IDE 的示例文件夹中看到 AWS IoT 示例。还有另外两个脚本：**AWSIoTArduinoYunScp.sh** 和 **AWSIoTArduinoYunSetupEnvironment.sh**，它们在 **AWSIoTArduinoYunInstallAll.sh** 中使用。您可以随时使用 **AWSIoTArduinoYunScp.sh** 将新的凭证上传到您的开发板。当您在目录 **AWS-IoT-Arduino-Yun-SDK/** 中时，命令应该类似这样：

```
./AWSIoTArduinoYunScp.sh <Board IP> <UserName> <Board Password> <File> <Destination>
```

### 在 Windows 上安装

在进行以下步骤之前，请确保您的 PC 上已安装 Putty 和 WinSCP。如果您更喜欢使用其他工具通过 SSH 连接到您的 Arduino Yún 开发板和传输文件，您需要根据您的工具调整以下步骤。Putty 可以从[这里](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)下载。WinSCP 可以从[这里](http://winscp.net/eng/download.php)下载。设置开发板。

- 步骤 1. 设置 Arduino Yún Cloud 开发板并将其连接到 WiFi。获取其 IP 地址和密码。如果您不知道如何操作，请按照这个 <a href="/cn/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Seeeduino Cloud 开发板</font></span></a>。

- 步骤 2. 确保您的 PC 连接到同一网络（本地 IP 地址范围）。

- 步骤 3. 从[这里](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem)下载 AWS IoT CA 文件。并将其保存为 root-CA.crt

- 步骤 4. 将您之前保存的 AWS IoT CA 文件、私钥和证书放入文件夹 **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs**。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_certs.png)

- 步骤 5. 启动 WinSCP 并将 AWS-IoT-Python-Runtime/ 文件夹上传到开发板的 /root。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_run_time_file.png)

- 步骤 6. 使用 Putty 通过 ssh 连接到您开发板上的 OpenWRT，并执行以下命令来安装必要的库。设备下载和安装所需包可能需要 15-20 分钟。

```
opkg update
opkg install distribute
opkg install python-openssl
easy_install pip
pip install AWSIoTPythonSDK==1.0.0
```

- 步骤 7. 复制并粘贴 AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library 文件夹到随 Arduino SDK 安装一起安装的 Arduino 库中。对于 Windows 默认设置，它应该在 **Documents/Arduino/libraries** 下。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_AWS_library_file_to_arduino_library.png)

- 步骤 8. 如果在安装过程中 Arduino IDE 正在运行，请重启它。您应该能够在 IDE 的示例文件夹中看到 AWS IoT 示例。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_load_example.png)

### 连接 Grove 模块

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_hardware_connection.png)

运行示例
------------

### 下载示例项目

- 步骤 1. 请首先从[这里](https://github.com/Lee-Kevin/10.GroveWithAWSIot/)下载示例项目。

- 步骤 2. 将下载的 zip 文件解压到您的计算机，并删除解压文件名中的 **-master**。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_open_example_sketch.png)

### 修改头文件

- 步骤 1. 打开文件 **aws_iot_config.h**，并用您之前已保存的基于您账户的示例代码替换下图红框中的内容。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_replace_header_file.png)

- 步骤 2. 双击 **GroveWithAWSIot.ino**，用几分钟前保存的头文件替换以下标记的代码，然后点击上传。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_select_serial_port.png)

- 步骤 3. 当您看到以下信息时，意味着您已经成功将代码下载到您的 Seeeduino Cloud。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_upload_complete.png)

### 查看结果

- 步骤 1. 打开串口监视器，您可以看到如下信息。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_view_result_in_serial_monitor.png)

- 步骤 2. 然后打开 AWS IoT 网站，登录您的账户。并点击您几分钟前创建的设备。

- 步骤 3. 点击 **Update shadow** 按钮。现在您可以看到温度已上传到网站。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_reopen_thing_and_update_shadow.png)

## 资源

---------

- [AWS IoT 文档](http://aws.amazon.com/documentation/iot/)
- <a href="/cn/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud wiki 页面</font></span></a>
- [AWS IoT Arduino Yún SDK](https://github.com/aws/aws-iot-device-sdk-arduino-yun)

## 技术支持与产品讨论

   <br />
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>