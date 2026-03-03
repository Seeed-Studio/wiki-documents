---
description: Uso de Hardware e Interfaces para la placa portadora J501
title: Uso de Interfaces
tags:
  - J501
  - Jetson
  - Interface
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/j501_carrier_board_interfaces_usage
last_update:
  date: 08/20/2024
  author: Youjiang
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/j501.png"/>
</div>

Este wiki presenta los diversos hardware e interfaces diferentes en la Placa Portadora J501 y cómo usarlos para expandir las ideas de tu proyecto.

## Cámara GMSL

Necesitamos combinar la placa portadora J501 con la [placa de expansión GMSL](https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html) para activar la funcionalidad GMSL. La Placa de Extensión GMSL J501 está diseñada para conectar hasta 8 cámaras GMSL con la placa portadora reServer Industrial J501, que es compatible con NVIDIA® Jetson AGX Orin™. Esta placa de extensión utiliza el deserializador 'MAX96724'.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png"/>
</div>

### Cámaras Compatibles
- [[3MP] SG3S-ISX031C-GMSL2F](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

### Conexión de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_connectoin.png"/>
</div>

- **Paso1.** Instalar cilindros de cobre en la placa portadora J501.
- **Paso2.** Conectar la placa de expansión GMSL a la placa portadora J501 y asegurarlas usando tornillos.
- **Paso3.** Conectar la cámara GMSL.

### Instrucciones de Uso

:::note
Antes de habilitar la funcionalidad GMSL, por favor asegúrate de haber instalado una versión de JetPack con el controlador de la placa de expansión GMSL.
:::

**Paso1.** En la terminal del dispositivo jetson, ingresa el siguiente comando para verificar si la cámara conectada es reconocida correctamente.

```bash
ls /dev/video*
```

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/ls_cam.png"/>
</div>

**Paso 2.** Instala las herramientas de configuración de interfaz de video.

```bash
sudo apt install v4l-utils
```

**Paso 3.** Establece el formato del canal para el serializador y deserializador.

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

:::note
Necesitamos configurar el formato del canal para el serializador y deserializador cada vez que el dispositivo se reinicie.
:::

**Paso 4.** Podemos usar el siguiente comando para iniciar rápidamente la cámara y abrir una ventana para mostrar el flujo de video.

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

Hay 2 puertos Ethernet en el J501.
- eth0: Puerto Gigabit Ethernet estándar con especificación 10/100/1000Mbps.
- eth1: Puerto Ethernet de 10 Gigabits.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/internet.png"/>
</div>

Hay 2 LEDs (verde y amarillo) en cada puerto Ethernet:
- LED verde: ENCENDIDO solo cuando está conectado a una red de 1000M/10G.
- LED amarillo: Muestra el estado de actividad de la red.


## Conectores SATA

La placa base reServer J501 soporta 2x SATA 2.5" HDD/SSD y viene con conectores tanto de datos como de alimentación SATA. Puedes conectar HDD/SSD de la siguiente manera:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/sata_connection.jpeg"/>
</div>

### Instrucciones de Uso
Después de que el sistema del dispositivo Jetson arranque, puedes verificar las unidades SATA conectadas con `lsblk`.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsblk.png"/>
</div>


## M.2 Key M 

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, proporcionando velocidades de transferencia de datos ultra rápidas, ideal para aplicaciones de alto rendimiento.

### Los SSD soportados son los siguientes:
- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Instrucciones de Uso

Abre la terminal en el dispositivo Jetson e ingresa el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
Por favor ejecuta el comando `sudo rm tempfile` para eliminar los archivos de caché después de que la prueba esté completa.
:::

## M.2 Key E

La placa portadora J501 cuenta con una interfaz M.2 Key E, a través de la cual puedes expandir las capacidades de Bluetooth y Wi-Fi del dispositivo.

Recomendamos usar el módulo Intel Dual Band Wireless-Ac 8265 w/Bluetooth 8265.NGWMG.

### Conexión de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_connection.jpeg"/>
</div>

### Instrucciones de Uso

Después de instalar el módulo Wi-Fi y encender el dispositivo, podemos configurar los ajustes de Wi-Fi y Bluetooth del dispositivo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Por supuesto, también podemos verificar el estado de funcionamiento del dispositivo usando los siguientes comandos.
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

La placa portadora J501 viene con un conector M.2 Key B que soporta módulos 4G y 5G. Actualmente hemos probado el **módulo 5G SIM8202G-M2**. 

### Conexión de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/5G_connection.png"/>
</div>
  

## Mini PCIe

La placa portadora J501 viene con un conector mini PCIe que soporta módulos 4G y LoRa. Sin embargo, solo puedes conectar un módulo 4G o un módulo LoRa a la vez. Algunos de los módulos 4G vienen integrados con funcionalidad GPS. También discutiremos esto.

### Módulo 4G

#### Conexión de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/minipcie_4g.jpeg"/>
</div>


- **Paso1.** Añade un jumper entre los pines **SIM_MUX_SEL** y **GND** en el Header de 20 Pines.

- **Paso2.** Desliza el módulo 4G en la ranura mini PCIe y asegúralo con tornillos.

- **Paso3.** Inserta una tarjeta nano SIM habilitada para 4G en la ranura de tarjeta SIM de la placa.

:::note
Si quieres remover la tarjeta SIM, empuja la tarjeta hacia adentro para activar el resorte interno para que la SIM salga de la ranura
:::

### Instrucciones de Uso

**Paso1.** Instala minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Paso 2.** Ingresa a la consola serie del módulo 4G conectado para que podamos introducir comandos AT e interactuar con el módulo 4G:

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

La placa portadora J501 soporta 4 canales de entrada digital y 4 canales de salida digital, todos los cuales están ópticamente aislados para proteger efectivamente la placa principal de picos de voltaje u otras perturbaciones eléctricas. También hay dos interfaces CAN en este mismo conector que discutiremos más adelante en este wiki.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido.jpeg"/>
</div>

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Nombre de Etiqueta</th>
      <th>Señal Esquemática</th>
      <th>Número de Pin del Módulo</th>
      <th>Número BGA</th>
      <th>Número GPIO</th>
      <th>Límites V/A</th>
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
      <td rowSpan={4}>12V/ 20mA corriente en total</td>
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
      <td rowSpan={4}>40V/40mA carga por pin</td>
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

:::note
- Entrada Digital de 12V, la señal de tierra necesita estar conectada a **GND_DI**.

- Salida digital, voltaje máximo de resistencia 40V, la señal de tierra necesita estar conectada a **GND_DO**.

- Bus CAN con señales diferenciales estándar, la señal de tierra necesita estar conectada a **GND_ISO**.
:::

### Descripción General de Conexión para DI

Podemos hacer la conexión para DI siguiendo el diagrama a continuación. Es mejor agregar una resistencia en serie para la línea DI. Aquí hemos probado con una resistencia de 4.7kΩ conectada al pin DI1.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_di.png"/>
</div>

### Instrucciones de Uso para DI

Necesitamos ingresar un voltaje de 12V en la línea DI para que sea detectado como una entrada.

**Paso 1.** Haz las conexiones como se muestra arriba al pin DI1 e ingresa 12V.

**Paso 2.** Abre el GPIO para DI1 como sigue:

```bash
sudo su 
cd /sys/class/gpio
echo 444 > export 
cd PP.04
```

:::note
Podemos consultar la Tabla de Asignación de Pines DI/DO para encontrar el número de GPIO y el número BGA. En el ejemplo anterior, para el pin DI1, el número de GPIO es 444 y el número BGA es PP.04.
:::

**Paso 3.** Ejecuta lo siguiente para verificar el estado:

```bash
cat value
```

Si devuelve 0, significa que hay entrada de 12V. Si devuelve 1, significa que no hay voltaje de entrada.


### Descripción General de Conexión para DO 

Podemos realizar la conexión para DO siguiendo el diagrama a continuación. Es mejor añadir una resistencia en serie para la línea DO. Aquí hemos probado con una resistencia de 4.7kΩ.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_do.png"/>
</div>

### Instrucciones de Uso para DO 

Aquí necesitamos conectar una carga como se menciona en el diagrama anterior. La forma más fácil de probar esto sería conectar un multímetro si tienes acceso a uno, o de lo contrario conectar una carga que requiera menos de 40V de voltaje máximo.

**Paso1.** Realiza las conexiones como se muestra arriba al pin DO1 e introduce 40V como máximo.

**Paso2.** Abre el GPIO para D01 de la siguiente manera:

```bash
sudo su 
cd /sys/class/gpio
echo 320 > export 
cd PAA.04
echo out > direction
```

**Paso 3.** Ejecuta lo siguiente para activar el pin:

```bash
echo 1 > value
```

Si la carga está encendida o el multímetro muestra el voltaje que has introducido, la prueba indica que está funcionando correctamente.

### CAN

La placa portadora J501 cuenta con dos interfaces CAN que soportan el protocolo CAN FD (Controller Area Network Flexible Data-Rate) a 5Mbps. La interfaz CAN está aislada usando aislamiento capacitivo, lo que proporciona excelente protección EMI y asegura comunicación confiable en aplicaciones industriales y de automatización. Una resistencia terminal de 120Ω ha sido instalada por defecto y puedes activar y desactivar esta resistencia usando GPIO.

:::note
La interfaz CAN usa una fuente de alimentación aislada, lo que significa que la señal de tierra para dispositivos externos conectados a la interfaz CAN debe conectarse al pin **GND_ISO**.
:::

### Descripción General de Conexión con Adaptador USB a CAN 

Para probar e interactuar con el bus CAN, conecta un adaptador USB a CAN a los conectores CAN en la placa como se muestra a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_can.png"/>
</div>

Aquí hemos usado [Adaptador Analizador USB a CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) con Cable USB disponible en nuestro Bazaar.

### Instrucciones de Uso con Adaptador USB a CAN

**Paso1.** Descarga el controlador para el adaptador USB a CAN que estás usando desde el sitio web del fabricante e instálalo. En nuestro caso, según el adaptador que usamos, los controladores se pueden encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver).

**Paso2.** Algunos adaptadores también vienen con el software necesario para la PC para comunicarse con el dispositivo CAN. En nuestro caso, según el adaptador que usamos, hemos descargado e instalado el software que se puede encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program).

**Paso3.** Inicializa la interfaz CAN de Jetson.

Crea un nuevo archivo llamado **`can_init.sh`** en Jetson y escribe el siguiente contenido:

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
Luego, ejecuta el archivo que acabamos de crear en la ventana del terminal de Jetson:

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**Paso 4.** Escribe ifconfig en la terminal y verás que la interfaz CAN está habilitada.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**Paso 5.** Abre el software CAN que instalaste anteriormente. En este caso, abriremos el software que instalamos según el adaptador CAN que estamos usando.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**Paso 6.** Conecta el adaptador USB a CAN al PC y abre el **Administrador de dispositivos** buscándolo en la barra de búsqueda de Windows. Ahora verás el adaptador conectado bajo **Puertos (COM y LPT)**. Anota el puerto serie que aparece aquí. Según la imagen de abajo, el puerto serie es **COM9**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**Paso 7.** Abre el software CAN, haz clic en **Refresh** junto a la sección **COM**, haz clic en el menú desplegable y selecciona el puerto serie según el adaptador conectado. Mantén el **COM bps** en el valor predeterminado y haz clic en **Open**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**Paso 8.** Mantén el **Mode** y **CAN bps** en los valores predeterminados, cambia el **Type** a **Standard frame** y haz clic en **Set and Start**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**Paso 9.** En reComputer Industrial, ejecuta el siguiente comando para enviar una señal CAN al PC:

```sh
cansend can0 123#abcdabcd
```

Ahora verás la señal anterior recibida por el software como se muestra a continuación

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**Paso 10.** En reComputer Industrial, ejecuta el siguiente comando para esperar a recibir señales CAN desde la PC:

```sh
candump can0 &
```

**Paso 11.** En el software CAN, haz clic en **Send a single frame**:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

Ahora verás que es recibido por reComputer Industrial de la siguiente manera:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

:::info
También podemos consultar [aquí](https://wiki.seeedstudio.com/es/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#connection-overview-with-reterminal-dm) para establecer comunicación entre la placa portadora J501 y el reTerminal DM a través de CAN.
:::

## USB

La placa portadora reServer J501 tiene un total de 5 puertos USB: 3 puertos USB 3.1 Tipo-A, 1 puerto USB 3.1 Tipo-C y 1 puerto USB 2.0 Tipo-C para depuración.

### Instrucciones de Uso

Podemos ingresar `watch -n 1 lsusb -tv` en la terminal de Jetson para sondear los puertos USB. Una vez que se conecta un dispositivo USB, la información detallada sobre ese puerto se mostrará aquí.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Además, puedes consultar [M.2 Key M](#m2-key-m) para probar la velocidad de lectura y escritura de dispositivos de almacenamiento USB.

:::note
Ten en cuenta que, antes de realizar las pruebas, usa el comando `cd` para navegar a la carpeta donde está montado el dispositivo de almacenamiento USB.
:::


## RTC

La placa portadora J501 cuenta con interfaces RTC, proporcionando cronometraje preciso incluso cuando el sistema está apagado.

### Conexión

La placa portadora J501 está equipada con 2 formas diferentes de conectar a una batería RTC.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="RTC socket" label="RTC socket">


Conecta una batería de celda de moneda CR1220 de 3V al socket RTC en la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté mirando hacia arriba.

<div align="center">
  <img width ="220" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/>
</div>

</TabItem>

<TabItem value="JST socket" label="JST socket">

Conecta una batería de celda de moneda CR2302 de 3V con conector JST al socket JST **de 2 pines de 1.25mm** en la placa como se muestra a continuación

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/>
</div>

</TabItem>
</Tabs>

### Instrucciones de Uso

**Paso 1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso 2.** Enciende el J501.

**Paso 3.** En el escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Settings > Date & Time`, conéctate a una red a través de un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha/hora automáticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Si no te has conectado a internet a través de Ethernet, puedes configurar manualmente la fecha/hora aquí.
:::

**Paso 4.** Abre una ventana de terminal y ejecuta el siguiente comando para verificar la hora del reloj de hardware:

```bash
sudo hwclock
```

Verás una salida similar a la siguiente que no es la fecha/hora correcta:

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/>
</div>

**Paso 5.** Cambia la hora del reloj de hardware a la hora actual del reloj del sistema ingresando el siguiente comando:

```bash
sudo hwclock --systohc
```

**Paso 6.** Retira cualquier cable Ethernet conectado para asegurarte de que no obtenga la hora de internet y reinicia la placa:

```bash
sudo reboot
```

**Paso 7.** Verifica la hora del reloj de hardware para confirmar que la fecha/hora permanece igual aunque el dispositivo haya sido apagado.

Ahora crearemos un script para sincronizar siempre el reloj del sistema desde el reloj de hardware en cada arranque.

**Paso 8.** Crea un nuevo script de shell usando cualquier editor de texto de tu preferencia. Aquí usamos el editor de texto **vi**

```bash
sudo vi /usr/bin/hwtosys.sh 
```

**Paso 9.** Ingresa al **modo de inserción** presionando **i**, copia y pega el siguiente contenido dentro del archivo:

```bash
#!/bin/bash

sudo hwclock --hctosys
```

**Paso 10.** Haz que el script sea ejecutable.

```bash
sudo chmod +x /usr/bin/hwtosys.sh 
```

**Paso11.** Crear un archivo systemd:

```bash
sudo vim /lib/systemd/system/hwtosys.service 
```

**Paso12.** Añade lo siguiente dentro del archivo:

```bash
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**Paso13.** Recargar el daemon de systemctl:

```bash
sudo systemctl daemon-reload 
```

**Paso14.** Habilita el servicio recién creado para que se inicie al arrancar y arranca el servicio:

```bash
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**Paso15.** Verifica que el script esté funcionando como un servicio systemd:

```bash
sudo systemctl status hwtosys.service
```

**Paso 16** Reinicia la placa y verás que el reloj del sistema ahora está sincronizado con el reloj de hardware.


## Ventilador

La interfaz del ventilador integrado de la placa J501 es gestionada por el daemon nvfancontrol, que ajusta adaptativamente la velocidad del ventilador basándose en el estado operativo del módulo Jetson. Podemos configurar el modo de funcionamiento del daemon a través de su archivo de configuración `/etc/nvfancontrol.conf`.

:::note
Para más información, por favor consulta [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Adicionalmente, podemos establecer manualmente la velocidad del ventilador usando la herramienta jtop.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## HDMI 
J501 está equipado con un puerto HDMI 2.1 Tipo A, que soporta una resolución de 7680x4320. Esto permite una salida de video de ultra alta definición.


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
