---
description: "LeRobot のチュートリアルを通して、ACT、π シリーズ、汎用 VLA モデルの中核となる手法を、デモ、学習、デプロイの観点から探ります。"
title: "Physical AI 論文の徹底解説とハンズオン再現"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - ロボットアーム
  - Physical AI
  - コース
  - チュートリアル
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - アーム
  - ロボティクス
  - 論文ディープダイブ
  - ハンズオンデプロイ
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_getting_started
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/robotics/paper_reading_getting_started/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

  <aside className="paper-reading-support" aria-label="Support the open-source project">
    <div>
      <strong>オープンソースで学べる無料コース</strong>
      <p>このコースは完全に無料です。私たちの活動を応援するために、オープンソースのロボットアームにスターを付けてください！</p>
    </div>
    <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">⭐ GitHub で Star を付ける</a>
  </aside>

  <section className="paper-reading-intro" aria-labelledby="paper-reading-title">
    <span className="paper-reading-eyebrow">SEEED STUDIO · AI ROBOTICS</span>
    <h1 id="paper-reading-title">Physical AI 論文の徹底解説とハンズオン再現</h1>
    <p className="paper-reading-lead">最先端の Physical AI 研究を探索し、Seeed のロボットアームを使って主要なモデルとアルゴリズムを分解して理解します</p>
    <p><strong>いつまでも無料で学べるコース</strong>を、SeeedStudio AI Robotics チームが丁寧に開発しました。<strong>商用利用・再現が可能な 100% オープンソースの reBot ロボットアーム</strong>と組み合わせて学び、次世代のロボティクスエキスパートになりましょう！</p>
    <ul className="paper-reading-badges" aria-label="Course features">
      <li>ずっと無料</li>
      <li>100% オープンソース · 商用利用可</li>
      <li>ハンズオン · 再現可能</li>
    </ul>
  </section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ ノーコード · 環境構築不要</span>
    <p className="sensecraft-banner__title">セットアップなしで、1 つのアプリから reBot Arm と LeRobot を実行</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics は、SO-ARM101、reBot Arm 102 + B601-RS および B601-DM 向けの、Seeed のノーコードプラットフォームです。アームを接続し、キャリブレーション、デモ収集、学習、推論実行まで、ガイド付きインターフェースから操作できます — Python 環境もターミナルも不要です。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 ステップのガイド付きワークフロー</li>
      <li>✅ クラウド学習 — ローカル GPU 不要</li>
      <li>✅ Windows / macOS クライアント</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM 対応</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en/download?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">SenseCraft Robotics へ ↗</a>
    <a className="sensecraft-banner__link" href="/ja/sensecraft_robotics/">ソフトウェアガイド</a>
  </div>
</div>

  <div className="paper-reading-directory">
    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-hands-on-title">
      <h2 id="paper-reading-hands-on-title">ハンズオンデプロイ</h2>
      <p>まずはプラットフォームの準備とデータ収集から始め、手順に沿って ACT を学習・デプロイします。その後、ACT から他のポリシーへの切り替え方を学び、さまざまなアルゴリズムの再現ワークフローを段階的に習得します。</p>
      <ol className="paper-reading-directory-list">
        <li><a href="/ja/robotics/paper_reading_hardware_and_teleoperation/">ハードウェア &amp; ソフトウェアセットアップ</a></li>
        <li><a href="/ja/robotics/hands_on_task_design/">タスク設計 &amp; デモ計画</a></li>
        <li><a href="/ja/robotics/hands_on_camera_recording/">マルチビューでのデータ収集</a></li>
        <li><a href="/ja/robotics/hands_on_dataset_quality/">データ品質：構造、同期 &amp; 検証</a></li>
        <li><a href="/ja/robotics/hands_on_act_training/">ACT モデル学習</a></li>
        <li><a href="/ja/robotics/hands_on_act_deployment/">ロボット上でのデプロイ &amp; 性能評価</a></li>
        <li><a href="/ja/robotics/hands_on_algorithm_switching/">ポリシー切り替え &amp; タスク実行</a></li>
      </ol>
    </section>

    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-papers-title">
      <h2 id="paper-reading-papers-title">論文ディープダイブ</h2>
      <p>トピックごとに論文を読み進め、基本的な模倣学習ポリシーから Vision-Language-Action モデルまでをカバーします。</p>
      <h3>パート 1 · アクションチャンク化 &amp; マルチタスクポリシー</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/ja/robotics/paper_reading_act/">ACT — 低コストな両腕マニピュレーション</a></li>
        <li><a href="/ja/robotics/paper_reading_multi_task_dit/">LBM / MultiTask DiT — マルチタスク事前学習</a></li>
      </ul>
      <h3>パート 2 · 軽量 VLA モデル &amp; 効率的なデプロイ</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/ja/robotics/paper_reading_smolvla/">SmolVLA — 手頃な Vision-Language-Action モデル</a></li>
        <li><a href="/ja/robotics/paper_reading_evo1/">Evo-1 — 軽量 VLA</a></li>
      </ul>
      <h3>パート 3 · π ロボット基盤モデル</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/ja/robotics/paper_reading_pi0/">π₀ — 汎用ロボット制御</a></li>
        <li><a href="/ja/robotics/paper_reading_pi0_fast/">π₀-FAST — 効率的なアクショントークナイズ</a></li>
        <li><a href="/ja/robotics/paper_reading_pi05/">π₀.₅ — オープンワールド汎化</a></li>
      </ul>
      <h3>パート 4 · 汎用 VLA &amp; クロスエンボディメント適応</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/ja/robotics/paper_reading_gr00t_n1/">NVIDIA GR00T — 適応 &amp; ファインチューニング</a></li>
        <li><a href="/ja/robotics/paper_reading_eo1/">EO-1 — インタリーブ型マルチモーダル事前学習</a></li>
        <li><a href="/ja/robotics/paper_reading_wall_oss/">WALL-OSS — エンボディド推論 &amp; ロボット制御</a></li>
        <li><a href="/ja/robotics/paper_reading_lingbot_vla2/">LingBot-VLA 2.0 — クロスエンボディメントアクション &amp; 将来予測</a></li>
        <li><a href="/ja/robotics/paper_reading_dm05/">DM0.5 — 履歴コンテキスト &amp; 軌道アラインメント</a></li>
      </ul>
      <h3>パート 5 · ワールドモデル &amp; 動画アクション学習</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/ja/robotics/paper_reading_vla_jepa/">VLA-JEPA — 動画教師あり学習 &amp; 潜在ワールドモデル</a></li>
        <li><a href="/ja/robotics/paper_reading_lingbot_va/">LingBot-VA — 因果ワールドモデリング &amp; ロボット制御</a></li>
        <li><a href="/ja/robotics/paper_reading_gr00t_2/">GR00T 2 — ワールド・アクションの統合モデリング</a></li>
      </ul>
      <h3>パート 6 · 統一評価 &amp; 研究サマリー</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        更新中
      </span>
    </section>
  </div>

</div>
