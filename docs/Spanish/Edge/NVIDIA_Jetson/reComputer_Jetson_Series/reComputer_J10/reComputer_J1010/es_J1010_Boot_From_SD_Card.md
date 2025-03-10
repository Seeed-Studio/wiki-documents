---
description: Arranque de la J1010 desde una tarjeta SD
title: Arranque de la J1010 desde una tarjeta SD
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/J1010_Boot_From_SD_Card
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Arrancar la J1010 desde una tarjeta SD

## Primero pasos

Necesitamos leer estos dos artículos antes de comenzar. Asegúrate de que el sistema J1010 esté grabado correctamente y que el controlador de la tarjeta SD esté instalado correctamente.

- [Flashear Jetpack en la J1010/J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)
- [J101_habilitar_tarjeta_SD](https://wiki.seeedstudio.com/J101_Enable_SD_Card/)

## Sistema de flasheo de la J101 a tarjeta SD

Primero, necesitamos clonar el script e incluir las herramientas que necesitamos.

```bash
git clone https://github.com/limengdu/bootFromUSB
```

En segundo lugar, debemos asegurarnos de que la tarjeta SD esté en formato ext4, lo cual se puede ver visualmente en la herramienta "disco", si no es ext4 debemos formatearla y cambiarla al formato ext4.

Haz click en el área azul y luego haz click en el área verde para seleccionar "Format Partition".

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>


Haz click en el área verde para seleccionar "Internal disk for use with Linux Systems only (Ext4)"
Complete el nombre que desees en "Volume name" en el área amarilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

Entonces podemos encontrar que el formato de la tarjeta SD se ha cambiado a ext4.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>


Y luego, ve al directorio del script, ejecuta el siguiente comando:

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

Espera un momento, solo hasta que finalice automáticamente, si no se informa ningún error, el flasheado finalizó

## Configuración de arranque

Una vez que el controlador se haya instalado y configurado correctamente, simplemente podemos verlo mediante el comando "lsblk" o ver el dispositivo en "/dev".

### Cambiar dispositivo de arranque

Se supone que debemos cambiar la configuración en "/boot/extlinux/extlinux.conf".

- Arrancar desde la tarjeta SD

    Después de iniciar desde el emmc de la Carrier Board, queremos modificarlo para que inicie desde la tarjeta SD. Necesitamos asegurarnos de que el proceso anterior, incluida la grabación del sistema en la tarjeta SD, y los controladores de la tarjeta SD estén instalados correctamente. Modifica los parámetros después de root a la dirección del dispositivo desde el que arrancamos. Cuando hayamos completado nuestros cambios, reinicia el sistema.

    **Antes de arrancar modifica "/boot/extlinux/extlinux.conf" Después de reiniciar leer "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>


    ¡¡¡Nota!!!
        Nuestro archivo de configuración después de iniciar el sistema desde la tarjeta SD es "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" y el archivo de configuración después de iniciar el sistema desde el emmc integrado está en "/boot/extlinux/extlinux.conf". Son los mismos archivos desde los cuales el dispositivo lee la configuración y elige dónde iniciar el sistema después del encendido, y las rutas relativas cambian cuando el sistema termina de iniciarse.

- Arrancar desde el emmc de la placa

    Si queremos volver a iniciar desde el emmc después de iniciar desde una tarjeta SD o necesitamos cambiar la tarjeta SD por algún motivo. Debemos cambiar el dispositivo para que arranque desde el emmc. Deberíamos hacer los siguientes cambios.

    **Antes de reiniciar modifica "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" Tras reiniciar revisa "/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>


Finalmente, deberías ver que todo funciona correctamente

- Arranque desde el emmc

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- Arranque desde la tarjeta SD

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>


## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
