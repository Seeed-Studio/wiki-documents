---
description: Spartan_Edge_Accelerator_Board
title: Spartan Edge Accelerator Board

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Spartan-Edge-Accelerator-Board
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Spartan Edge Accelerator Board（略してSEA Board）は軽量なFPGA開発ボードであり、Xilinx Spartan-7チップを基盤とし、Arduinoシールドのフォームファクターに準拠しています。そのため、LCDやカメラを駆動するArduinoシールドとして使用することも、単独のFPGA開発ボードとして使用することもできます。さらに、オンボードのESP32チップを活用することで、SEAボードはArduinoにWiFiおよびBluetooth機能を提供します。

**Spartan-7**はXilinxのFPGAファミリーの中で最新かつ最もコスト効率の高いFPGAチップであり、ワットあたりの性能が最高クラスです。

さらに、Arduino向けの完全なFPGA APIを提供しているため、ArduinoユーザーはFPGAについて何も知らなくてもFPGA機能を利用することができます。このボードは、簡単な画像処理やコンピュータビジョンアプリケーション、信号の暗号化と復号化、信号のサンプリングと処理など、Arduinoの能力を多方面で拡張します。

## 特徴

#### 高速画像処理

- 統合されたMIPI、mini HDMIインターフェース
- Raspberry Piカメラv1.0（OV5640）をサポート
- 最大30fpsの画像伝送をサポート

#### 暗号化されたIoT

- ESP32によるIoT WiFiおよびBluetooth機能
- AWS、Azureなどのクラウドサービスをサポート
- ソフトウェア暗号化アルゴリズムをサポート

#### 複数のI/Oポート拡張

- 20のユーザー定義拡張I/Oポート（単独モード）
- 10のユーザー定義拡張I/Oポート（Arduinoシールドモード）
- Arduino向けの完全なFPGA API

#### オンボード機能モジュール

- 8ビットADC & DAC
- 6軸加速度計 & ジャイロスコープ
- 2つのユーザーRGB LED & ボタン

#### 2つのカスタマイズ開発モード

- Arduinoシールドモード
- FPGA単独モード

_備考: ユーザーは異なるニーズに応じて異なるピンヘッダーを選択し、開発ニーズに応じてピンをはんだ付けすることができます。_

## 対象ユーザー

- Arduino開発者
- IoT開発者
- FPGA開発者

## 適用事例

- MIPIカメラ入力とHDMI出力のVivadoエンジニアリング
- オンボードLED、DIPスイッチ、ADCおよびDACの参考事例
- オンボードジャイロスコープ事例
- Arduino向けGPIO/UART/ADC/DAC/RGB-LED拡張の提供
- 信号発生器事例（Arduino設定が必要）
- ESP32制御信号発生器事例
- AWS GreenGrass IoTプラットフォームの利用事例
- 色認識と物体追跡事例
- グラフィック認識事例（三角形、円、四角形の認識）
- デジタル文字認識事例
- FPGAでのAES暗号化および復号化アルゴリズムの実装
- FPGAでのPIDアルゴリズムの実装

_新しいアプリケーションは随時更新されます............._

より多くの事例リソースについては、[こちらのGithubページ](https://github.com/Pillar1989)をご覧ください。

## 仕様

<table align="center">
  <tbody>
  <tr>
    <td><h3>パラメータ</h3></td>
    <td><h3>値</h3></td>
  </tr>
  <tr>
    <td><h4>FPGA</h4></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>FPGA チップ</h4></td>
    <td><h4>Spartan-7 XC7S15</h4></td>
  </tr>  
  <tr>
    <td><h4>ロジックセル</h4></td>
    <td><h4>12,800</h4></td>
  </tr>
  <tr>
    <td><h4>Slics</h4></td>
    <td><h4>2000</h4></td>
  </tr>
  <tr>
    <td><h4>CLB フリップフロップ</h4></td>
    <td><h4>16000</h4></td>
  </tr>
  <tr>
    <td><h4>最大分散RAM (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>ブロックRAM/FIFO w / ECC (各36 kb)</h4></td>
    <td><h4>10</h4></td>
  </tr>
    <tr>
    <td><h4>最大分散RAM (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>合計ブロックRAM (Kb)</h4></td>
    <td><h4>360</h4></td>
  </tr>
  <tr>
    <td><h4>最大分散RAM (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>クロック管理タイル (1 MMCM + 1 PLL)</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>DSP スライス</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h3>ワイヤレス</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>ワイヤレスチップ</h4></td>
    <td><h4>Espressif ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>WiFi</h4></td>
    <td><h4>802.11 b/g/n 2.4GHz</h4></td>
  </tr>
  <tr>
    <td><h4>Bluetooth</h4></td>
    <td><h4>Bluetooth 4.1 with BLE</h4></td>
  </tr>
  <tr>
    <td><h3>周辺機器</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>ビデオ</h4></td>
    <td><h4>Mini HDMI x1</h4></td>
  </tr>
  <tr>
    <td><h4>カメラ</h4></td>
    <td><h4>CSI/MIPI インターフェース x1 (Raspberry Pi Camera V1 - OV5640 に対応)</h4></td>
  </tr>
  <tr>
    <td><h4>SDカード</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h4>DSP スライス</h4></td>
    <td><h4>Micro SD/TF カードスロット x1</h4></td>
  </tr>
  <tr>
    <td><h4>FPGA GPIO</h4></td>
    <td><h4>10ピンヘッダー (IO9~IO0)</h4></td>
  </tr>
  <tr>
    <td><h4>Arduino GPIO</h4></td>
    <td><h4>32ピンヘッダー (Arduino フォームファクター)</h4></td>
  </tr>
  <tr>
    <td><h4>Grove</h4></td>
    <td><h4>Grove コネクタ x2 (I2C/D2)</h4></td>
  </tr>
  <tr>
    <td><h4>LED</h4></td>
    <td><h4>単色LED x2<br/>RGB LED x2</h4></td>
  </tr>
  <tr>
    <td><h4>ボタン</h4></td>
    <td><h4>Boot x1<br/>リセット x1<br/>FPGA リセット x1<br/>ユーザー x2</h4></td>
  </tr>
  <tr>
    <td><h4>スイッチ</h4></td>
    <td><h4>電源モードスイッチ x1<br/>5チャンネルDIPスイッチ x1</h4></td>
  </tr>
  <tr>
    <td><h3>電源</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>動作電圧</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>IO電圧</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>電源モード</h4></td>
    <td><h4>USB Type C 5V<br/>VIN 8~17V<br/>Arduino Micro USB 5V</h4></td>
  </tr>
  <tr>
    <td><h3>その他</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>ADC</h4></td>
    <td><h4>8ビット ADC1173</h4></td>
  </tr>
  <tr>
    <td><h4>加速度計とジャイロスコープ</h4></td>
    <td><h4>6軸 LSM6DS3TR</h4></td>
  </tr>
  </tbody></table>

:::caution
SEAシールドのIO電圧は5Vで、FPGAのIO電圧は3.3Vです。そのため、IO電圧を互換性のあるものにするために分圧回路を作成しました。SAM D21シリーズの3.3V IO電圧は分圧後に3.3V未満となり、FPGAのIOを駆動するには不十分です。そのため、現在SEA開発ボードは5V IO Arduinoボードのみをサポートしています。例えば、[Arduino UNO](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-2995.html)や[Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)などです。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-pin.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>番号</h3></td>
    <td><h3>詳細</h3></td>
  </tr>
  <tr>
    <td><h4>1</h4></td>
    <td><h3>FPGA : XC7S15-1FTGB196C</h3></td>
  </tr>
  <tr>
    <td><h4>2</h4></td>
    <td><h4>WiFi/Bluetooth : ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>3</h4></td>
    <td><h4>6軸加速度計およびジャイロスコープ : LSM6DS3TR</h4></td>
  </tr>  
  <tr>
    <td><h4>4</h4></td>
    <td><h4>DAC : DAC7311IDCKR</h4></td>
  </tr>
  <tr>
    <td><h4>5</h4></td>
    <td><h4>降圧型DCDC : TPS62130</h4></td>
  </tr>
  <tr>
    <td><h4>6</h4></td>
    <td><h4>USB-to-UART : CP2102-GMR</h4></td>
  </tr>
  <tr>
    <td><h4>7</h4></td>
    <td><h4>USB : Type-C</h4></td>
  </tr>
  <tr>
    <td><h4>8</h4></td>
    <td><h4>Mini HDMI</h4></td>
  </tr>
  <tr>
    <td><h4>9</h4></td>
    <td><h4>CSIインターフェース ：MIPIカメラ (Raspberry Pi Camera V1 - OV5640と互換性あり)</h4></td>
  </tr>
  <tr>
    <td><h4>10</h4></td>
    <td><h4>Arduinoヘッダー : Arduino UNOと互換性あり</h4></td>
  </tr>
  <tr>
    <td><h4>11</h4></td>
    <td><h4>DIPスイッチ :<br/>K1-K4 ユーザースイッチ<br/>K5 スイッチ FPGAプログラミングモード<br/>->>>> JTAG : Xilinx公式プログラミングツールを使用<br/>->>>> スレーブ : <a href="https://github.com/Pillar1989/spartan-edge-esp32-boot" target="_blank"><span>ESP32を使用してFPGAをプログラム</span></a></h4></td>
  </tr>
  <tr>
    <td><h4>12</h4></td>
    <td><h4>ESP32ボタン ：BootおよびRST</h4></td>
  </tr>
  <tr>
    <td><h4>13</h4></td>
    <td><h4>FPGAボタン ：USER1 USER2 FPGA_RST</h4></td>
  </tr>
  <tr>
    <td><h4>14</h4></td>
    <td><h4>ユーザーLED: L1/L2/RGB1/RGB2<br/>PWR : 電源オン<br/>FPGA_DONE : ESP32でFPGAをプログラムした後に点灯。</h4></td>
  </tr>
  <tr>
    <td><h4>15</h4></td>
    <td><h4>電源スイッチ :<br/>USB->USB Type C (5V DC)で給電<br/>5V->VINピン (8~17V DC)で給電</h4></td>
  </tr>
  <tr>
    <td><h4>16</h4></td>
    <td><h4>電源モード:<br/>OFF->Arduinoとシールドの電源供給を分離<br/>ON->Arduinoとシールドの電源を接続</h4></td>
  </tr>
  <tr>
    <td><h4>17</h4></td>
    <td><h4>DAC出力およびADC入力ヘッダー</h4></td>
  </tr>
  <tr>
    <td><h4>18</h4></td>
    <td><h4>FPGA IO : IO9~IO0</h4></td>
  </tr>
  <tr>
    <td><h4>19</h4></td>
    <td><h4>FPGA JTAGダウンロードインターフェース</h4></td>
  </tr>
  <tr>
    <td><h4>20</h4></td>
    <td><h4>Groveコネクタ : 1x I2C; 1x D2&D3</h4></td>
  </tr>
  <tr>
    <td><h4>21</h4></td>
    <td><h4>セラミックチップアンテナ</h4></td>
  </tr>
  <tr>
    <td><h4>22</h4></td>
    <td><h4>ADC : ADC1173</h4></td>
  </tr>
  <tr>
    <td><h4>23</h4></td>
    <td><h4>SPIフラッシュ : W25Q32JVZPIG</h4></td>
  </tr>
  <tr>
    <td><h4>24</h4></td>
    <td><h4>アナログスイッチ ：DG2788A</h4></td>
  </tr>
  <tr>
    <td><h4>25</h4></td>
    <td><h4>LDO : XC6221B102MR</h4></td>
  </tr>
  <tr>
    <td><h4>26</h4></td>
    <td><h4>LDO : RT9013-18GB</h4></td>
  </tr>
  <tr>
    <td><h4>27</h4></td>
    <td><h4>LDO : CJ1117-3V3</h4></td>
  </tr>
  <tr>
    <td><h4>28</h4></td>
    <td><h4>SDカードスロット : Micro SD/TFカード</h4></td>
  </tr>
  </tbody></table>

## はじめに

Spartan Edge Accelerator Boardは以下の2つのモードで動作します：

- Arduinoシールドモード
- スタンドアロンモード

簡単に言えば、Arduinoシールドとして使用してArduinoにFPGAとワイヤレス機能を追加することができます。また、Arduinoを使用せずにFPGA開発ボードとして単独で動作することも可能です。

### Arduinoシールドモード

このWikiではSeeeduino V4.2を使用しますが、Arduino UNOも使用可能で、互換性があります。

#### ハードウェア

**必要な材料**

- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Spartan Edge Accelerator Board](#A) x1
- [Micro SDカードまたはTFカード](https://www.seeedstudio.com/micro-SD-Card-Card-with-Card-Reader-32GB-Class-10-p-4082.html) x1
- [USB Type Cデータケーブル](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1

**ハードウェア接続**

- ステップ1. Micro SDカードまたはTFカードをSDカードスロットに挿入します。
- ステップ2. SEAボードをArduinoに接続します。
- ステップ3. 以下の3つの方法のいずれかを使用してシステムに電源を供給します。

<table align="center">
  <tbody>
  <tr>
    <td><h3>電源ポート</h3></td>
    <td><h3>入力電圧</h3></td>
    <td><h3>電源スイッチ位置</h3></td>
    <td><h3>電源モード位置</h3></td>
  </tr>
  <tr>
    <td><h4>SEAボードのUSB Type Cポートから給電</h4></td>
    <td><h4>5V DC</h4></td>
    <td><h4>USB</h4></td>
    <td><h4>ON</h4></td>
  </tr>
  <tr>
    <td><h4>Seeeduino V4.2のmicro USBポートから給電</h4></td>
    <td><h4>5V DC</h4></td>
    <td><h4>-</h4></td>
    <td><h4>ON</h4></td>
  </tr>  
  <tr>
    <td><h4>Seeeduino V4.2のDCポートから給電</h4></td>
    <td><h4>8~17V DC</h4></td>
    <td><h4>5V</h4></td>
    <td><h4>ON</h4></td>
  </tr>
</tbody></table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-combine-2.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
SEAボードとArduinoの両方に同時に電源を供給することも可能ですが、その場合は必ず電源モード位置を**OFF**に設定してください。この設定により、システムの電源が分離され、ArduinoとSEAボードを個別に給電することができます。
:::

-------

#### Spartan Edge Accelerator Board ESP32の起動

まず、Arduinoと連携するために、SDカードからオンボードFPGA（xc7s15）にビットストリーム（FPGAロジック）をロードする必要があります。以下のライブラリを使用してオンボードESP32を介してこれを行う方法を示します。

Spartan Edge Accelerator Board用ライブラリ

このライブラリの目的は、オンボードESP32を使用してSDカードからオンボードFPGA（xc7s15）にビットストリーム（FPGAロジック）をロードすることです。

ソフトウェア開発環境は[Arduino IDE](https://www.arduino.cc/en/Main/Software)で、[ESP32 Boards support](https://github.com/espressif/arduino-esp32)を使用します。

バージョン1.6.4以降、ArduinoはBoards Managerを使用してサードパーティのプラットフォームパッケージをインストールすることを許可しています。Windows、Mac OS、Linux（32ビットおよび64ビット）向けのパッケージが利用可能です。

- 現在のアップストリームArduino IDEを1.8以上のレベルでインストールします。最新バージョンは[Arduino公式サイト](https://arduino.cc/en/main/software)で確認できます。
- Arduinoを起動し、Preferencesウィンドウを開きます。
- ```https://dl.espressif.com/dl/package_esp32_index.json``` を_Additional Board Manager URLs_フィールドに入力します。複数のURLを追加する場合は、カンマで区切ります。
- Tools > BoardメニューからBoards Managerを開き、_esp32_プラットフォームをインストールします（インストール後、Tools > BoardメニューからESP32ボードを選択することを忘れないでください）。
- _**tool->board->DOIT ESP32 DEVKIT**_ を選択します。

安定版リリースリンク: `https://dl.espressif.com/dl/package_esp32_index.json`  
開発版リリースリンク: `https://dl.espressif.com/dl/package_esp32_dev_index.json`  
詳細については、[こちら](https://github.com/espressif/arduino-esp32)をクリックしてください。

##### ライブラリの使用方法

- **1. ESP32 Bootライブラリをダウンロードする**

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-esp32-boot/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-boot.png" /></a></p>

次に、このライブラリをArduino IDEに追加します。

ライブラリのインストール方法がわからない場合は、以下を参照してください：  

 [Arduinoライブラリの追加インストール](https://www.arduino.cc/en/Guide/Libraries)

 このライブラリには2つの例フォルダが含まれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/example.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>例</h3></td>
    <td><h3>説明</h3></td>
  </tr>
  <tr>
    <td><h4>01LoadDefaultBitstream</h4></td>
    <td><h4>この例では、SDカードのファイル /overlay/default.bit をFPGAにロードします。</h4></td>
  </tr>
  <tr>
    <td><h4>02LoadConfigBitstream</h4></td>
    <td><h4>この例では、SDカード内のini形式ファイル /board_config.ini を読み取り、キー overlay_on_boot の値で指定されたビットストリームをFPGAにロードします。</h4></td>
  </tr>  
  </tbody></table>

- **2. SDカードの準備**  
  2.1 SDカードをFAT16/FAT32ファイルシステムでフォーマットします。  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/format.jpg" alt="pir" width={600} height="auto" /></p>

  2.2 SDカードに**overlay**という名前のトップレベルサブフォルダを作成します。  
  2.3 ビットストリームまたは[サンプルビットストリーム](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio)ファイル（拡張子が.bitである必要があります）を**overlay**フォルダに配置します。  

:::tip
サンプルビットストリーム：SPIインターフェースで制御されるGPIO拡張機能で、ADC/DAC/RGB-LEDをサポートします。[ソースコード](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio)を参照してください。
:::

  2.4 例01LoadDefaultBitstreamを実行する場合、**overlay**フォルダ内のビットストリームファイルを**default.bit**に名前変更します。  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/folder.jpg" alt="pir" width={600} height="auto" /></p>

2.5 例題「02LoadConfigBitstream」を実行する場合は、[**board_config.ini**](https://github.com/Pillar1989/spartan-edge-esp32-boot/blob/master/extras/board_config.ini) をSDカードのルートフォルダに配置してください。  
2.6 SDカードをSpartan（Edge Accelerator）ボードに挿入してください。

- **3. 例題のアップロード**  
  3.1 SpartanボードをUSB Type-CケーブルでPCに接続し、USB232ドライバ（チップCP2102）をインストールします。  
  3.2 電源スイッチ（USB Type-Cスロット付近）をUSB側に切り替えてボードの電源を入れます。  
  3.3 Arduino IDEでライブラリの例題の1つを開きます。  
  3.4 前のセクションで説明したように、Arduino IDEでボードとポートの設定を確認します。  
  3.5 Spartanボードの「BOOT」ボタンを1秒以上押し続けて、ESP32をブートローダーモードに強制的に入れます。  
  3.6 Arduino IDEで「Upload」ボタンを押して、例題（コンパイル済みバイナリ）をESP32にアップロードします。

- **4. 例題の実行**  
  4.1 オンボードDIPスイッチK5（最後のスイッチ）がSlave（ON）側になっていることを確認してください。これにより、他のデバイス（MCU）によるFPGAプログラミングが有効になります。  
  4.2 Spartanボードの「RST」ボタンを押して例題を起動します。  
  4.3 例題が起動して数秒後、ボード上のFPGA_DONE（赤色）LEDが点灯します。

------

#### Spartan Edge Accelerator Board IO例題

以下のチュートリアルでは、Spartan Edge Accelerator BoardのGPIO/ADC/DAC/RGB-LEDリソースをArduinoで制御する方法を説明します。

- IO例題ライブラリをダウンロードしてください：

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-ioex/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-IO.png" /></a></p>

- このライブラリをArduino IDEに追加してください。ライブラリのインストール方法がわからない場合は、以下を参照してください：  

 [Arduinoライブラリの追加方法](https://www.arduino.cc/en/Guide/Libraries)

- `examples`フォルダに移動し、任意の例題を選択して、.inoファイルをダブルクリックしてください。

- デモをアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を参照してください。

### スタンドアロンモード

#### ハードウェア

**必要な材料**

- [Spartan Edge Accelerator Board](#A) x1  
- [USB Type Cデータケーブル](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1  

Spartan Edge Accelerator BoardをUSB Type Cケーブルで電源供給するだけです。

#### ソフトウェア

Spartan Edge Accelerator Boardは、従来のFPGA開発ボードとしても動作します。以下では、スタンドアロンモードでの使用方法を説明します。

このセクションでは、プロジェクト作成、ソースファイル管理、設計分析、制約定義、合成および実装の実行管理に関するプロジェクトモードの機能について学びます。これはクイックリファレンスとして使用できます。

まず、vivadoチュートリアルライブラリをダウンロードしてください。一部のソースファイルが必要です。

<p style={{textAlign: 'center'}}><a href="https://github.com/swjtu-mxb/vivado-tutorial/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/Vivado-Tutorial-Library.png" /></a></p>

- **ステップ1: プロジェクトの作成**

  _Vivadoの起動_

  _新しいプロジェクトの作成_

1. Vivadoを開いたら、スタートページで**Create Project**を選択します。

2. 新しいプロジェクトウィザードで**Next**をクリックします。

3. プロジェクト名と場所を指定します（「**Create project subdirectory**」を選択して、プロジェクト用のフォルダを作成します）。

4. **Next**をクリックします。

5. **RTL Project**を**Project Type**として選択し、**Next**をクリックします。（「**Do not specify sources at this time**」を選択し、後でファイルを追加します）

   _(Vivado Design Suiteは、ソースファイルの種類や設計タスクに応じて異なる設計エントリポイントを提供します。適切なプロジェクトタイプを選択してください。)_

6. プロジェクト用に**xc7s15ftgb196-1**パーツを選択し、**Next**をクリックします（図1参照）。

7. **Finish**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/1.png" alt="pir" width={600} height="auto" /></p>

Vivado IDEは、デフォルトレイアウトでproject_tutorialを開きます（図2参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/2.png" alt="pir" width={600} height="auto" /></p>

**Flow Navigator**は基本的な設計プロセスを明確に示しています。

**Sources**は**Constraints**、**Simulation Sources**、**Utility Sources**で構成されています。

**Design Runs**はデフォルトでsynth_1とimpl_1を作成します。

Vivadoの**実行ステータス**は右上隅に表示されます。

- **ステップ2: ファイルの追加と作成**

  *このステップでは、プロジェクトに**test.v**、**test_pin.xdc**、**test_sim.v**を追加します。これらのファイルは**vivado_tutorial/vivado_tutorial.srcs**の異なるフォルダにあります。*

1. Flow **Navigator**の**PROJECT MANAGER**で**Add Sources**をクリックして**RTLファイル**を追加します。

2. **Add or create design sources**を選択し、**Next**をクリックします。

3. ボタンをクリックしてオプションを選択するか、直接オプションをクリックしてファイルを追加または作成します（図3参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/3.png" alt="pir" width={600} height="auto" /></p>

4. ここでは、RTLファイルを直接追加します。**Add Files**を選択し、ディレクトリ内のファイル**test.v**を追加します（図4参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/4.png" alt="pir" width={600} height="auto" /></p>

5. **Finish**をクリックします。

6. Flow **Navigator**の**PROJECT MANAGER**で再度**Add Sources**をクリックして**制約ファイル**を追加します。

7. **Add or create constraints**を選択し、**Next**をクリックします。

8. **Add Files**をクリックして制約ファイル**test_pin.xdc**を追加します（図5参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/5.png" alt="pir" width={600} height="auto" /></p>

9. **Finish**をクリックします。

10. Flow **Navigator** の **PROJECT MANAGER** で **Add Sources** を再度クリックし、**シミュレーションファイル**を追加します。

11. **Add or create simulation sources** を選択し、次へをクリックします。

12. **Add Files** をクリックして、シミュレーションファイル **test_sim.v** を追加します（図6参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/6.png" alt="pir" width={600} height="auto" /></p>

13. **Finish** をクリックします。

     最後に、追加したファイルが **Sources** に表示されます（図7参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/7.png" alt="pir" width={600} height="auto" /></p>

- **ステップ3: RTLデザインの展開**

  Vivado IDE には、RTL解析およびIPカスタマイズ環境が含まれています。また、RTLデザインのパフォーマンスや消費電力を改善する方法を検討するためのいくつかのRTLデザインルールチェック（DRC）も用意されています。

1. Flow Navigator で **Open Elaborated Design** を選択してデザインを展開します。

2. メインツールバーの **Layout Selector** プルダウンメニューで **Default Layout** が選択されていることを確認します。展開されたデザインでは、RTLネットリスト、回路図、階層構造のグラフィカルビューなど、さまざまな解析ビューが利用可能です。これらのビューにはクロスセレクト機能があり、RTLのデバッグや最適化に役立ちます。

3. RTL Netlist ウィンドウでロジック階層を探索し、回路図を確認します。セルをダブルクリックして階層を掘り下げたり、回路図のポップアップメニューから **Expand Cone** や **Expand/Collapse** コマンドを使用して回路図をたどることができます。

4. 回路図内の任意のロジックインスタンスを選択し、右クリックして **Go to Source** または **Go to Definition** コマンドを選択します。

5. Vivado IDE の下部にある **Messages** ウィンドウをクリックし、メッセージを確認します。

6. **Messages** ツールバーの **Collapse All** ボタンをクリックします。

7. 展開されたデザインとメッセージを確認します（図8参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/8.png" alt="pir" width={600} height="auto" /></p>

8. リンクの1つをクリックすると、テキストエディタが開き、関連する行がハイライトされます。
9. テキストエディタウィンドウを閉じます。
10. 展開されたデザインウィンドウのバナー右側にある **X** をクリックして閉じ、確認のため **OK** をクリックします。

- **ステップ4: IPカタログの使用**

  Xilinx IPカタログは、Vivado IPの設定および生成機能へのアクセスを提供します。カタログはさまざまな方法で並べ替えたり検索したりできます。IPはカスタマイズ、生成、インスタンス化が可能です。

1. Flow Navigator の **Project Manager** の下にある **IP Catalog** ボタンをクリックします。

2. IPカタログを参照して、さまざまなカテゴリやIPフィルタリング機能を確認します。

3. 対応するIPを選択し、ツール内でネイティブなカスタマイズと設定を行い、**OK** を選択します。

4. ウィンドウタブの **X** をクリックしてIPカタログタブを閉じます。

- **ステップ5: 動作シミュレーションの実行**

  Vivado IDE は Vivado Simulator を統合しており、プロジェクト内でシミュレーションソースを追加および管理できます。シミュレーションオプションを設定し、シミュレーションソースセットを作成および管理できます。合成前にRTLソースで動作シミュレーションを実行できます。

1. Flow Navigator の **Project Manager** の下にある **Settings** コマンドをクリックします。**Settings** ダイアログボックスが開き、上部に **Project Settings**、その下に **Tool Settings** が表示されます（図9参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/9.png" alt="pir" width={600} height="auto" /></p>

2. **Simulation** ページで利用可能な設定を確認し、**Cancel** をクリックしてダイアログボックスを閉じます。
3. Flow Navigator の **Run Simulation** コマンドをクリックし、サブメニューで **Run Behavioral Simulation** をクリックします（図10参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/10.png" alt="pir" width={600} height="auto" /></p>

4. バーを左にドラッグし、これらのツールを使用してズームインまたはズームアウトして適切な画像を確認します（図11および図12参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/11.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/12.png" alt="pir" width={600} height="auto" /></p>

5. 図13の右上隅にある **X** をクリックし、**OK** をクリックしてシミュレーションを閉じます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/13.png" alt="pir" width={600} height="auto" /></p>

- **ステップ6: デザインラン設定の確認**

  デザインランは、合成および実装プロセスのさまざまなステップで利用可能な多くのオプションを設定および保存する方法です。これらのオプションを設定し、将来のランで使用する戦略として保存できます。

1. Flow Navigator の **Project Manager** の下にある **Settings** コマンドをクリックします。

2. **Project Settings** の下にある **Synthesis** ページを選択します。これらのオプションの完全な説明については、_Vivado Design Suite User Guide: Synthesis_（[UG901](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug901-vivado-synthesis.pdf)）を参照してください。

3. **Project Settings** の下にある **Implementation** ページを選択します。これらのオプションの完全な説明については、_Vivado Design Suite User Guide: Implementation_（[UG904](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug904-vivado-implementation.pdf)）を参照してください。

- **ステップ7: デザインの合成と実装**

合成と実装の実行オプションを設定した後、**Design Runs**で**Run Synthesis**および**Run Implementation**を実行するか、**Flow Navigator**内の対応するボタンをクリックしてこれを行うことができます。合成および実装中のVivadoの**実行ステータス**は右上隅に表示されます。

このチュートリアルでは、これらの手順をDesign Runsで実行します。

1. **syth_1**を右クリックし、**Launch Runs**を選択します（図14参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/14.png" alt="pir" width={600} height="auto" /></p>

2. OKをクリックすると、実行ステータスが右上隅に表示されます（図15参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/15.png" alt="pir" width={600} height="auto" /></p>

3. **Open Synthesized Design**をクリックして、さらなる設計と分析を行います。**Report Timing Summary**、**Report Utilization**などを確認できます（図16参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/16.png" alt="pir" width={600} height="auto" /></p>

4. 同じ方法で実装を実行します（図17参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/17.png" alt="pir" width={600} height="auto" /></p>

5. **Open Implemented Design**をクリックして、実装後のレポートを確認します。

- **ステップ8: ビットストリームファイルの生成**

  **Implementing the Design**が完了すると、**Design Runs**で合成と実装が完了したことが確認できます（図18参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/18.png" alt="pir" width={600} height="auto" /></p>

  **Flow Navigator**で**Generate Bitstream**をクリックします。

- **ステップ9: ファイルのダウンロード**

  **Generate Bitstream**が完了した後、FPGAにファイルをロードする方法は2つあります。

  VivadoでJTAGインターフェース（図19の右上隅）を使用してビットファイルをFPGAにロードするか、ESP32（図19の右下隅）を使用してビットファイルをFPGAにロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/19.png" alt="pir" width={600} height="auto" /></p>

  **以下の手順に従って、JTAGインターフェースを介してビットストリームをFPGAにロードします**

1. ボードに電源を入れ、[Platform Cable USB II](https://www.xilinx.com/products/boards-and-kits/hw-usb-ii-g.html)（または互換性のあるケーブル）を接続します。

2. **Flow Navigator**で**Open Target**をクリックし、**Auto Connect**を選択します。

3. ボードへの接続が成功したら、**Program Device**をクリックし、ビットファイルを選択して**Program**をクリックします（図20参照）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/20.png" alt="pir" width={600} height="auto" /></p>

4. ビットファイルのダウンロード後、**FPGA**の**DONE** LEDが点灯します。

   *このプロジェクトでは、いずれかのキー（**USER1**または**USER2**）を押すと、**LED L1**が消灯します。*

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan Edge Accelerator Board v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Spartan-7 FPGAs データシート](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan-7%20FPGAs%20Data%20Sheet.pdf)
- **[PDF]** [ESP32 データシート](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/ESP32-datasheet.pdf)
- **[PDF]** [Spartan-Edge-Accelerator-Board Eagle ファイル](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/tree/master/res/Spartan%20Edge%20Accelerator%20Board%20v1.0/202002626_Spartan%20Edge%20Accelerator%20Board%20v1.0_SCH%20%26%20PCB)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>