---
description: reComputerでInfineon Wi-Fiモジュールを使用する
title: reComputerでInfineon Wi-Fiモジュールを使用する
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 01/10/2024
  author: Youjiang
---

## はじめに

このドキュメントでは、reComputer J4012でInfineonのWi-Fi 6/6Eモジュールを使用する方法を学習します。

## reComputer

reComputer J4012は、Jetson Orin NX 16GBを搭載した強力でコンパクトなインテリジェントエッジボックスで、エッジに最大100TOPSの最新AI性能をもたらします。Jetson Xavier NXの最大5倍、Jetson AGX Xavierの最大3倍の性能を提供します。NVIDIA Ampere™ GPUアーキテクチャと64ビット動作機能を組み合わせ、Orin NXは高度なマルチファンクションビデオ・画像処理とNVIDIA Deep Learning Acceleratorsを統合しています。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## Infineon Wi-Fiモジュール

InfineonのWi-Fiソリューションは、Wi-Fi 6/6E機能をサポートし、トライバンド対応（2.4G、5G、6G）です。その機能により、範囲、電力効率、ネットワークの堅牢性、セキュリティが向上し、総部品表コストとボードスペースが削減されます。このソリューションは、混雑したネットワーク環境で優れた高品質ビデオ/オーディオストリーミングとシームレスな接続体験を提供し、6Gスペクトラムで動作することで遅延を大幅に削減します。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">（画像はEmbedded Artistsより：Embedded ArtistsとMurataが共同開発した2EA M.2モジュールは、評価、統合、使いやすさのために設計されています。）</div>


## ハードウェア接続
**ステップ1.** 使用するすべての材料を準備します。
- Jetpack 5.1.2を搭載したreComputer J4012
- Infineon Wi-Fiモジュール
- 2 x IPEX to SMA Female外部アンテナアダプターとWIFIモジュール用SMA Maleアンテナ
- プラスドライバーとネジ

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**ステップ2.** ワイヤレスモジュールをM.2 Key Eポートに挿入します。そして、2つのIPEXプラグをワイヤレスモジュールの対応するソケットに挿入します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## ソフトウェアドライバーのインストール

**ステップ1.** Infineon [WiFiドライバー](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC)をダウンロードし、reComputerにアップロードします。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**ステップ2.** 以下のコマンドを実行してInfineon WiFiドライバーを実行します。

Jetpack 5.1.x用：

```sh
sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

Jetpack 6用：

```sh
sudo rm /lib/modules/5.15.136-tegra/build

sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build

sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

ドライバーのコンパイルには時間がかかります。

その後、reComputerを再起動する必要があります：

```sh
sudo reboot
```

**ステップ3.** 以下のコマンドを使用してwlan0インターフェースが利用可能かどうかを確認します：

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::caution
  以前に`sudo apt-get install iwlwifi-modules -y`でIntelワイヤレスドライバーをインストールした場合は、続行する前にこのパッケージをアンインストールする必要があります。バックポート互換性に関する既知の問題があります。

  IntelとInfineonの両方のワイヤレスドライバーはバックポートcompatモジュールを使用しているため、すべてをインストールすることはできません。そうしないと、カーネルが`compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)`のエラーを発生させます。

  Intelのワイヤレスドライバーをアンインストールすることで、Infineonのワイヤレスドライバーを使用できます：

  ```sh
  sudo apt-get remove backport-iwlwifi-dkms
  ```
  Infineonのワイヤレスドライバーをアンインストールすることで、Intelのワイヤレスドライバーを使用できます：
  ```sh
  sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
  ```

:::

**ステップ4.** Wi-Fiネットワークに接続します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## 実行可能性テスト
ブラウザを使用してWebページを開き、ネットワークが正常に動作しているかどうかをテストします。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## 技術サポート

お気軽に[フォーラム](https://forum.seeedstudio.com/)に問題を投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>