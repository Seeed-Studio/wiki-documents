---
description: Develop SenseCAP Indicator both chips with Arduino
title: Desarrollo en ambos chips con Arduino
keywords:
  - SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.webp
slug: /es/SenseCAP_Indicator_ESP32_Arduino
last_update:
  date: 07/22/2025
  author: Guillermo
craft: true
---

<!-- :::danger
There are some issues while you running this wiki. We are still looking for someone who can help us improve this firmare, under our [Contributor Program](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=70900433)
::: -->

# Desarrollo del SenseCAP Indicator con ambos chips usando Arduino

El SenseCAP Indicator es un dispositivo con pantalla táctil de 4 pulgadas que funciona con los microcontroladores duales ESP32 y RP2040. Tanto el ESP32 como el RP2040 son microcontroladores muy potentes que ofrecen una variedad de funciones y características.

Este tutorial te guiará para desarrollar tu propio proyecto o firmware personalizado para el SenseCAP Indicator usando la simplicidad y flexibilidad del Framework Arduino.

## Preparación del Hardware

Estoy usando el SenseCAP Indicator como hardware, que cuenta con cuatro tipos de sensores (CO2, temperatura, humedad y TVOC). El contenido incluye:

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP Indicator D1S</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:'auto', height:200}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1S-p-5645.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Descripción del Hardware y Conocimientos para el Desarrollo

El Indicator está diseñado con dos microcontroladores, el RP2040 y el ESP32S3, que trabajan simultáneamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

Según el diagrama anterior sabemos que:

1. Todos los sensores están conectados al microcontrolador RP2040 usando el protocolo I2C.
2. Hay un módulo expansor de IO I2C usando el chip PCA9535.
3. La pantalla está conectada al microcontrolador ESP32S3 con 2 pines (CS, RESET) conectados al expansor I2C PCA9535.
4. El RP2040 está conectado al ESP32S3 mediante los pines 20 y 19 del ESP32S3 usando interfaces UART.

Por lo tanto, si conectas el SenseCAP Indicator a la computadora, se presentarán dos puertos seriales: uno para el RP2040 y otro para el ESP32S3. El que muestra la información **USB-SERIAL CH340** es el conectado al ESP32S3 y este es el que se usará para el resto del tutorial.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/1.jpg"/></div>

## Preparación del Software

Usaremos Arduino.

<div className="download_arduino_container" style={{ textAlign: "center" }}>
  <a className="download_arduino_item" href="https://www.arduino.cc/en/software">
    <strong>Descargar Arduino IDE</strong>
  </a>
</div>

:::note
Antes de continuar con el tutorial, asegúrate de haber completado los siguientes pasos en el Arduino IDE:

1. **Definición de la placa ESP32**: Asegúrate de que la definición para placas ESP32 esté instalada y actualizada a la última versión. Puedes seguir [esta guía](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html) si aún no tienes la placa ESP32 en el IDE.
2. **Selección de placa**: Selecciona la placa **ESP32S3 Dev Module**.
3. **PSRAM**: Activa la función OPI PSRAM en el Arduino IDE para asegurar el correcto funcionamiento de la pantalla.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/2.jpg"/></div>

:::

### Versiones de Placas Usadas

Para garantizar compatibilidad con el proyecto, usa las siguientes versiones:

- **ESP32**: versión 3.1.2
- **Raspberry Pi Pico Arduino**: versión 4.4.3

### Librerías Usadas

TouchLib: versión 0.0.2

Para integrar el driver táctil y unificar la interfaz táctil, se necesita la librería TouchLib. No está disponible en el gestor de librerías del Arduino IDE. Puedes descargarla manualmente desde el [repositorio GitHub de TouchLib](https://github.com/mmMicky/TouchLib) y luego agregarla al IDE mediante Sketch > Include Library > Add .ZIP Library.

Después de descargar la librería, abre el Arduino IDE, ve al menú Sketch, selecciona "Add .ZIP Library" y añade la librería descargada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"/></div>

De forma similar, para una integración fluida, debes abrir el menú Sketch, seleccionar "Manage Libraries," buscar las librerías necesarias (por ejemplo, "PCA9535" del autor hidea kitai) e instalarlas. Asegúrate de tener las siguientes versiones para las demás librerías necesarias:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"/></div>

- **Adafruit TinyUSB**: versión 3.4.2
- **Anitracks_PCA95x5**: versión 0.1.3
- **GFX Library for Arduino**: versión 1.5.3
- **PacketSerial**: versión 1.4.0
- **lvgl**: versión 9.2.2
- **PCA95x5**: versión 0.1.3

Asegúrate de que estas librerías y placas estén instaladas en el Arduino IDE para evitar problemas de compatibilidad.

## Empezando

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="LongDirtyAnimAlf" label="New Tutorial (by LongDirtyAnimAlf)" default>

```cpp
#include <Arduino_GFX_Library.h>
#include <PCA95x5.h>
#define GFX_BL DF_GFX_BL // pin por defecto para la retroiluminación, puedes reemplazar DF_GFX_BL por el pin real de retroiluminación

/* Más declaraciones de dispositivos dev: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */
#if defined(DISPLAY_DEV_KIT)
Arduino_GFX *gfx = create_default_Arduino_GFX();
#else /* !defined(DISPLAY_DEV_KIT) */

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_SWSPI(
    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,
    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);

// opción 1:
// Descomenta para pantalla rectangular de 4"
Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* polaridad hsync */, 10 /* hsync front porch */, 8 /* hsync ancho pulso */, 50 /* hsync back porch */,
    1 /* polaridad vsync */, 10 /* vsync front porch */, 8 /* vsync ancho pulso */, 20 /* vsync back porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    480 /* ancho */, 480 /* alto */, rgbpanel, 2 /* rotación */, true /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));

#endif /* !defined(DISPLAY_DEV_KIT) */
/*******************************************************************************
 * Fin de configuración Arduino_GFX
 ******************************************************************************/

void setup(void)
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("Ejemplo Arduino_GFX Hola Mundo");

#ifdef GFX_EXTRA_PRE_INIT
  GFX_EXTRA_PRE_INIT();
#endif

  // Inicializar pantalla
  if (!gfx->begin())
  {
    Serial.println("¡gfx->begin() falló!");
  }
  gfx->fillScreen(BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif

  gfx->setCursor(10, 10);
  gfx->setTextColor(RED);
  gfx->println("Sensecap Indicator");

  delay(5000); // 5 segundos
}

void loop()
{
  gfx->setCursor(random(gfx->width()), random(gfx->height()));
  gfx->setTextColor(random(0xffff), random(0xffff));
  gfx->setTextSize(random(6) /* escala x */, random(6) /* escala y */, random(2) /* margen pixel */);
  gfx->println("Sensecap Indicator");

  delay(1000); // 1 segundo
}
```

Si todo sale bien, un texto "Sensecap Indicator" se mostrará aleatoriamente en la pantalla.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"/></div>

### Creando aplicaciones GUI simples con SenseCap Indicator

El SenseCap Indicator cuenta con un potente microcontrolador ESP32-S3 y una pantalla de alta resolución 480x480, lo que lo hace ideal para crear interfaces gráficas de usuario. Ahora continuaremos nuestro desarrollo con el SenseCap Indicator explorando cómo crear aplicaciones GUI interactivas usando LVGL. Puedes descargar el proyecto completo incluyendo código fuente y archivos header desde el repositorio:
[Descargar proyecto SenseCap Indicator LVGL](https://github.com/LongDirtyAnimAlf/SenseCap)

Después de descargar y extraer los archivos del proyecto, sube el siguiente código para crear una aplicación GUI básica de múltiples pantallas:

```cpp
/* Usar LVGL con Arduino requiere algunos pasos adicionales:
 * Asegúrate de leer la documentación aquí: https://docs.lvgl.io/master/get-started/platforms/arduino.html
 Instalación: lvgl */

// Esta definición a veces falta cuando se usa una versión antigua del ESP32-IDF
// #define ESP_INTR_CPU_AFFINITY_AUTO 0

#include <Arduino.h>
#include <lvgl.h>
#include <Arduino_GFX_Library.h>
#include <PacketSerial.h>
#include "Indicator_Extender.h"
#include "Indicator_SWSPI.h"
#include "ui.h"
#include "touch.h"

#define HOR_RES 480
#define VER_RES 480

#define PACKET_UART_RXD 20
#define PACKET_UART_TXD 19

#define BUTTON_PIN 38

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define RGB_PANEL
#define GFX_BL 45
Arduino_DataBus *bus = new Indicator_SWSPI(
    GFX_NOT_DEFINED /* DC */, EXPANDER_IO_LCD_CS /* CS */,
    SPI_SCLK /* SCK */, SPI_MOSI /* MOSI */, GFX_NOT_DEFINED /* MISO */);

Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* polaridad hsync */, 10 /* hsync front porch */, 8 /* hsync ancho pulso */, 50 /* hsync back porch */,
    1 /* polaridad vsync */, 10 /* vsync front porch */, 8 /* vsync ancho pulso */, 20 /* vsync back porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    HOR_RES /* ancho */, VER_RES /* alto */, rgbpanel, 0 /* rotación */, false /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_indicator_init_operations, sizeof(st7701_indicator_init_operations));


COBSPacketSerial myPacketSerial;

void onPacketReceived(const uint8_t* buffer, size_t size);

uint32_t millis_cb(void)
{
  return millis();
}

/* Leer el touchpad */
void my_touchpad_read(lv_indev_t *indev, lv_indev_data_t *data)
{
  if (touch_has_signal())
  {
    if (touch_touched())
    {
      data->state = LV_INDEV_STATE_PRESSED;

      /* Establece las coordenadas */
      data->point.x = touch_last_x;
      data->point.y = touch_last_y;
    }
    else if (touch_released())
    {
      data->state = LV_INDEV_STATE_RELEASED;
    }
  }
  else
  {
    data->state = LV_INDEV_STATE_RELEASED;
  }
}

// Manejador principal de eventos para botones
static void event_handler(lv_event_t * e)
{
  lv_event_code_t code = lv_event_get_code(e);
  lv_obj_t * btn = lv_event_get_current_target_obj(e);

  if (btn != NULL)
  {
    if(code == LV_EVENT_CLICKED)
    {
      void * btn_no_void = (void*)lv_event_get_user_data(e);
      byte btn_no = (byte)((uintptr_t)btn_no_void);
      lv_obj_t * screen = lv_obj_get_screen(btn);
      if (screen != NULL)
      {
        Serial.println("Pantalla asignada");
        if (screen == screen2)
        {
          Serial.println("Pantalla 2");
          if (btn_no != 0)
          {
            Create_Screen3(event_handler);
            lv_screen_load(screen3);
          }
        }
        if (screen == screen3)
        {
          Serial.println("Pantalla 3");
          if (btn_no == 0)
          {
            lv_screen_load(screen2);
            lv_obj_delete(screen3);
          }
        }
      }
    }
  }
}

void setup()
{
  Serial.begin(115200);
  Serial.println("Inicio SenseCap Indicator");
}
```

Después de subir el código, abre el Monitor Serial y configura la velocidad de baudios a 115200. Deberías ver mensajes de inicialización y la GUI aparecerá en la pantalla, mostrando la Pantalla 2 con cualquier dato de temperatura y humedad recibido a través de la conexión UART.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/12.gif"/></div>

### Aplicación GUI avanzada con múltiples pantallas y visualización de datos

El segundo ejemplo se basa en la aplicación básica agregando características más sofisticadas como monitoreo de batería, visualización dinámica de datos e indicadores de estado codificados por colores. Puedes descargar el proyecto completo incluyendo código fuente y archivos header desde el repositorio:
[Descargar proyecto SenseCap Indicator LVGL](https://github.com/LongDirtyAnimAlf/SenseCap)

Para implementar esta versión, sube el siguiente código:

```cpp
/* Usar LVGL con Arduino requiere algunos pasos adicionales:
 * Asegúrate de leer la documentación aquí: https://docs.lvgl.io/master/get-started/platforms/arduino.html
 Instalación: lvgl */

// Esta definición a veces falta cuando se usa una versión antigua del ESP32-IDF
// #define ESP_INTR_CPU_AFFINITY_AUTO 0

#include <Arduino.h>
#include <lvgl.h>
#include <Arduino_GFX_Library.h>
#include <PacketSerial.h>
#include "Indicator_Extender.h"
#include "Indicator_SWSPI.h"
#include "ui.h"
#include "touch.h"
#include "shared.h"

#define HOR_RES 480
#define VER_RES 480

#define PACKET_UART_RXD 20
#define PACKET_UART_TXD 19

#define BUTTON_PIN 38

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define RGB_PANEL
#define GFX_BL 45
Arduino_DataBus *bus = new Indicator_SWSPI(
    GFX_NOT_DEFINED /* DC */, EXPANDER_IO_LCD_CS /* CS */,
    SPI_SCLK /* SCK */, SPI_MOSI /* MOSI */, GFX_NOT_DEFINED /* MISO */);

Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* polaridad hsync */, 10 /* hsync front porch */, 8 /* hsync ancho pulso */, 50 /* hsync back porch */,
    1 /* polaridad vsync */, 10 /* vsync front porch */, 8 /* vsync ancho pulso */, 20 /* vsync back porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    HOR_RES /* ancho */, VER_RES /* alto */, rgbpanel, 0 /* rotación */, false /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_indicator_init_operations, sizeof(st7701_indicator_init_operations));

TBatteryBoard BatteryBoards[DAUGHTERBOARDCOUNT] = {0};

COBSPacketSerial myPacketSerial;
//PacketSerial_<COBS, 0, 1024> myPacketSerial;

void onPacketReceived(const uint8_t* buffer, size_t size);

#if LV_USE_LOG != 0
void my_print(lv_log_level_t level, const char *buf)
{
  LV_UNUSED(level);
  Serial.println(buf);
  Serial.flush();
}
#endif

uint32_t millis_cb(void)
{
  return millis();
}

/* Leer el touchpad */
void my_touchpad_read(lv_indev_t *indev, lv_indev_data_t *data)
{
  if (touch_has_signal())
  {
    if (touch_touched())
    {
      data->state = LV_INDEV_STATE_PRESSED;

      /* Establecer coordenadas */
      data->point.x = touch_last_x;
      data->point.y = touch_last_y;
    }
    else if (touch_released())
    {
      data->state = LV_INDEV_STATE_RELEASED;
    }
  }
  else
  {
    data->state = LV_INDEV_STATE_RELEASED;
  }
}

static void event_handler(lv_event_t * e)
{
  lv_event_code_t code = lv_event_get_code(e);
  lv_obj_t * btn = lv_event_get_current_target_obj(e);

  if (btn != NULL)
  {
    if(code == LV_EVENT_CLICKED)
    {
      void * btn_no_void = (void*)lv_event_get_user_data(e);
      byte btn_no = (byte)((uintptr_t)btn_no_void);
      lv_obj_t * screen = lv_obj_get_screen(btn);
      if (screen != NULL)
      {
        Serial.println("Pantalla asignada");

        if (screen == screen1)
        {
          Serial.println("Pantalla 1");
          Screen2SetActive(btn_no);
          lv_screen_load(screen2);
          //Screen2SetActive(5);
        }
        if (screen == screen2)
        {
          Serial.println("Pantalla 2");
          if (btn_no == 0)
          {
            lv_screen_load(screen1);
          }
          else
          {
            Create_Screen3(event_handler);
            lv_screen_load(screen3);
          }
        }
        if (screen == screen3)
        {
          Serial.println("Pantalla 3");
          if (btn_no == 0)
          {
            lv_screen_load(screen2);
            lv_obj_delete(screen3);
          }
        }
      }
    }
  }
}

void setup()
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("Inicio SenseCap Indicator");
  String LVGL_Arduino = String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  pinMode(BUTTON_PIN, INPUT);

  // Inicializar hardware del Indicator
  extender_init();

  myPacketSerial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, PACKET_UART_RXD, PACKET_UART_TXD);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);

  // Inicializar pantalla
  if (!gfx->begin(12000000L))
  {
    Serial.println("¡gfx->begin() falló!");
    Serial.println("¡Esperar errores severos!");
  }
  gfx->fillScreen(RGB565_BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif
  lv_init();

  /* Establecer fuente de ticks para que LVGL sepa cuánto tiempo ha pasado. */
  lv_tick_set_cb(millis_cb);

  /* Registrar función de impresión para depuración */
#if LV_USE_LOG != 0
  lv_log_register_print_cb(my_print);
#endif

  lv_screen_init(gfx, HOR_RES, VER_RES);
  //lv_display_set_rotation(disp, LV_DISPLAY_ROTATION_0);
  //lv_display_set_antialiasing(disp,false);

  // Inicializar dispositivo táctil
  touch_init(HOR_RES, VER_RES, 0); // la rotación la maneja LVGL
  /* Inicializar driver del dispositivo de entrada */
  lv_indev_t *indev = lv_indev_create();
  lv_indev_set_type(indev, LV_INDEV_TYPE_POINTER); /* El touchpad debe ser tipo POINTER */
  lv_indev_set_read_cb(indev, my_touchpad_read);

  Create_Screen1(event_handler);

  Screen2Create(event_handler);
  Screen2InitData();

  lv_screen_load(screen1);

  Serial.println("Setup completado");
}

void loop()
{
  static TickType_t xLastWakeTime = xTaskGetTickCount();

  /*
  unsigned long startTime = millis();
  while (digitalRead(BUTTON_PIN) == LOW)
  {
    if (millis() - startTime >= 10000)
    {
      ESP.restart();
      //esp_restart();
    }
  }
  */

  myPacketSerial.update();
  // Verificar posible overflow del buffer de recepción (opcional).
  if (myPacketSerial.overflow())
  {
    // Enviar alerta por un pin (ejemplo, encender un LED) o enviar un paquete definido por el usuario.
  }

  lv_task_handler(); /* dejar que la GUI haga su trabajo */

  // Retardo simple siempre de 5ms
  //delay(5);

  // Este retardo se adapta al tiempo consumido en las tareas anteriores
  // Si estas tareas consumen más tiempo, el retardo será menor
  vTaskDelayUntil( &xLastWakeTime, ( 5 / portTICK_PERIOD_MS ) );
}

void onPacketReceived(const uint8_t* buffer, size_t size)
{
#ifndef YOLO
  Serial.printf("<--- recv len:%d, datos: ", size);
  for (int i = 0; i < size; i++) {
    Serial.printf("0x%x ", buffer[i]);
  }
  Serial.println("");
#endif

  if (size < 1) {
    return;
  }

  byte index = 0;

  TCommands Command = (TCommands)buffer[index++];

  if ((Command == CMD_get_data) || (Command == CMD_set_value))
  {
    byte BatteryNumber = buffer[index++];

    if (Command == CMD_get_data)
    {
      dword tempcalc;
      word Volt = 0;
      word Amps = 0;

      memcpy(&Volt, &buffer[index], 2);
      index += 2;
      memcpy(&Amps, &buffer[index], 2);
      index += 2;

      Screen2AddData((BatteryNumber+1),Volt,Amps);

      // Mostrar datos en pantalla 1
      tempcalc = Volt * 3300u;
      tempcalc /= (dword)((1u << BITS)-1u);
      SetVoltageScreen1mV(BatteryNumber,(word)tempcalc);

      tempcalc = Amps * 6000u;
      tempcalc /= (dword)((1u << BITS)-1u);
      SetCurrentScreen1mA(BatteryNumber,(word)tempcalc);
    }

    if (Command == CMD_set_value)
    {
      lv_color_t c = LV_COLOR_MAKE(0,0,0);
      TBatteryStatus Status = (TBatteryStatus)buffer[index++];
      switch (Status)
      {
        case BSCurrent:
        case BSPower:
        case BSResistor:
        {
          c = lv_palette_main(LV_PALETTE_DEEP_ORANGE);
          break;
        }
        case BSCharge:
        case BSVoltage:
        case BSPulse:
        {
          c = lv_palette_main(LV_PALETTE_PURPLE);
          break;
        }
        case BSOff:
        {
          c = LV_COLOR_MAKE(0X00,0xFF,0xFF);
          break;
        }
        default:
        {
          c = lv_palette_main(LV_PALETTE_YELLOW);
        }
      }
      SetLedScreen1(BatteryNumber,c);
    }
  }
}
```

Con este código, el SenseCap Indicator mostrará una aplicación de tres pantallas. La Pantalla 1 muestra una vista general de los datos de batería con indicadores de estado codificados por colores, la Pantalla 2 proporciona información detallada para baterías individuales, y la Pantalla 3 ofrece controles o información adicional.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/11.png"/></div>

</TabItem>
  
<TabItem value="Hendra" label="Old Tutorial (by Hendra)">

Ahora podemos desarrollar con la pantalla conectada al chip ESP32S3 y leer los sensores conectados al chip RP2040. Finalmente combinarlos ambos.

<h3>Desarrollo con la pantalla conectada al chip ESP32-S3</h3>

El SenseCAP Indicator utiliza el módulo ST7701 para la pantalla, que emplea interfaces paralelas y ya está conectado a los pines del MCU ESP32S3.  
Para poder manejar la pantalla necesitas descargar la librería de Arduino desde [aquí](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip).

Después de descargar la librería, abre Arduino, ve al menú **Sketch** y elige **Add .ZIP Library**:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"/></div>

Añade la librería descargada al IDE.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/4.jpg"/></div>

Mientras tanto, en el mismo menú **Sketch** selecciona **Manage Libraries**, busca “PCA9535” y elige la de hidea kitai, luego instálala:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"/></div>

:::note
La librería PCA9535 es necesaria porque el pin CS del ST7701 está conectado al expansor I²C PCA9535, en concreto al Pin 4 del módulo.
:::

Cuando todas las librerías estén instaladas, sube este código para comprobar que la pantalla funciona en el entorno Arduino:

```cpp
#include <Arduino_GFX_Library.h>
#include <PCA95x5.h>
#define GFX_BL DF_GFX_BL // pin por defecto de retroiluminación, puedes reemplazar DF_GFX_BL por el pin real

/* Más declaraciones de dispositivo: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */
#if defined(DISPLAY_DEV_KIT)
Arduino_GFX *gfx = create_default_Arduino_GFX();
#else

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_SWSPI(
    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,
    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);

// Para pantalla rectangular de 4"
Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* polaridad hsync */, 10 /* hsync front porch */, 8 /* hsync pulse width */, 50 /* hsync back porch */,
    1 /* polaridad vsync */, 10 /* vsync front porch */, 8 /* vsync pulse width */, 20 /* vsync back porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    480 /* ancho */, 480 /* alto */, rgbpanel, 2 /* rotación */, true /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));

#endif
/*******************************************************************************
 * Fin de configuración Arduino_GFX
 ******************************************************************************/

void setup() {
  Serial.begin(115200);
  Serial.println("Ejemplo Arduino_GFX Hola Mundo");

#ifdef GFX_EXTRA_PRE_INIT
  GFX_EXTRA_PRE_INIT();
#endif

  if (!gfx->begin()) {
    Serial.println("¡gfx->begin() falló!");
  }
  gfx->fillScreen(BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif

  gfx->setCursor(10, 10);
  gfx->setTextColor(RED);
  gfx->println("Sensecap Indicator");

  delay(5000); // 5 segundos
}

void loop() {
  gfx->setCursor(random(gfx->width()), random(gfx->height()));
  gfx->setTextColor(random(0xffff), random(0xffff));
  gfx->setTextSize(random(6), random(6), random(2));
  gfx->println("Sensecap Indicator");

  delay(1000); // 1 segundo
}
```

Si todo va bien, el texto “Sensecap Indicator” se imprimirá aleatoriamente en la pantalla.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"/></div>

<h3>Leer los sensores conectados al chip RP2040</h3>

Como se explicó en la sección de preparación, todos los sensores están conectados al RP2040. Con el firmware por defecto, los datos de los sensores se envían al ESP32S3 vía UART. Para que el ESP32S3 lea esos datos necesitas instalar la librería **PacketSerial**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/7.jpg"/></div>

Tras instalarla, sube este código para recibir y mostrar los datos de los sensores en el ESP32S3:

```cpp
//
// Copyright (c) 2012 Christopher Baker <https://christopherbaker.net>
//
// SPDX-License-Identifier: MIT
//


#include <PacketSerial.h>

PacketSerial myPacketSerial;

#define RXD2 20
#define TXD2 19

#define PKT_TYPE_SENSOR_SCD41_CO2 0XB2
#define PKT_TYPE_SENSOR_SHT41_TEMP 0XB3
#define PKT_TYPE_SENSOR_SHT41_HUMIDITY 0XB4
#define PKT_TYPE_SENSOR_TVOC_INDEX 0XB5
#define DEBUG   0

void setup()
{
  // We begin communication with our PacketSerial object by setting the
  // communication speed in bits / second (baud).
  myPacketSerial.begin(115200);

  // If we want to receive packets, we must specify a packet handler function.
  // The packet handler is a custom function with a signature like the
  // onPacketReceived function below.
 
  Serial1.begin(115200, SERIAL_8N1, RXD2, TXD2);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);
}


void loop()
{
  // Do your program-specific loop() work here as usual.

  // The PacketSerial::update() method attempts to read in any incoming serial
  // data and emits received and decoded packets via the packet handler
  // function specified by the user in the void setup() function.
  //
  // The PacketSerial::update() method should be called once per loop(). Failure
  // to call the PacketSerial::update() frequently enough may result in buffer
  // serial overflows.
  myPacketSerial.update();

  // Check for a receive buffer overflow (optional).
  if (myPacketSerial.overflow())
  {
    // Send an alert via a pin (e.g. make an overflow LED) or return a
    // user-defined packet to the sender.
    //
    // Ultimately you may need to just increase your recieve buffer via the
    // template parameters (see the README.md).
  }
}



void onPacketReceived(const uint8_t *buffer, size_t size) {

  
  Serial.printf("<--- recv len:%d, data: ", size);


  if (size < 1) {
    return;
  }
  //byte serbytes[] = buffer[i];
  float dataval;
  switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SCD41_CO2:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("CO2 Level:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_TEMP:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("sht temp:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_HUMIDITY:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("sht humidity:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_TVOC_INDEX:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("TVOC INDEX:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
}
```

Haz clic y abre el Monitor Serial, luego ajusta la tasa de baudios a **115200**. Se mostrarán los datos de los sensores enviados desde el RP2040:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/8.jpg"/></div>

<h3>Combina ambos ejemplos y muestra los datos de los sensores en pantalla</h3>

Abre el menú de ejemplos en el IDE de Arduino, navega a **GFX library for Arduino** y selecciona el ejemplo **SI_displaysensordata**, luego súbelo al dispositivo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/9.jpg"/></div>

Si la carga se realiza con éxito, se mostrarán los datos de los sensores directamente en la pantalla del SenseCAP Indicator:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/10.jpg"/></div>

¡Felicidades! Ahora puedes desarrollar para el SenseCAP Indicator usando el entorno Arduino IDE.

<h2>¿Qué más puedes hacer?</h2>

1. Este tutorial abarca solo la **Fase UNO** del desarrollo. Una parte pendiente es la **pantalla táctil**, que aún no ha sido configurada.  
   Ya se han probado algunas librerías de Arduino para el módulo FT6336, pero **ninguna ha dado resultados exitosos**.
2. Esto se debe a que los pines **INT** y **RESET** del FT6336 están conectados al expansor I²C **PCA9535**, por lo que se requiere configurar estos pines manualmente desde la librería. Se espera abordar este aspecto en el futuro.

Mientras tanto, para entender mejor cómo usar la librería Arduino GFX, puedes visitar su repositorio oficial en GitHub:  
[https://github.com/moononournation/Arduino_GFX](https://github.com/moononournation/Arduino_GFX)

</TabItem>
</Tabs>

## Agradecimientos especiales

Gracias al usuario de GitHub [u4mzu4](https://github.com/u4mzu4) por el archivo de configuración **SWSPI** que permite soportar el SenseCAP Indicator.

Gracias a [LongDirtyAnimAlf](https://github.com/LongDirtyAnimAlf) por actualizar la librería Arduino del SenseCAP Indicator, incluyendo soporte para pantalla táctil.

## ✨ Proyecto de Contribución

Este proyecto forma parte del programa [Contributor Project de Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).  
Gracias a los esfuerzos de:

- [LongDirtyAnimAlf](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=indi&pane=issue&itemId=70900433)  
- [Hendra](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35925769)  
- [u4mzu4](https://github.com/u4mzu4)

Sus trabajos han sido integrados y exhibidos como parte del desarrollo del SenseCAP Indicator.

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte asistencia y asegurar que tu experiencia sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
