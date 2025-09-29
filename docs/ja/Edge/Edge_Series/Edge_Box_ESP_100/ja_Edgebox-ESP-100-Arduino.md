---
description: EdgeBox-ESP-100 Arduino入門ガイド
title: EdgeBox-ESP-100 Arduino入門ガイド
keywords:
  - Edge
  - PLC Control
  - Control system
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-ESP-100-Arduino
last_update:
  date: 03/10/2023
  author: Peter Pan
---

## Edgebox-ESP-100

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width: 600}}/></div>

EdgeBox-ESP-100は、軽量な自動化ソリューション向けに設計されたESP32ベースのコントローラーです。アナログ入力をサポートし、リモート環境での監視と制御を効果的に行い、PID制御ループ、ロジックシーケンス制御、または柔軟なワイヤレスおよびフィールドセンサー拡張を備えたゲートウェイに最適です。

EdgeBox-ESP-100に加えて、Raspberry Piを搭載したEdgeファミリーには、異なるソリューション向けの他の2つのEdge製品もあります。違いを深く理解し、プロジェクトに最適な部品を選択するために、Seeed Studio [Edgeシリーズページ](https://www.seeedstudio.com/raspberrypi/device/industry.html)を参照してください。

絶縁されたCAN、RS485フィールドバス接続、およびデジタル信号とアナログ信号の両方に対応する豊富なIOリソースを提供し、広範囲な設備とセンサー入力に対応します。PLCおよびフィールド自動化アプリケーションに完全に対応します。

オンチップWi-FiおよびBLE機能を含み、4G LTEモジュールCellularも含まれているため、EdgeBox-ESP-100は産業用ゲートウェイの構築に利用でき、既存のPLCをネットワークやクラウドに接続することができます。

この携帯型ボックスは、堅牢なハードウェア、電気設計、およびアルミニウム合金筐体を備えており、広い温度範囲でその機能を維持し、高いサージおよび短絡保護を提供し、ビジネスに基づく多様な展開方法に対応します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

> ⚠️ **重要な注意事項：USBプログラミング/デバッグ機能の利用可能性**
>
> - **USBプログラミング/デバッグ機能は**、**EdgeBox-ESP-100**の**最新バージョンでのみ利用可能**です。
> - **以前のバージョン**は**USB-Aポート経由の電源供給のみ**をサポートし、**プログラミングやデバッグには対応していません**。

---

> ❗**警告：旧バージョンのUSB-AポートをPCに接続しないでください**
>
> - **旧バージョン**のUSB-AポートをPC USBポートに接続すると、**不適切な動作**が発生する可能性があります。
> - USB経由でデバイスをプログラミングまたはデバッグする予定の場合は、**新バージョンのみ**を使用してください。

---

> **🔍 新バージョンの識別方法**
>
> デバイス筐体の**シリアル番号（SN）**ラベルを確認してください：
>
> **旧バージョンのSN**：
>
> - `2437`または**それ以前**のすべてのシリアル番号
> - 例：`102991735243700001`、`102991735243700093`
> - `2437` = **2024年第37週**に製造
>
> **新バージョンのSN**：
>
> - `2438`または**それ以降**のすべてのシリアル番号
> - 例：`102991735243800001`、`102991735243800093`
> - `2438` = **2024年第38週以降**に製造

- マルチフィールドバスサポート：CAN、RS485、Ethernet
- マルチワイヤレス機能：オンチップWifi、BLE接続、内蔵Cellular 4G LTEモジュール
- 信頼性の高いハードウェア設計：堅牢で保守性の高い構造
- 信頼性の高い電気設計：高絶縁、高サージ、短絡保護
- IEC 61131-3準拠プログラムサポート（開発中）
- ESP-IDF、Arduinoでプログラミング可能

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
        <p><strong>基本仕様</strong></p>
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
        <p>16MB Flash</p>
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
        <p>オンチップ Bluetooth 5.0、BLE</p>
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
        <p>サポート*</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>インターフェース</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Ethernet</p>
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
        <p>CAN BUS *1（絶縁）</p>
      </td>
    </tr>
    <tr data-style="height: 39px;" style={{height: 39}}>
      <td data-style="height: 39px; width: 132px;" style={{height: 39, width: 132}}>
        <p>RSシリアル</p>
      </td>
      <td data-style="height: 39px; width: 491px;" style={{height: 39, width: 491}}>
        <p>RS485 *1（絶縁）</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>デジタル入力</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4（絶縁）オンボード</p>
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
        <p>6（絶縁）</p>
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
        <p>4（絶縁）</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">入力：0 ~ 20 mA デフォルト、0-10V オプション</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>アナログ出力</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>2（絶縁）</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>出力：0 ~ 5 V</p>
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
        <p>Atecc608a（オプション）</p>
      </td>
    </tr>
    <tr data-style="height: 64px;" style={{height: 64}}>
      <td data-style="height: 64px; width: 132px;" style={{height: 64, width: 132}}>
        <p>動作温度</p>
      </td>
      <td data-style="height: 64px; width: 491px;" style={{height: 64, width: 491}}>
        <p>-20 to +60 °C</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>認証</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RoHS、CE、FCC、UKCA</p>
      </td>
    </tr>
    <tr>
      <td data-style="width: 132px;" style={{width: 132}}>
        <p>保証</p>
      </td>
      <td data-style="width: 491px;" style={{width: 491}}>
        <p>2年</p>
      </td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

### フロント概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge_box_esp/font-port.png" /></div>

### サイドポート

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_side.png" /></div>

1. 4 X LED
2. イーサネットポート
3. CANバスおよびRS485ポート
4. 多機能フェニックスコネクタ

#### LEDインジケータ：

<div align="center"><img style={{background: 'rgb(255, 255, 255)', border: '10px solid transparent'}} width={300}src="https://files.seeedstudio.com/wiki/edge_box_esp/LED.png" /></div>

<div class="table-center">

| LED名 | 信号        | 説明            |
|  :---:   |  :---:        |    :---:               |
|   PWR    | 電源ステータス  |                        |
| Cellular | 4G/LTE        |                        |
|   ACT    | シリアルTXステータス | U0TXDと多重化 |
|   ERR    | シリアルRXステータス | U0RXDと多重化 |

</div>

#### イーサネットポート：

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
|   黄色LED  |    ACTIVE    |  TXおよびRXデータが通過する際にアクティブ  |
|   緑色LED   |     LINK     |          リンクアップ時にアクティブ              |

</div>

#### CANバスおよびRS485ポート：

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
|   黄色LED  |    ACTIVE     |  CANバスデータのTXおよびRXが通過する際にアクティブ  |
|   緑色LED   |     LINK      |  RS485データのTXおよびRXが通過する際にアクティブ    |

</div>

:::note

    1. RS485用の120Ω終端抵抗は内部に実装済みです。
    2. CANバス用の120Ω終端抵抗は内部に実装済みです。

:::

#### 多機能フェニックスコネクタ

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
    1. 24AWGから16AWGのケーブルを推奨します
    2. GNDとAGNDは絶縁されています
    3. すべてのAGND信号は内部で接続されています
    4. 入力用のDC電圧は24V(±10%)です
    5. 出力用のDC電圧は24V(±10%)である必要があります。電流容量は1Aです。
:::

### トップポート

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_top.png" alt="pir" width={500} height="auto" /></div>

1. Wi-Fiアンテナポート（SMAメス）
2. SIMカード
3. リセット
4. USBポート（5V電源出力のみ）
5. 4G/LTEアンテナポート（SMAメス）

### GPIO多重化

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
      <td className="tg-lhaa">デジタル出力 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO1</td>
      <td className="tg-lhaa">IO39</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO2</td>
      <td className="tg-lhaa">IO38</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO3</td>
      <td className="tg-lhaa">IO37</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO4</td>
      <td className="tg-lhaa">IO36</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力 4</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO5</td>
      <td className="tg-lhaa">IO35</td>
      <td className="tg-lhaa">デジタル出力</td>
      <td className="tg-lhaa">デジタル出力 5</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI0</td>
      <td className="tg-lhaa">IO4</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI1</td>
      <td className="tg-lhaa">IO5</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI2</td>
      <td className="tg-lhaa">IO6</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI3</td>
      <td className="tg-lhaa">IO7</td>
      <td className="tg-lhaa">デジタル入力</td>
      <td className="tg-lhaa">デジタル入力 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa" rowSpan={2}>AO0</td>
      <td className="tg-lhaa">IO42</td>
      <td className="tg-lhaa">アナログ出力</td>
      <td className="tg-lhaa">アナログ出力 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">IO41</td>
      <td className="tg-lhaa">アナログ出力</td>
      <td className="tg-lhaa">アナログ出力 1</td>
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
      <td className="tg-rzif" rowSpan={6}>Ethernet </td>
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
      <td className="tg-rzif">プログラミング/デバッグおよびLEDドライバー</td>
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
      <td className="tg-rzif">ハイアクティブ ブザーを有効化</td>
    </tr>
    <tr>
      <td className="tg-rzif">Reset</td>
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

| デバッグポート | ESP32 IO | その他の機能 |
| :---:          | :---:    | :---:       |
| RXD            | RXD0     | LED_ACT#    |
| TXD            | TXD0     | LED_ERR#    |
| GND            | GND      |             |
| GPIO0          | IO0      | リセットボタン |

</div>

:::note

GIPIO0 はリセットボタンにも接続されています。また、UART0 の RXD、TXD はダウンロードモードで使用されます。
これにより、ユーザーは EdgeBox-ESP-100 をベアメタルで開発できます。

:::

### 内蔵デバイス

#### I2C ピンマップ & 内蔵 I2C デバイス

- I2C ピンマップ:

<div class="table-center">

| I2C ピン | ESP32 IO |
|  :---:   | :---:    |  
| I2C_SDA  |   IO20   |
| I2C_SCL  |   IO19   |
| I2C_INT  |   IO9    |

</div>

- 内蔵 I2C デバイスとアドレス:

<div class="table-center">

| デバイス              | アドレス | 機能           |
|  :---:                | :---:   | :---:          |
|  FM24CL64B            |  0x50   | 不揮発メモリ   |
|  PCF8563              |  0x51   | RTC            |
|  Atecc608a            |  0x68   | 暗号デバイス   |
|  SGM58031             |  0x48   | ADC            |

</div>

#### 4G LTE

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/4glte.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| A7670G 4G モジュール | ESP32 IO | 機能                                  |
|  :---:               |  :---:   | :---:                                |
|  PWR_EN              |  IO16    | SY8089A 経由で A7670G の電源を有効化 |
|  PWRKEY              |  IO21    | PWR_KEY                              |
|  RXD                 |  IO48    | U2TXD                                |
|  TXD                 |  IO47    | U2RXD                                |

</div>

#### アナログ入力 (SGM58031)

<div class="table-center">

| SGM58031 (I2C アドレス 0x48) |  IO            |
|   :---:                     |   :---:        |
| CH1+                        |  AI0           |
| CH2+                        |  AI1           |
| CH3+                        |  AI2           |
| CH4+                        |  AI3           |
| SDA                         |  IO20/I2C_SDA  |
| SCL                         |  IO19/I2C_SCL  |

</div>

:::note
  
  デフォルトの入力タイプは 4-20mA です。
  0-10V 入力タイプはオプションです。

:::

#### アナログ出力

 デュアルアナログ出力チャネルは PWM と LPF 技術で構成されています。

<div class="table-center">

| アナログ出力 | ESP32 IO |
|  :---:       | :---:    |
|  AO0         |   IO42   |
|  AO1         |   IO41   |

</div>

## 電気仕様

### 電源供給方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/Edgebox-esp-how-to-power.png" alt="pir" width={500} height="auto" /></div>

### 消費電力

EdgeBox-ESP-100の消費電力は、アプリケーション、動作モード、接続された周辺機器に大きく依存します。記載された値は概算値として見なしてください。

:::note

電源供給24Vの条件下

:::

<div class="table-center">

| 動作モード | 電流(ma) |
| :---:     | :---:    |
| アイドル   | 81       |

</div>

## Arduino プログラミングの開始

### 要件

#### ハードウェア要件

以下を準備する必要があります：

- 1 x [EdgeBox-ESP-100](https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html)
- 1 x PC
- 1 x USB to Serial アダプター
- 1 x PH2 プラスヘッドドライバー（オプション）
- 1 x 六角レンチ H2.5
- 1 x 12V3A（最小入力電力要件）電源

#### ソフトウェア要件

- [Arduino IDE](https://www.arduino.cc/en/software)

### 準備

#### ハードウェア

- ステップ 1: ケースを取り外してプログラミングポートを見つける

- ステップ 1-1: 2つの黒い六角穴付きボルトを見つけて取り外してください

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_case.png" alt="pir" width={500} height="auto" /></div>

- ステップ 1-2: 次に3つのM.3 PH2プラスヘッドネジを取り外します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_PH.png" alt="pir" width={500} height="auto" /></div>

- ステップ 1-3: これでプログラミングポートを見つけることができるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

- ステップ 2: USB-to-SerialをEdgebox-ESP-100に接続する

接続は以下のように行ってください

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming.png" alt="pir" width={800} height="auto" /></div>

:::caution

接続が正しいことを確認し、接続中はEdgebox-ESP-100の電源を切っておいてください。

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
      <td className="tg-c3ow">シリアルデバッガーとして使用する場合は未接続<br /></td>
    </tr>
  </tbody>
</table>
</div>

#### ソフトウェア

- ステップ 1: [Arduino公式ウェブサイト](https://www.arduino.cc/en/software)からArdunio IDE 2.0.Xをダウンロードし、インストールします。

- ステップ 2: ボードマネージャーからESP32を見つけてインストールします。

- ステップ 2-1: Arduino IDEを開き、`Board Tab`（2番目のタブ）をクリックして`Board Manager`を開きます
  
- ステップ 2-2: 検索バーに**`ESP32`**と入力してEnterキーを押すと、esp32ボードライブラリがリストに表示されます。

- ステップ 2-3: バージョンドロップダウンメニューから最新バージョンを選択します。例えば、このwikiが書かれた時点での最新バージョンは**`version 2.0.7`**です

:::note

esp32ボードライブラリのバージョン >= **`2.0.7`** をインストールしてください。

:::

- ステップ 2-4: `Install`をクリックします

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/download_board.png" alt="pir" width="auto" height="auto" /></div>

### Edgebox-ESP-100でArduinoを使用してソレノイドを制御する

#### 配線図

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connection.png" alt="pir" width={400} height="auto" /></div>

#### コード

以下は全てのソレノイドを循環させるコードです。Arduino IDEのコードエディタにコードをコピーしてください

```c
void setup() {
  //setup DO pins to output mode
  pinMode(DO0, OUTPUT);
  pinMode(DO1, OUTPUT);
  pinMode(DO2, OUTPUT);
  pinMode(DO3, OUTPUT);
  //setup DO pins default to Logic LOW
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, LOW);
}

void loop() {
  //Switch on DO0 and Swith off DO3
  digitalWrite(DO0, HIGH);
  digitalWrite(DO3, LOW);
  delay(2000);

  //Switch on DO1 and Swith off DO0
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, HIGH);
  delay(2000);

  //Switch on DO2 and Swith off DO1
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, HIGH);
  delay(2000);
  
  //Switch on DO3 and Swith off DO2
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, HIGH);
  delay(2000);
}

```

#### コードのアップロード

- ステップ 1: USB-To-Serialアダプターをお使いのPCに接続し、Edgebox-ESP-100とUSB-To-Serialコンバーターの接続をプログラムダウンロードモードに設定してください。

:::note

次のステップまでEdgebox-ESP-100の電源を入れないでください

:::

- ステップ 2: Edgebox-ESP-100の電源を入れます

- ステップ 3: ボードとPORTSを選択します

- ステップ 3-1: ボードとポート選択ウィンドウを開きます

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/select_boardandport.png" alt="pir" width="auto" height="auto" /></div>

- ステップ 3: `ボードとポート選択ウィンドウ`からボードとPORTSを選択します。この場合、検索バーにedgeboxと入力し、ボードとしてEdgebox-ESP-100を選択し、お使いのUSB-to-Serialアダプターに応じてポートを選択します。その後、**`OK`**を押して確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/selectboard.png" alt="pir" width="auto" height="auto" /></div>

- ステップ 4: コードアップロードボタンを押してコードをアップロードします。
  
<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/uploadcode.png" alt="pir" width="auto" height="auto" /></div>

- ステップ 5: 電源をリセットして、Edgebox-ESP-100がソレノイドを制御している様子を監視します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/demo.gif" alt="pir" width="auto" height="auto" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
