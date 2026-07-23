---
description: Recetario de PlatformIO para la familia de XIAO ePaper Driver Board (EE0x) - descripción de hardware, arranque de proyecto, configuración de librerías y programación de extremo a extremo en el ESP32-S3. EE04 se usa como ejemplo práctico; EE02 / EE03 / EE05 comparten el mismo flujo de trabajo.
title: Recetario de PlatformIO
keywords:
  - Pantalla ePaper
  - PlatformIO
  - EE02
  - EE03
  - EE04
  - EE05
  - XIAO ESP32-S3
image: https://files.seeedstudio.com/wiki/Epaper/EE04/pio_show_1.webp
sidebar_position: 2
slug: /ee04_with_platformio
aliases:
  - /ee0x_with_platformio
last_update:
  date: 04/28/2026
  author: Zeller
createdAt: '2025-10-09'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/es/ee04_with_platformio/
---

# Recetario de PlatformIO: XIAO ePaper Driver Boards (EE0x)

:::tip Este recetario cubre toda la familia EE0x
Aplicable a **EE02 / EE03 / EE04 / EE05**. Como las cuatro placas comparten la misma base XIAO ESP32-S3 y la misma canalización de controlador `Seeed_GFX`, la configuración del proyecto, la lista de librerías y los patrones de código son idénticos; lo único que cambia entre ellas es el valor de `BOARD_SCREEN_COMBO` que eliges en la [Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) para `driver.h`.

**Ejemplo práctico: EE04 + pantalla ePaper monocroma de 7,5" y 800×480.** Sustituye tu propio par placa + pantalla en `driver.h` y el resto del flujo de trabajo (GPIO de botones, ADC de batería, panel de control, cambio de página mediante botones) se mantiene igual.
:::

:::note ¿Buscas Arduino en su lugar?
Este recetario es **específico de PlatformIO**. Si prefieres usar el **Arduino IDE** (la ruta más común para nuestra línea de ePaper), consulta **[Work with Arduino](/es/epaper_work_with_arduino)** para la guía a nivel de plataforma, el [reTerminal E Series — ePaper Display cookbook](/es/reterminal_e10xx_with_arduino) para ejemplos de renderizado de pantalla y el [reTerminal E Series — Onboard Peripherals cookbook](/es/reterminal_e10xx_with_arduino_peripherals) para ejemplos a nivel de hardware (LED, zumbador, botones, SHT4x, batería, microSD) que también se aplican a las placas EE0x.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:500, height:'auto'}}/></div>

## Introducción a PlatformIO

PlatformIO es un ecosistema de desarrollo potente y altamente extensible diseñado para sistemas embebidos. Integra de forma fluida compatibilidad con una amplia gama de placas de desarrollo y microcontroladores, ofreciendo una flexibilidad sin igual. Lo que distingue a PlatformIO es su notable escalabilidad: incluso si tu placa específica no está soportada de forma nativa, su arquitectura permite definir placas personalizadas de manera sencilla.

De forma crucial, PlatformIO tiende un puente para los desarrolladores familiarizados con Arduino, permitiendo compilar y desplegar código de estilo Arduino simplemente incluyendo las librerías correspondientes.

### Preparación de hardware

Necesitas preparar una XIAO ePaper Display Board EE04 junto con pantallas del tamaño soportado. La pantalla de tinta electrónica de 24 pines, 800×480 y 7,5 pulgadas utilizada en este tutorial es un ejemplo.
<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>eInk monocroma de 7,5"</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/7.5-inch-elink_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Descargar Vscode

Descarga [Vscode](https://code.visualstudio.com/download) según el sistema que estés utilizando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar PlatformIO

Abre VSCode, haz clic en Extensions, luego busca PlatformIO y selecciona instalar. Una vez completada la instalación, reinicia VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Nuevo proyecto

- Abre la interfaz PIO Home y selecciona `New Project`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: Ponle un nombre a tu proyecto
- Board: Selecciona Seeed Studio XIAO ESP32S3
- Framework: Selecciona Ardunio
- Location: La ruta de los archivos del proyecto puede establecerse como una ruta personalizada o se puede seleccionar la ruta predeterminada.
- Haz clic en "Finish" y espera a que se complete la creación. Luego, abre el archivo del proyecto en el espacio de trabajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_2.png" style={{width:800, height:'auto'}}/></div>

### Añadir la librería Seeed GFX

:::tip
Esta librería tiene la misma función que la librería TFT y no es compatible con ella. Si has instalado la librería TFT u otras librerías de pantalla similares, desinstálalas primero.
:::

Usaremos la librería Seeed_GFX, que proporciona compatibilidad completa para varios dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la librería Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Mueve los archivos extraídos al directorio `lib` de los archivos del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_library_1.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Añadir el archivo `driver.h`

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)

- En la página de la herramienta, selecciona la especificación de pantalla que estás utilizando. Aquí, la opción seleccionada es una pantalla e-paper monocroma de 7,5 pulgadas.
- Selecciona la XIAO ePaper Display Board EE04 como placa controladora y, a continuación, se generará el código de controlador correspondiente.

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

:::tip
Si haces una elección incorrecta, la pantalla no mostrará nada.
Así que asegúrate del tipo de tus dispositivos o componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_1.png" style={{width:800, height:'auto'}}/></div>

- Crea una nueva carpeta `driver` bajo el directorio `lib` del archivo de proyecto de PlatfromIO y luego añade el archivo `driver.h`. Copia el código del archivo de cabecera generado y pulsa Ctrl + S para guardar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_2.png" style={{width:800, height:'auto'}}/></div>

### Subir

Copia el código en `main.cpp`, haz clic en `Build` y, una vez completado, súbelo.

```cpp
#include "TFT_eSPI.h"

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h
EPaper epaper;
#endif

void setup()
{
#ifdef EPAPER_ENABLE
    epaper.begin();
    epaper.fillScreen(TFT_WHITE);

    epaper.fillCircle(25, 25, 15, TFT_BLACK);
    epaper.fillRect(epaper.width() - 40,  10, 30, 30, TFT_BLACK);

    for (int i = 0; i < epaper.height() / 80; i++)
    {
        epaper.setTextSize(i + 1);
        epaper.drawLine(10, 70 + 60 * i, epaper.width() - 10, 70 + 60 * i, TFT_BLACK);
        epaper.drawString("Hello EE04", 10, 80 + 60 * i);
    }

    epaper.update(); // update the display

#endif
}

void loop()
{
    // put your main code here, to run repeatedly:
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_upload_2.png" style={{width:800, height:'auto'}}/></div>

- Demostración del efecto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_show_1.jpg" style={{width:800, height:'auto'}}/></div>

### Botón de usuario

La EE04 incorpora tres botones programables por el usuario que pueden utilizarse para diversos fines de control. Esta sección muestra cómo leer los estados de los botones y responder a las pulsaciones utilizando Arduino.

En la EE04, los tres botones están conectados al ESP32-S3:

- KEY1 (GPIO2_D1/A1)
- KEY2 (GPIO3_D2/A2)
- KEY3 (GPIO5_D4/A4)

Todos los botones son activos en bajo, lo que significa que leen LOW cuando se pulsan y HIGH cuando se sueltan.

Ejemplo básico de lectura de botones

Este ejemplo muestra cómo detectar pulsaciones de botones e imprimir mensajes en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
#include <Arduino.h>
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }

  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

Explicación del código:

- **Análisis de la función principal**

1. **`pinMode(pin, mode)`**  
   - Función: Configura el modo del pin.  
   - Aquí se utiliza el modo `INPUT_PULLUP` para habilitar la resistencia de pull-up interna. Esto hace que el pin emita un nivel alto (HIGH) por defecto cuando el botón no está presionado, y emita un nivel bajo (LOW) cuando el botón está presionado (ya que se conecta a tierra).

2. **`digitalRead(pin)`**  
   - Función: Lee el estado de nivel (HIGH o LOW) del pin especificado.  
   - Se utiliza en el bucle para obtener en tiempo real el estado actual del botón, lo que ayuda a determinar si el botón ha sido activado.

3. **`Serial.begin(baud)`** y **`Serial.println()`**  
   - La primera inicializa la comunicación serie (con una velocidad en baudios de 115200), mientras que la segunda envía información de texto al puerto serie. Esto se utiliza para mostrar el estado del botón en el monitor.

4. **`delay(ms)`**  
   - Función: Pausa el programa durante un número especificado de milisegundos.  
   - Aquí se utiliza en dos escenarios: primero, para esperar la conexión del puerto serie en `setup()`; segundo, para retrasar 50 ms después de que cambie el estado del botón. Esto logra el antirrebote por hardware al "esperar a que desaparezca el ruido", evitando disparos falsos.

- **Análisis de la lógica principal**

1. **Detección por comparación de estados**  
   - Registrar el "estado anterior" de cada botón (como `lastKey0State`), y leer el "estado actual" en el bucle.  
   - Si el "estado actual ≠ estado anterior", indica que el botón ha sido activado (presionado o liberado).

2. **Determinación de la acción del botón**  
   - Cuando el estado cambia de HIGH a LOW: se determina como "presionado" (muestra "pressed").  
   - Cuando el estado cambia de LOW a HIGH: se determina como "liberado" (muestra "released").  
   - Después de cada cambio de estado, se actualiza el "estado anterior" al estado actual, que servirá como referencia para la siguiente comparación.

3. **Ejecución del bucle**  
   - La función `loop()` se ejecuta en un bucle infinito, repitiendo el proceso de "leer el estado → comparar el estado → mostrar el resultado" para lograr una detección en tiempo real.

- Demostración del efecto:

El Monitor Serie puede mostrar el estado del puerto serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_button_1.png" style={{width:800, height:'auto'}}/></div>

### Voltaje de la batería

- La XIAO ePaper Display Board EE04 se alimenta con una batería de litio de 3.7 V - 4.2 V. Además, hay una interfaz ADC para que puedas medir el voltaje y monitorizar en tiempo real el voltaje de la batería.
- El pin de medición ADC es `A0 (GPIO1)`, y el pin de habilitación del ADC es `D5 (GPIO_6)`.

Conexión：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_0.png" style={{width:600, height:'auto'}}/></div><br/>

El siguiente es el programa para monitorizar el voltaje de la batería. Es solo de referencia.

```cpp
#include <Arduino.h>

#define BATTERY_ADC A0  // Battery voltage ADC pin
#define ADC_EN 6        // ADC enable pin
#define VOLTAGE_DIVIDER_RATIO 2.0  // Voltage divider ratio (adjust based on your resistor values) ((R1+R2)/R2) 

// Function to read battery voltage
static float readBatteryVoltage() {
  int sum = 0;
  // Read multiple samples for better accuracy
  for (int i = 0; i < 10; i++) {
    sum += analogRead(BATTERY_ADC);
    delay(2);
  }
  int adcValue = sum / 10;

  // Calculate actual battery voltage
  // Formula: voltage = (ADC_value / 4095) * 3.3V * divider_ratio
  float voltage = (adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO;

  return voltage;
}

void setup() {
  Serial.begin(115200);
  delay(1000);

  analogReadResolution(12);  // Set ADC resolution to 12 bits
  pinMode(BATTERY_ADC, INPUT);

  pinMode(ADC_EN, OUTPUT);
  digitalWrite(ADC_EN, HIGH);  // Enable ADC
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery Voltage: ");
  Serial.print(batteryVoltage, 2);
  Serial.println(" V");

  delay(500);  // Read every 0.5 seconds
}
```

Explicación del código:

- Funciones principales:

  - **Adquisición del voltaje de la batería**: Leer el voltaje de la batería dividido por resistencias a través del pin ADC (el voltaje de la batería puede superar el voltaje de referencia del ADC de Arduino, por lo que primero se requiere la división).
  - **Optimización de la precisión**: Reducir la interferencia de ruido del circuito promediando múltiples muestras.
  - **Conversión de voltaje**: Convertir la señal digital del ADC al voltaje real de la batería (teniendo en cuenta la relación de división de voltaje y el voltaje de referencia).
  - **Salida serie**: Imprimir periódicamente el voltaje medido a través del puerto serie para que dispositivos externos (por ejemplo, un ordenador) puedan verlo.

- Funciones principales y sus roles

  - `setup()` (Función de inicialización)

    - **Rol**: Se ejecuta una vez al iniciar el programa para configurar el hardware y los parámetros.
    - **Operaciones clave**:
      - `Serial.begin(115200)`: Inicializa la comunicación serie (velocidad en baudios 115200) para la salida de datos de voltaje.
      - `analogReadResolution(12)`: Establece la resolución del ADC en 12 bits (rango de lectura: 0~4095) para mayor precisión.
      - `pinMode(BATTERY_ADC, INPUT)`: Configura el pin de detección de la batería (A0) en modo de entrada para señales analógicas.
      - `pinMode(ADC_EN, OUTPUT)` y `digitalWrite(ADC_EN, HIGH)`: Habilitan el módulo ADC (para bajo consumo: encender solo al medir).

  - `loop()` (Función de bucle principal)

    - **Rol**: Se ejecuta repetidamente tras la inicialización para la detección y salida periódica del voltaje.
    - **Operaciones clave**:
      - Llamar a `readBatteryVoltage()` para obtener el voltaje actual de la batería.
      - Usar `Serial.print()`/`Serial.println()` para imprimir el voltaje formateado (2 decimales, por ejemplo, "Battery Voltage: 3.82 V").
      - `delay(500)`: Establece un intervalo de 0.5 segundos entre mediciones.

  - `readBatteryVoltage()` (Función principal de medición)

    - **Rol**: Leer las señales del ADC, optimizar los resultados y convertirlos al voltaje real.
    - **Operaciones clave**:
      - **Muestreo promedio**: Leer el ADC 10 veces, sumar y luego promediar (reduce el ruido).
      - `analogRead(BATTERY_ADC)`: Lee el voltaje analógico del pin A0 (devuelve 0~4095).
      - `delay(2)`: Intervalo de 2 ms entre muestras para mayor estabilidad.
      - **Cálculo del voltaje**: Utilizar la fórmula `(adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO` para obtener el voltaje real de la batería.
      - Devuelve el voltaje calculado (tipo float) para que lo use `loop()`.

- Demostración del efecto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_1.png" style={{width:800, height:'auto'}}/></div>

## Diseño de la interfaz de usuario

EE04 te permite realizar diversos diseños creativos, como paneles de control y visualización de imágenes. Al combinarlo con botones, permite cambiar entre múltiples páginas. A continuación se muestra un ejemplo de un panel de control.

:::tip
En esta rutina, la operación de dibujar el panel de control se realiza basándose en la biblioteca LVGL.

Documentación oficial de LVGL: [LVGL docs](https://docs.lvgl.io/master/examples.html#get-started)
:::

### Software

- Añade la biblioteca LVGL. En la herramienta Library de la interfaz PIO Home, busca LVGL y luego selecciona añadir la biblioteca al proyecto actual. Se recomienda que elijas una versión de LVGL 9.0 o superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_1.png" style={{width:800, height:'auto'}}/></div>

- En el directorio **lib**
  - Crea una carpeta **dashboard** y luego crea los archivos `dashboard_ui.cpp` y `dashboard_ui.h`. Estos archivos se utilizan principalmente para almacenar el código de dibujo de LGVL.
  - Crea la carpeta **e1001_display** y añade los archivos del controlador de pantalla `e1001_display.c` y `e1001_display.h`
  - Crea la carpeta **lvgl_conf** y añade el archivo de configuración `lv_conf.h` de LVGL.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_2.png" style={{width:800, height:'auto'}}/></div><br/>

Código de referencia completo: [EE04_Dashboard_ui.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_dashboard_ui.zip)

<details>

<summary>Código de main.cpp</summary>

```cpp
/*
 * Seeed reTerminal E1001 Multi-UI Demo
 * - All hardware I/O and e-paper driver work happens here.
 * - All runtime parameters and debug logs live here.
 * - dashboard_ui.cpp is a pure LVGL UI layer (no driver calls, no runtime params).
 *
 * UI switching:
 *   KEY0 (GPIO2) → Vehicle Dashboard
 *   KEY1 (GPIO3) → Smart Home
 *   KEY2 (GPIO5) → Super Mario (default)
 */

#include <TFT_eSPI.h>
#include <lvgl.h>

#include "dashboard_ui.h"  // Pure UI layer
#include "e1001_display.h" // E1001 e-paper driver (init/refresh in this file only)

/* ============ Global driver object ============ */
static e1001_driver_t e1001_driver;

/* ============ Current UI ============ */
static UIType current_ui = UI_SUPER_MARIO;

/* ============ Smart Home runtime parameters (tuned here) ============ */
static String smh_location = "New York";
static String smh_weather = "Sunny";
static float smh_temperature = 22.5f;
static int smh_humidity = 45;
static float smh_batt_voltage = 12.4f;
static int smh_batt_capacity = 85;
static int smh_wifi_signal = 4; // 0..4

/* ============ Vehicle runtime parameters (tuned here) ============ */
static int veh_speed = 85;        // km/h
static int veh_rpm = 2800;        // RPM
static int veh_fuel = 75;         // %
static int veh_engine_temp = 82;  // °C
static char veh_gear = 'D';       // gear char
static long veh_odometer = 86531; // km
static bool veh_seatbelt = true;  // indicator example

/* ---------------------------------------------------------------
 * LVGL periodic tick (moved here from dashboard_ui.cpp)
 * --------------------------------------------------------------- */
void ui_update_loop()
{
    lv_timer_handler();
    delay(50);
}

/* ---------------------------------------------------------------
 * Rebuild the active screen for a given UI type (moved here)
 * --------------------------------------------------------------- */
void load_ui(UIType type)
{
    lv_obj_clean(lv_scr_act());
    current_ui = type;

    switch (type)
    {
    case UI_VEHICLE_DASHBOARD:
        create_vehicle_dashboard_ui();
        break;
    case UI_SMART_HOME:
        create_smarthome_ui();
        break;
    case UI_SUPER_MARIO:
    default:
        create_supermario_ui();
        break;
    }
}

/* ---------------------------------------------------------------
 * Helper to apply Smart Home params to the active UI (if loaded)
 * --------------------------------------------------------------- */
static void apply_smarthome_params()
{
    update_temperature(smh_temperature);
    update_humidity(smh_humidity);
    update_battery_voltage(smh_batt_voltage);
    update_battery_capacity(smh_batt_capacity);
    update_wifi_signal(smh_wifi_signal);
    update_weather_status(smh_weather.c_str());
    update_location(smh_location.c_str());

    // Example to-do placeholders (UI has checkboxes already)
    add_todo_item("Water plants");
    add_todo_item("Check security");
    add_todo_item("Update firmware");
    add_todo_item("Check smart plugs");
}

/* -------------------------------------------------------------
 * Helper to apply Vehicle params to the active UI (if loaded)
 * ------------------------------------------------------------- */
static void apply_vehicle_params()
{
    update_speed_gauge(veh_speed);
    update_rpm_gauge(veh_rpm);
    update_fuel_level(veh_fuel);
    update_engine_temp(veh_engine_temp);
    update_gear_position(veh_gear);
    update_odometer(veh_odometer);
    set_warning_indicator(0, veh_seatbelt);
}

/* -------------------------------------------------------------
 * Switch UI (rebuilds the UI and applies current parameters)
 * ------------------------------------------------------------- */
static void switch_ui(UIType next_ui)
{
    if (next_ui == current_ui)
        return;

    current_ui = next_ui;
    load_ui(current_ui);

    if (current_ui == UI_VEHICLE_DASHBOARD)
    {
        Serial.println("[UI] Loaded Vehicle Dashboard");
        apply_vehicle_params();
    }
    else if (current_ui == UI_SMART_HOME)
    {
        Serial.println("[UI] Loaded Smart Home");
        apply_smarthome_params();
    }
    else
    {
        Serial.println("[UI] Loaded Super Mario");
    }

    // Trigger an e-paper refresh immediately after rebuilding UI
    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Setup
 * ------------------------------------------------------------- */
void setup()
{
    Serial.begin(115200);
    Serial.println("LVGL Multi-UI + E1001 e-paper demo starting...");

    // Configure keys (active LOW due to INPUT_PULLUP)
    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    // Initialize e-paper (includes LVGL/timer/display config handled by your driver)
    Serial.println("Initializing E1001 e-paper driver...");
    e1001_display_init(&e1001_driver);
    Serial.println("E1001 init done.");

    // Default UI: Super Mario
    current_ui = UI_SUPER_MARIO;
    load_ui(current_ui);
    Serial.println("Default UI created: Super Mario");

    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Loop: button-based UI switching + LVGL ticks + e-paper refresh
 * ------------------------------------------------------------- */
void loop()
{
    // Handle UI switching (debounced)
    if (digitalRead(BUTTON_KEY0) == LOW)
    { // Vehicle
        switch_ui(UI_VEHICLE_DASHBOARD);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY1) == LOW)
    { // Smart Home
        switch_ui(UI_SMART_HOME);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY2) == LOW)
    { // Super Mario
        switch_ui(UI_SUPER_MARIO);
        delay(300);
    }

    // Drive LVGL internal timers only (no driver I/O in UI layer)
    ui_update_loop();

    // Check if e-paper refresh is needed (driver logic stays here)
    if (e1001_display_should_refresh(&e1001_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1001_display_refresh(&e1001_driver);
        Serial.println("Display refresh complete.");
    }
}
```

</details>

### Demostración del efecto

Al presionar los botones en la placa EE04 se puede cambiar a la interfaz de usuario correspondiente:

- KEY1: Tablero de vehículo
- KEY2: Tablero de hogar inteligente
- KEY3: Super Mario
- Predeterminado: Super Mario

<div class="table-center">
<table align="center">
    <tr>
        <th>Super Mario</th>
        <th>Vehículo</th>
        <th>Hogar inteligente</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_3.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

### Recursos

- **Carcasa eInk monocromática de 7,5" (modelo 3D)**: [Download from Printables](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
