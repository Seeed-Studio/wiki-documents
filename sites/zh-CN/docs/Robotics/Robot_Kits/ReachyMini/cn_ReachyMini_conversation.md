---
description: 本Wiki提供ReachyMini接入国内豆包大模型API完成对话交互功能的实现。
title: Reachy Mini接入豆包大模型API
slug: /reachymini_conversation
keywords:
  - reachy mini
  - robotics
  - open source
  - robot kit
  - expressive robot
  - python sdk
  - ai robot
  - Doubao
last_update:
  date: 05/27/2026
  author: FanWenhan
translation:
  skip: [es,ja,pt,en]
createdAt: '2026-05-27'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/cn/reachymini_conversation/
---

# Reachy Mini接入豆包大模型API

:::tip

本wiki仅以豆包大语言模型Doubao-Seed-Character与豆包流式语音识别2.0为案例，再次提醒Reachy Mini本身支持接入任意一款国内外模型，并且也支持本地部署且服务化API公开的模型。

:::

## 效果展示  

| **📺 演示视频** |
| :---: |
| [![点击观看 Bilibili 演示视频](https://files.seeedstudio.com/wiki/robotics/Reachymini/DoubaoVedio.jpg)](https://www.bilibili.com/video/BV1WP7C63EgA)<br/>[**📺 点击前往 Bilibili 观看完整演示视频**](https://www.bilibili.com/video/BV1WP7C63EgA) |

:::tip

使用该对话软件之前，需要先完成基本Reachy Mini的python SDK安装，具体参考流程请参考[Reachy Mini Python SDK安装指南](https://wiki.seeedstudio.com/cn/reachymini_sdk_installation/)

:::

1.安装 Reachy Mini SDK

```bash
pip install "reachy-mini"
```

2.安装舞蹈动作库

```bash
pip install "reachy-mini-dances-library"
```

3.克隆conversation案例代码，并进入文件夹

```bash
git clone https://github.com/TheMoonAstronaut/Reachy_Mini_conversation.git && cd reachymini_conversation
```

4.自动安装依赖

```bash
pip install -e .
```

5.手动安装其他依赖环境

```bash
pip install edge-tts soundfile scipy numpy websockets httpx gradio fastapi
```

:::tip

Linux系统需要额外安装依赖环境

```bash
sudo apt install -y libcairo2-dev libgirepository1.0-dev pkg-config python3-dev
```

:::

## 火山引擎（豆包）API申请

### LLM模型API接入

1.进入[火山引擎方舟管理控制台官网](https://www.volcengine.com/docs/6561/1354869?lang=zh)

2.在API Key管理中进行模型API申请

| **进行API Key申请** | **设置API名称并创建** |
| :---: | :---: |
| ![API Key申请](https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Create1.png) | ![确认创建](https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Create2.png) |

3.进入体验中心，选择合适的模型

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access1.png" width="600" alt="Reachy Mini Control应用" />
</div>

4.选择自己所需要的文本生成模型

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access2.png" width="600" alt="Reachy Mini Control应用" />
</div>

5.选择之前创建好的API Key，完成模型API接入

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access3.png" width="600" alt="Reachy Mini Control应用" />
</div>

6.创建完成，可以根据开发需求查看API调用的小demo代码

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_API_Access4.png" width="600" alt="Reachy Mini Control应用" />
</div>

如果需要关闭LLM模型服务，可以在`开通管理`中进行模型服务管理

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/LLM_Server_Manage.png" width="600" alt="Reachy Mini Control应用" />
</div>

---

### 语言对话模型申请

1.进入[豆包语言界面](https://console.volcengine.com/speech/new/experience/asr?projectName=default)

2.选择语音识别模型并进行API调用

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/Voice_API_Create1.png" width="600" alt="Reachy Mini Control应用" />
</div>

3.创建新的API Key并选择，完成模型API接入

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/Voice_API_Create2.png" width="600" alt="Reachy Mini Control应用" />
</div>

:::tip

注意这里的API Key和之前的LLM模型使用的API Key不同，需要创建新的API Key

:::

如果需要关闭Voice模型服务，可以在`开通管理`中进行模型服务管理

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Reachymini/conversation/Voice_Server_Manage.png" width="600" alt="Reachy Mini Control应用" />
</div>

---

## API接入

配置说明：编辑 `reachymini_conversation/config.py`：：

```python
# 豆包 LLM 配置
BRAIN_CONFIG = {
    "doubao": {
        "api_key": "your-ark-api-key",           # 替换为你的 API Key
        "base_url": "https://ark.cn-beijing.volces.com/api/v3",
        "model": "doubao-seed-character-251128", # 替换为你的 Model ID
    },
}
# 豆包 ASR 配置
ASR_CONFIG = {
    "api_key": "your-asr-api-key",               # 替换为你的 ASR API Key
    "resource_id": "volc.seedasr.sauc.duration",
    "url": "wss://openspeech.bytedance.com/api/v3/sauc/bigmodel_nostream",
}
```

## 系统运行

1.启动 Reachy Mini 后端服务

在虚拟环境下启动一个新终端，运行 daemon 服务：

```bash
reachy-mini-daemon
```

2.启动对话系统

再启动一个新的终端，进入项目目录并运行：

```bash
cd reachymini_conversation
python main.py
```

启动后系统会：

- 初始化 Reachy Mini 机器人
- 启动运动管理器 (60Hz 控制循环)
- 启动语音动画系统
- 启动麦克风音频采集
- 进入语音等待模式

3.开始对话

系统启动后直接进入语音循环，对着麦克风说话即可：

| 指令示例 | 效果 |
|---------|------|
| "你好" | 语音问候 + 可能的动作 |
| "跳个舞" | AI回复 + 执行舞蹈动作 |
| "看左边" | AI回复 + 头部向左转 |
| "你好呀！（脑袋晃了晃）" | 朗读"你好呀！" + 执行晃头动作 |

4.动作触发机制

Reachy Mini 在回复中会用（）包含动作描述，系统会自动解析并执行：

| 回复中的关键词 | 执行的动作 |
|---------------|-----------|
| 跳舞/舞/跳/dance | 随机舞蹈 |
| 歪头 | 头向左歪 |
| 点头 | 点头 |
| 摇头 | 摇头 |
| 看左/望左 | 看左边 |
| 看右/望右 | 看右边 |
| 看上/抬头 | 抬头 |
| 看下/低头 | 低头 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供不同的支持，以确保您与我们的产品体验尽可能顺畅。我们提供多种沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
