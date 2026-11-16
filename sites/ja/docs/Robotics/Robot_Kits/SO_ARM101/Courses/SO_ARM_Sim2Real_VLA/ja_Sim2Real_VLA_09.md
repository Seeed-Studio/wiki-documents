---
description: "SO-ARM101 Sim-to-Real VLA コース第 9 章 —— 実環境でのデータ収集：カメラのテスト、lerobot-record による 2 カメラ同期エピソードの録画、LeRobot v3 データセットの検証。"
title: 第 9 章 - 実環境でのデータ収集
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - データ収集
  - lerobot-record
  - LeRobot Dataset
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_9
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 3 · 第 9 章 · Get Your Own VLA Model</span>
    <h2>9. 実環境でのデータ収集</h2>
    <p>
      カメラをテストし、`lerobot-record` で 2 カメラ同期エピソードを録画し、
      学習の前に LeRobot v3 データセットを検証する。
    </p>
    <div className="hero-actions">
      <a href="#cameras">カメラ</a>
      <a href="#record">録画</a>
      <a href="#controls">操作</a>
      <a href="#storage">保存</a>
      <a href="#verify">検証</a>
    </div>
  </div>
</section>

## 9.1 カメラのテスト

<section id="cameras" class="section-card">
  <div class="section-title">
    <span>録画の前に</span>
    <h2>9.1 カメラのテスト</h2>
  </div>

第 8 章で両カメラを取り付けプレビューしました。ここでもう一度確認します
——`/dev/video*` の番号は再接続や再起動で変わります：

```bash
lerobot-find-cameras opencv
```

プレビューを番号に対応付け（ファイル名にデバイス番号を含む）、再度
エクスポートします：

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

第 7 章のアーム変数がこの端末で有効かも確認します：

```bash
echo "$TELEOP_PORT $TELEOP_ID $ROBOT_PORT $ROBOT_ID"
```

</section>

## 9.2 エピソードの録画

<section id="record" class="section-card">
  <div class="section-title">
    <span>lerobot-record</span>
    <h2>9.2 エピソードの録画</h2>
  </div>

両腕のキャリブレーションとスタジオの準備が整ったら実行します：

```bash
export HF_USER=local   # または Hugging Face のユーザー名

lerobot-record \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --dataset.single_task="Put the three vials into the vial rack" \
  --dataset.num_episodes=10 \
  --dataset.push_to_hub=false \
  --display_data=false \
  --play_sounds=false
```

端末のプロンプトに従って各エピソードを完了します：リーダーでバイアルを
つかみ、ラックに入れ、離し、シーンを安定させます。

主要フラグ：

| フラグ | この値の理由 |
| --- | --- |
| `--robot.cameras` のキー `front` と `external` | シミュレーションデータセットの特徴名と完全一致（第 12 章の協調学習） |
| `--dataset.single_task` | どこでもこの原文を使う——学習プロンプトとエピソードラベルが依存する |
| `--dataset.num_episodes` | まず 10 本。NVIDIA workshop の最低は 5 本、使い物になるポリシーには 50 本 |
| `--dataset.push_to_hub=false` | すべてローカルに保持。バックアップしたければアップロード |
| `--display_data=false` | 録画機での毎フレーム描画を避ける |

:::caution ゆっくり完全な演示で始める
途中で中断されたエピソードは、途中で止まるポリシーを教えます。設置を完了
してから右矢印を押してください。5 本のきれいな軌跡は 20 本の中断されたもの
に勝ります。
:::

</section>

## 9.3 録画の操作と安全

<section id="controls" class="section-card">
  <div class="section-title">
    <span>キーボード</span>
    <h2>9.3 録画の操作と安全</h2>
  </div>

| キー | 動作 |
| --- | --- |
| 右矢印 | 現エピソードを早く終了して次へ |
| 左矢印 | 現エピソードを破棄して録り直し |
| `Esc` | セッション終了、動画エンコード、データセット完成 |

フォロワーが予期せず動いた場合：

1. まず `Ctrl+C`；
2. 動きが続くならフォロワーの 12 V 電源を切断；
3. 手でアームを中央姿勢に戻す；
4. 再開前にキャリブレーションとリーダー ID を再確認。

:::note キーボードが反応しない
一部の Ubuntu では `pynput` の固定が必要です。LeRobot 環境で：

```bash
pip install pynput==1.6.8
```
:::

</section>

## 9.4 データの保存・チェックポイント・再開

<section id="storage" class="section-card">
  <div class="section-title">
    <span>データの所在</span>
    <h2>9.4 データの保存・チェックポイント・再開</h2>
  </div>

- データは `LeRobotDataset` 形式で録画中にディスクへ書き込まれ、パスは
  `--dataset.root` で指定されます；
- `--dataset.push_to_hub=false` ならアップロードされません；
- チェックポイントは録画中に自動作成されます。中断後に再開するには同じ
  コマンドに `--resume=true` を付けて再実行します；
- ゼロからやり直すにはデータセットディレクトリを削除します。

:::caution 再開について
再開時の `--dataset.num_episodes` は**追加**で録る本数であり、目標合計では
ありません。

アームがセッション途中で固まる場合は `--dataset.episode_time_s=90`
（デフォルト 60）に増やして再録してください。
:::

</section>

## 9.5 データセットの検証

<section id="verify" class="section-card">
  <div class="section-title">
    <span>学習前の検査</span>
    <h2>9.5 データセットの検証</h2>
  </div>

メタデータを確認：

```bash
python3 -c "
import json
info = json.load(open('$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/meta/info.json'))
print('fps:', info['fps'], 'episodes:', info['total_episodes'], 'frames:', info['total_frames'])
print({k: v['shape'] for k, v in info['features'].items()})
"
```

期待値：

```text
fps: 30 episodes: 10 frames: ...
{'observation.state': [6], 'observation.images.front': [480, 640, 3],
 'observation.images.external': [480, 640, 3], 'action': [6], ...}
```

2 つのカメラストリームと 6 次元の関節が、パイプラインの残りとの契約です。
形状が違う場合はデータセットディレクトリを削除し、同じフラグで再録して
ください。

動画の数を数えます：

```bash
find $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos -name "*.mp4" | wc -l
```

10 エピソード × 2 カメラ = 20 ファイル。簡単な目視チェック：

```bash
lerobot-dataset-viz \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --episode-index 0 \
  --display-compressed-images true
```

</section>

## 9.6 データ品質チェックリスト

<section id="quality" class="section-card">
  <div class="section-title">
    <span>確認ポイント</span>
    <h2>9.6 データ品質チェックリスト</h2>
  </div>

学習に進む前に、いくつかのエピソードを通しで確認します：

- すべてのエピソードが**タスクを完了**している——バイアルがラックに
  入って離されている；
- 動きが滑らか。長い停止や乱暴な修正がない；
- バイアルの開始位置がエピソードごとに変化している；
- 手首視野に爪と把持中のバイアル、外部視野にラックが見える；
- フレーム落ちらオートフォーカスの迷いがない；
- すべてのエピソードでタスク文が同一。

これらに違反するデータセットは、デプロイ時に厄介な形で失敗するポリシーを
生みます。今データを直してください。学習は直してくれません。

次の章：[第 10 章 —— GR00T N1.7 ポリシーの学習](ja_Sim2Real_VLA_10.md)。

</section>

</div>