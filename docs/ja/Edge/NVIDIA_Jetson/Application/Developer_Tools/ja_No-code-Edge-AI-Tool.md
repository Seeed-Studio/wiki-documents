---
description: ノーコードエッジAIツール
title: ノーコードエッジAIツール
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/No-code-Edge-AI-Tool
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# ノーコードエッジAIツール

Jetson Nanoを搭載したreComputerで、迅速かつ簡単な物体認識を実現する新しい体験をお届けします。

わずか数個の簡単なコマンドで環境をダウンロードして展開でき、ライブ画面からの監視、識別、結果出力のプロセスは3つのブロックより簡単にはできません。

## デモビデオ

**倉庫セキュリティデモ**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**農場警備デモ**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 事前準備

この例では、新しいNVIDIA Jetsonシステムで必要なものをダウンロードしてインストールする方法を説明し、その後Edge AI Toolを開いてライブカメラで物体検出を実行します。以下は手順の概要です。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. ダウンロードと展開
2. ブロックの配置
3. 結果の表示

### ハードウェア要件

開始する前に、以下のハードウェアを準備する必要があります。

<table>
  <thead>
    <tr>
      <th>ハードウェア画像</th>
      <th>ハードウェア名</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg" width={210} /></td>
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">Jetson Nanoモジュール搭載reComputer J1010</a><br />または <br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">Jetson Nanoモジュール搭載reComputer J1020</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Logitech C270 HD Webcam<br />または<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">Jetsonでサポートされているその他のV4L2 USBカメラ</a></td>
    </tr>
  </tbody>
</table>

!!!Attention
    この例は、Jetson Nano で構築された reComputer でのみ動作します。現時点では、Jetson Xavier NX で構築された reComputer はサポートされていませんが、将来的にはサポートされる予定です。

### ソフトウェア要件

開始する前に、デバイスに [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461) がフラッシュされていることを確認してください。Jetson Nano eMMC を JetPack 4.6.1 で再フラッシュしたい場合は、[こちら](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html)を参照してください。

インストールされている JetPack のバージョンは、ターミナルで以下を入力することで確認できます：

```sh
cat /etc/nv_tegra_release
```

そして出力は次のようになります

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**注意:** R32.7.1はJetPack 4.6.1に対応しています

## はじめに

上記で説明したようにハードウェアとソフトウェアの準備ができたら、Edge AI Toolの体験に進みましょう。この例では、必要に応じてディスプレイ、マウス、またはキーボードを接続してください。SSHやVNC経由でNVIDIA Jetsonをリモート制御することも可能です。

### ステップ1. ダウンロードとデプロイ

NVIDIA Jetsonでコマンドラインウィンドウを開き、以下のコマンドを入力してJetsonに必要なファイルをダウンロードします。

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

ダウンロードが完了したら、以下のコマンドを実行して必要なdockerを起動します。

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

インストールと起動プロセス全体には約7〜9分かかります。

### ステップ2. ブロックを配置する

インストールが完了したら、NVIDIA Jetsonシステムに付属のGoogle Chromeブラウザを使用して、以下のURLを入力して操作インターフェースにアクセスします。

```
127.0.0.1:1880
```

IPアドレスにポート番号（1880）を加えてアドレスバーに入力することで、アクションページにアクセスすることもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

下図でEdge AI Toolの操作の配置を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **ブロックエリア：** このエリアには、ユーザーが操作できる多数のブロックが配置されています。

- **プログラミングエリア：** このエリアはユーザーのプログラミングエリアです。ユーザーはブロックエリアからプログラミングエリアにブロックをドラッグ&ドロップしてプログラムを完成させることができます。

- **設定エリア：** 右端は設定エリアです。ここではプログラミングエリアのフローを確認でき、このエリアで必要な設定やブロックの操作設定などを完了できます。

ブロックエリアには**seeed recomputer**というセクションがあり、これら3つのブロックの使用に焦点を当てます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input：** このブロックはカメラ入力からビデオストリームを取得するために使用されます。このブロックはWebカメラやローカルV4L2 USBカメラなどを選択するように設定できます。

- **detection：** このブロックは認識に使用するモデルを選択するために使用されます。入力ビデオストリームは選択したモデルを使用して認識されます。現在のバージョンでは**COCOデータセット**のみ使用できます。

- **video view：** このブロックは処理されたビデオストリームを画面に出力するために使用されます。

次に、ブロックの構成を見てみましょう。**video input**ブロックを例に取ります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

このブロックの左側には青い四角いエリアがあります。このエリアが隠れている場合、ビデオストリーミング入力がオフになっていることを意味します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

このエリアが表示されている場合、ビデオストリーミング入力がオンになっていることを意味します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

同様に、video viewブロックの右側にもこのような四角いブロックがあります。隠すとビデオストリーム出力の表示がオフになり、その逆も同様です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

ブロックの右上に青い点がある場合、これはブロックが編集されたがデプロイされていないことを示すリマインダーです。ちなみに、プロジェクト全体が実行され、ブロックでプログラムしてデプロイしてから結果が表示される必要があります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

ブロックの右側にある灰色の四角は、ブロックが接続される場所です。ここで左マウスボタンをクリックして、次のブロックの左側の接続部分にドラッグすると、2つのブロックを接続してプログラムフローを形成できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

プログラムフローは**左から右**の順序で実行され、左側の接続部は右側の接続部にのみ接続できることに注意してください。

ブロックの左側に接続部がない場合、プログラムフローの開始ノードとして使用する必要があります。ブロックの右側に接続がない場合、プログラムフロー全体の終了ノードとして使用する必要があります。

**object detection**のような2つの接続部を持つブロックは、ブロックに複数の異なる内容を出力できることを意味します。その後、ビデオストリームとログの両方を出力することが可能です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

ブロックの使用も非常に簡単で迅速です。左マウスボタンを長押しして使用したいブロックをドラッグし、メイン画面のプログラミングエリアにドラッグできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

上記のブロックの説明に基づいて、以下のような簡単なブロック手順を設計できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

上記のプログラムは、カメラから入力ビデオストリームを取得し、モデル検出を使用してオブジェクトを認識した結果を入力するものです。

### ステップ3. 結果の表示

ブロックを配置した後、使用する前にブロックの簡単な設定を行う必要があります。特定のブロックを設定したい場合は、それをダブルクリックすると、対応する設定ボックスが右側にポップアップします。

まず**video input**ブロックの設定から始めましょう。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **Device type：** ここでお持ちのカメラのタイプを設定できます。現在、webcamとlocal cameraの2種類のカメラがサポートされています。

- **Video：** ここでカメラを選択します。ここで利用可能なカメラがない場合は、カメラがサポートされているか、正常に接続されているかを再確認してください。

- **URL：** Webカメラを選択した場合、VideoフィールドはURLになります。ここにWebカメラの入力ソースを入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **Resolution：** ここでカメラの解像度を選択します。間違った解像度を選択すると、ランタイムエラーが発生する可能性があります。

**object detection**ブロックの設定は以下の通りです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **Model name：** ここでオブジェクト認識のモデル名を選択します。現在はCOCOデータセットのみがサポートされています。

!!!Note
    COCOは大規模なオブジェクト検出、セグメンテーション、キャプション付けデータセットです。COCOには以下の特徴があります：
    - オブジェクトセグメンテーション
    - コンテキスト内での認識
    - スーパーピクセルスタッフセグメンテーション
    - 330K画像（>200Kラベル付き）
    - 150万オブジェクトインスタンス
    - 80オブジェクトカテゴリ
    - 91スタッフカテゴリ
    - 画像あたり5キャプション
    - キーポイント付き250,000人

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

完了したら、インターフェースの右上角にある**deploy**ボタンをクリックすると、プログラムストリームが実行を開始します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

すべてが正常であれば、ビデオストリームによって識別されたオブジェクトがボックスで囲まれ、信頼度の値が与えられているのを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## 詳細な操作

前の章では、Edge AI Toolプログラムを最もシンプルな形で体験しました。このセクションでは、Edge AI Toolのより多くの拡張機能をご紹介します。

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### ブロックのダウンロード

ブロックセクションのブロックに加えて、より複雑なプロジェクトを完成させるために必要な数のブロックをダウンロードできます。

右側のSetup Areaには、その他のオプション用のボタンがあり、**Manage palette**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

ポップアップページでは、インストールされたブロックを確認でき、**Install**を選択してより多くのブロックをダウンロードできます。ここでは、メールボックスブロックを例に取ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

インストール後、新しくインストールされたブロックはブロックセクションの下部で確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### 他のプロジェクトのインポート

興味深いプロジェクトを他の人と共有して体験してもらいたい場合があります。または、他の人のプロジェクトを自分で使用したい場合もあるでしょう。そのような場合は、以下の方法を参照してください。

右側のSetup Areaには、その他のオプション用のボタンがあり、**Import**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

次に、ポップアップウィンドウで共有または取得したコードを貼り付けることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

この例では、カメラを通じて誰かが環境に入ったかどうかをリアルタイムで検出し、人が検出された場合にメール通知を送信する機能に焦点を当てた素晴らしいプロジェクトを共有します。

```json
[
    {
        "id": "7963f97f362cdfc6",
        "type": "tab",
        "label": "warning email",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "41a8f267df4eb722",
        "type": "video input",
        "z": "7963f97f362cdfc6",
        "name": "",
        "deviceType": "rtsp",
        "rtsp": "",
        "local": "video0",
        "resolution": "2560",
        "frequency": "60",
        "senderr": true,
        "active": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "c5fef75b0ab418c6"
            ]
        ]
    },
    {
        "id": "c5fef75b0ab418c6",
        "type": "detection",
        "z": "7963f97f362cdfc6",
        "name": "",
        "modelName": "coco_dataset",
        "showResult": true,
        "senderr": true,
        "x": 380,
        "y": 200,
        "wires": [
            [
                "40523cc8b61cfcc9"
            ],
            [
                "689c67f6610be9e2"
            ]
        ]
    },
    {
        "id": "40523cc8b61cfcc9",
        "type": "video view",
        "z": "7963f97f362cdfc6",
        "name": "",
        "width": 640,
        "data": "payload",
        "dataType": "msg",
        "thumbnail": false,
        "active": false,
        "pass": false,
        "outputs": 0,
        "x": 650,
        "y": 140,
        "wires": []
    },
    {
        "id": "689c67f6610be9e2",
        "type": "switch",
        "z": "7963f97f362cdfc6",
        "name": "person intrusion detected",
        "property": "payload.labels",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "person",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 540,
        "wires": [
            [
                "40f6ca0fbb322dd5"
            ]
        ]
    },
    {
        "id": "40f6ca0fbb322dd5",
        "type": "e-mail",
        "z": "7963f97f362cdfc6",
        "server": "",
        "port": "465",
        "secure": true,
        "tls": true,
        "name": "",
        "dname": "warning email",
        "credentials": {
            "userid": "",
            "password": ""
        },
        "x": 720,
        "y": 620,
        "wires": []
    },
    {
        "id": "80a51065a9ee835e",
        "type": "ui_spacer",
        "z": "7963f97f362cdfc6",
        "name": "spacer",
        "group": "529bf2dedebe9911",
        "order": 2,
        "width": 12,
        "height": 1
    },
    {
        "id": "529bf2dedebe9911",
        "type": "ui_group",
        "name": "Default",
        "tab": "ad4ccf9922566f44",
        "order": 1,
        "disp": true,
        "width": 20,
        "collapse": false,
        "className": ""
    },
    {
        "id": "ad4ccf9922566f44",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

コードは直接使用できないことに注意してください。ウェブカメラの入力ソースを `"rtsp": "",` に記入する必要があります。メールサーバーアドレスを `"server": "",` に記入し、`"credentials": {
            "userid": "",
            "password": ""
        },` にユーザー名とパスワードを記入してください。

すべての準備が整うと、ブロックプログラムが動作し、アクティビティを検出したときにメールを送信します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

このプロジェクトでは、**switch** と **email** という2つの新しいブロックが使用されています。

switchビルディングブロックは、設定した判定情報に基づいてプログラムの進行を制御する場所です。例えば、このプログラムではswitchブロックに **person intrusion detected** という名前を付け、プロパティ **payload.labels** を記入しています。**payload.labels** は前のブロック **object detection** のキー値です。プロパティの値が **person** と等しい場合、switch後に接続されたブロックが実行されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

emailブロックの設定はもう少し簡単で、メールボックスがサポートするプロトコルに応じて、メッセージを受信したいメールアドレスとサーバーアドレスを記入するだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

もちろん、コードを直接コピーしてコードの変更を完了すれば、ブロックにさらなる変更を加える必要はありません。グラフィカルインターフェースの使用に慣れている場合は、ブロック設定でこれらの要素の設定を完了することもできます。

## トラブルシューティング

### dockerが正常に起動しない場合、およびブロックにseed recomputerがない場合はどうすればよいですか？

以下のコマンドでdockerをシャットダウンして再起動できます。

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### デバッグで結果が確認できない場合やエラーが発生した場合はどうすればよいですか？

以下のコマンドを使用して、dockerのインストールが正しいかどうかを確認してください。図に示されている3つのdockerが表示されるはずです。いずれかが不足している場合は、**Getting Started**の最初のステップに戻り、dockerを再インストールしてください。

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

インストールが画像と一致している場合は、以下のコマンドを使用して起動したdockerの実行状態を確認してください。

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

上記の画像のようにdockerが開始されていない場合は、dockerを再起動するか、デバイスのモデルとシステムバージョンが要件に一致しているかを確認してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
