---
description: Wio-E5 mini の使い方を始めましょう。
title: Wio-E5 mini
nointro:
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/ja/wio_gps_board/
slug: /ja/LoRa_E5_mini
last_update:
  date: 05/15/2025
  author: hushuxu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

> LoRaWAN® は LoRa Alliance® のライセンスの下で使用される商標です。
LoRa® マークは Semtech Corporation またはその子会社の商標です。

Wio-E5 mini は、小型プロトタイプの迅速なテストと構築に適したコンパクトサイズの開発ボードであり、長距離伝送範囲を持つ理想的な LoRaWAN® ワイヤレス IoT デバイスを設計するのに役立ちます。

Wio-E5 mini は [Wio-E5 STM32WLE5JC モジュール](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) を組み込んでおり、LoRa® RF と MCU チップを世界で初めて1つの小型チップに統合したもので、FCC および CE 認証を取得しています。ARM Cortex-M4 コアと Semtech SX126X LoRa® チップによって駆動され、世界中の周波数で LoRaWAN® プロトコルをサポートし、(G)FSK、BPSK、(G)MSK、および LoRa® 変調を提供します。

[Wio-E5](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/) についてさらに詳しく学びましょう。

Wio-E5 と LoRa® RFM95 チップの比較:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

Wio-E5 mini は Wio-E5 のすべての GPIO を引き出しており、UART、ADC、SPI、IIC などを含みます。RESET ボタンと BOOT ボタンを備えており、使いやすい設計です。LoRaWAN® プロトコルをサポートし、Wio-E5 mini は超長距離伝送と超低消費電力を特徴としています。最大10kmの伝送範囲を達成でき、ボード上の Wio-E5 モジュールのスリープ電流は 2.1 uA (WOR モード) と非常に低いです。産業基準で設計されており、動作温度範囲は -40 ℃ ～ 85 ℃、感度は -116.5dBm ～ -136 dBm、高周波出力は 3.3V で最大 +20.8 dBm です。

Wio-E5 mini 以外にも、より複雑なインターフェースと機能を備えた Wio-E5 開発ボードを提供しており、Wio-E5 モジュールのより強力な性能を引き出すことができます。この開発ボードは、より広範なアクセスプロトコルと豊富な種類のインターフェースを提供します。そのため、RS-485、Grove インターフェース、および豊富な GPIO を使用してモジュールを迅速にテストおよびプロトタイプ化することができます。（Wio-E5 開発ボードについてさらに詳しく学びましょう）

Wio-E5 は MCU を備えた LoRaWAN® チップであるため、Wio-E5 mini を利用する主な方法は以下の3つです：

**1. Wio-E5 mini を PC に接続し、AT コマンドで制御する**

ボードには USB から UART への機能が内蔵されており、USB Type-C ケーブルを使用して Wio-E5 mini を PC に接続し、シリアル通信ソフトウェアを使用して AT コマンドを送信し、ボードからデータを読み取ることができます。

**2. Wio-E5 mini を UART 経由で別のメインボードに接続し、AT コマンドで制御する**

例えば、Wio-E5 mini を Seeeduino XIAO と拡張ボードに UART 経由で接続し、Arduino IDE のシリアルモニターを通じて Seeeduino XIAO から AT コマンドを送信し、データを読み取ることができます。

**3. SDK を使用してユーザーアプリケーションを開発する**

STMicroelectronics が公式に提供する SDK である STM32Cube Programmer を使用して、MCU 機能を備えた独自の LoRa® 開発ボードを開発します。この SDK リソースをダウンロードするには、以下の学習およびドキュメントのリソースを参照してください。

上記の優れた機能をすべて備えた Wio-E5 mini は、IoT デバイスの開発、テスト、プロトタイプ化、およびスマート農業、スマートオフィス、スマート産業などの長距離、超低消費電力 IoT シナリオでのアプリケーションにおいて優れた選択肢となるでしょう。

LoRa® および LoRaWAN® 技術に不慣れな場合は、このブログ [LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) を詳細に確認してください。

## 特徴

- Wio-E5 STM32WLE5JC からすべての GPIO を引き出し可能

- グローバル LoRaWAN® および LoRa® 周波数プランに対応

- 最大10kmの長距離通信範囲（開けた場所での理想値）

- 小型でコンパクトなサイズ、迅速なテストや小型プロトタイプの構築に適応

- ボード上に便利な RESET および BOOT ボタンを搭載

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
<td class="tg-g9rn">最大 +20.8 dBm (3.3V時)</td>
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
<td class="tg-g9rn">USB Type C / 2P-2.54mm ホール / 1*12P-2.54mm ヘッダー*2 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">変調方式</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">動作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">電流</td>
<td class="tg-g9rn">Wio-E5 モジュールのスリープ電流は最低 2.1uA (WOR モード)</td>
</tr>
</tbody>
</table>
<div></div>
<div></div>
<div></div>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">部品リスト:</th></tr>
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
<td class="tg-uu1j" colspan="2">ステッカー*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">1X12ピン オスピンヘッダー *2</td>
</tr>
</tbody>
</table>

## アプリケーション

- Wio-E5 モジュールの簡単なテスト

- Wio-E5 を使用した LoRa® デバイスの迅速な小型プロトタイピング

- 長距離無線通信アプリケーションの開発

- LoRa® および LoRaWAN® アプリケーションの学習と研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## アプリケーションノート

**1. 工場出荷時の AT ファームウェア**

wio-E5 シリーズには、LoRaWAN® Class A/B/C プロトコルおよび広範な周波数プラン（EU868/US915/AU915/AS923/KR920/IN865）をサポートする AT コマンドファームウェアが内蔵されています。この AT コマンドファームウェアを使用することで、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

AT コマンドファームウェアには、DFU 用のブートローダーと AT アプリケーションが含まれています。"PB13/SPI_SCK/BOOT" ピンは、Wio-E5 をブートローダーに留めるか、AT アプリケーションにジャンプさせるかを制御します。PB13 が HIGH の場合、リセット後にモジュールは AT アプリケーションにジャンプし、デフォルトのボーレートは 9600 です。PB13 が LOW の場合（Wio-E5 mini の "Boot" ボタンを押す）、モジュールはブートローダーに留まり、ボーレート 115200 で 1 秒ごとに "C" 文字を送信し続けます。

:::tip

- 工場出荷時の AT ファームウェアは RDP（リードプロテクション）レベル 1 でプログラムされています。開発者は STM32Cube Programmer を使用して最初に RDP を解除する必要があります。RDP をレベル 0 に戻すと、フラッシュメモリが全消去され、工場出荷時の AT ファームウェアは再度復元できなくなることに注意してください。
- Wio-E5 モジュールの "PB13/SPI_SCK/BOOT" ピンは通常の GPIO であり、MCU の "BOOT0" ピンではありません。この "PB13/SPI_SCK/BOOT" ピンは、工場出荷時の AT ファームウェアのブートローダーで使用され、APP にジャンプするかブートローダーに留まるか（DFU 用）を決定します。実際の "BOOT0" ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際には注意が必要です。
:::

**2. クロック構成**

2.1 HSE

- 32MHz TCXO

- TCXO 電源供給: PB0-VDD_TCXO

2.2 LSE

- 32.768KHz 水晶発振器

**3. RF スイッチ**

**Wio-E5 モジュールは RFO_HP を通じてのみ送信します:**

- 受信: PA4=1, PA5=0

- 送信（高出力、SMPS モード）: PA4=0, PA5=1

## はじめに

### ATコマンドのクイックスタート

#### 準備

- **ステップ 1.** Wio-E5 mini を Type-C ケーブルで PC に接続します。

- **ステップ 2.** シリアルツール（例: Arduino Serial Monitor）を開き、適切な COM ポートを選択し、ボーレートを 9600 に設定して、Both NL & CR を選択します。

- **ステップ 3.** "AT" を送信して、応答を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本的なATコマンド

| コマンド形式 | 応答 | 説明 |
| --- | --- | --- |
| AT | +AT: OK | テストコマンド |
| AT+VER | +VER: \$MAJOR.\$MINOR.\$PATCH <br></br> +VER: 4.0.11 | ファームウェアバージョンを確認 |
| AT+ID // 全てを読み取る、DevAddr(ABP)、DevEui(OTAA)、AppEui(OTAA)<br></br>AT+ID = DevAddr // デバイスアドレスを読み取る<br></br>AT+ID = DevEui // DevEuiを読み取る<br></br>AT+ID = AppEui // AppEuiを読み取る | +ID: DevAddr, xx: xx: xx:xx<br></br>+ID: DevEui, xx:xx:xx:xx:xx:xx:xx:xx<br></br>+ID: AppEui13, xx:xx:xx:xx:xx:xx:xx | LoRaWAN モジュールのIDを確認するために使用します。IDはビッグエンディアンの数値として扱われます。 |
| AT+ID = DevAddr, “01234567” // 新しいDevAddrを設定<br></br>AT+ID = DevEui, “0123456789ABCDEF” // 新しいDevEuiを設定<br></br>AT+ID = AppEui, “0123456789ABCDEF” // 新しいAppEuiを設定 | +ID: DevAddr, 01:23:45:67<br></br>+ID: DevEui, 01:23:45:67:89:AB:CD:EF<br></br>+ID: AppEui, 01:23:45:67:89:AB:CD:EF | IDを変更 |
| AT+RESET | +RESET: OK | モジュールをリセット |
| AT+MSG=”送信するデータ” | +MSG: Start<br></br>+MSG: FPENDING // ダウンリンクフレームFPENDINGフラグが設定されている<br></br>+MSG: Link 20, 1<br></br>+MSG: ACK Received // LinkCheckAns受信済み<br></br>+ MSG: MULTICAST // ダウンリンクフレームがマルチキャストメッセージ<br></br>+MSG: PORT: 8; RX: "12345678" // ダウンリンクメッセージ受信済み<br></br>+MSG: RXWIN2, RSSI -106, SNR 4 // ダウンリンクフレーム信号強度<br></br>+MSG: Done | サーバーによる確認が不要な文字列形式のフレームを送信 |
| AT+PORT = “ポート”<br></br>例: AT+PORT = 8 // ポートを8に設定 | + PORT: 8 | MSG/CMSG/MSGHEX/CMSGHEXコマンドでメッセージを送信する際に使用するポート番号を設定します。ポート番号は1から255の範囲で指定する必要があります。 |
| AT+ADR="状態"<br></br>例: AT+ADR=ON // ADR機能を有効化<br></br>AT+ ADR= OFF // ADR機能を無効化<br></br>AT+ADR=? // 現在のADR設定を確認 | +ADR: ON  // ADRクエリ/設定の応答 | LoRaWAN モジュールのADR機能を設定 |
| AT+DR // 現在選択されているデータレートを確認<br></br>AT+DR=drx // "drx"は0~15の範囲で指定 | +DR: DR0<br></br>+DR: US915 DR0 SF10 BW12 | LoRaWANで定義されたDRxを使用してLoRaWAN ATモデムのデータレートを設定 |
| AT+ DR= band //" band"はChapter3 Band Plansで定義されたバンド名<br></br>AT+ DR= SCHEME // 現在のバンドを確認 | (EU868) +DR: EU868<br></br>+DR: EU868 DR0 SF12 BW125K<br></br>+DR: EU868 DR1 SF11 BW125K<br></br>+DR: EU868 DR2 SF10 BW125K<br></br>+DR: EU868 DR3 SF9 BW125K<br></br>+DR: EU868 DR4 SF8 BW125K<br></br>+DR: EU868 DR5 SF7 BW125K<br></br>+DR: EU868 DR6 SF7 BW125K<br></br>+DR: EU868 DR7 FSK<br></br>+DR: EU868 DR8 RFU<br></br>+DR: EU868 DR9 RFU<br></br>+DR: EU868 DR10 RFU<br></br>+DR: EU868 DR11 RFU<br></br>+DR: EU868 DR12 RFU<br></br>+DR: EU868 DR13 RFU<br></br>+DR: EU868 DR14 RFU<br></br>+DR: EU868 DR15 RFU | データレートスキーム |
| AT + CH // 全てのチャネルをクエリ<br></br>AT + CH = ch // 単一チャネルの周波数を確認 |  | チャネル設定をクエリ |
| AT+CH="chn", ["freq"], ["drmin"], ["drmax"]<br></br>// "chn"チャネルの周波数を"Freq"に変更<br></br>// "freq"はMHz単位<br></br>// 使用可能な"drmin"/"drmax"範囲はDR0 ~ DR15 | +CH: 3,433700000,DR0:DR5<br></br>+CH: 3,433700000,DR | LoRaWANモデムのチャネルパラメータを設定。周波数をゼロに設定するとチャネルを削除します。 |
| AT+CH=chn,ON<br></br>AT+CH=chn, OFF |  | チャネルを有効化または無効化 |
| AT+ KEY= NWKSKEY, “16バイト長のキー”<br></br>例: AT+KEY=NWKSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例: AT+KEY=NWKSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C” | + KEY: NWKSKEY 2B7E151628AED2A6ABF7158809CF4F3C | ネットワークセッションキー（NWKSKEY）を変更 |
| AT+ KEY= APPSKEY, “16バイト長のキー”<br></br>例: AT+KEY=APPSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例: AT+KEY= APPSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 | + KEY: APPSKEY 2B7E151628AED2A6ABF7158809CF4F3C | アプリケーションセッションキー（APPSKEY）を変更 |
| AT+ FDEFAULT<br></br>AT+ FDEFAULT= Seeed | +FDEFAULT: OK | LoRaWAN ATモデムを工場出荷時の設定にリセット |
| T+ DFU="新しい状態"<br></br>例: AT+DFU=ON // DFU機能を有効化<br></br>例: AT+DFU=OFF // DFU機能を無効化<br></br>AT+DFU=? // DFUが有効かどうか確認 | +DFU: ON<br></br>+DFU: OFF | DFUモードに入るために使用 |
| T+MODE="モード"<br></br>例: AT+MODE=TEST // TESTモードに入る<br></br>例: AT+MODE= LWOTAA // LWOTAAモードに入る<br></br>例: AT+MODE= LWABP // LWABPモードに入る | +MODE: LWABP // TESTモードに正常に入る<br></br>+MODE: LWOTAA // LWOTAAモードに正常に入る<br></br>+MODE: TEST // TESTモードに正常に入る | 動作モードを選択するために使用 |
| AT + JOIN<br></br>AT + JOIN = FORCE | a) 正常に参加<br></br>+JOIN: Starting<br></br>+ JOIN: NORMAL<br></br>+JOIN: NetID 000024 DevAddr 48:00:00:01<br></br>+JOIN: Done<br></br>b) 参加失敗<br></br>+JOIN: Join failed<br></br>c) 参加プロセス進行中<br></br>+ JOIN: LoRaWANモデムがビジー状態 | OTAAモードが有効な場合、JOINコマンドを使用して既知のネットワークに参加可能 |

詳細については、[コマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください。

#### The Things Networkに接続してデータを送信

- **ステップ 1.** [The Things Network](https://www.thethingsnetwork.org) のウェブサイトにアクセスし、新しいアカウントを作成します。

- **ステップ 2.** ログイン後、プロフィールをクリックして**Console**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** クラスターを選択してデバイスやゲートウェイの追加を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** **Go to applications** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** **+ Add application** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Application ID** を入力し、**Create application** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意:** ここで **Application name** と **Description** は必須項目ではありません。**Application name** を空白のままにすると、デフォルトで **Application ID** と同じ名前が使用されます。

以下は新しく作成されたアプリケーションです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **+ Add end device** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** **Manually** をクリックして、登録資格情報を手動で入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 地域に応じて **Frequency plan** を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用していることを確認してください。**LoRaWAN® version** として **MAC V1.0.2** を選択し、**Regional Parameters version** として **PHY V1.0.2 REV B** を選択します。これらの設定は Wio-E5 の LoRaWAN® スタックに基づいています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** Wio-E5 モジュールがまだシリアルコンソールでアクセス可能な状態で、以下の AT コマンドをシリアルモニターで送信します：

  - `AT+ID=DevEui` を使用して Device EUI を取得します。
  - `AT+ID=AppEui` を使用して App EUI を取得します。
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` を使用して App Key を設定します。

出力は以下のようになります：

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **ステップ 11.** 上記の情報を **DevEUI**, **AppEUI**, **AppKey** フィールドにコピーして貼り付けます。**End device ID** フィールドは **DevEUI** を入力すると自動的に入力されます。最後に **Register end device** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** TTN コンソールで LoRaWAN® ゲートウェイを登録します。詳細な手順は [こちら](https://wiki.seeedstudio.com/ja/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console) を参照してください。

- **ステップ 13.** TTN に接続するために以下の AT コマンドを入力します：

```
// US915 を使用している場合
AT+DR=US915
AT+CH=NUM,8-15

// EU868 を使用している場合
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

シリアルモニターでの出力は以下のようになります：

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

シリアルコンソールで **+JOIN: Network joined** が表示された場合、デバイスが TTN に正常に接続されたことを意味します！

**End devices** ページでデバイスのステータスを確認することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 14.** TTN にデータを送信するために以下の AT コマンドを入力します：

```
// TTN に文字列 "HELLO" を送信
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// 16進数 "00 11 22 33 44" を送信
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

AT コマンドに関する詳細情報は [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf) を参照してください。

### STM32Cube MCU パッケージでの開発

このセクションは Wio-E5 mini 用であり、STM32WL シリーズ (SDK) 用の STM32Cube MCU パッケージを使用していくつかのアプリケーションを構築することを目的としています。

**注意:** 現在、STM32WL シリーズ用の STM32Cube MCU パッケージの最新バージョンである v1.1.0 をサポートするようにライブラリを更新しました。

:::note
[Erase Factory AT Firmware](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#21-erase-factory-at-firmware) セクションを最初にお読みください。SDK でプログラムする前に Factory AT Firmware を消去する必要がある場合があります。Factory AT Firmware を消去すると、元に戻すことはできません。
:::

#### 準備

ソフトウェア:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): コンパイルとデバッグ用

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): STM32 デバイスのプログラミング用

ハードウェア:

- LoRaWAN® ゲートウェイが LoRaWAN® ネットワークサーバー (例: TTN) に接続されていること

- USB Type-C ケーブルと ST-LINK。Type-C ケーブルをボードの Type-C ポートに接続して電源供給とシリアル通信を行います。ST-LINK を以下のように SWD ピンに接続します。

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO 設定概要

- Wio-E5シリーズのハードウェア設計は、STの公式STM32WL55JC開発ボードであるNUCLEO-WL55JCとは少し異なるため、開発者はSDKの例をWio-E5シリーズに適応させるためにいくつかのGPIOを再設定する必要があります。GPIOの再設定はすでに行っていますが、違いを指摘することが必要だと考えています。

|SDK例のラベル|NUCLEO-WL55JCのGPIO|Wio-E5 miniのGPIO|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|なし|
|BUT1|PA0|PB13 (ブートボタン)|
|BUT2|PA1|なし|
|BUT3|PC6|なし|
|LED1|PB15|なし|
|LED2|PB9|PB5|
|LED3|PB11|なし|
|DBG1|PB12|PA0 (D0ボタン)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### アプリケーション

ここでは、STM32WLシリーズ(SDK)用のSTM32Cube MCUパッケージを使用してWio-E5 miniのいくつかのアプリケーションを探ります。

#### LoRaWAN® エンドノード

このアプリケーションでは、Wio-E5 miniをTTN (The Things Network)に接続し、LoRaWAN®ゲートウェイに接続した後にデータを送信します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`に移動します。

- **ステップ 3.** **.project**ファイルをダブルクリックします。

- **ステップ 4.** プロジェクトを右クリックして**Properties**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs`に移動し、**Convert to Intel Hex file (-O ihex)**をチェックして**Apply and Close**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'**をクリックし、エラーなしでコンパイルされるはずです。

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

次に、**Device EUI**、**Application EUI**、**Application KEY**、および**LoRaWAN® Region**を変更します。

- **ステップ 7.** [こちらのガイド](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)に従ってTTNアプリケーションを設定し、**Application EUI**を取得して`LoRaWAN/App/se-identity.h`のマクロ定義`LORAWAN_JOIN_EUI`にコピーします。例えば、ここでのApplication EUIは`80 00 00 00 00 00 00 0x07`です。

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **ステップ 8.** また、**Device EUI**と**Application Key**を変更することができます。`LoRaWAN/App/se-identity.h`のマクロ定義`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`を設定してください。`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`がTTNコンソールの`Device EUI`と`App Key`と同じであることを確認してください。

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

- **ステップ 9.** デフォルトのLoRaWAN Regionは`EU868`です。これを変更するには、`LoRaWAN/App/lora_app.h`のマクロ定義`ACTIVE_REGION`を設定してください。

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** 上記の変更後、例を**再構築**してWio-E5にプログラムします。`STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESETボタン`を押しながら`Connect`をクリックし、その後`RESETボタン`を離します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11.** Read Out Protectionが`AA`であることを確認してください。`BB`と表示されている場合は、`AA`を選択して**Apply**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパスを選択します（例: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`）。以下の画像のようにプログラミングオプションを選択し、**Start Programming**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが終了すると、**Download verified successfully**というメッセージが表示されます。

- **ステップ 13.** LoRaWAN®ゲートウェイとTTNが設定されている場合、リセット後にWio-E5は正常に接続されます！確認用のLoRaWAN®パッケージが30秒ごとにTTNに送信されます。接続が成功すると、以下のログがシリアルモニター（ここではArduinoシリアルモニターを使用）に表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- おめでとうございます！これで Wio-E5 を LoRaWAN® ネットワークに接続しました！これからさらに興味深い LoRaWAN® エンドノードアプリケーションの開発を進めることができます！

**注意:** Wio-E5 は高出力モードのみをサポートしているため、`radio_board_if.h` で以下のマクロ定義を使用することはできません：

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// または
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

**RBI_CONF_RFO** が `radio_board_if.h` で **RBI_CONF_RFO_LP_HP** として定義されていても、**USE_BSP_DRIVER** が定義されており、**BSP_RADIO_GetTxConfig()** 関数が **RADIO_CONF_RFO_HP** を返すため使用されません。

#### FreeRTOS LoRaWAN®

このアプリケーションでは、Wio-E5 mini を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイに接続した後にデータを送信します。以前の LoRaWAN® エンドノードアプリケーションとの違いは、以前のものはベアメタルで動作していたのに対し、こちらは FreeRTOS 上で動作する点です。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN` に移動します。

- **ステップ 3.** **.project** ファイルをダブルクリックします。

- **ステップ 4.** 前の **LoRaWAN® エンドノード** アプリケーションの **ステップ 4 - ステップ 13** を参照して、Wio-E5 mini を TTN に接続してください！

#### FreeRTOS LoRaWAN® AT

このアプリケーションでは、Wio-E5 mini を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイに接続した後にデータを送信します。このアプリケーションと以前の FreeRTOS LoRaWAN アプリケーションの違いは、AT コマンドを使用できる点です。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT` に移動します。

- **ステップ 3.** **.project** ファイルをダブルクリックします。

- **ステップ 4.** 前の **LoRaWAN エンドノード** アプリケーションの **ステップ 4 - ステップ 12** を参照してください。

- **ステップ 5.** **Arduino Serial Monitor** などのシリアルモニターを開き、以下の出力が表示されることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **AT?** と入力して **ENTER** を押し、利用可能な AT コマンドをすべて表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **Device EUI**、**Application EUI**、**Application KEY**、および **LoRaWAN® Region** を変更したい場合は、AT コマンドを使用して変更できます。ただし、これらのパラメータはこの例ではすでに **se-identity.h** および **lora_app.h** に設定されています。

- **ステップ 8.** **AT+JOIN=1** と入力すると、接続が成功した場合に以下の出力が表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意:** ここでは **AT+JOIN=(Mode)** フォーマットを使用する必要があります。**Mode** は **0 (ABP)** または **1 (OTAA)** を意味します。

#### FreeRTOS LowPower

このアプリケーションでは、Wio-E5 mini の低消費電力モードを有効にします。アプリケーションがフラッシュされると、ボードは通常通り2秒間動作し、その後2秒間低消費電力モードに入るという動作を繰り返します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower` に移動します。

- **ステップ 3.** **.project** ファイルをダブルクリックします。

- **ステップ 4.** プロジェクトを右クリックして **Properties** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs` に移動し、**Convert to Intel Hex file (-O ihex)** をチェックして **Apply and Close** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'** をクリックし、エラーなしでコンパイルされることを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** `STM32CubeProgrammer` を開き、ST-LINK を PC に接続し、デバイスの `RESET ボタン` を押しながら `Connect` をクリックし、その後 `RESET ボタン` を離します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** Read Out Protection が `AA` であることを確認してください。`BB` と表示されている場合は、`AA` を選択して **Apply** をクリックします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 次に、`Erasing & Programming` ページに移動し、hex ファイルのパスを選択します（例: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`）。以下の画像のようにプログラミングオプションを選択し、`Start Programming` をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully** というメッセージが表示されます。

- **ステップ 10.** Wio-E5 mini を電力計を介して PC に接続します。ボード上の赤色 LED が毎秒点滅し、ボードが通常状態と低消費電力状態を切り替えるのが確認できます（電力計の電流が低消費電力状態では 1 秒間下がり、通常動作状態では 1 秒間戻ります）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低消費電力

このアプリケーションは、Wio-E5 mini に低消費電力モードを有効にします。以前の FreeRTOS LowPower アプリケーションとの違いは、以前のものは FreeRTOS 上で動作するのに対し、こちらはベアメタル上で動作する点です。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > LowPower` に移動します。

- **ステップ 3.** **.project** ファイルをダブルクリックします。

- **ステップ 4.** 前述の **FreeRTOS LowPower** アプリケーションの **ステップ 4 - ステップ 10** を参照し、最終的に電力計で同じ出力が確認できます！

## リソース

Wio-E5 mini データシート:

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Wio-E5 データシート:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT コマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

Wio-E5 認証:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 認証 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">WWio-E5-HF TELEC 認証</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC 認証</a></p>

関連 SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL シリーズ用 STM32Cube MCU パッケージ</a></p>

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)にご投稿ください。

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>