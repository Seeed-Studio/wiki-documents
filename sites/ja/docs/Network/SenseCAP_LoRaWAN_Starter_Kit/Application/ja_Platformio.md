---
description: Wio-E5 モジュールと Arduino を使用した PlatformIO による LoRa 通信の初心者向けガイド
title: PlatformIO を使用した Wio-E5 による LoRaWAN
keywords:
    - lorawan
    - grove
    - platformio
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg
slug: /ja/platformio_wio_e5
toc_max_heading_level: 4
sidebar_position: 1
last_update:
    date: 2024-01-26T06:59:58.390Z
    author: Spencer
---


# PlatformIO を使用した Wio-E5 と Arduino による LoRaWAN の始め方

Long Range のネットワークアーキテクチャやアプリケーションなどの特徴について学びたい場合は、この記事 [LoRapedia: Long Range とその詳細な紹介](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) をチェックしてください。この記事では、Long Range が何であるか、どのように機能するか、その利点と欠点について説明しています。

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://wdcdn.qpic.cn/MTIzNDU2Nzg5_993734_kw1N-KbhpVV3i5EZ_1693791639?w=1844&h=904" alt="LoRaWAN フレームワーク " />
<div style={{ marginTop: '-8px' }}><em>LoRaWAN ネットワークフレームワーク</em></div>

</div>  


## はじめに

このガイドでは、PlatformIO を使用して XIAO ESP32S3 と Wio-E5 LoRa モジュールを使用する方法を詳しく説明します。このガイドは、Arduino 互換のボードであればどれでも適用可能です。

主な学習内容:

1. **Wio-E5 の Arduino ライブラリプログラミング**: 基本的な AT コマンド制御を超えて、効率的なプログラミングのために Arduino ライブラリを活用します。
2. **LoRaWAN ネットワーク統合**: Wio-E5 を LoRaWAN ネットワークに接続する手順。
3. **アップリンクとダウンリンクの実装**: ネットワークへのデータ送信とネットワークからのデータ受信の管理。

このアプリケーションでは、標準的なハードウェア構成を変更し、OLED を使用して直接データを視覚化し、CircleLED をダウンリンクのインジケーターとして使用します。また、DHT11 センサーのデータ報告を組み込むことで、実践的な実装を通じて学習プロセスを簡素化します。

<!-- 上传下达数据的说明 不够清晰 -->

## 前提条件

### ハードウェア

- **[XIAO ESP32S3](/ja/xiao_esp32s3_getting_started/)**: Arduino 互換で、多様な IoT プロジェクトに最適な汎用ボードです。必要に応じて、他の Arduino 互換ボードに置き換えることができます。
- **[Grove - DHT11](/ja/Grove-TemperatureAndHumidity_Sensor)**: 環境データ収集用で、多くの IoT アプリケーションに不可欠です。
- **[Grove - Circular LED](/ja/Grove-Circular_LED)**: ライト制御に使用されます。これは制御可能なデバイスの例であり、必要に応じて他のコンポーネントに置き換えることができます。
- **[Grove - OLED Display](https://wiki.seeedstudio.com/ja/Grove-OLED-Display-0.96-SSD1315/)**: 視覚的なデータ表示機能をプロジェクトに追加します。このコンポーネントはオプションですが、よりインタラクティブなユーザーインターフェースを提供するために推奨されます。
- **[Grove - Wio-E5 LoRa Module](/ja/Grove_LoRa_E5_New_Version/)**: 長距離、低消費電力のワイヤレス通信を提供し、LoRaWAN アプリケーションに最適です。
- **[SenseCAP M2 Multi-Platform Gateway](/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/)**: Wio-E5 モジュールと LoRaWAN ネットワーク間の通信を可能にする重要なコンポーネントです。

### ソフトウェア

#### PlatformIO

<div align="center">
    <img class="border-radius: 10px;" src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png" height="220" alt="PlatformIO ロゴ"  title="PlatformIO: 組み込み開発のためのプロフェッショナルなコラボレーションプラットフォーム"/>
</div>

このプロジェクトでは、以下の利点を提供する PlatformIO を活用します:

- **効率的なライブラリ管理**: PlatformIO はライブラリの簡単かつ効果的な管理を可能にし、プロジェクトが常に最新の進歩に対応できるようにします。
- **VSCode 統合**: この統合により、コードのハイライトや IntelliSense を備えた開発体験が大幅に向上し、スムーズで効率的なコーディングプロセスを実現します。
- **簡単なライブラリ追加と設定**: PlatformIO を使用すると、ライブラリの追加と設定が簡単で、プロジェクトの特定のニーズに迅速にカスタマイズできます。

:::info
PlatformIO に不慣れな方や理解を深めたい方は、以下のリソースから始めてください:

- [PlatformIO IDE を使用した Arduino プログラミング方法](/ja/Software-PlatformIO) – 初心者向けのガイドです。
- [PlatformIO 公式ウェブサイト](https://platformio.org/) – 詳細で包括的な説明を提供します。
:::

#### LoRaWAN ネットワークサーバー (ChirpStack)

このセクションでは、ローカル LoRaWAN ネットワークサーバーに接続する方法を説明します。主な例として [ChirpStack](https://www.chirpstack.io/) プラットフォームを使用します。特に [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) を使用する方法に焦点を当てます。

:::info
ChirpStack の以下の手順に不慣れな場合は:

- デバイスプロファイルの作成
- アプリケーションの追加
- アプリケーション内でのデバイス登録

以下のリソースから学ぶことができます:

- [LoRaWAN ネットワークサーバーへのデバイス登録](/ja/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway)
- [SenseCAP M2 MP Gateway LNS 設定](/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration)

*次のセクションで一緒に行います*。
:::

:::tip
AWS IoT や TTN などの代替プラットフォームを好む方は、以下のガイドを参照してください:

- [AWS IoT への接続](/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/)
- [TTN への接続](/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/)
:::


## 準備作業

では、始めましょう。以下の作業を行います。

### LoRaWAN ネットワーク

Wio-E5 モジュールを使用して LoRaWAN ネットワークと通信を成功させるためには、以下の重要な点を確認する必要があります：

1. **LoRaWAN カバレッジ:** 
   - デバイスが LoRaWAN ネットワークのカバレッジエリア内にあることを確認してください。例えば、私の場合、デバイスは EU868 周波数帯で動作する M2 ゲートウェイによってカバーされています。これは重要であり、デバイスが同じ周波数帯をサポートする近くの LoRaWAN ゲートウェイと通信する必要があります。

2. **ゲートウェイの LNS へのリンク:** 
   - また、これらのゲートウェイのいずれかが使用する予定の LoRaWAN ネットワークサーバー (LNS) にリンクされていることを確認することも重要です。このリンクは重要であり、ゲートウェイは Wio-E5 デバイスとネットワークサーバー間の橋渡しをするだけでなく、デバイスのデータがサーバーに到達する経路を決定します。


#### 接続パラメータを取得する

前のセクションで ChirpStack ネットワークサーバーをすでに設定していると仮定すると、次のステップは必要なネットワーク接続パラメータを収集することです。これらのパラメータは、デバイスがネットワークに正常に接続し、アクセスするために不可欠です。

詳細なステップバイステップのチュートリアルについては、[LoRaWAN ネットワークサーバーにデバイスを登録する](/ja/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway) セクションを参照してください。

#### デバイスプロファイルを追加する

Wio-E5 モジュールはデフォルトで Regional Parameter *V102B* を使用するよう設定されています。この情報は [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf) の `4.28.13 VER セクション` に基づいています。

したがって、`LoRaWAN 1.0.2` を MAC バージョンとして選択し、`RP002-1.0.2` を Regional Parameter リビジョンとして選択します。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/device_profile.png"/>
</div>

デバイスで Class C を使用する必要がある場合は、以下のボタンをクリックして有効化できます：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/activate_class_c.png"/>
</div>

<!-- 追加の CodeC 情報はここに追加されます -->

#### アプリケーションを追加する

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_application.png"/>
</div>

#### デバイスを追加する

デバイス EUI (EUI64) を入力する必要があります。このセクションではその情報を使用します。
<!-- TBD -->

変更した場合は、この [セクション](#get_eui) に移動して `DevAddr`、`DevEui`、`AppEui` を取得してください。

または、新しい DevEUi を使用したい場合は、それを再生成して送信することもできます。

<div align="center">
  <img class='border-radius: 10px;' width={520} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_device.png"/>
</div>

そして `AppKey` を取得します：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/get_appKey.png"/>
</div>

:::note デバイス情報
ここまでで、LoRaWAN ネットワークへの接続操作に必要な以下の認証情報を取得しました：

- **DevEUI:** `2cf7f1205100a785`
- **AppKey:** `19aee7bedec56509a9c66a44b7956b6f`

これらの認証情報は、デバイスが LoRaWAN ネットワークに安全に登録し、通信するために不可欠です。
:::

:::tip なぜ AppEUI が必要ないのか？
LoRaWAN の文脈では、DevEUI と AppKey はデバイスの識別と安全な通信において重要な役割を果たします。AppEUI（LoRaWAN 1.1 以降では JoinEUI としても知られる）は、通常、デバイス接続プロセス中にデバイスが接続すべきアプリケーションサーバーインスタンスを識別するために使用されます。しかし、一部のネットワーク構成や特定のネットワークサーバー実装（例えば The Things Network (TTN)）では、AppEUI が必須ではない場合やすでに事前定義されている場合があります。このアプローチは、設定する必要のあるパラメータの数を減らすことでデバイス設定プロセスを簡素化します。したがって、ネットワークサーバーの特性やその構成に基づいて、接続プロセスで AppEUI を明示的に使用する必要がない場合があります。
:::

## ハンズオン

#### 新しい PlatformIO プロジェクトの開始

まず、PlatformIO プロジェクトを作成します。以下の手順に従ってください：

1. **PlatformIO を開く:** コンピュータで PlatformIO IDE を開きます。

2. **新しいプロジェクトを作成:** メインメニューから **New Project** を選択します。

以下は、PlatformIO で新しいプロジェクトを作成する際の例の画像です：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/create_project.png"/>
</div>

このプロジェクトでは、開発ボードとして **XIAO ESP32S3** を選択します。

XIAO ESP32S3 用のプロジェクト作成例：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/xiaos3_prj.png"/>
</div>

**必要なライブラリを追加する:**

プロジェクトを作成した後、プロジェクトに必要なライブラリをいくつか追加する必要があります。以下のライブラリを `platformio.ini` ファイルに追加することで、PlatformIO が自動的にダウンロードします：

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
lib_deps = 
    olikraus/U8g2@^2.35.9
    plerup/EspSoftwareSerial@^8.2.0
    https://github.com/dok-net/ghostl # 問題修正: https://github.com/plerup/espsoftwareserial/issues/305#issuecomment-1880188894
    seeed-studio/Grove Temperature And Humidity Sensor@^2.0.2
    seeed-studio/Grove LED Bar@^1.0.0
    https://github.com/andresoliva/LoRa-E5
```

PlatformIO ライブラリマネージャーがリクエストを処理し終えると、プロジェクトに追加されたすべてのライブラリが確認できます。これらのライブラリは、選択したボード（この場合は Seeed XIAO ESP32S3）に特化した `.pio/libdeps/seeed_xiao_esp32s3` ディレクトリに保存されます。

以下は、ライブラリが正常に追加された後の PlatformIO 環境の例の画像です：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/platformio_libraries.png"/>
</div>

このディレクトリには、`platformio.ini` ファイルで指定した各ライブラリのフォルダが含まれています。これらのフォルダには、ソースコード、例、追加のメタデータなど、各ライブラリに必要なファイルが含まれています。

この構成により、ライブラリの管理と更新が容易になります。PlatformIO は互換性と依存関係の解決を自動的に処理し、開発プロセスをスムーズかつ効率的にします。また、PlatformIO ライブラリマネージャーを使用してライブラリを簡単に更新または削除でき、開発環境を最新のライブラリバージョンで維持できます。

#### LoRaWAN ネットワークへの参加（テスト）

このセクションでは、[andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5) を使用して Wio-E5 を LoRaWAN ネットワークに参加させます。手動で AT コマンドを使用する代わりに、このライブラリを活用します。

```cpp
#include <Arduino.h>
#include <LoRa-E5.h> // LoRa のメインライブラリ

#ifdef U8X8_HAVE_HW_SPI
    #include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
    #include <Wire.h>
#endif

// ハイライト開始
#if defined(ARDUINO_ARCH_AVR)
    #define serialLog Serial

#elif defined(ARDUINO_ARCH_SAMD) || defined(ARDUINO_ARCH_SAM)
    #define serialLog SerialUSB
#else
    #define serialLog Serial
#endif
// ハイライト終了

const int RXPin = D7, TXPin = D6; // Wio-E5 の RX, TX ピン番号を置き換えてください

/************************LORA 設定*******************************************************************/
#define LoRa_APPKEY           "19aee7bedec56509a9c66a44b7956b6f" /*このアプリ用のカスタムキー*/
#define LoRa_FREQ_standard    EU868                              /*国際周波数帯域。詳細は以下を参照*/
#define LoRa_DR               DR4                                /*DR5=5.2kbps //データレート。詳細は https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/ を参照*/
#define LoRa_DEVICE_CLASS     CLASS_C                            /*CLASS_A は省電力ノード用。Class C は他のデバイスアプリケーション用*/
#define LoRa_PORT_BYTES       8                                  /*バイナリ値を送信するノードポート。アプリがバイトを受信していることを認識可能*/
#define LoRa_PORT_STRING      7                                  /*文字列メッセージを送信するノードポート。アプリが文字列/テキストを受信していることを認識可能*/
#define LoRa_POWER            14                                 /*ノードの送信（Tx）電力*/
#define LoRa_CHANNEL          0                                  /*ノードの選択された送信チャネル。デフォルトは 0。例として 2 を使用*/
#define LoRa_ADR_FLAG         false                              /*ADR（適応データレート）ステータスフラグ（True または False）。ノードが移動している場合は False を使用*/
/*パケットを再送信するまでの待機時間*/
#define Tx_delay_s            9.5 /*送信間の遅延（秒単位）*/
/*パケット情報*/
#define PAYLOAD_FIRST_TX      10   /*最初のパケットに送信するバイト数*/
#define Tx_and_ACK_RX_timeout 6000 /*SF12 の場合は 6000、SF11 の場合は 4000、SF9/8 の場合は 2000、SF7 の場合は 1500。すべての例は 50 バイトのペイロードと BW125 を考慮*/
/*送信に使用するバッファ*/
unsigned char buffer_binary[128] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
char          buffer_char[50]    = "I am sending this message to a LoRa Gateway."; /**/
/*******************************************************************/
/*LoRa モジュールを希望の設定でセットアップ*/
void LoRa_setup(void) {
    lora.setDeviceMode(LWOTAA); /*LWOTAA または LWABP。ここでは LWOTAA を使用*/
    lora.setDataRate((_data_rate_t)LoRa_DR, (_physical_type_t)LoRa_FREQ_standard);
    lora.setKey(NULL, NULL, LoRa_APPKEY);                /*OOTA 使用時は App key のみ設定*/
    lora.setClassType((_class_type_t)LoRa_DEVICE_CLASS); /*デバイスクラスを設定*/
    lora.setPort(LoRa_PORT_BYTES);                       /*データ送信用のデフォルトポートを設定*/
    lora.setPower(LoRa_POWER);                           /*送信電力を設定*/
    lora.setChannel(LoRa_CHANNEL);                       /*チャネルを選択*/
    lora.setAdaptiveDataRate(LoRa_ADR_FLAG);             /*適応データレートを有効化*/
}

void setup() {
    serialLog.begin(9600);
    while (!serialLog)
        ; // シリアルが準備完了するまで待機
    lora.init(TXPin, RXPin);
    /*デバイスをセットアップ。すべてのパラメータを設定してからネットワークに参加する必要があります。
     パラメータを変更した場合（チャネルまたはポート設定以外）、適切に動作させるためにネットワークに再参加する必要があります*/
    LoRa_setup();
    /*ネットワーク参加が完了するまでループに入る*/
    serialLog.println("ネットワークへの参加を待機中...");
    while (lora.setOTAAJoin(JOIN, 10000) == 0)
        ; // ネットワークに参加するまで無限に試行。詳細は https://www.thethingsnetwork.org/docs/lorawan/message-types/ を参照
    /*次の送信サイクルまで LoRa モジュールをパワーダウン*/
    lora.setDeviceLowPower();
    serialLog.println("ネットワークへの参加に成功しました！");
}

void loop() {

    /*LoRa モジュールをウェイクアップ*/
    lora.setDeviceWakeUp(); /*モジュールがスリープ状態でない場合、このコマンドは何もしません*/

    /*-----------文字列メッセージを送信*/
    lora.setPort(LoRa_PORT_STRING); /*文字列を期待する受信ゲートウェイで設定されたポートを設定*/
    lora.transferPacketWithConfirmed(buffer_char, Tx_and_ACK_RX_timeout);
    /*--------バイトメッセージを送信*/
    lora.setPort(LoRa_PORT_BYTES); /*バイトを期待する受信ゲートウェイで設定されたポートを設定*/
    lora.transferPacketWithConfirmed(buffer_binary, PAYLOAD_FIRST_TX, Tx_and_ACK_RX_timeout);

    /*次の送信サイクルまで LoRa モジュールをパワーダウン*/
    lora.setDeviceLowPower();
    delay((unsigned int)(Tx_delay_s*1000));/*秒単位の値をミリ秒に変換*/
}
```

これをビルドしてボードにフラッシュしましょう。

<!-- <div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/build_flash.png"/>
</div> -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/flash_success_lorawan_test.png"/> 
</div>

<!-- ビルドとフラッシュのフラグを追加 -->

これでメッセージが表示されるのが確認できます。そして、2つのメッセージが出力されているのがわかります。

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_event_package.png"/> 
</div>

データ `00010203040506070809` は、`buffer_binary` 配列からのものであることが簡単に理解できます。

また、データ `SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4=` も出力されています。これは何を意味しているのでしょうか？このパッケージは base64 でエンコードされています。
[base64 Decode](https://emn178.github.io/online-tools/base64_decode.html) を利用して文字列を確認することができます。

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={420} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_string_decode.png" alt="decode " />
<div style={{ marginTop: '-8px' }}><em><a href="https://emn178.github.io/online-tools/base64_decode.html?input=SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4%3D">🖱️ ここをクリックしてデコード</a></em></div>

</div>

はい、これは `buffer_char` 配列からのもので、内容は `I am sending this message to a LoRa Gateway`（私はこのメッセージをLoRaゲートウェイに送信しています）です。

## トラブルシューティング

### Q1: Grove_LED_Bar ライブラリの問題

Grove_LED_Bar ライブラリで問題が発生している場合は、以下のマクロ定義を `Grove_LED_Bar.cpp` ファイルの先頭に追加してください。

```cpp
#include "Grove_LED_Bar.h"
// 競合を解決するためにこれらのマクロを追加
// highlight-start
#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))
// highlight-end
```

このコードは `max` および `min` マクロを定義し、ライブラリ内でこれらの関数に関連するコンパイルエラーを修正するのに役立ちます。

## リソース

- [Grove - Wio-E5 | Wiki](/ja/Grove_LoRa_E5_New_Version/)
- [Wio-E5 AT コマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

#### LoRaE5 ライブラリ
Wio E5 モジュールにはいくつかのライブラリが利用可能です：

- [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5)
- [idreamsi/LoRaE5](https://github.com/idreamsi/LoRaE5)
- [disk91/Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>