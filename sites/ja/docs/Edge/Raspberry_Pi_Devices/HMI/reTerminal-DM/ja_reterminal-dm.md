---
description: reTerminal DM 入門ガイド
title: reTerminal DM 入門ガイド
keywords:
  - Edge
  - reTerminal-DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 12/15/2025
  author: David Du
createdAt: '2023-04-23'
updatedAt: '2026-01-28'
url: https://wiki.seeedstudio.com/ja/reterminal-dm/
---

# reTerminal DM 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM は 10.1 インチのオープンソース堅牢 HMI であり、データフローを統合し、現場デバイスを管理するための統合デバイスマスターです。

Raspberry Pi CM4 をベースにした、パネル PC、HMI、PLC、IIoT ゲートウェイが一体となったデバイスとして、reTerminal DM は IP65 等級の堅牢な大型スクリーンを備えた新世代のインタラクティブセンシングハブです。

CAN バス、RS485、RS232、ギガビット Ethernet ポートなどのインターフェースに対応した豊富な拡張性とハイブリッド接続性を備え、4G、LoRa®、WiFi、BLE などの強力な無線通信機能もサポートします。

> **購入に関する注意:** 4G および LoRa® モジュールは、標準では reTerminal DM に同梱されません。[4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html) など、必要に応じて関連モジュールを別途ご購入ください。
>
:::note
ロゴブランディング、パッケージング、ファームウェア書き込みのカスタマイズが可能です。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 特長

- HMI、PLC、パネル PC、ゲートウェイを 1 台に統合：分散型ハブデバイスに最適
- イベント駆動アプリケーション向けローコードプログラミング：フローベース編集とワンクリックデプロイに対応した Node-RED をネイティブ統合し、Raspberry Pi 上で動作するすべてのソフトウェアと互換
- 過酷な動作環境向けの堅牢設計：IP65 フロントパネル、-10～50°C の動作温度
- ハイブリッド接続性：4G LTE、LoRaWAN®、WiFi、BLE、RS485/RS232、CAN バス、1000M Ethernet、USB、HDMI をサポート
- ソフトウェアおよびハードウェアのオープンソース設計：Raspberry Pi CM4 搭載で、カスタマイズや派生製品にも対応
- [製品保証：2 年保証](/ja/reterminal-dm-warranty)

> \*4G および LoRa® モジュールは標準では reTerminal DM に同梱されません。必要に応じて関連モジュールを別途ご購入ください。

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
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大表示色</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>16.7M (8-bit)</td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>30000 時間</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>タッチ方式</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10 点マルチタッチ静電容量方式</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>鉛筆硬度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>7H</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>ビデオ &amp; オーディオ</strong></td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>3.5mm オーディオジャック</td>
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
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-485 &gt; 端子台<br />1 x RS-485 &gt; DB9（オプション）</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS232</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-232 &gt; 端子台<br />1 x RS-232 &gt; DB9（オプション）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>CAN</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x CAN-BUS &gt; 端子台</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DI</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DI &gt; 端子台</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DO</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DO &gt; 端子台</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>40pin GPIO</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>内部</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>無線通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>WiFi</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>オンチップ WiFi</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>オンチップ BLE</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>LoRaWAN® 用 Mini-PCIe（オプション）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Cellular</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}><a href="https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html" target="_blank" rel="noopener">4G 用 Mini-PCIe（オプション）</a></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>電源</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Input</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 ピン端子台</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>PoE</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12W PoE（オプション）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Power Range</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12～24 DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>環境</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>防塵・防水保護</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>IP65 フロントパネル</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>動作温度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-10～50 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>保存温度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-20～70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>湿度（動作時）</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10～90% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>機構</strong></td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>パネル、VESA、DIN レール</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>重量（正味）</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1.8Kg</td>
    </tr>
    <tr>
      <td data-style="width: 98.6555%;" colSpan={2} style={{width: '98.6555%'}}><strong>認証</strong> </td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>高精度 RTC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>セキュリティ</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>保証</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 年</td>
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

## 電源構成図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/power-diagram.png" /></div>

reTerminal DM は、DC 端子と PoE ポートの 2 つの電源オプションをサポートします。デフォルトでは reTerminal DM は DC 端子から給電され、**PoE 電源はオプションです**。これにより、電源選択の柔軟性が提供され、さまざまな電源との容易な統合が可能になります。

### 電源端子

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/powerplug.png" /></div>

reTerminal DM は、公称電圧 12～24 V で給電されます。電源は 2 ピンの電源端子台コネクタを介して接続されます。

### POE（オプション）

:::note
標準製品にはデフォルトで PoE モジュールは含まれていません。Seeed は、要望に応じてバッチカスタマイズ注文向けに PoE のはんだ付けおよび組立サービスを提供できます。詳しくは odm@seeed.cc までお問い合わせください。
:::

PoE モジュールが搭載されている場合、reTerminal DM の LAN1 ポートは PoE 給電をサポートし、Ethernet 経由でデバイスに電源を供給する便利で効率的な方法を提供します。このオプションにより、設置プロセスが簡素化され、必要な配線量が削減されるため、電源が限られている、または電源コンセントが容易に利用できないアプリケーションに最適なソリューションとなります。

- PoE 入力：範囲 44~57V、標準 48V
- PoE 出力：12V、最大 1.1A

### 消費電力

reTerminal DM の消費電力については、Seeed Studio のラボで測定した下記の表を参照してください。なお、この値はあくまで参考値であり、テスト方法や環境によって結果が変動する可能性があります。

| 状態   | 電圧 | 電流 | 消費電力 | 説明 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|シャットダウン  |         |  0.6mA  |                   | シャットダウンおよび電源オフ状態での静的消費電力テスト。|
|アイドル      |24V      |  0.165A |    3.96W          | デフォルトの Seeed Studio システムを実行し、テストプログラムを一切動作させない状態で、端子ソケットから reTerminal DM デバイスに 24V 電源を供給したときの入力電流をテストします。|
|フルロード |24V      |  0.37A  |    8.88W          | "stress -c 4" コマンドを使用して CPU をフルロードで動作させながら、動画を再生し、CAN および RS485 通信を実行します。外部デバイスは接続していません。|

### 電源オン／オフ

reTerminal DM にはデフォルトで電源ボタンは搭載されておらず、電源を接続するとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステム上でシャットダウンオプションを選択し、システムが完全にシャットダウンするまで待ってから電源を切ってください。システムを再起動するには、電源を再接続するだけです。

:::note
シャットダウン後は、内部コンデンサが完全に放電されるよう、システムを再起動する前に少なくとも 10 秒間お待ちください。
:::

## ブロック図

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/block-diagram.png" /></div>

### I2C ブロック

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/i2c-block.png" /></div>

## インターフェース

### マイク

reTerminal DM には、画面下の左右に 2 つの MEMS マイクが搭載されています。これらのマイクはデュアルマイクアレイとして構成でき、優れた集音性能を提供します。マイクは I2S インターフェースを介してオーディオコーデックチップと通信し、コーデックチップは PCM インターフェースを介して CM4 と通信します。reTerminal DM に採用されているオーディオコーデックチップは、TI 社の TLV320AIC3104 低消費電力ステレオオーディオコーデックです。

:::warning
フロントパネルで IP65 等級を実現するため、マイク開口部は防水音響メンブレンで覆われていることに注意してください。マイク開口部には鋭利な物を触れないようにしてください。
:::

マイクを使用するには：

デバイス上で `Terminal` アプリを開き、`arecord -l` と入力してマイクドライバを確認してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/arecord-device.png" /></div>

音声を録音するには `audacity` アプリを使用できます。`sudo apt install audacity` を使用して audacity アプリをインストールしてください：

audacity を開いてアプリを起動し、録音ボタンをクリックして内蔵マイクから音声を録音してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/recording.png" /></div>

### LED インジケータ

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/led-indicator.png" /></div>

reTerminal DM には 3 つの LED インジケータが搭載されており、機器の動作状態を示します。各 LED の具体的な機能と状態については、以下の表を参照してください。

#### LED ピン割り当て

| ラベル | 信号   | 信号ソース | 色  | 説明 |
|  ---  |  ---     |     ---       |  ---   |     ---     |
| PWR   | LED_nPWR | CM4           | 黄 | CM4 の電源供給を示すために使用されます。CM4 が正常に電源オンされると、LED が点灯します。|
|USER   |          |PCA9535 - GPIO | 赤    | ユーザー定義機能 |
|ACT    | LED_nACT |CM4            | 緑  | システムのさまざまな状態を示すために使用されます。下記の表を参照してください。|

#### ACT ステータステーブル

<div class="table-center">

| 長い点滅 | 短い点滅 | 状態 |
| --- | --- | --- |
| 0 | 3 | 一般的な起動失敗|
| 0 | 4 | start*.elf が見つかりません|
| 0 | 7 | カーネルイメージが見つかりません|
| 0 | 8 | SDRAM 障害|
| 0 | 9 | SDRAM 不足|
| 0 | 10 | HALT 状態|
| 2 | 1 | パーティションが FAT ではありません|
| 2 | 2 | パーティションからの読み取りに失敗しました |
| 2 | 3 | 拡張パーティションが FAT ではありません|
| 2 | 4 | ファイル署名／ハッシュ不一致 - Pi 4|
| 4 | 4 | 非対応のボードタイプ|
| 4 | 5 | 致命的なファームウェアエラー|
| 4 | 6 | 電源障害タイプ A|
|4 | 7 | 電源障害タイプ B |

</div>

:::note
ACT LED が規則的な 4 回点滅パターンで点滅する場合、ブートコード（start.elf）を見つけられていません。<br/>
ACT LED が不規則なパターンで点滅する場合は、ブート処理が開始されています。<br/>
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続せずに再度試して確認してください。<br/>
詳細については Raspberry Pi フォーラムを参照してください。<br/>
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums<br/>
詳細については Raspberry Pi フォーラムを参照してください: https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151<br/>
:::

USER LED を有効にするには、次のコマンドを使用してください：

```sh
sudo -i

echo 0 > /sys/class/leds/usr-led/brightness
echo 1 > /sys/class/leds/usr-led/brightness
```

USER LED が赤色に点灯するのが確認できるはずです。

### 照度センサ

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor.png" /></div>

画面右下に配置された照度センサは、周囲の光の強さを検出し、画面の明るさを自動的に調整して、最適な視認性を提供しつつ省エネルギーを実現します。照度センサは I2C プロトコルを介して CM4 と通信します。

I2C アドレスは **0x29** です。

照度センサを使用するには：

- **Step 1.** 次のディレクトリに移動します

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **Step 2.** 次を入力して、**Lux** 単位の照度値を取得します

```sh
cat in_illuminance_input 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor-result.png" /></div>

### ブザー

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/buzzer.png" /></div>

reTerminal DM には、画面右下にアクティブブザーが搭載されており、アラームやイベント通知などさまざまな用途に使用できます。ブザーは PCA9535 GPIO 拡張 IC を介して制御され、この IC によりデバイスに追加のデジタル I/O チャンネルが提供されます。

ブザーをテストおよび制御するには、`1` または `0` を `/sys/class/leds/usr-buzzer/brightness` ファイルに設定するだけです：

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

| ピン | シルク印刷 | 信号 | 説明 |
| --- |  ---        |  ---   | ---         |
|1 |CH| CANH     | 差動 CAN 信号 High |
|2 |CL| CANL     | 差動 CAN 信号 Low |
|3 |GS| GND_ISO  | 絶縁グランド信号 |
|4 |RA| RS485A   | 差動 RS485 信号 A |
|5 |RB| RS485B   | 差動 RS485 信号 B |
|6 |GS| GND_ISO  | 絶縁グランド信号 |
|7 |RT| RS232_TX | RS232 信号送信端 |
|8 |RX| RS232_RX | RS232 信号受信端 |
|9 |GD| GND     | メインボードグランド |
|10 |GD| GND    | メインボードグランド |
|11 |I1| DI1    | デジタル入力 1 |
|12 |I2| DI2    | デジタル入力 2 |
|13 |I3| DI3    | デジタル入力 3 |
|14 |I4| DI4    | デジタル入力 4 |
|15 |GI| GND_DI | 入力グランド信号、1MΩ を介して GND に接続 |
|16 |D1| DO1    | デジタル出力 1 |
|17 |D2| DO2    | デジタル出力 2 |
|18 |D3| DO3    | デジタル出力 3 |
|19 |D4| DO4    | デジタル出力 4 |
|20 |GO| GND_DO | 出力グランド信号、0Ω を介して GND に接続 |

</div>

#### DI/DO

reTerminal DM は 4 チャンネルのデジタル入力と 4 チャンネルのデジタル出力をサポートしており、すべて光学的に絶縁されているため、電圧スパイクやその他の電気的ノイズからメインボードを効果的に保護します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DI-DO.png" /></div>

##### DI/DO ピン割り当て表

<div class="table-center">

| ピン | CM4 信号 | 代表的な電圧範囲 | 最大電圧 |  定格電流容量 |
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
入力信号用のグラウンドと出力信号用のグラウンドは異なります。入力信号用のグラウンドは GND_DI ピンに、出力信号用のグラウンドは GND_DO ピンに接続する必要があります。

reTerminal DM のデジタル入力および出力には負論理が使用されており、Terminal IO と CM4 GPIO 間の論理レベルの関係は以下の表のとおりです。

|Terminal Digital Input | CM4 GPIO 検出信号 |
| ---                   | ---                    |
| Low                   | High                   |
| High                  | Low                    |

| CM4 GPIO 出力         | Terminal Digital Output|
| ---                   | ---                    |
| High                  | Low                    |
| Low                   | High                   |

:::

このセクションでは `raspi-gpio` ツールを使用して GPIO をテストします。マニュアルを表示するには `raspi-gpio help` を使用できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio.png" /></div>

すべての GPIO の現在の状態を取得するには、`Terminal` に次のコマンドを入力してください：

```sh
raspi-gpio get
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio-get.png" /></div>

###### デジタル入力

センサーを DI に配線する方法を示した回路図は次のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sensor.png" /></div>

特定の GPIO ステータスを取得するには、`Terminal` に次のコマンドを入力してください：

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state.png" /></div>

ここで、`GPIO16` の現在の状態は `INPUT` で `pulling Down` に設定されており、現在のピンレベルは `1` です。これは `High` を意味し、上記の表によると現在の Terminal Digital Input `DI1` が `Low` であることも意味します。

次に、`DI1` 端子を `5V source` の `Positive` ピンに接続し、`5V source` の `Ground` を `GND_DI` に接続することで、`DI1` に `High` 信号を印加してみましょう。

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state-high.png" /></div>

ここでは、`GPIO16` の現在のピンレベルは `0` で、これは `Low` を意味し、上記の表によると現在の Terminal Digital Input `DI1` が `High` であることも意味します。

###### デジタル出力

負荷を DO に配線する方法を示した回路図は次のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DO.png" /></div>

デジタル出力の状態値を制御するには、まずピン状態を `Output` および `pulling Down` に設定する必要があります：

```sh
#set current pin state
raspi-gpio set 24 op pd dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set.png" /></div>

ここでは、`DO1` に対応する `GPIO24` が `Output` および `pulling down` 状態に設定されており、`GPIO24` レベルは `High` に設定されています。

次に、`GPIO24` を `Low` に設定します。これは `DO1` 出力が `High` で駆動されることを意味します。

```sh
#set current pin state
raspi-gpio set 24 dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set-low.png" /></div>

#### RS485

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RS485.png" /></div>

reTerminal DM は 20 ピンコネクタを介して RS485 インターフェースを備えており、信号と電源の両方が絶縁されているため、過酷な環境やオートメーション用途でも安全かつ信頼性の高い動作が可能です。`RS485 A` および `RS485 B` 信号は容量結合によるアイソレーションで絶縁されており、優れた EMI 耐性を提供し、RS485 インターフェースの高速通信要件を満たします。

:::note
終端抵抗 120Ω がデフォルトで実装されています。
RS485 インターフェースはアイソレートされた電源を使用しているため、RS485 インターフェースに接続される外部デバイスのグラウンド信号は GND_ISO ピンに接続する必要があります。
:::

RS485 をテストしてインターフェースするには、USB–RS485 アダプタを用意し、以下と同じ接続になっていることを確認してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

:::note
RS485 ポートは、実行している OS によって `/dev/ttyACM1` または `/dev/ttyCH340USB1` であることに注意してください。
:::
以下のテストを実行するために、ホストコンピュータ上でお好みのシリアル通信ツールを使用してください。
reTerminal DM 上で Python コードを実行して RS485 シリアル接続をテストします。このコードでは RS485 シリアルポートを次のように設定します。

Baudrate -> 9600
Bytesize -> 8 bits
Parity -> None
Stopbits -> 1
Hardware flow control -> disabled

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

reTerminal DM の 20 ピンコネクタには、絶縁されていない RS232 インターフェースも含まれています。RS232 通信は一般的に CMOS 電圧レベルを使用し、通信距離も短いため、環境からの電磁干渉の影響を受けにくいからです。

:::note
Ground ピンは `RX` ピンの隣の `GD` ピンに接続する必要があることに注意してください。`GS` ピンではないことを確認してください。
:::

以下は、reTerminal DM からホストコンピュータへデータを送信するテスト用 Python スクリプトです：

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

以下は、ホストコンピュータから送信されたデータを reTerminal DM で受信するテスト用 Python スクリプトです。

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

reTerminal DM は CAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートする CAN インターフェースを備えています。CAN インターフェースは容量結合によるアイソレーションで絶縁されており、優れた EMI 保護を提供し、過酷な環境やオートメーション用途でも信頼性の高い通信を実現します。終端抵抗 120Ω がデフォルトで実装されています。

:::note
CAN インターフェースはアイソレートされた電源を使用しているため、CAN インターフェースに接続される外部デバイスのグラウンド信号は GND_ISO ピンに接続する必要があります。
:::

CAN バスをテストしてインターフェースするには：
以下の画像のように、USB から CAN へのアダプタを接続してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

- ステップ 1: CAN-utils をインストールします

```sh
sudo apt install can-utils
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg" /></div>

CAN-utils は、CAN インターフェースを使用する非常に便利なデバッグツールのコレクションです。次のようなアプリケーションが含まれます：

- candump – CAN パケットをダンプし、表示、フィルタリング、およびディスクへのログ保存を行います。
- canplayer – CAN ログファイルを再生します。
- cansend – 単一フレームを送信します。
- cangen – ランダムなトラフィックを生成します。
- canbusload – 現在の CAN バスの**使用率**を表示します

CAN-utils のソースコードは、[GitHub リポジトリ](https://github.com/linux-can/can-utils)から入手できます。

- ステップ 2: 次のコマンドを使用して CAN インターフェースを設定します：

```sh
sudo ip link set can0 up type can bitrate 500000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

- ステップ 3: git を使用してテスト用コードを reTerminal DM にダウンロードします

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple

```

- ステップ 4: データを送信するコードをコンパイルして実行します：

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit

```

Linux ホストコンピュータまたは別の reTerminal DM 上で、データを受信するコードをコンパイルして実行できます。

```sh
gcc canreceive.c -o canreceive
```

結果を確認できます。以下の画像は、2 台の reTerminal DM を使用して実行したものです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg" /></div>

### USB

#### USB Type-A

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-a.png" /></div>

USB 2.0 Type-A ポートが 2 つあり、USB フラッシュドライブ、Web カメラ、キーボード、マウスなどの USB デバイスを接続できます。

#### USB Type-C

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-c.png" /></div>

USB Type-C は USB 2.0 ポートで、ブートスイッチの位置に応じてシリアルデバッグまたは OS イメージの書き込みに使用されます。OS の書き込みについては、[Flashing OS Wiki page](/ja/reterminal-dm-flash-OS) を参照してください。

### SIM カードスロット

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sim-slot.png" /></div>

reTerminal DM には、堅牢な用途で一般的に使用される標準サイズの SIM カードスロットが搭載されており、25mm x 15mm の標準 SIM カードが必要です。

:::note
標準版の reTerminal DM には 4G モジュールは付属していません。4G 機能が必要な場合は、別途 4G モジュールを追加購入する必要があります。そのため、この SIM カードスロットは、4G PCIe スロットに対応するバージョンの 4G モジュールを搭載した場合にのみ動作します。
:::

### リセットボタン

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/reset-button.png" /></div>

reTerminal DM のリセットホール内にはミニプッシュボタンスイッチがあります。細い物でこのボタンを押すことで、CM4 をリセットできます。このボタンは CM4 の RUN_PG ピンに接続されています。このピンが High のとき、CM4 が起動したことを示します。このピンを Low にするとモジュールがリセットされます。

### オーディオジャック

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-jack.png" /></div>

reTerminal DM には 3.5mm ヘッドホンジャックが搭載されており、音声出力をサポートし、外部ヘッドホンやスピーカーなどを接続できます。

:::note
ヘッドホンジャックは音声出力のみをサポートし、マイク録音機能はサポートしていません。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-power.png" /></div>

### HDMI

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/hdmi.png" /></div>

reTerminal DM は CM4 からのネイティブ HDMI インターフェースを備えており、最大 4K @ 60 fps のビデオ出力をサポートします。複数ディスプレイを必要とするアプリケーションに最適で、コンテンツを外部の大型スクリーンに出力できます。

### Ethernet RJ45

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RJ45.png" /></div>

reTerminal DM には、10/100/1000 Mbit/s の 3 つの速度に対応した CM4 ネイティブのギガビット Ethernet インターフェースが搭載されています。さらに PoE モジュールを追加購入することで、このインターフェースを介した PoE（Power over Ethernet）給電が可能となり、reTerminal DM に電力を供給できます。

### 内部インターフェース

#### 40 ピン GPIO

reTerminal DM 内部には、従来の Raspberry Pi の 40 ピン GPIO 設計が踏襲されており、ピン配列は Raspberry Pi 4B と同じです。これらの GPIO を使用するには、背面カバーを開ける必要があります。なお、CM4 IO のリソースが限られているため、40 ピン GPIO と多くの周辺インターフェースはマルチプレックスされており、GPIO を使用する際には競合に特に注意する必要があります。詳細なピン割り当て情報については、以下の表を参照してください。

<div class="table-center">

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-3z1b{border-color:#000000;text-align:right;vertical-align:top}\n.tg .tg-wp8o{border-color:#000000;text-align:center;vertical-align:top}\n.tg .tg-tynx{background-color:#8fc31f;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-xwyw{border-color:#000000;text-align:center;vertical-align:middle}\n.tg .tg-73oq{border-color:#000000;text-align:left;vertical-align:top}\n.tg .tg-0a7q{border-color:#000000;text-align:left;vertical-align:middle}\n.tg .tg-8o2n{border-color:#000000;text-align:right;vertical-align:middle}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-tynx">Description</th>
        <th className="tg-tynx">Pin multiplexing</th>
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx">Pin multiplexing</th>
        <th className="tg-tynx">Description</th>
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
        <td className="tg-3z1b">Block Terminal DI2</td>
        <td className="tg-3z1b">DI2</td>
        <td className="tg-wp8o">GPIO 17</td>
        <td className="tg-wp8o">GPIO 18</td>
        <td className="tg-73oq">PCM_CLK</td>
        <td className="tg-73oq">3.5mm audio jack</td>
      </tr>
      <tr>
        <td className="tg-3z1b">Interrupt pins for screen touch</td>
        <td className="tg-3z1b">TP_INT</td>
        <td className="tg-wp8o">GPIO 27</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">Block Terminal DI3</td>
        <td className="tg-3z1b">DI3</td>
        <td className="tg-wp8o">GPIO 22</td>
        <td className="tg-wp8o">GPIO 23</td>
        <td className="tg-73oq">DI4</td>
        <td className="tg-73oq">Block Terminal DI4</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">3V3<br /></td>
        <td className="tg-wp8o">GPIO 24</td>
        <td className="tg-73oq">DO1</td>
        <td className="tg-73oq">Block Terminal DO1</td>
      </tr>
      <tr>
        <td className="tg-8o2n" rowSpan={3}>CAN and LoRa® module</td>
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
        <td className="tg-73oq">Block Terminal DO2</td>
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
        <td className="tg-73oq">LoRa® 用 SPI イネーブルピン</td>
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

reTerminal DM には RTC 回路が搭載されており、CR2032 バッテリがあらかじめ装着されています。そのため、電源が失われた場合でも時刻保持機能を維持できます。

次のコマンドを使用して、ハードウェアクロックを現在のシステムクロックに変更します

```sh
sudo hwclock --systohc

```

次のコマンドを使用して、システムクロックを現在のハードウェアクロックに変更します

```sh
sudo hwclock --hctosys

```

現在のハードウェアクロックを表示するには

```sh
sudo hwclock -r 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RTC.png" /></div>

#### ウォッチドッグ

reTerminal DM には独立したハードウェアウォッチドッグ回路が搭載されており、システムが異常クラッシュした場合に自動的にシステムを再起動します。ウォッチドッグ回路は RTC を通じて実装されており、1 ～ 255 秒の柔軟な給電時間を設定できます。

watchdog.conf でウォッチドッグのタイムアウト時間を設定するには、次の手順に従ってください。

STEP 1: 通常 /etc/watchdog.conf にある watchdog.conf ファイルを開いて編集します。

```sh
sudo nano /etc/watchdog.conf
```

STEP 2: `/etc/watchdog.conf` 内の "watchdog-device" と "watchdog-timeout" の設定オプションを探し、次のように設定してください。

:::note
`watchdog-timeout` オプションを `60` 未満に設定すると即座に再起動が発生する場合があります。ハードウェアウォッチドッグを利用するには、`watchdog-device` を `/dev/watchdog1` に設定する必要があります。デフォルト設定で `1` が付かない場合は Broadcom のウォッチドッグデバイスが使用されます。
:::

```sh

# Uncomment this to use the watchdog device driver access "file".

watchdog-device  = /dev/watchdog1

# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.

watchdog-timeout = 60


```

例えば、ウォッチドッグのタイムアウト時間を 60 秒に設定したい場合は、`watchdog-timeout` の値を `60` に設定します。これは、ウォッチドッグが 60 秒以内にリセット信号を受信しない場合、システムがクラッシュしたとみなして自動再起動をトリガーすることを意味します。

:::warning
ウォッチドッグが有効かどうかは、次のコマンドでテストできます。これらのコマンドはシステムを停止状態にするため、以下のコマンドを実行する際は十分注意してください。

```sh
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

これで、watchdog-timeout に設定した時間が経過すると reTerminal DM が再起動しているはずです
:::

#### バックライト

バックライトの明るさは 6 段階で設定でき、0 がオフ、5 が最大輝度です。
次のコマンドを使用して、明るさを制御するインターフェースを利用できます。

```sh
sudo -i

echo 0 > /sys/class/backlight/lcd_backlight/brightness
echo 1 > /sys/class/backlight/lcd_backlight/brightness
echo 5 > /sys/class/backlight/lcd_backlight/brightness
```

## 内蔵アドオン

### カメラ

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Camera.png" /></div>

reTerminal DM メインボードには CSI カメラインターフェースが用意されており、カメラ機能に対応するようカスタマイズできます。なお、フロントパネルのスペースが限られているため、小型カメラのみ使用可能です。現在厳密にテストされているソリューションは、Raspberry Pi camera V2.0 ドライバボード + Seeed カスタマイズカメラ IMX219-77 を使用しています。

<div class="table-center">

| コネクタ | コネクタタイプ | ピッチ | レーン数 | FPC 向き |
|  ---      |  ---           |   ---     |  --- | --- |
| CSI0      | 15 ピン FPC    | 1mm       | 2    | 端子（金メッキ）が下向き |
| CSI1      | 22 ピン FPC    | 0.5mm     | 4    | 端子（金メッキ）が上向き |

</div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/camera_version.png" /></div>

:::note
標準版の reTerminal DM にはフロントパネルにカメラ用の開口部がないため、標準製品ではカメラ機能は利用できません。カメラのカスタマイズ要件がある場合は、odm@seeed.cc までお問い合わせください。
:::

### 4G モジュール

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

**必要な材料**

- reTerminal DM x 1
- EC25-EUX 4G モジュール x1
- SIM カード x1

**Step 1.** [EC25 4G Module Hardware assembly](/ja/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna) ガイドを参照して、`EC25 4G Module` を `4G/LTE PCIe slot` に取り付けてください。*`4G/LTE`* のシルクスクリーンが見えるはずです。また、システムの電源を入れる前に、4G 対応の SIM カードを [sim card slot](/ja/reterminal-dm/#sim-card-slot) に挿入してください。

**Step 2.** ```lsusb``` を使用して EC25-EUX が検出されているか確認します

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Step 3.** シリアル通信ツール minicom をインストールします。

```sh
sudo apt install minicom
```

**Step 4.** minicom を介して EC25-EUX 4G モジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、AT と入力して Enter キーを押すと、OK と表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Step 5.** 4G モジュールを有効にして 4G ネットワークに接続します

同じ minicom のシリアルウィンドウで、次のように入力してください:

```sh
AT+QCFG="usbnet"
```

```+QCFG: "usbnet",0,``` のような応答が返ってきますが、これを 1（ECM モード）に設定する必要があるため、次のコマンドを入力します。

```sh
AT+QCFG="usbnet",1
```

次に、モデムの再起動を強制するため、以下のコマンドを入力します。

```sh
AT+CFUN=1,1
```

その後、システムを再起動するか、モジュールが SIM カードのキャリアからインターネット接続を取得するまでしばらく待ちます。

reTerminal DM のネットワーク状態を確認するには、`ifconfig` コマンドを使用することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### LoraWAN®  モジュール

:::note
reTerminal DM は WM1302 LoraWAN®  モジュールの USB 版と SPI 版の両方をサポートしますが、USB 版は 4G モジュール用に設計された Mini PCIe を使用する必要があります。そのため、4G モジュールと LoraWAN®  モジュールの両方を使用したい場合は、WM1302 LoraWAN®  モジュールの SPI 版を選択してください。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI モジュール">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

**Step 1.** [LoraWAN®  Module Hardware assembly](/ja/reterminal-dm-hardware-guide/#assembly-lora-module-and-antenna) ガイドを参照して、`WM1302 SPI LoraWAN® Module` を `LoraWAN® Mini PCIe slot` に取り付けてください。*`Lora`* のシルクスクリーンが見えるはずです。
必要なパッケージをインストールします。`build-essential`（build essential パッケージは、ソースコードから DEB パッケージを作成するために必要なツールを含む Debian パッケージです）をモジュールをインストールして導入します。

```sh
sudo apt update
sudo apt install git
sudo apt-get install build-essential
```

**Step 2.** コマンドラインで `sudo raspi-config` と入力して、Raspberry Pi Software Configuration Tool を開きます：

- Interface Options を選択
- SPI を選択し、有効化するために **Yes** を選択
- I2C を選択し、有効化するために **Yes** を選択
- Serial Port を選択し、"Would you like a login shell..." には **No** を選択し、"Would you like the serial port hardware..." には **Yes** を選択

その後、これらの設定が有効になるように Raspberry Pi を再起動してください。

**Step 3.** [WM1302 code](https://github.com/Lora-net/sx1302_hal) を reTerminal にダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Step 4.** reset_lgw.sh スクリプトをコピーして修正します

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

```
cd ~/sx1302_hal/packet_forwarder
vim reset_lgw.sh
```

reset_lgw.sh スクリプトを以下のようにテキストエディタで修正します：

```sh
#!/bin/bash

# Dependency Check
if ! command -v i2cset &> /dev/null; then
    echo "Error: i2c-tools not found. Please install using: sudo apt-get install i2c-tools"
    exit 1
fi

# Configuration
I2C_BUS=1               # CM4_IIC1
DEVICE_ADDR=0x21        # PCA9535 Address from schematic
REG_OUTPUT_PORT0=0x02   # Register 2: Output Port 0
REG_CONFIG_PORT0=0x06   # Register 6: Configuration Port 0
PIN_MASK=0x20           # Bit 5 (0010 0000) for P05

# Read a register
read_reg() {
    local val=$(i2cget -y $I2C_BUS $DEVICE_ADDR $1)
    echo $val
}

# Write to a register
write_reg() {
    i2cset -y $I2C_BUS $DEVICE_ADDR $1 $2
}

echo "Starting SX1302 Reset Sequence on I2C Bus $I2C_BUS, Address $DEVICE_ADDR..."

# Ensure the Output Register bit for P05 is LOW
CURRENT_OUT=$(read_reg $REG_OUTPUT_PORT0)

NEW_OUT=$(printf "0x%02x" $((CURRENT_OUT & ~PIN_MASK)))

write_reg $REG_OUTPUT_PORT0 $NEW_OUT

echo "Set Output Register P05 to LOW. (Reg $REG_OUTPUT_PORT0: $CURRENT_OUT -> $NEW_OUT)"

# Configure P05 as OUTPUT
# Configuration Register: 1 = Input, 0 = Output
CURRENT_CFG=$(read_reg $REG_CONFIG_PORT0)

NEW_CFG=$(printf "0x%02x" $((CURRENT_CFG & ~PIN_MASK)))

write_reg $REG_CONFIG_PORT0 $NEW_CFG

echo "Configured P05 as OUTPUT. (Reg $REG_CONFIG_PORT0: $CURRENT_CFG -> $NEW_CFG)"

# Assert Reset (Drive P05 HIGH)
CURRENT_OUT=$(read_reg $REG_OUTPUT_PORT0)

RESET_HIGH=$(printf "0x%02x" $((CURRENT_OUT | PIN_MASK)))

write_reg $REG_OUTPUT_PORT0 $RESET_HIGH

echo "Asserting Reset (P05 HIGH)..."

# Hold Reset for 200ms
sleep 0.2

# Release Reset (Drive P05 LOW)
write_reg $REG_OUTPUT_PORT0 $NEW_OUT

echo "Released Reset (P05 LOW)."

echo "SX1302 Reset Complete."

echo "------------------------------------"

```


**Step 5.** `global_conf.json.sx1250.US915` 設定ファイル内の LoraWAN® Module のデフォルトの `SPI` ポートを置き換えます：

```sh
sed -i 's/spidev0.0/spidev0.1/g'  global_conf.json.sx1250.US915
```

**Step 6.** LoraWAN® Module を起動します

使用しているモジュールに基づいて、対応する `global_conf.json.sx1250.xxxxx` 内で、希望する LoRaWAN Network Server の `server_address` とゲートウェイ EUI `gateway_ID` を選択し、`up/down port` を `1700` に変更します。その後、以下のコードを実行してコンセントレータを起動します：


```sh
cd ~/sx1302_hal/packet_forwarder
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>



</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

**Step 1.** [LoraWAN®  Module Hardware assembly](/ja/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna) ガイドを参照して、`WM1302 USB LoraWAN®  Module` を *`4G`* シルクスクリーンが見える `4G Mini PCIe slot` に取り付けてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/dmlora.png"/></div>

**Step 2.** コマンドラインで `sudo raspi-config` と入力して、Raspberry Pi Software Configuration Tool を開きます：

- Interface Options を選択
- I2C を選択し、有効化するために **Yes** を選択
- Serial Port を選択し、"Would you like a login shell..." には **No** を選択し、"Would you like the serial port hardware..." には **Yes** を選択

その後、これらの設定が有効になるように Raspberry Pi を再起動してください。

**Step 3.** [WM1302 code](https://github.com/Lora-net/sx1302_hal) を reTerminal にダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Step 4.** reset_lgw.sh スクリプトをコピーします

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Step 5.** `global_conf.json.sx1250.US915.USB` 設定ファイル内の LoraWAN®  Module の USB ポートを置き換えます：

**Step 5-1.**
まず、特定の USB ポートを取得するために、以下の手順に従ってください：

```sh
lsusb
```

この例では、WM1302 は `STMicroelectronics Virtual COM Port` を使用しているため、プロダクト ID `5740` を取得できます

**Step 5-2.**
次に、プロダクト ID 番号 `5740` を持つ USB デバイスを取得します。この場合、USB ポート番号 `1-1.4.1` を取得します：

```sh
sudo dmesg | grep 5740
# Load ACM module
sudo modprobe cdc_acm
```

その後、次のようにデバイスポートを取得できます：

```sh
sudo dmesg | grep 1-1.4.1
```

したがって、この例では USB デバイスは `ttyACM2` です

したがって、`sed -i 's/search_string/replacement_string/g' filename` コマンドを使用して `global_conf.json.sx1250.US915.USB` 設定内の USB デバイスを変更します。そのため、`sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB` というパターンに従ってください。`the_result_from_above` と `frequency_of_your_module` は、ご自身の用途に合わせて置き換えてください：

例えば、この例では：

```sh
sed -i 's/ttyACM0/ttyACM2/g'  global_conf.json.sx1250.US915.USB
```

以下の画像に示す手順を参照してください：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/find-lora-usb.png"/></div>

**Step 6.** LoraWAN® Module を起動します

使用しているモジュールに基づいて、対応する `global_conf.json.sx1250.xxxxx` 内で、希望する LoRaWAN Network Server の `server_address` とゲートウェイ EUI `gateway_ID` を選択し、`up/down port` を `1700` に変更します。その後、以下のコードを実行してコンセントレータを起動します：


```sh
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-usb.png"/></div>

</TabItem>
</Tabs>

<!-- Code END -->

### PCIe 拡張カード

reTerminal DM には CM4 由来の PCIe インターフェースが搭載されており、PCIe 2.0 をサポートし、理論上は最大 5Gbps の伝送速度を提供します。これにより、ギガビット Ethernet や NVMe SSD など、さまざまな高速インターフェースを拡張することができます。私たちは、さまざまなシナリオ要件を満たすために、PCIe、USB、I2C インターフェースに基づく複数の拡張カードを開発しました。これにより、カスタマイズニーズにも対応しやすくなっています。

:::note
標準製品には、デフォルトで PCIe 拡張カードは含まれていません。Seeed はバッチカスタマイズ注文に対して組立サービスを提供できます。
:::

### POE

reTerminal DM は、PoE 電源モジュールを追加することで IEEE 802.3af PD（Powered Devices）規格をサポートできます。

:::note
reTerminal DM は PoE 給電をサポートしますが、標準製品にはデフォルトで PoE モジュールは含まれていません。Seeed はバッチカスタマイズ注文に対して PoE のはんだ付けおよび組立サービスを提供できます。ただし、顧客がサンプルをテストする場合は、PoE モジュールを自分でハンダ付けおよび組み立てる必要があります。
:::

### SSD

reTerminal DM は、PCIe 拡張カードを使用することで 2280 NVMe SSD をサポートします。CM4 の PCIe は Gen2.0 であり、理論上の最大速度は 5Gbps であることに注意してください。Gen3.0 以上の SSD を使用している場合、その SSD の最大速度を発揮できない可能性があります。テストの結果、SSD を搭載した reTerminal DM は、最大書き込み速度 210MB/s、最大読み取り速度 360MB/s を達成できます。どの SSD が互換性があるか不明な場合は、Seeed の公式サイトから 112990247、512GB NVMe M.2 PCle Gen3x4 2280 SSD を購入できます。

:::note
reTerminal DM の標準バージョンは SSD をサポートしておらず、この機能を有効にするには PCIe 拡張カードの購入が必要です。
:::

## 追加リソース

- [reTerminal DM データシート](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
- [reTerminal DM ユーザーマニュアル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)
- [reTerminal DM 回路図設計 & PCB 設計 & Gerber ファイル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal_DM_schematic_design_files.zip)
- [reTerminal DM 構造設計ファイル.stp](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
