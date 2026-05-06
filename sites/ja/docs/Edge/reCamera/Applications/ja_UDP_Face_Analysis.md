---
description: このデモでは、reCamera 上でリアルタイム顔検出、属性解析（年齢/性別/人種）、感情認識を行い、その結果を UDP 経由で PC にストリーミングして表示する方法を示します。
title: reCamera を用いた UDP 顔解析
keywords:
  - reCamera
  - 顔検出
  - 年齢 性別 人種
  - 感情認識
  - UDP ストリーミング
  - エッジ AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif
slug: /recamera_udp_face_analysis
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 12
last_update:
  date: 04/30/2026
  author: Samuel
createdAt: '2026-04-30'
updatedAt: '2026-04-30'
url: https://wiki.seeedstudio.com/ja/recamera_udp_face_analysis/
---

# reCamera を用いた UDP 顔解析

## はじめに

このデモでは、reCamera を使用してリアルタイム顔解析システムを構築する方法を説明します。このシステムは次の処理を行います：

- **顔検出**：YOLO 顔検出モデルを使用
- **属性解析**：FairFace モデルを用いた年齢・性別・人種の推定
- **感情認識**：7 クラスの感情検出
- **UDP ストリーミング**：検出メタデータ付き JPEG フレームを UDP 経由で PC に送信

C++ アプリケーションは reCamera 上で動作し、ビデオフレームと検出結果（バウンディングボックス、属性）を UDP を通じて送信します。PC 上で動作する Python 受信スクリプトが、注釈付きビデオストリームをリアルタイムに表示します。

**主な特長**:
- 信頼度しきい値を制御可能なリアルタイム顔検出
- 顔ごとの複数属性解析（性別、年齢、人種、感情）
- JPEG 圧縮を用いた効率的な UDP ストリーミング
- CPU/TPU 負荷を下げるためのフレームスキップ推論
- 詳細なパフォーマンス統計

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif" /></div>

## デモのセットアップ

このデモをセットアップするには、次の手順を実行します：

1. ReCamera 上で C++ プログラムをコンパイルする
2. ReCamera 上でコンパイル済み実行ファイルを実行する
3. PC 上で Python 受信スクリプトを実行する

### 1. C++ プログラムをコンパイルする

:::note
このソリューションをビルドする前に、メインプロジェクトのドキュメントに従って **ReCamera-OS** 環境をセットアップしていることを確認してください。
:::

`cmake` を実行する前に、**ReCamera-OS** ビルド環境用に次の環境変数を設定します：

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

まず、必要なモデルがそろっていることを確認します：
- `yolo_face.cvimodel` - YOLO 顔検出モデル
- `age_gender_race.cvimodel` - 年齢/性別/人種向け FairFace モデル
- `emotion.cvimodel` - 感情認識モデル

これら 3 つのモデルファイルは、[sscma-example-sg200x v1.0.1 リリース](https://github.com/RobotXTeam/sscma-example-sg200x/releases/tag/v1.0.1)からダウンロードするか、自分でモデルを学習してから量子化/変換して `.cvimodel` 形式にすることもできます。

ソリューションディレクトリに移動してコンパイルします：

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/face_udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

コンパイルされた実行ファイルは `build/face_udp` に生成されます。

:::note
リポジトリには、ソリューションフォルダ内にあらかじめコンパイル済みのモデルが含まれています：
- `yolo-face_mixfp16.cvimodel`
- `age_gender_race_bf16.cvimodel`
- `emotion_bf16.cvimodel`
:::

### 2. ReCamera を設定する

:::warning
C++ プログラムを実行する前に、カメラリソースを占有しているデフォルトの Node-RED サービスを停止する必要があります。SSH 経由で次のコマンドを実行してください：
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. ReCamera 上で実行ファイルを実行する

コンパイル済み実行ファイルとモデルを ReCamera 上の `/home/recamera/` にアップロードし、次を実行します：

```bash
chmod +x face_udp
./face_udp <yolo_face.cvimodel> <age_gender_race.cvimodel> <emotion.cvimodel> [single|multi] [threshold] [skip] [udp_ip] [udp_port] [log_every_n_infer]
```

#### パラメータ

| Parameter | 説明 | デフォルト |
|-----------|-------------|---------|
| `yolo_face.cvimodel` | YOLO 顔検出モデル（必須） | - |
| `age_gender_race.cvimodel` | FairFace モデル（必須） | - |
| `emotion.cvimodel` | 感情モデル（必須） | - |
| `single\|multi` | YOLO ヘッドタイプ | multi |
| `threshold` | 検出しきい値 | 0.5（multi）/ 0.7（single） |
| `skip` | N フレームごとに推論 | 3（multi）/ 1（single） |
| `udp_ip` | UDP 用 PC の IP アドレス | - |
| `udp_port` | UDP ポート番号 | - |
| `log_every_n_infer` | N 回ごとにログを出力 | 20 |

#### コマンド例

**基本的な使い方（UDP ストリーミングなし）**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bf16.cvimodel
```

**UDP ストリーミングあり**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bfpf16.cvimodel multi 0.5 3 192.168.31.100 5001
```

:::note
`192.168.31.100` は、ReCamera と同じネットワーク上にある PC の実際の IP アドレスに置き換えてください。
:::

### 4. PC 上で Python 受信プログラムを実行する

PC 上で、必要なライブラリを含む Python がインストールされていることを確認します：

```bash
pip install opencv-python numpy
```

ソリューションディレクトリに移動して次を実行します：

```bash
cd sscma-example-sg200x/solutions/sesg-project/face_udp
python3 udp_receiver.py
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_show.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_demo.gif" /></div>

## 期待される出力

### ReCamera のターミナル上

プログラムは 2 秒ごとにリアルタイムのパフォーマンス統計を表示します：

```
========== Performance Stats (Last 2 Seconds) ==========
Video FPS: 30.2 | UDP FPS: 9.8
Frames: 300 | Inferences: 100

Average YOLO Timing:
  Preprocess: 0.9 ms
  Inference:  35.5 ms
  Postprocess: 32.3 ms
  Total: 68.7 ms

Average Attribute/Emotion Overhead:
  mmap: 1.2 ms
  AGR: 45.3 ms/frame | 45.3 ms/face
  EMO: 12.1 ms/frame | 12.1 ms/face

UDP Send:
  avg_send: 2.1 ms | throughput: 850.5 kbps
======================================
```

### Python 受信ウィンドウ上

PC には次の内容を表示するウィンドウが表示されます：
- JPEG フレームによるライブビデオストリーム
- 顔のバウンディングボックス（緑色の矩形）
- 左上隅の属性ラベル：
  - 性別（Male/Female）
  - 年齢範囲
  - 人種分類
  - 感情（angry/disgust/fear/happy/sad/surprise/neutral）



## トラブルシューティング

### カメラアクセスエラー

"No camera" エラーが表示される場合：
- Node-RED サービスが停止していることを確認する（上記ステップ 2 を参照）
- カメラ接続を確認する

### UDP 接続失敗

PC がデータを受信しない場合：
- PC と ReCamera が同じネットワーク上にあることを確認する
- PC のファイアウォール設定を確認する
- UDP ポート 5001 がブロックされていないことを確認する
- デバイス間で `ping` を実行してテストする

### モデル読み込みエラー

モデルの読み込みに失敗する場合：
- モデルファイルが `/home/recamera/` にアップロードされていることを確認する
- `ls -la` でファイルパーミッションを確認する
- 十分なストレージ容量があることを確認する

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
