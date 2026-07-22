---
description: このサンプルでは、reCamera 上でリアルタイム QR コード認識を実行し、ビデオフレームと認識結果を UDP 経由で PC に送信して表示する方法を示します。
title: reCamera 上でのリアルタイム QR コード認識
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 07/08/2026
  author: QiYao Lin
createdAt: '2026-06-15'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/recamera_qrcode_udp/
---

# reCamera 上でのリアルタイム QR コード認識

## はじめに

このサンプルでは、reCamera を使用して**リアルタイム QR コード認識システム**を構築する方法を説明します。システムはカメラでリアルタイムにビデオフレームを取得し、**Quirc** ライブラリを使用して QR コードをデコードし、ビデオフレームと認識結果を **RTSP** および HTTP プロトコル経由で PC に送信して表示します。

**主な特長**:
- リアルタイムのカメラキャプチャと QR コード認識
- ビデオストリームモードと単一画像モードをサポート
- JPEG フレーム + 認識結果を RTSP 経由で PC に送信
- PC 側の Python スクリプトでリアルタイムのビデオと結果を表示

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.gif" /></div>

## 動作原理

### ビデオストリーム + QR コード検出結果分離モード

このサンプルでは、「リアルタイムビデオ伝送」と「非同期 QR コード検出結果の問い合わせ」を分離したアーキテクチャを採用しています。reCamera 側はカメラ画像のキャプチャ、RTSP ビデオストリームの配信、およびデバイス内での独立した QR コード検出スレッドの実行を担当します。PC 側は RTSP を介してリアルタイムビデオを取得すると同時に、HTTP インターフェースを通じて最新の QR コード検出結果にアクセスします。

リアルタイム認識の処理フローは次のとおりです。

- カメラキャプチャ: reCamera は SG2002 ビデオインターフェースを介してカメラ画像を取得し、同時に 2 つのビデオチャネルを構成します。
- RTSP ビデオストリーミング: 一方のビデオチャネルは H.264 にエンコードされ、同一セグメント内のデバイスに RTSP 経由でリアルタイム配信されます。PC は RTSP アドレスを使用してリアルタイムビデオストリームを直接プルして表示できます。
- QR コード検出用フレーム取得: もう一方のビデオチャネルは、QR コード検出用に低解像度の NV21 画像フレームを出力します。プログラムは NV21 の Y プレーンのみを QR コード検出器へのグレースケール画像入力として使用し、追加の RGB 変換によるオーバーヘッドを回避します。
- 最新フレームキューキャッシュ: QR コード検出スレッドはビデオキャプチャコールバックから分離されています。キャプチャコールバックは直接 QR コード検出を行わず、最新のグレースケールフレームを長さ 1 のキューに格納します。検出スレッドの処理速度が遅い場合、新しいフレームが古いフレームを上書きし、常に最新フレームのみがキューに保持されるようにして、検出タスクの滞留による遅延増加を防ぎます。
- 非同期 QR コード検出: QR コード検出スレッドは最新フレームキューから画像を取得し、quirc QR コード認識ライブラリを使用して検出とデコードを行います。検出処理は独立したスレッドで実行されるため、RTSP ビデオストリーミングをブロックしません。
- 結果キャッシュ: 各検出後、プログラムは最新の QR コード検出結果を更新します。これには、QR コードが検出されたかどうか、QR コードの内容、検出時間、frame_id、PTS、キャプチャ時刻、検出完了時刻、および QR コードのバウンディングボックス座標が含まれます。
- HTTP 結果クエリ: 同一ネットワークセグメント上のデバイスは、`/api/qr/latest` を GET することで最新の QR コード検出結果を取得できます。このインターフェースは直近の検出結果のみを返し、ビデオストリームをブロックしたり、過去の検出キューを能動的に送信したりすることはありません。
- PC 側表示: Windows クライアントは左側に RTSP 経由のリアルタイムビデオストリームを表示し、右側では HTTP 経由で `/api/qr/latest` を定期的にポーリングして、最新の QR コード検出結果と検出時間を表示します。返された結果に QR コードのバウンディングボックス座標が含まれている場合、クライアントは検出ボックスをスケーリングして RTSP ビデオストリーム上にオーバーレイ表示します。

データリンクは次のとおりです。

```text
reCamera
├── RTSP Video Stream
│   └── Address:
│       rtsp://<device-ip>:8554/live0
│
└── QR Code Detection Result HTTP API
    └── Address:
        http://<device-ip>:8080/api/qr/latest
```

この設計により、高いリアルタイム性が求められるビデオ伝送と、比較的時間のかかる QR コード検出が分離されます。RTSP ビデオストリームは連続した出力を維持でき、QR コード検出スレッドは最新フレームのみを処理します。たとえ QR コード検出に時間がかかったとしても、ビデオのカクつきや検出キューの滞留を引き起こすことはありません。

## デモのセットアップ

このデモをセットアップするには、次のものが必要です。

1. PC 上で C++ プログラムをクロスコンパイルします。
2. コンパイルされた実行ファイルを ReCamera 上で実行します。
3. PC 上で Python 受信スクリプトを実行します。

### 1. C++ プログラムをコンパイルする

このソリューションをビルドする前に、recamera 環境を構成する必要があります。対応する事前コンパイル済みライブラリを次の場所から直接ダウンロードできます。

```text
https://codeload.github.com/Seeed-Studio/sscma-example-sg200x/tar.gz/refs/tags/0.2.4
````
解凍して環境変数を設定します。
```bash
export SG200X_SDK_PATH=<PATH_TO_RECAMERA-OS>/output/sg2002_recamera_emmc/
export PATH=<PATH_TO_RECAMERA-OS>/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

QR コード認識リポジトリをクローンし、対応するソリューションディレクトリに移動してコンパイルします。PC のターミナルで次のコマンドを順に実行してください。

```bash
git clone https://github.com/yyling0101-a11y/qrcode_rec.git
cd /qrcode_rec/
```

クローン後のリポジトリディレクトリ構成は次のようになります。
```text
(base) yylin@LAPTOP-TI348HL9:~/qrcode_rec$ tree -L 2 -I "build"
.
├── CMakeLists.txt
├── main
│   ├── CMakeLists.txt
│   ├── frame_sei.cpp
│   ├── frame_sei.hpp
│   ├── frame_sync.cpp
│   ├── frame_sync.hpp
│   ├── http_server.cpp
│   ├── http_server.hpp
│   ├── latest_frame_queue.hpp
│   ├── main.cpp
│   ├── placeholder
│   ├── qr_detector.cpp
│   ├── qr_detector.hpp
│   ├── qr_result_store.cpp
│   ├── qr_result_store.hpp
│   ├── qr_worker.cpp
│   ├── qr_worker.hpp
│   ├── rtsp_demo.cpp
│   ├── rtsp_demo.h
│   └── third_party
└── recamera_qr_win_client
    ├── README.md
    ├── recamera_qr_viewer.py
    └── requirements.txt
```

`main` ディレクトリには recamera 上で実行するソースコードが含まれ、`recamera_qr_win_client` には x86 デバイス上で実行する可視化結果用のソースコードが含まれています。コンパイル前に、main ディレクトリ内の `CMakeLists.txt` ファイルで指定されているディレクトリを、前のステップでダウンロードして解凍した事前コンパイル済みパッケージのディレクトリを指すように変更する必要があります。

コンパイルを開始します。
```bash
mkdir build && cd build
cmake ..
make
```

コンパイルが成功すると、実行ファイルは `build/qrcode_rec` に生成されます。`scp` コマンドを使用して、これを ReCamera 上の `/home/recamera/` ディレクトリにアップロードします。

```bash
sudo scp qrcode_rec recamera@192.168.42.1:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
プロンプトが表示されたら、対応するプラットフォームのパスワードを入力して、`qrcode_rec` の転送を完了します。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/make.png" /></div>


### 2. ReCamera を構成する

:::warning
C++ プログラムを実行する前に、デフォルトの Node-RED サービスを停止する必要があります。これらはカメラリソースを占有するためです。SSH 経由で次のコマンドを実行してください。
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. ReCamera 上で実行ファイルを実行する

次に、以下のコマンドを実行して実行権限を付与します。

```bash
chmod +x qrcode_udp
```

#### コマンド例

reCamera のターミナルでこのコマンドを直接実行してプログラムを起動できます。
```bash
sudo ./qrcode_rec
```

正常に起動すると、ログは次のようになります。

```
[recamera@reCamera]~$ sudo  ./qrcode_rec
Password:
prio:0
rtsp://192.168.4.5:8554/live0
[rtsp] session name=live0 channel=2 codec=1 result=0 session=0x3fe0c53210
ISP Vipipe(0) Allocate pa(0x8cf31000) va(0x0x3fe072f000) size(311584)
awbInit ver 6.9@2021500
0 R:1400 B:3100 CT:2850
1 R:1500 B:2500 CT:3900
2 R:2300 B:1600 CT:6500
Golden 1024 1024 1024
WB Quadratic:0
isWdr:0
ViPipe:0,===OV5647 1080P 30fps 10bit LINE Init OK!
********************************************************************************
cvi_bin_isp message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

PQBIN message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

author:        hongtai.liu    desc:          Seeed OV5647
createTime:    2025-08-14 14:37:24version:       V1.1
tool Version:       v3.0.8.6            mode: M
********************************************************************************
20260708 03:45:31.704 2248 E isp AF_SetAttr:558 pstFocusMpiAttr is NULL

reCamera QR scanner is running
RTSP      : rtsp://192.168.4.5:8554/onvif
QR latest : http://192.168.4.5:8080/api/qr/latest
Health    : http://192.168.4.5:8080/api/health

[http] listening on 0.0.0.0:8080
0 R:1008 B:2206 CT:2777
1 R:1313 B:1866 CT:3894
2 R:1609 B:1206 CT:7164
Golden 1313 1024 1866
wdrLEOnly:1

```


### 4. PC 上で Python 受信プログラムを実行する

PC 上で、可視化ツール用の対応する環境依存関係をインストールする必要があります。

```bash
cd qrcode_rec/recamera_qr_win_client
pip install -r ./requirements.txt
```

その後、次のコマンドで Python プログラムを直接実行します。対応する IP アドレスを、あなたの reCamera の IP アドレスに変更する必要があります。

```bash
# in powershell
python recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest

# in linux
python3 recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest
```

#### Python 受信プログラムのパラメータ

| Parameter | 説明 | デフォルト |
|-----------|-------------|---------|
| `--rtsp` | RTSP アドレス | `192.168.4.5` |
| `--qr-url` | 認識結果を取得する URL | `http://192.168.4.5:8080/api/qr/latest` |


### Python レシーバーウィンドウ内

PC にはリアルタイムのビデオウィンドウが表示され、次の内容が含まれます：
- JPEG ビデオストリーム
- 認識結果
- HTTP によって返される生の JSON
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.png" /></div>

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、お客様の体験ができるだけスムーズなものとなるよう、さまざまな形態のサポートを提供することに尽力しています。お客様それぞれの好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>