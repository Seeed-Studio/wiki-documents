---
description: Infineon Wi-Fi モジュールを reComputer で使用する方法
title: Infineon Wi-Fi モジュールを reComputer で使用する方法
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

このドキュメントでは、Infineon の Wi-Fi 6/6E モジュールを reComputer J4012 で使用する方法を学びます。

## reComputer

reComputer J4012 は、Jetson Orin NX 16GB を搭載した強力でコンパクトなインテリジェントエッジボックスで、エッジに最大 100 TOPS の最新 AI パフォーマンスを提供します。これは、Jetson Xavier NX の最大 5 倍、Jetson AGX Xavier の最大 3 倍の性能を提供します。NVIDIA Ampere™ GPU アーキテクチャと 64 ビットの動作能力を組み合わせた Orin NX は、高度な多機能ビデオおよび画像処理、そして NVIDIA Deep Learning Accelerators を統合しています。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## Infineon Wi-Fi モジュール

Infineon の Wi-Fi ソリューションは Wi-Fi 6/6E 機能をサポートし、トライバンド対応（2.4G、5G、6G）です。この機能により、範囲、電力効率、ネットワークの堅牢性、セキュリティが向上し、総部品コストと基板スペースが削減されます。このソリューションは、混雑したネットワーク環境での高品質なビデオ/オーディオストリーミングとシームレスな接続体験を提供し、6G スペクトラムで動作することで遅延を大幅に削減します。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(Embedded Artists 提供の画像: Embedded Artists と Murata が共同開発した 2EA M.2 モジュールは、評価、統合、使いやすさを目的としています。)</div>


## ハードウェア接続
**ステップ 1.** 使用するすべての材料を準備します。
- Jetpack 5.1.2 を搭載した reComputer J4012
- Infineon Wi-Fi モジュール
- 2 x IPEX から SMA メス外部アンテナアダプターおよび Wi-Fi モジュール用 SMA オスアンテナ
- プラスドライバーとネジ

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**ステップ 2.** ワイヤレスモジュールを M.2 Key E ポートに挿入します。そして、2 つの IPEX プラグをワイヤレスモジュールの対応するソケットに挿入します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## ソフトウェアドライバーのインストール

**ステップ 1.** Infineon の [WiFi ドライバー](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC) をダウンロードして reComputer にアップロードします。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**ステップ 2.** 次のコマンドを実行して Infineon WiFi ドライバーを実行します。

Jetpack 5.1.x の場合:

```sh
sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

Jetpack 6 の場合:

```sh
sudo rm /lib/modules/5.15.136-tegra/build

sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build

sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

ドライバーのコンパイルにはしばらく時間がかかります。

その後、reComputer を再起動する必要があります:

```sh
sudo reboot
```

**ステップ 3.** 次のコマンドを使用して wlan0 インターフェースが利用可能かどうかを確認します:

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::caution
  以前に `sudo apt-get install iwlwifi-modules -y` を使用して Intel ワイヤレスドライバーをインストールした場合は、続行する前にこのパッケージをアンインストールする必要があります。バックポートの互換性に関する既知の問題があります。

  Intel と Infineon の両方のワイヤレスドライバーはバックポート互換モジュールを使用しているため、両方をインストールすることはできません。そうしないと、カーネルが `compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)` というエラーを発生させます。

  Intel のワイヤレスドライバーをアンインストールすることで、Infineon のワイヤレスドライバーを使用できます:

  ```sh
  sudo apt-get remove backport-iwlwifi-dkms
  ```
  Infineon のワイヤレスドライバーをアンインストールすることで、Intel のワイヤレスドライバーを使用できます:
  ```sh
  sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
  ```

:::

**ステップ 4.** Wi-Fi ネットワークに接続します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## 実現可能性テスト
ブラウザを使用してウェブページを開き、ネットワークが正常に動作しているかどうかをテストします。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## 技術サポート

問題がある場合は、ぜひ [フォーラム](https://forum.seeedstudio.com/) に投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>