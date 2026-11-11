---
description: "SO-ARM101 Sim-to-Real VLA 课程第 9 章 —— 真实环境数据采集：测试相机、用 lerobot-record 录制双相机同步 episode、校验 LeRobot v3 数据集。"
title: 第 9 章 - 真实环境数据采集
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - 数据采集
  - lerobot-record
  - LeRobot Dataset
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_9
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 3 · 第 9 章 · Get Your Own VLA Model</span>
    <h2>9. 真实环境数据采集</h2>
    <p>
      测试相机，用 `lerobot-record` 录制双相机同步的 episode，并在训练之前
      校验 LeRobot v3 数据集。
    </p>
    <div className="hero-actions">
      <a href="#cameras">相机</a>
      <a href="#record">录制</a>
      <a href="#controls">按键</a>
      <a href="#storage">存储</a>
      <a href="#verify">校验</a>
    </div>
  </div>
</section>

## 9.1 测试相机

<section id="cameras" class="section-card">
  <div class="section-title">
    <span>录制之前</span>
    <h2>9.1 测试相机</h2>
  </div>

第 8 章已经装好并预览过双相机；现在再查一遍——重新插拔或重启后
`/dev/video*` 编号会变：

```bash
lerobot-find-cameras opencv
```

把预览图对应到编号（文件名含设备号），重新导出：

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

同时确认第 7 章的臂变量在当前终端里仍然有效：

```bash
echo "$TELEOP_PORT $TELEOP_ID $ROBOT_PORT $ROBOT_ID"
```

</section>

## 9.2 录制 episode

<section id="record" class="section-card">
  <div class="section-title">
    <span>lerobot-record</span>
    <h2>9.2 录制 episode</h2>
  </div>

双臂校准完毕、摄影棚就绪后运行：

```bash
export HF_USER=local   # 或你的 Hugging Face 用户名

lerobot-record \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --dataset.single_task="Put the three vials into the vial rack" \
  --dataset.num_episodes=10 \
  --dataset.push_to_hub=false \
  --display_data=false \
  --play_sounds=false
```

按终端提示完成每个 episode：用主臂抓起一支试管放进机架，松爪，让场景稳定。

关键参数：

| 参数 | 为什么是这个值 |
| --- | --- |
| `--robot.cameras` 键名 `front` 与 `external` | 与仿真数据集特征名完全一致（第 12 章协同训练） |
| `--dataset.single_task` | 所有地方都必须用这句原文——训练提示词和 episode 标签都依赖它 |
| `--dataset.num_episodes` | 先录 10 条；NVIDIA workshop 最低 5 条，50 条是可用的策略 |
| `--dataset.push_to_hub=false` | 数据留在本地；需要备份再上传 |
| `--display_data=false` | 避免录制机渲染每一帧 |

:::caution 用缓慢、完整的演示开始
中途放弃的 episode 会教会策略中途放弃。完成放置后再按右方向键。五条干净
轨迹胜过二十条被打断的。
:::

</section>

## 9.3 录制控制与安全

<section id="controls" class="section-card">
  <div class="section-title">
    <span>键盘</span>
    <h2>9.3 录制控制与安全</h2>
  </div>

| 按键 | 动作 |
| --- | --- |
| 右方向键 | 提前结束当前 episode 并进入下一条 |
| 左方向键 | 丢弃当前 episode 并重录 |
| `Esc` | 结束会话、编码视频并完成数据集 |

如果从臂出现意外动作：

1. 先按 `Ctrl+C`；
2. 若仍在运动，切断从臂 12 V 电源；
3. 手动把臂扳回中位；
4. 重启前复查校准和主臂 ID。

:::note 键盘无响应
部分 Ubuntu 上需要固定 `pynput` 版本。在 LeRobot 环境里：

```bash
pip install pynput==1.6.8
```
:::

</section>

## 9.4 数据存储、断点与续录

<section id="storage" class="section-card">
  <div class="section-title">
    <span>数据在哪里</span>
    <h2>9.4 数据存储、断点与续录</h2>
  </div>

- 数据以 `LeRobotDataset` 格式在录制时写盘，路径由 `--dataset.root` 指定；
- `--dataset.push_to_hub=false` 时不做任何上传；
- 录制过程自动创建检查点。中断后想续录，用同一命令加 `--resume=true`；
- 想从零重录，删除数据集目录。

:::caution 关于续录
续录时 `--dataset.num_episodes` 是**追加**的条数，不是目标总数。

如果臂在会话中卡死，调大 episode 时长 `--dataset.episode_time_s=90`
（默认 60）后重录。
:::

</section>

## 9.5 校验数据集

<section id="verify" class="section-card">
  <div class="section-title">
    <span>训练前检查</span>
    <h2>9.5 校验数据集</h2>
  </div>

检查元数据：

```bash
python3 -c "
import json
info = json.load(open('$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/meta/info.json'))
print('fps:', info['fps'], 'episodes:', info['total_episodes'], 'frames:', info['total_frames'])
print({k: v['shape'] for k, v in info['features'].items()})
"
```

预期输出：

```text
fps: 30 episodes: 10 frames: ...
{'observation.state': [6], 'observation.images.front': [480, 640, 3],
 'observation.images.external': [480, 640, 3], 'action': [6], ...}
```

两路相机流和六维关节是流水线的契约。形状不对就删掉数据集目录，用相同参数
重录。

数一下视频：

```bash
find $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos -name "*.mp4" | wc -l
```

10 个 episode × 2 相机 = 20 个文件。快速目检：

```bash
lerobot-dataset-viz \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --episode-index 0 \
  --display-compressed-images true
```

</section>

## 9.6 数据质量清单

<section id="quality" class="section-card">
  <div class="section-title">
    <span>注意这些</span>
    <h2>9.6 数据质量清单</h2>
  </div>

进入训练前，完整回看几条 episode：

- 每条 episode **完成任务**——试管落入机架后松爪；
- 动作顺滑；没有长停顿、没有粗暴修正；
- 各 episode 的试管起始位置有变化，不是每次都同一处；
- 腕部画面能看到爪子和被抓试管；外部画面能看到机架；
- 没有丢帧（视频卡顿）和对焦拉风箱；
- 每条 episode 的任务句完全一致。

任何一条不达标，训练出的策略都会在部署时以恼人的具体方式失败。现在修数据；
训练不会替你修。

下一章：[第 10 章 —— 训练 GR00T N1.7 策略](cn_Sim2Real_VLA_10.md)。

</section>

</div>