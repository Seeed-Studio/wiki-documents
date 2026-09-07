---
description: テンプレートの選択、フェーズと報酬の定義、タスクの登録、学習、ONNX へのエクスポートによって、カスタム Microduck モーションタスクを作成します。
title: カスタム Microduck モーションを作成する
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# カスタム Microduck モーションを作成する

この章では、新しいモーションを構築するためのプロジェクトワークフローを紹介します。例としてフェーズベースの **おじぎ（Bow）** 動作を使用しますが、同じ手順はうなずき、しゃがみ、ストレッチ、リカバリスキル、その他のロボットモーションにも適用できます。

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/ja/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> デモホーム</a>
  <a href="/ja/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> 公式モーション</a>
</div>

## ポリシーコントラクトを理解する

ホットスワップ可能なすべての Microduck ポリシーは、同じインターフェースを共有します：

- **61 次元のアクター観測**：48 個の固有感覚値に、13 次元のコマンドブロック `[twist(3), head_pose(4), body_pose(6)]` を加えたもの。
- アクティブなサーボ関節用の **14 次元のアクション出力**。
- 未使用のコマンドスロットも存在し続け、ゼロ埋めされます。
- 受動ホイールおよびバックラッシュ関節は `passive_*` という命名規則を使用し、駆動関節として選択してはいけません。
- 関節 ID はハードコードせず、プロジェクトのヘルパーによって解決する必要があります。
- ONNX エクスポートは、観測正規化器が含まれるように必ず `scripts/export.py` を経由しなければなりません。

このコントラクトを破ると、ある Viewer では動作しても、正しく切り替えやデプロイができないポリシーが生成される可能性があります。

## 最も近いテンプレートを選ぶ

| 望むモーション | 推奨テンプレート |
|---|---|
| 連続速度モーション | `microduck_velocity_env_cfg.py` |
| 特定状態からのリカバリ | `microduck_standup_env_cfg.py` |
| 2 状態コマンド遷移 | `microduck_sitstand_env_cfg.py` |
| 低速のフェーズベースモーション | `microduck_ground_pick_env_cfg.py` |
| 高速ダイナミックマヌーバ | `microduck_roulade_env_cfg.py` |
| ローラーモーション | `microduck_velocity_rollers_env_cfg.py` |

おじぎの場合、ground-pick タスクはすでにフェーズコマンド、下降、ホールド、上昇、ポーズトラッキング、リカバリを実装しているため、有用な出発点になります。

## テンプレートをコピーする

```bash
cd ~/microduck-jetson/microduck_rl

cp src/mjlab_microduck/tasks/microduck_ground_pick_env_cfg.py \
  src/mjlab_microduck/tasks/microduck_bow_env_cfg.py
```

編集する前に、タスクレジストリと共有 MDP 関数をバックアップします：

```bash
cp src/mjlab_microduck/tasks/__init__.py \
  src/mjlab_microduck/tasks/__init__.py.bak

cp src/mjlab_microduck/tasks/mdp.py \
  src/mjlab_microduck/tasks/mdp.py.bak
```

## モーションタイムラインを設計する

シンプルなおじぎでは、`0.0` から `1.0` までの正規化フェーズを使用できます：

| フェーズ | 挙動 |
|---|---|
| `0.00–0.25` | おじぎのポーズに向かって下降する |
| `0.25–0.55` | おじぎを保持する |
| `0.55–0.85` | ホームポーズに戻る |
| `0.85–1.00` | 直立状態を安定させる |

2 つのポーズを直接切り替えるのではなく、スムーズな補間を使用してください。ターゲットが急激に変化すると、高いアクションレート、衝撃、不安定な報酬勾配を引き起こすことがよくあります。

## ターゲットポーズを定義する

`microduck_bow_env_cfg.py` に関節名のマッピングを作成します。控えめな角度から始め、学習前に Viewer で確認してください。

```python
BOW_POSE = {
    "left_hip_pitch": -0.20,
    "left_knee": 0.30,
    "left_ankle": -0.10,
    "neck_pitch": 0.35,
    "head_pitch": 0.20,
    "right_hip_pitch": -0.20,
    "right_knee": 0.30,
    "right_ankle": -0.10,
}
```

上記の値はあくまで出発点にすぎません。実際の関節名と符号は、ロボット設定で必ず確認してください。

## 報酬を構築する

有用なカスタムモーション報酬は、通常次の要素を組み合わせます：

- フェーズ条件付きのターゲットポーズトラッキング。
- おじぎ中に頭を下げるなどのタスク結果に基づく報酬。
- シーケンス終盤での直立およびリカバリ報酬。
- 足接触および横方向安定性の項。
- 関節リミット、衝突、アクションレート、衝撃に対するペナルティ。

可能な限り、テンプレートの報酬と `src/mjlab_microduck/tasks/mdp.py` にある共有関数を再利用してください。望む計測が既に存在しない場合にのみ、新しい関数を追加します。

:::warning
重みを割り当てる前に符号規約を確認してください。すでに負のペナルティを返す関数は、プロジェクトの規約と一致する場合にのみ通常は正の重みを使用します。近くのタスク設定を確認し、TensorBoard で重み付けされた指標を確認してください。
:::

## 新しいタスクを登録する

`src/mjlab_microduck/tasks/__init__.py` で新しい設定をインポートし、既存のエントリに従って新しい ID を登録します：

```python
register_mjlab_task(
    task_id="Mjlab-Bow-Flat-MicroDuck",
    env_cfg=microduck_bow_env_cfg,
    play_env_cfg=microduck_bow_play_env_cfg,
    rl_cfg=microduck_bow_rl_cfg,
)
```

新しいモジュールで実装した呼び出し可能名を正確に使用し、現在のレジストリシグネチャを踏襲してください。

登録を確認します：

```bash
uv run --no-sync list-envs | grep Mjlab-Bow
```

## 学習前に確認する

ランダムポリシーを起動して、モデル、リセット状態、センサー、コマンドマネージャ、終了条件設定を確認します：

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --agent random \
  --num-envs 1 \
  --viewer native
```

不正な接触、スポーン時のめり込み、関節方向の誤り、即時終了、NaN 値、不可能なターゲットポーズがないか確認します。

## スモークテストを実行する

```bash
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

例外や NaN が発生せずにこれが完了してから、長時間の学習を開始してください。

## 段階的に学習する

実用的なカリキュラムは次のとおりです：

1. **モーション探索**：容易なスポーン状態、広いポーズ報酬、最小限の外乱。
2. **モーション完遂**：ホールドとリカバリ項を強化し、結果ベースの報酬を追加する。
3. **ロバスト性**：スポーン多様性、摩擦のランダム化、外力、バックラッシュのバリアントを増やす。

長時間実行の例：

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

合計報酬だけでなく、メインタスク報酬を注視してください。ポリシーが正則化指標を改善しても、意図したモーションを一度も完了しない場合があります。

## 可視化とエクスポート

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

承認したチェックポイントをエクスポートします：

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file bow.onnx
```

キーボードトリガーを追加するには、既存の sit/stand、ground-pick、roulade、kick のポリシースイッチングパターンを用いて `scripts/infer_policy.py` を拡張します。新しいポリシーが想定するコマンドスロットに書き込み、61 次元の観測レイアウトは変更しないでください。

## 開発チェックリスト

- [ ] 観測レイアウトは 61 次元のままである。
- [ ] ポリシー出力は 14 次元のままである。
- [ ] 受動関節はアクションおよびサーボ観測から除外されている。
- [ ] 必要な箇所で BAM 起動イベントとドメインランダム化が有効のままである。
- [ ] タスクが `list-envs` に表示される。
- [ ] ランダムポリシーによる Viewer 検査が成功する。
- [ ] 64 環境のスモークテストが成功する。
- [ ] TensorBoard でメインタスク指標が改善している。
- [ ] 最終的な PT チェックポイントが MuJoCo 上で正しく動作する。
- [ ] ONNX がプロジェクトスクリプトでエクスポートされ、ロボットデプロイ前にリハーサルされている。

<div align="center">
  <a href="/ja/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>デモホームに戻る</a>
</div>
