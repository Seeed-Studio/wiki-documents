---
description: Este tutorial muestra cómo flashear JetPack en Windows usando WSL2.
title: Flashear JetPack con WSL2
tags:
  - JetPack
  - WSL2
  - Windows
image: https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png
slug: /es/ai_robotics_flash_jetpack_with_wsl2
sku: 110110145
last_update:
  date: 02/24/2026
  author: Lorraine
---

# Flashear JetPack con WSL2

## Introducción

Este tutorial muestra cómo flashear JetPack en dispositivos Jetson usando Windows Subsystem for Linux 2 (WSL2). Este método permite a los usuarios de Windows flashear JetPack sin configurar una máquina dedicada con Ubuntu.

:::warning
Esta **no se considera una solución estable** y no habrá soporte activo. Si encuentras errores, utiliza en su lugar un host Ubuntu nativo.
:::

## Requisitos previos

### Requisitos del sistema

- **Windows**: Windows 10 1903 (Build 18362.1049 o posterior) o Windows 11
- **WSL**: Se requiere WSL2
- **usbipd-win**: Versión 4.x y superior

### Comprueba tu sistema

Comprueba la versión de compilación de Windows:

```bash
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild
```

Comprueba la versión de WSL:

```bash
wsl -v
```

Comprueba la versión de usbipd:

```bash
usbipd --version
```

### Distribuciones WSL recomendadas

| Versión de JetPack | Distribuciones WSL recomendadas |
|-----------------|-------------------------------|
| JetPack 4.x     | Ubuntu 18.04                  |
| JetPack 5.x     | Ubuntu 18.04 / Ubuntu 20.04   |
| JetPack 6.x     | Ubuntu 20.04 / Ubuntu 22.04   |

Para requisitos de versión específicos, consulta la [documentación de NVIDIA SDK Manager](https://developer.nvidia.com/sdk-manager#installation_get_started).

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/jetpack_host.png" />
</div>

Instala distribuciones desde Microsoft Store o usa la línea de comandos:


```bash
# For example, install Ubuntu 22.04
wsl --install -d Ubuntu-22.04
```

## Configurar el kernel de WSL2

### Kernel WSL personalizado
Se requiere un kernel WSL personalizado para admitir diferentes dispositivos USB. Puedes:
- Usar el kernel precompilado de abajo
- Compilar tu propio kernel siguiendo [esta guía](https://github.com/dorssel/usbipd-win/wiki/WSL-support)

**Descarga del kernel precompilado**: [Enlace de OneDrive](https://seeedstudio88-my.sharepoint.com/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FSeeed%5FTech%5FSupport%5FTemp%2Fwsl%5Fkernel%2FbzImage&parent=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FSeeed%5FTech%5FSupport%5FTemp%2Fwsl%5Fkernel&ga=1)
- SHA256: `f249022feab9372d448d236a4401e087d0f150dd6b3367b571f0b9a703bd2d38`

Para verificar la compatibilidad del kernel, comprueba el soporte RNDIS después de la instalación.

### Sustituir el kernel estándar de WSL

1. **Apagar WSL**:

```bash
wsl --shutdown
```

2. **Configurar el kernel de WSL**:

**Para Windows 11** (o compilaciones posteriores de Windows 10):
- Abre la aplicación GUI de WSL Settings
- Ve a la configuración y establece la ruta del kernel personalizado

**Para todas las versiones de Windows**:
Edita el archivo `.wslconfig`:

```bash
notepad $env:USERPROFILE\.wslconfig
```

Añade la siguiente configuración bajo `[wsl2]`:

```ini
[wsl2]
kernel=D:\\WSL_Kernel\\bzImage
```

:::note
Sustituye `D:\\WSL_Kernel\\bzImage` por la ruta real a tu archivo de kernel descargado.
:::

3. **Reinicia WSL y verifica**:

```bash
# Restart WSL
wsl

# Check kernel information
uname -a

# Check RNDIS features
zcat /proc/config.gz | grep RNDIS
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png" />
</div>

## Flashear JetPack

La mayoría de los pasos de flasheo son idénticos a Ubuntu nativo. Este ejemplo usa reComputer J4012.

**Paso 1: Descargar JetPack**

Descarga la versión adecuada de JetPack para tu dispositivo desde la [Página de resumen de flasheo de Seeed](https://wiki.seeedstudio.com/es/flash/jetpack_to_selected_product/). Esta página proporciona:
- Imágenes de JetPack para todos los dispositivos Jetson de Seeed
- Instrucciones detalladas para entrar en modo de recuperación forzada para cada dispositivo

:::warning
Al mover archivos de Windows a WSL, ten cuidado con los permisos de archivo.
:::

Mueve y verifica el archivo:

```bash
# Move file from Windows drive to WSL storage
mv /mnt/c/Users/seeed/Downloads/mfi_recomputer-<xxxx>.tar.gz ~

# Remove execute permission
chmod -x mfi_recomputer-<xxxx>.tar.gz

# Verify SHA256 checksum
sha256sum mfi_recomputer-<xxxx>.tar.gz
```

:::note
Sustituye `seeed` por tu nombre de usuario real de Windows en la ruta `/mnt/c/Users/seeed/Downloads/`.
:::

**Paso 2: Entrar en modo de recuperación forzada**

:::tip
Para instrucciones específicas de modo de recuperación del dispositivo (ubicación de pines, combinaciones de botones), consulta la [Página de resumen de flasheo de Seeed](https://wiki.seeedstudio.com/es/flash/jetpack_to_selected_product/) y selecciona el modelo de tu dispositivo.
:::

Pasos generales para la mayoría de los dispositivos:

1. **Apaga por completo** tu dispositivo Jetson
2. **Cortocircuita los pines FEC y GND** usando un jumper o unas pinzas
3. **Conecta el cable de datos USB-C** a tu host Windows
4. **Conecta la alimentación** al dispositivo
5. **Espera 2-3 segundos**, luego retira el jumper

Tu dispositivo entrará en modo de recuperación forzada.

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png" />
</div>

:::note
El ejemplo anterior muestra reComputer J4012. La ubicación de los pines varía según el dispositivo; revisa siempre la documentación específica de tu dispositivo.
:::

**Paso 3: Adjuntar el dispositivo USB a WSL**

Abre **PowerShell** o **Windows Terminal** con privilegios de **Administrator**.

**Lista los dispositivos USB** (en PowerShell):

```powershell
usbipd list
```

:::note
Si ves `usbipd: command not found`, asegúrate de que usbipd-win esté instalado y añadido a tu PATH del sistema. Puede que necesites reiniciar la terminal después de la instalación.
:::

Deberías ver tu dispositivo listado como **APX**, lo que indica que está en modo de recuperación forzada.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list.png" />
</div>

**Vincula el dispositivo** (en PowerShell):

```powershell
usbipd bind -b 1-1 -f
```

:::note
Sustituye `1-1` por tu ID de bus real que se muestra en la salida de `usbipd list`.
:::

Usa de nuevo `usbipd list` para verificar que el STATE ha cambiado a **Shared(forced)**.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list_shared.png" />
</div>

**Adjuntar a WSL** (en PowerShell):

```powershell
usbipd attach -b 1-1 --wsl --auto-attach
```

Deberías ver una salida similar a:

```
usbipd: info: Using WSL distribution 'Ubuntu-22.04' to attach; the device will be available in all WSL 2 distributions.
usbipd: info: Using IP address 172.24.240.1 to reach the host.
usbipd: info: Starting endless attach loop; press Ctrl+C to quit.
WSL Attached
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_attach_apx.png" />
</div>

:::tip
Mantén esta ventana de terminal abierta. Pulsa `Ctrl+C` solo después de que el flasheo haya finalizado.
:::

**Verificar en WSL**:

Inicia WSL en una nueva terminal y comprueba:

```bash
lsusb
```

Deberías ver una salida como:

```
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 0955:7323 NVIDIA Corp. APX
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_rndis.png" />
</div>

El dispositivo se ha conectado correctamente a WSL.

**Paso 4: Flashear el dispositivo**

Ve a tu directorio de JetPack y ejecuta el comando de flasheo:

Elige el método de flasheo adecuado según tu dispositivo y tus requisitos:

**Opción 1: Seeed BSP (Recomendado para dispositivos Seeed)**

Para dispositivos Seeed reComputer, usa el paquete Massflash precompilado:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

:::note
Asegúrate de haber instalado los requisitos previos de flasheo:

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```
:::

**Opción 2: NVIDIA SDK Manager**

Para kits de desarrollo oficiales de NVIDIA o cuando necesites componentes del SDK:

**1. Inicia SDK Manager:**

```bash
sdkmanager
```

**2. Sigue las instrucciones en pantalla** para completar el proceso de flasheo.

:::tip
Para instrucciones más detalladas de SDK Manager en WSL2, consulta la [documentación oficial de NVIDIA](https://docs.nvidia.com/sdk-manager/wsl-systems/index.html).
:::

:::warning
**Limitación conocida**: SDK Manager no puede flashear a dispositivos de almacenamiento NVMe/SSD externos a través de WSL2. Si necesitas flashear a un SSD externo, usa la Opción 3 (Initrd Flash) o un host Ubuntu nativo.
:::

**Opción 3: Initrd Flash (Para kits de desarrollo oficiales de NVIDIA)**

Para kits de desarrollo oficiales de NVIDIA (Jetson Orin Nano Developer Kit, etc.):

Un ejemplo para Jetson Orin Nano Super Developer Kit:

```bash
# Download Jetson Linux
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2

# Download Root Filesystem
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2

# Extract Jetson Linux
tar xpf Jetson_Linux_r36.4.3_aarch64.tbz2

# Extract Root Filesystem
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C ./Linux_for_Tegra/rootfs

# Install prerequisites
sudo ./tools/l4t_flash_prerequisites.sh

# Apply binaries
sudo ./apply_binaries.sh

# Flash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_send_blob.png" />
</div>

:::tip
Sustituye `jetson-orin-nano-devkit` por el objetivo específico de tu dispositivo. Consulta la documentación de NVIDIA para el nombre de objetivo correcto.
:::

Cuando el proceso de flasheo se complete correctamente, verás una salida similar a:

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_success.png" />
</div>

Después de que finalice el flasheo, puedes desconectar el dispositivo USB de WSL:

```powershell
usbipd detach -b 1-1
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_detached.png" />
</div>

## Solución de problemas

### El dispositivo USB no aparece en WSL

- Asegúrate de que usbipd-win sea la versión 4.x o superior
- Verifica que el dispositivo esté en modo de recuperación forzada (debería mostrarse como APX)
- Intenta volver a vincular el dispositivo con la opción `-f` (force)
- **Desactiva temporalmente Windows Defender Firewall** o el software antivirus, ya que pueden bloquear el acceso al dispositivo USB
- Prueba con un puerto USB diferente (preferiblemente USB 3.0)

### El flasheo falla o se agota el tiempo de espera

- Usa un host Ubuntu nativo si los problemas persisten
- Revisa la calidad y la conexión del cable USB (usa el cable original si es posible)
- Asegúrate de que la alimentación al dispositivo Jetson sea adecuada (usa un adaptador de corriente de 5V/4A)
- Cierra cualquier otro software que pueda estar usando el dispositivo USB
- Intenta flashear sin la opción `--auto-attach` y supervisa la conexión manualmente

### Problemas de permisos

- Ejecuta siempre los comandos de usbipd con privilegios de **Administrator**
- Verifica los permisos de archivo al mover archivos de Windows a WSL
- Si obtienes errores de permiso denegado en WSL, prueba: `sudo chmod 666 /dev/bus/usb/001/*`

### Problemas con el kernel de WSL

Si ves errores sobre falta de compatibilidad USB:
- Verifica que el kernel personalizado esté cargado correctamente: `uname -r` debería mostrar una versión diferente del kernel estándar de WSL
- Comprueba la compatibilidad con RNDIS: `zcat /proc/config.gz | grep CONFIG_USB_NET_RNDIS`
- Si los problemas persisten, recompila el kernel siguiendo la [guía oficial](https://github.com/dorssel/usbipd-win/wiki/WSL-support)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
