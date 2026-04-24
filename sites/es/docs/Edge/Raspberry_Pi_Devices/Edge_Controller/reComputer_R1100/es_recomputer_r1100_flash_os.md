---
description: reComputer R1100 Flashear SO
title: reComputer R1100 Flashear SO
keywords:
  - Edge
  - reComputer R1100
  - Flash OS
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.webp
slug: /recomputer_r1100_flash_os
last_update:
  date: 3/3/2025
  author: Kasun Thushara
createdAt: '2025-03-04'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/recomputer_r1100_flash_os/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

El reComputer R1100, impulsado por la Raspberry Pi CM4, es una versátil pasarela IoT de borde con capacidades de IA. Incorpora una amplia gama de interfaces industriales, incluyendo **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI y 2x DO**, junto con opciones flexibles de conectividad inalámbrica como **4G, LoRa® y Wi‑Fi/BLE**. Estas características lo convierten en una opción ideal para diversas aplicaciones industriales.
La serie reComputer R1100 se utiliza ampliamente en aplicaciones IoT, incluyendo **adquisición de datos y monitorización de procesos, control de automatización y robótica, fabricación inteligente y comunicación y redes industriales**. Su tamaño compacto, flexibilidad, bajo coste y programabilidad proporcionan un sólido soporte para **automatización, sistemas IoT y más allá**.

## Requisitos de hardware

Necesitas preparar el siguiente hardware

- reComputer R1100 x 1
- Ordenador host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB Type-C x 1

## Requisitos de software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Arrancar desde NVME

### Flashear el SO en la NVME

Consulta este [enlace](https://wiki.seeedstudio.com/es/recomputer_r1100_assembly_guide/#installing-an-ssd) y luego insértalo en la ranura M.2.

### Arrancar desde eMMC y actualizar el EEPROM

Utiliza un comando como el siguiente para abrir el archivo

```
sudo nano /etc/default/rpi-eeprom-update
```

Modifica como se muestra a continuación:

```
FIRMWARE_RELEASE_STATUS="latest"
RPI_EEPROM_USE_FLASHROM=1
CM4_ENABLE_RPI_EEPROM_UPDATE=1
```

Usa `Ctrl`+`x` para guardar el archivo.

Utiliza un comando como el siguiente para abrir el archivo

```
sudo nano /boot/firmware/config.txt
```

Modifica la parte `[cm4]` como se muestra a continuación:

```
[cm4]
dtparam=spi=on
dtoverlay=audremap
dtoverlay=spi-gpio40-45
```

Usa `Ctrl`+`x` para guardar el archivo y reinicia la máquina con el comando:

```
sudo reboot
```

Luego actualiza el EEPROM usando un comando como el siguiente:

```
sudo rpi-eeprom-update -a
```

La salida es como se muestra a continuación:

```
recomputer@reComputer-R110x:~ $ sudo rpi-eeprom-update -a
BOOTLOADER: up to date
   CURRENT: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
    LATEST: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
   RELEASE: latest (/usr/lib/firmware/raspberrypi/bootloader-2711/latest)
            Use raspi-config to change the release.

  VL805_FW: Using bootloader EEPROM
     VL805: up to date
   CURRENT: 
    LATEST: 
```

### Flashear el último EEPROM y modificar el orden de arranque

Utiliza un comando como el siguiente para abrir `raspi-config`:

```
sudo raspi-config 
```

Desplázate hacia abajo hasta `Advanced Options` y pulsa Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Desplázate hacia abajo hasta `Bootloader Version` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

Y finalmente elige `Latest` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecciona `No` aquí: quieres el bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

Y sal de la herramienta seleccionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Si se te pide reiniciar, selecciona `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

Luego modifica el orden de arranque con un comando como el siguiente:

```
sudo -E rpi-eeprom-config --edit
```

Modifica el archivo como se muestra a continuación:

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
BOOT_ORDER=0xf416
```

Usa `Ctrl`+`x` para guardar el archivo y luego reinicia tu máquina.

## Pasos para flashear Raspbian OS

- **Paso 1.** Asegúrate de que el interruptor esté ajustado a `Flash mode` según el siguiente diagrama:

<div class="table-center">

| Posición del interruptor                                      | Modo        | Descripción        | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | ------------------ | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Arrancar desde eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Arrancar desde USB  | High      |

</div>

- **Paso 2.** Utiliza el cable de datos USB Type-C para conectarte al puerto Type-C del reComputer R1100, como se muestra en la imagen siguiente,

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/R1100/r11_usb.jpg"/></div>

- **Paso 3.** Conecta el cable de alimentación desde la fuente de alimentación al puerto de alimentación del reComputer R1100.

<div style={{ textAlign: 'center', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

- **Paso 4.** Haz clic [aquí](https://github.com/Seeed-Studio/pi-gen-expand) para descargar la última imagen oficial adaptada para dispositivos reComputer R1100 de Seeed, que viene con los controladores correspondientes preinstalados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/download_preferredOS.png" alt="pir" width="600" height="auto"/></p>

:::note
La solución de alimentación utiliza un diodo rectificador en puente para la protección contra polaridad inversa y es compatible con entradas tanto de CA como de CC. Esto garantiza que, independientemente de cómo se conecten los terminales positivo y negativo de la fuente de alimentación, el circuito no se dañará. Al utilizar un rectificador en puente, la polaridad de la tensión de salida permanece fija independientemente de la polaridad de entrada de CC, proporcionando una protección eficaz contra la polaridad inversa.
:::

Ahora pasemos a la configuración de software en tu ordenador host. Sigue los pasos según tu sistema operativo deseado

### Para Windows

- **Paso 1.** Descarga el **instalador de configuración de rpiboot** haciendo clic **[aquí](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque

- **Paso 2.** Conecta el reComputer R1100 al PC mediante el cable USB Type-C

Windows ahora detectará el hardware e instalará los controladores necesarios

- **Paso 3.** Busca la herramienta **rpiboot** que instalamos antes y ábrela

- **Paso 4.** Abre el **explorador de archivos** y verás la eMMC del Compute Module 4 mostrada como un **dispositivo de almacenamiento masivo USB**

- **Paso 5.** ** Haz clic **[aquí](https://downloads.raspberrypi.com/imager/imager_2.0.7.exe)** para descargar directamente la versión para Windows de Raspberry Pi Imager 2.0.7 (utilizada en el siguiente procedimiento), o visita la **[página oficial](https://www.raspberrypi.com/software/)** para seleccionar la versión adecuada para tu sistema.

- **Paso 6.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_1.png" alt="pir" width="600" height="auto"/></p>


Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar WiFi, establecer la configuración regional** y más

:::note
El sistema tiene preestablecido un nombre de usuario y una contraseña. Configura el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**" al iniciar sesión. Si configuras credenciales diferentes y encuentras problemas, vuelve a flashear el SO si compraste el primer lote de reComputer R1100.
:::

- **Paso 7.** Haz clic en "**OS**" y selecciona **"Use custom"**, luego selecciona el archivo de imagen que acabas de descargar en la ventana emergente.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_3.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Alternativamente, puedes seleccionar otros sistemas operativos como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 8.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/select_device.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/write.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.

- **Paso 10.** Vuelve a poner el **interruptor de modo de arranque** en la posición de **Modo normal**

Ahora puedes saltar a **[aquí](#install-drivers)** para acceder al reComputer R1100 mediante SSH

### Para MAC

:::caution
**Necesitas instalar [homebrew](https://brew.sh/) antes de continuar con los siguientes pasos.**
Abre una terminal y escribe ```brew -v``` para comprobar si has configurado correctamente el entorno de homebrew; deberías ver la versión del entorno de homebrew que has instalado.
:::

- **Paso 1.** Clona el repositorio **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 2.** Instala **libusb**

```sh
brew install libusb
```

- **Paso 3.** Instala **pkg-config**

```sh
brew install pkg-config
```

- **Paso 4.** Compila usando make

```sh
make
```

- **Paso 5.** Ejecuta el binario

```sh
sudo ./rpiboot
```

- **Paso 6.** Conecta reComputer R1100 a tu ordenador Mac mediante un cable USB Type-C

- **Paso 7.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 8.** Abre la aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer la configuración regional** y más
:::note
El sistema tiene preestablecido un nombre de usuario y una contraseña. Configura el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**" al iniciar sesión. Si configuras credenciales diferentes y encuentras problemas, vuelve a grabar el sistema operativo si compraste el primer lote de reComputer R1100.
:::

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu for Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 12.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de grabación se complete.

- **Paso 13.** Cambia el **interruptor de modo de arranque (Boot Mode)** de nuevo a la posición de **modo Normal**

Ahora puedes saltar a **[aquí](#install-drivers)** para acceder a reComputer R1100 vía SSH

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

**NOTA:** Donde **MM** es el mes, **DD** es el día, y **hh** y **mm** son las horas y los minutos respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Compila e instala la herramienta usbboot

```sh
make
```

- **Paso 6.** Conecta reComputer R1100 al PC mediante un cable USB Type-C

- **Paso 7.** Ejecuta la herramienta usbboot y esta esperará una conexión

```sh
sudo ./rpiboot
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 8.** Descarga snap

```sh
sudo apt install snap
```

- **Paso 9.** Descarga **rpi-imager**

```sh
snap install rpi-imager
```

- **Paso 10.** Abre el software Raspberry Pi Imager

```sh
rpi-imager
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

Establece un nombre de host, establece una contraseña, configura wifi, establece la configuración regional

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilita SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer la configuración regional** y más
:::note
El sistema tiene preestablecido un nombre de usuario y una contraseña. Configura el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**" al iniciar sesión. Si configuras credenciales diferentes y encuentras problemas, vuelve a grabar el sistema operativo si compraste el primer lote de reComputer R1100.
:::

- **Paso 11.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**NOTA:** Puedes seleccionar otros sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu for Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 12.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 13.** Finalmente, haz clic en **NEXT** y **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de grabación se complete.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Paso 14.** Cambia el **interruptor de modo de arranque (Boot Mode)** de nuevo a la posición de **modo Normal**

## Instalar controladores

### Acceder a reComputer R1100 vía SSH

:::note

Los siguientes pasos requieren algunos conocimientos básicos de la línea de comandos de Linux. Por favor, prepárate una taza de café y ponte listo.

:::

Siguiendo los pasos anteriores de grabación del sistema operativo, el reComputer R1100 debería tener SSH habilitado con el nombre de host `raspberrypi.local`.

Ahora conecta el cable Ethernet al reComputer R1100 y a un router que esté en la misma red que tu ordenador host.

:::tip

Para comprobar si tu reComputer R1100 está en la misma red que el ordenador host, puedes usar `ping raspberrypi.local`

si ves la siguiente salida después del comando ping significa que ambos dispositivos están en la misma red:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Paso 1.** Abre **Command Prompt** y escribe lo siguiente

```sh
ssh <your username>@raspberrypi.local
```
Si estás usando la imagen oficial precompilada de Seeed proporcionada en la sección de creación de la tarjeta anterior, el nombre de usuario es **recomputer** y la contraseña es **12345678**.

```sh
ssh reComputer@raspberrypi.local
```

- **Paso 2.** Escribe **yes** cuando aparezca el aviso

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Paso 3.** Introduce la contraseña como se indica a continuación

```sh
12345678
```

- **Paso 4.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Abre **Terminal** en el ordenador y escribe lo siguiente

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 3.** Cuando pida la contraseña, escribe lo siguiente

```sh
# password for user
raspberry
```

- **Paso 4.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Instalar controladores de reComputer R1100 después de grabar un nuevo Raspbian OS

reComputer R1100 viene con los controladores necesarios preinstalados de fábrica, por lo que no necesitas instalar controladores adicionales. Sin embargo, si grabas un nuevo sistema operativo por tu cuenta, debes instalar los controladores necesarios por separado.

:::tip

**Instala el controlador para sistema operativo de 32 bits, por favor sigue cuidadosamente los pasos a continuación:**

El sistema operativo preinstalado en reComputer R1100 es de 64 bits; si deseas instalar un sistema operativo de 32 bits, utiliza el siguiente método para instalar los controladores DTS.

Sigue el paso [**Access reComputer R1100 via SSH**](#access-recomputer-r1100-via-ssh) y luego introduce el siguiente comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Luego continúa con el proceso de [**Install drivers after flashing new Raspbian OS process**](#install-recomputer-r1100-drivers-after-flashing-new-raspbian-os)

:::

- **Paso 1.** Clona el siguiente repositorio en la shell ssh con la que te has conectado a reComputer R1100 en los pasos anteriores

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Paso 2.** Entra en el repositorio

```sh
cd seeed-linux-dtoverlays
```

- **Paso 3.** Escribe lo siguiente para instalar los controladores

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R110x
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Paso 4.** Reinicia el reComputer R1100

```sh
sudo reboot
```

Este proceso garantizará que tus controladores estén actualizados antes de actualizar el firmware.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
