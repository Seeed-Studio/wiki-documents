---
description: "SO-ARM Physical AI ビギナーコース第 8 章 — ロボット学習と模倣学習の基礎：アームが学習を必要とする理由、ルールベースと学習ベース制御、観測・状態・アクション、アクションチャンク、データ分布、訓練・推論・評価の 3 フェーズ。"
title: 第 8 章 - ロボット学習と模倣学習の基礎
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 模倣学習
  - 行動クローニング
  - ロボット学習
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_8
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_8/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 8 章 · 理論と実践</span>
    <h2>8. ロボット学習と模倣学習の基礎</h2>
    <p>
      アームが学習を必要とする理由、ルールベースと学習ベース制御の比較、観測・状態・アクション、アクションチャンク、データ分布、訓練・推論・評価の 3 フェーズを理解します。
    </p>
    <div className="hero-actions">
      <a href="#why-learning">なぜ学習か</a>
      <a href="#data-distribution">データ分布</a>
      <a href="#pipeline">パイプライン</a>
    </div>
  </div>
</section>

### このステージで必要なハードウェア

各ステージの完全な一覧は [第 3 章](/ja/robotics/soarm_physical_ai_course_chapter_3/) にあります。

**主制御デバイス**

| 項目 | 購入 | 数量 |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |

デスクトップまたはノート PC も必要です：Ubuntu 22.04、CUDA 12+、訓練には 12GB 以上 VRAM の NVIDIA GPU と 16GB 以上のメモリ。

**このステージ用**

| 項目 | 購入 | 数量 |
| :--- | :---: | :---: |
| [SO-ARM101 キット（リーダー + フォロワー）](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 🛒 | 1 |
| 32 × 32 mm USB カメラ | - | 2 |
| マウスパッド / デスクマット | - | 1 |

## 8.1 ロボットアームはなぜ学習を必要とするのか？

<section id="why-learning" className="section-card">
  <div className="section-title">
    <span>動機</span>
    <h2>8.1 ロボットアームはなぜ学習を必要とするのか？</h2>
  </div>

ステージ 2 で、あなたは SO-ARM のすべてのサーボを読み書きできるようになりました：関節位置の取得、目標角度の送信、グリッパの開閉。それなら — アームがテーブル上のブロックを自動で拾うプログラムを書けばいい、と思うのは自然です。

そこでそんなプログラムを書きます。研究室の初デモでは絶好調。しかし翌日、状況は変わっていました — そしてこれらの変化に対応するうちに「if」文がどんどん増え、最後には誰も保守できない特例カタログになります。

**これが従来型プログラム制御の根本ジレンマです：現実の世界は連続的に変化するのに、if-else は離散的である。** 世界のすべての状態を列挙することはできません。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-01.png" alt="従来型プログラム制御のジレンマ" />
</div>

**ロボットアームにこの形でスキルを身につけさせることこそ、Robot Learning が解決しようとする問題です。** そして本ステージで扱う模倣学習は、最も成熟し、実機への展開が最も容易なアプローチです。

</section>

## 8.2 ルールベース制御 vs. 学習ベース制御

<section id="control-paradigms" className="section-card">
  <div className="section-title">
    <span>パラダイム</span>
    <h2>8.2 ルールベース制御 vs. 学習ベース制御</h2>
  </div>

先に進む前に、2 つの制御アプローチを並べてはっきり見ておきましょう。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-02.png" alt="ルールベース制御と学習ベース制御の比較" />
</div>

:::note
本コースのステージ 3・4 は「学習ベース制御」の道を進みます。ただし覚えておいてください：将来も学習システムには多くのルールが残ります — 関節限界や安全速度制約など。学習とルールは相補的です。
:::

</section>

## 8.3 模倣学習と行動クローニング

<section id="imitation-learning" className="section-card">
  <div className="section-title">
    <span>模倣</span>
    <h2>8.3 模倣学習と行動クローニング</h2>
  </div>

### 模倣学習とは

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-03.png" alt="模倣学習" />
</div>

### 行動クローニングとは

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-04.png" alt="行動クローニング" />
</div>

</section>

## 8.4 観測・状態・アクション

<section id="observation-state-action" className="section-card">
  <div className="section-title">
    <span>データの概念</span>
    <h2>8.4 観測・状態・アクション</h2>
  </div>

模倣学習のすべてのデータは 3 つの概念に分類できます。これらの言葉は以降のすべての章に登場するので、ここで正確な直観を作ってください。

- **観測（Observation）**：ロボットが「見る」世界；
- **状態（State）**：ロボット「自身」の状況；
- **アクション（Action）**：ロボットが「これからすること」。

SO-ARM に具体化すると：観測は 2 台のカメラ画像、状態はフォロワーの 6 つの関節読み取り値（5 関節 + グリッパ）、アクションは次に送る 6 つの目標関節値です。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-05.png" alt="観測・状態・アクション" />
</div>

</section>

## 8.5 単発アクション vs. アクションチャンク

<section id="action-chunks" className="section-card">
  <div className="section-title">
    <span>アクション</span>
    <h2>8.5 単発アクション vs. アクションチャンク</h2>
  </div>

- **単発アクション**：フレームごとに 1 回の意思決定；
- **アクションチャンク**：一度にアクションの列を予測。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-06.png" alt="単発アクションとアクションチャンク" />
</div>

もちろん、チャンクが長いほど良いわけではありません。遠くまで予測すると、実行中に環境が変わる（例：物が弾かれる）のに、アームはまだ「古い」アクションを実行し続ける可能性があります。実システムは折衷案を使います：短い区間だけ開ループで実行し、再観測・再予測します。

</section>

## 8.6 データ分布とモデルの汎化

<section id="data-distribution" className="section-card">
  <div className="section-title">
    <span>分布</span>
    <h2>8.6 データ分布とモデルの汎化</h2>
  </div>

これは全章で最も重要でありながら、初学者が最も見落としがちな節で、実践の成否を左右します。まずこの一文を覚えてください：

**模倣学習モデルはデータにあることしか学べず、データがカバーする範囲でしか機能できない。**

- 訓練時にモデルが見たすべての（観測, アクション）ペアが**データ分布**を構成します。推論時、アームが遭遇する画像と状態がこの分布内にあればモデルは概ね良好に動作し、分布を外れた途端、出力は根拠を失い挙動が予測不能になります。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-07.png" alt="データ分布" />
</div>

ここから非常に実践的な帰結がいくつも導けます：

- テーブル上のどこにでもブロックを掴ませたいなら、データはテーブル全体をカバーする必要があります — 中央だけで採れば、モデルは中央しか掴みません；
- 違う色の物体を掴ませたいなら、データに違う色が含まれていなければなりません — 新しい色は、モデルにとって未知の世界です；
- 光照・背景・カメラ位置はできるだけ採集時と同じに — 午後に採ったデータで訓練したモデルは、夜の室内光で完全に失敗するかもしれません。

そして**汎化**とは、データから学んだパターンを、分布内でまだ個別には見ていない状況に適用する能力です。例えば訓練で 100 か所のブロック位置を見て、推論で 101 か所目（まだテーブル上）にブロックが現れても掴める — それが汎化です。汎化は魔法ではなく、データの**多様性**から来ます：カバーが豊かで連続であるほど分布内の「隙間」が小さくなり、汎化は良くなります。

:::tip
模倣学習の上限は、データ採集が完了した瞬間にほぼ決まります。訓練はその上限に近づくだけです。
:::

</section>

## 8.7 訓練・推論・評価

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>パイプライン</span>
    <h2>8.7 訓練・推論・評価</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-08.png" alt="模倣学習の 3 フェーズ" />
</div>

### 訓練：オフライン学習

訓練はデータ採集完了後に行われ、**オフライン**なプロセスです：アームは電源を切って脇に置けます。すべての作業は GPU 上で行われます。

- **入力**：採集済みデータセット（画像・状態・アクションの時系列）；
- **過程**：モデルがデータを繰り返し読み、内部パラメータを調整し、予測アクションを人間のデモに近づけていきます；
- **出力**：訓練済みモデルファイル。

訓練の質は主に **Loss** で観察します：Loss が下がるほど、予測アクションが人間のデモに近づいています。

### 推論：オンライン意思決定

推論はモデルを**実機に展開してリアルタイムで動かす**プロセスです：カメラと関節状態を読む → モデルがアクションチャンクを予測 → サーボへ送って実行。推論にはリアルタイム性が要求されます — 数十ミリ秒以内に出力しないとアームがカクつきます。

### 評価：成功率で判定

モデルは訓練され、Loss は低い — 本当に仕事ができるでしょうか？そうとは限りません。

**Loss が低いのはモデルが「人間っぽい」だけで、「タスクを完了できる」わけではありません。** 信頼できる評価方法は実機テストだけです：

- 明確な成功基準を設定（例：「ブロックが箱に入っている」）；
- 初期条件を変え（ブロック位置、光照）、N 回繰り返す；
- タスク成功率を計算 — 例：20 回中 14 回成功 = 成功率 70%。

評価で見つかった失敗ケースは終点ではなく、次のデータ採集への入力です — 失敗した場所に追加データを採り、再訓練する。これがデータイテレーションのループであり、実プロジェクトの日常です。

</section>

## 8.8 模倣学習の利点と限界

<section id="advantages" className="section-card">
  <div className="section-title">
    <span>トレードオフ</span>
    <h2>8.8 模倣学習の利点と限界</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-09.png" alt="模倣学習の利点と限界" />
</div>

</section>

</div>
