---
description: "Seeed 具身智能入门课程第八阶段：MuJoCo 与 Isaac Sim 机械臂仿真第 35 章 — 机器人仿真基础与平台介绍：机器人仿真不是'花架子'，而是现代机器人学的安全试验场。"
title: 第 35 章 - 机器人仿真基础与平台介绍
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_35
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_35/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 8 阶段 · 第 35 章 · 理论</span>
    <h2>35. 机器人仿真基础与平台介绍</h2>
    <p>
      机器人仿真不是"花架子"，而是现代机器人学的安全试验场。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

### 本阶段需要的硬件

本阶段需要准备的硬件如下。全部阶段的完整清单见 [第 3 章](/cn/rebot_physical_ai_course_chapter_3/)。

**主控单元**

| 硬件 | 购买 | 数量 |
| :--- | :---: | :---: |
| [Jetson Orin Nano Super 8G](https://detail.tmall.com/item.htm?abbucket=14&id=712054933688&mi_id=0000b4o7-mmwtJhlvCEhSP4viA7xIJPisw8IuibhHvzfMNs&rn=79312731d60820183c59a45a12571cae&skuId=6114111210073&spm=a1z10.5-b.w4011-22390330418.113.43ae1734XfPvdN) | 🛒 | 1 |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://detail.tmall.com/item.htm?abbucket=14&id=957845742837&mi_id=0000pv-h8DvXhmbEW2jrasWWe-BhFP2E5HGxD4KpP2RKKpE&rn=79312731d60820183c59a45a12571cae&skuId=6281653119238&spm=a1z10.5-b.w4011-22390330418.169.43ae1734XfPvdN) | 🛒 | 1 |

另外还需要一台台式机或笔记本:Ubuntu 22.04、GTX 4080 以上(12G 显存以上)、16GB 以上内存。

**本阶段**

| 硬件 | 购买 | 数量 |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://detail.tmall.com/item.htm?abbucket=14&id=1042412233386&pisk=hfB-eJgryJp7dpE0kCCZSVvHso4GO9xBAMSEAU9WrvHdSNMoK34UpwLAfQqP-wfvJZ_vPTVy-v3dlMmkO9YhpLJedubwHPmyhH-INJYBNKN2IpvYSR2GDjMMkoI3zPDG0hK6d3TWPIZvjHmWdBTCcoKBx4TBPwsbDH8XVetBREsXqHcSRwO5cntpf3tBOUTXl3-Mde_BdoIXuHpBRw9QDi_myQZrrVRZdRLqSbSWkAIVHCgMWgLjdP622R86OGGp7T_cATXygfN9LifOJ6_UsjJRA_9Wjgy-Hds5iHzFKoGQT151j1D_OTU1eOCdg4MFLWfcFtAZPkXzI61P7swqa_WdAisVljZYIJfhiTdZ3PBfZ_JwUKesDz1vPsAhnW4zLlPW0_z8BPiDyhp2DFqJ2XleOn-vSoExTXRW0nLg2blETBtV.&rn=b08f608734893daceae119d7e15a5f39&skuId=6279331210830&spm=a1z10.5-b.w4011-22390330418.66.1f361734SN96R4) | 🛒 | 1 |


<a id="overview"></a>

## 35.1 为什么用仿真？—— "飞行模拟器"逻辑

机器人仿真不是"花架子"，而是现代机器人学的安全试验场。

- **降低调试风险**：真实机械臂失控可能会撞坏设备或伤人，仿真里最多是模型飞出去（物理引擎爆炸）。
- **突破时间与金钱限制**：你可以 24 小时不间断跑算法，不用等真实机械臂充电或维修，且无需占用实体产线。
- **获取"完美标签"**：在仿真中，你绝对精确地知道每个关节的力矩、每个连杆的受力、末端执行器的 6D 位姿，这在真实物理世界中往往需要昂贵传感器才能测到。

对于 reBot Arm ，仿真不是可选项，而是默认开发路径。工作空间中的`start_fake_bringup.sh` 脚本启动的就是一个纯仿真环境——使用 mock 硬件接口，不需要连接真实机械臂，就可以完成从关节控制到 MoveIt2 运动规划的全部验证。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35cn/ch35-01cn.jpg" alt="" />
</div>

## 35.2 仿真在开发中的三个核心作用

| 开发阶段 | 仿真能帮你做什么 |
|-|-|
| 算法验证（运动学/动力学） | 测试逆解（IK）算法是否收敛、轨迹规划是否平滑、控制器（PID/MPC）是否稳定。 |
| 软件在环（SIL）测试 | 你的上层决策代码（如 VLA 模型输出指令）完全不变，底层通信接口换成仿真的 Topic，验证软件逻辑是否跑通。 |
| 强化学习（RL）训练 | 在仿真中让机械臂"死"几万次来学习策略，零成本获取海量训练数据（Sim2Real 迁移）。 |

## 35.3 仿真的三大核心要素：模型、环境、控制器

一个完整的仿真系统由这三部分组成，缺一不可：

**机器人模型（Agent）**：描述"我长什么样、质量多少、关节怎么转"。

**环境（Environment）**：描述"我在哪、周围有什么"。（地面、桌子、被抓取的物体、障碍物）

**控制器（Controller）**：描述"我怎么动"。（ VLA 策略、轨迹插补、底层 PID）

一句话关系：控制器发出力矩/位置指令 -> 驱动模型在环境中运动 -> 传感器反馈状态给控制器，形成闭环。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35cn/ch35-02cn.jpg" alt="" />
</div>

在 reBot Arm 的 MJCF 模型中，这三部分都有具体体现：机器人模型——从 `base_link` 开始，通过嵌套的 `<body>` 元素构建完整运动链：

```Bash
base_link -> link1 -> link2 -> link3 -> link4 -> link5 -> link6 -> end_link
                                                              |- finger_left_link
                                                               `- finger_right_link
```

环境——MJCF 中定义了一个完整的抓取场景：

```XML
<geom name="floor" type="plane" size="1.0 1.0 0.02" material="floor_mat"/>

<body name="task_table" pos="0.42 0 0.015">
  <geom name="task_table_top" type="box" size="0.30 0.26 0.015"
        contype="1" conaffinity="1" condim="6" friction="2.2 0.12 0.02"/>
</body>

<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04" contype="1" conaffinity="1"/>
</body>
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35cn/ch35-03cn.jpg" alt="" />
</div>

场景中包含一张桌子、三个待抓取物体（红色立方体、蓝色方块、黄色圆柱），以及一个mocap 类型的 IK 目标球。这些环境元素使得仿真不仅仅是"看机械臂动"，而是可以在完整的抓取场景中测试 pick-and-place 流程。

控制器——reBot Arm 的 MuJoCo 仿真有两种控制方式：

- 直接设置 `qpos`（运动学模式）：`real2sim_sync.py` 将 ROS 关节状态写入`data.qpos`，调用 `mj_forward` 更正运动学，不涉及力和动力学。
- 施加力矩（动力学模式）：`mujoco_torque_control.py` 通过 `data.qfrc_applied`施加关节力矩，调用 `mj_step` 推进物理仿真。

## 35.4 机器人模型的"三重分身"：Visual、Collision、Inertial

在仿真文件中（如 URDF / MJCF），一个连杆（Link）通常包含这三种属性，各司其职：

| 属性 | 比喻 | 作用 | 图形要求 |
|-|-|-|-|
| Visual（视觉模型） | 演员的"皮囊/外观" | 仅用于渲染显示，让你在 GUI 里看得漂亮。 | 精细网格（STL/DAE），三角面数多。 |
| Collision（碰撞模型） | 演员的"安全气泡/骨架" | 用于物理引擎计算碰撞检测和接触力。 | 极度简化（用球体、胶囊体、立方体包络），面数极少，保证算得快。 |
| Inertial（惯性模型） | 演员的"体重和重心" | 定义质量（mass）、质心位置（origin）和转动惯量（inertia matrix）。决定物理真实感的关键。 | 只有数学参数，无图形。 |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35cn/ch35-04cn.jpg" alt="" />
</div>

**避坑警告**：很多人图省事把 Visual 直接复制给 Collision，导致仿真卡顿（显卡顶不住）且碰撞检测极不稳定。Collision 必须用凸包（Convex Hull）简化！

reBot Arm 的 MJCF 模型正是这么做的——visual 用 STL mesh，collision 用 box：

```XML
<!-- Visual: 精细 STL mesh，只管好看 -->
<geom name="gripper_base_visual" type="mesh" mesh="gripper_base_mesh" material="gripper_mat"/>

<!-- Collision: 简化 box，只管碰撞检测 -->
<geom name="gripper_palm_collision" type="box" pos="-0.090 0 0"
      size="0.018 0.090 0.034" contype="1" conaffinity="1" condim="6"/>
```

而连杆部分（link1-link6）的 visual geom 默认 `contype="0" conaffinity="0"`，不参与碰撞检测。这是有意设计：机械臂自碰撞由 SRDF 的 ACM 矩阵管理（见第 34 章），

MuJoCo 层面只处理夹爪与物体之间的碰撞。Inertial 模型方面，reBot Arm 的 MJCF STL 模型为每个 body 定义了完整的惯性参数：

```XML
<inertial pos="-0.000007849 -0.0000011531 0.029841"
          mass="0.8366"
          diaginertia="0.00133040 0.00213119 0.00275877"/>
```

各连杆的质量分布

| 连杆 | 质量 (kg) | 说明 |
|-|-|-|
| base_link | 0.8366 | 底座，最重 |
| link2 | 1.3266 | 大臂，第二重 |
| link3 | 0.8353 | 小臂 |
| link4 | 0.52 | 腕部俯仰 |
| link5 | 0.383 | 腕部偏航 |
| link6 | 0.3663 | 工具旋转 |
| end_link | 0.5 | 夹爪基座 |

值得注意的是，运动学模型（`rebotarm_b601_kinematic.xml`）省略了大部分连杆的inertial 数据，因为运动学模式不需要计算力和动力学，只需要几何关系。

## 35.5 关节、执行器与传感器（仿真里的"神经末梢"）

### **关节（Joint）**：定义连杆之间的相对运动方式。

| 关节类型 | URDF 名称 | MJCF 名称 | 说明 |
|-|-|-|-|
| 旋转关节 | `revolute` | `hinge` | 像舵机，有限位。 |
| 连续旋转 | `continuous` | `hinge`（无 range） | 像轮子，无限转。 |
| 平移关节 | `prismatic` | `slide` | 像液压杆。 |
| 固定关节 | `fixed` | 无（直接焊死） | 把两个连杆焊死。 |

reBot Arm 使用 `hinge`（joint1-joint6）和 `slide`（finger_left、finger_right）：

```XML
<joint name="joint1" type="hinge" axis="0 0 1" range="-2.8 2.8"/>
<joint name="joint2" type="hinge" axis="0 0 -1" range="-3.14 0"/>
<joint name="finger_left" type="slide" axis="0 1 0" range="0 0.0285"/>
```

每个关节在 MJCF 中都有阻尼（damping）和转子惯量（armature）参数：

```XML
<default>
  <joint damping="0.8" armature="0.01" limited="true"/>
</default>
```

`damping="0.8"` 模拟关节摩擦，使关节在无外力时自然减速。`armature="0.01"`模拟电机转子的等效惯量，使仿真更接近真实电机的响应特性。

### **执行器（Actuator）**：仿真里定义驱动力/力矩上限和传输延迟。比如你发-10\－10 Nm 的力矩指令，执行器会限幅再传给物理引擎。

但 reBot Arm 的 MJCF 模型中没有定义任何 `<actuator>` 元素——这不是遗漏，

而是有意设计：

- `real2sim_sync.py` 直接写入 `data.qpos`，绕过执行器，实现运动学同步。
- `mujoco_torque_control.py` 直接写入 `data.qfrc_applied`，绕过执行器，

实现力矩控制。力矩限幅在代码层完成：`torque_limit=18.0`。

这种"无执行器"设计给了开发者最大的控制自由度：你可以选择运动学模式（直接设位置）或动力学模式（直接设力矩），而不受执行器模型的约束。

### **传感器（Sensor）**：仿真器可完美模拟（或加入噪声模拟真实）：

| 传感器类型 | 仿真方式 | reBot Arm 中的体现 |
|-|-|-|
| 关节位置/速度编码器 | 直接读取 `data.qpos` / `data.qvel` | `mujoco_torque_control.py` 读取关节状态 |
| 力/力矩传感器（F/T） | 读取 `data.qfrc_bias`（偏置力 = 重力 + 科氏力） | 扭矩对比功能的核心 |
| IMU | 读取 body 的加速度和角速度 | 项目未使用 |
| 相机/激光雷达 | 通过渲染引擎生成 RGB 或点云 | MJCF 中定义了 `overhead_rgb` 相机 |

reBot Arm 的 MJCF 模型没有定义 `<sensor>` 元素，传感器数据通过 Python API 直接读取：

```Python
# 读取关节位置
qpos = self.data.qpos[joint.qpos_addr]

# 读取关节速度
qd = self.data.qvel[joint.dof_addr]

# 读取重力补偿扭矩（偏置力）
mujoco.mj_forward(self.model, self.gravity_data)
tau_g = self.gravity_data.qfrc_bias[joint.dof_addr]
```

## 35.6 关键时间参数：仿真步长 vs 控制频率（极易混淆）

**仿真步长（Physics dt）**：物理引擎内部积分迭代的时间间隔。如 0.001 s = 1 kHz。步长越小，物理结算越精准、越稳定，但 CPU 负载越大。

**控制频率（Control Rate）**：控制节点向仿真发送指令的频率。

如 100 Hz。控制周期必须是仿真步长的整数倍（例如每 10 个物理步长算一次控制指令）。

**黄金法则**：控制频率要足够覆盖机械臂的机械带宽（通常关节速度环 > 1 kHz，位置环 > 100 Hz），而仿真步长要比控制频率快 5\－10 倍，以保证力矩指令在时间上平滑。

reBot Arm 的两个 MJCF 模型使用了不同的时间步长：

| 模型 | timestep | 含义 |
|-|-|-|
| `rebotarm_b601_stl.xml`（物理模型） | 0.001 s（1 ms = 1 kHz） | 每步推进 1 ms 物理仿真 |
| `rebotarm_b601_kinematic.xml`（运动学模型） | 0.002 s（2 ms = 500 Hz） | 每步推进 2 ms，无物理计算 |

物理模型使用更小的时间步长（1 ms），因为动力学仿真需要足够的分辨率来保证数值稳定性。运动学模型不需要求解运动方程，2 ms 足够。

```XML
<option timestep="0.001" gravity="0 0 -9.81" iterations="100" noslip_iterations="20"/>
```

`iterations="100"` 和 `noslip_iterations="20"` 是约束求解器的参数，影响接触和摩擦的求解精度。值越大越精确，但计算量越大。

在 `mujoco_torque_control.py` 中，控制频率和发布频率是分离的：

```Python
self.declare_parameter("control_hz", 500.0)   # 控制环 500 Hz
self.declare_parameter("publish_hz", 60.0)     # 状态发布 60 Hz
```

控制环以 500 Hz 运行（每 2 ms 一次），与 MuJoCo 的 1 ms 时间步长配合——每次控制循环调用 `mj_step` 推进物理仿真。状态发布以 60 Hz 运行，通过 ROS2 话题对外发布，避免高频数据淹没订阅者。

`real2sim_sync.py` 的同步频率则低得多：

```Python
self.declare_parameter("sync_hz", 60.0)  # 同步渲染 60 Hz
```

因为 real2sim 只做运动学同步（写 qpos + mj_forward），不调用 mj_step，不需要高频物理计算。60 Hz 足够保证视觉流畅。

## 35.7 三大模型格式对比：URDF、MJCF 与 USD

| 格式 | 全称 / 起源 | 特点 | 适用场景 |
|-|-|-|-|
| URDF | Unified Robot Description Format（ROS 标配） | 树状结构（不能有闭环），定义运动学极强，但动力学（惯性）描述弱，且不支持复杂地形。 | 传统机械臂、移动底盘、ROS 生态标准。 |
| MJCF | MuJoCo XML Format | 专为多体动力学和接触优化，物理参数定义极其细腻（摩擦、弹性、阻尼）。支持凸包自动生成。 | 强化学习（RL）、高精度接触任务（如灵巧手抓取）。 |
| USD | Universal Scene Description（皮克斯开源） | 好莱坞级场景管理，支持超大场景、层次化组合、材质光影极度逼真。 | Isaac Sim、数字孪生、高保真合成数据生成（与 NVIDIA Omniverse 深度绑定）。 |

**开发路径建议**：搞传统机械臂算法用 URDF；搞强化学习/灵巧操作用 MJCF；搞仿真数据生成/真实感渲染选 USD。

reBot Arm 的开发中涉及前两种：

URDF——由 SolidWorks 导出，每个 link 包含 `<inertial>`、`<visual>`、

`<collision>` 三个子元素，用于 RViz 显示和 MoveIt2 规划：

```XML
<link name="base_link">
  <inertial>
    <mass value="0.79874480798149"/>
    <inertia ixx="..." iyy="..." izz="..."/>
  </inertial>
  <visual>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </collision>
</link>
```

注意 URDF 的局限：collision 只能复用 visual 的 mesh，无法单独定义简化碰撞体。

这也是 reBot Arm 同时维护 MJCF 的原因——MJCF 可以在同一连杆上独立定义visual（mesh）和 collision（box）。

MJCF——reBot Arm 的 MJCF 还支持 URDF 无法表达的场景元素（桌面、物体、相机）：

```XML
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04"/>
</body>
```

USD——reBot Arm 目前没有使用，但如果未来需要迁移到 Isaac Sim，可以通过`urdf_to_usd` 或 `mjcf_to_usd` 工具进行转换。

## 35.8 仿真器双雄：MuJoCo VS Isaac Sim（解决"我该选哪个"）

| 对比维度 | MuJoCo | Isaac Sim |
|-|-|-|
| 核心定位 | 轻量级物理实验室（数学家的工具） | 企业级数字孪生平台（工程师的元宇宙） |
| 物理引擎 | 基于凸优化/锥体互补，接触稳定且抗爆，仿真极其快速（可跑 10 倍速以上）。 | 基于 PhysX 5（GPU 加速），支持刚体/软体/流体，物理真实感强。 |
| 渲染能力 | 简陋（OpenGL），几乎无光影。 | 电影级光线追踪（RTX），可生成完美的语义/深度/分割图。 |
| 硬件门槛 | CPU 即可流畅运行（无 GPU 也能跑）。 | 必须配 NVIDIA RTX 显卡（至少 3060 起步）。 |
| 典型场景 | 强化学习策略训练（如 OpenAI Gym）、最优控制（MPC）、低算力设备。 | 合成数据生成（训练视觉大模型）、硬件在环（HIL）、工厂整线仿真。 |

reBot Arm 选择 MuJoCo 的原因很明确：项目需要的是精确的动力学验证（重力补偿扭矩对比）和实时真机镜像（real2sim），这些任务对物理精度和计算速度要求高，但对渲染质量要求低。MuJoCo 恰好满足这个需求。

两者的选择标准：

| 需求 | 推荐平台 | 理由 |
|-|-|-|
| 动力学建模和扭矩分析 | MuJoCo | 物理精度高，API 直接访问力矩 |
| 运动规划和轨迹验证 | MuJoCo / RViz | 轻量，启动快 |
| 视觉感知和传感器仿真 | Isaac Sim | 支持相机、LiDAR 等传感器 |
| 强化学习训练 | Isaac Sim | GPU 并行，大规模环境 |
| 真机实时镜像 | MuJoCo | CPU 即可运行，延迟低 |
| 照片级场景渲染 | Isaac Sim | RTX 光线追踪 |

## 35.9 仿真机械臂 vs. 真实机械臂："镜像"与"鸿沟"

**关系**：仿真机械臂是真实机械臂的"理想化数学投影"。

**相同点**：运动学（正逆解）完全一致，关节限位、速度上限可完全按照真实参数填写。

reBot Arm 的六个关节在 MJCF 和 URDF 中的限位完全一致：

| 关节 | 范围 | URDF 限位 | MJCF 限位 |
|-|-|-|-|
| joint1 | -2.8 \－ 2.8 rad | lower="-2.8" upper="2.8" | range="-2.8 2.8" |
| joint2 | -3.14 \－ 0 rad | lower="-3.14" upper="0" | range="-3.14 0" |
| joint3 | -3.14 \－ 0 rad | lower="-3.14" upper="0" | range="-3.14 0" |
| joint4 | -1.87 \－ 1.57 rad | lower="-1.87" upper="1.57" | range="-1.87 1.57" |
| joint5 | -1.57 \－ 1.57 rad | lower="-1.57" upper="1.57" | range="-1.57 1.57" |
| joint6 | -3.14 \－ 3.14 rad | lower="-3.14" upper="3.14" | range="-3.14 3.14" |

**差异（Sim2Real Gap，亟待克服的鸿沟）**：

### **1. 动力学差异**：

真实有摩擦、齿隙（Backlash）、柔性形变；仿真往往是完美刚体或带有简化摩擦模型。reBot Arm 的 MJCF 中 `damping="0.8"` 和 `armature="0.01"`是估计值，真实的关节摩擦和电机转子惯量需要通过系统辨识获得。`mujoco_torque_control.py` 的扭矩对比功能正是为了量化这种误差——它同时计算 MuJoCo 的重力补偿扭矩和 SDK 的重力补偿扭矩，并发布差值：

```Python
tau_mujoco = self._compute_mujoco_tau_g(q)  # MuJoCo 计算
tau_sdk = self._sdk_gravity(q=q)              # SDK 计算
diff = tau_mujoco - tau_sdk                    # 差值
```

对比结果通过三个话题发布：

| 话题 | 内容 |
|-|-|
| `/rebotarm/mujoco/tau_g` | MuJoCo 计算的重力补偿扭矩 |
| `/rebotarm/mujoco/sdk_tau_g` | SDK 计算的重力补偿扭矩 |
| `/rebotarm/mujoco/tau_g_diff` | 两者差值 |

如果差值很小，说明仿真模型与真机动力学一致性好，sim-to-real 迁移风险低。如果差值大，说明模型参数需要校准。

### **2. 延迟差异**：

仿真控制指令几乎零延迟瞬间执行；真实需要经历"通信延迟 -> 电机加速 -> 建立力矩"的过程。`real2sim_sync.py` 通过`stale_timeout` 参数处理这个问题：

```Python
self.declare_parameter("stale_timeout", 1.0)  # 1 秒无数据则停止同步
```

如果真机关节状态超过 1 秒未更新，仿真模型停止跟随，避免显示过时的姿态。

### **3. 感知差异**：

仿真相机输出的是完美 RGB 且无运动模糊；真实相机有曝光延迟、白平衡漂移、动态模糊。reBot Arm 的 MJCF 中定义了一个固定相机：

```XML
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
```

这个相机在 MuJoCo viewer 中可以渲染场景画面，但与真实相机的成像质量存在差距。

## 35.10 数字孪生（Digital Twin）—— 仿真的终极形态

**定义**：不仅仅是"离线仿真"，而是建立实时数据通道，让真实机械臂的每一个关节角度、力矩、温度都实时映射到虚拟模型中，同时虚拟模型可反向"预演"未来几秒钟的运动（预测性维护）。

数字孪生的三个级别：

| 级别 | 名称 | 能力 |
|-|-|-|
| 级别 1 | 可视化 | 3D 看板，纯粹看着玩。 |
| 级别 2 | 诊断 | 真实报错，孪生体高亮报错部位并回溯日志。 |
| 级别 3 | 预测 | 基于当前负载，虚拟体提前推算出"2 秒后电机可能过载"，在真实世界触发降速保护。 |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35cn/ch35-05cn.jpg" alt="" />
</div>

**平滑与超时**：数字孪生需要处理真机数据的抖动和中断。`smoothing_alpha` 参数控制跟踪平滑度（1.0 为直接跟踪，小于 1.0 为指数平滑），`stale_timeout` 控制数据超时后的行为。

**虚拟抓取**：`real2sim_sync.py` 还实现了虚拟抓取功能——当夹爪闭合到一定程度且 TCP 靠近物体时，物体被"附着"到 TCP 上跟随运动；夹爪张开时物体释放并自由下落。这使得数字孪生不仅能镜像姿态，还能模拟抓取交互。

**扭矩级孪生**：`mujoco_torque_control.py` 将数字孪生从运动学级别提升到动力学级别。它不仅同步关节位置，还同步力矩——用 MuJoCo 的扭矩闭环跟踪真机关节轨迹，同时对比 MuJoCo 和 SDK 的重力补偿扭矩。这是数字孪生从"看得见"走向"算得准"的关键一步，向级别 2（诊断）和级别 3（预测）迈进的基础。

---

</div>
