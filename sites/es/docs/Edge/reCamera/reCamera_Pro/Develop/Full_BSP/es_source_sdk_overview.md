---
description: Descripción general del paquete completo de código fuente del BSP, los límites de los componentes y la diferencia entre el desarrollo de aplicaciones y el desarrollo de sistema.
title: Descripción general del paquete completo de código fuente
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_source_overview
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_source_overview/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Descripción general del paquete completo de código fuente

## Lo que recibes

`recamera-pro-sdk-v1.0.10` es una **publicación completa del código fuente del BSP** basada en el Rockchip RV1126B Linux IPC SDK. Incluye la configuración de la placa Recamera2 de Seeed y las aplicaciones del producto. También contiene algunas herramientas y componentes utilizados para el desarrollo de aplicaciones, pero no debe tratarse como un SDK de aplicaciones con todas las bibliotecas de API ya compiladas y listas para usar tras la extracción.

Un SDK de desarrollo de aplicaciones normalmente se centra en un compilador cruzado listo para usar, el sysroot de destino, cabeceras, bibliotecas precompiladas, documentación de API y ejemplos. Este paquete de código fuente incluye una toolchain cruzada y código fuente de bibliotecas multimedia. Una extracción limpia no contiene resultados de compilación bajo `output/`, por lo que una aplicación que necesite bibliotecas multimedia o de Buildroot puede requerir que primero compiles los componentes relevantes y prepares un sysroot. **Esto no significa que cada aplicación requiera una compilación completa de U-Boot, kernel y rootfs.**

Este paquete de código fuente admite tres tipos de trabajo:

- **Compilar o modificar firmware:** usa el punto de entrada de compilación unificado para compilar U-Boot, Linux, Buildroot, bibliotecas multimedia y aplicaciones, y luego generar imágenes flasheables.
- **Desarrollar una aplicación del lado del dispositivo:** usa la toolchain cruzada incluida y obtén el sysroot de destino, bibliotecas multimedia o bibliotecas de IA según sea necesario. Un programa sencillo en C no requiere recompilar primero todo el sistema.
- **Personalizar el software del producto:** modifica aplicaciones como `recamera_ipc`, `recamera_web` y `recamera_services`, así como la configuración del sistema.

Este no es un paquete de firmware precompilado ni un paquete solo de Buildroot. Ocupa alrededor de 12 GB después de la extracción.

## Especificaciones de hardware y software

| Elemento | Valor | Fuente |
| --- | --- | --- |
| SoC | Rockchip RV1126B (`RK_CHIP=rv1126b`, `RK_ARCH=arm64`) | Configuración de la placa |
| PMIC | RK801 | Nombre de archivo de configuración de la placa |
| Medio de arranque | eMMC (`RK_BOOT_MEDIUM=emmc`) | Configuración de la placa |
| Kernel | Linux 6.1.157 ("Curry Ramen") | `sysdrv/source/kernel/Makefile` |
| Defconfig del kernel | `rv1126b_ipc_defconfig` + 4 fragmentos | Configuración de la placa |
| Device tree | `rv1126b-recamera2-v1.dts` | Configuración de la placa |
| Defconfig de U-Boot | `rv1126b_recamera2_defconfig` (`CONFIG_BAUDRATE=1500000`) | `sysdrv/source/uboot/u-boot/configs/` |
| Sistema de archivos raíz | Buildroot 2023.02.6, defconfig `recamera2_buildroot_aarch64_defconfig` | Configuración de la placa |
| Herramientas de compilación | Herramientas de compilación del BSP de Rockchip especificadas por la configuración de la placa | `tools/`, `project/build.sh` |
| Sensores de cámara | SC450AI / SC850SL (se incluyen archivos IQ; el kernel también compila módulos para GC2053, IMX415, SC200AI y otros sensores) | `RK_CAMERA_SENSOR_IQFILES`, `rv1126b-recamera2.config` |
| Wi-Fi / Bluetooth | `RK_ENABLE_WIFI_CHIP=AP6XXX`; Bluetooth habilitado | Configuración de la placa |
| Tipo de aplicación de referencia | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | Configuración de la placa |
| Cadena de modelo de dispositivo | `Rockchip RV1126B RECAMERA PRO Board` | `rv1126b-recamera2-v1.dts` |

## Mapa de directorios

```text
recamera-pro-sdk-v1.0.10/
├── build.sh -> project/build.sh         # unified build entry point
├── setup_build_env.sh                   # one-shot build environment installer
├── rkflash.sh -> project/rkflash.sh     # USB flashing helper
├── quick_start_cn.md / quick_start_en.md# Seeed quick-start guides (upstream material for this Wiki)
├── readme_cn.txt / readme_en.txt        # original Rockchip readme files
├── docs/                                # 90 Rockchip PDF manuals and copyright notices
├── media/          (1.7 G)              # multimedia and AI runtime sources
├── project/        (637 M)              # build scripts, board configuration, and applications
├── sysdrv/         (6.9 G)              # U-Boot / Kernel / MCU / prebuilt drivers
└── tools/          (1.3 G)              # cross-toolchains, flashing, and packaging tools
```

### `sysdrv/` — Capa de sistema

- `source/uboot/`: código fuente de U-Boot, incluido el firmware de inicialización DDR rkbin.
- `source/kernel/`: código fuente de Linux 6.1.157.
- `source/mcu/`: firmware RT-Thread para el coprocesador del lado MCU; compílalo solo cuando sea necesario.
- `drv_ko/` (246 M): módulos de kernel precompilados.
- `tools/board/buildroot/`: **Buildroot se proporciona como `buildroot-2023.02.6.tar.gz`** y se extrae en `sysdrv/source/buildroot/buildroot-2023.02.6/` durante la primera compilación de rootfs. Este directorio también contiene `recamera2_buildroot_aarch64_defconfig`, `busybox.config` y varios parches.

> Es normal no encontrar un directorio Buildroot bajo `sysdrv/source/` antes de que se haya extraído el archivo.

### `media/` — Multimedia y algoritmos

| Directorio | Propósito |
| --- | --- |
| `mpp/` | Rockchip Media Process Platform; codificación y decodificación H.264/H.265/JPEG |
| `rockit/` | Runtime MPI con interfaces unificadas VI/VPSS/VENC/AI/AO/RGN; el punto de entrada principal para canalizaciones de video |
| `isp/` | `camera_engine_rkaiq`, 3A y ajuste de IQ, incluido `iqfiles/isp35/` |
| `rga/` | Acelerador 2D para escalado, conversión de formato y rotación |
| `iva/` | Bibliotecas de algoritmos de visión ROCKIVA, incluidas `librockiva-rv1126b-Linux` y `models/rockiva_data_rv1126b` |
| `avs/` | Unión de vista envolvente |
| `alsa-lib/` | Biblioteca de espacio de usuario ALSA |
| `rknn-llm-mk/` | RKLLM SDK: rkllm-runtime, ejemplos, RKNN Runtime y `rknn_api.h`, además de paquetes de controladores NPU |
| `common_algorithm/` | Algoritmos comunes |
| `libdrm/`, `libv4l/` | Bibliotecas de espacio de usuario para display y V4L2 |
| `prerecord/`, `rockauto/`, `sysutils/`, `third_libs/` | Pregrabación, componentes automotrices, utilidades de sistema y bibliotecas de terceros como freetype/libjpeg/libpng/zlib |
| `samples/` | `example/` contiene demos y pruebas de estrés; `simple_test/` contiene ejemplos mínimos de un solo archivo |

### `project/` — Framework de compilación y aplicaciones

- `build.sh`: punto de entrada unificado que impulsa sysdrv → media → app → empaquetado de firmware.
- `cfg/`: 50 archivos `BoardConfig-*.mk` en cinco directorios de series de productos. **Solo dos archivos en `cfg/BoardConfig_Recamera2/` se aplican a reCamera Pro:** las configuraciones de 32 bits `...-IPC.mk` y de 64 bits `...-IPC_64BIT.mk`.
- `cfg-all-items-introduction.txt`: descripciones de todas las opciones de configuración `RK_*`.
- `app/`: todas las aplicaciones; consulta [Arquitectura de servicios de capa superior de reCamera](/es/recamera_pro_bsp_services/).
- `scripts/`, `make_meta/`: scripts de empaquetado y generación de meta-cabeceras.

### `tools/` — Herramientas para el PC host

- `linux/toolchain/`: toolchains incluidas utilizadas para compilaciones del BSP. Para el desarrollo ordinario de aplicaciones, usa el [SDK de compilación cruzada de aplicaciones](https://github.com/Seeed-Projects/recamera_pro_toolchain) de Seeed; no es necesario seleccionar manualmente una toolchain del paquete completo de código fuente.
- `linux/Linux_Upgrade_Tool/`: `upgrade_tool` v2.26, `88-rockusb.rules`, `config.ini` y una guía de usuario en PDF para la línea de comandos.
- `linux/Linux_Pack_Firmware/`: herramientas de empaquetado de firmware.
- `linux/SocToolKit/`, `linux/programmer_image_tool/`: herramientas GUI de flasheo y de imagen de fábrica.

## Cómo funcionan juntos los componentes

`sysdrv`, `media` y `project/app` tienen cada uno sus propios puntos de entrada de compilación, pero no son tres productos independientes. La compilación completa se controla mediante `./build.sh` en orden de dependencias:

```text
sysdrv(uboot + kernel + rootfs) → media → app → firmware(packaging) → output/image/
```

Las compilaciones de aplicaciones usan la configuración de la placa, los resultados de Buildroot y las dependencias específicas de la aplicación. Las aplicaciones que usan interfaces multimedia de Rockchip también dependen de cabeceras y bibliotecas generadas por media (`output/out/media_out/{include,lib}`). Para una primera compilación completa de firmware, sigue el [Flujo de trabajo de compilación completa de firmware](/es/recamera_pro_bsp_full_build/). Para desarrollar una aplicación sencilla, no necesitas flashear primero una imagen de firmware completa; prepara solo los resultados de compilación requeridos por las dependencias de esa aplicación.

Ten en cuenta este orden de dependencias:

1. `sysdrv` proporciona el kernel, el sistema de archivos raíz y el entorno base de destino.
2. `media` compila bibliotecas multimedia, ISP, de procesamiento de imagen y algunas bibliotecas de IA.
3. `project/app` compila aplicaciones de producto que se ejecutan en el sistema de destino.
4. `firmware` empaqueta los resultados relevantes en imágenes.

Los usuarios nuevos deben elegir una ruta de lectura desde la página principal del Wiki según su objetivo. No es necesario leer todos los temas de principio a fin.

## Ubicaciones de los resultados de compilación

| Ruta | Contenido |
| --- | --- |
| `output/image/` | Imágenes flasheables: `download.bin`, `idblock.img`, `uboot.img`, `env.img`, `boot.img`, `rootfs.img`, `recovery.img`, `misc.img`, `userdata.img` y `update.img` |
| `output/out/media_out/` | directorios `include/` y `lib/` de media, usados por las compilaciones de aplicaciones |
| `output/out/app_out/` | resultados de aplicaciones, fusionados en el rootfs bajo `bin/lib/share/etc/root` durante el empaquetado |
| `output/out/rootfs_glibc_rv1126b/` | directorio de empaquetado de rootfs; su contenido se usa para crear `rootfs.img` |
| `output/out/sysdrv_out/` | resultados de sysdrv |
| `IMAGE/` | archivo creado por `./build.sh save` / `allsave` (imágenes, parches e información de compilación) |

> Una extracción limpia del SDK no contiene `output/`; se genera durante la compilación.

## Índice de documentación (`docs/`)

El directorio `docs/` contiene 90 archivos PDF agrupados por idioma y tema:

| Tema | Documentos representativos | Cuándo leerlos |
| --- | --- | --- |
| `ipc/` | `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf`, `Rockchip_Developer_Guide_Linux_RKAI_CN.pdf` | Primeros pasos e interfaces RKAI |
| `media/` | `Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf`, `Rockchip_Developer_Guide_MPI_C_CN.pdf`, `..._Linux_AOV_CN.pdf`, `..._Linux_DVR_CN.pdf`, `..._EIS_CN.pdf` | Desarrollo de canalizaciones de video |
| `isp/` | `Rockchip_Tuning_Guide_ISP35_CN.pdf`, `Rockchip_Developer_Guide_Camera_Driver_CN.pdf`, `Rockchip_Driver_Guide_VI_CN.pdf` | Ajuste de imagen y cambios de sensor |
| `audio/` | `Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf`, `..._VQE_Introduction_CN.pdf`, `..._Microphone_Array_TEST_CN.pdf` | Desarrollo de audio |
| `bsp/` | GPIO/I2C/SPI/PWM/USB/SDMMC/Thermal/Suspend/CAN_FD, etc. | Controladores de periféricos |
| `npu_iva/` | `Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf` | Algoritmos de visión |
| `security/` | OTP, TEE, Crypto/HWRNG | Arranque seguro y criptografía |
| `en/` root directory | `Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`, `Rockchip_User_Guide_Bug_System_EN.pdf` | Presentar incidencias a Rockchip |

La raíz del SDK también tiene enlaces simbólicos a documentos de uso frecuente, como `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf` y `Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf`.

La documentación a nivel de aplicación también está disponible en Markdown: `project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md` (Guía de desarrollo RKIPC V1.7.6) y `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md`.

Consulta [Glosario, mapa de documentación y derechos de autor](/es/recamera_pro_sdk_reference/) para ver la lista completa.

## SDK de aplicación vs. código fuente BSP

| Tu tarea | Lo que normalmente necesitas | Dónde encontrarlo en este paquete |
| --- | --- | --- |
| Compilar una aplicación habitual de C/C++ o RKNN del lado del dispositivo | Compilador cruzado, sysroot de destino listo para usar, bibliotecas de desarrollo comunes y ejemplos | Recomendamos el [SDK de compilación cruzada reCamera Pro](https://github.com/Seeed-Projects/recamera_pro_toolchain), que proporciona una toolchain y un sysroot seleccionados para el desarrollo de aplicaciones |
| Crear una aplicación dentro del paquete de código fuente completo | Toolchain, más bibliotecas multimedia o staging de Buildroot generados según sea necesario | Comienza con [Tu primera aplicación](/es/recamera_pro_bsp_app_integration/); este paquete también es útil al modificar el framework de compilación de la aplicación o al investigar la integración del producto |
| Usar interfaces de vídeo, ISP, audio o NPU de Rockchip | Cabeceras de API, bibliotecas correspondientes, firmware/controladores en tiempo de ejecución y ejemplos | El SDK proporciona código fuente, algunas bibliotecas precompiladas y ejemplos. Una extracción limpia no tiene `output/out/media_out/`; compila los medios según sea necesario |
| Usar bibliotecas de terceros proporcionadas por Buildroot | Un sysroot y bibliotecas que coincidan con el rootfs de destino | Esto forma parte de la integración completa de aplicaciones BSP; el área de staging de Buildroot suele estar disponible después de compilar el rootfs |
| Modificar el kernel, controladores, DTS o rootfs | Fuentes BSP, configuración y flujo de compilación completo | Proporcionado por `sysdrv/`, `project/` y `./build.sh`; consulta [Compilación completa de firmware](/es/recamera_pro_bsp_full_build/) |

Los desarrolladores de aplicaciones deberían usar por defecto el SDK de compilación cruzada enfocado en aplicaciones. El paquete de código fuente completo es para trabajo de producto y BSP a nivel de código fuente. Incluso cuando desarrolles una aplicación dentro de él, compila solo los componentes requeridos por tus dependencias. Usa el flujo de trabajo BSP completo solo cuando necesites producir o modificar el firmware completo.

## Qué no está incluido

- Sin directorio `.repo/`: esto es una instantánea del código fuente, por lo que las instrucciones de `repo sync` en `readme_en.txt` no aplican.
- Sin `output/` ni `IMAGE/`: debes compilar tú mismo las imágenes.
- Sin RKNN-Toolkit2: la herramienta de conversión ONNX-a-RKNN del lado del PC requiere un entorno Python independiente en el host.
- Sin la utilidad de flasheo para Windows RKDevTool: `tools/` solo contiene herramientas para Linux.

## Próximos pasos

- ¿Nuevo en el paquete? Comienza con [Descargar y extraer](/es/recamera_pro_bsp_download/).
- ¿Listo para compilar? Ve a [Configurar el entorno de compilación](/es/recamera_pro_bsp_build_environment/).

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