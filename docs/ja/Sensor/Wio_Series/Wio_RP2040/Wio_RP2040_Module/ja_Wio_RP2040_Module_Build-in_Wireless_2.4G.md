---
title: Wio RP2040 モジュール
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /ja/Wio_RP2040_Module_Build-in_Wireless_2.4G
last_update:
  date: 05/15/2025
  author: gunengyu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_1.jpg)

Wio RP2040 モジュールは、RP2040+WiFi チップを使用した Seeed の自社開発モジュールで、MicroPython プログラミングをサポートしています。Cortex M0+ デュアルコアを搭載し、最大 133MHz の柔軟なクロック速度で動作します。このモジュールは、ワイヤレス機能を備えた低消費電力マイクロコントローラーです。強力な性能と小型サイズを兼ね備えており、さまざまな IoT プロジェクトの開発に最適な選択肢です。このモジュールは、さまざまな PCB バックプレーンに簡単にハンダ付けできます。

モジュールには豊富なインターフェースがあり、28 の GPIO ピン（19 ピンは PIO および PWM をサポート）、2 UART、4 ADC、2 SPI、2 I2C を備えています。一部のピンは多重化が可能で、例えば GP12 と GP13 は I2C、SPI、UART 機能を持っています。そのため、28 の GPIO ピンでより多くの I/O ピンとインターフェースを実現できます。Wio RP2040 モジュールには USB ピンもあり、USB Type-C インターフェースをサポートするように設計できます。
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-Module-p-4932.html)  

## 主な特徴

- **強力な CPU**: デュアルコア 133MHz Cortex M0+ プロセッサと 264KB SRAM、2MB フラッシュ
- **信頼性の高いワイヤレス接続**: 強力な WiFi チップを使用し、2.4〜2.4835 GHz の周波数と AP&Station モードをサポート
- **柔軟性**: Thonny エディタと互換性あり
- **小型サイズ**: 18.0x 28.2x 1.0mm 32 ピン SMT
- **複数の認証**: FCC および CE 認証取得済み
- **プログラミング言語のサポート**: MicroPython

## 仕様

| 名称             | 詳細  |
|-----------------------|--------------|
| プロセッサ     | デュアル Cortex M0+ プロセッサ、最大 133 MHz       |
| SRAM | 264KB |
| フラッシュ          | 2MB            |
| ワイヤレス接続         | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；AP & Station            |
| GPIO，PIO および PWM ピン            | 20            |
| I2C             | 2            |
| SPI                  | 2   |
| UART                  | 2   |
| ADC                  | 4   |
| VIN                  | 5V-3.6V DC   |
| サイズ                  | 18.0 x 28.2 x 1.0mm   |

## ハードウェア概要

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_3.png)

:::note
		I/O ピン: MCU は 3.3V で動作します。汎用 I/O ピンに接続された入力電圧が 3.3V を超える場合、チップが損傷する可能性があります。使用時には注意し、シールドカバーを外さないでください。
:::
## はじめに
このモジュールに MicroPython ファームウェアをアップロードしたい場合は、[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) をコンピュータにダウンロードし、以下の配線図に従って BOOT ピンを低くし、MicroUSB メスソケットを接続します。最後にデータケーブルを介してコンピュータに接続します。この時点で、コンピュータに追加のリムーバブルディスクが表示されます。その後、ダウンロードしたファームウェアをリムーバブルディスクに移動してファームウェアの更新を完了します。
![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/image1.png)


| ファームウェアバージョン          | 更新ログ  | ダウンロード|
|-----------------------|--------------|---------|
|V1.15.1|最初の公式バージョン|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|ソケットの安定性を修正し、接続失敗時のエラーメッセージを追加|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|元の関数 'wait_msg()' を 'check_msg()' に名前変更し、新しい 'wait_msg()' 関数を追加。主な違いは、元の 'wait_msg' 関数がデータを待機していない場合にプログラムの実行をブロックするのに対し、'check_msg()' 関数はデータが受信されたかどうかを検出するだけで、受信された場合はコールバックを実行し、受信されない場合でもプログラムは引き続き実行される点です。|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|


:::note
    Wiki チュートリアルで使用されているファームウェアバージョンは V1.15.1 です。
    新しいバージョンのファームウェアを使用する場合は、ファームウェア更新ログを参照してサンプルコードを修正してください。
:::

### ソフトウェア

#### 1. Thonny のインストール
簡単に始められます。Thonny は Python 3.7 を内蔵しているため、シンプルなインストーラーを 1 つ実行するだけでプログラミングを学ぶ準備が整います。まず、[Thonny.org](https://thonny.org/) をクリックしてダウンロードページにアクセスします。ページの右上隅で、使用しているオペレーティングシステムに応じた Thonny インストールパッケージを選択してダウンロードします。ダウンロードしたインストールパッケージをダブルクリックして開き、手順に従ってインストールします。
![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_4.png)
Thonny をインストールしたら、アプリケーションを開きます。Thonny のメインインターフェースが表示されるはずです:
![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_5.png)
Thonny のメインインターフェースは非常にシンプルで、以下の 4 つの部分に分かれています:

1. ツールバー: 新規作成、開く、保存、現在のスクリプトの実行、停止などの基本的なツール。

2. コードエディタ: Thonny のコア領域で、ここで Python/MicroPython コードを記述します。

3. シェル: ここでコマンドを実行でき、コマンドの結果が即座にシェルに表示されます。また、コードの出力もシェルウィンドウに表示されます。

4. インタープリター: ここでは、プログラムをコンパイルするためのインタープリターの種類を選択できます。「Python 3.7.9」をクリックし、ポップアップメニューで「MicroPython (Raspberry Pi Pico)」を見つけてクリックし、OKを押してインタープリターをPicoインタープリターに切り替えます。また、「ツール>>>オプション>>>インタープリター」をクリックして選択することもできます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_6.png)
![画像をここに挿入](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_7.png)

#### 2.Wio RP2040モジュールを接続する
Wio RP2040モジュールを接続するには、USBピンを正しく引き出し、データケーブルに接続する必要があります。データケーブルを使用してモジュールをコンピュータに接続し、ツールバーの「Restart backend」ボタンをクリックします。Wio RP2040がコンピュータに正常に接続されると、ShellにMicroPythonのバージョン情報とデバイス名が表示されます。
![画像をここに挿入](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_8.png)

#### 3.I/Oピンを制御する
以下のコードを使用してGP13ピンをプルアップできます：
```
from machine import Pin, Timer

led = Pin(13, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)
    
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```
ツールバーの再生アイコンを押してコードを実行します。
![画像をここに挿入](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_9.png)
GP13ピンにLEDライトを接続して、ピンが正常に駆動されているかどうかを確認できます。

## FAQ

### 1. 起動後にコードを自動的に実行させたい
コードを「main.py」に名前変更し、メイン制御ボードに保存する必要があります。次回メイン制御ボードが再起動すると、main.pyプログラムが自動的に実行されます。

### 2. ネットワーク機能を含むコードを実行した後、他のプログラムを実行するとエラーやクラッシュが発生する
メイン制御ボードのRESETボタンをクリックしてボードを再起動し、その後Thonnyエディターに再接続して他のプログラムを実行してください。

### 3. もっと多くのサンプルプログラムやプロジェクトを見たい
Wio RP2040 mini Dev Boardのwikiを参照してください。そこにはより多くのサンプルプロジェクトがあり、これらのプロジェクトは共通です。

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。
弊社製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>