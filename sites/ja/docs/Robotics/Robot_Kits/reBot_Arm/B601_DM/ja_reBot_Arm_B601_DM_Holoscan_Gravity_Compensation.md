---
description: "Ubuntu 24.04 で NVIDIA の Holoscan 5 サンプルを実行し、reBot Arm B601-DM の重力補償を検証して、Nsight Systems で制御ループを測定します。"
title: "reBot-DM Holoscan5 重力補償"
sidebar_label: "reBot-DM Holoscan5 重力補償"
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
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="reBot Arm B601-DM ロボットアーム" />
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

<p align="center">
  <strong>目標レート 400 Hz · Pinocchio ダイナミクス · Nsight Systems レイテンシ解析</strong>
</p>

このチュートリアルでは、NVIDIA Holoscan 5 を使い、単一の制御ループで関節フィードバックの読み取り、重力補償トルクの計算、モーター指令の送信を行います。モーターが **reBot Arm B601-DM** の自重を支えるため、手で姿勢を変えられます。[NVIDIA 技術ブログ](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/)

## 前提条件

| 項目 | 要件 |
| --- | --- |
| ロボットアーム | Damiao モーターとグリッパーを取り付けた reBot Arm B601-DM |
| 接続 | B601-DM の電源、USB-CAN コントローラーボード、USB データケーブル |
| ホスト | ソースと依存関係をダウンロードできるインターネット接続のある Ubuntu 24.04 x86_64 |
| ランタイム | Python 3.12、Holoscan 5.0.0、CUDA 13 に対応した NVIDIA ドライバー |

アームが未組み立ての場合は、クイックスタートに従ってベースを固定し、配線を完了し、モーター ID と関節ゼロ位置を確認してください。電源または CAN ハーネスを接続・取り外す前に、電源を切ってください。[B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)

ホストでシステムとドライバーを確認します。

```bash
uname -m
getconf GNU_LIBC_VERSION
nvidia-smi
```

`x86_64`、glibc 2.39 以降、および GPU が一覧表示される `nvidia-smi` の出力を想定します。NVIDIA は Holoscan 5 向けに、CUDA 13 対応の R580 以降のドライバーを指定しています。ドライバーがない、または古すぎる場合は、Ubuntu の「追加のドライバー」または `sudo ubuntu-drivers list` で、お使いのハードウェア向けのドライバーブランチを確認してください。Ubuntu のインストール手順に従い、再起動してから再確認してください。Jetson では、まず対応する JetPack SDK のバージョンを確認してください。[Holoscan SDK のインストール要件](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Ubuntu への NVIDIA ドライバーのインストール](https://ubuntu.com/server/docs/how-to/graphics/install-nvidia-drivers/)

:::tip

Ubuntu 22.04 には glibc 2.35 が同梱されています。Conda に Python 3.12 をインストールしていても、glibc の要件を満たすホストまたはコンテナーで Holoscan 5 を実行してください。このガイドのコマンドは Ubuntu 24.04 のネイティブ Python 環境を使います。[Holoscan wheel の要件](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

:::

## 重力補償を実行する

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 環境をセットアップして制御グラフを確認する

Bash で NVIDIA のサンプルをダウンロードします。以降のコマンド、設定、テストがソースと一致するよう、固定したリビジョンを使います。

```bash
sudo apt update
sudo apt install -y ca-certificates git nano python3.12-venv libgl1 libglib2.0-0t64 libgomp1 psmisc

git clone https://github.com/nvidia-holoscan/holoscan-tutorials.git
cd holoscan-tutorials
git checkout --detach e79b1a662f358dca734d8a4426c0aeb60699e264
cd tutorials/rebot-gravity-compensation
```

Python 3.12 環境の作り方を一つ選びます。

<Tabs>
<TabItem value="venv" label="Python venv">

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

</TabItem>
<TabItem value="conda" label="Conda">

すでに Conda がある場合は、専用の環境を作成します。環境名は別の名前にしてもかまいません。[Conda のインストールガイド](https://docs.conda.io/projects/conda/en/stable/user-guide/install/linux.html)

```bash
conda create -n holoscan-rebot python=3.12 pip -y
conda activate holoscan-rebot
```

</TabItem>
</Tabs>

サンプルディレクトリに留まり、環境を有効にしたままにしてください。モデルをダウンロードし、サンプルの依存関係をインストールします。

```bash
python --version
python scripts/fetch-urdf.py
test -s urdf/DM/urdf/ReBot_Arm_DM.urdf

python -m pip install --only-binary=:all: -r requirements-python.txt \
  'holoscan==5.0.0' 'nvidia-cuda-runtime==13.0.96'
python -m pip check
```

ダウンロードスクリプトは、固定された Seeed Studio のリビジョンから URDF を取得し、ソースファイルを検証し、ダイナミクスデータを保持します。requirements ファイルは Pinocchio 3.9.0 と motorbridge 0.5.0 をインストールします。Pinocchio の pip パッケージ名は `pin`、Python のインポート名は `pinocchio` です。[公式サンプルのソースと依存関係](https://github.com/nvidia-holoscan/holoscan-tutorials/tree/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation)

制御グラフは CPU 上で動作しますが、Holoscan をインポートすると CUDA ランタイムも読み込まれます。次のコマンドは、wheel 内の共有ライブラリを現在のターミナルのライブラリ検索パスに追加します。新しいターミナルを開くたびに、サンプルディレクトリに戻り、環境を再度有効化して、これらのコマンドを再実行してください。[Holoscan wheel のランタイムライブラリ](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

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

アームを接続する前に、モデルを読み込み、制御グラフをコンパイルできます。この確認はモデルの初期化とグラフのコンパイルのみを行い、シリアルポートを開いたりモーターを有効化したりしません。

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

`nq=8, nv=8` と、コンパイル成功のメッセージが表示されることを確認します。モデルにはアーム座標が 6 つ、指の座標が 2 つあります。実機のアームにはモーターが 7 つあります。より完全なソフトウェアレグレッション確認には、このガイド後半の疑似モーターテストを実行してください。

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### アームを接続してシリアルポートを設定する

ベースが固定されていることを確認し、USB データケーブルを接続して、アームの電源を入れます。次のコマンドを実行して、シリアルデバイスへの読み書き権限を付与します。

```bash
sudo chmod 666 /dev/ttyACM*
```

公式設定をコピーし、コピー側の `channel` を編集します。例のパスは、実際のシリアルポートに置き換えてください。

```bash
cp config/rebotarm_dm.yaml config/rebotarm_local.yaml
nano config/rebotarm_local.yaml
```

```yaml
channel: "/dev/ttyACM0"
```

| 設定 | 公式サンプルの値 |
| --- | --- |
| モーター ID とフィードバック ID | それぞれ 10 進数の 1–7 と 17–23 |
| モーター型式 | `joint1`–`joint3` は `4340P`、`joint4`–`joint6` とグリッパーは `4310` |
| シリアルボーレート | 921600 |
| アームゲイン | `kp: 1.5` と `kd: 1.0` |
| 重力トルクのスケールと関節方向 | 6 つのアーム関節すべてで `tau_scale` と `joint_direction` のデフォルトはいずれも 1 |
| コマンド watchdog | 100 ms |

初回実行では、公式のゲイン、方向、スケールをそのまま使います。モーター ID、取り付け向き、または関節ゼロ位置が実機と異なる場合は、先にクイックスタートと照合してください。ベースの向きを変える、またはペイロードを追加する場合は、その変更を考慮したダイナミクスモデルを使ってください。[公式モーター設定](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/config/rebotarm_dm.yaml)

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### コントローラーを起動、確認、停止する

:::warning

起動コマンドは物理モーターを有効にします。余分なペイロードを外し、可動範囲を空け、トルクが失われても支えが残る姿勢にアームを置いてください。現場で速やかに電源を切れる人がいることを確認してください。故障によって、コントローラーが支持トルクを解除することもあります。

:::

同じ環境でコマンドを実行します。コントローラーがシリアルポートを排他的に使用していることを確認してください。

```bash
unset MOTORBRIDGE_LIB
python python/gravity_compensation.py config/rebotarm_local.yaml
```

プログラムはモデル、現在の姿勢、モーター状態を確認し、watchdog を設定してから指令の送信を開始します。下のメッセージが表示されたら、アームをゆっくりと小さく動かしてください。自重を支え、手の動きに追従することを確認します。明らかに押し返してくる、落下する、振動する、またはモーターエラーを報告する場合は、アームを支えてコントローラーを停止してから原因を調べてください。

```text
Gravity compensation active.
```

**正常に停止するには、まずアームを支えのある姿勢へ戻してから `Ctrl+C` を押してください。** プログラムは終了時にモーターの無効化を試み、その結果として支持トルクが失われます。正常終了時、ターミナルには停止メッセージとコマンドバッチ数が表示されます。

</div>
</section>
</div>

## 制御ループの仕組み

| オペレーター | 役割 |
| --- | --- |
| `joint_feedback` | 2.5 ms 周期で動作し、関節位置、速度、モーター状態を読み取ります |
| `gravity` | URDF と現在の関節角度からフィードフォワード重力トルクを計算し、剛性と減衰のパラメーターを生成します |
| `motor_commands` | 指令を検証し、motorbridge 経由で 7 つのモーターすべてに MIT 制御指令を送ります |

3 つのオペレーターは、同じ Holoscan の `control` パーティション内で順番に実行されます。オペレーター間の各キューは、未処理メッセージを 1 件保持します。Pinocchio は重力項を `g(q) = RNEA(q, 0, 0)` として計算します。スケジューリングの目標は 400 Hz です。反復間の実際の間隔は Nsight Systems で測定します。

watchdog は、期限を過ぎたコマンドバッチを確認します。motorbridge はキャッシュされたフィードバックを返します。モーターのフィードバックが止まっても指令を送れる場合、サンプルは古い値を読み続けることがあります。ハードウェアテスト中は、現場でアームを監視する人を置いてください。[公式技術ガイド](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#startup-watchdogs-and-feedback)

## 任意：疑似モーターテスト

公式の 2 つのテストスイートは、重力トルク、制御グラフ、故障時の停止、Cartesian 点保持を対象にします。次のコマンドを実行する前に、ハードウェアコントローラーを停止してください。これらのテストではアームの USB ケーブルを外してもかまいません。環境を有効にしたサンプルディレクトリから実行します。コマンドは、C++ SDK を必要とせず、テストが使う疑似モーターライブラリをビルドします。

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

固定リビジョンでは、1 つ目のスイートで 20 件、2 つ目で 15 件のテストがそれぞれ `OK` で終わることを想定します。故障注入テストは、想定どおりのエラーログを出力します。これらのテストに合格しても確認できるのはソフトウェア経路です。配線、モーター方向、関節ゼロ位置、実機上の挙動は、手順 2 と 3 に従って確認してください。

## 任意：Nsight Systems による CPU 固定の比較

Nsight Systems をインストールし、`nsys --version` を実行して CLI が使えることを確認します。両方のプロファイリング実行は物理アームを駆動します。一度に 1 つずつ実行し、次を始める前に前のプロセスが停止していることを確認してください。各実行の最後には、アームを支えのある姿勢に戻してから `Ctrl+C` を押してください。[Nsight Systems のダウンロード](https://developer.nvidia.com/nsight-systems)

まず、デフォルトのスケジューリングで、CPU 固定なしの実行を取得します。

```bash
mkdir -p build/profiles
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-unpinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml
```

次に、利用可能な論理 CPU を確認し、許可された CPU 番号を選びます。下の `2` は例です。

```bash
lscpu -e=CPU,CORE,SOCKET,NODE
taskset -pc $$
REBOT_CPU=2
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-pinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml --cpu "$REBOT_CPU"
```

両方のレポートを確認します。繰り返し実行するときは、新しい出力ファイル名を使います。

```bash
nsys stats --report nvtx_sum build/profiles/gravity-unpinned.nsys-rep
nsys stats --report nvtx_sum build/profiles/gravity-pinned.nsys-rep
```

Nsight Systems の GUI で `.nsys-rep` レポートを開き、タイムライン上の 3 つのオペレーターの NVTX 範囲を確認します。両方の実行で、アームの姿勢、取得時間、ホスト負荷をできるだけ揃えてください。

| 指標 | 測定方法 |
| --- | --- |
| オペレーターの所要時間 | `nvtx_sum` 内の対応する NVTX 範囲の統計を確認します。 |
| ループ間隔とジッター | 連続する `joint_feedback` の開始タイムスタンプを比較します。目標間隔は 2.5 ms です。 |
| グラフ内レイテンシ | メッセージマーカーで同一反復のイベントを対応付け、`joint_feedback` への進入から `motor_commands` への進入までを測定します。シリアル送信は別に測定します。 |

バッチ分析では、レポートを SQLite にエクスポートします。`nsys export --help` を実行して `--include-blobs` があるか確認します。このオプションがない場合は、構造化メッセージペイロードをエクスポートする前に Nsight Systems をアップグレードしてください。同じエッジ上の発行と受信を対応付けるには、`source_identity` と `sequence` を使います。その後、オペレーターの入力と出力をたどって、同じ制御反復を追跡します。[Holoscan の NVTX アノテーション](https://docs.nvidia.com/holoscan/sdk-user-guide/5-0-latest/performance/nsight-profiling)

```bash
nsys export --type sqlite --include-blobs=true \
  -o build/profiles/gravity-pinned.sqlite build/profiles/gravity-pinned.nsys-rep
```

`--cpu` が設定するのは制御スレッドのアフィニティだけです。NVIDIA はさらに、物理コアとその SMT 兄弟を分離し、最初の 10 秒をウォームアップとして破棄し、実行ごとに 100 万反復を超えるサンプルを保持しました。実験を再現するときは、自身のサンプル数、CPU トポロジー、分離設定を記録してください。グラフの挙動を見るには短いトレースを使い、テールレイテンシのパーセンタイルには十分な大きさのサンプルを使います。[NVIDIA のベンチマーク条件](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/#pinning-cores) · [メッセージ相関のガイド](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#profiling-and-cpu-placement)

## 任意：C++ との比較

開発コンポーネントを含む Holoscan SDK 5.0、C++20 コンパイラー、CMake 4 以降、Ninja、Rust/Cargo、Python 3.12 をインストールします。NVIDIA はこのサンプルに SDK ビルド 5.0.0.7 を使いました。[SDK のインストールガイド](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [サンプルの C++ ビルド手順](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#c-build)

サンプルディレクトリからこれらのコマンドを実行します。モデルファイルの存在をすでに確認している場合は、最初の行を省略できます。

```bash
python3.12 scripts/fetch-urdf.py
./scripts/bootstrap-deps.sh
cmake --preset default
cmake --build --preset default
ctest --preset default
```

テストに合格したら、手順 2 と 3 でハードウェアと開始姿勢を確認します。その後、Python の起動コマンドの代わりに次のコマンドを使います。Nsight Systems で C++ をプロファイルするには、プロファイリングコマンド内の実行ファイルと出力名を変更します。シリアル設定と比較条件は同じにしてください。

```bash
./build/rebot_gravity_compensation config/rebotarm_local.yaml
```

## トラブルシューティング

| 現象 | 確認すること |
| --- | --- |
| pip が Holoscan の wheel を見つけられない | `python --version`、`uname -m`、`getconf GNU_LIBC_VERSION` を確認し、互換性のある Python バージョンとシステムを使います。 |
| `libcudart.so.13` がない | 有効な Python 環境に CUDA ランタイムの wheel がインストールされていることを確認し、`LD_LIBRARY_PATH` を再設定します。 |
| `libcuda.so.1` がない | ホストの NVIDIA ドライバーと `nvidia-smi` の出力を確認します。CUDA ランタイムの wheel にはホストドライバーは含まれません。 |
| URDF がない、または Pinocchio のインポートに失敗する | サンプルディレクトリからモデルのダウンロードスクリプトを再実行します。有効な環境の `pin` のバージョンとインポートパスを確認します。別の Python 環境の ROS 拡張を読み込まないようにします。 |
| シリアルポートを開けない、または使用中である | USB データケーブル、`channel` のパス、シリアルポートの権限を確認します。実際のデバイスパスに合わせて `fuser -v /dev/ttyACM0` を使い、ポートを使用しているプロセスを特定し、元のターミナルから停止します。 |
| モーターがフィードバックを返さなくなる、または故障を報告する | まずアームを支えてコントローラーを停止します。モーター ID、電源、配線、ファームウェアの説明を確認します。エラー全文と関節番号を保存し、watchdog は有効のままにします。 |
| アームが落下する、押し返す、または振動する | まずアームを支えてコントローラーを停止します。ベースの向き、関節ゼロ位置、モデル、ペイロードを確認します。 |
| CPU を指定するとグラフのコンパイルまたは起動に失敗する | `taskset -pc $$` を実行して許可されている CPU を確認するか、`--cpu` を外してデフォルトのスケジューリングに戻します。 |
