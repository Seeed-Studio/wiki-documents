---
description: Reachy Mini デーモンが提供する REST API の完全なリファレンス。アプリ、デーモン、状態、動作、モーター、運動学、音量、Hugging Face 認証向けの HTTP および WebSocket エンドポイントを網羅します。
title: REST API リファレンス
slug: /reachymini_api_rest-api
keywords:
  - rest api
  - http api
  - websocket
  - endpoints
  - daemon
  - apps
  - state
  - motors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_api_rest-api/
---

# REST API

Reachy Mini デーモンは `http://<daemon-ip>:8000/api` で HTTP および WebSocket API を公開しています。

- **Lite** — デーモンがあなたのマシン上で動作している場合: `http://localhost:8000`
- **Wireless** — デーモンがロボット上で動作している場合: `http://reachy-mini.local:8000`

デーモンが動作しているときは、インタラクティブな **Swagger UI** を閲覧できます。

- [http://localhost:8000/docs](http://localhost:8000/docs)（Lite — デーモンがあなたのマシン上で動作）
- [http://reachy-mini.local:8000/docs](http://reachy-mini.local:8000/docs)（Wireless — デーモンがロボット上で動作）

以下のリファレンスは同じ OpenAPI 仕様から生成されており、
デーモンを起動していなくても参照できます。

## エンドポイント概要

| カテゴリ | プレフィックス | 説明 |
|----------|--------|-------------|
| **Apps** | `/api/apps` | アプリの一覧表示、インストール、開始、停止 |
| **Daemon** | `/api/daemon` | デーモンの開始、停止、再起動 |
| **State** | `/api/state` | ヘッドポーズ、ボディヨー、アンテナ、DoA の読み取り |
| **Move** | `/api/move` | ゴートゥー、ターゲット設定、記録済み動作の再生 |
| **Motors** | `/api/motors` | モーター状態の取得、制御モードの設定 |
| **Kinematics** | `/api/kinematics` | IK 情報、URDF および STL メッシュファイル |
| **Volume** | `/api/volume` | スピーカーおよびマイクの音量制御 |
| **HF Auth** | `/api/hf-auth` | Hugging Face トークン管理 |

## 完全なリファレンス

<iframe
  src="https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json"
  style={{width: '100%', height: '80vh', border: 'none'}}
></iframe>

[フルページで開く](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json) · [OpenAPI 仕様をダウンロード（JSON）](https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json)

## より複雑なアプリ

より複雑なアプリの例については、JavaScript SDK を使用し、WebRTC トランスポートを活用してビデオ、オーディオ、およびロボット制御向けの高レベルな抽象化を提供する [JavaScript SDK & Web Apps](../SDK/javascript-sdk.md) のページを参照してください。