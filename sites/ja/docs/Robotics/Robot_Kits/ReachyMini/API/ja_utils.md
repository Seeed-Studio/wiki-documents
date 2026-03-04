---
description: 補間関数、ハードウェア構成、Rerun による可視化、およびコアユーティリティを含む Reachy Mini utils の完全な API リファレンス。
title: Utils API リファレンス
slug: /reachymini_api_utils
keywords:
- api
- utils
- interpolation
- hardware config
- visualization
- urdf
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# Utils

## 補間関数

### `reachy_mini.utils.interpolation.minimum_jerk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L13)**

開始位置から目標位置までの最小ジャーク補間関数を計算します。

---

### `reachy_mini.utils.interpolation.linear_pose_interpolation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L58)**

6 次元空間において 2 つのポーズ間を線形補間します。

---

### `reachy_mini.utils.interpolation.time_trajectory`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L96)**

指定された補間手法に基づいて時間軌道の値を計算します。

---

### `reachy_mini.utils.interpolation.delta_angle_between_mat_rot`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L135)**

2 つの 3x3 回転行列 `P` と `Q` の間の角度（ラジアン）を計算します。

これは軸-角空間における角距離と等価です。相対回転行列のトレースを用いて計算されます。

**パラメータ:**

| Name | Description |
|------|-------------|
| `P` | 3x3 回転行列。 |
| `Q` | 別の 3x3 回転行列。 |

**戻り値:**

2 つの回転の間の角度（ラジアン）。

**参考文献:**
- [https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices](https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices)
- [http://www.boris-belousov.net/2016/12/01/quat-dist/](http://www.boris-belousov.net/2016/12/01/quat-dist/)

---

### `reachy_mini.utils.interpolation.distance_between_poses`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L161)**

2 つの 4x4 同次変換行列間の 3 種類の距離を計算します。

結果は、平行移動（mm 単位）と回転（度単位）を、恣意的だが感覚的に納得しやすい等価関係 **1 度 ≈ 1 mm** を用いて組み合わせたものです。

**パラメータ:**

| Name | Description |
|------|-------------|
| `pose1` | 最初のポーズを表す 4x4 同次変換行列。 |
| `pose2` | 2 番目のポーズを表す 4x4 同次変換行列。 |

**戻り値:**

次の要素からなるタプル:
- 平行移動距離（メートル）
- 角距離（ラジアン）
- アンヒンジド距離（magic-mm 単位、mm の平行移動 + 度の回転）

---

### `reachy_mini.utils.interpolation.compose_world_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L187)**

絶対ワールド座標系ポーズにワールド座標系オフセットを合成します。

- **平行移動はワールド座標で加算:** `t_final = t_abs + t_off`
- **回転はワールド座標で合成:** `R_final = R_off @ R_abs`

これにより、ワールド座標系で定義された回転によってフレームをその原点まわりに回転させ、ワールド座標系での平行移動によってシフトします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `T_abs` | `(4,4) ndarray` | ワールド座標系における絶対ポーズ。 |
| `T_off_world` | `(4,4) ndarray` | ワールド軸で指定されたオフセット変換（ワールドにおける dx,dy,dz と、ワールド軸まわりの dR）。 |
| `reorthonormalize` | `bool` | True の場合、ドリフトを抑えるために SVD によって結果の回転を再直交化します。 |

**戻り値:**

| Name | Type | Description |
|------|------|-------------|
| `T_final` | `(4,4) ndarray` | ワールド座標系における結果ポーズ。 |

---

### `reachy_mini.utils.interpolation.InterpolationTechnique`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L87)**

補間手法の列挙型。

---

## ハードウェア構成

### `reachy_mini.utils.hardware_config.parser.MotorConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L9)**

モーター構成。

---

### `reachy_mini.utils.hardware_config.parser.SerialConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L23)**

シリアル構成。

---

### `reachy_mini.utils.hardware_config.parser.ReachyMiniConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L30)**

Reachy Mini の構成。

---

### `reachy_mini.utils.hardware_config.parser.parse_yaml_config`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L38)**

YAML 構成ファイルを解析し、`ReachyMiniConfig` を返します。

---

## Rerun による可視化

### `reachy_mini.utils.rerun.Rerun`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L28)**

Reachy Mini 用の Rerun ロギング。

### メソッド

#### `log_camera`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L126)**

カメラ画像を Rerun にログ出力します。

---

#### `log_movements`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L203)**

動作データを Rerun にログ出力します。

---

#### `set_absolute_path_to_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L97)**

URDF ファイル内の絶対パスを設定します。Rerun は `"package://"` パスを読み取ることができません。

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L107)**

Rerun ロギングスレッドを開始します。

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L113)**

Rerun ロギングスレッドを停止します。

---

### `reachy_mini.utils.rerun.UrdfEntityPaths`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L276)**

ネイティブ URDF ロガーと一致するリンク／ジョイントのエンティティパスを構築するためのヘルパー。

---

## ワイヤレス版ユーティリティ

### `reachy_mini.utils.wireless_version.utils.call_logger_wrapper`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/utils.py#L8)**

コマンドを非同期で実行し、stdout と stderr をリアルタイムで logger にストリーミングします。

**パラメータ:**

| Name | Description |
|------|-------------|
| `command` | コマンド引数のリストまたはタプル（文字列ではない） |
| `logger` | `.info` と `.error` メソッドを持つ logger オブジェクト |

---

### `reachy_mini.utils.wireless_version.update.update_reachy_mini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update.py#L12)**

reachy_mini パッケージを更新し、デーモンを再起動します。

**パラメータ:**

| Name | Description |
|------|-------------|
| `logger` | 出力をストリーミングするための Logger。 |
| `pre_release` | True の場合、PyPI からプレリリース版をインストールします（git_ref が設定されている場合は無視）。 |
| `git_ref` | 設定されている場合、PyPI ではなくこの GitHub タグ／ブランチからインストールします。 |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_fix_venvs_ownership`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L17)**

ワイヤレスユニット向けに、venvs_path 配下のファイルがユーザー pollen の所有になっているかを確認し、必要に応じて修正します。

**パラメータ:**

| Name | Description |
|------|-------------|
| `venvs_path` | 仮想環境ディレクトリへのパス（デフォルト: /venvs） |
| `custom_logger` | モジュールロガーの代わりに使用する任意の logger |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_bluetooth_service`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L80)**

:::info

bluetooth サービスを更新する必要があるか確認し、異なっていれば更新します。

ソースの `bluetooth_service.py` と、`/bluetooth/bluetooth_service.py` にインストールされているバージョンを比較します。異なる場合は新しいバージョンをコピーし、bluetooth サービスを再起動します。また、`commands/` フォルダも同期します。

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_wireless_launcher`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L190)**

:::info

ワイヤレスデーモンサービスを更新する必要があるか確認し、異なっていれば更新します。

ソースの `reachy-mini-daemon.service` とインストール済みバージョンを比較します。異なる場合は新しいバージョンをコピーし、systemd をリロードします。

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_sync_apps_venv_sdk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L255)**

:::info

apps_venv SDK がデーモンのインストール元と一致しているか確認し、必要に応じて同期します。

バージョンとインストール元（PyPI か git ref か）の両方を比較します。デーモンが git ref からインストールされている場合、apps_venv も同じ ref に同期されます。

:::

---

### `reachy_mini.utils.wireless_version.update_available.is_update_available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L36)**

指定したパッケージに利用可能なアップデートがあるかを確認します。

---

### `reachy_mini.utils.wireless_version.update_available.get_pypi_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L47)**

PyPI からパッケージの最新バージョンを取得します。

---

### `reachy_mini.utils.wireless_version.update_available.get_local_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L65)**

パッケージの現在インストールされているバージョンを取得します。

---

## コアユーティリティ

### `reachy_mini.utils.create_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/__init__.py#L13)**

6次元空間（位置と姿勢）におけるポーズを表す同次変換行列を作成します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `x` | `float` | 位置のX座標。 |
| `y` | `float` | 位置のY座標。 |
| `z` | `float` | 位置のZ座標。 |
| `roll` | `float` | ロール角。 |
| `pitch` | `float` | ピッチ角。 |
| `yaw` | `float` | ヨー角。 |
| `mm` | `bool` | True の場合、位置をミリメートルからメートルに変換します。 |
| `degrees` | `bool` | True の場合、roll、pitch、yaw を度として解釈し、それ以外の場合はラジアンとして解釈します。 |

**戻り値:**

`np.ndarray` — ポーズを表す 4x4 の同次変換行列。

---

## URDF のパース

### `reachy_mini.utils.parse_urdf_for_kinematics.get_data`

**[ソース](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/parse_urdf_for_kinematics.py#L17)**

`urdf_kinematics.json` ファイルを生成します。
