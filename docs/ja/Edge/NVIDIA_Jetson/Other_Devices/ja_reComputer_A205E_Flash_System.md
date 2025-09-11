---
description: A205E Mini PCにJetpackをフラッシュする
title: A205E Mini PC
tags:
  - Mini PC Jetpack フラッシュ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A205E_Flash_System
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# A205EキャリアボードまたはA205E Mini PCにJetPack OSをフラッシュする (NVIDIA Jetson Xavier NX対応)

このWikiでは、NVIDIA Jetson XavierモジュールをサポートするA205EキャリアボードまたはA205E Mini PCにJetpack OSをフラッシュする方法を紹介します。システムをフラッシュする方法を2つ紹介します。また、A205Eキャリアボードは公式のNVIDIA Jetsonキャリアボードとは異なるため、対応するドライバーもインストールする必要があります。

<div align="center">
  <table>
    <tbody><tr>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank"><span>A205Eキャリアボード</span></a></td>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank"><span>A205E Mini PC</span></a></td>
        </tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/5/_/5_7_1.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/1/_/1_9_2.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

## はじめに

**Linuxターミナル**を使用することで簡単に操作できます。Linuxの知識がある方には、Linuxターミナルのみを使用することを強くお勧めします。

- [Linuxターミナルを使用してJetPack OSをフラッシュする](#flashing-jetpack-os-via-command-line)

### ソフトウェア準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIAアカウント</span></a>
- ホストコンピュータ上のUbuntu 18.04 OS

!!!note
	このチュートリアルでは、Ubuntu 18.04 LTSベースのシステムを使用してインストールを完了します。

### ハードウェア準備 (強制リカバリモード)

* Ubuntu 18.04 OSを搭載したホストコンピュータ
* USB Type-Cデータケーブル
* A205EキャリアボードまたはA205E Mini PC用の電源アダプター

インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。

**ステップ1.** A205EキャリアボードまたはA205E Mini PCの側面にあるUSB Type-Cポート、電源ボタン、リセットボタン、リカバリボタンを確認してください。

<div align="center">
  <table>
    <tbody><tr>
        <td align="center">A205Eキャリアボード</td>
        <td align="center">A205E Mini PC</td>
        </tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/n/antenna_dc_jack_io_controller_20_pin_1_.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/2/_/2_8_3.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

A205Eを強制リカバリモードにするには、A205Eの電源がオフになっていることを確認してください。

**ステップ2.** USB Type-Cケーブルを**A205EキャリアボードまたはA205E Mini PC**のType-Cプログラミングポートとホストコンピュータに接続します。

**ステップ3.** **A205EキャリアボードまたはA205E Mini PC**用の電源アダプターを接続します。

**ステップ4.** **リカバリキーを押し続けたまま**、次に**電源キーを押し続け**、LEDが点灯するまで待ちます。その後、**電源キーを離し**、**2秒待って**から**リカバリキーを離します**。

**または**

**A205EキャリアボードまたはA205E Mini PC**が**電源オン**状態の場合、**リセットキー**と**リカバリキー**を押し続け、**リセットキーを2秒間離して**から**リカバリキーを離します**。

**ステップ5.** LinuxホストPC画面で、マウスを右クリックしてターミナルを開き、コマンド`lsusb`を入力します。返された内容に`NVidia Corp.`が含まれている場合、A205Eキャリアボードが強制リカバリモードになっていることを意味し、次の操作に進むことができます。

IDはキャリアボード上のモジュールによって異なり、以下の情報が表示されます：

- Jetson Xavier NXの場合: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## コマンドラインを使用した JetPack OS のフラッシュ

以下は、コマンドラインスクリプトを使用して JetPack OS をフラッシュする手順です：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ 1. 適切な NVIDIA Linux ドライバーパッケージをダウンロード

**Linux ホスト PC**で、ブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a> にアクセスします。まず、Jetson Linux のバージョンがサポートされているか確認します。この例では、NVIDIA L4T 35.1.0（Jetpack 5.0.2 に相当）を使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

適切なバージョンを見つけたら、ダウンロードページに移動します。「L4T Driver Package (BSP)」および「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` および `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2` のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

例として、NVIDIA L4T 35.1.0 バージョンを選択します。ファイル名は以下のようになります：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### ステップ 2. パッケージファイルを解凍し、コマンドラインで Rootfs を組み立てる

Linux ホスト PC で ``Terminal`` を開き、以下のコマンドラインを使用してファイルを解凍し、Rootfs を組み立てます：

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

!!!注意
    `${XXX_XX_XXX}` はファイル名を指定する場所です。

* 例えば、ダウンロードしたファイルが `~/Downloads/` に保存されている場合、Ubuntu ホストコンピュータで ``Terminal`` を開き、以下のコマンドを入力してください：

```bash
cd ~/Downloads/
mkdir Jetpack_502
mv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/
mv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/
cd Jetpack_502/
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

### ステップ 3. システムをボードにフラッシュ

この例では、NVIDIA Jetson Xavier NX モジュールを使用し、以下のコマンドを実行してシステムを直接ボードにフラッシュします：

```sh
cd ~/Downloads/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様のニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>