---
description: XIAO 的 PCB 设计
title: XIAO 的 PCB 设计
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/PCB_Design_XIAO
last_update:
  date: 11/07/2023
  author: Matthew
---

# 在 Flux.ai 上创建 XIAO 组件

Flux 是一个基于浏览器的 PCB 设计工具，能够实现电子团队之间的无缝协作。该工具的直观界面允许用户快速轻松地创建原理图和布局，而其内置的仿真功能有助于确保设计准确无误。

在本节中，我们将介绍在 Flux.ai 上创建 Seeed Studio XIAO 系列组件。

## 浏览器 Seeed Studio XIAO 系列 PCB 设计

### Seeed Studio XIAO SAMD21

<div class="video-container">
<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1">
</iframe>
</div>

### Seeed Studio XIAO RP2040

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO nRF52840

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO nRF52840 Sense

<div class="video-container">
<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1">
</iframe>
</div>

### Seeed Studio XIAO ESP32C3

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO ESP32S3

<div class="video-container">
<iframe height="450" width="800" allowFullScreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3?editor=schematic&embed=1" />
</div>

### Seeed Studio XIAO ESP32S3 Sense

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1" />
</div>

## 关于 Flux.ai 的知识 - 创建器件

Flux 中的器件由 5 个主要组件组成。所有这些组件都是可选的，但缺少组件的器件将无法提供其全部功能：

| 概念 | 描述 |
| --- | --- |
| 原理图 | 器件的"内部"视图，仅由端子表示。 |
| 符号 | 器件拖入其他项目时的表示形式，通常是用户从其他工具中熟悉的形式。 |
| 封装 | 表示物理器件在电路板上的放置方式。 |
| 3D 模型 | 显示器件的 3D 形状和尺寸。 |
| 仿真模型 | 描述器件在仿真过程中的行为方式。 |

## 入门指南

### 步骤 1 - 创建新的器件原理图

第一步是创建一个新的空白项目，您可以在右上角的主 Flux 菜单中执行此操作。端子是在 Flux 中创建的每个器件的基础。它们允许器件与电路的其余部分交互。要向新器件添加端子，请转到库，搜索"Terminal"并拖入所需数量的端子。

在这个例子中，我们将添加 Seeed Studio XIAO ESP32S3，所以我只添加了 14 个端子引脚并给出了名称和编号

您可以在器件属性中提供有关器件的更多信息，如制造商器件编号 (MPN)、制造商名称、数据表 URL 等。输入组件的 MPN 将帮助您找到组件的当前库存可用性和价格。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### 步骤 2 - 创建符号

Flux 的工作方式与您可能习惯的其他工具略有不同。在 Flux 中，器件有两种不同的视图：原理图和符号。步骤 1 中的原理图视图仅包含端子。符号仅在器件放置到项目中时才可见。现在让我们为我们的 xiao 创建一个符号，但为此我们需要使用一些外部工具，如 illustrator 或 Inkscape。设计的符号格式需要是 .svg

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

设计符号时需要考虑的事项：

- 每个形状和线条都应该是白色的，具有 1px 描边宽度且无填充。
- 引脚通常长 10 到 18 像素。
现在将符号导出为 SVG 文件。

### 步骤 3 - 将 SVG 添加为资源

获得 SVG 文件后，将其添加为资源。要将外部文件添加为资源，请确保没有选择任何对象（单击空白画布）。在右侧抽屉中，向下滚动直到找到资源面板。打开它并单击"Add"（或"Manage"）。这将打开资源对话框。然后单击"Add item"并从本地驱动器选择文件。
**将引脚位置与自定义符号匹配。**
默认情况下，所有端子都将位于符号的中心。要将端子定位到所需位置，还需要几个步骤。

1. 将器件发布到库中。
2. 创建一个新的空白项目并拖入您正在导入的器件。
3. 您会注意到两个端子都在符号的中心。现在回到导入的器件。
4. 您需要对器件中的每个端子执行此过程。
a) 选择端子并在右侧面板中找到"Properties"菜单。
b) 在"Symbol Pin Position"字段中，输入端子在符号上所需的 x 和 y 坐标。
c) 发布器件并返回新项目。您会在左下角看到"Update available for your parts"图例。单击"Review"并接受更改。
d) 您会注意到端子已移动。您可能需要重复此过程几次才能确定完美的位置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>

### 步骤 4 - 创建封装

在 Flux 中创建封装非常简单。它们由焊盘、线条、形状和文本节点组成，可以直接在 Flux PC 编辑器中添加。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>

当您首次在 flux 上创建封装时，所有焊盘都将在一个位置，这将显示为小点。
 要更改焊盘位置
 在右侧面板上选择要移动的焊盘，在对象特定规则中找到位置规则，
 以毫米为单位输入所需的 x 和 y 位置。

### 步骤 5 - 修改焊盘尺寸和形状

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>

通过单击其中一个焊盘，您可以更改其形状、位置、孔径和其他属性。对于 xiao，我选择了 3mm*2mm 尺寸的焊盘和 1.1mm 的孔。通过利用 x 和 y 位置毫米，将每个引脚间隔 2.54mm。
**添加 3d 模型**

现在我们需要添加 xiao 的 3d 模型，flux 支持 .step 文件用于 3d 模型，您可以从官方 wiki 页面下载。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>

您可以从资源部分上传 3d 模型。视频中提供了有关添加 3d 模型的更多详细信息。
您可以从对象指定规则更改 x y z 位置和旋转。使用此功能，您可以将 3d 模型定位在焊接焊盘的顶部。
**发布到库**
创建组件后，是时候发布它了

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>

选择左上角的 flux 标志，然后选择发布更改。
现在我们的组件将在我们的个人资料中可用，也会在公共库搜索中显示

## 更多内容 - 教程视频

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ 贡献者项目

- 此项目由 [Seeed Studio 贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6) 支持。
- 感谢 [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283) 的努力，您的工作将被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
