---
description: Esta guía proporciona una descripción detallada de los componentes de hardware e interfaces del reComputer Super, incluyendo cómo conectar y usar dispositivos como cámaras CSI, puertos USB, varias interfaces M.2, mini PCIe, RTC, Ethernet, LEDs, ventiladores, CAN, puertos de extensión y HDMI, con instrucciones paso a paso y ejemplos de comandos.
title: Uso de Hardware e Interfaces del reComputer Super
keywords:
  - reComputer Super
  - Uso de Interfaces
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /es/recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 05/26/2025
  author: Zibo
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

Esta wiki presenta los diversos componentes de hardware e interfaces del reComputer Super y cómo usarlos para expandir las ideas de tu proyecto.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Cámara CSI

El reComputer Super soporta 4 cámaras MIPI CSI estándar para captura de imágenes y video. Por favor, sigue los pasos a continuación para conectar y probar tu cámara.

### Conexión de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Paso1.** Abre la cubierta trasera del Recomputer Super.

**Paso2.** Conecta la cámara MIPI CSI al puerto CSI apropiado en la placa del reComputer Super.

**Paso3.** Asegura la cámara y garantiza que la conexión esté firme.

### Instrucciones de Uso

:::note
Antes de usar la cámara CSI, por favor asegúrate de haber instalado una versión de JetPack con los controladores de cámara necesarios.
:::

**Paso1.** Verifica si la cámara es reconocida por el sistema:

```bash
ls /dev/video*
```

**Paso2.** (Opcional) Instala utilidades de video si no están presentes:

```bash
sudo apt install v4l-utils
```

**Paso3.** Inicia la cámara y muestra el flujo de video usando el siguiente comando:

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
Cambia `--sensor-id` al valor apropiado si tienes múltiples cámaras.
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

El reComputer Super tiene un total de 4 puertos USB 3.2 y 1 puerto USB 2.0 Type-C para depuración.

### Puerto USB 3.2

Podemos ingresar `watch -n 1 lsusb -tv` en la terminal de Jetson para sondear los puertos USB. Una vez que se conecta un dispositivo USB, la información detallada sobre ese puerto se mostrará aquí.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Adicionalmente, puedes probar la velocidad de lectura y escritura de dispositivos de almacenamiento USB usando el comando `dd`:

- **Lectura:**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **Escritura:**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### Puerto USB 2.0 Type-C

Usando este puerto serie, a través del cable de datos USB C, puedes monitorear la información de depuración de entrada y salida en el lado de la PC.

**Paso1.** Cambia el interruptor al modo de depuración.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Paso2.** Conecta la PC a través de un cable de datos USB, descarga el [Controlador CP210X](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Paso3.** Conecta la PC a través de un cable de datos USB, extrae el archivo descargado e instala el controlador en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Paso4.** Abre el Administrador de Dispositivos en tu PC con Windows y verifica el número de puerto COM asignado al reComputer Super. Debería aparecer bajo "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", donde X es el número del puerto COM.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**Paso5.** Abre la herramienta de puerto serie (Aquí, usamos la herramienta MobaXterm como ejemplo), crea una nueva sesión.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Paso6.** Selecciona la herramienta Serial.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Paso7.** Selecciona el puerto serie correspondiente, establece la velocidad de baudios a 115200 y haz clic en "OK".

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**Paso8.** Inicia sesión en tu reComputer Super con el nombre de usuario y contraseña.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, proporcionando velocidades de transferencia de datos ultra rápidas, ideal para aplicaciones de alto rendimiento.

### Los SSD compatibles son los siguientes

- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 2TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### Conexión de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### Instrucciones de Uso

Abre la terminal en el dispositivo Jetson e ingresa el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
Por favor ejecuta el comando `sudo rm /home/seeed/ssd/test` para eliminar los archivos de caché después de que la prueba esté completa.
:::

## M.2 Key E

La interfaz M.2 Key E es una interfaz de datos compacta y de alta velocidad diseñada para módulos de comunicación inalámbrica como Wi-Fi y Bluetooth, utilizada para expandir las capacidades inalámbricas.

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### Instrucciones de Uso

Después de instalar el módulo Wi-Fi y encender el dispositivo, podemos configurar las configuraciones de Wi-Fi y Bluetooth del dispositivo.

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

**Bluetooth:**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

El reComputer super viene con un mini-PCIe para módulo LTE 4G.

#### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
Si quieres remover la tarjeta SIM, empuja la tarjeta hacia adentro para activar el resorte interno para que la SIM salga de la ranura
:::

### Instrucciones de Uso

**Paso1.** Instala minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Paso2.** Ingresa a la consola serie del módulo 4G conectado para que podamos ingresar comandos AT e interactuar con el módulo 4G:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Paso3.** Presiona Ctrl+A y luego presiona E para activar el eco local.

**Paso4.** Ingresa el comando "AT" y presiona enter. Si ves la respuesta como "OK", el módulo 4G está funcionando correctamente.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Paso5.** Ingresa el comando "ATI" para verificar la información del módulo.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

Usando la red 4G para acceso a internet

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

El reComputer Super cuenta con interfaces RTC, proporcionando cronometraje preciso incluso cuando el sistema está apagado.

### Conexión de Hardware

Conecta una batería de celda de moneda CR1225 de 3V al socket RTC en la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté mirando hacia arriba.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### Instrucciones de Uso

**Paso1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso2.** Enciende el reComputer Super.

**Paso3.** En el Escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Settings > Date & Time`, conéctate a una red a través de un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha/hora automáticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Si no te has conectado a internet a través de Ethernet, puedes establecer manualmente la fecha/hora aquí.
:::

**Paso4.** Abre una ventana de terminal y ejecuta el siguiente comando para verificar la hora del reloj de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**Paso 5.** Desconecta la conexión de red y reinicia el dispositivo. Encontrarás que el tiempo del sistema ha perdido energía pero aún funciona normalmente.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

Hay 2 puertos RJ45 Gigabit Ethernet en reComputer Super que soportan 10/100/1000M. ETH0 es el puerto Ethernet nativo, y el otro ETH1 está convertido desde PCIe.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

Hay 2 LEDs (verde y amarillo) en cada puerto Ethernet:

- LED Verde: Se enciende solo cuando está conectado a una red de 1000M/10G.
- LED Amarillo: Muestra el estado de actividad de la red.

Probar la velocidad de Ethernet:

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` es la dirección IP del servidor, y -R significa modo inverso.
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## Indicadores LED

El reComputer Super está equipado con 2 indicadores LED (PWR y ACT) para mostrar el estado de energía y la actividad del sistema, permitiendo a los usuarios monitorear la operación del dispositivo en tiempo real.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## Ventilador

El reComputer Super está equipado con dos tipos de conectores de ventilador para satisfacer diferentes necesidades de voltaje y refrigeración:

- 1x Conector de Ventilador de 4 Pines (5V PWM): Diseñado para ventiladores silenciosos de bajo voltaje y baja potencia, este conector soporta control de velocidad PWM, permitiendo el ajuste inteligente de la velocidad del ventilador basado en la temperatura del sistema para mejorar la eficiencia energética y reducir el ruido.

- 1x Conector de Ventilador de 4 Pines (12V PWM): Compatible con ventiladores PWM estándar de 12V, también soporta control de velocidad preciso, haciéndolo ideal para requisitos de refrigeración de alto rendimiento.

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
Para más información, por favor consulta [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

**Configurar velocidad del ventilador:**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

Adicionalmente, podemos configurar manualmente la velocidad del ventilador usando la herramienta jtop.

## CAN

La serie reComputer Super proporciona una interfaz CAN donde la señal CAN se emite directamente desde el SOM a niveles TTL/CMOS, que es una señal diferencial no estándar que requiere un transceptor CAN externo para conectarse a un bus CAN estándar; soporta formatos de trama CAN FD, permitiendo longitud de datos extendida y tasas de datos más altas, haciéndolo adecuado para automatización industrial, robótica, prototipado automotriz y otras aplicaciones que requieren comunicación confiable en tiempo real.

### Conexión de Hardware

Por favor nota la secuencia de las líneas conectadas (R OUT ↔ RX, D IN ↔ TX), y luego conviértelas a CAN_L y CAN_H a través del transceptor del bus CAN.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

Según la [Hoja de Datos de reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf), conecta el calentador CAN al transceptor del bus CAN de la manera correspondiente, luego conecta el transceptor del bus CAN al [Adaptador Analizador USB a CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html), y finalmente conéctalo al Jetson para pruebas de comunicación de bucle cerrado.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_port.png"/>
</div>


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_connect.png"/>
</div>

### Instrucciones de Uso

**Paso 1.** Configurar y abrir can0:

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```
**Paso 2.** Prueba de comunicación.
Abre una terminal para recibir señales.
```bash
candump can0
```

**Paso 3.** Abre otra terminal para enviar la señal.
```bash
cansend can0 123#abcdabcd
```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_loop.png"/>
</div>

## Puerto de Extensión

El Puerto de Extensión incluye un encabezado de extensión de 40 pines y un encabezado de control y UART de 12 pines, proporcionando opciones de conectividad versátiles para periféricos e interfaces de comunicación.

### Encabezado de Extensión de 40 Pines

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

El Encabezado de Extensión de 40 Pines es una interfaz de expansión versátil que proporciona varias funciones como GPIO, I2C, SPI y UART, haciéndolo conveniente para conectar sensores, periféricos u otros módulos.

El detalle del encabezado de 40 pines se muestra a continuación:

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>Pin del Encabezado</th>
  <th>Señal</th>
  <th>Pin BGA</th>
  <th>Función Predeterminada</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>3.3V</td><td>-</td><td>Suministro Principal de 3.3V</td></tr>
<tr><td>2</td><td>5V</td><td>-</td><td>Suministro Principal de 5V</td></tr>
<tr><td>3</td><td>I2C1_SDA</td><td>PDD.02</td><td>Datos I2C #1</td></tr>
<tr><td>4</td><td>5V</td><td>-</td><td>Suministro Principal de 5V</td></tr>
<tr><td>5</td><td>I2C1_SCL</td><td>PDD.01</td><td>Reloj I2C #1</td></tr>
<tr><td>6</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>7</td><td>GPIO09</td><td>PAC.06</td><td>E/S de Propósito General</td></tr>
<tr><td>8</td><td>UART1_TXD</td><td>PR.02</td><td>Transmisión UART #1</td></tr>
<tr><td>9</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>10</td><td>UART1_RXD</td><td>PR.03</td><td>Recepción UART #1</td></tr>
<tr><td>11</td><td>UART1_RTS</td><td>PR.04</td><td>Solicitud de Envío UART #1</td></tr>
<tr><td>12</td><td>I2S0_SCLK</td><td>PH.07</td><td>Reloj de Audio I2S #0</td></tr>
<tr><td>13</td><td>SPI1_SCK</td><td>PY.00</td><td>Reloj SPI #1</td></tr>
<tr><td>14</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>15</td><td>GPIO12</td><td>PN.01</td><td>E/S de Propósito General</td></tr>
<tr><td>16</td><td>SPI1_CS1</td><td>PY.04</td><td>Selección de Chip SPI #1 #1</td></tr>
<tr><td>17</td><td>3.3V</td><td>-</td><td>Suministro Principal de 3.3V</td></tr>
<tr><td>18</td><td>SPI1_CS0</td><td>PY.03</td><td>Selección de Chip SPI #1 #0</td></tr>
<tr><td>19</td><td>SPI0_MOSI</td><td>PZ.05</td><td>SPI #0 Maestro Salida / Esclavo Entrada</td></tr>
<tr><td>20</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>21</td><td>SPI0_MISO</td><td>PZ.04</td><td>SPI #0 Maestro Entrada / Esclavo Salida</td></tr>
<tr><td>22</td><td>SPI1_MISO</td><td>PY.01</td><td>SPI #1 Maestro Entrada / Esclavo Salida</td></tr>
<tr><td>23</td><td>SPI0_SCK</td><td>PZ.03</td><td>Reloj SPI #0</td></tr>
<tr><td>24</td><td>SPI0_CS0</td><td>PZ.06</td><td>Selección de Chip SPI #0 #0</td></tr>
<tr><td>25</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>26</td><td>SPI0_CS1</td><td>PZ.07</td><td>Selección de Chip SPI #0 #1</td></tr>
<tr><td>27</td><td>ID_I2C_SDA (I2C0_SDA)</td><td>PDD.00</td><td>Datos I2C #0</td></tr>
<tr><td>28</td><td>ID_I2C_SCL (I2C0_SCL)</td><td>PCC.07</td><td>Reloj I2C #0</td></tr>
<tr><td>29</td><td>GPIO01</td><td>PQ.05</td><td>E/S de Propósito General</td></tr>
<tr><td>30</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>31</td><td>GPIO11</td><td>PQ.06</td><td>E/S de Propósito General</td></tr>
<tr><td>32</td><td>GPIO07</td><td>PG.06</td><td>E/S de Propósito General</td></tr>
<tr><td>33</td><td>GPIO13</td><td>PG.00</td><td>Reservado del Sistema</td></tr>
<tr><td>34</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>35</td><td>I2S0_LRCK (I2S0_FS)</td><td>PI.02</td><td>Sincronización de Trama de Audio I2S #0</td></tr>
<tr><td>36</td><td>UART1_CTS</td><td>PR.05</td><td>Listo para Recibir UART #1</td></tr>
<tr><td>37</td><td>SPI1_MOSI</td><td>PY.02</td><td>SPI #1 Maestro Salida / Esclavo Entrada</td></tr>
<tr><td>38</td><td>I2S0_SDIN (I2S0_DIN)</td><td>PI.01</td><td>Entrada de Datos de Audio I2S #0</td></tr>
<tr><td>39</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>40</td><td>I2S0_SDOUT (I2S0_DOUT)</td><td>PI.00</td><td>Salida de Datos de Audio I2S #0</td></tr>
</tbody>
</table>
</div>


### Instrucciones de Uso

Ejemplo simple de control GPIO
```bash
#install
sudo apt-get install gpiod

# Search for the corresponding number for the pin
sudo gpiofind PH.00
gpiochip0 43

#Set the pin to H, then press Enter to release.
sudo gpioset --mode=wait 0 43=1

#Set the Pin to L, then press Enter to release.
sudo gpioset --mode=wait 0 43=0

#gpio 0_119 Low level maintained for 2 seconds
sudo gpioset --mode=time -s 2 0 119=0

#input
sudo gpioget 0 43
```
**Si quieres configurar el GPIO que no está habilitado por defecto, por favor consulta los siguientes pasos:**

Habilitar Encabezado de 40 Pines:
```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

Guardar y reiniciar.

**Configurar el GPIO no controlado a través de la configuración Overlay:**

**Paso 1.** Descarga y extrae el [paquete overlay](https://files.seeedstudio.com/wiki/overlay.zip) a tu dispositivo jetson.
```bash
wget https://files.seeedstudio.com/wiki/overlay.zip
```
**Paso 2.** Copia build.sh y gpio-overlay.dts a Jetson.

**Paso 3.** Edita el archivo `pio-overlay.dts` y modifícalo para incluir las definiciones de pinmux para los pines que necesites.
:::info
más detalles puedes verlos en [jetson-orin-nx-and-orin-nano-series-pinmux-config](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)
:::

**Paso 3.**   Habilita la configuración de overlay.
```bash
sudo bash ./build.sh
#The following command needs to be executed only once.
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
```
**Paso 4.** Reinicia el dispositivo para que la configuración surta efecto.
```bash
sudo reboot
```
**Paso 5.** Ahora puedes controlar los pines que acabas de modificar mediante `gpioset`.
```bash
#For example px7
sudo gpioset --mode=wait 0 121=1
```


### Conector de Control de 12 Pines y UART

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

El Conector de Control de 12 Pines y UART proporciona señales de control esenciales e interfaces de comunicación UART para conectar y gestionar dispositivos externos.

:::note
Las funciones de los pines de reComputer Super son similares a las de reComputer Classic. Para información más detallada, consulta [aquí](https://wiki.seeedstudio.com/es/J401_carrierboard_Hardware_Interfaces_Usage/#gpio).
:::

## HDMI

reComputer Super está equipado con un puerto HDMI 2.1 Tipo A, que soporta una resolución de 7680x4320. Esto permite una salida de video de ultra alta definición.

## Recursos
- [Manual de Usuario y Hoja de Datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [Informe de Prueba de Temperatura](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Super_Temperature_Test_Report.pdf)
- [Esquemático](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [Archivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [Documento Mecánico-reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [Documento Mecánico-reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)

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
