---
description: Xadow 可穿戴套件适用于 Edison
title: Xadow 可穿戴套件适用于 Edison
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Wearable_Kit_For_Edison
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison02.png)

Xadow 可穿戴套件适用于 Edison，是一个完美的套件，用于制作基于 Intel Edison 的可穿戴设备。它包括一个名为 Xadow-Edison 的 Edison 扩展板和 8 个极小的模块，这些模块包括传感器、执行器、用户界面通信模块。通过连接灵活的 FFC，您可以快速制作一些有趣且酷炫的可穿戴设备。请注意，您需要自行准备一个 Intel Edison 和两根 USB 数据线。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Wearable-Kit-For-Intel%C2%AE-Edison-p-2428.html)

## 部件清单

<table>
  <tbody>
  <tr>
      <th> 部件 </th>
      <th> 数量 </th>
      <th> 部件 </th>
      <th> 数量 </th>
      </tr>
    <tr>
      <td> Xadow - Edison </td>
      <td> 1 </td>
      <td> Xadow - 三轴加速度计 </td>
      <td> 1 </td>
      </tr>
    <tr>
      <td> Xadow - Edison 编程器 </td>
      <td> 1 </td>
      <td> Xadow - 气压计 BMP 180 </td>
      <td> 1 </td>
      </tr>
    <tr>
      <td> Xadow - Edison SD </td>
      <td> 1 </td>
      <td> 电池 </td>
      <td> 1 </td>
      </tr>
    <tr>
      <td> Xadow - Q 触摸传感器 </td>
      <td> 1 </td>
      <td> 数字 RGB LED 柔性灯条 </td>
      <td> 1 </td>
      </tr>
    <tr>
      <td> Xadow - NFC </td>
      <td> 1 </td>
      <td> 白色电源线 </td>
      <td> 5 </td>
      </tr>
    <tr>
      <td> Xadow - 扩展板 </td>
      <td> 3 </td>
      <td> 红色电源线 </td>
      <td> 5 </td>
      </tr>
    <tr>
      <td> Xadow - 蜂鸣器 </td>
      <td> 1 </td>
      <td> 黄色电源线 </td>
      <td> 5 </td>
      </tr>
    <tr>
      <td> Xadow - 振动马达 </td>
      <td> 1 </td>
      <td> FFC 电缆包 </td>
      <td> 1 </td>
      </tr>
    <tr>
      <td> Xadow - OLED </td>
      <td> 1 </td>
      <td> 彩色打印教程 </td>
      <td> 1 </td>
      </tr>
    <tr>
      <td> NFC 标签 </td>
      <td> 3 </td>
      <td> </td>
      <td> </td>
      </tr>
      </tbody>
      </table>

## 入门指南

### 连接

注意未填充的角落，所有模块的未填充角都指向同一方向。Xadow 模块的双面可以通过 FFC 连接两个模块，因此 Xadow 可以像手表或项链一样级联其模块，非常适合可穿戴原型设计。

- 通过矩形连接器将 Intel Edison 插入 Xadow-Edison。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison03.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison08.png)

- 使用 FFC 连接 Edison-Programmer 板并插入两根 USB 数据线，Edison-Programmer 板上的小开关应调至 Device 侧。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison04.png)

- 使用 FFC 连接 Xadow 模块。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison07.png)

- 在上传程序后，拔掉 USB 数据线和编程器，插入 Li-Po 电池，使套件可以移动。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

### 开发环境

1. 安装 Edison Arduino IDE 和所需驱动程序。点击 [这里](https://communities.intel.com/docs/DOC-23147) 查看官方教程。

2. 下载示例代码

1) 点击 [这里](https://github.com/Seeed-Studio/Xadow_Edison_Demos) 从 GitHub 下载源代码。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison12.png)

2) 从压缩文件中提取示例代码。
打开 Arduino IDE，点击“文件” --&gt; “首选项”，查看草图位置项，应为“C:\Users\xxx\Documents\Arduino”，导航到此文件夹并将项目提取到子文件夹“libraries”。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison16.png)

3. IDE 设置

1) 打开 Arduino IDE。点击“工具” --&gt; “板”并选择 Intel® Edison。

2) 打开电脑“设备管理器”找到“Intel Edison Virtual Port(COMx)”，点击“工具” --&gt; “串口”选择 COMx。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison17.png)

4. 上传草图

点击“文件” --&gt; “示例”选择之前下载的示例代码。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison19.png)

### 示例

**制作 LED 灯条**

LED 灯条有 3 个引脚，要连接灯条和扩展板，您可以进行简单的焊接。连接 VCC 引脚、GND 引脚，并将信号引脚连接到扩展板的 MISO 引脚。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison20.png)

**准备 NFC 标签**

NFC 示例使用三个 NFC 标签作为钥匙来打开 LED 灯条，但首先您需要准备 NFC 标签，因为它们最初没有记录任何内容。因此，您需要使它们成为有用的标签。

**步骤 1**. 使用示例代码 FormatTag 格式化标签以便首次使用它们。
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison21.png)

!!!注意
    上传草图并打开串行监视器，当您看到 **Place an unformatted Mifare Classic tag on the reader.** 时，将一个标签放在天线板上。等待片刻，您会看到 **Success, tag formatted as NDEF.** 表示成功格式化，或者 **Format failed.** 表示标签可能已经被格式化过。

**步骤 2**. 打开示例 Cool_Light_WriteTag 并更改卡片记录 **WRITE_TAG_MESSAGE**。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison23.png)

**步骤 3**. 编译并上传代码。

**步骤 4**. 运行串口监视器，将 NFC 标签靠近天线，当串口监视器显示 **Success. Try reading this tag with your phone.** 时，一个有用的标签就已经制作完成了。重复步骤，更改 **WRITE_TAG_MESSAGE** 来写入其他标签。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison24.png)

---

**示例-01: Cool_Light**

**我们在这里实现了什么**

在这个示例中，我们使用 NFC 模块和 QTouch 模块来控制 RGB LED 灯带。QTouch 模块有 3 个按钮，通过触摸不同的按钮可以看到不同的灯光效果。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison27.jpg)

**上传代码**

**点击 File&gt;Examples&gt;Cool_Light。**

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison26.png)

**代码详情**

```
#include <Wire.h>
#include <PN532_I2C.h>
#include <PN532.h>
#include <NfcAdapter.h>
#include <TimerOne.h>
#include "Seeed_QTouch.h"
#include "Seeed_ws2812.h"

#define SIG_PIN 12   //LED 灯带信号引脚
#define LED_NUM 5    //LED 灯带灯的数量

//省略部分代码...

void setup() {
    strip.begin();
    nfc.begin();
    Serial.begin(115200);
    color_domain_init(LED_NUM);
    Timer1.initialize(150000);         // 初始化 Timer1
    Timer1.attachInterrupt(callback);  // 将 callback() 附加为定时器溢出中断
}
void callback()                      // 定时器 ISR，用于读取 QTouch 数字并改变 LED 表现
{
    int tn = QTouch.touchNum();        // QTouch 回调函数
    if( tn == 0 | tn == 1 | tn == 2 ) {
        colorChangeFromNumber(tn);
    }
}
void loop() {
    colorChangeFromString(getStringFromNFC());  // 从 NFC 读取字符串并改变 LED 颜色
    delay(500);
}
```

**结果**

1. 将 NFC 标签放到天线上以显示酷炫灯光。在这个示例中，你会看到 LED 灯带以三种模式发光：单色循环、流动色彩和彩虹循环。这三个标签中存储了不同的信息，放置不同的标签可以显示每种模式。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison28.jpg)

2. 对于 QTouch，通过触摸其中一个按钮，LED 灯带会显示单色红、绿或蓝。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison30.jpg)

3. 现在你可以断开 Edison-Programmer，并使用 Li-Po 电池供电。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison33.png)

---

**示例-02: GlowingThermometer**

**我们在这里实现了什么**

在这个示例中，我们使用气压计模块来监测温度、气压和海拔，这些信息会显示在 OLED 模块上。我们设置了一个安全温度范围 20 ℃ ~ 30 ℃，当温度超出安全范围时，振动器会震动，并在 OLED 上显示警告图片。当温度超过 30 ℃或低于 20 ℃时会触发警告。

现在打开示例 GlowingThermometer，编译并上传代码。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison31.jpg)

**上传代码**

点击 File&gt;Examples&gt;GrowingThermometer

**代码详情**

```
#include <Wire.h>
#include <SeeedOLED.h>
#include "Barometer.h"
#include <Seeed_ws2812.h>

#define LEDN 5
#define SIG_PIN 12

uint8_t color[LEDN];
uint8_t t[5] = {25, 26, 27, 28, 29}; //你可以设置 5 个温度步骤来追踪颜色
//气压计
float temperature;
float pressure;
float altitude;
float atm;

void setup()
{
    Serial.begin(115200);
    Wire.begin();
    SeeedOled.init();              //初始化 SEEED OLED 显示屏
    initOledTitle();               //初始化 OLED 标题
    myBarometer.init();            //气压计初始化
    vibratorInit();                //初始化振动器引脚
    strip.begin();                 //初始化并开始灯带驱动
    color_domain_init(20, 30, LEDN);   //此方法用于获取温度升高与颜色变化的关系
}

//省略部分代码...

void loop()
{
    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //获取温度，bmp085ReadUT 必须先调用
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());      //获取气压
    altitude = myBarometer.calcAltitude(pressure);
    atm = pressure / 101325;

    colorFollow();  //灯带随温度变化

    TempAlarm();    //监测温度并发出警告

    messagetoSerial();

    messagetoOled();

    delay(500);
}

//更多细节请查看下载的源码...
```

**结果**

1. 默认 OLED 显示。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison34.png)

2. 高温警告显示。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison32.jpg)

:::tip
你需要加热 Xadow-Barometer 模块以观察当温度超出安全范围时会发生什么。
:::

3. 随着温度升高，LED 灯逐个点亮，颜色从蓝色变为红色。

---

**示例-03: Edison-Pedometer**

**我们在这里实现了什么**

此示例展示了如何制作一个计步器，用于统计一个人的步数。它使用了 Xadow – Edison 板、Xadow – OLED 0.96”、Xadow – 三轴加速度计和 Xadow – 蜂鸣器。OLED 屏幕将显示步数计数，如果长时间未移动，蜂鸣器将发出警报。此外，当 Intel Edison 板连接到 Wi-Fi 网络时，您可以通过网页浏览器查看步数计数。

**上传代码**

1. 点击 File&gt;Examples&gt;Edison_Pedometer_with_OLED 并选择示例。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)

2. 将 `char ssid[] = STEST` 修改为您的网络名称，将 `char pass[] = 876543210` 修改为您的网络密码。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison36.png)

3. 点击上传图标。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison37.png)

**代码详情**

```
#include <Wire.h>
#include <SeeedOLED.h>
#include <Wire.h>
#include <ADXL345.h>
#include "pedometer.h"
#include <SPI.h>
#include <WiFi.h>
#include <TimerOne.h>

#define MINUTES_TO_ALARM  (60) // 如果在 MINUTES_TO_ALARM 分钟内未走足够步数，蜂鸣器将响 0.5 秒。
unsigned long curtime = 0;
unsigned long cursteps = 0;

int isWalking = 0;        // 如果在行走，isWalking=1。
int ipprinted = 0;        // 如果打印了本地 IP，ipprinted = 1。

Pedometer pedometer;
int stepIndex = 0;

char ssid[] = "STEST";           // 您的网络 SSID（名称）
char pass[] = "876543210";       // 您的网络密码
int keyIndex = 0;                // 您的网络密钥索引号（仅 WEP 需要）

int status = WL_IDLE_STATUS;
WiFiServer server(88);
int serverconnected = 0;

void setup() {
    Serial.begin(9600);           // 设置波特率为 9600bps
    // 在此处放置初始化代码，仅运行一次：
    buzzer_init();
    pedometer.init();
    Wire.begin();
    SeeedOled.init();                  // 初始化 SEEED OLED 显示屏
    SeeedOled.clearDisplay();          // 清屏并将起始位置设置为左上角
    SeeedOled.setNormalDisplay();      // 设置显示为正常模式（即非反转模式）
    SeeedOled.setPageMode();           // 设置寻址模式为页面模式
    WiFi_Init();

    SeeedOled.drawBitmap(pmlogo,384);
    printxybmp(3,1,5,24,WalkMan[stepIndex]);
    printnum(4,6,"0");

    curtime = millis();              // 获取当前时间
    cursteps = pedometer.stepCount;  // 获取当前步数

    Timer1.initialize(200000); // 设置一个长度为 100000 微秒的定时器（或 0.1 秒 - 或 10Hz => LED 每秒闪烁 5 次，5 个开关循环）
    Timer1.attachInterrupt( TimerISR ); // 在此处附加服务例程
}

void loop() {
    // 更新计步器步数
    StepsUpdate();

    // 如果 Wi-Fi 已连接且未行走，打印本地 IP。
    PrintLocalIP();

    // 如果 Wi-Fi 断开连接，则重新连接。
    if(WiFi.RSSI()==0){
        status = WL_IDLE_STATUS;
    }

    // 如果在 MINUTES_TO_ALARM 分钟内未走足够步数，蜂鸣器将响 0.5 秒。
    if((millis()-curtime > MINUTES_TO_ALARM * 60000) && (pedometer.stepCount - cursteps < MINUTES_TO_ALARM*60/2)){
        buzzer_on(500);
        curtime = millis();
        cursteps = pedometer.stepCount;
    }
}
```

**结果**

1. 摇动 Xadow-三轴加速度计，您将看到计步器计数。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison38.png)

2. 当计步器连接到 Wi-Fi 网络时，本地 IP 将显示在 OLED 屏幕上：

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison39.png)

3. 在连接到同一网络的设备上，打开网页浏览器，访问 OLED 或串口监视器上显示的 IP 地址，您可以看到步数计数。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison40.png)

4. 您还可以为 Xadow-Edison 添加一个 LiPo 电池（如下图所示）。

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

5. 现在有一个漂亮的手表外壳可用。您可以下载 [3D 模型文件](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zip) 并使用 3D 打印机打印。

以下是带手表外壳的效果：

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison42.jpg)

**提示**

1. 如果 Wi-Fi 已连接，本地 IP 将显示在 OLED 屏幕上。

2. 访问网络服务器时，需要添加端口号（例如 88），格式如下：192.168.168.157:88

## 资源

*   [Seeed 商店](https://www.seeedstudio.com/depot/)

*   [GitHub 上的源代码](https://github.com/Seeed-Studio/Xadow_Edison_Demos)

*   [Edison 计步器 3D 模型](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zipp)

*   [Intel® Edison 官方网站](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

*   [Edison 入门指南](https://communities.intel.com/docs/DOC-23147)

*   [Xadow 可穿戴设备](https://community.seeedstudio.com/wear/)



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