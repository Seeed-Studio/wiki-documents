---
description: reSpeaker Clip 向け SenseCraft Voice SDK の完全な API リファレンス。Flutter、Android、iOS BLE、AT/JSON トランスポート、録音セッション、Wi‑Fi 転送、OTA ファームウェア更新を網羅します。
title: reSpeaker Clip Voice SDK & API リファレンス Flutter SDK で独自の AI 音声アプリを構築
keywords:
  - SenseCraft Voice SDK
  - reSpeaker Clip
  - BLE
  - Wi-Fi
  - OTA
  - API リファレンス
  - Flutter
slug: /respeaker_clip_sensecraft_voice_sdk
sku: 100020126
last_update:
  date: 08/07/2026
  author: Kasun Thushara
createdAt: '2026-08-07'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_sensecraft_voice_sdk/
---

## 目次

**はじめに（開発者ガイド）**
- [1. 概要](#1-概要)
- [2. 前提条件](#2-前提条件)
- [3. 開発環境の確認](#3-開発環境の確認)
- [4. プロジェクトディレクトリ構成](#4-プロジェクトディレクトリ構成)
- [5. サンプルアプリの実行](#5-サンプルアプリの実行)
- [6. デモアプリの使い方](#6-デモアプリの使い方)
- [7. トラブルシューティング](#7-トラブルシューティング)

**API リファレンス（Flutter SDK）**
- [8. 概要とアーキテクチャ](#8-概要とアーキテクチャ)
- [9. 横断的なプロトコル定数](#9-横断的なプロトコル定数)
- [10. Flutter SDK](#10-flutter-sdk)
  - [10.1 BLE レイヤ](#101-ble-レイヤ)
  - [10.2 AT トランスポート](#102-at-トランスポート)
  - [10.3 セッション / 録音](#103-セッション--録音)
  - [10.4 Wi‑Fi ホットスポットと転送](#104-wi-fi-ホットスポットと転送)
  - [10.5 OTA ファームウェア更新](#105-ota-ファームウェア更新)
  - [10.6 モデルとユーティリティ](#106-モデルとユーティリティ)

---

## はじめに（開発者ガイド）

### 1. 概要

**SenseCraft Voice Flutter SDK**（`sensecraft_voice`）は、**BLE**（AT/JSON コマンド + ファイルダウンロード）および **Wi‑Fi AP**（UDP バイナリファイル転送）を介して reSpeaker Clip デバイスと直接通信します。API キーやバックエンドは不要で、SDK がデバイスと直接やり取りします。

`sdk/flutter/example/` 内のサンプルアプリは、すべての機能をデモします：
- **スキャン / 接続** – Clip を検出してペアリング
- **録音 / 停止** – Opus でエンコードされた録音の開始/停止
- **ステータスとバージョン** – デバイス情報、バッテリ、空き容量を読み取り
- **BLE ダウンロード** – BLE ファイル転送フレーム経由で録音を取得
- **Wi‑Fi 同期** – デバイス AP を有効化し、スマホから参加して UDP で転送（はるかに高速）
- **OTA 更新** – `.zip` または `.bin` パッケージから SMP/mcumgr を使ってファームウェアを書き込み

---

### 2. 前提条件

- **Flutter 3.27+** – [Flutter をインストール](https://docs.flutter.dev/get-started/install)
- **Android Studio**（Ladybug 2024.2+）と Android SDK（API 35+）および Build‑Tools
- **JDK 17** – Android ビルドに必須（新しいバージョンを使用している場合は [トラブルシューティング](#7-トラブルシューティング) を参照）
- **実機デバイス** – Bluetooth と Wi‑Fi を備えた Android（API 24+）または iOS（13+）；BLE/Wi‑Fi では **エミュレータは使用できません**

> **クイックチェック：** `flutter doctor -v` で Android / iOS ツールチェーンがすべて緑のチェックになっていることを確認します。

---

### 3. 開発環境の確認

環境が準備できていることを確認するため、次を実行します：

```bash
flutter doctor -v
```

次の点を確認してください：
- Flutter SDK が最新である。
- Android ツールチェーンがインストールされ、ライセンスに同意済みである。
- 実機デバイスが接続され、認識されている（`flutter devices`）。

`Android toolchain` に警告が表示される場合は、Android ライセンスに同意します：

```bash
flutter doctor --android-licenses
```

---

### 4. プロジェクトディレクトリ構成

```
mobile/
├── sdk/
│   ├── flutter/              ← The Flutter SDK package (sensecraft_voice)
│   │   ├── lib/              ← SDK source
│   │   ├── example/          ← ** The demo app (you are here) **
│   │   └── ...
│   ├── android/              ← Native Kotlin SDK (optional)
│   └── ios/                  ← Native Swift SDK (optional)
├── app/                      ← Full production SenseCraft Voice app
└── docs/                     ← Documentation
```

サンプルアプリは、`sdk/flutter/example/pubspec.yaml` 内の **パス依存関係** を通じて SDK に依存しています：

```yaml
dependencies:
  sensecraft_voice:
    path: ..
```

---

### 5. サンプルアプリの実行

### macOS / Linux

```bash
cd mobile/sdk/flutter/example
flutter pub get
flutter run
```

#### iOS 固有の手順（`flutter run` の前）

1. Xcode で `ios/Runner.xcworkspace` を開きます。
2. **Runner** ターゲット → **Signing & Capabilities** を選択します。
3. 自分の **Apple Developer Team** を選択します（Seeed のチームはコミットされていません）。
4. **Hotspot Configuration** 機能を有効にします。
5. ターミナルから `flutter run` で実行します。

---

#### Windows – ドライブ間の回避策

プロジェクトが **C:\ 以外のドライブ** にある場合、Android Gradle が `'other' has different root` というエラーで失敗することがあります。  
**解決策：** `example/` フォルダを `C:\` ドライブにコピーし、`pubspec.yaml` を調整して SDK への絶対パスを使用します。  
詳細は [トラブルシューティング → ビルド失敗](#ビルド失敗) を参照してください。

---

### 6. デモアプリの使い方

#### 6.1 初回接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_2.jpg" alt="Transcription interface" width={400} height="auto" /></p>

1. Clip デバイスの電源を入れ、別のスマホに接続されていないことを確認します。
2. アプリを起動すると、空のデバイスリストとログパネルが表示されます。
3. Bluetooth（および Android 12L 以前では位置情報）の権限を付与します。
4. **Scan** をタップすると、名前に `"Clip"` を含む BLE デバイスをアプリが検出します。
5. 検出されたデバイスをタップして接続します。表示された場合はペアリングプロンプトを承認します。
6. ログに `Connected. MTU=185` と表示されるまで待ちます – AT チャネルの準備が完了しています。

#### 6.2 ボタンリファレンス（接続後）

| ボタン | AT コマンド | 動作 |
|--------|------------|--------|
| **Version** | `AT+VERSION` | ファームウェアバージョンを表示 |
| **Status** | `AT+GSTAT` | バッテリ、空き容量、録音状態を表示 |
| **Record** | `AT+START` | 新しい録音を開始（通常モード） |
| **Stop** | `AT+STOP` | 録音を停止；セッション ID とファイル数を表示 |
| **List** | `AT+LIST` | 現在のセッションで録音されたファイルを一覧表示 |
| **BLE DL** | `AT+DOWNLOAD` | BLE 経由で直近のセッションをダウンロード（低速） |
| **WiFi sync** | `AT+WIFI=ON` + UDP | AP を有効化し、スマホを参加させ、UDP で転送（高速） |
| **OTA** | SMP/mcumgr | ファームウェアファイルを選択して書き込み |
| **Disconnect** | – | BLE を切断し、UI をリセット |

> **ワークフロー：** Record → Stop → **WiFi sync**（最速）または **BLE DL**（Wi‑Fi 設定不要）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_1.jpg" alt="Transcription interface" width={400} height="auto" /></p>

---

### 7. トラブルシューティング

#### ビルド失敗

| 症状 | 原因 | 対処 |
|---------|-------|-----|
| `java.lang.IllegalArgumentException: 25.0.2` | Java 25 がインストールされている（新しすぎる） | JDK 17 をインストールし、`flutter config --jdk-dir="<path-to-jdk17>"` を実行 |
| `'other' has different root` | プロジェクトが C: 以外のドライブ上（Windows） | `example/` を `C:\Users\<you>\clip_demo` にコピーし、`pubspec.yaml` を SDK への絶対パスで更新 |
| `Building with plugins requires symlink support` | 開発者モードがオフ（Windows） | Settings → Privacy & Security → For Developers → **Developer Mode** を ON に切り替え |
| `Could not find com.android.tools.build:gradle:8.x` | Android SDK が不足 | `flutter doctor --android-licenses` を実行し、すべてに同意 |

#### 接続の問題

| 症状 | 原因 | 対処 |
|---------|-------|-----|
| スキャンに Clip が表示されない | Clip の電源オフ / 範囲外 / すでに接続済み | Clip の電源を入れ直し、2 m 以内に保ち、他のデバイスとの接続を解除 |
| スキャンが固まる | Bluetooth 権限が拒否されている | 再インストールしてすべての権限を付与；Android 12L 以前では位置情報が ON であることを確認 |
| 工場出荷状態へのリセット後にペアリングが失敗する | 古い Bluetooth ボンド | システムの Bluetooth 設定でボンドを削除し、再試行 |
| 接続後にボタンが反応しない | AT チャネルの準備が未完了 | 通知が安定するまで 2–3 秒待ち、まず **Version** を試す |

#### Wi‑Fi 同期の問題

| 症状 | 原因 | 対処 |
|---------|-------|-----|
| 同期がすぐに失敗する | 録音がまだ進行中 | 先に録音を停止 |
| スマホが AP に参加できない | 権限不足または認証情報の誤り | Android：Nearby Wi‑Fi Devices（13+）または Fine Location（12L 以前）を付与；iOS：ホットスポット参加プロンプトを承認 |
| 同期が停滞する | スマホが別のネットワークへローミング | Clip の近くに留まり、既知ネットワークへの自動接続を一時的に無効化 |

#### ログ出力

SDK は `SdkLog` を通じてログを出力します。デモアプリでは、ログはターミナルと画面上のログパネルに表示されます。カスタムロガーをバインドするには次を使用します：

```dart
SdkLog.bind((level, message, error, stack) {
  // handle log
});
```

---

## API リファレンス（Flutter SDK）

### 8. 概要とアーキテクチャ

SenseCraft Voice SDK は、**BLE**（AT/JSON コマンド + ファイルダウンロード）および **Wi‑Fi AP**（UDP バイナリファイル転送）を介して reSpeaker Clip デバイスと通信します。API キーやバックエンドは不要で、SDK がデバイスと直接やり取りします。

#### SDK の機能差異

3 つすべての SDK（Flutter、Android、iOS）は同じ機能を公開します：

| 機能 | Flutter | Android | iOS |
|------------|---------|---------|-----|
| BLE スキャン/接続/切断 | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` |
| MTU 管理 | `MtuManager` | `MtuManager` | `MtuManager` |
| AT(JSON) トランスポート | `AtTransport` | `AtTransport` | `AtTransport` |
| 録音制御 | `RecordingSession` | `RecordingSession` | `RecordingSession` |
| デバイスイベント/ステータス | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` |
| BLE ダウンロード + マージ | `RecordingSession.download*` | `RecordingSession.download*` | `RecordingSession.download*` |
| Wi‑Fi ホットスポット制御 | `WifiHotspotConnector` | `WifiHotspotConnector` | `WifiHotspotConnector` |
| Wi‑Fi UDP 転送 | `WifiTransferClient` | `WifiTransferClient` | `WifiTransferClient` |
| Wi‑Fi 高速同期 | `WifiFastSyncSession` | `WifiFastSyncSession` | `WifiFastSyncSession` |
| OTA ファームウェア更新 | `OtaSession` | `OtaSession` | `OtaSession` |
| 権限ファサード | `SenseCraftVoiceBlePermissions` | `SenseCraftVoicePermissions` | `SenseCraftVoiceBlePermissions` |

#### SDK レイヤとプロダクトレイヤ

| レイヤ | 範囲 | SDK に含まれるか |
|-------|-------|--------|
| デバイスプロトコル | BLE GATT、AT(JSON)、UDP 高速同期、OTA | **はい** |
| 高レベルセッション | `RecordingSession` の開始/停止/一覧/ダウンロード | **はい** |
| プロダクトビジネス | 録音 DB、ポータル JWT、文字起こしフロー | **いいえ** |

#### プラットフォーム要件

| プラットフォーム | 制約 |
|----------|-------------|
| Flutter | Dart >=3.6.0、Flutter >=3.27.0、依存関係：`flutter_blue_plus` ^1.36.1 |
| Android | API 24+、JDK 17、Android SDK 36、Kotlin 2.1.0 |
| iOS | iOS 13+、macOS 10.15+、Swift 5.9、CoreBluetooth + Network + 任意の `iOSMcuManagerLibrary` |

---

### 9. 横断的なプロトコル定数

#### BLE GATT UUID

| 名前 | UUID | 用途 |
|------|------|---------|
| `clipAtService` | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | プライマリサービス |
| `commandRxCharacteristic` | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | 書き込み：AT コマンド |
| `responseTxCharacteristic` | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | 通知：JSON 応答 |
| `fileDataCharacteristic` | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | 通知：ファイルデータフレーム |
| `batteryService` | `0000180F-0000-1000-8000-00805F9B34FB` | 標準バッテリーサービス |
| `batteryLevelCharacteristic` | `00002A19-0000-1000-8000-00805F9B34FB` | バッテリー残量 % |
| `deviceInfoService` | `0000180A-0000-1000-8000-00805F9B34FB` | 標準デバイス情報 |
| `smpService` | `00001530-1212-EFDE-1523-785FEABCD123` | OTA SMP/mcumgr サービス |
| `smpCharacteristic` | `DA2E7828-FBCE-4E01-AE9E-261174997C48` | SMP キャラクタリスティック |

#### BLE ファイルデータフレーム種別

| 定数 | 値 | 意味 |
|----------|-------|---------|
| `kClipFrameData` | `0x01` | DATA フレーム：type(1) + seq(2 LE) + len(2 LE) + payload |
| `kClipFrameFileStart` | `0x10` | FILE_START：type(1) + nameLen(1) + name + size(4 LE) |
| `kClipFrameFileEnd` | `0x11` | FILE_END：type(1) + crc32(4 LE) |
| `kClipFrameTransferDone` | `0x12` | TRANSFER_DONE：type(1) + sessionIdLen(1) + id + fileCount(4 LE) |
| `kClipDataHeaderSize` | `5` | DATA ヘッダー：type + seq + len |

#### UDP フレーム種別

| 定数 | 値 | 意味 |
|----------|-------|---------|
| `FRAME_DATA` | `0x01` | CRC 付きファイルデータチャンク（Dart/Kotlin）/ `frameData`（Swift） |
| `FRAME_FILE_ACK` | `0x03` | ACK(0x00) または NACK(0x01) |
| `FRAME_FILE_START` | `0x10` | ファイル転送の開始 |
| `FRAME_FILE_END` | `0x11` | デバイス側 CRC32 を含むファイルの終了 |
| `FRAME_TRANSFER_DONE` | `0x12` | セッション転送完了 |
| `FRAME_AT_RESP` | `0x20` | AT コマンド応答（長さプレフィックス付き JSON） |
| `FRAME_HEARTBEAT` | `0x30` | 4 バイト LE タイムスタンプ付きキープアライブ |
| UDP ポート | `8089` | デバイス AP のデフォルトポート |

#### AT コマンドリファレンス

| AT コマンド | 応答 | 用途 |
|------------|----------|---------|
| `AT+VERSION` | `{"ok":true,"data":{"version":"..."}}` | ファームウェアバージョン |
| `AT+TIME?` | `{"ok":true,"data":{"time":<unix_s>}}` | デバイスタイムを読み取り |
| `AT+TIME=<unix_s>` | `{"ok":true}` | デバイスタイムを設定 |
| `AT+NAME?` | `{"ok":true,"data":{"name":"..."}}` | デバイス名を読み取り |
| `AT+NAME=<name>` | `{"ok":true}` | デバイス名を設定（1〜32 バイトの UTF-8） |
| `AT+NAME=CLEAR` | `{"ok":true}` | デバイス名をクリア |
| `AT+GSTAT` | `{"ok":true,"data":{"state":"idle","battery":85,...}}` | デバイスステータス |
| `AT+PAIR?` | `{"ok":true,"data":{"status":"paired","addr":"..."}}` | ペアリング状態 |
| `AT+PAIR=reset` | `{"ok":true}` | ペアリングをリセット |
| `AT+START` | `{"ok":true,"data":{"session":"..."}}` | 録音開始（通常モード） |
| `AT+START=enhanced` | `{"ok":true,"data":{"session":"..."}}` | 録音開始（拡張モード） |
| `AT+STOP` | `{"ok":true,"data":{"session":"...","duration":120,"file_count":5}}` | 録音停止 |
| `AT+PAUSE` | `{"ok":true}` | 録音を一時停止 |
| `AT+RESUME` | `{"ok":true}` | 録音を再開 |
| `AT+MODE=normal|enhanced` | `{"ok":true,"data":{"mode":"..."}}` | 録音モードを設定 |
| `AT+MARK[=<note>]` | `{"ok":true,"data":{"session":"...","count":3,"offset":45}}` | ブックマークを追加 |
| `AT+LIST[=<sessionId>]` | `{"ok":true,"data":{"items":[...],"total":10}}` | ファイル一覧 |
| `AT+MARKS=<sessionId>[?<page>&<perPage>]` | `{"ok":true,"data":{"bookmarks":[...],"total":5}}` | ブックマーク一覧 |
| `AT+DOWNLOAD=<sessionId>[:<startFile>]` | ファイルデータ通知フレームを開始 | ファイル転送を開始 |
| `AT+CANCEL` | `{"ok":true}` | 録音または転送をキャンセル |
| `AT+DELETE=<sessionId>` | `{"ok":true}` | リモートセッションを削除 |
| `AT+PURGE` | `{"ok":true}` | すべてのリモートファイルを削除 |
| `AT+FACTORY=confirm` | `{"ok":true}` | 工場出荷時設定にリセット |
| `AT+WIFI?` | `{"ok":true,"data":{"ap_running":true,"ssid":"ClipAP_XXXX",...}}` | ホットスポットを問い合わせ |
| `AT+WIFI=ON` | `{"ok":true,"data":{"ssid":"ClipAP_XXXX","password":"...",...}}` | ホットスポットを有効化 |
| `AT+WIFI=OFF` | `{"ok":true}` | ホットスポットを無効化 |
| `AT+LOG=off|info|debug` | `{"ok":true}` | SD ログレベルを設定 |

---

### 10. Flutter SDK

**パッケージ：** `sensecraft_voice` v0.1.0  
**エントリポイント：** `lib/sensecraft_voice.dart`

#### 依存関係

| パッケージ | バージョン | 用途 |
|---------|---------|---------|
| `flutter_blue_plus` | ^1.36.1 | BLE トランスポート |
| `permission_handler` | ^11.4.0 | 実行時パーミッション |
| `mcumgr_flutter` | ^0.8.1 | OTA ファームウェア更新 |
| `flutter_archive` | ^6.0.3 | ZIP 展開（OTA） |
| `path_provider` | ^2.1.5 | OTA 用の一時ディレクトリ |
| `uuid` | ^4.5.1 | OTA 用一時ディレクトリ名 |
| `crypto` | ^3.0.6 | SHA‑256/MD5（OTA） |
| `wifi_iot` | ^0.3.19+1 | Wi‑Fi ホットスポット接続 |
| `path` | ^1.9.0 | パス操作 |

##### `flutter_blue_plus` から再エクスポートされる型

`BluetoothAdapterState`, `BluetoothBondState`, `BluetoothCharacteristic`, `BluetoothConnectionState`, `BluetoothDevice`, `Guid`, `ScanResult`

---

#### 10.1 BLE レイヤー

##### SenseCraftVoiceClient

トップレベルの BLE マネージャー：スキャン、接続、切断を行います。

```dart
class SenseCraftVoiceClient {
  Stream<List<ScanResult>> get scanResults;
  Stream<bool> get isScanning;
  Stream<BluetoothAdapterState> get adapterState;

  Future<void> turnOnAdapter();
  Future<BluetoothAdapterState> getCurrentAdapterState();

  Future<void> startScan({
    Duration timeout = const Duration(seconds: 12),
    bool filterByService = false,
  });
  Future<void> stopScan();

  Future<SenseCraftVoiceConnection?> connectByDeviceId(String deviceId);
  Future<SenseCraftVoiceConnection?> connectByDeviceIdAndVerify(
    String deviceId, {
    int attempts = 3,
    Duration retryGap = const Duration(milliseconds: 450),
    Duration verifyTimeout = const Duration(seconds: 4),
  });

  Future<SenseCraftVoiceConnection> connect(ScanResult result);
  Future<SenseCraftVoiceConnection?> connectAndVerify(
    ScanResult result, {
    int attempts = 3,
    Duration retryGap = const Duration(milliseconds: 450),
    Duration verifyTimeout = const Duration(seconds: 4),
  });

  Future<bool> verifyAtLinkReady(
    SenseCraftVoiceConnection conn, {
    Duration timeout = const Duration(seconds: 4),
  });
  Future<bool> verifyAtLinkReadyWithRetry(
    SenseCraftVoiceConnection conn, {
    int attempts = 3,
    Duration gap = const Duration(milliseconds: 450),
    Duration timeout = const Duration(seconds: 4),
  });

  Future<void> disconnect(SenseCraftVoiceConnection conn);
}
```

##### SenseCraftVoiceConnection

Clip デバイスへのアクティブな BLE リンク。

```dart
class SenseCraftVoiceConnection {
  final BluetoothDevice device;
  final BluetoothCharacteristic commandRx;    // Write: AT commands
  final BluetoothCharacteristic responseTx;   // Notify: JSON replies
  final BluetoothCharacteristic fileData;     // Notify: file‑data frames
  final MtuManager mtu;
  final Stream<int>? batteryLevelStream;      // BLE Battery Level (0..100)

  SenseCraftVoiceConnection({
    required BluetoothDevice device,
    required BluetoothCharacteristic commandRx,
    required BluetoothCharacteristic responseTx,
    required BluetoothCharacteristic fileData,
    required MtuManager mtu,
    Stream<int>? batteryLevelStream,
  });

  AtTransport createAtTransport();
}
```

##### SenseCraftVoiceBleUuids

```dart
class SenseCraftVoiceBleUuids {
  static final Guid clipAtService;
  static final Guid commandRxCharacteristic;
  static final Guid responseTxCharacteristic;
  static final Guid fileDataCharacteristic;
  static final Guid batteryService;
  static final Guid batteryLevelCharacteristic;
  static final Guid deviceInfoService;
  static final Guid smpService;
  static final Guid smpCharacteristic;
}
```

##### SenseCraftVoiceBlePermissions

```dart
class SenseCraftVoiceBlePermissions {
  static Future<bool> ensureGranted();
}
```

#### MtuManager

```dart
class MtuManager {
  final BluetoothDevice device;

  MtuManager(BluetoothDevice device);

  int get mtu;                  // Negotiated MTU (default 23)
  int get payloadSize;          // max(mtu - 3, 1)

  Future<void> startListening();
  Future<bool> requestHighMtu({int mtu = 185, int timeoutSeconds = 6});
  Future<void> dispose();
}
```

##### ClipFileData（1 つの BLE 通知をパース）

```dart
const int kClipFrameData = 0x01;
const int kClipFrameFileStart = 0x10;
const int kClipFrameFileEnd = 0x11;
const int kClipFrameTransferDone = 0x12;
const int kClipDataHeaderSize = 5;

sealed class ClipFileDataParsed {}
class ClipParsedRaw { Uint8List bytes; }
class ClipParsedData { int seq; Uint8List payload; }
class ClipParsedFileStart { String filename; int fileSize; }
class ClipParsedFileEnd { int crc32; }
class ClipParsedTransferDone { String sessionId; int fileCount; }
class ClipParsedInvalid { String reason; }

ClipFileDataParsed parseClipFileDataNotify(List<int> data);
```

##### BleTransferFrameHandler

BLE ファイルダウンロードの進行状況を追跡するステートマシン。

```dart
class BleTransferFrameState {
  bool useFraming = false;
  String? currentFilename;
  int currentFileDeclaredSize = 0;
  int bytesThisFile = 0;
  int fileCrc = 0;
  int nextSeq = 0;
  int fileCompleteCount = 0;
}

sealed class BleTransferFrameResult {}
// Invalid(String reason), Raw(Uint8List), UnexpectedRaw(int)
// FileStart(filename, fileSize), Data(seq, payload, dup, jump, orphan)
// FileEndOk(filename, localCrc, deviceCrc, fileCompleteCount, ...)
// FileEndStale(filename, deviceCrc)
// FileEndCrcMismatch(filename, localCrc, deviceCrc, resyncStartFile)
// TransferDone(sessionId, fileCount)

class BleTransferFrameHandler {
  static String sanitizeFilename(String name);
  static String orphanFilenameBeforeFileStart({
    required String? effectiveStartFile,
    required int fileCompleteCount,
  });
  static int? partNumberFromFilename(String name);

  static BleTransferFrameResult handle({
    required List<int> bytes,
    required BleTransferFrameState state,
    String? effectiveStartFile,
  });
}
```

##### TransferJsonEvent / TransferJsonEventParser

```dart
sealed class TransferJsonEvent {}
class TransferJsonFileComplete { String filename; String sessionId; }
class TransferJsonTransferComplete { int files; String sessionId; }
class TransferJsonOther { String event; }

class TransferJsonEventParser {
  static TransferJsonEvent? parse(Map<String, dynamic> msg);
}

class TransferJsonTransferCompletePolicy {
  static bool looksLikeSessionComplete({...});
  static bool shouldIgnoreEmptyTransferComplete({...});
}
```

---

#### 10.2 AT トランスポート

##### AtTransport

```dart
class AtTransport {
  final BluetoothCharacteristic commandRx;
  final BluetoothCharacteristic responseTx;
  final BluetoothCharacteristic fileData;
  final MtuManager mtu;

  AtTransport({
    required BluetoothCharacteristic commandRx,
    required BluetoothCharacteristic responseTx,
    required BluetoothCharacteristic fileData,
    required MtuManager mtu,
  });

  Stream<List<int>> get responseNotifyBytes;
  Stream<List<int>> get fileDataBytes;
  Stream<Map<String, dynamic>> get jsonMessages;

  Future<void> setFileDataNotify(bool enabled, {
    Duration timeout = const Duration(seconds: 2),
  });

  Future<Map<String, dynamic>> send(
    String atCommand, {
    Duration timeout = const Duration(seconds: 5),
    bool withoutResponse = false,
    Duration interChunkDelay = const Duration(milliseconds: 16),
  });

  Future<void> writeCommandOnly(
    String atCommand, {
    bool withoutResponse = false,
    Duration interChunkDelay = const Duration(milliseconds: 16),
  });

  static bool isStopAckShape(Map<String, dynamic> m);
  static bool looksLikeGstatOkReply(Map<String, dynamic> m);
}
```

##### JsonObjectFramer

```dart
class JsonObjectFramer {
  Iterable<String> feed(String chunk);
}
```

---

#### 10.3 セッション / 録画

##### RecordingSession

高レベルの録画およびデバイス管理 API。

```dart
class RecordingSession {
  final SenseCraftVoiceConnection connection;
  final AtTransport at;

  RecordingSession({required this.connection, required this.at});

  String? get activeSessionId;
  Stream<DeviceEvent> get deviceEvents;

  // Recording control
  Future<RecordingStartInfo> start({
    RecordingMode mode = RecordingMode.normal,
    Duration timeout = const Duration(seconds: 5),
  });

  Future<RecordingStopInfo> stop({
    Duration timeout = const Duration(seconds: 8),
  });

  Future<RecordingControlInfo> pause({
    Duration timeout = const Duration(seconds: 5),
  });

  Future<RecordingControlInfo> resume({
    Duration timeout = const Duration(seconds: 5),
  });

  Future<void> cancel();

  // Device info
  Future<DeviceStatus> getStatus({
    Duration timeout = const Duration(seconds: 5),
  });

  Future<DeviceRuntimeInfo> readRuntimeInfo({
    Duration versionTimeout = const Duration(seconds: 5),
    Duration timeTimeout = const Duration(seconds: 4),
    Duration statusTimeout = const Duration(seconds: 4),
    Duration pairTimeout = const Duration(seconds: 6),
  });

  Future<bool> syncDeviceTime({
    DateTime? time,
    Duration timeout = const Duration(seconds: 4),
    Duration minInterval = Duration.zero,
    bool force = false,
  });

  Future<bool> resetPairing({
    Duration timeout = const Duration(seconds: 6),
  });

  static const int userDeviceNameMaxBytes = 32;
  static const String userDeviceNameClearToken = 'CLEAR';
  static bool isValidUserDeviceName(String name);

  Future<String> getUserDeviceName({
    Duration timeout = const Duration(seconds: 5),
  });

  Future<void> setUserDeviceName(
    String? name, {
    Duration timeout = const Duration(seconds: 5),
  });

  // Bookmarks & file listing
  Future<DeviceBookmarkMarkResult> mark({
    String? note,
    Duration timeout = const Duration(seconds: 10),
  });

  Future<List<DeviceFileMeta>> listFiles({
    String? sessionId,
    Duration timeout = const Duration(seconds: 8),
  });

  Future<List<DeviceFileMeta>> listAllFiles({
    int perPage = 10,
    int maxPages = 100,
    Duration timeout = const Duration(seconds: 8),
  });

  Future<List<DeviceBookmark>> listBookmarks({
    required String sessionId,
    int perPage = 10,
    int maxPages = 100,
    Duration timeout = const Duration(seconds: 6),
  });

  // Session management
  Future<bool> deleteSession({
    required String sessionId,
    Duration timeout = const Duration(seconds: 8),
  });

  Future<bool> purgeSessions({
    Duration timeout = const Duration(seconds: 10),
  }) async { /* AT+PURGE */ }

  Future<bool> factoryReset({
    Duration timeout = const Duration(seconds: 10),
  }) async { /* AT+FACTORY=confirm */ }

  // BLE download
  Stream<DownloadEvent> download({
    required String sessionId,
    String? startFile,
    Duration timeout = const Duration(minutes: 10),
    Duration startCommandTimeout = const Duration(seconds: 10),
    DownloadStartRetryPolicy retryPolicy = const DownloadStartRetryPolicy(),
  });

  Future<DownloadSessionResult> downloadToDirectory({
    required String sessionId,
    required String directory,
    String? startFile,
    Duration timeout = const Duration(minutes: 10),
    Duration startCommandTimeout = const Duration(seconds: 10),
    DownloadStartRetryPolicy retryPolicy =
        const DownloadStartRetryPolicy.resilient(),
    bool createDirectory = true,
    bool verifyCrc = true,
  });

  Future<DownloadSessionResult> downloadToDirectoryWithResume({
    required String sessionId,
    required String directory,
    String? startFile,
    int dbReceivedBytes = 0,
    int maxAttempts = 3,
    Duration timeout = const Duration(minutes: 10),
    Duration startCommandTimeout = const Duration(seconds: 10),
    DownloadStartRetryPolicy retryPolicy =
        const DownloadStartRetryPolicy.resilient(),
    bool createDirectory = true,
    bool verifyCrc = true,
    Duration retryDelay = const Duration(milliseconds: 600),
  });

  Future<DownloadMergeResult> downloadMergeAndMaybeDeleteSession({
    required String sessionId,
    required String directory,
    String? startFile,
    int dbReceivedBytes = 0,
    int maxAttempts = 3,
    Duration timeout = const Duration(minutes: 10),
    Duration startCommandTimeout = const Duration(seconds: 10),
    DownloadStartRetryPolicy retryPolicy =
        const DownloadStartRetryPolicy.resilient(),
    bool createDirectory = true,
    bool verifyCrc = true,
    Duration retryDelay = const Duration(milliseconds: 600),
    String? mergedPath,
    bool deleteRemoteSessionAfterMerge = false,
    bool deleteLocalPartsAfterMerge = false,
  });

  Future<DownloadFinalizeResult> downloadMergeFetchBookmarksAndMaybeDeleteSession({
    required String sessionId,
    required String directory,
    String? startFile,
    int dbReceivedBytes = 0,
    int maxAttempts = 3,
    Duration timeout = const Duration(minutes: 10),
    Duration startCommandTimeout = const Duration(seconds: 10),
    DownloadStartRetryPolicy retryPolicy =
        const DownloadStartRetryPolicy.resilient(),
    bool createDirectory = true,
    bool verifyCrc = true,
    Duration retryDelay = const Duration(milliseconds: 600),
    String? mergedPath,
    bool deleteRemoteSessionAfterMerge = false,
    bool deleteLocalPartsAfterMerge = false,
    bool saveBookmarksJson = true,
    String? bookmarksPath,
    int bookmarksPerPage = 10,
    int bookmarksMaxPages = 100,
    Duration bookmarksTimeout = const Duration(seconds: 6),
  });

  Future<bool> deleteSessionAfterLocalVerification({
    required String sessionId,
    required String mergedPath,
    int? expectedBytes,
    int? verifiedBytes,
    Duration timeout = const Duration(seconds: 8),
    Duration statusTimeout = const Duration(seconds: 5),
    double minCompletionRatio = 0.95,
  });

  // Static helpers
  static int? canonicalTransferExpectedBytes({int? dbExpected, required int transferredTotal});
  static bool localMergedFileCompleteForDelete({
    required int actualSize, int? expectedBytes, int? verifiedBytes,
    double minCompletionRatio = 0.95,
  });
  static String bookmarksSidecarPathForMergedFile(String mergedPath);
  static Future<String> writeBookmarksJsonSidecar({
    required String path, required List<DeviceBookmark> bookmarks,
  });
}
```

##### 録画結果モデル

```dart
class RecordingStartInfo {
  final String sessionId;
  final RecordingMode? mode;
  final Map<String, dynamic> raw;
}

class RecordingStopInfo {
  final String? sessionId;
  final int? durationSeconds;
  final int? fileCount;
  final Map<String, dynamic> raw;
}

class RecordingControlInfo {
  final String? sessionId;
  final int? durationSeconds;
  final Map<String, dynamic> raw;
  factory RecordingControlInfo.fromAtReply(Map<String, dynamic> resp);
}
```

##### ダウンロードイベント & 結果モデル

```dart
sealed class DownloadEvent {}
class DownloadStarted { String sessionId; int? totalFiles; int? totalBytes; }
class DownloadFileStarted { String filename; int fileSize; }
class DownloadFileProgress { String filename; int received; int total; }
class DownloadFileCompleted { String filename; Uint8List bytes; int crc32; }
class DownloadTransferDone { String sessionId; int fileCount; }

enum DownloadStartFailureKind { sessionNotFound, transferBusy, other }

class DownloadStartRetryPolicy {
  final int maxAttempts;               // >= 1
  final Duration retryDelay;
  final bool retrySessionNotFound;
  final bool cancelBusyTransfer;
  final bool skipCancelWhenDeviceRecording;
  final Duration cancelTimeout;
  final Duration cancelSettleDelay;
  final Duration statusTimeout;

  const DownloadStartRetryPolicy({...});
  const DownloadStartRetryPolicy.resilient({
    this.maxAttempts = 4,
    this.cancelBusyTransfer = true,
    ...
  });
  bool shouldRetry(DownloadStartFailureKind kind);
}

class DownloadedFileArtifact { String filename; String path; int sizeBytes; int crc32; }
class DownloadSessionResult {
  String sessionId; String directory; int? totalFiles; int? totalBytes;
  int completedFiles; int completedBytes; DownloadTransferDone? transferDone;
  List<DownloadedFileArtifact> files;
  bool get isComplete;
}
class DownloadMergeResult {
  DownloadSessionResult download; String mergedPath; int mergedBytes;
  bool deletedRemoteSession; bool deletedLocalParts;
}
class DownloadFinalizeResult {
  DownloadMergeResult merge; List<DeviceBookmark> bookmarks;
  String? bookmarksPath; bool bookmarksSaved;
  String get mergedPath; int get mergedBytes;
  bool get deletedRemoteSession; bool get deletedLocalParts;
}
```

#### RecordingException

```dart
class RecordingException implements Exception {
  final String message;
  final Map<String, dynamic>? raw;
  final String? code;
  const RecordingException(this.message, {this.raw, this.code});
}
```

---

#### 10.4 Wi‑Fi ホットスポット & 転送

##### WifiHotspotConnector

```dart
class WifiHotspotConnector {
  final AtTransport at;

  WifiHotspotConnector({required AtTransport at});

  Future<WifiHotspotInfo> queryStatus();
  Future<WifiHotspotInfo> enable();
  Future<void> disable();
  Future<bool> connectToHotspot(WifiHotspotInfo info);
  Future<void> disconnectFromHotspot(WifiHotspotInfo info);
  Future<void> forceWifiUsage(bool force);
}
```

##### WifiTransferClient

```dart
typedef WifiTransferProgress = void Function(int received, int total);
typedef WifiPingResult = ({bool ok, bool networkUnreachable});

class WifiTransferClient {
  final WifiHotspotInfo hotspot;

  WifiTransferClient(WifiHotspotInfo hotspot);

  Future<bool> ping();
  Future<WifiPingResult> pingDetailed();

  Future<int> downloadSession({
    required String sessionId,
    required String sessionDir,
    String? startFile,
    WifiTransferProgress? onFileProgress,
    void Function(int fileIndex, int totalFiles, int overallBytes)? onOverallProgress,
    bool Function()? shouldCancel,
  });

  void dispose();
}
```

##### ClipUdpSyncClient

```dart
const int udpFrameData = 0x01;
const int udpFrameFileAck = 0x03;
const int udpFrameFileStart = 0x10;
const int udpFrameFileEnd = 0x11;
const int udpFrameTransferDone = 0x12;
const int udpFrameAtResp = 0x20;
const int udpFrameHeartbeat = 0x30;

class ClipUdpSyncClient {
  ClipUdpSyncClient({Duration receiveTimeout = const Duration(seconds: 5)});

  bool get isConnected;
  bool get lastFailureUnreachable;

  Future<void> connect(String host, int port);
  Future<Map<String, dynamic>> sendAtCommand(String command, {
    Duration? timeout,
    int maxSkips = 64,
  });
  Future<bool> ping();

  Future<int> downloadSession({
    required String sessionId,
    required String sessionDir,
    String? startFile,
    bool Function()? shouldCancel,
    void Function(String currentFile, int filesDone, int totalFiles,
                 int receivedBytes, int? totalBytes)? onProgress,
  });
}
```

##### WifiFastSyncSession

```dart
enum WifiBleFallbackReason { phoneWifiDisconnected, phoneOnOtherWifi, transferFailed }
enum WifiVerifyFailureKind { networkUnreachable, timedOut }

class WifiVerifyFailure implements Exception {
  WifiVerifyFailureKind kind;
  WifiHotspotInfo hotspot;
}

class WifiBatchItem {
  String recordingId; String sessionId; String sessionDir;
  int? expectedBytes; String? startFile; int resumeByteOffset;
}

typedef WifiBatchResolveStartFile = Future<String?> Function(String recordingId, String sessionId);

class WifiFastSyncBatchResult {
  int succeeded; int failed; bool userCancelled; bool abortedForRecording;
  WifiBleFallbackReason? bleFallbackReason; WifiHotspotInfo? fallbackHotspot;
  bool get shouldFallBackToBle;
  bool get isOverallSuccess;
}

class WifiFastSyncSession {
  final AtTransport at;

  WifiFastSyncSession({required AtTransport at});

  WifiHotspotInfo? get hotspot;
  WifiTransferClient? get transferClient;
  WifiHotspotConnector? get connector;
  bool get isPrepared;

  Future<void> forceWifiUsage(bool force);
  Future<WifiHotspotInfo> enableHotspot();
  Future<bool> connectPhone();
  Future<WifiHotspotInfo> prepare({bool joinPhone = true, bool requirePhoneJoin = false});
  Future<void> teardown({bool disconnectPhone = true, bool disableHotspot = true});

  Future<WifiFastSyncBatchResult> downloadBatch({
    required List<WifiBatchItem> items,
    WifiBatchResolveStartFile? resolveStartFile,
    bool joinPhone = true,
    bool requirePhoneJoin = false,
    bool disconnectPhoneAfter = true,
    bool disableHotspotAfter = true,
  });

  Future<int> downloadSession({
    required String sessionId,
    required String sessionDir,
    String? startFile,
    WifiTransferProgress? onFileProgress,
    void Function(int fileIndex, int totalFiles, int overallBytes)? onOverallProgress,
    bool Function()? shouldCancel,
    bool disableHotspotAfter = true,
    bool disconnectPhoneAfter = true,
  });
}
```

##### Wi‑Fi ネットワークヘルパー

```dart
bool isDeviceApNetworkUnreachable(Object error);
bool isWifiUdpTransientSocketError(Object error);
bool isWifiApReachabilitySocketNoise(Object error, {StackTrace? stackTrace});
```

---

#### 10.5 OTA ファームウェア更新

##### OtaFirmwareProcessor

```dart
class OtaFirmwareException implements Exception {
  final String message;
}

class OtaFirmwareProcessor {
  static Future<List<Image>> processZip(Uint8List zipData);
  static Future<List<Image>> processBin(Uint8List binData);
  static Future<List<Image>> processFile(File file);

  @visibleForTesting
  static void validateManifestFileEntry({
    required String fileName,
    required Uint8List data,
    required Map<String, dynamic> entry,
  });
}
```

> **Note:** `Image` は `mcumgr_flutter` パッケージの `mcumgr.Image` です。

##### OtaSession

```dart
enum OtaPhase { idle, preparing, uploading, validating, resetting, success, failed, cancelled }

class OtaProgress {
  OtaPhase phase;
  double progress;     // 0.0..1.0
  int bytesSent;
  int totalBytes;
  String message;
}

class OtaSession {
  final String deviceId;

  OtaSession({required String deviceId});

  Stream<OtaProgress> get events;
  OtaPhase get phase;
  Object? get lastError;
  StackTrace? get lastStackTrace;

  Future<bool> upgrade(
    File firmwareFile, {
    FirmwareUpgradeConfiguration? configuration,
  });

  Future<bool> upgradeImages(
    List<Image> images, {
    FirmwareUpgradeConfiguration? configuration,
  });

  Future<void> cancel();
  Future<void> dispose();
}
```

---

#### 10.6 モデル & ユーティリティ

##### モデル

```dart
enum RecordingMode { normal, enhanced }

class Device {
  String id; String name; String? sn; String model;
  int? batteryPercent; RecordingMode recordingMode; String? firmwareVersion;
  bool hasFirmwareUpdate; bool isOnline; DateTime? lastSeen;
  DateTime createdAt; DateTime updatedAt;
}

class DeviceFileMeta {
  String deviceId; String path; String name;
  int sizeBytes; int durationSeconds; int bookmarkCount; DateTime? createdAt;
  String get recordingId;     // "${deviceId}_$path"
}

class WifiHotspotInfo {
  bool enabled; String ssid; String password; String ip; int port; int? channel;
  String get baseUrl;         // "http://$ip:$port"
  bool get isValid;
  factory WifiHotspotInfo.fromAtReply(Map<String, dynamic> resp);
}

class DeviceBookmark {
  int offsetSeconds; String note; Map<String, dynamic> raw;
  Map<String, dynamic> toJson();
  factory DeviceBookmark.fromJson(Map<String, dynamic> raw, {String? defaultSessionId});
}

class DeviceBookmarkMeta {
  String? sessionId; int? markCount; int? offsetSeconds; String? note;
  Map<String, dynamic> raw;
}

class DeviceBookmarkMarkResult {
  bool ok; String? sessionId; int? markCount; int? offsetSeconds;
  Map<String, dynamic> raw;
}

class DeviceTimeInfo {
  int? unixSeconds; DateTime? date; Map<String, dynamic> raw;
  factory DeviceTimeInfo.fromAtReply(Map<String, dynamic> resp);
}
```

##### デバイスステータス & イベント

```dart
class DeviceStatus {
  String state; bool isRecording; String? sessionId;
  int? batteryPercent; bool? isCharging; int? freeSpaceBytes;
  int? bitrate; RecordingMode? recordingMode; int? recordingSeconds;
  String? firmwareVersion; Map<String, dynamic> raw;
  factory DeviceStatus.fromAtReply(Map<String, dynamic> resp);
}

class DeviceRuntimeInfo {
  String? firmwareVersion; Object? rawDeviceTime; DateTime? deviceTime;
  DeviceStatus? status; String? pairStatus; String? pairAddress;
  Map<String, dynamic>? versionReply; Map<String, dynamic>? timeReply;
  Map<String, dynamic>? statusReply; Map<String, dynamic>? pairReply;

  String? get state; bool? get isRecording; String? get sessionId;
  int? get batteryPercent; String? get formattedDeviceTime; bool get hasAnyData;
}

enum DeviceRecordingState { idle, recording, paused, transmitting, wifiSync, error, unknown }
extension DeviceRecordingStateX {
  String? get id;    // stable lowercase string
  static DeviceRecordingState parse(Object? raw);
}

sealed class DeviceEvent {
  Map<String, dynamic> raw;
}
class DeviceRecordingStateEvent { DeviceRecordingState state; String? sessionId; int? durationSeconds; RecordingMode? mode; }
class DeviceBookmarkEvent { String? sessionId; int? markCount; int? offsetSeconds; String? note; }
class DeviceBatteryLowEvent { int? level; }
class DeviceStorageLowEvent { int? freeMb; }
class DeviceErrorEvent { int? code; String? message; }
class DeviceConnectedEvent { String? address; }
class DeviceDisconnectedEvent { String? reason; }
class DeviceUnknownEvent { String name; }

DeviceEvent? parseDeviceEvent(Map<String, dynamic> msg);
String? formatDeviceAtTime(Object? raw);
DateTime? parseDeviceAtTime(Object? raw);
```

##### セッション再開/マージ用ヘルパー

```dart
int? partNumberFromSessionOpusFilename(String name);
int compareSessionOpusPartFilename(String a, String b);
bool isCanonicalCompleteSessionOpusSlice(String filename);

class SessionOpusSliceInventory {
  List<File> orderedCompleteSlices; List<int> missingIndices;
  int maxIndex; List<File> allArtifacts; List<int> duplicateIndices;
}

SessionOpusSliceInventory inventorySessionOpusParts(List<File> nonEmptyParts);

Future<File?> mergeSessionOpusPartFiles(
  List<File> parts, String mergedPath, {bool Function()? shouldCancel, void Function(int)? onProgress});

Future<File?> mergeSessionOpusPartsInDirectory(
  String sessionDirPath, String mergedPath, {bool Function()? shouldCancel, void Function(int)? onProgress});

Future<int> sumCompleteSessionOpusSliceBytes(String sessionDirPath);
Future<int> sumSessionOpusPartBytes(String sessionDirPath);

class SessionResumeMarkers {
  String? startFile; int resumeByteOffset; int resumeFileIndex;
}

int resumeFileIndexFromStartFile(String? startFile);
Future<int> resolveResumeByteFloor({required String sessionDirPath, int dbReceivedBytes = 0});
Future<SessionResumeMarkers> resolveSessionResumeMarkers({
  required String sessionDirPath, String? startFile, int dbReceivedBytes = 0,
});
Future<String?> resolveSessionResumeStartFile({
  required String sessionDirPath, String? preferredStartFile,
});
```

##### ユーティリティ

```dart
// SdkLog logger facade
class SdkLog {
  static void bind(void Function(SdkLogLevel level, String message, Object? error, StackTrace? stackTrace)? handler);
  static void d(String message, [Object? error, StackTrace? stackTrace]);
  static void i(String message, [Object? error, StackTrace? stackTrace]);
  static void w(String message, [Object? error, StackTrace? stackTrace]);
  static void e(String message, [Object? error, StackTrace? stackTrace]);
}

enum SdkLogLevel { debug, info, warning, error }

// CRC32
const int kSessionOpusMergeBufferBytes = 1024 * 1024;
const int kSessionOpusMergeProgressEveryBytes = 4 * 1024 * 1024;

// Transfer progress helpers (in transfer_progress.dart)
// - wifiAligned / uncappedRatio / branchLabel / sessionTransferBytesComplete
```

---




## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
