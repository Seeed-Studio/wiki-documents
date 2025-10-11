---
description: This wiki aims to promote the development of a swappable gripper using the DM-4310-2EC motor
title: DM_Gripper - Assembly Guide with Demo
keywords:
  - DM_Gripper
  - DM-4310-2EC
  - 3D Printed Gripper
  - Swappable Gripper
  - Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.webp
slug: /dm_gripper
last_update:
  date: 9/17/2025
  author: Ylson W
---

# DM_Gripper – Open-Source Assembly Guide

The **DM_Gripper** is an open-source, **3D-printed robotic gripper** designed around the **DM-4310-2EC motor**. Its modular design emphasizes ease of assembly and disassembly, enabling both hobbyists and robotics developers to **rapidly prototype, customize, and scale** their projects.  

Fully compatible with **DAMIAO actuators**, the DM_Gripper also provides flexibility for integration with other actuator brands. Its unique **swappable claw system** allows users to quickly exchange claws of different shapes, supporting diverse robotic tasks and use cases.  

All gripper parts are **fully 3D-printable** with minimal support requirements, making it accessible for makers, researchers, and engineers alike.  

This wiki includes:  

- Mechanism design overview  
- Full bill of materials (BOM)  
- 3D printing guide and setup  
- Step-by-step assembly instructions  
- Demo and practical use cases

<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.jpg"/>  
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Dimensions/Operating Range

The dimensions and operating range are shown below in millimeters, with variable height depending on the claws used.
<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/Specs.png"/>  
</div>

## Drive Mechanisms

This gripper features a classical Dual Crank & Slider mechanism, translating rotational to axial motion.

- **Crank & Slider Showcase:**

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/SliderCrank_Mechanism.gif"
       alt="Crank slider mechanism" width="720" />
</div>

- **Motion Simulation Showcase**

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/gripper_mechanism_motion.mp4"
            type="video/mp4" />
  </video>
</div>

## BOM

#### 🔩 Fasteners

| Name                                                   | Quantity |
|--------------------------------------------------------|----------|
| Phillips Pan Head Screw PM3×8                          | 8        |
| Hex Socket Cap Screw M3×20                             | 4        |
| Hex Socket Cap Screw M3×25                             | 6        |
| Hex Socket Cap Screw M3×50                             | 8        |
| Hex Socket Cap Screw M3×16                             | 12       |
| 304 Nylon Locking Hex Self-Locking Nut M3 (Thickness-3.9mm × Width-5.5mm) | 18 |
| Spring Washer – M3                                     | 4        |
| Flat Washer – M3×7mm (OD) × 0.5mm (Thickness)          | 8        |

#### ⚙️ Bearing

| Name                                                                 | Quantity |
|----------------------------------------------------------------------|----------|
| F3-8M Miniature Thrust Bearing (ID-3mm × OD-8mm × Thickness-3.5mm)   | 4        |

#### 🛠️ Linear Motion

| Name                                       | Quantity |
|--------------------------------------------|----------|
| Stainless Steel Linear Rail MGN9, 200 mm   | 1        |
| Linear Rail Carriage MGN9C (Standard)      | 2        |

#### 🔌 Actuator

| Name            | Quantity |
|-----------------|----------|
| DM4310-2EC Motor    | 1    |

#### 🧩 Custom Printables

| Name             | Quantity |
|------------------|----------|
| **3D Printed Parts** |1 set |

## Assembly Guide

### 3D-Printing Guide

- If you have dedicated support material or PETG+PLA in your
  <a href="https://wiki.bambulab.com/en/ams/manual/ams-function-introduction" target="_blank"><b>AMS</b></a>
  and want the best surface finish on supported faces, please refer to
  <a href="https://wiki.bambulab.com/en/filament-acc/filament/h2d-pla-and-petg-mutual-support" target="_blank"><b>This Wiki</b></a>.  
  *Note: your print job may take longer.*

- If you only have one filament to print, make sure you print with the correct orientations and decide whether you need the following steps (Turn On **ADVANCED** in Bambu Studio).

    :::warning
    Do not change the Top Z distance if you are using PETG or ABS. Keep them as default. Only change this if you use PLA.
    :::

  - Step 1: Print layout with minimal supports required  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/PrintLayout.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - Step 2: Scarf Settings provide a better surface finish as marked in Green Rectangles.  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/Scarf_Settings.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - Step 3: My Print Settings: 0.2mm layer height, 25% infill density, Style – 3D Honeycomb.  
    <p align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps1.png" alt="ps1" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps2.png" alt="ps2" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps3.png" alt="ps3" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps4.png" alt="ps4" height="500" hspace="5"/>
    </p>

### Step By Step Assembly Walkthrough

- Step 1: Fix the Claw Holders to the MGN9C sliders with eight M3×8 mushroom-headed screws  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S1.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 2: Stack the bearings, rotors, and linkages ("hamburger" style)  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S2.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 3: Place eight M7 washers above and below the slots  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S3.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 4: Place four nuts above and below the washers  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S4.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 5: Screw four pairs of M3×20 screws and spring washers to the nuts (use pliers if necessary)  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S5.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 6: Place the Base and Actuator in position; the patterns on the rotor plate and actuator should align  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S6.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 7: Screw six M3×16 screws to secure the rotor plate to the actuator  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S7.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 8: Push the claw base to the maximum range for the next steps  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S8.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 9: Attach the cam holder to the bottom  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S9.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 10: Fix the cam holder with four pairs of M3×25 screws and nuts  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S10.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 11: Fix the base with six M3×16 screws (Pull out the rail for this stage and slide it back in afterwards)

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S11.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 12: Use two pairs of M3×50 screws and nuts to lock the rail on the base  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S12.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 13: Slide the rail presser in and secure with two pairs of M3×25 screws and nuts  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S13.mp4"
            type="video/mp4" />
  </video>
</div>

- Step 14: Place the claws on the claw holders, and secure them with six pairs of M3×50 screws and nuts  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S14.mp4"
            type="video/mp4" />
  </video>
</div>

## Demos and CAD Files

- Follow the [**Damiao Actuators Wiki**](https://wiki.seeedstudio.com/damiao_series/) to get everything set up if you haven't done so.
- Follow the [**Torque Controller Demo**](https://github.com/tianrking/DM_Gripper/tree/main) (**many thanks to tianrking**) to get the gripper moving with a cool GUI.  

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/DM_GripperController.gif"
       alt="Gripper Controller Demo" width="720" />
</div>

- The CAD resources: editable STEP files and STLs are available [**here**](https://github.com/YlsonDdb/DM_Gripper).
