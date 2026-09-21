---

description: このガイドでは、MeshCore をベースにした低消費電力 IoT センサーネットワークを構築するために、Wio Tracker L1 で EasySkyMesh を使用する方法を説明します。
title: EasySkyMesh IoT ファームウェア
keywords:
   - EasySkyMesh
   - MeshCore
   - Wio Tracker L1
   - LoRa Mesh
   - MeshCore Sensor
   - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_MeshCore_Device_Low_Power_Consumption_L1_Pro.png
slug: /easyskymesh_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
   date: 9/17/2026
   author: Michelle Huang
createdAt: 2026-09-17
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/easyskymesh_wio_tracker_l1/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio Tracker L1 向け EasySkyMesh IoT ファームウェア

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) は [MeshCore](https://meshcore.io/) をベースにしたコミュニティプロジェクトで、低消費電力ファームウェアの構築に重点を置いています。このファームウェアにより、L1 Pro は MeshCore の通信機能を維持しながら、**18 日間**のバッテリー寿命を実現できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshProject.png" style={{width:900, height:'auto'}}/></div>

EasySkyMesh は、**省電力とセンサーデータ収集**のための機能を追加します。センサーデータは MeshCore ノードによって収集され、既存の MeshCore ネットワークを通じて送信できます。特に次の用途に有用です：

* 低消費電力センサーネットワーク
* 遠隔監視
* 太陽光発電による展開
* 環境モニタリング
* インフラ監視
* IoT プロトタイピング

## ファームウェアの書き込み

### ハードウェアの準備

ファームウェアを書き込む前に、次のものを準備します：

* Wio Tracker L1。[Click here](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) から入手できます。
* USB Type-C ケーブル
* コンピュータ

USB Type-C ポートを使用して、Wio Tracker L1 をコンピュータに接続します。

### EasySkyMesh ファームウェアのダウンロード

[EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases) ページにアクセスします。お使いのボードをサポートするリリースを選択します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshFirmwareDownload.png" style={{width:600, height:'auto'}}/></div>


EasySkyMesh のリリースでは、ハードウェアやアップグレードシナリオの違いに応じて、異なるファームウェアファイルが提供される場合があります。新規インストールの場合、プロジェクトは一般的にクリーンインストール用のファームウェアイメージを提供します。既存のインストールがある場合、既存の設定を保持したいときはアップグレード用ファームウェアを使用してください。


### ファームウェアを書き込む

EasySkyMesh プロジェクトでは、サポートされているデバイスに対して MeshCore Web Flasher の使用を推奨しています。

**Step1:** [MeshCore Web Flasher](https://meshcore.io/flasher) を開きます。

**Step2:** **Custom Firmware** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Step3:** EasySkyMesh のファームウェアファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Choose_zip.png" style={{width:600, height:'auto'}}/></div>

**Step4:** 必要に応じて DFU モードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Enter_DFU.png" style={{width:900, height:'auto'}}/></div>

**Step5:** 書き込みを開始します。書き込みプロセスが完了するまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Flash.png" style={{width:900, height:'auto'}}/></div>

**Step6:** デバイスを再起動します。

## 省電力機能

このプロジェクトでは、さまざまな MeshCore ボード向けに最適化された PowerSaving ファームウェアリリースを提供しています。EasySkyMesh のリリースでは、ESP32 および nRF52 ベースのデバイス向けに省電力機能が導入されており、さらに異なる MeshCore ロール向けの電源管理機能も追加されています。

### Companion ファームウェア

すべての PowerSaving 機能はデフォルトで有効になっています。RX PowerSaving は「balanced」に設定されています。

稼働時間は、m（分）、h m（時間 分）、d h（日 時間）で、OLED のバッテリーアイコンの左側に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Runtime_Display.png" style={{width:600, height:'auto'}}/></div>

### Repeater & Room Server ファームウェア

PowerSaving はデフォルトではオフになっています。MeshCore CLI を使用して PowerSaving を有効にできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

PowerSaving を有効にするには、次のようにします：

```text
powersaving on
```

現在の PowerSaving ステータスを確認するには：

```text
powersaving
```

さらに多くのコマンドを使用するには、[Click here](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers) を参照してください。

## センサーサポート

EasySkyMesh は MeshCore を拡張してセンサーサポートを追加し、センサーの測定値を収集して既存の MeshCore ネットワークを通じて送信できるようにします。現在、このプロジェクトでは、いくつかの一般的な I2C センサーのサポートが文書化されており、次のものが含まれます：

| センサー        | 測定項目                                  | I2C アドレス |
| ------------- | --------------------------------------- | ----------- |
| AHT10 / AHT20 | 温度 / 湿度                             | `0x38`      |
| BME280        | 温度 / 湿度 / 気圧                      | `0x76`      |
| BME680        | 温度 / 湿度 / 気圧 / ガス               | `0x76`      |
| BMP280        | 温度 / 気圧                             | `0x76`      |
| SHTC3         | 温度 / 湿度                             | `0x70`      |
| SHT4X         | 温度 / 湿度                             | `0x44`      |
| LPS22HB       | 温度 / 気圧                             | `0x5C`      |
| INA3221       | 電圧 / 電流 / 電力                      | `0x42`      |
| INA219        | 電圧 / 電流 / 電力                      | `0x40`      |
| INA260        | 電圧 / 電流 / 電力                      | `0x41`      |
| INA226        | 電圧 / 電流 / 電力                      | `0x44`      |
| MLX90614      | 非接触温度                              | `0x5A`      |
| VL53L0X       | 距離                                    | `0x29`      |

 一部のファームウェアバージョンでは、BME280、BME680、BMP280 などのセンサーに対して I2C アドレスを自動的に選択できます。サポートされている EasySkyMesh バージョンでは、`sensor` CLI コマンドを使用して I2C と GPS シリアルピンを確認できます：

```text
sensor
```


## トラブルシューティング

### デバイスが Flasher に表示されない

1. 使用している USB ケーブルがデータ転送に対応していることを確認します。
2. Wio Tracker L1 を再接続します。
3. 再度 DFU モードに入ります。
4. Web Flasher をリフレッシュします。
5. 別の USB ポートまたはケーブルを試します。

### センサーが検出されない

次を確認します：
1. VCC と GND の配線。
2. SDA と SCL の配線。
3. センサーの動作電圧。
4. I2C アドレス。
5. EasySkyMesh ファームウェアのバージョン。
6. センサーがサポート対象としてリストされているかどうか。


問題が解決しない場合は、最新のドキュメントと issue を確認するために、[EasySkyMesh GitHub repository](https://github.com/IoTThinks/EasySkyMesh) を参照してください。

## リソース

* [EasySkyMesh GitHub Repository](https://github.com/IoTThinks/EasySkyMesh)
* [EasySkyMesh Flashing Instructions](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [EasySkyMesh Sensor Instructions](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

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