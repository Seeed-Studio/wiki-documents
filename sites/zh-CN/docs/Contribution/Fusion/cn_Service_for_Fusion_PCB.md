---
description: Seeed Fusion PCB 与 PCBA 服务指南
title: Seeed Fusion PCB 与 PCBA 服务指南
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Service_for_Fusion_PCB
last_update:
  date: 9/16/2026
  author: shuxu hu
createdAt: '2023-02-17'
updatedAt: '2025-09-18'
url: https://wiki.seeedstudio.com/cn/Service_for_Fusion_PCB/
---

本指南涵盖 PCB 制造和 PCB 组装，包括能力范围、生产文件、下单流程、设计要求、工程审核、测试以及交付规划。

## 关于 Fusion PCB 与 PCBA

Seeed Fusion 提供裸板 PCB 制造和一站式 PCBA 服务，包括元器件采购和组装，适用于从原型、小批量到批量生产。你可以只订购裸板，或在同一个项目中添加组装和测试需求，并在 [Fusion 下单页面](https://www.seeedstudio.com/fusion_pcb.html) 提交。

### Fusion PCB 与 PCBA 下单步骤

1. 打开 [Fusion PCB/PCBA 下单页面](https://www.seeedstudio.com/fusion_pcb.html)。

2. 上传 Gerber 压缩包，并选择板子尺寸、数量和制造选项。

3. 对于裸板 PCB，查看报价并继续结算。对于组装，启用 **PCB Assembly**，上传 BOM，输入 PCBA 数量，并添加相关的组装或测试文件。

4. 检查元器件匹配情况和价格明细，然后完成结算和付款。

PCB 订单起订量为 5 片，PCB 组装订单起订量为 1 片。价格取决于所选 PCB 规格和数量，以及 PCBA 订单中元器件和组装的要求。

### Gerber 文件要求

将 Gerber 和钻孔文件放在同一个文件夹中，并上传 ZIP 或 RAR 压缩包（最大 20 MB）。下表展示了设计中各层常见的文件名。

| 文件 | 文件名示例 |
| --- | --- |
| 顶层 / 底层铜箔 | pcbname.GTL / pcbname.GBL |
| 顶层 / 底层阻焊层 | pcbname.GTS / pcbname.GBS |
| 顶层 / 底层丝印层 | pcbname.GTO / pcbname.GBO |
| 板框 | pcbname.GML 或 pcbname.GKO |
| 钻孔文件 | pcbname.TXT |
| 内层铜箔 | pcbname.GL2、pcbname.GL3 等 |

多层板需包含相应的内层铜箔文件。Gerber 文件请使用 RS-274X 格式，钻孔文件请使用 Excellon 格式。必须提供完整的板框，最好放在单独的机械层上。

在下单前，请使用[下单页面](https://www.seeedstudio.com/fusion_pcb.html)上的 Gerber Viewer 预览导出的文件。检查板框和各层是否与预期设计一致。

### PCBA 订单的附加文件

#### 物料清单（BOM）

Gerber 文件和 BOM 是启动 PCBA 报价和文件审核的基础文件。请使用 Fusion 模板，以 XLS、XLSX 或 CSV 格式准备 BOM。

| 字段 | 需要填写的内容 |
| --- | --- |
| Designator | 器件位号，例如 R1、R2、C1 |
| MPN / Seeed SKU | 完整的制造商料号或 Seeed 元器件 SKU |
| Quantity | 每块 PCBA 所需数量；对于拼板设计，请按整块拼板计算数量 |
| Part Link | 可选，产品页面或数据手册链接 |

只需包含需要由 Fusion 采购和组装的元器件。PCB 上显示但未列入 BOM 的元器件，默认不会被采购或组装。模板和格式规则请参阅 [BOM 编制指南](https://support.seeed.cc/portal/en/kb/articles/how-do-i-prepare-the-bill-of-materials-bom-file-for-seeed-fusion-pcba-orders)。

#### 组装文件

请基于与 Gerber 文件和 BOM 相同的设计版本，准备以下组装信息。

| 文件 | 主要用途 |
| --- | --- |
| 组装图 | 显示元器件位置、位号、极性、方向以及插件要求 |
| CPL / 贴片坐标文件 | 提供 SMT 贴装所需的位号、X/Y 坐标、旋转角度和贴装面信息 |
| 编程和测试文件 | 当订单包含固件编程或功能测试时必需；请包含固件版本、操作步骤、预期结果以及判定通过/失败的标准 |

对于双面组装图，请同时提供两面。仅插件的组装不需要 SMT 贴装坐标。请参阅[组装图导出指南](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-assembly-drawings-fabrication-files-for-seeed-fusion-pcba-orders)和[贴片坐标文件导出指南](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-pick-and-place-xy-files-for-seeed-fusion-pcba-orders)。

### PCB 设计提示

拼板是将多个板子组合成一个生产面板。Fusion PCB 支持包含同一设计重复拷贝或不同设计的拼板。

- **板框和槽孔：** 请包含完整的板框，并在板框层（GKO/GML）中标注 V-Cut 线或铣槽。

- **V-Cut 布局：** V-Cut 线必须是直线，并从面板的一边贯穿到另一边，不能在面板中途停止。

- **丝印标记：** 仅有丝印线并不能表示切割。若板框层中没有切割指示，面板将作为一整块板交付。

布局示例和下单要求请参阅 [PCB 拼板规则](https://support.seeed.cc/portal/en/kb/articles/what-are-the-pcb-panelization-rules)。

PCB 尺寸以包络完整板框的最小矩形来测量。对于拼板订单，请使用整块拼板的外形尺寸。

上传文件后，请核对下单页面检测到的尺寸是否与设计一致。如果自动测量缺失或不准确，请手动更正。

## Fusion PCB 能力范围

#### 板材类型与材料

Fusion 支持刚性板、柔性板和金属基板 PCB，以满足不同的电气和机械需求。

| 类型 | 选项及典型应用 |
| --- | --- |
| FR-4 | 通用刚性板；提供 TG130、TG150 和 TG170 材料。 |
| 铝基 PCB | 适用于 LED 照明、电源电子等应用的金属基板。 |
| 柔性 PCB | 用于紧凑布局和互连的柔性电路。 |
| 刚柔结合 PCB | 集成刚性和柔性区域，可通过 Advanced PCB 服务提供。 |
| 高频 PCB | 适用于射频和高频设计的 Rogers RO4003C 和 RO4350B 材料。 |
| 铜基 PCB | 适用于散热要求严苛的高功率应用的金属基板。 |

对于 HDI、高层数板、刚柔结合、高频设计及其他特殊需求，请使用 [Advanced PCB 服务](https://www.seeedstudio.com/fusion-advanced-pcb.html)。[PCB 材料指南](https://www.seeedstudio.com/blog/2026/08/07/seeed-fusion-what-pcb-base-materials-does-seeed-fusion-offer-and-which-one-should-you-choose/)解释了这些材料之间的差异。

#### 常见 FR-4 制造规格

以下规格适用于 FR-4 板，不是上文列出所有板材类型的综合规格。

| 项目 | 规格 |
| --- | --- |
| 板子尺寸 | 10 × 10 mm 至 500 × 500 mm；尺寸公差：±0.2 mm。V-Cut 拼板有额外尺寸限制。 |
| 2 层板厚度 | 0.6、0.8、1.0、1.2、1.6、2.0、2.5、3.0 mm |
| 4 层板厚度 | 0.8、1.0、1.2、1.6、2.0、2.5、3.0 mm |
| 板厚公差 | 厚度 ≤1.0 mm：±0.1 mm；更厚的板：±10%。 |
| 铜厚选项 | 1 oz、2 oz、3 oz |
| 最小线宽 / 线距 | 1 oz：4/4 mil；2 oz：10/10 mil；3 oz：15/15 mil。详见下文附加条件。 |
| 机械孔 | 非金属化孔：0.2–6.3 mm；金属化通孔：0.2–5.8 mm。 |
| 半孔 | 最小孔径：0.5 mm |
| 铣槽宽度 | 非金属化：≥0.8 mm；金属化：≥0.65 mm |
| 走线至板边间距 | ≥0.3 mm |
| 阻焊颜色 | 绿色、红色、黄色、蓝色、白色、黑色 |
| 阻焊桥 | 选择 0.1 mm 阻焊桥选项时：绿色 ≥0.10 mm，其他颜色 ≥0.13 mm；未选择该选项时：绿色 ≥0.32 mm，其他颜色 ≥0.35 mm。 |
| 丝印 | 白色阻焊为黑色丝印；上述其他颜色为白色丝印。最小文字高度：23 mil；最小线宽：4 mil。 |
| 表面处理 | 含铅喷锡、无铅喷锡、沉金、OSP、硬金 |

对于射频线圈设计，请至少使用 6/6 mil 线宽和线距，并选择 4/4 mil 选项。对于 4 层板，内层走线宽度至少为 6 mil。

叠层结构和更多工艺相关要求请参阅 [Fusion PCB 规格说明](https://support.seeed.cc/portal/en/kb/articles/fusion-pcb-specification)。

### Fusion PCBA 能力范围

Fusion 支持元器件采购以及表面贴装、插件和混合组装，适用于原型、小批量和批量生产。

| 项目 | 能力 |
| --- | --- |
| 组装方式 | 表面贴装（SMT）、插件（THT）和混合组装 |
| 组装面 | 单面和双面 |
| 小尺寸器件 | 封装最小可至 0201 |
| 精细间距器件 | 0.4 mm 间距 BGA 和 0.4 mm 引脚间距器件 |
| 元器件采购 | 基于提交的 BOM 进行采购 |
| 工程支持 | 每个 Fusion PCBA 订单均提供免费的 DFA 审核 |
| 测试与编程 | 功能测试、固件编程和定制测试夹具 |

服务概览请参阅 [Fusion PCB Assembly 服务](https://www.seeedstudio.com/pcb-assembly.html)。

### 工程审核与质量支持

DFM（面向制造的设计）检查裸板 PCB 是否可制造。DFA（面向组装的设计）检查指定元器件是否可以正确组装。

- **PCB 制造审核：** 对可能影响生产的线宽线距、孔径或阻焊开窗等问题，会在生产开始前提出。

- **PCBA 订单免费 DFA 审核：** 每个 Fusion PCBA 订单都会对 Gerber、BOM 和组装信息进行审核，检查封装兼容性、元器件干涉以及极性或方向问题，帮助在上板前发现潜在的组装问题。

- **PCBA 检验与测试：** 能力包括用于可见组装缺陷的 AOI、用于隐藏焊点的 X-Ray 检测以及用于电气检查的 ICT。功能测试根据客户提供的测试方案，验证组装板的预期功能。实际采用的检验和测试方法取决于板子设计和测试要求。

阅读 [DFA 评审指南](https://www.seeedstudio.com/blog/2026/08/31/seeed-fusion-pcba-dfa-review-guide-what-engineers-check-before-assembly/) 和 [PCBA 质量控制指南](https://www.seeedstudio.com/blog/2026/08/18/seeed-fusion-pcba-quality-control-flying-probe-aoi-x-ray-ict-and-fct-explained/)，或了解 [Fusion 测试服务](https://www.seeedstudio.com/fusion-testing-solutions.html)。

### 生产与发货

PCB 生产时间取决于板子复杂度、层数、材料、数量以及制造工艺。[订单页面](https://www.seeedstudio.com/fusion_pcb.html)上的 **Production Time** 字段会显示所选配置的预计时间。对于 PCBA 订单，元件可用性和组装要求也会影响排期。

Production Time 从文件确认开始计算，到包装结束。文件审核以及因文件问题导致的延误不在此时间范围内。之后是发货和运输；运输时间取决于目的地和所选物流方式。在规划交期时，请为每个阶段预留时间，而不要将生产时间视为到货日期。

[Fusion 交期 FAQ](https://support.seeed.cc/portal/en/kb/articles/how-long-do-fusion-orders-take) 提供了关于订单各阶段的更多信息。

### 常见问题

**在哪里可以找到详细的下单说明？**

[分步 PCB 下单指南](https://support.seeed.cc/portal/en/kb/articles/how-to-place-a-fusion-pcb-order) 涵盖 PCB 文件上传、制造选项、结算和付款。关于组装，请参阅 [PCBA 下单指南](https://support.seeed.cc/portal/en/kb/articles/how-do-i-place-a-seeed-fusion-pcb-assembly-pcba-order)。

**如何从我的设计软件中导出 Gerber 文件？**

导出所需的铜层、阻焊层、丝印层和外形层，以及钻孔文件。[Gerber 导出指南](https://support.seeed.cc/portal/en/kb/fusion/how-to-generate-pcb-gerber-files) 提供了针对不同 PCB 设计工具的操作说明。

**我已经有 PCBAs 了，还能单独申请测试吗？**

可以。请在 [Fusion Testing Solutions](https://www.seeedstudio.com/fusion-testing-solutions.html) 上选择仅测试选项，并提交所需的设计和测试文件。

**我的订单状态显示 Pending / Awaiting Revised File。我该怎么办？**

检查你注册时使用的邮箱地址（包括垃圾邮件文件夹），查看问题说明。根据指示修改并重新上传文件，以便订单继续处理。详情请参阅 [文件修改 FAQ](https://support.seeed.cc/portal/en/kb/articles/my-fusion-order-status-is-pending-awaiting-revised-file-what-should-i-do)。

**如果我的板子需要网站上未列出的选项怎么办？**

通过 [Advanced PCB 服务](https://www.seeedstudio.com/fusion-advanced-pcb.html) 提交设计需求，以便工程评审和报价。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
