---
description: コード不要のエッジAIツール
title: コード不要のエッジAIツール
keywords:
  - エッジ
  - reComputer アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/No-code-Edge-AI-Tool
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# コード不要のエッジAIツール

Jetson Nanoを搭載したreComputerで、迅速かつ簡単にオブジェクト認識を行う新しい体験をお届けします。

いくつかの簡単なコマンドを入力するだけで、環境をダウンロードして展開でき、ライブ画面からの監視、識別、結果の出力プロセスは、3つのブロックでこれ以上簡単にはなりません。

## デモ動画

**倉庫セキュリティデモ**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube動画プレーヤー" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**農場警備デモ**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube動画プレーヤー" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 事前準備

この例では、新しいNVIDIA Jetson システムの下で必要なものをダウンロードしてインストールする方法を説明し、その後エッジAIツールを開いてライブカメラでオブジェクト検出を行います。以下は手順の概要です。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. ダウンロードと展開
2. ブロックの配置
3. 結果の表示

### ハードウェア要件

開始する前に、以下のハードウェアを準備してください。

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
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">Jetson Nanoモジュール搭載reComputer J1010</a><br />または<br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">Jetson Nanoモジュール搭載reComputer J1020</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Logitech C270 HDウェブカメラ<br />または<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">Jetson対応の他のV4L2 USBカメラ</a></td>
    </tr>
  </tbody>
</table>

!!!注意
    この例はJetson Nanoを搭載したreComputerでのみ動作します。Jetson Xavier NXを搭載したreComputerは現時点ではサポートされていませんが、将来的にはサポートされる予定です。

### ソフトウェア要件

開始する前に、デバイスが[JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)でフラッシュされていることを確認してください。Jetson NanoのeMMCをJetPack 4.6.1で再フラッシュしたい場合は、[こちら](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html)を参照してください。

インストールされているJetPackのバージョンを確認するには、ターミナルで以下を入力してください：

```sh
cat /etc/nv_tegra_release
```

出力は以下のようになります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**注意:** R32.7.1はJetPack 4.6.1に対応しています。

## はじめに

ハードウェアとソフトウェアが上記のように準備できたら、Edge AI Tool の操作を始めましょう。この例では、必要に応じてディスプレイ、マウス、またはキーボードを接続してください。また、NVIDIA Jetson を SSH または VNC を使用してリモートで操作することも可能です。

### ステップ 1. ダウンロードとデプロイ

NVIDIA Jetson 上でコマンドラインウィンドウを開き、以下のコマンドを入力して必要なファイルを Jetson にダウンロードします。

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

ダウンロードが完了したら、以下のコマンドを実行して必要な Docker を起動します。

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

インストールと起動プロセス全体には約 7 ～ 9 分かかります。

### ステップ 2. ブロックの配置

インストールが完了したら、NVIDIA Jetson システムに付属の Google Chrome ブラウザを使用して、以下の URL を入力し、操作インターフェースにアクセスします。

```
127.0.0.1:1880
```

または、IP アドレスとポート番号（1880）をアドレスバーに入力して、操作ページにアクセスすることもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

以下の図は、Edge AI Tool の操作分布を示しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **ブロックエリア:** このエリアには、ユーザーが操作できるさまざまなブロックが配置されています。

- **プログラミングエリア:** このエリアはユーザーのプログラミングエリアです。ユーザーはブロックエリアからブロックをドラッグ＆ドロップしてプログラムを完成させることができます。

- **設定エリア:** 右端には設定エリアがあります。このエリアでは、プログラミングエリアのフローを確認したり、必要な設定やブロックの操作を行うことができます。

ブロックエリアには **seeed recomputer** というセクションがあり、ここでは以下の 3 つのブロックの使用に焦点を当てます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input:** このブロックはカメラ入力からビデオストリームを取得するために使用されます。このブロックを設定して、ウェブカメラやローカルの V4L2 USB カメラなどを選択できます。

- **detection:** このブロックは認識するモデルを選択するために使用されます。入力されたビデオストリームは、選択したモデルを使用して認識されます。このバージョンでは、現在 **COCO データセット** のみが使用可能です。

- **video view:** このブロックは、処理されたビデオストリームを画面に出力するために使用されます。

次に、ブロックの構成を見てみましょう。例として **video input** ブロックを取り上げます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

このブロックの左側には青い四角いエリアがあります。このエリアが非表示の場合、ビデオストリーミング入力がオフになっていることを意味します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

このエリアが表示されている場合、ビデオストリーミング入力がオンになっていることを意味します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

同様に、video view ブロックの右側にもこのような四角いブロックがあります。非表示にするとビデオストリーム出力の表示がオフになり、表示されている場合はオンになります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

ブロックの右上に青い点がある場合、それはブロックが編集されたが、まだデプロイされていないことを示しています。ちなみに、プロジェクト全体を実行するには、ブロックをプログラミングしてデプロイする必要があります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

ブロックの右側にある灰色の四角は、ブロックを接続するための場所です。ここを左クリックして次のブロックの左側の接続部分までドラッグすると、2 つのブロックを接続してプログラムフローを形成できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

プログラムフローは **左から右** の順序で実行されることに注意してください。また、左側の接続部分は右側の接続部分にのみ接続できます。

ブロックの左側に接続部分がない場合、それはプログラムフローの開始ノードとして使用されるべきです。ブロックの右側に接続部分がない場合、それはプログラムフロー全体の終了ノードとして使用されるべきです。

**object detection** のように 2 つの接続部分を持つブロックは、複数の異なる内容をブロックに出力できることを意味します。この場合、ビデオストリームとログの両方を出力することが可能です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

ブロックの使用は非常に簡単で迅速です。左クリックを長押しして使用したいブロックをドラッグし、メイン画面のプログラミングエリアに移動させるだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

上記のブロックの説明に基づいて、以下のような簡単なブロック手順を設計することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

上記のプログラムは、カメラから入力されたビデオストリームを取得し、モデル検出を使用してオブジェクトを認識した結果を入力するものです。

### ステップ 3. 結果の表示

ブロックを配置した後、使用する前にブロックの簡単な設定を行う必要があります。特定のブロックを設定したい場合は、そのブロックをダブルクリックすると、右側に対応する設定ボックスが表示されます。

まず **video input** ブロックを設定してみましょう。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **Device type:** ここでは使用しているカメラの種類を設定できます。現在、ウェブカメラとローカルカメラの 2 種類がサポートされています。

- **ビデオ:** ここでカメラを選択してください。ここにカメラが表示されない場合は、カメラがサポートされているか、正常に接続されているかを再確認してください。

- **URL:** ウェブカメラを選択した場合、ビデオフィールドはURLに変わります。ここではウェブカメラの入力ソースを入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **解像度:** ここでカメラの解像度を選択してください。間違った解像度を選択すると、実行時エラーが発生する可能性があります。

**物体検出**ブロックの設定は以下の通りです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **モデル名:** ここで物体認識用のモデル名を選択します。現在はCOCOデータセットのみがサポートされています。

!!!注意
    COCOは、大規模な物体検出、セグメンテーション、およびキャプション生成のためのデータセットです。COCOには以下の特徴があります：
    - オブジェクトセグメンテーション
    - コンテキスト内認識
    - スーパー画素セグメンテーション
    - 33万枚の画像（20万枚以上がラベル付き）
    - 150万の物体インスタンス
    - 80の物体カテゴリ
    - 91の背景カテゴリ
    - 各画像に5つのキャプション
    - キーポイント付きの25万人

    <div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

設定が完了したら、インターフェース右上の**デプロイ**ボタンをクリックしてください。プログラムストリームが実行を開始します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

すべてが正常であれば、ビデオストリームで識別された物体がボックスで囲まれ、信頼値が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## 詳細な操作

前章では、Edge AI Toolプログラムの最も簡単な形を体験しました。このセクションでは、Edge AI Toolのさらなる拡張について説明します。

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### ブロックのダウンロード

ブロックセクションにあるブロックに加えて、より複雑なプロジェクトを完成させるために必要なブロックをダウンロードすることができます。

右側のセットアップエリアにある「その他のオプション」ボタンをクリックし、**パレットの管理**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

ポップアップページで、インストール済みのブロックを確認し、**インストール**を選択してさらにブロックをダウンロードできます。ここでは、メールボックスブロックを例にします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

インストール後、新しくインストールされたブロックはブロックセクションの下部に表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### 他のプロジェクトのインポート

興味深いプロジェクトを他の人と共有したい場合や、他の人のプロジェクトを自分で使用したい場合は、以下の方法を参照してください。

右側のセットアップエリアにある「その他のオプション」ボタンをクリックし、**インポート**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

次に、共有または取得したコードをポップアップウィンドウに貼り付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

この例では、カメラを使用して環境に誰かが入ったかどうかをリアルタイムで検出し、人が検出された場合にメール通知を送信する能力に焦点を当てた素晴らしいプロジェクトを共有します。

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

コードは直接使用可能ではないことに注意してください。`"rtsp": ""`にはウェブカメラの入力ソースを入力し、`"server": ""`にはメールサーバーアドレスを入力してください。また、`"credentials": { "userid": "", "password": "" }`にはユーザー名とパスワードを入力してください。

すべての設定が完了すると、このプログラムは動作し、アクティビティを検出した際にメールを送信します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

このプロジェクトでは、**switch**ブロックと**email**ブロックという2つの新しいブロックが使用されています。

**switch**ブロックは、設定した判定情報に基づいてプログラムの流れを制御する部分です。例えば、このプログラムでは、switchブロックを**person intrusion detected**（人物侵入検出）と名付け、プロパティ**payload.labels**を設定しています。**payload.labels**は、前のブロックである**object detection**のキー値です。このプロパティの値が**person**に等しい場合、switchの後に接続されたブロックが実行されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

**email**ブロックの設定は比較的簡単で、メールアドレスとサーバーアドレスを入力するだけです。これらは、使用しているメールボックスがサポートするプロトコルに応じて設定してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

もちろん、コードを直接コピーして必要な変更を加えれば、ブロックに対して追加の変更を行う必要はありません。また、グラフィカルインターフェースを使用する方が便利であれば、ブロック設定内でこれらの要素を構成することも可能です。

## トラブルシューティング

### Dockerが正常に起動しない、またはブロック内にSeeed ReComputerが表示されない場合はどうすればよいですか？

以下のコマンドを使用してDockerを停止し、再起動してください。

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### 結果が観察できない、またはデバッグでエラーが発生する場合はどうすればよいですか？

以下のコマンドを使用してDockerのインストールが正しいか確認してください。図に示されている3つのDockerが表示されるはずです。いずれかが欠けている場合は、**Getting Started**の最初のステップに戻り、Dockerを再インストールしてください。

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

インストールが画像と一致している場合、以下のコマンドを使用して起動したDockerの実行状態を確認してください。

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

上記の画像のようにDockerが起動していない場合は、Dockerを再起動するか、デバイスのモデルとシステムバージョンが要件を満たしているか確認してください。

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