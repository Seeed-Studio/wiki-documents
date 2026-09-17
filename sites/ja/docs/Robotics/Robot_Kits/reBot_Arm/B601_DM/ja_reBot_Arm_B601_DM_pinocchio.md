---
description: このチュートリアルでは、reBot Arm B601-DM ロボットアーム上で、Pinocchio と MeshCat を用いた運動学解析および可視化の方法を紹介します。
title: reBot Arm B601-DM Pinocchio & MeshCat
keywords:
  - Pinocchio
  - MeshCat
  - ロボットアーム
  - ロボット
  - LeRobot
  - 運動学
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-30
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/
---

import '/src/css/rebot-wiki-style.css';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-DM Pinocchio & MeshCat

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
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
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · マルチモータ対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>

:::tip
このサンプルコードは、単一モータ制御、順運動学 / 逆運動学の制御とテスト、アームのゼロ位置設定とモータ角度読み取り、MeshCat 可視化システムなどを含め、ロボットアームのモータや姿勢を制御するために使用できます。
:::

<div align="center">
  <a href="https://github.com/stack-of-tasks/pinocchio">Pinocchio</a> は、ロボットのダイナミクス解析と最適化のためのオープンソースライブラリです。高効率な順 / 逆運動学、動力学計算、および軌道計画機能を提供します。
</div>

<div align="center">
  <a href="https://github.com/rdeits/meshcat">MeshCat</a> は、ロボットの状態や動作軌跡をリアルタイムに表示できる Web ベースの 3D 可視化ツールです。
</div>

本プロジェクトは、Pinocchio の強力な計算能力と MeshCat の直感的な可視化を組み合わせ、reBot Arm B601-DM 向けに、運動学解析とデバッグのための完全なツールセットを提供します。

<GitHubStarButton owner="Seeed-Projects" repo="reBotArm_control_py" />

---

## プロジェクトの特長

1. **完全な運動学解析**
   順運動学（FK）および逆運動学（IK）計算をサポートし、ロボットアームのエンドエフェクタ姿勢をリアルタイムに求めることができます。

2. **リアルタイム 3D 可視化**
   ブラウザ上の MeshCat を通じて、ロボットアームの状態と動作軌跡をリアルタイムに表示でき、追加ソフトウェアは不要です。

3. **軌道計画とトラッキング**
   SE(3) 測地線軌道計画を実装し、CLIK（Closed-Loop Inverse Kinematics）トラッキング制御をサポートします。

4. **重力補償制御**
   Pinocchio の動力学モデルに基づいて関節の重力トルクを計算し、ロボットアームの「フローティング」効果を実現します。

5. **オープンソース & 拡張性**
   すべてのコードはオープンソースであり、ユーザーはニーズに応じて制御アルゴリズムや可視化効果をカスタマイズできます。

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>仕様</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ロボットアームモデル</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + グリッパ</td>
    </tr>
    <tr>
      <td>モータモデル</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>USB-CAN アダプタ経由の CAN バス</td>
    </tr>
    <tr>
      <td>動作電圧</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>制御方法</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>推奨動作温度範囲</td>
      <td>0°C ~ 40°C</td>
    </tr>
  </tbody>
</table>

## 部品表（BOM）

| コンポーネント | 数量 | 同梱 |
| -- | -- | -- |
| reBot Arm B601-DM ロボットアーム | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ（24V） | 1 | ✅ |
| USB-C ケーブル | 1 | ✅ |
| グリッパ | 1 | ✅ |

## 動作環境要件

:::caution 前提条件 — 先にアームのクイックスタートを完了してください
このチュートリアルを進める前に、**必ず** **[reBot Arm B601-DM クイックスタート](/ja/rebot_b601_dm_getting_started)** ドキュメントを最初から最後まで完了し、次の内容を含めてください：

- ハードウェアの開封、配線、および電源投入チェックリスト
- シリアル / CAN デバイス権限（`sudo chmod 666 /dev/ttyACM0` または `/dev/can0`）
- すべての関節のゼロキャリブレーション（`2_zero_and_read.py`）と、アームが MIT / POS_VEL モードで指令に従うことの確認

このチュートリアルでは、アームがすでにバス上で応答し、関節がゼロ出しされており、かつオペレータが関連する安全限界に精通していることを前提としています。クイックスタートを省略すると、モータ設定ミス、関節のスタック、アームの落下などにつながる可能性があります。
:::

| 項目 | 要件 |
| ------ | ------------- |
| **Python** | 3.10+ |
| **オペレーティングシステム** | Ubuntu（Ubuntu 24.04 LTS 推奨） |
| **通信インターフェース** | USB2CAN シリアルブリッジまたは CAN インターフェース |

---

## インストール手順

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>uv をインストールする（未インストールの場合）</h4>
<p className="rebot-step-label">Step 1</p>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

インストール後、次のコマンドを実行して `uv` が利用可能か確認します：

```bash
uv --version
```

インストールが成功していれば、次のような出力が表示されます（バージョンやプラットフォームは異なる場合があります）：

```text
uv 0.11.31 (x86_64-unknown-linux-gnu)
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>環境を同期する（すべての依存関係をインストール）</h4>
<p className="rebot-step-label">Step 2</p>

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` は、（存在しない場合は）自動的に仮想環境を作成し、`pyproject.toml` と `uv.lock` に従ってすべての依存関係をインストールします。
:::

</div>
</section>
</div>

## MIT / POS_VEL コントローラパラメータのチューニング {#MIT-/-POS_VEL-コントローラパラメータのチューニング}

このセクションでは、**MIT モード** および **POS_VEL モード** において、アーム各関節のコントローラパラメータを**どのように変更するか**、そしてその変更をどのように反映させるかを説明します。

:::tip このセクションは「どこ / どう変えるか」のみを扱い、「どの値を使うか」は扱いません
適切なパラメータは、**実機でのチューニング** を通じてのみ得られます。このセクションでは、パラメータがどこにあり、各フィールドが何を制御し、どのように変更を有効化して検証するかのみを扱います。具体的なチューニング手法（例：試行錯誤、Ziegler‑Nichols など）については、一般的なモータ制御の参考資料を参照してください。
:::

### 設定ファイルの場所

| ハードウェアバージョン | モータ設定ファイル | 切り替えエントリ |
| --- | --- | --- |
| **reBot Arm B601-DM**（本ドキュメント） | `config/rebotarm_dm.yaml` | `config/rebotarm.yaml` 内の `hardware_yaml: "rebotarm_dm.yaml"` を設定 |
| **reBot Arm B601-RS** | `config/rebotarm_rs.yaml` | `config/rebotarm.yaml` 内の `hardware_yaml: "rebotarm_rs.yaml"` を設定 |

:::caution `rebotarm.yaml` を直接編集しないでください
このファイルには `hardware_yaml: ...` という 1 行のみが含まれており、すべてのモータパラメータは `rebotarm_dm.yaml` / `rebotarm_rs.yaml` に記述されています。
:::

### 設定ファイル構造

各関節にはそれぞれエントリがあり、**制御モード** ごとにグループ化されています：

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0x11
    model: "4340P"
    vendor: "damiao"
    MIT:
      kp: 120.0
      kd: 8.0
    POS_VEL:
      vel_kp: 0.0125
      vel_ki: 0.004
      pos_kp: 150.0
      pos_ki: 0.5
      vlim: 5.0
  # ... joint2 ~ joint6 follow the same structure ...
```

位置の特定方法：

- **関節名で探す**：ある関節を変更するには、`- name: jointX` ブロックを探します。
- **モード別**：その関節の下で、`MIT:` には MIT モードのパラメータ、`POS_VEL:` には POS_VEL モードのパラメータが入っています。
- **現在のモードが送信されるセットを決定**：スクリプトは `mode mit` / `mode posvel` によってモードを切り替え、モータは対応するサブブロック内のパラメータを実際に受け取ります。

### MIT モードのフィールドの意味

| フィールド | 役割 |
| --- | --- |
| `kp` | 位置ループ比例ゲイン：目標位置追従の「剛性」を表します。 |
| `kd` | 速度ループ減衰ゲイン：位置誤差によって生じる振動を抑制します。 |

### POS_VEL モードのフィールドの意味

| フィールド | 役割 |
| --- | --- |
| `vel_kp` | 速度ループ比例ゲイン。 |
| `vel_ki` | 速度ループ積分ゲイン。 |
| `pos_kp` | 位置ループ比例ゲイン。 |
| `pos_ki` | 位置ループ積分ゲイン（一部のベンダ設定にのみ存在）。 |
| `vlim` | 速度制限。最大移動速度の上限を設定します。 |

:::warning フィールド定義はベンダごとに異なります
Damiao（DM）と Robostride（RS）のモータは、プロトコル層の単位が異なるため、**同じフィールド名でもベンダ間で比較可能ではありません**。RS の `vel_kp` を変更することと DM の `vel_kp` を変更することは、意味が異なります。各 YAML はそれぞれのフィールド順序に従って解釈し、設定ファイル間で値を比較しないでください。
:::

:::caution チューニング前にテスト範囲を制限する
複数関節にわたる大きな `kp` / `kd` 変更は、関節方向や符号が誤っている場合、即座に振動・過電流・ハードストップ衝突を引き起こす可能性があります。チューニング前にアームの作業空間をクリアし、**1 度に 1 関節・1 モードのみを、小さなステップで** テストする計画を立ててください。
:::

### 編集手順

1. **実行中のスクリプトをすべて停止します**。YAML を編集している間もモータは有効な状態であり、変更は即座には反映されないため、不整合な挙動が発生しやすくなります。
2. **対応する YAML ファイルを編集します**：

   ```bash
   # Example for DM
   vim config/rebotarm_dm.yaml
   ```

   - 調整が必要な関節だけを変更します（例：`joint1`）。関係のない関節はそのままにしておきます。
   - 1つの関節内では、調整が必要なモード（MIT または POS_VEL）のみを変更し、理由なくもう一方のモードのフィールドを変更しないでください。
3. **YAML のインデントを保持すること**：レベルごとにスペース 2 個、キーと値は `:` で区切ります。インデントが間違っていると `yaml.safe_load` のパースが失敗し、すべてのパラメータがデフォルトに戻ってしまいます。
4. **保存後はスクリプトを再起動すること**。YAML はスクリプト起動時に 1 回だけ読み込まれます。**実行中に編集しても即座には反映されません**。
5. **単一関節での検証**：`3_mit_control.py`（MIT）や `4_pos_vel_control.py`（POS_VEL）といったスクリプトを使い、**小さな単一関節の動き**で変更内容をフルアームテストの前に検証します。

### 変更が反映されたかの確認方法

- **実行時の観察**：`3_mit_control.py` / `4_pos_vel_control.py` でモーターを有効化し、`state` を確認します。パラメータが変わっていないように見える、またはモーターの挙動が以前とまったく同じであれば、YAML の編集が誤っているか、デフォルト値に上書きされています。
- **YAML 自己チェック**：Python で直接パースし、1 つの関節のフィールドを出力して、値が自分で書き込んだ内容と一致しているか確認します：

  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_dm.yaml'))['joints'][0])"
  ```

- **クイックロールバック**：`git checkout config/rebotarm_dm.yaml` でリポジトリのデフォルトに戻せます。

---

## デバッグツールの紹介

:::tip Permission Settings
ハードウェア制御のサンプルを実行する前に、デバイスのパーミッションを設定する必要があります：

```bash
# Set serial device permissions (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or set CAN device permissions (e.g., can0)
sudo chmod 666 /dev/can0
```

:::
<details>
<summary>デバッグツール（例外発生時のみ使用）</summary>

**単一モーター制御コンソール（`0x01damiao_test.py`）**

motorbridge SDK を使用して単一モーターを直接テストします。

**実行方法**：

```bash
uv run python example/0x01damiao_test.py
```

**対話コマンド**：

| Command | 説明 |
| ------ | ------ |
| `enable` / `disable` | モーターを有効化 / 無効化 |
| `set_zero` | ゼロ位置を設定 |
| `state` | ステータスを表示 |
| `ping` | モーターに Ping を送り応答を取得 |
| `clear_error` | モーターエラーをクリア |
| `mode <mit/posvel/vel>` | 制御モードを切り替え |
| `mit <pos> [vel] [kp] [kd]` | MIT モードコマンド |
| `posvel <pos> [vlim]` | POS_VEL モードコマンド |
| `vel <velocity>` | 純粋な速度モードコマンド |
| `read_param <id> [type]` | モーターのパラメータを読み取り |
| `write_param <id> <value> [type]` | モーターのパラメータを書き込み |
| `loop` | ループ制御モードに入る |
| `q` / `quit` | 終了 |

---

**ゼロキャリブレーションと角度モニタリング（`2_zero_and_read.py`）**

すべての関節のゼロを自動設定し、関節角度をリアルタイムに表示します。

**実行方法**：

```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>MIT 制御モード（reBot DM での代替モード、必要に応じて参照 — POS_VEL 推奨）</h4>
<p className="rebot-step-label">デモ 3 · 3_mit_control.py</p>

:::warning 任意 — MIT は DM における代替モードです
**reBot Arm B601-DM** では、POS_VEL（位置・速度）モードが一般的により適した関節制御モードです。Damiao モーターのプロトコルは、速度制限機能付きの位置・速度ハイブリッド制御をネイティブにサポートしています。MIT モードでは通常、`kp` / `kd` のより慎重なチューニングが必要です。

このサンプルはチュートリアルを完了するために必須ではありません。特に MIT モードをデバッグする必要がない限り、**このサンプルはスキップ** して、下の POS_VEL サンプルを使用してください。目的が計画された経路に沿ったエンドエフェクタのスムーズな動きであれば、[スムーズな軌道 IK 制御（`8_arm_traj_control.py`）](#demo8-traj-control) に直接進んでください。
:::

すべての関節に目標角度を入力して MIT 制御モードでモーター制御を行います。通常、力制御、インピーダンス制御、または高い動的応答が必要なシナリオで使用されます。

:::danger 実行前の注意 — このサンプルにはスムーズな軌道計画がありません
このサンプルは、**経路や速度の計画なしに** 目標関節角度を直接モーターに送信します。大きな目標変更は、急激な高速動作を引き起こし、過電流保護をトリガーする可能性があります。

- 低レベルの MIT 関節制御を検証する必要がある場合にのみ実行してください。まず 1 つの関節を 5〜10 度だけ動かし、応答と方向を確認してから徐々に変化量を増やしてください。
- 完全なスムーズ軌道が必要な場合は、このサンプルをスキップして [スムーズな軌道 IK 制御（`8_arm_traj_control.py`）](#demo8-traj-control) に進んでください。
- 実行前にアームの作業空間を片付け、すぐに電源を切れるようにしておいてください。
:::

<details className="rebot-demo-details">
<summary>実行手順を展開（任意）</summary>

**実行方法**：

```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>位置・速度ハイブリッド制御モード</h4>
<p className="rebot-step-label">デモ 4 · 4_pos_vel_control.py</p>

すべての関節に目標角度を入力して、POS_VEL（位置・速度）ハイブリッドモードでモーターを制御します。Damiao の内蔵速度制限により目標変更の影響を軽減できますが、このサンプル自体は完全なスムーズ軌道計画を提供しません。

:::danger 任意 — 速度制限は完全な軌道計画ではありません
POS_VEL は DM に推奨される関節制御モードですが、このサンプルでも関節位置ターゲットは直接更新され、中間経路は計画されません。大きな目標変更は依然として急激な動作、衝突、または過電流を引き起こす可能性があります。

- このサンプルはチュートリアルを完了するために必須ではありません。エンドエフェクタのスムーズな動きだけが必要な場合は、**このサンプルをスキップ** して [スムーズな軌道 IK 制御（`8_arm_traj_control.py`）](#demo8-traj-control) に直接進んでください。
- POS_VEL 関節制御を検証する際は、まず 1 つの関節を 5〜10 度だけ動かし、その後ターゲット変更量を徐々に増やしてください。
- 実行前にアームの作業空間を片付け、すぐに電源を切れるようにしておいてください。
:::

<details className="rebot-demo-details">
<summary>実行手順を展開（任意）</summary>

**実行方法**：

```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>
</div>

---

## 運動学テスト

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>順運動学テスト</h4>
<p className="rebot-step-label">デモ 5 · 5_fk_test.py</p>

関節角度に基づいてエンドエフェクタの姿勢を計算します。

**入力**：6 つの関節角度（度）

**出力**：

- エンドエフェクタ位置（X, Y, Z）— 単位：メートル
- 回転行列（3×3）
- オイラー角（ロール / ピッチ / ヨー）— 単位：度

**例**：

```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
====================================================
  Result / Result
====================================================
  Joint angles (deg): [0. 0. 0. 0. 0. 0.]
  End-effector position (m):
    X = +0.260306
    Y = +0.000000
    Z = +0.191701
  Rotation matrix (R_world^end):
    [+1.000000  +0.000000  -0.000007]
    [+0.000000  +1.000000  +0.000100]
    [+0.000007  -0.000100  +1.000000]
  Euler XYZ (roll, pitch, yaw) [deg]:
    roll   = -0.0057
    pitch  = -0.0004
    yaw    = +0.0000
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>逆運動学テスト</h4>
<p className="rebot-step-label">デモ 6 · 6_ik_test.py</p>

所望のエンドエフェクタ姿勢に基づいて関節角度を求めます。

**入力形式**：

- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）

**例**：

```bash
uv run python example/6_ik_test.py

# Usage A
> 0.28 0 0.3  # Position only
====================================================
  Result / Result
====================================================
  Target position : [+0.2800, +0.0000, +0.3000] m
  Converged : Yes
  Iterations: 2000
  Position error: 5.62e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -22.9687 deg  (-0.4009 rad)
    joint3     = -24.2191 deg  (-0.4227 rad)
    joint4     =  +1.2508 deg  (+0.0218 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)

# Usage B
> 0.28 0 0.3 0 1 0       # Position + Orientation
====================================================
  Result / Result
====================================================
  Target position   : [+0.2800, +0.0000, +0.3000] m
  Target orientation : [+0.00, +1.00, +0.00] deg
  Converged  : Yes
  Iterations: 2000
  Position error: 6.28e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -23.3968 deg  (-0.4084 rad)
    joint3     = -25.3018 deg  (-0.4416 rad)
    joint4     =  +2.9054 deg  (+0.0507 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>MIT モードでの逆運動学制御</h4>
<p className="rebot-step-label">デモ 7 · 7_arm_ik_control.py</p>

MIT モードで逆運動学（IK）を使用して、ロボットアームのエンドエフェクタが移動すべき 3D 座標（X, Y, Z）と姿勢（オイラー角）を指定します。

**入力形式**：

- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- `state` を入力：各関節の現在の実際のラジアン値を表示。
- `end_state` を入力：現在のエンドエフェクタの実際の座標（m）と空間内のオイラー角（rad）を表示。

:::danger オプション — この例にはスムーズな軌道計画がありません
この例では IK 解をそのまま関節目標として送信し、**経路や速度の計画は一切行いません**。目標姿勢の変化が大きいと、急激な高速動作を引き起こし、過電流保護が作動する可能性があります。

- この例はチュートリアルを完了するために必須ではありません。ほとんどの場合、**この例はスキップ**し、最小ジャークの加減速計画を含む次のセクション [スムーズな軌道 IK 制御（`8_arm_traj_control.py`）](#demo8-traj-control) を使用してください。
- 軌道計画なしの IK 制御を比較またはデバッグする必要がある場合にのみ実行してください。最初の目標は現在のエンドエフェクタ位置から 5〜10 cm 以内に保ってください。
- 実行前に、目標姿勢が到達可能であることを確認し、作業空間から人や障害物を取り除き、すぐに電源を切れるようにしておいてください。
:::

<details className="rebot-demo-details">
<summary>実行手順を展開（オプション）</summary>

**実行方法**：

```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Return to zero position and exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--recommended">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4 id="demo8-traj-control">スムーズな軌道を用いた逆運動学制御</h4>
<p className="rebot-step-label">デモ 8 · 8_arm_traj_control.py</p>

MIT モードで逆運動学（IK）を使用して、目標時間内で一様またはスムーズな加減速の動作軌道を自動計画し、関節の激しい振動を回避します。

**入力形式**：

- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 位置 + 姿勢 + 時間（デフォルト 2.0）：`<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
- `state` を入力：各関節の現在の実際のラジアン値を表示。
- `end_state` を入力：現在のエンドエフェクタの実際の座標（m）と空間内のオイラー角（rad）を表示。

**実行方法**：

```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Return to zero position and exit system
```

:::tip 姿勢のずれが見られた場合は？
**読み取ったエンドエフェクタ姿勢**が**指令した目標姿勢**と異なり、かつその**姿勢自体は到達可能**（作業空間外でも特異姿勢でもない）な場合、問題は MIT / POS_VEL コントローラのパラメータにある可能性が高いです。その場合は、前述の [MIT / POS_VEL コントローラパラメータのチューニング](#tune-controller-params) セクションを参照し、「単一関節・モードごと・小さなステップ」というアプローチで `kp` / `kd` などを手動で調整してください。チューニング後、この例に戻って検証します。
:::

</div>
</section>
</div>

---

## 重力補償テスト

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">9</span>
<div className="rebot-step-content">
<h4>重力補償制御 — 基本バージョン</h4>
<p className="rebot-step-label">デモ 9 · 9_gravity_compensation.py</p>

Pinocchio 動力学モデルを使用して、関節の重力を補償します。

**制御則**：

```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**期待される動作**：

- アームは任意の姿勢で「浮いて」いられる
- 手を離しても自重で落下しない
- 手動で任意の位置に動かすことができる

:::caution 通常終了時には安全なホーム復帰を実行
`Ctrl+C` でスクリプトを通常停止すると、まず重力補償制御を停止し、剛性の高いゲインと重力フィードフォワードで現在の姿勢を保持します。その後、最小ジャーク軌道でアームをゼロ位置に戻し、ホーム復帰が完了してから切断してモーターを無効化します。

自動ホーム復帰は、プログラムの正常な実行、通信、および電源に依存します。アームの作業空間の外に人や障害物を置き、ホーム復帰中にアームを支えられるよう準備しておいてください。通信障害、予期しない停電、強制終了などにより、保護シーケンスが完了しない場合があります。異常な動きが発生した場合は、直ちに電源を切ってください。
:::

**実行方法**：

```bash
uv run python example/9_gravity_compensation.py
```

**出力**：

- 各関節の目標トルク（N·m）のリアルタイム表示
- `Ctrl+C` を押して停止および切断

:::tip 個々の関節補償の調整
構造的な摩擦や組み立ての違いにより、一部の関節が過小補償または過大補償になっている場合は、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます：

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、関節 2 の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際の「浮き」具合に基づいて項目ごとに調整することを推奨します。
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">10</span>
<div className="rebot-step-content">
<h4>重力補償制御 — エンドエフェクタ速度ロックバージョン</h4>
<p className="rebot-step-label">デモ 10 · 10_gravity_compensation_lock.py</p>

基本的な重力補償に基づき、エンドエフェクタ速度の検出と関節角ロック機構を追加します。

**制御則**：

```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**ロックロジック**：

- エンドの並進速度が `||v_ee|| < 0.04 m/s` かつ角速度が `||w_ee|| < 0.08 rad/s` のとき：
  - 目標関節角 `q_target` はロックされたまま
  - ロボットアームは現在位置にロックされる
- エンド速度がしきい値を超えたとき：
  - `q_target` が現在の関節角に更新される
  - 手で押して位置を変更できる

**期待される動作**：

- ロボットアームは現在位置にロックされ、目標角度を変えるには力が必要
- 基本バージョンより安定しており、姿勢維持が必要なシナリオに適している

:::caution 通常終了時には安全なホーム復帰を実行
`Ctrl+C` でスクリプトを通常停止すると、まず重力補償制御を停止し、剛性の高いゲインと重力フィードフォワードで現在の姿勢を保持します。その後、最小ジャーク軌道でアームをゼロ位置に戻し、ホーム復帰が完了してから切断してモーターを無効化します。

自動ホーム復帰は、プログラムの正常な実行、通信、および電源に依存します。アームの作業空間の外に人や障害物を置き、ホーム復帰中にアームを支えられるよう準備しておいてください。通信障害、予期しない停電、強制終了などにより、保護シーケンスが完了しない場合があります。異常な動きが発生した場合は、直ちに電源を切ってください。
:::

**実行方法**：

```bash
uv run python example/10_gravity_compensation_lock.py
```

**出力**：

- ロック状態（LOCKED / UPDATE）のリアルタイム表示
- エンドの並進速度・角速度
- 各関節の重力補償トルク（N·m）
- `Ctrl+C` を押して停止および切断

:::tip 個々の関節補償の調整
構造的な摩擦や組み立ての違いにより、一部の関節が過小補償または過大補償になっている場合は、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます：

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、関節 2 の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際の「浮き」具合に基づいて項目ごとに調整することを推奨します。
:::

**安全テスト用設定**：
スクリプト先頭の `ENABLED_JOINTS` リストを変更することで、安全テストのために特定の関節のみを有効化できます：

```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

</div>
</section>
</div>

---

## シミュレーション環境

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/meshcat_DM.png" alt="MeshCat simulation of the reBot Arm B601-DM" />
</div>

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S1</span>
<div className="rebot-step-content">
<h4>順運動学シミュレーション</h4>
<p className="rebot-step-label">シミュレーションデモ 1 · sim/fk_sim.py</p>

MeshCat で関節角度を入力してロボットアームの姿勢を可視化する、インタラクティブな順運動学シミュレーション。

**実行方法**：

```bash
uv run python example/sim/fk_sim.py
```

**インタラクティブコマンド**：

- 6 つの関節角度（度）をスペース区切りで入力
- 例: `0 0 0 0 0 0`
- 例: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: 終了

**機能**：

- エンドエフェクタの位置と姿勢をリアルタイム表示
- 連続入力に対応し、さまざまな姿勢をテスト可能
- 整形された姿勢情報の出力

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S2</span>
<div className="rebot-step-content">
<h4>逆運動学シミュレーション</h4>
<p className="rebot-step-label">シミュレーションデモ 2 · sim/ik_sim.py</p>

インタラクティブな逆運動学シミュレーションで、目標姿勢から関節角度を自動的に解き、可視化します。

**実行方法**：

```bash
uv run python example/sim/ik_sim.py
```

**入力形式**：

- 位置のみ: `x y z`（メートル）
- 位置+姿勢: `x y z roll pitch yaw`（ラジアン）

**例**：

```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position+Orientation
```

**機能**：

- IK 収束の自動判定
- 反復回数と誤差の表示
- ロボット姿勢のリアルタイム更新

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S3</span>
<div className="rebot-step-content">
<h4>軌道計画シミュレーション</h4>
<p className="rebot-step-label">シミュレーションデモ 3 · sim/traj_sim.py</p>

SE(3) 測地線に基づく軌道計画シミュレーションで、CLIK トラッキングと MeshCat アニメーション再生を含みます。

**実行方法**：

```bash
uv run python example/sim/traj_sim.py
```

**インタラクティブコマンド**：

- 入力: `x y z [roll pitch yaw]`（メートル/ラジアン）
- Enter キーを押すとデフォルト設定を使用
- `q`: 終了

**機能**：

- 現在位置から目標位置までの軌道を計画
- 最小ジャーク軌道プロファイルを使用
- 軌道統計情報をリアルタイム表示
- MeshCat で軌道全体のアニメーションを再生
- 参照経路（灰色）と実際の経路（緑色）を表示

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S4</span>
<div className="rebot-step-content">
<h4>ビジュアライザツール</h4>
<p className="rebot-step-label">シミュレーションデモ 4 · sim/visualizer.py</p>

MeshCat ビジュアライザのラッパーで、統一されたロボット表示インターフェースを提供します。

**主な機能**：

- URDF モデルを読み込み、ロボットを表示
- 3D ポリライン経路（参照/実際）を描画
- IK 目標姿勢を表示（3 色座標軸 + 球）
- 関節軌道アニメーションの再生をサポート

**使用例**：

```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

</div>
</section>
</div>

---

## FAQ

- **`Permission denied` エラーが発生する**
  デバイスのパーミッションを設定するために、`sudo chmod 666 /dev/ttyACM0` または `sudo chmod 666 /dev/can0` を実行していることを確認してください。

- **IK の解が得られない、または結果が異常**
  目標姿勢がロボットアームの作業空間内にあるか確認し、関節リミットの設定が正しいことを確認してください。

- **重力補償の効果が良くない**
  これは構造誤差や加工精度が原因の可能性があります。本プロジェクトの重力補償は URDF と Pinocchio に依存しています。実測パラメータに合わせて URDF を修正してみてください（このステップは AI に依頼することもできます）。

---

## 連絡先

- **技術サポート**: [Submit Issue](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **プロジェクトリポジトリ**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
- **フォーラム**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考ドキュメント

- [Pinocchio 公式ドキュメント](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat 公式ドキュメント](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>このプロジェクトが役に立った場合は、ぜひ Star をお願いします！</strong>
</div>
