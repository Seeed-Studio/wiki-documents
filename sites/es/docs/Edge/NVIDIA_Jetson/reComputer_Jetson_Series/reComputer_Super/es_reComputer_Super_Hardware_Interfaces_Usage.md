---
description: "Interfaces de reComputer Super: CSI, USB, M.2 Key M y E, Mini PCIe, RTC, Ethernet, LED, ventilador y CAN. Distribución de pines, cableado y comandos probados."
title: Uso del hardware e interfaces de reComputer Super
keywords:
  - reComputer Super
  - Interfaces Usage
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 11/06/2026
  author: Zibo
createdAt: '2025-05-29'
updatedAt: '2026-11-06'
url: https://wiki.seeedstudio.com/es/recomputer_jetson_super_hardware_interfaces_usage/
---

<div align="center">
  <img alt="reComputer Super, placa portadora desnuda junto a la unidad ensamblada mostrando los puertos frontales" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

La reComputer Super expone cuatro puertos de cámara MIPI CSI, USB 3.2 y USB 2.0 Type-C, M.2 Key M y Key E, Mini PCIe, RTC, CAN, Ethernet y un encabezado de expansión de 40 pines. Cada sección a continuación cablea una interfaz y proporciona el comando o comprobación que confirma que funciona.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Cámara CSI

La reComputer Super es compatible con 4 cámaras MIPI CSI estándar para captura de imágenes y vídeo. Sigue los pasos a continuación para conectar y probar tu cámara.

### Conexión de hardware

<div align="center">
  <img alt="Cinta de cámara MIPI CSI conectada a la ranura CSI dentro de la carcasa de reComputer Super" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Paso 1.** Abre la tapa trasera de la reComputer Super.

**Paso 2.** Conecta la cámara MIPI CSI al puerto CSI correspondiente en la placa de reComputer Super.

**Paso 3.** Asegura la cámara y verifica que la conexión sea firme.

### Instrucciones de uso

:::note
Antes de usar la cámara CSI, asegúrate de haber instalado una versión de JetPack con los controladores de cámara necesarios.
:::

:::info
**Alcance de la versión:** los comandos siguientes siguen la disposición de JetPack 6.x para las herramientas de cámara y GPIO. NVIDIA cambió partes de la pila de cámara en versiones posteriores, así que en JetPack 7.2 confirma que `nvgstcapture-1.0` está instalado antes de ejecutarlo; si el binario no está presente, controla el sensor con `gst-launch-1.0` y `nvarguscamerasrc` en su lugar.
:::

**Paso 1.** Comprueba si el sistema reconoce la cámara:

```bash
ls /dev/video*
```

**Paso 2.** (Opcional) Instala utilidades de vídeo si aún no están presentes:

```bash
sudo apt install v4l-utils
```

**Paso 3.** Inicia la cámara y muestra el flujo de vídeo usando el siguiente comando:

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
Cambia `--sensor-id` al valor apropiado si tienes varias cámaras.
:::

<div align="center">
  <img alt="Ventana de vista previa de la cámara CSI en el escritorio de reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

La reComputer Super tiene un total de 4 puertos USB 3.2 y 1 puerto USB 2.0 Type-C para depuración.

### Puerto USB 3.2

Podemos introducir `watch -n 1 lsusb -tv` en la terminal de Jetson para sondear los puertos USB. Una vez que se conecta un dispositivo USB, aquí se mostrará la información detallada sobre ese puerto.

<div align="center">
  <img alt="Salida de watch lsusb que lista los dispositivos USB conectados a la reComputer Super" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Además, puedes probar la velocidad de lectura y escritura de los dispositivos de almacenamiento USB usando el comando `dd`:

- **Lectura:**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img alt="Salida de la prueba de lectura con dd midiendo la velocidad de lectura desde una unidad USB" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **Escritura:**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img alt="Salida de la prueba de escritura con dd midiendo la velocidad de escritura en una unidad USB" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### Puerto USB 2.0 Type-C

Usando este puerto serie, a través del cable de datos USB C, puedes monitorizar en el PC la información de depuración de entrada y salida.

**Paso 1.** Cambia el interruptor al modo de depuración.

<div align="center">
  <img alt="Interruptor de modo de depuración y flasheo en la reComputer Super ajustado a modo de depuración" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Paso 2.** Conecta el PC mediante un cable de datos USB y descarga el [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) en tu PC.

<div align="center">
  <img alt="Página de descarga del controlador Silicon Labs CP210x VCP" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Paso 3.** Conecta el PC mediante un cable de datos USB, extrae el archivo descargado e instala el controlador en tu PC.

<div align="center">
  <img alt="CP210xVCPInstaller_x64.exe seleccionado en la carpeta del controlador extraído" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Paso 4.** Abre el Administrador de dispositivos en tu PC con Windows y comprueba el número de puerto COM asignado a la reComputer Super. Debería aparecer en "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", donde X es el número de puerto COM.

<div align="center">
  <img alt="Administrador de dispositivos de Windows mostrando el puerto COM de CP210x en Puertos" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**Paso 5.** Abre la herramienta de puerto serie (aquí usamos la herramienta MobaXterm como ejemplo) y crea una nueva sesión.

<div align="center">
  <img alt="Ventana principal de MobaXterm con la lista de sesiones recientes, incluyendo COM3" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Paso 6.** Selecciona la herramienta Serial.

<div align="center">
  <img alt="Selector de tipo de sesión de MobaXterm con Serial resaltado" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Paso 7.** Selecciona el puerto serie correspondiente, establece la velocidad en baudios a 115200 y haz clic en "OK".

<div align="center">
  <img alt="Ajustes de serie de MobaXterm con el puerto COM y la velocidad de 115200 seleccionados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**Paso 8.** Inicia sesión en tu reComputer Super con el nombre de usuario y la contraseña.

<div align="center">
  <img alt="Consola serie con sesión iniciada en la reComputer Super a través del puerto de depuración" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, que proporciona velocidades de transferencia de datos ultrarrápidas, ideal para aplicaciones de alto rendimiento.

### Las SSD compatibles son las siguientes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### Conexión de hardware

<div align="center">
  <img alt="SSD NVMe colocado en la ranura M.2 Key M de la reComputer Super" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### Instrucciones de uso

Abre la terminal en el dispositivo Jetson e introduce el siguiente comando para probar la velocidad de lectura y escritura de la SSD.

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img alt="Salida en la terminal de la prueba de escritura con dd midiendo el rendimiento de la SSD NVMe" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
Ejecuta el comando `sudo rm /home/seeed/ssd/test` para eliminar los archivos de caché después de que la prueba haya finalizado.
:::

## M.2 Key E

La interfaz M.2 Key E es una interfaz de datos compacta y de alta velocidad diseñada para módulos de comunicación inalámbrica como Wi‑Fi y Bluetooth, utilizada para ampliar las capacidades inalámbricas.

### Conexión de hardware

<div align="center">
  <img alt="Módulo Wi‑Fi instalado en la ranura M.2 Key E con los cables de antena conectados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### Instrucciones de uso

Después de instalar el módulo Wi‑Fi y encender el dispositivo, podemos configurar los ajustes de Wi‑Fi y Bluetooth del dispositivo.

<div align="center">
  <img alt="Escritorio de Ubuntu mostrando los indicadores de Wi‑Fi y Bluetooth después de instalar el módulo inalámbrico" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Por supuesto, también podemos comprobar el estado de funcionamiento del dispositivo usando los siguientes comandos.

```bash
ifconfig
```

<div align="center">
  <img alt="Salida de ifconfig que lista la interfaz inalámbrica en la reComputer Super" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

**Bluetooth:**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img alt="bluetoothctl scan on iniciando el descubrimiento en la reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

La reComputer Super viene con un Mini PCIe para módulo LTE 4G.

### Conexión de hardware

<div align="center">
  <img alt="Módulo 4G Quectel EC25 en la ranura Mini PCIe con tres cables de antena conectados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
Si quieres retirar la tarjeta SIM, presiónala hacia dentro para accionar el muelle interno y que la SIM salga de la ranura.
:::

### Instrucciones de uso

**Paso 1.** Instala minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Paso 2.** Entra en la consola serie del módulo 4G conectado para que podamos introducir comandos AT e interactuar con el módulo 4G:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Paso 3.** Pulsa Ctrl+A y luego pulsa E para activar el eco local.

**Paso 4.** Introduce el comando "AT" y pulsa Intro. Si ves la respuesta "OK", el módulo 4G está funcionando correctamente.

<div align="center">
  <img alt="Terminal serie devolviendo OK después de enviar el comando AT al módulo 4G" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Paso 5.** Introduce el comando "ATI" para comprobar la información del módulo.

<div align="center">
  <img alt="Terminal serie devolviendo la información del módulo después del comando ATI" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

Uso de la red 4G para acceso a internet

<div align="center">
  <img alt="Ajustes de red que muestran la conexión 4G transportando tráfico de internet" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

El reComputer Super incorpora interfaces RTC, proporcionando cronometraje preciso incluso cuando el sistema está apagado.

### Conexión de hardware

Conecta una pila de botón CR1225 de 3V al zócalo RTC de la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la pila esté orientado hacia arriba.

<div align="center">
  <img alt="Pila de botón CR1225 instalada en el zócalo RTC del reComputer Super" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### Instrucciones de uso

**Paso 1.** Conecta una batería RTC como se ha mencionado arriba.

**Paso 2.** Enciende el reComputer Super.

**Paso 3.** En el escritorio de Ubuntu, haz clic en el menú desplegable de la esquina superior derecha, ve a `Settings > Date & Time`, conéctate a una red mediante un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha y hora automáticamente.

<div align="center">
  <img alt="Página de configuración de Fecha y hora de Ubuntu utilizada para activar el ajuste automático de la hora" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Si no te has conectado a internet mediante Ethernet, puedes configurar la fecha y hora manualmente aquí.
:::

**Paso 4.** Abre una ventana de terminal y ejecuta el siguiente comando para comprobar la hora del reloj de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img alt="Terminal leyendo la hora del RTC desde el dispositivo nvvrs-pseq-rtc" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**Paso 5.** Desconecta la conexión de red y reinicia el dispositivo. Verás que la hora del sistema ha perdido la alimentación pero sigue funcionando con normalidad.
<div align="center">
  <img alt="Terminal mostrando la hora del sistema mantenida por el RTC después de desconectar la red" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

Hay 2 puertos Ethernet Gigabit RJ45 en el reComputer Super que admiten 10/100/1000M. ETH0 es el puerto Ethernet nativo y el otro, ETH1, se convierte desde PCIe.

<div align="center">
  <img alt="Dos puertos Ethernet Gigabit RJ45 etiquetados como ETH0 y ETH1 en el reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

Hay 2 LED (verde y amarillo) en cada puerto Ethernet:

- LED verde: ENCENDIDO solo cuando está conectado a una red de 1000M/10G.
- LED amarillo: Muestra el estado de actividad de la red.

Prueba la velocidad de Ethernet:

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` es la dirección IP del servidor, y -R significa modo inverso.
:::

<div align="center">
  <img alt="Cliente iperf3 en modo inverso en el reComputer Super, recibiendo 942 Mbits/s" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img alt="Salida del cliente iperf3 midiendo el rendimiento de Ethernet Gigabit en el reComputer Super" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## Indicadores LED

El reComputer Super está equipado con 2 indicadores LED (PWR y ACT) para mostrar el estado de alimentación y la actividad del sistema, lo que permite a los usuarios supervisar el funcionamiento del dispositivo en tiempo real.

<div align="center">
  <img alt="Indicadores LED PWR y ACT en el reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## Ventilador

El reComputer Super está equipado con dos tipos de conectores de ventilador para satisfacer diferentes necesidades de voltaje y refrigeración:

- 1x conector de ventilador de 4 pines (PWM de 5V): Diseñado para ventiladores silenciosos de bajo voltaje y baja potencia, este conector admite control de velocidad PWM, lo que permite un ajuste inteligente de la velocidad del ventilador en función de la temperatura del sistema para mejorar la eficiencia energética y reducir el ruido.

- 1x conector de ventilador de 4 pines (PWM de 12V): Compatible con ventiladores PWM estándar de 12V, también admite un control de velocidad preciso, lo que lo hace ideal para requisitos de refrigeración de alto rendimiento.

### Conexión de hardware

<div align="center">
  <img alt="Conectores de ventilador PWM de 12V y 5V en la placa del reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
Para más información, consulta [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

**Configurar la velocidad del ventilador:**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

Además, podemos configurar manualmente la velocidad del ventilador usando la herramienta jtop.

## CAN

La serie reComputer Super proporciona una interfaz CAN donde la señal CAN se emite directamente desde el SOM a niveles TTL/CMOS, lo cual es una señal diferencial no estándar que requiere un transceptor CAN externo para conectarse a un bus CAN estándar; admite formatos de trama CAN FD, lo que permite una longitud de datos ampliada y mayores tasas de datos, por lo que es adecuada para automatización industrial, robótica, prototipado automotriz y otras aplicaciones que requieren comunicación fiable y en tiempo real.

### Conexión de hardware

Ten en cuenta la secuencia de las líneas conectadas (R OUT ↔ RX, D IN ↔ TX) y luego conviértelas a CAN_L y CAN_H mediante el transceptor de bus CAN.

<div align="center">
  <img alt="Pines CAN TX y RX cableados al transceptor de bus CAN en el reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

Según la [hoja de datos de reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf), conecta el cabezal CAN al transceptor de bus CAN de la manera correspondiente, luego conecta el transceptor de bus CAN al [adaptador USB a analizador CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) y, por último, conéctalo al Jetson para realizar pruebas de comunicación en bucle.

<div align="center">
  <img alt="Tabla de la hoja de datos para el cabezal de bus CAN que enumera los pines TX, RX, GND y 3V3" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_port.png"/>
</div>


<div align="center">
  <img alt="Analizador USB-a-CAN cableado al cabezal CAN en el reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_connect.png"/>
</div>

### Instrucciones de uso

**Paso 1.** Configura y abre can0:

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```
**Paso 2.** Prueba de comunicación.
Abre un terminal para recibir señales.
```bash
candump can0
```

**Paso 3.** Abre otro terminal para enviar la señal.
```bash
cansend can0 123#abcdabcd
```
<div align="center">
  <img alt="Salida de cansend y candump mostrando una trama CAN en bucle en can0" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_loop.png"/>
</div>

## Puerto de expansión

El puerto de expansión incluye un cabezal de expansión de 40 pines y un cabezal de control y UART de 12 pines, proporcionando opciones de conectividad versátiles para periféricos e interfaces de comunicación.

### Cabezal de expansión de 40 pines

<div align="center">
  <img alt="Cabezal de expansión de 40 pines en la placa portadora del reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

El cabezal de expansión de 40 pines es una interfaz de expansión versátil que proporciona varias funciones como GPIO, I2C, SPI y UART, lo que facilita la conexión de sensores, periféricos u otros módulos.

Los detalles del cabezal de 40 pines se muestran a continuación:

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>Pin del cabezal</th>
  <th>Señal</th>
  <th>Pin BGA</th>
  <th>Función predeterminada</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>3.3V</td><td>-</td><td>Alimentación principal de 3.3V</td></tr>
<tr><td>2</td><td>5V</td><td>-</td><td>Alimentación principal de 5V</td></tr>
<tr><td>3</td><td>I2C1_SDA</td><td>PDD.02</td><td>Datos I2C n.º 1</td></tr>
<tr><td>4</td><td>5V</td><td>-</td><td>Alimentación principal de 5V</td></tr>
<tr><td>5</td><td>I2C1_SCL</td><td>PDD.01</td><td>Reloj I2C n.º 1</td></tr>
<tr><td>6</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>7</td><td>GPIO09</td><td>PAC.06</td><td>Entrada/salida de propósito general</td></tr>
<tr><td>8</td><td>UART1_TXD</td><td>PR.02</td><td>Transmisión UART n.º 1</td></tr>
<tr><td>9</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>10</td><td>UART1_RXD</td><td>PR.03</td><td>Recepción UART n.º 1</td></tr>
<tr><td>11</td><td>UART1_RTS</td><td>PR.04</td><td>Solicitud de envío UART n.º 1</td></tr>
<tr><td>12</td><td>I2S0_SCLK</td><td>PH.07</td><td>Reloj de audio I2S n.º 0</td></tr>
<tr><td>13</td><td>SPI1_SCK</td><td>PY.00</td><td>Reloj SPI n.º 1</td></tr>
<tr><td>14</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>15</td><td>GPIO12</td><td>PN.01</td><td>Entrada/Salida de propósito general</td></tr>
<tr><td>16</td><td>SPI1_CS1</td><td>PY.04</td><td>SPI n.º 1 Chip Select n.º 1</td></tr>
<tr><td>17</td><td>3.3V</td><td>-</td><td>Alimentación principal de 3.3V</td></tr>
<tr><td>18</td><td>SPI1_CS0</td><td>PY.03</td><td>SPI n.º 1 Chip Select n.º 0</td></tr>
<tr><td>19</td><td>SPI0_MOSI</td><td>PZ.05</td><td>SPI n.º 0 Maestro salida / Esclavo entrada</td></tr>
<tr><td>20</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>21</td><td>SPI0_MISO</td><td>PZ.04</td><td>SPI n.º 0 Maestro entrada / Esclavo salida</td></tr>
<tr><td>22</td><td>SPI1_MISO</td><td>PY.01</td><td>SPI n.º 1 Maestro entrada / Esclavo salida</td></tr>
<tr><td>23</td><td>SPI0_SCK</td><td>PZ.03</td><td>SPI n.º 0 Reloj</td></tr>
<tr><td>24</td><td>SPI0_CS0</td><td>PZ.06</td><td>SPI n.º 0 Chip Select n.º 0</td></tr>
<tr><td>25</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>26</td><td>SPI0_CS1</td><td>PZ.07</td><td>SPI n.º 0 Chip Select n.º 1</td></tr>
<tr><td>27</td><td>ID_I2C_SDA (I2C0_SDA)</td><td>PDD.00</td><td>I2C n.º 0 Datos</td></tr>
<tr><td>28</td><td>ID_I2C_SCL (I2C0_SCL)</td><td>PCC.07</td><td>I2C n.º 0 Reloj</td></tr>
<tr><td>29</td><td>GPIO01</td><td>PQ.05</td><td>Entrada/Salida de propósito general</td></tr>
<tr><td>30</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>31</td><td>GPIO11</td><td>PQ.06</td><td>Entrada/Salida de propósito general</td></tr>
<tr><td>32</td><td>GPIO07</td><td>PG.06</td><td>Entrada/Salida de propósito general</td></tr>
<tr><td>33</td><td>GPIO13</td><td>PG.00</td><td>Reservado por el sistema</td></tr>
<tr><td>34</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>35</td><td>I2S0_LRCK (I2S0_FS)</td><td>PI.02</td><td>Audio I2S n.º 0 Sincronización de trama</td></tr>
<tr><td>36</td><td>UART1_CTS</td><td>PR.05</td><td>UART n.º 1 Clear to Send</td></tr>
<tr><td>37</td><td>SPI1_MOSI</td><td>PY.02</td><td>SPI n.º 1 Maestro salida / Esclavo entrada</td></tr>
<tr><td>38</td><td>I2S0_SDIN (I2S0_DIN)</td><td>PI.01</td><td>Audio I2S n.º 0 Datos de entrada</td></tr>
<tr><td>39</td><td>GND</td><td>-</td><td>Tierra</td></tr>
<tr><td>40</td><td>I2S0_SDOUT (I2S0_DOUT)</td><td>PI.00</td><td>Audio I2S n.º 0 Datos de salida</td></tr>
</tbody>
</table>
</div>


### Instrucciones de uso

Ejemplo sencillo de control de GPIO
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
**Si quieres configurar el GPIO que no está habilitado por defecto, consulta los siguientes pasos:**

Habilitar cabecera de 40 pines:
```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img alt="menú principal de jetson-io.py que muestra las opciones de configuración del conector de 40 pines" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img alt="Herramienta Jetson Expansion Header que muestra el mapa de pines del conector de 40 pines con las opciones configurables" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img alt="lista de selección de funciones para el conector de 40 pines con uarta.cts y uarta.rts activados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

Guarda y reinicia.

**Configura el GPIO no controlado mediante la configuración de Overlay:**

**Paso 1.** Descarga y extrae el [overlay package](https://files.seeedstudio.com/wiki/overlay.zip) en tu dispositivo Jetson.
```bash
wget https://files.seeedstudio.com/wiki/overlay.zip
```
**Paso 2.** Copia build.sh y gpio-overlay.dts a Jetson.

**Paso 3.** Edita el archivo `pio-overlay.dts` y modifícalo para incluir las definiciones de pinmux para los pines que necesites.
:::info
puedes ver más detalles en [jetson-orin-nx-and-orin-nano-series-pinmux-config](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)
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
**Paso 5.** Ahora puedes controlar los pines mediante `gpioset` que acabas de modificar.
```bash
#For example px7
sudo gpioset --mode=wait 0 121=1
```


### Cabecera de control y UART de 12 pines

<div align="center">
  <img alt="conector de 12 pines para botón y LED con su lista de pines: PC_LED, UART2, AC OK, SYS_RESET, FORCE_RECOVERY y PWR_BTN" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

La cabecera de control y UART de 12 pines proporciona señales de control esenciales e interfaces de comunicación UART para conectar y gestionar dispositivos externos.

:::note
Las funciones de los pines de reComputer Super son similares a las de reComputer Classic. Para obtener información más detallada, consulta [aquí](https://wiki.seeedstudio.com/es/J401_carrierboard_Hardware_Interfaces_Usage/#gpio).
:::

## HDMI

reComputer Super está equipado con un puerto HDMI 2.1 Tipo A, que admite una resolución de 7680x4320. Esto permite una salida de vídeo de ultra alta definición.

## Preguntas frecuentes

**¿Cuántas cámaras pueden manejar los puertos CSI al mismo tiempo?**
Cuatro. La placa expone cuatro puertos de cámara MIPI CSI, y la prueba en esta página previsualiza uno de ellos con `nvgstcapture`, cambiando `--sensor-id` cuando hay más de una cámara conectada.

**¿Por qué solo ETH0 informa una interfaz nativa?**
ETH1 se convierte desde PCIe, por lo que los dos puertos no comparten el mismo controlador. Ambos negocian 10/100/1000 Mbps, pero solo ETH0 sale directamente del módulo.

**¿Necesito una batería para que el RTC mantenga la hora?**
Sí. Coloca una pila de botón CR1225 de 3V en el zócalo del RTC con el lado positivo hacia arriba, de lo contrario el reloj pierde la hora una vez que la placa se apaga.

**El módulo 4G responde a los comandos AT pero no hay internet.**
Una respuesta `OK` solo demuestra que el módulo está activo en el puerto serie. Levanta la conexión de datos desde la configuración de red y confirma que el tráfico sale a través de ella, como se muestra en el paso de 4G en esta página.

**¿Cuál es la diferencia entre los conectores de 40 pines y 12 pines?**
El conector de 40 pines transporta el conjunto estándar de GPIO de Jetson y se configura mediante `jetson-io.py`. El conector de 12 pines es un conector de control y UART separado para periféricos, que no forma parte del mapa de 40 pines.

## Recursos relacionados

- [Primeros pasos con reComputer Super](/es/recomputer_jetson_super_getting_started/)
- [reComputer Super vs Classic: rendimiento de IA en inferencia en el borde](/es/recomputer_jetson_super_performance/)
- [Instalación de la antena de reComputer](/es/recomputer_antenna_installation/)
- [Página de producto de reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)
- [Repositorio de wiki-documents y debates](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## Recursos
- [Manual de usuario y hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [Informe de prueba de temperatura](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Super_Temperature_Test_Report.pdf)
- [Esquemático](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [Archivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [Documento mecánico - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [Documento mecánico - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
