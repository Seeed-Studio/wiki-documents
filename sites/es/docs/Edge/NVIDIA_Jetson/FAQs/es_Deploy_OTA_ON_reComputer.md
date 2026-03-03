---
description: Esta guía explica cómo crear un paquete OTA completo para actualizar un reComputer mini J4012 de JetPack 5.1.3 a JetPack 6.2, incluyendo la preparación del BSP, generación del paquete y despliegue en el dispositivo.
title: Desplegar OTA en reComputer
keywords:
- jetson
- OTA
- JetPack
- reComputer
- BSP
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /es/deploy_ota_on_recomputer
last_update:
  date: 12/05/2025
  author: Zibo
---

# Desplegar OTA en reComputer

## Introducción

Las actualizaciones Over-the-Air (OTA) de NVIDIA Jetson permiten a los desarrolladores actualizar dispositivos edge de una versión anterior de JetPack a una versión más reciente de forma remota a través de una conexión de red, eliminando la necesidad de un PC host o re-flasheo físico por USB.
Esta wiki demostrará cómo realizar actualizaciones OTA (Over-the-Air) en reComputer.

:::note
Plataforma de demostración: reComputer mini J4012 con JetPack 5.1.3 → JetPack 6.2 OTA. Otros reComputers basados en Orin pueden seguir la misma lógica, pero adaptar el nombre `<target_board>` que coincida con su placa portadora.
:::

## Prerrequisitos
- PC Ubuntu x86_64
- [reComputer mini J4012](https://www.seeedstudio.com/reComputer-Mini-J4012-with-Extension-p-6353.html)

## Realizar OTA rápidamente

Aquí proporcionamos un paquete de actualización precompilado para la placa de desarrollo Seeed,
que actualiza de Jetpack 5.1.3 a Jetpack 6.2. Si planeas actualizar directamente de Jetpack 5.1.3 a Jetpack 6.2 vía OTA,
simplemente puedes descargar y proceder con la actualización rápidamente.


import OtaProductSelect from '@site/src/components/jetson/OtaProductSelect';

export const productOptions = [
  {
    value: 'j4012mini',
    label: 'reComputer mini',
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    otaDescription: 'Payload OTA JP5.1.3 → JP6.2 listo para usar para la serie mini de reComputer mini',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkQzbsk18YRpFT6j1BK8VnAaH18J6nKGimI0xa4DTLsFg?e=PKhf7u',
      filename: 'ota_payload_package.tar.gz',
      sha256: '3da8fd97c450f4f7bd83390ab50f951dffd5ec1d43c39a1e6156b4806f7df7c6',
    },
  },
  {
    value: 'j4012classic',
    label: 'reComputer J30/40/401B',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    otaDescription: 'Payload OTA JP5.1.3 → JP6.2 listo para usar para reComputer clásico J30/40/401B',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDRxYlSWuWvRbELB8tyGQ88AUa3cDYrNoj0kAyyzU3YTFA?e=P60b7N',
      filename: 'ota_payload_package.tar.gz',
      sha256: 'b0dde3e8fb5ac3838d8d569def1a373949ca30f59f52e30197f872c95aa7a777',
    },
  },
  {
    value: 'j4012industrial',
    label: 'reComputer industrial Serie',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    otaDescription: 'Payload OTA JP5.1.3 → JP6.2 listo para usar para la serie reComputer Industrial',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC1cwAhknjjRLGyVc_Ze7QOAUAQ7KSi3IkzUSZ3XD45gL4?e=Q68dEF',
      filename: 'ota_payload_package.tar.gz',
      sha256: '31f17fe8606b19730c3d5a29b8cf96db99dff587de93136dbd74f39c71aeb4e9',
    },
  },
  {
    value: 'j4012reserver',
    label: 'reServer industrial Serie',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg',
    otaDescription: 'Payload OTA JP5.1.3 → JP6.2 listo para usar para la serie reServer industrial.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBGOUJ8bXdYQbfRVpP9y_QHAdO-UoETL5AlRco6eTWg_Kg?e=loYpgD',
      filename: 'ota_payload_package.tar.gz',
      sha256: '879c2ab65019955ee798479d5303d91df22d496215657ea132dcfd3a11e46d24',
    },
  },
  {
    value: 'j501-carrier A GX-Orin',
    label: 'reServer industrial J501 AGX-Orin con GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'Payload OTA JP5.1.3 → JP6.2 listo para usar para reServer industrial J501 con GMSL.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBhfhZjS7orSLpp2ZS_CmhcAeGMpeh9xFsOJV7op2b0VIY?e=AgpgCt',
      filename: 'ota_payload_package.tar.gz',
      sha256: '83deb4d1a5f5a999c4cfb08581baf4fb4754cab5f867ae2809e0d03f1d817b60',
    },
  },
  {
    value: 'j501-carrier AGX-Orin',
    label: 'reServer industrial J501 AGX-Orin sin GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'Payload OTA JP5.1.3 → JP6.2 listo para usar para reServer industrial J501 sin GMSL.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6wipGORa_SqinT6KB6eEXAZfD80o1uAo2jpZMVo7M5aU?e=eqbjZY',
      filename: 'ota_payload_package.tar.gz',
      sha256: '9d015fdcbabb77a9669fb8f0f6762c9a69260cd47ec4710d79de7cbdc19e9f23',
    },
  },
]

<OtaProductSelect options={productOptions} lang="es" />



### Procedimiento OTA en el dispositivo

:::note
Las siguientes operaciones se realizan en el Jetson (vía conexión remota)
:::

**Paso 1.** Instalar software dependiente
```bash
sudo apt-get update
sudo apt-get install efibootmgr nvme-cli -y
```

**Paso 2.** Descargar la herramienta OTA
```bash
#Create a workspace directory
mkdir ~/ota_ws && cd ota_ws
#Download the OTA tools from Nvidia
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/ota_tools_r36.4.3_aarch64.tbz2
# Uncompress
tar xvf ota_tools_r36.4.3_aarch64.tbz2
```
Después de descomprimir los archivos anteriores, obtendrás una carpeta llamada "Linux_for_Tegra".

**Paso 3.** Transferir el archivo ota al Jetson (¡Este paso debe realizarse en tu PC!)

:::info
Reemplaza `<Jetson IP>` con la dirección IP real de tu Jetson. Por ejemplo: 192..168.137.xx
Reemplaza la ruta del archivo `ota_payload_package.tar.gz` y la ruta `ota_ws` con tu ruta real
:::

```bash
#example:Use scp to transfer files
scp /path/to/your downloaded/ota_payload_package.tar.gz seeed@<Jetson IP>:/home/user/ota_ws
```
**Paso 4.** Hacer copia de seguridad de los archivos del sistema original
```bash
cd /path/ota_ws/Linux_for_Tegra/tools/ota_tools/version_upgrade/
#The editor needs to keep a backup of the file directory that needs to be preserved.
vim ota_backup_files_list.txt
```
:::note
Lista los archivos o carpetas que quieres conservar.
¡Usa ruta absoluta!
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/backup_list.png"/>
</div>
:::

```bash
./nv_ota_preserve_data.sh
```
**Paso 5.** Iniciar OTA

```bash
cd Linux_for_Tegra/tools/ota_tools/version_upgrade
#Specify the directory of the OTA file
sudo ./nv_ota_start.sh ~/ota_ws/ota_payload_package.tar.gz
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh.png"/>
</div>

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh_finish.png"/>
</div>

Después de que se ejecute el script, puedes reiniciar Jetson para iniciar el proceso OTA.
Si tu dispositivo está conectado a un monitor, cuando reinicies, verás que el monitor mostrará el logo de Nvidia y luego entrará en kernel overlay. La pantalla permanecerá negra (un fenómeno normal) por un tiempo, y luego entrará en el proceso OTA.
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_process.jpg"/>
</div>

Después de que se complete todo el proceso, necesitas entrar al sistema para configurar el nombre de usuario y contraseña.

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/update_finish.jpg"/>
</div>
**Paso 6.** Validación post-actualización

Una vez que el dispositivo arranque en JetPack 6.2:

```bash
nvbootctrl -t
sudo nvme list
cat /etc/nv_tegra_release
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sucess.png"/>
</div>
Asegúrate de que la versión reportada coincida con `R36 (release), REVISION: 4.3`, y confirma que tus aplicaciones inicien como se espera.
¡Felicidades! El proceso OTA fue exitoso. ¡Los archivos del sistema también fueron guardados previamente!
## Otras versiones de OTA (opcional)
Arriba, solo hemos proporcionado la versión común del paquete OTA. Si necesitas actualizar de la versión actual de OTA a otra versión, por favor consulta los siguientes pasos para generar el paquete OTA correspondiente.
Lo que estamos demostrando ahora es la actualización de Jetpack 5.1.3 a la versión objetivo, Jetpack 6.2.

### Preparar el BSP objetivo (JetPack 6.2)
Todos los comandos a continuación se ejecutan en el PC Ubuntu.

**Paso 1. Descargar paquetes NVIDIA JetPack 6.2.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**Paso 2. Extraer el BSP en `Linux_for_Tegra`.**

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**Paso 3. Sincronizar fuentes NVIDIA para JP6.2.**

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
cd ../..
```

**Paso 4. Superponer personalizaciones de Seeed.**

```bash
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

**Paso 5. Aplicar binarios NVIDIA y dependencias del host.**

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo apt-get update
sudo apt-get install -y build-essential flex bison libssl-dev sshpass \
  abootimg nfs-kernel-server libxml2-utils qemu-user-static
```

**Paso 6. Instalar la cadena de herramientas de Jetson para la compilación del kernel.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/toolchain/aarch64--glibc--stable-2022.08-1.tar.bz2
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=$(realpath .)/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

**Paso 7. Compilar el kernel, DTBs y módulos.**

```bash
cd source
./nvbuild.sh
./do_copy.sh
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i
cd ..
```

En este punto, el BSP JP6.2 bajo `~/JP6.2/Linux_for_Tegra` (o la ruta que hayas elegido) está listo para ser usado como el BSP TARGET para el script de generación OTA.

### Preparar el BSP Base (JetPack 5.1.3)

Usa un espacio de trabajo limpio (por ejemplo, `~/JP5.1.3/`).

**Paso 1. Descargar los paquetes de JetPack 5.1.3.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Jetson_Linux_R35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2
```

**Paso 2. Extraer y copiar las superposiciones BSP de Seeed.**

```bash
tar xf Jetson_Linux_R35.5.0_aarch64.tbz2 -C JP5.1.3
cd JP5.1.3
git clone -b r35.5.0 https://github.com/Seeed-Studio/Linux_for_Tegra.git
cp -rf Linux_for_Tegra/* ./Linux_for_Tegra/
```

**Paso 3. Poblar el sistema de archivos raíz y aplicar binarios.**

```bash
cd Linux_for_Tegra
sudo tar xpf ../Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2 -C rootfs
sudo ./apply_binaries.sh
```

**Paso 4. Instalar la cadena de herramientas GCC de Bootlin para compilaciones del kernel JP5.**

```bash
wget https://developer.nvidia.com/embedded/jetson-linux/bootlin-toolchain-gcc-93 -O bootlin-toolchain-gcc-93.tar.bz2
mkdir -p l4t-gcc
tar xf bootlin-toolchain-gcc-93.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE_AARCH64_PATH=$(realpath .)/l4t-gcc
```

**Paso 5. Compilar e instalar módulos, árboles de dispositivos y controladores personalizados.**

```bash
cd source
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i -r ${INSTALL_MOD_PATH}
./do_copy.sh
```

Tu ruta BSP JP5.1.3 (por ejemplo `/home/seeed/test/5.1.3/Linux_for_Tegra`) actuará como el BSP BASE durante la generación del paquete OTA.

### Generar el Paquete OTA en el Host

Navega al espacio de trabajo JP6.2 y ejecuta el script auxiliar OTA de NVIDIA:

```bash
cd ~/JP6.2/Linux_for_Tegra/tools/ota_tools/
./start_generate_ota_pkg.sh
```

El script solicitará la siguiente información:

- **Ruta BASE_BSP**: `/home/seeed/test/5.1.3/Linux_for_Tegra`
- **Ruta TARGET_BSP**: `/home/seeed/test/6.2/Linux_for_Tegra`
- **Nombre target_board**: `recomputer-orin-j40mini` (usa el nombre `.conf` que coincida con tu dispositivo)
- **bsp_version (Rmm-n)**: `R35-5` para JetPack 5.1.3

Si todo está configurado correctamente, la herramienta termina con:

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_pkg_generate.png"/>
</div>

### Realizar la OTA en el Dispositivo Jetson
Consulta de nuevo el [procedimiento OTA en el dispositivo](#procedimiento-ota-en-el-dispositivo) para los pasos detallados.


## Recursos

- [Crear Respaldo y Restaurar en reComputer](https://wiki.seeedstudio.com/es/create_backup_and_restore_on_recomputer/)
- [Catálogo de Series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed-Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/r36.4.3)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir Seeed Studio! Si necesitas más asistencia, comunícate a través de los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
