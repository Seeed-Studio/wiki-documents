---
description: 通过Reachy Mini对话应用语音控制SO-ARM机械臂爪夹开合，无需修改官方源码，使用外部工具机制实现。
title: Reachy Mini 语音控制 SO-ARM
slug: /reachymini_development_cases_gripper_voice_control
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp
keywords:
  - reachy mini
  - so-arm
  - Huggingface
  - conversation app
sku: 100090917，100025004，114993666,114993667
last_update:
  date: 7/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-29'
updatedAt: '2026-07-29'
url: https://wiki.seeedstudio.com/reachymini_development_cases_gripper_voice_control/
---
# Reachy Mini 语音控制 SO-ARM

本案例通过 Reachy Mini 对话应用（conversation app）用语音控制 SO-ARM 从臂爪夹的开合 —— **无需修改官方源码**，使用应用内置的外部工具（external tools）机制。

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp"
  />
</div>

## 工作原理

```text
语音指令
  → gripper_control 外部工具（LLM function calling）
  → 子进程调用驱动脚本：soarm_gripper.py open|close
  → lerobot SOFollower → /dev/ttyACM1 驱动 SO-ARM 爪夹
```

该 fork 新增的文件：


| 文件                                                 | 作用                           |
| ---------------------------------------------------- | ------------------------------ |
| `soarm_gripper.py`                                   | 爪夹驱动脚本（基于 lerobot）   |
| `external_content/external_tools/gripper_control.py` | 暴露给 LLM 的外部工具          |
| `.gitignore`                                         | 取消忽略工具文件，使其可被提交 |

## 前置条件

1. Reachy Mini 已连接（`/dev/ttyACM0`）且守护进程（daemon）正在运行。
2. SO-ARM 从臂已连接。本方案假设它枚举为 `/dev/ttyACM1` —— 用 `ls /dev/ttyACM*` 确认，如不同请修改 `soarm_gripper.py` 中的 `PORT`。
3. 已创建带 feetech 支持的 `lerobot` conda 环境：

   ```bash
   conda create -n lerobot python=3.10
   conda activate lerobot
   pip install lerobot[feetech]
   ```
4. 已用 lerobot 完成一次机械臂校准（会在 `~/.cache/huggingface/lerobot/calibration/robots/so_follower/` 下生成校准文件）。脚本中 `ARM_ID = "my_awesome_follower_arm"`，需与你的校准文件名一致。

## 安装 reachy_mini_conversation_app

> 注意：安装本应用前，需要先安装 [Reachy Mini SDK](https://github.com/pollen-robotics/reachy_mini/)。

先克隆 fork 仓库：

```bash
git clone https://github.com/xiehuangbao888/reachy_mini_conversation_app.git
cd reachy_mini_conversation_app
```

**使用 conda**

```bash
conda create -n reachy_mini python=3.12
conda activate reachy_mini
pip install -e .
```

**(或)使用 uv**

```bash
# macOS (Homebrew)
uv venv --python /opt/homebrew/bin/python3.12 .venv

# Linux / Windows（Python 在 PATH 中）
uv venv --python python3.12 .venv

source .venv/bin/activate
uv sync
```

:::caution
如果使用 conda 环境安装本应用，而 `lerobot` 也在另一个 conda 环境中（见前置条件），请在 `.env` 中设置 `LEROBOT_PYTHON` 指向 lerobot 环境的 python 路径（如 `/home/ubuntu/miniconda3/envs/lerobot/bin/python`），不要与 reachy_mini 环境混用。
:::

## 配置爪夹语音控制

在仓库根目录的 `.env` 中加入以下两行（文件不存在则新建）：

```bash
REACHY_MINI_EXTERNAL_TOOLS_DIRECTORY=external_content/external_tools
AUTOLOAD_EXTERNAL_TOOLS=1
```

如果你的 lerobot python 路径不同，可额外设置：

```bash
LEROBOT_PYTHON=/path/to/lerobot/env/bin/python
```

## 运行

**必须从仓库根目录启动**，这样 `.env` 和相对路径的工具目录才能正确解析：

```bash
cd reachy_mini_conversation_app
reachy-mini-conversation-app
```

```##

- 张开："open the gripper" / "open the claw" / "release" / "let go"
- 闭合："close the gripper" / "close the claw" / "grab it" / "hold this"

## 手动测试

不启动对话应用，先验证硬件和校准是否正常：

```bash
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py open
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py close
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py demo   # 开合两次
```

## 自行修改：控制机械臂其他部位

整个链路只涉及两个文件，按需求修改对应文件即可：

### 1. 修改动作本身 → `soarm_gripper.py`（仓库根目录）

这是真正驱动机械臂的脚本。当前只发送爪夹动作：

```python
robot.send_action({"gripper.pos": target})
```

SO-ARM 从臂的可用关节键为 `shoulder_pan.pos`、`shoulder_lift.pos`、`elbow_flex.pos`、`wrist_flex.pos`、`wrist_roll.pos`、`gripper.pos`（归一化 0–100）。要控制其他部位，在 `send_action()` 的字典中加入对应关节即可，例如：

```python
robot.send_action({
    "shoulder_pan.pos": 50.0,
    "elbow_flex.pos": 70.0,
    "gripper.pos": OPEN_POS,
})
```

也可以仿照 `open` / `close` / `demo` 在 `main()` 中新增自己的动作分支（如 `wave`、`home`）。

该文件中的常用调参项：

- `OPEN_POS` / `CLOSE_POS` — 爪夹行程，归一化 0–100（默认 60 / 20）。
- `PORT` — 从臂串口设备。
- `ARM_ID` — 校准配置文件名。

### 2. 让 LLM 能调用新动作 → `external_content/external_tools/gripper_control.py`

这是暴露给大模型的外部工具，决定 LLM"知道"有哪些动作可用。新增动作时需要同步修改：

- `description` — 工具描述，告诉 LLM 什么时候调用它（用户的哪些说法应触发）。
- `parameters_schema` — 在 `action` 的 `enum` 中加入新动作名（如 `"wave"`）。
- `__call__()` — 把新 `action` 透传给子进程命令 `cmd = [LEROBOT_PYTHON, GRIPPER_SCRIPT, action]`。

如果想控制的是完全不同的设备，也可以在该目录下**新建一个工具文件**（如 `arm_control.py`），同样继承 `reachy_mini_conversation_app.tools.core_tools.Tool`；`AUTOLOAD_EXTERNAL_TOOLS=1` 时目录下所有合法工具文件都会自动加载。注意每个工具类的 `Tool.name` 必须唯一。

## 故障排除

**后端启动失败：`Unknown scheme for proxy URL 'socks://...'`**

应用使用 httpx，不接受 `ALL_PROXY` 中的 `socks://` 写法（只认 `http(s)://`、`socks5://`、`socks5h://`）。如果 shell 里（如 clash）设置了 `ALL_PROXY=socks://...`，启动时去掉它即可，保留 `HTTPS_PROXY=http://...` 就够：

```bash
env -u ALL_PROXY -u all_proxy reachy-mini-conversation-app
```

或者把代理变量改成 `socks5://127.0.0.1:端口/`（httpx 接受该写法，需要 `socksio`，环境中已安装）。
