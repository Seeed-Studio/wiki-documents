---
description: reTerminal と Pi カメラモジュールの統合
title: reTerminal と Pi カメラモジュール
keywords:
  - Edge
  - reTerminal 
  - piCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-piCam
last_update:
  date: 5/17/2023
  author: Kasun Thushara
---
# reTerminal と Pi カメラモジュール

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

Raspberry Pi Camera（一般的に PiCam と呼ばれる）は、Raspberry Pi シングルボードコンピュータ専用に設計されたカメラモジュールです。Raspberry Pi デバイスから直接画像を撮影し、動画を録画するためのコンパクトで便利なソリューションを提供します。

以下は PiCam の各バージョンの仕様です：

**PiCam v1（Camera Module v1.3）：**

- センサー：OmniVision OV5647
- 解像度：5メガピクセル
- ビデオモード：1080p30、720p60、640x480p60/90

**PiCam v2（Camera Module v2）：**

- センサー：Sony IMX219
- 解像度：8メガピクセル（3280 x 2464 ピクセル）
- ビデオモード：1080p30、720p60、640x480p90

**PiCam v3（Camera Module 3）：**

- センサー：Sony IMX708
- 解像度：12メガピクセル（4056 x 3040 ピクセル）
- ビデオモード：1080p30、720p60、640x480p90

| Raspberry Pi Camera Module V1|Raspberry Pi Camera Module V2| Raspberry Pi Camera Module 3 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|
|Raspberry Pi Camera Module 3 Wide NoIR | Raspberry Pi Camera Module 3 NoIR | Raspberry Pi Camera Module 3 Wide |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

PiCamのすべてのバージョンは、MIPI CSI-2インターフェースを介してRaspberry Piに接続し、画像および動画データを送信するための直接的で高速な接続を提供します。

PiCamは、**写真撮影、動画撮影、コンピュータビジョンプロジェクト、監視など**、様々なアプリケーションに適した幅広い機能と性能を提供します。その小型フォームファクターとRaspberry Piとの簡単な統合により、ホビイスト、メーカー、プロフェッショナルの間で人気の選択肢となっています。

上記で言及した仕様は標準的なPiCamモジュールのものであり、サードパーティメーカーから提供される変種や代替カメラモジュールが存在する場合があることにご注意ください。

PiCamのインストールに関しては、2つのオプションがあります。最初のオプションは、Seeed Studioが提供する事前構築済みイメージを使用することで、これらは当社のwikiページで見つけることができます。これらの事前構築済みイメージはPiCam用に特別に設定されており、互換性と使いやすさを保証します。ただし、これらのイメージはPiCam v1（OmniVision OV5647センサー）でのみ動作することにご注意ください。

または、公式ウェブサイトから最新バージョンのRaspberry Pi OSをインストールすることを選択できます。そうすることで、最新の機能と改善にアクセスできます。Seeed Studioはこのアプローチを推奨し、新しいRaspberry Pi OSインストールでPiCamの適切な機能を確保するために必要なドライバーと関連コンポーネントをインストールする手順をwikiページで提供しています。

## 事前構築済みraspberry piイメージの使用

Seeed Studio reTerminal用のPiCamをインストールするには、Seeed Studioが提供する事前構築済みイメージを使用するオプションがあります。これらのイメージは当社のwikiページで利用可能で、reTerminal用に特別に設計されています。

:::note

事前構築済みイメージは現在、**OmniVision OV5647センサーを使用するPiCam v1のみをサポート**していることに注意することが重要です。これは、`raspistill`コマンドを使用して画像をキャプチャしたり動画を録画したりできることを意味します。

:::

- **ステップ1** reTerminal専用のSeeed Studio wikiページにアクセスし、事前構築済みイメージを提供するセクションに移動します。（イメージを取得してインストール手順を確認するには、このリンクを参照できます。すでに完了している場合は、このステップをスキップしてください。[このリンク](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)）
- **ステップ2** reTerminalの電源を切り、PiCam v1モジュールをreTerminalのカメラインターフェースに接続します。しっかりと取り付けられていることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **ステップ3** reTerminalを組み立て、reTerminalを起動します。デスクトップで見つけることができるreTerminalアイコンに移動し、カメラを有効にして再起動します。

- **ステップ4** ターミナルを開くか、reTerminalにSSHでアクセスしてコマンドラインインターフェースにアクセスします。
- **ステップ5** `raspistill`コマンドを使用して画像をキャプチャします。より多くのコマンドについては、このサイトを訪問できます。[リンク](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)

```sh
raspistill -o Desktop/image.jpg
```

## 新しいRaspberry Pi OSの場合

Seeed Studio reTerminalには、Raspberry Pi公式ウェブサイトのRaspbian Bullseye 64-bit新規イメージを推奨します：

- **ステップ1** Seeed Studioは、新しいRaspberry Pi OSまたは他のOSをフラッシュした後にドライバーをインストールする方法について詳細な手順を提供しています。reTerminalのSeeed Studio wikiページを参照し、["Flash new Raspberry Pi OS"](https://wiki.seeedstudio.com/ja/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)セクションと["How to install reTerminal drivers"](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)セクションで提供されている手順に従ってください。すでに完了している場合は、このステップをスキップしてください。

- **ステップ2** reTerminalの電源を切り、PiCamモジュールをreTerminalのカメラインターフェースに接続します。しっかりと取り付けられていることを確認してください。

- **ステップ3** ターミナルを開くか、reTerminalにSSHで接続し、以下のコマンドを実行してconfig.txtファイルを編集します：

```sh
sudo nano /boot/config.txt 
```

- **ステップ 4** config.txt ファイル内で、PiCam を有効にするために特定の変更を行う必要があります。以下の手順に従ってください：

  - camera_auto_detect=1 の行を見つけて、行の先頭に "#" を追加してコメントアウトします。この手順は、カメラモジュールの自動検出を無効にするために必要です。

  - config.txt ファイルに以下の行を追加します：
    - dtoverlay=ov5647,cam0
    - dtoverlay=camera-mux-2port

:::note

PiCam v1 の代わりに PiCam v3 NoIR wide を使用している場合は、**dtoverlay=ov5647,cam0** の代わりに **dtoverlay=imx708,cam0** を使用してください。dtoverlay 設定は、使用するカメラモジュールとカメラマルチプレクサを指定します。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **ステップ 5** : Ctrl + X を押し、続いて Y、そして Enter を押して確認することで、config.txt ファイルに加えた変更を保存します。最後に、変更を適用するために reTerminal を再起動します：

```sh
sudo reboot
```

 再起動後、PiCamが設定され、Seeed Studio reTerminalで使用する準備が整います。これで、libcameraを使用して画像の撮影やビデオの録画を進めることができます。

- **ステップ 6** : ターミナルを開き、以下のコードを記述してすべてが動作することをテストします。

```sh
sudo libcamera-hello
```

libcamera-helloは、カメラ用の「hello world」アプリケーションに相当します。カメラを起動し、プレビューウィンドウを表示し、それ以外は何もしません。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

[libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html)の詳細については、以下のドキュメントを参照してください
