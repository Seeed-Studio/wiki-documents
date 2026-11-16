---
description: "SO-ARM101 Sim-to-Real VLA 课程第 12 章（可选）—— 从 Isaac Sim 采集数据：用同一只主臂遥操作白色 SO-ARM101 数字孪生，以完全相同的数据集模式录制、回放与验证。"
title: 第 12 章 - 从 Isaac Sim 采集数据（可选）
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac Sim
  - 数字孪生
  - 数据采集
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_12
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_12/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 3 · 第 12 章 · 可选 · 仿真数据</span>
    <h2>12. 从 Isaac Sim 采集数据</h2>
    <p>
      用同一只主臂遥操作白色 SO-ARM101 数字孪生，以与真实数据完全相同的模式
      录制 episode，在不占用真机的情况下验证整条链路。
    </p>
    <div className="hero-actions">
      <a href="#process">数据链路</a>
      <a href="#cameras">相机视角</a>
      <a href="#requirements">环境要求</a>
      <a href="#launch">启动</a>
      <a href="#capture">录制</a>
      <a href="#replay">回放</a>
    </div>
  </div>
</section>

:::note 本章为可选
建议先跑通完整的真实世界闭环（采集 → 训练 → 评估，第 9–11 章）。仿真数据
不占用真机，能以低成本扩展场景与光照多样性，适合在真实链路验证之后作为
补充。
:::

## 12.1 学习目标与数据链路

<section id="process" className="section-card">
  <div className="section-title">
    <span>数据链路</span>
    <h2>12.1 学习目标与数据链路</h2>
  </div>

- 了解 NVIDIA Isaac Sim 仿真工具；
- 了解孪生的相机布局：腕部 `front` 相机与俯视 `external` 相机——与真实
  数据集相同的两路流；
- 在孪生里生成一份完整的 VLA 训练数据集。

SO-ARM101 项目的数据链路如下：

```text
SO-101 主臂（或键盘 IK）
       | USB 串口
       ▼
LeRobot Python 桥 -- UDP 127.0.0.1:5015 --> Isaac Sim 白色 SO-ARM101
                                                        |
                                   +--------------------+--------------------+
                                   |                                         |
                                   ▼                                         ▼
                              action/state                        front + external 相机
                                   |                                         |
                                   +--------------------+--------------------+
                                                        |
                                                        ▼
                                                 LeRobot Dataset v3
```

主臂只提供人工控制指令，仿真臂不会自主执行抓取。系统同步记录：

- `action`：六维主臂关节指令；
- `observation.state`：主臂空间的六维仿真关节值；
- `observation.images.front`：随腕部移动的相机；
- `observation.images.external`：工作区上方的俯视相机；
- 任务文本（`Put the three vials into the vial rack`）、随机化参数与任务
  成功状态。

默认采集频率 30 FPS，两路相机均为 640 × 480——与第 9 章的真实数据集完全
一致。

</section>

## 12.2 相机视角

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>front + external</span>
    <h2>12.2 相机视角</h2>
  </div>

按 `R` 重置场景后，两路相机视角与真实机器人一致：`front` 是随臂移动的腕部
流，`external` 是固定的俯视流——两路都会写入数据集。

:::note 腕部画面里出现硬件是正常的
`front` 视图下半部分可见的夹爪和相机支架是预期行为——腕部相机位于镜头前端、
沿臂方向看出去，与第 8 章的真实腕部支架完全一致。用
`./run_so101.sh --single-viewport` 只保留主视口并隐藏浮动相机窗口；录制不受
影响。
:::

</section>

## 12.3 环境要求

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>GPU 与安装</span>
    <h2>12.3 环境要求</h2>
  </div>

- Ubuntu 22.04；
- NVIDIA RTX GPU——NVIDIA 建议 Isaac Sim 工作使用 12 GB+ 显存；
- Isaac Sim 6.1 独立版已安装并能启动。

安装一次 Isaac Sim：

```bash
# 从 NVIDIA 下载 Isaac Sim 6.1 Linux 独立版压缩包，
# 解压后先启动一次：
mkdir -p ~/isaacsim && cd ~/isaacsim
unzip ~/Downloads/isaac-sim-standalone-6.1.0-linux-x86_64.zip
./python.sh -c "print('isaac ok')"
```

- 第 7 章的 LeRobot 环境（`~/rebot_lerobot/.venv`），带数据集扩展以便
  转换录制数据：
  `uv pip install -e "./lerobot[dataset,viz]"`。缺少它时录制数据转换失败，
  终端会打印 `[dataset-error]`；
- 已安装 `git-lfs`——项目的 USD 资产用 Git LFS 存储。

:::caution 8 GB 笔记本 GPU
在 8 GB GPU（多数笔记本）上，渲染负载可能抢占桌面合成器导致死机，即使开了
项目自带的缓解（Real-Time 渲染、640×360、30 Hz 上限）。使用项目的缓解参数，
或改用无头采集。
:::

</section>

## 12.4 下载源码

<section id="source" className="section-card">
  <div className="section-title">
    <span>项目克隆</span>
    <h2>12.4 下载源码</h2>
  </div>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/yuyoujiang/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

:::caution USD 资产走 Git LFS
不执行 `git lfs pull`，克隆里只有小的指针文件，Isaac Sim 打不开场景。
:::

</section>

## 12.5 启动 Isaac Sim 遥操作

<section id="launch" className="section-card">
  <div className="section-title">
    <span>首次构建</span>
    <h2>12.5 启动 Isaac Sim 遥操作</h2>
  </div>

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --leader-port /dev/ttyACM0
```

如果只有一个串口设备，程序可以自动检测：

```bash
./run_so101.sh
```

Isaac Sim 装在别的目录时：

```bash
ISAACSIM_ROOT=/path/to/isaacsim ./run_so101.sh --leader-port /dev/ttyACM0
```

首次启动会构建 `scenes/so101_vials_sorting.usda` 并编译着色器，需要几分钟，
属正常现象。

没有主臂硬件？键盘 IK 模式可以直接驱动末端：

1. 点一下 3D 视口（获得键盘焦点）；
2. 按 `Y`——终端打印
   `[teleop] Control source: KEYBOARD (IK: WASD ...)`；
3. `W`/`S`/`A`/`D` 在桌面平面移动，方向键上下，`Z`/`C` 俯仰工具，
   `G` 开合夹爪。

</section>

## 12.6 录制一个 episode

<section id="capture" className="section-card">
  <div className="section-title">
    <span>R · S · C</span>
    <h2>12.6 录制一个 episode</h2>
  </div>

确认 Isaac Sim 视口获得键盘焦点，然后：

1. 按 `R` 重置场景。三支试管重新摆位，物体与光照随机化生效；
2. 检查两路相机视角和试管初始位置；
3. 按 `S`（主臂模式）或 `T`（键盘模式）开始录制：

```text
[record] Episode started at 30 FPS -> .../datasets/so101_vials_front_side
```

4. 操作主臂把三支试管依次放进机架；夹爪靠近试管合拢时抓取辅助会吸附
   （终端打印 `[GRASP]`），在机架上方张开即释放（`[RELEASE]`）；
5. 再按 `S`/`T` 结束并保存；
6. 等待后台编码完成：

```text
[dataset] Episode saved; total completed: 1
```

系统在后台把临时 JPEG、动作和状态转换为 LeRobot Dataset v3；编码期间可以
直接开始下一条。

键盘快捷键：

| 按键 | 功能 |
|---|---|
| `R` | 重置三支试管并重新随机化 |
| `S` / `T` | 开始录制；录制中再按一次结束并保存 |
| `C` | 取消当前 episode，不写入数据集 |
| `Y` | 主臂模式 / 键盘 IK 模式切换 |
| `B` | 键盘步长慢速/快速切换 |

如果试管倒了、抓取失败或动作质量差，按 `C` 丢弃，再按 `R` 重录。

</section>

## 12.7 检查与可视化数据集

<section id="viz" className="section-card">
  <div className="section-title">
    <span>数据集可视化</span>
    <h2>12.7 检查与可视化数据集</h2>
  </div>

```bash
cd ~/rebot_lerobot
source .venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --episode-index 0 \
  --display-compressed-images true
```

依次检查各 episode：动作、状态与两路视频流必须同步，无黑帧、冻帧或严重
遮挡。

</section>

## 12.8 在 Isaac Sim 中回放动作

<section id="replay" className="section-card">
  <div className="section-title">
    <span>仿真闭环</span>
    <h2>12.8 在 Isaac Sim 中回放动作</h2>
  </div>

先启动一个不连主臂、不录制、关闭随机化的 Isaac Sim 接收器：

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --no-start-bridge --no-recording --no-dr &
```

然后在第二个终端回放第 0 条：

```bash
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts ~/rebot_lerobot/.venv/bin/python \
  scripts/replay_episode_so101.py --episode 0
```

循环回放：加 `--loop`。回放脚本发送数据集里的 `action` 列，用来检查机械臂
轨迹；它不是视频播放器——相机内容用上面的数据集可视化工具检查。终端在动作
流传输时打印 `[teleop:LIVE]`，三支试管在机架内稳定 0.35 s 后打印
`[SUCCESS]`。

</section>

## 12.9 没有主臂也能验证（可选）

<section id="no-leader" className="section-card">
  <div className="section-title">
    <span>无头检查</span>
    <h2>12.9 没有主臂也能验证（可选）</h2>
  </div>

主臂还没到货时，内置的脚本录制器可以无头验证物理、相机与数据集写入：

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --auto-record 2
```

它会向 `datasets/so101_vials_front_side` 录两条短 episode 后退出。最后的
`[dataset] Episode saved` 表示整条链——场景构建、物理、相机、数据集转换——
在无硬件情况下正常。

</section>

## 12.10 配置与参考资料

<section id="config" className="section-card">
  <div className="section-title">
    <span>配置文件</span>
    <h2>12.10 配置与参考资料</h2>
  </div>

SO-ARM101 项目的主要配置文件：

- `config/teleop_config_so101.json`：串口、UDP、关节映射与抓取辅助；
- `config/domain_randomization_so101.json`：物体、光照、相机与数据集参数；
- `config/grasp_config_so101.json`：场景物体、物理参数与任务成功条件。

继续[第 13 章 —— 数据增强（可选）](cn_Sim2Real_VLA_13.md)，或回到真机路线
[第 14 章 —— 准备 Jetson 边缘设备](cn_Sim2Real_VLA_14.md)。

</section>

</div>