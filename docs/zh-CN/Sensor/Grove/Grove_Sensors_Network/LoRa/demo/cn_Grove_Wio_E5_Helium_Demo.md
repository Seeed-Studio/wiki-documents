---
title: Grove - Wio-E5 Helium 演示
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Wio_E5_Helium_Demo
last_update:
  date: 08/30/2023
  author: Salman 
---

## 入门指南



Helium IOT 网络使用 LoRaWAN 协议为"物联网"设备提供互联网连接，是 Helium 生态系统中的原始子网络。世界各地的开发者和公司都依赖 Helium IOT 网络进行连接。

:::note
确保您在 helium 网络覆盖范围内。您可以在 [explorer.helium.com](https://explorer.helium.com/) 查找网络覆盖范围
:::

### 准备工作

这是一个演示，展示如何通过 Grove - Wio-E5 模块连接 Helium IoT 网络和 Seeeduino XIAO 模块。这些模块能够从环境中收集温度和湿度参数，并将它们发送回 TTN。Seeeduino Xiao 上闪烁的 LED 灯指示温度和湿度传感器连接到 TTN 云的状态。

:::caution
请按照此说明确保您使用的终端节点、网关和 Helium 配置之间频段的一致性。
此演示应用的频率计划适用于 **IN865**。
:::

### 所需硬件

| Seeeduino XIAO | Grove - Wio-E5 | Seeeduino XIAO 扩展板 | Grove - 温湿度传感器 (DHT11) |
|--------------|--------------|--------------|--------------|
|  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|   <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/11302009_preview-34.png" alt="pir" width={600} height="auto" /></p>| <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>|  <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/r/grove-temperature-humidity-sensor-dht11-preview.png" alt="pir" width={600} height="auto" /></p> |[立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即购买](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[立即购买](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

:::note
如果这是您第一次使用 Seeeduino XIAO，请参考 [Seeeduino XIAO 的 wiki](https://wiki.seeedstudio.com/cn/Seeeduino_Lotus/)。
如果这是您第一次使用 Arduino，[Arduino 官网](https://www.arduino.cc/) 是您开始 Arduino 之旅的绝佳资源。
:::

### 硬件连接

- **步骤 1.** 将 Wio-E5 模块直接连接到"UART"插槽。

- **步骤 2.** 将 DH11 插入"A0/D0"插座。

- **步骤 3.** 下载代码，请参考软件部分。


### Helium IoT 控制台准备

- **步骤 1.** 访问 [Helium Console](https://console.helium.com/welcome ) 网站，如果您有现有账户请登录。如果您没有现有账户，则必须使用其他公共控制台 LNS 提供商之一，如 [Metroscientific](https://console.meteoscientific.com/)。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Helium-login.png" alt="pir" width={500} height="auto" /></p> 

- **步骤 2.** 登录后，点击"Devices"来管理设备。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3.** 然后点击"Add New Device"

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/CreateaDevice01.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 4.** 在这里，**1) 添加新设备**，**2) 复制 Dev EUI**，**3) 复制 App EUI**，**4) 复制 App Key**，**5) 最后点击保存**。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Id01.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 5.** 现在您可以在"Devices"部分下看到设备。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device02.png" alt="pir" width="1000" height="auto"/></p>

现在，helium 控制台设置完成。我们可以转到软件部分，通过 helium LoRa 网络将数据上传到 helium 控制台。


### 软件准备

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
点击了解 [如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 的详细信息
:::

#### 下载库

- **步骤 1.** 安装 [u8g2 库](https://github.com/olikraus/U8g2_Arduino)

- **步骤 2.** 安装 [DHT 传感器库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

#### 软件代码

下载示例；将代码复制粘贴到 Arduino IDE 中，然后上传。

```cpp

/*
* Grove - Wio-E5 Helium Demo
*  Date: 30/08/2023
* Author: Salman Faris (Modified Seeed TTN Sketch)

*/


#include <Arduino.h>
#include <U8x8lib.h>
#include "DHT.h"

//# define DHTPIN 0 // what pin we're connected to

// Uncomment whatever type you're using!
#define DHTTYPE DHT11  // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

static int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...) {
  int ch;
  int num = 0;
  int index = 0;
  int startMillis = 0;
  va_list args;
  memset(recv_buf, 0, sizeof(recv_buf));
  va_start(args, p_cmd);
  Serial1.printf(p_cmd, args);
  Serial.printf(p_cmd, args);
  va_end(args);
  delay(200);
  startMillis = millis();

  if (p_ack == NULL) {
    return 0;
  }

  do {
    while (Serial1.available() > 0) {
      ch = Serial1.read();
      recv_buf[index++] = ch;
      Serial.print((char)ch);
      delay(2);
    }

    if (strstr(recv_buf, p_ack) != NULL) {
      return 1;
    }

  } while (millis() - startMillis < timeout_ms);
  return 0;
}

static void recv_prase(char *p_msg) {
  if (p_msg == NULL) {
    return;
  }
  char *p_start = NULL;
  int data = 0;
  int rssi = 0;
  int snr = 0;

  p_start = strstr(p_msg, "RX");
  if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data))) {
    Serial.println(data);
    u8x8.setCursor(2, 4);
    u8x8.print("led :");
    led = !!data;
    u8x8.print(led);
    if (led) {
      digitalWrite(LED_BUILTIN, LOW);
    } else {
      digitalWrite(LED_BUILTIN, HIGH);
    }
  }

  p_start = strstr(p_msg, "RSSI");
  if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi))) {
    u8x8.setCursor(0, 6);
    u8x8.print("                ");
    u8x8.setCursor(2, 6);
    u8x8.print("rssi:");
    u8x8.print(rssi);
  }
  p_start = strstr(p_msg, "SNR");
  if (p_start && (1 == sscanf(p_start, "SNR %d", &snr))) {
    u8x8.setCursor(0, 7);
    u8x8.print("                ");
    u8x8.setCursor(2, 7);
    u8x8.print("snr :");
    u8x8.print(snr);
  }
}

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);

  Serial1.begin(9600);
  Serial.print("E5 LORAWAN TEST\r\n");
  u8x8.setCursor(0, 0);

  if (at_send_check_response("+AT: OK", 100, "AT\r\n")) {
    is_exist = true;
    at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your DevEui
    at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your AppEui
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your AppKey
    at_send_check_response("+ID: DevAddr", 1000, "AT+ID=DevAddr\r\n"); 
    at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: IN865", 1000, "AT+DR=IN865\r\n");  // Change FREQ as per your location
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
    delay(200);
    u8x8.setCursor(5, 0);
    u8x8.print("LoRaWAN");
    is_join = true;
  } else {
    is_exist = false;
    Serial.print("No E5 module found.\r\n");
    u8x8.setCursor(0, 1);
    u8x8.print("unfound E5 !");
  }

  dht.begin();

  u8x8.setCursor(0, 2);
  u8x8.setCursor(2, 2);
  u8x8.print("temp:");

  u8x8.setCursor(2, 3);
  u8x8.print("humi:");

  u8x8.setCursor(2, 4);
  u8x8.print("led :");
  u8x8.print(led);
}

void loop(void) {

  temp = dht.readTemperature();
  humi = dht.readHumidity();

  Serial.print("Humidity: ");
  Serial.print(humi);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.println(" *C");

  u8x8.setCursor(0, 2);
  u8x8.print("      ");
  u8x8.setCursor(2, 2);
  u8x8.print("temp:");
  u8x8.print(temp);
  u8x8.setCursor(2, 3);
  u8x8.print("humi:");
  u8x8.print(humi);

  if (is_exist) {
    int ret = 0;
    if (is_join) {

      ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
      if (ret) {
        is_join = false;
      } else {
        at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
        Serial.print("JOIN failed!\r\n\r\n");
        delay(5000);
      }
    } else {
      char cmd[128];
      sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
      ret = at_send_check_response("Done", 5000, cmd);
      if (ret) {
        recv_prase(recv_buf);
      } else {
        Serial.print("Send failed!\r\n\r\n");
      }
      delay(5000);
    }
  } else {
    delay(1000);
  }
}

```

确保在上传代码之前替换 **DevEui**、**AppEui** 和 **AppKey**。

```cpp
at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"xxxxxxxxxxxxx\"\r\n"); // 将 'xxxxxxxxxxxxx' 替换为您的 DevEui
at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"xxxxxxxxxxxxx\"\r\n"); // 将 'xxxxxxxxxxxxx' 替换为您的 AppEui
at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"xxxxxxxxxxxxx\"\r\n"); // 将 'xxxxxxxxxxxxx' 替换为您的 AppKey
```


- **步骤 8**：按照之前的说明将 Arduino 代码上传到 Seeeduino XIAO，并打开串口监视器查看以下输出

```
+ID: DevAddr, 26:0B:20:25
+ID: DevEui, 60:81:F9:A4:84:XX:XX:XX
+ID: AppEui, 60:81:F9:A6:90:XX:XX:XX
AT+MODE=LWOTAA
+MODE: LWOTAA
AT+DR=IN865
+DR: IN865
AT+CH=NUM,0-2
+CH: NUM, 0-2
AT+CLASS=A
+CLASS: A
AT+PORT=8
+PORT: 8
Humidity: 43.00 %	Temperature: 23.00 *C
AT+JOIN
+JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 326548 DevAddr 48:00:00:0E
+JOIN: Done
Humidity: 29.00 %	Temperature: 32.00 *C
AT+CMSGHEX="0020001D"
+CMSGHEX: Start
+CMSGHEX: Wait ACK
+CMSGHEX: ACK Received
+CMSGHEX: RXWIN1, RSSI -30, SNR 6.0
+CMSGHEX: Done
Humidity: 8.00 %	Temperature: 30.00 *C
AT+CMSGHEX="001E0008"
+CMSGHEX: Start
```

一旦您看到类似 **+JOIN: Network joined** 的消息，请打开 **"REAL TIME PACKETS"** 部分查看上行链路信息。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/realtimepkts.png" alt="pir" width={1000} height="auto" /></p> 

您还可以在 **"Event Log"** 部分查看事件日志。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/eventlog.png" alt="pir" width={1000} height="auto" /></p> 

如果我们打开调试窗口，我们可以看到实时数据载荷和其他信息。

<p style={{textAlign: 'center'}}><img src="https://github.com/salmanfarisvp/resource/blob/main/Images/LoRa/Helium/Networksetup/payload.png?raw=true" alt="pir" width={1000} height="auto" /></p> 

## 资源

数据手册：

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 数据手册和规格</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT 命令规范</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC 数据手册</a></p>

认证：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 认证 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 认证 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 认证 -DTS</a></p>

相关 SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL 系列的 STM32Cube MCU 包</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## 技术支持与产品讨论


感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>