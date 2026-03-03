---
description: reComputer R1100 Flash OS
title: reComputer R1100 Flash OS
keywords:
  - Edge
  - reComputer R1100
  - Flash OS
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.webp
slug: /recomputer_r1100_flash_os
last_update:
  date: 3/3/2025
  author: Kasun Thushara
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

El reComputer R1100, alimentado por el Raspberry Pi CM4, es una puerta de enlace IoT edge versátil con capacidades de IA. Cuenta con una gama completa de interfaces industriales, incluyendo **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI, y 2x DO**, junto con opciones flexibles de conectividad inalámbrica como **4G, LoRa®, y Wi-Fi/BLE**. Estas características lo convierten en una opción ideal para diversas aplicaciones industriales.
La serie reComputer R1100 se utiliza ampliamente en aplicaciones IoT, incluyendo **adquisición de datos y monitoreo de procesos, control de automatización y robótica, fabricación inteligente, y comunicación y redes industriales**. Su tamaño compacto, flexibilidad, bajo costo y programabilidad proporcionan un fuerte soporte para **automatización, sistemas IoT y más allá**.

## Requisitos de Hardware

Necesitas preparar el siguiente hardware

- reComputer R1100 x 1
- Computadora Host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB Type-C x 1

## Requisitos de Software

- [herramienta usbboot](https://github.com/raspberrypi/usbboot)
- [APP Raspberry Pi Imager](https://www.raspberrypi.com/software/)

## Arranque desde NVME

### Flashear OS al NVME

Por favor consulta este [enlace](https://wiki.seeedstudio.com/es/recomputer_r1100_assembly_guide/#installing-an-ssd), y luego insértalo en la ranura M.2.

### Arrancar desde emmc y actualizar eeprom

Usa un comando como el siguiente para abrir el archivo

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

Usa un comando como el siguiente para abrir el archivo

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

Usa `Ctrl`+`x` para guardar el archivo, y reinicia la máquina usando el comando:

```
sudo reboot
```

Luego actualiza la eeprom usando un comando como el siguiente:

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

### Flashear la última eeprom y modificar el orden de arranque

Usa un comando como el siguiente para abrir raspi-config:

```
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

Usa `Ctrl`+`x` para guardar el archivo, y luego reinicia tu máquina.

## Pasos para Flashear el SO Raspbian

> **Nota:** La imagen del sistema más reciente empaquetada por Seeed, incluyendo los controladores apropiados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Paso 1.** Asegúrate de que el interruptor esté configurado en `Modo Flash` según el diagrama a continuación:

<div class="table-center">

| Posición del Interruptor                                     | Modo        | Descripción       | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | ----------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Arrancar desde eMMC | Bajo      |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo Flash  | Arrancar desde USB  | Alto      |

</div>

- **Paso 2.** Por favor, use el cable de datos USB Type-C para conectar al puerto Type-C en el reComputer R1100, como se muestra en la imagen a continuación,

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/R1100/r11_usb.jpg"/></div>

- **Paso 3.** Por favor, conecte el cable de alimentación desde la fuente de alimentación al puerto de alimentación del reComputer R1100.

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

:::note
La solución de alimentación utiliza un diodo rectificador de puente para protección contra polaridad inversa y es compatible con entradas tanto AC como DC. Esto asegura que independientemente de cómo estén conectados los terminales positivo y negativo de la fuente de alimentación, el circuito no se dañará. Al usar un rectificador de puente, la polaridad del voltaje de salida permanece fija independientemente de la polaridad de entrada DC, proporcionando protección efectiva contra polaridad inversa.
:::

Ahora pasemos a la configuración del software en su computadora host. Por favor, siga los pasos según su sistema operativo deseado

### Para Windows

- **Paso 1.** Descargue el **instalador de configuración rpiboot** haciendo clic **[aquí](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque

- **Paso 2.** Conecte el reComputer R1100 a la PC mediante cable USB Type-C

Windows ahora encontrará el hardware e instalará los controladores necesarios

- **Paso 3.** Busque la herramienta **rpiboot** que instalamos antes y ábrala

- **Paso 4.** Abra el **explorador de archivos** y verá la eMMC del Computer Module 4 mostrada como un **dispositivo de almacenamiento masivo USB**

- **Paso 5.** Descargue el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**

- **Paso 6.** Abra el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 7.** Presione **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puede **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar WiFi, establecer configuraciones locales** y más

:::note
El sistema tiene preestablecido un nombre de usuario y contraseña. Por favor, establezca el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**" al iniciar sesión. Si establece credenciales diferentes y encuentra problemas, por favor vuelva a flashear el SO si compró el primer lote de reComputer R1100.
:::

- **Paso 8.** Haga clic en **CHOOSE OS** y seleccione su SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puede seleccionar otro SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puede usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 9.** Haga clic en **CHOOSE STORAGE** y seleccione la unidad eMMC conectada

- **Paso 10.** Finalmente, haga clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor, espere unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 11.** Cambie el **interruptor de Modo de Arranque** de vuelta a la posición de **modo Normal**

Ahora puede saltar a **[aquí](#install-drivers)**

### Para MAC

:::caution
**Necesita instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Por favor, abra una terminal y escriba ```brew -v``` para verificar si ha configurado el entorno homebrew correcto, debería ver la versión del entorno homebrew que ha instalado.
:::

- **Paso 1.** Clone el repositorio **usbboot**

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

- **Paso 4.** Compilar usando make

```sh
make
```

- **Paso 5.** Ejecutar el binario

```sh
sudo ./rpiboot
```

- **Paso 6.** Conecta el reComputer R1100 a tu computadora Mac mediante un cable USB Type-C

- **Paso 7.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 8.** Abre la aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más
:::note
El sistema tiene preestablecido un nombre de usuario y contraseña. Por favor establece el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**" al iniciar sesión. Si estableces credenciales diferentes y encuentras problemas, por favor vuelve a flashear el SO si compraste el primer lote de reComputer R1100.
:::

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 12.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 13.** Cambia el **interruptor de modo de arranque** de vuelta a la posición de **modo normal**

Ahora puedes saltar a **[aquí](#install-drivers)**

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

- **Paso 6.** Conecta reComputer R1100 a la PC mediante cable USB Type-C

- **Paso 7.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 8.** Descargar snap

```sh
sudo apt install snap
```

- **Paso 9.** Descargar **rpi-imager**

```sh
snap install rpi-imager
```

- **Paso 10.** Abrir el software Raspberry Pi Imager

```sh
rpi-imager
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

Establece un nombre de host, establece una contraseña, configura wifi, establece configuraciones de idioma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilita SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más
:::note
El sistema tiene preestablecido un nombre de usuario y contraseña. Por favor establece el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**" al iniciar sesión. Si estableces credenciales diferentes y encuentras problemas, por favor vuelve a flashear el SO si compraste el primer lote de reComputer R1100.
:::

- **Paso 11.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**NOTA:** Puedes seleccionar otro SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 12.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 13.** Finalmente, haz clic en **NEXT** y **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Paso 14.** Cambia el **interruptor de Modo de Arranque** de vuelta a la posición de **modo Normal**

## Instalar Controladores

### Acceder al reComputer R1100 vía SSH

:::note

Los siguientes pasos requieren algunos conocimientos básicos de línea de comandos de Linux. Por favor prepárate una taza de café y alístate.

:::

Siguiendo los pasos anteriores de flasheo del SO, el reComputer R1100 debería tener SSH habilitado con el nombre de host `raspberrypi.local`.

Ahora por favor conecta el cable Ethernet al reComputer R1100 y a un router que esté en la misma red que tu computadora host.

:::tip

Para probar si tu reComputer R1100 está en la misma red que la computadora host, puedes usar `ping raspberrypi.local`

si ves la siguiente salida después del comando ping, significa que ambos dispositivos están en la misma red:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Paso 1.** Abre **Símbolo del sistema** y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** para la solicitud

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Paso 3.** Introduce la contraseña como sigue

```sh
raspberry
```

- **Paso 4.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Abre **Terminal** en la computadora y escribe lo siguiente

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Paso 2.** Escriba **sí** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 3.** Cuando solicite la contraseña, escribe lo siguiente

```sh
# password for user
raspberry
```

- **Paso 4.** Si has iniciado sesión exitosamente en el SO Raspberry Pi, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Instalar controladores de reComputer R1100 después de flashear un nuevo SO Raspbian

reComputer R1100 viene con los controladores necesarios preinstalados de fábrica, por lo que no necesitas instalar controladores adicionales. Sin embargo, si flasheas un nuevo SO por ti mismo, necesitas instalar los controladores necesarios por separado.

:::tip

**Instalar controlador de SO de 32 bits, Por favor sigue cuidadosamente los pasos a continuación:**

El Sistema Operativo que viene preinstalado en reComputer R1100 es de 64 bits, si deseas instalar un SO de 32 bits por favor usa el siguiente método para instalar los controladores DTS.

Por favor sigue el paso [**Acceder a reComputer R1100 vía SSH**](#access-recomputer-r1100-via-ssh), y luego ingresa el siguiente comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Luego continúa con el [**proceso de instalación de controladores después de flashear el nuevo SO Raspbian**](#install-recomputer-r1100-drivers-after-flashing-new-raspbian-os)

:::

- **Paso 1.** Clona el siguiente repositorio en el shell ssh que has conectado al reComputer R1100 desde los pasos anteriores

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Paso 2.** Ingresa al repositorio

```sh
cd seeed-linux-dtoverlays
```

- **Paso 3.** Escribe lo siguiente para instalar los controladores

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R110x
```

<!-- Verás la siguiente salida si has instalado exitosamente los controladores

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Paso 4.** Reinicia el reComputer R1100

```sh
sudo reboot
```

Este proceso asegurará que tus controladores estén actualizados antes de actualizar el firmware.

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
