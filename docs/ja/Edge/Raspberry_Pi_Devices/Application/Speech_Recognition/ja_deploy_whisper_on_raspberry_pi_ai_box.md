---
description: Raspberry Pi AI ボックスに Whisper をデプロイする方法を学びます。
title: Raspberry Pi AI ボックス & Industrial AI ボックスに Whisper をデプロイする
keywords:
  - Whisper
  - Hailo8
  - Speech Recognition
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/deploy_whisper_on_raspberry_pi_ai_box
sku: 114993627, 100061305, 100097052, 114993595, 100077451, 100080766, 100020831
last_update:
  date: 01/19/2026
  author: Jiahao

no_comments: false # for Disqus
---

# Raspberry Pi AI ボックスに Whisper をデプロイする

## はじめに

[Whisper](https://github.com/openai/whisper) は、OpenAI によって開発された多用途で最先端の自動音声認識（ASR）および音声処理モデルです。従来の音声テキスト変換システムとは異なり、Whisper はウェブから収集された 680,000 時間の多言語・多タスク教師ありデータで訓練されました。この大規模で多様なデータセットにより、モデルはアクセント、背景ノイズ、専門用語に対して非常に堅牢になっています。

このガイドでは、Raspberry Pi AI ボックスでの [Whisper](https://github.com/openai/whisper) のデプロイと活用について包括的なウォークスルーを提供します。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/openai/whisper/main/approach.png" style={{width:500, height:'auto'}}/></div>

## ハードウェアの準備

### AI ボックス
<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### マイクロフォンアレイ

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/2/02_7.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v3-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## ソフトウェアの準備

### システムの更新

```bash
sudo apt update
sudo apt full-upgrade
```

:::note
更新中に以下の問題が発生することがあります。

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

これは Raspberry Pi の時刻が正しく設定されていないためです。以下のコマンドで Raspberry Pi の時刻を手動で設定する必要があります：

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

Raspberry Pi の時刻を設定した後、Raspberry Pi を更新できます。
:::

### PCIe を gen2/gen3 に設定（gen3 は gen2 より高速）

```/boot/firmware/config.txt``` に以下のテキストを追加します

```bash
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
gen2 を使用したい場合は、dtparam=pciex1_gen=3 をコメントアウトしてください
:::

### hailo-all をインストールして再起動

Raspberry Pi5 でターミナルを開き、以下のコマンドを入力して Hailo ソフトウェアをインストールします。

```bash
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```

### ソフトウェアとハードウェアの確認

Raspberry Pi5 でターミナルを開き、以下のコマンドを入力して hailo-all がインストールされているかを確認します。

```bash
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi5 でターミナルを開き、以下のコマンドを入力して hailo-8L が接続されているかを確認します。

```bash
lspci | grep Hailo
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## プロジェクトのインストール

### プロジェクトのダウンロード

```bash
cd ~ && git clone https://github.com/Seeed-Projects/STT_hailo_whisper.git
cd STT_hailo_whisper
```

### 必要なパッケージのインストール

```bash
sudo apt update
sudo apt install ffmpeg
sudo apt install libportaudio2
sudo apt install portaudio19-dev python3-pyaudio
sudo apt install hailo-all
```

### Python 環境の作成

```bash
python -m venv .env --system-site-packages && source .env/bin/activate
cd app && python download_resources.py
cd .. && pip install -r requirements.txt
```

## プロジェクトの実行

バックエンドを開始します。
```bash
python hailo_whisper.py --hw-arch hailo8 --variant base --udp-host 0.0.0.0 --udp-port 12345
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/whisper/whisper_begin.png" style={{width:800, height:'auto'}}/></div>

## 結果

フロントエンドを開始すると、リアルタイムの STT 結果を確認できます。
```bash
cd test && python recive_message.py --host 0.0.0.0 --port 12345 --stats-interval 5

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/whisper/whisper_result.png" style={{width:800, height:'auto'}}/></div>


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>