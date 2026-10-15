---
description: Este wiki explica cómo compilar y flashear un kernel Linux en tiempo real PREEMPT_RT para dispositivos Seeed reComputer Jetson que ejecutan JetPack 6.2.1.
title: Flashear un kernel Linux en tiempo real PREEMPT_RT en Seeed reComputer Jetson con JetPack 6.2.1
keywords:
  - Jetson
  - reComputer
  - JetPack 6.2.1
  - PREEMPT_RT
  - Real-Time Kernel
  - Linux
image: https://files.seeedstudio.com/wiki/RT_for_jetson/5.png
slug: /flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1
sku: E2025032601,100088050,114993489,114993488,100026552,102111001,100020039,100094378
last_update:
  date: 07/02/2026
  author: Dongxu Jin
createdAt: '2026-07-02'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/es/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/
---

# Flashear un kernel Linux en tiempo real PREEMPT_RT en Seeed reComputer Jetson con JetPack 6.2.1

Un kernel en tiempo real, también conocido como kernel PREEMPT_RT, es una variante del kernel Linux con capacidades mejoradas de planificación en tiempo real. Su objetivo principal es reducir la latencia de planificación y mejorar el determinismo de la ejecución de tareas, en lugar de aumentar el rendimiento bruto de cómputo.

En comparación con un kernel Linux estándar, un kernel en tiempo real permite que las tareas de alta prioridad preempcionen los recursos de CPU más rápidamente y reduce el jitter de temporización causado por interrupciones y planificación de hilos. Esto ayuda a que las tareas de control se ejecuten de forma estable en ciclos fijos. En escenarios de robótica, automatización industrial, control de movimiento, conducción autónoma y computación en el borde, un kernel en tiempo real puede mejorar significativamente la estabilidad y fiabilidad de las cargas de trabajo en tiempo real como el control de motores, la adquisición de datos de sensores y la comunicación por buses industriales, incluidos CAN y EtherCAT.

Esta guía se basa en el BSP oficial NVIDIA Jetson Linux R36.4.4. Fusiona el BSP R36.4.4 de Seeed, compila de forma cruzada el kernel PREEMPT_RT y flashea el sistema en el SSD NVMe de un dispositivo Jetson de Seeed.

## Referencias

- [NVIDIA Jetson Linux R36.4.4 Quick Start](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html#to-determine-whether-the-developer-kit-is-in-force-recovery-mode)
- [NVIDIA Jetson Linux R36.4.4 Kernel Customization](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Kernel/KernelCustomization.html)
- [Artículo de referencia en CSDN](https://blog.csdn.net/Cruelbuildingdog/article/details/145872768)

## Requisitos de hardware

- Un PC host x86 con Ubuntu
- Un dispositivo Seeed reComputer o reServer que se va a flashear

## Crear un espacio de trabajo y descargar los archivos del sistema

Crea un espacio de trabajo en el PC host:

```bash
mkdir ~/RT_ws
cd ~/RT_ws
```

Ve a [NVIDIA Jetson Linux R36.4.4](https://developer.nvidia.com/embedded/jetson-linux-r3644), descarga los cuatro archivos resaltados en la imagen de abajo y colócalos en el espacio de trabajo `~/RT_ws`.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/1.png"/></div>

Descarga el paquete ZIP del código fuente desde [Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra), o clona el repositorio:

```bash
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git
```

Debido a que este nombre de directorio puede entrar en conflicto con el nombre de directorio oficial de NVIDIA, se recomienda descargar el paquete ZIP y extraerlo siguiendo los pasos de esta guía.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/2.png"/></div>

Comprueba que existan los siguientes archivos en `~/RT_ws`:

```bash
ls -lh \
  Jetson_Linux_R36.4.4_aarch64.tbz2 \
  Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 \
  public_sources.tbz2 \
  aarch64--glibc--stable-2022.08-1.tar.bz2 \
  Linux_for_Tegra-r36.4.4.zip
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/3.png"/></div>

## Instalar dependencias en el host

```bash
cd ~/RT_ws

sudo apt-get update

sudo apt-get install -y \
  qemu-user-static \
  python3-pip \
  device-tree-compiler \
  flex \
  bison \
  libncurses-dev \
  libssl-dev \
  build-essential \
  sshpass \
  abootimg \
  nfs-kernel-server \
  libxml2-utils
```

## Extraer el BSP oficial, rootfs, fuentes, toolchain y overlay de Seeed

```bash
cd ~/RT_ws

mkdir -p l4t-gcc

tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C l4t-gcc

tar xf Jetson_Linux_R36.4.4_aarch64.tbz2

tar xf public_sources.tbz2 -C .

unzip -q Linux_for_Tegra-r36.4.4.zip -d seeed_overlay

sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

El rootfs debe extraerse con `sudo tar xpf`. No uses `tar` normal, de lo contrario la propiedad y los permisos de los archivos serán incorrectos. Si ya lo has extraído, puedes seguir usando el directorio existente. Limpia el directorio antiguo solo cuando quieras empezar completamente desde cero.

## Extraer las fuentes de NVIDIA

```bash
cd ~/RT_ws/Linux_for_Tegra/source

tar xf kernel_src.tbz2

tar xf kernel_oot_modules_src.tbz2

tar xf nvidia_kernel_display_driver_source.tbz2
```

## Fusionar el overlay BSP de Seeed

```bash
cd ~/RT_ws

cp -a seeed_overlay/Linux_for_Tegra-r36.4.4/. Linux_for_Tegra/
```

Este paso debe completarse antes de compilar. El overlay de Seeed modifica el kernel, los módulos OOT, los archivos DTS y Makefile de `hardware/nvidia/t23x/nv-public`, y `bootloader/generic/BCT`. Si se omite este paso, durante el flasheo solo estará disponible la configuración oficial del kit de desarrollo de NVIDIA y no se incluirá la información de la carrier board de Seeed.

## Aplicar los binarios de NVIDIA al rootfs e instalar los prerrequisitos de flasheo

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo ./apply_binaries.sh

sudo ./tools/l4t_flash_prerequisites.sh
```

## Compilar el kernel PREEMPT_RT, los módulos OOT y el DTB

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

./nvbuild.sh -r
```

La opción `-r` habilita la configuración oficial PREEMPT_RT de NVIDIA. El directorio de salida de la compilación es `~/RT_ws/Linux_for_Tegra/source/kernel_out`. Después de una compilación correcta, el sufijo de la versión del kernel debería incluir `-rt-tegra`.

## Desplegar Image, DTB y DTBO con `do_copy.sh` de Seeed

```bash
cd ~/RT_ws/Linux_for_Tegra/source

./do_copy.sh

# Additional checks:
ls -lh ../kernel/Image

ls ../kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb

ls ../kernel/dtb/tegra234-j201-p3768-0000+p3767-0000-recomputer-indu.dtb
```

`do_copy.sh` es el punto de entrada de despliegue en el BSP de Seeed. Copia los DTB de reComputer y reServer compilados, los DTBO de cámara y GMSL, y el nuevo `kernel/Image`.

Si `do_copy.sh` informa que no se puede encontrar un DTB de Seeed, normalmente significa que el overlay de Seeed no se fusionó completamente o que la compilación no usó el `source/Makefile` con overlay de Seeed.

## Instalar los módulos del kernel en el rootfs

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

export INSTALL_MOD_PATH=~/RT_ws/Linux_for_Tegra/rootfs/

sudo -E ./nvbuild.sh -i
```

## Copiar los DTBO comunes de Seeed a `rootfs/boot` y actualizar el initrd

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-imx477-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-imx219-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-gmsl*.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-orbbec-335lg-overlay.dtbo rootfs/boot/ 2>/dev/null || true

sudo ./tools/l4t_update_initrd.sh
```

Copiar archivos DTBO a `rootfs/boot` permite que el sistema siga usando los overlays de cámara y GMSL de Seeed después del arranque. `l4t_update_initrd.sh` escribe las nuevas dependencias de módulos en el initrd. No omitas este paso para arranque desde NVMe.

## Comprobar la salida de la compilación

```bash
cd ~/RT_ws/Linux_for_Tegra

ls -lh kernel/Image

ls kernel/dtb/tegra234-j*.dtb

find rootfs/lib/modules -maxdepth 1 -type d -name '*-rt-tegra' -print
```

Si estás flasheando un reComputer J401, al menos deberían existir los siguientes archivos:

```text
kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

## Entrar en modo Force Recovery y comprobar la conexión USB

Pon el interruptor `REC` del dispositivo en `ON` y conecta el PC host x86 al puerto `Debug/Device` que está junto a él con un cable USB.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/4.jpg"/></div>

En el PC host, ejecuta:

```bash
cd ~/RT_ws/Linux_for_Tegra

lsusb
```

Deberías ver una salida similar a:

```text
Bus <bbb> Device <ddd>: ID 0955:<nnnn> NVIDIA Corp.
```

Si no aparece `0955`, comprueba el jumper REC/GND o el flujo del botón de modo de recuperación, confirma que el cable Type-C admite transmisión de datos y asegúrate de que el dispositivo USB de NVIDIA se haya pasado a Ubuntu si estás usando una máquina virtual.

## Seleccionar el nombre de configuración de la placa Seeed

```bash
cd ~/RT_ws/Linux_for_Tegra

export SEEED_BOARD_CONF=recomputer-orin-j401

test -f "${SEEED_BOARD_CONF}.conf"
```

Nombres de configuración disponibles:

```text
recomputer-orin-j401
recomputer-industrial-orin-j201
reserver-industrial-orin-j401
recomputer-orin-j40mini
recomputer-orin-super-j401
recomputer-orin-robotics-j401
recomputer-orin-robotics-j401-gmsl
reserver-agx-orin-j501x
reserver-agx-orin-j501x-gmsl
```

La siguiente tabla asigna los modelos de producto a los nombres de configuración:

| Modelo de producto | Nombre de configuración |
| --- | --- |
| reComputer classic J3010/J3011/J4011/J4012 | `recomputer-orin-j401` |
| reComputer Industrial J3010/J3011/J4011/J4012 | `recomputer-industrial-orin-j201` |
| reServer Industrial J3010/J3011/J4011/J4012 | `reserver-industrial-orin-j401` |
| reComputer Mini J40 Serie | `recomputer-orin-j40mini` |
| reComputer Super J401 Serie | `recomputer-orin-super-j401` |
| reComputer Robotics J401 Serie | `recomputer-orin-robotics-j401` o `recomputer-orin-robotics-j401-gmsl` |
| reServer AGX Orin J501x | `reserver-agx-orin-j501x` o `reserver-agx-orin-j501x-gmsl` |

## Rellenar las variables de EEPROM del módulo e información de la placa

Al flashear directamente en línea y cuando la lectura de la EEPROM por USB funciona con normalidad, las herramientas de NVIDIA normalmente pueden leer esta información automáticamente.

Si encuentras un error sobre información de módulo o placa faltante, rellena las variables de abajo según el modelo real del módulo antes de flashear.

Valores comunes de Orin NX / Orin Nano:

| Módulo | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| Orin Nano 4GB | 3767 | 0004 | 300 | N.2 | 00:00:00:D6 |
| Orin Nano 8GB | 3767 | 0003 | 300 | N.2 | 00:00:00:D6 |
| Orin NX 16GB | 3767 | 0000 | 300 | G.3 | 00:00:00:D3 |
| Orin NX 8GB | 3767 | 0001 | 300 | M.3 | 00:00:00:D4 |

Valores comunes de AGX Orin J501x:

| Módulo | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| AGX Orin 32GB | 3701 | 0004 | 500 | J.0 | 00:00:00:D2 |
| AGX Orin 64GB | 3701 | 0005 | 500 | M.0 | 00:00:00:D0 |

Ejemplo para `reComputer J4012 / Orin NX 16GB`:

```bash
export BOARDID=3767
export BOARDSKU=0000
export FAB=300
export BOARDREV=G.3
export CHIP_SKU=00:00:00:D3
```

Ejemplo para `reComputer J3011 / Orin Nano 8GB`:

```bash
export BOARDID=3767
export BOARDSKU=0003
export FAB=300
export BOARDREV=N.2
export CHIP_SKU=00:00:00:D6
```

Comprueba las variables:

```bash
echo "CONF=${SEEED_BOARD_CONF} BOARDID=${BOARDID} BOARDSKU=${BOARDSKU} FAB=${FAB} BOARDREV=${BOARDREV} CHIP_SKU=${CHIP_SKU}"
```

El archivo de configuración de Seeed selecciona `DTB_FILE` según el `board_sku` que se asigna a `BOARDSKU`. Si `BOARDSKU` es incorrecto, el flasheo puede completarse correctamente, pero el dispositivo puede arrancar con el DTB equivocado. En ese caso, los periféricos, Ethernet, M.2, cámaras o GPIO pueden no funcionar correctamente.

## Flashear a NVMe

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo -E BOARDID="${BOARDID}" BOARDSKU="${BOARDSKU}" FAB="${FAB}" BOARDREV="${BOARDREV}" CHIP_SKU="${CHIP_SKU}" \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --showlogs \
  --network usb0 \
  "${SEEED_BOARD_CONF}" \
  external
```

Este comando flashea el SSD NVMe y gestiona la configuración de arranque QSPI para Orin NX y Orin Nano. El argumento final `external` significa que el sistema rootfs arranca desde el NVMe externo. Si el dispositivo tiene dos SSD NVMe, sigue siendo recomendable usar `external` para que el rootfs use `PARTUUID`.

## Después de flashear

Después de que el flasheo se complete correctamente, apaga el dispositivo, retira el puente REC/GND o suelta el botón de modo de recuperación y vuelve a encender el dispositivo Jetson.

## Verificar el kernel en tiempo real y el DTB

Comprueba la versión del kernel:

```bash
uname -a
```

La salida debe incluir el sufijo `-rt`.

Comprueba la configuración del kernel:

```bash
zcat /proc/config.gz | grep PREEMPT
```

La salida debe incluir:

```text
CONFIG_PREEMPT_RT=y
```

Usa `cyclictest` para probar el jitter de planificación:

```bash
sudo apt install -y rt-tests
sudo cyclictest -Sp90-i1000-l100000
```

Después de esperar un período de tiempo, comprueba si el valor `Avg` es inferior a 20 microsegundos. Salida de ejemplo:

```text
T: 0 (  1290) P:99 I:1000 C:100000 Min: 5  Act:10 Avg: 7  Max: 18
T: 1 (  1291) P:99 I:1000 C:100000 Min: 4  Act: 9 Avg: 7  Max: 20
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/5.png"/></div>

Si las comprobaciones anteriores se superan, el kernel en tiempo real PREEMPT_RT se ha instalado correctamente.

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
