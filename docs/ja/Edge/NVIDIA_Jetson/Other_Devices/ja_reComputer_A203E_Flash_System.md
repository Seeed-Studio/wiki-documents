---
description: A203E Mini PCにJetpackをフラッシュする
title: A203E Mini PC
tags:
  - Mini PC Jetpack Flash
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A203E_Flash_System
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---
<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# A203E Mini PC（NVIDIA Jetson Xavier NX）にJetPack OSをフラッシュする

このwikiでは、NVIDIA Jetson Xavier NXモジュールをサポートするA203E Mini PCにJetpack OSをフラッシュする方法を説明します。ここでは、システムをフラッシュする2つの方法を紹介し、A203E Mini PCは公式のNVIDIA Jetson Carrier Boardとは異なるため、対応するドライバーもインストールする必要があります。

<div align="center">
  <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank" rel="noopener"><img width={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png" alt /></a></p>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## はじめに

**Linuxターミナル**を使用することで簡単に実行できます。Linuxの知識ベースをお持ちの方には、Linuxターミナルのみの使用を強く推奨します。

- [コマンドライン経由でのJetPack OSのフラッシュ](#flashing-jetpack-os-via-command-line)

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIAアカウント</span></a>
- ホストコンピューター上のUbuntu 18.04 OS

!!!note
 このチュートリアルでは、Ubuntu 18.04 LTSベースのシステムを使用してインストールを完了します。

### ハードウェアの準備（強制リカバリーモード）

- Ubuntu 18.04 OSを搭載したホストコンピューター
- Micro-USBデータケーブル
- A203E用電源アダプター

インストール手順に進む前に、ボードが強制リカバリーモードになっていることを確認する必要があります。

**ステップ 1.** まず、A203Eの側面にあるMicro-USBポート、電源ボタン、リセットボタンの位置を確認してください。

A203Eを強制リカバリーモードにするには、A203Eの電源がオフになっていることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A203E/a203E_interface.png" /></div>

**ステップ 2.** A203EとホストコンピューターをMicro-USBケーブルで接続します。

**ステップ 3.** A203E用の電源アダプターを接続します。

**ステップ 4.** まず**リセットキーを押し続け**、次に**電源キーを押し続け**、LEDが点灯するまで待ち、その後**電源キーを離し**、**2秒間待って**から**リセットキーを離します**。

**ステップ 5.** LinuxホストPCの画面で、マウスを右クリックしてターミナルを開き、コマンド`lsusb`を入力します。返される内容に`NVidia Corp.`が含まれている場合、A203 Carrier Boardが強制リカバリーモードになっており、後続の操作に進むことができます。

IDはキャリアボード上のモジュールによって異なり、情報は以下のように表示されます：

- Jetson Xavier NXの場合：**0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## コマンドラインを使用したJetPack OSのフラッシュ

コマンドラインスクリプトを使用してJetpack OSをフラッシュするワークフローは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageをダウンロード

**Linux ホストPC**で、ブラウザを開いて<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスする必要があります。まず、Jetson Linuxのバージョンがサポートされているかを確認する必要があります。この場合、NVIDIA L4T 35.1.0（JetPack 5.0.2相当）を使用しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

適切なバージョンを見つけたら、クリックしてダウンロードページに移動します。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`と`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

例として、NVIDIA L4T 35.1.0バージョンを選択した場合、ファイル名は以下のようになります：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### ステップ2. パッケージファイルの解凍とコマンドラインによるRootfsの組み立て

Linux ホストPCで、``Terminal``を開き、以下のコマンドラインを使用してファイルを解凍し、rootfsを組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${XXX_XX_XXX}` はファイル名を入力する場所です。

- 例えば、ダウンロードしたファイルが `~/Downloads/` に保存されている場合、Ubuntu ホストコンピュータで ``Terminal`` を開き、以下のコマンドを入力してください：

```bash
cd ~/Downlands/
mkdir Jetpack_502
mv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/
mv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/
cd Jetpack_501/
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

### ステップ 3. ドライバーのダウンロードと適用

Linux ホスト PC で、<a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">*A203E ドライバーダウンロード*</a> をクリックして、私たちが準備したドライバーをダウンロードしてください。

ドライバーを適用するには、以下のコマンドを ``Terminal`` に入力してください。これは前のサンプルステップの続きで、ドライバーファイルが **~/Downloads** フォルダにダウンロードされ保存されており、また **~/Downloads** フォルダ内に **Jetpack_501** フォルダを作成して、**Linux_for_Tegra** フォルダに最新の **Jetpack 5.0.2** システムファイルのみが含まれるようにしたことを前提としています：

```
cd ~/Downloads/
unzip 203_jp5.0.2.zip
cp -r203_jp5.0.2/203_jp5.0.2/Linux_for_Tegra Jetpack_501/Linux_for_Tegra
```

### ステップ 4. システムをボードにフラッシュする

この例では NVIDIA Jetson Xavier NX モジュールを使用し、以下のコマンドを実行してシステムを直接ボードにフラッシュできます：

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
