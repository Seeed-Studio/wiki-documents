---
description: reSpeaker XVF3800 と Groq AI を使用して、音声コマンドをリアルタイムのロボット移動、回転動作、および音声フィードバックに変換する、音声制御 ROS2 TurtleSim プロジェクト。

title: reSpeaker XVF3800 上の ROS2 音声パイプライン
keywords:
  - reSpeaker
  - ロボティクス
  - ROS2
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/ros2_voice.png
slug: /respeaker_xvf3800_ros2_voice_pipeline
sku: 114993700, 101991441, 114993701
last_update:
  date: 5/25/2026
  author: Kasun Thushara
createdAt: '2026-05-25'
updatedAt: '2026-05-25'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_ros2_voice_pipeline/
---

## はじめに

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/ros2_voice.png" alt="pir" width={800} height="auto" /></p>

このプロジェクトでは、reSpeaker XVF3800 マイクアレイと ROS2 を使って、あなたの声で TurtleSim を操作できるようにします。「Hey Jarvis」と呼びかけてからコマンドを話すと、Jarvis が音声を録音し、Groq Whisper で文字起こしし、Groq LLaMA で意図を解釈し、Groq Orpheus TTS で応答を話します。前進・後退、角度指定の回転、DoA に基づく方向向き、即時停止コマンドをサポートします。このシステムは、ウェイクワード検出、音声取得、ROS2 トピック、シミュレータへのコマンド送信を 1 つのシームレスなパイプラインに統合しています。Ubuntu と ROS2 Humble で素早くセットアップできるよう設計されており、音声駆動ロボットの実験を簡単に実行できます。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## パート 1 — ROS2 Humble をインストールする

> すでにマシンに ROS2 Humble がインストールされている場合は、このパートをスキップしてください。
> 次を実行して確認します: `ros2 --version`

**1.1 ROS2 の apt リポジトリを設定する**

```bash
# Make sure your system is up to date
sudo apt update && sudo apt upgrade -y

# Install required tools
sudo apt install -y software-properties-common curl

# Add the ROS2 GPG key
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \
    -o /usr/share/keyrings/ros-archive-keyring.gpg

# Add the ROS2 repository to your sources
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] \
    http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" \
    | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

**1.2 ROS2 Humble Desktop をインストールする**

```bash
sudo apt update
sudo apt install -y ros-humble-desktop
```

> `desktop` バリアントには、TurtleSim、RViz、および必要なすべてのツールが含まれています。
> ダウンロードサイズは約 1 GB です — 数分かかる場合があります。

**1.3 ビルドツールをインストールする**

```bash
sudo apt install -y python3-colcon-common-extensions python3-rosdep
```

**1.4 すべてのターミナルで自動的に ROS2 を source する**

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

**1.5 インストールを確認する**

```bash
ros2 --version
# Expected output: ros2 cli    version 0.18.x (or similar)
```

次に TurtleSim をテストして、すべてが動作することを確認します:

```bash
# Terminal 1
ros2 run turtlesim turtlesim_node

# Terminal 2
ros2 run turtlesim turtle_teleop_key
```

矢印キーで操作できるカメのウィンドウが表示されるはずです。終了するときは、両方のターミナルで `Ctrl+C` を押してください。

## パート 2 — デバイス用の udev ルールを作成する

ReSpeaker USB Mic Array に適切な権限を与えるため、新しい udev ルールを作成します:

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

ファイルに次の行を追加します:

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

udev ルールを再読み込みし、サービスを再起動する

変更を反映させるために、udev ルールを再読み込みし、サービスを再起動します:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

新しいルールを適用するために、reSpeaker USB Mic Array を一度抜き差ししてください。

---

## パート 3 — Groq API キーを取得する

このプロジェクトでは、Groq の無料クラウド API を次の用途で使用します:
- **Whisper** — 音声からテキストへの変換
- **LLaMA 3** — コマンド内容の理解
- **Orpheus** — Jarvis の音声応答

1. [console.groq.com](https://console.groq.com) にアクセスし、無料アカウントを作成します
2. 左側のサイドバーで **API Keys** をクリックします
3. **Create API Key** をクリックし、名前（例: "jarvis"）を付けてコピーします
4. どこか安全な場所に保存しておきます — このあと `config.env` に貼り付けます

> Groq の無料枠は、開発とテストには十分な量が用意されています。
> 利用開始にクレジットカードは不要です。

---

## パート 4 — Python 依存パッケージを（システム全体に）インストールする

> **重要:** このプロジェクトでは仮想環境を使用しないでください。
> ROS2 はシステムの Python を使用し、venv 内にインストールされたパッケージは認識できません。
> すべてのパッケージを ROS2 ノードから利用できるようにするため、`--break-system-packages` を付けてインストールします。

```bash
pip install \
    groq \
    openwakeword \
    pyaudio \
    numpy<2 \
    python-dotenv \
    pyusb \
```

**「Hey Jarvis」ウェイクワードモデルをダウンロードする**

```bash
python3 -c "import openwakeword; openwakeword.utils.download_models()"
```

これにより、事前学習済みモデルが `~/.openwakeword/` にダウンロードされます。約 30 秒かかります。

**PortAudio をインストールする（PyAudio に必須）**

```bash
sudo apt install -y portaudio19-dev python3-pyaudio
```

---

## パート 5 — ROS2 ワークスペースを作成する

> すでに `~/ros2_ws` ワークスペースがある場合は、パート 6 に進んでください。

```bash
# Create the workspace directory
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws

# Build the empty workspace to set it up
colcon build

# Source it and add to .bashrc so it loads automatically
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

---

## パート 6 — プロジェクトをクローンして設定する

**6.1 リポジトリをクローンする**

```bash
cd ~/ros2_ws/src
git clone https://github.com/KasunThushara/ros_voice_controller.git my_robot_controller
```

> あなたのワークスペースは次のようになっているはずです:
> ```
> ~/ros2_ws/
> └── src/
>     └── my_robot_controller/
>         ├── my_robot_controller/
>         │   ├── voice_node.py
>         │   ├── rotate_doa.py
>         │   ├── wakeword.py
>         │   └── ...
>         ├── launch/
>         │   └── jarvis.launch.py
>         └── config.env.example
> ```

**6.2 設定ファイルを作成する**

```bash
cd ~/ros2_ws/src/my_robot_controller
cp config.env.example config.env
nano config.env
```

ファイルを開き、各値を入力します:

```env
# ── Groq API (required) ────────────────────────────────
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ← paste your key here

# ── Microphone ─────────────────────────────────────────
MIC_INDEX=1          ← find the correct number in Step 6.3 below
WAKEWORD_THRESHOLD=0.5
WAKEWORD_COOLDOWN=2

# ── Recording ──────────────────────────────────────────
RECORDING_SECONDS=4
SAMPLE_RATE=16000

# ── Models ─────────────────────────────────────────────
WAKEWORD_MODEL=hey jarvis
LLM_MODEL=llama-3.1-8b-instant
STT_MODEL=whisper-large-v3-turbo
TTS_MODEL=canopylabs/orpheus-v1-english
TTS_VOICE=autumn
```

`Ctrl+O`、`Enter`、`Ctrl+X` で保存します。

**6.3 正しい MIC_INDEX を見つける**

すべての音声入力デバイスを一覧表示するヘルパーを実行します:

```bash
python3 -c "
import pyaudio
p = pyaudio.PyAudio()
print('\nAvailable INPUT devices:\n')
for i in range(p.get_device_count()):
    d = p.get_device_info_by_index(i)
    if d['maxInputChannels'] > 0:
        print(f'  [{i}]  {d[\"name\"]}')
        print(f'        channels={int(d[\"maxInputChannels\"])}  rate={int(d[\"defaultSampleRate\"])}Hz')
p.terminate()
"
```

出力例:

```
Available INPUT devices:

  [0]  HDA Intel PCH: ALC897 Analog
        channels=2  rate=44100Hz

  [1]  reSpeaker XVF3800
        channels=6  rate=16000Hz    ← this is the one you want

  [2]  USB PnP Sound Device
        channels=2  rate=16000Hz
```

**reSpeaker** または **XVF3800** と表示されている行を探します。角括弧内の数字があなたの `MIC_INDEX` です。その数字で `config.env` を更新してください。

---

## パート 7 — パッケージをビルドする

```bash
cd ~/ros2_ws
colcon build --packages-select my_robot_controller
source ~/.bashrc
```

期待される出力:

```
Starting >>> my_robot_controller
Finished <<< my_robot_controller [3.2s]

Summary: 1 package finished [3.5s]
```

>  Python ファイルを変更するたびに、`colcon build` と `source ~/.bashrc` を実行する必要があります。

---

## パート 8 — プロジェクトを実行する

```bash
ros2 launch my_robot_controller jarvis.launch.py
```

次の 3 つのプロセスが起動するはずです:

```
[turtlesim_node-1]   [INFO] Spawning turtle [turtle1] at x=[5.54], y=[5.54]
[angle_controller-2] [INFO] AngleController ready — listening on /target_angle
[voice_command-3]    [INFO] reSpeaker XVF3800 found — DoA ready
[voice_command-3]    [WakeWord] Listening on device 1 (6ch → mono) for 'hey jarvis' ...
[voice_command-3]    [INFO] Jarvis is listening ...
```

カメが表示されたウィンドウが開きます。次のように話しかけてください:

> **"Hey Jarvis, move forward"**

Jarvis が「Moving forward!」と応答し、カメが前進します。 

---

## 音声コマンドリファレンス

| このように話す | 何が起こるか |
|---|---|
| `"Hey Jarvis, move forward"` | カメが 1 ステップ前進する |
| `"Hey Jarvis, move backward"` | カメが 1 ステップ後退する |
| `"Hey Jarvis, turn left"` | カメが左に 90° 回転する |
| `"Hey Jarvis, turn left 45"` | カメが左に 45° 回転する |
| `"Hey Jarvis, turn right"` | カメが右に 90° 回転する |
| `"Hey Jarvis, turn right 30 degrees"` | カメが右に 30° 回転する |
| `"Hey Jarvis, turn to my direction"` | カメがあなたの声の方向（DoA）を向く |
| `"Hey Jarvis, face me"` | 上と同じ |
| `"Hey Jarvis, turn to 90"` | カメが絶対 90° の向きに回転する |
| `"Hey Jarvis, face 180 degrees"` | カメが絶対 180° の向きに回転する |
| `"Hey Jarvis, spin around"` | カメが 360° のスピンを 1 回行う |
| `"Hey Jarvis, do a 360"` | 上と同じ |
| `"Hey Jarvis, stop"` | カメが即座に停止する |

---

## プロジェクトファイル構成

```
my_robot_controller/
│
├── my_robot_controller/          # Python package (ROS2 nodes)
│   ├── __init__.py
│   ├── voice_node.py             # Main voice pipeline node
│   ├── rotate_doa.py             # PID angle controller node
│   ├── wakeword.py               # Wake word detection (openwakeword)
│   ├── audio_recorder.py         # Mic recording after wake word
│   ├── stt.py                    # Speech-to-text (Groq Whisper)
│   ├── llm.py                    # Intent parsing (Groq LLaMA)
│   ├── tts.py                    # Text-to-speech (Groq Orpheus)
│   └── config.py                 # Loads settings from config.env
│
├── launch/
│   └── jarvis.launch.py          # Starts all 3 nodes together
│
├── config.env                    # Your secrets (not in git)
├── config.env.example            # Template — copy to config.env
├── package.xml
└── setup.py
```

### ノード同士の接続方法

```
reSpeaker XVF3800 (USB)
        │
        ├── [voice_command node]
        │     openwakeword → Groq Whisper → Groq LLaMA → Groq Orpheus
        │     │                                          │
        │     │ publishes /target_angle (Float32)        │ speaks reply
        │     │ publishes /turtle1/cmd_vel (Twist)       │
        │     │                                          ▼
        │     ▼                                     Speaker output
        └── [angle_controller node]
              subscribes /target_angle
              subscribes /turtle1/pose
              PID control → publishes /turtle1/cmd_vel
                                        │
                                        ▼
                              [turtlesim_node]
```

---

## 設定リファレンス

すべての設定は `config.env` にあります。編集して再ビルドすると変更が反映されます。

| 変数 | デフォルト | 説明 |
|---|---|---|
| `GROQ_API_KEY` | *(required)* | Groq の API キー |
| `MIC_INDEX` | `1` | reSpeaker の PyAudio デバイスインデックス |
| `WAKEWORD_MODEL` | `hey jarvis` | ウェイクワードのフレーズ |
| `WAKEWORD_THRESHOLD` | `0.5` | 検出感度 (0.0–1.0、値が小さいほど高感度) |
| `WAKEWORD_COOLDOWN` | `2` | ウェイクワードが再度トリガーされるまでの秒数 |
| `RECORDING_SECONDS` | `4` | ウェイクワード検出後に録音する時間（秒） |
| `SAMPLE_RATE` | `16000` | オーディオサンプリングレート (Hz) |
| `LLM_MODEL` | `llama-3.1-8b-instant` | インテント解析用の Groq LLM モデル |
| `STT_MODEL` | `whisper-large-v3-turbo` | 文字起こし用の Groq Whisper モデル |
| `TTS_MODEL` | `canopylabs/orpheus-v1-english` | Groq TTS モデル |
| `TTS_VOICE` | `autumn` | 音声出力に使用するボイス (`tara`, `leah`, `leo`, `dan`, `mia`) |

---


## リソース

使用コンポーネント：
- [Seeed Studio reSpeaker XVF3800](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/) — XMOS XVF3800 を搭載したマイクアレイ
- [ROS2 Humble](https://docs.ros.org/en/humble/) — ロボット用ミドルウェア
- [openwakeword](https://github.com/dscripka/openWakeWord) — ローカルウェイクワード検出
- [Groq](https://groq.com/) — 超高速 Whisper STT、LLaMA LLM、Orpheus TTS
- [TurtleSim](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html) — ROS2 タートルシミュレータ


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
