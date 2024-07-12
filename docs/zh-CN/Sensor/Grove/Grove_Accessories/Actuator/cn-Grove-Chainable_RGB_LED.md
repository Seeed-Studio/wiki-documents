---
title: Grove - 可串联RGB LED
description: Grove - 可串联RGB LED
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/
slug: /cn/Grove-Chainable_RGB_LED
last_update:
  date: 03/20/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**Grove - 链式RGB LED**是基于P9813芯片的全彩色LED驱动器。它提供3个恒流驱动器以及256级灰度的调制输出。它使用两线传输（数据和时钟）与MCU进行通信。这种两线传输可用于级联额外的**Grove - 链式RGB LED**模块。内置的时钟再生增强了传输距离。这个Grove模块适用于任何基于彩色LED的项目。

## 版本

| 修订版本 | 描述                                            | 发布日期  |购买方式|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1    | 初始公开发布（测试版）                  | 2011年5月5日 |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
| v2    | 将P9813S16替换为P9813S14，并将Grove连接器从垂直更改为水平 | 2016年4月19日 |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-%E2%80%93-Chainable-RGB-Led-V2.0-p-2903.html)|

## 规格

- 工作电压: 5V
- 工作电流: 20mA
- 通信协议: 串行
      关于Grove模块的更多详细信息，请参阅[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
  :::

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提到的支持平台是该模块软件或理论兼容性的一个指标。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

### 使用方法

### 玩转 Arduino

当你拿到Grove - 链式RGB LED时，你可能会想如何点亮它。现在我们将向你展示这个演示：RGB的所有颜色以统一的方式循环。

要完成此演示，你可以使用一个或多个Grove - 链式RGB LED。请注意，一个Grove - 链式RGB LED的IN接口应连接到Grove - 基础底板的D7/D8，其OUT接口连接到另一个Grove - 链式RGB LED的IN接口，以这种方式可以连接更多的LED。

- 下载[Chainable LED库](https://github.com/pjpmarques/ChainableLED)并将其安装到Arduino库中。在wiki页面中有关于[如何安装Arduino库](https://yiyan.baidu.com/How_to_install_Arduino_Library)的课程。
- 通过路径：文件->示例->ChainableLED_master打开示例CycleThroughColors，并将其上传到Seeeduino。

```

/* 
 * 使用ChainableRGB库控制Grove RGB的示例。
 * 这段代码以统一的方式循环遍历所有颜色。这是通过使用HSB颜色空间来实现的。
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

你可以观察到这样的场景：五个LED的颜色会连续渐变。

**扩展应用：**
基于[Chainable LED库](https://github.com/pjpmarques/ChainableLED)，我们设计了这个演示：RGB颜色随Grove温度传感器测量的温度而变化。当温度从25度变化到32度时，RGB颜色从绿色变为红色。测试代码如下所示。如果你感兴趣，可以试试。

```
    // 温度 -> rgbLED 演示
    // 温度从25到32，rgbLed从绿色变为红色
    // Grove-温度传感器接入A0
    // LED接入D7，D8

    #include <Streaming.h>
    #include <ChainableLED.h>

    #define TEMPUP 32
    #define TEMPDOWN 25

    ChainableLED leds(7, 8, 1); // connect to pin7 and pin8 , one led

    int getAnalog() // get value from A0
    {
        int sum = 0;
        for(int i=0; i<32; i++)
        {
            sum += analogRead(A0);
        }

        return sum>>5;
    }

    float getTemp() // get temperature
    {
        float temperature = 0.0;
        float resistance = 0.0;
        int B = 3975; //B value of the thermistor

        int a = getAnalog();

        resistance = (float)(1023-a)*10000/a; //get the resistance of the sensor;
        temperature = 1/(log(resistance/10000)/B+1/298.15)-273.15; //convert to temperature via datasheet ;
        return temperature;
    }

    void ledLight(int dta) // light led
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

### 玩转 Codecraft

#### 硬件

**步骤 1.** 将Grove - 链式RGB LED连接到基础底板的D7端口。

**步骤 2.** 将基础底板插接到你的Seeeduino/Arduino上。

**步骤 3.** 通过USB电缆将Seeeduino/Arduino连接到你的PC。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖放到工作区。

:::注意
    如果你是第一次使用Codecraft，也可以参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下面的图片拖动代码块，或者打开本页面底部可以下载的cdc文件。

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Chainable_RGB_LED.png)

将程序上传到你的Arduino/Seeeduino。

:::提示
    当代码上传完成后，你会看到LED灯渐亮渐暗。
:::

### 玩转 Raspberry Pi

:::注意
     如果你使用的是**带有Raspberry Pi OS >= Bullseye的Raspberry Pi**，你必须**仅使用Python3**来运行这条命令行。
:::
1.你应该已经有一个树莓派和一个grovepi或grovepi+。

2.你应该已经完成了开发环境的配置，否则请按照[这里](https://yiyan.baidu.com/GrovePi_Plus)的说明操作。

3.连接

- 使用grove线将传感器连接到grovepi的D7插槽。

4.导航到演示目录：

```
    cd yourpath/GrovePi/Software/Python/
```

- 查看代码

```
     nano grove_chainable_rgb_led.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect first LED in Chainable RGB LED chain to digital port D7
    # In: CI,DI,VCC,GND
    # Out: CO,DO,VCC,GND
    pin = 7

    # I have 10 LEDs connected in series with the first connected to the GrovePi and the last not connected
    # First LED input socket connected to GrovePi, output socket connected to second LED input and so on
    numleds = 1  

    grovepi.pinMode(pin,"OUTPUT")
    time.sleep(1)

    # Chainable RGB LED methods
    # grovepi.storeColor(red, green, blue)
    # grovepi.chainableRgbLed_init(pin, numLeds)
    # grovepi.chainableRgbLed_test(pin, numLeds, testColor)
    # grovepi.chainableRgbLed_pattern(pin, pattern, whichLed)
    # grovepi.chainableRgbLed_modulo(pin, offset, divisor)
    # grovepi.chainableRgbLed_setLevel(pin, level, reverse)

    # test colors used in grovepi.chainableRgbLed_test()
    testColorBlack = 0   # 0b000 #000000
    testColorBlue = 1    # 0b001 #0000FF
    testColorGreen = 2   # 0b010 #00FF00
    testColorCyan = 3    # 0b011 #00FFFF
    testColorRed = 4     # 0b100 #FF0000
    testColorMagenta = 5 # 0b101 #FF00FF
    testColorYellow = 6  # 0b110 #FFFF00
    testColorWhite = 7   # 0b111 #FFFFFF

    # patterns used in grovepi.chainableRgbLed_pattern()
    thisLedOnly = 0
    allLedsExceptThis = 1
    thisLedAndInwards = 2
    thisLedAndOutwards = 3

    try:

        print "Test 1) Initialise"

        # init chain of leds
        grovepi.chainableRgbLed_init(pin, numleds)
        time.sleep(.5)

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set led 1 to green
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 0)
        time.sleep(.5)

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set led 10 to red
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 9)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 2a) Test Patterns - black"

        # test pattern 0 - black (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(1)


        print "Test 2b) Test Patterns - blue"

        # test pattern 1 blue
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlue)
        time.sleep(1)


        print "Test 2c) Test Patterns - green"

        # test pattern 2 green
        grovepi.chainableRgbLed_test(pin, numleds, testColorGreen)
        time.sleep(1)


        print "Test 2d) Test Patterns - cyan"

        # test pattern 3 cyan
        grovepi.chainableRgbLed_test(pin, numleds, testColorCyan)
        time.sleep(1)


        print "Test 2e) Test Patterns - red"

        # test pattern 4 red
        grovepi.chainableRgbLed_test(pin, numleds, testColorRed)
        time.sleep(1)


        print "Test 2f) Test Patterns - magenta"

        # test pattern 5 magenta
        grovepi.chainableRgbLed_test(pin, numleds, testColorMagenta)
        time.sleep(1)


        print "Test 2g) Test Patterns - yellow"

        # test pattern 6 yellow
        grovepi.chainableRgbLed_test(pin, numleds, testColorYellow)
        time.sleep(1)


        print "Test 2h) Test Patterns - white"

        # test pattern 7 white
        grovepi.chainableRgbLed_test(pin, numleds, testColorWhite)
        time.sleep(1)


        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3a) Set using pattern - this led only"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set led 3 to red
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3b) Set using pattern - all leds except this"

        # change color to blue
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # set all leds except for 3 to blue
        grovepi.chainableRgbLed_pattern(pin, allLedsExceptThis, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3c) Set using pattern - this led and inwards"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set leds 1-3 to green
        grovepi.chainableRgbLed_pattern(pin, thisLedAndInwards, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 3d) Set using pattern - this led and outwards"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set leds 7-10 to green
        grovepi.chainableRgbLed_pattern(pin, thisLedAndOutwards, 6)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4a) Set using modulo - all leds"

        # change color to black (fully off)
        grovepi.storeColor(0,0,0)
        time.sleep(.5)

        # set all leds black
        # offset 0 means start at first led
        # divisor 1 means every led
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # change color to white (fully on)
        grovepi.storeColor(255,255,255)
        time.sleep(.5)

        # set all leds white
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4b) Set using modulo - every 2"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set every 2nd led to red
        grovepi.chainableRgbLed_modulo(pin, 0, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)


        print "Test 4c) Set using modulo - every 2, offset 1"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set every 2nd led to green, offset 1
        grovepi.chainableRgbLed_modulo(pin, 1, 2)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4d) Set using modulo - every 3, offset 0"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set every 3nd led to red
        grovepi.chainableRgbLed_modulo(pin, 0, 3)
        time.sleep(.5)

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set every 3nd led to green, offset 1
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # change color to blue
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # set every 3nd led to blue, offset 2
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 4e) Set using modulo - every 3, offset 1"

        # change color to yellow
        grovepi.storeColor(255,255,0)
        time.sleep(.5)

        # set every 4nd led to yellow
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)


        print "Test 4f) Set using modulo - every 3, offset 2"

        # change color to magenta
        grovepi.storeColor(255,0,255)
        time.sleep(.5)

        # set every 4nd led to magenta
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 5a) Set level 6"

        # change color to green
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # set leds 1-6 to green
        grovepi.write_i2c_block(0x04,[95,pin,6,0])
        time.sleep(.5)

        # pause so you can see what happened
        time.sleep(2)

        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "Test 5b) Set level 7 - reverse"

        # change color to red
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # set leds 4-10 to red
        grovepi.write_i2c_block(0x04,[95,pin,7,1])
        time.sleep(.5)


    except KeyboardInterrupt:
        # reset (all off)
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        break
    except IOError:
        print "Error"
```

- 注意，有一些你需要关心的事情：

```
    pin = 7         #setting up the output pin
    numleds = 1     #how many leds you plug
```

- 同时，你可以在grovepi.py中看到的所有方法是：

```
    storeColor(red, green, blue)
    chainableRgbLed_init(pin, numLeds)
    chainableRgbLed_test(pin, numLeds, testColor)
    chainableRgbLed_pattern(pin, pattern, whichLed)
    chainableRgbLed_modulo(pin, offset, divisor)
    chainableRgbLed_setLevel(pin, level, reverse)
```

5.运行演示。

```
    sudo python3 grove_chainable_rgb_led.py
```

6.如果你的grovepi没有最新的固件，这个演示可能无法工作，请更新固件。

```
    cd yourpath/GrovePi/Firmware
    sudo ./firmware_update.sh
```

### 使用Beaglebone Green

要开始编辑在BBG上运行的程序，您可以使用Cloud9 IDE。

作为熟悉Cloud9 IDE的简单练习，创建一个简单的应用程序来闪烁BeagleBone上4个用户可编程LED中的一个是一个很好的开始。

如果您是第一次使用Cloud9 IDE，请按照此[**链接**](https://yiyan.baidu.com/BeagleBone_Green)操作。

**步骤1：**将Grove - UART套接字设置为Grove - GPIO套接字，只需按照此[**链接**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html)操作即可。

**步骤2：**点击右上角的“+”创建一个新文件。

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9_newfile.jpg)

**步骤3：**将以下代码复制并粘贴到新标签页中

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
        "Send one bit at a time, starting with the MSB"
        for i in range(8):
            # If MSB is 1, write one and clock it, else write 0 and clock
            if (b & 0x80) != 0:
                GPIO.output(self.__data_pin, GPIO.HIGH)
            else:
                GPIO.output(self.__data_pin, GPIO.LOW)
            self.clk()
 
            # Advance to the next bit to send
            b = b << 1
 
    def sendColor(self, red, green, blue):
        "Start by sending a byte with the format '1 1 /B7 /B6 /G7 /G6 /R7 /R6' "
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
 
        # Now must send the 3 colors
        self.sendByte(blue)
        self.sendByte(green)
        self.sendByte(red)
 
    def setColorRGB(self, led, red, green, blue):
        # Send data frame prefix (32x '0')
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
        # Send color data for each one of the leds
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
 
        # Terminate data frame (32x "0")
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
 
# Note: Use P9_22(UART2_RXD) and P9_21(UART2_TXD) as GPIO.
# Connect the Grove - Chainable RGB LED to UART Grove port of Beaglebone Green.
if __name__ == "__main__":
    rgb_led = ChainableLED(CLK_PIN, DATA_PIN, NUMBER_OF_LEDS)
 
    while True:
        # The first parameter: NUMBER_OF_LEDS - 1; Other parameters: the RGB values.
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

**步骤4：**通过点击磁盘图标并给文件一个以.py为扩展名的名称来保存文件。

**步骤5：**将Grove Chainable RGB LED连接到BBG上的Grove UART插座。

**步骤6：**运行代码。 你会发现RGB LED每2秒改变一次颜色。

# 链式RGB LED eagle文件 V1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1%20(2).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
# 链式RGB LED eagle文件 V2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0%20(1).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 资源

---------

- **[库]**[P9813的链式RGB LED 库](https://github.com/pjpmarques/ChainableLED)
- **[库]**[链式 RGB LED 库的新版GitHub仓库](https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED)
- **[库]** [CodeCraft 代码](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable%20RGB%20LED.zip)
- **[Eagle]**[链式RGB LED eagle 文件 V1](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1.zip)
- **[Eagle]**[链式RGB LED eagle 文件 V2](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0.zip)
- **[数据手册]**[P9813 数据结构](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/P9813_datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Chainable_RGB_LED -->

## 项目

**Grove - 链式LED介绍**：本项目展示了如何将链式LED连接到Grove。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-to-chainable-led-d668b7/embed' width='350'></iframe>

**DIY一个用于解释RGB颜色模型的设备**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/diy-a-device-for-explaining-rgb-color-model-496cbc/embed' width='350'></iframe>

**使用Seeeduino Lotus进行安全访问** 当你敲门或靠近门时，门会自动打开。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/limanchen/security-access-using-seeeduino-lotus-7eb90f/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们的产品时尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
