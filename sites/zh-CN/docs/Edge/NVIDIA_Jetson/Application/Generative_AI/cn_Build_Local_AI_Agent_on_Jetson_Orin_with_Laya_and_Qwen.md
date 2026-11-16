---
title: 在 Jetson Orin 上构建本地浏览器 Agent
description: 一个小型本地决策模型在 NVIDIA Jetson Orin 上为每一步浏览器操作做出选择；Qwen 负责执行。Laya + Qwen 在 reComputer 上的演示，完全本地运行，无需云端。
keywords:
  - NVIDIA Jetson
  - Jetson Orin
  - Jetson Orin NX
  - 本地 AI agent
  - 浏览器 agent
  - 本地浏览器 agent
  - Laya 决策模型
  - Qwen3.5
  - 浏览器自动化
  - reComputer Industrial
  - 边缘 AI
slug: /jetson/local_decision_model_laya
draft: false
image: https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png
last_update:
  date: 11/04/2026
  author: zibo
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/cn/jetson/local_decision_model_laya/
---

# 使用决策模型在 Jetson Orin 上构建本地浏览器 Agent

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png" alt="Illustration of reComputer Industrial hardware connected to a Laya and Qwen action selector and a flight-search browser, with CLICK selected." />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

本 wiki 将构建一个**运行在 NVIDIA Jetson Orin 上的本地浏览器 agent**。**Laya 本地决策模型（System One 模型）负责选择下一步动作；Qwen3.5-4B 负责请求解析和文本生成。** 测试数据来自一台搭载 Jetson Orin NX 16GB 的 **reComputer Industrial J4012**。

决策模型是可替换的：本演示使用 Laya，但任何能以 JSON 返回结构化动作的模型都可以替代它。

先来看一下实际测试结果。我们让 agent 搜索从深圳到上海的单程直飞航班，按最低价格排序，并展示匹配航班的票价选项。整个执行过程仅耗时 32.8 秒。使用过 agent 执行各种浏览器自动化操作的同学会知道，这样的耗时是相当有优势的。
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-flight-search-demo.gif" alt="Animated screen recording of the flight demo: the agent fills in and confirms a one-way Shenzhen to Shanghai search, narrows results to nonstop flights sorted by lowest price, and opens the fare-options layer for one matching flight." loading="lazy" />
</div>

*航班演示。一个英文请求、实时 Trip.com 页面，以及由助手自行打开的票价选项层。*

再来看一个操作白板绘图的演示。你可以用自然语言控制 agent 进行绘图，也可以随时用自然语言让 agent 帮你修改内容。
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-whiteboard-demo.gif" alt="Animated screen recording of the whiteboard demo: three labeled boxes for Camera, Jetson and Display are drawn and connected with arrows, then Jetson turns green and a connected Robot Arm box is added below it." loading="lazy" />
</div>

*白板演示。绘制、重新上色、扩展：在同一画布上的三个请求，无需重画。*

## 前置条件

- 搭载 JetPack 6.2 的 reComputer

## 大模型是如何操作网页的？

想象一下，你让一个 LLM agent 去查找航班。它读取请求，打开页面，然后需要决定下一步该做什么。某个时刻，页面上可能会显示出发地和目的地输入框、日期选择器以及一个 **Search** 按钮。程序可以把这些控件作为可用动作提供出来，但仍然需要有某个组件从中做出选择。

传统的文本生成式 LLM 可以通过读取任务和页面描述并写出一个动作来做出这个选择。例如，它可能返回一条点击 Search 的指令。程序解析输出并执行点击。页面变化后，助手再次观察页面并请求下一步动作。

为了生成这条指令，LLM 首先读取任务和页面信息，然后一点一点地写出答案，每一部分都依赖于它已经写出的内容。这些步骤分别称为 **prefill** 和 **decode**。页面变化后，助手可能会重复这些步骤来决定下一步动作。

LLM 可以写出许多不同的答案。但如果程序已经有一个动作列表，比如 **填写城市**、**点击 Search** 或 **等待**，那它也可以让模型从这个列表中进行选择。这就是决策模型发挥作用的地方。

## 决策模型有何不同？

决策模型接收当前状态、目标以及一组可用选项，对这些选项进行打分并返回一个选择。在航班示例中，一旦确认搜索条件已满足，它就可以从提供的动作中选择 **点击 Search**。程序再将这个选择映射到真实页面控件并执行点击。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-text-vs-action-selection-en.png" alt="Two output paths: an autoregressive model performs prefill and successive decode steps, while a decision model encodes the input and scores offered action candidates." loading="lazy" />
</div>

*文本生成将动作作为输出文本生成；Laya 则对给定选项进行打分。*

两种方式都会处理输入并消耗算力。文本模型同样可以生成一个简短的动作 ID。

本项目同时使用了这两类模型。**Qwen** 负责理解用户请求，并在需要时提供文本；**Laya** 则在当前候选项中反复选择要执行的操作及其目标。程序提供工具、执行选中的动作并检查结果。

## Laya 如何选择下一步动作？

我们用白板来看看一次决策是如何完成的。画布上有一个标记为 **Camera** 的绿色方框，我们希望在不移动它、也不改变标签的前提下，把它变成蓝色：

```text
Make the Camera rectangle background blue. Keep its text and position.
```

在让 Laya 做出选择之前，程序会用文本描述当前情况：

| 输入 | Camera 示例 |
| --- | --- |
| 状态 | Camera 是绿色的；它的标签和位置是已知的 |
| 目标 | 让 Camera 变成蓝色，并保持其标签和位置不变 |
| 候选项 | 可用的红、绿、蓝和黄按钮 |

可以把这看作是一道多选题。程序告诉 Laya 画布上有什么、需要改变什么，以及有哪些按钮可用。然后 Laya 从这些按钮中做出选择。在这个录制示例中，目标是直接传给 Laya 的。

在 Laya 内部，一个 **encoder** 会读取这些文本并建立对场景的理解：绿色是当前颜色，蓝色是目标颜色，标签和位置应保持不变。然后，一个 **decision head** 会对可用答案进行打分。在本项目中，encoder 使用的是 mmBERT-base；更多细节可参考 [固定的模型配置](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json) 和[架构文档](https://huggingface.co/convaiinnovations/laya#architecture)。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-model-architecture-en.png" alt="Textual state, goal and candidates enter the mmBERT-base bidirectional encoder and decision head, producing separate operation and click-target choices." loading="lazy" />
</div>

*Laya 读取关于状态、目标和候选项的文本；本实现不会将截图像素发送给模型。*

在这次决策中，选项 `3` 是蓝色按钮。一旦 Laya 选中了它，程序就会通过其动作 ID `color_blue` 找到对应的按钮。随着页面或画布的变化，可选项也会变化，因此程序在观察到下一个状态时会重新生成一份候选列表。

这个结果回答了两个问题：**我应该做什么？** 以及 **我应该在哪里做？** 在这里，Laya 选择了 `CLICK` 和蓝色按钮。这两个答案可以在同一批次中计算出来。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-camera-blue-recorded-decision-en.png" alt="One recorded decision selects CLICK with probability 0.9785 and the blue target with probability 0.9721; a fresh scene read confirms Camera changed from green to blue." loading="lazy" />
</div>

*一次录制的 Camera 决策。彩色方框是根据保存的场景数据重建的。*

在这次记录的结果中，`CLICK` 获得了 **0.9785** 的分数，而蓝色按钮在它自己的候选集中获得了 **0.9721**。程序点击了该按钮，然后再次读取画布。Camera 变成了蓝色，标签和位置保持不变。

这些分数展示了模型更偏好的选项。目标的 `confidence` 值 **0.8859** 是一个单独的字段。高分本身并不能保证点击一定生效，或整个任务已经完成。

程序还必须提供正确的候选项：Laya 无法选择不在列表中的按钮。当候选项很多时，封装器可能会分组比较它们。这意味着一次请求可能会涉及多次模型推理。

## 从模型选择到结果验证

Laya 已经选中了蓝色按钮。这是否意味着任务已经完成？还没有。按钮可能已经移动，或者点击并不会改变方框的颜色。程序必须真正执行这个动作，并检查实际发生了什么。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-verified-action-loop-en.png" alt="Agent loop from Qwen request parsing to fresh observation, legal candidates, Laya selection, target validation, UI execution and independent completion verification." loading="lazy" />
</div>

*Qwen 负责解析请求，Laya 在可用动作中做出选择，程序则执行并验证这些动作。*

在 Camera 示例中，程序会按以下步骤执行：

1. **观察（Observe）：** 读取画布并找到可用的颜色按钮。
2. **选择（Choose）：** 询问 Laya 应该使用哪个动作和目标。
3. **检查（Check）：** 确认选中的按钮仍然可用。如果画布发生变化，则重新观察。
4. **执行（Execute）：** 使用 Playwright 点击蓝色按钮。
5. **验证（Verify）：** 再次读取画布。Camera 是否变成蓝色？它的标签和位置是否保持不变？

如果结果仍需改进，程序可以在重试次数限制内，使用更新后的画布重复这一循环。如果检查通过，它会将任务报告为完成。即使模型返回 `DONE`，程序仍会检查实际结果。

同样的思路也适用于航班：程序提供诸如选择日期之类的操作，然后检查航线、日期和其他要求。这些操作在应用程序中实现。Laya 在这些操作中进行选择；它不会自行创建新工具。

## 在 Jetson Orin 上快速运行

在 Jetson 桌面上，以普通用户打开终端并运行：

```bash
git clone https://github.com/zibochen6/jetson-browser-assistant.git
cd jetson-browser-assistant
./setup.sh
```

安装程序会检查设备，准备隔离的 uv 环境和匹配的 CUDA PyTorch，安装 Chromium，下载固定版本的模型，构建 llama.cpp 并预加载服务。运行时不要使用 `sudo`；当需要系统库时，它会请求提升权限。有关兼容性、下载和故障排除，请参阅 [README](https://github.com/zibochen6/jetson-browser-assistant#readme) 和[安装指南](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/installation.md)。

## 何时适合使用决策模型？

当用户目标或当前状态可能变化，但可用工具是有限集合时，就值得评估是否使用决策模型。航班筛选和对现有白板对象的编辑就是两个例子。应用程序仍然需要观测当前状态、提供有意义的选项并验证发生了什么。

对于总是遵循同一路径的稳定任务，确定性的脚本可能更简单。对于开放式回答或生成新文本，文本生成模型仍然有用。本项目没有对应的脚本基线，因此这些演示并未建立相对于脚本的速度或维护优势。

当前版本覆盖了有限的 Trip.com 工作流和小型白板。其他网站、任意绘图、语音和工业控制需要单独开发和验证。Jetson 的 16GB 是 CPU/GPU 共享内存；其他应用和交换分区会影响可用容量。

## 试用浏览器和白板演示

在运行演示之前，我们先看看时间花在了哪里。录制的航班任务总共耗时 **32.8 秒**。Laya 决策在整个任务中累计约 **0.5 秒**，而 Qwen 解析约 **3.5 秒**。浏览器操作、页面等待、检查和保存也会对总时间有所贡献。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-vs-task-time-en.png" alt="独立的柱状条显示了 32.8 秒的任务耗时、0.5 秒的 Laya 决策累计时间以及 3.5 秒的 Qwen 解析时间，对应一个复用搜索条件的航班任务。" loading="lazy" />
</div>

*录制的航班任务计时。各柱状条是独立计数器，而不是完整的可加分解；该任务复用了已有的搜索条件。*

### 搜索航班

启动助手并等待出现 `Models ready` 和 `Task>`：

```bash
./launch.sh
```

输入以下任务，将日期替换为一个有效的未来日期：

```text
Find one-way flights from Shenzhen to Shanghai on 2026-11-13 for 1 adult in economy. Nonstop only, lowest price first. Show up to 3 options and open the fare options for one matching flight.
```

启动器会显示网站和一个只读的 Live Flow 窗口。使用 `./launch.sh --no-visualize` 仅显示网站。检查候选结果、`Query verified` 和 `Fare options opened`。助手会打开票价选项层，而不会提交订单或付款。

### 编辑同一个白板

完成或取消任何活动任务，然后打开一个空白画布：

```bash
./launch-whiteboard.sh --open examples/whiteboard/blank.excalidraw
```

`--open` 会替换当前画布；现有导出文件会保留。在 `Task>` 处输入：

```text
Draw three labeled boxes: Camera on the left, Jetson in the center, and Display on the right. Connect Camera to Jetson and Jetson to Display with arrows.
```

完成后，在不重新打开空白文件的情况下提交第二个任务：

```text
Make Jetson green. Add a box labeled Robot Arm below Jetson and connect Jetson to Robot Arm. Keep everything else.
```

每个完成的白板任务都会保存一个可编辑的 `scene.excalidraw`、一张 PNG、一张截图和一份验证报告。[白板指南](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/whiteboard.md)涵盖了更多编辑操作以及重新打开已保存场景的方法。

计时从你按下 Enter 时开始，包括解析、必要的浏览器打开、推理、UI 操作、等待、验证和保存。模型加载、预热和输入等待不计入；人工等待会单独计入并报告。

在任务执行期间按 Ctrl+C 可取消任务。在空闲提示符下输入 `exit` 或 `quit` 可让模型和浏览器保持运行。使用 `./status.sh` 检查服务，使用 `./stop.sh` 停止项目服务和模型。航班记录位于 `runs/`；白板记录位于 `whiteboard-runs/`。其他控制和恢复方式请参阅[使用指南](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/usage.md)。

## 参考资料

- [Jetson Browser Assistant 源码和 README](https://github.com/zibochen6/jetson-browser-assistant)
- [laya-browser 模型、训练数据和局限性](https://huggingface.co/cklxx/laya-browser)
- [固定版本的 laya-browser 封装](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/laya_browser.py)
- [固定版本的编码器和 head 配置](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json)
- [Laya 架构和概率校准](https://huggingface.co/convaiinnovations/laya#architecture)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
