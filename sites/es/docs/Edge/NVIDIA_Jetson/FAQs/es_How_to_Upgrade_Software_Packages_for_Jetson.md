---
description: Este FAQ explica cómo actualizar el software de Jetson sin reemplazar los controladores de la carrier board de Seeed, y cómo reparar JetPack 5.1.3 o JetPack 6.2 después de una actualización errónea de nvidia-l4t.
title: Actualizar paquetes de software para Jetson
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade_software_packages_for_jetson
last_update:
  date: 10/16/2026
  author: Youjiang/Dayu
createdAt: '2025-02-11'
updatedAt: '2026-10-16'
url: https://wiki.seeedstudio.com/es/upgrade_software_packages_for_jetson/
---

#### ¿Cómo puedo actualizar los paquetes de software si me dijeron que no puedo ejecutar apt upgrade? ¿Habrá riesgos de seguridad si no actualizo el software?

R: No ejecutes `sudo apt upgrade` ni `sudo apt full-upgrade` en una imagen Jetson de Seeed. Una actualización normal de aplicaciones está bien, pero una actualización no supervisada de NVIDIA puede reemplazar el kernel, el device tree y los paquetes de controladores `nvidia-l4t` de Seeed por paquetes estándar de NVIDIA. El dispositivo podría dejar de arrancar o los periféricos de la carrier board podrían dejar de funcionar.

Para los paquetes de aplicaciones que no dependen de `nvidia-l4t`, instala solo el paquete que necesitas:

```bash
sudo apt update
sudo apt-get install <your-package>
```

Para la mayoría del software de código abierto, otra opción segura es descargar el código fuente y compilarlo tú mismo. Una imagen completa de BSP de Seeed o JetPack sigue siendo la forma preferida de actualizar juntos el kernel, el bootloader y los controladores de la carrier board.

## Reparar una actualización errónea de nvidia-l4t

Hay paquetes de reparación disponibles para las dos versiones de JetPack que aún no contienen la protección de apt:

| JetPack | Jetson Linux | Paquete de reparación |
| --- | --- | --- |
| JetPack 5.1.3 | R35.5.0 | [seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBHzK-usznrT72e9lsjdzvnAZf8tB1ohV93_-vjlazshYQ?e=ljS4tL) |
| JetPack 6.2 | R36.4.3 | [seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCTqH9GsRQWSI-PhfPuJeycAR_oaUGvZc7jBTgcMMWS-fc?e=jV1YJF) |

JetPack 7 y firmware posteriores de Seeed ya mantienen los paquetes de kernel y controladores de NVIDIA, por lo que `apt` no puede reemplazarlos por error. No hay paquete de reparación para esas versiones. Si un sistema con JetPack 7 o posterior ya está dañado, vuelve a flashear la imagen correspondiente de Seeed.

:::caution
Ejecuta la reparación en el propio Jetson y usa solo el paquete que coincida con `cat /etc/nv_tegra_release`. El script restaura los paquetes de kernel y controladores de Seeed. No instala el paquete de bootloader a menos que añadas explícitamente `--with-bootloader`.
:::

### JetPack 5.1.3 / L4T R35.5.0

Confirma primero la versión:

```bash
cat /etc/nv_tegra_release
```

La primera línea debe contener `R35 (release), REVISION: 5`. Descarga `seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip`, cópialo al Jetson y ejecuta:

```bash
unzip -o seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip
cd seeed-jetson-linux-r35.5.0-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

Añade `--with-bootloader` solo cuando el propio bootloader deba ser reparado. Después de reiniciar, comprueba los paquetes restaurados:

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-display-kernel
cat /etc/nv_boot_control.conf
dpkg --audit
```

Los cuatro paquetes deberían estar instalados o retenidos, y sus versiones deberían contener `+seeed1`. `dpkg --audit` no debería imprimir nada. El registro de reparación es `/var/log/seeed-linux-bsp-r35.5.0-repair.log`.

### JetPack 6.2 / L4T R36.4.3

Confirma primero la versión:

```bash
cat /etc/nv_tegra_release
```

La salida debe contener `R36` y `REVISION: 4.3`. Descarga `seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip`, cópialo al Jetson y ejecuta:

```bash
unzip -o seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip
cd seeed-jetson-linux-r36.4.3-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

Si el script no puede identificar la carrier board, detente y vuelve a ejecutarlo con el nombre del producto de Seeed:

```bash
sudo ./seeed-linux-bsp-repair.sh --board recomputer-orin-super-j401
```

Sustituye `recomputer-orin-super-j401` por el nombre de la carrier de Seeed o del producto que se está reparando. Usa `--auto` solo cuando el nombre de la placa detectada ya sea correcto y el comando deba ejecutarse sin interacción. Añade `--with-bootloader` solo cuando se requiera la reparación del firmware. El paquete de reparación R36.4.3 no contiene un capsule de bootloader para Orin Super, así que comprueba el módulo y el firmware antes de usar esa opción en hardware Orin Super.

Después de reiniciar, comprueba:

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-kernel-oot-modules nvidia-l4t-display-kernel
uname -r
dpkg --audit
```

Las versiones de los paquetes deberían contener `+seeed1`, y `uname -r` debería informar `5.15.148-tegra`. El registro de reparación es `/var/log/seeed-linux-bsp-r36.4.3-repair.log`, y la copia de seguridad del script es `/opt/nvidia/l4t-packages/seeed-r36.4.3-repair-backup`.


## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
