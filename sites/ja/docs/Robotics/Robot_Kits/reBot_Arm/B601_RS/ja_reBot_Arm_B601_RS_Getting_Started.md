---
description: このガイドでは、電源チェック、組み立て、キャリブレーション、MotorBridge のセットアップ、基本的なソフトウェア設定を含め、reBot Arm B601-RS の初期セットアップ方法を説明します。
title: reBot Arm B601-RS クイックスタート
keywords:
  - reBot
  - B601-RS
  - ロボットアーム
  - ロボット
  - LeRobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/
---

# reBot Arm B601-RS クイックスタート

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio ロボティクス Wiki</span>
    <h2>開封からキャリブレーションまで、安全に reBot Arm B601-RS をオンラインにする</h2>
    <p>このガイドは、実際の初回使用ワークフローに沿っています。キットの種類を確認し、48V 電源をチェックし、必要に応じてアームを組み立て、配線ハーネスを点検し、PCAN-USB を設定し、ゼロ位置をキャリブレーションし、MotorBridge でアームを動かしてみます。</p>
    <div className="hero-actions">
      <a href="#agent">AI Agent から始める</a>
      <a href="#start-path">セットアップパスを選ぶ</a>
      <a href="#motorbridge">MotorBridge にジャンプ</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推奨の読み進め方</strong>
    <span>Codex、Cursor、Trae などのツールを使用する場合は、まず AI Agent ワークフローから始めてください。</span>
    <span>完成品キット：モーター ID はすでに書き込み済みです。配線、電源、PCAN-USB、およびゼロ位置キャリブレーションに重点を置いてください。</span>
  </div>
</section>

<div className="quick-note">
  <strong>安全上の注意：</strong> B601-RS は 48V 電源と RobStride 関節アクチュエータを使用します。デバッグ前にアームをしっかり固定し、動作テスト中は少なくとも 1 メートル離れ、モーターケーブルや XT30 コネクタの抜き差しを行う前には必ず電源を切ってください。
</div>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：実行前にロボットの作業空間を必ず片付ける</strong>
    <p>ロボットアームを動かすプログラムを実行する前に、ロボットの作業空間の<strong>半径 1 メートル以内</strong>から、貴重品、壊れやすい物、工具、ケーブル、および無関係な物体をすべて取り除いてください。デバッグおよび動作中は、作業者はロボットの動作範囲から離れている必要があります。</p>
    <ul>
      <li>ロボットアームの電源が入っている状態では、関節、モーター、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
      <li>キャリブレーション、MotorBridge、遠隔操作、データセット収集、IK 制御、軌道制御、重力補償、ビジュアルグラスピング、ROS2 アクション、または MoveIt 実行を行う前に、ロボットアームが確実に固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断などが発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、PCAN-USB アダプタ、XT30 コネクタ、電源コネクタの抜き差しを行う際は、必ず事前にシステムの電源を切ってください。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="reBot B601-RS quick navigation">
  <a href="#start-path">セットアップパス</a>
  <a href="#power">電源チェック</a>
  <a href="#assembly">ステップ 1 組み立て</a>
  <a href="#motorbridge">ステップ 2 キャリブレーション / AI Agent</a>
  <a href="#pcan">PCAN-USB</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>ここから始める</span>
    <h2>まず、キットの種類を確認する</h2>
    <p>完成品 B601-RS キットと DIY キットではワークフローが異なります。最初にこれを確認することで、不要なモーター ID 書き込みやその他のリスクのある操作を避けることができます。</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>完成品キットを購入した</b>
      <span>モーター ID はすでに書き込み済みです。開封後、Joint 1-2 ハーネスを接続し、電源をチェックし、PCAN-USB を設定してから、ゼロ位置キャリブレーションに進みます。</span>
      <em>ステップ 2 から開始</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>DIY キットを購入した、または自分で組み立てる必要がある</b>
      <span>まず AI Agent ワークフローを開き、エージェントが組み立て完了前に環境および安全チェックを案内できるようにしてから、組み立て、配線、電源チェック、PCAN-USB セットアップ、キャリブレーションを行うことを推奨します。</span>
      <em>ステップ 1 → ステップ 2 の順に進む</em>
    </a>
  </div>

  :::tip
  仮想マシンではデモに十分な性能がないことが確認されており、設定上の問題を引き起こす可能性があります。可能な限り物理的な Ubuntu マシンを使用することを推奨します。
  :::
</section>

<section className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>プロジェクト概要</h2>
    <p>reBot Arm プロジェクトは <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a> 上でオープンソースとして公開されています。このガイドでは、組み立てから MotorBridge 制御まで、B601-RS の基本的なワークフローを順に説明します。</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
  </div>

  <div className="badge-row">
    <span>6 自由度ロボットアーム</span>
    <span>RobStride モーター</span>
    <span>MotorBridge</span>
    <span>オープンソース</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html" target="_blank">reBot Arm B601-RS を入手</a>
  </div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全チェック</strong>
    <p>ロボットの作業空間の<strong>半径 1 メートル以内</strong>から貴重品を取り除き、すべての人員が離れていることを確認してください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<section id="power" className="section-card warning-section">
  <div className="section-title">
    <span>電源投入前に</span>
    <h2>電源：アームの電源を入れる前に必ず確認すること</h2>
    <p>B601-RS は、一部の構成では標準で電源が付属しません。信頼できる 48V 電源を使用し、電源投入前にお住まいの地域に合わせて電圧切替スイッチを正しく設定してください。</p>
  </div>

  :::danger
  ノーブランド品や安全性の低い電源は使用しないでください。配線作業、XT30 コネクタの抜き差し、モーターケーブルの接続・取り外しを行う際は、必ず電源を切ってください。
  :::

  <div className="power-grid">
    <div>
      <h4>220V 地域</h4>
      <p>電源側面の電圧切替スイッチを<strong>230V</strong> に設定してください。</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="230V switch" />
    </div>
    <div>
      <h4>110V 地域</h4>
      <p>電源側面の電圧切替スイッチを<strong>115V</strong> に設定してください。</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="115V switch" />
    </div>
  </div>

  <p>オープンソースの <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html" target="_blank">48V 12.5A MeanWell 電源アダプタキット</a>を購入することもできますし、GitHub リポジトリ内の BOM を参照して自分で電源エンクロージャを組み立てることもできます。自作は、電源組み立ての経験がある開発者にのみ推奨されます。</p>

  <div className="image-frame compact-image">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" alt="reBot Arm B601-RS power supply" />
  </div>

  <details className="video-details">
    <summary>電源の参考動画を見る</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="Power supply reference video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>ロボットアームを組み立てる</h2>
      <p>このステップは DIY キットに必須です。完成品キットを購入した場合は、このセクションをスキップして、キャリブレーションと基本動作に直接進むことができます。</p>
    </div>
  </div>

  <div className="checklist-grid">
    <div><strong>慎重に確認</strong><span>キットには多くのネジや構造部品が含まれており、中には見た目がよく似ているものもあります。締結する前に、仕様と向きを必ず確認してください。</span></div>
    <div><strong>工具の提案</strong><span>電動ドライバーの使用を推奨します。ネジ山をつぶさないよう、トルクは 3〜6 kgf.cm 程度の低〜中程度に設定してください。</span></div>
    <div><strong>安全上の注意</strong><span>アーム本体には金属部品が含まれます。指を挟んだり、挟圧によるけがをしないよう注意してください。子どもが組み立てる場合は、必ず大人の監督のもとで行ってください。</span></div>
  </div>

  :::warning
  組み立て動画のリンクは、現時点では意図的に空白にしており、動画がアップロードされ次第追加されます。時間の経過とともに部品に軽微な変更が入る場合がありますが、出荷された部品を最終的な参照としてください。
  :::

  <details className="content-details" open>
    <summary>組み立て動画プレースホルダ</summary>
    <div className="video-placeholder">
      組み立て動画リンク：<span>後日追加予定</span>
    </div>
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全チェック</strong>
    <p>ロボットの作業空間の<strong>半径 1 メートル以内</strong>から貴重品を取り除き、すべての人員が離れていることを確認してください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<section id="motorbridge" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>ロボットアームをキャリブレーションし、初回テストを実行する</h2>
      <p>このステップでは、配線ハーネスの点検、ゼロ位置キャリブレーション、MotorBridge のインストール、および基本的なデバッグを行います。</p>
    </div>
  </div>

  :::tip
  組み立て済みユニットを購入した場合、すべてのモーター ID はすでに書き込み済みのため、再書き込みの必要はありません。輸送中のケーブル摩耗を減らすため、ジョイント 1 とジョイント 2 の間のハーネスは事前には取り付けられていません。開封後、パッケージ内から片側がエルボーコネクタ、もう片側がストレートコネクタのハーネスを見つけ、ジョイント 1 とジョイント 2 の間に接続してください。
  :::

  <div id="agent" className="agent-inline-card">
    <div className="section-title">
      <span>最初におすすめ</span>
      <h2>ガイド付き初期化にはまず AI Agent を使用する</h2>
      <p>Codex、Cursor、Trae、Claude Code などの AI コーディングツールを使用している場合は、AI Agent ワークフローから始めることをおすすめします。Agent は AGENTS.md に従って、環境チェック、モーターのオンラインスキャン、PCAN-USB のセットアップ、MotorBridge Gateway の起動、ゼロ位置キャリブレーションまで案内します。</p>
    </div>

    :::warning
    AI Agent ワークフローはまだベータ版です。ロボットアームをしっかり固定し、デバッグ中は動作範囲から離れてください。また、モーターケーブルや XT30 コネクタの抜き差しを行う前には必ず電源を切ってください。Agent の指示が本ガイドと矛盾する場合は、本ガイドに従ってください。
    :::

    <div className="path-grid">
      <div className="path-card recommended">
        <b>組み立て済みキット向けの推奨プロンプト</b>
        <span>モーター ID はすでに書き込み済みです。Agent にモーターのスキャン、配線チェック、PCAN-USB の検証、MotorBridge の起動、ゼロ位置キャリブレーションのガイドを依頼してください。モーター ID を書き換えないでください。</span>
        <em>推奨</em>
      </div>
      <div className="path-card">
        <b>DIY または新規組み立てキット向けの推奨プロンプト</b>
        <span>完全な初期化が必要な場合は、Agent に AGENTS.md に従って、環境チェックとモーターのスキャンからゲートウェイの起動およびキャリブレーションまで、ステップごとに実行するよう依頼してください。</span>
        <em>フルワークフロー</em>
      </div>
    </div>

    次のプロンプトを AI コーディングツールにコピーしてください：

    ```text
    Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help me initialize the reBot Arm B601-RS.

    If I am using a pre-assembled kit, do not rewrite the motor IDs. Only scan motors 1-7, verify that all motors are online, and continue with PCAN-USB, MotorBridge Gateway, and zero-position calibration checks.

    If I am using a DIY or newly assembled kit, confirm the safety requirements before each step and guide me through the full initialization workflow.
    ```

    :::tip
    推奨ツールには Codex、Cursor、Trae、Claude Code などの AI コーディングアシスタントが含まれます。本 Wiki の Web UI ワークフローは、手動で手順に従いたいユーザー向けに引き続き提供されています。
    :::
  </div>

  <details className="content-details">
    <summary>モーター 1 配線ハーネス保護パーツ</summary>

    モーター 1 の配線ハーネスに長期間テンションがかかると、モーターコネクタが摩耗し、電気的接触不良を引き起こす可能性があります。以下のパーツを印刷することで、このリスクを軽減できます。

    | パーツ説明 | 画像 | ファイル名 | 材料 | 数量 | 印刷仕様 |
    | ---- | ---- | ---- | ---- | ---- | ---- |
    | モーター 1 用両面配線ハーネスクランプ | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/RS_Motor1_wiring_harness_clip.jpg" width="100" /> | [3D File](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/RS_Motor1_wiring_harness_clip.stp) | Bambu Lab Black PLA | 2 個 | ノズル 0.4 mm、レイヤー高さ 0.2 mm、インフィル 30% |
  </details>

  <div className="feature-grid">
    <div><strong>MotorBridge のオールインワン制御</strong><span>RobStride、Damiao、Hightorque、MyActuator、Hexfellow などをサポートし、reBot アームシリーズも継続的にサポートします。</span></div>
    <div><strong>reBot 向け機能</strong><span>ワンクリックのゼロ位置キャリブレーション、パラメータ書き込み、ドラッグ＆ドロップによるモーター制御、組み込みモデル可視化を備えています。</span></div>
    <div><strong>クロスプラットフォーム対応</strong><span>Windows、Ubuntu、macOS で動作し、一貫した機能を提供する Python SDK を備えています。</span></div>
  </div>

  <details className="video-details" open>
    <summary>キャリブレーションと入門ビデオを見る</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="reBot Arm B601-RS calibration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <section className="sub-step-block">
    <h3>1. Miniforge をインストールする（推奨）</h3>
    <p>Miniforge をインストールし、パッケージの競合を避けるために分離された仮想環境を作成します。このワークフローは Windows、Ubuntu、macOS、Jetson、Raspberry Pi をサポートします。</p>

    <details className="content-details">
      <summary>Miniforge のインストールコマンドを見る</summary>

      Ubuntu / Jetson / Raspberry Pi：

      ```bash
      wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
      bash Miniforge3-$(uname)-$(uname -m).sh
      ```

      macOS：

      ```bash
      curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
      bash Miniforge3-MacOSX-$(uname -m).sh
      ```

      Windows：Miniforge のリリースページを開き、最新の `Miniforge3-Windows-x86_64.exe` をダウンロードします：

      ```text
      https://github.com/conda-forge/miniforge/releases
      ```
    </details>

    :::tip
    Git Bash で `conda` コマンドが見つからない場合は、まず conda を初期化してください：

    ```bash
    source <install_path>/etc/profile.d/conda.sh
    echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
    source ~/.bashrc
    ```

    PowerShell ユーザーは次を実行できます：

    ```bash
    conda init powershell
    ```
    :::
  </section>

  <section className="sub-step-block">
    <h3>2. reBot 用の環境を作成して有効化する</h3>

    ```bash
    conda create -y -n rebot python=3.12
    conda activate rebot
    ```

    <p>reBot 関連の機能を使用するために新しいターミナルを開くたびに、再度 <code>conda activate rebot</code> を実行してください。</p>
  </section>

  <section className="sub-step-block">
    <h3>3. MotorBridge をインストールする</h3>

    :::tip macOS ユーザーへの注意
    macOS でテレオペレーションのフレームレートが低い場合、古い WCH CH34x ドライバーが原因の可能性があります。macOS 10.14 以降では、AppleUSBCHC0M がすでにシステムに組み込まれています。古いドライバーをアンインストールし、内蔵ドライバーを使用できます。
    :::

    ```bash
    pip install motorbridge
    ```
  </section>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全チェック</strong>
    <p>高価な物品を片付け、ロボットの作業空間から<strong>半径 1 メートル</strong>以内には人が近づかないようにしてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<section id="pcan" className="section-card">
  <div className="section-title">
    <span>CAN インターフェース</span>
    <h2>PCAN-USB を設定する</h2>
    <p>PCAN-USB により、コンピュータは 1 Mbps で CAN バスにアクセスでき、B601-RS 内の RobStride アクチュエータと通信できます。</p>
  </div>

  <details className="content-details" open>
    <summary>Ubuntu / Jetson / Raspberry Pi</summary>

    ```bash
    sudo modprobe peak_usb
    ip -br link

    sudo ip link set can0 down 2>/dev/null
    sudo ip link set can0 type can bitrate 1000000 restart-ms 100
    sudo ip link set can0 up
    ```
  </details>

  <details className="content-details">
    <summary>macOS</summary>

    まず PCBUSB をインストールします：

    ```bash
    curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
      https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
    tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
    cd PCBUSB
    sudo ./install.sh
    ```

    `motorbridge-gateway` が PCBUSB ランタイムライブラリを見つけられるように `DYLD_LIBRARY_PATH` を設定します：

    ```bash
    mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
    cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
    export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
    EOF

    echo $DYLD_LIBRARY_PATH
    ```

    環境が準備できているか確認します：

    ```bash
    python3 -c "import motorbridge; print('motorbridge OK')"
    motorbridge-cli --help
    python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
    ```
  </details>

  <details className="content-details">
    <summary>Windows</summary>
    <a href="https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/" target="_blank">PCAN-USB official page</a> にアクセスし、PCAN-USB ドライバーをインストールします。
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全チェック</strong>
    <p>高価な物品を片付け、ロボットの作業空間から<strong>半径 1 メートル</strong>以内には人が近づかないようにしてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<section className="section-card warning-section">
  <div className="section-title">
    <span>ゼロ位置のリセット</span>
    <h2>ゼロ位置書き込みとデバッグのために MotorBridge Gateway を起動する</h2>
    <p>MotorBridge Studio を開いたら、使用しているオペレーティングシステムとドライバーボードに対応するコマンドをコピーし、実行前に IP アドレスとポートを確認してください。</p>
  </div>

  <div className="danger-list">
    <strong>デバッグ前の安全ルール</strong>
    <ul>
      <li>治具クランプを 2 個用意します。サイズは 3 インチ以上を推奨します。</li>
      <li>XT30 出力を備えた信頼できる 48V スイッチング電源を使用してください。</li>
      <li>デバッグおよび動作中は、少なくとも 1 メートル離れてください。</li>
      <li>モーターをホットプラグしないでください。XT30 2+2 コネクタの抜き差しを行う前に電源を切ってください。</li>
      <li>モーターを過負荷または過速度で動作させないでください。起動前に配線とファスナーを確認してください。</li>
      <li>暴走動作を防ぐため、適切なプログラムパラメータと非常停止機構を設定してください。</li>
    </ul>
  </div>

  ブラウザで <a href="https://motorbridge.github.io/motorbridge-studio/" target="_blank">MotorBridge Studio</a> を開き、Help をクリックして、お使いのシステムとドライバボードに対応するコマンドをコピーします。

  ```bash
  motorbridge-gateway --bind 127.0.0.1:9002
  ```

  macOS で PCBUSB ランタイムライブラリを読み込めない場合は、次を使用します：

  ```bash
  DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002
  ```
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>reBot B601-RS 学習パス</h2>
    <p>これらのチュートリアルは、Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2 の順に進めるよう設計されています。以下のリンクを使ってモジュール間を移動できます。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item active" href="/ja/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>開封から配線、電源チェック、PCAN-USB セットアップ、キャリブレーション、初期動作テストまでを完了します。</span></span>
      <span className="course-tag">ここから開始</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot テレオペレーションとデータ収集</strong><span>アームをテレオペレートし、カメラを接続してデータセットを記録し、模倣学習タスクを準備します。</span></span>
      <span className="course-tag">データ収集</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio キネマティクス可視化</strong><span>ロボットモデル、関節、座標系、順運動学／逆運動学、軌道、重力補償について理解します。</span></span>
      <span className="course-tag">制御</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping デモ</strong><span>RGB-D 認識、ハンドアイキャリブレーション、YOLO / GraspNet、把持姿勢生成を組み合わせて、実物体の把持を行います。</span></span>
      <span className="course-tag">アプリケーション</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 連携</strong><span>アームを ROS2、RViz、MoveIt 2、プランニング、およびより高レベルのロボティクスワークフローに接続します。</span></span>
      <span className="course-tag">インテグレーション</span>
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
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.agent-inline-card { margin: 1rem 0 1.25rem; padding: 1.15rem; border-radius: 18px; background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08)); border: 1px solid rgba(37,99,235,0.22); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Collapse"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.video-placeholder { margin: 1rem; padding: 2.5rem 1rem; border: 1px dashed var(--rb-border); border-radius: 16px; text-align: center; color: var(--rb-muted); background: var(--rb-surface); }
.video-placeholder span { color: var(--rb-primary); font-weight: 850; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page :global(table) { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }


.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }

.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface, var(--rb-card, #fff)); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .course-path-item { background: #111827; border-color: rgba(148,163,184,0.24); }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }

`}</style>
