---
description: reTerminal-FAQ
title: Cómo flashear Raspberry Pi OS/ Ubuntu OS de 64 bits u otros OS a eMMC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/flash_different_os_to_emmc
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- ### Flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC -->

Podemos flashear **Raspberry Pi OS/ Ubuntu OS de 64 bits u otros OS** en el **almacenamiento eMMC** del CM4 en el reTerminal. Una vez que los controladores necesarios estén instalados, solo tienes que conectar el puerto USB Type-C del reTerminal a tu PC, y se mostrará como una unidad externa. Comienza removiendo la carcasa trasera del reTerminal.

## Pasos de Desensamblaje de Hardware

- **Paso 1.** Remueve las 4 cubiertas de goma y abre la carcasa trasera del reTerminal desatornillando los 4 tornillos debajo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **Paso 2.** Remueve los 2 tornillos para desensamblar el disipador de calor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Voltea hacia abajo el **interruptor de modo de arranque** según el diagrama siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

Ahora pasemos a la configuración de software. Sigue los pasos según tu sistema operativo deseado

## Configuración de Software

### Para Windows

- **Paso 1.** Descarga el **instalador de configuración rpiboot** haciendo clic en **[este enlace](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque

- **Paso 2.** Conecta el reTerminal a la PC vía cable USB Type-C

Windows ahora encontrará el hardware e instalará los controladores necesarios

- **Paso 3.** Busca la herramienta **rpiboot** que instalamos antes y ábrela

- **Paso 4.** Abre el **explorador de archivos** y verás el eMMC del Computer Module 4 mostrado como un **dispositivo de almacenamiento masivo USB**

:::caution
Si flasheas **el Raspberry Pi OS que originalmente venía con reTerminal**, por favor regresa a este [Wiki](/es/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal). <br/>
De lo contrario, por favor procede con los siguientes pasos.
:::

- **Paso 5.** Descarga el software **Raspberry Pi Imager** visitando **[este enlace](https://www.raspberrypi.org/software/)**

- **Paso 6.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 7.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de localización** y más

- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona tu OS preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros OS como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 10.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 11.** Voltea el **interruptor de Modo de Arranque** de vuelta a la posición original y ensambla la carcasa del reTerminal

Ahora puedes saltar a **[aquí](/es/log_rpios_use_ssh_over_wifi_ethernet)**

### Para MAC

:::caution
**Necesitas instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Por favor abre una terminal y escribe ```brew -V``` para verificar si has configurado el entorno homebrew correcto, deberías ver la versión del entorno homebrew que has instalado.
:::

- **Paso 1.** Clona el repositorio **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 2.** Instalar **libusb**

```sh
brew install libusb
```

- **Paso 3.** Instalar **pkg-config**

```sh
brew install pkg-config
```

- **Paso 4.** Construir usando make

```sh
make
```

- **Paso 5.** Ejecutar el binario

```sh
sudo ./rpiboot
```

- **Paso 6.** Conecta reTerminal a tu computadora Mac mediante un cable USB Type-C

:::caution
Si flasheas **el Raspberry Pi OS que originalmente venía con reTerminal**, por favor regresa a esta [Wiki](/es/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal). <br/>
De lo contrario, por favor continúa con los siguientes pasos.
:::

- **Paso 7.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 8.** Abre la aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 12.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 13.** Voltea el **interruptor de modo de arranque** de vuelta a la posición original y ensambla la carcasa del reTerminal

Ahora puedes saltar a **[aquí](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

### Para Linux

Usaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de que Git esté instalado

- **Paso 1.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** con el siguiente comando

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Paso 3.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es la fecha, y **hh** y **mm** son horas y minutos respectivamente.

- **Paso 4.** Clonar el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Compilar e instalar la herramienta usbboot

```sh
make
```

- **Paso 6.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

- **Paso 7.** Conecta reTerminal a la PC mediante cable USB Type-C

:::caution
Si flasheas **el Raspberry Pi OS que originalmente venía con reTerminal**, por favor regresa a este [Wiki](/es/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).<br/>
De lo contrario, por favor procede con los siguientes pasos.
:::

- **Paso 8.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 9.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 10.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **Paso 11.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 12.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 13.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 14.** Cambia el **interruptor de Boot Mode** de vuelta a la posición original y ensambla la carcasa del reTerminal
