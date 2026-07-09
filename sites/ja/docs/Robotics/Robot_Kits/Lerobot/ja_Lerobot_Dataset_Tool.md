---
description: このWikiでは、エピソードの削除、データセットのマージなどを含むLeRobotデータセットユーティリティについて説明します。
title: Lerobot データセットツール
keywords:
  - Lerobot
  - Hugging Face
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_dataset_tool
sku: E24122002, 114993609, 114993608, 108090023, 108090003, 101090141, 101090142, 114090081,114090080,100049805,100038899,100028196
last_update:
  date: 2/11/2026
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2026-03-02'
updatedAt: '2026-03-02'
url: https://wiki.seeedstudio.com/ja/lerobot_dataset_tool/
---

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

| **Follower Arm Viola** | **Leader Arm Violin** | **Follower Arm Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

## 概要
このWikiでは、次の内容を学びます：
- 1. **エピソードを削除** — データセットから特定のエピソードを削除する
- 2. **データセットを分割** — 1つの完全なデータセットを複数の小さなデータセットに分割する
- 3. **データセットをマージ** — 複数のデータセットを1つの大きなデータセットに結合する
- 4. **特徴量を削除** — データセットから特定の特徴量を削除する
- 5. **動画に変換** — 画像ベースのデータセットを、より効率的に保存できる動画形式に変換する
- 6. **データセットを Hugging Face Hub にアップロード**
- 7. **データセットをオンラインで可視化** — Hugging Face 上で記録済み・アップロード済みのデータセットを閲覧する
- 8. **データセットをオフラインで可視化** — ローカルに保存された記録済みデータセットを閲覧する

LeRobot を使ってデータセットを記録／収集する手順については、こちらのステップバイステップチュートリアルを参照してください：[Getting started with SO-ARM100 and SO-ARM101 robotic arm with LeRobot](/ja/lerobot_so100m_new/)。

上記のすべての操作は、適切な引数を指定して `lerobot-edit-dataset` を使うことで実行できます。以下に完全なコマンドと説明を示します。

## エピソードを削除
この操作は、不要なエピソードをデータセットから削除します。

### コマンド 1: データセット内の特定のエピソードを削除
```bash
# Delete episodes 0, 2, and 5 (modifies original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### 説明
- `--repo_id lerobot/pusht`  
    操作対象のデータセットリポジトリ、つまり `lerobot/pusht` を指定します。ここで `lerobot` はユーザー名、`pusht` はデータセット名です。

- `--operation.type delete_episodes`  
    操作タイプを **エピソード削除** に設定します。

- `--operation.episode_indices "[0, 2, 5]"`  
    削除するエピソードのインデックスを指定します。ここではエピソード **0、2、5** を削除します。

### コマンド 2: エピソードを削除し、新しいデータセットとして保存（元データセットを保持）
```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```
#### 説明
- `--repo_id lerobot/pusht`  
    元のデータセットを入力として使用します。

- `--new_repo_id lerobot/pusht_after_deletion`  
    変更後の結果を保存する新しいデータセットリポジトリ名を指定します。

## データセットを分割

### コマンド 1: 比率で分割
ユースケース：素早いトレーニング／実験
```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```
#### 説明
- `--operation.type split`  
    操作タイプを **データセット分割** に設定します。

- `--operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'`  
    `lerobot/pusht` を比率で3つのデータセットに分割します：

    - `train`: エピソードのおよそ 80%

    - `test`: エピソードのおよそ 10%

    - `val`: エピソードのおよそ 10%

分割後、データセットはHub上に残ります。分割名は元の名前にサフィックスとして付加されます。たとえば、上記のコマンドは `lerobot/pusht_train`、`lerobot/pusht_test`、`lerobot/pusht_val` を作成します。

### コマンド 2: 明示的なエピソードインデックスで分割
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```
#### 説明

- `--operation.type split`  
    操作タイプは引き続き **データセット分割** です。

- `--operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'`  
    **明示的なエピソードインデックス** で分割します：

    - `task1`: エピソード 0, 1, 2, 3

    - `task2`: エピソード 4, 5

## データセットをマージ
```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```
#### 説明
- `--repo_id lerobot/pusht_merged`  
    マージ後の **新しいデータセット名** を指定します。  
    マージ結果はこのデータセットリポジトリに保存されます。

- `--operation.type merge`  
    操作タイプを **データセットマージ** に設定します。

- `--operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"`  
    マージする元のデータセットを指定します：

    - `lerobot/pusht_train`

    - `lerobot/pusht_val`

## 特徴量を削除

この操作は、データセットから特徴量を削除します。特定の観測モダリティを削除したい場合に便利です。たとえば、データセットに2つのカメラ（トップカメラとリストカメラ）が含まれているが、トレーニングとデプロイではリストカメラだけを使いたい場合、データセットからトップカメラの観測特徴量を削除できます。
```bash

lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```
#### 説明
- `--operation.type remove_feature`  
    操作タイプを **特徴量削除** に設定します。

- `--operation.feature_names "['observation.images.top']"`  
    削除する特徴量名を指定します。  
    ここでは `observation.images.top` という名前のカメラ画像特徴量を削除します。

## 動画に変換

**画像ベースのデータセット** を **動画形式** に変換し、新しい `LeRobotDataset` を生成します。  
変換の過程で、もともと個々の画像フレームとして保存されていたカメラデータは、MP4動画ファイルとしてエンコードされます。

これは主に次の目的で使用されます：

- 全体的なストレージ使用量を削減する

- データの読み込みおよび読み出し性能を向上させる

変換後の新しいデータセットは、次の点を除き、構造と内容が元のデータセットと **完全に同一** です：  
画像データはもはや生のフレームとして保存されず、LeRobot 準拠の動画形式で保存されます。

変換オプションは自由にカスタマイズおよび組み合わせることができます。以下に参考用として6つのコマンド例を示します。

1. 画像データセットを動画に変換し、ローカルの出力ディレクトリにのみ保存する（Hub にはプッシュしない）。
```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir /path/to/output/pusht_video
```

2. 変換結果を、新しい `repo_id` を持つ新しいデータセットとして保存する。
```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

3. 変換し、新しいデータセットを Hugging Face Hub にプッシュする。
```bash
# Convert and push to Hugging Face Hub
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video \
    --push_to_hub true
```

4. カスタムの動画コーデックと画質設定で変換する。
```bash
# Convert with custom video codec and quality settings
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir outputs/pusht_video \
    --operation.vcodec libsvtav1 \
    --operation.pix_fmt yuv420p \
    --operation.g 2 \
    --operation.crf 30
```

5. 複数ワーカーを使って高速に変換する。
```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.output_dir outputs/pusht_video \
    --operation.num_workers 8
```
6. メモリ制約のあるシステム向けに、エピソード数とバッチあたりのフレーム数を制限してピークメモリ使用量を削減する。
```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

#### 説明
- **output_dir**：  
    カスタム出力ディレクトリ（任意）。  
    指定しない場合、デフォルトは `{repo_id}_video` または `new_repo_id` に対応するディレクトリになります。

- **vcodec**：  
    動画コーデック。  
    `h264`、`hevc`、`libsvtav1` などのオプションがあります（デフォルト：`h264`）。

- **pix_fmt**：  
    動画のピクセルフォーマット。  
    `yuv420p`、`yuv444p` などのオプションがあります（デフォルト：`yuv420p`）。

- **g**：  
    GOP（キーフレーム間隔）サイズ。  
    値を小さくすると一般的に画質は向上しますが、ファイルサイズも大きくなります（デフォルト：2）。

- **crf**：  
    Constant Rate Factor。  
    値が小さいほど高画質かつファイルサイズが大きくなります。`0` はロスレスエンコードを意味します（デフォルト：30）。

- **fast_decode**：  
    高速デコード用のチューニングフラグ（デフォルト：0）。

- **episode_indices**：  
    変換するエピソードインデックスのリスト（デフォルト：すべてのエピソードを変換）。

- **num_workers**：  
    並列ワーカープロセス数（デフォルト：4）。

変換後のデータセットは、**完全かつ標準的な LeRobotDataset** です：

- すべてのカメラデータは `videos/` 配下の動画として保存されます

- `.parquet` ファイルにはメタデータのみが含まれ、生の画像は含まれません

- すべてのエピソード、統計情報、およびタスク定義は保持されます。


## データセットをオンラインで可視化

LeRobot でデータセットを記録すると、特に指定しない限り、自動的に Hugging Face Hub にアップロードされます。データセットをオンラインで閲覧するには、Hugging Face の **LeRobot dataset visualization tool** を使用します： [https://huggingface.co/spaces/lerobot/visualize_dataset](https://huggingface.co/spaces/lerobot/visualize_dataset)

## データセットをローカルで可視化

### Hub 上のデータセットをローカルで可視化

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

### ローカルデータセットを可視化する

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

#### 説明
- **`lerobot-dataset-viz`**  
    LeRobot データセット内のエピソードを閲覧するためのデータセット可視化ツールです。

- **`--repo-id lerobot/pusht`**  
    可視化するデータセット名。

- **`--root ./my_local_data_dir`**  
    ローカルデータセットのルートディレクトリ。  
    ローカルモードでは、指定された `repo-id` を使って、このディレクトリ配下からデータセットを探します。

- **`--mode local`**  
    ローカルデータソースモードを使用します。  
    データセットはリモートリポジトリではなくローカルファイルシステムから読み込まれます。

- **`--episode-index 0`**  
    表示するエピソードのインデックス。  
    ここではエピソード 0（データセット内の最初のエピソード）を可視化します。

## FAQ

- このチュートリアルに従う場合は、推奨されているリポジトリ `https://github.com/Seeed-Projects/lerobot.git` を git clone してください。ここで推奨しているリポジトリは検証済みの安定版です。公式の LeRobot リポジトリは継続的に更新されており、予期しない問題（例：データセットバージョンの変更、コマンドの違い）を引き起こす可能性があります。

- データセット操作がハングしているように見える場合は、Enter キーを押してターミナル出力を更新してみてください。

- 新しいデータセット形式は圧縮された形で保存されているため、データセット操作に時間がかかる場合があります。ターミナルに進行状況バーが表示されますので、完了するまでお待ちください。

参考： https://huggingface.co/docs/lerobot/using_dataset_tools
