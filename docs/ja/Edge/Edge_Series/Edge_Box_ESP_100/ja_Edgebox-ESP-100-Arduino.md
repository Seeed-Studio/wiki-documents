---
description: EdgeBox-ESP-100 Arduinoでの始め方
title: EdgeBox-ESP-100 Arduinoでの始め方
keywords:
  - Edge
  - PLC制御
  - 制御システム
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-ESP-100-Arduino
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Edgebox-ESP-100

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width: 600}}/></div>

EdgeBox-ESP-100は、軽量な自動化ソリューション向けに設計されたESP32ベースのコントローラーです。アナログ入力をサポートし、リモート環境での効果的な監視と制御が可能で、PID制御ループ、論理シーケンス制御、または柔軟な無線およびフィールドセンサー拡張を備えたゲートウェイに最適です。

EdgeBox-ESP-100のほかにも、Raspberry Piを搭載したエッジファミリーの他の2つのエッジ製品があり、異なるソリューションに対応しています。違いを深く理解し、プロジェクトに最適な製品を選択するために、Seeed Studioの[Edgeシリーズページ](https://www.seeedstudio.com/raspberrypi/device/industry.html)をご参照ください。

この製品は、絶縁されたCAN、RS485フィールドバス接続、および豊富なIOリソースを提供し、デジタルおよびアナログ信号の両方に対応する広範な施設やセンサー入力に対応します。PLCおよびフィールド自動化アプリケーションに完全に適しています。

オンチップWi-FiおよびBLE機能を備え、さらに4G LTEモジュールセルラーを含むため、EdgeBox-ESP-100は産業用ゲートウェイとして利用でき、従来のPLCをネットワークやクラウドに接続することが可能です。

このポータブルボックスは、堅牢なハードウェア、電気設計、およびアルミニウム合金製の筐体を備えており、広い温度範囲で機能を維持し、高いサージおよび短絡保護を提供します。これにより、ビジネスに基づいた多様な展開方法が可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

> ⚠️ **重要なお知らせ: USBプログラミング/デバッグ機能の利用可能性**
>
> - **USBプログラミング/デバッグ機能は** **最新バージョン**の**EdgeBox-ESP-100**でのみ利用可能です。
> - **旧バージョン**は**USB-Aポートを介した電源供給のみをサポート**し、**プログラミングやデバッグはサポートしていません**。

---

> ❗**警告: 旧バージョンのUSB-AポートをPCに接続しないでください**
>
> - **旧バージョン**のUSB-AポートをPCのUSBポートに接続すると、**不適切な動作**が発生する可能性があります。
> - USB経由でデバイスをプログラミングまたはデバッグする場合は、**新バージョン**のみを使用してください。

---

> **🔍 新バージョンの識別方法**
>
> デバイス筐体の**シリアル番号(SN)**ラベルを確認してください：
>
> **旧バージョンのSN**:
>
>  - `2437`またはそれ以前のすべてのシリアル番号
>  - 例: `102991735243700001`, `102991735243700093`
> - `2437` = **2024年の第37週**に製造
>
> **新バージョンのSN**:
> - `2438`またはそれ以降のすべてのシリアル番号
>  - 例: `102991735243800001`, `102991735243800093`
> - `2438` = **2024年の第38週以降**に製造

- マルチフィールドバスサポート: CAN、RS485、Ethernet
- マルチワイヤレス機能: オンチップWi-Fi、BLE接続; 内蔵セルラー4G LTEモジュール
- 信頼性の高いハードウェア設計: 堅牢でメンテナンスが少ない構造
- 信頼性の高い電気設計: 高絶縁、高サージおよび短絡保護
- IEC 61131-3準拠プログラムのサポート（開発中）
- ESP-IDF、Arduinoでプログラム可能

## 仕様比較

<div class="table-center">

<table data-style="height: 1345px;">
  <tbody>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p><strong>パラメータ</strong></p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p><strong>詳細</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>基本</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CPU</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>ESP32S3</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>メモリ</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>512KB + 8MB RAM</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>ストレージ</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>16MB フラッシュ</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>ワイヤレス</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>WiFi</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>オンチップ 2.4 GHz</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Bluetooth</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>オンチップ Bluetooth 5.0, BLE</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>セルラー</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4G - A7670G SIMCom LTE Cat 1 モジュール</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>LoRa</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>対応*</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>インターフェース</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>イーサネット</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>100M RJ45 *1</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>USB</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>USB2.0 A*1</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CAN BUS</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>CAN BUS *1 (絶縁)</p>
      </td>
    </tr>
    <tr data-style="height: 39px;" style={{height: 39}}>
      <td data-style="height: 39px; width: 132px;" style={{height: 39, width: 132}}>
        <p>RS シリアル</p>
      </td>
      <td data-style="height: 39px; width: 491px;" style={{height: 39, width: 491}}>
        <p>RS485 *1 (絶縁)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>デジタル入力</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (絶縁) オンボード</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">DC入力電圧 - 24V</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>デジタル出力</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>6 (絶縁)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>推奨電圧 - 24V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>アナログ入力</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (絶縁)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">入力: 0 ~ 20 mA デフォルト, 0-10V オプション</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>アナログ出力</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>2 (絶縁)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>出力: 0 ~ 5 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>電源供給</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>10.8 ~ 36 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>追加機能</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>RTC</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RTC</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>暗号化チップ</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Atecc608a(オプション)</p>
      </td>
    </tr>
    <tr data-style="height: 64px;" style={{height: 64}}>
      <td data-style="height: 64px; width: 132px;" style={{height: 64, width: 132}}>
        <p>動作温度</p>
      </td>
      <td data-style="height: 64px; width: 491px;" style={{height: 64, width: 491}}>
        <p>-20 ～ +60 °C</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>認証</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RoHS, CE, FCC, UKCA</p>
      </td>
    </tr>
    <tr>
      <td data-style="width: 132px;" style={{width: 132}}>
        <p>保証</p>
      </td>
      <td data-style="width: 491px;" style={{width: 491}}>
        <p>2 年間</p>
      </td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

### 前面概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge_box_esp/font-port.png" /></div>

### 側面ポート

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_side.png" /></div>

1. 4つのLED
2. イーサネットポート
3. CANバスおよびRS485ポート
4. マルチファンクションフェニックスコネクタ

#### LEDインジケータ:

<div align="center"><img style={{background: 'rgb(255, 255, 255)', border: '10px solid transparent'}} width={300}src="https://files.seeedstudio.com/wiki/edge_box_esp/LED.png" /></div>

<div class="table-center">

| LED名 | 信号        | 説明            |
|  :---:   |  :---:        |    :---:               | 
|   PWR    | 電源ステータス  |                        |
| Cellular | 4G/LTE        |                        |
|   ACT    | シリアルTXステータス | U0TXDと多重化 |
|   ERR    | シリアルRXステータス | U0RXDと多重化 |

</div>

#### イーサネットポート:

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| PIN#          |  信号      | 説明                               |
|  :---:        |  :---:       |    :---:                                  | 
|      1        |      TXP     |                                           |
|      2        |      TXN     |                                           |
|      3        |      RXP     |                                           |
|      4        |      N.C.    |                                           |
|      5        |      N.C.    |                                           |
|      6        |      RXN     |                                           |
|      7        |      N.C.    |                                           |
|      8        |      N.C.    |                                           |
|   黄色LED  |    ACTIVE    |  TXおよびRXデータが通過するとアクティブ  |
|   緑色LED   |     LINK     |          LINK UP時にアクティブ              |

</div>

#### CANバスおよびRS485ポート:

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| PIN#          |  信号      | 説明                               |
|  :---:        |  :---:       |    :---:                                  | 
|      1        |      N.C.     |                                           |
|      2        |      N.C.     |                                           |
|      3        |      N.C.     |                                           |
|      4        |      CAN_H    |                                           |
|      5        |      CAN_L    |                                           |
|      6        |      N.C.     |                                           |
|      7        |      RS485_A  |                                           |
|      8        |      RS485_B  |                                           |
|   黄色LED  |    ACTIVE     |  CAN BUSデータのTXおよびRX時にアクティブ  |
|   緑色LED   |     LINK      |  RS485データのTXおよびRX時にアクティブ    |

</div>

:::note

1. RS485用の120オーム終端抵抗は内部に設置されています。
2. CAN BUS用の120オーム終端抵抗は内部に設置されています。

:::

#### マルチファンクションフェニックスコネクタ

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/multi-func-connector.png" alt="pir" width={500} height="auto" /></div>

<div class="table-center">

| 機能  | PIN番号  |  PIN番号 | 機能  |
|:---:      | :---: | :---: | :---: |
|  S/S      | 2  | 1  | DO_24V  |
|  DI0      | 4  | 3  | DO_0V  |
|  DI1      | 6  | 5  | DO0  |
|  DI2      | 8  | 7  | DO1  |
|  DI3      | 10  | 9 | DO2  |
|  AGND     | 12 | 11 | DO3  |
|  AI0      | 14 | 13 | DO4  |
|  AI1      | 16 | 15 | DO5  |
|  AI2      | 18 | 17 | AO0  |
|  AI3      | 20 | 29 | AO1  |
|  AGND     | 22 | 21 | AGND  |
|  GND      | 24 | 23 | +24V  | 

</div>

:::note
1. 24AWGから16AWGのケーブルを推奨します。
2. GNDとAGNDは絶縁されています。
3. すべてのAGND信号は内部で接続されています。
4. 入力用のDC電圧は24V(±10%)です。
5. 出力用のDC電圧は24V(±10%)で、電流容量は1Aです。
:::

### 上部ポート

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_top.png" alt="pir" width={500} height="auto" /></div>

1. Wi-Fiアンテナポート (SMAメス)
2. SIMカード
3. リセット
4. USBポート (5V電源出力のみ)
5. 4G/LTEアンテナポート (SMAメス)

### GPIOマルチプレックス
<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>ピン名</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>ESP32S3 IO</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>タイプ</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>機能</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-lhaa">DO0</td>
      <td className="tg-lhaa">IO40</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO1</td>
      <td className="tg-lhaa">IO39</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO2</td>
      <td className="tg-lhaa">IO38</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO3</td>
      <td className="tg-lhaa">IO37</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力3</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO4</td>
      <td className="tg-lhaa">IO36</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力4</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO5</td>
      <td className="tg-lhaa">IO35</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力5</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI0</td>
      <td className="tg-lhaa">IO4</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI1</td>
      <td className="tg-lhaa">IO5</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI2</td>
      <td className="tg-lhaa">IO6</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI3</td>
      <td className="tg-lhaa">IO7</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力3</td>
    </tr>
    <tr>
      <td className="tg-lhaa" rowSpan={2}>AO0</td>
      <td className="tg-lhaa">IO42</td>
      <td className="tg-lhaa">アナログ出力</td>
      <td className="tg-lhaa">アナログ出力0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">IO41</td>
      <td className="tg-lhaa">アナログ出力</td>
      <td className="tg-lhaa">アナログ出力1</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>RS485 </td>
      <td className="tg-rzif">IO17</td>
      <td className="tg-rzif">U1TXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO18</td>
      <td className="tg-rzif">U1RXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO8</td>
      <td className="tg-rzif">RS485_RTS</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={4}>4G/LTE</td>
      <td className="tg-rzif">IO48</td>
      <td className="tg-rzif">U2TXD</td>
      <td className="tg-rzif" rowSpan={4}>WWAN</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO47</td>
      <td className="tg-rzif">U2RXD</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO21</td>
      <td className="tg-rzif">PWR_KEY</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO16</td>
      <td className="tg-rzif">PWR_EN</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={6}>イーサネット </td>
      <td className="tg-rzif">IO10</td>
      <td className="tg-rzif">FSPI_CS0</td>
      <td className="tg-rzif" rowSpan={6}>W5500に接続</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO11</td>
      <td className="tg-rzif">FSPI_MISO</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO12</td>
      <td className="tg-rzif">FSPI_MOSI</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO13</td>
      <td className="tg-rzif">FSPI_SCLK</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO14</td>
      <td className="tg-rzif">INT #</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO15</td>
      <td className="tg-rzif">RST #</td>
    </tr>
    <tr>
      <td className="tg-rzif">CAN_TXD</td>
      <td className="tg-rzif">IO1</td>
      <td className="tg-rzif">CAN BUS TX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">CAN_RXD</td>
      <td className="tg-rzif">IO2</td>
      <td className="tg-rzif">CAN BUS RX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">TXD0/LED_ACT#</td>
      <td className="tg-rzif">U0TXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">プログラミング/デバッグおよびLEDドライバ</td>
    </tr>
    <tr>
      <td className="tg-rzif">RXD0/LED_ERR#</td>
      <td className="tg-rzif">U0RXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">Beep</td>
      <td className="tg-rzif">IO45</td>
      <td className="tg-rzif">ビープ</td>
      <td className="tg-rzif">高アクティブでブザーを有効化</td>
    </tr>
    <tr>
      <td className="tg-rzif">リセット</td>
      <td className="tg-rzif">IO0</td>
      <td className="tg-rzif">リセットボタン</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>I2C </td>
      <td className="tg-rzif">IO19</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SCL</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO20</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SDA</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO9</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">PCF8563からのアラームまたはウェイクアップ</td>
    </tr>
  </tbody>
</table>
</div>

#### プログラミング/デバッグポート

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| デバッグポート | ESP32 IO | その他の機能       |
| :---:          | :---:    | :---:              |
| RXD            | RXD0     | LED_ACT#          |
| TXD            | TXD0     | LED_ERR#          |
| GND            | GND      |                   |
| GPIO0          | IO0      | リセットボタン    |

</div>

:::note

GPIO0はリセットボタンにも接続されています。また、UART0のRXDとTXDはダウンロードモードで使用されます。
これにより、ユーザーはEdgeBox-ESP-100をベアメタルで開発することが可能です。

:::

### 内蔵デバイス

#### I2C PINマップ & 内蔵I2Cデバイス

* I2C PINマップ:

<div class="table-center">

| I2C PIN | ESP32 IO |
|  :---:  |  :---:   |  
| I2C_SDA |   IO20   |
| I2C_SCL |   IO19   |
| I2C_INT |   IO9    |

</div>

* 内蔵I2Cデバイスとアドレス:

<div class="table-center">

|  デバイス              | アドレス | 機能            |
|  :---:                 | :---:   | :---:           |
|  FM24CL64B             |  0x50   | 不揮発性メモリ  |
|  PCF8563               |  0x51   | RTC             |
|  Atecc608a             |  0x68   | 暗号化デバイス  |
|  SGM58031              |  0x48   | ADC             |

</div>

#### 4G LTE

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/4glte.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| A7670G 4Gモジュール  | ESP32 IO| 機能                                   |
|  :---:               |  :---:  |  :---:                                 |
|  PWR_EN              |  IO16   | SY8089Aを介してA7670Gの電源を有効化    |
|  PWRKEY              |  IO21   | PWR_KEY                                |
|  RXD                 |  IO48   | U2TXD                                  |
|  TXD                 |  IO47   | U2RXD                                  |

</div>

#### アナログ入力 (SGM58031)

<div class="table-center">

| SGM58031 (I2Cアドレス 0x48)  |  IO            |
|   :---:                      |   :---:        |
| CH1+                         |  AI0           |
| CH2+                         |  AI1           |
| CH3+                         |  AI2           |
| CH4+                         |  AI3           |
| SDA                          |  IO20/I2C_SDA  |
| SCL                          |  IO19/I2C_SCL  |

</div>

:::note
  
  デフォルトの入力タイプは4-20mAです。
  0-10Vの入力タイプはオプションです。

:::

#### アナログ出力

デュアルアナログ出力チャンネルはPWMとLPF技術で構成されています。

<div class="table-center">

| アナログ出力 | ESP32 IO |
|  :---:       |  :---:   |
|  AO0         |   IO42   |
|  AO1         |   IO41   |

</div>

## 電気仕様

### 電源の供給方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/Edgebox-esp-how-to-power.png" alt="pir" width={500} height="auto" /></div>

### 消費電力

EdgeBox-ESP-100の消費電力は、アプリケーション、動作モード、および接続された周辺機器によって大きく異なります。以下の値は概算値として考慮してください。

:::note

電源供給が24Vの場合

:::

<div class="table-center">

| 動作モード | 電流(ma) |
| :---:      | :---:    |
| 待機       | 81       |

</div>

## Arduinoプログラミングの始め方

### 必要条件

#### ハードウェアの必要条件

以下を準備してください：

- 1 x [EdgeBox-ESP-100](https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html)
- 1 x PC
- 1 x USB to Serialアダプター
- 1 x PH2 フィリップスヘッドドライバー（オプション）
- 1 x 六角レンチ H2.5
- 1 x 12V3A（最小入力電力要件）電源

#### ソフトウェアの必要条件

- [Arduino IDE](https://www.arduino.cc/en/software)

### 準備

#### ハードウェア

* STEP 1: ケースを取り外し、プログラミングポートを見つける

* STEP 1-1: まず、2つの黒い六角穴付きボルトを見つけて取り外してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_case.png" alt="pir" width={500} height="auto" /></div>

* STEP 1-2: 次に、3つのM.3 PH2 フィリップスヘッドネジを取り外します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_PH.png" alt="pir" width={500} height="auto" /></div>

* STEP 1-3: これでプログラミングポートを見つけることができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

* STEP 2: USB-to-SerialをEdgebox-ESP-100に接続する

接続は以下のように行います。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming.png" alt="pir" width={800} height="auto" /></div>

:::caution

接続が正しいことを確認してください。接続中はEdgebox-ESP-100の電源をオフにしてください。

:::

<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-wp8o">Edgebox-ESP-100</th>
      <th className="tg-c3ow">USB-To-Serial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-wp8o">RXD</td>
      <td className="tg-c3ow">TX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">TXD</td>
      <td className="tg-c3ow">RX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">GND</td>
      <td className="tg-c3ow">GND</td>
    </tr>
    <tr>
      <td className="tg-c3ow" rowSpan={2}>GPIO0</td>
      <td className="tg-c3ow">GND（プログラムダウンロードモード）<br /></td>
    </tr>
    <tr>
      <td className="tg-c3ow">シリアルデバッガとして使用する場合は未接続<br /></td>
    </tr>
  </tbody>
</table>
</div>

#### ソフトウェア

* STEP 1: [Arduino公式ウェブサイト](https://www.arduino.cc/en/software)からArduino IDE 2.0.Xをダウンロードしてインストールします。

* STEP 2: ボードマネージャからESP32を見つけてインストールします。

* STEP 2-1: Arduino IDEを開き、`Board Tab`（2番目のタブ）をクリックして`Board Manager`を開きます。

* STEP 2-2: 検索バーに**`ESP32`**と入力してEnterキーを押します。これでESP32ボードライブラリが表示されるはずです。

* STEP 2-3: バージョンドロップダウンメニューから最新バージョンを選択します。例えば、このWikiが書かれた時点では最新バージョンは**`バージョン2.0.7`**です。

:::note

ESP32ボードライブラリのバージョン >= **`2.0.7`** をインストールしてください。

:::

* STEP 2-4: `Install`をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/download_board.png" alt="pir" width="auto" height="auto" /></div>

### Edgebox-ESP-100でArduinoを使用してソレノイドを制御する

#### 配線図

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connection.png" alt="pir" width={400} height="auto" /></div>

#### コード

以下はすべてのソレノイドを順番に切り替えるコードです。Arduino IDEのコードエディタにコピーしてください。

```c
void setup() {
  // DOピンを出力モードに設定
  pinMode(DO0, OUTPUT);
  pinMode(DO1, OUTPUT);
  pinMode(DO2, OUTPUT);
  pinMode(DO3, OUTPUT);
  // DOピンをデフォルトで論理LOWに設定
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, LOW);
}

void loop() {
  // DO0をオンにしてDO3をオフにする
  digitalWrite(DO0, HIGH);
  digitalWrite(DO3, LOW);
  delay(2000);

  // DO1をオンにしてDO0をオフにする
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, HIGH);
  delay(2000);

  // DO2をオンにしてDO1をオフにする
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, HIGH);
  delay(2000);
  
  // DO3をオンにしてDO2をオフにする
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, HIGH);
  delay(2000);
}
```

#### コードのアップロード

* STEP 1: USB-To-SerialアダプターをPCに接続し、Edgebox-ESP-100とUSB-To-Serialコンバーターの接続をプログラムダウンロードモードに設定します。

:::note

Edgebox-ESP-100の電源を次のステップまで入れないでください。

:::

* STEP 2: Edgebox-ESP-100の電源を入れます。

* STEP 3: ボードとポートを選択します。

* STEP 3-1: ボードとポート選択ウィンドウを開きます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/select_boardandport.png" alt="pir" width="auto" height="auto" /></div>

* STEP 3: ボードとポート選択ウィンドウで、検索バーにEdgeboxを入力し、Edgebox-ESP-100をボードとして選択します。そして、USB-To-Serialアダプターに対応するポートを選択します。その後、**`OK`**を押して確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/selectboard.png" alt="pir" width="auto" height="auto" /></div>

* STEP 4: コードアップロードボタンを押してコードをアップロードします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/uploadcode.png" alt="pir" width="auto" height="auto" /></div>

* STEP 5: 電源をリセットして、Edgebox-ESP-100がソレノイドを制御する様子をモニターします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/demo.gif" alt="pir" width="auto" height="auto" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>