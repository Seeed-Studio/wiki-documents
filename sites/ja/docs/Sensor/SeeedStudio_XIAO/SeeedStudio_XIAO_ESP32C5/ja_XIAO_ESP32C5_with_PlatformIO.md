---
title: Seeed Studio XIAO ESP32-C5 での Platform IO
description: |
keywords:
  - xiao
  - esp32c5
  - platformio
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_start.webp
slug: /ja/xiao_esp32c5_with_platformio
last_update:
  date: 12/18/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_started.png" style={{width:800, height:'auto'}}/></div>

## [PlatformIO](https://platformio.org/) の紹介

PlatformIOは、組み込みシステム向けに設計された強力で高度に拡張可能な開発エコシステムです。膨大な数の開発ボードとマイクロコントローラーのサポートをシームレスに統合し、比類のない柔軟性を提供します。PlatformIOの特徴は、その優れたスケーラビリティです：特定のボードがネイティブにサポートされていない場合でも、そのアーキテクチャにより簡単にカスタムボード定義を作成できます。

重要なことに、PlatformIOはArduinoに慣れ親しんだ開発者のギャップを埋め、関連するライブラリを含めるだけでArduinoスタイルのコードのコンパイルとデプロイを可能にします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://platformio.org/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳細を見る 🖱️</font></span></strong></a>
</div>

## XIAO ESP32-C5 での PlatformIO の使用

次に、PlatformIOベースでXIAO ESP32-C5の開発を行い、PlatformIOの開発ワークフローを探索していきます。

### ハードウェアの準備

事前に **XIAO ESP32-C5** を準備する必要があります。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### VS Code のダウンロード

使用しているシステムに応じて [VS Code](https://code.visualstudio.com/download) をダウンロードしてください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### PlatformIO のインストール

VSCodeを開き、Extensionsをクリックし、PlatformIOを検索してインストールを選択します。インストールが完了したら、VSCodeを再起動してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### 新しいプロジェクト

- PIO Homeインターフェースを開き、`New Project`を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div><br/>

- Name: プロジェクト名を入力します
- Board: **Seeed Studio XIAO ESP32-C5** を選択します
- Framework: Arduinoを選択します
- Location: エンジニアリングファイルのパスは、カスタムパスまたはデフォルトパスを選択できます。
- **Finish** をクリックして作成が完了するまで待ちます。その後、ワークスペースでプロジェクトファイルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_1.png" style={{width:800, height:'auto'}}/></div>

別のPlatformIOプロジェクトをベースに変更したい場合は、以下の設定を直接参照することもできます。

- platfromio.ini

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
monitor_speed = 115200
```

### LED点滅の例

このLED点滅の例では、PlatformIOを使用してファイルをコンパイルおよびアップロードする方法をガイドします。

**ステップ 1.** サンプルコードをコピーします

```cpp
#include <Arduino.h>

void setup()
{
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);
}

void loop()
{
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**ステップ 2.** プロジェクトをビルドします

  VS Codeの下部のステータスバーにある ***√*** アイコンをクリックしてビルドします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_2.png" style={{width:800, height:'auto'}}/></div><br/>

  ビルドが成功すると、図のように表示されます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 3.** アップロード

  VS Codeの下部のステータスバーにある **→** アイコンをクリックしてアップロードします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3_1.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 4.** プログラムの効果を確認します

下図のようにシリアルモニターを開きます。1秒間隔でLEDのオン/オフ状態が印刷されます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_4.png" style={{width:800, height:'auto'}}/></div><br/>

LEDは同じ1秒間隔で点滅します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div><br/>

### 5 GHz Wi-Fi接続の例

XIAO ESP-C5は2.4 GHz & 5 GHzデュアルバンドWi-Fi 6をサポートしています。この例では、5 GHz Wi-Fiネットワークへの接続効果を実演します。<br/>

以下のコードをPlatformIOプロジェクトにコピーしてください。
<details>

<summary> WiFi接続参考コード </summary>

```cpp
#include <Arduino.h>
#include <WiFi.h>

// ----------------------------------------------------------------
// Modify your WiFi SSID and Password here
// ----------------------------------------------------------------
const char* ssid     = "YOUR_WIFI_SSID";      // e.g., "MyHomeWiFi"
const char* password = "YOUR_WIFI_PASSWORD";  // e.g., "12345678"

void setup() {
  // Initialize serial communication at 115200 baud
  Serial.begin(115200);
  delay(5000); // Wait for serial to stabilize

  Serial.println("\nStarting ESP32 WiFi Connection Demo...");

  // 1. Set WiFi mode to Station (connect to a router as a client)
  WiFi.mode(WIFI_STA);

  // 2. Start connection
  Serial.printf("Connecting to SSID: %s ", ssid);
  WiFi.begin(ssid, password);

  // 3. Wait for connection to be established
  // This loop waits until the status becomes WL_CONNECTED
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  // ----------------------------------------------------------------
  // Connection successful, print detailed information
  // ----------------------------------------------------------------
  Serial.println("\n\n---------------------------------------");
  Serial.println("WiFi Connected Successfully!");
  Serial.println("---------------------------------------");

  // Print IP Address
  Serial.print("IPv4 Address:   ");
  Serial.println(WiFi.localIP());

  // Print Signal Strength (RSSI)
  // Unit is dBm, usually between -30 (Excellent) and -90 (Unusable)
  long rssi = WiFi.RSSI();
  Serial.print("Signal (RSSI):  ");
  Serial.print(rssi);
  Serial.println(" dBm");

  // Simple signal quality check based on RSSI value
  Serial.print("Signal Quality: ");
  if(rssi > -50) Serial.println("Excellent");
  else if(rssi > -60) Serial.println("Good");
  else if(rssi > -70) Serial.println("Fair");
  else if(rssi > -80) Serial.println("Weak");
  else Serial.println("Unstable/Very Poor");

  // Print MAC Address (Hardware ID)
  Serial.print("MAC Address:    ");
  Serial.println(WiFi.macAddress());

  // Print Gateway IP
  Serial.print("Gateway IP:     ");
  Serial.println(WiFi.gatewayIP());

  Serial.println("---------------------------------------");
}

void loop() {
  // In the main loop, we can periodically check the connection status
  // If the connection is lost, attempt to reconnect

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi Connection Lost! Reconnecting...");
    WiFi.disconnect();
    WiFi.reconnect();
    delay(5000); // Wait a bit before checking again to avoid spamming
  }

  // Your other application logic goes here
  // ...

  delay(10000); // Loop every 10 seconds
}
```

</details>

コードをビルドしてアップロードします<br/>

XIAO ESP32-C5がWiFiに接続されると、シリアルモニターは接続されたWiFiネットワークの信号強度などの情報を印刷します。<br/>
XIAO ESP32-C5が5 GHz Wi-Fiネットワークに接続する強力な能力を持っていることも明確に確認できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_5_1.png" style={{width:600, height:'auto'}}/></div><br/>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

上記の2つの例に従って、PlatformIOの基本的な開発操作をマスターしたはずです。XIAO ESP32-C5でより興味深いプロジェクトを作成していただけることを楽しみにしています！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
