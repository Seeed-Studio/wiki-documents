---
description: これは組み込みAIに焦点を当てたオープンソースプロジェクト/プラットフォームです。
title: AI「Blink」
keywords:
- tinyml コース
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/sscma
last_update:
  date: 05/15/2025
  author: Matthew
---


## 使用するツールに慣れる

### SenseCraft AI プラットフォーム

Seeed Studio [SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai/#/model) は、ブラウザベースのAIソリューションです。

このプラットフォームは、ユーザーが公開されている膨大なAIモデルライブラリをエッジデバイスに簡単にデプロイできるようにし、**数回のクリック**で公開AIモデルを直接エッジデバイスにデプロイできるシームレスで使いやすい体験を提供します。

:::info
そのコアはオープンソースプロジェクトであり、[GitHub](https://github.com/Seeed-Studio/ModelAssistant) で共有しています。また、[開発方法](/ja/ModelAssistant_Introduce_Overview) も提供しています。
:::

#### ユーザーアカウント

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) は、ユーザーがすべての公開AIモデルやホームページをログインせずに閲覧できるオープンプラットフォームです。モデルをデプロイしたり、自分のモデルを共有したりする場合にのみ、サインアップとサインインが必要です。

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) と [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login)（旧 SenseCAP クラウドプラットフォーム）は、Seeed Studio が提供するソフトウェアサービスであり、どちらか一方のプラットフォームでアカウントを作成すれば、同じアカウントで両方のプラットフォームにサインインできます。

#### サインアップ

1. 名前と有効なメールアドレスを入力し、「get capcha」をクリックします。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png)

2. メールから認証コードを取得し、サインアップページに入力します。

:::note
認証コードは10分間有効です。10分以内に登録を完了してください。
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png)

3. パスワードやその他のユーザー情報を入力して登録を完了します。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png)

#### サインイン

登録したメールアカウントでサインインします。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png)

SenseCraft AI プラットフォームの詳細については、[こちら](https://wiki.seeedstudio.com/ja/sensecraft_ai_main/) を参照してください。

## SenseCraft AI プラットフォーム上のAIモデル

### モデルリスト

公開AIモデルはすべての公開されたAIモデルを表示します。カスタムAIモデルは、ユーザー自身がアップロードしたすべてのAIモデルを表示します。モデルは以下のようにリストに表示されます。

- モデル推論の例画像
- モデル名
- モデルの説明
- モデルのタスクタイプ（例：検出、分類、セグメンテーション、ポーズ、生成）
- サポートされているデバイス：このモデルのデプロイをサポートするデバイス
- このモデルを公開したユーザー名

**モデル検索**<br/>
モデル名、モデルタスク、サポートされているデバイス、モデルの公開者など、さまざまな種類のキー情報に基づいて検索機能を提供します。

**お気に入りモデル**<br/>
ユーザーは公開モデルをお気に入りに追加できます。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png)

SenseCraft AI プラットフォーム上のAIモデルに関する詳細情報は、[こちら](https://wiki.seeedstudio.com/ja/sensecraft_ai_overview/#pretrained-models) を参照してください。

## デバイスワークスペース

SenseCraft AIプラットフォームは、ユーザーがAIモデルを共有およびダウンロードできるAIモデルズーを提供するとともに、デバイスの推論結果をリアルタイムで確認し、デバイスを管理するためのデバイスワークスペースを備えています。これにより、デバイス管理の利便性と柔軟性が向上します。

### XIAO ESP32S3 ワークスペース

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

詳細は[XIAO ESP32S3 ワークスペースのドキュメント](https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_Workspace/)をご覧ください。

### Grove-Vision AI v2 ワークスペース

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

詳細は[Grove-Vision AI v2 ワークスペースのドキュメント](https://wiki.seeedstudio.com/ja/Grove_Vision_AI_v2_Workspace/)をご覧ください。

### Nvidia Jeson ワークスペース

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

詳細は[Nvidia Jeson ワークスペースのドキュメント](https://wiki.seeedstudio.com/ja/Nvidia_Jeson_Workspace/)をご覧ください。

#### SenseCraft AI-Jetson

SenseCraft AI-Jetsonは、NVIDIA Jetson Edge AIデバイス向けに設計された開発ツールキットおよびプラットフォームです。「クイックスタートスクリプト」を実行するだけで、事前にロードされたビデオとAIモデルを使用した例のアプリケーションを表示するインタラクティブなユーザーインターフェースが提供されます。USBカメラやIPカメラを追加したい場合も、数クリックで簡単に設定できます。

提供されるさまざまな組み込みAIモデルに加えて、SenseCraft AIプラットフォーム上の多数の公開モデルにアクセスでき、特定のシナリオに合わせたAIモデルをダウンロードして展開することが可能です。これにより、ニーズに基づいた個別のAIソリューションを作成できます。SenseCraft AIは、ビジョンAIのためのインテリジェントな意思決定パートナーとして、シンプルで柔軟かつ効率的な推論とソリューション構築能力を提供します。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

詳細は[SenseCraft AI-Jetsonのドキュメント](https://wiki.seeedstudio.com/ja/SenseCraft_AI_Jetson/)をご覧ください。

## AI「瞬き」：AIを迅速に活用する

### 1. 顔認識で始める

まず、[SenseCraft AIデプロイメントウェブサイト](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974)にアクセスし、XIAO ESP32S3 SenseをデータケーブルでPCに接続するだけで、顔認識を即座に表示できます。

#### ステップ1. XIAO ESP32S3 Sense拡張ボードをインストールする

まず、XIAO ESP32S3 Sense拡張ボードをXIAOに正しく接続する必要があります。拡張ボードのインストールは非常に簡単で、拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせて押し込み、「クリック」という音が聞こえたらインストール完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

#### ステップ2. XIAOをPCに接続する

データ転送機能付きのデータケーブルを使用してXIAOをPCに接続します。

#### ステップ3. SenseCraft AIプラットフォームページにアクセスし、XIAOを接続する

以下のボタンをクリックしてSenseCraft AIプラットフォームのホームページに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft AIプラットフォーム</font></span></strong></a>
</div><br />

SenseCraft AIプラットフォームのホームページに移動したら、まずXIAO ESP32S3を接続する必要があります。そのためには、**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai3.png" style={{width:800, height:'auto'}}/></div>

ブラウザがウィンドウをポップアップします。ここでXIAOの正しいポートを選択する必要があります。**Windows**の場合、このポートは通常**COM**で始まり、**MacOS**の場合、このポートは通常**/dev/tty**で始まります。そして、**USB JTAG**という言葉が含まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai4.png" style={{width:800, height:'auto'}}/></div>

**Connect**ボタンをクリックすると、ボードが自動的に識別され、構成情報が読み取られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai5.png" style={{width:800, height:'auto'}}/></div>

次に、**Select Model**ボタンをクリックして別のポップアップウィンドウを表示します。ここではデモ用に顔認識を選択しました。選択後、**Send**ボタンをクリックして数秒待つと、結果が直接表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai6.gif" style={{width:500, height:'auto'}}/></div>

これで完了です！初めてのMLモデルを正常にデプロイしました！

### 2. SenseCraftトリガー - 簡単なフィードバックアクションを実行する

つまり、顔を認識した際にXIAOのLEDを点灯させます。そのためには、**Output**セクションに移動し、「Trigger action」を選択してトリガーを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai7.png" style={{width:800, height:'auto'}}/></div>

ここでは、顔検出の信頼度が50%以上の場合にトリガーを有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai8.png" style={{width:800, height:'auto'}}/></div>

そして、**Trigger Action**は「LEDを点灯させる」です。その後、「Send」をクリックすると、顔が検出されるたびにオンボードLEDが点灯するのが確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai9.png" style={{width:800, height:'auto'}}/></div>

:::info
**おめでとうございます！** AI自動化システムを正常にデプロイしました！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai10.png" style={{width:800, height:'auto'}}/></div>
:::

<!--  ### 2. キーワードスポッティング (KWS) を使用して XIAO のオンボード LED を制御

#### デモ

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 仕組み

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 

**ステップ 2.1. 必要なファイルをすべてダウンロード**

以下の3つのバイナリファイルをダウンロードしてください。

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bootloader.bin"target="_blank"><b>ダウンロード</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.partitions.bin" target="_blank"><b>ダウンロード</b></a></td>
		</tr>
    <tr>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
      <td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bin" target="_blank"><b>ダウンロード</b></a></td>
    </tr>
	</table>
</div>

**ステップ 2. すべてのファイルを XIAO にフラッシュ**

以下のボタンをクリックして、SenseCraft AI Platform Flash Tools ページに移動してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Platform へ移動</font></span></strong></a>
</div><br />

ウェブページに移動したら、**Deployment** の **Connect** ボタンをクリックし、XIAO のポート番号を選択してください。ポートは **USB JTAG** と明確にラベル付けされているはずです。

* **ステップ 2.1** Deployment を選択
* **ステップ 2.2** Deploy を選択
* **ステップ 2.3** **Connect** をクリック

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab01.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

* **ステップ 2.4** XIAO を選択 - **USB JTAG** と明確にラベル付けされているはずです。
* **ステップ 2.5** 最後に **Connect** をクリック。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab2.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

接続が正しく行われたら、アップロードするファイルを選択できます。以下のフォーマットに従い、フラッシュアドレスを入力し、順番に正しいファイルを選択してください。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab3.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

<div class="table-center">
	<table align="center">
		<tr>
			<td>1</td>
			<td>0x0000</td>
			<td>bootloader.bin</td>
		</tr>
		<tr>
			<td>2</td>
			<td>0x8000</td>
			<td>partition-table.bin</td>
		</tr>
    <tr>
	  <td>3</td>
      <td>0x10000</td>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
    </tr>
	</table>
</div>

その後、**Burn** をクリックし、すべてのファイルの進行状況バーを確認してください。すべてのファイルが正常にフラッシュされることを確認してから終了してください。

**ステップ 3.** 再起動して効果を確認

すべてのファイルが正常にアップロードされたら、リセットボタンを押してプログラムの実行を開始してください。このサンプルプログラムの効果は、XIAO ESP32S3 Sense のマイクがあなたの発する「Hello」コマンドを検出すると、内蔵のオレンジ色のLEDが点灯します。「Stop」コマンドを検出すると、オレンジ色のライトが消灯します。

---

### 3. より多くのカスタムプリビルドモデル

:::tip
事前に準備された顔認識モデルに加えて、XIAO ESP32S3 用のさらなるモデルもサポートしていますので、ご期待ください！
:::

SenseCraft にはさまざまな組み込みモデルが用意されており、いくつかのモデルを試して実験することができます。

- 顔認識

  プレビュー:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png" style={{width:600, height:'auto'}}/></div>

- デジタルメータ水量計

  プレビュー:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

- yolov5 水量計

  プレビュー:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

#### モデルの使用方法

カスタムモデルを使用したい場合は、以下の手順に従ってください。

**ステップ 1. 「Ready to use AI models」にリストされているモデルを選択**

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Custom_models.png" style={{width:800, height:'auto'}}/></div>

ここでは水量計読み取りデモを選択しました。選択後、**Send** ボタンをクリックし、数秒待ちます。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png
" style={{width:800, height:'auto'}}/></div>

最後にプレビューセクションに移動し、右上の **Stop** を一度クリックしてから **Invoke** をクリックします。すべてが正常に動作すれば、リアルタイムの画面効果を見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/10.gif" style={{width:800, height:'auto'}}/></div> 

<hr></hr> -->

# ToDo
- [ ] SenseCraft AI プラットフォームを使用して**顔認識モデルをロードして実行**する。  
- [ ] SenseCraft AI プラットフォームを使用してトリガーを設定し、**LED を制御**する。

<!-- :::tip
この水道メーターが自動的に読み取りを生成する体験をしたい場合は、**[こちら](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**をクリックして zip パッケージをダウンロードし、解凍後、ルートディレクトリ内の html ファイルをダブルクリックして開いてください。
::: -->