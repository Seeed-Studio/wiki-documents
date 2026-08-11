---
description: このチュートリアルでは、ロボットアーム reBot Arm B601-RS 上で、Pinocchio と MeshCat を用いた運動学解析および可視化の方法を紹介します。
title: reBot Arm B601-RS 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - ロボットアーム
  - ロボット
  - LeRobot
  - 運動学
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-07-22
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-06-11'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_pinocchio_meshcat/
---

# reBot Arm B601-RS 向け Pinocchio と MeshCat 入門

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

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) は、ロボットのダイナミクス解析と最適化のためのオープンソースライブラリです。効率的な順運動学 / 逆運動学、動力学計算、および軌道計画を提供します。[MeshCat](https://github.com/rdeits/meshcat) は、ロボットの状態や運動軌跡をリアルタイムに表示できる Web ベースの 3D 可視化ツールです。

本プロジェクトは、Pinocchio の強力な計算機能と MeshCat の直感的な可視化を組み合わせ、reBot Arm B601-RS 向けに、運動学解析とデバッグのための完全なツールセットを提供します。


---

## プロジェクトの特長

1. **完全な運動学解析**
   順運動学（FK）および逆運動学（IK）計算をサポートし、ロボットアームのエンドエフェクタ姿勢をリアルタイムで解くことができます。

2. **リアルタイム 3D 可視化**
   追加ソフトウェアなしで、MeshCat を通じてブラウザ上にロボットアームの状態と運動軌跡をリアルタイム表示します。

3. **軌道計画とトラッキング**
   SE(3) 測地線軌道計画を実装し、CLIK（Closed-Loop Inverse Kinematics）トラッキング制御をサポートします。

4. **重力補償制御**
   Pinocchio の動力学モデルに基づいて関節の重力トルクを計算し、ロボットアームの「フローティング」効果を実現します。基本版とエンドエフェクタ速度ロック版の両方をサポートします。

5. **マルチモードモータ制御**
   MIT、POS_VEL、VEL 制御モードをサポートし、Damiao および Robostride の両モータプロトコルと互換性があります。

6. **オープンソース & 拡張性**
   すべてのコードはオープンソースであり、ユーザーはニーズに応じて制御アルゴリズムや可視化効果をカスタマイズできます。

## 仕様

このチュートリアルのハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

| パラメータ | 仕様 |
|-----------|--------------|
| ロボットアームモデル | reBot Arm B601-RS 組立キット（グリッパ付き） |
| 自由度 | 6+1（グリッパ付き） |
| リーチ | 754.7 mm（グリッパ付き） / 587.5 mm（グリッパなし） |
| 可搬重量 | 定格荷重 2.5 kg / 最大荷重 5 kg |
| 関節可動範囲 | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / グリッパ: 345° ~ 0° |
| 繰り返し精度 | 0.1 mm |
| 自重 | 6.7 kg |
| サーボモータ | RobStride 06 × 3 / RobStride 00 × 4 |
| 通信方式 | CAN バス @ 1 Mbps |
| 動作電圧 | DC 48V |
| 電源 | DC 48V 15A |
| 動作温度 | -20°C ~ 50°C |
| 制御方法 | PC |

### 対応ソフトウェアプラットフォーム

| プラットフォーム | 対応状況 |
|----------|---------------|
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### 関節モータパラメータ

| パラメータ | RobStride 00 | RobStride 06 |
|-----------|--------------|--------------|
| 定格電圧 | 48V | 48V |
| 定格電流 | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| 最大電流 | 15.5 Apk ± 10% | 57 Apk ± 10% |
| 定格トルク | 5 N.m | 11 N.m |
| 最大トルク | 14 N.m | 36 N.m |
| 定格回転数 | 100 rpm ± 10% | 100 rpm ± 10% |
| 無負荷最大回転数 | 315 rpm ± 10% | 480 rpm ± 10% |
| 減速比 | 10 : 1 | 9 : 1 |
| 極対数 | 28 | — |
| モータインダクタンス | 750 ± 20 μH | 0.165 mH ± 10% |
| 線抵抗 | 1.5 ± 10% Ω | 0.23 ± 10% Ω |
| 外径 | 57 mm | 82 mm |
| 高さ | 51 ± 1 mm | 49 ± 0.5 mm |
| モータ重量 | 310 g ± 3 g | 621 g |
| エンコーダ分解能 | 14 bit（単回転絶対） | |
| エンコーダ数 | 2 | |
| エンコーダタイプ | 磁気エンコーダ（単回転） | |
| 制御インターフェース | CAN @ 1 Mbps | |
| デバッグインターフェース | UART @ 921600 bps | |
| 制御モード | MIT モード / 速度モード / 位置モード / トルクモード | |
| 保護機能 | 過温度保護：モータサーミスタ温度が 145°C を超えた場合<br />低電圧保護：モータ電圧が保護電圧 12V を下回った場合 | |

## 部品表（BOM）

| コンポーネント | 数量 | 同梱 |
|-----------|----------|----------|
| reBot Arm B601-RS ロボットアーム | 1 | ✅ |
| CANABLE | 1 | ✅ |
| 電源アダプタ（DC 48V 15A） | 1 | ✅ |
| USB-C ケーブル | 1 | ✅ |
| グリッパ | 1 | ✅ |


## 動作環境要件

:::caution 前提条件 — 先にアームのクイックスタートを完了してください
このチュートリアルを進める前に、**[reBot Arm B601-RS クイックスタート](/ja/rebot_b601_rs_getting_started)** ドキュメントを、次の内容を含めて最初から最後まで**必ず**完了してください：

- ハードウェアの開封、配線、および電源投入チェックリスト
- CAN チャネルの立ち上げ（`can0` @ 1 Mbps）とデバイス権限設定（`sudo chmod 666 /dev/can0`）
- すべての関節のゼロキャリブレーション（`2_zero_and_read.py`）と、アームが MIT / POS_VEL モードで指令に従うことの確認

このチュートリアルでは、アームがすでに CAN バス上で応答し、関節がゼロ出しされており、かつオペレータが安全限界（**アームの到達可能作業空間の 70% 以内**に留まること）に精通していることを前提としています。クイックスタートを省略すると、モータ設定ミス、関節のスタック、アームの落下などにつながる可能性があります。
:::

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **オペレーティングシステム** | Ubuntu 22.04+ |
| **通信インターフェース** | CAN インターフェース（can0） |
| **電源** | DC 48V 15A |

:::caution
ロボットアームでサンプルを実行している間は、アームの到達可能作業空間の 70% 以内で動作させる必要があります。長時間ワークスペース外に留まると、第 2 関節モータがスタック保護状態に入り、アームが落下します。
:::

---

## インストール手順

### ステップ 1. uv をインストールする（未インストールの場合）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### ステップ 2. 環境を同期する（すべての依存関係をインストール）

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` は、（存在しない場合は）自動的に仮想環境を作成し、`pyproject.toml` と `uv.lock` に基づいてすべての依存関係をインストールします。
:::

### ステップ 3. RS バージョン用に設定ファイルを変更する

この Wiki は **reBot Arm B601-RS** 向けです。サンプルを実行する前に、`config/rebotarm.yaml` 内のハードウェア設定を DM バージョンから RS バージョンに切り替えてください：

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
この設定を変更しない場合、プログラムは Damiao モータプロトコルで通信を行い、RS モータが認識されなかったり正常に動作しなかったりします。
:::


### デバッグツール

:::tip CAN チャネルのセットアップ
実機制御サンプルを実行しモータをデバッグする前に、CAN チャネルをセットアップする必要があります（PCAN-USB の場合、再接続のたびに再設定が必要です）：

```bash
# PCAN-USB should usually appear directly as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 
sudo ip link set can0 up    # Bring up can0
```

:::

<details>
<summary>デバッグツール（異常発生時のみ使用）</summary>

**単一モータコンソール — Robostride RS06（`0x01rs06_test.py`）**

Robostride RS06 単一モータテストのために、motorbridge SDK を直接使用します。RS06 モータは **CAN バス** で通信します。

**実行コマンド**：
```bash
uv run python example/0x01rs06_test.py
```

**対話コマンド**：
| コマンド | 説明 |
|---------|-------------|
| `enable` / `disable` | 有効化 / 無効化 |
| `set_zero` | ソフトウェアゼロ位置を設定 |
| `state` | 現在の状態を表示 |
| `ping` | モータに Ping を送り応答を取得 |
| `clear_error` | モータエラーをクリア |
| `mode <mit/posvel/vel>` | 制御モードを切り替え |
| `mit <pos> [vel] [kp] [kd]` | MIT モードコマンド |
| `posvel <pos> [vlim]` | POS_VEL モードコマンド |
| `vel <velocity>` | 純粋な速度モードコマンド |
| `read_param <id> [type]` | モータパラメータを読み取り |
| `write_param <id> <value> [type]` | モータパラメータを書き込み |
| `loop` | ループ制御モードに入る |
| `q` / `quit` | 終了 |

**注意**：Robostride モータは CAN インターフェース（デフォルト `can0`）を使用し、ホスト / フィードバック ID はデフォルトで `0xFD` です。モータテスト中は、まずモータを無効化し、その後再度有効化することで、正常な読み取りと制御が可能になります。

---

**ゼロキャリブレーションと角度モニタリング（`2_zero_and_read.py`）**

すべての関節のゼロ位置を自動的に設定し、関節角度をリアルタイムに表示します。

**実行コマンド**：
```bash
uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

---

## MIT / POS_VEL コントローラパラメータのチューニング {#tune-controller-params}

このセクションでは、アーム各関節のコントローラパラメータを **MIT モード** および **POS_VEL モード** で**どのように変更するか**、そしてその変更をどのように反映させるかを説明します。

:::tip このセクションは「どこ / どう変えるか」のみを扱い、「どの値を使うか」は扱いません
適切なパラメータは、**実機でのチューニング** を通じてのみ得られます。このセクションでは、パラメータがどこにあり、各フィールドが何を制御し、変更をどのように有効化して検証するかのみを扱います。具体的なチューニング手法（試行錯誤、Ziegler‑Nichols など）については、一般的なモータ制御の参考資料を参照してください。
:::

### 設定ファイルの場所

| ハードウェアバージョン | モーター設定ファイル | スイッチ項目 |
|---|---|---|
| **reBot Arm B601-RS**（本ドキュメント） | `config/rebotarm_rs.yaml` | `config/rebotarm.yaml` 内で `hardware_yaml: "rebotarm_rs.yaml"` を設定 |
| **reBot Arm B601-DM** | `config/rebotarm_dm.yaml` | `config/rebotarm.yaml` 内で `hardware_yaml: "rebotarm_dm.yaml"` を設定 |

:::caution `rebotarm.yaml` を直接編集しないでください
このファイルには `hardware_yaml: ...` という 1 行だけが含まれており、すべてのモーターのパラメータは `rebotarm_rs.yaml` / `rebotarm_dm.yaml` にあります。
:::

### 設定ファイルの構造

各関節にはそれぞれのエントリがあり、**制御モード**ごとにグループ化されています：

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0xFD
    model: "rs-06"
    vendor: "robstride"
    MIT:
      kp: 50.0
      kd: 3.0
    POS_VEL:
      vel_kp: 12.0
      vel_ki: 0.1
      pos_kp: 13.0
      vlim: 10.0
  # ... joint2 ~ joint6 follow the same structure ...
```

位置の特定方法：

- **関節名で探す**：ある関節を変更するには、`- name: jointX` ブロックを探します；
- **モードで探す**：その関節の下で、`MIT:` に MIT モードのパラメータ、`POS_VEL:` に POS_VEL モードのパラメータが入っています；
- **現在のモードが送信されるパラメータ集合を決定**：スクリプトは `mode mit` / `mode posvel` によってモードを切り替えます；モーターは対応するサブブロック内のパラメータを実際に受け取ります。

### MIT モードのフィールドの意味

| フィールド | 役割 |
|---|---|
| `kp` | 位置ループの比例ゲイン：目標位置を追従する際の「剛性」。 |
| `kd` | 速度ループの減衰ゲイン：位置誤差によって生じる振動を抑制します。 |

### POS_VEL モードのフィールドの意味

| フィールド | 役割 |
|---|---|
| `vel_kp` | 速度ループの比例ゲイン。 |
| `vel_ki` | 速度ループの積分ゲイン。 |
| `pos_kp` | 位置ループの比例ゲイン（位置・速度ハイブリッド制御のため `vlim` と組み合わせて動作）。 |
| `vlim` | 速度制限。最大移動速度の上限を設定します。 |

:::warning フィールド定義はベンダーごとに異なります
Damiao（DM）と Robostride（RS）のモーターはプロトコル層の単位が異なるため、**同じフィールド名でもベンダー間で比較可能ではありません**。RS の `vel_kp` を変更することと DM の `vel_kp` を変更することは意味が異なります。各 YAML はそれぞれのフィールド順序に従って解釈し、設定ファイル間で値を比較しないでください。
:::

### 編集手順

1. **実行中のスクリプトをすべて停止します**。YAML を編集している間もモーターは有効化されたままであり、変更は即時には反映されず、不整合な挙動が発生しやすくなります。
2. **対応する YAML ファイルを編集します**：
   ```bash
   # Example for RS
   vim config/rebotarm_rs.yaml
   ```
   - 調整が必要な関節（例：`joint1`）だけを変更し、それ以外の関節には手を加えないでください；
   - 1 つの関節内では、調整が必要なモード（MIT または POS_VEL）のみを変更し、理由なく他方のモードのフィールドを変更しないでください。
3. **YAML のインデントを保持します**：レベルごとにスペース 2 個、キーと値は `: ` で区切ります。インデントが誤っていると `yaml.safe_load` のパースが失敗し、すべてのパラメータがデフォルトにフォールバックします。
4. **保存後にスクリプトを再起動します**。YAML はスクリプト起動時に 1 度だけ読み込まれます；**実行中に編集しても即時には反映されません**。
5. **単一関節での検証**：demo3（MIT）/ demo4（POS_VEL）のようなスクリプトを使い、**小さな単一関節の動き**で変更を検証してから、全アームのテストを行ってください。

### 変更が反映されたかの確認

- **実行時の観察**：demo3 / demo4 でモーターを有効化し `state` を確認します；パラメータが変わっていないように見える、またはモーターの挙動が以前とまったく同じであれば、YAML の編集が誤っているか、デフォルト値に上書きされています。
- **YAML 自己チェック**：Python で直接パースし、1 つの関節のフィールドを出力して、値が自分が書き込んだ内容と一致しているか確認します：
  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_rs.yaml'))['joints'][0])"
  ```
- **クイックロールバック**：`git checkout config/rebotarm_rs.yaml` でリポジトリのデフォルトに戻せます。

:::caution 多数の関節を一度にチューニングしないでください
複数の関節で `kp` / `kd` を一度に大きく変更すると、どれか 1 つでも方向や符号が誤っていた場合、瞬時に振動・過電流・急停止を引き起こす可能性があります。**1 回につき 1 関節・1 モードだけを、小さなステップで反復調整**してください。
:::

---

## 基本制御テスト

### MIT モード全関節制御（`3_mit_control.py`）

すべての関節を MIT モードで統一し、各サイクルで同期的に制御コマンドを送信します。

**入力**：すべての関節角度（度）、スペース区切り。グリッパーが設定されている場合は、追加でグリッパー角度が必要です。

**実行コマンド**：
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
このサンプルには**経路計画や速度計画が一切ありません**。大きな目標関節角度を与えると、モーターは非常に高速で動作し、**モーターの過電流保護を直接トリガーする**可能性もあります。推奨事項：

- まずは**小さな角度**（例：単一関節を 5〜10 度だけ動かす）で検証し、モーターの応答と方向が正しいことを確認してからスケールアップしてください；
- このセクションには**スムーズな軌道版は組み込まれていません**。複数の目標間で滑らかな遷移が必要な場合は、目標値とタイミングを慎重に制御するか、後述の [スムーズ軌道 IK 制御（8_arm_traj_control.py）](#demo8-traj-control) を参照し、最小ジャーク／加減速計画の手法を自分のスクリプトに移植してください；
- 動作中は、アームの作業半径内に人や他の機器を近づけないでください。
:::

---

<details>
<summary>POS_VEL モード全関節制御（通常は reBot RS では非推奨、必要に応じて参照）</summary>

:::warning 適合性に関する注意
**reBot Arm B601-RS** では、POS_VEL（Position‑Velocity）モードで許容できる結果を得るには、**別途パラメータチューニング**が必要です（デフォルトパラメータは一般的に MIT モードより性能が劣ります）。そのため通常のワークフローでは**推奨されません**が、一部のユーザーには必要な場合があるため、**本デモはオンデマンドでの参照とチューニング用として残してあります**。特別な必要がなければ、上記の MIT モードのサンプルを使用してください。
:::

**POS_VEL モード全関節制御（`4_pos_vel_control.py`）**

すべての関節の目標角度を入力し、POS_VEL（位置・速度）ハイブリッド制御モードでモーター制御を行うことで、目標角度到達時の動作をより滑らかで制御しやすくし、振動を低減します。

**実行コマンド**：
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

---
</details>

---

## 運動学テスト

### 順運動学テスト（`5_fk_test.py`）

関節角度に基づいてエンドエフェクタの姿勢を計算します。

**入力**：6 関節角度（度）

**出力**：
- エンドエフェクタ位置（X, Y, Z）— 単位：メートル
- 回転行列（3×3）
- オイラー角（ロール／ピッチ／ヨー）— 単位：度

**例**：
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

### 逆運動学テスト（`6_ik_test.py`）

所望のエンドエフェクタ姿勢に基づいて関節角度を求めます。

**入力形式**：
- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）

**例**：
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + orientation
```

### MIT モードでの逆運動学制御（`7_arm_ik_control.py`）

MIT モードで逆運動学（IK）を使用し、ロボットアームのエンドエフェクタが移動すべき 3D 座標（X, Y, Z）と姿勢（オイラー角）を指定します。

**入力形式**：
- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- `state` を入力：各関節の現在の実ラジアン値を表示。
- `end_state` を入力：空間内での現在のエンドエフェクタ実座標（m）とオイラー角（rad）を表示。

**実行コマンド**：
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Exit system
```
:::danger
このサンプルには**経路計画や速度計画が一切ありません**。大きな目標角度を与えると、モーターは非常に高速で動作し、**モーターの過電流保護を直接トリガーする**可能性もあります。推奨事項：

- まずは**小さな角度**（例：エンドエフェクタを現在位置から 5〜10 cm だけ動かす）で検証し、姿勢と方向が正しいことを確認してからスケールアップしてください；
- 目標間のスムーズな遷移が必要な場合は、次のセクション [スムーズ軌道付き逆運動学制御（8_arm_traj_control.py）](#demo8-traj-control) に直接進んでください。ここでは最小ジャーク／加減速計画を使用します；
- 動作中は、アームの作業半径内に人や他の機器を近づけないでください。
:::

### スムーズ軌道付き逆運動学制御（`8_arm_traj_control.py`） {#demo8-traj-control}

MIT モードで逆運動学（IK）を使用し、目標時間内で一様または滑らかな加減速の動作軌道を自動計画して、関節の激しい振動を回避します。

**入力形式**：
- 位置のみ：`<x> <y> <z>`（メートル）
- 位置 + 姿勢：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 位置 + 姿勢 + 時間（デフォルト 2.0）：`<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
- `state` を入力：各関節の現在の実ラジアン値を表示。
- `end_state` を入力：空間内での現在のエンドエフェクタ実座標（m）とオイラー角（rad）を表示。

**実行コマンド**：
```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Exit system
```

:::tip 姿勢のずれが見られる場合は？
**読み取ったエンドエフェクタ姿勢**が**指令した目標姿勢**と異なり、かつその**姿勢自体は到達可能**（作業空間外でも特異姿勢でもない）な場合、問題は MIT / POS_VEL コントローラのパラメータにある可能性が高いです。その場合は、前述の [MIT / POS_VEL コントローラパラメータのチューニング](#MIT--POS_VEL-コントローラパラメータのチューニング) セクションを参照し、「単一関節・モードごと・小さなステップ」で `kp` / `kd` などを手動で調整してください。チューニングが完了したら、このサンプルに戻って動作を確認します。
:::

### 重力補償制御 — 基本バージョン（`9_gravity_compensation.py`）

Pinocchio の動力学モデルを使用して、関節の重力を補償します。

**制御則**：
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**期待される動作**：
- ロボットアームが任意の姿勢で「浮いた」状態を保てる
- 手を離しても自重で落下しない
- 手で任意の位置に動かすことができる

**実行コマンド**：
```bash
uv run python example/9_gravity_compensation.py
```

**出力**：
- 各関節の目標トルクをリアルタイム表示（N·m）
- `Ctrl+C` を押して停止および切断

:::caution 重力補償を終了する前にホームに戻す
スクリプトを停止する際（`Ctrl+C`）、プログラムは**すべてのモータを直接無効化**し、ロボットアームは**自動的にゼロ位置へは戻りません**。関節が急に落下して衝突や損傷を引き起こすのを避けるため、終了前に必ずロボットアームを手で支えるか、安全／ホーム姿勢に移動させてください。
:::

:::tip 個別関節の補償調整
一部の関節が構造的な摩擦や組み立て誤差により、重力補償が不足または過剰になっている場合、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます：

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、2 番目の関節の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際のフローティング状態を見ながら項目ごとに調整することを推奨します。
:::

---

### 重力補償制御 — エンドエフェクタ速度ロック版（`10_gravity_compensation_lock.py`）

基本的な重力補償に基づき、エンドエフェクタ速度検出と関節角ロック機構を追加します。

**制御則**：
```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**ロックロジック**：
- エンドの並進速度 `||v_ee|| < 0.04 m/s` かつ角速度 `||w_ee|| < 0.08 rad/s` のとき：
  - 目標関節角 `q_target` はロックされたまま
  - ロボットアームは現在位置にロックされる
- エンド速度がしきい値を超えたとき：
  - `q_target` が現在の関節角に更新される
  - 手で押して位置を変更できる

**期待される動作**：
- ロボットアームが現在位置にロックされ、目標角度を変えるには力が必要
- 基本版より安定しており、姿勢保持が必要なシナリオに適している

**実行コマンド**：
```bash
uv run python example/10_gravity_compensation_lock.py
```

**出力**：
- ロック状態をリアルタイム表示（LOCKED / UPDATE）
- エンドの並進速度・角速度
- 各関節の重力補償トルク（N·m）
- `Ctrl+C` を押して停止および切断

:::caution 重力補償を終了する前にホームに戻す
スクリプトを停止する際（`Ctrl+C`）、プログラムは**すべてのモータを直接無効化**し、ロボットアームは**自動的にゼロ位置へは戻りません**。関節が急に落下して衝突や損傷を引き起こすのを避けるため、終了前に必ずロボットアームを手で支えるか、安全／ホーム姿勢に移動させてください。
:::

:::tip 個別関節の補償調整
一部の関節が構造的な摩擦や組み立て誤差により、重力補償が不足または過剰になっている場合、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます：

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、2 番目の関節の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際のフローティング状態を見ながら項目ごとに調整することを推奨します。
:::

**安全テスト用設定**：
スクリプト先頭の `ENABLED_JOINTS` リストを変更することで、安全テストのために指定した関節のみを有効化できます：
```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

---

### シミュレーション環境

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" />
</div>


#### 順運動学シミュレーション（`sim/fk_sim.py`）

対話的な順運動学シミュレーションで、関節角度を入力してロボットアームの姿勢を MeshCat 上に可視化します。

**実行コマンド**：
```bash
uv run python example/sim/fk_sim.py
```

**対話コマンド**：
- 6 つの関節角度（度）をスペース区切りで入力
- 例：`0 0 0 0 0 0`
- 例：`45 -30 15 -60 90 -180`
- `q` / `quit` / `exit`：終了

**機能**：
- エンドエフェクタの位置と姿勢をリアルタイム表示
- 連続入力により、さまざまな姿勢をテスト可能
- 整形された姿勢情報を出力

---

#### 逆運動学シミュレーション（`sim/ik_sim.py`）

対話的な逆運動学シミュレーションで、目標姿勢に対して自動的に関節角度を解き、可視化します。

**実行コマンド**：
```bash
uv run python example/sim/ik_sim.py
```

**入力形式**：
- 位置のみ：`x y z`（メートル）
- 位置 + 姿勢：`x y z roll pitch yaw`（ラジアン）

**入力例**：
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position + orientation
```

**機能**：
- IK が収束したかどうかを自動判定
- 反復回数と誤差を表示
- ロボット姿勢をリアルタイム更新

---

#### 軌道計画シミュレーション（`sim/traj_sim.py`）

SE(3) 測地線軌道計画シミュレーションで、CLIK 追従および MeshCat アニメーション再生を含みます。

**実行コマンド**：
```bash
uv run python example/sim/traj_sim.py
```

**対話コマンド**：
- 入力：`x y z [roll pitch yaw]`（メートル／ラジアン）
- Enter を直接押すとデフォルト設定を使用
- `q`：終了

**機能**：
- 現在位置から目標姿勢までの軌道を計画
- 最小ジャーク軌道プロファイルを使用
- 軌道統計情報をリアルタイム表示
- MeshCat 上で軌道全体のアニメーションを再生
- 参照経路（灰色）と実際の経路（緑色）を表示

---

#### 可視化ツール（`sim/visualizer.py`）

MeshCat ビジュアライザのラッパーで、統一されたロボット表示インターフェースを提供します。

**主な機能**：
- URDF モデルを読み込み、ロボットを表示
- 3D ポリライン経路（参照／実際）を描画
- IK 目標姿勢を表示（三色軸 + 球）
- 関節軌道アニメーションの再生をサポート

**使用例**：
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```


---

## FAQ

- **`Permission denied` エラーが発生する**
  デバイス権限を設定するために、`sudo chmod 666 /dev/ttyACM0`（Damiao）または `sudo chmod 666 /dev/can0`（Robostride）を実行していることを確認してください。

- **IK の解が失敗する、または結果がおかしい**
  目標姿勢がロボットアームの作業空間内にあるか確認し、関節リミットが正しく設定されていることを確認してください。

- **重力補償の効果が悪い**
  構造誤差や加工精度が原因の可能性があります。本プロジェクトの重力補償は URDF と Pinocchio に依存しています。実測したパラメータに合わせて URDF を修正してみてください（このステップは AI に相談することもできます）。

- **Robostride モータのステータスが読み取れない**
  motorbridge 内部のプロトコル設定の問題により、RS モータは DM モータのようにステータスを問い合わせできない場合があります。実際の動作結果に基づいて判断するか、`ping` コマンドを使用してモータ通信が正常か確認してみてください。

- **Damiao と Robostride のモータ設定を切り替える方法**
  `config/rebotarm_dm.yaml`（Damiao）または `config/rebotarm_rs.yaml`（Robostride）設定ファイルを変更し、コード内で対応する設定を読み込んでください。

- **ロボットアームがアーム到達範囲の 70% を超える領域で長時間静止していると、第 2 関節モータがスタール保護に入る**  
  ロボットアームの電源を入れ直してください。第 2 関節モータのスタール保護エラーは自動的にクリアされます。

---

## 連絡先

- **技術サポート**： [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **プロジェクトリポジトリ**： [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **フォーラム**： [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考ドキュメント

- [Pinocchio 公式ドキュメント](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat 公式ドキュメント](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---