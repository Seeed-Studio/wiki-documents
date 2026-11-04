---
description: Flashea una imagen de firmware autogenerada en reCamera Pro y verifica el proceso de arranque.
title: Flasheo y Arranque
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_flash_boot
sku: 10003420
sidebar_position: 6
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_flash_boot/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Flasheo y Arranque

## Tabla de particiones

Las particiones de reCamera Pro se definen mediante `RK_PARTITION_CMD_IN_ENV` en la configuración de la placa:

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

| Partición | Tamaño | Desplazamiento | Contenido | Archivo de imagen |
| --- | --- | --- | --- | --- |
| `env` | 32 K | 0 | Tabla de particiones + argumentos de arranque | `env.img` |
| `idblock` | 512 K | 32 K | Loader (incluida la inicialización de la DDR) | `idblock.img` |
| `uboot` | 4 M | 1 M | U-Boot | `uboot.img` |
| `misc` | 64 K | — | Flag de arranque de recuperación, etc. | `misc.img` (esta placa usa `recovery-misc.img`) |
| `recovery` | 10 M | — | Sistema de recuperación | `recovery.img` |
| `boot` | 11 M | — | Kernel + DTB | `boot.img` |
| `rootfs` | 3 G | — | Sistema de archivos raíz, ext4 | `rootfs.img` |
| `userdata` | Espacio restante | — | ext4, montado en `/userdata` | `userdata.img` |

Los tipos de sistema de archivos se especifican mediante `RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4`: `rootfs` no se monta explícitamente en fstab (el kernel lo monta con `root=PARTUUID=`), mientras que `userdata` se monta en `/userdata`.

La línea de comandos del kernel desde `chosen/bootargs` en `rv1126b-recamera2-v1.dts`:

```text
earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K
```

El tamaño de CMA se controla mediante `RK_BOOTARGS_CMA_SIZE="8M"`.

## Permitir que el host detecte el dispositivo (configuración única)

La herramienta de flasheo se comunica mediante USB Rockusb y necesita una regla udev (el VID `2207` es Rockchip):

```bash
sudo cp tools/linux/Linux_Upgrade_Tool/88-rockusb.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger
```

`tools/linux/SocToolKit/` también incluye `88-rockusb.rules` y `38-disk.rules`; instala ambas al usar la herramienta GUI.

## Entrar en modo de flasheo

El dispositivo debe estar en modo **Maskrom** o **Loader** para que `upgrade_tool` lo detecte:

- **Maskrom:** apaga el dispositivo por completo, luego mantén pulsado el botón Maskrom/Recovery mientras lo enciendes (o cortocircuita el pin CLK de la eMMC a tierra). El host debería mostrar un dispositivo Rockchip como `2207:xxxx` en `lsusb`.
- **Loader:** si hay un U-Boot funcional instalado, ejecuta `upgrade_tool db <loader>` o interrumpe la cuenta regresiva de U-Boot para entrar en modo Loader.

> Consulta el manual de hardware o el esquema para conocer la ubicación exacta del botón y el serigrafiado en reCamera Pro. Confírmalo en un dispositivo físico antes de añadir detalles aquí.

Comprueba si el dispositivo es detectado:

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool ld
```

`ListDevice` debería mostrar los dispositivos en modo de flasheo.

## Flashear con `rkflash.sh` (recomendado)

El script `./rkflash.sh` en la raíz del SDK envuelve `upgrade_tool`; las rutas de las imágenes están fijas bajo `output/image/`.

```bash
sudo ./rkflash.sh              # Same as all: flash every partition
sudo ./rkflash.sh all
sudo ./rkflash.sh loader
sudo ./rkflash.sh uboot
sudo ./rkflash.sh boot         # Flash the kernel only
sudo ./rkflash.sh rootfs       # Flash the root filesystem only
sudo ./rkflash.sh userdata
sudo ./rkflash.sh recovery
sudo ./rkflash.sh misc
sudo ./rkflash.sh trust
sudo ./rkflash.sh rd           # Reboot the device only
sudo ./rkflash.sh erase        # Erase the entire flash
```

El segundo argumento puede especificar una ruta de imagen personalizada:

```bash
sudo ./rkflash.sh boot /path/to/my_boot.img
```

La secuencia real de comandos para el modo `all` (consulta `project/rkflash.sh`) es:

```text
upgrade_tool ul -noreset download.bin     # Download loader without resetting
upgrade_tool di -p parameter.txt          # Write partition table
upgrade_tool di -uboot uboot.img
upgrade_tool di -m misc.img
upgrade_tool di -r recovery.img
upgrade_tool di -b boot.img
upgrade_tool di -rootfs rootfs.img
upgrade_tool di -userdata userdata.img
upgrade_tool rd                           # Reset and reboot
```

**Dos trampas importantes:**

- La rama de flasheo de `update.img` en `rkflash.sh` está **comentada**, por lo que `./rkflash.sh update` no hace nada. Para flashear el paquete completo, ejecuta `upgrade_tool uf` directamente.
- El modo `all` no flashea `env.img`; solo escribe `parameter.txt`. Si cambiaste `RK_PARTITION_CMD_IN_ENV`, ejecuta manualmente `upgrade_tool di -p env.img` o flashea `update.img` con `uf`.

## Usar `upgrade_tool` directamente

Versión de la herramienta v2.26 (`tools/linux/Linux_Upgrade_Tool/revision.txt`). Comandos comunes:

| Comando | Propósito |
| --- | --- |
| `ld` | ListDevice: lista los dispositivos en modo de flasheo |
| `cd <n>` | ChooseDevice: selecciona un dispositivo cuando hay varios conectados |
| `ul <loader> [-noreset] [EMMC]` | UpgradeLoader: descarga el loader a memoria |
| `db <loader>` | DownloadBoot |
| `uf <update.img> [-noreset]` | UpgradeFirmware: flashea el paquete completo |
| `di -p [parameter.txt]` | Escribe la tabla de particiones |
| `di -b [boot.img]` | Escribe la partición boot |
| `di -rootfs [rootfs.img]` | Escribe la partición rootfs |
| `di -u [userdata.img]` | Escribe la partición userdata |
| `di -r [recovery.img]` | Escribe recovery |
| `di -m [misc.img]` | Escribe misc |
| `pl` | PartitionList: lee la tabla de particiones del dispositivo |
| `ef [loader|firmware]` | EraseFlash: borra la flash |
| `rd` | ResetDevice: reinicia |
| `sn [serial-number]` / `rsn` | Escribe / lee el número de serie (con `project/app/recamera_utils/sn_tool`) |
| `sfi [firmware]` | ShowFirmwareInfo: muestra información del firmware |
| `exf [firmware|loader] [dir]` | ExtractFirmware: extrae una imagen o loader |
| `gpt [parameter] [out.gpt]` | Genera una GPT a partir de la tabla de particiones |
| `rl [startSec] [len] [file]` / `wl [startSec] [sizeSec] [file]` | Lee / escribe datos LBA |

Ejemplo:

```bash
cd tools/linux/Linux_Upgrade_Tool
sudo ./upgrade_tool ld
sudo ./upgrade_tool ul ../../../output/image/download.bin
sudo ./upgrade_tool uf ../../../output/image/update.img
sudo ./upgrade_tool rd
```

Para obtener todos los detalles de los comandos, consulta `命令行开发工具使用文档.pdf` y `readme.txt` en el mismo directorio.

## Flasheo con GUI

- **Linux:** `tools/linux/SocToolKit/SocToolKit` (GUI Qt; instala primero `38-disk.rules` y `88-rockusb.rules`).
- **Windows:** descarga Rockchip RKDevTool por separado; el SDK **no** incluye la herramienta para Windows.

## Crear una imagen de fábrica

```bash
./build.sh factory
```

Esto usa `tools/linux/SocToolKit/bin/linux/programmer_image_tool` para desempaquetar `output/image/update.img` en `output/image/factory/`. El tipo de imagen se selecciona a partir de `RK_BOOT_MEDIUM` (ajustado a `emmc` para esta placa). Los medios NAND también pasan parámetros de bloque/página/OOB, que pueden sobrescribirse con `RK_NAND_BLOCK_SIZE` y variables relacionadas.

## Imagen de actualización por tarjeta SD

```bash
./build.sh sdcard_upgrade
```

El directorio de salida es `output/image/sdcard_upgrade/`.

> **No disponible para esta configuración de placa:** `sdcard_upgrade` requiere `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG` y `..._FRAGMENT`, pero ninguna de las variables está definida en `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`. `check_config` en `build.sh` omite silenciosamente el comando con `return 0`. Para habilitar las actualizaciones por tarjeta SD, añade ambas variables a la configuración de la placa (normalmente también `RK_SDCARD_UPGRADE_SCREEN_ENABLE`).

## Flujo de arranque y recuperación

- `RK_ENABLE_RECOVERY=y`, `RK_MISC=recovery-misc.img`: la partición misc contiene el flag de arranque de recuperación.
- Se entra en modo de recuperación escribiendo el flag en misc y reiniciando, o activándolo desde una aplicación de capa superior (flujo OTA).
- `RK_OTA_RESOURCE="boot.img rootfs.img"`: OTA actualiza solo las particiones boot y rootfs.
- El restablecimiento de fábrica usa el mecanismo de flag proporcionado por `RK_ENABLE_OTA=y` (el comentario de la configuración de la placa dice “Used for set/get factory reset flag”).

Consulta [OTA y Lanzamientos de Firmware](/es/recamera_pro_bsp_ota_release/) para más detalles.

## Verificar después de flashear

Conecta la consola serie después de encender (1500000 8N1; consulta [Acceso al Dispositivo y Depuración](/es/recamera_pro_bsp_device_debug/)). Deberías ver los registros de arranque de U-Boot → kernel → rootfs, seguidos del banner ASCII de reCamera desde `overlay-buildroot-banner/etc/motd`.

Después de abrir una shell, verifica:

```bash
# cat /proc/version              # Kernel 6.1.157
# uname -m                       # aarch64
# cat /proc/cmdline              # Should match bootargs in the DTS
# cat /etc/os-release            # Buildroot version information
# ls /oem /userdata              # Confirm partitions are mounted
# cat /run/board_id.env          # Baseboard / expansion-board detection result
```

## Problemas comunes

| Síntoma | Causa | Solución |
| --- | --- | --- |
| `upgrade_tool ld` no lista el dispositivo | Falta la regla udev / no está en modo de flasheo / no se ejecuta como root | Instala la regla y ejecuta `udevadm trigger`; confirma el modo Maskrom; ejecútalo con `sudo` |
| `Permission denied` al ejecutar `upgrade_tool` | Se perdió el permiso de ejecución durante la extracción | Ejecuta `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| No hay salida serie después de flashear; el sistema no arranca | Loader/idblock no se flasheó o las versiones no coinciden | Ejecuta `rkflash.sh all` de nuevo y confirma que `download.bin` e `idblock.img` provienen de la misma compilación |
| Pánico del kernel al montar rootfs | `boot.img` y `rootfs.img` provienen de compilaciones diferentes | Reconstruye todo y flashea de nuevo, o al menos flashea boot y rootfs juntos |
| Problemas después de cambiar los tamaños de partición | env / parameter no se actualizó | Flashea `env.img` (`di -p`) por separado o flashea `update.img` con `uf` |
| `./rkflash.sh update` no hace nada | La rama está comentada | Usa `upgrade_tool uf output/image/update.img` |

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