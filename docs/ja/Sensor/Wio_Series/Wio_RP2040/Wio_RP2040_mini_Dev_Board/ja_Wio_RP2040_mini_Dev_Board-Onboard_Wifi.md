---
title: Wio RP2040 mini Dev Board の使い方
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/
slug: /ja/Wio_RP2040_mini_Dev_Board-Onboard_Wifi
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_1.jpg)

Wio RP2040 mini Dev Board は、ワイヤレス機能を備えた Wio RP2040 モジュールを基盤とした開発ボードで、MicroPython プログラミングをサポートしています。デュアルコア 133MHz RP2040 チップを搭載しており、低消費電力のマイクロコントローラーでワイヤレス機能を備えています。高性能かつコンパクトなサイズで、さまざまな IoT プロジェクトの開発に最適な選択肢です。

このボードは豊富なインターフェースを備えており、28 の GPIO ピン（19 ピンは PIO と PWM をサポート）、2 UART、4 ADC、2 SPI、2 I2C を含みます。一部のピンは多重化が可能で、例えば GP12 と GP13 は I2C、SPI、UART 機能を持っています。そのため、28 の GPIO ピンでより多くの I/O ピンとインターフェースを実現できます。Wio RP2040 mini ワイヤレス開発ボードは USB Type-C インターフェースをサポートしており、電源供給とコードのダウンロードが可能です。オンボードの電源 LED ライトに加えて、ユーザーが制御可能な LED（GP13 ピンに接続されています）も追加されています。また、リセットボタン（ボード上では「RUN」と印刷されています）と BOOT ボタン（ファームウェアの再アップロードに使用可能）も搭載されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)

## 主な特徴

- **強力な CPU:** 
   - デュアルコア 133MHz RP2040 プロセッサと 264KB SRAM、2MB フラッシュ
- **信頼性の高いワイヤレス接続:** 
   - 強力な Wi-Fi チップを使用し、2.4〜2.4835 GHz の周波数と Ap&Station モードをサポート
- **柔軟性:**
   - Thonny エディタと互換性あり
- **簡単なプロジェクト操作:** 
   - ブレッドボードに対応
- **複数の認証:** 
   - FCC および CE 認証取得済み
- **対応プログラミング言語:**
   - MicroPython

## 仕様
| 名前 | 詳細 |
| --- | --- |
| プロセッサ | デュアル Cortex M0+ プロセッサ、最大 133 MHz |
| SRAM | 264KB |
| フラッシュ | 2MB |
| ワイヤレス接続 | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；Ap & Station |
| GPIO，PIO および PWM ピン | 20 |
| I2C  | 2 |
| SPI | 2 |
| UART | 2 |
| ADC | 4 |
| 電源/ダウンロード  | Type-C |
| 電源供給 | 5V DC |
| サイズ | 25.8 x 45.5mm |

## ハードウェア概要
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_3.png)

## ピン配置図
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_4.png)

:::note
		I/O ピン: MCU は 3.3V で動作します。汎用 I/O ピンに接続された入力電圧が 3.3V を超える場合、チップが損傷する可能性があります。使用時には注意し、シールドカバーを外さないでください。
:::

## はじめに
メインコントロールボードには MicroPython ファームウェアが内蔵されているため、ユーザーは直接 Thonny コードエディタに接続できます。ファームウェアが破損した場合や他のファームウェアに置き換えたい場合は、[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) をコンピュータにダウンロードしてください。RP2040 メインコントロールボードの BOOT ボタンを押し続けながら USB ケーブルで接続します。この時、コンピュータに追加のリムーバブルディスクが表示されます。その後、ダウンロードしたファームウェアをリムーバブルディスクにドラッグしてファームウェアの更新を完了します。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)

### ハードウェア要件

- Wio RP2040 mini Dev Board x 1
- コンピュータ x 1
- USB Type-C ケーブル x 1

Wio RP2040 mini Dev Board を USB ケーブルでコンピュータに接続すると、ボード上の赤い LED 電源インジケータが点灯します。

| ファームウェアバージョン            | 更新ログ  | ダウンロード |
|-----------------------|--------------|---------|
|V1.15.1|最初の公式バージョン|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|ソケットの安定性を修正し、接続失敗時のエラーメッセージを追加|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|元の関数 'wait_msg()' を 'check_msg()' にリネームし、新しい 'wait_msg()' 関数を追加。主な違いは、元の 'wait_msg' 関数はデータを待機している間プログラムの実行をブロックしますが、'check_msg()' 関数はデータが受信されたかどうかを検出するだけで、受信時にはコールバックを実行し、受信されない場合でもプログラムは引き続き実行されます。|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|

:::note
       Wiki チュートリアルで使用されているファームウェアバージョンは V1.15.1 です。
       新しいバージョンのファームウェアを使用する場合は、ファームウェア更新ログを参照してサンプルコードを修正してください。
:::

## ソフトウェア
#### 1. Thonny のインストール
簡単に始められます。Thonny は Python 3.7 を内蔵しているため、シンプルなインストーラーを1つ実行するだけでプログラミングを学ぶ準備が整います。まず、[Thonny.org](https://thonny.org/) をクリックしてダウンロードページにアクセスします。ページ右上で、使用しているオペレーティングシステムに応じた Thonny のインストールパッケージを選択してダウンロードしてください。ダウンロードしたインストールパッケージをダブルクリックして開き、手順に従ってインストールを進めます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_6.png)

Thonny をインストールしたら、アプリケーションを開きます。以下のような Thonny のメインインターフェースが表示されるはずです：

![1.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_7.png)
Thonny のメインインターフェースは非常にシンプルで、以下の4つの部分に分かれています：

1. **ツールバー**：新規作成、開く、保存、現在のスクリプトを実行、停止などの基本的なツール。

2. **コードエディタ**：Thonny の中心的な領域で、ここで Python/MicroPython のコードを記述します。

3. **シェル**：ここでコマンドを実行でき、コマンドの結果が即座にシェルに表示されます。また、コードの出力もシェルウィンドウに表示されます。

4. **インタープリタ**：プログラムをコンパイルするインタープリタの種類を選択できます。「Python 3.7.9」をクリックし、ポップアップメニューで「MicroPython (Raspberry pi Pico)」を選択して OK をクリックすると、インタープリタを Pico インタープリタに切り替えることができます。また、「Tools>>>Options>>>Interpreter」をクリックして選択することもできます。

![2.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_8.png)
![3.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_9.png)

#### 2. Wio RP2040 mini Dev Board を接続する
データケーブルを使用して開発ボードをコンピュータに接続し、ツールバーの「Restart backend」ボタンをクリックします。Wio RP2040 がコンピュータに正常に接続されると、シェルに MicroPython のバージョン情報とデバイス名が表示されます。

![4.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_10.png)

#### 3. オンボード LED ライトを点灯させる
開発ボードの PIN13 は LED ライトに接続されているため、PIN13 ピンをプルアップすることで LED ライトを点灯させることができます。次に、「File」をクリックして「New File」を選択し、新しいプログラムファイルを作成して以下のコードを記述します：

```python
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

**ツールバーの再生アイコンを押してコードを実行してください。**

![5.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_11.png)

正常に動作すれば、LED ライトが1秒ごとに点灯と消灯を繰り返すのが確認できます。また、増加する数字の出力がシェルに表示されます。

![6.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_12.png)

## FAQ

#### 1. 起動後にコードを自動的に実行させたい
コードを「main.py」に名前変更し、メインコントロールボードに保存する必要があります。次回メインコントロールボードが再起動すると、main.py プログラムが自動的に実行されます。

#### 2. ネットワーク機能を含むコードを実行した後、他のプログラムを実行するとエラーやクラッシュが発生する
メインコントロールボードの RESET ボタンをクリックしてボードを再起動し、その後再度 Thonny エディタに接続して他のプログラムを実行してください。

## リソース

- **[BRD]** [Wio_RP2040 mini v1.1](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.brd)

- **[PDF]** [Wio_RP2040 mini v1.1.pdf](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.pdf)

- **[SCH]** [Wio_RP2040 mini v1.1.sch](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.sch)


## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>