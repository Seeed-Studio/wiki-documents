---
description: Azure IoT Edge Runtime on reTerminal DM
title: Azure IoT Edge Runtime on reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM_Azure_IoT
last_update:
  date: 11/6/2023
  author: Takashi
---

# Debian 11 (ARM32v7) を実行する reTerminal DM デバイスで Azure IoT Edge Runtime を実行する

<div style={{textAlign:'center'}}><iframe width={270} height={358} frameBorder={0} src="https://devicecatalog.azure.com/embed/c40637ad-a9bf-494e-8975-f4d37e43cf6f" title="reTerminal DM - Azure Certified Device" /></div>

## はじめに

reTerminal DM は、Raspberry Pi CM4 を搭載したパネル PC、HMI、PLC、IIoT ゲートウェイのオールインワンデバイスで、10.1インチの IP65 フロントパネルと豊富な産業用インターフェースを備え、Node-RED とネイティブに統合され、Raspberry Pi ベースのソフトウェアエコシステムをサポートしています。

このドキュメントでは、Azure IoT Edge Runtime がプリインストールされた Debian 11 (ARM32v7) を実行する reTerminal DM デバイスを Azure IoT とデバイス管理に接続する方法について説明します。この複数ステップのプロセスには以下が含まれます：

- Azure IoT Hub の設定
- IoT デバイスの登録
- デバイス管理機能をテストするためのクライアントコンポーネントのビルドとデプロイ

## ステップ 1: 前提条件

プロセスを開始する前に、以下の項目を準備しておく必要があります：

1. [Azure アカウントを作成する](https://azure.microsoft.com/en-us/free/)
2. [Azure Portal にサインアップする](https://portal.azure.com/#home)
3. [IoT hub をセットアップする](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/setup_iothub.md)
4. [Edge デバイスを追加する](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux)
5. [Edge モジュールを追加する](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux?view=iotedge-2018-06#deploy-a-module)

## ステップ 2: デバイスの準備

1. デバイスの電源を入れます。12~24V 電源を 2 ピン電源端子台コネクタに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE.png" style={{width:300, height:'auto'}}/></div>

2. OS バージョン、ビット数、アーキテクチャを確認します。

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
お使いのOSがDebian 11 (Bullseye)より古い場合、またはLOG_BITが64の場合は、最新のRaspberry Pi OS 32-bitをインストールしてください。[Raspbian OSフラッシュ手順](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os)を参照してください。
:::

:::tip
uname -mがaarch64の場合、お使いのOSは64-bitカーネルで動作しています。32-bitカーネルに変更してください。[32-bit OSドライバー](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#32-bit-os-driver)を参照してください。
:::

## ステップ3: デバイス上でのAzure IoT Edgeの手動テスト

### 3.1 Edge Runtimeの有効化

1. [デバイスを登録する](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#register-your-device)

2. [登録されたデバイスを表示してプロビジョニング情報を取得する](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#view-registered-devices-and-retrieve-provisioning-information)

3. [IoT Edgeをインストールする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-iot-edge)

```
$ curl https://packages.microsoft.com/config/debian/11/packages-microsoft-
prod.deb > ./packages-microsoft-prod.deb
$ sudo apt install ./packages-microsoft-prod.deb
$ rm ./packages-microsoft-prod.deb
```

4. [コンテナエンジンをインストールする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-a-container-engine)

```
sudo apt-get update
sudo apt-get install moby-engine
sudo vi /etc/docker/daemon.json
sudo systemctl restart docker
```

デフォルトのロギングドライバーを、以下の例に示すようにローカルロギングドライバーに設定してください。

```cpp
"log-driver": "local"
```

5. [IoT Edge ランタイムをインストールする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-the-iot-edge-runtime)

```
sudo apt-get update
sudo apt-get install aziot-edge defender-iot-micro-agent-edge
```

6. [デバイスにクラウドIDをプロビジョニングする](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#provision-the-device-with-its-cloud-identity)

```
sudo iotedge config mp --connection-string 'PRIMARY_CONNECTION_STRING'
sudo iotedge config apply
```

### 3.2 iotedge デーモンの確認

IoT Edge デバイスでコマンドプロンプトを開き、Azure IoT Edge デーモンが実行状態であることを確認してください

```
sudo iotedge system status
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE2.png" style={{width:900, height:'auto'}}/></div>

IoT Edge デバイスでコマンドプロンプトを開き、クラウドからデプロイされたモジュールが IoT Edge デバイス上で実行されていることを確認します

```
sudo iotedge list
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE3.png" style={{width:900, height:'auto'}}/></div>

Azureのデバイス詳細ページで、ランタイムモジュール - edgeAgent、edgeHub、および
SimulatedTemperatureSensorモジュールが実行中ステータスになっていることを確認できるはずです

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE4.png" style={{width:900, height:'auto'}}/></div>

## 追加リンク

- [Azure IoT Edgeとは](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge)
- [Azure IoT Edgeサポート対象プラットフォーム](https://docs.microsoft.com/en-us/azure/iot-edge/support)
- [独自のIoT Edgeモジュールを開発する](https://docs.microsoft.com/en-us/azure/iot-edge/module-development)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
