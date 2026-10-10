---
description: "Seeed 具身智能入门课程第八阶段：MuJoCo 与 Isaac Sim 机械臂仿真第 37 章 — MuJoCo 中的运动学与轨迹控制：机器人控制有两大坐标系，理解它们的区别是一切运动规划的起点。"
title: 第 37 章 - MuJoCo 中的运动学与轨迹控制
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_37
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_37/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 8 阶段 · 第 37 章 · 理论与实践</span>
    <h2>37. MuJoCo 中的运动学与轨迹控制</h2>
    <p>
      机器人控制有两大坐标系，理解它们的区别是一切运动规划的起点。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

>    第 36 章让机械臂在 MuJoCo 里动了起来——但那只是"拖滑块"级别的控制。这一章往上走一层：从"关节角度"到"空间位姿"，从"瞬间跳转"到"平滑轨迹"。教学目的：让用户在安全的仿真环境中练习正运动学、逆运动学和轨迹控制，并观察不同控制方法的效果。

## 37.1 关节空间和笛卡尔空间

机器人控制有两大坐标系，理解它们的区别是一切运动规划的起点。

### **关节空间（Joint Space）**

你直接告诉每个关节"转到多少度"。6 自由度机械臂的关节空间是 6 维的，每个维度对应一个电机的角度。

```Plain Text
关节空间目标 = [j1, j2, j3, j4, j5, j6]  # 单位：弧度
```

优点：直接、无歧义、不存在不可达问题（只要在限位内）。

缺点：你不知道末端去了哪里——需要正运动学来算。

### **笛卡尔空间（Cartesian Space）**

你告诉末端执行器"去到空间中的哪个点"。用 x, y, z 描述位置，

用旋转矩阵或四元数描述姿态。

```Plain Text
笛卡尔目标 = [x, y, z, qx, qy, qz, qw]  # 位置 + 姿态
```

优点：直观——"把末端移到桌面上方 30cm 处"。

缺点：需要逆运动学把位姿翻译成关节角，可能无解或多解。

| 对比维度 | 关节空间 | 笛卡尔空间 |
|-|-|-|
| 描述量 | 6 个关节角 | 3 位置 + 3 姿态 |
| 是否需要求解 | 不需要，直接发送 | 需要 IK 求解 |
| 典型接口 | `/rebotarm/follow_joint_trajectory` | `/rebotarm/move_to_pose` |
| 奇异点风险 | 无 | 有（某些姿态 Jacobian 矩阵退化） |
| 适用场景 | 关节回零、预设姿态 | 抓取、避障、空间路径 |

> 一句话：关节空间是"机械臂的母语"，笛卡尔空间是"人类的语言"，运动学就是两者之间的翻译官。

## 37.2 读取机械臂末端位姿

在 MuJoCo 中，末端位姿通过 site（站点）对象获取。reBot Arm 在 MJCF 中

定义了一个名为 `tcp` 的 site，固定在夹爪末端：

```XML
<site name="tcp" pos="-0.105 0 0" size="0.008" rgba="1 0.34 0.16 1"/>
```

`tcp` 是 Tool Center Point 的缩写——工具中心点，即夹爪抓取物体的那个点。`pos="-0.105 0 0"` 表示它沿 X 轴向前 10.5cm，`size="0.008"` 是显示半径。MuJoCo 在每次 `mj_forward` 或 `mj_step` 后，会把所有 site 的世界坐标写入 `data.site_xpos` 和 `data.site_xmat`：

```Python
import mujoco
import numpy as np

model = mujoco.MjModel.from_xml_path("rebotarm_b601_stl.xml")
data = mujoco.MjData(model)

# 写入关节角度
data.qpos[:] = [0, -0.5, -1.0, 0, 0, 0, 0]
mujoco.mj_forward(model, data)

# 读取 TCP 位姿
tcp_id = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_SITE, "tcp")
position = data.site_xpos[tcp_id]          # [x, y, z]
rotation = data.site_xmat[tcp_id].reshape(3, 3)  # 3x3 旋转矩阵

print(f"TCP position: {position}")
print(f"TCP rotation:\n{rotation}")
```

`site_xpos` 是长度为 3 的数组（世界坐标系下的 xyz），`site_xmat` 是长度为 9 的数组（展平的 3x3 旋转矩阵），需要 reshape。

## 37.3 正运动学计算

正运动学（Forward Kinematics, FK）就是"已知关节角，求末端位姿"。reBot Arm 的仿真代码中，FK 的实现非常直接——不调用任何外部 IK 库，完全依赖 MuJoCo 自身的运动学引擎。核心方法在

`sim_task_server.py` 的 `_fk_pose` 中。可参考 https://docs.mujoco.cn/en/stable/APIreference/APIfunctions.html

关键点：

| 步骤 | 代码 | 作用 |
|-|-|-|
| 重置状态 | `qpos[:] = base_qpos` | 清除上次的关节状态，避免残留 |
| 写入关节角 | `qpos[qpos_addr] = ...` | 按 MuJoCo 内部地址写入每个关节 |
| 前向计算 | `mj_forward` | 更新运动学，不积分物理 |
| 读取位姿 | `site_xpos / site_xmat` | 从 TCP site 取末端位姿 |

注意这里用的是 `mj_forward` 而不是 `mj_step`。`mj_forward` 只做正向运动学计算（更新 site 坐标、Jacobian 等），不做物理积分——对于纯运动学计算来说更快也更干净。

`ros_to_mujoco_position` 方法处理 ROS 关节角到 MuJoCo 关节角的映射（包括 scale 和 offset），确保两边坐标系一致。

## 37.4 逆运动学求解

### 逆运动学（Inverse Kinematics, IK）

IK就是"已知末端位姿，求关节角"——这是笛卡尔空间控制的核心。reBot Arm 没有使用解析 IK（闭式解），而是用数值方法——基于 Jacobian 的阻尼最小二乘法（Damped Least Squares, DLS）。

**为什么不用解析解？**

6 自由度机械臂的解析 IK 需要特定的几何条件（如球形手腕），且推导复杂、容易出错。数值方法虽然不保证全局最优，但通用性强、代码简洁、对任意构型都适用。

### **DLS 算法原理**

标准 IK 的核心方程是 `J * dq = dx`，其中 J 是 Jacobian 矩阵，dx 是末端位姿误差，dq 是关节角修正量。直接求逆 `dq = J^(-1) * dx`在奇异点附近会爆炸（J 矩阵不可逆）

DLS 的做法是加一个阻尼项：

```Plain Text
dq = J^T * (J * J^T + lambda^2 * I)^(-1) * dx
```

其中 lambda 是阻尼系数。lambda 越大越稳定但收敛慢，lambda 越小越精准但容易震荡。reBot Arm 的 IK 参数（定义在 `sim_task_server.py` 的 `declare_parameter` 中）：

| 参数 | 默认值 | 含义 |
|-|-|-|
| `ik_iterations` | 360 | 最大迭代次数 |
| `ik_tolerance` | 0.004 | 位置收敛阈值（4mm） |
| `ik_damping` | 0.035 | DLS 阻尼系数 lambda |
| `ik_orientation_weight` | 0.75 | 姿态误差权重 |
| `ik_orientation_tolerance` | 0.07 | 姿态收敛阈值 |

## 37.5 目标位置和目标姿态

笛卡尔空间的目标分为两种粒度：

| 目标类型 | 包含信息 | IK 行为 |
|-|-|-|
| 纯位置 | [x, y, z] | 只优化末端坐标，姿态自由 |
| 位置 + 姿态 | [x, y, z, qx, qy, qz, qw] | 同时优化位置和姿态 |

在 ROS2 接口中，目标通过 `Pose` 消息传递。`_pose_to_matrix_if_requested`方法负责判断：如果四元数接近 `[1, 0, 0, 0]`（单位四元数，即无旋转），返回 `None`，IK 只解位置；否则转换为旋转矩阵传给 IK 求解器。

实际使用中，纯位置模式更常用——抓取任务通常不关心末端朝向，只要到达目标点即可。需要精确姿态的场景（如装配、插拔）才开启姿态约束。

## 37.6 关节插值

有了起点和终点的关节角，怎么让机械臂"平滑地"从 A 走到 B？

最简单的方法是线性插值：

```Plain Text
q(t) = q0 + (q1 - q0) * ratio       # ratio 在 [0, 1] 之间
```

但线性插值在起点和终点处速度突变（从 0 瞬间跳到最大速度），会导致机械臂抖动。

reBot Arm 使用的是 smoothstep 插值（三次 Hermite），在`_execute_joint_path` 方法中：

```Python
ratio = self._clamp((now - t0) / (t1 - t0), 0.0, 1.0)
eased = ratio * ratio * (3.0 - 2.0 * ratio)
q = q0 + (q1 - q0) * eased
```

这个函数在 `ratio=0` 和 `ratio=1` 处的导数为零，意味着起点和终点

速度为零——机械臂平滑起步、平滑停止。

| 插值方法 | 公式 | 起停速度 | 加速度连续 | 适用场景 |
|-|-|-|-|-|
| 线性 | `ratio` | 突变 | 否 | 简单测试 |
| Smoothstep | `ratio^2 * (3 - 2*ratio)` | 零 | 否 | 通用平滑运动 |
| Minimum Jerk | `10*r^3 - 15*r^4 + 6*r^5` | 零 | 是 | 高精度轨迹 |

## 37.7 线性轨迹

线性轨迹指的是末端在笛卡尔空间中走直线。实现方式有两种：

### **方式一：关节空间插值（非笛卡尔直线）**

直接在关节空间做插值——末端实际走的是弧线，不是直线。reBot Arm 的 `_execute_joint_path` 就是这种方式。简单、快速、不会遇到奇异点，但末端路径不可预测。

### **方式二：笛卡尔空间直线**

在笛卡尔空间中线性插值末端位姿，每一步用 IK 转回关节角：

```Python
for t in np.linspace(0, 1, n_steps):
    target_pos = start_pos + (end_pos - start_pos) * t
    q = solve_ik(target_pos, current_q)
    publish(q)
```

这种方式末端走的是真正的直线，但每一步都要解 IK，计算量大，且可能遇到奇异点导致 IK 不收敛。

| 对比维度 | 关节空间插值 | 笛卡尔空间直线 |
|-|-|-|
| 末端路径 | 弧线 | 直线 |
| 计算量 | 低（直接插值） | 高（每步 IK） |
| 奇异点风险 | 无 | 有 |
| reBot Arm 默认 | 是 | 否 |

## 37.8 Minimum Jerk 轨迹

Minimum Jerk 是一种最优轨迹规划方法，最小化"加加速度"（Jerk，即加速度的导数）的积分。它的公式是：

```Plain Text
s(t) = 10*t^3 - 15*t^4 + 6*t^5       # t 在 [0, 1] 之间
```

特点：

- 起点和终点的位置、速度、加速度都为零
- 加速度连续，没有突变
- 运动极其平滑，适合高精度任务

reBot Arm 当前使用 smoothstep（三次 Hermite），它在平滑度和计算量之间取得了很好的平衡。如果需要更高精度，可以替换为 Minimum Jerk：

```Python
def minimum_jerk(ratio):
    return 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5

# 替换 _execute_joint_path 中的 eased
eased = minimum_jerk(ratio)
```

## 37.9 轨迹控制频率

轨迹执行的核心参数是控制频率（`command_hz`），即每秒向仿真发送多少次关节指令。

reBot Arm 的默认配置：

| 参数 | 默认值 | 含义 |
|-|-|-|
| `command_hz` | 60 Hz | 轨迹指令发送频率 |
| `max_joint_speed` | 1.4 rad/s | 关节最大速度限制 |
| `record_hz` | 30 Hz | 录制采样频率 |

`_execute_joint_path` 的核心循环：

```Python
period = 1.0 / self.command_hz  # 1/60 = 0.0167s

while True:
    now = time.monotonic() - started
    ratio = clamp((now - t0) / (t1 - t0), 0.0, 1.0)
    eased = ratio * ratio * (3.0 - 2.0 * ratio)
    q = q0 + (q1 - q0) * eased
    self._publish_joint_targets(q)
    if ratio >= 1.0:
        break
    time.sleep(period)
```

60Hz 意味着每 16.7ms 发送一次指令。对于 6 自由度机械臂来说，这个频率足够平滑——人眼在 30Hz 以上就感知不到跳变了。但要注意：`command_hz` 是轨迹层的频率，不是物理层的。物理仿真

（`mujoco_physics_grasp.py`）的 `control_hz=500`，即每 2ms 做一次PD 力矩控制。两者是不同层级的控制环：

| 控制层级 | 频率 | 负责模块 | 指令类型 |
|-|-|-|-|
| 物理控制环 | 500 Hz | `mujoco_physics_grasp` | PD 力矩 |
| 轨迹控制环 | 60 Hz | `sim_task_server` | 关节位置目标 |
| 状态发布环 | 30 Hz | `real2sim_sync` | JointState |
| 录制采样环 | 30 Hz | `sim_task_server` | CSV 记录 |

## 37.10 关节范围和速度限制

### **关节范围**

reBot Arm 的 6 个关节和夹爪的限位定义在 MJCF 中 IK 求解时，每步更新都会通过 `clamp_ros` 方法将关节角限制在范围内：

```Python
def ros_to_mujoco_position(self, value: float) -> float:
    mapped = float(value) * self.scale + self.offset
    if self.lower is not None:
        mapped = max(mapped, self.lower)
    if self.upper is not None:
        mapped = min(mapped, self.upper)
    return mapped
```

### **速度限制**

轨迹执行时，每个关节指令都附带速度上限 `vlim`：

```Python
msg = JointMotorCmd()
msg.use_pos = True
msg.use_vlim = True
msg.vlim = float(self.max_joint_speed)  # 1.4 rad/s
```

`max_joint_speed=1.4` rad/s 约 80 deg/s。这个值限制了关节的角速度上限，防止机械臂以危险速度运动。

轨迹时长由起点和终点的关节差和速度上限决定：

```Plain Text
最短时间 = max(|q1[i] - q0[i]| / max_joint_speed)  对每个关节 i
```

例如 joint2 从 0 到 -1.57 rad，最短时间 = 1.57 / 1.4 = 1.12 秒。

如果指定的 `duration` 小于最短时间，机械臂会以 `max_joint_speed` 全速运动，可能在终点前还没到位就结束了——所以 `duration` 要留足余量。

### Demo 1：正运动学

目标：输入一组关节角，计算并显示末端（TCP）位姿。这个 Demo 不需要启动 ROS2，

纯 MuJoCo Python 调用，验证关节角到末端位置的映射对不对。

```Python
DM：
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 demo1_fk.py
RS：
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 demo1_fk.py
```

预期输出类似：

```Plain Text
模型: DM (rebotarm_b601_stl.xml)

--- 姿态 1 ---
关节角: [0, 0, 0, 0, 0, 0]
TCP 位置: x=0.1553, y=0.0000, z=0.1917
TCP 旋转矩阵:
  [1.0000 0.0000 -0.0000]
  [0.0000 1.0000 0.0001]
  [0.0000 -0.0001 1.0000]

--- 姿态 2 ---
关节角: [0, -0.5, -1.0, 0, 0, 0]
TCP 位置: x=0.1141, y=0.0000, z=0.5034
TCP 旋转矩阵:
  [0.8776 0.0000 -0.4794]
  [0.0000 1.0000 0.0001]
  [0.4794 -0.0001 0.8776]

--- 姿态 3 ---
关节角: [0, -0.8, -1.5, 0.5, 0, 0]
TCP 位置: x=0.1409, y=0.0000, z=0.5559
TCP 旋转矩阵:
  [0.9801 0.0000 -0.1987]
  [0.0000 1.0000 0.0001]
  [0.1987 -0.0001 0.9801]

```

Demo 1 是纯计算：加载 MJCF 模型 -> 设置关节角 -> `mj_forward` 算正运动学 -> 打印 TCP 位姿。整个过程在内存里完成，不开 viewer、不发 ROS2 话题、不驱动 fake driver，所以机械臂不会动。纯 MuJoCo Python 调用。它验证了关节角到末端位姿的映射是否正确——如果你手动量出机械臂末端在零位时的位置，应该和 FK 计算结果一致。

### Demo 2：逆运动学

**目标**：给定目标位置，求解关节角并让机械臂运动过去。使用 ROS2 Service 接口 `/rebotarm/move_to_pose_ik`：

运行前需要先启动仿真栈：

```Bash
RS：
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
DM：
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim

# 终端 2：运行 IK 客户端
python3 demo2_ik.py
```

预期输出：

```Plain Text
成命名空间: /rebotarm
成功: True
消息: IK success, error=9.6 mm, orient=0.000
关节解: [-0.3425787656649655, -1.5209255751808715, -0.707446304651899, -0.39301552902275094, 0.08498990704705993, -4.1821209004842323e-07]
```

注意：move_to_pose_ik 只返回关节解，不执行运动。想看机械臂实际动过去，用 Demo 3 的 Action 接口。

error 表示 IK 求解末端位置与目标相差的距离（毫米）。启动脚本将 ik_tolerance 设为 0.020（20mm），误差在 20mm 以内即判定成功。

### Demo 3：轨迹控制

**目标**：让末端到达物体目标点，观察平滑过渡效果。

使用 Action 接口 `/rebotarm/move_to_pose` 执行多段轨迹：

1. 确保仿真栈正在运行
2. 运行脚本

```Bash
./rebotarm start web
```

1. 观察 MuJoCo viewer 中机械臂的运动

   <figure view-type="Preview"><source name="2026-08-19 17-21-02.mkv" mime="video/x-matroska" origin-height="1080.000000" origin-width="1920.000000" size="1083127" token="QrcgbsSEoozgaTxDaiQcaYo5n94"/></figure>

**对比实验**：如果想对比线性插值和 smoothstep 的差异，可以修改

`sim_task_server.py` 中 `_execute_joint_path` 的插值函数：

```Python
# 线性插值（会有抖动）
eased = ratio

# Smoothstep（当前默认）
eased = ratio * ratio * (3.0 - 2.0 * ratio)

# Minimum Jerk（最平滑）
eased = 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5
```

分别运行后观察末端运动：线性插值在航点切换时有明显顿挫，smoothstep 平滑起步停止，Minimum Jerk 全程丝滑。

### Demo 4：简单抓取动作

**目标**：在场景中放置一个方块，完成 pick-and-place 流程。

场景中已有三个物体（定义在 MJCF `rebotarm_b601_stl.xml` 中）：

| 物体 | 位置 [x, y, z] | 颜色 |
|-|-|-|
| red_cube | [0.34, -0.13, 0.061] | 红色方块 |
| blue_block | [0.50, 0.11, 0.055] | 蓝色方块 |
| yellow_cylinder | [0.44, -0.02, 0.065] | 黄色圆柱 |

抓取流程：

```Plain Text
移动到物体上方 -> 下降 -> 闭合夹爪 -> 抬起 -> 移动到目标位置 -> 松开夹爪
```

运行：

```Bash
# 终端 1：启动物理仿真（需要 physics grasp 模式才能抓取物体）
./scripts/start_rebot_mujoco_all.sh

# 终端 2：在网页上运行抓取 demo
./rebotarm start web
```

<figure view-type="Preview"><source name="2026-08-19 17-03-15.mkv" mime="video/x-matroska" origin-height="1080.000000" origin-width="1920.000000" size="1943371" token="QkLSbjmFjonhknxoQcUcF40inqf"/></figure>

### FAQ

**Q1: IK 求解失败（error > 20mm）怎么办？**

常见原因：

1. 目标位置超出工作空间——reBot Arm 的臂展约 50cm，目标太远无解
2. 目标在奇异点附近——如末端完全伸直时，Jacobian 矩阵退化
3. 关节限位阻止收敛——某些姿态需要关节超出限位才能到达

解决方法：调整目标位置，或增大 `ik_tolerance` 和 `ik_damping`：

```Bash
ros2 launch rebotarm_mujoco mujoco_sim_task_server.launch.py \
  ik_tolerance:=0.010 ik_damping:=0.05
```

**Q2: 轨迹执行时机械臂抖动怎么办？**

检查 `command_hz` 是否过低（低于 30Hz 会明显抖动）。默认 60Hz 通常足够。

如果使用物理模式，检查 PD 参数是否合适——`arm_kp` 过大会导致震荡。

**Q3: 抓取时物体被弹飞怎么办？**

物理模式下 PD 力矩过大。降低 `arm_torque_limit`：

```Bash
ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py \
  arm_torque_limit:=10.0
```

也可以降低下降速度（增大 `duration` 参数），让夹爪缓慢接近物体。

**Q4: `move_to_pose` 和 `move_to_pose_ik` 有什么区别？**

| 接口 | 类型 | 行为 |
|-|-|-|
| `/rebotarm/move_to_pose_ik` | Service | 只求解 IK，返回关节角，不执行运动 |
| `/rebotarm/move_to_pose` | Action | 求解 IK + 执行平滑轨迹，支持反馈和取消 |

**Q5: 如何在运动学模式和物理模式之间切换？**

```Bash
# 运动学模式（直接写 qpos，无物理交互）
MUJOCO_GRASP_MODE=kinematic ./scripts/start_rebot_mujoco_all.sh

# 物理模式（PD 力矩控制，可抓取物体）
MUJOCO_GRASP_MODE=physics ./scripts/start_rebot_mujoco_all.sh
```

运动学模式适合调试运动学和轨迹规划，物理模式适合测试抓取和交互。

**Q6: `mj_forward` 和 `mj_step` 有什么区别？**

`mj_forward` 只做正向计算（运动学、Jacobian、site 坐标），不积分物理。

`mj_step` 在 `mj_forward` 的基础上还做物理积分（力、接触、碰撞）。

纯 IK/FK 计算用 `mj_forward`，物理仿真用 `mj_step`。

- 关节空间是机械臂的母语，笛卡尔空间是人类的语言，运动学是翻译官。
- `mj_forward` 算运动学，`mj_step` 算动力学——前者只看几何，后者才算物理。
- DLS 加阻尼不是妥协，是工程智慧——宁可慢一点收敛，也不要在奇异点爆炸。
- Smoothstep 让机械臂"起步轻、到站稳"，Minimum Jerk 让它"全程丝滑"。
- 60Hz 发指令、500Hz 算力矩、30Hz 发状态——三层控制环各司其职。

---

</div>
