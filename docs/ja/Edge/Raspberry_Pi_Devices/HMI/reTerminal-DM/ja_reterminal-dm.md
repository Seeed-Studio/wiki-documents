---
description: reTerminal DM Getting Started 
title: reTerminal DM Getting Started
keywords:
  - Edge
  - reTerminal-DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-dm
last_update:
  date: 04/23/2023
  author: Peter Pan
---
# reTerminal DM Getting Started

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DMは10.1インチのオープンソース産業用HMI - オンサイトデバイスのデータフローを統合し管理する統合デバイスマスターです。

Raspberry Pi CM4をベースとし、Panel PC、HMI、PLC、IIoTゲートウェイのオールインワンデバイスとして、reTerminal DMはIP65産業グレードの大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

豊富な拡張性とハイブリッド接続性を備え、CANバス、RS485、RS232、ギガビットイーサネットポート、その他のインターフェースをサポートし、4G、LoRa®、WiFi、BLEなどの強力なワイヤレス通信機能も備えています。

> \*4GおよびLoRa®モジュールはreTerminal DMにデフォルトで付属していません。関連モジュールを別途ご購入ください。
> [4Gバンドル](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- HMI、PLC、Panel PC、ゲートウェイが一体化：分散ハブデバイスに最適
- イベント駆動アプリケーション用のローコードプログラミング：フローベース編集とワンクリックデプロイメント用のNode-REDをネイティブ統合、Raspberry Piで動作するすべてのソフトウェアと互換性あり
- 過酷な作業環境に対応する堅牢設計：IP65フロントパネル、-10~50°C動作温度
- ハイブリッド接続性：4G LTE、LoRaWAN®、WiFi、BLE、RS485/RS232、CANバス、1000Mイーサネット、USB、HDMIをサポート
- ソフトウェアとハードウェアのオープンソース設計：Raspberry Pi CM4を搭載、カスタマイズや派生製品を歓迎
- [製品保証：2年保証](Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/reterminal-dm-warranty.md)

> \*4GおよびLoRa®モジュールはreTerminal DMにデフォルトで付属していません。関連モジュールを別途ご購入ください。

## 仕様

<div class="table-center">
  <table >
    <tbody>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>基本仕様</strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>CPU</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CM4</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>Quad-core Cortex-A72@1.5GHz</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>メモリ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>8GB</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>ストレージ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>32GB eMMC</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>M.2 SATA SSD スロット 2280-B Key（オプション）</td>
      </tr>
      <tr data-style="height: 36px;" style={{height: 36}}>
        <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>OS サポート</td>
        <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>Raspbian<br />SenseCraft Edge OS</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>ディスプレイ</strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>サイズ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10.1''</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大解像度</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1280 x 800</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大色数</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>16.7M（8ビット）</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>輝度</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>400 nit</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>視野角</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>170/170 H/V°</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>バックライト寿命</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>30000時間</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>タッチタイプ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10点静電容量式</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>鉛筆硬度</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>7H</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>ビデオ&amp;オーディオ</strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>ビデオ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>HDMI 2.0</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>オーディオ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>マイクロフォン x 2</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ブザー</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>3.5mmオーディオジャック</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>カメラ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CSI（オプション）</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>インターフェース</strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Ethernet</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（オプション）</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>USB</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 ホスト</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB 3.0（オプション）</td>
      </tr>
      <tr data-style="height: 36px;" style={{height: 36}}>
        <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS485</td>
        <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-485 &gt; ターミナルブロック<br />1 x RS-485 &gt; DB9（オプション）</td>
      </tr>
      <tr data-style="height: 36px;" style={{height: 36}}>
        <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS232</td>
        <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-232 &gt; ターミナルブロック<br />1 x RS-232 &gt; DB9 (オプション)</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>CAN</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x CAN-BUS &gt; ターミナルブロック</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DI</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DI &gt; ターミナルブロック</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DO</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DO &gt; ターミナルブロック</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>40pin GPIO</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>内部</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>ワイヤレス通信</strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>WiFi</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>オンチップWiFi</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>オンチップBLE</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>LoRa®</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>LoRaWAN®用Mini-PCIe (オプション)</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Cellular</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}><a href="https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html" target="_blank" rel="noopener">4G用Mini-PCIe (オプション)</a></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>電源</strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Input</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2ピンターミナルブロック</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>PoE</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12W PoE (オプション)</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>電源範囲</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12~24 DC</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>環境</strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>防塵防水等級</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>IP65 フロントパネル</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>動作温度</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-10~50 °C</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>保存温度</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-20~70 °C</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>湿度（動作時）</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10~90% RH</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>機械的仕様 </strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>寸法</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>259.4 x 191 x 42.2 mm</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>筐体</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ダイカストアルミニウム合金</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>取り付け方法</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>パネル、VESA、DINレール</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>重量（正味）</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1.8Kg</td>
      </tr>
      <tr>
        <td data-style="width: 98.6555%;" colSpan={2} style={{width: '98.6555%'}}><strong>認証 </strong></td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CE, FCC, RoHS, Telec, REACH</td>
      </tr>
      <tr>
        <td data-style="width: 98.6555%;" colSpan={2} style={{width: '98.6555%'}}><strong>その他</strong> </td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>RTC</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>高精度RTC</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>セキュリティ</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>保証</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2年</td>
      </tr>
      <tr data-style="height: 18px;" style={{height: 18}}>
        <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>放熱</td>
        <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ファンレス</td>
      </tr>
    </tbody>
  </table>
</div>

## ハードウェア概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/interface-overview.png" /></div>

## メインボード概要

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Mainboard.png" /></div>

## 電源図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/power-diagram.png" /></div>

reTerminal DMは2つの電源供給オプションをサポートしています：DCターミナルとPoEポート。デフォルトでは、reTerminal DMはDCターミナルを通じて電源供給されますが、**PoE電源供給はオプション**です。これにより電源供給の選択に柔軟性を提供し、様々な電源との簡単な統合を可能にします。

### 電源ターミナル

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/powerplug.png" /></div>

reTerminal DMは12~24Vの定格電圧で供給されます。電源は2ピン電源ターミナルブロックコネクタを介して接続されます。

### POE（オプション）

:::note
標準製品にはデフォルトでPoEモジュールは含まれていません。Seeedはバッチカスタマイズ注文に対してリクエストに応じてPoEはんだ付けおよび組み立てサービスを提供できます。odm@seeed.ccまでお問い合わせください。
:::

PoEモジュールが取り付けられている場合、reTerminal DMのLAN1ポートはPoE電源供給をサポートでき、イーサネット経由でデバイスに電源を供給する便利で効率的な方法を提供します。このオプションは設置プロセスを簡素化し、必要なケーブル配線量を削減するため、電源が限られているアプリケーションや電源コンセントが容易に利用できない場所での理想的なソリューションとなります。

- PoE入力：範囲44~57V；標準48V
- PoE出力：12V、1.1A最大

### 消費電力

reTerminal DMの消費電力については、Seeed Studioの実験室でテストされた以下の表を参照してください。テスト方法と環境により結果に変動が生じる可能性があるため、この値は参考値であることにご注意ください。

| 状態     | 電圧 | 電流    | 消費電力 | 説明 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|シャットダウン  |         |  0.6mA  |                   | シャットダウンおよび電源オフ状態での静的消費電力テスト。|
|アイドル      |24V      |  0.165A |    3.96W          | デフォルトのSeeed Studioシステムを実行中、テストプログラムを実行せずに、ターミナルソケットを通じてreTerminal DMデバイスに24V電源を供給した際の入力電流をテストします。|
|フル負荷 |24V      |  0.37A  |    8.88W          | "stress -c 4"コマンドを使用してCPUをフル負荷で実行するよう設定し、同時にビデオを再生してCAN & RS485通信を実行。外部デバイスは接続されていません。 |

### 電源オンと電源オフ

reTerminal DMにはデフォルトで電源ボタンが付いておらず、電源が接続されるとシステムが自動的に起動します。シャットダウンする際は、オペレーティングシステムのシャットダウンオプションを選択し、システムが完全にシャットダウンするまで待ってから電源を切断してください。システムを再起動するには、単純に電源を再接続してください。

:::note
シャットダウン後は、内部コンデンサが完全に放電されるよう、システムを再起動する前に少なくとも10秒間待ってください。
:::

## ブロック図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/block-diagram.png" /></div>

### I2Cブロック

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/i2c-block.png" /></div>

## インターフェース

### マイクロフォン

reTerminal DMには、スクリーンの下の左右に配置された2つのMEMSマイクロフォンが搭載されています。これらのマイクロフォンはデュアルマイクロフォンアレイとして構成でき、優れた音声収集機能を提供します。マイクロフォンはI2Sインターフェースを通じてオーディオコーデックチップと通信し、コーデックチップはPCMインターフェースを通じてCM4と通信します。reTerminal DM用に選択されたオーディオコーデックチップは、TI TLV320AIC3104 Low-Power Stereo Audio Codecです。

:::warning
フロントパネルのIP65等級を達成するため、マイクロフォンの開口部は防水音響膜で覆われていることに注意することが重要です。マイクロフォンの開口部に鋭利な物体で触れることは避けてください。
:::

マイクロフォンとのインターフェースについて：

デバイス上で`Terminal`アプリを開き、`arecord -l`と入力してマイクロフォンドライバを見つけてください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/arecord-device.png" /></div>

オーディオを録音するには`audacity`アプリを使用できます。`sudo apt install audacity`を使用してaudacityアプリをインストールしてください：

audacityを開いてアプリを起動し、録音をクリックして内蔵マイクロフォンからオーディオを録音してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/recording.png" /></div>

### LEDインジケータ

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/led-indicator.png" /></div>

reTerminal DMには、マシンの動作状態を示すための3つのLEDインジケータが搭載されています。各LEDの具体的な機能と状態については、以下の表を参照してください：

#### LEDピン割り当て

| ラベル | 信号     | 信号源        | 色     | 説明 |
|  ---  |  ---     |     ---       |  ---   |     ---     |
| PWR   | LED_nPWR | CM4           | 黄色   | CM4の電源供給を示すために使用されます。CM4が正常に電源オンされると、LEDが点灯します|
|USER   |          |PCA9535 - GPIO | 赤色    | ユーザー定義機能 |
|ACT    | LED_nACT |CM4            | 緑色   | システムの様々な状態を示すために使用されます。下記の表を参照してください。|

#### ACT ステータステーブル

<div class="table-center">

| 長い点滅 | 短い点滅 | ステータス |
| --- | --- | --- |
| 0 | 3 | 起動の一般的な失敗|
| 0 | 4 | start*.elf が見つかりません|
| 0 | 7 | カーネルイメージが見つかりません|
| 0 | 8 | SDRAM 障害|
| 0 | 9 | SDRAM 不足|
| 0 | 10 | HALT 状態|
| 2 | 1 | パーティションが FAT ではありません|
| 2 | 2 | パーティションからの読み取りに失敗しました |
| 2 | 3 | 拡張パーティションが FAT ではありません|
| 2 | 4 | ファイル署名/ハッシュの不一致 - Pi 4|
| 4 | 4 | サポートされていないボードタイプ|
| 4 | 5 | 致命的なファームウェアエラー|
| 4 | 6 | 電源障害タイプ A|
|4 | 7 | 電源障害タイプ B |

</div>

:::note
ACT LEDが規則的な4回点滅パターンで点滅する場合、bootcode（start.elf）が見つかりません<br/>
ACT LEDが不規則なパターンで点滅する場合、起動が開始されています<br/>
ACT LEDが点滅しない場合、EEPROMコードが破損している可能性があります。何も接続せずに再度試してください<br/>
詳細については、Raspberry Piフォーラムをご確認ください：<br/>
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums<br/>
詳細については、Raspberry Piフォーラムをご確認ください：https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151<br/>
:::

USER LEDをアクティブにするには、以下のコマンドを使用してください：

```sh
sudo -i

echo 0 > /sys/class/leds/usr-led/brightness
echo 1 > /sys/class/leds/usr-led/brightness
```

ユーザーLEDが赤色に点灯するのが確認できるはずです。

### 光センサー

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor.png" /></div>

画面の右下に位置する光センサーは、周囲の光の強度を検出し、画面の明るさを自動調整して最適な視聴体験を提供しながらエネルギーを節約する機能があります。光センサーはI2Cプロトコルを通じてCM4と通信します。

I2Cアドレスは **0x29** です。

光センサーとのインターフェースを行うには：

- **ステップ 1.** 以下のディレクトリに移動します

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **Step 2.** Type the following to obtain the light intensity value in **Lux**

```sh
cat in_illuminance_input 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor-result.png" /></div>

### ブザー

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/buzzer.png" /></div>

reTerminal DMは、画面の右下角に配置されたアクティブブザーを搭載しており、アラームやイベント通知など様々な用途に使用できます。ブザーはPCA9535 GPIO拡張ICを通じて制御され、デバイスに追加のデジタルI/Oチャンネルを提供します。

ブザーをテストして制御するには、`/sys/class/leds/usr-buzzer/brightness`ファイルに`1`または`0`を設定するだけです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/toggle_buzzer.png" /></div>

### 多機能ターミナル

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/multi-functional-terminal.png" /></div>

#### ターミナルと信号対応表

<div class="table-center">

|CANH | CANL | GND_ISO | RS485A | RS485B | GND_ISO | RS232_TX | RS232_RX| GND | GND |
|:---:| :---: | :---: | :---: | :---:    | :---: | :---: | :---: | :---: | :---:    |
|DI1| DI2 | DI3 | DI4 | GND_DI | DO1 | DO2 | DO3 | DO4 | GND_DO |

</div>

#### ターミナルピン配置表

<div class="table-center">

| Pin | Silk-screen | Signal | Description |
| --- |  ---        |  ---   | ---         |
|1 |CH| CANH     | 差動CAN信号ハイ |
|2 |CL| CANL     | 差動CAN信号ロー |
|3 |GS| GND_ISO  | 絶縁グランド信号 |
|4 |RA| RS485A   | 差動RS485信号A |
|5 |RB| RS485B   | 差動RS485信号B |
|6 |GS| GND_ISO  | 絶縁グランド信号 |
|7 |RT| RS232_TX | RS232信号送信端 |
|8 |RX| RS232_RX | RS232信号受信端 |
|9 |GD| GND     | メインボードグランド |
|10 |GD| GND    | メインボードグランド |
|11 |I1| DI1    | デジタル入力1 |
|12 |I2| DI2    | デジタル入力2 |
|13 |I3| DI3    | デジタル入力3 |
|14 |I4| DI4    | デジタル入力4 |
|15 |GI| GND_DI | 入力グランド信号、1MΩを介してGNDに接続 |
|16 |D1| DO1    | デジタル出力1 |
|17 |D2| DO2    | デジタル出力2 |
|18 |D3| DO3    | デジタル出力3 |
|19 |D4| DO4    | デジタル出力4 |
|20 |GO| GND_DO | 出力グランド信号、0Ωを介してGNDに接続 |

</div>

#### DI/DO

reTerminal DMは4つのデジタル入力と4つのデジタル出力チャンネルをサポートしており、すべて光学的に絶縁されているため、電圧スパイクやその他の電気的外乱からメインボードを効果的に保護します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DI-DO.png" /></div>

##### DI/DOピン配置表

<div class="table-center">

| ピン | CM4信号 | 標準電圧範囲 | 最大電圧 |  定格電流容量 |
| --- | ---        | ---                   | ---          | ---                     |
| DI1 | GPIO16     | 5-24V DC              | 30V DC       |                         |
| DI2 | GPIO17     | 5-24V DC              | 30V DC       |                         |
| DI3 | GPIO22     | 5-24V DC              | 30V DC       |                         |
| DI4 | GPIO23     | 5-24V DC              | 30V DC       |                         |
| GND_DI |         |                       |              |                         |
| DO1 | GPIO24     | 5-24V DC              | 30V DC       |  500mA                  |
| DO2 | GPIO25     | 5-24V DC              | 30V DC       |  500mA                  |
| DO3 | GPIO26     | 5-24V DC              | 30V DC       |  500mA                  |
| DO4 | GPIO6      | 5-24V DC              | 30V DC       |  500mA                  |
| GND_DO |         |                       |              |                         |

</div>

:::note
入力信号のグランドと出力信号のグランドは異なります。入力信号のグランドはGND_DIピンに接続し、出力信号のグランドはGND_DOピンに接続する必要があります。

reTerminal DMのデジタル入力と出力に使用される負論理では、Terminal IOとCM4 GPIO間の論理レベル関係は以下の表に示されています。

|ターミナルデジタル入力 | CM4 GPIO 検出信号 |
| ---                   | ---                    |
| Low                   | High                   |
| High                  | Low                    |

| CM4 GPIO 出力       | ターミナルデジタル出力|
| ---                   | ---                    |
| High                  | Low                    |
| Low                   | High                   |

:::

このセクションでは、`raspi-gpio`ツールを使用してGPIOをテストします。`raspi-gpio help`を使用してマニュアルを表示できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio.png" /></div>

すべてのGPIOの現在の状態を取得するには、`Terminal`で以下のコマンドを入力してください：

```sh
raspi-gpio get
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio-get.png" /></div>

###### デジタル入力

DIにセンサーを配線する方法を示した回路図は以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sensor.png" /></div>

特定のGPIOステータスを取得するには、`Terminal`で以下のコマンドを入力してください：

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state.png" /></div>

ここで、`GPIO16`の現在の状態は`INPUT`に設定され、`pulling Down`で現在のピンレベルは`1`、つまり`High`を意味し、上記の表によると現在のターミナルデジタル入力`DI1`は`Low`であることを意味します。

`DI1`に`High`信号を入力するために、`DI1`ターミナルを`5V電源`の`正極`ピンに接続し、`5V電源`の`グランド`を`GND_DI`に接続しましょう。

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state-high.png" /></div>

現在の`GPIO16`のピンレベルは`0`で、これは`Low`を意味し、上記の表によると現在のTerminal Digital Input `DI1`は`High`であることを意味します。

###### デジタル出力

以下は負荷をDOに配線する方法を示した回路図です：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DO.png" /></div>

デジタル出力の状態値を制御するには、まずピンの状態を`Output`と`pulling Down`に設定する必要があります：

```sh
#set current pin state
raspi-gpio set 24 op pd dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set.png" /></div>

`GPIO24`は`DO1`に対応し、`Output`および`pulling down`状態に設定され、`GPIO24`レベルは`High`に設定されています。

次に`GPIO24`を`Low`に設定します。これは`DO1`出力が`High`として駆動されることを意味します。

```sh
#set current pin state
raspi-gpio set 24 dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set-low.png" /></div>

#### RS485

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RS485.png" /></div>

reTerminal DMは20ピンコネクタを通じてRS485インターフェースを搭載しており、産業用および自動化アプリケーションでの安全で信頼性の高い動作を確保するため、信号と電源の両方が絶縁されています。`RS485 A`と`RS485 B`信号は容量性絶縁を使用して絶縁されており、優れたEMI耐性を提供し、RS485インターフェースの高速通信要件を満たします。

:::note
デフォルトで120Ωの終端抵抗が取り付けられています。
RS485インターフェースは絶縁電源を使用しているため、RS485インターフェースに接続される外部デバイスのグランド信号はGND_ISOピンに接続する必要があります。
:::

RS485をテストし、インターフェースするには、USBからRS485へのアダプターを準備する必要があります。接続が以下と同じであることを確認してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

:::note
RS485ポートは、実行しているOSに応じて`/dev/ttyACM1`または`/dev/ttyCH340USB1`であることに注意してください。
:::
ホストコンピューターでお気に入りのシリアル通信ツールを使用して、以下のテストを実行してください：
reTerminal DMでPythonコードを実行してRS485シリアル接続をテストします。このコードはRS485シリアルポートを以下のように設定します：

ボーレート -> 9600
バイトサイズ -> 8ビット
パリティ -> なし
ストップビット -> 1
ハードウェアフロー制御 -> 無効

```python
import serial, time
import os

ser = serial.Serial()
if os.path.exists('/dev/ttyACM1'):
    ser.port = "/dev/ttyACM1"
elif os.path.exists('/dev/ttyCH340USB1'):
    ser.port = "/dev/ttyCH340USB1"
else:
    print('Neither /dev/ttyACM1 nor /dev/ttyCH340USB1 is present')

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    #number of bits per bytes
ser.parity = serial.PARITY_NONE    #set parity check
ser.stopbits = serial.STOPBITS_ONE #number of stop bits

ser.timeout = 0.5                  #non-block read 0.5s
ser.writeTimeout = 0.5             #timeout for write 0.5s
ser.xonxoff = False                #disable software flow control
ser.rtscts = False                 #disable hardware (RTS/CTS) flow control
ser.dsrdtr = False                 #disable hardware (DSR/DTR) flow control

try:
    ser.open()
except Exception as ex:
    print ("open serial port error " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() #flush input buffer
        ser.flushOutput() #flush output buffer
        time.sleep(0.1)
        #write data
        ser.write("rs485 communication is on, you can try to send data...\n".encode())
        print("Sent successfully\n")
        time.sleep(5)  #wait 5s
        #read data
        numofline = 0
        print("Reading Data:")
        while True:
            response = ser.readline()
            print(response)
            numofline = numofline +1
            if (numofline >= 1):
                break
            ser.close()
    except Exception as e1:
        print ("communicating error " + str(e1))
else:
    print ("open serial port error")

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs485-serial-example.png" /></div>

#### RS232

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232.png" /></div>

reTerminal DMの20ピンコネクタにはRS232インターフェースも含まれており、これは絶縁されていません。RS232通信は通常CMOSの電圧レベルを使用し、通信距離が短いため、環境からの電磁干渉の影響を受けにくいためです。

:::note
グラウンドピンは`RX`ピンの隣にある`GD`ピンに接続する必要があることにご注意ください。`GS`ピンではないことを確認してください。
:::

以下は、reTerminal DMからホストコンピュータにデータを送信するテスト用のPythonスクリプトです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232-serial-send-example.png" /></div>

```python
import time
import serial
import os

if os.path.exists('/dev/ttyACM0'):
    port = "/dev/ttyACM0"
elif os.path.exists('/dev/ttyCH340USB0'):
    port = "/dev/ttyCH340USB0"
else:
    print('Neither /dev/ttyACM0 nor /dev/ttyCH340USB0 is present')

ser = serial.Serial(
port = port,
baudrate = 9600,
parity = serial.PARITY_NONE,
stopbits = serial.STOPBITS_ONE,
bytesize = serial.EIGHTBITS,
timeout = 1
)
counter=0
try:
        print("rs232 starts now!\n")
        ser.write("rs232 starts now!\n".encode())
        while 1:
                ser.write(("Write counter:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()

```

reTerminal DMがホストコンピュータから送信されたデータを受信するテスト用Pythonスクリプトは以下の通りです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232-serial-receive-example.png" /></div>

```python
import time
import serial
import os

if os.path.exists('/dev/ttyACM0'):
    port = "/dev/ttyACM0"
elif os.path.exists('/dev/ttyCH340USB0'):
    port = "/dev/ttyCH340USB0"
else:
    print('Neither /dev/ttyACM0 nor /dev/ttyCH340USB0 is present')

ser = serial.Serial(
        port=port,
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1,
        xonxoff = False,                #disable software flow control
        rtscts = False,                 #disable hardware (RTS/CTS) flow control
        dsrdtr = False
)
try:
    print("Start receiving data now!\n")
    while 1:
            x=ser.readlines()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

#### CAN

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/can.png" /></div>

reTerminal DMは、CAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを搭載しています。CANインターフェースは容量性絶縁を使用して絶縁されており、優れたEMI保護を提供し、産業用および自動化アプリケーションにおいて信頼性の高い通信を確保します。120Ωの終端抵抗がデフォルトでインストールされています。

:::note
CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号は
GND_ISOピンに接続する必要があります
:::

CANバスをテストし、インターフェースするには：
以下の画像に示すように、USB to CANアダプターを接続してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

- STEP 1: CAN-utilsをインストールする

```sh
sudo apt install can-utils
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg" /></div>

CAN-utilsは、CANインターフェースを使用した非常に有用なデバッグツールのコレクションです。以下のようなアプリケーションが含まれています：

- candump – CANパケットをダンプ – 表示、フィルタリング、ディスクへのログ記録。
- canplayer – CANログファイルの再生。
- cansend – 単一フレームの送信。
- cangen – ランダムトラフィックの生成。
- canbusload – 現在のCANバスの**使用率**を表示

CAN-utilsのソースコードは[GitHubリポジトリ](https://github.com/linux-can/can-utils)から入手できます。

- STEP 2: 以下のコマンドを使用してCANインターフェースをセットアップします：
  
```sh
sudo ip link set can0 up type can bitrate 500000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

- STEP 3: Download the testing code to reTerminal DM by using git

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple

```

- ステップ 4: データを送信するコードをコンパイルして実行します：

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit

```

Linuxホストコンピュータまたは別のreTerminal DMで、データを受信するコードをコンパイルして実行できます。

```sh
gcc canreceive.c -o canreceive
```

結果を確認できます。以下の画像は2台のreTerminal DMを使用して実行されたものです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg" /></div>

### USB

#### USB Type-A

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-a.png" /></div>

USB 2.0 Type-Aポートが2つあり、フラッシュドライブ、ウェブカメラ、キーボード、マウスなどのUSBデバイスを接続できます。

#### USB Type-C

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-c.png" /></div>

USB Type-CはUSB 2.0ポートで、ブートスイッチの位置に応じてシリアルデバッグまたはOSイメージの書き込みに使用されます。OSの書き込みについては、[OSフラッシュWikiページ](/reterminal-dm-flash-OS)を参照してください。

### SIMカードスロット

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sim-slot.png" /></div>

reTerminal DMは、産業用アプリケーションで一般的に使用される標準サイズのSIMカードスロットを使用しており、25mm x 15mmの寸法の標準SIMカードが必要です。

:::note
reTerminal DMの標準バージョンには4Gモジュールが付属していないことにご注意ください。4G機能が必要な場合は、追加の4Gモジュールを別途購入する必要があります。したがって、このSIMカードスロットは、サポートされているバージョンの4Gモジュールを4G PCIeスロットに配置した場合にのみ機能します。
:::

### リセットボタン

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/reset-button.png" /></div>

reTerminal DMのリセット穴にはミニプッシュボタンスイッチがあります。このボタンを細い物体で押すことで、CM4をリセットできます。このボタンはCM4のRUN_PGピンに接続されています。このピンがハイの時、CM4が開始されたことを示します。このピンをローにドライブするとモジュールがリセットされます。

### オーディオジャック

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-jack.png" /></div>

reTerminal DMには3.5mmヘッドフォンジャックがあり、音声出力をサポートし、外部ヘッドフォン、スピーカーなどに接続できます。

:::note
ヘッドフォンジャックは音声出力のみをサポートし、マイクロフォン録音機能はサポートしていません。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-power.png" /></div>

### HDMI

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/hdmi.png" /></div>

reTerminal DMはCM4からのネイティブHDMIインターフェースを備えており、最大4K @ 60 fpsのビデオ出力をサポートします。複数のディスプレイが必要なアプリケーションに最適で、ユーザーはコンテンツを外部の大画面に出力できます。

### イーサネットRJ45

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RJ45.png" /></div>

reTerminal DMには、10/100/1000 Mbit/sの3つの異なる速度をサポートするCM4ネイティブギガビットイーサネットインターフェースが付属しています。追加のPoEモジュールを購入することで、このインターフェースを通じてパワーオーバーイーサネット（PoE）配信を有効にし、reTerminal DMに電力を供給できます。

### 内部インターフェース

#### 40ピンGPIO

従来のRaspberry Pi 40ピンGPIO設計がreTerminal DM内部に保持されており、ピン配置はRaspberry Pi 4Bと同じです。これらのGPIOを使用するには、ユーザーは背面カバーを開く必要があります。CM4 IOのリソースが限られているため、40ピンGPIOと多くの周辺インターフェースが多重化されているため、GPIOを使用する際は競合に特に注意する必要があります。詳細なピン割り当て情報については、以下の表を参照してください。

<div class="table-center">

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-3z1b{border-color:#000000;text-align:right;vertical-align:top}\n.tg .tg-wp8o{border-color:#000000;text-align:center;vertical-align:top}\n.tg .tg-tynx{background-color:#8fc31f;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-xwyw{border-color:#000000;text-align:center;vertical-align:middle}\n.tg .tg-73oq{border-color:#000000;text-align:left;vertical-align:top}\n.tg .tg-0a7q{border-color:#000000;text-align:left;vertical-align:middle}\n.tg .tg-8o2n{border-color:#000000;text-align:right;vertical-align:middle}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-tynx">説明</th>
        <th className="tg-tynx">ピン多重化</th>
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx">ピン多重化</th>
        <th className="tg-tynx">説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-3z1b">Pin 1</td>
        <td className="tg-3z1b" />
        <td className="tg-wp8o">3V3</td>
        <td className="tg-xwyw" rowSpan={20}>40 PIN<br />GPIO</td>
        <td className="tg-wp8o">5V</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C1_SDA</td>
        <td className="tg-wp8o">GPIO 2</td>
        <td className="tg-wp8o">5V</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C1_SCL</td>
        <td className="tg-wp8o">GPIO 3</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C3_SDA</td>
        <td className="tg-wp8o">GPIO 4</td>
        <td className="tg-wp8o">GPIO 14</td>
        <td className="tg-73oq">UART0_TXD</td>
        <td className="tg-0a7q" rowSpan={2}>USB Type C</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 15</td>
        <td className="tg-73oq">UART0_RXD</td>
      </tr>
      <tr>
        <td className="tg-3z1b">ブロック端子 DI2</td>
        <td className="tg-3z1b">DI2</td>
        <td className="tg-wp8o">GPIO 17</td>
        <td className="tg-wp8o">GPIO 18</td>
        <td className="tg-73oq">PCM_CLK</td>
        <td className="tg-73oq">3.5mmオーディオジャック</td>
      </tr>
      <tr>
        <td className="tg-3z1b">画面タッチ用割り込みピン</td>
        <td className="tg-3z1b">TP_INT</td>
        <td className="tg-wp8o">GPIO 27</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">ブロック端子 DI3</td>
        <td className="tg-3z1b">DI3</td>
        <td className="tg-wp8o">GPIO 22</td>
        <td className="tg-wp8o">GPIO 23</td>
        <td className="tg-73oq">DI4</td>
        <td className="tg-73oq">ブロック端子 DI4</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">3V3<br /></td>
        <td className="tg-wp8o">GPIO 24</td>
        <td className="tg-73oq">DO1</td>
        <td className="tg-73oq">ブロック端子 DO1</td>
      </tr>
      <tr>
        <td className="tg-8o2n" rowSpan={3}>CANおよびLoRa®モジュール</td>
        <td className="tg-3z1b">SPI0_MOSI</td>
        <td className="tg-wp8o">GPIO 10</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">SPI0_MISO</td>
        <td className="tg-wp8o">GPIO 9</td>
        <td className="tg-wp8o">GPIO 25</td>
        <td className="tg-73oq">DO2</td>
        <td className="tg-73oq">ブロック端子 DO2</td>
      </tr>
      <tr>
        <td className="tg-3z1b">SPI0_SCLK</td>
        <td className="tg-wp8o">GPIO 11</td>
        <td className="tg-wp8o">GPIO 8</td>
        <td className="tg-73oq">SPI0_CE0</td>
        <td className="tg-73oq">CAN用SPIイネーブルピン</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 7</td>
        <td className="tg-73oq">SPI0_CE1</td>
        <td className="tg-73oq">LoRa®用SPIイネーブルピン</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">ID_SD</td>
        <td className="tg-wp8o">ID_SC</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C_SCL</td>
        <td className="tg-wp8o">GPIO 5</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">ブロック端子 DO4</td>
        <td className="tg-3z1b">DO4</td>
        <td className="tg-wp8o">GPIO 6</td>
        <td className="tg-wp8o">GPIO 12</td>
        <td className="tg-73oq">CAN_INT</td>
        <td className="tg-73oq">CAN用割り込みピン</td>
      </tr>
      <tr>
        <td className="tg-3z1b">LCD バックライト制御ピン</td>
        <td className="tg-3z1b">LCD_PWM</td>
        <td className="tg-wp8o">GPIO 13</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">3.5mmオーディオジャック</td>
        <td className="tg-3z1b">PCM_FS</td>
        <td className="tg-wp8o">GPIO 19</td>
        <td className="tg-wp8o">GPIO 16</td>
        <td className="tg-73oq">DI1</td>
        <td className="tg-73oq">ブロック端子 DI1</td>
      </tr>
      <tr>
        <td className="tg-3z1b">ブロック端子 DO3</td>
        <td className="tg-3z1b">DO3</td>
        <td className="tg-wp8o">GPIO 26</td>
        <td className="tg-wp8o">GPIO 20</td>
        <td className="tg-73oq">PCM_DIN</td>
        <td className="tg-73oq">3.5mmオーディオジャック</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 21</td>
        <td className="tg-73oq">PCM_DOUT</td>
        <td className="tg-73oq">3.5mmオーディオジャック</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

#### RTC

reTerminal DMは、CR2032バッテリーが事前に取り付けられたRTC回路を搭載しており、電源が失われた場合でも時刻保持機能を維持することができます。

現在のシステムクロックでハードウェアクロックを変更するには、以下のコマンドを使用してください

```sh
sudo hwclock --systohc

```

以下のコマンドを使用して、現在のハードウェアクロックでシステムクロックを変更します

```sh
sudo hwclock --hctosys

```

現在のハードウェアクロックを表示するには

```sh
sudo hwclock -r 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RTC.png" /></div>

#### ウォッチドッグ

reTerminal DMには、システムの異常クラッシュが発生した場合に自動的にシステムを再起動する独立したハードウェアウォッチドッグ回路が搭載されています。ウォッチドッグ回路はRTCを通じて実装されており、1秒から255秒までの柔軟な給餌時間を可能にします。

watchdog.confでウォッチドッグタイムアウト時間を設定するには、以下の手順に従ってください：

STEP 1: 通常/etc/watchdog.confにあるwatchdog.confファイルを編集用に開きます。

```sh
sudo nano /etc/watchdog.conf
```

STEP 2: `/etc/watchdog.conf` の下にある "watchdog-device" と "watchdog-timeout" 設定オプションを探し、以下のように設定してください。

:::note
`watchdog-timeout` オプションが `60` 未満に設定されている場合、即座に再起動が発生する可能性があります。ハードウェアウォッチドッグを利用するには、`watchdog-device` を `/dev/watchdog1` として設定する必要があります。`1` のないデフォルト設定では Broadcom ウォッチドッグデバイスを利用しています。
:::

```sh

# Uncomment this to use the watchdog device driver access "file".

watchdog-device  = /dev/watchdog1

# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.

watchdog-timeout = 60


```

例えば、ウォッチドッグのタイムアウト時間を60秒に設定したい場合、`watchdog-timeout`の値を`60`に設定できます。これは、ウォッチドッグが60秒以内にリセット信号を受信しない場合、システムがクラッシュしたと仮定して自動再起動操作をトリガーすることを意味します。

:::warning
以下のコマンドでウォッチドッグがアクティブかどうかをテストできますが、これらのコマンドはシステムを停止状態にするため、以下のコマンドを実行する際は十分注意してください：

```sh
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

これで、設定したwatchdog-timeoutの時間後にreTerminal DMが再起動されるはずです
:::

#### バックライト

バックライトには6段階の明度を設定できます。0はオフ、5は最大輝度です。
以下のコマンドを使用して明度を制御できます。

```sh
sudo -i

echo 0 > /sys/class/backlight/lcd_backlight/brightness
echo 1 > /sys/class/backlight/lcd_backlight/brightness
echo 5 > /sys/class/backlight/lcd_backlight/brightness
```

## 内部アドオン

### カメラ

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Camera.png" /></div>

reTerminal DMメインボードにはCSIカメラインターフェースが予約されており、カメラ機能をサポートするようにカスタマイズできます。フロントパネルのスペースが限られているため、小型サイズのカメラのみ使用可能であることにご注意ください。現在厳密にテストされたソリューションでは、Raspberry Pi camera V2.0ドライバーボード + Seedカスタマイズカメラ IMX219-77を使用しています。

<div class="table-center">

| コネクタ | コネクタタイプ | ピンピッチ | レーン | FPC方向 |
|  ---      |  ---           |   ---     |  --- | --- |
| CSI0      | 15ピンFPC     | 1mm       | 2    | ゴールドフィンガーが下向き |
| CSI1      | 22ピンFPC     | 0.5mm     | 4    | ゴールドフィンガーが上向き |

</div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/camera_version.png" /></div>

:::note
標準版のreTerminal DMはフロントパネルにカメラ開口部がないため、標準製品ではカメラ機能は利用できませんのでご注意ください。カスタマイズされたカメラ要件がある場合は、odm@seeed.ccまでお問い合わせください。
:::

### 4Gモジュール

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

**必要な材料**

- reTerminal DM x 1
- EC25-EUX 4Gモジュール x1
- SIMカード x1

**ステップ1.** [EC25 4Gモジュールハードウェア組み立て](/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna)ガイドを参照して、`EC25 4Gモジュール`を*`4G/LTE`*のシルクスクリーンが表示されている`4G/LTE PCIeスロット`に取り付け、システムの電源を入れる前に4G対応のSIMカードを[SIMカードスロット](/reterminal-dm/#sim-card-slot)に挿入してください。

**ステップ2.** ```lsusb```を使用してEC25-EUXが検出されるかどうかを確認します

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ 3.** シリアル通信ツール minicom をインストールします。

```sh
sudo apt install minicom
```

**ステップ4.** minicomを通じてEC25-EUX 4Gモジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、ATと入力して'Enter'を押すと、OKが表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ 5.** 4Gモジュールを有効にして4Gネットワークに接続する

同じminicomシリアルウィンドウで以下を入力してください：

```sh
AT+QCFG="usbnet"
```

以下のような結果が返されます ```+QCFG: "usbnet",0,``` が、これを1（ECMモード）に設定する必要があるため、以下のコマンドを入力してください：

```sh
AT+QCFG="usbnet",1
```

次に、以下のコマンドを入力してモデムを強制的に再起動します：

```sh
AT+CFUN=1,1
```

その後、モジュールがSIMカードキャリアからインターネットを取得するまで、再起動するか、しばらく待つことができます。

また、`ifconfig`コマンドを使用してreTerminal DMのネットワーク状態を照会することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### LoraWAN® モジュール

:::note
reTerminal DMはWM1302 LoraWAN® モジュールのUSBバージョンとSPIバージョンの両方をサポートしていますが、USBバージョンは4GモジュールのためのMini PCIeを利用する必要があります。つまり、4GモジュールとLoraWAN® モジュールの両方を使用したい場合は、WM1302 LoraWAN® モジュールのSPIバージョンを選択してください。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

**ステップ1.** [LoraWAN® モジュールハードウェア組み立て](/reterminal-dm-hardware-guide/#assembly-lora-module-and-antenna)ガイドを参照して、`WM1302 SPI LoraWAN® モジュール`を*`Lora`*シルクスクリーンが表示されている`LoraWAN® Mini PCIeスロット`にインストールしてください。
モジュールをインストールして、必要なパッケージbuild-essential（build essentialパッケージは、ソースコードからDEBパッケージを作成するために必要なツールを含むDebianパッケージです。）をインストールします。

```sh
sudo apt update
sudo apt install git
sudo apt-get install build-essential
```

**Step 2.** コマンドラインで `sudo raspi-config` と入力してRaspberry Pi Software Configuration Toolを開きます：

- Interface Optionsを選択
- SPIを選択し、**Yes**を選択して有効にします
- I2Cを選択し、**Yes**を選択して有効にします
- Serial Portを選択し、"Would you like a login shell..."に対して**No**を選択し、"Would you like the serial port hardware..."に対して**Yes**を選択します

この後、これらの設定が動作することを確認するためにRaspberry Piを再起動してください。

**Step 3.** [WM1302コード](https://github.com/Lora-net/sx1302_hal)をreTerminalにダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ4.** reset_lgw.shスクリプトをコピーする

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**ステップ 5.** `global_conf.json.sx1250.US915` 設定ファイル内の LoraWAN® モジュールのデフォルト `SPI` ポートを置き換えます：

```sh
sed -i 's/spidev0.0/spidev0.1/g'  global_conf.json.sx1250.US915
```

**ステップ 6.** LoraWAN® モジュールを開始する

次に、お使いの WM1302 動作周波数バージョンに応じて、以下のコードを実行してLoraWAN® モジュールを開始します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

お好みのLoRa®ネットワークサーバーを選択し、上記画像に示されている`EUI ID`を使用して接続を設定してください。

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

**ステップ1.** [LoRaWAN®モジュールハードウェア組み立て](/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna)ガイドを参照して、`WM1302 USB LoRaWAN®モジュール`を*`4G`*のシルクスクリーンが表示されている`4G Mini PCIeスロット`に取り付けてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/dmlora.png"/></div>

**ステップ2.** コマンドラインで`sudo raspi-config`と入力してRaspberry Piソフトウェア設定ツールを開きます：

- Interface Optionsを選択
- I2Cを選択し、**Yes**を選択して有効にします
- Serial Portを選択し、「Would you like a login shell...」に対して**No**を選択し、「Would you like the serial port hardware...」に対して**Yes**を選択します

この後、これらの設定が動作することを確認するためにRaspberry Piを再起動してください。

**ステップ3.** [WM1302コード](https://github.com/Lora-net/sx1302_hal)をreTerminalにダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ4.** reset_lgw.shスクリプトをコピーする

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Step 5.** `global_conf.json.sx1250.US915.USB` 設定ファイル内のLoraWAN®モジュールのUSBポートを置き換えます：

**Step 5-1.**
まず、特定のUSBポートを取得するために、以下の手順に従ってください：

```sh
lsusb
```

私の場合、WM1302 は `STMicroelectronics Virtual COM Port` を使用しているため、プロダクト ID `5740` を取得できます

**ステップ 5-2.**
次に、プロダクト ID 番号 `5740` を持つ USB デバイスを取得します。この場合、USB ポート番号 `1-1.4.1` を取得します：

```sh
sudo dmesg | grep 5740
# Load ACM module
sudo modprobe cdc_acm
```

その後、以下のようにデバイスポートを取得できます：

```sh
sudo dmesg | grep 1-1.4.1
```

私の場合、USBデバイスは `ttyACM2` です

それでは、sedコマンド `sed -i 's/search_string/replacement_string/g' filename` を使用して `global_conf.json.sx1250.US915.USB` 設定のUSBデバイスを変更しましょう。パターンは `sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB` に従ってください。`the_result_from_above` と `frequency_of_your_module` をあなた自身のアプリケーション用に置き換えることに注意してください：

例えば私の場合：

```sh
sed -i 's/ttyACM0/ttyACM2/g'  global_conf.json.sx1250.US915.USB
```

以下の画像に示されている手順を参照してください：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/find-lora-usb.png"/></div>

**ステップ 6.** LoraWAN® モジュールを開始する

次に、お使いの WM1302 動作周波数バージョンに応じて、以下のコードを実行してLoraWAN® モジュールを開始してください。

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-usb.png"/></div>

お好みのLora®ネットワークサーバーを選択し、上記の画像に示されている`EUI ID`を使用して接続を設定してください。

</TabItem>
</Tabs>

<!-- Code END -->

### PCIe拡張カード

reTerminal DMは、CM4から派生したPCIeインターフェースを搭載しており、PCIe 2.0をサポートし、理論上最大5Gbpsの伝送速度を提供します。これにより、ギガビットイーサネットやNVMe SSDなどの様々な高速インターフェースの拡張が可能になります。私たちは、異なるシナリオ要件を満たすために、PCIe、USB、I2Cインターフェースに基づく複数の拡張カードを開発しました。これにより、カスタマイズのニーズにも対応できます。

:::note
標準製品にはデフォルトでPCIe拡張カードは含まれていませんのでご注意ください。Seedは、バッチカスタマイズ注文に対して組み立てサービスを提供できます。
:::

### POE

reTerminal DMは、PoE電源モジュールを追加することで、IEEE 802.3af PD（受電デバイス）標準をサポートできます。

:::note
reTerminal DMはPoE電源をサポートしていますが、標準製品にはデフォルトでPoEモジュールは含まれていません。Seedは、バッチカスタマイズ注文に対してPoEはんだ付けおよび組み立てサービスを提供できます。ただし、お客様がサンプルをテストする場合は、PoEモジュールを自分ではんだ付けして組み立てる必要があります。
:::

### SSD

reTerminal DMは、PCIe拡張カードを使用することで2280 NVMe SSDをサポートします。CM4のPCIeはgen2.0で、理論上の最大速度は5Gbpsであることに注意することが重要です。Gen3.0以上のSSDを使用している場合、SSDの最大速度を達成できない可能性があります。テスト後、SSDを搭載したreTerminal DMは、最大書き込み速度210MB/s、最大読み取り速度360MB/sを達成できます。どのSSDが互換性があるか不明な場合は、SeedのオフィシャルWebサイトから112990247、512GB NVMe M.2 PCle Gen3x4 2280 SSDを購入できます。

:::note
reTerminal DMの標準バージョンはSSDをサポートしておらず、この機能を有効にするにはPCIe拡張カードの購入が必要です。
:::

## 追加リソース

- [reTerminal DMデータシート](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
- [reTerminal DMユーザーマニュアル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)
- [reTerminal DM回路図設計・PCB設計・ガーバーファイル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal_DM_schematic_design_files.zip)
- [reTerminal DM構造設計ファイル.stp](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
