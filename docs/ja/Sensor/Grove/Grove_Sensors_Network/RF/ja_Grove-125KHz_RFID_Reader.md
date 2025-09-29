---
title: Grove - 125KHz RFID Reader
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-125KHz_RFID_Reader/
slug: /ja/Grove-125KHz_RFID_Reader
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Grove-125KHz_RFID_Reader.jpg)

この Grove-125KHz RFID Reader は、uem4100 RFIDカード情報を読み取るためのモジュールで、出力形式としてUartとWiegandの2種類をサポートしています。最大7cmの感知距離を持つ高感度を備えています。また、このモジュールには[電子ブリック版](https://www.seeedstudio.com/depot/electronic-brick-125khz-rfid-card-reader-p-702.html?cPath=52)も存在します。このモジュールは、IoT（モノのインターネット）やアクセス制御システムのプロジェクトに役立ちます。

RFIDリーダーを使用する際には、以下のモジュールを使用する必要があります：

- [RFIDタグコンボ（125kHz）](https://www.seeedstudio.com/depot/rfid-tag-combo-125khz-5-pcs-p-700.html?cPath=19_24)

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)

## バージョン

| 製品バージョン | 変更点 | リリース日 |
|-----------------|---------|---------------|
| Grove - 125KHz RFID Reader V1.0 | 初版 | 2015年10月 |

## 仕様

|パラメータ| 値/範囲|
|:------|:------------------|
|電圧| 4.75-5.25V|
|動作周波数| 125 KHz|
|最大感知距離|70mm|
|TTL出力| 9600ボーレート、8データビット、1ストップビット、検証ビットなし|
|Wiegand出力|26ビットWiegand形式、1偶数検証ビット、24データビット、1奇数検証ビット|

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記に記載されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド | Grove - 125KHz RFIDリーダー |
|----------------|----------------|-----------------------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/gr125k_01.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)|

- **ステップ 2.** Grove - 125KHz RFIDリーダーをGroveベースシールドのポート**D2**に接続します。
- **ステップ 3.** Grove - ベースシールドをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/RFID_reader.jpg)

:::note
 Groveベースシールドがない場合でも、以下のようにGrove_Ultrasonic_RangerをSeeeduinoに直接接続することができます。
:::
| Seeeduino     | Grove - 125KHz RFIDリーダー |
|---------------|----------------------------|
| 5V            | 赤                         |
| GND           | 黒                         |
| D3            | 白                         |
| D2            | 黄                         |

#### ソフトウェア

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
/*
  コンピュータとSoftSerialシールド間のリンク
  9600 bps 8-N-1で通信
  コンピュータはハードウェアUARTに接続
  SoftSerialシールドはソフトウェアUART:D2&D3に接続
*/
 
#include <SoftwareSerial.h>
 
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];       // シリアルポート経由で受信するデータ用のバッファ配列
int count = 0;                  // バッファ配列のカウンタ
 
void setup()
{
    SoftSerial.begin(9600);     // SoftSerialのボーレート
    Serial.begin(9600);         // Arduinoのシリアルポートのボーレート
}
 
void loop()
{
    // ソフトウェアシリアルポートからデータが来ている場合 ==> SoftSerialシールドからデータが来ている
    if (SoftSerial.available())              
    {
        while(SoftSerial.available())               // データをchar配列に読み込む
        {
            buffer[count++] = SoftSerial.read();      // 配列にデータを書き込む
            if(count == 64)break;
        }
        Serial.write(buffer, count);     // データ送信が終了していない場合、バッファをハードウェアシリアルポートに書き込む
        clearBufferArray();             // 配列に保存されたデータをクリアするためにclearBufferArray関数を呼び出す
        count = 0;                      // whileループのカウンタをゼロに設定
    }
    if (Serial.available())             // ハードウェアシリアルポートにデータがある場合 ==> PCまたはノートブックからデータが来ている
    SoftSerial.write(Serial.read());    // それをSoftSerialシールドに書き込む
}
void clearBufferArray()                 // バッファ配列をクリアする関数
{
    // 配列のすべてのインデックスをNULLでクリア
    for (int i=0; i<count; i++)
    {
        buffer[i]=NULL;
    }                  
}
```

- **ステップ 2.** シリアルモニタを開くと、カード情報が以下のように表示されます：

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Read_Data_.jpg)

## Wiegandモード

（ジャンパーを右側の2つのピンに設定）
このモードに入るには、ジャンパーを「W」に設定する必要があります。  
Seeeduino用の[Wiegandデモコード](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip)は、割り込みモードでWiegandデータを読み取るように設計されています。

Wiegandモードでは、出力データは26ビットでフォーマットされており、24ビットのカード情報と2ビットのパリティが含まれています。

<table border={1}>
  <tbody><tr style={{fontWeight: 'bold'}}>
      <td width={20}>
        ビット
      </td>
      <td width={20}>
        0
      </td>
      <td width={20}>
        1
      </td>
      <td width={20}>
        2
      </td>
      <td width={20}>
        3
      </td>
      <td width={20}>
        4
      </td>
      <td width={20}>
        5
      </td>
      <td width={20}>
        6
      </td>
      <td width={20}>
        7
      </td>
      <td width={20}>
        8
      </td>
      <td width={20}>
        9
      </td>
      <td width={20}>
        10
      </td>
      <td width={20}>
        11
      </td>
      <td width={20}>
        12
      </td>
      <td width={20}>
        13
      </td>
      <td width={20}>
        14
      </td>
      <td width={20}>
        15
      </td>
      <td width={20}>
        16
      </td>
      <td width={20}>
        17
      </td>
      <td width={20}>
        18
      </td>
      <td width={20}>
        19
      </td>
      <td width={20}>
        20
      </td>
      <td width={20}>
        21
      </td>
      <td width={20}>
        22
      </td>
      <td width={20}>
        23
      </td>
      <td width={20}>
        24
      </td>
      <td width={20}>
        25
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        PE
      </td>
      <td colSpan={24} rowSpan={1}>
        D
      </td>
      <td>
        P0
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={12} rowSpan={1}>
        E
      </td>
      <td colSpan={12} rowSpan={1}>
        0
      </td>
      <td>
        -
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={8} rowSpan={1}>
        D2[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D1[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D0[7..0]
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody></table>

- PEは偶数ビット、P0は奇数ビットです。
- Eは偶数に関与するデータビット、Oは奇数に関与するデータビットです。
- DX\[7..0\]は、Mifare@ Standard & Lightカードの読み取り専用IDに対応するデータビットです。

## よくある質問（FAQs）

**Q1: 出力をカード番号に変換する方法は？**

A1: 以下の手順に従ってください。

- 例としてID: 0009776930を使用します。
- カード番号ID: 0009776930 ------- 10進数 [スタートビット(00) + カード番号(8桁)]
- 出力: 0700952F229F ------------- 16進数 [スタートビット(07h) + カード番号(8桁) + チェックサム]
- 10進数と16進数の変換にはオンラインの計算機が利用可能です。

**Q2: タグを連続して読み取る方法は？**

A2: RFIDリーダーは設定なしでタグを連続して読み取ることができます。タグをアンテナから2.5〜4cmの距離に保つと、リーダーはデータを連続して読み取ります。距離が2.5cm未満の場合、タグを動かさない限りリーダーはデータを1回だけ読み取ります。

## リソース

- **[デモ]** [Grove - 125KHz RFID Reader デモ](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip)
- **[PDF]** [適合宣言書](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_Declaration%20of%20conformity.pdf)
- **[PDF]** [テストレポート](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_test%20report.pdf)

## プロジェクト

**Cayenne を使用した Arduino ベースのセキュリティプロジェクト**: Arduino を使用したホームセキュリティプロジェクト。侵入者が検知された際に SMS/メールアラートを送信。認証済みの担当者には個別のメッセージを送信。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>