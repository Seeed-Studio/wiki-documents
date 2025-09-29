---
description: Jetson Xavier AGX H01にJetpackをフラッシュする
title: Jetson Xavier AGX H01
tags:
   - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson_Xavier_AGX_H01_Driver_Installation
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

# Jetson Xavier AGX H01 Kit ドライバーインストール

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

このwikiでは、Jetson Xavier AGX H01 Kitにドライバーをインストールする方法を説明します。これを実現するためのいくつかの方法があります。

## コマンドラインでJetson Xavier AGX H01をインストール

これは、安定した手順でコマンドラインを通じてインストールする方法です。

### 必要な材料

- Ubuntu ホストPC
- Jetson Xavier AGX H01
- Type C データ転送ケーブル

### ドライバーインストール

ドライバーをインストールする前に、ボードをForce Recovery Modelに設定する必要があります。

#### 強制回復モデル

ボードにはリカバリーボタンがあり、これは3つのボタンの中央にあります。リカバリーボタンを押したまま電源を入れると、Force Recovery Modelに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver1.png" /></div>

Jetson Xavier AGX H01をType-Cデータ転送ケーブルでUbuntu ホストPCに接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver.png" /></div>

#### 必要なドライバー

Jetpackシステムの異なるバージョンに対応する異なるバージョンのドライバーを提供しており、インストールの便宜を図っています。

<table>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>必要なドライバー</th>
      <th>Jetson Linux アーカイブ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.4</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_4.4.zip">ダウンロードはこちら</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r32.4.3">NVIDIA L4T 32.4.3</a></td>
    </tr>
    <tr>
      <td>4.6.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip">ダウンロードはこちら</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r3271">NVIDIA L4T 32.7.1</a></td>
    </tr>
    <tr>
      <td>5.0.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.1.zip">ダウンロードはこちら</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3411">NVIDIA L4T 34.1.1</a></td>
    </tr>
    <tr>
      <td>5.0.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.2.zip">ダウンロードはこちら</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351">NVIDIA L4T 35.1</a></td>
    </tr>
    <tr>
      <td>5.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.rar" target="_blank" rel="noopener noreferrer">ダウンロードはこちら</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3521" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.2.1</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.1.zip" target="_blank" rel="noopener noreferrer">ダウンロードはこちら</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.3.1</a></td>
    </tr>
    <tr>
      <td>5.1.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.2.zip" target="_blank" rel="noopener noreferrer">ダウンロードはこちら</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3541" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.4.1</a></td>
    </tr>
  </tbody>
</table>

#### はじめに

ここでの例では、Jetson AGX H01に**NVIDIA L4T 32.7.1**を使用して**Jetpack 4.6.1**をインストールします。

- **ステップ 1**. NVIDIAからホストPCにドライバーを[ダウンロード](https://developer.nvidia.com/embedded/linux-tegra-r3271)します。必要な32.7.1ドライバーは以下に示されています：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver4.png" /></div>

- **ステップ 2**. ホストPCに追加で必要なインストールファイル**H01_Drivers**を[ダウンロード](https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip)します。

**ステップ 1**でダウンロードしたファイルを**H01_Drivers**と同じフォルダに移動します。これで同じフォルダに3つの解凍されたファイルが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01drivera.png" /></div>

- **ステップ 3**. **AGX_H01_Drivers.zip**ファイルを解凍します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver1b.png" /></div>

- **ステップ 4**. フォルダでターミナルを開き、残りのファイルを解凍します。以下のコマンドを実行します：

```
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo  ./apply_binaries.sh
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver5.png" /></div>

!!!Note
    他の場所でファイルをダウンロードした場合は、ファイルへのパスを追加してください。この例では "/Desktop/AGX/" です。ファイル内で直接ターミナルを開いた場合、パスは自動的に追加されます。

コマンドラインは以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx0.png" /></div>

- **ステップ 5**. 戻って、ダウンロードした **H01_Driver** ファイルから解凍したファイル **Jetson_Linux_R32.6.1_aarch64.tbz2** にファイルをコピー＆ペーストします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver6.png" /></div>

以下がコマンドです：

```
cd ..
cp -a -f H01_Driver/Linux_for_Tegra/kernel Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./flash.sh jetson-xavier mmcblk0p1
```

フラッシュが実行され、進行状況は以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx2.png" /></div>

最終結果は以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx3.png" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
