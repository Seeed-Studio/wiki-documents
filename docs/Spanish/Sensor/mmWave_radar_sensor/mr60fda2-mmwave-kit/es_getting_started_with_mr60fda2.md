---
description: Getting started with 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)
title: Primeros Pasos con el MR60FDA2
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /es/getting_started_with_mr60fda2_mmwave_kit
sidebar_position: 0
last_update:
  date: 07/18/2025
  author: Guillermo
---

# Comenzando con el Kit de Sensor de Detección de Caídas mmWave 60GHz con XIAO ESP32C6 (MR60FDA2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

Presentamos nuestros avanzados **Módulos de Sensor mmWave** para XIAO, diseñados para proporcionar soluciones de monitoreo de vanguardia tanto para la detección de caídas como para el monitoreo de [ritmo cardíaco](https://wiki.seeedstudio.com/getting_started_with_mr60bha2_mmwave_kit/). Impulsados por el robusto microcontrolador XIAO ESP32 con conectividad Wi-Fi y Bluetooth incorporada, estos módulos ofrecen capacidades de detección precisas y confiables. Ya sea que necesites monitorear caídas en tiempo real o rastrear latidos del corazón con sensibilidad, nuestros módulos están equipados con tecnología de última generación, incluidos LEDs RGB personalizables y detección de luz ambiental. Con opciones fáciles de expansión mediante puertos Grove GPIO, estos versátiles módulos son perfectos para una amplia gama de aplicaciones, desde integración en hogares inteligentes hasta monitoreo de salud.

## Características

- **Wi-Fi y Bluetooth habilitados**: Ambos módulos funcionan con XIAO ESP32 con firmware ESPHome preinstalado para una configuración y personalización rápidas.
- **Módulo de Detección de Caídas**:
  - **Detección precisa de caídas**: Cubre un área de 3x3x3 metros con un ángulo de detección de 100° x 40°.
  - **Detección de presencia estática**: Monitorea personas estáticas hasta 6 metros de distancia.

<!-- - **Heartbeat Detection Module**:
  - **Sensitive Heartbeat Monitoring**: Detects heartbeats from up to 1.5 meters.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
  
- **Sensores Ambientales**:
  - **Sensor de luz BH1750**: Mide la luz ambiental desde 1 hasta 65,535 lux.
  - **LED RGB WS2812**: LED personalizable para retroalimentación visual y proyectos DIY.
- **Conectividad Expandible**: Incluye puertos Grove GPIO para añadir sensores y módulos adicionales.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## Especificaciones

| **Parámetros Generales**   |                                      |
| -------------------------- | ------------------------------------ |
| **Firmware mmWave**        | Monitor de Detección de Caídas |
| **Rango de Detección**     | Detección de presencia humana estática: hasta 6 metros<br />Detección de caídas: <br />- Rango de 3x3x3 metros<br />- Campo de visión horizontal (FoV) de 120°<br />- FoV vertical de 100° |
| **MCU**                    | Seeed Studio XIAO ESP32C6 |
| **LED**                    | LED RGB WS2812 |
| **Botón**                  | Reposo |
| **Sensor de Luz**          | BH1750 Rango: 1 a 65,535 lux con mediciones ajustables hasta 100,000 lux |
| **Conectividad**           | 1 Puerto GPIO (D0, D10) |
| **Espaciado de Pines**     | 2.54mm |
| **Fuente de Alimentación** | Entrada 5V/1A |
| **Consumo de energía**     | 0.5w: Modo de espera<br />0.8w: Modo activado<br />1.4w: Funciona con estado de relé Grove |

## Aplicaciones

- Sistemas de seguridad
- Monitoreo de salud
- Automatización del hogar inteligente
- Cuidado de personas mayores

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## Visión General del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## Primeros Pasos

### Método de instalación y rango de detección

Altura de instalación superior de 2.2-3.0m, radio máximo de detección de 2m, el lado con el sensor mmWave debe alinearse con la dirección de detección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_detect_distant.png" style={{width:600, height:'auto'}}/></div>

:::note
Por favor utiliza este módulo en un espacio abierto y evita las siguientes situaciones dentro del rango de detección para prevenir interferencias con el módulo:

- Múltiples radares instalados muy cerca  
- Viento que mueve cortinas y plantas
- Flujo de agua y películas de agua  
- Grandes áreas de metal y reflejos de espejos  
- Detección a través de vidrio y tablones de madera delgados  
- Lugar de instalación propenso a vibraciones  
- Uso de fuentes de alimentación de baja calidad  

:::

### Preparación del Software (Arduino)

:::info Atención

Por defecto, el MR60BHA2 viene preensamblado con el [XIAO ESP32C6](/xiao_esp32c6_getting_started), pero es compatible con varios otros microcontroladores para comunicación e integración.

:::

Si es tu primera vez usando Arduino con la serie XIAO, sigue la guía adecuada para tu placa:

- **XIAO ESP32S3**: Consulta la [Guía de Inicio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/).
- **XIAO ESP32C3**: Sigue la [Guía de Inicio XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/).
- **XIAO ESP32C6**: Sigue la [Guía de Inicio XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/).

Una vez que tu placa esté lista, sigue estos pasos:

1. **Descarga la Librería Seeed mmWave**:
   - Descarga la [librería Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library) desde GitHub.

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Instala la Librería en Arduino IDE**:
   - Abre el Arduino IDE.
   - Ve a **Sketch > Incluir Librería > Añadir Librería .ZIP...**.
   - Selecciona el archivo `.zip` descargado para instalar la librería.
3. **Conecta tu Placa XIAO**:
   - Conecta tu placa XIAO a la computadora mediante USB.
   - En el Arduino IDE, ve a **Herramientas > Placa** y selecciona tu modelo de placa XIAO.
   - Elige el puerto correcto en **Herramientas > Puerto**.
4. **Carga un Ejemplo**:
   - Ve a **Archivo > Ejemplos > Seeed Arduino mmWave**.
   - Selecciona el ejemplo relevante para Detección de Caídas.
   - Revisa el código y realiza ajustes si es necesario.
5. **Sube el Código**:
   - Haz clic en **Subir** para cargar el código a tu placa XIAO.
   - Abre el **Monitor Serial** en el Arduino IDE para ver los datos del sensor en tiempo real.

<!-- ## Hardware Connections -->

### Uso

Esta sección proporciona fragmentos de código de ejemplo para ayudarte a comenzar rápidamente a usar la Librería Seeed Arduino mmWave con varias funcionalidades, incluyendo detección de caídas, control de LED RGB y detección de luz.

<!-- 
### Breath Module

This example demonstrates how to use the **MR60BHA2** sensor for monitoring breathing and heartbeat.

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
``` -->

#### Módulo de caída

Este ejemplo muestra como usar el sensor **MR60FDA2** como para detección de caídas.

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>
#include <hp_BH1750.h>  //inlude the library
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmwaveSerial(0);
#else
#  define mmwaveSerial Serial1
#endif

#define LIGHT_GPIO D0

/****** instance ******/

hp_BH1750 BH1750;  // create the sensor object

SEEED_MR60FDA2 mmWave;

Adafruit_NeoPixel pixels =
    Adafruit_NeoPixel(1, /* pixelPin */ D1, NEO_GRB + NEO_KHZ800);

/****** funtions ******/

void relay_init();
void relay_on();
void relay_off();

/****** variables ******/
uint32_t sensitivity = 15;
float height = 2.8, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

const uint8_t dark_lux = 10;

void setup() {
  bool result;
  Serial.begin(115200);
  mmWave.begin(&mmwaveSerial);
  /* init relay device*/
  relay_init();

  /* init RGB LED */
  pixels.begin();
  pixels.clear();
  pixels.setBrightness(8);
  pixels.show();
  pixels.setPixelColor(0, pixels.Color(125, 125, 125));
  /* init built-in light ambient light sensor */
  BH1750.begin(BH1750_TO_GROUND);  // will be false no sensor found
                                   // | already connected to I2C
  BH1750.calibrateTiming();
  BH1750.start(BH1750_QUALITY_HIGH2,
               254);  // start the first measurement in setup
  /* set mmwave-fall parameters */
  mmWave.setUserLog(0);

  /** set the height of the installation **/
  if (mmWave.setInstallationHeight(height)) {
    Serial.printf("setInstallationHeight success: %.2f\n", height);
  } else {
    Serial.println("setInstallationHeight failed");
  }

  /** Set threshold **/
  if (mmWave.setThreshold(threshold)) {
    Serial.printf("setThreshold success: %.2f\n", threshold);
  } else {
    Serial.println("setThreshold failed");
  }

  /** Set sensitivity **/
  if (mmWave.setSensitivity(sensitivity)) {
    Serial.printf("setSensitivity success %d\n", sensitivity);
  } else {
    Serial.println("setSensitivity failed");
  }

  /** get new parameters of mmwave **/
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

typedef enum {
  EXIST_PEOPLE,
  NO_PEOPLE,
  PEOPLE_FALL,
} MMWAVE_STATUS;

MMWAVE_STATUS status = NO_PEOPLE, last_status = NO_PEOPLE;
float lux = 100;
void loop() {
  /* get status */
  if (mmWave.update(100)) {
    bool is_human, is_fall;
    // Get the human detection status
    if (mmWave.getHuman(is_human)) {
      // Get the fall detection status
      if (mmWave.getFall(is_fall)) {
        // Determine the status based on human and fall detection
        if (!is_human && !is_fall) {
          status = NO_PEOPLE;  // No human and no fall detected
        } else if (is_fall) {
          status = PEOPLE_FALL;  // Fall detected
        } else {
          status = EXIST_PEOPLE;  // Human detected without fall
        }
      }
    }
    // Get the human detection status
    if (!mmWave.getHuman(is_human) && !mmWave.getFall(is_fall)) {
      status = NO_PEOPLE;  // No human and no fall detected
    } else if (is_fall) {
      status = PEOPLE_FALL;  // Fall detected
    } else {
      status = EXIST_PEOPLE;  // Human detected without fall
    }
  }

  switch (status) {
    case NO_PEOPLE:
      Serial.printf("Waiting for people");
      break;
    case EXIST_PEOPLE:
      Serial.printf("PEOPLE !!!");
      break;
    case PEOPLE_FALL:
      Serial.printf("FALL !!!");
      break;
    default:
      break;
  }
  Serial.print("\n");

  /* change interactive Light*/
  if (status != last_status) {  // switching LED
    switch (status) {
      case NO_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 0, 255));  // BLUE
        break;
      case EXIST_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 255, 0));  // GREEN
        break;
      case PEOPLE_FALL:
        pixels.setPixelColor(0, pixels.Color(255, 0, 0));  // RED
        break;
      default:
        break;
    }
    pixels.show();
    last_status = status;
  }

  /* update lux value */
  if (BH1750.hasValue() == true) {
    lux = BH1750.getLux();
    BH1750.start(BH1750_QUALITY_HIGH2, 254);
  }

  Serial.print("LUX: ");
  Serial.print(lux);
  Serial.print("\t");

  if ((status == EXIST_PEOPLE || status == PEOPLE_FALL) && lux < dark_lux) {
    relay_on();
  } else {
    relay_off();
  }
}

void relay_init() {
  pinMode(LIGHT_GPIO, OUTPUT);
}
void relay_on() {
  digitalWrite(LIGHT_GPIO, HIGH);
}
void relay_off() {
  digitalWrite(LIGHT_GPIO, LOW);
}
```

El resultado será el siguiente en el Monitor Serial de Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/fall_detection.png" style={{width:700, height:'auto'}}/></div>

#### Parpadeo del LED RGB

Este ejemplo muestra cómo controlar un LED RGB usando la librería NeoPixel.

- **Paso 1.** Descargar la librería `Adafruit_NeoPixel`

Ve a **Sketch > Incluir Librería > Administrar Bibliotecas...**, busca **Adafruit_NeoPixel** e instala la versión más reciente.

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

- **Paso 3.** Selecciona la placa correcta y el número de puerto para subir el programa.

Una vez que el programa se haya cargado correctamente, verás que el LED RGB en el lado derecho de los módulos del sensor mmWave parpadea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### Sensor de Luz (BH1750)

Este ejemplo muestra cómo leer valores de intensidad luminosa utilizando el sensor BH1750.

- **Paso 1.** Descarga la librería `hp_BH1750`

Ve a **Sketch > Incluir Librería > Administrar Bibliotecas...**, busca **hp_BH1750** e instala la versión más reciente.

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

- **Paso 3.** Selecciona la placa correcta y el número de puerto para subir el programa.

El resultado que verás en el Monitor Serial de Arduino será similar al siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

<!-- 
### Breath Module API

This example uses the `SEEED_MR60BHA2` class to interface with the MR60BHA2 sensor for heart and breath monitoring. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**: 
  - Initializes the sensor for communication using the specified serial interface. It sets up the connection between the XIAO board and the MR60BHA2 sensor.

- **`mmWave.update(100)`**:
  - Updates the sensor data. The parameter `100` is a timeout value in milliseconds, specifying how long to wait for the sensor to provide new data. If new data is available within this timeframe, the function returns `true`.

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - Retrieves the phase information related to heart and breath activities. 
  - `total_phase` represents the overall phase shift, while `breath_phase` and `heart_phase` are specific to breathing and heartbeat activities, respectively.

- **`mmWave.getBreathRate(float &rate)`**:
  - Fetches the current breath rate detected by the sensor. The rate is returned in the reference variable `rate`.

- **`mmWave.getHeartRate(float &rate)`**:
  - Retrieves the current heart rate detected by the sensor. The rate is returned in the reference variable `rate`.

- **`mmWave.getDistance(float &distance)`**:
  - Gets the distance from the sensor to the detected object (e.g., human body). This function is useful for understanding the range of the detected signal. -->

## API del Módulo de Detección de Caídas

Este ejemplo utiliza la clase `SEEED_MR60FDA2` para interactuar con el sensor MR60FDA2 para detección de caídas. A continuación se explica la función de cada método clave:

- **`mmWave.begin(&mmWaveSerial)`**:  
  Inicializa el sensor para la comunicación, configurando la conexión serial entre la placa XIAO y el sensor MR60FDA2.

- **`mmWave.setInstallationHeight(float height)`**:  
  Establece la altura de instalación del radar, importante para una detección precisa de caídas. El parámetro `height` indica la altura en metros donde está instalado el sensor. El valor inicial típico es `2.2 m`, con un rango válido entre 1 y 5 metros.

- **`mmWave.setThreshold(float threshold)`**:  
  Ajusta el umbral de detección de caídas. El valor por defecto es `0.6 m`. Este valor determina la sensibilidad del radar para detectar caídas en función de la altura y la distancia al sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:  
  Modifica la sensibilidad del radar para la detección de caídas. El valor inicial es `3`, que corresponde al promedio de 3 cuadros de datos. El rango típico es de 3 a 10, donde valores más altos hacen al sensor más sensible a posibles caídas.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:  
  Obtiene los parámetros de configuración actuales del radar, incluyendo altura de instalación, umbral de caída y sensibilidad. Los valores se retornan mediante las variables por referencia.

- **`mmWave.getHuman()`**:  
  Verifica si se detecta presencia humana por el radar. Devuelve `true` si se detecta una persona, y `false` si no.

- **`mmWave.getFall()`**:  
  Determina si se ha detectado una caída. Retorna `true` si se detecta una caída, y `false` en caso contrario.

## Actualización del Firmware del Módulo

:::caution
Modificar el firmware del radar es una operación delicada, por lo que se recomienda leer esta sección cuidadosamente y seguir cada paso con atención. Si algún paso no se realiza correctamente, el radar puede quedar inutilizable (brickeado).

**Nota especial: si adquiriste el radar MR60BHA2, ¡no intentes flashear el firmware con los métodos aquí descritos! Esto seguramente dañará tu dispositivo irreversiblemente.**
:::

Primero, conecta los módulos XIAO ESP32C6 y MR60FDA2. Luego, utiliza el siguiente código para programar la placa XIAO:

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
La función del código anterior es transmitir de forma transparente el puerto serial del módulo al puerto serial USB del XIAO, para así actualizar el firmware del módulo a través del XIAO.  
Por favor, conecta el XIAO a tu PC durante el proceso de actualización.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

Verás los datos originales enviados por el módulo.

Luego, descarga y descomprime la herramienta OTA y el firmware desde los enlaces a continuación:

- **Herramienta de actualización de firmware MR60FDA2**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)  
- **Firmware MR60FDA2 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)

1. Verifica y conecta al puerto serial (configura la velocidad en 115200 baudios):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. Haz clic en **REQUEST UPDATE** para entrar en modo de actualización:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. Si aparece "C" o "43", significa que el módulo ha entrado en modo de actualización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. Selecciona el firmware a actualizar. Tras la selección, el proceso de actualización iniciará automáticamente.

Al terminar, el módulo regresará automáticamente a modo normal. Si no lo hace, apaga y reinicia el dispositivo y usa la herramienta OTA para verificar los datos del puerto serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file-fda2.png" style={{width:700, height:'auto'}}/></div>

5. Tras completar la actualización, puedes usar la herramienta OTA para leer la versión y los datos en bruto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done-fda2.png" style={{width:700, height:'auto'}}/></div>

6. Es necesario volver a flashear el firmware del XIAO ESP32C6 una vez terminada la actualización.

:::tip
Si durante estos pasos se produjo algún error y no puedes volver a flashear el firmware, y el radar no funciona correctamente, puede que el dispositivo haya quedado brickeado por firmware corrupto.  
La única forma de intentar recuperarlo es consultar los archivos y documentación disponibles **[aquí](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**.  
Ten en cuenta que no ofrecemos soporte técnico para dispositivos dañados por operaciones incorrectas.
:::

## Personalización

¿Quieres adaptar el kit para tus aplicaciones únicas?

Para más información sobre generación de datos en nube 3D y configuración de zonas de interferencia al personalizar módulos mmWave, Seeed ofrece servicios integrales de I+D y fabricación para un desarrollo rápido desde la idea hasta la producción.  
Contáctanos en `iot@seeed.cc` para más detalles.

## Recursos

- **Archivo STL**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)  
- **Repositorio GitHub**: Código completo y documentación en la [página GitHub de Seeed mmWave Library](https://github.com/Love4yzp/Seeed-mmWave-library)  
- **Documentación ESPHome**: [ESPHome docs](https://esphome.io/)  
- **Herramienta de actualización MR60FDA2**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)  
- **Firmware MR60FDA2 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)  
- **Software GUI MR60FDA2**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)  
- **Esquema eléctrico Sensor mmWave V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)  
- **Ficha técnica módulo MR60FDA2**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)  
- **Manual de interfaz Tiny Frame MR60FDA2**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)  
- **Método de recuperación de firmware vía Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)  

## Soporte Técnico y Foro de Productos

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más satisfactoria posible. Ofrecemos varios canales de comunicación para atender tus distintas necesidades y preferencias.

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
