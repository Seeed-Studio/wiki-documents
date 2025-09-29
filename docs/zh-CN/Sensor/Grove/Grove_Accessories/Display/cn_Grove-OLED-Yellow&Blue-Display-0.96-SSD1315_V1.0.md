---
description: Grove - OLED 黄蓝显示屏 0.96(SSD1315) - SPI/IIC -3.3V/5V
title: Grove - OLED 黄蓝显示屏 0.96(SSD1315) - SPI/IIC -3.3V/5V
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png" alt="pir" width={600} height="auto" /></p>

Grove - OLED 黄蓝显示屏 0.96 (SSD1315) 是一款**蓝色和黄色**双色显示屏，分辨率为 128*64。与 LCD 相比，OLED（有机发光二极管）具有许多优势，例如自发光、高对比度、纤薄外形、宽视角和低功耗。该显示屏支持 3.3V 和 5V 电源电压。您可以使用 **I2C** 或 **SPI** 接口，通过微控制器点亮显示屏以显示文字、图像以及您想要的任何内容。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)

## 特性

- 兼容 3.3V/5V 电源
- 可更改 I2C 地址
- 支持 SPI
- 低功耗
- 黄色和蓝色双色 128×64 像素
- 高对比度，高亮度
- 宽工作温度范围：-40℃ ~ +85 ℃

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img//10402049_Feature-02.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Feature-02.png" /></a></p>
  </figure>
</div>

## 规格

|参数|值|
|---|---|
|输入电压|3.3V / 5V|
|输出电压|0 ~ 2.3V|
|像素|128 x 64|
|温度范围|-40℃ ~ +85 ℃|
|接口|I2C/SPI|

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 使用 Arduino

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - OLED 黄蓝显示屏 0.96" |
|----------------|-------------|-----------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

#### 硬件连接 (**I2C**)

- **步骤 1.** 使用 Grove 电缆将 Grove - OLED 黄蓝显示屏 0.96" 插入 Grove - Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 电缆将 Seeeduino 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件 (**I2C**)

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 导航到 **Sketch** -> **Include Library** -> **Manage Libraries...**，然后在 **Library Manager** 中搜索并安装 [**U8g2**](https://github.com/olikraus/u8g2) 库。

- **步骤 2.** 打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    // 软件 I2C

void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // 清除内部内存
  u8g2.setFont(u8g2_font_luBIS08_tf);   // 选择合适的字体
  u8g2.drawStr(0,10,"Hello Seeed!");    // 将内容写入内部内存
  u8g2.drawStr(0,30,"Hello Studio!");   // 将内容写入内部内存
  u8g2.drawStr(0,50,"Hello World!");    // 将内容写入内部内存
  u8g2.sendBuffer();                    // 将内部内存传输到显示屏
  delay(100);  
}
```

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** OLED 显示屏应显示如下内容：

<div align="center"><img src="./hd1.jpg" /></div>

#### **硬件连接 (SPI)**

- **步骤 1.** 焊接公头并连接导线。

- **步骤 2.** 请按照 **黄色**线切断板上的导线，并按照 **白色**线逐一焊接 SPI 面板和中间面板。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
请**小心**按照 **黄色**线逐一切断导线，否则您将损坏整个显示屏。我们建议您在放大镜下切断导线。
:::
**注意**：这是错误的切割导线方法！

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 按照图片将显示屏和 Seeeduino 用导线连接起来。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 使用 USB 电缆将 Seeeduino 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件 (**SPI**)

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 导航到 **Sketch** -> **Include Library** -> **Manage Libraries...**，然后在 **Library Manager** 中搜索并安装 [**U8g2**](https://github.com/olikraus/u8g2) 库。

- **步骤 2.** 打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 12, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8); // 软件 SPI
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // 清除内部内存
  u8g2.setFont(u8g2_font_luBIS08_tf);   // 选择合适的字体
  u8g2.drawStr(0,10,"Hello Seeed!");    // 将内容写入内部内存
  u8g2.drawStr(0,30,"Hello Studio!");   // 将内容写入内部内存
  u8g2.drawStr(0,50,"Hello World!");    // 将内容写入内部内存
  u8g2.sendBuffer();                    // 将内部内存传输到显示屏
  delay(100);  
}
```

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** OLED 显示屏应显示如下内容：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi2.jpg" /></div>


### 使用 RaspberryPi

**所需材料**

| Raspberry Pi | Grove Raspberry Pi 基础扩展板 | Grove - OLED 黄蓝显示屏 0.96" |
|--------------|----------------------------------|----------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

#### **硬件连接（I2C）**

- **步骤 1.** 将 OLED 黄蓝显示屏 0.96" 插入 Grove 基础扩展板的 **I2C** 接口。

- **步骤 2.** 将 Grove 基础扩展板插入 RaspberryPi。

- **步骤 3.** 通过串口或 SSH 将 RaspberryPi 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 在 RaspberryPi 上启用 I2C

```shell
sudo apt-get install -y python-smbus
sudo apt-get install -y i2c-tools
sudo raspi-config
```

按照以下图片操作，在 RaspberryPi 上启用 I2C。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

然后重启 RaspberryPi

```shell
sudo reboot
```

- **步骤 2.** 安装必要的库

```shell
sudo apt-get install git
sudo apt-get install python-pip python3-pip
sudo apt-get install python-pil python3-pil
sudo pip install Adafruit-BBIO
sudo pip3 install Adafruit-BBIO
sudo pip install Adafruit-SSD1306
sudo pip3 install Adafruit-SSD1306
```

然后从 GitHub 克隆 **Seeed_Python_SSD1315** 项目

```shell
git clone https://github.com/IcingTomato/Seeed_Python_SSD1315.git
```

我们可以使用 `stats.py` 作为示例代码。

```shell
cd ~/Adafruit_Python_SSD1306/example/
sudo python stats.py
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg" alt="pir" width={600} height="auto" /></p>

## U8g2库介绍

U8g2 是一个用于嵌入式设备的单色图形库。U8g2 支持单色 OLED 和 LCD，包括我们的芯片 SSD1315。

Arduino 库 U8g2 可以通过 Arduino IDE 的库管理器安装。U8g2 还包括 U8x8 库：

**U8g2**

- 包含所有图形操作（线条/框/圆形绘制）。
- 支持多种字体。（几乎）对字体高度没有限制。
- 需要在微控制器中占用一些内存来渲染显示。

**U8x8**

- 仅支持文本输出（字符）设备。
- 仅允许适合 8x8 像素网格的字体。
- 直接写入显示屏。微控制器中无需缓冲区。

这里提供了 [**U8g2 库 wiki**](https://github.com/olikraus/u8g2/wiki) 以及 [U8g2 API 参考](https://github.com/olikraus/u8g2/wiki/u8g2reference) 页面。

## 常见问题解答

**Q1#** 示例无法在其他板子上运行？

**A1:** U8g2 在初始化时有不同的模式，除了硬件 I2C，它还可以使用软件 I2C。如果无法运行，请尝试使用软件 I2C。更多信息请访问 [u8g2](https://github.com/olikraus/U8g2_Arduino)。一些示例和简要介绍也可以在 [这里](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0) 找到。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)_V1.0 原理图文件](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip)
- **[PDF]** [OLED 模块数据手册](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/0.96-30PIN-ZJY096-2864KSWPG01.pdf)
- **[PDF]** [SSD1315 数据手册](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/SSD1315.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>