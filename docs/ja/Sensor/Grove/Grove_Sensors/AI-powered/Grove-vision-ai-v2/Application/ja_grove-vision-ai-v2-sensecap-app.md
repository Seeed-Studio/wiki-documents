---
description: Grove Vision AI V2 を SenseCAP Mate APP に接続する方法を紹介します。
title: Grove Vision AI V2 を SenseCAP Mate APP に接続する
keywords:
- sensecap mate
- grove vision ai v2
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/connect_vision_ai_v2_to_sensecap_mate
last_update:
  date: 05/15/2025
  author: Citric
---


# Grove Vision AI V2 を SenseCAP Mate APP に接続する

**[SenseCAP Mate APP](https://sensecap-mate-download.seeed.cn/)** は、データの可視化とリモートデバイス管理のための強力なアプリです。

- 時間を節約: スキャン＆プレイ体験を提供し、4つのステップで全体の設定を完了可能
- 技術的な背景が少ない、またはない人でも簡単にセンサーデータを利用可能
- クリーンなユーザーインターフェースでデータを取得および表示
- 時間間隔を設定: バッテリー効率を向上
- 閾値を設定: 必要なデータに集中してアクションを実行
- データが安全範囲外の場合にアラームを送信

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/1.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>詳細を見る 🖱️</font></span></strong>
    </a>
</div>

このチュートリアルでは、Grove Vision AI V2 と XIAO ESP32C3 を SenseCAP Mate APP に接続する方法を案内します。

## はじめに

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

### 必要な材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32C3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV カメラモジュール<br />Raspberry Pi 3B+4B 用</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

次に、XIAO と Grove Vision AI V2 をピン列を介して接続する必要があります（または拡張ボードと Grove インターフェースを使用）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

### ソフトウェアの準備

適切な USB-C ケーブルを使用して XIAO ESP32C3 をコンピュータに接続します。デバイスドライバが正しくインストールされていることを確認してください。

[SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) をウェブブラウザで開きます。これはメーカーが提供するサービス、または ESP デバイスのフラッシュ用に設計されたサードパーティツールである可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

次に **XIAO ESP32S3** を選択し、**Connect** をクリックします。

:::caution
ここでは XIAO ESP32S3 を選択していますが、実際には XIAO ESP32C3 を使用していますのでご注意ください！
:::

以下のボタンをクリックしてファームウェアファイルをダウンロードし、ウェブページ上の **Add File** ボタンをクリックして `XIAO_C3_as_AT_module.bin` ファームウェアを `0x0` アドレスにフラッシュします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファイルをダウンロード</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最後に **Flash** ボタンをクリックし、プログラムが正常にアップロードされるのを待ってから、XIAO ESP32C3 をコンピュータから**切断**します。

## SenseCAP アカウント登録とソフトウェア準備

### ステップ 1. SenseCAP アカウントを登録する

初めてSenseCAPを使用する場合は、**[SenseCAP ウェブサイト](https://sensecap.seeed.cc)**でアカウントを登録する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/2.png" style={{width:1000, height:'auto'}}/></div>

登録後、SenseCAP ウェブサイトにログインしてください。

### ステップ 2. SenseCAP Mate アプリをスマートフォンにダウンロードする

デバイスのメッセージをいつでもどこでも確認したい場合は、SenseCAP Mate アプリをインストールすることを検討してください。このアプリはSenseCAPを使用するモバイルデバイスです。以下のボタンをクリックすると、自分に合った方法でSenseCAP Mate アプリをインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/3.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecap-mate-download.seeed.cn/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>アプリをダウンロード 🖱️</font></span></strong>
    </a>
</div>

## SenseCAP でのデバイス設定

### ステップ 3. デバイスを追加する

ウェブサイトに戻り、Grove Vision AI V2 を追加することから始めましょう。

ページ左側のカタログバーで **Development Kit** を選択し、中央の **Create Development Kit** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/5.png" style={{width:1000, height:'auto'}}/></div>

デバイスに名前を付け、デバイスを **Grove - Vision AI V2** として選択し、**Confirm** ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/6.png" style={{width:600, height:'auto'}}/></div>

新しいデバイスを作成した後、デバイスの右側にある **Connect** ボタンをクリックしてください。必要なデバイスを接続するための一連のポップアップが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/7.png" style={{width:1000, height:'auto'}}/></div>

これらの認証情報を保持してください。ネットワーク設定で後ほど使用します。

## SenseCraft AI モデル準備と MQTT 設定

### ステップ 4. Grove Vision AI V2 を SenseCraft AI モデルアシスタントに接続する

上記の手順を続けて、ページ中央の **Deploy** ボタンをクリックします。この時点で SenseCraft AI モデルデプロイメントページに直接移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/14.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/15.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. 適切なモデルをアップロードする

まず、左側のカタログバーで **Grove - Vision AI V2** を選択し、使用したいモデルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/16.png" style={{width:1000, height:'auto'}}/></div>

モデルページに移動すると、このモデルの詳細な説明を読むか、ページ上でモデルをデプロイすることができます。ページ右上の **Deploy Model** ボタンをクリックして、モデルのデプロイメントページに進みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/17.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 を XIAO ESP32C3 とカメラを取り付けた状態で USB-C ケーブルを使用してコンピュータに接続します。

:::tip
ケーブルは Grove Vision AI V2 をコンピュータに接続する必要があり、XIAO ではありません。
:::

その後、下部の **Connect** ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/18.png" style={{width:1000, height:'auto'}}/></div>

新しいウィンドウで **Confirm** をクリックし、デバイスが接続されているポート番号を選択します。モデルがアップロードされるまで 1～2 分待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/19.png" style={{width:1000, height:'auto'}}/></div>

モデルのフラッシュが成功すると、プレビューでライブ画面が表示され、モデルに関する情報も確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/20.png" style={{width:1000, height:'auto'}}/></div>

:::tip
プレビューに画面が表示されない、またはモデル情報が表示されない場合、モデルに問題がある可能性があります。その場合はモデルを再選択するか、再度アップロードしてください。
:::

### ステップ 6. Grove Vision AI V2 & XIAO のネットワーク設定

モデルアシスタントの設定ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/21.png" style={{width:1000, height:'auto'}}/></div>

MQTT ボタンをオンにし、以下の情報をページに入力してください。

- **SSID & Password**: XIAO が接続するネットワークの名前とパスワード。XIAO は 2.4G WiFi のみをサポートしており、5G ネットワークは利用できません。

**[ステップ 3](#step-3-add-device)** でSenseCAPに追加した Grove Vision AI V2 のデバイス情報に基づいてネットワーク設定を入力してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/23.png" style={{width:1000, height:'auto'}}/></div>

その後、下部の Save ボタンをクリックしてください。保存後も、**Grove Vision AI V2 が正しく書き込まれたことを意味するわけではありません**。左側のメニューバーの **Process** に戻り、デバイスの IP アドレスが表示されているか、MQTT 接続の状態が正しいかを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
IPアドレスが表示されている場合、WiFiに問題がないことを意味します。また、サービスステータスは図中のテキストである必要があり、正常であることを示します。WiFiが正常でない場合、MQTTも確実に正常ではありません。切り替えたばかりの場合、接続されていないと表示されることがありますが、約10秒ほど待つ必要があります。ステータスを確認するためにリフレッシュする必要はなく、ステータスが変更されると自動的に最新の状態が表示されます。
:::

完了したら、**Stop**ボタンをクリックして推論を停止し、**Disconnect**ボタンをクリックしてシリアルポートを切断します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/9.png" style={{width:1000, height:'auto'}}/></div>


## PaaS側とSenseCAP Mate APPの観察

### ステップ7. Mate APPで結果を確認する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/22.png" style={{width:1000, height:'auto'}}/></div>

スマートフォンを開き、アカウント番号とパスワードを入力してログインします。スマートフォンはPaaSデバイス情報を同期します。

:::caution
登録した正しいサイトを選択してください。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/11.png" style={{width:400, height:'auto'}}/></div>

ログイン後、新しく作成したデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/12.png" style={{width:400, height:'auto'}}/></div>

デバイスに入ると、画面と結果を観察することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/13.png" style={{width:400, height:'auto'}}/></div>

## トラブルシューティング

### Q1: ネットワークの問題

プロセスページでIPアドレスが表示されたり消えたりするのを繰り返し観察する場合、ネットワークが不安定である可能性があります。ネットワークを変更するか、より強力なアンテナに交換することを検討してください。

### Q2: Mate APPで画面が見えないのはなぜですか？

SSCMAのライブプレビューとSenseCAP PaaSのプレビュー結果のいずれか一方のみが同時にアクティブにすることができます。そのため、SenseCraft AIのプロセスページで推論のリアルタイム画面表示をオフにする必要があることを覚えておいてください。

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>