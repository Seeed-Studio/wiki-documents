---
description: Consulta la terminología del SDK, los documentos técnicos incluidos y la información de licencias.
title: Glosario, mapa de documentación y licencias
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Referencia
  - Documentación
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_reference
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_sdk_reference/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Glosario, mapa de documentación y licencias

## Glosario

### Plataforma y hardware

| Término | Significado |
| --- | --- |
| **RV1126B** | SoC Rockchip enfocado a IPC con un NPU e ISP35. Chip principal en reCamera Pro; RK_CHIP=rv1126b, RK_ARCH=arm64 |
| **RV1126BP** | Variante de encapsulado / derivada de RV1126B usada por algunas configuraciones de placa EVB |
| **RK801** | PMIC usado por reCamera Pro |
| **RK817** | PMIC con códec de audio integrado (CONFIG_SND_SOC_RK817=y) |
| **ES7202** | ADC multicanal Everest para captura con matriz de micrófonos |
| **ISP35** | Versión ISP de RV1126B; los archivos IQ relacionados están bajo iqfiles/isp35/ |
| **eMMC** | Almacenamiento integrado (RK_BOOT_MEDIUM=emmc) |
| **Maskrom** | Modo de descarga incorporado en la ROM del SoC; punto de entrada para flasheo (USB VID 2207) |
| **loader / idblock** | Inicialización de DDR y primer gestor de arranque; las salidas incluyen idblock.img y download.bin |
| **board ID** | Variante de placa base / placa de expansión detectada mediante niveles de divisor resistivo ADC; el resultado se escribe en /run/board_id.env |
| **DTBO** | Device Tree Blob Overlay, usado en tiempo de ejecución para admitir múltiples variantes de hardware con una sola imagen de firmware |

### SDK y sistema de compilación

| Término | Significado |
| --- | --- |
| **BSP** | Board Support Package: soporte a nivel de placa incluyendo U-Boot, kernel, rootfs y controladores |
| **BoardConfig** | `project/cfg/<series>/BoardConfig-*.mk`; el conjunto completo de parámetros de placa para una compilación |
| **lunch** | Seleccionar un BoardConfig; terminología del sistema de compilación de Android. Genera el enlace simbólico .BoardConfig.mk |
| **sysdrv** | SDK del componente de controladores del sistema que contiene fuentes de U-Boot / kernel / MCU; se puede compilar de forma independiente con make |
| **media** | SDK del componente multimedia que contiene mpp / rockit / rkaiq / rga / iva, etc.; se puede compilar de forma independiente con make |
| **app** | Aplicaciones en espacio de usuario bajo project/app/ |
| **fragment** | Defconfig incremental de kernel / U-Boot aplicado en orden sobre el defconfig base |
| **overlay** | Directorio de archivos copiados sobre el rootfs durante el empaquetado; las entradas habilitadas se listan en RK_POST_OVERLAY |
| **IQ file** | Archivo de calidad de imagen que contiene parámetros de ajuste de sensor rkaiq (JSON) |
| **rootfs** | Sistema de archivos raíz ext4 generado por Buildroot en la partición de 3 G |
| **oem** | Directorio /oem. Esta placa establece RK_BUILD_APP_TO_OEM_PARTITION=n, por lo que es un directorio normal dentro de rootfs, no una partición separada |
| **userdata** | Partición de escritura montada en /userdata; almacena configuración y datos de usuario y es el HOME predeterminado |
| **misc** | Pequeña partición que contiene flags de recuperación / restablecimiento de fábrica |
| **RK_APP_TYPE** | Tipo de aplicación de referencia; esta placa usa RKIPC_RV1126B_RECAMERA2 |
| **allsave** | all + save; comportamiento predeterminado cuando se ejecuta ./build.sh sin argumentos |
| **RK_APP_xxx** | Conmutador de configuración de placa que controla si se compila una aplicación |
| **MAROC_\*** | Familia de macros en Makefile.param, incluyendo MAROC_COPY_PKG_TO_APP_OUTPUT, MAROC_STRIP_DEBUG_SYMBOL y MAROC_PKG_RELEASE |

### Multimedia (rockit / MPI)

| Término | Significado |
| --- | --- |
| **MPI** | Media Process Interface, la interfaz de programación unificada para rockit |
| **rockit** | Implementación en tiempo de ejecución de Rockchip MPI; enlazar con -lrockit |
| **MPP** | Media Process Platform, bibliotecas de códec de nivel inferior; enlazar con -lrockchip_mpp |
| **VI** | Entrada de vídeo; captura fotogramas desde un sensor a través del ISP |
| **VPSS** | Video Process Sub System; escalado / recorte / conversión de formato multicanal |
| **VENC / VDEC** | Codificación / decodificación de vídeo |
| **VO** | Salida de vídeo a una pantalla |
| **RGN** | Módulo de región para superposiciones OSD y marcas de agua |
| **AI / AO** | Audio In / Audio Out |
| **AENC / ADEC** | Codificación / decodificación de audio |
| **AVS** | Around View System para unión de vista envolvente multicámara |
| **IVS** | Intelligent Video Surveillance para analíticas como detección de movimiento |
| **TDE** | Two Dimensional Engine para aceleración 2D |
| **RGA** | Raster Graphic Acceleration, un acelerador 2D para escalado, conversión NV12↔RGB y rotación |
| **MB** | Media Buffer / pool de búferes |
| **Bind** | RK_MPI_SYS_Bind() conecta canales de dos módulos para que los datos fluyan automáticamente |
| **EIS / DIS** | Estabilización de imagen electrónica / digital |
| **ePTZ** | Pan-tilt-zoom electrónico |
| **SVC** | Scalable Video Coding |
| **AOV** | Always-On Vision, visión siempre activa de bajo consumo |
| **FEC** | Hardware de corrección de ojo de pez / distorsión (CONFIG_VIDEO_ROCKCHIP_FEC=y) |
| **IRFPA** | Matriz de plano focal infrarrojo (imagen térmica) |
| **rkaiq** | Motor Rockchip AI ISP para 3A y ajuste; enlazar con -lrkaiq |
| **uAPI / uAPI2** | Dos generaciones de interfaces de espacio de usuario de rkaiq; el código nuevo debe usar uAPI2 (rk_aiq_user_api2_*.h) |
| **AINR** | Reducción de ruido por IA; los archivos IQ relacionados están bajo iqfiles/isp35/ainr/ |
| **AI-ISP** | Usa el NPU para mejorar la salida del ISP; deshabilitado en esta placa (RK_AIISP_MODEL=NONE) |

### IA / NPU

| Término | Significado |
| --- | --- |
| **NPU** | Neural Processing Unit integrada en RV1126B |
| **RKNN** | Formato y runtime de modelos de red neuronal de Rockchip (.rknn + librknnrt.so) |
| **RKNN-Toolkit2** | Herramienta de conversión de modelos en PC para x86_64 / Python; **no incluida en el SDK** y debe instalarse por separado. Línea base interna: 2.3.2 |
| **rknn-toolkit-lite2** | Wrapper de inferencia en Python para el dispositivo; adecuado solo para validación. Usa la API de C en aplicaciones de producción |
| **RKLLM** | Runtime de modelos de lenguaje grande de Rockchip (.rkllm + librkllmrt.so) |
| **rkllm-toolkit** | Herramienta de conversión LLM en PC bajo media/rknn-llm-mk/rknn-llm/rkllm-toolkit/ |
| **ROCKIVA** | Algoritmos de visión empaquetados de Rockchip (detección de personas / caras / mascotas, etc.); enlazar con -lrockiva |
| **RKAI** | Wrapper de IA de Rockchip bajo project/app/rkai/, que cubre flujos de trabajo LLM y VLM |
| **VLM** | Vision-Language Model; modelo multimodal para imagen y texto |
| **TTFT** | Time To First Token, una métrica de benchmark de RKLLM |
| **RKNN_NPU_CORE_x** | Máscara de asignación de núcleos del NPU (AUTO / 0 / 0_1 / 0_1_2) |
| **INT8 quantization / calibration set** | La cuantización usa una lista de imágenes representativa; mantén el conjunto de calibración separado del conjunto de validación |

### Redes y streaming

| Término | Significado |
| --- | --- |
| **rkipc** | Aplicación de referencia IPC de Rockchip; la aplicación principal de reCamera Pro (recamera_ipc) se basa en ella |
| **go2rtc** | Pasarela de streaming de código abierto que convierte RTSP interno a WebRTC / HLS, etc.; se suministra como binario precompilado en un overlay |
| **RTSP** | Real-Time Streaming Protocol. Origen interno 127.0.0.1:5554; el puerto externo :554 se habilita según sea necesario |
| **WebRTC** | Audio/vídeo en tiempo real basado en navegador; go2rtc escucha en :8555 |
| **ONVIF** | Estándar de interoperabilidad de dispositivos de red implementado por recamera_onvif |
| **ttyd** | Expone un terminal a través de una página web en el puerto 7681 |
| **main / sub stream** | Nombres de flujo de go2rtc que corresponden a live/0 y live/1 |

### Servicios de reCamera

| Término | Significado |
| --- | --- |
| **gmgr** | GPIO Manager: servicio Rust GPIO HTTP / WebSocket en el puerto 8080 y /dev/shm/gmgr.sock |
| **skt2ws** | Puente de Socket a WebSocket que reenvía rkipc-record-events |
| **tmir** | TTY Mirror; multiplexa el tráfico del puerto serie ttyS4 a un socket / WebSocket |
| **rcisd** | Demonio reCamera Intellisense para encolado de eventos y transferencia de archivos |
| **RkLunch.sh** | Punto de entrada de inicio de aplicaciones a nivel de sistema bajo /oem/usr/bin/ |
| **vigil** | Módulo bajo recamera_ipc/common/vigil*; depende de protobuf y libblkid |
| **VQE** | Voice Quality Enhancement, algoritmos de front-end de audio (AEC / ANS / AGC) |
| **AEC** | Acoustic Echo Cancellation; requiere una señal de referencia de altavoz (Ch4 en asound.conf) |
| **dsnoop** | Plugin de captura compartida ALSA que permite que múltiples procesos lean un dispositivo de hardware |
| **KWS / ASR** | Keyword Spotting / Automatic Speech Recognition; los dispositivos virtuales correspondientes son ai_kws / ai_asr |

## Mapa de documentación

El directorio docs/ contiene **90 archivos PDF**: 52 en chino y 38 en inglés. El conjunto en chino es más completo, así que **consúltalo primero**.

### Conteos por idioma y tema

| Tema | Chino (docs/zh/) | Inglés (docs/en/) |
| --- | --- | --- |
| audio/ | 6 | 6 |
| bsp/ | 17 | 15 |
| ipc/ | 3 | 3 |
| isp/ | 8 | **2** |
| media/ | 9 | 7 |
| npu_iva/ | 1 | **0 (directorio ausente)** |
| security/ | 3 | 3 |
| wifibt/ | 3 | **0 (directorio ausente)** |
| Directorio raíz | — | 2 (Bug System, SDK Application and Synchronization) |

Los documentos importantes disponibles solo en chino incluyen el ROCKIVA SDK, el conjunto completo de Wi-Fi / Bluetooth, la mayoría de las guías de ajuste y controladores ISP, EIS / DIS, System Suspend, RGB_MCU, SDMMC / SDIO / eMMC y algunos documentos de medios distintos de la calibración AVS. Para la documentación de clientes en el extranjero, traduce estos materiales o indica claramente que no se incluye una versión en inglés.

### Encontrar un documento por tarea

| Quiero... | Leer |
| --- | --- |
| Empezar con el SDK | docs/zh/ipc/Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf |
| Construir una canalización de vídeo | docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf |
| Consultar las API de MPI | docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf |
| Ajustar la calidad de imagen / cambiar un sensor | docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf, Rockchip_Development_Guide_ISP35_CN.pdf |
| Desarrollar un controlador de cámara | docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf, Rockchip_Driver_Guide_VI_CN.pdf |
| Calibrar la corrección de distorsión | docs/zh/isp/Rockchip_Development_Guide_FEC_CN.pdf; para AVS ver docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_*_CN.pdf |
| Desarrollar imagen térmica infrarroja | docs/zh/isp/Rockchip_Development_Guide_IRFPA_CN.pdf |
| Solucionar problemas de codificación de vídeo | docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf |
| IPC de bajo consumo / batería | docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf, docs/zh/wifibt/Rockchip_Developer_Guide_Linux_Low_Power_Wi-Fi_CN.pdf |
| Arranque rápido | docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf, docs/zh/isp/Rockchip_ISP_Tuning_Guide_for_Thunder_Boot_CN.pdf |
| Algoritmos de visión | docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf |
| Códec de audio | docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf |
| Cancelación de eco / reducción de ruido | docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf |
| Pruebas de matriz de micrófonos | docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf |
| Solución de problemas de audio | docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf |
| Wi-Fi / Bluetooth | docs/zh/wifibt/Rockchip_Developer_Guide_Linux_WIFI_BT_CN.pdf |
| GPIO | docs/zh/bsp/RV1126B_User_Manual_GPIO.pdf, RV1126B-P_User_Manual_GPIO.pdf |
| I2C / SPI / PWM / USB / WDT | Guías con nombres coincidentes bajo docs/zh/bsp/ |
| eMMC / SD | docs/zh/bsp/Rockchip_Developer_Guide_SDMMC_SDIO_eMMC_CN.pdf |
| Solución de flasheo de código abierto | docs/zh/bsp/Rockchip_Developer_Guide_Linux_Flash_Open_Source_Solution_CN.pdf |
| Control térmico / escalado de frecuencia | docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf, Rockchip_Developer_Guide_CPUFreq_CN.pdf, Rockchip_Developer_Guide_Devfreq_CN.pdf |
| Suspender y reanudar | docs/zh/bsp/Rockchip_RV1126B_Developer_Guide_System_Suspend_CN.pdf |
| Pantalla | docs/zh/bsp/Rockchip_Developer_Guide_DRM_Display_Driver_CN.pdf |
| Bus CAN | docs/zh/bsp/Rockchip_Developer_Guide_CAN_FD_CN.pdf |
| Desarrollo de MCU | sysdrv/source/mcu/docs/Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf (también enlazado desde la raíz del SDK) |
| U-Boot | docs/zh/bsp/Rockchip_Developer_Guide_UBoot_Nextdev_CN.pdf |
| Arranque seguro / OTP / TEE | Tres documentos bajo docs/zh/security/ |
| Almacenamiento de proveedor (número de serie, etc.) | docs/en/bsp/Rockchip_Application_Notes_VendorStorage_EN.pdf (**solo en inglés**) |
| RKLLM | media/rknn-llm-mk/rknn-llm/doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf |
| Aplicación RKIPC | project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md (V1.7.6, Markdown) |
| Aplicación RKAI | project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md |
| Herramienta de flasheo | tools/linux/Linux_Upgrade_Tool/命令行开发工具使用文档.pdf |
| Todas las opciones de configuración | project/cfg-all-items-introduction.txt |
| Registrar una incidencia de Rockchip | docs/en/Rockchip_User_Guide_Bug_System_EN.pdf |
| Aplicación y sincronización del SDK | docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf |

La raíz del SDK también tiene enlaces simbólicos a documentos de uso frecuente: `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_{CN,EN}.pdf`, Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf, Copyright_Statement.md, RECAMERA2-IPC-RELEASE-NOTES.md y RK-RELEASE-NOTES-IPC.txt.

## Copyright y Cumplimiento

### Declaración de Copyright de Rockchip

docs/Copyright_Statement.md (también enlazado desde la raíz del SDK):

> Copyright(C) 2024 Rockchip Electronics Co., Ltd. Todos los derechos reservados.
>
> ROCKCHIP SOFTWARE se proporciona “TAL CUAL”, sin garantías expresas ni implícitas, incluidas titularidad, comerciabilidad, idoneidad para un propósito particular o no infracción. Rockchip no ofrece ninguna garantía para tecnologías de terceros, de código abierto o basadas en estándares. Los destinatarios son responsables de obtener todas las licencias y derechos requeridos de sus respectivos propietarios. El único y exclusivo recurso del destinatario, y toda la responsabilidad acumulada de Rockchip, consiste, a elección de Rockchip, en revisar o reemplazar el ROCKCHIP SOFTWARE correspondiente o reembolsar las tarifas pagadas por el destinatario.

Implicaciones prácticas:

- Los componentes de Rockchip en el SDK se proporcionan **TAL CUAL**. Si algo falla, investígalo tú mismo o abre una incidencia con Rockchip.
- **Somos responsables de gestionar las licencias de terceros.** El SDK incluye una gran cantidad de software de terceros (bluez 5.77, wpa_supplicant, hostapd, openssl, libnl, freetype, libjpeg, libpng, zlib, go2rtc, ttyd, syslog-ng, vsftpd, el ecosistema de React, crates de Rust, etc.). Antes de la distribución del producto, revisa cada componente para cumplir con las obligaciones de las licencias GPL / LGPL / Apache / MIT / BSD.
- Los PDF de Rockchip bajo docs/ tienen marcas de confidencialidad (muchos están marcados como “Public”), pero **confirma la clasificación antes de la distribución**. No redistribuyas material marcado como “Internal”.

### Licencias de los Componentes del SDK

| Componente | Licencia |
| --- | --- |
| media/mpp/ | Ver media/mpp/mpp/LICENSES/ (Apache-2.0 y MIT) |
| sysdrv/source/kernel/ | GPL-2.0 (ver COPYING y LICENSES/) |
| sysdrv/source/uboot/ | GPL-2.0+ |
| Buildroot | GPL-2.0; cada paquete puede tener su propia licencia |
| project/app/recamera_ipc/ | Incluye un archivo LICENSE; sigue sus términos |
| project/app/rkai/ | Incluye un archivo LICENSE; sigue sus términos |
| Bibliotecas binarias de Rockchip (librknnrt.so, librockiva.so, rkaiq, archivos IQ, etc.) | Licencia propietaria de Rockchip, distribuida con el SDK |

### Antes de Publicar Esta Wiki Externamente

- **Esta Wiki es material interno de Seeed.** Antes de publicarla de forma pública (por ejemplo, en wiki.seeedstudio.com), elimina direcciones internas de GitLab (iteam-gitlab.seeed.cn), rutas internas, detalles de hardware como niveles de resistencias de ID de placa, herramientas de prueba de producción y planes de productos no publicados.
- **No subas PDFs de Rockchip a sitios públicos.** Enlaza a los canales oficiales de distribución de Rockchip o indica “solicitar a Seeed / Rockchip”.
- No expongas contraseñas predeterminadas, la política de inicio de sesión SSH de root ni parámetros de bloqueo de PAM en documentación pública. [Acceso al Dispositivo y Depuración](/es/recamera_pro_bsp_device_debug/) incluye dichos detalles y debe recortarse para una versión pública.
- Pide al departamento Legal que confirme la política de licencias externas para los componentes desarrollados por Seeed (recamera_*).

## Referencia de Abreviaturas

| Abreviatura | Forma completa |
| --- | --- |
| BSP | Board Support Package |
| IPC | IP Camera |
| MPI | Media Process Interface |
| MPP | Media Process Platform |
| ISP | Image Signal Processor |
| NPU | Neural Processing Unit |
| RGA | Raster Graphic Acceleration |
| IVA | Intelligent Video Analysis (ROCKIVA) |
| AOV | Always-On Vision |
| CVR | Car Video Recorder |
| ONVIF | Open Network Video Interface Forum |
| OTA | Over-The-Air update |
| DTBO | Device Tree Blob Overlay |
| CMA | Contiguous Memory Allocator |
| AEC / ANS / AGC | Acoustic Echo Cancellation / Acoustic Noise Suppression / Automatic Gain Control |
| KWS / ASR | Keyword Spotting / Automatic Speech Recognition |
| TTFT | Time To First Token |
| UVC | USB Video Class |
| VQE | Voice Quality Enhancement |
| AHD | Analog High Definition |

## Soporte Técnico y Debate sobre el Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
