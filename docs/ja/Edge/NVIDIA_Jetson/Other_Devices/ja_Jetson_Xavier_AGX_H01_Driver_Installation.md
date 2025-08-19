---
description: Jetson Xavier AGX H01 に Jetpack をフラッシュする方法
title: Jetson Xavier AGX H01
tags:
   - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson_Xavier_AGX_H01_Driver_Installation
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

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

# Jetson Xavier AGX H01 キット ドライバーインストール

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>


このウィキでは、Jetson Xavier AGX H01 キットにドライバーをインストールする方法を説明します。これを達成するためのいくつかの方法があります。

## コマンドラインを使用した Jetson Xavier AGX H01 のインストール

これはコマンドラインを使用したインストール方法で、安定した手順で進めます。

### 必要な材料

- Ubuntu ホスト PC
- Jetson Xavier AGX H01
- Type-C データ転送ケーブル

### ドライバーインストール

ドライバーをインストールする前に、ボードを強制リカバリモードに設定する必要があります。
#### 強制リカバリモード

ボードにはリカバリボタンがあり、3つのボタンの中央に位置しています。リカバリボタンを押し続けながら電源を入れると、強制リカバリモードに入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver1.png" /></div>


Jetson Xavier AGX H01 を Type-C データ転送ケーブルを使用して Ubuntu ホスト PC に接続します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver.png" /></div>


#### 必要なドライバー

異なるバージョンの Jetpack システムに対応する異なるバージョンのドライバーを提供しています。インストールを簡単にするためです。

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

#### 始める準備

ここでは、**NVIDIA L4T 32.7.1** を使用して **Jetpack 4.6.1** を Jetson AGX H01 にインストールする例を示します。

- **ステップ 1**. NVIDIA からホスト PC にドライバーを[ダウンロード](https://developer.nvidia.com/embedded/linux-tegra-r3271)します。必要な 32.7.1 ドライバーは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver4.png" /></div>


- **ステップ 2**. ホスト PC に追加のインストールファイル `<H01_Drivers>` を[ダウンロード](https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip)します。

ステップ 1 でダウンロードしたファイルを `<H01_Drivers>` と同じフォルダーに移動します。これで、同じフォルダーに3つの解凍済みファイルが表示されます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01drivera.png" /></div>


- **ステップ 3**. `<AGX_H01_Drivers.zip>` ファイルを解凍します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver1b.png" /></div>


- **ステップ 4**. フォルダー内でターミナルを開き、残りのファイルを解凍します。以下のコマンドを実行してください：

```
$ tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
$ cd Linux_for_tegra/rootfs
$ sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
$ cd ..
$ sudo  ./apply_binaries.sh
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver5.png" /></div>


!!!注意
    ファイルを別の場所にダウンロードした場合は、ファイルへのパスを追加する必要があります。ここでの例は "/Desktop/AGX/" です。ファイル内で直接ターミナルを開くと、パスが自動的に追加されます。

コマンドラインは以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx0.png" /></div>


- **ステップ 5**. ダウンロードした `<H01_Driver>` ファイルから解凍済みの `<Jetson_Linux_R32.6.1_aarch64.tbz2>` ファイルにコピー＆ペーストします。


<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver6.png" /></div>

以下のコマンドを実行してください：

```
$ cd ..
$ cp -a -f H01_Driver/Linux_for_Tegra/kernel Linux_for_Tegra/
$ cd Linux_for_Tegra/
$ sudo ./flash.sh jetson-xavier mmcblk0p1
```

フラッシュが実行され、進行状況は以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx2.png" /></div>

最終結果は以下のようになるはずです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx3.png" /></div>

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>