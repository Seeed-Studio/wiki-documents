---
description: 更换Reachy Mini麦克风组件中损坏的FPC线缆的分步教程。
title: 更换麦克风FPC线缆
slug: /reachymini_troubleshooting_change_mic_fpc_cable
keywords:
  - fpc线缆
  - 麦克风
  - 更换
  - 维修
  - 教程
  - 损坏的线缆
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_troubleshooting_change_mic_fpc_cable/
---

# 教程：如何更换Reachy Mini麦克风的FPC线缆？

## 简介
由于FPC线缆损坏，您的麦克风可能无法正常工作。本教程将引导您完成更换Reachy Mini麦克风FPC线缆的过程。

## 损坏的FPC线缆示例
以下是麦克风损坏的FPC线缆示例：
![损坏的FPC线缆](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/fpc_collage.jpg)

## 麦克风的新FPC线缆
要更换麦克风的FPC线缆，您需要获取一根与原始线缆规格匹配的新FPC线缆。

麦克风线缆的规格如下：
- FFC/FPC柔性扁平线缆
- 12针
- 0.5mm间距
- A型（连接器在同一侧）
- 15mm长度

以下是一些麦克风线缆替换件的参考链接：
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## 更换麦克风FPC线缆的步骤
1. 关闭Reachy Mini的电源并拔掉电源线。
2. 按照组装指南的说明打开Reachy Mini的头部。
3. 找到麦克风和连接到它的FPC线缆。
4. 小心断开FPC线缆与头部电路板的连接。

现在您应该拥有带有损坏FPC线缆的麦克风+顶部头部组件，如下图所示：
![带有损坏FPC线缆的麦克风组件](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/microphone_assembly.jpg)

5. 首先轻轻打开一侧的橡胶隔离壳。不需要工具，只需用手指剥开即可。
![剥开橡胶隔离壳](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_1.jpg)
6. 对橡胶隔离壳的另一侧进行相同的操作。小心不要突然拉扯。
![剥开橡胶隔离壳](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_2.jpg)
7. 移除橡胶隔离壳并放在一旁。
![橡胶隔离壳已移除](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/rubber_case_removed.jpg)
8. 现在您可以看到FPC线缆和麦克风板。轻轻移除黑色胶带并从麦克风板上断开FPC线缆。小心不要损坏连接器。
![从麦克风板上断开FPC线缆](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/disconnect_fpc_microphone.jpg)
9. 取出新的FPC线缆，按相反的步骤将其连接到麦克风板。确保连接牢固，但不要用力过大。
10. 将橡胶隔离壳重新放回麦克风组件上，并轻轻按压以将其固定到位。

现在您可以将新的FPC线缆插回头部的电路板，并按照组装指南的说明重新组装Reachy Mini的头部。