---
description: このWikiでは、YOLOv8を使用してポーズ推定を行い、ライトを制御する方法を説明します。
title: Node-RedとRaspberry Piを使用したAIkitによるポーズベースのライト制御
keywords:
  - Edge
  - reComputer r1000
  - オブジェクト検出
  - AIキット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/pose_based_light_control_with_nodered_and_rpi_with_aikit
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Node-RedとRaspberry Piを使用したAIkitによるポーズベースのライト制御

## はじめに
このWikiでは、AIキットを使用してYOLOv8を実行し、ポーズを監視し、最終的にポーズに基づいてライトを制御する方法を説明します。このプロジェクトでは、USBカメラがポーズをキャプチャし、[AIキット](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)と[reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html)上でYOLOv8nを実行してポーズを検出します。検出されたポーズを表示する処理済みのビデオは、[gstreamer](https://gstreamer.freedesktop.org/)を使用してリアルタイムで[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html)にストリーミングされます。一方、ジョイント座標は[mqtt](https://mqtt.org/)を使用して[Node-RED](https://nodered.org/)に送信され、reComputer R1000上でデプロイされます。最後に、Node-REDフローがジョイント座標に基づいてスマートライトを制御します。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html" target="_blank">
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

## このプロジェクトを実行する

### reComputer R1000 上で

#### ステップ 1: AIキットをインストールする

[このWiki](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)を参照し、reComputer R1000にAIキットをインストールしてください。

#### ステップ 2: プロジェクトをインストールする

以下のコマンドを使用してプロジェクトをダウンロードしてください:
```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### ステップ 3: ポーズ推定を実行する

```pose_estimation.py```ファイルを編集し、```mqtt_server```をreTerminal DMのIPアドレスに変更してください。また、```Gstreamer pipeline```もreTerminal DMのIPアドレスに変更してください。その後、以下のコマンドを実行してポーズ推定を開始します。

```
bash run.sh
```

#### ステップ 4: Node-REDをインストールする

Node-REDをインストールします。以下のコマンドを使用してNode-REDをダウンロードできます:

```
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

#### ステップ 5: flows.jsonをインポートする

プロジェクトファイルをインポートします。右上の```設定 => インポート```をクリックし、新しいポップアップウィンドウで```ファイルを選択```をクリックして```flows.json```を選択し、最後に```インポート```をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_import.gif" alt="pir" width={1000} height="auto"/></p>

#### ステップ 6: 必要なコントロールをダウンロードする

プロジェクトファイルをインポートした後、Node-REDがいくつかのコントロールが不足していることを通知する場合があります。以下のコントロールをダウンロードする必要があります:

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

例えば```node-red-node-random```の場合、右上の```設定 => パレットを管理```をクリックし、新しいウィンドウで```インストール```タブを選択し、```node-red-node-random```を入力して最後に```インストール```ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_dowload_patelle.gif" alt="pir" width={1000} height="auto"/></p>

#### ステップ 7: プロジェクトをデプロイする

右上のデプロイボタンをクリックすると、システムが正常に動作します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_deploy.png" alt="pir" width={1000} height="auto"/></p>

### reTerminal DM 上で

#### ステップ 1: reTerminal DMにgstreamerをインストールする

以下のコマンドを使用してgstreamerをダウンロードしてください:

```
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

#### ステップ 2: リポジトリをインストールする

以下のコマンドを使用してリポジトリをダウンロードしてください:
```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### ステップ 3: ビデオ受信を実行する

```
python3 video_receiver.py
```

## 結果

このデモンストレーションは、YouTubeライブ放送で```19:47```に開始されました。ホストが手を叩くとライトが点灯し、ホストが手を振るとライトが消灯する様子をご覧いただけます。このデモをお楽しみください：

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/v-S6_tH75NI" title="Making Next Gadget: AI Boosted RPi for Real World Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>