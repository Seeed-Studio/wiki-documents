---
description: 构建并控制 ReachyMini，这是一款专为 AI 和机器人学习设计的紧凑型开源桌面人形机器人。
title: ReachyMini 入门指南 （网络需可下载HF模型）
keywords:
- Lerobot
- Huggingface
- ReachyMini
- 机器人
- 3D 打印
- 开源
- 人形机器人
- Python
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.webp
slug: /cn/reachymini_getting_started
sku:
translation:
  skip: [zh-CN,ja,es]
last_update:
  date: 1/7/2026
  author: TienjuiWong
---

<div style={{maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'}}>
  <video
    width="100%"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    style={{display: 'block'}}
    ref={(video) => { if (video) video.play().catch(() => {}); }}>
    <source src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.mp4" type="video/mp4"/>
    您的浏览器不支持 video 标签。
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🤖</font></span></strong>
</a>
</div>

**Reachy Mini** 是首款开源桌面机器人，旨在探索人机交互和创意自定义应用。该机器人由 **Pollen Robotics** 和 **Hugging Face** 共同开发，这款紧凑型人形机器人以亲民的价格将专业级机器人能力带到您的桌面。

由 **Seeed Studio** 优化和制造的 Reachy Mini 结合了丰富的物理交互与现代 AI 功能。无论您是在构建语音助手、计算机视觉应用还是教育工具，Reachy Mini 都能为您提供一个完整的真实世界 AI 实验平台。

:::tip[您将学到什么]

- Reachy Mini 的主要功能和架构
- 硬件规格以及 Lite 版与 Full 版的区别
- 如何组装和配置您的 Reachy Mini
- 如何使用 Python SDK 控制机器人
- 如何与 Hugging Face 模型和应用集成
- 在哪里寻找社区资源和支持

:::

## 主要功能与规格

Reachy Mini 在紧凑的桌面尺寸中蕴含了强大的功能。

| 功能 | Reachy Mini Lite | Reachy Mini (Full) |
|:---|:---|:---|
| **价格** | $299 + 运费 | $449 + 运费 |
| **计算单元** | 外部设备 (支持 Mac/Linux) | 板载 Raspberry Pi 4 |
| **连接性** | 仅限有线 | WiFi + 以太网 (通过 USB-C 适配器) |
| **电源** | 有线供电 | 电池 + 有线操作 |
| **麦克风** | 4个 | 4个 |
| **扬声器** | 5W | 5W |
| **摄像头** | 广角 | 广角 |
| **加速计** | 无 | 有 |
| **头部运动** | 6自由度 (DOF) | 6自由度 (DOF) |
| **身体旋转** | 是 | 是 |
| **灵动天线** | 2个 | 2个 |
| **高度** | 28 cm (11") | 28 cm (11") |
| **重量** | 1.5 kg (3.3 lbs) | 1.5 kg (3.3 lbs) |

### 物理尺寸

- **高度：** 28 cm / 11 英寸 (休眠模式下约为 23 cm / 9 英寸)
- **宽度：** 16 cm / 6.3 英寸
- **重量：** 1.5 kg / 3.3 磅

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '24px 0'}}>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachy_mini_dimensions.png" alt="Reachy Mini 尺寸"/>
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>物理尺寸</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/dof_table.png" alt="自由度表格"/>
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>自由度规格</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/degrees_of_freedom.png" alt="自由度示意图"/>
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>运动范围</p>
  </div>
</div>

## 专为人机交互设计

Reachy Mini 专为生动、引人入胜的人机交互而设计：

### 富有表现力的运动
- **6自由度头部：** 实现自然的外观平移、倾斜和滚动运动。
- **全机身旋转：** 360 度旋转实现动态定位。
- **灵动天线：** 两个富有表现力的天线，增加个性化反馈。

### 多模态感知
- **4麦克风阵列：** 先进的音频捕获，用于语音识别和声源定位。
- **广角摄像头：** 具备人脸检测、物体识别等计算机视觉功能。
- **5W 扬声器：** 清晰的音频输出，用于语音合成和音效。

### 开放且可扩展
- **完全开源：** 硬件设计、软件 SDK 和仿真环境全部公开。
- **Python SDK：** 直观的编程接口，即将支持 JavaScript 和 Scratch。
- **Hugging Face 集成：** 直接访问最先进的 AI 模型，用于语音、视觉等领域。

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/RAnqWk8fT9Q"
      title="Reachy Mini 演示 1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/C6-pI8vKk0s"
      title="Reachy Mini 演示 2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/ZzE8NnF9Ksw"
      title="Reachy Mini 演示 3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/T6_J1B9_u-c"
      title="Reachy Mini 演示 4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>

## 硬件版本

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/plumber.png" alt="Reachy Mini 水管工" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

### Reachy Mini Lite ($299)

Lite 版本非常适合偏好外部计算或已有现成开发环境的开发者。

**最适合：**
- 使用 Mac/Linux 系统的开发者
- 希望最大程度控制计算资源的用户
- 拥有现有计算机实验室的教育机构
- 需要与现有基础设施集成的项目

**限制：**
- 需要有线连接到主机
- 无 WiFi 功能
- 无加速计
- 必须通过墙插电源供电

### Reachy Mini Full ($449)

Full 版本包含板载计算，可实现完全自主和无线操作。

**最适合：**
- 独立机器人应用
- 无线研究与开发
- 需要加速计数据的项目
- 移动演示和部署

**附加功能：**
- Raspberry Pi 4 板载计算机
- WiFi 连接
- 电池，支持无线操作
- 内置加速计

## 组装指南

Reachy Mini 以套件形式销售，组装大约需要 **2-3 小时**。组装过程专为各种经验水平的创客设计。

### 组装资源

- **交互式组装指南：** [分步在线指令](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)


:::caution[组装提示]

- 在干净、光线充足的工作区预留 2-3 小时
- 需要一套小螺丝刀（套件中已包含）
- 按照在线指南分步操作以获得最佳效果
- 在组装过程中测试每个子系统（摄像头、麦克风、舵机）

:::

## 软件入门

### 先决条件

根据您的版本，您需要：

**Reachy Mini Lite：**
- Mac 或 Linux 电脑（Windows 支持即将推出）
- Python 3.8 或更高版本
- USB 连接

**Reachy Mini Full：**
- WiFi 网络或以太网连接
- 用于访问仪表盘的浏览器

### 快速安装

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/cowboy.png" alt="Reachy Mini 牛仔" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

使用以下命令安装 Reachy Mini SDK：

```bash
pip install reachy-mini
```

> **小贴士：** 安装 [uv](https://docs.astral.sh/uv/getting-started/installation/) 可获得 10-100 倍更快的应用安装速度（系统会自动检测，若未安装则退回使用 `pip`）。

### Hello World 示例

只需几行代码即可控制您的机器人：

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # 向上看并倾斜头部
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## 仪表盘控制

基于 Web 的仪表盘提供了一个直观的界面，无需编写代码即可测试和控制 Reachy Mini。

**功能：**
- 实时电机控制
- 摄像头画面显示
- 麦克风测试
- 应用管理
- 系统诊断

从 [官方仓库](https://github.com/pollen-robotics/reachy_mini) 下载仪表盘，或者直接从您的 Reachy Mini Full 的本地网络访问。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_webui.png"/>
</div>

## Hugging Face 应用生态系统

Reachy Mini 拥有一个不断发展的应用生态系统，由 Hugging Face Spaces 提供支持。只需在机器人仪表盘中点击一下，即可直接安装这些应用。

### 精选应用

**Conversation App (对话应用)**
- 由大语言模型 (LLM) 提供支持的自然语言交互
- 语音识别和语音合成
- 可自定义个性和知识库

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-hand-tracking-app.jpg" alt="Reachy Mini 手部追踪" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

**Hand Tracker (手部追踪)**
- 使用计算机视觉进行实时手部追踪
- 机器人会跟随您的手部动作
- 非常适合演示和交互实验

**Radio (收音机)**
- 语音控制的电台流媒体
- 使用自然语言请求歌曲和电台
- 展示音频处理能力

**更多应用：**
在 [Hugging Face Spaces](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini) 上浏览完整的应用集合。

<div align="center">
    <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/apps.png" alt="Reachy Mini 应用生态系统"/>
</div>

## 构建自定义应用

### Python SDK

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-conversation-app.jpg" alt="Reachy Mini 对话" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Python SDK 提供了对 Reachy Mini 所有系统的全面控制：

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # 电机控制
    mini.goto_target(head=pose, duration=1.0)

    # 访问摄像头
    frame = mini.camera.get_frame()

    # 音频 输入/输出
    mini.speaker.play_audio(audio_data)
    audio = mini.microphones.record(duration=5.0)

    # 加速计 (仅限 Full 版本)
    orientation = mini.imu.get_orientation()
```

### AI 集成

Reachy Mini 无缝集成了 Hugging Face 庞大的模型生态系统：

- **语音识别：** Whisper, Wav2Vec2
- **语音合成：** Bark, SpeechT5
- **视觉：** ViT, CLIP, YOLO
- **语言：** LLaMA, Mistral, GPT 系列模型
- **多模态：** GPT-4V, LLaVA

### 发布应用

向全球 Reachy Mini 社区分享您的创意：

1. 使用 SDK 构建您的应用
2. 创建一个 Hugging Face Space
3. 添加 `reachy-mini` 标签
4. 发布并与数百万 Hugging Face 用户分享

## 仿真开发

无需硬件，使用 MuJoCo 仿真环境即可原型化和开发 Reachy Mini 应用：

```bash
pip install reachy-mini[simulation]
```

测试您的代码，快速迭代，并在准备就绪后部署到硬件。

## 技术规格深入分析

### 电机系统

- **自由度：** 6自由度头部运动
- **控制：** 高精度伺服电机
- **安全：** 电流限制和位置反馈
- **平稳运动：** 插值轨迹实现自然运动

### 音频系统

- **麦克风阵列：** 4 个麦克风布局，实现最佳声源定位
- **波束成形：** 硬件级音频处理
- **信噪比 (SNR)：** 高信噪比，实现清晰的语音捕获
- **扬声器：** 5W 输出，频率响应清晰

### 视觉系统

- **传感器：** 广角摄像头
- **分辨率：** HD 视频采集
- **帧率：** 30 帧每秒 (FPS)
- **视野：** 针对桌面交互进行了优化

### 电源需求

**Lite 版本：**
- 通过主机的 USB 或墙插适配器供电
- 典型功耗：5V @ 2A

**Full 版本：**
- 内置电池，支持无线操作
- USB-C 充电
- 电池续航：2-4 小时（视使用情况而定）

## 隐私与安全

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/astronaut.png" alt="Reachy Mini 宇航员" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Reachy Mini 的设计充分考虑了隐私：

- **无数据采集：** 默认情况下，机器人不会存储、传输或处理个人数据
- **本地处理：** 所有 AI 处理均可在本地完成
- **用户控制：** 摄像头和麦克风功能完全由用户控制
- **开源：** 软件和硬件完全透明

Reachy Mini 不会将任何数据发送给 Pollen Robotics 或 Hugging Face。除非您明确配置云服务，否则所有处理都在本地发生。

## 社区与支持

### 加入社区

- **Discord：** [加入 Reachy Mini Discord](https://discord.com/invite/2bAhWfXme9)
- **GitHub：** [报告问题并贡献代码](https://github.com/pollen-robotics/reachy_mini)
- **官方网站：** [https://www.pollen-robotics.com/reachy-mini/](https://www.pollen-robotics.com/reachy-mini/)

### 文档与学习资源

- **[官方开发指南](https://github.com/pollen-robotics/reachy_mini/blob/develop/README.md)：** 完整的官方文档和开发资源
- **[SDK 安装](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/installation.md)：** 5 分钟设置您的电脑
- **[快速入门指南](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/quickstart.md)：** 在 Reachy Mini 上运行您的第一个行为
- **[Python SDK](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/python-sdk.md)：** 学习如何移动、观察、交谈和倾听
- **[AI 集成](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/integration.md)：** 连接 LLM，构建 App 并发布到 Hugging Face
- **[核心概念](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/core-concept.md)：** 架构、坐标系和安全限制
- **[二次开发](https://github.com/Seeed-Projects/reachy-mini-starter)：** Seeed 的自定义应用开发入门指南
- **[组装指南](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)：** 分步组装说明
- 🤗[**向社区分享您的应用**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)


## 下一步计划？

### 路线图

Reachy Mini 平台正在不断进化：

- **JavaScript 支持：** 即将推出，用于基于 Web 的开发
- **Scratch 集成：** 为初学者提供图形化编程
- **更多应用：** 不断增长的社区应用生态系统
- **硬件扩展：** 模块化配件和升级
- **增强型 AI 模型：** 针对板载处理优化的模型

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此提供各种支持，确保您的产品使用体验尽可能顺畅。我们提供多种沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>