---
description: Cómo Compilar el Proyecto de Código Fuente para el BSP de Jetson de Seeed
title: Cómo Compilar el Proyecto de Código Fuente para el BSP de Jetson de Seeed
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /es/how_to_build_the_source_code_project_for_seeed_jetson_bsp
last_update:
  date: 08/04/2025
  author: Dayu
---

**Este wiki demuestra cómo obtener el código fuente del BSP para los productos Jetson de Seeed, organizarlo en un paquete completo de código fuente BSP, y compilarlo/flashearlo en dispositivos Jetson.**

## 1. Preparar el espacio de trabajo

Esta guía toma **L4T 36.4.3** como ejemplo para demostrar cómo compilar el proyecto de código fuente, compilarlo y flashearlo al dispositivo Jetson. El mismo proceso se aplica a otras versiones—simplemente **reemplaza el número de versión en los comandos de ejemplo posteriores con tu versión de compilación deseada**.

Antes de comenzar, necesitas preparar un **PC host con Ubuntu 20.04/22.04**.

Si no estás seguro sobre la relación entre las versiones de L4T y las versiones de JetPack, puedes consultar este enlace:
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

Busca la versión específica de **L4T (Linux for Tegra)** que quieres compilar, por ejemplo:
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

Extrae el BSP oficial de NVIDIA, y obtendrás un directorio llamado `Linux_for_Tegra`. Luego, extrae el archivo del sistema de archivos raíz en el directorio oficial `Linux_for_Tegra`:

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

Sincroniza el código fuente para compilar. Reemplaza el argumento después de `-t` con **la versión de L4T que deseas**:

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

Sal al directorio raíz de tu espacio de trabajo. Clona con Git el código fuente de tu rama deseada a tu máquina local usando el siguiente comando
(reemplaza `-b <nombre de rama>` con la rama objetivo):

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

El código fuente del BSP para el Jetson de Seeed está disponible en **este [repositorio de GitHub](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main).**
Puedes revisar las diferentes ramas para encontrar tu versión de L4T deseada, ya que cada rama corresponde a una versión diferente de L4T.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

Luego sobrescribe el código fuente original:

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

Aplica los cambios necesarios a rootfs:

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

Instala las dependencias en tu PC:

```bash
sudo apt-get update
sudo apt-get install build-essential flex bison libssl-dev
sudo apt-get install sshpass
sudo apt-get install abootimg
sudo apt-get install nfs-kernel-server
sudo apt-get install libxml2-utils
sudo apt-get install qemu-user-static
```

trabajo de preparación para la compilación del kernel:

```bash
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=/your_path/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

Compila y construye el kernel:

```bash
cd source
./nvbuild.sh
```

Instala los nuevos dtbs del kernel y controladores:

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```

:::tip
Para JetPack 5, dado que las rutas de archivos son diferentes, necesitas modificar el parámetro `-p` a:
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

Para **Jetpack 6**, flasheando el dispositivo (toma **recomputer-orin-j401** como ejemplo):

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml"  --showlogs \
--network usb0 recomputer-orin-j401 internal
```

Reemplaza `recomputer-orin-j401` con el nombre del dispositivo que estás usando. Necesitas proporcionar un `nombre de dispositivo` válido como parámetro, que puedes encontrar revisando los nombres de archivos .conf en el directorio raíz de `Linux_for_Tegra`. El prefijo de estos nombres de archivo corresponde a los parámetros válidos de `nombre de dispositivo`.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

Por lo tanto, los parámetros de nombre de dispositivo disponibles para **L4T 36.4.3** son los siguientes. Las series **j40** y **j30** usan el mismo archivo de configuración:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 también usa este `nombre de dispositivo` como parámetro.)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

## Recursos

- [Código fuente del L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
