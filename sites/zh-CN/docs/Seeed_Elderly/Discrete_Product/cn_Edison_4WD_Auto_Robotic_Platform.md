---
description: Edison_4WD_自动机器人平台
title: Edison_4WD_自动机器人平台
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edison_4WD_Auto_Robotic_Platform
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform12.jpg)

4WD 自动机器人平台是一款强大的移动单元，配备 Intel Edison Arduino 套件。要控制该平台，您需要使用支持 WiFi 的智能手机或电脑连接到其 WiFi 接入点，打开网页浏览器并输入地址 [http://192.168.42.1:8000](http://192.168.42.1:8000)，然后操作仪表板将会显示。如果您是一名创客，这是一个初级项目，欢迎您对该平台进行更强大的改造。

## 入门指南

### 部件清单

| 部件 | 规格 | 材料 | 数量 |
|-----|----|-----|-----|
| 支架 1 | 200 * 35 * 20mm * 3.0mm | 铝 | 2 |
| 支架 2 | 135 * 35 * 20mm * 3.0mm | 铝 | 2 |
| 角接结构 | 29 * 12 * 10mm * 2.0mm | 金属 | 4 |
| 顶板 | 200 * 132 * 1.5mm | 铝 | 1 |
| 底板 | 199 * 129 * 2.0mm | 亚克力 | 1 |
| 电池固定器 | 67 * 15 * 2.0mm | 亚克力 | 2 |
| 上板 | 184 * 132 * 2.0mm | 亚克力 | 1 |
| 轮子 | Ф85mm * W31mm | 塑料 & 橡胶 | 4 |
| 轴联器 | 用于 Ф4mm 轴 | 金属 | 4 |
| 直流电机 | [规格](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf) | / | 2 |
| 直流电机（含编码器） | [规格](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf) | / | 2 |
| 距离固定器 | M3.0 * H45+6.0mm | 金属 | 4 |
| 距离固定器 | M3 × 10mm | 金属 | 4 |
| 距离固定器 | M2 * 10mm | 金属 | 3 |
| 六角内沉头螺钉 | M4.0 * H8.0mm | 金属 | 16 |
| 十字槽圆头螺钉 | M4.0 * H8.0mm | 金属 | 4 |
| 十字槽圆头螺钉 | M3 * 35mm | 金属 | 4 |
| 十字槽圆头螺钉 | M3 * 8mm | 金属 | 30 |
| 带垫圈的十字槽圆头螺钉 | M3.0 * H6.0mm | 金属 | 8 |
| 螺钉、弹簧锁紧垫圈和平垫圈组件 | M2 * 8mm | 金属 | 6 |
| 六角螺母 | M3 | 金属 | 8 |
| 弹簧锁紧垫圈 | M4 | 金属 | 4 |
| 平垫圈 | M3 * 7 * 0.5 | 金属 | 4 |
| 螺丝刀 | / | 金属 & 塑料 | 1 |
| 六角头扳手 | / | 金属 | 1 |
| [Grove - I2C 电机驱动](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html) | / | PCB | 1 |
| [Base Shield V2](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=132_134) | / | PCB | 1 |
| [Grove - 通用 4 针扣式 20cm 电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html) | / | 电缆 | 1 |
| Dean 并联适配器 | 插头 | / | 1 |
| Dean 电源线公头 | / | 电缆 | 1 |
| Dean 转直流电源线 | / | 电缆 | 1 |
| TRX 转 Dean 电源线 | / | 电缆 | 1 |
| 扎带 | 3 * 60mm | 塑料 | 3 |
| 装配说明 | A4 | 复印纸 | 1 |

### 如何组装

[装配说明.pdf](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Assembly_Instruction_02.pdf)

**1. 组装主体。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_01.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_02.PNG)

**2. 连接电缆**

1) 以下是需要连接电缆的部件，您需要一把 2.5mm 槽头螺丝刀来拧紧电机驱动器。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble01.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble17.JPG)

2) 将铝制散热片粘贴到电机驱动器上的芯片上，并组装中间板。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble12.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble18.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble19.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble14.JPG)

3) 连接电机驱动器，电机组的黑色电缆连接到 "M1-" 和 "M2-"，红色电缆连接到 "M1+" 和 "M2+"，连接电源线，黑色电缆连接到 "GND"，红色电缆连接到 "VS"。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble04.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

4) 将电机组装到主体中，同一组的电机必须安装在同一侧。使用尼龙扎带捆绑电线，然后插入 Grove 电缆。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble05.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble06.jpg)

5) 安装中间板，电源线和 Grove 电缆需要穿过右侧的孔。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble07.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble08.jpg)

6) 插入 1-to-2 电源连接器、电池适配器电缆和 Arduino 板电源电缆，Grove 电缆连接到 Base Shield 的 A0 引脚。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble09.jpg)

7) 小心插入电池连接器以供电，测试是否正确完成。如果没有 LED 灯亮起，您必须检查问题。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble10.JPG)

8) 插入 USB 电缆以测试软件。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble11.JPG)

**3.继续组装**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_04.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_05.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_06.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_07.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_08.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_09.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_10.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_11.PNG)

### 开发环境

虽然 Edison Arduino 可以通过 Arduino IDE 编程，但为了更强大的开发，我们进入了 Linux 系统进行一些底层开发。最重要的资源是 Intel 提供的 mraa 库。事情并不像理想化的那样，我们在早期开发中遇到了一些困难。为了构建一个方便的开发环境，我们将 rootfs 分区从 Linux 文件系统中复制出来，其中已经配置了所有需要的资源并构建了 4WD 平台项目。您只需将新的固件刷入 Edison 即可使该平台工作。如果您想了解我们在 Linux 系统中所做的工作以及如何进行自己的项目，请参阅 GitHub 仓库：

[https://github.com/Seeed-Studio/Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

#### 对于 Windows 用户

##### 安装工具

按照 **Edison 官方网站入门指南** 安装所需的驱动程序和终端模拟器 PuTTy。

下载 [dfu-util - 设备固件升级工具](http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries.tar.xz) 并将 xz 文件解压到 "C:\" 或其他目录。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform21.png)

**添加环境变量**

右键点击“此电脑” &gt; 高级系统设置 &gt; 环境变量 &gt; 将 dfu-util.exe 的路径复制到 "Path" 环境变量中。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform23.png)

##### 刷写新固件

**1.下载并解压**

[从 Seeed Wiki 下载定制固件](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip)

[从 OneDrive 下载定制固件](https://onedrive.live.com/?cid=b24d52d93861663f&amp;id=B24D52D93861663F%212178&amp;ithint=file,7z&amp;authkey=!AIH0ajk2jCZzTFE)

**2.使用 PuTTy**

按照 Edison 官方入门指南使用 PuTTy 登录 Edison。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform25.png)

**3.刷写固件**

按照以下步骤操作。

**步骤 1. 双击 flashall.bat**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform26.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform27.png)

**步骤 2. 在 PuTTy 中输入命令行 reboot 或按下 Edison Arduino 板上的 RESET 按钮。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform28.png)

**步骤 3. 刷写固件**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform29.png)

**步骤 4. Edison 重启并启动 Wi-Fi Car 服务。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform30.png)

**步骤 5: 重启电源**

断开并重新连接电池。

#### 对于 Mac 用户

请参阅 [Intel Edison 官方网站](https://communities.intel.com/docs/DOC-23193) 的 "Alternate Flashing Method"。

#### 对于 Linux 用户

**1.下载定制镜像**

<pre>
&gt;&gt;wget https://www.seeedstudio.com/wiki/images/a/a6/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;unzip edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;7z x edison-image-rel1-maint-rel1-ww42-14-for-wificar.7z
</pre>

**2.刷写镜像**

1)安装 dfu-util

<pre>
sudo apt-get install dfu-util
</pre>

2)检查哪个设备是 Edison：

<pre>
&gt;&gt;ls /dev/ttyUSB*
</pre>

3)打开串行终端

<pre>
&gt;&gt;sudo screen /dev/ttyUSB0 115200
</pre>

4)运行 flashall.sh

<pre>
&gt;&gt;cd edison-image-rel1-maint-rel1-ww42-14-for-car
&gt;&gt;sudo ./flashall.sh
</pre>

5)进入 Edison 输入 reboot

<pre>
&gt;&gt;reboot
</pre>

### 应用

现在使用智能手机或电脑搜索 WiFi 接入点，SSID 名称是每个 Edison 主板上的唯一序列号，例如 EDIOSN-FZED445001UCV501，密码是 12345678。
连接到 WiFi 后，打开任何网页浏览器访问 **http://192.168.42.1:8000** ，您将看到一个仪表板，可以用来控制 4WD 平台。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform15.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform13.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform14.png)

[Wi-Fi 车 Android 应用程序](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/WiFiCarcn.xiongyihui.wificar2.apk.zip)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform34.png)

### 如何编程

导航到 `/usr/share/car`，您将看到项目文件，这些文件包括：

<pre>
&gt;&gt;cd /usr/share/wificar
&gt;&gt;ls
</pre>

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform31.png)

<table cellspacing="0">
<tr>
<th scope="col">car.py</th>
<td>汽车动作类</td>
</tr>
<tr>
<th scope="col">car_httpd.py</th>
<td>Web服务器进程</td>
</tr>
<tr>
<th scope="col">i2c_motor.py</th>
<td>I2C 电机驱动</td>
</tr>
<tr>
<th scope="col">softi2c.py</th>
<td>Edison 的软 I2C 驱动</td>
</tr>
<tr>
<th scope="col">www</th>
<td>Web服务器源文件</td>
</tr>
</table>

### 增强 - 双电机驱动

**1. 接线**

在这里，您需要一个剥线器、一个电烙铁和剪刀来剪断电机的延长线，并使用其中一根制作一个新的“一分二”电机电源线。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring09.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring02.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring10.JPG)

**2. 组装**

**步骤 1. 连接电机**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring01.JPG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

**步骤 2. 组装电机和电机驱动器，注意黄色箭头，两个电机驱动器仅用两个螺丝固定。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring13.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring11.png)

**步骤 3. 连接电源线和两个 Grove 电缆。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring06.JPG)

**步骤 4. 安装中间板。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring07.JPG)

**步骤 5. 将 Grove 电缆插入 D4(D4,D5) 和 D8(D8,D9)，没有特殊定义，通过插入电池测试连接。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring08.JPG)

**3. 软件修改**

进入虚拟终端，打开 `car.py` 文件并进行以下修改。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring14.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring15.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring16.png)

## 常见问题解答

1. 如果您已经连接了 Edison 的 WiFi，并且仪表板显示出来，但无法控制小车怎么办？

答：尝试重新启动电源。

2. Edison Arduino 板上的两个 USB 端口被轮子挡住了，如何连接 USB 线？

答：当您需要连接 USB 线时，必须拆下轮子。如果您只是想访问 Linux 系统，可以连接其 WiFi AP，并通过 SSH 工具访问，例如 PuTTy 支持 SSH。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)

3. 已经运行了 Wi-Fi 小车服务器，智能手机接收到仪表板但无法控制小车，为什么？

答：i2c 电机驱动板存在一个问题，如果发送的完整字节指令被中断，电机驱动板将失去控制。您需要通过按下驱动板上的复位按钮来重置驱动板。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform32.png)

## 支持

*   [github-Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

*   [Intel Edison 官方网站](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

*   [Edison - 软件下载](https://communities.intel.com/docs/DOC-23242)

*   [Intel 官方论坛](https://communities.intel.com/community/makers/edison/forums)

*   [intel-iot-devkit/mraa](https://github.com/intel-iot-devkit/mraa)

*   [Intel Edison 入门指南](https://communities.intel.com/docs/DOC-23147)

*   [刷新 Edison（有线）- Windows（Mac、Linux）](https://communities.intel.com/docs/DOC-23192)

*   [Edison 4WD 自动机器人平台直流电机规格](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)

*   [Edison 4WD 自动机器人平台带编码器的直流电机规格](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>