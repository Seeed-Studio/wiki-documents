---
description: Meshtastic 向け SenseCAP MeshTracker X1 の紹介。この Wiki では、機能、仕様、ハードウェア概要、ボタン、LED、およびピン一覧を紹介します。
title: SenseCAP MeshTracker X1 の紹介
keywords:
  - トラッカー
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png
sku: 100087698
slug: /meshtracker_x1_intro
sidebar_position: 0
last_update:
  date: 5/29/2026
  author: MichelleHuang
url: https://wiki.seeedstudio.com/ja/meshtracker_x1_intro/
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png" alt="pir" width={800} height="auto" /></p>

世界初のカードサイズ Meshtastic デバイスで、デュアルバンド GPS を搭載しています。オフグリッド環境での信頼性の高い通信のために設計された MeshTracker X1 は、863～928 MHz の周波数に対応する IP66 等級の [Meshtastic®](https://meshtastic.org/) GPS トラッカーです。最新の Semtech LR2021 LoRa チップを搭載し、USB-C 接続、最長 5 日間のバッテリー駆動、コンパクトで屋外使用に適したデザインを備えています。

### 特長

- **実際に持ち歩ける Meshtastic デバイス** 

SenseCAP MeshTracker X1 は、アウトドア、大規模イベント、緊急時など、セルラーネットワークの範囲外でも信頼できる通信と位置共有を必要とする人のために設計されています。真に携帯しやすいフォームファクタと堅牢な IP66 保護により、Meshtastic 接続を日常の持ち歩きや実際のフィールド利用に持ち込みます。
- **超高精度デュアルバンド GPS トラッキング** 

デュアルバンド L1+L5 GNSS と内蔵気圧センサーにより、MeshTracker X1 はシングルバンド GPS よりも高い信頼性の位置情報と高度認識を実現します。また、デュアルバンド GPS を搭載した世界初のカードサイズ Meshtastic デバイスでもあります。
- **次世代 LoRa 接続（LR2021）** 

Semtech LR2021 によって駆動される MeshTracker X1 は、最大 -141 dBm の感度と 2.6 Mbps の FLRC データレートにより、より強力な RF 性能と高速で信頼性の高いメッシュ通信を実現し、音声や画像伝送など将来の機能の基盤を築きます。
- **信頼性の高い長距離通信** 

915 MHz でのテストにおいて、MeshTracker X1 は見通しの良い環境で最大 8 km の距離で信頼性の高い通信を可能にし、アウトドアアクティビティ、イベント、緊急時にチームの接続を維持します。
- **カードサイズ設計で持ち運びが容易** 

薄型かつ軽量な MeshTracker X1 は、アウトドアアクティビティ中の日常的な携帯を想定して設計されています。ネックストラップで身に着けたり、バックパックに取り付けたり、自転車バッグに固定したり、ポケットにそのまま入れて、手軽にオフグリッド接続を利用できます。
- **柔軟なバイブレーション & サウンドアラート** 

MeshTracker X1 は、内蔵バイブレーションとブザーによる柔軟な通知オプションを提供します。騒がしいイベント中や屋外走行中、あるいは静かなトレイルを歩いていて通知を控えめにしたい場合でも、受信メッセージに気づくことができます。
- **IP66 準拠の堅牢な屋外保護** 

防塵・防水の IP66 等級保護構造により、雨、泥、ほこりっぽいトレイルなど、過酷な屋外環境でも信頼性の高い動作を保証します。
- **USB-C 接続** 

充電、ファームウェア更新、デバッグ用の標準 USB-C インターフェースを備え、屋外でのタフな使用と日常の利便性の両立を図っています。
- **長時間バッテリー駆動** 

高容量 1100mAh バッテリーを中心に最適化された高集積カードサイズフォームファクタにより、コンパクトで携帯性を保ちながら、アウトドアでの携行やオフグリッド通信において最長 5 日間の連続動作を実現します。


### 仕様

**一般**

|**ネットワークプロトコル**|LoRa (863-928 MHz)、Bluetooth (v5.0)|
| :- | :- |
|**LED**|1\* RGB|
|**ブザー**|ステータス表示用ブザー 1 個|
|**ボタン**|操作用ボタン 1 個|
|**モーター**|1\* DRV2605L|
|**アンテナ**|内蔵（GNSS/LoRa/Bluetooth）|
|**通信距離**|最大 8 km|
|**IP 等級**|IP66|
|**寸法**|90\*57\*8 mm|
|**デバイス重量**|45g|
|**動作温度**|-20 ～ 60℃|
|**認証**|CE/FCC/RoSH/TELEC|

**バッテリー**

|項目|パラメータ|
| :- | :- |
|**バッテリー容量**|充電式リチウムバッテリー、1100mAh|
|**バッテリー寿命モニタリング**|バッテリーレベルの定期アップリンク|
|<p>**充電ケーブル**</p><p>**（アダプターは付属しません）**</p>|USB Type-C 充電ケーブル、20 cm|
|**デバイス電源入力**|5V、0.55A|
|**充電温度範囲**|5 ～ +45℃|

### ピン一覧

<table>
  <tr>
    <th>コンポーネント</th>
    <th>ピン</th>
    <th>ピン番号</th>
    <th>プロトコル</th>
  </tr>
  <tr>
    <td rowspan="3">LED</td>
    <td>R</td>
    <td>P0.03</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>G</td>
    <td>P0.24</td>
  </tr>
  <tr>
    <td>B</td>
    <td>P0.28</td>
  </tr>
  <tr>
    <td>センサー PWR EN</td>
    <td>-</td>
    <td>P1.07</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>ブザー</td>
    <td>-</td>
    <td>P0.25</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="3">モータードライバ</td>
    <td>EN</td>
    <td>P1.05</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="2">気圧センサー</td>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">6 軸センサー（将来バージョン）</td>
    <td>INT</td>
    <td>P1.02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">3 軸センサー（将来バージョン）</td>
    <td>INT</td>
    <td>P1.12</td>
    <td>GPIO</td>
  </tr>
    <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td>ボタン</td>
    <td>-</td>
    <td>P0.06</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="7">LR2021</td>
    <td>SPIMISO</td>
    <td>P1.08</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>SPIMOSI</td>
    <td>P1.09</td>
  </tr>
  <tr>
    <td>SPISCK</td>
    <td>P0.11</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.12</td>
  </tr>
  <tr>
    <td>LR_RST</td>
    <td>P1.10</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LR_BUSY</td>
    <td>P0.07</td>
  </tr>
  <tr>
    <td>LR_DIO8</td>
    <td>P1.01</td>
  </tr>
  <tr>
    <td rowspan="7">GNSS</td>
    <td>TX</td>
    <td>P0.13</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>RX</td>
    <td>P0.14</td>
  </tr>
  <tr>
    <td>Sleep_INT</td>
    <td>P0.30</td>
    <td rowspan="5">GPIO</td>
  </tr>
  <tr>
    <td>PPS0</td>
    <td>P0.04</td>
  </tr>
  <tr>
    <td>RTC_INT</td>
    <td>P0.29</td>
  </tr>
  <tr>
    <td>PWR_EN</td>
    <td>P1.11</td>
  </tr>
  <tr>
    <td>RTC_PWR_EN</td>
    <td>P1.13</td>
  </tr>
   <tr>
    <td rowspan="6">8MB フラッシュ</td>
    <td>SPISCK</td>
    <td>P0.19</td>
    <td rowspan="6">SPI</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.20</td>
  </tr>
  <tr>
    <td>SPIO0</td>
    <td>P0.21</td>
  </tr>
  <tr>
    <td>SPIO1</td>
    <td>P0.22</td>
  </tr>
  <tr>
    <td>SPIO2</td>
    <td>P0.23</td>
  </tr>
  <tr>
    <td>SPIO3</td>
    <td>P1.00</td>
  </tr>
</table>

### ボタン

|ボタン操作|説明|ブザー|
|- |- |- |
|1 回押す|電源オン|上昇メロディー|
|2 回押す|ノード／位置情報を更新|-|
|3 回押す|GPS のオン／オフを切り替え|-|
|4 回クリック|一時的にミュート／ミュート解除|-|
|5 秒間長押し|電源オフ|下降メロディー|

### LED

<table>
  <tr>
    <th colspan="2">点灯状態</th>
    <th colspan="1">デバイス状態</th>
  </tr>
  <tr>
    <td rowspan="4">🟢緑</td>
    <td>点灯</td>
    <td>デバイス起動中</td>
  </tr>
  <tr>
    <td>高速点滅 </td>
    <td>通常動作中</td>
  </tr>
  <tr>
    <td>低速点滅 </td>
    <td>充電中</td>
  </tr>
 <tr>
    <td>点灯</td>
    <td>充電完了</td>
  </tr>
  <tr>
    <td>🔴赤</td>
    <td>点滅</td>
    <td>バッテリー残量低下</td>
  </tr>
    <tr>
    <td>⚪️白</td>
    <td>点灯</td>
    <td>DFU モード／ブートローダーモード</td>
  </tr>
</table>

### ハードウェア図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardWareOverview.png" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardwareDiagram.png" alt="pir" width={900} height="auto" /></p>

### リソース

[バッテリーテストレポート](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Battry_Certification.zip)