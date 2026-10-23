---
description: "1 台または 2 台のカメラを設定し、デバイスを検出して、LeRobot データセットを記録し、データの可視化、再生、追加、削除を行います。"
title: "マルチビュー・データ収集"
hide_title: true
keywords:
  - ハンズオンデプロイ
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - ロボットアーム
  - フィジカル AI
  - コース
  - チュートリアル
  - SO101
  - SO-ARM101
  - Hugging Face
  - アーム
  - ロボティクス
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_camera_recording
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/robotics/hands_on_camera_recording/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-camera_recording-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · HANDS-ON DEPLOYMENT</span>
  <h1 id="hands-on-camera_recording-title">マルチビュー・データ収集</h1>
  <p className="paper-reading-lead">1 台または 2 台のカメラを設定し、デバイスを識別して、LeRobot デモンストレーションを記録し、データセットを可視化・再生し、エピソードを追加または削除します。</p>
  <ul className="paper-reading-badges" aria-label="このガイドで扱う内容">
    <li>カメラのセットアップ</li>
    <li>データ記録</li>
    <li>可視化と再生</li>
    <li>エピソードの追加と削除</li>
  </ul>
</section>

## 1 台カメラと 2 台カメラの構成

- **1 台カメラ**：オーバーヘッドカメラのみを使用します。トラブルシューティングの変数を 1 つ減らせるため、初期の環境チェックに有用です。

- **2 台カメラ**（本コースのメイン構成）：オーバーヘッド + リスト。ACT の設定でも、デフォルトでこれら 2 つの入力が使用されます。

    - オーバーヘッド + サイドビューという選択肢もあります。

3 台または 4 台のカメラでもデータ収集と学習が可能です。ACT 自体はカメラ台数を固定していません。各ビューは共有の ResNet18 バックボーンを通って特徴トークン列を生成し、その列を連結して Transformer エンコーダに入力します。元の ACT 論文の両腕 ALOHA 構成では、2 台のオーバーヘッドカメラと 2 台のリストカメラ、合計 4 台が使用されていました。

- **コスト**：GPU メモリと計算量はカメラ台数にほぼ線形に増加し、ビューが増えると必要なデータ量も増える可能性があります。すべてのビューを同期させ、マウント位置を固定してください。

---

## オーバーヘッドカメラとリストカメラ

- **オーバーヘッドカメラ（`front`）**：作業空間の上部に固定してマウントし、ターゲットの位置とアーム全体の構成をモデルに示します。

- **リストカメラ（`wrist`）**：エンドエフェクタ付近にマウントされ、グリッパとともに動き、ターゲットに対する位置関係と、いつ閉じるべきかを示します。

![カメラ構成とデータ記録：オーバーヘッドカメラとリストカメラ（図 1）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-01-camera-views-en.png)

---

## カメラデバイス ID を確認する

まず、次のコマンドを実行してカメラのインデックスを確認します：

```bash
lerobot-find-cameras opencv
```

出力には `Id: 0` のように表示されます。ここで `0` がカメラインデックスです。

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

このコマンドは、各カメラの名前、ID、デフォルト解像度を一覧表示します。取得された画像は `~/rebot_lerobot/outputs/captured_images/` に保存されます。カメラ位置とフレーミングを確認するためにチェックしてください。

ノート PC では、スキャンによって内蔵カメラも検出され、多くの場合インデックス 0 になります。外付けカメラを抜き差しして、正しいオーバーヘッドおよびリストカメラのインデックスを特定してください。

- **カメラを再接続するとインデックスが変わる可能性があります。** 今日 0 だったカメラが、次回は別のインデックスになることがあります。毎回記録セッションの前に `lerobot-find-cameras` を実行して確認してください。

- **USB カメラはコンピュータに直接接続してください。** ハブの使用は避けてください。電源なしハブで帯域が競合すると、画像欠落やフレーム落ちの原因になります。可能であれば、2 台のカメラを別々の USB コントローラに接続してください。

---

## 画像とアクションを同期させる

1. カメラ 1 台の場合：

**RS バージョン：**

```text
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

```text
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

**SO-ARM バージョン：**

```text
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

カメラを追加するには、`--robot.cameras` を編集します。`index_or_path` には、`python -m lerobot.find_cameras opencv` が出力したカメラ ID を設定します。

2. カメラ 2 台の場合：

**RS バージョン：**

```text
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

```text
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

**SO-ARM バージョン：**

```text
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

プレビューには、収集サンドボックス内のカメラビューが表示されます。

![カメラ構成とデータ記録：画像とアクションの同期（図 2）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-02-capture-preview.png)

推奨設定：**640 × 480、30 fps、`fourcc: "MJPG"`**。各設定には次のような目的があります：

- **640 × 480 の解像度**は、ディテールとリアルタイム性能のバランスが取れています。縦横を 2 倍にすると USB 帯域とストレージコストは 4 倍になりますが、モデル側で入力をリサイズするため、得られるメリットは限定的です。

- **30 fps**：収集レートに合わせます（論理タイムスタンプについては 12.3 節で説明します）。カメラのフレームレートがこれより遅いと、記録時に古いフレームが繰り返し再利用されます。

- **`fourcc: "MJPG"`** は転送前に画像を圧縮し、USB 帯域の使用量を大幅に削減します。`YUYV` を試すこともできますが、必要帯域が増えるため、解像度やフレームレートを下げざるを得なくなったり、スタッタリングの原因になったりします。ここで説明している構成では、`MJPG` を用いることで `1920*1080`、`30FPS` のカメラ 3 台をサポートできます。

---

## LeRobot データセットを作成する

![カメラ構成とデータ記録：LeRobot データセットの作成（図 3）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-03-dataset-recording-en.png)

次のコマンドを実行する前に、タスクのデモンストレーションを行えるよう準備しておいてください。録画開始時には音声プロンプトが鳴ります。音が使えない場合は、ターミナルを見て録画開始のタイミングを確認してください。

**RS バージョン：**

```text
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

```text
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

**SO-ARM バージョン：**

```text
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeed_soarm101/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20 
```

次のパラメータは、データセットと記録セッションを制御します：

| パラメータ | 意味 | 推奨設定 |
|---|---|---|
| `--dataset.repo_id` | データセット名およびローカルフォルダ名 | `rebot_b601/grab_cube_test` や `rebot_b601/grab_cube_v1` のように、テスト用と本番用で名前を分けてください。 |
| `--dataset.single_task` | データセットに保存されるタスクの説明 | 正確な説明を英語で記述してください。 |
| `--dataset.num_episodes` | 記録するエピソード数 | テストには 5、本番の収集には 50 を使用します。デフォルトは 50 です。 |
| `--dataset.push_to_hub` | 記録後にアップロードするかどうか | `false` の場合、データセットはローカルに保持されます。 |
| `--dataset.episode_time_s=30` | 1 エピソードあたりの記録時間 | タスクの複雑さに応じて調整します。 |
| `--dataset.reset_time_s=20` | エピソード間でシーンをリセットする時間 | 初期シーンを復元するのに十分な時間を確保してください。 |
| `--display_data=true` | カメラ映像をライブ表示 | |

データセットは `seeed_rebot_b601_rs/test` のような指定フォルダ内で、`~/.cache/huggingface/lerobot` 以下に保存されます。

---

## Hugging Face Hub へのアップロード（任意）

Hugging Face Hub 上でデータセットを管理するには、書き込み権限を持つトークンでログインします。[Hugging Face settings](https://huggingface.co/settings/tokens) でトークンを作成してください。

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

後続のコマンドで使うため、Hugging Face のユーザー名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

収集コマンドを次の 2 点を変更して再度実行します：`--dataset.repo_id=${HF_USER}/grab_cube_v1` と `--dataset.push_to_hub=true`。記録が完了すると、結果があなたの Hub リポジトリにアップロードされます。そのリポジトリ名を `lerobot-dataset-viz --repo-id` と一緒に指定して可視化します。

> **Tip:** アップロードは任意です。`push_to_hub=false` で記録したローカルデータセットは、第 16 章でそのまま学習に使用できます。アップロードは「データがどこに存在するか」を変えるだけで、「学習に使えるかどうか」は変わりません。

---

## エピソードの記録・停止・再記録

**記録**

収集中のキーボード操作：

| キー | 動作 |
|---|---|
| →（右矢印） | 現在のエピソードを早めに終了し、リセット／次のエピソードに進みます。 |
| ←（左矢印） | 現在のエピソードを破棄し、同じエピソードを録り直します。 |
| ESC | 収集セッションを終了し、動画をエンコードして統計量を計算し、データセットを保存します。 |

キーが反応しない場合は、`pynput` のバージョンが原因の可能性があります。`pip install pynput==1.6.8` でダウングレードしてください。

**再記録**

5 つのテストエピソードを記録し、リプレイが動作することを確認したら、本番の収集を開始します。`repo_id` を最終的なデータセット名に変更し、`num_episodes=50` に設定します。第 12 章の鉛筆マーク付きの 5 点法に従います：1 点につき 1 エピソード、1 周あたり 5 点、合計 10 周です。

**記録の停止**

記録を停止する際は Ctrl+C ではなく **Esc** を使用してください。Ctrl+C で割り込むと異常終了を引き起こす場合があります。

---

## データセットの可視化とリプレイ

**データセットの可視化**

データセットをアップロードした場合は、次のコマンドでローカルから可視化します：

```bash
echo ${HF_USER}/rebot_test  
```

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

`--dataset.push_to_hub=false` を使用した場合は、ローカルデータセットを次のように可視化します：

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

**SO-ARM バージョン：**

```bash
lerobot-dataset-viz \
  --repo-id seeed_soarm101/test \
  --episode-index 0 \
  --display-compressed-images=false
```

ここで、`seeed_rebot_b601_rs/test` は記録時に選択した `repo_id` です。

**データセットのリプレイ**

ここでは、ロボット上で最初のエピソードをリプレイします。`--dataset.episode=0` は最初に記録したエピソードを選択します。インデックスを増やすことで他のエピソードをリプレイできます。

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

**SO-ARM バージョン：**

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeed_soarm101/test \
    --dataset.episode=0
```

ロボットは、テレオペレーション中に記録された動きを再現するはずです。

---

## エピソードの追加と削除

- チェックポイントは記録中に自動的に作成されます。

- 追加のデータを記録し続けるには、元のコマンドに `--resume=true` を追加します。

- 再開する場合、`--dataset.num_episodes` には、望むデータセット全体のサイズではなく、**追加するエピソード数** を設定します。

- 最初からやり直すには、データセットディレクトリを**手動で削除**します。

次のコマンドを使用して、選択したエピソードを削除します。`--operation.episode_indices "[0]"` は最初のエピソードを削除します。必要に応じてインデックスを変更してください。データセット名を置き換え、処理が完了するまで待ちます。

**RS バージョン：**

```bash
lerobot-edit-dataset \
  --repo_id seeed_rebot_b601_rs/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

**DM バージョン：**

```bash
lerobot-edit-dataset \
  --repo_id seeed_rebot_b601_dm/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

**SO-ARM バージョン：**

```bash
lerobot-edit-dataset \
  --repo_id seeed_soarm101/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

</div>
