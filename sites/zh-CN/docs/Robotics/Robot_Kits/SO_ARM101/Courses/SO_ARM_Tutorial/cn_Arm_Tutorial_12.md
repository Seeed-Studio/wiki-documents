---
description: "SO-ARM 具身智能入门课程第 12 章 —— 连接并验证前视与侧视相机、理解图像与动作的同步机制，然后用 lerobot-record 录制你的第一个 LeRobot 数据集，并掌握录制中的键盘控制。"
title: 第 12 章 - 相机配置与 LeRobot 数据采集
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - 相机
  - 数据集
  - 录制
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_12
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 12 章 · 实践</span>
    <h2>12. 相机配置与 LeRobot 数据采集</h2>
    <p>
      连接并验证前视与侧视相机，理解图像与动作的同步机制，然后用 lerobot-record 录制你的第一个 LeRobot 数据集，并掌握录制中的键盘控制。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前的安全检查</strong>
    <p>
      清空机械臂工作区 1 米范围内的贵重物品与无关人员。运行本章内容前，确认机械臂已牢固固定、电源与线缆连接正常。
    </p>
  </div>
</div>

<a id="overview"></a>

## 单相机 vs. 双相机方案

---

本课程的数据采集与模型训练需要两个相机、两个视角。按安装位置分，常见布局有两种：

| 布局 | 安装与用途 | 适用场景 |
|:---|:---|:---|
| **夹爪视角** | 俯视相机装在工作台前上方，覆盖工作区；夹爪相机装在夹爪附近，观察抓取细节 | 需要观察夹爪与物体接触的精细操作 |
| **侧视辅助** | 俯视相机装在工作台前上方；侧视相机装在工作台前侧，观察臂高与夹爪运动 | 抓取、搬运、放置类任务 |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp" alt="侧视辅助相机布局" />
</div>

本课程采用**侧视辅助布局**（前视相机 + 侧视相机），这也是第 22 章无代码流程使用的布局。

---

## 查找相机设备名

---

相机的索引号可能随重启或重新插拔而变化 —— 这主要取决于操作系统。每次录制前，先检测系统中的相机：

```bash
lerobot-find-cameras opencv
```

终端会打印类似信息：

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

每个相机拍的图片可以在 `outputs/captured_images` 目录里找到 —— 打开确认哪个索引是前视、哪个是侧视。

:::tip
不要让 USB 相机经过集线器。直连设备、优先 USB 3.0 口，保证图像传输带宽。
:::

---

## 遥操作时验证相机

---

录制前，先开启相机显示进行遥操作，确认两路画面都在、构图正确：

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

`index_or_path` 的值来自 `lerobot-find-cameras opencv` 输出的相机 ID 末位数字。

:::tip
`fourcc: "MJPG"` 请求压缩帧。MJPG 下该配置可支持 3 路 1920×1080 @ 30FPS 相机。`YUYV` 是未压缩格式 —— 会降低可用分辨率与帧率，可能让机械臂操作卡顿。两台相机不要接在同一个 USB 集线器上。
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

---

## 可选：深度相机（RealSense / 奥比中光）

---

<Tabs defaultValue="realsense">

<TabItem value="realsense" label="RealSense D435i / D405">

RealSense 深度相机可为物体识别、近距离操作等任务提供 RGB-D 感知。推荐 **D405**（短距双目深度，工作距离 7–50 cm，适合桌面操作）与 **D435i**（深度 + RGB + IMU）。

**1. 切换到相机分支** —— 深度相机支持在 `DepthCameraSupport` 分支上：

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
git branch --show-current   # 期望输出： DepthCameraSupport
```

**2. 以可编辑模式安装 RealSense 扩展：**

```bash
pip install -e ".[realsense]"
```

**3. 授权并检测相机：**

```bash
chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense
```

**4. 示例：** 带 D435i 彩色 + 深度双流遥操作（`serial_number_or_name` 填检测到的序列号）：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, color_stream_format: rgb8,
      rotation: 0, warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      max_depth_m: 2.0, depth_alpha: 0.2,
      rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

**参数说明**：`depth_alpha` 控制深度图像缩放（从 0.2 起步）；接 3 台以上深度相机建议把 `fps` 降到 15；分辨率保持 640×480 更稳。

</TabItem>

<TabItem value="orbbec" label="奥比中光 Gemini 2 / Gemini 336">

[奥比中光 Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) 是面向机器人应用的高性能 RGB-D 相机，提供同步的 RGB 与深度流；Gemini 336 在反光与昏暗室内区域的深度成像更佳。

**1. 切换到相机分支：**

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

**2. 安装奥比中光扩展：**

```bash
pip install -e ".[orbbec]"
```

**3. 授权与 USBFS 缓存**（默认 16MB 对深度流不够）：

```bash
chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb                 # 查看
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'  # 提高到 128MB
```

**4. 检测相机**并记下序列号：

```bash
lerobot-find-cameras orbbec
```

**5. 示例：** 单台奥比中光彩色 + 深度双流遥操作：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, rotation: 0, warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 400, fps: 30,
      depth_alpha: 0.2, rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

:::tip
一台奥比中光相机会占用 3 个连续的 `/dev/video` 编号。与普通 USB 相机混用时，先插奥比中光、后插普通相机，让普通相机编号靠后。如果等帧超时（`Timed out waiting for frame ...`），拔插一次相机即可。
:::

</TabItem>

</Tabs>

---

## 图像与动作的同步

---

录制时，LeRobot 每帧执行一个控制循环：

- 读两台相机（前、侧）；
- 读主臂关节 → 动作；
- 读从臂关节 → 状态；
- 打时间戳，追加一行数据。

由于相机按自己的节奏出帧，控制循环是**按时间戳对齐**而非按愿望对齐：数据集的每一行都把最新鲜的相机图像与同一瞬间的关节数据配成一对。这就是 `--dataset.fps` 不能超过相机稳定输出能力的原因（640×480 MJPG 下 30 fps 是安全选择）。

---

## 录制你的第一个数据集

---

把第 11 章的任务（A 到 B 抓放）录到本地 —— 数据留在你的机器上：

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

`repo_id` 可以自定义；`push_to_hub=false` 时数据集保存在 `~/.cache/huggingface/lerobot/seeedstudio123/test/`。

### 录制参数

| 参数 | 说明 | 默认值 |
|-----------|-------------|---------|
| `--dataset.episode_time_s` | 每条数据的时长（秒） | 60 |
| `--dataset.reset_time_s` | 每条之间的环境重置时间（秒） | 60 |
| `--dataset.num_episodes` | 要录制的总条数 | 50 |

### 录制中的键盘控制

| 按键 | 作用 |
|-----|--------|
| →（右方向键） | 提前结束当前条 / 重置；进入下一条 |
| ←（左方向键） | 取消当前条；重录本条 |
| ESC | 立即停止会话、编码视频并保存数据集 |

:::tip
如果快捷键无响应，先检查 `$DISPLAY` 是否已设置，或降级 pynput：`pip install pynput==1.6.8`
:::

录制时会持续输出类似状态行：

```text
INFO ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

`dt` 稳定在 33 ms 附近，说明环路保持了 30 Hz —— 这是一个健康的录制会话。

### 断点与续录

- 录制过程中会自动创建检查点；
- 中断后想续录，用相同命令加 `--resume=true`；
- **此时 `--dataset.num_episodes` 指本次要录的条数**而非总量 —— 已录 15 条、目标 50，就填 35；
- 想完全从头开始，手动删除数据集目录。

### 上传到 Hugging Face Hub（可选）

先登录（令牌从 [HF 设置](https://huggingface.co/settings/tokens) 生成，需写权限）：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
```

然后把 `--dataset.repo_id` 设为 `${HF_USER}/record-test`、`--dataset.push_to_hub=true` 即可发布数据集。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

---

## 采好数据的技巧

---

- **任务**：按第 11 章的十字点位抓取物体并放到 B 点；
- **规模**：录 50 条以上（每个点 10 条）；
- **一致性**：
  - 相机固定不动；
  - 抓取行为保持一致；
  - 确保被操作的物体在两路相机画面里都可见；
- **循序渐进**：先把稳定抓取做好，再增加变化（新位置、新手法、相机调整）。避免复杂度陡增；
- **环境**：保持相机位置、角度与环境光稳定；避免背景晃动或有人穿过画面 —— 采集与部署环境差异过大是策略失效的常见原因。

💡 **经验法则**：你应该能只看相机画面就亲手完成这个任务。你做不到，模型也做不到。

开始前把 `--dataset.num_episodes` 设得足够大，非必要不中途停止 —— 数据集统计量（均值与方差）在采集结束后才计算，训练需要它们。

</div>
