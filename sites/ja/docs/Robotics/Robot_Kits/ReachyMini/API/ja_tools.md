---
description: モーターセットアップツール、スキャニングツール、リフラッシュツールを含む Reachy Mini ツールの完全な API リファレンス。
title: ツール API リファレンス
slug: /ja/reachymini_api_tools
keywords:
- api
- tools
- motor setup
- scanning
- reflashing
- utilities
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# ツール

## モーターセットアップツール

### `reachy_mini.tools.setup_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L55)**

指定された設定でモーターをセットアップします。

---

### `reachy_mini.tools.setup_motor.lookup_for_motor`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L144)**

指定されたシリアルポート上で、指定された ID を持つモーターに到達可能かどうかを確認します。

---

### `reachy_mini.tools.setup_motor.disable_torque`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L165)**

指定されたシリアルポート上で、指定された ID を持つモーターのトルクを無効にします。

---

### `reachy_mini.tools.setup_motor.change_baudrate`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L177)**

指定されたシリアルポート上で、指定された ID を持つモーターのボーレートを変更します。

---

### `reachy_mini.tools.setup_motor.change_id`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L191)**

指定されたシリアルポート上で、現在の ID を持つモーターの ID を変更します。

---

### `reachy_mini.tools.setup_motor.change_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L203)**

指定されたシリアルポート上で、指定された ID を持つモーターのオフセットを変更します。

---

### `reachy_mini.tools.setup_motor.change_operating_mode`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L215)**

指定されたシリアルポート上で、指定された ID を持つモーターの動作モードを変更します。

---

### `reachy_mini.tools.setup_motor.change_angle_limits`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L233)**

指定されたシリアルポート上で、指定された ID を持つモーターの角度制限を変更します。

---

### `reachy_mini.tools.setup_motor.change_shutdown_error`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L256)**

指定されたシリアルポート上で、指定された ID を持つモーターのシャットダウンエラー設定を変更します。

---

### `reachy_mini.tools.setup_motor.change_return_delay_time`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L274)**

指定されたシリアルポート上で、指定された ID を持つモーターのリターンディレイ時間を変更します。

---

### `reachy_mini.tools.setup_motor.light_led_up`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L292)**

指定されたシリアルポート上で、指定された ID を持つモーターの LED を点灯させます。

---

### `reachy_mini.tools.setup_motor.light_led_down`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L311)**

指定されたシリアルポート上で、指定された ID を持つモーターの LED を消灯させます。

---

### `reachy_mini.tools.setup_motor.check_configuration`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/setup_motor.py#L329)**

指定されたシリアルポート上で、指定された ID を持つモーターの設定を確認します。

---

## モータースキャニングツール

### `reachy_mini.tools.scan_motors.scan`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/scan_motors.py#L48)**

指定されたボーレートでバスをスキャンし、検出された ID を返します。

---

## モーターリフラッシュツール

### `reachy_mini.tools.reflash_motors`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/tools/reflash_motors.py#L40)**

:::warning

Reachy Mini のモーターをリフラッシュします。

これは潜在的に危険な操作であり、経験豊富なユーザーのみが実行するべきです。

:::
