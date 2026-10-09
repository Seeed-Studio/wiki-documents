---
description: "Seeed Physical AI Beginner's Course の第30章 — 選択科目の音声・マルチモーダルインタラクションプロジェクト：DOA 音源追跡付き reSpeaker マイクアレイと Groq Whisper 音声認識、Llama インテント理解を組み合わせて、ハードウェア配線からコマンドラインリファレンスまで、音声で reBot Arm を制御します。"
title: 第30章 - 音声とマルチモーダルインタラクション
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - reSpeaker
  - DOA
  - Whisper
  - 音声制御
  - マルチモーダル
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_30
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: Seeed Studio Robotics Team
createdAt: '2026-10-08'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_30/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 6 · 第30章 · 選択科目</span>
    <h2>30. 音声とマルチモーダルインタラクション</h2>
    <p>
      Seeed Physical AI Beginner's Course の第30章 — 選択科目の音声・マルチモーダルインタラクションプロジェクト：DOA 音源追跡付き reSpeaker マイクアレイと Groq Whisper 音声認識、Llama インテント理解を組み合わせて、ハードウェア配線からコマンドラインリファレンスまで、音声で reBot Arm を制御します。
    </p>
    <div className="hero-actions">
      <a href="#overview">章の概要</a>
      <a href="#hardware">ハードウェア</a>
      <a href="#setup">環境構築</a>
      <a href="#modes">インタラクションモード</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 30.1 章の概要

reSpeaker を使って音声で reBot Arm を制御します。本ドキュメントでは、「聞こえて動ける」インテリジェントアームシステムをゼロから段階的に構築する方法を説明します。

これは **音声駆動のインテリジェントアーム制御システム** です。

「hello」と話しかけるとアームがあなたの方を向いてうなずき、「dance」と言うと楽しそうに揺れます。部屋の反対側で手を叩くと、その音の方向を「聞き取り」、そちらを向きます。

このシステムは次の 3 つを行います：

- **聞く** — マイクアレイで音声を取得し、音の方向を推定する
- **理解する** — AI で音声認識を行い、インテントを推論する
- **動く** — アームを制御して対応する動作を実行する

このプロジェクトは、完全な「デバイス・クラウド協調 + マルチセンサーフュージョン」システムを示します：

- **エッジ（デバイス側）**: DOA 音源定位、モーション制御、アイドルアニメーション
- **クラウド**: 音声認識（Whisper）、インテント理解（Llama）

このアーキテクチャの利点：

- DOA はリアルタイムタスク（&lt; 100 ms）であり、ローカルで実行する必要がある
- 音声認識には大規模モデルが必要であり、クラウドで実行する必要がある
- モーション制御は安全ループであり、ローカルで実行する必要がある

### 2 つのインタラクションモード
| モード | 名称 | インタラクション方法 | 適用シナリオ | インターネット必須 |
| ---- | ---- | ---- | ---- | ---- |
| モード 1 | DOA 音源追跡 | 音源の方向を自動検出してそちらを向く | 展示デモ、インタラクティブインスタレーション | いいえ |
| モード 2 | 音声コマンド制御 | Enter キーを押しながら制御 | 音声アシスタント、授業デモ | はい（Groq API） |


### システムアーキテクチャ

```text
You speak / make a sound
      v
[ reSpeaker ]  4-mic array + XVF3800 chip
      v
[ Ubuntu ]  Python 3.10 main program
      v
   two paths:
   |--> DOA mode: compute sound direction locally -> turn the arm
   +--> Voice mode: upload to Groq cloud AI -> Whisper STT + Llama NLU -> control the arm
      v
[ reBot Arm ]  7-DoF arm executes
```

- レイヤードアーキテクチャ
    - **ハードウェア層**（手で触れられるデバイス）:
        - reSpeaker（XIAO ESP32S3 コントローラ付き 4 マイクアレイ）
        - reBot Arm B601-DM（6 自由度アーム + グリッパ）
        - Ubuntu 22.04 PC（メインプログラムを実行）
    - **ドライバ層**（ハードウェア同士を会話させる）:
        - USB オーディオ（pyusb / libusb）— マイクアレイを接続
        - シリアル通信（MotorBridge）— アームを接続
        - Web API（Groq Cloud）— クラウド AI サービスを接続
    - **アルゴリズム層**（データを処理する「頭脳」）:
        - DOA 音源定位（ローカル、リアルタイム）
        - Whisper 音声認識（Groq Cloud）
        - Llama-3.3 インテント理解（Groq Cloud）
        - モーション補間プランニング（ローカル、スムーズ制御）
    - **アプリケーション層**（目に見える効果）:
        - DOA 追跡モード
        - 音声制御モード
        - ブリージングアイドルアニメーション
        - 音声ブロードキャスト

<a id="hardware"></a>

## 30.2 ハードウェアの準備

### 準備するもの
| コンポーネント | 型番 | 数量 | 主な役割 | 購入推奨先 |
| ---- | ---- | ---- | ---- | ---- |
| ロボットアーム | reBot Arm B601-DM | 1 | 動作を実行する「ボディ」 | [Official Seeed Studio](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html) |
| マイクアレイ | reSpeaker XVF3800 | 1 | 音を収集し方向を検出 | [Official Seeed Studio](https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html) |
| ホスト PC | Ubuntu 22.04 PC | 1 | プログラムを実行する「頭脳」 | x86_64 アーキテクチャ |
| USB ケーブル | USB-A to USB-C | 2 | デバイス接続 | 通常はデバイスに同梱 |
| 木工用クランプ | 3 インチ以上 | 2 | ロボットアームのベース固定 | [Official Seeed Studio](https://www.seeedstudio.com/6-Inch-G-Clamp-p-6912.html)   |
| 電源 | 24V 15A（XT30 コネクタ） | 1 | ロボットアームへの給電 |  [Official Seeed Studio](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)  |


#### このハードウェアを選ぶ理由

- **reSpeaker XVF3800** は Seeed Studio と XMOS による 4 マイクアレイです：
- XVF3800 DSP チップをオンボード搭載し、DOA、エコーキャンセル、ノイズ抑制をネイティブサポート
- 追加のアルゴリズム開発は不要で、音源定位はハードウェアレベルで完結
- USB プラグアンドプレイ

**reBot Arm B601-DM** はデスクトップグレードの 7 自由度アームです：

- 7 自由度は非常に柔軟な動き（人間の腕に近い）を意味する
- B601-DM は DM モータ版（もう一方は RS サーボ版）で、DM モータは高精度
- Pinocchio 運動学ライブラリのサポートを内蔵

### ハードウェア概要

#### reSpeaker マイクアレイ

**4 マイク** 搭載のインテリジェント音声処理モジュールです：

| 特徴 | 詳細 |
| :--- | :--- |
| 分離設計 | コアボードとマイクアレイボードを分離でき、柔軟に配置可能 |
| 360° 集音 | 4 つのマイクをリング状に配置し、全方向からの音を収集 |
| オンボードインテリジェント処理 | XMOS XVF3800 チップにより、エコーキャンセル、ノイズ抑制、音源定位（DOA）を実行 |
| デュアル USB インターフェース | USB-C コネクタと PH2.0 ロック式コネクタ |
| オンボードアンプ | JST コネクタ経由で 10 W スピーカーを直接駆動 |

一言で言うと、「全方位に聞こえる耳」です — 4 つの「耳」であらゆる方向の音を聞き取り、その方向を計算しノイズを除去できます。

#### Ubuntu 22.04 PC

| 項目 | 要件 |
| :--- | :--- |
| OS | Ubuntu 22.04 LTS（64-bit） |
| アーキテクチャ | x86_64（一般的な Intel/AMD PC） |
| 最低構成 | 4 コア CPU / 8 GB RAM / 50 GB ディスク / インターネット接続 |

Windows ユーザーの選択肢：

- デュアルブート環境を構築する（推奨）
- VM を使用する（VMware；性能低下あり；本プロジェクトには非推奨）

### ハードウェア配線図

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-30/ch30-01.png" alt="Hand-eye calibration AX = XB" />
</div>


配線手順：

- reSpeaker を USB-C ケーブルで PC に接続する
- reBot Arm を USB-C ケーブルで PC に接続する
- （任意）スピーカーまたはヘッドホンを reSpeaker のオーディオ出力に接続する
- PC がオンラインであることを確認する

<a id="setup"></a>

## 30.3 環境構築

### Miniforge をインストール

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

#### システム Python ではなく Miniforge を使う理由

- **分離**: 各プロジェクトが他と独立した専用の Python 環境を持てる
- **柔軟なバージョン管理**: プロジェクトごとに特定の Python バージョン（例：3.10.2）を固定できる
- **依存関係管理**: conda が複雑なバイナリ依存関係（例：Pinocchio の C++ ライブラリ）を解決してくれる

インストーラのプロンプト：

- Enter キーを押してライセンスを表示
- `yes` と入力して同意
- Enter キーを押してインストールパスを確定（デフォルトは `~/miniforge3`）
- `yes` と入力して conda を初期化（推奨）

完了したら、ターミナルを一度閉じて開き直します：

```bash
conda --version
# expected: conda 24.x.x
```

### プロジェクトコードをクローン

```bash
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
cd reBot-Arm-reSpeaker-Flex
```

ネットワークが遅い場合はミラーを使用します：`git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git`

### Conda 環境を作成

```bash
conda env create -f environment.yml
```

これには約 10〜30 分かかり、次のことを行います：

- `flex` という名前の Python 3.10.2 環境を作成
- pinocchio、numpy、pyusb などの依存関係をインストール

成功すると次のように表示されます：

```text
Executing transaction: ... done
# To activate this environment, use
#     $ conda activate flex
```

#### pinocchio を使う理由

- Pinocchio は高速な C++ 剛体運動学ライブラリ
- 順運動学（FK）、逆運動学（IK）、ダイナミクスを提供
- 本プロジェクトのアームモーション制御の中核依存ライブラリ

### Conda 環境を有効化

```bash
conda activate flex
```

有効化に成功すると、プロンプトの前に `(flex)` が表示されます

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

新しいターミナルを開くたびに、これを再度有効化してください。

### システム依存パッケージをインストール

```bash
sudo apt-get update && sudo apt-get install -y ffmpeg
```

#### ffmpeg の役割

- ffmpeg は音声・動画処理ツールであり、本プロジェクトでは TTS 後の音声ファイルを後処理するために使用します：音声フォーマットの変換、サンプリングレートの調整、音声の結合・トリミングなど。

### uv をインストール

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### uv が必要な理由

- uv は非常に高速な Python パッケージマネージャ（pip の 10〜100 倍の速度）
- プロジェクトの `motorbridge` ライブラリは uv 経由でインストールする必要がある
- uv.lock ファイルで依存関係のバージョンを厳密に固定している

インストール後、ターミナルを一度閉じて開き直してください。

### アーム制御ライブラリをクローン

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

期待される出力：エラーのないインストール進行ログ。

### PYTHONPATH を設定

```bash
export PYTHONPATH="$PWD:$PYTHONPATH"
```

#### これは何を意味するか

- Python がライブラリを import する際、`sys.path` に含まれるパスを検索します。このコマンドは Python に対して「デフォルトの検索パスに加えて、このディレクトリも探して」と指示しています。
- ⚠ この設定はターミナルを閉じると失われます。永続化する方法：

    ```bash
    echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc
    source ~/.bashrc
    ```

#### なぜ pip install ではないのか

- `reBotArm_control_py` は開発中のライブラリであり、PyPI に公開されている安定パッケージではありません
- 編集可能インストールの方が柔軟です
- PYTHONPATH をソースディレクトリに直接向ける方法も動作します

### シリアルポートの権限を設定する

```bash
sudo chmod 666 /dev/ttyACM*
```

理由

- Linux ではハードウェアデバイスに対して厳格な権限管理が行われています。デフォルトでは一般ユーザーはシリアルデバイスに直接アクセスできません。このコマンドにより、すべてのユーザーがこれらのデバイスを読み書きできるようになります。

この設定は再起動後に失われます。永続的な方法：

```bash
sudo usermod -a -G dialout $USER
# log out and back in to take effect
```

- **原理**: `dialout` はシリアルデバイスへのアクセス権を持つ Linux グループであり、このグループに参加すると、そのグループが所有するデバイスに対する読み書き権限がユーザーに付与されます。

### Groq API キーを設定する

API キーを取得します：

- [https://console.groq.com/keys](https://console.groq.com/keys) にアクセス
- 登録 / ログイン（メールアドレスまたは GitHub アカウント）
- "Create API Key" をクリック
- キーをコピー（形式 `gsk_xxxxxxxxxxxx`）

コード内で設定します：

```bash
cd ~/reBot-Arm-reSpeaker-Flex
nano sound_tracking_arm.py
```

`VOICE_CFG` を探します：

```python
VOICE_CFG = {
    "api_key": "12345678",   # ←- replace with your API key
    ...
}
```

次のように変更します：

```python
"api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

- 保存：Ctrl O -> Enter -> Ctrl X

セキュリティに関する注意：

- 公開リポジトリで API キーを共有しないでください
- ソーシャルメディアにスクリーンショットを投稿しないでください
- 漏えいした場合は、すぐに Groq コンソールで削除して再生成してください


## 30.4 ハードウェア接続と組み立て

### ハードウェア接続

- ステップ 1: reSpeaker を接続
    - reSpeaker を USB-C ケーブルで PC に接続します
    - reSpeaker 上の LED が点灯するはずです
    - `lsusb` に Seeed Studio デバイスが表示されるはずです
- ステップ 2: reBot Arm を接続
    - アームのベースを木工用クランプでテーブルに固定します
    - アームを USB-C ケーブルで PC に接続します
    - 24 V 電源（XT30）を接続します；**まだ電源は入れないでください**
    - **通電前の安全チェックリスト：**
        - アームのベースがしっかり固定されている
        - 可動範囲内に障害物がない
        - 可動範囲の近くに人がいない
        - USB ケーブルが接続されている
        - 電源ケーブルが正しく接続されている
- ステップ 3: 電源を入れる
    - 確認後、24 V 電源をオンにします
    - アームからモーター起動時の小さな音が聞こえます
    - `ls /dev/ttyUSB*` で `/dev/ttyUSB0` が表示されるはずです

### ハードウェア接続を確認する

```bash
arecord -l
```

期待される出力: `card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]`

```bash
ls -la /dev/ttyUSB0
```

期待される出力: `crw-rw-rw- 1 root dialout ... /dev/ttyUSB0`

## 30.5 初回起動

### 起動前の確認

#### チェック 1: Python 依存関係

```bash
conda activate flex
cd ~/reBot-Arm-reSpeaker-Flex
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

期待される出力: `pyusb + numpy OK`

#### チェック 2: アームライブラリ

```bash
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

- 期待される出力: `Robot Arm Library OK`

#### チェック 3: マイク

```bash
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
aplay -D plughw:2,0 /tmp/test.wav
```

- 録音した音声が聞こえれば = マイクは正常に動作しています。

### 起動

```bash
cd ~/reBot-Arm-reSpeaker-Flex
python sound_tracking_arm.py
```

期待される出力:

```text
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

- `1` を入力: DOA 音源追跡モード
- `2` を入力: 音声制御モード

指定したモードで直接起動する：

```bash
python sound_tracking_arm.py --mode doa    # DOA mode
python sound_tracking_arm.py --mode voice  # voice mode
```

### 初回テスト

#### DOA モードテスト

- プログラム：USB を初期化 -> アームに接続 -> アイドル状態に入る
- テスト方法：アームの横に立ち、話しかけるか手を叩きます
- アームがあなたの方を向き、うなずいてからアイドル状態に戻るかどうかを観察します

#### 音声モードテスト

- Enter キーを押し、「録音中」のプロンプトが表示されることを確認します
- "hello" または "say hello" と話します
- 約 5 秒待ちます
- 音声が認識され、アームが動作を実行し、音声で応答が再生されるかどうかを観察します

---

<a id="modes"></a>

## 30.6 機能の詳細

### モード 1: DOA 音源追跡

#### DOA とは

- DOA = Direction of Arrival（到来方向）
- 音がどの方向から来ているかを推定します（人間の耳が音の方向を判断するのと同じようなイメージ）

#### ワークフロー

```text
Start the system
    v
Initialize USB device
    v
Connect reSpeaker  ←->  Connect reBot Arm
    v
Loop:
    |- Read DOA angle data (0 deg~360 deg)
    |- Is a valid sound source detected?
    |   |- No -> Breathing idle animation -> keep reading
    |   +- Yes -> 4-frame angle buffer queue -> compute weighted average angle
    |           -> cosine-similarity smoothing filter
    |           -> angle change > trigger threshold?
    |               |- No -> keep reading
    |               +- Yes -> arm turns toward the target direction
    |                       -> performs a nod
    |                       -> enters cooldown
    |                       -> keep reading
    v
Exit (Press Ctrl+C)
```

#### コアアルゴリズムの詳細

- 4 フレームの角度バッファキュー
- **問題**: 単一フレームの DOA 角度には（+/-5 度〜10 度程度の）ジッタがあり、そのままアームを駆動すると常に小刻みに揺れてしまいます。
- **解決策**: リングバッファに直近 4 フレーム分の DOA データ（約 200 ms）を保存します。

    ```text
    [diagram: ring buffer]

         new frame written
            v
      [F4] [F3] [F2] [F1]
       |              |
       +---- average --+
            v
         smoothed angle
    ```

- **4 フレームにする理由**:
    - 少なすぎる: 平滑化が不十分（ジッタがまだ目立つ）
    - 多すぎる: 応答が遅延（アームの反応が遅くなる）
    - 4 フレームは、滑らかさと応答性のバランスを取った経験的な値です

#### コサイン類似度によるスムージングフィルタ

- **問題**: マイクが方向を誤判定することがあります（突発的なノイズや反射音など）。
- **解決策**: 直近フレーム間の角度の一貫性をチェックし、差が大きすぎる場合はノイズとして扱います。

    ```python
    import numpy as np

    def is_consistent(angles, threshold_deg=30):
        """Check whether recent angles are consistent."""
        if len(angles) < 2:
            return True
        # compute angle differences between adjacent frames (handle 360 deg wrap)
        diffs = []
        for i in range(len(angles) - 1):
            diff = abs(angles[i+1] - angles[i])
            # the diff may wrap around 360; take the smaller
            diff = min(diff, 360 - diff)
            diffs.append(diff)

        # consistent only when the max diff is below the threshold
        return max(diffs) < threshold_deg
    ```

- トリガーしきい値
    - **デフォルト 15 度** の根拠:
        - 人間の耳は、音の方向をおよそ +/-10 度〜15 度の誤差で判断します
        - しきい値を耳の誤差より少し大きくすることで、わずかな変動に反応しないようにします
        - しきい値が大きすぎる -> 反応が鈍くなる
        - しきい値が小さすぎる -> 誤トリガーが頻発する

#### クールダウンの考え方（デフォルト 3 秒）

- 首振り + うなずき動作には約 2〜3 秒かかります
- クールダウン中は新しい音を無視し、動作の途中で割り込まれないようにします
- クールダウン時間は、単一動作の所要時間より少し長く設定する必要があります

#### 呼吸するようなアイドルアニメーション

- 約 4 秒周期
- 関節角度が正弦波状に +/-5 度ゆっくりと揺れます
- 視覚効果：人が呼吸しているように見えます
- システムが動作中であることを示し、ユーザーに安心感を与えます

### モード 2: 音声コマンド制御

#### 完全なインタラクションループ

- 録音 -> 認識 -> 理解 -> 実行 -> アナウンス

#### ワークフロー

```text
The user presses Enter.
    v
arecord starts recording (6 channels, 16kHz, 5 seconds)
    v
User releases Enter -> stop recording
    v
NumPy audio normalization (extract first channel + gain amplification)
    v
Upload to Groq API
    v
Whisper model performs speech-to-text (STT)
    v
Text command obtained (e.g. "turn left")
    v
Send to Llama-3.3-70B large language model
    v
LLM understands intent + outputs JSON structured result
    v
Parse result
    |- Invalid -> broadcast "Sorry, I didn't catch that. Could you please repeat?"
    +- Valid -> execute the corresponding arm action
              v
         Edge-TTS voice broadcast of the result
              v
         Return to idle
```

#### 音声処理の詳細

```python
# 6-channel capture
audio_data = arecord(... -c 6 -r 16000 ...)  # 6 channels, 16kHz
# take channel 1 (XVF3800 has already beamformed)
single_channel = audio_data[:, 0]

# normalize + gain
normalized = single_channel / np.max(np.abs(single_channel))
amplified = normalized * 0.9  # leave 10% headroom to avoid clipping
# save as WAV
scipy.io.wavfile.write("output.wav", 16000, (amplified * 32767).astype(np.int16))
```

#### 対応している音声コマンド

#### AI があなたの言葉を理解する仕組み

- プロンプトエンジニアリングを使用し、AI に詳細な指示テンプレートを与えます：
- どのアクションを実行できるか
- 各アクションの意味

#### 必要な出力形式（JSON）

- 例えば、「左に頭を向けるのを手伝って」といった発話は次のように解析されます：

    ```json
    {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
    ```

**利点**: 固定のコマンドワードは不要で、会話するように自然に話すだけで構いません。

- プロンプト設計の例

    ```python
    SYSTEM_PROMPT = """
    You are a robotic arm voice-control assistant. The user will say what they want the arm to do.
    Choose the best-matching action from the list below and output it as JSON:

    Available actions:
    - turn_left: turn left, param angle (default 45)
    - turn_right: turn right, param angle (default 45)
    - say_hello: greet, nod twice in a row
    - wave: wave, sway left and right twice
    - reset: return to initial position
    - stop: stop immediately

    Output format (strict JSON):
    {"action": "<action_name>", "params": {<params>}, "reply": "<voice reply to user>"}

    Do not output anything else; output only JSON.
    """
    ```

## 30.7 コマンドライン引数

### 引数の全一覧表

```bash
python sound_tracking_arm.py [arguments]
```

### 使用例

#### 基本的な使い方

```bash
python sound_tracking_arm.py                    # DOA tracking mode (default)
python sound_tracking_arm.py --mode voice       # voice control mode
```

#### DOA 感度の調整

```bash
# raise the trigger threshold (larger angle change needed, fewer false triggers)
python sound_tracking_arm.py --threshold 25

# lower the trigger threshold (more sensitive, but more false triggers)
python sound_tracking_arm.py --threshold 10

# extend cooldown
python sound_tracking_arm.py --cooldown 5

# adjust multiple at once
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

#### ハードウェアデバイスの指定

```bash
# arm on a different serial port
python sound_tracking_arm.py --port /dev/ttyACM0

# pass the API key on the command line (overrides code config)
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

#### TTS 音声の切り替え

```bash
# Chinese male voice (Yunjian)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# Chinese female voice (Xiaoxiao, default)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# Chinese female voice (Xiaoxiao, multilingual, multi-emotion)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

- デバッグを有効化

    ```bash
    python sound_tracking_arm.py --debug
    ```

---

> （注：部分内容由豆包工作 AI 生成）

</div>
