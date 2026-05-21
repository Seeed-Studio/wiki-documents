---
description: Reachy Mini の球面ジョイントに関するメンテナンスガイドです。Stewart プラットフォーム上のボールジョイントを清掃し再グリスアップして、スムーズで静かな動作を復元します。
title: 球面ジョイントのメンテナンス
slug: /reachymini_troubleshooting_spherical_joints_maintenance
keywords:
  - 球面ジョイント
  - メンテナンス
  - ボールジョイント
  - Stewart プラットフォーム
  - グリス
  - クリーニング
  - きしみ音
  - 摩擦
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_troubleshooting_spherical_joints_maintenance/
---

# 球面ジョイントのメンテナンス

ロボットをしばらく使用していると、連結ロッドの周りに黒い粉が付着したり、頭部が動くときにきしむような高い音が聞こえることがあります。これは、Stewart プラットフォームの球面ジョイント（ボールジョイント）の摩擦と摩耗が原因です。

このガイドでは、球面ジョイントを清掃して再グリスアップし、スムーズで静かな動作を取り戻す手順を説明します。

## 使用する工具

- PH1 ドライバーとクロスソケット
- 脱脂剤（例：WD-40）
- グリス（例：NSK LR3）
- 柔らかい布
- グリスを塗布するための小さな工具（例：平型のプラスチック製ピンセット）

## 作業前の準備

組立ガイドの手順を逆にたどって、トップシェルを取り外します。

部品を取り違えないよう、以下の手順は**ロッド 1 本ずつ**行うことをおすすめします。

## 手順

1. 1 本のロッドを選び、モーターアームに固定されているナットとネジを外します。

![モーターアームからネジを外す](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/spherical_joint_remove_screw_motor.png)

2. 反対側、首部に接続されているネジを外します。

![首部からネジを外す](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/spherical_joint_remove_screw_neck.png)

3. 脱脂剤と柔らかい布を使って、**球の周りの汚れをすべて取り除きます**。

![布で球を清掃する](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/spherical_joint_clean_sphere_1.png)

![清掃後の球](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/spherical_joint_clean_sphere_2.png)

4. 球の両側にグリスを塗り、表面全体を覆います。

![球にグリスを塗布する](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/spherical_joint_apply_grease.png)

5. グリスが均一に行き渡るように球を何度も回転させ、余分なグリスを拭き取ります。

![グリスをなじませた後の球](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/spherical_joint_spread_grease.png)

6. 手順 1〜2 を逆にたどって連結ロッドを再組立てします。

7. すべてのロッドについて同様に繰り返します。

8. トップシェル、頭部、およびアンテナを再組立てします。