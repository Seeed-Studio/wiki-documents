---
description: このWikiでは、SO-ARM100 / SO-ARM101 と LeRobot を用いたワークフローを体系的に解説します。3Dプリント、サーボ設定、組み立て、キャリブレーション、テレオペレーション、カメラ連携、データセット収集、学習、評価までをカバーします。
title: SO-ARM100 / SO-ARM101 と LeRobot
keywords:
  - Lerobot
  - Huggingface
  - SO-ARM100
  - SO-ARM101
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 2026-07-05
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2025-06-05'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/lerobot_so100m_new/
---

# SO-ARM100 / SO-ARM101 と LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div>
      <span className="eyebrow">SO-ARM × LeRobot</span>
      <h2>組み立てとサーボ設定から、テレオペレーション、データセット収集、ポリシー学習まで進めましょう</h2>
      <p>このガイドは、SO-ARM100 / SO-ARM101 ユーザー向けの実践的な立ち上げ手順として構成されています。プリント部品の準備、LeRobot のインストール、サーボIDの設定、リーダーアームとフォロワーアームの組み立て、システム全体のキャリブレーション、ロボットのテレオペレーション、カメラの追加、データセットの記録、ポリシーの学習、および実機での評価を行います。</p>
      <div className="hero-actions">
        <a href="#course-steps">ステップワークフローを見る</a>
        <a href="#install-lerobot">LeRobot をインストール</a>
        <a href="#record-dataset">データセット収集を開始</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 and SO-ARM101 with LeRobot" />
      <strong>SO-ARM10x · LeRobot</strong>
      <span>3Dプリント · サーボ設定 · テレオペレーション · データセット · 学習</span>
    </div>
  </section>

  <div className="safety-alert">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>安全上の警告：実行前にロボット作業空間を必ず片付けてください</strong>
      <p>ロボットアームを動かすプログラムを実行する前に、ロボットの作業空間から<strong>半径1メートル</strong>以内にある貴重品、壊れやすい物、工具、ケーブル、その他無関係な物体をすべて取り除いてください。キャリブレーション、テレオペレーション、記録、リプレイ、評価、ポリシーのデプロイ中は、人が可動範囲に近づかないようにしてください。</p>
      <ul>
        <li>ロボットの電源投入後は、関節、サーボ、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
        <li>各ステップの前に、必ず正しい電源を確認してください。SO101 Pro は<strong>リーダーアームに 5V</strong>、<strong>フォロワーアームに 12V</strong> を使用します。</li>
        <li>異常な動き、異音、振動、ケーブルの緩み、電源断、通信断が発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
        <li>サーボケーブル、コントローラボード、USB-C ケーブル、電源コネクタを抜き差しする前には、必ずシステムの電源を切ってください。</li>
      </ul>
    </div>
  </div>

  <nav className="doc-nav" aria-label="SO-ARM LeRobot quick navigation">
    <a href="#course-steps">ワークフロー</a>
    <a href="#overview">概要</a>
    <a href="#printing">3Dプリント</a>
    <a href="#install-lerobot">インストール</a>
    <a href="#motor-setup">サーボ設定</a>
    <a href="#calibration">キャリブレーション</a>
    <a href="#teleoperation">テレオペレーション</a>
    <a href="#camera">カメラ</a>
    <a href="#record-dataset">データセット</a>
    <a href="#training">学習</a>
    <a href="#faq">FAQ</a>
  </nav>

  <section id="course-steps" className="section-card">
    <div className="section-title">
      <span>ステップ概要</span>
      <h2>推奨 SO-ARM 立ち上げワークフロー</h2>
      <p>より安全でデバッグしやすくするため、この順番に従ってください。各ステップでは、新しい複雑さの層を1つだけ追加します。</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Step 0</span><strong>モデルと電源を確認</strong><p>SO100 / SO101、Standard / Pro キット、リーダー / フォロワーモーター、および正しい電源電圧を確認します。</p></div>
      <div className="step-card"><span className="step-mini">Step 1</span><strong>プリント部品とハードウェアを準備</strong><p>機構部品をプリントまたは確認し、サーボにラベルを貼り、コントローラボードと USB-C ケーブルを検証します。</p></div>
      <div className="step-card"><span className="step-mini">Step 2</span><strong>LeRobot をインストール</strong><p>クリーンな環境を作成し、Seeed 検証済みの LeRobot、ffmpeg、Feetech 依存パッケージ、および必要に応じて GPU 対応 PyTorch をインストールします。</p></div>
      <div className="step-card"><span className="step-mini">Step 3</span><strong>サーボIDを設定</strong><p>最終組み立ての前に、<code>{`lerobot-setup-motors`}</code> を使用してフォロワーおよびリーダーのサーボIDを初期化します。</p></div>
      <div className="step-card"><span className="step-mini">Step 4</span><strong>組み立てとキャリブレーション</strong><p>リーダーアームとフォロワーアームを組み立て、その後 LeRobot によるアーム全体のキャリブレーションを実行します。</p></div>
      <div className="step-card"><span className="step-mini">Step 5</span><strong>テレオペレーションとカメラ追加</strong><p>まずカメラなしで簡単なテレオペレーションをテストし、その後 OpenCV、RealSense、Orbbec カメラを接続します。</p></div>
      <div className="step-card"><span className="step-mini">Step 6</span><strong>記録・学習・評価</strong><p>安定したデモを記録し、データセットを可視化し、まず ACT を学習してから、SmolVLA / Pi / GR00T を試します。</p></div>
    </div>
  </section>

  <section id="overview" className="section-card">
    <div className="section-title">
      <span>概要</span>
      <h2>このチュートリアルで扱う内容</h2>
      <p>SO-ARM10x は、LeRobot を用いたマニピュレーション、テレオペレーション、模倣学習、エンボディドAIワークフローの学習向けに設計された、低コストのオープンソースロボットアームプラットフォームです。</p>
    </div>
    <div className="info-card">
      <p><a href="https://github.com/TheRobotStudio/SO-ARM100">SO-10xARM</a> は TheRobotStudio による完全オープンソースのロボットアームプロジェクトです。リーダーアームとフォロワーアームの設計、3Dプリント用ファイル、操作ガイドを提供しています。</p>
      <p><a href="https://github.com/huggingface/lerobot/tree/main">LeRobot</a> は、PyTorch 上で実世界ロボティクス向けのモデル、データセット、ツールを提供し、テレオペレーション、データセット記録、可視化、学習、評価といったワークフローをサポートします。</p>
    </div>
    <div className="feature-grid">
      <div><b>オープンソースかつ低コスト</b><span>教育、ロボティクスラボ、研究、AI マニピュレーション実験に適しています。</span></div>
      <div><b>LeRobot 対応</b><span>テレオペレーション、データセット収集、ポリシー学習、評価、Hugging Face Hub ワークフローをサポートします。</span></div>
      <div><b>リーダー・フォロワーワークフロー</b><span>リーダーアームでフォロワーアームを操作し、模倣学習用のデモを収集します。</span></div>
      <div><b>Jetson 互換</b><span>適切な PyTorch / Torchvision スタックをインストールすれば、reComputer Jetson プラットフォームと併用できます。</span></div>
    </div>
    <details className="content-details">
      <summary>SO-ARM の概要動画を見る</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="SO-ARM LeRobot overview video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="hardware" className="section-card">
    <div className="section-title">
      <span>ハードウェア</span>
      <h2>モデル、電源、およびシステム要件</h2>
      <p>サーボの設定やキャリブレーションを行う前に、どの SO-ARM キットを使用しているかを確認し、正しい電源を使用してください。</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>SO-ARM100</b><span>クラシックな SO-ARM バージョンです。既存の SO100 ユーザーは、このガイド内の SO101 用コードパスを引き続き使用できます。</span></div>
      <div className="module-summary-card"><b>SO-ARM101</b><span>配線が更新され、リーダーアームのギア比が最適化されています。プリントとセットアップは SO100 スタイルのワークフローと互換性があります。</span></div>
      <div className="module-summary-card"><b>Standard キット</b><span>5V 電源を使用します。バスに接続する前に、電源とサーボモデルを確認してください。</span></div>
      <div className="module-summary-card warning-card"><b>Pro キット</b><span>リーダーアームは 5V、フォロワーアームは 12V を使用します。電源を混在させるとモーターが損傷する可能性があります。</span></div>
    </div>

    <details className="content-details">
      <summary>仕様表</summary>
      <table>
        <thead><tr><th>項目</th><th>SO-ARM100</th><th>SO-ARM101</th></tr></thead>
        <tbody>
          <tr><td>ロボット構造</td><td>リーダーアーム + フォロワーアーム</td><td>リーダーアーム + フォロワーアーム</td></tr>
          <tr><td>通信</td><td>UART</td><td>UART</td></tr>
          <tr><td>角度センサ</td><td>12ビット磁気エンコーダ</td><td>12ビット磁気エンコーダ</td></tr>
          <tr><td>フォロワーモーター</td><td>キットバージョンに応じた STS3215 シリーズ</td><td>SO-ARM100 と同じ</td></tr>
          <tr><td>リーダーモーター</td><td>すべての関節で同一ギア比</td><td>L1、L3、L4–L6 関節向けに最適化されたギア比</td></tr>
          <tr><td>推奨温度</td><td>0°C ～ 40°C</td><td>0°C ～ 40°C</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>部品表（BOM）</summary>
      <table>
        <thead><tr><th>部品</th><th>数量</th><th>同梱</th></tr></thead>
        <tbody>
          <tr><td>サーボモーター</td><td>12</td><td>✅</td></tr>
          <tr><td>モータ制御ボード</td><td>2</td><td>✅</td></tr>
          <tr><td>USB-C ケーブル</td><td>2</td><td>✅</td></tr>
          <tr><td>電源</td><td>2</td><td>✅</td></tr>
          <tr><td>テーブルクランプ</td><td>4</td><td>✅</td></tr>
          <tr><td>3D プリント済みアーム部品</td><td>1 セット</td><td>オプション / 自前で用意</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>推奨システム環境</summary>
      <div className="env-grid">
        <div>
          <h3>Ubuntu x86</h3>
          <ul>
            <li>Ubuntu 22.04</li>
            <li>CUDA 12+</li>
            <li>Python 3.10</li>
            <li>Torch 2.6+ または使用中の CUDA スタックに対応したバージョン</li>
          </ul>
        </div>
        <div>
          <h3>Jetson Orin</h3>
          <ul>
            <li>JetPack 6.0 / 6.1</li>
            <li>Python 3.10</li>
            <li>Torch 2.3+</li>
            <li>PyTorch と Torchvision が GPU 対応であることを確認します</li>
          </ul>
        </div>
      </div>
    </details>
  </section>

  <section id="printing" className="section-card">
    <div className="section-title">
      <span>Step 1</span>
      <h2>3D プリント部品とハードウェアを準備する</h2>
      <p>新規構築には SO101 のプリントファイルを使用します。既存の SO100 ユーザーも、同じインストールおよびソフトウェアのワークフローに従うことができます。</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">1.1</span><strong>プリントファイルを選択する</strong><p>220 mm × 220 mm ベッドには Ender 用ファイルを、205 mm × 250 mm ベッドには Prusa / Up 用ファイルを使用します。</p></div>
      <div className="step-card"><span className="step-mini">1.2</span><strong>推奨設定を使用する</strong><p>PLA+、0.4 mm ノズルでレイヤー高さ 0.2 mm、または 0.6 mm ノズルでレイヤー高さ 0.4 mm を使用します。</p></div>
      <div className="step-card"><span className="step-mini">1.3</span><strong>サーボにラベルを付ける</strong><p>配線の前に、F1-F6 と L1-L6 にラベルを付けて、キャリブレーションや組み立てのミスを防ぎます。</p></div>
    </div>
    <details className="content-details">
      <summary>3D プリントの参考情報</summary>
      <ul>
        <li>Ender ベッドサイズ：<a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl">Follower</a> および <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl">Leader</a>。</li>
        <li>Prusa / Up ベッドサイズ：<a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl">Follower</a> および <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl">Leader</a>。</li>
        <li>推奨インフィル密度：15%。</li>
        <li>必要な箇所にはサポートを使用しますが、水平方向のねじ穴内部の不要なサポートは避けてください。</li>
      </ul>
    </details>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Step 2</span>
      <h2>LeRobot をインストールする</h2>
      <p>クリーンな Miniforge 環境から開始し、Seeed によって検証された LeRobot リポジトリと Feetech モーターの依存関係をインストールします。</p>
    </div>
    <div className="command-flow">
      <div>
        <h3>1. Miniforge をインストールする</h3>
        <pre><code>{`# Jetson / aarch64
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
source ~/.bashrc

# x86_64 Ubuntu
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
source ~/.bashrc
conda init --all`}</code></pre>
      </div>
      <div>
        <h3>2. LeRobot 用の環境を作成する</h3>
        <pre><code>{`conda create -y -n lerobot python=3.10
conda activate lerobot`}</code></pre>
      </div>
      <div>
        <h3>3. LeRobot をクローンしてインストールする</h3>
        <pre><code>{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot
conda install ffmpeg -c conda-forge
pip install -e ".[feetech]"`}</code></pre>
      </div>
      <div>
        <h3>4. GPU 対応の PyTorch を確認する</h3>
        <pre><code>{`python3
import torch
print(torch.cuda.is_available())
exit()`}</code></pre>
      </div>
    </div>
    <details className="content-details">
      <summary>Jetson JetPack 6.0+ の追加設定</summary>
      <p>Jetson では、LeRobot の依存関係をインストールする前に、GPU 対応の PyTorch / Torchvision をインストールします。pip によって CPU 版に置き換えられた場合は、Jetson 互換パッケージを再インストールしてください。</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>
    <details className="content-details">
      <summary>ffmpeg 互換性に関する注意</summary>
      <p>データセットの記録や可視化でコーデック関連のエラーが報告される場合は、動作が確認されている ffmpeg バージョンをインストールしてください。</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
  </section>

  <section id="motor-setup" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>サーボ設定前の電源チェック</strong>
        <p>Leader アームのサーボは 5V を使用する必要があります。SO101 Pro では、Follower アームのサーボは 12V を使用します。USB はサーボに電力を供給しないため、USB と正しい電源の両方を接続する必要があります。</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 3</span>
      <h2>組み立て前にサーボ ID を設定する</h2>
      <p>キット版の場合は、サーボを 1 台ずつ設定します。完成品ユーザーはこのセクションをスキップして、アーム全体のキャリブレーションに直接進むことができます。</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Follower のラベル</b><span>ベースからグリッパーまでの Follower アームを表すために F1-F6 を使用します。</span></div>
      <div className="module-summary-card"><b>Leader のラベル</b><span>ベースからハンドル / グリッパーまでの Leader アームを表すために L1-L6 を使用します。</span></div>
      <div className="module-summary-card warning-card"><b>SO101 のギア比</b><span>L1 と L3 は 1:191、L2 は 1:345、L4-L6 は 1:147 を使用します。</span></div>
    </div>
    <details className="content-details">
      <summary>USB ポートを見つける</summary>
      <pre><code>{`lerobot-find-port

# If needed on Linux:
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}</code></pre>
      <p>多くの Linux および Jetson 環境では、最初に接続されたデバイスは <code>{`/dev/ttyACM0`}</code> に、2 台目は <code>{`/dev/ttyACM1`}</code> にマッピングされます。セットアップやキャリブレーションコマンドを実行する前に、必ず確認してください。</p>
    </details>
    <details className="content-details">
      <summary>SO101 のサーボモデルとジョイントの対応</summary>
      <table>
        <thead><tr><th>サーボモデル</th><th>ギア比</th><th>ジョイント</th></tr></thead>
        <tbody>
          <tr><td>ST-3215-C044 (7.4V)</td><td>1:191</td><td>L1</td></tr>
          <tr><td>ST-3215-C001 (7.4V)</td><td>1:345</td><td>L2</td></tr>
          <tr><td>ST-3215-C044 (7.4V)</td><td>1:191</td><td>L3</td></tr>
          <tr><td>ST-3215-C046 (7.4V)</td><td>1:147</td><td>L4-L6</td></tr>
          <tr><td>ST-3215-C001 / C018 / C047</td><td>1:345</td><td>F1-F6</td></tr>
        </tbody>
      </table>
    </details>
    <details className="content-details">
      <summary>Follower アームのサーボを設定する</summary>
      <pre><code>{`lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0`}</code></pre>
      <p>ターミナルのプロンプトで要求されたサーボのみを接続します。各ステップの後、Enter を押す前に電源と配線を確認してください。</p>
    </details>
    <details className="content-details">
      <summary>Leader アームのサーボを設定する</summary>
      <pre><code>{`lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1`}</code></pre>
      <p>Leader アームのサーボ設定には 5V を使用します。ID 書き込み中に、すべてのサーボを一度に接続しないでください。</p>
    </details>
  </section>

  <section id="assembly" className="section-card">
    <div className="section-title">
      <span>Step 4</span>
      <h2>Leader アームと Follower アームを組み立てる</h2>
      <p>サーボ ID の設定後、SO101 の機構ガイドに従ってアームを組み立てます。Follower と Leader の組み立ては、ステップ 12 以降のエンドエフェクタ / ハンドル部を除き、ほぼ同じです。</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">4.1</span><strong>サーボラベルを再確認する</strong><p>プリント部品に取り付ける前に、F1-F6 と L1-L6 を確認します。</p></div>
      <div className="step-card"><span className="step-mini">4.2</span><strong>Leader アームを組み立てる</strong><p>番号付きの画像に従い、ジョイント干渉を避けるためにケーブルを慎重に配線します。</p></div>
      <div className="step-card"><span className="step-mini">4.3</span><strong>Follower アームを組み立てる</strong><p>同じベース構造に従い、その後 Follower のエンドエフェクタとグリッパー部を取り付けます。</p></div>
    </div>
    <details className="content-details">
      <summary>組み立て参考画像</summary>
      <p>元のチュートリアルには、Leader と Follower の完全な組み立て画像テーブルが含まれています。このページは簡潔に保ち、完全なキャリブレーション前の確認用チェックポイントとしてこのセクションを使用してください。</p>
      <ul>
        <li>Leader の組み立て：Step 1 から Step 20。</li>
        <li>Follower の組み立て：Step 1 から Step 17。</li>
        <li>主要なジョイントを取り付けるたびに、ケーブルの取り回しを確認します。</li>
      </ul>
    </details>
  </section>

  <section id="calibration" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>キャリブレーションの安全チェック</strong>
        <p>ロボットをしっかり保持し、作業スペースを片付け、キャリブレーション前に正しい電源を確認してください。キャリブレーションの品質は、テレオペレーション、記録、およびポリシー評価に直接影響します。</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 5</span>
      <h2>Leader アームと Follower アームをキャリブレーションする</h2>
      <p>キャリブレーションは、物理的なジョイント位置を LeRobot が想定するジョイント状態と一致させます。同じロボット ID を、テレオペレーション、記録、リプレイ、および評価に使用します。</p>
    </div>
    <details className="content-details">
      <summary>再キャリブレーションのオプション</summary>
      <p>再キャリブレーションを行うには、<code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> と <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code> 配下の関連キャリブレーションファイルを削除するか、既存のキャリブレーションファイルを再利用するかどうかを LeRobot に尋ねられたときに <code>{`c`}</code> を入力します。</p>
    </details>
    <details className="content-details">
      <summary>フォロワーアームをキャリブレーションする</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>リーダーアームをキャリブレーションする</summary>
      <pre><code>{`lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>オプション：Seeed SoARM ツールによる中立位置キャリブレーション</summary>
      <p><code>{`Magnitude 30841 exceeds 2047`}</code> のようなエラーが表示される場合は、SoARM クイックツールを使用して現在位置を書き込み、中間値 2048 として設定し、その後にアーム全体のキャリブレーションをやり直してください。</p>
      <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable
python -m src.tools.servo_middle_calibration
python -m src.tools.servo_center_test`}</code></pre>
      <p><a href="/ja/lerobot_steering_gear_debugging_tool/">ステアリングギアデバッグツールチュートリアルを開く</a></p>
    </details>
  </section>

  <section id="teleoperation" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>テレオペレーション安全チェック</strong>
        <p>最初はカメラなしで開始してください。作業スペースを整理し、どちらかのアームの電源または通信が失われた場合は直ちに停止してください。</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 6</span>
      <h2>簡単なテレオペレーションを実行する</h2>
      <p>簡単なテレオペレーションにより、カメラストリームやデータセットの記録を追加する前に、リーダーからフォロワーへの制御チェーンを検証します。</p>
    </div>
    <details className="content-details">
      <summary>簡単なテレオペレーションコマンド</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>テレオペレーションデモ動画</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="SO-ARM teleoperation video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Step 7</span>
      <h2>観測データ用のカメラを追加する</h2>
      <p>カメラの構成はデータセットの品質に直接影響します。まずは低解像度のストリーム 1 本から始め、システムが安定してからカメラや深度ストリームを追加してください。</p>
    </div>
    <div className="camera-grid">
      <details className="content-details">
        <summary>通常の USB / OpenCV カメラを使用する</summary>
        <pre><code>{`lerobot-find-cameras opencv`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true`}</code></pre>
        <div className="callout"><b>MJPG 推奨</b><p><code>{`MJPG`}</code> は圧縮されており、通常はより高い解像度 / FPS を提供します。同じ USB ハブに複数の高解像度 USB カメラを接続することは避けてください。</p></div>
      </details>
      <details className="content-details">
        <summary>RealSense D405 / D435i を使用する</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
    d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
      <details className="content-details">
        <summary>Orbbec Gemini2 / Gemini 336 を使用する</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'
lerobot-find-cameras orbbec`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
    orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
    </div>
  </section>

  <section id="record-dataset" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>記録時の安全チェック</strong>
        <p>まずはシンプルで再現性の高いタスクを使用してください。カメラ位置、照明、物体の配置、動作スタイルを一貫させてください。</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 8</span>
      <h2>LeRobot データセットを記録・管理する</h2>
      <p>まずは小さなローカルデータセットから始め、動画と状態を確認し、セットアップが安定したら Hugging Face Hub にアップロードします。</p>
    </div>
    <div className="tips-grid">
      <div><b>推奨スケール</b><span>最初にテストエピソードを 5 本記録し、本番の学習用には少なくとも 50 エピソードを記録してください。</span></div>
      <div><b>一貫性</b><span>カメラを固定し、操作対象の物体が常にカメラビュー内に見えるようにしてください。</span></div>
      <div><b>タスク設計</b><span>カメラ画像だけを見てタスクを完了できるようにする必要があります。</span></div>
    </div>
    <details className="content-details">
      <summary>ローカルデータセットを記録する</summary>
      <pre><code>{`lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p><code>{`--dataset.push_to_hub=false`}</code> の場合、データセットは <code>{`~/.cache/huggingface/lerobot`}</code> 配下に保存されます。</p>
    </details>
    <details className="content-details">
      <summary>記録して Hugging Face Hub にアップロードする</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
    </details>
    <details className="content-details">
      <summary>記録中のキーボード操作</summary>
      <table>
        <thead><tr><th>キー</th><th>動作</th></tr></thead>
        <tbody>
          <tr><td>右矢印</td><td>現在のエピソードを終了 / 早期リセットして次のエピソードに進みます。</td></tr>
          <tr><td>左矢印</td><td>現在のエピソードをキャンセルし、再度記録します。</td></tr>
          <tr><td>ESC</td><td>セッションを直ちに停止し、動画をエンコードしてデータセットを保存 / アップロードします。</td></tr>
        </tbody>
      </table>
      <pre><code>{`# If keyboard shortcuts do not respond:
pip install pynput==1.6.8`}</code></pre>
    </details>
  </section>

  <section id="visualize" className="section-card">
    <div className="section-title">
      <span>ステップ 9</span>
      <h2>データセットの可視化とリプレイ</h2>
      <p>学習を行う前に、必ずデータセットを確認してください。カメラ画像、ロボット状態、アクション、エピソードのタイミングをチェックします。</p>
    </div>
    <details className="content-details">
      <summary>データセットを可視化する</summary>
      <pre><code>{`# Hub dataset
lerobot-dataset-viz \
  --repo-id \${HF_USER}/so101_test

# Local dataset
lerobot-dataset-viz \
  --repo-id seeedstudio123/test`}</code></pre>
    </details>
    <details className="content-details">
      <summary>エピソードをリプレイする</summary>
      <div className="callout warning"><b>オプションのステップ</b><p>リプレイでは実機ロボットが動作する可能性があります。キャリブレーションと作業空間の安全性を確認した後にのみ使用してください。</p></div>
      <pre><code>{`lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">
    <div className="section-title">
      <span>ステップ 10</span>
      <h2>ポリシーの学習と評価</h2>
      <p>最初の一連のワークフローでは ACT を使用してください。ACT がエンドツーエンドで動作したら、SmolVLA、Pi0、Pi0.5、GR00T、PEFT、マルチ GPU トレーニング、非同期推論などを試すことができます。</p>
    </div>
    <details className="content-details">
      <summary>ACT：最初に推奨されるポリシー</summary>
      <h3>学習</h3>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <h3>評価</h3>
      <pre><code>{`lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_so101_test \
  --dataset.single_task="Put the cube into the box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>
    <details className="content-details">
      <summary>SmolVLA / Pi0 / Pi0.5 / GR00T の高度なオプション</summary>
      <div className="module-summary-grid">
        <div className="module-summary-card"><b>SmolVLA</b><span>軽量な VLA ファインチューニングのエントリーポイントです。ACT が安定してから試してください。</span></div>
        <div className="module-summary-card"><b>Pi0 / Pi0.5</b><span>言語条件付きポリシーの実験に有用です。</span></div>
        <div className="module-summary-card"><b>GR00T</b><span>より厳密な CUDA / PyTorch / FlashAttention スタックが必要です。上級者向けの実験として扱ってください。</span></div>
      </div>
      <pre><code>{`# SmolVLA
pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true

# Pi0 / Pi0.5
pip install -e ".[pi]"

# GR00T
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
    </details>
    <details className="content-details">
      <summary>オプション：PEFT、マルチ GPU、非同期推論</summary>
      <ul>
        <li><b>PEFT / LoRA：</b>すべてのモデル重みではなくアダプタパラメータのみを学習することで、ファインチューニングのコストを削減します。</li>
        <li><b>マルチ GPU：</b>より大きなポリシーや大きなバッチを学習する際は、<code>{`accelerate launch`}</code> を使用します。</li>
        <li><b>非同期推論：</b>ロボットクライアントがアクションチャンクを実行している間、サーバー上でポリシー推論を実行します。</li>
      </ul>
      <pre><code>{`# PEFT
pip install -e ".[peft]"

# Multi-GPU helper
pip install accelerate
accelerate config

# Async inference dependencies
pip install -e ".[async]"`}</code></pre>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>よくある問題と対処方法</h2>
      <p>SO-ARM LeRobot に関する問題の多くは、シリアル権限、不適切な電源、サーボケーブルの緩み、ffmpeg のバージョン、キャリブレーションキャッシュ、またはカメラ名の不一致に関連しています。</p>
    </div>
    <details className="content-details">
      <summary>/dev/ttyACM0 ポートに接続できません</summary>
      <p>シリアル権限を付与し、デバイスが存在することを確認してください。</p>
      <pre><code>{`ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM*`}</code></pre>
    </details>
    <details className="content-details">
      <summary>モーター 'gripper' が見つかりません</summary>
      <p>要求したサーボが唯一接続されているサーボかどうか、サーボケーブルが奥までしっかり挿入されているか、電源が正しいかを確認してください。</p>
    </details>
    <details className="content-details">
      <summary>入力ファイルに有効なストリームが見つかりません</summary>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
    <details className="content-details">
      <summary>ConnectionError: no status packet</summary>
      <p>選択したポート上のアームの電源が入っているか確認してください。サーボの LED が消灯している場合は、デイジーチェーン内の一つ前のサーボケーブルを確認してください。</p>
    </details>
    <details className="content-details">
      <summary>キャリブレーション中に大きさが 2047 を超えました</summary>
      <p>ロボットの電源を入れ直してから再試行してください。問題が解決しない場合は、中間位置キャリブレーションを実行してから、再度フルアームキャリブレーションを行ってください。</p>
    </details>
    <details className="content-details">
      <summary>評価レポートの平均値が無限大になります</summary>
      <p><code>{`front`}</code> や <code>{`side`}</code> などのカメラ名は、データセット記録時に使用した名前と一致している必要があります。</p>
    </details>
    <details className="content-details">
      <summary>記録中にキーボードショートカットが機能しません</summary>
      <pre><code>{`echo $DISPLAY
pip install pynput==1.6.8`}</code></pre>
    </details>
    <details className="content-details">
      <summary>rerun に scalar 属性がありません</summary>
      <pre><code>{`pip3 install rerun-sdk==0.23`}</code></pre>
    </details>
  </section>

  <section className="section-card course-path-section">
    <div className="section-title">
      <span>学習を続ける</span>
      <h2>SO-ARM 学習パス</h2>
      <p>この LeRobot ガイドを完了したら、サーボのデバッグ、シミュレーション、強化学習、GR00T、デュアルアームのワークフローへと学習を進めてください。</p>
    </div>
    <div className="course-path-grid">
      <a className="course-path-item active" href="/ja/lerobot_so100m_new/">
        <span className="course-index">1</span>
        <span className="course-path-copy"><strong>SO100 / SO101 と LeRobot</strong><span>組み立て、キャリブレーション、テレオペレーション、データセット収集、学習、評価。</span></span>
        <span className="course-tag">現在の記事</span>
      </a>
      <a className="course-path-item" href="/ja/lerobot_steering_gear_debugging_tool/">
        <span className="course-index">2</span>
        <span className="course-path-copy"><strong>サーボデバッグツール</strong><span>サーボ ID、ゼロ位置、方向、通信、中間位置キャリブレーションを確認します。</span></span>
        <span className="course-tag">デバッグ</span>
      </a>
      <a className="course-path-item" href="/ja/simulate_soarm101_by_leisaac/">
        <span className="course-index">3</span>
        <span className="course-path-copy"><strong>LeIsaac シミュレーション</strong><span>Sim2Real の前に、SO-ARM のシミュレーション、シーン、タスク設定について理解します。</span></span>
        <span className="course-tag">シミュレーション</span>
      </a>
      <a className="course-path-item" href="/ja/training_soarm101_policy_with_isaacLab/">
        <span className="course-index">4</span>
        <span className="course-path-copy"><strong>Isaac Lab 強化学習</strong><span>シミュレーションでポリシーを学習し、報酬設計とデプロイフローを学びます。</span></span>
        <span className="course-tag">RL</span>
      </a>
      <a className="course-path-item" href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
        <span className="course-index">5</span>
        <span className="course-path-copy"><strong>SO101 と NVIDIA GR00T</strong><span>エンボディド AI / VLA モデルをファインチューニングし、Jetson Thor にデプロイします。</span></span>
        <span className="course-tag">VLA</span>
      </a>
      <a className="course-path-item" href="/ja/lerobot_double_arm_so_arm_training/">
        <span className="course-index">6</span>
        <span className="course-path-copy"><strong>デュアルアーム SO-ARM トレーニング</strong><span>単腕タスクから、デュアルアームでのデータ収集と学習へと発展させます。</span></span>
        <span className="course-tag">デュアルアーム</span>
      </a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>参考情報</span>
      <h2>参考資料とサポート</h2>
    </div>
    <div className="reference-grid">
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://huggingface.co/docs/lerobot/index">LeRobot ドキュメント</a>
      <a href="https://github.com/Seeed-Projects/lerobot">Seeed-Projects LeRobot</a>
      <a href="https://forum.seeedstudio.com/">Seeed Studio フォーラム</a>
      <a href="https://discord.gg/8TnwDdjFGU">LeRobot Discord</a>
    </div>
  </section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.rebot-page * { box-sizing: border-box; }
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); text-align: center; }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-card-grid, .module-summary-grid, .spec-grid, .tips-grid, .notice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.step-card, .module-summary-card, .spec-card, .tips-grid div, .notice-card, .command-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.step-card:hover, .course-path-item:hover, .reference-grid a:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.step-card strong, .module-summary-card b, .spec-card b, .tips-grid b, .notice-card strong { color: var(--rb-text); font-size: 1rem; }
.step-card p, .module-summary-card span, .spec-card span, .tips-grid span, .notice-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; overflow: hidden; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "展開"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "折りたたむ"; }
.command-flow > div, .command-card { margin: 1rem 0; }
.command-flow h3, .command-card h3 { margin-top: 0; color: var(--rb-text); }
.callout { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; }
.callout.warning { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; transition: all 0.18s ease; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; border-collapse: collapse; }
.rebot-page table th, .rebot-page table td { border: 1px solid var(--rb-border); padding: 0.65rem; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .tips-grid div, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); position: static; } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } .safety-alert { grid-template-columns: 1fr; } }
`}</style>
