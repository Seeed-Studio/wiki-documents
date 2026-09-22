---
description: "Seeed Embodied Intelligence Beginner's Course 第12章 — ロボットのデータセットとタスク設計：Episode とは何か、1 レコードに何が入っているか、タイムスタンプと同期、開始／終了条件、一貫性 vs 多様性、データ量 vs データ品質、そしてデータ作成の具体例。"
title: 第12章 - ロボットのデータセットとタスク設計
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Episode
  - Data Collection
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_12
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第12章 · 理論</span>
    <h2>12. ロボットのデータセットとタスク設計</h2>
    <p>
      Seeed Embodied Intelligence Beginner's Course 第12章 — Episode とは何か、1 つのデータレコードに何が
      入っているか、タイムスタンプと同期、開始／終了条件、一貫性 vs 多様性、データ量 vs データ品質、
      そしてデータ作成の具体例について学びます。
    </p>
    <div className="hero-actions">
      <a href="#エピソード">Episode</a>
      <a href="#一貫性-vs-多様性">Data design</a>
      <a href="#例">Example</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>12.1 Episode とは？</span>
    <span>12.2 1 つのデータレコードの中身は？</span>
    <span>12.3 タイムスタンプとデータ同期</span>
    <span>12.4 タスク設計：開始条件と終了条件</span>
    <span>12.5 タスクの一貫性 vs 多様性</span>
    <span>12.6 成功条件と失敗条件</span>
    <span>12.7 データ量 vs データ品質</span>
    <span>12.8 シングルタスク vs マルチタスクのデータセット</span>
    <span>12.9 データ収集の反復</span>
    <span>12.10 データ作成の例</span>
  </div>
</section>

<RebotCourseNav />

## 12.1 Episode とは？

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episode</span>
    <h2>12.1 Episode とは？</h2>
  </div>

この章から、あなたが行うすべての操作は、役割が切り替わったことを意味します。**あなたはもう「ドライバー」ではなく「教師」です。** あなたの一挙手一投足が記録され、モデルの教科書になります。この教科書の基本単位が Episode です。

**Episode とは、1 回分のタスクの完全なデモンストレーションです。** アームが開始姿勢にありタスクが始まってから、タスクが完了するまで、システムが連続的に記録したすべてのデータが 1 つの Episode を構成します。

</section>

## 12.2 1 つのデータレコードの中身は？

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Data</span>
    <h2>12.2 1 つのデータレコードの中身は？</h2>
  </div>

第9章を思い出してください — 見覚えがありますよね。そう、以前学んだ **Observation（観測）、State（状態）、Action（行動）** です。

Action の出どころに注意してください：これは（Leader を通じて）与えられた目標行動を記録しており、その後 Follower が実際に到達した位置ではありません。これは行動クローンの定義と完全に一致しています — モデルは「この観測と状態のもとで、人間がその瞬間に何をしようとしたか」を学習します。

</section>

## 12.3 タイムスタンプとデータ同期

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sync</span>
    <h2>12.3 タイムスタンプとデータ同期</h2>
  </div>

画像は USB 経由、関節データは CAN 経由で送られるため、2 つのデータストリームは当然ながら異なるタイミングでコンピュータに到着します。LeRobot は各フレームのデータにタイムスタンプを付与し、「同じ瞬間」の画像・状態・行動を 1 行にそろえます。

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

データを収集する前に、タスク定義を文章で明確に書き出しましょう。良いタスク定義は 2 つの問いに答えます：**どこから始まるのか？ いつ終わるのか？**

### 開始条件：モデルに「固定されたスタート地点」を与える

- **固定された初期アーム姿勢：** すべての Episode は同じ安全な姿勢（例：ゼロ付近の標準姿勢）から始めます。開始姿勢がバラバラだと、モデルは最初に「どの姿勢からでもタスクに入り込む方法」を学ばなければならず、不要な難易度が加わります。

### 終了条件：Episode に明確な「ゴールライン」を引く

- **成功による終了：** タスク目標が達成されたとき（例：「ブロックが完全に箱の中に入り、グリッパが開放され、アームが持ち上がって離れている」）。
- **失敗による打ち切り：** 取り返しのつかない状況が発生したとき（物体を落とした、容器を倒した、アームが危険な姿勢に入ったなど）— その Episode の記録を直ちに停止します。

</section>

## 12.5 タスクの一貫性 vs 多様性

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Data design</span>
    <h2>12.5 タスクの一貫性 vs 多様性：データ設計の核心的なトレードオフ</h2>
  </div>

ここがこの章で最も重要なセクションです。高品質なデモンストレーションデータは、一見矛盾する 2 つの要件を同時に満たさなければなりません。

### 一貫性：1 つの「やり方」を教える

- **一貫した操作スタイル：** 同じタスクに対して、すべての Episode が同じ戦略を使うべきです（例：常にブロックの右側から近づき、把持し、上から箱の中に下ろす）。半分のデータが左側から、半分が右側から把持していると、モデルは 2 つのアプローチの「平均」を学習してしまい、多くの場合、何もつかめない奇妙な軌道になります。
- **一貫したリズム：** 動作速度や一時停止位置はおおよそ安定させます — 20 秒と決めたら 20 秒以内に完了させます。速度がバラバラなデータは、モデルの動作速度も不安定にします。
- **一貫したワークフロー：** すべての実行で「接近 → 把持 → 移動 → 置く → 退避」という一連の流れを、省略せずに通過させます。
- **制御されたシーンの初期状態：** 物体は指定したエリア内に配置します（エリアは広くても構いませんが、境界は明確にします）。作業空間から無関係な物体は取り除きます。
- **固定されたカメラ位置：** 収集中はカメラを動かしてはいけません — モデルにとって、カメラが 5 cm 動くことは世界が変わることを意味します。

### 多様性：十分な「バリエーション」を見せる

- **多様な目標位置：** ブロックが作業空間内のさまざまな位置に現れるようにします（ランダムなばらまきではなく、グリッドを埋めるイメージ）。
- **多様な初期姿勢：** ブロックの向きや障害物との相対位置を変化させます。

</section>

## 12.6 成功条件と失敗条件

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Criteria</span>
    <h2>12.6 成功条件と失敗条件</h2>
  </div>

  | **不十分な基準（あいまい）**              | **十分な基準（測定可能）**                                                                                  |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| 「物体がおおよそつかめていればよい。」       | 「グリッパが完全に閉じており、ブロックの中心を把持している。」                                                    |
| 「ブロックが箱の中に入っていればよい。」  | 「ブロックが箱の縁付近ではなく、箱の中央付近に置かれている。」                                 |
| 「ブロックをつかんで箱に入れればよい。」 | 「全体の動きが滑らかであり、記録された各 Episode の長さがある程度一貫している。」 |


記録中に失敗した区間については、原則はシンプルです：**その Episode を録り直すこと。** 「失敗データからもモデルが学んでくれるかも」と期待して残しておかないでください — モデルは確かに学習しますが、失敗も含めて学習してしまいます。

「タスク完了」は「なんとなく良さそう」ではなく、**客観的に判定できる** 状態でなければなりません。良い成功条件は次のようなものです：

</section>

## 12.7 データ量 vs データ品質

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Data volume</span>
    <h2>12.7 データ量 vs データ品質</h2>
  </div>

経験的な目安（データ収集ボックスのようなクリーンな環境での単一の卓上タスクの場合。データ収集ボックスがない場合は、データセット規模を増やしてください）：

| データ量 | 期待される効果 |
| :--- | :--- |
| **50 Episode** | パイプラインが動作し、データでカバーされた領域内でモデルが動き始める（入門タスクの初級レベル） |
| **50～100 Episode** | 成功率が実用的な範囲に達する。多くのシングルタスク実験にとってのスイートスポット |
| **100 Episode 以上** | タスクが複雑、または成功率の要求が非常に高い場合を除き、効果は逓減する |

マルチタスクの場合は、タスクの複雑さに応じてデータ量を比例して増やします。もちろん、学習後にデータを追加することもできます — モデルの性能がいまひとつだと分かったら、データを追加しましょう。

ただし、この数字の前に次の一文を置いてください：

- **質の高い 50 Episode は、雑な 200 Episode よりも優れている。**
- **データ収集中に問題があれば、迷わずその Episode をすぐに録り直すこと。**
- **強い汎化性能を求めるなら、何百、何千という Episode が必要になる。**

</section>

## 12.8 シングルタスク vs マルチタスクのデータセット

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Datasets</span>
    <h2>12.8 シングルタスク vs マルチタスクのデータセット</h2>
  </div>

- **シングルタスクのデータセット：** 1 つのデータセットに 1 つのタスクだけが含まれます（例：「ブロックを箱に入れる」）。モデルの目標は 1 つで、必要なデータ量は少なく、成功率も達成しやすくなります。最初のモデルは必ずシングルタスクから始めてください。
- **マルチタスクのデータセット：** 1 つのデータセットに複数のタスク（ブロックをつかむ、引き出しを開ける、ブロックを引き出しに入れる）が含まれます。各 Episode には、その Episode がどのタスクに属するかを示す `task_index` がラベル付けされます。データの利用効率が高く、汎用ポリシーに向かう方向ですが、タスク同士がモデルの容量を奪い合うため、各タスクが十分に学習されるにはより多くのデータが必要になります。

</section>

## 12.9 データ収集の反復

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteration</span>
    <h2>12.9 データ収集の反復</h2>
  </div>

バッチごとに収集し、反復的に検証します：50 Episode 収集 → 学習 → 実機ロボットで評価 → 失敗シナリオ向けに追加収集 → 再学習。モデルの全体的な方向性は合っているが精度が低い場合は、データを追加することで改善します。一方、モデルの挙動が完全におかしい場合は、タスクやデータ設計に問題があり、どれだけデータを追加しても改善しません。

</section>

## 12.10 データ作成例

<section id="example" className="section-card">
  <div className="section-title">
    <span>例</span>
    <h2>12.10 データ作成例</h2>
  </div>

### シーン設計

1. 試験管を試験管立てに入れて配置します。注意：試験管立てが動かないように、底面を両面テープで固定します。カメラとアームの位置は固定し、照明も変えないでください。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-02.png" alt="Scene design" />
</div>

2. 図に示すポイントに従って試験管を配置します。1→2→3→4→5 で 1 周です。これを 10 周分収集します。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-03.png" alt="Test tube placement points" />
</div>

初心者がデータを記録するときに最も頭を悩ませる問題は、「どう物体を配置すればしっかり練習できるか」です。ランダムに置くと、すべてが狭い範囲に固まってしまい（モデルはその場所しか認識できず、他の位置では失敗する）、あるいはバラバラに散らばってしまいます（ある領域はやり過ぎで、別の領域はまったく触れられない）。これは、復習のときに自分が解ける問題だけを解いていて、本番で出題形式が変わると解けなくなるのと同じです。または、ロボットに一種類のスナックしか見せていないのに、ビュッフェに連れて行ったらどこから手を付けてよいか分からない、というようなものです。ここでは、シンプルで標準化された方法を紹介します。

1. **ポイントをマークする：** 鉛筆を使って、データ収集エリア（回収ボックス／デスクマット）に **5 つのポイント** をマークします。配置は **十字型** にし、中央に 1 点、その上下左右に 1 点ずつ置きます。
2. **間隔を設定する：** 隣り合うポイント同士は **5〜10 cm** 離し、5 点すべてがアームの作業範囲内にあり、かつ 2 台のカメラの映像で明確に見えるようにします。
3. **割り当て：** 各ポイントで **10 Episode ずつ** 収集します。5 点 × 10 = **50 Episode** となり、目標を満たします。また注意点として、ポイント 1 で 10 Episode、次にポイント 2 で 10 Episode…という集め方はしないでください。代わりに、各ポイントで 1 Episode ずつ（5 点で 1 周）収集し、この 1 周を 10 回繰り返します。

### 把持と配置の設計

1. 初期位置

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-04.jpg" alt="Initial position" />
</div>

2. 物体をつかむ

- アームを試験管の真上に移動します（毎回、同じ高さから試験管の中心に移動するようにします）。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-05.jpg" alt="Move above the test tube" />
</div>

- グリッパーを開きます（なぜ一定の距離から始めるのか？ グリッパーを開くときに試験管にぶつかって位置がずれるのを防ぐためです）。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-06.jpg" alt="Open the gripper" />
</div>

- 毎回同じ力と速度で把持します。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-07.jpg" alt="Grasp the object" />
</div>

3. 物体を置く

- 試験管立ての中心の真上に移動します。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-08.jpg" alt="Move above the rack" />
</div>

- 一定の速度でグリッパーを開きながらアームを持ち上げます。試験管がスムーズに試験管立てに収まるのが見えるはずです。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-09.jpg" alt="Place the object" />
</div>

- 試験管を置いたら、アームをホームポジションに戻します。

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-10.jpg" alt="Return to home" />
</div>

これで 1 つの完璧な Episode が完了です。あとはこれを 50 回繰り返すだけです。

### 設計に関する質問

なぜ試験管立てやカメラ、試験管の位置を動かしたり、照明を変えたりしてはいけないのですか？

- **誤解を解く：** 「何でも自由に動かす」ことが生み出すのは多様性ではなくノイズです。
- **汎化バジェット理論：** データが限られている場合、ある次元に変化を割り当てると、その次元についてモデルが学習します。ターゲット位置の変化に費やせば、モデルは異なる位置の試験管をつかむことを学びます。一方、カメラ位置の変化に費やすと、モデルは把持だけでなく視点の違いも同時に学習しなければならず、はるかに多くのデータが必要になり、結果も悪くなります。
- **どうしてもバリエーションが必要な場合：** 記録中に「固定しない」ことではなく、その後の追加データの反復で意図的に境界を広げていくことによって、求める汎化を達成するという考え方です。

</section>

</div>
