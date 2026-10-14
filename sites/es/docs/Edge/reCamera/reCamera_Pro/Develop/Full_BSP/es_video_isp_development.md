---
description: "Desarrolla aplicaciones con capacidades de video, rockit/MPI, ISP, sensor y RGA de reCamera Pro."
title: "Desarrollo de video e ISP"
keywords:
  - "reCamera"
  - "reCamera Pro"
  - "RV1126B"
  - "SDK"
  - "C/C++"
  - "RKNN"
  - "Application Development"
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_video_isp_development
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_video_isp_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Desarrollo de video e ISP

Esta página se centra en la canalización de video del producto y las interfaces ISP. Para un entorno de aplicación C/C++ normal y su despliegue, sigue la guía de inicio rápido en [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). Los detalles de configuración de `rockit`, IQ y del sensor a los que se hace referencia aquí son temas avanzados del paquete de código fuente completo.

## Concepto clave: la canalización rockit MPI

El procesamiento de video de Rockchip utiliza el modelo **rockit** (MPI, Media Process Interface) de módulos, canales y enlaces. Evita operar V4L2 directamente. Abreviaturas de módulos:

| Módulo | Nombre completo | Propósito |
| --- | --- | --- |
| `VI` | Entrada de video | Captura fotogramas desde el sensor a través del ISP |
| `VPSS` | Subsistema de procesamiento de video | Escalado multicanal, recorte y conversión de formato |
| `VENC` | Codificador de video | Codificación H.264 / H.265 / JPEG / MJPEG |
| `VDEC` | Decodificador de video | Decodificación |
| `VO` | Salida de video | Envía fotogramas a una pantalla |
| `RGN` | Región | Superposiciones OSD y marcas de agua |
| `AI` / `AO` | Entrada / salida de audio | Captura / reproducción |
| `AENC` / `ADEC` | Codificador / decodificador de audio | Codificación / decodificación de audio |
| `AVS` | Sistema de vista envolvente | Unión de múltiples cámaras para vista envolvente |
| `IVS` | Videovigilancia inteligente | Análisis inteligente, como detección de movimiento |
| `TDE` | Motor bidimensional | Aceleración 2D |
| `MB` | Búfer multimedia | Gestión del pool de búferes multimedia |
| `SYS` | Sistema | Inicialización, enlace y gestión de memoria |

Los encabezados correspondientes están en `output/out/media_out/include/`. Siguen la convención de nombres `rk_mpi_<module>.h` (por ejemplo, `rk_mpi_vi.h`, `rk_mpi_venc.h` y `rk_mpi_sys.h`). Otros encabezados incluyen `rk_debug.h`, `rk_defines.h` y `rk_errno.h`.

Canalización típica:

```text
sensor → VI(dev0/pipe0/chn0) → VPSS(grp0) → VENC(chn0) → RTSP/File
                              ↘ RGN overlay
                              ↘ IVS intelligent analysis
```

Conecta módulos con `RK_MPI_SYS_Bind()`. Los datos fluyen entonces automáticamente, por lo que no necesitas mover los fotogramas tú mismo.

## Índice de ejemplos existentes

### `media/samples/simple_test/` — Ejemplos mínimos de un solo archivo (punto de partida recomendado)

Cada archivo `.c` es un programa completo que se puede compilar de forma independiente. El nombre del archivo describe la canalización:

| Archivo | Demostración |
| --- | --- |
| `simple_vi_get_frame.c` | Captura fotogramas de VI; el ejemplo VI más pequeño |
| `simple_vi_get_frame_rkaiq.c` | Captura fotogramas e inicializa manualmente rkaiq |
| `simple_vi_bind_venc.c` | VI a VENC, codificación a un archivo |
| `simple_vi_bind_venc_jpeg.c` | Captura de instantáneas JPEG |
| `simple_vi_bind_venc_rtsp.c` | **VI a VENC a streaming RTSP; el punto de partida más común** |
| `simple_vi_bind_venc_rtsp_lowdelay.c` | RTSP de baja latencia |
| `simple_vi_bind_venc_rtsp_eptz.c` | PTZ electrónico |
| `simple_vi_bind_venc_svc_rtsp.c` | Codificación escalable SVC |
| `simple_vi_bind_venc_osd.c` | Superposición OSD |
| `simple_vi_bind_vpss_bind_venc.c` | Añade VPSS para múltiples flujos |
| `simple_vi_bind_vpss_bind_vo.c` | Añade salida de pantalla |
| `simple_vi_bind_ivs.c` | Conecta análisis inteligente |
| `simple_vi_bind_avs_bind_venc.c` | Unión de vista envolvente |
| `simple_vi_gdc_vo.c` | Corrección de distorsión |
| `simple_vdec_bind_vo.c` / `simple_vdec_bind_vo_rtsp_lowdelay.c` | Decodificar y mostrar / reemisión de baja latencia |
| `simple_ai_bind_aenc.c` / `simple_adec_bind_ao.c` / `simple_ao_send_frame.c` | Captura y codificación de audio / decodificación y reproducción / reproducción directa de fotogramas |
| `simple_multi_ahd_vpss_test.c` | AHD multicanal |
| `rv1126b/simple_irfpa_vi_bind_venc_rtsp.c` | **Solo RV1126B**: matriz de plano focal infrarrojo y streaming |

El directorio `simple_test/` también incluye `rk_2_1920x1080.json` / `.xml` como ejemplo de calibración AVS de cámara dual 1080p.

### `media/samples/example/` — Ejemplos completos

| Subdirectorio | Archivo |
| --- | --- |
| `vi/` | `sample_vi.c`, `sample_multi_vi.c`, `sample_vi_eis.c` (estabilización electrónica de imagen) |
| `venc/` | `sample_vi_vpss_osd_venc.c`、`sample_multi_vi_avs_osd_venc.c` |
| `vo/` | `sample_vi_vo.c` |
| `audio/` | `sample_ai.c`、`sample_ai_aenc.c` |
| `avs/` | `sample_avs.c`、`sample_multi_vi_avs.c` |
| `demo/` | `sample_demo_vi_venc.c`、`sample_demo_dual_camera.c`、`sample_demo_dual_camera_wrap.c`、`sample_demo_multi_cam.c`、`sample_demo_multi_camera_eptz.c`、`sample_demo_eis.c`、`sample_demo_aiisp.c`、`sample_demo_dual_aiisp.c`、`sample_demo_vi_avs_venc.c` |
| `test/` | Pruebas de estrés:`sample_venc_stresstest.c`、`sample_vpss_stresstest.c`、`sample_isp_stresstest.c`、`sample_mulit_isp_stresstest.c`、`sample_multi_cam_stresstest.c`、`sample_rgn_stresstest.c`、`sample_ai_aenc_adec_ao_stresstest.c`、`sample_avs_stresstest.c`、`sample_vdec_vo_stresstest.c`、`sample_vdec_vpss_vo_stresstest.c`、`sample_demo_*_stresstest.c` |

Para pruebas de estabilidad, ejecuta la prueba de estrés correspondiente en `test/`.

### Ejemplos a nivel de aplicación en `project/app/`

| Directorio | Contenido |
| --- | --- |
| `testdemo/low_delay_net_display` | Pantalla de red de baja latencia |
| `testdemo/yoloworld_demo` | Demo de detección YOLO-World (incluye `3rdparty`, `resources` y `RkLunch.sh`) |
| `aov_sample/` | Visión siempre activa de bajo consumo:`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `cvr/` | Grabación en vehículo |
| `ao_record_demo/` | Demo de grabación de audio; su Makefile es una plantilla útil para enlazar rockit |
| `uvc_app_tiny/` | Modo cámara UVC |
| `recamera_ipc/` | La implementación completa del producto; consulta [Arquitectura de servicios del producto](/es/recamera_pro_bsp_services/) |

## Compilar y ejecutar ejemplos

Los ejemplos se compilan con media (`make -C ./samples` es llamado por el objetivo `all` en `media/Makefile`):

```bash
./build.sh media
ls output/out/media_out/           # should contain the sample binaries
```

Para RV1126B, la compilación añade automáticamente `-DRV1126B` y utiliza archivos fuente específicos del chip en `simple_test/rv1103_rv1106_rv1103b_rv1126b/` y `simple_test/rv1126b/`.

Copia un ejemplo al dispositivo y ejecútalo:

```bash
scp output/out/media_out/bin/simple_vi_bind_venc_rtsp root@<device-ip>:/userdata/
ssh root@<device-ip>
# /userdata/simple_vi_bind_venc_rtsp --help
```

> **Advertencia de conflicto de recursos:** En el firmware del producto, `rkipc` (`recamera_ipc`) ya se está ejecutando y posee los recursos VI/VENC/ISP y el servicio RTSP en el puerto 5554. Un ejemplo puede fallar porque los nodos de dispositivo ya están en uso. Detén la aplicación antes de depurar:
>
> ```bash
> # sh /oem/usr/bin/RkLunch-stop.sh
> # O usa /etc/init.d/S21appinit stop
> ```
>
> **No mates servicios del sistema indiscriminadamente para acceder a los nodos de dispositivo.** Reinícialos después de depurar. En producción, coordina el acceso mediante configuración compartida o un procedimiento explícito de parada de servicios.

## Arquitectura de streaming RTSP (importante)

El streaming en reCamera Pro utiliza **dos etapas**:

```text
recamera_ipc(rkipc) internal RTSP service listening on 127.0.0.1:5554
        ↓ rtsp://127.0.0.1:5554/live/0 (main)  /live/1 (sub)
     go2rtc converts the stream
        ↓ WebRTC :8555 / RTSP :554 (optional) / HLS, etc.
      External clients
```

La configuración está en `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml`. Si el puerto 554 se expone externamente se controla mediante los ajustes `enable` en las secciones `[video.0.rtsp]`, `[video.0.onvif]` y `[video.1.rtsp]` de `/userdata/config/rkipc.ini`. Consulta [Acceso y depuración del dispositivo](/es/recamera_pro_bsp_device_debug/).

El archivo de configuración predeterminado para `recamera_ipc` es `project/app/recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini`. Contiene ajustes de resolución, bitrate, frecuencia de fotogramas y RTSP/ONVIF.

Para una aplicación de streaming personalizada, hay dos opciones:

1. **Usar rockit y `librtsp`:** Inicia tu propio servicio RTSP como en `simple_vi_bind_venc_rtsp.c` (enlaza con `-lrtsp`) y elige un puerto distinto de 5554.
2. **Usar GStreamer:** El dispositivo tiene GStreamer 1.22 (**la lista de plugins aún necesita verificación en hardware**) y puede capturar con `v4l2src`. El siguiente comando de sondeo está registrado como funcional:

```bash
# gst-launch-1.0 -v v4l2src device=/dev/video13 num-buffers=30 \
#   ! 'video/x-raw,format=NV12,width=1920,height=1080,framerate=30/1' \
#   ! videoconvert ! fakesink
```

Los números de nodo de dispositivo (como `/dev/video13`) **dependen del firmware** y pueden cambiar entre versiones. Confírmalos en el dispositivo con `v4l2-ctl --list-devices`.

## ISP y rkaiq

### Ubicaciones del código fuente

- Código fuente del motor:`media/isp/camera_engine_rkaiq/`
- Archivo IQ：`media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/`(esta configuración de placa usa **isp35**)
- Calibración FEC:`media/isp/camera_engine_rkaiq/IspFec/fec_calib/`
- Encabezados (después de compilar): `output/out/media_out/include/rkaiq/`, con subdirectorios como `uAPI`, `uAPI2`, `algos`, `common`, `xcore`, `iq_parser`, `iq_parser_v2` y `smartIr`
- Bibliotecas: `-lrkaiq` (también enlaza `-lstdc++ -lm`)

El código más reciente utiliza de forma consistente **uAPI2** (`rk_aiq_user_api2_*.h`); solo las compilaciones con la macro `RV1126_RV1109` usan la uAPI antigua.

### Archivos IQ en la configuración de la placa

La configuración de la placa especifica:

```bash
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
export RK_CAMERA_SENSOR_CAC_BIN=""
export RK_AIISP_MODEL=NONE
```

Esto empaqueta archivos IQ de AINR (reducción de ruido por IA) para los sensores **SC450AI** y **SC850SL** en la imagen. El modelo AI-ISP está deshabilitado (`RK_AIISP_MODEL=NONE`).

En el dispositivo, los archivos empaquetados se encuentran en `/oem/usr/share/iqfiles/`, y `/etc/iqfiles` es un enlace simbólico a este directorio (creado por `__PACKAGE_OEM()` / `__PACKAGE_ROOTFS()` en `build.sh`).

### Sustituir o ajustar archivos IQ

- Durante la depuración, sustituye directamente el archivo en el dispositivo: `/oem/usr/share/iqfiles/<sensor>/<Module>.json`(vuelve a montar `/oem` si es de solo lectura), luego reinicia `rkipc` para aplicar el cambio.
- Para una versión de lanzamiento, coloca el archivo JSON ajustado de nuevo en `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/ainr/` y enuméralo en `RK_CAMERA_SENSOR_IQFILES`, luego recompila media y el firmware.

Para herramientas y procedimientos de ajuste, consulta `docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf`、`Rockchip_Color_Optimization_Guide_ISP39_ISP33_ISP35_CN.pdf`、`Rockchip_Development_Guide_IRFPA_CN.pdf`(infrarrojo) y `Rockchip_Development_Guide_FEC_CN.pdf`(calibración de distorsión).

## Sensores y controladores del kernel

El fragmento del kernel `rv1126b-recamera2.config` compila muchos controladores de sensores como **módulos**:

```text
SC450AI SC850SL SC200AI SC3336 SC401AI SC4336 SC530AI SC635HAI SC00AI series
GC2053 GC8613 GST412C IMX415 IMX464 IMX586 IMX708 OS04A10 PS5458
TECHPOINT(AHD Decoding)
```

También habilita `CONFIG_VIDEO_ROCKCHIP_FEC=y` (hardware de corrección de distorsión) y `CONFIG_OF_OVERLAY=y` (superposiciones DTBO en tiempo de ejecución); `CONFIG_VIDEO_RK_IRCUT` está **deshabilitado**.

Árboles de dispositivos relacionados con la cámara:

| Archivo | Propósito |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | Punto de entrada de nivel superior,`model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` / `-cam-csi1.dtsi` | Rutas de cámara CSI0 / CSI1 |
| `rv1126b-recamera2-ext-cam-csi1.dts` | Cámara de **placa de expansión** (compilada como `.dtbo`) |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | Variantes de placa base |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | Variantes de placa de expansión |
| `rv1126b-recamera2-disp.dtsi` | Pantalla |

`RK_KERNEL_RC_DTO=y` habilita DTBO (Runtime Device Tree Overlay). Las salidas de compilación `rv1126b-recamera2-ext-*.dtbo` son copiadas por `build.sh` a `/oem/usr/share/`. En el arranque, la identificación de la placa (`S00board-id`) lee el ADC y escribe `/run/board_id.env`; el sistema usa esta información para seleccionar una superposición dinámicamente. Este mecanismo permite que una sola imagen de firmware admita múltiples configuraciones de hardware de reCamera Pro. Consulta [Personalización del sistema (DTS / Kernel / Buildroot / Overlay)](/es/recamera_pro_bsp_system_customization/).

## RGA y conversión de formato

`media/rga/` proporciona aceleración 2D para escalado, conversión NV12↔RGB, rotación y mezcla. Enlaza con `-lrga`.

Un caso de uso común: VENC requiere NV12, mientras que el modelo de NPU requiere RGB. Convertir con RGA es mucho más rápido y usa menos CPU que `videoconvert`.

**No pases bytes NV12 en bruto directamente a un modelo RGB/BGR.** Convierte el formato de píxel y normaliza los datos explícitamente.

## Documentación relacionada

| Documento | Ruta |
| --- | --- |
| Rockit Runtime Developer Guide | `docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf` |
| MPI C API Guide | `docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf` |
| VI Driver Guide | `docs/zh/isp/Rockchip_Driver_Guide_VI_CN.pdf` |
| Camera Driver Guide | `docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf` |
| ISP35 Development and Tuning | `docs/zh/isp/Rockchip_Development_Guide_ISP35_CN.pdf`、`Rockchip_Tuning_Guide_ISP35_CN.pdf` |
| EIS Electronic image stabilization | `docs/zh/media/Rockchip_Developer_Guide_EIS_CN.pdf`、`Rockchip_RV1126B_Development_Guide_DIS_CN.pdf` |
| AOV Low-Power Mode | `docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf` |
| DVR In-Vehicle Recording | `docs/zh/media/Rockchip_Developer_Guide_Linux_DVR_CN.pdf` |
| VENC Troubleshooting | `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` |
| AVS Calibration | `docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_Product_CN.pdf` |
| Fast Boot | `docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf`(Thunder Boot) |

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