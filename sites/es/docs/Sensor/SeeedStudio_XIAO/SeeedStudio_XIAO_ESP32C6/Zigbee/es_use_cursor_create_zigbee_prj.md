---
description: Aprende cómo usar el chat con IA de Cursor para desarrollar aplicaciones Zigbee con XIAO ESP32C6 y sensores
title: Usando Cursor para Crear Proyectos Zigbee con XIAO ESP32C6
image: https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.webp
slug: /use_cursor_create_zigbee_prj
last_update:
  date: 03/04/2025
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/use_cursor_create_zigbee_prj/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Usando Cursor para Crear Proyectos Zigbee con XIAO ESP32C6

Esta guía te llevará a través del uso del chat con IA de Cursor para desarrollar aplicaciones Zigbee con XIAO ESP32C6 y sensores. Al final de este tutorial, podrás usar independientemente el Chat de Cursor para desarrollar aplicaciones Zigbee con tu placa XIAO y sensores.

## ¿Qué es Cursor?

Cursor es un editor de código con IA construido sobre Visual Studio Code. Integra potentes capacidades de IA que pueden ayudarte a escribir, entender y depurar código de manera más eficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor.png" style={{width:600, height:'auto'}}/></div>

### ¿Por qué usar Cursor para el Desarrollo Embebido?

Cursor ofrece varias ventajas para el desarrollo de software embebido:

1. **Generación de Código**: Cursor puede generar código basado en tus requisitos, ahorrándote tiempo y esfuerzo.
2. **Asistencia Consciente del Contexto**: Cursor entiende la estructura de tu proyecto y puede proporcionar sugerencias relevantes.
3. **Ayuda para Depuración**: Cursor puede ayudar a identificar y corregir errores en tu código.
4. **Herramienta de Aprendizaje**: Para principiantes, Cursor puede explicar conceptos complejos y proporcionar conocimientos educativos.
5. **Eficiencia**: Cursor puede ayudarte a navegar por bases de código grandes y entender bibliotecas desconocidas rápidamente.

Para sistemas embebidos como el XIAO ESP32C6, Cursor puede ayudarte a entender APIs específicas del hardware, generar código plantilla para interacciones con sensores y solucionar problemas de integración hardware-software.

## Materiales Requeridos

Para este tutorial, necesitarás:

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C6</th>
   <th>Sensor de Temperatura y Humedad Grove DHT11</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- Cables Grove
- Cable USB-C
- Computadora con Arduino IDE instalado
- Aplicación Cursor (la instalaremos en la siguiente sección)

:::tip
Este tutorial utiliza el Sensor de Temperatura y Humedad DHT11 como ejemplo. Si tienes otros sensores, siéntete libre de experimentar con ellos también. Para la mejor experiencia, recomendamos usar tipos de sensores que estén actualmente soportados por el [ESP Zigbee SDK](https://github.com/espressif/esp-zigbee-sdk). Esto asegurará compatibilidad e implementación más fluida al construir tus proyectos Zigbee.
:::

## Instalando Cursor

Sigue estos pasos para instalar Cursor en tu sistema operativo:

<Tabs>
<TabItem value="Windows" label="Windows" default>

1. Visita la [página de descarga de Cursor](https://cursor.sh/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/windows_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en "Windows".
3. Ejecuta el instalador descargado.
4. Sigue las instrucciones en pantalla para completar la instalación.

</TabItem>
<TabItem value="MACOS" label="MACOS">

1. Visita la [página de descarga de Cursor](https://cursor.sh/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/mac_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en "MacOS".
3. Abre el archivo .dmg descargado.
4. Arrastra la aplicación Cursor a tu carpeta de Aplicaciones.
5. Abre Cursor desde tu carpeta de Aplicaciones.

</TabItem>
</Tabs>

## Suscripción de Cursor

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor_price.png" style={{width:1000, height:'auto'}}/></div>

Cursor ofrece diferentes niveles de suscripción para acomodar varias necesidades de usuario:

**Plan Hobby Gratuito**

Cursor puede descargarse y usarse gratis con el plan Hobby, que incluye:

- 2000 completaciones
- 50 solicitudes premium lentas
- Una prueba de dos semanas de las características Pro

Este nivel gratuito es suficiente para comenzar y explorar las capacidades de Cursor.

**Planes Pagados**

Para características más avanzadas y límites de uso más altos, Cursor ofrece opciones de suscripción pagadas:

**Plan Pro ($20/mes)**

- Completaciones ilimitadas
- 500 solicitudes premium rápidas por mes
- Solicitudes premium lentas ilimitadas

**Plan Business ($40/usuario/mes)**

- Todas las características Pro
- Aplicar modo privacidad en toda la organización
- Facturación centralizada de equipo
- Panel de administración con estadísticas de uso
- SAML/OIDC SSO

Puedes ver los detalles completos de precios en la [página de precios de Cursor](https://www.cursor.com/pricing).

Es importante notar que independientemente del plan que uses, todo el código generado en Cursor te pertenece y puede usarse como gustes, incluyendo para propósitos comerciales.

## Configurando Cursor

Después de instalar Cursor, sigue estos pasos para configurarlo:

1. Inicia Cursor
2. Inicia sesión con tu cuenta o crea una nueva
3. Verifica que el panel de Chat sea accesible (usualmente en el lado derecho de la interfaz)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/1.png" style={{width:1000, height:'auto'}}/></div>

## Abriendo los Ejemplos de Zigbee

Cuando usas Cursor para generar código para tu proyecto, proporcionar código de ejemplo puede mejorar significativamente la precisión del proyecto generado. Los ejemplos sirven como punto de referencia para Cursor, permitiéndole entender la estructura, sintaxis y requisitos específicos de tu proyecto. Al analizar estos ejemplos, Cursor puede generar código más preciso y relevante, adaptado a tus necesidades.

En el contexto de nuestro proyecto Zigbee, encontrar el ejemplo correcto ayuda a Cursor a:

- Entender las funcionalidades específicas requeridas
- Identificar las librerías y funciones apropiadas a usar
- Generar código que sea compatible con el hardware e interfaces que estás usando

Al proporcionar un ejemplo relevante, te aseguras de que el código generado tenga más probabilidades de funcionar correctamente y cumplir con los requisitos de tu proyecto, ahorrándote tiempo y esfuerzo en depuración y modificaciones.

Ahora, localicemos y abramos los ejemplos de Zigbee proporcionados por el paquete ESP32 Arduino:

1. Primero, asegúrate de haber instalado el **paquete de placa ESP32 más reciente** en Arduino IDE:

- Abre Arduino IDE
- Ve a **Tools > Board > Boards Manager**
- Busca **esp32**
- Encuentra **esp32 by Espressif Systems**
- Haz clic en **Install** o **Update** para obtener la versión más reciente
- Espera a que se complete la instalación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/3.png" style={{width:1000, height:'auto'}}/></div>

2. Navega al directorio de ejemplos de Zigbee:

Las siguientes rutas usan la versión 3.1.3 del paquete de placa ESP32 como ejemplo. Reemplaza `3.1.3` con tu número de versión instalada si es diferente:

- En Windows:

```
C:\Users\[YourUsername]\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.1.3\libraries\Zigbee\
```

- En macOS:

```
/Users/[YourUsername]/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3/libraries/Zigbee/
```

3. Abre Cursor y selecciona **Open Folder** desde el menú File.

4. Navega a la ruta del directorio Zigbee del paso 2 y haz clic en **Open**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/4.png" style={{width:1000, height:'auto'}}/></div>

## Seleccionando el Ejemplo Correcto

Antes de usar el Chat de Cursor para generar tu código, necesitas identificar el ejemplo más apropiado para usar como punto de partida:

### Determinando el Tipo de tu Dispositivo

Los dispositivos Zigbee generalmente se dividen en dos categorías principales, y entender esto es crucial para seleccionar el código de ejemplo correcto:

1. **Sensores**:
   - Los sensores son dispositivos que "sienten" el entorno y recopilan datos
   - Convierten información física del mundo real en señales electrónicas
   - Los sensores solo "leen" datos y luego los transmiten a la red

   - **Ejemplos**:
     - Sensores de temperatura: miden la temperatura del entorno
     - Sensores de humedad: miden los niveles de humedad en el aire
     - Sensores de luz: detectan la intensidad de luz ambiental
     - Sensores de movimiento: detectan si hay objetos moviéndose cerca
     - Sensores de gas: detectan concentraciones de gases específicos

2. **Actuadores**:
   - Los actuadores son dispositivos que "realizan acciones"
   - Reciben comandos y afectan el mundo físico
   - Los actuadores son responsables de "cambiar" el estado de algo

   - **Ejemplos**:
     - Interruptores de luz: encienden o apagan luces
     - Controladores de motor: controlan la rotación del motor
     - Relés: controlan dispositivos eléctricos de alta potencia
     - Controladores de válvula: controlan el flujo de agua o aire
     - Cerraduras de puerta: bloquean o desbloquean puertas

**Cómo determinar el tipo de tu dispositivo**:

- Si tu dispositivo principalmente recopila datos (lee información), es un sensor
- Si tu dispositivo principalmente realiza acciones (cambia estados), es un actuador
- Algunos dispositivos pueden tener ambas funcionalidades, en cuyo caso debes elegir basándote en la función principal

En nuestro ejemplo, el DHT11 es un sensor típico porque lee datos de temperatura y humedad pero no cambia el entorno.

### Identificando el Tipo de Interfaz

A continuación, determina el tipo de interfaz que usa tu sensor:

- **GPIO**: Pines digitales o analógicos simples
- **I2C**: Interfaz de dos cables para comunicación
- **SPI**: Interfaz Periférica Serial
- **UART**: Comunicación serial

El DHT11 usa una interfaz GPIO simple con una sola línea de datos.

### Verificando el Soporte de Dispositivos Zigbee

Antes de proceder, es importante verificar si el tipo de dispositivo que pretendes usar está soportado por el SDK ESP Zigbee. Puedes verificar los tipos de dispositivos soportados en:

- [Tipos de Dispositivos ESP Zigbee](https://github.com/espressif/esp-zigbee-sdk/blob/main/components/esp-zigbee-lib/include/esp_zigbee_type.h)

Este archivo de cabecera contiene todos los tipos de dispositivos actualmente soportados por la implementación Zigbee de ESP. Revisa este archivo para:

1. Confirmar que tu tipo de dispositivo está soportado
2. Anotar el ID específico del dispositivo y los IDs de cluster que necesitarás
3. Entender qué capacidades están disponibles para tu tipo de dispositivo

Si tu tipo de dispositivo no está listado, puede que necesites:

- Elegir un tipo de dispositivo soportado similar que coincida con tus necesidades
- Considerar implementar un tipo de dispositivo personalizado (avanzado)
- Contactar el soporte de ESP para orientación

### Encontrando el Ejemplo Más Cercano

Navega a través de los ejemplos en la biblioteca Zigbee y encuentra uno que coincida más estrechamente con tus necesidades. Para nuestro sensor DHT11, busca ejemplos como:

- `ZigbeeTemperatureSensor`
- `ZigbeeHumiditySensor`
- Cualquier ejemplo que demuestre la lectura desde un sensor GPIO

Afortunadamente, ESP proporciona un ejemplo "Zigbee_Temp_Hum_Sensor_Sleepy" en sus ejemplos Zigbee, que coincide perfectamente con nuestras necesidades para crear un proyecto de sensor de temperatura y humedad. Este ejemplo demuestra:

- Cómo implementar un dispositivo sensor de temperatura y humedad
- Cómo configurar el dispositivo como un dispositivo final durmiente para ahorrar energía
- Cómo reportar lecturas del sensor periódicamente
- Cómo manejar la red Zigbee y la transmisión de datos

Puedes encontrar este ejemplo en:
`zigbee/example/Zigbee_Temp_Hum_Sensor_Sleepy`

Este ejemplo servirá como un excelente punto de partida para nuestro proyecto de sensor Zigbee basado en DHT11.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/5.png" style={{width:1000, height:'auto'}}/></div>

## Determinando las Conexiones de Pines

Para el XIAO ESP32C6 y el sensor DHT11, necesitamos decidir qué pines usar:

1. El sensor DHT11 requiere un solo pin de datos.

2. Lo conectaremos al pin D0 (GPIO1) en el XIAO ESP32C6.

:::tip
Para los ejemplos de XIAO, solo los dispositivos GPIO (Digital/Analógico) y protocolo SPI requieren configuración manual de pines. Para dispositivos I2C y UART, las definiciones de pines ya están preconfiguradas en el paquete de placa de XIAO, por lo que puedes omitir este paso.
:::

## Recopilando Documentación Técnica

Tener la documentación técnica de tu sensor es crucial. Si estás usando productos de Seeed, puedes encontrar documentación detallada y recursos para tu sensor o actuador en **[la Wiki oficial de Seeed Studio](https://wiki.seeedstudio.com/es/)**. La sección de recursos de la wiki también contiene hojas de datos para productos Grove que puedes proporcionar a Cursor. Por ejemplo, para el sensor DHT11 usado en este proyecto:

- [Página Wiki del Grove DHT11](https://wiki.seeedstudio.com/es/Grove-TemperatureAndHumidity_Sensor/)

Si estás usando sensores de otros fabricantes, por favor contáctalos directamente para obtener la documentación técnica necesaria.

## Usando el Chat de Cursor para Generar Código

Ahora que tenemos toda la información necesaria, podemos usar el Chat de Cursor para generar nuestro código de aplicación Zigbee.

Aquí es donde necesitarás crear un prompt para el Chat de Cursor.

### Plantilla de Proyecto de Sensor

Si tú, como yo, eliges usar un sensor como dispositivo, puedes referirte al siguiente prompt.

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Sensor details:
- Type: [sensor model]
- Connections: [pin connections]

Sensing specifications:
- Parameters to measure: [measurement values]
- Transmission frequency: [sending interval]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

Vamos a desglosar cómo completar la plantilla de prompt y proporcionar un ejemplo usando el sensor DHT11:

1. **Nombre del proyecto**: Elige un nombre descriptivo para tu proyecto
2. **Detalles del sensor**:
   - Tipo: Especifica el modelo exacto del sensor
   - Conexiones: Lista todas las conexiones de pines entre el sensor y XIAO ESP32C6
3. **Especificaciones de detección**:
   - Parámetros: Lista lo que quieres medir (temperatura, humedad, etc.)
   - Frecuencia de transmisión: Con qué frecuencia quieres enviar datos (ej., cada 5 segundos)
4. **Materiales de referencia**: Incluye enlaces a hojas de datos o documentación

Aquí tienes un prompt completado para un proyecto de sensor de temperatura y humedad DHT11:

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: Zigbee_DHT11_XIAO

Sensor details:
- Type: DHT11 Temperature and Humidity Sensor
- Connections: DHT11 data pin connected to D2 of XIAO ESP32C6

Sensing specifications:
- Parameters to measure: Temperature (°C) and Relative Humidity (%)
- Transmission frequency: Every 1 hour

Reference materials:
- Documentation: 
  - DHT11 Sensor: https://wiki.seeedstudio.com/es/Grove-TemperatureAndHumidity_Sensor/
  - XIAO ESP32C6: https://wiki.seeedstudio.com/es/xiao_pin_multiplexing_esp32c6/

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

### Plantilla de Proyecto de Actuador

Si quieres trabajar con un actuador en su lugar, puedes usar la siguiente plantilla de prompt. Veamos cómo estructurar un prompt para un proyecto de actuador:

```
Please refer to the code and then create an Arduino actuator project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Actuator details:
- Type: [actuator model]
- Connections: [pin connections]

Control specifications:
- Default behavior: [startup state]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

:::tip
Al construir tu primer proyecto con Cursor, se recomienda comenzar con funcionalidades simples y básicas en lugar de lógica y requisitos complejos. Este enfoque reduce significativamente la probabilidad de que Cursor genere código incorrecto. Primero, deja que Cursor cree un programa básico funcional que puedas verificar que funciona correctamente. Una vez que tengas una base sólida, puedes agregar gradualmente más características y complejidad para mejorar tu proyecto. Este enfoque iterativo conduce a un código más confiable y mantenible.
:::

Después de preparar tu prompt con todos los detalles específicos sobre tu proyecto, sigue estos pasos:

1. Abre el panel de Chat de Cursor (generalmente haciendo clic en el ícono de chat en la barra lateral).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/6.png" style={{width:1000, height:'auto'}}/></div>

2. Localiza el código de ejemplo que más se acerque a los requisitos de tu proyecto. Para nuestro proyecto de sensor de temperatura y humedad DHT11, usaremos el ejemplo "Zigbee_Temp_Hum_Sensor_Sleepy".

3. Arrastra y suelta el archivo(s) de código de ejemplo desde el directorio de ejemplos Zigbee hacia la ventana de Chat de Cursor. Esto ayuda a Cursor a entender la estructura y requisitos de las implementaciones de sensores Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/7.png" style={{width:1000, height:'auto'}}/></div>

4. Copia y pega nuestro prompt pre-escrito en el campo de entrada del chat y presiona Enter. Espera a que Cursor genere tu proyecto basado en el prompt y el código de ejemplo.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/9.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

5. Haz clic en el botón **Accept** para guardar el código generado. Esto creará los archivos del proyecto en tu espacio de trabajo.

## Revisar el Código Generado

Después de que Cursor genere el código, es importante revisarlo cuidadosamente antes de subirlo a tu dispositivo. Aquí están los aspectos clave a verificar:

1. Configuración de Pines

- Verifica que todas las asignaciones de pines coincidan con tus conexiones físicas
- Comprueba que los pines especificados estén realmente disponibles en el XIAO ESP32C6
- Asegúrate de que no existan conflictos de pines (ej., mismo pin usado para múltiples propósitos)
- Confirma que los pines soporten las funciones requeridas (analógico, digital, I2C, etc.)

2. Verificación de Funcionalidad

Compara el código generado contra tus requisitos:

- ¿Implementa todas las características solicitadas?

Por ejemplo, dentro del programa que me proporcionó, los pines están definidos en términos de numeración GPIO, lo que puede requerir leer la wiki y luego verificar que la numeración A/D del XIAO coincida con la numeración GPIO correcta, lo cual es más engorroso. Para esto, podemos pedirle a Cursor que use los pines de la misma manera que A/D.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```cpp
/**
 * @brief DHT11 Temperature and Humidity Sensor with Zigbee for XIAO ESP32C6
 * 
 * This example demonstrates how to create a Zigbee end device that measures temperature
 * and humidity using a DHT11 sensor and reports the data every hour.
 * 
 * Hardware Requirements:
 * - XIAO ESP32C6 board
 * - DHT11 Temperature and Humidity Sensor
 * 
 * Connections:
 * - DHT11 Data Pin -> D2 (GPIO8) of XIAO ESP32C6
 * - DHT11 VCC -> 3.3V
 * - DHT11 GND -> GND
 * 
 * The device operates as a Zigbee end device and goes into deep sleep between measurements
 * to conserve power.
 */

#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
#include "DHT.h"

/* Pin Definitions */
#define DHT_PIN 8  // D2 on XIAO ESP32C6
#define BOOT_BUTTON 9  // Boot button on XIAO ESP32C6

/* DHT11 Sensor Configuration */
#define DHT_TYPE DHT11
DHT dht(DHT_PIN, DHT_TYPE);

/* Zigbee Configuration */
#define TEMP_SENSOR_ENDPOINT_NUMBER 10

/* Sleep Configuration */
#define uS_TO_S_FACTOR 1000000ULL  // Conversion factor for micro seconds to seconds
#define TIME_TO_SLEEP  3600        // Sleep for 1 hour (3600 seconds)

/* Global Variables */
ZigbeeTempSensor zbTempSensor = ZigbeeTempSensor(TEMP_SENSOR_ENDPOINT_NUMBER);

/************************ Sensor Functions *****************************/
void measureAndSleep() {
  // Read temperature and humidity from DHT11
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Check if readings are valid
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT11 sensor!");
    delay(1000);
    return;
  }

  // Update temperature and humidity values in Temperature sensor EP
  zbTempSensor.setTemperature(temperature);
  zbTempSensor.setHumidity(humidity);

  // Report temperature and humidity values
  zbTempSensor.report();
  Serial.printf("Reported temperature: %.2f°C, Humidity: %.2f%%\r\n", temperature, humidity);

  // Add small delay to allow the data to be sent before going to sleep
  delay(100);

  // Put device to deep sleep
  // Serial.println("Going to sleep for 1 hour");
  // esp_deep_sleep_start();
}

/********************* Arduino Setup **************************/
void setup() {
  Serial.begin(115200);
  
  // Initialize DHT11 sensor
  dht.begin();

  // Init button switch
  pinMode(BOOT_BUTTON, INPUT_PULLUP);

  // Configure the wake up source
  // esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);

  // Set Zigbee device information
  zbTempSensor.setManufacturerAndModel("Seeed", "XIAO_DHT11_Sensor");

  // Set temperature measurement range (-20°C to 60°C for DHT11)
  zbTempSensor.setMinMaxValue(-20, 60);

  // Set tolerance for temperature measurement (±2°C accuracy for DHT11)
  zbTempSensor.setTolerance(2);

  // Configure humidity sensor (20-90% RH range for DHT11, ±5% RH accuracy)
  zbTempSensor.addHumiditySensor(20, 90, 5);

  // Set power source to battery (assuming battery-powered operation)
  zbTempSensor.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);

  // Add endpoint to Zigbee Core
  Zigbee.addEndpoint(&zbTempSensor);

  // Create Zigbee configuration for End Device
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 60000; // 60 second keep-alive

  // Start Zigbee
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee failed to start!");
    Serial.println("Rebooting...");
    ESP.restart();
  }

  Serial.println("Connecting to Zigbee network");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nSuccessfully connected to Zigbee network");

  // Allow time for connection establishment
  delay(1000);
}

/********************* Arduino Loop **************************/
void loop() {
  // Check boot button for factory reset
  if (digitalRead(BOOT_BUTTON) == LOW) {
    delay(100); // Debounce
    int startTime = millis();
    while (digitalRead(BOOT_BUTTON) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.println("Factory reset initiated. Rebooting in 1s...");
        delay(1000);
        Zigbee.factoryReset();
      }
    }
  }

  // Measure sensor data and go to sleep
  measureAndSleep();
} 
```

</details>

Todo lo que tienes que hacer es seleccionar la parte que quieres cambiar, escribir la palabra de comando y presionar enter.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/11.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Verificar y Subir el Programa

Ahora que Cursor ha generado nuestro código del proyecto Zigbee, necesitamos verificar si funciona correctamente. La mejor manera de hacer esto es usando Arduino IDE, que proporciona excelentes herramientas para compilar y subir código a nuestra placa XIAO ESP32C6. Cambiemos a Arduino IDE y pasemos por el proceso de verificación:

1. Abre el archivo principal en Arduino IDE.
2. Selecciona la placa **XIAO ESP32C6** del menú de Placas.
3. Selecciona el puerto apropiado.
4. Haz clic en **Verificar** para compilar el código.
5. Si hay algún error, regresa al Chat de Cursor y pide ayuda para solucionarlos.
6. Una vez que el código compile exitosamente, súbelo a tu XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/10.png" style={{width:1000, height:'auto'}}/></div>

Si todo va bien, ahora deberías tener un dispositivo Zigbee que puede ser descubierto por Home Assistant (siempre que tengas una puerta de enlace Zigbee en tu configuración de Home Assistant).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/12.png" style={{width:1000, height:'auto'}}/></div>

## Solución de Problemas con Cursor

Si encuentras problemas con el código generado, puedes pedirle ayuda a Cursor:

1. Describe el error específico o problema que estás enfrentando
2. Incluye cualquier mensaje de error del Arduino IDE
3. Pide a Cursor que sugiera correcciones o mejoras
4. Implementa los cambios sugeridos y prueba de nuevo

La IA de Cursor es particularmente buena para depurar y a menudo puede identificar problemas que podrían ser difíciles de detectar manualmente.

Por ejemplo, si estás usando la funcionalidad Zigbee por primera vez o encuentras un error de compilación como

```
#error Zigbee end device mode is not selected in Tools->Zigbee mode
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/15.png" style={{width:1000, height:'auto'}}/></div>

debido a un descuido, siempre puedes pedir orientación a Cursor. Simplemente pregunta:

***Obtuve un error de compilación en Arduino IDE que dice 'Error de compilación: #error Zigbee el modo de dispositivo final no está seleccionado en Herramientas->modo Zigbee'. ¿Qué debo hacer?***

Cursor probablemente sugerirá verificar el menú Herramientas en Arduino IDE y seleccionar el modo Zigbee apropiado:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/16.png" style={{width:400, height:'auto'}}/></div>

Puedes preguntarle a Cursor sobre cualquier error que encuentres, y te ayudará a guiarte a través del proceso de resolución. Algunos otros problemas comunes sobre los que podrías querer preguntar incluyen:

- Problemas de instalación de librerías
- Errores de configuración de pines
- Problemas de conexión de sensores
- Configuración de protocolos de comunicación
- Preocupaciones sobre gestión de energía

Solo describe el problema claramente en tu consulta, y Cursor proporcionará sugerencias y soluciones relevantes.

## Mejorando tu Programa con Cursor

Después de hacer funcionar la funcionalidad básica de Zigbee, puedes usar Cursor para añadir más características y mejoras a tu programa. Veamos un ejemplo de cómo mejorar el código añadiendo una verificación de inicialización del puerto serie.

Esto es particularmente útil durante el desarrollo y depuración, ya que asegura que no te pierdas ninguna salida serie esperando a que el puerto serie esté listo antes de proceder con la configuración.

1. Abre tu proyecto en Cursor y localiza la función `setup()` en tu código.

2. En el panel de Chat, describe lo que quieres añadir. Por ejemplo:
   "Añadir código para esperar a que el puerto serie esté listo antes de proceder con la configuración"

3. Cursor sugerirá modificaciones como esta:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.png" style={{width:1000, height:'auto'}}/></div>

Más allá de estas mejoras menores, podemos maximizar el valor de Zigbee implementando características de ahorro de energía sobre la funcionalidad básica. Una de las ventajas clave de Zigbee es sus capacidades de bajo consumo de energía, que pueden optimizarse aún más a través de la implementación adecuada de modos de suspensión.

Aquí te mostramos cómo podrías pedirle a Cursor que añada funcionalidad de suspensión profunda a tu proyecto de sensor:

1. Abre el panel de Chat y solicita la implementación de suspensión profunda:

***Modifica el programa para que los valores de temperatura y humedad se reporten una vez cada tres horas. Suspensión profunda el resto del tiempo para ahorrar energía.***

2. Cursor sugerirá modificaciones de código que incluyen:

- Actualización de la duración de suspensión
- Actualización del mensaje de suspensión para mejor retroalimentación
- Actualización de la documentación para reflejar el nuevo intervalo de reporte.
- Volver a suspensión profunda por 3 horas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/14.png" style={{width:1000, height:'auto'}}/></div>

Esta optimización de energía es particularmente valiosa para nodos sensores alimentados por batería, potencialmente extendiendo la vida de la batería de días a meses o incluso años, dependiendo de la frecuencia de reporte y el tipo de sensor.

Cursor puede ayudarte a implementar todas estas características - solo sé específico en tus requerimientos cuando pidas asistencia.

## Conclusión

Ahora has aprendido cómo usar el chat con IA de Cursor para desarrollar aplicaciones Zigbee para el XIAO ESP32C6 con sensores. Este enfoque puede acelerar significativamente tu proceso de desarrollo y ayudarte a superar desafíos técnicos.

A medida que te familiarices más con Cursor, descubrirás formas adicionales de aprovechar sus capacidades para tus proyectos embebidos. Recuerda que la calidad de tus prompts afecta enormemente la calidad del código generado, así que sé específico y detallado al describir tus requisitos.

Este tutorial representa un paso importante hacia adelante en hacer el desarrollo embebido más accesible. Al combinar herramientas de IA como Cursor con hardware potente como el XIAO ESP32C6, estamos reduciendo las barreras de entrada para el desarrollo de IoT y redes de sensores. Esto es particularmente valioso para:

- Principiantes que están comenzando su viaje en sistemas embebidos
- Desarrolladores experimentados que buscan acelerar su proceso de prototipado
- Educadores que enseñan conceptos de IoT y comunicación inalámbrica
- Makers y aficionados que quieren crear soluciones de hogar inteligente

La integración de herramientas de desarrollo asistidas por IA con la tecnología Zigbee abre nuevas posibilidades para crear redes de sensores inalámbricas eficientes en energía y confiables. Esta combinación de tecnologías permite ciclos de desarrollo más rápidos mientras mantiene alta calidad de código, ayudando en última instancia a impulsar la innovación en el espacio IoT.

:::tip
Este artículo fue escrito por Citric con asistencia de Cursor.
:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
