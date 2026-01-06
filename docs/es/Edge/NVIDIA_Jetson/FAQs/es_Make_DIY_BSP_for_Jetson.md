---
description: Crear un BSP Personalizado desde un Entorno de Desarrollo Jetson Existente
title: Creando un Paquete BSP Personalizado desde un Entorno de Desarrollo Jetson
keywords:
- reComputer
- BSP
- backup
- Jetson
- JetPack
- custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/make_diy_bsp_for_jetson
last_update:
  date: 01/04/2026
  author: Dayu
---

Esta guía wiki demuestra cómo clonar un entorno de desarrollo completo desde un dispositivo Jetson existente y crear un BSP (Board Support Package) flasheable que puede usarse para replicar el mismo entorno en otros dispositivos Jetson. El BSP creado usando este método permite la clonación completa del entorno cuando se flashea a otros dispositivos Jetson.

Esta guía usa JetPack 6.2 como ejemplo.

## Prerrequisitos

- Dispositivo Jetson fuente (con entorno de desarrollo configurado)
- Computadora Host Ubuntu 22.04
- Cable de transmisión de datos USB Type-C

:::danger
La serie reComputer Classic tiene refrigeración insuficiente para soportar el modo súper MAXN. Si has flasheado JetPack 6.2 en un dispositivo de la serie reComputer Classic, no habilites el modo MAXN.
:::

## 1. Preparar Directorio de Trabajo en PC

Descarga el paquete de directorio de trabajo requerido de la tabla a continuación:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión JetPack</th>
      <th>Enlace de Descarga ⬇️</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6.2</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDPKrVl7UDaTYXmxi1CoTu2AcsHUPKLqNw_olmvlPBODqQ?e=gWuNzv">Descargar</a></td>
    </tr>
    <tr>
      <td>6.2.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB3JLwYRpS8SqoqjWuXJmmmAW56Nvpdn8YnbYLW7g5_FHM?e=Gqe1XR">Descargar</a></td>
    </tr>
  </tbody>
</table>
</div>

Instala las dependencias requeridas en tu PC:

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

Extrae el paquete descargado y genera el contenido necesario usando los siguientes comandos en tu terminal de PC:

```bash
sudo tar xpf xxx.tar.gz
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

Configura las variables de entorno en el directorio extraído (donde se encuentra el paquete tar.gz):

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

Navega al directorio fuente y compila el código fuente (este proceso tomará algún tiempo):

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

Después de que la compilación esté completa, copia e instala los componentes compilados:

```bash
./do_copy.sh
./nvbuild.sh -i
```

El directorio de trabajo ahora está preparado. Los pasos subsiguientes se realizarán en el directorio `Linux_for_Tegra/` para clonar el entorno de desarrollo completo desde el dispositivo Jetson y crear el BSP.

## 2. Generar BSP Personalizado

Conecta tu dispositivo Jetson fuente a tu PC usando un cable de datos USB Type-C a través del puerto de flasheo, y asegúrate de que tu Jetson fuente esté en modo Recovery.

Para instrucciones sobre cómo entrar en modo Recovery, consulta:
[https://wiki.seeedstudio.com/es/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

Selecciona tu dispositivo y expande la sección `3. Enter Recovery mode`. También puedes encontrar información sobre el puerto de flasheo de tu dispositivo en el mismo enlace.

:::info
Asegúrate de que tu PC tenga suficiente espacio en disco. El tamaño del BSP típicamente requiere aproximadamente el doble del espacio de almacenamiento usado por tu entorno de desarrollo Jetson.
:::

Navega de vuelta al directorio `Linux_for_Tegra/` en tu PC y ejecuta el siguiente comando para copiar el entorno de desarrollo completo desde el dispositivo Jetson:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c <board-name>

# For example:
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c recomputer-orin-j401
```

Reemplaza `<board-name>` con el nombre de tu dispositivo. Necesitas proporcionar un `device name` válido como parámetro, que puede encontrarse verificando los nombres de archivos .conf en el directorio raíz de `Linux_for_Tegra`. El prefijo de estos nombres de archivo corresponde a los parámetros válidos de `device name`.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png"/></div>

Los parámetros de device name disponibles para **L4T 36.4.3** son los siguientes. Nota que las series **j40** y **j30** usan el mismo archivo de configuración:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 también usa este `device name` como parámetro)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

Empaqueta el contenido clonado en un BSP flasheable (el dispositivo de respaldo debe permanecer en modo Recovery durante este proceso):

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 <board-name> internal

# For example:
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 recomputer-orin-j401 internal
```

Reemplaza `<board-name>` con el nombre de tu dispositivo, similar al paso anterior.

Este proceso toma tiempo considerable. Después de completarse, se generarán archivos con el prefijo `mfi_` y un paquete comprimido `tar.gz` en el directorio `Linux_for_Tegra/`.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/generate-bsp.png"/></div>

El archivo `mfi_xxxxx.tar.gz` es el BSP flasheable. Cuando se extrae, crea el directorio `mfi_xxxxx`.

**(Opcional)** Si necesitas generar un BSP en formato flash QSPI adecuado para producción en fábrica, modifica los parámetros de creación del BSP como sigue (el dispositivo de respaldo debe permanecer en modo Recovery durante este proceso):

```bash
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 <board-name> internal

# For example:
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 recomputer-orin-super-j401 internal
```

## 3. Flashear y Verificar

Después de obtener el paquete BSP tar.gz de los pasos anteriores, puedes extraerlo y flashearlo a otros dispositivos Jetson objetivo con un solo comando, logrando la clonación completa del entorno de desarrollo. **Este BSP es independiente del entorno y puede copiarse a otras PCs para su uso.**

Extrae el paquete usando el siguiente formato de comando estrictamente:

```bash
sudo tar xpf mfi_xxxx.tar.gz
```

Navega al directorio extraído y ejecuta el proceso de flasheo:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

El flasheo también requiere que el Jetson objetivo esté en modo Recovery. Para pasos detallados de flasheo, consulta el mismo enlace (**no necesitas descargar un nuevo BSP**):
[https://wiki.seeedstudio.com/es/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>