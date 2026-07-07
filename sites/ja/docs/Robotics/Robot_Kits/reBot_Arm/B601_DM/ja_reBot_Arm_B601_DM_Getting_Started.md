---
description: このガイドでは、キットの選択、電源チェック、組み立て、モーター ID 設定、キャリブレーション、MotorBridge の設定を含め、reBot Arm B601-DM を安全に使い始める方法を説明します。
title: reBot Arm B601-DM クイックスタート
keywords:
  - reBot
  - B601-DM
  - ロボットアーム
  - ロボット
  - LeRobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: ZhuYaohui
createdAt: '2026-04-13'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/
---

# reBot Arm B601-DM を始めよう

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>開封からキャリブレーションまで、reBot Arm B601-DM を安全にオンライン化する</h2>
    <p>このガイドは、実際の初回セットアップの流れに沿って構成されています。キットの種類を確認し、電源をチェックし、必要に応じてアームを組み立て、モーター ID を書き込み、ゼロ位置をキャリブレーションし、最初の MotorBridge テストを実行します。</p>
    <div className="hero-actions">
      <a href="#start-path">セットアップパスを選ぶ</a>
      <a href="#motorbridge">MotorBridge へジャンプ</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推奨の読み進め方</strong>
    <span>完成品キット：組み立てとモーター ID 設定をスキップし、ステップ 3 から始めます。</span>
    <span>DIY キット：ステップ 1 → ステップ 2 → ステップ 3 の順に進めてください。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：動作前にロボットの作業空間を必ず片付けてください</strong>
    <p>
      ロボットアームを動かすプログラムを実行する前に、ロボットの作業空間から
      貴重品、壊れやすい物、工具、ケーブル、および無関係な物体を<strong>半径 1 メートル</strong>
      の範囲内からすべて取り除いてください。デバッグおよび動作中は、作業者は常に
      ロボットの動作範囲の外側にいる必要があります。
    </p>
    <ul>
      <li>ロボットアームの電源が入っている状態では、関節、モーター、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
      <li>キャリブレーション、遠隔操作、IK 制御、軌道制御、重力補償、ROS2 / MoveIt 実行、ビジュアルグラスピングを行う前に、アームのベースがしっかり固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断などが発生した場合は、直ちにプログラムを停止し、点検前に必ずシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、USB2CAN / PCAN-USB アダプタ、XT30 コネクタ、電源コネクタを抜き差しする際は、必ずシステムの電源を切ってから行ってください。</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>安全上の注意：</strong>reBot Arm のセットアップには、24V 電源、有効化されたモーター、および可動機構の関節が関わります。安定した机の上で作業し、デバッグ中は少なくとも 1 メートル離れてください。また、モーターや XT30 コネクタを抜き差しする前には必ず電源を切ってください。
</div>

<nav className="doc-nav" aria-label="reBot B601-DM quick navigation">
  <a href="#start-path">セットアップパス</a>
  <a href="#power">電源チェック</a>
  <a href="#assembly">ステップ 1 組み立て</a>
  <a href="#motor-id">ステップ 2 モーター ID</a>
  <a href="#motorbridge">ステップ 3 キャリブレーション</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>ここから始める</span>
    <h2>まず、自分のキットの種類を確認する</h2>
    <p>キット構成が異なると、必要なセットアップ手順も異なります。最初に正しいパスを選ぶことで、作業のやり直しを避け、安全でない操作も防ぐことができます。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>完成品キットを購入した</b>
      <span>ステップ 1 とステップ 2 をスキップします。ハーネスと電源を確認したら、ステップ 3 に進み、ゼロ点キャリブレーションと最初の動作テストを行います。</span>
      <em>ステップ 3 から開始</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>DIY キットを購入した、または自分で組み立てる必要がある</b>
      <span>まず機械構造を組み立て、その後各モーターの CAN ID / Master ID を書き込み、最後にゼロ点キャリブレーションを実行します。</span>
      <em>ステップ 1 → 2 → 3 の順に進める</em>
    </a>
  </div>

  <div className="tip-box">仮想マシンではデモを実行するのに性能が不十分であることが確認されており、設定上の問題を引き起こす可能性があります。ロボットアームの制御には、物理的な Ubuntu マシンの使用を推奨します。</div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>プロジェクトと購入オプション</h2>
    <p>reBot Arm プロジェクトは <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a> 上でオープンソース公開されています。このガイドでは、B601-DM の基本的なワークフローを、組み立てから動作まで順を追って説明します。</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
  </div>

  <div className="badge-row">
    <span>Python 3.10+</span>
    <span>Linux / Ubuntu</span>
    <span>Pinocchio</span>
    <span>MotorBridge</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">reBot Arm B601-DM を入手</a>
  </div>

  | 構成 | ボディ | グリッパー | モーター | 構造部品 | 推奨ユーザー |
  |:---|:---:|:---:|:---:|:---:|:---|
  | **コンプリートキット** | ✅ | ✅ | ✅ | ✅ | ロボットアームをフルに体験したいユーザー |
  | **グリッパーのみ** | ❌ | ✅ | ❌ | ❌ | すでにアームを持っており、エンドエフェクタだけが必要なユーザー |
  | **ボディのみ（構造）** | ✅ | ❌ | ❌ | ✅ | すでにモーターを持っており、構造を組み立てたいユーザー |
  | **ボディのみ（モーター）** | ✅ | ❌ | ✅ | ❌ | モーター付きアームボディが必要なユーザー |
</section>

<section id="power" className="section-card warning-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>動作前の安全チェック</strong>
    <p>ロボットの作業空間から貴重品をすべて取り除き、作業者は<strong>半径 1 メートル</strong>以内に近づかないようにしてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<div className="section-title">
    <span>電源投入前</span>
    <h2>電源：通電前に必ず確認すること</h2>
    <p>ロボットアームには、標準で電源が付属していない場合があります。信頼できる 24V 電源を使用し、お住まいの地域の商用電源電圧に合わせて電圧セレクタを設定してください。</p>
  </div>

  <div className="danger-box">無名ブランドや安全性の低い電源は使用しないでください。配線や XT30 コネクタ、モーターケーブルの抜き差しを行う際は、必ず電源を切ってから作業してください。</div>

  <div className="power-grid">
    <div>
      <h4>220V 地域</h4>
      <p>電源のセレクタを<strong>230V</strong> に設定してください。</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="230V switch" />
    </div>
    <div>
      <h4>110V 地域</h4>
      <p>電源のセレクタを<strong>115V</strong> に設定してください。</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="115V switch" />
    </div>
  </div>

  <p>オープンソースの <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html" target="_blank">24V 14.6A MeanWell 電源アダプタキット</a>を購入するか、信頼できる販売店から互換性のある MeanWell LRS-350-24 電源を使用できます。オープンソース筐体の BOM は GitHub リポジトリで公開されており、電源組み立ての経験がある開発者にのみ推奨されます。</p>

  <details className="video-details">
    <summary>電源筐体の組み立て動画を見る</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="Power supply assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>ロボットアームを組み立てる</h2>
      <p>このステップは DIY キットにのみ必要です。完成品キットを購入した場合は、このステップをスキップしてください。</p>
    </div>
  </div>

  <div className="tip-box">完成品バージョンを購入した場合は、このステップをスキップし、<a href="#motorbridge">ステップ 3：キャリブレーションと初回動作</a> に直接進んでください。</div>

  <div className="checklist-grid">
    <div><strong>慎重に確認する</strong><span>キットには多くのネジや似た形状の部品が含まれています。締結する前に、各部品の仕様と向きを必ず確認してください。</span></div>
    <div><strong>推奨ツール</strong><span>電動ドライバーの使用を推奨します。トルクは 3～6 kgf·cm 程度の低～中程度に設定してください。</span></div>
    <div><strong>安全に作業する</strong><span>挟み込みや衝突によるけがに注意してください。子どもが組み立てる場合は、必ず大人の監督のもとで行ってください。</span></div>
  </div>

  <div className="warning-box">組み立て動画内で、モーター 5 とモーター 6 の間にある D4 × 7 ネジは取り付け不要です。DIY キットに付属する 7 本の D4 × 7 ネジで、組み立ては問題なく完了します。</div>

  <details className="content-details" open>
    <summary>組み立て動画を開く</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="reBot Arm B601-DM assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motor-id" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>動作前の安全チェック</strong>
    <p>ロボットの作業空間から貴重品をすべて取り除き、作業者は<strong>半径 1 メートル</strong>以内に近づかないようにしてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">ステップ 2</span>
    <div>
      <h2>モーター ID とゼロ位置を書き込む</h2>
      <p>このステップは DIY キットにのみ必要です。各関節モーターの CAN ID と Master ID を設定します。</p>
    </div>
  </div>

  <div className="tip-box">完成品を購入した場合は、このステップをスキップして直接 <a href="#motorbridge">ステップ 3</a> に進んでください。</div>

  <div className="danger-list">
    <strong>モーターリセット前の注意事項</strong>
    <ul>
      <li>工具用クランプを 2 個用意してください。できれば 3 インチ以上のものを使用します。</li>
      <li>信頼性の高い 24V 15A XT30 出力のスイッチング電源を使用してください。</li>
      <li>デバッグおよび動作中は、少なくとも 1 メートル離れてください。</li>
      <li>モーターをホットプラグしないでください。XT30 2+2 コネクタの抜き差しは必ず電源を切ってから行ってください。</li>
      <li>モーターを過負荷または過速度で動作させないでください。起動前に配線と締結部を確認してください。</li>
      <li>暴走動作を防ぐため、適切な制御パラメータと非常停止戦略を使用してください。</li>
    </ul>
  </div>

  <details className="content-details">
    <summary>AI エージェント用ヘルパープロンプト</summary>
    <div className="warning-box">このセクションはベータ版です。すべての安全上の注意事項に従ってください。AI の提案内容が本ガイドと矛盾する場合は、本ガイドに従い、サポートが必要な場合は当社エンジニアにお問い合わせください。</div>
    <p>以下のプロンプトを AI アシスタントにコピーしてください：</p>
    <pre><code>{`Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>準備チェックリスト</summary>
    <div className="two-col">
      <div>
        <h4>ハードウェア</h4>
        <ul>
          <li><a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">reBot Arm B601-DM ロボットアーム × 1</a></li>
          <li><a href="https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html" target="_blank">USB-CAN アダプタボード × 1</a></li>
          <li><a href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html" target="_blank">信号・電源分離ボード × 1</a></li>
          <li>木工用クランプ × 2</li>
          <li>USB-C ケーブル × 1</li>
          <li><a href="https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html" target="_blank">24V 15A 電源 × 1</a></li>
        </ul>
      </div>
      <div>
        <h4>コンピュータとソフトウェア</h4>
        <ul>
          <li>デュアルブート PC：Windows + Ubuntu、または macOS。</li>
          <li><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool_v2.1.6.8.zip" target="_blank">DM_Tools_v.2.1.6.8.exe</a>（Windows のみ）。</li>
        </ul>
      </div>
    </div>
  </details>

  <h3>モーター ID マッピング</h3>
  <p>下表に従って、各関節モーターの CAN ID と Master ID を設定します。</p>

  | モーター番号 | CAN ID | Master ID |
  |:---:|:---:|:---:|
  | モーター 1 | 0x01 | 0x11 |
  | モーター 2 | 0x02 | 0x12 |
  | モーター 3 | 0x03 | 0x13 |
  | モーター 4 | 0x04 | 0x14 |
  | モーター 5 | 0x05 | 0x15 |
  | モーター 6 | 0x06 | 0x16 |
  | モーター 7 | 0x07 | 0x17 |

  <div className="danger-box">以下の例ではモーター 1 を使用します。各関節モーターについて、CAN ID と Master ID が上表と一致していることを必ず確認してください。</div>

  <ol className="ordered-steps">
    <li><strong>DM_Tools</strong> を開き、USB の COM ポートを選択して、ボーレートを <code>921600</code> に設定します。接続後、シリアルパネルにログが表示されます。</li>
    <li>3 ピンケーブルを使用して、モーター 1 を USB-CAN アダプタボードに接続します。</li>
    <li><strong>Parameter Settings</strong> ページを開き、<strong>Read Parameters</strong> をクリックしてから、<strong>CAN ID</strong> を <code>0x01</code>、<strong>Master ID</strong> を <code>0x11</code> に設定します。</li>
    <li><strong>Write Parameters</strong> をクリックして値を保存します。</li>
    <li><strong>Debug</strong> ページを開き、ID を確認してから <strong>Enable</strong> をクリックします。モーターの LED は緑色点灯になります。</li>
  </ol>

  <div className="image-grid three">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_connect_en.png" alt="DM Tools 接続" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_id_set_en.png" alt="モーター ID の設定" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_enable_en.png" alt="モーターの有効化" />
  </div>

  <div className="tip-box">テスト後は、<strong>Disable</strong> をクリックして有効状態を終了してください。</div>

  <details className="content-details">
    <summary>すべてのモーターのケーブル接続位置を表示</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>モーター 1</th><th>モーター 2</th><th>モーター 3</th><th>モーター 4</th><th>モーター 5</th><th>モーター 6</th><th>モーター 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>モーター有効化の例を表示</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>モーター 1</th><th>モーター 2</th><th>モーター 3</th><th>モーター 4</th><th>モーター 5</th><th>モーター 6</th><th>モーター 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="video-details">
    <summary>モーター ID 設定動画を表示</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="Motor ID setup video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motorbridge" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>動作前の安全確認</strong>
    <p>ロボットの作業領域から <strong>半径 1 メートル</strong> 以内の貴重品をすべて片付け、全員がその範囲外にいることを確認してください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">ステップ 3</span>
    <div>
      <h2>アームをキャリブレーションして初回テストを実行する</h2>
      <p>このステップは、完成品と DIY キットの両方に適用されます。アームを制御する前に、ゼロ点をリセットし、MotorBridge を起動します。</p>
    </div>
  </div>

  <div className="tip-box">完成品の場合、Joint 1 と Joint 2 の間のハーネスは、輸送中のケーブル摩耗を防ぐために未取り付けの状態になっている場合があります。開梱後、片側がエルボーコネクタ、もう片側がストレートコネクタのハーネスを見つけ、Joint 1 と Joint 2 の間に取り付けてください。</div>

  <h3>オプション：モーター 1 配線ハーネス用クリップを 3D プリントする</h3>
  <p>モーター 1 の配線ハーネスに長期間テンションがかかると、コネクタが摩耗して接触不良を引き起こす可能性があります。以下の部品をプリントすることで、このリスクを軽減できます。</p>

  | 部品 | 画像 | ファイル | 材料 | 数量 | 印刷設定 |
  |:---|:---:|:---|:---|:---:|:---|
  | モーター 1 両側配線ハーネスクリップ | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.jpg" width="100" /> | [3D File](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.stp) | Bambu Lab Black PLA | 2 | ノズル 0.4 mm、レイヤー高さ 0.2 mm、インフィル 30% |

  <details className="video-details" open>
    <summary>キャリブレーションと初回動作の動画を表示</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="Calibration and first run video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <div className="feature-grid">
    <div><strong>MotorBridge プラットフォーム</strong><span>Damiao、Robstride、Hightorque、MyActuator、Hexfellow、および reBot アームをサポートするオールインワンのモーター制御ソリューションです。</span></div>
    <div><strong>reBot 向けツール</strong><span>ワンクリックゼロキャリブレーション、パラメータ書き込み、ドラッグ＆ドロップによるモーター制御、モデルのビジュアライゼーション機能を備えています。</span></div>
    <div><strong>クロスプラットフォーム</strong><span>Windows、Ubuntu、macOS に対応しています。</span></div>
  </div>

  <h3>MotorBridge をインストールして起動する</h3>

  <div className="install-steps">
    <div><span>1</span><div><b>Miniforge をインストール</b><p>Miniforge をインストールして、分離された Python 環境を作成し、パッケージの競合を回避します。</p></div></div>
    <div><span>2</span><div><b>環境を作成</b><p>Python 3.12 環境を作成し、reBot ツールを使用するたびに有効化します。</p></div></div>
    <div><span>3</span><div><b>motorbridge をインストール</b><p>有効化された環境に MotorBridge の Python パッケージをインストールします。</p></div></div>
    <div><span>4</span><div><b>アームを接続</b><p>USB 経由でアームを接続し、電源を入れます。Linux ユーザーはシリアル権限を付与する必要があります。</p></div></div>
    <div><span>5</span><div><b>MotorBridge Studio を起動</b><p>ブラウザで MotorBridge Studio を開き、使用している OS とドライバボードに対応するゲートウェイコマンドを実行します。</p></div></div>
  </div>

  <details className="content-details" open>
    <summary>コマンドリファレンス</summary>

    <h4>Ubuntu / Jetson / Raspberry Pi</h4>
    <pre><code>{`wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh`}</code></pre>

    <h4>macOS</h4>
    <pre><code>{`curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh`}</code></pre>

    <h4>Windows</h4>
    <pre><code>{`https://github.com/conda-forge/miniforge/releases`}</code></pre>

    <h4>環境を作成して有効化</h4>
    <pre><code>{`conda create -y -n rebot python=3.12
conda activate rebot`}</code></pre>

    <h4>motorbridge をインストール</h4>
    <pre><code>{`pip install motorbridge`}</code></pre>

    <h4>Linux のシリアル権限</h4>
    <pre><code>{`sudo chmod 666 /dev/ttyACM*`}</code></pre>

    <h4>Windows ゲートウェイの例</h4>
    <pre><code>{`motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20`}</code></pre>
  </details>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" alt="MotorBridge ヘルプパネル" />
  </div>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>よくある問題</h2>
    <p>ID 設定、キャリブレーション、モータ起動中にアームの動作がおかしい場合は、このセクションを参照してください。</p>
  </div>

  <details className="content-details" open>
    <summary>モータ起動直後に大きな異常音が発生する</summary>
    <p>これは、ID 設定中に誤ってパラメータキャリブレーションがトリガーされ、モータ慣性などの工場出荷時パラメータが上書きされた場合に発生することがあります。Windows 上で <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe" target="_blank">DM_Tools_v.1.8.0.1.exe</a> を使用し、同一モデルの正常なモータからパラメータをエクスポートし、それを異常なモータにインポートして、対応する CAN ID を更新し、パラメータを書き込んでからゼロ点キャリブレーションを続行してください。</p>
    <div className="image-grid two">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" alt="DM Tools パラメータエクスポート" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" alt="DM Tools パラメータインポート" />
    </div>
    <p><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt" target="_blank">DM4310 既定パラメータ</a> · <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt" target="_blank">DM4340P 既定パラメータ</a></p>
  </details>

  <details className="content-details">
    <summary>すべてのモータが同じ CAN ID を共有している</summary>
    <p>ゼロ点キャリブレーションに <strong>DM_Tools_v.1.8.0.1.exe</strong> を使用する場合、CAN ID フィールド横の Read または Set ボタンをクリックしないでください。デバッグページは CAN バス経由で通信しており、Set をクリックすると CAN バス上のすべてのモータに同じ CAN ID が割り当てられる可能性があります。</p>
  </details>
</section>

<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>ラーニングパス</span>
    <h2>reBot B601-DM のラーニングパスを続ける</h2>
    <p>これらのチュートリアルはロボティクスページと同じ順序で読むことを想定しています。基本的な立ち上げから始め、LeRobot によるデータ収集、運動学デバッグ、ビジュアルグラスピング、最後に ROS2 連携へと進みます。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step active" href="/ja/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>はじめに</strong>
        <small>開封、配線、電源チェック、ドライバ設定、キャリブレーション、および基本的な動作テストを完了します。</small>
      </div>
      <em>現在の記事</em>
    </a>
    <a className="course-step" href="/ja/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>LeRobot テレオペレーションとデータ収集</strong>
        <small>アームをテレオペレートし、カメラを接続してデータセットを記録し、ポリシーを学習させ、実機アームの挙動を評価します。</small>
      </div>
      <em>データ収集</em>
    </a>
    <a className="course-step" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Pinocchio による運動学の可視化</strong>
        <small>ロボットモデル、座標系、順運動学 / 逆運動学、軌道計画、重力補償について理解します。</small>
      </div>
      <em>制御</em>
    </a>
    <a className="course-step" href="/ja/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <div>
        <strong>ビジュアルグラスピングデモ</strong>
        <small>RGB-D 認識、YOLO / OBB または GraspNet、ハンドアイキャリブレーション、実物体の把持を組み合わせます。</small>
      </div>
      <em>アプリケーション</em>
    </a>
    <a className="course-step" href="/ja/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <div>
        <strong>ROS2 連携</strong>
        <small>アームを ROS2、RViz、MoveIt 2、標準サービス、アクション、およびプランニングワークフローに接続します。</small>
      </div>
      <em>インテグレーション</em>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page { --rb-bg: #ffffff; --rb-card: #ffffff; --rb-soft: #f8fafc; --rb-text: #111827; --rb-muted: #64748b; --rb-border: rgba(148,163,184,0.28); --rb-primary: #2563eb; --rb-primary-soft: #eff6ff; --rb-green: #0f766e; --rb-green-soft: #ccfbf1; --rb-warn: #b45309; --rb-warn-soft: #fffbeb; --rb-danger: #b91c1c; --rb-danger-soft: #fef2f2; --rb-shadow: 0 18px 45px rgba(15,23,42,0.08); color: var(--rb-text); }
.doc-hero { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0,1.35fr) minmax(270px,0.75fr); gap: 1.4rem; padding: 2rem; margin: 1.4rem 0 1rem; border: 1px solid rgba(37,99,235,0.18); border-radius: 28px; background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.16), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.16), transparent 38%), linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.88)); box-shadow: var(--rb-shadow); }
.eyebrow { display: inline-flex; margin-bottom: 0.65rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.75rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.15; }
.doc-hero p { margin: 0; max-width: 760px; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.15rem; }
.hero-actions a, .buy-box a { display: inline-flex; align-items: center; justify-content: center; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, #2563eb, #14b8a6); box-shadow: 0 12px 24px rgba(37,99,235,0.16); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: rgba(255,255,255,0.84); border: 1px solid rgba(37,99,235,0.18); box-shadow: none; }
.hero-card { display: grid; gap: 0.65rem; align-content: center; padding: 1.1rem; border-radius: 20px; background: rgba(255,255,255,0.76); border: 1px solid rgba(148,163,184,0.25); backdrop-filter: blur(10px); }
.hero-card strong { font-size: 1.02rem; }
.hero-card span { display: block; color: var(--rb-muted); line-height: 1.55; font-size: 0.92rem; }
.quick-note, .tip-box, .warning-box, .danger-box { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; line-height: 1.7; border: 1px solid var(--rb-border); }
.quick-note, .tip-box { color: #075985; background: #f0f9ff; border-color: #bae6fd; }
.warning-box { color: var(--rb-warn); background: var(--rb-warn-soft); border-color: #fde68a; }
.danger-box { color: var(--rb-danger); background: var(--rb-danger-soft); border-color: #fecaca; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap: 0.55rem; margin: 1rem 0 1.8rem; padding: 0.65rem; border-radius: 18px; border: 1px solid var(--rb-border); background: rgba(255,255,255,0.88); backdrop-filter: blur(12px); box-shadow: 0 12px 28px rgba(15,23,42,0.06); }
.doc-nav a { padding: 0.68rem 0.5rem; border-radius: 12px; text-align: center; text-decoration: none !important; color: #334155; background: var(--rb-soft); font-weight: 760; font-size: 0.84rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37,99,235,0.10); }
.section-card { margin: 1.4rem 0; padding: 1.45rem; border-radius: 24px; background: var(--rb-card); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title span { display: inline-flex; margin-bottom: 0.3rem; color: var(--rb-primary); font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 850; }
.section-title h2, .step-title-row h2 { margin: 0.15rem 0 0.45rem; }
.section-title p, .step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .power-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.9rem; margin-top: 1rem; }
.checklist-grid, .feature-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
.path-card, .checklist-grid div, .feature-grid div, .power-grid div { display: block; padding: 1rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { display: block; margin-bottom: 0.45rem; }
.path-card span, .checklist-grid span, .feature-grid span { display: block; color: var(--rb-muted); line-height: 1.58; font-size: 0.91rem; }
.path-card em { display: inline-flex; margin-top: 0.8rem; padding: 0.32rem 0.58rem; border-radius: 999px; color: var(--rb-green); background: var(--rb-green-soft); font-style: normal; font-size: 0.75rem; font-weight: 850; }
.path-card.recommended { border-color: rgba(20,184,166,0.36); background: linear-gradient(180deg, rgba(240,253,250,0.8), var(--rb-soft)); }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-align: center; }
.image-frame img, .image-grid img, .power-grid img { max-width: 100%; border-radius: 12px; }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.42rem 0.68rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-size: 0.8rem; font-weight: 850; }
.buy-box { margin: 1rem 0; text-align: center; }
.step-title-row { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; padding: 0.5rem 0.75rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; }
.danger-list { margin: 1rem 0; padding: 1rem 1.1rem; border-radius: 18px; color: var(--rb-danger); background: var(--rb-danger-soft); border: 1px solid #fecaca; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin: 0; padding-left: 1.2rem; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 18px; background: var(--rb-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.9rem 1rem; font-weight: 850; color: var(--rb-text); }
.content-details > *:not(summary), .video-details > *:not(summary) { margin-left: 1rem; margin-right: 1rem; }
.video-container { position: relative; width: calc(100% - 2rem); margin: 0 1rem 1rem; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col, .image-grid.three, .image-grid.two { display: grid; gap: 1rem; }
.two-col, .image-grid.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
.image-grid.three { grid-template-columns: repeat(3, minmax(0,1fr)); }
.ordered-steps li { margin: 0.5rem 0; line-height: 1.65; }
.wide-scroll { overflow-x: auto; padding-bottom: 0.75rem; }
.wide-scroll table { min-width: 900px; }
.wide-scroll img { max-width: 120px; border-radius: 10px; }
.install-steps { display: grid; gap: 0.75rem; margin: 1rem 0; }
.install-steps > div { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 0.8rem; align-items: start; padding: 0.9rem; border-radius: 16px; background: var(--rb-soft); border: 1px solid var(--rb-border); }
.install-steps span { width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--rb-primary); color: #fff; font-weight: 900; }
.install-steps b { display: block; margin-bottom: 0.25rem; }
.install-steps p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.rebot-page pre { border-radius: 14px; overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111315; --rb-card: #1f2023; --rb-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343842; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-green: #5eead4; --rb-green-soft: rgba(20,184,166,0.16); --rb-shadow: 0 18px 45px rgba(0,0,0,0.30); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.25), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.18), transparent 38%), linear-gradient(135deg, rgba(30,41,59,0.94), rgba(17,24,39,0.9)); border-color: #334155; }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a, html[data-theme='dark'] .hero-actions a:nth-child(2) { background: #24262a; color: #e5e7eb; border-color: #343842; }
html[data-theme='dark'] .quick-note, html[data-theme='dark'] .tip-box { color: #bae6fd; background: rgba(14,165,233,0.10); border-color: rgba(125,211,252,0.22); }
html[data-theme='dark'] .warning-box { color: #fde68a; background: rgba(245,158,11,0.12); border-color: rgba(253,230,138,0.22); }
html[data-theme='dark'] .danger-box, html[data-theme='dark'] .danger-list { color: #fecaca; background: rgba(239,68,68,0.10); border-color: rgba(252,165,165,0.22); }
@media (max-width: 920px) { .doc-hero, .path-grid, .power-grid, .checklist-grid, .feature-grid, .two-col, .image-grid.two, .image-grid.three { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(2, minmax(0,1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.05rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { display: inline-flex; margin-bottom: 0.7rem; } }

/* 共有の安全警告とコースナビゲーション */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}
.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}
.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}
.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}
.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}


`}</style>
