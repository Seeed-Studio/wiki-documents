---
description: Wio Terminal电池底座(650mAh)
title: Wio Terminal电池底座(650mAh)
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Chassis-Battery_650mAh
last_update:
  date: 3/05/2023
  author: 金菊
---

![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

 [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 电池底座是Wio Terminal开发板的必备扩展板，可为Wio Terminal提供外部电源，增强其便携性和紧凑性。它具有 **650mAh可充电锂聚合物电池, 电池充放电状态LED, 4个Grove模拟/数字端口, 1个Grove I2C端口和1个Grove UART端口, 以及具备美观和保护功能的ABS外壳。** 此外，Wio Terminal电池底座背面还具有与Raspberry Pi 40引脚兼容的GPIO接口，可连接更多附件！

Wio Terminal电池底座的新版本还增加了 **Texas Instrument的 [BQ27441-G1A](http://www.ti.com/product/BQ27441-G1)** -   这是一款自校准、基于I2C的锂聚合物（LiPo）电池燃料计，可用于测量电池的电压以估计其充电百分比和剩余容量！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html"><strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## **特点**

- 内置650mAh可充电锂聚合物电池
- 电池充放电状态LED
- 电池开关按钮
- 内置BQ27441-G1A锂聚合物电池燃料计
- USB Type-C充电接口
- 过流保护
- 持续模式/保护
- 4个Grove模拟/数字端口
- 1个Grove I2C端口
- 1个Grove UART端口
- 外壳内隐藏了磁铁，可将其粘贴在白板上！

## **规格**

<!-- <style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-pu0z{background-color:#9b9b9b;border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style> -->

<table className="tg">
  <thead>
    <tr><th className="tg-pu0z">项目</th><th className="tg-pu0z">详情</th></tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-fymr">电源供应</td>
      <td className="tg-0pky">4.75V - 5.25V</td>
    </tr>
    <tr>
      <td className="tg-1wig">内置电池</td>
      <td className="tg-0lax">650mAh</td>
    </tr>
    <tr>
      <td className="tg-1wig">充电电流</td>
      <td className="tg-0lax">最大值: 660mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">电池板模式</td>
      <td className="tg-0lax">绿色LED：亮表示板子正在充电。<br /><br />绿色LED：亮表示板子正在充电。<br /><br />黄色LED：亮表示男性接口输出/输入5V。</td>
    </tr>
    <tr>
      <td className="tg-1wig">GPIO 输出</td>
      <td className="tg-0lax">最大电压: 5.15V <br /><br />最大电流: 380mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">涓流充电电流</td>
      <td className="tg-0lax">30mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Grove 接口</td>
      <td className="tg-0lax">Grove模拟/数字 *4，Grove I2C * 1，Grove UART * 1</td>
    </tr>
  </tbody>
</table>

## **硬件概述**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png"/></div>

## **注意事项**

- 如果在底座处于充电模式时拆卸电池，底座将切换到故障模式，绿色指示灯以1Hz的频率闪烁。

- 当不使用电池底座时，请按下按钮进入睡眠模式，所有LED指示灯都会关闭。

## **检测锂聚合物电池状态**

1. 请访问 [SparkFun_BQ27441_Arduino_Library](https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library) 存储库并将整个存储库下载到您的本地驱动器。

2. 现在，可以将库安装到Arduino IDE中。打开Arduino IDE，点击`sketch` -> `Include Library` -> `Add .ZIP Library`,选择您刚刚下载的`SparkFun_BQ27441_Arduino_Library` 文件。  

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### **示例代码**

您可以使用以下代码从电池底座读取统计信息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif"/></div>

```cpp
#include <SparkFunBQ27441.h>
#include"TFT_eSPI.h"

TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
#define FF17 &FreeSans9pt7b

const unsigned int BATTERY_CAPACITY = 650; // Set Wio Terminal Battery's Capacity 

void setupBQ27441(void)
{
  // Use lipo.begin() to initialize the BQ27441-G1A and confirm that it's
  // connected and communicating.
  if (!lipo.begin()) // begin() will return true if communication is successful
  {
  // If communication fails, print an error message and loop forever.
    Serial.println("Error: Unable to communicate with BQ27441.");
    Serial.println("  Check wiring and try again.");
    Serial.println("  (Battery must be plugged into Battery Babysitter!)");
    tft.setTextColor(TFT_RED);
    tft.setCursor((320 - tft.textWidth("Battery Not Initialised!"))/2, 120);
    tft.print("Battery Not Initialised!");
    while (1) ;
  }
  Serial.println("Connected to BQ27441!");
  
  // Uset lipo.setCapacity(BATTERY_CAPACITY) to set the design capacity
  // of your battery.
  lipo.setCapacity(BATTERY_CAPACITY);
}

void printBatteryStats()
{
  // Read battery stats from the BQ27441-G1A
  unsigned int soc = lipo.soc();  // Read state-of-charge (%)
  unsigned int volts = lipo.voltage(); // Read battery voltage (mV)
  int current = lipo.current(AVG); // Read average current (mA)
  unsigned int fullCapacity = lipo.capacity(FULL); // Read full capacity (mAh)
  unsigned int capacity = lipo.capacity(REMAIN); // Read remaining capacity (mAh)
  int power = lipo.power(); // Read average power draw (mW)
  int health = lipo.soh(); // Read state-of-health (%)

  // Now print out those values:
  String toPrint = String(soc) + "% | ";
  toPrint += String(volts) + " mV | ";
  toPrint += String(current) + " mA | ";
  toPrint += String(capacity) + " / ";
  toPrint += String(fullCapacity) + " mAh | ";
  toPrint += String(power) + " mW | ";
  toPrint += String(health) + "%";
  
  Serial.println(toPrint);

  // LCD Graphics
  tft.setTextColor(TFT_BLUE);
  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);
  tft.setTextColor(TFT_MAGENTA);
  tft.drawString("State of Chage:", 20, 30);
  tft.drawString("Battery Voltage:", 20, 55);
  tft.drawString("Average Current:", 20, 80);
  tft.drawString("Remain Capacity:", 20, 105);
  tft.drawString("Full Capacity:", 20, 130);
  tft.drawString("Average Power:", 20, 155);
  tft.drawString("State of Health:", 20, 180);
  
  // Data
  spr.createSprite(80, 170);
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(FF17);
  spr.setTextColor(TFT_WHITE);
  spr.drawString(String(soc)+" % ", 0, 0);
  spr.drawString(String(volts)+" mV ", 0, 25);
  spr.drawString(String(current)+" mA ", 0, 50);
  spr.drawString(String(capacity)+" mAh ", 0, 75);
  spr.drawString(String(fullCapacity)+" mAh ", 0, 100);
  spr.drawString(String(power)+" mW ", 0, 125);
  spr.drawString(String(health)+" % ", 0, 150);
  spr.pushSprite(170, 30);
  spr.deleteSprite();
}

void setup()
{
  Serial.begin(115200);
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
  tft.setFreeFont(FF17); 
  setupBQ27441();
  tft.setTextColor(TFT_GREEN);
  tft.setCursor((320 - tft.textWidth("Battery Initialised!"))/2, 120);
  tft.print("Battery Initialised!");
  delay(1000);
  tft.fillScreen(TFT_BLACK);
}

void loop() 
{
  printBatteryStats();
  delay(1000);
}
```

## **原理图在线查看器**

<div className="altium-ecad-viewer" data-project-src="https://http://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH_NEW.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## **资源**

- **[ZIP]** [Wio Terminal电池座原理图设计文件](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/WioTerminal_battry_650mAh.rar)

## **技术支持**


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
