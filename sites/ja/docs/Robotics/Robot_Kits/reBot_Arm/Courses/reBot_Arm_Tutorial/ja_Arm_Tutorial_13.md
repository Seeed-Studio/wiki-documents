---
description: "Seeed Physical AI Beginner's Course 第13章 — カメラ設定と LeRobot データ収集：単眼／二眼カメラ構成、カメラデバイス名の確認、画像とアクションの同期、データセット作成、録画と再録画、可視化、データの追加・削除。"
title: 第13章 - カメラ設定と LeRobot データ収集
keywords:
  - reBot
  - LeRobot
  - Camera
  - Data Collection
  - Dataset
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_13
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第13章 · 実践</span>
    <h2>13. カメラ設定と LeRobot データ収集</h2>
    <p>
      Seeed Physical AI Beginner's Course 第13章 — 単眼／二眼カメラ構成、
      カメラデバイス名の確認、画像とアクションの同期、データセット作成、録画と
      再録画、可視化、データの追加・削除について説明します。
    </p>
    <div className="hero-actions">
      <a href="#カメラ-セットアップ">Cameras</a>
      <a href="#同期">Sync</a>
      <a href="#データセット作成">Dataset</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>13.1 単眼カメラ vs. 二眼カメラ構成</span>
    <span>13.2 俯瞰カメラと手首カメラ</span>
    <span>13.3 カメラデバイス名の確認</span>
    <span>13.4 画像とアクションの同期</span>
    <span>13.5 LeRobot データセットの作成</span>
    <span>13.6 エピソードの録画、一時停止、再録画</span>
    <span>13.7 データセットの可視化と再生</span>
    <span>13.8 データの追加と削除</span>
  </div>
</section>

<RebotCourseNav />

## 13.1 単眼カメラ vs. 二眼カメラ構成

<section id="カメラ-セットアップ" className="section-card">
  <div className="section-title">
    <span>セットアップ</span>
    <h2>13.1 単眼カメラ vs. 二眼カメラ構成</h2>
  </div>

- **単眼カメラ構成：** 俯瞰カメラのみ接続します。最初のパイプライン実行や環境確認に適しています — カメラが 1 台少ないということは、デバッグ時の変数が 1 つ減るということです。
- **二眼カメラ構成**（本コースのメインパス、正式な収集用）：俯瞰 + 手首。ACT モデルもデフォルトで 2 本の入力ストリームを想定しています。俯瞰 + 側面ビューを選択することもできます。

3 台または 4 台のカメラも学習と収集に使用できます。ACT 自体にはカメラ台数のハードな上限はありません。各画像ストリームは共有の ResNet18 バックボーンを通って特徴トークン列を生成し、それらを連結して Transformer エンコーダに入力します。元の ACT 論文（ALOHA デュアルアーム）では 4 台のカメラ（俯瞰 2 台 + 手首 2 台）が使用されています。

- **コスト：** カメラを 1 台追加するごとに、VRAM と計算量はほぼ線形に増加し、データ要求も増えます（視点が増えるほど学習すべきことが増える）。各ストリームは同期と固定された位置関係を維持する必要があります。

</section>

## 13.2 俯瞰カメラと手首カメラ

<section id="camera-roles" className="section-card">
  <div className="section-title">
    <span>カメラ</span>
    <h2>13.2 俯瞰カメラと手首カメラ</h2>
  </div>

- **俯瞰カメラ（前方）：** 作業空間全体を見下ろすようにマウントに固定します。モデルに「ターゲットがどこにあり、アーム全体の状態がどうなっているか」を伝えます。
- **手首カメラ（手首）：** アーム先端に取り付けられ、グリッパーに追従します。モデルに「グリッパーとターゲットの相対位置、および閉じるべきかどうか」を伝えます。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-01.png" alt="俯瞰カメラと手首カメラ" />
</div>

</section>

## 13.3 カメラデバイス名の確認

<section id="camera-names" className="section-card">
  <div className="section-title">
    <span>デバイス</span>
    <h2>13.3 カメラデバイス名の確認</h2>
  </div>

カメラのインデックスを確認するには、まず次を実行します：

```bash
lerobot-find-cameras opencv
```

`Id: 0` のように表示されます。ここで 0 がカメラインデックスです。

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

各カメラの名前、ID、デフォルト解像度が一覧表示されます。ディレクトリ内の `~/rebot_lerobot/outputs/captured_images/` を開くと、各カメラで撮影された画像を確認でき、カメラの位置が正しく適切かどうかを検証できます。

また注意点として、ノート PC を使用している場合は内蔵カメラもスキャンされます。正しい俯瞰カメラと手首カメラのインデックスを見つけるには、USB を抜き差しして確認する必要があります。ノート PC の内蔵カメラは通常インデックス 0 です。

- **接続順序によってインデックスが変わります。** 今日は俯瞰カメラが 0 でも、明日挿し直すと変わるかもしれません。録画セッションの前に毎回 10 秒かけて `lerobot-find-cameras` を再実行し、確認してください。
- **USB カメラはドック経由ではなく、必ず PC 本体に直接接続してください。** パッシブハブでの帯域競合は、そのまま読めない画像やフレーム落ちとして現れます。理想的には、2 台のカメラを別々の USB コントローラに接続すべきです。

</section>

## 13.4 画像とアクションの同期

<section id="同期" className="section-card">
  <div className="section-title">
    <span>Sync</span>
    <h2>13.4 画像とアクションの同期</h2>
  </div>

### 単眼カメラ

**RS バージョン：**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**DM バージョン：**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

カメラがさらにある場合は、`--robot.cameras` パラメータを変更して追加できます。`index_or_path` の形式に注意してください。これは `python -m lerobot.find_cameras opencv` コマンドの出力におけるカメラ ID の末尾の数字によって決まります。

### 二眼カメラ

**RS バージョン：**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**DM バージョン：**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

これは、データ収集ボックス内部からの映像であることが分かります：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-02.png" alt="収集ボックス内部からのカメラ映像" />
</div>

推奨パラメータ：**640 × 480 @ 30 fps、`fourcc: "MJPG"`**。この 3 つのパラメータはいずれも重要です：

- **解像度 640×480：** 画質とリアルタイム性のバランスが取れています。解像度を 2 倍にすると USB 帯域とストレージの負荷は 4 倍になりますが、モデル入力側では結局リサイズされるため、得られるメリットは限定的です。
- **FPS 30：** 収集 FPS と一致させます。カメラの FPS がこれより低いと、録画時に古いフレームが繰り返し再利用されます。
- **`fourcc: "MJPG"`：** 送信前に画像を圧縮することで、USB 帯域の負荷を桁違いに削減します。もちろん `YUYV` 形式の画像を試すこともできますが、その場合は解像度と FPS が下がり、アームの動きがカクつきます。現在 `MJPG` 形式であれば、1920×1080 解像度のカメラ 3 台でも 30 FPS を維持できます。

</section>

## 13.5 LeRobot データセットの作成

<section id="データセット作成" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>13.5 LeRobot データセットの作成</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-03.png" alt="LeRobot データセットの作成" />
</div>

以下のコマンドを実行する前に、データを記録できるよう準備しておきます。録画フェーズに入るときに音声による合図があります。合図がない場合は、ターミナルのプロンプトを確認し、開始しているかどうかを確認してください。

**RS バージョン：**

```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

**DM バージョン：**

```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

データセット自体に関連するパラメータはいくつかあります：

| パラメータ | 意味 | 推奨設定 |
| :--- | :--- | :--- |
| `--dataset.repo_id` | データセット名（ローカルフォルダ名も兼ねる） | テスト用と本番用で名前を分ける。例：`rebot_b601/grab_cube_test` / `rebot_b601/grab_cube_v1` |
| `--dataset.single_task` | タスクの説明（データセット内に保存される） | 英語で、タスクの説明と一致させる |
| `--dataset.num_episodes` | 記録する Episode の数 | テスト：5、本番：50（デフォルトは 50） |
| `--dataset.push_to_hub` | 記録後に Hub にアップロードするかどうか | `false` = アップロードしない |
| `--dataset.episode_time_s=30` | 1 Episode あたりの記録時間 | タスクの複雑さに応じて調整 |
| `--dataset.reset_time_s=20` | 次の記録のためにシーンをリセットする時間 | シーンのリセット時間に応じて調整 |
| `--display_data=true` | カメラ映像をリアルタイム表示するか | - |

その後、データセットはホームディレクトリ配下の `~/.cache/huggingface/lerobot` に保存されます。上記のフォルダは `seeed_rebot_b601_rs/test` の下に作成されます。

</section>

## 13.6 Episode の記録、一時停止、再記録

<section id="recording" className="section-card">
  <div className="section-title">
    <span>Recording</span>
    <h2>13.6 Recording, Pausing, and Re-recording Episodes</h2>
  </div>

### 記録

記録中のキーボード操作：

| キー | 動作 |
| :--- | :--- |
| →（右矢印） | 現在の Episode を早期終了し、リセット／次へ進む |
| ←（左矢印） | 現在の Episode を破棄し、この Episode を再記録する |
| ESC | 収集セッション全体を終了：動画のエンコード、統計量の計算、データセットの保存を行う |

:::warning
キーが反応しない場合は `pynput` のバージョンの問題です。`pip install pynput==1.6.8` でダウングレードしてください。
:::

### 再記録

5 Episode を記録して再生を確認したら、本番収集では：`repo_id` を本番用の名前に変更し、`num_episodes=50` を本番用の値に変更し、第 12 章の鉛筆五点法に従って収集します — 1 点につき 1 Episode、1 周あたり 5 点、合計 10 周です。

### 記録の一時停止

:::danger
記録を一時停止するのに Ctrl+C を押さないでください — <kbd>Esc</kbd> を押してください。そうしないと異常終了します。
:::

</section>

## 13.7 データセットの可視化と再生

<section id="viz-replay" className="section-card">
  <div className="section-title">
    <span>Playback</span>
    <h2>13.7 Visualizing and Playing Back a Dataset</h2>
  </div>

### データセットの可視化

データをアップロードした場合、ローカルでも次のコマンドで可視化できます：

```bash
echo ${HF_USER}/rebot_test
```

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

`--dataset.push_to_hub=false` を使用してデータをアップロードしていない場合でも、次のようにローカルで可視化できます：

**RS バージョン：**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

**DM バージョン：**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

ここで、`seeed_rebot_b601_rs/test` は収集時に使用したカスタムデータセット名（`repo_id`）です。

### データセットの再生

次に、ロボット上で最初のデータセットを再生してみましょう。`--dataset.episode=0` は最初に収集したデータセットを再生することを意味し、以降同様です。

**RS バージョン：**

```bash
lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0
```

**DM バージョン：**

```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

これで、ロボットはテレオペレーション中に記録したのと同じ動作を実行するはずです。

</section>

## 13.8 データの追加と削除

<section id="edit-dataset" className="section-card">
  <div className="section-title">
    <span>Editing</span>
    <h2>13.8 Supplementing and Deleting Data</h2>
  </div>

- 記録中にチェックポイントが自動的に作成されます。
- 元のコマンドに `--resume=true` を追加して、データの追加記録を続行します。
- 追加記録を行う場合、`--dataset.num_episodes` にはデータセットの目標総数ではなく、「追加で記録する Episode 数」を設定します。
- 最初からやり直したい場合は、データセットディレクトリを**手動で削除**してください。

次のコマンドを使用して Episode を削除します：`--operation.episode_indices "[0]"` は最初の Episode を削除し、以降同様です。削除には時間がかかるので待機し、データセット名も適宜変更してください。

```bash
lerobot-edit-dataset \
  --repo_id rebot_b601/grab_cube_v1 \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

</section>

</div>
