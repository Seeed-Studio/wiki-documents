---
description: usar cámaras Arducam Jetvariety (OV9281) con la carrier board A603 Jetson en JetPack 6.2
title: Usar cámara Arducam OV9281 (Jetvariety) con la carrier board A603 Jetson
keywords:
  - reComputer
  - Arducam
  - OV9281
  - Jetvariety
  - A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /use_arducam_ov9281_camera_with_a603_jetson_carrier_board
last_update:
  date: 07/08/2026
  author: Jonathan van der Maas
createdAt: '2026-08-11'
url: https://wiki.seeedstudio.com/es/use_arducam_ov9281_camera_with_a603_jetson_carrier_board/
updatedAt: '2026-08-11'
---

Las cámaras Arducam Jetvariety admiten oficialmente la carrier board del kit de desarrollo de NVIDIA, no la A603, y el overlay del instalador de Arducam no puede funcionar en la A603. La cámara en sí funciona bien una vez que compilas un pequeño device tree personalizado. Esta página documenta la configuración funcional para la Arducam OV9281 (B0223) en JetPack 6.2 (L4T R36.4.3), los motivos por los que falla el overlay estándar y una trampa que puede desactivar todos los USB de la placa.

Resultado: OV9281 en `/dev/video0`, formatos GREY / Y10 / Y16 a 1280x800, 1280x720 y 640x400, hasta 80 fps, con disparo externo disponible.

## Por qué el overlay propio de Arducam no puede funcionar en la A603

1. El único conector CSI de la A603 es `serial_a` en i2c-2 (`i2c@3180000`). El overlay del kit de desarrollo de Arducam conecta sus nodos de sensor a `serial_b`/`serial_c` bajo un nodo `cam_i2cmux`, un mux que nunca se instancia en esta placa, por lo que los nodos de sensor nunca se sondean. No hay mensaje de error; la cámara simplemente nunca aparece.
2. El controlador Jetvariety responde en la dirección i2c `0x0c`. Verifica con `i2cdetect -y -r 2`.
3. El BSP de la A603 incluye su propio kernel recompilado y reutiliza los nombres de archivo del device tree de NVIDIA, por lo que el árbol que debe modificarse es el de la A603, no el de un kit de desarrollo.

## Primero, seguridad de arranque

:::caution
El instalador de Arducam añade una entrada de arranque (comúnmente etiquetada `JetsonIO`) que empareja su kernel con su device tree de kit de desarrollo. Arrancar esa entrada en la A603 desactiva todos los puertos USB, incluida la red USB gadget y cualquier teclado. El menú de arranque UEFI/extlinux de la A603 no acepta entrada de teclado, así que lo que sea que `DEFAULT` señale en `/boot/extlinux/extlinux.conf` es lo que arranca, siempre. Nunca dejes `DEFAULT` apuntando a una entrada no probada. La recuperación de este estado requiere arrancar en modo RCM el initrd de flasheo desde otra máquina (jumper de recuperación en W7 pines 3 y 4).
:::

Antes de experimentar, haz copia de seguridad del kernel y el DTB originales, y considera instalar un temporizador de systemd que restablezca `DEFAULT` a una entrada conocida como buena unos 180 segundos después de cada arranque, a menos que exista un archivo de marca de conservación:

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT seeed/' /boot/extlinux/extlinux.conf
```

Flujo de trabajo para cualquier experimento de arranque: elimina la marca de conservación, apunta `DEFAULT` a la entrada experimental y reinicia. Si funciona, crea de nuevo la marca de conservación. Si la placa deja de ser accesible, apágala y enciéndela y volverá por sí sola a la entrada conocida como buena.

## La configuración funcional

Entrada de arranque en `/boot/extlinux/extlinux.conf`:

```
LABEL arducam
      MENU LABEL Arducam kernel + A603 sensor-swapped DTB
      LINUX /boot/arducam/Image
      FDT /boot/kernel_a603-arducam.dtb
      APPEND ${cbootargs} root=/dev/nvme0n1p1 rw rootwait rootfstype=ext4 ...
```

- Kernel: el de Arducam, de su paquete `arducam-nvidia-l4t-kernel` (su instalador lo descarga). Incluye el controlador Jetvariety `arducam-csi2`.
- DTB: personalizado, compilado como se describe a continuación. Ten en cuenta que la línea `FDT` en extlinux sí anula el DTB de la partición en esta placa.

### Estrategia de device tree: cambiar el sensor, mantener todo lo demás

Injertar el grafo de cámara de Arducam en el árbol de la A603 falla por desajustes de phandle y cableado. Lo que funciona es lo contrario: mantener el grafo de cámara completo y correcto para la placa de la A603 (canal CSI, cableado VI, puertos y endpoints, phandles, todo construido para el IMX219 que la placa admite de fábrica) y cambiar solo la identidad del nodo del sensor:

1. Descompila el DTB original de la A603: `dtc -I dtb -O dts -o seeed.dts <stock DTB>`
2. Descompila cualquier DTB que contenga el bloque de sensor de Arducam (por ejemplo, desde su overlay) para obtener su nodo `mode0`
3. En `seeed.dts`, dentro de `i2c@3180000`, sustituye el nodo `rbpcv2_imx219_a@10` por un nodo `arducam_a@0c`:
   - `compatible = "arducam,arducam-csi2"`, `reg = <0x0c>`, `sensor_model = "arducam-csi2"`, `use_sensor_mode_id = "true"`
   - conserva sin cambios el `devnode`, `reset-gpios`, `phandle` originales y todo el bloque `ports`; esto mantiene todos los phandles válidos
   - inserta el bloque `mode0` de Arducam con `tegra_sinterface` cambiado a `"serial_a"`
4. Cambia el GPIO hog `cam0-rst` de `output-low` a `output-high` (el árbol original mantiene la cámara en reset)
5. Actualiza las cadenas de ruta de `tegra-camera-platform` y `__symbols__` de `.../rbpcv2_imx219_a@10` a `.../arducam_a@0c`
6. Recompila e instala: `dtc -I dts -O dtb -o /boot/kernel_a603-arducam.dtb a603-arducam.dts`

Hay disponible un script de Python que realiza automáticamente esta transformación en [este repositorio](https://github.com/vdmaas98/a603-arducam).

Firma de éxito en dmesg:

```
arducam-csi2 2-000c: firmware version: 0x10003
arducam-csi2 2-000c: Sensor ID: 0x9281
arducam-csi2 2-000c: sensor arducam-csi2 2-000c registered
```

## Comprueba la cinta flexible antes de depurar software

Si el sensor no responde en i2c, comprueba primero la capa física:

- En el extremo de la cámara, los contactos dorados de la cinta deben mirar en dirección opuesta a la PCB de la cámara, y ambos cierres deben estar completamente y uniformemente cerrados.
- Un diagnóstico concluyente es la prueba de alimentación con extremo libre: inserta la cinta solo en la A603, deja suelto el extremo de la cámara, alimenta la placa y mide con un multímetro los contactos más externos del extremo suelto. Leer 3,3 V demuestra que la placa, el cable y la orientación en el extremo de la placa son correctos, aislando cualquier fallo restante al extremo de la cámara.
- Cable: 22 pines, tipo A (oro en la misma cara en ambos extremos), directo.

## Captura

:::note
La exposición y ganancia predeterminadas del controlador producen fotogramas negros, que se ven exactamente igual que una cámara averiada. Establece los controles en la misma invocación de `v4l2-ctl` que la captura, porque los valores se restablecen cada vez que se abre un nuevo flujo.
:::

```bash
v4l2-ctl -d /dev/video0 --set-fmt-video=width=1280,height=800,pixelformat=GREY \
  --set-ctrl exposure=10000 --set-ctrl analogue_gain=400 \
  --stream-mmap --stream-count=10 --stream-to=/tmp/frames.raw
```

Rangos: `exposure` de 1 a 65523, `analogue_gain` de 100 a 1500. También disponibles: `trigger_mode` (disparo externo), `frame_rate` de 5 a 80, volteo horizontal y vertical.

Aunque el enfoque se probó con la OV9281 B0223, debería aplicarse a otros módulos Jetvariety en la A603, ya que el diseño Jetvariety sitúa la lógica de modos en el controlador integrado en la cámara en lugar de en el device tree.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
