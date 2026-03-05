---
description: Reachy Mini のモーションに関する完全な API リファレンス。基底クラス、goto モーション、および録画モーションを含みます。
title: モーション API リファレンス
slug: /reachymini_api_motion
keywords:
  - api
  - motion
  - moves
  - goto
  - interpolation
  - recording
  - playback
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_api_motion/
---
# モーション

## 基底クラス

### `reachy_mini.motion.move.Move`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L11)**

`ReachyMini` ロボット上のモーションを定義するための抽象基底クラスです。

### メソッド

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/move.py#L25)**

時刻 t におけるモーションを評価します。通常は高頻度（例：100Hz）で呼び出されます。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `t` | `float` | モーションを評価する時刻（秒）。常に 0 以上 duration 以下の値になります。 |

**戻り値:**

| Name | Type | Description |
|------|------|-------------|
| `head` | - | ヘッド位置（4x4 同次変換行列）。 |
| `antennas` | - | アンテナ位置（rad）。 |
| `body_yaw` | - | ボディのヨー角（rad）。 |

---

## Goto モーション

### `reachy_mini.motion.goto.GotoMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L15)**

目標のヘッド姿勢および／またはアンテナ位置への goto モーションです。

### メソッド

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/goto.py#L51)**

時刻 t における goto を評価します。

---

## 録画モーション

### `reachy_mini.motion.recorded_move.RecordedMove`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L70)**

録画されたモーションを表します。

### メソッド

#### `evaluate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L98)**

時刻 t におけるモーションを評価します。

**戻り値:**

| Name | Type | Description |
|------|------|-------------|
| `head` | - | ヘッド位置（4x4 同次変換行列）。 |
| `antennas` | - | アンテナ位置（rad）。 |
| `body_yaw` | - | ボディのヨー角（rad）。 |

---

### `reachy_mini.motion.recorded_move.RecordedMoves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L156)**

HuggingFace データセットから録画モーションのライブラリを読み込みます。

:::info

再生中のネットワーク呼び出しによるブロッキングを避けるため、ローカルキャッシュのみを使用します。

データセットは、デーモン起動時に `preload_default_datasets()` を通して事前にダウンロードされている必要があります。

キャッシュされていない場合はネットワーク経由のダウンロードにフォールバックします（遅延が発生する可能性があります）。

:::

### メソッド

#### `get`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L209)**

名前で録画モーションを取得します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `move_name` | `str` | 取得するモーションの名前。 |

---

#### `list_moves`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L218)**

読み込まれているライブラリ内のすべてのモーションを一覧表示します。

---

#### `process`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/motion/recorded_move.py#L189)**

録画モーションおよびサウンドを構築します。
