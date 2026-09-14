---
description: 通过 BLE RTC 使用 reSpeaker Clip 对 reBot Arm B601-DM 进行语音控制。通过流式传输和解码 Opus 音频，结合 WebRTC VAD 进行语音分段，再使用 Groq Whisper STT 和 LLM 意图解析器驱动机械臂的各个关节和夹爪——在 Ubuntu 22.04 上可完全通过 pip 安装。
title: 使用 reSpeaker Clip 通过语音控制 reBot Arm
keywords:
  - reSpeaker Clip
  - reBot Arm
  - B601-DM
  - 语音控制
  - BLE RTC
  - Groq
  - Whisper
  - STT
  - 意图识别
  - Opus
  - VAD
  - Python
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /control_rebot_arm_using_voice_with_respeaker_clip
sku: 100020126
last_update:
  date: 9/11/2026
  author: Kasun Thushara
createdAt: '2026-09-11'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/cn/control_rebot_arm_using_voice_with_respeaker_clip/
---

# 使用 reSpeaker Clip 通过语音控制 reBot Arm

`rebot-clip` 让你可以通过 reSpeaker Clip 对 reBot Arm B601-DM 下达语音指令，将自然语言转化为物理运动。Clip 通过 BLE RTC 以 Opus 格式流式传输音频，应用在解码后运行 WebRTC/能量语音活动检测，然后使用 Groq 的 Whisper STT 和 LLM 意图解析器，将每一句话翻译为一个固定的机械臂动作，例如打招呼、转向、回零或打开夹爪。它在 Ubuntu 22.04 上可以完全通过 `pip` 安装，无需 conda，并且当 pinocchio/motorbridge 轮子或串口不可用时，会自动回退到模拟机械臂。


<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/OdBwXYKzoio"
          title="ReSpeaker Lite with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## 所需硬件

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Clip</th>
    <th>reBot Arm B601-DM</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                立即获取 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                立即获取 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>

## 前置条件

:::tip
在开始之前，请先阅读下面两个指南。该项目直接基于 reBot Arm 的基础设置和 reSpeaker Clip 的 RTC 流式传输流程构建，提前完成它们可以为你节省大量排障时间。

- [reBot Arm B601-DM 入门指南](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) —— 组装机械臂、重置电机 ID、完成校准，并确认可以通过串口访问。
- [使用 reSpeaker Clip RTC SDK 构建实时音频流](https://wiki.seeedstudio.com/cn/respeaker_clip_rtc_streaming/) —— 配对 Clip，建立 RTC 会话，并解码实时音频流。
- 一个 **Groq API key** —— 用于语音转文本（Whisper）和动作意图理解（LLM）。可在 [console.groq.com/keys](https://console.groq.com/keys) 免费创建。你将在安装过程中把它加入 `.env` 文件。
:::

## 克隆仓库

```bash
git clone https://github.com/KasunThushara/reSpeaker-Clip-rebot-ARM.git
cd reSpeaker-Clip-rebot-ARM
```

### 项目结构

```text
rebotclip/            application package
  clip/               vendored reSpeaker Clip BLE SDK (+ BlueZ pairing agent)
  audio/              Opus decoder, WebRTC/energy VAD, WAV/PCM helpers
  voice/              Groq STT + LLM action-intent parser
  arm/                ArmWrapper (real/sim), coordinate map, action executors
  rtc_stream.py       Clip RTC live-stream orchestration (decode→VAD→STT)
  web.py              FastAPI web UI backend (scan/connect/RTC/VAD/arm)
  static/index.html   single-page web UI
  app.py              end-to-end glue (utterance → intent → arm)
  cli.py / __main__   `python -m rebotclip` (terminal or --web)
config/
  commands.yaml       action registry → drives the LLM prompt
  coordinates.yaml    named IK poses + joint macros (calibrate these!)
vendor/reBotArm_control_py/   vendored arm control lib (package+config+urdf)
data/demo_sample_packets.json bundled Clip RTC audio (offline testing)
examples/             runnable milestones (offline-friendly)
```

## 安装

```bash
cd reSpeaker-Clip-rebot-ARM
python3.10 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env           # then paste your GROQ_API_KEY
```

:::tip
如果 `python3.10 -m venv` 失败（例如提示 `ensurepip is not available`），请安装 `python3.10-venv` apt 软件包，或复用任意已有的 Python 3.10 环境并使用 `pip`。
:::

机械臂控制层需要 `pin`（pinocchio）和 `motorbridge`，它们以二进制 wheel 形式发布。如果它们（或串口）缺失，rebot-clip 会**自动回退到仿真模式**，这样语音处理流水线仍然可以在笔记本上运行。

## 快速开始

```bash
# 1. Show the configured models/actions            (offline)
python -m rebotclip --models

# 2. Arm smoke test (simulated)                    (offline)
python examples/arm_smoke.py

# 3. VAD segmentation on bundled Clip audio        (offline)
python examples/clip_vad_test.py

# 4. Voice → intent on bundled audio (needs key)   (network)
python examples/voice_test.py

# 5. Action → coordinate sanity (offline)          (offline)
python examples/intent_pose_check.py
python examples/intent_pose_check.py --text "say hi"   # needs Groq network

# 6. BLE sanity with a real Clip (no Groq, no arm)
python examples/clip_ble_check.py                        # info only
python examples/clip_ble_check.py --rtc 10               # speak into the Clip

# 7. Full app: replay demo, simulated arm          (network)
python -m rebotclip --demo --sim

# 8. Live: real Clip + real arm
python -m rebotclip                 # auto-scan the Clip
python -m rebotclip --address AA:BB:CC:DD:EE:FF   # pin a device
python -m rebotclip --scan          # list nearby Clip devices
```

## Web UI（扫描 · 连接 · RTC + VAD）

一个本地小型 Web 应用，用于扫描 Clip、连接你想要的设备，并启动带有实时 VAD、转写和动作检测的 RTC 流。

```bash
source .venv/bin/activate
python -m rebotclip --web                      # http://127.0.0.1:8000
python -m rebotclip --web --host 0.0.0.0 --port 8000   # expose on your LAN
```

然后打开 **http://127.0.0.1:8000** （如果绑定到 `0.0.0.0`，则为 `http://<pc-ip>:8000`），并按以下步骤操作：

1. **Scan devices** → 从下拉框中选择一个 `Clip XXXX` → **Connect**。
2. **Start RTC** → 开始说话。观察 VAD 指示条、实时转写，以及检测到的 **action** 徽章和回复。（或者勾选 **Demo (no Clip)**，在无硬件的情况下回放内置音频。）
3. 实时调节 **VAD**：WebRTC 激进程度、能量阈值、**min level**（绝对 dBFS 门限）、麦克风增益——以及 **Normal/Strict 预设** 和 **Recalibrate noise**（在房间安静时运行）。
4. **Arm mode** 开关 —— `Off`（仅显示意图，默认）、`Sim`（仿真运动并记录日志）或 `Real`（驱动真实机械臂运动）。

CLI 选项：`--web --host --port`，`--no-classify`（仅转写，不进行 LLM 动作推断），`--execute off|sim|real`（初始机械臂模式）。

## 硬件联调

1. 将 Clip（BLE）和机械臂的 USB 串口连接到电脑。
2. 为自己赋予串口访问权限：
   ```bash
   sudo usermod -a -G dialout $USER    # then log out/in
   ls /dev/ttyACM*                     # should list the arm
   ```
3. 在免手动操作前，先校准 `config/coordinates.yaml`（`reach_front`/`present` 目前是占位符），并检查关节宏定义。
4. 保持工作空间清理干净；按 Ctrl+C 结束应用后，机械臂会回到安全的 `standby` 姿态（设置 `AUTO_HOME_ON_EXIT=0` 可跳过此步骤）。

## 添加自定义位置（坐标映射）

所有命名的机械臂目标都位于 **`config/coordinates.yaml`** 的 `poses:` 键下。姿态有两种类型：**关节空间**姿态（`kind: joints`）是六个机械臂关节角度的弧度列表 `[J1, J2, J3, J4, J5, J6]`；**IK** 姿态（`kind: ik`）是末端执行器目标 `[x, y, z, roll, pitch, yaw]`（单位为米/弧度），通过逆运动学求解。坐标系原点位于 J1 下方的安装平面上，`+x` 指向前方（远离底座），`+y` 指向左侧，`+z` 指向上方。关节目标会自动裁剪到 URDF 限制范围内，如果 IK 无法到达目标，则该运动会返回错误而不会执行，因此超出范围的数值是安全的，不会造成损坏。

要添加一个新位置，在 `poses:` 下添加一个条目，并选择与你的测量方式匹配的类型——例如一个关节空间的拾取姿态和一个 IK 的放置姿态：

```yaml
poses:
  pick_left:
    kind: joints
    joints: [0.6, -0.9, -0.8, 0.0, 0.2, 0.0]   # radians

  drop_front:
    kind: ik
    pose: [0.32, 0.10, 0.20, 0.0, -0.7, 0.0]   # x,y,z,roll,pitch,yaw
```

你可以在不涉及任何语音或 LLM 的情况下测试一个姿态：`python examples/arm_smoke.py --pose drop_front` 会打印（在仿真中）或执行（加上 `--real`）该动作，而 `python examples/intent_pose_check.py` 会列出姿态映射，并显示每个动作对应的指令坐标。在 Python 中，可以从 `rebotclip.arm` 中直接调用 `move_to_named_pose(arm, "drop_front")`。

只有当一个命名姿态也被注册为一个动作时，它才会成为一个**语音命令**。这需要两个小改动：在 `config/commands.yaml` 中添加该动作（名称、描述和示例短语——这些内容用于构建 LLM 提示），并在 `rebotclip/arm/actions.py` 中添加一个执行器。例如，要让“pick from the left（从左侧拾取）”生效，在 `commands.yaml` 中添加：

```yaml
actions:
  pick_left:
    description: "move to the left pickup position"
    examples: ["pick from the left", "go to the left pickup", "grab on the left"]
```

然后在 `actions.py` 中添加一个执行器并注册它：

```python
def _exec_pick_left(arm: ArmWrapper) -> str:
    return move_to_named_pose(arm, "pick_left")

EXECUTORS = {
    # ...existing entries...
    "pick_left": _exec_pick_left,
}
```

重启应用后，新命令会立即被识别——不需要其他更改，因为意图提示是从 `commands.yaml` 自动生成的。

对于标定，先将机械臂驱动到你想要的姿态（或者使用随附的 `example/7_arm_ik_control.py` 中的 `state` / `end_state` 读取当前数值），记录关节或 IK 数值，然后将它们粘贴到 `coordinates.yaml` 中。请将目标保持在可达工作空间内，并远离底座和桌面以避免自碰撞，优先选择较保守的数值，并始终先使用 `--sim` 试验新姿态，在确保工作空间清理干净后再在真实环境中运行。夹爪行程在 `gripper:` 下单独配置（在 B601-DM 上，`0.0` 为闭合，`-5.7` 为完全张开），而像 `greet` 使用的点头/挥手这类相对手势，则位于 `macros:` 下，作为施加到当前姿态上的关节*增量*。


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