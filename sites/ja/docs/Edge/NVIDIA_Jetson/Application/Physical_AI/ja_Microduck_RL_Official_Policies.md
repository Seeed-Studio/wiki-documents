---
description: 公式 Microduck タスクを学習し、PT チェックポイントを可視化し、Jetson 上の MuJoCo でキーボード操作によるマルチポリシー ONNX 推論を実行します。
title: 公式 Microduck モーションの学習と実行
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_official_policies
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# 公式 Microduck モーションの学習と実行

この章では、最短の学習および推論フローを扱います。利用可能なタスクの確認、公式タスクの学習、`.pt` チェックポイントの可視化、提供されている ONNX ポリシーの実行、そしてキーボードでシミュレーションロボットを操作する方法を説明します。

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/ja/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> デモホーム</a>
  <a href="/ja/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#3182ce', color:'#fff', fontWeight:'700', textDecoration:'none'}}>次へ：カスタムモーション <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## 利用可能なタスクファミリー

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep MicroDuck
```

| モーション | タスク ID |
|---|---|
| 歩行 | `Mjlab-Velocity-Flat-MicroDuck` |
| 歩行と転倒復帰 | `Mjlab-VelStand-Flat-MicroDuck` |
| 床からの立ち上がり | `Mjlab-StandUp-Flat-MicroDuck` |
| 着座と起立 | `Mjlab-SitStand-Flat-MicroDuck` |
| 地面からのピック | `Mjlab-GroundPick-Flat-MicroDuck` |
| 前転 | `Mjlab-Roulade-Flat-MicroDuck` |
| ボールキック | `Mjlab-BallKick-Flat-MicroDuck` |
| ローラー移動 | `Mjlab-Velocity-Flat-MicroDuck-Rollers` |

## 歩行ポリシーを学習する

長時間の実行の前には、まず 5 イテレーションのスモークテストから始めてください：

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

より長時間の実行を行う場合：

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard
```

メモリと熱設計に余裕がある場合にのみ、環境数を増やしてください。実用的なフォールバックの順序は `4096 → 2048 → 1024 → 512` です。

## PT チェックポイントを可視化する

チェックポイントを探します：

```bash
find logs/rsl_rl -type f -name 'model_*.pt' | sort
```

### SSH 経由のブラウザビューア

```bash
export MUJOCO_GL=egl

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer viser
```

同じネットワーク上のコンピュータから `http://<JETSON_IP>:8080` を開きます。

### Jetson デスクトップ上でのネイティブビューア

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

## 公式マルチポリシー ONNX デモを実行する

このリポジトリには、`pretrained/pollen-robotics/` に 9 個の公式 ONNX ポリシーが含まれています。

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync python3 scripts/infer_policy.py \
  --walking pretrained/pollen-robotics/alpha_walking.onnx \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --sitstand pretrained/pollen-robotics/alpha_sitstand.onnx \
  --ground-pick pretrained/pollen-robotics/alpha_ground_pick.onnx \
  --roulade pretrained/pollen-robotics/roulade.onnx \
  --kick-left pretrained/pollen-robotics/ball_kick_left.onnx \
  --kick-right pretrained/pollen-robotics/ball_kick_right.onnx \
  --new-cmd-obs
```

### キーボード操作

| キー | コマンド |
|---|---|
| 矢印キー | 前進・後退・横方向の速度 |
| `A` / `E` | 左旋回 / 右旋回 |
| `G` | 地面からのピック動作 |
| `Y` | 着座 / 起立の切り替え |
| `R` | 前転 |
| `K` / `L` | 左 / 右キック |
| `Space` | 速度コマンドのクリア |
| `Q` | 終了 |

## 推論結果

以下の GIF は、Jetson 上の MuJoCo から直接キャプチャした ONNX 推論結果を示しています。

### 歩行

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/walking-loop.gif" alt="MuJoCo における Microduck 歩行ポリシー推論ループ" />
</div>

歩行ポリシーは、キーボードからの速度および旋回コマンドを継続的に追従します。

### ローリング

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/rolling.gif" alt="MuJoCo における Microduck ローリングポリシー推論" />
</div>

前転ポリシーに切り替えるには `R` を押します。

### ボールキック

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/kick.gif" alt="MuJoCo における Microduck のキーボードトリガー式ボールキックポリシー推論" />
</div>

ボールシーンで `K` または `L` を押すと、左足または右足のキックポリシーがトリガーされます。

## PT と ONNX は用途が異なります

- `.pt` チェックポイントには、アクター、クリティック、オプティマイザ、正規化器、および学習状態が含まれます。これらは学習の再開や `play` 評価に使用します。
- `.onnx` にはデプロイ可能な推論グラフが含まれます。公式 ONNX ファイルには PPO 学習状態は含まれておらず、再開可能なチェックポイントへ戻すことはできません。
- `models/checkpoints/` 配下の PT ファイルは、このデモに同梱されている Jetson 上での歩行学習結果であり、Pollen Robotics による公式 PT リリースではありません。

## 自分の ONNX をエクスポートする

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file walking_custom.onnx
```

必ず `scripts/export.py` を使用してください。プロジェクトのエクスポータは観測正規化器を ONNX グラフに焼き込んでおり、これは正しいランタイム動作に必須です。

## 次のステップ

<div align="center">
  <a href="/ja/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #3182ce, #205493)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(49,130,206,.25)'}}>カスタムモーションを作成 →</a>
</div>
