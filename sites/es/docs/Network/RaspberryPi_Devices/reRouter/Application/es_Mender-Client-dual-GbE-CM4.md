---
description: Cliente Mender en CM4 de Dual GbE
title: Uso de Mender
keywords:
- Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mender-Client-dual-GbE-CM4
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


Podemos configurar el Cliente Mender en una Placa Portadora de Ethernet Dual Gigabit para Raspberry Pi Compute Module 4 y luego recibir actualizaciones OTA desde un Servidor Mender Alojado o Auto-Alojado.

Esta guía se enfoca en usar una Placa Portadora de Ethernet Dual Gigabit para RPi CM4 ejecutando un Sistema Linux personalizado compilado usando el Proyecto Yocto.

## Resultados de pruebas

Las versiones del Proyecto Yocto en la tabla a continuación han sido probadas por la comunidad de Mender. Por favor actualízala si has probado esta integración en otras [versiones del Proyecto Yocto](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Proyecto Yocto | Compilación | Tiempo de ejecución |
|---|---|---|
| dunfell (3.1 / 5.3.0) | prueba funciona | prueba funciona |

**Build** Significa que la compilación del Proyecto Yocto usando esta integración de Mender se completa sin errores y genera imágenes.
**Runtime** Significa que Mender ha sido verificado para funcionar en la placa. Para placas basadas en U-Boot, la [lista de verificación de integración](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) ha sido verificada.

## Prerrequisitos

- Una distribución Linux compatible y dependencias instaladas en su estación de trabajo/portátil como se describe en el [Manual Mega de Yocto](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - NOTA. Las instrucciones dependen de qué versión de Yocto pretenda usar.
- [Placa Portadora Ethernet Gigabit Dual para RPi CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)

## Configurando la compilación

### Configurar el entorno Yocto

Cree un directorio para que viva su configuración de `mender-dual-gbe-cm4` y clone la información meta.

```
mkdir mender-dual-gbe-cm4 && cd mender-dual-gbe-cm4
```

Obtén todas las capas necesarias:

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

Para ser compatible con meta-raspberrypi, cambia la versión de gstreamer de poky a la más reciente

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

Modificar el meta-mender para evitar errores de compilación

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

### Configurar el entorno de compilación

Inicializar el entorno de compilación:

```
source layers/poky/oe-init-build-env 
```

Añadir capas del proyecto yocto:

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
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

Compilar para el Servidor Demo de Mender:

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<IP address of Mender demo server>"
```

Compilar para Mender Producción/ Auto-hospedado (on-prem):

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
MACHINE="dual-gbe-cm4-mender" bitbake core-image-base
```

Reemplaza `core-image-base` con tu objetivo de imagen deseado.

## Usando la salida de compilación

Después de una compilación exitosa, las imágenes y artefactos de compilación están en:

- `build/tmp/deploy/images/dual-gbe-cm4-mender/core-image-base-dual-gbe-cm4-mender.sdimg.bz2`

si ya tienes Mender ejecutándose en tu dispositivo y quieres desplegar una actualización de rootfs usando esta compilación, deberías usar los archivos de [Artefacto Mender](https://docs.mender.io/architecture/mender-artifacts?target=_blank), que tienen el sufijo `.mender`. Puedes desplegar este Artefacto en modo administrado con el servidor Mender (súbelo bajo Releases en la UI del servidor) o usando solo el cliente Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instrucciones de flasheo

Por favor sigue [esta guía wiki](https://wiki.seeedstudio.com/es/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/#flash-to-emmc-cm4-emmc-version) para aprender sobre el flasheo de la imagen anterior al eMMC en la placa.

Una vez flasheado, cuando enciendas el reTerminal, arrancará desde la imagen compilada.

## Arranque Exitoso

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

Poky (Yocto Project Reference Distro) 3.1.12 dual-gbe-cm4-mender ttyS0

dual-gbe-cm4-mender login: root
root@dual-gbe-cm4-mender:~#
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
