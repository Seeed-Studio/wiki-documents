---
description: reRouter carrier board
title: reRouter carrier board
keywords:
- Device
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4
last_update:
  date: 06/06/2022
  author: Guillermo
---


# Introducción a la Placa Carrier con Doble Ethernet Gigabit para Raspberry Pi Compute Module 4

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/thumb.png" alt="pir" width="600" height="auto"/></p>

La placa carrier con doble Ethernet Gigabit, impulsada por Raspberry Pi Compute Module 4, cuenta con dos puertos Ethernet Gigabit y dos puertos USB 3.0, lo que la hace adecuada para aplicaciones de routers software, manteniendo el hardware al mínimo.

Incluye una variedad de periféricos de entrada/salida como MIPI CSI, MIPI DSI, micro-HDMI para conectar pantallas/cámaras, un header estándar USB 3.0 de 9 pines para más expansión USB, una ranura para tarjeta micro-SD y un conector FPC, ¡todo ello manteniendo un factor de forma compacto! Esta placa es ideal para creadores de HTPC, desarrolladores Linux, entusiastas de routers software y la mayoría de usuarios regulares de Raspberry Pi.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Tamaño compacto (75x64x21mm) con múltiples periféricos de E/S
- Conectores Dual Gigabit Ethernet para aplicaciones de routers software
- Conectividad para cámara/pantalla mediante interfaces MIPI CSI, MIPI DSI y micro-HDMI
- USB 3.0 dual a bordo con un header adicional USB 3.0 de 9 pines para más puertos externos
- Ranura para tarjeta Micro-SD para cargar imagen del sistema en versiones CM4 sin eMMC
- Mayor capacidad de expansión mediante conector FPC (I2C, SPI)
- Soporte para ventilador externo con conector de alimentación para ventilador
- Alimentación mediante USB Tipo-C

## Especificaciones

| Especificación | Detalles |
|-|-|
| Redes | Conectores Dual Gigabit Ethernet |
| USB 3.0 a GbE<br />(Puente Ethernet Gigabit) | LAN7800 de Microchip |
| USB | 2 puertos USB 3.0<br />1 header USB 3.0 de 9 pines  |
| Almacenamiento | Ranura para tarjeta Micro-SD (carga de imagen sistema para versión CM4 sin eMMC) |
| Cámara | 1 conector MIPI CSI |
| Pantalla | 1 conector MIPI DSI<br />1 conector Micro HDMI |
| FPC | Interfaz para I2C y SPI |
| Ventilador Externo | Conector de alimentación para ventilador |
| Alimentación | 5V/3A mediante puerto USB Tipo-C |
| Dimensiones | 75x64x21mm |
| Peso | 43g |


:::caution
Debido al alto nivel de integración de este producto, debe usarse con un [disipador para CM4](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html). De lo contrario, puede causar inestabilidad en USB o Ethernet.
:::

## Vista General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/hw-overview.png" alt="pir" width="900" height="auto"/></p>

## Introducción al Hardware

### Interfaz de 200 pines para Raspberry Pi Compute Module 4

Esta placa carrier tiene una **interfaz de 200 pines** con 2 filas de 100 pines cada una, para que puedas conectar un [Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-CM4001000-p-4720.html) y realizar tus proyectos.

#### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CM4.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/CM4.png) para una imagen en mayor resolución

### Puertos Dual Gigabit Ethernet

Esta placa cuenta con **2 puertos Gigabit Ethernet (RJ45)**. Un puerto está conectado al **PHY Gigabit Ethernet** del módulo CM4 basado en el **Broadcom BCM54210PE**. Por otro lado, el otro puerto Gigabit Ethernet está conectado al **LAN7800 de Microchip**, que es un **puente USB 3.0 a GbE (Ethernet Gigabit)**. La interfaz **USB 3.0** proviene de la interfaz **PCIe** del módulo CM4. Ambos puertos soportan velocidades de hasta 1 Gbps.

#### Esquemas de los puertos Dual Gigabit Ethernet

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RJ45.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/RJ45.png) para una imagen en mayor resolución

#### Esquemas del puente USB 3.0 a GbE (Ethernet Gigabit)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN7800.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/LAN7800.png) para una imagen en mayor resolución

### Interfaz de Cámara CSI

Cuenta con una **interfaz de cámara MIPI CSI**, que permite conectar una cámara mediante un cable flexible CSI de 15 pines. Esta interfaz se puede usar para detección de objetos y aplicaciones de aprendizaje automático.

#### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CSI.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/CSI.png) para una imagen en mayor resolución

### Interfaz de Pantalla DSI

Cuenta con una **interfaz de pantalla MIPI DSI**, que permite conectar una pantalla mediante un cable flexible DSI de 15 pines. Esta interfaz se puede usar para interactuar con la placa carrier.

#### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/DSI.png) para una imagen en mayor resolución

### Interfaz FPC

Hay una interfaz **FPC de 8 pines** en esta placa carrier con paso de 0.5mm H2.5. Puedes usar esta interfaz para conectar hardware adicional como cámaras y pantallas a la placa.

#### Especificaciones

- Corriente nominal: 0.5A
- Voltaje nominal: 50V
- Voltaje soportado: 500V
- Resistencia de contacto: 20mΩ
- Resistencia de aislamiento: 800mΩ
- Temperatura de trabajo: -20°C ~ +85°C

#### Esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_Schematics.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

### Puertos USB 3.0 Dobles y Header de 9 Pines

El Compute Module 4 tiene nativamente solo una interfaz **USB 2.0**. Sin embargo, hemos usado la interfaz **PCIe** existente en el CM4 y la hemos expandido a una interfaz **USB 3.0 con 2 puertos USB 3.0**. Estos puertos USB ofrecen una velocidad de transferencia de hasta 5 Gbps.

Adicionalmente, hay un **header USB 3.0 de 9 pines** que permite conectar más dispositivos USB.

Primero puedes conectar un [adaptador hembra de 9 pines a hembra de 20 pines](https://www.amazon.com/SIENOC-Female-Motherboard-Housing-Adapter/dp/B00EOI3VC8/ref=sr_1_4?dchild=1&keywords=9+pin+to+20+pin&qid=1630315040&sr=8-4) al header de 9 pines de esta placa y luego conectar un [adaptador macho de 20 pines a USB3.0](https://www.amazon.com/Motherboard-Adapter-Header-Convert-Female/dp/B071NZHWHG/ref=sr_1_9?dchild=1&keywords=20-pin+usb3.0&qid=1630315493&sr=8-9) al adaptador anterior. Necesitamos estos dos productos porque actualmente no hay adaptadores de 9 pines a USB 3.0 disponibles en el mercado, solo existen adaptadores de 9 pines a USB 2.0.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/USB-pins.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Si quieres conectar un [ventilador de 5V](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html) a esta placa usando **cables jumper**, puedes conectar el **extremo positivo (+)** del ventilador a **VBUS** y el **extremo negativo (-)** a los pines **GND**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/fan-connect.jpg" alt="pir" width="1000" height="auto"/></p>

#### Esquemáticos del USB 3.0 HOST

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/USB3.0.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/USB3.0.png) para ver la imagen en mayor resolución

#### Esquemáticos de PCIe a USB 3.0

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png) para ver la imagen en mayor resolución

### Puerto Micro HDMI

Hay un puerto micro HDMI en la placa carrier y puedes usarlo para conectar pantallas HDMI mediante un **cable micro HDMI a HDMI estándar**. Soporta video hasta resolución 4K a 60fps.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png) para ver la imagen en mayor resolución

### UART IO

Hay una **interfaz de 4 pines** en la placa carrier para **comunicaciones UART**. Puedes usar esta interfaz para **iniciar sesión** directamente en el **Raspberry Pi OS** usando un **cable adaptador USB a serial**. Tiene los pines: **TX, RX, 3V3, GND**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

### Pin de Modo de Arranque (Boot Mode)

Esta **interfaz de 3 pines** se usa cuando quieres que la placa carrier funcione como un **dispositivo USB**. Una vez que conectes en corto los pines **GND** y **BOOT**, puedes acceder al **almacenamiento eMMC** o a la **tarjeta micro-SD** usando una **PC HOST**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

### Botón de Reset

Este botón se usa para **reiniciar** el CM4. Actúa como un **reinicio por hardware**.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RESET.png" alt="pir" width="650" height="auto"/></p>

### Ranura para Tarjeta Micro-SD

Esta placa cuenta con una **ranura para tarjeta micro-SD**. Es útil cuando quieres **instalar el sistema operativo** en una micro-SD, mientras usas el **módulo CM4 sin eMMC**. Se recomienda usar una tarjeta con un mínimo de 8GB.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro_SD.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/micro_SD.png) para ver la imagen en mayor resolución

### Puerto USB Tipo-C

El **Puerto USB Tipo-C** en la placa carrier puede usarse para **alimentar la placa con 5V/3A**. También puede usarse para funcionar como un **Dispositivo USB**, conectando la placa carrier a una **PC HOST** donde actuará como un **Dispositivo de almacenamiento masivo USB**. Desde la PC podrás acceder al **eMMC integrado** y a la **tarjeta micro-SD conectada** de la placa carrier.

#### Esquemáticos de USB Tipo-C como Dispositivo USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/type-c.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/type-c.png) para ver la imagen en mayor resolución

#### Esquemáticos de Gestión de Energía

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/power-manage.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/power-manage.png) para ver la imagen en mayor resolución

### Conector de Ventilador de 4 Pines

Puedes conectar un **ventilador PWM de 4 pines** a este conector y controlarlo mediante software.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Fan.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/Fan.png) para ver la imagen en mayor resolución

### LEDs de Energía y Funcionamiento

La placa carrier tiene 3 LEDs. Uno indica que está encendida y se ilumina en **azul**, mientras que los otros 2 LEDs indican el estado de funcionamiento de la placa y se iluminan en **verde** y **blanco**.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LEDs.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/LEDs.png) para ver la imagen en mayor resolución

## Comenzando - Hardware Requerido

Necesitas preparar el siguiente hardware antes de empezar con la Placa Carrier Dual Gigabit Ethernet para RPi CM4

- Placa Carrier Dual Gigabit Ethernet para RPi CM4
- Tarjeta micro-SD de 16GB (o más)
- Lector de tarjetas micro-SD
- Computadora (PC/Mac/Linux)
- Adaptador de corriente (5V/3A)
- Cable USB Tipo-C
- Convertidor USB a serial, cable Ethernet (opcional)

## Comenzando - Configuración de Software

### Flashear Raspberry Pi OS

Ahora necesitamos flashear **Raspberry Pi OS** en una **tarjeta micro-SD (para la versión sin eMMC)** o en el **almacenamiento eMMC (para la versión con eMMC)**, para que pueda correr en el Raspberry Pi Compute Module 4.

#### Flashear a Tarjeta Micro-SD (Versión CM4 sin eMMC)

Si tienes un Compute Module 4 sin eMMC, entonces necesitas insertar una tarjeta micro-SD y flashear el Raspberry Pi OS. Sigue los pasos a continuación según tu sistema operativo.

- **Paso 1.** Inserta una tarjeta micro-SD en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector incorporado** en una laptop.

- **Paso 2.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

**Nota:** Puedes elegir descargar para **Windows, Mac o Ubuntu**

- **Paso 3.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona la versión más reciente del **Raspberry Pi OS (32-bit)**

- **Paso 5.** Haz clic en **CHOOSE STORAGE** y selecciona la tarjeta micro-SD conectada

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo termine.

#### Flashear a eMMC (Versión CM4 con eMMC)

Si tienes un Compute Module 4 con eMMC, puedes flashear directamente el Raspberry Pi OS al almacenamiento eMMC. Una vez que los controladores necesarios estén instalados, solo tienes que conectar el puerto USB Tipo-C del CM4 a tu PC, y aparecerá como una unidad externa. Sigue los pasos a continuación según tu sistema operativo.

##### Para Windows

- **Paso 1.** Descarga y ejecuta [este instalador](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) para instalar los controladores necesarios y la herramienta de arranque.

- **Paso 2.** Conecta un cable jumper entre los pines **Boot** y **GND** como se muestra a continuación para habilitar el modo de programación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Conecta la placa carrier a la PC mediante un cable USB Tipo-C.

Windows detectará el hardware e instalará los controladores necesarios.

- **Paso 4.** Busca la herramienta **rpiboot** que instalamos anteriormente y ábrela.

- **Paso 5.** Abre el **explorador de archivos** y verás que el eMMC del Compute Module 4 aparece como un **dispositivo de almacenamiento masivo USB**.

- **Paso 6.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 7.** Abre el software Raspberry Pi Imager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona la versión más reciente de **Raspberry Pi OS (32-bit)**.

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 10.** Finalmente, haz clic en **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que finalice el proceso de flasheo.

##### Para Mac/Linux

Usaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de tener Git instalado.

- **Paso 1.** Abre una ventana de la **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** con el siguiente comando

```sh
sudo apt install git
```

- **Paso 3.** Git podría generar un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es el día, y **hh** y **mm** son la hora y los minutos, respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Escribe lo siguiente para instalar **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Paso 6.** Compila e instala la herramienta usbboot

```sh
make
```

- **Paso 7.** Ejecuta la herramienta usbboot y esta esperará una conexión

```sh
sudo ./rpiboot
```

- **Paso 8.** Conecta un cable de puente entre los pines **Boot** y **GND** como se indica para habilitar el modo de programación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Conecta la Placa Base al PC mediante un cable USB tipo C

- **Paso 10.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 11.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 12.** Haz clic en **CHOOSE OS** y selecciona la versión más reciente de **Raspberry Pi OS (32-bit)**

- **Paso 13.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 14.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor, espera unos minutos hasta que se complete el proceso de grabado.

### Iniciar sesión en Raspberry Pi OS

#### Método 1: Usar SSH a través de Wi-Fi

Si deseas iniciar sesión en Raspberry Pi OS usando **SSH a través de Wi-Fi**, puedes seguir los pasos a continuación. Sigue las instrucciones según tu sistema operativo.

##### Para Windows

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o mediante un **lector de tarjetas integrado** en una laptop.

- **Paso 2.** Abre **Bloc de notas** y escribe lo siguiente:

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**NOTA:** El código de país (country) debe configurarse según el [código ISO/IEC alpha2](https://es.wikipedia.org/wiki/ISO_3166-1_alpha-2#Elementos_de_código_oficialmente_asignados) del país en el que usarás tu placa.

- **Paso 3.** Haz clic en `Archivo > Guardar`

- **Paso 4.** Navega hasta el nombre del disco conectado de la tarjeta micro-SD

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/select_USB.png" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** Escribe el nombre del archivo como **wpa_supplicant.conf**, selecciona **Guardar como tipo** en **Todos los archivos** y haz clic en **Guardar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/wpa_supplicant.png" alt="pir" width="650" height="auto"/></p>

- **Paso 6.** Abre **Símbolo del sistema** y navega hasta la tarjeta micro-SD

```sh
Example: 
C:\Users\user> F:
F:\>
```

- **Paso 7.** Una vez dentro de la tarjeta micro-SD, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
echo > ssh
```

**Nota:** Esto se hace para habilitar SSH en Raspberry Pi OS

- **Paso 8.** Expulsa la tarjeta micro-SD del PC e insértala en la placa portadora Dual Gigabit Ethernet Carrier Board

- **Paso 9.** Conecta un cable USB Tipo-C al puerto Type-C de la placa portadora y conecta el otro extremo del cable a un adaptador de corriente y enciéndelo

- **Paso 10.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet que puedes usar para conectarte a la placa portadora vía SSH

- **Paso 11.** Abre Putty para conectar el PC a la placa portadora

- **Paso 12.** Selecciona **SSH** bajo **Tipo de conexión** (**Connection Type**)

- **Paso 13.** En **Nombre de host** escribe **raspberrypi.local** y deja el **Puerto** como **22**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **Paso 14.** Haz clic en **Open**

- **Paso 15.** En la ventana de Putty, ingresa los datos de inicio de sesión como sigue

```sh
- Username: pi
- Password: raspberry
```

- **Paso 16.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o mediante un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre **Terminal** y navega hasta la tarjeta micro-SD

```sh
Example: 
cd /media/user/boot
```

**NOTA:** En **/media/user/boot**, reemplaza **user** por el nombre de usuario de tu PC

- **Paso 3.** Una vez dentro de la tarjeta micro-SD, crea un archivo llamado **wpa_supplicant.conf** y ábrelo

```sh
nano wpa_supplicant.conf
```

- **Paso 4.** Escribe el siguiente contenido en el archivo

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**NOTA:** El código de país (country) debe configurarse según el [código ISO/IEC alpha2](https://es.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) del país en el que usarás tu placa.

- **Paso 5.** Presiona **Ctrl + x** en el teclado para guardar el archivo, luego presiona **y** y **Enter** para confirmar los cambios

- **Paso 6.** Mientras estás dentro de la unidad **boot**, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
touch ssh
```

**NOTA:** Esto se hace para habilitar SSH en Raspberry Pi OS

- **Paso 7.** Expulsa la tarjeta micro-SD del PC e insértala en la placa portadora Dual Gigabit Ethernet Carrier Board

- **Paso 8.** Conecta un cable USB Tipo-C al puerto Type-C de la placa portadora y conecta el otro extremo del cable a un adaptador de corriente y enciéndelo

- **Paso 9.** Abre **Terminal** en el PC de nuevo y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 10.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 11.** Cuando pida la contraseña, escribe lo siguiente

```sh
raspberry
```

- **Paso 12.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### Método 2: Usando SSH sobre Ethernet

Si quieres iniciar sesión en Raspberry Pi OS usando **SSH sobre Ethernet**, puedes seguir los siguientes pasos. Por favor, sigue según tu sistema operativo.

##### Para Windows

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o mediante un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre **Símbolo del sistema (Command Prompt)** y navega hasta la tarjeta micro-SD

```sh
Example: 
C:\Users\user> F:
F:\>
```

- **Paso 3.** Una vez dentro de la tarjeta micro-SD, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
echo > ssh
```

Esto se hace para habilitar SSH en Raspberry Pi OS

- **Paso 4.** Expulsa la tarjeta micro-SD del PC e insértala en la placa portadora Dual Gigabit Ethernet Carrier Board

- **Paso 5.** Conecta un cable USB Tipo-C al puerto Type-C de la placa portadora y conecta un cable Ethernet a uno de los puertos Ethernet de la placa

- **Paso 6.** Conecta el otro extremo del cable Ethernet a un router y también conecta el otro extremo del cable Tipo-C a un adaptador de corriente y enciéndelo

- **Paso 7.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet que puedes usar para conectarte a la placa portadora vía SSH

- **Paso 8.** Abre Putty para conectar el PC a la placa portadora

- **Paso 9.** Selecciona **SSH** bajo el **Tipo de conexión** (**Connection Type**)

- **Paso 10.** En **Nombre de host**, escribe **raspberrypi.local** y deja el **Puerto** como **22**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **Paso 11.** Haz clic en **Open**

- **Paso 12.** En la ventana de Putty, ingresa los datos de inicio de sesión como sigue

```sh
- Username: pi
- Password: raspberry
```

- **Paso 13.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o mediante un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre **Terminal** y navega hasta la tarjeta micro-SD

```sh
Example: 
cd /media/user/boot
```

**NOTA:** En **/media/user/boot**, reemplaza **user** por el nombre de usuario de tu PC

- **Paso 3.** Una vez dentro de la tarjeta micro-SD, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
touch ssh
```

**NOTA:** Esto se hace para habilitar SSH en Raspberry Pi OS

- **Paso 4.** Expulsa la tarjeta micro-SD del PC e insértala en la placa portadora Dual Gigabit Ethernet Carrier Board

- **Paso 5.** Conecta un cable USB Tipo-C al puerto Type-C de la placa portadora y conecta un cable Ethernet a uno de los puertos Ethernet de la placa

- **Paso 6.** Conecta el otro extremo del cable Ethernet a un router y también conecta el otro extremo del cable Tipo-C a un adaptador de corriente y enciéndelo

- **Paso 7.** Abre **Terminal** en el PC nuevamente y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 8.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 9.** Cuando pida la contraseña, escribe lo siguiente

```sh
raspberry
```

- **Paso 10.** Si has iniciado sesión correctamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### Método 3: Usando Convertidor USB a Serial

##### Para Windows

Si tienes un **Convertidor USB a Serial**, puedes usar los siguientes pasos para iniciar sesión en Raspberry Pi OS

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o mediante un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre **Explorador de archivos** y navega a la tarjeta micro-SD conectada

- **Paso 3.** Abre el archivo **config.txt** y añade la siguiente línea al final

```sh
enable_uart=1
```

Esto es para habilitar la comunicación UART entre la PC y la placa portadora

- **Paso 4.** Haz clic en `Archivo > Guardar` para guardar tu configuración

- **Paso 5.** Expulsa la tarjeta micro-SD del PC e insértala nuevamente en la placa portadora

- **Paso 6.** Suelda un **header macho de 4 pines** en el **UART IO** de la placa portadora

- **Paso 7.** Conecta los cables jumper del convertidor USB a Serial al **header UART IO** en la placa portadora de la siguiente manera

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 8.** Conecta el convertidor USB a Serial a la PC

- **Paso 9.** Abre el **Administrador de dispositivos** escribiendo **Administrador de dispositivos** en el cuadro de búsqueda de Windows

- **Paso 10.** Haz clic en la flecha desplegable de **Puertos (COM y LPT)** y encuentra el nombre del puerto serial conectado (ejemplo: **COM42**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png" alt="pir" width="320" height="auto"/></p>

- **Paso 11.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet que puedes usar para conectar la placa portadora vía SSH. Puedes saltarte este paso si ya tienes Putty instalado

- **Paso 12.** Abre Putty para conectar la PC a la placa portadora

- **Paso 13.** Selecciona **Serial** bajo el **Tipo de conexión**

- **Paso 14.** Configura las opciones de la siguiente forma:

  - Línea serial: COM4 (elige tu puerto COM)
  - Velocidad: 115200

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Putty_Serial_1.png" alt="pir" width="450" height="auto"/></p>

- **Paso 15.** Haz clic en **Abrir**

- **Paso 16.** En la ventana de Putty, ingresa los detalles de inicio de sesión como sigue

```sh
- Username: pi
- Password: raspberry
```

- **Paso 17.** Si has iniciado sesión exitosamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

Si tienes un **Convertidor USB a Serial**, puedes usar los siguientes pasos para iniciar sesión en Raspberry Pi OS

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o mediante un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre la unidad **boot** y navega a la tarjeta micro-SD conectada

- **Paso 3.** Abre el archivo **config.txt** y añade la siguiente línea al final

```sh
enable_uart=1
```

**NOTA:** Esto es para habilitar la comunicación UART entre la PC y la placa portadora

- **Paso 4.** Haz clic en `Archivo > Guardar` para guardar tu configuración

- **Paso 5.** Expulsa la tarjeta micro-SD del PC e insértala nuevamente en la placa portadora

- **Paso 6.** Suelda un **header macho de 4 pines** en el **UART IO** de la placa portadora como se muestra

- **Paso 7.** Conecta los cables jumper del convertidor USB a Serial al **header UART IO** en la placa portadora

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 8.** Conecta el convertidor USB a Serial a la PC

- **Paso 9.** Abre una **ventana de terminal** en Mac/Linux

- **Paso 10.** Escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 11.** Escribe lo siguiente para instalar **minicom**

```sh
sudo apt-get install minicom
```

- **Paso 12.** Escribe lo siguiente en el terminal para ver los dispositivos seriales conectados

```sh
dmesg | grep tty
```

> Ejemplo:<br />
  [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device

- **Paso 13.** Conéctate al dispositivo serial escribiendo lo siguiente

```sh
minicom -D /dev/ttyACM0 -b 115200
```

**Nota:** La velocidad en baudios está configurada a 115200

- **Paso 14.** Después de las conexiones de hardware mencionadas, enciende la energía desde el tomacorriente para alimentar la placa portadora

Ahora has iniciado sesión exitosamente en Raspberry Pi OS.

#### Método 4: Uso de Teclado, Mouse y Pantalla

Si tienes un **monitor HDMI, cable micro-HDMI a HDMI estándar, teclado y mouse**, puedes conectarlos al Dual Gigabit Ethernet Carrier Board y acceder al sistema Raspberry Pi OS.

(dibujar un diagrama - no es muy importante)

### Configuración de Puertos USB

Por defecto, los **2 puertos USB 3.0** están **deshabilitados** para ahorrar energía en el CM4, por lo que no están accesibles de inmediato. Sin embargo, el **header USB 3.0 de 9 pines** está **accesible** desde el primer momento.

Si quieres habilitar los 2 puertos USB 3.0, necesitas agregar una línea al final del archivo **config.txt** que se encuentra dentro del directorio **/boot**.

Hay 2 formas de hacerlo:

#### Método 1: Modificar el archivo desde la micro-SD conectada a la PC

- **Paso 1.** Inserta la micro-SD (con Raspberry Pi OS ya instalado) en la computadora
- **Paso 2.** Abre el **Explorador de Archivos** y navega a la micro-SD conectada
- **Paso 3.** Abre el archivo **config.txt** y agrega la siguiente línea al final

```sh
dtoverlay=dwc2,dr_mode=host
```

- **Paso 4.** Guarda el archivo

#### Método 2: Modificar el archivo desde el Carrier Board

- **Paso 1.** Inserta la micro-SD en el Carrier Board y enciéndelo

- **Paso 2.** Accede a Raspberry Pi OS usando cualquiera de los métodos explicados anteriormente

- **Paso 3.** Navega al directorio **boot** escribiendo lo siguiente

```sh
cd /boot
```

- **Paso 4.** Abre el archivo **config.txt** usando el editor de texto **nano**

```sh
sudo nano config.txt
```

- **Paso 5.** Añade la siguiente línea al final del archivo

```sh
dtoverlay=dwc2,dr_mode=host
```

- **Paso 6.** Presiona **Ctrl + X**, luego **Y** y finalmente **Enter** en el teclado para guardar el archivo

### Prueba de Velocidad de los Puertos USB

Si quieres probar la velocidad de los puertos USB, puedes ejecutar los siguientes comandos en la Terminal de Raspberry Pi OS

```sh
sudo dd if=/dev/sda1 of=/dev/null bs=512k count=5000
```

La salida deberá verse así:

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/USB_test.png" alt="pir" width="900" height="auto"/></p>

**NOTA:** En **if=/dev/sda1**, **sda1** es la unidad USB conectada. Puedes encontrarla escribiendo **lsblk** como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/find_usb.png" alt="pir" width="700" height="auto"/></p>

### Configuración de los Puertos Ethernet

Una vez que flasheas Raspberry Pi OS en el módulo CM4, solo obtendrás la velocidad completa de Gigabit (1 Gbps) en el puerto Ethernet conectado al **Gigabit Ethernet PHY** del módulo CM4 basado en **Broadcom BCM54210PE** (puerto derecho). 

El puerto conectado al **LAN7800 USB 3.0 a GbE (Puente Gigabit Ethernet) de Microchip** (puerto izquierdo) no proporcionará la velocidad completa de 1 Gbps, sino una velocidad mucho menor. Esto se debe a que el driver lan78xx en el núcleo de Raspberry Pi no está actualizado.

Sigue los siguientes pasos para instalar un script que soluciona este problema:

- **Paso 1.** Entra a la terminal de Raspberry Pi OS

- **Paso 2.** Escribe el siguiente comando para descargar el repositorio

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

- **Paso 3.** Entra al directorio del repositorio

```sh
cd seeed-linux-dtoverlays
```

- **Paso 4.** Escribe el siguiente comando para instalar el script

```sh
sudo ./scripts/cm4_lan7800.sh
```

- **Paso 5.** Reinicia la placa portadora (carrier board)

```sh
sudo reboot
```

- **Paso 6.** Escribe el siguiente comando para verificar el estado de la instalación

```sh
dmesg | grep lan
```

Si ves la siguiente salida, el driver está funcionando correctamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_Driver.png" alt="pir" width="900" height="auto"/></p>

**Nota:** Si quieres acceder a la ayuda del script, escribe **sudo ./cm4_lan7800.sh -h**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_help.png" alt="pir" width="900" height="auto"/></p>

### Prueba de Velocidad de la Tarjeta SD

Accede a la ventana de terminal de Raspberry Pi OS y ejecuta el siguiente comando.

```sh
sudo dd if=/dev/mmcblk0p2 of=/dev/null bs=512k count=5000
```

Verás una salida similar a la siguiente:

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/SD_Test.png" alt="pir" width="900" height="auto"/></p>

### Configuración de los Conectores DSI y CSI

Si deseas conectar un display a través de la interfaz DSI, y una cámara a través de la interfaz CSI en la placa portadora, sigue los siguientes pasos:

- **Paso 1.** Conecta el display al puerto DSI1 y la cámara al puerto CSI1 en la placa portadora, como se muestra a continuación.

- **Paso 2.** Habilita el display y la cámara ejecutando lo siguiente dentro de la ventana de terminal de Raspberry Pi OS.

```sh
sudo wget https://datasheets.raspberrypi.org/cmio/dt-blob-disp1-cam1.bin -O /boot/dt-blob.bin
```

**Nota:** El método de configuración está basado en [cmio-display](https://github.com/raspberrypi/documentation/blob/master/hardware/computemodule/cmio-display.md) y [raspistill](https://www.raspberrypi.org/documentation/configuration/camera.md).

- **Paso 3.** Ejecuta los siguientes comandos para tomar una foto con la cámara y visualizarla en el display.

```sh
raspistill -v -o test.jpg 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI_CSI.png" alt="pir" width="850" height="auto"/></p>

### Configuración I2C

#### Configuración de Hardware

Si deseas conectar un **dispositivo I2C** al **interfaz FPC**, por favor sigue las siguientes conexiones:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_I2C.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### Configuración de Software

Puedes conectar dispositivos I2C al **conector FPC de 8 pines** y controlarlos usando Raspberry Pi OS.

- **Paso 1.** Abre la herramienta de configuración de software de Raspberry Pi

```sh
sudo raspi-config
```

- **Paso 2.** Navega a `Opciones de Interfaz > I2C` y presiona **Enter**

- **Paso 3.** Selecciona **Sí** para habilitar I2C

- **Paso 4.** **Reinicia** la placa portadora

```sh
sudo reboot
```

### Depuración I2C

- **Paso 1.** Conecta un dispositivo I2C al **conector FPC de 8 pines** de la placa portadora

- **Paso 2.** Lista todos los buses I2C disponibles

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/I2C_Detect.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Escanea inmediatamente las direcciones estándar en el bus I2C 1 (i2c-1), usando el método por defecto para cada dirección

```sh
i2cdetect -y 1
```

**Nota:** 1 representa el número del bus I2C

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/detect.png" alt="pir" width="1000" height="auto"/></p>

La imagen anterior muestra un dispositivo detectado con la dirección I2C 0x5c

- **Paso 4.** Lee el contenido de un registro escribiendo lo siguiente:

```sh
i2cget -f -y 1 0x5c 0x0f
```

- -y deshabilita el modo interactivo (por defecto i2cdetect espera confirmación antes de operar el bus I2C).
- 1 representa el número del bus I2C.
- 0x5c representa la dirección del dispositivo I2C.
- 0x0f representa la dirección de memoria del registro.

El resultado será como sigue:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cget.png" alt="pir" width="400" height="auto"/></p>  

- **Paso 5.** Escribe datos en un registro con el siguiente comando:

```sh
i2cset -y 1 0x5c 0x11 0x10
```

- -y deshabilita el modo interactivo.
- 1 es el número del bus I2C.
- 0x5c es la dirección del dispositivo.
- 0x11 es la dirección del registro.
- 0x10 es el valor que se desea escribir.
<br />

- **Paso 6.** Lee todos los valores de los registros con el siguiente comando:

```sh
i2cdump -y 1 0x5c
```

- -y deshabilita el modo interactivo.
- 1 es el número del bus I2C.
- 0x5c es la dirección del dispositivo.

El resultado será similar al siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cdump.png" alt="pir" width="1000" height="auto"/></p>  

### Configuración SPI

#### Configuración de Hardware

Si deseas conectar un **dispositivo SPI** al **interfaz FPC**, por favor sigue las siguientes conexiones:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_SPI.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### Configuración de Software

Puedes conectar dispositivos SPI al **conector FPC de 8 pines** y controlarlos usando Raspberry Pi OS.

- **Paso 1.** Abre la herramienta de configuración de software de Raspberry Pi

```sh
sudo raspi-config
```

- **Paso 2.** Navega a `Opciones de Interfaz > SPI` y presiona **Enter**

- **Paso 3.** Selecciona **Sí** para habilitar SPI

- **Paso 4.** **Reinicia** la placa portadora

```sh
sudo reboot
```

### Depuración SPI

- **Paso 1.** Conecta un dispositivo SPI al **conector FPC de 8 pines** de la placa portadora

- **Paso 2.** Lista todos los dispositivos SPI disponibles

```sh
ls /dev/spi*
```

El resultado será como sigue:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **Paso 3.** Inserta la micro-SD en tu PC

- **Paso 4.** Navega a la unidad **boot**

- **Paso 5.** Descarga [este archivo](https://files.seeedstudio.com/wiki/102110497/spidev_test) y cópialo dentro de la unidad **boot**

- **Paso 6.** Extrae la micro-SD del PC y colócala en la placa portadora

- **Paso 7.** Enciende la placa portadora y navega al directorio **boot**

```sh
cd /boot
```

- **Paso 8.** Cortocircuita **GPIO 10 (Pin 6)** y **GPIO 9 (Pin 7)** usando un cable jumper

**Nota:** Aquí se cortocircuitan los pines **MOSI y MISO**

- **Paso 9.** Ejecuta la herramienta de prueba SPI con el archivo descargado

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

Si ves la siguiente salida, el SPI está funcionando correctamente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[PDF]** [Esquemáticos de la placa portadora Dual Gigabit Ethernet para Raspberry Pi CM4](https://files.seeedstudio.com/wiki/102110497/RapberryPi-CM4-Dual-GbE-Carrier-Board-V1.1_SCH.pdf)

- **[PDF]** [Ficha técnica del Raspberry Pi Compute Module 4](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Página Web]** [Documentación Oficial de Raspberry Pi](https://www.raspberrypi.org/documentation/)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes opciones de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

