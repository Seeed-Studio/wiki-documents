---
description: Grove - OLED 显示屏 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
title: Grove - OLED 显示屏 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-OLED-Display-1.12-SH1107_V3.0
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" />
</div>

Grove - OLED 显示屏 1.12 V3.0 (SH1107) 是一款 **单色** 显示屏，分辨率为 128*128。与 LCD 相比，OLED（有机发光二极管）具有许多优势，例如自发光、高对比度、纤薄外形、宽视角和低功耗。该显示屏支持 3.3V 和 5V 电源电压。您可以使用 **I2C** 或 **SPI** 接口，通过微控制器点亮显示屏以显示文字、图像以及您想要的任何内容。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)

## 特性

- 兼容 3.3V/5V 电源
- 可更改 I2C 地址
- 支持 SPI
- 低功耗
- 单色 128×128 像素
- 高对比度，高亮度
- 宽工作温度范围：-40℃ ~ +85 ℃

## 版本
---
| 产品版本                     | 变更                                                                                                                                                                                    | 发布日期       |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
|Grove - OLED 显示屏 1.12" V1.0 | 初始版本                                                                                                                                                                                    | 2012年3月      |
|Grove - OLED 显示屏 1.12" V2.1 | 驱动 IC 从 SSD1327 更改为 SH1107G，灰度像素从 96X96 升级到 128X128 | 2015年11月     |
|Grove - OLED 显示屏 1.12" V3.0 | 驱动 IC 从 SSD1107G 更改为 SH1107，接口从 I2C 升级为 I2C/SPI | 2021年7月     |

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台
---

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 硬件

在这里，我们将通过一个简单的演示向您展示如何使用 Grove - OLED 显示屏。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - OLED 显示屏 1.12`` V3.0 | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

这是一个易于使用的模块，您需要做的就是将模块连接到 Base Shield 的 I2C 端口。模块有 4 个引脚，定义如下：

|引脚|功能  | 说明   | 电缆颜色 |
|--------|------|-----|---------------|
|pin1	| SCL | I2C 时钟 | 黄色 |
|pin2   | SDA| I2C 数据| 白色|
|pin3   | VCC  | 电源，5V/3.3V| 红色 |
|pin4	| GND  | 地线 | 黑色 |

**硬件概览 (I2C)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2185.JPG" />
</div>


### **软件 (I2C)**

- **步骤 1.** 通过 Grove 电缆将 Grove - OLED 显示屏 1.12'' V3.0 连接到 Base Shield 的 **I2C** 端口。

- **步骤 2.** 打开 Arduino IDE 并通过库管理器 **(Sketch > Include Library > manage Libraries)** 安装 u8g2 库。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **步骤 3.** 在搜索框中输入 "**u8g2**"，选择最新版本并点击 "Install" 按钮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **步骤 4.** 在 Arduino IDE 中上传以下演示代码。

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

:::success
       如果一切正常，Grove - OLED 显示屏 1.12'' 的屏幕上将显示 "Hello Seeed!"。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


:::note
        如果您没有 Base Shield，[Seeeduino Vx 系列](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) 具有 **I2C 接口**，也可以正常工作。
:::

**硬件概览 (SPI)**

- **步骤 1.** 焊接公头并连接电线。

- **步骤 2.** 请按照 **黄色**线切断板上的电线，并按照 **白色**线逐一焊接 SPI 面板和中间面板。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
    请**小心**按照 **黄色**线逐一切断电线，否则会损坏整个显示屏。我们建议您在放大镜下切断电线。
:::
**注意**：这是错误的切线方法！

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 按照图片将显示屏和 Seeeduino 用电线连接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/wires.png" />
</div>


- **步骤 4.** 通过 USB 电缆将 Seeeduino 连接到 PC。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2188.JPG" />
</div>


### 软件 (**SPI**)

- **步骤 1.** 打开 Arduino IDE 并通过库管理器 **(Sketch > Include Library > manage Libraries)** 安装 u8g2 库。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **步骤 2.** 在搜索框中输入 "**u8g2**"，选择最新版本并点击 "Install" 按钮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **步骤 3.** 在 Arduino IDE 中上传以下演示代码。

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

:::success
       如果一切正常，Grove - OLED 显示屏 1.12'' 的屏幕上将显示 "Hello Seeed!"。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>

## 在 RaspberryPi 上运行

**所需材料**


| Raspberry Pi | Grove Base Hat for Raspberry Pi | Grove - OLED 显示屏 1.12" V3.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### 为 RaspberryPi 做准备

#### I2C 连接

- **步骤 1.** 将 OLED 黄蓝显示屏 0.96" 插入 Grove - Base Hat 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Hat 插入 RaspberryPi。

- **步骤 3.** 通过串口或 SSH 将 RaspberryPi 连接到 PC。

#### SPI 连接

- **步骤 1.** 按照下表连接 Grove - Base Hat 上的线。

| Grove - OLED 显示屏 1.12" V3.0 引脚 | Raspberry Pi GPIO |  BCM2835 代码 |
|--------------|-------------|-------------|
| VCC | 3.3V | 3.3V |
| GND | GND | GND |
| SI | MOSI | 10 |
| SCL | SCLK | 11 |
| CS | CE0 | 8 |
| DC | GPIO.6 | 25 |
| RES | GPIO.2 | 27 |

- **步骤 2.** 将 Grove - Base Hat 插入 RaspberryPi。

- **步骤 3.** 通过串口或 SSH 将 RaspberryPi 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 在 RaspberryPi 上启用 I2C 和 SPI

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

按照图片启用 RaspberryPi 上的 I2C 和 SPI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>
 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg" alt="pir" width={600} height="auto" /></p>

然后重启 RaspberryPi

```shell
sudo reboot
```

- **步骤 2.** 安装必要的库

```shell
sudo apt-get install wget gcc make unzip -y
```

安装 WiringPi 库

*如果您使用 WiringPi，需要更新到版本 2.52。此库可能不再更新，建议使用其他库。*
```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

安装 bcm2835

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

有关更多信息和最新库，请参考网站：[bcm2835](http://www.airspayce.com/mikem/bcm2835/)

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

如果您想要更多示例，我们还有一个小视频片段。

```shell
sudo chmod 777 badapple.sh
./badapple.sh
```
<iframe width={560} height={315} src="https://www.youtube.com/embed/mHhZgUNkPM0" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## U8g2库介绍

U8g2 是一个用于嵌入式设备的单色图形库。U8g2 支持单色 OLED 和 LCD，包括我们的芯片 SSD1327/SH1107G。

Arduino 的 U8g2 库可以通过 Arduino IDE 的库管理器安装。U8g2 还包含 U8x8 库：

**U8g2**

- 包含所有图形操作（线条/框/圆绘制）。
- 支持多种字体，对字体高度几乎没有限制。
- 需要在微控制器中占用一些内存来渲染显示。

**U8x8**

- 仅支持文本输出（字符）设备。
- 仅允许适合 8x8 像素网格的字体。
- 直接写入显示屏，无需在微控制器中使用缓冲区。

这里提供了 [**U8g2 库 wiki**](https://github.com/olikraus/u8g2/wiki) 以及 [U8g2 API 参考](https://github.com/olikraus/u8g2/wiki/u8g2reference) 页面。



## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---------
* **[Eagle]** [Grove-OLED 显示屏 1.12inch Eagle 文件](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip)
* **[PDF]** [Grove-OLED 显示屏 1.12inch V3.0 原理图](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.pdf)
* **[数据手册]** [SH1107_datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/SH1107V2.1.pdf)

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>