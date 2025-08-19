---
description: このWikiでは、AIキットを使用してRaspberry Pi 5でClipを使用する方法を説明します。
title: AIキットを使用したRaspberry PiでのClipアプリケーション
keywords:
  - Edge
  - reComputer r1000
  - オブジェクト検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/clip_application_on_rpi5_with_ai_kit
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# AIキットを使用したRaspberry PiでのClipアプリケーション

## はじめに

[CLIP](https://github.com/openai/CLIP)（Contrastive Language-Image Pre-Training）は、さまざまな（画像、テキスト）ペアでトレーニングされたニューラルネットワークです。自然言語で指示を受け、特定のタスクを直接最適化することなく、画像に対して最も関連性の高いテキストスニペットを予測することができます。これは、GPT-2やGPT-3のゼロショット機能と同様です。CLIPは、元のResNet50がImageNetの「ゼロショット」で達成したパフォーマンスに匹敵し、元の1.28Mのラベル付き例を使用せずに、コンピュータビジョンにおけるいくつかの主要な課題を克服しました。

このWikiでは、[Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)または[Recomputer r1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html)でClipアプリケーションをデプロイする方法を説明します。Clipは[AIキット](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)上で推論を行います。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Raspberry Pi 5の場合

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Hailoソフトウェアのインストールとインストール確認

### システムの更新:

```
sudo apt update
sudo apt full-upgrade
```

:::note
更新中に以下の問題が発生する場合があります。
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
これはRaspberry Piの時刻が正しく設定されていないために発生します。以下のコマンドを使用してRaspberry Piの時刻を手動で設定する必要があります。
```
# このコマンドはgoogle.comに接続できる場合のみ使用可能です
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```
Raspberry Piの時刻を設定した後、更新を再試行してください。
:::

### PCIeをGen2/Gen3に設定する（Gen3はGen2より高速）:

以下のテキストを```/boot/firmware/config.txt```に追加してください。

```
# PCIe外部コネクタを有効化

dtparam=pciex1

# Gen 3.0速度を強制

dtparam=pciex1_gen=3

```
:::note
Gen2を使用したい場合は、dtparam=pciex1_gen=3をコメントアウトしてください。
:::

### hailo-allをインストールして再起動:

Raspberry Pi5のターミナルを開き、以下のコマンドを入力してHailoソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```
### ソフトウェアとハードウェアの確認:

Raspberry Pi5のターミナルを開き、以下のコマンドを入力してhailo-allがインストールされているか確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi5のターミナルを開き、以下のコマンドを入力してhailo-8Lが接続されているか確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## プロジェクトの実行

### プロジェクトのインストール

```
git clone https://github.com/hailo-ai/hailo-CLIP.git
cd hailo-CLIP
python3 -m pip install -v -e .
```

### プロジェクトの実行
以下のコマンドを入力すると、クリップデモが表示されます:
```
 clip_app --input demo
```
カメラを使用したい場合は、Raspberry Piがカメラに接続されていることを確認した後、以下のコマンドを入力してください:
```
clip_app --input /dev/video0
```

## 結果

以下の動画では、「banana」と入力すると CLIP モデルがバナナを認識し、「apple」と入力するとモデルがリンゴを認識する様子をご覧いただけます。異なる単語を入力するだけで、CLIP モデルが異なるオブジェクトを認識します。

<iframe width="800" height="400" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>