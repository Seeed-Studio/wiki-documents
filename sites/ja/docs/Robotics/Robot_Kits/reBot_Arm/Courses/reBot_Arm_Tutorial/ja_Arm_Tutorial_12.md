---
description: Seeed Physical AI Beginner's Course の第12章 — ロボットのデータセットとタスク設計：Episode とは何か、1つのデータレコードに何が入っているか、タイムスタンプと同期、開始／終了条件、一貫性と多様性、データ量とデータ品質、そしてデータ作成の具体例。
title: 第12章 - ロボットのデータセットとタスク設計
hide_title: true
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Episode
  - Data Collection
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_12
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第12章 · 理論</span>
    <h2>12. ロボットのデータセットとタスク設計</h2>
    <p>
      Seeed Physical AI Beginner's Course の第12章 — Episode とは何か、1つのデータレコードに何が
      入っているか、タイムスタンプと同期、開始／終了条件、一貫性と多様性、データ量とデータ品質、
      そしてデータ作成の具体例について説明します。
    </p>
    <div className="hero-actions">
      <a href="#episode">Episode</a>
      <a href="#一貫性-多様性">データ設計</a>
      <a href="#example">例</a>
    </div>
  </div>
</section>

## 12.1 Episode とは？

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episode</span>
    <h2>12.1 Episode とは？</h2>
  </div>

この章から、あなたが行うすべての操作は役割の切り替えを意味します — **あなたはもはや「ドライバー」ではなく、「教師」です。** あなたが取るあらゆる行動が記録され、モデルの教科書になります。この教科書の基本単位が Episode です。

**Episode とは、1回分のタスクの完全なデモンストレーションです。** アームが開始姿勢にありタスクが始まってから、タスクが完了するまで、システムによって連続的に記録されたすべてのデータが1つの Episode を構成します。

</section>

## 12.2 1つのデータレコードには具体的に何が入っている？

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Data</span>
    <h2>12.2 1つのデータレコードには具体的に何が入っている？</h2>
  </div>

第9章を思い出してください — 見覚えがありますね。そう、以前学んだ **Observation、State、Action** です。

Action の出どころに注意してください：これは（Leader を通じて）与えられた目標アクションを記録しており、その後 Follower が実際に到達した位置ではありません。これは行動クローンの定義と完全に一致しています — モデルは「この Observation と State のもとで、人間がその瞬間に何をしようとしていたか」を学習します。

</section>

## 12.3 タイムスタンプとデータ同期

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sync</span>
    <h2>12.3 タイムスタンプとデータ同期</h2>
  </div>

画像は USB 経由、関節データは CAN 経由で送られるため、2つのデータストリームは当然コンピュータに到着するタイミングが異なります。LeRobot は各フレームのデータにタイムスタンプを付与し、「同じ瞬間」の画像・状態・アクションを1行に揃えます。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-01.png" alt="Timestamps and synchronization" />
</div>

</section>

## 12.4 タスク設計：開始条件と終了条件

<section id="task-design" className="section-card">
  <div className="section-title">
    <span>Task design</span>
    <h2>12.4 タスク設計：開始条件と終了条件</h2>
  </div>

データ収集の前に、タスク定義を文章で明確に書き出しておきましょう。良いタスク定義は次の2つの問いに答えます：**どこから始まるか？ いつ終わるか？**

### 開始条件：モデルに「固定されたスタート地点」を与える

- **固定された初期アーム姿勢：** すべての Episode は同じ安全な姿勢（例：ゼロ付近の標準姿勢）から開始します。開始姿勢がバラバラだと、モデルの最初の仕事は「どの姿勢からでもタスクに入る方法」を学ぶことになり、不要な難易度が加わります。

### 終了条件：Episode に明確な「ゴールライン」を引く

- **成功による終了：** タスク目標が達成されたとき（例：「ブロックが完全に箱の中に入り、グリッパーが開放され、アームが持ち上がって離れている」）。
- **失敗による打ち切り：** 取り返しのつかない状況が発生したとき（物体を落とした、容器を倒した、アームが危険な姿勢に入ったなど）— その Episode の記録を直ちに停止します。

</section>

## 12.5 タスクの一貫性と多様性

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Data design</span>
    <h2>12.5 タスクの一貫性と多様性：データ設計における核心的なトレードオフ</h2>
  </div>

これは本章で最も重要なセクションです。高品質なデモンストレーションデータは、一見矛盾している2つの要件を同時に満たさなければなりません。

### 一貫性：1つの「やり方」を教える

- **一貫した操作スタイル：** 同じタスクに対して、すべての Episode は同じ戦略を用いるべきです（例：常に右側からブロックに近づき、把持し、上から箱の中に下ろす）。半分のデータが左から把持し、残り半分が右から把持するようだと、モデルは2つのアプローチの「平均」を学習してしまい、多くの場合、何もつかめない奇妙な軌道になります。
- **一貫したリズム：** 動作速度や一時停止位置はおおよそ安定させます — 20秒と決めたなら、20秒以内に完了させます。速度がバラバラなデータは、モデルの動作速度も一貫しなくなります。
- **一貫したワークフロー：** すべての実行で「接近 → 把持 → 移動 → 配置 → 退避」という一連の流れを、ステップを飛ばさずに通過させます。
- **制御されたシーンの初期状態：** 物体は指定されたエリア内に配置します（エリアは広くても構いませんが、境界は明確にします）。作業空間から無関係な物体は取り除きます。
- **固定されたカメラ位置：** 収集中はカメラを動かしてはいけません — モデルにとって、カメラが5cm動くことは世界が変わることを意味します。

### 多様性：十分な「バリエーション」を見せる

- **多様なターゲット位置：** ブロックが作業空間内のさまざまな位置に現れるようにします（ランダムなばらまきではなく、グリッドを埋めるイメージ）。
- **多様な初期姿勢：** ブロックの向きや障害物との相対位置を変化させます。

</section>

## 12.6 成功と失敗の基準

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Criteria</span>
    <h2>12.6 成功と失敗の基準</h2>
  </div>

  | **不適切な基準（あいまい）**              | **適切な基準（測定可能）**                                                                                  |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| 「物体がおおよそつかめていればよい。」       | 「グリッパーが完全に閉じており、ブロックの中心を把持している。」                                                    |
| 「ブロックが箱の中に入っていればよい。」  | 「ブロックは箱の縁付近ではなく、箱の中央付近に配置されている。」                                 |
| 「ブロックをつかんで箱に入れればよい。」 | 「全体の動きは滑らかであり、各 Episode の記録時間はおおむね一定に保たれている。」 |


記録中の失敗した区間については、原則はシンプルです：**その Episode を録り直すこと。** 「もしかしたらモデルがそこから学んでくれるかも」と期待して失敗データを残してはいけません — モデルは確かに学習しますが、失敗も含めて学習してしまいます。

「タスク完了」は「なんとなく良さそう」ではなく、**客観的に判定可能な** 状態でなければなりません。良い成功基準は次のようなものです：

</section>

## 12.7 データ量 vs. データ品質

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Data volume</span>
    <h2>12.7 データ量 vs. データ品質</h2>
  </div>

経験的な目安（データ収集ボックスのようなクリーンな環境での単一テーブルトップタスクの場合。データ収集ボックスがない場合は、データセット規模を増やしてください）：

| データ量 | 期待される効果 |
| :--- | :--- |
| **50 Episode** | パイプラインが動作し、データでカバーされた領域内でモデルが動き始める（入門タスクの初期レベル） |
| **50〜100 Episode** | 成功率が実用的な範囲に達する。多くの単一タスク実験にとってのスイートスポット |
| **100+ Episode** | タスクが複雑であったり、成功率の要求が非常に高い場合を除き、効果は逓減する |

マルチタスクの場合は、複雑さに比例してデータを増やします。もちろん、トレーニング後にデータを追加することもできます — モデルの性能が十分でないと分かったときに、さらにデータを追加できます。

ただし、この文章を数字の前に置いておきましょう：

- **質の高い 50 Episode は、雑な 200 Episode よりも優れています。**
- **データ収集中に問題があれば、ためらわずに — その Episode をすぐに録り直してください。**
- **強い汎化性能が欲しいなら、何百、何千という Episode が必要になります。**

</section>

## 12.8 単一タスクデータセット vs. マルチタスクデータセット

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Datasets</span>
    <h2>12.8 単一タスクデータセット vs. マルチタスクデータセット</h2>
  </div>

- **単一タスクデータセット：** 1つのデータセットに1つのタスクだけが含まれます（例：「ブロックを箱に入れる」）。モデルの目標は1つだけで、必要なデータ量は少なく、成功率も達成しやすくなります。最初のモデルは必ず単一タスクから始めてください。
- **マルチタスクデータセット：** 1つのデータセットに複数のタスク（ブロックの把持、引き出しを開ける、ブロックを引き出しに入れる）が含まれます。各 Episode には、それがどのタスクに属するかを示す `task_index` がラベル付けされます。データの利用効率が高く、汎用ポリシーに向かう方向ですが、タスク同士がモデルの容量を奪い合うため、各タスクが十分に学習されるにはより多くのデータが必要になります。

</section>

## 12.9 データ収集の反復

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteration</span>
    <h2>12.9 データ収集の反復</h2>
  </div>

バッチごとに収集し、反復的に検証します：50 Episode 収集 → 学習 → 実機ロボットで評価 → 失敗シナリオに対して追加収集 → 再学習。モデルの全体的な方向性は正しいが精度が低い場合は、データを追加することで改善できます。一方、モデルの挙動がまったくおかしい場合は、タスクやデータ設計に問題があり、どれだけデータを追加しても改善されません。

</section>

## 12.10 データ作成の例

<section id="example" className="section-card">
  <div className="section-title">
    <span>Example</span>
    <h2>12.10 データ作成の例</h2>
  </div>

### シーン設計

1. 試験管を試験管立てに挿します。注意：試験管立ての底を両面テープで固定し、動かないようにします。カメラとアームの位置は固定し、照明も変えないようにします。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-02.png" alt="シーン設計" />
</div>

2. 図に示したポイントに従って試験管を配置します。1→2→3→4→5 で 1 周です。これを 10 周分収集します。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-03.png" alt="試験管の配置ポイント" />
</div>

初心者がデータ記録で最も頭を悩ませる問題は、「徹底的に練習するには物体をどう配置すればよいか」です。ランダムに置くと、すべてが狭い範囲に固まってしまう（モデルはその場所しか認識できず、他の位置では失敗する）、あるいは不規則に散らばってしまう（ある領域はやり過ぎで、別の領域はまったく触れられない）ということになりがちです。これは、復習のときに自分がすでに解ける問題だけを解いていて、本番で出題形式が変わると解けなくなるのと同じです。または、ロボットに 1 種類のスナックしか見せていないので、ビュッフェに連れて行ってもどこから手を付けてよいかわからない、というようなものです。ここでは、シンプルで標準化された方法を紹介します。

1. **ポイントをマークする：** 鉛筆を使って、データ収集エリア（収集ボックス／デスクマット）に **5 つのポイント** をマークします。**十字型** に配置し、中央に 1 つ、上下左右に 1 つずつ置きます。
2. **間隔を設定する：** 隣り合うポイント同士は **5〜10 cm** 離し、5 つすべてのポイントがアームの作業範囲内にあり、かつ 2 つのカメラ映像の両方で明確に見えるようにします。
3. **割り当て：** 各ポイントで **10 Episode** ずつ収集します。5 ポイント × 10 = **50 Episode** となり、目標を満たします。なお、ポイント 1 で 10 Episode、次にポイント 2 で 10 Episode…という集め方はしないでください。代わりに、各ポイントで 1 Episode ずつ収集します（5 ポイント = 1 周）として、この 1 周を 10 回行います。

### 把持と配置の設計

1. 初期位置

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-04.jpg" alt="初期位置" />
</div>

2. 物体をつかむ

- アームを試験管の真上に移動します（常に同じ高さから、試験管の中心に移動するようにします）。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-05.jpg" alt="試験管の上に移動" />
</div>

- グリッパーを開きます（なぜ一定の距離から始めるのか？グリッパーを開くときに試験管にぶつかって位置がずれてしまうのを防ぐためです）。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-06.jpg" alt="グリッパーを開く" />
</div>

- 毎回同じ力と速度で把持します。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-07.jpg" alt="物体をつかむ" />
</div>

3. 物体を配置する

- 試験管ラックの中心の真上に移動します。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-08.jpg" alt="ラックの上に移動" />
</div>

- 一定の速度でグリッパーを開き、アームを持ち上げます。試験管がスムーズにラックに収まるのが見えるはずです。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-09.jpg" alt="物体を配置する" />
</div>

- 試験管を置いたら、アームをホームポジションに戻します。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-10.jpg" alt="ホームに戻る" />
</div>

これで 1 つの完璧な Episode が完了です。あとはこれを 50 回繰り返すだけです。

### 設計に関する質問

なぜ試験管ラックやカメラ、試験管の位置を動かしたり、照明を変えたりしてはいけないのですか？

- **誤解を解く：** 「何でも自由に動かす」ことで生まれるのは多様性ではなくノイズです。
- **汎化バジェット理論：** データが限られている場合、ある次元に変化を費やすと、その次元についてモデルが学習します。ターゲット位置の変化に費やせば、モデルは異なる位置の試験管をつかむことを学びます。カメラ位置の変化に費やすと、モデルは把持だけでなく視点の違いも同時に学習しなければならず、はるかに多くのデータが必要になり、結果も悪くなります。
- **どうしてもバリエーションが必要な場合：** 記録中に「固定しない」ことが目的ではなく、その後の追加データの反復で、意図的に境界を広げて、求める汎化性能を達成することが重要です。

</section>

</div>
