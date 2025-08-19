---
description: Matterを使用してOpenThreadネットワークプロトコル上でHAに接続する
title: Seeed Studio XIAO MG24でMatterを使用してHomeAssistantに接続
keywords:
- MG24
- xiao
- HomeAssistant
- Matter
- OpenThread
- Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E
image: https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki XIAO MG24-HA-Matter.webp
slug: /ja/xiao_mg24_ha_openthread
sidebar_position: 8
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki XIAO MG24-HA-Matter.png" style={{width:900, height:'auto'}}/></div>

## はじめに

このWikiでは、Sonoff Zigbee 3.0 USB Dongleを使用してHomeAssistantにアクセスし、ボーダールーターとして機能させます。一方、Seeed Studio XIAO MG24はThreadネットワークを使用したMatterプロトコルデバイスとして機能します。プロセスをより理解しやすくするために、以下の3つの質問を通じて説明します。***著者[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/)によるWikiのアイデアに感謝します***

### Matterとは何ですか？
Matter（以前はCHIP）は、Connectivity Standards Alliance（CSA）によって開発されたユニバーサルなアプリケーション層の標準です。
- IPネットワーク（Wi-Fi/Ethernet/Thread）を介したクロスベンダーの相互運用性
- 標準化されたデバイスタイプ（例：ライト、ドアロック、サーモスタット）
- QRコード/NFCを使用した安全なコミッショニング
- 分散コンプライアンス台帳（DCL）によるエンドツーエンドの暗号化

### OpenThreadとは何ですか？
OpenThreadは、Threadネットワークプロトコルのオープンソース実装です。IEEE 802.15.4無線技術を使用してIoTデバイス向けの低消費電力で安全なメッシュネットワークを作成します。主な特徴：
- IPv6（6LoWPAN）サポートの組み込み
- 自己組織化ネットワークトポロジー
- すべての通信にAES-128暗号化を使用
- 電球やセンサーのような小型デバイスにも対応可能

### MatterとThreadの関係は何ですか？

***著者[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/)によるこの点の非常に詳細な説明に感謝し、引用します！***

MatterとThreadの簡単な紹介の後、ThreadとMatterが異なる目的を持ち、技術スタックの異なる層で動作することが理解できました。要約すると：

Thread:
- Threadは、接続された家庭用デバイス向けに設計された低消費電力のワイヤレスメッシュネットワークプロトコルです。デバイスが互いに通信し、インターネットと接続するための信頼性が高く安全な方法を提供します。
- Threadはローカルネットワークを作成し、インターネットがダウンしてもデバイス同士が通信できるようにします。

Matter:
- Matterは、Thread、Wi-Fi、Ethernetなどのネットワークプロトコルの上に位置するアプリケーション層プロトコルです。異なるメーカーのデバイスがシームレスに連携できるようにすることで、スマートホームエコシステムを簡素化し統一することを目指しています。
- Matterは、デバイスがアプリケーションレベルでどのように通信し、相互作用するかを定義し、相互運用性、セキュリティ、使いやすさに重点を置いています。

ThreadとMatterの接続:
- Matterは、Threadをその基盤となるネットワークプロトコルの1つとして使用できます。つまり、Matterプロトコルを使用するデバイスはThreadネットワーク上で通信できます。
- MatterとThreadの組み合わせにより、デバイスがローカルかつ効率的に通信できる堅牢で安全で相互運用可能なスマートホームエコシステムが実現します。



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## ハードウェア概要

<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
        <th>XIAO MG24</th>
        <th>Grove - 温度＆湿度センサー (SHT31)</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

## ソフトウェア概要

### Sonoff ZBDongle-E ドングルのファームウェア書き換え

Sonoff ZBDongle-E ドングルは、Zigbeeデバイスとの通信のみを許可するファームウェアがプリインストールされています。Thread無線プロトコルで動作させるには、新しいファームウェアを書き込む必要があります。Chromeブラウザを使用して、https://darkxst.github.io/silabs-firmware-builder からドングルのファームウェアを直接更新できます。ドングルをコンピュータに挿入した後、「Connect」をクリックし、「OpenThread」ファームウェアを選択してファームウェアを変更してください。
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

### Matter 温度と湿度センサーのデバイス設定

XIAO MG24 を初めて Matter デバイスとして使用する場合は、この [wiki](https://wiki.seeedstudio.com/ja/xiao_mg24_matter/) を参照して設定方法を確認してください。

- **ステップ 1.** Github から [ライブラリ](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) をダウンロードします。

- **ステップ 2.** [Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照してライブラリをインストールします。

- **ステップ 3.** Arduino IDE を再起動します。新しいスケッチを開き、以下のコードを新しいスケッチにコピーしてください。

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
  Serial.println("開始...");  
  sht31.begin();  
  
  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("温度: %.02f\n", temperature);
  Serial.printf("湿度: %.02f\n", humidity);

  Matter.begin();
  matter_temp_sensor.begin();
  matter_humidity_sensor.begin();
  matter_temp_sensor.set_device_name("XIAO_MG24");
  matter_temp_sensor.set_vendor_name("Seeed_Studio");
  matter_temp_sensor.set_product_name("Matter_SHT31");

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter デバイスがコミッションされていません");
    Serial.println("手動ペアリングコードまたはQRコードを使用してMatterハブにコミッションしてください");
    Serial.printf("手動ペアリングコード: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QRコードURL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }
  Serial.println("Matter デバイスがコミッションされました。Threadネットワークを待機中...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("デバイスがThreadネットワークに接続されました");
  Serial.println("Matter デバイスの検出を待機中...");
  while (!matter_temp_sensor.is_online() || !matter_humidity_sensor.is_online()) {
    delay(200);
  }
  Serial.println("Matter デバイスがオンラインになりました");
}

void loop() {

  delay(1000);

  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("温度: %.02f\n", temperature);
  Serial.printf("湿度: %.02f\n", humidity);

  matter_temp_sensor.set_measured_value_celsius(temperature);
  matter_humidity_sensor.set_measured_value(humidity);


  LowPower.sleep(600000);
}
```

### HomeAssistantの設定

**セット1. アドオンストア**

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

**セット2. Threadの設定**

OpenThread Border Routerプラグインを追加します。このプラグインを使用すると、Threadネットワークを作成または参加し、Home AssistantをThread Border Routerに変換することができます！
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

### モバイルでのHome Assistant設定

MatterデバイスをHome Assistantに追加するには、スマートフォンにHome Assistantアプリをインストールする必要があります。スマートフォンはMatterの「コーディネーター」として機能し、新しいデバイスをMatterネットワークに追加し、セキュリティ設定を行います。一方、HomeAssistant GreenはMatterの「コントローラー」として機能し、Matterネットワークに接続されたすべてのデバイスを管理します。

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

新しいMatterデバイスをホームオートメーションシステムに組み込むには、「Matterデバイスを追加」を選択し、デバイスに付属しているQRコードをスキャンします。このチュートリアルでは、CHIPウェブサイトを使用してQRコードを生成する方法を示します。これは、XIAO MG24のシリアルモニターで提供されるURLに基づいています。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone7.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone6.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone8.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone9.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### HAパネルで温度と湿度を確認

QRコードが正常に追加されると、HAパネルで温度と湿度センサーを確認することができます！

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result3.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
</table>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>