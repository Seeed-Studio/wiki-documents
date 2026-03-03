---
description: Resolver el problema de JetPack5 que falla al arrancar desde ciertos SSDs
title: Resolver el problema de JetPack5 que falla al arrancar desde ciertos SSDs
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /es/issue_of_jetpack5_failing_to_boot_from_certain_ssd
last_update:
  date: 07/30/2025
  author: Dayu
---

**Este wiki proporciona una introducción breve a los componentes de JetPack, ayudándote a entender rápidamente la relación entre JetPack y Jetson, y respondiendo algunas de las preguntas más frecuentes.**

## 1. Problema

Si JetPack 5 se flashea al SSD de Jetson, todavía existe cierta probabilidad de que el sistema pueda fallar al arrancar incluso si el proceso de flasheo se completa exitosamente. El siguiente error puede ocurrir durante el arranque:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/other/jetpack_boot_failure.jpg"/></div>


Este problema también ha sido documentado en los foros oficiales de NVIDIA. Puede ser causado por incompatibilidad del sistema de archivos o borrado incompleto durante el proceso de flasheo, lo que lleva a fallas de arranque.
Hasta ahora, **no se han observado problemas similares al flashear y usar JetPack 6 en dispositivos Jetson.**


## 2. Solución
**Aquí se proporcionan dos soluciones para tu referencia. Puedes elegir basándote en tu situación específica:**

###  Opción A

Primero, retira el SSD que falla al arrancar correctamente del dispositivo Jetson, y conéctalo a tu PC usando una carcasa para SSD (cualquier carcasa compatible similar a la mostrada en la imagen a continuación). Procede con el formateo de la unidad.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/Jetson/nvme-faslhing.jpg"/></div>


Luego, ingresa el siguiente comando en la terminal para localizar el SSD montado en la PC, que puede llamarse `sda`, `sdb` etc.:
```bash
lsblk
```

Si no estás seguro de qué nombre corresponde al SSD que insertaste, puedes verificar el contenido del directorio montado:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/ssd-mount.jpg
"/></div>

Tomando el directorio montado en la imagen como ejemplo, verifica si hay un **árbol de dispositivos específico de Jetson**:
```bash
ls /your_path/boot
# Por ejemplo: ls /media/darklee/bc5769eb-36d6-4c42-86d1-565554112264/boot
```

Si es el SSD del Jetson, verás resultados similares a la siguiente imagen:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device-tree-example.png
"/></div>

**Puedes continuar verificando el contenido de otros archivos en el directorio montado del SSD para confirmar además que pertenece al Jetson.**

:::danger
Por favor verifica dos veces para asegurar la precisión antes de formatear el SSD del Jetson. Si el SSD contiene datos importantes, asegúrate de hacer una copia de seguridad. Asegúrate de saber lo que estás haciendo.
:::

Una vez que hayas confirmado que es el SSD del Jetson y completado cualquier copia de seguridad necesaria, procede con un formateo completo del SSD.
`bs=100M`, `count=800` formatea los primeros **80GB** de espacio. **Si tu SSD tiene mayor capacidad, puedes aumentar el espacio formateado en consecuencia.**
```bash
sudo wipefs -a /dev/sda
sudo dd if=/dev/zero of=/dev/sda bs=100M count=800
```
Después de que el formateo esté completo, reinstala el SSD en el Jetson. Si el SSD ha sido completamente borrado, flashear JetPack 5 debería teóricamente prevenir cualquier falla de arranque.

Consulta este [wiki](https://wiki.seeedstudio.com/es/flash/jetpack_to_selected_product/) para instrucciones sobre flashear el Jetson.


###  Opción B


Consulta este [wiki](/es/how_to_build_the_source_code_project_for_seeed_jetson_bsp) para preparar el proyecto de código fuente para flashear.

Al ejecutar `./tools/kernel_flash/l4t_initrd_flash.sh` con el parámetro `--erase-all`, la unidad de estado sólido será completamente borrada durante el proceso de flasheo.


## Recursos

- [Código fuente del L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>