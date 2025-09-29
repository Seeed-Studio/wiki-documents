---
description:  Starter_Shield_EN
title:  Starter Shield EN
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Starter_Shield_EN
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Starter_Shield_EN
category: Discontinued
bzurl:
oldwikiname: Seeeduino_Stalker
prodimagename:
bzprodimageurl: https://www.research.net/r/Starter_Shield_EN
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tickshield_02.jpg)

Starter Shield 是 Arduino 世界初学者的完美起点。在学习这个套件时，您可以学习基本的焊接技巧并练习编程原理。我们准备了详细的焊接指南和完全支持的编程示例库，从简单到困难。因此，即使您几乎没有技术知识，电子学也可以变得有趣。希望您在使用这个套件时能获得乐趣并学到一些知识！

这是一个使用 Starter Shield 的示例 [如何制作小老虎机器](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/)。

Starter Shield 包含一些基本的电子资源，如按钮、传感器、蜂鸣器和显示器。这是学习如何焊接的绝佳方式。Starter Shield 是为初学者设计的通孔焊接套件。组装完套件后，您将掌握通孔焊接的基础知识，并拥有一个与您的 Arduino 配合使用的极客风格闹钟。

型号：[SLD90400P](https://www.seeedstudio.com/depot/tick-tock-shield-p-1371.html?cPath=6_7)

## 零件清单

- 1x 蜂鸣器；

- 1x 铝电解电容 100uF-16V；

- 1x 温度传感器-10k；

- 1x 光敏电阻 10K；

- 4x 电阻 10K-5%-1/4W；

- 4x 电阻 220R-5%-1/4W；

- 3x 电阻 4.7K-5%-1/4W；

- 2x 蓝色公排针 垂直；

- 2x 蓝色公排针 垂直；

- 1x 蓝色母排针 垂直；

- 1x 锂离子电池 3V-40mAh；

- 1x SMD 电池座 塑料；

- 1x IC 驱动器；

- 1x RTC 时钟/定时；

- 2x IC 插座；

- 3x 按钮顶部；

- 2x 黑色圆形母排针 垂直；

- 1x LED 绿色-绿色；

- 1x LED 蓝色-蓝色；

- 2x LED 红色-红色；

- 1x LED 7段-红色；

- 1x 晶振 32.768KHz-12.5pF-20ppm-30K；

- 2x 陶瓷圆片电容 1nF-50V-20%；

- 1x 陶瓷圆片电容 100nF-25V；

- 1x Starter Shield 焊接指南

- 1x Starter Shield PCB；

## 规格

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tick_Shield_Interface_Function.jpg)

**硬件资源**

- 纽扣电池座：当外部电源关闭时为 RTC IC 提供电源；

- 蜂鸣器：产生音频效果；

- 光传感器：检测环境光强度；

- 温度传感器：检测环境温度；

- K1...K3：临时按钮；

- D1...D4：蓝色、绿色、红色和红色 LED；

- U3：VS1307，实时时钟 IC；

- U5：TM1636，7段显示驱动 IC。

**Arduino 上使用的引脚**

- D2：控制 LED1；

- D3：控制 LED2；

- D4：控制 LED3；

- D5：控制 LED4；

- D6：控制蜂鸣器；

- D7：VS1636 SCLK 引脚；

- D8：VS1636 DIO 引脚；

- D9：控制 K1；
- D10：控制 K2；
- D11：控制 K3；

- A0(D14)：从温度传感器轮询读数；

- A1(D15)：从光传感器轮询读数；

- A4(D18)：DS1307 SDA 引脚
- A5(D19)：DS1307 SCK 引脚

## 演示

在进行以下演示之前，您应该完成 Tick Tock Shield 的焊接。如果您还没有完成，请点击[这里](https://www.seeedstudio.com/document/pdf/Tick%20Tock%20Shield%20Soldering%20Guide.pdf)下载焊接指南。

这里我们为您展示从简单到困难的 7 个演示。它们涉及 Tick Tock Shield 上所有硬件资源的使用：

**演示 1：LED 流水灯**

1. 这个演示只涉及最基本的执行器 - LED 的使用。

2. 重启 Arduino IDE。通过路径打开示例 "RunLED"：File --&gt; Examples --&gt; TickTockShield--&gt; RunLED。

   ![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Open_RunLED_Code.jpg)

3. 这个演示可以以可设置的速度让 4 个 LED 流水闪烁。您可以通过更改函数 "runLED(speed)" 的参数来改变流水速度。在其注释中可以找到该函数的进一步说明。

4. 点击上传按钮将程序上传到 Arduino。

5. 程序上传后，您可以看到四个 LED 灯以给定的速度从左到右依次点亮和熄灭。

**演示 2：通过按键控制 LED**

这个演示向您展示如何使用最基本的输入 - 按钮来控制 LED。

1. 以与上面打开 "RunLED" 相同的方式打开示例 "ControlLED"。

2. 这个演示可以通过按键打开或关闭四个 LED。我们设置了两个标志来存储此测试的状态，TEST_START 和 TEST_END。每次按下 "menu" 键时，状态在 TEST_START 和 TEST_END 之间切换。在 TEST_START 状态下，每次按下 "increase" 键可以从右到左多点亮一个 LED。"decrease" 键的效果与 "increase" 键相反。

**演示 3：通过按键改变蜂鸣器音调**
这个演示涉及如何使用蜂鸣器发出声音，由于您已经知道如何使用按钮，在这个演示中，我们使用按钮来增加或降低蜂鸣器的音调。

1. 打开示例 "changeThePitch"。

2. 每次按下 "increase" 键时，蜂鸣器的音调会升高。当按下 "decrease" 键时，音调会降低。

**演示 4：显示温度**

开始使用传感器。首先我们有温度传感器。尝试读取其值并在 7 段数码管上显示。

1. 打开示例 "MeasureTemprature"。
2. 7 段数码管将显示从温度传感器读取的当前温度，如下所示。
3. 如果您发现下图中对比度不够强，请尝试较低的视角。这个原理也适用于以下包含 7 段数码管使用的演示。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Measure_Temperature.jpg)

**演示 5：制作光传感器控制的 LED**

如果显示器的亮度能够根据环境光自动调节，是不是很方便？这个演示向您展示如何使用光传感器来实现这一点。

1. 以相同的方式打开示例 "SensorControlBrightness"。

2. 这个示例可以根据环境光强度改变 BRIGHT_ADJUST 指示器的亮度。环境越暗，LED 就越亮。右侧图片是结果。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Connect_Tick_Shield.jpg)

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Control_Light.jpg)

**演示 6：显示数字字符**

这个演示向您展示如何控制 7 段数码管的内容。

1. 打开示例 "CharacterFlow"。

2. 这个示例可以让数字字符 0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, A, b, C, d, E, F 从右到左流动。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Flow_Character.jpg)

**演示 7：实时时钟**

这是一个最终演示，涉及我们上面提到的所有硬件资源，并执行现实生活中闹钟的所有功能，如时间显示、发出蜂鸣声叫您起床等等。更重要的是，由于添加了光传感器和温度传感器，Tick Tock Shield 比普通闹钟功能更多。它可以感知环境光并自动调节 7 段数码管的亮度。它还可以在给定的时间间隔内显示当前温度。

1. 打开示例 "RealTimeClock" 并将示例上传到 Arduino。

2. 7 段数码管将交替显示当前时间和温度。

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Display_RTC_.jpg)

3. 调整时间和设置闹钟的方法：

- 1) 由于板上有 RTC 芯片，所以您不需要每次开机时都重新设置时间，当然，条件是 RTC 芯片的纽扣电池还有电。但如果这是您第一次启动 Tick Tock Shield，则需要设置时间。

- 2) 使用三个按钮来调整时间。它们是 "menu"(K3)、"increase"(K2) 和 "decrease"(K1)。按下 "menu" 在以下设置模式之间循环：

  - a) 设置正常时间显示的小时部分

  - b) 设置正常时间显示的分钟部分

  - c) 设置闹钟的小时部分

  - d) 设置闹钟的分钟部分

  - e) 设置 7 段数码管的默认亮度

  - f) 打开或关闭闹钟功能

  - g) 退出时间设置模式

- 3) 如果您想在处理完上述所有 7 个步骤之前退出。有两种中断方式。第一，无论在哪一步都按住 K3 3 秒。这样，Tick Tock Shield 将确认您所做的所有设置并退出。第二，让 Tick Tock Shield 闲置 5 秒。这样，不会存储任何设置，您也会退出时间设置模式。

- 4) K2 被分配用于设置闹钟的状态。您可以通过 ALARM_ENABLE 指示器了解闹钟的状态。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源  

- **[库文件]** [Starter Shield 库文件](https://github.com/Seeed-Studio/Starter_Shield)

- **[Eagle]** [Starter Shield eagle 文件](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip)
- **[PDF]** [BLE Bee v1.0 pdf](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

- **[EAGLE]** [BLE Bee v1.0 sch](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter%20Shield%20v1.1.sch)

- **[原理图]** [Starter Shield pdf 原理图](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

- **[数据手册]** [TM1636 数据手册](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Tm1636.pdf)

- **[数据手册]** [VS1307 数据手册](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Vs1307.pdf)

## 参考

### EEPROM 类  

**类功能：** 读写 AVR 芯片的 EEPROM。对于 Seeeduino V3.0，ATmega328P 芯片的 EEPROM 大小为 1K 字节。您写入的 EEPROM 内容在断电后不会丢失。它用于在实时时钟演示中保存闹钟时间和闹钟启用标志，您无需重新设置闹钟。

**函数说明：**

**1. EEPROM.read(int address);**
此函数用于从 EEPROM 的指定地址读取数据。

- address：目标单元的地址。

示例：

```cpp
temp_data[i] = EEPROM.read(i);
```

**2. EEPROM.write(int address, uint8_t value);**
此函数用于向 EEPROM 的指定地址写入数据。

- address：目标单元的地址
- uint8_t value：要写入目标单元的数据。

示例：

```cpp
if(temp_data[i] != mark[i])
    {
      EEPROM.write(0,mark[0]);
      EEPROM.write(1,mark[1]);
      EEPROM.write(2,mark[2]);
      EEPROM.write(3,mark[3]);
      EEPROM.write(4,mark[4]);
      return true;
    }
```

### TM1636 类  

**类功能：**此类包含控制四个七段显示器的所有功能。
 **函数说明：**

 **1. tm1636.point(boolean PointFlag);**
 此函数用于打开或关闭时钟点（:）。每次显示内容更改时，此函数都会生效。

- PointFlag：可以是 0（关闭）或 1（打开）。

示例：

```cpp
if(flag_clockpoint)
      {
        tm1636.point(POINT_ON);
      }
      else tm1636.point(POINT_OFF); 
```

**2. Tm1636.display(int8_t DispData[]);**
使用 DispData[] 的内容创建字符流。

- DispData[]：int8_t 类型的数组，包括 0、1、2、3、4、5、6、7、8、9、0、A、b、C、d、E 和 F。

示例：

```cpp
tm1636.display(disp);
```

### TickTockShield 类  

**类功能** 操作 Tick Tock Shield 上的所有组件。
**函数说明：**

**1. ticktockshield.init();**
Tick Tock Shield 的初始化。

**2. ticktockshield.runLED(字节 速度, 字节 方向);**

此函数按您选择的方向扫描 4 个 LED。

- speed：LED 流动速度，从 1（最慢）到 10（最快）。
- direction：LED 流动方向，可以是 LEFT_TO_RIGHT 或 RIGHT_TO_LEFT。

示例：

```cpp
/*从左到右运行 4 个 LED*/
ticktockshield.runLED(1,LEFT_TO_RIGHT);
```

**3. ticktockshield. turnOnLED();**
打开所有 4 个 LED。

**4. ticktockshield. turnOffLED();**
关闭所有 4 个 LED。

**5. setLed(unsigned char led_status, int pinLED);**
此函数用于打开或关闭单个 LED。

- led_status：可以是 LED_ON 或 LED_OFF。
- pinLED：可以是 LED_CLOCK_ADJUST、LED_ALARM_ADJUST、LED_BRIGHT_ADJUST、LED_ALARM_ENABLE 中的一个。

示例：

```cpp
void TickTockShield::turnOffLED()
{
 setLed(LOW,LED_CLOCK_ADJUST);
 setLed(LOW,LED_ALARM_ADJUST);
 setLed(LOW,LED_BRIGHT_ADJUST);
 setLed(LOW,LED_ALARM_ENABLE);
}
```

**6. ticktockshield.alarming();**
让蜂鸣器发出蜂鸣声。
示例：

```cpp
/*它将响起一分钟的闹钟，直到按下"MENU"键*/
    if(ticktockshield.isAlarmEnable())
    {
      ticktockshield.alarming();
    }
```

**7. ticktockshield.turnOffAlarm();**
当蜂鸣器正在蜂鸣时关闭闹钟。

**8. ticktockshield.setAlarm(uint8_t hour,uint8_t minute,uint8_t flag_enabl);**
设置闹钟时间。

- hour：小时
- minute：分钟
- flag_enabl：恢复闹钟状态的标志，可以是 0（未启用）或 1（已启用）

示例：

```cpp
ticktockshield.setAlarm(12,0);//是的，闹钟被初始化为 12:00 和 EEPROM 中的数据。
```

**9. ticktockshield.getAlarm();**
从 EEPROM 读取预设的闹钟值并将它们存储到给定的变量中，包括闹钟的启用标志。
示例：

```cpp
if(isFirstLoad())//是否是第一次加载固件？
 {
  ticktockshield.setAlarm(12,0);
  }
 else ticktockshield.getAlarm();//不是，读取存储在 EEPROM 中的闹钟
  ```

**10. ticktockshield.getTemperature();**
获取温度传感器的读数。
示例：

```cpp
/*读取环境温度并在数码管上显示。*/
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**11. ticktockshield.displayTemperature(int8_t temperature);**
在七段显示器上显示温度值（支持负值）。字符 C 表示摄氏度。
示例：

```cpp
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**12. ticktockshield.scanKey();**
找出哪个按键被按下。返回被按下按键的引脚号。如果没有按键被按下，返回"-1"。

```cpp
if((flag_scan_again)&&(KEY_MENU == ticktockshield.scanKey()))
      {
        ticktockshield.writeToAdjustArea();
        ticktockshield.processKey();
        system_states = SYSTEM_ADJUSTING;
      }
```

**13. ticktockshield.processKey();**
处理您通过按键输入的命令。如果是正常按下，此函数将发出与按下相对应的蜂鸣声。如果您按住"menu"键超过 3 秒，那么此函数将使 Tick Tock Shield 进入时间设置模式。如果在"menu"键之后没有其他按键被按下，那么此函数将使 Tick Tock Shield 退出时间设置模式。

**14. ticktockshield.processSystemStatus();**
当被调用时，根据系统状态执行不同的任务。系统状态可以是"调整时钟时间"、"闹钟时间"、"调整7段显示器亮度"和"启用闹钟"。

**15. ticktockshield.writeToAdjustArea();**
将最新的时间信息从正常时间显示模式传递到时间设置模式，以便在时间设置模式下使用。

**16. ticktockshield.writeToNormalArea();**
将时间设置模式中设置的时间信息传递到正常时间显示模式。

**17. ticktockshield.writeTime();**
将时间信息写入RTC芯片。

**18. ticktockshield.getTime();**
从RTC读取当前时间信息。

**19. ticktockshield.displayTime();**
在7段显示器上显示时间。

示例：

```cpp
if(ticktockshield.isAlarmEnable())
      {
        tm1636.point(POINT_ON);
        ticktockshield.displayTime();
        system_states = SYSTEM_ALARMING;
        return;
      }
```

**20. ticktockshield.display(int8_t DispData []);**
在7段显示器上显示字母数字信息。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
