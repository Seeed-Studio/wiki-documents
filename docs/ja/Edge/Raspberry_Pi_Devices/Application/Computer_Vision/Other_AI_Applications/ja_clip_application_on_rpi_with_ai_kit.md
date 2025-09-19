---
description: このwikiでは、AI kitを使用してraspberry pi5でclipを使用する方法を説明します。
title: Raspberry Pi with AI KitでのClipアプリケーション
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/clip_application_on_rpi5_with_ai_kit
last_update:
  date: 09/27/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Raspberry Pi with AI KitでのClipアプリケーション

## はじめに

[CLIP](https://github.com/openai/CLIP)（Contrastive Language-Image Pre-Training）は、様々な（画像、テキスト）ペアで訓練されたニューラルネットワークです。画像が与えられた際に、最も関連性の高いテキストスニペットを予測するよう自然言語で指示することができ、GPT-2や3のゼロショット機能と同様に、タスクを直接最適化することなく動作します。CLIPは、元の128万個のラベル付きサンプルを一切使用せずに、ImageNetでの「ゼロショット」において元のResNet50の性能に匹敵し、コンピュータビジョンにおけるいくつかの主要な課題を克服することがわかりました。

このwikiでは、[Raspberry Pi5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)または[Recomputer r1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html)にclipアプリケーションをデプロイする方法を説明します。clipは[AI kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)で推論を実行します。

## ハードウェアの準備

### Recomputer R1000の場合

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Raspberry Pi 5用

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Hailoソフトウェアのインストールとインストール確認

### システムの更新

```
sudo apt update
sudo apt full-upgrade
```

:::note
アップデート中に以下の問題が発生することがあります。

```
Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
Get:2 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
Get:3 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Get:4 http://archive.raspberrypi.com/debian bookworm InRelease [39.0 kB]
Reading package lists... Done                                   
E: Release file for http://deb.debian.org/debian/dists/bookworm/InRelease is not valid yet (invalid for another 58d 8h 26min 35s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian-security/dists/bookworm-security/InRelease is not valid yet (invalid for another 84d 18h 23min 59s). Updates for this repository will not be applied.
E: Release file for http://archive.raspberrypi.com/debian/dists/bookworm/InRelease is not valid yet (invalid for another 84d 13h 13min 5s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian/dists/bookworm-updates/InRelease is not valid yet (invalid for another 85d 0h 52min 29s). Updates for this repository will not be applied. 
```

これは、Raspberry Pi の時刻が正しく設定されていないためです。以下のコマンドを使用して、Raspberry Pi の時刻を手動で設定する必要があります：

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

Raspberry の時刻を設定した後、Raspberry をアップデートできます。
:::

### pcie を gen2/gen3 に設定（gen3 は gen2 より高速）

以下のテキストを ```/boot/firmware/config.txt``` に追加してください

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
gen2を使用したい場合は、dtparam=pciex1_gen=3をコメントアウトしてください
:::

### hailo-allをインストールして再起動

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してHailoソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```

### ソフトウェアとハードウェアの確認

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してhailo-allがインストールされているかどうかを確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してhailo-8Lが接続されているかどうかを確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## プロジェクトの実行

### プロジェクトのインストール

```
git clone https://github.com/hailo-ai/hailo-CLIP.git
cd hailo-CLIP
./install.sh
```

### プロジェクトの実行

以下のコマンドを入力すると、CLIPデモが表示されます：

```
 source setup_env.sh
 clip_app --input demo
```

カメラを使用したい場合は、Raspberry Piに自分のカメラが接続されていることを確認した後、以下のコマンドを入力してください：

```
clip_app --input /dev/video0
```

## 結果

以下に示すビデオでは、「banana」と入力するとCLIPモデルがバナナを認識し、「apple」と入力するとモデルがリンゴを認識する様子を確認できます。異なる単語を入力するだけで、CLIPモデルが異なるオブジェクトを認識します。

<iframe width="800" height="400" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
