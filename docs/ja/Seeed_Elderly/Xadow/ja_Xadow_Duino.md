---
description: Xadow - Duino
title: Xadow - Duino
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Duino
last_update:
  date: 05/15/2025
  author: shuxu hu
---


---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.JPG)

Xadow Duinoは、最も人気のあるRGB LED WS2812Bを使用して素晴らしい照明デバイスを構築するために特別に設計されています。MCU ATmega32u4をベースにしたこのデバイスは、内蔵のマイクロUSBを備えており、「RePhone Kit Create」のソフトウェアから直接RGB LEDを制御するか、Arduino IDEでボードをプログラムして独立して動作させることができます。他のアドオンモジュールとは異なり、このボードには独自のバッテリーソケット（JST1.0タイプ）があり、以下の方法で電源を供給できます：
- 5V USB経由（バッテリーが接続されている場合、同時にバッテリーを充電します）
- 3.7Vリポバッテリー経由
- ブレークアウトピン経由
- Xadow GSM+BLE経由

[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

## 特徴
---
- Arduinoのように動作可能
- RePhone Kit Createに接続するとプラグアンドプレイ
- オープンソースでモジュール設計
- スリムでコンパクト
- WS2812B専用設計
- 他のXadowモジュールとの柔軟な接続を可能にする11PIN Xadowコネクタ内蔵
- 他のXadowモジュールと積み重ね可能、チェーン接続可能、縫い付け可能
- LED愛好家に最適な選択肢

## 仕様
---
|項目|詳細|
|---|---|
|**マイクロコントローラー**|	ATmega32u4
|**電源供給**	|USB経由で5V、最大電流1.5A / バッテリーソケット経由で3.3〜4.2V、最大電流1.5A / ブレークアウトピン経由で3.3〜6V、最大電流500mA / Xadow GSM+BLE経由で3.3〜4.2V、最大電流500mA
|**充電電流**|	500mA
|**フラッシュメモリ**|	32KB（ATmega32u4）、うち4KBはブートローダーで使用
|**SRAM**|	2.5KB（ATmega32u4）
|**EEPROM**|	1KB（ATmega32u4）
|**クロックスピード**|	16MHz
|**コネクタ**|	2 × 11 PIN Xadowコネクタ RGB LED WS2812b用の接続パッド
|**インターフェース**|	Xadow GSM+BLEとのインターフェース / I2C（7ビットアドレス 0x23）
|**寸法**|	25.37mm × 20.30mm / 1”× 0.8”

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.png)

以下の画像は、Xadow Duinoの11ピンXadowコネクタのピン定義と、はんだ付け可能なブレークアウトピンを示しています。

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Pin_definitions.png)

## 照明を点灯させる
---
**RePhone Kit CreateでWS2812Bを制御する**

WS2812Bを制御する最も簡単な方法は、「RePhone Kit Create」に内蔵されたソフトウェアを使用することです。このソフトウェアには「アクチュエーターコントロール」アプリケーションが含まれており、以下の3つの方法でWS2812Bを点灯させることができます：

 1. 単色。
 2. マーキー。
 3. レインボー。

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_WS2812B.png)

**条件設定（If This Then That）**

「If This Then That」では、異なる条件を設定して、指定されたモードでWS2812Bを点灯させるようXadow Duinoをトリガーできます。

**Arduino IDEでプログラムする**

Arduino IDEを使用してコードを記述することで、光源をカスタマイズすることも可能です。

## Arduino IDEでXadow Duinoを使用する
---
Arduino IDEでXadow Duinoを使用するには、以下の簡単な手順を実行してください：
1. [ドライバーファイルをダウンロード](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)
2. ドライバーを正しくインストールするには、「ArduinoのダウンロードとArduinoドライバーのインストール」ページを参照してください。

ドライバーを正しくインストールした後、**スタート**ボタンをクリックし、**コントロールパネル**をクリックし、**システムとセキュリティ**をクリックし、その後、**システム**の下にある**デバイスマネージャー**をクリックして、**デバイスマネージャー**を開きます。管理者パスワードまたは確認を求められた場合は、パスワードを入力するか確認を行ってください。これで、**デバイスマネージャー**の**COMポート**が以下のように表示されるはずです：
- **Xadow Clip(COM20)**（COM番号はPCによって異なる場合があります。）

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Com_PORT.png)

3. 次に、[Xadow File Names](https://github.com/freespace/Files_For_Seeed_Main_Board)をダウンロードし、解凍して、...**\Files_For_Seeed_Main_Board-master.7z\Files_For_Seeed_Main_Board-master\v1.6.3\seeeduino\**に移動します。**seeeduino**という名前のフォルダを、Arduino IDEをインストールした場所の...**\arduino-1.6.6\hardware\**にコピーします。Arduino IDEのバージョンは異なる場合がありますが、ここではArduino IDE 1.6.6を使用しています。

4. 次に、LEDを点灯させてみましょう。Xadow DuinoをマイクロUSBでコンピュータに接続し、Arduino IDEを開き、**ツール** ==> **ボード** ==> **Seeeduino Xadow**を選択します：

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Board.jpg)

その後、**ポート**を**COM20(Seeeduino Xadow)**として選択します：

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Port.jpg)

5. 以下のコードをコピーしてください。もしWS2812bライブラリがない場合は、[こちら](https://github.com/adafruit/Adafruit_NeoPixel)からダウンロードしてください：

```c
#include <Adafruit_NeoPixel.h>

#define PIN 5   // Xadow DuinoはDIN/D5/PC6を使用してWS2812bを制御します

// パラメータ1 = ストリップ内のピクセル数
// パラメータ2 = ピン番号（ほとんどのピンが有効）
// パラメータ3 = ピクセルタイプフラグ、必要に応じて加算：
//   NEO_RGB     ピクセルはRGBビットストリーム用に配線されています
//   NEO_GRB     ピクセルはGRBビットストリーム用に配線されています
//   NEO_KHZ400  400 KHzビットストリーム（例：FLORAピクセル）
//   NEO_KHZ800  800 KHzビットストリーム（例：高密度LEDストリップ）
Adafruit_NeoPixel strip = Adafruit_NeoPixel(60, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  strip.begin();
  strip.show(); // すべてのピクセルを「オフ」に初期化

  // D13をOUTPUT & HIGHに設定することが非常に重要です。これを「GND」として動作させたいからです。
  pinMode(13,OUTPUT);
  digitalWrite(13,HIGH);
}

void loop() {
// ピクセルに表示する方法を示すいくつかの例：
  colorWipe(strip.Color(255, 0, 0), 50); // 赤
  colorWipe(strip.Color(0, 255, 0), 50); // 緑
  colorWipe(strip.Color(0, 0, 255), 50); // 青
  rainbow(20);
  rainbowCycle(20);
}

// 色でドットを1つずつ塗りつぶす
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, c);
      strip.show();
      delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// わずかに異なり、これは虹を均等に分布させます
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // ホイール上のすべての色の5サイクル
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 値0から255を入力して色の値を取得します。
// 色はr - g - b - rに戻る遷移です。
uint32_t Wheel(byte WheelPos) {
  if(WheelPos < 85) {
   return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
  } else if(WheelPos < 170) {
   WheelPos -= 85;
   return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else {
   WheelPos -= 170;
   return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
}
```

## RePhone コミュニティ
---
[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、支援者（RePhone ユーザー）が集まり、温かく快適に RePhone について会話し、技術的な問題を議論し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここに [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) が誕生しました。

今すぐ [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) に参加しましょう！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

**よくある質問**

[RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) でよく寄せられる質問を「RePhone のよくある質問 (FAQ)」というトピックにまとめて回答しています。このトピックは、新しい FAQ が出るたびに更新されます。



## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
私たちは GitHub ページでソースコードを随時更新していきます：

- [Xadow Duino のソースコード](https://github.com/WayenWeng/Xadow_Duino/)

Xadow Duino の回路図は以下のリンクから提供されています：

- [Xadow Duino 回路図ファイル](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip)

魅力的な RGB LED WS2812B に関する詳細情報はこちらをご覧ください：

- [WS2812B](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/WS2812B%20Datasheet.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>