---
description: XIAO MG24 例 - Matter
title: Seeed Studio XIAO MG24 例 - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /ja/xiao_mg24_matter
sidebar_position: 2
last_update:
  date: 11/07/2024
  author: Spencer
---

## はじめに

Matterは、スマートホーム技術のための**オープンソースの統一規格**であり、デバイスとエコシステム間の相互運用性を促進します。Connectivity Standards Alliance（CSA）によって開発されたMatterは、インターネット接続を必要とせずに、さまざまなメーカーのデバイス間でシームレスな通信を可能にします。MatterはApple HomeKit、Google Home、Amazon Alexaなどのプラットフォームとのネイティブ互換性をサポートし、スマートホームセットアップ全体でデバイスを統合することを容易にします。Matterのより深い理解については、[公式Matterドキュメント](https://project-chip.github.io/connectedhomeip-doc/index.html)を参照してください。

> 2024年[^1]、Silicon LabsとArduinoが協力してMatter採用の障壁を下げ、ArduinoエコシステムでMatterを使用することを簡素化する開発パスを提供しました。この協力は、Matter開発をよりアクセスしやすくし、Arduino開発者が典型的な課題を克服してMatterをシームレスに採用することを支援することを目的としています。

[^1]: [Silicon Labs and Arduino Partner to Democratize Matter - Feb 6, 2024](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matterはローカルネットワーク上で効率的に動作し、インターネットアクセスを必要とせずに信頼性の高い低遅延通信を提供します。この機能により、セキュリティとデバイスパフォーマンスの両方が大幅に向上します。

このドキュメントでは、Arduinoを使用してXIAO MG24でMatterアプリケーションを開発する手順をガイドします。

## 前提条件

XIAO MG24でMatterアプリケーションの開発を開始するには、以下のハードウェアとソフトウェアコンポーネントが準備され、使用可能であることを確認してください。

### ハードウェア

- **Seeed Studio XIAO MG24**ボード。
- **サポートされているMatterハブ**（例：Apple HomePod mini）でMatterネットワークに接続。
- **Matterコントローラー**（例：Apple HomeKit App）でMatter対応デバイスを管理し、相互作用。

以下の表[^2]は、さまざまなエコシステムでのMatter互換ハブの例を示しています：

| メーカー / エコシステム | デバイス                   |
| ----------------------- | -------------------------- |
| Google Home             | Nest Hub Gen2              |
| Apple HomeKit           | HomePod Gen2, HomePod mini |
| Amazon Alexa            | Echo Gen4                  |
| Raspberry Pi OTBR       | Raspberry Pi               |

デフォルトでは、少なくとも1つの[Matter Hub](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs)と1つのMatterコントローラー（例：HomeKitがインストールされたiPhone）がテスト用に準備されていることを前提としています。

[^2]: [README - Arduino Matter library](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### ソフトウェア

必要なソフトウェアには**Silicon LabsのArduino Coreを含むArduino IDE**が含まれます：

- まだインストールされていない場合は、XIAO MG24との互換性のために[Silicon Labs Arduino Core](https://github.com/SiliconLabs/arduino)をダウンロードしてセットアップしてください。
- 詳細なセットアップ手順については、[Getting Started Guide](/ja/xiao_mg24_getting_started/#add-board)を参照してください。

Matterプロトコルスタックを選択することを確認してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## Matter Bulbサンプルでのクイックスタート

[Matter Light Bulb Example](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb)は、シンプルなMatterアプリケーションを実演し、Matterネットワーク経由で`内蔵LED`の制御を可能にします。このサンプルは、XIAO MG24でのMatter統合に初めて取り組む開発者にとって実用的な出発点として機能します。

Arduino IDEでサンプルにアクセスするには：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

便宜上、個人化されたセットアップを可能にするために、サンプルコード内のデバイス名の変更が以下に提供されています。

```cpp
/*
   Matter lightbulb example

   The example shows how to create a simple on/off lightbulb with the Arduino Matter API.

   The example lets users control the onboard LED through Matter.
   The device has to be commissioned to a Matter hub first.

   Author: Tamas Jozsi (Silicon Labs)
   Modified by: Spencer Y (Seeed Studio)
 */
#include <Matter.h>
#include <MatterLightbulb.h>

MatterLightbulb matter_bulb;

void setup()
{
  Serial.begin(115200);
  Matter.begin();
  matter_bulb.begin();

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);

  Serial.println("Matter lightbulb");

  matter_bulb.set_device_name("XIAO MG24 bulb");    // Customize the default device name
  matter_bulb.set_vendor_name("Seeed Studio");      // Set the vendor name
  matter_bulb.set_product_name("Seeed Matter Lightbulb"); // Define the product name

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("Waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Connected to Thread network");

  Serial.println("Waiting for Matter device discovery...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // Turn on the LED if the state is ON and the previous state was OFF
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("Bulb ON");
  }

  // Turn off the LED if the state is OFF and the previous state was ON
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("Bulb OFF");
  }
}
```

### ファームウェアの書き込み

1. コードをArduino IDEにコピーし、XIAO MG24 ボードにアップロードします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. ファームウェアの書き込み後、`RESET`ボタンを押すか、XIAO MG24 を再接続してボードを再起動します。
3. シリアルモニターを開いてセットアップを確認します。以下のような出力が表示されるはずです：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### コミッショニング用QRコード

シリアルモニターには、デバイスのコミッショニングに必要なQRコードを生成するためのURLが表示されます。URLをコピーしてブラウザに貼り付け、生成されたQRコードをMatterコントローラー（例：HomeKit）でスキャンします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### デバイスのテスト

QRコードをスキャンした後、Matterコントローラー（HomeKit）がデバイスの身元確認を求めます。確認後、デバイスがアプリに表示されます。これで、XIAO MG24 の内蔵LEDを制御し、アプリインターフェースから直接その応答性をテストできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="MG24 Matter Lightbulb Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

## 参考資料とリソース

Matterが初めての場合、以下のリソースはMatterエコシステム内での作業に必要な基礎知識と開発サポートを提供します：

- **[クイックスタートガイド](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：Matterの基礎を学ぶのに理想的な出発点で、エコシステムの重要な概念とコンポーネントをカバーしています。
- **[Matter開発者ジャーニー](https://www.silabs.com/wireless/matter/matter-developer-journey)**：Matter開発プロセスの包括的なガイドで、効果的な実装に必要なツール、リソース、ベストプラクティスを含みます。
- **[Matter仕様書](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matterプロトコルとそのコンポーネントの技術仕様。これはプロトコルの機能と動作詳細を理解するための主要なリソースです。
- **[デバイスデータモデル - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**：デバイスデータモデルの詳細な説明で、Matterエコシステムにおけるデバイス機能と能力の表現方法を標準化します。
- **[Matter開発フレームワーク概要](/ja/matter_development_framework)**：XIAO ESP32C6 用のMatter開発フレームワークに特化したガイドで、Matterデバイス開発の代替アプローチを提供します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
