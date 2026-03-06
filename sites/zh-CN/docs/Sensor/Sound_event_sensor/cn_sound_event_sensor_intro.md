---
description: 这是一款紧凑的边缘音频板，可在本地实时检测婴儿哭声、玻璃破碎声、枪声、报警声和打鼾声，并将所有数据保存在本地以保护隐私。专为与 XIAO 系列实现无缝 ESPHome 和 Home Assistant 集成而设计，非常适合智能监控和自动化。
title: 声音事件检测模块快速上手
keywords:
  - Sound Event Detection Module
  - 声音物联网
image: https://files.seeedstudio.com/wiki/sound_event_detection/sound_event_detection_img_1.png
slug: /sound_event_detection_module
sku: 100049596
last_update:
  date: 3/2/2026
  author: Kasun Thushara
createdAt: '2026-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/sound_event_detection_module/
---

## 介绍

这是一款紧凑的边缘音频板，具备实时声音检测能力，并对本地数据提供强有力的隐私保护。它可以检测五种异常声音事件——婴儿哭声、玻璃破碎声、枪声、T3/T4 报警声以及打鼾声，从而实现即时响应和可靠的早期预警。该模块为原生 ESPHome 集成而设计，并可与 XIAO 系列在 Home Assistant 中实现无缝兼容，非常适合用于家庭安防监控或响应式自动化触发。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/sound_event_detection_img_1.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sound-Event-Detection-Module-D1-p-6652.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 规格参数

| 特性 | 描述 |
|--------|-------------|
| 核心芯片 | XMOS XU316-1024-QF60BC24 |
| 支持的事件 | 婴儿哭声 / 玻璃破碎 / 枪声 / 烟雾报警 & 一氧化碳报警（T3/T4）/ 打鼾 |
| 数字麦克风 | 高性能数字麦克风 × 1 |
| 灵敏度 | -26 dBFS |
| 声学过载点 | 120 dBL |
| 信噪比 | 64 dBA |
| 电源 | USB 5V，外部 5V |
| 尺寸 | 40 × 20 mm |
| 工作温度 | 0℃ – 65℃ |

## 硬件概览与尺寸

**正面视图**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/front.png" alt="pir" width={400} height="auto" /></p>

**背面视图**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/back.png" alt="pir" width={400} height="auto" /></p>

## USB 使用

该设备可以在独立模式下运行，并支持通过 USB 接口使用 AT 指令进行即插即用通信。

首先，使用 USB Type-C 转 USB Type-A 线缆将设备连接到电脑。

- **步骤 1** ：接着，打开 **PuTTY** 或任意其他串口终端软件。如果你尚未安装，可以通过以下[链接](https://putty.org/index.html)下载 PuTTY：

- **步骤 2** ：打开串口终端后，选择**正确的 COM 端口**，并将波特率设置为 **115200**。连接成功后，你就可以通过 USB 接口与设备交互。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/putty.png" alt="pir" width={600} height="auto" /></p>

由于设备会持续监听声音事件，你可以在设备附近制造受支持的声音事件来进行测试。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/putty_2.png" alt="pir" width={600} height="auto" /></p>

此外，你还可以使用 AT 指令调整设备参数。下面是一些可用于与设备交互的指令。

| 指令 | 描述 | 示例 |
|---|---|---|
| `AT+GETDETECT` | 获取当前启用的检测类型（1–5 种类型）。 | `AT+GETDETECT` → `+GETDETECT:baby_cry,glass_break` |
| `AT+SETDETECT=<types>` | 设置要检测的事件类型（逗号分隔，最多 5 种）。 | `AT+SETDETECT=baby_cry,snore` |
| `AT+GETEVENTTHRESHOLD=<type>` | 获取指定事件的置信度阈值。 | `AT+GETEVENTTHRESHOLD=baby_cry` → `+GETEVENTTHRESHOLD:baby_cry,70` |
| `AT+SETEVENTTHRESHOLD=<type>,<val>` | 设置指定事件的置信度阈值。 | `AT+SETEVENTTHRESHOLD=baby_cry,75` |
| `AT+GETSUPPORTEDLIST` | 列出设备支持的所有事件类型。 | `AT+GETSUPPORTEDLIST` → `+GETSUPPORTEDLIST:doorbell,glass_break,baby_cry,...` |
| `AT+SETOUTPUTTYPE=<type>` | 设置在检测到事件时输出的内容。 | `AT+SETOUTPUTTYPE=highest_confidence` |
| `AT+GETINTMODE` | 获取当前中断模式。 | `AT+GETINTMODE` → `+GETINTMODE:single` |
| `AT+SETINTMODE=<mode>` | 设置中断工作模式。 | `AT+SETINTMODE=continuous` |
| `AT+RESETINT` | 重置中断状态并将 INT_N 引脚拉高。 | `AT+RESETINT` |
| `AT+SAVECONFIG` | 保存当前配置，使其在重启后仍然生效。 | `AT+SAVECONFIG` |
| `AT+GETFWVERSION` | 获取固件版本字符串。 | `AT+GETFWVERSION` → `+GETFWVERSION:1.0.2` |
| `AT+RESET` | 恢复默认设置并重启设备（清除所有自定义配置）。 | `AT+RESET` |


当检测到事件时，设备会自动发送：

```
+EVENT: <event_id>,<confidence>
```

**示例：** `+EVENT: 1,87` → 事件 ID 1（`baby_cry`），置信度 87%

---

 `AT+SETOUTPUTTYPE` 取值

| 值 | 行为 |
|---|---|
| `highest_confidence` | 仅上报单个置信度最高的事件 |
| `all_events` | 每个检测周期上报所有检测到的事件 |

 `AT+SETINTMODE` 取值

| 值 | 行为 |
|---|---|
| `single` | INT_N 触发一次后，需要通过 `AT+RESETINT` 重置 |
| `continuous` | 在检测到事件期间，INT_N 持续触发 |



## Arduino 使用 

### 插接 XIAO

该设备支持 XIAO 模块，并可连接到板上的任意可用 UART 引脚。它兼容 ESP32S3、ESP32C6 和 ESP32C3 模块，因此你只需在代码中相应修改 RX 和 TX 引脚定义。请按照图片所示的方向插入设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/with_esp.jpg" alt="pir" width={800} height="auto" /></p>

###  下载库文件

- 前往 GitHub 仓库 [Link](https://github.com/Seeed-Projects/AudioEventSensor_Library)
- 点击绿色的 "Code" 按钮
- 选择 "Download ZIP"
- 将文件（例如 AudioEventSensor-main.zip）保存到你的电脑

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/library_download.png" alt="pir" width={800} height="auto" /></p>

### 在 Arduino IDE 中安装库

#### 使用 Arduino IDE（推荐）

- 打开 Arduino IDE
- 依次点击 Sketch → Include Library → Add .ZIP Library...
- 找到你下载的 ZIP 文件
- 点击 "Open" 完成安装

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/arduino_add_library.png" alt="pir" width={800} height="auto" /></p>

### 验证安装

依次点击 File → Examples → AudioEventSensor 查看示例程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/verify_arduino.png" alt="pir" width={800} height="auto" /></p>

### 修改 UART 引脚

根据你所使用的 XIAO 开发板，需要在代码中修改 UART 引脚定义。在本示例中，我们使用的是 XIAO ESP32S3。

```c
#define UART1_TX 43
#define UART1_RX 44
```

## 基本用法

在你将程序烧录到 ESP32 之后，此代码会通过 UART 初始化音频事件传感器，并将其配置为检测特定声音事件，例如枪声和玻璃破碎声。在 `setup` 过程中，它会重置设备、读取固件版本、获取支持的声音事件列表，并为每个选定事件设置检测阈值。随后会保存配置，使设置在重启后仍然有效。在主循环中，程序会持续监听检测到的声音事件，并实时将其打印到串口监视器。这使系统能够作为异常声学事件的早期预警和监控解决方案。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/basic_usage.png" alt="pir" width={800} height="auto" /></p>

## 进阶：邮件通知 

- 首先，你需要创建一个应用专用密码。请参考此[指南](https://support.google.com/accounts/answer/185833?hl=en)
- 接着，下载并安装所需的支持库。从 Arduino Library Manager 中安装 ESP Mail Client 库。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/email_client.png" alt="pir" width={800} height="auto" /></p>

### 代码

<details>
<summary>Email Ino</summary>

```c
#include <WiFi.h>
#include <ESP_Mail_Client.h>
#include <AudioEventSensor.h>

// WiFi credentials
#define WIFI_SSID "WIFI-SSID"
#define WIFI_PASSWORD "PASSWORD"

// Email credentials
#define SENDER_EMAIL "xyz@gmail.com"
#define SENDER_PASSWORD "abcd efgh ijkh xvyz"
#define RECIPIENT_EMAIL "abc@gmail.com"

#define SMTP_HOST "smtp.gmail.com"
#define SMTP_PORT 587

// UART pins for audio sensor
#define UART1_TX 43
#define UART1_RX 44

// Cooldown period in milliseconds (30 seconds)
#define EVENT_COOLDOWN_MS 30000

// Event tracking structure
struct EventTracker {
  String eventType;
  unsigned long lastTriggerTime;
  int detectionCount;
};

// Track multiple event types
EventTracker events[] = {
  {"baby_cry", 0, 0},
  {"glass_break", 0, 0},
  {"gunshot", 0, 0},
  {"snore", 0, 0},
  {"T3", 0, 0},
  {"T4", 0, 0}
};
const int EVENT_COUNT = 6;

SMTPSession smtp;
AudioEventSensor audio(Serial1);

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial1.begin(115200, SERIAL_8N1, UART1_RX, UART1_TX);
  audio.begin(115200);

  Serial.println("=================================");
  Serial.println("Audio Event Email Alert System");
  Serial.println("=================================\n");

  // Connect to WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  // Initialize audio sensor
  Serial.println("Initializing audio sensor...");
  delay(2000);

  audio.resetDevice();
  delay(500);

  // Get firmware version
  String firmwareVersion;
  if (audio.getFirmwareVersion(firmwareVersion)) {
    Serial.print("Firmware version: ");
    Serial.println(firmwareVersion);
  }

  // Configure detection
  Serial.println("Setting detection types...");
  if (audio.setDetectTypes("gunshot,glass_break,baby_cry,snore,T3")) {
    Serial.println("✓ Detection types set: gunshot, glass_break");
  } else {
    Serial.println("✗ Failed to set detection types");
  }
  delay(500);

  // Set thresholds
  audio.setEventThreshold("glass_break", 60);
  audio.setEventThreshold("gunshot", 65);
  delay(500);

  // Save configuration
  audio.saveConfig();
  delay(500);

  Serial.println("\n=================================");
  Serial.println("System ready. Monitoring events...");
  Serial.println("=================================\n");
}

void loop() {
  // Check for audio events
  if (audio.available()) {
    String eventData = audio.readEvent();

    if (eventData.length() > 0) {
      Serial.print("[" + getTimestamp() + "] ");
      Serial.println(eventData);

      // Extract event type from the event string
      String eventType = extractEventType(eventData);
      int confidence = extractConfidence(eventData);

      // Check if we should send an email for this event
      if (shouldSendEmail(eventType)) {
        Serial.println("\n>>> ALERT: New " + eventType + " detected!");
        Serial.println(">>> Sending email notification...");

        sendEventEmail(eventType, confidence);

        Serial.println(">>> Email sent. Cooldown active for " + 
                      String(EVENT_COOLDOWN_MS/1000) + " seconds.\n");
      }
    }
  }

  delay(100);
}

// Extract event type from event string (e.g., "glass_break 95% confidence")
String extractEventType(String eventData) {
  int spaceIndex = eventData.indexOf(' ');
  if (spaceIndex > 0) {
    return eventData.substring(0, spaceIndex);
  }
  return eventData;
}

// Extract confidence from event string
int extractConfidence(String eventData) {
  int percentIndex = eventData.indexOf('%');
  if (percentIndex > 0) {
    // Find the last space before %
    int lastSpace = eventData.lastIndexOf(' ', percentIndex);
    if (lastSpace > 0) {
      String confStr = eventData.substring(lastSpace + 1, percentIndex);
      return confStr.toInt();
    }
  }
  return 0;
}

// Check if enough time has passed since last email for this event type
bool shouldSendEmail(String eventType) {
  unsigned long currentTime = millis();

  for (int i = 0; i < EVENT_COUNT; i++) {
    if (events[i].eventType == eventType) {
      // Check if cooldown period has passed
      if (currentTime - events[i].lastTriggerTime >= EVENT_COOLDOWN_MS) {
        // Update last trigger time
        events[i].lastTriggerTime = currentTime;
        events[i].detectionCount++;
        return true;
      } else {
        // Still in cooldown period
        unsigned long timeRemaining = EVENT_COOLDOWN_MS - (currentTime - events[i].lastTriggerTime);
        Serial.println("    ⏳ Cooldown active. " + String(timeRemaining/1000) + "s remaining.");
        return false;
      }
    }
  }

  return false; // Unknown event type
}

// Send email notification
void sendEventEmail(String eventType, int confidence) {
  // Prepare email subject and body
  String subject = "🚨 ALERT: " + formatEventName(eventType) + " Detected!";

  String body = "SECURITY ALERT\n";
  body += "═══════════════════════════════\n\n";
  body += "Event Type: " + formatEventName(eventType) + "\n";
  body += "Confidence: " + String(confidence) + "%\n";
  body += "Time: " + getTimestamp() + "\n";
  body += "Device: ESP32 Audio Sensor\n";
  body += "Location: [Your Location]\n\n";
  body += "═══════════════════════════════\n";
  body += "This is an automated alert from your audio monitoring system.\n";

  // Send the email
  gmail_send(subject, body);
}

// Format event name for display
String formatEventName(String eventType) {
  if (eventType == "glass_break") return "Glass Breaking";
  if (eventType == "gunshot") return "Gunshot";
  if (eventType == "baby_cry") return "Baby Crying";
  if (eventType == "snore") return "Snoring";
  return eventType;
}

// Get formatted timestamp
String getTimestamp() {
  unsigned long seconds = millis() / 1000;
  unsigned long minutes = seconds / 60;
  unsigned long hours = minutes / 60;

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  char timestamp[12];
  sprintf(timestamp, "%02lu:%02lu:%02lu", hours, minutes, seconds);
  return String(timestamp);
}

// Gmail send function
void gmail_send(String subject, String textMsg) {
  MailClient.networkReconnect(true);

  smtp.debug(0); // Set to 1 for debug output
  smtp.callback(smtpCallback);

  Session_Config config;
  config.server.host_name = SMTP_HOST;
  config.server.port = SMTP_PORT;
  config.login.email = SENDER_EMAIL;
  config.login.password = SENDER_PASSWORD;
  config.login.user_domain = F("127.0.0.1");
  config.time.ntp_server = F("pool.ntp.org,time.nist.gov");
  config.time.gmt_offset = 3;
  config.time.day_light_offset = 0;

  SMTP_Message message;
  message.sender.name = F("ESP32 Security System");
  message.sender.email = SENDER_EMAIL;
  message.subject = subject;
  message.addRecipient(F("Security Admin"), RECIPIENT_EMAIL);
  message.text.content = textMsg;
  message.text.transfer_encoding = "base64";
  message.text.charSet = F("utf-8");
  message.priority = esp_mail_smtp_priority::esp_mail_smtp_priority_high;
  message.addHeader(F("Message-ID: <esp32.security@gmail.com>"));

  if (!smtp.connect(&config)) {
    Serial.printf("✗ Connection error, Status Code: %d, Error Code: %d, Reason: %s\n", 
                  smtp.statusCode(), smtp.errorCode(), smtp.errorReason().c_str());
    return;
  }

  if (!MailClient.sendMail(&smtp, &message)) {
    Serial.printf("✗ Send error, Status Code: %d, Error Code: %d, Reason: %s\n", 
                  smtp.statusCode(), smtp.errorCode(), smtp.errorReason().c_str());
  } else {
    Serial.println("✓ Email sent successfully!");
  }
}

void smtpCallback(SMTP_Status status) {
  Serial.println(status.info());

  if (status.success()) {
    Serial.println("────────────────────");
    Serial.printf("✓ Message sent: %d\n", status.completedCount());
    Serial.printf("✗ Message failed: %d\n", status.failedCount());
    Serial.println("────────────────────\n");
    smtp.sendingResult.clear();
  }
}



```

</details>

然后，将代码中的以下参数替换为你自己的值：发件人邮箱地址、UART 引脚、应用专用密码、收件人邮箱地址，以及你的 Wi-Fi SSID 和密码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/credentials.png" alt="pir" width={800} height="auto" /></p>

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/Fq126JCoQTo"
          title="Audio Event Sensor"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
