---
description: Esta es una FAQ sobre el uso de OTA o actualizaciones incrementales que pueden llevar a inestabilidad del sistema y riesgos de seguridad, por lo que se recomienda realizar actualizaciones completas de ROM para mantener la seguridad y estabilidad del sistema, evitando actualizaciones parciales.
title: Actualizar Paquetes de Software para Jetson
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/upgrade_software_packages_for_jetson
last_update:
  date: 2/11/2025
  author: Youjiang
---

#### ¿Cómo puedo actualizar paquetes de software si me dijiste que no puedo ejecutar apt upgrade? ¿Habrá riesgos de seguridad si no actualizo el software?

R: Primero, es importante entender que las **actualizaciones OTA (Over the Air)/incrementales/parciales** pueden potencialmente dañar tu SO, ya que permiten a los usuarios actualizar solo un subconjunto de paquetes. Este enfoque puede llevar a desajustes de dependencias, inestabilidad del sistema y parches de seguridad perdidos, aumentando en última instancia el riesgo de fallas de software o vulnerabilidades. Además, gestionar actualizaciones parciales a menudo requiere intervención manual, lo cual puede ser propenso a errores. Por el contrario, las **actualizaciones completas de ROM/completas** aseguran que todos los paquetes y dependencias se actualicen juntos, manteniendo la compatibilidad y estabilidad del sistema. Al aplicar parches de seguridad y correcciones de errores en todo el sistema, las actualizaciones completas ayudan a mantener el sistema seguro y consistente, reduciendo la probabilidad de conflictos. Aunque las actualizaciones completas pueden requerir más tiempo, generalmente se consideran más seguras y confiables a largo plazo. Para nuestros dispositivos Jetson, lanzamos JetPacks después de que NVIDIA lance los suyos (lo mismo aplica para lanzamientos de controladores y ensamblar tu propio JetPack), lo cual asegura un sistema más estable y seguro comparado con actualizar usando apt. Si te preocupa el software desactualizado y quieres actualizar paquetes específicos, aquí tienes algunas opciones:

1. Si estás seguro de que tu paquete de software no depende de paquetes del sistema, ejecuta "sudo apt-get install `<Tu_Paquete>`" para actualizar el paquete.
2. Para la mayoría del software de código abierto, descarga el archivo fuente y compílalo tú mismo.
3. Espera el nuevo lanzamiento de JetPack.


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