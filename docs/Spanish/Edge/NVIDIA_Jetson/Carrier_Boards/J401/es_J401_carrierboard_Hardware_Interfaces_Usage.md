---
description: Uso de hardware e interfaces para la Carrier Board J401
title: Uso de interfaces
tags:
  - J401 carrier board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/J401_carrierboard_Hardware_Interfaces_Usage
last_update:
  date: 04/29/2024
  author: Jiahao
---
## Introducción

**[Carrier Board reComputer J401](https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html)** suporta **NVIDIA Jetson Orin Nano/NX([Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**, **[Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html))** brinda un rendimiento excepcional y está diseñado para abordar tareas informáticas de vanguardia difíciles con facilidad. Es la elección perfecta para desarrollar sistemas de automatización industrial, crear potentes aplicaciones de IA y más.

Cuenta con capacidad de conexión en red que está equipada con un **puerto Gigabit Ethernet** para una conexión en red rápida. También viene con cuatro **puertos USB 3.2 Tipo-A (10 Gbps)**, un **puerto USB 2.0 Tipo-C** y un **conector CAN** para opciones de conectividad versátiles. Esta placa de extensión se ha montado con una ranura **M.2 Key M 2280** y una **M.2 Key E** para un amplio espacio para almacenamiento flexible y expansión de conectividad inalámbrica.

Además, la placa admite varios periféricos. Puede permitir a los usuarios capturar y mostrar contenido de vídeo de alta calidad con dos **conectores de cámara CSI de 15 pines** y el **puerto HDMI 2.1**. También incluye un **ventilador SODIMMtor de 260 pines** para fines de refrigeración y un **RTC Socket** para un cronometraje confiable.

La placa admite un amplio rango de entrada de **9-19 V CC**, lo que la hace flexible para integrarse en una variedad de tareas informáticas. Mantiene el funcionamiento en el rango de temperatura de -10°C a 60°C.

<div align="center"><img width ="1000" src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_356376_xs4inuEPMdjVeyj__1679475367?w=1200&h=1335"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue una ahora 🖱️</font></span></strong>
</a></div>

## 260 Pin SODIMM

La función principal del SODIMM de 260 pines es conectar tu Carrier Board con **[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**, **[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)**.

### Descripción general de las conexiones

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::nota
Si la conexión es correcta, cuando conectes tu adaptador de corriente, verás que se enciende el indicador de encendido.
:::

## M.2 Key M

M.2 Key M es una especificación para el diseño físico y eléctrico de un conector M.2 que admite la transferencia de datos de alta velocidad mediante la interfaz PCIe (Peripheral Component Interconnect Express). Los conectores M.2 Key M se utilizan comúnmente para conectar unidades de estado sólido (SSD) y otras tarjetas de expansión de alto rendimiento a una placa base u otro dispositivo host. La designación "Clave M" se refiere a la configuración de pines específica y la codificación del conector M.2, que determina el tipo de dispositivos que se pueden conectar a él.

### SSD Soportados:
- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Descripción general de las conexiones 

Si deseas quitar el SSD incluido e instalar uno nuevo, puedes seguir los pasos a continuación.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### Uso

Explicaremos cómo hacer una prueba simple en el SSD conectado.

- **Paso 1:** Verifica la velocidad de escritura ejecutando el siguiente comando.

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Paso 2:** Verifica la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutar esto después de ejecutar el comando anterior para velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key E es una especificación para el diseño físico y eléctrico de un conector M.2 que admite módulos de comunicación inalámbrica, como tarjetas Wi-Fi y Bluetooth. La designación "Clave E" se refiere a la configuración de pines específica y la codificación del conector M.2, que está optimizado para dispositivos de red inalámbricos. Los conectores M.2 Key E se encuentran comúnmente en placas base y otros dispositivos que requieren opciones de conectividad inalámbrica. Aquí recomendamos el módulo [Intel wifi/blue tooth](https://www.intel.com/content/www/us/en/products/sku/94150/intel-dual-band-wirelessac-8265/specifications.html).

### Descripción general de conexiones

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### Uso

Después de instalar wifi/bluetooth, podrás ver el icono de wifi/bluetooth en la esquina superior derecha.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Test de Wifi

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### Test de Bluetooth

```
bluetoothctl
power on   #open bluetooth
agent on   #registe agent
scan on    #search other bluetooths
connect xx:xx:xx:xx #connect target bluetooth
paired-devices #show all paired devices
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/></div>

## Cámaras CSI

CSI significa Interfaz serial de cámara. Es una especificación que describe una interfaz de comunicación en serie para transferir datos de video desde sensores de imagen a un procesador host. CSI se utiliza comúnmente en dispositivos móviles, cámaras y sistemas integrados para permitir una transferencia eficiente y de alta velocidad de datos de imágenes y videos para su procesamiento y análisis.

### Algunas cámaras soportadas:

- Cámaras IMX219 

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  
  <!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->
  
  - [Cámara IMX219-77 8MP con 77° de FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [Cámara CMOS IMX219 M12/CS](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [Cámara estéreo 3D IMX219-83](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [Cámara de visión nocturna IR IMX219-77IR 8MP con 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [Cámara IMX219-160IR 8MP con 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)

- Cámaras IMX477

  - [Raspberry Pi Cámara de alta calidad](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi Cámara HQ - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [Cámara de alta calidad para Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### Visión general de conexiones

Aquí los 2 conectores de la cámara CSI están marcados como **CAM0 y CAM1**. Puedes conectar una cámara a cualquier conector de los 2 o conectar 2 cámaras a ambos conectores al mismo tiempo.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### Uso
Abre tu terminal (Ctrl+Alt+T) e ingresa el comando como se muestra a continuación:

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">


Para el puerto CAM0

```sh
nvgstcapture-1.0 sensor-id=0 
```

Para el puerto CAM1

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::nota
Si deseas cambiar más configuraciones de la cámara, puedes escribir **"nvgstcapture-1.0 --help"** para acceder a todas las opciones configurables disponibles.
:::
</TabItem>

<TabItem value="Method 2" label="Method 2">

Para el puerto CAM0

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

Para el puerto CAM1

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::nota
Si deseas cambiar más configuraciones de la cámara, puedes actualizar los argumentos como **ancho, alto, velocidad de fotogramas, formato**, etc.
:::
</TabItem>
</Tabs>

## RTC

RTC significa Reloj en tiempo real. Es un reloj que realiza un seguimiento de la hora y fecha actuales independientemente del reloj principal del sistema. Los RTC se utilizan comúnmente en computadoras, sistemas integrados y otros dispositivos electrónicos para mantener una hora exacta incluso cuando el dispositivo está apagado. A menudo funcionan con una pequeña batería para garantizar un funcionamiento continuo y conservar la información de fecha y hora durante los ciclos de encendido.

### Visión general de conexión

<Tabs>
<TabItem value="Method 1" label="Method 1">

Conecta una **batería de tipo botón CR1220 de 3 V** al conector RTC de la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté hacia arriba.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="Method 2">

Conecta una **batería de tipo botón CR2302 de 3 V con conector JST** al conector JST de 2 pines de 1,25 mm de la placa como se muestra a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### Usage

- **Paso 1:** Conecta una batería RTC como se mencionó anteriormente.

- **Paso 2:** Enciende la reComputer Industrial.

- **Paso 3:** En el escritorio de Ubuntu, haz click en el menú desplegable en la esquina superior derecha, navega hasta `Settings > Date & Time`, conectate a una red mediante un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha/hora automáticamente.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::nota
Si no te has conectado a Internet a través de Ethernet, puedes configurar manualmente la fecha/hora aquí.
:::

- **Paso 4:** Abre una terminal y ejecuta el siguiente comando para verificar la hora del reloj del hardware.

```sh
sudo hwclock
```

Verás un resultado similar al siguiente, que no es la fecha/hora correcta.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **Paso 5:** Cambia la hora del reloj del hardware a la hora actual del reloj del sistema ingresando el siguiente comando.

```sh 
sudo hwclock --systohc
```

- **Paso 6:** Retira todos los cables Ethernet conectados para asegurarte de que no pierda el tiempo de Internet y reinicia la placa.

```sh
sudo reboot
```

- **Paso 7:** Verifica la hora del reloj del hardware para verificar que la fecha y hora permanezcan iguales aunque el dispositivo esté apagado.

- **Paso 8:** Crea un nuevo script de shell utilizando cualquier editor de texto de tu preferencia. Aquí utilizamos el editor de texto **vi**.

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **Paso 9:** Ingresa al **insert mode** presionando **i**, copia y pega el siguiente contenido dentro del archivo.

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **Paso 10:** Haz que el script sea ejecutable.

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **Paso 11:** Crear un archivo systemd.

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **Paso 12:** Agrega lo siguiente dentro del archivo.

```sh
[Unit]
Description=Change system clock from hardware clock

[Servicio]
ExecStart=/usr/bin/hwtosys.sh

[Instala]
WantedBy=multi-user.target
```

- **Paso 13:** Reinicia el systemctl daemon.

```sh
sudo systemctl daemon-reload 
```

- **Paso 14:** Habilita el servicio recién creado para que se inicie al arrancar e inicia el servicio.

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **Paso 15:** Verifica que el script esté funcionando como un servicio systemd.

```sh
sudo systemctl status hwtosys.service
```

- **Paso 16:** Reinicia la placa y verás que el reloj del sistema ahora estará sincronizado con el reloj del hardware.

## Control del ventilador

nvfancontrol es un daemon de control de velocidad del ventilador en el espacio de usuario. Esto administra la velocidad del ventilador según la tabla de mapeo de temperatura a velocidad del ventilador en el archivo de configuración de nvfancontrol.

Hay algunos elementos básicos en el servicio nvfancontrol, incluidos Tmargin, kickstart PWM, perfil de ventilador, control de ventilador y gobernador de ventilador. Todos estos se pueden programar a través del archivo de configuración según las preferencias del usuario. Este capítulo explicará cada uno de ellos en las siguientes secciones.

:::nota
Si deseas cambiar nvfancontrol.conf, asegúrate de haberlo leído [Aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)
:::

### Uso

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **Paso 1:** Para el servicio nvfancontrol.

```
sudo systemctl stop nvfancontrol
```

- **Paso 2:** Cambia nvfancontrol.conf. 

```
vi /etc/nvfancontrol.conf 
```
:::nota
Después de cambiar nvfancontrol.conf, imprime `Ese` y `:q` para salir
:::

- **Paso 3:** Elimina el archivo **Status** mediante el siguiente comando:

```
sudo rm /var/lib/nvfancontrol/status
```

- **Paso 4:** Reinicia el servicios nvfancontrol systemd.

```
sudo systemctl restart nvfancontrol
```
</TabItem>

<TabItem value="Method 2" label="Method 2">

- **Paso 1:**  Entra a modo root.

```
sudo -i
```

- **Paso 2:**  Deten el servicio systemd nvfancontrol.

```
sudo systemctl stop nvfancontrol
```

- **Paso 3:**  Cambia el valor PWM.

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```
:::nota
Cuanto mayor sea el valor, más rápida será la velocidad del ventilador. El valor de PWM debe estar entre 0 y 255, tal vez **hwmon3** no sea tu palabra de ruta, así que verifica tu propia palabra de ruta.
:::

- **Paso 4:**  Revisa las rpm.

```
cat /sys/class/hwmon/hwmon0/rpm
```
</TabItem>
</Tabs>

## GPIO

**El detalle del encabezado de 40 pines se muestra a continuación:**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>Encabeza del Pin</th>
  <th>Nombre del Pin del módulo</th>
  <th>Módulo del Pin</th>
  <th>Nombre del SoC Pin</th>
  <th>Uso por defecto</th>
  <th>Funciones alternas</th>
</tr>
</thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentación principal de 3.3V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentación principal de 5.0V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 Datos</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentación principal de 5.0V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 Reloj</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>GPIO09</td>
      <td>211</td>
      <td>AUD_MCLK</td>
      <td>GPIO</td>
      <td>Reloj de audio maestro</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 Transmisor</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>9</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 Receptor</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>11</td>
      <td>UART1_RTS*</td>
      <td>207</td>
      <td>UART1_RTS</td>
      <td>GPIO</td>
      <td>UART #2 Solicitud de envío</td>
    </tr>
    <tr>
      <td>12</td>
      <td>I2S0_SCLK</td>
      <td>199</td>
      <td>DAP5_SCLK</td>
      <td>GPIO</td>
      <td>Reloj de Audio I2S #0</td>
    </tr>
    <tr>
      <td>13</td>
      <td>SPI1_SCK</td>
      <td>106</td>
      <td>SPI3_SCK</td>
      <td>GPIO</td>
      <td>SPI #1 Reloj Shift</td>
    </tr>
    <tr>
      <td>14</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>15</td>
      <td>GPIO12</td>
      <td>218</td>
      <td>TOUCH_CLK</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>16</td>
      <td>SPI1_CSI1*</td>
      <td>112</td>
      <td>SPI3_CS1</td>
      <td>GPIO</td>
      <td>SPI #1 Chip #1</td>
    </tr>
    <tr>
      <td>17</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>18</td>
      <td>SPI1_CSI0*</td>
      <td>110</td>
      <td>SPI3_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 Chip #0</td>
    </tr>
    <tr>
      <td>19</td>
      <td>SPI0_MOSI</td>
      <td>89</td>
      <td>SPI1_MOSI</td>
      <td>GPIO</td>
      <td>SPI #0 Master Out/Puppet In</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>SPI0_MISO</td>
      <td>93</td>
      <td>SPI1_MISO</td>
      <td>GPIO</td>
      <td>SPI #0 Master In/Puppet Out</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 Master In/Puppet Out</td>
    </tr>
    <tr>
      <td>23</td>
      <td>SPI0_SCK</td>
      <td>91</td>
      <td>SPI1_SCK</td>
      <td>GPIO</td>
      <td>SPI #0 Reloj Shift</td>
    </tr>
    <tr>
      <td>24</td>
      <td>SPI0_CS0*</td>
      <td>95</td>
      <td>SPI1_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 Chip #0</td>
    </tr>
    <tr>
      <td>25</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>26</td>
      <td>SPI0_CS1*</td>
      <td>97</td>
      <td>SPI1_CS1</td>
      <td>GPIO</td>
      <td>SPI #0 Chip #1</td>
    </tr>
    <tr>
      <td>27</td>
      <td>I2C0_SDA</td>
      <td>187</td>
      <td>GEN2_I2C_SDA</td>
      <td>I2C #0 Data</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>28</td>
      <td>I2C0_SCL</td>
      <td>185</td>
      <td>GEN2_I2C_SCL</td>
      <td>I2C #0 Clock</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>29</td>
      <td>GPIO01</td>
      <td>118</td>
      <td>SOC_GPIO41</td>
      <td>GPIO</td>
      <td>Reloj de propósito general #0</td>
    </tr>
    <tr>
      <td>30</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>31</td>
      <td>GPIO11</td>
      <td>216</td>
      <td>SOC_GPIO42</td>
      <td>GPIO</td>
      <td>Reloj de propósito general #1</td>
    </tr>
    <tr>
      <td>32</td>
      <td>GPIO07</td>
      <td>206</td>
      <td>SOC_GPIO44</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>33</td>
      <td>GPIO13</td>
      <td>228</td>
      <td>SOC_GPIO54</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>34</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>35</td>
      <td>I2S0_FS</td>
      <td>197</td>
      <td>DAP5_FS</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Campo seleccionado</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>UART #1 Borrar para enviar</td>
    </tr>
    <tr>
      <td>37</td>
      <td>SPI1_MOSI</td>
      <td>104</td>
      <td>SPI3_MOSI</td>
      <td>GPIO</td>
      <td>SPI #1 Master Out/Puppet In</td>
    </tr>
    <tr>
      <td>38</td>
      <td>I2S0_DIN</td>
      <td>195</td>
      <td>DAP5_DIN</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Datos de entrada</td>
    </tr>
    <tr>
      <td>39</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>I2S0_DOUT</td>
      <td>193</td>
      <td>DAP5_DOUT</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Datos de salida</td>
    </tr>
  </tbody>
</table>
</div>

### UART

UART significa Receptor/Transmisor Asíncrono Universal. Es un protocolo de comunicación utilizado para la comunicación en serie entre dos dispositivos. La comunicación UART implica dos pines: uno para transmitir datos (TX) y otro para recibir datos (RX). Es asíncrono, lo que significa que los datos se transmiten sin una señal de reloj compartida entre los dispositivos. UART se usa comúnmente en diversas aplicaciones, como microcontroladores, sensores y comunicación entre diferentes dispositivos electrónicos.

#### Descripción general de conexiones

La interfaz UART utiliza el pin a continuación, o puedes usar otra interfaz UART en J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Encabeza de Pin</th>
      <th>Nombre del pin del módulo</th>
      <th>Pin del módulo</th>
      <th>Nombre del pin SoC</th>
      <th>Uso predeterminado</th>
      <th>Funcionalidad alternativa</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GND</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 Transmisión</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 Recepción</td>
      <td>GPIO</td>
    </tr>
  </tbody>
</table>
</div>
Conecta el J401 con TTL mediante UART como se muestra a continuación:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401 Encabezado del Pin</th>
      <th> Uso</th>
      <th>USB traducción a TTL</th>
      <th>Uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>Ground</td>
      <td>GND</td>
      <td>Ground</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>U_RX</td>
      <td>UART_RX</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>U_TX</td>
      <td>UART_TX</td>
    </tr>
  </tbody>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-UART-connect.gif"/></div>

#### Uso

- **Paso 1:** Instala [puTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) en tu computadora portátil con Windows y configura puTTy como se muestra a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **Paso 2:** Instala PuTTy en Jetson, abre tu terminal (ALT+Ctrl+T) y escribe el siguiente comando.

```
sudo apt install putty
```

- **Paso 3:** Utiliza PuTTy en Windows para enviar 'hola Linux' a la Jetson y utiliza PuTTy en la Jetson para enviar 'hola Windows' a Windows.

:::nota
Asegúrate de configurar el baudrate a 115200 baudios.
:::

El resultado debe lucir como a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2C es un protocolo de comunicación en serie ampliamente utilizado que permite la comunicación entre múltiples circuitos integrados en un sistema. I2C utiliza dos líneas bidireccionales: una para datos (SDA) y otra para reloj (SCL). Los dispositivos conectados a un bus I2C pueden actuar como maestros o marionetas, lo que permite que varios dispositivos se comuniquen entre sí. I2C es popular por su simplicidad, flexibilidad y capacidad para conectar una variedad de dispositivos como sensores, chips de memoria y otros periféricos en sistemas integrados y dispositivos electrónicos.

#### Visión general de conexiones

La interfaz I2C usa el pin como se muestra a continuación, o puedes usar otra interfaz I2C en la J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Encabezado del Pin</th>
      <th>Nombre del pin del módulo</th>
      <th>Módulo del pin</th>
      <th>Nombre del PIN del SoC</th>
      <th>Uso por defecto</th>
      <th>Funcionalidad alternativa</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentación principal de 5.0V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 Datos</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 Reloj</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    </table>
</div>

Conecta la J401 al [Acelerómetro digital Grove-3-Axis](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) con I2C como se muestra a continuación:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>Uso</th>
      <th>Acelerómetro digital Grove-3-Axis</th>
      <th>Uso</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>Alimentación de 5V</td>
      <td>Vcc</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>SDA</td>
      <td>I2C_SDA</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>SCL</td>
      <td>I2C_SCL</td>
    </tr>
        <tr>
      <td>6</td>
      <td>Ground</td>
      <td>GND</td>
      <td>Ground</td>
    </tr>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-connect.gif"/></div>

#### Pruebas

Abre tu terminal (ALT+Ctrl+T) y escribe el siguiente comando:

```
i2cdetect -y -r 7
```

:::nota
Tu canal puede ser diferente al mío en el comando: ```i2cdetect -y -r x```.
:::

Verás el resultado como se muestra a continuación, antes de conectarme al I2C, no se detectó ningún dispositivo I2C en el canal 7, pero al conectarme se detectó un dispositivo I2C con la dirección 0x19:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::información
Si deseas utilizar pines IO generales para el control lógico, consulta [esta wiki](/reComputer_Jetson_GPIO).
:::


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