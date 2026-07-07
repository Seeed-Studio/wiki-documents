---
description: LeRobot における SO-ARM 用ステアリングギアデバッグツール。
title: LeRobot における SO-ARM 用ステアリングギアデバッグツール
keywords:
  - Lerobot
  - SO-ARM
  - ロボティクス
  - サーボ
  - キャリブレーション
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/ja/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# LeRobot における SO-ARM 用ステアリングギアデバッグツール

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>GUI ツールでサーボ ID、中立位置、トルク、LeRobot キャリブレーションファイルをデバッグ</h2>
    <p>ステアリングギアデバッグツール（<strong>Seeed_RoboController</strong> とも呼ばれます）は、SO-ARM サーボの状態確認、サーボ ID の書き換え、中立値の設定、個別サーボの制御、リーダーアームおよびフォロワーアーム用の LeRobot キャリブレーションファイルの管理を行うのに役立ちます。</p>
    <div className="hero-actions">
      <a href="#quick-path">ワークフローを見る</a>
      <a href="#install">ツールをインストール</a>
      <a href="#servo-id">サーボ ID を修正</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="SO-ARM Steering Gear Debugging Tool" />
    <strong>サーボデバッグ · ID 復旧 · 中立キャリブレーション</strong>
    <span>サーボが見つからない、ID が重複している、中立位置が誤っている、または LeRobot キャリブレーションファイルを確認する必要がある場合にこのツールを使用します。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：電源とトルクによりアームが予期せず動く可能性があります</strong>
    <p>トルクを有効にする前やサーボを動かす前に、ロボットの作業空間を片付け、関節、ギア、リンク、グリッパーから手を離してください。トルクを無効にするとアームがぐらついて落下することがあるため、手で支えてください。</p>
    <ul>
      <li>SO101 Pro の場合、<strong>リーダーアームには 5V</strong>、<strong>フォロワーアームには 12V</strong> を使用してください。</li>
      <li>同じバスに重複した ID を持つ複数のサーボが接続されている状態でサーボ ID を書き込まないでください。</li>
      <li>スライダーはゆっくり動かしてください。GUI が最小値または最大値に達する前に、機械部品がサーボの動きを妨げる場合があります。</li>
      <li>サーボハーネスを再接続したり配線を変更したりする前に、アームの電源を切ってください。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="SO-ARM debugging tool quick navigation">
  <a href="#quick-path">ワークフロー</a>
  <a href="#overview">概要</a>
  <a href="#install">インストール</a>
  <a href="#check-servos">チェック</a>
  <a href="#servo-id">サーボ ID</a>
  <a href="#neutral">中立</a>
  <a href="#single-servo">制御</a>
  <a href="#calibration-files">ファイル</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>ここから開始</span>
    <h2>推奨デバッグワークフロー</h2>
    <p>SO-ARM のリーダーアームまたはフォロワーアームが検出されない、サーボ ID が重複している、中立位置が誤っている、または LeRobot キャリブレーションを完了できない場合は、この順序に従ってください。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Step 0</span><strong>ツールをインストールして起動</strong><p>Seeed_RoboController をクローンし、依存関係をインストールし、環境をチェックして GUI を開きます。</p><em>必須</em></a>
    <a className="path-card" href="#check-servos"><span>Step 1</span><strong>サーボ状態を確認</strong><p>サーボ 1〜6 が検出されているか確認します。サーボが見つからない場合は、配線、電源、または ID の問題であることが多いです。</p><em>最初に読む</em></a>
    <a className="path-card" href="#servo-id"><span>Step 2</span><strong>重複した ID を復旧</strong><p>ID を書き換える前にサーボチェーンを切り離し、1 つのサーボだけを接続します。</p><em>ID 修復</em></a>
    <a className="path-card" href="#neutral"><span>Step 3</span><strong>中立値を書き込み</strong><p>アームを正しい中立姿勢に動かし、現在位置をサーボの中立値として書き込みます。</p><em>センタリング</em></a>
    <a className="path-card" href="#single-servo"><span>Step 4</span><strong>個別サーボをテスト</strong><p>トルクを有効にして各サーボをゆっくり動かし、方向、電圧、温度、負荷、ステータスを確認します。</p><em>動作テスト</em></a>
    <a className="path-card" href="#calibration-files"><span>Step 5</span><strong>キャリブレーションファイルを管理</strong><p>リーダーアームおよびフォロワーアーム用の LeRobot キャリブレーションファイルを実行、変更、削除、または作成します。</p><em>LeRobot</em></a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>このツールの用途</h2>
    <p>この GUI は SO-ARM100 / SO-ARM101 の組み立て、修理、保守のために設計されています。特に <code>{`lerobot-setup-motors`}</code> および <code>{`lerobot-calibrate`}</code> を実行する前後に有用です。</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>サーボ状態検出</b><span>サーボ ID 1〜6 が検出されているか、基本的な通信が機能しているかを素早く確認します。</span></div>
    <div className="module-summary-card"><b>ID 復旧</b><span>1 つずつサーボを接続して、不正または重複したサーボ ID を書き換えます。</span></div>
    <div className="module-summary-card"><b>中立キャリブレーション</b><span>現在のサーボ位置を中立値として設定し、アームが期待どおりの中間姿勢に戻るか確認します。</span></div>
    <div className="module-summary-card"><b>単一サーボ制御</b><span>トルクを有効にし、サーボをゆっくり動かして、位置、電圧、温度、速度、負荷、電流、動作、モデル、ステータスを確認します。</span></div>
    <div className="module-summary-card"><b>高度なレジスタ</b><span>レジスタデータの読み書き、ボーレートの変更、必要に応じた工場出荷時設定への復元を行います。</span></div>
    <div className="module-summary-card"><b>キャリブレーションファイル管理</b><span>リーダーアームおよびフォロワーアーム用の LeRobot キャリブレーションファイルを選択、実行、変更、削除、または作成します。</span></div>
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 0</span>
    <div>
      <h2>Seeed_RoboController をインストールして起動</h2>
      <p>このツールは Windows、Ubuntu、macOS をサポートしています。LeRobot の仮想環境内にインストールすることを推奨します。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">0.1</span><strong>リポジトリをクローン</strong><p>Seeed-Projects の GitHub リポジトリから GUI デバッグツールをダウンロードします。</p></div>
    <div className="step-card"><span className="step-mini">0.2</span><strong>依存関係をインストール</strong><p>LeRobot 環境または別の専用仮想環境に Python の依存関係をインストールします。</p></div>
    <div className="step-card"><span className="step-mini">0.3</span><strong>環境をチェック</strong><p>セットアップチェックを実行し、環境チェックに合格したと報告されることを確認します。</p></div>
    <div className="step-card"><span className="step-mini">0.4</span><strong>GUI を起動</strong><p>対話的なポート選択で GUI を起動するか、必要に応じてポートを手動で指定します。</p></div>
  </div>

  <details className="content-details">
    <summary>インストールコマンド</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController

# Recommended: run this inside your LeRobot virtual environment.
pip install -r requirements.txt

# Environment check. Expected result: [OK] Environment check passed
python setup.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>GUI を起動</summary>
    <pre><code>{`# Interactive port selection
python -m src.gui.factory_calibration_tool

# Optional: manually specify ports if needed
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1`}</code></pre>
  </details>
</section>

<section id="check-servos" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>サーボが正しく検出されているか確認する</h2>
      <p>まず、サーボ 1〜6 が検出されているか確認します。6 個すべてのサーボが正常に検出されていれば、サーボバスと基本機能は通常動作しています。</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="All servos detected in the debugging tool" />
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>正常な場合</strong><span>サーボ 1〜6 がすべて検出されています。中立テスト、単一サーボ制御、または LeRobot キャリブレーションファイル管理を続行できます。</span></div>
    <div className="notice-card warning"><strong>異常な場合</strong><span>一部のサーボが検出されない場合は、まず配線と電源を確認してください。その後 GUI を閉じて再度開きます。それでも問題が解決しない場合、サーボ ID が重複しているか誤って書き込まれている可能性があります。</span></div>
  </div>

  <details className="content-details">
    <summary>例：サーボが欠落している、または誤って検出されている</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="Servo missing or not detected" />
    </div>
    <p>これは、フルアームキャリブレーション用のコマンドを誤ってサーボ ID 設定コマンドとして使用した場合や、複数のサーボが同じ ID を共有するようになった場合に発生することがあります。</p>
  </details>
</section>

<section id="servo-id" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>重要：ID を書き換えるときは 1 つのサーボだけを接続してください</strong>
      <p>サーボは 1 本のシリアルバスを共有しています。同じ ID を持つ複数のサーボが接続されている場合、1 つの ID を変更すると、その ID を持つすべてのサーボが変更される可能性があります。サーボチェーンを切り離し、ID を 1 つずつ書き換えてください。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>重複または誤ったサーボ ID を復旧する</h2>
      <p>物理的に接続されているサーボが誤った番号として表示されている場合は、検出されたサーボをクリックし、ID を正しい関節番号に戻してください。</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">2.1</span><strong>サーボハーネスを取り外す</strong><p>デイジーチェーンハーネスを取り外し、1 つのサーボだけがドライバボードに接続できる状態にします。</p></div>
    <div className="step-card"><span className="step-mini">2.2</span><strong>サーボを 1 つ接続する</strong><p>書き換えたいサーボだけを接続します。アームを完全に分解する必要はありません。</p></div>
    <div className="step-card"><span className="step-mini">2.3</span><strong>物理的な関節と検出された ID を比較する</strong><p>例えば、接続されているサーボは関節 6 ですが、GUI では ID 4 として検出される場合があります。</p></div>
    <div className="step-card"><span className="step-mini">2.4</span><strong>正しい ID を書き込む</strong><p>GUI で検出されたサーボをクリックし、その ID を想定される関節番号に変更します。</p></div>
    <div className="step-card"><span className="step-mini">2.5</span><strong>繰り返して再接続する</strong><p>他のサーボについても同様に行い、その後ハーネスを 1 本ずつ差し戻します。</p></div>
  </div>

  <details className="content-details">
    <summary>ステップ 2.1: サーボワイヤハーネスを取り外す</summary>
    <p>次の順番でハーネスを取り外します：サーボ 6 から 5、サーボ 5 から 4、サーボ 4 から 3、サーボ 3 から 2、サーボ 2 から 1、最後にサーボ 1 から制御ボード。</p>
    <div className="image-grid">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="サーボ 6 とサーボ 5 間のハーネスを取り外す" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" alt="サーボ 5 とサーボ 4 間のハーネスを取り外す" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" alt="サーボ 4 とサーボ 3 間のハーネスを取り外す" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" alt="サーボ 3 とサーボ 2 間のハーネスを取り外す" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" alt="サーボ 2 とサーボ 1 間のハーネスを取り外す" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="サーボ 1 と制御ボード間のハーネスを取り外す" />
    </div>
  </details>

  <details className="content-details">
    <summary>ステップ 2.2: サーボを 1 つ接続して ID を書き換える</summary>
    <p>サーボを 1 つだけドライバボードに接続します。以下の例では、ID 復旧のためにサーボ 6 を接続する方法を示しています。</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="サーボを 1 つだけドライバボードに接続する" />
    </div>
    <p>GUI に ID 4 と表示されているが、物理的に接続されているサーボがサーボ 6 である場合は、サーボ 4 をクリックしてその ID を 6 に変更します。</p>
    <div className="image-grid two-col">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="誤ったサーボ ID が検出された状態" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="GUI でサーボ ID を変更する" />
    </div>
  </details>
</section>

<section id="neutral" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>トルクを無効にするときはアームを支える</strong>
      <p><strong>Serial Port Disable Motors</strong> をクリックすると、アームはだらんとした状態になります。トルクを無効にする前にアームを手で支えてください。</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>サーボにニュートラル値を書き込む</h2>
      <p>ニュートラルキャリブレーションでは、現在の物理的な姿勢を各サーボの中間値として書き込みます。これは、LeRobot のキャリブレーションで大きさや範囲の値が異常と報告される場合に有用です。</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="SO-ARM のニュートラル位置" />
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">3.1</span><strong>ニュートラルテストを実行する</strong><p><strong>Serial Port Neutral Test</strong> をクリックし、アームが想定されるニュートラル姿勢に移動するか確認します。</p></div>
    <div className="step-card"><span className="step-mini">3.2</span><strong>ニュートラル姿勢に移動する</strong><p>姿勢が誤っている場合は、上図に示すニュートラル位置までアームを手動で動かします。</p></div>
    <div className="step-card"><span className="step-mini">3.3</span><strong>ニュートラル値を書き込む</strong><p><strong>Serial Port Neutral Calibration</strong> をクリックして、現在の位置をサーボのニュートラル値として書き込みます。</p></div>
    <div className="step-card"><span className="step-mini">3.4</span><strong>トルクを慎重に無効化する</strong><p>アームを手で支えているときにのみ、<strong>Serial Port Disable Motors</strong> をクリックしてください。</p></div>
  </div>

  <details className="content-details">
    <summary>ニュートラルキャリブレーション GUI</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="GUI でのニュートラルキャリブレーション" />
    </div>
  </details>
</section>

<section id="single-servo" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>単一サーボを制御・確認する</h2>
      <p>単一サーボ制御を使用して、方向、通信、トルク、温度、およびステータスを確認します。ゆっくり動かし、機械的なエンドストップに当たらないようにしてください。</p>
    </div>
  </div>

  <div className="image-grid two-col">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="単一サーボ制御のニュートラル位置" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" alt="トルク有効化後の単一サーボの動き" />
  </div>

  <div className="notice-grid">
    <div className="notice-card warning"><strong>スライダーを端までドラッグしない</strong><span>プリントされたアーム構造により、スライダーが 0 または最大値に達する前に物理的に一部の位置がブロックされる場合があります。</span></div>
    <div className="notice-card"><strong>まずトルクを有効にする</strong><span>ワンクリックですべてのトルクを有効にするか、移動させる前に単一サーボのトルクを有効にすることができます。</span></div>
  </div>

  <details className="content-details">
    <summary>サーボステータスフィールド</summary>
    <div className="api-grid">
      <div className="api-card"><b>Pos</b><span>位置</span></div>
      <div className="api-card"><b>V</b><span>電圧</span></div>
      <div className="api-card"><b>T</b><span>温度</span></div>
      <div className="api-card"><b>Spd</b><span>速度</span></div>
      <div className="api-card"><b>Load</b><span>トルク / 負荷</span></div>
      <div className="api-card"><b>Cur</b><span>電流</span></div>
      <div className="api-card"><b>Mov</b><span>動作ステータス</span></div>
      <div className="api-card"><b>Model</b><span>モデルと権限</span></div>
      <div className="api-card"><b>Status</b><span>通常、過電流、または過負荷</span></div>
    </div>
  </details>
</section>

<section id="advanced" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>必要なときだけ高度なツールを使用する</h2>
      <p>高度なパネルでは、レジスタデータの読み書き、ボーレートの変更、工場出荷時設定への復元ができます。誤った値を設定するとサーボへアクセスしにくくなる可能性があるため、慎重に使用してください。</p>
    </div>
  </div>

  <details className="content-details">
    <summary>高度なツールパネル</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="高度なサーボツール" />
    </div>
    <ul>
      <li>対応するレジスタアドレスのデータを読み取ります。</li>
      <li>対応するレジスタデータを書き込みます。</li>
      <li>ボーレートを変更します。</li>
      <li>工場出荷時設定を復元します。</li>
    </ul>
  </details>
</section>

<section id="calibration-files" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 6</span>
    <div>
      <h2>LeRobot キャリブレーションファイルを管理する</h2>
      <p>GUI では、SO-ARM のリーダーアームおよびフォロワーアーム用のキャリブレーションファイルを実行、変更、削除、または作成できます。これは、サーボを交換したり、誤ったキャリブレーションから復旧したりする際に役立ちます。</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>キャリブレーションファイルを実行</b><span>既存のリーダーまたはフォロワーのキャリブレーションファイルを選択し、テストに使用します。</span></div>
    <div className="module-summary-card"><b>キャリブレーションファイルを変更</b><span>どのパラメータを変更する必要があるか分かっている場合に、既存のキャリブレーションファイルを確認して調整します。</span></div>
    <div className="module-summary-card"><b>キャリブレーションファイルを削除</b><span>クリーンな LeRobot キャリブレーションを再度実行する前に、誤ったキャリブレーションファイルを削除します。</span></div>
    <div className="module-summary-card"><b>新しいファイルを作成</b><span>GUI Calibration Wizard を使用して、各サーボのニュートラル値、最小値、および最大値を記録します。</span></div>
  </div>

  <details className="content-details">
    <summary>キャリブレーションファイル管理パネル</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" alt="ロボットアームのキャリブレーションファイル管理" />
    </div>
  </details>

  <details className="content-details">
    <summary>GUI Calibration Wizard で新しいキャリブレーションファイルを作成する</summary>
    <p><strong>GUI Calibration Wizard</strong> をクリックし、対応するロボットタイプとポート番号を選択します。</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" alt="GUI Calibration Wizard" />
    </div>
    <p>ウィザードは、各サーボの最小値、最大値、およびニュートラルのキャリブレーション値を記録できます。</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" alt="範囲とニュートラル値を記録する" />
    </div>
    <p>まず、各サーボをニュートラル位置に配置し、サーボ 1〜6 について順番に <strong>Record Neutral Value</strong> をクリックします。</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" alt="各サーボのニュートラル値を記録する" />
    </div>
    <p>次に、各サーボについて <strong>Start Recording Range</strong> をクリックし、最大および最小の範囲まで回転させてから <strong>Stop Recording Range</strong> をクリックします。これを各サーボで繰り返し、キャリブレーションファイルに名前を付けて保存します。</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>一般的なデバッグケース</h2>
    <p>SO-ARM サーボのデバッグに関する問題のほとんどは、配線、誤った電源、ID の重複、権限不足、または古い LeRobot キャリブレーションファイルが原因です。</p>
  </div>

  <details className="content-details">
    <summary>1. 一部のサーボが検出されない</summary>
    <ul>
      <li>電源が接続されており、正しい電圧を使用しているか確認してください。</li>
      <li>3 ピンのサーボハーネスが緩んでいたり外れていたりしないか確認してください。</li>
      <li>GUI を閉じて、再度開いてください。</li>
      <li>それでも問題が解決しない場合は、サーボチェーンを切り離し、ID を 1 つずつ書き込み直してください。</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>2. 接続したサーボが誤った ID として表示される</summary>
    <p>これはサーボ ID が正しくないことを意味します。そのサーボだけをドライバボードに接続し、GUI で検出されたサーボをクリックして、ID を想定しているジョイント番号に戻してください。</p>
  </details>

  <details className="content-details">
    <summary>3. なぜ ID 書き込み時に 1 つのサーボだけを接続する必要があるのですか？</summary>
    <p>SO-ARM のサーボは同じシリアルバスを共有しています。同じ ID を持つ複数のサーボが接続されている場合、新しい ID の書き込みによって、その重複した ID を持つすべてのサーボが同時に変更される可能性があります。</p>
  </details>

  <details className="content-details">
    <summary>4. トルクを無効にするとアームが倒れる</summary>
    <p>これは想定された動作です。トルクを無効にすると、サーボは位置保持をやめ、アームはだらんとした状態になります。トルクを無効にする前に、必ず手でアームを支えてください。</p>
  </details>

  <details className="content-details">
    <summary>5. ニュートラルキャリブレーション後も LeRobot キャリブレーションが異常値を報告する</summary>
    <p>古いキャリブレーションファイルを削除して、LeRobot キャリブレーションを再度実行してください。ロボットとテレオペレータの両方のキャリブレーションディレクトリを確認します：</p>
    <pre><code>{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots/*
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators/*`}</code></pre>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>SO-ARM 学習パス</h2>
    <p>SO-ARM LeRobot チュートリアルとあわせてデバッグツールを使用してください。サーボ ID とニュートラル位置が正しくなったら、テレオペレーション、データ収集、シミュレーション、ポリシー学習へと進みます。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/lerobot_so100m_new/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>SO-ARM LeRobot 入門</strong><span>SO-ARM100 / SO-ARM101 を組み立て、LeRobot をインストールし、キャリブレーション、テレオペレーション、データセットの記録、ポリシーの学習と評価を行います。</span></span>
      <span className="course-tag">メインガイド</span>
    </a>
    <a className="course-path-item active" href="/ja/lerobot_steering_gear_debugging_tool/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>ステアリングギアデバッグツール</strong><span>サーボ ID を復旧し、ニュートラル値を書き込み、個々のサーボをテストし、キャリブレーションファイルを管理します。</span></span>
      <span className="course-tag">現在の記事</span>
    </a>
    <a className="course-path-item" href="/ja/simulate_soarm101_by_leisaac/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>LeIsaac シミュレーション</strong><span>Sim2Real の前に、SO-ARM モデル、シミュレーションシーン、タスク設定について理解します。</span></span>
      <span className="course-tag">シミュレーション</span>
    </a>
    <a className="course-path-item" href="/ja/training_soarm101_policy_with_isaacLab/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Isaac Lab 強化学習</strong><span>シミュレーション上でポリシーを学習し、強化学習のワークフローを学びます。</span></span>
      <span className="course-tag">RL</span>
    </a>
    <a className="course-path-item" href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>SO101 と NVIDIA GR00T</strong><span>SO-ARM のワークフロー向けに VLA / Embodied AI モデルをファインチューニングしてデプロイします。</span></span>
      <span className="course-tag">VLA</span>
    </a>
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
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .step-card-grid, .module-summary-grid, .notice-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .notice-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .notice-card strong, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .step-card p, .module-summary-card span, .notice-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.notice-card.warning { border-color: rgba(245,158,11,0.34); background: linear-gradient(135deg, rgba(255,251,235,0.95), rgba(255,247,237,0.88)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "Collapse"; }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.image-wrap { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-grid img { width: 100%; max-width: 900px; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 10px 24px rgba(15,23,42,0.06); background: #fff; }
.image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem; margin: 1rem 0; }
.image-grid.two-col { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .notice-card.warning { background: linear-gradient(135deg, rgba(245,158,11,0.14), rgba(251,146,60,0.10)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } .step-title-row { display: grid; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .image-grid.two-col { grid-template-columns: 1fr; } }
`}</style>
