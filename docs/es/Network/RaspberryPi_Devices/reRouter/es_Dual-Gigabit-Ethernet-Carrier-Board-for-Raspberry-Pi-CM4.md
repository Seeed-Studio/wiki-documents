---
description: Placa portadora reRouter
title: Placa portadora reRouter
keywords:
- Device
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4
last_update:
  date: 1/10/2022
  author: jianjing Huang
---


# Primeros pasos con la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi Compute Module 4

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/thumb.png" alt="pir" width="600" height="auto"/></p>

La Placa Portadora Dual Gigabit alimentada por Raspberry Pi Compute Module 4 está equipada con puertos Dual Gigabit Ethernet y puertos USB 3.0 duales, haciéndola adecuada para aplicaciones de router por software, mientras mantiene el hardware al mínimo.

Cuenta con una variedad de periféricos de E/S como MIPI CSI, MIPI DSI, micro-HDMI para conectar pantallas/cámaras, un conector estándar USB 3.0 de 9 pines para más expansión USB, una ranura para tarjeta micro-SD, y un conector FPC, ¡mientras mantiene un factor de forma compacto! Esta placa es ideal para fabricantes de HTPC, desarrolladores de Linux, entusiastas de routers por software, y la mayoría de usuarios regulares de Raspberry Pi.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Tamaño compacto (75x64x21mm) con periféricos de E/S ricos
- Conectores Dual Gigabit Ethernet para aplicaciones de router por software
- Conectividad de cámara/pantalla usando interfaces MIPI CSI, MIPI DSI y micro-HDMI
- USB 3.0 dual integrado con un conector USB 3.0 de 9 pines adicional para más puertos externos
- Ranura para tarjeta Micro-SD para cargar imagen del sistema para versión sin eMMC del CM4
- Más Expandibilidad vía Conector FPC (I2C, SPI)
- Soporte de ventilador externo con conector de alimentación para ventilador
- Alimentación usando USB Type-C


## Especificaciones

| Especificación | Detalles |
|-|-|
| Redes | Conectores Dual Gigabit Ethernet |
| USB 3.0 a GbE<br />(Puente Gigabit Ethernet) | LAN7800 de Microchip |
| USB | 2 x Puertos USB 3.0<br />1 x Conector USB 3.0 de 9 Pines  |
| Almacenamiento | Ranura para Tarjeta Micro-SD (cargar imagen del sistema para versión CM4 sin eMMC) |
| Cámara | 1 x Conector MIPI CSI |
| Pantalla | 1 x Conector MIPI DSI<br />1 x Conector Micro HDMI |
| FPC | Interfaz para I2C y SPI |
| Ventilador Externo | Conector de alimentación para ventilador |
| Alimentación | 5V/3A usando Puerto USB Type-C |
| Dimensiones | 75x64x21mm |
| Peso | 43g |

:::caution
Debido al alto nivel de integración de este producto, debe usarse con un [disipador de calor CM4](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html). De lo contrario, puede causar inestabilidad en USB o Ethernet
:::

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/hw-overview.png" alt="pir" width="900" height="auto"/></p>

## Introducción al Hardware

### Interfaz de 200 Pines para Raspberry Pi Compute Module 4

Esta placa portadora tiene una **interfaz de 200 pines** con 2 filas de 100 pines cada una, para que puedas conectar un [Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-CM4001000-p-4720.html) y realizar tus proyectos!

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CM4.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/CM4.png) para una imagen de mayor resolución

### Puertos Ethernet Gigabit Duales

Esta placa portadora cuenta con **2 x Puertos Ethernet Gigabit (RJ45)**. Un Puerto Ethernet está conectado al **PHY Ethernet Gigabit** del módulo CM4 que está basado en **Broadcom BCM54210PE**. Por otro lado, el otro Puerto Ethernet Gigabit está conectado al **LAN7800 de Microchip** que es un **Puente USB 3.0 a GbE (Gigabit Ethernet)**. La **interfaz USB 3.0** aquí se extiende desde la **interfaz PCIe** del Módulo CM4. Además, ambos puertos pueden soportar velocidades de hasta 1Gbps.

#### Esquemáticos de Puertos Ethernet Gigabit Duales

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RJ45.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/RJ45.png) para una imagen de mayor resolución

#### Esquemáticos de USB 3.0 a GbE (Puente Gigabit Ethernet)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN7800.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/LAN7800.png) para una imagen de mayor resolución

### Interfaz de Cámara CSI

Esta tiene una **interfaz de cámara MIPI CSI**, y puedes conectar una cámara a través de un **cable flexible CSI de 15 pines**. Esta interfaz de cámara puede usarse para detección de objetos y aplicaciones de aprendizaje automático.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CSI.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/CSI.png) para una imagen de mayor resolución

### Interfaz de Pantalla DSI

Esta tiene una **interfaz de pantalla MIPI DSI**, y puedes conectar una pantalla a través de un **cable flexible DSI de 15 pines**. Esta interfaz de pantalla puede usarse para interactuar con la placa portadora.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/DSI.png) para una imagen de mayor resolución

### Interfaz FPC

Hay una interfaz **FPC de 8 pines** en esta placa portadora con **Paso de 0.5mm H2.5**. Puedes usar esta interfaz para conectar hardware adicional como cámaras y pantallas a la placa portadora.

#### Especificaciones

- Corriente Nominal: 0.5A
- Voltaje Nominal: 50V
- Voltaje de Resistencia: 500V
- Resistencia de Contacto: 20mΩ
- Resistencia de Aislamiento: 800mΩ
- Temperatura de Trabajo: -20°C ~ +85°C

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_Schematics.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

### Puertos USB 3.0 Duales y Conector de 9 Pines

Compute Module 4 nativamente tiene solo una **interfaz USB 2.0**. Sin embargo, hemos usado la **interfaz PCIe** existente en el CM4 y la hemos expandido a una **interfaz USB 3.0 con 2 x Puertos USB 3.0**. Estos puertos USB ofrecen una velocidad de transferencia de hasta 5Gbps.

Adicionalmente hay un **conector USB 3.0 de 9 pines** y puedes conectar aún más dispositivos USB usando este conector.

Puedes primero conectar un [Adaptador de 9 Pines Hembra a 20 Pines Hembra](https://www.amazon.com/SIENOC-Female-Motherboard-Housing-Adapter/dp/B00EOI3VC8/ref=sr_1_4?dchild=1&keywords=9+pin+to+20+pin&qid=1630315040&sr=8-4) al conector de 9 pines en esta placa y luego conectar un [Adaptador de 20 Pines Macho a USB3.0](https://www.amazon.com/Motherboard-Adapter-Header-Convert-Female/dp/B071NZHWHG/ref=sr_1_9?dchild=1&keywords=20-pin+usb3.0&qid=1630315493&sr=8-9) al conector hembra de 20 pines anterior. Necesitamos estos 2 productos porque actualmente el **Adaptador de 9 Pines a USB3.0** no está disponible en el mercado, y solo está disponible el **Adaptador de 9 Pines a USB2.0**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/USB-pins.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Si quieres conectar un [ventilador de 5V](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html) a esta placa usando **cables puente**, puedes conectar el **extremo positivo (+)** del ventilador a **VBUS** y el **extremo negativo(-)** del ventilador a los pines **GND**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/fan-connect.jpg" alt="pir" width="1000" height="auto"/></p>

#### Esquemáticos de USB 3.0 HOST

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/USB3.0.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/USB3.0.png) para una imagen de mayor resolución

#### Esquemáticos de PCIe a USB 3.0

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png) para una imagen de mayor resolución

### Puerto Micro HDMI

Hay un puerto micro HDMI en la placa portadora y puedes usarlo para conectar a pantallas HDMI mediante un **cable micro HDMI a HDMI estándar**. Soporta video hasta resolución 4K a 60fps.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png) para una imagen de mayor resolución

### UART IO

Hay una **interfaz de 4 pines** en la placa portadora para **comunicaciones UART**. Puedes usar esta interfaz e **iniciar sesión** en el **Raspberry Pi OS** directamente usando un **Cable Adaptador USB a Serial**. Tiene los pines: **TX, RX, 3V3, GND**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

### Pin de Modo de Arranque

Esta **interfaz de 3 pines** se usa cuando quieres hacer que la placa portadora actúe como un **Dispositivo USB**. Una vez que cortocircuitas los pines **GND** y **BOOT**, puedes acceder al **almacenamiento eMMC** o al **almacenamiento de tarjeta micro-SD** usando una **PC HOST**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

### Botón de Reinicio

Este botón se usa para **reiniciar** el CM4. Actúa como un **reinicio por hardware**.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RESET.png" alt="pir" width="650" height="auto"/></p>

### Ranura para Tarjeta Micro - SD

Está equipada con una **ranura para tarjeta micro-sd**. Esto es útil cuando quieres **instalar el sistema operativo** en una tarjeta micro-SD, mientras se usa el **módulo CM4 sin eMMC**. Se recomienda usar una tarjeta con un mínimo de al menos 8GB.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro_SD.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/micro_SD.png) para una imagen de mayor resolución

### Puerto USB Type-C

El **Puerto USB Type-C** en la placa portadora puede usarse para **alimentar la placa portadora usando 5V/3A**. Sin embargo, también puede usarse para actuar como un **Dispositivo USB** donde puedes conectar la placa portadora a una **PC HOST** y la placa portadora actuará como un **Dispositivo de Almacenamiento Masivo USB**. Aquí, podrás acceder al **eMMC integrado** y a la **tarjeta micro-SD** conectada de la placa portadora a través de la PC.

#### Esquemáticos de USB Type-C como Dispositivo USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/type-c.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/type-c.png) para una imagen de mayor resolución

#### Esquemáticos de Gestión de Energía

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/power-manage.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/power-manage.png) para una imagen de mayor resolución

### Conector de Ventilador de 4 Pines

Puedes conectar un **ventilador PWM de 4 pines** a este conector y controlarlo usando software.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Fan.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/Fan.png) para una imagen de mayor resolución

### LEDs de Energía y Funcionamiento

La placa portadora tiene 3 LEDs. Uno es para indicar que está encendida y se ilumina en **Azul**, mientras que los otros 2 LEDs son para indicar el estado de funcionamiento de la placa portadora y se iluminan en **Verde** y **Blanco**.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LEDs.png" alt="pir" width="1000" height="auto"/></p>

**Consejo:** Haz clic [aquí](https://files.seeedstudio.com/wiki/102110497/LEDs.png) para una imagen de mayor resolución

## Primeros Pasos - Hardware Requerido

Necesitas preparar el siguiente hardware antes de comenzar con la Placa Portadora Dual Gigabit Ethernet para RPi CM4

- Placa Portadora Dual Gigabit Ethernet para RPi CM4
- Tarjeta micro-SD de 16GB (o más)
- Lector de tarjetas micro-SD
- Computadora (PC/Mac/Linux)
- Adaptador de corriente (5V/3A)
- Cable USB Type-C
- Convertidor USB a serial, cable Ethernet (opcional)

## Primeros Pasos - Configuración de Software

### Flashear Raspberry Pi OS

Ahora necesitamos flashear **Raspberry Pi OS** en una **tarjeta micro-SD (para versión sin eMMC)** o en **almacenamiento eMMC (para versión eMMC)**, para que pueda ejecutarse en el Raspberry Pi Compute Module 4.

#### Flashear a Tarjeta Micro-SD (CM4 Versión Sin eMMC)

Si tienes un Compute Module 4 sin eMMC, entonces necesitas insertar una micro-SD y flashear el Raspberry Pi OS. Sigue los pasos a continuación según tu sistema operativo.

- **Paso 1.** Inserta una tarjeta micro-SD en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

**Nota:** Puedes elegir descargar para **Windows, Mac o Ubuntu**

- **Paso 3.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona la última versión del **Raspberry Pi OS (32-bit)**

- **Paso 5.** Haz clic en **CHOOSE STORAGE** y selecciona la tarjeta micro-SD conectada

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

#### Flashear a eMMC (CM4 Versión eMMC)

Si tienes un Compute Module 4 con eMMC, entonces puedes flashear directamente el Raspberry Pi OS en el almacenamiento eMMC. Una vez que los controladores necesarios estén instalados, solo tienes que conectar el puerto USB Type-C del CM4 a tu PC, y se mostrará como una unidad externa. Sigue los pasos a continuación según tu sistema operativo.

##### Para Windows

- **Paso 1.** Descarga y ejecuta [este instalador](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) para instalar los controladores necesarios y la herramienta de arranque

- **Paso 2.** Conecta un cable puente entre los pines **Boot** y **GND** como se muestra a continuación para habilitar el modo de programación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Conecta la Placa Portadora a la PC vía cable USB Type-C

Windows ahora encontrará el hardware e instalará los controladores necesarios

- **Paso 4.** Busca la herramienta **rpiboot** que instalamos antes y ábrela

- **Paso 5.** Abre el **explorador de archivos** y verás el eMMC del Computer Module 4 mostrado como un **dispositivo de almacenamiento masivo USB**

- **Paso 6.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 7.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona la última versión del **Raspberry Pi OS (32-bit)**

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 10.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

##### Para Mac/Linux

Usaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de que Git esté instalado

- **Paso 1.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** con el siguiente comando

```sh
sudo apt install git
```

- **Paso 3.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es la fecha, y **hh** y **mm** son horas y minutos respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Ingresa lo siguiente para instalar **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Paso 6.** Construir e instalar la herramienta usbboot

```sh
make
```

- **Paso 7.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

- **Paso 8.** Conecta un cable puente entre los pines **Boot** y **GND** como se muestra a continuación para habilitar el modo de programación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Conecta la Placa Portadora al PC mediante un cable USB Type-C

- **Paso 10.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 11.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 12.** Haz clic en **CHOOSE OS** y selecciona la versión más reciente del **Raspberry Pi OS (32-bit)**

- **Paso 13.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 14.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de grabación esté completo.

### Iniciar sesión en Raspberry Pi OS

#### Método 1: Usando SSH sobre Wi-Fi

Si quieres iniciar sesión en el Raspberry Pi OS usando **SSH sobre Wi-Fi**, puedes seguir los pasos a continuación. Por favor sigue según tu sistema operativo

##### Para Windows

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre el **Bloc de notas** y escribe lo siguiente

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

**NOTA:** El Código de País (country) debe establecerse al [código alfa2 ISO/IEC](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) para el país en el que estés usando tu placa.

- **Paso 3.** Haz clic en `Archivo > Guardar`

- **Paso 4.** Navega al nombre de la unidad conectada de la tarjeta micro-SD

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/select_USB.png" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** Escribe el nombre del archivo como **wpa_supplicant.conf**, selecciona **Guardar como tipo** como **Todos los archivos** y haz clic en **Guardar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/wpa_supplicant.png" alt="pir" width="650" height="auto"/></p>

- **Paso 6.** Abre **Símbolo del sistema** y navega a la tarjeta micro-SD

```sh
Example: 
C:\Users\user> F:
F:\>
```

- **Paso 7.** Una vez que estés dentro de la tarjeta micro-SD, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
echo > ssh
```

**Nota:** Esto se hace para habilitar SSH en el Raspberry Pi OS

- **Paso 8.** Expulsa la tarjeta micro-SD de la PC e insértala en la Dual Gigabit Ethernet Carrier Board

- **Paso 9.** Conecta un cable USB Type-C al puerto Type-C en la placa portadora y conecta el otro extremo del cable Type-C a un adaptador de corriente y enciéndelo

- **Paso 10.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet donde puedes usarlo para conectarte a la Carrier Board vía SSH

- **Paso 11.** Abre Putty para conectar la PC a la Carrier Board

- **Paso 12.** Selecciona **SSH** bajo el **Connection Type**

- **Paso 13.** Bajo **Host Name**. escribe **raspberrypi.local** y deja el **Port** como **22**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **Paso 14.** Haz clic en **Open**

- **Paso 15.** En la ventana de Putty, ingresa los detalles de inicio de sesión como sigue

```sh
- Username: pi
- Password: raspberry
```

- **Paso 16.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre **Terminal** y navega a la tarjeta micro-SD

```sh
Example: 
cd /media/user/boot
```

**NOTA:** En **/media/user/boot**, reemplaza **user** con el nombre de usuario de tu PC

- **Paso 3.** Una vez que estés dentro de la tarjeta micro-SD, crea un archivo llamado **wpa_supplicant.conf** y ábrelo

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

**NOTA:** El Código de País (country) debe establecerse al [código alfa2 ISO/IEC](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) para el país en el que estés usando tu placa.

- **Paso 5.** Presiona **Ctrl + x** en el teclado para guardar el archivo, y luego presiona **y** y **Enter** para confirmar los cambios

- **Paso 6.** Mientras estés dentro de la unidad **boot**, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
touch ssh
```

**NOTA:** Esto se hace para habilitar SSH en el Raspberry Pi OS

- **Paso 7.** Expulsa la tarjeta micro-SD de la PC e insértala en la Placa Portadora Dual Gigabit Ethernet

- **Paso 8.** Conecta un cable USB Tipo-C al puerto Tipo-C en la placa portadora y conecta el otro extremo del cable Tipo-C a un adaptador de corriente y enciéndelo

- **Paso 9.** Abre **Terminal** en la PC nuevamente y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 10.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 11.** Cuando solicite la contraseña, escribe lo siguiente

```sh
raspberry
```

- **Paso 12.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### Método 2: Usando SSH sobre Ethernet

Si quieres iniciar sesión en el Raspberry Pi OS usando **SSH sobre Ethernet**, puedes seguir los pasos a continuación. Por favor sigue según tu sistema operativo

##### Para Windows

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre **Símbolo del sistema** y navega a la tarjeta micro-SD

```sh
Example: 
C:\Users\user> F:
F:\>
```

- **Paso 3.** Una vez que estés dentro de la tarjeta micro-SD, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
echo > ssh
```

Esto se hace para habilitar SSH en el Raspberry Pi OS

- **Paso 4.** Expulsa la tarjeta micro-SD de la PC e insértala en la Dual Gigabit Ethernet Carrier Board

- **Paso 5.** Conecta un cable USB Typc-C al puerto Type-C en la placa portadora y conecta un Cable Ethernet a uno de los Puertos Ethernet en la Placa Portadora

- **Paso 6.** Conecta el otro extremo del cable Ethernet a un router y también conecta el otro extremo del cable Type-C a un adaptador de corriente y enciéndelo

- **Paso 7.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet donde puedes usarlo para conectarte a la Placa Portadora vía SSH

- **Paso 8.** Abre Putty para conectar la PC a la Placa Portadora

- **Paso 9.** Selecciona **SSH** bajo el **Tipo de Conexión**

- **Paso 10.** Bajo **Nombre del Host**. escribe **raspberrypi.local** y deja el **Puerto** como **22**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **Paso 11.** Haz clic en **Abrir**

- **Paso 12.** En la ventana de Putty, ingresa los detalles de inicio de sesión como sigue

```sh
- Username: pi
- Password: raspberry
```

- **Paso 13.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre **Terminal** y navega a la tarjeta micro-SD

```sh
Example: 
cd /media/user/boot
```

**NOTA:** En **/media/user/boot**, reemplaza **user** con el nombre de usuario de tu PC

- **Paso 3.** Una vez que estés dentro de la tarjeta micro-SD, crea un archivo vacío llamado **SSH** escribiendo lo siguiente

```sh
touch ssh
```

**NOTA:** Esto se hace para habilitar SSH en el Raspberry Pi OS

- **Paso 4.** Expulsa la tarjeta micro-SD de la PC e insértala en la Placa Portadora Dual Gigabit Ethernet

- **Paso 5.** Conecta un cable USB Type-C al puerto Type-C en la placa portadora y conecta un Cable Ethernet a uno de los Puertos Ethernet en la Placa Portadora

- **Paso 6.** Conecta el otro extremo del cable Ethernet a un router y también conecta el otro extremo del cable Type-C a un adaptador de corriente y enciéndelo

- **Paso 7.** Abre **Terminal** en la PC nuevamente y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 8.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 9.** Cuando solicite la contraseña, escribe lo siguiente

```sh
raspberry
```

- **Paso 10.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### Método 3: Usando Convertidor USB a Serial

##### Para Windows

Si tienes un **Convertidor USB a Serial**, puedes usar los siguientes pasos para iniciar sesión en Raspberry Pi OS

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre el **Explorador de Archivos** y navega a la tarjeta micro-SD conectada

- **Paso 3.** Abre el archivo **config.txt** y añade la siguiente línea al final

```sh
enable_uart=1
```

Esto es para habilitar la comunicación UART entre la PC y la Placa Portadora

- **Paso 4.** Haz clic en `File > Save` para guardar tu configuración

- **Paso 5.** Expulsa la tarjeta micro-SD de la PC e insértala de nuevo en la Placa Portadora

- **Paso 6.** Solda un **Conector Macho de 4 Pines** al **UART IO** en la Placa Portadora

- **Paso 7.** Conecta los cables puente del Convertidor USB a Serial al **conector de pines UART IO** en la Placa Portadora como se muestra a continuación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 8.** Conecta el Convertidor USB a Serial a la PC

- **Paso 9.** Abre el **Administrador de Dispositivos** escribiendo **Administrador de Dispositivos** en el cuadro de búsqueda de Windows

- **Paso 10.** Haz clic en la flecha desplegable de **Puertos (COM y LPT)** y encuentra el nombre del puerto serie conectado (ej: **COM42**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png" alt="pir" width="320" height="auto"/></p>

- **Paso 11.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet donde puedes usarlo para conectarte a la Placa Portadora vía SSH. Puedes omitir este paso si ya tienes Putty instalado

- **Paso 12.** Abre Putty para conectar la PC a la Placa Portadora

- **Paso 13.** Selecciona **Serial** bajo el **Tipo de Conexión**

- **Paso 14.** Configura los ajustes como se muestra a continuación:

  - Línea serial: COM4 (elige tu puerto COM)
  - Velocidad: 115200

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Putty_Serial_1.png" alt="pir" width="450" height="auto"/></p>

- **Paso 15.** Haz clic en **Open**

- **Paso 16.** En la ventana de Putty, ingresa los detalles de inicio de sesión como se muestra a continuación

```sh
- Username: pi
- Password: raspberry
```

- **Paso 17.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

Si tienes un **Convertidor USB a Serial**, puedes usar los siguientes pasos para iniciar sesión en Raspberry Pi OS

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora usando un **lector de tarjetas micro-SD** conectado a la computadora, o usando un **lector de tarjetas integrado** en una laptop

- **Paso 2.** Abre la unidad **boot** y navega a la tarjeta micro-SD conectada

- **Paso 3.** Abre el archivo **config.txt** y añade la siguiente línea al final

```sh
enable_uart=1
```

**NOTA:** Esto es para habilitar la comunicación UART entre PC y Carrier Board

- **Paso 4.** Haz clic en `File > Save` para guardar tu configuración

- **Paso 5.** Expulsa la tarjeta micro-SD de la PC e insértala de nuevo en el Carrier Board

- **Paso 6.** Solda un **Header Macho de 4 Pines** al **UART IO** en el Carrier Board como se muestra a continuación

- **Paso 7.** Conecta los cables puente del Convertidor USB a Serial al **header de pines UART IO** en el Carrier Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 8.** Conecta el Convertidor USB a Serial a la PC

- **Paso 9.** Abre una **ventana de terminal** en Mac/Linux

- **Paso 10.** Escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 11.** Escribe lo siguiente para instalar **minicom**

```sh
sudo apt-get install minicom
```

- **Paso 12.** Escribe lo siguiente en la terminal para ver los dispositivos serie conectados

```sh
dmesg | grep tty
```

> Ej:<br />
  [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device

- **Paso 13.** Conéctate al dispositivo serie escribiendo lo siguiente

```sh
minicom -D /dev/ttyACM0 -b 115200
```

**Nota:** La velocidad de baudios está configurada a 115200

- **Paso 14.** Después de las conexiones de hardware mencionadas anteriormente, enciende la alimentación desde el enchufe de pared para encender la Placa Portadora

Ahora has iniciado sesión exitosamente en Raspberry Pi OS.

#### Método 4: Usando Teclado, Ratón y Pantalla

Si tienes una **Pantalla HDMI, cable micro-HDMI a HDMI de tamaño completo, teclado y un ratón**, puedes conectarlos a la Placa Portadora Dual Gigabit Ethernet e iniciar sesión en Raspberry Pi OS.

(dibujar un diagrama - no muy importante)

### Configuración de Puertos USB

Por defecto, los **2 Puertos USB 3.0** están **deshabilitados** para ahorrar energía en el CM4 y por lo tanto no son fácilmente accesibles. Sin embargo, el **Conector USB 3.0 de 9 Pines** está **accesible** desde el primer momento.

Si quieres habilitar los 2 Puertos USB 3.0, necesitas añadir una línea al final del archivo **config.txt** ubicado dentro del directorio **/boot**

Hay 2 formas de hacer esto:

#### Método 1: Modificar el archivo desde la tarjeta micro-SD conectada a PC

- **Paso 1.** Inserta la tarjeta micro-SD (con Raspberry Pi OS ya instalado) en la computadora

- **Paso 2.** Abre el **Explorador de Archivos** y navega a la tarjeta micro-SD conectada

- **Paso 3.** Abre el archivo **config.txt** y añade la siguiente línea al final

```sh
dtoverlay=dwc2,dr_mode=host
```

- **Paso 4.** Guarda el archivo

#### Método 2: Modificar el archivo desde la Placa Portadora

- **Paso 1.** Inserta la tarjeta micro-SD en la Placa Portadora y enciéndela

- **Paso 2.** Inicia sesión en Raspberry Pi OS usando cualquiera de los métodos explicados anteriormente

- **Paso 3.** Navega al directorio **boot** escribiendo lo siguiente

```sh
cd /boot
```

- **Paso 4.** Abrir **config.txt** usando el **editor de texto nano**

```sh
sudo nano config.txt
```

- **Paso 5.** Añade la siguiente línea al final

```sh
dtoverlay=dwc2,dr_mode=host
```

- **Paso 6.** Presiona **Ctrl + X**, presiona **Y** y luego presiona **Enter** en el teclado para guardar el archivo

### Prueba de Velocidad de Puertos USB

Si quieres probar la velocidad de los Puertos USB, puedes ejecutar los siguientes comandos en la Terminal de Raspberry Pi OS

```sh
sudo dd if=/dev/sda1 of=/dev/null bs=512k count=5000
```

La salida será la siguiente

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/USB_test.png" alt="pir" width="900" height="auto"/></p>

**NOTA:** En **if=/dev/sda1**, **sda1** es la unidad USB conectada. Puedes encontrarla escribiendo **lsblk** como se muestra a continuación

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/find_usb.png" alt="pir" width="700" height="auto"/></p>

### Configuración de Puertos Ethernet

Una vez que flashees el Raspberry Pi OS en el módulo CM4, obtendrás la velocidad completa de Gigabit (1Gbps) solo en el puerto Ethernet conectado al **PHY Ethernet Gigabit** del módulo CM4 que está basado en **Broadcom BCM54210PE** (puerto del lado derecho). El puerto que está conectado al **Puente LAN7800 USB 3.0 a GbE (Gigabit Ethernet) de Microchip** (puerto del lado izquierdo), no proporcionará la velocidad completa de 1Gbps, sino una velocidad mucho menor. Esto se debe a que el controlador lan78xx en el núcleo de raspberry no está actualizado.

Sigue los pasos a continuación para instalar un script y solucionar este problema:

- **Paso 1.** Ingresa a la ventana del Terminal de Raspberry Pi OS

- **Paso 2.** Escribe lo siguiente para descargar el repositorio

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

- **Paso 3.** Ingresa al directorio del repositorio

```sh
cd seeed-linux-dtoverlays
```

- **Paso 4.** Escribe lo siguiente para instalar el script

```sh
sudo ./scripts/cm4_lan7800.sh
```

- **Paso 5.** Reinicia la placa portadora

```sh
sudo reboot
```

- **Paso 6.** Escribe lo siguiente para verificar el estado de la instalación

```sh
dmesg | grep lan
```

Si ves la siguiente salida, tu controlador está funcionando correctamente ahora

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_Driver.png" alt="pir" width="900" height="auto"/></p>

**Nota:** Si quieres acceder a la ayuda de uso, escribe **sudo ./cm4_lan7800.sh -h**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_help.png" alt="pir" width="900" height="auto"/></p>

### Prueba de Velocidad de Tarjeta SD

Accede a la ventana de terminal de Raspberry Pi OS y ejecuta el siguiente comando

```sh
sudo dd if=/dev/mmcblk0p2 of=/dev/null bs=512k count=5000
```

Verás la salida como sigue

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/SD_Test.png" alt="pir" width="900" height="auto"/></p>

### Configuración de Conectores DSI y CSI

Si quieres conectar una pantalla a través de la interfaz DSI, y una cámara a través de la interfaz CSI en la Placa Portadora, por favor sigue los pasos a continuación

- **Paso 1.** Conecta la pantalla al puerto DSI1 y conecta la cámara al puerto CSI1 en la Placa Portadora como sigue

- **Paso 2.** Habilita la pantalla y la cámara ejecutando lo siguiente dentro de la ventana de terminal de Raspberry Pi OS

```sh
sudo wget https://datasheets.raspberrypi.org/cmio/dt-blob-disp1-cam1.bin -O /boot/dt-blob.bin
```

**Nota:** Aquí el método de configuración se elige de [cmio-display](https://github.com/raspberrypi/documentation/blob/master/hardware/computemodule/cmio-display.md) y [raspistill](https://www.raspberrypi.org/documentation/configuration/camera.md)

- **Paso 3.** Ejecuta los comandos a continuación para tomar una foto desde la cámara y previsualizarla en la pantalla

```sh
raspistill -v -o test.jpg 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI_CSI.png" alt="pir" width="850" height="auto"/></p>

### Configuración I2C

#### Configuración de Hardware

Si deseas conectar un **dispositivo I2C** a la **interfaz FPC**, sigue las siguientes conexiones:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_I2C.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### Configuración de Software

Puedes conectar dispositivos I2C al **conector FPC de 8 pines** y controlarlos usando Raspberry Pi OS.

- **Paso 1.** Visita la **herramienta de configuración de software de Raspberry Pi**

```sh
sudo raspi-config
```

- **Paso 2.** Ve a `Interface Options > I2C` y presiona **Enter**

- **Paso 3.** Selecciona **Yes** para habilitar I2C

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

- **Paso 3.** Escanea inmediatamente las direcciones estándar en el bus I2C 1 (i2c-1), usando el método predeterminado para cada dirección

```sh
i2cdetect -y 1
```

**Nota** 1 representa el número del bus I2C

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/detect.png" alt="pir" width="1000" height="auto"/></p>

La imagen anterior muestra un dispositivo detectado con una dirección I2C de 0x5c

- **Paso 4.** Lee el contenido del registro escribiendo lo siguiente

```sh
i2cget -f -y 1 0x5c 0x0f
```

- -y desactiva el modo interactivo. Por defecto, i2cdetect esperará una confirmación del usuario antes de manipular el bus I2C. Cuando se usa esta bandera, realizará la operación directamente
- 1 representa el número del bus I2C
- 0x5c representa la dirección del dispositivo I2C
- 0x0f representa la dirección de memoria

La salida será la siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cget.png" alt="pir" width="400" height="auto"/></p>  

- **Paso 5.** Escribir datos al registro escribiendo lo siguiente

```sh
i2cset -y 1 0x5c 0x11 0x10
```

- -y deshabilita el modo interactivo. Por defecto, i2cdetect esperará una confirmación del usuario antes de manipular el bus I2C. Cuando se usa esta bandera, realizará la operación directamente
- 1 representa el número del bus I2C
- 0x5c representa la dirección del dispositivo I2C
- 0x11 representa la dirección de memoria
- 0x10 representa el contenido específico en la dirección de memoria
<br />

- **Paso 6.** Lee todos los valores de registro escribiendo lo siguiente

```sh
i2cdump -y 1 0x5c
```

- -y desactiva el modo interactivo. Por defecto, i2cdetect esperará una confirmación del usuario antes de manipular el bus I2C. Cuando se usa esta bandera, realizará la operación directamente
- 1 representa el número del bus I2C
- 0x5c representa la dirección del dispositivo I2C

La salida será la siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cdump.png" alt="pir" width="1000" height="auto"/></p>  

### Configuración SPI

#### Configuración de Hardware

Si deseas conectar un **dispositivo SPI** a la **interfaz FPC**, sigue las siguientes conexiones:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_SPI.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### Configuración de Software

Puedes conectar dispositivos SPI al **conector FPC de 8 pines** y controlarlos usando Raspberry Pi OS.

- **Paso 1.** Visita la **herramienta de configuración de software de Raspberry Pi**

```sh
sudo raspi-config
```

- **Paso 2.** Ve a `Interface Options > SPI` y presiona **Enter**

- **Paso 3.** Selecciona **Yes** para habilitar SPI

- **Paso 4.** **Reinicia** la placa portadora

```sh
sudo reboot
```

### Depuración de SPI

- **Paso 1.** Conecta un dispositivo SPI al **conector FPC de 8 pines** de la placa portadora

- **Paso 2.** Lista todos los dispositivos SPI disponibles

```sh
ls /dev/spi*
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **Paso 3.** Inserta la tarjeta micro-SD en la PC

- **Paso 4.** Navega a la unidad **boot**

- **Paso 5.** Descarga [este archivo](https://files.seeedstudio.com/wiki/102110497/spidev_test) y muévelo a la unidad **boot**

- **Paso 6.** Desconecta la tarjeta micro-SD de la PC e insértala en la placa portadora

- **Paso 7.** Enciende la placa portadora y navega al directorio **boot**

```sh
cd /boot
```

- **Paso 8.** Cortocircuita **GPIO 10 (Pin 6)** y **GPIO 9 (Pin 7)** usando un cable puente

**Nota:** Aquí cortocircuitamos los **pines MOSI y MISO**

- **Paso 9.** Ejecuta la siguiente herramienta de prueba SPI

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

Si ves la siguiente salida, SPI está funcionando correctamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[PDF]** [Esquemas de la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4](https://files.seeedstudio.com/wiki/102110497/RapberryPi-CM4-Dual-GbE-Carrier-Board-V1.1_SCH.pdf)

- **[PDF]** [Hoja de Datos del Raspberry Pi Compute Module 4](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Página Web]** [Documentación Oficial de Raspberry Pi](https://www.raspberrypi.org/documentation/)

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

