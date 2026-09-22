---
description: "Seeed Embodied Intelligence Beginner's Course の第10章 — LeRobot とは何か、リーダー／フォロワーアームの役割分担、Robot と Teleoperator のプラグインアーキテクチャ、カメラ／CAN／アームのデータフロー、および DM と RS の設定差分について。"
title: 第10章 - LeRobot と reBot アームのシステムアーキテクチャ
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_10
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第10章 · 理論</span>
    <h2>10. LeRobot と reBot アームのシステムアーキテクチャ</h2>
    <p>
      Seeed Embodied Intelligence Beginner's Course の第10章では、LeRobot とは何か、
      リーダー／フォロワーアームの役割分担、Robot と Teleoperator のプラグインアーキテクチャ、
      カメラ／CAN／アームのデータフロー、そして DM と RS の設定の違いについて学びます。
    </p>
    <div className="hero-actions">
      <a href="#なぜ-lerobot-なのか">Why LeRobot</a>
      <a href="#リーダーとフォロワー">Arms</a>
      <a href="#プラグイン">Plugins</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>10.1 LeRobot とは何か、なぜ必要なのか？</span>
    <span>10.2 リーダーアームとフォロワーアーム</span>
    <span>10.3 プラグインアーキテクチャ</span>
    <span>10.4 データフロー概要：カメラ、CAN、アーム</span>
    <span>10.5 4 つのワークフロー：同一システムの 4 つの使い方</span>
    <span>10.6 DM と RS の設定の違い</span>
  </div>
</section>

<RebotCourseNav />

## 10.1 LeRobot とは何か、なぜ必要なのか？

<section id="why-lerobot" className="section-card">
  <div className="section-title">
    <span>モチベーション</span>
    <h2>10.1 LeRobot とは何か、なぜ必要なのか？</h2>
  </div>

第9章では、模倣学習の概念的なフレームワーク（デモンストレーション、データ、モデル、クローズドループ）を整理しました。しかし実際にこのパイプラインを動かそうとすると、すぐに些細だが具体的な多くの問題に直面します：

- カメラフレームと関節角度のタイムスタンプをどのように揃えるか？
- 何十もの Episode の画像・状態・行動を保存するには、どのようなフォーマットを使うべきか？
- 学習済みモデルを Hugging Face Hub でどのように共有・ダウンロードするか？
- データ収集・学習・推論という 3 つのコードベースが、どのように同じアーム制御ロジックを共有するか？

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-01.png" alt="車輪の再発明" />
</div>

もし皆が毎回「車輪を再発明」していたら、ロボット学習はごく少数の研究室だけの遊びのままでしょう。LeRobot は、これを解決するために Hugging Face が構築したオープンソースフレームワークです。PyTorch で実績のある模倣学習アルゴリズム（ACT、smolVLA、GR00T など）を実装し、標準的なロボットデータセット形式を定義し、テレオペレーションとデータ収集から学習、実機デプロイまでをカバーする完全なコマンドラインツールチェーンを提供します。

</section>

## 10.2 リーダーアームとフォロワーアーム

<section id="leader-follower" className="section-card">
  <div className="section-title">
    <span>アーム</span>
    <h2>10.2 リーダーアームとフォロワーアーム</h2>
  </div>

- 模倣学習の第一歩は「人間がロボットに実演して見せる」ことです。問題はこうです：人間は 750 mm リーチのアームに、どのように精密な把持動作を「教える」のでしょうか？物理的に手で押して動かすのは危険なうえ、滑らかでないデータになってしまいます。
- その答えがマスタースレーブ型テレオペレーションです。構造的に類似した軽量で柔軟なデモ用アームを「入力デバイス」として使い、人間がリーダーを動かし、フォロワーがリアルタイムで追従します。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-02.png" alt="リーダーアームとフォロワーアーム" />
</div>

- **リーダーアーム（leader／教示アーム）：** 人間が手で持って動かすアームです。これは**位置を読むだけ**で、自身の関節角度をリアルタイムに読み取り、コンピュータへ送信します。力を出力する必要がないため、軽量で低コストなサーボ構成を採用できます。
- **フォロワーアーム（follower／実行アーム）：** 実際に作業を行うアームです。リーダーから関節角度を受け取り、高出力の関節モータを駆動して追従し、実際の把持を完了します。

これは、クレーン運転席の操作レバーとクレーンアーム本体の関係に似ています。オペレータは軽いレバー（リーダー）を動かし、実際の重量物の吊り上げは外のアーム（フォロワー）が行います。レバーのあらゆる動きが、クレーンアームの動きへリアルタイムに「翻訳」されます。

</section>

## 10.3 プラグインアーキテクチャ

<section id="plugins" className="section-card">
  <div className="section-title">
    <span>プラグイン</span>
    <h2>10.3 プラグインアーキテクチャ：Robot プラグインと Teleoperator プラグイン</h2>
  </div>

LeRobot の第一の設計原則は、「フレームワークは特定のハードウェアを知らず、インターフェースだけを定義する」ということです。ハードウェアはプラグインとして接続されます。

| | **Robot プラグイン** | **Teleoperator プラグイン** |
| :--- | :--- | :--- |
| 役割 | 実行者：行動を受け取り、状態を報告 | 入力：人間の動作意図を読み取るだけ |
| データ方向 | 双方向（読み取り + 書き込み） | 単方向（読み取り専用） |
| コアメソッド | `get_observation()`, `send_action()` | `get_action()` |
| reBot システムでの対応 | B601 フォロワー（スレーブアーム） | reBot 102 リーダー（マスターアーム） |

一言で区別すると：**Robot は「実行」を担当し、Teleoperator は「読み取り」を担当します。**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-03.png" alt="プラグインアーキテクチャ" />
</div>

</section>

## 10.4 データフロー概要：カメラ、CAN、アーム

<section id="data-flow" className="section-card">
  <div className="section-title">
    <span>データフロー</span>
    <h2>10.4 データフロー概要：カメラ、CAN、アーム</h2>
  </div>

1 回の制御サイクルの中で、どのようなデータが、どのフォーマットで、どの経路を通って流れるのでしょうか？1 台のコンピュータに 3 種類の周辺機器が接続されており、それぞれ 3 本のデータパスに対応します：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-04.png" alt="データフロー概要" />
</div>

</section>

## 10.5 4 つのワークフロー：同一システムの 4 つの使い方

<section id="workflows" className="section-card">
  <div className="section-title">
    <span>ワークフロー</span>
    <h2>10.5 4 つのワークフロー：同一システムの 4 つの使い方</h2>
  </div>

ハードウェアとデータフローを理解したうえで、このステージの後半の章に出てくる 4 つのワークフローを見ると、**同じプラグインと同じ設定を使い、呼び出す LeRobot ツールだけが異なる**ことが分かります：

| ワークフロー | LeRobot ツール |
|---|---|
| テレオペレーション | `lerobot-teleoperate` |
| データ収集 | `lerobot-record` |
| 学習 | `lerobot-train` |
| 推論とデプロイ | `lerobot-record`（ポリシー付き）または推論スクリプト |

- **テレオペレーションとデータ収集は同じハードウェアチェーンを使用**し、違いはデータを記録するかどうかだけです。
- **推論デプロイとデータ収集は構造的に鏡像関係です：** 収集中は行動がリーダー（人間）から来ますが、推論時はモデル（チェックポイント）から来ます。それ以外（カメラの読み取り、State フィードバック、CAN コマンド、安全制限）はすべて同一です。これがプラグインアーキテクチャの利点であり、「意思決定者」を変えてもシステムを変える必要がありません。
- **テレオペレーションと推論デプロイ：** どちらもすべてのハードウェアが動作し、オンラインでアームを制御しますが、「誰が意思決定するか」が異なります。テレオペレーションでは意思決定者は人間であり、推論ではモデルです。

</section>

## 10.6 DM と RS の設定の違い

<section id="dm-vs-rs" className="section-card">
  <div className="section-title">
    <span>設定</span>
    <h2>10.6 DM と RS の設定の違い</h2>
  </div>

|  **比較項目**  |                    **B601-DM**                   |                **B601-RS**               |
| :-------------------: | :----------------------------------------------: | :--------------------------------------: |
|     PC 接続方法      |           Damiao USB2CAN シリアルブリッジ           |   SocketCAN 互換 USB-CAN アダプタ   |
|      デバイス名      |          `/dev/ttyACM*`（シリアルブリッジ）          |   `can0`（SocketCAN ネットワークインターフェース）   |
|     `--robot.type`    |             `seeed_b601_dm_follower`             |         `seeed_b601_rs_follower`         |
|     `--robot.port`    | `/dev/ttyACM0`（実際の列挙結果に依存） | `can0`（実際の列挙結果に依存） |
| `--robot.can_adapter` |                     `damiao`                     |                `socketcan`               |


2 つのバージョンの関係を一言でまとめると、**同じ骨格に、2 組の「心臓と神経」が載っている**ということです。機械構造、関節の命名、上位ソフトウェアのワークフローは同一で、違いはすべてモータと CAN 通信チェーンにあります — そしてここが、すべての LeRobot コマンドの中で最も設定ミスが起こりやすいパラメータでもあります。

これは、後続のテレオペレーション、データ収集、学習、評価のコマンドが両方のアームでまったく同じであることを意味し、対応するアーム名だけを置き換えればよいということです。

</section>

</div>
