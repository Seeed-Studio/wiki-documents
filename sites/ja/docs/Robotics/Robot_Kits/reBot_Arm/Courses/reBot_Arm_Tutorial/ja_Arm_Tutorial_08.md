---
description: "Seeed Embodied Intelligence Beginner's Course 第8章 — Python SDK を使って reBot Arm を制御：パラメータ、コンテキストマネージャによる接続、モーション、ゼロ点、関節状態。"
title: 第8章 - Python SDK を使用した reBot Arm の制御
keywords:
  - reBot
  - ロボットアーム
  - Python SDK
  - reBotArm
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_8
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_chapter_8/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 2 · 第8章 · 理論 &amp; 実践</span>
    <h2>8. Python SDK を使用した reBot Arm の制御</h2>
    <p>
      Seeed Embodied Intelligence Beginner's Course 第8章 — Python SDK を使って reBot Arm を制御します。
      パラメータ、コンテキストマネージャによる接続、モーション、ゼロ点、および関節状態について学びます。
    </p>
    <div className="hero-actions">
      <a href="#parameters">パラメータ</a>
      <a href="#connect">接続</a>
      <a href="#motion">モーション</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>8.1 パラメータの変更とモード切り替え</span>
    <span>8.2 ロボットアームの接続／切断（コンテキストマネージャの使用）</span>
    <span>8.3 ロボットアームのモーション制御</span>
    <span>8.4 ロボットアームのゼロ点設定</span>
    <span>8.5 ロボットアームの関節状態の更新</span>
  </div>
</section>

<RebotCourseNav />

<section className="section-card">
  <p>1. 環境がインストールされていない場合は、7.2 節の環境構築を参照してください。</p>

  <p>2. Python SDK ロボットアームの各関節コントローラのパラメータは、実際の使用要件に応じて調整する必要があります。現在のパラメータは、精度要件が低いシナリオにしか対応できません。</p>

必要な依存関係をインストールします：

```bash
python3 -m pip install pyyaml motorbridge
```

サンプルコードを取得します：

```bash
git clone https://github.com/hopcan/rebotArm_ctrl.git
```

- reBot DM を制御する Python サンプルは `rebotArm_ctrl/example/rebotDM` にあります。
- reBot DM ロボットアームの設定ファイルは `rebotArm_ctrl/config` にあります。
- reBot RS を制御する Python サンプルは `rebotArm_ctrl/example/rebotRS` にあります。
- reBot RS ロボットアームの設定ファイルは `rebotArm_ctrl/config` にあります。

</section>

## 8.1 パラメータの変更とモード切り替え

<section id="parameters" className="section-card">
  <div className="section-title">
    <span>パラメータ</span>
    <h2>8.1 パラメータの変更とモード切り替え</h2>
  </div>

reBot DM に推奨される制御モードは `POS_VEL` です。ロボットアームの関節制御モードの切り替えとパラメータの設定は、`rebotArm_ctrl/config` 配下の `rebotDM.yaml` 内の対応するパラメータを変更することで、どちらも実現できます。

例えば：

```yaml
- name: Shoulder Pan
  motor_can_id: 1
  MIT:
    kp: 10.0
    kd: 1.0
  POS_VEL:
    vel_kp: 0.0125
    vel_ki: 0.004
    pos_kp: 150.0
    pos_ki: 0.5
    vlim: 5.0
  posmax: 2.6
  posmin: -2.6
  use_mode: POS_VEL
```

MIT の `kp` と `kd`、POS_VEL の `vel_kp`、`vel_ki`、`pos_kp`、`pos_ki`、`vlim` は、それぞれのモードのパラメータであり、ロボットアームの制御結果に応じて変更できます。`use_mode` は対応する関節の制御モードを切り替えることができ、`MIT` または `POS_VEL` に変更できます。

</section>

## 8.2 ロボットアームの接続／切断（コンテキストマネージャの使用）

<section id="connect" className="section-card">
  <div className="section-title">
    <span>接続</span>
    <h2>8.2 ロボットアームの接続／切断（コンテキストマネージャの使用）</h2>
  </div>

`example/rebotDM/1_rebotDM_connect.py` または `example/rebotRS/1_rebotRS_connect.py` を参照してください。

1. まずバスコントローラを作成します。

:::warning 注意
1. ポートが存在するか確認してください。
2. プログラム実行前にポートの権限を付与する必要があります。
:::

reBot DM はシリアルポートを使用し、次のように作成します：

```python
channel = "/dev/ttyACM0"
ctrl = Controller.from_dm_serial(channel, 921600)
```

reBot RS は PCAN を使用します：

```python
channel = "can0"
ctrl = Controller(channel)
```

2. 安全なコンテキストマネージャを通して実装します：

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:

with reBotArm_handle(ctrl, "rebotRS") as handle:
```

ここで `reBotArm_handle` は `config_path` パラメータもサポートしています。このパラメータで読み込む設定ファイルを指定でき、デフォルトのロボットアーム設定ファイルは読み込まれなくなります。`config` 内の設定ファイルを参考にして、独自の設定ファイルを作成できます。

```python
with reBotArm_handle(ctrl, "rebotDM", config_path="absolute path of yaml") as handle:

with reBotArm_handle(ctrl, "rebotRS", config_path="absolute path of yaml") as handle:
```

コア実装：

1. `__enter__` 関数は `connect` 関数を呼び出してロボットアームに自動接続します。接続に失敗した場合は、対応するログが出力されます。
2. `__exit__` 関数は `disconnect` 関数を呼び出し、プログラム終了時にロボットアームとの接続を自動的に切断します。
3. ロボットアームへの接続では、バスコントローラにモータを追加し、起動時にモータ通信をチェックし、モータの CAN ID とマスタ ID が有効か検証し、設定ファイルが有効か検証し、モータの制御モードをターゲットの制御モードに変更します。
4. ロボットアームの切断では、まず自動的に初期状態を復元し、その後 disable します。

:::warning
Ctrl+C でプログラムを終了した後は、数秒待ってください。Ctrl+C を連続して押し続けないでください。ロボットアームが自動的にホームポジションに戻り、その後 disable されるまで待つ必要があります。
:::

コンテキストマネージャを使用したくない場合は、`connect` 関数と `disconnect` 関数を直接呼び出して、ロボットアームを接続／切断できます。

</section>

## 8.3 ロボットアームのモーション制御

<section id="motion" className="section-card">
  <div className="section-title">
    <span>モーション</span>
    <h2>8.3 ロボットアームのモーション制御</h2>
  </div>

`example/rebotDM/3_rebotDM_move_joint.py` または `example/rebotRS/3_rebotRS_move_joint.py` を参照してください。

```python
while True:
    handle.move_to_joint_positions([0, 0, 0, 0.5, 0.5, 0, -1])
    for motor_id in list(range(1, 8)):
        print(f"motor {motor_id}")
        print(f"pos: {handle.motor_state[motor_id].pos:.3f} rad")
        print(f"vel: {handle.motor_state[motor_id].vel:.3f} rad/s")
        print(f"torque: {handle.motor_state[motor_id].torq:.3f} Nm\n")
    time.sleep(0.002)
```

`handle.motor_state` は、すべての関節の状態情報を含む辞書です。読み取り方法は上記のとおりです。

</section>

## 8.4 ロボットアームのゼロ点設定

<section id="zero-point" className="section-card">
  <div className="section-title">
    <span>ゼロ点</span>
    <h2>8.4 ロボットアームのゼロ点設定</h2>
  </div>

`example/rebotDM/2_rebotDM_set_zero.py` または `example/rebotRS/2_rebotRS_set_zero.py` を参照してください。

```python
with reBotArm_handle(ctrl, "rebotRS") as handle:
    handle.set_zero_position()

with reBotArm_handle(ctrl, "rebotDM") as handle:
    handle.set_zero_position()
```

ロボットアーム制御クラスを通じて `set_zero_position` 関数を呼び出すことで、ロボットアームのすべての関節に対応する関節 ID を設定できます。

</section>

## 8.5 ロボットアームの関節状態の更新

<section id="joint-state" className="section-card">
  <div className="section-title">
    <span>関節状態</span>
    <h2>8.5 ロボットアームの関節状態の更新</h2>
  </div>

`example/rebotDM/5_rebotDM_request_joints_data.py` または `example/rebotRS/5_rebotRS_request_joints_data.py` を参照してください。

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)


with reBotArm_handle(ctrl, "rebotRS") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)
```

`get_joints_state()`: ロボットアームの各関節の状態を能動的に更新し、現在の関節角度を返します。

</section>

</div>
