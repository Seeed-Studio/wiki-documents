---
description: "Seeed 具身智能入门课程第五阶段：机械臂数学与运动控制第 26 章 — Pinocchio 与 MeshCat：把坐标变换、运动学和轨迹规划理论应用到真实机器人开发框架。"
title: 第 26 章 - Pinocchio 与 MeshCat
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_26
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_26/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 5 阶段 · 第 26 章 · 实践</span>
    <h2>26. Pinocchio 与 MeshCat</h2>
    <p>
      把坐标变换、运动学和轨迹规划理论应用到真实机器人开发框架。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 教学目的

把坐标变换、运动学和轨迹规划理论应用到真实机器人开发框架。

学习使用 Pinocchio 和 MeshCat

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) 是一个用于机器人动力学分析和优化的开源库。它提供了高效的正向/逆向运动学、动力学计算和轨迹规划功能。[MeshCat](https://github.com/rdeits/meshcat) 是一个基于 Web 的 3D 可视化工具，可以实时显示机器人状态和运动轨迹。

URDF  ─→  Pinocchio  ─→  结果

 (描述)     (算法)      (FK/IK/动力学)

Pinocchio 通过读取机器人 URDF 模型，可以完成以下的事情。

<sheet sheet-id="Atqk7d" token="FagLsnhSvhAzRftOoX9cLPsKnTf"></sheet>

接下来使用 rebot-dm 的 pinocchio demo 来进行体验。

## 下载安装 demo ，配置环境

按照教程，先完成机械臂的初始化

## **安装 uv（如未安装）**

```Bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## **同步环境（安装所有依赖）**

```Bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

<callout emoji="🤖">
**如何切换 Damiao 和 Robostride 电机配置**  
 修改 `config/rebotarm_dm.yaml`（达妙）或 `config/rebotarm_rs.yaml`（Robostride）配置文件，并在代码中加载对应的配置。
</callout>

## 正运动学 meshCat 可视化 demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/wVBwBnDO6X8?si=HSc4UqpDKHEg5Y43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```Plain Text
uv run ./example/sim/fk_sim.py

#根据终端提示打开机械臂模型可视化网页地址

#按照提示输入角度
45 -30 15 -60 90 -180

#机械臂模型随之运动
```

## 正运动学计算demo解析

对于正运动学fk_sim.py，是一条 **直通式正运动学链路**：关节角 → Pinocchio FK → 末端位姿 + MeshCat 渲染

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-26cn/ch26-01cn.jpg" alt="" />
</div>

## 逆运动学 meshCat 可视化 demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/4B9ngX8e7x4?si=Ork_DT-A9zlxfEmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```Plain Text
uv run ./example/sim/ik_sim.py

#根据终端提示打开机械臂模型可视化网页地址

#按照提示输入位置和姿态

0.25 0.0 0.25              # 仅位置

0.25 0.0 0.25 0 0 0        # 位置+姿态

```

## 逆运动学计算demo解析

1. **输入目标** — 用户给出末端期望的位置（xyz）和姿态（roll/pitch/yaw），程序将其构建成一个 SE3 位姿对象。
2. **加载模型** — 从配置文件读取 URDF，构建机器人的运动学模型，确定末端执行器在哪个帧上。
3. **正运动学** — 根据当前关节角，算出末端此刻在世界坐标系中的实际 SE3 位姿。

1. **算差距** — 用 `log6` 对当前 SE3 和目标 SE3 做对数映射，得到 6 维误差（旋转差多少、平移差多少）。
2. **反推修正量** — 通过雅可比矩阵把末端误差"翻译"成每个关节该转多少，用阻尼最小二乘法求解，防止关节突变。
3. **循环收敛** — 不断重复 3→5，每次都带线搜索确保误差在减小，直到误差小于阈值（\－0.1mm）就认为到位了。
4. **输出结果** — 返回求解出的关节角（弧度）、是否收敛、最终误差，供后续控制使用

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-26cn/ch26-02cn.jpg" alt="" />
</div>

## 轨迹规划 meshCat 可视化 demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/B5gz1Me78nQ?si=HDzRq-WhDX6N78V5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```Plain Text
uv run python example/sim/traj_sim.py

#根据终端提示打开机械臂模型可视化网页地址

#按照提示输入位置和姿态

0.25 0.0 0.25              # 仅位置

0.25 0.0 0.25 0 0 0        # 位置+姿态

```

## 轨迹规划 meshCat 可视化 demo 解析

## SE(3) 位姿

<grid>
<column width-ratio="0.333333">
**是什么**
SE(3) = **位置 + 朝向**，三维刚体"现在是什么状态"的完整描述。
- `S` 行列式 = 1
- `E` 保欧氏距离
- `3` 三维空间
</column>
<column width-ratio="0.333333">
**类比**
停车场里一辆车：
- **位置** = 在 P3 车位
- **朝向** = 车头朝外
- 这两个合起来，就是车当前的 SE(3) 位姿
</column>
<column width-ratio="0.333333">
**自由度**
- 位置 3 个数（上下、左右、前后）
- 朝向 3 个数（怎么转的）
- 一共 **6 DOF**
</column>
</grid>

**矩阵写法（4×4 齐次矩阵）**

```Plain Text
T = [ R  t ]
    [ 0  1 ]
```

- 左上 3×3 = **R**，旋转矩阵（朝向）
- 右上 3×1 = **t**，平移向量（位置）
- 最下面那行 [0 0 0 1] 是固定占位

**例子:位置变了 → `t` 变；朝向变了 → `R` 变。**

## **轨迹生成**

 **sampler 生成稠密 SE(3) 位姿时刻表**。

工作分三层：

1. **几何层**——用 `log6/exp6` 在 SE(3) 弯曲流形上算一条测地线（最短路径）：旋转走 slerp（大圆弧），平移在末端局部系走直线。公式 `T(s) = T_start · exp6(log6(T_start⁻¹·T_end)·s)`，其中 `s∈[0,1]` 是路径比例。
2. **时间层**——选剖面决定 `s(τ)`（`τ = t/duration`）：LINEAR 匀速、MIN_JERK 五次多项式（默认，起止速度/加速度为 0）、TRAPEZOID 梯形加减速。
3. **采样层**——按 `dt=0.02s`（50Hz）等步长切 `n` 帧，每帧 = `T(s(t))`，输出 `CartesianTrajectory`：`[(t=0, T_start), (t=0.02, T₁), ..., (t=duration, T_end)]`。

**核心思想**：几何（路径）与时间（节奏）解耦，输出全是 SE(3)，不含关节信息，留给 CLIK 反解。

<grid>
<column width-ratio="0.500000">
**车在 P3（位置 5,0,0），车头朝东（不转）**
```Plain Text
[ 1  0  0 | 5 ]
[ 0  1  0 | 0 ]
[ 0  0  1 | 0 ]
[---------+---]
[ 0  0  0 | 1 ]
```
</column>
<column width-ratio="0.500000">
**车挪到 P3 不变，车头改朝北（绕 z 轴转 90°）**
```Plain Text
[ 0 -1  0 | 5 ]
[ 1  0  0 | 0 ]
[ 0  0  1 | 0 ]
[---------+---]
[ 0  0  0 | 1 ]
```
</column>
</grid>

## CLIK

第 4 步：log6 误差 → 反馈信号

- 把"末端到哪了"和"末端要到哪"之间的距离算成 6 维旋量
- 这 6 维就是 CLIK 里的误差信号 e，相当于控制系统里的偏差
- 不用欧拉角相减是为了避免 360° 跳变让误差计算炸

第 5 步：DLS 雅可比求解 → 控制器

- 这是 CLIK 的"控制器"角色
- 把末端 6 维误差翻译成各关节该动多少
- DLS = J^T(JJ^T + λ²I)⁻¹，等价于"最小化 ‖JΔq - e‖² + λ²‖Δq‖²"
- λ²I 是阻尼项，防止 J 接近奇异时 Δq 爆炸（伪逆在奇异点会趋近无穷大）

第 6 步：迭代 + 线搜索 → 闭环结构

- 这步是"闭环"二字的来源
- 每轮重新算 FK → 重新算误差 → 重新算 Δq，形成反馈回路
- 线搜索 α 保证每次更新让误差真的在减小，避免震荡
- 跟 PID 控制一个套路：测量误差 → 算控制量 → 施加 → 再测

## 真机平滑轨迹的逆运动学控制 (`8_arm_traj_control.py`)

在 MIT 模式下使用逆运动学（IK），在目标时间内自动规划出一条匀速或带平滑加减速的运动轨迹，避免了关节剧烈抖动。

**输入格式**：

- 仅位置：`<x> <y> <z>`（米）
- 位置 + 姿态：`<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 位置 + 姿态 + 时间（默认为 2.0 ）：`<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
- 输入 `state` ：查看当前各个关节的实际弧度值。
- 输入 `end_state` ：查看当前 末端在空间中的实际坐标 (m) 和欧拉角 (rad)。

**运行方式**：

```Bash
uv run python example/8_arm_traj_control.py

#用法A
> 0.3 0.0 0.4 #仅指定位置，姿态默认为 0，移动时间默认为 2.0 秒

#用法B
> 0.3 0.0 0.4 0.0 0.0 0.5 #同时控制位置和姿态：走到指定位置，同时手腕偏航角旋转 0.5 弧度，移动时间默认为 2.0 秒

#用法C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 #让机械臂走到特定位置，并指定用 5.0 秒 的时间慢慢挪过去。(注意：如果要输时间，前方的姿态参数 0 0 0 不能省略)

> ctrl + c # 退出系统
```

---

</div>
