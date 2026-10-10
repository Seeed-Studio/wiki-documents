---
description: "Seeed 具身智能入门课程第三阶段：模仿学习与 LeRobot第 13 章 — 相机配置与 LeRobot 数据采集：3个相机，4个相机也可以训练和采集，ACT 本身对相机路数没有硬性限制：每路图像各自过一个共享的 ResNet18 骨干网络得到一个特征 token 序列，再拼接进 Transformer 编码器。原版 ACT 论文（ALOHA 双臂）就是 4 路相机（2 个顶部 + 2 个腕部）。"
title: 第 13 章 - 相机配置与 LeRobot 数据采集
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_13
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 13 章 · 实践</span>
    <h2>13. 相机配置与 LeRobot 数据采集</h2>
    <p>
      3个相机，4个相机也可以训练和采集，ACT 本身对相机路数没有硬性限制：每路图像各自过一个共享的 ResNet18 骨干网络得到一个特征 token 序列，再拼接进 Transformer 编码器。原版 ACT 论文（ALOHA 双臂）就是 4 路相机（2 个顶部 + 2 个腕部）。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 相机配置与 LeRobot 数据采集

## 单相机和双相机方案

- **单相机方案**：只接俯视相机。适合第一次跑通流程、验证环境——少一路相机，排查问题少一个变量；
- **双相机方案**（本课程主线，正式采集用）：俯视 + 腕部，ACT 模型也默认吃两路输入。

  - 当然你也可以选择俯视+侧视

3个相机，4个相机也可以训练和采集，ACT 本身对相机路数没有硬性限制：每路图像各自过一个共享的 ResNet18 骨干网络得到一个特征 token 序列，再拼接进 Transformer 编码器。原版 ACT 论文（ALOHA 双臂）就是 4 路相机（2 个顶部 + 2 个腕部）。

- 代价：每多一路，显存和计算近似线性增加，数据量需求也增加（多一路视角要学的东西更多）；每路都要保证同步与固定机位。

## 俯视相机和腕部相机

- **俯视相机（front）**：固定在支架上俯瞰整个工作区，告诉模型"目标在哪里、机械臂整体处于什么状态"；

  - 【摄像头支架安装】 
- **腕部相机（wrist）**：装在机械臂末端跟着夹爪走，告诉模型"夹爪和目标的相对位置、该不该闭合"。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13cn/ch13-01cn.jpg" alt="" />
</div>

---

## 查找相机设备名称

查看相机索引号，首先运行

```Bash
lerobot-find-cameras opencv
```

可以看到Id: 0，0即为我们所得到的摄像头索引号，

```Plain Text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920e
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

它会列出每个相机的名称、ID 和默认分辨率，您可以在 `－/rebot_lerobot/outputs/captured_images/` 目录中找到每台摄像头拍摄的图片，我们可以凭借图片查看相机的安装位置是否正确及合适。

同时，你要注意，如果你的设备是笔记本，扫描摄像头时会将笔记本自身的摄像头扫描进去，我们就需要通过拔插找到正确的俯拍摄像头索引号和腕部摄像头索引号，通常笔记本自身摄像头索引号为0

- **插拔顺序会改变索引。** 今天前置是 0，明天重插可能就变了。每次开录前花十秒钟重跑一次 `lerobot-find-cameras` 确认；
- **USB 相机必须直插电脑，不要接扩展坞**。无源 Hub 的带宽竞争会直接表现为读不到图像或掉帧；两路相机最好分插不同的 USB 控制器。

---

## 图像与动作同步

1. 对于单相机：

**RS版本：**

```Plain Text
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**DM版本**：

```Plain Text
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

如果您有更多摄像头，可以通过更改 `--robot.cameras` 参数来添加。您应该注意`index_or_path` 的格式，它由 `python -m lerobot.find_cameras opencv` 命令输出的摄像头 ID 的最后一位数字决定。

1. 对于双相机：

**RS版本：**

```Plain Text
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 848, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 848, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**DM版本**：

```Plain Text
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 848, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 848, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

可以看到这是在数采实验盒里面的图像信息，同时，我们

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13cn/ch13-02cn.jpg" alt="" />
</div>

推荐参数：**848 × 480 @ 30 fps ，`fourcc: "MJPG"`**。三个参数各有讲究：

- **分辨率 848×480**：清晰度和实时性之间的平衡点，能够在实验箱中看到更加广阔的视野。分辨率翻倍，USB 带宽和存储开销翻两番，而模型输入端本来就会缩放图像，收益有限。
- **帧率 30**：与采集帧率一致（12.3 讲过逻辑时间戳的由来）。相机帧率低于它，记录时就会反复用旧帧充数；
- **`fourcc: "MJPG"`**：图像压缩后再传输，USB 带宽压力小一个量级。当然你可以尝试`YUYV`格式图像，但是这会导致图像的分辨率和FPS降低导致机械臂运行卡顿。目前`MJPG`格式下可支持`3`个摄像头`1920*1080`分辨率并且保持`30FPS`

---

## 创建 LeRobot Dataset

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13cn/ch13-03cn.jpg" alt="" />
</div>

输出如下指令前，应随时准备进行录制数据，会有声音提示进入录制阶段，如若没有可根据终端上的提示进行查看是否开始

**RS版本：**

```Plain Text
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 848, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the test tube into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20 
```

**DM版本：**

```Plain Text
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 848, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the test tube into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20 
```

和数据集本身相关的参数有四个：

| 参数 | 含义 | 建议 |
|-|-|-|
| `--dataset.repo_id` | 数据集名，也是本地文件夹名 | 测试集和正式集分开命名，如`rebot_b601/grab_cube_test` / `rebot_b601/grab_cube_v1` |
| `--dataset.single_task` | 任务描述，存入数据集 | 英文，符合任务描述 |
| `--dataset.num_episodes` | 要录多少条 | 测试 5 条；正式 50 条（默认值就是 50） |
| `--dataset.push_to_hub` | 录完是否上传 Hub | false代表不上传 |
| `--dataset.episode_time_s=30` | 一条数据的录制时间 | 可根据任务复杂度进行修改 |
| `--dataset.reset_time_s=20` | 恢复现场的以待下次录制的时间 | 可根据恢复现场的时间进行修改 |
| `--display_data=true` | 实时显示相机画面 |  |

后数据集会保存在主目录的`－/.cache/huggingface/lerobot`下会创建上述`seeed_rebot_b601_rs/test`文件夹

---

## 录制、暂停录制和重新录制 Episode

- **录制**

录制过程中的键盘控制：

| 按键 | 作用 |
|-|-|
| →（右箭头） | 提前结束当前 Episode，进入复位/下一条 |
| ←（左箭头） | 作废当前 Episode，重新录制本条 |
| ESC | 结束整个采集会话：编码视频、计算统计量、保存数据集 |

如果按键没反应，是 `pynput` 版本问题，降级即可：`pip install pynput==1.6.8`

- **重新录制**

当我们完成5个数据集的录制之后，测试集回放没问题后，正式采集：把 `repo_id` 换成正式名、`num_episodes=50`，按第 12 章的铅笔五点定位法执行——每点 1 条、5 点一轮、共 10 轮。

- **暂停录制**

切记，暂停录制不要按Ctrl+C,需要按Esc，不然会可能会导致异常退出

---

## 可视化与回放一个数据集

- 可视化数据集

如果您上传了数据，您也可以在本地通过以下命令进行可视化：

```Bash
echo ${HF_USER}/rebot_test  
```

```Bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

如果您使用了 `--dataset.push_to_hub=false` ，没有上传数据，您也可以通过以下命令在本地进行可视化：

**RS版本：**

```Bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

**DM版本：**

```Bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

这里，`seeed_rebot_b601_rs/test` 是数据收集时自定义的 `repo_id` 名称

- **回放一个数据集**

现在，尝试在您的机器人上重播第一个数据集：*--dataset.episode*=0即为回放采集的第一个数据集，可依次类推。

**RS版本：**

```Bash
lerobot-replay \
--robot.type=seeed_b601_rs_follower \
--robot.port=can0 \
--robot.can_adapter=socketcan \
--robot.id=follower1 \
--dataset.repo_id=seeed_rebot_b601_rs/test \
--dataset.episode=0
```

**DM版本：**

```Bash
lerobot-replay \
--robot.type=seeed_b601_dm_follower \
--robot.port=/dev/ttyACM0 \
--robot.can_adapter=damiao \
--robot.id=follower1 \
--dataset.repo_id=seeed_rebot_b601_dm/test \
--dataset.episode=0
```

此时，机器人应该做出与你遥操记录时一样的动作。

## 补录与删除数据

- 在记录过程中会自动创建检查点。
- 在原有指令的基础上加上`--resume=true`可以进行继续补录数据 。
- 在恢复时，需将 `--dataset.num_episodes` 设置为要额外记录的剧集数量（而不是数据集中目标的总剧集数量）。
- 若要从头开始记录，请**手动删除**数据集目录。

使用以下命令可以删除相应的数据集--operation.episode_indices "[0]"代表删除第一个数据集，依次类推，删除数据时需要耐心等待,需修改对应的数据集名称

```Bash
lerobot-edit-dataset \
  --repo_id seeed_rebot_b601_rs/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

---

---

</div>
