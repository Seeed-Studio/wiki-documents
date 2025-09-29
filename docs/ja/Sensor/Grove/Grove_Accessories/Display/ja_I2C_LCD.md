---
description: I2C LCD
title: I2C LCD
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/I2C_LCD
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg" alt="pir" width={600} height="auto" /></p>

I2C_LCDは使いやすいディスプレイモジュールで、ディスプレイをより簡単にします。これを使用することで製作の難易度を下げ、制作者が作業の核心部分に集中できるようになります。

私たちはI2C_LCD用のArduinoライブラリを開発しました。ユーザーは数行のコードだけで複雑なグラフィックやテキスト表示機能を実現できます。これにより、Arduinoのシリアルモニターを一部の場面で置き換えることができ、コンピュータなしで動作情報を取得できます。

さらに、専用の画像データ変換ソフトウェア（ビットマップコンバーター）も開発しました。このソフトウェアはWindows、Linux、Mac OSのPCプラットフォームをサポートしています。ビットマップ変換ソフトウェアを使用することで、複雑なプログラミングを必要とせずに、お気に入りの画像をI2C_LCDに表示できます。

I2C_LCDは非常に便利な製作方法を提供します。ぜひお楽しみください！

### 製品バージョン

| バージョン 	| 購入方法	|
|-----------|---------------|
|I2C_LCD (ユニバーサルGroveケーブル付き)|[<img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|
|I2C_LCD (変換Groveケーブル付き)|[<img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|

## 特徴

* Arduinoのピンを2本だけ使用（I2Cインターフェースを使用）。
* 標準I2Cモード（100Kbit/s）および高速I2Cモード（400Kbit/s）をサポート。
* 複数の通信ロジックレベルに対応：2.8～5VDC。
* Arduinoライブラリ対応、1行のコードでディスプレイを完了。
* 7種類のASCllフォントと5つのグラフィック機能を統合。
* 専用の画像データ変換ソフトウェア（ビットマップコンバーター）を提供。
* 複雑な操作のほとんどをI2C_LCD独立コントローラーが処理し、ユーザーコントローラーのリソースを節約。
* カーソル機能をサポート、16段階のカーソル点滅頻度を設定可能。
* 128段階のバックライト明るさ調整をサポート。
* 64段階の画面コントラスト調整をサポート。
* デバイスアドレスの変更をサポート。
* 最大127台のI2C_LCDを並列動作可能。
* コードデバッグ時にシリアルモニターの代わりとしてプログラムの動作状態を監視可能。
* 異常復旧方法を2つ提供：リセットと工場出荷時設定への復元。
* Groveインターフェースおよび4ピン-100milインターフェース（Groveソケット下）に対応。
* ユーザーの取り付けを容易にするための4つの対称固定穴デザイン。
* 中国風のユニークな外観デザイン。

## 対応プラットフォーム

## インターフェース機能

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg" alt="pir" width={600} height="auto" /></p>

## 仕様
| パラメータ | 値 |
|-----------|-------------|
| スクリーンタイプ | デュアルカラーLCD |
| スクリーン解像度 | 128*64 ピクセル |
| スクリーン有効エリア (L*W) | 47.1*26.5mm |
| 個別ピクセルサイズ | 0.33*0.33mm |
| 通信モード | I2C (100Kbit/s および 400Kbit/s) |
| コントローラー | STM8S005KBT6 |
| 動作周波数 | 16 MHz |
| 重量 | 20g |

## 電気的特性
| パラメータ | 最小値 | 標準値 | 最大値 | 単位 |
|-----------|--------|--------|--------|------|
| 電源電圧（5V to GND） | 4.5 | 5 | 5.5 | V |
| ロジック電圧（SCL/SDA） | 2.8 | 5 | 5.5 | V |
| HBM ESD | - | 5000 | - | V |
| 温度 | -20 | 25 | 70 | ℃ |

## アプリケーションアイデア

以下は参考になる面白いプロジェクトです。

| 画像表示 | カレンダー付き時計 | デバッガとして使用 |
|----------|------------------|------------------|
| <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/BitmapDisplay_p1.png" alt="pir" width={600} height="auto" /></p> | <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/ClockWithCalendar_p1.png" alt="pir" width={600} height="auto" /></p> | <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/debugWithMe_p1.png" alt="pir" width={600} height="auto" /></p> |
| [今すぐ作る](https://www.instructables.com/id/Display-Picture-Or-Icon-On-the-fancy-I2CLCD/) | [今すぐ作る](https://www.instructables.com/id/Beautiful-and-practical-clock-with-calendar/) | [今すぐ作る](https://www.instructables.com/id/Use-I2CLCD-to-Debug-Your-Project-1/) |

| 自動加湿器 | スネークゲーム |
|------------|---------------|
| <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/AutomaticHumidifier.png" alt="pir" width={600} height="auto" /></p> | <p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/DIY_SnakeGame.png" alt="pir" width={600} height="auto" /></p> |
| [今すぐ作る](https://www.instructables.com/id/DIY-a-Simple-Automatic-Humidifier/) | [今すぐ作る](https://community.seeedstudio.com/project_detail.html?id=1621) |

## はじめに

**ステップ 1:** 最新バージョンの Arduino IDE をコンピュータにインストールします。

[<img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={600} height="auto" />](https://www.arduino.cc/en/Main/Software)

**ステップ 2:** I2C_LCD ライブラリを Arduino IDE にダウンロードしてインストールします。

Arduino IDE を開き、**Sketch -> Include library -> Add .ZIP library** をクリックします。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg" alt="pir" width={600} height="auto" /></p>

ダウンロードした **I2C_LCD.zip** ファイルを選択します。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg" alt="pir" width={600} height="auto" /></p>

Arduino IDE を再起動します。

**ステップ 3:** 好きなサンプルプロジェクトを選択します。（ここでは "HelloWorld" プロジェクトを例にします。）

**File > Examples > I2C_LCD > HelloWorld** をクリックします。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg" alt="pir" width={600} height="auto" /></p>

**ステップ 4:** Grove ケーブルを使用して I2C_LCD を Seeeduino Vx ボードに接続します。その後、Seeeduino Vx ボードをコンピュータに接続します。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg" alt="pir" width={600} height="auto" /></p>

**ステップ 5:** ボードとシリアルポートを選択します。

ボードを選択: **Tools > Board > "Arduino Duemilanove or Diecimila"(Seeeduino V3.0 または初期バージョン), "Arduino Uno"(Seeeduino Lotus または Seeeduino V4.0)** をクリックします。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg" alt="pir" width={600} height="auto" /></p>

COM を選択: **Tools -> Serial Port -> COMX (ボードに接続されているポート)** をクリックします。

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg" alt="pir" width={600} height="auto" /></p>

**ステップ 6:** プログラムをアップロードして **楽しんでください！**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg" alt="pir" width={600} height="auto" /></p>

**PS:**

1. ライブラリのインストールに関する詳細は、https://arduino.cc/en/Guide/Libraries を参照してください。
2. 使用中に他の問題が発生した場合は、ユーザーマニュアルを参照してください。解決できない場合は、私たちにお問い合わせください。

**技術サポート:** Joney.s@foxmail.com

## バージョントラッカー

**I2C_LCD ハードウェア:**

| リビジョン 	| リリースノート	| リリース日	|
|-----------|---------------|---------------|
|I2C_LCD_v1.2| 1. 生産テストポイントを追加。 |2015年9月18日|
|I2C_LCD_v1.1| 1. ロゴの位置を修正。 2. 基板形状を修正。 3. ボタンの位置を修正。 |2014年5月8日|
|I2C_LCD_v1.0| 1. 電源回路配線を修正。 |2014年3月1日|
|I2C_LCD_v0.9b| 1. 初回の公開リリース。 |2014年2月15日|

**I2C_LCD ライブラリ:**

| リビジョン 	| リリースノート	| リリース日	|
|-----------|---------------|---------------|
|I2C_LCD_v1.21| LinkIt ボードをサポート。 |2016年8月21日|
|I2C_LCD_v1.20| I2C_LCD ドライバインターフェースを再構成し、他のボードへの移植を容易に。 |2016年4月16日|
|I2C_LCD_v1.12| y座標が16を超える場合にビットマップを表示できないバグを修正。|2015年9月4日|
|I2C_LCD_v1.11| '\t' が印刷できないバグを修正。|2015年6月27日|
|I2C_LCD_v1.10| 1. LCD印刷機能を追加。 2. DeviceAddressConfigの例を編集。|2015年6月25日|
|I2C_LCD_v1.0| 初回の公開リリース。 |2014年7月6日|

## リソース

最新バージョンを随時更新しています。

[Arduinoライブラリのリポジトリはこちら](https://github.com/SparkingStudio/I2C_LCD_library)。コードに関する良いアイデアがあれば、ぜひプルリクエストをお送りください。

* [I2C_LCD ライブラリ](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD_Library.zip)
* [I2C_LCD ユーザーマニュアル EN](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_EN.zip)
* [I2C_LCD ユーザーマニュアル 中文](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_CN.zip)
* [BitmapConverter (Windows用)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.rar)
* [BitmapConverter (MacOS用)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.dmg)
* [BitmapConverter (Linux用)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.tar.gz)
* [I2C_LCD ソースファイル](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD12864_SourceFile.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>