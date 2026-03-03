---
description: これは組み込みAIに焦点を当てたオープンソースプロジェクト/プラットフォームです。
title: 独自のAIモデルをトレーニングしてデプロイする
keywords:
- tinyml コース
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/train_and_deploy_model
last_update:
  date: 05/15/2025
  author: Frank
---


# 独自のAIモデルをトレーニングしてデプロイする

## SenseCraft AIプラットフォーム

Seeed Studio [SenseCraft AIプラットフォーム](https://sensecraft.seeed.cc/ai/#/model)はブラウザベースのAIソリューションです。

ユーザーが簡単に独自のモデルをトレーニングしてエッジデバイスにデプロイできるようにし、シームレスで使いやすい体験を提供します。**数回クリックするだけで**、独自のモデルをトレーニングしてエッジデバイスにデプロイすることができます。

:::info
このプラットフォームの核となる部分はオープンソースプロジェクトであり、[GitHub](https://github.com/Seeed-Studio/ModelAssistant)で共有しています。また、[開発方法](/ja/ModelAssistant_Introduce_Overview)も提供しています。
:::

## モデルのトレーニングを開始する

まず、[SenseCraft AIデプロイメントウェブサイト](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974)にアクセスし、XIAO ESP32S3 SenseをデータケーブルでPCに接続するだけで、すぐに使用を開始できます。

#### ステップ1. XIAO ESP32S3 Sense拡張ボードをインストールする

まず、XIAO ESP32S3 Sense拡張ボードをXIAOに正しく接続する必要があります。拡張ボードのインストールは非常に簡単で、拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせて押し込み、「クリック」という音が聞こえたらインストール完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

#### ステップ2. XIAOをPCに接続する

データ転送機能付きのデータケーブルを使用してXIAOをPCに接続します。

#### ステップ3. SenseCraft AIプラットフォームページにアクセスしてXIAOを接続する

以下のボタンをクリックしてSenseCraft AIプラットフォームのホームページにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft AIプラットフォーム</font></span></strong></a>
</div><br />

#### ステップ4. モデルのトレーニングを開始する

SenseCraft AIプラットフォームのホームページに入ったら、まず`Training`をクリックし、次に`Classification Type`を選択してクラスに名前を付け、最後に`XIAO ESP32S3 Sense`を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/1.png" style={{width:800, height:'auto'}}/></div>

次に、分類の要件に基づいてクラスを参照し、`Hold to Record`をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/2.png" style={{width:800, height:'auto'}}/></div>

今回は、ジェスチャー認識の要件を選択し、「12345」を分類しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/3.png" style={{width:800, height:'auto'}}/></div>

:::tip

画像をキャプチャする: 各クラスで10枚以上の画像を撮影するのが理想的です。多いほど良いです。

:::

データ収集が完了したら、トレーニングセクションで`XIAO ESP32S3 Sense`を選択し、`Start Training`をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/4.png" style={{width:800, height:'auto'}}/></div>

トレーニングが完了すると、リアルタイムプレビューを通じてトレーニング結果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/5.png" style={{width:800, height:'auto'}}/></div>

#### ステップ5. モデルをデプロイする

トレーニング結果をプレビューしてトレーニングしたモデルが問題ないことを確認したら、`Training Records`を選択し、最近トレーニングしたモデル（「ClassTrain」と「XIAO」と名付けられたもの）を選択して`Deploy to device`をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/6.png" style={{width:800, height:'auto'}}/></div>

デバイスへのデプロイが成功すると、結果が直接表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/7.gif" style={{width:800, height:'auto'}}/></div>

これで最初のMLモデルのトレーニングが成功しました！

:::info

時間がある場合は、以前学んだ[「Output」操作](https://wiki.seeedstudio.com/ja/sscma/#2-sensecraft-triggers---do-a-simple-feedback-action)を試してみることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/8.png" style={{width:800, height:'auto'}}/></div>

:::

# ToDo
- [ ] SenseCraft AI プラットフォームを使用してモデルをトレーニングおよびデプロイする。
- [ ] SenseCraft AI プラットフォームでトリガーを設定し、**LED を制御**する。

## (オプション) フェデレーション: データを遠隔地に送信する

このステップでは、XIAO ESP32S3 Sense から Wi-Fi と MQTT を使用してデータをリモートデバイスに送信し、リモートでのデプロイメントを確認できるようにします。

### ステップ 1. デバイスで MQTT を設定してテストする

例として、NVIDIA Jetson reComputer J4012 を使用します。このデバイスは MQTT ブローカーのインストールをサポートしており、最も重要な点は 100 TOPS の AI パワーを提供し、ローカルで LLM を適用できることです。

SenseCraft AI プラットフォームは Wi-Fi と MQTT 接続をサポートしています。

<iframe width={800} height={480} src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing & Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

まず、MQTT ブローカー (Mosquitto) をインストールし、MQTT サーバーを設定します。

```
sudo apt-get update
sudo apt-get install mosquitto
```

これで reComputer (Linux) に Mosquitto のインストールが完了します。

次に以下のコマンドを実行します：

```
sudo service mosquitto start
```

これで Mosquitto を開始します。

その後、以下のコマンドを実行して Mosquitto がアクティブ化されているか確認します：

```
sudo service mosquitto status
```

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_1-3919de85499db74b41cf3057bcdfe6bd.png)

:::info
テスト:

トピックを作成/購読する場合：

```
mosquitto_sub -h localhost -t "LED"
```

データを送信/公開する場合：

```
mosquitto_pub -h localhost -t "LED" -m "1"
mosquitto_pub -h localhost -t "LED" -m "test"
```

結果を取得し、すべて正常に動作しているようです：

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_3-281bf87c08ecdb601595625229a7e1df.png)
:::

`localhost` は `192.168.66.184` (reComputer として) です：

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_2-8202adc158ca9aa540a264c288c431ed.jpg)

### ステップ 3. SenseCraft AI プラットフォームで XIAO ESP32S3 Sense を設定する

SenseCraft AI プラットフォームでは、「Configuration」ページを参照できます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_1.png" style={{width:800, height:'auto'}}/></div>

:::info
- SSID: (MQTT デバイスと同じ Wi-Fi 名)
- Password: (MQTT デバイスの Wi-Fi パスワード)
- Encryption: AUTO
- MQTT: Yes
- Host: (MQTT デバイスの IP アドレス)
- Port: 1883

この例では、MQTT デバイスは上記の reComputer です。
:::

### ステップ 3. XIAO ESP32S3 Sense からデータを受信して表示する

受信部分では、以下のコマンドでクライアントをインストールできます：

```
pip install python-sscma
```

これは [sscma_micro](https://github.com/Seeed-Studio/sscma_micro) 用の統合クライアントであり、[SSCMA](https://github.com/Seeed-Studio/SSCMA) モデル用のサーバーとして機能するマイクロコントローラーです。

その後、以下のコマンドを使用してデータを受信します：

```
sscma.cli client --broker mqtt.broker.com --device device_id 
```

:::info
この場合、`mqtt.broker.com` は 192.168.66.184、`device_id` は SenseCraft AI プラットフォーム上の XIAO ESP32S3 Sense から取得します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_2.png" style={{width:300, height:'auto'}}/></div>
:::

### ステップ 4. (近日公開) 複数の XIAO を 1 ページでフェデレーションする

### ステップ 5. (近日公開) XIAO から画像を自動的に監視するために LLM を有効化する