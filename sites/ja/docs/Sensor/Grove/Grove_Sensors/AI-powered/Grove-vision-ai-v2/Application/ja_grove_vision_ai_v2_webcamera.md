---
description: Grove Vision AI V2 を使用してインテリジェントなウェブカメラを構築する方法を紹介します。
title: AI機能を備えたインテリジェントIPカメラ
keywords:
- vision AI
- インテリジェントウェブカメラ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2_webcamera
last_update:
  date: 05/15/2025
  author: Allen
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 は、人工知能を統合してセキュリティと運用効率を向上させる高度な監視デバイスとして使用できます。これらのカメラは、リアルタイムのビデオ分析を実行して異常な活動を検出し警告を発し、顔を認識し、群衆密度を監視することができます。そのため、公共の安全、小売管理、スマートホームセキュリティなどの分野での利用に最適です。監視タスクを自動化することで、AI IPカメラは人間による継続的な監視の必要性を減らし、潜在的なセキュリティ脅威への迅速な対応を可能にし、全体的な安全性を向上させます。

## 必要な材料

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2 キット</th>
			<th>XIAO ESP32S3 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Grove Vision AI V2 にAIモデルをアップロードする

ここでは、SenseCraft AI を使用してモジュールを迅速に開始する方法を説明します。このプロセスにはモジュールのみが必要です。

### ステップ 1. Grove Vision AI V2 を SenseCraft AI モデルアシスタントに接続する

まず、SenseCraft AI モデルアシスタントのメインページを開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI へ移動</font></span></strong></a>
</div>

Type-C ケーブルを使用して Grove Vision AI V2 をコンピュータに接続してください。

SenseCraft AI モデルアシスタントページの右上隅で、**Grove Vision AI (WE2)** を選択します。その後、右端の **Connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

ポップアップする新しいウィンドウで、デバイスの正しい COM ポートを選択し、Connect ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. 適切なモデルをアップロードする

次に、使用したいモデルを選択し、下の **Send** ボタンをクリックします。以下は顔検出の例です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/1.png" style={{width:1000, height:'auto'}}/></div>

モデルが正常にアップロードされるまで、このページに 1～2 分間留まってください。このプロセス中に別のページタブに切り替えると、アップロードが失敗する可能性があることに注意してください（この問題は現在解決中で、近日中に修正される予定です）。

### ステップ 3. 観察

モデルが正常にアップロードされると、右側のプレビューで Grove Vision AI V2 カメラからのライブ映像を見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/2.png" style={{width:1000, height:'auto'}}/></div>

## XIAO ESP32S3 Sense を使用した Http サーバーのデプロイ

### ステップ 4. SSCMA パッケージをダウンロードして Arduino IDE にアップロード

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SSCMA Zip をダウンロード</font></span></strong></a>
</div>

ここから zip パッケージをダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/3.png" style={{width:1000, height:'auto'}}/></div>

このパッケージを Arduino IDE にアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/4.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. 2.4G Wi-Fi を設定し、プログラムを ESP32S3 Sense にアップロード

**カメラ Web サーバー**デモを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/13.png" style={{width:1000, height:'auto'}}/></div>

2.4G Wi-Fi の SSID とパスワードを設定します。（2.4G Wi-Fi に注意してください。5G ではありません。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
私の ESP32 ボードパッケージのバージョンは 2.0.14 です。プログラムに奇妙なエラーが発生した場合は、バージョンを 2.0.14 に変更してください。これはバージョン互換性の問題によるものです。
:::

XIAO ESP32S3 Sense の PSRAM 機能をオンにしてアップロードします。S3 のオーディオまたはビデオ機能を使用する場合はこれをオンにする必要があります。他の種類の XIAO ではこれをオンにする必要はありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/6.png" style={{width:1000, height:'auto'}}/></div>

正常に動作すると、以下のような結果が表示されます。エラーが発生した場合は、この記事の最後にある **FAQ** を確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/7.png" style={{width:1000, height:'auto'}}/></div>

## インテリジェント IP カメラへのアクセス

### ステップ 6. ブラウザで結果を確認

まず、コンピュータが Grove Vision AI V2 と同じ LAN にあることを確認してください。ブラウザを開き、前のステップで取得した IP アドレスを入力して **Start Stream** ボタンをクリックします。ブラウザで AI モデルが正常に動作しているのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

## FAQ

### 1. UART バッファ長エラー

以下のようなエラーが発生した場合。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/8.png" style={{width:1000, height:'auto'}}/></div>

まず、ESP32 コアディレクトリに移動し、esp32-hal-uart.c と esp32-hal-uart.h を見つけて開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/9.png" style={{width:1000, height:'auto'}}/></div>

次に、uartBegin 関数のバッファサイズを uint16_t から uint32_t に変更します。それを保存してプログラムを再アップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/10.png" style={{width:1000, height:'auto'}}/></div>

### 2. プログラムのアップロード失敗

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/11.png" style={{width:1000, height:'auto'}}/></div>

Boot ボタンを押し続けながら Reset ボタンを押し、その後放します。これにより XIAO が再起動し、この問題が解決されます。

### 3. ドットが表示され続ける

これはネットワーク接続の問題です。ネットワークが利用可能か確認してください。2.4G ですか？別のネットワークまたは別のアンテナに変更してください。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>