---
title: reBot Arm T701 HT と Pinocchio
sidebar_label: Pinocchio
description: reBot Arm T701 HT 上で順運動学と逆運動学を検証し、重力補償、デカルト軌道、およびキーボード制御のサンプルを実行します。
keywords:
  - reBot
  - T701 HT
  - Pinocchio
  - Kinematics
  - Gravity Compensation
slug: /rebot_t701_ht_pinocchio
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT と Pinocchio

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

T701-HT SDK は Pinocchio を使用して URDF モデルを読み込み、エンドエフェクタの姿勢と重力による関節トルクを計算します。重力補償、デカルト軌道、およびキーボード制御のサンプルを実行する前に、順運動学 (FK) と逆運動学 (IK) のサンプルを使用して、ロボットからの関節フィードバックを確認してください。

<section className="section-card">

## ロボットの準備

[T701 HT クイックスタートのインストール手順](https://wiki.seeedstudio.com/ja/rebot_t701_ht_getting_started/#install-the-sdk)に従って、SDK とその依存関係をインストールします。その後、残りのクイックスタートの手順に従って、シリアルポートのマッピングを確認し、関節およびグリッパのフィードバックを読み取り、ゼロ位置を検証します。

:::warning[ロボット上でサンプルを実行する前に]

- アームがしっかりと固定されていることを確認し、ペイロードはすべて取り外してください。最初の実行では片腕のみを使用してください。
- モーションのサンプルでアームを選択すると、すぐに動き始める場合があります。可動範囲全体を確保し、上方の空間とゼロ位置へ戻る経路も含めて障害物を取り除いてください。実行中は常にロボットのそばにいて、関節やグリッパ部の挟み込み箇所に近づかないようにしてください。
- 重力補償のサンプルを開始または停止する前にアームを支え、補償トルクが解除されたときにアームが落下しないようにしてください。
- 自動でゼロ位置に戻るサンプルでは、最初の `Ctrl+C` で復帰動作が開始されます。復帰動作中にもう一度 `Ctrl+C` を押すと、動作を中断して停止コマンドを送信します。

:::

新しいターミナルや SSH セッションを開くたびに、SDK のルートディレクトリに移動し、クイックスタートで作成した `t701-ht` Conda 環境を有効化してから、`scripts` ディレクトリに入ってください。

```bash
conda activate t701-ht
cd scripts
```

サンプル起動後のプロンプトでは、左腕には `1`、右腕には `2`、両腕には `3` を入力します。

</section>

<section className="section-card">

## 順運動学と逆運動学の検証

順運動学は、現在の関節角度からエンドエフェクタの姿勢を計算します。逆運動学チェックでは、その姿勢を生成する関節角度を解き、それを現在の読み値と比較します。どちらのサンプルも計算には関節フィードバックのみを使用し、`Ctrl+C` で終了するとモータ停止コマンドを送信します。

| サンプル | コマンド | 期待される出力 |
| --- | --- | --- |
| ライブ順運動学 (FK) | `python t701_ht_forward_kinematics_test.py` | エンドエフェクタ位置をメートル単位で、ロール・ピッチ・ヨー (RPY) を度単位で、約 1 秒ごとに表示します。 |
| 現在姿勢での FK から IK へのチェック | `python t701_ht_inverse_kinematics_test.py` | 現在の関節角度とエンドエフェクタ位置を表示します。IK が成功した場合は、関節角度誤差の最大値（ラジアン）も表示します。 |

</section>

<section className="section-card">

## 重力補償

`G(q)` は、関節角度 `q` からモデルが計算する重力トルクです。重力補償により、アームを手で動かしやすくなります。

| サンプル | コマンド | 期待される動作 |
| --- | --- | --- |
| 重力補償 | `python t701_ht_gravity_compensation.py` | トルク制限の範囲内で `0.8 × G(q)` を印加し、補償トルクを表示します。 |
| FK 出力付き重力補償 | `python t701_ht_gravity_compensation_with_fk.py` | トルク制限の範囲内で `G(q)` を印加し、関節角度、補償トルク、およびエンドエフェクタ姿勢を表示します。 |

`Ctrl+C` を押すと、2 つの重力補償サンプルはいずれもモータを直接停止します。

</section>

<section className="section-card">

## デカルト制御

| サンプル | コマンド | 動作シーケンス |
| --- | --- | --- |
| IK を用いた目標位置への移動 | `python t701_ht_inv_posvel_control.py` | まず関節をゼロ位置に戻します。目標姿勢に対する IK 解が誤差チェックを通過した場合、アームは `moveJ` を使用して目標位置へ移動します。 |
| 二次計画法 (QP) による逆運動学 | `python t701_ht_qp_ik.py` | 初期 VR 姿勢に移動した後、アームを持ち上げて頭上に円を描きます。 |
| MoveL 並進 | `python t701_ht_moveL_pos_control.py` | 目標エンドエフェクタ姿勢を保持しながら、直線、対角線、正方形の軌道を順にたどります。 |
| MoveL 回転 | `python t701_ht_moveL_rotate_control.py` | 目標エンドエフェクタ位置を保持しつつ、エンドエフェクタのローカル軸まわりに回転し、円すい運動を行います。 |

2 つの MoveL サンプルはいずれも、初期 VR 姿勢への移動から開始します。各軌道は、初期位置決めとゼロ位置への復帰を除いて 5 秒間実行されます。このセクションの 4 つのサンプルはすべて、最後にゼロ位置へ戻って停止します。

</section>

<section className="section-card">

## キーボード制御

これらのサンプルは、対話的なローカルターミナルまたは SSH セッションで実行してください。アームを選択すると、キーボード入力を受け付ける前に自動的に初期 VR 姿勢へ移動します。

| サンプル | コマンド | 期待される動作 |
| --- | --- | --- |
| エンドエフェクタ姿勢 | `python t701_ht_keyboard_cartesian_pos_control.py` | キーを 1 回押すごとに、目標エンドエフェクタ姿勢が 1 ステップ変化します。IK が失敗した場合は、直前の関節目標を保持します。 |
| エンドエフェクタ速度 | `python t701_ht_keyboard_cartesian_vel_control.py` | キーを押し続けると、エンドエフェクタが連続的に並進または回転します。キーを離すと、指令速度がゼロまで徐々に減速します。 |
| 衝突予測付きエンドエフェクタ速度 | `python t701_ht_keyboard_cartesian_vel_collision_control.py` | キーを使ってエンドエフェクタ速度を制御します。衝突または関節リミット違反が予測されると、ゼロ速度を指令し、メッセージを表示します。 |
| ヌルスペース姿勢ロック | `python t701_ht_keyboard_cartesian_pd_nullspace_lock_control.py` | 目標エンドエフェクタ姿勢を追従しつつ、関節姿勢が基準姿勢からできるだけ離れないように保ちます。 |

- **並進。** `W` / `S`、`A` / `D`、`Q` / `E` を使用して、それぞれ X、Y、Z 軸方向に移動します。
- **回転。** `1` / `2`、`3` / `4`、`5` / `6` を使用して、それぞれ X、Y、Z 軸まわりに回転します。
- **基準姿勢のリセット。** ヌルスペース姿勢ロックのサンプルでは、`R` を押すと現在の関節姿勢を基準姿勢として設定します。
- **終了。** `Esc` または `Ctrl+C` を押すと、ゼロ位置へ戻って停止します。

:::warning[衝突予測の適用範囲]

アームが初期 VR 姿勢に到達すると、衝突予測付きエンドエフェクタ速度サンプルは、次の 0.20 秒間について衝突および関節リミット違反をチェックします。衝突チェックには `T701-HT_URDF/meshes/` 内の STL メッシュを使用し、両腕モードではアーム同士の衝突も含まれます。起動時およびゼロ位置への復帰時には十分なクリアランスを確保し、グリッパと実際の停止距離のための余裕も設けてください。

:::

</section>

</div>
