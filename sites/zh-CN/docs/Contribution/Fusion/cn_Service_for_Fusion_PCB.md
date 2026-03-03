---
description: Fusion PCB 服务
title: Fusion PCB 服务
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Service_for_Fusion_PCB
last_update:
  date: 1/13/2023
  author: shuxu hu
---

在使用 [Fusion PCB 服务](https://www.seeedstudio.com/fusion_pcb.html)之前，请仔细阅读本页面。**价格将根据您的选项计算**。

## 关于 PCB 服务

作为爱好者，我们整合了本地制造资源，拼版设计，降低运输成本，并确保质量。这将成为我们工作室与其他服务一起持续发展的来源。

### Fusion PCB 订单步骤

1. 访问 Fusion PCB 订单页面：[https://www.seeedstudio.com/fusion_pcb.html](https://www.seeedstudio.com/fusion_pcb.html)

2. 上传 Gerber 文件并选择参数。

3. 结账并支付订单。

如果文件和设计符合要求，它们将在 4-6 天内处理并发货（不包括中国节假日）。

### Gerber 文件要求

**需要以下图层：**

- 顶层：pcbname.GTL
- 底层：pcbname.GBL
- 顶部焊盘阻焊层：pcbname.GTS
- 底部焊盘阻焊层：pcbname.GBS
- 顶部丝印层：pcbname.GTO
- 底部丝印层：pcbname.GBO
- NC 钻孔：pcbname.TXT
- 至少在一个图层中包含板轮廓。

- Gerber 文件必须为 RS-274x 格式。

### PCB 设计提示

单一设计，不允许拼版

**注意：**

- 您的 Gerber 文件必须仅包含一个设计。
- 不接受钻孔线和长槽。
- 最小槽尺寸为 1mm*1mm。
- DRC 兼容规则文件已附。
- PCB 尺寸为可容纳 PCB 的最小矩形。

**可选数量选项：** 10pcs, 50pcs, 100pcs 及更多。

我们这里的最小起订量为 5pcs。

**注意：** 如果您想订购超过 10pcs，请检查不同选项的价格并选择最经济的选项。

**示例：**
对于 PCB 尺寸 (50mm X 100mm)，4 x 10pcs 选项的成本高于 1 x 50pcs 选项。

### Fusion PCB 能力

- 多层：最多 16 层

- PCB 材料：FR-4

- 可选颜色：

- 阻焊层：绿色、红色、黄色、蓝色、白色、黑色

- 丝印层：白色、黑色（仅适用于白色阻焊层）

- 字体：最小线宽为 6 mil，最小高度为 32 mil，稍大一些会更好。

**可用最大尺寸：** 50mm X 50mm, 50mm X 100mm, 50mm X 150mm, 50mm X 200mm, 100mm X 100mm, 100mm X 150mm, 100mm X 200mm, 150mm X 150mm, 150mm X 200mm, 200mm X 200mm

**注意：** PCB 尺寸（长度和宽度）必须在 PCB 尺寸选项范围内。

**示例：**

PCB 设计：30mm X 60mm   选项：50mm X 50mm (否)   50mm X 100mm (是)

PCB 设计：101mm X 40mm   选项：100mm X 50mm (否)   150mm X 50mm (是)

PCB 设计：70mm X 70mm   选项：50mm X 150mm (否)   100mm X 100mm (是)

**可用板厚：** 0.8mm, 1.0mm, 1.2mm, 1.6mm, 2.0mm

（0.8mm, 1.0mm, 1.2mm 和 1.6mm 的成本相同）

**厚度公差：** (t≥0.8mm) +/- 10%

**厚度公差：** (t&lt;0.8mm) +/- 10%

**绝缘层厚度：** 0.075mm--5.00mm

**最小线宽：** 6mil

**最小间距：** 6mil

**外层铜厚度：** 1oz (35um)

**内层铜厚度：** 17um—100um

**钻孔（机械）：** 0.3mm—6.35mm

**成品孔径（机械）：** 0.3mm—6.30mm

**孔径公差（机械）：** 0.08mm

**注册精度（机械）：** 0.09mm

**纵横比：** 8:1

**阻焊类型：** 感光油墨

**SMT 最小阻焊宽度：** 0.1mm

**最小阻焊间隙：** 0.1mm

**填孔直径：** 0.25—0.60mm

**表面处理：** HASL, HASL（无铅）+\$5, ENIG+\$10。

**电气测试：** 50% 电气测试，100% 电气测试 +\$10  
50% 电气测试（测试过的 PCB 会在 PCB 边缘有标记）。  
100% 电气测试可选，需额外支付 \$10。

**Eagle 设计规则：** [http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification](http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>