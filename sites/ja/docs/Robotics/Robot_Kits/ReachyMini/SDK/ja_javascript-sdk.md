---
description: Reachy Mini 向けの JavaScript SDK と Web アプリの完全ガイド。WebRTC と Hugging Face Spaces を用いた、インストール不要のブラウザベースロボット制御を実現します。
title: JavaScript SDK と Web アプリ
slug: /reachymini_sdk_javascript-sdk
keywords:
  - javascript
  - web apps
  - webrtc
  - browser control
  - hugging face spaces
  - static apps
  - zero install
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_javascript-sdk/
---

# JavaScript SDK と Web アプリ

Reachy Mini は、ブラウザ内だけで完結して動作する **完全な JavaScript 製 Web アプリ** をサポートしています。インストール不要、サーバー不要、Python も不要 — URL を開くだけで、スマートフォンを含むあらゆるデバイスからロボットを操作できます。

## なぜ Web アプリなのか？

Python SDK は強力ですが、インストールや GStreamer 依存関係、十分な性能のマシンが必要です。Web アプリはこれとは異なるアプローチを取ります：

- **インストール不要** — リンクを開くだけですぐに利用可能。ディスク容量とセットアップ時間を節約できます。
- **クロスプラットフォーム** — ブラウザが動くあらゆるデバイス（ノート PC、タブレット、スマートフォン）で動作します。
- **どこからでも実行** — 世界の反対側からでもロボットを操作できます。
- **デバイスのハードウェアを活用** — スマートフォンのマイク、スピーカー、タッチスクリーンを利用できます。
- **即時共有** — リンクを送るだけで、相手はすぐにアプリを使えます。

Web アプリは **静的な Hugging Face Space**（`sdk: static`）としてデプロイされます。サーバーサイドコードは存在せず、ブラウザは中央のシグナリングサーバー経由で WebRTC を用いてロボットに直接接続します。

> Python アプリが廃止されるわけではありません。Web アプリは補完的な選択肢であり、軽量な制御、リモートアクセス、クイックデモに特に適しています。

## アーキテクチャ

```
┌─────────────────────────────────┐
│  Browser                        │
│  (your app + reachy-mini.js)    │
└───────┬────────────┬────────────┘
        │ SSE/HTTP   │ WebRTC (peer-to-peer)
        │ signaling  │ video + audio + data
┌───────▼──────┐     │
│  Signaling   │     │
│  Server      │     │
│  (HF Space)  │     │
└───────┬──────┘     │
        │            │
┌───────▼────────────▼────────────┐
│  Robot                          │
│  GStreamer WebRTC daemon        │
│  camera · mic · motors          │
└─────────────────────────────────┘
```

1. **あなたのアプリ** は Hugging Face Spaces 上にホストされた静的な HTML/JS ページです。
2. **reachy-mini.js** が認証、シグナリング、および WebRTC ネゴシエーションを処理します。
3. **シグナリングサーバー** は SDP オファー/アンサーと ICE candidate を中継します。また、Hugging Face OAuth トークンの検証も行います。
4. WebRTC 接続が確立されると、**映像・音声・コマンドはピアツーピアで流れ**、シグナリングサーバーは経路から外れます。

## クイックスタート

### 1. Hugging Face Space を作成する

新しい Space を [huggingface.co](https://huggingface.co/new-space) 上に作成し、`sdk: static` を指定します。

`README.md` の Front Matter は次のようになります：

```yaml
---
title: My Reachy Mini App
emoji: 🤖
sdk: static
pinned: false
hf_oauth: true
hf_oauth_expiration_minutes: 480
---
```

`hf_oauth: true` は必須です — シグナリングサーバーが認証に使用する Hugging Face ログインボタンを有効にします。

### 2. SDK を追加する

`index.html` 内で、ES モジュールとして SDK をインポートします：

```html
<script type="module">
import { ReachyMini } from "./reachy-mini.js";

const robot = new ReachyMini();
</script>
```

`reachy-mini.js` は [リファレンス例](https://huggingface.co/spaces/cduss/webrtc_example) から、または npm CDN から取得できます：

```js
import { ReachyMini } from "https://cdn.jsdelivr.net/npm/@anthropic-robotics/reachy-mini/+esm";
```

### 3. ロボットに接続する

```js
// Authenticate with Hugging Face
if (!await robot.authenticate()) {
    robot.login();  // redirects to HF login page
    return;
}

// Connect to the signaling server
await robot.connect();

// Wait for robots to appear
robot.addEventListener("robotsChanged", (e) => {
    const robots = e.detail.robots;
    console.log("Available robots:", robots);
});

// Start a session with a specific robot
const detach = robot.attachVideo(document.querySelector("video"));
await robot.startSession(robotId);

// You're live — video is streaming, data channel is open
```

### 4. ロボットを制御する

```js
// Move the head (roll, pitch, yaw in degrees)
robot.setHeadRpyDeg(0, 10, -5);

// Move the antennas (right, left in degrees)
robot.setAntennasDeg(30, -30);

// Rotate the body (yaw in degrees)
robot.setBodyYawDeg(15);

// Atomic raw-units update (single datachannel message; no XYZ loss)
robot.setTarget({
    head: rpyToMatrix(0, 10, -5).flat(),    // number[16] flat 4×4
    antennas: [degToRad(30), degToRad(-30)],
    body_yaw: degToRad(15),
});

// Play a sound file on the robot
robot.playSound("wake_up.wav");

// Send any JSON command via the data channel
robot.sendRaw({ my_custom_command: "hello" });
```

### 5. ロボットの状態を受信する

```js
// Emitted every ~500ms while streaming. Wire-shape, raw units —
// use the exported math utilities for human conversions.
robot.addEventListener("state", (e) => {
    const { head, antennas, body_yaw, motor_mode, is_move_running } = e.detail;
    // head:            number[16]            — flat row-major 4×4
    // antennas:        [rightRad, leftRad]
    // body_yaw:        number                — radians
    // motor_mode:      "enabled" | "disabled" | "gravity_compensation"
    // is_move_running: boolean
    const rpy = matrixToRpy(head);   // { roll, pitch, yaw } in degrees
});
```

### 6. オーディオ

```js
// Unmute robot speaker (muted by default in browser)
robot.setAudioMuted(false);

// Unmute your microphone (bidirectional audio, if robot supports it)
robot.setMicMuted(false);

// Check if bidirectional audio is available
robot.addEventListener("micSupported", (e) => {
    console.log("Mic supported:", e.detail.supported);
});
```

### 7. クリーンアップ

```js
detach();                    // remove video binding
await robot.stopSession();   // back to 'connected' state
robot.disconnect();          // close signaling (keeps auth)
robot.logout();              // clear HF credentials
```

## API リファレンス

### コンストラクタ

```js
new ReachyMini({
    signalingUrl: "https://pollen-robotics-reachy-mini-central.hf.space",  // default
    enableMicrophone: true,  // default — request mic on startSession()
})
```

### ステートマシン

```
'disconnected' ──connect()──▸ 'connected' ──startSession()──▸ 'streaming'
     ▴ disconnect()                ▴ stopSession()
     └─────────────────────────────┘
```

### プロパティ（読み取り専用）

| Property | Type | Description |
| :--- | :--- | :--- |
| `state` | `string` | `"disconnected"`、`"connected"`、または `"streaming"` |
| `robots` | `Array` | 利用可能なロボット：`[{ id, meta: { name } }]` |
| `robotState` | `Object` | 最新の `state` イベント詳細 — `{ head: number[16], antennas: [rRad, lRad], body_yaw, motor_mode, is_move_running }`（ワイヤ形式） |
| `username` | `string\|null` | `authenticate()` 後の HF ユーザー名 |
| `isAuthenticated` | `boolean` | 有効な HF トークンが利用可能な場合は True |
| `micSupported` | `boolean` | ロボットが双方向オーディオを提供している場合は True |
| `micMuted` | `boolean` | 自分のマイクのミュート状態 |
| `audioMuted` | `boolean` | ロボットスピーカーのミュート状態（ローカルのみ） |

### メソッド

| Method | Returns | Description |
| :--- | :--- | :--- |
| `authenticate()` | `Promise<boolean>` | 既存の HF OAuth トークンを確認 |
| `login()` | — | HF ログインページへリダイレクト |
| `connect()` | `Promise` | SSE 接続を開き、ロボット一覧を受信 |
| `startSession(robotId)` | `Promise` | WebRTC をネゴシエートし、映像とデータの準備が整うと解決 |
| `stopSession()` | `Promise` | セッションを終了し、`connected` に戻る |
| `disconnect()` | — | シグナリングを閉じる（認証は維持） |
| `logout()` | — | HF 認証情報をクリア |
| `attachVideo(videoEl)` | `() => void` | 映像ストリームを要素にバインドし、クリーンアップ関数を返す |
| `setTarget({ head?, antennas?, body_yaw? })` | `boolean` | 原単位でのアトミック更新 — `head` は `number[16]`（フラットな 4×4）、`antennas` は `[rRad, lRad]`、`body_yaw` はラジアン |
| `setHeadRpyDeg(roll, pitch, yaw)` | `boolean` | 頭部の姿勢を度数で設定（内部で `setTarget` を呼び出し） |
| `setAntennasDeg(right, left)` | `boolean` | アンテナ位置を度数で設定（内部で `setTarget` を呼び出し） |
| `setBodyYawDeg(yaw)` | `boolean` | ボディヨーを度数で設定（内部で `setTarget` を呼び出し） |
| `playSound(filename)` | `boolean` | ロボット上でサウンドファイルを再生 |
| `sendRaw(data)` | `boolean` | データチャネル経由で任意の JSON を送信 |
| `requestState()` | `boolean` | 状態スナップショットを要求 |
| `setAudioMuted(muted)` | — | ロボットスピーカーをミュート/ミュート解除（ローカル） |
| `setMicMuted(muted)` | — | 自分のマイクをミュート/ミュート解除 |

### イベント

`robot.addEventListener(name, handler)` を使用します — SDK は `EventTarget` を拡張しています。

| Event | Detail | Description |
| :--- | :--- | :--- |
| `connected` | `{ peerId }` | シグナリング接続が確立された |
| `disconnected` | `{ reason }` | シグナリング接続が失われた |
| `robotsChanged` | `{ robots }` | ロボット一覧が更新された |
| `streaming` | `{ sessionId, robotId }` | WebRTC セッションがアクティブ |
| `sessionStopped` | `{ reason }` | セッションが終了した |
| `state` | `{ head, antennas, body_yaw, motor_mode, is_move_running }` | ロボット状態の更新（約 500ms 間隔；ワイヤ形式 — 上記「Receive robot state」を参照） |
| `videoTrack` | `{ track, stream }` | 映像トラックが利用可能になった |
| `micSupported` | `{ supported }` | 双方向オーディオの利用可否 |
| `error` | `{ source, error }` | `signaling`、`webrtc`、または `robot` からのエラー |

### 数学ユーティリティ

```js
import { rpyToMatrix, matrixToRpy, degToRad, radToDeg } from "./reachy-mini.js";

rpyToMatrix(roll, pitch, yaw)  // degrees → 4×4 rotation matrix (ZYX)
matrixToRpy(matrix)            // 4×4 matrix → { roll, pitch, yaw } in degrees
```

## セキュリティ

- 認証は Hugging Face OAuth を通じて行われます — HF にログインしているユーザーのみがシグナリングサーバーへアクセスできます。
- 既定では、自分の HF アカウントに登録されたロボットにのみ接続できます。
- WebRTC 接続は暗号化されています（DTLS/SRTP）。

## 前提条件

- ロボットはワイヤレスファームウェアを実行し、中央のシグナリングサーバーに接続されている必要があります。
- ロボットには有効な Hugging Face トークンが設定されている必要があります（[Usage](/ja/reachymini_platforms_reachy_mini_usage) を参照）。
- 現在は **ワイヤレスバージョン** のみサポートされています。

## 例

完全に動作するサンプルは Hugging Face Space として公開されています：
[cduss/webrtc_example](https://huggingface.co/spaces/cduss/webrtc_example)

これは、単一の静的 HTML ページから、ビデオストリーミング、ヘッド／アンテナ制御、双方向オーディオ、およびサウンド再生をすべて実行できることを示しています。