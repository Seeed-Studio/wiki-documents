---
description: Selecciona una configuración de placa Recamera2, luego compila y empaqueta el firmware completo del sistema.
title: Compilar el firmware completo
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_full_build
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_full_build/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Compilar el firmware completo

## Flujo de trabajo en tres pasos

```bash
cd recamera-pro-sdk-v1.0.10
./build.sh lunch     # 1. Select a board configuration
./build.sh all       # 2. Build and package the images
ls output/image/     # 3. Inspect the outputs
```

`./build.sh all` ejecuta estas etapas en orden: `sysdrv` (U-Boot + kernel + rootfs) → `media` → `app` → `recovery` → `firmware` (empaquetado de la imagen).

> **Ejecutar `./build.sh` sin argumentos ejecuta `allsave` por defecto** (`all` + `save`). Esto también archiva imágenes, parches e información de compilación bajo `IMAGE/`. En CI, ejecuta explícitamente `./build.sh all` si no quieres el archivo.

## Seleccionar una configuración de placa

```bash
./build.sh lunch
```

El script lista y numera los **50** archivos `BoardConfig-*.mk` bajo `project/cfg/`. Sus nombres siguen este patrón:

```text
BoardConfig-"boot-medium"-"power-scheme"-"hardware-version"-"application-scenario".mk
```

Para reCamera Pro, elige una de las dos configuraciones bajo `BoardConfig_Recamera2/`:

| Archivo de configuración | Descripción |
| --- | --- |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` | **64 bits, recomendada**; usa `aarch64-rockchip1240-linux-gnu` |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk` | Versión de 32 bits |

> El número del menú puede cambiar entre versiones del SDK porque las entradas se ordenan por nombre de archivo. **No codifiques de forma rígida el número en documentación, scripts o configuración de CI; usa el nombre de archivo completo en su lugar.**

### Selección no interactiva (recomendada para CI)

`lunch` acepta directamente un nombre de archivo de configuración, evitando el menú interactivo:

```bash
./build.sh lunch BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

Después de la selección, la raíz del SDK contiene un enlace simbólico llamado `.BoardConfig.mk` que apunta al archivo seleccionado:

```bash
ls -l .BoardConfig.mk
./build.sh info      # Check the current configuration, defconfig, DTS, partition table, and all RK_* variables
```

## Referencia completa de comandos de `build.sh`

### Compilaciones de componentes

| Comando | Descripción |
| --- | --- |
| `env` | Generar la imagen de la partición env (tabla de particiones y argumentos de arranque) |
| `meta` | Compilar/exportar cabeceras meta multimedia; opcional, se gestiona automáticamente al compilar aplicaciones |
| `uboot` | Compilar U-Boot |
| `kernel` | Compilar el kernel |
| `rootfs` | Compilar el sistema de archivos raíz con Buildroot |
| `driver` | Compilar módulos de controladores del kernel (`.ko`) |
| `sysdrv` | Compilar U-Boot + kernel + rootfs |
| `media` | Compilar bibliotecas multimedia como mpp / rockit / rkaiq / rga / iva |
| `app` | Compilar aplicaciones de referencia (**depende de media; media debe compilarse primero**) |
| `recovery` | Compilar el sistema de recuperación |
| `tool` | Compilar herramientas para el PC host |
| `mcu` | Compilar el firmware RT-Thread del lado MCU. Este comando se gestiona antes del análisis normal de argumentos; usa `./build.sh mcu [configuration]` |

### Comandos de empaquetado y de sistema completo

| Comando | Descripción |
| --- | --- |
| `all` | Compilar y empaquetar todas las imágenes necesarias para arrancar el sistema |
| `allsave` | Ejecutar `all` + `save`; el **valor predeterminado cuando no se proporciona ningún argumento** |
| `firmware` | Empaquetar todas las imágenes necesarias para arrancar el sistema |
| `updateimg` | Empaquetar todas las imágenes de partición en `update.img` |
| `unpackimg` | Extraer un paquete `update.img` |
| `ota` | Empaquetar el archivo de actualización OTA `update_ota.tar` |
| `factory` | Crear una imagen de flasheo de fábrica usando `tools/linux/SocToolKit` |
| `sdcard_upgrade` | Crear una imagen de actualización por tarjeta SD |
| `save` | Archivar imágenes, parches e información de depuración en `IMAGE/`; `save xml` también guarda el manifiesto del repositorio |

### Limpieza

| Comando | Descripción |
| --- | --- |
| `clean` | Limpiar todas las salidas de compilación |
| `clean uboot` / `clean kernel` / `clean driver` / `clean rootfs` / `clean sysdrv` | Limpiar el componente seleccionado |
| `clean media` / `clean app` / `clean recovery` | Limpiar media, aplicaciones o recovery |

### Menús de configuración

| Comando | Descripción |
| --- | --- |
| `kernelconfig` | Abrir `menuconfig` del kernel; al salir, guardar automáticamente la configuración de vuelta a defconfig con `savedefconfig` |
| `buildrootconfig` | Abrir `menuconfig` de Buildroot y guardar el defconfig al salir |

`kernelconfig` primero guarda una instantánea `defconfig.before`. Si la configuración no ha cambiado, omite `savedefconfig`.

### Arranque seguro y comandos avanzados

| Comando | Descripción |
| --- | --- |
| `dm` | Crear imágenes device-mapper para particiones cifradas o con verity |
| `dm-key-gen` | Generar una clave de device-mapper |
| `secure-boot-key-gen` | Generar claves de arranque seguro |

### Obtener ayuda (ten cuidado con esto)

```bash
./build.sh help          # Print usage
./build.sh help media    # Show the actual make command used for media
./build.sh help kernel   # Likewise for kernel; also works with uboot/rootfs/sysdrv
```

**Trampa habitual:** antes de `lunch`, `./build.sh --help` puede abrir primero el menú de selección de placa en lugar de mostrar la ayuda. El script comprueba `.BoardConfig.mk` antes de analizar los argumentos y fuerza la selección de placa si falta el enlace. Ejecuta primero `./build.sh lunch`; después de seleccionar una placa, `--help` / `help` pueden mostrar la información de uso.

`help <component>` es especialmente útil porque revela el comando `make` subyacente y los argumentos que usa `build.sh`, lo que facilita reproducir una compilación manualmente o diagnosticar un problema.

## Modificadores del modo de compilación

Antepone un comando con `DEBUG` o `ASAN` para cambiar el modo de compilación:

```bash
./build.sh DEBUG app     # -O0 -g -ggdb -pg
./build.sh ASAN app      # -O0 -g -ggdb -fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all
./build.sh app           # Default RELEASE: -Os; strip binaries during packaging
```

En modo RELEASE, el empaquetado ejecuta `strip`, excepto en `libpthread*.so*` y `ld-*.so*` (la depuración de pthread de gdb y valgrind requieren símbolos sin recortar). Los módulos del kernel (`.ko`) solo reciben `--strip-debug`. El modo DEBUG omite el stripping y también instala símbolos de depuración de libc (`runtime_lib/libc`, `lib.tar.bz2`).

## Compilaciones incrementales

```bash
./build.sh app                             # Rebuild applications only; fastest when changing application code
./build.sh app && ./build.sh firmware      # Rebuild applications and repackage the images
./build.sh kernel                          # Rebuild the kernel only
./build.sh clean app && ./build.sh app     # Clean and rebuild applications when needed
```

Compilar una aplicación directamente (ejecuta primero `lunch`):

```bash
make -C project/app/recamera_notify        # Build one application
make -C project/app/recamera_notify distclean
```

Compilar media por separado (ejecuta primero `lunch`; media se puede compilar de forma independiente del resto del SDK):

```bash
make -C media
```

## Salidas de compilación

### `output/image/` — Imágenes flasheables

| Archivo | Descripción |
| --- | --- |
| `download.bin` | Programa del lado del dispositivo usado para la comunicación de flasheo; se carga solo en la memoria de la placa |
| `idblock.img` | Loader, incluyendo la inicialización de la DDR |
| `uboot.img` | U-Boot |
| `env.img` | Tabla de particiones y argumentos de arranque |
| `boot.img` | Imagen del kernel incluyendo el DTB |
| `rootfs.img` | Sistema de archivos raíz (ext4) |
| `recovery.img` | Sistema de recuperación (`RK_ENABLE_RECOVERY=y` en esta configuración de placa) |
| `misc.img` | Partición misc usada para el flag de arranque de recovery; esta configuración de placa usa `recovery-misc.img` |
| `userdata.img` | Partición userdata (ext4, montada en `/userdata`) |
| `update.img` | Paquete completo para todas las particiones; se puede usar para una actualización |
| `parameter.txt` | Texto de la tabla de particiones usado por `rkflash.sh` |

### `output/out/` — Salidas intermedias

| Directorio | Descripción |
| --- | --- |
| `media_out/` | `include/` y `lib/` de media, usados como dependencias de aplicaciones |
| `app_out/` | Salidas de aplicaciones fusionadas en el rootfs bajo `bin/lib/share/etc/root` durante el empaquetado |
| `rootfs_glibc_rv1126b/` | Directorio de empaquetado del rootfs |
| `sysdrv_out/` | Salidas de sysdrv |
| `oem/`, `userdata/`, `ramdisk/` | Contenidos de la partición OEM, userdata y el ramdisk de recovery |
| `S20linkmount`, `S21appinit` | Scripts generados de montaje de particiones e inicio de aplicaciones OEM |

## Tiempo esperado para la primera compilación

Un `./build.sh all` completo incluye una compilación completa de Buildroot y puede tardar desde decenas de minutos hasta varias horas, dependiendo de los núcleos de CPU y el almacenamiento. En la primera ejecución, Buildroot extrae `sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz` y descarga/compila muchos paquetes, por lo que **se requiere una conexión a internet**. Las compilaciones incrementales son mucho más rápidas porque solo recompilan los componentes cambiados.

Para la primera compilación, considera usar `screen` o `tmux` y guardar el log:

```bash
./build.sh all 2>&1 | tee build_$(date +%Y%m%d_%H%M).log
```

## Lista de comprobación previa a la compilación

- `./setup_build_env.sh` ha finalizado, y el resumen de versión no muestra ninguna herramienta requerida como `NOT INSTALLED`.
- `./build.sh lunch` seleccionó `BoardConfig_Recamera2/...IPC_64BIT.mk`, y el enlace simbólico `.BoardConfig.mk` existe.
- `./build.sh info` informa `rv1126b-recamera2-v1.dts` para `RK_KERNEL_DTS`.
- Quedan al menos 20 GB de espacio libre en disco en la partición del SDK (se recomiendan 100 GB o más).
- Si cambiaste la configuración de la placa, ejecuta primero `./build.sh clean`.

A continuación, flashea las imágenes en la placa: [Flasheo y arranque](/es/recamera_pro_bsp_flash_boot/).

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