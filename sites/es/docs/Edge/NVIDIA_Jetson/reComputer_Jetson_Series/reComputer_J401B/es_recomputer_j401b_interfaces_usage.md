---
description: Esta wiki proporciona una guía completa de las interfaces de hardware y funcionalidades de la placa portadora reComputer J401B, incluyendo instalación de módulo 4G, expansión SSD/Wi-Fi, conexiones de cámara, uso de GPIO, y control de ventilador.
title: Uso de Interfaces J401B
tags:
  - J401 carrier board
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/j401b_interfaces.webp
slug: /recomputer_j401b_interfaces_usage
sku: 114993486,114993487,114993489,114993488,E2025031201
last_update:
  date: 4/27/2025
  author: Youjiang
createdAt: '2024-05-13'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/recomputer_j401b_interfaces_usage/
---


## Introducción

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/j401b_interfaces.png"/>
</div>

Esta wiki presenta las diversas interfaces y hardware diferentes en el reComputer J401B y cómo usarlos para expandir las ideas de tu proyecto.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Mini-PCIe

reComputer J401B viene con un conector mini PCIe que soporta 4G.

### Módulo 4G Soportado

- [LTE Cat 4 EC25-AFXGA](https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html)
- [LTE Cat 4 EC25-EUX](https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html)
- [LTE Cat 4 EC25-AUXGR](https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html)
- [LTE Cat 4 EC25-EFA](https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html)
- [LTE Cat 4 EC25-EMGA](https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html)
- [LTE Cat 4 EC25-JFA](https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html)

### Resumen de Conexión

- Paso1. Instalar el Módulo 4G
- Paso2. Conectar las Antenas
- Paso3. Insertar la Tarjeta SIM

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/q5nV0RqvceU" title="Assembling 4g module for j401b" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Uso

- Paso1. Abrir Banda Ancha Móvil y configurar la conexión de red según las especificaciones de la tarjeta SIM 4G. `Configuración` --> `Red` --> `Banda Ancha Móvil`

- Paso2. Abrir un navegador para probar si la red 4G está funcionando correctamente.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IJEvmHhrmbc" title="J401B 4G Network Usage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 260 Pin SODIMM

La función principal del 260 pin SODIMM es conectar tu placa portadora con **[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**, **[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)**.

### Resumen de Conexión

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
Si la conexión es correcta, al conectar tu adaptador de corriente, verás que se enciende el indicador de energía.
:::

## M.2 Key M

M.2 Key M es una especificación para el diseño físico y eléctrico de un conector M.2 que soporta transferencia de datos de alta velocidad utilizando la interfaz PCIe (Peripheral Component Interconnect Express). Los conectores M.2 Key M se utilizan comúnmente para conectar unidades de estado sólido (SSD) y otras tarjetas de expansión de alto rendimiento a una placa base u otro dispositivo host. La designación "Key M" se refiere a la configuración específica de pines y el diseño de llave del conector M.2, que determina el tipo de dispositivos que se pueden conectar a él.

### Los SSD compatibles son los siguientes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### Descripción general de la conexión

Si deseas quitar el SSD incluido e instalar uno nuevo, puedes seguir los pasos a continuación.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### Uso

Explicaremos cómo hacer una prueba de rendimiento simple en el SSD conectado.

- **Paso 1:** Verifica la velocidad de escritura ejecutando el siguiente comando.

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Paso 2:** Verifica la velocidad de lectura ejecutando los siguientes comandos. Asegúrate de ejecutar esto después de ejecutar el comando anterior para la velocidad de escritura.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key E es una especificación para el diseño físico y eléctrico de un conector M.2 que soporta módulos de comunicación inalámbrica, como tarjetas Wi-Fi y Bluetooth. La designación "Key E" se refiere a la configuración específica de pines y el enclavado del conector M.2, que está optimizado para dispositivos de red inalámbrica. Los conectores M.2 Key E se encuentran comúnmente en placas base y otros dispositivos que requieren opciones de conectividad inalámbrica. Aquí recomendamos el módulo [Intel wifi/bluetooth](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9).

### Descripción general de la conexión

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### Uso

Después de instalar el módulo wifi/bluetooth, puedes ver el icono de wifi/bluetooth en la esquina superior derecha.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Prueba de Wi-Fi

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### Prueba de Bluetooth

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

CSI significa Camera Serial Interface (Interfaz Serial de Cámara). Es una especificación que describe una interfaz de comunicación serial para transferir datos de video desde sensores de imagen a un procesador host. CSI se usa comúnmente en dispositivos móviles, cámaras y sistemas embebidos para permitir la transferencia de alta velocidad y eficiente de datos de imagen y video para procesamiento y análisis.

### Las cámaras compatibles son las siguientes

- Cámaras IMX219

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  
  <!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->
  
  - [IMX219-77 8MP Cámara con 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Módulo de Cámara](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Módulo de Cámara Estéreo](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Cámara de Visión Nocturna con 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Cámara con 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)

- Cámaras IMX477

  - [Cámara de Alta Calidad Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Cámara Raspberry Pi HQ - montura M12](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [Cámara de Alta Calidad para Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### Descripción general de la conexión

Aquí los 2 conectores de cámara CSI están marcados como **CAM0 y CAM1**. Puedes conectar una cámara a cualquiera de los 2 conectores o conectar 2 cámaras a ambos conectores al mismo tiempo.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### Uso

Abre tu terminal (Ctrl+Alt+T) e ingresa un comando como el siguiente:

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Método 1">

Para el puerto CAM0

```sh
nvgstcapture-1.0 sensor-id=0 
```

Para puerto CAM1

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
Si deseas cambiar más configuraciones de la cámara, puedes escribir **"nvgstcapture-1.0 --help"** para acceder a todas las opciones configurables disponibles.
:::
</TabItem>

<TabItem value="Método 2" label="Método 2">

Para puerto CAM0

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

Para el puerto CAM1

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
Si deseas cambiar más configuraciones de la cámara, puedes actualizar los argumentos como **ancho, alto, velocidad de fotogramas, formato**, etc.
:::
</TabItem>
</Tabs>

## RTC

RTC significa Reloj de Tiempo Real. Es un reloj que mantiene el seguimiento de la hora y fecha actuales independientemente del reloj principal del sistema. Los RTC se utilizan comúnmente en computadoras, sistemas embebidos y otros dispositivos electrónicos para mantener un cronometraje preciso incluso cuando el dispositivo está apagado. A menudo están alimentados por una pequeña batería para asegurar el funcionamiento continuo y retener la información de hora y fecha durante los ciclos de encendido.

### Descripción General de la Conexión

<Tabs>
<TabItem value="Method 1" label="Método 1">

Conecta una **batería de celda tipo moneda CR1220 de 3V** al socket RTC en la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté mirando hacia arriba.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="Método 2">

Conecta una **batería de celda tipo moneda CR2302 de 3V con conector JST** al socket JST de 2 pines de 1.25mm en la placa como se muestra a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### Uso

- **Paso 1:** Conecta una batería RTC como se mencionó anteriormente.

- **Paso 2:** Enciende reComputer Industrial.

- **Paso 3:** En el Escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Configuración > Fecha y Hora`, conéctate a una red mediante un cable Ethernet y selecciona **Fecha y Hora Automática** para obtener la fecha/hora automáticamente.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Si no te has conectado a internet mediante Ethernet, puedes configurar manualmente la fecha/hora aquí.
:::

- **Paso 4:** Abre una ventana de terminal y ejecuta el siguiente comando para verificar la hora del reloj de hardware.

```sh
sudo hwclock
```

Verás una salida similar a la siguiente que no es la fecha/hora correcta.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **Paso 5:** Cambia la hora del reloj de hardware a la hora actual del reloj del sistema ingresando el siguiente comando.

```sh
sudo hwclock --systohc
```

- **Paso 6:** Retire cualquier cable Ethernet conectado para asegurarse de que no obtenga la hora de internet y reinicie la placa.

```sh
sudo reboot
```

- **Paso 7:** Verifica la hora del reloj de hardware para confirmar que la fecha/hora permanece igual aunque el dispositivo haya sido apagado.

- **Paso 8:** Crea un nuevo script de shell usando cualquier editor de texto de tu preferencia. Aquí usamos el editor de texto **vi**.

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **Paso 9:** Ingresa al **modo de inserción** presionando **i**, copia y pega el siguiente contenido dentro del archivo.

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **Paso 10:** Hacer que el script sea ejecutable.

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **Paso 11:** Crear un archivo systemd.

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **Paso 12:** Añade lo siguiente dentro del archivo.

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **Paso 13:** Recargar el daemon de systemctl.

```sh
sudo systemctl daemon-reload 
```

- **Paso 14:** Habilita el servicio recién creado para que se inicie al arrancar y arranca el servicio.

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **Paso 15:** Verifica que el script esté funcionando como un servicio systemd.

```sh
sudo systemctl status hwtosys.service
```

- **Paso 16:** Reinicia la placa y verás que el reloj del sistema ahora está sincronizado con el reloj de hardware.

## Control del ventilador

nvfancontrol es un demonio de control de velocidad del ventilador en espacio de usuario. Este gestiona la velocidad del ventilador basándose en la tabla de mapeo de temperatura a velocidad del ventilador en el archivo de configuración de nvfancontrol.

Hay algunos elementos básicos en el servicio nvfancontrol, incluyendo Tmargin, PWM de arranque, perfil del ventilador, control del ventilador y gobernador del ventilador. Todos estos pueden ser programados a través del archivo de configuración basándose en las preferencias del usuario. Este capítulo explicará cada uno de ellos en las siguientes secciones.

:::note
Si deseas modificar nvfancontrol.conf, asegúrate de haberlo leído [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)
:::

### Uso

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **Paso 1:** Detén el servicio systemd nvfancontrol.

```
sudo systemctl stop nvfancontrol
```

- **Paso 2:** Cambiar nvfancontrol.conf.

```
vi /etc/nvfancontrol.conf 
```

:::note
Después de cambiar nvfancontrol.conf, escribe `Ese` y `:q` para salir.
:::

- **Paso 3:** Eliminar el archivo de estado.

```
sudo rm /var/lib/nvfancontrol/status
```

- **Paso 4:** Reinicia el servicio systemd nvfancontrol.

```
sudo systemctl restart nvfancontrol
```

</TabItem>

<TabItem value="Method 2" label="Método 2">

- **Paso 1:** Ingresar al modelo raíz.

```
sudo -i
```

- **Paso 2:** Detén el servicio systemd nvfancontrol.

```
sudo systemctl stop nvfancontrol
```

- **Paso 3:** Cambiar el valor PWM.

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```

:::note
Cuanto mayor sea el valor, mayor será la velocidad del ventilador. El valor PWM debe estar entre 0 y 255, tal vez **hwmon3** no sea tu ruta, así que verifica tu propia ruta.
:::

- **Paso 4:** Verificar rpm.

```
cat /sys/class/hwmon/hwmon0/rpm
```

</TabItem>
</Tabs>

## GPIO

**El detalle del conector de 40 pines se muestra a continuación:**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>Pin del Conector</th>
  <th>Nombre del Pin del Módulo</th>
  <th>Pin del Módulo</th>
  <th>Nombre del Pin del SoC</th>
  <th>Uso Predeterminado</th>
  <th>Funcionalidad Alternativa</th>
</tr>
</thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Suministro Principal 3.3V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Suministro Principal 5.0V</td>
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
      <td>Suministro Principal 5.0V</td>
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
      <td>Tierra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>GPIO09</td>
      <td>211</td>
      <td>AUD_MCLK</td>
      <td>GPIO</td>
      <td>Reloj Maestro de Audio</td>
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
      <td>9</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 Recepción</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>11</td>
      <td>UART1_RTS*</td>
      <td>207</td>
      <td>UART1_RTS</td>
      <td>GPIO</td>
      <td>UART #2 Solicitud de Envío</td>
    </tr>
    <tr>
      <td>12</td>
      <td>I2S0_SCLK</td>
      <td>199</td>
      <td>DAP5_SCLK</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Reloj</td>
    </tr>
    <tr>
      <td>13</td>
      <td>SPI1_SCK</td>
      <td>106</td>
      <td>SPI3_SCK</td>
      <td>GPIO</td>
      <td>SPI #1 Reloj de Desplazamiento</td>
    </tr>
    <tr>
      <td>14</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
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
      <td>SPI #1 Selección de Chip #1</td>
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
      <td>SPI #0 Selección de Chip #0</td>
    </tr>
    <tr>
      <td>19</td>
      <td>SPI0_MOSI</td>
      <td>89</td>
      <td>SPI1_MOSI</td>
      <td>GPIO</td>
      <td>SPI #0 Maestro Salida/Esclavo Entrada</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>SPI0_MISO</td>
      <td>93</td>
      <td>SPI1_MISO</td>
      <td>GPIO</td>
      <td>SPI #0 Maestro Entrada/Esclavo Salida</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 Maestro Entrada/Esclavo Salida</td>
    </tr>
    <tr>
      <td>23</td>
      <td>SPI0_SCK</td>
      <td>91</td>
      <td>SPI1_SCK</td>
      <td>GPIO</td>
      <td>SPI #0 Reloj de Desplazamiento</td>
    </tr>
    <tr>
      <td>24</td>
      <td>SPI0_CS0*</td>
      <td>95</td>
      <td>SPI1_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 Selección de Chip #0</td>
    </tr>
    <tr>
      <td>25</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>26</td>
      <td>SPI0_CS1*</td>
      <td>97</td>
      <td>SPI1_CS1</td>
      <td>GPIO</td>
      <td>SPI #0 Selección de Chip #1</td>
    </tr>
    <tr>
      <td>27</td>
      <td>I2C0_SDA</td>
      <td>187</td>
      <td>GEN2_I2C_SDA</td>
      <td>I2C #0 Datos</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>28</td>
      <td>I2C0_SCL</td>
      <td>185</td>
      <td>GEN2_I2C_SCL</td>
      <td>I2C #0 Reloj</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>29</td>
      <td>GPIO01</td>
      <td>118</td>
      <td>SOC_GPIO41</td>
      <td>GPIO</td>
      <td>Reloj de Propósito General #0</td>
    </tr>
    <tr>
      <td>30</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>31</td>
      <td>GPIO11</td>
      <td>216</td>
      <td>SOC_GPIO42</td>
      <td>GPIO</td>
      <td>Reloj de Propósito General #1</td>
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
      <td>Tierra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>35</td>
      <td>I2S0_FS</td>
      <td>197</td>
      <td>DAP5_FS</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Selección de Campo</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>UART #1 Listo para Recibir</td>
    </tr>
    <tr>
      <td>37</td>
      <td>SPI1_MOSI</td>
      <td>104</td>
      <td>SPI3_MOSI</td>
      <td>GPIO</td>
      <td>SPI #1 Maestro Salida/Esclavo Entrada</td>
    </tr>
    <tr>
      <td>38</td>
      <td>I2S0_DIN</td>
      <td>195</td>
      <td>DAP5_DIN</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Datos de Entrada</td>
    </tr>
    <tr>
      <td>39</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>I2S0_DOUT</td>
      <td>193</td>
      <td>DAP5_DOUT</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Datos de Salida</td>
    </tr>
  </tbody>
</table>
</div>

### UART

UART significa Transmisor/Receptor Asíncrono Universal. Es un protocolo de comunicación utilizado para la comunicación serie entre dos dispositivos. La comunicación UART involucra dos pines: uno para transmitir datos (TX) y uno para recibir datos (RX). Es asíncrona, lo que significa que los datos se transmiten sin una señal de reloj compartida entre los dispositivos. UART se utiliza comúnmente en varias aplicaciones como microcontroladores, sensores y comunicación entre diferentes dispositivos electrónicos.

#### Descripción General de la Conexión

La interfaz UART está utilizando el pin de abajo, o puedes usar otra interfaz UART en J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Pin del Conector</th>
      <th>Nombre del Pin del Módulo</th>
      <th>Pin del Módulo</th>
      <th>Nombre del pin del SoC</th>
      <th>Uso Predeterminado</th>
      <th>Funcionalidad Alternativa</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
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
Conecta el J401 con TTL con UART como se muestra a continuación:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Pin del Conector J401</th>
      <th> Uso</th>
      <th>USB traductor TTL</th>
      <th>Uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>Tierra</td>
      <td>GND</td>
      <td>Tierra</td>
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

- **Paso 1:** Instala [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) en tu laptop con Windows, y configura PuTTy como se muestra a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **Paso 2:** Instala PuTTy en Jetson, abre tu terminal (ALT+Ctrl+T) y escribe el siguiente comando.

```
sudo apt install putty
```

- **Paso 3:** Usa PuTTy en Windows para enviar 'hello linux' a Jetson, y usa PuTTy en Jetson para enviar 'hello windows' a Windows.

:::note
Asegúrate de que tu velocidad en baudios esté configurada en 115200.
:::

El resultado es el siguiente:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2C significa Circuito Inter-Integrado. Es un protocolo de comunicación serie ampliamente utilizado que permite la comunicación entre múltiples circuitos integrados en un sistema. I2C utiliza dos líneas bidireccionales: una para datos (SDA) y una para reloj (SCL). Los dispositivos conectados en un bus I2C pueden actuar como maestro o esclavo, permitiendo que múltiples dispositivos se comuniquen entre sí. I2C es popular por su simplicidad, flexibilidad y capacidad para conectar una variedad de dispositivos como sensores, chips de memoria y otros periféricos en sistemas embebidos y dispositivos electrónicos.

#### Descripción General de la Conexión

La interfaz I2C utiliza los pines como se muestra a continuación, o puedes usar otra interfaz I2C en J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Pin del Conector</th>
      <th>Nombre del Pin del Módulo</th>
      <th>Pin del Módulo</th>
      <th>Nombre del Pin del SoC</th>
      <th>Uso Predeterminado</th>
      <th>Funcionalidad Alternativa</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Suministro Principal de 5.0V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>Datos I2C #1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>Reloj I2C #1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Tierra</td>
      <td>-</td>
    </tr>
    </table>
</div>

Conecta el J401 al [Grove-3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) con I2C como se muestra a continuación:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>Uso</th>
      <th>Grove-3-Axis Digital Accelerometer</th>
      <th>Uso</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>Suministro de 5V</td>
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
      <td>Tierra</td>
      <td>GND</td>
      <td>Tierra</td>
    </tr>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-connect.gif"/></div>

#### Prueba

Abre tu terminal (ALT+Ctrl+T) y escribe el siguiente comando:

```
i2cdetect -y -r 7
```

:::note
Tu canal puede ser diferente del mío en el comando: ```i2cdetect -y -r x```.
:::

Verás el resultado como se muestra a continuación, antes de conectar al I2C, no se detectó ningún dispositivo I2C en el canal 7, pero después se detectó un dispositivo I2C con la dirección 0x19.:

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
Si deseas usar los pines IO generales para control lógico, por favor consulta [esta wiki](/es/reComputer_Jetson_GPIO).
:::

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
