---
description: 双臂 SO-ARM 训练完整指南。
title: 双臂 SO-ARM 训练完整指南
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
url: https://wiki.seeedstudio.com/cn/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

# 双臂 SO-ARM 训练完整指南

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>从双臂遥操作数据开始，训练并部署真实双臂 SO-ARM 策略</h2>
    <p>本教程将双臂 SO-ARM 的完整流程整理为安全、清晰的分步路径：硬件接线、四个机械臂标定、双臂遥操作、数据集录制与管理、ACT 策略训练，以及真实机器人部署评估。</p>
    <div className="hero-actions">
      <a href="#workflow">查看流程</a>
      <a href="#calibration">开始标定</a>
      <a href="#record-dataset">进入数据采集</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" alt="双臂 SO-ARM 训练" />
    <strong>两个主臂 · 两个从臂 · 一个双臂数据集</strong>
    <span>先用小幅度动作测试。遥操作和策略评估时，请确保两个从臂工作空间内没有人员和障碍物。</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空双臂工作空间</strong>
    <p>在运行任何会驱动从臂运动的命令前，请清空两个机械臂工作空间 <strong>1 米范围内</strong> 的贵重物品、线缆、工具和无关人员。</p>
    <ul>
      <li>机械臂上电后，请勿触碰关节、舵机、连杆、夹爪或 3D 打印件。</li>
      <li>确认两个从臂都已固定牢靠，USB 线和电源线不会被机械臂拉扯。</li>
      <li>双臂遥操作时，请特别注意两只从臂之间的互相碰撞以及与桌面的碰撞。</li>
      <li>如果任意机械臂出现异常运动，请先停止程序，再断电检查。</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">流程</a>
  <a href="#hardware">硬件</a>
  <a href="#calibration">标定</a>
  <a href="#teleoperation">遥操作</a>
  <a href="#record-dataset">数据集</a>
  <a href="#training">训练</a>
  <a href="#deployment">部署</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>推荐双臂训练流程</h2>
    <p>建议按照下面顺序操作，将接线、标定、遥操作、数据质量和策略部署问题分开排查。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>准备 SO-ARM 环境</strong><p>先安装 LeRobot，并确认四个 USB 串口都可以被识别。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>映射端口和角色</strong><p>固定左从臂、右从臂、左主臂、右主臂的端口顺序。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>标定四个机械臂</strong><p>使用双臂专用 ID 生成校准文件，或谨慎复制已有校准文件。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>先不接相机遥操作</strong><p>确认左主臂控制左从臂、右主臂控制右从臂。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>采集并管理数据集</strong><p>录制本地或 Hub 数据集，支持断点续录、回放和删除坏 episode。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>训练并部署 ACT</strong><p>基于双臂数据集训练 ACT，再在真实双臂系统上评估。</p></div>
  </div>
</section>

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>端口映射与角色定义</h2>
    <p>双臂系统最容易出错的是左右臂和主从臂端口混淆。下面命令默认前两个 USB 设备为从臂，后两个 USB 设备为主臂。</p>
  </div>
  <div className="spec-grid">
    <div className="spec-card"><b>左从臂</b><span><code>{`/dev/ttyACM0`}</code></span></div>
    <div className="spec-card"><b>右从臂</b><span><code>{`/dev/ttyACM1`}</code></span></div>
    <div className="spec-card"><b>左主臂</b><span><code>{`/dev/ttyACM2`}</code></span></div>
    <div className="spec-card"><b>右主臂</b><span><code>{`/dev/ttyACM3`}</code></span></div>
    <div className="spec-card"><b>从臂类型</b><span><code>{`so101_follower`}</code></span></div>
    <div className="spec-card"><b>主臂类型</b><span><code>{`so101_leader`}</code></span></div>
  </div>
  <details className="content-details">
    <summary>Step 0.1：安装依赖并授予 USB 权限</summary>
    <p>环境安装请先参考 SO-ARM LeRobot 教程，然后授予四个串口权限。</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3`}</code></pre>
  </details>
</section>

<section id="calibration" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>标定两个从臂和两个主臂</h2>
      <p>双臂控制依赖正确的校准 ID。建议使用带 left / right 后缀的专用 ID，方便 LeRobot 查找对应文件。</p>
    </div>
  </div>
  <details className="content-details">
    <summary>标定左从臂和右从臂</summary>
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
    <summary>标定左主臂和右主臂</summary>
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
    <summary>校准文件保存位置</summary>
    <pre><code>{`~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json`}</code></pre>
  </details>
  <details className="content-details">
    <summary>可选：复制已有校准文件</summary>
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
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>先不接相机测试</strong><p>在录制数据前，先确认左主臂控制左从臂，右主臂控制右从臂，避免左右反向或端口错配。</p></div></div>
  <div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>双臂遥操作</h2><p>先完成无相机遥操作测试，再加入左右手腕相机。</p></div></div>
  <details className="content-details">
    <summary>不带摄像头遥操作</summary>
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
    <summary>带左右手腕相机遥操作</summary>
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
  <div className="step-title-row"><span className="step-pill">Step 4</span><div><h2>录制并管理双臂数据集</h2><p>建议从稳定的传递任务开始，并在训练和评估阶段保持相机名称、任务描述和机器人 ID 一致。</p></div></div>
  <div className="tips-grid">
    <div className="tips-card"><b>任务示例</b><span>左臂拿起方块并递给右臂。</span></div>
    <div className="tips-card"><b>建议数量</b><span>先录制约 50 条 episode，基础任务稳定后再增加变化。</span></div>
    <div className="tips-card"><b>断点续录规则</b><span><code>{`--dataset.num_episodes`}</code> 表示本次新增录制数量，不是最终总数。</span></div>
  </div>
  <details className="content-details">
    <summary>保存到本地，不上传 Hub</summary>
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
    <summary>上传到 Hugging Face Hub</summary>
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
    <summary>断点续录</summary>
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
    <summary>回放或删除指定 episode</summary>
    <pre><code>{`# 回放第 25 条 episode，episode 是 0-based 索引。
lerobot-replay \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.episode=24

# 删除同一条 episode。
python -m lerobot.scripts.lerobot_edit_dataset \\
  --repo_id=seeed/bimanual_so101_task \\
  --operation.type=delete_episodes \\
  --operation.episode_indices="[24]"`}</code></pre>
  </details>
</section>

<section id="training" className="section-card step-section">
  <div className="step-title-row"><span className="step-pill">Step 5</span><div><h2>训练 ACT 策略</h2><p>ACT 适合作为第一个双臂策略，用于验证从数据采集到真实部署的完整链路。</p></div></div>
  <details className="content-details">
    <summary>基于本地数据集训练</summary>
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
    <summary>基于 Hugging Face Hub 数据集训练</summary>
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
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>评估前安全确认</strong><p>先使用较短 episode 测试。确认策略训练时使用的相机名称和任务描述与评估命令完全一致。</p></div></div>
  <div className="step-title-row"><span className="step-pill">Step 6</span><div><h2>在真实双臂系统上部署策略</h2><p>使用带 policy checkpoint 的 <code>{`lerobot-record`}</code> 命令，在真实双臂系统上录制评估 episode。</p></div></div>
  <details className="content-details">
    <summary>本地保存评估数据</summary>
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
  <div className="section-title"><span>FAQ</span><h2>常见问题</h2><p>双臂问题通常来自校准 ID 不匹配、左右端口反了、缺少 resume 参数或相机名称不一致。</p></div>
  <details className="content-details"><summary>遥操时提示重新标定</summary><p><code>{`bi_so_follower`}</code> 找不到带 <code>{`_left`}</code> / <code>{`_right`}</code> 后缀的校准文件。请使用双臂 ID 重新标定，或复制已有校准文件到对应名称。</p></details>
  <details className="content-details"><summary>左右臂反了</summary><p>交换 <code>{`left_arm_config.port`}</code> 和 <code>{`right_arm_config.port`}</code>，再先不接相机重新测试遥操作。</p></details>
  <details className="content-details"><summary>继续采集时报目录已存在</summary><p>添加 <code>{`--resume=true`}</code>。同时注意 <code>{`--dataset.num_episodes`}</code> 表示本次新增录制数量。</p></details>
  <details className="content-details"><summary>训练时找不到本地数据集</summary><p>确认数据集是否保存在 LeRobot 默认缓存路径下，或者训练时添加正确的 <code>{`--dataset.root`}</code>。</p></details>
  <details className="content-details"><summary>策略评估时动作异常</summary><p>检查相机名称如 <code>{`left_wrist`}</code>、<code>{`right_wrist`}</code>、任务文本、机器人 ID 和校准文件是否与训练数据一致。</p></details>
</section>

<section className="section-card course-path-section">
  <div className="section-title"><span>Continue Learning</span><h2>SO-ARM 学习路径</h2><p>建议按照下面顺序完成 SO-ARM 的 LeRobot 学习路线。</p></div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/cn/lerobot_so100m_new/"><span className="course-index">1</span><span className="course-path-copy"><strong>SO-ARM LeRobot</strong><span>完成 SO-ARM100 / SO-ARM101 的安装、校准、遥操作、数据采集、训练与评估。</span></span><span className="course-tag">Start here</span></a>
    <a className="course-path-item" href="/cn/lerobot_steering_gear_debugging_tool/"><span className="course-index">2</span><span className="course-path-copy"><strong>舵机调试工具</strong><span>检查舵机、修复 ID、写入中位值并管理校准文件。</span></span><span className="course-tag">Debugging</span></a>
    <a className="course-path-item active" href="/cn/lerobot_double_arm_so_arm_training/"><span className="course-index">3</span><span className="course-path-copy"><strong>双臂 SO-ARM 训练</strong><span>采集双臂示教数据，训练 ACT，并在真实双臂系统上评估。</span></span><span className="course-tag">Current article</span></a>
    <a className="course-path-item" href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="course-index">4</span><span className="course-path-copy"><strong>SO101 与 NVIDIA GR00T</strong><span>从 LeRobot 数据集进入 VLA 微调和 Jetson 部署流程。</span></span><span className="course-tag">VLA</span></a>
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

