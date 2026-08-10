---
description: Referencia completa de la API para los SDK de SenseCraft Voice para reSpeaker Clip, que cubre Flutter, Android e iOS BLE, transporte AT/JSON, sesiones de grabación, transferencia por Wi‑Fi y actualización de firmware OTA.
title: reSpeaker Clip Voice SDK y referencia de API Crea tu propia app de voz con IA con Flutter SDK
keywords:
  - SenseCraft Voice SDK
  - reSpeaker Clip
  - BLE
  - Wi-Fi
  - OTA
  - Referencia de API
  - Flutter
slug: /respeaker_clip_sensecraft_voice_sdk
sku: 100020126
last_update:
  date: 08/07/2026
  author: Kasun Thushara
createdAt: '2026-08-07'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/es/respeaker_clip_sensecraft_voice_sdk/
---

## Tabla de contenidos

**Primeros pasos (Guía para desarrolladores)**
- [1. Descripción general](#1-descripción-general)
- [2. Requisitos previos](#2-requisitos-previos)
- [3. Verificación del entorno](#3-verificación-del-entorno)
- [4. Estructura del directorio del proyecto](#4-estructura-del-directorio-del-proyecto)
- [5. Ejecución de la app de ejemplo](#5-ejecución-de-la-app-de-ejemplo)
- [6. Uso de la app de demostración](#6-uso-de-la-app-de-demostración)
- [7. Solución de problemas](#7-solución-de-problemas)

**Referencia de API (Flutter SDK)**
- [8. Descripción general y arquitectura](#8-descripción-general-y-arquitectura)
- [9. Constantes de protocolo transversales](#9-constantes-de-protocolo-transversales)
- [10. Flutter SDK](#10-flutter-sdk)
  - [10.1 Capa BLE](#101-capa-ble)
  - [10.2 Transporte AT](#102-transporte-at)
  - [10.3 Sesión / Grabación](#103-sesión--grabación)
  - [10.4 Punto de acceso Wi‑Fi y transferencia](#104-punto-de-acceso-wi-fi-y-transferencia)
  - [10.5 Actualización de firmware OTA](#105-actualización-de-firmware-ota)
  - [10.6 Modelos y utilidades](#106-modelos-y-utilidades)

---

## Primeros pasos (Guía para desarrolladores)

### 1. Descripción general

El **SenseCraft Voice Flutter SDK** (`sensecraft_voice`) se comunica directamente con un dispositivo reSpeaker Clip mediante **BLE** (comandos AT/JSON + descarga de archivos) y su **AP Wi‑Fi** (transferencia de archivos binarios por UDP). No se requiere ninguna clave de API ni backend: el SDK se comunica directamente con el dispositivo.

La app de ejemplo en `sdk/flutter/example/` demuestra todas las funciones:
- **Escanear / Conectar**: descubre y empareja con un Clip
- **Grabar / Detener**: inicia/detiene grabaciones codificadas en Opus
- **Estado y versión**: lee la información del dispositivo, batería y espacio libre
- **Descarga por BLE**: obtiene grabaciones mediante tramas de transferencia de archivos por BLE
- **Sincronización por Wi‑Fi**: habilita el AP del dispositivo, conéctate desde el teléfono y transfiere por UDP (mucho más rápido)
- **Actualización OTA**: flashea firmware desde un paquete `.zip` o `.bin` usando SMP/mcumgr

---

### 2. Requisitos previos

- **Flutter 3.27+**: [Instalar Flutter](https://docs.flutter.dev/get-started/install)
- **Android Studio** (Ladybug 2024.2+) con Android SDK (API 35+) y Build‑Tools
- **JDK 17**: requerido para compilaciones de Android (consulta [Solución de problemas](#7-solución-de-problemas) si tienes una versión más reciente)
- **Dispositivo físico**: Android (API 24+) o iOS (13+) con Bluetooth y Wi‑Fi; **los emuladores no funcionan** para BLE/Wi‑Fi

> **Comprobación rápida:** `flutter doctor -v` debería mostrar todas las marcas verdes para las toolchains de Android / iOS.

---

### 3. Verificación del entorno

Ejecuta lo siguiente para asegurarte de que tu entorno está listo:

```bash
flutter doctor -v
```

Asegúrate de que:
- El SDK de Flutter está actualizado.
- La toolchain de Android está instalada y licenciada.
- Un dispositivo físico está conectado y reconocido (`flutter devices`).

Si el `Android toolchain` muestra advertencias, acepta las licencias de Android:

```bash
flutter doctor --android-licenses
```

---

### 4. Estructura del directorio del proyecto

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

La app de ejemplo depende del SDK mediante una **dependencia de ruta** en `sdk/flutter/example/pubspec.yaml`:

```yaml
dependencies:
  sensecraft_voice:
    path: ..
```

---

### 5. Ejecución de la app de ejemplo

### macOS / Linux

```bash
cd mobile/sdk/flutter/example
flutter pub get
flutter run
```

#### Pasos específicos para iOS (antes de `flutter run`)

1. Abre `ios/Runner.xcworkspace` en Xcode.
2. Selecciona el destino **Runner** → **Signing & Capabilities**.
3. Elige tu propio **Apple Developer Team** (el equipo de Seeed no está incluido).
4. Habilita la capacidad **Hotspot Configuration**.
5. Ejecuta desde la terminal con `flutter run`.

---

#### Windows: solución alternativa para distintas unidades

Si tu proyecto está en una unidad **distinta de C:\**, Gradle de Android puede fallar con `'other' has different root`.  
**Solución:** Copia la carpeta `example/` a tu unidad `C:\` y ajusta `pubspec.yaml` para usar una ruta absoluta al SDK.  
Consulta [Solución de problemas → Fallos de compilación](#fallos-de-compilación) para más detalles.

---

### 6. Uso de la app de demostración

#### 6.1 Primera conexión

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_2.jpg" alt="Interfaz de transcripción" width={400} height="auto" /></p>

1. Enciende el dispositivo Clip y asegúrate de que no esté conectado a otro teléfono.
2. Inicia la app: verás una lista de dispositivos vacía y un panel de registro.
3. Concede permisos de Bluetooth (y de Ubicación en Android 12L‑).
4. Toca **Scan**: la app encuentra dispositivos BLE con `"Clip"` en su nombre.
5. Toca un dispositivo detectado para conectarte. Acepta la solicitud de emparejamiento si aparece.
6. Espera a que el registro muestre `Connected. MTU=185`: el canal AT está listo.

#### 6.2 Referencia de botones (después de la conexión)

| Botón | Comando AT | Acción |
|--------|------------|--------|
| **Version** | `AT+VERSION` | Muestra la versión del firmware |
| **Status** | `AT+GSTAT` | Muestra batería, espacio libre y estado de grabación |
| **Record** | `AT+START` | Inicia una nueva grabación (modo normal) |
| **Stop** | `AT+STOP` | Detiene la grabación; se muestran el ID de sesión y el número de archivos |
| **List** | `AT+LIST` | Lista los archivos grabados para la sesión actual |
| **BLE DL** | `AT+DOWNLOAD` | Descarga la última sesión por BLE (más lento) |
| **WiFi sync** | `AT+WIFI=ON` + UDP | Habilita el AP, conecta el teléfono y transfiere por UDP (rápido) |
| **OTA** | SMP/mcumgr | Elige un archivo de firmware y flashea |
| **Disconnect** | – | Cierra BLE y restablece la interfaz de usuario |

> **Flujo de trabajo:** Grabar → Detener → **WiFi sync** (más rápido) o **BLE DL** (sin configuración de Wi‑Fi).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_1.jpg" alt="Interfaz de transcripción" width={400} height="auto" /></p>

---

### 7. Solución de problemas

#### Fallos de compilación

| Síntoma | Causa | Solución |
|---------|-------|-----|
| `java.lang.IllegalArgumentException: 25.0.2` | Java 25 instalado (demasiado reciente) | Instala JDK 17 y ejecuta `flutter config --jdk-dir="<path-to-jdk17>"` |
| `'other' has different root` | Proyecto en una unidad distinta de C: (Windows) | Copia `example/` a `C:\Users\<you>\clip_demo`; actualiza `pubspec.yaml` con la ruta absoluta al SDK |
| `Building with plugins requires symlink support` | Modo de desarrollador desactivado (Windows) | Settings → Privacy & Security → For Developers → activa **Developer Mode** |
| `Could not find com.android.tools.build:gradle:8.x` | Falta el Android SDK | Ejecuta `flutter doctor --android-licenses` y acepta todo |

#### Problemas de conexión

| Síntoma | Causa | Solución |
|---------|-------|-----|
| No aparece ningún Clip en el escaneo | Clip apagado / fuera de alcance / ya conectado | Apaga y enciende el Clip; mantente dentro de 2 m; desconecta otros dispositivos |
| Escaneo bloqueado | Permisos de Bluetooth denegados | Reinstala y concede todos los permisos; en Android 12L‑, asegúrate de que la Ubicación esté activada |
| El emparejamiento falla después del restablecimiento de fábrica | Enlace Bluetooth obsoleto | Elimina el enlace en la configuración de Bluetooth del sistema → vuelve a intentarlo |
| Los botones no hacen nada después de conectar | Canal AT no listo | Espera 2–3 s a que se estabilicen las notificaciones; prueba primero con **Version** |

#### Problemas de sincronización por Wi‑Fi

| Síntoma | Causa | Solución |
|---------|-------|-----|
| La sincronización falla inmediatamente | Grabación aún activa | Detén primero la grabación |
| El teléfono no consigue unirse al AP | Falta un permiso o credenciales incorrectas | Android: concede Nearby Wi‑Fi Devices (13+) o Fine Location (12L‑); iOS: acepta la solicitud para unirte al hotspot |
| La sincronización se detiene | El teléfono cambia a otra red | Permanece cerca del Clip; desactiva temporalmente la conexión automática a redes conocidas |

#### Registro (logging)

El SDK registra mediante `SdkLog`. En la app de demostración, los registros se imprimen en la terminal y en el panel de registro en pantalla. Vincula un registrador personalizado con:

```dart
SdkLog.bind((level, message, error, stack) {
  // handle log
});
```

---

## Referencia de API (Flutter SDK)

### 8. Descripción general y arquitectura

Los SDK de SenseCraft Voice se comunican con un dispositivo reSpeaker Clip mediante **BLE** (comandos AT/JSON + descarga de archivos) y su **AP Wi‑Fi** (transferencia de archivos binarios por UDP). No se requiere ninguna clave de API ni backend: los SDK se comunican directamente con el dispositivo.

#### Paridad entre SDK

Los tres SDK (Flutter, Android, iOS) exponen las mismas capacidades:

| Funcionalidad | Flutter | Android | iOS |
|------------|---------|---------|-----|
| Escanear/conectar/desconectar por BLE | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` |
| Gestión de MTU | `MtuManager` | `MtuManager` | `MtuManager` |
| Transporte AT(JSON) | `AtTransport` | `AtTransport` | `AtTransport` |
| Control de grabación | `RecordingSession` | `RecordingSession` | `RecordingSession` |
| Eventos/estado del dispositivo | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` |
| Descarga por BLE + combinación | `RecordingSession.download*` | `RecordingSession.download*` | `RecordingSession.download*` |
| Control del punto de acceso Wi‑Fi | `WifiHotspotConnector` | `WifiHotspotConnector` | `WifiHotspotConnector` |
| Transferencia UDP por Wi‑Fi | `WifiTransferClient` | `WifiTransferClient` | `WifiTransferClient` |
| Sincronización rápida por Wi‑Fi | `WifiFastSyncSession` | `WifiFastSyncSession` | `WifiFastSyncSession` |
| Actualización de firmware OTA | `OtaSession` | `OtaSession` | `OtaSession` |
| Fachada de permisos | `SenseCraftVoiceBlePermissions` | `SenseCraftVoicePermissions` | `SenseCraftVoiceBlePermissions` |

#### Capa de SDK vs capa de producto

| Capa | Alcance | En el SDK |
|-------|-------|--------|
| Protocolo del dispositivo | BLE GATT, AT(JSON), sincronización rápida por UDP, OTA | **Sí** |
| Sesión de alto nivel | Inicio/detención/listado/descarga de `RecordingSession` | **Sí** |
| Lógica de producto | Base de datos de grabaciones, Portal JWT, flujo de transcripción | **No** |

#### Requisitos de la plataforma

| Plataforma | Restricciones |
|----------|-------------|
| Flutter | Dart >=3.6.0, Flutter >=3.27.0, dependencia: `flutter_blue_plus` ^1.36.1 |
| Android | API 24+, JDK 17, Android SDK 36, Kotlin 2.1.0 |
| iOS | iOS 13+, macOS 10.15+, Swift 5.9, CoreBluetooth + Network + opcional `iOSMcuManagerLibrary` |

---

### 9. Constantes de protocolo transversales

#### UUIDs BLE GATT

| Nombre | UUID | Propósito |
|------|------|---------|
| `clipAtService` | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | Servicio primario |
| `commandRxCharacteristic` | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | Escritura: comandos AT |
| `responseTxCharacteristic` | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | Notificación: respuestas JSON |
| `fileDataCharacteristic` | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | Notificación: tramas de datos de archivo |
| `batteryService` | `0000180F-0000-1000-8000-00805F9B34FB` | Servicio de batería estándar |
| `batteryLevelCharacteristic` | `00002A19-0000-1000-8000-00805F9B34FB` | Nivel de batería % |
| `deviceInfoService` | `0000180A-0000-1000-8000-00805F9B34FB` | Información de dispositivo estándar |
| `smpService` | `00001530-1212-EFDE-1523-785FEABCD123` | Servicio OTA SMP/mcumgr |
| `smpCharacteristic` | `DA2E7828-FBCE-4E01-AE9E-261174997C48` | Característica SMP |

#### Tipos de tramas de datos de archivo BLE

| Constante | Valor | Significado |
|----------|-------|---------|
| `kClipFrameData` | `0x01` | Trama DATA: type(1) + seq(2 LE) + len(2 LE) + payload |
| `kClipFrameFileStart` | `0x10` | FILE_START: type(1) + nameLen(1) + name + size(4 LE) |
| `kClipFrameFileEnd` | `0x11` | FILE_END: type(1) + crc32(4 LE) |
| `kClipFrameTransferDone` | `0x12` | TRANSFER_DONE: type(1) + sessionIdLen(1) + id + fileCount(4 LE) |
| `kClipDataHeaderSize` | `5` | Cabecera DATA: type + seq + len |

#### Tipos de tramas UDP

| Constante | Valor | Significado |
|----------|-------|---------|
| `FRAME_DATA` | `0x01` | Fragmento de datos de archivo con CRC (Dart/Kotlin) / `frameData` (Swift) |
| `FRAME_FILE_ACK` | `0x03` | ACK(0x00) o NACK(0x01) |
| `FRAME_FILE_START` | `0x10` | Inicio de una transferencia de archivo |
| `FRAME_FILE_END` | `0x11` | Fin de un archivo con CRC32 del dispositivo |
| `FRAME_TRANSFER_DONE` | `0x12` | Transferencia de sesión completada |
| `FRAME_AT_RESP` | `0x20` | Respuesta de comando AT (JSON con longitud prefijada) |
| `FRAME_HEARTBEAT` | `0x30` | Keepalive con marca de tiempo LE de 4 bytes |
| Puerto UDP | `8089` | Puerto predeterminado del AP del dispositivo |

#### Referencia de comandos AT

| Comando AT | Respuesta | Propósito |
|------------|----------|---------|
| `AT+VERSION` | `{"ok":true,"data":{"version":"..."}}` | Versión de firmware |
| `AT+TIME?` | `{"ok":true,"data":{"time":<unix_s>}}` | Leer hora del dispositivo |
| `AT+TIME=<unix_s>` | `{"ok":true}` | Establecer hora del dispositivo |
| `AT+NAME?` | `{"ok":true,"data":{"name":"..."}}` | Leer nombre del dispositivo |
| `AT+NAME=<name>` | `{"ok":true}` | Establecer nombre del dispositivo (1‑32 bytes UTF‑8) |
| `AT+NAME=CLEAR` | `{"ok":true}` | Borrar nombre del dispositivo |
| `AT+GSTAT` | `{"ok":true,"data":{"state":"idle","battery":85,...}}` | Estado del dispositivo |
| `AT+PAIR?` | `{"ok":true,"data":{"status":"paired","addr":"..."}}` | Estado de emparejamiento |
| `AT+PAIR=reset` | `{"ok":true}` | Restablecer emparejamiento |
| `AT+START` | `{"ok":true,"data":{"session":"..."}}` | Iniciar grabación (modo normal) |
| `AT+START=enhanced` | `{"ok":true,"data":{"session":"..."}}` | Iniciar grabación (modo mejorado) |
| `AT+STOP` | `{"ok":true,"data":{"session":"...","duration":120,"file_count":5}}` | Detener grabación |
| `AT+PAUSE` | `{"ok":true}` | Pausar grabación |
| `AT+RESUME` | `{"ok":true}` | Reanudar grabación |
| `AT+MODE=normal|enhanced` | `{"ok":true,"data":{"mode":"..."}}` | Establecer modo de grabación |
| `AT+MARK[=<note>]` | `{"ok":true,"data":{"session":"...","count":3,"offset":45}}` | Añadir marcador |
| `AT+LIST[=<sessionId>]` | `{"ok":true,"data":{"items":[...],"total":10}}` | Listar archivos |
| `AT+MARKS=<sessionId>[?<page>&<perPage>]` | `{"ok":true,"data":{"bookmarks":[...],"total":5}}` | Listar marcadores |
| `AT+DOWNLOAD=<sessionId>[:<startFile>]` | Starts file‑data notify frames | Iniciar transferencia de archivos |
| `AT+CANCEL` | `{"ok":true}` | Cancelar grabación o transferencia |
| `AT+DELETE=<sessionId>` | `{"ok":true}` | Eliminar sesión remota |
| `AT+PURGE` | `{"ok":true}` | Eliminar todos los archivos remotos |
| `AT+FACTORY=confirm` | `{"ok":true}` | Restablecimiento de fábrica |
| `AT+WIFI?` | `{"ok":true,"data":{"ap_running":true,"ssid":"ClipAP_XXXX",...}}` | Consultar punto de acceso |
| `AT+WIFI=ON` | `{"ok":true,"data":{"ssid":"ClipAP_XXXX","password":"...",...}}` | Habilitar punto de acceso |
| `AT+WIFI=OFF` | `{"ok":true}` | Deshabilitar punto de acceso |
| `AT+LOG=off|info|debug` | `{"ok":true}` | Establecer nivel de registro en SD |

---

### 10. SDK de Flutter

**Paquete:** `sensecraft_voice` v0.1.0  
**Punto de entrada:** `lib/sensecraft_voice.dart`

#### Dependencias

| Paquete | Versión | Propósito |
|---------|---------|---------|
| `flutter_blue_plus` | ^1.36.1 | Transporte BLE |
| `permission_handler` | ^11.4.0 | Permisos en tiempo de ejecución |
| `mcumgr_flutter` | ^0.8.1 | Actualización de firmware OTA |
| `flutter_archive` | ^6.0.3 | Extracción ZIP (OTA) |
| `path_provider` | ^2.1.5 | Directorio temporal para OTA |
| `uuid` | ^4.5.1 | Nombres de directorio temporal (OTA) |
| `crypto` | ^3.0.6 | SHA‑256/MD5 (OTA) |
| `wifi_iot` | ^0.3.19+1 | Conexión a hotspot Wi‑Fi |
| `path` | ^1.9.0 | Manipulación de rutas |

##### Tipos reexportados de `flutter_blue_plus`

`BluetoothAdapterState`, `BluetoothBondState`, `BluetoothCharacteristic`, `BluetoothConnectionState`, `BluetoothDevice`, `Guid`, `ScanResult`

---

#### 10.1 Capa BLE

##### SenseCraftVoiceClient

Gestor BLE de nivel superior: escanear, conectar, desconectar.

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

Un enlace BLE activo a un dispositivo Clip.

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

##### ClipFileData (análisis de una notificación BLE)

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

Máquina de estados para seguir el progreso de descarga de archivos por BLE.

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

#### 10.2 Transporte AT

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

#### 10.3 Sesión / Grabación

##### RecordingSession

API de alto nivel para grabación y gestión de dispositivos.

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

##### Modelos de resultados de grabación

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

##### Modelos de eventos y resultados de descarga

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

#### 10.4 Punto de acceso Wi‑Fi y transferencia

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

##### Utilidades de red Wi‑Fi

```dart
bool isDeviceApNetworkUnreachable(Object error);
bool isWifiUdpTransientSocketError(Object error);
bool isWifiApReachabilitySocketNoise(Object error, {StackTrace? stackTrace});
```

---

#### 10.5 Actualización de firmware OTA

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

> **Nota:** `Image` es `mcumgr.Image` del paquete `mcumgr_flutter`.

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

#### 10.6 Modelos y utilidades

##### Modelos

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

##### Estado y eventos del dispositivo

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

##### Utilidades para reanudar/fusionar sesiones

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

##### Utilidades

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




## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
