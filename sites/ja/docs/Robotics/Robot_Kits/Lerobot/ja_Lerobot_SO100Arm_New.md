---
description: このWikiでは、SO-ARM100 / SO-ARM101 向けに、組み立て、キャリブレーション、テレオペレーション、カメラ、データセット記録、学習、評価、およびデプロイのヒントまで含めた、完全な LeRobot ワークフローを提供します。
title: LeRobot による SO-ARM10x 入門
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 3/11/2026
  author: ZhangJiaQuan
createdAt: '2025-06-05'
updatedAt: '2026-08-10'
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/ja/lerobot_so100m_new/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LeRobot による SO-ARM100 および SO-ARM101 ロボットアーム入門

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM10x × LeRobot</span>
    <h2>組み立てとキャリブレーションから、データセット収集、学習、実機デプロイまで</h2>
    <p>
      このWikiでは、LeRobot における SO-ARM100 / SO-ARM101 の一連のワークフローについて、
      ハードウェアセットアップ、サーボ設定、アームキャリブレーション、テレオペレーション、カメラ連携、
      データセット記録、可視化、リプレイ、ポリシー学習、評価、およびデプロイのヒントまで順を追って解説します。
    </p>
    <div className="hero-actions">
      <a href="#quick-path">学習パスを見る</a>
      <a href="#install-lerobot">LeRobot をインストール</a>
      <a href="#record-dataset">データセットを記録</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推奨リーディングパス</strong>
    <span>初めてのユーザー：仕様、電源ルール、サーボ設定から始めてください。</span>
    <span>完成品アームユーザー：アーム全体のキャリブレーションとテレオペレーションに進んでください。</span>
    <span>既存の LeRobot ユーザー：カメラ、データセット記録、学習、FAQ へ直接進んでください。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：モーションプログラムを実行する前にロボットアームの作業空間を必ず片付けてください</strong>
    <p>
      ロボットアームを動かす可能性のあるプログラムを実行する前に、作業空間の半径1メートル以内から、
      貴重品、壊れやすい物、工具、ケーブル、および無関係な物体を取り除いてください。デバッグや動作中は、
      人がアームの可動範囲に近づかないようにしてください。
    </p>
    <ul>
      <li>アームの電源が入っている状態では、関節、モーター、リンク、グリッパー、エンドツールには触れないでください。</li>
      <li>サーボ設定、キャリブレーション、テレオペレーション、データセット記録、リプレイ、ポリシー評価を行う前に、アームがしっかり固定されていることを確認してください。</li>
      <li>少なくとも1メートルの安全距離を保ち、周囲の人にアームが突然動く可能性があることを理解してもらってください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断などが発生した場合は、直ちにプログラムを停止し、電源を切ってから点検してください。</li>
      <li>サーボケーブル、USB ケーブル、電源コネクタ、モーター制御ボードのケーブルを抜き差しする前には、必ず電源を切ってください。</li>
    </ul>
  </div>
</div>

{/* Markdown headings are intentionally kept outside visual cards so Docusaurus can generate the right-side table of contents. */}

<nav className="doc-nav" aria-label="SO-ARM10x LeRobot quick navigation">
  <a href="#quick-path">学習パス</a>
  <a href="#overview">概要</a>
  <a href="#specifications">仕様</a>
  <a href="#install-lerobot">インストール</a>
  <a href="#setup-motors-assembly">モーター</a>
  <a href="#calibration">キャリブレーション</a>
  <a href="#teleoperation">テレオペ</a>
  <a href="#camera">カメラ</a>
  <a href="#record-dataset">データセット</a>
  <a href="#training">学習</a>
  <a href="#faq">FAQ</a>
</nav>

## 推奨学習パス

<section id="quick-path" className="section-card course-path-section">
  <div className="section-title">
    <span>ステップ概要</span>
    <h2>実際のデバッグワークフローに沿って一歩ずつ進める</h2>
    <p>SO-ARM10x を初めてセットアップする場合は、テレオペレーション、カメラ、データセット、学習、評価に進む前に、ハードウェア準備、環境構築、キャリブレーションを完了してください。</p>
  </div>

  <div className="course-path-grid">
    <div className="course-path-item"><span className="course-index">1</span><div className="course-path-copy"><strong>キットを理解する</strong><p>SO-ARM100 / SO-ARM101 のバージョン、モータータイプ、電圧、BOM を確認します。</p></div><span className="course-tag">準備</span></div>
    <div className="course-path-item"><span className="course-index">2</span><div className="course-path-copy"><strong>LeRobot をインストール</strong><p>Miniforge、検証済みの Seeed LeRobot リポジトリ、ffmpeg、PyTorch、カメラ依存パッケージをセットアップします。</p></div><span className="course-tag">環境</span></div>
    <div className="course-path-item"><span className="course-index">3</span><div className="course-path-copy"><strong>モーターを設定して組み立てる</strong><p>サーボ ID とボーレートを設定し、リーダーアームとフォロワーアームを組み立てます。</p></div><span className="course-tag">ハードウェア</span></div>
    <div className="course-path-item"><span className="course-index">4</span><div className="course-path-copy"><strong>キャリブレーションとテレオペ</strong><p>両方のアームをキャリブレーションし、リーダーからフォロワーへの制御チェーンが安定していることを確認します。</p></div><span className="course-tag">制御</span></div>
    <div className="course-path-item"><span className="course-index">5</span><div className="course-path-copy"><strong>カメラを追加してデータを記録</strong><p>OpenCV、RealSense、Orbbec などのカメラを接続し、クリーンで再現性のあるエピソードを記録します。</p></div><span className="course-tag">データ</span></div>
    <div className="course-path-item"><span className="course-index">6</span><div className="course-path-copy"><strong>ポリシーを学習・評価</strong><p>まず ACT から始め、その後 SmolVLA、Pi0、Pi0.5、GR00T、PEFT、非同期推論を試してみてください。</p></div><span className="course-tag">AI</span></div>
  </div>
</section>

## 概要

<section id="overview" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>プロジェクト紹介</h2>
    <p>SO-ARM10x は、オープンソースの低コストロボットアームと LeRobot エコシステムを組み合わせ、データ収集、模倣学習、実機デプロイを実現します。</p>
  </div>

:::tip
このチュートリアルは最新の [LeRobot](https://huggingface.co/docs/lerobot/index) に対応するよう更新されています。以前のバージョンを表示するには、[こちら](https://wiki.seeedstudio.com/ja/lerobot_so100m/)をクリックしてください。
:::

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) は、[TheRobotStudio](https://www.therobotstudio.com/) によって立ち上げられた、完全オープンソースのロボットアームプロジェクトです。フォロワーアームとリーダーアームの両方を含み、詳細な3Dプリント用ファイルと操作ガイドが提供されています。[LeRobot](https://github.com/huggingface/lerobot/tree/main) は、実世界ロボティクス向けの PyTorch モデル、データセット、ツールを提供し、模倣学習とポリシーデプロイのハードルを下げます。

<div className="video-container">
  <iframe
    loading="lazy"
    width="900"
    height="600"
    src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd&autoplay=0&mute=1"
    title="SO-ARM10x LeRobot overview video"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

SO-ARM10x と reComputer Jetson AI ロボティクスキットを組み合わせることで、高精度なロボットアーム制御と AI コンピューティングプラットフォームを両立できます。Jetson Orin や AGX Orin と LeRobot フレームワークを組み合わせることで、教育、研究、産業オートメーション実験に活用できます。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM10x kit" />
</div>

<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">
    今すぐ入手 🖱️
  </a>
</div>

:::caution
Seeed Studio はキットのハードウェア品質に責任を負います。ソフトウェアチュートリアルは、可能な限り公式の LeRobot ドキュメントに沿う形で作成されています。ソフトウェアや依存関係に関する問題が解決できない場合は、このページ末尾の FAQ を確認し、[LeRobot GitHub リポジトリ](https://github.com/huggingface/lerobot) または [LeRobot Discord チャンネル](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

<div className="video-container">
  <iframe
    loading="lazy"
    width="900"
    height="600"
    src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc&autoplay=0&mute=1"
    title="SO-ARM10x project video"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

</section>

## 主な特長

<section id="features" className="section-card">
  <div className="section-title">
    <span>特長</span>
    <h2>主な特長</h2>
    <p>SO-ARM10x は、オープンソース学習、低コストロボティクス、LeRobot 連携、NVIDIA へのデプロイに重点を置いています。</p>
  </div>

  <div className="feature-grid">
    <div><strong>オープンソースかつ低コスト</strong><span>TheRobotStudio の SO-ARM プロジェクトに基づくオープンソースのロボットアームソリューションです。</span></div>
    <div><strong>LeRobot との統合</strong><span>LeRobot でのテレオペレーション、データセット記録、学習、実機評価のために設計されています。</span></div>
    <div><strong>豊富な学習リソース</strong><span>組み立て、キャリブレーション、テスト、データセット、学習、デプロイに関するガイドを含みます。</span></div>
    <div><strong>NVIDIA 対応</strong><span>reComputer Mini J4012 Orin NX 16GB などのプラットフォームと組み合わせてデプロイできます。</span></div>
    <div><strong>マルチシナリオ応用</strong><span>教育、研究、自動化デモ、ロボティクス学習などに適しています。</span></div>
  </div>
</section>

## 新着情報

<section id="updates" className="section-card">
  <div className="section-title">
    <span>更新情報</span>
    <h2>SO-ARM101 の新機能</h2>
    <p>SO-ARM101 では、配線、リーダーアームのギア比、リアルタイム追従動作が改善されています。</p>
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>配線の最適化</strong><span>SO-ARM100 と比較して、SO-ARM101 では配線が改善され、ジョイント3の断線問題を回避しています。新しい配線ルートでは、関節の可動範囲が制限されません。</span></div>
    <div className="notice-card"><strong>リーダーのギア比アップデート</strong><span>リーダーアームには最適化されたギア比のモーターが使用されており、性能が向上し、外部ギアボックスが不要になりました。</span></div>
    <div className="notice-card"><strong>リアルタイム追従</strong><span>リーダーアームはフォロワーアームをリアルタイムで追従でき、人間が介入してロボットの動作を修正できる将来のポリシーワークフローに役立ちます。</span></div>
  </div>
</section>


## 仕様

<section id="specifications" className="section-card">
  <div className="section-title">
    <span>仕様</span>
    <h2>仕様</h2>
    <p>SO-ARM100 および SO-ARM101 のモーター、電源、通信、制御仕様を確認します。</p>
  </div>

<details className="content-details">
<summary>SO-ARM10x の仕様を表示</summary>

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>リーダーアーム</td>
      <td rowSpan="2">全ての関節に 1:345 のギア比を持つ 12 個の ST-3215- C001 (7.4V) モーター</td>
      <td rowSpan="2">全ての関節に 1:345 のギア比を持つ 12 個の ST-3215-C018/ST-3215-C047 (12V) モーター</td>
      <td colSpan="2">
        関節 2 のみ用に 1:345 のギア比を持つ 1 個の ST-3215- C001 (7.4V) モーター<br />
        関節 1 と 3 用に 1:191 のギア比を持つ 2 個の ST-3215-C044 (7.4V) モーター<br />
        関節 4、5、およびグリッパー（関節 6）用に 1:147 のギア比を持つ 3 個の ST-3215-C046 (7.4V) モーター
      </td>
    </tr>
    <tr>
      <td>フォロワーアーム</td>
      <td colSpan="2">SO-ARM100 と同じ</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A（フォロワーアーム）<br />
        5.5 mm × 2.1 mm DC 5 V 4 A（リーダーアーム）
      </td>
    </tr>
    <tr>
      <td>角度センサー</td>
      <td colSpan="4">12 ビット磁気エンコーダ</td>
    </tr>
    <tr>
      <td>推奨動作温度</td>
      <td colSpan="4">0 °C ～ 40 °C</td>
    </tr>
    <tr>
      <td>通信</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>制御方法</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

Arm Kit バージョンを購入した場合、両方の電源は 5V です。Arm Kit Pro バージョンを購入した場合は、リーダーロボットアームのキャリブレーションおよびすべての手順には 5V 電源を使用し、フォロワーロボットアームのキャリブレーションおよびすべての手順には 12V 電源を使用してください。

:::

</details>

</section>

## 部品表 (BOM)

<section id="bom" className="section-card">
  <div className="section-title">
    <span>BOM</span>
    <h2>部品表 (BOM)</h2>
    <p>キットに含まれるサーボ、モーター制御ボード、ケーブル、電源、クランプ、およびオプションの 3D プリント部品を確認します。</p>
  </div>

<details className="content-details">
<summary>部品表を表示</summary>

| 部品 | 数量 | 同梱|
|--|--|--|
|  サーボモーター | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-C ケーブル 2 本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ| 4 | ✅ |
| アームの 3D プリント部品 | 1 | オプション |

</details>

</section>

## 3D プリントガイド

<section id="3d-printing" className="section-card">
  <div className="section-title">
    <span>3D プリント</span>
    <h2>3D プリントガイド</h2>
    <p>アームのキット版を組み立てる前に、適切な STL ファイルとプリント設定を選択します。</p>
  </div>

<details className="content-details">
<summary>3D プリントパラメータを表示</summary>

:::caution
SO101 の公式アップデートに伴い、SO100 は今後サポートされず、公式に従ってソースファイルは削除されますが、ソースファイルは引き続き私たちの [Makerworld](https://makerworld.com/zh/models/908660) で見つけることができます。ただし、以前に SO100 を購入したユーザーについては、チュートリアルとインストール方法は引き続き互換性があります。SO101 のプリントは、SO100 のモーターキットの取り付けと完全に互換性があります。
:::

**ステップ 1: プリンタを選択する**

提供されている STL ファイルは、多くの FDM プリンタでそのまま印刷できます。以下はテスト済みで推奨される設定ですが、他の設定でも動作する場合があります。

- 材料: PLA+
- ノズル径と精度: 0.4mm ノズル径で 0.2mm レイヤー高さ、または 0.6mm ノズルで 0.4mm レイヤー高さ。
- インフィル密度: 15%  

**ステップ 2: プリンタをセットアップする**

- プリンタがキャリブレーションされており、プリンタ固有の手順に従ってベッドレベルが正しく設定されていることを確認します。
- プリントベッドを清掃し、ほこりや油分がないことを確認します。水やその他の液体でベッドを清掃した場合は、ベッドを乾かしてください。
- プリンタが推奨している場合は、標準的なスティックのりを使用し、ベッドのプリント領域全体に薄く均一な層を塗布します。ダマやムラのある塗布は避けてください。
- プリンタ固有の手順に従ってプリンタフィラメントをロードします。
- プリンタ設定が上記の推奨設定と一致していることを確認します（ほとんどのプリンタには複数の設定があるため、最も近いものを選択してください）。
- サポートは「どこでも」に設定しますが、水平方向から 45 度を超える傾斜は無視します。
- 水平軸を持つネジ穴の中にはサポートがないようにします。

**ステップ 3: 部品を印刷する**

リーダーまたはフォロワー用のすべての部品は、簡単に 3D プリントできるよう 1 つのファイルにまとめられており、サポートを最小限に抑えるために z 方向が上になるよう正しく向きを揃えています。

- ベッドサイズが 220mm×220mm（Ender など）のプリンタの場合、次のファイルを印刷します:
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- ベッドサイズが 205mm × 250mm（Prusa/Up など）のプリンタの場合:
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

**ステップ 4: ソフトグリッパーを印刷する（オプション）**

ロボットアームで柔らかい物体、壊れやすい物体、または不規則な形状の物体を把持できるようにしたい場合は、デフォルトの剛性グリッパーの代わりにソフトグリッパーを印刷できます。プリントファイルは [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) リポジトリで入手できます。

印刷材料の指示:

- 2 本のグリッパーフィンガー: **TPU** 材料で印刷
- その他の部品: **PLA** 材料で印刷

</details>

</section>

## 初期システム環境

<section id="environment" className="section-card">
  <div className="section-title">
    <span>環境</span>
    <h2>初期システム環境</h2>
    <p>インストール前に、Ubuntu、Jetson、CUDA、Python、PyTorch、および Torchvision の要件を確認します。</p>
  </div>

**Ubuntu x86 の場合:**

- Ubuntu 22.04  
- CUDA 12 以上  
- Python 3.10  
- Torch 2.6 以上  

**Jetson Orin の場合:**

- Jetson JetPack 6.0 および 6.1、JetPack 6.2 はまだサポートされていません
- Python 3.10  
- Torch 2.3 以上

</section>

## LeRobot のインストール

<section id="install-lerobot" className="section-card">
  <div className="section-title">
    <span>ステップ 1</span>
    <h2>LeRobot のインストール</h2>
    <p>Miniforge、検証済みの Seeed LeRobot リポジトリ、ffmpeg、PyTorch、およびハードウェア固有の依存関係をインストールします。</p>
  </div>

pytorch や torchvision などの環境は、使用している CUDA に基づいてインストールする必要があります。

<Tabs defaultValue="Jetson">

<TabItem value="Jetson" label="Jetson">

1. Miniforge をインストールします:

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Follow the prompts by entering 'yes' or pressing Enter. Once the installation is complete:
source ~/.bashrc`}
</CodeBlock>

2. lerobot 用の新しい conda 環境を作成して有効化します

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. Lerobot をクローンします:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. miniforge を使用している場合、環境内に ffmpeg をインストールします:

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
これは通常、libsvtav1 エンコーダでコンパイルされた、プラットフォーム向けの ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダを確認）、次のことができます:

- 【任意のプラットフォーム】次のコマンドを使用して、明示的に ffmpeg 7.X をインストールします:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- 【Linux のみ】ffmpeg のビルド依存関係をインストールし、libsvtav1 を有効にしてソースから ffmpeg をコンパイルし、`which ffmpeg` を使ってインストールに対応する ffmpeg バイナリを使用していることを確認します。

このようなエラーが発生した場合は、このコマンドも使用できます。

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="" />
</div>

:::

5. feetech モーター用の依存関係付きで LeRobot をインストールします:

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Jetson Jetpack 6.0 以降のデバイス向け（このステップを実行する前に、必ずステップ 5 で [Pytorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) をインストールしてください）:

<CodeBlock language="bash">
{`conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision`}
</CodeBlock>

7. Pytorch と Torchvision を確認する

pip で lerobot 環境をインストールすると、元の Pytorch と Torchvision がアンインストールされ、CPU 版の Pytorch と Torchvision がインストールされるため、Python で確認を行う必要があります。

<CodeBlock language="python">
{`python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python`}
</CodeBlock>

出力結果が `False` の場合、現在の環境は CPU 版の PyTorch を使用しています。Jetson 上で GPU 対応の PyTorch と Torchvision が必要な場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) に従ってインストールしてください。GPU での学習や推論が必要な環境では、最終的な確認結果が `True` である必要があります。

</TabItem>

<TabItem value="X86" label="X86 Ubuntu 22.04">

1. Miniforge をインストールします:

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Once the installation is complete:
source ~/.bashrc
# Initialize all shells
conda init --all`}
</CodeBlock>

2. lerobot 用の新しい conda 環境を作成して有効化します

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. Lerobot をクローンします:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. miniforge を使用している場合は、環境内に ffmpeg をインストールします:

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
通常、これは libsvtav1 エンコーダーでコンパイルされた、プラットフォーム向けの ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダーを確認）、次のことができます:

- 【任意のプラットフォーム】明示的に ffmpeg 7.X をインストールします:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- 【Linux のみ】ffmpeg のビルド依存関係をインストールし、libsvtav1 対応で ffmpeg をソースからコンパイルし、`which ffmpeg` を使ってインストールしたものに対応する ffmpeg バイナリを使用していることを確認します。

このようなエラーが発生した場合も、このコマンドを使用できます。

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="" />
</div>

:::

5. feetech モーター用の依存関係付きで LeRobot をインストールします:

:::tip
新しく構成した Ubuntu 22.04 VM、特に最小インストールでは、`gcc` やその他の C ビルドツールがデフォルトでインストールされていない場合があります。その場合、feetech 依存関係付きで LeRobot をインストールしようとすると、`evdev` Python パッケージをビルドできないため失敗することがあります。

まず基本的なビルドツールをインストールします:

<CodeBlock language="bash">
{`sudo apt update
sudo apt install build-essential`}
</CodeBlock>

インストール後、LeRobot のインストールコマンドを再実行してください。
:::

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Pytorch と Torchvision を確認する

pip で lerobot 環境をインストールすると、元の Pytorch と Torchvision がアンインストールされ、CPU 版の Pytorch と Torchvision がインストールされるため、Python で確認を行う必要があります。

<CodeBlock language="python">
{`python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python`}
</CodeBlock>

出力結果が `False` の場合、現在の環境は CPU 版の PyTorch を使用しています。GPU での学習や推論が必要な場合は、[公式 PyTorch ガイド](https://pytorch.org/index.html) に従って、CUDA バージョンに対応した Pytorch と Torchvision をインストールしてください。NVIDIA GPU を搭載し、GPU アクセラレーションが必要な環境では、最終的な確認結果が `True` である必要があります。

:::tip

注意: NVIDIA RTX 50 シリーズ GPU には、CUDA 12.8 以上のプレビュー版が必要です。

ダウンロードコマンドは次のとおりです:

<CodeBlock language="bash">
{`pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128`}
</CodeBlock>

:::

</TabItem>

</Tabs>

</section>

## モーターを設定してアームを組み立てる

<section id="setup-motors-assembly" className="section-card">
  <div className="section-title">
    <span>Step 2</span>
    <h2>モーターを設定してアームを組み立てる</h2>
    <p>サーボ ID とボーレートを設定し、配線と電源を確認してから、リーダーアームとフォロワーアームを組み立てます。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>
        ロボットアームの作業空間から 1 メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、電源とケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

:::tip
完成品のロボットアームを購入した場合は、キャリブレーションのセクションまでスキップしてください。
:::
<details className="content-details">

<summary> キット版の場合は、以下の手順に従ってください </summary>

SO-ARM101 のサーボキャリブレーションおよび初期化プロセスは、方法とコードの両方において SO-ARM100 と同じです。ただし、SO-ARM101 のリーダーアームの最初の 3 つの関節のギア比は SO-ARM100 とは異なるため、それらを区別して慎重にキャリブレーションすることが重要です。

モーターを設定するには、1 つのバスサーボアダプターと 6 個のモーターをリーダーアーム用に割り当て、同様にもう 1 つのバスサーボアダプターと 6 個のモーターをフォロワーアーム用に割り当てます。フォロワー F 用かリーダー L 用か、そして ID が 1 から 6 のどれかを各モーターにラベル付けして書き込んでおくと便利です。**F1–F6** を **Follower Arm** の 1〜6 関節、**L1–L6** を **Leader Arm** の 1〜6 関節を表すものとして使用します。対応するサーボモデル、関節の割り当て、およびギア比の詳細は次のとおりです:

| サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
ここで、モーターバスに 5V または 12V の電源を接続する必要があります。STS3215 7.4V モーターには 5V、STS3215 12V モーターには 12V を使用します。リーダーアームは常に 7.4V モーターを使用するため、12V と 7.4V のモーターが混在している場合は、誤った電源を接続してモーターを焼損させないよう注意してください。次に、モーターバスを USB 経由でコンピューターに接続します。USB からは電源が供給されないため、電源と USB の両方を接続する必要があることに注意してください。
:::

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="" />
</div>

***以下はコードによるキャリブレーション手順です。上の画像の配線サーボを参照しながらキャリブレーションを行ってください***

アームに対応する USB ポートを見つける
各アームに対して正しいポートを見つけるには、ユーティリティスクリプトを 2 回実行します:

<CodeBlock language="bash">
{`lerobot-find-port`}
</CodeBlock>

出力例:

<CodeBlock language="bash">
{`Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.`}
</CodeBlock>

:::tip
USB を抜くことを忘れないでください。そうしないとインターフェースが検出されません。
:::

フォロワーアームのポートを特定する際の出力例（Mac では `/dev/tty.usbmodem575E0031751`、Linux では `/dev/ttyACM0` など）:

リーダーアームのポートを特定する際の出力例（`/dev/tty.usbmodem575E0032081`、または Linux では `/dev/ttyACM1` など）:

USB ポートへのアクセス権を付与する必要がある場合があります。その場合は次を実行します:

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}
</CodeBlock>

:::tip

アームを接続する際、最初に接続したデバイスは ttyACM0（スレーブ/フォロワーアーム）に割り当てられ、2 番目に接続したデバイスは ttyACM1（マスター/リーダーアーム）に割り当てられます。

:::

**モーターを設定する**

**リーダーサーボのキャリブレーション参照画像**

| **リーダーアーム 関節 6 のキャリブレーション** | **リーダーアーム 関節 5 のキャリブレーション** | **リーダーアーム 関節 4 のキャリブレーション** | **リーダーアーム 関節 3 のキャリブレーション** | **リーダーアーム 関節 2 のキャリブレーション** | **リーダーアーム 関節 1 のキャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**フォロワーサーボのキャリブレーション参照画像**

| **フォロワーアーム ジョイント 6 キャリブレーション** | **フォロワーアーム ジョイント 5 キャリブレーション** | **フォロワーアーム ジョイント 4 キャリブレーション** | **フォロワーアーム ジョイント 3 キャリブレーション** | **フォロワーアーム ジョイント 2 キャリブレーション** | **フォロワーアーム ジョイント 1 キャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
繰り返しになりますが、サーボジョイントのIDとギア比が、SO-ARM101 のものと厳密に対応していることを必ず確認してください。
:::

**フォロワーアームサーボのキャリブレーション**

コンピュータからフォロワーアームのコントローラボードへ USB ケーブルを接続し、電源も接続します。その後、次のコマンドを実行します。

<CodeBlock language="bash">
{`lerobot-setup-motors \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step`}
</CodeBlock>

次の指示が表示されるはずです。

<CodeBlock language="bash">
{`Connect the controller board to the 'gripper' motor only and press enter.`}
</CodeBlock>

指示どおり、グリッパーのモーターを接続します。ボードに接続されているモーターがそれだけであり、かつそのモーター自体がまだ他のモーターとデイジーチェーン接続されていないことを確認してください。[Enter] を押すと、スクリプトがそのモーターの ID とボーレートを自動的に設定します。

その後、次のメッセージが表示されます。

<CodeBlock language="bash">
{`'gripper' motor id set to 6`}
</CodeBlock>

続いて次の指示が表示されます。

<CodeBlock language="bash">
{`Connect the controller board to the 'wrist_roll' motor only and press enter.`}
</CodeBlock>

コントローラボードから 3 ピンケーブルを外しても構いませんが、反対側はすでに正しい位置にあるため、グリッパーモーターには接続したままにしておけます。次に、別の 3 ピンケーブルをリストロールモーターに接続し、それをコントローラボードに接続します。前のモーターと同様に、ボードに接続されているモーターがそれだけであり、かつそのモーター自体が他のモーターに接続されていないことを確認してください。

:::caution
指示に従って、各モーターについて同じ操作を繰り返してください。
:::

:::tip
Enter を押す前に、各ステップで配線を確認してください。例えば、ボードを操作している間に電源ケーブルが外れてしまう可能性があります。
:::

完了するとスクリプトは単に終了し、その時点でモーターは使用可能な状態になります。各モーターから次のモーターへ 3 ピンケーブルを接続し、最初のモーター（ID=1 の「ショルダーパン」）からのケーブルをコントローラボードに接続します。コントローラボードはアームのベースに取り付けることができます。

**リーダーアームサーボのキャリブレーション**

リーダーアームについても同じ手順を実行します。

<CodeBlock language="bash">
{`lerobot-setup-motors \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step`}
</CodeBlock>

**組み立て**

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip

- SO-ARM101 のデュアルアーム組み立て手順は SO-ARM100 と同じです。唯一の違いは、SO-ARM101 ではケーブルクリップが追加されていることと、リーダーアームのジョイントサーボのギア比が異なることです。そのため、SO100 と SO101 のどちらも、以下の内容を参照して組み立てることができます。
- 組み立て前に、モーターモデル、ギア比、および電源電圧をもう一度確認してください。SO101 を購入した場合は、上記のサーボモデルとジョイント対応表を参照して、F1〜F6 と L1〜L6 を区別してください。

:::

**リーダーアームの組み立て**

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** | **ステップ 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **ステップ 19** | **ステップ 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**フォロワーアームの組み立て**

:::tip

- フォロワーアームの組み立て手順は、基本的にリーダーアームと同じです。唯一の違いは、ステップ 12 以降のエンドエフェクタ（グリッパーとハンドル）の取り付け方法です。

:::

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

</details>

</section>

## ロボットアームのキャリブレーション

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>ステップ 3</span>
    <h2>ロボットアームのキャリブレーション</h2>
    <p>フォロワーアームとリーダーアームをキャリブレーションし、物理的な位置がソフトウェア上の状態と一致するようにします。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>
        ロボットアームの作業空間から 1 メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、電源とケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

:::danger
**SO101 Arm Kit Standard Edition** を購入した場合、すべての電源は 5V です。**SO101 Arm Kit Pro Edition** を購入した場合、リーダーアームは各ステップで 5V 電源を使用してキャリブレーションおよび動作させ、フォロワーアームは各ステップで 12V 電源を使用してキャリブレーションおよび動作させる必要があります。
:::

次に、SO-10x ロボットに電源とデータケーブルを接続し、キャリブレーションを行う必要があります。これは、同じ物理位置にあるときに、リーダーアームとフォロワーアームが同じ位置値を持つようにするためです。このキャリブレーションは、ある SO-10x ロボットで学習したニューラルネットワークを別のロボットでも動作させるために不可欠です。

### ロボットアームを再キャリブレーションする

<details className="content-details">
<summary>再キャリブレーションオプションを表示</summary>

ロボットアームを再キャリブレーションする必要がある場合は、次の 2 つのオプションがあります。

**オプション 1：ローカルのキャリブレーションファイルを削除する**

再キャリブレーションを行う前に、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 配下のファイルを完全に削除してください。そうしないと、これらのディレクトリ内の JSON ファイルに以前のキャリブレーションデータが保存されているため、システムがエラープロンプトを出す可能性があります。

**オプション 2：キャリブレーションコマンドで再キャリブレーションを選択する**

ターミナルでキャリブレーションコマンドを直接実行します。アームが以前にキャリブレーションされている場合、次のプロンプトが表示されます。

<CodeBlock language="bash">
{`Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:`}
</CodeBlock>

`c` を入力して **Enter** を押すと再キャリブレーションが開始されます。既存のキャリブレーションデータを保持して使用する場合は、そのまま **Enter** を押してください。

</details>

3 ピンインターフェースを介して 6 個のロボットサーボを接続し、シャーシサーボをサーボドライバボードに接続します。その後、次のコマンドまたは API の例を実行してアームをキャリブレーションします。

:::tip
PC（Linux）および Jetson デバイスでは、最初に接続した USB デバイスは通常 `ttyACM0` に、2 番目は `ttyACM1` にマッピングされます。コマンドを実行する前に、どのポートがリーダーとフォロワーにマッピングされているかを必ず確認してください。
:::

**フォロワーアームの手動キャリブレーション**

3 ピンケーブルを使用して 6 個のロボットサーボのインターフェースを接続し、シャーシサーボをサーボドライブプレートに接続してから、次のコマンドまたは API の例を実行してロボットアームをキャリブレーションしてください。

***まずインターフェース権限を付与します***

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

***次にフォロワーアームをキャリブレーションします***

<CodeBlock language="bash">
{`lerobot-calibrate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 # <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name`}
</CodeBlock>

以下の動画はキャリブレーションの方法を示しています。まず、すべての関節が可動範囲の中央に来る位置までロボットを動かす必要があります。その後 Enter を押し、各関節を可動範囲いっぱいまで動かしてください。

:::tip
lerobot リポジトリの更新により、マスタースレーブアームのキャリブレーションを行う際に、ターミナルがサーボ 5 から信号を受信しないのは正常です。そのまま操作を続行してかまいません。
:::

**リーダーアームの手動キャリブレーション**

同じ手順でリーダーアームをキャリブレーションし、次のコマンドまたは API の例を実行します。

<CodeBlock language="bash">
{`lerobot-calibrate \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 # <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name`}
</CodeBlock>

:::tip

リーダーまたはフォロワーアームのキャリブレーション中に “Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port., Try running lerobot-find-port” というエラーが発生した場合は、`sudo chmod 666 /dev/ttyACM*` を実行して必要な権限を付与する必要があります。
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### （オプション）Seeed Studio SoARM クイックツールによる中央位置キャリブレーション

ロボットのキャリブレーションや動作中に、次のようなエラーが表示される場合があります。

`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`

これは通常、サーボの現在位置／ゼロオフセットが異常であり、そのため読み取り角度が想定範囲を超えていることを意味します。その場合、Seeed Studio の SoARM ツールを使用して**中央位置キャリブレーション**（現在位置を中央値 **2048** として書き込み）を行い、その後にアーム全体のキャリブレーションをやり直すことができます。

#### 1) GitHub からツールをクローンし、依存関係をインストールする

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt`}
</CodeBlock>

#### 2) 中央位置キャリブレーションと検証

スクリプトの場所：

- `src/tools/servo_middle_calibration.py`: 中央位置キャリブレーション（現在位置を **2048** として書き込み）
- `src/tools/servo_disable.py`: サーボトルクを無効化（手で関節を回しやすくする）
- `src/tools/servo_center_test.py`: **2048** に移動してキャリブレーション結果を検証

次の順番で実行します（コマンドは対話的にポートの選択を求めます）。

1. （オプション）トルクを無効化して、手動で関節を調整：

<CodeBlock language="bash">
{`python -m src.tools.servo_disable`}
</CodeBlock>

2. 中央位置キャリブレーションを実行（現在位置を 2048 に設定）：

<CodeBlock language="bash">
{`python -m src.tools.servo_middle_calibration`}
</CodeBlock>

3. 検証：サーボを 2048 に移動し、想定どおり中央位置に戻るか確認：

<CodeBlock language="bash">
{`python -m src.tools.servo_center_test`}
</CodeBlock>

中央位置キャリブレーションが完了したら、上記の `lerobot-calibrate` の手順に戻り、アーム全体のキャリブレーションをやり直してください。

上記のようなエラーが発生した場合は、ステアリングギアデバッグツールを使用してデバッグできます。これは Windows、Ubuntu、Mac をサポートしています。

<div className="hero-actions">
    <a href="/ja/lerobot_steering_gear_debugging_tool">▶ ステアリングギアデバッグツールチュートリアルを開く</a>
</div>

</section>

## テレオペレーション

<section id="teleoperation" className="section-card">
  <div className="section-title">
    <span>Step 4</span>
    <h2>テレオペレーション</h2>
    <p>カメラを追加したりデータを収集したりする前に、リーダーからフォロワーへのテレオペレーションテストを実行します。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>
        ロボットアームの作業空間から 1 メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されており、電源とケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

**シンプルなテレオペ**
これでロボットをテレオペレーションする準備が整いました。このシンプルなスクリプトを実行します（カメラには接続せず、表示もしません）。

ロボットに関連付けられた id は、キャリブレーションファイルを保存するために使用されます。同じ構成を使用する場合、テレオペレーション、記録、評価の際には同じ id を使用することが重要です。

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm`}
</CodeBlock>

teleoperate コマンドは自動的に次の処理を行います。

1. 不足しているキャリブレーションを検出し、キャリブレーション手順を開始します。
2. ロボットとテレオペデバイスに接続し、テレオペレーションを開始します。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## カメラを追加

<section id="camera" className="section-card">
  <div className="section-title">
    <span>Step 5</span>
    <h2>カメラを追加</h2>
    <p>OpenCV、RealSense、または Orbbec カメラを追加し、データセットを記録する前に画像ストリームを確認します。</p>
  </div>

<details className="content-details">
<summary> RealSense D435i/D405 を使用する場合 </summary>

RealSense 深度カメラは LeRobot に RGB-D 認識機能を提供し、物体認識、点群再構成、テーブルトップマニピュレーションなどのタスクに適しています。ここで推奨するモデルは **RealSense D405** と **RealSense D435i** です。

**RealSense D405**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" alt="" />
</div>

RealSense D405 は、高精度な近距離タスク（テーブルトップロボットマニピュレーションなど）向けに設計された短距離ステレオ深度カメラで、一般的な動作範囲は **7 cm ～ 50 cm** です。

**RealSense D435i**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" alt="" />
</div>

RealSense D435i は、深度センシング、RGB 画像、および IMU を組み合わせており、3D 再構成、SLAM、ロボットによる環境認識などの中距離～近距離アプリケーションに適しています。

**1. カメラブランチに切り替える**

現在のカメラサポートは `DepthCameraSupport` ブランチで提供されています。

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

現在のブランチを確認します。

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

期待される出力：

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. RealSense を編集可能モードでインストールする**

RealSense のみを使用する場合：

<CodeBlock language="bash">
{`pip install -e ".[realsense]"`}
</CodeBlock>

**3. カメラの権限を付与する**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. カメラを検出する**

<CodeBlock language="bash">
{`lerobot-find-cameras realsense`}
</CodeBlock>

このステップでは次の情報が出力されます：

- カメラモデル
- シリアル番号
- USB 情報
- デフォルトのストリーム設定

取得した `Serial number` を、以下のカメラコマンドの `serial_number_or_name` パラメータに入力します。

**5. RealSense の例**

デュアル RealSense テスト：

<CodeBlock language="bash">
{`lerobot-teleoperate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_follower_arm \\
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_awesome_leader_arm \\
  --display_data=true`}
</CodeBlock>

**6. パラメータに関する注意事項**

- `depth_alpha` は深度画像のスケーリング係数を制御し、表示結果や対象距離の範囲に応じて調整できます。
- 3 台以上の深度カメラを接続する場合は、全体の安定性を高めるために `fps` を `15` に下げることを推奨します。
- 安定性とリアルタイム性のバランスを取るため、解像度は `640x480` に保つことを推奨します。

</details>

<details className="content-details">
<summary> Orbbec Gemini2/Gemini336 カメラを使用する場合 </summary>


<div className="image-frame">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" alt="" />
</div>
<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer">
    今すぐ入手 🖱️
  </a>
</div>

Orbbec Gemini 2 はロボットアプリケーション向けの高性能 RGB-D カメラで、正確な深度とカラーのアライメントを備えた同期 RGB および深度ストリームを提供します。ステレオ深度センシングと内蔵 6 軸 IMU を組み合わせることで、物体検出、3D 認識、マッピング、ナビゲーションなどのロボットタスクに非常に適しています。コンパクトな設計と完全な Orbbec SDK サポートにより、研究用途だけでなく実環境での導入にも適しています。

<div className="image-frame">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" alt="" />
</div>

Gemini 336 は Gemini 330 シリーズの新しいメンバーです。Gemini 335 の優れた深度性能を受け継ぎつつ、反射の多い屋内エリア、高ダイナミックシーンの暗部、明るい屋外環境における深度画像品質をさらに向上させています。ロボットアプリケーションにおいては、認識、自己位置推定、マニピュレーションなどのタスクに対して、より安定した高品質な深度データを提供できます。

**1. Camera ブランチに切り替える**

現在のカメラサポートは `DepthCameraSupport` ブランチで利用できます：

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

現在のブランチを確認します：

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

期待される出力：

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. LeRobot を編集可能モードでインストールする**

Orbbec のみを使用する場合：

<CodeBlock language="bash">
{`pip install -e ".[orbbec]"`}
</CodeBlock>

**3. カメラの権限を付与する**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. USBFS キャッシュサイズの設定**

デフォルトでは、USBFS キャッシュサイズは 16 MB に設定されています。この値は高解像度画像、複数のデータストリーム、および複数デバイスのシナリオには不十分です。ユーザーはキャッシュサイズを最大 128 MB まで増やすことができます。

USBFS キャッシュサイズを確認
<CodeBlock language="bash">
{`cat /sys/module/usbcore/parameters/usbfs_memory_mb`}
</CodeBlock>

USBFS キャッシュサイズを一時的に増やす
<CodeBlock language="bash">
{`sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'`}
</CodeBlock>

:::tip

それでも `timeout error TimeoutError: Timed out waiting for frame from <lerobot.cameras.orbbec.camera_orbbec.OrbbecDepthCamera object at 0x7ba4ba130910.........>` が発生する場合は、カメラを再接続するだけで解決できます。

:::

**5. カメラを検出する**

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

このステップでは次の情報が出力されます：

- カメラモデル（Name）
- シリアル番号（Serial number）
- USB 情報
- デフォルトのストリーム設定

取得した `Serial Number` を、以下に示すカメラコマンドの `serial_number_or_name` パラメータに入力します。

**6. Orbbec の例**

単一 Orbbec テスト：

<CodeBlock language="bash">
{`lerobot-teleoperate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_follower_arm \\
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }' \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_awesome_leader_arm \\
  --display_data=true`}
</CodeBlock>

単一 Orbbec カメラテスト + 標準カメラテスト：

<CodeBlock language="bash">
{`  lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras='{
      orbbec_color: {
        type: orbbec_color,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 480,
        fps: 30,
        color_mode: rgb,
        rotation: 0,
        warmup_s: 1
      },
      orbbec_depth: {
        type: orbbec_depth,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 400,
        fps: 30,
        depth_alpha: 0.2,
        rotation: 0,
        warmup_s: 5
      },
      side: {
      type: opencv,
      index_or_path: 8,
      width: 640,
      height: 480,
      fps: 30,
      fourcc: "MJPG"} 
    }' \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

:::tip
単一の Orbbec カメラと標準カメラを併用する場合は、最初に Orbbec カメラを接続し、その後に標準カメラを接続することを推奨します。

カメラ ID を検出するために lerobot-find-cameras opencv コマンドを実行すると、Orbbec カメラが連続する 3 つのカメラ番号を占有していることがわかります。そのため、標準カメラの番号が最後に割り当てられるよう、標準カメラは最後に接続することをお勧めします。
:::

**7. パラメータに関する注意事項**

- `depth_alpha` は深度画像のスケーリング係数を制御します。`0.2` を初期値として、表示結果に基づいて微調整するとよいでしょう。
- 3 台以上の深度カメラを接続する場合は、より高い安定性のために `fps` を `15` に下げることを推奨します。
- より安定した表示とデータ転送のため、解像度は `640x480` に保つことを推奨します。

カメラ関連のエラーについては、このページの最後にある FAQ セクションを参照してください。

</details>

<details className="content-details">

<summary> 通常のカメラを使用する場合 </summary>



:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して操作できます。
:::

カメラをインスタンス化するには、カメラ識別子が必要です。この識別子は、コンピュータを再起動したりカメラを再接続したりすると変更される場合があり、この挙動は主にオペレーティングシステムに依存します。

システムに接続されているカメラのインデックスを見つけるには、次のスクリプトを実行します：

<CodeBlock language="python">
{`lerobot-find-cameras opencv # or realsense for Intel Realsense cameras`}
</CodeBlock>

ターミナルには次の情報が出力されます。

<CodeBlock language="text">
{`--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)`}
</CodeBlock>

各カメラで撮影された画像は、`outputs/captured_images` ディレクトリで確認できます。

:::warning
macOS で Intel RealSense カメラを使用する際、`OSError finding RealSense cameras: failed to set power state` というエラーが発生する場合があります。これは、同じコマンドを `sudo` 権限で実行することで解決できます。ただし、macOS での RealSense カメラの使用は不安定であることに注意してください。
:::

その後、以下のコードを実行することで、テレオペレーション中にコンピュータ上でカメラ映像を表示できるようになります。これは、最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

カメラが複数ある場合は、`--robot.cameras` を変更してカメラを追加できます。`index_or_path` の形式は、`python -m lerobot.find_cameras opencv` によって出力されるカメラ ID の末尾の数字によって決まることに注意してください。

:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すこともできます。ただし後者では画像の解像度と FPS が低下し、ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。とはいえ、同じ USB HUB を介して 2 台のカメラをコンピュータに接続することは依然として推奨されません。
:::

例えば、サイドカメラを追加したい場合は次のようにします：

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すこともできます。ただし後者では画像の解像度と FPS が低下し、ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。とはいえ、同じ USB HUB を介して 2 台のカメラをコンピュータに接続することは依然として推奨されません。
:::

:::tip
このようなバグが発生した場合。

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" alt="" />
</div>

rerun のバージョンをダウングレードすることで問題を解決できます。

<CodeBlock language="bash">
{`pip3 install rerun-sdk==0.23`}
</CodeBlock>

:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

</section>

## データセットの記録

<section id="record-dataset" className="section-card">
  <div className="section-title">
    <span>Step 6</span>
    <h2>データセットの記録</h2>
    <p>ローカルにデータセットを記録するか、Hugging Face Hub にアップロードし、データセットをクリーンかつ一貫した状態に保ちます。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全チェック</strong>
      <p>
        ロボットアームの作業空間から 1 メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、電源とケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

- データセットをローカルに保存したい場合は、そのまま次を実行できます：

<CodeBlock language="bash">
{`lerobot-record \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true \\
    --dataset.repo_id=seeedstudio123/test \\
    --dataset.num_episodes=5 \\
    --dataset.single_task="Grab the black cube" \\
    --dataset.push_to_hub=false \\
    --dataset.episode_time_s=30 \\
    --dataset.reset_time_s=30`}
</CodeBlock>

このうち、`repo_id` は任意に変更でき、`push_to_hub=false` となっています。最終的に、データセットはホームフォルダ内の `~/.cache/huggingface/lerobot` ディレクトリに保存され、そこで前述の `seeedstudio123/test` フォルダが作成されます。

- データセットのアップロードに Hugging Face hub の機能を使用したいが、まだ行っていない場合は、[Hugging Face settings](https://huggingface.co/settings/tokens) から生成できる書き込み権限付きトークンを使ってログインしていることを確認してください：

<CodeBlock language="bash">
{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential`}
</CodeBlock>

これらのコマンドを実行するために、Hugging Face リポジトリ名を変数に保存します：

<CodeBlock language="bash">
{`HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER`}
</CodeBlock>

5 エピソードを記録し、データセットを hub にアップロードします：

<CodeBlock language="bash">
{`lerobot-record \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true \\
    --dataset.repo_id=\${HF_USER}/record-test \\
    --dataset.num_episodes=5 \\
    --dataset.single_task="Grab the black cube" \\
    --dataset.push_to_hub=true \\
    --dataset.episode_time_s=30 \\
    --dataset.reset_time_s=30`}
</CodeBlock>

次のような行が多数表示されます：

<CodeBlock language="bash">
{`INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)`}
</CodeBlock>

**Record 関数**

**record** 関数は、ロボットの動作中にデータを取得および管理するための一連のツールを提供します。  

**1. データ保存**

- データは `LeRobotDataset` 形式で保存され、記録中にディスクに保存されます。
- デフォルトでは、記録後にデータセットはあなたの Hugging Face ページにプッシュされます。  
- アップロードを無効にするには、`--dataset.push_to_hub=False` を使用します。

**2. チェックポイントと再開**

- 記録中にチェックポイントが自動的に作成されます。  
- 中断後に再開するには、`--resume=true` を付けて同じコマンドを再実行します。

⚠️ 重要な注意：再開する場合、`--dataset.num_episodes` には、（データセット全体の目標エピソード数ではなく）追加で記録するエピソード数を設定してください。  

- 最初から記録をやり直すには、データセットディレクトリを**手動で削除**します。

**3. 記録パラメータ**

コマンドライン引数を使用してデータ記録の流れを設定します：

| Parameter | 説明 | デフォルト |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | 各データエピソードの長さ（秒） | 60 |  
| --dataset.reset_time_s | 各エピソード後の環境リセット時間（秒） | 60 |  
| --dataset.num_episodes | 記録するエピソードの総数 | 50 |  

**4. 記録中のキーボード操作**

キーボードショートカットを使ってデータ記録の流れを制御します：

| Key | 動作 |  
|-----|--------|  
| → (右矢印) | 現在のエピソードを早期終了／リセットし、次へ進む。 |  
| ← (左矢印) | 現在のエピソードをキャンセルし、再記録する。 |  
| ESC | セッションを即座に停止し、動画をエンコードしてデータセットをアップロードする。 |  

:::tip

キーボードが動作しない場合は、別バージョンの pynput をインストールする必要があるかもしれません。

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

:::

**データ収集のヒント**

- タスクの提案：さまざまな場所にある物体を把持し、ビンに入れます。  
- 規模：50 エピソード以上を記録します（場所ごとに 10 エピソード）。  
- 一貫性：  
  - カメラを固定したままにする。  
  - 同じ把持動作を維持する。  
  - 操作対象の物体がカメラ映像内に見えるようにする。  
- 段階的な拡張：  
  - 新しい場所、手法、カメラ調整などのバリエーションを加える前に、まずは安定した把持を実現する。  
  - 失敗を防ぐため、複雑さを急激に増やさない。  

💡 経験則：カメラ画像だけを見て、自分自身でタスクを実行できる状態であるべきです。  

この重要なトピックをさらに深く知りたい場合は、良いデータセットとは何かについて執筆した[ブログ記事](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)を参照してください。

記録中のキーボードショートカットに関する問題については、このページの最後にある FAQ セクションを参照してください。
<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## データセットの可視化

<section id="visualize-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>データセットの可視化</h2>
    <p>学習前に、記録された画像・アクション・エピソードを確認します。</p>
  </div>

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

もし `--control.push_to_hub=true` でデータセットを hub にアップロードしている場合は、次で示されるリポジトリ ID をコピー＆ペーストすることで、[オンラインでデータセットを可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

<CodeBlock language="bash">
{`echo \${HF_USER}/so101_test`}
</CodeBlock>

もし `--dataset.push_to_hub=false` でアップロードしていない場合でも、次のようにローカルで可視化できます：

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id \${HF_USER}/so101_test \\`}
</CodeBlock>

もし `--dataset.push_to_hub=false` でアップロードする場合でも、次のようにローカルで可視化できます：

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id seeed_123/so101_test \\`}
</CodeBlock>

**ここで、`seeed_123` はデータ収集時に定義したカスタムの `repo_id` 名です。**

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="" />
</div>

</section>

## データセットのリプレイ

<section id="replay-dataset" className="section-card">
  <div className="section-title">
    <span>データセット</span>
    <h2>データセットのリプレイ</h2>
    <p>記録済みのエピソードを実機アーム上で再生し、アクションの一貫性を確認します。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>
        ロボットアームの作業空間から半径1メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、および電源やケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

便利な機能として `replay` 関数があり、これを使うと記録した任意のエピソードや、公開されている任意のデータセットのエピソードを再生できます。この機能により、ロボットの動作の再現性をテストし、同一モデルのロボット間での転移性を評価できます。

以下のコマンド、または API のサンプルを使って、ロボット上で最初のエピソードをリプレイできます：

<CodeBlock language="bash">
{`lerobot-replay \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --dataset.repo_id=seeedstudio123 \\
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \\
    --dataset.episode=0 \\`}
</CodeBlock>

ロボットは、記録したものと同様の動きを再現するはずです。

このコマンドでは、`dataset.root` がデータセットへの物理パスを指定し、dataset.`repo_id` はデータ収集時に定義したカスタム名です。

</section>

## 学習と評価

<section id="training" className="section-card">
  <div className="section-title">
    <span>ステップ 7</span>
    <h2>学習と評価</h2>
    <p>ACT、SmolVLA、Pi0、Pi0.5、GR00T、PEFT、非同期推論などのポリシーを学習・評価します。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>
        ロボットアームの作業空間から半径1メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、および電源やケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

<details className="content-details">

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

[ACT](https://huggingface.co/docs/lerobot/act) を参照してください

ロボットを制御するポリシーを学習するには、[lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py) スクリプトを使用します。

**学習**

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=\${HF_USER}/so101_test \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --job_name=act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --steps=300000`}
</CodeBlock>


**ローカルデータセットで学習したい場合は、`repo_id` がデータ収集時に使用したものと一致していることを確認し、`--policy.push_to_hub=False` を追加してください。**

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=seeedstudio123/test \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --job_name=act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --policy.push_to_hub=false\\
  --steps=300000`}
</CodeBlock>

:::tip

RTX 50 シリーズ GPU を使用している場合は、学習コマンドに --dataset.video_backend=pyav を追加する必要があります。これは、torchvision のプレビュー版で不足している API を回避するためです。完全な学習コマンドは次のようになります：

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=seeedstudio123/test \\
  --dataset.video_backend=pyav \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --policy.push_to_hub=false \\
  --steps=300000 \\`}
</CodeBlock>

:::

内容を説明します：

- **データセットの指定**：パラメータ `--dataset.repo_id=\${HF_USER}/so101_test` によってデータセットを指定します。
- **学習ステップ数**：`--steps=300000` を使って学習ステップ数を変更します。アルゴリズムのデフォルトは 800000 ステップであり、タスクの難易度や学習中の loss を観察しながら調整できます。
- **ポリシータイプ**：`policy.type=act` でポリシーを指定します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`] などのポリシーを切り替えることができ、その場合は `configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、ロボット（例：`laptop` や `phone`）のモータ状態、モータアクション、カメラの台数などの情報がすでにデータセットに保存されているため、自動的にロボットに適応します。
- **デバイスの選択**：Nvidia GPU 上で学習しているため `policy.device=cuda` を指定していますが、Apple Silicon で学習する場合は `policy.device=mps` を使用できます。
- **可視化ツール**：学習チャートを [Weights and Biases](https://docs.wandb.ai/quickstart) で可視化するために `wandb.enable=true` を指定します。これは任意ですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

**評価**

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 関数を、ポリシーのチェックポイントを入力として使用できます。例えば、次のコマンドを実行して 10 エピソード分の評価を記録します：

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so100_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=\${HF_USER}/eval_so100 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=\${HF_USER}/my_policy`}
</CodeBlock>

例えば次のようにします：

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}
</CodeBlock>

1. `--policy.path` パラメータは、ポリシー学習結果の重みファイルへのパス（例：`outputs/train/act_so101_test/checkpoints/last/pretrained_model`）を示します。モデル学習結果の重みファイルを Hub にアップロードした場合は、モデルリポジトリ（例：`\${HF_USER}/act_so100_test`）を使用することもできます。

2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中の動画とデータが別々に記録され、`seeed/eval_test123` のような `eval_` で始まるフォルダに保存されます。

3. 評価段階で `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` に遭遇した場合は、まず `eval_` で始まるフォルダを削除してから、プログラムを再実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` というメッセージが表示された場合は、`--robot.cameras` パラメータ内の front や side といったキーワードが、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

<details className="content-details">
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) は、Hugging Face によるロボティクス向け軽量ファウンデーションモデルです。LeRobot データセット上で簡単にファインチューニングできるよう設計されており、開発を加速するのに役立ちます。

**環境をセットアップする**

次のコマンドを実行して SmolVLA の依存関係をインストールします：

<CodeBlock language="bash">
{`pip install -e ".[smolvla]"`}
</CodeBlock>

**自分のデータで SmolVLA をファインチューニングする**

[smolvla_base](https://hf.co/lerobot/smolvla_base)（事前学習済み 4.5 億パラメータモデル）を使用し、自分のデータでファインチューニングします。モデルを 20k ステップ学習するには、単一の A100 GPU でおおよそ 4 時間かかります。ステップ数は、性能とユースケースに応じて調整してください。

GPU デバイスがない場合は、[Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb) 上のノートブックを使って学習できます。

`--dataset.repo_id` を使って、トレーニングスクリプトにデータセットを渡します。インストールをテストしたい場合は、[SmolVLA Paper](https://huggingface.co/papers/2506.01844) 用に収集したデータセットの 1 つを使用する、次のコマンドを実行してください。

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.path=lerobot/smolvla_base \\
  --dataset.repo_id=\${HF_USER}/mydataset \\
  --batch_size=64 \\
  --steps=20000 \\
  --output_dir=outputs/train/my_smolvla \\
  --job_name=my_smolvla_training \\
  --policy.device=cuda \\
  --wandb.enable=true`}
</CodeBlock>

:::tip
GPU が許す範囲で、読み込み時間が短く保てるのであれば、小さいバッチサイズから始めて徐々に増やしていくことができます。
:::

ファインチューニングは一種のアートです。ファインチューニング用オプションの完全な概要を確認するには、次を実行します。

<CodeBlock language="bash">
{`lerobot-train --help`}
</CodeBlock>

**ファインチューニングしたモデルを評価し、リアルタイムで実行する**

エピソードを記録する場合と同様に、HuggingFace Hub にログインしておくことを推奨します。対応する手順は次を参照してください：[Record a dataset](https://huggingface.co/docs/lerobot/il_robots)。ログイン後は、次のようにしてセットアップ上で推論を実行できます。

<CodeBlock language="bash">
{`lerobot-rollout \\
  --strategy.type=base \\
  --policy.path=\${HF_USER}/act_policy \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras=="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --display_data=true \\
  --task="Your task description" \\ # can be skipped for ACT
  --duration=60`}
</CodeBlock>


評価セットアップに応じて、評価スイート用に記録する時間（duration）やエピソード数を設定できます。

</details>

<details className="content-details">
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) は、生涯にわたるロボット学習を研究するために設計されたベンチマークです。ロボットは工場で一度だけ事前学習されるのではなく、時間の経過とともに人間のユーザーと一緒に学習と適応を続ける必要があります。この継続的な適応は、意思決定における生涯学習（LLDM）と呼ばれ、真にパーソナライズされたヘルパーロボットを構築するための重要なステップです。

- 📄 [LIBERO 論文](https://arxiv.org/abs/2306.03310)
- 💻 [オリジナルの LIBERO リポジトリ](https://github.com/Lifelong-Robot-Learning/LIBERO)

**LIBERO を用いた評価**

**LeRobot** では、LIBERO をフレームワークに移植し、主に軽量な Vision-Language-Action モデルである [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla) の**評価**に使用しました。

LIBERO は現在、**マルチ評価対応シミュレーション**の一部となっており、フラグを 1 つ付けるだけで、**単一のタスクスイート**または**複数のスイートを同時に**対象としてポリシーをベンチマークできます。

LIBERO をインストールするには、LeRobot の公式手順に従った後、次を実行するだけです：`pip install -e ".[libero]"`

***単一スイートでの評価***

1 つの LIBERO スイート上でポリシーを評価します：

<CodeBlock language="bash">
{`lerobot-eval \\
  --policy.path="your-policy-id" \\
  --env.type=libero \\
  --env.task=libero_object \\
  --eval.batch_size=2 \\
  --eval.n_episodes=3`}
</CodeBlock>

- `--env.task` はスイート（`libero_object`、`libero_spatial` など）を選択します。
- `--eval.batch_size` は並列実行する環境数を制御します。
- `--eval.n_episodes` は実行するエピソードの総数を設定します。

***マルチスイートでの評価***

複数のスイートにまたがってポリシーを一度にベンチマークします：

<CodeBlock language="bash">
{`lerobot-eval \\
  --policy.path="your-policy-id" \\
  --env.type=libero \\
  --env.task=libero_object,libero_spatial \\
  --eval.batch_size=1 \\
  --eval.n_episodes=2`}
</CodeBlock>

- マルチスイート評価を行うには、`--env.task` にカンマ区切りのリストを渡します。

**トレーニングコマンド例**

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.type=smolvla \\
  --policy.repo_id=\${HF_USER}/libero-test \\
  --dataset.repo_id=HuggingFaceVLA/libero \\
  --env.type=libero \\
  --env.task=libero_10 \\
  --output_dir=./outputs/ \\
  --steps=100000 \\
  --batch_size=4 \\
  --eval.batch_size=1 \\
  --eval.n_episodes=1 \\
  --eval_freq=1000 \\`}
</CodeBlock>

-----

**レンダリングに関する注意**

LeRobot はシミュレーションに MuJoCo を使用します。トレーニングまたは評価の前に、レンダリングバックエンドを設定する必要があります。

- `export MUJOCO_GL=egl` → ヘッドレスサーバー向け（例：HPC、クラウド）

</details>

<details className="content-details">
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

[Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください。

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

**トレーニング**

<CodeBlock language="bash">
{`lerobot-train \\
    --dataset.repo_id=your_dataset \\
    --policy.type=pi0 \\
    --output_dir=./outputs/pi0_training \\
    --job_name=pi0_training \\
    --policy.pretrained_path=lerobot/pi0_base \\
    --policy.repo_id=your_repo_id \\
    --policy.compile_model=true \\
    --policy.gradient_checkpointing=true \\
    --policy.dtype=bfloat16 \\
    --policy.freeze_vision_encoder=false \\
    --policy.train_expert_only=false \\
    --steps=3000 \\
    --policy.device=cuda \\
    --batch_size=32`}
</CodeBlock>

**評価**

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

[Pi0.5](https://huggingface.co/docs/lerobot/pi05) を参照してください。

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

**トレーニング**

<CodeBlock language="bash">
{`lerobot-train \\
    --dataset.repo_id=seeed/eval_test123 \\
    --policy.type=pi05 \\
    --output_dir=./outputs/pi05_training \\
    --job_name=pi05_training \\
    --policy.repo_id=your_repo_id \\
    --policy.pretrained_path=lerobot/pi05_base \\
    --policy.compile_model=true \\
    --policy.gradient_checkpointing=true \\
    --wandb.enable=true \\
    --policy.dtype=bfloat16 \\
    --policy.freeze_vision_encoder=false \\
    --policy.train_expert_only=false \\
    --steps=3000 \\
    --policy.device=cuda \\
    --batch_size=32`}
</CodeBlock>

**評価**

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

公式ドキュメントを参照してください：[GR00T N1.5](https://huggingface.co/docs/lerobot/groot)。

GR00T N1.5 は、より汎用的なロボットの推論とスキル学習のための、NVIDIA によるオープンな基盤モデルです。これは**クロスエンボディメント**モデルであり、**言語**や**画像**などのマルチモーダル入力を受け取り、異なる環境にまたがってマニピュレーションタスクを実行できます。

LeRobot では、重要なのはポリシータイプを `--policy.type=groot` に設定することです。GR00T N1.5 は環境要件が高く（FlashAttention に依存し、CUDA GPU を必要とします）、まずは ACT / Pi0 をエンドツーエンドで動作させてから GR00T を試すことを推奨します。

**インストール（重要）**

現在の公式ドキュメントによると、GR00T N1.5 には `flash-attn` が必要であり、CUDA 対応ハードウェアでのみ使用できます。

推奨される手順の順番：

1. まずベース環境（Python、CUDA、ドライバーなど）を準備します。この時点では `lerobot` をインストール**しないでください**。
2. 使用している CUDA バージョンに対応した PyTorch をインストールします（CUDA のバージョンによっては異なる `--index-url` が必要になる場合があります。PyTorch のインストールページに従ってください）。

<CodeBlock language="bash">
{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"`}
</CodeBlock>

:::tip

RTX 50 シリーズ GPU を使用している場合、次の要件を満たす必要があります：Python=3.10、CUDA=12.8、Torch=2.7.1

ダウンロードコマンドは次のとおりです。
<CodeBlock language="bash">
{`pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128`}
</CodeBlock>
:::

3. `flash-attn` のビルド依存関係をインストールし、その後 `flash-attn` 自体をインストールします。

<CodeBlock language="bash">
{`pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"`}
</CodeBlock>

:::tip

RTX 50 シリーズ GPU を使用している場合、次の要件を満たす必要があります：flash_attn=2.8.0

ダウンロードコマンドは次のとおりです。
<CodeBlock language="bash">
{`pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation`}
</CodeBlock>
:::

4. `groot` のオプション依存関係（`lerobot[groot]`）付きで LeRobot をインストールします。

<CodeBlock language="bash">
{`pip install "lerobot[groot]"`}
</CodeBlock>

:::tip
`flash-attn` のインストールに失敗する場合、多くは (1) PyTorch と CUDA の不整合、(2) ビルド依存関係の不足、または (3) 環境が新しすぎる／古すぎることが原因です。まず公式の GR00T ドキュメントと PyTorch のインストール手順を突き合わせて確認してください。
:::

**トレーニング（ファインチューニング）**

公式ドキュメントでは、`accelerate launch --multi_gpu ...` を用いたマルチ GPU の例が提供されています。単一 GPU しか持っていない場合でも、まずは単一プロセスの実行を動作させるところから始めることができます（正確なサポート内容や引数は公式ドキュメントに依存します）。

<CodeBlock language="bash">
{`accelerate launch \\
  --multi_gpu \\
  --num_processes=$NUM_GPUS \\
  $(which lerobot-train) \\
  --output_dir=$OUTPUT_DIR \\
  --save_checkpoint=true \\
  --batch_size=$BATCH_SIZE \\
  --steps=$NUM_STEPS \\
  --save_freq=$SAVE_FREQ \\
  --log_freq=$LOG_FREQ \\
  --policy.push_to_hub=true \\
  --policy.type=groot \\
  --policy.repo_id=$REPO_ID \\
  --policy.tune_diffusion_model=false \\
  --dataset.repo_id=$DATASET_ID \\
  --wandb.enable=true \\
  --wandb.disable_artifact=true \\
  --job_name=$JOB_NAME`}
</CodeBlock>

**オンロボットでの検証（評価）**

学習後は、他のポリシーと同様に `lerobot-record` を使って評価とリプレイの記録を行うことができます。公式ドキュメントには両腕ロボットの例が含まれていますが、SO101 の単腕ユーザーは `left_arm_port/right_arm_port` 形式の引数を指定する必要はありません。

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_port=/dev/ttyACM1 \\
  --robot.right_arm_port=/dev/ttyACM0 \\
  --robot.id=bimanual_follower \\
  --robot.cameras='{ right: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}, left: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}, top: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --display_data=true \\
  --dataset.repo_id=\${HF_USER}/eval_groot_bimanual \\
  --dataset.num_episodes=10 \\
  --dataset.single_task="Grab and handover the red cube to the other arm" \\
  --policy.path=\${HF_USER}/groot-bimanual \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10`}
</CodeBlock>

ライセンス：Apache 2.0（元の GR00T リポジトリと同じ）。

</details>

<details className="content-details">
<summary>（オプション）パラメータ効率の良いファインチューニング（PEFT）</summary>

PEFT（Parameter-Efficient Fine-Tuning）は、大規模な事前学習済みモデルが新しいタスクに適応する際に、**すべてのパラメータを更新せずに**済むようにする手法とツールの総称です。事前学習済みの LeRobot ポリシー（例：SmolVLA、Pi0）では、多くの場合、VRAM 使用量と学習コストを削減しつつ、フルファインチューニングに近い性能を維持するために、LoRA などの少数の「アダプタ」パラメータだけを学習すれば十分です。

**インストール**

LeRobot をオプションの `peft` 依存関係付きでインストールした後は、学習時に PEFT 関連の引数を使用できます。

<CodeBlock language="bash">
{`pip install -e ".[peft]"`}
</CodeBlock>

<CodeBlock language="bash">
{`pip install "lerobot[peft]"`}
</CodeBlock>

より詳しい概念と手法については、[🤗 PEFT ドキュメント](https://huggingface.co/docs/peft/index)を参照してください。

**例：SmolVLA を LoRA でファインチューニングする（LIBERO の `libero_spatial` サブタスク）**

この例では、`HuggingFaceVLA/libero` データセット上で `lerobot/smolvla_base` を LoRA によりファインチューニングします。引数名は LeRobot のバージョンに依存するため、`lerobot-train --help` も併せて確認することを推奨します。

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.path=lerobot/smolvla_base \\
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \\
  --dataset.repo_id=HuggingFaceVLA/libero \\
  --env.type=libero \\
  --env.task=libero_spatial \\
  --output_dir=outputs/train/my_libero_smolvla_peft \\
  --job_name=my_libero_smolvla_peft \\
  --policy.device=cuda \\
  --steps=10000 \\
  --batch_size=32 \\
  --optimizer.lr=1e-3 \\
  --peft.method_type=LORA \\
  --peft.r=64`}
</CodeBlock>

**主要な PEFT 引数**

- `--peft.method_type`: 使用する PEFT 手法を選択します。LoRA（Low-Rank Adapter）は最も一般的な選択肢の 1 つです。
- `--peft.r`: LoRA のランクです。ランクを高くすると通常は表現能力が向上しますが、パラメータ数と VRAM 使用量も増加します。

**LoRA を注入するレイヤー／モジュールの選択（オプション）**

デフォルトでは、PEFT は通常、最も重要な射影レイヤー（例：attention の `q_proj`、`v_proj`）に LoRA を注入し、状態／アクションの射影もカバーする場合があります。カスタマイズしたい場合は、`--peft.target_modules` を使用します。

よく使われるパターン：

1) モジュール名のサフィックスのリストを指定する（例）：

<CodeBlock language="bash">
{`--peft.target_modules="['q_proj', 'v_proj']"`}
</CodeBlock>

2) 正規表現を指定する（例：モデル内の実際のモジュール名に合わせて調整してください）：

<CodeBlock language="bash">
{`--peft.target_modules='(model\\\\.vlm_with_expert\\\\.lm_expert\\\\..*\\\\.(down|gate|up)_proj|.*\\\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'`}
</CodeBlock>

**一部のモジュールをフル学習する（オプション）**

特定のモジュールを（LoRA の注入だけでなく）完全に学習させたい場合は、`--peft.full_training_modules` を使用します。例えば、`state_proj` のみをフル学習するには次のようにします：

<CodeBlock language="bash">
{`--peft.full_training_modules="['state_proj']"`}
</CodeBlock>

**学習率の目安（経験則）**

LoRA の学習率は、フルファインチューニングよりもおおよそ 10 倍高く設定されることが多いです。例えば、フルファインチューニングで一般的に `1e-4` を使う場合、LoRA では `1e-3` から始めることができます。学習率スケジューラを使用する場合、最終的な学習率は目安として `1e-4` 前後になることが多いです。

</details>

<details className="content-details">
<summary>（オプション）Accelerate を用いたマルチ GPU 学習</summary>

**学習手順**

方法 1：CLI フラグを使用する。

1. `lerobot` 環境に `accelerate` をインストールします。

<CodeBlock language="bash">
{`pip install accelerate`}
</CodeBlock>

2. `accelerate launch` と `--multi_gpu` および `--num_processes` フラグを使ってマルチ GPU 学習を起動します。

<CodeBlock language="bash">
{`accelerate launch \\

--multi_gpu \\

--num_processes=2 \\

$(which lerobot-train) \\

--dataset.repo_id=\${HF_USER}/my_dataset \\

--policy.type=act \\

--policy.repo_id=\${HF_USER}/my_trained_policy \\

--output_dir=outputs/train/act_multi_gpu \\

--job_name=act_multi_gpu \\

--wandb.enable=true`}
</CodeBlock>

主な `accelerate` フラグ：

- `--multi_gpu`: マルチ GPU 学習を有効にします。
- `--num_processes`: 使用する GPU の数（通常はマシン上で利用可能な GPU の数と同じ）。
- `--mixed_precision=fp16`: fp16 の混合精度を使用します（ハードウェアが対応していれば、bf16 も使用できます）。

注意：**bf16 にはハードウェアのサポートが必要**であり、すべての GPU で利用できるわけではありません。

| 精度 | ハードウェアサポート |
|--|--|
| fp16 | ほぼすべての NVIDIA GPU でサポート |
| bf16 | 一部の新しい GPU（Ampere 以降）のみサポート |

GPU が bf16 をサポートしていない場合は、Accelerate の設定で fp16 を選択するか、明示的に fp16 を指定してください。

方法 2：`accelerate` の設定ファイルを使用する（オプション）。

複数 GPU で頻繁に学習する場合は、設定を保存して、同じフラグを毎回入力しなくて済むようにできます。

`accelerate config` は、GPU の数や混合精度などのハードウェア構成を設定ファイルに保存し、後で `accelerate launch` を実行する際にそれらのオプションを再入力しなくて済むようにします。これは LeRobot の学習ロジック自体を変更するものではなく、CLI 入力の繰り返しを減らすだけです。

マルチ GPU をたまにしか使わない場合（あるいは今回が初めての場合）は、これをスキップしてもまったく問題ありません。

対話的な設定において、一般的な「単一マシン＋複数 GPU」のシナリオでは、典型的な選択肢は次のとおりです：

- Compute environment: This machine
- Number of machines: 1
- Number of processes: 使用したい GPU の数
- GPU ids to use: Enter キーを押す（すべての GPU を使用）
- Mixed precision: 可能であれば fp16 を優先し、GPU が対応していると分かっている場合のみ bf16 を選択する

<CodeBlock language="bash">
{`accelerate config`}
</CodeBlock>

<CodeBlock language="bash">
{`accelerate launch $(which lerobot-train) \\

--dataset.repo_id=\${HF_USER}/my_dataset \\

--policy.type=act \\

--policy.repo_id=\${HF_USER}/my_trained_policy \\

--output_dir=outputs/train/act_multi_gpu \\

--job_name=act_multi_gpu \\

--wandb.enable=true`}
</CodeBlock>

**マルチ GPU がハイパーパラメータに与える影響（および調整方法）**

LeRobot は、学習挙動が暗黙のうちに変化するのを避けるため、GPU の数に応じて学習率や学習ステップ数を自動調整しません。この点は、他の一部の分散学習フレームワークとは異なります。

マルチ GPU 用にハイパーパラメータを調整したい場合、一般的なアプローチは次のとおりです：

- **ステップ数**：有効バッチサイズ（batch_size × num_gpus）が増加するため、同じ総サンプル数を維持したい場合は、ステップ数をおおよそ `1 / num_gpus` に比例して減らすことができます。

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--batch_size=8 \\

--steps=50000 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

- **学習率**：各ステップで使用されるサンプル数が増えるため、多くの場合、学習率を GPU の数に比例して線形にスケールできます：
  new_lr = single_gpu_lr × num_gpus

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--optimizer.lr=2e-4 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

これらは厳密なルールではなく、一般的なヒューリスティクスです。迷う場合は、学習が安定している限り、学習率とステップ数を変更せずにそのままにしておいても構いません。

高度な設定やトラブルシューティングについては、Accelerate のドキュメントを参照してください：[Accelerate](https://huggingface.co/docs/accelerate/index)。

</details>

<details className="content-details">

<summary>（オプション）非同期推論</summary>

非同期推論が有効になっていない場合、LeRobot の制御フローは **従来型の逐次／同期推論** として理解できます：ポリシーはまず一連のアクションセグメントを予測し、そのセグメントを実行し、その後になって次の予測を待ちます。

大きなモデルでは、次のアクションチャンクを待っている間にロボットが目に見えて一時停止してしまうことがあります。

非同期推論の目的は、現在のアクションチャンクを実行している間に次のチャンクを先行計算し、アイドル時間を減らして応答性を向上させることです。

非同期推論は、**ACT、OpenVLA、Pi0、SmolVLA** などの **チャンクベースのアクションポリシー** を含む、LeRobot がサポートするポリシーに適用できます。

推論が実際の制御から切り離されるため、非同期推論は、より強力な計算リソースを持つマシンをロボットの推論に活用するのにも役立ちます。

非同期推論の詳細については、[Hugging Face のブログ](https://huggingface.co/blog/async-robot-inference)を参照してください。

まず、いくつかの基本的な概念を紹介します：

- **クライアント**：ロボットアームとカメラに接続し、画像やロボットの姿勢などの観測データを収集してサーバーに送信し、サーバーから返されるアクションチャンクを受信して順番に実行します。

- **サーバー**：計算リソースを提供するデバイスです。カメラデータとロボットアームのデータを受信し、推論（すなわち計算）を行ってアクションチャンクを生成し、それをクライアントに送り返します。これは、ロボットアームとカメラに接続された同じデバイスでも、同一ローカルネットワーク上の別のコンピュータでも、インターネット上でレンタルしたクラウドサーバーでも構いません。

- **アクションチャンク**：サーバー側でのポリシー推論によって得られた、ロボットアームのアクションコマンドのシーケンス。

非同期推論の 3 つのデプロイシナリオ

1. 単一マシンデプロイ

ロボット、カメラ、クライアント、サーバーがすべて同一デバイス上にあります。

これは最も単純なケースです。サーバーは 127.0.0.1 で待ち受けることができ、クライアントも 127.0.0.1:port に接続できます。公式ドキュメントのコマンド例はこのシナリオを想定しています。

2. LAN デプロイ

ロボットとカメラは軽量デバイスに接続され、ポリシーサーバーは同一ローカルネットワーク内の別の高性能マシン上で動作します。

この場合、サーバーは他のマシンからアクセス可能なアドレスで待ち受ける必要があり、クライアントも 127.0.0.1 ではなくサーバーの LAN IP に接続する必要があります。

3. ネットワーク越し / クラウドデプロイ

ポリシーサーバーはパブリックにアクセス可能なクラウドホスト上で動作し、クライアントはインターネット経由で接続します。

この方法では、クラウドホストのより強力な GPU を利用できます。ネットワーク状態が良好な場合、往復のネットワーク時間（ネットワークレイテンシ）は推論時間と比較して相対的に小さい場合もありますが、これは実際のネットワーク環境に依存します。

セキュリティに関する注意：LeRobot の非同期推論パイプラインには、認証されていない gRPC + pickle デシリアライズに関連するリスクがあります。サーバー上に重要な情報や重要なサービスがある場合、パブリックなデプロイでサービスをインターネットに直接公開することは推奨されません。より安全な方法は、VPN や SSH トンネリングを使用するか、少なくともセキュリティグループで許可する送信元 IP を自分のクライアントのパブリック IP にできるだけ制限することです。

**非同期推論デプロイの始め方**

**ステップ 1：環境構築**

まず、pip を使用して非同期推論に必要な追加依存関係をインストールします。クライアントとサーバーの両方で、追加依存関係付きの lerobot をインストールする必要があります：

<CodeBlock language="bash">
{`pip install -e ".[async]"`}
</CodeBlock>

**ステップ 2：ネットワーク設定と確認**

1. **プロキシの問題**

現在使用しているターミナルでプロキシが設定されており、接続の挙動がおかしい場合は、プロキシ用の環境変数を一時的に解除できます：

<CodeBlock language="bash">
{`unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY`}
</CodeBlock>

注意：上記のコマンドは現在のターミナルセッションにのみ影響します。別のターミナルウィンドウを開いた場合は、再度実行する必要があります。

2. **ファイアウォール / セキュリティグループでポートを開放する**

単一マシンデプロイ：通常はこの手順を省略できます。

LAN デプロイ：サーバー側で待ち受けポートを開放する必要があります。

LAN 構成で待ち受けポートを開放する例（サーバー側で実行）：

<CodeBlock language="bash">
{`sudo ufw allow 8080/tcp`}
</CodeBlock>

クラウドデプロイ：クラウドサーバーのセキュリティグループでこのポートを開放する必要があり、送信元 IP は可能な限り制限することを推奨します。

クラウドサーバー上で実行している場合：

サーバー管理コンソールのセキュリティグループでポート 8080 を開放するか、すでに開放されている別のポートを使用します。クラウドサービスプラットフォームごとに操作方法は異なるため、利用しているクラウドプロバイダのドキュメントを参照してください。

3. **IP アドレスの確認**

単一マシンデプロイの場合、この手順は省略できます（単一マシンの IP アドレスは常に 127.0.0.1 です）。

LAN デプロイの場合：

サーバー側の LAN IP アドレスを確認して覚えておく必要があります。クライアントが接続する際に指定すべきなのは、クライアント自身の IP ではなく、policy_server を実行しているマシンの LAN IP です。

Linux / Jetson / Raspberry Pi：

<CodeBlock language="bash">
{`hostname -I`}
</CodeBlock>

複数のアドレスが表示される場合は、一般的に現在の LAN ネットワークインターフェースに対応するもの（例：192.168.x.x）を選びます。

次のコマンドを使うこともできます：

<CodeBlock language="bash">
{`ip addr`}
</CodeBlock>

現在接続中のネットワークインターフェースの inet フィールドを確認します。

Windows：

<CodeBlock language="shell">
{`ipconfig`}
</CodeBlock>

IPv4 Address . . . . . . . . . . . : 192.168.14.140 のようなフィールドを探します。それがそのマシンの LAN IP アドレスです。

macOS：

<CodeBlock language="bash">
{`ifconfig`}
</CodeBlock>

現在接続中のネットワークインターフェースに対応する inet フィールドを探します。それが LAN IP アドレスです。

サーバー側の LAN IP アドレスを覚えておく必要があります。ここではそれを `<LAN IP address>` と表記します。

クラウドサーバーデプロイの場合：

サーバーのコントロールパネルでパブリック IP を探します。通常、次のいずれかの名称になっています：

Public IPv4

External IP

Public IP address

EIP

Public IP

パブリック IP アドレスを覚えておく必要があります。ここではそれを `<server public IP>` と表記します。

4. **接続テスト**

単一マシンデプロイ：この手順は省略できます

LAN / クラウドデプロイ：クライアント側からサーバーポートに到達できるかテストすることを推奨します。テスト例は次のとおりです：

LAN 例：クライアント側で実行

<CodeBlock language="bash">
{`nc -vz <LAN IP address> 8080`}
</CodeBlock>

クラウド例：クライアント側で実行

<CodeBlock language="bash">
{`nc -vz <server public IP> 8080`}
</CodeBlock>

**ステップ 3：サービスを起動する**

**シナリオ A：単一マシンデプロイ**

1 つのターミナルでローカルサービスを起動します：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=127.0.0.1 \\
--port=8080`}
</CodeBlock>

正常に起動したら、このターミナルは開いたままにしておく必要があります。別のコマンドを実行するには、新しいターミナルを開く必要があります。

**シナリオ B：LAN デプロイ**

サーバー側で実行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

この場合、クライアントが接続する際の `--server_address` には、`<LAN IP address>:8080` のようにサーバー側の LAN IP アドレスを指定する必要があります。

**シナリオ C：クラウドサーバーデプロイ**

サーバー側で実行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

この場合、クライアントが接続する際の `--server_address` には、`<server public IP>:8080` のようにサーバーのパブリック IP アドレスを指定する必要があります。

**ステップ 4：推論パラメータを選択する**

クライアント側で実行：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.robot_client \\
--server_address=<ip address>:8080 \\
--robot.type=so100_follower \\
--robot.port=/dev/tty.usbmodem585A0076841 \\
--robot.id=follower_so100 \\
--robot.cameras="{ laptop: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}, phone: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \\
--task="dummy" \\
--policy_type=your_policy_type \\
--pretrained_name_or_path=user/model \\
--policy_device=cuda \\
--actions_per_chunk=50 \\
--chunk_size_threshold=0.5 \\
--aggregate_fn_name=weighted_average \\
--debug_visualize_queue_size=True`}
</CodeBlock>

パラメータの説明：

- `--server_address`

ポリシーサーバーのアドレスとポートを指定します。`<ip address>` は 127.0.0.1（ローカルマシン）、`<LAN IP address>`（LAN）、または `<server public IP>`（クラウドサーバー）に置き換えます。

- `--robot.type, --robot.port, --robot.id, --robot.cameras`

ハードウェアデバイスに関するパラメータです。これらはデータセット収集時に使用したパラメータと一致させる必要があります。

- `--task`

タスクの説明です。SmolVLA のようなビジョン・ランゲージポリシーは、このタスクテキストに基づいてアクションの対象を判断できます。

- `--policy_type`

ここを具体的なポリシー名に置き換えます。例えば：

- smolvla

- act

- `--pretrained_name_or_path`

サーバー側のモデルパス、または Hugging Face 上のモデルパスに置き換える必要があります。

- `--policy_device`

サーバー側で使用する推論デバイスを指定します。

cuda、mps、cpu のいずれかを指定できます。

- `--actions_per_chunk=50`

1 回の推論で何個のアクションを出力するかを指定します。

この値が大きいほど：

利点：アクションバッファに十分な余裕ができ、枯渇しにくくなる
欠点：予測ホライズンが長くなるため、制御誤差がより目立って蓄積する可能性がある

- `--chunk_size_threshold=0.5`

次のアクションチャンクをサーバーに要求するタイミングを指定します。

これは通常 0〜1 の範囲のしきい値です。

次のように理解できます：現在のアクションキューの残り割合がこのしきい値を下回ったとき、クライアントは事前に新しい観測を送信し、次のアクションチャンクを要求します。

ここで 0.5 に設定しているのは、次のことを意味します：

現在のアクションチャンクが半分ほど消費されたとき

クライアントが次のアクションチャンクの要求を開始する

この値が大きいほど、リクエスト送信の頻度が高くなり、システムの応答性は高まりますが、サーバーへの負荷も増加します。

この値が小さいほど、挙動は同期推論に近づきます。

- `--aggregate_fn_name=weighted_average`

重なり合うアクション区間を集約する方法を指定します。

非同期推論では、古いアクションチャンクがまだ完全に実行されていないうちに、新しいアクションチャンクがすでに到着している場合があります。

その場合、2 つのチャンクは時間区間の一部で重なり合うため、それらを最終的に実行されるアクションに統合するための集約関数が必要になります。

weighted_average の意味は：

重なり合う部分を重み付き平均で融合する、ということです。

これにより、アクションの切り替えがよりスムーズになり、急激な変化を抑えられることが多いです。

- `--debug_visualize_queue_size=True`

実行時にアクションキューのサイズを可視化するかどうかを指定します。

有効にすると、キューが頻繁に底をついていないかをより直接的に確認でき、actions_per_chunk と chunk_size_threshold のチューニングに役立ちます。

**ステップ 5：ロボットの挙動に基づいてパラメータを調整する**

非同期推論では、同期推論には存在しない、調整が必要な追加パラメータが 2 つあります：

パラメータ 推奨初期値 説明

actions_per_chunk 50 ポリシーが一度に出力するアクション数。典型的な値：10〜50。

chunk_size_threshold 0.5 アクションキューの残り割合が chunk_size_threshold 以下になったとき、クライアントが新しいアクションチャンク要求を送信します。値の範囲は [0, 1] です。

`--debug_visualize_queue_size=True` の場合、アクションキューサイズの変化が実行時にプロットされます。

非同期推論でバランスを取る必要があるのは次の点です：サーバーがアクションチャンクを生成する速度が、クライアントがアクションチャンクを消費する速度以上でなければなりません。そうでない場合、アクションキューが空になり、ロボットが再びカクつき始めます（キューの可視化で、曲線が下端に張り付く形で確認できます）。

サーバーがアクションチャンクを生成する速度は、モデルサイズ、デバイスの種類、VRAM / メモリ、GPU の計算能力などの要因の影響を受けます。

クライアントがアクションチャンクを消費する速度は、設定された実行 fps の影響を受けます。

キューが頻繁に空になる場合は、`actions_per_chunk` を増やすか、`chunk_size_threshold` を増やすか、fps を下げる必要があります。

キューの曲線が頻繁に変動していても、キュー内に残っているアクションが常に十分であれば、`chunk_size_threshold` を適切に下げることができます。

一般的には：

`actions_per_chunk` の経験的な範囲は 10〜50 です

`chunk_size_threshold` の経験的な範囲は 0.5〜0.7 であり、チューニング時は 0.5 から始めて徐々に増やすことを推奨します

</details>

次のエラーが発生した場合：

<CodeBlock language="bash">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

次のコマンドを実行して解決を試してください：

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

学習には数時間かかるはずです。`outputs/train/act_so100_test/checkpoints` にチェックポイントが保存されます。

チェックポイントから学習を再開するには、`act_so101_test` ポリシーの `last` チェックポイントから再開する例として、以下のコマンドを使用します：

<CodeBlock language="bash">
{`lerobot-train \\
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \\
  --resume=true`}
</CodeBlock>

**ポリシーチェックポイントをアップロードする**

学習が完了したら、次のコマンドで最新のチェックポイントをアップロードします：

<CodeBlock language="bash">
{`huggingface-cli upload \${HF_USER}/act_so101_test \\
  outputs/train/act_so101_test/checkpoints/last/pretrained_model`}
</CodeBlock>

中間チェックポイントをアップロードすることもできます：

<CodeBlock language="bash">
{`CKPT=010000
huggingface-cli upload \${HF_USER}/act_so101_test\${CKPT} \\
  outputs/train/act_so101_test/checkpoints/\${CKPT}/pretrained_model`}
</CodeBlock>

</section>

## FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>FAQ</h2>
    <p>ポート、サーボ ID、ffmpeg、カメラ、データセット、評価、学習に関するトラブルシューティングを一元的にまとめています。</p>
  </div>

<details className="content-details">
<summary>どの LeRobot リポジトリを使うべきですか？</summary>

この wiki で推奨されているリポジトリを使用してください：

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

このバージョンは SO-ARM10x で検証済みです。上流の LeRobot リポジトリは更新が速いため、コマンド引数、データセット形式、依存関係がこのチュートリアルと異なる場合があります。

</details>

<details className="content-details">
<summary>サーボ ID 設定中に `Motor 'gripper' was not found` と表示される</summary>

次のエラーが表示される場合：

<CodeBlock language="text">
{`Motor 'gripper' was not found, Make sure it is connected`}
</CodeBlock>

通信ケーブルが正しく接続されているか、サーボバスに正しい電圧が供給されているかを確認してください。

</details>

<details className="content-details">
<summary>`Could not connect on port "/dev/ttyACM0"`</summary>

`/dev/ttyACM0` が存在するにもかかわらず LeRobot が接続できない場合、シリアルポートの権限が不足していることがよくあります。次を実行してください：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

また、リーダーアームとフォロワーアームが想定どおりのポートにマッピングされているかを再確認してください。

</details>

<details className="content-details">
<summary>`No valid stream found in input file`</summary>

次のメッセージが表示される場合：

<CodeBlock language="text">
{`No valid stream found in input file. Is -1 of the desired media type?`}
</CodeBlock>

ffmpeg 7.1.1 をインストールしてください：

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="No valid stream error" />
</div>

</details>

<details className="content-details">
<summary>`Present_Position` の同期読み取りに失敗した</summary>

次のメッセージが表示される場合：

<CodeBlock language="text">
{`ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!`}
</CodeBlock>

該当するアームの電源が入っているか、バスサーボのデータケーブルが緩んでいたり外れていたりしないかを確認してください。サーボの LED が消灯している場合、そのサーボより手前のケーブルが緩んでいる可能性があります。

</details>

<details className="content-details">
<summary>キャリブレーション中に `Magnitude 30841 exceeds 2047` と表示される</summary>

次のメッセージが表示される場合：

<CodeBlock language="text">
{`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`}
</CodeBlock>

一度アームの電源を切って再起動し、再度キャリブレーションを行ってください。問題が解決しない場合は、Seeed Studio SoARM クイックキャリブレーションツールを使用して中立位置のキャリブレーションとサーボ ID の確認を行い、その後にアーム全体のキャリブレーションをやり直してください。

</details>

<details className="content-details">
<summary>修理や部品交換後に再キャリブレーションするには？</summary>

古いキャリブレーションファイルを削除してから、再度キャリブレーションを行ってください：

<CodeBlock language="bash">
{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators`}
</CodeBlock>

キャリブレーション情報は、これらのディレクトリ内の JSON ファイルとして保存されています。ハードウェアが変更されたにもかかわらず古いキャリブレーションファイルが残っていると、LeRobot が古いオフセットを再利用してしまう可能性があります。

</details>

<details className="content-details">
<summary>記録中にキーボードショートカットが効かない</summary>

データセット記録中に右矢印キー、左矢印キー、または ESC キーが反応しない場合、まず `$DISPLAY` 環境変数が設定されているか確認してください。また、`pynput` をダウングレードしてみることもできます：

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

</details>

<details className="content-details">
<summary>記録中に失敗したエピソードはどのように扱えばよいですか？</summary>

物体が落下したり、グリッパーが掴み損ねたり、エピソードの品質が低い場合は、アームを安全な待機姿勢に戻し、左矢印キーを押してそのエピソードを破棄して再記録してください。タスクが早く終了し、ロボットがすでに待機姿勢に戻っている場合は、右矢印キーを押すことで残り時間を待たずに次のエピソードへ進むことができます。

</details>

<details className="content-details">
<summary>データセット収集時に注意すべき点は？</summary>

カメラ位置、カメラ角度、周囲の照明を安定させてください。カメラの画角内に不安定な背景や歩行者が入らないようにします。記録時とデプロイ時の環境に大きな差があると、ポリシーがうまく動作しない原因になります。

開始前に `--dataset.num_episodes` を十分大きな値に設定してください。必要な場合を除き、記録を途中で手動停止しないでください。平均値や分散などのデータセット統計量は収集完了後に計算され、学習に必要となるためです。

</details>

<details className="content-details">
<summary>記録済みデータセットを削除または編集するには？</summary>

記録済みデータセットの削除や編集については、データセットツールのチュートリアルを参照してください：

[Dataset Tool](/ja/lerobot_dataset_tool)

</details>

<details className="content-details">
<summary>USB カメラの画像データが読み取れない</summary>

USB カメラを USB ハブ経由で接続するのは避けてください。デバイスに直接接続し、可能であれば USB 3.0 ポートを使用して、十分な画像伝送帯域幅を確保してください。

</details>

<details className="content-details">
<summary>Orbbec カメラのタイムアウトまたはシリアル番号の不一致</summary>

フレーム待機中にタイムアウトが発生する場合は、カメラを一度抜き差ししてください。次のメッセージが表示される場合：

<CodeBlock language="text">
{`No Orbbec camera found for 'XXXX'`}
</CodeBlock>

カメラ検出コマンドを実行し、実際のシリアル番号で `serial_number_or_name` を更新してください：

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

</details>

<details className="content-details">
<summary>評価中に `File exists` と表示される</summary>

評価時に `eval_` ディレクトリがすでに存在すると報告された場合は、先に既存の評価フォルダを削除してから、再度プログラムを実行してください。

<CodeBlock language="text">
{`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`}
</CodeBlock>

</details>

<details className="content-details">
<summary>評価中に `mean is infinity` と表示される</summary>

次のメッセージが表示される場合：

<CodeBlock language="text">
{`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`}
</CodeBlock>

`--robot.cameras` のカメラキー（`front` や `side` など）が、データセット記録時に使用したキーと完全に一致していることを確認してください。

</details>

<details className="content-details">
<summary>`TypeError: stack(): argument 'tensors' must be tuple of Tensors` と表示される</summary>

次のメッセージが表示される場合：

<CodeBlock language="text">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

互換性のある datasets バージョンをインストールしてみてください：

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`rerun` に `scalar` 属性がない</summary>

次のメッセージが表示される場合：

<CodeBlock language="text">
{`AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`}
</CodeBlock>

rerun SDK をダウングレードしてください：

<CodeBlock language="bash">
{`pip3 install rerun-sdk==0.23`}
</CodeBlock>

</details>

<details className="content-details">
<summary>ACT の学習には通常どのくらい時間がかかりますか？</summary>

おおよその目安として、50エピソードでACTを学習する場合、RTX 3060 8GB を搭載したノートPCでは約6時間、RTX 4090 または A100 では約2〜3時間かかります。実際の時間は、データセットサイズ、画像解像度、バッチサイズ、およびハードウェアによって異なります。

</details>

:::tip
このFAQを確認しても解決しないソフトウェアや依存関係の問題が発生した場合は、[LeRobot GitHub repository](https://github.com/huggingface/lerobot) または [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU) に報告してください。
:::

</section>


## 引用

<section id="references" className="section-card">
  <div className="section-title">
    <span>参考文献</span>
    <h2>引用</h2>
    <p>関連ドキュメント、プロジェクト、論文、および外部リソース。</p>
  </div>

[Chinese Document](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

TheRobotStudio プロジェクト: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface プロジェクト: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

</section>

## 技術サポート & 製品ディスカッション

<section id="support" className="section-card">
  <div className="section-title">
    <span>サポート</span>
    <h2>技術サポート & 製品ディスカッション</h2>
    <p>製品に関する質問について、Seeed Studio に連絡し、コミュニティディスカッションに参加しましょう。</p>
  </div>

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。


<div className="path-grid">
  <a className="path-card" href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer"><strong>Forum</strong><span>Seeed フォーラムで製品および技術的な質問をしてください。</span></a>
  <a className="path-card" href="https://www.seeedstudio.com/contacts" target="_blank" rel="noopener noreferrer"><strong>Email Support</strong><span>Seeed Studio サポートに直接連絡してください。</span></a>
  <a className="path-card" href="https://discord.gg/eWkprNDMU7" target="_blank" rel="noopener noreferrer"><strong>Discord</strong><span>Discord 上の Seeed コミュニティに参加してください。</span></a>
  <a className="path-card" href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" target="_blank" rel="noopener noreferrer"><strong>GitHub Discussion</strong><span>wiki コンテンツやドキュメントに関する問題を議論してください。</span></a>
</div>


</section>

</div>
