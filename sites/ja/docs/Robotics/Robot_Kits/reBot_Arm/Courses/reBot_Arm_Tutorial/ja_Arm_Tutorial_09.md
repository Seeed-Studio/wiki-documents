---
description: Seeed Physical AI Beginner's Course の第9章 — ロボット学習と模倣学習の基礎：なぜアームに学習が必要なのか、ルールベース制御と学習ベース制御の違い、観測／状態／行動、アクションチャンク、データ分布、そして学習・推論・評価という3つのフェーズ。
title: 第9章 - ロボット学習と模倣学習の基礎
hide_title: true
keywords:
  - reBot
  - Imitation Learning
  - Behavioral Cloning
  - Robot Learning
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_9
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ3 · 第9章 · 理論と実践</span>
    <h2>9. ロボット学習と模倣学習の基礎</h2>
    <p>
      Seeed Physical AI Beginner's Course の第9章では、なぜアームに学習が必要なのか、
      ルールベース制御と学習ベース制御の違い、観測／状態／行動、アクションチャンク、データ
      分布、そして学習・推論・評価という3つのフェーズについて扱います。
    </p>
    <div className="hero-actions">
      <a href="#なぜ学習が必要か">Why learning</a>
      <a href="#データ分布">Data distribution</a>
      <a href="#パイプライン">Pipeline</a>
    </div>
  </div>
</section>

### このステージで必要なハードウェア

このステージで用意するもの。全ステージの一覧は[第 3 章](/ja/rebot_physical_ai_course_chapter_3/)にあります。

**メイン制御ユニット**

| 項目 | 購入 | 数量 |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 🛒 | 1 |

デスクトップまたはノート PC も必要です:Ubuntu 22.04、GTX 4080 以上(VRAM 12GB 以上)、メモリ 16GB 以上。

**このステージ**

| 項目 | 購入 | 数量 |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html) | 🛒 | 1 |
| [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html) | 🛒 | 1 |
| [720P 単眼リストカメラ](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 🛒 | 2 |
| [リストカメラマウント](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/b601-camera-mounts/UVC32_mount.step) | 🛒 | 1 |
| [Hikvision カメラ天吊りマウント](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 🛒 | 1 |


## 9.1 なぜロボットアームに学習が必要なのか？

<section id="why-learning" className="section-card">
  <div className="section-title">
    <span>動機づけ</span>
    <h2>9.1 なぜロボットアームに学習が必要なのか？</h2>
  </div>

ステージ2までで、Python SDK を使ってロボットアームを制御できるようになりました：関節角度の読み取り、目標位置の送信、グリッパの開閉などです。そうなると、「テーブル上のブロックを自動で拾うプログラムを書けばいいだけでは？」と考えるのは自然な流れです。

そこで、そのようなプログラムを書きます。研究室での最初のデモでは、プログラムはうまく動作しました。しかし翌日になると状況が変わり——その変化に対応しようとすると、プログラムにはどんどん「if」文が追加されていき、最終的には誰もメンテナンスできない巨大な特殊ケース集になってしまいます。

**これが従来型のプログラム制御が抱える根本的なジレンマです：現実世界は連続的に変化するのに対し、if-else は離散的である。** 世界のあらゆる状態を列挙することはできません。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-01.png" alt="従来型プログラム制御のジレンマ" />
</div>

**このような形でロボットアームにスキルを獲得させることこそが、ロボット学習が解決しようとしている課題です。** そして本ステージで扱う模倣学習は、実機への適用が最も成熟していて容易なアプローチです。

</section>

## 9.2 ルールベース制御 vs 学習ベース制御

<section id="control-paradigms" className="section-card">
  <div className="section-title">
    <span>パラダイム</span>
    <h2>9.2 ルールベース制御 vs 学習ベース制御</h2>
  </div>

先へ進む前に、この2つの制御アプローチを並べて、はっきりと見比べてみましょう。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-02.png" alt="ルールベース制御と学習ベース制御の比較" />
</div>

:::note
本コースのステージ3と4は、「学習ベース制御」の道筋に沿っています。ただし覚えておいてください：将来どれだけ学習システムが発達しても、関節リミットや安全な速度制約など、多くのルールは依然として残ります。学習とルールは補完関係にあります。
:::

</section>

## 9.3 模倣学習と Behavioral Cloning

<section id="imitation-learning" className="section-card">
  <div className="section-title">
    <span>模倣</span>
    <h2>9.3 模倣学習と Behavioral Cloning</h2>
  </div>

### 模倣学習とは

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-03.png" alt="模倣学習" />
</div>

### Behavioral Cloning とは

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-04.png" alt="Behavioral Cloning" />
</div>

</section>

## 9.4 観測・状態・行動

<section id="observation-state-action" className="section-card">
  <div className="section-title">
    <span>データの概念</span>
    <h2>9.4 観測・状態・行動</h2>
  </div>

模倣学習におけるすべてのデータは、3つの概念に分類できます。この3つの用語は、この先のすべての章で繰り返し登場するので、ここで正確な直感を身につけておきましょう。

- **観測 (Observation)：** ロボットが「見ている」世界。
- **状態 (State)：** ロボット自身の「現在の状態」。
- **行動 (Action)：** ロボットが「これから行うこと」。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-05.png" alt="観測・状態・行動" />
</div>

</section>

## 9.5 単一ステップ行動 vs アクションチャンク

<section id="action-chunks" className="section-card">
  <div className="section-title">
    <span>行動</span>
    <h2>9.5 単一ステップ行動 vs アクションチャンク</h2>
  </div>

- **単一ステップ行動：** 1フレームごとに1回の意思決定を行う。
- **アクションチャンク：** 一度に一連の行動シーケンスを予測する。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-06.png" alt="単一ステップ行動とアクションチャンクの比較" />
</div>

もちろん、アクションチャンクは長ければ長いほど良いというわけではありません。先のことを予測しすぎると、実行の途中で環境が変化してしまう可能性があります（例：物体がぶつかって動くなど）。その間もアームは「古くなった」行動を実行し続けてしまいます。実際のシステムでは折衷案が取られます：短い区間だけオープンループで実行し、その後もう一度観測して再度予測します。

</section>

## 9.6 データ分布とモデルの汎化

<section id="data-distribution" className="section-card">
  <div className="section-title">
    <span>分布</span>
    <h2>9.6 データ分布とモデルの汎化</h2>
  </div>

この節は本章で最も重要であり、初心者が最も見落としやすい部分ですが、実運用での成否を左右します。まずは次の一文を覚えてください：

**模倣学習モデルは、データに含まれていることしか学べず、データがカバーしている範囲の中でしか機能しない。**

- 学習中にモデルが見たすべての（観測, 行動）の組が **データ分布** を構成します。推論時に、アームが遭遇する画像や状態がこの分布の範囲内に収まっていれば、モデルは概ねうまく動作しますが、一度分布の外に出てしまうと、モデルの出力は根拠を失い、振る舞いは予測不能になります。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-07.png" alt="データ分布" />
</div>

ここから、非常に実践的な含意がいくつか導かれます：

- テーブル上のあらゆる位置にあるブロックをつかませたいなら、データはテーブル上のすべての位置をカバーしていなければなりません——テーブル中央のデータだけを集めた場合、モデルは中央でしかつかめません。
- 色の異なる物体をつかませたいなら、データには異なる色が含まれていなければなりません——そうでなければ、新しい色はモデルにとって「未知の世界」です。
- 照明、背景、カメラ位置は、データ収集時とできるだけ一貫させる必要があります——午後に集めたデータで学習したモデルが、夜の室内照明の下ではまったく動かない、ということもあり得ます。

そして**汎化**とは、モデルがデータから学んだパターンを、分布の範囲内にあるが個別には見たことのない新しい状況に適用する能力のことです。例えば、学習時に100通りの位置にあるブロックを見ていて、推論時に101番目の位置（依然としてテーブル上）にブロックが現れたとしても、モデルがそれをつかめる——これが汎化です。汎化は魔法ではなく、データの**多様性**から生まれます：データのカバー範囲が豊かで連続的であればあるほど、分布内の「すき間」は小さくなり、汎化性能は向上します。

:::tip
模倣学習の上限は、本質的にはデータを収集した瞬間に決まっています。学習はその上限を実現しているに過ぎません。
:::

</section>

## 9.7 学習・推論・評価

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>パイプライン</span>
    <h2>9.7 学習・推論・評価</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-08.png" alt="模倣学習の3つのフェーズ" />
</div>

### 学習：オフライン学習

学習はデータ収集が完了した後に行われる、**オフライン**のプロセスです：アームの電源は切って脇に置いておけます。すべての処理は GPU 上で行われます。

- **入力：** 収集したデータセット（画像・状態・行動の時系列）;
- **処理：** モデルがデータを何度も読み込み、人間のデモンストレーションに対する予測行動が徐々に一致するように内部パラメータを継続的に調整する;
- **出力：** 学習済みモデルファイル。

学習の質は主に **Loss** を通して観察します：Loss が下がるほど、モデルの予測行動は人間のデモンストレーションに近づいていきます。

### 推論：オンライン意思決定

推論とは、モデルを**実際のロボットにデプロイし、リアルタイムに動作させる**プロセスです：カメラ画像と関節状態を読み取り → モデルがアクションチャンクを予測し → それをモーターに送って実行します。推論にはリアルタイム性の要求があります——モデルは数十ミリ秒以内に行動を出力しなければならず、そうでないとアームはカクついてしまいます。

### 評価：成功率で判断する

モデルは学習され、Loss も低くなりました——では本当にタスクをこなせるのでしょうか？必ずしもそうとは限りません。

**Loss が低いということは、モデルが「人間らしい」というだけであり、「タスクを完遂できる」とは限りません。** 信頼できる評価方法は、実機ロボットでのテストだけです：

- 明確なタスク成功条件を設定する（例：「ブロックが箱の中に入る」）;
- 初期条件（ブロック位置、照明）を変えながら、テストを N 回繰り返す;
- タスク成功率を計算する——例：20回のテスト中14回成功なら成功率70%。

評価で見つかった失敗ケースは終点ではなく、次のデータ収集サイクルへの入力です——失敗が起きたところで追加データを収集し、再学習します。これがデータ反復ループであり、実際のロボット学習プロジェクトの日常業務です。

</section>

## 9.8 模倣学習の利点と限界

<section id="advantages" className="section-card">
  <div className="section-title">
    <span>トレードオフ</span>
    <h2>9.8 模倣学習の利点と制限事項</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-09.png" alt="Advantages and limitations of imitation learning" />
</div>

</section>

</div>
