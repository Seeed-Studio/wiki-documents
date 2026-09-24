---
description: "Seeed Embodied Intelligence 初級コース第11章 — 環境構築、フォロワーアームとリーダーアームのキャリブレーション、関節マッピング、遠隔操作の安全性、マスタースレーブ遠隔操作の開始、制御周波数とレイテンシ、ハンズオン演習。"
title: 第11章 - リーダーとフォロワーのキャリブレーションと遠隔操作
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Calibration
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_11
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第11章 · 実践</span>
    <h2>11. リーダーとフォロワーのキャリブレーションと遠隔操作</h2>
    <p>
      Seeed Embodied Intelligence 初級コース第11章 — 環境構築、フォロワーアームとリーダーアームのキャリブレーション、
      関節マッピング、遠隔操作の安全性、マスタースレーブ遠隔操作の開始、制御周波数とレイテンシ、
      そしてハンズオン演習を行います。
    </p>
    <div className="hero-actions">
      <a href="#environment">環境構築</a>
      <a href="#calibrate-follower">キャリブレーション</a>
      <a href="#teleoperate">遠隔操作</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>11.1 アームの開封、配線、取り付け</span>
    <span>11.2 環境構築</span>
    <span>11.3 フォロワーアームのキャリブレーション</span>
    <span>11.4 リーダーアームのキャリブレーション</span>
    <span>11.5 関節マッピング：方向、可動範囲、グリッパー</span>
    <span>11.6 遠隔操作の安全ガイドライン</span>
    <span>11.7 マスタースレーブ遠隔操作の開始</span>
    <span>11.8 制御周波数とレイテンシ</span>
    <span>11.9 ハンズオン演習</span>
  </div>
</section>

<RebotCourseNav />

## 11.1 アームの開封、配線、取り付け

<section id="unboxing" className="section-card">
  <div className="section-title">
    <span>セットアップ</span>
    <h2>11.1 アームの開封、配線、取り付け</h2>
  </div>

- **reBot DM**
<iframe width="600" height="400" src="https://www.youtube.com/embed/llSa6qn3yrY?si=D3ZUoBbih8_qtcFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
- **reBot RS**
<iframe width="600" height="400" src="https://www.youtube.com/embed/llSa6qn3yrY?si=Ejc4Q97tFzURuh1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</section>

## 11.2 環境構築

<section id="environment" className="section-card">
  <div className="section-title">
    <span>環境</span>
    <h2>11.2 環境構築</h2>
  </div>

ステージ2ですでに仮想環境を作成していることを前提として、次に行うのはリポジトリをクローンし、作成済みのconda環境に環境をインストールすることだけです。仮想マシンやWSLは使用しないでください。Ubuntu 22.04 を直接インストールするのが最適です。

:::tip
以降のすべての手順は、仮想環境および `lerobot` 環境内で実行する必要があることを忘れないでください。
:::

**ステップ 1：** Seeed LeRobot リポジトリをクローンする

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

**ステップ 2：** 仮想環境に入って、LeRobot と reBot プラグインをインストールする

```bash
conda create -y -n rebot_arm python=3.12
pip install -e ./lerobot
```

```bash
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

**ステップ 3：** ffmpeg（動画コーデックの依存関係）をインストールする

```bash
conda install ffmpeg -c conda-forge
```

**バージョンに関する注意：**

- デフォルトでは、ffmpeg 7.X がインストールされます（libsvtav1 エンコーダーをサポート）。
- バージョン互換性の問題が発生した場合は、ffmpeg 7.1.1 を指定できます：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- `ffmpeg -encoders | grep svtav1` によって、libsvtav1 エンコーダーがサポートされているか確認できます。

**ステップ 4：** NVIDIA Jetson デバイス向けの特別な設定（通常のPCではこのステップをスキップ）

Jetson JetPack 6.0 以降のデバイス向け（このステップの前に、Jetson 対応の PyTorch-gpu と Torchvision をインストールしておいてください）：

```bash
# Install OpenCV and other dependencies via conda (Jetson JetPack 6.0+ only)
conda install -y -c conda-forge "opencv>=4.10.0.84"
# Uninstall OpenCV
conda remove opencv
# Install specific OpenCV version via pip3
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
# This version must be compatible with Torchvision
pip3 install numpy==1.26.0
```

**ステップ 5：** PyTorch GPU が利用可能か確認する

```bash
python3

import torch
print(torch.cuda.is_available())   # Should output True
```

終了するには `exit()` と入力します。

:::warning
もし `False` と出力された場合は、CPU 版をインストールしているため、PyTorch を再インストールする必要があります。
:::

</section>

## 11.3 フォロワーアームのキャリブレーション

<section id="calibrate-follower" className="section-card">
  <div className="section-title">
    <span>キャリブレーション</span>
    <h2>11.3 フォロワーアームのキャリブレーション</h2>
  </div>

- 次に、キャリブレーションを行う前に、reBot B601-RS ロボットが電源およびデータケーブルに接続されていることを確認してください。
- リーダーとフォロワーのキャリブレーションファイルは、それぞれ `~/.cache/huggingface/lerobot/calibration/robots` と `~/.cache/huggingface/lerobot/calibration/teleoperators` に保存されます。再キャリブレーションするには、対応するファイルを削除するか、単にキャリブレーションコマンドを実行してください。ターミナルには、<kbd>C</kbd> を押して再キャリブレーション、<kbd>Enter</kbd> を押して既存のキャリブレーションファイルを使用するように表示されます。
- フォロワーに接続できない場合は、ステージ2を参照し、motorbridge インターフェースを使用してアームが正常に動作しているかテストしてください。
- 指示に従って、上図に示すゼロ位置までフォロワーアームを動かしてください。同じPC上では、アームは組み立て後に一度だけキャリブレーションすれば十分です。以下にキャリブレーションコマンドを示します。画像のゼロ位置（グリッパーは完全に閉じた状態）を参照してください。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-01.png" alt="フォロワーのゼロ位置" />
</div>

**DM フォロワーのキャリブレーション：**

```bash
sudo chmod 666 /dev/ttyACM*
cd lerobot
lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

**RS フォロワーのキャリブレーション：**

システムにまだ PCAN ドライバがインストールされていない場合は、こちらのページを参照してください：[PCAN driver installed](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow)

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
cd lerobot

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

（オプション）Jetson（Jetpack 6.x）を使用している場合は、次のコマンドを実行して Jetson の CAN ポート番号を確認します：

```bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

出力例：

```text
can2  # Could also be can0, can1, or other CAN number
```

以降のすべてのフォロワー用コマンドで使用するポート番号は、ここでの出力と一致させる必要があります。

:::warning
Jetson に [PCAN driver installed](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow) がない場合、通信は常に異常になります。
:::

</section>

## 11.4 リーダーアームのキャリブレーション

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>キャリブレーション</span>
    <h2>11.4 リーダーアームのキャリブレーション</h2>
  </div>

**reBot 102 リーダーのキャリブレーションに関する注意事項：**

- キャリブレーションを開始すると、reBot Arm 102 上の各サーボの現在位置は**ゼロにリセット**されます。
- `joint_ranges`（関節リミット）は、キャリブレーションデータではなく、設定ファイル `config_rebot_arm_102_leader.py` から取得されます。
- ある関節が常にリミット付近で引っかかっているように見える場合は、まず `joint_ranges` の設定を確認してください。
- 関節の回転方向は設定ファイルで定義されています。方向が一致しない場合は、再キャリブレーションではなく設定ファイルを修正してください。
- reBot 102 リーダーは USB–UART モジュールを使用しており、通常は `/dev/ttyUSB*` にマッピングされます。
- 実際のポート番号を確認するには、`ls /dev/ttyUSB*` を使用します。

初回接続時に、シリアルポート `/dev/ttyACM0` が見つからないというエラーが出る場合があります。これは `brltty` がポートを占有しているためです。次の手順に従ってください：

```bash
sudo dmesg | grep ttyUSB   # See 'disconnected' on the last line
sudo apt remove brltty     # Remove brltty
```

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-02.png" alt="リーダーアームのシリアルポート" />
</div>

指示に従って、上図に示すゼロ位置までリーダーアームを動かしてください：

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

そのまま静止させ、キャリブレーションが完了するまで <kbd>Enter</kbd> を押し続けてください。

</section>

## 11.5 関節マッピング：方向、可動範囲、グリッパー

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>マッピング</span>
    <h2>11.5 関節マッピング：方向、可動範囲、グリッパー</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-03.png" alt="関節マッピング" />
</div>

</section>

## 11.6 遠隔操作の安全ガイドライン

<section id="safety" className="section-card">
  <div className="section-title">
    <span>安全</span>
    <h2>11.6 遠隔操作の安全ガイドライン</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-04.png" alt="遠隔操作の安全ガイドライン" />
</div>

</section>

## 11.7 マスタースレーブ遠隔操作の開始

<section id="teleoperate" className="section-card">
  <div className="section-title">
    <span>遠隔操作</span>
    <h2>11.7 マスタースレーブ遠隔操作の開始</h2>
  </div>

:::danger すべてのアーム動作シナリオに同じ安全ルールが適用されます！
遠隔操作中に、電源ケーブルが緩んだり、電源接続が不安定になったり、信号ケーブルが外れたりした場合は、まずコードを停止し、アームを初期のゼロ位置に戻してから、電源を再接続してプログラムを再起動してください — データ破損によってアームが制御不能になり危険な状態になるのを防ぐためです。
:::

**DM テレオペレーション** — まずシリアルポートへの権限を付与します：

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo chmod 666 /dev/ttyACM*
```

テレオペレーションを実行します：

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

**RS テレオペレーション** — まずシリアルポートへの権限を付与します：

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

テレオペレーションを実行します：

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

</section>

## 11.8 制御周波数とレイテンシ

<section id="frequency-latency" className="section-card">
  <div className="section-title">
    <span>パフォーマンス</span>
    <h2>11.8 制御周波数とレイテンシ</h2>
  </div>

遠隔操作が「応答性が良い」と感じられるかどうかは、2 つの要素に依存します：フォワーディング回路が 1 秒間に何ループ実行されるか（周波数）、そして手の動きからアームまでにどれだけ遅延があるか（レイテンシ）です。

### レイテンシはどこから来るのか？なぜ避けられないのか？

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-05.png" alt="Latency sources" />
</div>

### 制御周波数とは何か？設定は可能か？

テレオペレーションループのデフォルトは **60 Hz** です — 「リーダーを読み取る → マッピング → CAN を送信 → 応答を読み戻す」というループを 1 秒間に 60 回完了し、各ループには 16.7 ms の時間枠があります。この周波数は、テレオペレーション設定の `fps` パラメータで調整できますが、次の 2 点に注意してください：

- **上限はソフトウェアではなくハードウェア回路の時間で決まります。** 上記のチェーン自体が 1 ループあたり 10 ミリ秒以上かかるため、このハードウェアでの実用的な上限はおよそ 60〜100 Hz です。これ以上高く設定しても意味はありません。実際の周波数は上がらず、周期タイムアウトの警告が表示されるだけです。
- **60 Hz で既に必要十分です。** 人間の意識的な最速の動きは 5〜10 Hz 程度に過ぎません。60 Hz は、あらゆる細かな動きに対して 10 枚のスナップショットを撮るようなものであり、サンプリング密度は手の帯域幅を完全にカバーしています。

</section>

## 11.9 実践演習

<section id="practice" className="section-card">
  <div className="section-title">
    <span>実践</span>
    <h2>11.9 実践演習：把持・搬送・配置</h2>
  </div>

遠隔操作は安定していますが、「動かせる」ことと「作業できる」ことは別であり、意図的な練習が必要です。第 13 章のデータ品質は、現在のあなたの熟練度に依存します。次の 3 段階で練習しましょう：

- **練習 1：空荷での物体搬送（感覚に慣れる）。** 作業空間に軽量のブロックをいくつか置きます。練習内容：ターゲット上方へ移動 → 降下 → グリッパーを閉じる → 持ち上げる。目標：衝突や途中落下なしで 10 回連続成功し、各試行がためらいなくスムーズに流れること。
- **練習 2：搬送と配置（タスクチェーン全体）。** 「把持 → 搬送 → 指定された容器への配置」という一連のワークフローを完了します。目標：開始姿勢と終了姿勢が毎回ほぼ同一となる 10 回連続の反復。
- **合格基準：** 無理を感じることなく、一定のリズムで 20 回連続してフルタスクを完了できること — そうなれば次の章に進む準備が整っています。

</section>

</div>
