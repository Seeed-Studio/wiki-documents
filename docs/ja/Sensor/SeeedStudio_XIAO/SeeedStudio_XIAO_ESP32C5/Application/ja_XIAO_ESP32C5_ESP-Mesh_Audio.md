---
description: |
title: XIAO ESP32C5 ESP-Mesh オーディオ
keywords:
- xiao esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /ja/xiao_esp32c5_esp-mesh_audio
last_update:
  date: 12/12/2025
  author: Zeller
---

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_0.png" style={{width:800, height:'auto'}}/></div>

## [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)

以下は、Espressif Systems による **ESP-WIFI-MESH** の公式紹介です：

ESP-WIFI-MESH は、Espressif SoC の同時 AP-STA 機能を使用してメッシュトポロジーで組織されたノードを持つワイヤレス通信ネットワークです。自己形成および自己修復ネットワークを提供し、展開が容易です。ESP-WIFI-MESH のネットワークトポロジーは、特定の Wi-Fi インフラストラクチャサポートを必要とせずに、広いエリアで最大 1000 ノードまでスケールアップできます。ESP-WIFI-MESH は、Wi-Fi 信号が届かない家庭展開シナリオでの Wi-Fi デッドスポットをカバーするためにも使用できます。

以下の特徴があります：

1. **簡単で安全なセットアップ** : モバイルアプリ + Bluetooth LE ネットワーク設定がサポートされており、新しいノードの迅速な追加と設定の安全な配信が可能です。
2. **自己形成および自己修復** : ノードは自動的に接続/再接続し、ノードが故障した際にネットワークは自動的に形成され、自己修復できます。
3. **追加のゲートウェイ不要** : 追加のゲートウェイやインフラストラクチャは必要ありません。メッシュネットワークは数千のノードまでスケールアップでき、大規模展開に適しています。
4. **IP 接続性** : すべてのノードが IP 通信をサポートし、ノード間の相互接続と外部ネットワークへのアクセス（ルートノード NAT またはブリッジング経由）の両方を可能にします。
5. **設計による安全性** : 標準 Wi-Fi に基づき、ノード間の通信は WPA2 暗号化を採用して安全なデータ伝送を確保できます。
6. **アプリケーション** : スマート照明、スマートホーム、自動化制御、大規模会場（駐車場、工場、共有スペースなど）でのネットワーキングなど、さまざまなシナリオに適用できます。

詳細については、Espressif Systems の公式リンクを参照してください：

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

## ESP-Mesh_Audio

次に、XIAO ESP32-C5、5 GHz 周波数帯をサポートするルーター、およびコンピューターを使用して、メッシュノードシナリオでの 5 GHz 帯オーディオ伝送をシミュレートします。<br/>
ここで、あなたのコンピューターは **メッシュ子ノード** として機能し、5 GHz ルーター経由でデータを送信します。C5 は **メッシュルートノード** として機能し、データを受信します。

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

:::tip
ご自宅に 5 GHz 周波数帯をサポートするルーターがない場合は、携帯電話のホットスポットを有効にし、5 GHz 周波数帯に設定して、コンピューターがこのホットスポットに接続されていることを確認してください。
:::

### Arduino プロジェクトの作成

以下のコードをコピーし、**ssid** と **password** を使用している 5 GHz 周波数帯ルーターの名前とパスワードに変更してください。

```cpp
#include <WiFi.h>
#include <WiFiUdp.h>

const char* ssid = "Your_5G_Router_SSID";
const char* password = "Your_Router_Password";
#define UDP_PORT 4444

WiFiUDP udp;
uint8_t packetBuffer[1024]; // Buffer for storing received UDP packets

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.print("Connecting to 5GHz WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  // Start UDP listening
  udp.begin(UDP_PORT);
  Serial.printf("Listening on UDP port %d\n", UDP_PORT);
}

void loop() {
  int packetSize = udp.parsePacket();
  if (packetSize) {
    // Read received data
    int len = udp.read(packetBuffer, 1024);

    // Statistics and print: size of received packet, and signal strength (RSSI)
    // Signal strength is crucial for 5GHz audio transmission
    Serial.printf("[RECV] %d bytes from %s, RSSI: %d dBm\n", 
                  len, udp.remoteIP().toString().c_str(), WiFi.RSSI());

    // If you have an I2S speaker, you can call i2s_write here for playback
  }
}
```

### IP アドレスの取得

コードを XIAO ESP32-C5 にアップロードし、シリアルモニターを開くと、5 GHz WiFi ルーターに正常に接続された場合、接続された IP アドレスが印刷されます。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_1.png" style={{width:800, height:'auto'}}/></div>

### Python スクリプトの作成

Python スクリプトを使用する前に、まず Python 3 環境をインストールする必要があります。詳細については、対応するインストールチュートリアルをオンラインで検索してください。<br/>

Windows の任意のフォルダーに send_audio.py という名前のファイルを作成し、以下の Python コードをコピーしてください。<br/>

Arduino IDE のシリアルモニターで印刷された IP アドレスを、コード内の **TARGET_IP** 変数に入力してください。

```py
import socket
import time
import random

# Set the target IP (View the IP printed out by the serial port of C5)
TARGET_IP = "192.168.x.x" # <--- Modify here!!!
TARGET_PORT = 4444

# Simulated Audio Parameters
# 16kHz sampling, 16-bit, mono -> 32000 bytes per second
# Send one packet every 20ms -> Each packet is 640 bytes
PACKET_SIZE = 640 
INTERVAL = 0.02 # 20ms

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
print(f"Start sending simulated audio to {TARGET_IP}:{TARGET_PORT}...")

sequence = 0

try:
    while True:
        # Generate simulated data (add serial numbers to facilitate packet loss detection)
        # The first 4 bytes are the serial numbers, followed by random noise
        payload = sequence.to_bytes(4, byteorder='big') + random.randbytes(PACKET_SIZE - 4)

        sock.sendto(payload, (TARGET_IP, TARGET_PORT))
        print(f"Sent packet #{sequence}, size: {len(payload)}")

        sequence += 1
        time.sleep(INTERVAL) # Control the transmission frequency

except KeyboardInterrupt:
    print("Stopped.")
    sock.close()
```

### スクリプトファイルの実行

`send_audio.py` が保存されているフォルダーで右クリックし、このフォルダーでターミナルを開きます。<br/>
`python send_audio.py` と入力してスクリプトを実行します。接続が成功すると、20 ms ごとに XIAO ESP32-C5 にオーディオデータを送信します。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_3.png" style={{width:800, height:'auto'}}/></div>

Arduino IDE のモニターウィンドウには、コンピューターの IP アドレスとバイトデータ、および接続された 5 GHz WiFi の信号強度が返されます。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_4.png" style={{width:800, height:'auto'}}/></div>

おめでとうございます！この時点で、5 GHz WiFi 帯でオーディオを伝送する方法を学びました。さらなる革新があなたの実現を待っています！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
