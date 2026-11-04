---
description: "Conoce las funciones, opciones de compilación y relaciones de inicio de los servicios de producto de reCamera en el paquete de código fuente completo."
title: "Arquitectura del servicio de producto"
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
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_services/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Arquitectura del servicio de producto

Esta página describe las responsabilidades, lenguajes, opciones de compilación, métodos de inicio y puntos de entrada de personalización para las aplicaciones bajo `project/app/`. **Aquí es donde Seeed ha realizado las mayores adiciones al SDK original de Rockchip y donde con mayor frecuencia se lleva a cabo la personalización del producto.**

## Descripción general de los servicios

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

## Índice de aplicaciones y opciones de compilación

| Aplicación | Lenguaje | Opción de compilación de la placa | Descripción |
| --- | --- | --- | --- |
| `recamera_ipc` | C (CMake + protobuf) | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | Aplicación IPC de nivel de producto **principal** |
| `recamera_web` | React/Node + C/C++ | `RK_APP_RECAMERA_WEB=y` | Interfaz de configuración web (frontend + backend) |
| `recamera_services` | Rust | `RK_APP_RECAMERA_SERVICES=y` | Servicios del sistema que incluyen gmgr, skt2ws, tmir y rcisd |
| `recamera_notify` | Python | `RK_APP_RECAMERA_NOTIFY=y` | Notificaciones de inferencia de IA (MQTT/HTTP/UART/WebSocket) |
| `recamera_onvif` | C | `RK_APP_RECAMERA_ONVIF=y` | Implementación del protocolo ONVIF |
| `recamera_utils` | Shell / Python / C | Sin opción de compilación explícita | Pruebas de fábrica, herramientas de número de serie y pruebas de estrés |
| `rkai` | C++ (CMake) | Controlado por `RK_APP_TYPE` | Wrappers de RKAI (LLM/VLM) y ejemplos |
| `rkllm-inference` | C++ | `RK_APP_RKLLM_INFERENCE=y` | Demo de inferencia multimodal RKNN + RKLLM |
| `rkipc` | C | Implementación de referencia de Rockchip | Línea base upstream para `recamera_ipc` |
| `wifi_app` | C + código de terceros | `RK_ENABLE_WIFI=y` | wpa_supplicant / hostapd / bluez / GATT |
| `cvr` | C | — | Grabación en vehículo |
| `aov_sample` | C | — | Ejemplo de visión siempre activa y de bajo consumo (AOV) |
| `ao_record_demo` | C | `RK_APP_TYPE` incluye `RK_AO_RECORD_DEMO` | Demo de grabación de audio |
| `uvc_app_tiny` | C | — | Modo cámara UVC |
| `ipcweb` | Frontend y backend | — | Implementación web de referencia original de Rockchip |
| `testdemo` | C/C++ | — | `low_delay_net_display`、`yoloworld_demo` |
| `fastboot_client` | C | `RK_ENABLE_FASTBOOT` | Cliente Fastboot |
| `nginx_mk` | — | — | Empaquetado de nginx |
| `component/` | Mixto | — | Componentes comunes:`ao_record_service`、`fastboot_server`、`lvgl`、`rkadk`、`rkfsmk` |

`RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` es un identificador compuesto. Algunas aplicaciones (como `ao_record_demo`) usan `$(filter RK_XXX, $(RK_APP_TYPE))` para determinar si se compilan.

## recamera_ipc (Aplicación principal)

### Estructura

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

### Módulos common (mapa de funcionalidades)

El código de `project/app/recamera_ipc/common/` está organizado por funcionalidades. Usa esta tabla para encontrar el directorio correspondiente:

| Módulo | Responsabilidad |
| --- | --- |
| `audio/` | `audio.c` captura y codificación;`rkaudio_mp3.c` audio de aviso MP3 |
| `isp/` | Wrapper de rkaiq |
| `venc/` | Codificación de vídeo |
| `rtsp/` | Servicio RTSP interno (127.0.0.1:5554) |
| `rtmp/` | Streaming RTMP |
| `osd/` | Superposición de marca de tiempo/texto |
| `region_clip/`、`roi/` | Recorte de región y ROI |
| `rockiva/` | Integración del algoritmo ROCKIVA |
| `rc_infer/`、`rc_model/` | Framework de inferencia personalizado y gestión de modelos |
| `rc_notify/` | Envía resultados de inferencia a `recamera_notify` |
| `event/` | Sistema de eventos |
| `storage/` | Almacenamiento de grabaciones y gestión de tarjeta SD |
| `network/` | Configuración de red |
| `socket_server/` | Servicio de socket para el backend web y notify |
| `system/`、`sysutil/` | Información del sistema y funciones utilitarias |
| `param/` | Lectura/escritura de parámetros INI |
| `vendor_storage/` | Área de almacenamiento del proveedor (número de serie, dirección MAC y más) |
| `vigil/`、`vigil_device_support/` | Código relacionado con vigil (depende de protobuf y libblkid) |
| `player/` | Reproductor |
| `lvgl/`、`ui/` | Interfaz en pantalla (LVGL) |
| `uvc/` | Modo UVC |
| `ivm/` | Monitorización de vídeo inteligente |
| `gstreamer/` | Código relacionado con GStreamer |

### Inicio y parada

En el dispositivo, los scripts init generados llaman a estos comandos:

```bash
# sh /oem/usr/bin/RkLunch.sh         # Start
# sh /oem/usr/bin/RkLunch-stop.sh    # Stop
```

`RkLunch.sh` hace `source` de `/etc/profile.d/RkEnv.sh` y luego inicia rkipc y los procesos relacionados. **Para iniciar tu propia aplicación al arrancar, modifica primero este script** en lugar de añadir otro script init.

### Configuración

La configuración en tiempo de ejecución en el dispositivo es `/userdata/config/rkipc.ini` (en una partición escribible), inicialmente rellenada a partir de `rkipc-3840x2160.ini`. El script de inicio de go2rtc lee sus secciones `[video.0.rtsp]`、`[video.0.onvif]`、`[video.1.rtsp]` para determinar si expone el puerto 554.

Después de cambiar la configuración, reinicia rkipc y **reinicia también go2rtc** (su configuración se genera al inicio en `/tmp/go2rtc/go2rtc.yaml`):

```bash
# sh /oem/usr/bin/RkLunch-stop.sh && sh /oem/usr/bin/RkLunch.sh
# /oem/usr/etc/init.d/S50go2rtc restart
```

## recamera_services (servicios del sistema en Rust)

La siguiente información proviene de `recamera_services/README.md`:

| Componente | Propósito | Configuración |
| --- | --- | --- |
| **gmgr** | GPIO Manager; proporciona una API HTTP/WebSocket para control y monitorización de GPIO | `gmgr/config.json` |
| **skt2ws** | Puente Socket → WebSocket que reenvía datos de socket Unix (usado por `rkipc-record-events`) | `skt2ws/config.json` |
| **tmir** | TTY Mirror; multiplexa un puerto serie a un socket/WebSocket (refleja `ttyS4`) | `tmir/config.json` |
| **rcisd** | reCamera Intellisense daemon; pone en cola eventos y transfiere archivos | Sin configuración externa |

Otros directorios incluyen `inotify_passwd/` (vigila cambios en el archivo de contraseña), `key_factory/` (botón de fábrica), `led/` (control de LED) y `scripts/init.d/`.

### Compilación

```bash
cd project/app/recamera_services
make                                          # Default target: armv7-unknown-linux-gnueabihf
make SERVICE_TARGET=aarch64-unknown-linux-gnu # Use 64-bit for reCamera Pro
make gmgr                                     # Build one component
make clean && make help
```

Se requieren Rust y Docker (`cross` usa Docker para la compilación cruzada). `gmgr/setup-libgpiod.sh` prepara la dependencia libgpiod.

> **El objetivo predeterminado es armv7 de 32 bits.** reCamera Pro usa aarch64, así que pasa `SERVICE_TARGET=aarch64-unknown-linux-gnu` explícitamente; de lo contrario, los binarios no se ejecutarán. El SDK establece el objetivo correcto cuando usas `./build.sh app`, pero es fácil pasarlo por alto al invocar `make` manualmente.

### Distribución de la salida

```text
out/
├── etc/init.d/{S40gmgr,S40skt2ws,S40tmir,S49rcisd}
└── usr/
    ├── bin/{gmgr,skt2ws,tmir,rcisd}
    └── share/{gmgr_config.json,skt2ws_config.json,tmir_config.json}
```

### API de gmgr

Escucha en el puerto HTTP `8080` y también proporciona el socket Unix `/dev/shm/gmgr.sock`:

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

El desarrollo local habilita la función `mock-gpio` de forma predeterminada. Para una compilación para hardware, añade `--features hardware-gpio`:

```bash
cargo build --release --features hardware-gpio
cargo test
```

## recamera_notify (Servicio de notificaciones en Python)

Este servicio recibe datos de inferencia protobuf de `rkipc` y reenvía los resultados de la cámara con IA a través de múltiples canales.

| Función | Descripción |
| --- | --- |
| Servidor de sockets | Recibe datos de inferencia de rkipc |
| Análisis | protobuf (`protobufs/inference_pb2.py`) |
| Formateo | Salida basada en plantillas |
| Canales de notificación | **MQTT、HTTP、UART、WebSocket** |
| Fiabilidad | Se reconecta automáticamente tras una desconexión MQTT |
| Configuración | JSON (`notify_config_default.json`) |
| Estado | El estado en tiempo de ejecución de MQTT/HTTP/UART se escribe en un archivo JSON temporal |

Módulos: `core/` (`config_manager`, `inference_parser`, `template_formatter`, `socket_server`, `notifier_manager`), `notifiers/` (`base_notifier`, `mqtt_notifier`, `http_notifier`, `uart_notifier`, `websocket_server`, `notifier_factory`), y `tests/` (incluido `run_all_tests.py`).

### Compilar y desplegar

```bash
export RK_APP_RECAMERA_NOTIFY=y
make -C project/app/recamera_notify
```

Rutas de instalación en el dispositivo:

| Elemento | Ruta |
| --- | --- |
| Paquete de Python | `/usr/lib/python3.11/site-packages/recamera_notify/` |
| Script de inicio | `/usr/bin/notify_server.sh` |
| Servicio del sistema | `/etc/init.d/S49notify` |

```bash
# /etc/init.d/S49notify start
# /etc/init.d/S49notify stop
# ps aux | grep notify_server
```

> El dispositivo de destino usa Python **3.11**. Comprueba la compatibilidad de sintaxis y dependencias si desarrollas en el host con otra versión.

## recamera_onvif (C)

Implementa el descubrimiento y control estándar de dispositivos ONVIF. El directorio contiene `src/` (`dom.c`, `authenticate.c`, `cJSON.c` y otro código de manejo SOAP/XML), `socket_client/` y `script/`. También incluye `RECV.log`, `SENT.log` y `TEST.log` para depuración mediante captura de paquetes.

Se habilita con `RK_APP_RECAMERA_ONVIF=y`. Cuando ONVIF está habilitado, go2rtc también habilita RTSP externo (consulta [Acceso y depuración del dispositivo](/es/recamera_pro_bsp_device_debug/) para conocer las reglas de precedencia).

## recamera_web (Frontend y Backend)

```text
project/app/recamera_web/
├── recamera_web_react/     # React frontend
│   ├── package.json / src / public / backend / nginx.conf / requirements.txt
└── recamera_web_backend/   # C/C++ backend (CMake + thirdparty + ipcweb-env-rv1126b)
```

Funciones del frontend (de su README):

- Internacionalización (inglés y chino), temas claro/oscuro y diseño adaptable
- **Información del dispositivo:** modelo, número de serie, monitorización de CPU/memoria/almacenamiento, guardar configuración, reinicio y restablecimiento de fábrica
- **Vista en vivo:** vista previa del flujo, reproducir/pausar, capturas, grabación y controles de resolución/tasa de fotogramas/tasa de bits/códec
- **Ajustes de grabación:** grabación continua, programada, activada por movimiento o activada por eventos de IA; ruta de almacenamiento, segmentos, sobrescritura en bucle y exploración de archivos, reproducción, descarga y eliminación
- **Inferencia de IA:** detección de objetos (serie YOLO), segmentación de imágenes, detección de puntos clave (pose/rostro/mano) y clasificación de imágenes (ResNet, EfficientNet). Cada tarea puede configurar su modelo, umbral de confianza, tamaño de lote, dispositivo de inferencia (GPU/CPU/NPU) y visualización.
- **Terminal:** gestiona el dispositivo mediante una interfaz de línea de comandos (integrada con ttyd)

El frontend requiere Node.js 18 o posterior. La salida de la compilación se despliega según `nginx.conf` (nginx es proporcionado por `nginx_mk`). La vista previa de vídeo usa go2rtc WebRTC en el puerto `:8555`.

## recamera_utils (Utilidades de fábrica y prueba)

| Directorio | Elemento |
| --- | --- |
| `hw_test/` | `bt_adv.sh` (prueba de publicidad Bluetooth), `imu_test.py` (prueba de IMU; corresponde a la opción de kernel `CONFIG_INV_ICM42670_I2C=y`) |
| `emc_test/` | `AP6256_MFG.bin`, la utilidad `wl` y `BT RF Test Commands for Linux-v09.pdf` — pruebas de certificación RF de Wi‑Fi/Bluetooth |
| `rf_range_test/` | `bt_client.py`、`bt_server.py`、`wifi_ap.py`、`wifi_sta.py` —— pruebas de alcance RF |
| `stress_test/` | `cpu_stress.py`、`npu_stress.py`、`emmc_sd_stress.py`、`emc_test.py` |
| `sn_tool/` | `SN_TOOL` — escribe el número de serie (se usa con `upgrade_tool sn`) |

Utiliza estas herramientas como base para las instrucciones de trabajo de fábrica. Cada directorio contiene un `README.md`.

## Otras aplicaciones

| Aplicación | Descripción |
| --- | --- |
| `rkai` | Biblioteca contenedora RKAI (`rkai_LLM`, `rkai_VLM`), ejemplos (`rkai_samples_llm.cpp`, `rkai_samples_vlm.cpp`, `rkai_samples_vlm_vision.cpp`) y documentación `doc/Rockchip_Developer_Guide_Linux_RKAI_{CN,EN}.md`; `common/include/` contiene `rknn_api.h`, `rknn_custom_op.h`, `cJSON.h`, `cnpy.h` y `easy_timer.h` |
| `rkllm-inference` | Consulta [Desarrollo de IA y NPU](/es/recamera_pro_ai_npu_development/) |
| `wifi_app` | Compila wpa_supplicant (2.6, o 2.10 para WPA3), hostapd, libnl 3.9.0, openssl 3.2.1, bluez 5.77, `rtk_hciattach` y herramientas de servidor/cliente GATT; la configuración está en `/userdata/rk96x/conf`. `RK_ENABLE_WIFI_CHIP` selecciona el prefijo RK960 o RK962 |
| `aov_sample` | Ejemplos de bajo consumo AOV: `sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `testdemo/yoloworld_demo` | Demo YOLO‑World de extremo a extremo |
| `component/` | `ao_record_service` (servicio de grabación de audio), `fastboot_server` (arranque rápido), `lvgl` (GUI), `rkadk` (kit de desarrollo de aplicaciones), `rkfsmk` (sistema de archivos) |

## Resumen del orden de inicio

Los scripts en `/etc/init.d/` y `/oem/usr/etc/init.d/` se ejecutan en orden numérico en el dispositivo:

| Orden | Script | Origen |
| --- | --- | --- |
| S00 | `board-id` | overlay |
| S10 | `log`(registro por WebSocket) | overlay |
| S15 | `watchdog` | overlay |
| S20 | `hwclock` | overlay |
| S20/S21 | `linkmount` / `appinit` | generado automáticamente por `build.sh` (monta particiones / llama a `RkLunch.sh`) |
| S40 | `gmgr`、`skt2ws`、`tmir` | recamera_services |
| S49 | `rcisd` | recamera_services |
| S49 | `notify` | recamera_notify |
| S50 | `sshd`、`ttyd`、`go2rtc` | overlay |
| S70 | `vsftpd` | overlay |
| S99 | `factorykey`、`inotify_passwd`、`led` | recamera_services |

Al añadir un servicio, elige un número de secuencia sin usar y ten en cuenta las dependencias. Por ejemplo, inicia los servicios que dependen de la red después de S40 y los servicios que necesitan `/userdata` después de `S20linkmount`.

## Repositorios de código fuente

Se trata de una instantánea del código fuente sin metadatos `.git`. Los archivos README identifican estas aplicaciones como correspondientes a repositorios internos de GitLab de Seeed:

| Aplicación | Repositorio |
| --- | --- |
| `recamera_onvif` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-onvif.git` |
| `recamera_utils` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-utils.git` |

El patrón de nombres es `rockchip/linux-ipc-app-recamera2-<module>`. Es probable que otras aplicaciones `recamera_*` sigan la misma convención (**verifícalo en el GitLab interno antes de completar la tabla**). Realiza los cambios ascendentes en el repositorio correspondiente en lugar de en esta instantánea del SDK, o podrían perderse durante la siguiente sincronización.

## Referencia rápida del impacto de cambios

| Si quieres cambiar… | Edita aquí | Vuelve a compilar |
| --- | --- | --- |
| Opciones de resolución de vídeo/flujo/RTSP/ONVIF | `recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini` o en el dispositivo `/userdata/config/rkipc.ini` | `app` + `firmware` (o edita directamente el INI del dispositivo) |
| Páginas de la interfaz web | `recamera_web/recamera_web_react/src/` | `app` + `firmware` |
| APIs del backend web | `recamera_web/recamera_web_backend/src/` | Igual que arriba |
| Definiciones/API de GPIO | `recamera_services/gmgr/config.json` y `src/` | Igual que arriba |
| Formato/canales de notificación de inferencia | `recamera_notify/notify-server/`、`notify_config_default.json` | Igual que arriba |
| Modelos de IA | `recamera_ipc/model/rknn/` y los archivos `.json` correspondientes | `app` + `firmware` |
| Aplicaciones de inicio | `recamera_ipc/src/rv1126b_ipc/RkLunch.sh` | `app` + `firmware` |
| Formato/salida de registros | `overlay-buildroot-syslog-ng/etc/syslog-ng.conf` | `rootfs` + `firmware` |
| Política de Serial/SSH/ttyd | `overlay-buildroot-sshd`、`overlay-buildroot-ttyd` | `rootfs` + `firmware` |
| Asignación de canales de audio | `overlay-buildroot-asound/etc/asound.conf` | `rootfs` + `firmware` |

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