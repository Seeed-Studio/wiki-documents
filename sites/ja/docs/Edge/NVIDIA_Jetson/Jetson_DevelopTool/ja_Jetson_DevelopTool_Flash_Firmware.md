---
description: Seeed Jetson DevelopTool の Flash Center を使用して、Seeed Studio Jetson デバイスに JetPack ファームウェアを書き込むためのステップバイステップガイドです。
title: ファームウェアのフラッシュ
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Flash Center
  - JetPack
  - firmware flash
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_flash_firmware
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_flash_firmware/
---

**Flash Center** モジュールを使うと、公式 JetPack ファームウェアを、サポートされている任意の Seeed Studio Jetson デバイスに対して 1 つのワークフローでダウンロードおよびフラッシュできます — コマンドラインの BSP スクリプトは不要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/></div>

## デモ：フルフラッシュチュートリアル

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-firmware-tutorial-en.mp4" type="video/mp4"/>
  </video>
</div>

## 始める前に

- ネイティブ Linux ホスト（Ubuntu 20.04/22.04/24.04）を強く推奨します。USB リカバリーモードのセットアップについては [Connect Device](/ja/jetson_developtool_connect_device) を参照してください。
- ファームウェアのダウンロードと展開のために、少なくとも **20 GB** の空きディスク容量があることを確認してください。

## フラッシュのワークフロー

**ステップ 1. デバイスと L4T バージョンを選択します。**

**Flash Center** タブで、デバイスモデル（例：`J4012s`）と、ドロップダウンから対象の L4T バージョンを選択します。完全な互換性リストについては [Supported Devices](/ja/jetson_developtool_supported_devices) を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2. ファームウェアをダウンロードして検証します。**

**Download / Extract BSP** をクリックします。ツールは次の処理を行います：

- レジューム対応でファームウェアパッケージをダウンロードします（中断して再開しても安全）
- SHA256 チェックサムでダウンロードの完全性を検証します
- BSP を自動的に展開します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3. デバイスをリカバリーモードにします。**

ホスト PC に USB-C ケーブルを接続する間（または電源を入れる間）、デバイス上の **Recovery** ボタンを押し続けます。2 秒後に離します。

**ステップ 4. デバイスを検出します。**

ツール内の **Detect Device** をクリックします。USB 経由でデバイスが検出されるはずです。見つからない場合は、USB ケーブルとリカバリーモードの手順を再確認してください。

**ステップ 5. フラッシュを開始します。**

**Start Flash** をクリックします。処理には、ファームウェアサイズと USB 速度に応じて **2〜10 分** かかります。フラッシュ中は電源や USB を切断しないでください。

完了すると、デバイスは新しいファームウェアで自動的に再起動します。

:::tip
Windows を使用していて USB 検出に失敗する場合は、WSL2 + usbipd ワークフローを試してください。ツールが、USB デバイスを WSL2 にアタッチする手順を案内します。
:::

:::caution
フラッシュを行うと、Jetson の eMMC/NVMe 上のすべてのデータが消去されます。続行する前に重要なデータをバックアップしてください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
