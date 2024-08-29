---
description: Grove - 1.12英寸OLED显示屏（SH1107）V3.0 - SPI/IIC接口 - 3.3V/5V供电
title: Grove - 1.12英寸OLED显示屏（SH1107）V3.0 - SPI/IIC接口 - 3.3V/5V供电
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-OLED-Display-1.12-SH1107_V3.0
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" />
</div>


Grove - OLED Display 1.12 V3.0 (SH1107)是一款具有128*128分辨率的**单色**显示屏。与LCD相比，OLED（有机发光二极管）具有许多优势，例如自发光、高对比度、纤薄的外形、宽视角和低功耗。这款显示屏既可以在3.3V也可以在5V的电源电压下工作。您可以使用**I2C**或**SPI**接口，通过您的微控制器点亮显示屏，以显示文字、图像和任何您想要的内容。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)
## 特点

- 兼容3.3V/5V供电
- 可更改的I2C地址
- 支持SPI接口
- 低功耗
- 单色128×128像素
- 高对比度，高亮度
- 宽工作温度范围：-40℃ ~ +85℃



## 版本

---
| 产品版本                        | 变更内容                                                     | 发布日期   |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
|Grove - OLED Display 1.12" V1.0 | 初始版本                                                                                                                                                                                | 2012年3月 |
|Grove - OLED Display 1.12" V2.1 | 将驱动IC从SSD1327更改为SH1107G，将灰度像素从96X96升级到128X128 | 2015年11月 |
|Grove - OLED Display 1.12" V3.0 | 将驱动IC从SSD1107G更改为SH1107，将接口从I2C升级到I2C/SPI | 2021年7月 |

:::提示
    更多关于Grove模块的信息，请参考[Grove系统](https://www.seeedstudio.com/grove-system/)。
:::

## 支持的平台
---

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
|:::警告||
    上述提到的支持平台表明模块的软件或理论兼容性。在大多数情况下，我们只针对Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/示例代码。因此，用户需要编写自己的软件库。
:::

## 入门指南

### 硬件

接下来，我们将通过一个简单的示例来展示这款Grove - OLED显示屏是如何工作的。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - OLED Display 1.12`` V3.0 | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

这是一个易于使用的模块，您所要做的就是将模块连接到Base Shield的I2C端口。这个模块有4个引脚，具体定义如下：

| 引脚 | 功能 | 注释          | 电缆颜色 |
|--------|------|-----|---------------|
|pin1	| SCL | I2C时钟信号   | 黄色     |
|pin2   | SDA| I2C数据信号   | 白色     |
|pin3   | VCC  | 电源，5V/3.3V | 红色     |
|pin4	| GND  | 接地          | 黑色     |

**硬件概述（I2C）**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2185.JPG" />
</div>


### **软件（I2C）**

- **步骤 1.** 通过Grove线缆将Grove - OLED Display 1.12'' V3.0连接到Base Shield的**I2C**端口。

- **步骤 2.** 打开Arduino IDE和库管理器 **（Sketch > Include Library > manage Libraries）** 来安装u8g2库。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **步骤 3.** 在搜索框中输入“**u8g2**”，选择最新版本，并点击“安装”按钮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>
- **步骤 4.** 将以下示例代码上传到你的Arduino IDE中。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::成功后
       如果一切顺利，Grove - OLED Display 1.12''的屏幕上将显示“Hello Seeed!”。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


:::注意
        如果您没有Base Shield，带有**I2C接口**的[Seeeduino Vx系列](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all)也能正常工作。
:::

**硬件概述（SPI）**

- **步骤 1.** 焊接公头并连接电线。

- **步骤 2.** 请按照**黄色**线路在板上剪断电线，并按照**白色**线路逐一焊接SPI面板和中间面板。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::警告
    请**小心**按照**黄色**线路逐一剪断电线，否则可能会损坏整个显示屏。建议您在放大镜下剪断电线。
:::
**注意**：这是剪断电线的错误方法！

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 按照图片所示，用导线将显示屏和Seeeduino连接起来。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/wires.png" />
</div>


- **步骤 4.** 通过USB线缆将Seeeduino连接到电脑上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2188.JPG" />
</div>


### 软件（**SPI**）

- **步骤 1.** 打开Arduino IDE和库管理器 **（Sketch > Include Library > manage Libraries）** 来安装u8g2库。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **步骤 2.** 在搜索框中输入“**u8g2**”，选择最新版本，并点击“安装”按钮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **步骤 3.** 将以下示例代码上传到你的Arduino IDE中。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::成功
       如果一切顺利，Grove - OLED Display 1.12''的屏幕上将显示“Hello Seeed!”。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


## 在RaspberryPi上运行

**所需材料**


| Raspberry pi | Grove Base Hat for Raspberry Pi | Grove - OLED Display 1.12" V3.0|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即获取](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### 为RaspberryPi做准备

#### I2C连接

- **步骤 1.** 将OLED Yellow&Blue Display 0.96"插入到Grove - Base Hat的**I2C**端口。

- **步骤 2.** 将Grove - Base Hat插入到RaspberryPi。
- **步骤 3.** 通过Serial或SSH将RaspberryPi连接到电脑。

#### SPI连接

- **步骤 1.** 按照说明表将Grove - Base Hat上的导线连接起来。

| Grove - OLED Display 1.12" V3.0 引脚 | Raspberry Pi GPIO | BCM2835 编码 |
|--------------|-------------|-------------|
| VCC | 3.3V | 3.3V |
| GND | GND | GND |
| SI | MOSI | 10 |
| SCL | SCLK | 11 |
| CS | CE0 | 8 |
| DC | GPIO.6 | 25 |
| RES | GPIO.2 | 27 |

- **步骤 2.** 将Grove - Base Hat插入到RaspberryPi中。

- **步骤 3.** 通过Serial或SSH将RaspberryPi连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 在RaspberryPi上启用I2C和SPI

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

按照图片上的步骤在你的RaspberryPi上启用I2C和SPI。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg" alt="pir" width={600} height="auto" /></p>

然后重启你的RaspberryPi

```shell
sudo reboot
```

- **步骤 2.** 安装必要的库

```shell
sudo apt-get install wget gcc make unzip -y
```

安装WiringPi库

*如果你使用WiringPi，你需要将WiringPi更新到2.52版本。这个库可能不是最新版本。推荐使用其他库*

```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

安装bcm2835库

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

- 更多信息和最新的库请参考网站：[bcm2835](http://www.airspayce.com/mikem/bcm2835/)
  - **步骤 3.** 下载示例代码

**1.** 对于 [**I2C**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip
mkdir I2C
unzip RaspberryPiI2C.zip ./I2C/
cd ./I2C/RaspberryPiI2C/c/
sudo chmod 777 test.sh
./test.sh
```

**2.** 对于 [**SPI**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip
mkdir SPI
unzip RaspberryPiSPI.zip ./SPI/
cd ./SPI/RaspberryPiSPI/c/
sudo chmod 777 test.sh
./test.sh
```

如果您想要更多的演示，我们还有一个简短的视频片段。

```shell
sudo chmod 777 badapple.sh
./badapple.sh
```
<iframe width={560} height={315} src="https://www.youtube.com/embed/mHhZgUNkPM0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## U8g2库介绍

U8g2是一个用于嵌入式设备的单色图形库。U8g2支持单色OLED和LCD，其中包括我们的芯片SSD1327/SH1107G。

Arduino库U8g2可以从Arduino IDE的库管理器中安装。U8g2还包括U8x8库：

**U8g2**

- 包含所有图形过程（线/框/圆绘制）。
- 支持许多字体。（几乎）对字体高度没有限制。
- 需要在微控制器中占用一些内存来渲染显示屏。

**U8x8**

- 仅用于文本输出（字符）的设备。
- 只允许使用可以适应8x8像素网格的字体。
- 直接写入显示屏。不需要微控制器中的缓冲区。

这里提供了[**U8g2库wiki**](https://github.com/olikraus/u8g2/wiki)以及[U8g2 API参考](https://github.com/olikraus/u8g2/wiki/u8g2reference)页面。



## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---------
* **[Eagle]** [Grove-OLED Display 1.12英寸Eagle 文件](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip)
* **[PDF]** [Grove-OLED Display 1.12英寸 V3.0 原理图](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.pdf)
* **[Datasheet]** [SH1107_数据手册](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/SH1107V2.1.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同形式的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
