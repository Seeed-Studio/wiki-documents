---
description: reSpeaker Clip を介して BLE RTC 経由で reBot Arm B601-DM を音声コマンド制御します。Opus オーディオをストリーミングおよびデコードし、WebRTC VAD で音声区間を抽出したうえで、Groq Whisper STT と LLM ベースのインテントパーサーを使ってアームの関節とグリッパーを駆動します — すべて Ubuntu 22.04 上で `pip` だけでインストール可能です。
title: reSpeaker Clip を使って音声で reBot Arm を制御する
keywords:
  - reSpeaker Clip
  - reBot Arm
  - B601-DM
  - 音声制御
  - BLE RTC
  - Groq
  - Whisper
  - STT
  - インテント認識
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
url: https://wiki.seeedstudio.com/ja/control_rebot_arm_using_voice_with_respeaker_clip/
---

# reSpeaker Clip を使って音声で reBot Arm を制御する

`rebot-clip` を使うと、reSpeaker Clip を介して reBot Arm B601-DM に音声コマンドを送り、自然な発話を物理的な動きに変換できます。Clip は BLE RTC 経由で Opus オーディオをストリーミングし、アプリ側でそれをデコードして WebRTC/エネルギーベースの音声区間検出を実行し、その後 Groq の Whisper STT と LLM インテントパーサーが各発話をあいさつ、回転、原点復帰、グリッパーの開閉といった固定アクションに変換します。Ubuntu 22.04 上で完全に `pip` だけでインストール可能で、conda は不要です。また、pinocchio/motorbridge のホイールやシリアルポートが利用できない場合は、自動的にシミュレーションアームにフォールバックします。


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

## 必要なハードウェア

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
                今すぐ入手 🖱️
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
                今すぐ入手 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>

## 前提条件

:::tip
始める前に、まず以下の 2 つのガイドを読んでください。このプロジェクトは reBot Arm のセットアップと reSpeaker Clip の RTC ストリーミングワークフローの上に直接構築されているため、事前に完了しておくことで多くのトラブルシューティング時間を節約できます。

- [reBot Arm B601-DM Getting Started](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) — アームを組み立て、モーター ID をリセットし、キャリブレーションを行い、シリアル経由で到達可能であることを確認します。
- [Build Real-Time Audio Streaming with reSpeaker Clip RTC SDK](https://wiki.seeedstudio.com/ja/respeaker_clip_rtc_streaming/) — Clip をペアリングし、RTC セッションを確立し、ライブオーディオストリームをデコードします。
- **Groq API キー** — 音声認識（Whisper）とアクションインテント理解（LLM）に必要です。[console.groq.com/keys](https://console.groq.com/keys) で無料で作成できます。セットアップ中に `.env` ファイルへ追加します。
:::

## リポジトリをクローンする

```bash
git clone https://github.com/KasunThushara/reSpeaker-Clip-rebot-ARM.git
cd reSpeaker-Clip-rebot-ARM
```

### プロジェクト構成

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

## インストール

```bash
cd reSpeaker-Clip-rebot-ARM
python3.10 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env           # then paste your GROQ_API_KEY
```

:::tip
もし `python3.10 -m venv` が失敗する場合（例：`ensurepip is not available`）、`python3.10-venv` の apt パッケージをインストールするか、既存の Python 3.10 環境を `pip` とともに再利用してください。
:::

アームレイヤーにはバイナリホイールとして提供される `pin`（pinocchio）と `motorbridge` が必要です。これら（またはシリアルポート）が存在しない場合でも、rebot-clip は**自動的にシミュレーションにフォールバック**するため、音声パイプラインはノート PC 上でそのまま動作します。

## クイックスタート

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

## Web UI（スキャン · 接続 · RTC + VAD）

Clip をスキャンし、使いたいものに接続し、RTC ストリームを開始してライブ VAD、文字起こし、検出されたアクションを確認するための小さなローカル Web アプリです。

```bash
source .venv/bin/activate
python -m rebotclip --web                      # http://127.0.0.1:8000
python -m rebotclip --web --host 0.0.0.0 --port 8000   # expose on your LAN
```

次に **http://127.0.0.1:8000**（または `0.0.0.0` にバインドした場合は `http://<pc-ip>:8000`）を開き、以下を行います：

1. **Scan devices** → ドロップダウンから `Clip XXXX` を選択 → **Connect**。
2. **Start RTC** → 話しかけます。VAD メーター、ライブ文字起こし、検出された **action** バッジと応答を確認します。（または **Demo (no Clip)** にチェックを入れて、ハードウェアなしで同梱の音声を再生します。）
3. **VAD** をライブ調整：WebRTC の aggressiveness、エネルギーしきい値、**min level**（絶対 dBFS ゲート）、マイクゲインに加え、**Normal/Strict プリセット** と **Recalibrate noise**（部屋が静かなときに実行）があります。
4. **Arm mode** トグル — `Off`（インテント表示のみ、デフォルト）、`Sim`（シミュレーション動作、ログ出力）、`Real`（実機アームを動かす）。

CLI オプション：`--web --host --port`、`--no-classify`（文字起こしのみで LLM アクションなし）、`--execute off|sim|real`（起動時のアームモード）。

## ハードウェア立ち上げ

1. Clip（BLE）とアームの USB シリアルを PC に接続します。
2. 自分のユーザーにシリアルアクセス権を与えます：
   ```bash
   sudo usermod -a -G dialout $USER    # then log out/in
   ls /dev/ttyACM*                     # should list the arm
   ```
3. ハンズフリーで使う前に、`config/coordinates.yaml` を**キャリブレーション**します（`reach_front`/`present` はプレースホルダーです）し、ジョイントマクロを確認します。
4. 作業スペースを片付けておきます。Ctrl+C でアプリを終了すると、アームは安全な `standby` 姿勢に戻ります（`AUTO_HOME_ON_EXIT=0` でスキップ可能）。

## カスタム位置の追加（座標マップ）

すべての名前付きアームターゲットは、`poses:` キーの下にある **`config/coordinates.yaml`** に定義されています。ポーズには 2 種類あり、**ジョイント空間**ポーズ（`kind: joints`）は 6 つのアーム関節角度をラジアンで表したリスト `[J1, J2, J3, J4, J5, J6]`、**IK** ポーズ（`kind: ik`）はエンドエフェクタのターゲット `[x, y, z, roll, pitch, yaw]`（メートル/ラジアン）で、逆運動学で解かれます。座標系の原点は J1 の真下の取り付け面上にあり、`+x` は前方（ベースから離れる方向）、`+y` は左、`+z` は上向きです。ジョイントターゲットは自動的に URDF の制限にクリップされ、IK がターゲットに到達できない場合は移動せずにエラーを返すため、範囲外の値であっても破損ではなく安全側に倒れます。

新しい位置を追加するには、`poses:` の下にエントリを追加し、計測した内容に合う種類を選びます — たとえばジョイント空間のピックアップポーズと IK のドロップポーズなどです：

```yaml
poses:
  pick_left:
    kind: joints
    joints: [0.6, -0.9, -0.8, 0.0, 0.2, 0.0]   # radians

  drop_front:
    kind: ik
    pose: [0.32, 0.10, 0.20, 0.0, -0.7, 0.0]   # x,y,z,roll,pitch,yaw
```

音声や LLM を介さずにポーズをテストすることもできます。`python examples/arm_smoke.py --pose drop_front` は（シミュレーションでは）移動内容を表示し、`--real` を付けると実機でその動作を行います。また、`python examples/intent_pose_check.py` はポーズマップを一覧表示し、各アクションに対して指令される座標を示します。Python からは、`rebotclip.arm` の `move_to_named_pose(arm, "drop_front")` を直接呼び出してください。

名前付きポーズが**音声コマンド**になるのは、それがアクションとしても登録されている場合だけです。そのためには 2 つの小さな編集が必要です。`config/commands.yaml` にアクションを追加します（名前、説明、例文 — これが LLM プロンプトを構成します）、そして `rebotclip/arm/actions.py` に executor を追加します。例えば「pick from the left」を動作させるには、`commands.yaml` に次のように追加します：

```yaml
actions:
  pick_left:
    description: "move to the left pickup position"
    examples: ["pick from the left", "go to the left pickup", "grab on the left"]
```

次に、`actions.py` に executor を追加して登録します：

```python
def _exec_pick_left(arm: ArmWrapper) -> str:
    return move_to_named_pose(arm, "pick_left")

EXECUTORS = {
    # ...existing entries...
    "pick_left": _exec_pick_left,
}
```

アプリを再起動すると、新しいコマンドはすぐに認識されます。インテントプロンプトは `commands.yaml` から生成されるため、他に変更は必要ありません。

キャリブレーションを行うには、目的の姿勢までアームを動かす（または vendored の `example/7_arm_ik_control.py` から `state` / `end_state` で現在値を読み取る）ことで、関節または IK の値を確認し、それらを `coordinates.yaml` に貼り付けます。ターゲットは到達可能な作業空間内に収め、ベースやテーブルから離して自己干渉を避け、まずは控えめな値を優先し、実機で動かす前に必ず `--sim` で新しいポーズを試し、作業空間をクリアにしてください。グリッパの移動量は `gripper:` の下で個別に設定します（B601-DM では `0.0` が閉、`-5.7` が全開）、`greet` が使ううなずき／手振りのような相対ジェスチャは、現在の姿勢に対して適用される関節の*差分*として `macros:` の下に定義されています。


## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>