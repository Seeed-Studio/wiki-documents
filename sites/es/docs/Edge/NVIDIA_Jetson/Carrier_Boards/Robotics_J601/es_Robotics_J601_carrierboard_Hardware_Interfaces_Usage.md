---
description: Este wiki proporciona una introducción completa a las características de hardware y al uso de las interfaces de la carrier board reComputer Jetson Robotics J601. Cubre especificaciones detalladas, módulos compatibles, instrucciones de configuración y guías prácticas para usar varias interfaces como M.2, Ethernet, USB, CAN, RS485/RS232, UART, I2C, I2S, GPIO, expansión de cámara GMSL2, 5G y GPS, ayudando a los usuarios a comenzar rápidamente con el desarrollo de robótica en la plataforma J601.
title: Uso de interfaces
tags:
  - J601-Robotics carrier board
  - Jetson
  - AGX Thor
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg
slug: /recomputer_jetson_robotics_j601_interfaces_usage
sku: 100060965
last_update:
  date: 06/18/2026
  author: Zibo
createdAt: '2026-06-18'
updatedAt: '2026-06-18'
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Uso de interfaces de hardware de la carrier board Robotics J601

La reComputer Robotics J601 es una carrier board de robótica de alto rendimiento diseñada para el módulo NVIDIA Jetson AGX Thor, dirigida a aplicaciones avanzadas de IA encarnada y control robótico. Equipada con amplias opciones de conectividad — incluyendo 4x Ethernet 10GbE, ranuras M.2 para módulos 5G y Wi‑Fi/BT, puertos USB 3.2, 4x CAN (con soporte CAN FD), RS-232/422/485, I2C, I2S, UART, GPIO (GPI/GPO), expansión GMSL2 (hasta 8 cámaras) y entrada de CC de amplio rango — sirve como un potente cerebro robótico capaz de procesar datos complejos de varios sensores.

Al ser compatible con frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch y ROS 2/1, la reComputer Robotics J601 conecta la toma de decisiones impulsada por modelos de lenguaje grandes con el control robótico físico, como la planificación de movimiento y la fusión de sensores. Ideal para el desarrollo rápido de robots autónomos, acelera el tiempo de salida al mercado con interfaces listas para usar y frameworks de IA optimizados.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg"/>
</div>

## USB

La carrier board Robotics J601 está equipada con múltiples puertos USB, incluyendo 4 puertos USB 3.2 Tipo A (Host, 10Gbps) para conectividad de periféricos de alta velocidad, un puerto USB 3.2 Tipo C (J4) para recuperación/flasheo y un puerto USB 2.0 Tipo C (J3) para modo dispositivo/depuración.

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
Sustituye `/dev/sda` por el nombre de dispositivo real de tu unidad USB. Puedes usar `lsblk` para comprobarlo.
:::

Haz que el script sea ejecutable y ejecútalo:

```bash
chmod +x test_usb_speed.sh
./test_usb_speed.sh
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG"/>
</div>

### Puerto de depuración USB 2.0 Tipo C

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

**Paso 4.** Abre el Administrador de dispositivos en tu PC con Windows y comprueba el número de puerto COM asignado al reComputer J601. Debería aparecer en "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", donde X es el número de puerto COM.

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

**Paso 8.** Inicia sesión en tu reComputer J601 con el nombre de usuario y la contraseña.

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

Conecta la placa de expansión GMSL al conector de expansión de cámara en la carrier board J601 y, a continuación, conecta tus cámaras GMSL a la placa de expansión.

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

## UART

La Robotics J601 proporciona una interfaz UART mediante un conector JST estándar para la comunicación serie con dispositivos externos. El puerto UART está conectado a `/dev/ttyTHS1` en el sistema Jetson con una velocidad en baudios predeterminada de 115200.

### Conexión de hardware

Para la comunicación UART, conecta la herramienta USB‑a‑TTL según el siguiente cableado:

- TX → RX
- RX → TX
- GND → GND

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

### Instrucciones de uso

Conecta la herramienta USB‑a‑TTL al puerto UART de la Robotics J601 y al PC, luego abre la herramienta de puerto serie en el PC y establece la velocidad en baudios en **115200**.

Puedes usar un script sencillo de Python para probar la comunicación serie:

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

## I2S

La Robotics J601 proporciona una interfaz de audio I2S con salida de amplificador y entrada de micrófono para reproducción y grabación de audio. La interfaz I2S se expone a través del conector J14 JST GH‑1.25.

### Definición de pines

| Pin # | Nombre de pin del módulo | # de pin del módulo | Uso/Descripción | Tipo/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Fuente de alimentación 3V3 | Alimentación |
| 2 | I2S2_DIN | F6 | Puerto de audio I2S2 2 Datos de entrada (nivel desplazado de 1.8V a 3.3V) | Entrada |
| 3 | I2S2_FS | E4 | Puerto de audio I2S2 2 Reloj izquierda/derecha (nivel desplazado de 1.8V a 3.3V) | Bidireccional |
| 4 | I2S2_CLK | G4 | Puerto de audio I2S2 2 Reloj (nivel desplazado de 1.8V a 3.3V) | Bidireccional |
| 5 | I2S2_DOUT | F5 | Puerto de audio I2S2 2 Datos de salida (nivel desplazado de 1.8V a 3.3V) | Salida |
| 6 | - | - | Tierra | Tierra |

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
Reemplaza `your_audio_file.wav` con la ruta a tu archivo de audio real. Asegúrate de que el formato del archivo de audio coincida con la frecuencia de muestreo especificada (48000 Hz) y el número de canales (2).
:::


## I2C

El Robotics J601 proporciona una interfaz I2C a través del conector JST GH-1.25 J12, lo que permite una conexión sencilla de sensores y periféricos para la expansión del sistema.

### Definición de pines

| Pin # | Nombre de pin del módulo | Pin del módulo # | Uso/Descripción | Tipo/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Tierra | Tierra |
| 2 | DP_AUX_CH2_N | E18 | I2C4_SDA_3V3 | Bidireccional |
| 3 | DP_AUX_CH2_P | E19 | I2C4_SCL_3V3 | Salida |
| 4 | - | - | Alimentación 3V3 | Alimentación |

:::info
El conector I2C utiliza el bus **I2C4** en el SoC Jetson AGX Thor.
:::

### Conexión de hardware

Conecta tu dispositivo I2C a la interfaz I2C en la placa carrier:

- Tierra → Tierra (Pin 1)
- SDA → SDA (Pin 2)
- SCL → SCL (Pin 3)
- Alimentación → 3V3 (Pin 4)

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

**Paso 3.** Escanea dispositivos en el bus I2C:

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png"/>
</div>

**Paso 4.** Lee un registro de un dispositivo I2C. Por ejemplo, para leer el registro `0x00` de un dispositivo en la dirección `0x58` en el bus `i2c-1`:

```bash
sudo i2cget -y 1 0x58 0x00
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png"/>
</div>

## GPIO (GPI/GPO)

El Robotics J601 proporciona interfaces GPIO digitales a través de dos conectores JST GH-1.25: un conector **GPI (General Purpose Input)** J20 con 4 canales de entrada, y un conector **GPO (General Purpose Output)** J14 con 4 canales de salida. Todas las señales GPIO se convierten de nivel de 1.8V (dominio del SoC) a 3.3V, haciéndolas directamente compatibles con sensores y periféricos estándar de 3.3V.

### Definición de pines

#### Conector GPI - J20 (Entrada)

| Pin # | Nombre de pin del módulo | Pin del módulo # | Uso/Descripción | Tipo/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Alimentación 3V3 | Alimentación |
| 2 | SPI2_MISO | D62 | GPI_1_3V3 (Cambio de nivel de 1.8V a 3.3V) | Entrada, 3.3V |
| 3 | GPIO64 | J6 | GPI_2_3V3 (Cambio de nivel de 1.8V a 3.3V) | Entrada, 3.3V |
| 4 | GPIO65 | J7 | GPI_3_3V3 (Cambio de nivel de 1.8V a 3.3V) | Entrada, 3.3V |
| 5 | GPIO49 | G6 | GPI_4_3V3 (Cambio de nivel de 1.8V a 3.3V) | Entrada, 3.3V |
| 6 | - | - | Tierra | Tierra |

#### Conector GPO - J14 (Salida)

| Pin # | Nombre de pin del módulo | Pin del módulo # | Uso/Descripción | Tipo/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Alimentación 3V3 | Alimentación |
| 2 | GPIO13 | G7 | GPO_1_3V3 (Cambio de nivel de 1.8V a 3.3V) | Salida, 3.3V |
| 3 | SPI2_CS0_N | D60 | GPO_2_3V3 (Cambio de nivel de 1.8V a 3.3V) | Salida, 3.3V |
| 4 | SPI2_CLK | E61 | GPO_3_3V3 (Cambio de nivel de 1.8V a 3.3V) | Salida, 3.3V |
| 5 | SPI2_MOSI | F60 | GPO_4_3V3 (Cambio de nivel de 1.8V a 3.3V) | Salida, 3.3V |
| 6 | - | - | Tierra | Tierra |

### Conexión de hardware

Conecta tu dispositivo GPIO al conector GPI o GPO en la placa carrier usando un cable GH-1.25:

- VCC → 3V3 (Pin 1)
- Señal → pin GPI/GPO (Pin 2–5)
- GND → Tierra (Pin 6)

<!-- PLACEHOLDER_GPIO_IMAGE: Add a photo showing the GPI (J20) and GPO (J14) connectors on the board -->

### Instrucciones de uso

:::note
Los pines GPI y GPO son accesibles mediante `libgpiod` (`gpioset`/`gpioget`). Puedes encontrar el chip GPIO y los números de línea usando `gpioinfo`.
:::

**Paso 1.** Instala las utilidades GPIO:

```bash
sudo apt update
sudo apt-get install gpiod
```

**Paso 2.** Visualiza todos los chips y líneas GPIO disponibles:

```bash
gpioinfo
```

**Paso 3.** Lee un pin GPI. Por ejemplo, para leer GPI_2 (GPIO64, Pin 3 en J20):

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioget <chip> <line>
```

**Paso 4.** Escribe en un pin GPO. Por ejemplo, para poner GPO_1 (GPIO13, Pin 2 en J14) en alto:

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioset <chip> <line>=1
```

**Paso 5.** Usa los pines en un script de Python con la biblioteca `gpiod`:

```python
import gpiod

# Replace chip and line numbers based on your gpioinfo output
chip = gpiod.Chip('<chip_number>')

# Read GPI example
gpi_line = chip.get_line(<gpi_line_number>)
gpi_line.request(consumer="gpi_test", type=gpiod.LINE_REQ_DIR_IN)
print("GPI value:", gpi_line.get_value())

# Write GPO example
gpo_line = chip.get_line(<gpo_line_number>)
gpo_line.request(consumer="gpo_test", type=gpiod.LINE_REQ_DIR_OUT)
gpo_line.set_value(1)  # Set high
```

<!-- PLACEHOLDER_GPIO_USAGE_IMAGE: Add a photo/screenshot showing GPIO read/write output -->

## CAN

CAN (Controller Area Network) es un estándar robusto de bus para vehículos que permite que microcontroladores y dispositivos se comuniquen entre sí sin un ordenador host. El Robotics J601 proporciona **4 interfaces CAN** (CAN0, CAN1, CAN2, CAN3) mediante conectores JST GH-1.25, todas compatibles con el modo CAN FD.

### Mapeo de pines del conector CAN

| Interfaz CAN | Conector | Pin 1 | Pin 2 | Pin 3 | Pin 4 |
| --- | --- | --- | --- | --- | --- |
| CAN0 | J31 | Tierra | CAN0_L_ISO | CAN0_H_ISO | Alimentación 5V |
| CAN1 | J30 | Tierra | CAN1_L_ISO | CAN1_H_ISO | Alimentación 5V |
| CAN2 | J28 | Tierra | CAN2_L_ISO | CAN2_H_ISO | Alimentación 5V |
| CAN3 | J25 | Tierra | CAN3_L_ISO | CAN3_H_ISO | Alimentación 5V |

:::info
Las 4 interfaces CAN están aisladas. Cada conector proporciona una alimentación de 5V en el Pin 4.
:::

### Control de la resistencia de terminación de 120Ω

Cada interfaz CAN tiene una resistencia de terminación de 120Ω controlada por software. Los mapeos GPIO son los siguientes:

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
- El dígito después de `##` es el indicador BRS (Bit Rate Switch): `1` = BRS activo
- Lo siguiente es la carga útil de datos (hasta 128 caracteres hexadecimales para 64 bytes)
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png"/>
</div>

### Script de prueba CAN integral

El siguiente script realiza una prueba CAN FD completa que incluye verificación de dependencias, configuración de interfaces, verificación básica de comunicación y una prueba de estrés de 10 segundos.

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



## RS485

La Carrier Board reComputer J601 incorpora un puerto RS-485 aislado dedicado expuesto a través del conector JST GH-1.25 de 4 pines J24. Las definiciones de pines son las siguientes:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/rs485-jstpin.png"/>
</div>

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/jst485-c.png"/>
</div>

Aquí utilizamos un `usb-to-rs485` para realizar la prueba:

```bash
#[Jetson] Init UART: 115200 baud, 8N1, raw mode, no flow control.
sudo stty -F /dev/ttyAMA10 115200 cs8 -cst -parenb -ixon -ixoff -crtscts raw -echo
# [Jetson] Enable and verify RS485 mode via ioctl (TIOCSRS485 / TIOCGRS485).
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA10",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",3,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
# Verification output:(3, 0, 20, 0, 0, 0, 0, 0)

#[PC] Init USB UART with identical parameters.
sudo stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
#[Jetson] Listen for data.
sudo cat /dev/ttyAMA10
#[PC] Send message.
echo "hello from pc" | sudo tee /dev/ttyUSB0 >/dev/null

#[PC] Listen for data.
sudo cat /dev/ttyUSB0
#[Jetson] Send message.、
echo "hello from jetson" | sudo tee /dev/ttyAMA10 >/dev/null
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png"/>
</div>



## DB9 (RS232 / RS422 / RS485)

La Robotics J601 proporciona una interfaz serie DB9 seleccionable por software. El puerto DB9 está conectado a `/dev/ttyAMA9` en el sistema Jetson y se puede configurar como RS232, RS422 o RS485 ajustando el interruptor DIP SW3.

### Definición de pines

La función de cada pin DB9 depende del modo de comunicación seleccionado. Consulta la tabla y el diagrama del conector a continuación antes de cablear el adaptador.

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png"/>
</div>

### Modo RS485
### Configuración de hardware

Cambia el interruptor en la parte inferior de la placa al modo RS485 como se muestra en la figura siguiente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-mode.png"/>
</div>

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c.png"/>
</div>

:::tip
Para el cableado RS485, conecta el `A/D+` del adaptador USB-RS485 al pin 2 del DB9 y `B/D-` al pin 1 del DB9. Algunos adaptadores USB-RS485 etiquetan A/B de forma inversa. Si el Jetson recibe bytes aleatorios mientras el PC no está enviando, intercambia A y B y prueba de nuevo.
:::

### Prueba de comunicación

Aquí utilizamos minicom para realizar la prueba：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
Para ver el texto que escribes en minicom, necesitas habilitar la función Local Echo. De forma predeterminada, minicom no muestra tus pulsaciones de teclas, por lo que este es un problema muy común.
- paso 1. Pulsa `Ctrl+A`
- paso 2. Luego, pulsa `E`

:::

Prueba que el PC envíe un mensaje a Jetson. 


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c1.png"/>
</div>

Dado que RS485 es un protocolo half-dúplex, para probar que Jetson puede enviar información al PC mediante RS485 es necesario activar el modo RS485.
- paso 1. Pulsa `Ctrl+A`
- paso 2. Luego, pulsa `O` para abrir la opción de configuración.


<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c2.png"/>
</div>

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c3.png"/>
</div>

Finalmente, podrás enviar mensajes desde Jetson a tu PC.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c4.png"/>
</div>

### Modo RS232 

### Configuración de hardware

Cambia el interruptor en la parte inferior de la placa al modo RS232 como se muestra en la figura siguiente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-mode.png"/>
</div>

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c.png"/>
</div>

:::tip
- TX → RX
- RX → TX
- GND → GND
:::

### Prueba de comunicación

Aquí utilizamos minicom para realizar la prueba：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
Para ver el texto que escribes en minicom, necesitas habilitar la función Local Echo. De forma predeterminada, minicom no muestra tus pulsaciones de teclas, por lo que este es un problema muy común.
- paso 1. Pulsa `Ctrl+A`
- paso 2. Luego, pulsa `E`
:::

Prueba que el PC envíe un mensaje a Jetson. 


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c1.png"/>
</div>


Activa también el modo de prueba.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c2.png"/>
</div>

Envía mensajes desde Jetson a tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c3.png"/>
</div>

### Modo RS422

### Configuración de hardware

Cambia el interruptor en la parte inferior de la placa al modo RS422 como se muestra en la figura siguiente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-mode.png"/>
</div>

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c.png"/>
</div>

:::tip
- RXD+ ←─────→  TXD+  
- RXD- ←─────→  TXD-  
- TXD+ ←─────→  RXD+  
- TXD- ←─────→  RXD-
- GND  ←─────→  GND
:::

### Prueba de comunicación

Aquí utilizamos minicom para realizar la prueba：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
Para ver el texto que escribes en minicom, necesitas habilitar la función Local Echo. De forma predeterminada, minicom no muestra tus pulsaciones de teclas, por lo que este es un problema muy común.
- paso 1. Pulsa `Ctrl+A`
- paso 2. Luego, pulsa `E`
:::

Prueba que el PC envíe un mensaje a Jetson. 


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c1.png"/>
</div>


Activa también el modo de prueba.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c2.png"/>
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

## Ethernet

La carrier board Robotics J601 incorpora **4 puertos Ethernet RJ45 10GbE** para conectividad de red por cable, con soporte previsto para los protocolos PTP y EtherCAT. (Nota: los módulos T4000 admiten 3 puertos 10GbE.)

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
- La opción `-R` invierte la dirección de la prueba para probar la velocidad de descarga.
:::

## M.2 Key E

La interfaz M.2 Key E es un conector M.2 estándar que se utiliza principalmente para conectar módulos inalámbricos, como Wi‑Fi y Bluetooth, para ampliar las capacidades de comunicación inalámbrica.

### Conexión de hardware

<!-- PLACEHOLDER_M2E_IMAGE: Add a photo showing the M.2 Key E slot on the bottom of the board with WiFi module installed -->

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

**Paso 3.** Después de reiniciar, levanta la interfaz inalámbrica:

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

La ranura M.2 Key B admite la expansión con un módulo 5G, lo que permite conectividad celular de alta velocidad para escenarios de robótica e IA en el borde.

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

**Paso 2.** Entra en modo interactivo presionando **Ctrl+A** y luego **E**.

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

### Nano SIM

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png"/>
</div>

### GPS

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
- Si la respuesta es `+CME ERROR: 549`, el GPS ya está habilitado, no es necesario habilitarlo de nuevo.
:::

**Paso 3.** Sal de minicom presionando **Ctrl+A** y luego **X**, y selecciona **Yes** para salir.

**Paso 4.** Una vez habilitado el GPS, los datos de los satélites se enviarán desde el puerto de datos GPS (normalmente `/dev/ttyUSB1`). Lee los datos NMEA en bruto:

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

- [Hoja de datos de reComputer J601](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/reComputer_J601_Datasheet.pdf)
- [Primeros pasos con reComputer Robotics J601](/es/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started)

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
