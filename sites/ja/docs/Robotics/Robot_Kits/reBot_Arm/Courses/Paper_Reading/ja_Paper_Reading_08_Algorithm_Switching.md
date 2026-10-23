---
description: "すでに ACT が動作している reBot または SO101 プラットフォーム上で新しいポリシーを学習・デプロイし、タブでプラットフォームごとのコマンドを切り替え、Diffusion、SmolVLA、π ポリシーの設定および評価ワークフローを学びます。"
title: "ポリシー切り替えとタスク実行"
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
slug: /robotics/hands_on_algorithm_switching
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/robotics/hands_on_algorithm_switching/
---

import '/src/css/paper-reading-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-algorithm-switching-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ハンズオンデプロイ</span>
  <h1 id="hands-on-algorithm-switching-title">ポリシー切り替えとタスク実行</h1>
  <p className="paper-reading-lead">動作中の ACT プラットフォームとそのデータセットを再利用して新しいポリシーを学習・デプロイし、その性能をロボット上で比較します。reBot-RS、reBot-DM、SO-ARM 101 向けのコマンドを用意しています。</p>
  <ul className="paper-reading-badges" aria-label="このガイドで扱う内容">
    <li>Diffusion</li>
    <li>SmolVLA</li>
    <li>π ポリシー</li>
    <li>ロボット上での評価</li>
  </ul>
</section>

**ポリシーを選ぶ → 設定して学習 → 新しいモデルを読み込む → ロボット上で評価する。**

このガイドでは、例として **ACT → 黒いブロック把持の Diffusion** を使用します。まず、組み立て、キャリブレーション、テレオペレーション、ACT の学習とデプロイを完了してください。動作しているハードウェア構成を維持し、同じプラットフォームのデータセットで新しいポリシーを学習します。

![ACT から他のポリシーへの切り替えワークフロー](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-01-switch-map-en.png)

## 環境とプラットフォーム

使用しているアームのタブを選択してください。以下の学習およびデプロイ用コマンドはタブに合わせて切り替わります。

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

ACT で使用している Seeed LeRobot 環境と B601-RS プラグイン設定を再利用します。コマンドは Seeed LeRobot 0.4.4 シリーズを対象としています。ハードウェアのセットアップについては、[LeRobot を用いた reBot-RS](/ja/rebot_arm_b601_rs_lerobot/) を参照してください。

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

ACT で使用している Seeed LeRobot 環境と B601-DM プラグイン設定を再利用します。コマンドは Seeed LeRobot 0.4.4 シリーズを対象としています。ハードウェアのセットアップについては、[LeRobot を用いた reBot-DM](/ja/rebot_arm_b601_dm_lerobot/) を参照してください。

</TabItem>

<TabItem value="so101" label="SO101">

すでに ACT が動作している LeRobot v0.4.4 環境を再利用します。Feetech モーターのサポートがインストールされていない場合は、LeRobot のソースディレクトリから次を実行してください：

```bash
pip install -e ".[feetech]"
```

ハードウェアの準備については、[公式 SO-ARM 101 ドキュメント](https://huggingface.co/docs/lerobot/main/en/so101)を参照してください。

</TabItem>

</Tabs>

---

## 各ポリシーに必要なこと

| 対象ポリシー | 必要な作業 |
|---|---|
| **Diffusion** | `policy.type=diffusion` と画像クロップのオプションを設定し、新しいモデルを学習して、デプロイ先パスを更新します。 |
| **SmolVLA** | `.[smolvla]` をインストールし、`lerobot/smolvla_base` をファインチューニングし、タスク文、カメラ名、状態／アクション次元を整合させます。 |
| **π₀ / π₀.₅** | `.[pi]` をインストールし、適切なベースモデルをファインチューニングし、タスク文、画像、アクション、正規化統計を整合させ、VRAM に合わせてバッチサイズを調整します。 |

VLA データには正確なタスク記述が必要です。カメラ名や台数がベースモデルと異なる場合は、入力名のマッピングと欠損ビューを設定してください。[SmolVLA](https://huggingface.co/docs/lerobot/v0.4.4/smolvla) · [π₀](https://huggingface.co/docs/lerobot/pi0) · [入力マッピング](https://huggingface.co/docs/lerobot/rename_map)

---

## 既存データセットで Diffusion を学習する

既存の ACT 環境で、LeRobot のソースディレクトリから次のコマンドを実行します。`dataset.repo_id` は自分のデータセットに置き換えてください。データの保存場所をカスタマイズしている場合は、元の学習コマンドから `--dataset.root` とデコード設定を引き継ぎます。この例では `front` カメラ 1 台、640×480 画像、30 FPS のデータを使用します。

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

```bash
lerobot-train \
  --dataset.repo_id=your_username/rebot_rs_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_rebot_rs_cube \
  --job_name=diffusion_rebot_rs_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

```bash
lerobot-train \
  --dataset.repo_id=your_username/rebot_dm_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_rebot_dm_cube \
  --job_name=diffusion_rebot_dm_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

<TabItem value="so101" label="SO101">

```bash
lerobot-train \
  --dataset.repo_id=your_username/so101_cube \
  --policy.type=diffusion \
  --policy.crop_shape=null \
  --policy.device=cuda \
  --policy.push_to_hub=false \
  --output_dir=outputs/train/diffusion_so101_cube \
  --job_name=diffusion_so101_cube \
  --batch_size=8 \
  --steps=100000 \
  --wandb.enable=false
```

</TabItem>

</Tabs>

| パラメータ | 必須設定 |
|---|---|
| `policy.type` | 新しいポリシーを作成・学習するために `diffusion` を使用します。 |
| `policy.crop_shape` | `null` は画像全体を保持します。ビュー全体を処理するとメモリと推論コストが増加します。 |
| `output_dir` / `job_name` | 新しい名前を使用します。デプロイ時の `policy.path` は対応する出力先を指す必要があります。 |
| `batch_size` / `steps` | まず 8 / 100000 から始め、その後 VRAM とロボット上での性能に合わせて調整します。 |

![Diffusion の画像クロップ設定](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/algorithm-switching-02-crop-explained-en.png)

クロップやリサイズを最適化する際は、学習とデプロイの間で画像処理を一貫させてください。設定の参考： [Seeed Diffusion](https://github.com/Seeed-Projects/lerobot/blob/0f392484458cb5ebca0310c0c4c47390a31c80ed/src/lerobot/policies/diffusion/configuration_diffusion.py) · [LeRobot v0.4.4 Diffusion](https://github.com/huggingface/lerobot/blob/v0.4.4/src/lerobot/policies/diffusion/configuration_diffusion.py)。

---

## 新しいモデルを実行する

`policy.path` を新しく学習した Diffusion モデルに向け、新しい評価用データセット名を選びます。以下のポート、`robot.id`、カメラ設定、タスク記述は例ですので、実際に動作している ACT の設定に置き換えてください。キャリブレーション時に使用した `robot.id` は維持します。

<Tabs groupId="policy-switching-robot" defaultValue="rebot-rs">

<TabItem value="rebot-rs" label="reBot-RS">

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.id=follower1 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30,"fourcc":"MJPG"}}' \
  --policy.path=outputs/train/diffusion_rebot_rs_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_rebot_rs_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

<TabItem value="rebot-dm" label="reBot-DM">

```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower1 \
  --robot.can_adapter=damiao \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30,"fourcc":"MJPG"}}' \
  --policy.path=outputs/train/diffusion_rebot_dm_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_rebot_dm_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

<TabItem value="so101" label="SO101">

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{"front":{"type":"opencv","index_or_path":0,"width":640,"height":480,"fps":30}}' \
  --policy.path=outputs/train/diffusion_so101_cube/checkpoints/last/pretrained_model \
  --policy.device=cuda \
  --dataset.repo_id=local/eval_diffusion_so101_cube_01 \
  --dataset.single_task="Grab the black cube" \
  --dataset.fps=30 \
  --dataset.num_episodes=1 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.push_to_hub=false \
  --display_data=true
```

</TabItem>

</Tabs>

- **reBot-RS**: 検証済みの CAN インターフェースと `socketcan` 設定を維持します。
- **reBot-DM**: 検証済みのシリアルポートと `damiao` アダプタ設定を維持します。
- **SO-ARM 101**: 検証済みのシリアル設定を維持し、使用していた場合は以前の `--robot.use_degrees` の値も含めます。

カメラ名、設置位置、画像サイズ、アクションの単位、フレームレートは学習時と一貫させてください。評価ごとに新しい `eval_…` データセット名を使用します。

設定の参考： [Seeed プラグイン設定](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601#configuration) · [LeRobot v0.4.4 評価ワークフロー](https://huggingface.co/docs/lerobot/v0.4.4/il_robots#run-inference-and-evaluate-your-policy)。

---

## ロボット上での評価とポリシー比較

アームを安全に固定し、作業空間を片付けてください。まず 1 エピソードだけ実行し、動作方向、可動範囲、実際の制御レートを確認します。これらが正しければ、ACT と同じタスク、物体配置、試行回数で Diffusion を評価し、成功回数と完了時間を記録します。

次に SmolVLA や π ポリシーへ切り替えるには、ドキュメントに記載された依存関係をインストールし、ベースモデルをファインチューニングし、タスク文、カメラ入力、状態／アクション次元、正規化統計を整合させ、`policy.path` を更新します。

</div>
