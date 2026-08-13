---
description: 完整的 SenseCraft Voice SDK（适用于 reSpeaker Clip）的 API 参考，涵盖 Flutter、Android 和 iOS BLE、AT/JSON 传输、录音会话、Wi‑Fi 传输以及 OTA 固件更新。
title: reSpeaker Clip Voice SDK 与 API 参考 使用 Flutter SDK 构建你的 AI 语音应用
keywords:
  - SenseCraft Voice SDK
  - reSpeaker Clip
  - BLE
  - Wi-Fi
  - OTA
  - API 参考
  - Flutter
slug: /respeaker_clip_sensecraft_voice_sdk
sku: 100020126
last_update:
  date: 08/07/2026
  author: Kasun Thushara
createdAt: '2026-08-07'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_sensecraft_voice_sdk/
---

## 目录

**快速开始（开发者指南）**
- [1. 概述](#1-概述)
- [2. 前置条件](#2-前置条件)
- [3. 环境验证](#3-环境验证)
- [4. 项目目录结构](#4-项目目录结构)
- [5. 运行示例应用](#5-运行示例应用)
- [6. 使用演示应用](#6-使用演示应用)
- [7. 故障排查](#7-故障排查)

**API 参考（Flutter SDK）**
- [8. 概览与架构](#8-概览-架构)
- [9. 跨层协议常量](#9-跨层-协议-常量)
- [10. Flutter SDK](#10-flutter-sdk)
  - [10.1 BLE 层](#101-ble-层)
  - [10.2 AT 传输](#102-at-传输)
  - [10.3 会话 / 录音](#103-会话-录音)
  - [10.4 Wi‑Fi 热点与传输](#104-wi-fi-热点-传输)
  - [10.5 OTA 固件更新](#105-ota-固件-更新)
  - [10.6 模型与工具](#106-模型-工具)

---

## 快速开始（开发者指南）

### 1. 概述

**SenseCraft Voice Flutter SDK**（`sensecraft_voice`）通过 **BLE**（AT/JSON 命令 + 文件下载）以及设备的 **Wi‑Fi AP**（UDP 二进制文件传输）直接与 reSpeaker Clip 设备通信。无需 API 密钥或后端 —— SDK 直接与设备对话。

`sdk/flutter/example/` 中的示例应用演示了所有功能：
- **扫描 / 连接** – 发现并与 Clip 配对
- **录音 / 停止** – 启动/停止 Opus 编码录音
- **状态与版本** – 读取设备信息、电量、可用空间
- **BLE 下载** – 通过 BLE 文件传输帧获取录音
- **Wi‑Fi 同步** – 启用设备 AP，从手机连接并通过 UDP 传输（速度更快）
- **OTA 更新** – 使用 SMP/mcumgr 从 `.zip` 或 `.bin` 包刷写固件

---

### 2. 前置条件

- **Flutter 3.27+** – [安装 Flutter](https://docs.flutter.dev/get-started/install)
- **Android Studio**（Ladybug 2024.2+），包含 Android SDK（API 35+）和 Build‑Tools
- **JDK 17** – Android 构建所需（如果你安装了更高版本，请参见[故障排查](#7-故障排查)）
- **真实设备** – Android（API 24+）或 iOS（13+），支持蓝牙和 Wi‑Fi；**模拟器无法用于 BLE/Wi‑Fi**

> **快速检查：**`flutter doctor -v` 应该在 Android / iOS 工具链上全部显示绿色勾选。

---

### 3. 环境验证

运行以下命令以确保你的环境已就绪：

```bash
flutter doctor -v
```

请确保：
- Flutter SDK 为最新版本。
- Android 工具链已安装并完成授权。
- 已连接并识别到真实设备（`flutter devices`）。

如果 `Android toolchain` 显示警告，请接受 Android 许可：

```bash
flutter doctor --android-licenses
```

---

### 4. 项目目录结构

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

示例应用通过 `sdk/flutter/example/pubspec.yaml` 中的**路径依赖**来引用 SDK：

```yaml
dependencies:
  sensecraft_voice:
    path: ..
```

---

### 5. 运行示例应用

### macOS / Linux

```bash
cd mobile/sdk/flutter/example
flutter pub get
flutter run
```

#### iOS 特定步骤（在 `flutter run` 之前）

1. 在 Xcode 中打开 `ios/Runner.xcworkspace`。
2. 选择 **Runner** 目标 → **Signing & Capabilities**。
3. 选择你自己的 **Apple Developer Team**（不会提交 Seeed 团队）。
4. 启用 **Hotspot Configuration** 能力。
5. 在终端中使用 `flutter run` 运行。

---

#### Windows – 跨磁盘盘符解决方案

如果你的项目位于 **非 C:\** 的磁盘上，Android Gradle 可能会因 `'other' has different root` 而失败。  
**解决方案：**将 `example/` 文件夹复制到 `C:\` 盘，并在 `pubspec.yaml` 中将 SDK 路径改为绝对路径。  
详情参见[故障排查 → 构建失败](#构建失败)。

---

### 6. 使用演示应用

#### 6.1 首次连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_2.jpg" alt="转写界面" width={400} height="auto" /></p>

1. 打开 Clip 设备，并确保它未连接到其他手机。
2. 启动应用 —— 你会看到空的设备列表和日志面板。
3. 授予蓝牙权限（以及 Android 12L‑ 及以下版本上的位置信息权限）。
4. 点击 **Scan** —— 应用会发现名称中包含 `"Clip"` 的 BLE 设备。
5. 点击发现的设备进行连接。如出现配对提示，请接受。
6. 等待日志显示 `Connected. MTU=185` —— AT 通道已就绪。

#### 6.2 按钮参考（连接后）

| 按钮 | AT 命令 | 动作 |
|--------|------------|--------|
| **Version** | `AT+VERSION` | 显示固件版本 |
| **Status** | `AT+GSTAT` | 显示电量、可用空间、录音状态 |
| **Record** | `AT+START` | 启动新录音（普通模式） |
| **Stop** | `AT+STOP` | 停止录音；显示会话 ID 和文件数量 |
| **List** | `AT+LIST` | 列出当前会话的录音文件 |
| **BLE DL** | `AT+DOWNLOAD` | 通过 BLE 下载最近一次会话（较慢） |
| **WiFi sync** | `AT+WIFI=ON` + UDP | 启用 AP，手机加入，通过 UDP 传输（快速） |
| **OTA** | SMP/mcumgr | 选择固件文件并刷写 |
| **Disconnect** | – | 关闭 BLE 并重置界面 |

> **工作流：**录音 → 停止 → **WiFi sync**（最快）或 **BLE DL**（无需 Wi‑Fi 配置）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_1.jpg" alt="转写界面" width={400} height="auto" /></p>

---

### 7. 故障排查

#### 构建失败

| 症状 | 原因 | 解决方法 |
|---------|-------|-----|
| `java.lang.IllegalArgumentException: 25.0.2` | 安装了 Java 25（版本过新） | 安装 JDK 17 并运行 `flutter config --jdk-dir="<path-to-jdk17>"` |
| `'other' has different root` | 项目位于非 C: 磁盘（Windows） | 将 `example/` 复制到 `C:\Users\<you>\clip_demo`；在 `pubspec.yaml` 中使用指向 SDK 的绝对路径 |
| `Building with plugins requires symlink support` | 未开启开发者模式（Windows） | Settings → Privacy & Security → For Developers → 打开 **Developer Mode** |
| `Could not find com.android.tools.build:gradle:8.x` | 缺少 Android SDK | 运行 `flutter doctor --android-licenses` 并接受所有许可 |

#### 连接问题

| 症状 | 原因 | 解决方法 |
|---------|-------|-----|
| 扫描中没有出现 Clip | Clip 关闭 / 超出范围 / 已连接到其他设备 | 重新上电 Clip；保持在 2 m 范围内；断开其他设备连接 |
| 扫描卡住 | 拒绝了蓝牙权限 | 重新安装并授予所有权限；在 Android 12L‑ 上确保位置服务已开启 |
| 恢复出厂设置后配对失败 | 过期的蓝牙绑定 | 在系统蓝牙设置中删除绑定 → 重试 |
| 连接后按钮无反应 | AT 通道尚未就绪 | 等待 2–3 秒以便通知稳定；先尝试 **Version** 按钮 |

#### Wi‑Fi 同步问题

| 症状 | 原因 | 解决方法 |
|---------|-------|-----|
| 同步立即失败 | 录音仍在进行中 | 先停止录音 |
| 手机无法加入 AP | 缺少权限或凭据错误 | Android：授予 Nearby Wi‑Fi Devices（13+）或 Fine Location（12L‑）；iOS：接受加入热点的弹窗 |
| 同步卡住 | 手机漫游到其他网络 | 靠近 Clip；临时关闭对已知网络的自动连接 |

#### 日志记录

SDK 通过 `SdkLog` 输出日志。在演示应用中，日志会打印到终端并显示在屏幕上的日志面板。你可以绑定自定义日志记录器：

```dart
SdkLog.bind((level, message, error, stack) {
  // handle log
});
```

---

## API 参考（Flutter SDK）

### 8. 概览与架构

SenseCraft Voice SDK 通过 **BLE**（AT/JSON 命令 + 文件下载）以及设备的 **Wi‑Fi AP**（UDP 二进制文件传输）与 reSpeaker Clip 设备通信。无需 API 密钥或后端 —— SDK 直接与设备对话。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/LayeredView_2.png" alt="转写界面" width={900} height="auto" /></p>

#### SDK 对齐情况

三个 SDK（Flutter、Android、iOS）都提供相同的能力：

| 能力 | Flutter | Android | iOS |
|------------|---------|---------|-----|
| BLE 扫描/连接/断开 | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` |
| MTU 管理 | `MtuManager` | `MtuManager` | `MtuManager` |
| AT(JSON) 传输 | `AtTransport` | `AtTransport` | `AtTransport` |
| 录音控制 | `RecordingSession` | `RecordingSession` | `RecordingSession` |
| 设备事件/状态 | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` |
| BLE 下载与合并 | `RecordingSession.download*` | `RecordingSession.download*` | `RecordingSession.download*` |
| Wi‑Fi 热点控制 | `WifiHotspotConnector` | `WifiHotspotConnector` | `WifiHotspotConnector` |
| Wi‑Fi UDP 传输 | `WifiTransferClient` | `WifiTransferClient` | `WifiTransferClient` |
| Wi‑Fi 快速同步 | `WifiFastSyncSession` | `WifiFastSyncSession` | `WifiFastSyncSession` |
| OTA 固件更新 | `OtaSession` | `OtaSession` | `OtaSession` |
| 权限门面 | `SenseCraftVoiceBlePermissions` | `SenseCraftVoicePermissions` | `SenseCraftVoiceBlePermissions` |

#### SDK 层与产品层

| 层级 | 范围 | 是否在 SDK 中 |
|-------|-------|--------|
| 设备协议 | BLE GATT、AT(JSON)、UDP 快速同步、OTA | **是** |
| 高层会话 | `RecordingSession` 启动/停止/列出/下载 | **是** |
| 产品业务 | 录音数据库、Portal JWT、转写流程 | **否** |

#### 平台要求

| 平台 | 约束条件 |
|----------|-------------|
| Flutter | Dart >=3.6.0，Flutter >=3.27.0，依赖：`flutter_blue_plus` ^1.36.1 |
| Android | API 24+，JDK 17，Android SDK 36，Kotlin 2.1.0 |
| iOS | iOS 13+，macOS 10.15+，Swift 5.9，CoreBluetooth + Network + 可选 `iOSMcuManagerLibrary` |

---

### 9. 跨层协议常量

#### BLE GATT UUID

| 名称 | UUID | 用途 |
|------|------|---------|
| `clipAtService` | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | 主服务 |
| `commandRxCharacteristic` | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | 写入：AT 命令 |
| `responseTxCharacteristic` | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | 通知：JSON 回复 |
| `fileDataCharacteristic` | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | 通知：文件数据帧 |
| `batteryService` | `0000180F-0000-1000-8000-00805F9B34FB` | 标准电池服务 |
| `batteryLevelCharacteristic` | `00002A19-0000-1000-8000-00805F9B34FB` | 电池电量 % |
| `deviceInfoService` | `0000180A-0000-1000-8000-00805F9B34FB` | 标准设备信息 |
| `smpService` | `00001530-1212-EFDE-1523-785FEABCD123` | OTA SMP/mcumgr 服务 |
| `smpCharacteristic` | `DA2E7828-FBCE-4E01-AE9E-261174997C48` | SMP 特征值 |

#### BLE 文件数据帧类型

| 常量 | 值 | 含义 |
|----------|-------|---------|
| `kClipFrameData` | `0x01` | 数据帧：type(1) + seq(2 LE) + len(2 LE) + payload |
| `kClipFrameFileStart` | `0x10` | FILE_START：type(1) + nameLen(1) + name + size(4 LE) |
| `kClipFrameFileEnd` | `0x11` | FILE_END：type(1) + crc32(4 LE) |
| `kClipFrameTransferDone` | `0x12` | TRANSFER_DONE：type(1) + sessionIdLen(1) + id + fileCount(4 LE) |
| `kClipDataHeaderSize` | `5` | 数据头：type + seq + len |

#### UDP 帧类型

| 常量 | 值 | 含义 |
|----------|-------|---------|
| `FRAME_DATA` | `0x01` | 带 CRC 的文件数据块（Dart/Kotlin）/ `frameData`（Swift） |
| `FRAME_FILE_ACK` | `0x03` | ACK(0x00) 或 NACK(0x01) |
| `FRAME_FILE_START` | `0x10` | 文件传输开始 |
| `FRAME_FILE_END` | `0x11` | 带设备 CRC32 的文件结束 |
| `FRAME_TRANSFER_DONE` | `0x12` | 会话传输完成 |
| `FRAME_AT_RESP` | `0x20` | AT 命令响应（长度前缀 JSON） |
| `FRAME_HEARTBEAT` | `0x30` | 携带 4 字节 LE 时间戳的保活包 |
| UDP 端口 | `8089` | 设备 AP 默认端口 |

#### AT 命令参考

| AT 命令 | 响应 | 用途 |
|------------|----------|---------|
| `AT+VERSION` | `{"ok":true,"data":{"version":"..."}}` | 固件版本 |
| `AT+TIME?` | `{"ok":true,"data":{"time":<unix_s>}}` | 读取设备时间 |
| `AT+TIME=<unix_s>` | `{"ok":true}` | 设置设备时间 |
| `AT+NAME?` | `{"ok":true,"data":{"name":"..."}}` | 读取设备名称 |
| `AT+NAME=<name>` | `{"ok":true}` | 设置设备名称（1‑32 个 UTF‑8 字节） |
| `AT+NAME=CLEAR` | `{"ok":true}` | 清除设备名称 |
| `AT+GSTAT` | `{"ok":true,"data":{"state":"idle","battery":85,...}}` | 设备状态 |
| `AT+PAIR?` | `{"ok":true,"data":{"status":"paired","addr":"..."}}` | 配对状态 |
| `AT+PAIR=reset` | `{"ok":true}` | 重置配对 |
| `AT+START` | `{"ok":true,"data":{"session":"..."}}` | 开始录制（普通模式） |
| `AT+START=enhanced` | `{"ok":true,"data":{"session":"..."}}` | 开始录制（增强模式） |
| `AT+STOP` | `{"ok":true,"data":{"session":"...","duration":120,"file_count":5}}` | 停止录制 |
| `AT+PAUSE` | `{"ok":true}` | 暂停录制 |
| `AT+RESUME` | `{"ok":true}` | 恢复录制 |
| `AT+MODE=normal|enhanced` | `{"ok":true,"data":{"mode":"..."}}` | 设置录制模式 |
| `AT+MARK[=<note>]` | `{"ok":true,"data":{"session":"...","count":3,"offset":45}}` | 添加书签 |
| `AT+LIST[=<sessionId>]` | `{"ok":true,"data":{"items":[...],"total":10}}` | 列出文件 |
| `AT+MARKS=<sessionId>[?<page>&<perPage>]` | `{"ok":true,"data":{"bookmarks":[...],"total":5}}` | 列出书签 |
| `AT+DOWNLOAD=<sessionId>[:<startFile>]` | 开始文件数据通知帧 | 开始文件传输 |
| `AT+CANCEL` | `{"ok":true}` | 取消录制或传输 |
| `AT+DELETE=<sessionId>` | `{"ok":true}` | 删除远程会话 |
| `AT+PURGE` | `{"ok":true}` | 删除所有远程文件 |
| `AT+FACTORY=confirm` | `{"ok":true}` | 恢复出厂设置 |
| `AT+WIFI?` | `{"ok":true,"data":{"ap_running":true,"ssid":"ClipAP_XXXX",...}}` | 查询热点 |
| `AT+WIFI=ON` | `{"ok":true,"data":{"ssid":"ClipAP_XXXX","password":"...",...}}` | 启用热点 |
| `AT+WIFI=OFF` | `{"ok":true}` | 禁用热点 |
| `AT+LOG=off|info|debug` | `{"ok":true}` | 设置 SD 日志级别 |

---

### 10. Flutter SDK

**包：** `sensecraft_voice` v0.1.0  
**入口：** `lib/sensecraft_voice.dart`

#### 依赖

| 包 | 版本 | 用途 |
|---------|---------|---------|
| `flutter_blue_plus` | ^1.36.1 | BLE 传输 |
| `permission_handler` | ^11.4.0 | 运行时权限 |
| `mcumgr_flutter` | ^0.8.1 | OTA 固件更新 |
| `flutter_archive` | ^6.0.3 | ZIP 解压（OTA） |
| `path_provider` | ^2.1.5 | OTA 临时目录 |
| `uuid` | ^4.5.1 | OTA 临时目录命名 |
| `crypto` | ^3.0.6 | SHA‑256/MD5（OTA） |
| `wifi_iot` | ^0.3.19+1 | Wi‑Fi 热点连接 |
| `path` | ^1.9.0 | 路径操作 |

##### 从 `flutter_blue_plus` 再导出的类型

`BluetoothAdapterState`, `BluetoothBondState`, `BluetoothCharacteristic`, `BluetoothConnectionState`, `BluetoothDevice`, `Guid`, `ScanResult`

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/sequence.png" alt="转写界面" width={800} height="auto" /></p>

#### 10.1 BLE 层

##### SenseCraftVoiceClient

顶层 BLE 管理器：扫描、连接、断开连接。

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

到 Clip 设备的一个活动 BLE 链路。

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

##### ClipFileData（解析一个 BLE 通知）

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

用于跟踪 BLE 文件下载进度的状态机。

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

#### 10.2 AT 传输

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

#### 10.3 会话 / 录制

##### RecordingSession

高级录制 + 设备管理 API。

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

##### 录制结果模型

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

##### 下载事件和结果模型

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

#### 10.4 Wi‑Fi 热点与传输

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

##### Wi‑Fi 网络辅助工具

```dart
bool isDeviceApNetworkUnreachable(Object error);
bool isWifiUdpTransientSocketError(Object error);
bool isWifiApReachabilitySocketNoise(Object error, {StackTrace? stackTrace});
```

---

#### 10.5 OTA 固件更新

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

#### 10.6 模型与实用工具

##### 模型

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

##### 设备状态与事件

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

##### 会话恢复/合并辅助工具

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

##### 实用工具

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
