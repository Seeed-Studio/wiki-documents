---
description: Este wiki proporciona una introducción completa a las características de hardware y al uso de las interfaces de la placa portadora reComputer Jetson Robotics J601. Cubre especificaciones detalladas, módulos compatibles, instrucciones de configuración y guías prácticas para usar varias interfaces como M.2, Ethernet, USB, CAN, RS485/RS232, UART, I2C, I2S, expansión de cámara GMSL2, 5G y GPS, ayudando a los usuarios a comenzar rápidamente con el desarrollo de robótica en la plataforma J601.
title: Uso de interfaces
tags:
  - Placa portadora J601-Robotics
  - Jetson
  - AGX Thor
  - Robótica
  - Uso de interfaces
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_jetson_robotics_j601_interfaces_usage
sku: 100060965
last_update:
  date: 06/18/2026
  author: Zibo
createdAt: '2026-06-18'
updatedAt: '2026-06-18'
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Uso de interfaces de hardware de la placa portadora Robotics J601

La reComputer Robotics J601 es una placa portadora de robótica de alto rendimiento diseñada para el módulo NVIDIA Jetson AGX Thor, dirigida a aplicaciones avanzadas de IA encarnada y control robótico. Equipada con amplias opciones de conectividad — incluyendo Ethernet de alta velocidad, ranuras M.2 para módulos 5G y Wi‑Fi/BT, puertos USB 3.2, 4x CAN (con soporte CAN FD), RS-232/485, I2C, I2S, UART, expansión GMSL2 (hasta 8 cámaras) y entrada de CC de amplio rango — sirve como un potente cerebro robótico capaz de procesar datos complejos de varios sensores.

Al ser compatible con frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch y ROS 2/1, la reComputer Robotics J601 conecta la toma de decisiones impulsada por modelos de lenguaje grandes con el control robótico físico, como la planificación de movimiento y la fusión de sensores. Ideal para el desarrollo rápido de robots autónomos, acelera el tiempo de salida al mercado con interfaces listas para usar y frameworks de IA optimizados.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg"/>
</div>
## Uso de interfaces

A continuación se presentarán las diversas interfaces de la placa Robotics J601 y cómo utilizarlas.

## USB

La placa portadora Robotics J601 está equipada con múltiples puertos USB, incluidos puertos USB 3.2 Type-A (Host) para conectividad de periféricos de alta velocidad, un puerto USB 3.0 Type-C para flasheo y un puerto USB 2.0 Type-C para modo dispositivo/depuración.

### Prueba de velocidad USB 3.2

Conecta una memoria USB 3.0 y prueba su velocidad de lectura/escritura. Ten en cuenta que las velocidades reales dependen del rendimiento propio de la unidad USB.

Crea un script de prueba:

```bash
vim test_usb_speed.sh
```

Pega el siguiente contenido:

```bash
#!/bin/bash

echo "seeed" | sudo -S dd if=/dev/zero of=/dev/sda bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
echo "seeed" | sudo -S dd if=/dev/sda of=/dev/null bs=1000M count=2
```

:::info
Reemplaza `/dev/sda` con el nombre de dispositivo real de tu unidad USB. Puedes usar `lsblk` para comprobarlo.
:::

Haz que el script sea ejecutable y ejecútalo:

```bash
chmod +x test_usb_speed.sh
./test_usb_speed.sh
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG"/>
</div>

### Puerto de depuración USB 2.0 Type-C

Usando este puerto serie, a través del cable de datos USB‑C, puedes monitorizar en el PC la información de depuración de entrada y salida.

#### Windows

**Paso 1.** Conecta la J601 al PC mediante un cable de datos USB‑C.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG"/>
</div>


**Paso 2.** Descarga el [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Paso 3.** Conecta el PC mediante un cable de datos USB, extrae el archivo descargado e instala el controlador en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Paso 4.** Abre el Administrador de dispositivos en tu PC con Windows y comprueba el número de puerto COM asignado al reComputer Super. Debería aparecer en "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", donde X es el número de puerto COM.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Paso 5.** Abre la herramienta de puerto serie (aquí usamos la herramienta MobaXterm como ejemplo) y crea una nueva sesión.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Paso 6.** Selecciona la herramienta Serial.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Paso 7.** Selecciona el puerto serie correspondiente, establece la velocidad en baudios a 115200 y haz clic en "OK".

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Paso 8.** Inicia sesión en tu reComputer Super con el nombre de usuario y la contraseña.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

#### Linux

**Paso 1.** Conecta la J601 al PC con Linux mediante un cable de datos USB‑C.

**Paso 2.** Encuentra el dispositivo serie:

```bash
ls /dev/ttyUSB*
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG"/>
</div>

**Paso 3.** Conéctate a la consola serie:

```bash
screen /dev/ttyUSB0 -b 115200
```

Ahora deberías ver la salida de la consola serie de la J601 y podrás iniciar sesión con tu nombre de usuario y contraseña.

## GMSL

La Robotics J601 incorpora un conector de expansión para cámaras GMSL que admite hasta **8 cámaras GMSL** simultáneamente, lo que permite aplicaciones de visión robótica multicámara.

### Modelos de cámara GMSL compatibles

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Conexión de hardware

Conecta la placa de expansión GMSL al conector de expansión de cámara en la placa portadora J601 y luego conecta tus cámaras GMSL a la placa de expansión.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png"/>
</div>

### Instrucciones de uso

:::note
Antes de habilitar la funcionalidad GMSL, asegúrate de haber instalado una versión de JetPack con el controlador de la placa de expansión GMSL.
:::

**Paso 1.** Instala las herramientas de configuración de la interfaz de vídeo:

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
#example
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1080]'

v4l2-ctl -d /dev/video0 -c sensor_mode=1

rm -f /tmp/gmsl0.yuyv; mkfifo /tmp/gmsl0.yuyv

v4l2-ctl -d /dev/video0 --stream-mmap=2 --stream-to=/tmp/gmsl0.yuyv >/tmp/gmsl0_v4l2.log 2>&1 &
gst-launch-1.0 -q filesrc location=/tmp/gmsl0.yuyv do-timestamp=true blocksize=4147200 ! rawvideoparse format=yuy2 width=1920 height=1080 framerate=30/1 ! queue max-size-buffers=1 max-size-bytes=0 max-size-time=0 leaky=downstream ! videoconvert ! videoscale method=0 ! video/x-raw,width=892,height=489 ! xvimagesink sync=false async=false max-lateness=0 qos=false force-aspect-ratio=true
```



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_camera.png"/>
</div>



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl.png"/>
</div>

### Usar la cámara Gemini 335Lg

```bash
# Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
# Unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

La primera vez que la enciendas, es posible que necesites actualizar el firmware. Al abrir el flujo de datos, podrás ver el vídeo de la cámara.

## I2S

La Robotics J601 proporciona una interfaz de audio I2S con salida de amplificador y entrada de micrófono para reproducción y grabación de audio.

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png"/>
</div>

### Instrucciones de uso

**Paso 1.** Configura el multiplexor de audio I2S2 y prueba la salida de tono:

```bash
# Configure I2S2 mux
amixer -c 2 sset "I2S2 Mux" "ADMAIF1"

# Play a 440Hz sine wave test tone (one iteration)
speaker-test -D hw:2,0 -c 2 -r 48000 -t sine -f 440 -l 1
```

:::info
La opción `-l 1` significa que el tono de prueba se reproducirá solo una vez y luego se detendrá.
:::

**Paso 2.** Reproduce tu propio archivo de audio:

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
Reemplaza `your_audio_file.wav` con la ruta de tu archivo de audio real. Asegúrate de que el formato del archivo de audio coincida con la frecuencia de muestreo especificada (48000 Hz) y el número de canales (2).
:::

## UART

La Robotics J601 proporciona una interfaz UART mediante un conector JST estándar para comunicación serie con dispositivos externos.

### Conexión de hardware

Para la comunicación UART, conecta la herramienta USB‑a‑TTL según el siguiente cableado:

- TX → RX
- RX → TX
- GND → GND

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

### Instrucciones de uso

Conecta la herramienta USB‑a‑TTL al puerto UART de la Robotics J601 y al PC, luego abre la herramienta de puerto serie en el PC y establece la velocidad en baudios a **115200**.

Puedes usar un sencillo script de Python para probar la comunicación serie:

```python
import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:
    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

Ejecuta el script en el dispositivo Jetson:

```bash
python3 uart_test.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

## RGB

<details>
<summary>test_rgb.sh</summary>

```bash
#!/bin/bash

# ==============================================================================
# Script Name: test_rgb.sh
# Target Platform: Seeed reComputer J601 (Jetson)
# Description: Automatically tests RGB LEDs by lighting up Red, Green, Blue, 
#              and White colors sequentially for 1 second each.
# Usage: sudo ./test_rgb.sh
# ==============================================================================

# Define LED paths
LED_DIR="/sys/class/leds"
RED="$LED_DIR/red/brightness"
GREEN="$LED_DIR/green/brightness"
BLUE="$LED_DIR/blue/brightness"

# Check if running as root (sysfs write access requires root privileges)
if [ "$EUID" -ne 0 ]; then
    echo "Error: Please run this script with sudo!"
    echo "Example: sudo $0"
    exit 1
fi

# Check if the hardware paths exist
if [ ! -d "$LED_DIR/red" ] || [ ! -d "$LED_DIR/green" ] || [ ! -d "$LED_DIR/blue" ]; then
    echo "Error: RGB LED hardware paths not found. Please check your driver or device model."
    exit 1
fi

# Helper function: Control LED states
# Arguments: set_leds <Red(0/1)> <Green(0/1)> <Blue(0/1)>
set_leds() {
    echo "$1" > "$RED"
    echo "$2" > "$GREEN"
    echo "$3" > "$BLUE"
}

echo "========================================"
echo "         Starting Jetson RGB LED Test    "
echo "========================================"

# 1. Initialization: Turn off all LEDs
echo "-> Initializing: Turning off all LEDs"
set_leds 0 0 0
sleep 0.5

# 2. Red LED on for 1 second
echo "-> [ON] Red Light"
set_leds 1 0 0
sleep 1

# 3. Green LED on for 1 second
echo "-> [ON] Green Light"
set_leds 0 1 0
sleep 1

# 4. Blue LED on for 1 second
echo "-> [ON] Blue Light"
set_leds 0 0 1
sleep 1

# 5. Mixed White LED on for 1 second (Red + Green + Blue mixed)
echo "-> [ON] White Light (RGB Mixed)"
set_leds 1 1 1
sleep 1

# 6. Test completed, turn off all LEDs
echo "-> Test completed: Turning off all LEDs"
set_leds 0 0 0

echo "========================================"
echo "             LED Test Ended             "
echo "========================================"
```

</details>

```bash
sudo chmod +x test_rgb.sh
sudo ./test_rgb.sh
```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/grb.gif"/>
</div>

## I2C

El Robotics J601 proporciona interfaces I2C a través de conectores JST estándar, lo que permite una fácil conexión de sensores y periféricos para la expansión del sistema.

### Conexión de hardware

Conecta tu dispositivo I2C a la interfaz I2C en la placa portadora:

- Alimentación → Alimentación
- SDA → SDA
- SCL → SCL
- Tierra → Tierra

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png"/>
</div>

### Instrucciones de uso

**Paso 1.** Instala las herramientas de prueba de I2C:

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**Paso 2.** Visualiza los mapeos del bus I2C:

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG"/>
</div>

**Paso 3.** Escanea los dispositivos en el bus I2C:

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png"/>
</div>

**Paso 4.** Lee un registro desde un dispositivo I2C. Por ejemplo, para leer el registro `0x00` de un dispositivo en la dirección `0x58` en el bus `i2c-1`:

```bash
sudo i2cget -y 1 0x58 0x00
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png"/>
</div>

## CAN

CAN (Controller Area Network) es un estándar robusto de bus para vehículos que permite que microcontroladores y dispositivos se comuniquen entre sí sin un ordenador host. El Robotics J601 proporciona **4 interfaces CAN** (CAN0, CAN1, CAN2, CAN3) mediante conectores JST, todas compatibles con el modo CAN FD.

### Control de la resistencia de terminación de 120Ω

Cada interfaz CAN tiene una resistencia de terminación de 120Ω controlada por software. Las asignaciones de GPIO son las siguientes:

| Interfaz | Chip GPIO | Línea GPIO | Nombre de control |
| --- | --- | --- | --- |
| CAN0_120R_EN_3V3 | 3 | 0 | Terminación CAN0 |
| CAN1_120R_EN_3V3 | 3 | 1 | Terminación CAN1 |
| CAN2_120R_EN_3V3 | 3 | 2 | Terminación CAN2 |
| CAN3_120R_EN_3V3 | 3 | 3 | Terminación CAN3 |
| RS485_120R_EN_3V3 | 3 | 4 | Terminación RS485 |

Puedes ver las líneas GPIO correspondientes usando:

```bash
gpioinfo
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG"/>
</div>

### Comunicación CAN clásica

Aquí demostramos la comunicación de datos entre CAN0 y CAN1.

**Paso 1.** Instala las utilidades CAN:

```bash
sudo apt update
sudo apt install can-utils -y
```

**Paso 2.** Configura las interfaces CAN:

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000

sudo ip link set up can0
sudo ip link set up can1
```

**Paso 3.** Abre una nueva terminal para recibir datos en CAN1 y envía datos desde CAN0:

```bash
# In a new terminal, listen on CAN1
candump can1

# In another terminal, send data from CAN0
cansend can0 123#DEADBEEF
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png"/>
</div>

### Modo CAN FD

CAN FD (Flexible Data-Rate) amplía el protocolo CAN clásico para admitir mayores velocidades de datos y cargas útiles más grandes (hasta 64 bytes).

**Paso 1.** Configura CAN0 y CAN1 para el modo FD:

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

sudo ip link set can0 txqueuelen 2000
sudo ip link set can1 txqueuelen 2000

sudo ip link set up can0
sudo ip link set up can1
```

**Paso 2.** Abre una nueva terminal y prueba la comunicación CAN FD:

```bash
# Listen on CAN1 with extended output
candump can1 -x

# Test 1: Send a 16-byte frame with BRS active
cansend can0 5AA##111223344556677889900AABBCCDD

# Test 2: Send a full 64-byte payload frame with BRS active
cansend can0 7DF##1101020203030404050506060707080809090A0A0B0B0C0C0D0D0E0E0F0F0111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFF
```

:::info
- `5AA` / `7DF` es el ID CAN
- `##` indica una trama CAN FD
- La cifra después de `##` es el indicador BRS (Bit Rate Switch): `1` = BRS activo
- Lo siguiente es la carga útil de datos (hasta 128 caracteres hexadecimales para 64 bytes)
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png"/>
</div>

### Script de prueba integral de CAN

El siguiente script realiza una prueba completa de CAN FD que incluye verificación de dependencias, configuración de interfaces, verificación básica de comunicación y una prueba de estrés de 10 segundos.

Crea el script de prueba:

```bash
vim can_test.sh
```

Pega el siguiente contenido:

<details>
<summary>Haz clic para desplegar el script de prueba CAN</summary>

```bash
#!/bin/bash

# Color output definitions
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Assign interfaces from arguments, default to can0 and can1 if empty
TX_DEV=${1:-can0}
RX_DEV=${2:-can1}

echo -e "${YELLOW}=== Jetson $TX_DEV <-> $RX_DEV Comprehensive Test Script ===${NC}"
echo -e "Note: Please ensure ${TX_DEV}_H -> ${RX_DEV}_H and ${TX_DEV}_L -> ${RX_DEV}_L are physically wired.\n"

# 1. Dependency Check
if ! command -v candump &> /dev/null; then
    echo -e "${YELLOW}[1/5] Installing can-utils...${NC}"
    sudo apt update && sudo apt install can-utils -y
else
    echo -e "${GREEN}[1/5] can-utils is already installed.${NC}"
fi

# 2. Reset and Configure Interfaces (Arbitration: 500K, Data: 2M, FD & BRS enabled)
echo -e "${YELLOW}[2/5] Configuring $TX_DEV and $RX_DEV (CAN FD Mode)...${NC}"
for dev in "$TX_DEV" "$RX_DEV"; do
    # Check if the interface exists in the system
    if ! ip link show "$dev" &> /dev/null; then
        echo -e "${RED}[ERROR] Interface $dev does not exist. Please check your spelling or hardware.${NC}"
        exit 1
    fi
    sudo ip link set down "$dev" 2>/dev/null
    sudo ip link set "$dev" type can bitrate 500000 dbitrate 2000000 fd on
    # Increase transmit queue length to prevent packet loss under heavy load
    sudo ip link set "$dev" txqueuelen 2000
    sudo ip link set up "$dev"
done
sleep 1

# 3. Basic Communication Test (Classic CAN Frame)
echo -e "${YELLOW}[3/5] Starting Basic Communication Test...${NC}"
# Listen for 1 frame on the receiver interface in the background and dump to a temp file
candump "$RX_DEV" -n 1 > /tmp/can_test_rx.log &
DUMP_PID=$!
sleep 0.5

# Send a single classic CAN frame from the transmitter interface
cansend "$TX_DEV" 123#DEADBEEF

# Wait for the background dump process to finish
wait $DUMP_PID 2>/dev/null

# Validate basic data
if grep -q "DE AD BE EF" /tmp/can_test_rx.log; then
    echo -e "${GREEN}[PASS] Basic communication successful! Data verified.${NC}"
else
    echo -e "${RED}[FAIL] Basic communication failed! No data received or data corrupted.${NC}"
    tail -n 2 /tmp/can_test_rx.log 2>/dev/null
    exit 1
fi

# 4. CAN FD High-Load Stress Test
echo -e "${YELLOW}[4/5] Starting CAN FD Stress & Stability Test (10 Seconds)...${NC}"
echo -e "--> $TX_DEV generating high-frequency 64-byte BRS random data stream to $RX_DEV..."

# Flood the bus using cangen (-f for FD, -b for BRS, -g 1 for 1ms interval)
cangen "$TX_DEV" -f -b -g 1 >/dev/null 2>&1 &
GEN_PID=$!

# Countdown timer
for i in {10..1}; do
    echo -ne "Remaining Time: ${i}s \r"
    sleep 1
done
echo ""

# Stop data generation
kill $GEN_PID 2>/dev/null
wait $GEN_PID 2>/dev/null
sleep 1

# 5. Analyze and Print Performance Report
echo -e "${YELLOW}[5/5] Generating Performance Report...${NC}"
echo "--------------------------------------------------"
echo -e "${YELLOW}$RX_DEV Receiver Statistics:${NC}"
# Extract packets and hardware error counters
ip -details -statistics link show "$RX_DEV" | grep -E -A 3 "(RX:|errors)"
echo "--------------------------------------------------"

# Smart assessment based on RX errors
ERRORS=$(ip -details -statistics link show "$RX_DEV" | grep -A 1 "RX: errors" | tail -n 1 | awk '{print $1}')
if [ "$ERRORS" ] && [ "$ERRORS" -gt 0 ]; then
    echo -e "${RED}[WARNING] Test completed, but $RX_DEV encountered $ERRORS errors/dropped packets during stress testing. Check your wiring and termination resistors!${NC}"
else
    echo -e "${GREEN}[SUCCESS] CAN FD stress test passed! Zero packet loss, zero hardware errors on $RX_DEV. Excellent board performance.${NC}"
fi

# Cleanup and tear down interfaces
for dev in "$TX_DEV" "$RX_DEV"; do sudo ip link set down "$dev"; done
rm -f /tmp/can_test_rx.log
```

</details>

Haz que el script sea ejecutable y ejecútalo para probar cualquier par de interfaces CAN:

```bash
chmod +x can_test.sh
./can_test.sh can0 can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c3.png"/>
</div>



# RS485

```bash
#Jetson 
sudo stty -F /dev/ttyAMA10 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA10",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",3,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
#(3, 0, 20, 0, 0, 0, 0, 0)

#PC
sudo stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
#jetson
sudo cat /dev/ttyAMA10
#PC
echo "hello from pc" | sudo tee /dev/ttyUSB0 >/dev/null

#PC 收
sudo cat /dev/ttyUSB0
#jetson
echo "hello from jetson" | sudo tee /dev/ttyAMA10 >/dev/null
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png"/>
</div>



## DB9 (RS232 / RS422 / RS485)

El Robotics J601 proporciona una interfaz serie DB9 seleccionable por software. El puerto DB9 está conectado a `/dev/ttyAMA9` en el sistema Jetson y se puede configurar como RS232, RS422 o RS485 ajustando el interruptor DIP SW3.

### Conexión de hardware

La función de cada pin DB9 depende del modo de comunicación seleccionado. Consulta la tabla y el diagrama del conector a continuación antes de cablear el adaptador.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png"/>
</div>

| Pin DB9 | Modo RS232 | Modo RS422 | Modo RS485 |
| --- | --- | --- | --- |
| 1 | - | TXD- (B) | Datos- (B) |
| 2 | RXD | TXD+ (A) | Datos+ (A) |
| 3 | TXD | RXD+ (A) | - |
| 4 | - | RXD- (B) | - |
| 5 | GND | GND | GND |
| 6 | - | - | - |
| 7 | RTS | - | - |
| 8 | CTS | - | - |
| 9 | - | - | - |

:::tip
Para el cableado RS485, conecta el adaptador USB-RS485 `A/D+` al pin 2 de DB9, `B/D-` al pin 1 de DB9 y `GND` al pin 5 de DB9. Algunos adaptadores USB-RS485 etiquetan A/B de forma opuesta. Si el Jetson recibe bytes aleatorios mientras el PC no está enviando, intercambia A y B y prueba de nuevo.
:::

### Seleccionar el modo DB9 con SW3

SW3 lleva cada pin de modo a nivel bajo cuando el interruptor está en ON. En otras palabras, **ON = 0** y **OFF = 1**.

| Modo | Valor MODE en el esquema (MODE_0 MODE_1 MODE_2) | SW3-1 (MODE_0) | SW3-2 (MODE_1) | SW3-3 (MODE_2) | SW3-4 (SLEW) |
| --- | --- | --- | --- | --- | --- |
| RS232 | `001` | ON | ON | OFF | ON recomendado |
| RS422 | `000` | ON | ON | ON | ON recomendado |
| RS422 | `100` | OFF | ON | ON | ON recomendado |
| RS485 | `010` | ON | OFF | ON | ON recomendado |
| RS485 | `110` | OFF | OFF | ON | ON recomendado |

:::note
Para pruebas de baja velocidad como 115200 bps, se recomienda mantener SW3-4 (SLEW) en ON. Esto limita la velocidad de conmutación del driver y ayuda a reducir el ruido en cables largos.
:::

### Habilitar el transceptor DB9

Antes de probar el puerto DB9, mantén el transceptor DB9 habilitado desde una terminal dedicada de Jetson:

```bash
sudo gpioset --mode=wait gpiochip3 6=0
```

Mantén este comando en ejecución durante la prueba. Pulsa **Enter** en esta terminal solo después de terminar las pruebas.

### Prueba en modo RS232

Utiliza un adaptador USB a RS232. Si el adaptador expone cables separados, conecta TXD del adaptador al pin 2 de DB9 (RXD), RXD del adaptador al pin 3 de DB9 (TXD) y GND del adaptador al pin 5 de DB9 (GND). Si utilizas un cable DB9 a DB9 entre dos dispositivos DTE, normalmente se requiere un cable null-modem o una conexión cruzada.

**Paso 1.** Ajusta SW3 al modo RS232.

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | OFF | ON |

**Paso 2.** Configura el puerto DB9 del Jetson:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Paso 3.** Configura el puerto serie del PC.

En Linux:

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

En macOS:

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

Para una terminal interactiva en macOS, también puedes usar:

```bash
screen $PC_DEV 115200
```

Pulsa **Ctrl+A**, luego **K**, luego **Y** para salir de `screen`.

**Paso 4.** Prueba de PC a Jetson.

Ejecuta esto en el Jetson:

```bash
sudo cat /dev/ttyAMA9
```

Luego envía datos desde el PC.

PC con Linux:

```bash
echo "hello from pc to db9 rs232" | sudo tee $PC_DEV >/dev/null
```

macOS:

```bash
echo "hello from mac to db9 rs232" > $PC_DEV
```

**Paso 5.** Prueba de Jetson a PC.

Ejecuta esto en el PC.

PC con Linux:

```bash
sudo cat $PC_DEV
```

macOS:

```bash
cat $PC_DEV
```

Luego envía datos desde el Jetson:

```bash
echo "hello from jetson db9 rs232" | sudo tee /dev/ttyAMA9 >/dev/null
```

### Prueba en modo RS485

Utiliza un adaptador USB a RS485. Conecta `A/D+` del adaptador al pin 2 de DB9, `B/D-` del adaptador al pin 1 de DB9 y `GND` del adaptador al pin 5 de DB9.

**Paso 1.** Ajusta SW3 a uno de los modos RS485.

Configuración recomendada:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | OFF | ON | ON |

Configuración alternativa:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | OFF | ON | ON |

**Paso 2.** Configura el puerto DB9 del Jetson y habilita el modo RS485 de Linux:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA9",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",5,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
```

La salida esperada de configuración RS485 es:

```bash
(5, 0, 20, 0, 0, 0, 0, 0)
```

**Paso 3.** Configura el puerto serie del PC.

PC con Linux:

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

macOS:

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Paso 4.** Prueba de PC a Jetson.

Ejecuta esto en el Jetson:

```bash
sudo cat /dev/ttyAMA9
```

Luego envía datos desde el PC.

PC con Linux:

```bash
echo "hello from pc to db9 rs485" | sudo tee $PC_DEV >/dev/null
```

macOS:

```bash
echo "hello from mac to db9 rs485" > $PC_DEV
```

**Paso 5.** Prueba de Jetson a PC.

Ejecuta esto en el PC.

PC con Linux:

```bash
sudo cat $PC_DEV
```

macOS:

```bash
cat $PC_DEV
```

Luego envía datos desde el Jetson:

```bash
echo "hello from jetson db9 rs485" | sudo tee /dev/ttyAMA9 >/dev/null
```

### Prueba en modo RS422

Utiliza un adaptador USB a RS422. Conecta TXD+ del adaptador al pin 3 de DB9 (RXD+), TXD- al pin 4 de DB9 (RXD-), RXD+ al pin 2 de DB9 (TXD+), RXD- al pin 1 de DB9 (TXD-) y GND al pin 5 de DB9 si el adaptador proporciona un terminal GND.

**Paso 1.** Ajusta SW3 a uno de los modos RS422.

Configuración recomendada:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | ON | ON |

Configuración alternativa:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | ON | ON | ON |

**Paso 2.** Configura el puerto DB9 del Jetson:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Paso 3.** Configura el puerto serie del PC como 115200 8N1 sin control de flujo y luego prueba en ambas direcciones usando el mismo método con `cat` y `echo` mostrado en la sección RS232.

### Solución de problemas

- Si no se puede abrir `/dev/ttyAMA9`, cierra otras herramientas como `cat`, `minicom` o scripts de prueba que puedan estar usando ya el puerto.
- Si RS485 recibe bytes aleatorios mientras el PC no está enviando nada, normalmente las líneas A/B están invertidas o GND no está conectado. Intercambia A/B y mantén el pin 5 de DB9 conectado al GND del adaptador.
- Si de PC a Jetson funciona pero de Jetson a PC no, asegúrate de que `sudo gpioset --mode=wait gpiochip3 6=0` siga ejecutándose en una terminal separada del Jetson.
- Si RS485 aún no transmite de Jetson a PC, la polaridad de dirección RS485 puede estar invertida para el modo seleccionado. Prueba el mismo comando ioctl RS485 con flags `3` en lugar de `5` y luego vuelve a probar de Jetson a PC.
- En macOS, utiliza dispositivos `/dev/cu.*`, por ejemplo `/dev/cu.usbserial-0001`. No uses comandos exclusivos de Linux como `stty -F` ni comandos ioctl RS485 de Linux en macOS.
- Para RS485, el adaptador USB-RS485 normalmente gestiona el cambio de dirección half-dúplex en el lado del PC. Solo el puerto DB9 del Jetson necesita la configuración RS485 de Linux mostrada arriba.

## Ethernet

La placa carrier Robotics J601 incorpora puertos Ethernet de alta velocidad para conectividad de red por cable, con soporte previsto para los protocolos PTP y EtherCAT.

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png"/>
</div>

### Instrucciones de uso

Para probar la velocidad del puerto Ethernet, utiliza `iperf3` de la siguiente manera:

**Prueba de velocidad de subida:**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png"/>
</div>

**Prueba de velocidad de descarga:**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png"/>
</div>

:::info
- `<server_ip>` es la dirección IP del servidor iperf3. El cliente se conectará a este servidor para realizar una prueba de ancho de banda.
- `<bind_ip>` vincula la dirección IP local especificada como origen del tráfico de prueba.
- La opción `-R` invierte la dirección de la prueba para medir la velocidad de descarga.
:::

## M.2 Key E

La interfaz M.2 Key E es un conector M.2 estándar utilizado principalmente para conectar módulos inalámbricos, como Wi‑Fi y Bluetooth, para ampliar las capacidades de comunicación inalámbrica.

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_c1.png"/>
</div>

### Instrucciones de uso

**Paso 1.** Instala el firmware del controlador Wi‑Fi:

```bash
# Decompress firmware files
cd /lib/firmware/rtw88/
sudo zstd -d rtw8822c_fw.bin.zst -o rtw8822c_fw.bin
sudo zstd -d rtw8822c_wow_fw.bin.zst -o rtw8822c_wow_fw.bin

# Load the driver modules
sudo modprobe rtw88_core
sudo modprobe rtw88_pci
sudo modprobe rtw88_8822c
sudo modprobe rtw88_8822ce
```

**Paso 2.** Reinicia el dispositivo:

```bash
sudo reboot
```

**Paso 3.** Después del reinicio, levanta la interfaz inalámbrica:

```bash
sudo ip link set wlP1p1s0 up
```

**Paso 4.** Escanea las redes Wi‑Fi disponibles:

```bash
sudo nmcli device wifi list ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png"/>
</div>

**Paso 5.** Conéctate a una red Wi‑Fi:

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png"/>
</div>

### Bluetooth

La funcionalidad Bluetooth está disponible a través de la ranura M.2 Key E.

**Paso 1.** Abre la herramienta de control de Bluetooth:

```bash
bluetoothctl
```

**Paso 2.** Enciende y escanea los dispositivos Bluetooth cercanos:

```bash
power on
scan on
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png"/>
</div>

## Módulo 5G (M.2 Key B)

La ranura M.2 Key B admite la expansión con un módulo 5G, lo que permite conectividad celular de alta velocidad para escenarios de robótica e IA de borde.

### Conexión de hardware

Instala el módulo 5G en la ranura M.2 Key B y conecta las antenas.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png"/>
</div>

### Instrucciones de uso

**Paso 1.** Abre la consola serie del módulo 5G:

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**Paso 2.** Entra en el modo interactivo presionando **Ctrl+A** y luego **E**.

**Paso 3.** Prueba los comandos AT:

```
AT
```

**Paso 4.** Comprueba la intensidad de la señal:

```
AT+CSQ
```

**Paso 5.** Comprueba el operador de red registrado:

```
AT+COPS?
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/lsusb_5g.png"/>
</div>

## Nano SIM

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png"/>
</div>

## GPS

El módulo 5G en la ranura M.2 Key B también proporciona funcionalidad GPS para el seguimiento de ubicación.

### Instrucciones de uso

**Paso 1.** Abre el puerto de comandos AT de GPS:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Paso 2.** Habilita el receptor GPS:

```
AT+QGPS=1
```

:::info
- Si la respuesta es `OK`, el receptor GPS se ha iniciado correctamente.
- Si la respuesta es `+CME ERROR: 549`, el GPS ya está habilitado — no es necesario habilitarlo de nuevo.
:::

**Paso 3.** Sal de minicom presionando **Ctrl+A** y luego **X**, y selecciona **Yes** para salir.

**Paso 4.** Después de habilitar el GPS, los datos de los satélites se transmitirán desde el puerto de datos GPS (normalmente `/dev/ttyUSB1`). Lee los datos NMEA en bruto:

```bash
sudo cat /dev/ttyUSB1
```

Deberías ver sentencias NMEA estándar de GPS como:

```
$GPRMC,023011.00,A,2232.12345,N,11356.54321,E,0.026,,100626,,,A*7A
$GPGGA,023011.00,2232.12345,N,11356.54321,E,1,06,1.2,45.3,M,-2.3,M,,*6D
$GPGSV,3,1,11,01,65,120,42,03,45,210,38,08,30,045,35,11,15,290,31*74
```

:::note
Asegúrate de tener una vista despejada del cielo para la adquisición de señal GPS. Puede tardar unos minutos en obtener una fijación válida.
:::

## Recursos

- Diseño detallado de hardware: TBD
- Guía de flasheo: TBD
- Notas de la versión del BSP: TBD

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
