---
description: reTerminal DM での Azure IoT Edge Runtime
title: reTerminal DM での Azure IoT Edge Runtime
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM_Azure_IoT
last_update:
  date: 05/15/2025
  author: Takashi
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Debian 11 (ARM32v7) を実行する reTerminal DM デバイスで Azure IoT Edge Runtime を実行する

<div style={{textAlign:'center'}}><iframe width={270} height={358} frameBorder={0} src="https://devicecatalog.azure.com/embed/c40637ad-a9bf-494e-8975-f4d37e43cf6f" title="reTerminal DM - Azure Certified Device" /></div>

## はじめに

reTerminal DM は、Raspberry Pi CM4 を搭載したパネル PC、HMI、PLC、IIoT ゲートウェイのオールインワンデバイスであり、10.1 インチの IP65 フロントパネルと豊富な産業用インターフェースを備えています。また、Node-RED がネイティブに統合されており、Raspberry Pi ベースのソフトウェアエコシステムをサポートしています。

このドキュメントでは、Debian 11 (ARM32v7) を実行する reTerminal DM デバイスを Azure IoT Edge Runtime とデバイス管理に接続する方法について説明します。このマルチステッププロセスには以下が含まれます：

- Azure IoT Hub の設定
- IoT デバイスの登録
- デバイス管理機能をテストするためのクライアントコンポーネントのビルドとデプロイ

## ステップ 1: 前提条件

プロセスを開始する前に、以下の項目を準備してください：

1. [Azure アカウントを作成する](https://azure.microsoft.com/en-us/free/)
2. [Azure ポータルにサインアップする](https://portal.azure.com/#home)
3. [IoT Hub をセットアップする](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/setup_iothub.md)
4. [Edge デバイスを追加する](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux)
5. [Edge モジュールを追加する](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux?view=iotedge-2018-06#deploy-a-module)

## ステップ 2: デバイスの準備

1. デバイスの電源を入れます。12～24V の電源を 2 ピンの電源端子ブロックコネクタに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE.png" style={{width:300, height:'auto'}}/></div>

2. OS のバージョン、ビット数、アーキテクチャを確認します。

```
$ lsb_release -irc
Distributor ID: Raspbian
Release: 11
Codename: bullseye
$ getconf LONG_BIT
32
$ uname -m
armv7l
```

:::tip
OS が Debian 11 (Bullseye) より古い場合、または LOG_BIT が 64 の場合は、最新の Raspberry Pi OS 32 ビットをインストールしてください。[Raspbian OS のフラッシュ手順](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os)を参照してください。
:::

:::tip
`uname -m` が `aarch64` の場合、OS は 64 ビットカーネルを実行しています。32 ビットカーネルに変更してください。[32 ビット OS ドライバ](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#32-bit-os-driver)を参照してください。
:::

## ステップ 3: デバイスでの Azure IoT Edge の手動テスト

### 3.1 Edge Runtime の有効化

1. [デバイスを登録する](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#register-your-device)

2. [登録済みデバイスを表示し、プロビジョニング情報を取得する](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#view-registered-devices-and-retrieve-provisioning-information)

3. [IoT Edge をインストールする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-iot-edge)

```
$ curl https://packages.microsoft.com/config/debian/11/packages-microsoft-
prod.deb > ./packages-microsoft-prod.deb
$ sudo apt install ./packages-microsoft-prod.deb
$ rm ./packages-microsoft-prod.deb
```

4. [コンテナエンジンをインストールする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-a-container-engine)

```
$ sudo apt-get update
$ sudo apt-get install moby-engine
$ sudo vi /etc/docker/daemon.json
$ sudo systemctl restart docker
```

以下の例のように、デフォルトのロギングドライバをローカルロギングドライバに設定します。

```cpp
"log-driver": "local"
```

5. [IoT Edge ランタイムをインストールする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-the-iot-edge-runtime)

```
$ sudo apt-get update
$ sudo apt-get install aziot-edge defender-iot-micro-agent-edge
```

6. [クラウド ID でデバイスをプロビジョニングする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#provision-the-device-with-its-cloud-identity)

```
$ sudo iotedge config mp --connection-string 'PRIMARY_CONNECTION_STRING'
$ sudo iotedge config apply
```

### 3.2 iotedge デーモンの確認

IoT Edge デバイスでコマンドプロンプトを開き、Azure IoT Edge デーモンが実行中であることを確認します。

```
sudo iotedge system status
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE2.png" style={{width:900, height:'auto'}}/></div>

IoT Edge デバイスでコマンドプロンプトを開き、クラウドからデプロイされたモジュールが IoT Edge デバイス上で実行中であることを確認します。

```
$ sudo iotedge list
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE3.png" style={{width:900, height:'auto'}}/></div>

Azure のデバイス詳細ページで、ランタイムモジュール（edgeAgent、edgeHub、SimulatedTemperatureSensor モジュール）が実行中の状態であることを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE4.png" style={{width:900, height:'auto'}}/></div>

## 追加リンク

- [Azure IoT Edge とは](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge)
- [Azure IoT Edge 対応プラットフォーム](https://docs.microsoft.com/en-us/azure/iot-edge/support)
- [独自の IoT Edge モジュールを開発する](https://docs.microsoft.com/en-us/azure/iot-edge/module-development)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>