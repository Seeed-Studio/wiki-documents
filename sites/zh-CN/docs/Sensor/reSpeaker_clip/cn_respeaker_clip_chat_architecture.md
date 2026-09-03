---
description: 对 reSpeaker Clip AI 聊天系统的通俗概述，涵盖路由流程、LangGraph 架构、工具使用、记忆召回、向量搜索、语音处理流水线以及已存对话上下文。
title: reSpeaker Clip AI 聊天系统架构
keywords:
  - reSpeaker Clip
  - AI 聊天系统
  - LangGraph
  - LLM
  - 语音转文本
  - 文本转语音
  - 向量搜索
  - 记忆召回
  - Flask
  - 智能体工作流
slug: /respeaker_clip_ai_chat_system_architecture
sku: 100020126
last_update:
  date: 09/01/2026
  author: Kasun Thushara
createdAt: '2026-09-01'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_ai_chat_system_architecture/
---

一份用通俗语言解释 reSpeaker Clip AI Agent 聊天系统工作原理的指南。这里的一切都来自 README 和 `backend/` 中的实际代码。

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>

## 1. 概览

该系统是一个基于 Flask + LangGraph + Groq 构建的“语音优先”AI 助手。你通过说话或输入文字发送消息，智能体决定如何处理它，可选地调用工具，生成答案，并把回复读给你听。

整个流水线一览：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-overview.png" alt="pir" width={800} height="auto" /></p>

让这一切运转的三个核心思想：

- 一个路由器将每个请求分类到三条路径之一。
- 这些路径上的某个智能体可以调用工具（网页搜索、计算器、Notion、历史对话搜索）。
- 向量存储 + 记忆层让智能体可以回忆你的过往对话和长期事实。

---

## 2. 系统架构图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-extened.png" alt="pir" width={800} height="auto" /></p>

各个部分的组合方式如下：

- Flask 是 API 表层（聊天、流式、语音、TTS）。
- LangGraph 是状态机，用来路由请求并运行选中的节点。
- Groq 提供 LLM、语音转文本（Whisper）和文本转语音（Orpheus）。
- Mem0 提供长期记忆；Pinecone + 本地嵌入提供历史对话搜索。
- Supabase（带 SQLite 兜底）存储会话、消息和摘要。

---

## 3. 三条路由路径

每个请求都会被路由到三个节点中的一个。代码在 `backend/graph/graph.py` 中将路由字符串映射到节点：


### `simple` — 无上下文聊天

- 纯 LLM 响应。没有工具、没有特殊人设。
- 用于一般问题、解释和普通对话。
- 节点：`simple_node`（`backend/graph/nodes/simple.py`），LLM = 主 Groq 模型。

### `context` — Agentic（启用工具）

- 请求可能需要外部信息或工具（网页、数学、Notion、历史对话）。
- 该节点使用 `create_agent` 构建一个 LangChain 智能体，并让模型在循环中调用工具。
- 节点：`agentic_node`（`backend/graph/nodes/agentic.py`），LLM = 专用工具调用模型（`gpt-oss-20b`）。

### `persona` — 风格化

- 用户明确要求某种风格、人格、角色或教学风格。
- 机制与 `simple` 相同，但使用不同的 system prompt，指示模型调整语气。
- 节点：`persona_node`（`backend/graph/nodes/persona.py`），LLM = 主 Groq 模型。

---

## 4. 分类逻辑

路由在 `router_node`（`backend/graph/router.py`）中完成，先进行关键词预检查，然后再用 LLM 分类。

1. 关键词预检查（快速路径）。会在转录文本中扫描工具关键词。如果有匹配，路由会被强制设为 `context`，并完全跳过 LLM：

   ```text
   notion, to-do, todo, task list, to do list, calendar,
   schedule, reminder, note down, create a task, add a task
   ```

   例如："add a task to my to-do list" 根本不会进入分类器。

2. LLM 分类。否则，请求会连同 `ROUTER_PROMPT` 一起发送到主 Groq 模型，这是一个分类器 prompt，只返回一个单词：

   | 路由 | 触发输入 |
   | --- | --- |
   | `simple` | 一般问题、解释、普通对话，不需要工具/人设 |
   | `context` | 可能需要外部信息/工具、数据管理（Notion/日历）、关于用户设备/文件/已存信息的问题 |
   | `persona` | 用户明确请求某种风格、人设、教学风格、角色或行为 |

3. 回退。输出会被转为小写并去除空白。任何不在 `{simple, context, persona}` 中的结果都会回退到 `simple`。


## 5. Agentic 工具系统

### 工具调用如何工作

`context` 路径使用 LangChain 的 `create_agent`（`backend/graph/nodes/agentic.py`）。循环大致如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-tools.png" alt="pir" width={800} height="auto" /></p>

值得注意的细节：

- 智能体会被缓存，只有在工具签名变化时才会重建（`_get_agent`）。
- 重试逻辑：最多 `MAX_RETRIES = 3` 次尝试；短暂的 `tool_use_failed` 错误会在休眠 1 秒后重试。
- 保护栏：递归被限制在 `MAX_AGENT_ITERATIONS = 10`。如果达到上限，智能体会返回一条固定的“我达到上限……”消息，而不是崩溃。
- system prompt 会告诉模型尽量使用最少的工具调用，一旦信息足够就尽快回答。
- 在 SSE 流式过程中，每次工具调用都会作为 `thinking` 事件（`{"tool": "web_search"}`）暴露给 UI。

### 可用工具

`get_available_tools()`（`backend/tools/registry.py`）返回智能体可以调用的所有工具：

| 工具 | 后端服务 | 目的 | 配置键 |
| --- | --- | --- | --- |
| `web_search` | Tavily | 实时/当前网页信息（新闻、固件、产品详情） | `TAVILY_API_KEY` |
| `calculator` | 本地、安全 AST 求值 | 通过白名单 `+ - * / ** %` 求值器进行数学计算 | —（始终可用） |
| `search_conversations` | Pinecone + 本地嵌入 | 按相关性查找用户自己的历史对话 | `PINECONE_API_KEY` |
| `add_todo` | Notion | 向待办列表添加任务 | `NOTION_API_KEY` / `NOTION_DATABASE_ID` |
| `list_todos` | Notion | 列出带状态的任务 | 同上 |
| `complete_todo` | Notion | 将任务标记为完成（按名称/关键词匹配） | 同上 |
| `delete_todo` | Notion | 删除任务（按名称/关键词匹配） | 同上 |

- 只有在配置了 Notion 时，Notion 工具才会被添加。
- 未配置的工具会返回友好的消息（例如，“Web search is unavailable…”），因此系统可以优雅降级。

---

## 6. 向量搜索深度解析

### 配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-vector.png" alt="pir" width={800} height="auto" /></p>

所有向量相关设置都在 `config.py` / `.env` 中：

| 设置 | 默认值 | 含义 |
| --- | --- | --- |
| `PINECONE_API_KEY` | — | 启用向量搜索 |
| `PINECONE_INDEX_NAME` | `conversations` | Pinecone 索引名称 |
| `PINECONE_CLOUD` | `aws` | 无服务器云提供商 |
| `PINECONE_REGION` | `us-east-1` | 无服务器区域 |
| `EMBEDDING_MODEL` | `all-MiniLM-L6-v2` | 本地 sentence-transformers 模型 |
| `EMBEDDING_DIM` | `384` | 向量维度（必须与索引匹配） |

在启动时，如果 Pinecone 索引不存在，`init_index()` 会自动创建（维度 `384`，度量 `cosine`，无服务器）。

### 哪些内容被嵌入，哪些作为元数据存储

该设计让向量保持精简，并把其他内容放在元数据中：

- 被嵌入（向量）：`"<title>\n\n<overview>"` —— 会话的简短语义摘要。
- 元数据：`user_id`、`conversation_id`、`title`、`created_at`。
- 完全不进向量存储：完整转录。实际的对话轮次保存在 Supabase/SQLite 中，并在匹配后通过 id 获取。

向量 id 为 `"{user_id}-{conversation_id}"`，因此对每个用户的每个会话都是稳定的。

### 向量创建（写入路径）

在每次聊天/语音轮次结束后，系统会启动一个后台线程（`index_conversation_async` → `summarize_and_index`，位于 `backend/services/conversation_service.py`）：



细节：

- 少于 `MIN_TURNS = 2` 轮的会话会被跳过。
- 标题/概览由主 Groq LLM 使用两行 prompt（`Title:` / `Overview:`）生成。
- 嵌入会被归一化（适用于 cosine）。
- 这一切都是异步的（守护线程），因此用户的响应永远不会被索引过程阻塞。

### 向量查询（读取路径）

当智能体调用 `search_conversations` 时，流程如下：



关键点：

- 查询会使用同一个本地模型进行嵌入，然后在搜索时加上 `user_id` 过滤，这样用户只能看到自己的会话。
- 匹配结果返回 id + 分数 + 元数据；完整摘要会通过 id 从关系型存储中取回。
- 匹配结果会带上相似度分数进行格式化，以便智能体判断相关性。

---

## 7. 记忆系统

长期记忆使用 Mem0，并限定在单个用户范围内（`MEM0_USER_ID`，默认 `user-1`）。

### 记忆类别

代码中没有硬编码的桶；取而代之的是，`MEM0_CUSTOM_INSTRUCTIONS` 告诉 Mem0 要提取哪些持久事实，并按优先级排序：

1. 健康限制和过敏——尤其是任何医生给出的建议（被理解为适用于用户）。
2. 日程安排——会议、预约、提醒。
3. 偏好和个人细节。

明确排除：助手自己的回复/菜谱/解释，以及一次性的临时请求。

### 聊天中的记忆检索

主动召回会在每个请求上发生，在路由之前（`backend/routes/chat.py` 中的 `recall(text)`）：

1. 传入消息会被发送到 Mem0 的语义搜索（`top_k = 5`）。
2. 结果会通过两级相关性检查进行过滤，基于分数拆解：
   - `semantic ≥ 0.28` → 保留，或
   - `semantic ≥ 0.24` 且 `bm25 > 0.01`（关键词增强命中）→ 保留。
3. 通过筛选的记忆会按 `created_at` 排序（最新在前），并格式化为：

   ```text
   Relevant context from your past conversations:
   - <memory text> (created 2026-08-30)
   ```

4. 该块内容会在到达任何节点之前被预置到用户消息前面——因此 LLM 会将其视为上下文，但被告知只有在与当前话题直接相关时才使用。

在每次交互之后都会进行写入（`save_exchange`）：用户/助手这一对会连同自定义指令一起发送到 Mem0。如果缺少 Mem0 密钥，记忆保存和召回都会优雅失败（记录日志并忽略）。



---

## 8. 聊天会话与上下文

### 会话结构

“会话”是一段以关系型方式存储的对话（Supabase PostgreSQL，或回退到 SQLite）。其模式如下：

- `users` — `id`, `email`（单用户，`user-1`，预置）。
- `conversations` — `id`, `user_id`, `title`, `overview`, `action_items`, 时间戳。
- `messages`/`turns` — `conversation_id`, `role`（`user`/`assistant`）, `content`, 时间戳。

单轮对话的流程：

1. 创建（或复用）一个会话 → `conversation_id`。
2. 加载上下文：`recall()` 记忆 + `get_recent_messages(conversation_id, 10)` 历史。
3. 构建 `AgentState`，并通过 LangGraph 运行。
4. 在生成回复之后：保存这两轮消息，将该次交互保存到 Mem0，并启动异步向量索引。

### 上下文窗口

为 LLM 组装的上下文刻意保持精简且分层：

| 组件 | 来源 | 大小 |
| --- | --- | --- |
| 系统提示词 | 按路径固定（`simple`/`persona`/agent `SYSTEM_PROMPT`） | 固定 |
| 会话历史 | `get_recent_messages(conversation_id, 10)` | 最近 10 轮（10 条用户 + 10 条助手消息），按时间顺序 |
| 召回的记忆 | Mem0 `recall()`，取前 5 条，已过滤 | 最多 5 条记忆 |
| 当前用户消息 | `format_memories(...) + transcript` | 当前请求 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-chat-context.png" alt="pir" width={800} height="auto" /></p>


说明：

- 历史来自关系型存储，而不是向量存储（向量存储保存的是摘要，而不是每一轮对话）。
- 记忆以内联方式注入到用户消息中，因此模型会将其视为“你过去对话中的相关上下文”。
- agent 路径将消息构建为 `[history..., ("user", memories + transcript)]`，并让 agent 使用工具进行循环。

---

## 9. 系统提示词结构

共有四个系统提示词：

| 提示词 | 位置 | 被谁使用 | 职责 |
| --- | --- | --- | --- |
| `ROUTER_PROMPT` | `backend/graph/router.py` | 路由分类 | 返回一个单词：`simple` / `context` / `persona` |
| `SIMPLE_PROMPT` (`simple.py`) | `backend/graph/nodes/simple.py` | `simple_node` | 有帮助的语音助手，普通聊天 |
| `PERSONA_PROMPT` (`persona.py`) | `backend/graph/nodes/persona.py` | `persona_node` | 与 simple 相同，但会根据用户请求调整风格/讲解方式 |
| `SYSTEM_PROMPT`（agentic） | `backend/graph/nodes/agentic.py` | agent | 支持工具的助手；解释每个工具以及何时使用 |

simple、persona 和 agentic 提示词共享一个统一的“house style”结尾：

- 回复最多 2–3 句简短句子。
- 仅使用纯文本——不要 markdown、不要星号、不要表情符号。
- 仅在与当前话题直接相关时才使用召回的记忆（明确区分日程与饮食等不同类别）。
- 当存在冲突时，相信最新创建的记忆。
- 当用户陈述一个新事实时，只确认该事实——不要复述无关的记忆。

agentic 提示词另外还会：

- 指明工具名称（`web_search`、`calculator`、`search_conversations`、Notion 工具）。
- 指导尽量少地调用工具——一旦收集到足够信息就停止。
- 保持简短、纯文本的回答格式。

---

## 10. 使用的 LLM 模型

所有模型都运行在 Groq 上。在 `backend/llm/client.py`、`config.py` 和 `groq_client.py` 中定义：

| 角色 | 环境变量 | 默认模型 | 温度 | 说明 |
| --- | --- | --- | --- | --- |
| 主 LLM（路由、simple、persona、摘要） | `GROQ_LLM_MODEL` | `qwen/qwen3.6-27b` | 0.7 | `ChatGroq` 实例 `llm` |
| Agent / 工具调用 LLM | `GROQ_AGENT_MODEL` | `openai/gpt-oss-20b` | 0.0 | `ChatGroq` 实例 `agent_llm`，由 `create_agent` 使用 |
| 语音转文本 | `GROQ_STT_MODEL` | `whisper-large-v3` | 0.0 | Whisper 转录 |
| 文本转语音 | `GROQ_TTS_MODEL` | `canopylabs/orpheus-v1-english` | — | Voice = `TTS_VOICE`（`autumn`） |
| 向量嵌入（本地，不在 Groq 上） | `EMBEDDING_MODEL` | `all-MiniLM-L6-v2` | — | `sentence-transformers`，384 维，已归一化 |

LLM 推理默认值（通过 `groq_client.chat`）：`max_completion_tokens = 2048`，`top_p = 1.0`，temperature 可覆盖。



## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>