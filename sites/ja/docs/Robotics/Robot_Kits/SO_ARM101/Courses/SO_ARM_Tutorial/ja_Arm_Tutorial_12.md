---
description: "SO-ARM Physical AI ビギナーコース第 12 章 — 前面と側面カメラの接続と確認、画像とアクションの同期の理解、lerobot-record による最初の LeRobot データセットの録画と、録画中のキーボード操作。"
title: 第 12 章 - カメラ設定と LeRobot データ収集
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - カメラ
  - データセット
  - 録画
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_12
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 12 章 · 実践</span>
    <h2>12. カメラ設定と LeRobot データ収集</h2>
    <p>
      前面と側面カメラの接続と確認、画像とアクションの同期の理解、lerobot-record による最初の LeRobot データセットの録画と、録画中のキーボード操作を習得します。
    </p>
    <div className="hero-actions">
      <a href="#cameras">カメラ</a>
      <a href="#sync">同期</a>
      <a href="#record">録画</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ コード不要 · 環境構築不要</span>
    <p className="sensecraft-banner__title">セットアップをスキップして — reBot Arm と LeRobot を 1 つのアプリから実行</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics は、SO-ARM101、reBot Arm 102 + B601-RS および B601-DM 向けの Seeed のノーコードプラットフォームです。アームを接続し、キャリブレーションを行い、デモを収集し、ガイド付きインターフェースから学習と推論を実行できます — Python 環境もターミナルも不要です。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 ステップのガイド付きワークフロー</li>
      <li>✅ クラウド学習 — ローカル GPU 不要</li>
      <li>✅ Windows / macOS クライアント</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">SenseCraft Robotics へ移動 ↗</a>
    <a className="sensecraft-banner__link" href="/ja/sensecraft_robotics/">ソフトウェアガイド</a>
  </div>
</div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>
      アーム作業領域 1 メートル以内の貴重品と無関係な人を片付けてください。本章の実行前に、アームが確実に固定され、電源とケーブルが正しく接続されていることを確認します。
    </p>
  </div>
</div>

## 12.1 単眼カメラ vs. 双眼カメラ構成

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>レイアウト</span>
    <h2>12.1 単眼カメラ vs. 双眼カメラ構成</h2>
  </div>

本コースのデータ収集とモデル訓練には 2 台のカメラ・2 視点が必要です。設置位置による代表的な構成は 2 つ：

| レイアウト | 設置と用途 | 適するシナリオ |
|:---|:---|:---|
| **グリッパ視点** | 上面カメラを作業台前方上に設置し作業域をカバー。グリッパカメラをグリッパ近くに設置し把持の詳細を観察 | グリッパと物体の接触を見る精密作業 |
| **側面補助** | 上面カメラを作業台前方上に設置。側面カメラを作業台前側に設置し、アーム高さとグリッパ動作を観察 | 把持・搬送・配置系タスク |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp" alt="側面補助カメラレイアウト" />
</div>

本コースは**側面補助レイアウト**（前面カメラ + 側面カメラ）を使います。第 22 章のノーコードフローも同じ構成です。

</section>

## 12.2 カメラデバイス名の確認

<section id="find-cameras" className="section-card">
  <div className="section-title">
    <span>検出</span>
    <h2>12.2 カメラデバイス名の確認</h2>
  </div>

カメラのインデックスは再起動や挿し直しで変わることがあります — 主に OS 依存の動作です。録画セッション前に毎回検出しましょう：

```bash
lerobot-find-cameras opencv
```

端末には次のような情報が出ます：

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

各カメラが撮影した画像は `outputs/captured_images` ディレクトリにあります — 開いてどのインデックスが前面でどちらが側面か確認してください。

:::tip
USB カメラをハブ経由で接続しないでください。直結、できれば USB 3.0 ポートに — 画像伝送帯域を確保できます。
:::

</section>

## 12.3 テレオペレーションでカメラを確認

<section id="teleop-cameras" className="section-card">
  <div className="section-title">
    <span>プレビュー</span>
    <h2>12.3 テレオペレーションでカメラを確認</h2>
  </div>

録画前に、カメラ表示を有効にしたテレオペレーションで、両視点がライブで正しくフレーミングされているか確認します：

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

`index_or_path` の値は `lerobot-find-cameras opencv` が出力したカメラ ID の末尾数字です。

:::tip
`fourcc: "MJPG"` は圧縮フレームを要求します。MJPG では 3 台 1920×1080 @ 30FPS に対応します。`YUYV` は非圧縮 — 利用可能な解像度と fps が下がり、アーム操作がカクつくことがあります。2 台のカメラを同じ USB ハブに接続しないでください。
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.4 オプション：深度カメラ（RealSense / Orbbec）

<section id="depth-cameras" className="section-card">
  <div className="section-title">
    <span>オプション</span>
    <h2>12.4 オプション：深度カメラ（RealSense / Orbbec）</h2>
  </div>

<Tabs defaultValue="realsense">

<TabItem value="realsense" label="RealSense D435i / D405">

RealSense 深度カメラは RGB-D センシングを提供し、物体認識や近接操作に使えます。推奨は **D405**（短距離ステレオ深度、動作範囲 7〜50 cm、テーブルトップ操作に最適）と **D435i**（深度 + RGB + IMU）です。

**1. カメラブランチに切り替え** — 深度カメラ対応は `DepthCameraSupport` ブランチにあります：

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
git branch --show-current   # 期待値: DepthCameraSupport
```

**2. RealSense エクストラを編集可能モードでインストール：**

```bash
pip install -e ".[realsense]"
```

**3. 権限付与と検出：**

```bash
chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense
```

**4. 例：** D435i のカラー + 深度ペアでテレオペレーション（`serial_number_or_name` は検出結果のシリアル番号）：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, color_stream_format: rgb8,
      rotation: 0, warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      max_depth_m: 2.0, depth_alpha: 0.2,
      rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

**パラメータの要点**：`depth_alpha` は深度画像のスケール（0.2 から開始）。深度カメラ 3 台以上では `fps` を 15 に下げ推奨。安定性のため 640×480 を維持。

</TabItem>

<TabItem value="orbbec" label="Orbbec Gemini 2 / Gemini 336">

[Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) は同期 RGB と深度ストリームを提供する高性能 RGB-D カメラ。Gemini 336 は反射の強い・暗い室内で深度品質が向上しています。

**1. カメラブランチへ切り替え：**

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

**2. Orbbec エクストラをインストール：**

```bash
pip install -e ".[orbbec]"
```

**3. 権限と USBFS キャッシュ**（デフォルトの 16MB は深度ストリームに不足）：

```bash
chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb                 # 確認
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'  # 128MB へ引き上げ
```

**4. カメラ検出**とシリアル番号の控え：

```bash
lerobot-find-cameras orbbec
```

**5. 例：** 1 台の Orbbec カラー + 深度ペアでテレオペレーション：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, rotation: 0, warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 400, fps: 30,
      depth_alpha: 0.2, rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

:::tip
1 台の Orbbec は 3 つの連続する `/dev/video` 番号を占有します。通常の USB カメラと混在させる場合は、Orbbec を先に、通常カメラを後に挿して番号を後ろに寄せてください。フレームタイムアウト（`Timed out waiting for frame ...`）時はカメラを挿し直してください。
:::

</TabItem>

</Tabs>

</section>

## 12.5 画像とアクションの同期

<section id="sync" className="section-card">
  <div className="section-title">
    <span>同期</span>
    <h2>12.5 画像とアクションの同期</h2>
  </div>

録画中、LeRobot はフレームごとに 1 つの制御ループを実行します：

- 両カメラ（前面・側面）を読む；
- リーダー関節を読む → アクション；
- フォロワー関節を読む → 状態；
- タイムスタンプを打ち 1 行追記。

カメラは自分のペースでフレームを出すため、ループは**タイムスタンプで整列**します（願望ではなく）：データセットの各行は、最新のカメラ画像と同一瞬間の関節データを組み合わせます。だからこそ `--dataset.fps` はカメラが安定して供給できる範囲を超えてはいけません（640×480 MJPG で 30 fps が安全な選択です）。

</section>

## 12.6 最初のデータセットを録画

<section id="record" className="section-card">
  <div className="section-title">
    <span>録画</span>
    <h2>12.6 最初のデータセットを録画</h2>
  </div>

第 11 章のタスク（A から B へのピック＆プレース）をローカルに録画します：

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

`repo_id` は自由に変更できます。`push_to_hub=false` ならデータセットは `~/.cache/huggingface/lerobot/seeedstudio123/test/` に保存されます。

### 録画パラメータ

| パラメータ | 説明 | デフォルト |
|-----------|-------------|---------|
| `--dataset.episode_time_s` | 1 Episode の長さ（秒） | 60 |
| `--dataset.reset_time_s` | Episode 後の環境リセット時間（秒） | 60 |
| `--dataset.num_episodes` | 録画する総 Episode 数 | 50 |

### 録画中のキーボード操作

| キー | 動作 |
|-----|--------|
| →（右矢印） | 現 Episode を早期終了／リセット。次へ |
| ←（左矢印） | 現 Episode をキャンセルし撮り直し |
| ESC | セッション即時停止、動画をエンコードしデータセット保存 |

:::tip
ショートカットが応答しない場合、まず `$DISPLAY` が設定されているか確認、または pynput をダウングレード：`pip install pynput==1.6.8`
:::

録画中は次のような統計行が流れます：

```text
INFO ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

`dt` が 33 ms 付近なら、ループは 30 Hz を維持しています — 健全なセッションです。

### チェックポイントと再開

- 録画中はチェックポイントが自動作成されます；
- 中断後に再開するには、同じコマンドに `--resume=true` を追加；
- **その場合 `--dataset.num_episodes` は今回録る本数**であり総合計ではない — 15 録画済み・目標 50 なら 35 を設定；
- ゼロからやり直すには、データセットディレクトリを手動で削除します。

### Hugging Face Hub への録画（任意）

[HF 設定](https://huggingface.co/settings/tokens)で書き込み権限トークンを作り、一度ログインします：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
```

`--dataset.repo_id=${HF_USER}/record-test` と `--dataset.push_to_hub=true` にすればデータセットを公開できます。

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.7 良いデータを採るコツ

<section id="tips" className="section-card">
  <div className="section-title">
    <span>品質</span>
    <h2>12.7 良いデータを採るコツ</h2>
  </div>

- **タスク**：第 11 章の十字マークの各点から物体をつかんで B 点へ置く；
- **規模**：50 Episode 以上（各点 10 Episode）；
- **一貫性**：
  - カメラは固定；
  - 把持動作を同一に保つ；
  - 操作対象が両カメラ映像に映っていることを確認；
- **段階的進行**：まず確実な把持を完成させてから変化（新位置・手法・カメラ調整）を加える。複雑さを急激に上げない；
- **環境**：カメラの位置・角度・環境光を安定させ、不安定な背景や人が映り込むのを避ける — 採集環境と展開環境の差が大きいとポリシーは失敗しやすくなります。

💡 **経験則**：カメラ画像だけを見て自分でタスクを遂行できるはずです。あなたにできないなら、モデルにもできません。

開始前に `--dataset.num_episodes` を十分大きく設定し、必要以上に途中で止めない — データセット統計量（平均・分散）は採集完了後に計算され、訓練に必要です。

</section>

</div>
