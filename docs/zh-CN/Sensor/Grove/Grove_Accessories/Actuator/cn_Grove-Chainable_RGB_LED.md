---
title: Grove - 可串联 RGB LED
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Chainable_RGB_LED/
slug: /cn/Grove-Chainable_RGB_LED
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**Grove - 可串联 RGB LED** 基于 P9813 芯片，这是一款全彩 LED 驱动器。它提供了 3 个恒流驱动器以及 256 级灰度的调制输出。它通过 2 线传输（数据和时钟）与 MCU 通信。这种 2 线传输可以用于级联额外的 **Grove - 可串联 RGB LED** 模块。内置的时钟再生功能增强了传输距离。此 Grove 模块适用于任何基于彩色 LED 的项目。

版本
---

| 修订版 | 描述                                                         | 发布日期      |购买链接|
|--------|-------------------------------------------------------------|--------------|--------------|
| v1     | 初始公开发布（测试版）                                      | 2011年5月5日 |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
| v2     | 将 P9813S16 替换为 P9813S14，并将 Grove 接口从垂直改为水平 | 2016年4月19日 |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-%E2%80%93-Chainable-RGB-Led-V2.0-p-2903.html)|

规格
-------------

- 工作电压：5V
- 工作电流：20mA
- 通信协议：串行

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

使用方法
-----

### 使用 Arduino

当您拿到 Grove - 可串联 RGB LED 时，可能会想如何点亮它。现在我们将展示一个演示：RGB 的所有颜色以统一的方式循环。

要完成此演示，您可以使用一个或多个 Grove - 可串联 RGB LED。请注意，一个 Grove - 可串联 RGB LED 的 IN 接口应连接到 Grove - 基础扩展板的 D7/D8，其 OUT 接口连接到另一个 Grove - 可串联 RGB LED 的 IN 接口，以这种方式串联更多 LED。

- 下载 [Chainable LED Library](https://github.com/pjpmarques/ChainableLED) 并安装到 Arduino 库中。关于 [如何安装 Arduino 库](/cn/How_to_install_Arduino_Library) 的教程可以在 Wiki 页面中找到。
- 打开示例 CycleThroughColors，路径为：File->Examples->ChainableLED_master，并将其上传到 Seeeduino。

```
/* 
 * 使用 ChainableRGB 库控制 Grove RGB 的示例。
 * 此代码以统一的方式循环所有颜色。这是通过 HSB 色彩空间实现的。
 */

#include <ChainableLED.h>

#define NUM_LEDS  5

ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  leds.init();
}

float hue = 0.0;
boolean up = true;

void loop()
{
  for (byte i=0; i<NUM_LEDS; i++)
    leds.setColorHSL(i, hue, 1.0, 0.5);
    
  delay(50);
    
  if (up)
    hue+= 0.025;
  else
    hue-= 0.025;
    
  if (hue>=1.0 && up)
    up = false;
  else if (hue<=0.0 && !up)
    up = true;
}
```

您可以观察到以下场景：五个 LED 的颜色将持续渐变。

**扩展应用：**
基于 [Chainable LED Library](https://github.com/pjpmarques/ChainableLED)，我们设计了这个演示：RGB 颜色随 Grove - 温度测量值变化。当温度从 25 到 32 时，RGB 颜色从绿色变为红色。测试代码如下所示。如果您对此感兴趣，可以尝试实现。

```
    // 温度 -> RGB LED 的演示
    // 温度范围 25 - 32，RGB LED 从绿色 -> 红色
    // Grove-温度连接到 A0
    // LED 连接到 D7,D8

    #include <Streaming.h>
    #include <ChainableLED.h>

    #define TEMPUP 32
    #define TEMPDOWN 25

    ChainableLED leds(7, 8, 1); // 连接到 pin7 和 pin8，一个 LED

    int getAnalog() // 从 A0 获取值
    {
        int sum = 0;
        for(int i=0; i<32; i++)
        {
            sum += analogRead(A0);
        }

        return sum>>5;
    }

    float getTemp() // 获取温度
    {
        float temperature = 0.0;
        float resistance = 0.0;
        int B = 3975; // 热敏电阻的 B 值

        int a = getAnalog();

        resistance = (float)(1023-a)*10000/a; // 获取传感器的电阻值；
        temperature = 1/(log(resistance/10000)/B+1/298.15)-273.15; // 根据数据表转换为温度；
        return temperature;
    }

    void ledLight(int dta) // 点亮 LED
    {
        dta = dta/4; // 0 - 255

        int colorR = dta;
        int colorG = 255-dta;
        int colorB = 0;

        leds.setColorRGB(0, colorR, colorG, colorB);
    }

    void setup()
    {
        Serial.begin(38400);
        cout << "hello world !" << endl;
    }

    void loop()
    {
        float temp = getTemp();
        int nTemp = temp*100;

        nTemp = nTemp > TEMPUP*100 ? TEMPUP*100 : (nTemp < TEMPDOWN*100 ? TEMPDOWN*100 : nTemp);
        nTemp = map(nTemp, TEMPDOWN*100, TEMPUP*100, 0, 1023);
        ledLight(nTemp);
        delay(100);
    }
```

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - 可串联 RGB LED 连接到 Base Shield 的 D7 端口。

**步骤 2.** 将 Base Shield 插入到您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到您的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
    如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Chainable_RGB_LED.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
    当代码上传完成后，您将看到 LED 渐亮和渐暗的效果。
:::

### 使用 Raspberry Pi

:::note
     如果您使用的是 **Raspberry Pi 且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行以下命令。
:::
1. 您需要准备一个 Raspberry Pi 和一个 GrovePi 或 GrovePi+。

2. 您需要完成开发环境的配置，否则请按照 [这里](/cn/GrovePi_Plus) 的步骤进行。

3. 连接

- 使用 Grove 数据线将传感器连接到 GrovePi 的 D7 插口。

4. 导航到示例代码目录：

```
    cd yourpath/GrovePi/Software/Python/
```

- 查看代码

```
     nano grove_chainable_rgb_led.py   # 按 "Ctrl+x" 退出 #
```

```
    import time
    import grovepi

    # 将可串联 RGB LED 的第一个 LED 连接到数字端口 D7
    # 输入: CI,DI,VCC,GND
    # 输出: CO,DO,VCC,GND
    pin = 7

    # 我连接了 10 个 LED，第一个连接到 GrovePi，最后一个未连接
    # 第一个 LED 的输入插口连接到 GrovePi，输出插口连接到第二个 LED 的输入，以此类推
    numleds = 1  

    grovepi.pinMode(pin,"OUTPUT")
    time.sleep(1)

    # 可串联 RGB LED 方法
    # grovepi.storeColor(red, green, blue)
    # grovepi.chainableRgbLed_init(pin, numLeds)
    # grovepi.chainableRgbLed_test(pin, numLeds, testColor)
    # grovepi.chainableRgbLed_pattern(pin, pattern, whichLed)
    # grovepi.chainableRgbLed_modulo(pin, offset, divisor)
    # grovepi.chainableRgbLed_setLevel(pin, level, reverse)

    # grovepi.chainableRgbLed_test() 使用的测试颜色
    testColorBlack = 0   # 0b000 #000000
    testColorBlue = 1    # 0b001 #0000FF
    testColorGreen = 2   # 0b010 #00FF00
    testColorCyan = 3    # 0b011 #00FFFF
    testColorRed = 4     # 0b100 #FF0000
    testColorMagenta = 5 # 0b101 #FF00FF
    testColorYellow = 6  # 0b110 #FFFF00
    testColorWhite = 7   # 0b111 #FFFFFF

    # grovepi.chainableRgbLed_pattern() 使用的模式
    thisLedOnly = 0
    allLedsExceptThis = 1
    thisLedAndInwards = 2
    thisLedAndOutwards = 3

    try:

        print "测试 1) 初始化"

        # 初始化 LED 链
        grovepi.chainableRgbLed_init(pin, numleds)
        time.sleep(.5)

        # 更改颜色为绿色
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 将 LED 1 设置为绿色
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 0)
        time.sleep(.5)

        # 更改颜色为红色
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # 将 LED 10 设置为红色
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 9)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 2a) 测试模式 - 黑色"

        # 测试模式 0 - 黑色 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(1)


        print "测试 2b) 测试模式 - 蓝色"

        # 测试模式 1 蓝色
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlue)
        time.sleep(1)


        print "测试 2c) 测试模式 - 绿色"

        # 测试模式 2 绿色
        grovepi.chainableRgbLed_test(pin, numleds, testColorGreen)
        time.sleep(1)


        print "测试 2d) 测试模式 - 青色"

        # 测试模式 3 青色
        grovepi.chainableRgbLed_test(pin, numleds, testColorCyan)
        time.sleep(1)


        print "测试 2e) 测试模式 - 红色"

        # 测试模式 4 红色
        grovepi.chainableRgbLed_test(pin, numleds, testColorRed)
        time.sleep(1)


        print "测试 2f) 测试模式 - 品红色"

        # 测试模式 5 品红色
        grovepi.chainableRgbLed_test(pin, numleds, testColorMagenta)
        time.sleep(1)


        print "测试 2g) 测试模式 - 黄色"

        # 测试模式 6 黄色
        grovepi.chainableRgbLed_test(pin, numleds, testColorYellow)
        time.sleep(1)


        print "测试 2h) 测试模式 - 白色"

        # 测试模式 7 白色
        grovepi.chainableRgbLed_test(pin, numleds, testColorWhite)
        time.sleep(1)


        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 3a) 使用模式设置 - 仅此 LED"

        # 更改颜色为红色
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # 将 LED 3 设置为红色
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 2)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 3b) 使用模式设置 - 除此 LED 外所有 LED"

        # 更改颜色为蓝色
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # 将除 LED 3 外的所有 LED 设置为蓝色
        grovepi.chainableRgbLed_pattern(pin, allLedsExceptThis, 3)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 3c) 使用模式设置 - 此 LED 和向内"

        # 更改颜色为绿色
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 将 LED 1-3 设置为绿色
        grovepi.chainableRgbLed_pattern(pin, thisLedAndInwards, 2)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 3d) 使用模式设置 - 此 LED 和向外"

        # 更改颜色为绿色
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 将 LED 7-10 设置为绿色
        grovepi.chainableRgbLed_pattern(pin, thisLedAndOutwards, 6)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 4a) 使用模数设置 - 所有 LED"

        # 更改颜色为黑色 (完全关闭)
        grovepi.storeColor(0,0,0)
        time.sleep(.5)

        # 将所有 LED 设置为黑色
        # 偏移量 0 表示从第一个 LED 开始
        # 除数 1 表示每个 LED
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # 更改颜色为白色 (完全打开)
        grovepi.storeColor(255,255,255)
        time.sleep(.5)

        # 将所有 LED 设置为白色
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 4b) 使用模数设置 - 每隔 2 个"

        # 更改颜色为红色
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # 将每隔 2 个 LED 设置为红色
        grovepi.chainableRgbLed_modulo(pin, 0, 2)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)


        print "测试 4c) 使用模数设置 - 每隔 2 个，偏移量 1"

        # 更改颜色为绿色
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 将每隔 2 个 LED 设置为绿色，偏移量 1
        grovepi.chainableRgbLed_modulo(pin, 1, 2)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 4d) 使用模数设置 - 每隔 3 个，偏移量 0"

        # 更改颜色为红色
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # 将每隔 3 个 LED 设置为红色
        grovepi.chainableRgbLed_modulo(pin, 0, 3)
        time.sleep(.5)

        # 更改颜色为绿色
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 将每隔 3 个 LED 设置为绿色，偏移量 1
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # 更改颜色为蓝色
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # 将每隔 3 个 LED 设置为蓝色，偏移量 2
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 4e) 使用模数设置 - 每隔 3 个，偏移量 1"

        # 更改颜色为黄色
        grovepi.storeColor(255,255,0)
        time.sleep(.5)

        # 将每隔 4 个 LED 设置为黄色
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)


        print "测试 4f) 使用模数设置 - 每隔 3 个，偏移量 2"

        # 更改颜色为品红色
        grovepi.storeColor(255,0,255)
        time.sleep(.5)

        # 将每隔 4 个 LED 设置为品红色
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 5a) 设置亮度级别 6"

        # 更改颜色为绿色
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 将 LED 1-6 设置为绿色
        grovepi.write_i2c_block(0x04,[95,pin,6,0])
        time.sleep(.5)

        # 暂停以观察效果
        time.sleep(2)

        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "测试 5b) 设置亮度级别 7 - 反向"

        # 更改颜色为红色
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # 将 LED 4-10 设置为红色
        grovepi.write_i2c_block(0x04,[95,pin,7,1])
        time.sleep(.5)


    except KeyboardInterrupt:
        # 重置 (全部关闭)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        break
    except IOError:
        print "错误"
```

- 注意以下事项：

```
    pin = 7         # 设置输出引脚
    numleds = 1     # 插入的 LED 数量
```

- 此外，您可以在 grovepi.py 中看到的所有方法如下：

```
    storeColor(red, green, blue)
    chainableRgbLed_init(pin, numLeds)
    chainableRgbLed_test(pin, numLeds, testColor)
    chainableRgbLed_pattern(pin, pattern, whichLed)
    chainableRgbLed_modulo(pin, offset, divisor)
    chainableRgbLed_setLevel(pin, level, reverse)
```

5.运行示例代码。

```
    sudo python3 grove_chainable_rgb_led.py
```

6.如果您的 GrovePi 没有最新的固件，此示例可能无法运行，请更新固件。

```
    cd yourpath/GrovePi/Firmware
    sudo ./firmware_update.sh
```

### 使用 Beaglebone Green

要开始编辑存储在 BBG 上的程序，您可以使用 Cloud9 IDE。

作为一个简单的练习，可以创建一个简单的应用程序来闪烁 BeagleBone 上的 4 个用户可编程 LED 之一，以熟悉 Cloud9 IDE。

如果这是您第一次使用 Cloud9 IDE，请访问此 [**链接**](/cn/BeagleBone_Green)。

**步骤1：** 将 Grove - UART 插座设置为 Grove - GPIO 插座，请按照此 [**链接**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html)。

**步骤2：** 点击右上角的 "+" 创建一个新文件。

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9_newfile.jpg)

**步骤3：** 将以下代码复制并粘贴到新标签页中

```
import time
import Adafruit_BBIO.GPIO as GPIO
 
CLK_PIN = "P9_22"
DATA_PIN = "P9_21"
NUMBER_OF_LEDS = 1
 
class ChainableLED():
    def __init__(self, clk_pin, data_pin, number_of_leds):
        self.__clk_pin = clk_pin
        self.__data_pin = data_pin
        self.__number_of_leds = number_of_leds
 
        GPIO.setup(self.__clk_pin, GPIO.OUT)
        GPIO.setup(self.__data_pin, GPIO.OUT)
 
        for i in range(self.__number_of_leds):
            self.setColorRGB(i, 0, 0, 0)
 
    def clk(self):
        GPIO.output(self.__clk_pin, GPIO.LOW)
        time.sleep(0.00002)
        GPIO.output(self.__clk_pin, GPIO.HIGH)
        time.sleep(0.00002)
 
    def sendByte(self, b):
        "逐位发送，从最高有效位开始"
        for i in range(8):
            # 如果最高有效位为1，则写入1并时钟，否则写入0并时钟
            if (b & 0x80) != 0:
                GPIO.output(self.__data_pin, GPIO.HIGH)
            else:
                GPIO.output(self.__data_pin, GPIO.LOW)
            self.clk()
 
            # 发送下一个位
            b = b << 1
 
    def sendColor(self, red, green, blue):
        "首先发送一个字节，格式为 '1 1 /B7 /B6 /G7 /G6 /R7 /R6' "
        #prefix = B11000000
        prefix = 0xC0
        if (blue & 0x80) == 0:     
            #prefix |= B00100000
            prefix |= 0x20
        if (blue & 0x40) == 0:     
            #prefix |= B00010000
            prefix |= 0x10
        if (green & 0x80) == 0:    
            #prefix |= B00001000
            prefix |= 0x08
        if (green & 0x40) == 0:    
            #prefix |= B00000100
            prefix |= 0x04
        if (red & 0x80) == 0:      
            #prefix |= B00000010
            prefix |= 0x02
        if (red & 0x40) == 0:      
            #prefix |= B00000001
            prefix |= 0x01
        self.sendByte(prefix)
 
        # 现在必须发送三个颜色值
        self.sendByte(blue)
        self.sendByte(green)
        self.sendByte(red)
 
    def setColorRGB(self, led, red, green, blue):
        # 发送数据帧前缀 (32x '0')
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
        # 为每个 LED 发送颜色数据
        for i in range(self.__number_of_leds):
            '''
            if i == led:
                _led_state[i*3 + _CL_RED] = red;
                _led_state[i*3 + _CL_GREEN] = green;
                _led_state[i*3 + _CL_BLUE] = blue;
            sendColor(_led_state[i*3 + _CL_RED],
                      _led_state[i*3 + _CL_GREEN],
                      _led_state[i*3 + _CL_BLUE]);
            '''
            self.sendColor(red, green, blue)
 
        # 终止数据帧 (32x "0")
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
 
# 注意: 使用 P9_22(UART2_RXD) 和 P9_21(UART2_TXD) 作为 GPIO。
# 将 Grove - Chainable RGB LED 连接到 Beaglebone Green 的 UART Grove 插座。
if __name__ == "__main__":
    rgb_led = ChainableLED(CLK_PIN, DATA_PIN, NUMBER_OF_LEDS)
 
    while True:
        # 第一个参数: NUMBER_OF_LEDS - 1; 其他参数: RGB 值。
        rgb_led.setColorRGB(0, 255, 0, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 255, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 0, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 255, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 0, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 255, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 255, 255)
        time.sleep(2)
```

**步骤4：** 点击磁盘图标保存文件，并使用 .py 扩展名命名文件。

**步骤5：** 将 Grove Chainable RGB LED 连接到 BBG 的 Grove UART 插座。

**步骤6：** 运行代码。您会发现 RGB LED 每隔 2 秒变换一次颜色。

# 可串联 RGB LED Eagle 文件 V1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1%20(2).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 可串联 RGB LED Eagle 文件 V2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0%20(1).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 资源

---------

- **[库]**[可串联 RGB LED 的 P9813 库](https://github.com/pjpmarques/ChainableLED)
- **[库]**[可串联 RGB LED 库的 Github 仓库（新版）](https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED)
- **[库]** [CodeCraft 代码](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable%20RGB%20LED.zip)
- **[Eagle]**[可串联 RGB LED Eagle 文件 V1](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1.zip)
- **[Eagle]**[可串联 RGB LED Eagle 文件 V2](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0.zip)
- **[数据手册]**[P9813 数据手册](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/P9813_datasheet.pdf)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Chainable_RGB_LED -->

## 项目

**Grove - 可串联 LED 的介绍**：此项目展示了如何连接一个可串联 LED 到 Grove。
<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-to-chainable-led-d668b7/embed' width='350'></iframe>

**DIY 一个用于解释 RGB 色彩模型的设备**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/diy-a-device-for-explaining-rgb-color-model-496cbc/embed' width='350'></iframe>

**使用 Seeeduino Lotus 实现安全访问** 当你敲门或靠近门时，门会自动打开。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/limanchen/security-access-using-seeeduino-lotus-7eb90f/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>