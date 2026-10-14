---
description: Compila imágenes OTA y de fábrica, prepara archivos de publicación y verifica los registros de versiones de lanzamiento.
title: Publicaciones de OTA y Firmware
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_ota_release
sku: 10003420
sidebar_position: 11
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_ota_release/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Publicaciones de OTA y Firmware

## Dónde encontrar la versión

| Ubicación | Valor | Descripción |
| --- | --- | --- |
| Configuración de la placa `RK_OTA_VERSION` | `V1.0.10` | Se escribe en `/etc/ota_version` en el rootfs durante el empaquetado |
| Nombre del archivo | `recamera-pro-sdk-v1.0.10` | Nombre del paquete de distribución |
| Dispositivo `/etc/ota_version` | Igual que arriba | Versión reportada en tiempo de ejecución |
| Dispositivo `/bin/sdkinfo` | Hora de compilación / Versión del SDK / BoardConfig | Generado por `build.sh` durante el empaquetado |
| `project/cfg/BoardConfig_Recamera2/RECAMERA2-IPC-RELEASE-NOTES.md` | Registro de cambios | Actualmente contiene solo `v0.0.1 - init`; **mantenlo actualizado** |

Comprueba la versión en el dispositivo:

```bash
# cat /etc/ota_version
# /bin/sdkinfo
```

La salida de `/bin/sdkinfo` se ve así:

```sh
#!/bin/sh
echo Build Time:  2026-08-28-09:28:00
echo SDK Version: NONE
echo SDK BoardConfig: BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

> La instantánea de código fuente actual no incluye `.repo/`, por lo que la Versión del SDK en `sdkinfo` puede mostrar `NONE`. Consulta [Revisión de código fuente y problemas conocidos](/es/recamera_pro_sdk_source_notes/) para la explicación basada en el código fuente. Verifica la versión del dispositivo usando tanto `/etc/ota_version` como el registro de compilación.

Para cada publicación, **actualiza tanto** `RK_OTA_VERSION` en la configuración de la placa como `RECAMERA2-IPC-RELEASE-NOTES.md`.

## Mecanismo OTA

### Configuración relacionada

```bash
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_ENABLE_OTA=y          # Comment: Used for set/get factory reset flag
```

Por lo tanto, OTA actualiza **solo las particiones `boot` y `rootfs`**. No actualiza U-Boot, idblock, env ni userdata. Esto es intencional: las actualizaciones del gestor de arranque y de la tabla de particiones conllevan más riesgo, y los datos de usuario deben preservarse.

### Crear un paquete OTA

```bash
./build.sh all        # First create boot.img and rootfs.img under output/image/
./build.sh ota
ls -lh output/image/update_ota.tar
```

### Contenido del paquete y script de actualización

`build_ota()` genera `RK_OTA_update.sh` y lo empaqueta con las imágenes en `update_ota.tar` usando `tar -cvhf` (ten en cuenta que `-h` sigue los enlaces simbólicos). La rama para eMMC del script es:

```sh
#!/bin/sh
set -e
COMMON_DIR=`dirname $(realpath $0)`
TOP_DIR=$(realpath $COMMON_DIR/../..)
cd $TOP_DIR
echo "Start to write partitions"
for image in $(ls /dev/block/by-name)
do
    if [ -f $COMMON_DIR/${image}.img ]; then
        echo "Writing $image..."
        dd if=$COMMON_DIR/${image}.img of=/dev/block/by-name/$image || exit 1
    fi
done
echo "Erase misc partition"
dd if=/dev/zero of=/dev/block/by-name/misc bs=32 count=1 seek=512 || exit 2
```

Puntos clave:

- El script itera sobre cada partición bajo `/dev/block/by-name/` y **escribe una partición si el archivo contiene una imagen con el mismo nombre**. Añade una imagen a `RK_OTA_RESOURCE` para incluirla en el paquete OTA; el script en sí no necesita cambiar.
- Borra la marca en la partición misc al final (desplazamiento 512 bloques de 32 bytes), por lo que el siguiente arranque no entra de nuevo en recovery.
- Con `RK_ENABLE_RECOVERY=y`, el script se empaqueta usando `-C $OTA_SCRIPT_PATH RK_OTA_update.sh`.
- Los medios NAND usan una rama diferente con `flash_eraseall` + `nandwrite -p`. Esta placa usa eMMC, por lo que esa rama no aplica.

### Flujo OTA (conceptual)

```text
Application downloads update_ota.tar → extracts it to a directory
        ↓
Write the recovery flag to the misc partition (RK_ENABLE_OTA provides set/get factory-reset flag interfaces)
        ↓
Reboot → U-Boot reads misc → enters recovery
        ↓
Recovery runs RK_OTA_update.sh → writes boot/rootfs with dd → clears the misc flag
        ↓
Reboot into the new system → verify with cat /etc/ota_version
```

Compila la imagen de recovery por separado con `./build.sh recovery` (`RK_KERNEL_RECOVERY_DEFCONFIG=rv1126b_ipc_defconfig` más el fragmento `rv1126b-recovery.config`); el contenido del ramdisk está bajo `output/out/ramdisk/`.

> El **código de la aplicación de capa superior** que dispara recovery y OTA está en `recamera_ipc` / `recamera_services` (las acciones “Firmware Update” y “Factory Reset” de la interfaz web). Esta página cubre solo el empaquetado del lado del SDK. Las llamadas API específicas aún deben verificarse en un dispositivo.

### Restablecimiento de fábrica

El comentario para `RK_ENABLE_OTA=y` indica que proporciona funciones para establecer/obtener la marca de restablecimiento de fábrica. En la práctica, un restablecimiento de fábrica escribe una marca en misc y borra o recrea `userdata`. Los datos de usuario residen bajo `/userdata`, incluyendo `/userdata/config/rkipc.ini`, `/userdata/config/system/login_lock.json` y `eth0_dns_mode`; un restablecimiento de fábrica restablece estas configuraciones.

## Imagen completa de firmware

```bash
./build.sh updateimg     # Package all partition images as output/image/update.img
./build.sh unpackimg     # Extract update.img
```

Usa `update.img` con:

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool uf output/image/update.img
```

> `./rkflash.sh update` **no funciona** porque esa rama está comentada en el script. Usa `upgrade_tool uf` directamente.

## Imagen de fábrica

```bash
./build.sh factory
ls output/image/factory/
```

Esto invoca internamente `tools/linux/SocToolKit/bin/linux/programmer_image_tool -i output/image/update.img -o output/image/factory/ -t emmc`. El tipo de imagen se determina por `RK_BOOT_MEDIUM`. Los medios NAND usan `-b <blockKB> -p <pageKB> [-s <oobB>]`; sobrescribe los valores predeterminados (0x20000 / 2048 / 128) con `RK_NAND_BLOCK_SIZE`, `RK_NAND_PAGE_SIZE` y `RK_NAND_OOB_SIZE`.

## Archivos de publicación: `save` / `allsave`

```bash
./build.sh save          # Create an archive
./build.sh save xml      # Generate only the repo manifest XML, then exit
./build.sh allsave       # all + save; default when ./build.sh is run without arguments
```

`build_save()` construye la ruta del archivo y la convierte a **MAYÚSCULAS**:

```text
IMAGE/<application-scenario>_<boot-medium>_<power-scheme>_<hardware-version>_<YYYYMMDD.HHMM>_RELEASE_TEST/
```

Para esta configuración de placa, la ruta se ve así:

```text
IMAGE/IPC_64BIT_EMMC_RK801_RV1126B_V1_20260828.0928_RELEASE_TEST/
├── IMAGES/                        # All contents of output/image/
├── PATCHES/                       # Patches and repo information (__GET_REPO_INFO)
├── DEBUG_FILES/
│   ├── kernel/vmlinux.tar.bz2     # Unstripped kernel for crash analysis
│   ├── media_out.tar.bz2          # Complete media outputs
│   ├── app_out.tar                # Complete application outputs
│   └── uboot/uboot.debug.tar.bz2
└── build_info.txt                 # BUILD-ID: <hostname>:<user> + build_info output
```

> `build_save()` convierte a mayúsculas la ruta del archivo, por lo que el directorio se llama **`IMAGE/`**, como se muestra en la guía de inicio rápido del SDK.
>
> El sufijo es siempre `_RELEASE_TEST`, incluso para una publicación de producción real. Para distinguir compilaciones de producción y de prueba, cambia el nombre del archivo o registra el estado en `build_info.txt`.

Los `DEBUG_FILES` son esenciales para investigar problemas en campo. **Conserva el archivo para cada publicación externa**, especialmente `vmlinux`, que se requiere para decodificar las pilas de llamadas de pánicos del kernel.

## Registrar información y configuración de compilación

`./build.sh info` imprime:

- La ruta real del `BOARD_CONFIG` actual
- Todas las variables de entorno `RK_*` no vacías, ordenadas
- La salida de `make info` de los SDK de componentes sysdrv, media y app
- Resultados de la comprobación de dominios de energía (`build_check_power_domain`)

Adjunta esta salida al registro de publicación para evitar tener que adivinar más tarde cómo se compiló el firmware.

```bash
./build.sh info > release_info_$(date +%Y%m%d).txt 2>&1
```

`build_info()` también intenta enlazar o copiar `project/cfg/BoardConfig_Recamera2/RK-RELEASE-NOTES-Recamera2.txt` a la raíz del SDK si ese archivo existe. El archivo actual se llama `RECAMERA2-IPC-RELEASE-NOTES.md`, lo cual **no coincide** con el patrón `RK-RELEASE-NOTES-<board-name>.txt` que el script busca, por lo que no se promocionará automáticamente. El `RECAMERA2-IPC-RELEASE-NOTES.md` de nivel raíz es un enlace simbólico a él.

## Lista de verificación para la publicación

### Antes de la compilación

- [ ] Sincroniza los repositorios internos / de `git` a la etiqueta objetivo y confirma que el árbol de trabajo está limpio.
- [ ] Actualiza `RK_OTA_VERSION` en la configuración de la placa.
- [ ] Actualiza `RECAMERA2-IPC-RELEASE-NOTES.md` con los cambios de esta publicación (actualmente contiene solo `v0.0.1 - init`; mantenlo).
- [ ] Ejecuta `./build.sh lunch` y selecciona `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`.
- [ ] Ejecuta `./setup_build_env.sh --check`; confirma que no falte ninguna herramienta.

### Compilación

- [ ] Ejecuta `./build.sh clean` al cambiar de versión o de configuración de placa.
- [ ] Ejecuta `./build.sh allsave` y conserva el registro de compilación.
- [ ] Verifica que `boot.img` sea menor de 11 M y `rootfs.img` sea menor de 3 G bajo `output/image/`.
- [ ] Confirma que se generó `IMAGE/.../build_info.txt`.

### Verificación

- [ ] Flashea una placa limpia con `sudo ./rkflash.sh all` y confirma que arranca hasta el banner.
- [ ] Confirma el nombre de BoardConfig en `/bin/sdkinfo` y verifica que `cat /etc/ota_version` coincida con la nueva versión.
- [ ] Vídeo: confirma que la interfaz web muestra vídeo y que go2rtc WebRTC en `:8555` puede recibir un flujo.
- [ ] Inferencia de IA: confirma que el modelo NPU se carga y que `recamera_notify` recibe y reenvía eventos.
- [ ] Audio: verifica que `ai_debug` pueda grabar cuatro canales y que el altavoz emita audio.
- [ ] OTA: actualiza desde la publicación anterior usando `update_ota.tar` y confirma que la configuración de `/userdata` se conserva.
- [ ] Restablecimiento de fábrica: confirma que el dispositivo vuelve a su configuración predeterminada.
- [ ] Estabilidad: ejecuta las pruebas de estrés relevantes bajo `media/samples/example/test/` y `recamera_utils/stress_test/`.
- [ ] Watchdog: confirma que una prueba de larga duración no dispara un reinicio (`S15watchdog`, tiempo de espera de 30 segundos).

### Archivo

- [ ] Sube todo el directorio `IMAGE/`, incluidos `DEBUG_FILES/`, al repositorio interno de artefactos.
- [ ] Registra juntos `update.img`, `update_ota.tar`, la versión y el SHA-256.
- [ ] Adjunta la salida de `./build.sh info` al registro de publicación.

## Referencia rápida de comandos

| Comando | Salida |
| --- | --- |
| `./build.sh firmware` | Imágenes de partición en `output/image/` |
| `./build.sh updateimg` | `output/image/update.img` |
| `./build.sh ota` | `output/image/update_ota.tar` |
| `./build.sh factory` | `output/image/factory/` |
| `./build.sh recovery` | `output/image/recovery.img` |
| `./build.sh save` | `IMAGE/<...>_RELEASE_TEST/` |
| `./build.sh info` | Imprime la configuración actual; no escribe ningún archivo |
| `./build.sh unpackimg` | Extrae `update.img` |

## Documentos relacionados

- `docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`: aplicación y sincronización del SDK (solicitar actualizaciones del SDK a Rockchip)
- `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`: registrar incidencias con Rockchip
- `docs/zh/ipc/Rockchip_RV1126B_Linux_IPC_SDK_Release_V1.0.0_20250620_CN.pdf`: notas de la versión del SDK upstream
- `project/cfg/BoardConfig_IPC/RK-RELEASE-NOTES-IPC.txt`: formato de notas de versión para la placa de referencia IPC de Rockchip; úsalo como plantilla para mantener `RECAMERA2-IPC-RELEASE-NOTES.md`

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