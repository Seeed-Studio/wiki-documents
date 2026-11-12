---
description: "DM0.5 を精読する：歴史的コンテキスト融合、エンボディド推論、動的アクションマッチング、Flow Matching、そしてオープンワールド評価の限界。"
title: "DM0.5: オープンワールドにおける歴史的コンテキストと軌道アラインメント"
hide_title: true
keywords: [Technical Blog Deep-Dive, DM0.5, OpenDM, Historical Context, Trajectory Alignment, Flow Matching, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig01-architecture.png
slug: /robotics/paper_reading_dm05
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-10
createdAt: '2026-11-10'
updatedAt: '2026-11-10'
url: https://wiki.seeedstudio.com/ja/robotics/paper_reading_dm05/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "モデルアーキテクチャ：シーン理解からアクション生成まで",
    "id": "model-architecture-from-scene-understanding-to-action-generation",
    "level": 2
  },
  {
    "value": "コンテキスト抽象化レイヤ：歴史的コンテキスト融合",
    "id": "context-abstraction-layer-historical-context-fusion",
    "level": 2
  },
  {
    "value": "Embodiment CoT タスク：広範なエンボディド推論",
    "id": "embodiment-cot-tasks-broad-embodied-reasoning",
    "level": 2
  },
  {
    "value": "軌道アラインメントレイヤ：動的アクションマッチング",
    "id": "trajectory-alignment-layer-dynamic-action-matching",
    "level": 2
  },
  {
    "value": "Flow Matching による連続アクション生成",
    "id": "continuous-action-generation-with-flow-matching",
    "level": 2
  },
  {
    "value": "データと学習：モデルが何から学ぶか",
    "id": "data-and-training-what-the-model-learns-from",
    "level": 2
  },
  {
    "value": "実験：結果が示すもの",
    "id": "experiments-what-the-results-support",
    "level": 2
  },
  {
    "value": "ゼロショット汎化",
    "id": "zero-shot-generalization",
    "level": 3
  },
  {
    "value": "ファインチューニング能力と実機ロボットマニピュレーション",
    "id": "fine-tuning-capability-and-real-robot-manipulation",
    "level": 3
  },
  {
    "value": "結論",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-dm05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · TECHNICAL BLOG DEEP-DIVE</span>
  <h1 id="paper-reading-dm05-title">DM0.5: オープンワールドにおける歴史的コンテキストと軌道アラインメント</h1>
  <p className="paper-reading-lead">DM0.5: 汎用エンボディドインテリジェンスのためのオープンワールド基盤モデル</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>歴史的コンテキスト</li><li>エンボディド推論</li><li>軌道アラインメント</li><li>連続アクション</li>
  </ul>
  <a className="paper-reading-source-link" href="https://www.dexmal.com/blog/dm0.5?lang=en-US" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Dexmal</span><span>公式テクニカルブログを読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot options">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/dm05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="Hugging Face" width="24" height="24" /> Hugging Face · LeRobot DM0.5 Documentation ↗</a>

**LeRobot の主なオプション**

これらのオプションは、データセットおよび出力設定と組み合わせて使用します。インストール、カメラマッピング、完全な評価コマンドについては、上記の公式ドキュメントを参照してください。

- `--policy.path=lerobot/dm05_base`: ベースチェックポイントから教師ありファインチューニングを開始します。LIBERO に適合させたチェックポイントは `lerobot/dm05_libero` です。
- `--policy.add_state=false --policy.chunk_size=10 --policy.n_action_steps=10`: 公式の LIBERO レシピでは、プロンプトからロボット状態を省略し、一度に 10 ステップのアクションを予測・実行します。自分のロボットに適したレシピを使用してください。
- `--policy.push_to_hub=false`: 学習結果をローカルに保存します。チェックポイントは、その設定、トークナイザ、プロセッサと一緒に保存および読み込みます。

</aside>

ロボットは「カップを持ち上げて、その下のテーブルを拭き、カップを元の場所に戻して」と指示を受け取ります。いったんカップが動くと、現在の画像には元の位置が写っていないかもしれません。カップを持っている様子は、拭く前後で見た目は似ていますが、次に取るべきアクションは異なります。デモンストレーターの一時停止やペースの変化も、アクション学習を難しくします。

**DM0.5 は、歴史的コンテキストの利用、タスク進行度の学習、デモ軌道のアラインメントによって、これらの問題に対処します。** 本記事では、Dexmal の公式テクニカルブログと公開実装をもとに、この 3 つのメカニズムを解説します。

## モデルアーキテクチャ：シーン理解からアクション生成まで

Vision-Language-Action (VLA) モデルは、画像、指示、ロボット状態を制御アクションへと変換します。DM0.5 は **4B Vision-Language Model (VLM) と 680M Action Expert** を使用します。VLM はシーンとタスクを表現し、Action Expert が連続ロボットアクションを生成します。

![公式 DM0.5 アーキテクチャ：Action Expert は、過去および現在の観測に条件付けられた連続アクションを生成する](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig01-architecture.png)

*出典：公式ブログの Model セクション。履歴圧縮、エンボディド推論、軌道アラインメントによって、入力と学習の教師信号が改善される。*

カップを戻すタイミングでは、過去のフレームがカップの元の位置を示し、現在の画像が今のカップとテーブルの状態を示し、指示がカップをどこへ戻すべきかを指定します。VLM はこれらの入力をアクション条件としてエンコードします。Action Expert はその条件を読み取り、カップを運んで置くための一連の動きを生成します。

モデルは、**アクションチャンク**と呼ばれる将来アクションのシーケンスを予測します。アーキテクチャ図の KV キャッシュは、画像とテキスト入力に対する計算を再利用します。タスク履歴は別の役割を持ち、実際の過去の観測をモデルに提供します。

## コンテキスト抽象化レイヤ：歴史的コンテキスト融合

カップを戻すには、カップを持ち上げる前の視点と現在の視点の両方が必要です。長い動画をそのまま入力すると、計算コストが増大します。

DM0.5 の **Context Abstraction Layer** は、過去からフレームをサンプリングし、各履歴スロットを固定数のビジュアルトークンに圧縮します。モデルは、これらのトークンを現在の観測と並行して処理します。公開されているメモリ実装では、2 次元の平均プーリングによってビジュアル特徴グリッドの空間サイズを縮小します。

![説明図：圧縮された履歴フレームが現在の画像と指示に結合され、アクションの条件となる](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide01-history-en.svg)

*図解：履歴は現在のタイムステップより前からのみ取得される。灰色のスロットは履歴が欠けていることを表す。*

ブログでは、タスク履歴を最大 **約 60 秒** までサポートすると報告されています。モデルがカップの元の位置を復元できるかどうかは、どのフレームがサンプリングされたかと、圧縮後にどれだけ空間的な詳細が残るかに依存します。例えば 1 秒に 1 フレームをサンプリングする場合、短時間しか見えていなかった細部を見逃す可能性があります。

チェックポイントと入力パイプラインも履歴をサポートする必要があります。ここで確認する標準的な LeRobot 統合では、OpenDM の独立した履歴画像入力は公開されていません。上記の LIBERO オプションでは、モデルのメモリ能力を直接テストすることはできません。

## Embodiment CoT タスク：広範なエンボディド推論

アクションラベルは、ある瞬間にどのように動くかをモデルに教えます。しかし、それまでに何が完了しているか、次に何をすべきかを必ずしも特定しません。DM0.5 は、ロボットデータでの学習に **11 個の自己回帰タスク** を追加します。テキストの回答をトークンごとに予測することで、タスクの段階、イベント、アクションの意図に対する追加の教師信号を与えます。

公式ブログでは、これらの **Embodiment CoT タスク** を 3 つのカテゴリに分類しています：

| カテゴリ | モデルが学ぶこと | 教示例：テーブルを拭くタスク |
|---|---|---|
| タスクプランニング | 現在のタスク段階と次のステップ | カップは移動済みなので、次にテーブルを拭く。 |
| イベント・環境予測 | シーンの変化と主要イベント | 拭いた後、その領域はきれいになっているはず。 |
| アクション生成 | 将来のアクション、またはアクション意図の要約 | カップを元の位置に戻す。 |

これらの例は教師信号を説明するためのものであり、公開されている学習サンプルではありません。履歴は何が起きたかの証拠を提供し、意味的な教師信号が、その変化をタスク進行やアクション選択と結び付けるのに役立ちます。これは学習目的であり、各アクションの前に、人間が読める推論過程を出力することをモデルに要求するものではありません。

## 軌道アラインメントレイヤ：動的アクションマッチング

2 人のオペレータが同じシーケンス、すなわち接近、接触、把持の確立、持ち上げをデモします。一方は接触前に 0.5 秒間一時停止します。ターゲットを固定の時間オフセットで対応付けると、同じ予測スロットが動作の異なる段階を教師することになり得ます。

DM0.5 の **Trajectory Alignment Layer** は、固定長のアクション予測を、より高密度な真値軌道上のアンカーポイントに対応付けます。この対応付けは時間順序を保たなければなりません。動的計画法によって、全体のコストがより低い対応付けの列を見つけます。

![説明図：3 つの予測アクションが、より高密度な真値軌道上の単調増加するアンカーポイントに対応付けられる](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide02-alignment-en.svg)

*図解：数字は正規化された 1 つのアクション成分を表す。単純化したコストは点ごとの誤差のみを含む。*

真値軌道が `[0, 0, 0, 0.5, 1]`、予測が `[0, 0.5, 1]` だとします。位置 1、3、5 に等間隔のアンカーを固定すると、ターゲットは `[0, 0, 1]` となり、二乗誤差は `0² + (0.5 − 0)² + 0² = 0.25` です。位置 1、4、5 で単調マッチングを行うと、誤差は `0` になります。どちらの選択も軌道の開始と終了は保持します。違いは、中間の予測が一時停止後の動きと対応付けられるかどうかです。固定アンカーは説明用の比較であり、公式の学習レシピではありません。

最小の点ごとの誤差だけでマッチングすると、重要な接触ステージを飛ばしてしまう可能性があります。そのためブログではアンカー間の軌道連続性制約について述べていますが、その完全な数式は示していません。例では単調マッチングを説明しています。アライメントは学習中にどのアクションがモデルを教師ありするかを変えますが、デプロイ時のアクションのタイミングは依然としてコントローラが決定します。

## Flow Matching による連続アクション生成

過去の観測と指示がモデルの条件となり、軌道アライメントによって予測と教師信号が対応付けられます。Action Expert は **Flow Matching** によって数値アクションを生成します。

公開されている標準的な教師ありファインチューニング（SFT）の実装では、真のアクションチャンク A を同じ形状のガウス雑音 ε と混合します：

$$
X_s=(1-s)A+s\epsilon,\qquad U_s=\epsilon-A.
$$

変数 s は 0 から 1 の範囲をとり、アクションから雑音への補間を行います。Action Expert は雑音が加えられたアクションと s、および画像と言語の条件を受け取り、更新方向 U を予測するように学習します。あるアクション値が `0.6`、雑音が `−0.2`、`s=0.5` のとき、混合値は `0.2` となり、目標方向は `−0.8` になります。

![説明図：Flow Matching は速度場を学習し、推論時に雑音からアクションへ積分する](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide03-flow-en.svg)

*図：内部生成ステップは、アクションチャンク内の制御位置とは異なる。*

推論時には、モデルは雑音から開始し、s を 1 から 0 へ減少させます。先ほどの例を続けると、`0.2` で予測方向が `−0.8` のとき、`−0.1` のステップをとると `0.28` となり、アクション値 `0.6` に近づきます。生成されたアクションは非正規化され、コントローラに渡されます。次のラウンドでは新しい観測が使われます。

ブログのデフォルトは、**50 ステップのアクションチャンクを生成するための 10 回の内部更新**です。次の観測までに実行されるアクション数は、デプロイのレシピに依存します。標準的な LeRobot SFT は Flow Matching 損失を使用しますが、ブログにある推論タスクや軌道アライメント学習の完全なセットを自動的に再現するわけではありません。

## データと学習：モデルが何から学ぶか

DM0.5 は、ロボットマニピュレーション、エンボディドナビゲーション、一人称視点の人間マニピュレーション、一般的な画像および動画データを組み合わせています。ロボット軌道はアクションの教師信号を提供し、その他のソースは意味的・空間的・時間的なカバレッジを広げます。人間の動画はロボットの関節目標を直接は提供しません。

データクレンジングでは、異常な区間や長いアイドル区間を除去し、画像とアクションの同期を確認し、タスクラベルを修正します。**信頼できる記録が最優先です。** そのうえで、軌道アライメントによってデモンストレーションの速度のばらつきに対処できます。

ベース学習の間、VLM は画像と言語の能力を維持するために低い学習率を用い、Action Expert は制御を学習するために高い学習率を用います。その後、ベースの重みを特定のタスクやロボットに適応させることができます。カメラ入力、状態とアクションの意味、正規化は一貫している必要があります。

## 実験：結果が示すもの

### ゼロショット汎化

![公式ゼロショット結果：2 つのロボットプラットフォームにおけるアクションカテゴリとセマンティック条件ごとの成功率](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig02-zero-shot-en.png)

*出典：公式ブログの Zero-Shot Generalization。上段は Franka 上での DM0.5-Droid と π0.5-Droid の比較。下段は Dexmal-Mirror 上での DM0.5 と DM0 の比較。縦軸は成功率を示す。*

DM0.5 は、ほとんどのアクションカテゴリとセマンティック制約カテゴリでより良い性能を示します。Franka では「Move」で同等、「Status」制約では劣ります。したがって、利得はすべての指示ではなく、テストされた条件の大部分に対して現れています。比較は各プラットフォーム内にとどめるべきです。ここでのゼロショットとは、未見のタスク構成を指しますが、依然として事前の学習経験に依存しています。

### ファインチューニング能力と実機ロボットマニピュレーション

LIBERO は単腕マニピュレーションのシミュレーションベンチマークです。Spatial、Object、Goal、Long はそれぞれ、空間関係、物体の多様性、タスク目標、長期的シーケンスを強調します。RoboTwin2.0 は双腕マニピュレーションを評価します。Clean はより単純なシーンを用い、Randomized は背景、照明、散乱物、その他の環境条件を変化させ、ドメインランダム化下での実行をテストします。

![公式ファインチューニング結果：LIBERO と RoboTwin2.0 における成功率](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig03-finetuning.png)

*出典：公式ブログの Fine-Tuning Capability。表中の成功率はパーセンテージである。*

4 つの LIBERO スイート全体で、DM0.5 の平均成功率は **99.0%** であり、同じ表における π0.5 の 96.9% を上回ります。RoboTwin2.0 では、DM0.5 は **Clean で 93.6%、Randomized で 93.3%** を達成し、π0.5 の 82.7% と 76.8% と比較して高い値です。これらの結果は、DM0.5 がタスク適応の強力な出発点であることを支持しています。

実機ロボットの RoboChallenge Table30 v2 ベンチマークでは、著者らは評価される各エンボディメントに対して 1 つのマルチタスクポリシーを学習します。全タスク成功率は **43.0%**、全体の Score は **54.42** です。これは別々の指標です。シミュレーションで高いスコアを得ても、ハードウェア上での失敗がなくなるわけではありません。

メモリに関して、ブログでは、ロボットがカップを元の位置に戻したり、人がデモした後にバッテリー配置ルールに従ったりする様子が示されています。カメラ摂動テストでは、手首カメラは固定されたまま、2 台の外部カメラが 9 通りの構成で変化します。各構成につき 10 回の試行が行われ、成功率は 80% から 100% の範囲です。人間による摂動は主に行動デモンストレーションを通じて示されています。

これらの結果はシステム全体を記述したものであり、履歴コンテキスト、推論タスク、軌道アライメントそれぞれの寄与を切り分けてはいません。メモリと人間摂動のデモンストレーションも包括的な定量的コントロールを欠いているため、任意の長期タスクや摂動に対する信頼性を確立するものではありません。

## 結論

**学習中は、エンボディド推論がタスク進行とアクション意図に対する意味的な教師信号を提供し、軌道アライメントがアクション目標を対応付けることで、デモンストレーション由来のタイミングノイズを低減します。実行時には、過去と現在の観測が指示と組み合わさり、Action Expert の連続アクションの条件となります。**

DM0.5 を自分のロボットに適用する際は、まずタスクが本当に過去の観測に依存しているかどうかを判断してください。次に、そのチェックポイントがそれらの観測を受け付けること、そしてアクションインターフェースが自分のハードウェアと一致していることを確認します。対象タスク上で制御された比較を行い、その手法が有効かどうかを判断してください。

</div>
