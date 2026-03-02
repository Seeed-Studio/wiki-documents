---
description: モーター制御、動作、状態管理のメソッドを含む ReachyMini メインクラスの完全な API リファレンス。
title: ReachyMini API リファレンス
slug: /ja/reachymini_api_reachymini
keywords:
- api
- reachymini
- motor control
- movement
- state
- main class
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# Reachy Mini

## メインクラス

### `reachy_mini.ReachyMini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L56)**

シミュレートされた、または実機の Reachy Mini ロボットを制御するための Reachy Mini クラス。

### メソッド

#### `async_play_move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L856)**

`Move` を非同期で再生します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `move` | `Move` | 再生する Move オブジェクト。 |
| `play_frequency` | `float` | Move を評価する周波数（Hz 単位）。 |
| `initial_goto_duration` | `float` | Move の開始位置への初期 goto にかける時間（秒）。0 の場合、初期 goto は行われません。 |
| `sound` | `bool` | True の場合、Move に関連付けられたサウンド（存在する場合）を再生します。 |

---

#### `disable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L843)**

ヘッドモーターの重力補償を無効にします。

---

#### `disable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L825)**

モーターを無効にします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `List[str] \| None` | 無効にするモーター名のリスト。None の場合、すべてのモーターが無効になります。有効な名前は `src/reachy_mini/assets/config/hardware_config.yaml` に記載の `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna` と一致します。 |

---

#### `enable_gravity_compensation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L839)**

ヘッドモーターの重力補償を有効にします。

---

#### `enable_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L814)**

モーターを有効にします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `ids` | `List[str] \| None` | 有効にするモーター名のリスト。None の場合、すべてのモーターが有効になります。有効な名前は `src/reachy_mini/assets/config/hardware_config.yaml` に記載の `body_rotation`, `stewart_1` … `stewart_6`, `right_antenna`, `left_antenna` と一致します。 |

---

#### `get_current_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L698)**

現在のヘッド姿勢を 4x4 行列として取得します。

**戻り値:**

`np.ndarray` — 現在のヘッド姿勢を表す 4x4 行列。

---

#### `get_current_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L674)**

ヘッドおよびアンテナの現在の関節位置（rad 単位）を取得します。

**戻り値:**

`tuple` — 2 つのリストを含むタプル:
- ヘッド関節位置のリスト（rad）（長さ 7）
- アンテナ関節位置のリスト（rad）（長さ 2）

---

#### `get_present_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L687)**

アンテナの現在値の関節位置（rad 単位）を取得します。

**戻り値:**

`list` — アンテナ関節位置のリスト（rad）（長さ 2）。

---

#### `goto_sleep`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L449)**

ヘッドとアンテナをあらかじめ定義されたスリープ位置に移動させて、ロボットをスリープ状態にします。

---

#### `goto_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L381)**

"duration" 秒かけてタスク空間補間を用いて、目標のヘッド姿勢および／またはアンテナ位置へ移動します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | 目標ヘッド姿勢を表す 4x4 姿勢行列。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | アンテナの角度（ラジアン）を表す 2 要素の 1 次元配列。 |
| `duration` | `float` | 動作時間（秒）。 |
| `method` | `InterpolationTechnique` | 使用する補間手法（"linear", "minjerk", "ease_in_out", "cartoon"）。デフォルトは "minjerk"。 |
| `body_yaw` | `float \| None` | ボディのヨー角（ラジアン）。現在のヨーを維持するには None を使用します。 |

---

#### `look_at_image`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L481)**

ピクセル位置 (u,v) で定義される点を見るようにロボットのヘッドを向けます。

:::tip

TODO: reachy mini 座標系の画像

:::

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `u` | `int` | 画像座標系における水平方向の座標。 |
| `v` | `int` | 画像座標系における垂直方向の座標。 |
| `duration` | `float` | 動作時間（秒）。0 の場合、ヘッドは即座にその位置へスナップします。 |
| `perform_movement` | `bool` | True の場合、実際に動作を行います。False の場合、姿勢を計算して返すだけです。 |

**戻り値:**

`np.ndarray` — 計算されたヘッド姿勢（4x4 行列）。

---

#### `look_at_world`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L546)**

Reachy Mini の基準座標系における 3D 空間内の特定の点を見るようにヘッドを向けます。

:::tip

TODO: reachy mini 座標系の画像を含める

:::

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `x` | `float` | X 座標（メートル）。 |
| `y` | `float` | Y 座標（メートル）。 |
| `z` | `float` | Z 座標（メートル）。 |
| `duration` | `float` | 動作時間（秒）。0 の場合、ヘッドは即座にその位置へスナップします。 |
| `perform_movement` | `bool` | True の場合、実際に動作を行います。False の場合、姿勢を計算して返すだけです。 |

**戻り値:**

`np.ndarray` — 計算されたヘッド姿勢（4x4 行列）。

---

#### `play_move`

`Move` を非同期で再生します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `move` | `Move` | 再生する Move オブジェクト。 |
| `play_frequency` | `float` | Move を評価する周波数（Hz 単位）。 |
| `initial_goto_duration` | `float` | Move の開始位置への初期 goto にかける時間（秒）。0 の場合、初期 goto は行われません。 |
| `sound` | `bool` | True の場合、Move に関連付けられたサウンド（存在する場合）を再生します。 |

---

#### `set_automatic_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L847)**

自動ボディヨーを設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `body_yaw` | `float` | ボディのヨー角（ラジアン）。 |

---

#### `set_target`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L320)**

ヘッドの目標姿勢および／またはアンテナの目標位置を設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | ヘッド姿勢を表す 4x4 姿勢行列。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | アンテナの角度（ラジアン）を表す 2 要素の 1 次元配列。 |
| `body_yaw` | `Optional[float]` | ボディのヨー角（ラジアン）。 |

---

#### `set_target_antenna_joint_positions`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L767)**

アンテナの目標関節位置を設定します。

---

#### `set_target_body_yaw`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L772)**

ボディの目標ヨー角を設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `body_yaw` | `float` | ボディのヨー角（ラジアン）。 |

---

#### `set_target_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L743)**

ヘッド姿勢を特定の 4x4 行列に設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `pose` | `np.ndarray` | 目的のヘッド姿勢を表す 4x4 行列。 |
| `body_yaw` | `float` | ヘッド姿勢の調整に使用されるボディのヨー角。 |

---

#### `start_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L782)**

データの記録を開始します。

---

#### `stop_recording`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L787)**

データの記録を停止し、記録されたデータを返します。

---

#### `wake_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/reachy_mini.py#L433)**

ロボットを起こします — 初期ヘッド位置へ移動し、起床エモートとサウンドを再生します。
