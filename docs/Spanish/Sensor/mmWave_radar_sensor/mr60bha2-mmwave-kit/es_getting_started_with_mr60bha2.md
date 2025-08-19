---
description: Getting started with 60GHz mmWave Breathing and Heartbeat Detection Sensor Kit with XIAO ESP32C6 (MR60BHA2)
title: Primeros Pasos con el MR60BHA2
keywords:
- mmwave
- radar
- MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /es/getting_started_with_mr60bha2_mmwave_kit
sidebar_position: 0
last_update:
  date: 07/18/2025
  author: Guillermo
---

# Comenzando con el Kit Sensor mmWave de Respiración y Latido Cardíaco de 60GHz con XIAO ESP32C6 (MR60BHA2)

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" />
</p>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
    </a>
</div>


Presentamos nuestros avanzados **módulos de sensor mmWave** para XIAO, diseñados para ofrecer soluciones de monitoreo de última generación tanto para la [detección de caídas](https://wiki.seeedstudio.com/getting_started_with_mr60fda2_mmwave_kit/) como para el monitoreo de latido cardíaco. Impulsados por el robusto microcontrolador XIAO ESP32 con conectividad Wi-Fi y Bluetooth integrada, estos módulos ofrecen capacidades de detección precisas y confiables. Ya sea para monitorear caídas en tiempo real o rastrear los latidos con sensibilidad, nuestros módulos están equipados con tecnología de vanguardia, incluyendo LEDs RGB personalizables y sensores de luz ambiental. Con opciones de expansión fáciles mediante puertos Grove GPIO, estos versátiles módulos son perfectos para una amplia gama de aplicaciones, desde integración en hogares inteligentes hasta monitoreo de salud.

## Características

- **Wi-Fi y Bluetooth integrados**: Ambos módulos utilizan XIAO ESP32 con firmware ESPHome preinstalado para una configuración y personalización rápidas.
<!-- - **Fall Detection Module**:
  - **Precise Fall Detection**: Covers a 3x3x3 meter area with a 100° x 40° detection angle.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
- **Módulo de detección de latido cardíaco**:
  - **Monitoreo sensible**: Detecta latidos cardíacos hasta a 1.5 metros.
  - **Detección de presencia estática**: Monitorea personas inmóviles hasta 6 metros.
- **Sensado ambiental**:
  - **Sensor de luz BH1750**: Mide luz ambiental desde 1 hasta 65,535 lux.
  - **LED RGB WS2812**: LED personalizable para retroalimentación visual y proyectos DIY.
- **Conectividad expandible**: Incluye puertos Grove GPIO para agregar sensores y módulos adicionales.

## Especificaciones

| **Parámetros Generales** |                                       |
| ------------------------ | ------------------------------------- |
| **Firmware mmWave**      | Detección de Respiración y Latidos    |
| **Rango de Detección**   | Presencia Humana Estática: hasta 6 m<br />Respiración y Latido: hasta 1.5 m |
| **MCU**                  | Seeed Studio XIAO ESP32C6             |
| **LED**                  | WS2812 RGB LED                        |
| **Botón**                | Reset                                 |
| **Sensor de Luz**        | BH1750: 1–65,535 lux (ajustable hasta 100,000 lux) |
| **Conectividad**         | 1 Puerto GPIO (D0, D10)               |
| **Espaciado de pines**   | 2.54 mm                               |
| **Alimentación**         | Entrada 5V/1A                         |
| **Consumo de energía**   | 0.5W: Modo Espera<br />0.8W: Modo Activación<br />1.4W: trabajando con relevador Grove |

## Aplicaciones

- Sistemas de Seguridad  
- Monitoreo de Salud  
- Automatización del Hogar Inteligente  
- Cuidado de Personas Mayores  

## Descripción del Hardware

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" alt="hardware overview" />
</p>

<br />

## Primeros Pasos

### Método de instalación y rango de detección

**Método 1.** Instalación lateral. Se recomienda que la altura del radar coincida con el pecho de la persona medida, y que la distancia entre el módulo y el pecho sea ≤ 1.5 m.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" />
</p>
<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_detect_distance.png" />
</p>

**Método 2.** Instalación inclinada. Para detección durante el sueño, el radar debe instalarse a 1 m de altura sobre la cabecera, inclinado 45° hacia el centro de la cama. La distancia entre el radar y el pecho debe ser ≤ 1.5 m, alineando la dirección del radar con el punto principal de detección.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" />
</p>

:::note
Por favor, utiliza este módulo en un espacio abierto, evitando los siguientes escenarios dentro del rango de detección para prevenir interferencias:

- Múltiples radares demasiado cerca  
- Movimiento de cortinas o plantas por viento  
- Flujo o película de agua  
- Áreas grandes de metal o espejos  
- Detección a través de vidrio o madera delgada  
- Instalaciones propensas a vibraciones  
- Uso de fuentes de poder de baja calidad  
:::

### Preparación de Software (Arduino)

:::info Atención

El MR60BHA2 viene preensamblado con el [XIAO ESP32C6](/xiao_esp32c6_getting_started), pero también es compatible con otros microcontroladores.

:::

Si es tu primera vez usando Arduino con la serie XIAO, sigue la guía correspondiente:

- **XIAO ESP32S3**: [Guía de inicio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)  
- **XIAO ESP32C3**: [Guía de inicio XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/)  
- **XIAO ESP32C6**: [Guía de inicio XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)  

Una vez configurado tu XIAO, sigue estos pasos:

1. **Descargar la librería Seeed mmWave**:

   - Descarga la [librería Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library) desde GitHub.

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>

2. **Instalar la librería en Arduino IDE**:
   - Abre Arduino IDE.
   - Ve a **Sketch > Include Library > Add .ZIP Library...**.
   - Selecciona el archivo `.zip` descargado.

3. **Conectar la placa XIAO**:
   - Conecta tu XIAO por USB.
   - En el IDE, ve a **Tools > Board** y selecciona tu modelo XIAO.
   - Selecciona el puerto correcto en **Tools > Port**.

4. **Cargar un ejemplo**:
   - Ve a **File > Examples > Seeed Arduino mmWave**.
   - Selecciona el ejemplo correspondiente a detección de latidos.
   - Revisa el código y haz los ajustes necesarios.

5. **Subir el Sketch**:
   - Haz clic en **Upload**.
   - Abre el **Monitor Serial** para ver los datos en tiempo real.

<!-- ## Hardware Connections -->

### Uso

Esta sección proporciona ejemplos de código para comenzar rápidamente con la librería Seeed Arduino mmWave, incluyendo monitoreo de respiración, control del LED RGB y sensado de luz.

#### Módulo de Respiración

Este ejemplo demuestra cómo usar el sensor **MR60BHA2** para monitorear respiración y latidos.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// Set up serial communication depending on the board type
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60BHA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);
}

void loop() {
if (mmWave.update(100)) {
 float total_phase, breath_phase, heart_phase;
 if (mmWave.getHeartBreathPhases(total_phase, breath_phase, heart_phase)) {
   Serial.printf("total_phase: %.2f\t", total_phase);
   Serial.printf("breath_phase: %.2f\t", breath_phase);
   Serial.printf("heart_phase: %.2f\n", heart_phase);
 }

 float breath_rate;
 if (mmWave.getBreathRate(breath_rate)) {
   Serial.printf("breath_rate: %.2f\n", breath_rate);
 }

 float heart_rate;
 if (mmWave.getHeartRate(heart_rate)) {
   Serial.printf("heart_rate: %.2f\n", heart_rate);
 }

 float distance;
 if (mmWave.getDistance(distance)) {
   Serial.printf("distance: %.2f\n", distance);
 }
}
}
```

La salida será la siguiente en el Monitor Serial de Arduino:

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" />
</p>

Si los datos devueltos no son `0`, esto indica la existencia de un ser vivo dentro del rango de detección.

#### Detección Humana

Este ejemplo demuestra cómo usar el sensor **MR60BHA2** para la detección de personas.

:::caution
Asegúrate de haber [actualizado el firmware](#module-firmware-upgrade) del módulo MR60BHA2 a la versión más reciente.  
El firmware más reciente añade funciones de detección de presencia humana y objetos humanos.
:::

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// If the board is an ESP32, include the HardwareSerial library and create a
// HardwareSerial object for the mmWave serial communication
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60BHA2 mmWave;

void setup() {
  Serial.begin(115200);
  mmWave.begin(&mmWaveSerial);
}

void loop() {
  if (mmWave.update(100)) {
    if (mmWave.isHumanDetected()) {
        Serial.printf("-----Human Detected-----\n");
    }

    PeopleCounting target_info;
    if (mmWave.getPeopleCountingTartgetInfo(target_info)) {
        Serial.printf("-----Got Target Info-----\n");
        Serial.printf("Number of targets: %zu\n", target_info.targets.size());

        for (size_t i = 0; i < target_info.targets.size(); i++) {
            const auto& target = target_info.targets[i];
            Serial.printf("Target %zu:\n", i + 1);
            Serial.printf("  x_point: %.2f\n", target.x_point);
            Serial.printf("  y_point: %.2f\n", target.y_point);
            Serial.printf("  dop_index: %d\n", target.dop_index);
            Serial.printf("  cluster_index: %d\n", target.cluster_index);
            Serial.printf("  move_speed: %.2f cm/s\n", target.dop_index * RANGE_STEP);
        }
    }
    // delay(500);
  }
}
```

La salida será la siguiente en el Monitor Serial de Arduino:

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" />
</p>

:::note
La respiración y el ritmo cardíaco pueden detectarse dentro de un rango de 1.5 metros, y la presencia puede detectarse dentro de un rango de 1.5 a 6 metros.  
Cuando hay personas dentro del rango de 1.5 m, el módulo entrará en modo de detección de respiración y latido cardíaco.  
En este modo, la sensibilidad de la función de detección de personas puede disminuir.  
:::

<!-- 
### Fall Module

This example shows how to use the **MR60FDA2** sensor for fall detection.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60FDA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);

delay(1000);

uint32_t sensitivity = 15;
float height = 3.0, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

if (mmWave.setInstallationHeight(height)) {
 Serial.printf("setInstallationHeight success: %.2f\n", height);
} else {
 Serial.println("setInstallationHeight failed");
}

if (mmWave.setThreshold(threshold)) {
 Serial.printf("setThreshold success: %.2f\n", threshold);
} else {
 Serial.println("setThreshold failed");
}

if (mmWave.setSensitivity(sensitivity)) {
 Serial.printf("setSensitivity success %d\n", sensitivity);
} else {
 Serial.println("setSensitivity failed");
}

if (mmWave.getRadarParameters(height, threshold, sensitivity, rect_XL,
                             rect_XR, rect_ZF, rect_ZB)) {
 Serial.printf("height: %.2f\tthreshold: %.2f\tsensitivity: %d\n", height,
               threshold, sensitivity);
 Serial.printf(
     "rect_XL: %.2f\trect_XR: %.2f\trect_ZF: %.2f\trect_ZB: %.2f\n", rect_XL,
     rect_XR, rect_ZF, rect_ZB);
} else {
 Serial.println("getRadarParameters failed");
}
}

void loop() {
if (mmWave.update(100)) {
 bool is_human = mmWave.getHuman();
 if (is_human) {
   Serial.printf("People Exist: %s\n", is_human ? "true" : "false");
 }

 bool is_fall = mmWave.getFall();
 if (is_fall) {
   Serial.printf("isFall: %s\n", is_fall ? "true" : "false");
 }
}
}
``` -->

#### Parpadeo del LED RGB

Este ejemplo demuestra cómo controlar un LED RGB utilizando la librería NeoPixel.

- **Paso 1.** Descarga la librería `Adafruit_NeoPixel`

Ve a **Sketch > Include Library > Manage Libraries...**, busca **Adafruit_NeoPixel** e instala la versión más reciente.

- **Paso 2.** Copia el siguiente código en un nuevo sketch:

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>

const int pixelPin = D1;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);

void setup() {
Serial.begin(115200);
pixels.begin();
pixels.clear();
pixels.show();
}

void loop() {
for (int i = 0; i < 10; i++) {
 pixels.setPixelColor(0, pixels.Color(255, 0, 0));
 pixels.show();
 delay(100);
 pixels.setPixelColor(0, pixels.Color(0, 0, 0));
 pixels.show();
 delay(100);
}

for (int i = 255; i >= 0; i--) {
 pixels.setPixelColor(0, pixels.Color(i, 0, 0));
 pixels.show();
 delay(10);
}
}
```

- **Paso 3.** Selecciona la placa y el puerto correctos para cargar el programa.

Una vez que el programa se haya cargado correctamente, verás que el LED RGB en el lado derecho del módulo sensor mmWave está parpadeando.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" />
</p>

#### Sensor de Luz (BH1750)

Este ejemplo muestra cómo leer valores de intensidad lumínica utilizando el sensor BH1750.

- **Paso 1.** Descarga la librería `hp_BH1750`

Ve a **Sketch > Include Library > Manage Libraries...**, busca **hp_BH1750** e instala la versión más reciente.

- **Paso 2.** Copia el siguiente código en un nuevo sketch:

```cpp
#include <Arduino.h>
#include <hp_BH1750.h>

hp_BH1750 BH1750;

void setup() {
Serial.begin(9600);

bool avail = BH1750.begin(BH1750_TO_GROUND);

if (!avail) {
 Serial.println("No BH1750 sensor found!");
 while (true) {}
}

Serial.printf("conversion time: %dms\n", BH1750.getMtregTime());
BH1750.start();
}

void loop() {
if (BH1750.hasValue()) {
 float lux = BH1750.getLux();
 Serial.println(lux);

 BH1750.start();
}
}
```

- **Step 3.** Select the correct board and port number to upload the program.

The output will be as follows on Arduino Serial Monitor:

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" />
</p>

<!-- ## API Explanation -->

## API del Módulo de Respiración

Este ejemplo utiliza la clase `SEEED_MR60BHA2` para comunicarse con el sensor MR60BHA2 para monitoreo de latido y respiración. A continuación se describen las funciones principales:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Inicializa el sensor para la comunicación utilizando la interfaz serial especificada. Establece la conexión entre la placa XIAO y el sensor MR60BHA2.

- **`mmWave.update(100)`**:
  - Actualiza los datos del sensor. El parámetro `100` es un valor de tiempo de espera en milisegundos, indicando cuánto esperar por nuevos datos del sensor. Si se reciben datos dentro de ese tiempo, la función devuelve `true`.

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - Recupera la información de fase relacionada con las actividades de respiración y latido.
  - `total_phase` representa el desplazamiento de fase total, mientras que `breath_phase` y `heart_phase` corresponden específicamente a respiración y latido, respectivamente.

- **`mmWave.getBreathRate(float &rate)`**:
  - Obtiene la tasa de respiración detectada por el sensor. El valor se devuelve en la variable de referencia `rate`.

- **`mmWave.getHeartRate(float &rate)`**:
  - Obtiene la tasa de latido cardíaco detectada por el sensor. El valor se devuelve en la variable de referencia `rate`.

- **`mmWave.getDistance(float &distance)`**:
  - Obtiene la distancia desde el sensor hasta el objeto detectado (por ejemplo, cuerpo humano). Esta función es útil para entender el alcance de la señal detectada.

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - Recupera información sobre las nubes de puntos. Solo se encarga de recibir el tipo de mensaje; es normal que no se reciban datos siempre.
  - La estructura `PeopleCounting` contiene un vector de objetivos detectados. Cada objetivo incluye los siguientes atributos:
    - `x_point`: Coordenada X del objetivo (en metros).
    - `y_point`: Coordenada Y del objetivo (en metros).
    - `dop_index`: Índice Doppler, representa la velocidad del objetivo.
      - La velocidad real (en cm/s) puede calcularse como: `dop_index * RANGE_STEP`, donde `RANGE_STEP` es la resolución de velocidad.
    - `cluster_index`: ID del clúster, usado para identificar objetivos individuales en la escena.

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - Recupera información sobre los objetivos detectados.
  - La estructura `PeopleCounting` contiene un vector de objetivos detectados. Cada objetivo incluye los mismos atributos que en la función anterior:
    - `x_point`: Coordenada X del objetivo (en metros).
    - `y_point`: Coordenada Y del objetivo (en metros).
    - `dop_index`: Índice Doppler, representa la velocidad del objetivo.
      - La velocidad real (en cm/s) puede calcularse como: `dop_index * RANGE_STEP`.
    - `cluster_index`: ID del clúster del objetivo.

- **`mmWave.isHumanDetected()`**:
  - Devuelve `true` si se detecta una persona.

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - Sets the installation height of the radar, which is crucial for accurate fall detection. The `height` parameter specifies the height (in meters) at which the sensor is installed, with a valid range typically between 1 and 5 meters.

- **`mmWave.setThreshold(float threshold)`**:
  - Sets the fall detection threshold. This value determines the sensitivity of the radar in terms of detecting falls based on the height and distance from the sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Adjusts the sensitivity of the radar for fall detection. The sensitivity value typically ranges from 3 to 10, with higher values making the sensor more responsive to potential falls.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Retrieves the current configuration parameters of the radar, including installation height, fall detection threshold, and sensitivity settings. These parameters are returned via the reference variables.

- **`mmWave.getHuman()`**:
  - Checks if a human presence is detected by the radar. Returns `true` if a human is detected, and `false` otherwise.

- **`mmWave.getFall()`**:
  - Determines whether a fall has been detected. This function returns `true` if a fall is detected and `false` if not.-->

## Actualización de Firmware del Módulo

:::caution
Modificar el firmware del radar es una operación riesgosa, así que asegúrate de leer esta sección cuidadosamente y seguir cada paso con atención. Ten en cuenta que, si algún paso se realiza incorrectamente, el radar puede quedar inutilizable o dañado permanentemente.

**Nota especial: si adquiriste el radar de caídas MR60FDA2, por favor NO flashes el firmware por este medio. ¡Hacerlo dañará tu dispositivo irreversiblemente!**
:::

Primero, conecta los módulos XIAO ESP32C6 y MR60BHA2. Luego utiliza el siguiente código para programar el XIAO.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// If the board is an ESP32, include the HardwareSerial library and create a
// HardwareSerial object for the mmWave serial communication
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// Otherwise, define mmWaveSerial as Serial1
#  define mmWaveSerial Serial1
#endif

void setup() {
  // Initialize the serial communication for debugging
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for Serial to initialize
  }

  // Initialize the mmWaveSerial communication
  mmWaveSerial.begin(115200);
}

void loop() {
  // Check if there is data available from mmWaveSerial
  while (mmWaveSerial.available() > 0) {
    char receivedChar = mmWaveSerial.read();
    Serial.write(receivedChar); // Forward data to Serial
  }

  // Check if there is data available from Serial
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    mmWaveSerial.write(receivedChar); // Forward data to mmWaveSerial
  }
}
```

:::tip
La función del código anterior es transmitir de forma transparente el puerto serial del módulo al puerto serial USB del XIAO, para actualizar el firmware del módulo a través de XIAO.  
Por favor, conecte el XIAO a su PC durante el proceso de actualización.
:::

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" />
</p>

Verás los datos originales enviados por el módulo.

Luego necesitas descargar y descomprimir la herramienta OTA y el firmware aquí.

:::note
El firmware 1.6.5 tiene la siguiente actualización:
1. Se corrigió el problema de que a veces no se detectaban la respiración y la frecuencia cardíaca cuando el cuerpo humano estaba en reposo.
:::

- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

<details>

<summary>Haz clic aquí para ver la versión antigua</summary>

- **MR60BHA2 Firmware v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **MR60BHA2 Firmware v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
El firmware 1.6.4 tiene las siguientes actualizaciones:
1. Optimización en la detección de respiración y frecuencia cardíaca, corrigiendo el error donde pequeños movimientos corporales causaban pérdida de datos.  
2. Mejora en la función de detección de presencia 3D: respiración y frecuencia cardíaca se pueden detectar hasta 1.5 metros, y la presencia hasta un rango de 1.5 a 6 metros.  
3. Se añadió una función de detección de personas, capaz de detectar hasta tres individuos en un rango de 6 metros.
:::

</details>

1. Verifica y conecta al puerto serial (configura la tasa de baudios a 115200)

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" />
</p>

2. Haz clic en "REQUEST UPDATE" para entrar en modo de actualización:

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" />
</p>
<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" />
</p>
<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" />
</p>
<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" />
</p>
<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" />
</p>
<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" />
</p>
<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" />
</p>

3. Si se imprime "C" o "43", significa que el módulo ha entrado en modo de actualización.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" />
</p>

4. Selecciona el firmware a actualizar. Después de la selección, entrará automáticamente en estado de actualización. 

Al finalizar la actualización, saltará automáticamente al modo normal. Si no lo hace, apaga y reinicia, y luego usa la herramienta OTA para ver los datos del puerto serial.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" />
</p>

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" />
</p>

5. Al completar la actualización, puedes usar la herramienta OTA para leer la versión y los datos en bruto.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" />
</p>

6. Necesitas reprogramar el firmware del XIAO ESP32C6 después de completar la actualización.

:::tip
Si en los pasos anteriores has operado incorrectamente causando una anomalía y no has podido volver a grabar el firmware, y el radar no funciona correctamente, es posible que el radar haya quedado brickeado debido a un firmware corrupto.  
La única forma de intentar recuperar el dispositivo es referirse a los archivos y documentación **[aquí](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**. Sin embargo, ten en cuenta que no ofrecemos soporte técnico ni asistencia para dispositivos brickeados por operación incorrecta.
:::

## Personalización

¿Quieres adaptar el kit a tus aplicaciones únicas?

Para más información sobre generación de datos 3D en nube de puntos y configuración de zonas de interferencia al personalizar módulos mmWave, Seeed ofrece servicios integrales de I+D y fabricación para un desarrollo rápido desde concepto hasta producción. Contáctanos en `iot@seeed.cc` para más información.

## Recursos

- **STL**: [Carcasa 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositorio GitHub**: Accede al código completo y documentación en la [página GitHub de la librería Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentación ESPHome**: Para más personalización e integración, consulta la [documentación de ESPHome](https://esphome.io/).
- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)
- **Software GUI MR60BHA2**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **Esquemático del sensor mmWave V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificaciones técnicas módulo MR60BHA2**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **Manual de interfaz Tiny Frame MR60BHA2**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **Método de recuperación de firmware Radar vía Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte para que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
