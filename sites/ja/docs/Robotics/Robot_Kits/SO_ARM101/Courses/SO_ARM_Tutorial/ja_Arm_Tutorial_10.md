---
description: "SO-ARM Physical AI ビギナーコース第 10 章 — lerobot-calibrate で SO-ARM のリーダーとフォロワーをキャリブレーションし、関節マッピングとキャリブレーションファイルを理解して、最初のマスター・スレーブテレオペレーションを実行します。"
title: 第 10 章 - リーダー・フォロワーのキャリブレーションとテレオペレーション
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - キャリブレーション
  - テレオペレーション
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_10
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 10 章 · 実践</span>
    <h2>10. リーダー・フォロワーのキャリブレーションとテレオペレーション</h2>
    <p>
      lerobot-calibrate で SO-ARM のリーダーとフォロワーをキャリブレーションし、関節マッピングとキャリブレーションファイルの保存場所を理解して、最初のマスター・スレーブテレオペレーションを実行します。
    </p>
    <div className="hero-actions">
      <a href="#why-calibrate">なぜキャリブレーションか</a>
      <a href="#calibrate">キャリブレーション</a>
      <a href="#teleop">テレオペレーション</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ コード不要 · 環境構築不要</span>
    <p className="sensecraft-banner__title">セットアップをスキップして — reBot Arm と LeRobot を 1 つのアプリから実行</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics は、SO-ARM101、reBot Arm 102 + B601-RS および B601-DM 向けの Seeed のノーコードプラットフォームです。アームを接続し、キャリブレーションを行い、デモを収集し、ガイド付きインターフェースから学習と推論を実行できます — Python 環境もターミナルも不要です。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 ステップのガイド付きワークフロー</li>
      <li>✅ クラウド学習 — ローカル GPU 不要</li>
      <li>✅ Windows / macOS クライアント</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">SenseCraft Robotics へ移動 ↗</a>
    <a className="sensecraft-banner__link" href="/ja/sensecraft_robotics/">ソフトウェアガイド</a>
  </div>
</div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>
      アーム作業領域 1 メートル以内の貴重品と無関係な人を片付けてください。本章の実行前に、アームが確実に固定され、電源とケーブルが正しく接続されていることを確認します。
    </p>
  </div>
</div>

## 10.1 アーム全体のキャリブレーションが重要な理由

<section id="why-calibrate" className="section-card">
  <div className="section-title">
    <span>動機</span>
    <h2>10.1 アーム全体のキャリブレーションが重要な理由</h2>
  </div>

第 6 章で ID とボーレートを書き込み、第 7 章でニュートラルを確認しました。**アーム全体のキャリブレーション**は最後のステップです：関節ごとに、サーボの生の位置読み取り値と物理角度のマッピングを学習し、リーダーとフォロワーが物理的に一致する姿勢で同じ値を報告するようにします。

このキャリブレーションには、より深い理由があります：**ある SO-ARM で訓練したニューラルネットが、別の SO-ARM でも動くようになること。** すべてのキャリブレーション済み SO-ARM が「ゼロ度」と「可動範囲の中間」の定義で一致するため、あなたのフォロワーで録ったデータセットは、私のフォロワーでも有効です。

:::danger
電源ルールの再掲：**SO101 スタンダード版**はすべて 5V 電源。**SO101 Pro 版**では、リーダーのキャリブレーション・運転は毎ステップ 5V 電源で、フォロワーは 12V 電源で行ってください。
:::

</section>

## 10.2 フォロワーアームのキャリブレーション

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>キャリブレーション</span>
    <h2>10.2 フォロワーアームのキャリブレーション</h2>
  </div>

6 つのサーボを 3 ピンケーブルと制御ボードで接続し、シリアル権限を付与して実行：

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm  # <- ロボットに一意な名前を付ける
```

手順（下の動画参照）：

1. **中間姿勢**：全関節が可動範囲の中間に来る位置（ほぼ「まっすぐ上」）にアームを動かし、Enter を押します；
2. **全可動範囲**：指示に従い、各関節を順に**全可動域**で動かします。ツールが最小値／最大値をサンプリングします。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
LeRobot リポジトリの更新により、リーダーアームのキャリブレーション中に 5 番サーボからの信号が端末に届かないことがありますが、正常でありそのまま続行できます。
:::

</section>

## 10.3 リーダーアームのキャリブレーション

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>キャリブレーション</span>
    <h2>10.3 リーダーアームのキャリブレーション</h2>
  </div>

同じ 2 ステップ（中間姿勢 → 関節ごとの全可動域）。teleoperator のキーを使います：

```bash
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm  # <- リーダーに一意な名前を付ける
```

:::tip
`Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port. Try running lerobot-find-port` と出たら、`sudo chmod 666 /dev/ttyACM*` で再度権限を付与してください。
:::

### キャリブレーションファイルの保存先（やり直し方）

キャリブレーションファイルは JSON で `~/.cache/huggingface/lerobot/calibration/robots/` と `~/.cache/huggingface/lerobot/calibration/teleoperators/` に保存されます。やり直すには：

- **方法 1 —— ファイルを削除**してクリーンな状態から：

```bash
rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators
```

- **方法 2 —— プロンプトに答える。** キャリブレーション済みのアームで再実行すると：

```text
Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:
```

`c` + Enter で再キャリブレーション、Enter のみで既存データをそのまま使用します。

### キャリブレーションが失敗する場合：`Magnitude ... exceeds 2047`

キャリブレーションやテレオペレーションで `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)` と出たら、サーボのゼロオフセットが異常です。まず電源を切りアームを再起動してもう一度。解消しなければ、先に**中間位置キャリブレーション**を行います — 第 7 章のツール、または Seeed_RoboController のスクリプト：

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable              # （任意）トルクを無効化し手で関節を動かしやすく
python -m src.tools.servo_middle_calibration   # 現在位置を 2048 として書き込み
python -m src.tools.servo_center_test          # 2048 へ動かして検証
```

その後 `lerobot-calibrate` に戻り、アーム全体のキャリブレーションをやり直します。

</section>

## 10.4 関節マッピング：方向・可動域・グリッパ

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>マッピング</span>
    <h2>10.4 関節マッピング：方向・可動域・グリッパ</h2>
  </div>

キャリブレーション後、手動で確認します：

- **方向**：リーダー関節 1 を時計回りに回すと、フォロワー関節 1 も時計回りに動く必要があります。逆方向に動く関節があれば、キャリブレーション時の姿勢が鏡像だった可能性 — その関節をやり直してください；
- **可動域**：リーダーの各関節を両端のリミットまで動かすと、フォロワーも対応するリミットに到達し、プリント部品に押し付けられないことを確認；
- **グリッパ**：リーダーのグリッパハンドルを完全に閉じると — フォロワーのグリッパも完全に閉じる。全開は全開に対応。

:::tip
第 9 章のルール再掲：ここで選んだ `--robot.id` / `--teleop.id` はキャリブレーションファイルに紐づきます。以後のテレオペレーション・録画・評価ではまったく同じ id を使ってください。
:::

</section>

## 10.5 マスター・スレーブテレオペレーションの開始

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>テレオペ</span>
    <h2>10.5 マスター・スレーブテレオペレーションの開始</h2>
  </div>

いよいよ 2 本のアームが 1 つのシステムになる瞬間です。ポート権限を付与して開始：

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

teleoperate コマンドは自動で：

1. 不足しているキャリブレーションを検出し、キャリブレーション手順を開始；
2. ロボットとテレオペレータを接続し、テレオペレーションを開始します。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### テレオペレーション安全ガイド

- 最初にトルクが有効になるときはフォロワーを手で支える — キャリブレーション姿勢へ素早く移動します；
- リーダーは**ゆっくり**動かす。フォロワーは全力トルクで追従します；
- フォロワーのグリッパと挟み点に指を入れない；
- フォロワーが遅れる・震える・関節が応答しない場合：停止し、電源を切り、そのサーボのバスケーブルを確認（サーボの LED が消えていれば手前のケーブルが緩んでいます）。

</section>

## 10.6 制御周波数とレイテンシ

<section id="latency" className="section-card">
  <div className="section-title">
    <span>性能</span>
    <h2>10.6 制御周波数とレイテンシ</h2>
  </div>

### レイテンシはどこから来る？なぜ避けられない？

すべての制御サイクルでリーダーを読み、フォロワーに目標を送り、（後で）カメラも読みます。特に USB カメラは自分のペースでフレームを出します。ループは高速 — 数十ミリ秒 — ですがゼロではないため、速いリーダー動作はフォロワー上でわずかに滑らかに見えます。正常です。

### 制御周波数とは？設定できる？

LeRobot は設定された fps でループを回します（SO-ARM ワークフローのデフォルトは 30。後のデータセットの `--dataset.fps` はこれに一致させる必要があります）。テレオペレーションがカクつく場合：

- USB ハブを避け、アームとカメラを PC に直結；
- 他のプロセスがシリアルポートを掴んでいないか確認；
- `lerobot-find-port` でバスを共有する機器がないか確認。

</section>

## 10.7 ハンズオン演習

<section id="practice" className="section-card">
  <div className="section-title">
    <span>演習</span>
    <h2>10.7 ハンズオン演習</h2>
  </div>

1. リーダーとフォロワーをキャリブレーションし、`~/.cache/huggingface/lerobot/calibration/` の 2 つの JSON ファイルを確認；
2. 5 分間テレオペレーション：グリッパでマウスパッドの四隅に触れ、小さな物体を拾う；
3. 意図的に失敗を体験：誤った `--robot.id` で teleoperate を実行し、エラーを読む — 一度読めば忘れません；
4. `c` プロンプトで再キャリブレーションを練習。

制御チェーンの検証が済んだら、次章で最初のポリシーが学ぶデータを設計します。

</section>

</div>
