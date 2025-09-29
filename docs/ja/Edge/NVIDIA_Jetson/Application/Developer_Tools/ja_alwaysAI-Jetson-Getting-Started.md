---
description: NVIDIA Jetsonデバイス上でのalwaysAIを使用したデータアップロードとラベル付け
title: alwaysAIの始め方
tags:
  - Data Label
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/alwaysAI-Jetson-Getting-Started
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# NVIDIA® JetsonデバイスでのalwaysAIの始め方

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co)は、NVIDIA® Jetsonデバイスなどのエッジデバイス上で機械学習アプリケーションを作成・デプロイするための重要なコンピュータビジョン開発プラットフォームです。これらのアプリケーションの開発とデプロイは非常に複雑で時間がかかり、一般的な開発者よりも専門家により関連性があり、アクセスしやすい膨大なコンピュータビジョン技術と手法の深い知識が必要です。alwaysAIはこれらの障壁を取り除き、コンピュータビジョンアプリの作成を簡単、高速、効果的にします。

## サポートされているハードウェア

alwaysAIは以下のJetson関連ハードウェアでサポートされています：

- Seeedのキット：

  - Jetson Nanoで構築されたreComputer J1010
  - Jetson Nanoで構築されたreComputer J1020
  - Jetson Xavier NX 8GBで構築されたreComputer J2011
  - Jetson Xavier NX 16GBで構築されたreComputer J2012

- Seeedのキャリアボード：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- NVIDIAの公式開発キット：

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- NVIDIAの公式SoM：
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

## 前提条件

- 上記のいずれかのJetsonデバイスでJetPack 4.6を実行し、すべてのSDKコンポーネントがインストールされていること（インストールの参考については[このwiki](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack/)を確認してください）
- Windows、Linux、またはMacのホストPC
- USBウェブカメラまたはJetsonデバイスでサポートされているMIPI CSIカメラ

## 始め方

最初のコンピュータビジョンプロジェクトのデプロイは数分しかかかりません！このwikiの終わりまでに、Jetsonデバイスに接続されたカメラからのライブビデオフィードと、事前に読み込まれたビデオファイルでオブジェクトを検出できるようになります。

1. 開発コンピュータの環境セットアップ
2. Jetsonデバイスの環境セットアップ
3. alwaysAIアカウントのサインアップ
4. alwaysAIダッシュボードを使用したプロジェクトの作成
5. 開発コンピュータを使用してJetsonデバイス上にプロジェクトをデプロイ
6. カメラからのライブビデオフィードでのオブジェクト検出
7. 事前に読み込まれたビデオファイルでのオブジェクト検出

### 開発コンピュータの環境セットアップ

次に、開発環境をセットアップする必要があります。ここでは、Windows、Linux、またはMacコンピュータのいずれかを使用できます。

:::note
このガイドでは、Windows開発コンピュータを使用します。ただし、MacまたはLinuxを開発PCとしてセットアップしたい場合は、[こちらをご覧ください](https://alwaysai.co/docs/get_started/development_computer_setup.html)。
:::

- **ステップ1.** [こちら](https://alwaysai.co/installer/windows)をクリックして、alwaysAIデスクトップアプリケーションとコマンドラインインターフェースをダウンロードしてインストールします

- **ステップ2.** インストールが完了したら、コマンドラインインターフェースを開いて以下を入力します

```sh
aai -v
```

バージョン番号が表示されれば、alwaysAI CLIのインストールが成功しています。この記事執筆時点でのバージョン番号は**1.4.3**です。

- **ステップ3.** お使いのOSにOpenSSHがすでにインストールされているかどうかを確認してください。エッジデバイスに接続し、機械学習プロジェクトをデプロイするために、開発マシンにOpenSSHが必要です。

```sh
ssh -V
```

バージョン番号が表示された場合、OpenSSHは既にインストールされています。例えば **OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2** のようになります。2018年後半の時点で、Windows 10はOpenSSHを標準でサポートしています。WindowsでのOpenSSHのインストールについて詳しくは、Microsoftドキュメントサイトの[この記事](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)をご確認ください。

### Jetsonデバイスの環境セットアップ

次に、エッジデバイス（この場合はJetsonデバイス）で環境をセットアップする必要があります。

**ステップ 1.** Jetsonデバイスで機械学習プロジェクトを実行する際、edgeIQランタイムが使用されます。これは[dockerイメージ](https://hub.docker.com/r/alwaysai/edgeiq)として利用可能です。Dockerをインストールする必要はありません。JetPackに既にプリインストールされているためです。ただし、Dockerにアクセスするためにroot権限（sudo）を必要としないよう、ユーザーに「docker」グループを追加する必要があります。Jetsonデバイスにアクセスし、ターミナルで以下を実行してください。

```sh
sudo usermod -aG docker $USER
```

**ステップ2.** 新しいグループメンバーシップを適用するには、Jetsonデバイスからログアウトして再度ログインするか、以下を入力してください

```sh
su - $USER
```

**ステップ 3.** **sudo** なしで docker インストールをテストする

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### alwaysAIアカウントにサインアップ

- **ステップ1.** [このページ](https://console.alwaysai.co/auth?register=true)にアクセスしてalwaysAIアカウントにサインアップします

- **ステップ2.** フォームに記入し、**Sign Up for Free**をクリックしてサインアップ手続きを完了します

### alwaysAIダッシュボードを使用してプロジェクトを作成

開発マシンとJetsonデバイスでの環境設定を完了し、alwaysAIアカウントにサインアップした後、alwaysAIダッシュボードを使用して新しい物体検出プロジェクトの作成を開始できます。

**ステップ1.** [alwaysAIダッシュボード](https://console.alwaysai.co/dashboard)にアクセスし、**New Project**ボタンをクリックして新しいプロジェクトを作成します

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**ステップ2.** 開始テンプレートとして**Object Detection**を選択し、プロジェクト名を入力して**Create Project**をクリックします

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**ステップ3.** **Click Here To View Your Project**をクリックして、新しく作成されたプロジェクトに入ります

これで、使用されているモデルやその他の有用な詳細など、新しく作成されたプロジェクトに関する情報が表示されます

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

デフォルトの**Object Detection Project**では、**Pascal VOCデータセット**で訓練された**mobilenet_ssd**がモデルとして使用されています。これは、このアプリケーションが人、鳥、猫、牛、犬、馬、羊、飛行機、自転車、ボート、バス、車、オートバイ、電車、ボトル、椅子、ダイニングテーブル、鉢植え植物、ソファ、テレビ/モニターなどの**20のオブジェクトクラス**を認識できることを意味します。

しかし、このモデルはJetsonハードウェアで実行するために最適化されておらず、非常に低いfpsで実行されます。そのため、**TensorRTサポート**を備えた**Jetson Xavier NX**用に最適化されたモデルを選択します。

**ステップ4.** モデルの横にある3つの点をクリックし、**Delete**をクリックします

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**ステップ5.** **Add New Model**をクリックし、**Go to Model Catalog**をクリックしてalwaysAI Model Catalogに入ります

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**ステップ6.** 検索ボックスに**ssd_mobilenet_v1_coco_2018_01_28_xavier_nx**と入力し、**+ Use this Model**をクリックします

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

このモデルは**COCOデータセット**で訓練されており、人、自転車、車、オートバイ、飛行機、バス、電車、トラック、ボート、信号機、消火栓、停止標識、パーキングメーター、ベンチ、鳥、猫、犬、馬、羊、牛、象、熊、シマウマ、キリン、バックパック、傘、ハンドバッグ、ネクタイ、スーツケース、フリスビー、スキー、スノーボード、スポーツボール、凧、野球バット、野球グローブ、スケートボード、サーフボード、テニスラケット、ボトル、ワイングラス、カップ、フォーク、ナイフ、スプーン、ボウル、バナナ、りんご、サンドイッチ、オレンジ、ブロッコリー、にんじん、ホットドッグ、ピザ、ドーナツ、ケーキ、椅子、ソファ、鉢植え植物、ベッド、ダイニングテーブル、トイレ、テレビ、ラップトップ、マウス、リモコン、キーボード、携帯電話、電子レンジ、オーブン、トースター、シンク、冷蔵庫、本、時計、花瓶、はさみ、テディベア、ヘアドライヤー、歯ブラシなどの**80のオブジェクトクラス**を認識できます

**ステップ7.** 以前に作成したプロジェクト（この場合はMy First Project）を選択し、**Add To Project**をクリックします

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

これで、プロジェクトにモデルを正常に追加できました！

### 開発コンピューターを使用してJetsonデバイスにプロジェクトをデプロイ

次に、開発コンピューターを使用してSSH経由で、以前に作成したプロジェクトをJetsonデバイスにデプロイします

**ステップ1.** 開発マシンで新しいフォルダを作成し、新しいフォルダ内でコマンドラインインターフェースを開き、以下を入力します

```sh
aai app configure
```

:::note
上記のコマンドを初回実行時に、alwaysAIアカウントのユーザー名とパスワードの入力を求められます
:::

**ステップ 2.** alwaysAIダッシュボードで以前作成したプロジェクトを選択します

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**ステップ 3.** **宛先**として**リモートデバイス**を選択します

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**ステップ 4.** **Y**を押してプライベートキーファイルを作成します

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**ステップ 5.** **新しいデバイスを追加**をクリックして、Jetsonデバイスをリモートデバイスとして追加します

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**ステップ 6.** **デバイスモード**として**開発**を選択します

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**ステップ 7.** **デバイス名**を入力します

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**ステップ 8.** 以下のようにJetsonデバイスの**ユーザー名**と**ホスト名/IPアドレス**を入力します

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::note
ここでJetsonデバイスのユーザー名は**lakshanthad**で、IPアドレスは**192.168.2.156**です
:::

**ステップ 9.** プロンプトが表示されたら、Jetsonデバイスの**パスワード**を入力します

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**ステップ 10.** アプリを実行する**場所**を尋ねられたら、デフォルトの場所のままにして**ENTER**を押します。ここではデフォルトの場所が**alwaysai/test**に設定されています。これはJetsonデバイス内のプロジェクトディレクトリです

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

これで、開発用コンピューターからSSH経由でJetsonデバイス上のプロジェクトを正常に初期化できました

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

Jetsonデバイスにアプリをインストールする前に、メインコードでモデル名と推論エンジンタイプを変更するために小さな変更を行う必要があります。

**ステップ 11.** PC上でalwaysAI用に作成したディレクトリで、**app.py**を開き、以下のようにモデル名と推論エンジンタイプを変更します

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**ステップ 12.** 以下を入力してアプリをインストールします

```sh
aai app install
```

正常にインストールされた場合、以下の出力が表示されます

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::note
この段階でエラーが発生した場合は、まず `aai app install --clean` メソッドを使用して再デプロイを試すことができます。jetpackバージョンが**要求されたバージョン4.6**であることを再確認してください。これは `sudo apt-cache show nvidia-jetpack` コマンドを入力することで確認できます。バージョン番号が正しい場合は、**Jetson SDKコンポーネント**と共にJetsonシステムのインストールを完了したことを確認してください。これにより、ほとんどの問題を解決できます。
:::

### カメラからのライブビデオフィードでのオブジェクト検出

次に、Jetsonデバイスに接続されたUSBカメラからのライブビデオフィードでオブジェクト検出を実行します。使用しているJetsonデバイスでサポートされているMIPI CSIカメラも使用できます

**ステップ1.** USBカメラ/ MIPI CSIカメラをJetsonデバイスに接続します

**ステップ2.** 以下を実行します

```sh
aai app start
```

コマンドラインで以下の出力が表示されます

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**ステップ 3.** Webブラウザを開き、**http://localhost:5000** と入力してビデオストリームを開きます

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

ご覧のように、人物がリアルタイムで検出され、各ラベルの信頼度パーセンテージがインターフェースに表示されています。また、**Jetson Xavier**での推論時間は**0.009秒で、約111 fps**です。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

上記は同じモデルを使用した別のデモです。

### 事前読み込み済み動画ファイルでの物体検出

ここでは、事前読み込み済みの動画ファイルで物体検出を実行します。

**ステップ 1.** JetsonデバイスのalwaysAIプロジェクトディレクトリ内に動画ファイルを配置します。この例では、**/home/`<username>`/alwaysai/test**です。

**ステップ 2.** 開発用コンピューターで、以前作成した**test**フォルダー内の**app.py**ファイルを開き、コードのこの部分を置き換えます。

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

with this one

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

そして、**file name goes here** をビデオファイルの名前とファイル拡張子に置き換えます。ファイル名は単一引用符で囲む必要があります。

**ステップ 3.** アプリを再度インストールします

```sh
aai app install
```

**ステップ 4.** 最後にアプリを実行する

```sh
aai app start
```

ここでは、以前と同じコマンドライン出力が表示され、前述と同じアドレスでWebブラウザを開くと、事前に読み込まれた動画でオブジェクト検出が実行され、以前と同様の出力が得られます。

### 検出するオブジェクトのフィルタリング

モデルに検出させたい特定のオブジェクトをフィルタリングすることもできます。例えば、上記で使用したCOCOデータセットは80種類のオブジェクトタイプを検出できます。しかし、人のみを検出するようにフィルタリングすることができます。

**app.py**ファイルの**results**の後に**results.predictions**行を追加するだけです

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(framconfidence_level=.5)
    results.predictions = edgefilter_predictions_by_label(resulpredictions, ['person'])
    frame = edgeiq.markup_image(
```

## GitHub上のalwaysAIアプリケーション

alwaysAIは、alwaysAI GitHubリポジトリで幅広いすぐに使用できるアプリケーションを提供しています。さまざまなアプリケーションは[こちら](https://github.com/alwaysai/Reference-Applications)で確認できます。

### ナンバープレート検出器

デモ目的で、これらのアプリケーションの1つである[ナンバープレート検出器](https://github.com/alwaysai/license-plate-detector)をJetsonデバイスにデプロイする方法を説明します。他のアプリケーションについても同じ手順を繰り返すことができます。

**ステップ1.** 開発コンピューター上で、プロジェクト用の新しいフォルダーを作成し、そこに入ります

**ステップ2.** [このリポジトリ](https://github.com/alwaysai/license-plate-detector)を**.zip**としてダウンロードするか、PCに**Git**がインストールされている場合はクローンします

デフォルトでは、この例で使用されるモデルはJetson Nanoで実行するように最適化されていません。そのため、最初にJetson nano最適化モデルを読み込みます。

**ステップ3.** 新しくダウンロード/クローンしたリポジトリに入り、その中でコマンドラインを開いて以下を実行します

```sh
aai app models add alwaysai/vehicle_license_mobilenet_ssd_nano
```

**ステップ 4.** **app.py**を開き、モデル名と推論エンジンを変更する

```python
def main():
    obj_detect = edgeiq.ObjectDetection(
            "alwaysai/vehicle_license_mobilenet_ssd_nano")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**ステップ 5.** Execute the following

```sh
aai app configure
```

:::note
初回実行時には、alwaysAIアカウントのユーザー名とパスワードの入力が求められます
:::

**ステップ 6.** **Create new project** を選択します

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**ステップ 7.** **Project Name** を入力します

**ステップ 8.** プロジェクトを **As an empty app** として初期化することを選択します

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**ステップ 9.** **開発用コンピューターを使用してJetsonデバイスにプロジェクトをデプロイする** セクションと同じ手順を、**ステップ 3** から **ステップ 11** まで繰り返します

**ステップ 10.** アプリがJetsonにインストールされたら、以下のコマンドを実行してアプリを開始します

```sh
aai app start
```

コマンドラインで以下の出力が表示されます

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

ご覧のように、**vehicle_license_mobilenet_ssd model** を使用しており、このモデルは車両とナンバープレートを識別することができます。

**ステップ 11.** PC でウェブブラウザを開き、以下を入力してビデオストリームを開きます

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

このデモでは、[こちら](https://github.com/alwaysai/license-plate-detector/tree/main/video)の2つの動画で推論が実行されており、ご覧のように、動画ストリーム上の車両とナンバープレートが検出され、各ラベルの信頼度パーセンテージがインターフェースに表示されています。

### ウェブカメラ推論を使用する

ウェブカメラからのリアルタイム動画ストリームで上記と同じ推論を実行したい場合は、以下の手順に従ってください

**ステップ 1.** 以前にプロジェクト用に作成したフォルダに移動し、**app.py** を開きます

**ステップ 2.** [こちら](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py)からコードをコピーして貼り付けます

**ステップ 3.** アプリを再度インストールします

```sh
aai app install
```

**ステップ 4.** 最後にアプリを実行する

```sh
aai app start
```

ここでは、以前と同じコマンドライン出力が表示され、前述と同じアドレスでWebブラウザを開くと、Webカメラからのリアルタイム映像ストリームに対してオブジェクト検出が実行され、以前と同様の出力が表示されます。

## alwaysAI エンタープライズエディション

alwaysAIには、以下の機能を持つエンタープライズエディションもあります：

- 1年間の本番デバイス1台のデプロイメントを含むFreemiumへのアクセス
- 20時間のalwaysAI Cloudモデルトレーニング
- 30日間のalwaysAI Cloudデータセットストレージへのアクセス

alwaysAI Enterprise Editionの詳細については、こちらで確認できます。

### 独自モデルの訓練とデプロイ

**ステップ1.** 訓練用のデータセットを準備します。データセットが**PascalVOC形式**であることを確認し、すべての画像とラベルを2つのディレクトリに配置して、以下のようにファイルをzipします

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**ステップ2.** [alwaysAIダッシュボード](https://console.alwaysai.co/dashboard)に移動し、左側のナビゲーションペインで**Datasets**をクリックし、**Upload a Dataset**をクリックします

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**ステップ3.** データセットのアップロードが完了したら、**Train**をクリックします

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**ステップ4.** ここで、お好みに応じて訓練設定を変更し、**Start training**をクリックします

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

訓練が完了すると、以下の出力が表示されます

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

これで、訓練されたモデルがアカウントで利用可能になりました。このモデルを以下のようにオブジェクト検出プロジェクトで使用できます

**ステップ5.** `Models > My Models`に移動し、先ほど訓練したモデルをクリックします

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**ステップ6.** ご覧のとおり、オブジェクト検出アプリのルートディレクトリで以下のコマンドを使用できます

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**ステップ 7.** その後、**app.py** でモデル名を変更し、アプリを再度実行します

```sh
lakshanthad/roadsign-mobilenet
```

## リソース

- **[ウェブページ]** [AlwaysAI Documentation](https://alwaysai.co/docs)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
