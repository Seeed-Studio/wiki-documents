---
description: このガイドでは、MeshCore に基づいた低消費電力 IoT センサーネットワークを構築するために、SenseCAP T1000-E で EasySkyMesh を使用する方法を説明します。
title: 省電力
keywords:
  - EasySkyMesh
  - MeshCore
  - SenseCAP T1000-E
  - LoRa Mesh
  - MeshCore Sensor
  - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymesht1000e.png
slug: /easyskymesh_t1000e
sku: 114993369
sidebar_position: 1
last_update:
  date: 11/13/2026
  author: Michelle Huang
createdAt: 2026-11-13T00:00:00.000Z
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/ja/easyskymesh_t1000e/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP T1000-E 向け EasySkyMesh IoT ファームウェア

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) は、低消費電力ファームウェアの構築に焦点を当てた [MeshCore](https://meshcore.io/) ベースのコミュニティプロジェクトです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymesht1000e.png" style={{width:600, height:'auto'}}/></div>

EasySkyMesh は、**省電力とセンサーデータ収集**のための機能を追加します。センサーデータは MeshCore ノードによって収集され、既存の MeshCore ネットワークを介して送信できます。特に次の用途に有用です：

* 低消費電力センサーネットワーク
* 遠隔監視
* ソーラー電源による展開
* 環境モニタリング
* インフラ監視
* IoT プロトタイピング

## ファームウェアの書き込み

### ハードウェアの準備

ファームウェアを書き込む前に、次のものを準備します：

* SenseCAP T1000-E。[こちらをクリック](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)して入手します。
* USB ケーブル
* コンピュータ

T1000-E を USB Type-C ポートでコンピュータに接続します。

### EasySkyMesh ファームウェアのダウンロード

[EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases) ページに移動します。使用するボードをサポートするリリースを選択します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymesht1000efirmware.png"style={{width:600, height:'auto'}}/></div>


EasySkyMesh のリリースでは、ハードウェアやアップグレードシナリオの違いに応じて、異なるファームウェアファイルが提供される場合があります。新規インストールの場合、プロジェクトは一般的にクリーンインストール用のファームウェアイメージを提供します。既存のインストールがある場合、既存の設定を保持したいときはアップグレード用ファームウェアを使用してください。


### ファームウェアを書き込む

EasySkyMesh プロジェクトでは、サポートされているデバイスに対して MeshCore Web Flasher の使用を推奨しています。

**Step1:** [MeshCore Web Flasher](https://meshcore.io/flasher) を開きます。

**Step2:** **Custom Firmware** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Step3:** EasySkyMesh のファームウェアファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/t1000-efolder.png" style={{width:600, height:'auto'}}/></div>

**Step4:** 必要に応じて DFU モードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/t1000enter.png" style={{width:900, height:'auto'}}/></div>

**Step5:** 書き込みを開始します。書き込みプロセスが完了するまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/t1000flash.png" style={{width:900, height:'auto'}}/></div>

**Step6:** デバイスを再起動します。

## 省電力

このプロジェクトは、さまざまな MeshCore ボード向けに最適化された PowerSaving ファームウェアリリースを提供します。EasySkyMesh のリリースでは、ESP32 および nRF52 ベースのデバイス向けに省電力機能が導入されており、さらに異なる MeshCore ロール向けの電源管理機能も追加されています。

### Companion ファームウェア

すべての PowerSaving 機能はデフォルトで有効になっています。RX PowerSaving は「balanced」に設定されています。

### Repeater & Room Server ファームウェア

PowerSaving はデフォルトではオフになっています。MeshCore CLI を使用して PowerSaving を有効にできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

PowerSaving を有効にするには：

```text
powersaving on
```

現在の PowerSaving ステータスを確認するには：

```text
powersaving
```

さらに多くのコマンドを使用するには、[こちらをクリック](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers)してください。

## トラブルシューティング

### デバイスが Flasher に表示されない

1. 使用している USB ケーブルがデータ転送に対応していることを確認します。
2. T1000-E を再接続します。
3. 再度 DFU モードに入ります。
4. Web Flasher をリフレッシュします。
5. 別の USB ポートまたはケーブルを試します。


問題が解決しない場合は、最新のドキュメントや Issue を確認するために [EasySkyMesh GitHub リポジトリ](https://github.com/IoTThinks/EasySkyMesh) を参照してください。

## リソース

* [EasySkyMesh GitHub リポジトリ](https://github.com/IoTThinks/EasySkyMesh)
* [EasySkyMesh ファームウェア書き込み手順](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [EasySkyMesh センサー追加手順](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>