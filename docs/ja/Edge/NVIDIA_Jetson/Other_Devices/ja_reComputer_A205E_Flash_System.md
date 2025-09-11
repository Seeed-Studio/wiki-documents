---
description: A205E Mini PC に Jetpack をフラッシュする
title: A205E Mini PC
tags:
  - Mini PC Jetpack Flash
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A205E_Flash_System
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

# A205E キャリアボードまたは A205E Mini PC に JetPack OS をフラッシュする（NVIDIA Jetson Xavier NX 対応）

この wiki では、NVIDIA Jetson Xavier モジュールをサポートする A205E キャリアボードまたは A205E Mini PC に Jetpack OS をフラッシュする方法を説明します。ここでは、システムをフラッシュする 2 つの方法を紹介します。A205 キャリアボードは公式の NVIDIA Jetson キャリアボードとは異なるため、対応するドライバーもインストールする必要があります。

<div align="center">
  <table>
    <tbody><tr>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank"><span>A205E キャリアボード</span></a></td>
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

**Linux ターミナル**を使用することで簡単に実行できます。Linux の知識ベースをお持ちの方には、Linux ターミナルのみの使用を強く推奨します。

- [Linux ターミナル経由での JetPack OS のフラッシュ](#flashing-jetpack-os-via-command-line)

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA アカウント</span></a>
- ホストコンピュータ上の Ubuntu 18.04 OS

!!!note
 このチュートリアルでは、Ubuntu 18.04 LTS ベースのシステムを使用してインストールを完了します。

### ハードウェアの準備（強制リカバリモード）

- Ubuntu 18.04 OS を搭載したホストコンピュータ
- USB Type-C データケーブル
- A205E キャリアボードまたは A205E Mini PC 用電源アダプタ

インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります

**ステップ 1.** A205E キャリアボードまたは A205E Mini PC の側面にある USB Type-C ポート、電源ボタン、リセットボタン、リカバリボタンを確認してください。

<div align="center">
  <table>
    <tbody><tr>
        <td align="center">A205E キャリアボード</td>
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

**ステップ 2.** USB Type-Cケーブルを**A205E Carrier BoardまたはA205E Mini PC**のType-Cプログラミングポートとホストコンピュータに接続します。

**ステップ 3.** **A205E Carrier BoardまたはA205E Mini PC**に電源アダプタを接続します。

**ステップ 4.** まず**Recovery Key**を**押し続け**、次に**Power Key**を**押し続け**、LEDが点灯するまで待ち、その後**Power Key**を**離し**、**2秒間待って****Recovery Key**を**離します**。

**または**

**A205E Carrier BoardまたはA205E Mini PC**が**電源オン**状態の場合、**Reset Key**と**Recovery Key**を**押し続け**、**Reset Key**を**2秒間****離し**、その後**Recovery Key**を**離します**。

**ステップ 5.** Linux ホストPCの画面で、マウスを右クリックしてターミナルを開き、コマンド`lsusb`を入力します。返される内容に`NVidia Corp.`が含まれている場合、A205 Carrier Boardが強制リカバリモードになっており、後続の操作を続行できることを意味します。

IDはキャリアボード上のモジュールによって異なり、以下のように表示されます：

- Jetson Xavier NXの場合：**0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## コマンドライン経由でのJetPack OSのフラッシュ

コマンドラインスクリプトを使用してJetpack OSをフラッシュするワークフローは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ 1. 適切なNVIDIA Linux Driver Packageをダウンロード

**Linux ホストPC**で、ブラウザを開いて<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスする必要があります。まず、Jetson Linuxのバージョンがサポートされているかを確認する必要があります。この場合、NVIDIA L4T 35.1.0（Jetpack 5.0.2相当）を使用しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

適切なバージョンを見つけたら、クリックしてダウンロードページに移動します。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`と`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

例として、NVIDIA L4T 35.1.0バージョンを選択した場合、ファイル名は以下のようになります：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### ステップ 2. パッケージファイルの解凍とコマンドライン経由でのRootfsの組み立て

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

### ステップ 3. システムをボードにフラッシュする

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
