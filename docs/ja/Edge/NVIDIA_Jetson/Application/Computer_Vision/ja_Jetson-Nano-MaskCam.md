---
description: MaskCam
title: MaskCam
keywords:
  - Edge
  - reComputer アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson-Nano-MaskCam
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Maskcam - Jetson Nanoを基盤とした群衆のマスク着用状況監視

## **概要**

COVID-19の影響により、多くの公共の場でマスク着用が求められることがよくあります。通常、エリアの入口では管理者が人々がマスクを着用しているかどうかを観察しています。これは人間にとって非常に簡単なタスクかもしれませんが、Jetson Nano、グラフィックスキャプチャ、AIを活用したエッジコンピューティングと組み合わせることで、非常に興味深く社会的価値のあるタスクになります。

MaskCamはBerkeley Design Technology, Inc. (BDTI)とTryolabs S.A.によって開発され、NVIDIAによる資金提供で開発されました。MaskCamはMITライセンスの下で提供されています。MaskCamに関する詳細情報は、[BDTIのレポート](https://www.bdti.com/maskcam)をご覧ください。質問がある場合は、BDTIにmaskcam@bdti.comまでメールしてください。

このプロジェクトでは、[NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html)とその他のアクセサリを使用します。同時に、Seeedから提供される[NVIDIA公式キャリアボードと同じサイズと機能設計を持つA206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)を選択することもできます。このボードは優れた安定性と汎用性を備えています。

## **準備**

### **ハードウェア要件**

- [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)（オプション）

- 7インチHDMIモニターとHDMIケーブル

- USBドッキングステーション

- マウスとキーボード

- 5V 4A電源アダプター

- USBカメラ

- イーサネットケーブル

- Windows11（またはWindows10/Ubuntu18.04/OSX Big Sur）を搭載したPC

### **ソフトウェア要件**

- docker

- docker-compose

- ビデオソフトウェア（RTSPストリームを表示するためのもの、例：VLC/QuickTime/PotPlayer）

## **開始方法**

### **Jetson Nanoのセットアップ**

- #### **ステップ1.** Docker HubからMaskCamコンテナをダウンロード

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **ステップ2.** コマンド```ifconfig```を使用してJetson NanoのIPアドレスを確認

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **ステップ3.** Dockerを使用してMaskCamを起動

Jetson NanoをUSBカメラに接続し、以下のコマンドをターミナルに入力してください。

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**注意:** このコマンド内の```<your-jetson-ip>```を自分のJetson NanoのIPアドレスに置き換えてください。

デフォルトの入力デバイスを使用したくない場合は、以下の2つの異なるコマンドを選択して上記のコマンドを置き換えることができます。

/dev/video1カメラデバイスを使用する場合:

```shell
# /dev/video1カメラデバイスを使用
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

CSIカメラデバイスを使用する場合:

```shell
# CSIカメラデバイスを使用
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **ステップ4.** ```MASKCAM_DEVICE_ADDRESS```を通じてライブビデオストリームを表示

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**注意:** ```aaa.bbb.ccc.ddd```は、以前に```MASKCAM_DEVICE_ADDRESS```で指定したアドレスです。

このURLを別のコンピュータのRTSPストリームビューアにコピーして貼り付けることができます。ビデオストリームでは、マスクを着用していない場合、顔に赤い枠が表示されます。マスクを着用している場合は、緑の枠が表示されます。

### **MQTTサーバーのセットアップ**

基本機能に加えて、このライブラリにはリモート[サーバー](https://github.com/bdtinc/maskcam/blob/main/server)の機能も含まれており、PCがデバイスから統計情報を受信し、それをデータベースに保存し、WebベースのGUIフロントエンドで表示することができます。

この記事では、すべてのサーバーに関するデモはWindows11システムホストを基盤としています。Linuxシステムを使用する手順については、この記事をご覧ください: [Maskcam](https://github.com/bdtinc/maskcam)。

- #### **ステップ1.** PCにDockerとDocker-composeをインストール

公式ウェブサイトから[Docker](https://www.docker.com/)のインストールパッケージをダウンロードしてください: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

注意: インストール中に```WLS 2 installization is incomplete.```というメッセージが表示された場合は、プロンプトボックス内のリンクをクリックし、Linuxカーネル更新パッケージをダウンロードしてインストールしてください。その後、```docker```を実行できます。

- #### **ステップ2.** ビルドディレクトリを設定

管理者として```Windows PowerShell```を実行

使用するドライブのルートに移動します。例:

```shell
cd e:\
```

MaskCamリポジトリをダウンロード:

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

```e:\maskcam```のパスに解凍:

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

MaskCamサーバーフォルダに移動します。このフォルダには、Mosquittoブローカー、バックエンドAPI、データベース、Streamlitフロントエンドの4つのコンテナがあります。

```shell
cd maskcam\maskcam-main\server
```

次に、デフォルトテンプレートをコピーして```.env```ファイルを作成します:

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

```database.env``` を開きます：

```shell
notepad database.env
```

```<DATABASE_USER>```, ```<DATABASE_PASSWORD>```, および ```<DATABASE_NAME>``` フィールドを自分の値に置き換えてください。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **ステップ3.** ローカルサーバーをビルドして実行する

データベース環境ファイルを編集した後、以下のコマンドを使用してすべてのコンテナをビルドし、実行する準備が整います：

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

次に、ウェブブラウザを開き、サーバーIPを入力してフロントエンドのウェブページにアクセスします：

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**注意:** ```<server IP>``` を自分のIPアドレスに置き換えてください。

フロントエンドで ```ConnectionError``` が表示された場合は、数秒待ってページを再読み込みしてください。バックエンドコンテナがデータベースのセットアップを完了するのに時間がかかることがあります。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

数秒待ってページを再読み込みしてもフロントエンドで ```ConnectionError``` が表示される場合は、ポート `5432` および `80` が占有されていないか、リッスンされていないかを確認してください。

初めてフロントエンドウェブページに正常にアクセスできたが、その後失敗した場合、現在の最善の解決策はDockerを再インストールすることです。

- #### **ステップ4.** Jetson Nano をローカルサーバーに接続する

Jetson Nano のターミナルに戻り、以下のコマンドを使用して maskcam コンテナを実行します：

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**注意:** ```<server IP>``` および ```<your-jetson-ip>``` を自分のサーバーおよび Jetson Nano のIPアドレスに置き換えてください。

その後、以下のようにウェブページ上でデバイスを選択できます：

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

最後に、Jetson Nano が収集したデータがサーバーに送信されるのを確認できます。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>