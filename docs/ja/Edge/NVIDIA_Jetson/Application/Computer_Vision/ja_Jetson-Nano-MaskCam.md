---
description: MaskCam
title: MaskCam
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson-Nano-MaskCam
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Maskcam - Jetson Nanoベースの群衆マスク着用監視システム

## **はじめに**

COVID-19の猛威により、多くの公共の場所でマスクの着用が求められています。通常、エリアの入り口には管理者がいて、人々がマスクを着用しているかどうかを観察しています。これは人間にとっては非常に簡単なタスクかもしれませんが、Jetson Nano、グラフィックキャプチャ、AIを使ったエッジコンピューティングと組み合わせることで、非常に興味深く社会的価値のあるタスクになります。

MaskCamは、Berkeley Design Technology, Inc. (BDTI)とTryolabs S.A.によって開発され、NVIDIAの資金提供を受けて開発されました。MaskCamはMITライセンスの下で提供されています。MaskCamの詳細については、[BDTIのレポート](https://www.bdti.com/maskcam)をご覧ください。ご質問がございましたら、maskcam@bdti.comまでBDTIにメールでお問い合わせください。

このプロジェクトでは、[NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html)と他のアクセサリを使用します。同時に、Seeedの[A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)を選択することもできます。これはNVIDIAの公式キャリアボードと同じサイズと機能設計を持ち、優れた安定性と汎用性も備えています。

## **準備**

### **ハードウェア要件**

- [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)（オプション）

- 7インチhdmiモニターとHDMIケーブル

- USBドッキングステーション

- マウスとキーボード

- 5V 4A電源アダプター

- USBカメラ

- イーサネットケーブル

- Windows11搭載PC（またはWindows10/Ubuntu18.04/ OSX Big Sur）

### **ソフトウェア要件**

- docker

- docker-compose

- ビデオソフトウェア（RTSPストリームを表示、VLC/QuickTime/PotPlayerなど）

## **開始方法**

### **Jetson Nanoセットアップ**

- #### **ステップ 1.** Docker HubからMaskCamコンテナをダウンロード

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **ステップ 2.** ```ifconfig``` コマンドでJetson NanoのIPアドレスを確認する

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **ステップ 3.** dockerでMaskCamを開始する

Jetson NanoにUSBカメラを接続することを忘れずに、その後、以下のコマンドをターミナルに入力してください。

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**注意:** このコマンドでは、```<your-jetson-ip>``` をあなた自身のJetson NanoのIPアドレスに置き換えてください。

デフォルトの入力デバイスを使用したくない場合は、上記のコマンドを選択して置き換えるための2つの異なるコマンドもあります。

/dev/video1カメラデバイスを使用する場合:

```shell
#Use the /dev/video1 camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

CSIカメラデバイスを使用する：

```shell
#Use the CSI camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **ステップ 4.** ```MASKCAM_DEVICE_ADDRESS```を通じてライブビデオストリームを表示する

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**注意：** ```aaa.bbb.ccc.ddd``` は、以前に ```MASKCAM_DEVICE_ADDRESS``` で提供したアドレスです。

そのURLを別のコンピュータのRSTSストリーミングビューアにコピー＆ペーストできます。ビデオストリームで、マスクを着用していない場合は、顔に赤いフレームが表示されます。そうでなければ、緑のフレームが表示されます。

### **MQTT サーバーセットアップ**

基本機能に加えて、このライブラリにはリモート[サーバー](https://github.com/bdtinc/maskcam/blob/main/server)の機能も含まれており、PCがデバイスから統計情報を受信し、データベースに保存し、それらを表示するWebベースのGUIフロントエンドを持つことができます。

この記事では、サーバーに関するすべてのデモはWindow11システムホストに基づいています。この記事を通じてLinuxシステムを使用する手順も見つけることができます：[Maskcam](https://github.com/bdtinc/maskcam)。

- #### **ステップ1.** PCにDockerとDocker-composeをインストール

[Docker](https://www.docker.com/)の公式ウェブサイトからインストールパッケージをダウンロードします：[https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

注意：インストールの過程で```WLS 2 installization is incomplete.```というメッセージが表示される場合は、プロンプトボックス内のリンクをクリックし、Linuxカーネル更新パッケージをダウンロードしてインストールしてください。
その後、```docker```を実行できます。

- #### **ステップ2.** ビルドディレクトリのセットアップ

管理者として```Windows PowerShell```を実行

使用するドライブのルートに移動します。例えば：

```shell
cd e:\
```

Download MaskCam repo :

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

パス ```e:\maskcam``` に解凍します：

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

maskcamサーバーフォルダに移動します。このフォルダには4つのコンテナがあります：Mosquittoブローカー、バックエンドAPI、データベース、およびStreamlitフロントエンドです。

```shell
cd maskcam\maskcam-main\server
```

次に、デフォルトテンプレートをコピーして```.env```ファイルを作成します：

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

Open the ```database.env``` :

```shell
notepad database.env
```

```<DATABASE_USER>```、```<DATABASE_PASSWORD>```、```<DATABASE_NAME>``` フィールドを独自の値に置き換えてください

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **ステップ3.** ローカルサーバーのビルドと実行

データベース環境ファイルの編集後、すべてのコンテナをビルドし、単一のコマンドで実行する準備が整いました：

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

次に、Webブラウザを開いてサーバーIPを入力し、フロントエンドのWebページにアクセスします：

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**注意:** ```<server IP>``` を自分のIPアドレスに置き換えてください。

フロントエンドで```ConnectionError```が表示された場合は、数秒待ってからページをリロードしてください。バックエンドコンテナがデータベースのセットアップを完了するまでに時間がかかることがあります。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

もう数秒待ってページをリロードしても、フロントエンドで```ConnectionError```が発生している場合は、ポート`5432`と`80`が占有されていないか、リッスンされていないかを確認してください。

フロントエンドのウェブページに初回は正常にアクセスできたが、次回以降失敗する場合、現在のところ最良の解決方法はdockerを再インストールすることです。

- #### **ステップ4.** Jetson Nanoをローカルサーバーに向ける

Jetson Nanoのターミナルに戻り、以下のコマンドでmaskcamコンテナを実行してください：

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**注意:** ```<server IP>``` と ```<your-jetson-ip>``` を、あなた自身のサーバーとJetson NanoのIPアドレスに置き換えてください。

その後、以下に示すようにWebページでデバイスを選択できます：

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

最後に、Jetson Nanoによって収集されたデータがサーバーに送信されているのを確認できます。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
