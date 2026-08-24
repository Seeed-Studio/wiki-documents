---
description: Jetson 上で 4 台のカメラによる魚眼サラウンドビュー デモを構築します。シャーシ位置決めのためにリアルタイム BEV をスティッチし、YOLO でロボットアームの把持を支援し、VLM でシーン理解を補助します。
title: Jetson 上で 4 カメラ魚眼サラウンドビュー デモを構築する
keywords:
  - Jetson
  - コンピュータビジョン
  - サラウンドビュー
  - 魚眼
  - BEV
  - 鳥瞰図
  - YOLO
  - VLM
  - ロボットアーム
  - reComputer
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562
last_update:
  date: 08/19/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/ja/jetson_fisheye_surround_view_demo/
---

## はじめに

このプロジェクトでは、NVIDIA Jetson 上で動作する **4 カメラ魚眼サラウンドビュー システム**を紹介します。シャーシの周囲に配置した 4 台の魚眼カメラをキャリブレーションし、歪み補正してスティッチし、リアルタイムの **鳥瞰図 (BEV)** を生成します。

この BEV は、共有の認識レイヤとして利用されます：

- **占有解析** により、**シャーシ移動** のための近傍の空き領域と障害物のヒントを提供
- **YOLO-World** がターゲットを検出・位置特定し、**ロボットアームの把持を支援**
- **VLM** が短い英語キャプションを生成し、**シーン理解を支援**

このデモは、**ロボットアームの把持支援** と **シャーシ移動の位置決めサポート** を目的としています。

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div>

このデモでは、4 台のカメラは **前・後・左・右** を向いています。キャリブレーションと GPU スティッチングの後、俯瞰 BEV は次のレイアウトになります：

- **画像の上側** = 車両の前方
- **画像の中央** = 車両本体
- 近傍の障害物と走行可能な方向がシャーシの周囲に表示される
- ボトル、箱、椅子などのターゲットは、把持支援のために車両座標系で位置特定できる
- VLM は、シーン理解のために現在のビューを短い英語で要約できる

## 各モジュールの役割

| モジュール | 何をするか | 何のためか |
| --- | --- | --- |
| サラウンドスティッチング | 4 台の魚眼カメラからリアルタイムの俯瞰 BEV を生成 | シャーシ周囲の共有サラウンドビュー |
| 占有解析 | 地面平面上の近傍の空き領域と障害物を推定 | シャーシの移動と位置決めを支援 |
| YOLO-World | オープンボキャブラリのターゲットを検出し、車両座標系で 2D 位置を報告 | ロボットアームの把持を支援 |
| VLM キャプション | 現在の BEV の短い英語説明を生成 | オペレータやエージェントのシーン理解を支援 |

:::note
YOLO は **ターゲットがどこにあるか** のためのものです。VLM は **シーンがどのように見えるか** のためのものです。占有は LiDAR マップではなく 2D の地面ヒントであり、VLM キャプションは座標の情報源ではありません。
:::

## 主な特長

- リアルタイムの **4 カメラ魚眼サラウンドスティッチング**
- CUDA OpenCV による **GPU リマップ、ワープ、ブレンディング**
- 内部パラメータ・外部パラメータ・シーム用の **Web ベース キャリブレーション**
- シャーシ移動支援のための **占有グリッド**
- 把持支援のための **YOLO-World オープンボキャブラリ検出**
- シーン理解のための **VLM シーンキャプション**
- **Jetson Thor** および **AGX Orin / 一般的な Jetson** ワークフローをサポート

## このデモについて

このデモは、4 本の魚眼ストリームを 1 枚の BEV 画像に変換し、その共有ビュー上で認識処理を実行します。

単一カメラのパイプラインと比べて、サラウンドビュー ワークフローは次の利点を提供します：

- シャーシ周囲の **360 度の地面認識**
- ナビゲーションや把持支援に使いやすい **俯瞰可視化**
- 占有、ターゲット位置特定、シーンキャプションのための **1 つの共有 BEV**
- 実機で繰り返し実行できる **キャリブレーションフロー**

パイプラインは次のとおりです：

1. 4 台の魚眼カメラから画像を取得
2. 魚眼の内部パラメータ キャリブレーションを実行
3. 外部パラメータの整合とホモグラフィを推定
4. 各カメラ画像を歪み補正し、地面平面 BEV 上にワープ
5. 4 つのビューを 1 枚のサラウンド画像にブレンド
6. スティッチされた BEV 上で、占有、YOLO 把持支援、VLM シーン理解を実行

## 前提条件

### ハードウェア

- **Seeed reComputer Thor J601** または **Jetson AGX Orin** などの Jetson デバイス
- **4 台の USB 魚眼カメラ**
- ディスプレイまたはリモートデスクトップセッション
- 別のコンピュータからキャリブレーションページを開く場合はネットワークアクセス

オプション：

- 占有を移動支援に使いたい場合のモバイルシャーシ
- YOLO のターゲット位置を把持支援に使いたい場合のロボットアーム

### ソフトウェア

- 対象 Jetson ボードでサポートされている JetPack
- リアルタイムスティッチング用の CUDA 対応 OpenCV
- Web キャリブレーション UI 用の Python 環境
- YOLO-World とオプションの VLM モデル依存関係

## インストールとセットアップ

### ステップ 1. リポジトリをクローンする

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### ステップ 2. CUDA OpenCV をビルドする

ライブのサラウンドビュー デモを実行する前に、CUDA 対応 OpenCV が利用可能であることを確認してください。

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

セットアップが正しければ、CUDA デバイス数は `1` になるはずです。

### ステップ 3. Web キャリブレーション依存関係をインストールする

キャリブレーション Web UI は `aiortc` と関連する Python パッケージに依存します。

```bash
./scripts/install_web_deps.sh
```

:::tip
Ubuntu 24.04 では、システム Python に対して単純に `pip3 install -r requirements.txt` を実行しないでください。このプロジェクトでは、スティッチング環境と認識モデル環境を分離しています。
:::

### ステップ 4. 認識用依存関係をインストールする

YOLO-World の把持支援と VLM シーン理解を有効にするには、次を実行します：

```bash
./scripts/setup_perception_thor.sh
./scripts/download_perception_models.sh
```

これにより認識用環境が準備され、必要なモデルファイルがダウンロードされます。

## 使い方

最初に 4 台のカメラをキャリブレーションし、その後でライブ サラウンドビュー デモを起動します。両方を同時に実行しないでください。カメラへの排他的アクセスが必要です。

### ステップ 1. カメラマッピングを確認する

カメラデバイスのマッピングは次で定義されています：

```bash
config/camera_profile.json
```

リポジトリ内の典型的なマッピング：

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

キャリブレーション前に、これらのデバイスノードを確認してください。デモ実行後は、**front** カメラを手で覆うことで再確認できます：BEV 画像の **上側** が暗くなるはずです。前後が入れ替わっている場合は、キャリブレーション結果ファイルではなく、コンフィグファイル内のデバイスマッピングを変更してください。

### ステップ 2. キャリブレーション Web UI を開く

キャリブレーションサービスを起動します：

```bash
./calib.sh
```

次に、ブラウザでキャリブレーションページを開きます：

```text
http://<board-ip>:8787/
```

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_02.png" />
</div>

キャリブレーション UI は次の用途に使用します：

- 内部パラメータ キャリブレーション
- 外部パラメータ整合
- シームの調整

シーム調整では、リポジトリのペアリングに従います：

- `front + left`
- `front + right`
- `back + left`
- `back + right`

チェッカーボードを 2 台のカメラビューの重なり部分に配置します。両方のビューがボードを検出し、ready ステータスを表示したら、そのシームを調整できます。

### ステップ 3. デモを実行する

キャリブレーションが完了したら、サラウンドビュー デモを起動します：

```bash
./run.sh
```

これにより、スティッチング、占有、YOLO 把持支援、オプションの VLM シーンキャプションを含むライブ BEV パイプラインが起動します。

認識ランチャーを直接起動することもできます：

```bash
./scripts/run_perception.sh --vlm off --mode nav --range 2.5
./scripts/run_perception.sh --mode grasp --target bottle
```

### よく使うモード

| 目的 | コマンド |
| --- | --- |
| シャーシ移動支援 | `./scripts/run_perception.sh --vlm off --mode nav --range 2.5` |
| ロボットアーム把持支援 | `./scripts/run_perception.sh --mode grasp --target bottle` |
| ヘッドレス実行 | `./scripts/run_perception.sh --no-window` |
| オフラインスモークテスト | `/usr/bin/python3 -m perception.smoke_offline` |

- `--mode nav` はシャーシ周囲の占有にフォーカスします
- `--mode grasp --target bottle` は YOLO に把持ターゲットを探すよう指示します
- `--vlm off` は、位置決めや検出だけが必要な場合にシーンキャプションをスキップします

## デモ結果と操作

デモウィンドウ実行中は、次のキーボードショートカットが利用できます：

| キー | アクション |
| --- | --- |
| `ESC` または `q` | 終了 |
| `o` | 把持支援のために YOLO-World を 1 回実行 |
| `a` | シーン理解のために VLM キャプションを 1 回トリガー |
| `s` | フレームを保存 |
| `m` | 占有マップの表示切り替え |

実行中、デモは次のファイルも書き出すことがあります：

- `output/perception/preview.jpg`
- `events.jsonl`

これらのファイルは、デバッグ、検証、後段の統合に役立ちます。

## 座標系の取り決め

このプロジェクトでは、次の BEV の取り決めを使用します：

| 項目 | 意味 |
| --- | --- |
| 画像の上方向 | 車両前方 |
| `base_link` 原点 | おおよそ BEV の中心 |
| `+X` | 前方 |
| `+Y` | 左方向 |

したがって YOLO は、方向、前方距離、横方向オフセットなど、おおよその 2D ターゲット位置を報告でき、把持を支援します。

結果はあくまで **地面平面の近似** です。6 自由度の把持姿勢ではなく、精密なマニピュレーションのグラウンドトゥルースとして扱うべきではありません。

## 注意事項と制限

- このデモは **認識支援** を提供します。シャーシやアームに制御コマンドを送信することは **ありません**
- **YOLO** はターゲットを位置特定して把持を支援しますが、それ自体で把持ループを閉じることはありません
- **VLM** の出力は **シーン理解** のためのものであり、座標のためのものではありません
- 占有は **2D の地面ヒント** であり、LiDAR SLAM マップではありません
- リアルタイムスティッチングは **CUDA 対応 Jetson システム** を想定しています
- CPU のみのモードはデバッグには有用ですが、ライブ運用には推奨されません

## リソース

- [Getting Started with reComputer Robotics J601](https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
