---
description: J1010 Boot From SD Card
title: J1010 Arranque desde Tarjeta SD
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/J1010_Boot_From_SD_Card
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# J1010 Arranque desde Tarjeta SD

## Primeros Pasos

Necesitamos leer estos dos artículos antes de comenzar. Asegúrate de que el sistema J1010 esté grabado correctamente y que el controlador de la tarjeta SD esté instalado adecuadamente.

- [J1010/J101 Flash Jetpack](https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack/)
- [J101_Enable_SD_Card](https://wiki.seeedstudio.com/es/J101_Enable_SD_Card/)

## Grabando el Sistema de J101 a Tarjeta SD

Primero, necesitamos clonar el script que incluye las herramientas que necesitamos.

```bash
git clone https://github.com/limengdu/bootFromUSB
```

Segundo, necesitamos asegurarnos de que la tarjeta SD esté en formato ext4, lo cual se puede ver visualmente en la herramienta "disk", si no es ext4 necesitamos formatearla y cambiarla al formato ext4.

Haz clic en el área azul y luego haz clic en el área verde para seleccionar "Format Partiton"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>


Haz clic en el área verde para seleccionar "Internal disk for use with Linux systems only (Ext4)"
Completa el nombre que desees en "Volume Name" en el área amarilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

Así podemos encontrar que el formato de la tarjeta SD ha sido cambiado a ext4.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>


Y luego, ve al directorio del script, ejecuta el siguiente comando así

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

Espera un momento, solo hasta que termine automáticamente, si no se reporta ningún error, la grabación está completa

## Configuración de Arranque

Una vez que el controlador ha sido instalado y configurado exitosamente, podemos simplemente verlo a través del comando como "lsblk" o ver el dispositivo en "/dev".

### Cambiar dispositivo de arranque

Se supone que debemos cambiar la configuración en "/boot/extlinux/extlinux.conf".

- Arrancar desde tarjeta SD

    Después de arrancar desde el emmc en la placa base, queremos modificarlo para arrancar desde la tarjeta SD. Necesitamos asegurarnos de que el proceso anterior, incluyendo la grabación del sistema a la tarjeta SD, y los controladores de la tarjeta SD estén instalados correctamente. Modifica los parámetros después de root a la dirección del dispositivo desde el cual estamos arrancando. Cuando hayamos completado nuestros cambios, reinicia el sistema.

    **Antes del reinicio Modifica "/boot/extlinux/extlinux.conf" Después del reinicio ve "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>

    :::note
    Nuestro archivo de configuración después de arrancar el sistema desde la tarjeta SD es "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf" y el archivo de configuración después de arrancar el sistema desde el emmc integrado está en "/boot/extlinux/extlinux.conf". Son los mismos archivos desde los cuales el dispositivo lee la configuración y elige dónde arrancar el sistema después del encendido, y las rutas relativas cambian cuando el sistema ha terminado de arrancar.
    :::

- Arrancar desde emmc de la placa

    Queremos cambiar de vuelta a arrancar desde emmc después de arrancar desde una tarjeta SD o necesitamos cambiar la tarjeta SD por algún propósito. Entonces necesitamos cambiar el dispositivo de vuelta para arrancar desde emmc primero. Deberíamos hacer los siguientes cambios.

    **Antes del reinicio Modifica "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf" Después del reinicio ve "/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>


Finalmente, encontramos que realmente funciona bien.

- Arrancar desde emmc

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- Arrancar desde tarjeta SD

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>


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