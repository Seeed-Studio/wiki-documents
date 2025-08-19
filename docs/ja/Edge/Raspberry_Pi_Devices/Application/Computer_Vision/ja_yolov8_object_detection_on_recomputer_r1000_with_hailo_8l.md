---
description: この Wiki では、reComputer R1000 と Raspberry-pi-AI-kit を使用して YOLOv8 による物体検出を実演します。
title: YOLOv8 を使用した reComputer R1000 上での物体検出（Hailo-8L 搭載）
keywords:
  - Edge
  - reComputer r1000
  - 物体検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus 用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# YOLOv8 を使用した reComputer R1000 上での物体検出（Hailo-8L 搭載）

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once バージョン 8）は、リアルタイム物体検出モデルの YOLO シリーズの中で最も人気のあるバージョンです。速度、精度、柔軟性においていくつかの進歩を導入し、従来のバージョンの強みを活かしています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) は、Hailo-8L チップを中心に構築された 13 TOPS のニューラルネットワーク推論アクセラレータを備え、推論速度を向上させます。

この Wiki では、[reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) 上で Raspberry-pi-AI-kit を使用した場合と使用しない場合の YOLOv8 による物体検出を実演します。Raspberry Pi AI Kit は Raspberry Pi の性能を向上させ、スマートリテールやスマート交通などの人工知能および機械学習アプリケーションでその可能性を引き出します。Raspberry AI Kit は Raspberry Pi 5 用に設計されていますが、CM4 搭載のエッジゲートウェイで実験を行いました。エッジデバイスをインテリジェント IoT ゲートウェイに変えることに興奮しています！

## ハードウェアの準備

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
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

## このプロジェクトを実行する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Hailo-8L を使用して実行">

### ステップ 1: AI キットをインストールする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### ステップ 2: システムを更新し、PCIe を Gen3 に設定する

#### システムを更新する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力してシステムを更新します。

```
sudo apt update
sudo apt full-upgrade
```
#### PCIe を Gen3 に設定する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して reComputer R1000 を設定します。

```
sudo raspi-config
```

オプション "6 Advanced Options" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

次にオプション "A8 PCIe Speed" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

"Yes" を選択して PCIe Gen 3 モードを有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

"Finish" をクリックして終了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### ステップ 3: Hailo ソフトウェアをインストールし、インストールを確認する

#### Hailo ソフトウェアをインストールする

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して Hailo ソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo reboot
```
#### ソフトウェアとハードウェアを確認する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して hailo-all がインストールされているか確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して hailo-8L が接続されているか確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### YOLOv8 を実行する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して YOLOv8 を実行します。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```
### 結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>

<TabItem value="Method 2" label="Hailo-8L を使用せずに実行">

### YOLOv8 を実行する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して YOLOv8 を実行します。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection
```
### 結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_withoutAIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>


## 結果

AIキットを使用する前後で、入力解像度640*640のYOLOv8による物体検出の推論速度を比較しました。結果として、加速前の推論速度はわずか0.75 FPSでしたが、加速後には29.5 FPSに達しました。

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、AIキットを使用した場合と使用しない場合のYOLOv8による物体検出の実行速度をベンチマークしました。結果として、AIキットがエッジデバイスのパフォーマンスを大幅に向上させることが確認されました。今後は、加速後のAIキットを使用して、セマンティックセグメンテーションやポーズ推定など、異なるシナリオでのYOLOv8の実行速度をベンチマークする予定です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>