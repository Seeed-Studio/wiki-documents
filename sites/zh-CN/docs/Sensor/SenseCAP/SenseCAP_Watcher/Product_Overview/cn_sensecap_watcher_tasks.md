---
description: 您将获得对 Watcher 可以执行的不同类型任务以及它们在 SenseCraft 生态系统中如何组织的扎实理解。
title: 任务分配指南
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /cn/getting_started_with_watcher_task
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---


# SenseCAP Watcher 任务分配指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div><br />

欢迎来到 Watcher 任务分配教程。在本指南中，我们将引导您完成向 Watcher 发出命令的过程，使您能够有效利用其监控功能。

Watcher 是一个强大的工具，依靠用户发出的命令来执行各种监控和分析任务。通过向 Watcher 发送精确的指令，您可以指导它专注于特定目标、收集数据并提供有价值的见解。

在接下来的章节中，我们将深入了解任务分类、模型选择和定价信息的详细内容。我们的目标是为您提供必要的知识和技能，以便高效地为 Watcher 分配任务并充分利用其功能。我们将探索可用的不同类型任务，指导您为需求选择合适的模型，并明确相关成本。

在本教程结束时，您将对如何有效地向 Watcher 传达您的监控需求有扎实的理解。您将能够自信地分配任务、自定义设置并获得所需的结果。

准备好掌控 Watcher 并释放其全部潜力。让我们踏上这个任务分配之旅，发现 Watcher 如何帮助您实现监控目标！

## SenseCAP Watcher 高级配置

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher 是首个用于智能场所的物理 LLM 代理，能够监控场景、触发动作并基于命令进行交互。本视频将介绍 SenseCAP Watcher 如何基于任务分析选择场景触发模型：设备端模型和 LLM 模型。我们还将展示如何配置 RGB 灯和显示&声音警报，以及通知推送模式：APP、UART、HTTP。

## 任务概念

要开始使用 Watcher 并让 Watcher 能够理解您希望它执行的操作，您必须阅读这篇关于任务以及任务设置注意事项的文章。

### 任务的三个主要组成部分

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

Watcher 任务由三个主要组成部分构成：

- **对象**：指定的对象直接影响 Watcher 调用的本地识别任务模型。如果所选模型在 SenseCraft AI 中不可用，则直接调用基于云端的大模型引擎进行识别。

- **执行某些操作（可选）**：任务指令中是否存在动作描述决定了 Watcher 是否调用基于云端的大语言模型引擎。

- **动作**：触发 Watcher 任务时执行的动作。动作示例包括 RGB 灯闪烁、推送通知、Watcher 声音、SNS 等。

这些组件协同工作，定义了 Watcher 在触发特定任务时的行为。通过结合对象、可选的动作描述和所需的动作，用户可以创建适合其监控需求的自定义任务。

:::caution
图片中显示的任务示例仅为便于阅读和理解，语法和条件不一定需要与图片中显示的完全一致，但请确保您提供的任务指令包含上述三个组成部分。
:::

接下来，我们通过几个任务示例来了解一些概念和调用的服务。

### Watcher 本地 AI 服务

当在 Watcher 任务中将人设置为对象时，设备会自动选择本地 AI 服务模式。在此模式下，Watcher 首先检查 SenseCraft AI 库中是否有可用的人员检测预训练模型。如果模型存在，Watcher 会下载它并在设备本身上本地执行检测，而不依赖任何基于云端的服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

图像说明了这个过程。当指定人作为对象时，Watcher 调用**本地 AI 模型**进行人员检测。该模型分析设备摄像头捕获的视频流，并**实时**检测人员的存在。如果识别到人员，Watcher 会触发指定的动作，在这种情况下是通过设备扬声器播放声音"Hi, I'm Watcher"。

通过利用本地 AI 服务，Watcher 可以高效且独立地执行人员检测，无需持续连接到云端或使用大语言模型（LLM）。这确保了快速的响应时间并维护用户隐私，因为所有处理都在设备本地进行。

但是，如果 SenseCraft AI 库中没有所需的对象模型，Watcher 将切换到使用基于云端的 LLM 服务来执行检测。这种回退机制确保即使本地没有特定模型，设备仍然可以执行其任务。请参阅[纯 LLM 模式](#pure-llm-mode)。

然后，如果您设置的任务被判断为使用本地 AI 服务，那么在 SenseCraft APP 上，任务配置页面将大致显示如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### Watcher 基于云端的 LLM 服务

#### 纯基于云端的 LLM 服务

如果您在 Watcher 任务中将"蜡烛"设置为对象，但 SenseCraft AI 库中没有可用的蜡烛检测预训练模型，设备将**自动切换到使用基于云端的大语言模型（LLM）服务进行检测**。

:::danger
使用 SenseCraft AI 的某些服务可能需要付费，详情请参阅以下文档：

**[SenseCraft AI for Watcher 计划和权益](https://wiki.seeedstudio.com/cn/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

如图所示，当 Watcher 使用 LLM 服务检测到蜡烛时，它执行指定的动作，在这种情况下是向连接的移动应用发送推送通知。**这确保用户及时收到关于蜡烛存在的警报，即使设备无法在本地执行检测**。

通过利用基于云端的 LLM 服务的强大功能，即使 SenseCraft AI 库中没有特定模型，Watcher 仍然可以准确识别对象并触发适当的动作。这种回退机制增强了设备的多功能性，并确保它可以适应各种检测场景。

但是，需要注意的是，与本地检测相比，使用基于云端的 LLM 服务可能会导致响应时间稍慢，因为数据需要远程处理。此外，此模式需要设备有活跃的互联网连接才能与云服务通信。

:::note
用户只需要对这三种任务模式有基本了解，无需深入了解完整过程和复杂细节。介绍这些模式是为了确保用户在任务配置期间遇到不同用户界面时不会感到困惑或担心。每种模式都有其独特的应用配置页面，根据所选模式可能会有所不同。用户应根据其具体要求按照说明有效设置其 Watcher 任务。
:::

如果您设置的任务被判断为使用纯 LLM，那么在 SenseCraft APP 上，任务配置页面将大致显示如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

除了任务配置和执行功能外，纯云端LLM服务还允许用户与语言学习模型（LLM）进行纯文本对话。

此功能允许您直接与LLM交互，无需Watcher设备或任何基于图像的输入。您只需在聊天界面中输入您的消息或查询，LLM就会相应地回应。详情请参见[输入任务](#type-the-task)。

#### 本地AI + 云端LLM服务

Watcher设备的第三种操作模式是本地AI服务和云端LLM服务的组合。**当Watcher的本地AI服务识别到指定对象，但需要LLM云服务进一步分析以确定对象的行为或状态时，就会使用这种模式**。

:::danger
使用SenseCraft AI的某些服务可能需要付费，详情请参考以下文档：

**[SenseCraft AI for Watcher计划和优势](https://wiki.seeedstudio.com/cn/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

在图像显示的示例中，对象设置为"cat"，动作设置为"flashing light"。当Watcher使用其本地AI宠物检测模型检测到猫时，它会调用LLM云服务来分析猫的行为并确定它是否在"eating"。

如果LLM云服务确认猫确实在进食，Watcher就会执行指定的动作，在这种情况下是闪烁设备上的RGB灯。这种本地和云端服务的结合允许进行更复杂的检测和分析，使Watcher不仅能够识别对象，还能理解它们的动作或状态。

通过同时利用本地AI服务和LLM云服务，Watcher可以处理需要多层分析的复杂场景。本地AI模型首先检测指定对象的存在，而LLM云服务则提供对象行为的额外上下文和理解。

如果您放置了一个被判断为使用本地+LLM的任务，那么在SenseCraft APP上，任务配置页面将大致显示如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### 总结

以下是基于效率、成本和选择的三种模式对比表：

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>完全本地服务</th>
			<th colspan="2">依赖云服务</th>
		</tr>
        <tr>
            <th>本地AI服务</th>
			<th>云端LLM服务</th>
			<th>本地AI + 云端LLM服务</th>
		</tr>
		<tr>
            <th>效率</th>
			<td align="center">报警时间：<strong>2秒</strong><br />触发报警的最小时间间隔：<strong>5秒</strong></td>
			<td align="center">报警时间：<strong>10秒</strong><br />触发报警的最小时间间隔：<strong>30秒</strong></td>
			<td align="center">报警时间：<strong>10秒</strong><br />触发报警的最小时间间隔：<strong>30秒</strong></td>
		</tr>
		<tr>
            <th>成本</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>如何选择</th>
            <td><strong>优势</strong>：完全依赖Watcher的本地AI服务，无额外费用，识别和响应时间更快。如果有针对性的模型，理论上也会有更高的识别准确率。<br /><strong>缺点</strong>：如果没有模型，就无法使用该服务。如果需要对对象进行行为分析，也无法仅使用本地服务。</td>
            <td><strong>优势</strong>：可以识别广泛的对象，即使SenseCraft AI库中没有预训练模型。适用于需要对对象进行行为分析的任务。<br /><strong>缺点</strong>：需要活跃的互联网连接。使用云端服务可能产生额外费用，特别是在免费公测阶段结束后。与本地AI服务模式相比，响应时间稍慢。</td>
            <td><strong>优势</strong>：与云端LLM服务模式相比，此模式使用本地AI服务在调用云端LLM服务之前过滤掉非特定对象。对于不总是存在但有可用模型的对象，此模式可以通过仅对包含已识别对象的图像进行行为分析来大大降低调用云端LLM服务的成本。<br /><strong>缺点</strong>：结合使用云端LLM服务和本地AI服务可能仍会产生额外费用，尽管成本会低于专门使用云端LLM服务模式。需要活跃的互联网连接进行云端行为分析。与本地AI服务模式相比，整体响应时间稍慢。</td>
		</tr>
	</table>

</div>

1. "报警时间"的含义因模式而异：

    - **本地AI服务模式**：
        "报警时间"指的是触发报警后，Watcher的RGB灯或扬声器保持激活状态的持续时间。

    - **基于云端的LLM服务模式**：
        "报警时间"不仅表示RGB灯和扬声器激活的持续时间，还表示显示的摄像头画面暂停的时长。这种暂停是为了考虑将图像传输到云服务器进行分析所需的时间。

2. "触发报警的最小时间间隔"设置独立于"报警时间"，不代表顺序关系。此设置指定两次连续报警触发之间必须经过的最小时间。在配置任务时，用户**不允许**设置短于此最小间隔的报警时间。此限制确保系统有足够的时间处理和响应每个报警事件，然后才能触发另一个报警。此限制确保系统有足够的处理时间，防止过度或连续的报警触发，促进稳定可靠的运行。

:::danger
使用SenseCraft AI的某些服务可能会产生费用，详情请参考以下文档：

**[SenseCraft AI for Watcher计划和权益](https://wiki.seeedstudio.com/cn/watcher_price/)**
:::


## 通过SenseCraft APP下发任务

在了解了任务的分类和基本概念后，让我们更详细地了解如何在SenseCraft APP中向Watcher发出命令。假设您已经完成了Watcher配对过程并进入了Watcher聊天页面。如果您还不知道如何绑定设备，请参考[设备绑定和OTA升级](https://wiki.seeedstudio.com/cn/getting_started_with_watcher/#device-binding-and-ota-upgrade)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### 输入任务

每个Watcher设备在SenseCraft APP中都有自己专用的聊天窗口。要向特定的Watcher发出命令，请导航到其聊天窗口并使用输入字段输入您想要的命令。您可以手动输入命令或使用键盘的语音输入功能以增加便利性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

在编写命令时，提供清晰详细的指令至关重要，以确保Watcher理解并准确执行任务。您的命令应包含以下信息：

- 您希望Watcher识别的特定对象或物体。

- 与对象相关的任何附加动作或行为（如适用）。

- 您期望Watcher在成功识别后执行的所需动作或响应。

通过提供全面的指令，您可以使Watcher有效地理解并执行分配的任务。记住要尽可能具体和描述性，以获得最佳结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

除了任务配置和执行功能外，纯云端LLM服务还使用户能够与语言学习模型(LLM)进行纯文本对话。

纯云端LLM服务的基于文本的聊天功能为用户直接与LLM交互开辟了新的可能性。它提供了一种便捷的方式来访问LLM的知识和能力，而无需物理Watcher设备。

无论您有问题、需要特定主题的帮助，还是只想探索LLM的能力，基于文本的聊天功能都提供了与AI模型通信的无缝直观方式。

每当您需要信息、指导或只是想与LLM进行信息性对话时，请随时利用此功能。

:::danger
使用SenseCraft AI的某些服务可能会产生费用，详情请参考以下文档：

**[SenseCraft AI for Watcher计划和权益](https://wiki.seeedstudio.com/cn/watcher_price/)**
:::

### 识别或配置任务分解

完成任务命令输入后，按照以下步骤确认并执行命令：

1. 点击聊天窗口右下角的**发送**按钮提交您的命令。

2. 后端系统将处理并将您的任务命令分解为其组成部分。

3. 系统将返回一个小卡片，显示Watcher对您任务的理解。该卡片主要展示以下信息：

   - **When**：将启动任务执行的条件或触发器。
   - **Do**：Watcher在成功识别对象后将执行的动作或响应。
   - **Capture Frequency**：任务将被触发和执行的时间间隔。

4. 查看卡片上的信息，确保Watcher正确理解了您的任务指令。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. 如果您对Watcher的理解满意，请点击卡片上的**Run**按钮将任务部署到Watcher并开始执行。

6. （可选）要更详细地查看任务分解，请点击卡片上的**Detail Config**按钮。这将为您提供有关任务配置的其他信息。

如果您发现任何误解或希望对任务配置进行更改，请使用"详细配置"选项根据您的要求手动修改设置。如[任务概念章节](#concept-of-the-task)中所述，详细配置页面因模式而异。您只需根据实际情况选择或修改配置项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

在"详细配置"部分，您可以找到各种设置，允许您微调任务配置。以下是可用设置的概述：

1. **使用本地模型**：
- 当任务需要使用本地AI服务时，会出现此设置。
- 系统会根据您提供的任务自动从SenseCraft AI库中选择合适的模型。
- 您可以选择禁用本地AI服务的使用，这将导致直接利用基于云的服务进行图像分析。
- 您也可以手动修改模型选择，并从SenseCraft AI库中的公开可用模型中进行选择。
- 请注意，如果任务完全是本地的，您不能禁用"使用本地模型"选项。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

2. **场景**：
- 此部分显示动作的触发条件。
- 您可以根据需要调整类别数量并修改触发语句。
- 如果涉及更复杂的场景，可以通过添加条件来灵活调整。<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

3. **动作**：
- 在这里，您可以配置Watcher在触发警报后的行为。
- 指定您希望Watcher执行的动作，例如打开RGB灯、通过扬声器播放声音或发送通知。<br /><br />

4. **捕获频率**：
   - 此设置确定任务执行的时间间隔。
   - 根据您所需的监控间隔和任务的具体要求调整频率。<br /><br />

:::caution
在"详细配置"部分，将自动设置**捕获频率**的默认值。对于Watcher基于云的LLM服务，**捕获频率不能设置为低于60秒**。如果您使用Watcher本地AI服务，捕获频率设置将不可用，因为设备将提供实时警报。
:::

5. **工作时间范围**：
- 此设置允许您定义任务处于活动状态的时间范围。
- 指定任务操作的开始和结束时间，确保监控仅在指定的时间范围内进行。
- 请注意，为了使此设置正常工作，Watcher的内部时钟必须与您移动设备的系统时间同步。两者之间的不一致可能导致任务流程出现问题。<br />

通过探索和配置"详细配置"部分中的这些设置，您可以自定义任务以满足您的特定需求。花时间仔细审查和调整每个设置，以确保最佳性能并与您的监控目标保持一致。

7. 一旦您确认一切设置正确并符合您的期望，点击**运行**按钮启动任务执行。

通过遵循这些步骤，您可以确保Watcher准确理解您的任务命令，并且执行与您的预期目标保持一致。确认过程允许进行最终审查，并在将任务部署到Watcher之前进行任何必要的调整。

### 运行任务

在您仔细审查和配置"详细配置"部分中的任务设置后，您就可以将任务部署到您的Watcher设备了。要启动任务执行，请按照以下步骤操作：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. 点击任务配置卡片上的"运行"按钮。

2. 点击"运行"后，配置的任务将通过网络传输到Watcher。

3. 任务部署过程可能需要一些时间，因为它涉及两个主要阶段：

   - 任务接收：Watcher需要接收和处理从SenseCraft APP发送的任务配置数据。

   - 模型下载（如果适用）：如果任务需要使用本地AI服务，Watcher可能需要下载必要的AI模型来本地执行任务。

4. 在任务部署过程中，您可以通过SenseCraft APP监控进度：

   - 任务卡片的状态将发生变化，以指示当前的部署阶段。

   - 密切关注状态更新，以跟踪任务接收和模型下载（如果适用）的进度。

5. 任务部署完成后，您将观察到Watcher行为的变化：

   - Watcher将自动显示监控表情或指示它已准备好开始任务。

   - Watcher表现的这种变化表明任务执行已经开始。

### 查看当前任务和检查警报

SenseCraft APP提供了一种便捷的方式来监控正在运行的任务的进度和状态，以及查看任何触发的警报和相关的关键帧。

- 在此部分，您将找到有关Watcher设备上当前运行任务的信息。

- 当前任务将由一个小卡片表示，显示任务名称和相关的Watcher设备。

- 卡片将显示任务当前是否正在进行中，提供任务状态的快速概览。

当任务基于配置的条件触发警报时，SenseCraft APP 将通过推送通知或应用内警报通知您。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

在"检测历史"部分，您将找到运行任务触发的所有警报列表。每个警报将以卡片或列表项的形式显示，展示任务名称、Watcher 设备、时间戳和触发条件的简要描述等信息。点击警报卡片可查看有关警报的更详细信息，包括相关的关键帧图像。

关键帧图像是 Watcher 设备在触发警报时刻捕获的，提供检测到场景的视觉证据。您可以查看关键帧图像来分析情况并在必要时采取适当的行动。应用程序还可能提供确认或忽略警报的选项，具体取决于您的偏好和情况的严重程度。

### 结束任务

当您需要停止 Watcher 设备上当前运行的任务时，有两个便捷的选项可用：

选项 1：通过 SenseCraft APP 结束任务
1. 在您的移动设备上打开 SenseCraft APP 并导航到"当前任务"部分。
2. 找到代表 Watcher 设备上当前运行任务的任务卡片，然后点击"END"按钮。
3. 应用程序将向 Watcher 设备发送停止任务的请求，任务卡片将更新以反映任务的终止状态。

选项 2：直接在 Watcher 设备上结束任务
1. 轻触 Watcher 设备的屏幕或按下滚轮按钮以显示菜单或选项。
2. 选择"结束任务"选项，Watcher 设备将立即终止任务并返回到空闲状态。
3. SenseCraft APP 中的任务卡片将自动更新以反映任务的终止状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

两种方法都提供了在需要时停止任务执行的简单直观的方式。根据您当前的情况和与 Watcher 设备的距离选择最方便的方法。

## 通过语音发送任务

Watcher 提供了一种便捷直观的方式，通过语音命令发送任务，这要归功于其"按住说话"功能。此功能可从设备上的任何屏幕或界面访问，使您无需浏览菜单即可轻松与 Watcher 交互。以下是如何使用此功能的分步指南：

1. 激活按住说话：

   - 找到 Watcher 右上角的滚轮按钮。
   - 按住滚轮按钮进入语音输入界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. 说出您的命令或消息：

   - 按住滚轮按钮时，清楚地向 Watcher 说出您的任务或消息。
   - 您可以分配任务，例如"如果婴儿哭了告诉我"或"如果狗偷食物，说停下铜子"。
   - 或者，您可以通过提问或陈述来进行对话，例如"给我讲个笑话"。

3. 释放滚轮按钮：

   - 说完后，释放滚轮按钮。
   - Watcher 将处理您的语音输入并确定它是任务分配还是对话。

4. 任务分配：

   - 如果 Watcher 识别您的语音输入为任务分配，它将自动将您的任务分解为相关组件。
   - Watcher 将在其屏幕上显示卡片，显示**对象**（要监控什么）、**行为**（要寻找什么动作）、**通知**（如何提醒您）、**时间范围**（何时监控）和**频率**（多久监控一次）。
   - 查看显示的信息以确保它准确代表您预期的任务。
   - 如果详细信息正确，确认任务，Watcher 将开始根据指定参数执行它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

最佳使用技巧：

- 清楚地以适中的速度说话，以确保准确的语音识别。
- 说话时，请尽可能靠近 Watcher，大约 **3 ~ 10cm** 距离说话识别准确度最佳。
- 最小化背景噪音以提高 Watcher 理解您语音命令的能力。
- 分配任务时要具体简洁，以帮助 Watcher 准确解释您的意图。
- 如果 Watcher 误解了您的任务或对话，只需再次按住滚轮按钮提供澄清或更正。

通过利用按住说话功能，您可以轻松地发送任务并与 Watcher 进行对话，使您与设备的交互更加自然高效。

:::note
如果您遇到 **0x7002** 错误，这意味着当前 Watcher 的网络状态不佳，音频服务调用失败，请更换网络或位置后重试。
:::

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


