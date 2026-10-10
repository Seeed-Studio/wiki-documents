---
description: "Seeed 具身智能入门课程第五阶段：机械臂数学与运动控制第 24 章 — 正运动学、逆运动学与雅可比矩阵：解释机械臂如何从关节角计算末端位置，以及如何根据目标位置求解关节角。"
title: 第 24 章 - 正运动学、逆运动学与雅可比矩阵
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_24
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_24/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 5 阶段 · 第 24 章 · 理论</span>
    <h2>24. 正运动学、逆运动学与雅可比矩阵</h2>
    <p>
      解释机械臂如何从关节角计算末端位置，以及如何根据目标位置求解关节角。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 主要内容

- 关节空间与笛卡尔空间
- 正运动学
- 逆运动学
- 多解、无解和工作空间
- 关节限制
- 雅可比矩阵
- 速度运动学
- 奇异点
- 数值 IK 和闭环 IK

## 教学目的

解释机械臂如何从关节角计算末端位置，以及如何根据目标位置求解关节角。

## **关节空间 vs 笛卡尔空间**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24cn/ch24-01cn.jpg" alt="" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24cn/ch24-02cn.jpg" alt="" />
</div>

|  | 关节空间 (Joint Space) | 笛卡尔空间 (Cartesian Space) |
|-|-|-|
| 描述 | 关节角 $(q_1, q_2, ..., q_n)$ | 末端位姿 $(x, y, z, rx, ry, rz)$ |
| 维度 | n（关节数） | 6（3 位置 + 3 姿态） |
| 物理意义 | 电机怎么转 | 末端在哪儿、朝哪 |
| 运动轨迹 | 关节匀速 → 末端曲线不规则 | 末端走直线/圆弧 → 关节非线性 |
| 控制难度 | 直接（发给电机） | 间接（要先 IK 算关节角，再发给电机） |
| 典型用途 | 自由运动、避障、回原位 | 抓取、焊接、喷涂、跟踪轨迹 |

<grid>
<column width-ratio="0.333333">
**例子 1：写字机器人**
| 任务 | 用哪个空间 |
|-|-|
| 让电机 1 转 30°、电机 2 转 45° | 关节空间（直接发角度） |
| 让笔尖沿"福"字笔画走直线 | 笛卡尔空间（要算每点对应的关节角） |
</column>
<column width-ratio="0.333333">
**例子 2：抓取杯子（不考虑路径）**
| 阶段 | 用哪个空间 |
|-|-|
| 从 home 位移到杯子附近 | 关节空间（简单匀速，安全） |
| 最后几厘米精确对位杯口 | 笛卡尔空间（要 XYZ 一致接近） |
| 抬起来放到架子 | 关节空间（不要求末端走直线） |
</column>
<column width-ratio="0.333333">
**例子 3：焊接汽车**
| 任务 | 用哪个空间 |
|-|-|
| 焊枪沿焊缝走直线 | 笛卡尔空间（直线 = 焊缝） |
| 抬起焊枪换位置 | 关节空间（快就行） |
</column>
</grid>

## **正运动学 vs 逆运动学**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24cn/ch24-03cn.jpg" alt="" />
</div>

|  | 正运动学 (FK) | 逆运动学 (IK) |
|-|-|-|
| 已知 | 关节角 | 末端位姿 |
| 求 | 末端位姿 | 关节角 |
| 方向 | 关节 → 末端 | 末端 → 关节 |
| 解 | ✅ 唯一 | ❌ 多解/无解 |
| 计算 | 简单（直接套公式） | 复杂（要解方程/迭代） |

<grid>
<column width-ratio="0.500000">
**正运动学干啥用**
- 显示：把关节角实时画成 3D 模型（ROS RViz、游戏角色）
- 验证：算出来的末端位姿对不对
- 标定：对比理论位姿和实际位姿
- 简单控制：按预设角度序列走
</column>
<column width-ratio="0.500000">
**逆运动学干啥用**
- 抓取：相机看到物体 → 算关节角 → 控制机械臂
- 焊接/喷涂：末端必须沿指定轨迹走
- 人形机器人：脚要踩在指定地面点
- 任何"想去某地"的场景
</column>
</grid>

## 正运动学

**从关节角度计算末端位姿的过程**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24cn/ch24-04cn.jpg" alt="" />
</div>

**一句话版本**

把每个关节的局部变换**依次相乘**，从基座一路乘到末端。

$$T_{base}^{end} = T_{base}^{link_1} \cdot T_{link_1}^{link_2} \cdot \ldots \cdot T_{link_{n-1}}^{link_n} \cdot T_{link_n}^{tcp}$$

**计算步骤（6 步）**

1. **建立连杆坐标系**：每个关节建一个局部坐标系（DH 参数 / URDF）
2. **写每个连杆的变换矩阵**$T_i^{i+1}$（相对前一关节的平移+旋转）
3. **代入关节角** $q_i$（旋转部分用 $\theta_i$，平移部分来自 DH 表）
4. **依次相乘**$T_1^2 \cdot T_2^3 \cdot \ldots \cdot T_n^{n+1}$
5. **乘上工具偏移**$T_{flange}^{tcp}$
6. **得到** $T_{base}^{end}$——包含位置 $(x,y,z)$ 和姿态 $(R$ 或 $q$ 或欧拉角$)$

**中间会关联到的知识点（一张图串完）**

```Plain Text
关节角 (q)
   ↓
DH 参数 / URDF  ← 描述连杆几何（a, α, d, θ）
   ↓
齐次变换矩阵 (4×4)  ← 平移 + 旋转 合成
   ↓
   ├── 旋转矩阵 R (3×3, SO(3))
   │      └── 旋转表示：欧拉角 / 四元数 / 轴角
   ├── 平移向量 t (3×1)
   ↓
矩阵连乘 (链式法则)
   ↓
末端位姿 T_base^end (SE(3))
   ↓
   ├── 位置 (x, y, z)  ← 正运动学输出
   ├── 姿态 (R / q / rpy)  ← 姿态表示
   ↓
笛卡尔空间轨迹 / 雅可比 (速度映射)
   ↓
可视化 (RViz / 仿真)
```

**核心关联清单**

| 知识点 | 作用 |
|-|-|
| **DH 参数** | 把每个连杆的 $a, \alpha, d, \theta$ 编成 4 个数 |
| **齐次变换矩阵** | 把平移+旋转塞进 4×4 矩阵，方便连乘 |
| **链式法则** | 多个矩阵相乘的本质 |
| **旋转表示** | 输出姿态用：欧拉角 / 四元数 / 旋转矩阵 |
| **三角函数** | 矩阵展开全是 $\sin/\cos$ |
| **雅可比矩阵** | FK 给出位姿，J 给出速度（IK 反着用） |
| **URDF** | 实际机器人描述文件，FK 数值来源 |

**一个小例子（2 关节）**

```Plain Text
θ1, θ2 = 关节角
l1, l2 = 连杆长度

T_1^2 = [cos θ1, -sin θ1, 0, l1 cos θ1]
        [sin θ1,  cos θ1, 0, l1 sin θ1]
        [0,       0,      1, 0        ]
        [0,       0,      0, 1        ]

T_2^3 = [cos θ2, -sin θ2, 0, l2 cos θ2]
        [sin θ2,  cos θ2, 0, l2 sin θ2]
        ...
        [0,       0,      0, 1        ]

T_1^3 = T_1^2 · T_2^3 → 末端位姿
```

正运动学 = **DH 描述 + 齐次矩阵 + 链式相乘**，把"关节角"翻译成"末端在哪儿"。

中间必会的：DH、4×4 变换、矩阵乘法、旋转表示（欧拉/四元数）、URDF。

## 逆运动学

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24cn/ch24-05cn.jpg" alt="" />
</div>

**从末端位姿计算关节角度的过程**

**数值解 IK：**

想象你的手想去够书架上的一本书。

**你会**：

> 1. 看现在手在哪儿，离书多远
> 2. 算一下"还差多远"
> 3. 让关节**朝那个方向动一点**
> 4. 重复 1-3，直到手摸到书

**这就是数值解 IK。**

**核心思路**

不一步到位，而是**慢慢逼近**。

每一步做三件事：

1. **看误差**：手离目标还差多少
2. **反推方向**：关节应该怎么动才能缩小误差
3. **动一下**：让关节真的走一步

然后从头再来，直到误差足够小。

**为什么这个方法好用**

- **通用**：不管 6 轴、7 轴、机械手、蛇形臂都能用
- **不用想公式**：写程序就行
- **精度可调**：想要多准都行，跑久一点就行

**工业上怎么用**

实际工厂里的机械臂，几乎都跑这个算法的"升级版"——**闭环版本**：

- 持续看误差
- 持续修正
- 哪怕模型有点不准也能慢慢收敛

这种"边走边看"的方式叫 **CLIK (Closed-Loop IK)**，是工业的事实标准。

**一句话**

> 数值解 IK = "**看着误差，慢慢靠近目标**"——通用、好用、稳定，工业机械臂 90% 跑的都是它。

## 雅可比矩阵

**雅可比把「求位姿」变成「求速度」**

**位姿 IK 难解**

末端位姿是非线性方程：

$$f(q) = T_{target}$$

直接解这个方程，多数情况没闭式解。

**雅可比把它线性化**

对当前 $q$ 求导：

$$\frac{\partial f}{\partial q} = J(q)$$

**线性关系**：

$$\Delta T \approx J(q) \cdot \Delta q$$

**反解速度**

$$\dot{q} = J^{-1} \cdot v_{end}$$

**迭代逼近**

1. 当前 q → 算末端位姿 T
2. 误差 ΔT = T_target - T
3. 末端速度 v = ΔT / dt
4. 关节速度 q̇ = J⁻¹ v
5. q_new = q + q̇·dt
6. 回到 1，直到 ΔT 够小  

**一句话**

雅可比把 IK 的非线性方程"局部拍平"成线性方程，反解速度积分就能逼到目标位姿。

## **奇异点**

某个姿态下，**关节怎么动，末端都不动**——或者**末端怎么动都做不到**。

比如：

- **臂完全伸直**：再推不动了，方向全没了
- **腕两节共线**：转一圈算两个方向重合，少一个自由度

**奇异时发生什么**

| 情况 | 表现 |
|-|-|
| 雅可比"失灵" | 翻译手册查不出东西 |
| IK 求解爆炸 | 算出来的关节速度无穷大 |
| 关节抽搐 | 电机疯狂抖动 |
| 控制震荡 | 末端来回跳 |

本质：**翻译手册里某些词条变成 0/0**——没法翻译。

**怎么发现它**

雅可比退化时有一个数字会变 0：

- 行列式 = 0
- 最小奇异值 = 0
- 雅可比的"秩"变少

监控这个数，**接近 0 就报警**。

**怎么应对**

<grid>
<column width-ratio="0.250000">
**阻尼伪逆 DLS**
给手册加点"摩擦"，不让它爆炸
</column>
<column width-ratio="0.250000">
**改路径**
提前规划好，绕开奇异区
</column>
<column width-ratio="0.250000">
**降速**
接近奇异时减速，给自己反应时间
</column>
<column width-ratio="0.250000">
**换姿态**
同一个目标位姿，挑不奇异的解
</column>
</grid>

**奇异点的两种**

- 工作空间**边界**：伸到最远，方向没了
- 工作空间**内部**：腕共线/肘伸直，自由度减少

## **解析 IK vs 数值 IK**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24cn/ch24-06cn.jpg" alt="" />
</div>

想象你要算 25 × 4。

<grid>
<column width-ratio="0.500000">
**方法 A（解析）**：
> 记住"任何数 × 4 = × 2 再 × 2"——算出 50 再 × 2 = 100
> 
> 一步到位，精确
</column>
<column width-ratio="0.500000">
**方法 B（数值）**：
> 猜一个答案（比如 90）
> 
> 算 25 × 4 = 100，比 90 大 10
> 
> 调大点（猜 102），算 25 × 4 = 100，大 2
> 
> 再调（猜 100），正好
> 
> 迭代几次凑对
</column>
</grid>

**两种都能算出来，思路完全不同**。

**核心差别**

| 维度 | 解析 IK | 数值 IK |
|-|-|-|
| 思路 | 直接解方程 | 迭代逼近 |
| 速度 | 最快（μs） | 较慢（ms\－s） |
| 精度 | 精确 | 近似（可调） |
| 通用性 | 差 | 强 |
| 输出 | 闭式公式 | 数值结果 |

**解析 IK 是什么**

直接把方程解开，拿到公式：

$$\theta_1 = \text{atan2}(...)$$

$$\theta_2 = \text{acos}(...)$$

<grid>
<column width-ratio="0.500000">
**好处**：
- 一行代码算出来
- 没有迭代误差
- 可以列出所有解
</column>
<column width-ratio="0.500000">
**坏处**：
- 不是所有机器人都有解
- 关节多、结构复杂时方程解不出
- 一旦机器人改了，公式全得重写
</column>
</grid>

**数值 IK 是什么**

不求公式，反复猜：

> 1. 关节弯一点
> 2. 末端离目标近了没？
> 3. 没近就再弯
> 4. 重复到够近

<grid>
<column width-ratio="0.500000">
**好处**：
- 任何机器人都能用
- 不用想方程
- 加约束容易
</column>
<column width-ratio="0.500000">
**坏处**：
- 慢（要迭代）
- 可能卡在错的解
- 奇异点会爆
</column>
</grid>

**适用场景**

| 场景 | 选 |
|-|-|
| 2 关节、3 关节、特殊几何 | 解析（快、精确） |
| 6 轴标准工业臂 | 都能用，看场景 |
| 7 轴冗余臂 | 数值（解析没解） |
| 闭链 / 并联 | 数值（解析难列） |
| 实时控制（kHz 级） | 解析或离线生成的解析解 |
| 视觉伺服（30Hz） | 数值 |

</div>
