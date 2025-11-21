---
description: Jetson-FAQ
title: Preguntas Frecuentes sobre el Uso de Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
---


Este documento contiene todas las preguntas frecuentes relacionadas con los productos de la serie Jetson. Esto será muy útil si tienes problemas al usar el Jetson.

#### P1: Solución de Problemas de Instalación

Para más detalles, haz clic [aquí](/es/Troubleshooting_Installation)

#### P2: El espacio restante en la eMMC del reComputer recibido es solo de aproximadamente 2GB, ¿cómo resolver el problema de espacio insuficiente?

Para más detalles, haz clic [aquí](/es/solution_of_insufficient_space)

#### P3: ¿Cómo resolver el problema de compatibilidad entre reComputer y la cámara VEYE?

Para más detalles, haz clic [aquí](/es/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### P4: ¿Cómo resolver el problema de compatibilidad entre la cámara IMX477 y la placa portadora A603?

Para más detalles, haz clic [aquí](/es/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### P5: ¿Cómo obtener el registro del sistema del reComputer J30/J40?

Para más detalles, haz clic [aquí](/es/get_the_system_log_of_recomputer_j30_and_j40)

#### P6: Problema de tiempo de espera durante el flasheo de Jetpack.

Para más detalles, haz clic [aquí](/es/usb_timeout_during_flash)

#### P7: No puedo usar el puerto USB-A, puerto Ethernet o no hay pantalla HDMI después de flashear el dispositivo.
**R:** Por favor verifica la integridad del archivo (por ejemplo, proporcionamos las sumas de verificación SHA256), para algunas placas portadoras (especialmente la serie A60X), asegúrate de que el parche del controlador se haya copiado/aplicado exitosamente al directorio **Linux_for_tegra**. Hay archivos que requieren permisos **sudo**, y cuando copies directorios, asegúrate de que el parámetro **-r** esté incluido en tu comando.

#### P8: Mi sistema se bloqueó/no puede arrancar/pantalla negra/perdió controladores periféricos después de ejecutar los comandos "sudo apt-get update && sudo apt-get upgrade".
**R:** Estos problemas se pueden resumir como **"¿Por qué no puedo actualizar el sistema con apt upgrade en placas portadoras personalizadas?"** La respuesta corta es: **No** ejecutes el comando apt upgrade en placas portadoras **personalizadas/de terceros**. Además, evita ejecutar cualquier script que incluya comandos apt upgrade o usar herramientas de actualización GUI en Ubuntu. Los paquetes Debian del servidor no tienen en cuenta el diseño específico de nuestras placas personalizadas, y forzar la actualización puede causar incompatibilidades que pueden dañar tu dispositivo. Este proceso solo es compatible con el devkit oficial. Para resolver estos problemas, sigue nuestra guía para volver a flashear el JetPack.

#### P9: ¿Cómo puedo actualizar paquetes de software si me dijiste que no puedo ejecutar apt upgrade? ¿Habrá riesgos de seguridad si no actualizo el software?

Para más detalles, haz clic [aquí](/es/upgrade_software_packages_for_jetson)

<!-- #### P10: Cómo usar el método OTA (Over-the-Air) para actualizar la versión del sistema del dispositivo Jetson. 

Para más detalles, haz clic [aquí](/es/updating_jetpack_with_ota) -->

#### P11: Qué modificaciones hace Seeed al BSP de Jetson de NVIDIA.

Para más detalles, haz clic [aquí](/es/differences_of_l4t_between_seeed_and_nvidia)

#### P12: ¿Cómo habilitar la interfaz SPI en Jetson-nano?
Para más detalles, haz clic [aquí](/es/enable_spi_interface_on_jetsonnano)

#### P13: ¿Por qué a veces después de completar el proceso de flasheo en Jetson, el sistema no logra arrancar desde el SSD?
Este problema ocurre actualmente al flashear JetPack 5, y NVIDIA lo ha documentado oficialmente. Para la solución, haz clic [aquí.](/es/issue_of_jetpack5_failing_to_boot_from_certain_ssd)

#### P14: ¿Cómo compilar el proyecto de código fuente para el BSP de Jetson de Seeed?
Para más detalles, haz clic [aquí](/es/how_to_build_the_source_code_project_for_seeed_jetson_bsp)

#### P15: ¿Por qué no se puede ejecutar el comando `apt upgrade` en reComputer/reServer?
Los kernels y controladores de **reComputer/reServer** están personalizados. Si se ejecuta el comando `apt upgrade`, algunos paquetes relacionados con el kernel y controladores pueden ser reemplazados con recursos oficiales de NVIDIA, lo que podría causar problemas de compatibilidad de software. <mark>Por lo tanto, no ejecutes `apt upgrade` en ninguna plataforma Jetson de terceros.</mark>

Puedes consultar las siguientes instrucciones para bloquear las fuentes APT relevantes. De esta manera, si apt upgrade se ejecuta accidentalmente, el impacto será minimizado:
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

Esto monta la unidad externa formateada con exFAT en `/media/seeed/tmp-exfat/` para que pueda ser accedida normalmente en el Jetson.

#### P18：¿Cómo cifrar el disco de Jetson antes de flashear la imagen?

Para más detalles, haz clic [aquí](/es/how_to_encrypt_the_disk_for_jetson)

#### P18：¿Cómo establecer comunicación entre Jetson y dispositivos EtherCAT?

Para más detalles, haz clic [aquí](/es/how_to_establish_the_ethercat_on_jetson)


## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos **aquí** para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

