---
description: reTerminal-FAQ
title: Cómo arrancar un SO desde una unidad flash USB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Boot_OS_from_USB_flash_drive
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q7: How can I boot an OS from USB Flash Drive -->

Puedes arrancar un SO desde una unidad flash USB siguiendo los pasos a continuación. Aquí cambiamos el orden de arranque a **Arranque USB > Arranque eMMC**, lo que significa que si el arranque USB falla, arrancará desde eMMC.

:::caution
Tendrás que usar **Ubuntu** o **MacOS** como PC anfitrión para este método.
:::

- **Paso 1.** Retira las 4 cubiertas de goma y abre la carcasa trasera del reTerminal desatornillando los 4 tornillos que están debajo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **Paso 2.** Retira los 2 tornillos para desensamblar el disipador de calor y también los 4 tornillos restantes para separar toda la carcasa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **Paso 3.** Voltea hacia abajo el **interruptor de modo de arranque** según el diagrama a continuación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **Paso 4.** Abre una ventana de **Terminal** dentro del PC anfitrión después de conectar al reTerminal y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt update
```

- **Paso 5.** Instala **Git** con el siguiente comando

```sh
sudo apt install git
```

- **Paso 6.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es la fecha, y **hh** y **mm** son horas y minutos respectivamente.

- **Paso 7.** Clona y entra al repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 8.** Ingresa lo siguiente para instalar **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Paso 9.** Construye e instala la herramienta usbboot

```sh
make
```

- **Paso 10.** Abre el archivo de configuración del bootloader

```sh
sudo nano recovery/boot.conf
```

- **Paso 11.** Cambia el campo **BOOT_ORDER** a lo siguiente

```sh
BOOT_ORDER=0xf15
```

Ten en cuenta que el valor predeterminado del reTerminal es diferente del recovery/boot.conf clonado.
Los valores predeterminados para reTerminal son los siguientes.
Por favor reescribe recovery/boot.conf según sea necesario.

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=0
POWER_OFF_ON_HALT=1

# Try  SD- > USB PCIe MSD -> USB 2.0 BCM XHCI -> Network ->  Loop
BOOT_ORDER=0xf2541

# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

**NOTA:** Aquí si el arranque USB falla, cambia al arranque eMMC

- **Paso 12.** Ejecuta lo siguiente para actualizar la imagen EEPROM

```sh
cd recovery
./update-pieeprom.sh
```

El archivo pieeprom.bin ahora está listo para ser flasheado al Compute Module 4

- **Paso 13.** Navega de vuelta al directorio **usbboot**

```sh
cd ..
```

- **Paso 14.** Ejecuta la herramienta usbboot para flashear la EEPROM del bootloader

```sh
sudo ./rpiboot -d recovery
```

- **Paso 15.** Conecta el reTerminal al PC mediante cable USB Type-C

Ahora tomará unos segundos transferir los archivos necesarios al reTerminal.

- **Paso 16.** Apaga el reTerminal, voltea el interruptor de modo de arranque de vuelta a la posición original y ensambla la carcasa del reTerminal

- **Paso 17.** Conecta una unidad flash USB arrancable con un SO adecuado dentro, conéctala a uno de los puertos USB del reTerminal y enciende el reTerminal

Ahora verás el reTerminal arrancando desde la unidad USB conectada