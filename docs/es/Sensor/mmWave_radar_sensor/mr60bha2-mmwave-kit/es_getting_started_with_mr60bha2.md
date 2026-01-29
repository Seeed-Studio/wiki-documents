---
description: Introducción al Kit de Sensor de Detección de Respiración y Latidos de 60GHz mmWave con XIAO ESP32C6 (MR60BHA2)
title: Introducción al MR60BHA2
keywords:
- mmwave
- radar
- MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /es/getting_started_with_mr60bha2_mmwave_kit
sku: 114993387
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
---

# Introducción al Kit de Sensor de Detección de Respiración y Latidos de 60GHz mmWave con XIAO ESP32C6 (MR60BHA2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div><br />

Presentamos nuestros avanzados **Módulos de Sensor mmWave** para XIAO, diseñados para proporcionar soluciones de monitoreo de vanguardia tanto para [detección de caídas](https://wiki.seeedstudio.com/es/getting_started_with_mr60fda2_mmwave_kit/) como para monitoreo de latidos cardíacos. Impulsados por el robusto microcontrolador XIAO ESP32 con conectividad Wi-Fi y Bluetooth integrada, estos módulos ofrecen capacidades de detección precisas y confiables. Ya sea que necesites monitorear caídas en tiempo real o rastrear latidos cardíacos con precisión sensible, nuestros módulos están equipados con tecnología de última generación, incluyendo LEDs RGB personalizables y detección de luz ambiente. Con opciones de expansión fáciles a través de puertos Grove GPIO, estos módulos versátiles son perfectos para una amplia gama de aplicaciones, desde integración de hogar inteligente hasta monitoreo de salud.

## Características

- **Wi-Fi y Bluetooth Habilitados**: Ambos módulos están impulsados por XIAO ESP32 con firmware ESPHome pre-cargado, asegurando configuración rápida y personalización.
<!-- - **Fall Detection Module**:
  - **Precise Fall Detection**: Covers a 3x3x3 meter area with a 100° x 40° detection angle.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
- **Módulo de Detección de Latidos**:
  - **Monitoreo Sensible de Latidos**: Detecta latidos cardíacos desde hasta 1.5 metros.
  - **Detección de Presencia Estática**: Monitorea individuos estacionarios hasta 6 metros de distancia.
- **Detección Ambiental**:
  - **Sensor de Luz BH1750**: Mide la luz ambiente de 1 a 65,535 lux.
  - **LED RGB WS2812**: LED personalizable para retroalimentación visual y proyectos DIY.
- **Conectividad Expandible**: Incluye puertos Grove GPIO para agregar sensores y módulos adicionales.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## Especificaciones

| **Parámetros Generales**   |                                      |
| ------------------------ | ------------------------------------ |
| **Firmware mmWave**      | Detección de Respiración y Latidos |
| **Rango de Detección**      | Detección de Presencia Estática Humana: hasta 6 Metros<br />Detección de Respiración y Latidos: 1.5 Metros|
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | LED RGB WS2812 |
| **Botón**               | Reset |
| **Sensor de Luz**         | BH1750 Rango: 1 a 65,535 lux con mediciones ajustables hasta 100,000 lux |
| **Conectividad**         | 1 Puerto GPIO (D0, D10) |
| **Espaciado de Pines**   | 2.54mm |
| **Fuente de Alimentación**         | Entrada 5V/1A |
| **Consumo de energía**    | 0.5w: Modo Standby<br />0.8w: Modo Activación<br />1.4w: trabajo con estado Grove Relay |

## Aplicaciones

- Sistemas de Seguridad
- Monitoreo de Salud
- Automatización de Hogar Inteligente
- Cuidado de Ancianos

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## Primeros Pasos

### Método de instalación y rango de detección

**Método 1.** Montaje lateral, se recomienda que la altura de instalación del radar sea consistente con la altura del pecho de la persona que se está midiendo, y la posición del módulo y la posición del pecho ≤ 1.5m

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_detect_distance.png" style={{width:600, height:'auto'}}/></div>

**Método 2.** Instalación inclinada. Para necesidades de detección de respiración y frecuencia cardíaca durante el sueño, se puede adoptar un método de instalación inclinada. Se requiere que el radar se instale a una altura de 1m directamente sobre la cabecera de la cama, inclinado hacia abajo a 45° hacia el medio de la cama, y la distancia entre el radar y la cavidad torácica se controle para que esté dentro de 1.5m. La dirección normal del radar se alinea con la posición de detección principal para asegurar que el radar pueda detectar datos respiratorios y de latidos cardíacos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
Por favor usa este módulo en un espacio abierto, y mantente fuera de los siguientes escenarios dentro del rango de detección para prevenir interferencias con el módulo:

- Múltiples radares instalados demasiado cerca entre sí  
- El viento mueve cortinas y balancea plantas
- Flujo de agua y película de agua  
- Grandes áreas de reflejos metálicos y de espejos  
- Detección a través de vidrio y tablones de madera delgados  
- Ubicación de instalación propensa a vibraciones  
- Uso de fuentes de alimentación de baja calidad  

:::

### Preparación del Software (Arduino)

:::info Atención

Por defecto, el MR60BHA2 viene pre-ensamblado con el [XIAO ESP32C6](/es/xiao_esp32c6_getting_started), pero es compatible con varios otros microcontroladores para comunicación e integración.

:::

Si esta es tu primera vez usando Arduino con la serie XIAO, sigue la guía de configuración apropiada para tu placa:

- **XIAO ESP32S3**: Consulta la [Guía de Introducción XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/).
- **XIAO ESP32C3**: Sigue la guía [Introducción a Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/).
- **XIAO ESP32C6**: Sigue la guía [Introducción a Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/).

Una vez que tu placa esté configurada, procede con los siguientes pasos:

1. **Descargar la Librería Seeed mmWave**:

   - Descarga la [librería Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library) desde GitHub.

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Instalar la Librería en Arduino IDE**:
   - Abre el Arduino IDE.
   - Navega a **Sketch > Include Library > Add .ZIP Library...**.
   - Selecciona el archivo `.zip` descargado para instalar la librería.
3. **Conectar tu Placa XIAO**:
   - Conecta tu placa XIAO a tu computadora vía USB.
   - En el Arduino IDE, ve a **Tools > Board** y selecciona tu modelo de placa XIAO.
   - Elige el puerto correcto bajo **Tools > Port**.
4. **Cargar un Sketch de Ejemplo**:
   - Ve a **File > Examples > Seeed Arduino mmWave**.
   - Selecciona el ejemplo relevante para Detección de Latidos.
   - Revisa el código y haz cualquier ajuste necesario.
5. **Subir el Sketch**:
   - Haz clic en **Upload** para cargar el código a tu placa XIAO.
   - Abre el **Serial Monitor** en el Arduino IDE para ver los datos del sensor en tiempo real.

<!-- ## Hardware Connections -->

### Uso

Esta sección proporciona fragmentos de código de ejemplo para ayudarte a comenzar rápidamente usando la Librería Seeed Arduino mmWave con varias funcionalidades, incluyendo monitoreo de respiración, control de LED RGB y detección de luz.

#### Módulo de Respiración

Este ejemplo demuestra cómo usar el sensor **MR60BHA2** para monitorear respiración y latidos cardíacos.

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

Si los datos devueltos no son `0`, indica la existencia de un ser vivo dentro del rango de detección.

#### Detección Humana

Este ejemplo demuestra cómo usar el sensor **MR60BHA2** para la detección humana.

:::caution
Por favor, asegúrese de haber [actualizado el firmware](#module-firmware-upgrade) del módulo MR60BHA2 a la versión más reciente.  
El firmware más reciente añade detección de presencia humana y funciones relacionadas con objetos humanos.
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
La respiración y la frecuencia cardíaca se pueden detectar dentro de 1.5 metros, y la presencia se puede detectar dentro de un rango de 1.5 a 6 metros.  
Cuando hay personas dentro del rango de 1.5M, el módulo entrará en el modo de detección de latidos y respiración.
En este modo, la sensibilidad de la función de detección humana puede disminuir.  
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

- **Paso 1.** Descargar la biblioteca `Adafruit_NeoPixel`

Navegar a **Sketch > Include Liarbry > Manage Libraries...**, y buscar **Adafruit_NeoPixel**, instalar la versión más reciente.

- **Paso 2.** Copiar el siguiente código a un nuevo sketch:

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

- **Paso 3.** Seleccionar la placa correcta y el número de puerto para cargar el programa.

Una vez que el programa se haya cargado exitosamente, verás el LED RGB en el lado derecho de los Módulos de Sensor mmWave parpadeando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### Sensor de Luz (BH1750)

Este ejemplo muestra cómo leer valores de intensidad de luz usando el sensor BH1750.

- **Paso 1.** Descargar la biblioteca `hp_BH1750`

Navegar a **Sketch > Include Liarbry > Manage Libraries...**, y buscar **hp_BH1750**, instalar la versión más reciente.

- **Paso 2.** Copiar el siguiente código a un nuevo sketch:

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

- **Paso 3.** Seleccionar la placa correcta y el número de puerto para cargar el programa.

La salida será la siguiente en el Monitor Serie de Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

## API del Módulo de Respiración

Este ejemplo usa la clase `SEEED_MR60BHA2` para interfaz con el sensor MR60BHA2 para monitoreo cardíaco y respiratorio. Aquí está lo que hace cada función clave:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Inicializa el sensor para comunicación usando la interfaz serie especificada. Establece la conexión entre la placa XIAO y el sensor MR60BHA2.

- **`mmWave.update(100)`**:
  - Actualiza los datos del sensor. El parámetro `100` es un valor de tiempo de espera en milisegundos, especificando cuánto tiempo esperar para que el sensor proporcione nuevos datos. Si hay nuevos datos disponibles dentro de este marco de tiempo, la función devuelve `true`.

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - Recupera la información de fase relacionada con las actividades cardíacas y respiratorias.
  - `total_phase` representa el cambio de fase general, mientras que `breath_phase` y `heart_phase` son específicos para las actividades de respiración y latidos del corazón, respectivamente.

- **`mmWave.getBreathRate(float &rate)`**:
  - Obtiene la frecuencia respiratoria actual detectada por el sensor. La frecuencia se devuelve en la variable de referencia `rate`.

- **`mmWave.getHeartRate(float &rate)`**:
  - Recupera la frecuencia cardíaca actual detectada por el sensor. La frecuencia se devuelve en la variable de referencia `rate`.

- **`mmWave.getDistance(float &distance)`**:
  - Obtiene la distancia desde el sensor hasta el objeto detectado (por ejemplo, cuerpo humano). Esta función es útil para entender el rango de la señal detectada.

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - Recupera información sobre nubes de puntos. Solo realiza la recepción del tipo de mensaje, es normal que no haya datos.
  - La estructura `PeopleCounting` contiene un vector de objetivos detectados. Cada objetivo incluye los siguientes atributos:
    - `x_point` : Coordenada X del objetivo (en metros).
    - `y_point` : Coordenada Y del objetivo (en metros).
    - `dop_index` : Índice Doppler, representando la velocidad del objetivo.
      - La velocidad de movimiento real (en cm/s) se puede calcular como: `dop_index * RANGE_STEP`, donde `RANGE_STEP` es la resolución de velocidad.
    - `cluster_index` : ID del clúster del objetivo, usado para identificar objetivos individuales en la escena.

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - Recupera información sobre objetivos detectados.
  - La estructura `PeopleCounting` contiene un vector de objetivos detectados. Cada objetivo incluye los siguientes atributos:
    - `x_point` : Coordenada X del objetivo (en metros).
    - `y_point` : Coordenada Y del objetivo (en metros).
    - `dop_index` : Índice Doppler, representando la velocidad del objetivo.
      - La velocidad de movimiento real (en cm/s) se puede calcular como: `dop_index * RANGE_STEP`, donde `RANGE_STEP` es la resolución de velocidad.
    - `cluster_index` : ID del clúster del objetivo, usado para identificar objetivos individuales en la escena.

- **`mmWave.isHumanDetected()`**:
  - Devuelve si se detecta un humano.

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here's what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - Establece la altura de instalación del radar, que es crucial para la detección precisa de caídas. El parámetro `height` especifica la altura (en metros) a la que se instala el sensor, con un rango válido típicamente entre 1 y 5 metros.

- **`mmWave.setThreshold(float threshold)`**:
  - Establece el umbral de detección de caídas. Este valor determina la sensibilidad del radar en términos de detectar caídas basándose en la altura y distancia del sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Ajusta la sensibilidad del radar para la detección de caídas. El valor de sensibilidad típicamente varía de 3 a 10, con valores más altos haciendo que el sensor sea más receptivo a posibles caídas.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Recupera los parámetros de configuración actuales del radar, incluyendo altura de instalación, umbral de detección de caídas y configuraciones de sensibilidad. Estos parámetros se devuelven a través de las variables de referencia.

- **`mmWave.getHuman()`**:
  - Verifica si se detecta presencia humana por el radar. Devuelve `true` si se detecta un humano, y `false` en caso contrario.

- **`mmWave.getFall()`**:
  - Determina si se ha detectado una caída. Esta función devuelve `true` si se detecta una caída y `false` si no.-->

## Actualización de firmware del módulo

:::caution
Modificar el firmware del radar es una operación riesgosa, así que asegúrate de leer esta sección cuidadosamente antes de seguir cada paso con cuidado. Ten en cuenta que si un paso no se realiza correctamente, el Radar puede quedar inutilizado o inservible.

**Nota especial, si compraste el Fall Radar MR60FDA2, por favor no flashees el firmware ilegalmente de la siguiente manera, ¡¡¡¡seguramente dañará tu dispositivo!!!!**
:::

:::tip
Si prefieres no leer el texto, también puedes consultar **[el video](https://youtu.be/uic8__FFzos)** para actualizar el firmware. Dado que el firmware ESPHome para XIAO será sobrescrito a continuación, es posible que necesites volver a flashear el firmware ESPHome para XIAO en esta [página web](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/) después de actualizar el firmware del radar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uic8__FFzos?si=ijBJOLMk9Z5szwSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
:::

Primero, conecta los módulos XIAO ESP32C6 y MR60BHA2 juntos. Luego usa el siguiente código para programar XIAO.

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

Luego necesitas descargar y descomprimir la herramienta OTA y el firmware aquí.

:::note
El firmware 1.6.12 tiene las siguientes actualizaciones:

1. Corregida la pérdida de objetivo cuando está estacionario dentro de 1.5 metros.

2. Optimizada la estabilidad de seguimiento para objetivos que se mueven entre 0-3 metros, resolviendo imprecisiones previas en las coordenadas del objetivo. Sin embargo, la tasa de actualización de informes ha disminuido.

3. Precisión de respiración y frecuencia cardíaca—Sin actualizaciones en esta versión. Continúa la optimización del entrenamiento de aprendizaje automático relacionado. Se lanzará una actualización de firmware para mejorar la precisión de respiración y frecuencia cardíaca alrededor de fin de mes. El algoritmo anterior de respiración y frecuencia cardíaca tenía problemas fundamentales, que han sido abordados.

:::

- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)

<details>

<summary>Haz clic aquí para previsualizar la versión anterior</summary>

- **Firmware MR60BHA2 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)

:::note
El firmware 1.6.4 tiene las siguientes actualizaciones:

1. Optimizada la función de detección de respiración y frecuencia cardíaca, corrigiendo el error donde pequeños movimientos corporales causaban pérdida de datos.  
2. Mejorada la función de detección de presencia 3D: la respiración y frecuencia cardíaca pueden detectarse dentro de 1.5 metros, y la presencia puede detectarse dentro de un rango de 1.5 a 6 metros.  
3. Agregada una función de detección de personal, capaz de detectar hasta tres individuos dentro de un rango de 6 metros.

:::

- **Firmware MR60BHA2 v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
El firmware 1.6.5 tiene las siguientes actualizaciones:

1. Corregido el problema de que la respiración y frecuencia cardíaca a veces no se detectaban cuando el cuerpo humano estaba en reposo.

:::

- **Firmware MR60BHA2 v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

:::note
El firmware 1.6.10 tiene las siguientes actualizaciones:

1. Optimizada la mecánica de respiración para resolver el problema donde la duración de retención de la respiración no disminuye.
2. Agregada funcionalidad de recolección de datos.

:::

</details>

1. Verifica y conecta al puerto serie (establece la velocidad de baudios a 115200)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. Haz clic en "REQUEST UPDATE" para entrar al modo de actualización:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. Si se imprime "C" o "43", significa que el módulo ha entrado al modo de actualización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. Selecciona el firmware a actualizar. Después de la selección, entrará automáticamente al estado de actualización.

Después de que se complete la actualización, saltará automáticamente al modo normal. Si no salta, apaga y reinicia, y luego usa la herramienta OTA para ver los datos del puerto serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. Después de que se complete la actualización, puedes usar la herramienta OTA para leer la versión y los datos sin procesar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. Necesitas volver a flashear el firmware de XIAO ESP32C6 después de que se complete la actualización.

:::tip
Si en los pasos anteriores has operado incorrectamente causando que ocurra una anomalía y no has podido intentar grabar el firmware nuevamente y el radar no está funcionando correctamente, entonces el radar puede haber sufrido un brick debido a firmware corrupto. La única manera de intentar recuperar el dispositivo es consultar los archivos y documentación **[aquí](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**. Sin embargo, por favor entiende que no proporcionamos soporte técnico y asistencia para el dispositivo dañado debido a operación incorrecta.
:::

## Abierto para Personalización

¿Quieres personalizar el kit para que se ajuste a tus aplicaciones únicas?

Para más información sobre la generación de datos de nube de puntos 3D y configuración de zona de interferencia al personalizar módulos mmWave. Seeed proporciona servicios de personalización y fabricación de I+D integral para desarrollo rápido desde concepto hasta producción. Contáctanos en [iot@seeed.cc](mailto:iot@seeed.cc) para obtener más información.

:::danger Descripción del Servicio Personalizado
El firmware y algoritmos del radar no son de código abierto, y los parámetros complejos del radar como nube de puntos 3D, distancia de detección, rango, etc., requieren servicios personalizados, que pueden involucrar tarifas de personalización adicionales y MOQs.
:::

## Recursos

- **STL**: [Carcasa 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositorio GitHub**: Accede al código base completo y documentación en la [página GitHub de la Librería mmWave de Seeed](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentación ESPHome**: Para mayor personalización e integración, consulta la [documentación de ESPHome](https://esphome.io/).
- **Herramienta de actualización de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)
- **Software GUI MR60BHA2**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **Esquemático del Sensor mmWave V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificación Técnica del Módulo MR60BHA2**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **Manual de Interfaz Tiny Frame MR60BHA2**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **Método de Recuperación de Firmware del Radar vía Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

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
