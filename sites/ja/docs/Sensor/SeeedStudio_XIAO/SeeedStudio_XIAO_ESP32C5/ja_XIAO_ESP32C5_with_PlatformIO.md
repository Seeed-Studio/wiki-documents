---
title: Seeed Studio XIAO ESP32-C5 で Platform IO を使う
description: ''
keywords:
  - xiao
  - esp32c5
  - platformio
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_start.webp
slug: /xiao_esp32c5_with_platformio
last_update:
  date: 12/18/2025
  author: Zeller
createdAt: '2025-12-15'
updatedAt: '2025-12-26'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c5_with_platformio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_started.png" style={{width:800, height:'auto'}}/></div>

## [PlatformIO](https://platformio.org/) の紹介

PlatformIO は、組み込みシステム向けに設計された強力で高い拡張性を持つ開発エコシステムです。非常に多くの開発ボードやマイコンをシームレスにサポートし、比類ない柔軟性を提供します。PlatformIO を特徴づけているのは、その優れたスケーラビリティです。たとえあなたのボードがネイティブにはサポートされていなくても、そのアーキテクチャにより、カスタムボード定義を簡単に追加できます。

特に、Arduino に慣れた開発者にとっては、関連ライブラリをインクルードするだけで Arduino スタイルのコードをコンパイルして書き込めるため、PlatformIO はそのギャップを埋める存在となっています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://platformio.org/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳しく見る 🖱️</font></span></strong></a>
</div>

## XIAO ESP32-C5 で PlatformIO を使う

次に、PlatformIO をベースに XIAO ESP32-C5 の開発を行い、PlatformIO の開発ワークフローを一緒に体験していきます。

### ハードウェアの準備

事前に **XIAO ESP32-C5** を 1 つ用意してください。

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

### VS Code をダウンロード

使用している OS に応じて [VS Code](https://code.visualstudio.com/download) をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### PlatformIO をインストール

VSCode を開き、Extensions をクリックして PlatformIO を検索し、インストールを選択します。インストールが完了したら、VSCode を再起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### platform-seeedboards プラットフォームパッケージをインストール

Seeed Studio XIAO シリーズのボードはカスタム PlatformIO プラットフォームを使用しているため、対応するプラットフォームパッケージを手動でインストールする必要があります。

- 新規インストールの場合は、次のコマンドを実行します：

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- すでに PlatformIO で Seeed Studio XIAO シリーズボードを使用したことがある場合は、以下のコマンドを実行して更新します：

```bash
# for Windows
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"

# for macOS/Linux
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

既存の PlatformIO プロジェクトを使用したい場合は、**platformio.ini** の内容を次のように置き換えてください：

```ini
[env:seeed-xiao-esp32-c5]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = arduino
board = seeed-xiao-esp32-c5
monitor_speed = 115200
```

:::

### 新規プロジェクト

- PIO Home 画面を開き、`New Project` を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div><br/>

- Name: プロジェクト名を入力します
- Board: **Seeed Studio XIAO ESP32-C5** を選択します
- Framework: Ardunio を選択します
- Location: プロジェクトファイルのパスは、カスタムパスを設定するか、デフォルトパスを選択できます。
- **Finish** をクリックし、作成が完了するまで待ちます。その後、ワークスペースでプロジェクトファイルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_1.png" style={{width:600, height:'auto'}}/></div>

### LED 点滅サンプル

この LED 点滅サンプルでは、PlatformIO を使ったコンパイルと書き込みの手順を説明します。

**Step 1.** サンプルコードをコピーする

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

**Step 2.** プロジェクトをビルドする

  VS Code 下部のステータスバーにある ***√*** アイコンをクリックしてビルドします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_2.png" style={{width:800, height:'auto'}}/></div><br/>

  ビルドが成功すると、図のように表示されます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 3.** アップロード

  VS Code 下部のステータスバーにある **→** アイコンをクリックしてアップロードします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 4.** 動作を確認する

下図のようにシリアルモニタを開きます。1 秒間隔で LED のオン／オフ状態が出力されます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_4.png" style={{width:800, height:'auto'}}/></div><br/>

LED も同じく 1 秒間隔で点滅します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div><br/>

### 5 GHz Wi-Fi 接続サンプル

XIAO ESP-C5 は 2.4 GHz & 5 GHz のデュアルバンド Wi-Fi 6 をサポートしています。このサンプルでは、5 GHz Wi-Fi ネットワークに接続した際の動作を確認します。<br/>

以下のコードを PlatformIO プロジェクトにコピーします。
<details>

<summary> WiFi 接続リファレンスコード </summary>

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

XIAO ESP32-C5 が WiFi に接続されると、シリアルモニタに接続中の WiFi ネットワークの信号強度などの情報が表示されます。<br/>
また、XIAO ESP32-C5 が 5 GHz Wi-Fi ネットワークへの接続能力に優れていることも、はっきりと確認できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_5_1.png" style={{width:600, height:'auto'}}/></div><br/>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

上記の2つのサンプルに従うことで、PlatformIO の基本的な開発操作を習得できたはずです。XIAO ESP32-C5 を使って、さらに面白いプロジェクトを作成していただけることを楽しみにしています！

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
