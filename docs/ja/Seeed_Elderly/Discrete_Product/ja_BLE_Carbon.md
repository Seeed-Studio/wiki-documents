---
description: BLE Carbon
title: BLE Carbon
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BLE_Carbon
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/BLE-Carbon/img/cover.png)

BLE Carbonは、96BoardsとSeeedの共同開発によるもので、IoTプロジェクト向けに経済的でコンパクトなBLEソリューションを提供することを目的としています。

96Boardsは、ARM、IBM、Samsung、ST-Ericsson、TIなどの有名企業によって共同出資された非営利団体であるLinaroによって製造されています。これは、ARM SoCベンダーの範囲から互換性のある低コスト、小型フットプリントの32ビットおよび64ビットCortex-Aボードを提供するためのプラットフォームを定義する最初のオープンスペックです。周辺I/O、ディスプレイ、カメラ用の拡張バスを標準化することで、ハードウェアエコシステムがプラットフォームのライフタイムを通じて任意の96Boards製品で動作する互換性のあるアドオン製品の範囲を開発できるようにします。

BLE Carbonは、96BoardsのソフトウェアプラットフォームとSeeedのハードウェアを使用し、さらにNordicのBluetoothソリューションを採用しています。96BoardsとSeeedの広く使用されているオープンスペックと強力な製造背景を活用することで、BLE CarbonはIoTプロジェクトに最適なBLEソリューションの1つとなるに違いありません。

CarbonはZephyrがプリインストールされています。将来的に他のOSが利用可能になった場合は、ダウンロードページを参照して他のOSやアプリケーションを確認してください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Carbon-p-2710.html)

## 特徴

### マイクロコントローラーの特徴
* LQFP64パッケージのSTM32F401RET6
* ARM® 32ビット Cortex®-M4 CPU（FPU付き）
* 最大84 MHzのCPU周波数
* 1.7 Vから3.6 VのVDD
* 512 KBのフラッシュメモリ
* 96 KBのSRAM
* 外部割り込み機能を備えたGPIO（50）
* 16チャンネルの12ビットADC
* RTC
* 高度制御タイマー
* 汎用タイマー（7）
* ウォッチドッグタイマー（2）
* USART/UART（4）
* I2C（3）
* SPI（3）
* SDIO
* USB 2.0 OTG FS

### ボードの特徴
* 512kBフラッシュ、96kB RAMを搭載したSTM32F401マイクロコントローラー
* ヒューズ保護付きUSB電源供給
* 6つのLED
    * USR1、USR2、BT、PWR、RX、TX
* 2つのプッシュボタン
    * USRとRESET
* SWDデバッグコネクタ
* オンボードチップアンテナ
* 3.3V動作電圧
* 2x15ピン 2.54mmピッチの低速コネクタ
* 96Boards IoT標準に完全対応

## 仕様

| パラメータ | 値 |
|------------|------|
| チップセット | STM32F401 |
| BT | nRF51822 |
| クロックスピード | 最大84MHzのCPU周波数 |
| フラッシュ | 512KB |
| SRAM | 96KB |
| デジタル出力電圧 | 3.3V |
| アナログピン | 6 |
| アナログ入力電圧 | 0~3.3V |
| 寸法 | 60x30mm |

## ハードウェア概要

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/BLE-Carbon/img/hw.png)

1. **OTG** - USB OTG/HOSTおよびUSBデバイスとして使用可能。また、USB DFUにも使用されます。

2. **LEDインジケータ**

* *USR1* - ユーザー制御LED、PD2に接続
* *USR2* - ユーザー制御LED、PA15に接続
* *BT* - Bluetoothインジケータ、PB5に接続。このLEDはデバイスに接続すると点灯します。
* *PWR* - 電源オン時に点灯
* *RX* - FT230XのRXインジケータ
* *TX* - FT230XのTXインジケータ

3. **UART** - デバッグまたはファームウェア更新用、USART1に接続。

4. **リセットボタン** - システムをリセットするために押します。

5. **BOOT0ボタン** - ユーザーボタンまたはブートモード選択用、PC12に接続。デフォルトは低。

6. **UARTおよびSWDデバッグ用（STM32F401およびnRF51822の両方）**

7. **BTチップアンテナ**

8. **ピン** - 詳細はピンマップを参照

9. **IC1** - FT230X

A. **IC2** - STM32F401

B. **IC3** - nRF51822

## ピンマップ

[![画像をクリックして拡大表示](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)

:::note
    画像をクリックして拡大表示してください。
:::

## nRF51822とSTM32F401の接続

BLE SoftDeviceを使用する必要があるが、特定の周辺機器を使用する必要がある、またはRAM、フラッシュメモリ、CPU速度などのリソースがより多く必要なためにnRF5に移植できないアプリケーションの場合は、シリアル化を検討してください。

### ハードウェア接続
以下のようにハードウェアを接続します：

| STM32F401 | nRF51822 | 機能 |
|-----------|----------|------|
| PA4       | P0.25    | SPI_CSN |
| PB1       | P0.28    | SPI_REQ |
| PB0       | P0.29    | SPI_RDY |
| PA7       | P0.00    | SPI_MOSI |
| PA6       | P0.30    | SPI_MISO |
| PA5       | P0.07    | SPI_CLK |
| PB2       | SWDIO/NRESET | RESET |

### シリアル化ソフトウェアのセットアップ
接続ボードを準備するために以下の手順を実行してください：

1. ボードをコンピュータに接続し、RESETワイヤーが切断されていることを確認します。
2. 接続ボードにSoftDeviceをプログラムします。手順については「Programming SoftDevices」を参照してください。
3. Keilで、使用したい物理トランスポート層のConnectivity Exampleを開きます：  
   `\examples\ble_central_and_peripheral\ble_connectivity\board\ser_s13x_spi`
4. アプリケーションをコンパイルし、作成された.hexファイルを接続ボードにダウンロードします。

詳細については、[Running a serialized application](http://infocenter.nordicsemi.com/index.jsp?topic=/com.nordic.infocenter.s130.api.v2.0.0/index.html)を参照してください。

## ファームウェアのアップグレード方法

### DfuSeデモンストレーション手順
#### DFUファイルをダウンロードする方法
1. BOOT0ボタンを押し、OTGをPCに接続します。
2. **DfuSeデモンストレーション**アプリケーションを実行します（スタート -> すべてのプログラム -> STMicroelectronics -> DfuSe Demonstration）。
3. **Choose**ボタン（以下の図の項目1）をクリックしてDFUファイルを選択します。DFUファイルから読み取られたVID、PID、バージョン、ターゲット番号などの情報が表示されます。
4. **Optimize upgrade duration**チェックボックスをオンにして、アップロード中にFFブロックを無視します。
5. **Verify after download**チェックボックスをオンにすると、データのダウンロード後に検証プロセスが開始されます。
6. **Upgrade**ボタン（以下の図の項目2）をクリックして、ファイル内容をメモリにアップグレードします。
7. **Verify**ボタン（以下の図の項目3）をクリックして、データが正常にダウンロードされたかどうかを確認します。

![画像をクリックして拡大表示](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_1.png)

#### S19/Hex/BinファイルからDFUファイルを生成する方法
1. **DFU File Manager**アプリケーションを実行します（スタート -> すべてのプログラム -> STMicroelectronics -> DFU File Manager）。
2. **Want to do**ダイアログボックスで**I want to GENERATE a DFU file from S19, HEX or BIN files**項目を選択し、**OK**をクリックします。
3. S19またはHexファイルからイメージを作成するには、**S19 or Hex**ボタンをクリックしてファイルを選択します。追加されたファイルごとにDFUイメージが作成されます。
4. DFUファイルを作成するには、**Generate**をクリックします。

:::note
     詳細については、STのユーザーマニュアル([UM0412](http://www.st.com/content/ccc/resource/technical/document/user_manual/3f/61/72/ff/c5/5a/4a/7b/CD00155676.pdf/files/CD00155676.pdf/jcr:content/translations/en.CD00155676.pdf))を参照してください。
:::

### 6.2 UART経由でhexファイルをダウンロードする

1. BOOT0ボタンを押し、UARTをPCに接続します。
2. **Demonstrator GUI**アプリケーションを実行します（スタート -> すべてのプログラム -> STMicroelectronics -> Demonstrator GUI）。
3. 以下の手順に従ってファームウェアをダウンロードします。

![画像をクリックして拡大表示](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_1.png)

![画像をクリックして拡大表示](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_2.png)

![画像をクリックして拡大表示](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_3.png)

![画像をクリックして拡大表示](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_4.png)

![画像をクリックして拡大表示](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_5.png)

## 回路図オンラインビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

* [Eagle形式の回路図](https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip)
* [PDF形式の回路図](https://files.seeedstudio.com/wiki/BLE-Carbon/res/BLE%20Carbon%20v1.0_SCH.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>