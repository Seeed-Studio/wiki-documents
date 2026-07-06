---
description: LeRobot を使用した両腕 SO-ARM トレーニングの完全ガイド。
title: 両腕 SO-ARM トレーニング完全ガイド
keywords:
  - Lerobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 7/1/2026
  author: ZhuYuan
translation:
  skip:
    - zh-CN
url: https://wiki.seeedstudio.com/ja/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

# 両腕 SO-ARM トレーニング完全ガイド

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>テレオペレーションデータから実機展開まで、両腕 SO-ARM システムをトレーニングする</h2>
    <p>このガイドでは、完全な両腕ワークフローを、安全なステップバイステップの流れに再構成します：ハードウェア配線、4 本のアームのキャリブレーション、両腕テレオペレーション、データセット記録、エピソード管理、ACT トレーニング、実機評価。</p>
    <div className="hero-actions">
      <a href="#workflow">ワークフローを見る</a>
      <a href="#calibration">キャリブレーションを開始</a>
      <a href="#record-dataset">データセットを記録</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" alt="Double-arm SO-ARM training" />
    <strong>2 つのリーダー · 2 つのフォロワー · 1 つの両腕データセット</strong>
    <span>最初は小さな動きから始めてください。テレオペレーションとポリシー評価中は、両方のフォロワーアームを人や物から離しておいてください。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：実行前に両方のロボット作業空間をクリアしてください</strong>
    <p>フォロワーアームを動かすコマンドを実行する前に、両方のアームの<strong>半径 1 メートル</strong>以内から、貴重品、ケーブル、工具、および無関係な人を取り除いてください。</p>
    <ul>
      <li>アームの電源投入後は、関節、サーボホーン、リンク、グリッパー、プリント部品には触れないでください。</li>
      <li>両方のフォロワーアームがしっかりとクランプされていること、すべての USB および電源ケーブルにストレインリリーフがかかっていることを確認してください。</li>
      <li>両腕テレオペレーション中は、2 本のアーム同士の自己干渉や、テーブルとの衝突に注意してください。</li>
      <li>いずれかのアームが予期せず動いた場合は、まずプログラムを停止し、その後電源を切ってから点検してください。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">ワークフロー</a>
  <a href="#hardware">ハードウェア</a>
  <a href="#calibration">キャリブレーション</a>
  <a href="#teleoperation">テレオペレーション</a>
  <a href="#record-dataset">データセット</a>
  <a href="#training">トレーニング</a>
  <a href="#deployment">デプロイ</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>ここから開始</span>
    <h2>推奨される両腕トレーニングワークフロー</h2>
    <p>この順序に従うことで、配線、キャリブレーション、テレオペレーション、データセット品質、ポリシーデプロイの問題を切り分けられます。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>SO-ARM 環境を準備する</strong><p>まず LeRobot をインストールし、4 つすべての USB シリアルポートが検出できることを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>ポートと役割をマッピングする</strong><p>左フォロワー、右フォロワー、左リーダー、右リーダーに安定したポートを割り当てます。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>4 本すべてのアームをキャリブレーションする</strong><p>両腕用の ID を付けたキャリブレーションファイルを作成するか、既存ファイルを慎重にコピーします。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>カメラなしでテレオペレーションする</strong><p>カメラを追加する前に、それぞれのリーダーが正しいフォロワーを制御していることを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>データを記録・管理する</strong><p>ローカルまたは Hub データセットを記録し、中断したセッションを再開し、エピソードを再生し、不良エピソードを削除します。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>ACT をトレーニングしてデプロイする</strong><p>両腕データセットでトレーニングし、同じカメラ名を使って実機で評価します。</p></div>
  </div>
</section>

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>ハードウェア</span>
    <h2>ポートマッピングと役割の定義</h2>
    <p>明確で一貫した役割マッピングを使用してください。以下の例では、最初の 2 つの USB デバイスをフォロワーアーム、次の 2 つをリーダーアームとみなしています。</p>
  </div>
  <div className="spec-grid">
    <div className="spec-card"><b>左フォロワーアーム</b><span><code>{`/dev/ttyACM0`}</code></span></div>
    <div className="spec-card"><b>右フォロワーアーム</b><span><code>{`/dev/ttyACM1`}</code></span></div>
    <div className="spec-card"><b>左リーダーアーム</b><span><code>{`/dev/ttyACM2`}</code></span></div>
    <div className="spec-card"><b>右リーダーアーム</b><span><code>{`/dev/ttyACM3`}</code></span></div>
    <div className="spec-card"><b>フォロワータイプ</b><span><code>{`so101_follower`}</code></span></div>
    <div className="spec-card"><b>リーダータイプ</b><span><code>{`so101_leader`}</code></span></div>
  </div>
  <details className="content-details">
    <summary>Step 0.1: 依存関係をインストールし USB 権限を付与する</summary>
    <p>まず SO-ARM LeRobot 環境をインストールし、その後 4 つのシリアルポートへのアクセス権を付与します。</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3`}</code></pre>
  </details>
</section>

<section id="calibration" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>2 つのフォロワーと 2 つのリーダーをキャリブレーションする</h2>
      <p>両腕制御は正しいキャリブレーション ID に依存します。LeRobot が期待するファイルを見つけられるよう、左右を明示した ID を使用してください。</p>
    </div>
  </div>
  <details className="content-details">
    <summary>左右のフォロワーアームをキャリブレーションする</summary>
    <pre><code>{`lerobot-calibrate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_bimanual_follower_left

lerobot-calibrate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower_right`}</code></pre>
  </details>
  <details className="content-details">
    <summary>左右のリーダーアームをキャリブレーションする</summary>
    <pre><code>{`lerobot-calibrate \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM2 \\
  --teleop.id=my_awesome_bimanual_leader_left

lerobot-calibrate \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader_right`}</code></pre>
  </details>
  <details className="content-details">
    <summary>想定されるキャリブレーションファイルの場所</summary>
    <pre><code>{`~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json`}</code></pre>
  </details>
  <details className="content-details">
    <summary>オプション：既存のキャリブレーションファイルを再利用する</summary>
    <pre><code>{`CAL_DIR=~/.cache/huggingface/lerobot/calibration/robots

cp $CAL_DIR/so101_follower/my_awesome_follower_arm1.json \\
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/so101_follower/my_awesome_follower_arm2.json \\
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm3.json \\
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm4.json \\
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_right.json`}</code></pre>
  </details>
</section>

<section id="teleoperation" className="section-card step-section">
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>まずカメラなしで実行する</strong><p>データを記録する前に、左リーダーが左フォロワーを、右リーダーが右フォロワーを制御していることを確認してください。</p></div></div>
  <div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>両腕テレオペレーション</h2><p>まずカメラなしのテストから始め、アームのマッピングが正しいことを確認してからカメラを追加します。</p></div></div>
  <details className="content-details">
    <summary>カメラなしでテレオペレーションする</summary>
    <pre><code>{`lerobot-teleoperate \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>リストカメラ付きでテレオペレーションする</summary>
    <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --display_data=true`}</code></pre>
  </details>
</section>

<section id="record-dataset" className="section-card step-section">
  <div className="step-title-row"><span className="step-pill">Step 4</span><div><h2>両腕データセットの記録と管理</h2><p>安定したハンドオーバータスクから始め、トレーニングと評価の両方でカメラ名、タスク文、ロボット ID を一貫させてください。</p></div></div>
  <div className="tips-grid">
    <div className="tips-card"><b>タスク例</b><span>左腕でキューブをつかみ、右腕に受け渡します。</span></div>
    <div className="tips-card"><b>推奨スケール</b><span>まずは約 50 エピソードを記録し、ベースラインが安定してからバリエーションを追加してください。</span></div>
    <div className="tips-card"><b>再開ルール</b><span><code>{`--dataset.num_episodes`}</code> は最終的な合計ではなく、今回新たに記録するエピソード数を意味します。</span></div>
  </div>
  <details className="content-details">
    <summary>Hub にアップロードせずローカルに保存</summary>
    <pre><code>{`lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.push_to_hub=false \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.num_episodes=50 \\
  --dataset.fps=30 \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10 \\
  --dataset.video=true \\
  --dataset.vcodec=libsvtav1 \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Hugging Face Hub にアップロード</summary>
    <pre><code>{`export HF_USER=your_hf_username

lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM1 \\
  --robot.right_arm_config.port=/dev/ttyACM2 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30} }' \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM3 \\
  --teleop.right_arm_config.port=/dev/ttyACM4 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --dataset.repo_id=\${HF_USER}/bimanual_so101_task \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.num_episodes=50 \\
  --dataset.fps=30 \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10 \\
  --dataset.video=true \\
  --dataset.vcodec=libsvtav1 \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>中断したデータセットを再開</summary>
    <pre><code>{`lerobot-record \\
  --resume=true \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.push_to_hub=false \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.num_episodes=35 \\
  --dataset.fps=30 \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10 \\
  --dataset.video=true \\
  --dataset.vcodec=libsvtav1 \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>エピソードのリプレイまたは削除</summary>
    <pre><code>{`# 25 番目のエピソードをリプレイします。エピソードのインデックスは 0 始まりです。
lerobot-replay \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.episode=24

# 同じエピソードを削除します。
python -m lerobot.scripts.lerobot_edit_dataset \\
  --repo_id=seeed/bimanual_so101_task \\
  --operation.type=delete_episodes \\
  --operation.episode_indices="[24]"`}</code></pre>
  </details>
</section>

<section id="training" className="section-card step-section">
  <div className="step-title-row"><span className="step-pill">Step 5</span><div><h2>ACT ポリシーを学習する</h2><p>ACT は、より大きなポリシーを試す前に、両腕パイプライン全体を検証するための最初のポリシーとして適しています。</p></div></div>
  <details className="content-details">
    <summary>ローカルデータセットから学習</summary>
    <pre><code>{`lerobot-train \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --policy.type=act \\
  --policy.device=cuda \\
  --steps=60000 \\
  --output_dir=outputs/train/act_bimanual_so101 \\
  --wandb.enable=false \\
  --policy.push_to_hub=false`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Hugging Face Hub から学習</summary>
    <pre><code>{`export HF_USER=your_hf_username

lerobot-train \\
  --dataset.repo_id=\${HF_USER}/bimanual_so101_task \\
  --policy.type=act \\
  --policy.device=cuda \\
  --steps=100000 \\
  --output_dir=outputs/train/act_bimanual_so101 \\
  --wandb.enable=false \\
  --policy.push_to_hub=false`}</code></pre>
  </details>
</section>

<section id="deployment" className="section-card step-section">
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>評価時の安全チェック</strong><p>まずは短いエピソードで評価してください。ポリシーが、記録時と同じカメラ名とタスク記述で学習されていることを確認します。</p></div></div>
  <div className="step-title-row"><span className="step-pill">Step 6</span><div><h2>実機ロボットにポリシーをデプロイする</h2><p>実際の両腕システムで評価エピソードを記録するために、ポリシーのチェックポイントとともに <code>{`lerobot-record`}</code> を使用します。</p></div></div>
  <details className="content-details">
    <summary>評価データをローカルに保存</summary>
    <pre><code>{`lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \\
  --dataset.push_to_hub=false \\
  --dataset.num_episodes=10 \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.fps=30 \\
  --dataset.video=true \\
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \\
  --display_data=true`}</code></pre>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title"><span>FAQ</span><h2>よくある問題</h2><p>両腕に関する問題の多くは、キャリブレーション ID の不一致、ポートの入れ替わり、resume フラグの付け忘れ、またはカメラ名の不整合が原因です。</p></div>
  <details className="content-details"><summary>テレオペレーションで再キャリブレーションを求められる</summary><p><code>{`bi_so_follower`}</code> が、想定される <code>{`_left`}</code> および <code>{`_right`}</code> サフィックスを持つキャリブレーションファイルを見つけられていません。両腕用の ID で再キャリブレーションするか、既存のキャリブレーションファイルを想定される名前にコピーしてください。</p></details>
  <details className="content-details"><summary>左腕と右腕が入れ替わっている</summary><p><code>{`left_arm_config.port`}</code> と <code>{`right_arm_config.port`}</code> を入れ替え、その後カメラなしでテレオペレーションを実行してマッピングを確認してください。</p></details>
  <details className="content-details"><summary>記録の継続時にディレクトリがすでに存在すると表示される</summary><p><code>{`--resume=true`}</code> を追加してください。<code>{`--dataset.num_episodes`}</code> は現在のセッションで追加で記録するエピソード数であることを忘れないでください。</p></details>
  <details className="content-details"><summary>学習時にローカルデータセットが見つからない</summary><p>データセットが想定される LeRobot のキャッシュパスに保存されているか確認するか、学習時に正しい <code>{`--dataset.root`}</code> を追加してください。</p></details>
  <details className="content-details"><summary>学習後の評価で挙動がおかしい</summary><p><code>{`left_wrist`}</code> や <code>{`right_wrist`}</code> などのカメラ名、タスク文、ロボット ID、およびキャリブレーションファイルが、学習に使用したデータセットと一致しているか確認してください。</p></details>
</section>

<section className="section-card course-path-section">
  <div className="section-title"><span>学習を続ける</span><h2>SO-ARM ラーニングパス</h2><p>完全な LeRobot ワークフローを構築する際は、これらの SO-ARM チュートリアルを順番に進めてください。</p></div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/lerobot_so100m_new/"><span className="course-index">1</span><span className="course-path-copy"><strong>SO-ARM LeRobot</strong><span>SO-ARM100 / SO-ARM101 をセットアップし、キャリブレーション、テレオペレーション、記録、学習、評価を行います。</span></span><span className="course-tag">ここから開始</span></a>
    <a className="course-path-item" href="/ja/lerobot_steering_gear_debugging_tool/"><span className="course-index">2</span><span className="course-path-copy"><strong>Steering Gear Debugging Tool</strong><span>サーボを確認し、ID を復旧し、ニュートラル値を書き込み、キャリブレーションファイルを管理します。</span></span><span className="course-tag">デバッグ</span></a>
    <a className="course-path-item active" href="/ja/lerobot_double_arm_so_arm_training/"><span className="course-index">3</span><span className="course-path-copy"><strong>ダブルアーム SO-ARM トレーニング</strong><span>両手操作のデモを収集し、ACT を学習し、実機の双腕セットアップで評価します。</span></span><span className="course-tag">現在の記事</span></a>
    <a className="course-path-item" href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="course-index">4</span><span className="course-path-copy"><strong>NVIDIA GR00T を用いた SO101</strong><span>LeRobot データセットから VLA のファインチューニングと Jetson へのデプロイへと進みます。</span></span><span className="course-tag">VLA</span></a>
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
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .step-card-grid, .module-summary-grid, .spec-grid, .tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .spec-card, .tips-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .spec-card b, .tips-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .step-card p, .module-summary-card span, .spec-card span, .tips-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
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
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .tips-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .step-title-row { display: grid; } }
`}</style>

