---
description: Preguntas frecuentes sobre Jetson
title: Preguntas frecuentes sobre el uso de Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_FAQ
last_update:
  date: 07/14/2026
  author: Seraphina
createdAt: '2025-04-11'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/es/Jetson_FAQ/
---


Este documento contiene todas las preguntas frecuentes relacionadas con los productos de la serie Jetson. Será de gran ayuda si estás teniendo algún problema al usar Jetson.

#### P1: Solución de problemas de instalación

Para más detalles, haz clic [aquí](/es/Troubleshooting_Installation)

#### P2: El espacio restante en la eMMC del reComputer recibido es de solo unos 2GB, ¿cómo resolver el problema de espacio insuficiente?

Para más detalles, haz clic [aquí](/es/solution_of_insufficient_space)

#### P3: ¿Cómo resolver el problema de compatibilidad entre reComputer y la cámara VEYE?

Para más detalles, haz clic [aquí](/es/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### P4: ¿Cómo resolver el problema de compatibilidad entre la cámara IMX477 y la placa carrier A603?

Para más detalles, haz clic [aquí](/es/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### P5: ¿Cómo obtener el registro del sistema de reComputer J30/J40?

Para más detalles, haz clic [aquí](/es/get_the_system_log_of_recomputer_j30_and_j40)

#### P6: Errores comunes durante el flasheo de Jetson.

Para más detalles, haz clic [aquí](/es/usb_timeout_during_flash)

#### P7: No puedo usar el puerto USB-A, el puerto Ethernet o no hay visualización HDMI después de flashear el dispositivo.
**R:** Verifica la integridad de los archivos (por ejemplo, proporcionamos las sumas de verificación SHA256). Para algunas placas carrier (especialmente la serie A60X), asegúrate de que el parche del controlador se haya copiado/aplicado correctamente en el directorio **Linux_for_tegra**. Hay archivos que requieren permisos de **sudo**, y cuando copies directorios, asegúrate de que el parámetro **-r** esté incluido en tu comando.

#### P8: Mi sistema se bloqueó/no puede arrancar/pantalla en negro/perdió controladores de periféricos después de ejecutar los comandos "sudo apt-get update && sudo apt-get upgrade".
**R:** Estos problemas se pueden resumir como **"¿Por qué no puedo actualizar el sistema con apt upgrade en placas carrier personalizadas?"** La respuesta corta es: **No** ejecutes el comando apt upgrade en placas carrier **personalizadas/de terceros**. Además, evita ejecutar cualquier script que incluya comandos apt upgrade o usar herramientas de actualización GUI en Ubuntu. Los paquetes Debian del servidor no tienen en cuenta el diseño específico de nuestras placas personalizadas, y forzar la actualización puede causar incompatibilidades que podrían dejar tu dispositivo inservible. Este proceso solo es compatible con el kit de desarrollo oficial. Para resolver estos problemas, sigue nuestra guía para volver a flashear JetPack.

#### P9: ¿Cómo puedo actualizar los paquetes de software si me dijeron que no puedo ejecutar apt upgrade? ¿Habrá riesgos de seguridad si no actualizo el software?

Para más detalles, haz clic [aquí](/es/upgrade_software_packages_for_jetson)

<!-- #### Q10: How to use the OTA (Over-the-Air) method to upgrade the system version of the Jetson device. 

For details, please click [here](/es/updating_jetpack_with_ota) -->

#### P11: ¿Qué modificaciones hace Seeed al BSP de Jetson de NVIDIA?

Para más detalles, haz clic [aquí](/es/differences_of_l4t_between_seeed_and_nvidia)

#### P12: ¿Cómo habilitar la interfaz SPI en Jetson-nano?
Para más detalles, haz clic [aquí](/es/enable_spi_interface_on_jetsonnano)

#### P13: ¿Por qué a veces, después de completar el proceso de flasheo en Jetson, el sistema no arranca desde el SSD?
Este problema ocurre actualmente al flashear JetPack 5, y NVIDIA lo ha documentado oficialmente. Para la solución, haz clic [aquí.](/es/issue_of_jetpack5_failing_to_boot_from_certain_ssd)

#### P14: ¿Cómo compilar el proyecto de código fuente para el BSP de Jetson de Seeed?
Para más detalles, haz clic [aquí](/es/how_to_build_the_source_code_project_for_seeed_jetson_bsp)

#### P15: ¿Por qué no se puede ejecutar el comando `apt upgrade` en reComputer/reServer?
Los kernels y controladores de **reComputer/reServer** están personalizados. Si se ejecuta el comando `apt upgrade`, algunos paquetes relacionados con el kernel y los controladores pueden ser reemplazados por los recursos oficiales de NVIDIA, lo que podría causar problemas de compatibilidad de software. <mark>Por lo tanto, no ejecutes `apt upgrade` en ninguna plataforma Jetson de terceros.</mark>

Puedes consultar las siguientes instrucciones para bloquear las fuentes APT relevantes. De esta manera, si apt upgrade se ejecuta accidentalmente, el impacto se minimizará:
```bash
sudo apt-mark hold <package-name>

### For example: 
sudo apt-mark hold nvidia-l4t-core
```

#### P16: Si el reComputer/reServer no tiene el módulo de controlador `.ko` requerido, ¿cómo puedo compilar un controlador utilizable?

Para más detalles, haz clic [aquí](/es/how_to_build_the_ko_module_for_seeed_jetson)

#### P17：¿Cómo puedo montar un disco duro externo formateado con exFAT en Jetson (JetPack 6)?

Primero, instala las dependencias:
```
sudo apt install build-essential autoconf automake libtool pkg-config
sudo apt install git libfuse-dev
```

Luego clona y compila el controlador exFAT desde el código fuente:
```
git clone https://github.com/relan/exfat
cd exfat
autoreconf --install
./configure
make
sudo make install
```

A continuación, monta manualmente el disco en un directorio local:
```
lsblk   # Check the device name of your external hard drive

sudo mkdir /media/seeed/tmp-exfat   # Create a mount point
sudo mount.exfat /dev/sda3 /media/seeed/tmp-exfat/
```

Esto monta la unidad externa formateada en exFAT en `/media/seeed/tmp-exfat/` para que pueda accederse normalmente en Jetson.

#### P18：¿Cómo cifrar el disco de Jetson antes de flashear la imagen?

Para más detalles, haz clic [aquí](/es/how_to_encrypt_the_disk_for_jetson)

#### P19：¿Cómo establecer la comunicación entre Jetson y dispositivos EtherCAT?

Para más detalles, haz clic [aquí](/es/how_to_establish_the_ethercat_on_jetson)

#### P20： No modifiqué nada relacionado con el kernel de Jetson, pero durante el arranque Jetson informó un error relacionado con el UUID y luego entró en el terminal de recuperación.

Solución para este problema: haz clic [aquí](/es/deal_the_issue_of_UUID)

#### P21: ¿Cómo usar la cámara IMX219 en dispositivos NVIDIA Jetson?

Para más detalles, haz clic [aquí](/es/how_to_use_camera_imx219)

#### P22: ¿Qué cambios aporta JetPack 7.2 al rendimiento de inferencia de Jetson AGX Orin?

Para más detalles, haz clic [aquí](/es/jetpack72_deep_dive)

#### P23: ¿Cómo restaurar el Wi-Fi Intel AX210/AX200 después de actualizar a JetPack 7.2?

Para más detalles, haz clic [aquí](/es/jetpack72_ax210_ax200_wifi_setup_guide)

## Soporte técnico

Gracias por elegir nuestros productos. Estamos **aquí** para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
