---
description: APIs de captura y reproducción de audio, enrutamiento de matriz de micrófonos y algoritmos de audio en reCamera Pro.
title: Desarrollo de audio
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - Application Development
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_audio_development
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_audio_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Desarrollo de audio

Esta página describe las interfaces de audio de la aplicación y la configuración del dispositivo en el firmware actual del producto. Para compilaciones de aplicaciones C/C++ ordinarias, usa [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). Solo necesitas el código fuente completo del BSP para modificar ALSA, el audio del kernel o el enrutamiento de audio del producto.

## Compatibilidad de hardware y kernel

Las opciones del kernel relacionadas con audio están en `sysdrv/source/kernel/arch/arm64/configs/rv1126b-recamera2.config`:

| Configuration | Significado |
| --- | --- |
| `CONFIG_SND_SOC_ES7202=y` | ADC multicanal Everest ES7202 para captura de matriz de micrófonos |
| `CONFIG_SND_SOC_ROCKCHIP_PDM_V2=y` | Interfaz de micrófono digital PDM v2 |
| `CONFIG_SND_SOC_RK817=y` | Códec RK817 (audio en el PMIC; ruta de salida al altavoz) |
| `CONFIG_SND_SOC_RK_DSM=y` | Procesamiento digital de altavoz Rockchip |
| `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` | Conversión asíncrona de frecuencia de muestreo |
| `CONFIG_SND_SOC_ROCKCHIP_MULTI_DAIS=y` | Vínculos DAI múltiples; la captura y la reproducción usan DAIs separados |
| `CONFIG_SND_SOC_DUMMY_CODEC=y` | Códec ficticio |
| `CONFIG_SND_HRTIMER=y`, `CONFIG_SND_PCM_TIMER=y` | Controladores de temporizador |

Los nodos de audio se definen en `rv1126b-recamera2-v1.dts` y en los archivos DTSI que incluye. El código fuente de la biblioteca en espacio de usuario es `media/alsa-lib/`. Se compila con `./build.sh media`; las salidas se encuentran bajo `output/out/media_out/lib/`.

## Ruta de captura: seis canales de hardware → cuatro canales virtuales

Este diseño clave de audio de reCamera Pro se define en `/etc/asound.conf` en un overlay. Fuente: `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-asound/etc/asound.conf`.

### Tres capas

**Capa 1 · Hardware compartido (`dsnoop`)** — permite que varios procesos lean el mismo dispositivo de hardware:

~~~text
pcm.mic_hw_shared
  type       dsnoop
  ipc_key    2026
  ipc_perm   0666
  slave.pcm  "hw:0,0"
  channels   6
  rate       16000
  format     S16_LE
  period_size 1024
  buffer_size 4096
~~~

**Capa 2 · Asignación de canales (`route`)** — asigna seis canales físicos a cuatro canales virtuales `[Mic1, Mic2, Ref, Ref]`:

~~~text
pcm.ai_2mic_2ref
  type          route
  slave.pcm     "mic_hw_shared"
  slave.channels 6
  ttable {
      0.0 1    # Hardware Ch0 → output Ch0 (Mic 1)
      1.2 1    # Hardware Ch2 → output Ch1 (Mic 2)
      2.4 1    # Hardware Ch4 → output Ch2 (Reference)
      3.4 1    # Hardware Ch4 → output Ch3 (Reference copy)
  }
~~~

**Capa 3 · Dispositivos virtuales de aplicación (`plug`)** — proporcionan dispositivos con nombre y conversión automática de formato para distintos módulos:

| Dispositivo PCM | Propósito |
| --- | --- |
| `ai_main` | Entrada de audio principal |
| `ai_kws` | Detección de palabras clave |
| `ai_asr` | Reconocimiento de voz (ASR) |
| `ai_debug` | Depuración / grabación en bruto |

Los cuatro usan `type plug` con `slave.pcm "ai_2mic_2ref"`. Sus dispositivos de control son:

~~~text
ctl.ai_main / ctl.ai_kws / ctl.ai_asr / ctl.ai_debug  →  type hw; card 0
~~~

### Por qué se usa este diseño

- **`dsnoop` evita el acceso exclusivo:** los dispositivos de hardware ALSA son exclusivos por defecto, pero KWS, ASR, el audio de grabación de vídeo y la grabación de depuración pueden necesitar capturar al mismo tiempo. `ipc_key 2026` + `ipc_perm 0666` permite que varios procesos compartan el flujo de captura.
- **`route` proporciona la señal de referencia de AEC:** la Cancelación de Eco Acústico (AEC) necesita una referencia de lo que se está reproduciendo actualmente en el altavoz. El canal de hardware 4 transporta esta referencia y se copia a los canales de salida 2 y 3.
- **`plug` resuelve desajustes de formato:** los módulos pueden requerir diferentes frecuencias o formatos; `plug` convierte automáticamente.

### Cómo usarlo

~~~bash
# Grabar cuatro canales (2 micrófonos + 2 referencias), 16 kHz S16_LE
# arecord -D ai_debug -c 4 -r 16000 -f S16_LE -d 10 /userdata/test.wav

# Grabar para ASR
# arecord -D ai_asr -c 4 -r 16000 -f S16_LE -d 5 /userdata/asr.wav
~~~

Al usar la API de ALSA, pasa `"ai_main"`, `"ai_kws"`, `"ai_asr"` o `"ai_debug"` como nombre de dispositivo. No uses `"hw:0,0"`; es exclusivo y no aplica la asignación de canales.

> Abrir `hw:0,0` directamente proporciona datos en bruto de seis canales. Para la disposición de dos micrófonos + dos referencias, usa `ai_2mic_2ref` o uno de sus envoltorios `plug`.

## Ruta de reproducción

El altavoz usa el códec RK817 / RK_DSM. El dispositivo de reproducción ALSA predeterminado es `default` (`hw:0,x`; verifica el número exacto de dispositivo en el hardware con `aplay -l`).

~~~bash
# aplay -l                              # Listar dispositivos de reproducción
# aplay -D default /oem/usr/share/xxx.wav
~~~

`recamera_ipc` incluye un archivo de audio de prueba en `project/app/recamera_ipc/common/speaker_test.wav` para comprobar el altavoz.

## Código de audio a nivel de aplicación

| Ruta | Contenido |
| --- | --- |
| `project/app/recamera_ipc/common/audio/audio.c` / `audio.h` | Lógica principal de audio de rkipc: captura, codificación y multiplexación con vídeo |
| `project/app/recamera_ipc/common/audio/rkaudio_mp3.c` / `.h` | Decodificación y reproducción MP3 (para avisos, etc.) |
| `project/app/ao_record_demo/ao_record_demo.c` | Demo de grabación; su Makefile es una plantilla para enlazar rockit |
| `project/app/aov_sample/sample_aov_audio.c` | Captura de audio en modo de bajo consumo |
| `project/app/component/ao_record_service/` | Componente de servicio de grabación, recopilado explícitamente por `project/app/Makefile` |
| `media/samples/simple_test/simple_ai_get_frame.c` | Ejemplo mínimo de captura |
| `media/samples/simple_test/simple_ai_bind_aenc.c` | Vincular captura con codificación |
| `media/samples/simple_test/simple_ai_bind_aenc_external_encoder.c` | Usar un codificador externo |
| `media/samples/simple_test/simple_adec_bind_ao.c` | Vincular decodificación con reproducción |
| `media/samples/simple_test/simple_adec_bind_ao_external_decoder.c` | Usar un decodificador externo |
| `media/samples/simple_test/simple_ao_send_frame.c` | Enviar tramas directamente a reproducción |
| `media/samples/example/audio/sample_ai.c`, `sample_ai_aenc.c` | Ejemplos completos |
| `media/samples/example/test/sample_ai_aenc_adec_ao_stresstest.c` | Prueba de esfuerzo de audio |

## Módulos de audio rockit

Al usar MPI, el audio utiliza el mismo modelo de módulos que el vídeo:

| Módulo | Cabecera | Propósito |
| --- | --- | --- |
| `AI` | `rk_mpi_ai.h` | Captura de audio |
| `AO` | `rk_mpi_ao.h` | Reproducción de audio |
| `AENC` | `rk_mpi_aenc.h` | Codificación de audio (G.711/AAC, etc.) |
| `ADEC` | `rk_mpi_adec.h` | Decodificación de audio |

Ruta típica: `AI → AENC → (multiplexar con VENC en un flujo)`; la reproducción usa `ADEC → AO`. Conecta los módulos con `RK_MPI_SYS_Bind()`.

Al configurar los atributos del canal AI, haz coincidir el número de canales con `asound.conf` (cuatro canales = dos micrófonos + dos referencias); usa una frecuencia de muestreo de 16 000 Hz y formato `S16_LE`.

## Algoritmos de audio (VQE / RockAA)

Los algoritmos de front-end de Rockchip —AEC, Supresión de Ruido Acústico (ANS) y Control Automático de Ganancia (AGC)— se proporcionan a través de RockAA / VQE:

- `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` (guía del algoritmo VQE)
- `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` (herramientas RockAA)
- `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` (detección de eventos de sonido)
- `media/common_algorithm/` (bibliotecas de algoritmos comunes)

El canal de referencia de eco en `asound.conf` está reservado para el AEC de VQE. Para habilitar VQE, activa las opciones de algoritmo relevantes en los atributos del canal AI y asegúrate de que los datos del canal de referencia se enruten correctamente.

## Pruebas de la matriz de micrófonos

`docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` describe las pruebas de consistencia de la matriz. Para producción, usa scripts bajo `project/app/recamera_utils/hw_test/`, o graba la entrada en bruto de seis canales mediante `ai_debug` e inspecciona cada canal.

Para diagnosticar problemas de orden de canales, graba un WAV de cuatro canales e inspecciona sus pistas en Audacity. Golpea o habla en cada micrófono y confirma que Mic1, Mic2, Ref, Ref coinciden con la asignación de `ttable`.

## Problemas comunes

| Síntoma | Causa | Solución |
| --- | --- | --- |
| `arecord: main:831: audio open error: Device or resource busy` | Se abrió `hw:0,0` directamente, omitiendo dsnoop | Usa un dispositivo virtual como `ai_debug` |
| Al abrir `ai_*` informa `Unknown PCM` | `/etc/asound.conf` no se aplicó | Confirma que el overlay se empaquetó (`RK_POST_OVERLAY` incluye `overlay-buildroot-asound`) e inspecciona `cat /etc/asound.conf` en el dispositivo |
| El número de canales es incorrecto (se esperaban 4, se obtuvieron 6) | Se usó `hw:0,0` en lugar de `ai_2mic_2ref` | Usa la capa de enrutamiento |
| AEC deficiente / el eco permanece | Falta el canal de referencia o está asignado incorrectamente | Revisa las entradas `2.4` / `3.4` de `ttable`; verifica que el canal de hardware 4 sea la referencia de eco (se requiere verificación de hardware) |
| La grabación está en silencio | Se seleccionaron canales incorrectos (por ejemplo, solo Ch1 / Ch3 / Ch5) | Graba primero los seis canales en bruto para identificar qué canales transportan señal |
| No hay sonido durante la reproducción | La ruta RK817 / DSM está deshabilitada o el volumen está silenciado | Comprueba con `amixer -c 0 scontrols`; reactiva en `alsamixer` |
| Tono de reproducción incorrecto debido a desajuste de frecuencia de muestreo | `plug` está inactivo o ASRC está deshabilitado | Confirma `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` en el kernel y establece explícitamente `-r 16000` |
| Fallos intermitentes cuando varios procesos graban | Conflicto de `ipc_key` | Mantén la clave 2026 única entre aplicaciones, o cambia `asound.conf` y recompila |

## Documentos relacionados

| Documento | Ruta |
| --- | --- |
| Guía para desarrolladores ACodec de la serie RV | `docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf` |
| Introducción al algoritmo VQE | `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` |
| Herramientas RockAA | `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` |
| Prueba de matriz de micrófonos | `docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` |
| Detección de eventos de sonido | `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` |
| Solución de problemas de audio | `docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf` |

Las versiones en inglés están en `docs/en/audio/` con nombres similares; `Sound_Event_Detection` solo está disponible en chino.

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