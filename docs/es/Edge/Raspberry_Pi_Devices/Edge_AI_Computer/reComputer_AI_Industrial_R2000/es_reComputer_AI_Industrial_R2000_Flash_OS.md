---
description: reComputer AI Industrial R2000 Flash OS
title: reComputer AI Industrial R2000 Flash OS
keywords:
  - Edge
  - reComputer AI Industrial R2000
  - Flash OS
image: https://files.seeedstudio.com/wiki/reComputer-R2000/reComputer_AI_Industrial_R2135-12.webp
slug: /es/recomputer_ai_industrial_r2000_flash_os
last_update:
  date: 05/06/2025
  author: Jiahao Li
---
# reComputer AI Industrial R2000 Flash OS

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

La serie reComputer AI Industrial R2000 está alimentada por Raspberry Pi CM5 y el acelerador de IA Hailo-8, este sistema compacto de IA de borde ofrece 26 TOPS para procesamiento de visión multicanal en tiempo real. Con una CPU Cortex-A76 de cuatro núcleos, hasta 16GB de RAM, 64GB eMMC y una interfaz versátil, garantiza una integración perfecta en aplicaciones industriales de IA.

## Requisitos de Hardware

Necesitas preparar el siguiente hardware

- reComputer AI Industrial R2000 x 1
- Computadora Host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB Type-C x 1

## Requisitos de Software

- [herramienta usbboot](https://github.com/raspberrypi/usbboot)
- [Aplicación Raspberry Pi Imager](https://www.raspberrypi.com/software/)

## Flash OS

### Para computadora host Windows

- **Paso 1.** Descarga el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**

- **Paso 2.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu OS preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otro OS como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

### Para computadora host MAC

:::caution
**Necesitas instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Por favor abre una terminal y escribe ```brew -V``` para verificar si has configurado el entorno homebrew correcto, deberías ver la versión del entorno homebrew que has instalado.
:::

- **Paso 1.** Descarga e Instala la Aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 2.** Abre la Aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones locales** y más

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu OS preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otro OS como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Para computadora host Linux

- **Paso 1.** Descarga snap

```sh
sudo apt install snap
```

- **Paso 2.** Descargar **rpi-imager**

```sh
snap install rpi-imager
```

- **Paso 3.** Abrir el software Raspberry Pi Imager

```sh
rpi-imager
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones locales** y más

- **Paso 5.** Haz clic en **ELEGIR SO** y selecciona tu SO preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTA:** Puedes seleccionar otros SO como **Ubuntu de 64 bits** navegando a **Otros SO de propósito general**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 6.** Haz clic en **ELEGIR ALMACENAMIENTO** y selecciona la unidad eMMC conectada

- **Paso 7.** Finalmente, haz clic en **SIGUIENTE** y **SÍ**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de grabación esté completo.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## Arrancar desde NVME

### Actualizar EEPROM

*Este método funciona si tienes un SSD y has arrancado el dispositivo exitosamente con emmc. Por favor asegúrate de que tu sistema sea el último sistema Raspberry Pi (Bookworm o posterior) y que tu firmware RPi 5 esté actualizado al 2023-12-06 (6 de diciembre) o más reciente, de lo contrario puede que no reconozca las configuraciones relacionadas con NVME.*

**Paso 1**: Asegúrate de que tu sistema Raspberry Pi esté actualizado (Bookworm o posterior), ingresa el siguiente comando para actualizar el firmware RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y presiona Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Desplázate hacia abajo hasta `Bootloader Version` y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

Y finalmente elige `Latest`, y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecciona `No` aquí - quieres el bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

Y sal de la herramienta seleccionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Si se te pide reiniciar, selecciona `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**：Haz clic en **Applications** =>**Accessories** =>**SD Card Copier** en la pantalla principal, ejecuta el programa **SD Card Copier**, y copia el SO al SSD NVME como se muestra en la figura a continuación.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurar la Raspberry Pi para arrancar desde el SSD NVMe

Si tienes fácil acceso a tu ranura de tarjeta SD podrías apagar tu Pi, sacar la tarjeta SD y (si todo funciona como se espera) debería arrancar automágicamente desde tu unidad NVMe la próxima vez que la inicies. Sin embargo, si quieres dejar la tarjeta SD donde está y aún así arrancar desde NVMe, necesitarás cambiar el orden de arranque.

**Paso 1**:Ingresa el siguiente comando:

```shell
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y presiona Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Desplázate hacia abajo hasta `Boot Order` y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Elige `NVMe/USB Boot` y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

La configuración será confirmada. Presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Regresa a la primera pantalla seleccionando `Back` o presionando la tecla Esc. Luego navega a Finish usando la tecla de cursor derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

Se te preguntará si quieres reiniciar ahora. Haz clic en `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Flashear ubuntu al NVME

### Primero: Actualizar EEPROM con tarjeta SD

Por favor consulta este [enlace](https://wiki.seeedstudio.com/es/r2000_series_getting_start/#update-eeprom).

Para establecer el orden de arranque NVMe como la máxima prioridad, usa el siguiente comando:

```
sudo rpi-eeprom-config --edit
```

Y luego cambia rpi-eeprom-config como se muestra a continuación:

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

Usa `Ctrl+X` e ingresa `y` para guardar el resultado. Y el resultado es el siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### Segundo: Grabar Ubuntu en el NVMe

Abrir Raspberry Pi Imager:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Elegir el SO Ubuntu:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

Finalmente, hacer clic en `Next` y esperar a que se complete el proceso de grabación.

### Tercero: Reemplazar el archivo del SO

Instalar `pcie-fix.dtbo` con este [enlace](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)

Copiar pcie-fix.dtbo al archivo /overlays como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

Modificar el `config.txt`, añadir `dtoverlay=pcie-fix` al final del archivo como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

Y luego usar `Ctrl+X` e introducir `y` para guardar este archivo.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
