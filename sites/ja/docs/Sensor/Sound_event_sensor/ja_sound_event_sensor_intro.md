---
description: このコンパクトなエッジオーディオボードは、すべてのデータをローカルに保持してプライバシーを保護しながら、赤ちゃんの泣き声、ガラス破損、銃声、アラーム、いびきをリアルタイムに検出します。XIAO シリーズ向けに設計されており、ESPHome と Home Assistant にシームレスに統合できるため、スマートな監視や自動化に最適です。
title: Sound Event Detection Module 入門ガイド
keywords:
  - Sound Event Detection Module
  - Sound IoT
image: https://files.seeedstudio.com/wiki/sound_event_detection/sound_event_detection_img_1.png
slug: /sound_event_detection_module
sku: 100049596
last_update:
  date: 3/2/2026
  author: Kasun Thushara
createdAt: '2026-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/sound_event_detection_module/
---

## はじめに

コンパクトなエッジオーディオボードが、強力なローカルデータプライバシー保護とともにリアルタイムの音検出を実現します。赤ちゃんの泣き声、ガラス破損、銃声、T3/T4 アラーム、いびきという 5 種類の異常音イベントを検出し、即時の対応と信頼性の高い早期警告を可能にします。XIAO シリーズ向けに設計されており、ESPHome とのネイティブ統合と Home Assistant とのシームレスな互換性を備えているため、家庭のセキュリティ監視や応答性の高い自動化トリガとして理想的です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/sound_event_detection_img_1.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sound-Event-Detection-Module-D1-p-6652.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 仕様

| 機能 | 説明 |
|--------|-------------|
| コアチップ | XMOS XU316-1024-QF60BC24 |
| 対応イベント | 赤ちゃんの泣き声 / ガラス破損 / 銃声 / 煙警報 & CO 警報 (T3/T4) / いびき |
| デジタルマイク | 高性能デジタルマイク × 1 |
| 感度 | -26 dBFS |
| 音響過負荷点 | 120 dBL |
| SNR | 64 dBA |
| 電源 | USB 5V、外部 5V |
| 寸法 | 40 × 20 mm |
| 動作温度 | 0℃ – 65℃ |

## ハードウェア概要と寸法

**表面（フロント）**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/front.png" alt="pir" width={400} height="auto" /></p>

**裏面（バック）**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/back.png" alt="pir" width={400} height="auto" /></p>

## USB の使用方法

このデバイスはスタンドアロンモードで動作でき、USB インターフェースを介して AT コマンドによるプラグアンドプレイ通信をサポートします。

まず、USB Type-C から USB Type-A ケーブルを使用してデバイスをコンピュータに接続します。

- **Step 1** :次に、**PuTTY** などのシリアルターミナルソフトウェアを開きます。まだインストールしていない場合は、次の [リンク](https://putty.org/index.html) から PuTTY をダウンロードできます。

- **Step 2** :シリアルターミナルを開いたら、**正しい COM ポート** を選択し、ボーレートを **115200** に設定します。接続が完了すると、USB インターフェースを介してデバイスと対話できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/putty.png" alt="pir" width={600} height="auto" /></p>

このデバイスは常に音イベントをリッスンしているため、デバイスの近くで対応する音イベントを発生させることでテストできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/putty_2.png" alt="pir" width={600} height="auto" /></p>

さらに、AT コマンドを使用してデバイスパラメータを調整できます。以下は、デバイスと対話するために使用できるコマンドの一部です。

| コマンド | 説明 | 例 |
|---|---|---|
| `AT+GETDETECT` | 現在有効になっている検出タイプ（1～5 種類）を取得します。 | `AT+GETDETECT` → `+GETDETECT:baby_cry,glass_break` |
| `AT+SETDETECT=<types>` | 検出するイベントタイプを設定します（カンマ区切り、最大 5 種類）。 | `AT+SETDETECT=baby_cry,snore` |
| `AT+GETEVENTTHRESHOLD=<type>` | 特定のイベントの信頼度しきい値を取得します。 | `AT+GETEVENTTHRESHOLD=baby_cry` → `+GETEVENTTHRESHOLD:baby_cry,70` |
| `AT+SETEVENTTHRESHOLD=<type>,<val>` | 特定のイベントの信頼度しきい値を設定します。 | `AT+SETEVENTTHRESHOLD=baby_cry,75` |
| `AT+GETSUPPORTEDLIST` | デバイスがサポートするすべてのイベントタイプを一覧表示します。 | `AT+GETSUPPORTEDLIST` → `+GETSUPPORTEDLIST:doorbell,glass_break,baby_cry,...` |
| `AT+SETOUTPUTTYPE=<type>` | イベント検出時に何を出力するかを設定します。 | `AT+SETOUTPUTTYPE=highest_confidence` |
| `AT+GETINTMODE` | 現在の割り込みモードを取得します。 | `AT+GETINTMODE` → `+GETINTMODE:single` |
| `AT+SETINTMODE=<mode>` | 割り込み動作モードを設定します。 | `AT+SETINTMODE=continuous` |
| `AT+RESETINT` | 割り込みステータスをリセットし、INT_N ピンを HIGH にします。 | `AT+RESETINT` |
| `AT+SAVECONFIG` | 現在の設定を保存し、再起動後も保持されるようにします。 | `AT+SAVECONFIG` |
| `AT+GETFWVERSION` | ファームウェアバージョン文字列を取得します。 | `AT+GETFWVERSION` → `+GETFWVERSION:1.0.2` |
| `AT+RESET` | デフォルト設定を復元してデバイスを再起動します（すべてのカスタム設定を消去）。 | `AT+RESET` |


イベントが検出されると、デバイスは自動的に次のように送信します：

```
+EVENT: <event_id>,<confidence>
```

**例:** `+EVENT: 1,87` → イベント ID 1（`baby_cry`）、信頼度 87%

---

 `AT+SETOUTPUTTYPE` の値

| 値 | 動作 |
|---|---|
| `highest_confidence` | 信頼度が最も高い単一のイベントのみが報告されます |
| `all_events` | 検出サイクルごとに検出されたすべてのイベントが報告されます |

 `AT+SETINTMODE` の値

| 値 | 動作 |
|---|---|
| `single` | INT_N は 1 回だけ発火し、その後 `AT+RESETINT` でリセットする必要があります |
| `continuous` | イベントが検出されている間、INT_N は連続して発火します |



## Arduino の使用方法 

### XIAO を接続する

このデバイスは XIAO モジュールをサポートしており、ボード上の任意の利用可能な UART ピンに接続できます。ESP32S3、ESP32C6、ESP32C3 モジュールと互換性があるため、コード内の RX および TX ピン定義をそれぞれのボードに合わせて変更するだけで済みます。画像に示されているのと同じ向きでデバイスを接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/with_esp.jpg" alt="pir" width={800} height="auto" /></p>

###  ライブラリをダウンロード

- GitHub リポジトリ [Link](https://github.com/Seeed-Projects/AudioEventSensor_Library) にアクセスします
- 緑色の "Code" ボタンをクリックします
- "Download ZIP" を選択します
- ファイル（例: AudioEventSensor-main.zip）をコンピュータに保存します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/library_download.png" alt="pir" width={800} height="auto" /></p>

### Arduino IDE にライブラリをインストール

#### Arduino IDE を使用（推奨）

- Arduino IDE を開きます
- Sketch → Include Library → Add .ZIP Library... に進みます
- ダウンロードした ZIP ファイルを選択します
- "Open" をクリックしてインストールします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/arduino_add_library.png" alt="pir" width={800} height="auto" /></p>

### インストールの確認

File → Examples → AudioEventSensor に移動し、サンプルスケッチを確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/verify_arduino.png" alt="pir" width={800} height="auto" /></p>

### UART ピンの変更

使用している XIAO ボードに応じて、コード内の UART ピン定義を変更する必要があります。この例では、XIAO ESP32S3 を使用しています。

```c
#define UART1_TX 43
#define UART1_RX 44
```

## 基本的な使い方

ESP32 に書き込んだ後、このコードは UART 経由で Audio Event Sensor を初期化し、銃声やガラス破損などの特定の音イベントを検出するように設定します。セットアップ中にデバイスをリセットし、ファームウェアバージョンを読み取り、サポートされている音イベントの一覧を取得し、選択した各イベントの検出しきい値を設定します。その後、設定を保存して、再起動後も設定が保持されるようにします。メインループでは、検出された音イベントを継続的に監視し、リアルタイムでシリアルモニタに出力します。これにより、異常な音響イベントに対する早期警告および監視ソリューションとしてシステムを機能させることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/basic_usage.png" alt="pir" width={800} height="auto" /></p>

## ボーナス : メール通知 

- まず、アプリパスワードを作成する必要があります。この [ガイド](https://support.google.com/accounts/answer/185833?hl=en) を参照してください
- 次に、必要なサポートライブラリをダウンロードしてインストールします。Arduino Library Manager から ESP Mail Client ライブラリをインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/email_client.png" alt="pir" width={800} height="auto" /></p>

### コード

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

次に、コード内の次のパラメータを自分の値に置き換えます：送信者のメールアドレス、UART ピン、App Password、受信者のメールアドレス、そして Wi-Fi の SSID とパスワードです。

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


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
