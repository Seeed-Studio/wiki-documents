---
description: Explica por qué falla el flasheo con initrd con mount.nfs access denied cuando el host Ubuntu usa un sistema de archivos raíz ZFS, y cómo solucionarlo en dispositivos Jetson de Seeed.
title: Fallo de flasheo con initrd en host ZFS (mount.nfs access denied)
tags:
  - JetPack
  - Flashing
  - Host PC
keywords:
  - jetson
  - flash
  - ZFS
  - NFS
  - initrd
  - l4t_initrd_flash
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/Jetson_Initrd_Flash_ZFS_nfs_error_01.png
slug: /jetson_initrd_flash_zfs_host_limitation
last_update:
  date: 08/13/2026
  author: haochen
createdAt: '2026-08-12'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/es/jetson_initrd_flash_zfs_host_limitation/
---

# Fallo de flasheo con initrd en host ZFS (mount.nfs access denied)

## Introducción

Cuando flasheas un dispositivo Jetson de Seeed con el flujo de trabajo **initrd** de NVIDIA (`l4t_initrd_flash.sh` con `--network usb0`), el **PC host** con Ubuntu comparte temporalmente archivos de flasheo con el Jetson mediante **NFS** (Network File System). Si tu host se instaló con un **sistema de archivos raíz ZFS** (opción del instalador de Ubuntu *Erase disk and use ZFS*), el flasheo puede fallar con:

```text
mount.nfs: access denied by server while mounting [fc00:1:1:0::1]:/path/to/mfi_xxx/rootfs
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
```

Esto **no** es un defecto de tu carrier board de Seeed ni del módulo Jetson. Es una interacción conocida entre **ZFS** y la exportación NFS temporal predeterminada de NVIDIA usada durante el flasheo con initrd.

:::info Productos aplicables
Cualquier producto Jetson de Seeed flasheado con **`l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0`** (u otro flasheo similar con initrd + red), incluidos, entre otros:

- reComputer Classic / Mini / Super (serie J401)
- reComputer Industrial / reServer J401
- reComputer Robotics J401 / J501 / J501 Mini
- reServer J501

No es **específico** de un único SKU. La causa raíz es el **sistema de archivos del host**, no el dispositivo de destino.
:::

## ¿Qué es NFS en este contexto?

Durante el flasheo con initrd:

1. Extraes el paquete **mfi** de Seeed en el host Ubuntu.
2. El Jetson arranca una pequeña imagen **initrd** por USB.
3. El host **exporta** carpetas como `rootfs` y `tools/kernel_flash/images` mediante NFS.
4. El Jetson **monta** esas carpetas y escribe la imagen del sistema.

Aquí NFS es solo un **mecanismo de transferencia host ↔ Jetson** durante el flasheo. No está relacionado con las funciones NFS de la carrier board.

## Por qué fallan los hosts con ZFS

El script de NVIDIA (`tools/kernel_flash/l4t_network_flash.func`) usa **`exportfs -o`** para crear exportaciones NFS **temporales, en memoria**.

En **ext4** (instalación predeterminada de Ubuntu), esto suele funcionar.

En **ZFS**, el servidor NFS de Linux no puede asignar automáticamente un **`fsid`** estable para el dataset. La exportación puede parecer correcta en el host, pero el Jetson recibe **access denied** al montar.

Ubuntu ofrece ZFS como opción de raíz desde la 19.10, por lo que esto puede afectar a cualquier usuario que eligiera ZFS durante la instalación.

## Solución recomendada (la más sencilla)

**Copia todo el directorio mfi a un sistema de archivos ext4** y ejecuta allí el comando de flasheo.

```bash
# Example: copy mfi folder to an ext4 mount (adjust paths)
cp -a /path/on/zfs/mfi_recomputer-orin-super-j401 /mnt/ext4-flash/
cd /mnt/ext4-flash/mfi_recomputer-orin-super-j401

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Consejos:

- Usa una partición ext4 dedicada, una unidad USB externa formateada como ext4 o una imagen de loopback ext4.
- Asegúrate de tener suficiente espacio libre para todo el paquete mfi extraído.
- Instala los prerrequisitos de flasheo en el host (`nfs-kernel-server`, `sshpass`, etc.) como se indica en la guía de Introducción de tu producto.

## Solución avanzada (mantenerse en ZFS)

Si debes flashear desde una ruta en ZFS, configura exportaciones **persistentes** en `/etc/exports` con valores **`fsid=`** explícitos y asegúrate de que los permisos sean correctos. Puede que también necesites parchear `enable_nfs_for_folder()` en `l4t_network_flash.func` para que el script use `/etc/exports` + `exportfs -ra` en lugar de `exportfs -o`.

Ejemplo de líneas de exportación (ajusta las rutas y la red IPv6 para que coincidan con tu directorio mfi):

```bash
/path/to/mfi_xxx/rootfs fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=1)
/path/to/mfi_xxx/tools/kernel_flash/images fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=2)
```

Luego:

```bash
sudo chmod 755 /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo chown root:root /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo systemctl restart nfs-kernel-server
sudo exportfs -rav
```

Los detalles completos y un parche de ejemplo están en [wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148).

## Verifica el sistema de archivos de tu host

```bash
df -T /
findmnt -no FSTYPE /
```

Si la salida muestra `zfs`, usa la solución con ext4 anterior antes de flashear.

## Recursos

- [Seeed wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148)
- [Foros de NVIDIA: rootfs does not support NFS export](https://forums.developer.nvidia.com/t/rootfs-does-not-support-nfs-export/248850)
- [Foros de NVIDIA: requires fsid= for NFS export](https://forums.developer.nvidia.com/t/requires-fsid-for-nfs-export/338708)
- [Flashear BSP con Jetpack al Jetson seleccionado](https://wiki.seeedstudio.com/es/flash/jetpack_to_selected_product/)
- [Guía de inicio rápido de reServer J501](https://wiki.seeedstudio.com/es/reserver_j501_getting_started/)
- [Flashear JetPack con WSL2](https://wiki.seeedstudio.com/es/ai_robotics_flash_jetpack_with_wsl2/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
