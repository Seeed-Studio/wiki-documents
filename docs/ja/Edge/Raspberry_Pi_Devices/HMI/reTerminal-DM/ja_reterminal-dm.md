---
description: reTerminal DM 入門ガイド
title: reTerminal DM 入門ガイド
keywords:
  - Edge
  - reTerminal-DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-dm
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM は、10.1インチのオープンソース産業用HMIであり、データフローを統合し、現場のデバイスを管理する統合デバイスマスターです。

Raspberry Pi CM4をベースにしたパネルPC、HMI、PLC、IIoTゲートウェイを一体化したデバイスとして、reTerminal DM はIP65産業用グレードの大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

CANバス、RS485、RS232、ギガビットイーサネットポートなどのインターフェースをサポートし、4G、LoRa®、WiFi、BLEなどの強力な無線通信機能を備えた豊富な拡張性とハイブリッド接続性を提供します。

> \*4GおよびLoRa®モジュールはreTerminal DMにデフォルトでは付属していません。該当するモジュールを別途購入してください。
> [4Gバンドル](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

* HMI、PLC、パネルPC、ゲートウェイを一体化：分散型ハブデバイスに最適
* イベント駆動型アプリケーションのためのローコードプログラミング：Node-REDをネイティブ統合し、フロー編集とワンクリックデプロイメントを実現。Raspberry Pi上で動作するすべてのソフトウェアと互換性あり
* 過酷な作業環境向けの堅牢な設計：IP65フロントパネル、-10~50°Cの動作温度
* ハイブリッド接続性：4G LTE、LoRaWAN®、WiFi、BLE、RS485/RS232、CANバス、1000Mイーサネット、USB、HDMIをサポート
* ソフトウェアとハードウェアのオープンソース設計：Raspberry Pi CM4を搭載し、カスタマイズや派生品を歓迎
* [製品保証：2年間の保証](Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/reterminal-dm-warranty.md)

> \*4GおよびLoRa®モジュールはreTerminal DMにデフォルトでは付属していません。該当するモジュールを別途購入してください。

## 仕様

<div class="table-center">

<table>
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>基本情報</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CM4</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>クアッドコア Cortex-A72@1.5GHz</td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>M.2 SATA SSD スロット 2280-B キー (オプション)</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>OSサポート</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>Raspbian<br />SenseCraft Edge OS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>ディスプレイ</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>サイズ</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10.1インチ</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大解像度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1280 x 800</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大色数</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>16.7M (8ビット)</td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10ポイント静電容量式</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>鉛筆硬度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>7H</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>ビデオ＆オーディオ</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>ビデオ</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>オーディオ</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>マイク x 2</td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CSI (オプション)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>インターフェース</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>イーサネット</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps (オプション)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 ホスト</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB 3.0 (オプション)</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-485 &gt; ターミナルブロック<br />1 x RS-485 &gt; DB9 (オプション)</td>
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
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>40ピンGPIO</td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>Mini-PCIe for LoRaWAN® (オプション)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>セルラー</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}><a href="https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html" target="_blank" rel="noopener">Mini-PCIe for 4G (オプション)</a></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>電源</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>入力</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2ピンターミナルブロック</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>PoE</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12W PoE (オプション)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>電力範囲</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12~24 DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>環境</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>防水性能</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>IP65 フロントパネル</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>動作温度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-10~50 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>保管温度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-20~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>湿度 (動作時)</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10~90% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>機械的仕様</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>寸法</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>259.4 x 191 x 42.2 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>筐体</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ダイキャストアルミニウム合金</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>取り付け方法</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>パネル、VESA、DINレール</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>重量 (正味)</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1.8Kg</td>
    </tr>
    <tr>
      <td data-style="width: 98.6555%;" colSpan={2} style={{width: '98.6555%'}}><strong>認証</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CE、FCC、RoHS、Telec、REACH</td>
    </tr>
    <tr>
      <td data-style="width: 98.6555%;" colSpan={2} style={{width: '98.6555%'}}><strong>その他</strong></td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2年間</td>
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

reTerminal DM は、DC 端子と PoE ポートの2つの電源供給オプションをサポートしています。デフォルトでは、reTerminal DM は DC 端子を通じて電源供給されますが、**PoE 電源供給はオプション**です。これにより、電源供給の選択に柔軟性が生まれ、さまざまな電源ソースとの統合が容易になります。

### 電源端子

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/powerplug.png" /></div>

reTerminal DM は、12～24 V の公称電圧で供給されます。電源は 2 ピンの電源端子ブロックコネクタを介して接続されます。

### PoE（オプション）

:::note
標準製品にはデフォルトで PoE モジュールは含まれていません。Seeed は、バッチカスタマイズ注文に応じて PoE のはんだ付けおよび組み立てサービスを提供できます。詳細は odm@seeed.cc にお問い合わせください。
:::

PoE モジュールがインストールされている場合、reTerminal DM の LAN1 ポートは PoE 電源供給をサポートします。これにより、イーサネット経由でデバイスに電力を供給する便利で効率的な方法が提供されます。このオプションは、設置プロセスを簡素化し、必要な配線量を削減するため、電源が限られているアプリケーションや電源コンセントが容易に利用できない場所に最適なソリューションです。
* PoE 入力: 範囲 44～57V; 標準 48V
* PoE 出力: 12V, 最大 1.1A

### 消費電力

以下の表は、Seeed Studio のラボでテストされた reTerminal DM の消費電力を示しています。この値は参考値であり、テスト方法や環境によって結果が異なる場合がありますのでご注意ください。

| 状態       | 電圧   | 電流    | 消費電力         | 説明 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
| シャットダウン |         |  0.6mA  |                   | シャットダウンおよび電源オフ状態での静的消費電力テスト。|
| アイドル    |24V      |  0.165A |    3.96W          | デフォルトの Seeed Studio システムを実行中で、テストプログラムを実行していない状態で、ターミナルソケットを通じて reTerminal DM デバイスに 24V 電源を供給した際の入力電流をテスト。|
| フルロード  |24V      |  0.37A  |    8.88W          | "stress -c 4" コマンドを使用して CPU をフルロードで動作させ、ビデオ再生および CAN & RS485 通信を実行。外部デバイスは接続されていない状態。|

### 電源オンと電源オフ

reTerminal DM にはデフォルトで電源ボタンが付属しておらず、電源が接続されるとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステムのシャットダウンオプションを選択し、システムが完全にシャットダウンするのを待ってから電源を切断してください。システムを再起動するには、電源を再接続するだけです。

:::note
シャットダウン後、内部コンデンサが完全に放電するのを待つために、再起動する前に少なくとも 10 秒間待機してください。
:::

## ブロック図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/block-diagram.png" /></div>

### I2Cブロック

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/i2c-block.png" /></div>

## インターフェース 

### マイク

reTerminal DMには、画面下部の左右に2つのMEMSマイクが搭載されています。これらのマイクはデュアルマイクアレイとして構成可能で、優れた音声収音能力を提供します。マイクはI2Sインターフェースを介してオーディオコーデックチップと通信し、コーデックチップはPCMインターフェースを介してCM4と通信します。reTerminal DMに採用されているオーディオコーデックチップは、TI TLV320AIC3104低消費電力ステレオオーディオコーデックです。

:::warning
フロントパネルのIP65等級を達成するために、マイクの開口部は防水音響膜で覆われています。鋭利な物でマイクの開口部に触れないようにしてください。
:::

マイクとインターフェースするには：

デバイス上で`Terminal`アプリを開き、`arecord -l`を入力してマイクドライバを確認してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/arecord-device.png" /></div>

音声を録音するには、`audacity`アプリを使用します。`sudo apt install audacity`を使用してaudacityアプリをインストールしてください。

audacityを開き、アプリを起動して録音ボタンをクリックすると、内蔵マイクから音声を録音できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/recording.png" /></div>

### LEDインジケータ

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/led-indicator.png" /></div>

reTerminal DMには、機械の動作状態を示す3つのLEDインジケータが搭載されています。それぞれのLEDの具体的な機能と状態については、以下の表を参照してください：

#### LEDピン割り当て
| ラベル | 信号   | 信号ソース | 色  | 説明 |
|  ---  |  ---     |     ---       |  ---   |     ---     |
| PWR   | LED_nPWR | CM4           | 黄色 | CM4の電源供給を示します。CM4が正常に電源オンされると、LEDが点灯します |
|USER   |          |PCA9535 - GPIO | 赤    | ユーザー定義の機能 |
|ACT    | LED_nACT |CM4            | 緑    | システムのさまざまな状態を示します。以下の表を参照してください。|

#### ACTステータステーブル

<div class="table-center">

| 長い点滅 | 短い点滅 | 状態 |
| --- | --- | --- |
| 0 | 3 | 起動失敗（一般的なエラー）|
| 0 | 4 | start*.elfが見つかりません|
| 0 | 7 | カーネルイメージが見つかりません|
| 0 | 8 | SDRAMエラー|
| 0 | 9 | SDRAM不足|
| 0 | 10 | HALT状態|
| 2 | 1 | パーティションがFATではありません|
| 2 | 2 | パーティションからの読み取り失敗 |
| 2 | 3 | 拡張パーティションがFATではありません|
| 2 | 4 | ファイル署名/ハッシュ不一致 - Pi 4|
| 4 | 4 | サポートされていないボードタイプ|
| 4 | 5 | 致命的なファームウェアエラー|
| 4 | 6 | 電源障害タイプA|
|4 | 7 | 電源障害タイプB |

</div>

:::note
ACT LEDが規則的な4回点滅パターンの場合、bootcode（start.elf）が見つかりません。<br/>
ACT LEDが不規則なパターンで点滅する場合、起動が開始されています。<br/>
ACT LEDが点滅しない場合、EEPROMコードが破損している可能性があります。何も接続せずに再試行してください。<br/>
詳細についてはRaspberry Piフォーラムを参照してください：<br/>
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums<br/>
詳細についてはRaspberry Piフォーラムを参照してください：https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151<br/>
:::

USER LEDをアクティブにするには、以下のコマンドを使用してください：

```sh
sudo -i

echo 0 > /sys/class/leds/usr-led/brightness
echo 1 > /sys/class/leds/usr-led/brightness
```
赤色でUSER LEDが点灯するのが確認できます。

### 光センサー

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor.png" /></div>

画面右下に配置された光センサーは、周囲の光強度を検出し、画面の明るさを自動的に調整して、最適な視聴体験を提供しながらエネルギーを節約します。光センサーはI2Cプロトコルを介してCM4と通信します。

I2Cアドレスは**0x29**です。

光センサーとインターフェースするには：

- **ステップ1.** 以下のディレクトリに移動します

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **ステップ2.** 以下を入力して、**Lux**単位で光強度の値を取得します

```sh
cat in_illuminance_input 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor-result.png" /></div>


### ブザー

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/buzzer.png" /></div>

reTerminal DMには、画面右下に配置されたアクティブブザーが搭載されており、アラームやイベント通知などのさまざまな用途に使用できます。ブザーは、デバイスに追加のデジタルI/Oチャネルを提供するPCA9535 GPIO拡張ICを介して制御されます。

ブザーをテストおよび制御するには、`/sys/class/leds/usr-buzzer/brightness`ファイルに`1`または`0`を設定します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/toggle_buzzer.png" /></div>

### 多機能端子

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/multi-functional-terminal.png" /></div>

#### 端子と信号の比較表
<div class="table-center">

|CANH | CANL | GND_ISO | RS485A | RS485B | GND_ISO | RS232_TX | RS232_RX| GND | GND |
|:---:| :---: | :---: | :---: | :---:    | :---: | :---: | :---: | :---: | :---:    |
|DI1| DI2 | DI3 | DI4 | GND_DI | DO1 | DO2 | DO3 | DO4 | GND_DO |

</div>

#### 端子ピン割り当て表

<div class="table-center">

| ピン | シルクスクリーン | 信号 | 説明 |
| --- |  ---        |  ---   | ---         |
|1 |CH| CANH     | 差動CAN信号高 |
|2 |CL| CANL     | 差動CAN信号低 |
|3 |GS| GND_ISO  | アイソレートされたグランド信号 |
|4 |RA| RS485A   | 差動RS485信号A |
|5 |RB| RS485B   | 差動RS485信号B |
|6 |GS| GND_ISO  | アイソレートされたグランド信号 |
|7 |RT| RS232_TX | RS232信号送信端 |
|8 |RX| RS232_RX | RS232信号受信端 |
|9 |GD| GND     | メインボードグランド |
|10 |GD| GND    | メインボードグランド |
|11 |I1| DI1    | デジタル入力1 |
|12 |I2| DI2    | デジタル入力2 |
|13 |I3| DI3    | デジタル入力3 |
|14 |I4| DI4    | デジタル入力4 |
|15 |GI| GND_DI | 入力グランド信号、1MΩでGNDに接続 |
|16 |D1| DO1    | デジタル出力1 |
|17 |D2| DO2    | デジタル出力2 |
|18 |D3| DO3    | デジタル出力3 |
|19 |D4| DO4    | デジタル出力4 |
|20 |GO| GND_DO | 出力グランド信号、0ΩでGNDに接続 |

</div>

#### DI/DO

reTerminal DM は、4つのデジタル入力チャネルと4つのデジタル出力チャネルをサポートしており、すべて光学的に絶縁されているため、メインボードを電圧スパイクやその他の電気的障害から効果的に保護します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DI-DO.png" /></div>

##### DI/DO ピン割り当て表

<div class="table-center">

| ピン | CM4 信号 | 標準電圧範囲 | 最大電圧 | 定格電流容量 |
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
入力信号用のグラウンドは出力信号用のグラウンドとは異なります。入力信号用のグラウンドは GND_DI ピンに接続し、出力信号用のグラウンドは GND_DO ピンに接続してください。

reTerminal DM のデジタル入力および出力には負論理が使用されており、ターミナル IO と CM4 GPIO の論理レベルの関係は以下の表に示されています。

| ターミナルデジタル入力 | CM4 GPIO 検出信号 |
| ---                   | ---                    |
| Low                   | High                   |
| High                  | Low                    |

| CM4 GPIO 出力       | ターミナルデジタル出力 |
| ---                   | ---                    |
| High                  | Low                    |
| Low                   | High                   |
:::

このセクションでは、`raspi-gpio` ツールを使用して GPIO をテストします。`raspi-gpio help` を使用してマニュアルを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio.png" /></div>

すべての GPIO の現在の状態を取得するには、`Terminal` に以下のコマンドを入力してください。

```sh
raspi-gpio get
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio-get.png" /></div>

###### デジタル入力

センサーを DI に配線する方法を示す回路図は以下の通りです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sensor.png" /></div>

特定の GPIO 状態を取得するには、`Terminal` に以下のコマンドを入力してください。

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state.png" /></div>

ここで、`GPIO16` の現在の状態は `INPUT` に設定されており、`pulling Down` されています。現在のピンレベルは `1` で、これは `High` を意味し、上記の表に従って現在のターミナルデジタル入力 `DI1` は `Low` を意味します。

次に、`DI1` に `High` 信号を入力するために、`DI1` ターミナルを `5V ソース` の `Positive` ピンに接続し、`5V ソース` の `Ground` を `GND_DI` に接続します。

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state-high.png" /></div>

ここで、`GPIO16` の現在のピンレベルは `0` で、これは `Low` を意味し、上記の表に従って現在のターミナルデジタル入力 `DI1` は `High` を意味します。

###### デジタル出力

負荷を DO に配線する方法を示す回路図は以下の通りです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DO.png" /></div>

デジタル出力状態値を制御するには、まずピン状態を `Output` と `pulling Down` に設定する必要があります。

```sh
# 現在のピン状態を設定
raspi-gpio set 24 op pd dh

# 設定後のピン状態を取得
raspi-gpio get 24

```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set.png" /></div>

ここで、`GPIO24` は `DO1` に対応しており、`Output` と `pulling down` 状態に設定され、`GPIO24` レベルは `High` に設定されています。

次に、`GPIO24` を `Low` に設定します。これは `DO1` 出力が `High` として駆動されることを意味します。

```sh
# 現在のピン状態を設定
raspi-gpio set 24 dh

# 設定後のピン状態を取得
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set-low.png" /></div>

#### RS485

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RS485.png" /></div>

reTerminal DM は、20ピンコネクタを介して RS485 インターフェースを備えており、信号と電源の両方が絶縁されているため、産業および自動化アプリケーションで安全で信頼性の高い動作を保証します。`RS485 A` および `RS485 B` 信号は容量性絶縁を使用して絶縁されており、優れた EMI 耐性を提供し、RS485 インターフェースの高速通信要件を満たします。

:::note
120Ω の終端抵抗がデフォルトで取り付けられています。
RS485 インターフェースは絶縁電源を使用しているため、RS485 インターフェースに接続される外部デバイスのグラウンド信号は GND_ISO ピンに接続する必要があります。
:::

RS485 をテストしてインターフェースするには、USB から RS485 へのアダプタを準備し、以下のように接続が同じであることを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

:::note
RS485 ポートは、使用している OS に応じて `/dev/ttyACM1` または `/dev/ttyCH340USB1` になります。
:::
以下のテストを実行するには、ホストコンピュータでお気に入りのシリアル通信ツールを使用してください。
reTerminal DM 上で Python コードを実行して RS485 シリアル接続をテストします。このコードでは、RS485 シリアルポートを以下のように設定します。

ボーレート -> 9600  
データサイズ -> 8 ビット  
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
    print('どちらも存在しません: /dev/ttyACM1 または /dev/ttyCH340USB1')

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    # 1バイトあたりのビット数
ser.parity = serial.PARITY_NONE    # パリティチェックを設定
ser.stopbits = serial.STOPBITS_ONE # ストップビットの数

ser.timeout = 0.5                  # 非ブロック読み取り 0.5秒
ser.writeTimeout = 0.5             # 書き込みタイムアウト 0.5秒
ser.xonxoff = False                # ソフトウェアフロー制御を無効化
ser.rtscts = False                 # ハードウェア (RTS/CTS) フロー制御を無効化
ser.dsrdtr = False                 # ハードウェア (DSR/DTR) フロー制御を無効化

try:
    ser.open()
except Exception as ex:
    print ("シリアルポートを開く際のエラー: " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() # 入力バッファをフラッシュ
        ser.flushOutput() # 出力バッファをフラッシュ
        time.sleep(0.1)
        # データを書き込む
        ser.write("RS485通信が開始されました。データ送信を試してください...\n".encode())
        print("送信成功\n")
        time.sleep(5)  # 5秒待機
        # データを読み取る
        numofline = 0
        print("データを読み取り中:")
        while True:
            response = ser.readline()
            print(response)
            numofline = numofline + 1
            if (numofline >= 1):
                break
            ser.close()
    except Exception as e1:
        print ("通信エラー: " + str(e1))
else:
    print ("シリアルポートを開く際のエラー")

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs485-serial-example.png" /></div>

#### RS232

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232.png" /></div>

reTerminal DM の 20ピンコネクタには、RS232インターフェースも含まれています。このインターフェースは絶縁されていません。RS232通信は通常、CMOS電圧レベルを使用し、通信距離が短いため、環境からの電磁干渉を受けにくいです。

:::note
グランドピンは `RX` ピンの隣にある `GD` ピンに接続する必要があります。`GS` ピンではないことを確認してください。
:::

以下は reTerminal DM からホストコンピュータにデータを送信するテスト用Pythonスクリプトです:

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
    print('どちらも存在しません: /dev/ttyACM0 または /dev/ttyCH340USB0')

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
        print("RS232が開始されました！\n")
        ser.write("RS232が開始されました！\n".encode())
        while 1:
                ser.write(("カウンター値を書き込み中: {}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()

```

以下はホストコンピュータから reTerminal DM に送信されたデータを受信するテスト用Pythonスクリプトです:

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
    print('どちらも存在しません: /dev/ttyACM0 または /dev/ttyCH340USB0')

ser = serial.Serial(
        port=port,
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1,
        xonxoff = False,                # ソフトウェアフロー制御を無効化
        rtscts = False,                 # ハードウェア (RTS/CTS) フロー制御を無効化
        dsrdtr = False
)
try:
    print("データ受信を開始します！\n")
    while 1:
            x=ser.readlines()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

#### CAN

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/can.png" /></div>

reTerminal DM は CAN FD (Controller Area Network Flexible Data-Rate) プロトコルをサポートするCANインターフェースを備えています。このCANインターフェースは容量性絶縁を使用しており、優れたEMI保護を提供し、産業および自動化アプリケーションで信頼性の高い通信を保証します。120Ωの終端抵抗がデフォルトでインストールされています。

:::note
CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号は `GND_ISO` ピンに接続する必要があります。
:::

CANバスをテストおよびインターフェースするには、以下の画像のようにUSB to CANアダプタを接続してください:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

- ステップ1: CAN-utils をインストールします
 
```sh
sudo apt install can-utils
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg" /></div>

CAN-utils は CANインターフェースを使用した非常に便利なデバッグツールのコレクションです。以下のアプリケーションが含まれています:

* candump – CANパケットをダンプし、表示、フィルタリング、ディスクへのログ記録を行う。
* canplayer – CANログファイルを再生する。
* cansend – 単一フレームを送信する。
* cangen – ランダムなトラフィックを生成する。
* canbusload – 現在のCANバスの**利用率**を表示する。

CAN-utils のソースコードは [GitHubリポジトリ](https://github.com/linux-can/can-utils) から取得できます。

- ステップ2: 以下のコマンドを使用してCANインターフェースを設定します:
  
```sh
sudo ip link set can0 up type can bitrate 500000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

- STEP 3: reTerminal DM にテストコードをダウンロードするには、git を使用します。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

- STEP 4: データを送信するコードをコンパイルして実行します。

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

Linux ホストコンピュータまたは別の reTerminal DM 上で、データを受信するコードをコンパイルして実行できます。

```sh
gcc canreceive.c -o canreceive
```

結果を確認できます。以下の画像は、2つの reTerminal DM を使用して実行した例です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg" /></div>

### USB

#### USB Type-A

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-a.png" /></div>

USB 2.0 Type-A ポートが2つあり、フラッシュドライブ、ウェブカメラ、キーボード、マウスなどのUSBデバイスを接続できます。

#### USB Type-C

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-c.png" /></div>

USB Type-C は USB 2.0 ポートで、シリアルデバッグまたは OS イメージのフラッシュに使用されます（ブートスイッチの位置に依存します）。OS のフラッシュについては、[Flashing OS Wiki ページ](/ja/reterminal-dm-flash-OS) を参照してください。

### SIMカードスロット

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sim-slot.png" /></div>

reTerminal DM は、産業用途で一般的に使用される標準サイズの SIM カードスロットを採用しており、25mm x 15mm の標準 SIM カードが必要です。

:::note
標準バージョンの reTerminal DM には 4G モジュールが付属していません。4G 機能が必要な場合は、追加の 4G モジュールを別途購入する必要があります。そのため、この SIM カードスロットは、4G PCIe スロットに対応するバージョンの 4G モジュールを設置した場合にのみ動作します。
:::

### リセットボタン

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/reset-button.png" /></div>

reTerminal DM のリセットホールにはミニプッシュボタンスイッチがあります。このボタンを細い物で押すことで、CM4 をリセットできます。このボタンは CM4 の RUN_PG ピンに接続されています。このピンが高い場合、CM4 が起動していることを示します。このピンを低くするとモジュールがリセットされます。

### オーディオジャック

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-jack.png" /></div>

reTerminal DM には 3.5mm ヘッドフォンジャックがあり、音声出力をサポートしており、外部ヘッドフォンやスピーカーなどに接続できます。

:::note
ヘッドフォンジャックは音声出力のみをサポートし、マイク録音機能はサポートしていません。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-power.png" /></div>

### HDMI

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/hdmi.png" /></div>

reTerminal DM は CM4 からのネイティブ HDMI インターフェースを備えており、最大 4K @ 60 fps のビデオ出力をサポートします。複数のディスプレイを必要とするアプリケーションに最適で、外部の大画面にコンテンツを出力できます。

### Ethernet RJ45

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RJ45.png" /></div>

reTerminal DM は、CM4 ネイティブのギガビットイーサネットインターフェースを備えており、10/100/1000 Mbit/s の3つの異なる速度をサポートします。追加の PoE モジュールを購入することで、このインターフェースを介して PoE（Power-over-Ethernet）給電を有効にし、reTerminal DM に電力を供給できます。

### 内部インターフェース

#### 40ピン GPIO

reTerminal DM 内部には、クラシックな Raspberry Pi の 40ピン GPIO デザインが保持されており、ピンの割り当ては Raspberry Pi 4B と同じです。これらの GPIO を使用するには、背面カバーを開ける必要があります。CM4 IO のリソースが限られているため、40ピン GPIO と多くの周辺インターフェースがマルチプレックスされていることに注意が必要です。GPIO を使用する際には、競合に特に注意してください。詳細なピン割り当て情報については、以下の表を参照してください。

<div class="table-center">

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-3z1b{border-color:#000000;text-align:right;vertical-align:top}\n.tg .tg-wp8o{border-color:#000000;text-align:center;vertical-align:top}\n.tg .tg-tynx{background-color:#8fc31f;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-xwyw{border-color:#000000;text-align:center;vertical-align:middle}\n.tg .tg-73oq{border-color:#000000;text-align:left;vertical-align:top}\n.tg .tg-0a7q{border-color:#000000;text-align:left;vertical-align:middle}\n.tg .tg-8o2n{border-color:#000000;text-align:right;vertical-align:middle}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-tynx">説明</th>
        <th className="tg-tynx">ピンマルチプレックス</th>
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx">ピンマルチプレックス</th>
        <th className="tg-tynx">説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-3z1b">ピン 1</td>
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
        <td className="tg-73oq">3.5mm オーディオジャック</td>
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
        <td className="tg-8o2n" rowSpan={3}>CAN および LoRa® モジュール</td>
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
        <td className="tg-73oq">CAN 用 SPI 有効化ピン</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 7</td>
        <td className="tg-73oq">SPI0_CE1</td>
        <td className="tg-73oq">LoRa® 用 SPI 有効化ピン</td>
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
        <td className="tg-73oq">CAN 用割り込みピン</td>
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
        <td className="tg-3z1b">3.5mm オーディオジャック</td>
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
        <td className="tg-73oq">3.5mm オーディオジャック</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 21</td>
        <td className="tg-73oq">PCM_DOUT</td>
        <td className="tg-73oq">3.5mm オーディオジャック</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

#### RTC

reTerminal DM は、CR2032 バッテリーが事前にインストールされた RTC 回路を備えており、電源が失われた場合でも時刻保持機能を維持できます。

現在のシステムクロックでハードウェアクロックを変更するには、以下のコマンドを使用してください。

```sh
sudo hwclock --systohc
```

現在のハードウェアクロックでシステムクロックを変更するには、以下のコマンドを使用してください。

```sh
sudo hwclock --hctosys
```

現在のハードウェアクロックを確認するには、以下のコマンドを使用してください。

```sh
sudo hwclock -r 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RTC.png" /></div>

#### ウォッチドッグ

reTerminal DM は、異常なシステムクラッシュが発生した場合に自動的にシステムを再起動する独立したハードウェアウォッチドッグ回路を備えています。このウォッチドッグ回路は RTC を通じて実装されており、1秒から255秒まで柔軟なフィードタイムを設定できます。

ウォッチドッグのタイムアウト時間を `watchdog.conf` で設定するには、以下の手順に従ってください。

**STEP 1:** 通常 `/etc/watchdog.conf` にある `watchdog.conf` ファイルを編集用に開きます。

```sh
sudo nano /etc/watchdog.conf
```

**STEP 2:** `/etc/watchdog.conf` 内の "watchdog-device" と "watchdog-timeout" の設定オプションを探し、以下のように設定してください。

:::note
`watchdog-timeout` オプションを `60` 未満に設定すると即座に再起動が発生する場合があります。ハードウェアウォッチドッグを利用するには、`watchdog-device` を `/dev/watchdog1` に設定する必要があります。デフォルト設定では `1` がない場合、Broadcom ウォッチドッグデバイスが利用されます。
:::

```sh
# ウォッチドッグデバイスドライバアクセス "ファイル" を使用するにはこれをコメント解除してください。
watchdog-device		= /dev/watchdog1

# デフォルトの1分間とは異なるハードウェアタイムアウト値を設定するには、この行をコメント解除して編集してください。
watchdog-timeout	= 60
```

例えば、ウォッチドッグのタイムアウト時間を60秒に設定したい場合、`watchdog-timeout` の値を `60` に設定します。これにより、ウォッチドッグが60秒以内にリセット信号を受信しない場合、システムがクラッシュしたと仮定して自動再起動操作をトリガーします。

:::warning
ウォッチドッグがアクティブかどうかを以下のコマンドでテストできます。ただし、これらのコマンドはシステムを停止させるため、慎重に実行してください。
```sh
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```
これで、設定したウォッチドッグタイムアウト時間後に reTerminal DM が再起動するはずです。
:::

#### バックライト

バックライトの明るさは6段階で設定できます。0はオフ、5は最大の明るさです。以下のコマンドを使用して明るさを制御できます。

```sh
sudo -i

echo 0 > /sys/class/backlight/lcd_backlight/brightness
echo 1 > /sys/class/backlight/lcd_backlight/brightness
echo 5 > /sys/class/backlight/lcd_backlight/brightness
```

## 内部アドオン

### カメラ

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Camera.png" /></div>

reTerminal DM のメインボードには CSI カメラインターフェースが予約されており、カメラ機能をサポートするようにカスタマイズできます。ただし、フロントパネルのスペースが限られているため、小型カメラのみ使用可能です。現在厳密にテストされたソリューションでは、Raspberry Pi カメラ V2.0 ドライバーボード + Seeed カスタマイズカメラ IMX219-77 を使用しています。

<div class="table-center">

| コネクタ | コネクタタイプ | ピンピッチ | レーン | FPC の向き |
|  ---      |  ---           |   ---     |  --- | --- |
| CSI0      | 15ピン FPC     | 1mm       | 2    | 金メッキ端子が下向き |
| CSI1      | 22ピン FPC     | 0.5mm     | 4    | 金メッキ端子が上向き |

</div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/camera_version.png" /></div>

:::note
標準版 reTerminal DM にはフロントパネルにカメラ開口部がないため、標準製品ではカメラ機能は利用できません。カスタマイズされたカメラ要件がある場合は、odm@seeed.cc にお問い合わせください。
:::

### 4G モジュール

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

**必要な材料**

- reTerminal DM x 1 
- EC25-EUX 4G モジュール x1
- SIM カード x1

**ステップ 1.** [EC25 4G モジュールのハードウェア組み立て](/ja/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna) ガイドを参照して、`EC25 4G モジュール` を `4G/LTE PCIe スロット` にインストールしてください。このスロットには *`4G/LTE`* のシルクスクリーンが表示されます。また、システムを起動する前に [SIM カードスロット](/ja/reterminal-dm/#sim-card-slot) に 4G 対応の SIM カードを挿入してください。

**ステップ 2.** EC25-EUX が検出されるかどうかを以下のコマンドで確認してください。

```sh
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ 3.** シリアル通信ツール minicom をインストールします。

```sh
sudo apt install minicom
```

**ステップ 4.** minicom を使用して EC25-EUX 4G モジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、AT と入力して 'Enter' を押してください。OK が表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ 5.** 4G モジュールを有効にして 4G ネットワークに接続します。

同じ minicom シリアルウィンドウで以下を入力してください。

```sh
AT+QCFG="usbnet"
```

`+QCFG: "usbnet",0,` のような結果が返されますが、これを 1 (ECM モード) に設定する必要があります。以下のコマンドを入力してください。

```sh
AT+QCFG="usbnet",1
```

次に、モデムを強制的に再起動するために以下のコマンドを入力してください。

```sh
AT+CFUN=1,1
```

その後、再起動するか、モジュールが SIM カードキャリアからインターネットを取得するまでしばらく待機してください。

`ifconfig`コマンドを使用して、reTerminal DMのネットワーク状態を確認することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### LoraWAN® モジュール

:::note
reTerminal DMはWM1302 LoraWAN® モジュールのUSB版とSPI版の両方をサポートしています。ただし、USB版を使用する場合、4Gモジュール用に設計されたMini PCIeを利用する必要があります。そのため、4GモジュールとLoraWAN® モジュールの両方を使用したい場合は、WM1302 LoraWAN® モジュールのSPI版を選択してください。
:::

<!-- コード -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

**ステップ 1.** [LoraWAN® モジュールのハードウェア組み立て](/ja/reterminal-dm-hardware-guide/#assembly-lora-module-and-antenna)ガイドを参照して、`WM1302 SPI LoraWAN® モジュール`を`LoraWAN® Mini PCIeスロット`に取り付けます。このスロットには*`Lora`*のシルクスクリーンが表示されます。必要なパッケージ（build-essential: DEBパッケージをソースコードから作成するために必要なツールを含むDebianパッケージ）をインストールします。

```sh
sudo apt update
sudo apt install git
sudo apt-get install build-essential
```

**ステップ 2.** コマンドラインで`sudo raspi-config`を入力して、Raspberry Piソフトウェア構成ツールを開きます：

- インターフェースオプションを選択
- SPIを選択し、**Yes**を選択して有効化
- I2Cを選択し、**Yes**を選択して有効化
- シリアルポートを選択し、「ログインシェルを使用しますか？」には**No**を選択、「シリアルポートハードウェアを使用しますか？」には**Yes**を選択

その後、これらの設定が有効になるようにRaspberry Piを再起動してください。

**ステップ 3.** [WM1302コード](https://github.com/Lora-net/sx1302_hal)をreTerminalにダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ 4.** reset_lgw.shスクリプトをコピーします。

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**ステップ 5.** `global_conf.json.sx1250.US915`設定ファイルでLoraWAN® モジュールのデフォルトの`SPI`ポートを置き換えます：

```sh
sed -i 's/spidev0.0/spidev0.1/g'  global_conf.json.sx1250.US915
```

**ステップ 6.** LoraWAN® モジュールを起動します。

以下のコードを実行して、WM1302の動作周波数バージョンに応じてLoraWAN® モジュールを起動します。

```sh
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

お好みのLora® ネットワークサーバーを選択し、上記の画像に表示されている`EUI ID`を使用して接続を設定してください。

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

**ステップ 1.** [LoraWAN® モジュールのハードウェア組み立て](/ja/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna)ガイドを参照して、`WM1302 USB LoraWAN® モジュール`を`4G Mini PCIeスロット`に取り付けます。このスロットには*`4G`*のシルクスクリーンが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/dmlora.png"/></div>

**ステップ 2.** コマンドラインで`sudo raspi-config`を入力して、Raspberry Piソフトウェア構成ツールを開きます：

- インターフェースオプションを選択
- I2Cを選択し、**Yes**を選択して有効化
- シリアルポートを選択し、「ログインシェルを使用しますか？」には**No**を選択、「シリアルポートハードウェアを使用しますか？」には**Yes**を選択

その後、これらの設定が有効になるようにRaspberry Piを再起動してください。

**ステップ 3.** [WM1302コード](https://github.com/Lora-net/sx1302_hal)をreTerminalにダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ 4.** reset_lgw.shスクリプトをコピーします。

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**ステップ 5.** `global_conf.json.sx1250.US915.USB`設定ファイルでLoraWAN® モジュールのUSBポートを置き換えます：

**ステップ 5-1.**
まず、特定のUSBポートを取得するために以下の手順を実行します：

```sh
lsusb
```
この例では、WM1302は`STMicroelectronics Virtual COM Port`を使用しているため、製品ID`5740`を取得できます。

**ステップ 5-2.**
次に、製品ID番号`5740`を持つUSBデバイスを取得します。この場合、USBポート番号`1-1.4.1`を取得します：

```sh
sudo dmesg | grep 5740
# Load ACM module
sudo modprobe cdc_acm
```

その後、デバイスポートを以下のように取得します：

```sh
sudo dmesg | grep 1-1.4.1
```

この例では、USBデバイスは`ttyACM2`です。

次に、`global_conf.json.sx1250.US915.USB`設定ファイルでUSBデバイスを変更します。`sed`コマンド`sed -i 's/search_string/replacement_string/g' filename`を使用して、以下のパターンに従ってください：`sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB`。なお、`the_result_from_above`と`frequency_of_your_module`は自身のアプリケーションに合わせて置き換えてください。

例として、以下のようにします：

```sh
sed -i 's/ttyACM0/ttyACM2/g'  global_conf.json.sx1250.US915.USB
```

以下の画像に示されている手順を参照してください：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/find-lora-usb.png"/></div>

**ステップ 6.** LoRaWAN® モジュールを起動する

次に、以下のコードを実行して、WM1302 の動作周波数バージョンに応じて LoRaWAN® モジュールを起動します。

```sh
USB バージョン
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-usb.png"/></div>

上記の画像に示されている `EUI ID` を使用して、希望する LoRa® ネットワークサーバーを選択し、接続を設定してください。

</TabItem>
</Tabs>

<!-- コード終了 -->

### PCIe 拡張カード

reTerminal DM は CM4 から派生した PCIe インターフェースを備えており、PCIe 2.0 をサポートし、理論上最大 5Gbps の伝送速度を提供します。これにより、ギガビットイーサネットや NVMe SSD などのさまざまな高速インターフェースの拡張が可能になります。私たちは、PCIe、USB、および I2C インターフェースに基づいた複数の拡張カードを開発しており、さまざまなシナリオの要件に対応しています。これにより、カスタマイズのニーズにも対応できます。

:::note
標準製品にはデフォルトで PCIe 拡張カードは含まれていません。Seeed はバッチカスタマイズ注文に対して組み立てサービスを提供できます。
:::

### PoE

reTerminal DM は、PoE 電源モジュールを追加することで IEEE 802.3af PD（Powered Devices）標準をサポートできます。

:::note
reTerminal DM は PoE 電源供給をサポートしますが、標準製品にはデフォルトで PoE モジュールは含まれていません。Seeed はバッチカスタマイズ注文に対して PoE のはんだ付けおよび組み立てサービスを提供できます。ただし、顧客がサンプルをテストする場合は、PoE モジュールを自分ではんだ付けおよび組み立てる必要があります。
:::

### SSD

reTerminal DM は、PCIe 拡張カードを使用して 2280 NVMe SSD をサポートします。CM4 の PCIe は Gen2.0 であり、理論上の最大速度は 5Gbps です。Gen3.0 以上の SSD を使用する場合、SSD の最大速度を達成できない可能性があります。テストの結果、SSD を搭載した reTerminal DM は、最大書き込み速度 210MB/s、最大読み取り速度 360MB/s を達成できます。どの SSD が互換性があるかわからない場合は、Seeed の公式ウェブサイトで 112990247、512GB NVMe M.2 PCIe Gen3x4 2280 SSD を購入できます。

:::note
reTerminal DM の標準バージョンは SSD をサポートしておらず、この機能を有効にするには PCIe 拡張カードを購入する必要があります。
:::

## 追加リソース

*  [reTerminal DM データシート](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
*  [reTerminal DM ユーザーマニュアル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)
*  [reTerminal DM 回路設計 & PCB 設計 & ガーバーファイル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal_DM_schematic_design_files.zip)
*  [reTerminal DM 構造設計ファイル.stp](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>