---
description: Esta guía proporciona una descripción detallada de los componentes de hardware e interfaces del reComputer Super, incluyendo cómo conectar y usar dispositivos como cámaras CSI, puertos USB, varias interfaces M.2, mini PCIe, RTC, Ethernet, LEDs, ventiladores, CAN, puertos de extensión y HDMI, con instrucciones paso a paso y ejemplos de comandos.
title: Hardware y Uso de Interfaces del reComputer Super
keywords:
  - reComputer Super
  - Interfaces Usage
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

Esta wiki presenta las diversas interfaces y hardware diferentes en el reComputer Super y cómo usarlos para expandir las ideas de tu proyecto.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Cámara CSI

El reComputer Super soporta 4 cámaras MIPI CSI estándar para captura de imagen y video. Por favor sigue los pasos a continuación para conectar y probar tu cámara.

### Conexión de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Paso1.** Abre la cubierta trasera del Recomputer Super.

**Paso2.** Conecta la cámara MIPI CSI al puerto CSI apropiado en la placa del reComputer Super.

**Paso3.** Asegura la cámara y asegúrate de que la conexión esté firme.

### Instrucciones de Uso

:::note
Antes de usar la cámara CSI, por favor asegúrate de haber instalado una versión de JetPack con los controladores de cámara necesarios.
:::

**Paso 1.** Verificar si la cámara es reconocida por el sistema:

```bash
ls /dev/video*
```

**Paso 2.** (Opcional) Instala las utilidades de video si no están ya presentes:

```bash
sudo apt install v4l-utils
```

**Paso 3.** Inicia la cámara y muestra el flujo de video usando el siguiente comando:

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
Cambia `--sensor-id` al valor correspondiente si tienes varias cámaras.
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

Además, puedes probar la velocidad de lectura y escritura de dispositivos de almacenamiento USB usando el comando `dd`:

- **Lectura:**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **Escribir:**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### Puerto USB 2.0 Type-C

Usando este puerto serie, a través del cable de datos USB C, puedes monitorear la información de depuración de entrada y salida en el lado del PC.

**Paso1.** Cambia el interruptor al modo de depuración.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Paso2.** Conecta el PC a través de un cable de datos USB, descarga el [Controlador CP210X](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Paso3.** Conecta el PC a través de un cable de datos USB, extrae el archivo descargado e instala el controlador en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Paso4.** Abre el Administrador de dispositivos en tu PC con Windows y verifica el número de puerto COM asignado al reComputer Super. Debería aparecer bajo "Puertos (COM y LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", donde X es el número de puerto COM.

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
Por favor, ejecuta el comando `sudo rm /home/seeed/ssd/test` para eliminar los archivos de caché después de que la prueba haya finalizado.
:::

## M.2 Key E

La interfaz M.2 Key E es una interfaz de datos compacta y de alta velocidad diseñada para módulos de comunicación inalámbrica como Wi-Fi y Bluetooth, utilizada para expandir las capacidades inalámbricas.

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
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
Si deseas retirar la tarjeta SIM, empuja la tarjeta para activar el resorte interno y que la SIM salga de la ranura.
:::

### Instrucciones de Uso

**Paso 1.** Instalar minicom:

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

Usando la red 4G para acceso a internet

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

El reComputer Super cuenta con interfaces RTC, proporcionando cronometraje preciso incluso cuando el sistema está apagado.

### Conexión de Hardware

Conecta una batería de celda tipo moneda CR1225 de 3V al socket RTC en la placa como se muestra a continuación. Asegúrate de que el extremo **positivo (+)** de la batería esté mirando hacia arriba.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### Instrucciones de Uso

**Paso 1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso 2.** Enciende el reComputer Super.

**Paso 3.** En el Escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Configuración > Fecha y Hora`, conéctate a una red mediante un cable Ethernet y selecciona **Fecha y Hora Automática** para obtener la fecha/hora automáticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Si no te has conectado a internet mediante Ethernet, puedes configurar manualmente la fecha y la hora aquí.
:::

**Paso 4.** Abre una ventana de terminal y ejecuta el siguiente comando para verificar la hora del reloj de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**Paso 5.** Desconecta la conexión de red y reinicia el dispositivo. Encontrarás que la hora del sistema ha perdido energía pero aún funciona normalmente.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

Hay 2 puertos RJ45 Gigabit Ethernet en reComputer Super que soportan 10/100/1000M. ETH0 es el puerto Ethernet nativo, y el otro ETH1 está convertido desde PCIe.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

Hay 2 LEDs (verde y amarillo) en cada puerto Ethernet:

- LED verde: Se enciende solo cuando está conectado a una red de 1000M/10G.
- LED amarillo: Muestra el estado de actividad de la red.

Prueba la velocidad de Ethernet:

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<dirección IP>` es la dirección IP del servidor, y -R significa modo inverso.
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

El reComputer Super está equipado con 2 indicadores LED (PWR y ACT) para mostrar el estado de alimentación y la actividad del sistema, permitiendo a los usuarios monitorear el funcionamiento del dispositivo en tiempo real.

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

**Establecer velocidad del ventilador:**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

Además, podemos configurar manualmente la velocidad del ventilador usando la herramienta jtop.

## CAN

La interfaz CAN (Controller Area Network) es un protocolo de comunicación serie utilizado para la comunicación entre microcontroladores y dispositivos, que presenta alta velocidad, fuerte capacidad anti-interferencia y soporte para comunicación multi-nodo.

### Conexión de Hardware

- Por favor, tenga en cuenta la secuencia de las líneas conectadas (R OUT ↔ RX, D IN ↔ TX), y luego conviértalas a CAN_L y CAN_H a través del transceptor de bus CAN.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

- [Descarga de Herramienta CAN para PC](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)
- Bus CAN de nivel CMOS 3.3V (no diferencial)

:::note
La interfaz CAN utiliza una fuente de alimentación aislada, lo que significa que la señal de tierra de los dispositivos externos conectados a la interfaz CAN debe conectarse al pin **GND_ISO**.
:::

Aquí hemos usado [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) con Cable USB disponible en nuestro Bazaar.

### Instrucciones de Uso

**Paso1.** Descarga el controlador para el adaptador USB a CAN que estés usando desde el sitio web del fabricante e instálalo. En nuestro caso, según el adaptador que usamos, los controladores se pueden encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver).

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

## Puerto de Extensión

El Puerto de Extensión incluye un conector de extensión de 40 pines y un conector de control y UART de 12 pines, proporcionando opciones de conectividad versátiles para periféricos e interfaces de comunicación.

Conector de Extensión de 40 Pines

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

El Conector de Extensión de 40 Pines es una interfaz de expansión versátil que proporciona varias funciones como GPIO, I2C, SPI, y UART, facilitando la conexión de sensores, periféricos u otros módulos.

### Instrucciones de Uso

**Habilitar Conector de 40 Pines:**

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

Guarda y reinicia.

**Configura el GPIO no controlado a través de la configuración de Overlay:**

**Paso 1.** Descarga y extrae el [paquete de overlay](https://files.seeedstudio.com/wiki/overlay.zip) a tu dispositivo jetson.

**Paso 2.** Copia build.sh y gpio-overlay.dts al Jetson.

**Paso 3.** Ejecuta sudo ./build.sh.

**Paso 4.** Ejecuta sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay".

:::note
Esto debe ejecutarse solo una vez y no será necesario volver a ejecutarlo posteriormente.
:::

```bash
cd overlay/
ls -l
#total 16
#-rwxrwxr-x 1 seeed seeed  147 Sep  9 07:33 build.sh
#-rw-r--r-- 1 root  root  1353 Sep  9 07:36 gpio-overlay.cpp.dts
#-rw-r--r-- 1 root  root  1214 Sep  9 07:36 gpio-overlay.dtbo
#-rw-rw-r-- 1 seeed seeed 1879 Sep  9 07:35 gpio-overlay.dts
sudo ./build.sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
#Modified /boot/extlinux/extlinux.conf to add following DTBO entries:
#/boot/gpio-overlay.dtbo
#Reboot system to reconfigure.

```

Los siguientes son ejemplos de comandos para operar pines GPIO usando el kit de herramientas gpiod.

**Paso 1.** Instalar gpiod:

  ```bash
  sudo apt-get install gpiod
  ```

**Paso 2.** Encuentra el número de pin:

  ```bash
  sudo gpiofind PH.00
  ```

**Paso 3.** Establecer el pin en alto:

  ```bash
  sudo gpioset --mode=wait 0 43=1
  ```

**Paso 4.** Establecer el pin en bajo:

  ```bash
  sudo gpioset --mode=wait 0 43=0
  ```

**Paso 5.** Leer entrada:

  ```bash
  gpioget 0 4
  ```

Ejemplo de Script de Control GPIO

```bash
#!/bin/bash

# GPIO Control Script
# Usage:
#   gpio_ctrl.sh <pin_name> <command>
# Commands:
#   get    - Read the current pin level
#   set    - Drive the pin high
#   clear  - Drive the pin low

# Parameter validation
if [ $# -ne 2 ]; then
    echo "Usage: $0 <pin_name> <command>"
    echo "Commands:"
    echo "  get    - Read pin state"
    echo "  set    - Set to high level"
    echo "  clear  - Set to low level"
    exit 1
fi

# Map and parse arguments
PIN_NAME=$1
COMMAND=$2

# Locate the GPIO
GPIO_INFO=$(gpiofind "$PIN_NAME" 2>/dev/null)
if [ -z "$GPIO_INFO" ]; then
    echo "Hardware alert: GPIO pin $PIN_NAME not found"
    exit 1
fi

# Split info into chip and offset
GPIO_CHIP=$(echo "$GPIO_INFO" | cut -d' ' -f1 | tr -d 'gpiochip')
GPIO_OFFSET=$(echo "$GPIO_INFO" | awk '{print $2}')

# Execute command
case $COMMAND in
    "get")
        gpioget $GPIO_CHIP $GPIO_OFFSET
        ;;
    "set")
        echo "Setting $PIN_NAME to high level..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=1
        ;;
    "clear")
        echo "Setting $PIN_NAME to low level..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=0
        ;;
    *)
        echo "Error: Invalid command. Please use get, set, or clear."
        exit 1
        ;;
esac

```

Cabecera de Control y UART de 12 Pines

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

La Cabecera de Control y UART de 12 Pines proporciona señales de control esenciales e interfaces de comunicación UART para conectar y gestionar dispositivos externos.

## HDMI

reComputer Super está equipado con un puerto HDMI 2.1 Tipo A, que soporta una resolución de 7680x4320. Esto permite una salida de video de ultra alta definición.

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
