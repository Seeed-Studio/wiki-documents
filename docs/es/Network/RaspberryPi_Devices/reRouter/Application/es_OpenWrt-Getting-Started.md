---
description: Introducción a OpenWrt
title: Introducción a OpenWRT
keywords:
- Sorftware OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/OpenWrt-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" alt="pir" width="1000" height="auto"/></p>

OpenWrt es un sistema operativo Linux de código abierto que se ejecuta en dispositivos embebidos/routers. Ofrece más características, rendimiento y seguridad que un router tradicional. Tiene un sistema de archivos completamente escribible e incluye un sistema de gestión de paquetes. Puedes hacer uso de estos paquetes para adaptar tus aplicaciones de varias maneras.

Al usar OpenWrt puedes tener varias características como:

- Aumentar el rendimiento general de la red cuando múltiples dispositivos están conectados
- Compartir archivos entre dispositivos a través de una unidad de almacenamiento externa conectada directamente al router
- Aumentar la seguridad de la red
- Ejecutar un cliente BitTorrent desde el router
- Conectar una impresora directamente al router para crear una impresora en red
- Limitar el uso de ancho de banda de un dispositivo particular en la red
- Gestión activa de colas
- Monitoreo de red en tiempo real
- Crear DNS Dinámico
- Configurar un cliente o servidor VPN

Ahora vamos a sumergirnos en el uso de OpenWrt en la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4 y ODYSSEY - X86J4125.

:::note
Esta guía también funciona para ODYSSEY - X86J4105.
:::

## Hardware Requerido

Necesitas preparar el siguiente hardware antes de comenzar con OpenWRT en la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4 y ODYSSEY - X86J4125

- 1 x [Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
- 1 x [Adaptador de corriente (5V/3A) con cable USB Type-C](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)
- 1 x [ODYSSEY - X86J4125 con el adaptador de corriente incluido](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- 2 x Cables Ethernet

## Configuración Inicial

### Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4

Primero explicaremos cómo instalar y configurar OpenWrt en la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4

#### Flashear Imagen de OpenWrt

Ahora necesitamos flashear la imagen de OpenWrt en el almacenamiento eMMC de la placa para que pueda ejecutarse en el Raspberry Pi Compute Module 4. Una vez que los controladores necesarios estén instalados, solo tienes que conectar el puerto USB Type-C del CM4 a tu PC, y se mostrará como una unidad externa. Sigue los pasos a continuación según tu sistema operativo.

##### Para Windows

- **Paso 1.** Descarga la **última Imagen de OpenWrt** compilada por Seeed para esta placa desde [aquí](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Elige el archivo **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**
:::

- **Paso 2.** Descarga y ejecuta [este instalador](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) para instalar los controladores necesarios y la herramienta de arranque

- **Paso 3.** Busca la herramienta **rpiboot** que instalamos y ábrela

- **Paso 4.** Conecta un cable puente entre los pines **Boot** y **GND** como se muestra a continuación para habilitar el modo BOOT

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **Paso 5.** Conecta la Placa Portadora al PC a través del cable USB Type-C

Windows ahora encontrará el hardware e instalará los controladores necesarios

- **Paso 6.** Abre el **explorador de archivos** y verás el eMMC del Computer Module 4 mostrado como un **dispositivo de almacenamiento masivo USB**

- **Paso 7.** Descarga el software **balenaEtcher** visitando [este enlace](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 8.** Ejecuta **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Paso 9.** Haz clic en **Flash from file** y apunta al archivo de imagen de OpenWrt que descargaste antes

- **Paso 10.** Haz clic en **Select target** y selecciona la unidad eMMC conectada

- **Paso 11.** Finalmente, haz clic en **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

##### Para Mac/Linux

- **Paso 1.** Descarga la **última Imagen de OpenWrt** compilada por Seeed para esta placa desde [aquí](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Elige el archivo **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**
:::

- **Paso 2.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt update
```

- **Paso 3.** Instala **Git** con el siguiente comando

```sh
sudo apt install git
```

- **Paso 4.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

:::note
Donde **MM** es el mes, **DD** es la fecha, y **hh** y **mm** son las horas y minutos respectivamente.
:::

- **Paso 5.** Clona el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 6.** Ingresa lo siguiente para instalar **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

:::note
Para los usuarios de macOS, siga lo siguiente:
```
brew install libusb pkg-config
```
:::

- **Paso 7.** Construir e instalar la herramienta usbboot

```sh
make
```

- **Paso 8.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

- **Paso 9.** Conecta un cable puente entre los pines **Boot** y **GND** como se muestra a continuación para habilitar el modo de programación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **Paso 10.** Conecta la Placa Portadora al PC mediante un cable USB Type-C

- **Paso 11.** Descarga el software **balenaEtcher** visitando [este enlace](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 12.** Ejecuta **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Paso 13.** Haz clic en **Flash from file** y apunta al archivo de imagen de OpenWrt que descargaste anteriormente

- **Paso 14.** Haz clic en **Select target** y selecciona la unidad eMMC conectada

- **Paso 15.** Finalmente, haz clic en **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

#### Conexión de Puertos Dual Gigabit Ethernet

Una vez que OpenWrt haya terminado de flashearse en la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4, puedes conectar cables Ethernet a la placa como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/cm4-ports-2.png" alt="pir" width="600" height="auto"/></p>

La imagen de OpenWrt ya incluye las configuraciones de red necesarias para que los puertos dual Gigabit funcionen de inmediato, por lo que no tienes que configurarlos tú mismo. Sin embargo, aquí hay una explicación de cómo están configurados los 2 puertos.

Un puerto está configurado como una **interfaz LAN** y el otro como una **interfaz WAN**. La interfaz WAN es la que puede conectarse a internet y está configurada como un **cliente DHCP**. Por otro lado, la interfaz LAN es la que puede conectarse a los dispositivos cliente y está configurada como un **servidor DHCP**.

Aquí la interfaz LAN está configurada para que tenga una dirección IP estática de **192.168.2.1**. Sin embargo, si conectas este router OpenWrt a otro router con IP de puerta de enlace predeterminada de 192.168.2.1, es posible que quieras cambiar la dirección IP en la interfaz LAN o de lo contrario OpenWrt tendrá conflicto de IP. ¡Por favor sigue las [FAQ](https://wiki.seeedstudio.com/es/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821) a continuación para aprender más!

### ODYSSEY - X86J4125

A continuación explicaremos cómo instalar y configurar OpenWrt en ODYSSEY - X86J4125

#### Flashear Imagen de OpenWrt

Ahora necesitamos instalar OpenWrt en la eMMC/ HDD/ SSD del ODYSSEY - X86J4125 para que pueda ejecutarse en la placa. Para hacer esto, primero necesitamos crear un USB booteable con la imagen de OpenWrt. Sigue los pasos a continuación

- **Paso 1.** Descarga la **última Imagen de OpenWrt** compilada por Seeed para esta placa desde [aquí](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Elige el archivo **openwrt-x86-64-generic-ext4-combined-efi.img.gz**
:::

- **Paso 2.** Inserta una unidad USB en el PC

- **Paso 3.** Descarga el software **balenaEtcher** visitando [este enlace](https://www.balena.io/etcher) según tu sistema operativo

- **Paso 4.** Ejecuta **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** Haz clic en **Flash from file** y apunta al archivo de imagen de OpenWrt que descargaste anteriormente

- **Paso 6.** Haz clic en **Select target** y selecciona la unidad USB conectada

- **Paso 7.** Finalmente, haz clic en **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

#### Conexión de Puertos Dual Gigabit Ethernet

Una vez que OpenWrt haya terminado de flashearse en la unidad USB, puedes conectar cables Ethernet a la placa como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="700" height="auto"/></p>

La imagen de OpenWrt ya incluye las configuraciones de red necesarias para que los puertos dual Gigabit funcionen de inmediato, por lo que no tienes que configurarlos tú mismo. Sin embargo, aquí hay una explicación de cómo están configurados los 2 puertos.

Un puerto está configurado como una **interfaz LAN** y el otro como una **interfaz WAN**. La interfaz WAN es la que puede conectarse a internet y está configurada como un **cliente DHCP**. Por otro lado, la interfaz LAN es la que puede conectarse a los dispositivos cliente y está configurada como un **servidor DHCP**.

Aquí la interfaz LAN está configurada para que tenga una dirección IP estática de **192.168.2.1**. Sin embargo, si conectas este router OpenWrt a otro router con IP de puerta de enlace predeterminada de 192.168.2.1, es posible que quieras cambiar la dirección IP en la interfaz LAN o de lo contrario OpenWrt tendrá conflicto de IP. ¡Por favor sigue las **FAQ** a continuación para aprender más!

#### Instalar OpenWrt

Ahora que hemos creado una unidad USB booteable anteriormente, continuemos con la instalación de OpenWrt en ODYSSEY - X86J4125

- **Paso 1.** Inserta la unidad USB booteable en la placa ODYSSEY y conecta la placa a una pantalla y un teclado

- **Paso 2.** Enciende la placa y mantén presionado **F7** para entrar a la pantalla del administrador de arranque

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" alt="pir" width="500" height="auto"/></p>

- **Paso 3.** Selecciona el USB booteable y presiona ENTER

Ahora OpenWrt comenzará a ejecutarse en vivo desde la unidad USB.

- **Paso 4.** Enciende la placa, abre un navegador web y escribe **192.168.2.1** en la barra de búsqueda

- **Paso 5.** Una vez que se abra el portal de OpenWrt, navega a **System > FileTransfer**

- **Paso 6.** Haz clic en **Choose File** bajo **Upload** y selecciona la imagen de OpenWrt que descargamos anteriormente

:::note
Asegúrate de que el archivo **.gz** esté extraído al archivo **.img** antes
:::

- **Paso 7.** Haz clic en **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-image-upload.png" alt="pir" width="1000" height="auto"/></p>

Ahora la imagen se guarda en el directorio **/tmp/upload/**

- **Paso 8.** Navega a **System > TTYD Terminal** e inicia sesión con **root** como nombre de usuario

- **Paso 9.** Escribe **lsblk** para listar los dispositivos de almacenamiento conectados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/lsblk.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 10.** Escribe lo siguiente para flashear la imagen de OpenWrt al dispositivo de almacenamiento conectado (eMMC/ HDD/ SSD)

```sh
dd if=/tmp/upload/openwrt-x86-64-generic-ext4-combined-efi.img of=/dev/sda 
```

:::note
**/dev/sda** corresponde al dispositivo de almacenamiento conectado
:::

- **Paso 11.** Una vez que termine de flashear al dispositivo de almacenamiento, reinicia la placa, retira la unidad USB y comenzará a arrancar OpenWrt desde el dispositivo de almacenamiento conectado.

## Ejecutar OpenWrt

Ahora que hemos terminado de configurar el software OpenWrt y los puertos Ethernet Gigabit duales, procederemos a ejecutar OpenWrt en la Placa Portadora Ethernet Gigabit Dual para Raspberry Pi CM4 y ODYSSEY - X86J4125. Esta sección no se dividirá según las 2 placas porque ambas tendrán la misma funcionalidad OpenWrt junto con la misma interfaz web.

Una vez que los cables ethernet estén conectados como antes y la imagen OpenWrt esté flasheada, procede con los pasos a continuación

- **Paso 1.** Enciende la placa

- **Paso 2.** Abre un navegador web y escribe **192.168.2.1**

Verás la interfaz web Luci de OpenWrt aquí. La imagen OpenWrt compilada por Seeed incluye muchos paquetes listos para usar. ¡Así que puedes usar estos paquetes para realizar muchas aplicaciones!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-UI.png" alt="pir" width="1000" height="auto"/></p>

## Ejecutar OpenWrt R23.5

Actualizamos la última versión de OpenWrt para Rerouter, la versión R23.5. Si quieres usar la última versión de OpenWrt, puedes elegir la imagen a continuación.

[Imágenes OpenWrt R23.5](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

Una vez que los cables ethernet estén conectados como antes y la imagen OpenWrt esté flasheada, procede con los pasos a continuación

- **Paso 1.** Enciende la placa

- **Paso 2.** Abre un navegador web y escribe **192.168.1.1**

```text
account: root
password: password
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/R24.7OP-UI.png" alt="pir" width="1000" height="auto"/></p>

## Prueba de Velocidad de Red

Finalmente procederemos a probar las velocidades de red en la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4 y ODYSSEY - X86J4125 con OpenWrt instalado.

### Placa Dual Gigabit como Servidor y ODYSSEY como Cliente

Primero usaremos la Placa Portadora Dual Gigabit Ethernet como servidor y ODYSSEY - X86J4125 como cliente para la prueba de red

:::note
Asegúrate de cambiar la dirección IP de la interfaz LAN en la placa ODYSSEY a **192.168.3.1** [siguiendo esto](https://wiki.seeedstudio.com/es/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821)
:::

- **Paso 1.** Conecta las placas como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-cm4-server.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Abre un navegador web e inicia sesión en ambas placas y accede al terminal como sigue:

**Placa Portadora Dual Gigabit Ethernet**

- Escribe **192.168.2.1** en la barra de búsqueda del navegador web

- Navega a **System > TTYD Terminal** e inicia sesión con **root** como nombre de usuario

**ODYSSEY - X86J4125/ X86J4105**

- Escribe **192.168.3.1** en la barra de búsqueda del navegador web

- Navega a **System > TTYD Terminal** e inicia sesión con **root** como nombre de usuario

:::note
Asegúrate de que ambos dispositivos no estén en el mismo rango de IP en la interfaz LAN
:::

- **Paso 3.** Instala la herramienta de prueba de rendimiento de red **iperf3** en ambos dispositivos

```sh
opkg update
opkg install iperf3
```

- **Paso 4.** En la ventana **Terminal TTYD** de la Dual Gigabit Ethernet Carrier Board, escribe lo siguiente para iniciar iperf3 como servidor

```sh
iperf3 -s
```

- **Paso 5.** En la ventana **Terminal TTYD** de ODYSSEY - X86J4125, escribe lo siguiente para iniciar iperf3 como cliente y conectarte al servidor creado anteriormente

```sh
iperf3 -c 192.168.2.1
```

:::note
Aquí se escribe la dirección IP del servidor de la Placa Dual Gigabit
:::

Ahora verás los resultados de la prueba de velocidad de red como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-CM4-server.png
" alt="pir" width="1000" height="auto"/></p>

:::note
Aquí puedes ver que la velocidad está cerca de 1Gbps
:::

### ODYSSEY como Servidor y Placa Dual Gigabit como Cliente

Ahora usaremos ODYSSEY - X86J4125 como servidor y la Placa Portadora Dual Gigabit Ethernet como cliente para la prueba de red

- **Paso 1.** Conecta las placas como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-odyssey-server.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** En la ventana **Terminal TTYD** de ODYSSEY - X86J4125, escribe lo siguiente para iniciar iperf3 como servidor

```sh
iperf3 -s
```

- **Paso 3.** En la ventana **Terminal TTYD** de la Placa Portadora Dual Gigabit Ethernet, escriba lo siguiente para iniciar iperf3 como cliente y conectarse al servidor creado anteriormente

```sh
iperf3 -c 192.168.3.1
```

:::note
Aquí se escribe la dirección IP del servidor ODYSSEY-X86
:::

Ahora verás los resultados de la prueba de velocidad de red como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-X86-server.png" alt="pir" width="1000" height="auto"/></p>

:::note
Aquí puedes ver que la velocidad está cerca de 1Gbps
:::

## FAQ

Para más detalles, por favor haz clic [**aquí**](/es/FAQs_For_openWrt)

## Recursos

- **[Página Web]** [Documentación Oficial de OpenWrt](https://openwrt.org)

- **[GitHub]** [Seeed OpenWrt](https://github.com/Seeed-Studio/seeed-linux-openwrt)

- **[OneDrive]** [Imágenes de Seeed OpenWrt](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

- **[Descarga]** [Imágenes OpenWrt R23.5](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

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
