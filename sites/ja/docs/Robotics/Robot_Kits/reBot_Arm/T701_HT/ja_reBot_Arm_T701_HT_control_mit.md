---
title: reBot Arm T701 HT MIT 制御 SDK
sidebar_label: MIT Control SDK
description: T701-HT SDK を使用して単一モーターの 5 パラメータ MIT 制御を実行し、CAN の選択、目標軌道、フィードバック、およびゼロ復帰シャットダウンについて理解します。
keywords:
  - reBot
  - T701 HT
  - Python SDK
  - MIT Control
  - Motor Control
slug: /rebot_t701_ht_control_mit
translation:
  skip: [zh-CN]
last_update:
  date: 11/18/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT MIT 制御 SDK

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="GitHub で T701-HT SDK に Star を付ける"
/>

T701-HT SDK の MIT インターフェースは、目標位置、目標速度、フィードフォワードトルク、位置ゲイン `Kp`、速度ゲイン `Kd` をまとめて設定します。このページでは、単一モーターの正弦波追従サンプル、そのパラメータ、フィードバック、およびシャットダウンシーケンスを紹介します。アーム全体の重力補償、関節インピーダンス、デカルト制御については、[T701 HT with Pinocchio](https://wiki.seeedstudio.com/ja/rebot_t701_ht_pinocchio/) を参照してください。

<section className="section-card">

## ロボットの準備

[T701 HT クイックスタートのインストール手順](https://wiki.seeedstudio.com/ja/rebot_t701_ht_getting_started/#sdk-をインストールする)に従って SDK を入手し、依存関係をインストールします。シリアルマッピングと関節およびグリッパのフィードバック確認を完了し、選択したモーターのゼロ位置を検証します。

- **接続。** 左腕は CAN1、右腕は CAN2 を使用します。`T701-HT_robot_param/serial_binding.yaml` の `board_serial` を、通信ボードの USB シリアル番号に設定します。
- **モーター ID。** 各アームで、ID1～ID7 が 7 つの関節、ID8 がグリッパです。
- **作業ディレクトリ。** このページのすべてのコマンドは SDK ルートから実行します。新しいターミナルや SSH セッションごとに、そのディレクトリに戻り、環境を有効化してください。

```bash
conda activate t701-ht
```

:::warning[実行前に動作範囲を確認する]

選択したモーターは、モーションコマンドを実行すると、追加のアーム選択や確認なしにすぐに動き始めます。ハードウェアを固定し、ペイロードを取り外し、動作範囲と復帰経路を確保してください。ハードウェアのそばに付き添い、関節やグリッパの挟み込みポイントから離れていてください。

元の目標は **±π rad (±180°)** です。モーションループは高レベルの関節リミットや重力補償を適用せず、低レベルのモーターインターフェースを直接呼び出します。この軌道は、組み立て済みの関節やグリッパの許容範囲を超える可能性があります。特に、ID8 グリッパの高レベル範囲は **−0.2 ～ 2.2 rad** であり、元の軌道は実行できません。実行前に、選択した機構に合わせて目標位置と対応する速度を調整し、軌道全体と復帰経路を検証してください。

:::

</section>

<section className="section-card">

## モーターを 1 つ選択して実行する

サンプルは `scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py` です。上記の軌道を確認・調整したら、配線に合うコマンドを 1 つ選択します。

**左腕 CAN1、モーター ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 1 --motor-id 8 --arm left
```

**右腕 CAN2、モーター ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 2 --motor-id 8 --arm right
```

| 引数 | 値 | 目的 |
| --- | --- | --- |
| `--can-port` | 1～7 | 通信ボード上の論理 CAN チャネル。標準配線では左腕に 1、右腕に 2 を使用します。 |
| `--motor-id` | 1～8 | 指定したチャネル上で、この ID を持つ 1 つのモーターのみを選択します。 |
| `--arm` | `left` / `right` | その側のモータータイプと原点復帰設定を選択します。 |

3 つの引数はすべて必須であり、デフォルトのアームやモーター選択はありません。`--arm` は CAN チャネルを選択せず、右腕の軌道をミラーリングもしません。このサンプルは対応する YAML から一時的な単一モーター設定を生成するため、アーム全体のモーターリストを編集する必要はありません。

</section>

<section className="section-card">

## MIT パラメータと目標軌道

この抜粋はモーションループからのもので、サンプルは `motor` と `robot` を作成します。選択したモーターのコマンドを設定し、その後送信します。

```python
motor.pos_vel_tqe_kp_kd(pos, vel, 0.0, 2, 0.5)
robot.motor_send_cmd()
```

| パラメータ（呼び出し順） | 意味 | 元の設定 |
| --- | --- | --- |
| `pos` | 目標位置、rad | 振幅 π rad の `π × sin(2π × 0.1 × t)`。 |
| `vel` | 目標速度、rad/s | 目標位置の時間微分である `0.2 × π² × cos(2π × 0.1 × t)`。 |
| `tqe` | フィードフォワードトルク、Nm | `0.0`。フィードフォワードがゼロでも、モーター出力トルクがゼロとは限りません。 |
| `kp` | 位置ゲイン | `2`。 |
| `kd` | 速度ゲイン | `0.5`。 |

元の周波数は **0.1 Hz**、周期は **10 秒** で、目標速度のピークは約 **1.974 rad/s** です。位置を `offset + A × sin(2π × f × t)` に変更する場合は、対応する速度 `A × 2π × f × cos(2π × f × t)` を使用し、`offset − A` から `offset + A` までの全範囲が許容されていることを確認してください。

`t` は `time.time()` を使用するため、初期位相は起動時刻に依存し、目標が必ずしもゼロから開始するとは限りません。ソースコメントには「1.0 rad 振幅」とありますが、式では **π rad** が使用されています。

ループは各送信後に `0.001` 秒スリープします。通信、計算、印字によってサイクル時間が増加するため、これは固定 1 kHz のリアルタイムループではありません。

</section>

<section className="section-card">

## 状態フィードバックの読み取り

起動時に、ターミナルには制御対象モーターの数が表示されます。その後、100 ループごとに選択したモーターの状態を出力します。

| フィールド | 意味 |
| --- | --- |
| `position` | 現在のモーター位置。rad で表示し、度に変換して出力します。 |
| `velocity` | 現在のモーター速度、rad/s。 |
| `torque` | 報告されるモータートルク、Nm。 |
| `mode` | 低レベル SDK から返されるモード値。 |
| `fault` | 低レベル SDK から返されるフォルトコード。16 進数で表示します。 |

このサンプルは、`motor.get_current_motor_state()` を通じてこれらのフィールドを読み取ります。印字間隔は実際のループタイミングに依存します。サンプルはモードとフォルト値を、フォルトコードをデコードせずに表示します。

</section>

<section className="section-card">

## ゼロ位置への復帰と終了

1. 最初の `Ctrl+C` は正弦波追従を終了し、選択したモーターを保存済みのゼロ位置へ滑らかに戻し始めます。
2. 原点復帰は、`--arm` で選択した側の原点復帰設定を用いて、位置・速度・最大トルクインターフェース `pos_vel_MAXtqe()` を使用します。
3. 原点復帰後、シャットダウンロジックはダンピングブレーキコマンドを送信します。原点復帰中に再度 `Ctrl+C` を押すと、復帰を中断してブレーキを試みます。不正なフィードバックや原点復帰の失敗も、シャットダウンロジックによるブレーキ試行を引き起こします。

最初の `Ctrl+C` は復帰動作をトリガーします。ダンピングブレーキは位置保持ではないため、起動時とシャットダウン時には機構を支えてください。

</section>

<section className="section-card">

## アーム全体で MIT 制御を使用する

単一モーターのサンプルは低レベルの `motor` オブジェクトを使用します。アーム全体の制御では、関節とグリッパ用に分かれたインターフェースを持つ `Lib.t701_ht.T701HT` を使用します。

| インターフェース | パラメータと送信動作 |
| --- | --- |
| `motor.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | 1 つのモーターに対する 5 つのスカラーパラメータ。後で `robot.motor_send_cmd()` を呼び出して送信します。 |
| `arm.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | グリッパを除く長さ 7 の 5 つの関節ベクトル。送信前に設定された目標関節位置範囲をチェックし、範囲外の目標に対しては `False` を返します。 |
| `arm.gripper_control_MIT(pos, vel, tqe, kp, kd, send=True)` | グリッパ用の 5 つのスカラーパラメータ。目標グリッパ位置範囲をチェックし、デフォルトで送信します。`send=False` の場合は、同じサイクルでの関節コマンド送信に向けてコマンドをキューに入れるだけです。範囲外の目標に対しては `False` を返します。 |

アーム全体の MIT インターフェースにおける目標位置チェックは、軌道設計やトルク制限の代わりにはなりません。重力フィードフォワード、関節インピーダンス、自動シャットダウン処理については、[Pinocchio ページ](https://wiki.seeedstudio.com/ja/rebot_t701_ht_pinocchio/) からリンクされている完全なサンプルを使用してください。

</section>

</div>
