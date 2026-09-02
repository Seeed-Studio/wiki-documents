---
description: このチュートリアルでは、reBot Arm B601-RS 上で MotorBridge と CAN バスを用いて MIT 位置制御を行うために、rebot_control を使用する方法を説明します。グリッパ制御、温度保護、安全な原点復帰も含まれます。
title: reBot Arm B601-RS における MIT 位置制御 入門
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - robot arm
  - gripper
  - temperature protection
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-10
  author: LiJie
createdAt: '2026-08-04'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_mit_control/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS における MIT 位置制御 入門

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
    <a href="https://github.com/LAN-GER/rebot_control/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Mode-MIT%20Position-yellow.svg" alt="MIT Mode" />
</p>

<p align="center">
  <strong>6+1 自由度 · RobStride · CAN @ 1 Mbps · MIT 位置制御 · 温度保護 · 安全な原点復帰 · オープンソース Python API</strong>
</p>

[MotorBridge](https://github.com/motorbridge/motorbridge) は RobStride / Damiao モータ向けの Python CAN SDK です。[rebot_control](https://github.com/LAN-GER/rebot_control) はこれをラップし、**reBot Arm B601-RS** 用の MIT 位置制御 API を提供します：YAML 設定、関節ごとの速度制限、3 段階の MOS 温度保護、Esc / Ctrl+C / `stop()` によるスムーズな原点復帰。

このチュートリアルでは、環境構築 → CAN 設定 → サンプル実行 → ライブラリとしての利用、という流れで説明します。

:::caution 重要な安全上の注意
- **このプロジェクトが提供するのは制御 API のみであり、ソフトウェアによる関節リミットや作業空間リミットはありません。** 設定した目標角度はそのままモータに送信されます。
- **アームは作業空間のおおよそ 70% 以内で動作させてください。** 作業空間外に長時間留まると、第 2 関節でスタック保護が作動し、アームが落下する可能性があります。
- 初回使用時は、**小さな角度と低速**でテストし、作業空間内に人や障害物がないことを確認してください。
:::

---

## 特長

1. **MIT 位置制御**  
   デフォルト 200 Hz の MIT 位置コマンド送信；制御ループ内でスムージングされた関節ごとの速度制限。

2. **6+1 モータ**  
   J1～J6 はアーム関節、**J7（CAN ID 7）はエンドエフェクタのグリッパ**で、`set_joint_angles` / `set_joint_angle` で制御します。

3. **3 段階の温度保護**  
   MOS 温度をリアルタイム監視：警告のみで継続 → 過温度時は減速して原点復帰後に無効化 → 緊急無効化（原点復帰なし）。

4. **安全な終了と原点復帰**  
   Esc / Ctrl+C / `arm.stop()` によりスムーズステップで原点復帰を実行；原点復帰中に 2 回目の Ctrl+C を押すと即座に中断し、モータを無効化します。

5. **YAML ベースの設定**  
   CAN チャネル、温度しきい値、原点復帰パラメータ、モータの `kp` / `kd` は `config/rebotarm_rs.yaml` に定義されており、コードを変更せずに調整できます。

6. **ライブラリとして利用可能**  
   明確なレイヤ構造（設定 / API / サンプル）；`from rebot import ReBotRSMITController` でインポートできます。

---

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

| パラメータ | 仕様 |
|-----------|---------------|
| アームモデル | reBot Arm B601-RS 組立キット（グリッパ付き） |
| 自由度 (DOF) | 6+1（グリッパを含む） |
| 動作半径 | 754.7 mm（グリッパ付き） / 587.5 mm（グリッパなし） |
| 可搬重量 | 定格 2.5 kg / 最大 5 kg |
| 関節可動範囲 | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / グリッパ: 345° ~ 0° |
| 繰り返し精度 | 0.1 mm |
| 重量 | 6.7 kg |
| サーボモータ | RobStride 06 × 3 / RobStride 00 × 4（グリッパ含む） |
| 通信方式 | CAN バス @ 1 Mbps |
| 電源電圧 | DC 48V |
| 電源 | DC 48V 15A |
| 動作温度 | -20°C ~ 50°C |
| 制御 | PC |

### 本プロジェクトにおけるモータ割り当て

| 関節 | CAN ID | モデル | 備考 |
|-------|--------|-------|-------|
| J1 | 1 | RS06 | ベース |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | リスト |
| J7 | **7** | RS00 | **エンドエフェクタ グリッパ** |

### ソフトウェア機能（本リポジトリ）

| 機能 | 状態 |
|------------|--------|
| MIT 位置制御 | ✅ |
| 関節ごとの速度制限 | ✅ |
| グリッパ制御（CAN ID 7） | ✅ |
| MOS 温度監視と 3 段階保護 | ✅ |
| 安全な原点復帰 / 緊急無効化 | ✅ |
| YAML 設定 | ✅ |
| Python ライブラリ API | ✅ |
| 順運動学 / 逆運動学（Pinocchio） | ❌（[reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) を参照） |
| MeshCat シミュレーション | ❌（上記リポジトリを参照） |

### 関節モータのパラメータ

| パラメータ | RobStride 00 | RobStride 06 |
|-----------|-------------|--------------|
| 定格電圧 | 48V | 48V |
| 定格電流 | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| 最大電流 | 15.5 Apk ± 10% | 57 Apk ± 10% |
| 定格トルク | 5 N.m | 11 N.m |
| 最大トルク | 14 N.m | 36 N.m |
| 定格回転数 | 100 rpm ± 10% | 100 rpm ± 10% |
| 無負荷最大回転数 | 315 rpm ± 10% | 480 rpm ± 10% |
| 減速比 | 10 : 1 | 9 : 1 |
| 制御インターフェース | CAN @ 1 Mbps | CAN @ 1 Mbps |
| 制御モード | MIT / Speed / Position / Torque | MIT / Speed / Position / Torque |

## 部品表（BOM）

| 品目 | 数量 | 同梱 |
|------|-----|----------|
| reBot Arm B601-RS | 1 | ✅ |
| CAN アダプタ（CANABLE / PCAN-USB など） | 1 | ✅ |
| 電源（DC 48V 15A） | 1 | ✅ |
| USB-C ケーブル | 1 | ✅ |
| グリッパ | 1 | ✅ |

## 必要要件

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **OS** | Ubuntu 22.04+（推奨） |
| **CAN インターフェース** | デフォルト `can0` |
| **電源** | DC 48V 15A |
| **依存パッケージ** | `motorbridge`, `pyyaml`；任意で `pynput`（Esc キー用） |

---

## インストール

### ステップ 1. リポジトリをクローンする

```bash
git clone https://github.com/LAN-GER/rebot_control.git
cd rebot_control
```

### ステップ 2. 依存パッケージをインストールする

```bash
pip install motorbridge pynput pyyaml
```

:::tip
`pynput` は Esc キーのリスニングを有効にします。これがない場合、Esc のみが無効になりますが、Ctrl+C と `arm.stop()` は引き続き動作します。
:::

### ステップ 3. CAN インターフェースを設定する

```bash
# List interfaces (PCAN-USB, etc.)
sudo modprobe peak_usb   # if using a PEAK adapter
ip -br link

# Set can0 to 1 Mbps (RobStride default)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
USB CAN アダプタを一度抜き差しした場合、通常は再度 `ip link` コマンドを実行する必要があります。
:::

### ステップ 4. （任意）設定ファイルを編集する

`config/rebotarm_rs.yaml` を編集します：

| キー | 説明 | デフォルト |
|-----|-------------|---------|
| `can.channel` | CAN インターフェース名 | `can0` |
| `can.host_id` | ホスト ID | `0xFD` |
| `control.control_hz` | MIT コマンドレート（動作速度ではない） | 200 Hz |
| `control.telemetry_hz` | 温度読み取りレート | 2 Hz |
| `temperatures.alarm_c` | 温度警告しきい値 | 80°C |
| `temperatures.return_zero_c` | 過温度時の原点復帰しきい値 | 125°C |
| `temperatures.disconnect_c` | 緊急無効化しきい値 | 140°C |
| `return_zero.max_speed_deg_s` | 通常の原点復帰ピーク速度 | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | 熱保護時の原点復帰ピーク速度 | 30°/s |
| `return_zero.min_time_s` | 原点復帰の最短時間 | 3.0 s |
| `return_zero.settle_time_s` | 原点復帰後にゼロ位置で保持する時間 | 0.30 s |
| `motors` | モータ ID / モデル / MIT `kp` / `kd` | YAML を参照 |

不足しているキーにはコード側のデフォルトが使用されます。不明なキーはタイプミスを検出するためエラーになります。

---

## コード構成

```
rebot_control/
├── config/
│   └── rebotarm_rs.yaml            # CAN / motors / temperature / return-to-zero
├── rebot/
│   ├── __init__.py                 # Public API
│   ├── config.py                   # Config loading and validation
│   └── controller.py               # ReBotRSMITController
└── examples/
    ├── _bootstrap.py               # Path setup + wait-for-target helpers
    ├── quick_start.py              # Tutorial 1: quick start
    ├── custom_config.py            # Tutorial 2: custom config
    ├── monitor_status.py           # Tutorial 3: monitor status
    ├── single_joint_adjust.py      # Tutorial 4: single joint + gripper
    ├── read_joint_angles.py        # Tutorial 5: read actual positions
    ├── stop_options.py             # Tutorial 6: stop options
    ├── recommended_structure.py    # Tutorial 7: recommended structure
    └── mit_position_control.py     # Full editable demo
```

レイヤ構造：

- **設定ファイル**：調整可能なパラメータの単一の情報源。
- **設定レイヤ**：`load_config()` → `ControllerConfig`。
- **API レイヤ**：デモ用の値をハードコードしない制御ロジック。
- **サンプルレイヤ**：目標角度、速度、実行フロー。

---

## 動作の仕組み

### MIT 制御と速度スムージング

- `control_hz`（デフォルト 200 Hz）は**コマンド送信レートのみ**を設定します。
- 実際の動作速度は `set_max_speeds([...])`（deg/s）で決まります。
- `set_joint_angles()` は**目標値**のみを更新し、制御ループが速度制限の範囲内で**コマンド角度**を目標に向けてランプさせます。

:::tip
目標を設定した直後に `stop()` を呼び出すと、ほとんど動かないように見える場合があります。サンプルでは `wait_for_command_targets()`（`examples/_bootstrap.py` を参照）を使用し、コマンド角度が目標に近づくまで待ってから原点復帰を行います。
:::

### 接続と有効化のシーケンス

`connect()` の内部では、順番は次の通りです：**モータ登録 → MIT モードへ切り替え → 有効化 → 現在の機械角度を読み取り**（目標値を初期化し、有効化後の急激なジャンプを防ぐため）。RobStride の `mechPos (0x7019)` は、有効化後であれば確実に読み取ることができます。

受動的な位置読み取り（チュートリアル 5）を行う場合は、`connect()` の後に `disable_motors()` を呼び出すことで、アームを手で動かしながら角度を読み続けることができます。

### 3 段階の温度保護

| しきい値（デフォルト） | 動作 |
|---------------------|----------|
| ≥ 80°C | 温度アラーム（モーターごと・過熱エッジごとに 1 回）、動作継続 |
| ≥ 125°C | 動作停止、熱ピーク速度でゆっくり原点復帰、その後無効化 |
| ≥ 140°C | 即時の緊急無効化、**原点復帰なし** |

### 安全な原点復帰

原点復帰には **smoothstep** 軌道を使用します。所要時間：

```
duration = max(min_time_s, per-joint time estimated from peak speed)
```

ピーク速度は `max_speed_deg_s`（通常）または `thermal_max_speed_deg_s`（熱保護時）です。どちらもデフォルトは **30°/s** です。`min_time_s` のデフォルトは **3.0 s** です。

| 終了方法 | 動作 |
|-------------|----------|
| Esc / 1 回目の Ctrl+C / `arm.stop()` | 低速で原点復帰 → 無効化 → CAN をクローズ |
| 原点復帰中の 2 回目の Ctrl+C | 原点復帰を中断して即時無効化 |
| 通信エラー | 緊急無効化、原点復帰なし |

### 単位

| コンテキスト | 単位 |
|---------|-------|
| 外部 API（角度、速度） | 度、deg/s |
| MotorBridge MIT 内部 | ラジアン、rad/s |

---

## チュートリアル

すべてのサンプルは**プロジェクトルート**から実行します。各スクリプトの先頭には **Expected motion（期待される動き）** が記載され、起動時に `[Expected / 预期]` 行を出力します。

| チュートリアル | ファイル | コマンド |
|----------|------|---------|
| 1. クイックスタート | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. カスタム設定 | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. ステータス監視 | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. 単一関節 + グリッパー | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. 位置読み取り | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. 停止オプション | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. 推奨プログラム構造 | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| フルデモ | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. クイックスタート（`quick_start.py`）

**期待される動き**：J1 が約 15°/s で +20° に移動し、他の関節とグリッパーは 0° に留まり、その後ゆっくり原点復帰して無効化されます。

```bash
python3 examples/quick_start.py
```

フロー：`start()` → `set_max_speeds()` → `set_joint_angles()` → **動作完了を待機** → `stop()`。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="Video demo - Quick start" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. カスタム設定ファイル（`custom_config.py`）

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**期待される動き**：J1 → +15°（約 15°/s）、他は 0°、その後原点復帰。

---

### 3. 動作中のモニタリング（`monitor_status.py`）

```bash
python3 examples/monitor_status.py
```

**期待される動き**：J1 → +30°。ターミナルには目標値 / 送信値 / MOS 温度が連続して表示されます。終了して原点復帰するには **Esc** または **Ctrl+C** を押します。

注意：

- **Target と sent**：送信角度は目標角度より遅れて追従します（速度制限付きスムージング）。
- **温度**：`arm.last_temperatures` を読み取ります。自分で CAN をポーリングする必要はありません。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="Video demo - Monitor status" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. 単一関節調整とグリッパー（`single_joint_adjust.py`）

```bash
python3 examples/single_joint_adjust.py
```

**デフォルト目標値**：

| J1 | J2 | J3 | J4 | J5 | J6 | J7 グリッパー |
|----|----|----|----|----|----|------------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`：1–6 はアーム関節、**7 はグリッパー（CAN ID 7）** です。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="Video demo - Single joint and gripper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. 実際の位置読み取り（`read_joint_angles.py`）

```bash
python3 examples/read_joint_angles.py
```

**期待される動き**：

1. `connect()`：MIT モードに切り替えて有効化（通信を確立）、現在角度を目標値の初期値として読み取ります。
2. `disable_motors()`：すぐに無効化し、アームを手で動かせるようにします。
3. ターミナルに実際の関節角度が約 **30 Hz** で表示されます。アームを動かすと値が変化するはずです。
4. **Ctrl+C** を押して終了します。`stop(return_to_zero=False)` は**原点復帰せずに** CAN をクローズします。

このサンプルは `start()` を呼び出さないため、MIT 制御スレッドは動作せず、動作目標も送信されません。

**コードフロー**：

```python
arm.connect()           # MIT → enable → read current angles
arm.disable_motors()    # disable — arm can be moved by hand

while True:
    actual = arm.read_joint_angles()  # ~30 Hz
    print(actual)

# After Ctrl+C
arm.stop(return_to_zero=False, wait=True)
```

:::tip
`read_joint_angles()` は CAN に同期アクセスします（7 つすべてのモーターから順番に `mechPos` を読み取る）ため、達成可能なレートはバスの往復時間に依存します。このサンプルは 30 Hz を目標としていますが、各読み取りに時間がかかる場合、実際のレートはそれより低くなります。MIT 制御が動作中は、高頻度で `read_joint_angles()` を呼び出す代わりに、`get_command_angles()` を使用して指令動作を監視してください。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint/read_joint_angles.mp4" title="Video demo - Read actual positions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. 安全な停止オプション（`stop_options.py`）

各モードはまず J1 を約 +20° まで動かし、その後モードに応じて停止します：

```bash
python3 examples/stop_options.py default      # slow return-to-zero (recommended)
python3 examples/stop_options.py no_return    # disable without return-to-zero
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # emergency disable, no return-to-zero
```

:::danger
`no_return` / `emergency` はアームを非ゼロ姿勢のままにしてモーターを無効化します。周囲の安全を確保し、必要に応じて手でアームを支えてください。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="Video demo - Stop options" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. 推奨プログラム構造（`recommended_structure.py`）

`try` / `except` / `finally` を用いて、エラー発生時でも `stop()` が必ず実行されることを示します。

```bash
python3 examples/recommended_structure.py
```

---

### フルパラメータデモ（`mit_position_control.py`）

ファイル先頭の `TARGET_ANGLES`（長さ 7）と `JOINT_SPEEDS_DEG_S` を編集し、次を実行します：

```bash
python3 examples/mit_position_control.py
```

デフォルト：J1 → +50°（20°/s）、他の関節とグリッパーは 0°。ターミナルには目標値 / 送信値 / 温度が表示され、Esc / Ctrl+C で原点復帰しながら終了します。

:::danger
MIT モードではアームが高速で動作する場合があります。人や機器を離し、おおよそ作業空間の 70% 以内に留まるようにしてください。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="Video demo - Full parameter demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## ライブラリとして使用する

### 最小サンプル

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # loads config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + gripper J7

# Wait for motion to finish before stop; see examples/quick_start.py
arm.stop()  # slow return-to-zero → disable → close CAN
```

### カスタム設定とグリッパー

```python
from rebot import (
    ReBotRSMITController,
    load_config,
    GRIPPER_JOINT_ID,
)

arm = ReBotRSMITController(load_config("config/rebotarm_rs.yaml"))
arm.start()
arm.set_max_speeds([20.0] * 7)
arm.set_joint_angles([25, 15, 15, -15, 0, 0, 0])
arm.set_joint_angle(GRIPPER_JOINT_ID, 180.0)  # gripper = J7
```

### 受動的な位置読み取り

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()
arm.connect()           # MIT → enable → read current angles
arm.disable_motors()    # disable — move arm by hand

actual = arm.read_joint_angles()
print(actual)

arm.stop(return_to_zero=False, wait=True)  # close CAN, no return-to-zero
```

### コントローラのライフサイクル

**MIT 動作制御**：

```
create → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

**パッシブ位置読み取り**（指令動作なし）:

```
create → connect() → disable_motors() → read_joint_angles() → … → stop(return_to_zero=False)
```

### メイン API

| メソッド / 属性 | 説明 |
|--------------------|-------------|
| `connect()` | CAN 接続、MIT モード、イネーブル、現在角度の読み取りを実行；`start()` によって自動的に呼び出されます |
| `disable_motors()` | CAN を閉じずにすべてのモーターを無効化（パッシブ読み取り用） |
| `start(enable_esc=True, install_signal_handlers=True)` | 制御スレッドと温度スレッドを開始 |
| `set_joint_angles(angles_deg)` | 7 つの目標角度（度）を設定 |
| `set_joint_angle(joint_id, angle_deg)` | 1 つのジョイント / グリッパー（1–7）を設定 |
| `set_max_speeds(speeds_deg_s)` | 7 つの最大速度（度/秒）を設定 |
| `get_target_angles()` / `get_command_angles()` | 目標角度 / 平滑化されたコマンド角度 |
| `read_joint_angles()` | 実際の機械位置（度）の同期読み取り；CAN を使用 |
| `last_temperatures` | モーターごとの MOS 温度 |
| `is_stopped` | 安全なシャットダウンが完了しているかどうか |
| `stop(return_to_zero=True, wait=True)` | 停止（デフォルトでゼロ位置に戻る） |
| `request_stop(..., emergency=True)` | 高度な停止 / 緊急無効化 |

エクスポートされる定数: `GRIPPER_MOTOR_ID = 7`, `GRIPPER_JOINT_ID = 7`.

---

## FAQ

- **`Permission denied` / can0 を開けない**  
  CAN インターフェースが `up` であり、ユーザーがネットワークデバイスにアクセスできることを確認してください。必要に応じて `ip link` には `sudo` を使用するか、udev ルールを確認してください。

- **モーターが反応しない / イネーブルに失敗する**  
  1. ビットレートが 1 Mbps であることを確認；  
  2. `config/rebotarm_rs.yaml` 内の `channel`、`host_id`、モーター ID がハードウェアと一致していることを確認；  
  3. USB CAN を挿し直した後に `ip link` を再実行します。

- **角度を設定してもアームがほとんど動かない**  
  `set_joint_angles()` はターゲットのみを更新します。妥当な `set_max_speeds()` を設定し、`stop()` を呼ぶ前にコマンド角度がターゲットに近づくまで待ってください。`examples/quick_start.py` を参照してください。

- **グリッパーが動かない**  
  グリッパーは **J7 / CAN ID 7** です。`set_joint_angles` に **7 個の値** を渡します（最後がグリッパー）、または `set_joint_angle(7, angle)` を使用します。

- **位置読み取りタイムアウト / 角度を読み取れない**  
  `mechPos` は、イネーブル後の MIT モードで信頼性高く読み取れます。チュートリアル 5 では、`connect()` の後に `disable_motors()` を使用することで、アームを手で動かしながら読み取りを継続できます。`ensure_mode` やパラメータ読み取りがタイムアウトする場合は、CAN 配線、終端、およびモーター電源を確認してください。

- **温度アラームが大量に出る**  
  アラームはヒステリシス付きのエッジトリガーです：過温イベントごとにモーターごと 1 回のアラームのみで、温度が `alarm_c - 2°C` 未満に下がった後にのみ再度アラームが発生します。

- **ジョイント 2 のスタール保護 / アームが落下する**  
  おおよそ 70% を超えるワークスペース伸長状態を維持していることが原因であることが多いです。電源を入れ直して保護を解除し、目標角度と滞留時間を減らしてください。

- **通信エラー後の挙動**  
  制御ループの通信が失敗した場合、プログラムは**ゼロ位置に戻さずに緊急無効化**を行い、不良な通信状態での動作を回避します。

- **Pinocchio / MeshCat / 重力補償**  
  このリポジトリは MIT 位置制御に焦点を当てています。運動学、シミュレーション、および重力補償については、[reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) と Seeed Wiki の Pinocchio & MeshCat ガイドを参照してください。

---

## 連絡先

- **リポジトリ**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **Issue**: [GitHub Issues](https://github.com/LAN-GER/rebot_control/issues)
- **フォーラム**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考文献

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py（運動学 / シミュレーション / 重力補償）](https://github.com/Seeed-Projects/reBotArm_control_py)
- [RobStride モーター ドキュメント](https://www.seeedstudio.com/)
- このリポジトリ内の中国語 README: `README_zh.md`
- このリポジトリ内の英語 README: `README.md`
