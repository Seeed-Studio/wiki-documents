---
description: Complete guide to double-arm SO-ARM training with LeRobot.
title: Complete Guide to Double-Arm SO-ARM Training
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
url: https://wiki.seeedstudio.com/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

# Complete Guide to Double-Arm SO-ARM Training

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>Train a bimanual SO-ARM system from teleoperation data to real-robot deployment</h2>
    <p>This guide reorganizes the complete double-arm workflow into a safe step-by-step path: hardware wiring, four-arm calibration, dual-arm teleoperation, dataset recording, episode management, ACT training, and real-robot evaluation.</p>
    <div className="hero-actions">
      <a href="#workflow">View Workflow</a>
      <a href="#calibration">Start Calibration</a>
      <a href="#record-dataset">Record Dataset</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" alt="Double-arm SO-ARM training" />
    <strong>Two leaders · Two followers · One bimanual dataset</strong>
    <span>Use small motions first. Keep both follower arms clear of people and objects during teleoperation and policy evaluation.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear Both Robot Workspaces Before Running</strong>
    <p>Before running any command that moves the follower arms, clear valuable objects, cables, tools, and unrelated people within a <strong>1-meter radius</strong> of both arms.</p>
    <ul>
      <li>Do not touch joints, servo horns, links, grippers, or printed parts after the arms are powered on.</li>
      <li>Check that both follower arms are firmly clamped and that all USB and power cables are strain-relieved.</li>
      <li>During bimanual teleoperation, watch for self-collision between the two arms and collision with the table.</li>
      <li>If any arm moves unexpectedly, stop the program first, then power off before inspection.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">Workflow</a>
  <a href="#hardware">Hardware</a>
  <a href="#calibration">Calibration</a>
  <a href="#teleoperation">Teleoperation</a>
  <a href="#record-dataset">Dataset</a>
  <a href="#training">Training</a>
  <a href="#deployment">Deployment</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>Recommended bimanual training workflow</h2>
    <p>Follow this sequence to separate wiring, calibration, teleoperation, dataset quality, and policy deployment issues.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Prepare the SO-ARM environment</strong><p>Install LeRobot first and verify that all four USB serial ports can be detected.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Map ports and roles</strong><p>Assign stable ports for left follower, right follower, left leader, and right leader.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Calibrate all four arms</strong><p>Create calibration files with bimanual-specific IDs, or copy existing files carefully.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Teleoperate without cameras</strong><p>Confirm that each leader controls the correct follower before adding cameras.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Record and manage data</strong><p>Record local or Hub datasets, resume interrupted sessions, replay episodes, and delete bad episodes.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>Train and deploy ACT</strong><p>Train on the bimanual dataset, then evaluate on the real robot with the same camera names.</p></div>
  </div>
</section>

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Port mapping and role definition</h2>
    <p>Use a clear and consistent role mapping. The examples below assume the first two USB devices are follower arms and the next two are leader arms.</p>
  </div>
  <div className="spec-grid">
    <div className="spec-card"><b>Left follower arm</b><span><code>{`/dev/ttyACM0`}</code></span></div>
    <div className="spec-card"><b>Right follower arm</b><span><code>{`/dev/ttyACM1`}</code></span></div>
    <div className="spec-card"><b>Left leader arm</b><span><code>{`/dev/ttyACM2`}</code></span></div>
    <div className="spec-card"><b>Right leader arm</b><span><code>{`/dev/ttyACM3`}</code></span></div>
    <div className="spec-card"><b>Follower type</b><span><code>{`so101_follower`}</code></span></div>
    <div className="spec-card"><b>Leader type</b><span><code>{`so101_leader`}</code></span></div>
  </div>
  <details className="content-details">
    <summary>Step 0.1: install dependencies and grant USB permissions</summary>
    <p>Install the SO-ARM LeRobot environment first, then grant access to the four serial ports.</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3`}</code></pre>
  </details>
</section>

<section id="calibration" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Calibrate the two followers and two leaders</h2>
      <p>Bimanual control depends on correct calibration IDs. Use explicit left/right IDs so LeRobot can find the expected files.</p>
    </div>
  </div>
  <details className="content-details">
    <summary>Calibrate the left and right follower arms</summary>
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
    <summary>Calibrate the left and right leader arms</summary>
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
    <summary>Expected calibration file locations</summary>
    <pre><code>{`~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Optional: reuse existing calibration files</summary>
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
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>Run without cameras first</strong><p>Before recording data, make sure the left leader controls the left follower and the right leader controls the right follower.</p></div></div>
  <div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>Dual-arm teleoperation</h2><p>Start with a camera-free test, then add cameras after the arm mapping is correct.</p></div></div>
  <details className="content-details">
    <summary>Teleoperate without cameras</summary>
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
    <summary>Teleoperate with wrist cameras</summary>
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
  <div className="step-title-row"><span className="step-pill">Step 4</span><div><h2>Record and manage a bimanual dataset</h2><p>Start with a stable handover task and keep the camera names, task text, and robot IDs consistent across training and evaluation.</p></div></div>
  <div className="tips-grid">
    <div className="tips-card"><b>Task example</b><span>Pick the cube with the left arm and hand it to the right arm.</span></div>
    <div className="tips-card"><b>Recommended scale</b><span>Record around 50 episodes first, then add variations only after the baseline is stable.</span></div>
    <div className="tips-card"><b>Resume rule</b><span><code>{`--dataset.num_episodes`}</code> means how many new episodes to record this time, not the final total.</span></div>
  </div>
  <details className="content-details">
    <summary>Save locally without uploading to Hub</summary>
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
    <summary>Upload to Hugging Face Hub</summary>
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
    <summary>Resume an interrupted dataset</summary>
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
    <summary>Replay or delete an episode</summary>
    <pre><code>{`# Replay the 25th episode. Episode index is 0-based.
lerobot-replay \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.episode=24

# Delete the same episode.
python -m lerobot.scripts.lerobot_edit_dataset \\
  --repo_id=seeed/bimanual_so101_task \\
  --operation.type=delete_episodes \\
  --operation.episode_indices="[24]"`}</code></pre>
  </details>
</section>

<section id="training" className="section-card step-section">
  <div className="step-title-row"><span className="step-pill">Step 5</span><div><h2>Train an ACT policy</h2><p>ACT is a good first policy for validating the full bimanual pipeline before trying larger policies.</p></div></div>
  <details className="content-details">
    <summary>Train from a local dataset</summary>
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
    <summary>Train from Hugging Face Hub</summary>
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
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>Evaluation Safety Check</strong><p>Evaluate with short episodes first. Confirm the policy was trained with the same camera names and task description used during recording.</p></div></div>
  <div className="step-title-row"><span className="step-pill">Step 6</span><div><h2>Deploy the policy on the real robot</h2><p>Use <code>{`lerobot-record`}</code> with a policy checkpoint to record evaluation episodes on the real bimanual system.</p></div></div>
  <details className="content-details">
    <summary>Save evaluation data locally</summary>
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
  <div className="section-title"><span>FAQ</span><h2>Common issues</h2><p>Most bimanual issues are caused by calibration ID mismatch, swapped ports, missing resume flags, or inconsistent camera names.</p></div>
  <details className="content-details"><summary>Teleoperation asks me to recalibrate</summary><p><code>{`bi_so_follower`}</code> cannot find calibration files with the expected <code>{`_left`}</code> and <code>{`_right`}</code> suffixes. Recalibrate with bimanual IDs or copy existing calibration files to the expected names.</p></details>
  <details className="content-details"><summary>The left and right arms are swapped</summary><p>Swap <code>{`left_arm_config.port`}</code> and <code>{`right_arm_config.port`}</code>, then run teleoperation again without cameras to verify the mapping.</p></details>
  <details className="content-details"><summary>Continuing recording reports that the directory already exists</summary><p>Add <code>{`--resume=true`}</code>. Remember that <code>{`--dataset.num_episodes`}</code> is the number of additional episodes to record in the current session.</p></details>
  <details className="content-details"><summary>Training cannot find the local dataset</summary><p>Confirm the dataset is saved under the expected LeRobot cache path, or add the correct <code>{`--dataset.root`}</code> when training.</p></details>
  <details className="content-details"><summary>Evaluation behaves incorrectly after training</summary><p>Check that camera names such as <code>{`left_wrist`}</code> and <code>{`right_wrist`}</code>, task text, robot ID, and calibration files match the dataset used during training.</p></details>
</section>

<section className="section-card course-path-section">
  <div className="section-title"><span>Continue Learning</span><h2>SO-ARM learning path</h2><p>Follow these SO-ARM tutorials in order when building a complete LeRobot workflow.</p></div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/lerobot_so100m_new/"><span className="course-index">1</span><span className="course-path-copy"><strong>SO-ARM LeRobot</strong><span>Set up SO-ARM100 / SO-ARM101, calibrate, teleoperate, record, train, and evaluate.</span></span><span className="course-tag">Start here</span></a>
    <a className="course-path-item" href="/lerobot_steering_gear_debugging_tool/"><span className="course-index">2</span><span className="course-path-copy"><strong>Steering Gear Debugging Tool</strong><span>Inspect servos, recover IDs, write neutral values, and manage calibration files.</span></span><span className="course-tag">Debugging</span></a>
    <a className="course-path-item active" href="/lerobot_double_arm_so_arm_training/"><span className="course-index">3</span><span className="course-path-copy"><strong>Double-Arm SO-ARM Training</strong><span>Collect bimanual demonstrations, train ACT, and evaluate on a real dual-arm setup.</span></span><span className="course-tag">Current article</span></a>
    <a className="course-path-item" href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="course-index">4</span><span className="course-path-copy"><strong>SO101 with NVIDIA GR00T</strong><span>Move from LeRobot datasets to VLA fine-tuning and Jetson deployment.</span></span><span className="course-tag">VLA</span></a>
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

