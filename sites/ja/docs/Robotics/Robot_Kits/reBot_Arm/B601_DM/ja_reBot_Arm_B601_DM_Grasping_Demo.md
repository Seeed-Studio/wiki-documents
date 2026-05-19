---
description: このチュートリアルでは、Orbbec Gemini 2 と YOLO/OBB 把持パイプラインを使用して、reBot Arm B601-DM 向けの完全なビジュアル把持デモを構築する方法を説明します。
title: reBot Arm B601-DM ビジュアル把持デモ
keywords:
  - reBot Arm
  - B601-DM
  - 把持
  - Gemini 2
  - YOLO
  - ハンドアイキャリブレーション
  - ロボット
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-05-18
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/
---

# reBot Arm B601-DM ビジュアル把持デモ

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-Orbbec%20Gemini%202-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>奥行き認識 · 物体検出 · ハンドアイキャリブレーション · 自律把持 · 完全オープンソース</strong>
</p>

YOLO は広く使われているリアルタイム物体検出モデルのファミリーで、1 回のフォワードパスでターゲットの位置特定と分類を行うことができます。本チュートリアルでは、YOLO と Orbbec Gemini 2 深度カメラを組み合わせて、reBot Arm B601-DM 向けのデスクトップ用ビジュアル把持デモを構築します。環境構築、カメラ統合、ハンドアイキャリブレーション、把持検証までをカバーします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## プロジェクトの特長

1. **YOLO + OBB からの直接把持姿勢推定**  
   このパイプラインでは、検出ボックスまたは OBB の最小外接矩形を直接使用し、短軸をグリッパの開閉方向として扱うことで、複雑な 3D 点群処理を回避します。

2. **軽量ロボットアームとグリッパの統合**  
   メインの把持スクリプトは `RebotArm` インターフェースを再利用し、IK、軌道制御、グリッパのステートマシンを統合しています。

3. **オープンソースで拡張可能**  
   すべてのソースコードは公開されており、ユーザーは自分のニーズに応じて制御アルゴリズムや動作をカスタマイズできます。

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>仕様</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ロボットアームモデル</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + グリッパ</td>
    </tr>
    <tr>
      <td>カメラモデル</td>
      <td>Orbbec Gemini 2</td>
    </tr>
    <tr>
      <td>検出方式</td>
      <td>YOLO + OBB 最小外接矩形</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>USB2CAN アダプタ経由の CAN バス；USB 3.0 カメラ接続</td>
    </tr>
    <tr>
      <td>動作電圧</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>ホストプラットフォーム</td>
      <td>Ubuntu 22.04+ PC</td>
    </tr>
    <tr>
      <td>推奨 Python バージョン</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

## 部品表 (BOM)

| コンポーネント | 数量 | 同梱 |
|--|--|--|
| reBot Arm B601-DM ロボットアーム | 1 | ✅ |
| グリッパ | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ (24V) | 1 | ✅ |
| USB-C / 通信用ケーブル | 1 | ✅ |
| Orbbec Gemini 2 深度カメラ | 1 | ✅ |
| Gemini 2 カメラコネクタ / 取付ブラケット | 1 | ✅ |

### 配線

1. Gemini 2 を USB 3.0 でホストに接続します。
2. USB2CAN アダプタをアームの CAN バスに接続します。
3. 24V 電源、カメラ、ロボットアームがすべて確実に接続されていることを確認します。
4. パーミッションを設定します：

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

## 動作環境要件

| 項目 | 要件 |
|------|-------------|
| オペレーティングシステム | Ubuntu 22.04+ |
| Python | 3.10 |
| 推奨環境 | conda |
| 推奨作業フォルダ | `rebot_grasp` |
| 推奨 conda 環境名 | `rebotarm` |

## インストール手順

### ステップ 0. 先にロボットアームの基本準備を完了する

このチュートリアルを始める前に、[reBot Arm B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) の内容（ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定、基本的な接続確認）を完了してください。

### ステップ 1. リポジトリをクローンする

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### ステップ 2. conda 環境を作成・設定する

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

別の環境名を使いたい場合は、コマンド内の `rebotarm` を任意の名前に置き換えてください。

### ステップ 3. ロボットアーム SDK をインストールする

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

### ステップ 4. Orbbec Gemini 2 SDK をインストールする

このプロジェクトは `pyorbbecsdk` に依存しています。リポジトリにはデフォルトで `sdk/pyorbbecsdk` が同梱されていないため、`sdk/` 配下に公式リポジトリを自分でクローンするか、別の方法でインストールする必要があります。

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Gitee ミラーを使用することもできます：

```bash
cd sdk
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

初めて使用する場合は、udev ルールをインストールすることを推奨します：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### ステップ 5. 依存関係を確認する

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
python -c "import motorbridge; print('motorbridge OK')"
```

Orbbec カメラを初めて使用する場合は、インストールした `pyorbbecsdk` ディレクトリ内で `scripts/install_udev_rules.sh` を実行することを推奨します。そうしないと、カメラが正しくオープンできない場合があります。

## ハンドアイキャリブレーション

フルの把持パイプラインを実行する前に、まず Eye-in-Hand 方式のハンドアイキャリブレーションを完了してください。

```bash
python scripts/collect_handeye_eih.py
```

実行前に、`config/default.yaml` 内の次の ArUco サイズパラメータが、実際に印刷したマーカーと一致していることを確認してください：

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

自動モードでは、アームが 50 個のプリセット姿勢を走査し、ArUco マーカーが安定して検出されたタイミングでサンプルを記録します。途中で `c` や `q` で処理を中断した場合でも、スクリプトは収集済みサンプルからキャリブレーション結果の計算を試みます。

サンプリング中にロボットアームを手動で動かしたい場合は、マニュアルモードを使用します：

```bash
python scripts/collect_handeye_eih.py --manual
```

マニュアルモードでは、アームは重力補償モードに入ります。エンドエフェクタを適切な視野角に動かし、`Enter` を押してキャプチャし、`c` または `q` を押して終了し結果を計算します。

キャリブレーション結果は次の場所に保存されます：

```text
config/calibration/orbbec_gemini2/hand_eye.npz
```

推奨サンプル数：

- 最小：5 サンプル
- 推奨：少なくとも 15 サンプル

## 実行とデバッグ

### 1. 物体検出のみを確認する

```bash
python scripts/object_detection.py
```

検出モデルやクラスを変更する必要がある場合は、`config/default.yaml` を編集します：

```yaml
yolo:
  model_name: "yoloe-26l-seg.pt"
  device: "cpu"
  use_world: true
  custom_classes:
    - "yellow banana"
    - "water bottle"
    - "cup"
```

このステップでは、次の点を確認するのに役立ちます：

- カメラが正しくオープンできているか
- YOLO モデルが正しくロードされているか
- YOLO の物体検出が期待どおりに動作しているか

### 2. 把持推定のみを確認する

```bash
python scripts/ordinary_grasp_pipeline.py
```

把持推論の頻度やプレ把持時の退避距離を調整する必要がある場合は、次を編集します：

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.6
    pregrasp_offset_m: 0.080
```

このスクリプトはロボットアームには接続しません。次の点を確認するためだけに使用します：

- OBB または最小外接矩形が妥当かどうか
- 把持点がターゲットの中心付近にあるかどうか
- 短軸方向が期待するグリッパ開閉方向と一致しているかどうか

主な操作：

- 左クリック：選択したピクセルの深度を確認
- `G`: 現在の最良把持姿勢を出力
- `Q` / `Esc`: 終了

### 3. メインの把持プログラムを実行する

```bash
python scripts/main.py
```

ロボットアームを動かさずにターゲット姿勢だけを検証したい場合：

```bash
python scripts/main.py --dry-run
```

実際に把持を行う前に、まず `--dry-run` で姿勢と到達可能な作業空間を検証することを推奨します。

`reBotArm_control_py` がデフォルトの場所にない場合は、`config/default.yaml` で指定してください：

```yaml
robot:
  repo_root: null
```

通常は `null` のままで問題ありません。プログラムはまず `sdk/reBotArm_control_py` を自動検出しようとします。

メインプログラムの流れ：

1. ロボットアームとグリッパを初期化
2. レディ姿勢へ移動します。起動時のレディ姿勢を変更したい場合は、`config/default.yaml` を編集します：

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 1.0
    duration: 3.0
```

3. テーブルトップ上のターゲットをリアルタイムに検出
4. 短軸から把持姿勢を推定
5. `G` を押して現在のフレームをキャプチャし、把持を実行

実行時のキー操作：

- `G`: 現在の最良ターゲットを把持
- `R`: ライブプレビューを再開
- `Q` / `Esc`: 終了

## FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

これは通常、現在の Python 環境にロボットアーム SDK の依存関係がインストールされていないことを意味します。次を確認してください：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. `G` を押しても把持が実行されない

よくある原因：

- `hand_eye.npz` が存在しない
- ハンドアイキャリブレーションモードが `eye_in_hand` になっていない
- ターゲット姿勢が IK で到達可能ではない

次を実行することを推奨します：

```bash
python scripts/main.py --dry-run
```

### 3. 把持深度が安定しない

次の調整を試すことができます：

- `grasp_pipeline.grasp.depth_quantile`
- ワークスペースに対するカメラの設置高さ
- 対象表面の反射特性

## お問い合わせ

- 技術サポート: [Issue を送信](https://github.com/EclipseaHime017/reBot-DevArm-Grasp/issues)
- プロジェクトページ: [GitHub](https://github.com/EclipseaHime017/reBot-DevArm-Grasp)
- フォーラム: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM 向け Pinocchio と MeshCat 入門](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/)
- [LeRobot ベースの reBot Arm B601-DM と reBot 102 Leader 入門](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/)
- [Orbbec Gemini 2 製品ページ](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API ガイド](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk リポジトリ](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk ドキュメント](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
