---
description: 构建和控制ReachyMini，这是一个紧凑的开源桌面人形机器人，用于AI和机器人学习。
title: ReachyMini入门指南
keywords:
  - Lerobot
  - Huggingface
  - ReachyMini
  - Robotics
  - 3D打印
  - 开源
  - 人形机器人
  - Python
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.webp
slug: /reachymini_getting_started
sku: null
translation:
  skip: [zh-CN, ja, es]
last_update:
  date: 1/7/2026
  author: TienjuiWong
createdAt: '2026-01-07'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/cn/reachymini_getting_started/
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
    您的浏览器不支持视频标签。
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🤖</font></span></strong>
</a>
</div>

**Reachy Mini**是首个旨在探索人形机器人和创意定制应用的开源桌面机器人。由**Pollen Robotics**和**Hugging Face**联合开发，这款紧凑型人形机器人以实惠的价格将专业级机器人能力带到您的桌面上。

由**Seeed Studio**优化和制造，Reachy Mini将富有表现力的物理交互与现代AI能力相结合。无论您是构建语音助手、计算机视觉应用还是教育工具，Reachy Mini都为您提供了一个完整的平台进行现实世界AI实验。

:::tip[您将学到什么]

- Reachy Mini的关键功能和架构
- 硬件规格以及Lite和完整版本之间的差异
- 如何组装和配置您的Reachy Mini
- 如何使用Python SDK控制机器人
- 如何与Hugging Face模型和应用集成
- 在哪里找到社区资源和支持

:::

## 关键功能和规格

Reachy Mini将令人印象深刻的能力打包成一个紧凑的桌面尺寸包装。

| 功能 | Reachy Mini Lite | Reachy Mini（完整版） |
|:---|:---|:---|
| **价格** | $299 + 运费 | $449 + 运费 |
| **计算** | 外部（兼容Mac/Linux） | 板载Raspberry Pi 4 |
| **连接** | 仅有线 | WiFi + 以太网（通过USB-C适配器） |
| **电源** | 有线电源 | 电池 + 有线运行 |
| **麦克风** | 4 | 4 |
| **扬声器** | 5W | 5W |
| **摄像头** | 广角 | 广角 |
| **加速度计** | 无 | 有 |
| **头部运动** | 6-DOF | 6-DOF |
| **身体旋转** | 有 | 有 |
| **动画天线** | 2 | 2 |
| **高度** | 28厘米（11英寸） | 28厘米（11英寸） |
| **重量** | 1.5公斤（3.3磅） | 1.5公斤（3.3磅） |

### 物理尺寸

- **高度：** 28厘米/11英寸（睡眠模式下约23厘米/9英寸）
- **宽度：** 16厘米/6.3英寸
- **重量：** 1.5公斤/3.3磅

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '24px 0'}}>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachy_mini_dimensions.png" alt="Reachy Mini尺寸" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>物理尺寸</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/dof_table.png" alt="自由度表" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>DOF规格</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/degrees_of_freedom.png" alt="自由度图" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>运动范围</p>
  </div>
</div>

## 为人形机器人交互设计

Reachy Mini专门为富有表现力、引人入胜的人形机器人交互而设计：

### 富有表现力的运动
- **6自由度头部：** 自然的平移、倾斜和翻滚运动
- **全身旋转：** 360度旋转以实现动态定位
- **动画天线：** 两个富有表现力的天线，增添个性和反馈

### 多模态感知
- **4麦克风阵列：** 用于语音识别和声源定位的高级音频采集
- **广角摄像头：** 用于面部检测、物体识别等的计算机视觉能力
- **5W扬声器：** 清晰的语音合成和音效音频输出

### 开放且可扩展
- **完全开源：** 硬件设计、软件SDK和仿真环境
- **Python SDK：** 直观的编程界面，JavaScript和Scratch支持即将推出
- **Hugging Face集成：** 直接访问用于语音、视觉等的最新AI模型

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/wLftEz-QF1E"
      title="Reachy Mini演示1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/JvdBJZ-qR18"
      title="Reachy Mini演示2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/vRh8G46Nc5k"
      title="Reachy Mini演示3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/dMpLCGvE2A0"
      title="Reachy Mini演示4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>

## 硬件版本

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/plumber.png" alt="Reachy Mini水管工" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

### Reachy Mini Lite（$299）

Lite版本是喜欢外部计算或已有首选开发环境的开发者的理想选择。

**最适合：**
- 使用Mac/Linux系统的开发者
- 希望最大程度控制计算资源的用户
- 有现有计算机实验室的教育环境
- 需要与现有基础设施集成的项目

**限制：**
- 需要与主机有线连接
- 无WiFi能力
- 无加速度计
- 必须通过壁挂式插座供电

### Reachy Mini完整版（$449）

完整版包括板载计算，可实现完全自主和无线操作。

**最适合：**
- 独立机器人应用
- 无线研发
- 需要加速度计数据的项目
- 便携式演示和部署

**额外功能：**
- 板载Raspberry Pi 4计算机
- WiFi连接
- 无线操作的电池
- 内置加速度计

## 组装指南

Reachy Mini以套件形式出售，需要约**2-3小时**组装。组装过程设计得适合所有经验水平的构建者。

### 组装资源

- **交互式组装指南：** [分步在线说明](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)

:::caution[组装提示]

- 在清洁、光线充足的工作空间中预留2-3小时
- 需要一套小型螺丝刀（包含在套件中）
- 按照在线指南逐步操作以获得最佳结果
- 组装时测试每个子系统（摄像头、麦克风、舵机）

:::

## 软件入门

### 先决条件

根据您的版本，您需要：

**Reachy Mini Lite：**
- Mac或Linux计算机（Windows支持即将推出）
- Python 3.8或更高版本
- USB连接

**Reachy Mini完整版：**
- WiFi网络或以太网连接
- 用于仪表板访问的Web浏览器

### 快速开始安装

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/cowboy.png" alt="Reachy Mini牛仔" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

使用以下命令安装Reachy Mini SDK：

```bash
pip install reachy-mini
```

> **专业提示：** 安装[uv](https://docs.astral.sh/uv/getting-started/installation/)可获得10-100倍更快的应用安装速度（自动检测，失败时回退到`pip`）。

### Hello World示例

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

## 仪表板控制

基于Web的仪表板提供了直观的界面，无需编写代码即可测试和控制Reachy Mini。

**功能：**
- 实时电机控制
- 摄像头馈送显示
- 麦克风测试
- 应用管理
- 系统诊断

从[官方仓库](https://github.com/pollen-robotics/reachy_mini)下载仪表板，或直接从Reachy Mini完整版的本地网络访问。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_webui.png"/>
</div>

## Hugging Face应用生态系统

Reachy Mini具有由Hugging Face Spaces提供支持的不断增长的即用型应用生态系统。只需一键即可从机器人的仪表板安装这些应用。

### 特色应用

**对话应用**
- 由大型语言模型驱动的自然语言交互
- 语音识别和语音合成
- 可定制的个性和知识库

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-hand-tracking-app.jpg" alt="Reachy Mini手部追踪" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

**手部追踪器**
- 使用计算机视觉进行实时手部追踪
- 机器人跟随您的手部动作
- 非常适合演示和交互实验

**收音机**
- 语音控制的收音机流
- 对歌曲和电台的自然语言请求
- 展示音频处理能力

**还有更多：**
在[Hugging Face Spaces](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini)上浏览完整的应用集合

<div align="center">
    <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/apps.png" alt="Reachy Mini应用生态系统"/>
</div>

## 构建自定义应用

### Python SDK

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-conversation-app.jpg" alt="Reachy Mini对话" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Python SDK提供对所有Reachy Mini系统的全面控制：

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # 电机控制
    mini.goto_target(head=pose, duration=1.0)

    # 摄像头访问
    frame = mini.camera.get_frame()

    # 音频I/O
    mini.speaker.play_audio(audio_data)
    audio = mini.microphones.record(duration=5.0)

    # 加速度计（仅限完整版）
    orientation = mini.imu.get_orientation()
```

### AI集成

Reachy Mini与Hugging Face的广泛模型生态系统无缝集成：

- **语音识别：** Whisper、Wav2Vec2
- **语音合成：** Bark、SpeechT5
- **视觉：** ViT、CLIP、YOLO
- **语言：** LLaMA、Mistral、GPT模型
- **多模态：** GPT-4V、LLaVA

### 发布应用

与全球Reachy Mini社区分享您的创作：

1. 使用SDK构建您的应用
2. 创建一个Hugging Face Space
3. 添加`reachy-mini`标签
4. 发布并与数百万Hugging Face用户分享

## 仿真开发

使用MuJoCo仿真环境，无需硬件即可对Reachy Mini应用进行原型设计和开发：

```bash
pip install reachy-mini[simulation]
```

快速测试您的代码，迭代，然后准备就绪时部署到硬件。

## 技术规格深入了解

### 电机系统

- **自由度：** 6-DOF头部运动
- **控制：** 高精度舵机电机
- **安全：** 电流限制和位置反馈
- **平滑运动：** 用于自然运动的插值轨迹

### 音频系统

- **麦克风阵列：** 4个麦克风排列以实现最佳声源定位
- **波束成形：** 硬件级音频处理
- **SNR：** 高信噪比以获得清晰的语音采集
- **扬声器：** 5W输出，频率响应清晰

### 视觉系统

- **传感器：** 广角摄像头
- **分辨率：** 高清视频采集
- **FPS：** 每秒30帧
- **视场：** 针对桌面交互优化

### 电源要求

**Lite版本：**
- 通过主机电脑的USB或壁挂适配器供电
- 典型功耗：5V @ 2A

**完整版：**
- 用于无线操作的内部电池
- USB-C充电
- 电池续航：根据使用情况2-4小时

## 隐私与安全

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/astronaut.png" alt="Reachy Mini宇航员" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Reachy Mini在设计时考虑了隐私：

- **无数据收集：** 默认情况下，机器人不会存储、传输或处理个人数据
- **本地处理：** 所有AI处理都可以在本地完成
- **用户控制：** 摄像头和麦克风功能完全由用户控制
- **开源：** 软件和硬件完全透明

Reachy Mini不会向Pollen Robotics或Hugging Face发送任何数据。除非您明确配置云服务，否则所有处理都在本地进行。

## 社区与支持

### 加入社区

- **Discord：** [加入Reachy Mini Discord](https://discord.com/invite/2bAhWfXme9)
- **GitHub：** [报告问题并贡献](https://github.com/pollen-robotics/reachy_mini)
- **官方网站：** [https://www.pollen-robotics.com/reachy-mini/](https://www.pollen-robotics.com/reachy-mini/)

### 文档与学习资源

- **[官方开发指南](https://github.com/pollen-robotics/reachy_mini/blob/develop/README.md)：** 完整的官方文档和开发资源
- **[SDK安装](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/installation.md)：** 5分钟设置您的电脑
- **[快速入门指南](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/quickstart.md)：** 在Reachy Mini上运行您的第一个行为
- **[Python SDK](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/python-sdk.md)：** 学习移动、观看、说话和聆听
- **[AI集成](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/integration.md)：** 连接LLM、构建应用并发布到Hugging Face
- **[核心概念](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/core-concept.md)：** 架构、坐标系统和安全限制
- **[二次开发](https://github.com/Seeed-Projects/reachy-mini-starter)：** Seeed的定制应用开发入门指南
- **[组装指南](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)：** 分步组装说明
- 🤗[**与社区分享您的应用**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)

## 下一步是什么？

### 路线图

Reachy Mini平台正在不断发展：

- **JavaScript支持：** 即将推出用于Web开发
- **Scratch集成：** 面向初学者的块式编程
- **更多应用：** 不断增长的社区应用生态系统
- **硬件扩展：** 模块化配件和升级
- **增强AI模型：** 针对板载处理优化的模型

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