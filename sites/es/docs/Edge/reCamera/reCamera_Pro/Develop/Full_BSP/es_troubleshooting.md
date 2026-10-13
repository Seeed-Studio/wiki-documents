---
description: Diagnostica problemas del paquete de código fuente completo según los síntomas de compilación, flasheo, arranque y tiempo de ejecución.
title: Solución de problemas de BSP
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_troubleshooting
sku: 10003420
sidebar_position: 8
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_troubleshooting/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Solución de problemas de BSP

La regla general es **identificar primero la capa que falla**. Este SDK tiene cinco capas, cada una con diferentes métodos de depuración:

```text
1. Host environment     → setup_build_env.sh --check / ./build.sh check
2. Build                → build.sh logs, make info, help <component>
3. Images and flashing  → output/image/, upgrade_tool, serial console
4. System boot          → serial console at 1500000, init scripts, /var/log
5. Application/runtime  → /var/log/Recamera2_developer.log, processes, ports, configuration
```

## 1. Herramientas generales de diagnóstico

| Comando | Propósito |
| --- | --- |
| `./build.sh check` | Comprobar dependencias de compilación en el host |
| `./build.sh info` | Imprimir el BoardConfig actual, todas las variables `RK_*` no vacías, `make info` de los tres SDK de componentes y comprobaciones de dominios de alimentación |
| `./build.sh help <component>` | Imprimir el comando `make` real y sus argumentos para un componente, de modo que puedas reproducirlo manualmente |
| `make -C project/app/<app> V=1` | Habilitar salida detallada para la compilación de una aplicación |
| `make V=1 -C media/samples` | Habilitar salida detallada para media (un `V` no vacío desactiva el modo silencioso `CMD_DBG=@`) |
| `./build.sh DEBUG app` | Volver a compilar con `-O0 -g` y omitir el stripping durante el empaquetado |
| `./build.sh ASAN app` | Volver a compilar con AddressSanitizer para investigar problemas de memoria |
| `/bin/sdkinfo` en el dispositivo | Identificar la compilación y el BoardConfig que se ejecutan en el dispositivo |
| `cat /etc/ota_version` en el dispositivo | Comprobar la versión de firmware |

`build.sh` establece `trap 'err_handler' ERR`; en caso de fallo, imprime la función y el número de línea donde falló. Busca en el registro `err_handler` o `Error:` para localizar el problema rápidamente.

## 2. Problemas del entorno del host y de compilación

| Síntoma | Causa | Solución |
| --- | --- | --- |
| `./build.sh --help` abre el menú de selección de placa | `lunch` no se ha ejecutado; el script comprueba `.BoardConfig.mk` antes de analizar los argumentos | Ejecuta primero `./build.sh lunch`; después `help` / `--help` funcionarán |
| `Not found tool aarch64-rockchip1240-linux-gnu-gcc, please install first !!!` | El directorio de la toolchain falta o no es ejecutable | Confirma que `tools/linux/toolchain/aarch64-rockchip1240-linux-gnu/bin/` existe; si es necesario, ejecuta `source tools/linux/toolchain/<tc>/env_install_toolchain.sh` |
| `*** error: Please Check Configure !!!` / `build app depend on media libs and header files` | La compilación de la app comenzó antes de compilar media | Ejecuta primero `./build.sh media` y confirma que `output/out/media_out/{include,lib}` existe |
| `Build rootfs is not yet complete, packaging cannot proceed!` | El archivo tar de rootfs no se generó | Ejecuta `./build.sh rootfs` y comprueba `output/out/sysdrv_out/rootfs_glibc_rv1126b.tar` |
| No está claro qué app falló al compilar | `project/app/Makefile` compila las apps en serie con `$(foreach)` y sale en el primer fallo | Reproduce la compilación con `make -C project/app/<app> V=1` |
| La app en Rust (`recamera_services`) produce un binario armv7 | El Makefile de la app usa por defecto `armv7-unknown-linux-gnueabihf` | Ejecuta `make SERVICE_TARGET=aarch64-unknown-linux-gnu` |
| `cross` informa de un error o se cuelga | Docker está detenido o el usuario no pertenece al grupo docker | Ejecuta `sudo systemctl start docker`; cierra sesión y vuelve a entrar |
| La compilación del frontend en Node falla | La versión de Node.js es inferior a 18 | Ejecuta `nvm use 18` o usa la versión instalada por `setup_build_env.sh` |
| La versión de CMake es demasiado antigua | `recamera_ipc` requiere CMake ≥3.21 | Usa el CMake instalado por `setup_build_env.sh` y comprueba el orden de PATH |
| Errores de compilación relacionados con protobuf | Faltan `libprotobuf-dev` / `protobuf-compiler` | Ejecuta `sudo apt install libprotobuf-dev protobuf-compiler` |
| Errores inesperados después de cambiar de placa | Las salidas de las configuraciones antigua y nueva están mezcladas | Ejecuta `./build.sh clean` y luego vuelve a compilar |
| El disco está lleno | Las salidas de Buildroot, kernel y media son grandes | Mantén al menos 20 GB libres (100 GB recomendados); usa `du -sh output sysdrv/source/buildroot` para localizar el uso |
| Problemas de permisos después de una compilación como root | Las salidas de compilación pertenecen a root | Ejecuta `sudo chown -R $USER:$USER .` y vuelve a compilar |
| Los scripts se comportan de forma incorrecta porque faltan enlaces simbólicos | Los archivos se transfirieron a través de Windows | Extrae de nuevo el archivo tar original; consulta [Download and Extract](/es/recamera_pro_bsp_download/) |

## 3. Problemas de flasheo

| Síntoma | Causa | Solución |
| --- | --- | --- |
| `upgrade_tool ld` no lista el dispositivo | No está en modo Maskrom / Loader; falta la regla udev; no se ejecuta con sudo | Instala `88-rockusb.rules`, luego ejecuta `udevadm control --reload-rules && udevadm trigger`; confirma que `lsusb` muestra un dispositivo `2207:`; usa `sudo` |
| `Permission denied` al ejecutar `upgrade_tool` | Se perdió el permiso de ejecución durante la extracción | Ejecuta `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| `./rkflash.sh update` no hace nada | La rama está comentada en el script | Ejecuta `sudo upgrade_tool uf output/image/update.img` |
| Comportamiento inesperado de particiones después de `./rkflash.sh all` | `all` no flashea `env.img` | Ejecuta `upgrade_tool di -p output/image/env.img` manualmente (o usa `parameter.txt`) |
| `./build.sh sdcard_upgrade` no produce salida | La configuración de placa de Recamera2 no define `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG`; `check_config` devuelve en silencio | Añade las variables necesarias a la configuración de la placa; consulta [System Customization (DTS / Kernel / Buildroot / Overlay)](/es/recamera_pro_bsp_system_customization/) |
| El dispositivo queda brickeado después de interrumpir el flasheo | El Loader no se escribió completamente | Fuerza el modo Maskrom, ejecuta `upgrade_tool ul download.bin` y luego vuelve a flashear |
| `Writing 'xxx' failed` | El tamaño de la imagen no coincide con el tamaño de la partición | Comprueba que `boot.img` sea menor de 11 M y `rootfs.img` menor de 3 G |

## 4. Problemas de arranque

**La consola serie es el único canal fiable:** 1500000 8N1, `console=ttyFIQ0`.

| Síntoma en la consola serie | Diagnóstico | Solución |
| --- | --- | --- |
| Sin salida en absoluto | Loader / DDR no se inició, o la conexión serie / velocidad en baudios es incorrecta | Confirma 1500000 baudios; vuelve a flashear `idblock.img` + `download.bin`; mide la señal TX serie |
| U-Boot aparece y luego se detiene | Problema con la imagen del kernel o el DTB | Vuelve a flashear `boot.img`; comprueba `RK_KERNEL_DTS` |
| `Kernel panic - not syncing: VFS: Unable to mount root fs` | rootfs no coincide con boot, o PARTUUID cambió | Usa `boot` y `rootfs` de la misma compilación; después de cambios de partición, vuelve a flashear env |
| Reinicios repetidos con mensajes de watchdog en la consola serie | Un proceso bloqueado impidió la actualización del watchdog (`-T 30`) | Detén `S15watchdog` e investiga; comprueba si hay un proceso bloqueado |
| El sistema arranca pero no tiene red | Problema con el script udhcpc o la prioridad de DNS | Consulta la sección de solución de problemas de red en [Device Access and Debugging](/es/recamera_pro_bsp_device_debug/) |
| La hora es incorrecta por un número entero de horas | `S20hwclock` usa `--hctosys --utc`, aunque el comentario dice que el RTC almacena la hora local | Confirma si el RTC almacena UTC o hora local y ajusta el script si es necesario |
| No se puede entrar en Linux pero U-Boot funciona | rootfs está dañado | Flashea solo rootfs con `sudo ./rkflash.sh rootfs` |

Comprueba la secuencia de arranque con:

```bash
# ls /etc/init.d/ /oem/usr/etc/init.d/          # Available startup scripts
# dmesg | head -50                               # Early kernel logs
# cat /var/log/Recamera2_developer.log | head    # Application logs
# ps w                                             # Processes that actually started
```

## 5. Problemas en tiempo de ejecución y de aplicaciones

### Biblioteca compartida no encontrada

```bash
# ldd /userdata/my_app
```

- Falta `librockit.so`, `librknnrt.so`, etc. → `LD_LIBRARY_PATH` no incluye `/oem/usr/lib`. Las shells de inicio de sesión lo configuran a través de `/etc/profile.d/RkEnv.sh`; para contextos sin inicio de sesión (scripts de init, cron), ejecuta `source` de ese archivo o exporta la variable explícitamente.
- Falta una biblioteca de terceros → la biblioteca no está en el rootfs. Habilita su paquete de Buildroot; consulta [System Customization (DTS / Kernel / Buildroot / Overlay)](/es/recamera_pro_bsp_system_customization/).
- En tiempo de enlace, también puedes necesitar `-Wl,-rpath,/oem/usr/lib`; consulta [Choose a Development Path](/es/recamera_pro_dev_path/).

### Incompatibilidad de arquitectura / ABI

```bash
# file /userdata/my_app        # Must be ARM aarch64
```

`Exec format error` significa que el binario se compiló para x86-64. `GLIBC_2.xx not found` significa que la toolchain del host es más nueva que el entorno de ejecución del dispositivo de destino.

### Problemas de vídeo

| Síntoma | Causa | Solución |
| --- | --- | --- |
| La muestra no puede abrir VI / el nodo de dispositivo está ocupado | `rkipc` ya posee el dispositivo | Ejecuta `sh /oem/usr/bin/RkLunch-stop.sh` y vuelve a intentarlo; restaura el servicio cuando termines |
| La imagen es completamente negra o verde | Sensor no detectado o falta el archivo IQ | Ejecuta `dmesg | grep -i [sensor]` y comprueba `/oem/usr/share/iqfiles/` |
| Colores incorrectos o mucho ruido | El archivo IQ no coincide con el sensor | Compara `RK_CAMERA_SENSOR_IQFILES` con el sensor instalado |
| No se puede recibir el flujo RTSP | go2rtc no ha habilitado el puerto externo 554 | Comprueba `[video.0.rtsp] enable` en `/userdata/config/rkipc.ini` y luego reinicia `S50go2rtc` |
| La interfaz web muestra vídeo pero un reproductor externo no | El API de go2rtc está ligado a 127.0.0.1 | Usa WebRTC en `:8555` o reenvía el puerto `1984` por SSH |
| El número de `/dev/videoN` cambió | Diferentes versiones de firmware enumeran los dispositivos de forma distinta | Compruébalo en el dispositivo con `v4l2-ctl --list-devices`; no codifiques el número de forma fija |

Consulta `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` para la guía de solución de problemas de vídeo de Rockchip.

### Problemas de NPU / IA

| Síntoma | Causa | Solución |
| --- | --- | --- |
| `rknn_init` falla | El modelo no se convirtió para rv1126b, o las versiones de Toolkit y Runtime no coinciden | Convierte de nuevo con `target_platform='rv1126b'`; comprueba la versión de `librknnrt.so` de la placa (baseline interno 2.3.2) |
| La salida de inferencia es completamente incorrecta | Desajuste en el preprocesado (mean/std, RGB/BGR, NCHW/NHWC, política de redimensionado) | Comprueba los parámetros del script de exportación en lugar de adivinar |
| Los resultados son inexactos | El conjunto de calibración INT8 no es representativo | Primero establece una línea base FP16 y luego vuelve a cuantizar con un mejor conjunto de calibración |
| OOM / proceso terminado | El LLM / VLM usa demasiada memoria | Comprueba `memory_usage` con `rkllm_benchmark_demo`; prueba una cuantización más pequeña |
| La inferencia es lenta | Solo se está usando un núcleo de NPU | Establece `rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1)` |
| El rendimiento se degrada tras una ejecución prolongada | Thermal throttling | Comprueba el estado térmico; consulta `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf` |
| La salida de VLM es ilegible o inesperada | Los tokens especiales de visión no coinciden | Pasa `img_start` / `img_end` / `img_content` en tiempo de ejecución |

### Problemas de audio

Consulta la tabla de problemas en [Desarrollo de audio](/es/recamera_pro_audio_development/). El problema más común es abrir `hw:0,0` directamente en lugar de usar dsnoop, lo que da como resultado `Device or resource busy`.

### Servicios y puertos

```bash
# netstat -tlnp        # 22 / 7681 / 21 / 8555 / 1984 / 8765 / 554 / 5554
# ps w | grep -E 'rkipc|gmgr|skt2ws|tmir|rcisd|go2rtc|ttyd|notify'
# /etc/init.d/S49notify start|stop
# /oem/usr/etc/init.d/S50go2rtc restart
```

Si SSH rechaza una contraseña correcta, es posible que se haya activado el bloqueo de PAM (5 fallos / 300 segundos). El archivo de estado es `/userdata/config/system/login_lock.json`; reiniciar lo borra.

Si la página de ttyd indica que el usuario no está permitido, la lista de permitidos en `ssh-login-whitelist.sh` contiene solo `root` y `admin`.

Si FTP no muestra el directorio de configuración, `hide_file` / `deny_file` en `vsftpd.conf` lo ocultan intencionadamente. Usa SFTP en su lugar.

### Registros

```bash
# tail -f /var/log/Recamera2_developer.log    # Human-readable
# tail -n 100 /var/log/Recamera2.log          # JSON for programmatic parsing
# dmesg                                        # Kernel logs
```

Los registros en vivo por WebSocket en el puerto 8765 se enlazan a 127.0.0.1. Desde el host, usa `ssh -L 8765:127.0.0.1:8765 root@<IP>`.

### Memoria y rendimiento

El kernel tiene nodos de depuración habilitados; examínalos con:

```bash
# cat /proc/rk_cma/*        2>/dev/null      # CONFIG_RK_CMA_PROCFS
# cat /proc/rk_dmabuf/*     2>/dev/null      # CONFIG_RK_DMABUF_PROCFS
# cat /proc/rk_memblock/*   2>/dev/null      # CONFIG_RK_MEMBLOCK_PROCFS
# cat /proc/rk_rga/*        2>/dev/null      # CONFIG_ROCKCHIP_RGA_PROC_FS
# ls /sys/kernel/debug/                       # CONFIG_DEBUG_FS
```

Los nombres exactos de los nodos dependen del dispositivo y aún necesitan verificación de hardware. Ten en cuenta que `RK_BOOTARGS_CMA_SIZE="8M"` establece una región CMA pequeña; compruébala primero si fallan asignaciones grandes y contiguas.

Los coredumps están habilitados con `CONFIG_ELF_CORE=y`. `__BUILD_ENABLE_COREDUMP_SCRIPT()` en `build.sh` puede generar un script de habilitación. Úsalo junto con `IMAGE/.../DEBUG_FILES/kernel/vmlinux.tar.bz2` y un cross-gdb para analizar un volcado.

## 6. Información que se debe incluir en un informe de errores

Para un informe interno o un problema de Rockchip (consulta `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`), recopila esta información en una sola pasada:

```bash
# On the host
./build.sh info > info.txt 2>&1
cat IMAGE/*/build_info.txt

# On the device
/bin/sdkinfo
cat /etc/ota_version
uname -a && cat /proc/cmdline
dmesg > dmesg.txt
cat /var/log/Recamera2_developer.log > app.log
cat /run/board_id.env
netstat -tlnp
ps w
```

Incluye también el registro completo de arranque serie (1500000 baudios), los pasos de reproducción y la ruta al archivo `IMAGE/..._RELEASE_TEST/`.

Los hallazgos de código estático, sus evidencias, impacto y estado de verificación se recopilan en [Revisión de código fuente y problemas conocidos](/es/recamera_pro_sdk_source_notes/) para mantener las auditorías de mantenimiento separadas de los procedimientos operativos. Si encuentras un comportamiento relacionado, verifícalo primero con respecto a los archivos y la versión actual del SDK.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>