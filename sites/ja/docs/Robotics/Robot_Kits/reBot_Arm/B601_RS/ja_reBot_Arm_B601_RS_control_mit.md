---
description: このチュートリアルでは、MotorBridge と CAN バスを介して reBot Arm B601-RS 上で rebot_control を用いた MIT 位置制御を行う方法を説明します。グリッパ、温度保護、安全な原点復帰も含みます。
title: reBot Arm B601-RS MIT 位置制御 入門ガイド
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - Robotic Arm
  - Gripper
  - Temperature Protection
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-04
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-08-04'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_mit_control/
---

# reBot Arm B601-RS における MIT 位置制御 入門

<p align="center">
    <a href="https://github.com/LAN-GER/rebot_control/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Mode-MIT%20Position-yellow.svg" alt="MIT Mode" />
</p>

<p align="center">
  <strong>6+1 自由度 · RobStride · CAN @ 1 Mbps · MIT 位置制御 · 温度保護 · 安全な原点復帰 · オープンソース Python インターフェース</strong>
</p>

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

[MotorBridge](https://github.com/motorbridge/motorbridge) は、RobStride や Damiao などのモーター向けの Python 製 CAN 制御 SDK です。その上に構築された [rebot_control](https://github.com/LAN-GER/rebot_control) は、**reBot Arm B601-RS** 向けに特化した MIT 位置制御インターフェースを提供します：YAML 設定、関節ごとの速度制限、3 段階の MOS 温度保護、Esc / Ctrl+C / `stop()` によってトリガーされるスムーズな原点復帰。

このチュートリアルでは、環境構築 → CAN 設定 → サンプルの実行 → ライブラリとして利用した二次開発、という流れで説明します。

:::caution 重要な安全上の注意
- **本プロジェクトは制御インターフェースのみを提供し、ソフトウェアによる関節リミットや作業空間リミットは含みません。** 設定した目標角度はそのままモーターに送信されます。
- **アームは作業空間のおおよそ 70% 以内で動作させてください。** 作業空間外に長時間留まると、J2 モーターのスタック保護が作動し、アームが落下する可能性があります。
- 初回使用時は、**小さな角度と低速**でテストし、周囲に障害物がないこと、人が作業半径内に入らないことを必ず確認してください。
:::

---

## プロジェクトの特長

1. **MIT 位置制御**  
   デフォルトで 200 Hz で MIT 位置コマンドを連続送信します。各関節には独立した速度制限があり、ループ内で速度をスムージングします。

2. **6+1 モーター対応**  
   J1〜J6 はアーム関節で、**J7（CAN ID 7）はエンドエフェクタのグリッパ**です。すべて `set_joint_angles` / `set_joint_angle` によって一括制御されます。

3. **3 段階の温度保護**  
   各モーターの MOS 温度をリアルタイム監視し、警告後継続 → 高温時の低速原点復帰後に無効化 → 緊急無効化（原点復帰なし）、という 3 段階で保護します。

4. **安全な終了と原点復帰**  
   Esc / Ctrl+C / `arm.stop()` によって、スムーズステップ軌道による低速原点復帰をトリガーします。原点復帰中に再度 Ctrl+C を押すと、即座に中断して無効化します。

5. **YAML 駆動の設定**  
   CAN チャネル、温度しきい値、原点復帰パラメータ、モーターの `kp` / `kd` はすべて `config/rebotarm_rs.yaml` で設定します。コードに触れずにパラメータを変更できます。

6. **二次開発に適した設計**  
   （設定 / インターフェース / サンプル）の明確なレイヤ構造になっており、`from rebot import ReBotRSMITController` によってライブラリとして直接利用できます。

---

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

| パラメータ | 仕様 |
|-----------|---------------|
| アームモデル | reBot Arm B601-RS グリッパ付き組立キット |
| 自由度 | 6+1（グリッパを含む） |
| 動作半径 | 754.7 mm（グリッパ付き） / 587.5 mm（グリッパなし） |
| 可搬重量 | 定格 2.5 kg / 最大 5 kg |
| 関節可動範囲 | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / グリッパ: 345° ~ 0° |
| 繰り返し精度 | 0.1 mm |
| 自重 | 6.7 kg |
| サーボモーター | RobStride 06 × 3 / RobStride 00 × 4（グリッパを含む） |
| 通信方式 | CAN バス @ 1 Mbps |
| 動作電圧 | DC 48V |
| 電源 | DC 48V 15A |
| 動作温度 | -20°C ~ 50°C |
| 制御方法 | PC |

### 本プロジェクトにおけるモーター割り当て

| 関節 # | CAN ID | モデル | 備考 |
|---------|--------|-------|-------|
| J1 | 1 | RS06 | ベース |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | リスト |
| J7 | **7** | RS00 | **エンドエフェクタ グリッパ** |

### 対応しているソフトウェア機能（本リポジトリ）

| 機能 | ステータス |
|------------|--------|
| MIT 位置制御 | ✅ |
| 関節ごとの速度制限 | ✅ |
| グリッパ制御（CAN ID 7） | ✅ |
| MOS 温度監視 & 3 段階保護 | ✅ |
| 安全な原点復帰 / 緊急無効化 | ✅ |
| YAML 設定 | ✅ |
| Python ライブラリ呼び出し | ✅ |
| 順運動学 / 逆運動学（Pinocchio） | ❌（[reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) を参照） |
| MeshCat シミュレーション | ❌（上記リポジトリを参照） |

### 関節モーターのパラメータ

| パラメータ | RobStride 00 | RobStride 06 |
|-----------|-------------|--------------|
| 定格電圧 | 48V | 48V |
| 定格電流 | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| 最大電流 | 15.5 Apk ± 10% | 57 Apk ± 10% |
| 定格トルク | 5 N·m | 11 N·m |
| 最大トルク | 14 N·m | 36 N·m |
| 定格回転数 | 100 rpm ± 10% | 100 rpm ± 10% |
| 無負荷最大回転数 | 315 rpm ± 10% | 480 rpm ± 10% |
| 減速比 | 10 : 1 | 9 : 1 |
| 制御インターフェース | CAN @ 1 Mbps | CAN @ 1 Mbps |
| 制御モード | MIT / Speed / Position / Torque | MIT / Speed / Position / Torque |

## 部品表（BOM）

| 部品 | 数量 | 同梱 |
|------|-----|----------|
| reBot Arm B601-RS ロボットアーム | 1 | ✅ |
| CAN アダプタ（CANABLE / PCAN-USB など） | 1 | ✅ |
| 電源アダプタ（DC 48V 15A） | 1 | ✅ |
| USB-C ケーブル | 1 | ✅ |
| グリッパ | 1 | ✅ |

## 動作環境要件

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **OS** | Ubuntu 22.04+（推奨） |
| **通信インターフェース** | CAN インターフェース（デフォルト `can0`） |
| **電源** | DC 48V 15A |
| **依存パッケージ** | `motorbridge`, `pyyaml`；任意で `pynput`（Esc キー用） |

---

## インストール手順

### 手順 1. リポジトリをクローンする

```bash
git clone https://github.com/LAN-GER/rebot_control.git
cd rebot_control
```

### 手順 2. 依存パッケージをインストールする

```bash
pip install motorbridge pynput pyyaml
```

:::tip
`pynput` は Esc キーのリスニングに使用されます。インストールしない場合は Esc 機能のみが使えませんが、Ctrl+C と `arm.stop()` は引き続き動作します。
:::

### 手順 3. CAN インターフェースを設定する

```bash
# View the interface (PCAN-USB, etc.)
sudo modprobe peak_usb   # If using a PEAK adapter
ip -br link

# Set can0 bitrate to 1 Mbps (RobStride default)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
USB CAN アダプタを挿し直した後は、通常 `ip link` 設定を再度実行する必要があります。
:::

### 手順 4. （任意）設定ファイルを調整する

`config/rebotarm_rs.yaml` を編集します：

| 設定項目 | 説明 | デフォルト |
|--------|-------------|---------|
| `can.channel` | CAN インターフェース名 | `can0` |
| `can.host_id` | ホスト ID | `0xFD` |
| `control.control_hz` | MIT コマンド送信レート（動作速度ではない） | 200 Hz |
| `control.telemetry_hz` | 温度読み取りレート | 2 Hz |
| `temperatures.alarm_c` | 温度警告しきい値 | 80°C |
| `temperatures.return_zero_c` | 高温時の原点復帰しきい値 | 100°C |
| `temperatures.disconnect_c` | 緊急無効化しきい値 | 140°C |
| `return_zero.max_speed_deg_s` | 通常の原点復帰の最大速度 | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | 高温時の原点復帰の最大速度 | 30°/s |
| `return_zero.min_time_s` | 原点復帰の最短時間 | 3.0 s |
| `return_zero.settle_time_s` | 原点到達後の保持時間 | 0.30 s |
| `motors` | モーター ID / モデル / MIT `kp` / `kd` | YAML を参照 |

YAML に未記入の項目はコード側のデフォルト値が使用されます。存在しないキーを記入すると即座にエラーになるため、タイプミスを見つけやすくなっています。

---

## コード構成

```
rebot_control/
├── config/
│   └── rebotarm_rs.yaml            # CAN / motors / temperature / return-to-zero
├── rebot/
│   ├── __init__.py                 # Public API
│   ├── config.py                   # Config loading & validation
│   └── controller.py               # ReBotRSMITController
└── examples/
    ├── _bootstrap.py               # Path bootstrap + wait-for-reached helper
    ├── quick_start.py              # Tutorial 1: Quick Start
    ├── custom_config.py            # Tutorial 2: Custom Config
    ├── monitor_status.py           # Tutorial 3: Status Monitoring
    ├── single_joint_adjust.py      # Tutorial 4: Single Joint + Gripper
    ├── read_joint_angles.py        # Tutorial 5: Read Actual Position
    ├── stop_options.py             # Tutorial 6: Stop Options
    ├── recommended_structure.py    # Tutorial 7: Recommended Structure
    └── mit_position_control.py     # Full editable demo
```

レイヤ構成メモ：

- **設定ファイル**：調整可能なパラメータの単一の情報源。
- **設定レイヤ**：`load_config()` → `ControllerConfig`。
- **インターフェースレイヤ**：デモ用パラメータをハードコードしない純粋な制御ロジック。
- **サンプルレイヤ**：目標角度、速度、実行フローを定義。

---

## 機能に関する補足

### MIT 制御と速度スムージング

- `control_hz`（デフォルト 200 Hz）は **コマンド送信レート** のみを決定します。
- 実際の動作速度は `set_max_speeds([...])`（単位：度/秒）によって決まります。
- `set_joint_angles()` は **目標値** のみを更新し、制御ループが制限速度内で **指令角度** を徐々に目標へ近づけます。

:::tip
目標を設定してすぐに `stop()` を呼び出すと、目標に向かう動きがほとんど見えない場合があります。サンプルでは `wait_for_command_targets()`（`examples/_bootstrap.py` を参照）を使用し、指令角度が目標に十分近づくまで待ってから原点復帰を行っています。
:::

### 3 段階の温度保護

| しきい値（デフォルト） | 動作 |
|---------------------|----------|
| ≥ 80°C | 温度アラーム（モーターごとに過温度の立ち上がりごとに 1 回だけ報告）；動作は継続 |
| ≥ 100°C | 動作を停止し、高温時ピーク速度でゆっくりゼロ位置に戻った後、無効化 |
| ≥ 140°C | 即時の緊急無効化、**ゼロ位置への復帰なし** |

### 安全なゼロ位置復帰

ゼロ位置復帰には **smoothstep** 軌道を使用します。全体の所要時間は次のとおりです：

```
duration = max(min_time_s, time estimated from peak speed for each joint)
```

ピーク速度は `max_speed_deg_s`（通常時）または `thermal_max_speed_deg_s`（高温時）です。どちらもデフォルトは **30°/s** で、`min_time_s` は **3.0 s** です。

| 終了方法 | 動作 |
|-------------|----------|
| Esc / 1 回目の Ctrl+C / `arm.stop()` | ゆっくりゼロ位置に戻る → 無効化 → CAN をクローズ |
| ゼロ位置復帰中の 2 回目の Ctrl+C | 直ちに復帰を中断して無効化 |
| 通信エラー | 緊急無効化、ゼロ位置復帰は行わない |

### 単位の取り決め

| コンテキスト | 単位 |
|---------|------|
| 外部 API（角度、速度） | 度、度/秒 |
| MotorBridge MIT 内部 | ラジアン、ラジアン/秒 |

---

## チュートリアルの呼び出し

以下のすべてのサンプルは **プロジェクトルート** から実行します。各スクリプトの先頭には **Expected motion** ヘッダーがあり、起動時に `[Expected]` 行を出力するので、動作を追いやすくなっています。

| チュートリアル | ファイル | コマンド |
|----------|------|---------|
| 1. クイックスタート | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. カスタム設定 | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. ステータス監視 | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. 単一関節 + グリッパー | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. 実際の位置を読み取る | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. 停止オプション | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. 推奨構成 | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| フルデモ | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. クイックスタート（`quick_start.py`）

**Expected motion**: J1 が約 15°/s で +20° まで回転し、他の関節とグリッパーは 0° のままです；目標に到達した後、ゆっくりゼロ位置に戻り、無効化されます。

```bash
python3 examples/quick_start.py
```

フロー：`start()` → `set_max_speeds()` → `set_joint_angles()` → **到達を待つ** → `stop()`。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="Video Demo - Quick Start" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. カスタム設定ファイル（`custom_config.py`）

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**Expected motion**: J1 → +15°（約 15°/s）、他は 0°、その後ゼロ位置に戻ります。

---

### 3. 実行中のステータス監視（`monitor_status.py`）

```bash
python3 examples/monitor_status.py
```

**Expected motion**: J1 → +30°；ターミナルには目標値 / 指令値 / MOS 温度が継続的に表示されます。終了してゼロ位置に戻るには **Esc** または **Ctrl+C** を押します。

注意：

- **Target と commanded**：指令角度は目標角度に対して遅延します（速度制限付きスムージング）。
- **温度**：`arm.last_temperatures` を直接読み取ればよく、自分で CAN をポーリングする必要はありません。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="Video Demo - Monitor Status" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. 単一関節の微調整とグリッパー（`single_joint_adjust.py`）

```bash
python3 examples/single_joint_adjust.py
```

**デフォルトの目標値**：

| J1 | J2 | J3 | J4 | J5 | J6 | J7 グリッパー |
|----|----|----|----|----|----|------------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`: 1–6 はアームの関節で、**7 はグリッパー（CAN ID 7）** です。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="Video Demo - Single Joint and Gripper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. 実際の位置を読み取る（`read_joint_angles.py`）

```bash
python3 examples/read_joint_angles.py
```

**Expected motion**: 起動時に実際の角度を出力します；J1 が約 5 秒かけて +20° 付近まで動き、その後もう一度実際の角度を読み取ります（20° に近いはずです）；その後ゼロ位置に戻ります。

:::tip
`read_joint_angles()` は CAN に同期アクセスするため、非常に高い頻度で呼び出すべきではありません。コマンドの進行状況を監視するには `get_command_angles()` を使用してください。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint_angles/read_joint_angles.mp4" title="Video Demo - Read Actual Position" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. 安全な停止オプション（`stop_options.py`）

各モードでは、まず J1 を約 +20° まで動かし、その後モードに応じて停止します：

```bash
python3 examples/stop_options.py default      # Slow return-to-zero then disable (recommended)
python3 examples/stop_options.py no_return    # No return-to-zero, disable directly
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # Emergency disable, no return-to-zero
```

:::danger
`no_return` / `emergency` はアームをゼロ以外の姿勢のまま無効化します。周囲が安全であることを確認し、必要に応じて手でアームを支えてください。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="Video Demo - Safe Stop Options" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. 推奨プログラム構造（`recommended_structure.py`）

例外発生時でも安全に `stop()` できるようにする `try` / `except` / `finally` の使い方を示します。

```bash
python3 examples/recommended_structure.py
```

---

### フルパラメータデモ（`mit_position_control.py`）

ファイル先頭の `TARGET_ANGLES`（長さ 7）と `JOINT_SPEEDS_DEG_S` を変更し、次を実行します：

```bash
python3 examples/mit_position_control.py
```

デフォルトの例：J1 → +50°（20°/s）、他の関節とグリッパーは 0°；ターミナルには目標値 / 指令値 / 温度が更新表示されます；Esc / Ctrl+C でゼロ位置に戻って終了します。

:::danger
MIT モードでもアームは依然として高速に動作する可能性があります。人や機器を作業半径から遠ざけ、おおよそ作業空間の 70% 以内に動作を制限してください。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="Video Demo - Full Parameter Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## ライブラリとして使用する

### 最小限のサンプル

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # Auto-loads config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + gripper J7

# You need to wait for motion to complete yourself before calling stop; see examples/quick_start.py
arm.stop()  # Slow return-to-zero → disable → close CAN
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
arm.set_joint_angle(GRIPPER_JOINT_ID, 180.0)  # Gripper = J7
```

### コントローラのライフサイクル

```
Create → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

### メイン API

| メソッド / 属性 | 説明 |
|--------------------|-------------|
| `start(enable_esc=True, install_signal_handlers=True)` | 制御スレッドと温度監視スレッドを開始 |
| `set_joint_angles(angles_deg)` | 7 つの目標角度（度）を設定 |
| `set_joint_angle(joint_id, angle_deg)` | 単一の関節 / グリッパー（1–7）を設定 |
| `set_max_speeds(speeds_deg_s)` | 7 つの最大速度（度/秒）を設定 |
| `get_target_angles()` / `get_command_angles()` | 目標角度 / スムージングされた指令角度 |
| `read_joint_angles()` | 実際の機械的な位置を同期的に読み取る |
| `last_temperatures` | 各モーターの MOS 温度 |
| `is_stopped` | 安全停止が完了しているかどうか |
| `stop(return_to_zero=True, wait=True)` | 停止（デフォルトでゼロ位置に戻る） |
| `request_stop(..., emergency=True)` | 高度な停止 / 緊急無効化 |

エクスポートされる定数：`GRIPPER_MOTOR_ID = 7`、`GRIPPER_JOINT_ID = 7`。

---

## FAQ

- **`Permission denied` / can0 を開けない**  
  CAN インターフェースが `up` 状態であり、現在のユーザーにネットワークデバイスへアクセスする権限があることを確認してください。必要に応じて `sudo` を使って `ip link` を設定するか、udev ルールを確認してください。

- **モーターが反応しない / 有効化に失敗する**  
  1. ビットレートが 1 Mbps であることを確認する；  
  2. `config/rebotarm_rs.yaml` 内の `channel`、`host_id`、モーター ID が実機と一致していることを確認する；  
  3. USB CAN を再接続した後、再度 `ip link` を実行する。

- **角度を設定してもほとんど動かない**  
  `set_joint_angles()` はターゲットのみを変更します。適切な `set_max_speeds()` を設定し、`stop()` を呼び出す前に、指令角度がターゲットに近づくまで待ってください。`examples/quick_start.py` を参照してください。

- **グリッパーが動かない**  
  グリッパーは **J7 / CAN ID 7** です。`set_joint_angles` には **7 個の値** を渡す必要があり、最後の 1 つがグリッパーになります；または `set_joint_angle(7, angle)` を使用してください。

- **温度アラームが大量に出る**  
  現在の実装はヒステリシス付きのエッジトリガ・デバウンス方式です：各モーターは過温イベントごとに 1 回だけ報告し、温度が `alarm_c - 2°C` 未満に下がった後にのみ再度報告します。

- **J2 のスタール保護 / アームが落下する**  
  アームのリーチのおよそ 70% を超える範囲で長時間動作させた場合によく発生します。アームの電源を入れ直して保護状態を解除し、目標角度と滞留範囲を減らしてください。

- **通信エラー発生後の挙動**  
  制御ループが通信エラーに遭遇した場合、プログラムは**原点復帰を行わずに緊急的に無効化**し、通信異常下での動作継続を防ぎます。

- **Pinocchio / MeshCat / 重力補償チュートリアルとの関係**  
  このリポジトリは MIT 位置制御インターフェースに焦点を当てています。運動学、軌道シミュレーション、重力補償については、[reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) および Seeed Wiki の「Pinocchio と MeshCat 入門」を参照してください。

---

## 連絡先

- **プロジェクトリポジトリ**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **技術サポート / Issues**: [GitHub Issues](https://github.com/LAN-GER/rebot_control/issues)
- **フォーラム**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考資料

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py（運動学 / シミュレーション / 重力補償）](https://github.com/Seeed-Projects/reBotArm_control_py)
- [RobStride モーターのドキュメント](https://www.seeedstudio.com/)
- このリポジトリの中国語 README：`README_zh.md`
