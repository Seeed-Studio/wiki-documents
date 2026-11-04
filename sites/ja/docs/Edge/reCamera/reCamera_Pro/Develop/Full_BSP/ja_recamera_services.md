---
description: "フルソースパッケージにおける reCamera 製品サービスの役割、ビルドオプション、および起動時の関係性について説明します。"
title: "製品サービスアーキテクチャ"
keywords:
  - "reCamera"
  - "reCamera Pro"
  - "RV1126B"
  - "SDK"
  - "BSP"
  - "Linux"
  - "Firmware"
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_services
sku: 10003420
sidebar_position: 10
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_services/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 製品サービスアーキテクチャ

このページでは、`project/app/` 配下のアプリケーションについて、その責務、使用言語、ビルドオプション、起動方法、およびカスタマイズの入口を説明します。**ここは、Seeed が元の Rockchip SDK に対して最も大きな追加を行っている部分であり、製品カスタマイズが最も頻繁に行われる場所です。**

## サービス概要

```text
                        ┌──────────────────────────────┐
   sensor ──► rockit ──►│  recamera_ipc (rkipc, C)     │──► Internal RTSP 127.0.0.1:5554
      ▲                 │  Main application for video, audio, recording, and AI inference │        │
      │                 └──────────────┬───────────────┘        ▼
   rkaiq(ISP)                          │ protobuf          ┌─────────┐
   rockiva(NPU)                        │ Unix socket       │ go2rtc  │──► WebRTC :8555
   librknnrt(NPU)                      ▼                   └─────────┘   RTSP :554 (optional)
                        ┌──────────────────────────────┐
                        │ recamera_notify (Python)     │──► MQTT / HTTP / UART / WebSocket
                        └──────────────────────────────┘

   ┌────────────────────┐   ┌─────────────────────┐   ┌──────────────────────┐
   │ recamera_web       │   │ recamera_services   │   │ recamera_onvif (C)   │
   │ React frontend + backend  │   │ Rust: gmgr/skt2ws/  │   │ ONVIF device discovery and control │
   │ nginx static assets     │   │ tmir/rcisd          │   └──────────────────────┘
   └────────────────────┘   └─────────────────────┘
                                    │
   ┌────────────────────┐   ┌───────▼─────────────┐
   │ overlay system services   │   │ recamera_utils      │
   │ ttyd/sshd/syslog/  │   │ Factory and test tools      │
   │ watchdog/board-id  │   └─────────────────────┘
   └────────────────────┘
```

## アプリケーション一覧とビルドオプション

| アプリケーション | 言語 | ボードビルドオプション | 説明 |
| --- | --- | --- | --- |
| `recamera_ipc` | C (CMake + protobuf) | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | **コア**製品レベルの IPC アプリケーション |
| `recamera_web` | React/Node + C/C++ | `RK_APP_RECAMERA_WEB=y` | Web 設定インターフェース（フロントエンド + バックエンド） |
| `recamera_services` | Rust | `RK_APP_RECAMERA_SERVICES=y` | gmgr、skt2ws、tmir、rcisd を含むシステムサービス |
| `recamera_notify` | Python | `RK_APP_RECAMERA_NOTIFY=y` | AI 推論通知（MQTT/HTTP/UART/WebSocket） |
| `recamera_onvif` | C | `RK_APP_RECAMERA_ONVIF=y` | ONVIF プロトコル実装 |
| `recamera_utils` | Shell / Python / C | 明示的なビルドオプションなし | 工場テスト、シリアル番号ツール、ストレステスト |
| `rkai` | C++ (CMake) | `RK_APP_TYPE` により制御 | RKAI ラッパー（LLM/VLM）とサンプル |
| `rkllm-inference` | C++ | `RK_APP_RKLLM_INFERENCE=y` | RKNN + RKLLM マルチモーダル推論デモ |
| `rkipc` | C | Rockchip リファレンス実装 | `recamera_ipc` のアップストリームベースライン |
| `wifi_app` | C + サードパーティソース | `RK_ENABLE_WIFI=y` | wpa_supplicant / hostapd / bluez / GATT |
| `cvr` | C | — | 車載録画 |
| `aov_sample` | C | — | 常時オン・低消費電力ビジョン（AOV）サンプル |
| `ao_record_demo` | C | `RK_APP_TYPE` に `RK_AO_RECORD_DEMO` を含む | 音声録音デモ |
| `uvc_app_tiny` | C | — | UVC カメラモード |
| `ipcweb` | フロントエンドおよびバックエンド | — | 元の Rockchip Web リファレンス実装 |
| `testdemo` | C/C++ | — | `low_delay_net_display`、`yoloworld_demo` |
| `fastboot_client` | C | `RK_ENABLE_FASTBOOT` | Fastboot クライアント |
| `nginx_mk` | — | — | nginx パッケージング |
| `component/` | 混在 | — | 共通コンポーネント：`ao_record_service`、`fastboot_server`、`lvgl`、`rkadk`、`rkfsmk` |

`RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` は複合識別子です。一部のアプリケーション（`ao_record_demo` など）は、ビルドするかどうかを判断するために `$(filter RK_XXX, $(RK_APP_TYPE))` を使用します。

## recamera_ipc（コアアプリケーション）

### 構成

```text
project/app/recamera_ipc/
├── CMakeLists.txt / Makefile / cmake/ / format.sh
├── LICENSE
├── docs/                       # Rockchip_Developer_Guide_Linux_RKIPC_{CN,EN}.md (V1.7.6) + resources
├── protobufs/                  # Message definitions for communication with notify and web
├── model/rknn/                 # yolox_s.rknn(+json)、nanodet-plus-m_416.rknn(+json)
├── lib/
├── system/
└── src/rv1126b_ipc/
    ├── main.c
    ├── CMakeLists.txt
    ├── RkLunch.sh              # ★ System-wide application startup entry point
    ├── RkLunch-stop.sh
    ├── rkipc-3840x2160.ini     # ★ Default configuration (resolution/bitrate/RTSP/ONVIF options)
    └── video/
```

### common モジュール（機能マップ）

`project/app/recamera_ipc/common/` のコードは機能ごとに構成されています。関連するディレクトリを見つけるには、この表を使用してください：

| モジュール | 責務 |
| --- | --- |
| `audio/` | `audio.c` でのキャプチャとエンコード、`rkaudio_mp3.c` での MP3 プロンプト音声 |
| `isp/` | rkaiq ラッパー |
| `venc/` | ビデオエンコード |
| `rtsp/` | 内部 RTSP サービス（127.0.0.1:5554） |
| `rtmp/` | RTMP ストリーミング |
| `osd/` | タイムスタンプ／テキストオーバーレイ |
| `region_clip/`、`roi/` | 領域クロップおよび ROI |
| `rockiva/` | ROCKIVA アルゴリズム統合 |
| `rc_infer/`、`rc_model/` | カスタム推論フレームワークとモデル管理 |
| `rc_notify/` | 推論結果を `recamera_notify` に送信 |
| `event/` | イベントシステム |
| `storage/` | 録画ストレージおよび SD カード管理 |
| `network/` | ネットワーク設定 |
| `socket_server/` | Web バックエンドおよび notify 用のソケットサービス |
| `system/`、`sysutil/` | システム情報およびユーティリティ関数 |
| `param/` | INI パラメータの読み書き |
| `vendor_storage/` | ベンダーストレージ領域（シリアル番号、MAC アドレスなど） |
| `vigil/`、`vigil_device_support/` | vigil 関連コード（protobuf と libblkid に依存） |
| `player/` | プレーヤー |
| `lvgl/`、`ui/` | 画面上の UI（LVGL） |
| `uvc/` | UVC モード |
| `ivm/` | インテリジェントビデオ監視 |
| `gstreamer/` | GStreamer 関連コード |

### 起動と停止

デバイス上では、生成された init スクリプトが次のコマンドを呼び出します：

```bash
# sh /oem/usr/bin/RkLunch.sh         # Start
# sh /oem/usr/bin/RkLunch-stop.sh    # Stop
```

`RkLunch.sh` は `/etc/profile.d/RkEnv.sh` を source してから、rkipc と関連プロセスを起動します。**自分のアプリケーションを起動時に開始したい場合は、別の init スクリプトを追加するのではなく、まずこのスクリプトを変更してください。**

### 設定

デバイス上のランタイム設定は `/userdata/config/rkipc.ini`（書き込み可能パーティション上）であり、初期状態では `rkipc-3840x2160.ini` からコピーされます。go2rtc の起動スクリプトは、その `[video.0.rtsp]`、`[video.0.onvif]`、`[video.1.rtsp]` セクションを読み取り、ポート 554 を公開するかどうかを判断します。

設定を変更した後は、rkipc を再起動し、**go2rtc も再起動してください**（その設定は起動時に `/tmp/go2rtc/go2rtc.yaml` に生成されます）：

```bash
# sh /oem/usr/bin/RkLunch-stop.sh && sh /oem/usr/bin/RkLunch.sh
# /oem/usr/etc/init.d/S50go2rtc restart
```

## recamera_services（Rust システムサービス）

以下の情報は `recamera_services/README.md` からの抜粋です：

| コンポーネント | 目的 | 設定 |
| --- | --- | --- |
| **gmgr** | GPIO マネージャー。GPIO 制御と監視のための HTTP/WebSocket API を提供 | `gmgr/config.json` |
| **skt2ws** | ソケット → WebSocket ブリッジ。Unix ソケットデータを転送（`rkipc-record-events` により使用） | `skt2ws/config.json` |
| **tmir** | TTY ミラー。シリアルポートをソケット／WebSocket に多重化（`ttyS4` をミラー） | `tmir/config.json` |
| **rcisd** | reCamera Intellisense デーモン。イベントをキューイングし、ファイルを転送 | 外部設定なし |

その他のディレクトリには、`inotify_passwd/`（パスワードファイルの変更監視）、`key_factory/`（工場ボタン）、`led/`（LED 制御）、`scripts/init.d/` などがあります。

### ビルド

```bash
cd project/app/recamera_services
make                                          # Default target: armv7-unknown-linux-gnueabihf
make SERVICE_TARGET=aarch64-unknown-linux-gnu # Use 64-bit for reCamera Pro
make gmgr                                     # Build one component
make clean && make help
```

Rust と Docker が必要です（`cross` はクロスコンパイルに Docker を使用します）。`gmgr/setup-libgpiod.sh` は libgpiod 依存関係を準備します。

> **デフォルトのターゲットは 32-bit armv7 です。** reCamera Pro は aarch64 を使用するため、明示的に `SERVICE_TARGET=aarch64-unknown-linux-gnu` を指定してください。そうしないとバイナリは動作しません。`./build.sh app` を使用する場合、SDK が正しいターゲットを設定しますが、`make` を手動で呼び出す際には見落としやすい点です。

### 出力レイアウト

```text
out/
├── etc/init.d/{S40gmgr,S40skt2ws,S40tmir,S49rcisd}
└── usr/
    ├── bin/{gmgr,skt2ws,tmir,rcisd}
    └── share/{gmgr_config.json,skt2ws_config.json,tmir_config.json}
```

### gmgr API

HTTP ポート `8080` で待ち受けるとともに、Unix ソケット `/dev/shm/gmgr.sock` も提供します：

```text
GET    /api/v1/gpios                     # Lists all pins and their full descriptions
GET    /api/v1/gpios/events              # WebSocket stream of events from all pins
GET    /api/v1/gpio/{pin_id}             # Full description of one pin
GET    /api/v1/gpio/{pin_id}/info        # Configuration information
GET/POST /api/v1/gpio/{pin_id}/settings  # state / edge / debounce_ms
GET/POST /api/v1/gpio/{pin_id}/value     # Reads or writes the pin level
GET    /api/v1/gpio/{pin_id}/event       # Most recent event
GET    /api/v1/gpio/{pin_id}/events?limit=5
```

ローカル開発では、`mock-gpio` 機能がデフォルトで有効になっています。ハードウェアビルドの場合は、`--features hardware-gpio` を追加します：

```bash
cargo build --release --features hardware-gpio
cargo test
```

## recamera_notify (Python 通知サービス)

このサービスは `rkipc` から protobuf 推論データを受信し、AI カメラの結果を複数のチャネルを通じて転送します。

| 機能 | 説明 |
| --- | --- |
| ソケットサーバー | rkipc から推論データを受信 |
| 解析 | protobuf (`protobufs/inference_pb2.py`) |
| フォーマット | テンプレートベースの出力 |
| 通知チャネル | **MQTT、HTTP、UART、WebSocket** |
| 信頼性 | MQTT 切断後に自動的に再接続 |
| 設定 | JSON (`notify_config_default.json`) |
| ステータス | MQTT/HTTP/UART のランタイムステータスは一時 JSON ファイルに書き込まれます |

モジュール：`core/`（`config_manager`、`inference_parser`、`template_formatter`、`socket_server`、`notifier_manager`）、`notifiers/`（`base_notifier`、`mqtt_notifier`、`http_notifier`、`uart_notifier`、`websocket_server`、`notifier_factory`）、および `tests/`（`run_all_tests.py` を含む）。

### ビルドとデプロイ

```bash
export RK_APP_RECAMERA_NOTIFY=y
make -C project/app/recamera_notify
```

デバイス上でのインストールパス：

| 項目 | パス |
| --- | --- |
| Python パッケージ | `/usr/lib/python3.11/site-packages/recamera_notify/` |
| 起動スクリプト | `/usr/bin/notify_server.sh` |
| システムサービス | `/etc/init.d/S49notify` |

```bash
# /etc/init.d/S49notify start
# /etc/init.d/S49notify stop
# ps aux | grep notify_server
```

> 対象デバイスは Python **3.11** を使用します。ホスト側で別バージョンを使って開発する場合は、構文と依存関係の互換性を確認してください。

## recamera_onvif (C)

標準的な ONVIF デバイス検出と制御を実装します。ディレクトリには `src/`（`dom.c`、`authenticate.c`、`cJSON.c`、その他の SOAP/XML 処理コード）、`socket_client/`、`script/` が含まれます。また、パケットキャプチャデバッグ用に `RECV.log`、`SENT.log`、`TEST.log` も含まれます。

`RK_APP_RECAMERA_ONVIF=y` によって有効化されます。ONVIF が有効な場合、go2rtc も外部 RTSP を有効にします（優先順位のルールについては [Device Access and Debugging](/ja/recamera_pro_bsp_device_debug/) を参照してください）。

## recamera_web (フロントエンドとバックエンド)

```text
project/app/recamera_web/
├── recamera_web_react/     # React frontend
│   ├── package.json / src / public / backend / nginx.conf / requirements.txt
└── recamera_web_backend/   # C/C++ backend (CMake + thirdparty + ipcweb-env-rv1126b)
```

フロントエンドの機能（README より）：

- 多言語対応（英語と中国語）、ライト/ダークテーマ、レスポンシブレイアウト
- **デバイス情報：** モデル、シリアル番号、CPU/メモリ/ストレージの監視、設定保存、再起動、工場出荷時リセット
- **ライブビュー：** ストリームプレビュー、再生/一時停止、スナップショット、録画、および解像度/フレームレート/ビットレート/コーデックの制御
- **録画設定：** 連続、スケジュール、モーション検知トリガー、または AI イベントトリガー録画；ストレージパス、セグメント、ループ上書き、ファイルの閲覧・再生・ダウンロード・削除
- **AI 推論：** 物体検出（YOLO シリーズ）、画像セグメンテーション、キーポイント検出（ポーズ/顔/手）、画像分類（ResNet、EfficientNet）。各タスクごとに、モデル、信頼度しきい値、バッチサイズ、推論デバイス（GPU/CPU/NPU）、および可視化を設定可能。
- **ターミナル：** コマンドラインインターフェースを通じてデバイスを管理（ttyd と統合）

フロントエンドには Node.js 18 以降が必要です。ビルド出力は `nginx.conf` に従ってデプロイされます（nginx は `nginx_mk` によって提供されます）。ビデオプレビューはポート `:8555` 上の go2rtc WebRTC を使用します。

## recamera_utils (工場およびテスト用ユーティリティ)

| ディレクトリ | 項目 |
| --- | --- |
| `hw_test/` | `bt_adv.sh`（Bluetooth アドバタイズテスト）、`imu_test.py`（IMU テスト；カーネルオプション `CONFIG_INV_ICM42670_I2C=y` に対応） |
| `emc_test/` | `AP6256_MFG.bin`、`wl` ユーティリティ、および `BT RF Test Commands for Linux-v09.pdf` — Wi-Fi/Bluetooth RF 認証テスト |
| `rf_range_test/` | `bt_client.py`、`bt_server.py`、`wifi_ap.py`、`wifi_sta.py` —— RF 到達距離テスト |
| `stress_test/` | `cpu_stress.py`、`npu_stress.py`、`emmc_sd_stress.py`、`emc_test.py` |
| `sn_tool/` | `SN_TOOL` — シリアル番号を書き込み（`upgrade_tool sn` と併用） |

これらのツールを工場作業手順書のベースとして使用してください。各ディレクトリには `README.md` が含まれています。

## その他のアプリケーション

| アプリケーション | 説明 |
| --- | --- |
| `rkai` | RKAI ラッパーライブラリ（`rkai_LLM`、`rkai_VLM`）、サンプル（`rkai_samples_llm.cpp`、`rkai_samples_vlm.cpp`、`rkai_samples_vlm_vision.cpp`）、およびドキュメント `doc/Rockchip_Developer_Guide_Linux_RKAI_{CN,EN}.md`；`common/include/` には `rknn_api.h`、`rknn_custom_op.h`、`cJSON.h`、`cnpy.h`、`easy_timer.h` が含まれます |
| `rkllm-inference` | [AI and NPU Development](/ja/recamera_pro_ai_npu_development/) を参照 |
| `wifi_app` | wpa_supplicant（2.6、または WPA3 用に 2.10）、hostapd、libnl 3.9.0、openssl 3.2.1、bluez 5.77、`rtk_hciattach`、および GATT サーバー/クライアントツールをビルド；設定は `/userdata/rk96x/conf` にあります。`RK_ENABLE_WIFI_CHIP` は RK960 または RK962 プレフィックスを選択します |
| `aov_sample` | AOV 低消費電力サンプル：`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `testdemo/yoloworld_demo` | エンドツーエンドの YOLO-World デモ |
| `component/` | `ao_record_service`（音声録音サービス）、`fastboot_server`（高速起動）、`lvgl`（GUI）、`rkadk`（アプリケーション開発キット）、`rkfsmk`（ファイルシステム） |

## 起動順序の概要

`/etc/init.d/` および `/oem/usr/etc/init.d/` 内のスクリプトは、デバイス上で数値順に実行されます：

| 順序 | スクリプト | ソース |
| --- | --- | --- |
| S00 | `board-id` | overlay |
| S10 | `log`（WebSocket ログ） | overlay |
| S15 | `watchdog` | overlay |
| S20 | `hwclock` | overlay |
| S20/S21 | `linkmount` / `appinit` | `build.sh` により自動生成（パーティションをマウント / `RkLunch.sh` を呼び出し） |
| S40 | `gmgr`、`skt2ws`、`tmir` | recamera_services |
| S49 | `rcisd` | recamera_services |
| S49 | `notify` | recamera_notify |
| S50 | `sshd`、`ttyd`、`go2rtc` | overlay |
| S70 | `vsftpd` | overlay |
| S99 | `factorykey`、`inotify_passwd`、`led` | recamera_services |

サービスを追加する際は、未使用のシーケンス番号を選び、依存関係を考慮してください。例えば、ネットワークに依存するサービスは S40 以降に、`/userdata` を必要とするサービスは `S20linkmount` の後に起動します。

## ソースリポジトリ

これは `.git` メタデータを含まないソーススナップショットです。README ファイルによると、これらのアプリケーションは Seeed 社内 GitLab リポジトリに対応しています：

| アプリケーション | リポジトリ |
| --- | --- |
| `recamera_onvif` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-onvif.git` |
| `recamera_utils` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-utils.git` |

命名パターンは `rockchip/linux-ipc-app-recamera2-<module>` です。他の `recamera_*` アプリケーションも同じ規則に従っている可能性があります（**表を完成させる前に、社内 GitLab でこれを確認してください**）。アップストリームへの変更は、この SDK スナップショットではなく、対応するリポジトリで行ってください。そうしないと、次回の同期時に失われる可能性があります。

## 変更影響クイックリファレンス

| 次の項目を変更したい場合… | ここを編集 | リビルド |
| --- | --- | --- |
| ビデオ解像度/ストリーム/RTSP/ONVIF オプション | `recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini` またはデバイス上の `/userdata/config/rkipc.ini` | `app` + `firmware`（またはデバイスの INI を直接編集） |
| Web UI ページ | `recamera_web/recamera_web_react/src/` | `app` + `firmware` |
| Web バックエンド API | `recamera_web/recamera_web_backend/src/` | 上記と同じ |
| GPIO 定義/API | `recamera_services/gmgr/config.json` および `src/` | 上記と同じ |
| 推論通知のフォーマット/チャネル | `recamera_notify/notify-server/`、`notify_config_default.json` | 上記と同じ |
| AI モデル | `recamera_ipc/model/rknn/` および対応する `.json` ファイル | `app` + `firmware` |
| 起動アプリケーション | `recamera_ipc/src/rv1126b_ipc/RkLunch.sh` | `app` + `firmware` |
| ログのフォーマット/出力 | `overlay-buildroot-syslog-ng/etc/syslog-ng.conf` | `rootfs` + `firmware` |
| Serial/SSH/ttyd ポリシー | `overlay-buildroot-sshd`、`overlay-buildroot-ttyd` | `rootfs` + `firmware` |
| オーディオチャネルマッピング | `overlay-buildroot-asound/etc/asound.conf` | `rootfs` + `firmware` |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>