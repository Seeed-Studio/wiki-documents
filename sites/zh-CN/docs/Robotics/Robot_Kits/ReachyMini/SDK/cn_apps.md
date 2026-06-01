---
description: 构建和发布Reachy Mini应用的完整指南，涵盖应用创建、测试、调试和发布到Hugging Face Spaces。
title: 构建和发布应用
slug: /reachymini_sdk_apps
keywords:
  - apps
  - building
  - publishing
  - python apps
  - hugging face spaces
  - ReachyMiniApp
  - app assistant
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_sdk_apps/
---

# 构建和发布应用

Reachy Mini拥有由Hugging Face Spaces提供支持的 应用生态系统。您可以构建Python应用，发布它们，任何Reachy Mini所有者都可以从仪表板一键安装它们。

<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: "1px solid #ddd", borderRadius: "8px"}} />
    <p><i>▶️ 点击在YouTube上观看：Reachy Mini SDK运行指南</i></p>
  </a>
</div>

> 有关带屏幕截图的分步教程，请参阅博客文章：[制作和发布您的Reachy Mini应用](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)。

---

## 使用AI代理

如果您使用AI编码代理（Claude Code、Cursor、Copilot等），它可以为您构建应用。将其指向项目的[AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md)：

> *我想创建一个Reachy Mini应用。首先请阅读https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

仓库包含`skills/`目录，详细指南供AI代理用于正确构建应用：

| 技能 | 内容 |
|-------|---------------|
| `create-app.md` | 应用创建工作流和模板 |
| `ai-integration.md` | 构建LLM驱动的应用 |
| `control-loops.md` | 实时响应应用（跟踪、游戏） |
| `motion-philosophy.md` | 在`goto_target`和`set_target`之间选择 |
| `interaction-patterns.md` | 天线作为按钮，头部作为控制器 |
| `symbolic-motion.md` | 用数学方式定义运动（舞蹈、节奏） |

---

## 应用如何工作

Reachy Mini守护进程管理您应用的全部生命周期：

1. 您发送"启动应用"请求（从仪表板或REST API）。
2. 守护进程将您的应用作为**Python子进程**启动（`python -u -m your_app.main`）。
3. 您的应用接收已连接的`ReachyMini`实例和`stop_event`。
4. 停止时，守护进程向您的进程发送`SIGINT`，这会触发优雅关闭。
5. 应用退出后，守护进程将机器人返回到其默认位置。

**关键约束：**
- 一次只能运行**一个**应用。
- 您的应用在守护进程的子进程中运行——它不管理自己的硬件连接。
- 在无线机器人上，您的应用在`/venvs/apps_venv/`的共享虚拟环境中运行。

---

## 创建应用

始终使用CLI工具创建应用——它生成正确的结构、元数据和入口点：

```bash
# 安装reachy-mini（如果尚未完成）
uv pip install reachy-mini

# 一站式创建和发布（推荐）
reachy-mini-app-assistant create my_app_name /path/to/destination --publish

# 或者先本地创建
reachy-mini-app-assistant create my_app_name /path/to/destination
```

> **切勿手动创建应用文件夹。** 助手处理样板代码、Hugging Face标签、入口点和正确的包结构。手动创建会导致难以调试的微妙问题。

### 选择模板

| 模板 | 命令 | 使用场景 |
|----------|---------|----------|
| **默认** | `reachy-mini-app-assistant create my_app .` | 大多数应用。最小工作结构。 |
| **对话** | `reachy-mini-app-assistant create --template conversation my_app .` | LLM集成、语音、让机器人说话。包括音频管道、LLM工具、运动融合和所有管道。 |

### 生成的结构

```
my_app/
├── index.html              # Hugging Face Space登录页面
├── style.css               # 登录页面样式
├── pyproject.toml          # 带入口点的包配置
├── README.md               # 必须包含reachy_mini_python_app标签
└── my_app/
    ├── __init__.py
    ├── main.py             # 您的应用逻辑
    └── static/             # 可选Web UI
        ├── index.html
        ├── style.css
        └── main.js
```

---

## ReachyMiniApp合约

您的应用是一个扩展`ReachyMiniApp`并实现`run()`方法的类。这是最小结构：

```python
import threading
import time

import numpy as np

from reachy_mini import ReachyMini, ReachyMiniApp
from reachy_mini.utils import create_head_pose


class MyApp(ReachyMiniApp):
    def run(self, reachy_mini: ReachyMini, stop_event: threading.Event):
        t0 = time.time()

        while not stop_event.is_set():
            t = time.time() - t0

            # 移动头部
            yaw = 30.0 * np.sin(2.0 * np.pi * 0.2 * t)
            head_pose = create_head_pose(yaw=yaw, degrees=True)

            # 移动天线
            a = np.deg2rad(25.0 * np.sin(2.0 * np.pi * 0.5 * t))
            antennas = np.array([a, -a])

            reachy_mini.set_target(head=head_pose, antennas=antennas)
            time.sleep(0.02)


if __name__ == "__main__":
    app = MyApp()
    try:
        app.wrapped_run()
    except KeyboardInterrupt:
        app.stop()
```

### 关键点

- **`run(reachy_mini, stop_event)`**：您必须实现的唯一方法。`ReachyMini`实例已经连接并准备好。在主循环中轮询`stop_event`以优雅退出。
- **`wrapped_run()`**：从`__main__`块调用。它处理连接到机器人、启动可选服务，并调用您的`run()`方法。
- **`stop()`**：设置`stop_event`。守护进程在停止您的应用时通过`SIGINT`调用此方法。
- **`__main__`块**：必需。守护进程将您的应用作为模块运行（`python -m my_app.main`），因此此块是实际入口点。

### `pyproject.toml`入口点

守护进程通过标准Python入口点发现您的应用。助手为您生成此配置：

```toml
[project.entry-points."reachy_mini_apps"]
my_app = "my_app.main:MyApp"
```

组名是`reachy_mini_apps`（带下划线）。值指向您的类（`module.main:ClassName`）。

您应该在additional dependencies for your project中添加任何其他依赖到此文件。

---

## 可选：应用的网络UI

如果您希望应用有任何设置页面或任何Web界面，请在您的类上设置`custom_app_url`：

```python
class MyApp(ReachyMiniApp):
    custom_app_url: str | None = "http://0.0.0.0:8042"

    def run(self, reachy_mini: ReachyMini, stop_event: threading.Event):
        # 在self.settings_app上定义FastAPI路由
        @self.settings_app.post("/my_endpoint")
        def my_endpoint():
            return {"status": "ok"}

        # 您的主循环...
```

设置`custom_app_url`后，应用自动启动一个FastAPI Web服务器，从包内的`static/`目录提供文件。仪表板显示设置图标以打开此UI。页面可以从Lite的`http://localhost:8042`访问，无线版从`http://reachy-mini.local:8042`访问。

如果您的应用不需要Web UI，请设置`custom_app_url = None`。

> 有关带有切换和声音播放的工作示例，请参阅[模板应用](https://huggingface.co/spaces/pollen-robotics/reachy_mini_template_app)。

---

## 测试您的应用

### 1. 验证结构

```bash
reachy-mini-app-assistant check /path/to/my_app
```

这检查您的应用是否有正确的结构、入口点和元数据。

### 2. 直接运行

您可以直接运行应用的`main.py`以进行快速迭代（确保守护进程正在运行）：

```bash
python -m my_app.main
```

### 3. 通过仪表板测试

在本地安装您的应用并通过仪表板测试，就像用户一样：

```bash
# 以开发模式安装
uv pip install -e /path/to/my_app

# 启动守护进程
reachy-mini-daemon          # Lite
reachy-mini-daemon --sim    # 仿真
```

然后打开[http://127.0.0.1:8000/](http://127.0.0.1:8000/) — 您的应用会出现在已安装列表中。

---

## 发布到Hugging Face

### 1. 登录Hugging Face

```bash
uv pip install --upgrade huggingface_hub
hf auth login
```

使用具有**写**权限的令牌。

### 2. 发布

如果您在创建应用时使用了`--publish`，它已经是一个具有Git远程的Hugging Face Space。只需推送：

```bash
git add . && git commit -m "my changes" && git push
```

如果您创建时没有`--publish`，以后可以发布：

```bash
reachy-mini-app-assistant publish /path/to/my_app
```

### 3. 可发现性

为了使您的应用出现在Reachy Mini应用商店，其`README.md`必须在YAML frontmatter中包含`reachy_mini_python_app`标签：

```yaml
---
tags:
  - reachy_mini_python_app
---
```

助手会自动添加此标签。如果您手动创建README，请不要忘记它。

---

## 安装应用

### 从仪表板

打开Reachy Mini仪表板，点击任何社区应用的**安装**。这是最简单的方式。

### 通过REST API

```bash
# 从Hugging Face安装
curl -X POST http://localhost:8000/api/apps/install \
  -H "Content-Type: application/json" \
  -d '{"url": "https://huggingface.co/spaces/<user>/<app_name>"}'

# 启动应用
curl -X POST http://localhost:8000/api/apps/start-app/<app_name>

# 停止当前应用
curl -X POST http://localhost:8000/api/apps/stop-current-app

# 列出已安装的应用
curl http://localhost:8000/api/apps/list
```

对于无线版，将`localhost`替换为`reachy-mini.local`或机器人的IP地址。

### 无线单元的离线/手动部署

如果您在机器人上没有互联网访问（例如在会议上），您可以直接安装您的应用：

```bash
# 将您的应用复制并安装到机器人上
scp -r /path/to/my_app pollen@reachy-mini.local:/tmp/my_app
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/pip install /tmp/my_app"
```

手动更新代码后，重启守护进程或应用以使更改生效。

---

## 调试应用

### 查看日志

???+ info "Lite/仿真"
    如果您在终端中运行守护进程，应用日志（stdout/stderr）直接显示在那里。

    ```bash
    reachy-mini-daemon          # Lite
    reachy-mini-daemon --sim    # 仿真
    # 应用日志将打印在这里
    ```

???+ info "无线"
    应用输出被守护进程捕获，可通过`journalctl`获取：

    ```bash
    ssh pollen@reachy-mini.local

    # 实时日志
    sudo journalctl -u reachy-mini-daemon -f

    # 最近日志，过滤（守护进程日志充满HTTP访问日志）
    sudo journalctl -u reachy-mini-daemon --since '5 min ago' | grep -v "uvicorn\|GET \|POST "
    ```

### 常见问题

| 问题 | 解决方案 |
|---------|---------|
| "已有应用在运行" | 先停止当前应用：`curl -X POST http://localhost:8000/api/apps/stop-current-app` |
| 守护进程状态不佳 | 重启它：`sudo systemctl restart reachy-mini-daemon`（等待约30秒再启动应用） |
| 应用未拾取代码更改 | 重启应用。如果您手动部署，也清除字节码：`rm -rf __pycache__` |

### 提示：在启动时记录所有内容

一个有用的调试实践是在应用启动时记录您的配置：

```python
import logging
import sys

logger = logging.getLogger(__name__)

def run(self, reachy_mini, stop_event):
    logger.info("=" * 50)
    logger.info("我的应用启动")
    logger.info(f"  Python: {sys.version}")
    logger.info("=" * 50)
    # ...
```

---

## 应用配置

应用子进程**继承守护进程的环境变量**。没有特殊的注入机制——您的应用看到的是守护进程看到的任何内容。

如果您的应用需要运行时配置（API密钥、服务器URL等），推荐方法是使用**应用的Web UI**。在您的类上设置`custom_app_url`并添加一个设置页面，用户可以直接从浏览器输入值（API密钥、服务器地址等）。这是最用户友好的选项，适用于所有平台。请参阅上面的[可选：应用的网络UI](#optional-web-ui-for-your-app)了解如何设置。

其他方法：

- **配置文件**：从已知路径读取（例如`.env`参见[示例](https://github.com/pollen-robotics/reachy_mini_conversation_app/blob/main/.env.example)）。
- **硬编码默认值**：简单且可调试用于开发。

---

## 在您的应用中使用音频

在应用内部，音频录制、回放和到达方向检测的工作方式与独立脚本相同——直接使用SDK方法（`start_recording()`、`get_audio_sample()`、`push_audio_sample()`、`play_sound()`）。

请参阅官方示例获取工作代码：

- **[声音录制](/reachymini_examples_sound_record)**：从麦克风阵列录制并保存到WAV。
- **[声音播放](/reachymini_examples_sound_play)**：播放WAV文件或推送实时音频（例如来自TTS引擎）。
- **[声音到达方向](/reachymini_examples_sound_doa)**：检测谁在说话并让机器人看向他们。

有关无线版和Lite之间音频流差异的详细信息，请参阅[媒体架构](/reachymini_sdk_media-architecture)。

---

## 进一步阅读

- **博客文章**：[制作和发布您的Reachy Mini应用](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) — 带屏幕截图的完整演练
- **API参考**：[应用API](/reachymini_api_apps) — `ReachyMiniApp`、`AppManager`及相关类的自动生成参考
- **REST API**：[REST API参考](/reachymini_api_rest-api) — 完整HTTP端点文档
- **示例应用**：在[Hugging Face](https://hf.co/reachy-mini/#/apps)上浏览社区应用以获取灵感

| 应用 | 关键模式 | 链接 |
|-----|-------------|------|
| Conversation App | LLM工具、音频管道、控制循环 | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| Marionette | 运动录制、安全扭矩、HF数据集 | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| Radio | 天线交互模式 | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| Simon | 无GUI模式（天线启动） | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| Hand Tracker | 基于摄像头的实时控制循环 | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| Spaceship Game | 头部作为操纵杆、天线按钮 | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |