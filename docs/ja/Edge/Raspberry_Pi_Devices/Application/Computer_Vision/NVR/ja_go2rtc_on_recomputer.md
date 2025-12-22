---
description: このwikiでは、reComputer上でgo2rtcを使用する方法を説明します。
title: reComputer上のgo2rtc
keywords:
  - reComputer
  - go2rtc
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif
slug: /ja/go2rtc_on_recomputer
last_update:
  date: 11/05/2025
  author: Jiahao

no_comments: false # for Disqus
---

# reComputer上のgo2rtc

## はじめに

[go2rtc](https://github.com/AlexxIT/go2rtc)は、インターネット上でリアルタイムメディアストリーミングを促進するために設計されたオープンソースのWebRTCフレームワークです。XTLSチームによって開発され、効率的なリアルタイム動画・音声伝送のためにWebRTCをRTSP、RTMP、HLSなどの他のメディアプロトコルと組み合わせることを目的としています。

[WebRTC](https://github.com/webrtc)（Web Real-Time Communication）は、ピアツーピア接続を確立し、ビデオ通話、ライブ配信、その他のリアルタイムアプリケーションなどのリアルタイムメディア交換を可能にするために広く使用されているプロトコルです。go2rtcは、異なるメディアプロトコルを低遅延でスケーラブルな伝送のためにWebRTCストリームに変換する必要がある環境でWebRTCの実装を容易にします。

## 前提条件

### ハードウェア要件


<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
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
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" styl  e={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## go2rtcのダウンロードと実行

### システムの更新

以下のコマンドを使用して実行してください。

```bash
sudo apt update
sudo apt upgrade -y
```

### go2rtcのダウンロード

以下のコマンドを使用して実行してください。

```bash
wget https://nightly.link/AlexxIT/go2rtc/workflows/build/master/go2rtc_linux_arm64.zip
tar -xvzf go1.24.0.linux-arm64.tar.gz
chmod +x go2rtc_linux_arm64
```

### go2rtc.yamlの作成

以下のコマンドを使用して実行してください。

```bash 
nano go2rtc.yaml
```

以下の設定に実際のIPアドレスを入力してください。

```bash
streams:
  stream1:
    url: rtsp://admin:passw0rd@10.1.1.200:554/cam/realmonitor?channel=1&subtype=1
    protocol: rtsp
    codec: h264

server:
  api: :1984 
  rtsp: :8554  
  webrtc: :8555  
```

### go2rtcの実行

以下のコマンドを使用して実行してください。

```bash
 ./go2rtc_linux_arm64 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/run_go2rtc.png" alt="pir" width="1000" height="auto"/></p>

ホスト上でポート`1984`を開き、`Stream`ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.png" alt="pir" width="1000" height="auto"/></p>

## 結果

すべてを設定したら、現在のカメラからのライブフィードを表示できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif" alt="pir" width="1000" height="auto"/></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
