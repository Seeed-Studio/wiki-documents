---
description: このWikiでは、SO-ARM100 / SO-ARM101向けに、組み立て、キャリブレーション、テレオペレーション、カメラ、データセット記録、学習、評価、およびデプロイのコツを含む、完全なLeRobotワークフローを提供します。
title: SO-Arm LeRobot チュートリアル
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
aliases:
  - /lerobot_so100m
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 3/11/2026
  author: ZhangJiaQuan
createdAt: '2025-06-05'
updatedAt: '2026-09-23'
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/ja/lerobot_so100m_new/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LeRobot における SO-ARM100 と SO-ARM101 ロボットアームの始め方

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ ノーコード · 環境構築不要</span>
    <p className="sensecraft-banner__title">セットアップをスキップして、1つのアプリから reBot Arm と LeRobot を実行</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics は、SO-ARM101、reBot Arm 102 + B601-RS および B601-DM 向けの、Seeed のノーコードプラットフォームです。アームを接続し、キャリブレーションを行い、デモを収集し、学習を実行し、ガイド付きインターフェースから推論を実行できます — Python 環境もターミナルも不要です。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6ステップのガイド付きワークフロー</li>
      <li>✅ クラウド学習 — ローカルGPU不要</li>
      <li>✅ Windows / macOS クライアント</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en/download?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">SenseCraft Robotics へ移動 ↗</a>
    <a className="sensecraft-banner__link" href="/ja/sensecraft_robotics/">ソフトウェアガイド</a>
  </div>
</div>

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM10x × LeRobot</span>
    <h2>組み立てとキャリブレーションからデータセット収集、学習、実機デプロイまで</h2>
    <p>
      このWikiでは、LeRobot における SO-ARM100 / SO-ARM101 の完全なワークフローを順を追って説明します：
      ハードウェアセットアップ、サーボ設定、アームのキャリブレーション、テレオペレーション、カメラ統合、
      データセット記録、可視化、リプレイ、ポリシー学習、評価、およびデプロイのコツ。
    </p>
    <div className="hero-actions">
      <a href="#quick-path">学習パスを見る</a>
      <a href="#install-lerobot">LeRobot をインストール</a>
      <a href="#record-dataset">データセットを記録</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推奨される読み進め方</strong>
    <span>初めてのユーザー：仕様、電源ルール、サーボ設定から始めてください。</span>
    <span>完成品アームのユーザー：フルアームのキャリブレーションとテレオペレーションに進んでください。</span>
    <span>既存の LeRobot ユーザー：カメラ、データセット記録、学習、または FAQ に直接進んでください。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：モーションプログラムを実行する前にロボットアームの作業空間を必ず片付けてください</strong>
    <p>
      ロボットアームを動かす可能性のあるプログラムを実行する前に、作業空間の半径1メートル以内から、
      貴重品、壊れやすい物、工具、ケーブル、および無関係な物体を取り除いてください。デバッグや動作中は、
      人がアームの動作範囲に近づかないようにしてください。
    </p>
    <ul>
      <li>アームの電源が入っている状態では、関節、モーター、リンク、グリッパー、エンドツールには触れないでください。</li>
      <li>サーボ設定、キャリブレーション、テレオペレーション、データセット記録、リプレイ、またはポリシー評価を行う前に、アームがしっかり固定されていることを確認してください。</li>
      <li>少なくとも1メートルの安全距離を保ち、周囲の人にアームが突然動く可能性があることを理解してもらってください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断などが発生した場合は、直ちにプログラムを停止し、点検前に電源を切ってください。</li>
      <li>サーボケーブル、USBケーブル、電源コネクタ、モーター制御ボードのケーブルを抜き差しする前には、必ず電源を切ってください。</li>
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
    <div className="course-path-item"><span className="course-index">2</span><div className="course-path-copy"><strong>LeRobot をインストール</strong><p>Miniforge、検証済みの Seeed LeRobot リポジトリ、ffmpeg、PyTorch、およびカメラ依存関係をセットアップします。</p></div><span className="course-tag">環境</span></div>
    <div className="course-path-item"><span className="course-index">3</span><div className="course-path-copy"><strong>モーターを設定して組み立てる</strong><p>サーボIDとボーレートを設定し、リーダーアームとフォロワーアームを組み立てます。</p></div><span className="course-tag">ハードウェア</span></div>
    <div className="course-path-item"><span className="course-index">4</span><div className="course-path-copy"><strong>キャリブレーションとテレオペ</strong><p>両方のアームをキャリブレーションし、リーダーからフォロワーへの制御チェーンが安定していることを確認します。</p></div><span className="course-tag">制御</span></div>
    <div className="course-path-item"><span className="course-index">5</span><div className="course-path-copy"><strong>カメラを追加してデータを記録</strong><p>OpenCV、RealSense、または Orbbec カメラを接続し、クリーンで再現性のあるエピソードを記録します。</p></div><span className="course-tag">データ</span></div>
    <div className="course-path-item"><span className="course-index">6</span><div className="course-path-copy"><strong>ポリシーを学習・評価</strong><p>まず ACT から始め、その後 SmolVLA、Pi0、Pi0.5、GR00T、PEFT、非同期推論を試してみてください。</p></div><span className="course-tag">AI</span></div>
  </div>
</section>

## 概要

<section id="overview" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>プロジェクト紹介</h2>
    <p>SO-ARM10x は、オープンソースで低コストなロボットアームと LeRobot エコシステムを組み合わせ、データ収集、模倣学習、実機デプロイを実現します。</p>
  </div>

:::tip
このガイドは、Seeed によって検証された LeRobot セットアップに従っています。新しいバージョンを使用する前に、[依存関係の要件](https://github.com/Seeed-Projects/lerobot/blob/main/pyproject.toml)を確認してください。
:::

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 および SO-ARM101 オープンソースロボットアームキット" />
</div>

<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手 🖱️</span>
  </a>
</div>

:::caution
Seeed Studio はキットのハードウェア品質に責任を負います。ソフトウェアチュートリアルは、公式の LeRobot ドキュメントに可能な限り忠実に従っています。解決できないソフトウェアや依存関係の問題が発生した場合は、このページ末尾の FAQ を確認し、[LeRobot GitHub リポジトリ](https://github.com/huggingface/lerobot) または [LeRobot Discord チャンネル](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

</section>

## 3Dプリントガイド

<section id="3d-printing" className="section-card">
  <div className="section-title">
    <span>3Dプリント</span>
    <h2>3Dプリントガイド</h2>
    <p>キット版アーム用のプリント設定と STL ダウンロード。</p>
  </div>

<details className="content-details">
<summary>プリント設定とダウンロードを表示</summary>

**推奨プリント設定**（一般的なFDMプリンタでテスト済み）：

- 材料：PLA+
- ノズル / レイヤー高さ：0.4mm ノズルで 0.2mm レイヤー、または 0.6mm ノズルで 0.4mm レイヤー
- インフィル：15%
- サポート：全体（45°より急な傾斜は無視）；水平方向のネジ穴にはサポートなし

**ダウンロードしてプリント：**

リーダーおよびフォロワーのすべてのパーツは1つの STL ファイルにまとめられており、サポートを最小限にするようすでに向きが調整されています — ダウンロードしてそのままプリントしてください：

[SO-ARM101 プリントファイル (soarm101.stl) をダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/soarm101.stl)

**オプション：** ソフトグリッパー（TPU フィンガー）やカメラマウントインサートをプリントできます — ファイルは [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) リポジトリにあります。

</details>

</section>

## 初期システム環境

<section id="environment" className="section-card">
  <div className="section-title">
    <span>環境</span>
    <h2>初期システム環境</h2>
    <p>インストール前に、Ubuntu、Jetson、CUDA、Python、PyTorch、Torchvision の要件を確認してください。</p>
  </div>

**Ubuntu x86 の場合：**

- Ubuntu 22.04
- CUDA 12+
- Python 3.12
- Torch 2.6+

**Jetson Orin の場合：**

- Jetson JetPack 6.0 および 6.1（JetPack 6.2 はまだサポートされていません）
- Python 3.12
- Torch 2.3+

</section>

## LeRobot をインストール

<section id="install-lerobot" className="section-card">
  <div className="section-title">
    <span>ステップ 1</span>
    <h2>LeRobot をインストール</h2>
    <p>Miniforge、検証済みの Seeed LeRobot リポジトリ、ffmpeg、PyTorch、およびハードウェア固有の依存関係をインストールします。</p>
  </div>

pytorch や torchvision などの環境は、使用している CUDA に基づいてインストールする必要があります。

<Tabs defaultValue="Jetson">

<TabItem value="Jetson" label="Jetson">

1. Miniforge をインストールします：

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Follow the prompts by entering 'yes' or pressing Enter. Once the installation is complete:
source ~/.bashrc`}
</CodeBlock>

2. lerobot 用に新しい conda 環境を作成して有効化します

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.12 && conda activate lerobot`}
</CodeBlock>

3. Lerobot をクローンします：

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. miniforge を使用している場合、環境内に ffmpeg をインストールします：

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
これは通常、libsvtav1 エンコーダーでコンパイルされた、あなたのプラットフォーム向けの ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダーを確認）、次のことができます：

- 【任意のプラットフォーム】次のコマンドで ffmpeg 7.X を明示的にインストールします：

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- 【Linux のみ】ffmpeg のビルド依存関係をインストールし、libsvtav1 を有効にしてソースから ffmpeg をコンパイルし、`which ffmpeg` を使って、インストールしたものに対応する ffmpeg バイナリを使用していることを確認します。

このようなエラーが発生した場合も、このコマンドを使用できます。

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="No valid stream error" />
</div>

:::

5. feetech モーター用の依存関係付きで LeRobot をインストールします：

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Jetson JetPack 6.0 および 6.1 デバイス向け（このステップを実行する前に、必ずステップ 5 で [Pytorch-gpu と Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) をインストールしてください）：

<CodeBlock language="bash">
{`conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson JetPack 6.0 and 6.1
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision`}
</CodeBlock>

7. Pytorch と Torchvision を確認します

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

1. Miniforge をインストールします：

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Once the installation is complete:
source ~/.bashrc
# Initialize all shells
conda init --all`}
</CodeBlock>

2. lerobot 用に新しい conda 環境を作成して有効化します

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.12 && conda activate lerobot`}
</CodeBlock>

3. Lerobot をクローンします：

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. miniforge を使用している場合、環境内に ffmpeg をインストールします：

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
これは通常、libsvtav1 エンコーダーでコンパイルされた、あなたのプラットフォーム向けの ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダーを確認）、次のことができます：

- 【任意のプラットフォーム】次のコマンドで ffmpeg 7.X を明示的にインストールします：

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- 【Linux のみ】ffmpeg のビルド依存関係をインストールし、libsvtav1 を有効にしてソースから ffmpeg をコンパイルし、`which ffmpeg` を使って、インストールしたものに対応する ffmpeg バイナリを使用していることを確認します。

このようなエラーが発生した場合も、このコマンドを使用できます。

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="No valid stream error" />
</div>

:::

5. feetech モーター用の依存関係付きで LeRobot をインストールします：

:::tip
新しく構成した Ubuntu 22.04 VM、特に最小インストールでは、`gcc` やその他の C ビルドツールがデフォルトでインストールされていない場合があります。その場合、`evdev` Python パッケージをビルドできないため、feetech 依存関係付きの LeRobot のインストールが失敗することがあります。

まず基本的なビルドツールをインストールします：

<CodeBlock language="bash">
{`sudo apt update
sudo apt install build-essential`}
</CodeBlock>

インストール後、LeRobot のインストールコマンドを再実行してください。
:::

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Pytorch と Torchvision を確認します

pip で lerobot 環境をインストールすると、元の Pytorch と Torchvision がアンインストールされ、CPU 版の Pytorch と Torchvision がインストールされるため、Python で確認を行う必要があります。

<CodeBlock language="python">
{`python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python`}
</CodeBlock>

出力結果が `False` の場合、現在の環境は CPU 版の PyTorch を使用しています。GPU での学習や推論が必要な場合は、[公式 PyTorch ガイド](https://pytorch.org/index.html) に従って、CUDA バージョンに合った Pytorch と Torchvision をインストールしてください。NVIDIA GPU を搭載し、GPU アクセラレーションが必要な環境では、最終的な確認結果が `True` である必要があります。

:::tip

注意：NVIDIA RTX 50 シリーズ GPU には、プレビュー版の CUDA 12.8 以上が必要です。

ダウンロードコマンドは次のとおりです：

<CodeBlock language="bash">
{`pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128`}
</CodeBlock>

:::

</TabItem>

</Tabs>

</section>

## モーターを設定し、アームを組み立てる

<section id="setup-motors-assembly" className="section-card">
  <div className="section-title">
    <span>Step 2</span>
    <h2>モーターを設定し、アームを組み立てる</h2>
    <p>サーボ ID とボーレートを設定し、配線と電源を確認してから、リーダーアームとフォロワーアームを組み立てます。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>動作前の安全チェック</strong>
      <p>
        ロボットアームの作業領域から 1 メートル以内の貴重品や関係のない人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、電源とケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

:::tip
あらかじめ組み立て済みの SO-ARM101 を使用していますか？モーターの組み立てはスキップして、直接[アームのキャリブレーションセクション](#calibration)に進んでください。
:::
<details className="content-details">

<summary> キット版の場合は、以下の手順に従ってください </summary>

SO-ARM101 のサーボキャリブレーションと初期化プロセスは、方法とコードの両方において SO-ARM100 と同じです。ただし、SO-ARM101 リーダーアームの最初の 3 つの関節のギア比は SO-ARM100 とは異なるため、それらを区別して慎重にキャリブレーションすることが重要です。

モーターを設定するには、1 つのバスサーボアダプタと 6 個のモーターをリーダーアーム用に割り当て、同様にもう 1 つのバスサーボアダプタと 6 個のモーターをフォロワーアーム用に割り当てます。フォロワー（F）用かリーダー（L）用か、そして ID が 1 から 6 のどれかを各モーターにラベル付けして書き込んでおくと便利です。**F1–F6** を **フォロワーアーム** の関節 1〜6、**L1–L6** を **リーダーアーム** の関節 1〜6 を表すものとして使用します。対応するサーボモデル、関節の割り当て、およびギア比の詳細は次のとおりです：

| サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
ここで、5V または 12V の電源をモーターバスに接続する必要があります。STS3215 7.4V モーターには 5V、STS3215 12V モーターには 12V を使用します。リーダーアームは常に 7.4V モーターを使用することに注意してください。12V モーターと 7.4V モーターの両方がある場合、誤った電源を接続するとモーターが焼損する可能性があるため、正しい電源を接続していることを確認してください。次に、モーターバスを USB 経由でコンピュータに接続します。USB は電源を供給しないため、電源と USB の両方を接続する必要があることに注意してください。
:::

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="SO-ARM101 リーダーおよびフォロワーサーボ（L1〜L6 と F1〜F6）とギア比のラベル表示" />
</div>

***以下はコードによるキャリブレーション手順です。上の画像の配線サーボを参照してキャリブレーションを行ってください***

アームに対応する USB ポートを見つける
各アームに対して正しいポートを見つけるには、ユーティリティスクリプトを 2 回実行します：

<CodeBlock language="bash">
{`lerobot-find-port`}
</CodeBlock>

出力例：

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

フォロワーアームのポートを特定する際の出力例（例：Mac では `/dev/tty.usbmodem575E0031751`、Linux では `/dev/ttyACM0` の可能性あり）：

リーダーアームのポートを特定する際の出力例（例：`/dev/tty.usbmodem575E0032081`、Linux では `/dev/ttyACM1` の可能性あり）：

USB ポートへのアクセス権を付与する必要がある場合は、次を実行します：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}
</CodeBlock>

:::tip

アームを接続する際、最初に接続したデバイスは ttyACM0（スレーブ／フォロワーアーム）に割り当てられ、2 番目に接続したデバイスは ttyACM1（マスター／リーダーアーム）に割り当てられます。

:::

**モーターを設定する**

**リーダーサーボのキャリブレーション参照画像**

| **リーダーアーム ジョイント 6 キャリブレーション** | **リーダーアーム ジョイント 5 キャリブレーション** | **リーダーアーム ジョイント 4 キャリブレーション** | **リーダーアーム ジョイント 3 キャリブレーション** | **リーダーアーム ジョイント 2 キャリブレーション** | **リーダーアーム ジョイント 1 キャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![SO-ARM101 リーダーアームサーボ L6 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![SO-ARM101 リーダーアームサーボ L5 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![SO-ARM101 リーダーアームサーボ L4 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![SO-ARM101 リーダーアームサーボ L3 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![SO-ARM101 リーダーアームサーボ L2 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![SO-ARM101 リーダーアームサーボ L1 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**フォロワーサーボのキャリブレーション参照画像**

| **フォロワーアーム ジョイント 6 キャリブレーション** | **フォロワーアーム ジョイント 5 キャリブレーション** | **フォロワーアーム ジョイント 4 キャリブレーション** | **フォロワーアーム ジョイント 3 キャリブレーション** | **フォロワーアーム ジョイント 2 キャリブレーション** | **フォロワーアーム ジョイント 1 キャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![SO-ARM101 フォロワーアームサーボ F6 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![SO-ARM101 フォロワーアームサーボ F5 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![SO-ARM101 フォロワーアームサーボ F4 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![SO-ARM101 フォロワーアームサーボ F3 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![SO-ARM101 フォロワーアームサーボ F2 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![SO-ARM101 フォロワーアームサーボ F1 がモーターバスアダプタに接続されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
再度、サーボジョイントの ID とギア比が SO-ARM101 のものと厳密に一致していることを確認してください。
:::

**フォロワーアームサーボをキャリブレーションする**

コンピュータからフォロワーアームのコントローラボードに USB ケーブルを接続し、電源を接続します。その後、次のコマンドを実行します。

<CodeBlock language="bash">
{`lerobot-setup-motors \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step`}
</CodeBlock>

次の指示が表示されるはずです。

<CodeBlock language="bash">
{`Connect the controller board to the 'gripper' motor only and press enter.`}
</CodeBlock>

指示どおり、グリッパーのモーターを接続します。このとき、ボードに接続されているモーターはその 1 つだけであり、かつそのモーター自体はまだ他のモーターとデイジーチェーン接続されていないことを確認してください。[Enter] を押すと、スクリプトがそのモーターの ID とボーレートを自動的に設定します。

その後、次のメッセージが表示されます：

<CodeBlock language="bash">
{`'gripper' motor id set to 6`}
</CodeBlock>

続いて次の指示が表示されます：

<CodeBlock language="bash">
{`Connect the controller board to the 'wrist_roll' motor only and press enter.`}
</CodeBlock>

コントローラボードから 3 ピンケーブルを外してもかまいませんが、すでに正しい位置にあるため、反対側はグリッパーモーターに接続したままで問題ありません。次に、別の 3 ピンケーブルを手首ロールモーターに接続し、それをコントローラボードに接続します。前のモーターと同様に、そのモーターだけがボードに接続されており、かつそのモーター自体が他のモーターに接続されていないことを確認してください。

:::caution
指示に従って、各モーターに対してこの操作を繰り返してください。
:::

:::tip
Enter を押す前に、毎回配線を確認してください。例えば、ボードを操作している間に電源ケーブルが外れてしまうことがあります。
:::

すべて完了するとスクリプトは終了し、その時点でモーターは使用可能な状態になります。各モーターから次のモーターへ 3 ピンケーブルを接続し、最初のモーター（id=1 の「shoulder pan」）からのケーブルをコントローラボードに接続します。コントローラボードはアームのベースに取り付けることができます。

**リーダーアームサーボをキャリブレーションする**

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

- SO-ARM101 の両腕組み立て手順は SO-ARM100 と同じです。唯一の違いは、SO-ARM101 ではケーブルクリップが追加されていることと、リーダーアーム側のジョイントサーボのギア比が異なることです。そのため、SO100 と SO101 のどちらも以下の内容を参照して組み立てることができます。
- 組み立て前に、モーターの型番、ギア比、および電源電圧をもう一度確認してください。SO101 を購入した場合は、上記のサーボモデルとジョイント対応表を参照して、F1〜F6 と L1〜L6 を区別してください。

:::

**リーダーアームを組み立てる**

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![SO-ARM101 リーダーアーム組み立てステップ 1：サーボが 3D プリントブラケットに取り付けられている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![SO-ARM101 リーダーアーム組み立てステップ 2：サーボケーブルがブラケット内を配線されている様子](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** | **ステップ 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **ステップ 19** | **ステップ 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**フォロワーアームを組み立てる**

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
    <p>フォロワーアームとリーダーアームをキャリブレーションして、物理的な位置がソフトウェア上の状態と一致するようにします。</p>
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

:::tip
SO100 と SO101 のコードには互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

:::danger
**SO101 Arm Kit Standard Edition** を購入した場合、すべての電源は 5V です。**SO101 Arm Kit Pro Edition** を購入した場合、リーダーアームは各ステップで 5V 電源を使用してキャリブレーションおよび動作させ、フォロワーアームは各ステップで 12V 電源を使用してキャリブレーションおよび動作させる必要があります。
:::

次に、SO-10x ロボットに電源とデータケーブルを接続してキャリブレーションを行い、同じ物理位置にあるときにリーダーアームとフォロワーアームが同じ位置値を持つようにする必要があります。このキャリブレーションは、ある SO-10x ロボットで学習したニューラルネットワークを別のロボットでも動作させるために不可欠です。

### ロボットアームを再キャリブレーションする

<details className="content-details">
<summary>再キャリブレーションのオプションを表示</summary>

ロボットアームを再キャリブレーションする必要がある場合、次の 2 つのオプションがあります：

**オプション 1：ローカルのキャリブレーションファイルを削除する**

再キャリブレーションを行う前に、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 配下のファイルを完全に削除してください。そうしないと、以前のキャリブレーションデータがこれらのディレクトリ内の JSON ファイルに保存されているため、システムがエラープロンプトを出す可能性があります。

**オプション 2：キャリブレーションコマンドで再キャリブレーションを選択する**

ターミナルでキャリブレーションコマンドを直接実行します。アームが以前にキャリブレーションされている場合、次のプロンプトが表示されます：

<CodeBlock language="bash">
{`Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:`}
</CodeBlock>

`c` を入力して **Enter** を押すと再キャリブレーションが開始されます。既存のキャリブレーションデータを保持して使用する場合は、そのまま **Enter** を押してください。

</details>

6 個のロボットサーボを 3 ピンインターフェース経由で接続し、シャーシサーボをサーボドライバボードに接続します。その後、次のコマンドまたは API の例を実行してアームをキャリブレーションします：

:::tip
PC（Linux）および Jetson デバイスでは、最初に接続した USB デバイスは通常 `ttyACM0` に、2 番目は `ttyACM1` にマッピングされます。コマンドを実行する前に、どのポートがリーダーとフォロワーにマッピングされているかを必ず確認してください。
:::

**フォロワーアームの手動キャリブレーション**

6 個のロボットサーボのインターフェースを 3 ピンケーブルで接続し、シャーシサーボをサーボドライブプレートに接続してから、次のコマンドまたは API の例を実行してロボットアームをキャリブレーションしてください：

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

以下のビデオはキャリブレーションの方法を示しています。まず、すべての関節が可動範囲の中央になる位置にロボットを移動させる必要があります。その後、Enter を押したら、各関節を可動範囲全体にわたって動かしてください。

:::tip
lerobot リポジトリの更新により、マスタースレーブアームのキャリブレーションを行う際に、ターミナルがサーボ 5 から信号を受信しないのは正常です。そのまま操作を続行してかまいません。
:::

**リーダーアームの手動キャリブレーション**

同じ手順でリーダーアームをキャリブレーションし、次のコマンドまたは API の例を実行します：

<CodeBlock language="bash">
{`lerobot-calibrate \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 # <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name`}
</CodeBlock>

:::tip

リーダーアームまたはフォロワーアームのキャリブレーション中に “Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port., Try running lerobot-find-port” というエラーが発生した場合は、`sudo chmod 666 /dev/ttyACM*` を実行して必要な権限を付与する必要があります。
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### （オプション）Seeed Studio SoARM クイックツールによる中立位置キャリブレーション

ロボットのキャリブレーションや動作中に、次のようなエラーが表示される場合があります：

`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`

これは通常、サーボの現在位置／ゼロオフセットが異常であり、そのため読み取り角度が想定範囲を超えていることを意味します。その場合、Seeed Studio の SoARM ツールを使用して**中立位置キャリブレーション**（現在位置を書き込み値 **2048** の中央に設定）を行い、その後アーム全体のキャリブレーションをやり直すことができます。

#### 1) GitHub からツールをクローンし、依存関係をインストールする

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt`}
</CodeBlock>

#### 2) 中立位置キャリブレーションと検証

スクリプトの場所：

- `src/tools/servo_middle_calibration.py`: 中立位置キャリブレーション（現在位置を **2048** として書き込み）
- `src/tools/servo_disable.py`: サーボトルクを無効化（手で関節を回しやすくする）
- `src/tools/servo_center_test.py`: **2048** に移動してキャリブレーション結果を検証

次の順番で実行します（コマンドは対話的にポートの選択を求めます）：

1. （オプション）トルクを無効化して、手動で関節を調整：

<CodeBlock language="bash">
{`python -m src.tools.servo_disable`}
</CodeBlock>

2. 中立位置キャリブレーションを実行（現在位置を 2048 に設定）：

<CodeBlock language="bash">
{`python -m src.tools.servo_middle_calibration`}
</CodeBlock>

3. 検証：サーボを 2048 に移動し、想定どおりの中立位置に戻るか確認：

<CodeBlock language="bash">
{`python -m src.tools.servo_center_test`}
</CodeBlock>

中立位置キャリブレーションが完了したら、上記の `lerobot-calibrate` の手順に戻り、アーム全体のキャリブレーションをやり直してください。

上記のようなエラーが発生した場合は、Steering Gear Debugging Tool を使用してデバッグすることができます。これは Windows、Ubuntu、Mac をサポートしています。

<div className="hero-actions">
    <a href="/ja/lerobot_steering_gear_debugging_tool">▶ Steering Gear Debugging Tool チュートリアルを開く</a>
</div>

</section>

## テレオペレーション

<section id="teleoperation" className="section-card">
  <div className="section-title">
    <span>ステップ 4</span>
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
これでロボットをテレオペレーションする準備が整いました！次のシンプルなスクリプトを実行します（カメラには接続せず、表示もしません）：

ロボットに関連付けられた id はキャリブレーションファイルを保存するために使用されます。同じ構成を使用する場合、テレオペレーション、記録、評価の際には同じ id を使用することが重要です。

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

teleoperate コマンドは自動的に以下を行います：

1. 不足しているキャリブレーションを検出し、キャリブレーション手順を開始します。
2. ロボットとテレオペレーションデバイスを接続し、テレオペレーションを開始します。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## カメラを追加する

<section id="camera" className="section-card">
  <div className="section-title">
    <span>Step 5</span>
    <h2>カメラを追加する</h2>
    <p>OpenCV、RealSense、または Orbbec カメラを追加し、データセットを記録する前に画像ストリームを確認します。</p>
  </div>

<details className="content-details">
<summary> RealSense D435i/D405 を使用する場合 </summary>

RealSense 深度カメラは LeRobot に RGB-D 認識機能を提供し、物体認識、点群再構成、テーブルトップマニピュレーションなどのタスクに適しています。ここで推奨されるモデルは **RealSense D405** と **RealSense D435i** です。

**RealSense D405**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" alt="Intel RealSense D405 close-range depth camera" />
</div>

RealSense D405 は短距離ステレオ深度カメラであり、テーブルトップロボットマニピュレーションなどの高精度な近距離タスク向けに設計されており、一般的な動作距離は **7 cm 〜 50 cm** です。

**RealSense D435i**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" alt="" />
</div>

RealSense D435i は深度センシング、RGB 画像、および IMU を組み合わせており、3D 再構成、SLAM、ロボット環境認識などの中距離〜近距離アプリケーションに適しています。

**1. カメラブランチに切り替える**

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
- デフォルトのストリーム構成

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

- `depth_alpha` は深度画像のスケーリング係数を制御し、表示結果や対象距離範囲に応じて調整できます。
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

Orbbec Gemini 2 はロボットアプリケーション向けの高性能 RGB-D カメラであり、正確な深度とカラーのアライメントを備えた同期 RGB および深度ストリームを提供します。ステレオ深度センシングと内蔵 6 軸 IMU を組み合わせることで、物体検出、3D 認識、マッピング、ナビゲーションなどのロボットタスクに非常に適しています。そのコンパクトな設計と完全な Orbbec SDK サポートにより、研究用途と実環境での導入の両方に適しています。

<div className="image-frame">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" alt="" />
</div>

Gemini 336 は Gemini 330 シリーズの新しいメンバーです。Gemini 335 の優れた深度性能を受け継ぎつつ、反射の多い屋内エリア、高ダイナミックシーンの暗部、明るい屋外環境における深度画像品質をさらに向上させています。ロボットアプリケーションにおいては、認識、自己位置推定、マニピュレーションなどのタスクに対して、より安定した高品質の深度データを提供できます。

**1. カメラブランチに切り替える**

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

デフォルトでは、USBFS のキャッシュサイズは 16 MB です。この値は高解像度画像、複数のデータストリーム、および複数デバイスのシナリオには不十分です。ユーザーはキャッシュサイズを最大 128 MB まで増やすことができます。

USBFS キャッシュサイズを確認
<CodeBlock language="bash">
{`cat /sys/module/usbcore/parameters/usbfs_memory_mb`}
</CodeBlock>

USBFS キャッシュサイズを一時的に増やす
<CodeBlock language="bash">
{`sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'`}
</CodeBlock>

:::tip

それでも `timeout error TimeoutError: Timed out waiting for frame from <lerobot.cameras.orbbec.camera_orbbec.OrbbecDepthCamera object at 0x7ba4ba130910.........>` が発生する場合は、カメラを再接続してください。

:::

**5. カメラを検出する**

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

このステップでは次の情報が出力されます：

- カメラモデル（Name）
- シリアル番号（Serial number）
- USB 情報
- デフォルトのストリーム構成

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
単一の Orbbec カメラを通常のカメラと一緒に使用する場合は、最初に Orbbec カメラを接続し、その後に通常のカメラを接続することを推奨します。

カメラ ID を検出するために lerobot-find-cameras opencv コマンドを実行すると、Orbbec カメラが連続する 3 つのカメラ番号を占有していることがわかります。そのため、通常のカメラは最後に接続し、その番号が末尾に割り当てられるようにすることをお勧めします。
:::

**7. パラメータの注意事項**

- `depth_alpha` は深度画像のスケーリング係数を制御します。`0.2` を初期値として、表示結果に基づいて微調整してください。
- 3 台以上の深度カメラを接続する場合は、安定性を高めるために `fps` を `15` に下げることを推奨します。
- より安定した表示とデータ転送のために、解像度は `640x480` に保つことを推奨します。

カメラ関連のエラーについては、このページの最後にある FAQ セクションを参照してください。

</details>

<details className="content-details">

<summary> If using a regular camera </summary>


:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
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
Intel RealSense カメラを macOS で使用する際に、`OSError finding RealSense cameras: failed to set power state` というエラーが発生することがあります。これは、同じコマンドを `sudo` 権限で実行することで解決できます。ただし、macOS で RealSense カメラを使用するのは不安定であることに注意してください。
:::

その後、次のコードを実行することで、テレオペレーション中にコンピュータ上でカメラ映像を表示できるようになります。これは、最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

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
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すこともできますし、`YUYV` 形式を試すこともできます。ただし後者では画像の解像度と FPS が低下し、その結果ロボットアームの動作にラグが生じます。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。とはいえ、同じ USB ハブ経由で 2 台のカメラをコンピュータに接続することは依然として推奨されません。
:::

例えば、サイドカメラを追加したい場合：

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
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すこともできますし、`YUYV` 形式を試すこともできます。ただし後者では画像の解像度と FPS が低下し、その結果ロボットアームの動作にラグが生じます。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。とはいえ、同じ USB ハブ経由で 2 台のカメラをコンピュータに接続することは依然として推奨されません。
:::

:::tip
もし次のようなバグが見つかった場合。

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" alt="" />
</div>

rerun のバージョンをダウングレードすることで、この問題を解決できます。

<CodeBlock language="bash">
{`pip3 install rerun-sdk==0.23`}
</CodeBlock>

:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

<details className="content-details">

<summary>Camera Mount Installation and Usage</summary>

**カメラマウントの取り付け**

クリーンなデータ収集のためにカメラ位置を固定します。トップダウン＋手首、トップダウン＋サイドビューなど、自由なマルチアングル調整をサポートします。通常の USB カメラや D435i、D405、Gemini 2 などの深度カメラに対応しています。SO-ARM101 および reBot ロボットアームと互換性があります。データ収集実験ボックスと組み合わせて使用することができ、ダウンロードしたデータセットやモデルをそのまま再利用できます。

<div class="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/2r3tvA7oJ_c" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" style={{width: 'auto', minWidth: '195px', height: 'auto', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px'}} href="https://www.seeedstudio.com/Robot-Arm-Camera-Mount-for-LeRobot-SO-10&reBot-B601-p-7003.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
</a></div>

</details>

</section>

## データセットを記録する

<section id="record-dataset" className="section-card">
  <div className="section-title">
    <span>Step 6</span>
    <h2>データセットを記録する</h2>
    <p>ローカルにデータセットを記録するか、Hugging Face Hub にアップロードし、データセットをクリーンかつ一貫した状態に保ちます。</p>
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

このうち、`repo_id` は任意に変更でき、`push_to_hub=false` とします。最終的に、データセットはホームフォルダ内の `~/.cache/huggingface/lerobot` ディレクトリに保存され、前述の `seeedstudio123/test` フォルダがそこに作成されます。

- Hugging Face Hub の機能を使ってデータセットをアップロードしたい場合で、まだ行っていない場合は、[Hugging Face settings](https://huggingface.co/settings/tokens) から作成できる書き込み権限付きトークンを使ってログインしていることを確認してください：

<CodeBlock language="bash">
{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential`}
</CodeBlock>

これらのコマンドを実行するために、Hugging Face リポジトリ名を変数に保存します：

<CodeBlock language="bash">
{`HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER`}
</CodeBlock>

5 エピソードを記録し、データセットを Hub にアップロードします：

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
    --dataset.single_task="黒いキューブをつかむ" \\
    --dataset.push_to_hub=true \\
    --dataset.episode_time_s=30 \\
    --dataset.reset_time_s=30`}
</CodeBlock>

次のような行がたくさん表示されます：

<CodeBlock language="bash">
{`INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)`}
</CodeBlock>

**record 関数**

**record** 関数は、ロボット動作中のデータ取得と管理のための一連のツールを提供します。

**1. データ保存**

- データは `LeRobotDataset` 形式で保存され、記録中にディスクへ書き込まれます。
- 既定では、記録後にデータセットはあなたの Hugging Face ページにプッシュされます。
- アップロードを無効にするには、`--dataset.push_to_hub=False` を使用します。

**2. チェックポイントと再開**

- 記録中にチェックポイントが自動的に作成されます。
- 中断後に再開するには、`--resume=true` を付けて同じコマンドを再実行します。

⚠️ 重要な注意: 再開する際は、`--dataset.num_episodes` を「データセット全体の目標エピソード数」ではなく、「追加で記録したいエピソード数」に設定してください。

- 最初から記録をやり直したい場合は、データセットディレクトリを**手動で削除**してください。

**3. 記録パラメータ**

コマンドライン引数を使ってデータ記録の流れを設定します：

| Parameter | 説明 | 既定値 |
|-----------|-------------|---------|
| --dataset.episode_time_s | 1 エピソードあたりのデータ記録時間（秒） | 60 |
| --dataset.reset_time_s | 各エピソード後の環境リセット時間（秒） | 60 |
| --dataset.num_episodes | 記録するエピソードの総数 | 50 |

**4. 記録中のキーボード操作**

キーボードショートカットでデータ記録の流れを制御します：

| Key | 動作 |
|-----|--------|
| → (右矢印) | 現在のエピソードを早期終了／リセットし、次へ進む。 |
| ← (左矢印) | 現在のエピソードをキャンセルし、録り直す。 |
| ESC | セッションを即座に停止し、動画をエンコードしてデータセットをアップロードする。 |

:::tip

キーボードが動作しない場合は、別バージョンの pynput をインストールする必要があるかもしれません。

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

:::

**データ収集のコツ**

- タスクの提案: さまざまな位置にある物体を把持して、ビンの中に置く。
- 規模: 50 エピソード以上を記録する（位置ごとに 10 エピソード）。
- 一貫性:
  - カメラは固定したままにする。
  - 把持動作は同じパターンを維持する。
  - 操作対象の物体がカメラ映像内に確実に写るようにする。
- 段階的な発展:
  - 新しい位置・手法・カメラ調整などのバリエーションを加える前に、まずは安定して把持できる状態から始める。
  - 失敗を防ぐため、複雑さを急激に増やすことは避ける。

💡 経験則: カメラ画像だけを見て、あなた自身がタスクを実行できるレベルであるべきです。

この重要なトピックをさらに深く知りたい場合は、良いデータセットとは何かについて執筆した[ブログ記事](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)を参照してください。

記録中のキーボードショートカットに関する問題については、このページ末尾の FAQ セクションを参照してください。
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

もし `--control.push_to_hub=true` でデータセットを Hub にアップロードしている場合は、次のコマンドで得られるリポジトリ ID をコピー＆ペーストすることで、[オンラインでデータセットを可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

<CodeBlock language="bash">
{`echo \${HF_USER}/so101_test`}
</CodeBlock>

もし `--dataset.push_to_hub=false` でアップロードしていない場合でも、ローカルで次のように可視化できます：

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id \${HF_USER}/so101_test \\`}
</CodeBlock>

`--dataset.push_to_hub=false` でアップロードしていない場合でも、次のようにローカルで可視化できます：

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id seeed_123/so101_test \\`}
</CodeBlock>

**ここで、`seeed_123` はデータ収集時に定義したカスタムの `repo_id` 名です。**

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="LeRobot dataset viewer showing camera recordings and robot joint state and action plots" />
</div>

</section>

## データセットのリプレイ

<section id="replay-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>データセットのリプレイ</h2>
    <p>記録済みエピソードを実機アームで再生し、アクションの一貫性を確認します。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>
        ロボットアームの作業空間から 1 メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、電源やケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

便利な機能として `replay` 関数があり、これを使うと自分で記録した任意のエピソードや、公開されている任意のデータセットのエピソードを再生できます。この機能により、ロボットの動作の再現性をテストしたり、同一モデルのロボット間での転移性を評価したりできます。

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

ロボットは、あなたが記録したものと同様の動きを再現するはずです。

このコマンドでは、`dataset.root` がデータセットへの物理パスを指定し、dataset.`repo_id` がデータ収集中に定義したカスタム名になります。

</section>

## 学習と評価

<section id="training" className="section-card">
  <div className="section-title">
    <span>Step 7</span>
    <h2>学習と評価</h2>
    <p>ACT、SmolVLA、Pi0、Pi0.5、GR00T、PEFT、非同期推論などのポリシーを学習・評価します。</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>実行前の安全確認</strong>
      <p>
        ロボットアームの作業空間から 1 メートル以内の貴重品や無関係な人を退避させてください。
        このセクションを実行する前に、アームがしっかりと固定されていること、電源やケーブルが正しく接続されていることを確認してください。
      </p>
    </div>
  </div>

<details className="content-details">

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

[ACT](https://huggingface.co/docs/lerobot/act) を参照してください。

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

それぞれの項目について説明します：

- **データセット指定**: `--dataset.repo_id=\${HF_USER}/so101_test` パラメータでデータセットを指定します。
- **学習ステップ数**: `--steps=300000` を使って学習ステップ数を変更します。アルゴリズムのデフォルトは 800000 ステップであり、タスクの難易度や学習中の loss を見ながら調整できます。
- **ポリシータイプ**: `policy.type=act` でポリシーを指定します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`] などのポリシーを切り替えることができ、その場合は `configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、あなたのロボット（例: `laptop` や `phone`）のモータ状態・モータアクション・カメラ数に自動的に適応します。これらの情報はすでにデータセット内に保存されているためです。
- **デバイス選択**: Nvidia GPU 上で学習しているため `policy.device=cuda` を指定していますが、Apple Silicon で学習する場合は `policy.device=mps` を使用できます。
- **可視化ツール**: [Weights and Biases](https://docs.wandb.ai/quickstart) を使ってトレーニングチャートを可視化するために `wandb.enable=true` を提供しています。これは任意ですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

**評価**

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

ポリシーのチェックポイントを入力として、[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 関数を使用できます。例えば、次のコマンドを実行して 10 エピソード分の評価を記録します：

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

例えば次のようになります：

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

1. `--policy.path` パラメータは、ポリシーのトレーニング結果の重みファイルへのパスを示します（例：`outputs/train/act_so101_test/checkpoints/last/pretrained_model`）。モデルのトレーニング結果の重みファイルを Hub にアップロードした場合は、モデルリポジトリ（例：`\${HF_USER}/act_so100_test`）を使用することもできます。

2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中の動画とデータが別々に記録され、`seeed/eval_test123` のような `eval_` で始まるフォルダに保存されます。

3. 評価段階で `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` に遭遇した場合は、まず `eval_` で始まるフォルダを削除してから、プログラムを再度実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` が発生した場合、`--robot.cameras` パラメータ内の front や side といったキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

<details className="content-details">
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) は、Hugging Face によるロボティクス向けの軽量なファウンデーションモデルです。LeRobot データセット上で簡単にファインチューニングできるよう設計されており、開発を加速するのに役立ちます。

**環境のセットアップ**

次のコマンドを実行して SmolVLA の依存関係をインストールします：

<CodeBlock language="bash">
{`pip install -e ".[smolvla]"`}
</CodeBlock>

**自分のデータで SmolVLA をファインチューニングする**

[smolvla_base](https://hf.co/lerobot/smolvla_base)（事前学習済み 4.5 億パラメータモデル）を使用し、自分のデータでファインチューニングします。モデルを 20k ステップ学習させるには、単一の A100 GPU でおおよそ 4 時間かかります。ステップ数は性能とユースケースに応じて調整してください。

GPU デバイスがない場合は、[Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb) 上のノートブックを使ってトレーニングできます。

トレーニングスクリプトには `--dataset.repo_id` を使ってデータセットを渡します。インストールをテストしたい場合は、[SmolVLA Paper](https://huggingface.co/papers/2506.01844) 用に収集したデータセットの 1 つを使用する、次のコマンドを実行してください。

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
GPU に余裕があり、読み込み時間が短いままであれば、小さいバッチサイズから始めて徐々に増やしていくことができます。
:::

ファインチューニングは一種のアートです。ファインチューニング用のオプションを完全に把握するには、次を実行してください：

<CodeBlock language="bash">
{`lerobot-train --help`}
</CodeBlock>

**ファインチューニングしたモデルを評価し、リアルタイムで実行する**

エピソードを記録する場合と同様に、HuggingFace Hub にログインしておくことを推奨します。対応する手順は [Record a dataset](https://huggingface.co/docs/lerobot/il_robots) を参照してください。ログイン後は、次のようにして自分の環境で推論を実行できます：

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


評価環境に応じて、評価スイート用に記録するエピソードの長さやエピソード数を設定できます。

</details>

<details className="content-details">
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) は、生涯にわたるロボット学習を研究するために設計されたベンチマークです。ロボットは工場で一度だけ事前学習されるのではなく、時間の経過とともに人間のユーザーと一緒に学習と適応を続ける必要がある、という考えに基づいています。この継続的な適応は、意思決定における生涯学習（lifelong learning in decision making, LLDM）と呼ばれ、真にパーソナライズされたヘルパーロボットを構築するための重要なステップです。

- 📄 [LIBERO 論文](https://arxiv.org/abs/2306.03310)
- 💻 [オリジナルの LIBERO リポジトリ](https://github.com/Lifelong-Robot-Learning/LIBERO)

**LIBERO を用いた評価**

**LeRobot** では、LIBERO をフレームワークに移植し、主に軽量な Vision-Language-Action モデルである [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla) の**評価**に使用しました。

LIBERO は現在、**マルチ評価対応シミュレーション**の一部となっており、フラグを 1 つ付けるだけで、**単一のタスクスイート**または**複数のスイートを同時に**対象としてポリシーをベンチマークできます。

LeRobot の公式手順に従った後、LIBERO をインストールするには、次を実行するだけです：`pip install -e ".[libero]"`

***単一スイート評価***

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

***マルチスイート評価***

複数のスイートにまたがってポリシーを一度にベンチマークします：

<CodeBlock language="bash">
{`lerobot-eval \\
  --policy.path="your-policy-id" \\
  --env.type=libero \\
  --env.task=libero_object,libero_spatial \\
  --eval.batch_size=1 \\
  --eval.n_episodes=2`}
</CodeBlock>

- マルチスイート評価には、カンマ区切りのリストを `--env.task` に渡します。

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

LeRobot はシミュレーションに MuJoCo を使用しています。トレーニングまたは評価の前に、レンダリングバックエンドを設定する必要があります：

- `export MUJOCO_GL=egl` → ヘッドレスサーバー向け（例：HPC、クラウド）

</details>

<details className="content-details">
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

[Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください

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

[Pi0.5](https://huggingface.co/docs/lerobot/pi05) を参照してください

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

**学習**

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
  --dataset.single_task="透明な箱にレゴブロックを入れる" \\
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

公式ドキュメントを参照してください: [GR00T N1.5](https://huggingface.co/docs/lerobot/groot)。

GR00T N1.5 は、より汎用的なロボットの推論とスキル学習のために NVIDIA が提供するオープンな基盤モデルです。これは**クロスエンボディメント**モデルであり、**言語**や**画像**などのマルチモーダル入力を受け取り、さまざまな環境にまたがってマニピュレーションタスクを実行できます。

LeRobot では、重要なのはポリシータイプを `--policy.type=groot` に設定することです。GR00T N1.5 は環境要件が高い点に注意してください（FlashAttention に依存し、CUDA GPU が必要です）。まず ACT / Pi0 をエンドツーエンドで動作させてから、GR00T を試すことを推奨します。

**インストール（重要）**

現在の公式ドキュメントによると、GR00T N1.5 には `flash-attn` が必要であり、CUDA 対応ハードウェアでのみ使用できます。

推奨される手順:

1. まずベースとなる環境（Python、CUDA、ドライバなど）を準備します。この時点では `lerobot` をインストールしないでください。
2. 使用している CUDA バージョンに対応した PyTorch をインストールします（CUDA のバージョンによっては異なる `--index-url` が必要になる場合があります。PyTorch のインストールページに従ってください）。

<CodeBlock language="bash">
{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"`}
</CodeBlock>

:::tip

RTX 50 シリーズ GPU を使用している場合、次の要件を満たす必要があります: Python=3.10、CUDA=12.8、Torch=2.7.1

ダウンロードコマンドは次のとおりです:
<CodeBlock language="bash">
{`pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128`}
</CodeBlock>
:::

3. `flash-attn` のビルド依存関係をインストールし、その後 `flash-attn` 本体をインストールします。

<CodeBlock language="bash">
{`pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"`}
</CodeBlock>

:::tip

RTX 50 シリーズ GPU を使用している場合、次の要件を満たす必要があります: flash_attn=2.8.0

ダウンロードコマンドは次のとおりです:
<CodeBlock language="bash">
{`pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation`}
</CodeBlock>
:::

4. `groot` のオプション依存関係付きで LeRobot をインストールします（`lerobot[groot]`）。

<CodeBlock language="bash">
{`pip install "lerobot[groot]"`}
</CodeBlock>

:::tip
もし `flash-attn` のインストールに失敗する場合、多くは (1) PyTorch/CUDA の不整合、(2) ビルド依存関係の不足、(3) 環境が新しすぎる／古すぎる、のいずれかが原因です。まず公式の GR00T ドキュメントと PyTorch のインストール手順を突き合わせて確認してください。
:::

**学習（ファインチューニング）**

公式ドキュメントには `accelerate launch --multi_gpu ...` を用いたマルチ GPU の例が掲載されています。単一 GPU しか持っていない場合でも、まずは単一プロセスの実行が動作することを確認してから進めることができます（正確なサポート内容や引数は公式ドキュメントに依存します）。

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

**ロボット上での検証（評価）**

学習後は、他のポリシーと同様に `lerobot-record` を使って評価とリプレイの記録を行うことができます。公式ドキュメントには両腕ロボットの例が含まれていますが、SO101 の単腕ユーザーは `left_arm_port/right_arm_port` 形式の引数を使用する必要はありません。

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
  --dataset.single_task="赤いキューブをつかみ、もう一方の腕に受け渡す" \\
  --policy.path=\${HF_USER}/groot-bimanual \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10`}
</CodeBlock>

ライセンス: Apache 2.0（元の GR00T リポジトリと同じ）。

</details>

<details className="content-details">
<summary>（オプション）パラメータ効率の良いファインチューニング（PEFT）</summary>

PEFT（Parameter-Efficient Fine-Tuning）は、大規模な事前学習済みモデルが新しいタスクに適応する際に、**すべてのパラメータを更新せずに**済むようにする手法とツールのファミリーです。事前学習済みの LeRobot ポリシー（例: SmolVLA、Pi0）では、多くの場合、「アダプタ」パラメータ（例: LoRA）の小さな集合だけを学習することで、VRAM 使用量と学習コストを削減しつつ、フルファインチューニングに近い性能を達成できます。

**インストール**

LeRobot を `peft` のオプション依存関係付きでインストールした後、学習時に PEFT 関連の引数を使用できます。

<CodeBlock language="bash">
{`pip install -e ".[peft]"`}
</CodeBlock>

<CodeBlock language="bash">
{`pip install "lerobot[peft]"`}
</CodeBlock>

より詳しい概念と手法については、[🤗 PEFT ドキュメント](https://huggingface.co/docs/peft/index) を参照してください。

**例: SmolVLA を LoRA でファインチューニングする（LIBERO の `libero_spatial` サブタスク）**

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
- `--peft.r`: LoRA のランクです。ランクを高くすると通常は表現力が増しますが、パラメータ数と VRAM 使用量も増加します。

**LoRA を挿入するレイヤ／モジュールの選択（オプション）**

デフォルトでは、PEFT は通常、最も重要な射影レイヤ（例: attention の `q_proj`、`v_proj`）に LoRA を挿入し、状態／アクションの射影も対象に含める場合があります。カスタマイズしたい場合は、`--peft.target_modules` を使用します。

一般的なパターン:

1) モジュール名のサフィックスのリストを指定する（例）:

<CodeBlock language="bash">
{`--peft.target_modules="['q_proj', 'v_proj']"`}
</CodeBlock>

2) 正規表現を指定する（例。モデル内の実際のモジュール名に合わせて調整してください）:

<CodeBlock language="bash">
{`--peft.target_modules='(model\\\\.vlm_with_expert\\\\.lm_expert\\\\..*\\\\.(down|gate|up)_proj|.*\\\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'`}
</CodeBlock>

**一部のモジュールをフル学習する（オプション）**

特定のモジュールを LoRA の挿入だけでなくフルに学習させたい場合は、`--peft.full_training_modules` を使用します。例えば、`state_proj` のみをフル学習するには次のようにします:

<CodeBlock language="bash">
{`--peft.full_training_modules="['state_proj']"`}
</CodeBlock>

**学習率の目安（経験則）**

LoRA の学習率は、フルファインチューニングよりもおおよそ 10 倍高く設定されることが多いです。例えば、フルファインチューニングで一般的に `1e-4` を用いる場合、LoRA では `1e-3` から始めることができます。学習率スケジューラを使用する場合、最終的な学習率は目安として `1e-4` 前後になることが多いです。

</details>

<details className="content-details">
<summary>（オプション）Accelerate を用いたマルチ GPU 学習</summary>

**学習手順**

方法 1: CLI フラグを使用する。

1. `lerobot` 環境に `accelerate` をインストールします。

<CodeBlock language="bash">
{`pip install accelerate`}
</CodeBlock>

2. `accelerate launch` と `--multi_gpu` および `--num_processes` フラグを使ってマルチ GPU 学習を開始します。

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

主要な `accelerate` フラグ:

- `--multi_gpu`: マルチ GPU 学習を有効にします。
- `--num_processes`: 使用する GPU の数（通常はマシン上で利用可能な GPU の数と同じです）。
- `--mixed_precision=fp16`: fp16 の混合精度を使用します（ハードウェアが対応している場合は bf16 も使用できます）。

注意：**bf16 にはハードウェアのサポートが必要**であり、すべての GPU で利用できるわけではありません。

| 精度 | ハードウェアサポート |
|--|--|
| fp16 | ほぼすべての NVIDIA GPU でサポートされています |
| bf16 | 一部の新しい GPU（Ampere 以降）のみサポートされています |

GPU が bf16 をサポートしていない場合は、Accelerate の設定で fp16 を選択するか、fp16 を明示的に指定してください。

方法 2：`accelerate` の設定ファイルを使う（任意）。

複数 GPU で頻繁に学習する場合は、設定を保存して同じフラグを毎回入力しなくて済むようにできます。

`accelerate config` はハードウェア構成（GPU の数、混合精度など）を設定ファイルに保存するため、後で `accelerate launch` を実行するときにそれらのオプションを再入力する必要がなくなります。これは LeRobot の学習ロジックを変更するものではなく、CLI での繰り返し入力を減らすだけです。

複数 GPU をたまにしか使わない場合（あるいは今回が初めての場合）は、これをスキップしてもまったく問題ありません。

対話的な設定では、一般的な「単一マシン + 複数 GPU」のシナリオにおいて、典型的な選択肢は次のとおりです：

- Compute environment: This machine
- Number of machines: 1
- Number of processes: 使用したい GPU の数
- GPU ids to use: Enter キーを押す（すべての GPU を使用）
- Mixed precision: 可能であれば fp16 を推奨。GPU が bf16 をサポートしていると分かっている場合のみ bf16 を選択

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

LeRobot は、学習挙動を暗黙的に変えてしまうことを避けるため、GPU の数に応じて学習率や学習ステップ数を自動調整しません。これは、他のいくつかの分散学習フレームワークとは異なります。

マルチ GPU 用にハイパーパラメータを調整したい場合、一般的なアプローチは次のとおりです：

- **ステップ数**：有効バッチサイズは（batch_size × num_gpus）だけ増加するため、見えるサンプル総数を同程度に保つには、ステップ数をおおよそ `1 / num_gpus` に比例するように減らすことができます。

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--batch_size=8 \\

--steps=50000 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

- **学習率**：各ステップで使用されるサンプル数が増えるため、多くの場合、学習率を GPU の数に対して線形にスケーリングできます：
  new_lr = single_gpu_lr × num_gpus

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--optimizer.lr=2e-4 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

これらは厳密なルールではなく、一般的なヒューリスティクスです。よく分からない場合は、学習が安定している限り、学習率やステップ数を変更せずにそのままにしておいても構いません。

高度な設定やトラブルシューティングについては、Accelerate のドキュメントを参照してください：[Accelerate](https://huggingface.co/docs/accelerate/index)。

</details>

<details className="content-details">

<summary>（オプション）非同期推論</summary>

非同期推論が有効になっていない場合、LeRobot の制御フローは**従来型の逐次 / 同期推論**として理解できます：ポリシーがまず一連のアクションチャンクを予測し、それを実行し、その後で次の予測を待ちます。

大きなモデルでは、次のアクションチャンクを待っている間にロボットが目に見えて一時停止してしまうことがあります。

非同期推論の目的は、現在のアクションチャンクをロボットに実行させながら、次のチャンクを先行して計算することで、アイドル時間を減らし応答性を向上させることです。

非同期推論は、**ACT、OpenVLA、Pi0、SmolVLA** などの**チャンクベースのアクションポリシー**を含む、LeRobot がサポートするポリシーに適用できます。

推論が実際の制御から切り離されるため、非同期推論は、より強力な計算リソースを持つマシンを使ってロボットの推論を行うのにも役立ちます。

非同期推論の詳細については、[Hugging Face のブログ](https://huggingface.co/blog/async-robot-inference)を参照してください。

まず、いくつかの基本概念を紹介します：

- **クライアント**：ロボットアームとカメラに接続し、観測データ（画像やロボットの姿勢など）を収集してサーバーに送信し、サーバーから返されるアクションチャンクを受け取って順番に実行します。

- **サーバー**：計算リソースを提供するデバイスです。カメラデータとロボットアームのデータを受け取り、推論（すなわち計算）を行ってアクションチャンクを生成し、それをクライアントに送り返します。これはロボットアームとカメラに接続された同じデバイスでも、同一 LAN 上の別のコンピュータでも、インターネット上で借りたクラウドサーバーでも構いません。

- **アクションチャンク**：サーバー側でのポリシー推論によって得られる、一連のロボットアームのアクションコマンドです。

非同期推論の 3 つのデプロイシナリオ

1. 単一マシンでのデプロイ

ロボット、カメラ、クライアント、サーバーがすべて同じデバイス上にあります。

これは最も単純なケースです：サーバーは 127.0.0.1 で待ち受けでき、クライアントも 127.0.0.1:port に接続できます。公式ドキュメントのコマンド例はこのシナリオを想定しています。

2. LAN 内でのデプロイ

ロボットとカメラは軽量なデバイスに接続され、ポリシーサーバーは同じローカルネットワーク内の別の高性能マシン上で動作します。

この場合、サーバーは他のマシンからアクセス可能なアドレスで待ち受ける必要があり、クライアントは 127.0.0.1 ではなくサーバーの LAN IP に接続する必要があります。

3. ネットワーク越し / クラウドでのデプロイ

ポリシーサーバーはパブリックにアクセス可能なクラウドホスト上で動作し、クライアントはインターネット経由で接続します。

この方法ではクラウドホストのより強力な GPU を利用できます。ネットワーク状態が良好な場合、往復のネットワーク時間（ネットワークレイテンシ）は推論時間と比べて相対的に小さい場合もありますが、これは実際のネットワーク環境に依存します。

セキュリティに関する注意：LeRobot の非同期推論パイプラインには、認証されていない gRPC と pickle デシリアライズに関連するリスクがあります。サーバー上に重要な情報や重要なサービスがある場合、パブリックなデプロイでサービスをインターネットに直接公開することは推奨されません。より安全な方法は、VPN や SSH トンネリングを使用するか、少なくともセキュリティグループで許可する送信元 IP を自分のクライアントのパブリック IP にできるだけ制限することです。

**非同期推論デプロイの始め方**

**ステップ 1：環境構築**

まず、非同期推論に必要な追加の依存関係を pip でインストールします。クライアントとサーバーの両方に、追加の依存関係付きで lerobot をインストールする必要があります：

<CodeBlock language="bash">
{`pip install -e ".[async]"`}
</CodeBlock>

**ステップ 2：ネットワーク設定と確認**

1. **プロキシの問題**

現在使用しているターミナルでプロキシが設定されており、接続の挙動がおかしい場合は、一時的にプロキシ環境変数を解除できます：

<CodeBlock language="bash">
{`unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY`}
</CodeBlock>

注意：上記のコマンドは現在のターミナルセッションにのみ影響します。別のターミナルウィンドウを開いた場合は、再度実行する必要があります。

2. **ファイアウォール / セキュリティグループでポートを開く**

単一マシンでのデプロイ：通常はこの手順をスキップできます。

LAN デプロイ：サーバー側で待ち受けポートを開く必要があります。

LAN 構成で待ち受けポートを開く例（サーバー側で実行）：

<CodeBlock language="bash">
{`sudo ufw allow 8080/tcp`}
</CodeBlock>

クラウドデプロイ：クラウドサーバーのセキュリティグループでこのポートを開く必要があり、送信元 IP は可能な限り制限することを推奨します。

クラウドサーバー上で実行している場合：

サーバー管理コンソールのセキュリティグループで 8080 番ポートを開くか、すでに開いている別のポートを使用します。クラウドサービスプラットフォームごとに操作方法が異なるため、利用しているクラウドプロバイダのドキュメントを参照してください。

3. **IP アドレスの確認**

単一マシンでのデプロイではこの手順はスキップできます（単一マシンの IP アドレスは常に 127.0.0.1 です）。

LAN デプロイの場合：

サーバー側の LAN IP アドレスを確認して覚えておく必要があります。クライアントが接続する際に入力すべきなのは、policy_server を実行しているマシンの LAN IP であり、クライアント自身の IP ではありません。

Linux / Jetson / Raspberry Pi：

<CodeBlock language="bash">
{`hostname -I`}
</CodeBlock>

複数のアドレスが表示される場合は、一般的に現在の LAN ネットワークインターフェースに対応するもの（例：192.168.x.x）を選びます。

次のコマンドを使うこともできます：

<CodeBlock language="bash">
{`ip addr`}
</CodeBlock>

を実行して、現在接続されているネットワークインターフェースの inet フィールドを確認します。

Windows：

<CodeBlock language="shell">
{`ipconfig`}
</CodeBlock>

IPv4 Address . . . . . . . . . . . : 192.168.14.140 のようなフィールドを探します。それがそのマシンの LAN IP アドレスです。

macOS：

<CodeBlock language="bash">
{`ifconfig`}
</CodeBlock>

現在接続されているネットワークインターフェースに対応する inet フィールドを探します。それが LAN IP アドレスです。

サーバー側の LAN IP アドレスを覚えておく必要があります。ここではそれを `<LAN IP address>` と表記します。

クラウドサーバーでのデプロイの場合：

サーバーのコントロールパネルでパブリック IP を探します。通常、次のいずれかの名称になっています：

Public IPv4

External IP

Public IP address

EIP

Public IP

パブリック IP アドレスを覚えておく必要があります。ここではそれを `<server public IP>` と表記します。

4. **接続テスト**

単一マシンでのデプロイ：この手順はスキップできます

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

**シナリオ A：単一マシンでのデプロイ**

ローカルサービスを 1 つ目のターミナルで起動します：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=127.0.0.1 \\
--port=8080`}
</CodeBlock>

正常に起動したら、このターミナルは開いたままにしておく必要があります。別のコマンドを実行するには、新しいターミナルを開く必要があります。

**シナリオ B: LAN デプロイ**

サーバー側で実行します：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

この場合、クライアントが接続する際の `--server_address` には、`<LAN IP address>:8080` のようにサーバー側の LAN IP アドレスを指定します。

**シナリオ C: クラウドサーバーへのデプロイ**

サーバー側で実行します：

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

この場合、クライアントが接続する際の `--server_address` には、`<server public IP>:8080` のようにサーバーのパブリック IP アドレスを指定します。

**ステップ 4: 推論パラメータを選択する**

クライアント側で実行します：

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

policy サーバーのアドレスとポートを指定します。`<ip address>` は 127.0.0.1（ローカルマシン）、`<LAN IP address>`（LAN）、または `<server public IP>`（クラウドサーバー）に置き換えてください。

- `--robot.type, --robot.port, --robot.id, --robot.cameras`

ハードウェアデバイスのパラメータです。これらはデータセット収集時に使用したパラメータと一致させる必要があります。

- `--task`

タスクの説明です。SmolVLA のようなビジョン・ランゲージ policy は、このタスクテキストに基づいて行動のターゲットを判断できます。

- `--policy_type`

ここは具体的な policy 名に置き換えます。例えば：

- smolvla

- act

- `--pretrained_name_or_path`

この値は、サーバー側のモデルパス、または Hugging Face 上のモデルパスに置き換えます。

- `--policy_device`

サーバー側で使用する推論デバイスを指定します。

cuda、mps、cpu のいずれかを指定できます。

- `--actions_per_chunk=50`

1 回の推論で出力される action の数を指定します。

この値が大きいほど：

利点：action バッファに十分な余裕ができ、枯渇しにくくなります
欠点：予測ホライズンが長くなるため、制御誤差がより目立って蓄積する可能性があります

- `--chunk_size_threshold=0.5`

次の action chunk をサーバーに要求するタイミングを指定します。

これは通常 0〜1 の範囲のしきい値です。

次のように理解できます：現在の action キューの残りの割合がこのしきい値を下回ったとき、クライアントは事前に新しい観測を送信し、次の action chunk を要求します。

ここで 0.5 に設定するということは、次のことを意味します：

現在の action chunk が約半分消費されたとき

クライアントは次の action chunk の要求を開始します

この値が大きいほど、リクエスト送信の頻度が高くなり、システムの応答性は向上しますが、サーバーへの負荷も増加します。

この値が小さいほど、挙動は同期推論に近づきます。

- `--aggregate_fn_name=weighted_average`

重なり合う action 区間を集約する方法を指定します。

非同期推論では、古い action chunk がまだ完全に実行されていないうちに、新しい action chunk がすでに到着している場合があります。

その場合、2 つの chunk は時間区間の一部で重なり合うため、それらを最終的に実行される action に統合するための集約関数が必要になります。

weighted_average の意味は：

重み付き平均を用いて重なり合う部分を融合する、ということです。

これにより通常、action の切り替えがよりスムーズになり、急激な変化が減少します。

- `--debug_visualize_queue_size=True`

実行時に action キューサイズを可視化するかどうかを指定します。

有効にすると、キューが頻繁に底をついていないかをより直接的に確認でき、actions_per_chunk と chunk_size_threshold のチューニングに役立ちます。

**ステップ 5: ロボットの挙動に基づいてパラメータを調整する**

非同期推論では、同期推論には存在しない、調整が必要な追加パラメータが 2 つあります：

パラメータ 推奨初期値 説明

actions_per_chunk 50 policy が一度に出力する action の数。典型的な値：10〜50。

chunk_size_threshold 0.5 action キューの残りの割合が chunk_size_threshold 以下になったとき、クライアントは新しい action chunk のリクエストを送信します。値の範囲は [0, 1] です。

--debug_visualize_queue_size=True の場合、実行時に action キューサイズの変化がプロットされます。

非同期推論でバランスを取るべきなのは、サーバーが action chunk を生成する速度が、クライアントが action chunk を消費する速度以上であることです。そうでない場合、action キューが空になり、ロボットは再びカクつき始めます（これはキューの可視化でカーブが下限に張り付く形で確認できます）。

サーバーが action chunk を生成する速度は、モデルサイズ、デバイスタイプ、VRAM / メモリ、GPU の計算能力などの要因の影響を受けます。

クライアントが action chunk を消費する速度は、設定された実行 fps の影響を受けます。

キューが頻繁に空になる場合は、actions_per_chunk を増やす、chunk_size_threshold を増やす、または fps を下げる必要があります。

キューのカーブが頻繁に変動していても、キュー内の残り action が常に十分である場合は、chunk_size_threshold を適切に下げることができます。

一般的には：

actions_per_chunk の経験的な範囲は 10〜50 です

chunk_size_threshold の経験的な範囲は 0.5〜0.7 であり、チューニング時は 0.5 から始めて徐々に増やしていくことを推奨します

</details>

次のようなエラーが発生した場合：

<CodeBlock language="bash">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

次のコマンドを実行して解決を試してください：

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

学習には数時間かかるはずです。`outputs/train/act_so100_test/checkpoints` に checkpoint が保存されます。

checkpoint から学習を再開するには、以下は `act_so101_test` policy の `last` checkpoint から再開するためのコマンド例です：

<CodeBlock language="bash">
{`lerobot-train \\
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \\
  --resume=true`}
</CodeBlock>

**policy checkpoint をアップロードする**

学習が完了したら、次のコマンドで最新の checkpoint をアップロードします：

<CodeBlock language="bash">
{`huggingface-cli upload \${HF_USER}/act_so101_test \\
  outputs/train/act_so101_test/checkpoints/last/pretrained_model`}
</CodeBlock>

中間 checkpoint をアップロードすることもできます：

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

このバージョンは SO-ARM10x で検証済みです。上流の LeRobot リポジトリは変更が速いため、コマンド引数、データセット形式、依存関係がこのチュートリアルと異なる場合があります。

</details>

<details className="content-details">
<summary>サーボ ID 設定中に `Motor 'gripper' was not found` と表示される</summary>

次のようなエラーが表示された場合：

<CodeBlock language="text">
{`Motor 'gripper' was not found, Make sure it is connected`}
</CodeBlock>

通信ケーブルが正しく接続されているか、サーボバスに正しい電圧で電源が供給されているかを確認してください。

</details>

<details className="content-details">
<summary>`Could not connect on port "/dev/ttyACM0"`</summary>

`/dev/ttyACM0` が存在するにもかかわらず LeRobot が接続できない場合、通常はシリアルポートの権限が不足しています。次を実行します：

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

また、リーダーアームとフォロワーアームが想定どおりのポートにマッピングされているかを再確認してください。

</details>

<details className="content-details">
<summary>`No valid stream found in input file`</summary>

次のように表示される場合：

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
<summary>`Present_Position` sync read に失敗する</summary>

次のように表示される場合：

<CodeBlock language="text">
{`ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!`}
</CodeBlock>

該当するアームの電源が入っているか、バスサーボのデータケーブルが緩んでいたり外れていたりしないかを確認してください。サーボの LED が消灯している場合、そのサーボより前のケーブルが緩んでいる可能性があります。

</details>

<details className="content-details">
<summary>キャリブレーション中に `Magnitude 30841 exceeds 2047` と表示される</summary>

次のように表示される場合：

<CodeBlock language="text">
{`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`}
</CodeBlock>

アームの電源を切って再起動し、もう一度キャリブレーションを行ってください。問題が解決しない場合は、Seeed Studio SoARM クイックキャリブレーションツールを使用して中立位置のキャリブレーションとサーボ ID の検証を行い、その後にアーム全体のキャリブレーションをやり直してください。

</details>

<details className="content-details">
<summary>修理や部品交換後はどのように再キャリブレーションすればよいですか？</summary>

古いキャリブレーションファイルを削除して、再キャリブレーションを行います：

<CodeBlock language="bash">
{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators`}
</CodeBlock>

キャリブレーション情報は、これらのディレクトリ内の JSON ファイルとして保存されます。ハードウェアが変更されても古いキャリブレーションファイルが残っている場合、LeRobot が古いオフセットを再利用してしまう可能性があります。

</details>

<details className="content-details">
<summary>録画中にキーボードショートカットが機能しません</summary>

データセット録画中に右矢印キー、左矢印キー、または ESC キーが反応しない場合は、まず `$DISPLAY` 環境変数が設定されているか確認してください。また、`pynput` をダウングレードしてみることもできます：

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

</details>

<details className="content-details">
<summary>録画中に失敗したエピソードはどのように扱えばよいですか？</summary>

物体が落下したり、グリッパがつかみ損ねたり、エピソードの品質が低い場合は、アームを安全な待機姿勢に戻し、左矢印キーを押してそのエピソードを破棄して再録画してください。タスクが早く終了し、ロボットがすでに待機姿勢に戻っている場合は、右矢印キーを押すことで、残り時間をすべて待たずに次のエピソードへ進むことができます。

</details>

<details className="content-details">
<summary>データセット収集中に注意すべき点は何ですか？</summary>

カメラの位置、カメラの角度、周囲の照明を安定させてください。不安定な背景や、カメラの視野内を通る歩行者などは避けてください。録画時と運用時の環境に大きな差があると、ポリシーが失敗する原因になります。

開始前に `--dataset.num_episodes` を十分大きな値に設定してください。特別な理由がない限り、録画を途中で手動停止しないでください。平均値や分散などのデータセット統計量は収集完了後に計算され、学習に必要となるためです。

</details>

<details className="content-details">
<summary>録画済みデータセットを削除または編集するにはどうすればよいですか？</summary>

録画済みデータセットの削除や編集については、データセットツールのチュートリアルを参照してください：

[Dataset Tool](/ja/lerobot_dataset_tool)

</details>

<details className="content-details">
<summary>USB カメラの画像データを読み取れません</summary>

USB カメラを USB ハブ経由で接続するのは避けてください。デバイスに直接接続し、可能であれば USB 3.0 ポートを使用して、十分な画像伝送帯域幅を確保してください。

</details>

<details className="content-details">
<summary>Orbbec カメラのタイムアウトまたはシリアル番号の不一致</summary>

フレーム待機中にタイムアウトが発生した場合は、カメラを一度抜き差ししてください。次のようなメッセージが表示される場合：

<CodeBlock language="text">
{`No Orbbec camera found for 'XXXX'`}
</CodeBlock>

カメラ検出コマンドを実行し、実際のシリアル番号で `serial_number_or_name` を更新してください：

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

</details>

<details className="content-details">
<summary>評価中に `File exists` が表示される</summary>

評価時に `eval_` ディレクトリがすでに存在すると報告された場合は、先に既存の評価フォルダを削除してから、プログラムを再実行してください。

<CodeBlock language="text">
{`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`}
</CodeBlock>

</details>

<details className="content-details">
<summary>評価中に `mean is infinity` が表示される</summary>

次のようなメッセージが表示される場合：

<CodeBlock language="text">
{`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`}
</CodeBlock>

`front` や `side` など、`--robot.cameras` に指定するカメラキーが、データセット録画時に使用したキーと完全に一致していることを確認してください。

</details>

<details className="content-details">
<summary>`TypeError: stack(): argument 'tensors' must be tuple of Tensors`</summary>

次のようなメッセージが表示される場合：

<CodeBlock language="text">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

互換性のある datasets バージョンをインストールしてみてください：

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`rerun` に `scalar` 属性がありません</summary>

次のようなメッセージが表示される場合：

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

おおよその目安として、50 エピソードで ACT を学習する場合、ノート PC の RTX 3060 8GB では約 6 時間、RTX 4090 や A100 では約 2〜3 時間かかります。実際の時間は、データセットサイズ、画像解像度、バッチサイズ、ハードウェアによって異なります。

</details>

:::tip
この FAQ を確認しても解決しないソフトウェアや依存関係の問題が発生した場合は、[LeRobot GitHub リポジトリ](https://github.com/huggingface/lerobot) または [LeRobot Discord チャンネル](https://discord.gg/8TnwDdjFGU) に報告してください。
:::

</section>


## 引用

<section id="references" className="section-card">
  <div className="section-title">
    <span>参考文献</span>
    <h2>引用</h2>
    <p>関連するドキュメント、プロジェクト、論文、および外部リソース。</p>
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
    <p>製品に関する質問について、Seeed Studio に連絡したり、コミュニティディスカッションに参加したりできます。</p>
  </div>

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。


<div className="path-grid">
  <a className="path-card" href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer"><strong>Forum</strong><span>Seeed フォーラムで製品や技術に関する質問をしてください。</span></a>
  <a className="path-card" href="https://www.seeedstudio.com/contacts" target="_blank" rel="noopener noreferrer"><strong>Email Support</strong><span>Seeed Studio サポートに直接連絡してください。</span></a>
  <a className="path-card" href="https://discord.gg/eWkprNDMU7" target="_blank" rel="noopener noreferrer"><strong>Discord</strong><span>Discord 上の Seeed コミュニティに参加してください。</span></a>
  <a className="path-card" href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" target="_blank" rel="noopener noreferrer"><strong>GitHub Discussion</strong><span>wiki コンテンツやドキュメントに関する問題をディスカッションしてください。</span></a>
</div>


</section>

</div>
