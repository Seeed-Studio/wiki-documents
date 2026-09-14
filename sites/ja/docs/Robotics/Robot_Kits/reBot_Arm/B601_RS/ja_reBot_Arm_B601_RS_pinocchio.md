---
description: このチュートリアルでは、ロボットアーム reBot Arm B601-RS に対して、Pinocchio と MeshCat を用いた運動学解析および可視化の方法を紹介します。
title: reBot Arm B601-RS 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - Robotic Arm
  - Robot
  - LeRobot
  - Kinematics
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
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_pinocchio_meshcat/
---

import '/src/css/rebot-wiki-style.css';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS 向け Pinocchio と MeshCat 入門

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · マルチモーター対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>

<p align="center">
  <a href="https://github.com/stack-of-tasks/pinocchio">Pinocchio</a> は、ロボットのダイナミクス解析と最適化のためのオープンソースライブラリです。効率的な順運動学 / 逆運動学、動力学計算、および軌道計画を提供します。
</p>

<p align="center">
  <a href="https://github.com/rdeits/meshcat">MeshCat</a> は、ロボットの状態や運動軌跡をリアルタイムに表示できる Web ベースの 3D 可視化ツールです。
</p>

このプロジェクトは、Pinocchio の強力な計算機能と MeshCat の直感的な可視化を組み合わせ、reBot Arm B601-RS 向けに、運動学解析とデバッグのための完全なツールセットを提供します。


---

## プロジェクトの特長

1. **完全な運動学解析**
   順運動学（FK）および逆運動学（IK）計算をサポートし、ロボットアームのエンドエフェクタ姿勢をリアルタイムで解くことができます。

2. **リアルタイム 3D 可視化**
   追加ソフトウェアなしで、MeshCat を通じてブラウザ上にロボットアームの状態と運動軌跡をリアルタイム表示します。

3. **軌道計画とトラッキング**
   SE(3) 測地線軌道計画を実装し、CLIK（Closed-Loop Inverse Kinematics）トラッキング制御をサポートします。

4. **重力補償制御**
   Pinocchio の動力学モデルに基づいて関節の重力トルクを計算し、ロボットアームに「フローティング」効果を実現します。基本版とエンドエフェクタ速度ロック版の両方をサポートします。

5. **マルチモードモーター制御**
   MIT、POS_VEL、VEL 制御モードをサポートし、Damiao および Robostride の両モータープロトコルと互換性があります。

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
| サーボモーター | RobStride 06 × 3 / RobStride 00 × 4 |
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

### 関節モーターパラメータ

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
| モーターインダクタンス | 750 ± 20 μH | 0.165 mH ± 10% |
| 線抵抗 | 1.5 ± 10% Ω | 0.23 ± 10% Ω |
| 外径 | 57 mm | 82 mm |
| 高さ | 51 ± 1 mm | 49 ± 0.5 mm |
| モーター重量 | 310 g ± 3 g | 621 g |
| エンコーダ分解能 | 14 bit（単回転アブソリュート） | |
| エンコーダ数 | 2 | |
| エンコーダタイプ | 磁気エンコーダ（単回転） | |
| 制御インターフェース | CAN @ 1 Mbps | |
| デバッグインターフェース | UART @ 921600 bps | |
| 制御モード | MIT モード / 速度モード / 位置モード / トルクモード | |
| 保護機能 | 過温度保護：モーターサーミスタ温度が 145°C を超えた場合<br />低電圧保護：モーター電圧が保護電圧 12V を下回った場合 | |

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
このチュートリアルを進める前に、**[reBot Arm B601-RS クイックスタート](/ja/rebot_b601_rs_getting_started)** ドキュメントを、次を含めて最初から最後まで**必ず**完了してください：

- ハードウェアの開封、配線、および電源投入チェックリスト
- CAN チャネルの立ち上げ（`can0` @ 1 Mbps）とデバイス権限の設定（`sudo chmod 666 /dev/can0`）
- すべての関節のゼロキャリブレーション（`2_zero_and_read.py`）と、アームが MIT / POS_VEL モードで指令に従うことの確認

このチュートリアルでは、アームがすでに CAN バス上で応答し、関節がゼロ出しされており、かつオペレータが安全限界（**アームの到達可能作業空間の 70% 以内**に留まること）に精通していることを前提としています。クイックスタートを省略すると、モーターの誤設定、関節のスタック、アームの落下などにつながる可能性があります。
:::

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **オペレーティングシステム** | Ubuntu（Ubuntu 24.04 LTS 推奨） |
| **通信インターフェース** | CAN インターフェース（can0） |
| **電源** | DC 48V 15A |

:::caution
ロボットアームでサンプルを実行している間は、アームの到達可能作業空間の 70% 以内で動作させる必要があります。長時間ワークスペース外に留まると、第 2 関節モーターがスタック保護状態に入り、アームが落下します。
:::

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
`uv sync` は、（存在しない場合は）自動的に仮想環境を作成し、`pyproject.toml` と `uv.lock` に基づいてすべての依存関係をインストールします。
:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>RS ハードウェア構成に切り替える</h4>
<p className="rebot-step-label">Step 3</p>

この Wiki は **reBot Arm B601-RS** 用です。サンプルを実行する前に、`config/rebotarm.yaml` 内のハードウェア構成を DM 版から RS 版に切り替えてください：

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
この設定を変更しない場合、プログラムは Damiao モータープロトコルで通信を行い、RS モーターが認識されなかったり、正常に動作しなかったりします。
:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>CAN チャネルを設定する</h4>
<p className="rebot-step-label">Step 4</p>

:::tip CAN チャネルの設定
実機制御サンプルを実行したりモーターをデバッグしたりする前に、CAN チャネルを設定する必要があります（PCAN-USB の場合、再接続のたびに再設定が必要です）：

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

**単一モーターコンソール — Robostride RS06（`0x01rs06_test.py`）**

Robostride RS06 の単一モーターテストに motorbridge SDK を直接使用します。RS06 モーターは **CAN バス** で通信します。

**実行コマンド**:
```bash
uv run python example/0x01rs06_test.py
```

**対話コマンド**:
| コマンド | 説明 |
|---------|-------------|
| `enable` / `disable` | 有効化 / 無効化 |
| `set_zero` | ソフトウェアゼロ位置を設定 |
| `state` | 現在の状態を表示 |
| `ping` | モーターに Ping を送り応答を取得 |
| `clear_error` | モーターエラーをクリア |
| `mode <mit/posvel/vel>` | 制御モードを切り替え |
| `mit <pos> [vel] [kp] [kd]` | MIT モードコマンド |
| `posvel <pos> [vlim]` | POS_VEL モードコマンド |
| `vel <velocity>` | 純粋な速度モードコマンド |
| `read_param <id> [type]` | モーターパラメータを読み取り |
| `write_param <id> <value> [type]` | モーターパラメータを書き込み |
| `loop` | ループ制御モードに入る |
| `q` / `quit` | 終了 |

**注意**: Robostride モーターは CAN インターフェース（デフォルトは `can0`）を使用し、ホスト/フィードバック ID のデフォルトは `0xFD` です。モーターのテスト中は、まずモーターを無効化し、その後再度有効化してからでないと、正常な読み取りと制御ができません。

---

**ゼロ点キャリブレーションと角度モニタリング（`2_zero_and_read.py`）**

すべての関節のゼロ位置を自動設定し、関節角度をリアルタイムに表示します。

**実行コマンド**:
```bash
uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

</div>
</section>
</div>

---

## MIT / POS_VEL コントローラパラメータのチューニング {#tune-controller-params}

このセクションでは、アームの各関節について **MIT モード** および **POS_VEL モード** でのコントローラパラメータを**どのように変更するか**、そしてその変更を有効にする方法を説明します。

:::tip このセクションは「どこ / どう変えるか」のみを扱い、「どの値を使うか」は扱いません
適切なパラメータは **実機でのチューニング** によってのみ得られます。このセクションでは、パラメータがどこにあり、各フィールドが何を制御し、どのように変更を有効化して検証するかだけを扱います。具体的なチューニング手法（試行錯誤、Ziegler‑Nichols など）については、一般的なモータ制御の参考資料を参照してください。
:::

### 設定ファイルの場所

| ハードウェアバージョン | モーター設定ファイル | 切り替え方法 |
|---|---|---|
| **reBot Arm B601-RS**（本ドキュメント） | `config/rebotarm_rs.yaml` | `config/rebotarm.yaml` 内で `hardware_yaml: "rebotarm_rs.yaml"` を設定 |
| **reBot Arm B601-DM** | `config/rebotarm_dm.yaml` | `config/rebotarm.yaml` 内で `hardware_yaml: "rebotarm_dm.yaml"` を設定 |

:::caution `rebotarm.yaml` を直接編集しないでください
このファイルには `hardware_yaml: ...` という 1 行だけが含まれており、すべてのモータパラメータは `rebotarm_rs.yaml` / `rebotarm_dm.yaml` に記述されています。
:::

### 設定ファイルの構造

各関節にはそれぞれのエントリがあり、**制御モード** ごとにグループ化されています:

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

探し方:

- **関節名で探す**: ある関節を変更するには、`- name: jointX` ブロックを探します;
- **モードで探す**: その関節の下で、`MIT:` に MIT モードのパラメータ、`POS_VEL:` に POS_VEL モードのパラメータが入っています;
- **現在のモードが送信されるセットを決める**: スクリプトは `mode mit` / `mode posvel` でモードを切り替えます。モーターには、対応するサブブロック内のパラメータが実際に送信されます。

### MIT モードのフィールドの意味

| フィールド | 役割 |
|---|---|
| `kp` | 位置ループの比例ゲイン：目標位置追従の「剛性」。 |
| `kd` | 速度ループの減衰ゲイン：位置誤差による振動を抑制します。 |

### POS_VEL モードのフィールドの意味

| フィールド | 役割 |
|---|---|
| `vel_kp` | 速度ループの比例ゲイン。 |
| `vel_ki` | 速度ループの積分ゲイン。 |
| `pos_kp` | 位置ループの比例ゲイン（`vlim` と組み合わせて位置・速度ハイブリッド制御を行います）。 |
| `vlim` | 速度制限。動作速度の上限を制限します。 |

:::warning フィールド定義はベンダーごとに異なります
Damiao（DM）と Robostride（RS）のモーターはプロトコル層の単位が異なるため、**同じフィールド名でもベンダー間で比較可能ではありません**。RS の `vel_kp` を変更することと DM の `vel_kp` を変更することは意味が異なります。各 YAML はそれぞれのフィールド順序に従って解釈し、設定ファイル間で値を比較しないでください。
:::

:::caution チューニング前にテスト範囲を限定する
複数の関節にわたって `kp` / `kd` を大きく変更すると、どれかの関節の方向や符号が誤っている場合に、即座に振動・過電流・ストッパーへの衝突を引き起こす可能性があります。チューニング前にアームの作業空間を片付け、**1 回に 1 関節・1 モードのみ、小さなステップで** テストする計画を立ててください。
:::

### 編集手順

1. **実行中のスクリプトをすべて停止します**。YAML を編集している間もモーターは有効化されたままであり、変更はすぐには反映されないため、不整合な挙動が発生しやすくなります。
2. **対応する YAML ファイルを編集します**:
   ```bash
   # Example for RS
   vim config/rebotarm_rs.yaml
   ```
   - チューニングが必要な関節（例: `joint1`）だけを変更し、それ以外の関節はそのままにしておきます;
   - 1 つの関節内では、チューニングが必要なモード（MIT または POS_VEL）のみを変更し、理由なく他方のモードのフィールドを変更しないでください。
3. **YAML のインデントを保持します**: レベルごとにスペース 2 個、キーと値は `: ` で区切ります。インデントが誤っていると `yaml.safe_load` のパースに失敗し、すべてのパラメータがデフォルトにフォールバックします。
4. **保存後にスクリプトを再起動します**。YAML はスクリプト起動時に 1 度だけ読み込まれ、**実行中に編集してもすぐには反映されません**。
5. **単関節での検証**: demo3（MIT）/ demo4（POS_VEL）のようなスクリプトを使い、**小さな単関節動作** で変更を検証してから、フルアームのテストを行ってください。

### 変更が反映されたことの確認

- **実行時の観察**: demo3 / demo4 でモーターを有効化し `state` を確認します。パラメータが変わっていないように見える、またはモーターの挙動が以前とまったく同じであれば、YAML の編集が誤っているか、デフォルト値に上書きされています。
- **YAML の自己チェック**: Python で直接パースし、1 つの関節のフィールドを出力して、値が自分で書き込んだ内容と一致していることを確認します:
  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_rs.yaml'))['joints'][0])"
  ```
- **素早いロールバック**: `git checkout config/rebotarm_rs.yaml` でリポジトリのデフォルトに戻せます。

---

## 基本制御テスト

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>MIT モードによる全関節制御</h4>
<p className="rebot-step-label">Demo 3 · 3_mit_control.py</p>

すべての関節を MIT モードで統一し、各サイクルごとに同期して制御コマンドを送信します。

**入力**: すべての関節角度（度）。スペース区切り。グリッパーが設定されている場合は、追加でグリッパー角度が 1 つ必要です。

:::danger オプション — この例にはスムーズな軌道計画がありません
この例では、**経路や速度の計画を行わずに** 目標関節角度をそのままモーターに送信します。目標値の変化が大きいと、急激な高速動作を引き起こし、過電流保護が作動する可能性があります。

- この例はチュートリアルを完了するために必須ではありません。安全でスムーズなアーム動作が目的であれば、**この例はスキップ** して、直接 [スムーズな軌道 IK 制御（`8_arm_traj_control.py`）](#demo8-traj-control) に進んでください;
- 低レベルの MIT 関節制御を検証する必要がある場合にのみ実行してください。最初は 1 つの関節を 5〜10 度だけ動かし、応答と方向を確認してから徐々に変化量を増やしてください;
- 実行前にアームの作業空間を片付け、すぐに電源を切れるようにしておいてください。
:::

<details className="rebot-demo-details">
<summary>実行手順を表示（オプション）</summary>

**実行コマンド**:
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
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
<h4>POS_VEL モードによる全関節制御（オプション）</h4>
<p className="rebot-step-label">Demo 4 · 4_pos_vel_control.py</p>

:::warning オプション — デフォルトパラメータではスムーズな動作は保証されません
この例では、各関節の位置目標を直接更新し、完全な軌道計画は含まれていません。**reBot Arm B601-RS** では、POS_VEL（位置・速度）モードで良好な結果を得るには **別途パラメータチューニング** が必要であり、デフォルトパラメータは、適切にチューニングされた MIT モードと比べて一般的に滑らかではありません。

この例はチュートリアルを完了するために必須ではありません。POS_VEL モードを特にデバッグする必要がない限り、**この例はスキップ** して、直接 [スムーズな軌道 IK 制御（`8_arm_traj_control.py`）](#demo8-traj-control) に進んでください。実行する場合は、小さな目標変化だけを使用し、人や機器をアームの作業空間の外に置いてください。
:::

POS_VEL（位置・速度ハイブリッド）モードでモーターを制御するために、すべての関節の目標角度を入力します。適切にチューニングされていれば、このモードは目標角度に到達する際の速度を制限できますが、この例自体は完全なスムーズ軌道計画を提供しません。

<details className="rebot-demo-details">
<summary>実行手順を表示（オプション）</summary>

**実行コマンド**:
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>
</div>

## 運動学テスト

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>順運動学テスト</h4>
<p className="rebot-step-label">Demo 5 · 5_fk_test.py</p>

関節角度に基づいてエンドエフェクタの姿勢を計算します。

**入力**: 6 関節角度（度）

**出力**:
- エンドエフェクタ位置（X, Y, Z）— 単位: メートル
- 回転行列（3×3）
- オイラー角（ロール / ピッチ / ヨー）— 単位: 度

**例**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>逆運動学テスト</h4>
<p className="rebot-step-label">Demo 6 · 6_ik_test.py</p>

目標とするエンドエフェクタの姿勢に基づいて関節角度を求めます。

**入力形式**:
- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）

**例**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + orientation
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>MIT モードでの逆運動学制御（オプション）</h4>
<p className="rebot-step-label">Demo 7 · 7_arm_ik_control.py</p>

MIT モードで逆運動学（IK）を使用して、ロボットアームのエンドエフェクタが移動すべき 3D 座標（X, Y, Z）と姿勢（オイラー角）を指定します。

**入力形式**:
- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）
- `state` を入力: 各関節の現在の実際のラジアン値を表示。
- `end_state` を入力: 空間内の現在のエンドエフェクタの実際の座標（m）とオイラー角（rad）を表示。

:::danger オプション — この例にはスムーズな軌道計画がありません
この例では IK 解をそのまま関節目標として送信し、**経路や速度の計画は一切行いません**。目標姿勢の変化が大きいと、急激な高速動作を引き起こし、過電流保護が作動する可能性があります。

- この例はチュートリアルを完了するために必須ではありません。ほとんどの場合、**この例はスキップ**し、最小ジャークの加減速計画を含む次のセクション [スムーズ軌道 IK 制御（`8_arm_traj_control.py`）](#demo8-traj-control) を使用してください。
- 軌道計画なしの IK 制御を比較またはデバッグする必要がある場合にのみ実行してください。最初の目標は現在のエンドエフェクタ位置から 5〜10 cm 以内に収めてください。
- 実行前に、目標姿勢が到達可能であることを確認し、作業空間から人や障害物を取り除き、すぐに電源を切れるようにしておいてください。
:::

<details className="rebot-demo-details">
<summary>実行手順を表示（オプション）</summary>

**実行コマンド**:
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--recommended">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4 id="demo8-traj-control">スムーズ軌道付き逆運動学制御（推奨）</h4>
<p className="rebot-step-label">Demo 8 · 8_arm_traj_control.py</p>

MIT モードで逆運動学（IK）を使用し、目標時間内で一様またはスムーズな加減速の動作軌道を自動計画して、関節の激しい振動を回避します。

**入力形式**:
- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 位置 + 姿勢 + 時間（デフォルト 2.0）: `<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
- `state` を入力: 各関節の現在の実際のラジアン値を表示。
- `end_state` を入力: 空間内の現在のエンドエフェクタの実際の座標（m）とオイラー角（rad）を表示。

**実行コマンド**:
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

:::tip 姿勢のずれが見られた場合は？
**読み取ったエンドエフェクタ姿勢**が**指令した目標姿勢**と異なり、かつその**姿勢自体は到達可能**（作業空間外でも特異姿勢でもない）な場合、問題は MIT / POS_VEL コントローラのパラメータにある可能性が高いです。その場合は、前述の [MIT / POS_VEL コントローラパラメータのチューニング](#tune-controller-params) セクションを参照し、「単一関節・モードごと・小さなステップ」というアプローチで `kp` / `kd` などを手動で調整してください。チューニング後、この例に戻って検証します。
:::

</div>
</section>
</div>

## 重力補償テスト

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">9</span>
<div className="rebot-step-content">
<h4>重力補償制御 — 基本バージョン</h4>
<p className="rebot-step-label">Demo 9 · 9_gravity_compensation.py</p>

Pinocchio 動力学モデルを使用して、関節の重力を補償します。

**制御則**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**期待される動作**:
- ロボットアームは任意の姿勢で「浮遊」できる
- 手を離しても自重で落下しない
- 手動で任意の位置に動かすことができる

:::caution 通常終了時には安全なホーム復帰を実行
`Ctrl+C` でスクリプトを通常停止すると、まず重力補償制御を停止し、剛性の高いゲインと重力フィードフォワードで現在の姿勢を保持します。その後、最小ジャーク軌道でアームをゼロ位置に戻し、ホーム復帰が完了してからモータを切り離して無効化します。

自動ホーム復帰は、プログラムの正常な実行、通信、および電源に依存します。アームの作業空間の外に人や障害物を置き、ホーム復帰中にアームを支えられるよう準備しておいてください。通信障害、予期しない電源断、強制終了などが発生すると、保護シーケンスが完了しない場合があります。異常な動作が発生した場合は、直ちに電源を切ってください。
:::

**実行コマンド**:
```bash
uv run python example/9_gravity_compensation.py
```

**出力**:
- 各関節の目標トルクをリアルタイム表示（N·m）
- `Ctrl+C` を押して停止および切断

:::tip 個々の関節補償の調整
一部の関節が構造的な摩擦や組立の違いにより過小補償または過大補償になっている場合、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます。

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、関節 2 の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際の浮遊状態を見ながら項目ごとに調整することを推奨します。
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">10</span>
<div className="rebot-step-content">
<h4>重力補償制御 — エンドエフェクタ速度ロック版</h4>
<p className="rebot-step-label">Demo 10 · 10_gravity_compensation_lock.py</p>

基本的な重力補償に基づき、エンドエフェクタ速度検出と関節角ロック機構を追加します。

**制御則**:
```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**ロックロジック**:
- エンドの並進速度 `||v_ee|| < 0.04 m/s` かつ角速度 `||w_ee|| < 0.08 rad/s` のとき:
  - 目標関節角 `q_target` はロックされたまま
  - ロボットアームは現在位置にロックされる
- エンド速度がしきい値を超えたとき:
  - `q_target` が現在の関節角に更新される
  - 手で押して位置を変更できる

**期待される動作**:
- ロボットアームは現在位置にロックされ、目標角度を変えるには力が必要
- 基本バージョンより安定しており、姿勢維持が必要なシナリオに適している

:::caution 通常終了時には安全なホーム復帰を実行
`Ctrl+C` でスクリプトを通常停止すると、まず重力補償制御を停止し、剛性の高いゲインと重力フィードフォワードで現在の姿勢を保持します。その後、最小ジャーク軌道でアームをゼロ位置に戻し、ホーム復帰が完了してからモータを切り離して無効化します。

自動ホーム復帰は、プログラムの正常な実行、通信、および電源に依存します。アームの作業空間の外に人や障害物を置き、ホーム復帰中にアームを支えられるよう準備しておいてください。通信障害、予期しない電源断、強制終了などが発生すると、保護シーケンスが完了しない場合があります。異常な動作が発生した場合は、直ちに電源を切ってください。
:::

**実行コマンド**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**出力**:
- ロック状態をリアルタイム表示（LOCKED / UPDATE）
- エンドの並進速度、角速度
- 各関節の重力補償トルク（N·m）
- `Ctrl+C` を押して停止および切断

:::tip 個々の関節補償の調整
一部の関節が構造的な摩擦や組立の違いにより過小補償または過大補償になっている場合、コード内の `tau_g` 配列の該当要素に追加のスケーリングを適用できます。

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

例えば、`tau_g[2] *= 1.2` は、関節 2 の重力補償トルクを 20% 増加させることを意味します。一度に大きく変更しすぎないよう、実際の浮遊状態を見ながら項目ごとに調整することを推奨します。
:::

**安全テスト用設定**:
スクリプト先頭の `ENABLED_JOINTS` リストを変更することで、安全テストのために指定した関節のみを有効にできます。
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
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/meshcat_RS.png" alt="MeshCat simulation of the reBot Arm B601-RS" />
</div>

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S1</span>
<div className="rebot-step-content">
<h4>順運動学シミュレーション</h4>
<p className="rebot-step-label">シミュレーションデモ 1 · sim/fk_sim.py</p>

インタラクティブな順運動学シミュレーションで、関節角度を入力して、MeshCat 上にロボットアームの姿勢を可視化します。

**実行コマンド**:
```bash
uv run python example/sim/fk_sim.py
```

**インタラクティブコマンド**:
- 6 つの関節角度（度）をスペース区切りで入力
- 例: `0 0 0 0 0 0`
- 例: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: 終了

**機能**:
- エンドエフェクタの位置と姿勢をリアルタイム表示
- 連続入力に対応し、さまざまな姿勢をテスト可能
- 整形された姿勢情報を出力

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S2</span>
<div className="rebot-step-content">
<h4>逆運動学シミュレーション</h4>
<p className="rebot-step-label">シミュレーションデモ 2 · sim/ik_sim.py</p>

インタラクティブな逆運動学シミュレーションで、目標姿勢に対して自動的に関節角度を解き、可視化します。

**実行コマンド**:
```bash
uv run python example/sim/ik_sim.py
```

**入力形式**:
- 位置のみ: `x y z`（メートル）
- 位置 + 姿勢: `x y z roll pitch yaw`（ラジアン）

**例**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.29545 0.0 0.28664 0 0.17453 0  # Position + orientation
```

**機能**:
- IK が収束するかどうかを自動判定
- 反復回数と誤差を表示
- ロボット姿勢をリアルタイム更新

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S3</span>
<div className="rebot-step-content">
<h4>軌道計画シミュレーション</h4>
<p className="rebot-step-label">シミュレーションデモ 3 · sim/traj_sim.py</p>

SE(3)測地線軌道計画シミュレーションで、CLIK 追従および MeshCat アニメーション再生を含みます。

**実行コマンド**:
```bash
uv run python example/sim/traj_sim.py
```

**インタラクティブコマンド**:
- 入力: `x y z [roll pitch yaw]`（メートル/ラジアン）
- Enter キーのみを押すとデフォルト設定を使用
- `q`: 終了

**機能**:
- 現在位置から目標姿勢までの軌道を計画
- 最小ジャーク軌道プロファイルを使用
- 軌道統計情報をリアルタイム表示
- MeshCat 上で軌道全体のアニメーションを再生
- 参照軌道（灰色）と実際の軌道（緑色）を表示

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S4</span>
<div className="rebot-step-content">
<h4>可視化ツール</h4>
<p className="rebot-step-label">シミュレーションデモ 4 · sim/visualizer.py</p>

MeshCat ビジュアライザのラッパーで、統一されたロボット表示インターフェースを提供します。

**主な機能**:
- URDF モデルを読み込み、ロボットを表示
- 3D ポリライン軌道（参照/実際）を描画
- IK 目標姿勢を表示（三色座標軸 + 球）
- 関節軌道アニメーションの再生をサポート

**使用例**:
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
  デバイスのパーミッションを設定するために、`sudo chmod 666 /dev/ttyACM0`（Damiao）または `sudo chmod 666 /dev/can0`（Robostride）を実行していることを確認してください。

- **IK の解が失敗する、または結果が異常**
  目標姿勢がロボットアームの作業空間内にあるか確認し、関節リミットが正しく設定されていることを確認してください。

- **重力補償の効果が悪い**
  構造誤差や加工精度が原因の可能性があります。本プロジェクトの重力補償は URDF と Pinocchio に依存しています。実際に計測したパラメータに合わせて URDF を修正してみてください（このステップは AI に依頼することもできます）。

- **Robostride モータのステータスが読み取れない**
  motorbridge 内部のプロトコル設定の問題により、RS モータは DM モータのようにステータスを問い合わせできない場合があります。実際の動作結果に基づいて判断するか、`ping` コマンドを使用してモータ通信が正常か確認してみてください。

- **ロボットアームがアーム到達範囲の 70% を超える領域で長時間静止していると、第 2 関節モータがスタール保護に入る**  
  ロボットアームの電源を入れ直してください。第 2 関節モータのスタール保護エラーは自動的にクリアされます。

- **Damiao と Robostride のモータ設定を切り替える方法**
  `config/rebotarm_dm.yaml`（Damiao）または `config/rebotarm_rs.yaml`（Robostride）設定ファイルを変更し、コード内で対応する設定を読み込んでください。

---

## 連絡先

- **技術サポート**: [Issue を送信](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **プロジェクトリポジトリ**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
- **フォーラム**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考ドキュメント

- [Pinocchio 公式ドキュメント](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat 公式ドキュメント](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---
