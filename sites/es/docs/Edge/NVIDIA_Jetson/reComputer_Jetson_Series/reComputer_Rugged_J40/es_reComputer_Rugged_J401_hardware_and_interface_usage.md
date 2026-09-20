---
description: Uso de hardware e interfaces para reComputer Rugged J401
title: Uso de hardware e interfaces de reComputer Rugged J401
keywords:
  - reComputer Rugged
  - reComputer Rugged J401
  - IP66
  - Jetson
  - hardware interface
image: https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png
slug: /ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage
sku: 100046979,100002634
last_update:
  date: 09/18/2026
  author: Dongxu Jin
createdAt: '2026-08-14'
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/es/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage/
---

# Uso de hardware e interfaces de reComputer Rugged J401

Este wiki presenta los distintos componentes de hardware e interfaces de reComputer Rugged J40 y explica cómo utilizarlos para ampliar tus ideas de proyecto. La mayoría de las interfaces en el reComputer Rugged J40 utilizan conectores M12, lo que proporciona resistencia al agua y al polvo con clasificación IP66, así como una excelente resistencia a las vibraciones. Esto lo hace adecuado para despliegues a largo plazo en entornos exteriores hostiles, como a bordo de embarcaciones y en sistemas de monitorización portuaria.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png" alt="Image" width={800} height="auto" /></p>

## Descripción general del hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png"/>
  <p>Vista lateral 1</p>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png"/>
  <p>Vista lateral 2</p>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png"/>
  <p>Vista inferior</p>
</div>

## Especificaciones de la placa carrier

<table>
  <thead>
    <tr>
      <th colSpan={2}>Elemento</th>
      <th>Especificación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td>1× M12 GbE + 4× M12 GbE PSE (IEEE 802.3af, 15 W, 10/100/1000 Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4× USB 3.2 Tipo A (conectores impermeables) + 1× USB 3.0 Tipo C (dispositivo / flasheo) + 1× USB 2.0 Tipo C (depuración)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1× HDMI 2.1 (tapa impermeable)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2× CAN-FD (aislado) mediante M12 con código A</td>
    </tr>
    <tr>
      <td>Serie</td>
      <td>1× RS-232/422/485 mediante M12 con código A</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>2× DI + 2× DO mediante M12 con código A</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td>1× ranura para tarjeta Nano-SIM</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>4× conectores de antena SMA impermeables</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td>M.2 Key M</td>
      <td>1× M.2 Key M para SSD NVMe 2280 (SSD de 128 GB incluido)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Expansión</td>
      <td>M.2 Key E</td>
      <td>1× M.2 Key E para módulo Wi-Fi M.2 2230 (módulo Wi-Fi 6 incluido)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1× M.2 Key B para módulo 5G</td>
    </tr>
    <tr>
      <td rowSpan={4}>A bordo</td>
      <td>SPI / I2C</td>
      <td>1× SPI, 1× I2C (cabecera de pines interna)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>Zócalo RTC, conector de 2 pines</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1× LED PWR (verde), 1× LED SSD (verde)</td>
    </tr>
    <tr>
      <td>Botón</td>
      <td>1× botón Recovery, 1× botón RST</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td>Entrada</td>
      <td>M12 con código A, 19–48 V CC</td>
    </tr>
  </tbody>
</table>

## Alimentación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

reComputer Rugged J401 está equipado con una interfaz de alimentación M12 A-code DC 19-48V, compatible con un amplio rango de entrada de voltaje, lo que lo hace adecuado para diversos entornos de suministro de energía. La definición de la interfaz se muestra en la tabla siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pin|Uso|Tipo|Color del cable|
|---|---|---|---|
|1|Entrada de alimentación DC|Alimentación|Marrón|
|2|||Blanco|
|3|Tierra|Tierra|Azul|
|4|||Negro|

## Pantalla

Retira los dos tornillos que fijan la tapa lateral impermeable y ábrela para acceder al puerto HDMI 2.1, que proporciona una salida de vídeo de alta calidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## M.2 Key M para SSD y M.2 Key E para Wi-Fi y Bluetooth

El reComputer Rugged J401 incorpora una interfaz M.2 Key E, mediante la cual puedes ampliar las capacidades de Bluetooth y Wi-Fi del dispositivo. Recomendamos utilizar la tarjeta de red inalámbrica Intel Dual Band RTL8822CE.

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, que proporciona velocidades de transferencia de datos ultrarrápidas, ideal para aplicaciones de alto rendimiento.

La ubicación de la interfaz se muestra en la figura siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/5.jpg" alt="Image" width={800} height="auto" /></p>

### **Instrucciones de uso**

Si deseas retirar el SSD incluido e instalar uno nuevo, debes asegurarte de que tu SSD cumpla las dos condiciones siguientes:

- Soportar la **ranura M.2 Key M con interfaz x4 PCIe Gen3**.

- Cumplir con la especificación de tamaño **2242**.



Abre el terminal en el dispositivo Jetson e introduce el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```Bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/6.png" alt="Image" width={800} height="auto" /></p>

Ejecuta el comando `sudo rm tempfile` para eliminar los archivos de caché una vez finalizada la prueba.

Después de instalar el módulo Wi-Fi y encender el dispositivo, podemos configurar los ajustes de Wi-Fi y Bluetooth del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/7.gif" alt="Image" width={800} height="auto" /></p>

Por supuesto, también podemos comprobar el estado de funcionamiento del dispositivo utilizando los siguientes comandos.

```Bash
ifconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/8.png" alt="Image" width={800} height="auto" /></p>

```Bash
bluetoothctl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/9.png" alt="Image" width={800} height="auto" /></p>

## M.2 Key B para módulo 4G/5G

La ranura M.2 Key B es compatible con módulos celulares 4G/5G con soporte para tarjeta Nano SIM.

### Conexión de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/10.png" alt="Image" width={800} height="auto" /></p>

### Instrucciones de uso

**Paso 1.** Comprobar el reconocimiento del hardware

```Bash
lsusb 
```

Este comando muestra una lista de todos los dispositivos USB conectados al sistema, junto con su fabricante (ID), tipo y otra información. Por ejemplo, la salida puede mostrar un dispositivo de Quectel Wireless Solutions Co., Ltd. EM12-G, lo que indica que el módulo 5G está presente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**Paso 2.** Confirmar la carga del controlador

Es esencial asegurarse de que el controlador option, que se requiere para el módulo 5G, esté cargado. Podemos usar el comando lsmod para comprobarlo.

```Bash
lsmod | grep option 
```

Si el controlador option se carga correctamente, se mostrará en la salida información relevante sobre dicho controlador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**Paso 3.** Configurar ModemManager

ModemManager es una herramienta para gestionar dispositivos módem, y es necesario instalarla y reiniciarla.

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

El comando apt install se utiliza para instalar el paquete ModemManager, mientras que systemctl restart reinicia el servicio ModemManager para garantizar que la nueva configuración surta efecto.

**Paso 4.** Verificar la identificación del módulo

Podemos usar el comando mmcli -L para comprobar si ModemManager puede identificar correctamente el módulo 5G.

```Bash
mmcli -L 
```

Si se reconoce el módulo 5G, se mostrará una salida similar a /org/freedesktop/ModemManager1/Modem/0, que indica la ruta al dispositivo módem detectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**Paso 5.** Establecer el APN

El APN (Access Point Name) es crucial para conectar un dispositivo móvil a la red. Usaremos el comando nmcli para crear un perfil de portador. Tomando como ejemplo China Mobile, podemos crear un archivo de configuración con los siguientes comandos:

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando añade una nueva conexión de tipo GSM (Global System for Mobile Communications), especificando el APN como "CMNET" y utilizando configuración IPv4 automática.

**Paso 6.** Activar la conexión

Después de crear el perfil de portador, necesitamos activar la conexión.

```Bash
sudo nmcli con up "gsm" 
```

Este comando activa la conexión GSM y, si tiene éxito, se mostrará un mensaje de confirmación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/14.png" alt="Image" width={800} height="auto" /></p>

**Paso 7.** Volver a verificar la identificación del módulo

Ejecuta de nuevo el comando mmcli -L para asegurarte de que el módulo sigue siendo reconocido después de configurar el APN.

```Bash
mmcli -L 
```

**Paso 8.** Comprobar el estado del módulo

Por último, podemos usar el comando mmcli -m 0 para ver información detallada sobre el módulo, como la asignación de IP, el operador y el estado de la conexión de red.

```Bash
mmcli -m 0 
```

Este comando proporciona detalles completos sobre el módulo 5G, incluido su fabricante, modelo, tecnologías de red admitidas y actuales, estado del dispositivo y operadores de red conectados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## Ethernet

El reComputer Rugged J401 proporciona 1 puerto RJ45 Ethernet Gigabit estándar (10/100/1000M) (J35) y 4 puertos RJ45 Gigabit PSE (Power Sourcing Equipment) (J36–J39). El puerto Gigabit estándar se utiliza para la conectividad de red general. Los puertos PSE son compatibles con los estándares IEEE 802.3af/at, lo que permite la alimentación a través de Ethernet a dispositivos conectados como cámaras IP y puntos de acceso inalámbricos, con una salida máxima de 15,4 W por puerto (802.3af). Esto lo hace ideal para aplicaciones industriales, AMR y de computación perimetral en exteriores, eliminando la necesidad de un cableado de alimentación independiente. Todos los puertos Gigabit se derivan del controlador PCIe dentro del módulo Jetson Orin y admiten autonegociación 10/100/1000M.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

## USB

El reComputer Rugged J401 proporciona 4 puertos USB 3.2 Tipo A (a través de un hub interno USB 3.1 Gen1, que admite tasas de datos de hasta 5 Gbps para conectar periféricos de alta velocidad, dispositivos de almacenamiento o cámaras) y 1 puerto USB 2.0 Tipo C de depuración (que funciona como consola serie para acceder a registros del sistema, depurar problemas de arranque y realizar actualizaciones de firmware).

### Prueba de velocidad USB-A

Crea un script para probar la velocidad del dispositivo USB:

```Bash
vim test_usb.sh
```

Pega el contenido siguiente:

```Bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

Pulsa Esc para salir del modo Insertar, luego escribe `:w` y pulsa Intro para guardar el script y, a continuación, sal del proceso.

Haz que el script sea ejecutable y realiza la prueba:

```Bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/17.png" alt="Image" width={800} height="auto" /></p>

### Puerto USB 2.0 tipo C

Usando este puerto serie, a través del cable de datos USB-C, puedes monitorizar en el PC la información de depuración de entrada y salida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/18.jpg" alt="Image" width={400} height="auto" /></p>

Instala el controlador Silicon Labs CP210x Universal Windows VCP en Windows.

En el Administrador de dispositivos, localiza y confirma el puerto COM asignado al dispositivo serie

(COM8 en la captura de pantalla).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/19.png" alt="Image" width={800} height="auto" /></p>

Ejecuta el siguiente comando en PowerShell：

```PowerShell
#Choose your own serial port 
python -m serial.tools.miniterm COM8 115200
```

Inicia sesión con nombre de usuario y contraseña.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/20.png" alt="Image" width={800} height="auto" /></p>

## RTC

El reComputer Rugged J401 incluye un RTC de hardware con batería de respaldo para un cronometraje preciso. Es compatible con baterías tipo moneda CR1220 y CR1225. 

### Conexión de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### Instrucciones de uso

**Paso 1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso 2.** Enciende el reComputer Rugged J401.

**Paso 3.** En el escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, ve a `Settings > Date & Time`, conéctate a una red mediante un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha y hora automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

Si no te has conectado a Internet mediante Ethernet, puedes configurar manualmente la fecha y hora aquí.

**Paso 4.** Abre una ventana de terminal y ejecuta el siguiente comando para comprobar la hora del reloj de hardware:

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Paso 5.** Desconecta la conexión de red y reinicia el dispositivo. Verás que el tiempo del sistema ha perdido la alimentación pero sigue funcionando con normalidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

El módulo NVIDIA Jetson Orin Nano/NX proporciona solo un controlador CAN nativo ([Controller Area Network (CAN) — NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html)). Para obtener una segunda interfaz CAN, se requiere un controlador CAN externo como el MCP2518FDT-E. Para activar el segundo puerto CAN, carga el controlador con `sudo modprobe mttcan`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-1.jpg" alt="Image" width={800} height="auto" /></p>

### Instrucciones de uso

#### Prueba USB-CAN

Utiliza un adaptador USB-CAN para verificar la comunicación CAN como se indica a continuación.

:::note
Los adaptadores USB-CAN suelen incluir una resistencia de terminación integrada.

- Cuando `CAN0_120R_EN_3V3=1`, la resistencia de terminación de 120 Ω integrada de CAN0 está desconectada.
- Cuando `CAN0_120R_EN_3V3=0`, la resistencia de terminación de 120 Ω integrada de CAN0 está conectada.

La misma lógica se aplica al pin de control de terminación de CAN1.
:::

##### Cargar el controlador y configurar la interfaz

```Bash
# Load the driver to bring up the second CAN port
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up

# Disconnect the onboard 120 Ω termination resistors
# because the USB-CAN adapter already provides termination
sudo gpioset -m wait gpiochip2 2=1 3=1
```

##### Monitorizar y enviar datos

```Bash
# Monitor data
candump can0 &
candump can1 &

# Send data
cansend can0 123#abcdabcd
```

Recepción y transmisión de CAN0:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-2.png" alt="Image" width={800} height="auto" /></p>

Transmisión de CAN1:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-3.png" alt="Image" width={800} height="auto" /></p>

#### Prueba de bucle de retorno CAN

También puedes conectar CAN0 y CAN1 juntos para una prueba de bucle de retorno a nivel de placa. Une físicamente los dos buses CAN (`CAN0_H` a `CAN1_H`, y `CAN0_L` a `CAN1_L`), habilita las resistencias de terminación de 120 Ω integradas en ambos lados y luego verifica la comunicación bidireccional entre las dos interfaces.

Abre tres terminales y ejecuta los siguientes comandos.

**Ventana 1: configurar y probar CAN0**

```Bash
sudo modprobe mttcan
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 250000
sudo ip link set can0 up

# Send frames from can0
cangen can0

# Receive frames on can0
candump can0
```

**Ventana 2: configurar y probar CAN1**

```Bash
sudo modprobe mttcan
sudo ip link set can1 down
sudo ip link set can1 type can bitrate 250000
sudo ip link set can1 up

# Send frames from can1
cangen can1

# Receive frames on can1
candump can1
```

**Ventana 3: habilitar resistencias de terminación y comprobar contadores de enlace**

```Bash
# Enable the onboard 120 Ω termination resistors on both CAN ports
gpioset -m wait gpiochip2 2=0 3=0

# Check low-level TX/RX counters
ip -d -s link show can0
ip -d -s link show can1
```

Si el cableado y la terminación son correctos, las tramas generadas en una interfaz deberían recibirse en la otra interfaz, y los contadores TX/RX deberían incrementarse en consecuencia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-4.png" alt="Image" width={800} height="auto" /></p>

## DI/DO

Las interfaces DI/DO del reComputer Rugged J401 están integradas en el conector J47 2x10P, compartiendo la interfaz con las interfaces CAN. Admiten 2 canales de entrada digital y 2 canales de salida digital, con transmisión de señal estable y adaptación de voltaje de grado industrial, adecuados para conectar sensores digitales, relés y otros dispositivos periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### Conexión de hardware

Los pines DI/DO correspondientes en la interfaz M12 se muestran en la figura siguiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

Canales de Entrada Digital (DI) / Salida Digital (DO)

### Instrucciones de uso

#### Operación de Salida Digital (DO)

Las interfaces DO adoptan salida de drenador abierto. Puedes configurar el nivel de salida (alto/bajo) mediante comandos para controlar periféricos como relés y LED.

Ejecuta el siguiente comando para habilitar el canal DO (salida de 12 V, alimentado por la resistencia de pull-up externa y la fuente de alimentación de 12 V):

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

Ejecuta el siguiente comando para deshabilitar el canal DO (salida ~0 V):

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO antes de tirar a alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO después de tirar a alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **Operación de Entrada Digital (DI)**

Utiliza el comando `gpioget` para leer el nivel de entrada del canal DI (valor devuelto `1` = nivel alto, `0` = nivel bajo) y obtener el estado de los dispositivos periféricos.

```PowerShell
# Read DI_12V_1 (gpiochip0 105) status
gpioget gpiochip0 105

# Read DI_12V_2 (gpiochip0 144) status
gpioget gpiochip0 144
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/28.png" alt="Image" width={400} height="auto" /></p>



## UART

El reComputer Rugged J401 está equipado con una interfaz UART independiente (UART1) que admite modos de comunicación RS232, RS422 y RS485, con transmisión de señal estable y amplia compatibilidad con dispositivos periféricos.

### Conexión de hardware

Canales de la interfaz UART

Cambia entre los modos RS232, RS485 y RS422 alternando el interruptor SW3.

Nota: Cuando el interruptor está presionado hacia abajo (ON), el bit es 0; cuando no está presionado, el bit es 1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|Modo|Estado|
|---|---|---|---|---|
|0|0|0|RS-422 Full Duplex|1T/1R RS-422|
|0|0|1|RS-232 puro|3T/5R RS-232|
|0|1|0|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE <br />Activo en bajo|
|0|1|1|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE Activo en alto|
|1|0|0|RS-422 Full Duplex|RS-422 con resistencia de terminación|
|1|0|1|RS-232|1T/1R RS-232 coexiste con la aplicación RS485 sin necesidad del bus de conmutación de bus (para uso especial)|
|1|1|0|RS-485|1T/1R RS-485 con resistencia de terminación, TX ENABLE Activo en bajo|
|1|1|1|Apagado|Todos los pines de E/S están en alta impedancia|



## SPI

### Conexión de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### Instrucciones de uso

Utiliza cables Dupont para conectar los pines principales del canal SPI de destino (toma /dev/spidev0.0 como ejemplo): conecta el pin MOSI a su pin MISO (para realizar transmisión/recepción de datos en bucle).

El diagrama de cableado es el siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**Paso 1: Cargar el módulo del kernel SPI (prerrequisito)**

Antes de operar la interfaz SPI, asegúrate de que el módulo del kernel `spidev` esté cargado (el sistema predeterminado puede precargarlo, pero se recomienda verificarlo manualmente):

```Bash
sudo modprobe spidev
```

Si el comando se ejecuta sin mensajes de error, significa que el módulo se cargó correctamente; si el módulo ya está cargado, el comando no devolverá ninguna información, lo cual es un fenómeno normal.

**Paso 2: Ver los nodos de dispositivo SPI**

Introduce el siguiente comando en la terminal para ver el nombre del dispositivo mapeado por la interfaz SPI de reComputer Rugged J401:

```Bash
ls /dev/spidev*
```

Si no se muestra ningún nodo de dispositivo, significa que el módulo `spidev` no se cargó correctamente. Vuelve a ejecutar `sudo modprobe spidev` y revisa el registro del sistema para la resolución de problemas.

**Paso 3: Obtener y compilar el código de prueba SPI**

Obtén el código de prueba `spidev-test` desde GitHub y compílalo:

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Paso 4: Ejecutar el programa de prueba SPI**

Introduce el siguiente comando en la terminal para ejecutar el programa de prueba SPI (tomando `/dev/spidev2.0` como ejemplo):

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**Paso 5: Verificar el resultado de la prueba**

Después de ejecutar el comando de prueba, puedes observar en la terminal el estado de transmisión y recepción de datos de la interfaz SPI0.0. La salida principal es la siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> Criterio clave de evaluación: los datos TX (transmitidos) son consistentes con los datos RX (recibidos), lo que indica que la prueba de bucle cerrado SPI es exitosa y que la función de la interfaz SPI es normal.
> 
> 

## **I2C**

El Rugged J401 proporciona una interfaz I2C a través del conector J8 de 2x10 pines, lo que permite una conexión sencilla de sensores y periféricos para la expansión del sistema.

### **Conexión de hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

Conecta tu dispositivo I2C a la interfaz I2C en la placa carrier:

- Tierra -> Ground (Pin 1)

- SDA -> SDA (Pin 16)

- SCL -> SCL (Pin 14)

- VCC -> 3V3 (Pin 20)

### **Instrucciones de uso**

**Paso 1.** Instalar las herramientas de prueba I2C:

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**Paso 2.** Ver los mapeos del bus I2C:

```Bash
i2cdetect -l
```

**Paso 3.** Escanear dispositivos en el bus I2C:

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## Recursos

- [reComputer Rugged J40 Datasheet](#) *(próximamente)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
