---
description: "SO-ARM101 Sim-to-Real VLA コース第 7 章 —— ロボットアームの準備：LeRobot 環境のインストール、サーボ ID の書き込み（組み立て済み機体はスキップ）、両腕のキャリブレーション、テレオペレーション検証。"
title: 第 7 章 - ロボットアームの準備
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - lerobot-setup-motors
  - キャリブレーション
  - LeRobot
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_7
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 2 · 第 7 章 · Build Your Robot Lab</span>
    <h2>7. ロボットアームの準備</h2>
    <p>
      2 本のアーム：手で動かす leader と追従する follower。環境をインストール
      し、サーボ ID を書き込み（組み立て済みならスキップ）、両腕をキャリブ
      レーションし、初回テレオペレーションで検証する。
    </p>
    <div className="hero-actions">
      <a href="#arms">2 本のアーム</a>
      <a href="#env">環境</a>
      <a href="#ids">サーボ ID</a>
      <a href="#calibrate">キャリブレーション</a>
      <a href="#teleop">検証</a>
    </div>
  </div>
</section>

## 7.1 2 本のアーム

<section id="arms" className="section-card">
  <div className="section-title">
    <span>リーダーとフォロワー</span>
    <h2>7.1 2 本のアーム</h2>
  </div>

**リーダーアーム** —— 教育・研究向けの低コストなオープンソースアーム。
完成品と DIY キットの両方があります。6 関節を 7.4 V 系 STS3215 サーボ
（5 V 電源）で駆動し、関節角度を読み取るだけです。

**フォロワーアーム** —— 実行するアーム。Pro キットでは 12 V サーボを
使用します。テレオペレーション中はリーダーをミラーし、後で学習済み VLA
ポリシーを実行します。

:::caution 電源を混在させない
リーダーは 5 V、フォロワーは 12 V です。逆に接続するとサーボが故障する
おそれがあります。ケーブルを変更する前に必ず両腕の電源を切ってください。
:::

完全な組み立て手順はビギナーコースにあります：
[ビギナー第 6 章 —— モーターの設定とアームの組み立て](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_6/)
は 3D プリント、モーター計画、ID 書き込み、段階的な組み立てをカバーし、
[ビギナー第 7 章 —— サーボデバッグ](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_7/)
は不調なサーボ向けの Feetech デバッグツールを扱います。

</section>

## 7.2 LeRobot 環境のインストール

<section id="env" className="section-card">
  <div className="section-title">
    <span>1 回のインストール</span>
    <h2>7.2 LeRobot 環境のインストール</h2>
  </div>

キャリブレーションの前に、以降の全章で使う環境をインストールします。まず
`uv` を入れ、次にワークスペースを作成します：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
uv --version

mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Seeed LeRobot フォーク（SO101 リーダー / フォロワー対応）をダウンロード
git clone https://github.com/Seeed-Projects/lerobot.git

# 仮想環境を作成（Python 3.12）
uv venv --python 3.12 .venv
source .venv/bin/activate

uv pip install --upgrade pip
uv pip install -e ./lerobot

# Feetech サーボ SDK —— SO-01 バスに必須
uv pip install feetech-servo-sdk
```

:::note 環境への再入り
実行環境の構築は 1 回だけです。以降の章では次のコマンドで再入できる前提
です：`cd ~/rebot_lerobot && source .venv/bin/activate`
:::

</section>

## 7.3 キットか完成品か？

<section id="ids" className="section-card">
  <div className="section-title">
    <span>完成品なら ID スキップ</span>
    <h2>7.3 キットか完成品か？</h2>
  </div>

| 状況 | 組み立て | サーボ ID 書き込み | キャリブレーション |
| --- | --- | --- | --- |
| 3D プリント / キット版 | 必要 | **必要** | 必要 |
| 組み立て済み（完成品） | 済み | **スキップ** —— 工場で書き込み済み | 必要 |

**組み立て済み機体を買った場合は [7.5 両腕のキャリブレーション](#calibrate)
へ直接進んでください。**

組み立ての前にすべてのサーボにラベルを貼ります——フォロワーは **F1–F6**、
リーダーは **L1–L6**。関節番号はベースからグリッパーへ：1 = 肩旋回、
2 = 肩上下、3 = 肘、4 = 手首俯仰、5 = 手首回転、6 = グリッパー。
SO-ARM101 リーダーの関節 1–3 は SO-ARM100 と減速比が異なります——取り付け
前に[ビギナー 6.2 の減速比表](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_6/)を確認してください。

:::caution 一度に 1 サーボだけ
6 個のサーボは 1 本のシリアルバスを共有します。ID を書き込むときは制御基板
にその 1 サーボだけを接続してください。重複した ID は同じ ID を持つすべての
サーボに書き込まれてしまいます。
:::

</section>

## 7.4 サーボ ID の書き込み（キット版のみ）

<section id="setup-motors" className="section-card">
  <div className="section-title">
    <span>lerobot-setup-motors</span>
    <h2>7.4 サーボ ID の書き込み（キット版のみ）</h2>
  </div>

まず制御基板のポートを探します：

```bash
lerobot-find-port
```

プロンプトに従って基板を抜き差しすると、表示されたポートが対象です
（通常 `/dev/ttyACM0`）。

関節ごとに ID を書き込みます：

```bash
lerobot-setup-motors \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0
```

ツールが接続すべき関節名を表示します——その 1 サーボだけを配線して Enter
を押すと、ID とボーレートが書き込まれます：

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

フォロワーの 6 関節すべてで繰り返し、次にリーダーにも同じツールを実行
します：

```bash
lerobot-setup-motors \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1
```

シリアルポートの権限を設定します（再起動後も有効）：

```bash
sudo usermod -aG dialout $USER   # 一度ログアウトして再ログイン
sudo chmod 666 /dev/ttyACM*
```

Ubuntu では `brltty` サービスが USB シリアルアダプタを占有することが
あります。ポートが数秒後に消える場合は `sudo apt remove brltty` で
削除してください。

</section>

## 7.5 両腕のキャリブレーション

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>基準姿勢</span>
    <h2>7.5 両腕のキャリブレーション</h2>
  </div>

キャリブレーションはキット版・組み立て済み版の**双方**に必要です。LeRobot
は各関節の中央位置と 2 つの機械的端点を学習します。キャリブレーション
ファイルは `~/.cache/huggingface/lerobot/calibration/` にアーム ID 付きで
保存されます——1 つの ID は同じ物理アームにのみ再利用してください。

両方のポートを見つけ、以降の全章で使う変数をエクスポートします：

```bash
export TELEOP_PORT=/dev/ttyACM0
export TELEOP_ID=so101_leader
export ROBOT_PORT=/dev/ttyACM1
export ROBOT_ID=so101_follower
```

リーダーをキャリブレーション：

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

1. すべての関節を**可動範囲の中央**に動かします。手首回転軸は特に慎重に
   中央に——端点から始めると、スキャン中にエンコーダがオーバーフローする
   おそれがあります；
2. Enter を押し、1 関節ずつゆっくり両端点まで掃引します。繰り返しは問題
   ありません。極値は上書きされます；
3. Enter で保存します。

フォロワーも同様です：

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID
```

フォロワーはアームの本当の機械的端点で止めてください——ケーブルや机では
なく。挟まれたケーブルは誤った限界を記録し、可動範囲を圧縮します。

:::caution キャリブレーション不良の兆候
フォロワーがリーダーの動きの半分しか追従しない、関節が端点に飛ぶ場合は
スキャン範囲が短すぎます。そのアームを再キャリブレーションし、全関節を
完全な可動範囲で動かしてください。
:::

NVIDIA workshop のツール一式を使う場合、フォロワーの品質を検証できます：

```bash
export ROBOT_PORT ROBOT_ID
python ~/Sim-to-Real-SO-101-Workshop/docker/real/scripts/so101_check_calibration.py
```

良いキャリブレーションは次の行で終わります：

```text
Overall: ✓ PASS — calibration looks good.
```

</section>

## 7.6 ロボットアームの検証

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>初回テレオペレーション</span>
    <h2>7.6 ロボットアームの検証</h2>
  </div>

両腕を似た姿勢にしてから実行します：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

リーダーをゆっくり動かします。フォロワーは各関節を同じ方向に追従し、同じ
端点まで到達しなければなりません。`Ctrl+C` で停止します。

このステップは、コースの他の場所で使う関節の順序も確認します：
`shoulder_pan`、`shoulder_lift`、`elbow_flex`、`wrist_flex`、`wrist_roll`、
`gripper`。1 関節でも逆方向に動くなら再キャリブレーションしてください——
ソフトウェアで補正してはいけません。

最初の実行中は、フォロワーの電源スイッチに片手を添えておいてください。

次の章：[第 8 章 —— 作業環境の構築](ja_Sim2Real_VLA_08.md)。

</section>

</div>