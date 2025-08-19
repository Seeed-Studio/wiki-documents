---
description: Flashear SO a la reComputer R1000
title: Flashear SO a la reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - Flash OS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01_1.webp
slug: /es/recomputer_r1000_flash_OS
last_update:
  date: 02/18/2025
  author: Erick González
---
#  reComputer R1000 de Raspbian OS a eMMC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
    </a>
</div>

<br />

El controlador IoT de borde reComputer R1000 está basado en la plataforma de alto rendimiento Raspberry Pi CM4, que cuenta con un procesador de cuatro núcleos A72 y admite hasta 8GB de RAM y 32GB de eMMC. Equipado con dos interfaces Ethernet configurables de manera flexible, también incluye 3 canales RS485 aislados que admiten los protocolos BACnet, Modbus RTU, Modbus TCP/IP y KNX.

Con sólidas capacidades de comunicación en redes IoT, la serie R1000 admite múltiples opciones de comunicación inalámbrica, incluyendo 4G, LoRa®, Wi-Fi/BLE, permitiendo configuraciones flexibles para operar como gateways inalámbricos específicos. Este controlador es ideal para la gestión remota de dispositivos, gestión energética y diversas aplicaciones en el campo de los edificios inteligentes.

## Requisitos de Hardware

Debes preparar el siguiente hardware:

- reComputer R1000 x 1
- Computadora Host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO
- Cable USB Tipo-C x 1

## Requisitos de Software

- [Herramienta usbboot](https://github.com/raspberrypi/usbboot)
- [Aplicación Raspberry Pi Imager](https://www.raspberrypi.com/software/)

## Pasos para Flashear el Sistema Operativo Raspbian

- **Paso 1.** Asegúrate de que el interruptor esté configurado en `Modo Flash` según el siguiente diagrama:

<div class="table-center">

| Posición del Interruptor                                             | Modo         | Descripción         | nRPI-BOOT |
| --------------------------------------------------------------------- | ------------ | ------------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="imagen" width="80"/> | Modo Normal  | Arranque desde eMMC | Bajo      |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="imagen" width="80"/>  | Modo Flash   | Arranque desde USB  | Alto      |

</div>

- **Paso 2.** Conecta el cable de datos USB Tipo-C al puerto Tipo-C del reComputer R1000, como se muestra en la imagen siguiente:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

- **Paso 3.** Conecta el cable de alimentación desde la fuente de poder al puerto de alimentación del reComputer R1000.

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img 
        width="100" 
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" 
        style={{ transform: 'rotate(90deg)' }} 
    />
</div>

<br></br>

:::note
La solución de alimentación utiliza un diodo rectificador en puente para protección contra polaridad inversa y es compatible con entradas tanto de CA como de CC. Esto garantiza que, independientemente de cómo se conecten los terminales positivo y negativo de la fuente de alimentación, el circuito no sufrirá daños. Al usar un puente rectificador, la polaridad de la tensión de salida permanece fija sin importar la polaridad de entrada de CC, proporcionando una protección efectiva contra la polaridad inversa.
:::

Ahora continuemos con la configuración del software en tu computadora host. Sigue los pasos según el sistema operativo deseado.

### Para Windows

- **Paso 1.** Descarga el instalador de **rpiboot setup** haciendo clic **[aquí](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque.

- **Paso 2.** Conecta el reComputer R1000 a la PC mediante el cable USB Tipo-C.

Windows detectará el hardware e instalará los controladores necesarios.

- **Paso 3.** Busca la herramienta **rpiboot** instalada previamente y ábrela.

- **Paso 4.** Abre **Explorador de archivos** y verás la eMMC del Compute Module 4 como un **dispositivo de almacenamiento USB**.

- **Paso 5.** Descarga el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**.

- **Paso 6.** Abre el software Raspberry Pi Imager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 7.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, configurar una contraseña, configurar WiFi, establecer la configuración de región**, y más.

:::note
El sistema tiene un nombre de usuario y contraseña preconfigurados. Al iniciar sesión, establece el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**". Si configuras credenciales diferentes y experimentas problemas, vuelve a flashear el sistema operativo si adquiriste la primera versión del reComputer R1000.
:::


- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros sistemas operativos como **Ubuntu de 64 bits** navegando en **Other general purpose OS**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

También puedes utilizar este enlace para descargar la imagen del sistema operativo:

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 10.** Finalmente, haz clic en **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que finalice el proceso de flasheo.

- **Paso 11.** Vuelve a colocar el interruptor **Boot Mode** en la posición **Modo Normal**.

Ahora puedes saltar a **[aquí](#install-drivers)**.


### Para MAC

:::caution
**Debes instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Abre una terminal y escribe ```brew -V``` para verificar si tienes el entorno de homebrew correctamente configurado. Deberías ver la versión del homebrew instalado.
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

- **Paso 6.** Conecta el reComputer R1000 a tu Mac mediante un cable USB Tipo-C.

- **Paso 7.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/).

- **Paso 8.** Abre la aplicación **Raspberry Pi Imager**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, configurar una contraseña, configurar WiFi, establecer la configuración de región**, y más.

:::note
El sistema tiene un nombre de usuario y contraseña preconfigurados. Al iniciar sesión, establece el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**". Si configuras credenciales diferentes y experimentas problemas, vuelve a flashear el sistema operativo si adquiriste la primera versión del reComputer R1000.
:::

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros sistemas operativos como **Ubuntu de 64 bits** navegando en **Other general purpose OS**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

También puedes utilizar este enlace para descargar la imagen del sistema operativo:

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 12.** Finalmente, haz clic en **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que finalice el proceso de flasheo.

- **Paso 13.** Vuelve a colocar el interruptor **Boot Mode** en la posición **Modo Normal**.

Ahora puedes saltar a **[aquí](#install-drivers)**.


### Para Linux

Usaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de que Git esté instalado.

- **Paso 1.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**:

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** con el siguiente comando:

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Paso 3.** Git podría generar un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregirlo:

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es el día, y **hh** y **mm** son las horas y minutos, respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**:

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Compila e instala la herramienta usbboot:

```sh
make
```

- **Paso 6.** Conecta el reComputer R1000 a la PC mediante un cable USB Tipo-C.

- **Paso 7.** Ejecuta la herramienta usbboot y esperará una conexión:

```sh
sudo ./rpiboot
```

El resultado se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 8.** Instala **snap**:

```sh
sudo apt install snap
```

- **Paso 9.** Descarga **rpi-imager**:

```sh
snap install rpi-imager
```

- **Paso 10.** Abre el software Raspberry Pi Imager:

```sh
rpi-imager
```

El resultado se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**.

Aquí puedes **establecer un nombre de host, habilitar SSH, configurar una contraseña, configurar WiFi, establecer la configuración de región**, y más.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilitar SSH:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

:::note
El sistema tiene un nombre de usuario y contraseña preconfigurados. Al iniciar sesión, establece el nombre de usuario predeterminado como "**recomputer**" y la contraseña predeterminada como "**12345678**". Si configuras credenciales diferentes y experimentas problemas, vuelve a flashear el sistema operativo si adquiriste la primera versión del reComputer R1000.
:::

- **Paso 11.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTA:** Puedes seleccionar otros sistemas operativos como **Ubuntu de 64 bits** navegando en **Other general purpose OS**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

También puedes utilizar este enlace para descargar la imagen del sistema operativo:

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 12.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 13.** Finalmente, haz clic en **NEXT** y **YES**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que finalice el proceso de flasheo. El resultado se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Paso 14.** Vuelve a colocar el interruptor **Boot Mode** en la posición **Modo Normal**.

## Instalación de Controladores

### Acceder al reComputer R1000 vía SSH

:::note
Los siguientes pasos requieren conocimientos básicos de la línea de comandos de Linux. Te recomendamos prepararte con una taza de café y estar listo.
:::

Siguiendo los pasos anteriores para flashear el sistema operativo, el reComputer R1000 debería tener SSH habilitado con el nombre de host `raspberrypi.local`.

Ahora, conecta el cable Ethernet al reComputer R1000 y a un router que esté en la misma red que tu computadora host.

:::tip
Para comprobar si tu reComputer R1000 está en la misma red que la computadora host, puedes usar el comando `ping raspberrypi.local`.

Si ves el siguiente resultado después del comando ping, significa que ambos dispositivos están en la misma red:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Paso 1.** Abre **Símbolo del sistema** y escribe lo siguiente:

```sh
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** cuando se te solicite confirmación.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Paso 3.** Introduce la siguiente contraseña:

```sh
raspberry
```

- **Paso 4.** Si iniciaste sesión correctamente en Raspberry Pi OS, verás la siguiente salida:

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Abre **Terminal** en la computadora y escribe lo siguiente:

```sh
# ssh usuario@nombre_host
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** cuando aparezca el siguiente mensaje:

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 3.** Cuando se te pida la contraseña, ingresa lo siguiente:

```sh
# contraseña para el usuario
raspberry
```

- **Paso 4.** Si iniciaste sesión correctamente en Raspberry Pi OS, verás la siguiente salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>


### Instalar los controladores de reComputer R1000 después de flashear un nuevo sistema operativo Raspbian

El reComputer R1000 viene con los controladores necesarios preinstalados de fábrica, por lo que no es necesario instalar controladores adicionales. Sin embargo, si flasheas un nuevo sistema operativo por tu cuenta, necesitarás instalar los controladores necesarios por separado.

:::tip

**Para instalar controladores en un sistema operativo de 32 bits, sigue cuidadosamente los pasos a continuación:**

El sistema operativo preinstalado en el reComputer R1000 es de 64 bits. Si deseas instalar un sistema operativo de 32 bits, usa el siguiente método para instalar los controladores DTS.

Sigue los pasos de [**Acceder al reComputer R1000 vía SSH**](#access-recomputer-r1000-via-ssh), y luego ingresa el siguiente comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Después, continúa con el proceso de [**Instalación de controladores después de flashear un nuevo sistema operativo Raspbian**](#install-recomputer-r1000-drivers-after-flashing-new-raspbian-os).

:::

- **Paso 1.** Clona el siguiente repositorio en la sesión SSH conectada al reComputer R1000:

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Paso 2.** Ingresa al repositorio:

```sh
cd seeed-linux-dtoverlays
```

- **Paso 3.** Escribe el siguiente comando para instalar los controladores:

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R100x
```

- **Paso 4.** Reinicia el reComputer R1000:

```sh
sudo reboot
```

Este proceso garantizará que los controladores estén actualizados antes de proceder con la actualización del firmware.

Para reComputer R1000 V1.0, es necesario modificar el archivo `/boot/firmware/config.txt` después de reiniciar. Para ello, ingresa el siguiente comando:

```shell
sudo nano /boot/firmware/config.txt
```

Modifica el contenido final del archivo a lo siguiente:

```shell
  enable_uart=1
  dtoverlay=dwc2,dr_mode=host
  dtoverlay=vc4-kms-v3d
  dtoverlay=reComputer-R100x,uart2
```

Luego, reinicia el sistema con el siguiente comando:

```shell
sudo reboot
```

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer distintas preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
