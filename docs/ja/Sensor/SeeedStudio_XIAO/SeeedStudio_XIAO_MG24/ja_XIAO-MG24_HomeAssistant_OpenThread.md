---
description: OpenThreadネットワークプロトコル上でMatterを使用してHAに接続する
title: Seeed Studio XIAO MG24でHomeAssistantをMatterで接続する
keywords:
- MG24
- xiao
- HomeAssistant
- Matter
- OpenThread
- Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E
image: https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki-XIAO-MG24-HA-Matter.webp
slug: /ja/xiao_mg24_ha_openthread
sidebar_position: 8
last_update:
  date: 05/5/2025
  author: Jason
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki XIAO MG24-HA-Matter.png" style={{width:900, height:'auto'}}/></div>

## はじめに

このwikiでは、Sonoff Zigbee 3.0 USB DongleをHomeAssistantにアクセスしてボーダールーターとして機能させ、Seeed Studio XIAO MG24をThreadネットワークでMatterプロトコルデバイスとして動作させます。便宜上、プロセスをより良く理解するために以下の3つの質問を通してご案内します。***Wiki思想を提供してくれた著者[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/)に感謝します***

### Matterとは何ですか？

Matter（旧CHIP）は、Connectivity Standards Alliance（CSA）によって開発された汎用アプリケーション層標準です。

- IPネットワーク（Wi-Fi/Ethernet/Thread）上でのクロスベンダー相互運用性
- 標準化されたデバイスタイプ（例：照明、ドアロック、サーモスタット）
- QRコード/NFCを使用したセキュアなコミッショニング
- Distributed Compliance Ledger（DCL）によるエンドツーエンド暗号化

### OpenThreadとは何ですか？

OpenThreadは、Threadネットワーキングプロトコルのオープンソース実装です。IEEE 802.15.4無線技術を使用してIoTデバイス向けの低電力で安全なメッシュネットワークを作成します。主な機能：

- 内蔵IPv6サポート（6LoWPAN）
- 自己組織化ネットワークトポロジー
- すべての通信でのAES-128暗号化
- 電球やセンサーなどの小型デバイスとの互換性

### MatterとThreadの関係は何ですか？

***この点について非常に詳細な説明をしてくれた著者[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/)に感謝し、そこから引用します！***

MatterとThreadのこの短い紹介の後、ThreadとMatterが異なる目的を果たし、技術スタックの異なる層で動作することを理解していただけたでしょう。要約すると：

Thread：

- Threadは、接続されたホームデバイス向けに設計された低電力ワイヤレスメッシュネットワーキングプロトコルです。デバイス同士およびインターネットとの通信に信頼性が高く安全な方法を提供します。
- Threadは、インターネットが停止してもデバイス同士が通信できるローカルネットワークを作成します。

Matter：

- MatterはThread、Wi-Fi、Ethernetなどのネットワーキングプロトコルの上に位置するアプリケーション層プロトコルです。異なるメーカーのデバイスがシームレスに連携できることを保証することで、スマートホームエコシステムを簡素化し統一することを目的としています。
- Matterは、相互運用性、セキュリティ、使いやすさに焦点を当てて、アプリケーションレベルでデバイスがどのように通信し相互作用するかを定義します。

ThreadとMatterの接続：

- Matterは、その基盤となるネットワークプロトコルの1つとしてThreadを使用できます。これは、Matterプロトコルを使用するデバイスがThreadネットワーク上で通信できることを意味します。
- MatterとThreadの組み合わせにより、デバイスがローカルで効率的に通信できる堅牢で安全かつ相互運用可能なスマートホームエコシステムが実現されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## ハードウェア概要

<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
        <th>XIAO MG24</th>
        <th>Grove - 温湿度センサー (SHT31)</th>
        <th>Seeed Studio Grove Base for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Dongle.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/XIAO_MG24.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/SHT31.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

## ソフトウェア概要

### Sonoff ZBDongle-E ドングルのフラッシュ

Sonoff ZBDongle-E ドングルには、Zigbee デバイスとの通信のみを可能にするファームウェアが付属しています。Thread 無線プロトコルで動作させるには、新しいファームウェアをフラッシュする必要があります。Chrome ブラウザから https://darkxst.github.io/silabs-firmware-builder で直接ドングルのファームウェアを更新できます。ドングルをコンピュータに挿入した後、「Connect」をクリックし、「OpenThread」ファームウェアを選択してファームウェアを変更します。
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/1.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/2.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/3.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Matter 温湿度センサーデバイス

XIAO MG24 を Matter デバイスとして初めて使用する場合は、セットアップ方法について、この[wiki](https://wiki.seeedstudio.com/ja/xiao_mg24_matter/)を参照してください。

- **ステップ 1.** Github から[ライブラリ](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)をダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。新しいスケッチを開き、以下のコードを新しいスケッチにコピーします。

```cpp
#include <Matter.h>
#include <MatterTemperature.h>
#include <MatterHumidity.h>
#include "ArduinoLowPower.h"
#include "SHT31.h"
#include <Wire.h>


SHT31 sht31 = SHT31();

float humidity;
float temperature;

MatterHumidity matter_humidity_sensor;
MatterTemperature matter_temp_sensor;


void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
  
  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  Matter.begin();
  matter_temp_sensor.begin();
  matter_humidity_sensor.begin();
  matter_temp_sensor.set_device_name("XIAO_MG24");
  matter_temp_sensor.set_vendor_name("Seeed_Studio");
  matter_temp_sensor.set_product_name("Matter_SHT31");

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }
  Serial.println("Matter device is commissioned, waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Device is connected to Thread network");
  Serial.println("Waiting for Matter device discovery...");
  while (!matter_temp_sensor.is_online() || !matter_humidity_sensor.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop() {

  delay(1000);

  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  matter_temp_sensor.set_measured_value_celsius(temperature);
  matter_humidity_sensor.set_measured_value(humidity);


  LowPower.sleep(600000);
}
```

### HomeAssistant設定

**セット1 .アドオンストア**

画像に基づいて2つのプラグインをダウンロードする必要があります。

<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

**セット 2 . Thread 設定**

OpenThread Border Router プラグインを追加します。このプラグインにより、Thread ネットワークを作成または参加し、Home Assistant を Thread Border Router に変換することができます！
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>
Threadサービスの設定で対応するネットワークを選択します。
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread3.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread4.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Home Assistant モバイル設定

Matter デバイスを Home Assistant に追加するには、スマートフォンに Home Assistant アプリをインストールする必要があります。スマートフォンは Matter の「コーディネーター」として機能し、新しいデバイスを Matter ネットワークに追加してセキュリティ設定を行い、HomeAssistant Green は Matter のコントローラーとして機能し、Matter ネットワークに接続されたすべてのデバイスを管理します。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone2.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### Matterデバイスの追加

新しいMatterデバイスをホームオートメーションシステムに組み込むには、「Matterデバイスを追加」を選択し、デバイスに付属のQRコードをスキャンします。このチュートリアルでは、XIAO MG24がシリアルモニターで提供するURLに基づいて、CHIPウェブサイトを使用してQRコードを生成する方法を説明します。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone7.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone6.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone8.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone9.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### 温度と湿度を表示するHAパネル

QRコードが正常に追加されると、HAパネルで温度と湿度センサーを確認できます！

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result3.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
</table>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
