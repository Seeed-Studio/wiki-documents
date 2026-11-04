---
description: Personaliza el sistema mediante DTS, kernel, Buildroot, overlay, particiones y configuración del MCU.
title: Personalización del sistema
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_system_customization
sku: 10003420
sidebar_position: 9
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_system_customization/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Personalización del sistema

Esta página cubre cuatro rutas comunes de personalización del sistema: device tree, configuración del kernel, paquetes de Buildroot y sobrescritura de archivos mediante overlay. Para ver una lista completa de opciones de configuración, consulta `project/cfg-all-items-introduction.txt`.

## Archivos de configuración de la placa

La configuración de reCamera Pro se encuentra en:

```text
project/cfg/BoardConfig_Recamera2/
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk        # 32-bit
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk  # 64-bit (recommended)
├── RECAMERA2-IPC-RELEASE-NOTES.md
└── overlay/                                        # 15 overlay directories
```

Después de `./build.sh lunch`, `.BoardConfig.mk` en la raíz del SDK es un enlace simbólico al archivo seleccionado. **Edita el archivo de configuración real**; los cambios se recogerán a través del enlace simbólico.

Ajustes clave en la configuración de 64 bits:

```bash
export RK_ARCH=arm64
export RK_CHIP=rv1126b
export RK_TOOLCHAIN_CROSS=aarch64-rockchip1240-linux-gnu
export RK_BOOT_MEDIUM=emmc
export RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig
export RK_UBOOT_DEFCONFIG_FRAGMENT="rk-emmc.config rv1126b-ipc.config"
export RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini
export RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig
export RK_KERNEL_DEFCONFIG_FRAGMENT="rv1126b-display.config rv1126b-sdiowifi.config rv1126b-bt.config rv1126b-recamera2.config"
export RK_KERNEL_DTS=rv1126b-recamera2-v1.dts
export RK_KERNEL_RC_DTO=y
export RK_BUILDROOT_DEFCONFIG=recamera2_buildroot_aarch64_defconfig
export RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2
export RK_PARTITION_CMD_IN_ENV="32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),"
export RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_OTA_VERSION=V1.0.10
export RK_BOOTARGS_CMA_SIZE="8M"
export RK_AIISP_MODEL=NONE
export RK_ENABLE_WIFI=y
export RK_ENABLE_WIFI_CHIP=AP6XXX
export RK_ENABLE_BLUETOOTH=y
export RK_APP_RECAMERA_WEB=y
export RK_APP_RECAMERA_NOTIFY=y
export RK_APP_RECAMERA_ONVIF=y
export RK_APP_RECAMERA_SERVICES=y
export RK_APP_RKLLM_INFERENCE=y
export RK_BUILD_APP_TO_OEM_PARTITION=n
export RK_FREETYPE_USE_BUILDROOT=y
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
```

> Después de cambiar la configuración de la placa, limpia los componentes afectados con `./build.sh clean` antes de recompilar para evitar mezclar salidas de diferentes configuraciones.

## 1. Personalización del Device Tree

### Disposición de archivos

Los archivos DTS del kernel se encuentran en `sysdrv/source/kernel/arch/arm64/boot/dts/rockchip/`:

| Archivo | Propósito |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | **Punto de entrada de nivel superior** (seleccionado por `RK_KERNEL_DTS`); `model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` | Ruta de cámara CSI0 |
| `rv1126b-recamera2-cam-csi1.dtsi` | Ruta de cámara CSI1 |
| `rv1126b-recamera2-disp.dtsi` | Ruta de visualización |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **Cámara de la placa de expansión**, compilada como `.dtbo` |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | Variantes de la baseboard |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | Variantes de la placa de expansión |

Los includes comentados en `rv1126b-recamera2-v1.dts` (`rv1126b-aoa.dtsi`, `rv1126b-recamera2.dtsi` y `rv1126b-recamera2-v1.dtsi`) indican que este DTS es **autocontenido**: el árbol de alimentación (`vcc12v_dcin` → `vcc5v0_sys` → `vdd_npu`, etc.) se define directamente en el archivo de nivel superior usando `regulator-fixed`.

### Cambiar la línea de comandos del kernel

El nodo `chosen` de nivel superior es:

```dts
chosen {
    bootargs = "earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K";
};
```

No cambies aquí el tamaño de CMA. Establece `RK_BOOTARGS_CMA_SIZE` en la configuración de la placa; `build.sh` lo añade a un fragmento de línea de comandos (`__PREPARE_BOARD_CFG` → `RK_KERNEL_CMDLINE_FRAGMENT`).

### DTBO (Device Tree Overlays en tiempo de ejecución)

Con `RK_KERNEL_RC_DTO=y` y `CONFIG_OF_OVERLAY=y` en el kernel, reCamera Pro usa DTBO para admitir **una única imagen de firmware en múltiples baseboards y placas de expansión**:

1. En tiempo de compilación, cada `rv1126b-recamera2-ext-*.dts` se compila en su `.dtbo` correspondiente.
2. `__PACKAGE_OEM()` en `build.sh` copia `sysdrv/source/objs_kernel/arch/arm64/boot/dts/rockchip/rv1126b-recamera2-ext-*.dtbo` a `/oem/usr/share/`.
3. En el arranque, el overlay `S00board-id` lee el ADC para identificar la placa y escribe el resultado en `/run/board_id.env`.
4. Un script de inicio usa el ID detectado para seleccionar el `.dtbo` que se va a aplicar.

**Mecanismo de identificación de la placa** (`overlay-buildroot-board-id/etc/init.d/S00board-id`):

```text
ADC device       : /sys/bus/iio/devices/iio:device0
Output file      : /run/board_id.env
Samples          : Average of 3 readings
Tolerance        : 440
ADC levels       : 0 1365 2730 4094 5460 6824 8191
Corresponding V  : 0.0 0.3 0.6 0.9 1.2 1.5 1.8 V
Baseboard revs   : V0.9 V1.0 V1.1 V1.2 V1.3 V1.4 V1.5 (BASEBOARD_VERSIONS)
Baseboard models : TYPE0 ... TYPE6 (BASEBOARD_MODELS)
Expansion revs   : V0.9 ... V1.5 (EXPBOARD_VERSIONS)
Expansion models : TYPE0 ... TYPE6 (EXPBOARD_MODELS)
```

Para añadir una variante de hardware: **añade un nuevo nivel de divisor resistivo → actualiza los arrays `LEVELS` / `VERSIONS` / `MODELS` en `S00board-id` → añade el `.dts` correspondiente → añade una rama al script de inicio**. Mantén las tres partes sincronizadas; de lo contrario, la nueva placa podría identificarse como un modelo existente.

### Cambiar el sensor de la cámara

1. Confirma que el driver correspondiente está configurado como `m` o `y` en el fragmento del kernel (`rv1126b-recamera2.config` ya incluye muchos drivers, como SC450AI, SC850SL, GC2053 e IMX415). Habilita la opción `CONFIG_VIDEO_xxx` adecuada si falta el driver.
2. Actualiza en el DTS el `compatible`, la dirección I2C, el reloj y los reguladores de alimentación del nodo de la cámara.
3. Coloca el archivo IQ en `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/` y actualiza `RK_CAMERA_SENSOR_IQFILES` en la configuración de la placa.
4. Reconstruye `kernel` + `media` + `firmware`.

## 2. Configuración del kernel

```bash
./build.sh kernelconfig      # Open menuconfig; savedefconfig runs on exit
./build.sh kernel            # Rebuild the kernel
./build.sh clean kernel      # Clean the kernel outputs
```

`kernelconfig` guarda primero una instantánea `defconfig.before`. Al salir, compara la configuración y **escribe defconfig solo si hay cambios reales**, evitando diffs irrelevantes.

La configuración se compone de `RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig` más cuatro fragmentos aplicados en orden:

| Fragmento | Contenido |
| --- | --- |
| `rv1126b-display.config` | Ajustes de visualización |
| `rv1126b-sdiowifi.config` | Wi‑Fi SDIO |
| `rv1126b-bt.config` | Bluetooth |
| **`rv1126b-recamera2.config`** | **Personalizaciones de Seeed**; edita este archivo |

`rv1126b-recamera2.config` se encuentra en `sysdrv/source/kernel/arch/arm64/configs/` (la versión de 32 bits es el archivo con el mismo nombre bajo `arch/arm/configs/`; para la placa de 64 bits, edita el archivo de arm64). Termina con un marcador `#### recamera2 defconfig ####`. Las adiciones de Seeed están después de este marcador, incluyendo:

```text
CONFIG_CAN=y / CONFIG_CAN_RK3576=y            # CAN bus
CONFIG_STMMAC_ETHTOOL=y / CONFIG_DWMAC_ROCKCHIP_TOOL=y / CONFIG_REALTEK_PHY=y / CONFIG_MAXIO_PHY=y
CONFIG_GENERIC_ADC_BATTERY=y / CONFIG_CHARGER_GPIO=y / CONFIG_POWER_SUPPLY_DEBUG=y
CONFIG_SND_SOC_ES7202=y                        # Microphone-array ADC
CONFIG_TYPEC_AW35615=y / CONFIG_TYPEC_TCPM=y   # USB Type-C
CONFIG_NEW_LEDS=y / CONFIG_LEDS_CLASS=y / CONFIG_LEDS_PWM=y / CONFIG_LEDS_TRIGGERS=y
CONFIG_LEDS_TRIGGER_TIMER=y / _HEARTBEAT=y / _PATTERN=y
CONFIG_RTC_DRV_PCF8563=y                       # RTC
CONFIG_INV_ICM42670_I2C=y                     # IMU (used by recamera_utils/hw_test/imu_test.py)
CONFIG_FANOTIFY=y
CONFIG_CRYPTO*=m / CONFIG_CRYPTO_DEV_ROCKCHIP=m
CONFIG_OF_OVERLAY=y                            # DTBO support
CONFIG_DRM_PANEL_ILITEK_ILI9881C=y / CONFIG_REGULATOR_RASPBERRYPI_TOUCHSCREEN_V2=y
CONFIG_INPUT_TOUCHSCREEN=y / CONFIG_TOUCHSCREEN_GOODIX=y
CONFIG_USB_CONFIGFS_NCM=y
CONFIG_NETFILTER=y / CONFIG_IP_NF_IPTABLES=y / CONFIG_IP_NF_FILTER=y / CONFIG_BPFILTER=y
```

La forma recomendada de añadir opciones del kernel es **añadirlas después de la sección Recamera2 en `rv1126b-recamera2.config`**, en lugar de editar directamente `rv1126b_ipc_defconfig`. Este último es un archivo upstream de Rockchip y es más propenso a conflictos durante las actualizaciones del SDK.

Opciones existentes destacadas:

- `CONFIG_PANIC_ON_OOPS=y` + `CONFIG_BOOTPARAM_SOFTLOCKUP_PANIC=y` + `CONFIG_BOOTPARAM_HARDLOCKUP_PANIC=y`: oops, soft lockup y hard lockup provocan un panic. **Considera deshabilitarlas temporalmente durante el desarrollo**; de lo contrario, un fallo reinicia inmediatamente el sistema y elimina el estado en vivo necesario para depurar.
- `CONFIG_ROCKCHIP_DEBUG=y`, `CONFIG_DEBUG_FS=y`, `CONFIG_RK_CMA_PROCFS=y`, `CONFIG_RK_DMABUF_PROCFS=y`, `CONFIG_RK_MEMBLOCK_PROCFS=y` y `CONFIG_ROCKCHIP_RGA_PROC_FS=y`: los nodos de depuración están habilitados. Las estadísticas de memoria y de RGA bajo `/proc/rk*` y `/sys/kernel/debug/` son útiles para investigar fugas de memoria.
- `CONFIG_ELF_CORE=y` + `CONFIG_CORE_DUMP_DEFAULT_ELF_HEADERS=y`: habilita coredumps. `__BUILD_ENABLE_COREDUMP_SCRIPT()` en `build.sh` puede generar un script para habilitarlos.
- `CONFIG_VIDEO_RK_IRCUT` **no está habilitado**. Habilítalo tú mismo si necesitas control de IRCUT.

## 3. Personalización de Buildroot

### Ubicación y extracción

Las fuentes de Buildroot se proporcionan como un archivo comprimido:

```text
sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz
sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig   # 64-bit (this board)
sysdrv/tools/board/buildroot/recamera2_buildroot_defconfig           # 32-bit
sysdrv/tools/board/buildroot/busybox.config
sysdrv/tools/board/buildroot/{busybox_patch,mpv_patch,qemu_patch,hcitool_patch,prelink-cross_patch}
sysdrv/tools/board/buildroot/font
```

El primer `./build.sh rootfs` lo extrae a `sysdrv/source/buildroot/buildroot-2023.02.6/`. Las salidas de compilación están en:

```text
sysdrv/source/buildroot/buildroot-2023.02.6/output/
├── staging/    # Buildroot development sysroot (headers + libraries)
├── target/     # Target rootfs contents
├── host/       # Host-side tools
└── build/      # Package build directories
```

`staging/` es para aplicaciones en el BSP completo que enlazan contra paquetes de Buildroot. Para el desarrollo de aplicaciones ordinarias, usa [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain).

### Comandos comunes

```bash
./build.sh buildrootconfig   # Open Buildroot menuconfig; savedefconfig runs on exit
./build.sh rootfs            # Rebuild rootfs
./build.sh clean rootfs      # Clean rootfs outputs
```

### Añadir un paquete

1. Selecciona el paquete en `./build.sh buildrootconfig`, luego sal y guarda; el defconfig se actualiza automáticamente.
2. Si el defconfig no se actualiza automáticamente (algunos paquetes se seleccionan a través de dependencias), añade `BR2_PACKAGE_XXX=y` manualmente a `sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig`.
3. Reconstruye con `./build.sh rootfs`.
4. Verifica el paquete, por ejemplo con `ls sysdrv/source/buildroot/buildroot-2023.02.6/output/target/usr/bin/`.

Para añadir una pequeña utilidad de BusyBox como `i2cdetect` o `nc`, edita `busybox.config`. La configuración de la placa ya tiene opciones como `RK_ENABLE_SYSSTAT=y`, `RK_ENABLE_FIO=y` y `RK_ENABLE_I2C_TOOLS=y`, lo que muestra que las herramientas comunes se pueden habilitar mediante interruptores `RK_ENABLE_*`. **Busca un interruptor existente antes de editar el defconfig directamente.**

### Acerca de `/oem`

`RK_BUILD_APP_TO_OEM_PARTITION=n`, por lo que **`/oem` es un directorio normal dentro del rootfs, no una partición separada**. Durante el empaquetado, `build.sh` copia `output/out/oem/` en el subdirectorio `oem/` del área de staging del rootfs y luego elimina el directorio OEM separado. Por lo tanto:

- Los archivos bajo `oem/` en un overlay (por ejemplo, `overlay-buildroot-go2rtc/oem/usr/bin/go2rtc`) terminan en `/oem/usr/bin/go2rtc` en el dispositivo.
- `/oem` se actualiza junto con el rootfs. Para cambiarlo, vuelve a flashear `rootfs.img`; no se puede flashear por separado como una partición OEM.

## 4. Sobrescritura de archivos mediante overlays

Los overlays son el mecanismo principal para las personalizaciones del rootfs de Seeed y a menudo la forma más sencilla de empezar.

### Cómo funciona

Implementación en `build.sh` (alrededor de la línea 2971):

```bash
for overlay_dir in $RK_POST_OVERLAY; do
    if [ -d "$tmp_path/overlay/$overlay_dir" ]; then
        rsync -a --ignore-times --keep-dirlinks --chmod=u=rwX,go=rX --exclude .empty \
            $tmp_path/overlay/$overlay_dir/* $RK_PROJECT_PACKAGE_ROOTFS_DIR/
    fi
done
```

En otras palabras, los archivos bajo `project/cfg/BoardConfig_Recamera2/overlay/<name>/` se copian con rsync al directorio de staging del rootfs, preservando sus rutas relativas.

`cfg-all-items-introduction.txt` describe `RK_POST_OVERLAY` de la siguiente manera:

> Los archivos de recursos del overlay se copian al sistema de archivos. Por ejemplo, crea `overlay/user_overlay_files` bajo el directorio `BoardConfig.mk` correspondiente y establece `RK_POST_OVERLAY=user_overlay_files`.

### Overlays habilitados actualmente

`RK_POST_OVERLAY` enumera 14 entradas que se asignan a 15 directorios (go2rtc tiene tres directorios, pero solo dos están habilitados):

| Directorio de overlay | Contenido instalado | Propósito |
| --- | --- | --- |
| `overlay-buildroot-banner` | `/etc/motd`, `/etc/profile.d/banner.sh` | Logotipo ASCII de reCamera; se imprime solo en sesiones interactivas no SSH |
| `overlay-buildroot-hwclock` | `/etc/init.d/S20hwclock` | Sincronizar RTC y hora del sistema |
| `overlay-buildroot-sshd` | `/etc/ssh/sshd_config`, `/etc/pam.d/sshd`, `/etc/init.d/S50sshd`, `/usr/libexec/ssh-login-lock.py` | Servicio SSH y bloqueo tras intentos fallidos (5 intentos / 300 segundos) |
| `overlay-buildroot-syslog-ng` | `/etc/syslog-ng.conf` | Enrutar logs a archivos y UDP |
| `overlay-buildroot-vsftpd` | `/etc/vsftpd.conf`, `/etc/pam.d/vsftpd`, `/etc/shells`, `/etc/vsftpd.{chroot_,user_}list`, `/etc/init.d/S70vsftpd` | FTP; oculta el directorio de configuración |
| `overlay-buildroot-log` | `/oem/usr/bin/websocket_log.py`, `/oem/usr/etc/init.d/S10log` | UDP 5140 → WebSocket 8765 |
| `overlay-buildroot-ttyd` | `/oem/usr/etc/init.d/S50ttyd`, `/oem/usr/bin/ssh-login-whitelist.sh` | Terminal en el navegador (7681), lista de permitidos `root` / `admin` |
| `overlay-buildroot-udhcpc` | `/usr/share/udhcpc/default.script` | Script DHCP; la DNS de eth0 tiene prioridad |
| `overlay-buildroot-go2rtc` | `/oem/usr/etc/go2rtc/go2rtc.yaml`, `/oem/usr/etc/init.d/S50go2rtc` | Configuración de streaming y script de arranque |
| `overlay-buildroot-go2rtc-arm64` | `/oem/usr/bin/go2rtc` | Binario go2rtc de 64 bits |
| `overlay-buildroot-board-id` | `/etc/init.d/S00board-id` | Leer el ID de la placa desde el ADC → `/run/board_id.env` |
| `overlay-buildroot-asound` | `/etc/asound.conf` | Captura de seis canales → dispositivos virtuales para dos micrófonos + dos canales de referencia |
| `overlay-buildroot-watchdog` | `/etc/init.d/S15watchdog` | Watchdog de hardware (`-T 30 -t 15`) |
| `overlay-buildroot-rkenv` | `/etc/profile.d/RkEnv.sh` | `OEM_HOME`, `PATH`, `LD_LIBRARY_PATH`, `HOME=/userdata` |

**Presente pero no habilitado:** `overlay-buildroot-go2rtc-arm` (binario go2rtc de 32 bits); la placa de 64 bits no lo usa.

### Añadir tu propio overlay

```bash
# 1. Create a directory and arrange files by their target absolute paths
mkdir -p project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d
cp my_script.sh project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d/S60myservice

# 2. Append it to RK_POST_OVERLAY in the board configuration (keep the line-continuation backslash)
#    export RK_POST_OVERLAY="... overlay-buildroot-rkenv \
#    my_overlay"

# 3. Rebuild rootfs and package the firmware
./build.sh rootfs && ./build.sh firmware
```

### Tres trampas de los overlays

- **rsync reescribe los permisos:** `--chmod=u=rwX,go=rX` significa que el grupo y otros usuarios nunca obtienen permiso de escritura. La `X` mayúscula preserva el permiso de ejecución solo para directorios o archivos que ya eran ejecutables. Haz que los scripts sean ejecutables en el overlay de origen antes de compilar.
- **Los archivos `.empty` se excluyen:** los archivos de marcador de posición usados para crear directorios vacíos no entran en la imagen. Esto es intencional y preserva la estructura de directorios.
- **Los overlays sobrescriben pero no eliminan:** a rsync no se le pasa `--delete`, por lo que eliminar un archivo de un overlay **no** lo elimina del rootfs. Para eliminar un archivo, usa un script post-build de rootfs de Buildroot o `RK_POST_CLEAN_FILES` (`__RUN_POST_CLEAN_FILES` en `build.sh`).

## 5. Personalización de U-Boot

```bash
./build.sh uboot
./build.sh clean uboot
```

Configuración: `RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig` bajo `sysdrv/source/uboot/u-boot/configs/`, más los fragmentos `rk-emmc.config` y `rv1126b-ipc.config`.

Un ajuste clave es `CONFIG_BAUDRATE=1500000`. Cambia el retardo de arranque, el objetivo de arranque predeterminado, el soporte de fastboot y las opciones relacionadas en este defconfig.

El firmware de inicialización de la DDR se selecciona mediante `RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini`; las salidas incluyen `idblock.img` / `download.bin`. **Cambiar los parámetros de la DDR es de alto riesgo**; evítalo a menos que sea necesario.

`build.sh` contiene `__modify_file()` y `__modify_file_ddr_bin()`, que modifican los parámetros del firmware DDR de rkbin desde la configuración de la placa durante las compilaciones de U-Boot. Revisa estas funciones primero al investigar problemas de DDR.

## 6. Personalización de la tabla de particiones

Edita `RK_PARTITION_CMD_IN_ENV`. Las entradas usan `size(name)` o `size@offset(name)`; `-` significa usar todo el espacio restante:

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

Actualiza también `RK_PARTITION_FS_TYPE_CFG`, cuyo formato es `partition@mount-point@filesystem`; `IGNORE` significa que la partición no es montada por fstab:

```text
rootfs@IGNORE@ext4,userdata@/userdata@ext4
```

Después de cambiar estos valores, ejecuta:

```bash
./build.sh env          # Regenerate env.img
./build.sh firmware     # Repackage the firmware
```

**Reescribe la tabla de particiones al flashear:** ejecuta `sudo ./rkflash.sh all`, o al menos `upgrade_tool di -p output/image/parameter.txt`. Flashear solo el rootfs sin actualizar la tabla de particiones puede desalinear las particiones.

`parse_partition_env()`, `parse_partition_file()`, `get_partition_dev_node()` y `get_partition_num()` en `build.sh` se encargan del análisis; inspecciona estas funciones al depurar problemas de particiones.

Consideraciones importantes:

- `boot` tiene solo 11 M. El empaquetado falla si el kernel + DTB excede este tamaño. Después de habilitar muchas funciones del kernel, compruébalo con `ls -lh output/image/boot.img`.
- `rootfs` está fijado en 3 G; `userdata` usa el espacio restante. Aumentar rootfs reduce la capacidad de userdata.
- La línea de comandos del kernel usa `root=PARTUUID=614e0000-0000`. Cambiar el orden de las particiones puede afectar al PARTUUID; después de cualquier cambio de particiones, verifica que los bootargs del DTS sigan siendo correctos.

## 7. Lado MCU (RT-Thread)

`sysdrv/source/mcu/` contiene el firmware RT-Thread para el MCU integrado en el RV1126B. Es independiente de Linux:

```text
sysdrv/source/mcu/
├── build.sh
├── docs/          # Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf
├── prebuilts/
├── project/
├── readme.txt
└── rt-thread/
```

Compílalo con:

```bash
./build.sh mcu              # From the SDK root
# Or enter sysdrv/source/mcu/ and use its own build.sh
```

El argumento `mcu` se maneja por separado **antes** del análisis normal de argumentos en `build.sh` (`if [ "$1" = "mcu" ]; then shift; build_mcu $@; fi`). Las compilaciones del MCU también pueden activarse automáticamente durante las compilaciones de U-Boot / kernel según la configuración mediante `build_mcu amp` o `build_mcu $RK_UBOOT_RKBIN_MCU_CFG`.

La configuración actual de la placa no habilita explícitamente el MCU. Ejecuta `./build.sh info` para ver si está incluido en la compilación.

## Verificación posterior a la personalización

```bash
./build.sh info                      # Confirm that the configuration took effect
./build.sh kernel && ./build.sh rootfs && ./build.sh firmware
ls -lh output/image/                 # Check that image sizes are reasonable (boot < 11M, rootfs < 3G)
sudo ./rkflash.sh all                # A partition-table change requires flashing everything
```

En el dispositivo:

```bash
# /bin/sdkinfo                       # Print Build Time / SDK Version / BoardConfig name
# cat /etc/ota_version               # Should be V1.0.10 (or your updated value)
# cat /proc/cmdline                  # Check that the command line matches expectations
# cat /run/board_id.env              # Check the detected board ID
# ls /oem/usr/share/*.dtbo           # Confirm the DTBO files are present
# zcat /proc/config.gz | grep XXX    # Check a kernel option (if IKCFG is enabled)
```

`/bin/sdkinfo` es generado por `build.sh` durante el empaquetado. Informa de la versión del SDK y del nombre de archivo de BoardConfig, lo que lo convierte en la **forma más rápida de identificar qué compilación de firmware se está ejecutando en el dispositivo**.

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