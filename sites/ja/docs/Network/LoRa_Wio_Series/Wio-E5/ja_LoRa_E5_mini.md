---
description: Wio-E5 mini の入門ガイド。
title: Wio-E5 mini
nointro: null
keywords:
  - wio
  - docusaurus
image: https://wiki.seeedstudio.com/ja/wio_gps_board/
slug: /LoRa_E5_mini
sku: 113990939, 113991156
last_update:
  date: 01/15/2026
  author: David Du
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/LoRa_E5_mini/
---
<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

> LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されるマークです。
LoRa® マークは Semtech Corporation またはその子会社の商標です。

Wio-E5 mini は、迅速なテストと小型プロトタイプの構築に適したコンパクトサイズの開発ボードで、長距離伝送範囲を持つ理想的な LoRaWAN® ワイヤレス IoT デバイスの設計を支援します。

Wio-E5 mini には [Wio-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) が組み込まれており、世界初の LoRa® RF と MCU チップを単一の小さなチップに統合し、FCC および CE 認証を取得しています。ARM Cortex-M4 コアと Semtech SX126X LoRa® チップを搭載し、世界的な周波数での LoRaWAN® プロトコルと (G)FSK、BPSK、(G)MSK、および LoRa® 変調をサポートしています。

[Wio-E5](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/) についてはこちらで詳しく学習できます。

Wio-E5 と LoRa® RFM95 チップの比較詳細：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

Wio-E5 mini は、UART、ADC、SPI、IIC などを含む Wio-E5 のすべての GPIO を引き出しています。RESET および BOOT ボタンを搭載し、使いやすい設計となっています。LoRaWAN® プロトコルをサポートし、Wio-E5 mini は超長距離伝送と超低消費電力を特徴としています：最大 10 km の伝送範囲を実現でき、オンボードの Wio-E5 モジュールのスリープ電流は 2.1 uA（WOR モード）と低く抑えられています。-40℃ ～ 85℃ の広い動作温度、-116.5dBm ～ -136 dBm の高感度、3.3V で最大 +20.8 dBm の RF 出力パワーを持つ産業標準で設計されています。

Wio-E5 mini 以外にも、より複雑なインターフェースと機能を搭載した Wio-E5 Development Board も提供しており、Wio-E5 モジュールのより強力な性能を引き出すことができます。より広範囲のアクセスプロトコルと豊富な種類のインターフェースを提供します。これにより、RS-485、Grove インターフェース、豊富な GPIO を使用してモジュールを迅速にテストおよびプロトタイプ化することができます。（Wio-E5 Development Board についてはこちらで詳しく学習）

Wio-E5 は MCU を搭載した LoRaWAN® チップであるため、Wio-E5 mini を活用する主な方法は 3 つあります：

**1. Wio-E5 mini を PC に接続し、AT コマンドで制御**

オンボードに USB to UART 機能が内蔵されているため、USB Type C ケーブルで Wio-E5 mini を PC に接続し、シリアル通信ソフトウェアを使用して AT コマンドを送信し、ボードからデータを読み取ることができます。

**2. Wio-E5 mini を UART 経由で別のメインボードに接続し、AT コマンドで制御**

例えば、Wio-E5 mini を Seeeduino XIAO と拡張ボードに UART 経由で接続し、Arduino IDE シリアルモニターを通じて Seeeduino XIAO から AT コマンドを送信してデータを読み取ります。

**3. SDK を使用したユーザーアプリケーション開発**

STMicroelectronics が公式に提供する SDK である STM32Cube Programmer を使用して、MCU 機能を持つ独自の LoRa® 開発ボードを開発します。この SDK リソースをダウンロードするには、以下の学習とドキュメントのリソースをご確認ください。

上記のすべての優れた機能により、Wio-E5 mini は、スマート農業、スマートオフィス、スマート産業などの長距離、超低消費電力 IoT シナリオでの IoT デバイス開発、テスト、プロトタイピング、およびアプリケーションにおいて優れた選択肢となります。

LoRa® および LoRaWAN® 技術に馴染みがない場合は、このブログ [LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) を詳しくご確認ください。

## 特徴

- Wio-E5 STM32WLE5JC からすべての GPIO を引き出し

- グローバル LoRaWAN® および LoRa® 周波数プランをサポート

- 最大 10km の長距離伝送範囲（開放エリアでの理想値）

- 迅速なテストと小型プロトタイプ構築に適したミニでコンパクトなサイズ

- オンボードに便利な RESET および BOOT ボタン

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4041615358935_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## 仕様

<table class="tg">
<thead>
<tr><th class="tg-6cwf">パラメータ</th><th class="tg-6cwf">仕様</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">サイズ</td>
<td class="tg-g9rn">50*23mm</td>
</tr>
<tr>
<td class="tg-g9rn">電圧 - 供給</td>
<td class="tg-g9rn">3.7V - 5V</td>
</tr>
<tr>
<td class="tg-g9rn">電力 - 出力</td>
<td class="tg-g9rn">3.3V で最大 +20.8 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">動作周波数</td>
<td class="tg-g9rn">868/915MHz</td>
</tr>
<tr>
<td class="tg-g9rn">プロトコル</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">感度</td>
<td class="tg-g9rn">-116.5 dBm ~ -136 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">インターフェース</td>
<td class="tg-g9rn">USB Type C / 2P-2.54mm Hole / 1*12P-2.54mm Header*2 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">変調</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">動作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">電流</td>
<td class="tg-g9rn">Wio-E5 モジュールのスリープ電流は 2.1uA と低い（WOR モード）</td>
</tr>
</tbody>
</table>

<div></div>
<div></div>
<div></div>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">パーツリスト：</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 mini *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">アンテナ(EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">ステッカー*1 </td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">1X12ピン オスピンヘッダー *2</td>
</tr>
</tbody>
</table>

## アプリケーション

- Wio-E5 モジュールの簡単なテスト
- Wio-E5 を使用した LoRa® デバイスの迅速な小型プロトタイピング
- あらゆる長距離ワイヤレス通信アプリケーション開発
- LoRa® および LoRaWAN® アプリケーションの学習と研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## アプリケーションノート

**1. ファクトリー AT ファームウェア**

wio-E5 シリーズには内蔵の AT コマンドファームウェアがあり、LoRaWAN® Class A/B/C プロトコルと幅広い周波数プラン：EU868/US915/AU915/AS923/KR920/IN865 をサポートしています。この AT コマンドファームウェアにより、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

AT コマンドファームウェアには DFU 用のブートローダーと AT アプリケーションが含まれています。"PB13/SPI_SCK/BOOT" ピンは、Wio-E5 をブートローダーに留めるか AT アプリケーションにジャンプするかを制御するために使用されます。PB13 が HIGH の場合、モジュールはリセット後に AT アプリケーションにジャンプし、デフォルトのボーレートは 9600 です。PB13 が LOW の場合（Wio-E5 mini の "Boot" ボタンを押す）、モジュールはブートローダーに留まり、ボーレート 115200 で 1 秒ごとに "C" 文字を送信し続けます。

:::tip

- ファクトリー AT ファームウェアは RDP（読み取り保護）レベル 1 でプログラムされており、開発者は STM32Cube Programmer で最初に RDP を削除する必要があります。RDP をレベル 0 に戻すとフラッシュメモリの一括消去が発生し、ファクトリー AT ファームウェアは再度復元できないことに注意してください。
- Wio-E5 モジュールの "PB13/SPI_SCK/BOOT" ピンは通常の GPIO であり、MCU の "BOOT0" ピンではありません。この "PB13/SPI_SCK/BOOT" ピンは、ファクトリー AT ファームウェアのブートローダーで使用され、APP にジャンプするかブートローダーに留まる（DFU 用）かを決定します。実際の "BOOT0" ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際にはユーザーは注意が必要です

:::

**2. クロック設定**

2.1 HSE

- 32MHz TCXO

- TCXO 電源：PB0-VDD_TCXO

2.2 LSE

- 32.768KHz 水晶発振器

**3. RF スイッチ**

**Wio-E5 モジュールは RFO_HP 経由でのみ送信します：**

- 受信：PA4=1, PA5=0

- 送信（高出力、SMPS モード）：PA4=0, PA5=1

## 入門ガイド

### AT コマンドのクイックスタート

#### 準備

- **ステップ 1.** Type-C ケーブルで Wio-E5 mini を PC に接続

- **ステップ 2.** シリアルツール（例：Arduino Serial Monitor）を開き、正しい COM ポートを選択し、ボーレートを 9600 に設定し、Both NL & CR を選択

- **ステップ 3.** "AT" を送信してみると、応答が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本的な AT コマンド

| コマンド形式 | 戻り値 | 説明 |
| --- | --- | --- |
| AT | +AT: OK | テストコマンド |
| AT+VER | +VER: \$MAJOR.\$MINOR.\$PATCH <br></br> +VER: 4.0.11 | ファームウェアバージョンの確認 |
| AT+ID // すべて読み取り、DevAddr（ABP）、DevEui（OTAA）、AppEui（OTAA）<br></br>AT+ID = DevAddr // デバイスアドレス読み取り<br></br>AT+ID = DevEui // DevEui 読み取り<br></br>AT+ID = AppEui // AppEui 読み取り | +ID: DevAddr, xx: xx: xx:xx<br></br>+ID: DevEui, xx:xx:xx:xx:xx:xx:xx:xx<br></br>+ID: AppEui13, xx:xx:xx:xx:xx:xx:xx | LoRaWAN モジュールの ID を確認するために使用。ID はビッグエンディアン数として扱われます。 |
| AT+ID = DevAddr, "01234567" // 新しい DevAddr を設定<br></br>AT+ID = DevEui, "0123456789ABCDEF" // 新しい DevEui を設定<br></br>AT+ID = AppEui, "0123456789ABCDEF" // 新しい AppEui を設定 | +ID: DevAddr, 01:23:45:67<br></br>+ID: DevEui, 01:23:45:67:89:AB:CD:EF<br></br>+ID: AppEui, 01:23:45:67:89:AB:CD:EF | ID を変更 |
| AT+RESET | +RESET: OK | モジュールをリセット |
| AT+MSG="Data to send" | +MSG: Start<br></br>+MSG: FPENDING // ダウンリンクフレーム FPENDING フラグが設定<br></br>+MSG: Link 20, 1<br></br>+MSG: ACK Received // LinkCheckAns 受信<br></br>+ MSG: MULTICAST // ダウンリンクフレームはマルチキャストメッセージ<br></br>+MSG: PORT: 8; RX: "12345678" //ダウンリンクメッセージ受信<br></br>+MSG: RXWIN2, RSSI -106, SNR 4 //ダウンリンクフレーム信号強度<br></br>+MSG: Done | サーバーによる確認が不要な文字列形式フレームを送信 |
| AT+PORT = "port"<br></br>例：AT+PORT = 8 //ポートを 8 に設定 | + PORT: 8 | MSG/CMSG/MSGHEX/CMSGHEX コマンドでメッセージ送信に使用されるポート番号を設定、ポート番号は 1 から 255 の範囲である必要があります。 |
| AT+ADR=" state"<br></br>例：AT+ADR=ON // ADR 機能を有効<br></br>AT+ ADR= OFF // ADR 機能を無効<br></br>AT+ADR=? // 現在の ADR 設定を確認 | +ADR: ON  // ADR クエリ/設定戻り値 | LoRaWAN モジュールの ADR 機能を設定 |
| AT+DR // 現在選択されている DataRate を確認<br></br>AT+DR=drx // "drx" は 0～15 の範囲 | +DR: DR0<br></br>+DR: US915 DR0 SF10 BW12 | LoRaWAN 定義の DRx を使用して LoRaWAN AT モデムのデータレートを設定。 |
| AT+ DR= band //"band" は第3章バンドプランで定義されたバンド名<br></br>AT+ DR= SCHEME // 現在のバンドを確認 | (EU868) +DR: EU868<br></br>+DR: EU868 DR0 SF12 BW125K<br></br>+DR: EU868 DR1 SF11 BW125K<br></br>+DR: EU868 DR2 SF10 BW125K<br></br>+DR: EU868 DR3 SF9 BW125K<br></br>+DR: EU868 DR4 SF8 BW125K<br></br>+DR: EU868 DR5 SF7 BW125K<br></br>+DR: EU868 DR6 SF7 BW125K<br></br>+DR: EU868 DR7 FSK<br></br>+DR: EU868 DR8 RFU<br></br>+DR: EU868 DR9 RFU<br></br>+DR: EU868 DR10 RFU<br></br>+DR: EU868 DR11 RFU<br></br>+DR: EU868 DR12 RFU<br></br>+DR: EU868 DR13 RFU<br></br>+DR: EU868 DR14 RFU<br></br>+DR: EU868 DR15 RFU | データレートスキーム |
| AT + CH // すべてのチャンネルをクエリ<br></br>AT + CH = ch // 単一チャンネル周波数を確認 |  | チャンネル設定をクエリ |
| AT+CH="chn", ["freq"], ["drmin"], ["drmax"]<br></br>// chn チャンネル周波数を "Freq" に変更<br></br>// "freq" は MHz 単位<br></br>// 利用可能な "drmin"/"drmax" 範囲 DR0 ～ DR15 | +CH: 3,433700000,DR0:DR5<br></br>+CH: 3,433700000,DR | LoRaWAN モデムのチャンネルパラメータを設定、周波数をゼロに設定すると1つのチャンネルを削除。 |
| AT+CH=chn,ON<br></br>AT+CH=chn, OFF |  | チャンネルを有効または無効にする |
| AT+ KEY= NWKSKEY, " 16 bytes length key"<br></br>例：AT+KEY=NWKSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例：AT+KEY=NWKSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C" | + KEY: NWKSKEY 2B7E151628AED2A6ABF7158809CF4F3C | ネットワークセッションキー（NWKSKEY）を変更 |
| AT+ KEY= APPSKEY, " 16 bytes length key"<br></br>例：AT+KEY=APPSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例：AT+KEY= APPSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 | + KEY: APPSKEY 2B7E151628AED2A6ABF7158809CF4F3C | アプリケーションセッションキー（APPSKEY）を変更 |
| AT+ FDEFAULT<br></br>AT+ FDEFAULT= Seeed | +FDEFAULT: OK | LoRaWAN AT モデムを工場出荷時のデフォルト設定にリセット |
| T+ DFU=" New state"<br></br>例：AT+DFU=ON // DFU 機能を有効<br></br>例：AT+DFU=OFF //DFU 機能を無効<br></br>AT+DFU=? // DFU が有効かどうかの設定を確認 | +DFU: ON<br></br>+DFU: OFF | DFU モードに入るために使用 |
| T+MODE="mode"<br></br>例：AT+MODE=TEST // TEST モードに入る<br></br>例：AT+MODE= LWOTAA // LWOTAA モードに入る<br></br>例：AT+MODE= LWABP // LWABP モードに入る | +MODE: LWABP // TEST モードに正常に入る<br></br>+MODE: LWOTAA // LWOTAA モードに正常に入る<br></br>+MODE: TEST // TEST モードに正常に入る | 動作モードを選択するために使用 |
| AT + JOIN<br></br>AT + JOIN = FORCE | a) 接続成功 +JOIN: Starting<br></br>+ JOIN: NORMAL<br></br>+JOIN: NetID 000024 DevAddr 48:00:00:01<br></br>+JOIN: Done<br></br>b) 接続失敗<br></br>+JOIN: Join failed<br></br>c) 接続プロセス進行中<br></br>+ JOIN: LoRaWAN modem is busy | OTAA モードが有効な場合、JOIN コマンドを使用して既知のネットワークに接続できます |

詳細については、[コマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください。

#### The Things Network への接続とデータ送信

- **ステップ 1.** [The Things Network](https://www.thethingsnetwork.org) ウェブサイトにアクセスし、新しいアカウントにサインアップします

- **ステップ 2.** ログイン後、プロフィールをクリックして **Console** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** デバイスとゲートウェイの追加を開始するクラスターを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** **Go to applications** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** **+ Add application** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Application ID** を入力し、**Create application** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意：** ここで **Application name** と **Description** は必須フィールドではありません。**Application name** を空白のままにすると、デフォルトで **Application ID** と同じ名前が使用されます

以下が新しく作成されたアプリケーションです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **+ Add end device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** **Manually** をクリックして、登録認証情報を手動で入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** お住まいの地域に応じて **Frequency plan** を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用していることを確認してください。**LoRaWAN® version** として **MAC V1.0.2** を、**Regional Parameters version** として **PHY V1.0.2 REV B** を選択します。これらの設定は Wio-E5 の LoraWAN® スタックに従っています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** Wio-E5 モジュールがシリアルコンソール経由でアクセス可能な状態で、シリアルモニターで以下の AT コマンドを送信します：

  - `AT+ID=DevEui` でデバイス EUI を取得
  - `AT+ID=AppEui` でアプリ EUI を取得
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` でアプリキーを設定

出力は以下のようになります：

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **ステップ 11.** 上記の情報を **DevEUI**、**AppEUI**、**AppKey** フィールドにコピー＆ペーストします。**End device ID** フィールドは **DevEUI** を入力すると自動的に入力されます。最後に **Register end device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** LoRaWAN® ゲートウェイを TTN コンソールに登録します。[こちら](https://wiki.seeedstudio.com/ja/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)に示されている手順を参照してください

- **ステップ 13.** TTN に接続するために以下の AT コマンドを入力します

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

シリアルモニターの出力は以下のようになります：

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

シリアルコンソールで **+JOIN: Network joined** が表示されれば、デバイスが TTN に正常に接続されたことを意味します！

**End devices** ページでデバイスのステータスを確認することもできます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 14.** TTN にデータを送信するために以下の AT コマンドを入力します

```
// send string "HELLO" to TTN 
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// send hex "00 11 22 33 44" 
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

AT コマンドの詳細については、[Wio-E5 AT コマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください

### STM32Cube MCU パッケージでの開発

このセクションは Wio-E5 mini 向けで、STM32WL シリーズ用 STM32Cube MCU パッケージ（SDK）を使用していくつかのアプリケーションを構築することを目的としています。

**注意：** STM32WL シリーズ用 STM32Cube MCU パッケージの最新バージョンである v1.1.0 をサポートするようにライブラリを更新しました。

:::note
SDK でプログラムする前に工場出荷時の AT ファームウェアを消去する必要があるため、まず[工場出荷時 AT ファームウェアの消去](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#21-erase-factory-at-firmware)セクションをお読みください。工場出荷時の AT ファームウェアを消去すると復元できません。
:::

#### 準備

ソフトウェア：

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)：コンパイルとデバッグ用

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)：STM32 デバイスのプログラミング用

ハードウェア：

- LoRaWAN® ネットワークサーバー（例：TTN）に接続された LoRaWAN® ゲートウェイ

- USB Type-C ケーブルと ST-LINK。Type-C ケーブルをボードの Type-C ポートに接続して電源とシリアル通信を行います。ST-LINK を以下のように SWD ピンに接続します

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO 設定概要

- Wio-E5 シリーズのハードウェア設計は ST の公式 STM32WL55JC 開発ボードである NUCLEO-WL55JC と少し異なるため、開発者は SDK サンプルを Wio-E5 シリーズに適応させるために一部の GPIO を再設定する必要があります。私たちはすでに GPIO を再設定していますが、違いを指摘することが必要だと考えています。

|SDK サンプルラベル|NUCLEO-WL55JC の GPIO|Wio-E5 mini の GPIO|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|なし|
|BUT1|PA0|PB13（ブートボタン）|
|BUT2|PA1|なし|
|BUT3|PC6|なし|
|LED1|PB15|なし|
|LED2|PB9|PB5|
|LED3|PB11|なし|
|PROB1|PB12|PA0（D0 ボタン）|
|PROB2|PB13|PB10|
|PROB3|PB14|PB3|
|PROB4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

:::note
ラベル `PROB` はプローブラインのピンを指します。これらのピンは `CM4_EVENTOUT` 追加機能として設定できます。Arm Cortex-M4 カーネルの CoreSight デバッグコンポーネントの一部として、この機能は非侵入的なデバッグとハードウェアレベルのイベントタグ付けを可能にします。CPU を一時停止したり通信インターフェース（UART など）を占有したりすることなく、CPU 内部の活動をリアルタイムで監視し、ソフトウェアで直接観察することが困難な「イベント」を測定可能な電気信号に変換します。
:::

### アプリケーション

それでは、STM32WL シリーズ用 STM32Cube MCU パッケージ（SDK）を使用した Wio-E5 mini のいくつかのアプリケーションを探索してみましょう。

#### LoRaWAN® エンドノード

このアプリケーションは Wio-E5 mini を TTN（The Things Network）に接続し、LoRaWAN® ゲートウェイとの接続後にデータを送信します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

  **注意：** Mac の場合、以下のいずれかのオプションを使用してプロジェクトを開く必要があります：

  - **1.** `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node` に移動します。ファイル "LoRaWAN_End_Node.ioc" をダブルクリックします。

  - **2.** 以下の画像のように "Import Projects from File System or Archieve" を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** プロジェクトを右クリックして **Properties** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs` に移動し、**Convert to Intel Hex file (-O ihex)** にチェックを入れて **Apply and Close** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'** をクリックすると、エラーなしでコンパイルされるはずです

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

次に、**Device EUI**、**Application EUI**、**Application KEY**、**LoRawan® Region**を変更します

- **ステップ 7.** [こちらのガイド](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)に従ってTTNアプリケーションを設定し、**Application EUI**を取得して`LoRaWAN/App/se-identity.h`のマクロ定義`LORAWAN_JOIN_EUI`にコピーしてください。例えば、ここでのApplication EUIは`80 00 00 00 00 00 00 0x07`です：

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **ステップ 8.** また、`LoRaWAN/App/se-identity.h`でマクロ定義`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`を設定することで、**Device EUI**と**Application Key**を変更できます。`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`がTTNコンソールの`Device EUI`と`App Key`と同じであることを確認してください。

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** デフォルトのLoRaWAN Regionは`EU868`です。`LoRaWAN/App/lora_app.h`でマクロ定義`ACTIVE_REGION`を設定することで変更できます

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** 上記の変更後、サンプルを**リビルド**してWio-E5にプログラムしてください。`STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESET Button`を押したまま`Connect`をクリックし、`RESET Button`を離してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11.** Read Out Protectionが`AA`であることを確認してください。`BB`と表示されている場合は、`AA`を選択して`Apply`をクリックしてください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパス（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`）を選択し、以下の画像のようにプログラミングオプションを選択してから`Start Programming`をクリックしてください！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully**というメッセージが表示されます。

- **ステップ 13.** LoRaWAN® GatewayとTTNが設定されている場合、Wio-E5はリセット後に正常に接続されます！確認用のLoRaWAN®パッケージが30秒ごとにTTNに送信されます。接続が成功すると、シリアルモニター（ここではArduino Serial Monitorを使用）に以下のログが表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- おめでとうございます！これでWio-E5をLoRaWAN®ネットワークに接続できました！より魅力的なLoRaWAN®エンドノードアプリケーションの開発を進めることができます！

**注意：** Wio-E5は高出力モードのみをサポートしているため、`radio_board_if.h`でこれらのマクロ定義を使用することはできません：

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

**RBI_CONF_RFO**が`radio_board_if.h`で**RBI_CONF_RFO_LP_HP**として定義されていても、**USE_BSP_DRIVER**が定義されており、**BSP_RADIO_GetTxConfig()**関数が**RADIO_CONF_RFO_HP**を返すため、使用されません

#### FreeRTOS LoRaWAN®

このアプリケーションもWio-E5 miniをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイとの接続後にデータを送信します。前のLoRaWAN®エンドノードアプリケーションとこのFreeRTOS LoRaWAN®アプリケーションの違いは、前者がベアメタルで動作するのに対し、こちらはFreeRTOS上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードしてください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`に移動してください

- **ステップ 3.** **.project**ファイルをダブルクリックしてください

- **ステップ 4.** 前の**LoRaWAN®エンドノード**アプリケーションの**ステップ 4 - ステップ 13**を参照して、Wio-E5 miniをTTNに接続してください！

#### FreeRTOS LoRaWAN® AT

このアプリケーションもWio-E5 miniをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイとの接続後にデータを送信します。前のFreeRTOS LoRaWANアプリケーションとこのアプリケーションの違いは、ATコマンドを使用できることです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードしてください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`に移動してください

- **ステップ 3.** **.project**ファイルをダブルクリックしてください

- **ステップ 4.** 前の**LoRaWANエンドノード**アプリケーションの**ステップ 4 - ステップ 12**を参照してください

- **ステップ 5.** **Arduino Serial Monitor**などのシリアルモニターを開くと、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **AT?**と入力して**ENTER**を押すと、利用可能なすべてのATコマンドが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **Device EUI**、**Application EUI**、**Application KEY**、**LoRawan® Region**を変更したい場合は、ATコマンドを使用して変更できます。ただし、これらのパラメータはこの例では既に**se-identity.h**と**lora_app.h**で設定されています

- **ステップ 8.** **AT+JOIN=1**と入力すると、接続が成功すると以下の出力が表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意：** ここでは**AT+JOIN=(Mode)**形式を使用する必要があります。**Mode**は**ABPの場合は0**または**OTAAの場合は1**に対応します

#### FreeRTOS LowPower

このアプリケーションはWio-E5 miniで低消費電力モードを有効にします。アプリケーションがフラッシュされると、ボードは2秒間通常の電力を消費し、2秒間低消費電力モードに入る、というサイクルを繰り返します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードしてください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`に移動してください

- **ステップ 3.** **.project**ファイルをダブルクリックしてください

- **ステップ 4.** プロジェクトを右クリックして**Properties**をクリックしてください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs`に移動し、**Convert to Intel Hex file (-O ihex)**にチェックを入れて**Apply and Close**をクリックしてください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'**をクリックすると、エラーなくコンパイルされるはずです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** `STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESET Button`を押したまま`Connect`をクリックし、`RESET Button`を離してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** Read Out Protectionが`AA`であることを確認してください。`BB`と表示されている場合は、`AA`を選択して`Apply`をクリックしてください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 次に、`Erasing & Programming` ページに移動し、hex ファイルのパス（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`）を選択し、以下の画像のようにプログラミングオプションを選択してから、`Start Programming` をクリックします！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully** というメッセージが表示されます。

- **ステップ 10.** 電力計を接続して Wio-E5 mini を PC に接続します。ボード上の赤色 LED が毎秒点滅し、ボードが通常状態と低電力状態を切り替えることがわかります（電力計の電流が低電力状態では 1 秒間下がり、通常動作状態では 1 秒間上がります）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低電力

このアプリケーションは Wio-E5 mini で低電力モードも有効にします。前の FreeRTOS LowPower アプリケーションとこの Low Power アプリケーションの違いは、前者が FreeRTOS 上で動作するのに対し、こちらはベアメタル上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > LowPower` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

- **ステップ 4.** 前の **FreeRTOS LowPower** アプリケーションの **ステップ 4 - ステップ 10** を参照すると、最終的に電力計で同じ出力が表示されます！

## リソース

Wio-E5 mini データシート：

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Wio-E5 データシート：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT コマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

Wio-E5 認証：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 認証 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">WWio-E5-HF TELEC 認証</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC 認証</a></p>

関連 SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL シリーズ用 STM32Cube MCU パッケージ</a></p>

## 技術サポートと製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/) にお送りください。

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
