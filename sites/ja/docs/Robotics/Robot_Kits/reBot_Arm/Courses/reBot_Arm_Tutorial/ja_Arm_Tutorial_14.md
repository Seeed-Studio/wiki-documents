---
description: "Seeed Physical AI Beginner's Course 第14章 — データセットの構造と品質検査：ディスク上に実際に保存されているもの、4つの品質基準、再生と画像チェック、問題が見つかったときにどうするか。"
title: 第14章 - データセットの構造と品質検査
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Quality Inspection
  - Parquet
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_14
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_14/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第14章 · 理論と実践</span>
    <h2>14. データセットの構造と品質検査</h2>
    <p>
      Seeed Physical AI Beginner's Course 第14章 — ディスク上に実際に保存されているもの、
      4つの品質基準、再生と画像チェック、そして問題が見つかったときにどうするかについて説明します。
      are found.
    </p>
    <div className="hero-actions">
      <a href="#structure">構造</a>
      <a href="#quality">品質</a>
      <a href="#fix">対処</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>14.1 データセットの構造：ディスク上に実際に保存されているもの</span>
    <span>14.2 「良い」データとは何か：4つの品質基準</span>
    <span>14.3 再生と画像チェック</span>
    <span>14.4 問題が見つかったときにどうするか</span>
  </div>
</section>

<RebotCourseNav />

## 14.1 データセットの構造：ディスク上に実際に保存されているもの

<section id="structure" className="section-card">
  <div className="section-title">
    <span>構造</span>
    <h2>14.1 データセットの構造：ディスク上に実際に保存されているもの</h2>
  </div>

第13章で記録したデータセット `seeed_rebot_b601_rs/test` は、ディスク上では次のような構造になっています：

```text
~/.cache/huggingface/lerobot/seeed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← All numeric frames (state / action / timestamps)
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← Overhead camera: 50 videos concatenated
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← Wrist camera: same
└── meta/
    ├── info.json                     ← Info: version, fps, total frames, feature definitions
    ├── stats.json                    ← Stats: mean/variance/extremes per feature
    ├── tasks.parquet                 ← Task description table
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← Profile card for each Episode
```

**3つの保存形式があり、それぞれ1種類のデータ型を担当します：**

| フォーマット | 何を保存するか | 理由 |
| :--- | :--- | :--- |
| MP4 動画 | 両方のカメラからのすべての画像フレーム | 画像はデータセットサイズの 90% 以上を占めるため、動画圧縮によりフレームごとの画像保存と比べて 1～2 桁の容量削減ができる。 |
| Parquet テーブル | フレームごとの数値：状態、行動、タイムスタンプ、インデックス | カラム型ストレージのため、「関節3のすべての値」を読むときにファイル全体を読み込む必要がない。 |
| メタ情報 | 構造定義、統計情報、タスク、エピソードインデックス | ローダーや学習プログラムは、他の2つをどう解釈するかを知るために、まずこれを読む。 |

</section>

## 14.2 「良い」データとは何か：4つの品質基準

<section id="quality" className="section-card">
  <div className="section-title">
    <span>品質</span>
    <h2>14.2 「良い」データとは何か：4つの品質基準</h2>
  </div>

データセットが学習に使える状態かどうかを判断するには、次の4つの観点から確認します：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-14/ch14-01.png" alt="4つの品質基準" />
</div>

</section>

## 14.3 再生と画像チェック

<section id="inspection" className="section-card">
  <div className="section-title">
    <span>チェック</span>
    <h2>14.3 再生と画像チェック</h2>
  </div>

可視化再生には `lerobot-dataset-viz` を、実機ロボットでの再生には `lerobot-replay` を使用します。実機ロボットでの再生では、**エピソード0、途中の1つ、最後の1つ** を使います：最初はワークフローが正しいかを確認し、中間は状態ドリフトを確認し、最後は疲労による品質低下が最も現れやすいからです。

再生中は、次の基準に照らして確認します：

- 両方のカメラ映像が存在し、ブラックスクリーン、アーティファクト、フリーズしたストリームがないこと。
- 画像が鮮明で露出が適切であり、ブロックとグリッパーが常に見えていること。
- 行動が画像と同期していること：グリッパーが閉じる瞬間に、ブロックに触れているべきです。
- 標準的な開始姿勢から始まり、終了条件を満たした状態で終わっていること。

</section>

## 14.4 問題が見つかったときにどうするか

<section id="fix" className="section-card">
  <div className="section-title">
    <span>対処</span>
    <h2>14.4 問題が見つかったときにどうするか：削除、追加収録、または全体の再収録</h2>
  </div>

問題が見つかったときの選択肢は3つあります：

- **一部のエピソードだけが悪い場合**（例：エピソード3と17がピンぼけ） → その2つを削除し、2つ録り足します。
- **バッチ全体に問題がある場合**（例：半分が照明変更されている、バッチ全体で音声と映像がずれている） → つぎはぎ修正はせず、セット全体を録り直します。つぎはぎのデータセットは、データ量が少ないことよりもモデルに悪影響を与えます。

削除に関する2つの事実：削除後、ツールは自動的にデータセットを**再構築**します — エピソード番号は連番に振り直され、`stats.json` も再計算されます。手動で何かを修正する必要はありません。削除でも追加収録でも、ツールがメタ情報を再生成します。

</section>

</div>
