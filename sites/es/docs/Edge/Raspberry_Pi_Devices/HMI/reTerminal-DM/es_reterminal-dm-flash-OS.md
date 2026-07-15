---
description: reTerminal DM Flashear SO
title: reTerminal DM Flashear SO
keywords:
  - Edge
  - reTerminal-DM
  - Flash OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-flash-OS
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 04/23/2023
  author: Peter Pan
createdAt: '2023-04-24'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/
---
# reTerminal DM Flashear Raspbian OS en eMMC

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM es una HMI industrial de código abierto de 10,1" - un Dispositivo Maestro Integrado para unificar el flujo de datos y gestionar el dispositivo in situ.

Basado en Raspberry Pi CM4, y como un dispositivo todo en uno Panel PC, HMI, PLC y pasarela IIoT, reTerminal DM es una nueva generación de hub interactivo de sensado con una pantalla grande de grado industrial IP65.

Está equipado con una rica escalabilidad y conectividad híbrida, compatible con bus CAN, RS485, RS232, puerto Ethernet Gigabit y otras interfaces, así como potentes capacidades de comunicación inalámbrica como 4G, LoRa®, WiFi y BLE.

> \*Los módulos 4G y LoRa® no vienen con reTerminal DM por defecto, compra los módulos correspondientes según sea necesario, para
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

:::note
El Sensecraft Edge OS se puede descargar desde [**Here**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download), ten en cuenta que este Sensecraft Edge OS está desarrollado actualmente sobre la base de reTerminal DM y solo funciona con la versión de Producción de reTerminal DM
:::

## Requisitos de hardware

Necesitas preparar el siguiente hardware

- reTerminal DM x 1
- Ordenador host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB Type-C x 1

## Requisitos de software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Pasos para flashear Raspbian OS

> **Nota:** La última imagen del sistema empaquetada por Seeed, que incluye los controladores apropiados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Paso 1.** Cambia el `boot mode switch` situado junto al puerto USB Type-C, asegúrate de que el interruptor esté ajustado a `disable eMMC boot mode` según el diagrama siguiente:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **Paso 2.** Utiliza el cable de datos USB Type-C para conectarlo al puerto Type-C del reTerminal DM, como se muestra en la imagen anterior,

- **Paso 3.** Conecta el cable de alimentación desde la fuente de alimentación al puerto de alimentación del reTerminal DM.

:::danger

Asegúrate de haber conectado el cable de alimentación con la polaridad correcta.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

Ahora pasemos a la configuración de software en tu ordenador host. Sigue los pasos según tu sistema operativo deseado

### Para Windows

- **Paso 1.** Descarga el **rpiboot setup installer** haciendo clic **[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque

- **Paso 2.** Conecta reTerminal DM al PC mediante un cable USB Type-C

Windows ahora encontrará el hardware e instalará los controladores necesarios

- **Paso 3.** Busca la herramienta **rpiboot** que instalamos antes y ábrela

- **Paso 4.** Abre el **explorador de archivos** y verás la eMMC del Computer Module 4 mostrada como un **dispositivo de almacenamiento masivo USB**

- **Paso 5.** Descarga el software **Raspberry Pi Imager** desde **[here](https://www.raspberrypi.org/software/)**

- **Paso 6.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 7.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un hostname, habilitar SSH, establecer una contraseña, configurar wiFi, establecer la configuración regional** y más

- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 10.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.

- **Paso 11.** Cambia el **Boot Mode switch** de nuevo a la posición original

Ahora puedes saltar a **[here](#install-drivers)**

:::note

Una vez que hayas terminado los pasos anteriores y hayas vuelto a aplicar la alimentación al reTerminal DM, el LED de encendido debería encenderse de color amarillo y el LED ACT debería parpadear de color verde, pero la pantalla estará en negro y sin retroiluminación. No te asustes, solo necesitas seguir los pasos de [install drivers](#install-drivers) para revivir la pantalla.

:::

### Para MAC

:::caution
**Necesitas instalar [homebrew](https://brew.sh/) antes de continuar con los siguientes pasos.**
Abre una terminal y escribe ```brew -V``` para comprobar si has configurado correctamente el entorno de homebrew, deberías ver la versión del entorno de homebrew que has instalado.
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

- **Paso 6.** Conecta reTerminal a tu ordenador Mac mediante un cable USB Type-C

- **Paso 7.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [this link](https://www.raspberrypi.org/software/)

- **Paso 8.** Abre la aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un hostname, habilitar SSH, establecer una contraseña, configurar wifi, establecer la configuración regional** y más

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 12.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.

- **Paso 13.** Cambia el **Boot Mode switch** de nuevo a la posición original

Ahora puedes saltar a **[here](#install-drivers)**

:::note

Una vez que hayas terminado los pasos anteriores y hayas vuelto a aplicar la alimentación al reTerminal DM, deberías notar que el LED de encendido se enciende de color amarillo y el LED ACT parpadea de color verde, pero la pantalla está en negro y sin retroiluminación. No te asustes, solo necesitas seguir los pasos de [install drivers](#install-drivers) para revivir la pantalla.

:::

### Para Linux

Usaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de que Git esté instalado

- **Paso 1.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** con el siguiente comando

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **Paso 3.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es el día, y **hh** y **mm** son horas y minutos respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Compila e instala la herramienta usbboot

```sh
make
```

- **Paso 6.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 7.** Conecta reTerminal al PC mediante un cable USB Type-C

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **Paso 11.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

Configura un nombre de host, establece una contraseña, configura el wifi, ajusta la configuración regional

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilitar SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **configurar un nombre de host, habilitar SSH, establecer una contraseña, configurar el wifi, ajustar la configuración regional** y más

- **Paso 11.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 12.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 13.** Finalmente, haz clic en **NEXT** y **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Paso 14.** Vuelve a colocar el **Boot Mode Switch** en la posición original

:::note

Una vez que hayas finalizado los pasos anteriores y hayas vuelto a aplicar la alimentación al reTerminal DM, deberías notar que el LED de encendido se enciende de color amarillo y el LED ACT parpadea de color verde, pero la pantalla está en negro y sin retroiluminación. Por favor, no entres en pánico, solo necesitas seguir los pasos de [install drivers](#instalar-controladores) para revivir la pantalla.

:::

## Instalar controladores

### Acceder al reTerminal DM vía SSH

:::note

Los siguientes pasos requieren algunos conocimientos básicos de la línea de comandos de Linux. Por favor, prepárate una taza de café y ponte listo.

:::

Siguiendo los pasos anteriores de flasheo del sistema operativo, el reTerminal DM debería tener SSH habilitado con el nombre de host `raspberrypi.local`.

Ahora conecta el cable Ethernet al reTerminal DM y a un router que esté en la misma red que tu ordenador host.

:::tip

Para comprobar si tu reTerminal DM está en la misma red que el ordenador host, puedes usar `ping raspberrypi.local`

si ves la siguiente salida después del comando ping significa que ambos dispositivos están en la misma red:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Paso 1.** Abre **Command Prompt** y escribe lo siguiente

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** cuando aparezca el mensaje

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Paso 3.** Introduce la contraseña como se indica a continuación

```sh
raspberry
```

- **Paso 4.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Abre **Terminal** en el ordenador y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 3.** Cuando pida la contraseña, escribe lo siguiente

```sh
raspberry
```

- **Paso 4.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Instalar controladores de reTerminal después de flashear un nuevo Raspbian OS

reTerminal DM viene con los controladores necesarios preinstalados de fábrica, por lo que no necesitas instalar controladores adicionales. Sin embargo, si flasheas un nuevo sistema operativo por tu cuenta, debes instalar los controladores necesarios por separado.

:::tip

**Para instalar el controlador del sistema operativo de 32 bits, sigue cuidadosamente los pasos a continuación:**

El sistema operativo preinstalado en el reTerminal DM es de 64 bits; si deseas instalar un sistema operativo de 32 bits, utiliza el siguiente método para instalar los controladores DTS.

>⚠️Nota: Reinicia tu reTerminal DM después de flashear el sistema operativo de 32 bits.

Sigue el paso de [**Acceder al reTerminal DM vía SSH**](#acceder-al-reterminal-dm-vía-ssh) y luego introduce el siguiente comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Luego continúa con el proceso de [**Instalar controladores después de flashear un nuevo Raspbian OS**](#instalar-reterminal-controladores-después-de-flashear-nuevo-raspbian-os)

Mientras tanto, si estás utilizando la última Raspberry Pi OS oficial de 32 bits, su nuevo kernel es incompatible con este producto, lo que dará lugar a fallos en la actualización de los controladores y a una pantalla en negro. Si realmente necesitas una imagen de sistema operativo de 32 bits para desarrollo, recomendamos utilizar una versión de imagen de 32 bits más antigua.
:::

- **Paso 1.** Clona el siguiente repositorio en la shell ssh con la que te has conectado al reTerminal DM en los pasos anteriores

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
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Paso 4.** Reinicia el reTerminal DM

```sh
sudo reboot
```

Ahora tu pantalla debería encenderse y funcionar con normalidad.

## Preguntas frecuentes (FAQ)

### Orientación de la pantalla táctil

**P: ¿El panel táctil de la pantalla está orientado de forma diferente a la visualización de la pantalla?**

**R: Por favor, sigue cuidadosamente los pasos a continuación:**

Sigue el paso de [acceder al reTerminal DM vía SSH](#acceder-al-reterminal-dm-vía-ssh) y luego introduce el siguiente comando:

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```

Luego reinicia:

```sh
sudo reboot
```

Si la orientación de la pantalla sigue siendo incorrecta, se pueden encontrar opciones adicionales para `ENV{LIBINPUT_CALIBRATION_MATRIX}` [aquí](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html).

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
