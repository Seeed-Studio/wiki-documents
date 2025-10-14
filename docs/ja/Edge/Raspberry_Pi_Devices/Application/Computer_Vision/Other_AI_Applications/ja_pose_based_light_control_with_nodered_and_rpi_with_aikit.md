---
description: このwikiでは、yolov8を使用したポーズ推定でライトを制御する方法を説明します。
title:  Node-RedとRaspberry Pi with AIkitを使用したポーズベースライト制御
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
  - AI kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/pose_based_light_control_with_nodered_and_rpi_with_aikit
last_update:
  date: 07/26/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Node-RedとRaspberry Pi with AIkitを使用したポーズベースライト制御

## はじめに

このwikiでは、AIキットを使用してYOLOv8を実行し、YOLOv8を使用して姿勢を監視し、最終的に姿勢に基づいてライトを制御する方法をガイドします。このプロジェクトでは、USBカメラがあなたのポーズをキャプチャし、[reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html)の[AI kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)上で動作するyolov8nがポーズを検出します。検出されたポーズを表示する処理済みビデオは、[gstreamer](https://gstreamer.freedesktop.org/)を使用して[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html)にリアルタイムでストリーミングされます。同時に、関節座標は[mqtt](https://mqtt.org/)を使用してreComputer R1000にデプロイされた[Node-RED](https://nodered.org/)に送信されます。最後に、Node-REDフローが関節座標に基づいてスマートライトを制御します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" alt="pir" width={1000} height="auto"/></p>

## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>reTerminal DM</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/k/sku114070262.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## このプロジェクトの実行

### reComputer R1000での作業

#### ステップ1: AIキットのインストール

[このwiki](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)を参照し、reComputer R1000にAIキットがインストールされていることを確認してください。

#### ステップ2: プロジェクトのインストール

以下のコマンドでプロジェクトをダウンロードします：

```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### ステップ3: ポーズ推定の実行

```pose_estimation.py```ファイルを編集し、```mqtt_server```をあなたのreTerminal DMのIPアドレスに変更してください。そして```Gstreamer pipeline```をあなたのreTerminal DMのIPアドレスに変更してください。その後、以下のコマンドを実行してポーズ推定を開始してください。

```
bash run.sh
```

#### ステップ4: Node-REDのインストール

Node-REDをインストールします。1行のコマンドでNode-REDをダウンロードできます：

```
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

#### ステップ 5: flows.json をインポートする

プロジェクトファイルをインポートします。右上角の ```Settings => Import``` をクリックし、新しいポップアップウィンドウで ```click select a file``` をクリックしてインポートし、```flows.jeson``` を選択し、最後に ```Import``` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_import.gif" alt="pir" width={1000} height="auto"/></p>

#### ステップ 6: 必要なコントロールをダウンロードする

プロジェクトファイルをインポートした後、システムから node-red に一部のコントロールが不足していることが通知される場合があります。以下のコントロールをダウンロードする必要があります：

```
@bartbutenaers/node-red-rtsp-to-mjpeg
@chirpstack/node-red-contrib-chirpstack
@flowfuse/node-red-dashboard
node-bacnet-contrib-extended
node-red-contrib-buffer-parser
node-red-contrib-image-output
node-red-contrib-image-tools
node-red-contrib-modbus
node-red-contrib-msg-speed
node-red-contrib-multipart-stream-encoder
node-red-contrib-onvif
node-red-contrib-play-audio
node-red-dashboard
node-red-node-base64
node-red-node-mysql
node-red-node-pi-gpio
node-red-node-ping
node-red-node-serialport
node-red-node-smooth
node-red-sensecap-paas
node-red-node-random
```

```node-red-node-random```を例に、右上角の```Settings => Manage Palette```をクリックし、新しいウィンドウで```Install```列を選択し、```node-red-node-random```を入力して、最後に```Install```ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_dowload_patelle.gif" alt="pir" width={1000} height="auto"/></p>

#### ステップ7: プロジェクトをデプロイする

右上角のデプロイボタンをクリックすると、システムが正常に動作します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_deploy.png" alt="pir" width={1000} height="auto"/></p>

### reTerminal DMでの操作

#### ステップ1: reTerminal DMにgstreamerをインストールする

以下のコマンドでgstreamerをダウンロードします：

```
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

#### ステップ2: リポジトリをインストールする

以下のコマンドでリポジトリをダウンロードします：

```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### ステップ3: ビデオレシーバーを実行する

```
python3 video_receiver.py
```

## 結果

私たちは```19:47```から始まるYouTubeライブ配信でこのデモンストレーションを披露しました。ホストが手を叩くとライトが点灯し、手を振るとライトが消灯する様子をご覧いただけます。このデモをお楽しみください：

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/v-S6_tH75NI" title="Making Next Gadget: AI Boosted RPi for Real World Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
