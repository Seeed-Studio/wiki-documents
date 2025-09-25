---
description: NFC_Shield_V2.0
title: NFC Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/NFC_Shield_V2.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<table align="center">
  <tbody>
    <tr>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_front.png" alt="pir" width={200} height="auto" /></p>
        </td>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_back.png" alt="pir" width={200} height="auto" /></p>
        </td>
    </tr>
  </tbody>
</table>

NFC（近场通信）是一种广泛使用的技术。NFC的一些应用包括无线门禁系统（例如无钥匙门锁）和移动设备支付（例如通过手机应用程序接收付款信息的商店收银机）。

NFC Shield 配备了一个收发器模块 PN532，它处理 13.56MHz 的无线通信，这意味着您可以使用此扩展板读写 13.56MHz 标签，或在扩展板和智能手机之间实现点对点（P2P）数据交换。

对于这个新版本的扩展板，我们创建了一个独立的 PCB 天线区域，这使您能够更容易地将 NFC 接口延伸到主电路外壳之外。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/NFC-Shield-V2.0-p-1370.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

应用创意
-----------------

如果您想使用 NFC Shield V2.0 制作一些精彩的项目，这里有一些项目供参考。

### NFC Shield 演示

***纸人，一个与 Android 交互的有趣物体***

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Seeed-recipe-paper_man.jpg" alt="pir" width={600} height="auto" /></p>

[立即制作！](https://www.seeedstudio.com/recipe/40-paper-man-an-interesting-object-to-interact-with-android.html)

[***更多 NFC Shield V2.0 精彩项目***](https://www.seeedstudio.com/recipe/index.php?query=NFC+Shield)

特性
--------

-   使用 ICSP 接头进行 SPI 通信。这意味着该扩展板适用于以下 Arduino 开发板：Uno、Mega、Leonardo
-   13.56MHz 无线 NFC 通信
-   SPI 协议 - 节省引脚的接口，仅需要 4 个引脚
-   输入电压：来自 Arduino 5V 引脚的 5V
-   典型电流：100mA
-   最大有效范围 5cm
-   支持 P2P 通信
-   支持 ISO14443 Type A 和 Type B 协议

硬件概述
-----------------

NFC 扩展板的引脚和其他端子描述如下。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Pn532-nfc-shield-pin-description.png" alt="pir" width={600} height="auto" /></p>

**NFC 扩展板接口**

-   D10 和 D9 用于 SPI 片选（CS/SS）。默认连接 D10，要连接 D9 需要焊接 SS 焊盘到 D9 焊盘，并刮掉 SS 和 D10 之间的连接。
-   D2 可用于接收扩展板的中断请求（IRQ）引脚信号。中断默认未连接，需要焊接"D2/INT0"和"IRQ"焊盘。
-   扩展板直接从 Arduino 的 ICSP 接头获取其 SPI 接口（SPI MOSI、MISO 和 SCK 引脚），这意味着扩展板适用于以下 Arduino：Uno、Mega 和 Leonardo。
-   ANT1 端子是 NFC 天线（扩展板附带）的连接位置。
-   扩展板由 Arduino 板的 5V 供电。

NFC 扩展板的天线包含在扩展板中，是一个通过电缆连接到扩展板的独立 PCB 模块。天线是用于接收和发送信息的区域。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_Antanna_28x30.5.jpg" alt="pir" width={600} height="auto" /></p>

**NFC 天线 PCB 连接**

NFC Shield 设置
----------------

### 硬件安装

1.  将 NFC 天线连接到扩展板。
2.  将 NFC Shield 堆叠在您的 Arduino 开发板上，并使用 USB 电缆将板连接到 PC。

### 软件库安装

- **步骤 1.**  下载 [Seeed Arduino NFC 库](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)。

- **步骤 2.**  参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装 **Seeed Arduino NFC** 库。

- **步骤 3.**  通过路径打开"WriteTag"代码：**File --> Examples --> WriteTag**。

- **步骤 4.**  修改代码如下以启用 SPI 通信。

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}
```

**Arduino 可用库菜单**

NFC Shield 示例/应用
--------------------------------

### 示例：NFC WriteTag

此示例将向您展示如何使用 NFC shield 扫描 NFC 标签并显示其信息/数据。

在 Arduino IDE 中复制、粘贴，然后将下面的代码上传到您的开发板。

#### 代码

```cpp
#include <NfcAdapter.h>
#include <PN532/PN532/PN532.h>
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}

void loop() {
    SERIAL.println("\nPlace a formatted Mifare Classic or Ultralight NFC tag on the reader.");
    if (nfc.tagPresent()) {
        NdefMessage message = NdefMessage();
        message.addUriRecord("http://arduino.cc");

        bool success = nfc.write(message);
        if (success) {
            SERIAL.println("Success. Try reading this tag with your phone.");
        } else {
            SERIAL.println("Write failed.");
        }
    }
    delay(5000);
}
```

要测试代码：

1.  打开 Arduino 串口监视器窗口
2.  将波特率设置为 115200
3.  将 NFC 标签放在 NFC 天线区域上方
4.  NFC 扩展板将扫描标签，您应该能够在串口监视器窗口中看到 NFC 标签的 UID、标签类型和消息（如果可用）。请参见下图。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Nfc-pn532-output-example-1.png" alt="pir" width={600} height="auto" /></p>

<!-- **Example #1 serial communication window output when scanning an NFC tag.** -->

<!--  ### Example #2: NFC(keyless) Door Lock

这个例子将向你展示如何使用NFC标签作为钥匙来解锁门或锁。门/锁的机制将留给你的想象，我们只会涉及代码中的NFC部分。

1. 执行上面的示例 #1：NFC 标签扫描，以获取你的 NFC 标签的 UID。
2. 可选 步骤 - 如下图/示意图所示，将一个绿色 LED 连接到引脚 3。我们将使用这个 LED 来表示密钥匹配成功。
3. 可选 步骤 - 如下图/示意图所示，将一个红色 LED 连接到引脚 4。我们将使用这个 LED 来表示密钥不匹配。
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm.PNG" alt="pir" width={600} height="auto" /></p>

    **NFC lock circuit**
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm-real.png" alt="pir" width={600} height="auto" /></p>

    **NFC lock circuit**

4.  在Arduino IDE中创建一个新的草图,并复制、粘贴以下代码并上传到你的Arduino板上,将myUID字符串常量替换为你在示例#1中获得的标签UID。

#### 代码

```cpp
	#if 1 // 使用 SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // 使用硬件串口

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // 使用软件串口

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //使用 I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    String const myUID = "1B B3 C6 EF"; // 将此 UID 替换为您的 NFC 标签的 UID
    int const greenLedPin = 3; // 用于正确密钥通知的绿色 LED
    int const redLedPin = 4; // 用于错误密钥通知的红色 LED

    void setup(void) {
        Serial.begin(115200); // 启动串口通信
        Serial.println("NDEF Reader");
        nfc.begin(); // 开始 NFC 通信

        // 将 LED 引脚设置为输出
        pinMode(greenLedPin,OUTPUT);
        pinMode(redLedPin,OUTPUT);

        // 关闭 LED
        digitalWrite(greenLedPin,LOW);
        digitalWrite(redLedPin,LOW);
    }

    void loop(void) {

        Serial.println("Scanning...");
        if (nfc.tagPresent()) // 检查天线区域是否存在 NFC 标签
        {
            NfcTag tag = nfc.read(); // 读取 NFC 标签
            String scannedUID = tag.getUidString(); // 获取 NFC 标签的 UID

            if( myUID.compareTo(scannedUID) == 0) // 将 NFC 标签的 UID 与正确标签的 UID 进行比较（当 compareTo 返回 0 时表示匹配）
            {
              // 使用了正确的 NFC 标签
              Serial.println("Correct Key");
              // 闪烁绿色 LED 并确保红色 LED 关闭
              digitalWrite(greenLedPin,HIGH);
              digitalWrite(redLedPin,LOW);

              delay(500);
              digitalWrite(greenLedPin,LOW);
              delay(500);
              digitalWrite(greenLedPin,HIGH);
              delay(500);
              digitalWrite(greenLedPin,LOW);
              // 在此处放置您的代码以触发解锁机制（例如电机、传感器）
            }else{
              // 使用了错误的 NFC 标签
              Serial.println("Incorrect key");
              // 闪烁红色 LED 并确保绿色 LED 关闭
              digitalWrite(greenLedPin,LOW);
              digitalWrite(redLedPin,HIGH);

              delay(500);
              digitalWrite(redLedPin,LOW);
              delay(500);
              digitalWrite(redLedPin,HIGH);
              delay(500);
              digitalWrite(redLedPin,LOW);
              // 不要解锁！使用了错误的 NFC 标签。
              // 在此处放置您的代码以触发警报（例如蜂鸣器、扬声器）或执行其他操作
            }
        }
        delay(2000);
    }
```

测试代码/应用程序：

1.  打开Arduino的串口监视器窗口
2.  将带有正确密钥的NFC标签放在天线区域上。
3.  绿色LED应该亮起，串口窗口应该打印"Correct Key"
4.  现在将不同的NFC标签放在天线区域上
5.  红色LED应该亮起，串口窗口应该打印"Incorrect Key"
 -->
<!-- ### 示例 #3：如何使用中断引脚（示例 #2：重新审视）

虽然上面示例 #2 中的代码能够满足我们的需求，但有一种更优雅的方法来处理NFC标签检测。在这个示例中，我们将向您展示如何利用NFC屏蔽板中的中断引脚，这样我们就不需要轮询屏蔽板（询问"是否有标签存在？"），而是等待屏蔽板告诉Arduino有标签可供读取。为什么要这样做？原因有很多，中断是一个完全不同的话题，但可能说服您的一个原因是，您的项目/电路将节省电池电量，因为我们不会持续触发屏蔽板电路。

#### 硬件修改

NFC屏蔽板的中断引脚（IRQ）与Arduino的数字引脚2（D2）断开连接，要将IRQ和D2引脚连接在一起，请焊接屏蔽板上标有"D2/INT0 IRQ"的焊盘。

#### 代码

将以下代码上传到您的Arduino开发板：

测试代码/应用程序：

1.  如果需要，按照上面示例 #2 所示连接LED。
2.  打开Arduino的串口监视器窗口
3.  将带有正确密钥的NFC标签放在天线区域上。
4.  绿色LED应该亮起，串口窗口应该打印"Correct Key"
5.  现在将不同的NFC标签放在天线区域上
6.  红色LED应该亮起，串口窗口应该打印"Incorrect Key"

我们测试此代码的串口窗口如下所示，您的应该类似。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-3-nfc-pn532-shield-interrupt-example.png" alt="pir" width={600} height="auto" /></p>

**示例3的串口通信窗口输出。**

<!-- ### 示例 #4：向标签写入NDEF消息

NFC标签能够存储数据，数据量取决于每个标签。在这个示例中，我们将在标签上存储两个字符串/消息，然后您可以使用*示例 #6：从标签读取NDEF消息*中的代码读取此消息。

将以下代码上传到您的Arduino开发板。


:::note
如果您的NFC标签格式不正确（串口通信窗口将显示"Message write failed"），您需要查看是否可以使用以下代码格式化您的标签
:::


#### 代码

```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm
    }

    void loop(void)
    {
      Serial.println("Place a formatted Mifare Classic NFC tag on the reader.");
      if(nfc.tagPresent())
      {
        NdefMessage message = NdefMessage();
        message.addUriRecord("Hello, world!");
        message.addUriRecord("How are you today?");

        bool success = nfc.write(message);
        if(success)
        {
          Serial.println("The message was successfully written to the tag.");Ho
        }else{
          Serial.println("Message write failed.");
        }
      }

      delay(5000);
    }
```

要测试上面的代码：

1.  打开 Arduino 串口通信窗口
2.  将 NFC 标签放在 NFC 扩展板天线区域上方，等待成功或失败消息出现，如下图所示。
3.  一旦显示成功消息，立即将 NFC 标签从天线区域移开，以防止重写。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-4-write-ndef-message-to-tag.png" alt="pir" width={600} height="auto" /></p>

**NDEF 消息写入卡片示例的串口通信窗口。**

<!-- ### 示例 #5：将标签格式化为 NDEF

您全新的 NFC 标签最初可能没有 NDEF 格式。要将标签格式化为 NDEF，请将以下代码上传到您的 Arduino 开发板：

#### 代码

```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // 开始串口通信
        Serial.println("NDEF Reader");
        nfc.begin(); // 开始 NFC 通信
    }

    void loop(void)
    {
        Serial.println("Place an unformatted Mifare Classic tag on the reader.");
        if (nfc.tagPresent()) {

            bool success = nfc.format();
            if (success) {
              Serial.println("Success, tag formatted as NDEF.");
            } else {
              Serial.println("Format failed.");
            }

        }
        delay(5000);
    }
```

测试/运行代码：

1.  打开 Arduino 串口通信窗口。
2.  将您想要格式化的 NFC 标签放在 NFC 扩展板天线区域上方。
3.  等待成功或失败消息出现，如下图所示。
4.  将 NFC 标签从天线区域移开，以防止重新格式化。

<div class="admonition note">
<p class="admonition-title">注意</p>
如果您的标签格式化失败，请重试。如果仍然失败，说明您的标签无法格式化为 NDEF。
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-5-format-nfc-tag-as-ndef.png" alt="pir" width={600} height="auto" /></p>

**将 NFC 标签格式化为 NDEF 时的串口通信窗口输出。**
 -->
<!-- ### 示例 #6：从标签读取 NDEF 消息

正如您在上面的示例中看到的，NFC 扩展板能够向 NFC 标签写入消息。NFC 也能够从标签读取 NDEF 消息，在这个示例中我们将向您展示如何操作。

#### 代码

将以下代码上传到您的 Arduino 开发板。

```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // 启动串口通信
        Serial.println("NDEF Reader");
        nfc.begin(); // 开始 NFC 通信
    }

    void loop(void)
    {
      Serial.println("\nScan an NFC tag\n");
      if (nfc.tagPresent()) // 执行 NFC 扫描以查看是否存在 NFC 标签
      {
          NfcTag tag = nfc.read(); // 读取 NFC 标签
          if(tag.hasNdefMessage())
          {
            NdefMessage message = tag.getNdefMessage();
            for(int i=0;i<message.getRecordCount();i++)
            {
              NdefRecord record = message.getRecord(i);
              int payloadLength = record.getPayloadLength();
              byte payload[payloadLength];
              record.getPayload(payload);
              Serial.write(payload,payloadLength);
            }
          }
      }
      delay(500); // 等待半秒（500毫秒）再次扫描（您可以增加或减少等待时间）
    }
```

测试上述代码：

1. 打开 Arduino 串口通信窗口
2. 将带有 NDEF 消息的 NFC 标签放在 NFC 扩展板天线区域上方。
3. 标签上写入的 NDEF 消息应该会显示，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-6-read-ndef-message.png" alt="pir" width={600} height="auto" /></p>

**NDEF 消息读取的串口通信窗口输出**
 -->
<!-- ### 示例 #7：如何将片选引脚从 D10 更改为 D9

#### 硬件修改

1. 刮掉扩展板上标有"SS"和"D10"的焊盘之间的连接
2. 连接/焊接扩展板上的"SS"和"D9"焊盘。

然后您可以使用上述示例中的相同代码，但将 PN532 接口的引脚 10 改为引脚 9：

#### 代码

    PN532_SPI interface(SPI, 9); // 为扩展板创建一个 SPI 接口，SPI CS 端子在数字引脚 9
 -->
<!-- ### 示例 #8：在一个 Arduino 板上使用两个 NFC 扩展板

#### 硬件修改

1. 在两个扩展板中的一个上执行示例 #7 中描述的硬件修改。
2. 将两个扩展板都堆叠在 Arduino 板上。

现在您可以创建两个独立的 NFC 对象，每个扩展板一个，如下所示：

#### 代码

```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi1(SPI, 10); //为扩展板创建一个 SPI 接口，SPI CS 端子在数字引脚 10
	NfcAdapter nfc1 = NfcAdapter(pn532spi1); 为扩展板一创建一个 NFC 适配器对象
	PN532_SPI pn532spi2(SPI, 9); //为扩展板创建一个 SPI 接口，SPI CS 端子在数字引脚 9
	NfcAdapter nfc2 = NfcAdapter(pn532spi2); 为扩展板二创建一个 NFC 适配器对象
	
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

```

-->

## 常见问题

**Q1：电缆的长度是多少？如果我想要更长的电缆，可以多长？**

A1：我们与 NFC 扩展板一起销售的电缆长度为 12cm。如果您想要更长的电缆，请不要超过 15cm，并使用 IPX/U.FL 连接器。

**Q2：NFC Shield V2.0（SKU：113030001）可以添加两个或更多天线吗？**

A2：NFC 扩展板 v2 基于 PN532 芯片。请注意，该设计仅支持一个天线。


## NFC Shield v2.0 Eagle 文件原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## NFC Shield v2.1 Eagle 文件原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


资源
---------

- [NFC Shield v2.0 原理图](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_Schematic.pdf)
- [NFC Shield v2.0 Eagle 文件](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip)
- [NFC Shield v2.1 原理图](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1.pdf)
- [NFC Shield v2.1 Eagle 文件](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip)
- [PN532 数据手册](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/PN532.pdf)
- [NFC Shield 常见问题](http://support.seeedstudio.com/knowledgebase/articles/462025-nfc-shield-sku-sld01097p)
- [Seeed Arduino NFC 库](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)
- [PN532 库](https://github.com/Seeed-Studio/PN532)aaa

## 项目

**纸人** 通过 NFC 技术与您的 Android 设备通信的有趣方式。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/xiaobo__/paper-man-0a6833/embed" width={350} />


**NFC 卡控制遥控车** 挑战您的协调能力：构建您自己的 NFC 控制汽车

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/litliao/nfc-card-controlled-remote-car-af27c9/embed" width={350} />


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/NFC_Shield_V2.0 -->

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