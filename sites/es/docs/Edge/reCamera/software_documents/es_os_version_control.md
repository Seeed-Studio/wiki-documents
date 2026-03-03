---
description: Control de versiones como actualización o reversión
title: Control de versiones del SO
keywords:
  - Edge
  - reCamera
  - recamera
  - Operating system
  - version upgrade
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /es/recamera_os_version_control
sidebar_position: 1
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---

# Guía de Actualización/Mejora del SO con Web

Conecta la recamera a tu computadora usando el cable tipo-c, y ve a `http://192.168.42.1/#/system` en el navegador de tu computadora, o reemplaza la dirección IP si estás visitando el dispositivo a través de la red. Antes de actualizar, asegúrate de que reCamera tenga **acceso a internet** verificando `ip_address/#/network`.

Haz clic en Configuración del `Sistema`, y si se ha lanzado un nuevo firmware, haz clic en `Aplicar` para actualizar/mejorar el sistema del dispositivo. El texto del botón sería "Verificar" si no hay nuevo firmware detectado automáticamente.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

Espera a que la barra de progreso se complete.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

Haz clic en `Reiniciar` para completar la actualización/mejora del sistema. **Actualiza el navegador** alrededor de 30 segundos para reconectarte al dispositivo.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

El sistema verificará automáticamente si hay una nueva versión de firmware que se pueda actualizar/mejorar.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## Gestión de versiones del SO por comando

### Gestión del dispositivo por OTA

#### Actualizar/Mejorar a la última versión OTA

Puedes consultar la última versión del [SO de reCamera aquí.](https://github.com/Seeed-Studio/reCamera-OS)

Actualizar/mejorar manualmente el último firmware OTA:

```bash
#Upgrade to the latest firmware version
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

sudo /mnt/system/upgrade.sh start
```

o

#### Actualizar/Actualizar o revertir a cualquier versión OTA específica

Si tienes una versión específica que te gustaría desplegar, puedes usar el comando a continuación.

```bash
#E.g. install 0.1.4 as an example
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

sudo /mnt/system/upgrade.sh start
```

Si estás desarrollando un SO y tienes tu propia rama en github, también puedes actualizar/mejorar la versión del sistema con el enlace de tu rama.

```bash
sudo /mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

sudo /mnt/system/upgrade.sh start
```

#### Para la versión de SO 0.1.3 e inferior

Si deseas realizar OTA con `upgrade.sh` pero tu versión es **0.1.3 e inferior**, sigue los siguientes pasos:

1. Conecta el dispositivo con la computadora mediante cable USB tipo C, luego visita **192.168.42.1/#/terminal**. Encuentra el script upgrade.sh en la carpeta

```bash
cd /mnt/system
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/find_upgrade_script.png" /></div>

2. Cambiar los permisos de este script

```bash
sudo rootfs_rw on
sudo chmod +x upgrade.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_file_permission.png" /></div>

3. Elimina el archivo `upgrade.sh` antiguo y verifica si se eliminó correctamente.

```bash
sudo rm upgrade.sh
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/remove_script.png" /></div>

4. Ve a [Github](https://github.com/Seeed-Studio/reCamera-OS/blob/sg200x-reCamera/external/ramdisk/rootfs/overlay/cv181x_musl_riscv64/system/upgrade.sh) y descarga el último script `upgrade.sh`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/download_sh_github.png" /></div>

5. Cambiar permisos de carpeta

```bash
sudo chmod 777 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_folder_permission.png" /></div>

6. Abre la terminal de tu escritorio/pc, luego copia el script descargado a reCamera bajo la misma carpeta.

```bash
sudo scp your_folder_address/upgrade.sh recamera@192.168.42.1:/mnt/system/
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/scp_file.png" /></div>

7. Regresa a la página web para verificar si el nuevo `upgrade.sh` está presente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/new_script.png" /></div>

8. Cambia de vuelta los permisos de la carpeta por seguridad

```bash
sudo chmod 755 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/chang_back_permission.png" /></div>

9. Ahora puedes probar el [comando OTA](#device-management-by-ota) para realizar cualquier control de versión.

### Gestión de dispositivos mediante paquete local

También puedes actualizar/mejorar el firmware manualmente usando el paquete ota local. Los firmwares ota se pueden [descargar aquí](https://github.com/Seeed-Studio/reCamera-OS/releases/). Usa herramientas como scp para transferir los archivos a reCamera.

```bash
sudo scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address:~/
```

Luego usa el bash para desplegar.

```bash
sudo /mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```

:::note
Si no tienes suficientes permisos para volcar archivos en recamera, puedes cambiar los archivos del sistema para que sean legibles o escribibles escribiendo `rootfs_rw on/off`.
:::

### Restaurar manualmente la configuración de fábrica

Este comando puede restaurar reCamera a la configuración de fábrica. Si usas esto, todos tus datos de usuario serán eliminados, como el flujo de Node-RED y el almacenamiento local.

```bash
sudo /mnt/system/upgrade.sh recovery
```

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
