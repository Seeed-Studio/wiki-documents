---
description: この Wiki では、環境構築、キャリブレーション、テレオペレーション、カメラ連携、データセット収集、学習、評価、高度なデプロイメントを含む、LeRobot で reBot Arm B601-RS を使用するための一連のワークフローを提供します。
title: LeRobot における reBot Arm B601-RS 入門
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg
slug: /rebot_arm_b601_rs_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-04
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-17'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_lerobot/
---

# LeRobot における reBot Arm B601-RS 入門

<div className="rebot-page">

  <section className="doc-hero">
    <div className="hero-copy">
      <span className="eyebrow">reBot Arm × LeRobot</span>
      <h2>テレオペレーションから始めて、データセットを構築し、ポリシーを学習し、実機ロボットアームにデプロイする</h2>
      <p>このガイドは、reBot Arm B601-RS のクイックスタートと基本的なハードウェアセットアップをすでに完了しているユーザー向けです。LeRobot のインストール、アームのキャリブレーション、テレオペレーション、カメラ連携、データセット収集、学習、評価、および高度なデプロイメントワークフローまで順を追って説明します。</p>
      <div className="hero-actions">
        <a href="#quick-path">学習パスを見る</a>
        <a href="#install-lerobot">LeRobot をインストール</a>
        <a href="#record-dataset">データセット収集を開始</a>
      </div>
    </div>
    <div className="hero-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
      <span>テレオペレーション · データセット · 学習 · 評価</span>
    </div>
  </section>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：実行前にロボットの作業空間を必ず片付けてください</strong>
    <p>ロボットアームを動かすプログラムを実行する前に、ロボットの作業空間の<strong>半径 1 メートル以内</strong>から、貴重品、壊れやすい物、工具、ケーブル、および無関係な物体をすべて取り除いてください。デバッグおよび動作中は、作業者はロボットの可動範囲から離れている必要があります。</p>
    <ul>
      <li>ロボットアームの電源が入っている状態では、関節、モーター、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
      <li>キャリブレーション、MotorBridge、テレオペレーション、データセット収集、IK 制御、軌道制御、重力補償、ビジュアルグラスピング、ROS2 アクション、または MoveIt 実行を行う前に、ロボットアームが確実に固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断などが発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、PCAN-USB アダプタ、XT30 コネクタ、電源コネクタを抜き差しする際は、必ずシステムの電源を切ってから行ってください。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="reBot LeRobot quick navigation">
    <a href="#quick-path">パス</a>
    <a href="#install-lerobot">インストール</a>
    <a href="#calibration">キャリブレーション</a>
    <a href="#teleoperation">テレオペレーション</a>
    <a href="#camera">カメラ</a>
    <a href="#record-dataset">データセット</a>
    <a href="#training">学習</a>
    <a href="#faq">FAQ</a>
  </nav>

  <section id="quick-path" className="section-card">
    <div className="section-title">
      <span>ここから開始</span>
      <h2>推奨ワークフロー</h2>
      <p>これが初めての LeRobot プロジェクトの場合は、以下の順序に従ってください。すでに LeRobot に慣れている場合は、必要なモジュールに直接進んでも構いません。</p>
    </div>

    <div className="path-grid">
      <a className="path-card" href="#install-lerobot"><b>1. LeRobot をインストール</b><small>conda 環境を作成し、Seeed が検証した LeRobot フォークをインストールし、必要なパッケージを導入します。</small></a>
      <a className="path-card" href="#calibration"><b>2. アームをキャリブレーション</b><small>B601-RS フォロワーアームと reBot 102 リーダーアームをキャリブレーションし、物理位置が一致するようにします。</small></a>
      <a className="path-card" href="#teleoperation"><b>3. テレオペレーション</b><small>リーダー・フォロワー方式のテレオペレーションを実行し、フォロワーアームが正しく安全に動作することを確認します。</small></a>
      <a className="path-card" href="#camera"><b>4. カメラを追加</b><small>OpenCV、RealSense、または Orbbec カメラを接続し、データ記録前にビデオストリームを確認します。</small></a>
      <a className="path-card" href="#record-dataset"><b>5. データセットを記録</b><small>タスクのデモをローカルに収集するか、Hugging Face Hub にアップロードします。</small></a>
      <a className="path-card" href="#training"><b>6. 学習と評価</b><small>まず ACT から始め、その後 SmolVLA、Pi0 / Pi0.5、GR00T などを使って、より高度な実験を行います。</small></a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>概要</span>
      <h2>プロジェクト概要</h2>
      <p>reBot Arm B601-RS は、Seeed Studio によるオープンソースロボットアームプロジェクトです。オープンな機構設計ファイル、BOM、ソフトウェア、チュートリアルを提供することで、Embodied AI 学習へのハードルを下げることを目的としています。</p>
    </div>

    <div className="info-grid">
      <div><strong>ロボットアーム</strong><span>6 自由度の reBot Arm B601-RS フォロワーアームで、PCAN-USB / SocketCAN 通信を使用する RoboStride モーターバージョンです。</span></div>
      <div><strong>リーダーアーム</strong><span>リアルタイムテレオペレーションおよびデモ収集用の reBot Arm 102 リーダーアーム。</span></div>
      <div><strong>フレームワーク</strong><span>テレオペレーション、データセット記録、学習、評価、ポリシーデプロイメントのための LeRobot。</span></div>
      <div><strong>通信</strong><span>PCAN-USB を <code>can0</code> としてマッピングし、SocketCAN を通じて 1 Mbps に設定します。</span></div>
      <div><strong>コンピュートプラットフォーム</strong><span>タスクに応じて、Ubuntu x86 ワークステーション、NVIDIA GPU ワークステーション、または Jetson Orin プラットフォームを使用します。</span></div>
    </div>

    <details className="content-details">
      <summary>プロジェクト紹介動画</summary>
      <div className="placeholder-box">動画リンクは後日追加予定</div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>システム</span>
      <h2>初期システム環境</h2>
      <p>クリーンな環境から開始してください。Jetson ユーザーは、LeRobot の依存関係をインストールする前に、GPU 対応の PyTorch と Torchvision がインストールされていることを確認してください。</p>
    </div>

    <div className="two-col">
      <div className="check-card">
        <h3>Ubuntu x86</h3>
        <ul>
          <li>Ubuntu 22.04</li>
          <li>CUDA 12 以上</li>
          <li>環境に応じて Python 3.10 / 3.12</li>
          <li>Torch 2.6 または互換性のある CUDA ビルド</li>
        </ul>
      </div>
      <div className="check-card">
        <h3>Jetson Orin</h3>
        <ul>
          <li>JetPack 6.0 または 6.1</li>
          <li>Python 3.10</li>
          <li>Torch 2.3 以上</li>
          <li>LeRobot の前に GPU 対応 PyTorch をインストール</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>ステップ 1</span>
      <h2>LeRobot をインストール</h2>
      <p>このセクションでは、作業環境を準備し、Seeed が検証した LeRobot リポジトリをインストールし、reBot 向けのパッケージを追加します。</p>
    </div>

    <details className="content-details">
      <summary>インストール動画</summary>
      <div className="placeholder-box">動画リンクは後日追加予定</div>
    </details>

    <div className="command-card">
      <h3>1. Miniforge をインストール</h3>
      <pre><code>{`cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. LeRobot リポジトリをクローン</h3>
      <pre><code>{`mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git`}</code></pre>
    </div>

    <div className="command-card">
      <h3>3. conda 環境を作成しパッケージをインストール</h3>
      <p>このガイドでは、Seeed が検証した LeRobot リポジトリを使用します。上流の LeRobot リポジトリは更新が早いため、コマンドやデータセット形式が異なる場合があります。</p>
      <pre><code>{`cd ~/rebot_lerobot

conda create -y -n lerobot python=3.12
conda activate lerobot

pip install -e ./lerobot
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>4. ffmpeg をインストール</h3>
      <pre><code>{`conda install ffmpeg -c conda-forge

# 互換性の問題が発生した場合:
conda install ffmpeg=7.1.1 -c conda-forge

# libsvtav1 サポートを確認:
ffmpeg -encoders | grep svtav1`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Jetson JetPack 6.0+ 向け特別設定</summary>
      <p>通常の PC ではこの手順をスキップしてください。Jetson では、まず GPU 対応の PyTorch と Torchvision をインストールし、その後必要に応じて以下の依存関係調整を適用します。</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>PyTorch と Torchvision を確認</summary>
      <p>pip インストールにより、GPU 対応の PyTorch が CPU ビルドに置き換えられる場合があります。続行する前に、必ず CUDA が利用可能か確認してください。</p>
      <pre><code>{`python3

import torch
print(torch.cuda.is_available())  # Expected output: True`}</code></pre>
    </details>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全チェック</strong>
    <p>ロボットの作業空間の<strong>半径 1 メートル以内</strong>から貴重品を取り除き、すべての作業者が離れていることを確認してください。このセクションを実行する前に、アームが確実に固定されていることを確認してください。</p>
  </div>
</div>

<section id="calibration" className="section-card">
    <div className="section-title">
      <span>ステップ 2</span>
      <h2>ロボットアームをキャリブレーション</h2>
      <p>キャリブレーションは、リーダーアームとフォロワーアームの物理位置を一致させる作業です。これは、テレオペレーション、データセット収集、ロボット間のポリシー転移に不可欠です。</p>
    </div>

    <details className="content-details">
      <summary>キャリブレーション動画</summary>
      <div className="placeholder-box">動画リンクは後日追加されます</div>
    </details>

    <div className="warning-card">
      <strong>再キャリブレーションに関する注意</strong>
      <span>再キャリブレーションが必要な場合は、<code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> または <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code> 配下のキャリブレーションファイルを削除してから、再度キャリブレーションを実行してください。</span>
    </div>

    <div className="command-card">
      <h3>1. シリアル権限を付与する</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*  # Leader arm

# Follower arm / SocketCAN interface
sudo modprobe peak_usb
ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. B601-RS フォロワーアームをキャリブレーションする</h3>
      <p>B601-RS の場合、フォロワーのキャリブレーションは通常、組み立て後に 1 回だけ必要です。ゼロ位置の基準に従うとき、グリッパーは完全に閉じた状態である必要があります。</p>
      <pre><code>{`sudo modprobe peak_usb
ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan`}</code></pre>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg" />
      </div>
    </div>

    <details className="content-details">
      <summary>3. reBot 102 リーダーアームをキャリブレーションする</summary>
      <div className="warning-card">
        <strong>重要</strong>
        <span>キャリブレーションが開始されると、reBot 102 リーダーアーム上の各サーボの現在位置がゼロとしてリセットされます。ジョイントリミットはキャリブレーションデータではなく、設定ファイル内で定義されます。</span>
      </div>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
      </div>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
      <p>初回接続時にシリアルデバイスがすぐに切断される場合、<code>brltty</code> がポートを占有している可能性があります。<code>sudo apt remove brltty</code> で削除してください。</p>
    </details>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>ロボットの作業空間から <strong>半径 1 メートル</strong> 以内の貴重品を片付け、全ての人が離れていることを確認してください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<section id="teleoperation" className="section-card">
    <div className="section-title">
      <span>Step 3</span>
      <h2>テレオペレーションテスト</h2>
      <p>キャリブレーション後、カメラを追加したりデータセットを記録したりする前に、基本的なリーダー・フォロワーのテレオペレーションテストを実行します。</p>
    </div>

    <div className="danger-card">
      <strong>安全に関するリマインダー</strong>
      <span>テレオペレーション中に電源、USB、CAN、または信号ケーブルが外れた場合は、まずプログラムを停止し、アームをゼロ位置に戻してから電源を再接続し、その後プログラムを再起動してください。</span>
    </div>

    <div className="command-card">
      <h3>テレオペレーションを実行する</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*
sudo ip link set can0 type can bitrate 1000000 restart-ms 100

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
    </div>

    <details className="content-details">
      <summary>テレオペレーションのデモ動画</summary>
      <div className="placeholder-box">動画リンクは後日追加されます</div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Step 4</span>
      <h2>カメラを追加する</h2>
      <p>カメラは、データセット収集とポリシー学習のための視覚的な観測を提供します。まずはシンプルな OpenCV カメラから始め、RGB-D データが必要な場合は RealSense や Orbbec に移行してください。</p>
    </div>

    <div className="camera-grid">
      <details className="content-details" open>
        <summary>汎用 USB / OpenCV カメラ</summary>
        <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>複数の USB カメラを使用する場合は、同じ USB ハブに高解像度カメラを過剰に接続しないようにしてください。</p>
      </details>

      <details className="content-details">
        <summary>RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{
      d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
      d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
      </details>

      <details className="content-details">
        <summary>Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras orbbec

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{
      orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
      orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p><code>No Orbbec camera found</code> と表示された場合は、<code>lerobot-find-cameras orbbec</code> を実行し、カメラ設定内のシリアル番号を更新してください。</p>
      </details>
    </div>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>ロボットの作業空間から <strong>半径 1 メートル</strong> 以内の貴重品を片付け、全ての人が離れていることを確認してください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<section id="record-dataset" className="section-card">
    <div className="section-title">
      <span>Step 5</span>
      <h2>データセットを収集する</h2>
      <p>テレオペレーションとカメラが安定したら、目的のタスクに対するデモンストレーションを記録します。データセットはローカルに保存することも、Hugging Face Hub にアップロードすることもできます。</p>
    </div>

    <details className="content-details">
      <summary>データセット収集動画</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/PLACEHOLDER" title="Dataset collection video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <details className="content-details" open>
      <summary>データセットをローカルに保存する</summary>
      <pre><code>{`lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>データセットは、指定したリポジトリ ID を用いて <code>{`~/.cache/huggingface/lerobot`}</code> 配下に保存されます。</p>
    </details>

    <details className="content-details">
      <summary>データセットを Hugging Face Hub にアップロードする</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential

HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="黒いキューブをつかむ" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
    </details>

    <details className="content-details">
      <summary>記録中のキーボード操作</summary>
      <div className="content-table">
        <table>
          <thead><tr><th>キー</th><th>操作</th></tr></thead>
          <tbody>
            <tr><td>Right Arrow</td><td>現在のエピソードを終了するか、早めにリセットして次のエピソードに進みます。</td></tr>
            <tr><td>Left Arrow</td><td>現在のエピソードをキャンセルして、再度録画します。</td></tr>
            <tr><td>ESC</td><td>セッションを即座に停止し、動画をエンコードし、有効になっている場合はデータセットをアップロードします。</td></tr>
          </tbody>
        </table>
      </div>
      <p>キーボードイベントが反応しない場合は、<code>pip install pynput==1.6.8</code> を試してください。</p>
    </details>

    <div className="tip-card">
      <strong>データセット品質のヒント</strong>
      <span>カメラの位置を固定し、照明を安定させ、対象物が見えるようにし、十分なエピソードを収集してください。単純な把持タスクの場合は、可能であれば少なくとも 50 エピソードから始めてください。</span>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>データセット</span>
      <h2>データセットの可視化とリプレイ</h2>
      <p>学習の前に、記録したデータセットを確認し、画像・状態・アクション・タスク記述が正しいことを検証します。</p>
    </div>

    <div className="command-card">
      <h3>データセットを可視化する</h3>
      <pre><code>{`lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>
    </div>

    <details className="content-details">
      <summary>ロボット上でエピソードをリプレイする</summary>
      <p>このステップは不安定になる場合があるため、任意です。</p>
      <pre><code>{`lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>高価な物品を片付け、ロボットの作業空間から<strong>半径 1 メートル</strong>以内には人が入らないようにしてください。このセクションを実行する前に、アームがしっかり固定されていることを確認してください。</p>
  </div>
</div>

<section id="training" className="section-card">
    <div className="section-title">
      <span>ステップ 6</span>
      <h2>学習と評価</h2>
      <p>まず ACT から始めて、データパイプラインを検証します。その後、SmolVLA、Pi0 / Pi0.5、GR00T N1.5、PEFT、マルチ GPU 学習、非同期推論などを試すことができます。</p>
    </div>

    <details className="content-details" open>
      <summary>ACT：最初に推奨されるポリシー</summary>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <p>RTX 50 シリーズ GPU の場合、torchvision の動画 API でエラーが発生する場合は、<code>--dataset.video_backend=pyav</code> を追加してください。</p>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="レゴブロックを透明な箱の中に入れる" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>

    <details className="content-details">
      <summary>SmolVLA：軽量ロボット基盤モデル</summary>
      <p>SmolVLA は、自身の LeRobot データセットでファインチューニングするための軽量な基盤モデルです。カメラ画像、ロボット状態、自然言語のタスク指示を用いて、アクションチャンクを予測します。</p>
      <pre><code>{`pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="レゴブロックをつかんで、ビンの中に入れる。" \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Pi0 / Pi0.5：VLA ポリシーの学習</summary>
      <p>Pi0 と Pi0.5 は Vision-Language-Action ポリシーです。言語条件付きのロボット制御を探索したい場合に有用です。</p>
      <pre><code>{`pip install -e ".[pi]"

lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=\${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false

lerobot-train \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=\${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}</code></pre>
    </details>

    <details className="content-details">
      <summary>GR00T N1.5：高度な基盤モデルのファインチューニング</summary>
      <p>GR00T N1.5 には、より厳しい CUDA と FlashAttention の要件があります。まず ACT または Pi0 を動作させてから、GR00T を試してください。</p>
      <pre><code>{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="黒いキューブをつかんで箱の中に入れる" \
  --policy.path=\${HF_USER}/groot-rebot`}</code></pre>
    </details>

    <details className="content-details">
      <summary>チェックポイントから学習を再開する</summary>
      <pre><code>{`lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}</code></pre>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>上級</span>
      <h2>高度なオプション</h2>
      <p>これらのセクションは任意です。基本的なデータセット収集と ACT 学習を正常に完了した後に使用してください。</p>
    </div>

    <details className="content-details">
      <summary>PEFT / LoRA による効率的なファインチューニング</summary>
      <pre><code>{`pip install -e ".[peft]"
pip install "lerobot[peft]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64`}</code></pre>
    </details>

    <details className="content-details">
      <summary>マルチ GPU 学習</summary>
      <pre><code>{`pip install accelerate

accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}</code></pre>
      <p>マルチ GPU 学習では有効バッチサイズが増加します。環境に応じて、学習ステップ数を減らすか、学習率をスケーリングする必要があるかもしれません。</p>
    </details>

    <details className="content-details">
      <summary>非同期推論デプロイ</summary>
      <p>非同期推論では、サーバーが次のアクションチャンクを計算している間に、ロボットが現在のアクションチャンクを実行できます。より大きなモデルやリモート推論に有用です。</p>
      <pre><code>{`pip install -e ".[async]"

python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080

python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false`}</code></pre>
      <div className="danger-card">
        <strong>セキュリティに関する注意</strong>
        <span>認証されていない非同期推論サーバーをパブリックインターネットに直接公開しないでください。VPN、SSH トンネリング、または厳格な送信元 IP 制限を使用してください。</span>
      </div>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>よくある問題</h2>
    </div>

    <details className="content-details">
      <summary>なぜ Seeed-Projects/lerobot リポジトリを使用するのですか？</summary>
      <p>このガイドは <code>https://github.com/Seeed-Projects/lerobot.git</code> で検証されています。上流の LeRobot リポジトリは変更が早く、コマンド、依存関係、またはデータセット形式の違いが生じる可能性があります。</p>
    </details>

    <details className="content-details">
      <summary>/dev/ttyUSB0 または can0 に接続できない</summary>
      <p>リーダーのシリアルデバイスが存在するのに接続に失敗する場合は、シリアル権限を付与してください。RS フォロワーの場合、PCAN-USB / SocketCAN インターフェースを <code>can0</code> として初期化します：</p>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*

sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
    </details>

    <details className="content-details">
      <summary>入力ファイルに有効なストリームが見つからない</summary>
      <p>ffmpeg 7.1.1 をインストールします：</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>

    <details className="content-details">
      <summary>録画中にキーボードショートカットが反応しない</summary>
      <p>Linux で <code>$DISPLAY</code> 環境変数を確認してください。pynput のバージョンを下げることも試せます：</p>
      <pre><code>{`pip install pynput==1.6.8`}</code></pre>
    </details>

    <details className="content-details">
      <summary>学習とデータ収集のヒント</summary>
      <p>カメラを固定し、照明を安定させ、不安定な背景を避け、十分なエピソードを収集し、LeRobot がデータセット統計を計算し終える前にデータ収集を停止しないでください。</p>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>参考資料</span>
      <h2>参考資料</h2>
    </div>
    <div className="reference-grid">
      <a href="https://wiki.seeedstudio.com/ja/lerobot_so100m/">LeRobot における Seeed SO100 アーム</a>
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot">Jetson Containers</a>
      <a href="https://www.jetson-ai-lab.com/lerobot.html">Jetson AI Lab</a>
      <a href="https://diffusion-policy.cs.columbia.edu/">Diffusion Policy</a>
      <a href="https://tonyzhaozh.github.io/aloha/">ACT / ALOHA</a>
      <a href="https://sjlee.cc/vq-bet/">VQ-BeT</a>
    </div>
  </section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>reBot B601-RS 学習パス</h2>
    <p>これらのチュートリアルは、次の順序で進めるように設計されています：Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2。以下のリンクを使ってモジュール間を移動できます。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>開封、配線、電源チェック、PCAN-USB セットアップ、キャリブレーション、初回の動作テストを完了します。</span></span>
      <span className="course-tag">ここから開始</span>
    </a>
    <a className="course-path-item active" href="/ja/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot テレオペレーションとデータ収集</strong><span>アームをテレオペレートし、カメラを接続し、データセットを記録し、模倣学習タスクを準備します。</span></span>
      <span className="course-tag">データ収集</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio による運動学の可視化</strong><span>ロボットモデル、関節、座標系、順運動学 / 逆運動学、軌道、重力補償について理解します。</span></span>
      <span className="course-tag">制御</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>ビジュアル把持デモ</strong><span>RGB-D 認識、ハンドアイキャリブレーション、YOLO / GraspNet、把持姿勢生成を組み合わせて、実物体の把持を行います。</span></span>
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
.hero-actions a:nth-child(2), .hero-actions a:nth-child(3) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.hero-card img { width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .notice-grid, .env-grid, .tips-grid, .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .feature-grid div, .notice-card, .env-grid div, .tips-grid div, .info-grid div, .check-card, .info-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; box-shadow: 0 10px 24px rgba(15,23,42,0.035); }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .feature-grid b, .feature-grid strong, .notice-card strong, .tips-grid b, .info-grid strong, .check-card h3, .info-card strong { color: var(--rb-text); }
.path-card small, .path-card span, .feature-grid span, .notice-card span, .tips-grid span, .info-grid span, .info-card p, .check-card li { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after { content: "Collapse"; }
.content-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child { margin-bottom: 1rem; }
.command-card, .command-flow > div, .sub-step-block { padding: 1rem; margin: 1rem 0; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.callout, .tip-card, .warning-card, .danger-card, .quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p, .tip-card span, .warning-card span, .danger-card span { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; display: block; }
.callout.warning, .warning-card { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger, .danger-card { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.placeholder-box, .video-placeholder { display: flex; min-height: 160px; align-items: center; justify-content: center; border: 1px dashed var(--rb-border); border-radius: 14px; padding: 1rem; text-align: center; color: var(--rb-muted); background: var(--rb-surface-soft); font-weight: 800; }
.image-wrap, .image-frame { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.camera-grid { display: grid; gap: 0.9rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning, html[data-theme='dark'] .warning-card { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger, html[data-theme='dark'] .danger-card { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(4, minmax(0, 1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } }


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
