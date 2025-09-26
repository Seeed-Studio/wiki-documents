---
description: ODYSSEY, STM32MP135D
title: Primeros pasos con ODYSSEY – STM32MP135D 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-STM32MP135D
last_update:
  date: 10/13/2023
  author: Xogium
---

# Primeros pasos con ODYSSEY – STM32MP135D

ODYSSEY STM32MP135D es una computadora de placa única compacta basada en STM32 MPU que ofrece hardware potente en un factor de forma pequeño diseñado para una variedad de usos que van desde hogar inteligente, hasta máquinas expendedoras, hasta cámaras IP, etc. Ofrece una amplia gama de opciones de conectividad diseñadas para facilitar la creación de prototipos. El hardware está disponible en dos variantes diferentes:

- [ODYSSEY STM32MP135D](https://www.seeedstudio.com/Odyssey-MP135D-p-5727.html), que ofrece toda la conectividad con solo micro sd básica como opción de almacenamiento
- [ODYSSEY STM32MP135D con eMMC](https://www.seeedstudio.com/Odyssey-MP135D-eMMC-p-5728.html), que añade un eMMC de 4 GB para almacenamiento

Actualmente, solo buildroot es compatible como sistema operativo.

## Hardware ##

- SoC: STM32MP135D
  - Arm® Cortex®-A7 de 32 bits
    - L1 32-Kbyte I / 32-Kbyte D
    - Caché unificado de nivel 2 de 128-Kbyte
    - Arm® NEON™ y Arm® TrustZone®

- Compatible con sistema operativo buildroot.
- Conectividad:
  - 2x puertos ethernet de 10/100 mbit/s,
    - eth1 soporta PoE y WOL.
  - 1x puerto usb-a,
  - 1x Conector FPC de 30p CSI,
  - 1x Conector FPC de 40p LCD,
  - 40 pines GPIO en distribución compatible con raspberry pi.
- Almacenamiento / memorias:
  - 4 gbits DRAM,
  - 256 kbits EEPROM con un tamaño de página de 64 bytes,
  - Ranura para tarjeta micro sd compatible con tarjetas sd, sdhc y sdxc,
  - 4 gbytes eMMC (solo en la variante con almacenamiento eMMC)
- Opciones de fuente de alimentación:
  - PoE a través del puerto eth1,
  - 5v de entrada vía conector usb-c.
- Dimensiones de la placa desnuda: 85x56x17mm
- Peso de la placa desnuda: 36g

## Primeros pasos ##

### Hardware ###

Para comenzar con el hardware, necesitará lo siguiente:

- 1x ODYSSEY STM32MP135D,
- 1x cable usb-c a usb-a O cable usb-c a usb-c,
- 1x cable ethernet,
- 1x cable usb a uart como [este](https://ftdichip.com/products/ttl-232r-rpi/).

Primero, conecte cuidadosamente el cable usb a uart para obtener acceso a la consola serie. Consulte la siguiente imagen para ayudarle a conectar los pines correctamente.
![Vista superior de la placa ODYSSEY STM32MP135D con pines de depuración junto al jumper de arranque marcados con círculo. Pines listados en orden de cercanía a los jumpers de arranque: WAKE, GND, TX, RX](https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_558688_ff47Pijnl_CdTY5i_1689582643?w=1201&h=801&type=image/png "pines uart0 resaltados")

Usaremos el usb-c para alimentación en esta guía. Conecte un extremo del cable usb-c a la placa, luego conecte el otro extremo a su computadora. Conecte el cable ethernet al puerto eth1 del ODYSSEY, y el otro extremo a su enrutador o switch de red.

>### NOTA: Si desea usar el paquete precompilado, por favor haga clic en este [enlace](http://files.seeedstudio.com/wiki/102110859_ODYSSEY_MP135D_img.zip)

### Software ###

Esta guía utilizará los siguientes componentes de software:

- [buildroot versión 2023.02 o posterior](https://buildroot.org/download.html).
- El [árbol externo de buildroot](https://github.com/xogium/buildroot-stm32mp135d-odyssey) para ser usado en conjunto con buildroot upstream.
- [snagboot](https://github.com/bootlin/snagboot), que es un conjunto de utilidades que ayuda con una operación más fácil de DFU y almacenamiento masivo usb. Consiste en snagrecover que está destinado a cargar el fsbl y ssbl en la DRAM de la placa, y de snagflash que está diseñado para realmente flashear datos en el almacenamiento persistente.

Nota: por favor siga las instrucciones en el repositorio snagboot para configurarlo correctamente, esto está fuera del alcance de esta guía.

#### Características ####

El árbol externo proporciona lo siguiente:

- Un único stm32mp135d_odyssey_defconfig que construye un sistema mínimo y genérico que consiste en tf-a, optee, u-boot, y el kernel linux para la cadena de arranque. El espacio de usuario es mínimo y consiste en un simple sistema init busybox y shell.
  - Este sistema puede ser usado de las siguientes maneras:
    - Escrito y arrancado desde el eMMC (si su hardware lo tiene)
    - Escrito y arrancado desde una tarjeta micro sd.
    - Arrancado sobre NFS.
- Un script post-build se usa para proporcionar una imagen de bootloader fácilmente escribible para el eMMC. Combina -tf-a e imagen FIP juntas en un solo archivo, destinado a ser escrito usando DFU, en las regiones de arranque de dicho eMMC.
- Una configuración genimage genera dos imágenes de disco:
  - emmc.img contiene una partición u-boot-env para almacenar fácilmente el entorno u-boot, junto con el rootfs. Se espera que el bootloader sea almacenado en las regiones de arranque eMMC vía DFU.
  - sdcard.img está compuesta de dos copias de tf-a en particiones fsbl1 y fsbl2, respectivamente, junto con una sola partición fip que contiene la imagen FIP. También hay una partición u-boot-env igual que en emmc.img, junto con un solo rootfs.
- El árbol externo proporciona un external.mk vacío, Config.in y un directorio packages para ser usado, en caso de que desee añadir opciones adicionales y contenido. Por favor consulte la sección correspondiente en el manual de buildroot para aprender más.

#### Obteniendo los softwares ####

Este ejemplo demuestra cómo obtener buildroot y el árbol externo requerido, luego configurarlos para ser usados:

Primero instale las dependencias requeridas de Buildroot. Vea: [El manual de usuario de buildroot, capítulo 2: Requisitos del sistema](https://buildroot.org/downloads/manual/manual.html#requirement). Luego, configure el código fuente:

```
wget https://buildroot.org/downloads/buildroot-2023.02.5.tar.gz
tar -xf buildroot-2023.02.5.tar.gz
mv buildroot-2023.02.5 buildroot
git clone https://github.com/xogium/buildroot-stm32mp135d-odyssey
```

#### Construcción ####

Una vez que el código fuente se haya configurado correctamente, puedes proceder con la construcción:

```
cd buildroot
make BR2_EXTERNAL=/absolute/path/to/buildroot-stm32mp135d-odyssey stm32mp135d_odyssey_defconfig
make
```

Si todo va bien, ahora deberías tener un sistema construido exitosamente en el directorio output/images de tu árbol buildroot.

```
ls -1 output/images
combined-tf-a-and-fip.img
emmc.img
fip.bin
rootfs.ext2
rootfs.ext4
rootfs.tar
sdcard.img
stm32mp135d-odyssey.dtb
tee.bin
tee-header_v2.bin
tee-pageable_v2.bin
tee-pager_v2.bin
tf-a-stm32mp135d-odyssey.stm32
u-boot.dtb
u-boot-nodtb.bin
zImage
```

#### Cómo usar el sistema ####

##### Arranque eMMC #####

Retire el jumper de arranque del medio en la placa para asegurarse de que el modo DFU esté activo. Asegúrese de abrir la consola serie usando minicom u otro programa similar, lo necesitará.

Como ejemplo, aquí se muestra cómo usar gnu screen para acceder a una consola serie llamada ttyUSB0. Se espera que la velocidad de baudios sea 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Luego, ejecuta el siguiente comando desde el paquete snagboot y prepárate para interrumpir la secuencia de arranque cuando llegue a u-boot, presionando cualquier tecla en la ventana de la consola serie:

```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

Una vez en el prompt de u-boot, escribe lo siguiente para habilitar la partición de arranque eMMC: ```mmc partconf 1 1 1 1```. Esto habilita la primera partición de arranque eMMC y asegura que sea posible arrancar desde ella, modificando el registro ext csd 179. Luego, escribe ```dfu 0``` para exponer todas las configuraciones alt de DFU a tu máquina host, incluyendo las regiones de arranque eMMC. Pueden listarse usando el comando dfu-util:

```
dfu-util -l
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=4, name="mmc1_boot2", serial="0021001A3232510937393835"
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=3, name="mmc1_boot1", serial="0021001A3232510937393835"
...
```

Luego, usa la herramienta snagflash para escribir la imagen del bootloader combinada en ambas regiones de arranque:

```
snagflash -P dfu -p 0483:df11 --dfu-keep -D 3:combined-tf-a-and-fip.img
snagflash -P dfu -p 0483:df11 -D 4:combined-tf-a-and-fip.img
```

Una vez hecho esto, reinicia la placa y confirma que el arranque eMMC ahora funciona como se esperaba poniendo el jumper de arranque del medio de vuelta en la placa. Dará error al arrancar desde la partición 0 de mmc1 dado que el área de usuario está en blanco, pero esto es normal en esta etapa.

Cuando estés de vuelta en el prompt de u-boot otra vez, escribe ```ums 0 1``` para exponer el área de usuario del eMMC como un dispositivo de almacenamiento masivo USB a tu máquina host. Usa lsblk para determinar qué nodo de dispositivo se le asignó, y reemplaza sdX en el siguiente comando con el nodo de dispositivo apropiado. ¡Verifica dos veces para asegurar que escribirás en el dispositivo correcto ya que será borrado completamente!

```
snagflash -P ums -s emmc.img -b /dev/sdX
```

Cuando la escritura haya terminado, presiona ctrl+c en el prompt de u-boot para terminar el modo de almacenamiento masivo USB. Luego, reinicia tu placa nuevamente, y confirma que ahora está iniciando linux y que obtienes un prompt de inicio de sesión. Inicia sesión con el usuario root y sin contraseña.

##### Arranque desde tarjeta micro sd #####

Si deseas grabar el sistema en una tarjeta micro sd, procede como sigue, reemplazando sdX con el nodo de dispositivo apropiado:

```
sudo dd if=output/images/sdcard.img of=/dev/sdX bs=4M conv=fsync
```

Donde sdX corresponde al nodo de dispositivo de la tarjeta micro sd. ¡Consulta la salida del comando lsblk para asegurarte de obtener el nodo de dispositivo correcto! De lo contrario, ocurrirá pérdida de datos, ya que esto borra todo el contenido del dispositivo de destino.

Por favor usa minicom o un programa similar para conectarte a la consola serie de la placa. Como ejemplo, aquí se muestra cómo usar gnu screen para acceder a una consola serie llamada ttyUSB0. Se espera que la velocidad de baudios sea 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Cuando la tarjeta micro sd haya sido escrita exitosamente, insértala en el socket micro sd de la placa STM32MP135D ODYSSEY, y ajusta los jumpers de arranque para iniciar desde micro sd (todos los jumpers removidos). Si es necesario, reinicia la placa. Inicia sesión con el usuario root y sin contraseña una vez que obtengas el prompt de inicio de sesión de buildroot.

##### Arranque Nfs #####

Para arrancar el sistema vía NFS, por favor asegúrate de configurar tu /etc/exports como se demuestra, reemplazando la subred / direcciones ip permitidas según sea necesario, haciendo lo mismo para las rutas exportadas:

```
/srv/nfs 192.168.1.0/24(rw,sync,crossmnt,fsid=0)
/srv/nfs/stm32mp135d 192.168.1.0/24(rw,nohide,insecure,no_subtree_check,async,no_root_squash)
```

También asegúrate de que la configuración de tu servidor nfs habilite el modo UDP, así:

```
/etc/nfs.conf
[nfsd]
...
udp=y
```

Extrae el tarball del rootfs generado en el directorio apropiado, en este caso /srv/nfs/stm32mp135d:

```
cd output/images
sudo mkdir srv/nfs/stm32mp135d
sudo bsdtar -xpf rootfs.tar -C /srv/nfs/stm32mp135d
```

Retira el jumper de arranque del medio para asegurar que el modo DFU esté activo. Asegúrate de abrir la consola serie usando minicom u otro programa similar, lo necesitarás. Como ejemplo, aquí se muestra cómo usar gnu screen para acceder a una consola serie llamada ttyUSB0. Se espera que la velocidad de baudios sea 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Luego, ejecuta el siguiente comando desde el paquete snagboot y prepárate para interrumpir la secuencia de arranque cuando llegue a u-boot, presionando cualquier tecla en la ventana de la consola serie:

```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

Una vez que estés en el prompt de u-boot, puedes arrancar por nfs haciendo lo siguiente:

```
setenv eth1addr 2c:f7:f1:30:2b:62
setenv ethaddr 2c:f7:f1:30:2b:62
dhcp
nfs ${kernel_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/zImage
nfs ${fdt_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/stm32mp135d-odyssey.dtb
setenv bootargs root=/dev/nfs rootfstype=nfs ip=dhcp nfsroot=192.168.1.92:/srv/nfs/stm32mp135d,tcp,v3 rw quiet console=ttySTM0,115200n8 earlycon
bootz ${kernel_addr_r} - ${fdt_addr_r}
```

Donde 192.168.1.92 en este ejemplo es la máquina que aloja el servidor nfs. La dirección MAC configurada también es un ejemplo y no debe usarse en el mundo real. Es requerida debido a no tener direcciones MAC definidas en el OTP de la placa, pero puede almacenarse de forma semi-permanente en la EEPROM (ver abajo). Inicia sesión con el usuario root y sin contraseña.

## EEPROM ##

### Diseño ###

La implementación actual para leer direcciones MAC desde la EEPROM espera que la primera comience en el desplazamiento 0 y tenga una longitud de 6 bytes. La segunda MAC debe almacenarse en el desplazamiento 0x10, y también tener una longitud de 6 bytes.

- Consejo: para generar MAC aleatorias, usa un generador como [este](https://www.hellion.org.uk/cgi-bin/randmac.pl).

Para almacenar el entorno de u-boot en la EEPROM si deseas hacerlo, por favor asegúrate de que el entorno comience en un límite de página nueva. Las páginas tienen un tamaño de 64 bytes. Por ejemplo, podrías configurar el desplazamiento del entorno a 0x40, el tamaño permaneciendo en 0x2000, y el desplazamiento redundante a 0x2080. Aquí hay un ejemplo de fragmento de configuración de u-boot:

```
CONFIG_ENV_IS_IN_EEPROM=y
CONFIG_ENV_OFFSET=0x40
CONFIG_ENV_OFFSET_REDUND=0x2080
CONFIG_I2C_EEPROM=y
CONFIG_SYS_I2C_EEPROM_ADDR=0x50
CONFIG_NVMEM=y
```

Para aplicarlo, ejecuta ```make menuconfig``` en el directorio de nivel superior de buildroot. Ve al menú de bootloaders, desplázate hacia abajo hasta u-boot y modifica la ruta de fragmentos de configuración adicionales, por ejemplo ingresando ```$(BR2_EXTERNAL_STM32MP135D_ODYSSEY_PATH)/board/stm32mp135d-odyssey/configs/uboot.config```.

Luego, por favor haz una reconstrucción usando ```make clean && make```.

En última instancia, el diseño es libre para que lo uses, excepto por la ubicación y longitud de las direcciones MAC.

### Cómo usar el EEPROM ###

Para hacer uso del EEPROM en tu placa, obtienes acceso a él como un dispositivo nvmem, tanto en u-boot como en linux. Por ejemplo, escribamos una dirección MAC en él:

```
printf '\x2c\xf7\xf1\30\x2b\x62'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1
```

Para almacenar una segunda dirección MAC, hazlo así:

```
printf '\x2c\xf7\xf1\30\x2b\x63'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1 seek=16
```

## Cómo conectar y usar sensores grove ##

POR HACER

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Casey](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34112514) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Recursos ##

- [Fork del firmware confiable ARM usado en el árbol buildroot externo](https://git.xogium.me/xogium/st-arm-trusted-firmware/tree/v2.8-stm32mp-odyssey-r2)
- [Fork de OP-TEE](https://git.xogium.me/xogium/st-optee_os/tree/3.19.0-stm32mp-odyssey-r2)
- [Fork de U-Boot](https://git.xogium.me/xogium/st-u-boot/tree/v2022.10-stm32mp-odyssey-r2)
- [Fork del kernel Linux](https://github.com/xogium/st-linux/releases/tag/v6.1-stm32mp-odyssey-r3)
