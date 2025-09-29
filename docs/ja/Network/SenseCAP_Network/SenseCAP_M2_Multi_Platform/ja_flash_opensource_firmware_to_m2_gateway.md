---
description: このwikiでは、M2ゲートウェイ用のオープンソースLoRaWAN®ファームウェアをフラッシュする方法をガイドします。オープンソースLoRaWAN®ファームウェアに基づいて、M2ゲートウェイを深くカスタマイズできます。
title: M2ゲートウェイにオープンソースファームウェアをフラッシュする
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /ja/flash_opensource_firmware_to_m2_gateway
last_update:
  date: 4/22/2025
  author: Leo
---

SenseCAP M2ゲートウェイは、成熟したハードウェアソリューションMT7628とSemtech SX1302ベースバンドLong Rangeチップを搭載した、LoRaゲートウェイのコスト効率的なソリューションです。特定のモデルは、工場設定の周波数帯域（EU868/US915/AS923/AU915）、オプションモジュール（4G/GPS）、およびサポートされるLoRaネットワーク（LoRaWAN®/Heliumネットワーク）によって区別されます。

このwikiでは、M2ゲートウェイ用のオープンソースファームウェアをフラッシュする方法をガイドします。オープンソースファームウェアに基づいて、追加機能の追加や動作帯域の変更（アンテナは帯域に適応させる必要があります）など、M2ゲートウェイを深くカスタマイズできます。

:::danger Warning
オープンソースファームウェアをフラッシュした後、**工場出荷時ファームウェア**に**戻すことはできません**。

Seeed studioは、ユーザーが**オープンソースファームウェアまたはサードパーティファームウェアを使用**することによって引き起こされるデバイスの損傷について**責任を負いません**。
:::

## サポート製品リスト

- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302-4G)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><span> <b>M2 Data-Only LoRaWAN Indoor Gateway(SX1302)</b></span></a>

## ファームウェアの準備

### プリビルドファームウェアのダウンロード

オープンソースファームウェアを手軽に体験したい場合は、コンパイル済みのファームウェアを提供しています。<a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT/Release</span></a>からダウンロードできます。

:::tip Note
.binファイルの接尾辞をチェックして、ファームウェアがお使いのM2ゲートウェイと互換性があることを確認してください。

例：**openwrt-...-EU868-4G.bin**ファームウェアは、**EU868帯域で動作し4Gモジュールを搭載した**M2ゲートウェイ用にコンパイルされています。
:::

### ファームウェアのビルド

お使いのゲートウェイがプリビルドファームウェアと互換性がない場合、またはさらに開発を進めたい場合は、以下の手順で独自のファームウェアをビルドできます。

独自のファームウェアをビルドするには、**GNU/Linux、BSDまたはMacOSXシステム**（大文字小文字を区別するファイルシステムが必要）が必要です。Cygwinは大文字小文字を区別するファイルシステムがないためサポートされていません。

**ステップ1：** <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT</span></a>からソースコードをクローンします。

```git
git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git
```

**ステップ 2:** 前提条件となるパッケージをインストールします。<a  href="https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem" target="_blank"><span> Build system setup</span></a>を参照してください

:::caution Note
以下の手順は**非rootユーザー**で実行してください。
:::

**ステップ 3:** ソースコードフォルダに移動し、`./scripts/feeds update -a`を実行してfeeds.conf / feeds.conf.defaultで定義されたすべての最新パッケージ定義を取得します

**ステップ 4:** `./scripts/feeds install -a`を実行して、取得したすべてのパッケージのシンボリックリンクをpackage/feeds/にインストールします

**ステップ 5:** `cp diffconfig-sensecap-general .config`を実行してSenseCAP diffファイルを使用し、`make defconfig`を実行して完全な設定を展開します

**ステップ 6:** `make menuconfig`を実行してSenseCAP ハードウェア情報を選択します

- SenseCAP Hardware->Have 4G（4Gハードウェアが含まれているかどうか）

- SenseCAP Hardware->Have GPS（GPSハードウェアが含まれているかどうか）

- SenseCAP Hardware->REGION（デフォルトのREGIONを選択）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png" alt="pir" width={800} height="auto" /></p>

**ステップ 7:** `make`を実行してファームウェアをビルドします

これにより、すべてのソースがダウンロードされ、クロスコンパイルツールチェーンがビルドされ、その後ターゲットシステム用にGNU/Linuxカーネルと選択されたすべてのアプリケーションがクロスコンパイルされます

コンパイル後、`<prj>/bin/targets/ramips/mt76x8/`ディレクトリに`openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin`という名前のファームウェアが見つかります

## ファームウェアのフラッシュ

ゲートウェイにファームウェアをフラッシュする方法は3つあります

### Luci経由でファームウェアをフラッシュ

Luciにログインし、**System** > **Backup/Flash Firmware**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png" alt="pir" width={800} height="auto" /></p>

下にスクロールして**Local upgrade**に移動し、**Flash image...**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png" alt="pir" width={800} height="auto" /></p>

フォルダを参照してファームウェアをアップロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png" alt="pir" width={800} height="auto" /></p>

アップロードが完了したら、アップロードされたファームウェア情報が正しいことを確認し、**Continue**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png" alt="pir" width={800} height="auto" /></p>

その後、ゲートウェイはファームウェアのインストールを開始し、LEDはインストールが完了するまでオレンジ色のゆっくりとした点滅状態になります。

### TFTP経由でファームウェアをフラッシュ

開始する前に、コンピューターにTFTPサーバーツールをインストールし、適切なディレクトリにファームウェアを配置する必要があります。

**ステップ 1:** Type-Cケーブルを使用してデバイスをコンピューターに接続し、ネットワークケーブルを使用してデバイスとコンピューターを同じLANに配置します。

**ステップ 2:** `USB-SERIAL CH340`という名前のシリアルポートを使用して**ボーレート57600**でデバイスに接続します。

**ステップ 3:** デバイスを再起動します。デバイスがubootに入ったら、**コマンド2を選択**してシステム更新に入ります。

**ステップ 4:** **デバイスip**を入力します。デバイスipネットワークセグメントは自分のネットワークのネットワークセグメントである必要があります。**サーバーip**を入力します。これはコンピューターのIPです。フラッシュする**ファームウェアの名前**を入力します（ファイル拡張子を含める必要があります）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png" alt="pir" width={800} height="auto" /></p>

**ステップ 5:** ファームウェア更新の完了を待ちます。ゲートウェイはファームウェアのインストールを開始し、LEDはインストールが完了するまでオレンジ色のゆっくりとした点滅状態になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png" alt="pir" width={800} height="auto" /></p>

### シリアル経由でファームウェアをフラッシュ

:::tip
以下の手順を開始する前に、[TeraTerm](https://github.com/TeraTermProject/teraterm/releases)の最新バージョンをダウンロードすることをお勧めします。このwikiの以下の操作はすべてTeraTermに基づいています。
:::

**ステップ 1:** Type-Cケーブルを使用してデバイスをコンピューターに接続します。

**ステップ 2:** `USB-SERIAL CH340`という名前のシリアルポートを使用して**ボーレート57600**でデバイスに接続します。

**ステップ 3:** デバイスを再起動します。デバイスがubootに入ったら、**コマンド0を選択**してシステム更新に入ります。

**ステップ 4:** ボーレートを230400に切り替え、ENTERを押します。デバイスは`Ready for binary (kermit) download to 0x80100000 at 230400 bps...`と表示します

**ステップ 5:** kermitプロトコルを使用してファームウェアをアップロードします。Teratermはkermit転送ツールを提供しています。以下の画像を参考にファームウェアをアップロードできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**ステップ 6:** ファームウェアのアップロードが完了するまで待ちます。その後、デバイスは`Switch baudrate to 57600 bps and press ESC...`と表示します。デバイスの指示に従ってください。その後、デバイスは自動的にファームウェアをインストールして再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource11.png" alt="pir" width={800} height="auto" /></p>

## コンソールへのログイン

ファームウェアがインストールされると、デバイスは自動的にAPホットスポットを開き、名前は **SenseCAP_XXXX** になります

携帯電話またはコンピューターを使用してホットスポットに接続します。パスワードは不要です

ブラウザで **192.168.168.1** を入力してLuCIインターフェースに入ります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png" alt="pir" width={800} height="auto" /></p>

ユーザー名 **root** と **パスワードなし** でコンソールにログインします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png" alt="pir" width={800} height="auto" /></p>

## リソース

- \[**Website**\] <a  href="https://koen.vervloesem.eu/blog/how-to-install-alternative-firmware-to-the-sensecap-m2-data-only-lorawan-indoor-gateway/" target="_blank"><span> How to install alternative firmware to the SenseCAP M2 Data Only LoRaWAN Indoor Gateway - By Koen Vervloesem</span></a>
- \[**Website**\] <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> GitHub-Seeed-Solution/Lora_Gateway_OpenWRT</span></a>
- \[**Website**\] <a  href="https://openwrt.org/" target="_blank"><span> OpenWrt offical website</span></a>
- \[**PDF**\] <a  href="https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf" target="_blank"><span> M2 Gateway Hardware Description</span></a>

## 技術サポート

**オープンソースファームウェアでお困りですか？以下のDiscordリンクからコミュニティメンバーとお気軽にディスカッションしてください。**

<div class="button_tech_support_container">
<a href="https://discord.gg/nFByJZnC5H" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
