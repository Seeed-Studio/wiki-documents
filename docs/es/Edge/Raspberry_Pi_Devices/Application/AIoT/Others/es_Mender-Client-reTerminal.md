---
description: Cliente Mender en reTerminal
title: Cliente Mender en reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mender-Client-reTerminal
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Instalación del Cliente Mender en reTerminal

Podemos configurar el Cliente Mender en un reTerminal y luego recibir actualizaciones OTA desde un Servidor Mender Alojado o Auto-Alojado.

Esta guía se enfoca en usar un reTerminal ejecutando un Sistema Linux personalizado compilado usando el Proyecto Yocto.

## Resultados de pruebas

Las versiones del Proyecto Yocto en la tabla a continuación han sido probadas por la comunidad Mender. Por favor actualízala si has probado esta integración en otras [versiones del Proyecto Yocto](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Proyecto Yocto | Compilación | Tiempo de ejecución |
|---|---|---|
| dunfell (3.1 / 5.3.0) | prueba funciona | prueba funciona |

**Build** Significa que la construcción del Proyecto Yocto usando esta integración de Mender se completa sin errores y genera imágenes.
**Runtime** Significa que Mender ha sido verificado para funcionar en la placa. Para placas basadas en U-Boot, la [lista de verificación de integración](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) ha sido verificada.

## Prerrequisitos

- Una distribución Linux compatible y dependencias instaladas en su estación de trabajo/portátil como se describe en el [Manual Mega de Yocto](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - NOTA. Las instrucciones dependen de qué versión de Yocto pretenda usar.
- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)

## Configurando la construcción

### Configurar el entorno Yocto

Cree un directorio para que viva su configuración de `mender-reterminal` y clone la meta información.

```
mkdir mender-reterminal && cd mender-reterminal
```

Obtén todas las capas necesarias:

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git layers/meta-qt5
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

Para ser compatible con meta-raspberrypi, cambiar la versión de gstreamer de poky a la más reciente

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

Modifica el meta-raspberrypi para evitar errores de compilación

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

Modifica el meta-mender para evitar errores de compilación

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

Modifica el meta-seeed-cm4 para evitar errores de compilación

```
cd layers/meta-seeed-cm4
sed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb
```

### Configurar el entorno de compilación

Inicializar el entorno de compilación:

```
source layers/poky/oe-init-build-env 
```

Agregar capas del proyecto yocto:

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### Configurar URL del servidor Mender (opcional)

Esta sección no es requerida para una compilación exitosa, pero las imágenes que se generan por defecto solo son adecuadas para uso con el cliente Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank), debido a la falta de configuración del servidor.

Puedes editar el archivo `conf/local.conf` para proporcionar tu configuración del servidor Mender, asegurando que las imágenes generadas y los Artefactos Mender se conecten al servidor Mender que estás usando. Ya debería haber una sección comentada en el archivo `conf/local.conf` generado y simplemente puedes descomentar las opciones de configuración relevantes y asignarles valores apropiados.

Compilar para Mender Hospedado:

```
# To get your tenant token:
#    - log in to https://hosted.mender.io
#    - click your email at the top right and then "My organization"
#    - press the "COPY TO CLIPBOARD"
#    - assign content of clipboard to MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<copy token here>"
```

Construir para el Servidor de Demostración de Mender:

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<IP address of Mender demo server>"
```

Construir para Producción de Mender/ Auto-hospedado (on-prem):

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# Uncomment below and update the URL to match your configured domain
# name and provide the path to the generated server.crt file.
#
# Note that a custom server.crt file is only necessary if you are using
# self-signed certificates.
#
# NOTE! It is recommend that you provide below information in your custom
# Yocto layer and this is only for demo purposes. See linked documentation
# for additional information.
MENDER_SERVER_URL = "<URL of Self-Hosted Mender Server>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<DIRECTORY-CONTAINING-server.crt>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## Construyendo la imagen

Ahora puedes proceder con la construcción de una imagen:

```
MACHINE="seeed-reterminal-mender" bitbake rpi-test-image
```

Reemplaza `rpi-test-image` con tu objetivo de imagen deseado.

## Usando la salida de compilación

Después de una compilación exitosa, las imágenes y artefactos de compilación están en:

- `build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2`

si ya tienes Mender ejecutándose en tu dispositivo y quieres desplegar una actualización de rootfs usando esta compilación, deberías usar los archivos de [Artefacto Mender](https://docs.mender.io/architecture/mender-artifacts?target=_blank), que tienen el sufijo `.mender`. Puedes desplegar este Artefacto en modo administrado con el servidor Mender (súbelo bajo Releases en la UI del servidor) o usando solo el cliente Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instrucciones de flasheo

Por favor sigue [esta guía wiki](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) para aprender sobre el flasheo de la imagen anterior a la eMMC en el reTerminal.

Una vez flasheado, cuando enciendas el reTerminal, arrancará desde la imagen compilada.

## Arranque exitoso

Si ves el siguiente log desde UART, eso significa que el sistema ha arrancado exitosamente

```
[  OK  ] Started Kernel Logging Service.
[  OK  ] Started System Logging Service.
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Getty on tty1.
         Starting Telephony service...
[  OK  ] Started Serial Getty on ttyS0.
[  OK  ] Reached target Login Prompts.
[    7.340436] audit: type=1334 audit(1638186061.687:4): prog-id=7 op=LOAD
[    7.347278] audit: type=1334 audit(1638186061.691:5): prog-id=8 op=LOAD
         Starting Login Service...
[  OK  ] Started Save/Restore Sound Card State.
[    7.386306] Bluetooth: Core ver 2.22
[    7.390103] NET: Registered protocol family 31
[    7.394856] Bluetooth: HCI device and connection manager initialized
[[    7.401967] Bluetooth: HCI socket layer initialized
  OK      7.407591] Bluetooth: L2CAP socket layer initialized
0m] Reac[    7.413409] Bluetooth: SCO socket layer initialized
hed target Sound Card.
[  OK  ] Started Telephony service.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started Login Service.

Poky (Yocto Project Reference Distro) 3.1.12 seeed-reterminal-mender ttyS0

seeed-reterminal-mender login: root
root@seeed-reterminal-mender:~#
```

## Recursos

- **[Página Web]** [Documentación Oficial de Mender](https://docs.mender.io)

- **[Página Web]** [Documentación Oficial de Yocto](https://docs.yoctoproject.org)

- **[Página Web]** [Documentación Oficial de Raspberry Pi CM4](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
