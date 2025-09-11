---
description: alwaysAIを使用したNVIDIA Jetson デバイスでのデータアップロードとラベル付け
title: alwaysAIの使い方入門
tags:
  - データラベル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/alwaysAI-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスでのalwaysAIの使い方入門

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co) は、NVIDIA® Jetson デバイスなどのエッジデバイス上で機械学習アプリケーションを作成およびデプロイするための重要なコンピュータビジョン開発プラットフォームです。これらのアプリケーションの開発とデプロイは非常に複雑で時間がかかり、コンピュータビジョン技術や手法に関する深い知識が必要であり、専門家向けのものとなりがちです。alwaysAIはこれらの障壁を取り除き、コンピュータビジョンアプリの作成を簡単、迅速、かつ効果的にします。

## 対応ハードウェア

alwaysAIは以下のJetson関連ハードウェアをサポートしています：

- Seeed製キット:

  - Jetson Nanoを搭載したreComputer J1010
  - Jetson Nanoを搭載したreComputer J1020
  - Jetson Xavier NX 8GBを搭載したreComputer J2011
  - Jetson Xavier NX 16GBを搭載したreComputer J2012

- Seeed製キャリアボード:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203キャリアボード
  - A203 (バージョン2) キャリアボード
  - A205キャリアボード
  - A206キャリアボード

- NVIDIA公式開発キット:

  - NVIDIA® Jetson Nano開発者キット
  - NVIDIA® Jetson Xavier NX開発者キット
  - NVIDIA® Jetson AGX Xavier開発者キット
  - NVIDIA® Jetson TX2開発者キット
  - NVIDIA® Jetson AGX Orin開発者キット

- NVIDIA公式SoM:

  - NVIDIA® Jetson Nanoモジュール
  - NVIDIA® Jetson Xavier NXモジュール
  - NVIDIA® Jetson TX2 NXモジュール
  - NVIDIA® Jetson TX2モジュール
  - NVIDIA® Jetson AGX Xavierモジュール

## 前提条件

- 上記のいずれかのJetsonデバイスでJetPack 4.6を実行し、すべてのSDKコンポーネントがインストールされていること（インストールに関する参考情報は[こちらのWiki](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack/)を参照）
- Windows、Linux、またはMacを搭載したホストPC
- JetsonデバイスでサポートされているUSBウェブカメラまたはMIPI CSIカメラ

## 始め方

最初のコンピュータビジョンプロジェクトをデプロイするのに数分しかかかりません！このWikiの終わりまでに、Jetsonデバイスに接続されたカメラからのライブビデオフィードや、事前にロードされたビデオファイルでオブジェクトを検出できるようになります。

1. 開発用コンピュータの環境をセットアップ
2. Jetsonデバイスの環境をセットアップ
3. alwaysAIアカウントにサインアップ
4. alwaysAIダッシュボードを使用してプロジェクトを作成
5. 開発用コンピュータを使用してJetsonデバイスにプロジェクトをデプロイ
6. カメラからのライブビデオフィードでオブジェクト検出
7. 事前にロードされたビデオファイルでオブジェクト検出

### 開発用コンピュータの環境をセットアップ

まず、開発環境をセットアップする必要があります。Windows、Linux、またはMacのいずれかのコンピュータを使用できます。

:::note
このガイドではWindows開発用コンピュータを使用します。ただし、MacまたはLinuxを開発用PCとしてセットアップしたい場合は、[こちら](https://alwaysai.co/docs/get_started/development_computer_setup.html)を参照してください。
:::

- **ステップ1.** alwaysAIデスクトップアプリケーションとコマンドラインインターフェイスを[こちら](https://alwaysai.co/installer/windows)からダウンロードしてインストールします。

- **ステップ2.** インストールが完了したら、コマンドラインインターフェイスを開き、以下を入力します。

```sh
aai -v
```

バージョン番号が表示された場合、alwaysAI CLIが正常にインストールされています。このWiki執筆時点でのバージョン番号は**1.4.3**です。

- **ステップ3.** OSにOpenSSHが既にインストールされているか確認します。開発用マシンでエッジデバイスに接続し、機械学習プロジェクトをデプロイするにはOpenSSHが必要です。

```sh
ssh -V
```

バージョン番号が表示された場合、OpenSSHが既にインストールされています。例えば、**OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2**のように表示されます。2018年後半以降、Windows 10は標準でOpenSSHをサポートしています。WindowsでのOpenSSHのインストールに関する詳細は、Microsoftのドキュメントサイトの[この記事](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)を参照してください。

### Jetsonデバイスの環境をセットアップ

次に、エッジデバイス（この場合はJetsonデバイス）の環境をセットアップします。

**ステップ1.** Jetsonデバイスで機械学習プロジェクトを実行する際には、edgeIQランタイムが使用されます。これは[dockerイメージ](https://hub.docker.com/r/alwaysai/edgeiq)として利用可能です。DockerはJetPackにプリインストールされているため、インストールする必要はありません。ただし、Dockerにアクセスする際にroot権限（sudo）が不要になるように、ユーザーを「docker」グループに追加する必要があります。Jetsonデバイスにアクセスし、ターミナルで以下を実行します。

```sh
sudo usermod -aG docker $USER
```

**ステップ2.** 新しいグループメンバーシップを適用するには、Jetsonデバイスからログアウトして再ログインするか、以下を入力します。

```sh
su - $USER
```

**ステップ3.** **sudo**なしでDockerインストールをテストします。

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### alwaysAIアカウントにサインアップ

- **ステップ1.** [こちらのページ](https://console.alwaysai.co/auth?register=true)にアクセスしてalwaysAIアカウントにサインアップします。

- **ステップ2.** フォームに入力し、**Sign Up for Free**をクリックしてサインアッププロセスを完了します。

### alwaysAIダッシュボードを使用してプロジェクトを作成

開発用マシンとJetsonデバイスでの環境セットアップを完了し、alwaysAIアカウントにサインアップした後、alwaysAIダッシュボードを使用して新しいオブジェクト検出プロジェクトを作成できます。

**ステップ1.** [alwaysAIダッシュボード](https://console.alwaysai.co/dashboard)にアクセスし、**New Project**ボタンをクリックして新しいプロジェクトを作成します。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**ステップ 2.** **Object Detection** を開始テンプレートとして選択し、プロジェクト名を入力して **Create Project** をクリックします。

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**ステップ 3.** **Click Here To View Your Project** をクリックして、新しく作成したプロジェクトに入ります。

ここで、使用されているモデルやその他の有用な詳細情報など、新しく作成されたプロジェクトに関する情報が表示されます。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

デフォルトの **Object Detection Project** では、**mobilenet_ssd** がモデルとして使用されており、これは **Pascal VOC dataset** でトレーニングされています。このため、このアプリケーションは **20種類のオブジェクトクラス**（例：人、鳥、猫、牛、犬、馬、羊、飛行機、自転車、ボート、バス、車、オートバイ、電車、ボトル、椅子、ダイニングテーブル、鉢植え、ソファ、テレビ/モニター）を認識できます。

しかし、このモデルは Jetson ハードウェアでの実行に最適化されておらず、非常に低い fps で動作します。そのため、**Jetson Xavier NX** 用に最適化され、**TensorRT サポート**を備えたモデルを選択します。

**ステップ 4.** モデルの横にある3つのドットをクリックし、**Delete** をクリックします。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**ステップ 5.** **Add New Model** をクリックし、**Go to Model Catalog** をクリックして alwaysAI モデルカタログに入ります。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**ステップ 6.** 検索ボックスに **ssd_mobilenet_v1_coco_2018_01_28_xavier_nx** と入力し、**+ Use this Model** をクリックします。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

このモデルは **COCO dataset** でトレーニングされており、**80種類のオブジェクトクラス**（例：人、自転車、車、オートバイ、飛行機、バス、電車、トラック、ボート、信号機、消火栓、停止標識、駐車メーター、ベンチ、鳥、猫、犬、馬、羊、牛、象、熊、シマウマ、キリン、バックパック、傘、ハンドバッグ、ネクタイ、スーツケース、フリスビー、スキー、スノーボード、スポーツボール、凧、野球バット、野球グローブ、スケートボード、サーフボード、テニスラケット、ボトル、ワイングラス、カップ、フォーク、ナイフ、スプーン、ボウル、バナナ、リンゴ、サンドイッチ、オレンジ、ブロッコリー、ニンジン、ホットドッグ、ピザ、ドーナツ、ケーキ、椅子、ソファ、鉢植え、ベッド、ダイニングテーブル、トイレ、テレビ、ラップトップ、マウス、リモコン、キーボード、携帯電話、電子レンジ、オーブン、トースター、シンク、冷蔵庫、本、時計、花瓶、はさみ、テディベア、ヘアドライヤー、歯ブラシ）を認識できます。

**ステップ 7.** 先ほど作成したプロジェクト（この場合は My First Project）を選択し、**Add To Project** をクリックします。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

これで、モデルをプロジェクトに正常に追加できました！

### 開発用コンピュータを使用して Jetson デバイスにプロジェクトをデプロイする

次に、作成したプロジェクトを開発用コンピュータを使用して SSH 経由で Jetson デバイスにデプロイします。

**ステップ 1.** 開発用マシンで新しいフォルダを作成し、そのフォルダ内でコマンドラインインターフェイスを開き、以下を入力します。

```sh
aai app configure
```

:::note
上記のコマンドを初めて実行するときに、alwaysAI アカウントのユーザー名とパスワードを入力するよう求められます。
:::

**ステップ 2.** alwaysAI ダッシュボードで作成したプロジェクトを選択します。

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**ステップ 3.** **Remote device** を **destination** として選択します。

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**ステップ 4.** プライベートキー ファイルを作成するために **Y** を押します。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**ステップ 5.** **Add a new device** をクリックして、Jetson デバイスをリモートデバイスとして追加します。

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**ステップ 6.** **device mode** を **Development** として選択します。

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**ステップ 7.** **デバイス名** を入力します。

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**ステップ 8.** Jetson デバイスの **ユーザー名** と **ホスト名/IPアドレス** を以下のように入力します。

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::note
ここで、Jetson デバイスのユーザー名は **lakshanthad**、IPアドレスは **192.168.2.156** です。
:::

**ステップ 9.** プロンプトが表示されたら、Jetson デバイスの **パスワード** を入力します。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**ステップ 10.** アプリを実行する **場所** を尋ねられたら、デフォルトの場所をそのままにして **ENTER** を押します。ここで、デフォルトの場所は **alwaysai/test** に設定されています。これは Jetson デバイス内のプロジェクトディレクトリです。

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

これで、開発用コンピュータを使用して SSH 経由で Jetson デバイスにプロジェクトを正常に初期化できました。

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

アプリを Jetson デバイスにインストールする前に、モデル名と推論エンジンタイプを変更するためにメインコードに小さな変更を加える必要があります。

**ステップ 11.** PC 上で alwaysAI 用に作成したディレクトリ内の **app.py** を開き、以下のようにモデル名と推論エンジンタイプを変更します。

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**ステップ 12.** 以下を入力してアプリをインストールします。

```sh
aai app install
```

正常にインストールされると、以下のような出力が表示されます。

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::note
このステップでエラーが発生した場合、まず `aai app install --clean` メソッドを使用して再デプロイを試みてください。Jetpack のバージョンが**要求されているバージョン 4.6**であることを再確認してください。これは、コマンド `sudo apt-cache show nvidia-jetpack` を入力することで確認できます。バージョン番号が正しい場合は、**Jetson システムインストール**と**Jetson SDK コンポーネント**を完了していることを確認してください。これにより、ほとんどの問題を解決できます。
:::

### カメラからのライブビデオフィードでの物体検出

次に、USB カメラを Jetson デバイスに接続し、ライブビデオフィードで物体検出を実行します。また、使用している Jetson デバイスがサポートする MIPI CSI カメラも使用できます。

**ステップ 1.** USB カメラまたは MIPI CSI カメラを Jetson デバイスに接続します。

**ステップ 2.** 以下を実行します。

```sh
aai app start
```

すると、コマンドラインに以下のような出力が表示されます。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**ステップ 3.** ウェブブラウザを開き、**`http://localhost:5000`** を入力してビデオストリームを開きます。

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

ご覧の通り、人々がリアルタイムで検出されており、各ラベルの信頼度がインターフェースに表示されています。また、**Jetson Xavier** 上での推論時間は **0.009秒（約 111 fps）** です。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

上記は同じモデルを使用した別のデモです。

### 事前にロードされたビデオファイルでの物体検出

ここでは、事前にロードされたビデオファイルで物体検出を実行します。

**ステップ 1.** ビデオファイルを Jetson デバイスの alwaysAI プロジェクトディレクトリ内に配置します。例として、**/home/`<username>`/alwaysai/test** に配置します。

**ステップ 2.** 開発用コンピュータで、以前作成した **test** フォルダ内の **app.py** ファイルを開き、以下のコードセクションを

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

次のコードに置き換えます。

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

その後、**file name goes here** をビデオファイルの名前と拡張子に置き換えます。ファイル名はシングルクォートで囲む必要があります。

**ステップ 3.** アプリを再インストールします。

```sh
aai app install
```

**ステップ 4.** 最後にアプリを実行します。

```sh
aai app start
```

ここでも、コマンドラインに以前と同じ出力が表示され、前述のアドレスでウェブブラウザを開くと、事前にロードされたビデオで物体検出が実行され、以前と同様の出力が得られます。

### 検出する物体のフィルタリング

モデルが検出する特定の物体をフィルタリングすることもできます。たとえば、使用した COCO データセットは 80 種類の物体を検出できますが、人だけを検出するようにフィルタリングすることが可能です。

**app.py** ファイルに **results** の後に **results.predictions** 行を追加するだけです。

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(frame, confidence_level=.5)
    results.predictions = edgeiq.filter_predictions_by_label(results.predictions, ['person'])
    frame = edgeiq.markup_image(
```

## alwaysAI GitHub上のアプリケーション

alwaysAIは、alwaysAI GitHubリポジトリで利用可能な幅広いアプリケーションを提供しています。さまざまなアプリケーションを[こちら](https://github.com/alwaysai/Reference-Applications)で確認できます。

### ナンバープレート検出器

デモとして、これらのアプリケーションの1つである[ナンバープレート検出器](https://github.com/alwaysai/license-plate-detector)をJetsonデバイスにデプロイする方法を説明します。同じ手順を他のアプリケーションにも適用できます。

**ステップ 1.** 開発用コンピュータで、新しいフォルダを作成し、そのフォルダに移動します。

**ステップ 2.** [このリポジトリ](https://github.com/alwaysai/license-plate-detector)を**.zip**形式でダウンロードするか、PCに**Git**がインストールされている場合はクローンします。

デフォルトでは、この例で使用されるモデルはJetson Nanoでの実行に最適化されていません。そのため、まずJetson Nanoに最適化されたモデルをロードします。

**ステップ 3.** 新しくダウンロードまたはクローンしたリポジトリに移動し、コマンドラインを開いて以下を実行します。

```sh
aai app models add alwaysai/vehicle_license_mobilenet_ssd_nano
```

**ステップ 4.** **app.py**を開き、モデル名と推論エンジンを変更します。

```python
def main():
    obj_detect = edgeiq.ObjectDetection(
            "alwaysai/vehicle_license_mobilenet_ssd_nano")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**ステップ 5.** 以下を実行します。

```sh
aai app configure
```

:::note
上記のコマンドを初めて実行する際には、alwaysAIアカウントのユーザー名とパスワードを入力するよう求められます。
:::

**ステップ 6.** **新しいプロジェクトを作成**を選択します。

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**ステップ 7.** **プロジェクト名**を入力します。

**ステップ 8.** プロジェクトを**空のアプリとして初期化**するオプションを選択します。

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**ステップ 9.** **開発用コンピュータを使用してJetsonデバイスにプロジェクトをデプロイする**セクションの**ステップ 3**から**ステップ 11**までの手順を繰り返します。

**ステップ 10.** アプリがJetsonにインストールされたら、以下のコマンドを実行してアプリを起動します。

```sh
aai app start
```

コマンドラインに以下のような出力が表示されます。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

ご覧の通り、**vehicle_license_mobilenet_ssdモデル**を使用しており、このモデルは車両とナンバープレートを識別することができます。

**ステップ 11.** PCのウェブブラウザを開き、以下を入力してビデオストリームを開きます。

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

このデモでは、[こちら](https://github.com/alwaysai/license-plate-detector/tree/main/video)の2つのビデオで推論が行われています。ビデオストリーム上で車両とナンバープレートが検出され、各ラベルの信頼度がインターフェースに表示されているのが確認できます。

### ウェブカメラ推論の使用

ウェブカメラからのリアルタイムビデオストリームで上記と同じ推論を行いたい場合は、以下の手順に従ってください。

**ステップ 1.** 以前に作成したプロジェクトフォルダに移動し、**app.py**を開きます。

**ステップ 2.** [こちら](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py)からコードをコピーして貼り付けます。

**ステップ 3.** 再度アプリをインストールします。

```sh
aai app install
```

**ステップ 4.** 最後にアプリを実行します。

```sh
aai app start
```

これで、以前と同じ出力がコマンドラインに表示され、同じアドレスを使用してウェブブラウザを開くと、ウェブカメラからのリアルタイムビデオストリームでオブジェクト検出が行われ、以前と同様の出力が得られます。

## alwaysAI Enterprise Edition

alwaysAIには、以下の機能を備えたエンタープライズ版もあります：

- 1年間の1つのプロダクションデバイス展開を含むFreemiumへのアクセス
- alwaysAI Cloudモデルトレーニングの20時間利用
- alwaysAI Cloudデータセットストレージへの30日間アクセス

alwaysAI Enterprise Editionの詳細については、[こちら](https://alwaysai.co/docs)をご覧ください。

### 独自のモデルをトレーニングしてデプロイする

**ステップ 1.** トレーニング用のデータセットを準備します。データセットが**PascalVOC形式**であることを確認し、すべての画像とラベルを2つのディレクトリに整理して、以下のようにファイルを圧縮してください。

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**ステップ 2.** [alwaysAIダッシュボード](https://console.alwaysai.co/dashboard)にアクセスし、左側のナビゲーションペインで**Datasets**をクリックし、**Upload a Dataset**をクリックします。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**ステップ 3.** データセットのアップロードが完了したら、**Train**をクリックします。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**ステップ 4.** トレーニング設定を好みに応じて変更し、**Start training**をクリックします。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

トレーニングが完了すると、以下のような出力が表示されます。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

これでトレーニング済みモデルがアカウントに保存されます。このモデルを以下の手順でオブジェクト検出プロジェクトに使用できます。

**ステップ 5.** `Models > My Models`に移動し、先ほどトレーニングしたモデルをクリックします。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**ステップ 6.** 以下のコマンドをオブジェクト検出アプリのルートディレクトリで使用します。

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**ステップ 7.** その後、**app.py**内のモデル名を変更し、再度アプリを実行します。

```sh
lakshanthad/roadsign-mobilenet
```

## リソース

- **[ウェブページ]** [AlwaysAI Documentation](https://alwaysai.co/docs)

## 技術サポートと製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>