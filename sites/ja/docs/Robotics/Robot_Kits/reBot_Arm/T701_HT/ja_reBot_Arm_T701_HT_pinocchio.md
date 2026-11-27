---
title: reBot Arm T701 HT と Pinocchio
sidebar_label: Pinocchio
description: reBot Arm T701 HT 上で順運動学と逆運動学を検証し、重力補償、デカルト軌道、およびキーボード制御のサンプルを実行します。
keywords:
  - reBot
  - T701 HT
  - Pinocchio
  - 運動学
  - 重力補償
slug: /rebot_t701_ht_pinocchio
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
createdAt: '2026-11-17'
url: https://wiki.seeedstudio.com/ja/rebot_t701_ht_pinocchio/
updatedAt: '2026-11-23'
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT と Pinocchio

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT bimanual robot"
  />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

T701-HT SDK は Pinocchio を使用して URDF モデルを読み込み、エンドエフェクタの姿勢と重力による関節トルクを計算します。重力補償、デカルト軌道、およびキーボード制御のサンプルを実行する前に、順運動学（FK）と逆運動学（IK）のサンプルを使用して、ロボットからの関節フィードバックを確認してください。

<section className="section-card">

## ロボットの準備

[T701 HT クイックスタートのインストール手順](https://wiki.seeedstudio.com/ja/rebot_t701_ht_getting_started/#install-the-sdk)に従って、SDK とその依存関係をインストールします。その後、残りのクイックスタート手順に従い、シリアルポートのマッピングを確認し、関節およびグリッパのフィードバックを読み取り、ゼロ位置を検証します。

:::warning[ロボット上でサンプルを実行する前に]

- アームがしっかりと固定されていることを確認し、ペイロードをすべて取り外してください。最初の実行では片腕のみを使用してください。
- モーションのサンプルでアームを選択するとすぐに、アームが動き始める場合があります。可動範囲全体（頭上空間およびゼロ位置へ戻る経路を含む）を空けてください。実行中はロボットのそばに付き添い、関節およびグリッパ部の挟み込み箇所に近づかないでください。

:::

新しいターミナルまたは SSH セッションを開くたびに、SDK のルートディレクトリに移動し、クイックスタートで作成した `t701-ht` Conda 環境を有効化してから、`scripts` ディレクトリに入ります。

```bash
conda activate t701-ht
cd scripts
```

サンプルを起動した後のプロンプトでは、左腕には `1`、右腕には `2`、両腕には `3` を入力します。

</section>

<section className="section-card">

## 順運動学と逆運動学の検証

順運動学は、現在の関節角度からエンドエフェクタの姿勢を計算します。逆運動学チェックでは、その姿勢を生成する関節角度を解き、それらを現在の読み値と比較します。どちらのサンプルも計算には関節フィードバックのみを使用し、`Ctrl+C` で終了するとモータ停止コマンドを送信します。

| サンプル | コマンド | 期待される出力 |
| --- | --- | --- |
| ライブ順運動学（FK） | `python t701_ht_forward_kinematics_test.py` | エンドエフェクタ位置（メートル）と、ロール・ピッチ・ヨー（RPY、度）を約 1 秒ごとに表示します。 |
| 現在姿勢での FK から IK へのチェック | `python t701_ht_inverse_kinematics_test.py` | 現在の関節角度とエンドエフェクタ位置を表示します。IK が成功した場合は、関節角度誤差の最大値（ラジアン）も表示します。 |

</section>

<section className="section-card">

## 重力補償

`G(q)` は、関節角度 `q` からモデルが計算する重力トルクです。重力補償により、アームを手で動かしやすくなります。

| サンプル | コマンド | 期待される動作 |
| --- | --- | --- |
| 重力補償 | `python t701_ht_gravity_compensation.py` | トルク制限の範囲内で `0.8 × G(q)` を印加し、補償トルクを表示します。 |
| FK 出力付き重力補償 | `python t701_ht_gravity_compensation_with_fk.py` | トルク制限の範囲内で `G(q)` を印加し、関節角度、補償トルク、およびエンドエフェクタ姿勢を表示します。 |

`Ctrl+C` を押すと、どちらの重力補償サンプルもモータを直接停止します。

</section>

<section className="section-card">

## デカルト制御

### IK を用いた目標位置への移動

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

最初に関節をゼロに戻します。目標姿勢に対する IK 解が誤差チェックを通過した場合、アームは `moveJ` を使用して目標位置へ移動します。

```bash
python t701_ht_inv_posvel_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![IK（MOVEJ）を用いた目標位置への移動デモ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-ik-movej.gif)

</div>
</div>
</div>

### 二次計画法（QP）逆運動学

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

初期 VR 姿勢へ移動した後、アームを持ち上げて頭上に円を描きます。

```bash
python t701_ht_qp_ik.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![QP 逆運動学による頭上円軌道デモ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-qp-ik-circle.gif)

</div>
</div>
</div>

### MoveL 並進

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

エンドエフェクタの目標姿勢（姿勢）を保持したまま、直線、斜め、正方形の経路を順にたどります。

```bash
python t701_ht_moveL_pos_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![MoveL 並進デモ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-movel-translation.gif)

</div>
</div>
</div>

### MoveL 回転

エンドエフェクタの目標位置を保持したまま、エンドエフェクタのローカル軸まわりに回転し、円すい運動を行います。

```bash
python t701_ht_moveL_rotate_control.py
```

どちらの MoveL サンプルも、最初に初期 VR 姿勢へ移動することから始まります。各軌道は、初期位置決めとゼロへの復帰を除いて 5 秒間実行されます。このセクションの 4 つのサンプルはすべて、最後にゼロへ戻って停止します。

</section>

<section className="section-card">

## キーボード制御

- **並進。** `W` / `S`、`A` / `D`、`Q` / `E` を使用して、それぞれ X、Y、Z 軸方向に移動します。
- **回転。** `1` / `2`、`3` / `4`、`5` / `6` を使用して、それぞれ X、Y、Z 軸まわりに回転します。
- **基準姿勢のリセット。** Null-space 姿勢ロックのサンプルでは、`R` を押すと現在の関節姿勢を基準姿勢として設定します。
- **終了。** `Esc` または `Ctrl+C` を押すと、ゼロへ戻って停止します。

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

これらのサンプルは、対話的なローカルターミナルまたは SSH セッションで実行してください。アームを選択すると、自動的に初期 VR 姿勢へ移動してからキーボード入力を受け付けます。

**エンドエフェクタ姿勢**

キーを 1 回押すごとに、目標エンドエフェクタ姿勢が 1 ステップ分変化します。IK が失敗した場合、そのサンプルは直前の関節目標を保持します。

```bash
python t701_ht_keyboard_cartesian_pos_control.py
```

**エンドエフェクタ速度**

キーを押し続けると、エンドエフェクタが連続的に並進または回転します。キーを離すと、指令速度がゼロまで減速します。

```bash
python t701_ht_keyboard_cartesian_vel_control.py
```

**衝突予測付きエンドエフェクタ速度**

キーを使ってエンドエフェクタ速度を制御します。サンプルが衝突または関節リミット違反を予測した場合、ゼロ速度を指令し、メッセージを表示します。

```bash
python t701_ht_keyboard_cartesian_vel_collision_control.py
```

**Null-space 姿勢ロック**

エンドエフェクタの目標姿勢を追従しつつ、関節姿勢が基準姿勢からできるだけ離れないように保ちます。

```bash
python t701_ht_keyboard_cartesian_pd_nullspace_lock_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![キーボード制御デモ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-keyboard-control.gif)

</div>
</div>
</div>

:::warning[衝突予測の適用範囲]

アームが初期 VR 姿勢に到達すると、衝突予測付きエンドエフェクタ速度サンプルは、次の 0.20 秒間について衝突および関節リミット違反をチェックします。衝突チェックには `T701-HT_URDF/meshes/` 内の STL メッシュを使用し、デュアルアームモードでのアーム同士の衝突も含みます。起動時およびゼロへの復帰時にはクリアランスを確保し、グリッパと実際の停止距離のために余裕を持たせてください。

:::

</section>

</div>
