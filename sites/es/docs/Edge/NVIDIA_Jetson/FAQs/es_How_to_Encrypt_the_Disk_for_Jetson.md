---
description: Cómo Cifrar el Disco para Jetson
title: Cómo Cifrar el Disco para Jetson
keywords:
- jetson
- encrypt
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /es/how_to_encrypt_the_disk_for_jetson
last_update:
  date: 10/11/2025
  author: Dayu
---

**Este wiki toma L4T 36.4.3 y reComputer J401 como ejemplos, proporcionando pasos de referencia para el cifrado de disco de Jetson.
El proceso de cifrado de disco debe realizarse durante el flasheo. Si tu disco necesita ser cifrado, tendrás que reconfigurar y volver a flashear el sistema.**

**Antes del flasheo, asegúrate de tener una fuente de imagen correctamente construida, como se detalla en los siguientes pasos.**

## 1. Preparar el espacio de trabajo

Esta sección toma **L4T 36.4.3** como ejemplo para demostrar cómo construir el proyecto de código fuente y compilarlo. El mismo proceso se aplica a otras versiones—simplemente **reemplaza el número de versión en los comandos de ejemplo posteriores con tu versión de construcción deseada**.

Antes de comenzar, necesitas preparar un **host PC con Ubuntu 20.04/22.04**.

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
(reemplaza `-b <branch name>` con la rama objetivo):

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

El código fuente BSP para el Jetson de Seeed está disponible en **este [repositorio de GitHub](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main).**
Puedes verificar las diferentes ramas para encontrar tu versión de L4T deseada, ya que cada rama corresponde a una versión diferente de L4T.
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

trabajo de preparación para la construcción del kernel:

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




## 2. Generación de Archivos Cifrados y Guía de Flasheo

Entra al directorio de fuente previamente preparado y compilado:
```bash
cd Linux_for_Tegra
```


Instala las dependencias：
```python
sudo apt-get install python3-cryptography python3-cffi-backend libxml2-utils 
sudo apt-get install python3-pycryptodome python3-crypto
sudo apt-get install cryptsetup


pip install cryptography
pip install pycrypto
pip install --user --upgrade pycryptodome
```

Genera archivos cifrados basados en `OPTEE`. Ejecuta los siguientes comandos para generar los archivos cifrados `eks_t234.img` y `sym2_t234.key`: 

```python
cd source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb

openssl rand -hex 32 > sym_t234.key
openssl rand -hex 16 > sym2_t234.key
openssl rand -hex 16 > auth_t234.key
openssl rand -hex 32 > oem_k1.key

./example.sh
```
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/optee-output.png
"/></div>

Copia los archivos `eks_t234.img` y `sym2_t234.key` a los directorios especificados en tu carpeta de fuente: 
```python
cp eks_t234.img /your_path/cd Linux_for_Tegra/bootloader/
sudo cp sym2_t234.key /your_path/Linux_for_Tegra
```

El siguiente ejemplo demuestra cómo generar la imagen usando el `reComputer J401` como ejemplo:
```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --network usb0 \
  --no-flash \
  --showlogs \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  recomputer-orin-j401 \
  internal
```
Reemplaza `recomputer-orin-j401` con el nombre del dispositivo que estás usando. Necesitas proporcionar un `device name` válido como parámetro, que puedes encontrar verificando los nombres de archivos .conf en el directorio raíz de `Linux_for_Tegra`. El prefijo de estos nombres de archivo corresponde a los parámetros válidos de `device name`.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

:::tip
Para JetPack 5, dado que las rutas de archivo son diferentes, necesitas modificar el parámetro `-p` a:
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

Por lo tanto, los parámetros de nombre de dispositivo disponibles para **L4T 36.4.3** son los siguientes. Las series **j40** y **j30** usan el mismo archivo de configuración:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 también usa este `device name` como parámetro.)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401


Copia `eks_t234_sigheader.img.encrypt` al directorio objetivo:

```python
sudo cp bootloader/eks_t234_sigheader.img.encrypt ./tools/kernel_flash/images/internal/
```

En el directorio Linux_for_Tegra, ejecuta el siguiente comando para flashear el sistema de archivos raíz cifrado.
Nuevamente, reemplaza `recomputer-orin-j401` con el nombre de dispositivo correspondiente para tu placa.

```python
sudo ROOTFS_ENC=1 \
./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \                  
  -i ./sym2_t234.key \                            
  -c tools/kernel_flash/flash_l4t_t234_nvme_rootfs_enc.xml \  
  -S 80GiB \                                      
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \  
  --showlogs \                                    
  --network usb0 \                                
  recomputer-orin-j401 internal                    
```

Durante este proceso de flasheo, el almacenamiento en tu dispositivo Jetson será cifrado.

:::warning
Por favor, asegúrate de mantener los archivos de cifrado generados por `OPTEE` de forma segura, ya que serán requeridos más tarde para el descifrado.
:::

## 3. Recuperar la Contraseña de Descifrado

En el directorio de fuente previamente construido `Linux_for_Tegra`, copia el archivo `sym2_t234.key` a la siguiente ubicación:

```python
cp source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb/sym2_t234.key source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase
```

Luego, genera la contraseña de descifrado basada en el `UUID` y `BR_CID` obtenidos durante el proceso de flasheo:

```python
cd source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase


python3 gen_luks_passphrase.py -k sym2_t234.key -c "UUID of the disk" -u -e "BR_CID"
# For example
python gen_luks_passphrase.py -k sym2_t234.key -c "551df6eb-fa80-431c-bb54-121481e53bae" -u -e '0x80012344705E01D15C00000015020180'
```

Los valores de `UUID` y `BR_CID` se pueden encontrar en los archivos de registro bajo Linux_for_Tegra/initrdlog.
Localiza el archivo de registro correspondiente basado en la marca de tiempo de tu operación de flasheo para recuperar estos valores.

| BR CID | UUID |
|:--:|:--:|
| <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/BR CID.png"/> | <img width="340" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/UUID.png"/> |

`gen_luks_passphrase.py` mostrará brevemente la contraseña de descifrado en el terminal — por favor asegúrate de registrarla inmediatamente antes de que desaparezca.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/password.png
"/></div>

## Recursos

- [Código fuente del L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
