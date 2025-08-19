---
description: reTerminal DM Flash OS
title: reTerminal DM Flash OS
keywords:
  - Edge
  - reTerminal-DM
  - Flash OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal-dm-flash-OS
last_update:
  date: 04/06/2025
  author: Erick González
---
# reTerminal DM Flash Raspbian OS a eMMC

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM es una HMI industrial de código abierto de 10.1" – un dispositivo maestro integrado para unificar el flujo de datos y gestionar el dispositivo in situ.

Basado en Raspberry Pi CM4 y funcionando como un PC de panel, HMI, PLC y Gateway IIoT todo en uno, reTerminal DM representa una nueva generación de hub de sensado interactivo con una pantalla industrial de gran formato y grado IP65.

Está equipado con una rica escalabilidad y conectividad híbrida, soportando bus CAN, RS485, RS232, puerto Ethernet Gigabit y otras interfaces, además de potentes capacidades de comunicación inalámbrica como 4G, LoRa®, WiFi y BLE.

> \*Los módulos 4G y LoRa® no vienen incluidos por defecto en reTerminal DM; por favor, adquiere los módulos correspondientes. Para el 
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

:::note
El Sensecraft Edge OS puede descargarse desde [**Aquí**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download). Ten en cuenta que este Sensecraft Edge OS está actualmente desarrollado para reTerminal DM y solo funciona con la versión de producción de reTerminal DM.
:::

## Requisitos de Hardware

Debes preparar el siguiente hardware:

- reTerminal DM x 1
- Computadora Host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB Type-C x 1 

## Requisitos de Software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Pasos para Flashear el OS Raspbian

> **Nota:** La imagen del sistema más reciente empaquetada por Seeed, que incluye los drivers apropiados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Paso 1.** Invierte el `interruptor de modo de arranque` ubicado junto al puerto USB Type-C; asegúrate de que el interruptor esté configurado en `deshabilitar modo de arranque desde eMMC` según el diagrama a continuación:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **Paso 2.** Utiliza el cable de datos USB Type-C para conectar el reTerminal DM al puerto Type-C del dispositivo, como se muestra en la imagen anterior.

- **Paso 3.** Conecta el cable de alimentación desde la fuente de poder al puerto de alimentación del reTerminal DM.
  
:::danger
Por favor, asegúrate de haber conectado el cable de alimentación con la polaridad correcta.
:::
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

Ahora, pasemos a la configuración del software en tu computadora host. Sigue los pasos de acuerdo al sistema operativo que utilices.

### Para Windows

- **Paso 1.** Descarga el instalador **rpiboot setup** haciendo clic **[aquí](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los drivers necesarios y la herramienta de arranque.

- **Paso 2.** Conecta reTerminal DM a la PC mediante el cable USB Type-C.

Windows detectará el hardware e instalará los drivers correspondientes.

- **Paso 3.** Busca la herramienta **rpiboot** que instalaste anteriormente y ejecútala.

- **Paso 4.** Abre el **explorador de archivos** y verás el eMMC del Computer Module 4 mostrado como un **dispositivo de almacenamiento USB**.

- **Paso 5.** Descarga el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**

- **Paso 6.** Abre el software Raspberry Pi Imager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 7.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones Avanzadas**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, configurar una contraseña, configurar WiFi, establecer ajustes regionales** y más.

- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona el sistema operativo que prefieras.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros OS como **64-bit Ubuntu** navegando en **Other general purpose OS**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 10.** Finalmente, haz clic en **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que finalice el proceso de flasheo.

- **Paso 11.** Vuelve a invertir el **interruptor de modo de arranque** a su posición original.

Ahora puedes saltar a **[aquí](#install-drivers)**.

:::note
Una vez que finalicen los pasos anteriores y vuelvas a aplicar alimentación al reTerminal DM, el LED de alimentación debería encender con color amarillo y el LED ACT debería parpadear en color verde, pero la pantalla estará en negro y sin retroiluminación. No entres en pánico; solo debes seguir los pasos de [instalación de drivers](#install-drivers) para revivir la pantalla.
:::

### Para MAC

:::caution
**Debes instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Abre una terminal y escribe ```brew -V``` para verificar que tienes configurado el entorno correcto de homebrew; deberías ver la versión instalada.
:::

- **Paso 1.** Clona el repositorio de **usbboot**.

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 2.** Instala **libusb**.

```sh
brew install libusb
```

- **Paso 3.** Instala **pkg-config**.

```sh
brew install pkg-config
```

- **Paso 4.** Compila el proyecto usando make.

```sh
make
```

- **Paso 5.** Ejecuta el binario.

```sh
sudo ./rpiboot
```

- **Paso 6.** Conecta el reTerminal a tu Mac mediante el cable USB Type-C.

- **Paso 7.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/).

- **Paso 8.** Abre la aplicación **Raspberry Pi Imager**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones Avanzadas**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, configurar una contraseña, configurar WiFi, establecer ajustes regionales** y más.

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona el sistema operativo que prefieras.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar sistemas operativos como **64-bit Ubuntu** navegando en **Other general purpose OS**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 12.** Finalmente, haz clic en **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que finalice el proceso de flasheo.

- **Paso 13.** Vuelve a invertir el **interruptor de modo de arranque** a su posición original.

Ahora puedes saltar a **[aquí](#install-drivers)**.

:::note
Una vez que los pasos anteriores finalicen y vuelvas a aplicar la energía al reTerminal DM, deberías notar que el LED de alimentación enciende en color amarillo y el LED ACT parpadea en color verde, pero la pantalla sigue en negro sin retroiluminación. No te preocupes, sigue los pasos de [instalación de drivers](#install-drivers) para reactivar la pantalla.
:::

### Para Linux

Utilizaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de tener Git instalado.

- **Paso 1.** Abre una ventana de **Terminal** y actualiza la lista de paquetes:

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** y las dependencias necesarias con el siguiente comando:

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **Paso 3.** Git podría generar un error si la fecha no está configurada correctamente. Corrígelo con:

```sh
sudo date MMDDhhmm
```
**NOTA:** Donde **MM** es el mes, **DD** es el día, y **hh** y **mm** son la hora y los minutos, respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**:

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Compila e instala la herramienta usbboot:

```sh
make
```

- **Paso 6.** Ejecuta la herramienta usbboot, la cual quedará a la espera de una conexión:

```sh
sudo ./rpiboot
```
El resultado se mostrará a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 7.** Conecta el reTerminal a la PC mediante el cable USB Type-C.

- **Paso 8.** Descarga snap:

```sh
sudo apt install snap
```

- **Paso 9.** Instala **rpi-imager**:

```sh
snap install rpi-imager
```

- **Paso 10.** Abre el software Raspberry Pi Imager:

```sh
rpi-imager
```
El resultado se mostrará a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **Paso 11.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones Avanzadas**. Configura el nombre de host, la contraseña, WiFi, ajustes regionales y habilita SSH.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

- **Paso 12.** Haz clic en **CHOOSE OS** y selecciona el sistema operativo que prefieras.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar sistemas operativos como **64-bit Ubuntu** navegando en **Other general purpose OS**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 13.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 14.** Finalmente, haz clic en **NEXT** y luego en **YES**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que finalice el proceso de flasheo. El resultado se verá a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Paso 15.** Vuelve a invertir el **interruptor de modo de arranque** a su posición original.

:::note
Una vez que finalicen los pasos anteriores y vuelvas a aplicar energía al reTerminal DM, deberías observar que el LED de alimentación se ilumina en amarillo y el LED ACT parpadea en verde, pero la pantalla permanece en negro sin retroiluminación. No te preocupes, sigue los pasos de [instalación de drivers](#install-drivers) para reactivar la pantalla.
:::

## Install Drivers

### Acceder al reTerminal DM vía SSH

:::note
Los siguientes pasos requieren conocimientos básicos de comandos en Linux. Prepara una taza de café y manos a la obra.
:::

Siguiendo los pasos anteriores para flashear el OS, el reTerminal DM debería tener SSH habilitado con el hostname `raspberrypi.local`.

Conecta ahora el cable Ethernet al reTerminal DM y a un router que esté en la misma red que tu computadora host.

:::tip
Para comprobar si tu reTerminal DM está en la misma red que tu computadora host, utiliza el comando `ping raspberrypi.local`.

Si ves una salida similar a la siguiente, ambos dispositivos están en la misma red:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>
:::

##### Para Windows

- **Paso 1.** Abre **Command Prompt** y escribe:

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** cuando se te solicite.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Paso 3.** Ingresa la contraseña:

```sh
raspberry
```

- **Paso 4.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás una salida similar a la siguiente:

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Abre la **Terminal** y escribe:

```sh
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** para el mensaje:

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 3.** Cuando se te solicite la contraseña, escribe:

```sh
raspberry
```

- **Paso 4.** Si inicias sesión correctamente, verás una salida similar a la siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Instalar los drivers de reTerminal después de flashear el nuevo OS Raspbian

El reTerminal DM viene con los drivers necesarios preinstalados, por lo que no necesitas instalar drivers adicionales. Sin embargo, si flasheas un OS nuevo por tu cuenta, deberás instalar los drivers necesarios por separado.

:::tip
**Para instalar drivers para OS de 32 bits, sigue cuidadosamente los pasos a continuación:**

El sistema operativo preinstalado en el reTerminal DM es de 64 bits. Si deseas instalar drivers para OS de 32 bits, utiliza el siguiente método para instalar los drivers DTS.

Accede al reTerminal DM vía SSH (consulta Acceder al reTerminal DM vía SSH) y luego ingresa el siguiente comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```
Luego, continúa con el proceso de [**Instalación de drivers después de flashear un nuevo OS Raspbian**](#install-drivers).

:::

- **Paso 1.** Clona el siguiente repositorio en la shell SSH a la que te conectaste en los pasos anteriores:

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Paso 2.** Ingresa al repositorio:

```sh
cd seeed-linux-dtoverlays
```

- **Paso 3.** Escribe el siguiente comando para instalar los drivers:

```sh
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

- **Paso 4.** Reinicia el reTerminal DM:

```sh
sudo reboot
```

Ahora tu pantalla debería encender y funcionar con normalidad.

## FAQ

### Orientación de la pantalla táctil

**P: ¿El panel táctil de la pantalla está orientado de forma diferente a la visualización de la pantalla?** 

**R:** Sigue cuidadosamente los pasos a continuación:

Accede al reTerminal DM vía SSH (consulta Acceder al reTerminal DM vía SSH) y luego ingresa el siguiente comando:

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```
Luego reinicia:

```sh
sudo reboot
```

Si la orientación sigue siendo incorrecta, puedes encontrar opciones adicionales para `ENV{LIBINPUT_CALIBRATION_MATRIX}` [aquí](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html).

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes canales de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
