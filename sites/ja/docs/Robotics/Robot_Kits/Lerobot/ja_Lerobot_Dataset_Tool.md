---
description: この Wiki では、エピソードの削除、データセットのマージなどを含む LeRobot データセットユーティリティについて説明します。
title: SO-ARM データセットツール
keywords:
  - LeRobot
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
  skip: [zh-CN]
createdAt: '2026-03-02'
updatedAt: '2026-09-16'
url: https://wiki.seeedstudio.com/ja/lerobot_dataset_tool/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SO-ARM データセットツール

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="SO-ARM100 と SO-ARM101 ロボットアームキット"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>SO-ARM101 キットを入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## 概要

`lerobot-edit-dataset` を使用してデータセットを編集し、`lerobot-dataset-viz` を使用してローカルでエピソードを表示します。

まずデータセットを記録するには、[SO-ARM100 および SO-ARM101 のはじめかた](/ja/lerobot_so100m_new/) を参照してください。

これらの例は [Seeed LeRobot データセットツールの実装](https://github.com/Seeed-Projects/lerobot/blob/d490e472a5d1a207cfe0255caaaf74b6d66e4656/src/lerobot/scripts/lerobot_edit_dataset.py) に基づいています。その他のバージョンでは異なるオプションを使用している場合があります。

| タスク | 目的 |
| --- | --- |
| [エピソードを削除](#delete-episodes) | インデックスでエピソードを削除します。 |
| [データセットを分割](#split-a-dataset) | 比率またはエピソードインデックスでデータを分割します。 |
| [データセットをマージ](#merge-datasets) | 複数のデータセットを新しいデータセットに結合します。 |
| [特徴量を削除](#remove-features) | カメラ画像など、選択した特徴量を削除します。 |
| [動画に変換](#convert-to-video) | 画像フレームを動画としてエンコードし、必要に応じて Hugging Face Hub にアップロードします。 |
| [データセットをオンラインで可視化](#visualize-a-dataset-online) | アップロード済みデータセットをブラウザで表示します。 |
| [データセットをローカルで可視化](#visualize-a-dataset-locally) | Hub またはローカルのデータセットをコマンドラインビューアで表示します。 |

### 関連ロボットアーム

| ビオラフォロワーアーム | バイオリンリーダーアーム | チェロフォロワーアーム |
| --- | --- | --- |
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" width={160} alt="ビオラフォロワーアーム" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg" width={160} alt="バイオリンリーダーアーム" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" width={160} alt="チェロフォロワーアーム" /> |

## エピソードを削除

ここでいうエピソードとは、ロボット動作の 1 回分の完全な記録です。

<span id="command-1-delete-specific-episodes-in-a-dataset" aria-hidden="true" />
<span id="command-2-delete-episodes-and-save-as-a-new-dataset-preserve-the-original" aria-hidden="true" />

<Tabs defaultValue="new-dataset">
<TabItem value="new-dataset" label="新しいデータセットとして保存">

結果を保存しつつ元のデータセットを保持するには、`--new_repo_id` を設定します。この例ではエピソード 0、2、5 を削除します。

```bash
# Delete episodes and save to a new dataset (preserves original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --new_repo_id lerobot/pusht_after_deletion \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

</TabItem>
<TabItem value="in-place" label="元のデータを変更">

:::caution
このコマンドは元のデータセットを変更します。実行前にデータセット ID とエピソードインデックスを確認してください。元のデータを保持するには **新しいデータセットとして保存** を選択してください。
:::

```bash
# Delete episodes 0, 2, and 5 (modifies original dataset)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

</TabItem>
</Tabs>

| オプション | 目的 |
| --- | --- |
| `--repo_id` | 入力データセットの ID（例：`lerobot/pusht`）。 |
| `--new_repo_id` | コピーを保存する際の新しいデータセットの ID。 |
| `--operation.episode_indices` | 削除するエピソードインデックスのリスト。 |

## データセットを分割

<span id="command-1-split-by-fractions" aria-hidden="true" />
<span id="command-2-split-by-explicit-episode-indices" aria-hidden="true" />

<Tabs defaultValue="fractions">
<TabItem value="fractions" label="比率で分割">

この例では、エピソードのおよそ 80%、10%、10% をそれぞれ学習、テスト、検証セットに割り当てます。

```bash
# Split by fractions (e.g. 80% train, 10% test, 10% val)
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

</TabItem>
<TabItem value="indices" label="エピソードインデックスで分割">

この例では、エピソード 0〜3 を `task1` に、エピソード 4〜5 を `task2` に割り当てます。

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

</TabItem>
</Tabs>

各分割は、その名前を入力 ID に付加します（例：`lerobot/pusht_train`）。これらの例では結果をローカルに保存します。アップロードするには `--push_to_hub true` が必要です。

## データセットをマージ

```bash
lerobot-edit-dataset \
    --new_repo_id lerobot/pusht_merged \
    --operation.type merge \
    --operation.repo_ids "['lerobot/pusht_train', 'lerobot/pusht_val']"
```

| オプション | 目的 |
| --- | --- |
| `--new_repo_id` | マージ後の新しいデータセットの ID。 |
| `--operation.repo_ids` | マージする元データセットの ID。 |

## 特徴量を削除

手首カメラの映像だけが必要な場合は、オーバーヘッドカメラの特徴量を削除できます。この例では、データセットから `observation.images.top` を削除します。

```bash
lerobot-edit-dataset \
    --repo_id lerobot/pusht \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.top']"
```

## 動画に変換

新しいデータセット内で画像フレームを動画にエンコードします。これによりストレージ使用量を削減し、読み取り性能を向上させられます。

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>出力先を選択</h4>
<p className="rebot-step-label">Step 1</p>

<Tabs defaultValue="local-folder">
<TabItem value="local-folder" label="ローカルフォルダに保存">

`--new_root` で出力ディレクトリを設定します。結果はローカルに保持されます。

```bash
# Local-only: Save to a custom output directory (no hub push)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root /path/to/output/pusht_video
```

</TabItem>
<TabItem value="new-id" label="新しいデータセット ID を使用">

`--new_repo_id` で生成されるデータセットの ID を設定します。ファイルはローカルに保持されます。

```bash
# Save with new repo_id (local storage)
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video
```

</TabItem>
<TabItem value="hub" label="変換して Hub にアップロード">

対象リポジトリへの書き込み権限があることを確認してください。`--push_to_hub true` を指定すると、変換後に結果がアップロードされます。

```bash
# Convert and push to Hugging Face Hub
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --new_repo_id lerobot/pusht_video \
    --operation.type convert_image_to_video \
    --push_to_hub true
```

</TabItem>
</Tabs>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>結果を確認</h4>
<p className="rebot-step-label">Step 2</p>

出力先の `videos/` ディレクトリでカメラの MP4 ファイルを確認し、エピソード、統計情報、タスク定義が引き続き存在することを確認します。`.parquet` ファイルにはメタデータが保存され、画像フレームは動画内に格納されます。

</div>
</section>

</div>

### 組み合わせ可能な変換オプション

必要に応じて、以下のオプションを出力設定と組み合わせて使用します。

#### エンコードをカスタマイズ

```bash
# Convert with custom video codec and quality settings
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root outputs/pusht_video \
    --operation.rgb_encoder.vcodec libsvtav1 \
    --operation.rgb_encoder.pix_fmt yuv420p \
    --operation.rgb_encoder.g 2 \
    --operation.rgb_encoder.crf 30
```

#### 並列ワーカー数を設定

```bash
# Convert with multiple workers for parallel processing
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --new_root outputs/pusht_video \
    --operation.num_workers 8
```

#### バッチサイズを制限

```bash
# For memory-constrained systems, users can now specify limits:
lerobot-edit-dataset \
    --repo_id lerobot/pusht_image \
    --operation.type convert_image_to_video \
    --operation.max_episodes_per_batch 50 \
    --operation.max_frames_per_batch 10000
```

| オプション | 目的 |
| --- | --- |
| `--new_root` | カスタムローカル出力ディレクトリ。 |
| `--operation.rgb_encoder.vcodec` | RGB 動画コーデック（例：`h264`、`hevc`、`libsvtav1`）。 |
| `--operation.rgb_encoder.pix_fmt` | RGB 動画ピクセルフォーマット（例：`yuv420p`）。 |
| `--operation.rgb_encoder.g` | キーフレーム間隔。 |
| `--operation.rgb_encoder.crf` | エンコード品質設定。値が小さいほど一般的に品質とファイルサイズが増加します。 |
| `--operation.rgb_encoder.fast_decode` | 高速デコード向けチューニング。サポートされる値はコーデックに依存します。 |
| `--operation.episode_indices` | 変換するエピソードインデックス。省略するとすべてのエピソードを変換します。 |
| `--operation.num_workers` | 並列ワーカー数。デフォルトは 4。 |
| `--operation.max_episodes_per_batch` | バッチあたりの最大エピソード数。 |
| `--operation.max_frames_per_batch` | バッチあたりの最大フレーム数。 |

## データセットをオンラインで可視化

[Hugging Face データセットビジュアライザ](https://huggingface.co/spaces/lerobot/visualize_dataset) でアップロード済みデータセットを開きます。

## データセットをローカルで可視化

<span id="visualize-a-dataset-from-the-hub-locally" aria-hidden="true" />
<span id="visualize-a-local-dataset" aria-hidden="true" />

<Tabs defaultValue="hub-dataset">
<TabItem value="hub-dataset" label="Hub データセットを表示">

Hub からデータセット ID を使用します。この例ではエピソード 0 を開きます。

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --episode-index 0
```

</TabItem>
<TabItem value="local-dataset" label="ローカルデータセットを表示">

ローカルデータセットのディレクトリを `--root` で指定し、`--mode local` を選択します。

```bash
lerobot-dataset-viz \
    --repo-id lerobot/pusht \
    --root ./my_local_data_dir \
    --mode local \
    --episode-index 0
```

</TabItem>
</Tabs>

| オプション | 目的 |
| --- | --- |
| `--repo-id` | 表示するデータセットの ID。 |
| `--episode-index` | エピソードのインデックス（0 から開始）。 |
| `--root` | ローカルデータセットのディレクトリ。 |
| `--mode local` | ローカルファイルシステムから読み取ります。 |

## FAQ

- このガイドで使用しているツールは、[Seeed LeRobot リポジトリ](https://github.com/Seeed-Projects/lerobot.git)から入手してください。別バージョンでは、異なるコマンドやデータセット形式を使用している場合があります。
- しばらくの間ターミナル出力が更新されていない場合は、Enter キーを押して新しい出力があるか確認してください。圧縮されたデータセットに対する操作には時間がかかることがあります。進行状況バーを確認してください。

[LeRobot データセットツールのドキュメント](https://huggingface.co/docs/lerobot/using_dataset_tools)を参照してください。
