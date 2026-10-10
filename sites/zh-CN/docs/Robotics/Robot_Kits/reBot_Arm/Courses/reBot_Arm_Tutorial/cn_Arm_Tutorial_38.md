---
description: "Seeed 具身智能入门课程第八阶段：MuJoCo 与 Isaac Sim 机械臂仿真第 38 章 — 在 Isaac Sim 中运行 reBot Arm：本章讲解 reBotArm-RS 机械臂在 NVIDIA Isaac Sim 中的模型导入与基础控制。Isaac Sim使用 USD（Universal Scene Description）作为场景格式，与 MuJoCo 的 MJCF 有本质区别。关节名称映射、夹爪单位转换、通信频率和安全设计等内容…"
title: 第 38 章 - 在 Isaac Sim 中运行 reBot Arm
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_38
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_38/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 8 阶段 · 第 38 章 · 实践</span>
    <h2>38. 在 Isaac Sim 中运行 reBot Arm</h2>
    <p>
      本章讲解 reBotArm-RS 机械臂在 NVIDIA Isaac Sim 中的模型导入与基础控制。Isaac Sim使用 USD（Universal Scene Description）作为场景格式，与 MuJoCo 的 MJCF 有本质区别。关节名称映射、夹爪单位转换、通信频率和安全设计等内容已在第 39 章详细讲解，本章不再重复，只聚焦 Isaac Sim 特有的概念和操作。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

本章讲解 reBotArm-RS 机械臂在 NVIDIA Isaac Sim 中的模型导入与基础控制。Isaac Sim使用 USD（Universal Scene Description）作为场景格式，与 MuJoCo 的 MJCF 有本质区别。关节名称映射、夹爪单位转换、通信频率和安全设计等内容已在第 39 章详细讲解，本章不再重复，只聚焦 Isaac Sim 特有的概念和操作。

> 让用户掌握 reBot Arm 在 Isaac Sim 中的模型导入、Articulation 配置和基础关节控制。

## **38.1 安装和启动 Isaac Sim**

Isaac Sim 基于 NVIDIA Omniverse 平台，需要 RTX GPU。两种运行方式：

1. **桌面应用**：从 NVIDIA 官网下载 Isaac Sim 安装包，直接启动 GUI。

2. **Python 脚本**：通过 `isaaclab` 或 `isaacsim` Python 包，在终端中以 headless 方式运行。

启动后进入 Isaac Sim 界面，左侧是 Stage Tree（场景树），右侧是 Property 面板，

中间是 3D 视口。

```Bash
# Python 脚本方式启动（Isaac Sim 4.x+）
./python.sh my_script.py
```

关键点：Isaac Sim 本质是一个 Omn Kit 应用，所有功能通过 Python API（`omni.isaac.*` / `isaacsim.*`）暴露，GUI 操作和脚本操作等价。

## **38.2 认识 Isaac Sim 场景结构**

Isaac Sim 的场景以 **Stage**（USD 舞台）为根，所有物体是 **Prim**（场景原语）。

理解三个层级就够了：

```Plain Text
Stage（根）
  └── Prim（一个物体，如机械臂、地面、工作台）
        └── 子 Prim（如每个 link）
              └── Property（如 joint、mesh、material）
```

和 MuJoCo 的区别：

| 概念 | MuJoCo (MJCF) | Isaac Sim (USD) |
|-|-|-|
| 场景根 | `<mujoco>` | Stage |
| 物体 | `<body>` | Prim |
| 关节 | `<joint>` | Joint Prim（挂在 link 下） |
| 执行器 | `<actuator>` | Joint Drive（USD 属性） |
| 碰撞 | `<geom confluence>` | Collision API（挂在 mesh 上） |

MuJoCo 把执行器作为独立元素定义；Isaac Sim 把"驱动"作为关节的 Drive 属性直接挂在关节上。这是两个引擎最根本的架构差异。

## **38.3 USD 模型基础**

USD（Universal Scene Description）是 Pixar 开发的场景描述格式，Isaac Sim 用它替代URDF/MJCF。

## **USD vs URDF**

本仓库已有 RS 机械臂的 URDF 文件：

Isaac Sim 不直接使用 URDF，而是通过 URDF Importer 把它转成 USD。

| 特性 | URDF | USD |
|-|-|-|
| 格式 | XML | 二进制/文本 |
| 层叠覆盖 | 不支持 | 支持 Layer 引用和覆盖 |
| 碰撞/视觉分离 | `<visual>` / `<collision>` 标签 | Collision API / Mesh API |
| 关节驱动 | 无（需外部控制器） | Joint Drive 属性内建 |
| 物理引擎耦合 | 不耦合 | 可绑定 PhysX 属性 |

## **关键 USD 概念**

\- **Reference**：一个 USD 文件引用另一个，类似 MuJoCo 的 `<include>`。

\- **Override**：在引用之上修改属性，不改变原文件。

\- **Payload**：延迟加载的引用，大场景优化用。

\- **Variant**：同一模型的不同变体（如"有夹爪"和"无夹爪"）。

reBot Arm 的结构总结（来自 URDF 解析）：

```Plain Text
base_link
  └── joint1 (revolute, -2.8~2.8 rad) → link1
        └── joint2 (revolute, 0~3.14) → link2
              └── joint3 (revolute, 0~3.14) → link3
                    └── joint4 (revolute, -1.57~1.57) → link4
                          └── joint5 (revolute, -1.57~1.57) → link5
                                └── joint6 (revolute, -3.14~3.14) → link6
                                      └── j_gripper_end (fixed) → gripper_end
                                            ├── gripper_joint1 (prismatic, 0~0.05) → gripper_left
                                            └── gripper_joint2 (prismatic, 0~0.0715) → gripper_right
```

六个旋转关节加一个固定关节连接末端，两个棱柱关节驱动左右夹爪。

## **38.4 导入 reBot Arm USD**

## **URDF Importer**

Isaac Sim 内置 URDF Importer 工具，菜单路径：

```Plain Text
Isaac Utils → Workflows → URDF Importer
```

或者用 Python API：

```Python
from isaacsim.import_config.urdf import ImportConfig
from omni.importer.urdf import _urdf

import_config = ImportConfig()
import_config.merge_fixed_joints = False      # 保留 fixed joint 结构
import_config.make_default_prim = True
import_config.create_physics_scene = False     # 已有场景时不重复创建
import_config.fix_base = True                 # 机械臂底座固定
import_config.default_drive_type = _urdf.UrdfJointTargetType.JOINT_DRIVE_POSITION

_urdf.import_urdf(urdf_path, output_usd_path, import_config)
```

## **导入时的关键选择**

1. **merge_fixed_joints**：设为 False 保留 `j_gripper_end` 固定关节，否则会把

`gripper_end` 合并进 `link6`。保留更直观，合并更高效。

2. **fix_base**：设为 True 把 `base_link` 固定到世界，机械臂不会因为重力坠落。

3. **default_drive_type**：选择位置驱动（POSITION），导入后可以直接发目标角度。

## **网格文件路径**

URDF 引用的 STL 网格在 \[meshes_rs/\](/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_bringup/description/meshes_rs/) 目录下。导入器会自动解析`package://rebotarm_bringup/description/meshes_rs/` 前缀。如果导入失败，检查`ROS_PACKAGE_PATH` 环境变量或手动把 mesh 路径改为绝对路径。

## **38.5 检查 Link 和 Joint**

导入后在 Stage Tree 中检查结构：

```Plain Text
/rebotarm_rs          ← 根 Prim
  /base_link
    /link1
      /link2
        ...
          /gripper_end
            /gripper_left
            /gripper_right
```

原理：Isaac Sim 把 URDF 的 `<joint>` 转成 USD 的 Joint Prim。revolute 变成`PhysicsRevoluteJoint`，prismatic 变成 `PhysicsPrismaticJoint`，fixed 变成`PhysicsFixedJoint`。关节的 axis、limit 等属性直接映射到 USD 属性上。

## **38.6 检查 Visual 和 Collision**

URDF 的 `<visual>` 和 `<collision>` 在 USD 中分别用不同的 API 标注：

```Python
from pxr import UsdPhysics

# 检查碰撞体
for prim in stage.Traverse():
    if prim.HasAPI(UsdPhysics.CollisionAPI):
        print("Collision:", prim.GetPath())

# 检查可视化网格
for prim in stage.Traverse():
    if prim.IsA(UsdGeom.Mesh):
        print("Mesh:", prim.GetPath())
```

原理：Isaac Sim 不像 MuJoCo 那样用 `<geom contype="0" conaffinity="0">` 标记纯视觉体。USD 中每个 mesh 默认可渲染，只有挂了 `CollisionAPI` 的才会参与物理碰撞。这意味着同一个 mesh 可以既是视觉体又是碰撞体，也可以只做视觉。

## **38.7 配置 Articulation Root**

这是 Isaac Sim 中最重要的概念，MuJoCo 中没有直接对应物。

## **什么是 Articulation Root**

Articulation Root 告诉 PhysX："这些关节和 link 组成一个铰接系统，用 Featherstone

算法统一求解，而不是把它们当作独立刚体用约束连接。"

```Plain Text
无 Articulation Root：
  base_link ←constraint→ link1 ←constraint→ link2 ...
  每对父子 link 之间是一个独立约束求解器，关节多了会不稳定。

有 Articulation Root：
  [Articulation Root] → base_link → link1 → link2 → ...
  整条运动链用 Featherstone 算法一次性求解，数值稳定。
```

## **配置方法**

在 `base_link` 上添加 `PhysicsArticulationRootAPI`：

```Python
from pxr import UsdPhysics

base_link = stage.GetPrimAtPath("/rebotarm_rs/base_link")
UsdPhysics.ArticulationRootAPI.Apply(base_link)
```

原理：Articulation Root 必须放在运动链的根 link 上。对 reBot Arm 来说就是*`base_link`*。如果放在错误的 link 上，PhysX 会把运动链截断，下游关节失去驱动。URDF Importer 通常自动添加 Articulation Root，但如果手动编辑过 USD 需要检查它是否还在。

## **38.8 配置关节 Drive**

## Drive 的原理

MuJoCo 用 *`<motor>`* 或 *`<position>`* 执行器，驱动力矩由 Python 外部计算。Isaac Sim 的 Drive 是**关节内建的 PD 控制器**，力矩在 PhysX 内部计算：

```Bash
tau = kp * (target_pos - current_pos) + kv * (target_vel - current_vel) + feedforward
#这和 MuJoCo physics 模式的 PD 控制公式几乎相同，区别在于 Isaac Sim 把 PD 环放在引擎内部，而 MuJoCo 在 Python 中计算后写入 `data.ctrl`。
```

## **配置方法**

```Python
from pxr import UsdPhysics

joint_path = "/rebotarm_rs/base_link/link1/joint1"
joint = UsdPhysics.Joint.Get(stage, joint_path)

drive = UsdPhysics.DriveAPI.Get(joint, "angular")  # 旋转关节用 angular，棱柱用 linear
drive.GetTargetPositionsAttr().Set([0.0])    # 目标角度
drive.GetTargetVelocitiesAttr().Set([0.0])  # 目标速度
drive.GetStiffnessAttr().Set(80.0)          # kp
drive.GetDampingAttr().Set(5.0)             # kv
drive.GetMaxForceAttr().Set(36.0)           # 力矩上限
```

## **与真机增益的对应**

Isaac Sim Drive 的 `Stiffness` 和 `Damping` 对应真机 MIT 模式的 `kp` 和 `kd`。

可以直接使用真机配置值（见 [rebotarm_hardware.yaml]/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_bringup/config/rebotarm_hardware.yaml)）：

```YAML
# 真机 RS MIT 增益
mit_kp: [80.0, 150.0, 150.0, 50.0, 50.0, 50.0]
mit_kd: [5.0, 10.0, 10.0, 5.0, 4.0, 4.0]
```

把这些值填入各关节的 Drive 属性，仿真行为就接近真机。

## **38.9 设置关节刚度和阻尼**

刚度和阻尼调参原则：

1. **刚度太低**：关节软，目标角度到位慢，负载下下垂明显。

2. **刚度太高**：关节过硬，可能振荡，PhysX 数值不稳定。

3. **阻尼太低**：到达目标后振荡，overshoot 明显。

4. **阻尼太高**：运动迟缓，像在粘液中运动。

推荐起始值（对应真机）：

| 关节 | Stiffness (kp) | Damping (kd) | Max Force |
|-|-|-|-|
| joint1 | 80 | 5 | 36 |
| joint2 | 150 | 10 | 36 |
| joint3 | 150 | 10 | 36 |
| joint4 | 50 | 5 | 14 |
| joint5 | 50 | 4 | 14 |
| joint6 | 50 | 4 | 14 |

调参策略：先设低值确保不振荡，逐步提高刚度直到响应足够快，再提高阻尼消除残余振荡。不要一开始就设高值。

## **38.10 配置夹爪联动**

## **Isaac Sim 的方式**

Isaac Sim 没有 equality 约束，用 **Mimic Joint** 实现联动。URDF 的`<mimic>` 标签在导入时会被转换：

```Python
# URDF 中的 mimic（如果 URDF 没有写，需要手动在 USD 中添加）
# <mimic joint="gripper_joint1" multiplier="1.43" offset="0"/>
```

当前 RS URDF 中没有 `<mimic>` 标签，所以需要在导入后手动配置联动。两种方法：

**方法一：PhysX Mimic Joint API**

```Python
from pxr import UsdPhysics

left_joint = UsdPhysics.Joint.Get(stage, ".../gripper_joint1")
UsdPhysics.MimicAPI.Apply(left_joint)
mimic = UsdPhysics.MimicAPI(left_joint)
mimic.GetReferenceJointRel().SetTargetPath(".../gripper_joint2")
mimic.GetMultiplierAttr().Set(1.43)  # 0.0715 / 0.05 = 1.43
```

**方法二：Python 控制时同步发命令**

如果不用 Mimic API，直接在控制代码中把同一个目标同时发给两个夹爪关节：

```Python
# 左右夹爪行程不同：left 0-0.05m, right 0-0.0715m
# 发命令时按各自行程比例缩放
left_target = target_ratio * 0.05
right_target = target_ratio * 0.0715
```

原理：MuJoCo 的 equality 是物理引擎层面的硬约束，Isaac Sim 的 Mimic API 也是引擎层面的联动，方法二则是控制层面的软件联动。方法一更稳定，方法二更灵活。

## **38.11 添加地面和工作台**

## **地面**

Isaac Sim 自带地面生成工具：

```Python
from isaacsim.core.api import World

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()  # 添加 Z=0 地面碰撞面
```

`add_default_ground_plane()` 会创建一个带 CollisionAPI 的平面 Prim，摩擦系数默认

0.5。MuJoCo 中地面是 `<geom type="plane"/>`，Isaac Sim 中是一个带碰撞的平面 mesh。

## **工作台**

添加一个 Box 作为工作台：

```Python
from isaacsim.core.api.objects import DynamicCuboid

table = DynamicCuboid(
    prim_path="/World/table",
    name="table",
    position=np.array([0.5, 0.0, 0.4]),  # 桌面高度 0.4m
    scale=np.array([0.6, 0.6, 0.02]),     # 60cm x 60cm x 2cm
    color=np.array([0.5, 0.4, 0.3]),
)
```

## **简单任务物体**

```Python
red_cube = DynamicCuboid(
    prim_path="/World/red_cube",
    name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),   # 3cm 立方体
    color=np.array([1.0, 0.0, 0.0]),
)
```

原理：Isaac Sim 把碰撞和动力学属性直接挂在物体 Prim 上。`DynamicCuboid` 会自动创建碰撞体和刚体 API；`FixedCuboid` 只创建碰撞体不创建刚体。这比 MuJoCo 要在XML 中分别写 `<geom contype>` 和 `<body>` 更简洁。

## **38.12 使用 Python 控制机械臂**

## **Articulation API**

Isaac Sim 用 `Articulation` 类封装整个机械臂的控制接口，不需要逐关节操作：

```Python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation

world = World()
world.scene.add_default_ground_plane()

robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# 获取关节信息
num_joints = robot.num_joints
joint_names = robot.get_dof_names()
```

原理：`Articulation` 内部调用 PhysX 的 Articulation API，一次获取/设置所有关节状态。它对应 MuJoCo 中通过 `data.qpos` 和 `data.ctrl` 数组操作关节的方式，但封装了一层 Python 对象接口。

## **实践 Demo**

## **Demo 1：加载 reBot Arm USD**

**原理**：Isaac Sim 加载 USD 文件时会构建 Stage 树，PhysX 为带有 Articulation Root的 Prim 子树创建一个铰接体。视觉 mesh 关联到渲染层，带 CollisionAPI 的 mesh关联到物理层。

```Python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation
import numpy as np

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()       # 地面

# 添加工作台
from isaacsim.core.api.objects import FixedCuboid
table = FixedCuboid(
    prim_path="/World/table", name="table",
    position=np.array([0.5, 0.0, 0.4]),
    scale=np.array([0.6, 0.6, 0.02]),
)

# 添加任务物体
from isaacsim.core.api.objects import DynamicCuboid
cube = DynamicCuboid(
    prim_path="/World/red_cube", name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),
    color=np.array([1.0, 0.0, 0.0]),
)

# 加载机械臂（假设 USD 已导入）
robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# 验证加载结果
print("关节数量:", robot.num_joints)
print("关节名称:", robot.get_dof_names())
```

**预期结果**：3D 视口中显示机械臂模型立在地面工作台上，红色立方体放在桌面。Stage Tree 中能看到 base_link 到 gripper_right 的完整层级。

## **Demo 2：关节状态读取**

**原理**：`Articulation` 每帧从 PhysX 读取铰接体的关节状态数组。位置和速度是PhysX 内部求解器的输出，不是从外部传感器读的——这和 MuJoCo 的`data.qpos` / `data.qvel` 一样是仿真状态。

```Python
world.step(render=True)  # 先推进一帧物理

# 关节位置（弧度）
positions = robot.get_joint_positions()
print("关节位置:", positions)

# 关节速度
velocities = robot.get_joint_velocities()
print("关节速度:", velocities)

# 关节名称和数量
joint_names = robot.get_dof_names()
print("关节名称:", joint_names)
print("关节数量:", robot.num_joints)

# 末端执行器位姿（世界坐标系）
ee_position, ee_orientation = robot.get_local_pose()  # 末端 link 位姿
```

**原理说明**：`get_joint_positions()` 返回的是一个 NumPy 数组，顺序与`get_dof_names()` 一致。Articulation Root 决定了哪些关节属于这个铰接体，不在铰接体内的关节读不到。

## **Demo 3：关节位置控制**

**原理**：设置 Drive 的目标位置后，PhysX 内部的 PD 控制器每帧计算力矩并驱动关节。你只需要发一次目标值，引擎自己完成到达过程。这和 MuJoCo physics 模式中用 Python 每帧计算 PD 力矩再写入 `data.ctrl` 不同——Isaac Sim 把 PD 环放到了引擎内部。

```Python
# 目标姿态（弧度）：所有关节归零
target_positions = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])

# 方法一：通过 Drive API 设置目标
robot.set_joint_position_targets(target_positions)

# 推进仿真，让 PD 控制器驱动到位
for _ in range(100):
    world.step(render=True)

# 检查是否到位
current = robot.get_joint_positions()
error = np.abs(current[:6] - target_positions)
print("到位误差:", error)
```

也可以发一个非零目标让机械臂运动到指定姿态：

```Python
wave_pose = np.array([0.0, 0.5, 1.0, 0.0, 0.5, 0.0])  # 举臂挥手
robot.set_joint_position_targets(wave_pose)
for _ in range(200):
    world.step(render=True)
```

**原理说明**：`set_joint_position_targets` 只更新 Drive 的目标位置属性，不直接

施力。实际力矩由 `Stiffness` 和 `Damping` 决定，到达速度取决于这两个参数和

`Max Force`。

## **Demo 4：夹爪控制**

**原理**：夹爪的两个棱柱关节（gripper_joint1 和 gripper_joint2）行程不同（0.05m 和 0.0715m），但需要同步运动。原理是把同一个开合比例同时映射到两个关节的目标位置。

```Python
GRIPPER_LEFT_RANGE = 0.05      # gripper_joint1 行程
GRIPPER_RIGHT_RANGE = 0.0715   # gripper_joint2 行程

def set_gripper(robot, open_ratio: float):
    """open_ratio: 0=完全闭合, 1=完全张开"""
    open_ratio = max(0.0, min(1.0, open_ratio))
    left_target = open_ratio * GRIPPER_LEFT_RANGE
    right_target = open_ratio * GRIPPER_RIGHT_RANGE

    # 假设夹爪关节排在臂关节之后
    joint_names = robot.get_dof_names()
    arm_joints = 6  # 前 6 个是臂关节

    positions = robot.get_joint_positions()
    positions[arm_joints]     = left_target    # gripper_joint1
    positions[arm_joints + 1] = right_target   # gripper_joint2
    robot.set_joint_position_targets(positions)

    for _ in range(50):
        world.step(render=True)

# 打开夹爪
set_gripper(robot, 1.0)

# 闭合夹爪
set_gripper(robot, 0.0)

# 半开
set_gripper(robot, 0.5)
```

**原理说明**：这里用控制层面的软件联动代替物理约束。如果配置了 Mimic API（38.10 节方法一），则只需要控制一个关节，另一个自动跟随。当前示例用软件同步更直观，适合教学。

**双指同步的要点**

左右夹爪行程不同但运动方向相同（都向外张开），所以用同一个 `open_ratio` 缩放

各自的行程上限即可。如果两个关节的 axis 方向相反（一个正一个负），还需要取反，

但 reBot Arm 的 URDF 中两个夹爪关节 axis 都是 `0 0 1`，方向一致。

## **小结**

Isaac Sim 与 MuJoCo 在概念上的核心差异：

1. **模型格式**：USD 替代 MJCF，支持层叠引用和覆盖。
2. **铰接体**：Articulation Root 是 Isaac Sim 特有的概念，把整条运动链交给   Featherstone 算法统一求解。MuJoCo 没有这个概念，所有 body 天然在一个树中。
3. **驱动方式**：Drive 是关节内建的 PD 控制器，在 PhysX 内部计算力矩。MuJoCo 的 `<motor>` 执行器由 Python 外部计算力矩再写入 `data.ctrl`。
4. **夹爪联动**：Isaac Sim 用 Mimic API 或软件同步，MuJoCo 用 equality 约束。
5. **碰撞标注**：USD 用 CollisionAPI 区分碰撞体和纯视觉体，MuJoCo 用`contype` / `conaffinity` 属性。

掌握这些差异后，第 39 章中关于关节映射、单位转换、通信和安全设计的内容可以直接迁移到 Isaac Sim 场景中使用。

---

</div>
