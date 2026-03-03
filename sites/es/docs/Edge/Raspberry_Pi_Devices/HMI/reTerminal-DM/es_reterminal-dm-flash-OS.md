---
description: reTerminal DM Flash OS
title: reTerminal DM Flash OS
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
---
# reTerminal DM Flash Raspbian OS a eMMC

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM es un HMI industrial de código abierto de 10.1" - un Maestro de Dispositivo Integrado para unificar el flujo de datos y gestionar el dispositivo en sitio.

Basado en Raspberry Pi CM4, y como un dispositivo todo-en-uno Panel PC, HMI, PLC, Gateway IIoT, reTerminal DM es una nueva generación de hub de detección interactivo con una pantalla grande de grado industrial IP65.

Está equipado con rica escalabilidad y conectividad híbrida, soportando bus CAN, RS485, RS232, puerto Gigabit Ethernet, y otras interfaces, así como potentes capacidades de comunicación inalámbrica como 4G, LoRa®, WiFi, y BLE.

> \*Los módulos 4G y LoRa® no vienen con reTerminal DM por defecto, por favor compre los módulos relevantes en consecuencia, para
> [paquete 4G](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::note
El Sensecraft Edge OS se puede descargar desde [**Aquí**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download), por favor tenga en cuenta que este Sensecraft Edge OS está actualmente desarrollado basado en reTerminal DM y solo funciona con la versión de Producción de reTerminal DM
:::

## Requisitos de Hardware

Necesita preparar el siguiente hardware

- reTerminal DM x 1
- Computadora Host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB Type-C x 1

## Requisitos de Software

- [herramienta usbboot](https://github.com/raspberrypi/usbboot)
- [APP Raspberry Pi Imager](https://www.raspberrypi.com/software/)

## Pasos para Flashear Raspbian OS

> **Nota:** La imagen del sistema más reciente empaquetada por Seeed, incluyendo los controladores apropiados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Paso 1.** Voltee el `interruptor de modo de arranque` ubicado junto al puerto USB Type-C, asegúrese de que el interruptor esté configurado para `deshabilitar modo de arranque eMMC` según el diagrama a continuación:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **Paso 2.** Por favor use el cable de datos USB Type-C para conectar al puerto Type-C en el reTerminal DM, como se muestra en la imagen anterior,

- **Paso 3.** Por favor conecte el Cable de Alimentación desde la fuente de alimentación al puerto de alimentación del reTerminal DM.
  
:::danger

Por favor asegúrese de haber conectado el cable de alimentación con la polaridad correcta.

:::
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

Ahora pasemos a la configuración del software en su computadora host. Por favor siga los pasos según su sistema operativo deseado

### Para Windows

- **Paso 1.** Descargue el **instalador de configuración rpiboot** haciendo clic **[aquí](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque

- **Paso 2.** Conecte reTerminal DM a la PC vía cable USB Type-C

Windows ahora encontrará el hardware e instalará los controladores necesarios

- **Paso 3.** Busque la herramienta **rpiboot** que instalamos antes y ábrala

- **Paso 4.** Abra el **explorador de archivos** y verá la eMMC del Módulo de Computadora 4 mostrada como un **dispositivo de almacenamiento masivo USB**

- **Paso 5.** Descargue el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**

- **Paso 6.** Abra el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 7.** Presione **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puede **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wiFi, establecer configuraciones locales** y más

- **Paso 8.** Haga clic en **ELEGIR OS** y seleccione su OS preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puede seleccionar otro OS como **Ubuntu de 64 bits** navegando a **Otro OS de propósito general**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Haga clic en **ELEGIR ALMACENAMIENTO** y seleccione la unidad eMMC conectada

- **Paso 10.** Finalmente, haga clic en **ESCRIBIR**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espere unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 11.** Voltee el **interruptor de Modo de Arranque** de vuelta a la posición original

Ahora puede saltar a **[aquí](#install-drivers)**

:::note

Una vez que los pasos anteriores hayan terminado y haya reaplicado la alimentación al reTerminal DM, el LED de Alimentación debería encenderse en color amarillo y el LED ACT debería parpadear en color verde, pero la pantalla está en blanco y sin retroiluminación. por favor no entre en pánico, solo necesita seguir los pasos de [instalar controladores](#install-drivers) para revivir la pantalla.

:::

### Para MAC

:::caution
**Necesita instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Por favor abra una terminal y escriba ```brew -V``` para verificar si ha configurado el entorno homebrew correcto, debería ver la versión del entorno homebrew que ha instalado.
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

- **Paso 6.** Conecta reTerminal a tu computadora Mac mediante un cable USB Type-C

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

Por favor espera unos minutos hasta que el proceso de grabación esté completo.

- **Paso 13.** Cambia el **interruptor de modo de arranque** de vuelta a la posición original

Ahora puedes saltar a **[aquí](#install-drivers)**

:::note

Una vez que los pasos anteriores hayan terminado y hayas vuelto a aplicar la energía al reTerminal DM, deberías experimentar que el LED de encendido debería encenderse de color amarillo y el LED ACT debería parpadear de color verde, pero la pantalla está en blanco y sin retroiluminación. por favor no entres en pánico, solo necesitas seguir los pasos de [instalar controladores](#install-drivers) para revivir la pantalla.

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

**NOTA:** Donde **MM** es el mes, **DD** es la fecha, y **hh** y **mm** son horas y minutos respectivamente.

- **Paso 4.** Clonar el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Construir e instalar la herramienta usbboot

```sh
make
```

- **Paso 6.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 7.** Conecta reTerminal a la PC mediante cable USB Type-C

- **Paso 8.** Descarga snap

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **Paso 11.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

Establece un nombre de host, establece una contraseña, configura wifi, establece configuraciones de idioma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilita SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **Paso 11.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 12.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 13.** Finalmente, haz clic en **NEXT** y **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Paso 14.** Cambia el **Boot Mode Switch** de vuelta a la posición original

:::note

Una vez que los pasos anteriores hayan terminado y hayas vuelto a aplicar la energía al reTerminal DM, deberías experimentar que el LED de encendido debería encenderse en color amarillo y el LED ACT debería parpadear en color verde, pero la pantalla está en blanco y sin retroiluminación. por favor no entres en pánico, solo necesitas seguir los pasos de [instalar controladores](#install-drivers) para revivir la pantalla.

:::

## Instalar Controladores

### Acceder al reTerminal DM vía SSH

:::note

Los siguientes pasos requieren algunos conocimientos básicos de línea de comandos de Linux, Por favor prepárate una taza de café y prepárate.

:::

Siguiendo los pasos anteriores de flasheo del SO, el reTerminal DM debería tener SSH habilitado con el nombre de host de `raspberrypi.local`.

Ahora por favor conecta el cable Ethernet al reTerminal DM y a un router que esté en la misma red que tu computadora host.

:::tip

Para probar si tu reTerminal DM está en la misma red con la computadora host, puedes usar `ping raspberrypi.local`

si ves la siguiente salida después del comando ping lo cual significa que ambos dispositivos están en la misma red:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Paso 1.** Abre **Símbolo del sistema** y escribe lo siguiente

```sh
# ssh username@hostname
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
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **sí** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 3.** Cuando solicite la contraseña, escribe lo siguiente

```sh
raspberry
```

- **Paso 4.** Si has iniciado sesión exitosamente en el SO Raspberry Pi, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Instalar controladores de reTerminal después de flashear un nuevo SO Raspbian

reTerminal DM viene con los controladores necesarios preinstalados de fábrica, por lo que no necesitas instalar controladores adicionales. Sin embargo, si flasheas un nuevo SO por tu cuenta, necesitas instalar los controladores necesarios por separado.

:::tip

**Para instalar el controlador de SO de 32 bits, por favor sigue cuidadosamente los pasos a continuación:**

El Sistema Operativo que viene preinstalado en reTerminal DM es de 64 bits, si deseas instalar un SO de 32 bits por favor usa el siguiente método para instalar los controladores DTS.

>⚠️Nota : Por favor reinicia tu reTerminal DM después de flashear el SO de 32 bits.

Por favor sigue el paso [**Acceder a reTerminal DM vía SSH**](#access-reterminal-dm-via-ssh), y luego ingresa el siguiente comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Luego continúa con el [**proceso de instalación de controladores después de flashear el nuevo SO Raspbian**](#install-reterminal-drivers-after-flashing-new-raspbian-os)

:::

- **Paso 1.** Clona el siguiente repositorio en el shell ssh que has conectado al reTerminal DM desde los pasos anteriores

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
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- Verás la siguiente salida si has instalado exitosamente los controladores

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Paso 4.** Reinicia el reTerminal DM

```sh
sudo reboot
```

Ahora tu pantalla debería encenderse y funcionar normalmente.

## FAQ

### Orientación de la pantalla táctil

**P: ¿El panel táctil de la pantalla está orientado de manera diferente a la visualización de la pantalla?**

**R: Por favor sigue cuidadosamente los pasos a continuación:**

Por favor sigue el paso [acceder a reTerminal DM vía SSH](#access-reterminal-dm-via-ssh), y luego ingresa el siguiente comando:

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```

Luego reinicia:

```sh
sudo reboot
```

Si la orientación de la pantalla sigue siendo incorrecta, se pueden encontrar opciones adicionales para `ENV{LIBINPUT_CALIBRATION_MATRIX}` [aquí](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html).

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
