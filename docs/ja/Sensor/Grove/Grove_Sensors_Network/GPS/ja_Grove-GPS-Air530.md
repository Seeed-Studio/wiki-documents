---
title: Grove - GPS (Air530)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-GPS-Air530/
slug: /ja/Grove-GPS-Air530
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/03.png)

都市部や少数の衛星モジュールのみでGPSがうまく動作しないことに困っていませんか？それなら、ぜひ新しいGrove-GPS (Air530)をお試しください。これは高性能で高度に統合されたマルチモード衛星位置決定およびナビゲーションモジュールです。GPS / Beidou / Glonass / Galileo / QZSS / SBASをサポートしており、車のナビゲーション、スマートウェア、ドローンなどのGNSS位置決定アプリケーションに適しています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)

:::tip
      [Seeed GPS Modules Selection Guide](https://wiki.seeedstudio.com/ja/GPS-Modules-Selection-Guide/)を公開しました。これにより、あなたのニーズに最適なGPSモジュールを選ぶ手助けができます。
:::

## 特徴

- コストパフォーマンスに優れる
- 高度に統合されたマルチモード衛星位置決定およびナビゲーション
- 簡単に展開できるコンパクトサイズ
- 小型で低消費電力

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| **パラメータ**    | **値**              |
|------------------|------------------------------|
|供給電圧|3.3V/5V|
|動作電流|最大60mA|
|ウォームスタート時間| 4秒|
|コールドブート時間| 30秒|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

このサンプルは、ソフトウェアシリアルを使用してGPSからデータを読み取り、それをシリアルポートに送信する簡単な例です。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - GPS (Air530)|
|--------------|-------------|-----------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/small.png)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

- **ステップ 2.** Grove - GPSをGrove-Base Shieldの**D2**ポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/Hardware_conection.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - GPSをSeeeduinoに直接接続することもできます。
:::
| Seeeduino     | Grove - GPS |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| D3            | 白                     |
| D2            | 黄色                   |

#### ソフトウェア

:::note
    u-centerソフトウェアはWindows専用ですのでご注意ください。
:::

- **ステップ 1.** [u-center](https://www.u-blox.com/en/product/u-center-windows)ソフトウェアをインストールします。
- **ステップ 2.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];                   // シリアルポート経由で受信するデータ用のバッファ配列
int count=0;                                // バッファ配列のカウンター
void setup()
{
    SoftSerial.begin(9600);                 // SoftSerialのボーレート
    Serial.begin(9600);                     // Arduinoのシリアルポートのボーレート
}

void loop()
{
    if (SoftSerial.available())                     // ソフトウェアシリアルポートからデータが来ている場合
    {
        while(SoftSerial.available())               // データを文字配列に読み込む
        {
            buffer[count++]=SoftSerial.read();      // 配列にデータを書き込む
            if(count == 64)break;
        }
        Serial.write(buffer,count);                 // データ送信が終了していない場合、バッファをハードウェアシリアルポートに書き込む
        clearBufferArray();                         // clearBufferArray関数を呼び出して配列内のデータをクリアする
        count = 0;                                  // whileループのカウンターをゼロに設定
    }
    if (Serial.available())                 // ハードウェアシリアルポートにデータがある場合（PCまたはノートブックからデータが来ている場合）
    SoftSerial.write(Serial.read());        // SoftSerialシールドに書き込む
}


void clearBufferArray()                     // バッファ配列をクリアする関数
{
    for (int i=0; i<count;i++)
    {
        buffer[i]=NULL;
    }                      // 配列のすべてのインデックスをNULLでクリア
}
```

- **ステップ 3.** U-centerを開きます。

- **ステップ 4.** Receiver -> Portをクリックし、Arduinoが使用しているCOMポートを選択します。

- **ステップ 5.** Receiver -> Baudrateをクリックし、9600が選択されていることを確認します。

- **ステップ 6.** View -> Text Consoleをクリックすると、NMEAデータがストリームされるウィンドウが表示されます。

- **ステップ 7.** シリアルモニターを開くと、以下のように表示されます：

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg)

**Google Earthでデータを表示することもできます：**

- **ステップ 1.** File -> Database Export -> Google Earth KMLをクリックします。

- **ステップ 2.** これにより、u-centerでキャプチャされた履歴がGoogle Earthで起動されます。

- **ステップ 3.** または、ツールバーの赤い丸を押してデータを記録し、保存場所を指定することができます。

- **ステップ 4.** 十分なデータをキャプチャしたら、黒い四角をクリックして記録を停止します。

- **ステップ 5.** 生成された.ubxファイルを[GPSVisualizer](http://www.gpsvisualizer.com/)にアップロードしてKMLに変換すると、以下のように地図上に位置（赤いスポット）が表示されます：

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/outcome.png)

:::note
        テストは屋外で行うことをお勧めします。信号伝送の悪さによる位置の不正確さを避けるためです。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [GPS 回路図 (PDF)](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip)
- **[PDF]** [Air 530 ユーザーブックレット](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_GPS から作成されました -->

## プロジェクト

**GPS/GPRS トラッカーのプロジェクト**: この新しいプロジェクトでは、GPRS技術とMQTTプロトコルを使用して接続されたGPSトラッカーを紹介します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>