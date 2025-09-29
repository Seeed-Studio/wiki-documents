---
description: Quectel EG25-GLを搭載した4G LTE Raspberry Pi HATは、高速接続と正確なGNSS測位を提供し、IoTやM2Mアプリケーションに最適です。Raspberry PiやPCと互換性があり、グローバル周波数帯域、リアルタイム追跡、信頼性の高い通信をサポートし、さまざまな業界での用途に対応します。

title: Raspberry Pi 4G LTE HATの使い方
keywords:
  - Raspberry Pi Hat
  - 初めての使い方
  - IIoT
  - M2M
  - 4G LTE
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /ja/getting_started_raspberry_pi_4g_lte_hat
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## 概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/7-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" style={{width:600}}/></div>

4G Raspberry Pi HATは、Raspberry Piモデル（A+、B+、Pi 2、Pi 3、Pi 4、Pi 5、Zero）およびPCとシームレスに統合するために設計された強力で多用途なアドオンです。40ピンGPIOコネクタを備え、簡単なプラグアンドプレイ互換性を実現します。このHATはQuectel EG25-GL CAT4 LTEモジュールを搭載し、高速4G通信、SMS機能、IoTおよびM2Mアプリケーション向けのクラウドプラットフォーム統合を提供します。また、Qualcomm® IZat技術を使用した正確なGNSS測位を提供し、産業用ルーター、堅牢なタブレット、ビデオ伝送、デジタルサイネージに最適です。HATはUARTおよびUSBを介した通信をサポートし、ATコマンドを使用した簡単な設定とデバッグのためのソフトウェアツールが付属しています。

EG25-GLモジュールは、LTE、UMTS/HSPA+、GSM/GPRS/EDGEネットワーク全体で信頼性の高い接続を提供するグローバル周波数帯域サポートを備えた堅牢なパフォーマンスを保証します。4G、3G、2Gとの下位互換性があり、MIMO、DFOTA、DTMFなどの複数の通信プロトコルをサポートします。その多星座GNSS受信機は、正確で迅速な位置測定を保証します。

## パッケージ内容

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/9-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" 
    style={{ width: 600}} 
  />
</div>

4G LTE HATパッケージには、インストールと操作に必要なすべてが含まれています：

- **ネジとスタッド** HATをしっかりと取り付けるために必要なすべてのハードウェア。  
- **ドライバー** 簡単なインストール用ツール。  
- **4Gアンテナ x2** 信頼性の高いLTE接続を確保。  
- **USB-A to USB-Cアダプタ** HATとRaspberry PiのUSB 3.0ポート間の接続を可能にします。  
- **2x20ピンスタッキングヘッダー** インストール時の適切な位置合わせとクリアランスを確保するための高さを提供。  
- **0.3M Type-Cデータケーブル** 電源供給とデータ伝送の両方をサポート。  

## ハードウェア準備
<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>GPSアンテナ</th>
        <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 特徴

- 地域制限のないグローバル周波数帯をサポート。
- Raspberry Piとのプラグアンドプレイが可能で、ドライバーのインストールは不要。
- 2本のLTEアンテナと必要な取り付けアクセサリーが付属しており、追加購入の必要なし。
- 高速LTE CAT4通信をサポートし、最大150 Mbps（ダウンロード）および最大50 Mbps（アップロード）に対応。
- ダイヤルアップ、SMS、TCP、UDP、PPP、FTP、HTTP、NTP、PING、QMI、NITZ、SMTP、MQTT、CMUX、HTTPS、FTPS、SMTPS、SSL、MMS、FILEをサポート。
- GNSSをサポート：GPS、GLONASS、BDS、Galileo、QZSS。
- USB 2.0インターフェースを介してRaspberry Pi/PCで高速4G通信を実現。
- PDプロトコルをサポートする追加のUSB-C電源インターフェースにより、4G HATとRaspberry Piに最大27Wの電力を個別に供給可能で、より高い負荷容量を提供。
- ネットワーク状態とモジュール動作を簡単に監視できるオンボードLED PWR/NETステータスライト。
- 手動リセットやモジュールのオン/オフ制御が可能なオンボードRST PWRボタン。
- DIPスイッチで有効化された場合、40ピンGPIOを介してRaspberry Piに接続されたRST/PWR/RX/TXピンにより、リセット、モジュールのオン/オフ、およびUART通信を制御可能。

## 仕様

### EG25-GL 4Gモジュール仕様

| **属性**                      | **詳細**                                                                 |
|--------------------------------|-------------------------------------------------------------------------|
| **地域/オペレーター**          | グローバル                                                              |
| **寸法 (mm)**                  | 29.0 × 32.0 × 2.4                                                      |
| **重量 (g)**                   | 約4.9                                                                   |
| **動作温度**                   | -35°C ～ +75°C                                                          |
| **拡張温度**                   | -40°C ～ +85°C                                                          |
| **周波数帯**                   |                                                                         |
| - LTE-FDD                      | B1/2/3/4/5/7/8/12/13/18/19/20/25/26/28/66                               |
| - LTE-TDD                      | B34/38/39/40/41                                                        |
| - WCDMA                        | B1/2/4/5/6/8/19                                                        |
| - TD-SCDMA                     | 非対応                                                                 |
| - GSM/EDGE                     | B2/3/5/8                                                               |
| **GNSS**                       | GPS/GLONASS/BDS/Galileo/QZSS                                           |
| **拡張機能**                   |                                                                         |
| - DTMF                         | 対応                                                                   |
| - DFOTA                        | 対応                                                                   |
| - QMI/RmNet                    | 対応                                                                   |
| - QuecFile®                    | 対応                                                                   |
| - (U)SIMカード検出             | 対応                                                                   |
| **最大データ速度**             |                                                                         |
| - LTE-FDD (Mbps)               | 150 (ダウンロード)/50 (アップロード)                                   |
| - LTE-TDD (Mbps)               | 130 (ダウンロード)/30 (アップロード)                                   |
| - DC-HSPA+ (Mbps)              | 42 (ダウンロード)/5.76 (アップロード)                                  |
| - WCDMA (kbps)                 | 384 (ダウンロード)/384 (アップロード)                                  |
| - EDGE (kbps)                  | 296 (ダウンロード)/236.8 (アップロード)                                |
| - GPRS (kbps)                  | 107 (ダウンロード)/85.6 (アップロード)                                 |
| **対応プロトコル**             | TCP、UDP、PPP、FTP、HTTP、NTP、PING、QMI、NITZ、SMTP、MQTT、CMUX、HTTPS、FTPS、SMTPS、SSL、MMS、FILE |
| **電気的特性**                 |                                                                         |
| - 電源電圧範囲                 | 3.3–4.3 V、標準3.8 V                                                   |
| - 消費電力（電源オフ時）       | 7 µA                                                                   |
| - 消費電力（スリープ時）       | 1.3 mA                                                                 |
| - 消費電力（アイドル時）       | 15.7 mA                                                                |

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/overview.jpg" style={{width:800}}/></div>

### 4G LTE HATとRaspberry Pi GPIO接続

4G LTE HATは標準的な40ピンGPIOインターフェースを介してRaspberry Piに接続され、シームレスな統合を可能にします。主要なGPIO接続とその機能は以下の通りです：

- **電源供給 (5V)**: HATはRaspberry PiのGPIOヘッダーの5Vピンを通じて電力を受け取ります。PowerModeスイッチジャンパーを接続すると、Raspberry Piはこれらのピンを介して逆方向に電力を供給することができます。

- **UART通信 (RX/TX)**: Raspberry PiのGPIOピン8 (TXD) と10 (RXD) はHATに接続され、4Gモジュールとの通信のための主要なUARTインターフェースとして機能します。PCB上のDIPスイッチを調整する必要があることに注意してください。詳細な設定は後述するDIPスイッチセクションで説明します。

- **リセット (RST)**: GPIOピン29は4Gモジュールのリセットピンに接続されており、Raspberry Piが信号を切り替えることで4Gモジュールをリセットすることができます（デフォルトは低、信号を高にするとリセットがトリガーされます）。PCB上のDIPスイッチを調整する必要があることに注意してください。詳細な設定は後述するDIPスイッチセクションで説明します。

- **電源制御 (PWR)**: GPIOピン31は4Gモジュールの電源制御ピンに接続されており、Raspberry Piが高信号でモジュールをオンにしたり、低信号でオフにしたりすることができます。

これらの接続により、Raspberry Piは4G LTE HATを効果的に電力供給、通信、制御することができます。PCB上のDIPスイッチを調整する必要があることに注意してください。詳細な設定は後述するDIPスイッチセクションで説明します。

### 電源供給

4G LTE HATは柔軟性と互換性を確保するために複数の電源供給モードをサポートしています：

1. **Raspberry Pi 40ピン5V電源供給**: HATはRaspberry Piの40ピンGPIOヘッダーの5Vピンから直接電力を供給することができます。この方法は小規模なアプリケーションに適していますが、より大きな電力需要には不十分な場合があり、信頼性を確認するためのテストが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power4.jpg" style={{width:600}}/></div>

2. **Raspberry Pi USB-AまたはUSB-C電源供給**: HATはRaspberry PiのオンボードUSB-AまたはUSB-Cポートを介して電力を供給することができます。キットに含まれるアダプターにより、このセットアップが簡単になり、HATへの直接接続が可能です。

`Raspberry Piによる電力供給`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power1.jpg" style={{width:600}}/></div>

`PCによる電力供給`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.jpg" style={{width:600}}/></div>

3. **外部USB-C電源供給**: 独立したUSB-C電源は、5-15VのPD電源供給を提供し、最大27Wの電力を供給することができます。ジャンパーワイヤーを使用することで、HATは40ピンGPIOヘッダーを介してRaspberry Piに直接電力を供給することも可能です。

これらのオプションは、異なるアプリケーション要件と電力需要に対応する柔軟性を提供します。PCB上のDIPスイッチを調整する必要があることに注意してください。詳細な設定は後述するDIPスイッチセクションで説明します。

`4G HATを個別に電力供給`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power5.jpg" style={{width:600}}/></div>

`4G HATとRaspberry Piの両方に電力供給`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power3.jpg" style={{width:600}}/></div>

### SIMカードスロット

4G LTE HATにはCAT4モジュール用のSIMカードスロットが含まれており、3Vまたは1.8Vの電圧を持つNano SIMカードをサポートしています。適切な設置のために、SIMカードスロットはRaspberry Piのネットワークポートの下にある位置に垂直に配置する必要があります。これにより、確実な接続と最適な性能が保証されます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/nano_sim_small.png" 
    style={{ width: 200}} 
  />
</div>

### アンテナ接続

4G LTE HATは、IPEX 1コネクタを使用した3つのアンテナ接続をサポートしています：

1. **MAIN LTEアンテナコネクタ**: 主なLTE接続に使用されます。
2. **AUX LTEアンテナコネクタ**: 補助的なLTEサポートを提供し、性能を向上させます。
3. **GPS/GNSSアンテナコネクタ**: GPSおよびGNSS機能専用で、正確な位置情報を保証します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/antenna_small.png" 
    style={{ width: 200}} 
  />
</div>

これらのアンテナオプションにより、LTEおよび位置情報ベースのアプリケーションにおいて堅牢で信頼性の高い接続が確保されます。

### LEDインジケーター

4G LTE HATには、ステータス監視用の2つのLEDインジケーターが搭載されています：

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/LED.PNG" 
    style={{ width: 200}} 
  />
</div>

- **PWR LED (赤)**: HATの電源状態を示します。
- **NET LED (青)**: ネットワーク接続状態を示します。アクティブな接続やデータ転送中には特定の間隔で点滅し、接続が確立されていない場合は消灯します。

**ネットワークインジケーターの状態と対応するネットワークステータス**

| **インジケーター** | **インジケーター状態**                 | **対応するネットワークステータス**     |
|--------------------|---------------------------------------|---------------------------------------|
| **NET_STATUS**     | 点滅 (200 msオン / 1800 msオフ)       | 2Gネットワークに登録済み              |
|                    | 点滅 (1800 msオン / 200 msオフ)       | 4Gネットワークに登録済み              |
|                    | 常時点灯                             | データ送信中                          |
|                    | 消灯                                 | ネットワーク接続なし                  |

これらのLEDは、HATの電源およびネットワークアクティビティに関する迅速な視覚的フィードバックを提供します。

### USB-Cインターフェース

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbcin.jpg" 
    style={{ width: 600}} 
  />
</div>

4G LTE HATには、異なる機能を持つ2つのUSB-Cインターフェースが含まれています：

1. **USB-C 1インターフェース**

  - EC25モジュールと統合されており、USB 2.0機能をサポートします。
  - ATコマンド通信、データ送信、GNSS NMEA出力、ソフトウェアデバッグ、ファームウェアアップグレードを可能にします。

2. **USB-C 2インターフェース**

  - LTE HATに最大5V-15Vの高出力電源を供給するために使用されます。
  - 電源供給はDIPスイッチを使用して切り替えることができます。
  - PowerModeスイッチジャンパーを接続すると、このインターフェースを使用してRaspberry Piに直接電力を供給することができます。

これらのインターフェースは、HATの効率的な通信、デバッグ、および電力供給を保証します。USB-C 2インターフェースは電力供給専用として機能します。

### ブートパッド

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/bootpads.PNG" 
    style={{ width: 500}} 
  />
</div>

- LTEモジュールの**USB_BOOT**ピンおよび**1.8V VDD**へのアクセスを提供します。
- USB_BOOTピンを短絡させることで、LTEモジュールをブートモードに強制的に切り替え、**USB-C 1**インターフェースを介してファームウェアの書き込みを可能にします。

### RST/PWRボタン

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rstpwr.PNG" 
    style={{ width: 300}} 
  />
</div>

- **RSTボタン**: LTEモジュールをワンクリックでリセットします。このボタンは水平に取り付けられており、操作が簡単です。
- **PWRボタン**:
  - 電源オフ状態では、このボタンを押すとHATの電源がオンになります。
  - 電源オン状態では、このボタンを押し続けると電源がオフになります。

### DIPスイッチ

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/dipswitches.PNG" 
    style={{ width: 150}} 
  />
</div>

- **セルフスタート電源スイッチ**:
  - **0 (オフ)**: 無効。
  - **1 (オン)**: 電源が供給されるとLTE HATが自動的に電源オンになります。
- **外部電源スイッチ**:
  - **0 (オフ)**: 無効。
  - **1 (オン)**: USB-C 2インターフェースを介した外部電源供給を許可します。
- **RX接続スイッチ**:
  - **0 (オフ)**: 無効。
  - **1 (オン)**: Raspberry PiのUART-RXとの通信を有効にします。
- **TX接続スイッチ**:
  - **0 (オフ)**: 無効。
  - **1 (オン)**: Raspberry PiのUART-TXとの通信を有効にします。
- **RST接続スイッチ**:
  - **0 (オフ)**: 無効。
  - **1 (オン)**: Raspberry PiがGPIOを介してLTEモジュールのリセットを制御できるようにします。
- **PWR接続スイッチ**:
  - **0 (オフ)**: 無効。
  - **1 (オン)**: Raspberry PiがGPIOを介してLTEモジュールの電源状態を制御できるようにします。

### レイアウト

4G LTE HATは、Raspberry Pi 5とのシームレスな統合を実現するために慎重に配置されています：

- **USB-C 1コネクタ**: 設置後、Raspberry Pi 5のUSB 3.0インターフェースと垂直に整列します。
- **USB-C 2コネクタ**: Raspberry Pi 5のUSB-C電源ポートと垂直に整列します。
- **Nano SIMカードスロット**: Raspberry Pi 5のイーサネットポートと垂直に整列するように配置されています。
- **ステータスライト (PWR/NET)**: Raspberry Pi 5のステータスLEDと垂直に整列しており、視認性が高いです。
- **アンテナコネクタ**: ボードの背面に均等に配置された3つのアンテナコネクタがあり、簡単に取り付け可能です。
- **ブートパッド**: ボードの外縁に便利に配置されており、ブートモード操作のために簡単に短絡できます。

この慎重に設計されたレイアウトにより、Raspberry Pi 5との互換性、使いやすさ、および整理されたセットアップが保証されます。

## HAT構造とRaspberry Pi互換性

4G LTE HATはRaspberry Piのサイズに合わせて設計されており、シームレスな統合を実現します。主な互換性と構造上の特徴は以下の通りです：

- **40ピンGPIOの整列**: HATは40ピンGPIOヘッダーを介して接続され、Raspberry Piと完全に整列します。公式のRaspberry Piヒートシンクとの互換性を維持するために積層コネクタが追加されています。
  
- **USB-AからUSB-Cアダプタのサポート**: 積層コネクタを取り付けた後、USB-C 1ポートは適切な高さに配置され、USB-AからUSB-Cアダプタを直接接続できます。
  
- **カメラコネクタへのアクセス**: PCBレイアウトはRaspberry Pi 5のカメラコネクタ周辺にスペースを確保しており、カメラケーブルが簡単に通過できるように穴が設けられています。

- **固定マウント穴**: HATにはRaspberry Pi 5のマウントポイントと一致する4つのマウント穴があり、銅製の柱とネジを使用してしっかりと取り付けることができます。
  
- **高さ調整**: 積層ヘッダーはHATをRaspberry Piの上に適切な高さまで持ち上げ、コンポーネントのクリアランスを確保し、USB-C 1ポートがアクセス可能になります。
  
これらの設計上の配慮により、HATはRaspberry Pi 5と完全に互換性があり、取り付けや機能性を維持します。



## 組み立てガイド

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/steps.jpg" 
    style={{ width: 900}} 
  />
</div>

## ソフトウェア準備

### Windowsの場合

**ステップ1: ドライバのインストール**

Windowsユーザーは、モジュールに必要なドライバを[ダウンロードしてインストール](https://www.quectel.com/download/quectel_lte5g_windows_usb_driver_v2-7/)してください。
これはモジュールとの適切な通信のために必須です。

**ステップ2: モジュールの接続**
USBケーブルを使用してモジュールをPCに接続します。
SIMカードがモジュールに正しく挿入されていることを確認してください。

**ステップ3: モジュールの電源をオン**
モジュールの電源ボタンを押してオンにします。

**ステップ4: 通信ポートへのアクセス**
ドライバがインストールされると、モジュールとの通信に使用できる3つの独立したCOMポートが表示されます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/drivers.PNG" 
    style={{ width: 400}} 
  />
</div>

**ステップ5: GUIツール（QCOM v1.6）のインストール**

[QCOM v1.6をダウンロードしてインストール](https://www.quectel.com/download/qcom_v1-6/)します。このツールはモジュールと対話するためのグラフィカルインターフェースです。
ツールを開いてATコマンドの送信を開始します。

**ステップ6: COMポートの設定とテスト**

GUIツールを開き、モジュールに適したCOMポートを選択します。
通信設定（例：ボーレート）を必要に応じて調整します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG" 
    style={{ width: 600}} 
  />
</div>

コマンド入力ボックスに以下のテストコマンドを入力します：

```bash
AT
```
**ステップ7: 出力の確認**

セットアップが成功した場合、モジュールは以下の出力を返します：

```bash
OK
```

### Raspberry Piの場合

**ステップ1: ドライバのインストール**

- **1.1. カーネル互換性の確認**
Raspberry Piに最新のカーネルがインストールされていることを確認してください。以下のコマンドを使用してカーネルバージョンを確認します：

```bash
uname -r
```

このガイドでは、カーネルバージョンは6.6.xx（Bookworm）です。対応するQuectel USBドライバをインストールしてください。

- **1.2. 必要なツールの更新とインストール**
以下のコマンドを実行してシステムを更新し、必要なツールをインストールします：

```bash
sudo apt upgrade
sudo apt install git make gcc
```

- **1.3. Quectel USBドライバのダウンロードとインストール**
ドライバリポジトリをクローンしてドライバをビルドします：

```bash
git clone https://github.com/QuecPython/Quectel_Linux_USB_Serial_Option_Driver.git
cd Quectel_Linux_USB_Serial_Option_Driver/src/v6.4.11
sudo make install
```

- **1.4. 接続と確認**

モジュールをUSB経由でRaspberry Piに接続します。
モジュールの電源ボタンを押します。
モジュールが正しく検出されていることを確認します：

```bash
lsusb
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-rpi-small.PNG" 
    style={{ width: 600}} 
  />
</div>

```bash
ls /dev/ttyUSB*
```
ATコマンドを使用する場合、通信ポートとして/dev/ttyUSB2を使用します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-list.PNG" 
    style={{ width: 600}} 
  />
</div>

**ステップ2: Minicomのインストール**

 - **2.1. Minicomのインストール**
ATコマンドを送信するためのMinicomツールをインストールします：

```bash
sudo apt install minicom
```

- **2.2. Minicomの設定**
設定モードでMinicomを実行します：

```bash
sudo minicom -s
```

以下のような設定を行います：

```bash
ポート: /dev/ttyUSB2
ボーレート: 9600
パリティ: N
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-settings.PNG" 
    style={{ width: 600}} 
  />
</div>

**ステップ3: ATコマンドでテスト**

- **3.1 設定済みポートでMinicomを開く**
```bash
sudo minicom -D /dev/ttyUSB2
```
以下のコマンドを入力して通信をテストします：

```bash
AT
```
モジュールは以下のように応答するはずです：
```bash
OK
```

## リソース

- **[ウェブページ]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[ドキュメント]** [ATコマンドマニュアル V2.0](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_EC2xEG9xEG2x-GEM05_Series_AT_Commands_Manual_V2.0.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>