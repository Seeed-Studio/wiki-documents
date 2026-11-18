---
description: Conecta el Seeed Studio IoT Button a Home Assistant mediante Zigbee
title: Conecta el Seeed Studio IoT Button a Home Assistant mediante Zigbee
keywords:
  - Zigbee
  - IoT Button
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /seeed_iot_button_with_zigbee
sku: 113110044
last_update:
  date: 03/14/2025
  author: Citric
createdAt: '2025-03-14'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/seeed_iot_button_with_zigbee/
---

# Conecta el Seeed Studio IoT Button a Home Assistant mediante Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

En este tutorial, te mostraremos cómo conectar el Seeed Studio IoT Button a Home Assistant usando Zigbee. El Seeed Studio IoT Button incorpora un chip ESP32-C6 con funcionalidad Zigbee, lo que lo convierte en un dispositivo versátil para tu hogar inteligente. Aprenderás cómo flashear el firmware Zigbee, emparejarlo con Home Assistant e incluso personalizar el comportamiento del botón mediante desarrollo con Arduino.

## Materiales necesarios

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
      <th>Coordinador Zigbee (por ejemplo, Home Assistant Connect ZBT-1)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

El Seeed Studio IoT Button es un botón inteligente versátil con un chip ESP32-C6 integrado. Es un dispositivo completo e independiente que puede integrarse con Home Assistant mediante Zigbee para controlar varios dispositivos y activar automatizaciones. Gracias a su chip ESP32-C6, ofrece bajo consumo de energía y conectividad fiable.

## Descripción funcional (basada en el firmware más reciente)

- **Detección de múltiples acciones del botón**
  - Clic simple, doble y triple.
  - Pulsación larga corta (mantener presionado de 1 a 5 segundos).
  - Pulsación larga (mantener presionado > 5 segundos) activa un restablecimiento de fábrica de Zigbee.
  - Las pulsaciones del botón se informan en tiempo real mientras está conectado al coordinador Zigbee. Las pulsaciones registradas mientras está desconectado se informan después de la reconexión.

- **Cuatro endpoints Zigbee**
  - **Endpoint 10:** Un sensor binario principal que refleja el estado en tiempo real del botón físico (encendido cuando está presionado, apagado cuando se suelta).
  - **Endpoint 11:** Un interruptor virtual conmutado por un **clic simple**.
  - **Endpoint 12:** Un interruptor virtual conmutado por un **doble clic**.
  - **Endpoint 13:** Un interruptor virtual conmutado por una **pulsación larga corta**.

- **Supervisión de batería (solo IoT Button V2)**
  - Lee el voltaje de la batería mediante ADC y aplica un filtro de Media Móvil Exponencial (EMA) para obtener lecturas suaves y estables.
  - Informa tanto el voltaje (en unidades de 0,01 V) como el porcentaje de batería a Zigbee.
  - Un estado de batería baja (< 20 %) activa el LED indicador rojo.

- **Indicaciones mediante LED**
  - Un LED RGB WS2812 proporciona retroalimentación visual (efectos de respiración, parpadeo y arcoíris) para las acciones de clic.
  - Un LED azul de estado indica el estado de la conexión Zigbee.
  - Un LED rojo de estado (solo V2) indica una condición de batería baja.

- **Gestión de energía**
  - El dispositivo entra automáticamente en suspensión tras unos 30 segundos de inactividad cuando está conectado al coordinador Zigbee, o tras unos 2 minutos cuando está desconectado.
  - Utiliza light-sleep para la V1 y deep-sleep con retención de estado RTC para la V2, garantizando que no se pierdan los estados de pulsación del botón.
  - Se despierta instantáneamente de la suspensión al pulsar el botón.

## Desarrollo de firmware Zigbee personalizado con Arduino

Si quieres personalizar el comportamiento de tu IoT Button, puedes desarrollar tu propio firmware Zigbee usando Arduino.

### Paso 1: Configurar Arduino IDE para ESP32-C6

1. Instala la versión más reciente de Arduino IDE.
2. Añade la compatibilidad con placas ESP32:
    - Ve a **File > Preferences**.
    - Añade `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` en el campo "Additional Boards Manager URLs".
    - Ve a **Tools > Board > Boards Manager**.
    - Busca "esp32" e instala la versión más reciente (asegúrate de que sea la **versión 3.2.1 o superior**).

### Paso 2: Instalar las bibliotecas necesarias

El firmware del IoT Button utiliza la biblioteca `FastLED` para los efectos RGB y el SDK Zigbee de Espressif, que está incluido en el paquete ESP32 Arduino. La biblioteca `FastLED` se puede instalar a través del Administrador de Bibliotecas de Arduino.

1. Ve a **Sketch > Include Library > Manage Libraries...**.

2. Busca "FastLED" e instala la biblioteca de Daniel Garcia.

### Paso 3: Configurar Arduino IDE para el desarrollo con Zigbee

1. Selecciona la placa correcta:
    - **Tools > Board > ESP32 Arduino > XIAO ESP32C6**

2. Configura los ajustes de Zigbee:
    - **Tools > Zigbee Mode > Zigbee End Device**
    - **Tools > Partition Scheme > Zigbee 4MB with spiffs**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### Paso 4: Crear tu firmware personalizado

El nuevo firmware es un sketch de Arduino autónomo. Es compatible tanto con el hardware IoT Button V1 como V2, ofrece detección avanzada de eventos del botón (clic simple, doble, triple, pulsación corta/larga), supervisión de batería (V2), indicaciones LED enriquecidas e integración Zigbee robusta usando tareas FreeRTOS.

#### Selección de la versión de hardware

El código se compila para **IoT Button V2** de forma predeterminada. Para compilar para V1, debes descomentar la línea correspondiente al principio del código:

:::caution device version
Por favor, verifica la versión correcta del dispositivo. Todos los IoT Button disponibles actualmente en el mercado son V1.
:::

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```cpp
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
// FastLED 3.10.7+ declares the RISC-V interrupt helpers with FL_NO_EXCEPT
// (= noexcept on ESP) in riscv.hpp but defines them without it in the new
// riscv.cpp.hpp, so any RISC-V build (ESP32-C3/C6) fails with "declaration
// ... has a different exception specifier". The mismatch is compiled inside
// FastLED's own unity-build unit (src/fl/build/platforms+.cpp), so a #define
// here only fixes the sketch unit -- the empty FL_NO_EXCEPT override must
// also be injected for every unit via the compile command line; CI does this
// with -DFL_NO_EXCEPT= in build.extra_flags (.github/workflows/ci.yml).
// The define below is kept for documentation and IDE builds; drop both once
// the mismatch is fixed upstream (FastLED#4869).
#define FL_NO_EXCEPT
#include <FastLED.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/queue.h>
#include <esp_sleep.h>
#include "driver/rtc_io.h"
#include <Preferences.h>

// Release builds inject the published GitHub release tag as a token.
#define STRINGIFY_TOKEN(value) #value
#define STRINGIFY(value) STRINGIFY_TOKEN(value)
#ifndef FIRMWARE_VERSION
#define FIRMWARE_VERSION development
#endif

// Logging macro switch
#define ENABLE_LOGGING // Comment out to disable logging

#ifdef ENABLE_LOGGING
#define LOG_PRINTLN(x) Serial.println(x)
#define LOG_PRINTF(x, ...) Serial.printf(x, __VA_ARGS__)
#else
#define LOG_PRINTLN(x)
#define LOG_PRINTF(x, ...)
#endif

// #define IOT_BUTTON_V1  //Uncomment this line to select to compile the iot button v1 version
// #define IOT_BUTTON_V2  //Uncomment this line to select to compile the iot button v2 version

#if !defined(IOT_BUTTON_V1) && !defined(IOT_BUTTON_V2)
#define IOT_BUTTON_V2
#endif

#define BUTTON_PIN_BITMASK(GPIO) (1ULL << GPIO)

/* Hardware Configuration */
#if defined(IOT_BUTTON_V1)
const uint8_t BUTTON_PIN = 9;
const uint8_t BLUE_LED_PIN = 2;
const uint8_t RGB_ENABLE_PIN = 18;
const uint8_t RGB_PIN = 19;
const uint8_t NUM_RGBS = 1;
#elif defined(IOT_BUTTON_V2)
const uint8_t BUTTON_PIN = 2;
const uint8_t BLUE_LED_PIN = 3;
const uint8_t RED_LED_PIN = 14;
const uint8_t RGB_ENABLE_PIN = 18;
const uint8_t RGB_PIN = 19;
const uint8_t NUM_RGBS = 1;
const uint8_t BATTERY_ADC_PIN = 1;
const uint8_t BATTERY_ENABLE_PIN = 0;
const int SAMPLE_COUNT = 10;
const float MIN_VOLTAGE = 2.75;
const float MAX_VOLTAGE = 4.2;
const float ALPHA = 0.1; // Smoothing factor for EMA
#endif

/* Button Configuration */
const uint32_t MULTI_CLICK_TIME = 300;             // Maximum time between clicks for multi-click (ms)
const uint32_t SHORT_LONG_PRESS_TIME = 1000;       // Minimum time for short long press (1 second)
const uint32_t LONG_PRESS_TIME = 5000;             // Minimum time for long press (5 seconds)
const uint32_t DEBOUNCE_TIME = 20;                 // Debounce time (ms)
const uint32_t SLEEP_TIMEOUT_DISCONNECTED = 2 * 60 * 1000; // 2 minutes when disconnected (for configuration) (ms)
const uint32_t SLEEP_TIMEOUT_CONNECTED = 30 * 1000; // 30 seconds when connected (ms)
const uint32_t REPORT_SPACING_TIME = 200;           // Reports carry the value at send time, so hold each replayed value (ms)

/* LED Configuration */
CRGB rgbs[NUM_RGBS];

/* Button Events */
enum class ButtonEvent
{
  PRESS,            // Pressed
  RELEASE,          // Released
  SINGLE_CLICK,     // Single click
  DOUBLE_CLICK,     // Double click
  TRIPLE_CLICK,     // Triple click
  SHORT_LONG_PRESS, // Short long press (1-5 seconds)
  LONG_PRESS,       // Long press (>5 seconds)
  ZIGBEE_CONNECTED  // Zigbee (re)connected; queued with button events so switch reports stay in order
};

/* Zigbee Configuration */
#define BUTTON_ENDPOINT 10
#define SWITCH1_ENDPOINT 11
#define SWITCH2_ENDPOINT 12
#define SWITCH3_ENDPOINT 13

class VersionedZigbeeBinary : public ZigbeeBinary
{
public:
  explicit VersionedZigbeeBinary(uint8_t endpoint) : ZigbeeBinary(endpoint) {}

  bool setSoftwareBuildId(const char *version)
  {
    const size_t versionLength = strlen(version);
    if (versionLength > ZB_MAX_NAME_LENGTH)
    {
      return false;
    }

    esp_zb_attribute_list_t *basicCluster =
        esp_zb_cluster_list_get_cluster(_cluster_list, ESP_ZB_ZCL_CLUSTER_ID_BASIC, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE);
    if (basicCluster == nullptr)
    {
      return false;
    }

    char zclVersion[ZB_MAX_NAME_LENGTH + 2] = {};
    zclVersion[0] = static_cast<char>(versionLength);
    memcpy(zclVersion + 1, version, versionLength);
    return esp_zb_basic_cluster_add_attr(basicCluster, ESP_ZB_ZCL_ATTR_BASIC_SW_BUILD_ID, zclVersion) == ESP_OK;
  }
};

class InitialStateZigbeeBinary : public ZigbeeBinary
{
public:
  explicit InitialStateZigbeeBinary(uint8_t endpoint) : ZigbeeBinary(endpoint) {}

  bool setInitialBinaryInput(bool input)
  {
    esp_zb_attribute_list_t *binaryInputCluster =
        esp_zb_cluster_list_get_cluster(_cluster_list, ESP_ZB_ZCL_CLUSTER_ID_BINARY_INPUT, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE);
    return binaryInputCluster != nullptr &&
           esp_zb_cluster_update_attr(binaryInputCluster, ESP_ZB_ZCL_ATTR_BINARY_INPUT_PRESENT_VALUE_ID, &input) == ESP_OK;
  }
};

VersionedZigbeeBinary zbIoTButton(BUTTON_ENDPOINT);
InitialStateZigbeeBinary zbSwitch1(SWITCH1_ENDPOINT);
InitialStateZigbeeBinary zbSwitch2(SWITCH2_ENDPOINT);
InitialStateZigbeeBinary zbSwitch3(SWITCH3_ENDPOINT);
bool buttonStatus = false;
RTC_DATA_ATTR bool switch1Status = false;
RTC_DATA_ATTR bool switch2Status = false;
RTC_DATA_ATTR bool switch3Status = false;
// Last switch states reported to the network, replayed on reconnect so offline changes arrive as transitions
RTC_DATA_ATTR bool switch1Reported = false;
RTC_DATA_ATTR bool switch2Reported = false;
RTC_DATA_ATTR bool switch3Reported = false;

/* Global Variables */
QueueHandle_t eventQueue;

Preferences preferences;
float voltageOffset = 0; // Default voltage offset value (positive: subtract if measured high, negative: add if measured low)

uint32_t pressStartTime = 0;
uint32_t lastReleaseTime = 0;
uint8_t clickCount = 0;
bool longPressTriggered = false;
bool clickSequenceActive = false; // Tracks if a click sequence is in progress
TaskHandle_t clickTimeoutTaskHandle = NULL;
uint32_t lastActivityTime = 0;  // Tracks last button activity for sleep
volatile bool isAwake = true;   // Tracks device awake/sleep state
bool lastConnected = false;     // Track previous Zigbee connection state
bool zigbeeInitialized = false; // Track Zigbee initialization status
bool zigbeeConnected = false; // Track Zigbee connection status for battery sampling
volatile bool zigbeeStatesSynced = false; // Button and switch states replayed since the last (re)connect
uint32_t pendingButtonPresses = 0;        // Presses not yet reported, e.g. the one that woke the device
bool disableSleep = false; // Flag to disable automatic sleep

#if defined(IOT_BUTTON_V2)
// RTC variables for button state persistence
RTC_DATA_ATTR uint32_t pressStartTimeRTC = 0;
RTC_DATA_ATTR uint32_t lastReleaseTimeRTC = 0;
RTC_DATA_ATTR uint8_t clickCountRTC = 0;
RTC_DATA_ATTR bool longPressTriggeredRTC = false;
RTC_DATA_ATTR bool clickSequenceActiveRTC = false;
RTC_DATA_ATTR float lastBatteryPercentageRTC = 100.0;

float batteryPercentage = 100.0;
float emaVoltage = 0.0;

#endif

#if defined(IOT_BUTTON_V2)
/********************* Battery Functions **************************/
void measureBattery()
{
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  vTaskDelay(50 / portTICK_PERIOD_MS); // Increased delay for ADC stabilization and gate delay

  // Take multiple samples and compute average
  float adcSum = 0;
  for (int i = 0; i < SAMPLE_COUNT; i++)
  {
    adcSum += analogRead(BATTERY_ADC_PIN);
    vTaskDelay(5 / portTICK_PERIOD_MS); // Small delay between samples
  }
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  float adcAverage = adcSum / SAMPLE_COUNT;
  float voltage = (adcAverage / 4095.0) * 3.3 * 4.0 + voltageOffset; // Apply divider ratio and calibration offset
  if (voltage < 0) voltage = 0; // Prevent negative voltage

  if (voltage < MIN_VOLTAGE)
  {
    emaVoltage = 0.0;
    batteryPercentage = 0.0;
    lastBatteryPercentageRTC = 0.0;
    LOG_PRINTF("Battery voltage: %.2fV (too low or not connected), EMA voltage: %.2fV, Percentage: %.2f%%\n",
               voltage, emaVoltage, batteryPercentage);
  }
  else
  {
    // Update EMA
    if (emaVoltage == 0.0)
    {
      emaVoltage = voltage;
    }
    else
    {
      emaVoltage = ALPHA * voltage + (1 - ALPHA) * emaVoltage;
    }

    // Calculate battery percentage from emaVoltage
    // Lookup table algorithm: precise mapping of lithium battery discharge curve
    float localBatteryPercentage;
    if (emaVoltage >= 4.15f) localBatteryPercentage = 100.0f;
    else if (emaVoltage >= 4.0f) localBatteryPercentage = 96.3f + (emaVoltage - 4.0f) * 24.5f;
    else if (emaVoltage >= 3.7f) localBatteryPercentage = 53.3f + (emaVoltage - 3.7f) * 143.5f;
    else if (emaVoltage >= 3.5f) localBatteryPercentage = 6.1f + (emaVoltage - 3.5f) * 235.7f;
    else if (emaVoltage >= 3.0f) localBatteryPercentage = (emaVoltage - 3.0f) * 12.3f;
    else localBatteryPercentage = 0.0f;

    // Clamp to 0-100 range
    localBatteryPercentage = constrain(localBatteryPercentage, 0.0f, 100.0f);

    // Anti-jitter logic: ensure numerical stability
    if (localBatteryPercentage > lastBatteryPercentageRTC && (localBatteryPercentage - lastBatteryPercentageRTC) < 5.0f) {
    batteryPercentage = lastBatteryPercentageRTC;
    } else {
        batteryPercentage = localBatteryPercentage;
        lastBatteryPercentageRTC = batteryPercentage;
    }

    LOG_PRINTF("Battery voltage: %.2fV, EMA voltage: %.2fV, Percentage: %.2f%% (stored: %.2f%%)\n",
               voltage, emaVoltage, localBatteryPercentage, batteryPercentage);
  }
}
#endif

/********************* FreeRTOS Tasks **************************/
void breathingLedTask(void *pvParameters)
{
  LOG_PRINTLN("Breathing LED");
  uint8_t hue = random8();    // Random color hue
  for (int i = 0; i < 1; i++) // one breathing cycle
  {
    // Brighten
    for (int brightness = 0; brightness <= 255; brightness += 5)
    {
      rgbs[0] = CHSV(hue, 255, brightness);
      FastLED.show();
      vTaskDelay(20 / portTICK_PERIOD_MS);
    }
    // Dim
    for (int brightness = 255; brightness >= 0; brightness -= 5)
    {
      rgbs[0] = CHSV(hue, 255, brightness);
      FastLED.show();
      vTaskDelay(20 / portTICK_PERIOD_MS);
    }
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
  vTaskDelete(NULL);
}

void blinkLedTask(void *pvParameters)
{
  LOG_PRINTLN("Blink LED");
  uint8_t rand = random8();
  for (int i = 0; i < 2; i++)
  {
    rgbs[0] = CHSV(rand, 255, 255); // Random color
    FastLED.show();
    vTaskDelay(200 / portTICK_PERIOD_MS);
    rgbs[0] = CRGB::Black;
    FastLED.show();
    vTaskDelay(200 / portTICK_PERIOD_MS);
  }
  vTaskDelete(NULL);
}

void rainbowLedTask(void *pvParameters)
{
  LOG_PRINTLN("Rainbow LED");
  for (int hue = 0; hue < 128; hue += 10)
  {
    rgbs[0] = CHSV(hue, 255, 255);
    FastLED.show();
    vTaskDelay(100 / portTICK_PERIOD_MS);
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
  vTaskDelete(NULL);
}

void clickTimeoutTask(void *pvParameters)
{
  uint32_t localClickCount = clickCount;
  uint32_t localLastReleaseTime = lastReleaseTime;

  while (millis() - localLastReleaseTime < MULTI_CLICK_TIME)
  {
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  ButtonEvent event;
  switch (localClickCount)
  {
  case 1:
    event = ButtonEvent::SINGLE_CLICK;
    break;
  case 2:
    event = ButtonEvent::DOUBLE_CLICK;
    break;
  case 3:
    event = ButtonEvent::TRIPLE_CLICK;
    break;
  default:
    vTaskDelete(NULL);
    return;
  }
  xQueueSend(eventQueue, &event, 0);

  clickCount = 0;
  clickSequenceActive = false;
  clickTimeoutTaskHandle = NULL;

  vTaskDelete(NULL);
}

// --- Button Task Refactor ---
static bool debounceButton(bool currentState, uint32_t currentTime, uint32_t &lastDebounceTime)
{
  if (currentTime - lastDebounceTime < DEBOUNCE_TIME)
  {
    vTaskDelay(1 / portTICK_PERIOD_MS);
    return true;
  }
  return false;
}

static void handleButtonPress(uint32_t currentTime)
{
  pressStartTime = currentTime;
  ButtonEvent event = ButtonEvent::PRESS;
  xQueueSend(eventQueue, &event, 0);
  lastActivityTime = millis();

  if (clickSequenceActive && (currentTime - lastReleaseTime <= MULTI_CLICK_TIME))
  {
    clickCount++;
    if (clickTimeoutTaskHandle != NULL)
    {
      vTaskDelete(clickTimeoutTaskHandle);
      clickTimeoutTaskHandle = NULL;
    }
  }
  else
  {
    clickCount = 1;
    clickSequenceActive = true;
  }
  longPressTriggered = false;
}

static void handleButtonRelease(uint32_t currentTime)
{
  uint32_t pressDuration = currentTime - pressStartTime;
  ButtonEvent event = ButtonEvent::RELEASE;
  xQueueSend(eventQueue, &event, 0);
  lastActivityTime = millis();

  if (!longPressTriggered)
  {
    if (pressDuration >= LONG_PRESS_TIME)
    {
      event = ButtonEvent::LONG_PRESS;
      longPressTriggered = true;
      clickSequenceActive = false;
      clickCount = 0;
      xQueueSend(eventQueue, &event, 0);
      if (clickTimeoutTaskHandle != NULL)
      {
        vTaskDelete(clickTimeoutTaskHandle);
        clickTimeoutTaskHandle = NULL;
      }
    }
    else if (pressDuration >= SHORT_LONG_PRESS_TIME)
    {
      event = ButtonEvent::SHORT_LONG_PRESS;
      longPressTriggered = true;
      clickSequenceActive = false;
      clickCount = 0;
      xQueueSend(eventQueue, &event, 0);
      if (clickTimeoutTaskHandle != NULL)
      {
        vTaskDelete(clickTimeoutTaskHandle);
        clickTimeoutTaskHandle = NULL;
      }
    }
    else
    {
      lastReleaseTime = currentTime;
      if (clickTimeoutTaskHandle != NULL)
      {
        vTaskDelete(clickTimeoutTaskHandle);
        clickTimeoutTaskHandle = NULL;
      }
      xTaskCreate(clickTimeoutTask, "ClickTimeout", 2048, NULL, 1, &clickTimeoutTaskHandle);
    }
  }
}

static void checkLongPress(uint32_t currentTime)
{
  if (currentTime - pressStartTime >= LONG_PRESS_TIME)
  {
    ButtonEvent event = ButtonEvent::LONG_PRESS;
    longPressTriggered = true;
    clickSequenceActive = false;
    clickCount = 0;
    xQueueSend(eventQueue, &event, 0);
    lastActivityTime = millis();
    if (clickTimeoutTaskHandle != NULL)
    {
      vTaskDelete(clickTimeoutTaskHandle);
      clickTimeoutTaskHandle = NULL;
    }
  }
}

void buttonTask(void *pvParameters)
{
  uint32_t lastDebounceTime = 0;
  bool lastState = false;

  // Check if woken up by button press
  if (esp_sleep_get_wakeup_cause() == ESP_SLEEP_WAKEUP_EXT1)
  {
    bool currentState = (digitalRead(BUTTON_PIN) == LOW);
    if (currentState)
    {
      handleButtonPress(millis());
    }
  }

  while (1)
  {
    bool currentState = (digitalRead(BUTTON_PIN) == LOW);
    uint32_t currentTime = millis();

    if (debounceButton(currentState, currentTime, lastDebounceTime))
      continue;

    if (currentState != lastState)
    {
      lastDebounceTime = currentTime;
      lastState = currentState;
      if (currentState)
      {
        handleButtonPress(currentTime);
      }
      else
      {
        handleButtonRelease(currentTime);
      }
    }
    else if (currentState && !longPressTriggered)
    {
      checkLongPress(currentTime);
    }

    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
}

static void reportSwitchState(ZigbeeBinary &zbSwitch, bool state, bool &reportedState)
{
  zbSwitch.setBinaryInput(state);
  if (zbSwitch.reportBinaryInput())
  {
    reportedState = state;
  }
}

void mainTask(void *pvParameters)
{
  ButtonEvent event;
  while (1)
  {
    if (xQueueReceive(eventQueue, &event, portMAX_DELAY) == pdTRUE)
    {
      switch (event)
      {
      case ButtonEvent::PRESS:
        if (buttonStatus == false)
        {
          buttonStatus = true;
          LOG_PRINTLN("Button Pressed");
          if (zigbeeStatesSynced && Zigbee.connected())
          {
            zbIoTButton.setBinaryInput(buttonStatus);
            zbIoTButton.reportBinaryInput();
          }
        }
        break;

      case ButtonEvent::RELEASE:
        if (buttonStatus == true)
        {
          buttonStatus = false;
          LOG_PRINTLN("Button Released");
          if (zigbeeStatesSynced && Zigbee.connected())
          {
            zbIoTButton.setBinaryInput(buttonStatus);
            zbIoTButton.reportBinaryInput();
          }
          else
          {
            pendingButtonPresses++;
          }
        }
        break;

      case ButtonEvent::SINGLE_CLICK:
        LOG_PRINTLN("Single Click");
        switch1Status = !switch1Status;
        if (zigbeeStatesSynced && Zigbee.connected())
        {
          reportSwitchState(zbSwitch1, switch1Status, switch1Reported);
        }
        xTaskCreate(breathingLedTask, "BreathingLed", 2048, NULL, 1, NULL);
        break;

      case ButtonEvent::DOUBLE_CLICK:
        LOG_PRINTLN("Double Click");
        switch2Status = !switch2Status;
        if (zigbeeStatesSynced && Zigbee.connected())
        {
          reportSwitchState(zbSwitch2, switch2Status, switch2Reported);
        }
        xTaskCreate(blinkLedTask, "BlinkLed", 2048, NULL, 1, NULL);
        break;

      case ButtonEvent::TRIPLE_CLICK:
        LOG_PRINTLN("Triple Click");
        if (zigbeeInitialized && Zigbee.connected())
        {
          // Add any specific Zigbee action here if needed
        }
        break;

      case ButtonEvent::SHORT_LONG_PRESS:
        LOG_PRINTLN("Short Long Press");
        switch3Status = !switch3Status;
        if (zigbeeStatesSynced && Zigbee.connected())
        {
          reportSwitchState(zbSwitch3, switch3Status, switch3Reported);
        }
        xTaskCreate(rainbowLedTask, "RainbowLed", 2048, NULL, 1, NULL);
        break;

      case ButtonEvent::LONG_PRESS:
        LOG_PRINTLN("Long Press\nReset Zigbee");
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        if (zigbeeInitialized)
        {
          Zigbee.factoryReset();
        }
        break;

      case ButtonEvent::ZIGBEE_CONNECTED:
      {
        // Replay last reported states first so offline changes, like the wake click, arrive as transitions
        zbSwitch1.setBinaryInput(switch1Reported);
        zbSwitch1.reportBinaryInput();
        zbSwitch2.setBinaryInput(switch2Reported);
        zbSwitch2.reportBinaryInput();
        zbSwitch3.setBinaryInput(switch3Reported);
        zbSwitch3.reportBinaryInput();
        bool switchesChanged =
            switch1Status != switch1Reported || switch2Status != switch2Reported || switch3Status != switch3Reported;
        if (pendingButtonPresses > 0 || switchesChanged)
        {
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
        }
        // Presses come before the switch changes they caused, matching the order while connected
        for (; pendingButtonPresses > 0; pendingButtonPresses--)
        {
          zbIoTButton.setBinaryInput(true);
          zbIoTButton.reportBinaryInput();
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
          zbIoTButton.setBinaryInput(false);
          zbIoTButton.reportBinaryInput();
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
        }
        if (buttonStatus)
        {
          zbIoTButton.setBinaryInput(true);
          zbIoTButton.reportBinaryInput();
        }
        if (switch1Status != switch1Reported)
        {
          reportSwitchState(zbSwitch1, switch1Status, switch1Reported);
        }
        if (switch2Status != switch2Reported)
        {
          reportSwitchState(zbSwitch2, switch2Status, switch2Reported);
        }
        if (switch3Status != switch3Reported)
        {
          reportSwitchState(zbSwitch3, switch3Status, switch3Reported);
        }
        if (switchesChanged)
        {
          // Keep a click queued during the sync from replacing these values before they are sent
          vTaskDelay(REPORT_SPACING_TIME / portTICK_PERIOD_MS);
        }
        zigbeeStatesSynced = true;
        break;
      }
      }
    }
  }
}

#if defined(IOT_BUTTON_V1)
void ledTask(void *pvParameters)
{
  pinMode(BLUE_LED_PIN, OUTPUT);
  while (1)
  {
    if (isAwake)
    {
      if (!zigbeeInitialized || !Zigbee.connected()) // Blink when not connected or not initialized
      {
        digitalWrite(BLUE_LED_PIN, LOW); // On
        vTaskDelay(500 / portTICK_PERIOD_MS);
        digitalWrite(BLUE_LED_PIN, HIGH); // Off
        vTaskDelay(500 / portTICK_PERIOD_MS);
      }
      else
      {
        digitalWrite(BLUE_LED_PIN, LOW); // On when connected
      }
    }
    else
    {
      digitalWrite(BLUE_LED_PIN, HIGH); // Off during sleep
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
}
#elif defined(IOT_BUTTON_V2)
void ledTask(void *pvParameters)
{
  pinMode(BLUE_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  bool ledState = false;

  while (1)
  {
    if (isAwake)
    {
      bool isLowBattery = (batteryPercentage < 20.0);
      bool isConnected = zigbeeInitialized && Zigbee.connected();
      uint8_t activeLedPin = isLowBattery ? RED_LED_PIN : BLUE_LED_PIN;
      uint8_t inactiveLedPin = isLowBattery ? BLUE_LED_PIN : RED_LED_PIN;

      if (isConnected)
      {
        digitalWrite(activeLedPin, LOW);
        digitalWrite(inactiveLedPin, HIGH);
      }
      else
      {
        ledState = !ledState;
        digitalWrite(activeLedPin, ledState ? LOW : HIGH);
        digitalWrite(inactiveLedPin, HIGH);
      }
    }
    else
    {
      digitalWrite(BLUE_LED_PIN, HIGH);
      digitalWrite(RED_LED_PIN, HIGH);
    }
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}
#endif

#if defined(IOT_BUTTON_V2)
void batteryTask(void *pvParameters)
{
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);

  while (1)
  {
    measureBattery();
    if (zigbeeInitialized && Zigbee.connected())
    {
      zbIoTButton.setBatteryVoltage((uint8_t)(emaVoltage * 100)); // Unit: 0.01V
      zbIoTButton.setBatteryPercentage((uint8_t)batteryPercentage);
      zbIoTButton.reportBatteryPercentage();
    }
    vTaskDelay(30000 / portTICK_PERIOD_MS); // Check every 30 seconds
  }
}
#endif

void sleepTask(void *pvParameters)
{
  while (1)
  {
    uint32_t sleepTimeout = zigbeeConnected ? SLEEP_TIMEOUT_CONNECTED : SLEEP_TIMEOUT_DISCONNECTED;
    if (isAwake && !disableSleep && (millis() - lastActivityTime > sleepTimeout))
    {
      LOG_PRINTLN("Entering sleep due to inactivity");
#if defined(IOT_BUTTON_V1)
      isAwake = false;
      digitalWrite(BLUE_LED_PIN, HIGH);
      esp_sleep_enable_gpio_wakeup();
      digitalWrite(BLUE_LED_PIN, HIGH); // Turn off LED
      gpio_wakeup_enable((gpio_num_t)BUTTON_PIN, GPIO_INTR_LOW_LEVEL);
      digitalWrite(RGB_ENABLE_PIN, LOW);
      esp_light_sleep_start();
      digitalWrite(RGB_ENABLE_PIN, HIGH);
      LOG_PRINTLN("Woke up from light sleep");
      isAwake = true;
      digitalWrite(BLUE_LED_PIN, LOW); // Turn on LED
#elif defined(IOT_BUTTON_V2)
      // Save button state to RTC memory
      pressStartTimeRTC = pressStartTime;
      lastReleaseTimeRTC = lastReleaseTime;
      clickCountRTC = clickCount;
      longPressTriggeredRTC = longPressTriggered;
      clickSequenceActiveRTC = clickSequenceActive;

      digitalWrite(BLUE_LED_PIN, HIGH);
      digitalWrite(RED_LED_PIN, HIGH);
      digitalWrite(RGB_PIN, LOW);
      digitalWrite(RGB_ENABLE_PIN, LOW);
      static gpio_num_t WAKEUP_GPIO = (gpio_num_t)BUTTON_PIN;
      esp_sleep_enable_ext1_wakeup_io(BUTTON_PIN_BITMASK(WAKEUP_GPIO), ESP_EXT1_WAKEUP_ANY_LOW);
      esp_deep_sleep_start();
#endif
    }
    vTaskDelay(10000 / portTICK_PERIOD_MS); // Check every 10 seconds
  }
}

/********************* Zigbee Functions **************************/
void onZigbeeConnected()
{
  if (!zigbeeInitialized)
  {
    return;
  }
#if defined(IOT_BUTTON_V2)
  measureBattery();                                           // Ensure latest battery data
  zbIoTButton.setBatteryVoltage((uint8_t)(emaVoltage * 100)); // Unit: 0.01V
  zbIoTButton.setBatteryPercentage((uint8_t)batteryPercentage);
  zbIoTButton.reportBatteryPercentage();
#endif
  ButtonEvent event = ButtonEvent::ZIGBEE_CONNECTED;
  xQueueSend(eventQueue, &event, portMAX_DELAY);
}

void zigbeeSetupTask(void *pvParameters)
{
  zbIoTButton.addBinaryInput();
  zbIoTButton.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbIoTButton.setBinaryInputDescription("Button");
  zbSwitch1.addBinaryInput();
  zbSwitch1.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbSwitch1.setBinaryInputDescription("Switch1");
  zbSwitch2.addBinaryInput();
  zbSwitch2.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbSwitch2.setBinaryInputDescription("Switch2");
  zbSwitch3.addBinaryInput();
  zbSwitch3.setBinaryInputApplication(BINARY_INPUT_APPLICATION_TYPE_SECURITY_MOTION_DETECTION);
  zbSwitch3.setBinaryInputDescription("Switch3");
  zbSwitch1.setInitialBinaryInput(switch1Reported);
  zbSwitch2.setInitialBinaryInput(switch2Reported);
  zbSwitch3.setInitialBinaryInput(switch3Reported);

  // Set Zigbee device information
#if defined(IOT_BUTTON_V1)
  zbIoTButton.setManufacturerAndModel("Seeed Studio", "IoT_Button");
#elif defined(IOT_BUTTON_V2)
  zbIoTButton.setManufacturerAndModel("Seeed Studio", "IoT Button V2");
  zbIoTButton.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);
#endif
  if (!zbIoTButton.setSoftwareBuildId(STRINGIFY(FIRMWARE_VERSION)))
  {
    LOG_PRINTLN("Failed to set Zigbee software build ID");
  }

  // Add endpoint to Zigbee Core
  Zigbee.addEndpoint(&zbIoTButton);
  Zigbee.addEndpoint(&zbSwitch1);
  Zigbee.addEndpoint(&zbSwitch2);
  Zigbee.addEndpoint(&zbSwitch3);
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 10000;

  Zigbee.setTimeout(10000); // Set timeout for Zigbee Begin to 10s (default is 30s)
  LOG_PRINTLN("Starting Zigbee...");
  if (!Zigbee.begin(&zigbeeConfig, false))
  {
    LOG_PRINTLN("Zigbee failed to start!");
    LOG_PRINTLN("Please try holding down the 5S key for a long time to reset zigbee");
    zigbeeInitialized = false;
  }
  else
  {
    LOG_PRINTLN("Zigbee started successfully!");
    zigbeeInitialized = true;
  }

  vTaskDelete(NULL); // Terminate the task after completion
}

/********************* Arduino Setup **************************/
void setup()
{
  Serial.begin(115200);

  LOG_PRINTLN("Zigbee IoT Button Starting...");

  // Initialize NVS and load voltage offset
  preferences.begin("iot_button", false);
  voltageOffset = preferences.getFloat("voltage_offset", 0);
  LOG_PRINTF("Loaded voltage offset: %.2f\n", voltageOffset);
#if defined(IOT_BUTTON_V2)
  // Restore button state from RTC memory
  pressStartTime = pressStartTimeRTC;
  lastReleaseTime = lastReleaseTimeRTC;
  clickCount = clickCountRTC;
  longPressTriggered = longPressTriggeredRTC;
  clickSequenceActive = clickSequenceActiveRTC;
#endif

  // Initialize button pin
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  pinMode(RGB_ENABLE_PIN, OUTPUT);
  digitalWrite(RGB_ENABLE_PIN, HIGH);
#if defined(IOT_BUTTON_V2)
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
#endif

  // Initialize LED
  FastLED.addLeds<WS2812, RGB_PIN, GRB>(rgbs, NUM_RGBS);
  FastLED.setBrightness(50);

  // Create event queue
  eventQueue = xQueueCreate(10, sizeof(ButtonEvent));
  if (eventQueue == NULL)
  {
    LOG_PRINTLN("Failed to create event queue!");
    ESP.restart();
  }

#if defined(IOT_BUTTON_V2)
  // Check if woken up by button press and handle immediately
  if (esp_sleep_get_wakeup_cause() == ESP_SLEEP_WAKEUP_EXT1)
  {
    uint32_t currentTime = millis();
    if (digitalRead(BUTTON_PIN) == LOW)
    {
      handleButtonPress(currentTime);
    }
  }
#endif

  // Create FreeRTOS tasks
  xTaskCreate(buttonTask, "ButtonTask", 2048, NULL, 4, NULL);
  xTaskCreate(ledTask, "LedTask", 1024, NULL, 0, NULL);
  xTaskCreate(mainTask, "MainTask", 2048, NULL, 3, NULL);
  xTaskCreate(sleepTask, "SleepTask", 2048, NULL, 2, NULL);
  xTaskCreate(zigbeeSetupTask, "ZigbeeSetup", 2048, NULL, 1, NULL);
#if defined(IOT_BUTTON_V2)
  xTaskCreate(batteryTask, "BatteryTask", 2048, NULL, 1, NULL);
#endif
}

/********************* Serial Command Handling **************************/
void handleSerialCommand(String command)
{
  if (command.startsWith("set_offset "))
  {
    String valueStr = command.substring(11);
    float newOffset = valueStr.toFloat();
    voltageOffset = newOffset;
    preferences.putFloat("voltage_offset", voltageOffset);
    LOG_PRINTF("Voltage offset set to: %.2f\n", voltageOffset);
  }
  else if (command == "get_offset")
  {
    LOG_PRINTF("Current voltage offset: %.2f\n", voltageOffset);
  }
  else if (command == "disable_sleep")
  {
    disableSleep = true;
    Serial.println("Automatic sleep disabled");
  }
  else if (command == "enable_sleep")
  {
    disableSleep = false;
    Serial.println("Automatic sleep enabled");
  }
  else if (command == "help")
  {
    Serial.println("Available commands:");
    Serial.println("  set_offset <value>  - Set voltage calibration offset (e.g., set_offset -0.22 if measured voltage is high)");
    Serial.println("                        Positive value: subtract from measured voltage");
    Serial.println("                        Negative value: add to measured voltage");
    Serial.println("  get_offset          - Get current voltage offset");
    Serial.println("  disable_sleep       - Disable automatic sleep mode");
    Serial.println("  enable_sleep        - Enable automatic sleep mode");
    Serial.println("  help                - Show this help");
  }
  else
  {
    Serial.println("Unknown command. Type 'help' for available commands.");
  }
}

/********************* Arduino Loop **************************/
void loop()
{
  if (zigbeeInitialized)
  {
    bool currentConnected = Zigbee.connected();
    if (currentConnected && !lastConnected)
    {
      LOG_PRINTLN("Zigbee connected!");
      zigbeeConnected = true;
      onZigbeeConnected();
    }
    else if (!currentConnected && lastConnected)
    {
      LOG_PRINTLN("Zigbee disconnected!");
      zigbeeConnected = false;
      zigbeeStatesSynced = false;
    }
    lastConnected = currentConnected;
    if (!currentConnected)
    {
      LOG_PRINTLN("Zigbee not connected, retrying...");
      vTaskDelay(5000 / portTICK_PERIOD_MS);
    }
    else
    {
      vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
  }
  else
  {
    vTaskDelay(1000 / portTICK_PERIOD_MS); // Keep loop running even if Zigbee fails
  }

  // Handle serial commands
  if (Serial.available())
  {
    String command = Serial.readStringUntil('\n');
    command.trim();
    handleSerialCommand(command);
  }
}
```

</details>

Es posible que la documentación no esté actualizada con las últimas modificaciones del código; también puedes hacer clic en el botón de abajo para obtener los procedimientos más recientes.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/Seeed_IoT_Button_Zigbee/Seeed_IoT_Button_Zigbee.ino" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Haz clic aquí 🖱️</font></span></strong>
    </a>
</div>

### Paso 5: Carga y prueba tu firmware

1. Conecta tu IoT Button al ordenador mediante USB.
2. Selecciona el puerto correcto en Arduino IDE.
3. Haz clic en el botón **Upload**.
4. Abre el **Serial Monitor** (baud rate 115200) para ver la información de depuración.
5. Una vez que finalice el flasheo, el botón estará listo para emparejarse.

### Paso 6: Configura Zigbee en Home Assistant

Antes de emparejar tu IoT Button, necesitas configurar un coordinador Zigbee en Home Assistant:

1. **Instala un coordinador Zigbee**: Conecta un coordinador Zigbee como el Home Assistant Connect ZBT-1 a tu servidor de Home Assistant.
2. **Configura Zigbee Home Automation (ZHA)**:
    - Ve a **Settings > Devices & Services**.
    - Haz clic en "**Add Integration**" y busca "**Zigbee Home Automation**".
    - Sigue las indicaciones para configurar ZHA con tu coordinador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7: Empareja el IoT Button con Home Assistant

1. En Home Assistant, ve a **Settings > Devices & Services > Zigbee Home Automation**.
2. Haz clic en tu dispositivo coordinador Zigbee.
3. Haz clic en "**Add Device**" para poner el coordinador en modo de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4. Pulsa el botón de tu IoT Button una vez para activarlo e iniciar el emparejamiento. Si no se empareja, intenta mantener pulsado el botón durante más de 5 segundos para activar un restablecimiento de fábrica, lo que también lo pondrá en modo de emparejamiento.
5. Home Assistant debería detectar el IoT Button como "**Seeed Studio IoT_Button**".
6. Sigue las indicaciones para completar el proceso de emparejamiento. Verás un dispositivo con múltiples entidades (un sensor binario y tres interruptores).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 8: Crea automatizaciones en Home Assistant

Una vez emparejado, puedes crear automatizaciones basadas en las acciones del botón. El firmware expone diferentes tipos de clic como interruptores separados, lo que simplifica la automatización.

1. Ve a **Settings > Automations & Scenes > Create Automation**.
2. Selecciona "**Device**" como tipo de disparador.
3. Busca tu IoT Button en la lista de dispositivos.
4. Selecciona el disparador deseado de la lista. ZHA expondrá los diferentes clics como acciones del dispositivo, por ejemplo:
    - "Single press" (del interruptor virtual en el Endpoint 11)
    - "Double press" (del interruptor virtual en el Endpoint 12)
    - "Long press" (del interruptor virtual en el Endpoint 13)
5. Configura las acciones que quieres que se ejecuten cuando se pulse el botón.
6. Guarda la automatización.

Ejemplo de automatización en YAML de Home Assistant para conmutar una luz con un **doble clic**:

```yaml
alias: IoT Button Double Click - Toggle Living Room Light
description: ""
trigger:
  - platform: device
    domain: zha
    device_id: YOUR_DEVICE_ID_HERE # Replace with your button's device ID
    type: "remote_button_double_press" # The exact type may vary, select it from the UI
action:
  - service: light.toggle
    target:
      entity_id: light.living_room
mode: single
```

## Conclusión

El Seeed Studio IoT Button con funcionalidad Zigbee ofrece una forma versátil y de bajo consumo para controlar tu hogar inteligente. Ya sea que utilices el firmware precompilado o desarrolles tu propia solución personalizada, el botón proporciona una interfaz sencilla para activar automatizaciones complejas en Home Assistant.

Al aprovechar las capacidades Zigbee integradas del ESP32-C6, el IoT Button puede funcionar durante largos periodos con alimentación por batería, manteniendo al mismo tiempo una conectividad fiable con tu ecosistema de hogar inteligente.

## Solución de problemas

### P1: ¿Por qué mi dispositivo sigue desconectándose y no puede conectarse a Internet después de reemplazar la batería? Puedo confirmar que la batería está cargada

Después de que se haya retirado la batería, debido a la estrategia de protección del chip de la batería 18650, es necesario activarla un poco con un cable de alimentación USB cargado para que funcione correctamente.

## Recursos

- **[GITHUB]** [Repositorio de Github de Seeed IoT Button](https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button)
- **[PDF]** [PDF del esquema (SCH) de Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

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
