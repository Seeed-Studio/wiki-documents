---
description: 本维基旨在介绍基于 DM-4310-2EC 电机的可更换夹爪设计
title: DM_Gripper - 装配指南与演示
keywords:
- Gripper
- Robotics 
slug: /cn/dm_gripper
last_update:
  date: 9/17/2025
  author: Ylson W
---

# DM_Gripper - 装配指南

DM_Gripper 采用便于装配/拆卸的结构与开源设计理念。这使得爱好者和开发者能够通过 3D 打印快速完成原型制作，或根据个性化需求进行重新设计。

该夹爪具备可更换的爪体系统，能够轻松替换不同形状的爪体以适配多种使用场景。所有零件均可在家用 3D 打印机打印完成，仅需最少的支撑。本维基提供了逐步的装配指南。

<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.jpg"/>  
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 尺寸与工作范围

下图展示了夹爪的尺寸与工作范围（单位：毫米），爪体更换后高度会有所不同。
<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/Specs.png"/>  
</div>

## 驱动机构

本夹爪采用经典的双曲柄-滑块机构，将旋转运动转化为轴向运动。

- **曲柄-滑块示意：**

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/SliderCrank_Mechanism.gif"
       alt="Crank slider mechanism" width="720" />
</div>

- **运动仿真演示：**

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/gripper_mechanism_motion.mp4"
            type="video/mp4" />
  </video>
</div>

## 物料清单 (BOM)

#### 🔩 紧固件

| 名称                                                   | 数量 |
|--------------------------------------------------------|------|
| 十字盘头螺钉 PM3×8                                     | 8    |
| 内六角圆柱头螺钉 M3×20                                 | 4    |
| 内六角圆柱头螺钉 M3×25                                 | 6    |
| 内六角圆柱头螺钉 M3×50                                 | 8    |
| 内六角圆柱头螺钉 M3×16                                 | 12   |
| 304 尼龙自锁螺母 M3 (厚度 3.9mm × 宽度 5.5mm)           | 18   |
| 弹簧垫圈 – M3                                          | 4    |
| 平垫圈 – M3×7mm (外径) × 0.5mm (厚度)                  | 8    |

#### ⚙️ 轴承

| 名称                                                                | 数量 |
|---------------------------------------------------------------------|------|
| F3-8M 推力轴承 (内径 3mm × 外径 8mm × 厚度 3.5mm)                  | 4    |

#### 🛠️ 直线运动

| 名称                                      | 数量 |
|-------------------------------------------|------|
| 不锈钢直线导轨 MGN9, 200mm                | 1    |
| 直线滑块 MGN9C (标准型)                   | 2    |

#### 🔌 执行器

| 名称             | 数量 |
|------------------|------|
| DM4310-2EC 电机  | 1    |

#### 🧩 定制打印件

| 名称             | 数量 |
|------------------|------|
| **3D 打印件**    | 1 套 |

## 装配指南

### 3D 打印指南

- 如果你有独立的支撑材料，或者在  
  <a href="https://wiki.bambulab.com/en/ams/manual/ams-function-introduction" target="_blank"><b>AMS</b></a>  
  中使用 PETG+PLA 并希望在支撑面获得更好的表面质量，请参考  
  <a href="https://wiki.bambulab.com/en/filament-acc/filament/h2d-pla-and-petg-mutual-support" target="_blank"><b>此维基</b></a>。  
  *注意：打印时间可能会更长。*

- 如果你只有一种耗材，请确保打印方向正确，并决定是否需要以下步骤（在 Bambu Studio 中开启 **ADVANCED** 选项）。

    :::warning
    使用 PETG 或 ABS 时请不要更改 Top Z 距离，保持默认值。仅在使用 PLA 时才需要修改。
    :::

  - 步骤 1: 选择支撑最少的打印布局  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/PrintLayout.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - 步骤 2: 按图中绿色矩形所示开启 Scarf 设置，可获得更好的表面质量。  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/Scarf_Settings.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - 步骤 3: 我的打印参数：层高 0.2mm，填充密度 25%，填充样式 – 3D 蜂窝。  
    <p align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps1.png" alt="ps1" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps2.png" alt="ps2" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps3.png" alt="ps3" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps4.png" alt="ps4" height="500" hspace="5"/>
    </p>

### 装配步骤演示

- 步骤 1: 使用八颗 M3×8 圆头螺钉将爪体固定在 MGN9C 滑块上  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S1.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 2: 依次堆叠轴承、转子和连杆（类似“汉堡”结构）  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S2.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 3: 在槽的上下分别放置八个 M7 垫圈  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S3.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 4: 在垫圈上下分别放置四个螺母  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S4.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 5: 拧紧四对 M3×20 螺钉和弹簧垫圈（必要时使用钳子）  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S5.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 6: 将底座与电机放置到位，转子板与电机的图案需对齐  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S6.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 7: 用六颗 M3×16 螺钉将转子板固定在电机上  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S7.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 8: 将爪体基座推至最大开合范围以便后续操作  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S8.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 9: 将相机支架安装到底部  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S9.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 10: 使用四对 M3×25 螺钉和螺母固定凸轮支架  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S10.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 11: 用六颗 M3×16 螺钉固定底座（此阶段需拉出导轨，之后再推回）  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S11.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 12: 使用两对 M3×50 螺钉和螺母将导轨锁定在底座上  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S12.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 13: 滑入压轨件并用两对 M3×25 螺钉和螺母固定  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S13.mp4"
            type="video/mp4" />
  </video>
</div>

- 步骤 14: 将爪体放置在爪体支架上，并用六对 M3×50 螺钉和螺母固定  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S14.mp4"
            type="video/mp4" />
  </video>
</div>

## 演示与 CAD 文件

- 请参考 [**Damiao Actuators 维基**](https://wiki.seeedstudio.com/cn/damiao_series/) 进行前期准备。  
- 请参考 [**力矩控制器演示**](https://github.com/tianrking/DM_Gripper/tree/main)（特别感谢 tianrking）来通过 GUI 控制夹爪动作。  

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/DM_GripperController.gif"
       alt="Gripper Controller Demo" width="720" />
</div>

- CAD 资源：可编辑的 STEP 文件与 STL 文件可在 [**此处**](https://github.com/YlsonDdb/DM_Gripper) 获取。
