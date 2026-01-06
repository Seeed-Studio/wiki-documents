---
description: Construye y controla la AmazingHand, una mano robótica de código abierto, de bajo costo, 8-DOF e imprimible en 3D.
title: AmazingHand 
keywords:
- Lerobot
- Huggingface
- Hand
- Robotics
- 3D Printing
- Open Source
- Humanoid Robot
- Arduino
- Python
slug: /es/hand_amazinghand
last_update:
  date: 9/10/2025
  author: TienjuiWong

---

<div align="center">
  <img width="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100063642_amazing_hand_right-1_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Amazing-Hand-Right-Hand-The-Open-Source-Robotic-Hand-Developer-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
</a>
</div>

La **AmazingHand** es un proyecto de mano robótica de código abierto diseñado para hacer que la investigación y experimentación con manipulación humanoide sea accesible y asequible. Las manos robóticas tradicionales suelen ser prohibitivamente caras y dependen de actuadores de antebrazo complejos y voluminosos. La AmazingHand resuelve esto integrando todos sus motores directamente en un diseño compacto e imprimible en 3D.

Su diseño está inspirado en el proyecto de investigación "ILDA hand" pero simplificado para reducir las barreras de entrada para estudiantes, aficionados e investigadores. La interfaz de muñeca está diseñada para el robot Reachy2 pero puede adaptarse fácilmente a cualquier plataforma.

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Patterns_Overview.jpg"/>  
</div>

:::tip[Lo que aprenderás]

- Las características clave y la arquitectura de la AmazingHand.
- Dónde encontrar todos los recursos para construir tu propia mano (BOM, CAD, Guías).
- Cómo configurar el control usando Python o Arduino.
- Cómo ejecutar demostraciones básicas y dónde encontrar ejemplos más avanzados.

:::

## Características Clave y Especificaciones

La AmazingHand empaqueta capacidades impresionantes en un paquete ligero y accesible.

| Característica        | Especificación                                                             |
| :-------------------- | :------------------------------------------------------------------------- |
| **Grados de Libertad**| **8-DOF** (4 dedos, 2-DOF por dedo)                                       |
| **Actuación** | Mecanismo paralelo con 2x servos Feetech SCS0009 por dedo                  |
| **Movimiento** | Flexión/Extensión y Abducción/Aducción mediante movimiento diferencial de motores |
| **Construcción** | Completamente imprimible en 3D con "huesos" rígidos y carcasas flexibles de TPU |
| **Peso** | \~400g                                                                      |
| **Interfaz de Control** | Bus serie           |
| **Licencia** | Código: **Apache 2.0**, Diseño Mecánico: **CC BY 4.0** |

Cada dedo es actuado por dos motores en paralelo. Este diseño inteligente permite tanto movimientos de curvatura (flexión/extensión) como de lado a lado (abducción/aducción) controlando el movimiento diferencial de los servos. La palma también es una parte flexible, permitiendo un agarre más seguro y compatible de objetos.

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Hand_Overview.jpg"/>  
</div>

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Both_Hands-IDs.jpg"/>  
</div>

## Recursos de Construcción 🛠️

Todo lo que necesitas para construir tu propia AmazingHand está disponible en el repositorio GitHub del proyecto.

- **Lista de Materiales (BOM):** Una lista completa de todos los componentes electrónicos y de hardware requeridos se puede encontrar aquí:

  - [**BOM de AmazingHand**](https://docs.google.com/spreadsheets/d/1QH2ePseqXjAhkWdS9oBYAcHPrxaxkSRCgM_kOK0m52E/edit?gid=1269903342#gid=1269903342)

- **Archivos CAD e Impresión 3D:** Se proporcionan todos los archivos STL y STEP. Ten en cuenta que aunque el diseño del dedo es universal, algunos componentes de la palma son específicos para manos derechas o izquierdas.

  - **Archivos CAD:** [**Enlace a la Carpeta CAD**](https://github.com/pollen-robotics/AmazingHand/tree/main/cad)
  - **Guía de Impresión 3D:** [**Instrucciones para Imprimir Piezas**](https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/docs/AmazingHand_3DprintingTips.pdf)

- **Guía de Ensamblaje:** Una guía detallada, paso a paso para ensamblar la mano.

  - [**PDF de Guía de Ensamblaje**](https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/docs/AmazingHand_Assembly.pdf)

## Métodos de Control

Tienes dos opciones principales para controlar los servos de la mano a través del bus serie.

1. **MPU:** Usa un script de Python en una computadora host (como una Raspberry Pi o PC) conectada a través de un controlador de bus serie (ej., [Placa Controladora de Servo Bus](https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html) ). Esto es excelente para integración con marcos de robótica más grandes como ROS.

2. **MCU:** Usa un microcontrolador como Arduino con una [Placa Controladora de Servo Bus](https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html). Esto es ideal para proyectos independientes o cuando se prefiere un microcontrolador dedicado para manejar control en tiempo real.

Se proporcionan scripts de calibración para ambos métodos para ayudarte a configurar los dedos correctamente durante el ensamblaje.

## Ejecutando las Demostraciones

Una vez ensamblada, puedes probar tu AmazingHand con los programas de demostración proporcionados.

:::caution[Alimentación Externa Requerida]
Los ocho servos en la mano requieren una fuente de alimentación estable. Un adaptador DC simple de 5V / 2A con conector jack es suficiente. **No intentes alimentar los servos directamente desde el puerto USB de tu computadora.**
:::

### Demostraciones Básicas

Una vez ensamblada, puedes probar tu AmazingHand con los programas de demostración proporcionados. Primero, clona el repositorio del proyecto en tu computadora para obtener todo el código necesario:

```bash
git clone https://github.com/pollen-robotics/AmazingHand
cd AmazingHand
```

:::caution[Alimentación Externa Requerida]
Los ocho servos en la mano requieren una fuente de alimentación estable. Un adaptador DC simple de 5V / 2A con conector jack es suficiente. **No intentes alimentar los servos directamente desde el puerto USB de tu computadora.**
:::

#### Ejemplos de Python

El directorio `PythonExample` contiene varios scripts útiles para pruebas y control. Navega a este directorio (`cd PythonExample`) para ejecutarlos.

- **`AmazingHand_Demo.py`**: Esta es la demostración principal. Hace que la mano cicle a través de varios gestos preprogramados. Es la prueba perfecta para asegurar que todo funciona correctamente.
- **`AmazingHand_Demo_Both.py`**: Una demostración específica para controlar tanto una mano derecha como una izquierda conectadas al mismo bus serie.
- **`AmazingHand_FingerTest.py`**: Un script para probar el movimiento de un solo dedo, muy útil para depuración durante el ensamblaje.
- **`AmazingHand_Hand_FingerMiddlePos.py`**: Un script de utilidad usado para calibración para establecer los dedos en su posición neutral, media.

Para ejecutar la demostración principal, ejecuta el siguiente comando desde dentro de la carpeta `PythonExample`:

```bash
python3 AmazingHand_Demo.py
```

#### Ejemplos de Arduino

Para control independiente, el directorio `ArduinoExample` contiene sketches que puedes subir directamente a tu microcontrolador.

- **`Amazing_Hand_Demo.ino`**: El sketch de demostración principal que hace que la mano cicle a través de los mismos gestos que la versión de Python.
- **`Amazing_Hand-Finger_Test.ino`**: Un sketch simple para probar un solo dedo, útil para calibración y depuración de conexiones de hardware.

Para usar estos, abre el archivo `.ino` en el IDE de Arduino, asegúrate de tener la librería `SCServo` requerida instalada, luego compila y súbelo a tu placa Arduino.

### Demostración de Control Remoto con Galga Extensiométrica

:::info 🖐️ Control Intuitivo Basado en Fuerza
Esta demostración avanzada permite un control intuitivo basado en fuerza del agarre y gestos de la mano.
:::

**Principio de Operación**

El núcleo de esta demostración es crear un guante de datos que traduzca los movimientos de tus dedos en comandos para la **AmazingHand**. Logramos esto aprovechando la propiedad eléctrica de las **galgas extensiométricas**, que cambian su resistencia cuando se doblan.

<div style={{
  maxWidth: '504px',
  margin: 'auto',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden'
}}>
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7359424679310233601?compact=1"
    height="399"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
    style={{
      display: 'block',
      width: '100%',
      height: '399px'
    }}>
  </iframe>
</div>

El flujo de trabajo es el siguiente:

1. **Detección de Flexión de Dedos**: Adjuntamos galgas extensiométricas a un guante o dedos. Cuando doblas tus dedos, las galgas extensiométricas se doblan con ellos, causando un cambio medible en su resistencia eléctrica.

2. **Adquisición de Datos**: Un microcontrolador **Seeed Studio XIAO ESP32-S3** se usa para leer estos cambios de resistencia. Cada circuito de galga extensiométrica está conectado a uno de los pines del **Convertidor Analógico-Digital (ADC)** del ESP32, que convierte la señal analógica de resistencia en un número digital (típicamente de 0 a 4095).

3. **Comunicación Serie**: El ESP32 envía continuamente estas lecturas digitales del ADC a través de un puerto serie USB a una computadora host.

4. **Procesamiento y Mapeo**: Un script de Python ejecutándose en la computadora host escucha el puerto serie, recibiendo los valores ADC en bruto. Luego mapea estos valores desde el rango del ADC (0-4095) al rango de ángulo de servo deseado de la AmazingHand.

5. **Control de la Mano**: Finalmente, el script envía los ángulos objetivo calculados al controlador de la AmazingHand, causando que los dedos robóticos reflejen los movimientos de tus propios dedos en tiempo real.

Esto crea un sistema completo de bucle cerrado donde los gestos de tu mano física comandan directamente la mano robótica.

<details>
<summary><strong>Haz clic para expandir código e instrucciones de configuración</strong></summary>

Para ejecutar esta demostración, necesitas flashear el firmware de adquisición de datos en el ESP32 y ejecutar el script de control de Python en tu computadora host.

1. Firmware XIAO ESP32-S3

Este firmware es responsable de leer los valores de las galgas extensiométricas conectadas a los pines ADC y enviarlos a través del puerto serie en el formato "valor1,valor2".

```cpp title="XIAO_ESP32_S3_C3_Firmware.ino"
/**
 * @file    XIAO_ESP32_Universal_Firmware_EN.ino
 * @brief   Firmware for XIAO ESP32-S3 and C3 to read 4 ADC channels and output 2 processed values for a Python script.
 * @author  TienjuiWong
 * @version 1.2
 * @date    2025-09-10
 *
 * @details
 * - Platform Compatibility: Seeed Studio XIAO ESP32-S3 & XIAO ESP32-C3.
 * - Functionality:
 * 1. Reads analog signals from pins D0, D1, and D2.
 * 2. Averages these three readings to create a single control value for the main fingers.
 * 3. Reads the analog signal from pin D3 for independent thumb control.
 * 4. Transmits data over USB Serial in the format "fingers_avg,thumb_val\n".
 * 5. The communication baud rate is set to 115200 to match the host script.
 */

// --- Pin Definitions ---
// These pin definitions are valid ADC pins for both the XIAO ESP32-S3 and C3.
// Pins for the three main fingers (e.g., Index, Middle, Ring).
const int FINGER_SENSOR_1_PIN = D0;
const int FINGER_SENSOR_2_PIN = D1;
const int FINGER_SENSOR_3_PIN = D2;

// Dedicated pin for the thumb.
const int THUMB_SENSOR_PIN    = D3;


void setup() {
  // Initialize serial communication at 115200 baud to match the Python script.
  Serial.begin(115200);

  // Wait for the serial port to initialize. This is good practice.
  while (!Serial) {
    delay(10); 
  }

  // Set the ADC resolution to 12-bit for a 0-4095 reading range.
  // This setting is supported by both the ESP32-S3 and ESP32-C3.
  analogReadResolution(12);
}

void loop() {
  // 1. Read the values from the three main finger sensors.
  int fingerVal1 = analogRead(FINGER_SENSOR_1_PIN);
  int fingerVal2 = analogRead(FINGER_SENSOR_2_PIN);
  int fingerVal3 = analogRead(FINGER_SENSOR_3_PIN);

  // 2. Calculate the average of the main finger values.
  // This single value will control the group of fingers in the Python script.
  int avgFingersValue = (fingerVal1 + fingerVal2 + fingerVal3) / 3;

  // 3. Read the independent value for the thumb sensor.
  int thumbValue = analogRead(THUMB_SENSOR_PIN);

  // 4. Send the processed data in the required "value1,value2" format.
  Serial.print(avgFingersValue);
  Serial.print(",");
  Serial.println(thumbValue); // println automatically adds the required newline character.

  // 5. Add a short delay to maintain a stable data stream and allow time for processing on the receiver.
  delay(50); 
}
```

2. Servidor de Control Python

```python title="control.py"
import time
import numpy as np
import serial  # <--- Added import for serial library
from rustypot import Scs0009PyController

# --- 1. Define Finger Configuration and Servo Parameters ---
# The FINGERS list defines the mapping between fingers and their corresponding servos.
FINGERS = [
    {'name': 'Index',  'm1_id': 1, 'm2_id': 2},
    {'name': 'Middle', 'm1_id': 3, 'm2_id': 4},
    {'name': 'Ring',   'm1_id': 5, 'm2_id': 6},
    {'name': 'Thumb',  'm1_id': 7, 'm2_id': 8}, # Thumb is controlled by an independent ADC channel
]

# Defines the motion range: an offset of -30 degrees when open, and +90 degrees when closed.
# The servos will move in real-time within this [-30, 90] degree range based on the ADC value.
CLOSE_ANGLE_OFFSET = 90
OPEN_ANGLE_OFFSET = -30 # Using a negative value more intuitively represents the offset in the opening direction

# --- 2. Initialize Controllers ---
# !!! NOTE: Please ensure the serial ports for the hand controller and the ESP32 are correct !!!
SERVO_CONTROLLER_PORT = "/dev/ttyACM0"      # Serial port for the robotic hand controller
ESP32_ADC_PORT = "/dev/ttyACM1"            # Serial port for the ESP32 development board

try:
    # Initialize the robotic hand controller
    c = Scs0009PyController(
        serial_port=SERVO_CONTROLLER_PORT,
        baudrate=1000000,
        timeout=0.5,
    )
    # Initialize the serial port for receiving data from ESP32
    adc_port = serial.Serial(ESP32_ADC_PORT, 115200, timeout=1)
    # Flush the input buffer to prevent reading old data
    adc_port.flushInput()
except serial.SerialException as e:
    print(f"Serial Error: {e}")
    print("Please confirm your serial port settings are correct and the devices are connected.")
    exit()


def map_value(x, in_min, in_max, out_min, out_max):
    """
    Core function: Linearly maps a value from one range to another.
    Used to map the ADC's 0-4095 range to the servo angle offset range
    from OPEN_ANGLE_OFFSET to CLOSE_ANGLE_OFFSET.
    """
    # Avoid division by zero
    if in_max == in_min:
        return out_min
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min


def main():
    """Main function: Starts the motors and enters the real-time remote control loop."""
    # Get all servo IDs to be controlled from the configuration
    all_servo_ids = [id for finger in FINGERS for id in (finger['m1_id'], finger['m2_id'])]

    print(f"Servo IDs to be controlled: {all_servo_ids}")
    print(f"Connected to Hand Controller: {SERVO_CONTROLLER_PORT}")
    print(f"Connected to ADC Data Source (ESP32): {ESP32_ADC_PORT}")

    try:
        # -- Start and initialize all motors --
        enable_values = [1] * len(all_servo_ids)
        c.sync_write_torque_enable(all_servo_ids, enable_values)
        print("Torque enabled for all motors.")

        speeds = [6] * len(all_servo_ids) # 6 is generally a fast speed
        c.sync_write_goal_speed(all_servo_ids, speeds)
        print("All motor speeds have been set.")
        time.sleep(0.5)

        # -- Enter real-time remote control main loop --
        print("\nEntering real-time control mode... Press Ctrl+C to exit.")
        while True:
            # Read only when data is available in the serial buffer to avoid blocking
            if adc_port.in_waiting > 0:
                # 1. Read and parse the serial data from the ESP32
                line = adc_port.readline().decode('utf-8').strip()

                # Must ensure the data format is "value1,value2"
                if ',' not in line:
                    continue # If the format is incorrect, skip this iteration

                try:
                    val1_str, val2_str = line.split(',')
                    adc_val_fingers = int(val1_str) # The first value controls the main three fingers
                    adc_val_thumb = int(val2_str)   # The second value controls the thumb
                except ValueError:
                    print(f"Warning: Could not parse data '{line}', skipping.")
                    continue

                # 2. Map the ADC values to angle offsets
                # Map ADC range 0-4095 to angle range -30 (Open) to +90 (Close)
                fingers_offset = map_value(adc_val_fingers, 0, 4095, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                thumb_offset = map_value(adc_val_thumb, 0, 4095, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)

                # (Optional) Print the current status for debugging
                # print(f"ADC: {adc_val_fingers},{adc_val_thumb} -> Angle Offset: Fingers={fingers_offset:.1f}, Thumb={thumb_offset:.1f}")

                # 3. Prepare the synchronous write command
                all_ids = []
                positions_deg = []
                for finger in FINGERS:
                    all_ids.extend([finger['m1_id'], finger['m2_id']])

                    # Apply the corresponding angle offset based on the finger's name
                    if finger['name'] == 'Thumb':
                        current_offset = thumb_offset
                    else: # Index, Middle, Ring
                        current_offset = fingers_offset

                    # M1 and M2 move in opposite directions from the 0-degree center
                    positions_deg.append(0 + current_offset)
                    positions_deg.append(0 - current_offset)

                # 4. Convert units and send the command to the hand
                positions_rad = np.deg2rad(positions_deg).tolist()
                c.sync_write_goal_position(all_ids, positions_rad)

    except KeyboardInterrupt:
        print("\nUser interrupt detected (Ctrl+C)...")

    finally:
        # Before the program ends, safely disable the torque on all motors
        print("Disabling torque on all motors...")
        if 'all_servo_ids' in locals() and all_servo_ids:
            disable_values = [0] * len(all_servo_ids)
            c.sync_write_torque_enable(all_servo_ids, disable_values)
        print("Torque disabled. Program terminated.")


if __name__ == '__main__':
    main()
```

</details>

### Demo de Seguimiento de Manos con MediaPipe

Controla la mano robótica en tiempo real reflejando los movimientos de tu propia mano, rastreada usando una simple cámara web y el framework MediaPipe de Google. Esta demostración avanzada utiliza un backend de Python para ejecutar el modelo de IA complejo de seguimiento de manos, mientras que un frontend HTML simple captura la alimentación de tu cámara. Los dos se comunican a través de un WebSocket, permitiendo un control suave y de baja latencia de la AmazingHand simplemente mostrando tu mano a la cámara.

<div style={{
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
}}>
  <div class="video-container">
  <iframe
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    src="https://www.youtube.com/embed/GwxKmJLR0Mk?start=1645"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
  </div>
</div>

Para ejecutar esta demostración, necesitarás dos archivos: `index.html` para la interfaz del navegador y `backend.py` para el procesamiento del lado del servidor.

**Paso 1: Guardar los Archivos de Código**

Primero, crea los dos archivos requeridos en el mismo directorio. Copia el código HTML en un archivo llamado `index.html`, y copia el código Python en un archivo llamado `backend.py`.

- **`index.html`**: Este archivo crea la página web simple que solicita acceso a tu cámara web y transmite el video al backend.
- **`backend.py`**: Este script lanza un servidor WebSocket local. Recibe la transmisión de video, utiliza la biblioteca MediaPipe para detectar puntos de referencia de la mano en cada frame, y luego traduce esas posiciones de puntos de referencia en comandos de motor para la AmazingHand.

**Paso 2: Ejecutar el Servidor Backend**

Abre una terminal o símbolo del sistema, navega al directorio donde guardaste los archivos, y ejecuta el siguiente comando para iniciar el servidor Python:

```bash
python backend.py
```

Deberías ver un mensaje en la terminal indicando que el servidor ha iniciado y está esperando una conexión, por ejemplo: `WebSocket server started on ws://localhost:8765`.

**Paso 3: Lanzar el Frontend**

Finalmente, navega al mismo directorio en tu explorador de archivos y haz doble clic en el archivo `index.html`. Se abrirá en tu navegador web predeterminado. El navegador probablemente pedirá permiso para usar tu cámara web; por favor permítelo.

Una vez que la página se cargue, verás la alimentación de tu cámara. El script de Python comenzará a procesar el video, y podrás controlar la AmazingHand moviendo tu mano frente a la cámara.

<Details>

```python title="backend.py"
import asyncio
import websockets
import serial
import json
import time
import numpy as np
from rustypot import Scs0009PyController

# --- 1. Configuration ---

# Dexterous hand finger configuration (Pinky finger is not controlled)

FINGERS = [
    {'name': 'Index',  'm1_id': 1, 'm2_id': 2},
    {'name': 'Middle', 'm1_id': 3, 'm2_id': 4},
    {'name': 'Ring',   'm1_id': 5, 'm2_id': 6},
    {'name': 'Thumb',  'm1_id': 7, 'm2_id': 8},
]

# Servo motion range definition

CLOSE_ANGLE_OFFSET = 90
OPEN_ANGLE_OFFSET = -30

# Gesture recognition angle input range (set based on actual values observed from the front-end)

# Approximately 10-20 degrees when extended, 140-160 degrees when flexed

# We are setting a relatively tolerant range

GESTURE_ANGLE_MIN = 20  # Corresponds to OPEN_ANGLE_OFFSET
GESTURE_ANGLE_MAX = 160 # Corresponds to CLOSE_ANGLE_OFFSET

# !!! NOTE: Please ensure the serial port for the hand controller is correct

# On Windows, it might be "COM3", "COM4", etc

# On Linux/Mac, it might be "/dev/ttyACM0", etc

SERVO_CONTROLLER_PORT = "/dev/ttyACM0"

# --- 2. Initialize Controller ---

try:
    c = Scs0009PyController(
        serial_port=SERVO_CONTROLLER_PORT,
        baudrate=1000000,
        timeout=0.5,
    )
    print(f"Successfully connected to the hand controller: {SERVO_CONTROLLER_PORT}")
except serial.SerialException as e:
    print(f"Serial Error: {e}")
    print("Please confirm your serial port settings are correct and the device is connected.")
    exit()

def map_value(x, in_min, in_max, out_min, out_max):
    """
    Core function: Linearly maps a value from one range to another.
    It also clamps the input value to the source range to prevent exceeding the target range.
    """
    # Clamp the input value to the source range
    x = max(in_min, min(x, in_max))
    # Avoid division by zero
    if in_max == in_min:
        return out_min
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

def setup_servos(controller, finger_config):
    """Starts and initializes all motors."""
    all_servo_ids = [id for finger in finger_config for id in (finger['m1_id'], finger['m2_id'])]
    print(f"Servo IDs to be controlled: {all_servo_ids}")

    enable_values = [1] * len(all_servo_ids)
    controller.sync_write_torque_enable(all_servo_ids, enable_values)
    print("Torque enabled for all motors.")

    speeds = [6] * len(all_servo_ids) # 6 is generally a fast speed
    controller.sync_write_goal_speed(all_servo_ids, speeds)
    print("All motor speeds have been set.")
    time.sleep(0.5)
    return all_servo_ids

async def handler(websocket, controller):
    """WebSocket server logic: receives data and controls the servos."""
    print("Web front-end connected.")
    try:
        async for message in websocket:
            try:
                # 1. Parse the JSON data received from the front-end
                data = json.loads(message)

                # 2. Calculate the target angle offset for each finger
                thumb_offset = map_value(data.get('thumb', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                index_offset = map_value(data.get('index', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                middle_offset = map_value(data.get('middle', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                ring_offset = map_value(data.get('ring', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)

                # 3. Prepare the synchronous write command
                all_ids = []
                positions_deg = []

                offsets = {
                    'Thumb': thumb_offset,
                    'Index': index_offset,
                    'Middle': middle_offset,
                    'Ring': ring_offset,
                }

                for finger in FINGERS:
                    finger_name = finger['name']
                    current_offset = offsets.get(finger_name, 0)
                    all_ids.extend([finger['m1_id'], finger['m2_id']])
                    positions_deg.append(0 + current_offset)
                    positions_deg.append(0 - current_offset)

                # 4. Convert units and send the command using the passed controller object
                positions_rad = np.deg2rad(positions_deg).tolist()
                controller.sync_write_goal_position(all_ids, positions_rad)

            except json.JSONDecodeError:
                print(f"Warning: Received non-JSON data: {message}")
            except Exception as e:
                print(f"Error processing message: {e}")

    except websockets.exceptions.ConnectionClosed:
        print("Web front-end disconnected.")

async def main():
    """Main function: Initializes servos and starts the WebSocket server."""
    # 'c' is the controller instance initialized in the global scope
    all_servo_ids = setup_servos(c, FINGERS)

    # Use a lambda function to pass the controller instance 'c' to the handler
    handler_with_controller = lambda ws, path: handler(ws, c)

    try:
        # Use the new handler_with_controller
        async with websockets.serve(handler_with_controller, "0.0.0.0", 8765):
            print("\nWebSocket server started at ws://localhost:8765")
            print("Waiting for the web front-end to connect...")
            await asyncio.Future()  # Run forever
    except KeyboardInterrupt:
        print("\nUser interrupt detected (Ctrl+C)...")
    finally:
        # Before the program exits, safely disable the torque on all motors
        print("Disabling torque on all motors...")
        if all_servo_ids:
            disable_values = [0] * len(all_servo_ids)
            c.sync_write_torque_enable(all_servo_ids, disable_values)
        print("Torque disabled. Program terminated.")

if **name** == '**main**':
    asyncio.run(main())
```

</Details>

<Details>

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-time Hand Tracking & Finger Angle Detection</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #1a1a2e;
            --primary-color: #0f3460;
            --accent-color: #3f72af;
            --highlight-color: #e94560;
            --text-color: #dbe2ef;
            --success-color: #28a745;
            --error-color: #dc3545;
        }
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 2rem;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 0.5rem;
            text-shadow: 0 0 10px rgba(63, 114, 175, 0.5);
        }
        p {
            color: #a9b3c9;
            margin-bottom: 2rem;
            font-weight: 300;
        }
        .main-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            max-width: 1600px;
        }
        #video-container {
            position: relative;
            flex-grow: 1;
            max-width: 1280px;
            aspect-ratio: 16 / 9;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 0 25px rgba(15, 52, 96, 0.8);
            border: 2px solid var(--accent-color);
            background-color: #000;
        }
        #webcam, #outputCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleX(-1);
        }
        #angle-output {
            background: rgba(15, 52, 96, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid var(--accent-color);
            border-radius: 16px;
            width: 320px;
            padding: 1.5rem;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            flex-shrink: 0;
        }
        #angle-output h3 {
            margin-top: 0;
            color: var(--text-color);
            border-bottom: 1px solid var(--accent-color);
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 1.25rem;
            font-weight: 400;
        }
        .finger-angle {
            margin-bottom: 1.25rem;
        }
        .finger-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }
        .progress-bar-container {
            width: 100%;
            height: 12px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 6px;
            overflow: hidden;
        }
        .progress-bar {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, var(--accent-color), var(--highlight-color));
            border-radius: 6px;
            transition: width 0.1s linear;
        }
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.5em;
            text-align: center;
            padding: 20px;
            background-color: rgba(0,0,0,0.7);
            border-radius: 10px;
        }
        #socket-status {
            display: flex;
            align-items: center;
            gap: 8px;
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 8px 16px;
            border-radius: 20px;
            color: white;
            font-size: 0.9em;
            font-weight: 500;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
        }
        #socket-status::before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.3s ease;
        }
        #socket-status.connected {
            background-color: rgba(40, 167, 69, 0.3);
            border: 1px solid var(--success-color);
        }
        #socket-status.connected::before { background-color: var(--success-color); }
        #socket-status.disconnected {
            background-color: rgba(220, 53, 69, 0.3);
            border: 1px solid var(--error-color);
        }
        #socket-status.disconnected::before { background-color: var(--error-color); }
    </style>
</head>
<body>
    <div id="socket-status" class="disconnected"><span>Disconnected</span></div>
    <h1>Robotic Hand Visual Teleoperation</h1>
    <p>Present your palm to the camera to begin real-time control.</p>
    <div class="main-container">
        <div id="video-container">
            <video id="webcam" autoplay playsinline></video>
            <canvas id="outputCanvas"></canvas>
            <div id="loading-message" class="loading">Initializing...</div>
        </div>
        <div id="angle-output">
            <h3>Finger Bending Status</h3>
            <div class="finger-angle">
                <div class="finger-label"><span>👍 Thumb</span><strong id="thumb-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="thumb-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>☝️ Index Finger</span><strong id="index-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="index-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>🖕 Middle Finger</span><strong id="middle-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="middle-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>💍 Ring Finger</span><strong id="ring-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="ring-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>- Pinky (Not Controlled)</span><strong id="pinky-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="pinky-progress" class="progress-bar"></div></div>
            </div>
        </div>
    </div>

    <script type="module">
        import { HandLandmarker, FilesetResolver, DrawingUtils } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

        const video = document.getElementById("webcam");
        const canvasElement = document.getElementById("outputCanvas");
        const canvasCtx = canvasElement.getContext("2d");
        const loadingMessage = document.getElementById("loading-message");
        const socketStatus = document.querySelector("#socket-status span");

        let handLandmarker;
        let lastVideoTime = -1;
        let socket;

        function setupWebSocket() {
            socket = new WebSocket('ws://127.0.0.1:8765');
            const statusIndicator = document.getElementById("socket-status");
            socket.onopen = () => {
                console.log("Successfully connected to the local WebSocket server.");
                socketStatus.textContent = "Connected";
                statusIndicator.className = "connected";
            };
            socket.onclose = () => {
                console.log("Connection to the WebSocket server has been closed.");
                socketStatus.textContent = "Disconnected";
                statusIndicator.className = "disconnected";
            };
            socket.onerror = () => {
                console.error("WebSocket connection error.");
                socketStatus.textContent = "Connection Error";
                statusIndicator.className = "disconnected";
            };
        }

        async function createHandLandmarker() {
            try {
                const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
                handLandmarker = await HandLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numHands: 1
                });
            } catch (error) {
                throw new Error("Failed to load hand gesture model. Please check your network connection.");
            }
        }

        async function setupWebcam() {
            if (!navigator.mediaDevices?.getUserMedia) throw new Error("Browser does not support camera access.");
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
                video.srcObject = stream;
                video.addEventListener("loadeddata", () => {
                    loadingMessage.style.display = 'none';
                    predictWebcam();
                });
            } catch (err) {
                throw new Error("Failed to access camera, please check permissions.");
            }
        }

        function predictWebcam() {
            if (!handLandmarker) {
                requestAnimationFrame(predictWebcam);
                return;
            }
            const nowInMs = Date.now();
            if (video.currentTime !== lastVideoTime) {
                lastVideoTime = video.currentTime;
                const results = handLandmarker.detectForVideo(video, nowInMs);

                canvasElement.width = video.videoWidth;
                canvasElement.height = video.videoHeight;
                canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

                if (results.landmarks?.length) {
                    const drawingUtils = new DrawingUtils(canvasCtx);
                    for (const landmarks of results.landmarks) {
                        drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 5 });
                        drawingUtils.drawLandmarks(landmarks, { color: "#FF0000", radius: 5 });
                        calculateAndSendAngles(landmarks);
                    }
                }
            }
            requestAnimationFrame(predictWebcam);
        }

        function calculateAndSendAngles(landmarks) {
            const getAngle = (p1, p2, p3) => {
                const vec1 = { x: p1.x - p2.x, y: p1.y - p2.y, z: p1.z - p2.z };
                const vec2 = { x: p3.x - p2.x, y: p3.y - p2.y, z: p3.z - p2.z };
                const dot = vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
                const mag1 = Math.sqrt(vec1.x**2 + vec1.y**2 + vec1.z**2);
                const mag2 = Math.sqrt(vec2.x**2 + vec2.y**2 + vec2.z**2);
                const cosTheta = dot / (mag1 * mag2);
                return Math.round(Math.acos(Math.min(1, Math.max(-1, cosTheta))) * 180 / Math.PI);
            };

            const angles = {
                index: 180 - getAngle(landmarks[0], landmarks[5], landmarks[8]),
                middle: 180 - getAngle(landmarks[0], landmarks[9], landmarks[12]),
                ring: 180 - getAngle(landmarks[0], landmarks[13], landmarks[16]),
                thumb: 180 - getAngle(landmarks[2], landmarks[3], landmarks[4]),
                pinky: 180 - getAngle(landmarks[0], landmarks[17], landmarks[20])
            };

            const updateFingerUI = (fingerName, angle) => {
                const percentage = Math.max(0, Math.min(100, (angle / 180) * 100));
                document.getElementById(`${fingerName}-angle-value`).textContent = `${angle}°`;
                document.getElementById(`${fingerName}-progress`).style.width = `${percentage}%`;
            };

            Object.entries(angles).forEach(([key, value]) => updateFingerUI(key, value));

            if (socket?.readyState === WebSocket.OPEN) {
                const { pinky, ...dataToSend } = angles; // Exclude pinky finger
                socket.send(JSON.stringify(dataToSend));
            }
        }

        async function main() {
            try {
                loadingMessage.innerText = "Loading model...";
                await createHandLandmarker();
                loadingMessage.innerText = "Starting camera...";
                await setupWebcam();
                loadingMessage.innerText = "Connecting to server...";
                setupWebSocket();
            } catch (error) {
                console.error("Initialization failed:", error);
                loadingMessage.classList.add("error");
                loadingMessage.innerText = `Initialization failed:\n${error.message}`;
            }
        }
        main();
    </script>
</body>
</html>
```

</Details>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
