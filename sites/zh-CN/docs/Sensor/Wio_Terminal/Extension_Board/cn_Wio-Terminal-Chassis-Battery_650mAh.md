---
description: Wio Terminal Chassis Battery(650mAh)
title: Wio Terminal Chassis Battery(650mAh)
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Chassis-Battery_650mAh
sku: 103990463, 103990564
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

Wio Terminal Battery Chassis 是 [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 开发板的必备扩展板，它为 Wio Terminal 提供外部电源，增强其便携性和紧凑性。它具有 **650mAH 可充电锂聚合物电池、电池充电/放电状态 LED、4 个 Grove 模拟/数字端口、1 个 Grove I2C 端口和 1 个 Grove UART 端口，以及用于美观和保护的 ABS 外壳。** Wio Terminal Battery Chassis 背面还有相同的树莓派 40 针兼容 GPIO，可用于更多扩展！

新版本的 Wio Terminal Battery Chassis 增加了 **德州仪器的 [BQ27441-G1A](http://www.ti.com/product/BQ27441-G1)** - 用于锂聚合物 (LiPo) 电池的自校准、基于 I2C 的燃料计量器，可用于测量电池电压以估算其充电百分比和剩余容量！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## **特性**

- 内置 650mAh 可充电锂聚合物电池
- 电池充电/放电状态 LED
- 电池开/关按钮
- 内置 BQ27441-G1A 锂聚合物电池燃料计量器
- USB Type-C 充电
- 过流保护
- 打嗝模式/打嗝保护
- 4 x Grove 模拟/数字端口
- 1 x Grove I2C 端口
- 1 x Grove UART 端口
- 外壳内隐藏磁铁，可以吸附在白板上！

## **规格**

<table className="tg">
  <thead>
    <tr><th className="tg-pu0z">项目</th><th className="tg-pu0z">详细信息</th></tr>
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
      <td className="tg-0lax">最大：660mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">电池板模式</td>
      <td className="tg-0lax">绿色 LED：亮起表示板子正在充电。<br /><br />红色 LED：亮起表示 OTG（电池放电）启用。<br /><br />黄色 LED：亮起表示公接口输出/输入 5V。</td>
    </tr>
    <tr>
      <td className="tg-1wig">GPIO 输出</td>
      <td className="tg-0lax">最大电压：5.15V <br /><br />最大电流：380mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">涓流充电电流</td>
      <td className="tg-0lax">30mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Grove 接口</td>
      <td className="tg-0lax">Grove 模拟/数字 *4，Grove I2C* 1，Grove UART * 1</td>
    </tr>
  </tbody>
</table>

## **硬件概述**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png"/></div>

## **注意事项**

- 如果在板子处于充电模式时移除电池，板子将切换到故障模式，绿灯以 1Hz 的频率闪烁。

- 当电池板不使用时，请按下按钮进入睡眠模式，所有 LED 将关闭。

## **检测锂聚合物电池状态**

1. 访问 [SparkFun_BQ27441_Arduino_Library](https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library) 仓库，将整个仓库下载到本地驱动器。

2. 现在，可以将库安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择刚刚下载的 `SparkFun_BQ27441_Arduino_Library` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### **示例代码**

您可以使用以下代码从电池底座读取统计信息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif"/></div>

```cpp
#include <SparkFunBQ27441.h>
#include"TFT_eSPI.h"

TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // 精灵图
#define FF17 &FreeSans9pt7b

const unsigned int BATTERY_CAPACITY = 650; // 设置 Wio Terminal 电池容量

void setupBQ27441(void)
{
  // 使用 lipo.begin() 初始化 BQ27441-G1A 并确认它已连接并正在通信。
  if (!lipo.begin()) // begin() 如果通信成功将返回 true
  {
  // 如果通信失败，打印错误消息并永远循环。
    Serial.println("错误：无法与 BQ27441 通信。");
    Serial.println("  检查接线并重试。");
    Serial.println("  （电池必须插入电池保姆板！）");
    tft.setTextColor(TFT_RED);
    tft.setCursor((320 - tft.textWidth("电池未初始化！"))/2, 120);
    tft.print("电池未初始化！");
    while (1) ;
  }
  Serial.println("已连接到 BQ27441！");
  
  // 使用 lipo.setCapacity(BATTERY_CAPACITY) 设置电池的设计容量。
  lipo.setCapacity(BATTERY_CAPACITY);
}

void printBatteryStats()
{
  // 从 BQ27441-G1A 读取电池统计信息
  unsigned int soc = lipo.soc();  // 读取电量状态 (%)
  unsigned int volts = lipo.voltage(); // 读取电池电压 (mV)
  int current = lipo.current(AVG); // 读取平均电流 (mA)
  unsigned int fullCapacity = lipo.capacity(FULL); // 读取满容量 (mAh)
  unsigned int capacity = lipo.capacity(REMAIN); // 读取剩余容量 (mAh)
  int power = lipo.power(); // 读取平均功耗 (mW)
  int health = lipo.soh(); // 读取健康状态 (%)

  // 现在打印这些值：
  String toPrint = String(soc) + "% | ";
  toPrint += String(volts) + " mV | ";
  toPrint += String(current) + " mA | ";
  toPrint += String(capacity) + " / ";
  toPrint += String(fullCapacity) + " mAh | ";
  toPrint += String(power) + " mW | ";
  toPrint += String(health) + "%";
  
  Serial.println(toPrint);

  // LCD 图形
  tft.setTextColor(TFT_BLUE);
  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);
  tft.setTextColor(TFT_MAGENTA);
  tft.drawString("电量状态:", 20, 30);
  tft.drawString("电池电压:", 20, 55);
  tft.drawString("平均电流:", 20, 80);
  tft.drawString("剩余容量:", 20, 105);
  tft.drawString("满容量:", 20, 130);
  tft.drawString("平均功耗:", 20, 155);
  tft.drawString("健康状态:", 20, 180);
  
  // 数据
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
  tft.setCursor((320 - tft.textWidth("电池已初始化！"))/2, 120);
  tft.print("电池已初始化！");
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

- **[ZIP]** [Wio Terminal 电池底座原理图设计文件](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/WioTerminal_battry_650mAh.rar)

## **技术支持**


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>