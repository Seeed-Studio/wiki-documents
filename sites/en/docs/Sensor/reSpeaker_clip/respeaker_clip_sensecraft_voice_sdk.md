---
description: Complete API reference for the SenseCraft Voice SDKs for reSpeaker Clip, covering Flutter, Android, and iOS BLE, AT/JSON transport, recording sessions, Wi-Fi transfer, and OTA firmware update.
title: reSpeaker Clip Voice SDK & API Reference Build Your Own AI Voice App with Flutter SDK
keywords:
  - SenseCraft Voice SDK
  - reSpeaker Clip
  - BLE
  - Wi-Fi
  - OTA
  - API reference
  - Flutter
slug: /respeaker_clip_sensecraft_voice_sdk
sku: 100020126
last_update:
  date: 08/07/2026
  author: Kasun Thushara
createdAt: '2026-08-07'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/respeaker_clip_sensecraft_voice_sdk/
---

## Table of Contents

**Getting Started (Developer Guide)**
- [1. Overview](#1-overview)
- [2. Prerequisites](#2-prerequisites)
- [3. Environment Verification](#3-environment-verification)
- [4. Project Directory Layout](#4-project-directory-layout)
- [5. Running the Example App](#5-running-the-example-app)
- [6. Using the Demo App](#6-using-the-demo-app)
- [7. Troubleshooting](#7-troubleshooting)

**API Reference (Flutter SDK)**
- [8. Overview & Architecture](#8-overview--architecture)
- [9. Cross‑cutting Protocol Constants](#9-cross-cutting-protocol-constants)
- [10. Flutter SDK](#10-flutter-sdk)
  - [10.1 BLE Layer](#101-ble-layer)
  - [10.2 AT Transport](#102-at-transport)
  - [10.3 Session / Recording](#103-session--recording)
  - [10.4 Wi‑Fi Hotspot & Transfer](#104-wi-fi-hotspot--transfer)
  - [10.5 OTA Firmware Update](#105-ota-firmware-update)
  - [10.6 Models & Utilities](#106-models--utilities)

---

## Getting Started (Developer Guide)

### 1. Overview

The **SenseCraft Voice Flutter SDK** (`sensecraft_voice`) communicates directly with a reSpeaker Clip device over **BLE** (AT/JSON commands + file download) and its **Wi‑Fi AP** (UDP binary file transfer). No API key or backend is required — the SDK talks straight to the device.

The example app in `sdk/flutter/example/` demonstrates every feature:
- **Scan / Connect** – discover and pair with a Clip
- **Record / Stop** – start/stop Opus‑encoded recordings
- **Status & Version** – read device info, battery, free space
- **BLE Download** – fetch recordings over BLE file‑transfer frames
- **Wi‑Fi Sync** – enable the device AP, join from phone, and transfer via UDP (much faster)
- **OTA Update** – flash firmware from a `.zip` or `.bin` package using SMP/mcumgr

---

### 2. Prerequisites

- **Flutter 3.27+** – [Install Flutter](https://docs.flutter.dev/get-started/install)
- **Android Studio** (Ladybug 2024.2+) with Android SDK (API 35+) and Build‑Tools
- **JDK 17** – required for Android builds (see [Troubleshooting](#7-troubleshooting) if you have a newer version)
- **Physical Device** – Android (API 24+) or iOS (13+) with Bluetooth and Wi‑Fi; **emulators do not work** for BLE/Wi‑Fi

> **Quick check:** `flutter doctor -v` should show all green checks for Android / iOS toolchains.

---

### 3. Environment Verification

Run the following to ensure your environment is ready:

```bash
flutter doctor -v
```

Make sure:
- Flutter SDK is up to date.
- Android toolchain is installed and licensed.
- A physical device is connected and recognised (`flutter devices`).

If the `Android toolchain` shows warnings, accept the Android licenses:

```bash
flutter doctor --android-licenses
```

---

### 4. Project Directory Layout

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

The example app depends on the SDK via a **path dependency** in `sdk/flutter/example/pubspec.yaml`:

```yaml
dependencies:
  sensecraft_voice:
    path: ..
```

---

### 5. Running the Example App

### macOS / Linux

```bash
cd mobile/sdk/flutter/example
flutter pub get
flutter run
```

#### iOS‑specific steps (before `flutter run`)

1. Open `ios/Runner.xcworkspace` in Xcode.
2. Select the **Runner** target → **Signing & Capabilities**.
3. Choose your own **Apple Developer Team** (the Seeed team is not committed).
4. Enable **Hotspot Configuration** capability.
5. Run from terminal with `flutter run`.

---

#### Windows – cross‑drive workaround

If your project is on a drive **other than C:\**, Android Gradle may fail with `'other' has different root`.  
**Solution:** Copy the `example/` folder to your `C:\` drive and adjust `pubspec.yaml` to use an absolute path to the SDK.  
See [Troubleshooting → Build failures](#build-failures) for details.

---

### 6. Using the Demo App

#### 6.1 First connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_2.jpg" alt="Transcription interface" width={400} height="auto" /></p>

1. Turn on the Clip device and make sure it’s not connected to another phone.
2. Launch the app – you’ll see an empty device list and a log panel.
3. Grant Bluetooth (and Location on Android 12L‑) permissions.
4. Tap **Scan** – the app finds BLE devices with `"Clip"` in their name.
5. Tap a discovered device to connect. Accept the pairing prompt if shown.
6. Wait for the log to show `Connected. MTU=185` – the AT channel is ready.

#### 6.2 Button reference (after connection)

| Button | AT Command | Action |
|--------|------------|--------|
| **Version** | `AT+VERSION` | Show firmware version |
| **Status** | `AT+GSTAT` | Show battery, free space, recording state |
| **Record** | `AT+START` | Start a new recording (normal mode) |
| **Stop** | `AT+STOP` | Stop recording; session ID and file count shown |
| **List** | `AT+LIST` | List recorded files for the current session |
| **BLE DL** | `AT+DOWNLOAD` | Download the last session over BLE (slower) |
| **WiFi sync** | `AT+WIFI=ON` + UDP | Enable AP, join phone, transfer over UDP (fast) |
| **OTA** | SMP/mcumgr | Pick a firmware file and flash it |
| **Disconnect** | – | Close BLE and reset UI |

> **Workflow:** Record → Stop → **WiFi sync** (fastest) or **BLE DL** (no Wi‑Fi setup).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_1.jpg" alt="Transcription interface" width={400} height="auto" /></p>

---

### 7. Troubleshooting

#### Build failures

| Symptom | Cause | Fix |
|---------|-------|-----|
| `java.lang.IllegalArgumentException: 25.0.2` | Java 25 installed (too new) | Install JDK 17 and run `flutter config --jdk-dir="<path-to-jdk17>"` |
| `'other' has different root` | Project on non‑C: drive (Windows) | Copy `example/` to `C:\Users\<you>\clip_demo`; update `pubspec.yaml` with absolute path to the SDK |
| `Building with plugins requires symlink support` | Developer Mode off (Windows) | Settings → Privacy & Security → For Developers → toggle **Developer Mode** ON |
| `Could not find com.android.tools.build:gradle:8.x` | Missing Android SDK | Run `flutter doctor --android-licenses` and accept all |

#### Connection issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| No Clip appears in scan | Clip off / out of range / already connected | Power‑cycle the Clip; keep within 2 m; disconnect other devices |
| Scan stuck | Bluetooth permissions denied | Reinstall and grant all permissions; on Android 12L‑, ensure Location is ON |
| Pairing fails after factory reset | Stale Bluetooth bond | Remove the bond in system Bluetooth Settings → retry |
| Buttons do nothing after connect | AT channel not ready | Wait 2–3 s for notifications to settle; try **Version** first |

#### Wi‑Fi sync issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| Sync fails immediately | Recording still active | Stop recording first |
| Phone fails to join AP | Missing permission or wrong credentials | Android: grant Nearby Wi‑Fi Devices (13+) or Fine Location (12L‑); iOS: accept hotspot‑join prompt |
| Sync stalls | Phone roams to another network | Stay near the Clip; temporarily disable auto‑connect to known networks |

#### Logging

The SDK logs via `SdkLog`. In the demo app, logs are printed to the terminal and to the on‑screen log panel. Bind a custom logger with:

```dart
SdkLog.bind((level, message, error, stack) {
  // handle log
});
```

---

## API Reference (Flutter SDK)

### 8. Overview & Architecture

The SenseCraft Voice SDKs communicate with a reSpeaker Clip device over **BLE** (AT/JSON commands + file download) and its **Wi‑Fi AP** (UDP binary file transfer). No API key or backend is required — the SDKs talk directly to the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/LayeredView_2.png" alt="Transcription interface" width={900} height="auto" /></p>

#### SDK parity

All three SDKs (Flutter, Android, iOS) expose the same capabilities:

| Capability | Flutter | Android | iOS |
|------------|---------|---------|-----|
| BLE scan/connect/disconnect | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` |
| MTU management | `MtuManager` | `MtuManager` | `MtuManager` |
| AT(JSON) transport | `AtTransport` | `AtTransport` | `AtTransport` |
| Recording control | `RecordingSession` | `RecordingSession` | `RecordingSession` |
| Device events/status | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` |
| BLE download + merge | `RecordingSession.download*` | `RecordingSession.download*` | `RecordingSession.download*` |
| Wi‑Fi hotspot control | `WifiHotspotConnector` | `WifiHotspotConnector` | `WifiHotspotConnector` |
| Wi‑Fi UDP transfer | `WifiTransferClient` | `WifiTransferClient` | `WifiTransferClient` |
| Wi‑Fi fast sync | `WifiFastSyncSession` | `WifiFastSyncSession` | `WifiFastSyncSession` |
| OTA firmware update | `OtaSession` | `OtaSession` | `OtaSession` |
| Permission facade | `SenseCraftVoiceBlePermissions` | `SenseCraftVoicePermissions` | `SenseCraftVoiceBlePermissions` |

#### SDK layer vs product layer

| Layer | Scope | In SDK |
|-------|-------|--------|
| Device protocol | BLE GATT, AT(JSON), UDP fast sync, OTA | **Yes** |
| High‑level session | `RecordingSession` start/stop/list/download | **Yes** |
| Product business | Recording DB, Portal JWT, transcription flow | **No** |

#### Platform requirements

| Platform | Constraints |
|----------|-------------|
| Flutter | Dart >=3.6.0, Flutter >=3.27.0, dependency: `flutter_blue_plus` ^1.36.1 |
| Android | API 24+, JDK 17, Android SDK 36, Kotlin 2.1.0 |
| iOS | iOS 13+, macOS 10.15+, Swift 5.9, CoreBluetooth + Network + optional `iOSMcuManagerLibrary` |

---

### 9. Cross‑cutting Protocol Constants

#### BLE GATT UUIDs

| Name | UUID | Purpose |
|------|------|---------|
| `clipAtService` | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | Primary service |
| `commandRxCharacteristic` | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | Write: AT commands |
| `responseTxCharacteristic` | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | Notify: JSON replies |
| `fileDataCharacteristic` | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | Notify: file‑data frames |
| `batteryService` | `0000180F-0000-1000-8000-00805F9B34FB` | Standard battery service |
| `batteryLevelCharacteristic` | `00002A19-0000-1000-8000-00805F9B34FB` | Battery level % |
| `deviceInfoService` | `0000180A-0000-1000-8000-00805F9B34FB` | Standard device info |
| `smpService` | `00001530-1212-EFDE-1523-785FEABCD123` | OTA SMP/mcumgr service |
| `smpCharacteristic` | `DA2E7828-FBCE-4E01-AE9E-261174997C48` | SMP characteristic |

#### BLE File‑data Frame Types

| Constant | Value | Meaning |
|----------|-------|---------|
| `kClipFrameData` | `0x01` | DATA frame: type(1) + seq(2 LE) + len(2 LE) + payload |
| `kClipFrameFileStart` | `0x10` | FILE_START: type(1) + nameLen(1) + name + size(4 LE) |
| `kClipFrameFileEnd` | `0x11` | FILE_END: type(1) + crc32(4 LE) |
| `kClipFrameTransferDone` | `0x12` | TRANSFER_DONE: type(1) + sessionIdLen(1) + id + fileCount(4 LE) |
| `kClipDataHeaderSize` | `5` | DATA header: type + seq + len |

#### UDP Frame Types

| Constant | Value | Meaning |
|----------|-------|---------|
| `FRAME_DATA` | `0x01` | File data chunk with CRC (Dart/Kotlin) / `frameData` (Swift) |
| `FRAME_FILE_ACK` | `0x03` | ACK(0x00) or NACK(0x01) |
| `FRAME_FILE_START` | `0x10` | Start of a file transfer |
| `FRAME_FILE_END` | `0x11` | End of a file with device CRC32 |
| `FRAME_TRANSFER_DONE` | `0x12` | Session transfer complete |
| `FRAME_AT_RESP` | `0x20` | AT command response (length‑prefixed JSON) |
| `FRAME_HEARTBEAT` | `0x30` | Keepalive with 4‑byte LE timestamp |
| UDP port | `8089` | Device AP default port |

#### AT Commands Reference

| AT Command | Response | Purpose |
|------------|----------|---------|
| `AT+VERSION` | `{"ok":true,"data":{"version":"..."}}` | Firmware version |
| `AT+TIME?` | `{"ok":true,"data":{"time":<unix_s>}}` | Read device time |
| `AT+TIME=<unix_s>` | `{"ok":true}` | Set device time |
| `AT+NAME?` | `{"ok":true,"data":{"name":"..."}}` | Read device name |
| `AT+NAME=<name>` | `{"ok":true}` | Set device name (1‑32 UTF‑8 bytes) |
| `AT+NAME=CLEAR` | `{"ok":true}` | Clear device name |
| `AT+GSTAT` | `{"ok":true,"data":{"state":"idle","battery":85,...}}` | Device status |
| `AT+PAIR?` | `{"ok":true,"data":{"status":"paired","addr":"..."}}` | Pairing status |
| `AT+PAIR=reset` | `{"ok":true}` | Reset pairing |
| `AT+START` | `{"ok":true,"data":{"session":"..."}}` | Start recording (normal mode) |
| `AT+START=enhanced` | `{"ok":true,"data":{"session":"..."}}` | Start recording (enhanced mode) |
| `AT+STOP` | `{"ok":true,"data":{"session":"...","duration":120,"file_count":5}}` | Stop recording |
| `AT+PAUSE` | `{"ok":true}` | Pause recording |
| `AT+RESUME` | `{"ok":true}` | Resume recording |
| `AT+MODE=normal|enhanced` | `{"ok":true,"data":{"mode":"..."}}` | Set recording mode |
| `AT+MARK[=<note>]` | `{"ok":true,"data":{"session":"...","count":3,"offset":45}}` | Add bookmark |
| `AT+LIST[=<sessionId>]` | `{"ok":true,"data":{"items":[...],"total":10}}` | List files |
| `AT+MARKS=<sessionId>[?<page>&<perPage>]` | `{"ok":true,"data":{"bookmarks":[...],"total":5}}` | List bookmarks |
| `AT+DOWNLOAD=<sessionId>[:<startFile>]` | Starts file‑data notify frames | Start file transfer |
| `AT+CANCEL` | `{"ok":true}` | Cancel recording or transfer |
| `AT+DELETE=<sessionId>` | `{"ok":true}` | Delete remote session |
| `AT+PURGE` | `{"ok":true}` | Delete all remote files |
| `AT+FACTORY=confirm` | `{"ok":true}` | Factory reset |
| `AT+WIFI?` | `{"ok":true,"data":{"ap_running":true,"ssid":"ClipAP_XXXX",...}}` | Query hotspot |
| `AT+WIFI=ON` | `{"ok":true,"data":{"ssid":"ClipAP_XXXX","password":"...",...}}` | Enable hotspot |
| `AT+WIFI=OFF` | `{"ok":true}` | Disable hotspot |
| `AT+LOG=off|info|debug` | `{"ok":true}` | Set SD log level |

---

### 10. Flutter SDK

**Package:** `sensecraft_voice` v0.1.0  
**Entry point:** `lib/sensecraft_voice.dart`

#### Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `flutter_blue_plus` | ^1.36.1 | BLE transport |
| `permission_handler` | ^11.4.0 | Runtime permissions |
| `mcumgr_flutter` | ^0.8.1 | OTA firmware update |
| `flutter_archive` | ^6.0.3 | ZIP extraction (OTA) |
| `path_provider` | ^2.1.5 | Temp dir for OTA |
| `uuid` | ^4.5.1 | Temp dir naming (OTA) |
| `crypto` | ^3.0.6 | SHA‑256/MD5 (OTA) |
| `wifi_iot` | ^0.3.19+1 | Wi‑Fi hotspot connect |
| `path` | ^1.9.0 | Path manipulation |

##### Re‑exported types from `flutter_blue_plus`

`BluetoothAdapterState`, `BluetoothBondState`, `BluetoothCharacteristic`, `BluetoothConnectionState`, `BluetoothDevice`, `Guid`, `ScanResult`

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/sequence.png" alt="Transcription interface" width={800} height="auto" /></p>

#### 10.1 BLE Layer

##### SenseCraftVoiceClient

Top‑level BLE manager: scan, connect, disconnect.

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

A live BLE link to a Clip device.

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

##### ClipFileData (parsing one BLE notify)

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

State machine for tracking BLE file download progress.

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

#### 10.2 AT Transport

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

#### 10.3 Session / Recording

##### RecordingSession

High‑level recording + device management API.

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

##### Recording result models

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

##### Download event & result models

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

#### 10.4 Wi‑Fi Hotspot & Transfer

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

##### Wi‑Fi network helpers

```dart
bool isDeviceApNetworkUnreachable(Object error);
bool isWifiUdpTransientSocketError(Object error);
bool isWifiApReachabilitySocketNoise(Object error, {StackTrace? stackTrace});
```

---

#### 10.5 OTA Firmware Update

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

> **Note:** `Image` is `mcumgr.Image` from the `mcumgr_flutter` package.

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

#### 10.6 Models & Utilities

##### Models

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

##### Device status & events

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

##### Session resume/merge helpers

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

##### Utilities

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




## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
