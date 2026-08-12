---
description: Referência completa da API para os SenseCraft Voice SDKs para reSpeaker Clip, cobrindo Flutter, Android e iOS BLE, transporte AT/JSON, sessões de gravação, transferência via Wi‑Fi e atualização de firmware OTA.
title: reSpeaker Clip Voice SDK & Referência de API Crie seu próprio app de voz com IA usando o Flutter SDK
keywords:
  - SenseCraft Voice SDK
  - reSpeaker Clip
  - BLE
  - Wi-Fi
  - OTA
  - referência de API
  - Flutter
slug: /respeaker_clip_sensecraft_voice_sdk
sku: 100020126
last_update:
  date: 08/07/2026
  author: Kasun Thushara
createdAt: '2026-08-07'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_sensecraft_voice_sdk/
---

## Índice

**Primeiros passos (Guia do desenvolvedor)**
- [1. Visão geral](#1-visão-geral)
- [2. Pré-requisitos](#2-pré-requisitos)
- [3. Verificação do ambiente](#3-verificação-do-ambiente)
- [4. Estrutura do diretório do projeto](#4-estrutura-do-diretório-do-projeto)
- [5. Executando o app de exemplo](#5-executando-o-app-de-exemplo)
- [6. Usando o app de demonstração](#6-usando-o-app-de-demonstração)
- [7. Solução de problemas](#7-solução-de-problemas)

**Referência de API (Flutter SDK)**
- [8. Visão geral e arquitetura](#8-visão-geral-e-arquitetura)
- [9. Constantes de protocolo transversais](#9-constantes-de-protocolo-transversais)
- [10. Flutter SDK](#10-flutter-sdk)
  - [10.1 Camada BLE](#101-camada-ble)
  - [10.2 Transporte AT](#102-transporte-at)
  - [10.3 Sessão / Gravação](#103-sessão--gravação)
  - [10.4 Hotspot Wi‑Fi e transferência](#104-hotspot-wi-fi-e-transferência)
  - [10.5 Atualização de firmware OTA](#105-atualização-de-firmware-ota)
  - [10.6 Modelos e utilitários](#106-modelos-e-utilitários)

---

## Primeiros passos (Guia do desenvolvedor)

### 1. Visão geral

O **SenseCraft Voice Flutter SDK** (`sensecraft_voice`) se comunica diretamente com um dispositivo reSpeaker Clip via **BLE** (comandos AT/JSON + download de arquivos) e seu **AP Wi‑Fi** (transferência de arquivos binários via UDP). Nenhuma chave de API ou backend é necessária — o SDK fala diretamente com o dispositivo.

O app de exemplo em `sdk/flutter/example/` demonstra todos os recursos:
- **Scan / Connect** – descobre e faz par com um Clip
- **Record / Stop** – inicia/para gravações codificadas em Opus
- **Status & Version** – lê informações do dispositivo, bateria, espaço livre
- **BLE Download** – busca gravações via quadros de transferência de arquivos por BLE
- **Wi‑Fi Sync** – ativa o AP do dispositivo, conecta a partir do telefone e transfere via UDP (muito mais rápido)
- **OTA Update** – grava o firmware a partir de um pacote `.zip` ou `.bin` usando SMP/mcumgr

---

### 2. Pré-requisitos

- **Flutter 3.27+** – [Instale o Flutter](https://docs.flutter.dev/get-started/install)
- **Android Studio** (Ladybug 2024.2+) com Android SDK (API 35+) e Build‑Tools
- **JDK 17** – necessário para builds Android (veja [Solução de problemas](#7-solução-de-problemas) se você tiver uma versão mais recente)
- **Dispositivo físico** – Android (API 24+) ou iOS (13+) com Bluetooth e Wi‑Fi; **emuladores não funcionam** para BLE/Wi‑Fi

> **Verificação rápida:** `flutter doctor -v` deve mostrar todos os itens em verde para as toolchains de Android / iOS.

---

### 3. Verificação do ambiente

Execute o seguinte para garantir que seu ambiente está pronto:

```bash
flutter doctor -v
```

Certifique-se de que:
- O Flutter SDK está atualizado.
- A toolchain Android está instalada e licenciada.
- Um dispositivo físico está conectado e reconhecido (`flutter devices`).

Se o `Android toolchain` mostrar avisos, aceite as licenças do Android:

```bash
flutter doctor --android-licenses
```

---

### 4. Estrutura do diretório do projeto

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

O app de exemplo depende do SDK via uma **dependência de caminho** em `sdk/flutter/example/pubspec.yaml`:

```yaml
dependencies:
  sensecraft_voice:
    path: ..
```

---

### 5. Executando o app de exemplo

### macOS / Linux

```bash
cd mobile/sdk/flutter/example
flutter pub get
flutter run
```

#### Etapas específicas para iOS (antes de `flutter run`)

1. Abra `ios/Runner.xcworkspace` no Xcode.
2. Selecione o alvo **Runner** → **Signing & Capabilities**.
3. Escolha sua própria **Apple Developer Team** (a equipe da Seeed não está incluída).
4. Ative a capacidade **Hotspot Configuration**.
5. Execute a partir do terminal com `flutter run`.

---

#### Windows – solução alternativa para unidades diferentes

Se o seu projeto estiver em uma unidade **diferente de C:\**, o Gradle do Android pode falhar com `'other' has different root`.  
**Solução:** copie a pasta `example/` para sua unidade `C:\` e ajuste o `pubspec.yaml` para usar um caminho absoluto para o SDK.  
Veja [Solução de problemas → Falhas de build](#falhas-de-build) para detalhes.

---

### 6. Usando o app de demonstração

#### 6.1 Primeira conexão

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_2.jpg" alt="Interface de transcrição" width={400} height="auto" /></p>

1. Ligue o dispositivo Clip e certifique-se de que ele não está conectado a outro telefone.
2. Abra o app – você verá uma lista de dispositivos vazia e um painel de logs.
3. Conceda permissões de Bluetooth (e Localização no Android 12L‑).
4. Toque em **Scan** – o app encontra dispositivos BLE com `"Clip"` no nome.
5. Toque em um dispositivo encontrado para conectar. Aceite o prompt de pareamento se aparecer.
6. Aguarde até o log mostrar `Connected. MTU=185` – o canal AT está pronto.

#### 6.2 Referência dos botões (após a conexão)

| Botão | Comando AT | Ação |
|--------|------------|--------|
| **Version** | `AT+VERSION` | Mostrar versão do firmware |
| **Status** | `AT+GSTAT` | Mostrar bateria, espaço livre, estado de gravação |
| **Record** | `AT+START` | Iniciar uma nova gravação (modo normal) |
| **Stop** | `AT+STOP` | Parar a gravação; ID da sessão e contagem de arquivos exibidos |
| **List** | `AT+LIST` | Listar arquivos gravados para a sessão atual |
| **BLE DL** | `AT+DOWNLOAD` | Baixar a última sessão via BLE (mais lento) |
| **WiFi sync** | `AT+WIFI=ON` + UDP | Ativar AP, conectar o telefone e transferir via UDP (rápido) |
| **OTA** | SMP/mcumgr | Escolher um arquivo de firmware e gravá-lo |
| **Disconnect** | – | Fechar BLE e redefinir a interface |

> **Fluxo de trabalho:** Record → Stop → **WiFi sync** (mais rápido) ou **BLE DL** (sem configuração de Wi‑Fi).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/image_1.jpg" alt="Interface de transcrição" width={400} height="auto" /></p>

---

### 7. Solução de problemas

#### Falhas de build

| Sintoma | Causa | Correção |
|---------|-------|-----|
| `java.lang.IllegalArgumentException: 25.0.2` | Java 25 instalado (novo demais) | Instale o JDK 17 e execute `flutter config --jdk-dir="<path-to-jdk17>"` |
| `'other' has different root` | Projeto em unidade diferente de C: (Windows) | Copie `example/` para `C:\Users\<you>\clip_demo`; atualize o `pubspec.yaml` com o caminho absoluto para o SDK |
| `Building with plugins requires symlink support` | Modo de desenvolvedor desativado (Windows) | Settings → Privacy & Security → For Developers → ative o **Developer Mode** |
| `Could not find com.android.tools.build:gradle:8.x` | Android SDK ausente | Execute `flutter doctor --android-licenses` e aceite todas |

#### Problemas de conexão

| Sintoma | Causa | Correção |
|---------|-------|-----|
| Nenhum Clip aparece na varredura | Clip desligado / fora de alcance / já conectado | Desligue e ligue o Clip; mantenha dentro de 2 m; desconecte outros dispositivos |
| Varredura travada | Permissões de Bluetooth negadas | Reinstale e conceda todas as permissões; no Android 12L‑, certifique-se de que a Localização está ATIVADA |
| Pareamento falha após reset de fábrica | Vínculo Bluetooth obsoleto | Remova o vínculo nas configurações de Bluetooth do sistema → tente novamente |
| Botões não fazem nada após conectar | Canal AT não está pronto | Aguarde 2–3 s para as notificações estabilizarem; tente **Version** primeiro |

#### Problemas de sincronização via Wi‑Fi

| Sintoma | Causa | Correção |
|---------|-------|-----|
| Sincronização falha imediatamente | Gravação ainda ativa | Pare a gravação primeiro |
| Telefone não consegue entrar no AP | Permissão ausente ou credenciais incorretas | Android: conceda Nearby Wi‑Fi Devices (13+) ou Fine Location (12L‑); iOS: aceite o prompt para entrar no hotspot |
| Sincronização trava | Telefone muda para outra rede | Fique perto do Clip; desative temporariamente a conexão automática a redes conhecidas |

#### Log

O SDK registra logs via `SdkLog`. No app de demonstração, os logs são impressos no terminal e no painel de logs na tela. Vincule um logger personalizado com:

```dart
SdkLog.bind((level, message, error, stack) {
  // handle log
});
```

---

## Referência de API (Flutter SDK)

### 8. Visão geral e arquitetura

Os SenseCraft Voice SDKs se comunicam com um dispositivo reSpeaker Clip via **BLE** (comandos AT/JSON + download de arquivos) e seu **AP Wi‑Fi** (transferência de arquivos binários via UDP). Nenhuma chave de API ou backend é necessária — os SDKs falam diretamente com o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/LayeredView_2.png" alt="Interface de transcrição" width={900} height="auto" /></p>

#### Paridade entre SDKs

Todos os três SDKs (Flutter, Android, iOS) expõem as mesmas capacidades:

| Capacidade | Flutter | Android | iOS |
|------------|---------|---------|-----|
| Varredura/conexão/desconexão BLE | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` | `SenseCraftVoiceClient` |
| Gerenciamento de MTU | `MtuManager` | `MtuManager` | `MtuManager` |
| Transporte AT(JSON) | `AtTransport` | `AtTransport` | `AtTransport` |
| Controle de gravação | `RecordingSession` | `RecordingSession` | `RecordingSession` |
| Eventos/status do dispositivo | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` | `DeviceEvent`/`DeviceStatus` |
| Download BLE + mesclagem | `RecordingSession.download*` | `RecordingSession.download*` | `RecordingSession.download*` |
| Controle de hotspot Wi‑Fi | `WifiHotspotConnector` | `WifiHotspotConnector` | `WifiHotspotConnector` |
| Transferência UDP via Wi‑Fi | `WifiTransferClient` | `WifiTransferClient` | `WifiTransferClient` |
| Sincronização rápida via Wi‑Fi | `WifiFastSyncSession` | `WifiFastSyncSession` | `WifiFastSyncSession` |
| Atualização de firmware OTA | `OtaSession` | `OtaSession` | `OtaSession` |
| Fachada de permissões | `SenseCraftVoiceBlePermissions` | `SenseCraftVoicePermissions` | `SenseCraftVoiceBlePermissions` |

#### Camada do SDK vs camada de produto

| Camada | Escopo | No SDK |
|-------|-------|--------|
| Protocolo do dispositivo | BLE GATT, AT(JSON), sincronização rápida via UDP, OTA | **Sim** |
| Sessão de alto nível | `RecordingSession` start/stop/list/download | **Sim** |
| Lógica de produto | Banco de dados de gravações, Portal JWT, fluxo de transcrição | **Não** |

#### Requisitos da plataforma

| Plataforma | Restrições |
|----------|-------------|
| Flutter | Dart >=3.6.0, Flutter >=3.27.0, dependência: `flutter_blue_plus` ^1.36.1 |
| Android | API 24+, JDK 17, Android SDK 36, Kotlin 2.1.0 |
| iOS | iOS 13+, macOS 10.15+, Swift 5.9, CoreBluetooth + Network + opcional `iOSMcuManagerLibrary` |

---

### 9. Constantes de protocolo transversais

#### UUIDs BLE GATT

| Nome | UUID | Finalidade |
|------|------|---------|
| `clipAtService` | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | Serviço primário |
| `commandRxCharacteristic` | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | Escrita: comandos AT |
| `responseTxCharacteristic` | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | Notificação: respostas JSON |
| `fileDataCharacteristic` | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | Notificação: quadros de dados de arquivo |
| `batteryService` | `0000180F-0000-1000-8000-00805F9B34FB` | Serviço de bateria padrão |
| `batteryLevelCharacteristic` | `00002A19-0000-1000-8000-00805F9B34FB` | Nível de bateria % |
| `deviceInfoService` | `0000180A-0000-1000-8000-00805F9B34FB` | Informações de dispositivo padrão |
| `smpService` | `00001530-1212-EFDE-1523-785FEABCD123` | Serviço OTA SMP/mcumgr |
| `smpCharacteristic` | `DA2E7828-FBCE-4E01-AE9E-261174997C48` | Característica SMP |

#### Tipos de quadros de dados de arquivo BLE

| Constante | Valor | Significado |
|----------|-------|---------|
| `kClipFrameData` | `0x01` | Quadro DATA: type(1) + seq(2 LE) + len(2 LE) + payload |
| `kClipFrameFileStart` | `0x10` | FILE_START: type(1) + nameLen(1) + name + size(4 LE) |
| `kClipFrameFileEnd` | `0x11` | FILE_END: type(1) + crc32(4 LE) |
| `kClipFrameTransferDone` | `0x12` | TRANSFER_DONE: type(1) + sessionIdLen(1) + id + fileCount(4 LE) |
| `kClipDataHeaderSize` | `5` | Cabeçalho DATA: type + seq + len |

#### Tipos de quadros UDP

| Constante | Valor | Significado |
|----------|-------|---------|
| `FRAME_DATA` | `0x01` | Bloco de dados de arquivo com CRC (Dart/Kotlin) / `frameData` (Swift) |
| `FRAME_FILE_ACK` | `0x03` | ACK(0x00) ou NACK(0x01) |
| `FRAME_FILE_START` | `0x10` | Início de uma transferência de arquivo |
| `FRAME_FILE_END` | `0x11` | Fim de um arquivo com CRC32 do dispositivo |
| `FRAME_TRANSFER_DONE` | `0x12` | Transferência de sessão concluída |
| `FRAME_AT_RESP` | `0x20` | Resposta de comando AT (JSON com comprimento prefixado) |
| `FRAME_HEARTBEAT` | `0x30` | Keepalive com carimbo de data/hora LE de 4 bytes |
| Porta UDP | `8089` | Porta padrão do AP do dispositivo |

#### Referência de comandos AT

| Comando AT | Resposta | Finalidade |
|------------|----------|---------|
| `AT+VERSION` | `{"ok":true,"data":{"version":"..."}}` | Versão do firmware |
| `AT+TIME?` | `{"ok":true,"data":{"time":<unix_s>}}` | Ler hora do dispositivo |
| `AT+TIME=<unix_s>` | `{"ok":true}` | Definir hora do dispositivo |
| `AT+NAME?` | `{"ok":true,"data":{"name":"..."}}` | Ler nome do dispositivo |
| `AT+NAME=<name>` | `{"ok":true}` | Definir nome do dispositivo (1‑32 bytes UTF‑8) |
| `AT+NAME=CLEAR` | `{"ok":true}` | Limpar nome do dispositivo |
| `AT+GSTAT` | `{"ok":true,"data":{"state":"idle","battery":85,...}}` | Status do dispositivo |
| `AT+PAIR?` | `{"ok":true,"data":{"status":"paired","addr":"..."}}` | Status de pareamento |
| `AT+PAIR=reset` | `{"ok":true}` | Redefinir pareamento |
| `AT+START` | `{"ok":true,"data":{"session":"..."}}` | Iniciar gravação (modo normal) |
| `AT+START=enhanced` | `{"ok":true,"data":{"session":"..."}}` | Iniciar gravação (modo avançado) |
| `AT+STOP` | `{"ok":true,"data":{"session":"...","duration":120,"file_count":5}}` | Parar gravação |
| `AT+PAUSE` | `{"ok":true}` | Pausar gravação |
| `AT+RESUME` | `{"ok":true}` | Retomar gravação |
| `AT+MODE=normal|enhanced` | `{"ok":true,"data":{"mode":"..."}}` | Definir modo de gravação |
| `AT+MARK[=<note>]` | `{"ok":true,"data":{"session":"...","count":3,"offset":45}}` | Adicionar marcador |
| `AT+LIST[=<sessionId>]` | `{"ok":true,"data":{"items":[...],"total":10}}` | Listar arquivos |
| `AT+MARKS=<sessionId>[?<page>&<perPage>]` | `{"ok":true,"data":{"bookmarks":[...],"total":5}}` | Listar marcadores |
| `AT+DOWNLOAD=<sessionId>[:<startFile>]` | Inicia quadros de notificação de dados de arquivo | Iniciar transferência de arquivo |
| `AT+CANCEL` | `{"ok":true}` | Cancelar gravação ou transferência |
| `AT+DELETE=<sessionId>` | `{"ok":true}` | Excluir sessão remota |
| `AT+PURGE` | `{"ok":true}` | Excluir todos os arquivos remotos |
| `AT+FACTORY=confirm` | `{"ok":true}` | Restaurar configurações de fábrica |
| `AT+WIFI?` | `{"ok":true,"data":{"ap_running":true,"ssid":"ClipAP_XXXX",...}}` | Consultar hotspot |
| `AT+WIFI=ON` | `{"ok":true,"data":{"ssid":"ClipAP_XXXX","password":"...",...}}` | Ativar hotspot |
| `AT+WIFI=OFF` | `{"ok":true}` | Desativar hotspot |
| `AT+LOG=off|info|debug` | `{"ok":true}` | Definir nível de log no SD |

---

### 10. Flutter SDK

**Pacote:** `sensecraft_voice` v0.1.0  
**Ponto de entrada:** `lib/sensecraft_voice.dart`

#### Dependências

| Pacote | Versão | Finalidade |
|---------|---------|---------|
| `flutter_blue_plus` | ^1.36.1 | Transporte BLE |
| `permission_handler` | ^11.4.0 | Permissões em tempo de execução |
| `mcumgr_flutter` | ^0.8.1 | Atualização de firmware OTA |
| `flutter_archive` | ^6.0.3 | Extração ZIP (OTA) |
| `path_provider` | ^2.1.5 | Diretório temporário para OTA |
| `uuid` | ^4.5.1 | Nomeação de diretório temporário (OTA) |
| `crypto` | ^3.0.6 | SHA‑256/MD5 (OTA) |
| `wifi_iot` | ^0.3.19+1 | Conexão a hotspot Wi‑Fi |
| `path` | ^1.9.0 | Manipulação de caminhos |

##### Tipos reexportados de `flutter_blue_plus`

`BluetoothAdapterState`, `BluetoothBondState`, `BluetoothCharacteristic`, `BluetoothConnectionState`, `BluetoothDevice`, `Guid`, `ScanResult`

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-flutter/sequence.png" alt="Transcription interface" width={800} height="auto" /></p>

#### 10.1 Camada BLE

##### SenseCraftVoiceClient

Gerenciador BLE de alto nível: busca, conexão, desconexão.

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

Um link BLE ativo para um dispositivo Clip.

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

##### ClipFileData (analisando uma notificação BLE)

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

Máquina de estados para acompanhar o progresso do download de arquivos via BLE.

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

#### 10.3 Sessão / Gravação

##### RecordingSession

API de gerenciamento de dispositivo + gravação de alto nível.

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

##### Modelos de resultado de gravação

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

##### Modelos de evento e resultado de download

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

#### 10.4 Hotspot Wi‑Fi e Transferência

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

##### Auxiliares de rede Wi‑Fi

```dart
bool isDeviceApNetworkUnreachable(Object error);
bool isWifiUdpTransientSocketError(Object error);
bool isWifiApReachabilitySocketNoise(Object error, {StackTrace? stackTrace});
```

---

#### 10.5 Atualização de firmware OTA

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

> **Nota:** `Image` é `mcumgr.Image` do pacote `mcumgr_flutter`.

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

#### 10.6 Modelos e utilitários

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

##### Status e eventos do dispositivo

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

##### Auxiliares de retomada/mesclagem de sessão

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

##### Utilitários

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




## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
