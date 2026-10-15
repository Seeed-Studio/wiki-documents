---
description: Reachy Mini のモーションシステムにおける基底クラス、goto モーション、および記録モーションを網羅した Motion API リファレンス。
title: Motion API
slug: /reachymini_api_motion
keywords:
  - motion
  - api
  - goto
  - recorded moves
  - move
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/ja/reachymini_api_motion/
---

# モーション

## 基底クラス

### `reachy_mini.motion.move.Move`

Reachy Mini のモーションシステムにおける、すべてのモーションタイプの基底クラス。

### メソッド

#### `goto_target`

タスク空間補間を用いて、ターゲットポーズへ移動します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | ターゲットのヘッドポーズを表す 4x4 のポーズ行列。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | アンテナの角度（ラジアン）を表す 2 要素の 1 次元配列。 |
| `duration` | `float` | 動作の継続時間（秒）。 |
| `method` | `InterpolationTechnique` | 使用する補間手法（"linear"、"minjerk"、"ease_in_out"、"cartoon"）。 |
| `body_yaw` | `float \| None` | ボディのヨー角（ラジアン）。 |

---

#### `set_target`

ヘッドのターゲットポーズおよび／またはアンテナのターゲット位置を設定します（リアルタイム制御）。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `head` | `Optional[np.ndarray]` | ヘッドポーズを表す 4x4 のポーズ行列。 |
| `antennas` | `Optional[Union[np.ndarray, List[float]]]` | アンテナの角度（ラジアン）を表す 2 要素の 1 次元配列。 |
| `body_yaw` | `Optional[float]` | ボディのヨー角（ラジアン）。 |

---

## Goto モーション

### `reachy_mini.motion.goto.GotoMove`

タスク空間補間を用いた動作のための GotoMove クラス。

### メソッド

#### `play`

指定した継続時間と補間手法で goto モーションを再生します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `duration` | `float` | 動作の継続時間（秒）。 |
| `method` | `str` | 使用する補間手法。 |

---

## 記録モーション

### `reachy_mini.motion.recorded_move.RecordedMove`

ロボット上で再生可能な、単一の記録モーション。

### メソッド

#### `evaluate`

特定の時刻における記録モーションを評価します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `t` | `float` | モーションを評価する時刻（秒）。 |

**戻り値:**

`Dict` — 指定時刻 t におけるヘッドポーズ、アンテナ位置、およびボディヨー角を含むディクショナリ。

---

#### `play`

ロボット上で記録モーションを再生します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `play_frequency` | `float` | モーションを評価する周波数（Hz）。 |
| `initial_goto_duration` | `float` | 開始姿勢への初期 goto の継続時間（秒）。 |
| `sound` | `bool` | 関連するサウンドを再生するかどうか。 |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

通常、HuggingFace データセットから読み込まれる、記録モーションのコレクション。

### メソッド

#### `get`

名前で特定の記録モーションを取得します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `name` | `str` | 取得する記録モーションの名前。 |

**戻り値:**

`RecordedMove` — 要求された記録モーション。

---

#### `list`

利用可能なすべての記録モーション名を列挙します。

**戻り値:**

`List[str]` — 利用可能なモーション名のリスト。