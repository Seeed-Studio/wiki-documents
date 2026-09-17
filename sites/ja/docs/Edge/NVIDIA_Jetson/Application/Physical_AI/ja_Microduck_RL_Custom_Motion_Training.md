---
description: テンプレートを選択し、フェーズと報酬を定義し、タスクを登録して学習し、ONNX をエクスポートすることで、カスタム Microduck モーションを作成します。
title: カスタム Microduck モーションを作成する
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/11/2026
  author: Dayu
createdAt: '2026-09-04'
url: https://wiki.seeedstudio.com/ja/ai_robotics_microduck_rl_custom_motion_training/
updatedAt: '2026-09-07'
---

# カスタム Microduck モーションを作成する

この章では、新しいモーションを構築するためのプロジェクトワークフローを紹介します。例としてフェーズベースの**おじぎ（Bow）**動作を使用しますが、同じ手順はうなずき、しゃがみ、ストレッチ、リカバリスキル、その他のロボットモーションにも適用できます。

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

このコントラクトを破ると、あるビューアでは動作しても、正しく切り替えやデプロイができないポリシーが生成される可能性があります。

## 最も近いテンプレートを選ぶ

| 望むモーション | 推奨テンプレート |
| --- | --- |
| 連続速度モーション | `microduck_velocity_env_cfg.py` |
| 特定状態からのリカバリ | `microduck_standup_env_cfg.py` |
| 2 状態コマンド遷移 | `microduck_sitstand_env_cfg.py` |
| 低速のフェーズベースモーション | `microduck_ground_pick_env_cfg.py` |
| 高速ダイナミックマヌーバ | `microduck_roulade_env_cfg.py` |
| ローラーモーション | `microduck_velocity_rollers_env_cfg.py` |

おじぎの場合、ground-pick タスクはすでにフェーズコマンド、下降、ホールド、上昇、ポーズトラッキング、リカバリを実装しているため、有用な出発点となります。

## テンプレートをコピーする

```bash
cd ~/microduck-jetson/microduck_rl

cp src/mjlab_microduck/tasks/microduck_ground_pick_env_cfg.py \
  src/mjlab_microduck/tasks/microduck_bow_env_cfg.py
```

編集を行う前に、タスクレジストリと共有 MDP 関数をバックアップします：

```bash
cp src/mjlab_microduck/tasks/__init__.py \
  src/mjlab_microduck/tasks/__init__.py.bak

cp src/mjlab_microduck/tasks/mdp.py \
  src/mjlab_microduck/tasks/mdp.py.bak
```

## モーションタイムラインを設計する

シンプルなおじぎでは、`0.0` から `1.0` までの正規化フェーズを使用できます：

| フェーズ | 挙動 |
| --- | --- |
| `0.00–0.25` | おじぎのポーズに向かって下降する |
| `0.25–0.55` | おじぎを保持する |
| `0.55–0.85` | ホームポーズに戻る |
| `0.85–1.00` | 直立状態を安定させる |

2 つのポーズを直接切り替えるのではなく、スムーズな補間を使用してください。ターゲットが急激に変化すると、高いアクションレート、衝撃、不安定な報酬勾配を引き起こすことがよくあります。

## ターゲットポーズを定義する

`microduck_bow_env_cfg.py` に関節名マッピングを作成します。控えめな角度から始め、学習前に Viewer で確認してください。

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

上記の値はあくまで出発点にすぎません。実際の関節名と符号は、ロボット構成で必ず確認してください。

## 報酬を構築する

有用なカスタムモーション用の報酬は、通常次の要素を組み合わせます：

- フェーズ条件付きのターゲットポーズトラッキング。
- おじぎ中に頭を下げるなどのタスク結果に基づく報酬。
- シーケンス終盤での直立およびリカバリ報酬。
- 足接地および左右方向の安定性項。
- 関節リミット、衝突、アクションレート、インパクトのペナルティ。

可能な限り、テンプレートの報酬と `src/mjlab_microduck/tasks/mdp.py` にある共有関数を再利用してください。望む計測が既に存在しない場合にのみ、新しい関数を追加します。

:::warning
重みを割り当てる前に符号規約を確認してください。すでに負のペナルティを返す関数は、プロジェクトの規約と一致する場合にのみ正の重みを使用するのが通常です。近くのタスク設定を確認し、TensorBoard で重み付けされたメトリクスを確認してください。
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

新しいモジュールで実装した呼び出し可能オブジェクト名を正確に使用し、現在のレジストリシグネチャを踏襲してください。

登録を確認します：

```bash
uv run --no-sync list-envs | grep Mjlab-Bow
```

## 学習前に確認する

ランダムポリシーを起動して、モデル、リセット状態、センサー、コマンドマネージャ、終端設定を確認します：

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --agent random \
  --num-envs 1 \
  --viewer native
```

不正な接触、スポーン時のめり込み、関節方向の誤り、即時終端、NaN 値、不可能なターゲットポーズがないか確認します。

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
3. **ロバスト性**：スポーン多様性、摩擦のランダム化、外力プッシュ、バックラッシュのバリアントを増やす。

長時間実行の例：

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

合計報酬だけでなく、メインのタスク報酬を注視してください。ポリシーが意図したモーションを一度も完了させないまま、正則化メトリクスだけを改善してしまうことがあります。

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

キーボードトリガーを追加するには、既存の sit/stand、ground-pick、roulade、kick のポリシースイッチングパターンを用いて `scripts/infer_policy.py` を拡張します。新しいポリシーが期待するコマンドスロットに書き込み、61 次元の観測レイアウトは変更せずに維持してください。

## 検証済みの例：前後スプリット

検証済みのカスタムタスクは、以前の片脚バランス実験よりも実現しやすい両脚支持モーションを使用します。左足は前方に、右足は後方に動き、両足は接地したままで、ロボットは通常の直立ポーズに戻ります。
previous one-leg balance experiment. The left foot moves forward, the right foot
moves backward, both feet remain grounded, and the robot returns to its normal
standing pose.

登録されたタスク ID は次のとおりです：

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### モーションタイムライン

このタスクは 6 秒周期のフェーズコマンドを使用します：

| 正規化フェーズ | 挙動 |
| --- | --- |
| `0.00–0.30` | 直立から前後スプリットへ移行する |
| `0.30–0.58` | 両足を接地したままスプリット姿勢を保持する |
| `0.58–0.78` | 直立ポーズに向けて脚を戻す |
| `0.78–1.00` | 両足支持のホームポーズで安定させる |

タイミング定数は
`src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py` に定義されています：

```python
SPLIT_PERIOD = 6.0
SPLIT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
TARGET_SAGITTAL_SEPARATION = 0.095
```

### ターゲットポーズを定義する

ターゲットは関節名で表現され、MuJoCo の順運動学で確認されています。ターゲットは 2 つの足サイトを水平に保ちながら、前後方向の足の符号付き分離量を約 `9.5 cm` 生じさせます：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
```python
FRONT_BACK_SPLIT_POSE = {
    "left_hip_pitch": -1.1865,
    "left_knee": -0.1386,
    "left_ankle": 1.0452,
    "right_hip_pitch": 0.0603,
    "right_knee": 0.4927,
    "right_ankle": 0.4293,
    "neck_pitch": 0.3491,
    "head_pitch": 0.3491,

```
これは重力を無効にした MuJoCo ウィンドウを開き、ウィンドウを閉じたときに最終的な名前付きポーズを出力します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0

uv run --no-sync python scripts/front_back_split_pose_editor.py

### スプリットモーション報酬を構築する

このタスクは、次のモーション固有の目的を組み合わせています：

| 報酬 | 目的 |
| --- | --- |
| `split_pose` | 直立からスプリットへの補間関節ポーズを追従する |
| `split_pose_l1` | 方向性のある関節誤差勾配を与える |
| `feet_grounded` | 両足を地形と接触させ続ける |
| `feet_flat` | 傾いた足サイトをペナルティする |
| `sagittal_separation` | 前後方向の符号付き足分離量を追従する |

このタスクはまた、直立、関節リミット、自己衝突、角速度、
| `feet_flat` | Penalize tilted foot sites |
| `sagittal_separation` | Track the signed front-to-back foot separation |

The task also retains upright, joint-limit, self-collision, angular-velocity,
action-rate、アクチュエータ、エンコーダ、摩擦、質量、慣性モーメント、および重心
のランダム化項目は Microduck 環境から継承されています。カスタム
`sagittal_separation` 項目はロボットのベース座標系で両足の位置を測定するため、
報酬とポーズは同じ座標系の規約を使用します。

### タスクを登録する

`Mjlab-FrontBackSplit-Flat-MicroDuck` は MJLab レジストリで使用されるタスク ID です。
これはファイル名ではなく、環境ファクトリへの引数として渡されません。

| 項目 | 位置 | 目的 |
| --- | --- | --- |
| 環境と RL の設定 | `src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py` | 目標ポーズ、フェーズタイミング、シーン、報酬、および PPO 設定を定義します |
| フェーズ分離報酬 | `src/mjlab_microduck/tasks/mdp.py` | ロボットのベース座標系における符号付き矢状面足分離を追跡します |
| タスク登録 | `src/mjlab_microduck/tasks/__init__.py` | タスク ID を環境および RL 設定にバインドします |
| ポーズエディタ | `scripts/front_back_split_pose_editor.py` | 検証済み MuJoCo 目標ポーズを開き、表示します |
| CLI エントリポイント | `uv run --no-sync train <task-id>` | 登録済みタスクを検索し、トレーニングを開始します |

登録を確認します：

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep FrontBackSplit
```

期待される出力：

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### スモークテストを実行する

64 個の環境と 5 イテレーションから始めます：

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

16 GB リファレンス Jetson の検証済みフルランでは、2048 個の環境を使用しました：

```bash
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000
```

完了したランでは、600 ステップのエピソードをフルに達成し、後半のトレーニングでは転倒による終了がゼロで、
スプリットポーズ、足接地、および分離報酬はほぼ最大値に達しました。
8 GB の Jetson Orin NX または Orin Nano では、`1024` 個の環境から開始し、
`jtop` でメモリを確認した後にのみ増やしてください。

### PT チェックポイントを可視化する

完了したチェックポイントを Native MuJoCo Viewer で使用します：

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync play Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --num-envs 1 \
  --viewer native
```

### ONNX ポリシーをエクスポートして実行する

チェックポイントをプロジェクトラッパーでエクスポートし、観測正規化器が
ONNX グラフに埋め込まれるようにします：

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --onnx-file "$PWD/models/exports/front_back_split/front_back_split_model_999.onnx" \
  --num-envs 1
```

キーボード操作の MuJoCo 推論デモで実行します：

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python3 scripts/infer_policy.py \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --front-back-split models/exports/front_back_split/front_back_split_model_999.onnx \
  --new-cmd-obs
```

`O` を押すと、6 秒間の前後スプリットサイクルを 1 回実行します。ポリシーはトレーニング中に使用されたものと同じ
コサイン／サインのフェーズコマンドを受け取り、その後、自動的にスタンディングポリシーに制御が戻ります。歩行ポリシーも
指定されている場合、非ゼロの速度コマンドが有効になるとデモは歩行に戻ります。

旧来の `--one-leg-balance` オプションと片脚タスクファイルは、現在のリポジトリには含まれていません。
この検証済みモーションには `--front-back-split` を使用してください。

## 開発チェックリスト

- [ ] 観測レイアウトは 61 次元のままである。
- [ ] ポリシー出力は 14 次元のままである。
- [ ] 受動関節はアクションおよびサーボ観測から除外されている。
- [ ] BAM 起動イベントとドメインランダム化は、必要な箇所で有効のままである。
- [ ] タスクが `list-envs` に表示される。
- [ ] ランダムポリシー Viewer による検査が成功する。
- [ ] 64 環境のスモークテストが成功する。
- [ ] 主要タスク指標が TensorBoard 上で改善している。
- [ ] 最終 PT チェックポイントが MuJoCo 上で正しく動作する。
- [ ] ONNX はプロジェクトスクリプトでエクスポートされ、ロボット展開前にリハーサルされている。

<div align="center">
  <a href="/ja/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>デモホームに戻る</a>
  </div>

