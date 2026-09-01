---
description: Compila una imagen Yocto completa de desarrollo CUDA desde el repositorio de Seeed y flaséala en un reComputer Super.
title: Compilar y flashear una imagen Yocto para reComputer Super
keywords:
  - Yocto
  - OpenEmbedded
  - reComputer Super
  - Jetson Orin NX
  - CUDA
  - Jetson Linux
image: https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-07-24
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# Compilar y flashear una imagen Yocto para reComputer Super

:::note Copia de la colección JetPack 7.2
Esta copia se incluye porque el soporte oficial de OpenEmbedded/Yocto es una capacidad importante de producción Linux de JetPack 7.2. Antes de usarla como imagen JetPack 7.2, confirma que la rama Yocto de Seeed seleccionada, la capa BSP de NVIDIA y el paquete de flasheo generado coinciden con el Jetson Linux 39.2 de destino previsto.
:::

Esta guía compila una imagen Yocto de Seeed para **reComputer Super J401 con un módulo Jetson Orin NX 16GB** y la flashea en la unidad NVMe del Jetson.

El ejemplo usa `seeed-image-jetson-development`. Esta imagen proporciona un entorno de desarrollo en el lado del objetivo con CUDA Toolkit y `nvcc`, archivos de desarrollo de CUDA/cuDNN/TensorRT/VPI/OpenCV, herramientas de compilación y depuración, ejemplos de NVIDIA y paquetes de prueba.

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

:::note
Este es un sistema OpenEmbedded/Yocto, no un sistema de archivos raíz de Ubuntu instalado por NVIDIA SDK Manager. La gestión de paquetes, el contenido del sistema de archivos y el entorno de escritorio difieren de JetPack Ubuntu.
:::

## Requisitos previos

Prepara lo siguiente:

- Un PC host Linux x86_64, preferiblemente una máquina física con Ubuntu o Debian
- Al menos 16 GB de RAM; se recomiendan 32 GB o más
- Un SSD local rápido y una conexión a Internet estable
- Un reComputer Super con un módulo Jetson Orin NX u Orin Nano compatible
- Un cable de datos USB Tipo C conectado directamente al PC host
- Acceso `sudo` para instalar paquetes en el host y flashear

:::warning
Reserva **al menos 400 GB de espacio libre en disco** en el PC host. Las descargas de Yocto, la caché de estado compartido, los archivos temporales de compilación, el sistema de archivos raíz y el paquete de flasheo extraído pueden consumir varios cientos de gigabytes. Se recomienda encarecidamente un SSD local en el host.
:::

Instala los paquetes de host comúnmente requeridos:

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

Si BitBake informa de que la distribución del host no es compatible, usa un host Linux compatible con Yocto en lugar de ignorar la advertencia de validación del host.

## SKU de módulo usado en esta guía

El reComputer Super J401 es compatible con los siguientes SKU de módulo P3767:

| `--module-sku` | Número completo de módulo | Módulo Jetson |
| --- | --- | --- |
| `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| `0004` | `P3767-0004` | Jetson Orin Nano 4GB |

Esta guía usa `0000`. Utiliza siempre un directorio de compilación separado para cada combinación de carrier y SKU de módulo.

## Clonar el repositorio Yocto de Seeed

Crea un espacio de trabajo limpio y clona la rama `master`:

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
```

El repositorio principal contiene los metadatos de Seeed y los scripts auxiliares. `prepare-workspace.sh` inicializa las capas OpenEmbedded y OE4T fijadas como submódulos de Git.

## Compilar la imagen de desarrollo completa con `all`

La primera compilación recomendada usa `build.sh all`. Valida los metadatos, compila los device trees de Seeed, comprueba los archivos de arranque y compila la imagen completa y el archivo tegraflash en orden.

### Preparar el directorio de compilación

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-seeed-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

La caché compartida mantiene las descargas y el sstate fuera del directorio de compilación para que puedan reutilizarse en compilaciones posteriores.

Confirma el directorio de compilación activo, el carrier y el SKU de módulo:

```bash
./scripts/seeed/build.sh current \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

La salida debe mostrar:

```text
Machine:   recomputer-orin-super-j401
Module SKU: 0000
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" />
</div>

:::warning
No continúes si el `MACHINE` mostrado o el SKU de módulo no coinciden con el hardware. No reutilices este directorio de compilación para otro carrier o SKU de módulo.
:::

### Ejecutar la compilación completa

Compila la imagen de desarrollo del lado del objetivo:

```bash
./scripts/seeed/build.sh all \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

La primera compilación descarga y compila un gran número de componentes y puede tardar varias horas. El comando se detiene inmediatamente si la validación de metadatos, la compilación del device tree, las comprobaciones de archivos de arranque o la compilación de la imagen fallan.

Cuando las cuatro etapas se completan correctamente, la salida del terminal es similar a la siguiente:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" />
</div>

Después de una compilación correcta, el directorio de despliegue es:

```text
build-seeed-super-j401-sku0000/tmp/deploy/images/recomputer-orin-super-j401/
```

Los archivos generados importantes incluyen:

```text
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.ext4
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.manifest
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.spdx.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.testdata.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" />
</div>

El archivo `.tegraflash-tar.zst` es el archivo auto-contenido que se usa para flashear.

## Preparar el directorio de flasheo

Extrae y valida el archivo de flasheo de la imagen de desarrollo:

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

El asistente verifica el SKU de módulo y comprueba que la imagen rootfs, el DTB, el DTB de BPMP, la configuración de pinmux, la configuración de voltaje de pads y los scripts de flasheo estén presentes. Luego imprime el directorio preparado y el siguiente comando exacto.

:::tip
Usa un directorio de salida nuevo o vacío en el SSD local del host. No extraigas el paquete de flasheo en la unidad de destino del Jetson.
:::

## Poner el reComputer Super en modo Force Recovery

1. Apaga el reComputer Super.
2. Coloca el interruptor de recuperación del reComputer Super en la posición **RESET**.
3. Conecta la fuente de alimentación.
4. Conecta el puerto de dispositivo/depuración USB Tipo C al host Linux con un cable apto para datos.
5. En el PC host, verifica el modo de recuperación:

```bash
lsusb -d 0955:
```

Para el módulo Orin NX 16GB usado en esta guía, la salida debe incluir un dispositivo similar a:

```text
0955:7323 NVIDIA Corp. APX
```

Otros módulos Super compatibles usan diferentes IDs de producto USB:

| Módulo | ID USB de recuperación |
| --- | --- |
| Orin NX 16GB | `0955:7323` |
| Orin NX 8GB | `0955:7423` |
| Orin Nano 8GB | `0955:7523` |
| Orin Nano 4GB | `0955:7623` |

No inicies el flasheo hasta que el dispositivo NVIDIA APX sea visible.

## Flashear la imagen Yocto

Ejecuta el flasher generado desde el directorio preparado:

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

El script arranca un flasher temporal initrd a través de USB, expone la unidad NVMe de destino al host, escribe las particiones y recupera el estado final del dispositivo. No desconectes el USB ni la alimentación mientras se está ejecutando.

Un flasheo correcto termina con una salida similar a:

```text
[OK: /dev/sdX]
Final status: SUCCESS
Successfully finished
```

El nombre temporal del dispositivo de bloque en el host se asigna dinámicamente. No supongas que siempre es `/dev/sdb` o `/dev/sdc`.

## Primer arranque

Después de que el comando de flasheo termine correctamente:

1. Desconecta el cable de datos USB.
2. Devuelve el interruptor de recuperación de **RESET** a su posición normal.
3. Apaga el dispositivo durante varios segundos.
4. Conecta una pantalla HDMI y vuelve a encender el reComputer Super.

El escritorio Yocto debería arrancar desde la unidad NVMe flasheada:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" />
</div>

La imagen de desarrollo permite el inicio de sesión local como `root` con una contraseña inicial vacía. Establece una contraseña inmediatamente:

```bash
passwd
```

Verifica el entorno de desarrollo del lado del objetivo:

```bash
nvcc --version
gcc --version
cmake --version

test -f /usr/local/cuda-13.2/include/cuda.h
test -f /usr/include/cudnn.h
test -f /usr/include/NvInfer.h
test -f /opt/nvidia/vpi4/include/vpi/VPI.h
pkg-config --modversion opencv4
```

## Comandos detallados de compilación parametrizada

La sección anterior usó `all`, que es la ruta recomendada para una primera compilación. Para depurar o recompilar una etapa, ejecuta el mismo flujo de trabajo explícitamente:

```bash
# 1. Validate metadata and print the selected BSP variables
./scripts/seeed/build.sh metadata \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 2. Build the Seeed DTB and DTBO files
./scripts/seeed/build.sh dtb \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 3. Install and verify the custom BCT, pinmux, and boot files
./scripts/seeed/build.sh bootfiles \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 4. Build the complete root filesystem and tegraflash archive
./scripts/seeed/build.sh image \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

Si el sistema de archivos raíz ya está compilado y solo es necesario regenerar el archivo comprimido de tegraflash, usa:

```bash
./scripts/seeed/build.sh flash-package \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

## Opcional: Compilar un SDK de desarrollo cruzado x86_64

La imagen de desarrollo flasheada ya admite la compilación directamente en el Jetson. Compila el SDK del host solo cuando un PC x86_64 deba compilar aplicaciones de forma cruzada para el dispositivo de destino:

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

El instalador del SDK generado se coloca en:

```text
build-seeed-super-j401-sku0000/tmp/deploy/sdk/
```

Este instalador opcional no es necesario para compilar la imagen de Jetson ni para flashear el dispositivo.

## Solución de problemas

### El directorio de compilación informa la máquina o el SKU incorrectos

Crea un nuevo directorio de compilación con `prepare-workspace.sh`. No edites un directorio de compilación existente para cambiar placas carrier o SKUs de módulo.

### No se puede encontrar el archivo comprimido de flasheo

Asegúrate de pasar el mismo nombre de imagen tanto a la compilación como a la preparación del flasheo:

```text
seeed-image-jetson-development
```

`prepare-flash.sh` usa por defecto `demo-image-full`, por lo que omitir `--image seeed-image-jetson-development` haría que buscara el archivo comprimido equivocado.

### El flasheo se detiene en `Waiting for USB storage device flashpkg`

En este punto, el host está esperando que el initrd de Jetson exponga un dispositivo de almacenamiento masivo USB temporal. Comprueba el cable USB, usa un puerto USB de la placa base, retira dispositivos de almacenamiento USB innecesarios y confirma que el Jetson siga siendo visible con `lsusb`.

## Referencias

- [Repositorio Seeed tegra-demo-distro](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Compilación rápida de Yocto Project](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [Documentación de OE4T meta-tegra](https://oe4t.github.io/)

¡Gracias por elegir productos de Seeed Studio! Para soporte técnico y discusión de productos, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
