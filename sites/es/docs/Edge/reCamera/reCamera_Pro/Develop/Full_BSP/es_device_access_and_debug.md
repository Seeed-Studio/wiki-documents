---
description: Mantén el dispositivo y depura firmware personalizado usando la consola serie, SSH, registros y herramientas de red.
title: Acceso al dispositivo y depuración
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_device_debug
sku: 10003420
sidebar_position: 7
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_device_debug/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Acceso al dispositivo y depuración

Esta página resume los canales de depuración **realmente incluidos** en el firmware. La información proviene de la configuración de superposición de la placa en `project/cfg/BoardConfig_Recamera2/overlay/`. Se pueden añadir o eliminar canales con la opción `RK_POST_OVERLAY`; consulta [Personalización del sistema (DTS / Kernel / Buildroot / Overlay)](/es/recamera_pro_bsp_system_customization/).

## Resumen de canales

| Canal | Puerto | Habilitado por | Propósito |
| --- | --- | --- | --- |
| Consola serie | `ttyFIQ0`, **1500000** 8N1 | U-Boot `CONFIG_BAUDRATE` | Registros de arranque, interacción con U-Boot, recuperación |
| SSH | 22 | `overlay-buildroot-sshd` (`S50sshd`) | Canal principal de desarrollo |
| Terminal web ttyd | **7681** | `overlay-buildroot-ttyd` (`S50ttyd`) | Abrir una shell en un navegador |
| Registros WebSocket | **8765** (solo loopback) | `overlay-buildroot-log` (`S10log`) | Ver registros en vivo en la interfaz web |
| go2rtc API | **1984** (solo 127.0.0.1) | `overlay-buildroot-go2rtc` (`S50go2rtc`) | API de gestión de flujos |
| go2rtc WebRTC | **8555** | Igual que arriba | Recibir flujos WebRTC |
| go2rtc RTSP | **554** (habilitado según sea necesario) | Igual que arriba | RTSP externo |
| RTSP interno rkipc | **5554** (127.0.0.1) | `recamera_ipc` | Fuente ascendente para go2rtc |
| vsftpd | 21 | `overlay-buildroot-vsftpd` (`S70vsftpd`) | Transferencia de archivos |

## Consola serie

U-Boot establece `CONFIG_BAUDRATE=1500000` (`sysdrv/source/uboot/u-boot/configs/rv1126b_recamera2_defconfig:162`). La línea de comandos del kernel usa `console=ttyFIQ0` y `earlycon=uart8250,mmio32,0x20810000`.

```bash
# On the host (USB-to-serial adapter)
picocom -b 1500000 /dev/ttyUSB0
# Or
minicom -D /dev/ttyUSB0 -b 1500000
```

La velocidad en baudios es **1500000**, no la común 115200. Una velocidad en baudios que no coincida produce salida ilegible.

La consola serie es el único canal disponible cuando el sistema no puede arrancar. Úsala para depurar problemas de inicio como kernel panics, fallos al montar la rootfs y la inicialización de la DDR.

## SSH

Ajustes clave en `overlay-buildroot-sshd/etc/ssh/sshd_config`:

```text
PermitRootLogin yes
PasswordAuthentication yes
AuthorizedKeysFile  .ssh/authorized_keys
UsePAM yes
UseDNS no
Subsystem sftp /usr/libexec/sftp-server
```

De forma predeterminada, **el inicio de sesión de root con contraseña está habilitado**, y también se admite la autenticación por clave pública. SFTP está disponible para transferencias de archivos.

```bash
ssh root@<device-IP>
scp my_app root@<device-IP>:/userdata/
sftp root@<device-IP>
```

### Bloqueo por inicios de sesión fallidos (PAM)

`overlay-buildroot-sshd/usr/libexec/ssh-login-lock.py` usa PAM para proteger contra intentos de fuerza bruta:

- Después de **5 fallos consecutivos** (`MAX_ATTEMPTS = 5`), la cuenta se bloquea durante **300 segundos** (`LOCKOUT_SECONDS = 300`).
- Los intentos se cuentan por IP de cliente (`PAM_RHOST`), usando `/proc/uptime` como base de tiempo, por lo que **un reinicio borra el contador**.
- Archivo de estado: `/userdata/config/system/login_lock.json`; el archivo de bloqueo asociado es `login_lock.json.lock`.

Si se produce un bloqueo, espera 300 segundos, reinicia o inicia sesión por la consola serie y elimina `/userdata/config/system/login_lock.json`.

## Terminal web (`ttyd`)

`overlay-buildroot-ttyd/oem/usr/etc/init.d/S50ttyd` inicia:

```text
ttyd -p 7681 /oem/usr/bin/ssh-login-whitelist.sh
```

Abre `http://<device-IP>:7681` en un navegador; solicitará un nombre de usuario. El script wrapper `ssh-login-whitelist.sh` solo permite usuarios en su lista de permitidos y luego ejecuta `exec ssh <user>@localhost`:

```bash
ALLOWED_USERS=("root" "admin")
```

En otras palabras, **ttyd es efectivamente un cliente SSH en el navegador**. La autenticación sigue usando SSH (incluida la política de bloqueo PAM anterior); los usuarios fuera de la lista de permitidos son rechazados. Para añadir un usuario, edita el array `ALLOWED_USERS` y reconstruye la rootfs, o edita el script directamente en el dispositivo (`/oem` puede necesitar ser remontado si es de solo lectura).

## Sistema de registro

El firmware tiene tres capas de registro. Entender sus funciones puede ahorrar tiempo de depuración.

### 1. syslog-ng (`overlay-buildroot-syslog-ng/etc/syslog-ng.conf`, @version 3.38)

| Salida | Ruta / destino | Formato |
| --- | --- | --- |
| `d_Recamera2` | `/var/log/Recamera2.log` | JSON: `{"sTimestamp","sLevel","sData"}` |
| `d_Recamera2_developer` | `/var/log/Recamera2_developer.log` | Texto: `ISODATE HOST PROGRAM[PID]: [LEVEL] MESSAGE` |
| `d_python_udp` | UDP `127.0.0.1:5140` | Reenviado al servicio de registro WebSocket |

Los archivos de registro pertenecen a `root:adm` con permisos `0640`. Para depuración, empieza con `Recamera2_developer.log` (legible para humanos); usa `Recamera2.log` (JSON) para análisis programático.

```bash
# tail -f /var/log/Recamera2_developer.log
# tail -n 200 /var/log/Recamera2.log
```

### 2. Servicio de registro WebSocket (`overlay-buildroot-log/oem/usr/bin/websocket_log.py`)

`S10log` lanza el servicio con python3:

- Escucha en UDP `127.0.0.1:5140` para mensajes reenviados por syslog-ng.
- Proporciona un servicio WebSocket en el puerto **8765**, enlazado a `127.0.0.1` (`SERVER_IP = "127.0.0.1"`).
- Mantiene en memoria los últimos **2000** mensajes (`MAX_LOG_SIZE = 2000`).

Como se enlaza a loopback, reenvía el puerto por SSH para acceder a él desde el host:

```bash
ssh -L 8765:127.0.0.1:8765 root@<device-IP>
# Then connect a browser or script to ws://localhost:8765
```

El panel de registros en vivo de la interfaz web usa esta ruta.

### 3. Consola serie / `dmesg`

Los mensajes del kernel se envían a `console=ttyFIQ0`. En el dispositivo, usa `dmesg` para inspeccionar el búfer de anillo del kernel.

## Flujos de vídeo (go2rtc)

Configuración predeterminada en `overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml`:

```yaml
streams:
  main:
    - rtsp://127.0.0.1:5554/live/0
  sub:
    - rtsp://127.0.0.1:5554/live/1
api:
  listen: "127.0.0.1:1984"
webrtc:
  listen: ":8555"
rtsp:
  listen: ""        # Not listening by default
```

La arquitectura es: **`recamera_ipc` (rkipc) proporciona una fuente RTSP interna en 127.0.0.1:5554 → go2rtc extrae el flujo y lo expone mediante protocolos como WebRTC/HLS**. `main` es el flujo principal y `sub` es el subflujo.

### El puerto RTSP externo se configura dinámicamente

Cuando `S50go2rtc` se inicia, lee `/userdata/config/rkipc.ini` y decide si expone RTSP en `:554`, usando este orden de prioridad:

1. Comprobar `enable=1` en `[video.0.rtsp]`.
2. En caso contrario, comprobar `enable=1` en `[video.0.onvif]`.
3. En caso contrario, comprobar `enable=1` en `[video.1.rtsp]`.
4. Si ninguno está habilitado, no abrir el puerto RTSP; usar solo la configuración predeterminada.

Cuando RTSP está habilitado, **copia** el YAML predeterminado a `/tmp/go2rtc/go2rtc.yaml` y añade `rtsp: listen: ":554"`. Si `authtype=1`, también incluye el `username` y `password` del archivo INI. Esto evita modificar la configuración predeterminada bajo el directorio de solo lectura `/oem`.

Comandos útiles de depuración:

```bash
# cat /userdata/config/rkipc.ini | grep -A5 '\[video.0.rtsp\]'
# cat /tmp/go2rtc/go2rtc.yaml          # Active configuration
# cat /var/run/go2rtc.pid
# /oem/usr/etc/init.d/S50go2rtc restart
```

Después de cambiar los interruptores RTSP / ONVIF en `rkipc.ini`, reinicia go2rtc para que regenere la configuración.

URLs de flujo (cuando RTSP está habilitado):

```text
rtsp://<user>:<pass>@<device-IP>:554/...
http://<device-IP>:8555/            # WebRTC
```

La ruta de la URL depende del nombre del flujo de go2rtc (`main` / `sub`). Añade un ejemplo completo después de verificarlo en un dispositivo.

## FTP (`vsftpd`)

`overlay-buildroot-vsftpd/etc/vsftpd.conf` configura el puerto 21, `local_enable=YES`, `write_enable=YES`, `chroot_local_user=YES` y `ssl_enable=NO`. La lista de usuarios es `root` y `admin`.

El directorio de configuración está oculto y el acceso está denegado:

```text
hide_file={config,*/config,config_tar,*/config_tar}
deny_file={config,*/config,config_tar,*/config_tar}
```

Como resultado, `/userdata/config` no es visible por FTP. Esto es un diseño de producto intencional; la configuración debe cambiarse a través de la interfaz web o la API. Usa SSH/SFTP en lugar de FTP al depurar.

## Variables de entorno y convenciones de directorios

`overlay-buildroot-rkenv/etc/profile.d/RkEnv.sh` establece estas variables para shells de inicio de sesión:

```bash
export OEM_HOME=/oem
export PATH=$PATH:/oem:/oem/bin:/oem/usr/bin:/oem/sbin:/oem/usr/sbin
export LD_LIBRARY_PATH=/oem/usr/lib:/oem/lib:$LD_LIBRARY_PATH
export HOME=/userdata
```

Esto significa:

- **`/oem`** contiene aplicaciones y bibliotecas de Seeed / Rockchip (incluyendo `go2rtc`, el wrapper de `ttyd`, `websocket_log.py` y `librknnrt.so`).
- **`/userdata`** es escribible y almacena configuración (`/userdata/config/`) y datos de usuario. También es el `HOME` predeterminado.
- Tu programa compilado de forma cruzada puede cargar bibliotecas bajo `/oem/usr/lib` mediante `LD_LIBRARY_PATH`. Si se ejecuta desde un script de inicio, asegúrate de que el entorno también esté configurado allí.

## Otros servicios integrados

| Script | Propósito |
| --- | --- |
| `overlay-buildroot-board-id/etc/init.d/S00board-id` | Se ejecuta temprano durante el arranque y lee el ADC (`/sys/bus/iio/devices/iio:device0`) para identificar el modelo de la placa base y de la placa de expansión; escribe el resultado en `/run/board_id.env`. Promedia tres muestras con una tolerancia de 440. Los niveles de voltaje son 0.0/0.3/0.6/0.9/1.2/1.5/1.8 V y se asignan a `V0.9`–`V1.5` y `TYPE0`–`TYPE6`. |
| `overlay-buildroot-hwclock/etc/init.d/S20hwclock` | Ejecuta `hwclock --hctosys --utc` en el arranque para sincronizar desde el RTC y escribe la hora de vuelta al apagar. |
| `overlay-buildroot-watchdog/etc/init.d/S15watchdog` | Inicia el watchdog de hardware con `watchdog -T 30 -t 15 /dev/watchdog` (tiempo de espera de 30 s, intervalo de keepalive de 15 s); escribe `V` en `/dev/watchdog` al detenerlo para deshabilitarlo. |
| `overlay-buildroot-udhcpc/usr/share/udhcpc/default.script` | Script DHCP personalizado que escribe `/tmp/resolv.conf.<iface>` por interfaz y los fusiona en `/etc/resolv.conf` con **eth0 teniendo prioridad**; admite un marcador de modo DNS manual en `/userdata/config/system/eth0_dns_mode`. |
| `overlay-buildroot-banner` | Logo ASCII de reCamera en `/etc/motd`; `/etc/profile.d/banner.sh` lo imprime solo en sesiones interactivas que no sean SSH. |

> El comentario en `S20hwclock` dice que el RTC almacena la hora local, pero el comando usa `--utc`; estos indican convenciones horarias diferentes. Si un desfase del reloj coincide con el desfase de la zona horaria, investiga esto primero. **Verifica en un dispositivo.**

Nota sobre el watchdog: `-T 30` significa que **cualquier operación bloqueante que impida que el proceso del watchdog lo refresque durante más de 30 segundos puede provocar un reinicio forzado**. Si necesitas un breakpoint largo mientras depuras, detén primero `S15watchdog`.

## Enviar archivos al dispositivo sin reflashear

Esta es una de las operaciones más comunes en el desarrollo diario. Tres opciones:

```bash
# 1. scp (simplest)
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/

# 2. Batch transfer with sftp
sftp root@<device-IP> <<< $'put output/out/app_out/bin/hello_world /userdata/'

# 3. adb (only if adbd is enabled in the firmware) — verify on a device
adb push output/out/app_out/bin/hello_world /userdata/
```

Copia archivos a `/userdata` en lugar de `/oem`: `/oem` normalmente proviene de una imagen de solo lectura, mientras que `/userdata` es de escritura.

```bash
# ssh root@<device-IP>
# chmod +x /userdata/hello_world && /userdata/hello_world
```

Si el programa no puede encontrar una biblioteca compartida, primero comprueba que `LD_LIBRARY_PATH` incluya `/oem/usr/lib`, o ejecuta `ldd /userdata/hello_world` para identificar la biblioteca que falta. Consulta [Elegir una ruta de desarrollo](/es/recamera_pro_dev_path/).

## Diagnosticar la configuración de red

```bash
# ip addr                          # Check whether eth0 / wlan0 received an address
# cat /etc/resolv.conf             # Generated by udhcpc; eth0 takes priority when merging
# cat /tmp/resolv.conf.eth0        # Per-interface file
# cat /userdata/config/system/eth0_dns_mode   # Check for manual DNS mode
# netstat -tlnp                    # Check whether ports such as 22/7681/21/8555 are listening
```

El Wi‑Fi se habilita con `RK_ENABLE_WIFI=y` + `RK_ENABLE_WIFI_CHIP=AP6XXX`; la aplicación está en `project/app/wifi_app`.

## Lista de comprobación de cinco minutos para una placa nueva

1. Conecta la consola serie a 1500000 y confirma que aparecen los registros de arranque y el banner de reCamera.
2. Ejecuta `ip addr` para obtener la dirección IP y luego confirma que `ssh root@<IP>` funciona.
3. Comprueba con `cat /proc/version` que el kernel sea 6.1.157 y con `uname -m` que sea `aarch64`.
4. Ejecuta `ls /oem/usr/lib | head` y confirma que estén presentes bibliotecas de aplicación como `librknnrt.so`.
5. Ejecuta `netstat -tlnp` y confirma que go2rtc (8555), ttyd (7681) y sshd (22) estén escuchando.
6. Ejecuta `tail -f /var/log/Recamera2_developer.log` para inspeccionar los registros de la aplicación.
7. Comprueba con `cat /run/board_id.env` que los IDs de la placa base y de la placa de expansión se hayan detectado correctamente.

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