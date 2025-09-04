---
description: Cliente Mender en ODYSSEY - X86
title: Cliente Mender en ODYSSEY - X86
keywords:
- Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mender-Client-ODYSSEY-X86
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# Instalación del Cliente Mender en ODYSSEY - X86

Podemos configurar el Cliente Mender en una placa ODYSSEY - X86 y luego recibir actualizaciones OTA desde un Servidor Mender Alojado o Auto-Alojado.

Esta guía se enfoca en usar la placa ODYSSEY - X86 ejecutando un Sistema Linux personalizado compilado usando el Proyecto Yocto.

## Resultados de pruebas

Las versiones del Proyecto Yocto en la tabla a continuación han sido probadas por la comunidad Mender. Por favor actualízala si has probado esta integración en otras [versiones del Proyecto Yocto](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Proyecto Yocto | Compilación | Tiempo de ejecución |
|---|---|---|
| dunfell (3.1 / 5.3.0) | prueba funciona | prueba funciona |

**Build** Significa que la construcción del Proyecto Yocto usando esta integración de Mender se completa sin errores y produce imágenes.
**Runtime** Significa que Mender ha sido verificado para funcionar en la placa. Para placas basadas en U-Boot, la [lista de verificación de integración](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) ha sido verificada.

## Prerrequisitos

- Una distribución Linux compatible y dependencias instaladas en su estación de trabajo/portátil como se describe en el [Manual Mega de Yocto](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - NOTA. Las instrucciones dependen de qué versión de Yocto pretenda usar.
- [Placa ODYSSEY - X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)

## Configurando la construcción

### Configurar el entorno Yocto

Establezca la rama del Proyecto Yocto para la que está construyendo:

Cree un directorio para que viva su configuración `mender-seeed` y clone la
meta información.

```
mkdir mender-seeed && cd mender-seeed
```

Obtén todas las capas necesarias:

```
git clone -b dunfell git://git.yoctoproject.org/poky layers/poky
git clone git://git.yoctoproject.org/meta-intel layers/meta-intel 
git clone -b dunfell https://github.com/mendersoftware/meta-mender layers/meta-mender
git clone -b dunfell https://github.com/openembedded/meta-openembedded  layers/meta-openembedded
git clone https://github.com/Seeed-Studio/meta-odyssey-x86 layers/meta-odyssey-x86
```

### Configurar el entorno de compilación

Inicializar el entorno de compilación:

```
source layers/poky/oe-init-build-env 
```

Agregar capas del proyecto yocto:

```
bitbake-layers add-layer  ../layers/meta-intel 
bitbake-layers add-layer  ../layers/meta-odyssey-x86 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-oe 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-python 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-networking 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-core 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-demo 
```

Aplicar la configuración de Mender al entorno de compilación:

```
CONF_VERSION = "1"
MACHINE = "odyssey-x86-mender"
MENDER_ARTIFACT_NAME = "release-1"
INHERIT += "mender-full"
DISTRO_FEATURES_append = " systemd"
VIRTUAL-RUNTIME_init_manager = "systemd"
DISTRO_FEATURES_BACKFILL_CONSIDERED = "sysvinit"
VIRTUAL-RUNTIME_initscripts = ""
MENDER_STORAGE_DEVICE = "/dev/sda"
MENDER_STORAGE_TOTAL_SIZE_MB_DEFAULT = "4096"
MENDER_BOOT_PART_SIZE_MB = "64"
MENDER_DATA_PART_SIZE_MB = "1024"
MENDER_IMAGE_BOOTLOADER_FILE = "wic-initrd"

IMAGE_FEATURES_append = " \
    ssh-server-openssh \
    "
```

en tu local.conf.

### Configurar URL del servidor Mender (opcional)

Esta sección no es requerida para una compilación exitosa, pero las imágenes que se generan por defecto solo son adecuadas para uso con el cliente Mender en [Despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank), debido a la falta de configuración del servidor.

Puedes editar el archivo `conf/local.conf` para proporcionar tu configuración del servidor Mender, asegurando que las imágenes generadas y los Artefactos Mender se conecten al servidor Mender que estás usando. Ya debería haber una sección comentada en el archivo `conf/local.conf` generado y puedes simplemente descomentar las opciones de configuración relevantes y asignarles valores apropiados.

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
MACHINE="odyssey-x86-mender" bitbake odyssey-image-base
```

Reemplaza `odyssey-image-base` con tu objetivo de imagen deseado.

## Usando la salida de compilación

Después de una compilación exitosa, las imágenes y artefactos de compilación están en:

- `build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2`

si ya tienes Mender ejecutándose en tu dispositivo y quieres desplegar una actualización de rootfs usando esta compilación, deberías usar los archivos de [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank), que tienen el sufijo `.mender`. Puedes desplegar este Artifact en modo administrado con el servidor Mender (súbelo bajo Releases en la interfaz del servidor) o usando solo el cliente Mender en [despliegues independientes](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instrucciones de flasheo

Hay dos métodos diferentes para flashear la imagen y ejecutar en la placa ODYSSEY - X86.

**Método 1:** Flashear a una unidad flash USB conectada a la placa ODYSSEY - X86 y arrancar el sistema desde la unidad flash.

**Método 2:** Flashear a un HDD/SSD conectado a la placa ODYSSEY - X86 y ejecutar desde el HDD/SSD.

### Método 1

- **Paso 1.** [Descarga balenaEtcher](https://www.balena.io/etcher/) según tu sistema operativo

- **Paso 2.** Conecta una unidad flash USB a la PC

- **Paso 3.** Haz clic en **Flash from file** y selecciona el archivo `mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/balena.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz clic en **Select target** y elige la unidad USB conectada

- **Paso 5.** Finalmente haz clic en **Flash**

- **Paso 6.** Conecta la unidad flash a la placa ODYSSEY - X86 y enciende la placa

- **Paso 7.** Mientras enciendes la placa, mantén presionada la **tecla DELETE** para entrar a la **configuración del BIOS**

- **Paso 8.** Ve a la sección **Boot** y establece la **Boot Option #1** a **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Ve a **Save & Exit** y selecciona **Save Changes and Reset**

Ahora el SO se iniciará exitosamente desde la unidad flash USB

### Método 2

- **Paso 1.** Sigue desde el **paso 1 - paso 9** en el **Método 1** anterior

- **Paso 2.** Después de arrancar exitosamente, apaga la placa ejecutando:

```sh
poweroff
```

**Nota:** Necesitamos arrancar una vez después del flasheo porque la partición **data** crecerá para ocupar el espacio restante en la unidad flash, y usaremos ese espacio para almacenar la imagen que necesitamos flashear al HDD/SSD.

- **Paso 3.** Retira la unidad flash del ODYSSEY - X86 y conéctala a la PC

- **Paso 4.** Abre una ventana de terminal y copia la **uefiimg** de la compilación de Yocto a la partición **data** de la unidad flash

```sh
sudo cp mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg /media/username/data
```

**Nota:** Reemplaza **username** con el nombre de usuario de tu PC

- **Paso 5.** Retira la unidad Flash de la PC y conéctala a la placa ODYSSEY - X86. También conecta un HDD/ SSD externo a la placa ODYSSEY.

- **Paso 6.** Después de que la placa haya iniciado, escribe lo siguiente en la ventana del terminal para listar las particiones del disco

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/partition.png" alt="pir" width="600" height="auto"/></p>

Podemos ver que el HDD conectado aparece como **/dev/sdb**

- **Paso 7.** Flashear el archivo **.uefiimg** que copiamos anteriormente al HDD/SSD conectado usando la utilidad **dd**

```sh
dd if=/data/odyssey-image-base-odyssey-x86.uefiimg of=/dev/sdb
```

**Nota:** Reemplaza **/dev/sdb** con el nombre correspondiente al HDD/SSD conectado

- **Paso 8.** Una vez que el flasheo esté completo, apaga el ODYSSEY - X86

```sh
poweroff
```

- **Paso 9.** Retira la unidad flash USB y enciende el ODYSSEY - X86

- **Paso 10.** Mientras enciendes la placa, mantén presionado **F7** para entrar a la configuración del BIOS

- **Paso 11.** Ve a la sección **BOOT** y configura la **Boot Option #1** como **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 12.** Ve a **Save & Exit** y selecciona **Save Changes and Reset**

Ahora el SO se iniciará exitosamente desde el HDD/SSD
