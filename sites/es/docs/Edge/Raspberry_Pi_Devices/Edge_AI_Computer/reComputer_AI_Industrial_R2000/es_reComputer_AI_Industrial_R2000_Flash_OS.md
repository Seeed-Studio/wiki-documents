---
description: reComputer AI Industrial R2000 Flashear SO
title: reComputer AI Industrial R2000 Flashear SO
keywords:
  - Borde
  - reComputer AI Industrial R2000
  - Flashear SO
image: https://files.seeedstudio.com/wiki/reComputer-R2000/reComputer_AI_Industrial_R2135-12.webp
slug: /recomputer_ai_industrial_r2000_flash_os
last_update:
  date: 05/06/2025
  author: Jiahao Li
createdAt: '2025-01-09'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/recomputer_ai_industrial_r2000_flash_os/
---
# reComputer AI Industrial R2000 Flashear SO

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

La serie reComputer AI Industrial R2000 está impulsada por Raspberry Pi CM5 y el acelerador de IA Hailo-8; este sistema compacto de IA en el borde ofrece 26 TOPS para procesamiento de visión multicanal en tiempo real. Con una CPU Cortex-A76 de cuatro núcleos, hasta 16GB de RAM, 64GB eMMC y una interfaz versátil, garantiza una integración fluida en aplicaciones de IA industriales.

## Requisitos de hardware

Necesitas preparar el siguiente hardware

- reComputer AI Industrial R2000 x 1
- Ordenador host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB tipo C x 1

## Requisitos de software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Flashear SO

### Para ordenador host con Windows

- **Paso 1.** Descarga el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**

- **Paso 2.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros SO como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.

### Para ordenador host con MAC

:::caution
**Necesitas instalar [homebrew](https://brew.sh/) antes de continuar con los siguientes pasos.**
Por favor abre una terminal y escribe ```brew -V``` para comprobar si has configurado correctamente el entorno de homebrew; deberías ver la versión del entorno de homebrew que has instalado.
:::

- **Paso 1.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 2.** Abre la aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un hostname, habilitar SSH, establecer una contraseña, configurar wifi, establecer ajustes regionales** y más

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros SO como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Para ordenador host con Linux

- **Paso 1.** Descarga snap

```sh
sudo apt install snap
```

- **Paso 2.** Descarga **rpi-imager**

```sh
snap install rpi-imager
```

- **Paso 3.** Abre el software Raspberry Pi Imager

```sh
rpi-imager
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un hostname, habilitar SSH, establecer una contraseña, configurar wifi, establecer ajustes regionales** y más

- **Paso 5.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTA:** Puedes seleccionar otros SO como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 6.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 7.** Finalmente, haz clic en **NEXT** y **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## Arrancar desde SSD (NVMe vía USB)

### Actualizar EEPROM

*Este método funciona si tienes un SSD y has arrancado el dispositivo correctamente con eMMC. Asegúrate de que tu sistema sea la última versión del sistema Raspberry Pi (Bookworm o posterior) y que el firmware de tu RPi 5 esté actualizado a 2023-12-06 (6 de diciembre) o más reciente; de lo contrario, es posible que no reconozca las configuraciones relacionadas con NVME.*

**Paso 1**: Asegúrate de que tu sistema Raspberry Pi esté actualizado (Bookworm o posterior); introduce el siguiente comando para actualizar el firmware de la RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y pulsa Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Desplázate hacia abajo hasta `Bootloader Version` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

Y finalmente elige `Latest`, y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecciona `No` aquí: quieres el bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

Y sal de la herramienta seleccionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Si se te pide reiniciar, selecciona `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**：Haz clic en **Applications** =>**Accessories** =>**SD Card Copier** en la pantalla principal, ejecuta el programa **SD Card Copier** y copia el SO al SSD NVME como se muestra en la figura siguiente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurar la Raspberry Pi para arrancar desde el SSD

Si tienes fácil acceso a la ranura de tu tarjeta SD, puedes apagar tu Pi, retirar la tarjeta SD y (si todo funciona como se espera) debería arrancar automáticamente desde el SSD la próxima vez que la enciendas. Si quieres dejar la tarjeta SD en su lugar y aun así arrancar desde el SSD, necesitas cambiar el orden de arranque.

**Paso 1**: Introduce el siguiente comando:

```shell
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y pulsa Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Desplázate hacia abajo hasta `Boot Order` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Elige `NVMe/USB Boot` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

La configuración será confirmada. Pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Vuelve a la primera pantalla seleccionando `Back` o presionando la tecla Esc. Luego navega hasta Finish usando la tecla de cursor derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

Se te preguntará si quieres reiniciar ahora. Haz clic en `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Grabar Ubuntu en el SSD (NVMe vía USB)

### Primero: Actualizar el EEPROM con la tarjeta SD

Sigue [Update EEPROM](#update-eeprom) para actualizar el EEPROM.

El SSD utilizado en este dispositivo es un SSD NVMe conectado a través de un puente USB 3.0. Durante el arranque, el firmware de la Raspberry Pi lo detecta como un dispositivo de almacenamiento USB, por lo que la prioridad de arranque correcta es un orden de arranque USB en lugar de un orden de arranque solo NVMe nativo. Para establecer el SSD como el dispositivo de arranque de mayor prioridad, utiliza el siguiente comando:

```
sudo rpi-eeprom-config --edit
```

Y luego cambia rpi-eeprom-config como se muestra a continuación:

```
BOOT_UART=1
BOOT_ORDER=0xf14
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

Usa `Ctrl+X` e introduce `y` para guardar el resultado. Y el resultado es el siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/boot_from_usb.jpg" alt="pir" width="700" height="auto" /></div>

### Segundo: Grabar Ubuntu en el SSD

Abre Raspberry Pi Imager:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Elige el sistema operativo Ubuntu:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

Finalmente, haz clic en `Next` y espera a que se complete el proceso de grabación.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
