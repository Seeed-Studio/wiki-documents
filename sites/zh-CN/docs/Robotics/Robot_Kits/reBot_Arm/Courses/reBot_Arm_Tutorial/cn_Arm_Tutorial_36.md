---
description: "Seeed 具身智能入门课程第八阶段：MuJoCo 与 Isaac Sim 机械臂仿真第 36 章 — 在 MuJoCo 中运行 reBot Arm：第 35 章讲了仿真理论，这一章动手。目标很简单：让 reBot Arm 在 MuJoCo 里跑起来，看到它动，理解模型、关节和控制命令之间的关系。"
title: 第 36 章 - 在 MuJoCo 中运行 reBot Arm
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_36
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_36/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 8 阶段 · 第 36 章 · 实践</span>
    <h2>36. 在 MuJoCo 中运行 reBot Arm</h2>
    <p>
      第 35 章讲了仿真理论，这一章动手。目标很简单：让 reBot Arm 在 MuJoCo 里跑起来，看到它动，理解模型、关节和控制命令之间的关系。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

第 35 章讲了仿真理论，这一章动手。目标很简单：让 reBot Arm 在 MuJoCo 里跑起来，看到它动，理解模型、关节和控制命令之间的关系。

教学目的：让用户完成 reBot Arm 在 MuJoCo 中的第一次运行，并理解机器人模型、

关节和控制命令之间的关系。

## **36.1 安装 MuJoCo 开发环境**

MuJoCo 的 Python 绑定通过 pip 安装，不需要编译 C 库。reBot Arm 的工作空间

使用虚拟环境（`.venv`）管理 Python 依赖，MuJoCo 就装在里面。

**方式一：使用工作空间自带虚拟环境（推荐）**

```Bash
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"

#DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"
```

如果输出类似 `3.10.0`，说明 MuJoCo 已经就绪。`source_rebotarm_env.sh` 会自动加载 ROS2、虚拟环境和 PYTHONPATH，后续所有命令都需要先 source 它。

**方式二：手动安装**

如果你不在工作空间的虚拟环境中，可以直接 pip 安装：

```Bash
pip3 install mujoco
#MuJoCo 3.x 是纯 pip 包，自带二进制库，不需要额外安装系统依赖。安装后即可使用`import mujoco` 和 `mujoco.viewer`。
```

## 验证mujoco安装

```Bash
python3 -c "
import mujoco
print('MuJoCo version:', mujoco.version)
print('GPU rendering:', mujoco.GL_CONTEXT_BACKENDS if hasattr(mujoco, 'GL_CONTEXT_BACKENDS') else 'auto')
"
```

## 预期结果

- **成功**：若环境配置正确，你将看到类似以下输出（版本号可能不同）：

```Bash
MuJoCo version: 3.2.0
GPU rendering: ['egl', 'glfw']
```

- 或 `GPU rendering: auto`（取决于编译选项）。
- **失败**：如果 `mujoco` 未安装或路径未配置，会抛出 `ModuleNotFoundError`，说明安装有问题。

## **36.2 认识 MJCF 模型结构**

MJCF（MuJoCo XML）是 MuJoCo 的原生模型格式。一个 MJCF 文件由以下顶层元素组成：

| 元素 | 作用 | reBot Arm 中的体现 |
|-|-|-|
| `<compiler>` | 编译选项：角度单位、坐标系、mesh 路径 | `angle="radian" coordinate="local" meshdir="../meshes"` |
| `<option>` | 物理参数：时间步长、重力、求解器 | `timestep="0.001" gravity="0 0 -9.81"` |
| `<visual>` | 渲染参数：灯光、雾、全局视角 | `headlight`、`azimuth="135"` |
| `<asset>` | 资源声明：mesh、材质、纹理 | 10 个 STL mesh + 多种材质 |
| `<default>` | 默认值：关节阻尼、geom 碰撞 | `damping="0.8" armature="0.01"` |
| `<worldbody>` | 世界体：地面、灯光、相机、机器人 | 桌面、物体、机械臂运动链 |

reBot Arm 的 MJCF 文件位于：

```Bash
RS 版本（rebotarm_mujoco_rs 包）：
src/rebotarm_mujoco_rs/models/
  rs_arm.xml                   # 物理模型（STL mesh + 完整惯性 + 7 个执行器）
  rs_grasp_scene.xml            # 抓取场景（含物体）
DM 版本（rebotarm_mujoco 包）：
src/rebotarm_mujoco/models/
  rebotarm_b601_stl.xml        # 物理模型（STL mesh + 完整惯性）
  rebotarm_b601_kinematic.xml  # 运动学模型（简化几何 + 无惯性）
  rebotarm_b601_stl.xml         # 物理模型（STL mesh + 完整惯性，含场景物体）
  rebotarm_b601_colored.xml     # 彩色模型（多材质 STL）
  simple_rebotarm.xml           # 简化模型（基本几何体）
```

两个模型共享相同的运动学结构（关节名、轴、限位），区别在于：

| 特性 | STL 模型 | 运动学模型 |
|-|-|-|
| Visual | STL mesh（精细） | capsule/sphere/cylinder（简化） |
| Inertial | 每个连杆都有 | 大部分省略 |
| Collision | 夹爪有 box collision | 无 collision |
| timestep | 0.001 s | 0.002 s |
| 用途 | 物理仿真、real2sim | 轻量可视化 |

本章使用 STL 模型，因为它视觉效果好且支持物理仿真。

## **36.3 将 reBot Arm 模型导入 MuJoCo**

## **编译 ROS2 包**

```Bash
#RS：
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install 
source install/setup.bash

#DM：
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install 
source install/setup.bash
```

编译后，MuJoCo 包的 share 目录会包含模型文件和 STL mesh：

```Bash
# 验证 share 目录（RS）
ros2 pkg prefix rebotarm_mujoco_rs
# 输出: ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/rebotarm_mujoco_rs
ls $(ros2 pkg prefix rebotarm_mujoco_rs)/share/rebotarm_mujoco_rs/models/
# meshes/  rs_arm.xml  rs_grasp_scene.xml

# 验证 share 目录（DM）
ros2 pkg prefix rebotarm_mujoco
ls $(ros2 pkg prefix rebotarm_mujoco)/share/rebotarm_mujoco/models/
# rebotarm_b601_stl.xml  rebotarm_b601_kinematic.xml  rebotarm_b601_colored.xml  simple_rebotarm.xml
```

**通过 launch 启动**

```Bash
#RS：
ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py use_viewer:=true
#DM：
ros2 launch rebotarm_mujoco real2sim.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36cn/ch36-01cn.jpg" alt="" />
</div>

## **通过 ROS2 launch 启动（带完整环境）**

```Bash
#RS：
./scripts/start_rs_sim.sh
#DM：
./rebotarm start sim
或直接调用脚本：
~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/scripts/start_rebot_mujoco_all.sh
```

## **通过 ROS2 关节滑块 GUI 控制**

reBot Arm 提供了一个 Tkinter 关节滑块 GUI（joint_slider_gui.py），可以用图形界面控制每个关节：

## 1. 先启动 sim

```Bash
#1. 先启动 sim(完整物理仿真)
#RS：
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
#DM：
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim
```

## 2. 另开终端

```Bash
#滑块 GUI 定义了 7 个关节控制：
#RS：
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/setup.bash
ros2 launch rebotarm_mujoco_rs joint_slider_gui.launch.py

#DM：
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/install/setup.bash
ros2 launch rebotarm_mujoco joint_slider_gui.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36cn/ch36-02cn.jpg" alt="" />
</div>

## **FAQ**

**Q1: MuJoCo viewer 打开后是黑屏或崩溃怎么办？**

通常是 GPU 渲染问题。尝试设置渲染后端：

```Bash
export MUJOCO_GL=egl    # 使用 EGL（推荐，无需显示器）
export MUJOCO_GL=glfw    # 使用 GLFW（需要桌面环境）
export MUJOCO_GL=osmesa  # 使用软件渲染（最慢但最兼容）
```

在无显示器的服务器上（如 SSH），使用 `egl` 或 `osmesa`。

**Q2: 加载 MJCF 时报 "mesh file not found" 怎么办？**

MJCF 中 `meshdir="../meshes"` 是相对路径。如果你从其他目录运行脚本，mesh

文件可能找不到。解决方法：

1. 编译 ROS2 包后从 share 目录加载（推荐）：ros2 pkg prefix rebotarm_mujoco_rs（RS）或 ros2 pkg prefix rebotarm_mujoco（DM）
2. 或确保从 models/ 目录运行脚本（该目录的上级有 meshes/）
3. RS 的 mujoco_sync.py 会自动解析 mesh 路径；DM 需从 install 目录加载

**Q3: 关节滑块 GUI 拖动后 MuJoCo 中的机械臂不动怎么办？**

检查三个环节：

1. fake 驱动是否在运行？RS: ros2 topic echo /rebotarm_rs/joint_states --once；DM: ros2 topic echo /rebotarm/joint_states --once
2. sync 节点是否订阅了正确的话题？RS 默认订阅 /rebotarm_rs/joint_states，DM 默认订阅 /rebotarm/joint_states
3. viewer 是否打开？终端应该显示 sync 节点就绪

如果话题名不匹配，用参数指定：

```Bash
RS: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm_rs/joint_states ./scripts/start_rs_sim.sh
DM: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm/joint_states ./rebotarm start sim
```

**Q4: 夹爪只动一边怎么办？**

RS: 检查 `equality `约束是否正确配置（`joint_left` 和 `joint_right `应跟随 `joint7`）。

DM: 检查 `finger_left` 和 `finger_right` 是否都收到了命令。如果只发` finger_left `而没有 `finger_right` 的` target`，只有一侧会动。

**Q5: 物理抓取模式下物体飞走了怎么办？**

PD 参数可能太激进。尝试降低 `arm_kp` 和 `arm_kd`：

```Bash
RS: ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py simulation_mode:=physics arm_torque_limit:=10.0
DM: ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py arm_torque_limit:=10.0
```

力矩限幅从默认的 30.0 降到 10.0，可以防止关节力矩过大导致物体被弹飞。也可以降低 `control_hz` 来减少控制环的激进度。

---

</div>
