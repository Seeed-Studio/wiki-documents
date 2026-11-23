---
description: "Long-WAM を徹底解説：メカニズム、学習、実験、そして LeRobot v0.7.0 への統合範囲。"
title: "Long-WAM: 予測と制御のために視覚的な履歴を活用する"
hide_title: true
keywords: ["Paper Deep-Dive","Long-WAM","World-Action Models","Long Context","Inverse Dynamics","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_long_wam
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "前提知識：履歴、予測、実行",
    "id": "prerequisites-history-prediction-and-execution",
    "level": 2
  },
  {
    "value": "概要と読み方ガイド",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "なぜ動画による初期化が重要なのか",
    "id": "why-video-initialization-matters",
    "level": 2
  },
  {
    "value": "動画事前学習：過去から変化を予測する",
    "id": "video-pretraining-predicting-change-from-the-past",
    "level": 2
  },
  {
    "value": "アーキテクチャ：過去と未来がコントローラに届くまで",
    "id": "architecture-how-past-and-future-reach-the-controller",
    "level": 2
  },
  {
    "value": "学習時の未来とデプロイ時の未来",
    "id": "training-futures-and-deployment-futures",
    "level": 3
  },
  {
    "value": "ランタイム：履歴コストの削減",
    "id": "runtime-reducing-the-cost-of-history",
    "level": 2
  },
  {
    "value": "実験：履歴・未来・システム効果の切り分け",
    "id": "experiments-separating-history-future-and-systems-effects",
    "level": 2
  },
  {
    "value": "初期化とコンテキスト",
    "id": "initialization-and-context",
    "level": 3
  },
  {
    "value": "未来条件付けと動的タスク",
    "id": "future-conditioning-and-dynamic-tasks",
    "level": 3
  },
  {
    "value": "LeRobot への統合と結果の適用範囲",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "まとめ",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-long_wam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-long_wam-title">Long-WAM: 予測と制御のために視覚的な履歴を活用する</h1>
  <p className="paper-reading-lead">Long-WAM: World-Action Model のコンテキストをスケーリングする</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#video-pretraining-predicting-change-from-the-past">視覚的履歴</a></li>
    <li><a href="#architecture-how-past-and-future-reach-the-controller">予測とアクション</a></li>
    <li><a href="#runtime-reducing-the-cost-of-history">リアルタイム実行</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2610.10528v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>論文を読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/longwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Long-WAM ドキュメント ↗</a>

**LeRobot パラメータ**

- `--policy.path=Efficient-Large-Model/Long-WAM-LIBERO-IDM-LeRobot` は predict-then-act の重みを読み込みます。
- `past_obs_steps=48` は未来のアクションではなく、過去の制御ティック数を数えます。
- `inference_action_horizon=80` と `n_action_steps=10` により、予測長と実行長を区別します。
- キューに入ったアクションを消費している間も含めて、毎制御ティックごとに `select_action` を呼び出します。バージョン管理された統合により、同期推論が検証されています。

</aside>

コンベア上でカップが左に動いている。1 枚の画像で位置は分かるが、複数枚の画像で動きが分かる。別のタスクでは、ロボットはすでに戸棚からカップを取り出しているが、現在の視界は開始時のシーンに似ている。履歴が次のフェーズを特定する。**より多くの履歴を受け取れるようにすれば、ポリシーは自動的にそれを活用するのだろうか？**

## 前提知識：履歴、予測、実行

履歴は意思決定前の観測を含み、予測は未来を扱い、実行はロボットがいつ再計画するかを決める。20 Hz では、48 ティック分の過去制御は 2.4 秒、10 個の実行アクションは 0.5 秒に相当する。どちらも予測ホライズンを決めるものではなく、動画フレームは別のストライドでサンプリングできる。

<figure className="paper-reading-figure" data-reading-figure="long_wam/teaching-history-future-feedback-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/long-wam-history-future-feedback-en-v2.png" alt="観測された履歴、予測された未来、実際の実行フィードバック" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>観測された履歴、予測された未来、実際の実行フィードバック。</strong> 逆動力学モデリング（IDM）バリアントの AI 生成による教育用イラスト。観測された動画履歴と部分的にノイズ除去された未来動画の潜在表現が共同でアクションを条件付けする。未来動画のノイズ除去はゼロでないノイズレベルで停止し、ピクセル復号は行わない。言語とロボット状態による条件付けは分かりやすさのため省略している。実際の実行からの新たな観測だけが観測履歴に入るのであり、予測された未来は過去の観測ではない。</figcaption>
</figure>

## 概要と読み方ガイド

**概要（要約）。** Long-WAM は自己回帰的な動画事前学習を通じて、履歴から未来への依存関係を学習し、その因果構造をアクション適応の際にも保持する。アクションは観測された履歴と予測された未来潜在の両方を利用する。ストリーミングエンコード、非同期実行、ハードウェア最適化により、ランタイムコストを削減する。

**読み方メモ。** 入力ウィンドウが長いことと、履歴を活用できることは別物である。同様に、元のデプロイシステムと同期型の LeRobot アダプタは、検証済みの能力が異なる。

## なぜ動画による初期化が重要なのか

双方向の動画生成は、前後両方のフレームを読むことができる。ロボット制御は、すでに利用可能な観測から次に何が起こるかを推論しなければならない。アクションのファインチューニング時にだけ履歴を追加しても、効果的な時間的依存を必ずしも教えられるわけではない。

標準的な Fast-WAM と異なり、Long-WAM は予測された未来条件を保持する。単にコンテキストバッファを延長するのではなく、動画事前学習の段階で時間的因果性を学習する。

## 動画事前学習：過去から変化を予測する

LongLive2.0-Robot は、共通のアクション空間を必要とせずに、ロボットおよび自我視点の動画を用いて自己回帰的な LongLive-2.0 チェックポイントから継続学習する。ブロック因果アテンションにより、各ターゲットチャンクは本来の過去コンテキストを読むことができる。

Teacher forcing によって複数のチャンクを並列に教師あり学習する。バッファ誤差摂動により、ロールアウト条件に似た履歴誤差からのリカバリを学習させる。履歴が条件を与え、未来動画が教師信号を与える。クリーンな条件画像はノイズ除去のターゲットから除外される。

## アーキテクチャ：過去と未来がコントローラに届くまで

動画クエリは自分自身とそれ以前の視覚ブロックを読み、アクションは決して読まない。アクションクエリは履歴、部分的にノイズ除去された未来潜在、およびアクションチャンク全体を読む。

| IDM ステージ | 入力 | 結果 |
| --- | --- | --- |
| 未来潜在の予測 | 履歴、指示、状態条件 | 予期されるダイナミクス |
| 視覚プレフィル | 観測および予測された潜在 | 層ごとの視覚キーとバリュー |
| アクションのノイズ除去 | 視覚キャッシュ、状態、アクションノイズ | 連続アクションチャンク |
| フィードバック | 新たに観測された実行 | 更新された真の履歴 |

IDM は、視覚変化を予測した後にアクションを推論する。未来の RGB 復号は不要である。論文の V4 設定では、動画ノイズ除去を $\sigma_\star=0.9$ で停止し、その結果得られた視覚キャッシュをアクション生成中に再利用する。

<figure className="paper-reading-figure" data-reading-figure="long_wam/overview">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/overview.png" alt="因果的な動画事前学習から履歴条件付きアクションへ" loading="lazy" />
  <figcaption><strong>因果的な動画事前学習から履歴条件付きアクションへ。</strong> 出典：Long-WAM 論文。下側のパイプラインは、観測された履歴、想像上の未来、アクションエキスパートを区別している。KV キャッシュにより履歴コンテキストが保持される。デプロイ時には、すでに起こった出来事として予測を扱うのではなく、新たな実観測が依然として必要である。</figcaption>
</figure>

### 学習時の未来とデプロイ時の未来

学習ではまず動画フローマッチングを最適化し、その後、前向きにノイズ付加された真の未来潜在に条件付けてアクション学習を行う。デプロイ時には、真の未来の代わりに予測された未来を用いる。アクションパスは視覚キャッシュを切り離し、ビデオ目的が予測器を学習している間に、アクションエキスパートと固有感覚アダプタを更新する。

この勾配の扱いは、動画がアクションを読めないようにする前向きマスクとは異なる。予測された未来情報も、次の制御サイクルにおいて実観測とは区別されたままでなければならない。

## ランタイム：履歴コストの削減

ストリーミング VAE は、履歴全体を再計算するのではなく、到着する観測を逐次的にエンコードする。非同期実行により、ロボットが現在のチャンクを消費している間に、次のチャンクを準備できる。

オーバーラップが $O$ ティック、ティック時間が $\Delta t$ のとき、タイムリーな引き継ぎには次が必要となる。

$$
T_{\mathrm{ready}}\leq O\Delta t.
$$

たまに締切に間に合わないだけでも、平均推論が高速であっても待ち時間が発生しうる。RTX 5090 上で報告されている 107.4 ms には、論文の最適化された構成における未来潜在の予測が含まれており、あらゆるデバイスやアダプタでのレイテンシを意味するものではない。

<figure className="paper-reading-figure" data-reading-figure="long_wam/streaming-execution">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/streaming-execution.png" alt="ストリーミングおよび全ウィンドウエンコードによる非同期ハンドオフ" loading="lazy" />
  <figcaption><strong>ストリーミングとフルウィンドウ符号化による非同期ハンドオフ。</strong> 出典：Long-WAM 論文。ストリーミングでは到着した観測を順次符号化する一方、フルウィンドウ符号化ではハンドオフを遅延させます。どちらのスケジュールも、名目上のトリガーストライドとオーバーラップは同一です。この図はスケジューリング待ち時間の短縮を示しており、個別に測定された成功率向上を示すものではありません。</figcaption>
</figure>

## 実験：履歴・未来・システム効果の分離

### 初期化とコンテキスト

この論文では、双方向、一般的な自己回帰、およびロボットドメイン向け自己回帰のビデオ初期化を比較しています。長コンテキスト RoboCasa における GR-1 の性能は 78.7% に達します。自己回帰初期化は履歴からより大きな恩恵を受ける一方で、双方向初期化は同程度の純改善を得られていません。有用な履歴長はタスクに依存します。

<figure className="paper-reading-figure" data-reading-figure="long_wam/context-scaling">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/context-scaling.png" alt="Context scaling under different video initializations" loading="lazy" />
  <figcaption><strong>異なるビデオ初期化におけるコンテキストスケーリング。</strong> 出典：Long-WAM 論文。離散的なコンテキスト設定は等間隔でプロットされています。ロボット因果初期化は、LIBERO-Long では 2.4 秒、RoboCasa では 19.2 秒でピークに達します。ウィンドウを長くしても成功率は継続的には向上せず、双方向初期化は同じ利得を得られていません。</figcaption>
</figure>

### 未来条件付けと動的タスク

| 論文の構成 | LIBERO 平均 | LIBERO-Long | RoboTwin 平均 |
| --- | ---: | ---: | ---: |
| 未来予測なし | 97.3% | 94.5% | 92.0% |
| 共同コデノイジング | 97.8% | 95.8% | 93.6% |
| IDM | 99.5% | 99.5% | 94.4% |

これらは異なるベンチマークにおける成功率です。動的データでのファインチューニング後、DOMINO の成功率は 34.9% であり、静的マニピュレーションのスコアを大きく下回ります。LIBERO の結果がほぼ飽和していても、動的制御が解決されたことを意味するわけではありません。

実機の Unitree G1 と YAM プラットフォーム上で、この論文は動的タスクと長時間タスクの両方を検証しています。動的なカップ積み上げタスクでは、Long-WAM は 20 試行中 19 回成功したのに対し、その設定における π0.5 と Fast-WAM は成功ゼロでした。複合タスク実験では、さらに別個の高レベルプランナーを使用しており、その結果は統合システム全体のものです。

## LeRobot への統合と結果の境界

バージョン 0.7.0 は、ネイティブな IDM/CoD チェックポイント、ファインチューニング、および同期推論をサポートします。LIBERO リリースでは、2 台の 224×224 カメラ、7 次元アクション、8 次元状態、および P48 の履歴を使用します。アクションがキューに残っている間も、各制御ティックごとに新しい観測を供給してください。

文書化されている IDM チェックポイントは、各スイート 500 エピソードで 99.4%、99.8%、97.8%、99.0% を記録し、全体では 99.00% です。CoD の平均は 98.45% です。これらはアダプターでの結果であり、論文中の 99.5% とは別物です。元の `model.pt` バンドルは、ネイティブな LeRobot チェックポイントディレクトリではありません。

`reset()` は履歴とキューにあるアクションの両方をクリアします。`past_obs_steps` を変更するだけでは、コンテキストスケーリングの訓練にはなりません。汎用的な非同期/RTC はこのアダプターでは検証されておらず、元プロジェクトの最適化された実行は別個の機能として残されています。

## 結論

Long-WAM は、行動と結び付ける前に、履歴から予測することを学習します。ストリーミングと非同期実行により、この経路はより実用的になります。その利得は、初期化、タスクの記憶要件、未来条件付け、および使用されるデプロイメントシステムに依存します。

</div>
