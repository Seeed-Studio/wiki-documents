---
description: "SO-ARM Physical AI ビギナーコース第 7 章 — Seeed_RoboController サーボデバッグツールを使ってサーボ状態の検出、サーボ ID の再設定、ニュートラル値の書き込み、個別サーボ制御とステータス読み取りを行います。"
title: 第 7 章 - サーボデバッグツールの使い方
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - サーボ
  - デバッグ
  - サーボ調整
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_7
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 2 · 第 7 章 · 実践</span>
    <h2>7. サーボデバッグツールの使い方</h2>
    <p>
      Seeed_RoboController サーボデバッグツールを使ってサーボ状態の検出、サーボ ID の再設定、ニュートラル値の書き込み、個別サーボ制御と電圧・温度・速度・負荷・電流の読み取りを行います。
    </p>
    <div className="hero-actions">
      <a href="#install-tool">インストール</a>
      <a href="#check-servos">サーボ確認</a>
      <a href="#recalibrate-ids">ID 修正</a>
      <a href="#neutral">ニュートラル値</a>
    </div>
  </div>
</section>

## 7.1 このツールの用途

<section id="intro" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>7.1 このツールの用途</h2>
  </div>

サーボデバッグツール（[Seeed_RoboController](https://github.com/Seeed-Projects/Seeed_RoboController)）は、LeRobot / SO-ARM ロボットアーム向けのグラフィカルデバッグツールです。このツールで次のことができます：

- サーボ状態の素早い検出；
- 重複・誤ったサーボ ID の再設定；
- ニュートラル（中間位置）値の書き込み；
- 個別サーボの制御と、電圧・温度・速度・負荷・電流の読み取り；
- 高度なサーボレジスタデータ・ボーレート・工場出荷時リセットの管理。

**Windows・Ubuntu・Mac** で動作し、アームの動作がおかしいときの最初の頼みの綱です — 再キャリブレーションや再組み立て、サーボ故障の断定の前に、まずこれで確認しましょう。

</section>

## 7.2 インストール

<section id="install-tool" className="section-card">
  <div className="section-title">
    <span>インストール</span>
    <h2>7.2 インストール</h2>
  </div>

**1. リポジトリをクローン：**

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

**2. 依存関係をインストール。** 第 5 章の LeRobot conda 環境内にインストールするのが推奨です。スタンドアロンにしたい場合は、システム Python を汚さないよう新しい仮想環境を作ってください：

```bash
pip install -r requirements.txt
```

**3. 環境を確認。** `[OK] Environment check passed` と出れば準備完了です：

```bash
python setup.py
```

**4. ツールを起動：**

```bash
python -m src.gui.factory_calibration_tool
```

対話的なポート選択が始まります。（任意）ポートが占有されている場合は手動指定：

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</section>

## 7.3 サーボが正常か確認

<section id="check-servos" className="section-card">
  <div className="section-title">
    <span>検出</span>
    <h2>7.3 サーボが正常か確認</h2>
  </div>

まずシリアルポート選択で対応するポートを選びます。サーボ 1〜6 がすべて検出されれば、サーボは正常に認識され基本機能が動いています。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="6 つのサーボがすべて検出" />
</div>

サーボが未検出と表示される場合：

1. 配線が正しいか確認し、ページを閉じて開き直します；
2. それでも未検出なら、サーボ ID が重複している可能性があります — 例えばアームのキャリブレーションコマンドを誤ってサーボ個別のキャリブレーションとして実行した場合など。この場合、それらのサーボ ID を再設定します（次節）。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="サーボ未検出" />
</div>

</section>

## 7.4 サーボ ID の再設定

<section id="recalibrate-ids" className="section-card">
  <div className="section-title">
    <span>ID 修正</span>
    <h2>7.4 サーボ ID の再設定</h2>
  </div>

第 4 章の通り：全サーボがバスを共有するため、ID の書き込みはその ID を持つ**すべて**のサーボに影響します。そのため、他のサーボをすべて外し、1 個ずつ再設定する必要があります。

**ステップ 1 —— サーボ間のワイヤハーネスを外す**。グリッパからベースに向かって順に：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="サーボ 6 と 5 の間を切断" />
</div>

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="サーボ 1 と制御ボードの間を切断" />
</div>

**ステップ 2 —— 1 個ずつ接続。** 制御ボードには 1 個のサーボだけを接続します。例えば下図のように 6 番サーボをドライバーボードに接続します — 他のサーボも同様なので、アームを分解せずに ID を直せます。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="単一サーボを制御ボードに接続" />
</div>

**ステップ 3 —— ID を書き戻す。** 下の例では 4 番サーボだけが認識されていますが、実際に接続しているのは 6 番 — ID が間違っており、6 に戻す必要があります。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="誤った ID を検出" />
</div>

4 番サーボをクリックし、ID を 6 に変更します。他のサーボも同様に繰り返します。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="サーボ ID を書き換え" />
</div>

サーボ ID の修正が終わったら、ワイヤを 1 本ずつ挿し戻して完了です。

</section>

## 7.5 サーボにニュートラル値を書き込む

<section id="neutral" className="section-card">
  <div className="section-title">
    <span>ニュートラル</span>
    <h2>7.5 サーボにニュートラル値を書き込む</h2>
  </div>

ニュートラル（中間）位置は、後のすべてのキャリブレーションの基準となる「まっすぐ」の姿勢です — 内部的には値 2048 に対応します。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="参考ニュートラル姿勢" />
</div>

1. **シリアルポート ニュートラルテスト**をクリックし、アームのニュートラル位置が上の参考とおおむね一致するか確認します。一致していればニュートラル値は正常です；
2. 一致しない場合は、アームをニュートラル位置に動かして**シリアルポート ニュートラルキャリブレーション**をクリック — 現在位置がニュートラル値としてサーボに書き込まれます；
3. **シリアルポート モーター無効化**をクリックするとアームは脱力します — 手で支えてください。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="ニュートラルテストとキャリブレーションのボタン" />
</div>

:::tip
これは LeRobot のエラー `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)` の解決策でもあります：このメッセージはサーボのゼロオフセット異常を意味します。ここで中間位置キャリブレーションを行い（または同リポジトリの `servo_middle_calibration.py` スクリプトを使用）、第 10 章でアーム全体のキャリブレーションをやり直してください。
:::

</section>

## 7.6 個別サーボ制御とステータス

<section id="single-servo" className="section-card">
  <div className="section-title">
    <span>制御</span>
    <h2>7.6 個別サーボ制御とステータス</h2>
  </div>

ページ上の全サーボはデフォルトでニュートラル位置にあります。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="全サーボがニュートラル" />
</div>

**1. トルクを有効にして 1 個のサーボを動かす。** ワンクリックで全トルクを有効化、または単一サーボを有効化し、スライダーで動かします。**ゆっくり**動かすこと：プリント部品が特定の位置で物理的に干渉するため、スライダーを 0 や最大まで動かさないでください。トルクを無効にするとアームは脱力します。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" alt="トルク有効化後にサーボが移動" />
</div>

**2. サーボ単位のメンテナンス。** 単一サーボのニュートラルキャリブレーションや、内部のニュートラル・最大・最小位置のクリアができます。

**3. サーボステータスパネルの読み方：**

| 項目 | 意味 |
| :--- | :--- |
| Pos | 位置 |
| V | 電圧 |
| T | 温度 |
| Spd | 速度 |
| Load | トルク |
| Cur | 電流 |
| Mov | 動作状態 |
| Model | 型番、権限 |
| Status | 正常 / 過電流 / 過負荷 |

長時間のテレオペレーション後、フォロワーの温度が負荷とともに上がるのは正常です。静止時に `過電流` `過負荷` が続く場合は、関節の引っかかりかニュートラル値の誤りの可能性が高いです。

</section>

## 7.7 高度なツール

<section id="advanced" className="section-card">
  <div className="section-title">
    <span>高度</span>
    <h2>7.7 高度なツール</h2>
  </div>

さらに深いデバッグでは、生のレジスタデータの読み書き、ボーレートの変更、工場出荷時設定への復元が可能です。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="高度なツールパネル" />
</div>

:::warning
レジスタへの書き込みや工場リセットは、闇雲に行うとサーボ設定を使えなくする恐れがあります。ガイド付き機能（7.3〜7.6 節）を優先し、生レジスタは意味を明確に把握している場合のみ触ってください。
:::

</section>

## 7.8 まとめ

<section id="summary" className="section-card">
  <div className="section-title">
    <span>まとめ</span>
    <h2>7.8 まとめ</h2>
  </div>

- サーボデバッグツールはサーボバスのメンテナンスコンソール：検出、ID 修正、ニュートラル設定、単独制御、ステータス読み取り；
- サーボ ID は常に「接続した 1 個のサーボ」ずつ書き込みます；
- 正しいニュートラル値（2048）は、その後のすべてのキャリブレーションの基盤です。

両アームの組み立てが済み、全サーボの検証が終われば、ステージ 2 は完了です。ステージ 3 は「ロボットアームはなぜ学習を必要とするのか」の説明から始まり、続いて SO-ARM でデータ収集とポリシー訓練を行います。

</section>

</div>
