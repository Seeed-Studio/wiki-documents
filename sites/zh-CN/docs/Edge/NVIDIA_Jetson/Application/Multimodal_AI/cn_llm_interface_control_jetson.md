---
description: Jetson LLM Interface Controller 是一个完全本地化的、语音和文本驱动的 AI 助手，完全运行在 NVIDIA Jetson 设备上。它将本地大语言模型（通过 Ollama）与可选的语音转文本和文本转语音（NVIDIA Riva）相结合，将自然的人类命令转换为结构化、安全的硬件操作。该系统实现了对板载接口（GPIO、I2C、PWM 等）的私有、低延迟控制，并作为边缘 AI 应用（如智能环境、机器人和视觉代理）的模块化基础——无需依赖云端。
title: Jetson 上的本地 LLM 代理用于安全硬件接口控制
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/llm_interface_control_jetson
last_update:
  date: 01/29/2025
  author: kourosh
---


# Jetson LLM Interface Controller

![enter image description here](https://www.seeedstudio.com/blog/wp-content/uploads/2024/03/image-1030x616.png)

 欢迎，创客、梦想家和建造者。这不仅仅是另一个家庭自动化项目——它是人类思维与嵌入式操作之间的桥梁。通过将 **NVIDIA Jetson Orin NX** 的原始计算能力与本地大语言模型的推理能力相结合，您正在为您的家庭、实验室或创意空间创建一个智能神经系统。

想象一下轻声说出*"让房间感觉像一个舒适的咖啡厅"*，然后看着灯光变暗、轻柔的音乐响起、恒温器调节——所有这些都由一个真正*理解*您意图的 AI 来协调。或者想象一个安全意识的代理通过摄像头监控婴儿房，描述场景，并在第一时间发现危险时提醒您。

这个仓库是您的启动平台。它演示了如何将自然语言——无论是键入还是口述——转换为精确的硬件命令，在边缘实时执行。LLM 充当**"神经编译器"**——将模糊的人类请求转换为您的 Jetson 可以执行的结构化、可执行的 JSON。

在这个 wiki 中，我将编写一个起点来创建您自己的基于 recomputer Nvidia Jetson Orin nx 的家庭助手代理。这个项目使用 Jetson 接口来控制环境，您将亲自操作接口并将它们与 LLM 代理混合，将用户提示转换为命令，让 Jetson 知道该做什么。换句话说，LLM 就像是从用户文本或语音（如果您愿意，可以轻松地向项目添加 STT 和 TTS）到 Jetson 和您的编码家庭控制器可以理解的命令的映射。您甚至可以扩展这个项目并添加一些更有趣的东西，比如 VLM。例如，您可以添加一个摄像头并尝试描述婴儿房，如果发生危险，代理会给出反馈或给您的手机打电话。

您可以在[这个](https://github.com/kouroshkarimi/llm_interface_controll)链接中查看代码。

## ✨ 这个项目带来的生命力

- **🧠 智能命令解析**
  本地 LLM（如在您的 Jetson 上运行的 Llama、Mistral 或其他模型）经过精心提示，将自由形式的文本映射到结构化命令。提示工程在 [`models/jetson-controller.txt`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/models/jetson-controller.txt) 中捕获，这是教授模型您的领域的蓝图。

- **🌐 极简、稳健的 API**
  一个干净的 FastAPI 端点（[`app/main.py`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/main.py)）接受用户请求并协调整个管道——解析、验证和执行——优雅而快速。

- **⚡ 硬件抽象层**
  深入 [`app/hardware_controller.py`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/hardware_controller.py) 找到 GPIO、PWM、I2C 等的例程。这是软件脉冲变成物理动作的地方：灯光变亮、电机旋转、传感器读取。

- **🔗 LLM 代理集成**
  [`app/llm_agent.py`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/llm_agent.py) 模块是一个薄而适应性强的包装器，与您的本地模型服务器通信。交换模型、调整参数，甚至更改 API 而不破坏流程。

- **📦 结构化输出解析器**
  使用 [`app/command_parser.py`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/command_parser.py) 可靠地从模型的响应中提取 JSON。它确保即使是创造性的 LLM 输出也能成为可预测的、可操作的命令。

---

## 🧭 导航和快速链接

**核心入口点**

- 🚪 API 网关：[`app/main.py`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/main.py) — 系统的 FastAPI 核心。
- 🧩 命令解析器：[`app.command_parser.parse_command`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/command_parser.py) — 从文本到结构。
- 🧠 LLM 通信器：[`app.llm_agent.ask_llm`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/llm_agent.py) — 与模型的对话。
- ⚙️ 硬件执行器：[`app.hardware_controller.execute`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/app/hardware_controller.py) — 命令变成行动的地方。
- 📖 模型提示：[`models/jetson-controller.txt`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/models/jetson-controller.txt) — 您的代理的"个性"。
- 📦 依赖项：[`requirements.txt`](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/requirements.txt) — 为您的旅程提供动力的 Python 包。

## 🌌 理念与愿景

这个项目建立在一个简单而强大的理念上：**您的话语应该控制您的世界。**
通过在 Jetson 上本地运行 LLM，我们确保隐私、低延迟和无限定制。系统故意模块化——每个组件都是您可以替换、升级或重新构想的拼图块。

将其视为：

- 人类直觉与机器精度之间的**翻译器**。
- 构建上下文感知环境的**脚手架**。
- 在边缘实验 AI 的**游乐场**。

---

## 🧬 命令语言：JSON 模式

LLM 被训练以一致的 JSON 结构响应——这是 AI 理解与硬件能力之间的契约。

```json
{
  "intent": "control_device | query_status | general_help | unknown",
  "device": "lights | fan | thermostat | garage | coffee_machine | speaker",
  "action": "on | off | set | query | play | pause",
  "location": "kitchen | bedroom | living_room | office",
  "parameters": {"brightness": 80, "temperature": 22},
  "confidence": 0.95
}
```

每个字段都讲述一个故事：

- **intent** — 请求的高级目标。
- **device & action** — 目标硬件和要执行的操作。
- **location** — 多房间或多区域设置的空间上下文。
- **parameters** — 细粒度控制（调光级别、精确温度、速度等）。
- **confidence** — 模型的自我评估确定性，用于控制风险或模糊操作。

完整的提示——包括模式示例和语调指导——位于：

```
models/jetson-controller.txt
```

---

## ⚙️ 架构：魔法如何流动

### 逐步旅程

1. **调用**  
   一个 `POST` 请求到达 `/command`，携带自然语言。

2. **对话**  
   解析器通过 `ask_llm()` 咨询 LLM 来解释请求。

3. **推理**  
   本地模型（例如，7B 参数变体）处理提示并返回结构化 JSON。

4. **提取**  
   解析器验证、清理和规范化 JSON，确保它符合预期的模式。

5. **执行**  
   `execute()` 将命令分派给适当的硬件处理程序：

   - **灯光** → GPIO 引脚，PWM 用于调光
   - **风扇** → GPIO 或 PWM 用于速度控制
   - **恒温器** → 与温度传感器的 I2C 通信
   - **扬声器** → `amixer` 子进程调用用于音量和播放

6. **反馈循环**  
   系统返回成功或失败消息，关闭交互。

---

## 🔧 安装：第一步

### 先决条件

- 运行 JetPack 的 **NVIDIA Jetson**（推荐 Orin NX）
- **Python 3.8+**
- 带有兼容模型的**本地 LLM 服务器**（Ollama、llama.cpp、TensorRT-LLM 等）

### 搭建舞台

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Clone and enter the realm
git clone https://github.com/kouroshkarimi/jetson-llm-interface.git
cd jetson-llm-interface

# Install Python dependencies
pip install -r requirements.txt

# Create the llm prompt costumization for our project
ollama create jetson-controller -f models/jetson-controller.txt

```

### 配置您的 LLM

编辑 `app/llm_agent.py` 以指向您的模型服务器。确保模型标签与您的提示文件中定义的标签匹配。

---

## `jetson-controller.txt`

### 🧠 目的与作用

`jetson-controller.txt` 是定义 Jetson LLM Interface Controller 项目中使用的本地语言模型（LLM）行为的**核心系统提示**。

它充当自然语言与硬件执行之间的**契约**。

其职责是：

- 解释用户自然语言命令
- 将 LLM 约束为**可预测的、机器安全的行为**
- 发出**严格结构化的 JSON**，适合确定性执行
- 防止不安全、偏离主题或幻觉的操作

简而言之：

> 这个文件是将人类意图转化为可靠的边缘设备控制的大脑。

---

### 🧱 基础模型声明

```dockerfile
FROM llama3.2:1b
```

这一行指定了系统使用的**基础模型**。您可以用其他支持的模型替换它，例如：

- Mistral
- LLaMA 3.x
- Qwen2
- 任何 Ollama / llama.cpp / TensorRT-LLM 兼容模型

提示设计为**模型无关**，专注于行为而非架构。

---

### 🎭 系统身份

```text
You are HomeAssistantAI...
```

模型被明确分配了**角色和身份**：

- 家庭自动化解释器
- 不是聊天机器人
- 不是通用助手
- 不是创意写手

这大大缩小了模型的行为范围并减少了幻觉。

---

### 🎯 提示的目标

目标部分定义了模型的**任务约束**：

1. 理解与智能家居相关的自然语言
2. 将其转换为结构化 JSON
3. 拒绝不安全、无关或不可能的请求
4. **仅输出有效的 JSON**，不多不少

这确保了：

- 确定性的下游解析
- 无需后处理技巧
- "思考"和"行动"之间没有歧义

---

### 📦 JSON 输出模式

文件的核心是**命令模式**：

```json
{
  "intent": "...",
  "device": "...",
  "action": "...",
  "location": "...",
  "parameters": { ... },
  "confidence": 0.0
}
```

#### 为什么这很重要

- 它在 LLM 和硬件代码之间创建了一个**稳定的 API**
- 它支持模式验证（Pydantic / JSON Schema）
- 它允许基于置信度的安全拒绝

---

### 🧩 字段逐一解析

#### `intent`

定义用户发出的**请求类型**：

- `control_device` — 执行物理操作
- `query_status` — 读取传感器或设备状态
- `general_help` — 使用或系统问题
- `unknown` — 任何不安全、偏离主题或不清楚的内容

此字段是后端逻辑中的**主要路由器**。

---

#### `device`

表示**目标硬件抽象**，而不是物理驱动程序。

示例：

- `lights`
- `thermostat`
- `fan`
- `speaker`
- `garage`

如果没有适用的设备，它必须是 `null`。

这防止了 LLM 虚构硬件。

---

#### `action`

描述对设备**要做什么**：

- `turn_on`, `turn_off`
- `set`, `increase`, `decrease`
- `open`, `close`, `lock`, `unlock`

如果操作不清楚或缺失，需要 `null`。

---

#### `location`

提供**空间上下文**，支持多房间设置：

- `living_room`
- `kitchen`
- `bedroom`
- `garage`

如果没有明确提及，这必须是 `null`。

---

#### `parameters`

携带**细粒度控制数据**，例如：

- 温度值
- 亮度百分比
- 音量级别
- 模式或预设

可能是：

- 一个对象（`{ "temperature": 22 }`）
- `{}`
- 未指定时为 `null`

---

#### `confidence`

一个介于 `0.0` 和 `1.0` 之间的浮点值，表示模型的**自我评估确定性**。

这使得以下功能成为可能：

- 置信度门控
- 安全阈值
- 人工参与验证

使用示例：

```python
if command.confidence < 0.5:
    reject()
```

---

### 🛡️ 行为规则和安全约束

行为规则部分对于**安全部署至关重要**。

关键保护包括：

- ❌ JSON 之外不允许自然语言
- ❌ 不允许创意、政治或无关内容
- ❌ 不允许虚构设备
- ❌ 不允许以高置信度执行模糊命令

偏离主题的请求被强制映射为：

```json
{
  "intent": "unknown",
  "confidence": 0.0
}
```

这确保系统**故障时关闭**，而不是开放。

---

### 🔀 歧义处理

当请求*可能*与家庭相关但不清楚时：

- 模型必须选择最接近的合理解释
- 置信度必须**较低**（例如，0.3–0.5）

示例：

> "这里太暗了"

→ 可能打开灯，但绝不能有高确定性。

---

### 🧮 多命令限制

如果用户在**一句话中发出多个命令**：

- 输出中只允许**一个命令**
- 优先级给予最重要的或首先提到的

这保持执行简单并避免部分失败。

---

### 🧪 示例部分

示例充当模型的**少样本训练**。

它们演示：

- 正确的模式使用
- 适当的置信度级别
- 无效请求的安全处理

示例包括：

- 打开灯
- 设置恒温器值
- 查询传感器
- 拒绝创意或无关提示

这些示例对于**模型对齐和一致性**至关重要。

---

### 🧠 为什么这个文件如此重要

`jetson-controller.txt` 不仅仅是一个提示 — 它是：

- 一个**安全策略**
- 一个**命令语言规范**
- 一个**硬件保护层**
- AI 和物理世界之间的**确定性接口**

对此文件的任何更改都会直接影响：

- 系统安全
- 执行正确性
- 用户信任

---

## 🎬 让它活起来：示例

```bash
# Run the uvicorn
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### 示例 1：营造氛围

```bash
curl -X POST http://localhost:8000/command \
  -H "Content-Type: application/json" \
  -d '{"text": "Dim the kitchen lights to 30% and play jazz"}'
```

**流程展开：**

- API 接收诗意的请求。
- LLM 将其解析为两个命令（灯 + 扬声器）。
- 执行器调整灯光电路上的 PWM 并触发播放列表。
- 房间发生变化。

---

### 示例 2：好奇的代理

```bash
curl -X POST http://localhost:8000/command \
  -H "Content-Type: application/json" \
  -d '{"text": "What’s the temperature in the bedroom?"}'
```

**幕后：**

- **意图：** `query_status`
- **设备：** thermostat
- **操作：** query
- I2C 读取传感器并返回友好的响应（如果添加了 TTS，则会说出来）。

---
或者您可以访问此链接并在 Web UI 中运行您的命令：

![enter image description here](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/assets/ex_1.png?raw=true)

![enter image description here](https://github.com/kouroshkarimi/llm_interface_controll/blob/master/assets/ex_3.png?raw=true)

## 🧩 扩展宇宙：自定义

### 添加新设备

1. **映射硬件**  
   在 `app/hardware_controller.py` 中扩展 `GPIO_PINS`。

2. **编写处理程序**  
   遵循模式：

   ```python
   def control_new_device(params):
       return bool, str
   ```

3. **连接各部分**  
   在 `execute()` 调度逻辑中添加一个案例。

4. **教导 LLM**  
   使用新设备的示例更新提示文件。

---

### 增强解析

- 集成 JSON Schema 验证（例如，`jsonschema`）以实现防弹解析
- 添加对话上下文记忆以处理后续问题（"关闭它们"）
- 实现置信度阈值以拒绝模糊命令

---

### 交换或升级模型

- 编辑 `models/jetson-controller.txt` 中的提示以匹配您的模型优势
- 调整 `ask_llm()` 以支持不同的模型服务器（OpenAI 兼容、Hugging Face 等）

---

### 视觉启用代理

连接 CSI 摄像头并集成视觉语言模型（VLM）以实现：

- 场景描述
- 安全监控
- 基于手势的控制

---

## ⚠️ 安全与负责任的创造

### 硬件安全

- **开发期间的隔离** — 在设备外编码时模拟 GPIO 和 I2C
- **电流和电压限制** — 对高功率负载使用适当的驱动器和继电器
- **故障保护** — 默认为安全状态（灯关闭，电机停止）

### AI 安全

- **置信度门控** — 置信度 < 0.5 的命令被拒绝（可配置）
- **意图过滤** — 偏离主题或危险的请求返回 `unknown`
- **身份验证** — 在生产环境中添加 API 密钥或 OAuth

---

### 测试策略

- **单元测试** — 模拟 `ask_llm()` 并验证硬件逻辑
- **集成测试** — 从低功率外设开始
- **日志记录** — 跟踪管道的每个阶段以实现透明度

---

## 🛠️ 给开发者的专业提示

- 使用 `fake_gpio.py` 模块模拟硬件
- 使用结构化日志记录（`structlog`）进行端到端可追溯性
- 添加 `/health` 端点进行系统和模型检查
- 在执行前使用 Pydantic 模型验证命令
- 分析 CPU/GPU/MLP 使用情况以避免 Jetson 上的热节流
- 您可以向此项目添加 TTS 和 STT [链接](https://github.com/kouroshkarimi/local_chatbot_jetson)

---

## 参考资料

1. [基于 Jetson 和 LlamaIndex 的本地 RAG](https://wiki.seeedstudio.com/cn/Local_RAG_based_on_Jetson_with_LlamaIndex/)
2. [本地语音聊天机器人：在 reComputer 上部署 Riva 和 Llama2](https://wiki.seeedstudio.com/cn/Local_Voice_Chatbot/)
3. [ChatTTS](https://github.com/2noise/ChatTTS)
4. [语音转文本（STT）和文本转语音（TTS）](https://www.librechat.ai/docs/configuration/stt_tts)
5. [Ollama](https://github.com/ollama/ollama)

---

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 特别感谢 [kourosh karimi](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Building+a+Voice-Interactive+Chatbot+with+STT%2C+TTS%2C+and+Local+LLMs%21&pane=issue&itemId=74620249&issue=Seeed-Studio%7Cwiki-documents%7C1553) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/cn/contributors/)。

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
