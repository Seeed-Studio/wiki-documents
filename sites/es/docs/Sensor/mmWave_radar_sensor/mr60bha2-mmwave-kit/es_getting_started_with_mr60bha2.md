---
description: Introducción al uso del kit de sensor de detección de respiración y latidos cardíacos mmWave de 60GHz con XIAO ESP32C6 (MR60BHA2)
title: Introducción al uso de MR60BHA2
keywords:
- mmwave
- radar
- MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /getting_started_with_mr60bha2_mmwave_kit
sku: 114993387
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
---

# Introducción al uso del kit de sensor de detección de respiración y latidos cardíacos mmWave de 60GHz con XIAO ESP32C6 (MR60BHA2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div><br />

Presentamos nuestros avanzados **módulos de sensor mmWave** para XIAO, diseñados para ofrecer soluciones de monitorización de vanguardia tanto para [detección de caídas](https://wiki.seeedstudio.com/es/getting_started_with_mr60fda2_mmwave_kit/) como para monitorización de latidos cardíacos. Impulsados por el robusto microcontrolador XIAO ESP32 con conectividad Wi‑Fi y Bluetooth integrada, estos módulos ofrecen capacidades de detección precisas y fiables. Tanto si necesitas monitorizar caídas en tiempo real como seguir los latidos con alta sensibilidad, nuestros módulos están equipados con tecnología de última generación, incluidos LED RGB personalizables y detección de luz ambiental. Con opciones de expansión sencillas mediante puertos Grove GPIO, estos versátiles módulos son perfectos para una amplia gama de aplicaciones, desde la integración en hogares inteligentes hasta la monitorización sanitaria.

## Características

- **Wi-Fi y Bluetooth habilitados**: Ambos módulos están impulsados por XIAO ESP32 con firmware ESPHome pregrabado, lo que garantiza una configuración y personalización rápidas.
<!-- - **Fall Detection Module**:
  - **Precise Fall Detection**: Covers a 3x3x3 meter area with a 100° x 40° detection angle.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
- **Módulo de detección de latidos cardíacos**:
  - **Monitorización sensible de latidos**: Detecta los latidos cardíacos hasta 1,5 metros.
  - **Detección de presencia estática**: Supervisa a personas inmóviles hasta 6 metros de distancia.
- **Detección ambiental**:
  - **Sensor de luz BH1750**: Mide la luz ambiental de 1 a 65.535 lux.
  - **LED RGB WS2812**: LED personalizable para retroalimentación visual y proyectos DIY.
- **Conectividad ampliable**: Incluye puertos Grove GPIO para añadir sensores y módulos adicionales.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## Especificaciones

| **Parámetros generales**   |                                      |
| ------------------------ | ------------------------------------ |
| **Firmware mmWave**      | Detección de respiración y latidos cardíacos |
| **Rango de detección**      | Detección de presencia humana estática: hasta 6 metros<br />Detección de respiración y latidos cardíacos: 1,5 metros|
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | LED RGB WS2812 |
| **Botón**               | Rest |
| **Sensor de luz**         | BH1750 Rango: de 1 a 65.535 lux con mediciones ajustables hasta 100.000 lux |
| **Conectividad**         | 1 puerto GPIO (D0, D10) |
| **Espaciado del pin header**   | 2,54 mm |
| **Fuente de alimentación**         | Entrada 5V/1A |
| **Consumo de energía**    | 0,5 W: modo de espera<br />0,8 W: modo de activación<br />1,4 W: funcionamiento con estado de Grove Relay |

## Aplicaciones

- Sistemas de seguridad
- Monitorización sanitaria
- Automatización del hogar inteligente
- Cuidado de personas mayores

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## Primeros pasos

### Método de instalación y rango de detección

:::caution
Se recomienda utilizar el radar más reciente de frecuencia respiratoria y cardíaca únicamente en escenarios de sueño. Por favor, abstente de utilizar las funciones de frecuencia respiratoria y cardíaca del radar mientras estés sentado en un escritorio o haciendo ejercicio, ya que esto puede provocar inexactitudes significativas.
:::

Instalación inclinada. Para necesidades de detección de respiración y frecuencia cardíaca durante el sueño, se puede adoptar un método de instalación inclinada. Se requiere instalar el radar a una altura de 1 m directamente sobre la cabecera de la cama, inclinado hacia abajo 45° hacia el centro de la cama, y controlar la distancia entre el radar y la cavidad torácica dentro de 1,5 m. La dirección normal del radar debe estar alineada con la posición principal de detección para garantizar que el radar pueda detectar los datos de respiración y latidos cardíacos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
Utiliza este módulo en un espacio abierto y evita las siguientes situaciones dentro del rango de detección para prevenir interferencias con el módulo:

- Varios radares instalados demasiado cerca  
- El viento mueve las cortinas y balancea las plantas
- Flujo de agua y película de agua  
- Grandes áreas de metal y reflejos de espejos  
- Detección a través de vidrio y tableros de madera delgados  
- Ubicaciones de instalación propensas a vibraciones  
- Uso de fuentes de alimentación de baja calidad  

:::

### Preparación de software (Arduino)

:::info Attention

De forma predeterminada, el MR60BHA2 viene preensamblado con el [XIAO ESP32C6](/es/xiao_esp32c6_getting_started), pero es compatible con varios otros microcontroladores para comunicación e integración.

:::

Si es la primera vez que utilizas Arduino con la serie XIAO, sigue la guía de configuración adecuada para tu placa:

- **XIAO ESP32S3**: Consulta la [guía de inicio XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/).
- **XIAO ESP32C3**: Sigue la guía [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/).
- **XIAO ESP32C6**: Sigue la guía [Getting Started with Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/) .

Una vez que tu placa esté configurada, continúa con los siguientes pasos:

1. **Descarga la biblioteca Seeed mmWave**:

   - Descarga la [biblioteca Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library) desde GitHub.

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Instala la biblioteca en Arduino IDE**:
   - Abre Arduino IDE.
   - Navega a **Sketch > Include Library > Add .ZIP Library...**.
   - Selecciona el archivo `.zip` descargado para instalar la biblioteca.
3. **Conecta tu placa XIAO**:
   - Conecta tu placa XIAO a tu ordenador mediante USB.
   - En Arduino IDE, ve a **Tools > Board** y selecciona el modelo de tu placa XIAO.
   - Elige el puerto correcto en **Tools > Port**.
4. **Carga un ejemplo de Sketch**:
   - Ve a **File > Examples > Seeed Arduino mmWave**.
   - Selecciona el ejemplo correspondiente para Heartbeat Detection.
   - Revisa el código y realiza los ajustes necesarios.
5. **Sube el Sketch**:
   - Haz clic en **Upload** para grabar el código en tu placa XIAO.
   - Abre el **Serial Monitor** en Arduino IDE para ver los datos del sensor en tiempo real.

<!-- ## Hardware Connections -->

### Uso

Esta sección proporciona fragmentos de código de ejemplo para ayudarte a empezar rápidamente a utilizar la biblioteca Seeed Arduino mmWave con varias funcionalidades, incluida la monitorización de la respiración, el control del LED RGB y la detección de luz.

#### Módulo de respiración

Este ejemplo demuestra cómo utilizar el sensor **MR60BHA2** para monitorizar la respiración y los latidos cardíacos.

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

La salida será la siguiente en el Monitor Serie de Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" style={{width:700, height:'auto'}}/></div>

Si los datos devueltos no son `0`, indican la existencia de un ser vivo dentro del rango de detección.

#### Detección de personas

Este ejemplo demuestra cómo usar el sensor **MR60BHA2** para la detección de personas.

:::caution
Asegúrate de haber [upgrade the firmware](#module-firmware-upgrade) del módulo MR60BHA2 a la última versión.  
El firmware más reciente añade funciones de detección de presencia humana y relacionadas con objetos humanos.
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
// Otherwise, define mmWaveSerial as Serial1
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
    if (mmWave.getPeopleCountingTargetInfo(target_info)) {
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

La salida será la siguiente en el Monitor Serie de Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" style={{width:700, height:'auto'}}/></div>

:::note
La respiración y la frecuencia cardíaca se pueden detectar dentro de 1,5 metros, y la presencia se puede detectar dentro de un rango de 1,5 a 6 metros.  
Cuando haya personas dentro del rango de 1,5M, el módulo entrará en el modo de detección de latidos y respiración.
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

#### Parpadear LED RGB

Este ejemplo demuestra cómo controlar un LED RGB usando la biblioteca NeoPixel.

- **Step 1.** Download the `Adafruit_NeoPixel` library

Ve a **Sketch > Include Liarbry > Manage Libraries...**, y busca **Adafruit_NeoPixel**, instala la última versión.

- **Step 2.** Copy following code to a new sketch:

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

- **Step 3.** Select the correct board and port number to upload the program.

Una vez que el programa se haya subido correctamente, verás que el LED RGB en el lado derecho de los Módulos de Sensor mmWave está parpadeando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### Sensor de luz (BH1750)

Este ejemplo muestra cómo leer valores de intensidad de luz usando el sensor BH1750.

- **Step 1.** Download the `hp_BH1750` library

Ve a **Sketch > Include Liarbry > Manage Libraries...**, y busca **hp_BH1750**, instala la última versión.

- **Step 2.** Copy following code to a new sketch:

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

La salida será la siguiente en el Monitor Serie de Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

## API del Módulo de Respiración

Este ejemplo usa la clase `SEEED_MR60BHA2` para interactuar con el sensor MR60BHA2 para la monitorización del corazón y la respiración. Aquí se explica qué hace cada función clave:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Inicializa el sensor para la comunicación usando la interfaz serie especificada. Configura la conexión entre la placa XIAO y el sensor MR60BHA2.

- **`mmWave.update(100)`**:
  - Actualiza los datos del sensor. El parámetro `100` es un valor de tiempo de espera en milisegundos, que especifica cuánto tiempo esperar a que el sensor proporcione nuevos datos. Si hay nuevos datos disponibles dentro de este intervalo, la función devuelve `true`.

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - Obtiene la información de fase relacionada con las actividades del corazón y la respiración.
  - `total_phase` representa el desplazamiento de fase total, mientras que `breath_phase` y `heart_phase` son específicas de las actividades de respiración y latido del corazón, respectivamente.

- **`mmWave.getBreathRate(float &rate)`**:
  - Obtiene la frecuencia respiratoria actual detectada por el sensor. La frecuencia se devuelve en la variable de referencia `rate`.

- **`mmWave.getHeartRate(float &rate)`**:
  - Obtiene la frecuencia cardíaca actual detectada por el sensor. La frecuencia se devuelve en la variable de referencia `rate`.

- **`mmWave.getDistance(float &distance)`**:
  - Obtiene la distancia desde el sensor hasta el objeto detectado (por ejemplo, el cuerpo humano). Esta función es útil para comprender el alcance de la señal detectada.

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - Obtiene información sobre nubes de puntos. Solo implementa la recepción del tipo de mensaje; es normal que no haya datos.
  - La estructura `PeopleCounting` contiene un vector de objetivos detectados. Cada objetivo incluye los siguientes atributos:
    - `x_point` : Coordenada X del objetivo (en metros).
    - `y_point` : Coordenada Y del objetivo (en metros).
    - `dop_index` : Índice Doppler, que representa la velocidad del objetivo.
      - La velocidad real de movimiento (en cm/s) se puede calcular como: `dop_index * RANGE_STEP`, donde `RANGE_STEP` es la resolución de velocidad.
    - `cluster_index` : ID de clúster del objetivo, usado para identificar objetivos individuales en la escena.

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - Obtiene información sobre los objetivos detectados.
  - La estructura `PeopleCounting` contiene un vector de objetivos detectados. Cada objetivo incluye los siguientes atributos:
    - `x_point` : Coordenada X del objetivo (en metros).
    - `y_point` : Coordenada Y del objetivo (en metros).
    - `dop_index` : Índice Doppler, que representa la velocidad del objetivo.
      - La velocidad real de movimiento (en cm/s) se puede calcular como: `dop_index * RANGE_STEP`, donde `RANGE_STEP` es la resolución de velocidad.
    - `cluster_index` : ID de clúster del objetivo, usado para identificar objetivos individuales en la escena.

- **`mmWave.isHumanDetected()`**:
  - Devuelve si se ha detectado una persona.

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - Establece la altura de instalación del radar, lo cual es crucial para una detección de caídas precisa. El parámetro `height` especifica la altura (en metros) a la que se instala el sensor, con un rango válido normalmente entre 1 y 5 metros.

- **`mmWave.setThreshold(float threshold)`**:
  - Establece el umbral de detección de caídas. Este valor determina la sensibilidad del radar para detectar caídas en función de la altura y la distancia desde el sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Ajusta la sensibilidad del radar para la detección de caídas. El valor de sensibilidad suele oscilar entre 3 y 10, y los valores más altos hacen que el sensor responda más a las posibles caídas.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Recupera los parámetros de configuración actuales del radar, incluida la altura de instalación, el umbral de detección de caídas y los ajustes de sensibilidad. Estos parámetros se devuelven a través de las variables de referencia.

- **`mmWave.getHuman()`**:
  - Comprueba si el radar detecta presencia humana. Devuelve `true` si se detecta una persona y `false` en caso contrario.

- **`mmWave.getFall()`**:
  - Determina si se ha detectado una caída. Esta función devuelve `true` si se detecta una caída y `false` si no.-->

## Actualización del firmware del módulo

:::caution
Modificar el firmware del radar es una operación arriesgada, así que asegúrate de leer esta sección detenidamente antes de seguir cada paso con cuidado. Ten en cuenta que, si un paso no se realiza correctamente, el radar puede quedar inutilizado o inservible.

**Nota especial, si compraste el Fall Radar MR60FDA2, por favor no flashees el firmware de forma no autorizada mediante el siguiente método, ¡¡¡¡seguro que dejarás tu dispositivo inservible!!!!**
:::

:::tip
Si prefieres no leer el texto, también puedes consultar **[el vídeo](https://youtu.be/uic8__FFzos)** para actualizar el firmware. Dado que el firmware ESPHome para XIAO se sobrescribirá a continuación, es posible que necesites volver a flashear el firmware ESPHome para XIAO en esta [página web](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/) después de actualizar el firmware del radar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uic8__FFzos?si=ijBJOLMk9Z5szwSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
:::

Primero, conecta juntos los módulos XIAO ESP32C6 y MR60BHA2. Luego utiliza el siguiente código para programar XIAO.

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
La función del código anterior es transmitir de forma transparente el puerto serie del módulo al puerto serie USB de XIAO, para así actualizar el firmware del módulo a través de XIAO.  
Por favor conecta XIAO a tu PC durante el proceso de actualización.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

Verás los datos originales enviados por el módulo.

Luego necesitas descargar y descomprimir aquí la herramienta OTA y el firmware.

:::note
El firmware 1.6.12 tiene la siguiente actualización:

1. Se solucionó la pérdida de objetivo cuando estaba estacionario dentro de 1,5 metros.

2. Se optimizó la estabilidad de seguimiento para objetivos que se mueven entre 0 y 3 metros, resolviendo inexactitudes previas en las coordenadas del objetivo. Sin embargo, la frecuencia de actualización de los reportes ha disminuido.

3. Precisión de respiración y frecuencia cardíaca—No hay actualizaciones en esta versión. Se continúa con la optimización del entrenamiento de aprendizaje automático relacionado. Se publicará una actualización de firmware para mejorar la precisión de respiración y frecuencia cardíaca hacia finales de mes. El algoritmo anterior de respiración y frecuencia cardíaca tenía problemas fundamentales que ya se han solucionado.

:::

- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)

<details>

<summary>Haz clic aquí para previsualizar la versión antigua</summary>

- **Firmware MR60BHA2 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)

:::note
El firmware 1.6.4 tiene la siguiente actualización:

1. Se optimizó la función de detección de respiración y frecuencia cardíaca, corrigiendo el error por el cual pequeños movimientos corporales provocaban pérdida de datos.  
2. Se mejoró la función de detección de presencia 3D: la respiración y la frecuencia cardíaca pueden detectarse dentro de 1,5 metros, y la presencia puede detectarse en un rango de 1,5 a 6 metros.  
3. Se añadió una función de detección de personal, capaz de detectar hasta tres personas dentro de un rango de 6 metros.

:::

- **Firmware MR60BHA2 v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
El firmware 1.6.5 tiene la siguiente actualización:

1. Se solucionó el problema de que a veces no se detectaban la respiración y la frecuencia cardíaca cuando el cuerpo humano estaba en reposo.

:::

- **Firmware MR60BHA2 v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

:::note
El firmware 1.6.10 tiene la siguiente actualización:

1. Se optimizó la mecánica de respiración para resolver el problema de que la duración de la apnea no disminuía.
2. Se añadió la funcionalidad de recopilación de datos.

:::

</details>

1. Comprueba y conéctate al puerto serie (configura la velocidad en baudios a 115200)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. Haz clic en "REQUEST UPDATE" para entrar en el modo de actualización:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. Si se imprime "C" o "43", significa que el módulo ha entrado en modo de actualización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. Selecciona el firmware que se va a actualizar. Después de la selección, entrará automáticamente en el estado de actualización.

Una vez completada la actualización, saltará automáticamente al modo normal. Si no cambia, apaga y reinicia, y luego utiliza la herramienta OTA para ver los datos del puerto serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. Después de que la actualización se complete, puedes usar la herramienta OTA para leer la versión y los datos en bruto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. Necesitas volver a flashear el firmware de XIAO ESP32C6 después de que la actualización se haya completado.

:::tip
Si en los pasos anteriores has operado incorrectamente provocando que se produzca una anomalía y no has podido intentar grabar el firmware de nuevo y el radar no funciona correctamente, entonces es posible que el radar haya quedado inservible debido a un firmware dañado. La única forma de intentar recuperar el dispositivo es consultar los archivos y la documentación **[aquí](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**. Sin embargo, por favor entiende que no proporcionamos soporte técnico ni asistencia para dispositivos que hayan quedado inservibles debido a una operación incorrecta.
:::

## Abierto a personalización

¿Quieres adaptar el kit para que se ajuste a tus aplicaciones únicas?

Para obtener más información sobre la generación de datos de nubes de puntos 3D y la configuración de zonas de interferencia al personalizar módulos mmWave, Seeed ofrece servicios integrales de I+D, personalización y fabricación para un desarrollo rápido desde el concepto hasta la producción. Contáctanos en [iot@seeed.cc](mailto:iot@seeed.cc) para obtener más información.

:::danger Customised Service Description
El firmware y los algoritmos del radar no son de código abierto, y los parámetros complejos del radar, como la nube de puntos 3D, la distancia de detección, el alcance, etc., requieren servicios personalizados, que pueden implicar tarifas de personalización adicionales y MOQs.
:::

## Recursos

- **STL**: [Carcasa 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositorio de GitHub**: Accede a toda la base de código y documentación en la [página de GitHub de Seeed mmWave Library](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentación de ESPHome**: Para más personalización e integración, consulta la [documentación de ESPHome](https://esphome.io/).
- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)
- **Software GUI MR60BHA2**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificación técnica del módulo MR60BHA2**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **Manual de interfaz Tiny Frame MR60BHA2**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **Método de recuperación de firmware de radar mediante Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerle diferentes tipos de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
