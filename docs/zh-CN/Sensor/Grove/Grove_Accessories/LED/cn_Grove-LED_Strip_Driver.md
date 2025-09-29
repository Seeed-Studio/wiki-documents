---
description: Grove - LED灯带驱动器
title: Grove - LED灯带驱动器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_Strip_Driver
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg" alt="pir" width={600} height="auto" /></p>

带有4针Grove接口的LED灯带驱动器为您的标准Arduino设备或Seeed Stalker提供了便捷的连接方式。它可以帮助您通过Arduino或Seeeduino控制单色LED灯带的亮度，以及RGB LED灯带的颜色和亮度。

它具有2个端子和2个Grove接口。LED灯带的电源通过2针端子输入，LED控制电压通过4针端子输出。2个Grove接口分别标有“IN”（用于控制数据输入）和“OUT”（用于控制与下一个灯带驱动器共享的数据）。

它可以驱动长度为1到2米的LED灯带（使用9V电源），或长度为1到5米的LED灯带（使用12V电源）。与彩色LED灯带配合使用，该驱动器可以为室内或室外应用增添美妙的效果。

*   Grove - LED灯带驱动器 V1.1：
 1. 使用SI5904进行电平转换。
 2. 78M05是一个电压调节器，输出电压为5V。

*   Grove - LED灯带驱动器 V1.2：
 1. 用两个2N7002替换SI5904。
 2. 100nF电容的封装为0603，而不是0402。
 3. 3.3K分立电阻改为排除。

:::note
    时钟/数据IO需要5V逻辑电平。
:::
<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html)

##   规格
---
<table>
<tr>
<td width="150"> **电源供应**</td>
<td width="150"> **LED灯带**</td>
<td width="100"> **LED颜色**</td>
<td width="100"> **长度(米)**</td>
<td width="150"> **最大电流(mA)**</td>
</tr>
<tr>
<td rowspan="5"> 12V/5A</td>
<td rowspan="5"> RGB LED灯带</td>
<td rowspan="5"> 白色</td>
<td> 1</td>
<td> 1032</td>
</tr>
<tr>
<td> 2</td>
<td> 1822</td>
</tr>
<tr>
<td> 3</td>
<td> 2430</td>
</tr>
<tr>
<td> 4</td>
<td> 2800</td>
</tr>
<tr>
<td> 5</td>
<td> 3000</td>
</tr>
<tr>
<td rowspan="2"> 9V/1A</td>
<td rowspan="2"> RGB LED灯带</td>
<td rowspan="2"> 白色</td>
<td> 1</td>
<td> 365</td>
</tr>
<tr>
<td> 2</td>
<td> 627</td>
</tr>
</table>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg" alt="pir" width={600} height="auto" /></p>

**12V电源供应** – 螺丝端子用于9~12V电源供应。

**可串联输入** – 连接到Grove - Base Shield或其他驱动器的可串联输出。引脚定义：**CLK DIN NC GND**。

**可串联输出** – 连接到其他驱动器的可串联输入。引脚定义：**CLK DOUT NC GND**。

**LED灯带接口** – 螺丝端子用于连接LED灯带。引脚定义：**+ B R G**

**注意**：Arduino/Seeeduino的VCC未连接到Grove接口。

## 演示
---
### 硬件安装

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg" alt="pir" width={600} height="auto" /></p>

1. 使用 Grove 电缆连接 LED 灯条驱动器上标有 "IN" 的 Grove 插座与 Base Shield 的数字端口 2。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg" alt="pir" width={600} height="auto" /></p>

2. 将 LED 灯条连接到 Grove - LED 灯条驱动器的 4 针端子。确保 LED 灯条上标有 **"+12v"** 的线插入端子标有 **"+"** 的插座，**"B"** 插入 **"B"**，**"R"** 插入 **"R"**，**"G"** 插入 **"G"**。我们销售的大多数 LED 灯条都有如上图所示的 4 根线，除了 [White LED Flexi-Strip - 60 LED - 1m](https://www.seeedstudio.com/depot/white-led-flexistrip-60-led1m-p-1122.html?cPath=207)。如果您使用的是这种类型的灯条，连接步骤会稍有不同。仍然将标有 **"+12V"** 的线插入标有 **"+"** 的插座，但其他线可以插入 **"B"**、**"R"** 和 **"G"** 中的任意一个插座。在后续的软件步骤中运行名为 **"DemoForWhiteLEDStrip"** 的演示代码。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg" alt="pir" width={600} height="auto" /></p>

3. 将 12V DC 或 9V DC 电源线连接到 2 针端子。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg" alt="pir" width={600} height="auto" /></p>

4. 如果您想使用级联功能，请先准备另一个驱动器和灯条。然后使用 Grove 电缆连接第一个板上的 Grove 插座标有 "out" 的端口与第二个板上的 Grove 插座标有 "IN" 的端口。完成后，两个灯条将同步发光。

### 软件编程

1. 下载 [LED 灯条驱动器库](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip)。解压并将其导入 Arduino-1.0 库：..\arduino-1.0\libraries。

2. 如果您只使用一个驱动器，请上传 SingleLEDStrip 演示代码。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

3. 如果使用两个 LED 灯条，请上传 DualLEDStrip 演示代码。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

# LED灯带驱动器 Eagle 文件 V1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# LED灯带驱动器 Eagle 文件 V1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   资源
---
*   [LED灯带驱动器 Eagle 文件 V1.1](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip)

*   [LED灯带驱动器 Eagle 文件 V1.2](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip)

*   [V1.1 版本原理图 PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver.pdf)

*   [V1.2 版本原理图 PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/Grove-LED_Strip_driver_V1.2.pdf)

*   [P9813 数据手册](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/P9813_datasheet.pdf)

*   [N-MOSFET DMN3016LK3 数据手册](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/N-MOSFET_DMN3016LK3_Datasheet.pdf)

*   [LED灯带驱动器库文件](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip)

*   [Suli库](https://github.com/Seeed-Studio/LED_Strip_Suli)

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>