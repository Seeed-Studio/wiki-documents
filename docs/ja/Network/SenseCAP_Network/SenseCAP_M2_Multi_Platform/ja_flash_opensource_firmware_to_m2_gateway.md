---
description: このWikiでは、M2ゲートウェイにオープンソースのLoRaWAN®ファームウェアをフラッシュする方法を説明します。オープンソースのLoRaWAN®ファームウェアを基に、M2ゲートウェイを深くカスタマイズすることができます。
title: M2ゲートウェイにオープンソースファームウェアをフラッシュする
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /ja/flash_opensource_firmware_to_m2_gateway
last_update:
  date: 05/15/2025
  author: Leo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP M2ゲートウェイは、成熟したハードウェアソリューションMT7628とSemtech SX1302ベースバンドロングレンジチップを搭載した、コスト効率の高いLoRaゲートウェイソリューションを提供します。特定のモデルは、工場で設定された周波数帯（EU868/US915/AS923/AU915）、オプションモジュール（4G/GPS）、および対応するLoRaネットワーク（LoRaWAN®/Heliumネットワーク）によって区別されます。

このWikiでは、M2ゲートウェイにオープンソースファームウェアをフラッシュする方法を説明します。オープンソースファームウェアを基に、M2ゲートウェイを深くカスタマイズすることが可能です。例えば、追加機能を追加したり、動作帯域を変更したりすることができます（アンテナは帯域に適応する必要があります）。

:::danger 警告
オープンソースファームウェアをフラッシュした後、**工場出荷時のファームウェアに戻すことはできません**。

Seeed Studioは、ユーザーがオープンソースファームウェアまたはサードパーティファームウェアを使用したことによるデバイスの損傷について、**一切責任を負いません**。
:::

## 対応製品一覧

- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302-4G)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><span> <b>M2 Data-Only LoRaWAN Indoor Gateway(SX1302)</b></span></a>

## ファームウェアの準備

### 事前構築されたファームウェアをダウンロードする

オープンソースファームウェアを簡単に体験したい場合、いくつかのコンパイル済みファームウェアを提供しています。以下からダウンロードできます：<a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT/Release</span></a>

:::tip 注意
.binファイルの接尾辞を確認して、ファームウェアがM2ゲートウェイと互換性があることを確認してください。

例：**openwrt-...-EU868-4G.bin**ファームウェアは、**EU868帯域で4Gモジュールを搭載したM2ゲートウェイ**用にコンパイルされています。
:::

### ファームウェアを構築する

事前構築されたファームウェアがゲートウェイと互換性がない場合や、さらに開発したい場合は、以下の手順で独自のファームウェアを構築できます。

独自のファームウェアを構築するには、**GNU/Linux、BSD、またはMacOSXシステム**（ケースセンシティブなファイルシステムが必要）が必要です。Cygwinはケースセンシティブなファイルシステムがないためサポートされていません。

**ステップ1:** <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT</span></a>からソースコードをクローンします。

```git
git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git
```

**ステップ2:** 必要なパッケージをインストールします。詳細は<a  href="https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem" target="_blank"><span> Build system setup</span></a>を参照してください。

:::caution 注意
以下の手順は**非rootユーザー**で実行してください。
:::

**ステップ3:** ソースコードフォルダに移動し、`./scripts/feeds update -a`を実行してfeeds.conf / feeds.conf.defaultで定義された最新のパッケージ定義を取得します。

**ステップ4:** `./scripts/feeds install -a`を実行して、取得したすべてのパッケージのシンボリックリンクをpackage/feeds/にインストールします。

**ステップ5:** `cp diffconfig-sensecap-general .config`を実行してSenseCAPの差分ファイルを使用し、`make defconfig`を実行して完全な設定を展開します。

**ステップ6:** `make menuconfig`を実行してSenseCAPハードウェア情報を選択します。

- SenseCAP Hardware->Have 4G（4Gハードウェアを含むかどうか）
- SenseCAP Hardware->Have GPS（GPSハードウェアを含むかどうか）
- SenseCAP Hardware->REGION（デフォルトの地域を選択）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png" alt="pir" width={800} height="auto" /></p>

**ステップ7:** `make`を実行してファームウェアを構築します。

これにより、すべてのソースがダウンロードされ、クロスコンパイルツールチェーンが構築され、ターゲットシステム用にGNU/Linuxカーネルと選択したすべてのアプリケーションがクロスコンパイルされます。

コンパイル後、`openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin`という名前のファームウェアが`<prj>/bin/targets/ramips/mt76x8/`ディレクトリに生成されます。

## ファームウェアの書き込み

ゲートウェイにファームウェアを書き込む方法は以下の3つがあります。

### Luciを使用してファームウェアを書き込む

Luciにログインし、**System** > **Backup/Flash Firmware** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png" alt="pir" width={800} height="auto" /></p>

下にスクロールして **Local upgrade** に移動し、**Flash image...** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png" alt="pir" width={800} height="auto" /></p>

フォルダを参照してファームウェアをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png" alt="pir" width={800} height="auto" /></p>

アップロードが完了したら、アップロードされたファームウェア情報が正しいことを確認し、**Continue** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png" alt="pir" width={800} height="auto" /></p>

その後、ゲートウェイはファームウェアのインストールを開始し、インストールが完了するまでLEDがオレンジ色のゆっくり点滅状態になります。

### TFTPを使用してファームウェアを書き込む

開始する前に、コンピュータにTFTPサーバーツールをインストールし、適切なディレクトリにファームウェアを配置する必要があります。

**ステップ1:** Type-Cケーブルを使用してデバイスをコンピュータに接続し、ネットワークケーブルを使用してデバイスとコンピュータを同じLAN内に配置します。

**ステップ2:** シリアルポート `USB-SERIAL CH340` を使用してデバイスに接続し、**ボーレート57600**を設定します。

**ステップ3:** デバイスを再起動します。デバイスがubootに入ったら、**コマンド2を選択**してシステムアップデートに入ります。

**ステップ4:** **デバイスIP**を入力します（デバイスIPのネットワークセグメントは自身のネットワークセグメントである必要があります）。次に、**サーバーIP**（コンピュータのIP）を入力し、書き込むファームウェアの名前を入力します（ファイルの拡張子を含める必要があります）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png" alt="pir" width={800} height="auto" /></p>

**ステップ5:** ファームウェアの更新が完了するのを待ちます。ゲートウェイはファームウェアのインストールを開始し、インストールが完了するまでLEDがオレンジ色のゆっくり点滅状態になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png" alt="pir" width={800} height="auto" /></p>

### シリアルを使用してファームウェアを書き込む

:::tip
以下の手順を開始する前に、最新バージョンの[TeraTerm](https://github.com/TeraTermProject/teraterm/releases)をダウンロードすることをお勧めします。このWikiでの操作はすべてTeraTermに基づいています。
:::

**ステップ1:** Type-Cケーブルを使用してデバイスをコンピュータに接続します。

**ステップ2:** シリアルポート `USB-SERIAL CH340` を使用してデバイスに接続し、**ボーレート57600**を設定します。

**ステップ3:** デバイスを再起動します。デバイスがubootに入ったら、**コマンド0を選択**してシステムアップデートに入ります。

**ステップ4:** ボーレートを230400に切り替え、ENTERキーを押します。その後、デバイスは `Ready for binary (kermit) download to 0x80100000 at 230400 bps...` と表示します。

**ステップ5:** kermitプロトコルを使用してファームウェアをアップロードします。TeraTermにはkermit送信ツールが用意されています。以下の画像を参照してファームウェアをアップロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**ステップ6:** ファームウェアのアップロードが完了するのを待ちます。その後、デバイスは `Switch baudrate to 57600 bps and press ESC...` と表示します。デバイスの指示に従います。その後、デバイスは自動的にファームウェアをインストールし、再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource11.png" alt="pir" width={800} height="auto" /></p>

## コンソールへのログイン

ファームウェアがインストールされると、デバイスは自動的にAPホットスポットを開きます。ホットスポットの名前は **SenseCAP_XXXX** です。

スマートフォンまたはコンピュータを使用してホットスポットに接続してください。パスワードは不要です。

ブラウザで **192.168.168.1** を入力して、LuCIインターフェースにアクセスします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png" alt="pir" width={800} height="auto" /></p>

ユーザー名 **root** と **パスワードなし** でコンソールにログインしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png" alt="pir" width={800} height="auto" /></p>

## リソース

- \[**ウェブサイト**\] <a  href="https://koen.vervloesem.eu/blog/how-to-install-alternative-firmware-to-the-sensecap-m2-data-only-lorawan-indoor-gateway/" target="_blank"><span> SenseCAP M2 データ専用 LoRaWAN 室内ゲートウェイに代替ファームウェアをインストールする方法 - Koen Vervloesemによる</span></a>
- \[**ウェブサイト**\] <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> GitHub-Seeed-Solution/Lora_Gateway_OpenWRT</span></a>
- \[**ウェブサイト**\] <a  href="https://openwrt.org/" target="_blank"><span> OpenWrt公式ウェブサイト</span></a>
- \[**PDF**\] <a  href="https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf" target="_blank"><span> M2ゲートウェイハードウェア説明書</span></a>

## 技術サポート

**オープンソースファームウェアに関する問題がありますか？以下のDiscordリンクを通じてコミュニティメンバーと自由に議論してください。**

<div class="button_tech_support_container">
<a href="https://discord.gg/nFByJZnC5H" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>