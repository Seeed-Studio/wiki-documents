---
description: Wio-E5 miniの使用開始ガイド。
title: Wio-E5 mini
nointro:
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /ja/LoRa_E5_mini
last_update:
  date: 01/30/2023
  author: hushuxu
---
<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

> LoRaWAN®は、LoRa Alliance®からライセンスを受けて使用されるマークです。
LoRa®マークは、Semtech Corporationまたはその子会社の商標です。

Wio-E5 miniは、小型サイズのプロトタイピングの迅速なテストと構築に適したコンパクトサイズの開発ボードで、長距離伝送範囲を持つ理想的なLoRaWAN®ワイヤレスIoTデバイスの設計を支援します。

Wio-E5 miniには[Wio-E5 STM32WLE5JCモジュール](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)が組み込まれており、世界初のLoRa® RFとMCUチップを1つの小さなチップに統合し、FCCおよびCE認証を取得しています。ARM Cortex-M4コアとSemtech SX126X LoRa®チップを搭載し、世界中の周波数でLoRaWAN®プロトコルと(G)FSK、BPSK、(G)MSK、およびLoRa®変調をサポートしています。

[Wio-E5](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/)について詳しくはこちらをご覧ください。

Wio-E5とLoRa® RFM95チップの比較詳細：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

Wio-E5 miniは、UART、ADC、SPI、IICなどを含むWio-E5のすべてのGPIOを引き出しています。RESETとBOOTボタンを搭載し、使いやすい設計となっています。LoRaWAN®プロトコルをサポートするWio-E5 miniは、超長距離伝送と超低消費電力を特徴としています：最大10kmの伝送範囲を実現でき、ボード上のWio-E5モジュールのスリープ電流は2.1 uA（WORモード）と非常に低くなっています。-40℃～85℃の広い動作温度範囲、-116.5dBm～-136 dBmの高感度、3.3Vで最大+20.8 dBmのRF出力パワーを持つ産業規格で設計されています。

Wio-E5 mini以外にも、Wio-E5モジュールのより強力な性能を引き出すために、より複雑なインターフェースと機能を搭載したWio-E5開発ボードも提供しています。より広範囲のアクセスプロトコルと豊富な種類のインターフェースを提供します。これにより、RS-485、Groveインターフェース、豊富なGPIOを使用してモジュールを迅速にテストおよびプロトタイピングできます。（Wio-E5開発ボードについて詳しく学ぶ）

Wio-E5はMCU付きLoRaWAN®チップであるため、Wio-E5 miniを活用する主な方法は3つあります：

**1. Wio-E5 miniをPCに接続してATコマンドで制御**

ボード上にUSB to UART機能が内蔵されているため、USB Type CケーブルでWio-E5 miniをPCに接続し、シリアル通信ソフトウェアを使用してATコマンドを送信し、ボードからデータを読み取ることができます。

**2. Wio-E5 miniを別のメインボードにUART経由で接続してATコマンドで制御**

例えば、Wio-E5 miniをSeeeduino XIAOと拡張ボードにUART経由で接続し、Arduino IDEシリアルモニターを通じてSeeeduino XIAOからATコマンドを送信してデータを読み取ります。

**3. SDKを使用したユーザーアプリケーション開発**

STMicroelectronicsが公式に提供するSDKであるSTM32Cube Programmerを使用して、MCU機能付きの独自のLoRa®開発ボードを開発します。このSDKリソースをダウンロードするには、以下の学習とドキュメントのリソースをご確認ください。

上記のすべての優れた機能により、Wio-E5 miniは、スマート農業、スマートオフィス、スマート産業などの長距離、超低消費電力IoTシナリオでのIoTデバイス開発、テスト、プロトタイピング、およびアプリケーションにとって優れた選択肢となります。

LoRa®およびLoRaWAN®技術に馴染みがない場合は、このブログ[LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/)を詳しくご確認ください。

## 特徴

- Wio-E5 STM32WLE5JCからの全GPIOピンアウト

- グローバルLoRaWAN®およびLoRa®周波数プランに対応

- 最大10kmの長距離伝送範囲（開放エリアでの理想値）

- 小型でコンパクトなサイズ、迅速なテストと小型プロトタイプの構築に適している

- 基板上に便利なRESETとBOOTボタンを搭載

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
<td class="tg-g9rn">3.3Vで最大+20.8 dBm</td>
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
<td class="tg-g9rn">USB Type C / 2P-2.54mmホール / 1*12P-2.54mmヘッダー*2 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">変調</td>
<td class="tg-g9rn">LoRa®、(G)FSK、(G)MSK、BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">動作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">電流</td>
<td class="tg-g9rn">Wio-E5モジュールのスリープ電流は最小2.1uA（WORモード）</td>
</tr>
</tbody>
</table>

<div></div>
<div></div>
<div></div>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">パーツリスト:</th></tr>
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
- Wio-E5を使用したLoRa®デバイスの迅速な小型プロトタイピング
- あらゆる長距離無線通信アプリケーション開発
- LoRa®およびLoRaWAN®アプリケーションの学習と研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## アプリケーションノート

**1. ファクトリーATファームウェア**

wio-E5シリーズには内蔵ATコマンドファームウェアがあり、LoRaWAN® Class A/B/Cプロトコルと幅広い周波数プラン（EU868/US915/AU915/AS923/KR920/IN865）をサポートしています。このATコマンドファームウェアにより、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

ATコマンドファームウェアには、DFU用のブートローダーとATアプリケーションが含まれています。「PB13/SPI_SCK/BOOT」ピンは、Wio-E5をブートローダーに留めるか、ATアプリケーションにジャンプするかを制御するために使用されます。PB13がHIGHの場合、モジュールはリセット後にATアプリケーションにジャンプし、デフォルトのボーレートは9600です。PB13がLOW（Wio-E5 miniの「Boot」ボタンを押す）の場合、モジュールはブートローダーに留まり、ボーレート115200で1秒ごとに「C」文字を送信し続けます。

:::tip

- ファクトリーATファームウェアはRDP（読み取り保護）レベル1でプログラムされており、開発者はSTM32Cube ProgrammerでまずRDPを削除する必要があります。RDPをレベル0に戻すとフラッシュメモリの一括消去が発生し、ファクトリーATファームウェアは再度復元できないことに注意してください。
- Wio-E5モジュールの「PB13/SPI_SCK/BOOT」ピンは通常のGPIOであり、MCUの「BOOT0」ピンではありません。この「PB13/SPI_SCK/BOOT」ピンは、ファクトリーATファームウェアのブートローダーで使用され、APPにジャンプするかブートローダーに留まる（DFU用）かを決定します。実際の「BOOT0」ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際にはユーザーは注意が必要です

:::

**2. クロック設定**

2.1 HSE

- 32MHz TCXO

- TCXO電源: PB0-VDD_TCXO

2.2 LSE

- 32.768KHz水晶発振器

**3. RFスイッチ**

**Wio-E5モジュールはRFO_HPを通してのみ送信します:**

- 受信: PA4=1, PA5=0

- 送信（高出力、SMPSモード）: PA4=0, PA5=1

## はじめに

### ATコマンドのクイックスタート

#### 準備

- **ステップ1.** Type-CケーブルでWio-E5 miniをPCに接続

- **ステップ2.** シリアルツール（例：Arduino Serial Monitor）を開き、正しいCOMポートを選択し、ボーレートを9600に設定し、Both NL & CRを選択

- **ステップ3.** 「AT」を送信してみると、応答が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本ATコマンド

| コマンド形式 | 戻り値 | 説明 |
| --- | --- | --- |
| AT | +AT: OK | テストコマンド |
| AT+VER | +VER: \$MAJOR.\$MINOR.\$PATCH <br></br> +VER: 4.0.11 | ファームウェアバージョンを確認 |
| AT+ID // 全て読み取り、DevAddr（ABP）、DevEui（OTAA）、AppEui（OTAA）<br></br>AT+ID = DevAddr // デバイスアドレスを読み取り<br></br>AT+ID = DevEui // DevEuiを読み取り<br></br>AT+ID = AppEui // AppEuiを読み取り | +ID: DevAddr, xx: xx: xx:xx<br></br>+ID: DevEui, xx:xx:xx:xx:xx:xx:xx:xx<br></br>+ID: AppEui13, xx:xx:xx:xx:xx:xx:xx | LoRaWANモジュールのIDを確認するために使用。IDはビッグエンディアン数として扱われます。 |
| AT+ID = DevAddr, "01234567" // 新しいDevAddrを設定<br></br>AT+ID = DevEui, "0123456789ABCDEF" // 新しいDevEuiを設定<br></br>AT+ID = AppEui, "0123456789ABCDEF" // 新しいAppEuiを設定 | +ID: DevAddr, 01:23:45:67<br></br>+ID: DevEui, 01:23:45:67:89:AB:CD:EF<br></br>+ID: AppEui, 01:23:45:67:89:AB:CD:EF | IDを変更 |
| AT+RESET | +RESET: OK | モジュールをリセット |
| AT+MSG="Data to send" | +MSG: Start<br></br>+MSG: FPENDING // ダウンリンクフレームのFPENDINGフラグが設定されています<br></br>+MSG: Link 20, 1<br></br>+MSG: ACK Received // LinkCheckAnsを受信<br></br>+ MSG: MULTICAST // ダウンリンクフレームはマルチキャストメッセージです<br></br>+MSG: PORT: 8; RX: "12345678" //ダウンリンクメッセージを受信<br></br>+MSG: RXWIN2, RSSI -106, SNR 4 //ダウンリンクフレーム信号強度<br></br>+MSG: Done | サーバーによる確認が不要な文字列形式のフレームを送信 |
| AT+PORT = "port"<br></br>例: AT+PORT = 8 //ポートを8に設定 | + PORT: 8 | MSG/CMSG/MSGHEX/CMSGHEXコマンドでメッセージ送信に使用するポート番号を設定。ポート番号は1から255の範囲である必要があります。 |
| AT+ADR=" state"<br></br>例: AT+ADR=ON // ADR機能を有効化<br></br>AT+ ADR= OFF // ADR機能を無効化<br></br>AT+ADR=? // 現在のADR設定を確認 | +ADR: ON  // ADRクエリ/設定戻り値 | LoRaWANモジュールのADR機能を設定 |
| AT+DR // 現在選択されているDataRateを確認<br></br>AT+DR=drx // "drx"は0~15の範囲 | +DR: DR0<br></br>+DR: US915 DR0 SF10 BW12 | LoRaWAN定義のDRxを使用してLoRaWAN ATモデムのデータレートを設定。 |
| AT+ DR= band //"band"は第3章バンドプランで定義されたバンド名<br></br>AT+ DR= SCHEME // 現在のバンドを確認 | (EU868) +DR: EU868<br></br>+DR: EU868 DR0 SF12 BW125K<br></br>+DR: EU868 DR1 SF11 BW125K<br></br>+DR: EU868 DR2 SF10 BW125K<br></br>+DR: EU868 DR3 SF9 BW125K<br></br>+DR: EU868 DR4 SF8 BW125K<br></br>+DR: EU868 DR5 SF7 BW125K<br></br>+DR: EU868 DR6 SF7 BW125K<br></br>+DR: EU868 DR7 FSK<br></br>+DR: EU868 DR8 RFU<br></br>+DR: EU868 DR9 RFU<br></br>+DR: EU868 DR10 RFU<br></br>+DR: EU868 DR11 RFU<br></br>+DR: EU868 DR12 RFU<br></br>+DR: EU868 DR13 RFU<br></br>+DR: EU868 DR14 RFU<br></br>+DR: EU868 DR15 RFU | データレートスキーム |
| AT + CH // 全チャンネルをクエリ<br></br>AT + CH = ch // 単一チャンネル周波数を確認 |  | チャンネル設定をクエリ |
| AT+CH="chn", ["freq"], ["drmin"], ["drmax"]<br></br>// chnチャンネル周波数を"Freq"に変更<br></br>// "freq"はMHz単位<br></br>// 利用可能な"drmin"/"drmax"範囲はDR0 ~ DR15 | +CH: 3,433700000,DR0:DR5<br></br>+CH: 3,433700000,DR | LoRaWANモデムのチャンネルパラメータを設定。周波数をゼロに設定すると1つのチャンネルを削除。 |
| AT+CH=chn,ON<br></br>AT+CH=chn, OFF |  | チャンネルを有効化または無効化 |
| AT+ KEY= NWKSKEY, " 16バイト長キー"<br></br>例: AT+KEY=NWKSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例: AT+KEY=NWKSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C" | + KEY: NWKSKEY 2B7E151628AED2A6ABF7158809CF4F3C | ネットワークセッションキー（NWKSKEY）を変更 |
| AT+ KEY= APPSKEY, " 16バイト長キー"<br></br>例: AT+KEY=APPSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例: AT+KEY= APPSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 | + KEY: APPSKEY 2B7E151628AED2A6ABF7158809CF4F3C | アプリケーションセッションキー（APPSKEY）を変更 |
| AT+ FDEFAULT<br></br>AT+ FDEFAULT= Seeed | +FDEFAULT: OK | LoRaWAN ATモデムを工場出荷時のデフォルト設定にリセット |
| T+ DFU=" New state"<br></br>例: AT+DFU=ON // DFU機能を有効化<br></br>例: AT+DFU=OFF //DFU機能を無効化<br></br>AT+DFU=? // DFUが有効化されているかの設定を確認 | +DFU: ON<br></br>+DFU: OFF | DFUモードに入るために使用 |
| T+MODE="mode"<br></br>例: AT+MODE=TEST // TESTモードに入る<br></br>例: AT+MODE= LWOTAA // LWOTAAモードに入る<br></br>例: AT+MODE= LWABP // LWABPモードに入る | +MODE: LWABP // TESTモードに正常に入りました<br></br>+MODE: LWOTAA // LWOTAAモードに正常に入りました<br></br>+MODE: TEST // TESTモードに正常に入りました | 動作モードを選択するために使用 |
| AT + JOIN<br></br>AT + JOIN = FORCE | a) 接続成功 +JOIN: Starting<br></br>+ JOIN: NORMAL<br></br>+JOIN: NetID 000024 DevAddr 48:00:00:01<br></br>+JOIN: Done<br></br>b) 接続失敗<br></br>+JOIN: Join failed<br></br>c) 接続プロセス進行中<br></br>+ JOIN: LoRaWAN modem is busy | OTAAモードが有効な場合、JOINコマンドは既知のネットワークに接続するために使用できます |

詳細については、[コマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください。

#### The Things Network への接続とデータ送信

- **ステップ 1.** [The Things Network](https://www.thethingsnetwork.org) のウェブサイトにアクセスし、新しいアカウントにサインアップします

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

**注意:** ここで **Application name** と **Description** は必須フィールドではありません。**Application name** を空白のままにすると、デフォルトで **Application ID** と同じ名前が使用されます

以下が新しく作成されたアプリケーションです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **+ Add end device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** **Manually** をクリックして、登録認証情報を手動で入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** お住まいの地域に応じて **Frequency plan** を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用することを確認してください。**LoRaWAN® version** として **MAC V1.0.2** を、**Regional Parameters version** として **PHY V1.0.2 REV B** を選択します。これらの設定は Wio-E5 の LoraWAN® スタックに従っています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** Wio-E5 モジュールがシリアルコンソール経由でまだアクセス可能な間に、シリアルモニターで以下の AT コマンドを送信します：

  - `AT+ID=DevEui` で Device EUI を取得
  - `AT+ID=AppEui` で App EUI を取得
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` で App Key を設定

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

- **ステップ 13.** 以下のATコマンドを入力して TTN に接続します

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

シリアルコンソールで **+JOIN: Network joined** が表示されれば、デバイスがTTNへの接続に成功したことを意味します！

**End devices**ページでデバイスのステータスも確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **Step 14.** 以下のATコマンドを入力してTTNにデータを送信します

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

ATコマンドの詳細については、[Wio-E5 ATコマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください。

### STM32Cube MCUパッケージでの開発

このセクションはWio-E5 miniを対象とし、STM32WLシリーズ用STM32Cube MCUパッケージ（SDK）を使用していくつかのアプリケーションを構築することを目的としています。

**注意:** STM32WLシリーズ用STM32Cube MCUパッケージの最新バージョンであるv1.1.0をサポートするようにライブラリを更新しました。

:::note
SDKでプログラムする前に工場出荷時のATファームウェアを消去する必要があるため、まず[工場出荷時ATファームウェアの消去](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#21-erase-factory-at-firmware)セクションをお読みください。工場出荷時のATファームウェアを消去すると、復元することはできません。
:::

#### 準備

ソフトウェア：

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)：コンパイルとデバッグ用

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)：STM32デバイスのプログラミング用

ハードウェア：

- LoRaWAN®ネットワークサーバーに接続されたLoRaWAN®ゲートウェイ（例：TTN）

- USB Type-Cケーブル1本とST-LINK。Type-CケーブルをボードのType-Cポートに接続して電源とシリアル通信を行います。ST-LINKを以下のようにSWDピンに接続します

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO設定の概要

- Wio-E5シリーズのハードウェア設計は、STの公式STM32WL55JC開発ボードであるNUCLEO-WL55JCと少し異なるため、開発者はSDKサンプルをWio-E5シリーズに適応させるために一部のgpioを再設定する必要があります。私たちはすでにGPIOを再設定していますが、その違いを指摘することが必要だと考えています。

|SDKサンプルラベル|NUCLEO-WL55JCのGPIO|Wio-E5 miniのGPIO|
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
|DBG1|PB12|PA0（D0ボタン）|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### アプリケーション

ここでは、STM32WLシリーズ用STM32Cube MCUパッケージ（SDK）を使用したWio-E5 miniのいくつかのアプリケーションを探索します。

#### LoRaWAN® エンドノード

このアプリケーションは、Wio-E5 miniをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイとの接続後にデータを送信します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

  **注意：** Macの場合、以下のいずれかのオプションを使用してプロジェクトを開く必要があります：

  - **1.** `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`に移動します。ファイル「LoRaWAN_End_Node.ioc」をダブルクリックします。

  - **2.** 以下の画像のように「Import Projects from File System or Archieve」を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** プロジェクトを右クリックし、**Properties**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs`に移動し、**Convert to Intel Hex file (-O ihex)**にチェックを入れ、**Apply and Close**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'**をクリックすると、エラーなしでコンパイルされるはずです

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

次に、**Device EUI**、**Application EUI**、**Application KEY**、および**LoRawan®リージョン**を変更します

- **ステップ 7.** [こちらのガイド](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)に従ってTTNアプリケーションをセットアップし、**Application EUI**を取得して`LoRaWAN/App/se-identity.h`のマクロ定義`LORAWAN_JOIN_EUI`にコピーしてください。例えば、ここでのApplication EUIは`80 00 00 00 00 00 00 0x07`です：

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **ステップ 8.** また、`LoRaWAN/App/se-identity.h`でマクロ定義`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`を設定することで、**Device EUI**と**Application Key**を変更することができます。`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`がTTNコンソールの`Device EUI`と`App Key`と同じであることを確認してください。

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

- **Step 9.** デフォルトのLoRaWANリージョンは`EU868`です。`LoRaWAN/App/lora_app.h`でマクロ定義`ACTIVE_REGION`を設定することで変更できます。

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** 上記の変更後、サンプルを**リビルド**してWio-E5にプログラムします。`STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESETボタン`を押したまま、`Connect`をクリックして`RESETボタン`を離します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11.** Read Out Protectionが`AA`であることを確認してください。`BB`と表示されている場合は、`AA`を選択して`Apply`をクリックします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパスを選択します（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`）。以下の画像のようにプログラミングオプションを選択し、`Start Programming`をクリックします！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully**のメッセージが表示されます。

- **ステップ 13.** LoRaWAN®ゲートウェイとTTNがセットアップされている場合、Wio-E5はリセット後に正常に接続されます！確認用のLoRaWAN®パッケージが30秒ごとにTTNに送信されます。接続が成功した場合、シリアルモニター（ここではArduino Serial Monitorを使用）に以下のログが出力されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- おめでとうございます！これでWio-E5をLoRaWAN®ネットワークに接続できました！これで、より魅力的なLoRaWAN®エンドノードアプリケーションの開発を進めることができます！

**注意：** Wio-E5は高出力モードのみをサポートしているため、`radio_board_if.h`でこれらのマクロ定義を使用することはできません：

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

**RBI_CONF_RFO** が `radio_board_if.h` で **RBI_CONF_RFO_LP_HP** として定義されていても、**USE_BSP_DRIVER** が定義されており、**BSP_RADIO_GetTxConfig()** 関数が **RADIO_CONF_RFO_HP** を返すため、使用されません。

#### FreeRTOS LoRaWAN®

このアプリケーションは、Wio-E5 miniをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイとの接続後にデータを送信します。以前のLoRaWAN® End NodeアプリケーションとこのFreeRTOS LoRaWAN®アプリケーションの違いは、前者がベアメタル上で動作するのに対し、こちらはFreeRTOS上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

- **ステップ 4.** 以前の**LoRaWAN® End Node**アプリケーションの**ステップ 4 - ステップ 13**を参照して、Wio-E5 miniをTTNに接続してください！

#### FreeRTOS LoRaWAN® AT

このアプリケーションも、Wio-E5 miniをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイとの接続後にデータを送信します。以前のFreeRTOS LoRaWANアプリケーションとこのアプリケーションの違いは、ATコマンドを使用できることです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

- **ステップ 4.** 以前の**LoRaWAN End Node**アプリケーションの**ステップ 4 - ステップ 12**を参照してください

- **ステップ 5.** **Arduino Serial Monitor**などのシリアルモニターを開くと、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **AT?**と入力して**ENTER**を押すと、利用可能なすべてのATコマンドが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **Device EUI**、**Application EUI**、**Application KEY**、**LoRawan® Region**を変更したい場合は、ATコマンドを使用して変更できます。ただし、これらのパラメータはこの例では**se-identity.h**と**lora_app.h**で既に設定されています

- **ステップ 8.** **AT+JOIN=1**と入力すると、接続が成功すると以下の出力が表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意:** ここでは**AT+JOIN=(Mode)**形式を使用する必要があります。**Mode**は**ABPの場合は0**または**OTAAの場合は1**に対応します

#### FreeRTOS LowPower

このアプリケーションは、Wio-E5 miniで低電力モードを有効にします。アプリケーションがフラッシュされると、ボードは2秒間通常の電力を消費し、2秒間低電力モードに入る、というサイクルを繰り返します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

- **ステップ 4.** プロジェクトを右クリックして**Properties**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs`に移動し、**Convert to Intel Hex file (-O ihex)**にチェックを入れて**Apply and Close**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'**をクリックすると、エラーなくコンパイルされるはずです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** `STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESETボタン`を押したまま`Connect`をクリックし、`RESETボタン`を離します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** Read Out Protectionが`AA`であることを確認し、`BB`と表示されている場合は`AA`を選択して`Apply`をクリックします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパス（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`）を選択し、以下の画像のようにプログラミングオプションを選択してから`Start Programming`をクリックします！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully**というメッセージが表示されます。

- **ステップ 10.** 電力計を接続してWio-E5 miniをPCに接続します。ボード上の赤色LEDが1秒ごとに点滅し、ボードが通常状態と低電力状態を切り替えることがわかります（電力計の電流が低電力状態では1秒間下がり、通常動作状態では1秒間上がります）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低電力

このアプリケーションもWio-E5 miniで低電力モードを有効にします。前のFreeRTOS低電力アプリケーションとこの低電力アプリケーションの違いは、前者がFreeRTOS上で動作するのに対し、こちらはベアメタル上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > LowPower`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

- **ステップ 4.** 前の**FreeRTOS低電力**アプリケーションの**ステップ 4 - ステップ 10**を参照すると、最終的に電力計で同じ出力が表示されます！

## リソース

Wio-E5 miniデータシート：

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Wio-E5データシート：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 ATコマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JCデータシート</a></p>

Wio-E5認証：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC認証 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC認証</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC認証</a></p>

関連SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WLシリーズ用STM32Cube MCUパッケージ</a></p>

## 技術サポート & 製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)にお送りください。

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
