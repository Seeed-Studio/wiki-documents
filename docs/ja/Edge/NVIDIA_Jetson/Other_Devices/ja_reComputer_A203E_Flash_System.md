---
description: A203E Mini PCにJetpackをフラッシュする方法
title: A203E Mini PC
tags:
  - Mini PC Jetpack フラッシュ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A203E_Flash_System
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

# A203E Mini PCにJetPack OSをフラッシュする方法 (NVIDIA Jetson Xavier NX)

このWikiでは、NVIDIA Jetson Xavier NXモジュールをサポートするA203E Mini PCにJetpack OSをフラッシュする方法を紹介します。ここではシステムをフラッシュする2つの方法を紹介します。また、A203E Mini PCは公式のNVIDIA Jetsonキャリアボードとは異なるため、対応するドライバーもインストールする必要があります。

<div align="center">
  <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank" rel="noopener"><img width={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png" alt /></a></p>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

**Linuxターミナル**を使用することで簡単に作業を進めることができます。Linuxの基礎知識がある方には、Linuxターミナルのみを使用することを強くお勧めします。

- [Linuxターミナルを使用してJetPack OSをフラッシュする](#flashing-jetpack-os-via-command-line)

### ソフトウェア準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIAアカウント</span></a>
- ホストコンピュータ上のUbuntu 18.04 OS

!!!note
	このチュートリアルでは、Ubuntu 18.04 LTSベースのシステムを使用してインストールを完了します。

### ハードウェア準備 (強制リカバリーモード)

* Ubuntu 18.04 OSを搭載したホストコンピュータ
* Micro-USBデータケーブル
* A203E用の電源アダプター

インストール手順に進む前に、ボードが強制リカバリーモードになっていることを確認する必要があります。

**ステップ1.** まず、A203Eの側面にあるMicro-USBポート、電源ボタン、リセットボタンを確認してください。

A203Eを強制リカバリーモードにするには、A203Eの電源がオフになっていることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A203E/a203E_interface.png" /></div>

**ステップ2.** Micro-USBケーブルを使用してA203Eとホストコンピュータを接続します。

**ステップ3.** A203E用の電源アダプターを接続します。

**ステップ4.** **リセットキーを押し続けたまま**、次に**電源キーを押し続け**、LEDが点灯するのを待ちます。その後、**電源キーを離し**、**2秒待って**から**リセットキーを離します**。

**ステップ5.** LinuxホストPCの画面で、マウスを右クリックしてターミナルを開き、コマンド`lsusb`を入力します。返された内容に`NVidia Corp.`が含まれている場合、A203キャリアボードが強制リカバリーモードになっていることを意味し、次の操作に進むことができます。

IDはキャリアボード上のモジュールによって異なり、以下のように表示されます：

- Jetson Xavier NXの場合: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## コマンドラインを使用した JetPack OS のフラッシュ

以下は、コマンドラインスクリプトを使用して JetPack OS をフラッシュする手順です：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ 1. 適切な NVIDIA Linux ドライバーパッケージをダウンロード

**Linux ホスト PC**で、ブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a> にアクセスします。まず、Jetson Linux のバージョンがサポートされているか確認します。この例では、NVIDIA L4T 35.1.0（Jetpack 5.0.2 に相当）を使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

適切なバージョンを見つけたら、そのダウンロードページに移動します。「L4T Driver Package (BSP)」および「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` および `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2` のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

例として、NVIDIA L4T 35.1.0 バージョンを選択します。ファイル名は以下のようになります：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### ステップ 2. パッケージファイルを解凍し、ルートファイルシステムをコマンドラインで組み立てる

Linux ホスト PC で ``Terminal`` を開き、以下のコマンドラインを使用してファイルを解凍し、ルートファイルシステムを組み立てます：

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

### ステップ 3. ドライバーをダウンロードして適用

Linux ホスト PC で、以下のリンクをクリックして準備されたドライバーをダウンロードしてください：<a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">*A203E ドライバーダウンロード*</a>

ドライバーを適用するには、以下のコマンドを ``Terminal`` に入力してください。この例では、ドライバーファイルが **~/Downloads** フォルダに保存されており、**Jetpack_501** フォルダを **~/Downloads** フォルダ内に作成して、最新の **Jetpack 5.0.2** システムファイルのみが **Linux_for_Tegra** フォルダに含まれるようにしています：

```bash
cd ~/Downloads/
unzip 203_jp5.0.2.zip
cp -r 203_jp5.0.2/203_jp5.0.2/Linux_for_Tegra Jetpack_501/Linux_for_Tegra
```

### ステップ 4. システムをボードにフラッシュ

この例では、NVIDIA Jetson Xavier NX モジュールを使用しており、以下のコマンドを実行してシステムを直接ボードにフラッシュできます：

```sh
cd ~/Downloads/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>