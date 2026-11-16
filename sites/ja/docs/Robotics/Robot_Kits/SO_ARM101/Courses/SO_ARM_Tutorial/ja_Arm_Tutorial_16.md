---
description: "SO-ARM Physical AI ビギナーコース第 16 章 — 実機 SO-ARM での推論の仕組み、訓練済み ACT ポリシーの実行（lerobot-record / lerobot-rollout）、成功率による評価、失敗分析、データイテレーション。"
title: 第 16 章 - 実機推論・評価・データイテレーション
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 推論
  - 評価
  - ACT
  - LeRobot
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_16
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 16 章 · 理論と実践</span>
    <h2>16. 実機推論・評価・データイテレーション</h2>
    <p>
      実機 SO-ARM での推論の仕組み、訓練済み ACT ポリシーの実行（lerobot-record / lerobot-rollout）、成功率による評価、失敗の分析と分類、失敗駆動のデータイテレーションを学びます。
    </p>
    <div className="hero-actions">
      <a href="#dataflow">推論データフロー</a>
      <a href="#inference">推論実行</a>
      <a href="#evaluation">評価</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>
      推論中、実機アームは人の関与なしに全力トルクで動きます。作業領域を清空し、手を離し、いつでも電源を切れる態勢でいてください。
    </p>
  </div>
</div>

## 16.1 推論データフロー

<section id="dataflow" className="section-card">
  <div className="section-title">
    <span>データフロー</span>
    <h2>16.1 推論データフロー</h2>
  </div>

第 9 章の復習：推論はデータ収集の鏡像です。フレームごとのループ：

1. 2 台のカメラを読む → **観測**；
2. フォロワーの 6 関節を読む → **状態**；
3. データセットに保存済みの統計で正規化；
4. ポリシーが**アクションチャンク**（k × 6）を予測；
5. チャンクの先頭数アクションをサーボへ開ループ実行；
6. 実行分を使い切ったら再観測・再予測。

リーダーアームはもう使いません — モデルが人に代わって意思決定者になりました。それ以外（カメラ、シリアルバス、安全制限）は録画時と同一です。だからこそカメラキーと `--robot.id` は録画セッションと厳密に一致させる必要があります。

</section>

## 16.2 前処理と逆正規化

<section id="preprocessing" className="section-card">
  <div className="section-title">
    <span>前処理</span>
    <h2>16.2 前処理と逆正規化</h2>
  </div>

データセットは特徴量ごとの統計（平均 / 標準偏差）を `meta/stats` に保存しています（第 13 章）。推論時：

- **入力側**：画像と関節状態は訓練統計で正規化されてからネットワークへ；
- **出力側**：ネットワークの正規化アクションは実関節値へ逆正規化されてからサーボへ送られます。

だから評価コマンドは録画時と**同じカメラキー**（`front`、`side`）を使わなければなりません — キーの不一致は統計の欠落を意味し、次のようなエラーが出ます：

```text
mean is infinity. You should either initialize with stats as an argument or use a pretrained model
```

</section>

## 16.3 実機推論の開始

<section id="inference" className="section-card">
  <div className="section-title">
    <span>推論</span>
    <h2>16.3 実機推論の開始</h2>
  </div>

### 方法 A：ポリシー付き `lerobot-record`（初心者推奨）

record ツールはポリシーのチェックポイントを受け取れます。ポリシーがアームを動かしながら**評価データセット**を録ります — 10 Episode の評価：

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeedstudio123/eval_test123 \
  --dataset.single_task="Put the object from Point A into Point B" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

注意：

1. `--policy.path` は第 15 章のチェックポイントのパス。Hub にアップロード済みなら repo id（例：`${HF_USER}/act_so101_test`）でも構いません；
2. 評価の `dataset.repo_id` は慣例で `eval_` から始めます — 評価動画とデータは別保存されます（例：`seeedstudio123/eval_test123`）；
3. `File exists: '.../eval_xxxx'` が出たら、古い評価フォルダを先に削除して再実行；
4. カメラキー（`front`、`side`）はデータセット録画時と厳密に一致させてください（16.2 参照）。

### 方法 B：`lerobot-rollout` のリアルタイム実行

録画なしのライブ実行（SmolVLA / ACT などが対応）：

```bash
lerobot-rollout \
  --strategy.type=base \
  --policy.path=${HF_USER}/act_policy \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --display_data=true \
  --task="Your task description" \
  --duration=60
```

</section>

## 16.4 アクションチャンクの実行

<section id="chunk-execution" className="section-card">
  <div className="section-title">
    <span>実行</span>
    <h2>16.4 アクションチャンクの実行</h2>
  </div>

第 14 章のチャンク / ホライズンの区別がここで目に見えます：

- モデルは順伝播ごとに k=100 のアクションを予測；
- 先頭の一部だけ開ループ実行してからループは再観測；
- 古いチャンクの末尾と新しいチャンクの先頭の重なりは平滑化（時間的アンサンブル）され、動作は段階的ではなく連続に見えます。

アームが「一気に動いて止まる」— 0.5 秒ごとの強い停止 — 場合、有効ホライズンか推論速度が問題です：GPU 使用率、カメラ fps を確認し、非同期推論（ポリシーを別サーバプロセスで走らせる。考え方は第 4 ステージの展開章を参照）を検討してください。

</section>

## 16.5 安全：リミット・速度制限・非常停止

<section id="safety" className="section-card">
  <div className="section-title">
    <span>安全</span>
    <h2>16.5 安全：リミット・速度制限・非常停止</h2>
  </div>

- キャリブレーション由来の関節リミットがすべてのコマンドを制約します；
- 新しいチェックポイントの初回実行時は手を電源スイッチに — 電源切断が最速の停止です（サーボは脱力します）；
- `lerobot-record` 評価セッション中の ESC はエピソードをクリーンに停止します；
- 人・ケーブル・机の縁の近くでアームを無人運転にしないでください。

</section>

## 16.6 評価：成功率と所要時間

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>評価</span>
    <h2>16.6 評価：成功率と所要時間</h2>
  </div>

第 11 章の成功基準を使います — 客観判定可能で「なんとなく」ではない：

1. **成功を定義**：「物体が B 点のマーク内に収まっている」；
2. **開始を変える**：物体を 5 つのマーク点に置き、各点 N 回繰り返す；
3. **集計**：成功 / 総数 = 成功率。平均所要時間も記録 — 遅かったり試行錯誤しながら成功するポリシーも、何かを教えてくれます。

チェックポイントごとに残す結果表の例：

| 開始点 | 実行 | 成功 | 率 |
| :--- | :---: | :---: | :---: |
| 中央 | 4 | 4 | 100% |
| 上 | 4 | 3 | 75% |
| 左 | 4 | 2 | 50% |
| ... | | | |

</section>

## 16.7 汎化テスト

<section id="generalization" className="section-card">
  <div className="section-title">
    <span>汎化</span>
    <h2>16.7 汎化テスト</h2>
  </div>

分布内テスト合格後、意図的に境界を探ります（一度に 1 変化だけ）：

- 物体をマーク領域の少し外へ移動；
- 物体を変更（同カテゴリで別サイズ）；
- 環境光を変更（日光 vs 夜の卓上灯）。

データ分布内では優雅な劣化、分布外では硬い失敗が期待されます — 第 8 章の分布原理が実機で姿を現すところです。直したい汎化失敗はすべて、その状況をカバーするデータで答えます。訓練ステップの追加ではありません。

</section>

## 16.8 失敗タイプの分析

<section id="failures" className="section-card">
  <div className="section-title">
    <span>失敗</span>
    <h2>16.8 失敗タイプの分析</h2>
  </div>

失敗 Episode はすべて 4 バケットのどれかに分類します — バケットが修正方法を決めます：

| 失敗タイプ | 症状 | 修正 |
| :--- | :--- | :--- |
| **知覚失敗** | 物体の左 3 cm を掴み空振り | その位置 / 光照のカバーがデータに不足 → そこを補採 |
| **戦略失敗** | 常に間違った側から接近 | デモが不一致 → 1 つの戦略で再録 |
| **実行失敗** | 接近は正しいが物体が滑る | データの把持力 / 速度が不一致。グリッパのキャリブレーション確認 |
| **システム失敗** | アームがカクつく・停止・カメラ遅延 | モデルの問題ではない：fps、USB 帯域、キャリブレーション、サーボ温度 |

</section>

## 16.9 データイテレーション：失敗駆動のデータ収集

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>イテレーション</span>
    <h2>16.9 データイテレーション：失敗駆動のデータ収集</h2>
  </div>

ステージ 3 の本筋を締めるループ：

1. 評価（16.6）し失敗を分類（16.8）；
2. 知覚 / 戦略系の各失敗バケットに対し、まさにその状況をカバーするエピソードを 10〜20 本追加採集（第 12 章のフロー）；
3. 第 13 章のツールでデータセットに清洗・統合；
4. 再訓練（第 15 章）— 再開でも新規でも；
5. 再評価。成功率があなたの「完成」の定義を満たすまで繰り返す。

この失敗駆動ループこそ — どの 1 回の訓練でもなく — 実際のロボット学習プロジェクトの日常です。

</section>

</div>
