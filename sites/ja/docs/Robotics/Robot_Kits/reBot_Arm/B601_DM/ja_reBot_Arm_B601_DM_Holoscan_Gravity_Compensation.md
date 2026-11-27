---
description: Ubuntu 24.04 上で NVIDIA の Holoscan 5 のサンプルを実行し、reBot Arm B601-DM の重力補償を検証し、Nsight Systems で制御ループを計測します。
title: reBot-DM Holoscan5 重力補償
sidebar_label: reBot-DM Holoscan5 重力補償
keywords:
  - reBot Arm B601-DM
  - NVIDIA Holoscan
  - 重力補償
  - Pinocchio
slug: /rebot_b601_dm_holoscan_gravity_compensation
sku: 100065783, 100095532
last_update:
  date: 2026-11-25
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/ja/rebot_b601_dm_holoscan_gravity_compensation/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p className="text--center">
  <img src="https://img.shields.io/badge/Holoscan-5.0.0-4C771B.svg?logo=nvidia&amp;logoColor=white" alt="NVIDIA Holoscan 5.0.0" width={115} height={20} />{' '}
  <img src="https://img.shields.io/badge/Target%20Rate-400%20Hz-0076A8.svg" alt="400 Hz control-loop target rate" width={124} height={20} />{' '}
  <img src="https://img.shields.io/badge/Dynamics-Pinocchio-8857A8.svg" alt="Pinocchio dynamics" width={124} height={20} />{' '}
  <img src="https://img.shields.io/badge/Profiling-Nsight%20Systems-38556F.svg" alt="Nsight Systems latency profiling" width={152} height={20} />
</p>

<p align="center">
  <strong>400 Hz ターゲットレート · Pinocchio ダイナミクス · Nsight Systems レイテンシ解析</strong>
</p>

このチュートリアルでは、NVIDIA Holoscan 5 を使用して 3 段階の制御ループを実行します。ループは現在の関節角度を読み取り、Pinocchio とロボットモデルを用いて重力を打ち消すのに必要なトルクを計算し、そのコマンドをモーターに送信します。Holoscan はループを 400 Hz のターゲットレートでスケジューリングし、スレッド間のハンドオフによるレイテンシとジッタを減らすため、3 段階すべてを 1 つのスレッド上で実行します。

重力補償を有効にすると、モーターは姿勢の変化に応じてトルクを調整し、**reBot Arm B601-DM** の重量を支えます。その結果、手でアームを案内するのに必要な力が小さくなります。 [NVIDIA Technical Blog](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/)

## 前提条件

| 項目 | 要件 |
| --- | --- |
| ロボットアーム | Damiao モーターとグリッパーを搭載した reBot Arm B601-DM |
| 接続 | B601-DM 電源、USB-to-CAN コントローラボード、および USB データケーブル |
| ホスト | ソースと依存関係をダウンロードするためのインターネット接続を備えた Ubuntu 24.04 x86_64 |
| ランタイム | Python 3.12、Holoscan 5.0.0、および CUDA 13 と互換性のある NVIDIA ドライバー |

アームがまだ組み立てられていない場合は、クイックスタートに従ってベースを固定し、配線を完了し、モーター ID と関節のゼロ位置を確認してください。電源や CAN ハーネスを接続または取り外しする前には、必ず電源を切ってください。 [B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)

ホスト側のシステムとドライバーを確認します。

```bash
uname -m
getconf GNU_LIBC_VERSION
nvidia-smi
```

`x86_64`、glibc 2.39 以降、および GPU が列挙された `nvidia-smi` の出力が得られることを確認します。NVIDIA は Holoscan 5 用に CUDA 13 と互換性のある R580 以降のドライバーを指定しています。ドライバーが存在しない、または古すぎる場合は、Ubuntu の「追加ドライバー」ユーティリティか `sudo ubuntu-drivers list` を使用して、ハードウェアに適したドライバーブランチを探してください。Ubuntu のインストールガイドに従ってインストールし、再起動してから再度確認します。Jetson の場合は、まず対応する JetPack SDK バージョンを確認してください。 [Holoscan SDK インストール要件](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Ubuntu での NVIDIA ドライバーのインストール](https://ubuntu.com/server/docs/how-to/graphics/install-nvidia-drivers/)

:::tip

Ubuntu 22.04 には glibc 2.35 が同梱されています。Conda で Python 3.12 をインストールしていても、Holoscan 5 は glibc の要件を満たすホストまたはコンテナ上で実行してください。このガイドのコマンドは、Ubuntu 24.04 のネイティブな Python 環境を使用します。 [Holoscan wheel の要件](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

:::

## 重力補償を実行する

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 環境をセットアップし、制御グラフを確認する

Bash で NVIDIA のサンプルをダウンロードします。以下のコマンド、設定、テストがソースと一致するよう、固定されたリビジョンを使用します。

```bash
sudo apt update
sudo apt install -y ca-certificates git nano python3.12-venv libgl1 libglib2.0-0t64 libgomp1 psmisc

git clone https://github.com/nvidia-holoscan/holoscan-tutorials.git
cd holoscan-tutorials
git checkout --detach e79b1a662f358dca734d8a4426c0aeb60699e264
cd tutorials/rebot-gravity-compensation
```

Python 3.12 環境を作成する方法を 1 つ選びます。

<Tabs>
<TabItem value="venv" label="Python venv">

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

</TabItem>
<TabItem value="conda" label="Conda">

すでに Conda を使用している場合は、専用の環境を作成します。別の環境名を選んでもかまいません。 [Conda インストールガイド](https://docs.conda.io/projects/conda/en/stable/user-guide/install/linux.html)

```bash
conda create -n holoscan-rebot python=3.12 pip -y
conda activate holoscan-rebot
```

</TabItem>
</Tabs>

環境を有効にした状態で、サンプルのディレクトリ内にとどまります。モデルをダウンロードし、サンプルの依存関係をインストールします。

```bash
python --version
python scripts/fetch-urdf.py
test -s urdf/DM/urdf/ReBot_Arm_DM.urdf

python -m pip install --only-binary=:all: -r requirements-python.txt \
  'holoscan==5.0.0' 'nvidia-cuda-runtime==13.0.96'
python -m pip check
```

ダウンロードスクリプトは、固定された Seeed Studio のリビジョンから URDF を取得し、ソースファイルを検証し、ダイナミクスデータを保持します。requirements ファイルは Pinocchio 3.9.0 と motorbridge 0.5.0 をインストールします。Pinocchio の pip パッケージ名は `pin` で、Python の import 名は `pinocchio` です。 [公式サンプルのソースと依存関係](https://github.com/nvidia-holoscan/holoscan-tutorials/tree/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation)

制御グラフは CPU 上で動作しますが、Holoscan を import すると CUDA ランタイムも読み込まれます。これらのコマンドは、wheel に含まれる共有ライブラリを現在のターミナルのライブラリ検索パスに追加します。新しいターミナルを開くたびに、サンプルディレクトリに戻り、環境を再度有効化し、これらのコマンドを再実行してください。 [Holoscan wheel のランタイムライブラリ](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

```bash
CUDA_LIB_DIR="$(python - <<'PY'
from importlib.metadata import distribution

runtime = distribution("nvidia-cuda-runtime")
library = next(file for file in runtime.files if file.name == "libcudart.so.13")
print(runtime.locate_file(library).parent)
PY
)"
test -n "$CUDA_LIB_DIR" && export LD_LIBRARY_PATH="$CUDA_LIB_DIR${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
python python/gravity_compensation.py --help
```

アームを接続する前に、モデルを読み込み、制御グラフをコンパイルできます。このチェックでは、シリアルポートを開いたりモーターを有効にしたりすることなく、モデルを初期化しグラフをコンパイルします。

```bash
PYTHONPATH=python python - <<'PY'
import holoscan as hsdk
from gravity_compensation import build_graph, load_configuration
from rebot_gravity import GravityCompensation
from rebot_robot import Robot

config, params = load_configuration("config/rebotarm_dm.yaml")
controller = GravityCompensation(config, params)
controller.initialize()
plan = hsdk.compile(build_graph(Robot(config), controller), hsdk.CompileOptions())
if not plan:
    raise SystemExit(plan.summary())
print(f"URDF loaded: nq={controller.model.nq}, nv={controller.model.nv}")
print("Control graph compiled successfully.")
PY
```

`nq=8, nv=8` と、コンパイル成功のメッセージが表示されることを確認します。モデルには 6 つのアーム座標と 2 つのフィンガー座標があります。実機のアームには 7 つのモーターがあります。より包括的なソフトウェア回帰チェックとして、このガイドの後半でフェイクモーターのテストを実行してください。

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### アームを接続し、シリアルポートを設定する

ベースがしっかり固定されていることを確認し、USB データケーブルを接続してアームの電源を入れます。次のコマンドを実行して、シリアルデバイスへの読み書きアクセスを付与します。

```bash
sudo chmod 666 /dev/ttyACM*
```

公式設定をコピーし、コピー内の `channel` を編集します。サンプルのパスを実際のシリアルポートに置き換えてください。

```bash
cp config/rebotarm_dm.yaml config/rebotarm_local.yaml
nano config/rebotarm_local.yaml
```

```yaml
channel: "/dev/ttyACM0"
```

| 設定 | 公式サンプル値 |
| --- | --- |
| モーター ID とフィードバック ID | それぞれ 1–7 および 17–23（10 進数） |
| モーターモデル | `joint1`～`joint3` は `4340P`、`joint4`～`joint6` とグリッパーは `4310` |
| シリアルボーレート | 921600 |
| アームゲイン | `kp: 1.5` および `kd: 1.0` |
| 重力トルクスケールと関節方向 | 6 つのアーム関節すべてで、`tau_scale` と `joint_direction` はどちらもデフォルトで 1 |
| コマンドウォッチドッグ | 100 ms |

最初の実行では、公式のゲイン、方向、スケーリングをそのまま使用してください。モーター ID、取り付け方向、関節のゼロ位置が実機と異なる場合は、まずクイックスタートと照らし合わせて確認してください。ベースの向きを変更したりペイロードを追加したりする場合は、その変更を反映したダイナミクスモデルを使用してください。 [公式モーター設定](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/config/rebotarm_dm.yaml)

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### コントローラーを開始・検証・停止する

:::warning

開始コマンドは実機のモーターを有効にします。余分なペイロードを取り外し、可動範囲を確保し、トルクが失われてもアームが自重で支えられる姿勢にしてください。現場で素早く電源を切れる人がいることを確認してください。障害が発生すると、コントローラーが支持トルクを解除する場合もあります。

:::

同じ環境でコマンドを実行します。コントローラがシリアルポートに排他的にアクセスできることを確認してください。

```bash
unset MOTORBRIDGE_LIB
python python/gravity_compensation.py config/rebotarm_local.yaml
```

このプログラムはモデル、現在の姿勢、モータ状態を確認し、その後ウォッチドッグを設定してコマンド送信を開始します。以下のメッセージが表示されたら、アームをゆっくりと小さく動かしてください。自重を支え、手の動きに追従することを確認します。明らかに押し返したり、落下したり、振動したり、モータエラーを報告した場合は、アームを支え、トラブルシューティングの前にコントローラを停止してください。

```text
Gravity compensation active.
```

**通常終了するには、まずアームを支えられた位置に戻し、その後 `Ctrl+C` を押してください。** プログラムは終了時にモータを無効化しようとしますが、これにより支持トルクが解除されます。正常に終了すると、ターミナルには停止メッセージとコマンドバッチ数が表示されます。

</div>
</section>
</div>

## 制御ループの動作

| オペレータ | 役割 |
| --- | --- |
| `joint_feedback` | 2.5 ms 間隔で実行され、関節位置、速度、およびモータステータスを読み取ります |
| `gravity` | URDF と現在の関節角度からフィードフォワード重力トルクを計算し、剛性および減衰パラメータを生成します |
| `motor_commands` | コマンドを検証し、motorbridge を通じて 7 つすべてのモータに MIT 制御コマンドを送信します |

3 つのオペレータは、同じ Holoscan の `control` パーティション内で順番に実行されます。オペレータ間の各キューには 1 件の保留メッセージが保持されます。Pinocchio は重力項を `g(q) = RNEA(q, 0, 0)` として計算します。スケジューリング目標は 400 Hz です。実際の反復間隔を測定するには Nsight Systems を使用してください。

ウォッチドッグは期限切れのコマンドバッチをチェックします。motorbridge はキャッシュされたフィードバックを返します。コマンド送信が継続できる状態でモータフィードバックが停止した場合、このサンプルは古い値を読み続ける可能性があります。ハードウェアテスト中は、現場で誰かがアームを監視してください。[公式技術ガイド](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#startup-watchdogs-and-feedback)

## 任意のフェイクモータテスト

2 つの公式テストスイートは、重力トルク、制御グラフ、フォルト発生時のシャットダウン、およびデカルト点保持をカバーします。以下のコマンドを実行する前に、ハードウェアコントローラを停止してください。これらのテストではアームの USB ケーブルを抜いてもかまいません。環境を有効にした状態で、サンプルディレクトリから実行します。これらのコマンドは、C++ SDK を必要とせずにテストで使用されるフェイクモータライブラリをビルドします。

```bash
sudo apt install -y curl g++
mkdir -p build/wiki-test

curl -fL \
  https://raw.githubusercontent.com/motorbridge/motorbridge/082cbb8c36dfdc8fbf9baa4cc02c5992ab0dc2ad/motor_abi/include/motor_abi.h \
  -o build/wiki-test/motor_abi.h

g++ -std=c++20 -shared -fPIC -I build/wiki-test tests/fake_motor_abi.cpp \
  -o build/wiki-test/librebot_fake_motor_abi.so

REBOT_FAKE_ABI="$PWD/build/wiki-test/librebot_fake_motor_abi.so"
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_gravity.py
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_cartesian.py
```

固定リビジョンでは、最初のスイートで 20 件、2 番目のスイートで 15 件のテストが実行され、それぞれが `OK` で終了することを想定してください。フォルトインジェクションテストは、想定どおりのエラーログを出力します。これらのテストに合格すると、ソフトウェア経路が検証されます。物理アーム上で配線、モータの回転方向、関節ゼロ位置、および挙動を確認するには、手順 2 と 3 に従ってください。

## 任意の CPU ピニング比較（Nsight Systems 使用）

Nsight Systems をインストールし、`nsys --version` を実行して CLI が利用可能であることを確認します。両方のプロファイリング実行は物理アームを駆動します。1 回ずつ実行し、次を開始する前に前のプロセスが停止していることを確認してください。各実行の最後に、`Ctrl+C` を押す前にアームを支えられた位置に戻します。[Nsight Systems ダウンロード](https://developer.nvidia.com/nsight-systems)

まず、デフォルトのスケジューリングで CPU ピニングなしの実行をキャプチャします。

```bash
mkdir -p build/profiles
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-unpinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml
```

次に、利用可能な論理 CPU を確認し、許可された CPU 番号を選択します。以下の値 `2` は一例です。

```bash
lscpu -e=CPU,CORE,SOCKET,NODE
taskset -pc $$
REBOT_CPU=2
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-pinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml --cpu "$REBOT_CPU"
```

両方のレポートを確認します。再実行する場合は、新しい出力ファイル名を使用してください。

```bash
nsys stats --report nvtx_sum build/profiles/gravity-unpinned.nsys-rep
nsys stats --report nvtx_sum build/profiles/gravity-pinned.nsys-rep
```

`.nsys-rep` レポートを Nsight Systems の GUI で開き、タイムライン上で 3 つのオペレータの NVTX 範囲を確認します。両方の実行で、アーム姿勢、キャプチャ時間、およびホスト負荷をできるだけ一定に保ってください。

| 指標 | 測定方法 |
| --- | --- |
| オペレータの実行時間 | 対応する NVTX 範囲の統計を `nvtx_sum` で確認します。 |
| ループ間隔とジッタ | 連続する `joint_feedback` のエントリタイムスタンプを比較します。目標間隔は 2.5 ms です。 |
| グラフ内レイテンシ | 同じ反復からのイベントを一致させるためにメッセージマーカーを使用し、`joint_feedback` へのエントリから `motor_commands` へのエントリまでを測定します。シリアル伝送は別途測定します。 |

バッチ解析には、レポートを SQLite にエクスポートします。`nsys export --help` を実行して `--include-blobs` があるか確認してください。オプションがない場合は、構造化メッセージペイロードをエクスポートする前に Nsight Systems をアップグレードしてください。同じエッジ上の publish イベントと receive イベントを対応付けるには、`source_identity` と `sequence` を使用します。その後、オペレータの入力と出力をたどって、同じ制御反復をトレースします。[Holoscan NVTX アノテーション](https://docs.nvidia.com/holoscan/sdk-user-guide/5-0-latest/performance/nsight-profiling)

```bash
nsys export --type sqlite --include-blobs=true \
  -o build/profiles/gravity-pinned.sqlite build/profiles/gravity-pinned.nsys-rep
```

`--cpu` は制御スレッドに対してのみアフィニティを設定します。NVIDIA はまた、1 つの物理コアとその SMT 兄弟を分離し、最初の 10 秒をウォームアップとして破棄し、実行ごとに 100 万回を超える反復を維持しました。実験を再現する際は、自身のサンプル数、CPU トポロジ、および分離設定を記録してください。グラフの挙動を確認するには短いトレースを使用し、テイルレイテンシのパーセンタイルには十分なサンプル数を使用します。[NVIDIA のベンチマーク条件](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/#pinning-cores) · [メッセージ相関ガイド](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#profiling-and-cpu-placement)

## 任意の C++ 比較

Holoscan SDK 5.0（開発コンポーネント付き）、C++20 コンパイラ、CMake 4 以降、Ninja、Rust/Cargo、および Python 3.12 をインストールします。NVIDIA はこのサンプルに SDK ビルド 5.0.0.7 を使用しました。[SDK インストールガイド](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [サンプル C++ ビルド手順](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#c-build)

これらのコマンドをサンプルディレクトリから実行します。モデルファイルの存在をすでに確認済みの場合は、1 行目を省略してください。

```bash
python3.12 scripts/fetch-urdf.py
./scripts/bootstrap-deps.sh
cmake --preset default
cmake --build --preset default
ctest --preset default
```

テストに合格したら、手順 2 と 3 を使用してハードウェアと開始姿勢を確認します。その後、Python の起動コマンドの代わりに次のコマンドを使用します。C++ を Nsight Systems でプロファイルするには、プロファイリングコマンド内の実行ファイルと出力名を変更します。シリアル設定と比較条件は同じに保ってください。

```bash
./build/rebot_gravity_compensation config/rebotarm_local.yaml
```

## トラブルシューティング

| 症状 | 確認事項 |
| --- | --- |
| pip が Holoscan ホイールを見つけられない | `python --version`、`uname -m`、`getconf GNU_LIBC_VERSION` を確認し、互換性のある Python バージョンとシステムを使用してください。 |
| `libcudart.so.13` が見つからない | アクティブな Python 環境に CUDA ランタイムホイールがインストールされていることを確認し、`LD_LIBRARY_PATH` を再設定してください。 |
| `libcuda.so.1` が見つからない | ホストの NVIDIA ドライバと `nvidia-smi` の出力を確認してください。CUDA ランタイムホイールにはホストドライバは含まれていません。 |
| URDF が見つからない、または Pinocchio のインポートに失敗する | サンプルディレクトリからモデルダウンロードスクリプトを再実行してください。アクティブな環境での `pin` のバージョンとインポートパスを確認します。別の Python 環境から ROS 拡張を読み込むことは避けてください。 |
| シリアルポートを開けない、またはビジー状態である | USB データケーブル、`channel` パス、およびシリアルポートのパーミッションを確認してください。実際のデバイスパスで `fuser -v /dev/ttyACM0` を使用してポートを使用しているプロセスを特定し、その元のターミナルから停止させてください。 |
| モータがフィードバックを停止する、またはフォルトを報告する | まずアームを支え、コントローラを停止してください。モータ ID、電源、配線、およびファームウェア手順を確認します。完全なエラー内容と関節番号を保存し、ウォッチドッグを有効に保ってください。 |
| アームが落下する、押し返す、または振動する | まずアームを支え、コントローラを停止してください。ベースの向き、関節ゼロ位置、モデル、およびペイロードを確認します。 |
| グラフが CPU を指定した状態でコンパイルまたは起動に失敗する | `taskset -pc $$` を実行して、どの CPU が許可されているか確認するか、`--cpu` を削除してデフォルトのスケジューリングに戻してください。 |
