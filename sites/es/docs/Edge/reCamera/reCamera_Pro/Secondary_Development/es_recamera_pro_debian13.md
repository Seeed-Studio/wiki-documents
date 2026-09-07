---
description: Flashear la imagen de Debian 13 en reCamera Pro
title: Flashear la imagen de Debian 13 en reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - Debian 13
slug: /recamera_pro_debian
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/04/2026
  author: yylin
createdAt: '2026-08-04'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/es/recamera_pro_debian/
---

## Introducción

reCamera Pro está impulsada por el chip RV1126B y está disponible con 2 GB o 4 GB de memoria. Se entrega con firmware Buildroot para un inicio rápido con inferencia de IA. Esta página proporciona una imagen de Debian 13 para usuarios que necesitan más flexibilidad para desarrollo y despliegue.

Después de flashear la imagen de Debian 13, puedes compilar tus propias aplicaciones con CMake, instalar las dependencias necesarias con `apt` y ejecutar contenedores Docker. La imagen es compatible con los controladores de fábrica de Seeed y no requiere cambios en el device tree. La cámara, el micrófono, el altavoz y el Wi‑Fi funcionan como se espera; Bluetooth no es compatible.

:::warning
Este firmware es actualmente experimental. Seeed no lo mantiene por el momento; se proporciona como una opción adicional de desarrollo.
:::

## Descargas

### Descargar la imagen

[Descarga la imagen de Debian 13 desde Google Drive](https://drive.google.com/file/d/1qLlbsgUB88qC2xBn4-Decl8XBZgr7EI/view?usp=drive_link).

### Descargar la herramienta de flasheo y el controlador

Esta guía utiliza SocToolKit en Windows para flashear la imagen. Descarga los siguientes archivos:

- [Driver (DriverAssistant_v5.12.zip)](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link)
- [Flashing tool (SocToolKit-window.zip)](https://drive.google.com/file/d/1wFMHF_KSmbTPvuaAefqutDP-DPQ_NONp/view?usp=drive_link)

## Preparación para el flasheo

### Instalar el controlador

1. Extrae el archivo `DriverAssistant_v5.12.zip` descargado.
2. Abre el directorio extraído y ejecuta `DriverInstall.exe`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image.png" /></div>

3. Haz clic en **Driver Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-1.png" /></div>

La siguiente pantalla indica que el controlador se instaló correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-2.png" /></div>

### Configurar SocToolKit

1. Extrae `SocToolKit-window.zip`, abre el directorio extraído y ejecuta `SocToolKit.exe`.
2. Selecciona el chip **RV1126B** en la herramienta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-3.png" /></div>

3. Extrae `recamera_pro_debian13_img.tar.gz`.
4. En SocToolKit, haz clic derecho y selecciona el último elemento en el menú contextual.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-5.png" /></div>

5. Selecciona el archivo `env.img` en el directorio de firmware extraído.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-6.png" /></div>

6. Haz clic en **Yes** en el cuadro de diálogo de confirmación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-7.png" /></div>

7. Selecciona la entrada `rootfs` y haz clic en los puntos suspensivos (`...`) a su derecha. Sustituye su archivo de imagen por `rootfs_debian_clean.img` del directorio de firmware extraído.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-11.png" /></div>

### Poner reCamera Pro en modo Loader

1. Conecta el puerto USB 3.0 de reCamera Pro a tu ordenador con Windows usando un cable USB y luego alimenta el dispositivo a través de su puerto de CC.
2. Localiza los orificios de los pines `BOOT` y `RESET` en el lateral del dispositivo.
3. Mantén presionado `BOOT` y luego pulsa brevemente `RESET` para reiniciar el dispositivo.
4. Sigue manteniendo presionado `BOOT` durante aproximadamente 5 segundos después de pulsar `RESET` y luego suéltalo. El dispositivo entra en modo Loader.

SocToolKit ahora debería indicar que el dispositivo ha sido detectado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-8.png" /></div>

### Flashear el firmware

Después de que SocToolKit detecte el dispositivo y cargue el firmware, selecciona todas las particiones excepto `userdata`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-12.png" /></div>

Haz clic en **Download** para comenzar a flashear el firmware.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-13.png" /></div>

Cuando el flasheo se complete, la interfaz debería verse como la siguiente:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-14.png" /></div>

## Acerca del nuevo firmware

Después de flashear, conecta el dispositivo a tu red usando un cable Ethernet. Esta imagen no es compatible con el adaptador de red virtual USB‑C original. Puedes encontrar la dirección IP del dispositivo en tu router o en la interfaz de gestión de Wi‑Fi. SSH está habilitado en la imagen, por lo que puedes iniciar sesión directamente mediante SSH. Si no hay conexión de red disponible, utiliza la consola serie UART a una velocidad en baudios de `1500000`.

El sistema solo proporciona el usuario `root`, con la contraseña predeterminada `123123`. Cambia la contraseña inmediatamente después del primer inicio de sesión:

```bash
passwd
```

Luego completa los siguientes pasos de configuración del sistema.

## Configurar temporalmente un proxy HTTP

Si necesitas un proxy HTTP para acceder a la red, por ejemplo al usar `apt`, establece temporalmente las siguientes variables de entorno. Omite este paso si no utilizas un proxy. Sustituye la dirección y el puerto de ejemplo por los de tu servidor proxy.

```bash
export http_proxy="http://192.168.4.78:7890"
export https_proxy="http://192.168.4.78:7890"
# Optional: bypass the proxy for local addresses
export no_proxy="localhost,127.0.0.1,::1,192.168.0.0/16"
```

## Configurar la hora

En el primer arranque, la hora del sistema puede estar establecida en 1970, lo que provoca que falle la validación de certificados SSL. Dado que el sistema no tiene configurada la sincronización automática de hora mediante systemd, establece manualmente la hora correcta antes de actualizar el índice de paquetes:

```bash
date -s "2026-09-02 15:20:00"

apt update
```

### Configurar la orientación de la cámara

Primero, encuentra el nodo del sensor que admite controles de volteo:

```bash
for dev in /dev/v4l-subdev*; do
    echo
    echo "========== $dev =========="
    v4l2-ctl -d "$dev" --list-ctrls 2>&1 | \
        grep -Ei 'flip|mirror|horizontal|vertical|rotate'
done
```

Normalmente verás una salida similar a la siguiente:

```bash
========== /dev/v4l-subdev2 ==========
                horizontal_flip 0x00980914 (bool)   : default=0 value=1
                  vertical_flip 0x00980915 (bool)   : default=0 value=1
              vertical_blanking 0x009e0901 (int)    : min=90 max=63375 step=1 default=90 value=90
            horizontal_blanking 0x009e0902 (int)    : min=4294965822 max=4294965822 step=1 default=4294965822 value=-1474 flags=read-only
```

De forma predeterminada, tanto el volteo horizontal como el vertical pueden estar habilitados. Ajusta el comando de acuerdo con el nodo de dispositivo mostrado en la salida anterior; este ejemplo utiliza `/dev/v4l-subdev2`:

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --set-ctrl=horizontal_flip=0,vertical_flip=0
```

Verifica la configuración:

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --get-ctrl=horizontal_flip,vertical_flip
```

Salida esperada:

```bash
horizontal_flip: 0
vertical_flip: 0
```

## Probar la cámara

Utiliza V4L2 para capturar un fotograma crudo NV12 y luego usa FFmpeg para convertirlo a JPEG:

```bash
v4l2-ctl -d /dev/video12 \
  --set-fmt-video=width=3840,height=2160,pixelformat=NV12 \
  --stream-mmap=4 \
  --stream-count=1 \
  --stream-to=/tmp/frame.nv12

ffmpeg \
  -f rawvideo \
  -pixel_format nv12 \
  -video_size 3840x2160 \
  -i /tmp/frame.nv12 \
  -frames:v 1 \
  -q:v 2 \
  -y /tmp/camera.jpg
```

Cuando el comando termine, visualiza la imagen JPEG procesada por el ISP y con la orientación correcta en `/tmp/camera.jpg`.

## Configurar el micrófono y el altavoz

Instala las dependencias necesarias:

```bash
apt install ffmpeg alsa-utils
```

Consulta los dispositivos de grabación y reproducción disponibles:

```bash
arecord -l

aplay -l
```

## Configurar Docker

Instala Docker:

```bash
apt install docker-cli
```

Confirma que Docker está instalado correctamente:

```bash
command -v docker
docker --version
dockerd --version
```

La salida esperada es similar a:

```bash
/usr/bin/docker
Docker version 26.1.5+dfsg1, build a72d7cd
Docker version 26.1.5+dfsg1, build 411e817
```

### Configurar Docker

Crea el archivo de configuración del daemon de Docker para establecer el directorio de datos y deshabilitar la red predeterminada:

```bash
cat >/etc/docker/daemon.json <<'EOF'
{
  "data-root": "/userdata/docker",
  "storage-driver": "overlay2",
  "iptables": false,
  "bridge": "none"
}
EOF
```

Detén Docker y elimina los archivos de runtime sobrantes:

```bash
service docker stop 2>/dev/null || true

rm -f /var/run/docker.pid
rm -f /var/run/docker.sock
rm -rf /var/run/docker/containerd
```

Reinicia Docker:

```bash
service docker restart
```

### Probar Docker

Confirma que el daemon de Docker se está ejecutando:

```bash
ps aux | grep '[d]ockerd'
```

Ejecuta un contenedor de prueba:

```bash
docker run --rm hello-world
```

Si Docker está configurado correctamente, la salida incluye:

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## Instalar herramientas de GStreamer y capturar datos de la cámara

Instala las herramientas necesarias:

```bash
apt update

apt install -y \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-base \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-libav
```

Utiliza el siguiente comando para capturar un fotograma y guardarlo como una imagen JPEG:

```bash
gst-launch-1.0 -e \
  v4l2src device=/dev/video12 num-buffers=1 \
  ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 \
  ! videoconvert \
  ! jpegenc quality=95 \
  ! filesink location=/tmp/camera.jpg
```

Cuando el comando termine, visualiza la imagen procesada por el ISP en `/tmp/camera.jpg`.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
