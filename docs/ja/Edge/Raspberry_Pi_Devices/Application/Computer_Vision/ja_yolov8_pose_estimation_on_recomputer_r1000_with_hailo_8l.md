---
description: このWikiでは、reComputer R1000でRaspberry-pi-AI-kitを使用してYOLOv8によるポーズ推定を実演します。
title:  reComputer R1000とHailo-8Lを使用したYOLOv8ポーズ推定
keywords:
  - Edge
  - reComputer r1000
  - オブジェクト検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer R1000とHailo-8Lを使用したYOLOv8ポーズ推定

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Onceバージョン8）は、リアルタイムポーズ推定モデルのYOLOシリーズの中で最も人気のあるバージョンです。速度、精度、柔軟性においていくつかの進歩を導入し、従来のバージョンの強みを活かしています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)は、Hailo-8Lチップを中心に構築された13 TOPSのニューラルネットワーク推論アクセラレータを備え、推論速度を向上させます。

このWikiでは、[reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html)でRaspberry-pi-AI-kitを使用した場合と使用しない場合のYOLOv8によるポーズ推定を実演します。Raspberry Pi AI Kitは、Raspberry Piの性能を向上させ、スマートリテールやスマートトラフィックなどの人工知能および機械学習アプリケーションの可能性を引き出します。Raspberry AI KitはRaspberry Pi 5用に設計されていますが、CM4搭載のエッジゲートウェイで実験を行いました。エッジデバイスをインテリジェントなIoTゲートウェイに変えることにワクワクしています！

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
<TabItem value="Method 1" label="Hailo-8Lを使用して実行">

### ステップ1: AIキットをインストール

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### ステップ2: システムを更新し、PCIeをGen3に設定

#### システムを更新

reComputer R1000でターミナルを開き、以下のコマンドを入力してシステムを更新します。

```
sudo apt update
sudo apt full-upgrade
```
#### PCIeをGen3に設定

reComputer R1000でターミナルを開き、以下のコマンドを入力してreComputer R1000を設定します。

```
sudo raspi-config
```

オプション「6 Advanced Options」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

次にオプション「A8 PCIe Speed」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

「Yes」を選択してPCIe Gen 3モードを有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

「Finish」をクリックして終了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### ステップ3: Hailoソフトウェアをインストールし、インストールを確認

#### Hailoソフトウェアをインストール

reComputer R1000でターミナルを開き、以下のコマンドを入力してHailoソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo reboot
```
#### ソフトウェアとハードウェアを確認

reComputer R1000でターミナルを開き、以下のコマンドを入力してhailo-allがインストールされているか確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

reComputer R1000でターミナルを開き、以下のコマンドを入力してhailo-8Lが接続されているか確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### YOLOv8を実行

reComputer R1000でターミナルを開き、以下のコマンドを入力してYOLOv8を実行します。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh pose-estimation-hailo
```
### 結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>

<TabItem value="Method 2" label="Hailo-8Lを使用せずに実行">

### YOLOv8を実行

reComputer R1000でターミナルを開き、以下のコマンドを入力してYOLOv8を実行します。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh pose-estimation
```
### 結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-without-AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>


## 結果

AIキットを使用する前後で、入力解像度640*640のYOLOv8によるポーズ推定の推論速度を比較しました。結果は、加速前の推論速度はわずか0.5 FPSでしたが、加速後には27 FPSに達したことを示しています。

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/OwIrMppQzUU" title="Raspberry Pi AI: YOLOv8 Pose Estimation on reComputer R1000(CM4-powered Edge Gateway) with Hailo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、AIキットを使用した場合と使用しない場合のYOLOv8によるポーズ推定の実行速度をベンチマークしました。結果は、AIキットがエッジデバイスの性能を大幅に向上させることを示しています。今後は、異なるシナリオでのYOLOv8の実行速度をベンチマークする予定です。

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>