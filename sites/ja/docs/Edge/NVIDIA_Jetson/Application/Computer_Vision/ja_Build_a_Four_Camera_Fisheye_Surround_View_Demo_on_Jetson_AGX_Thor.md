---
description: Jetson AGX Thor 上で 4 台の魚眼カメラによるサラウンドビュー デモを構築します。シャーシ位置決めのためにリアルタイム BEV をスティッチし、YOLO でロボットアームの把持を支援し、VLM でシーン理解を行います。
title: Jetson AGX Thor 上で 4 台の魚眼カメラによるサラウンドビュー デモを構築する
keywords:
  - Jetson AGX Thor
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
  - Sensing
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562, 101090101
last_update:
  date: 08/24/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/jetson_fisheye_surround_view_demo/
---

## はじめに

このデモは、**NVIDIA Jetson AGX Thor** 上で **4 台の魚眼カメラによるサラウンドビュー** パイプラインを実行します。シャーシの周囲に配置した 4 台のカメラをキャリブレーションし、リアルタイムの **鳥瞰図 (BEV)** にスティッチします。オキュパンシーはシャーシの動きを示し、YOLO-World は把持ターゲットを位置特定し、VLM はシーンにキャプションを付けます。

{/* <div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div> */}

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/o0NTeeLV4Vk" title="Four-Camera Fisheye Surround View Demo on Jetson AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

スティッチ後の BEV レイアウトは次のとおりです：

- **画像の上側** = 車両の前方
- **画像の中央** = 車両本体
- カメラは **前・後・左・右** を向きます

:::note
YOLO は **ターゲットがどこにあるか** に答えます。VLM は **シーンがどのように見えるか** に答えます。オキュパンシーは 2D の地面ヒントであり、LiDAR マップではありません。
:::

このデモは **reComputer Robotics J601** 上で検証されています。

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Robotics J601 </th>
        <th> Sensing SG3S-ISX031C-GMSL2F </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090101-3mp-gmsl2-camera-module-190-degree.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## 主な特長

- CUDA OpenCV による GPU スティッチング
- 内部パラメータ・外部パラメータ・シーム用の Web キャリブレーション
- 1 つの共有 BEV 上でのオキュパンシー、YOLO-World、VLM
- **Jetson AGX Thor** / **reComputer Robotics J601** で検証済み

## 前提条件

### ハードウェア

- **reComputer Robotics J601** (Jetson AGX Thor)
- **4 台の [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html) GMSL2 魚眼カメラ**
- **4 台のカメラを 1 つの GMSL ポートで共有するための [Mini-Fakra 4-in-1 ケーブル](https://www.seeedstudio.com/Mini-fakra-Coaxial-Cable-4-in-1-0-5m-Female-to-Female-p-6484.html)** 1 本
- ディスプレイ、またはリモートデスクトップセッション
- 別のコンピュータからキャリブレーションページを開く場合のネットワークアクセス

オプション：

- オキュパンシーを移動支援に使いたい場合のモバイルシャーシ
- YOLO のターゲット位置を把持支援に使いたい場合のロボットアーム

### ソフトウェア

- J601 用の GMSL ドライバ対応 JetPack
- リアルタイムスティッチング用の CUDA 対応 OpenCV
- Web キャリブレーション UI 用の Python 環境
- YOLO-World およびオプションの VLM モデル依存関係

## ハードウェア接続

キャリブレーションの前に、4 台の Sensing GMSL2 魚眼カメラを **reComputer Robotics J601** 上の **1 つの Mini-Fakra GMSL ポート** に接続します。J601 には 2 つの Mini-Fakra コネクタがあり（最大 8 台の GMSL2 カメラ）、このデモでは **1 つの GMSL ポート** と 4-in-1 Mini-Fakra ケーブルを使用します。

1. XT30 DC 入力から J601 ボードに電源を供給します。
2. GMSL 拡張ボードを使用する場合は、まずカメラ拡張ヘッダに装着します。
3. Mini-Fakra 4-in-1 ケーブルを **1 つの Mini-Fakra GMSL ポート** に接続します。
4. 4 台の Sensing 魚眼カメラを、そのケーブルの 4 つの Fakra 端子に接続します。
5. カメラをシャーシの周囲に取り付け、**前・後・左・右** を向くようにします。
6. ボード上でライブ BEV ウィンドウを見たい場合は、必要に応じて HDMI ディスプレイを接続します。

J601 上での GMSL 立ち上げについては、[Robotics J601 Hardware Interfaces Usage](https://wiki.seeedstudio.com/ja/recomputer_jetson_robotics_j601_interfaces_usage/) を参照してください。

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_03.png" />
</div>

:::tip
カメラを接続したら、`/dev/video*` ノードと `config/camera_profile.json` 内のマッピングを確認してください。[Step 1. Check Camera Mapping](#step-1-カメラマッピングを確認する) を参照してください。
:::

## インストールとセットアップ

### Step 1. リポジトリをクローンする

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### Step 2. CUDA OpenCV をビルドする

ライブサラウンドビュー デモを実行する前に、CUDA 対応 OpenCV が利用可能であることを確認してください。

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

セットアップが正しければ、CUDA デバイス数は `1` になるはずです。

### Step 3. Web キャリブレーション依存関係をインストールする

キャリブレーション Web UI は、`aiortc` と関連する Python パッケージに依存します。

```bash
./scripts/install_web_deps.sh
```

:::tip
Ubuntu 24.04 では、システム Python に対して単純に `pip3 install -r requirements.txt` を実行しないでください。このプロジェクトでは、スティッチング環境と認識モデル環境を分離しています。
:::

### Step 4. 認識用依存関係をインストールする

YOLO-World による把持支援と VLM によるシーン理解を有効にするには、次を実行します：

```bash
./scripts/setup_perception_thor.sh
./scripts/download_perception_models.sh
```

これにより認識用環境が準備され、必要なモデルファイルがダウンロードされます。

## 使い方

最初に 4 台のカメラをキャリブレーションし、その後でライブサラウンドビュー デモを起動します。両方を同時に実行しないでください。カメラへの排他的アクセスが必要です。

### Step 1. カメラマッピングを確認する

カメラデバイスのマッピングは次で定義されています：

```bash
config/camera_profile.json
```

リポジトリ内の典型的なマッピング：

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

キャリブレーション前に、これらのデバイスノードを確認してください。デモ実行中は、**front** カメラを覆うことで再確認できます：BEV 画像の **上側** が暗くなるはずです。前後が入れ替わっている場合は、キャリブレーション結果ファイルではなく、設定ファイル内のデバイスマッピングを変更してください。

### Step 2. キャリブレーション Web UI を開く

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

- 内部パラメータのキャリブレーション
- 外部パラメータの調整
- シームのリファイン

シームのリファインでは、リポジトリのペアリングに従います：

- `front + left`
- `front + right`
- `back + left`
- `back + right`

チェッカーボードを 2 台のカメラビューの重なり部分に配置します。両方のビューがボードを検出し、準備完了ステータスを示したら、そのシームをリファインできます。

### Step 3. デモを実行する

キャリブレーションが完了したら、サラウンドビュー デモを起動します：

```bash
./run.sh
```

これにより、スティッチング、オキュパンシー、YOLO による把持支援、およびオプションの VLM シーンキャプションを含むライブ BEV パイプラインが起動します。

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

- `--mode nav` はシャーシ周囲のオキュパンシーに重点を置きます
- `--mode grasp --target bottle` は YOLO に把持ターゲットの検出を指示します
- `--vlm off` は、位置決めや検出だけが必要な場合にシーンキャプションをスキップします

## デモ結果と操作

デモウィンドウ実行中は、次のキーボードショートカットが利用できます：

| キー | 動作 |
| --- | --- |
| `ESC` または `q` | 終了 |
| `o` | 把持支援のために YOLO-World を 1 回実行 |
| `a` | シーン理解のために VLM キャプションを 1 回トリガー |
| `s` | フレームを保存 |
| `m` | オキュパンシーマップの表示切り替え |

実行中、デモは次のファイルも書き出すことがあります：

- `output/perception/preview.jpg`
- `events.jsonl`

これらのファイルは、デバッグ、検証、および後の統合に役立ちます。

## 座標系の取り決め

このプロジェクトでは、次の BEV の取り決めを使用します：

| 項目 | 意味 |
| --- | --- |
| 画像上方向 | 車両前方 |
| `base_link` 原点 | おおよそ BEV の中心 |
| `+X` | 前方 |
| `+Y` | 左方向 |

したがって YOLO は、方向、前方距離、横方向オフセットなど、おおよその 2D ターゲット位置を報告でき、把持を支援します。

結果はあくまで **地面平面の近似** です。6 自由度の把持姿勢ではなく、精密なマニピュレーションのグラウンドトゥルースとして扱うべきではありません。

## 注意事項と制限

- このデモは **認識支援** を提供するものであり、シャーシやアームに制御コマンドを送信することは **ありません**
- **YOLO** は把持支援のためにターゲットを位置特定しますが、それ自体で把持ループを閉じることはありません
- **VLM** の出力は **シーン理解** 用であり、座標用ではありません
- オキュパンシーは **2D の地面ヒント** であり、LiDAR SLAM マップではありません
- リアルタイムスティッチングは **CUDA 対応 Jetson AGX Thor** を想定しています
- CPU のみのモードはデバッグには有用ですが、ライブ運用には推奨されません

## リソース

- [デモ動画](https://www.youtube.com/watch?v=o0NTeeLV4Vk)
- [reComputer Robotics J601 入門ガイド](https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [Robotics J601 ハードウェアインターフェースの使用方法](https://wiki.seeedstudio.com/ja/recomputer_jetson_robotics_j601_interfaces_usage/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
