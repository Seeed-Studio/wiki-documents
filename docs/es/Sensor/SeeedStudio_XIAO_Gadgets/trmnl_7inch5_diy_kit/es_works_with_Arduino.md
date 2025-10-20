---
description: Este artículo describe cómo usar el Kit DIY TRMNL 7.5inch(OG) para trabajar con Arduino.
title: funciona con Arduino
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /es/ogdiy_kit_works_with_arduino
sidebar_position: 4
last_update:
  date: 06/29/2025
  author: Allen
---


# Comenzando con el Kit DIY TRMNL 7.5" (OG) en Arduino

## Introducción

El Kit DIY TRMNL 7.5" (OG) es una plataforma de desarrollo versátil que cuenta con el potente XIAO ESP32-S3 Plus como su cerebro. Este Kit DIY combina el poder de procesamiento del ESP32-S3 con una hermosa pantalla ePaper de 7.5 pulgadas, creando la base perfecta para proyectos de visualización de información de bajo consumo. Esta guía se enfoca en programar el Kit DIY TRMNL usando el framework de Arduino, proporcionándote el conocimiento esencial para utilizar sus diversas características de hardware.

## Comenzando

Antes de profundizar en las características específicas, configuremos nuestro entorno de desarrollo para el Kit DIY TRMNL 7.5" (OG).

### Instalación del Equipo

**Paso 1. Conectar la Pantalla a la Placa Controladora**  
Alinea el cable FPC con el conector en la Placa de Pantalla ePaper XIAO, luego asegura el pestillo para garantizar una conexión firme.  

:::tip
El lado metálico del cable FPC debe estar hacia arriba, de lo contrario, no se mostrará contenido.

Por favor sigue el tutorial de instalación a continuación, muchas personas se equivocan.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conectar la Batería**  
Conecta el cable de la batería al conector JST en la placa controladora, asegurando la polaridad correcta (cable rojo a +, negro a -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 3. Ensamblaje de la Carcasa (Opcional)**  

:::tip
Ten en cuenta que el cable flexible de la pantalla es muy frágil. Ten cuidado al operar. Si se daña, toda la pantalla dejará de funcionar.
:::
Imprime las partes de la carcasa de código abierto desde la [sección de Recursos](#recursos) y ensambla los componentes en el interior.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primero, ensambla la placa controladora y la batería.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Prueba el kit TRMNL para ver si funciona bien.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecta la pantalla en la carcasa y haz que el FPC salga.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecta el cable de extensión FPC y ensambla toda la carcasa.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

La carcasa en forma de L es muy similar.

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Si tu kit TRMNL está lejos de tu router, puedes mover la antena fuera de la carcasa. Tendría mejor rendimiento.
:::

### Preparación del Entorno

Para programar el Kit DIY TRMNL con Arduino, necesitarás configurar el IDE de Arduino con soporte para ESP32.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Descarga e instala el [IDE de Arduino](https://www.arduino.cc/en/software) y ejecuta la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Descargar IDE de Arduino</font></span></strong>
    </a>
</div><br />

**Paso 2.** Agregar soporte para placas ESP32 al IDE de Arduino.

En el IDE de Arduino, ve a **File > Preferences** y agrega la siguiente URL al campo "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instalar el paquete de placas ESP32.

Navega a **Tools > Board > Boards Manager**, busca "esp32" e instala el paquete ESP32 de Espressif Systems.

**Paso 4.** Seleccionar la placa correcta.

Ve a **Tools > Board > ESP32 Arduino** y selecciona "XIAO_ESP32S3_PLUS".

**Paso 5.** Conecta tu Kit DIY TRMNL a tu computadora usando un cable USB-C.

**Paso 6.** Selecciona el puerto correcto desde **Tools > Port**.

## Ejemplos de Arduino

Ahora exploremos las características principales del Kit DIY TRMNL con ejemplos de código de Arduino.

### Botones de Usuario

El Kit DIY TRMNL cuenta con tres botones programables por el usuario (D1, D2, D4) y un botón de reset. Creemos un ejemplo simple para detectar pulsaciones de botones.

#### Ejemplo de Prueba de Botones

Este ejemplo leerá el estado de los tres botones de usuario e imprimirá su estado en el Monitor Serie.

```cpp
// TRMNL DIY Kit - Button Test Example

// Define button pins
const int BUTTON_D1 = D1;  // First user button
const int BUTTON_D2 = D2;  // Second user button
const int BUTTON_D4 = D4;  // Third user button

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Button Test");

  // Configure button pins as inputs with internal pull-up resistors
  pinMode(BUTTON_D1, INPUT_PULLUP);
  pinMode(BUTTON_D2, INPUT_PULLUP);
  pinMode(BUTTON_D4, INPUT_PULLUP);
}

void loop() {
  // Read button states (buttons are LOW when pressed because of pull-up resistors)
  bool d1Pressed = !digitalRead(BUTTON_D1);
  bool d2Pressed = !digitalRead(BUTTON_D2);
  bool d4Pressed = !digitalRead(BUTTON_D4);

  // Print button states if any button is pressed
  if (d1Pressed || d2Pressed || d4Pressed) {
    Serial.print("Button D1: ");
    Serial.print(d1Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D2: ");
    Serial.print(d2Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D4: ");
    Serial.println(d4Pressed ? "PRESSED" : "released");

    // Add a small delay to avoid repeated readings
    delay(200);
  }
}
```

**Cómo Funciona el Código:**

1. Definimos constantes de pines para los tres botones de usuario (D1, D2, D4).

2. En la función `setup()`, inicializamos la comunicación serie y configuramos los pines de los botones como entradas con resistencias pull-up internas.

3. En la función `loop()`, leemos el estado de cada botón. Como estamos usando resistencias pull-up, los pines leen LOW cuando los botones están presionados.

4. Invertimos las lecturas (con el operador `!`) para que `true` signifique "presionado" y `false` signifique "liberado".

5. Si cualquier botón está presionado, imprimimos el estado de todos los botones en el Monitor Serie.

6. Un pequeño retraso previene lecturas repetidas rápidas cuando un botón se mantiene presionado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/6_button_test_serial.png" style={{width:1000, height:'auto'}}/></div>

### Monitoreo de Voltaje de Batería

El Kit DIY TRMNL 7.5" (OG) incluye un circuito para monitorear el voltaje de la batería conectado al pin D0 (GPIO1). Una característica importante de este diseño es que también incluye un pin de control (GPIO6) para habilitar/deshabilitar la alimentación del ADC, lo que ayuda a conservar la batería cuando no se está midiendo activamente.

#### Ejemplo de Monitoreo de Voltaje de Batería

```cpp
// TRMNL DIY Kit - Battery Voltage Monitoring Example

#define BATTERY_PIN 1       // GPIO1 (A0) - BAT_ADC
#define ADC_EN_PIN 6        // GPIO6 (A5) - ADC_EN

const float CALIBRATION_FACTOR = 0.968;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Battery Voltage Monitoring Example");

  // Configure ADC_EN
  pinMode(ADC_EN_PIN, OUTPUT);
  digitalWrite(ADC_EN_PIN, LOW);  // Start with ADC disabled to save power

  // Configure ADC
  analogReadResolution(12);
  analogSetPinAttenuation(BATTERY_PIN, ADC_11db);
}

void loop() {
  // Read battery voltage
  float voltage = readBatteryVoltage();

  // Print the results
  Serial.print("Battery Voltage: ");
  Serial.print(voltage, 2);  // Print with 2 decimal places
  Serial.println("V");

  // Determine battery level
  String batteryStatus;
  if (voltage >= 4.0) {
    batteryStatus = "Full";
  } else if (voltage >= 3.7) {
    batteryStatus = "Good";
  } else if (voltage >= 3.5) {
    batteryStatus = "Medium";
  } else if (voltage >= 3.2) {
    batteryStatus = "Low";
  } else {
    batteryStatus = "Critical";
  }

  Serial.print("Battery Status: ");
  Serial.println(batteryStatus);
  Serial.println();

  // Wait for a while before the next reading
  delay(5000);  // 5 seconds
}

float readBatteryVoltage() {
  // Enable ADC
  digitalWrite(ADC_EN_PIN, HIGH);
  delay(10);  // Short delay to stabilize

  // Read 30 times and average for more stable readings
  long sum = 0;
  for(int i = 0; i < 30; i++) {
    sum += analogRead(BATTERY_PIN);
    delayMicroseconds(100);
  }

  // Disable ADC to save power
  digitalWrite(ADC_EN_PIN, LOW);

  // Calculate voltage
  float adc_avg = sum / 30.0;
  float voltage = (adc_avg / 4095.0) * 3.6 * 2.0 * CALIBRATION_FACTOR;

  return voltage;
}
```

**Cómo Funciona el Código:**

1. Definimos dos pines importantes:

- `BATTERY_PIN` (GPIO1/A0): Conectado al divisor de voltaje de la batería

- `ADC_EN_PIN` (GPIO6/A5): Controla la alimentación del circuito de medición ADC

2. Definimos un `CALIBRATION_FACTOR` (0.968) para ajustar finamente la precisión de la lectura de voltaje.

3. En la función `setup()`:

- Inicializamos la comunicación serie

- Configuramos el pin ADC_EN como salida y lo establecemos en LOW (deshabilitado) para ahorrar energía

- Establecemos la resolución del ADC a 12 bits (0-4095)

- Configuramos la atenuación adecuada para el pin de la batería

4. En la función `loop()`:

- Llamamos a `readBatteryVoltage()` para obtener el voltaje actual de la batería

- Imprimimos el voltaje en el Monitor Serie

- Determinamos y mostramos el estado de la batería basado en umbrales de voltaje

- Esperamos 5 segundos antes de tomar la siguiente lectura

5. La función `readBatteryVoltage()`:

- Habilita el circuito ADC estableciendo ADC_EN_PIN en HIGH

- Espera brevemente para que el circuito se estabilice

- Toma 30 lecturas y las promedia para obtener resultados más estables

- Deshabilita el circuito ADC para ahorrar energía

- Calcula el voltaje real de la batería usando:

  - La lectura promedio del ADC
  - La resolución del ADC (4095)
  - Voltaje de referencia (3.6V)
  - Factor del divisor de voltaje (2.0)
  - Factor de calibración (0.968)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/7_battery_monitor_serial.png" style={{width:1000, height:'auto'}}/></div>

**Diseño de Ahorro de Energía:**

Una característica clave de esta implementación es la capacidad de deshabilitar el circuito de medición de batería cuando no está en uso. El TRMNL DIY Kit está diseñado para un bajo consumo de energía, y este enfoque ayuda a extender la vida útil de la batería alimentando el circuito divisor de voltaje solo cuando se necesita una medición real.

El factor de calibración (0.968) compensa las tolerancias de los componentes en el divisor de voltaje y ayuda a asegurar lecturas precisas. Este valor puede necesitar un ligero ajuste para tu placa específica si encuentras que las lecturas son consistentemente diferentes comparadas con una medición de multímetro.

Tomar múltiples lecturas y promediarlas ayuda a reducir el ruido y proporciona mediciones de voltaje más estables, lo cual es especialmente importante para el monitoreo de batería donde pequeños cambios de voltaje pueden ser significativos para determinar la capacidad restante.

## Pantalla ePaper

El TRMNL 7.5" (OG) DIY Kit cuenta con una hermosa pantalla ePaper de 7.5 pulgadas en blanco y negro que proporciona visibilidad clara en varias condiciones de iluminación y consumo de energía ultra bajo. En esta sección, exploraremos cómo configurar y controlar la pantalla ePaper usando Arduino.

### Configuración de Hardware

Antes de comenzar a programar, asegurémonos de que la pantalla ePaper esté correctamente conectada a la placa TRMNL:

**Paso 1.** Conecta la pantalla ePaper al conector de 24 pines en la placa controladora. El conector soporta inserción ciega, por lo que no puedes insertarlo incorrectamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/8_connect_display.png" style={{width:600, height:'auto'}}/></div>

**Paso 2.** Después de insertar el cable de cinta, asegúralo cerrando el mecanismo de bloqueo.

:::caution
El cable de cinta es frágil y puede dañarse fácilmente. Evita doblarlo lateralmente tanto como sea posible.
:::

**Paso 3.** Asegúrate de que el jumper conecte los pines 24Pin y GND en la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/10_jumper_setting.png" style={{width:700, height:'auto'}}/></div>

### Configuración de Software

Para controlar la pantalla ePaper, usaremos la librería Seeed_GFX, que proporciona soporte integral para varios dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la librería Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Instala la librería agregando el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si has instalado previamente la librería TFT_eSPI, puede que necesites removerla temporalmente o renombrarla desde tu carpeta de librerías de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con características adicionales.
:::

**Paso 3.** Abre el sketch de ejemplo de la librería Seeed_GFX: **File > Seeed_GFX > Examples > ePaper > Basic > Clock**

**Paso 4.** Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch de Arduino haciendo clic en la flecha junto a la pestaña del ejemplo y seleccionando "New Tab".

**Paso 5.** Nombra el nuevo archivo como `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

**Paso 6.** Ve a la [Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/), y selecciona "TRMNL 7.5" (OG) DIY Kit" como se muestra en la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/13_display_config_tool.png" style={{width:700, height:'auto'}}/></div>

**Paso 7.** Copia el código generado y pégalo en el archivo `driver.h` que creaste. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Paso 8. ¡Ahora puedes subir el ejemplo a tu TRMNL DIY Kit y ver la pantalla ePaper en acción!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/18_upload_sketch.jpg" style={{width:700, height:'auto'}}/></div>

### Ejemplo Básico de Pantalla ePaper

Exploremos un ejemplo simple de reloj analógico que demuestra cómo dibujar gráficos en la pantalla ePaper. [Este ejemplo](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Basic/Clock/Clock.ino) crea una esfera de reloj clásica con manecillas de hora, minuto y segundo.

```cpp
#include <SPI.h>
#include <TFT_eSPI.h> // Hardware-specific library

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h

EPaper epaper = EPaper(); // Invoke custom library

float sx = 0, sy = 1, mx = 1, my = 0, hx = -1, hy = 0; // Saved H, M, S x & y multipliers
float sdeg = 0, mdeg = 0, hdeg = 0;
uint16_t osx = 120, osy = 120, omx = 120, omy = 120, ohx = 120, ohy = 120; // Saved H, M, S x & y coords
uint16_t x0 = 0, x1 = 0, yy0 = 0, yy1 = 0;
uint32_t targetTime = 0; // for next 1 second timeout

static uint8_t conv2d(const char *p);                                                // Forward declaration needed for IDE 1.6.x
uint8_t hh = conv2d(__TIME__), mm = conv2d(__TIME__ + 3), ss = conv2d(__TIME__ + 6); // Get H, M, S from compile time

bool initial = 1;

#endif

void setup(void)
{
#ifdef EPAPER_ENABLE
  epaper.begin();
  epaper.setRotation(0);

  epaper.fillScreen(TFT_WHITE);

  epaper.setTextColor(TFT_BLACK, TFT_WHITE); // Adding a background colour erases previous text automatically

  // Draw clock face
  epaper.fillCircle(120, 120, 118, TFT_BLACK);
  epaper.fillCircle(120, 120, 110, TFT_WHITE);

  // Draw 12 lines
  for (int i = 0; i < 360; i += 30)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 114 + 120;
    yy0 = sy * 114 + 120;
    x1 = sx * 100 + 120;
    yy1 = sy * 100 + 120;

    epaper.drawLine(x0, yy0, x1, yy1, TFT_BLACK);
  }

  // Draw 60 dots
  for (int i = 0; i < 360; i += 6)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 102 + 120;
    yy0 = sy * 102 + 120;
    // Draw minute markers
    epaper.drawPixel(x0, yy0, TFT_BLACK);

    // Draw main quadrant dots
    if (i == 0 || i == 180)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
    if (i == 90 || i == 270)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
  }

  epaper.fillCircle(120, 121, 3, TFT_BLACK);

  // Draw text at position 120,260 using fonts 4
  // Only font numbers 2,4,6,7 are valid. Font 6 only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : . - a p m
  // Font 7 is a 7 segment font and only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : .
  epaper.drawCentreString("Time flies", 120, 260, 4);

  epaper.update();

  targetTime = millis() + 1000;
#endif
}

void loop()
{
#ifdef EPAPER_ENABLE
  if (targetTime < millis())
  {
    targetTime += 1000;
    ss++; // Advance second
    if (ss == 60)
    {
      ss = 0;
      mm++; // Advance minute
      if (mm > 59)
      {
        mm = 0;
        hh++; // Advance hour
        if (hh > 23)
        {
          hh = 0;
        }
      }
    }

    // Pre-compute hand degrees, x & y coords for a fast screen update
    sdeg = ss * 6;                     // 0-59 -> 0-354
    mdeg = mm * 6 + sdeg * 0.01666667; // 0-59 -> 0-360 - includes seconds
    hdeg = hh * 30 + mdeg * 0.0833333; // 0-11 -> 0-360 - includes minutes and seconds
    hx = cos((hdeg - 90) * 0.0174532925);
    hy = sin((hdeg - 90) * 0.0174532925);
    mx = cos((mdeg - 90) * 0.0174532925);
    my = sin((mdeg - 90) * 0.0174532925);
    sx = cos((sdeg - 90) * 0.0174532925);
    sy = sin((sdeg - 90) * 0.0174532925);

    if (ss == 0 || initial)
    {
      initial = 0;
      // Erase hour and minute hand positions every minute
      epaper.drawLine(ohx, ohy, 120, 121, TFT_WHITE);
      ohx = hx * 62 + 121;
      ohy = hy * 62 + 121;
      epaper.drawLine(omx, omy, 120, 121, TFT_WHITE);
      omx = mx * 84 + 120;
      omy = my * 84 + 121;
    }

    // Redraw new hand positions, hour and minute hands not erased here to avoid flicker
    epaper.drawLine(osx, osy, 120, 121, TFT_WHITE);
    osx = sx * 90 + 121;
    osy = sy * 90 + 121;
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);
    epaper.drawLine(ohx, ohy, 120, 121, TFT_BLACK);
    epaper.drawLine(omx, omy, 120, 121, TFT_BLACK);
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);

    epaper.fillCircle(120, 121, 3, TFT_BLACK);
    epaper.update();
  }
#endif
}

#ifdef EPAPER_ENABLE
static uint8_t conv2d(const char *p)
{
  uint8_t v = 0;
  if ('0' <= *p && *p <= '9')
    v = *p - '0';
  return 10 * v + *++p - '0';
}
#endif
```

**Cómo Funciona el Ejemplo del Reloj:**

Este elegante ejemplo crea un reloj analógico clásico en la pantalla ePaper. Vamos a desglosar cómo funciona:

1. **Inicialización y Configuración:**
   - El código utiliza compilación condicional con `#ifdef EPAPER_ENABLE` para asegurar que solo se ejecute en hardware con soporte de pantalla e-paper.
   - Declaramos variables para rastrear las posiciones de las manecillas del reloj y sus posiciones anteriores.
   - La hora inicial se establece basándose en el tiempo de compilación del sketch usando la macro `__TIME__`.

2. **Función Setup:**
   - Inicializamos la pantalla e-paper con `epaper.begin()`.
   - La pantalla se llena de blanco como fondo usando `epaper.fillScreen(TFT_WHITE)`.
   - Dibujamos la cara del reloj como un círculo negro con interior blanco.
   - Los marcadores de hora se dibujan como 12 líneas alrededor de la circunferencia.
   - Los marcadores de minuto se dibujan como 60 puntos con énfasis especial en las posiciones de cuarto de hora.
   - Se dibuja un pequeño círculo negro en el centro de la cara del reloj.
   - Se añade el texto "Time flies" en la parte inferior de la pantalla.
   - Finalmente, se llama a `epaper.update()` para actualizar la pantalla física.

3. **Función Loop:**
   - Cada segundo (cuando `millis()` excede `targetTime`), actualizamos las manecillas del reloj.
   - Incrementamos los segundos, minutos y horas según sea necesario.
   - Calculamos los ángulos para cada manecilla basándose en la hora actual.
   - Las posiciones de las manecillas se calculan usando funciones trigonométricas:
     - Manecilla de horas: 30 grados por hora (más ajuste por minutos)
     - Manecilla de minutos: 6 grados por minuto (más ajuste por segundos)
     - Manecilla de segundos: 6 grados por segundo
   - Para reducir actualizaciones innecesarias y extender la vida útil de la pantalla, solo borramos y redibujamos las manecillas de hora y minuto una vez por minuto (cuando segundos = 0).
   - La manecilla de segundos se actualiza cada segundo borrando su posición anterior y dibujándola en la nueva posición.
   - Después de dibujar todas las manecillas, refrescamos el punto central y llamamos a `epaper.update()` para actualizar la pantalla física.

4. **Función Auxiliar:**
   - La función `conv2d` convierte una representación de cadena de un número a un valor entero, utilizada para analizar los valores de hora, minuto y segundo del tiempo de compilación.

**Notas Importantes Sobre Este Ejemplo:**

1. **Actualizaciones de Pantalla:** A diferencia de las pantallas LCD u OLED, las pantallas ePaper no están diseñadas para actualizaciones frecuentes. Este ejemplo actualiza la pantalla cada segundo, lo cual está bien para propósitos de demostración, pero en una aplicación del mundo real, podrías querer actualizar con menos frecuencia para extender la vida útil de la pantalla.

2. **Actualizaciones Parciales:** Este ejemplo demuestra actualizaciones parciales al solo borrar y redibujar las partes necesarias de la pantalla, lo cual es más eficiente que refrescar toda la pantalla.

3. **Compilación Condicional:** Las directivas `#ifdef EPAPER_ENABLE` aseguran que el código solo compile y se ejecute si la pantalla e-paper está configurada correctamente en el sistema.

4. **Funciones de Dibujo:** El ejemplo muestra varias funciones de dibujo:
   - `fillCircle()` para crear la cara del reloj
   - `drawLine()` para dibujar las manecillas del reloj y marcadores de hora
   - `drawPixel()` y `fillCircle()` para marcadores de minuto
   - `drawCentreString()` para texto centrado

Este ejemplo de reloj analógico proporciona un excelente punto de partida para crear tus propias aplicaciones gráficas en la pantalla ePaper del TRMNL 7.5" (OG) DIY Kit.

### Funciones de Dibujo y Texto

La biblioteca Seeed_GFX proporciona muchas funciones para dibujar en la pantalla:

- `display.drawPixel(x, y, color)`: Dibuja un solo píxel
- `display.drawLine(x0, y0, x1, y1, color)`: Dibuja una línea
- `display.drawRect(x, y, w, h, color)`: Dibuja el contorno de un rectángulo
- `display.fillRect(x, y, w, h, color)`: Dibuja un rectángulo relleno
- `display.drawCircle(x, y, r, color)`: Dibuja el contorno de un círculo
- `display.fillCircle(x, y, r, color)`: Dibuja un círculo relleno
- `display.drawTriangle(x0, y0, x1, y1, x2, y2, color)`: Dibuja el contorno de un triángulo
- `display.fillTriangle(x0, y0, x1, y1, x2, y2, color)`: Dibuja un triángulo relleno
- `display.setCursor(x, y)`: Establece la posición del cursor de texto
- `display.setTextColor(color)`: Establece el color del texto
- `display.setTextSize(size)`: Establece el tamaño del texto (1-6)
- `display.print("text")`: Imprime texto en la posición del cursor
- `display.println("text")`: Imprime texto con una nueva línea

Los colores disponibles para esta pantalla monocromática son:

- `GxEPD_BLACK`: Píxeles negros
- `GxEPD_WHITE`: Píxeles blancos

Recuerda llamar a `display.update()` después de las operaciones de dibujo para actualizar la pantalla física.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
