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
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal と Pi カメラモジュール
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

Raspberry Pi カメラ、一般的に PiCam として知られるこのカメラモジュールは、Raspberry Pi シングルボードコンピュータ専用に設計されています。コンパクトで便利なソリューションを提供し、Raspberry Pi デバイスから直接画像をキャプチャしたり、ビデオを録画したりすることができます。

以下は各バージョンの PiCam の仕様です：

**PiCam v1 (Camera Module v1.3):**

- センサー: OmniVision OV5647
- 解像度: 5 メガピクセル
- ビデオモード: 1080p30, 720p60, 640x480p60/90

**PiCam v2 (Camera Module v2):**
- センサー: Sony IMX219
- 解像度: 8 メガピクセル (3280 x 2464 ピクセル)
- ビデオモード: 1080p30, 720p60, 640x480p90

**PiCam v3 (Camera Module 3):**
- センサー: Sony IMX708
- 解像度: 12 メガピクセル (4056 x 3040 ピクセル)
- ビデオモード: 1080p30, 720p60, 640x480p90

| Raspberry Pi Camera Module V1 | Raspberry Pi Camera Module V2 | Raspberry Pi Camera Module 3 |
|----------|---------------------|--------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|

| Raspberry Pi Camera Module 3 Wide NoIR | Raspberry Pi Camera Module 3 NoIR | Raspberry Pi Camera Module 3 Wide |
|----------|---------------------|--------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[今すぐ購入！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

すべての PiCam バージョンは MIPI CSI-2 インターフェースを介して Raspberry Pi に接続され、画像およびビデオデータを高速で直接送信することができます。

PiCam は、**写真撮影、ビデオ撮影、コンピュータビジョンプロジェクト、監視など**、さまざまな用途に適した機能と能力を提供します。その小型フォームファクターと Raspberry Pi との簡単な統合により、ホビイスト、メーカー、プロフェッショナルの間で人気の選択肢となっています。

上記の仕様は標準的な PiCam モジュールに関するものであり、サードパーティ製の代替カメラモジュールやバリエーションが存在する場合があります。

PiCam をインストールする際には、2 つのオプションがあります。1 つ目のオプションは、Seeed Studio が提供する事前構築済みのイメージを使用する方法です。これらのイメージは PiCam 用に特別に構成されており、互換性と使いやすさを確保しています。ただし、これらのイメージは PiCam v1 (OmniVision OV5647 センサー) にのみ対応しています。

もう 1 つのオプションは、公式ウェブサイトから最新バージョンの Raspberry Pi OS をインストールする方法です。この方法では、最新の機能や改善点にアクセスできます。Seeed Studio はこのアプローチを推奨しており、新しい Raspberry Pi OS インストールで PiCam の適切な機能を確保するために必要なドライバーや関連コンポーネントのインストール手順を wiki ページで提供しています。

## 事前構築済み Raspberry Pi イメージの使用

Seeed Studio reTerminal に PiCam をインストールするには、Seeed Studio が提供する事前構築済みのイメージを使用するオプションがあります。これらのイメージは、reTerminal 用に特別に設計されており、当社の Wiki ページで入手可能です。

:::note

事前構築済みのイメージは現在、**OmniVision OV5647 センサーを使用する PiCam v1 のみをサポート**していることに注意してください。このため、`raspistill` コマンドを使用して画像をキャプチャしたり、ビデオを録画したりすることができます。

:::

- **ステップ 1** Seeed Studio の reTerminal 専用 Wiki ページにアクセスし、事前構築済みイメージを提供しているセクションに移動します。（イメージを取得し、インストール手順を確認するには[こちらのリンク](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)を参照してください。すでに実施済みの場合は、このステップをスキップしてください。）

- **ステップ 2** reTerminal の電源をオフにし、PiCam v1 モジュールを reTerminal のカメラインターフェースに接続します。しっかりと接続されていることを確認してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 3** reTerminal を組み立てて起動します。デスクトップにある reTerminal アイコンをクリックし、カメラを有効化して再起動します。

- **ステップ 4** ターミナルを開くか、SSH を使用して reTerminal にアクセスし、コマンドラインインターフェースを使用します。

- **ステップ 5** `raspistill` コマンドを使用して画像をキャプチャします。その他のコマンドについては[こちらのサイト](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)を参照してください。
```sh
raspistill -o Desktop/image.jpg
```

## 新しい Raspberry Pi OS の場合

Seeed Studio reTerminal には、Raspberry Pi の公式ウェブサイトから提供される Raspbian Bullseye 64-bit の新しいイメージを推奨します。

- **ステップ 1** Seeed Studio は、新しい Raspberry Pi OS またはその他の OS をフラッシュした後にドライバーをインストールする方法について詳細な手順を提供しています。Seeed Studio の reTerminal Wiki ページを参照し、["新しい Raspberry Pi OS をフラッシュする"](https://wiki.seeedstudio.com/ja/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)セクションおよび["reTerminal ドライバーをインストールする方法"](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)セクションの指示に従ってください。すでに実施済みの場合は、このステップをスキップしてください。

- **ステップ 2** reTerminal の電源をオフにし、PiCam モジュールを reTerminal のカメラインターフェースに接続します。しっかりと接続されていることを確認してください。

- **ステップ 3** ターミナルを開くか、SSH を使用して reTerminal にアクセスし、以下のコマンドを実行して config.txt ファイルを編集します。
```sh
sudo nano /boot/config.txt
```

- **ステップ 4** config.txt ファイル内で、PiCam を有効にするために特定の変更を行います。以下の手順に従ってください：

    - `camera_auto_detect=1` という行を見つけ、行の先頭に "#" を追加してコメントアウトします。このステップはカメラモジュールの自動検出を無効にするために必要です。

    - 以下の行を config.txt ファイルに追加します：
        - dtoverlay=ov5647,cam0
        - dtoverlay=camera-mux-2port

:::note

PiCam v1 の代わりに PiCam v3 NoIR wide を使用する場合は、**dtoverlay=ov5647,cam0** の代わりに **dtoverlay=imx708,cam0** を使用してください。dtoverlay の設定は、使用するカメラモジュールとカメラマルチプレクサを指定します。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **ステップ 5** config.txt ファイルに加えた変更を保存します。Ctrl + X を押し、続いて Y を押して Enter を押して確認します。最後に、変更を適用するために reTerminal を再起動します。
```sh
sudo reboot
```

再起動後、PiCam は構成され、Seeed Studio reTerminal で使用できるようになります。これで、libcamera を使用して画像をキャプチャしたり、ビデオを録画したりする準備が整いました。

- **ステップ 6** ターミナルを開き、以下のコードを入力してすべてが正常に動作しているかテストします。
```sh
sudo libcamera-hello
```

`libcamera-hello` は、カメラの "hello world" アプリケーションに相当します。カメラを起動し、プレビューウィンドウを表示し、それ以外の操作は行いません。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

詳細については、以下のドキュメントを参照してください：[libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html)