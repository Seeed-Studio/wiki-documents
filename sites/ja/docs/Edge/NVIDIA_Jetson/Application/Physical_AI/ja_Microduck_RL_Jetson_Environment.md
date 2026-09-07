---
description: JetPack 7.2 を準備し、CUDA 対応の Microduck 強化学習環境を Jetson Orin NX 上にデプロイします。
title: Jetson 上に Microduck RL 環境をデプロイする
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_jetson_environment
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Jetson 上に Microduck RL 環境をデプロイする

この章では、Jetson システムの準備、プロジェクト環境のインストール、ディレクトリ構成の説明、および PPO トレーニングが CUDA 上で実行できることの検証を行います。

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/ja/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> デモ ホーム</a>
  <a href="/ja/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}>次へ：公式モーション <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## ハードウェアとソフトウェア

このデモでは、次のプラットフォームで検証を行いました：

| 項目 | バージョン |
|---|---|
| デバイス | Jetson Orin NX 16GB 搭載 Seeed reComputer |
| OS | Ubuntu 24.04 LTS, aarch64 |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| システム CUDA | 13.2 |
| Python | 3.12 |
| PyTorch | 2.9.1+cu130 |
| MuJoCo | 3.10.0 |
| Warp | 1.12.0 |

少なくとも 25GB の空き容量を持つ NVMe ストレージを使用してください。アクティブクーリング、安定した電源供給、および信頼性の高いネットワーク接続を推奨します。

:::warning
JetPack が提供する CUDA ドライバや L4T パッケージを独自に置き換えないでください。Python プロジェクトは `.venv` 内に分離されており、システムの GPU スタックは JetPack によって管理されたままになります。
:::

## プロジェクトディレクトリ

```text
~/microduck-jetson/
├── deploy_microduck_jetson.sh
├── microduck_rl/
│   ├── src/mjlab_microduck/tasks/
│   ├── scripts/
│   ├── pretrained/pollen-robotics/
│   ├── models/checkpoints/
│   └── logs/rsl_rl/
├── microduck_jetson_startup.md
├── microduck_jetson_training_guide.md
└── microduck_custom_action_training.md
```

`.venv` ディレクトリは Jetson 上でローカルに作成され、意図的に Git リポジトリには含めていません。

## リポジトリをクローンする

```bash
mkdir -p ~/microduck-jetson
cd ~/microduck-jetson

git clone -b develop https://github.com/jjjadand/microduck_rl.git
cd microduck_rl
```

## デプロイスクリプトを実行する

```bash
cd ~/microduck-jetson/microduck_rl

SUDO_PASSWORD=<JETSON_PASSWORD> \
TARGET_DIR=$HOME/microduck-jetson/microduck_rl \
bash deploy_microduck_jetson.sh
```

このスクリプトは、ビルドおよび可視化用の依存関係をインストールし、`uv` をインストールし、Python 3.12 の `.venv` を作成し、ロックされたプロジェクト依存関係を同期し、互換性のある CUDA PyTorch ホイールをインストールし、CUDA 検証を実行します。

:::note
環境変数を通じてパスワードを渡す方法は、この再現可能なラボ環境では便利です。共有デバイスや本番デバイスでは、スクリプトを確認し、代わりに対話的に特権コマンドを実行することを推奨します。
:::

## 環境に入る

すべてのプロジェクトコマンドは、リポジトリのルートから実行する必要があります：

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
```

このガイド内のコマンドには `uv run --no-sync` を使用してください。これにより、Jetson の CUDA PyTorch インストールを置き換えてしまうような、意図しない依存関係の再同期を防ぎます。

## CUDA を検証する

```bash
uv run --no-sync python3 - <<'PY'
import torch

print("PyTorch:", torch.__version__)
print("CUDA runtime:", torch.version.cuda)
print("CUDA available:", torch.cuda.is_available())
print("GPU:", torch.cuda.get_device_name(0))

left = torch.randn(512, 512, device="cuda")
right = torch.randn(512, 512, device="cuda")
result = left @ right
torch.cuda.synchronize()
print("CUDA matmul:", result.device)
PY
```

期待される結果には、`CUDA available: True`、Orin GPU 名、および `CUDA matmul: cuda:0` が含まれます。

## トレーニングのスモークテストを実行する

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

正常に実行されると、`logs/rsl_rl/velocity/` 配下に、設定ファイル、TensorBoard イベント、および 1 つ以上の `.pt` チェックポイントを含むディレクトリが作成されます。

MuJoCo とトレーニングマネージャが起動すると、ターミナルにはアクティブな終端条件、報酬、カリキュラム、アクタ、およびクリティックの設定が表示されます：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/start-mujoco.png" alt="ターミナルで起動中の Microduck MuJoCo とトレーニングマネージャ" />
</div>

ロールアウト収集が始まると、各学習イテレーションでスループット、報酬項目、エピソード長、カリキュラム値、および終端統計がレポートされます：

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_training.png" alt="Jetson 上での Microduck PPO トレーニングイテレーションのメトリクス" />
</div>

## 4096 個の並列トレーニング環境を実行する

このデモで使用した本番トレーニング実行では、バックエンドが **4096 個の独立した Microduck 環境** を並列にシミュレートします：

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard
```

`jtop` を使用すると、4096 環境のトレーニングプロセス実行中の GPU 負荷とデバイス状態を確認できます：

<div align="center">
  <img width="760" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_train_jtop.png" alt="4096 個の Microduck 環境をトレーニング中の Jetson jtop 出力" />
</div>

メモリが不足する場合は、`4096 → 2048 → 1024 → 512` のように環境数を減らしてください。

## トレーニング環境を可視化する

**バックエンドでは依然として 4096 環境すべてがトレーニングされています。** Viewer の設定は、検査のためにレンダリングされるロボット数のみを制御し、`--env.scene.num-envs` を変更しない限り、バックエンドのトレーニングバッチは減少しません。

### Microduck を 1 体レンダリングする

ロボットを 1 体だけレンダリングするのが、トレーニング中の姿勢、接触、歩容を確認する最も分かりやすい方法です：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env_one.png" alt="バックエンドが 4096 環境をトレーニングしている間に 1 体の Microduck を可視化した様子" />
</div>

### 複数の Microduck をレンダリングする

多数のロボットをレンダリングすると、並列環境という概念が視覚的に分かりやすくなります。Viewer に表示されるのは一部のみですが、バックエンドの本番実行には依然として 4096 環境が含まれています：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env-num_many.png" alt="バックエンドが 4096 環境をトレーニングしている間に複数の Microduck を可視化した様子" />
</div>

Viewer は短時間の検査用ランを想定しています。長時間のトレーニングランでは、通常、連続的な描画オーバーヘッドを避けるためにヘッドレス EGL レンダリングを使用します。

## 任意のパフォーマンス設定

電力モードを選択する前に、サポートされているモードを確認します：

```bash
sudo nvpmodel -q
sudo nvpmodel
```

トレーニング中にデバイスをモニタリングします：

```bash
tegrastats
```

別の Jetson モデルから電力モード番号をそのままコピーしないでください。使用しているデバイスに対してサポートされている高パフォーマンスモードを選択してください。

## 次のステップ

<div align="center">
  <a href="/ja/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(0,168,107,.25)'}}>公式モーションをトレーニングして実行する →</a>
</div>
