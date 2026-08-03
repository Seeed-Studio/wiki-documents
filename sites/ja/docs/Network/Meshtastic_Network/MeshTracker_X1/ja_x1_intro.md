---
description: Meshtastic 向け SenseCAP MeshTracker X1 の紹介。この Wiki では、機能、仕様、ハードウェア概要、ボタン、LED、およびピン一覧を紹介します。
title: SenseCAP MeshTracker X1 入門
keywords:
  - Tracker
  - Meshtastic
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
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

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" alt="pir" width={900} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>

世界初のカードサイズ Meshtastic デバイスで、デュアルバンド GPS を搭載しています。オフグリッド環境での信頼性の高い通信のために設計された MeshTracker X1 は、IP66 等級の [Meshtastic®](https://meshtastic.org/) GPS トラッカーで、863–928 MHz の周波数帯をサポートします。最新の Semtech LR2021 LoRa チップを搭載し、USB-C 接続、最長 5 日間のバッテリー駆動、コンパクトで屋外使用に適したデザインを備えています。

### 特長
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/LoRaWio/20260723-194348.jpg" alt="pir" width={900} height="auto" /></p>


- **本当に持ち歩ける Meshtastic デバイス** 

SenseCAP MeshTracker X1 は、アウトドア、大規模イベント、緊急時など、携帯電話ネットワークの外でも信頼できる通信と位置情報共有を必要とする人のために設計されています。真にポータブルなフォームファクタと堅牢な IP66 保護により、Meshtastic 接続を日常の携行品や実際のフィールド利用へと拡張します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/CompactTracker.jpg" alt="pir" width={900} height="auto" /></p>

- **超高精度デュアルバンド GPS トラッキング** 

デュアルバンド L1+L5 GNSS と内蔵気圧センサにより、MeshTracker X1 はシングルバンド GPS よりも高い信頼性の位置測位と高度認識を実現します。また、デュアルバンド GPS を搭載した世界初のカードサイズ Meshtastic デバイスでもあります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/GNSSBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **次世代 LoRa 接続（LR2021）** 

Semtech LR2021 によって駆動される MeshTracker X1 は、最大 -141 dBm の感度と 2.6 Mbps の FLRC データレートにより、より強力な RF 性能を発揮し、より高速で信頼性の高いメッシュ通信を実現します。これにより、音声や画像伝送など将来の機能の基盤を構築します。

- **信頼性の高い長距離通信** 

915 MHz でのテストにおいて、MeshTracker X1 は見通しの良い環境で最大 8 km の距離で信頼性の高い通信を可能にし、アウトドアアクティビティ、イベント、緊急時にチームの接続を維持します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Dazzaristance.jpg" alt="pir" width={900} height="auto" /></p>

- **カードサイズのデザインで持ち運びやすい** 

スリムで軽量な MeshTracker X1 は、アウトドアアクティビティ中の毎日の携行に適した設計です。ネックストラップで身に着けたり、バックパックに取り付けたり、自転車バッグに固定したり、ポケットにそのまま入れて、手軽にオフグリッド接続を利用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/EasyTakingBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **柔軟なバイブレーション & サウンドアラート** 

MeshTracker X1 は、内蔵バイブレーションとブザーによる柔軟な通知オプションを提供します。騒がしいイベント会場、屋外でのライド中、あるいは静かなトレイルを歩いていてあまり邪魔されたくない場合でも、受信メッセージに気付きやすくなります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/VibraBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **IP66 の堅牢な屋外保護** 

IP66 等級の防塵・防水保護構造により、雨、泥、ほこりっぽいトレイルなど、過酷な屋外環境でも信頼性の高い動作を保証します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IP66Bazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **USB-C 接続** 
標準的な USB-C インターフェースにより、充電、ファームウェア更新、デバッグが可能で、堅牢な屋外利用と日常の利便性の両立を図っています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Type-CBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **長時間バッテリー駆動** 

高容量 1100mAh バッテリーを中心に最適化された高集積カードサイズフォームファクタにより、コンパクトで携帯性を保ちながら、屋外での携行やオフグリッド通信において最長 5 日間の連続動作を実現します。


### 仕様

**一般**

|項目|パラメータ|
| :- | :- |
|**メインコントローラ**|Nordic nRF52840|
|**無線**|Bluetooth (v5.0)|
|**LoRa**|Semtech LR2021<br/>863–928 MHz<br/>最大送信電力: 22dBm|
|**LED**|1\* RGB|
|**ブザー**|ステータス表示用ブザー 1 個|
|**ボタン**|操作用ボタン 1 個|
|**モーター**|1\* DRV2605L|
| **気圧**|範囲: 300–1100 hPa<br/>精度: ±0.03 hPa<br/>分解能: 0.06 Pa|
| **温度**<br/>(温度は気圧センサから取得)| 範囲:-40-85°C<br/>精度: ± 1°C<br/>分解能: 0.0006 °C |
|**アンテナ**|内蔵 (GNSS/LoRa/Bluetooth)|
|**通信距離**|最大 8 km|
|**IP 等級**|IP66|
|**寸法**|90\*57\*8 mm|
|**デバイス重量**|45g|
|**動作温度**|-20 ～ 60℃|
|**認証**|CE/FCC/RoHS/TELEC|

**バッテリー**

|項目|パラメータ|
| :- | :- |
|**バッテリー容量**|充電式高電圧バッテリー、1100mAh|
|**バッテリー寿命モニタリング**|バッテリーレベルを定期的にアップリンク|
|**充電プロトコル**|USB Type-C|
|**デバイス電源入力**|5V, 0.55A|
|**バッテリー電源入力**|4.4V, 0.22A|
|**満充電カットオフ電圧**|4.37V|
|**充電温度範囲**|5 ～ +45℃|

X1 は製品シリーズへと発展する可能性があり、将来発売される新しい製品モデルには、追加のセンサ（3 軸センサ、6 軸磁力計など）が搭載される予定です。

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
    <td>Sensor PWR EN</td>
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
    <td rowspan="2">気圧センサ</td>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">6 軸センサ（将来バージョン）</td>
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
    <td rowspan="3">3 軸センサ（将来バージョン）</td>
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
|2 回押す|ノード/位置情報を更新|-|
|3 回押す|GPS のオン/オフを切り替え|-|
|4 回クリック|一時的にミュート/ミュート解除|-|
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
    <td>DFU モード/ブートローダーモード</td>
  </tr>
</table>

### ハードウェア図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardwareDiagramBu.png" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardwareDiagram729.png" alt="pir" width={900} height="auto" /></p>

### リソース

[バッテリーテストレポート](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Battry_Certification.zip)

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>