---
description: Actualizar eeprom
title: Actualizar EEPROM para Compute Module 4
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Raspberry_pi_CM4_update_eeprom
last_update:
  date: 2/15/2023
  author: Peter Pan
---
<!-- ---
name: Actualizar eeprom
category: Software
bzurl: 
wikiurl: 
sku: 
--- -->

# Qué es el Compute Module 4

El Raspberry Pi Compute Module 4 (CM4) aprovecha el poder de cómputo del popular Raspberry Pi 4 Model B, con cambios dramáticos de rendimiento comparado con su predecesor: núcleos de CPU más rápidos, mejor multimedia, más capacidades de interfaz. Y por primera vez, esta versión ofrece múltiples opciones de densidad de RAM y opciones de conectividad inalámbrica.

En términos de dimensiones externas, esta versión adopta un estándar mecánico completamente nuevo. La huella general del módulo en su placa portadora se reduce, resultando en un factor de forma más pequeño y compacto adecuado para integración en productos.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/102991421_front-05_2_1.png" alt="pir" width={650} height="auto" /></p>

:::note
El poder del Raspberry Pi 4 en un factor de forma compacto para aplicaciones profundamente embebidas. El Raspberry Pi Compute Module 4 incorpora un procesador ARM Cortex-A72 de cuatro núcleos, salida de video dual, y una amplia selección de otras interfaces. Disponible en 32 variantes, con un rango de opciones de RAM y Flash eMMC, y con o sin conectividad inalámbrica. -- [Raspbarry Pi CM4](https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000)
:::

## Productos Compute Module 4 de Seeed Studio

| reTerminal  | Edgebox-RPI-100  |EdgeLogix-RPI-1000| reRouter| Placa Portadora de NICs Dual Gigabit Ethernet |
|---|---|---|---| --- |
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a> |  <a href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first_3.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/EdgeLogix-RPI-1000-CM4108032-p-5488.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991734-102110773-edgelogix--rpi-1000-firstone_1.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

## Cómo actualizar la EEPROM del CM4

### Prerrequisitos

**Hardware Requerido:**

- Computadora Host Basada en Linux (puede ser una de las siguientes):
  - Raspberry Pi 4B con Raspberry Pi OS instalado
  - PC con la última versión de Ubuntu OS instalada
- Cable USB Tipo-C

**Hardware Aplicable de Seeed Studio:**

| reTerminal | reRouter | Placa Portadora de NICs Ethernet Dual Gigabit |
|---|---|---|
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a>  | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

:::note
Este proceso requiere poner el almacenamiento eMMC del CM4 en modo 'almacenamiento masivo USB', que actualmente solo es aplicable con reRouter y reTerminal. Si tienes Edgebox-RPI-200 o EdgeLogix-RPI-1000 necesitarás tener una placa de desarrollo CM4 que pueda poner el almacenamiento eMMC del CM4 en modo de almacenamiento USB, por ejemplo [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
:::

### Poner el Almacenamiento eMMC del CM4 en Modo de Almacenamiento Masivo USB

**Para reTerminal**

- **Paso 1:** Abre la carcasa y retira el disipador de calor del reTerminal para acceder al interruptor de selección de arranque. Por favor sigue los pasos de la [página Wiki de Introducción a reTerminal](/es/reTerminal) hasta que hayas cambiado el interruptor de modo de arranque.

**Para reRouter**

- **Paso 1:** Abre la carcasa del reRouter retirando los 4 tornillos inferiores y la cubierta inferior como se muestra a continuación:
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/bottom_screw.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 2:** Desliza hacia abajo la placa del reRouter desde la carcasa y sácala

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/slide_pcb.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 3:** Localiza la interfaz de 3 pines y cortocircuita los pines GND y BOOT.

:::note
**Dual Gigabit Ethernet NICs Carrier Board** es la misma PCB que el reRouter que solo necesita hacer el **Paso 3** para seleccionar el modo de arranque.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

### Configuración de Software y Actualización del Firmware EEPROM

**En tu PC o Raspberry Pi 4B (Herramienta de Flash)**

:::note
Para actualizar la EEPROM para raspberry pi solo es compatible con sistema operativo basado en Linux. Los siguientes pasos solo se han probado en **PC con Ubuntu 22.04** y **Raspberry Pi 4B (Herramienta de Flash) con Raspberry Pi OS (64-bit)**
:::

- **Paso 1:** Instala el paquete de software del sistema requerido, por favor abre la aplicación **`Terminal`** y escribe el siguiente comando:

```bash

sudo apt-get update

sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Paso 2:** Clona el repositorio de la herramienta **`usbboot`**

```bash
cd ~/

git clone --depth=1 https://github.com/raspberrypi/usbboot

cd usbboot
```

- **Paso 3:** Construir la herramienta **`usbboot`**

```bash

make
```

- **Paso 4:** Actualizar la EEPROM

:::note
El repositorio de github **`usbboot`** debería tener el firmware del cargador de arranque EEPROM más reciente actualizado, por lo que el siguiente paso debería actualizarte al firmware del cargador de arranque EEPROM más reciente
:::

```bash

cd recovery

./update-pieeprom.sh
```

Deberías ver un mensaje similar al que se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

**Opcional:** Si quieres usar la versión específica del firmware del bootloader, puedes visitar la carpeta firmware del repositorio [rpi-eeprom](https://github.com/raspberrypi/rpi-eeprom/tree/master/firmware/) para seleccionar y descargar el archivo bin del firmware para reemplazar el archivo **`pieeprom.original.bin`**. Por ejemplo:

:::note
Este paso opcional reemplazará el archivo **`pieeprom.original.bin`** con la última compilación `stable` **`pieeprom-2023-01-11.bin`** al momento de escribir esta wiki.
:::

```bash

cd ~/usbboot/recovery

rm -f pieeprom.original.bin

curl -L -o pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin

./update-pieeprom.sh
```

Deberías ver un mensaje similar al que se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 5:** Conecta el USB Type-C al Dispositivo CM4(**`reTerminal`** \ **`reRouter`** \ **`Dual Gigabit Ethernet NICs Carrier Board`**) y al Dispositivo **`PC Host/Raspberry Pi 4B(Herramienta de Flash)`**, donde el **Dispositivo CM4** debe ponerse en el **modo de almacenamiento masivo USB**.

- **Paso 6:** Para aplicar y actualizar el firmware EEPROM

```bash

cd ~/usbboot

./rpiboot -d recovery

```

Deberías ver un mensaje similar al que se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

En este punto tu **`Dispositivo CM4`** debería tener la nueva configuración de orden de arranque y el firmware EEPROM actualizado.

### Cambiar Orden de Arranque y Actualizar EEPROM

:::note
Deberías haber seguido el paso de configuración anterior hasta el **`Paso 3`**
:::

- **Paso 1:** Edita el `boot.conf`

```bash
cd ~/usbboot/recovery

nano boot.conf
```

el archivo debería verse como lo siguiente:

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
 
# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf25641
 
# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

donde la línea **`BOOT_ORDER=0xf25641`** es la configuración del orden de arranque, donde la configuración actual del orden de arranque es `SD CARD/eMMC > USB-MSD > NVME > BCM-USB-MSD > NETWORK > RESTART`. Si quieres cambiar el orden de arranque a `NVME > USB-MSD > BCM-USB-MSD >  SD CARD/eMMC > NETWORK > RESTART` la configuración del orden de arranque debería ser **`BOOT_ORDER=0xf21564`**.

Por lo tanto, la nueva configuración del orden de arranque en el `boot.conf` debería verse como sigue:

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
 
# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf21564
 
# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

Guarda y sal del editor `nano`.

La siguiente es la tabla que define la propiedad de diferentes configuraciones de modos de arranque para BOOT_ORDER como referencia.

| Valor | Modo  | Descripción |
|---|---|---|
|  0x0 | SD CARD DETECT | Probar SD luego esperar a que la detección de tarjeta indique que la tarjeta ha cambiado - obsoleto ahora que 0xf (RESTART) está disponible.  |
|  0x1 | SD CARD/eMMC |  Tarjeta SD (o eMMC en Compute Module 4).  |
|  0x2 | NETWORK  | Arranque de red  |
|  0x3 | RPIBOOT | RPIBOOT  |
|  0x4 | USB-MSD  | Arranque de almacenamiento masivo USB   |
|  0x5 | BCM-USB-MSD  |  Arranque USB 2.0 desde conector USB Type C (CM4: conector USB tipo A en placa CM4IO).  |
|  0x6 | NVME | Solo CM4: arranque desde un SSD NVMe conectado a la interfaz PCIe.   |
|  0x7 | HTTP | Arranque HTTP por ethernet.  |
|  0xe | STOP | Detener y mostrar patrón de error. Se requiere un ciclo de energía para salir de este estado. |
|  0xf | RESTART|  Reiniciar desde el primer modo de arranque en el campo BOOT_ORDER, es decir, bucle |

> Referencia: [Tabla de Propiedades BOOT_ORDER](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#BOOT_ORDER)

- **Paso 2:** Obtener el firmware más reciente

```bash

wget -O pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin
```

- **Paso 3:** Actualizar el firmware EEPROM con el nuevo `boot.conf`

```bash

./update-pieeprom.sh
```

- **Paso 4:** Conecta el USB Tipo-C al Dispositivo CM4(**`reTerminal`** \ **`reRouter`** \ **`Dual Gigabit Ethernet NICs Carrier Board`**) y al Dispositivo **`PC Anfitrión/Raspberry Pi 4B(Herramienta de Flash)`**, donde el **Dispositivo CM4** debe ponerse en el **modo de almacenamiento masivo USB**.

- **Paso 5:** Aplica el firmware al dispositivo

```bash
cd ~/usbboot

sudo ./rpiboot -d recovery
```

Deberías ver un mensaje similar al que se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

En este punto tu **`CM4 Device`** debería tener la nueva configuración de orden de arranque y el firmware EEPROM actualizado.

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
