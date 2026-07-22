---
title: MediaPipe ハンドジェスチャー認識モデルの reCamera への移植
description: 本ドキュメントでは、Google 公式の MediaPipe ハンドジェスチャー認識スイートを reCamera（Sophon/Bitmain SG200X）へ完全に移植し、「palm detection → landmark detection → embedding → classification」というパイプラインを構築して、その結果を UDP 経由で PC にストリーミングし可視化する方法を説明します。
keywords:
  - reCamera
  - ハンドジェスチャー認識
  - MediaPipe
  - TPU 推論
  - INT8 量子化
  - UDP ストリーミング
slug: /recamera_hand_gesture
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 18
last_update:
  date: 06/26/2026
  author: Xuanjun Zhu
createdAt: '2026-06-26'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/ja/recamera_hand_gesture/
---

# MediaPipe ハンドジェスチャー認識モデルの reCamera への移植

## はじめに

このプロジェクトでは、Google 公式の **MediaPipe ハンドジェスチャー認識スイート** を **reCamera** 上に完全移植してリアルタイムでジェスチャー認識を行い、その映像と認識結果を UDP 経由で PC にストリーミングして可視化する方法を示します。

本システムは **8 種類のジェスチャーカテゴリ**（None / Closed_Fist / Open_Palm / Pointing_Up / Thumb_Down / Thumb_Up / Victory / ILoveYou）を認識でき、さらに **21 個のハンドランドマーク** と **利き手情報（左手/右手）** も出力します。以下のような用途に適しています：

- **スマートホームのジェスチャー操作**：あらかじめ定義したジェスチャーで照明、カーテン、家電スイッチを操作でき、音声やスマホアプリが不要です。
- **産業用途の非接触インタラクション**：手袋を着用している、あるいは両手がふさがっている作業者でも、簡単なジェスチャーで装置にコマンドを送信できます。
- **教育・展示でのインタラクション**：科学館や展示ホールなどで、来場者がジェスチャーによってマルチメディアコンテンツをトリガーし、没入型の体験を提供できます。
- **アクセシビリティ支援**：聴覚障害や身体の可動性が制限されているユーザーに対し、ジェスチャーによるデバイス操作の入口を提供します。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.gif" />
</div>
## ハードウェアの準備

このデモを実行するには、以下のハードウェアが必要です：

- **reCamera デバイス 1 台**（すべての reCamera バリアントに対応）
- **PC 1 台**（可視化用の Python 受信プログラムを実行します。reCamera と同一ローカルネットワーク上にある必要があります）

デプロイ要件に応じて、**任意のバージョンの reCamera** を選択できます：

- reCamera 2002 シリーズ（Wi-Fi）
- reCamera Gimbal
- reCamera HQ PoE（Ethernet + PoE）

> **注意:**  
> PoE バージョンは Wi-Fi をサポートしておらず、PoE 対応スイッチを介して同一ローカルネットワークに接続する必要があります。

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 動作概要


### モデル変換パイプライン（TFLite → ONNX → cvimodel）

公式 MediaPipe リポジトリから TFLite 形式のモデルをダウンロードします。これらを reCamera の TPU がサポートする `.cvimodel` 形式に変換する必要があります：

```
MediaPipe TFLite (FLOAT16)
    │  tf2onnx (--channel_format none, keep NHWC)
    ▼
ONNX (FLOAT32, NHWC)  ← numerical reference (cos=1.0 vs TFLite)
    │  tpu-mlir model_transform + model_deploy
    ├─ BF16
    └─ INT8 (per-channel + real-data calibration)
        ▼
CVIMODEL (cv181x)
```

#### 精度検証

変換後、モデルは 3 者比較（TFLite vs ONNX vs cvimodel）によって検証されます：

| モデル | 出力 | BF16 cos | INT8 cos |
|------|------|----------|----------|
| detector | scores | 1.0000 | 0.9896 |
| detector | boxes | 0.9999 | 0.9748 |
| landmark | lm63 | 1.0000 | 0.9999 |
| landmark | **world63** | 0.9997 | **0.8098**  |
| embedder | embedding | 1.0000 | 0.9992 |
| classifier | probs | 1.0000 | 0.9978 |

> **注意**: INT8 量子化後、`world63`（ワールド座標ランドマーク）の精度にはある程度の損失があります（cos=0.81）。しかし、エンドツーエンドのジェスチャー分類結果は TFLite と一致しており（カテゴリ判定は信頼できます）、多くの用途では問題ありません。もしアプリケーションがワールド座標の精度に強く依存する場合は、このモデルの BF16 版を使用することを推奨します。


## デモのビルド

このサンプルをビルドするには、次の手順が必要です：

1. PC 上で C++ プログラムをクロスコンパイルする
2. reCamera 上でコンパイル済み実行ファイルを実行する
3. PC 上で Python 受信スクリプトを実行する

### ステップ 1: C++ プログラムをコンパイルする

:::note
このソリューションをビルドする前に、[メインプロジェクトドキュメント](https://wiki.seeedstudio.com/ja/recamera_develop_with_c_cpp/)に従って **ReCamera-OS** 環境（バージョン 0.2.1 以上）を設定し、SDK パスとクロスコンパイルツールチェーンを構成しておいてください。
:::

クロスコンパイルツールチェーンの環境変数を設定します：

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

[リポジトリ](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main) をクローンし、ソリューションディレクトリに入ってビルドします：

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

コンパイルされた実行ファイルは次の場所にあります：`build/hand_gesture`

### ステップ 2: モデルファイルを準備する

このサンプルでは、4 つの `.cvimodel` モデルファイル（INT8 量子化版）が必要です。これらはすでに [リポジトリ](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main/solutions/sesg-project/hand_gesture/model) に用意されています。自分でモデルを変換する必要がある場合は、[モデル変換ガイド](https://wiki.seeedstudio.com/ja/recamera_model_conversion/) を参照してください：

| モデル | ファイル名 | 説明 |
|------|--------|------|
| Palm Detection | `hand_detector_cv181x_int8.cvimodel` | モデル 1: SSD パーム検出 |
| Landmark Detection | `hand_landmarks_detector_cv181x_int8.cvimodel` | モデル 2: 21 ランドマーク |
| Gesture Embedding | `gesture_embedder_cv181x_int8.cvimodel` | モデル 3: 128 次元埋め込み |
| Gesture Classification | `canned_gesture_classifier_cv181x_int8.cvimodel` | モデル 4: 8 クラス分類 |

コンパイル済み実行ファイルとモデルファイルを reCamera 上の `/home/recamera/` にアップロードします：

```bash
scp hand_gesture hand_detector_cv181x_int8.cvimodel hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel canned_gesture_classifier_cv181x_int8.cvimodel \
    recamera@<reCamera_IP>:/home/recamera/ # Make sure the PC and reCamera are on the same network segment, then replace <reCamera_IP> with the corresponding IP address
```

### ステップ 3: reCamera を設定する

:::warning
C++ プログラムを実行する前に、デフォルトの Node-RED サービスを停止する必要があります。これらはカメラリソースを占有してしまいます。SSH 経由で次のコマンドを実行してください：
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### ステップ 4: reCamera 上で実行ファイルを実行する

SSH で reCamera にログインし、実行権限を付与してから実行します：

```bash
cd /home/recamera/
chmod +x hand_gesture
```

#### パラメータの説明

| パラメータ | 説明 | デフォルト |
|------|------|--------|
| `palm_model` | パーム検出モデル（必須） | - |
| `landmark_model` | ランドマーク検出モデル（必須） | - |
| `embedder_model` | ジェスチャー埋め込みモデル（必須） | - |
| `classifier_model` | ジェスチャー分類モデル（必須） | - |
| `min_score` | パーム検出のしきい値 | `0.5` |
| `udp_ip` | PC の IP アドレス（UDP ストリーミングを有効化） | - |
| `udp_port` | UDP ポート番号 | - |
| `jpeg_w` | JPEG ストリーミングフレーム幅 | `320` |
| `jpeg_h` | JPEG ストリーミングフレーム高さ | `240` |
| `jpeg_fps` | JPEG ストリーミングフレームレート | `10` |
| `skip_multi` | 複数の手（2 本以上）の場合、N フレームごとに 1 回推論を実行 | `3` |
| `skip_single` | 手が 1 本の場合、毎フレーム推論を実行 | `1` |

#### コマンド例

**基本的な使い方（UDP ストリーミングなし、ローカル推論のみ）**：

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel
```

**フル機能の使い方（UDP ストリーミング + カスタムパラメータ）**：

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel \
    0.5 \
    192.168.XX.XX 5001 \
    320 240 10 \
    3 1
```

:::note
1. `192.168.XX.XX` は、reCamera と同じネットワーク上にある PC の実際の IP アドレスに置き換えてください。`udp_ip` と `udp_port` の両方が指定された場合にのみ UDP ストリーミングが有効になります。
2. プログラムが「"[Heartbeat] Before the first retrieveFrame(RGB888) call..."」と表示したまま停止する場合は、reCamera を再起動してください。
:::

### ステップ 5: PC 上で Python 受信プログラムを実行する

PC 上で、必要な Python ライブラリがインストールされていることを確認します：

```bash
pip install opencv-python numpy
```

ソリューションディレクトリに入り、レシーバースクリプトを実行します：

```bash
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
python3 tools/udp_receiver.py 5001
```

PC にはリアルタイムのビデオウィンドウが表示され、次の内容が含まれます：

- **JPEG ビデオストリーム**
- **手のひら検出ボックス**（青い長方形）
- **21 個のハンドランドマーク**（赤い点＋接続されたスケルトン）
- **ジェスチャー分類ラベル**（左上に表示されるジェスチャー名と信頼度）
- **利き手（左手／右手）情報**

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.png" />
</div>
<p align="center">PC 側でのリアルタイムジェスチャー認識結果</p>

## 期待される出力

### reCamera ターミナル上

プログラムが実行されると、推論パフォーマンスのログが表示されます：

```log

[Perf] FPS=5.88 (inference=2.94) | palm=120.7ms | landmark=169.1ms | gesture=0.6ms | total=290.4ms | avg_hands=1.00
[Gesture] Open_Palm (70%) [R] palm=(0.43,0.34,0.69,0.69) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=80.7
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=82.0
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.9
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[Perf] FPS=5.93 (inference=2.97) | palm=120.6ms | landmark=177.2ms | gesture=0.6ms | total=298.4ms | avg_hands=1.00
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.8
```

> **Note**: 手のひらモデルは 192×192 の入力を必要としますが、これは VPSS の最小スケーリング解像度を下回っています。そのため、CH0 では 640×480（VPSS がサポート）を使用し、モデル内部でソフトウェアのレターボックス処理により 192×192 にスケーリングします。

### カメラアクセスエラー

"No camera" や "Camera device not found" エラーが表示される場合：

- Node-RED サービスが停止していることを確認します（ステップ 3 を参照）
- カメラ接続を確認します

### UDP 接続失敗

PC がデータを受信しない場合：

- PC と reCamera が同じネットワーク上にあることを確認します
- PC のファイアウォール設定を確認します
- UDP ポートがブロックされていないことを確認します
- `ping` を使用してデバイス間の接続性をテストします

### ジェスチャー認識の信頼度が異常

認識されたジェスチャーの信頼度が明らかにおかしい場合：

- 分類器モデルの後にある **C++ softmax パッチ** が正しく実装されていることを確認します
- Softmax を含む ONNX 出力を、cvimodel 出力（logits）の代わりに誤って使用していないか確認します

## C++ コード構造

```
hand_gesture/
├── main/
│   ├── main.cpp                  # Entry: get frame → mmap → inference → UDP push
│   ├── hand_detector.{h,cpp}     # Model 1: palm detection (SSD post-processing + NMS)
│   ├── hand_landmarker.{h,cpp}   # Model 2: 21 landmarks (ROI warpAffine)
│   ├── gesture_recognizer.{h,cpp}# Model 3+4: embedder + classifier (with softmax patch)
│   ├── gesture_math.{h,cpp}      # letterbox / math utilities
│   ├── engine_utils.h            # tensor packing helpers
│   └── hand_types.h              # data structures + UDP POD protocol
├── tools/udp_receiver.py         # Python host receiver
└── CMakeLists.txt
```

## 技術サポート＆製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>