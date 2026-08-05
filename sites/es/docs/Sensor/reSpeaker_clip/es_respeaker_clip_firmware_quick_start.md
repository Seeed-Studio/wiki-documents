---
description: "Ruta de extremo a extremo desde una máquina limpia hasta un reSpeaker Clip que arranca, graba y es controlable desde el SDK del host: la base antes de cualquier trabajo de firmware personalizado o asistido por IA, y cómo decidir si el trabajo de firmware es el camino correcto."
title: Introducción al SDK de firmware de reSpeaker Clip
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - primeros pasos
  - nRF5340
  - Zephyr
  - NCS
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_firmware_quick_start
sku: 100020126
last_update:
  date: 07/28/2026
  author: Ray
createdAt: '2026-07-28'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/es/respeaker_clip_firmware_quick_start/
---

# Introducción al SDK de firmware de reSpeaker Clip

Ruta de extremo a extremo desde una máquina limpia hasta un reSpeaker Clip que arranca, graba y es controlable desde el SDK del host: la base antes de cualquier trabajo de firmware personalizado o asistido por IA. También te indica si el trabajo de firmware es siquiera el camino correcto para tu tarea.

> **Dispositivo cerrado.** El Clip se envía en una carcasa sellada: los pads SWD/J-Link no son accesibles sin abrir la carcasa. **Los usuarios finales actualizan por USB o BLE**, nunca con una sonda. La programación por SWD que aparece a continuación es la ruta de *desarrollo* (unidades de banco con la carcasa retirada o un break-out de depuración).

## Introducción

El **SDK de firmware** es el firmware del lado del dispositivo basado en Zephyr RTOS sobre el Nordic nRF5340 (doble núcleo: núcleo de aplicación + núcleo de red). Es para desarrolladores que necesitan **modificar el comportamiento del lado del dispositivo**: la canalización de audio, la superficie de comandos AT o el servicio BLE GATT, el modelo de interacción de botón / OLED / háptico, la estrategia de energía o de puesta en producto, o la puesta en marcha de hardware personalizado.

El código fuente del firmware descargado es la referencia autorizada; la documentación solo lo resume. Cuando haya discrepancias, el código fuente prevalece.

## Elige la ruta de desarrollo correcta

No todas las tareas necesitan trabajo de firmware. Elige la ruta que coincida con tu objetivo:

| Quieres… | Usa esto | ¿Toca firmware? |
|---|---|---|
| Controlar la grabación y descargar archivos desde un host o teléfono | **SDK básico** ([sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/sdk/)) o **SDKs móviles** ([mobile/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/mobile/)) | No |
| Modificar la canalización de audio, AT/GATT, botón/OLED/háptico, energía o hardware | **SDK de firmware** (esta guía + la [Guía de desarrollo de firmware](./respeaker_clip_firmware_development_guide.md)) | Sí |
| Hacer que un agente de IA modifique el repositorio dentro de las restricciones reales del firmware | habilidad [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) | Sí |

El SDK básico y los SDKs móviles se comunican con el Clip por BLE y por el AP Wi-Fi del dispositivo y no requieren código fuente de firmware. Son la ruta admitida para la integración de aplicaciones.

**Fuera del alcance del firmware del dispositivo** (no esperes estas capacidades):

- **Transcripción en la nube / resumen con IA**: el Clip graba Opus en la tarjeta SD; la transcripción se ejecuta fuera del dispositivo. No hay una ruta de reconocimiento de voz en el propio dispositivo.
- **Transmisión de audio en tiempo real por BLE**: el enlace BLE transporta comandos AT, tramas de transferencia de archivos y solo una notificación de visualización de *nivel de energía* de audio. No transmite audio en vivo.

## Capacidades del firmware y límites de personalización

| Capacidad | ¿Implementado? | ¿Controlable desde el SDK básico/móvil? | ¿Personalizable por firmware? |
|---|---|---|---|
| Inicio/detención/pausa/reanudación/marcado de grabación | Sí (`AT+START/STOP/PAUSE/RESUME/MARK`) | Sí | Sí (`clip_event.c`, `button.c`) |
| Modo Normal/Enhanced | Sí (`AT+MODE=normal\|enhanced`, persistente) | Sí | Sí (`audio.c` + Kconfig por modo) |
| Bitrate/complejidad de Opus | Sí (Kconfig por modo) | No: solo en tiempo de compilación | Sí (Kconfig) |
| Supresión de ruido (SpeexDSP NS) | Parcial: solo Enhanced, valor predeterminado en el arranque, **sin AT en tiempo de ejecución** (se eliminó el `AT+NOISE` heredado) | No | Sí (Kconfig + `config.c`; añade un manejador AT para exponerlo en tiempo de ejecución) |
| Desreverberación | Parcial: solo Enhanced, valor predeterminado en el arranque, **sin AT en tiempo de ejecución** | No | Sí (Kconfig + `config.c`) |
| AGC | Sí: entero hecho a mano, siempre activado | No: no configurable | No: edita `audio.c` |
| Motor háptico | Sí (`haptic.c`), desactivado de forma predeterminada (`CONFIG_CLIP_HAPTIC_MOTOR_ENABLED=n`, pero `prj.conf` lo establece en `=y` para esta app) | No | Sí |
| Transferencia de archivos (BLE + Wi-Fi UDP) | Sí (`AT+DOWNLOAD/CANCEL`) | Sí | Sí (`transport.c`, `transfer.c`) |
| Flujo de audio en tiempo real por BLE | No (solo notificación de nivel de energía) | N/A | Fuera de alcance |

La lista completa de comandos AT registrados, tramas de protocolo, arquitectura, matriz de validación y detalles de producción/lanzamiento se encuentra en la [Guía de desarrollo de firmware](./respeaker_clip_firmware_development_guide.md); esta página solo resume lo que necesitas para empezar.

## Hechos sobre el modo de grabación y la canalización de audio

> La documentación antigua describe `MODE_NORMAL` como **estéreo**. Eso es incorrecto. Ambos modos graban en **mono**.

- **Ambos modos** graban en **mono** mediante una mezcla L+R. `clip_event.c` siempre llama a `audio_start_recording(AUDIO_MODE_MERGE)`. `MODE_NORMAL` **no** es estéreo: el nombre es heredado.
- **`MODE_NORMAL`** (predeterminado) = mezcla + una ruta DSP hecha a mano únicamente (mezcla alineada en retardo, filtro pasa-altos de 100 Hz, AGC entero, limitador suave). **Sin SpeexDSP.**
- **`MODE_ENHANCED`** = mezcla + supresión de ruido y desreverberación SpeexDSP, condicionadas por `mode == ENHANCED && noise_suppress > 0` (`audio.c:506`). Con `noise == 0`, Enhanced se comporta como Normal.
- El bitrate y la complejidad de Opus son **constantes Kconfig por modo** (`CLIP_NORMAL_*`/`CLIP_ENHANCED_*`), no configurables en tiempo de ejecución.
- Establece el modo con `AT+MODE=normal|enhanced` (persistente) o `AT+START mode=enhanced` (solo para la sesión, no persistente).

## Requisitos previos

| Herramienta | Por qué | Instalación |
|------|-----|---------|
| Código fuente de [NCS **v3.3.0**](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/index.html) | Árbol de código fuente de Zephyr + nRF + nrfxlib + mcuboot. **Se ha dejado de usar v3.2.1**: `main` necesita Kconfig exclusivos de v3.3.0 y no se compilará contra ella. | `west` (ver [Configurar NCS](#configurar-ncs-v330)) |
| Toolchain Zephyr SDK **0.16.4** | Compilador/depurador `arm-zephyr-eabi-gcc` para nRF5340 | instalación por separado (ver [Configurar NCS](#configurar-ncs-v330)) |
| `west` | Meta-herramienta de Zephyr (compilar/programar) | `pip install west` |
| [`nrfutil`](https://www.nordicsemi.com/Products/Development-tools/nrf-util) (≥ 8.x, con `device` + `mcu-manager`) | Reinicio después de programar; DFU por serie USB | Sitio de Nordic |
| Python **3.10+** | Herramientas de prueba/SDK en el host (`clip-cli`, `udp_sync`, `decode_opus`) | python.org |
| J-Link (opcional, solo desarrollo) | Programación SWD en una unidad de banco | SEGGER |

Instala las dependencias de las herramientas de Python una sola vez:

```sh
pip install -r applications/clip/tests/requirements.txt
```

## Obtén el código fuente

El repositorio es un **módulo Zephyr** (incluye su propia placa, controladores y bibliotecas mediante `zephyr/module.yml`). Clónalo en cualquier lugar y luego apunta el entorno NCS hacia él.

> **Base verificada.** Esta guía se dirige al tag de firmware **`v0.0.9`**, NCS **v3.3.0**, placa **`clip/nrf5340/cpuapp`**, en Ubuntu 24.04. Fija el mismo tag para una compilación reproducible, en lugar de clonar la rama `main` en movimiento:

```sh
git clone --branch v0.0.9 https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git describe --tags    # confirm: v0.0.9
```

**Hardware compatible:** reSpeaker Clip (nRF5340 + nRF7002 + PMIC NPM1300). Otras revisiones de placa no están cubiertas por esta guía.

## Configurar NCS v3.3.0

NCS v3.3.0 se instala como un **espacio de trabajo west**: el árbol de código fuente de NCS más un **toolchain Zephyr SDK** separado. Así es como la configuración de referencia lo instala.

> **No uses `nrfutil toolchain-manager`.** El binario `nrfutil` v6.1.7 en realidad no tiene los comandos `toolchain-manager`/`self-upgrade`, por lo que el paso de instalación de NCS del CI de firmware está roto actualmente (las ejecuciones de [`firmware.yml`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/.github/workflows/firmware.yml) están fallando). En su lugar, usa los pasos con west que aparecen a continuación. Si ya tienes NCS v3.3.0 (por ejemplo, instalado mediante nRF Connect for Desktop), salta a [Entrar en el entorno NCS](#entrar-en-el-entorno-ncs--registrar-este-repo-como-un-módulo).

### 1. Instalar dependencias de compilación + `west`

```sh
sudo apt install -y cmake ninja-build g++ make device-tree-compiler \
    python3 python3-pip git curl ca-certificates
sudo pip3 install --break-system-packages west
west --version          # expect west 1.x
```

### 2. Instalar el código fuente de NCS v3.3.0 (manifiesto west)

Esto crea el espacio de trabajo en `~/ncs/v3.3.0` y obtiene los módulos de NCS (zephyr, nrf, nrfxlib, mcuboot, HALs, crypto, …): alrededor de 2 GB desde GitHub.

```sh
west init -m https://github.com/nrfconnect/sdk-nrf --mr v3.3.0 ~/ncs/v3.3.0
cd ~/ncs/v3.3.0
west update
```

### 3. Instalar el toolchain Zephyr SDK (por separado)

El espacio de trabajo west proporciona el **código fuente**; el **compilador** viene del Zephyr SDK. Descarga la versión **0.16.4** desde las [releases de Zephyr SDK](https://github.com/zephyrproject-rtos/sdk/releases) (el artefacto `*_linux-x86_64.tar.xz`), extráelo y ejecuta su configuración una vez:

```sh
cd ~
tar xf zephyr-sdk-0.16.4_linux-x86_64.tar.xz     # you downloaded this
cd zephyr-sdk-0.16.4
./setup.sh                                        # registers toolchains + udev rules
# → compiler at ~/zephyr-sdk-0.16.4/arm-zephyr-eabi/bin/arm-zephyr-eabi-gcc
```

> **Acceso a dispositivos en Linux: `nrf-udev` + reglas udev de J-Link.** Para programar o reiniciar por USB/J-Link sin root, instala `nrf-udev` (el `.deb` de Nordic) y las reglas udev de SEGGER; de lo contrario, `/dev/ttyACMx` y las sondas J-Link solo estarán disponibles para root. Consulta los [requisitos previos de nRF Util](https://docs.nordicsemi.com/r/bundle/nrfutil/page/guides/installing.html/prerequisites).

### Entrar en el entorno NCS y registrar este repo como un módulo

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$PWD     # the reSpeaker_Clip checkout
```

> **Por qué `ZEPHYR_EXTRA_MODULES` es una variable de entorno y no una variable CMake `-D`.** El descubrimiento de módulos de Kconfig se ejecuta *antes* de que CMake se configure. Un `-D` llegaría demasiado tarde, por lo que Kconfig nunca vería la placa (`clip`), los controladores o las bibliotecas de este repositorio. Defínela en la misma shell desde la que compilas, o expórtala en el perfil de tu shell.

**Punto de control: tu entorno está listo cuando todo esto funciona correctamente:**

```sh
west --version                   # west 1.x
arm-zephyr-eabi-gcc --version    # (Zephyr SDK 0.16.4) gcc 12.x
python3 --version                # Python 3.10+
echo $ZEPHYR_BASE                # .../ncs/v3.3.0/zephyr
```

## Compilar el firmware estándar

```sh
west build --build-dir build-clip --board clip/nrf5340/cpuapp applications/clip
```

Para una recompilación completamente limpia (requerida después de cambios en los parches de MCUboot o un directorio de compilación obsoleto), añade `--pristine`:

```sh
west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

Este es un **sysbuild por defecto**: un solo comando produce el bootloader MCUboot firmado personalizado + el núcleo de aplicación + la imagen del controlador BLE del núcleo de red. La placa proporciona todo el pegamento de sysbuild; no se necesita ningún `sysbuild.conf` por aplicación.

> **Identificador de la placa**: `clip/nrf5340/cpuapp` — **no** `respeaker/...`.

> **Reproducibilidad — VM vs. dispositivo.** La ruta de instalación está dirigida a Ubuntu 24.04 con acceso real a la red (la descarga de varios GB de NCS necesita una conectividad fiable con GitHub: la red en modo usuario de una QEMU/VM tiene dificultades con ello). Una QEMU/VM puede ejecutar los *pasos de instalación y compilación* pero **no** sustituye a un dispositivo: QEMU no puede emular el nRF5340 de doble núcleo, el nRF7002, el micrófono PDM, la SD, la OLED, el PMIC ni el comportamiento real de USB/BLE. El flasheo, el transporte, el audio y la recuperación deben verificarse en un Clip real.

## Compilar la configuración de producción

La variante de bajo consumo: consola UART y los backends de registro FS/UART desactivados, reposo ≈170 µA (frente a la compilación de depuración, donde la consola fuga ~570 µA). Usa esto para compilaciones con batería/producción donde la corriente de la consola importa.

```sh
west build --build-dir build-clip-prod --board clip/nrf5340/cpuapp applications/clip \
  -- -DSNIPPET_ROOT=$(pwd)/applications/clip -DSNIPPET=production
```

`SNIPPET_ROOT` debe ser una ruta absoluta. El snippet `production` se encuentra en `applications/clip/snippets/production/`.

## Flashear y reiniciar

```sh
west flash --build-dir build-clip          # flash both cores
nrfutil device reset --serial-number <JLINK-SN>
```

> **`--serial-number` apunta a un J-Link específico.** Omítelo solo cuando haya un único dispositivo conectado: con varias sondas el simple `nrfutil device reset` es ambiguo. Encuentra el SN con `nrfutil device list` o impreso en la carcasa del J-Link.

Dos advertencias específicas de esta placa:

- **`west flash --reset` NO funciona** aquí. Siempre reinicia por separado con `nrfutil device reset`.
- **`--recover` borra ambos núcleos** (elimina el bloqueo del access-port del núcleo de red). Úsalo solo cuando el AP del núcleo de red esté bloqueado por `b0n` (por ejemplo, tras un arranque seguro previo), no como una opción rutinaria.

Los usuarios finales (carcasa puesta, sin sonda) se saltan por completo este paso y usan DFU por USB serie; consulta [Recover with USB Serial DFU](#recuperar-con-usb-serial-dfu) más abajo.

## Abrir la consola de depuración

```sh
minicom -D /dev/ttyACM0 -b 921600
```

Cuando también hay conectada una sonda J-Link, el J-Link toma `ttyACM0` y el puente UART0 del Clip pasa a `ttyACM1`; usa el puerto que sea el de "USB Single Serial" (no J-Link).

## Ejecutar la prueba básica (smoke test)

Criterios de éxito: el dispositivo arranca, responde a comandos AT por BLE, graba un archivo Opus válido y lo recupera por Wi‑Fi. Todas las respuestas AT son JSON: el éxito es `{"ok":true,"data":{...}}`, el fallo es `{"ok":false,"msg":"..."}`.

### Arranque y estado

La OLED se enciende y el dispositivo llega a IDLE. Confírmalo por cualquier canal AT:

```
AT+GSTAT        →  {"ok":true,"data":{"state":"IDLE","battery":..,"mode":..,...}}
AT+VERSION      →  {"ok":true,"data":{"version":"0.0.6",...}}
```

### Grabar → listar → descargar (por BLE)

`clip-cli.py` es la CLI unificada del host (BLE por defecto, también Wi‑Fi). Con el dispositivo anunciándose:

```sh
# status over BLE
python applications/clip/tests/tools/clip-cli.py status

# record ~5s, stop, list sessions
python applications/clip/tests/tools/clip-cli.py record --duration 5
python applications/clip/tests/tools/clip-cli.py list
```

`AT+LIST` debería mostrar la nueva sesión (ordenada de la más reciente a la más antigua). Recupera los archivos Opus por BLE y decodifica uno a WAV para confirmar que es audio válido:

```sh
python applications/clip/tests/tools/clip-cli.py sync --session <session_id>
python applications/clip/tests/tools/decode_opus.py recordings/<session_id>/0001.opus out.wav   # plays
```

### Descarga por Wi‑Fi (sincronización UDP, verificada con CRC32)

El dispositivo expone un AP Wi‑Fi una vez habilitado. Primero por BLE:

```
AT+WIFI=on     →  {"ok":true,"data":{"ssid":"ClipAP_XXXX",...}}
```

Luego, desde el host, únete al AP y sincroniza la sesión:

```sh
# SSID ClipAP_XXXX (last 4 hex of chip ID) · password 12345678 (default;
# becomes random after the first BLE pairing) · IP 192.168.4.1 · UDP 8089
python applications/clip/tests/tools/udp_sync.py --session <session_id>
```

Si las cuatro pasan — estado, grabación, listar/descargar con un archivo Opus decodificable y la descarga por Wi‑Fi — la línea base del firmware de serie es correcta.

## Exportar artefactos de compilación

Todavía no hay una exportación en un único zip: el `scripts/build_release.sh` activado por etiqueta
+ `.github/workflows/release.yml` aún no están implementados. Por ahora, compila ambas variantes y copia manualmente los cuatro artefactos de cada una:

```sh
VERSION=$(grep APP_VERSION_STRING build-clip/clip/zephyr/include/generated/zephyr/app_version.h | cut -d'"' -f2)
mkdir -p output/$VERSION

# Debug
cp build-clip/merged.hex            output/$VERSION/clip-$VERSION-debug-merged.hex
cp build-clip/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-debug-merged_CPUNET.hex
cp build-clip/dfu_application.zip   output/$VERSION/clip-$VERSION-debug-ota.zip
cp build-clip/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-debug-signed.bin
# Production
cp build-clip-prod/merged.hex            output/$VERSION/clip-$VERSION-production-merged.hex
cp build-clip-prod/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-production-merged_CPUNET.hex
cp build-clip-prod/dfu_application.zip   output/$VERSION/clip-$VERSION-production-ota.zip
cp build-clip-prod/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-production-signed.bin
```

Por cada versión: `*-merged.hex` / `*-merged_CPUNET.hex` (programador), `*-signed.bin` (DFU por USB serie), `*-ota.zip` (paquete multi‑imagen mcumgr por BLE/USB).

## Recuperar con USB Serial DFU

Si una compilación de banco dejó el dispositivo en mal estado, usa el **disparador USB a 1200 baudios**: sin sonda, sin abrir la carcasa. Cada app de clip lo lleva integrado (a nivel de placa, `lib/clip_usb_dfu`).

> **Recuperación de desarrollo vs. versión oficial.** Esto recupera a un `*-signed.bin` *autocompilado* que exportaste arriba. Un paquete de versión publicado y descargable (GitHub Releases + `scripts/build_release.sh`) **aún no está disponible**: "volver a la versión oficial" está pendiente de esa canalización. Hasta entonces, trata esto como la ruta de recuperación de desarrollo; no demuestra una versión pública.

1. La app de clip mantiene el USB apagado por defecto: envía primero `AT+USB=on` por BLE (las muestras y apps personalizadas con el CDC por defecto activan USB automáticamente, así que sáltate esto allí). Luego dispara la recuperación abriendo el puerto CDC‑ACM a 1200 baudios:

   ```sh
   python3 -c "import serial; s=serial.Serial('/dev/ttyACMx',1200); s.close()"
   ```

   (Mantener pulsado el botón de usuario mientras se conecta el USB también entra en modo de recuperación).

2. Aparece un nuevo puerto CDC‑ACM: **PID `0x8069`** (la app en ejecución es `0x0069`; el bit `0x8000` marca el modo bootloader; ambos con VID de Seeed `0x2886`). Sube la app de versión firmada y reinicia:

   ```sh
   nrfutil mcu-manager serial image-upload --firmware clip-<version>-signed.bin --serial-port /dev/ttyACMx
   nrfutil mcu-manager serial reset     --serial-port /dev/ttyACMx
   ```

MCUboot verifica la firma RSA y arranca la nueva app; la partición del bootloader nunca se toca. La guía completa (BLE OTA, la ruta del botón, `mcumgr`, nRF Connect, resolución de problemas) está en [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md).

## Dónde ir a continuación

- **Arquitectura del sistema, protocolo, actualización/recuperación, validación, producción** → [Firmware Development Guide](./respeaker_clip_firmware_development_guide.md) (la referencia completa).
- **Compilación / flasheo / alimentación / trampas (referencia completa)** → [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md).
- **Apps de ejemplo para copiar** → [samples/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/samples/).
- **Desarrollo asistido por IA** → [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) — carga esta skill en tu agente de IA. Su `SKILL.md` más nueve referencias ya codifican las restricciones reales del proyecto, incluyendo que **no existen comandos en tiempo de ejecución para bitrate, complejidad del códec, AGC, supresión de ruido ni desreverberación**: el modo de audio es solo `normal` o `enhanced`.

Una compilación de serie que arranca, graba y es controlable desde el SDK básico (`clip-cli` / app SenseCraft Voice) es el requisito previo para cualquier trabajo de firmware asistido por IA o personalizado en este repositorio.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
