---
description: このWikiでは、Raspberry Pi 5およびRaspberry Pi Compute Module 4上でのyolov8sポーズ推定と物体検出のベンチマークを示します。
title: Raspberry Pi AIキットを使用したRPi5およびCM4上でのyolov8sのベンチマーク
keywords:
  - Edge
  - reComputer r1000
  - 物体検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Raspberry Pi AIキットを使用したRPi5およびCM4上でのyolov8sのベンチマーク

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once バージョン8）は、リアルタイムのポーズ推定と物体検出モデルのYOLOシリーズの中で最も人気のあるバージョンです。速度、精度、柔軟性においていくつかの進歩を導入し、従来のバージョンの強みを活かしています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)は、Hailo-8Lチップを中心に構築された13 TOPSのニューラルネットワーク推論アクセラレータを備え、推論速度を向上させます。

このWikiでは、Raspberry Pi 5およびRaspberry Pi Compute Module 4上でのYOLOv8sを使用したポーズ推定と物体検出のベンチマークを紹介します。すべてのテストは同じモデル（YOLOv8s）を使用し、int8に量子化され、入力サイズは640x640の解像度、バッチサイズは1、240 FPSの同じビデオから入力を取得しています。

## ハードウェアの準備

### CM4の場合

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>Raspberry Pi AIキット</th>
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
		<th>Raspberry Pi5 8GB</th>
		<th>Raspberry Pi AIキット</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
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

<TabItem value="Method 1" label="Pi5 ベンチマーク">

### RPi5 に AI キットをインストールする
[こちら](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)を参照してください。

### Hailo ソフトウェアをインストールしてインストールを確認する

#### システムを更新する:

```
sudo apt update
sudo apt full-upgrade
```

#### PCIe を gen2/gen3 に設定する (gen3 は gen2 より高速です):

以下のテキストを ```/boot/firmware/config.txt``` に追加してください。

```
# PCIe 外部コネクタを有効化

dtparam=pciex1

# Gen 3.0 の速度を強制

dtparam=pciex1_gen=3

```
:::note
gen2 を使用したい場合は、dtparam=pciex1_gen=3 をコメントアウトしてください。
:::

#### hailo-all をインストールして再起動する:

Raspberry Pi5 のターミナルを開き、以下のコマンドを入力して Hailo ソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo reboot
```
#### ソフトウェアとハードウェアを確認する:

Raspberry Pi5 のターミナルを開き、以下のコマンドを入力して hailo-all がインストールされているか確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi5 のターミナルを開き、以下のコマンドを入力して hailo-8L が接続されているか確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### プロジェクトを実行する

<Tabs>
<TabItem value="Method 1" label="ポーズ推定を実行する">

#### プロジェクトをインストールする

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### プロジェクトを実行する

```
# AI キットを使用してポーズ推定を実行する

bash run.sh pose-estimation-hailo

# AI キットを使用せずにポーズ推定を実行する

bash run.sh pose-estimation
```

#### 結果

<iframe width="800" height="400" src="https://www.youtube.com/embed/Mo7AL7AjxwA" title="Raspberry Pi AI: YOLOv8 Pose Estimation - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</TabItem>

<TabItem value="Method 2" label="物体検出を実行する">

#### プロジェクトをインストールする

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### プロジェクトを実行する

```
# AI キットを使用して物体検出を実行する

bash run.sh object-detection-hailo

# AI キットを使用せずに物体検出を実行する

bash run.sh object-detection
```

#### 結果

<iframe width="800" height="400" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</TabItem>
</Tabs>

</TabItem>

<TabItem value="Method 2" label="CM4 ベンチマーク">

物体検出については以下の Wiki を参照してください:
[yolov8_object_detection_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)

ポーズ推定については以下の Wiki を参照してください:
[yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/ja/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/)
</TabItem>

</Tabs>

## 結果

<Tabs>

<TabItem value="Method 1" label="batchsize=8">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_batch8.png" alt="pir" width={1000} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/poes_estimation_batch8.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

<TabItem value="Method 2" label="batchsize=1">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" alt="pir" width={1000} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pose-estimation-benchmark.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

</Tabs>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>