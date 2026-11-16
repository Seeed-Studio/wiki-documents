---
description: "SO-ARM Physical AI ビギナーコース第 9 章 — LeRobot とは何か、リーダー・フォロワーの役割分担、Robot と Teleoperator のプラグインアーキテクチャ、カメラ・シリアルバス・アームのデータフロー、SO-ARM の設定要点。"
title: 第 9 章 - LeRobot と SO-ARM のシステムアーキテクチャ
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - テレオペレーション
  - リーダーアーム
  - フォロワーアーム
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_9
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 9 章 · 理論</span>
    <h2>9. LeRobot と SO-ARM のシステムアーキテクチャ</h2>
    <p>
      LeRobot とは何か、リーダー・フォロワーの役割分担、Robot と Teleoperator のプラグインアーキテクチャ、カメラ・シリアルバス・アームのデータフロー、SO-ARM の設定要点を学びます。
    </p>
    <div className="hero-actions">
      <a href="#why-lerobot">なぜ LeRobot か</a>
      <a href="#leader-follower">アーム</a>
      <a href="#config">設定</a>
    </div>
  </div>
</section>

## 9.1 LeRobot とは、なぜ必要か？

<section id="why-lerobot" className="section-card">
  <div className="section-title">
    <span>動機</span>
    <h2>9.1 LeRobot とは、なぜ必要か？</h2>
  </div>

第 8 章で模倣学習の概念フレーム（デモ・データ・モデル・閉ループ）を確立しました。しかしこのパイプラインを実際に動かすには、一気に大量の細かい問題に直面します：

- カメラフレームと関節角のタイムスタンプをどう揃えるか？
- 何十エピソードの画像・状態・アクションをどういう形式で保存するか？
- 訓練済みモデルを Hugging Face Hub でどう共有・ダウンロードするか？
- データ収集・訓練・推論の 3 つのコードベースが、どう同じアーム制御ロジックを共有するか？

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-01.png" alt="車輪の再発明" />
</div>

誰もが車輪を再発明していたら、ロボット学習は一部の研究所の遊びのままです。LeRobot は Hugging Face がこれを解決するために作ったオープンソースフレームワークです — 実証済みの模倣学習アルゴリズム（ACT、SmolVLA、GR00T など）を PyTorch で実装し、標準のロボットデータセット形式を定義し、テレオペレーション・データ収集から訓練・実機展開までの完全なコマンドラインツールチェーンを提供します。SO-ARM 自体、LeRobot のリファレンスとなる低コストハードウェアとして共に生まれました — 両者は互いのために設計されています。

</section>

## 9.2 リーダーアームとフォロワーアーム

<section id="leader-follower" className="section-card">
  <div className="section-title">
    <span>アーム</span>
    <h2>9.2 リーダーアームとフォロワーアーム</h2>
  </div>

- 模倣学習の第一歩は「人間がロボットに教示すること」。問題は：人間はどうやってアームに精密な把持動作を「教える」のか？ 手で直接誘導するのは危険ですし、データも滑らかになりません；
- 答えはマスター・スレーブ型テレオペレーションです：構造が同じで軽く自由に動く教示アームを「入力デバイス」として使い — 人がリーダーを動かすと、フォロワーがリアルタイムに追従します。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-02.png" alt="リーダーアームとフォロワーアーム" />
</div>

- **リーダーアーム（leader / 教示アーム）**：人が持って動かすアーム。**位置を読むだけ** — 自身の関節角をリアルタイムに読み PC へ送ります。力を出す必要がないため、同じ STS3215 サーボを軽負荷で使え、人が動かす関節には小さい減速比を使っています；
- **フォロワーアーム（follower / 実行アーム）**：実際に作業するアーム。リーダーからの関節角を受け取り、より高トルクで全電圧駆動のサーボを動かして追従し、実際の把持を行います。

これはクレーン運転席の操作レバーとクレーンアームの関係のようなものです。操作員は軽いレバー（リーダー）を動かし、重い作業は外のアーム（フォロワー）が行います。レバーの動きがすべてリアルタイムにアームの動きへ「翻訳」されます。

SO-ARM キットは 1 箱にこの 2 本が入っています — 天然の教材である理由です。

</section>

## 9.3 プラグインアーキテクチャ：Robot プラグインと Teleoperator プラグイン

<section id="plugins" className="section-card">
  <div className="section-title">
    <span>プラグイン</span>
    <h2>9.3 プラグインアーキテクチャ：Robot プラグインと Teleoperator プラグイン</h2>
  </div>

LeRobot の第一設計原則：フレームワークは特定ハードウェアを知らず、インターフェースだけを定義します。ハードウェアはプラグインとして接続されます。

| | **Robot プラグイン** | **Teleoperator プラグイン** |
| :--- | :--- | :--- |
| 役割 | 実行者：アクションを受け取り状態を報告 | 入力：人の動作意図だけを読む |
| データ方向 | 双方向（読み + 書き） | 単方向（読み取り専用） |
| コアメソッド | `get_observation()`、`send_action()` | `get_action()` |
| SO-ARM システムでの役割 | `so101_follower`（白いフォロワー） | `so101_leader`（黒いリーダー） |

一言で区別すると：**Robot は「やる」を、Teleoperator は「読む」を担う。**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-03.png" alt="プラグインアーキテクチャ" />
</div>

</section>

## 9.4 データフロー概要：カメラ、シリアルバス、アーム

<section id="data-flow" className="section-card">
  <div className="section-title">
    <span>データフロー</span>
    <h2>9.4 データフロー概要：カメラ、シリアルバス、アーム</h2>
  </div>

1 制御サイクルで、どんなデータがどんな形式でどの経路を流れるか？1 台の PC が 3 種類の周辺機器に接続し、3 本のデータ経路に対応します：

1. **カメラ → PC**：USB 映像フレーム（前面 + 側面）；
2. **リーダー → PC**：シリアルバス上の関節位置（`/dev/ttyACM1`） — 人の意図；
3. **PC → フォロワー**：シリアルバス上の目標関節位置（`/dev/ttyACM0`） — 同じバス上でフォロワー自身の状態も読み戻します。

PC が中心にいます：カメラ + リーダーを読み、フォロワーに書き、すべてにタイムスタンプを打ち、（録画時には）同じ瞬間に揃えた観測・状態・アクションを 1 行ずつデータセットに書きます。

</section>

## 9.5 4 つのワークフロー：同じシステムの 4 つの使い方

<section id="workflows" className="section-card">
  <div className="section-title">
    <span>ワークフロー</span>
    <h2>9.5 4 つのワークフロー：同じシステムの 4 つの使い方</h2>
  </div>

ハードウェアとデータフローを理解した上で、この後の 4 つのワークフローを見ると、**同じプラグインと同じ設定を使い、呼ぶ LeRobot ツールだけが違う**ことに気づきます：

| ワークフロー | LeRobot ツール |
|---|---|
| テレオペレーション | `lerobot-teleoperate` |
| データ収集 | `lerobot-record` |
| 訓練 | `lerobot-train` |
| 推論と展開 | `lerobot-record`（ポリシー付き）または `lerobot-rollout` |

- **テレオペレーションとデータ収集は同じハードウェアチェーンを使う** — 違いはデータを録るかだけです；
- **推論展開とデータ収集は鏡像構造**：収集時はアクションがリーダー（人）から、推論時はモデル（チェックポイント）から来ます。それ以外（カメラ読み取り、状態フィードバック、サーボコマンド、安全制限）は同一です。これがプラグインアーキテクチャの利点 — 意思決定者を変えてもシステムを変える必要がありません；
- **テレオペレーションと推論展開**：どちらも全ハードウェアを稼働させオンラインでアームを制御し、違いは「誰が意思決定するか」 — テレオペレーションでは人、推論ではモデルです。

</section>

## 9.6 SO-ARM 設定の要点

<section id="config" className="section-card">
  <div className="section-title">
    <span>設定</span>
    <h2>9.6 SO-ARM 設定の要点</h2>
  </div>

| **項目** | **フォロワーアーム** | **リーダーアーム** |
| :--- | :--- | :--- |
| LeRobot タイプ | `--robot.type=so101_follower` | `--teleop.type=so101_leader` |
| 典型的ポート | `/dev/ttyACM0` | `/dev/ttyACM1` |
| ポート設定キー | `--robot.port` | `--teleop.port` |
| ID キー | `--robot.id` | `--teleop.id` |
| 電源（スタンダードキット） | 5V | 5V |
| 電源（Pro キット） | 12V | 5V |

よくあるミスを防ぐ注意点：

- **SO100 と SO101 はコード共有。** `so101_leader` と `so100_leader` は同じ実装です。SO100 ユーザーは同じコマンドを使えます；
- **`id` はキャリブレーションファイルに紐づく。** 同じ物理アームをテレオペレーション・録画・評価で使う際は、同じ `--robot.id` / `--teleop.id` を使うこと — でないと LeRobot は存在しないキャリブレーションファイルを探します；
- **ポート順序は挿入順に従う**（Linux・Jetson）：先に挿したボード = `ttyACM0`、次 = `ttyACM1`。毎回 `lerobot-find-port` で確認しましょう。

システムを一言でまとめると：**同じ骨格、2 つの役割。** リーダーは読み、フォロワーは書き、カメラは見て、PC がタイムスタンプですべてを縫い合わせます。以降のテレオペレーション・収集・訓練・評価コマンドはまさにこの設定を再利用します。

</section>

</div>
