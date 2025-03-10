---
description: Uso de hardware e interfaces para la Carrier Board J501
title: Uso de interfaces
tags:
  - J501
  - Jetson
  - Interfaz
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/j501_carrier_board_interfaces_usage
last_update:
  date: 08/20/2024
  author: Youjiang
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/j501.png"/>
</div>

Esta wiki presenta los distintos hardware e interfaces de la Carrier Board J501 y cómo utilizarlo para ampliar tus ideas de proyectos.

## Cámara GMSL

Necesitamos combinar la Carrier Board J501 con la [placa de expansión GMSL](https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html) para activar la funcionalidad GMSL. La placa de extensión J501 GMSL está diseñada para conectar hasta 8 cámaras GMSL con la Carrier Board reServer Industrial J501, que es compatible con NVIDIA® Jetson AGX Orin™. Esta placa de extensión utiliza el deserializador 'MAX96724'.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png"/>
</div>

### Cámaras compatibles
- [[3MP] SG3S-ISX031C-GMSL2F](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

### Conexión de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_connectoin.png"/>
</div>

- **Paso 1.** Instala copper cylinders a la Carrier Board J501.
- **Paso 2.** Conecta la placa de expansión GMSL a la Carrier Board J501 y asegúralas con tornillos.
- **Paso 3.** Conecta la cámara GMSL.

### Introducción al uso

:::note
Antes de habilitar la funcionalidad GMSL, asegúrate de haber instalado una versión JetPack con el controlador de la placa de expansión GMSL.
:::

**Paso 1.** En la terminal del dispositivo Jetson, ingresa el siguiente comando para verificar si la cámara conectada se reconoce correctamente.

```bash
ls /dev/video*
```

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/ls_cam.png"/>
</div>

**Paso 2.** Instala las herramientas de configuración de la interfaz de video.

```bash
sudo apt install v4l-utils
```

**Paso 3.** Configura el formato de canal para el serializador y el deserializador.

```bash
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
```

:::nota
Necesitamos configurar el formato de canal para el serializador y deserializador cada vez que se reinicia el dispositivo.
:::

**Paso 4.** Podemos usar el siguiente comando para iniciar rápidamente la cámara y abrir una ventana para mostrar la transmisión de video.

```bash
gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video1  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video2  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video3  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video4  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video5  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video6  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video7  ! xvimagesink -ev 
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_result.png"/>
</div>


## Conectores Gigabit Ethernet

Cuenta con 2 puertos Ethernet.
- eth0: Puerto estándar Gigabit Ethernet con especificación 10/100/1000Mbps.
- eth1: Puerto Ethernet de 10-Gigabit.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/internet.png"/>
</div>

Hay 2 LEDs (verde y amarillo) en cada puerto Ethernet:- LED verde: ENCENDIDO solo cuando está conectado a una red de 1000M/10G.
- LED amarillo: muestra el estado de actividad de la red.


## Conectores SATA

La Carrier Board reServer J501 admite 2 HDD/SSD SATA de 2,5" y viene con conectores de alimentación y datos SATA. Puedes conectarte a HDD/SSD de la siguiente manera:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/sata_connection.jpeg"/>
</div>

### Introducción de uso
Después de que se inicies el sistema del dispositivo Jetson, puedes verificar las unidades SATA conectadas mediante `lsblk`.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsblk.png"/>
</div>


## M.2 Key M 

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, que proporciona velocidades de transferencia de datos ultrarrápidas, ideal para aplicaciones de alto rendimiento.

### Algunos SSD's soportados:
- [128GB NVMe M.2 PCle Gen3x4 2280 SSD Interno](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 SSD Interno](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 SSD Interno](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 SSD Interno](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Instrucciones de uso

Abre la terminal en el dispositivo Jetson e ingresa el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::Peligro
Ejecuta el comando `sudo rm tempfile` para eliminar los archivos de caché una vez completada la prueba.
:::

## M.2 Key E

La Carrier Board J501 cuenta con una interfaz M.2 Key E, a través de la cual puede ampliar las capacidades de Bluetooth y Wi-Fi del dispositivo.

Recomendamos utilizar el módulo Intel Dual Band Wireless-Ac 8265 con Bluetooth 8265.NGWMG.

### Conexión Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_connection.jpeg"/>
</div>

### Introducción uso

Después de instalar el módulo Wi-Fi y encender el dispositivo, podemos configurar los ajustes de Wi-Fi y Bluetooth del dispositivo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Por supuesto, también podremos comprobar el estado de funcionamiento del dispositivo mediante los siguientes comandos.
```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

```bash
bluetoothctl
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/bluetoothctl.png"/>
</div>

## M.2 Key B

La Carrier Board J501 viene con un conector M.2 Key B que admite módulos 4G y 5G. Actualmente hemos probado el **módulo SIM8202G-M2 5G**.

### Conexión Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/5G_connection.png"/>
</div>
  

## Mini PCIe

La Carrier Board J501 viene con un conector mini PCIe que admite módulos 4G y LoRa. Sin embargo, sólo puedes conectar un módulo 4G o un módulo LoRa a la vez. Algunos de los módulos 4G vienen integrados con funcionalidad GPS. Hablaremos de esto también.

### Módulo 4G

#### Conexión del Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/minipcie_4g.jpeg"/>
</div>


- **Paso 1.** Agrega un puente entre los pines **SIM_MUX_SEL** y **GND** en el encabezado de 20 pines.

- **Paso 2.** Desliza el módulo 4G en la ranura mini PCIe y asegúralo con tornillos.

- **Paso 3.** Inserta una tarjeta nano SIM habilitada para 4G en la ranura para tarjeta SIM de la placa.

:::nota
Si deseas quitar la tarjeta SIM, empújala hacia adentro para golpear el resorte interno para que la SIM salga de la ranura.
:::

### Introducción de uso

*Paso 1.** Instala minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Paso 2.** Ingresa a la consola serial del módulo 4G conectado para que podamos ingresar comandos AT e interactuar con el módulo 4G:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Paso 3.** Presiona Ctrl+A y luego presiona E para activar el eco local.

**Paso 4.** Ingresa el comando "AT" y presiona enter. Si ves la respuesta como "OK", el módulo 4G está funcionando correctamente.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Paso 5.** Ingresa el comando "ATI" para verificar la información del módulo.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

## DI/DO/CAN

La Carrier Board J501 admite 4 canales de entrada digital y 4 canales de salida digital, todos los cuales están aislados ópticamente para proteger eficazmente la placa base contra picos de voltaje y otras perturbaciones eléctricas. También hay dos interfaces CAN en este mismo conector que discutiremos más adelante en esta wiki.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido.jpeg"/>
</div>

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Nombre en la etiqueta</th>
      <th>Señal del esquemático</th>
      <th>Número de pin del módulo</th>
      <th>Número del BGA</th>
      <th>Número de GPIO</th>
      <th>Límite V/A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Entrada</td>
      <td>DI1</td>
      <td>DI_12V_1/DI_1_GPIO17</td>
      <td>A54</td>
      <td>PP.04</td>
      <td>444</td>
      <td rowSpan={4}>12V/ 20mA en total</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_12V_2/DI_2_GPIO18</td>
      <td>C55</td>
      <td>PQ.04</td>
      <td>452</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_12V_3/DI_3_GPIO19</td>
      <td>K56</td>
      <td>PN.02</td>
      <td>434</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_12V_4/DI_4_GPIO33</td>
      <td>C54</td>
      <td>PM.07</td>
      <td>431</td>
    </tr>
    <tr>
      <td rowSpan={4}>Salida</td>
      <td>DO1</td>
      <td>DO_40V_1/DI_1_GPIO</td>
      <td>E59</td>
      <td>PAA.04</td>
      <td>320</td>
      <td rowSpan={4}>40V/40mA de carga por pin</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_40V_2/DI_2_GPIO</td>
      <td>F59</td>
      <td>PAA.07</td>
      <td>323</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_40V_3/DI_3_GPIO</td>
      <td>B62</td>
      <td>PBB.01</td>
      <td>325</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_40V_4/DI_4_GPIO</td>
      <td>C61</td>
      <td>PBB.00</td>
      <td>324</td>
    </tr>
  </tbody>
</table>

:::nota
- Entrada digital de 12 V, la señal de tierra debe conectarse a **GND_DI**.

- Salida digital, voltaje máximo soportado 40 V, la señal de tierra debe conectarse a **GND_DO**.

- Bus CAN con señales diferenciales estándar, la señal de tierra debe conectarse a **GND_ISO**.
:::

### Descripción general de conexión DI

Podemos realizar la conexión para DI siguiendo el diagrama a continuación. Es mejor agregar una resistencia en serie para la línea DI. Aquí hemos probado con una resistencia de 4,7 kΩ conectada al pin DI1.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_di.png"/>
</div>

### Instrucciones de uso para DI

Necesitamos ingresar un voltaje de 12 V en la línea DI para que se detecte como entrada.

**Paso 1.** Realiza las conexiones como se muestra arriba entre pin DI1 y 12V usando la resistencia de 4.7kΩ.

**Paso 2.** Abre los GPIO para DI1 como se muestra a continuación:

```bash
sudo su 
cd /sys/class/gpio
echo 444 > export 
cd PP.04
```

:::nota
Podemos consultar la tabla de asignación de pines DI/DO para encontrar el número de GPIO y el número de BGA. En el ejemplo anterior, para el pin DI1, el número GPIO es 444 y el número BGA es PP.04.
:::

**Paso 3.** Ejecuta el siguiente comando para verificar el estado:

```bash
cat value
```

Si sale 0, eso significa que hay una entrada de 12V. Si genera 1, eso significa que no hay voltaje de entrada.


### Descripción general de la conexión para DO

Podemos realizar la conexión para DO siguiendo el diagrama mostrado a continuación. Es mejor agregar una resistencia en serie para la línea DO. Aquí hemos probado con una resistencia de 4,7kΩ.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_do.png"/>
</div>

### Instrucciones de uso para DO 

Aquí necesitamos conectar una carga como se muestra en el diagrama anterior. La forma más sencilla de probar esto sería conectar un multímetro si tienes acceso a uno, o conectar una carga que requiera menos de 40 V de voltaje máximo.

**Paso 1.** Realiza las conexiones como se muestra arriba al pin DO1 e ingresa 40 V como máximo.

**Paso 2.** Abre el GPIO para D01 de la siguiente manera:

```bash
sudo su 
cd /sys/class/gpio
echo 320 > export 
cd PAA.04
echo out > direction
```

**Paso 3.** Ejecuta el siguiente comando para activar el pin:

```bash
echo 1 > value
```

Si la carga está encendida o el multímetro muestra la lectura de voltaje que ingresaste, la prueba está funcionando correctamente.

### CAN

La Carrier Board J501 cuenta con dos interfaces CAN que admiten el protocolo CAN FD (Velocidad de datos flexible de la red de área del controlador) a 5 Mbps. La interfaz CAN está aislada mediante aislamiento capacitivo, lo que proporciona una excelente protección EMI y garantiza una comunicación confiable en aplicaciones industriales y de automatización. Se ha instalado una resistencia de 120 Ω de forma predeterminada y puedes activarla y desactivarla mediante GPIO.

:::nota
La interfaz CAN utiliza una fuente de alimentación aislada, lo que significa que la señal de tierra para dispositivos externos conectados a la interfaz CAN debe conectarse al pin **GND_ISO**.
:::

### Descripción general de la conexión con adaptador USB a CAN

Para probar e interactuar con el bus CAN, conecta un adaptador USB a CAN a los conectores CAN en la placa como se muestra a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_can.png"/>
</div>

Aquí hemos utilizado el [Analizador USB a CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) con un cable USB disponible en nuestra página.

### Instrucciones de uso del adaptador USB a CAN

**Paso 1.** Descarga el controlador para el adaptador USB a CAN que estás utilizando del sitio web del fabricante e instálalo. En nuestro caso, según el adaptador que utilizamos, los controladores los podemos encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver).

**Paso 2.** Algunos adaptadores también vienen con el software necesario para que la PC se comunique con el dispositivo CAN. En nuestro caso, según el adaptador que utilizamos, hemos descargado e instalado el software que se puede encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program).

**Paso 3.** Inicializa la interfaz CAN de la Jetson.

Crea un nuevo archivo llamado **`can_init.sh`** en la Jetson y escribe el siguiente contenido:

```bash
#!/bin/bash

sudo gpioset gpiochip2 9=0 
sudo gpioset gpiochip2 8=0

sudo busybox devmem 0x0c303018 w 0xc458
sudo busybox devmem 0x0c303010 w 0xc400
sudo busybox devmem 0x0c303008 w 0xc458
sudo busybox devmem 0x0c303000 w 0xc400

sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan

sudo ip link set can0 down
sudo ip link set can1 down

sudo ip link set can0 type can bitrate 125000
sudo ip link set can1 type can bitrate 125000
sudo ip link set can0 up
sudo ip link set can1 up

```
Luego, ejecuta el archivo que acabamos de crear en la terminal de la Jetson:

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**Paso 4.** Escribe ifconfig en la terminal y verás la interfaz CAN habilitada.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**Paso 5.** Abre el software CAN que instalaste anteriormente. En este caso abriremos el software que instalamos según el adaptador CAN que estamos utilizando.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**Paso 6.** Conecta el adaptador USB - CAN a la PC y abre el **Administrador de dispositivos** buscándolo en la barra de búsqueda de Windows. Ahora verás el adaptador conectado en **Puertos (COM y LPT)**. Toma nota del puerto serial que aparece aquí. En nuestro caso, el puerto serie es **COM9**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**Paso 7.** Abre el software CAN, haz click en **Actualizar** junto a la sección **COM**, haz click en el menú desplegable y selecciona el puerto serial según el adaptador conectado. Manten los **COM bps** predeterminados y haz click en **Abrir**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**Paso 8.** Manten el **Modo** y **CAN bps** predeterminados, cambia el **Type** a **Standard Frame** y haz click en **Set and Start**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**Paso 9.** En la reComputer industrial, ejecuta el siguiente comando para enviar una señal CAN a la PC:

```sh
cansend can0 123#abcdabcd
```

Ahora verás la señal anterior recibida por el software como se muestra a continuación

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**Paso 10.** En la reComputer industrial, ejecuta el siguiente comando para esperar a recibir señales CAN desde la PC:

```sh
candump can0 &
```

**Paso 11.** En el software CAN, haz click en **Send a single frame**:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

Ahora verás el mensaje recibido por la reComputer industrial de la siguiente manera:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

:::info
También podemos consultar [aquí](https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#connection-overview-with-reterminal-dm) para establecer comunicación entre la Carrier Board J501 y la reTerminal DM a través de CAN.
:::

## USB

La Carrier Board reServer J501 tiene un total de 5 puertos USB: 3 puertos USB 3.1 Tipo-A, 1 puerto USB 3.1 Tipo-C y 1 puerto USB 2.0 Tipo-C para depuración.

### Instrucciones de uso

Podemos ingresar `watch -n 1 lsusb -tv` en la terminal de la Jetson para monitorear los puertos USB. Una vez que se conecta un dispositivo USB, la información detallada sobre ese puerto se mostrará aquí.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Además, puedes consultar [M.2 Key M](#m2-key-m) para probar la velocidad de lectura y escritura de los dispositivos de almacenamiento USB.

:::nota
Antes de realizar la prueba, utiliza el comando `cd` para navegar a la carpeta donde está montado el dispositivo de almacenamiento USB.
:::


## RTC

La Carrier Board J501 cuenta con interfaces RTC, lo que proporciona un cronometraje preciso incluso cuando el sistema está apagado.

### Conexión

La Carrier Board J501 está equipada con 2 formas diferentes de conectarse a una batería RTC.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="RTC socket" label="RTC socket">


Conecta una batería de tipo CR1220 de 3 V al conector RTC de la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté hacia arriba.

<div align="center">
  <img width ="220" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/>
</div>

</TabItem>

<TabItem value="JST socket" label="JST socket">

Conecta una batería de tipo CR2302 de 3 V con conector JST al conector JST **2 pines de 1,25 mm** de la placa como se muestra a continuación.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/>
</div>

</TabItem>
</Tabs>

### Instrucciones de uso

**Paso 1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso 2.** Prende la J501.

**Paso 3.** En el escritorio de Ubuntu, haz click en el menú desplegable en la esquina superior derecha, navega hasta `Settings > Date & Time`, conéctate a una red mediante un cable Ethernet y selecciona **Automatic Data & Time** para obtener la fecha/hora automáticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::nota
Si no te has conectado a Internet a través de Ethernet, puedes configurar manualmente la fecha/hora aquí.
:::

**Paso 4.** Abre una terminal y ejecuta el siguiente comando para verificar la hora del reloj del hardware:

```bash
sudo hwclock
```

Verás un resultado similar al siguiente, que no es la fecha/hora correcta:

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/>
</div>

**Paso 5.** Cambia la hora del reloj del hardware a la hora actual del reloj del sistema ingresando el siguiente comando:

```bash
sudo hwclock --systohc
```

**Paso 6.** Retira todos los cables Ethernet conectados para asegurarte de que no se pierda el tiempo de Internet y reinicia la placa:

```bash
sudo reboot
```

**Paso 7.** Verifica la hora del reloj del hardware para verificar que la fecha/hora permanezca igual aunque el dispositivo esté apagado.

Ahora crearemos un script para sincronizar siempre el reloj del sistema desde el reloj del hardware en cada arranque.

**Paso 8.** Crea un nuevo script de shell utilizando cualquier editor de texto de tu preferencia. Aquí usamos el editor de texto **vi**

```bash
sudo vi /usr/bin/hwtosys.sh 
```

**Paso 9.** Ingresa al **insert mode** presionando **i**, copia y pega el siguiente contenido dentro del archivo:

```bash
#!/bin/bash

sudo hwclock --hctosys
```

**Paso 10.** Haz que el script sea ejecutable:

```bash
sudo chmod +x /usr/bin/hwtosys.sh 
```

**Paso 11.** Crea un archivo systemd:

```bash
sudo vim /lib/systemd/system/hwtosys.service 
```

**Paso 12.** Agrega lo siguiente dentro del archivo:

```bash
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**Paso 13.** Recarga el daemon systemctl:

```bash
sudo systemctl daemon-reload 
```

**Paso 14.** Habilita el servicio recién creado para que se inicie al arrancar e inicia el servicio:

```bash
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**Paso 15.** Verifica que el script esté funcionando como un servicio systemd:

```bash
sudo systemctl status hwtosys.service
```

**Paso 16** Reinicia la placa y verás que el reloj del sistema ahora estará sincronizado con el reloj del hardware.


## Ventilador

La interfaz del ventilador integrada de la placa J501 es administrada por el daemon nvfancontrol, que ajusta de forma adaptativa la velocidad del ventilador según el estado operativo del módulo Jetson. Podemos configurar el modo de trabajo del daemon a través de su archivo de configuración `/etc/nvfancontrol.conf`.

:::nota
Para más información, haz click [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Además, podemos configurar manualmente la velocidad del ventilador usando la herramienta jtop.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## HDMI 
La J501 está equipada con un puerto HDMI 2.1 tipo A, que admite una resolución de 7680x4320. Esto permite la salida de vídeo de ultra alta definición.


## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
