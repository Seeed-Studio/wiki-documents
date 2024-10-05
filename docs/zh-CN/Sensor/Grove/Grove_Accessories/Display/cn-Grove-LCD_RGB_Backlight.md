---
description: Grove - RGB背光液晶显示屏
title: Grove - RGB背光液晶显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LCD_RGB_Backlight
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg" alt="pir" width={600} height="auto" /></p>

厌倦了单调的单色背光吗？这款 Grove 显示器让你能够通过简洁的 Grove 界面将其设置成你喜欢的任何颜色。它采用 I2C 作为与你的微控制器的通信方式。因此，用于数据交换和背光控制所需的引脚数量从大约 10 个减少到 2 个，从而为其他具有挑战性的任务释放了 IO 端口。此外，Grove - LCD RGB 背光还支持用户自定义字符。想要一个爱心或其他外国字符吗？只要利用这个功能来设计就可以了！
这款产品是 Grove - Serial LCD 的替代品。如果你正在寻找原始的 16x2 LCD 模块，我们也有绿色黄色背光版本和蓝色背光版本在售。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

:::注意
Grove-LCD RGB 背光已经从 V4.0 更新到 V5.0，代码也进行了升级以确保兼容性。现在，您可以使用新的兼容代码来驱动更加强大的 Grove-LCD RGB 背光 V5.0。

以下是变更日志：

- 新增 5v/3.3v 兼容性。
- RGB I2C 地址从 0x62 更改为 0x30。
- RGB 驱动芯片从 PCA9632 更新为 SGM31323。
- PCB 丝印从“Grove-LCD RGB Backlight V4.0”更新为“Grove-LCD RGB Backlight V5.0”。
- 修复了其他已知问题

新代码（兼容 v4.0 和 v5.0）：https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/
:::

## 版本

| 产品版本          | 变更内容      | 发布日期   |
|------------------------------|-------------------------------------------|---------------|
| Grove-LCD RGB 背光 V1.0 | 初始版本      | 2012年6月  |
| Grove-LCD RGB 背光 V2.0 | 优化 PCB 布局 | 2013年11月 |
| Grove-LCD RGB 背光 V4.0 | 优化 PCB 布局              | 2016年9月 |

## 功能

* RGB 背光
* I2C 通信
* 内置英文字体
* 16x2 LCD

:::提示
    更多关于 Grove 模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

|项目|值|
|------|----------|
| 输入电压 |5V|
| 工作电流 | <60mA |
|CGROM | 10880 位 |
| CGRAM | 64x8 位 |
| LCD I2C 地址 | 0X3E |
| RGB I2C 地址 | 0X62 |

:::注意
    有4个I2C地址，我们为LCD和RGB各使用了2个I2C地址。
:::

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
|:::警告||
    上述提到的支持平台是指模块的软件或理论兼容性。在大多数情况下，我们只针对Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要自行编写软件库。
:::
## 应用构想

* 人机界面
* 智能家居
* 传感器中心

以下是一些项目供你参考。

|爱迪生 Wi-Fi 地址|WiFi 智能温室|Grove 幸运汤圆|
|------------------------|-------------------|--------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project3.jpg" alt="pir" width={600} height="auto" /></p>|
|[现在就动手制作吧！](https://www.instructables.com/id/Show-the-Intel-Edison-WiFi-IP-Address-on-a-Grove-L/)|[现在就动手制作吧！](https://www.instructables.com/id/Arduino-Grove-Greenhouse/)|[现在就动手制作吧！](https://www.instructables.com/id/Grove-Lucky-Dumpling/)|


|刷牙指导员|LinkIt ONE 手册|LinkIt ONE 物联网演示|
|------------------------|-------------------|--------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project5.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project6.jpg" alt="pir" width={600} height="auto" /></p>|
|[现在就动手制作吧！](https://www.instructables.com/id/Toothbrushing-Instructor/)|[现在就动手制作吧！](https://www.instructables.com/id/LinkIt-ONE-Pager/)|[现在就动手制作吧！](https://community.seeedstudio.com/project_detail.html?id=78)|

## 开始使用

:::注意
    如果你是第一次使用Arduino，我们强烈建议你在开始前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 与Arduino互动

**硬件**


- **步骤 1.**  准备以下物品：

| Seeeduino V4.2 | 基础底板 | Grove-LCD RGB背光 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)|

- **步骤2.** 将Grove-LCD RGB背光连接到Grove基础底板的**I2C**端口。
- **步骤3.** 将Grove基础底板插入Seeeduino。
- **步骤4.** 通过USB线将Seeeduino连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg" alt="pir" width={600} height="auto" /></p>

:::注意
	如果没有Grove基础底板，我们也可以直接按照以下方式将Grove-LCD RGB背光连接到Seeeduino。
:::

| Seeeduino       | Grove-LCD RGB  背光 |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                 |
| SDA           | 白色                 |
| SCL           | 黄色                |

**软件**

- **步骤1.** 从Github下载[Grove-LCD RGB背光库](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)。
- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来为Arduino安装库。
- **步骤3.** 库中有以下12个示例：
    - 自动滚动
    - 闪烁
    - 光标
    - 自定义字符
    - 显示
    - 渐变
    - HelloWorld
    - 滚动
    - SerialDisplay
    - 设置颜色
    - 设置光标
    - 文本方向
- **步骤 4.** 请按照下面的图片选择示例**HelloWorld**并上传Arduino代码。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/example.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/example.jpg" alt="pir" width={600} height="auto" /></p>

以下是HelloWorld.ino的代码：

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    lcd.setRGB(colorR, colorG, colorB);
    
    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}
```

- **步骤4.** 我们将在LCD上看到"Hello, World!"。

### 使用Codecraft编程

#### 硬件

**步骤1.** 使用Grove线缆将Grove - LCD RGB背光连接到Seeeduino的I2C端口。如果你使用的是Arduino，请利用Base Shield。

**步骤2.** 通过USB线缆将Seeeduino/Arduino连接到你的电脑。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖到工作区域。

:::注意
    如果你是第一次使用Codecraft，也请查看[Codecraft使用Arduino指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤2.** 按照下面的图片拖动代码块，或者打开可以在本页面末尾下载的cdc文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/cc_LCD_RGB_Backlight.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/cc_LCD_RGB_Backlight.png" alt="pir" width={600} height="auto" /></p>

将程序上传到你的Arduino/Seeeduino。

:::成功
    当代码上传完成后，你将在LCD上看到"hello, world!"和系统运行时间。
:::

### 使用树莓派

**硬件**

- **步骤1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove-LCD RGB Backlight |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)|


- **步骤2.** 将GrovePi_Plus插入Raspberry Pi中。
- **步骤3.** 将Grove-LCD RGB背光连接到GrovePi_Plus的**I2C**端口。
- **步骤4.** 通过USB线缆将Raspberry Pi连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rpi_rgb.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rpi_rgb.jpg" alt="pir" width={600} height="auto" /></p>

**软件**

:::注意
     如果你使用的是**带有Raspberrypi OS >= Bullseye的Raspberry Pi**，你必须**仅使用Python3**来执行此命令行。
:::

- **步骤1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)的说明配置开发环境。
- **步骤2.** 从Github克隆仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**步骤3.** 执行以下命令以使用Grove-LCD RGB背光进行显示。


```python
cd ~/GrovePi/Software/Python/grove_rgb_lcd
python3 grove_rgb_lcd.py
```

下面是grove_rgb_lcd.py的代码。

```python
import time,sys

if sys.platform == 'uwp':
    import winrt_smbus as smbus
    bus = smbus.SMBus(1)
else:
    import smbus
    import RPi.GPIO as GPIO
    rev = GPIO.RPI_REVISION
    if rev == 2 or rev == 3:
        bus = smbus.SMBus(1)
    else:
        bus = smbus.SMBus(0)

# this device has two I2C addresses
DISPLAY_RGB_ADDR = 0x62
DISPLAY_TEXT_ADDR = 0x3e

# set backlight to (R,G,B) (values from 0..255 for each)
def setRGB(r,g,b):
    bus.write_byte_data(DISPLAY_RGB_ADDR,0,0)
    bus.write_byte_data(DISPLAY_RGB_ADDR,1,0)
    bus.write_byte_data(DISPLAY_RGB_ADDR,0x08,0xaa)
    bus.write_byte_data(DISPLAY_RGB_ADDR,4,r)
    bus.write_byte_data(DISPLAY_RGB_ADDR,3,g)
    bus.write_byte_data(DISPLAY_RGB_ADDR,2,b)

# send command to display (no need for external use)    
def textCommand(cmd):
    bus.write_byte_data(DISPLAY_TEXT_ADDR,0x80,cmd)

# set display text \n for second line(or auto wrap)     
def setText(text):
    textCommand(0x01) # clear display
    time.sleep(.05)
    textCommand(0x08 | 0x04) # display on, no cursor
    textCommand(0x28) # 2 lines
    time.sleep(.05)
    count = 0
    row = 0
    for c in text:
        if c == '\n' or count == 16:
            count = 0
            row += 1
            if row == 2:
                break
            textCommand(0xc0)
            if c == '\n':
                continue
        count += 1
        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))

#Update the display without erasing the display
def setText_norefresh(text):
    textCommand(0x02) # return home
    time.sleep(.05)
    textCommand(0x08 | 0x04) # display on, no cursor
    textCommand(0x28) # 2 lines
    time.sleep(.05)
    count = 0
    row = 0
    while len(text) < 32: #clears the rest of the screen
        text += ' '
    for c in text:
        if c == '\n' or count == 16:
            count = 0
            row += 1
            if row == 2:
                break
            textCommand(0xc0)
            if c == '\n':
                continue
        count += 1
        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))

# example code
if __name__=="__main__":
    setText("Hello world\nThis is an LCD test")
    setRGB(0,128,64)
    time.sleep(2)
    for c in range(0,255):
        setText_norefresh("Going to sleep in {}...".format(str(c)))
        setRGB(c,255-c,0)
        time.sleep(0.1)
    setRGB(0,255,0)
    setText("Bye bye, this should wrap onto next line")
```

- **步骤4.** 我们将看到Grove-LCD RGB背光显示"Going to sleep in 1..."。

## 常见问题

- Q1: 如何使用多个Grove-LCD RGB背光？
    - A1: 请参考[Arduino Software I2C用户指南](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/)。

- Q2: 如何使用按钮来切换Grove RGB LCD以显示不同的页面？
    - A2: 以下是相关代码。

```cpp

#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;
const int switchPin = 2;
static int hits = 0;
int switchState = 0;
int prevSwitchState = 0;

void setup() {
    lcd.begin(16, 2);
    pinMode(switchPin,INPUT);
    Serial.begin(9600);
    lcd.setCursor(0, 0);
    lcd.print("Page 1");
}

void loop() {  
  switchState = digitalRead(switchPin);
  Serial.print("switchState:");Serial.println(switchState);
  if (switchState != prevSwitchState) {
    if (switchState == HIGH) {
          hits = hits + 1;
          delay(10);
    }
  }
 
  Serial.print("hits:");Serial.println(hits);
  if(hits==1)
  {
    Serial.println("Page 1");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 1");
  }else
  if(hits==2)
  {
   Serial.println("Page 2");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 2"); 
  }else

  if(hits==3)
  {
   Serial.println("Page 3");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 3"); 
  }else
  
  if ( hits>=4)
  {
     hits = 0;
     Serial.println("couter is reset");
     Serial.println("Page 1");
     lcd.clear();
     lcd.setCursor(0, 0);
     lcd.print("Page 1");
  }
delay(500);
}
```

## 资源

- [**库**] [Software Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)
- **[文档]** [本文档的Github 页面](https://github.com/SeeedDocument/Grove_LCD_RGB_Backlight)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/Grove_LCD_RGB_Backlight_CDC_File.zip)
- **[数据手册]** [PCA9633](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/PCA9633.pdf)
- **[数据手册]** [JHD1313](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/JHD1313%20FP-RGB-1%201.4.pdf)

## 项目

**Particle + Grove LCD RGB Backlight = 实时时钟**：使用I2C将Grove LCD RGB背光连接到Particle，以显示时间。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-grove-lcd-rgb-backlight-realtime-clock-42151f/embed' width='350'></iframe>

**LCD RGB Grove 模块**：

<iframe width="560" height="315" src="https://www.youtube.com/embed/yniND_abVos" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/tbdTTC3Jmgk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时能够尽可能地顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
