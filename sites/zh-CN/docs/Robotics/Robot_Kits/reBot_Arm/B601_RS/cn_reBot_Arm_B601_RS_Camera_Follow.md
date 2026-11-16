---
title: reBot-RS 腕部相机手掌跟随
description: 使用腕部深度相机识别手掌，控制 reBot Arm B601-RS 跟随并通过捏合操作夹爪。
slug: /rebot_arm_b601_rs_camera_follow
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp
keywords:
  - reBot Arm
  - B601-RS
  - hand tracking
  - depth camera
  - visual servoing
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import diagram from '@site/src/components/robotics/rebot-camera-follow.module.css';

# reBot-RS 腕部相机手掌跟随

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS 机械臂" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank" rel="noopener noreferrer">
    <span>点击立即获取</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="参考环境：Python 3.10" />
  <img src="https://img.shields.io/badge/Platform-Linux-orange.svg" alt="平台：Linux" />
  <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="相机：RGB-D 深度相机" />
  <img src="https://img.shields.io/badge/Tracking-MediaPipe-yellow.svg" alt="手部识别：MediaPipe" />
</p>

<p align="center">
  <strong>腕部深度感知 · 手掌跟随 · 捏合控制夹爪 · 本地网页预览</strong>
</p>

本教程介绍如何运行 [reBot RS Camera Follow](https://github.com/Yang-Ci/reBot_RS_Camera-Follow)：腕部深度相机采集彩色与深度图像，程序识别手掌位置并计算机械臂跟随指令。您还可以用拇指与食指的捏合动作控制夹爪，并在本地网页查看相机画面、关节状态和机械臂模型。

项目将手部关键点与对齐后的深度数据结合，估计掌心的三维位置，再经过滤波、坐标变换和运动学计算生成关节指令。网页用于预览和管理控制进程；关节显示可能来自反馈、指令或估算，请以页面的数据来源标识为准。

<GitHubStarButton
  owner="Yang-Ci"
  repo="reBot_RS_Camera-Follow"
  ariaLabel="在 GitHub 上为 reBot_RS_Camera-Follow 点亮 Star"
/>

:::warning 真机安全
初始化会使能机械臂并移动到 HOME；退出也会使机械臂回零。开始前清空整个运动范围，确认机械臂固定、电源和 CAN 正常，检查 HOME 路径，并确保硬件急停可用。首次运行及更换硬件后应从低速、小范围开始。软件保护和网页显示不能代替碰撞检测或硬件急停。
:::

## 系统架构与实现思路

### 系统架构

<div className={diagram.diagram}>
  <ol className={diagram.row} aria-label="系统架构：从相机到机械臂">
    <li className={diagram.card}>
      <span className={diagram.label}>输入</span>
      <strong>腕部深度相机</strong>
      <p>采集彩色图像与深度帧，提供手掌识别和距离信息。</p>
    </li>
    <li className={diagram.card}>
      <span className={diagram.label}>处理</span>
      <strong>Linux 主机</strong>
      <p>识别手部，计算目标位置，并通过运动学和保护逻辑生成指令。</p>
    </li>
    <li className={diagram.card}>
      <span className={diagram.label}>执行</span>
      <strong>B601-RS 机械臂</strong>
      <p>接收 CAN 指令，驱动六轴与夹爪；关节反馈返回控制程序。</p>
    </li>
  </ol>
  <p className={diagram.note}><strong>本地网页：</strong>通过本机服务管理控制程序，并显示相机预览、机械臂模型与状态。</p>
</div>

视觉线程获取相机帧并识别手部；伺服线程读取最新目标，利用机械臂模型和相机位姿计算关节指令。网页通过本机服务启动和管理控制程序，并接收状态；网页本身不直接连接 CAN。页面显示可能来自实际反馈、指令或模型估算，请以数据来源标识为准。

### 手掌跟随与夹爪控制流程

<div className={diagram.diagram}>
  <div className={diagram.lane}>
    <p className={diagram.laneTitle}>手掌跟随</p>
    <ol className={diagram.row} aria-label="手掌跟随流程">
      <li className={diagram.card}>
        <span className={diagram.label}>01 · 感知</span>
        <strong>识别三维掌心</strong>
        <p>从彩色图像提取手部关键点，结合对齐深度图采样掌心距离。</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>02 · 计算</span>
        <strong>生成跟随目标</strong>
        <p>对三维掌心滤波和预测，再转换到机械臂坐标系。</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>03 · 执行</span>
        <strong>驱动机械臂</strong>
        <p>通过视觉伺服和雅可比逆解生成受限关节指令，经 CAN 下发。</p>
      </li>
    </ol>
  </div>
  <div className={diagram.lane}>
    <p className={diagram.laneTitle}>捏合控制夹爪</p>
    <ol className={diagram.row} aria-label="夹爪控制流程">
      <li className={diagram.card}>
        <span className={diagram.label}>01 · 识别</span>
        <strong>提取指尖位置</strong>
        <p>读取拇指与食指关键点。</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>02 · 映射</span>
        <strong>计算捏合距离</strong>
        <p>对距离滤波，并映射为夹爪开合目标。</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>03 · 执行</span>
        <strong>控制夹爪</strong>
        <p>跟随启用且选择捏合控制时，发送夹爪指令。</p>
      </li>
    </ol>
  </div>
</div>

相机安装在腕部，因此控制计算需要将相机坐标转换到机械臂坐标。手掌短时丢失时程序可能有限外推，较长时间丢失后保持；重新识别后可能继续运动。捏合控制与跟随共用手部检测结果，也可在网页选择保持夹爪当前位置。

## 准备工作

- 一台已完成基本配置的 reBot Arm B601-RS、供电设备和可用的 CAN 接口。可先参考 [reBot-RS 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)。
- 一台运行 Linux 的电脑，参考环境为 Python 3.10；项目依赖相机 SDK、Pinocchio 和 motorbridge，具体系统库与设备权限取决于机器。
- 安装在腕部的深度相机和适配支架。网页支持选择 Gemini 2、Gemini 305、Gemini 336 或 RealSense D435i；不同相机的位姿要求见下文。

## 选择相机支架

Gemini 2、D435i 和 Gemini 336 使用 V1 平视支架，分别配有各自的相机 URDF。下图展示共用支架的 STL 模型：

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini2-level-mount.png" alt="Gemini 2、Gemini 336 与 D435i 共用支架的立体、俯视和侧视图" />
</p>

可从[共用支架目录](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/tree/main/models/wrist_camera/gemini2-gemini336-d435i)获取 STEP 和 STL 文件。

Gemini 305 使用单独的居中平视支架，下图为其 STL 模型预览。该支架也可供 D405 使用，但本教程的跟随程序相机选项以项目实际支持为准。

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini305-level-mount.png" alt="Gemini 305 和 D405 共用支架的立体、俯视和侧视图" />
</p>

可查看[支架 STL 模型](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/meshes/Gemini305_D405_Mount.stl)和[模型说明](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md)。Gemini 305 的相机外壳在 URDF 模型中为近似表示。

不同相机的光心和安装位置不同。以上位姿为 CAD 名义装配，使用前应核对固定方式、视野和 URDF 与实际安装是否一致，再低速验证运动方向。

## 安装项目和依赖

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>获取项目并创建环境</h4>
    <p className="rebot-step-label">第 1 步</p>

在 Linux 终端中运行：

```bash
git clone https://github.com/Yang-Ci/reBot_RS_Camera-Follow.git
cd reBot_RS_Camera-Follow
python3.10 -m venv .venv-arm
.venv-arm/bin/python -m pip install -r requirements.txt
```

根据相机安装并验证相应 SDK。D435i 还需要在该环境中安装 RealSense Python 绑定：

```bash
.venv-arm/bin/python -m pip install 'pyrealsense2>=2.54'
```

项目的 [requirements-d435i.txt](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/requirements-d435i.txt) 提供 D435i 纯视觉环境的依赖组合；真机控制还需要主依赖。安装失败时，检查 Python 版本、系统库、设备权限和相机 SDK。
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>检查项目内资源</h4>
    <p className="rebot-step-label">第 2 步</p>

机械臂控制库、RS URDF、网页模型和浏览器手部识别资源已包含在本仓库中，不需要克隆其他项目或设置资源路径。可在项目根目录检查这些文件：

```bash
ls vendor/rebot_control
ls assets/robot/description/urdf/ReBot_Arm_RS.urdf
ls web/lib/mediapipe
```

以上命令应列出对应目录或文件。Python 依赖和相机 SDK 仍需安装；集成资源及来源见[仓库资源说明](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md)。
  </div>
</section>
</div>

## 核对相机位姿

Gemini 2、D435i、Gemini 305 和 Gemini 336 默认使用各自 URDF 的 CAD 名义相机位姿，无需手眼标定文件。Gemini 2、D435i 和 Gemini 336 使用对应的 V1 平视版模型；D435i 根据当前彩色或红外图像选择光学坐标。Gemini 305 使用居中平视支架模型。

使用前应确认相机和支架的实际安装与所选 URDF 一致，再低速核对运动方向。CAD 名义位姿不是实测结果；有关模型和安装细节，参见[腕部模型说明](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md)。

## 先检查相机画面

在项目根目录启动网页服务：

```bash
python3 web/server.py
```

在同一台电脑打开 [http://127.0.0.1:8765](http://127.0.0.1:8765)。网页服务仅监听本机。选择“真机控制”，选择实际连接的相机并点击“打开摄像头”，在连接机械臂前检查画面。Gemini 预览的深度小窗可用于检查是否有深度数据，但不能作为测距或安全保护装置。

如需使用“电脑摄像头模拟”，在页面中切换模式、点击“开启摄像头”并允许浏览器访问。此模式只驱动网页模型，不控制真机，也不估计手掌深度或执行末端逆运动学。

也可以使用 Gemini 336 只运行视觉、不连接机械臂：

```bash
.venv-arm/bin/python palm_follow_grasp.py --camera gemini336 --no-arm
```

如果无画面，检查相机连接、设备权限、SDK 和是否有其他程序占用相机。网页模型不显示时，检查仓库中的 `assets/` 和 `web/lib/` 资源是否完整。

## 启动真机跟随

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>检查设备和工作区</h4>
    <p className="rebot-step-label">第 1 步</p>

关闭其他占用 CAN 的控制程序，确认相机位姿、关节零位、HOME、工作区和硬件急停。确认从当前位置到 HOME 及回零的路径均无障碍。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>选择相机与低速预设</h4>
    <p className="rebot-step-label">第 2 步</p>

在网页中选择相机，建议首次使用“低速验证”和“夹爪保持当前位置”。低速预设的跟随增益和水平增益均为 1.5，末端速度上限为 0.10 m/s；设置只作用于本次启动，不写入配置文件。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
  <div className="rebot-step-content">
    <h4>初始化真机</h4>
    <p className="rebot-step-label">第 3 步</p>

点击“初始化真机”。程序接管相机、使能机械臂并移动到 HOME；观察实际运动，到位后等待开始指令。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
  <div className="rebot-step-content">
    <h4>开始手掌跟随</h4>
    <p className="rebot-step-label">第 4 步</p>

按 `R`、点击“开始跟随”，或持续张开手掌 3 秒启动。缓慢移动手掌，先验证实际运动方向和跟随范围。选择“捏合控制”后，可在跟随启用期间用拇指和食指控制夹爪。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
  <div className="rebot-step-content">
    <h4>暂停与退出</h4>
    <p className="rebot-step-label">第 5 步</p>

按空格暂停。点击“退出并回零”或按 `Q` / `Esc` 请求停止跟随、回零并失能。初始化期间的退出请求会等初始化结束后执行；紧急情况使用硬件急停。

  </div>
</section>
</div>

手掌短时丢失时程序可能有限外推，较长时间丢失后保持；重新识别后可能自动继续运动。反馈或桌面保护锁定暂停后，需人工按 `R` 或点击恢复。网页模型及夹爪显示可能是指令或估算，不能作为实际位置的安全依据。详细操作和保护条件参见[网页说明](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md)。

## 参数和故障排查

| 情况 | 检查方法 |
| --- | --- |
| 网页能预览但无法初始化 | 检查相机型号、URDF 模型、CAN、HOME、关节零位及页面报错。 |
| 跟随方向或位置异常 | 立即暂停并检查实际相机安装方向、手眼变换、URDF 和关节零位；不要靠提高速度掩盖问题。 |
| 无法识别手掌或深度 | 检查光照、手掌是否在视野内，以及深度画面和设备连接；避免遮挡。 |
| 机械臂未响应或保护暂停 | 检查 CAN 是否被其他程序占用、设备反馈和页面提示；不要绕过反馈保护。 |

`config/follow.yaml` 管理跟随距离、增益、速度和工作空间等参数；Gemini 336 在未指定自定义配置时还会叠加 `config/follow_gemini336.yaml`。`config/grasp.yaml` 管理捏合到夹爪的映射。命令行选项可通过下列命令查看：

```bash
.venv-arm/bin/python palm_follow_grasp.py --help
```

:::warning
`--no-arm` 才是只运行视觉的选项；`--no-gripper` 和 `--no-follow` 仍会连接机械臂。修改配置或更换硬件后，应重新检查并低速验证。
:::

## 更多资源

- [项目仓库与最新 README](https://github.com/Yang-Ci/reBot_RS_Camera-Follow)
- [网页使用及数据来源](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md)
- [标定、控制与诊断技术手册](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/docs/技术手册.md)
- [集成资源及来源](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md)
