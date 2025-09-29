---
description: 本文将向您展示如何创建设备图形

title: 使用 reComputer R1000 和 FIN 创建设备图形
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_equip_gaphic
last_update:
  date: 07/22/2024
  author: ShuishengPeng
---

## 介绍

FIN Framework (FIN) 是一个软件框架，具有可以集成、控制、管理、分析、可视化和连接的应用程序套件。其功能可以被 OEM 厂商集成到各种产品和服务中。

本文将向您展示如何使用 FIN Framework 的 `Graphics Builder`，并使用 `Graphics Builder` 创建 `设备图形`。

## 开始使用

在开始此项目之前，您可能需要按照此处所述提前准备硬件和软件。

### 硬件准备

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件准备

* 关于如何安装 FIN Framework，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/)。

## 创建设备图形的步骤

### 创建新的设备图形

**步骤 1**：请将上下文放在路径 `Tower => Floor1 => ModbusEquip` 下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**步骤 2**：创建一个新的 `设备图形`。点击 `Graphic Builder => new`，根据系统上下文，将出现一个名为 `Create a Graphic` 的弹出窗口：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

弹出窗口主要具有以下属性：

- **Graphic Name：** 允许您为图形输入名称。
- **Graphic Template：** 允许您从可用的预构建"管道模板"列表中选择启动模板。这不是必需参数，只是为您提供管道工程的起点。（您也可以创建自己的模板在此处使用）。
- **Graphic On Filter：** Graphic On 过滤器指的是图形的"graphicOn"标签，它决定了此图形将在哪些数据库记录上运行。默认情况下，此过滤器将根据您的上下文设备自动填充。（在我们的示例中，我在 VAV 上创建了图形，这就是为什么截图中的此过滤器填充了该 VAV 的标签）。如果需要，可以在事后更改此过滤器。
- **Relative - By Tags：** 此选项使点根据其当前标签自动以相对方式引入。当点是相对的时，它们不会"硬编码"到一组设备的数据。它们是相对的，将根据点的标签在具有类似点的任何设备上加载。
- **Relative - By navName：** 此选项使点根据其当前 navName 自动以相对方式引入。当点是相对的时，它们不会"硬编码"到一组设备的数据。它们是相对的，将根据点的 navName 在具有类似点的任何设备上加载。
- **Absolute - by Point Ids：** 此选项使点自动以绝对方式（或`硬编码`）引入到您当前所在的设备。当点以"Absolute by Point id"方式引入时，路径会自动硬编码以从该确切点获取数据，无论图形在何处加载。
- **Points：** 这允许您选择要引入图形的点。通过使用 *CTRL* 和/或 *SHIFT* 键，您可以选择多个点。点是根据您的上下文设备填充的。您还可以获得与该设备的引用相关联的点。（在我们的示例中，VAV 有一个 ahuRef，因此我们能够从 ahuRef 中选择点以在我们的图形中显示）
- **Add Components For：** 此列表由您在前面"Points"部分中选择的点填充。通过在此部分中突出显示点，您告诉 FIN 自动创建图形组件（基于其标签）并将点绑定到图形组件。这不是必需的，但可以节省时间，因为它选择组件、引入它、将点绑定到它，并为其带出显示标签。

配置完成后，点击 `OK` 按钮。右侧将出现一个新图形。点击 `EquipGraphic => Edit` 进入编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>

### 配置新的设备图形

**步骤 1**：进入编辑界面后，系统将根据在 `Add Components for` 属性中选择的内容自动生成智能标签和组件。移动控件并点击 `Magic Button => Smart Label to GraphicObjects` 使智能标签自动与控件对齐。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**步骤 2**：检查 `Virtual point`。您可以通过邮件点击控件并选择 `Edit Properties`。您可以在新弹出窗口中看到 `virtual point`，并可以在此处修改它；您也可以通过左下角的 `ADVANCED` 查看控件对应的 `virtual point`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**步骤 3**：添加新组件并连接 `virtual point`。除了系统为我们自动生成的组件外，我们也可以自己添加它们。左侧的 `COMPONENTS` 框中有许多组件。用鼠标左键将控件拖到工作控件上，然后在 `VIRTUAL POINTS` 列中选择相应的 `virtual point` 并将其拖入新的主控件。这样就完成了新控件与虚拟点的绑定。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**步骤 4**：添加 `Overview Box`。我们可以添加一个 `Overview Box` 来一起显示所有值。点击 `Overview Box => New`，将出现一个新的弹出窗口：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **Mini Group：** 如果启用，这将使概览框显示更大的值和更小的标题区域。此框比常规框小，建议用于需要在图形上显示框的场景，例如 VFD（Spd、Cmd、Ena、Stat）
- **Points**：这将允许您选择要包含在概览框中的点。**提示：** 如果在打开概览框向导之前选择了任何智能标签，这些点将已经在向导的点列表中被选中。
  
选择点后，在下一个窗口中输入窗口标题，最后点击 `APPLY`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**步骤 5**：显示结果

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
