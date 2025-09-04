---
description: Conectar el Botón IoT de Seeed Studio a Home Assistant vía Zigbee
title: Conectar el Botón IoT de Seeed Studio a Home Assistant vía Zigbee
keywords:
  - Zigbee
  - IoT Button
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /es/seeed_iot_button_with_zigbee
last_update:
  date: 03/14/2025
  author: Citric
---

# Conectar el Botón IoT de Seeed Studio a Home Assistant vía Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

En este tutorial, te mostraremos cómo conectar el Botón IoT de Seeed Studio a Home Assistant usando Zigbee. El Botón IoT de Seeed Studio cuenta con un chip ESP32-C6 integrado con funcionalidad Zigbee, lo que lo convierte en un dispositivo versátil para tu hogar inteligente. Aprenderás cómo flashear el firmware Zigbee, emparejarlo con Home Assistant, e incluso personalizar el comportamiento del botón a través del desarrollo con Arduino.

## Materiales Requeridos

<div class="table-center">
  <table align="center">
    <tr>
      <th>Botón IoT de Seeed Studio</th>
      <th>Coordinador Zigbee (ej., Home Assistant Connect ZBT-1)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

El Seeed Studio IoT Button es un botón inteligente versátil con un chip ESP32-C6 integrado. Es un dispositivo completo e independiente que puede integrarse con Home Assistant a través de Zigbee para controlar varios dispositivos y activar automatizaciones. Con su chip ESP32-C6, ofrece bajo consumo de energía y conectividad confiable.

## Descripción Funcional (basada en el firmware más reciente)

- **Detección de botón multi-acción**
  - Clic simple, doble y triple.
  - Pulsación larga corta (mantener presionado por 1-5 segundos).
  - Pulsación larga (mantener presionado por > 5 segundos) activa un restablecimiento de fábrica de Zigbee.
  - Los eventos de presión y liberación inmediatos se reportan para automatizaciones en tiempo real.

- **Cuatro Endpoints de Zigbee**
  - **Endpoint 10:** Un sensor binario principal que refleja el estado en tiempo real del botón físico (encendido cuando está presionado, apagado cuando está liberado).
  - **Endpoint 11:** Un interruptor virtual alternado por un **clic simple**.
  - **Endpoint 12:** Un interruptor virtual alternado por un **doble clic**.
  - **Endpoint 13:** Un interruptor virtual alternado por una **pulsación larga corta**.

- **Monitoreo de Batería (solo IoT Button V2)**
  - Lee el voltaje de la batería a través de ADC y aplica un filtro de Media Móvil Exponencial (EMA) para lecturas suaves y estables.
  - Reporta tanto el voltaje (en unidades de 0.01V) como el porcentaje de batería a Zigbee.
  - Un estado de batería baja (< 20%) activa el indicador LED rojo.

- **Retroalimentación LED**
  - Un LED RGB WS2812 proporciona retroalimentación visual (respiración, parpadeo, efectos arcoíris) para acciones de clic.
  - Un LED de estado azul indica el estado de conexión Zigbee.
  - Un LED de estado rojo (solo V2) indica una condición de batería baja.

- **Gestión de Energía**
  - Entra automáticamente en modo de suspensión después de 2 minutos de inactividad para conservar energía.
  - Utiliza suspensión ligera para V1 y suspensión profunda con retención de estado RTC para V2, asegurando que los estados de clic del botón no se pierdan.
  - Se despierta instantáneamente de la suspensión al presionar el botón.

## Desarrollando Firmware Zigbee Personalizado con Arduino

Si deseas personalizar el comportamiento de tu IoT Button, puedes desarrollar tu propio firmware Zigbee usando Arduino.

### Paso 1: Configurar Arduino IDE para ESP32-C6

1.  Instala la versión más reciente de Arduino IDE.
2.  Añade soporte para placas ESP32:
    -   Ve a **Archivo > Preferencias**.
    -   Añade `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` al campo "URLs adicionales del Gestor de Tarjetas".
    -   Ve a **Herramientas > Placa > Gestor de Tarjetas**.
    -   Busca "esp32" e instala la versión más reciente (asegúrate de que sea **versión 3.2.1 o superior**).

### Paso 2: Instalar Librerías Requeridas

El firmware del IoT Button usa la librería `FastLED` para efectos RGB y el SDK Zigbee de Espressif, que está incluido en el paquete Arduino ESP32. La librería `FastLED` puede instalarse a través del Gestor de Librerías de Arduino.

1.  Ve a **Programa > Incluir Librería > Gestionar Librerías...**.

2.  Busca "FastLED" e instala la librería de Daniel Garcia.

### Paso 3: Configurar Arduino IDE para Desarrollo Zigbee

1.  Selecciona la placa correcta:
    -   **Herramientas > Placa > ESP32 Arduino > ESP32C6 Dev Module**

2.  Configura los ajustes de Zigbee:
    -   **Herramientas > Modo Zigbee > Dispositivo Final Zigbee**
    -   **Herramientas > Esquema de Partición > Zigbee 4MB con spiffs**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### Paso 4: Crear Tu Firmware Personalizado

El nuevo firmware es un sketch de Arduino autocontenido. Soporta tanto el hardware IoT Button V1 como V2, detección avanzada de eventos de botón (clic simple, doble, triple, pulsación corta/larga), monitoreo de batería (V2), retroalimentación LED rica, e integración robusta de Zigbee usando tareas de FreeRTOS.

#### Selección de Versión de Hardware

El código se compila para **IoT Button V2** por defecto. Para compilar para V1, debes descomentar la línea correspondiente en la parte superior del código:

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```cpp
// #define IOT_BUTTON_V1  // Uncomment this line to select to compile the iot button v1 version
#define IOT_BUTTON_V2  // Comment out or remove this line if compiling for V1
```

#### Firmware de Ejemplo

```cpp
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
#include <FastLED.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/queue.h>
#include <esp_sleep.h>
#include "driver/rtc_io.h"

// Logging macro switch
#define ENABLE_LOGGING  // Comment out to disable logging

#ifdef ENABLE_LOGGING
#define LOG_PRINTLN(x) Serial.println(x)
#define LOG_PRINTF(x, ...) Serial.printf(x, __VA_ARGS__)
#else
#define LOG_PRINTLN(x)
#define LOG_PRINTF(x, ...)
#endif

// #define IOT_BUTTON_V1  //Uncomment this line to select to compile the iot button v1 version
#define IOT_BUTTON_V2  //Uncomment this line to select to compile the iot button v2 version

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
const uint32_t INACTIVITY_TIMEOUT = 2 * 60 * 1000; // 2 minutes inactivity timeout (ms)

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
  LONG_PRESS        // Long press (>5 seconds)
};

/* Zigbee Configuration */
#define BUTTON_ENDPOINT 10
#define SWITCH1_ENDPOINT 11
#define SWITCH2_ENDPOINT 12
#define SWITCH3_ENDPOINT 13
ZigbeeBinary zbIoTButton = ZigbeeBinary(BUTTON_ENDPOINT);
ZigbeeBinary zbSwitch1 = ZigbeeBinary(SWITCH1_ENDPOINT);
ZigbeeBinary zbSwitch2 = ZigbeeBinary(SWITCH2_ENDPOINT);
ZigbeeBinary zbSwitch3 = ZigbeeBinary(SWITCH3_ENDPOINT);
bool buttonStatus = false;
RTC_DATA_ATTR bool switch1Status = false;
RTC_DATA_ATTR bool switch2Status = false;
RTC_DATA_ATTR bool switch3Status = false;

/* Global Variables */
QueueHandle_t eventQueue;

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

#if defined(IOT_BUTTON_V2)
// RTC variables for button state persistence
RTC_DATA_ATTR uint32_t pressStartTimeRTC = 0;
RTC_DATA_ATTR uint32_t lastReleaseTimeRTC = 0;
RTC_DATA_ATTR uint8_t clickCountRTC = 0;
RTC_DATA_ATTR bool longPressTriggeredRTC = false;
RTC_DATA_ATTR bool clickSequenceActiveRTC = false;

float emaVoltage = 0.0;
float batteryPercentage = 100.0;
#endif

void IRAM_ATTR button_isr()
{
  portYIELD_FROM_ISR(xTaskResumeFromISR(clickTimeoutTaskHandle));
}

void setupHardware()
{
  Serial.begin(115200);
#if defined(IOT_BUTTON_V1)
  pinMode(BLUE_LED_PIN, OUTPUT);
  digitalWrite(BLUE_LED_PIN, LOW);
  pinMode(RGB_ENABLE_PIN, OUTPUT);
  digitalWrite(RGB_ENABLE_PIN, HIGH);
  FastLED.addLeds<WS2812, RGB_PIN, GRB>(rgbs, NUM_RGBS);
#elif defined(IOT_BUTTON_V2)
  pinMode(BLUE_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  digitalWrite(BLUE_LED_PIN, LOW);
  digitalWrite(RED_LED_PIN, LOW);
  pinMode(RGB_ENABLE_PIN, OUTPUT);
  digitalWrite(RGB_ENABLE_PIN, HIGH);
  FastLED.addLeds<WS2812, RGB_PIN, GRB>(rgbs, NUM_RGBS);
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  analogReadResolution(12);
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);
#endif
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void enterSleep()
{
  isAwake = false;
  LOG_PRINTLN("Entering sleep mode...");
  Serial.flush();
#if defined(IOT_BUTTON_V2)
  // Save button state to RTC memory before deep sleep
  pressStartTimeRTC = pressStartTime;
  lastReleaseTimeRTC = lastReleaseTime;
  clickCountRTC = clickCount;
  longPressTriggeredRTC = longPressTriggered;
  clickSequenceActiveRTC = clickSequenceActive;
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK(BUTTON_PIN), ESP_EXT1_WAKEUP_ALL_LOW);
  esp_deep_sleep_start();
#elif defined(IOT_BUTTON_V1)
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK(BUTTON_PIN), ESP_EXT1_WAKEUP_ALL_LOW);
  esp_light_sleep_start();
#endif
}

void wakeUp()
{
  isAwake = true;
  lastActivityTime = millis();
  LOG_PRINTLN("Woke up from sleep.");
#if defined(IOT_BUTTON_V2)
  // Restore button state from RTC memory after deep sleep
  pressStartTime = pressStartTimeRTC;
  lastReleaseTime = lastReleaseTimeRTC;
  clickCount = clickCountRTC;
  longPressTriggered = longPressTriggeredRTC;
  clickSequenceActive = clickSequenceActiveRTC;
#endif
}

void breathingEffect(CRGB color, int duration)
{
  uint32_t startTime = millis();
  while (millis() - startTime < duration)
  {
    float brightness = (exp(sin(millis() / 2000.0 * PI)) - 0.36787944) * 108.0;
    rgbs[0] = color;
    rgbs[0].nscale8_video(brightness);
    FastLED.show();
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
}

void blinkEffect(CRGB color, int times, int delayTime)
{
  for (int i = 0; i < times; i++)
  {
    rgbs[0] = color;
    FastLED.show();
    vTaskDelay(delayTime / portTICK_PERIOD_MS);
    rgbs[0] = CRGB::Black;
    FastLED.show();
    vTaskDelay(delayTime / portTICK_PERIOD_MS);
  }
}

void rainbowEffect(int duration)
{
  uint32_t startTime = millis();
  uint8_t hue = 0;
  while (millis() - startTime < duration)
  {
    rgbs[0] = CHSV(hue++, 255, 255);
    FastLED.show();
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
  rgbs[0] = CRGB::Black;
  FastLED.show();
}

void buttonTask(void *pvParameters)
{
  ButtonEvent event;
  while (1)
  {
    if (xQueueReceive(eventQueue, &event, portMAX_DELAY) == pdPASS)
    {
      lastActivityTime = millis();
      switch (event)
      {
      case ButtonEvent::PRESS:
        LOG_PRINTLN("Button Pressed");
        zbIoTButton.on();
        break;
      case ButtonEvent::RELEASE:
        LOG_PRINTLN("Button Released");
        zbIoTButton.off();
        break;
      case ButtonEvent::SINGLE_CLICK:
        LOG_PRINTLN("Single Click");
        rainbowEffect(1000);
        switch1Status = !switch1Status;
        zbSwitch1.toggle();
        break;
      case ButtonEvent::DOUBLE_CLICK:
        LOG_PRINTLN("Double Click");
        breathingEffect(CRGB::Green, 1000);
        switch2Status = !switch2Status;
        zbSwitch2.toggle();
        break;
      case ButtonEvent::TRIPLE_CLICK:
        LOG_PRINTLN("Triple Click");
        breathingEffect(CRGB::Blue, 1000);
        // No specific switch for triple click, can be customized
        break;
      case ButtonEvent::SHORT_LONG_PRESS:
        LOG_PRINTLN("Short Long Press");
        breathingEffect(CRGB::Yellow, 1000);
        switch3Status = !switch3Status;
        zbSwitch3.toggle();
        break;
      case ButtonEvent::LONG_PRESS:
        LOG_PRINTLN("Long Press - Factory Reset");
        blinkEffect(CRGB::Red, 5, 200);
        esp_zb_factory_reset();
        break;
      }
    }
  }
}

void clickTimeoutTask(void *pvParameters)
{
  while (1)
  {
    vTaskSuspend(NULL); // Suspend until resumed by ISR
    if (!isAwake)
    {
      wakeUp();
    }
    uint32_t startTime = millis();
    bool possiblyReleased = false;

    // Initial debounce for press
    vTaskDelay(pdMS_TO_TICKS(DEBOUNCE_TIME));
    if (digitalRead(BUTTON_PIN) == LOW)
    { // Press confirmed
      if (!buttonStatus)
      {
        buttonStatus = true;
        pressStartTime = millis();
        longPressTriggered = false;
        clickSequenceActive = true;
        ButtonEvent event = ButtonEvent::PRESS;
        xQueueSend(eventQueue, &event, portMAX_DELAY);
      }
    }

    while (clickSequenceActive)
    {
      if (digitalRead(BUTTON_PIN) == LOW)
      { // Still pressed
        if (!longPressTriggered && (millis() - pressStartTime >= LONG_PRESS_TIME))
        {
          longPressTriggered = true;
          ButtonEvent event = ButtonEvent::LONG_PRESS;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
          clickSequenceActive = false; // End sequence after long press
        }
        else if (!longPressTriggered && (millis() - pressStartTime >= SHORT_LONG_PRESS_TIME) && (clickCount == 0))
        {
          // Trigger short long press only if it's the first press in a sequence
          longPressTriggered = true; // Use same flag to prevent re-trigger
          ButtonEvent event = ButtonEvent::SHORT_LONG_PRESS;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
        }
        vTaskDelay(pdMS_TO_TICKS(10));
      }
      else
      { // Released
        if (buttonStatus)
        {
          buttonStatus = false;
          ButtonEvent event = ButtonEvent::RELEASE;
          xQueueSend(eventQueue, &event, portMAX_DELAY);
          lastReleaseTime = millis();
          if (!longPressTriggered)
          {
            clickCount++;
          }
        }

        // Wait for potential next click
        uint32_t timeSinceRelease = millis() - lastReleaseTime;
        if (timeSinceRelease >= MULTI_CLICK_TIME)
        {
          if (clickCount > 0 && !longPressTriggered)
          {
            ButtonEvent event;
            if (clickCount == 1)
              event = ButtonEvent::SINGLE_CLICK;
            else if (clickCount == 2)
              event = ButtonEvent::DOUBLE_CLICK;
            else
              event = ButtonEvent::TRIPLE_CLICK;
            xQueueSend(eventQueue, &event, portMAX_DELAY);
          }
          clickCount = 0;
          clickSequenceActive = false; // End sequence
        }
        vTaskDelay(pdMS_TO_TICKS(10));
      }
    }
  }
}

void zigbeeTask(void *pvParameters)
{
  while (1)
  {
    if (isAwake)
    {
      esp_zb_cli_main_loop_iteration();
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }
}

#if defined(IOT_BUTTON_V2)
void batteryTask(void *pvParameters)
{
  // Initialize EMA with the first valid reading
  float voltage = 0;
  do
  {
    voltage = analogRead(BATTERY_ADC_PIN) / 4095.0 * 3.3 * 2;
    vTaskDelay(100 / portTICK_PERIOD_MS);
  } while (voltage < MIN_VOLTAGE);
  emaVoltage = voltage;

  while (1)
  {
    if (isAwake)
    {
      uint32_t total = 0;
      for (int i = 0; i < SAMPLE_COUNT; i++)
      {
        total += analogRead(BATTERY_ADC_PIN);
        vTaskDelay(1 / portTICK_PERIOD_MS);
      }
      float currentVoltage = (total / (float)SAMPLE_COUNT) / 4095.0 * 3.3 * 2;

      // Apply Exponential Moving Average (EMA)
      emaVoltage = ALPHA * currentVoltage + (1 - ALPHA) * emaVoltage;

      batteryPercentage = ((emaVoltage - MIN_VOLTAGE) / (MAX_VOLTAGE - MIN_VOLTAGE)) * 100.0;
      if (batteryPercentage > 100.0)
        batteryPercentage = 100.0;
      if (batteryPercentage < 0.0)
        batteryPercentage = 0.0;

      uint16_t voltageToReport = (uint16_t)(emaVoltage * 100); // Report in 0.01V units
      uint8_t percentageToReport = (uint8_t)(batteryPercentage);

      esp_zb_zcl_set_attribute_val(HA_POWER_CONFIG_ENDPOINT, ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_VOLTAGE_ID, &voltageToReport, false);
      esp_zb_zcl_set_attribute_val(HA_POWER_CONFIG_ENDPOINT, ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG, ESP_ZB_ZCL_CLUSTER_SERVER_ROLE, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_PERCENTAGE_REMAINING_ID, &percentageToReport, false);

      LOG_PRINTF("Battery Voltage: %.2fV, Percentage: %.1f%%\n", emaVoltage, batteryPercentage);

      if (batteryPercentage < 20)
      {
        digitalWrite(RED_LED_PIN, HIGH);
      }
      else
      {
        digitalWrite(RED_LED_PIN, LOW);
      }
    }
    vTaskDelay(60000 / portTICK_PERIOD_MS); // Update every minute
  }
}
#endif

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
  uint32_t *p_sg_p       = signal_struct->p_app_signal;
  esp_err_t err_status = signal_struct->esp_err_status;
  esp_zb_app_signal_type_t sig_type = *p_sg_p;

  switch (sig_type)
  {
  case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
    LOG_PRINTLN("Zigbee stack initialized");
    esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
    break;
  case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
  case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
    if (err_status == ESP_OK)
    {
      LOG_PRINTLN("Device started up in Zigbee stack");
      esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
    }
    else
    {
      LOG_PRINTF("Failed to initialize Zigbee stack (status: %s)\n", esp_err_to_name(err_status));
    }
    break;
  case ESP_ZB_BDB_SIGNAL_STEERING_COMPLETE:
    if (err_status == ESP_OK)
    {
      esp_zb_ieee_addr_t extended_pan_id;
      esp_zb_get_extended_pan_id(extended_pan_id);
      LOG_PRINTF("Successfully joined network, PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, Channel: %d",
                 extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                 extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                 esp_zb_get_current_channel());
      zigbeeInitialized = true;
    }
    else
    {
      LOG_PRINTF("Steering failed (status: %s)\n", esp_err_to_name(err_status));
      esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
    }
    break;
  default:
    LOG_PRINTF("ZDO signal: %d, status: %s\n", sig_type, esp_err_to_name(err_status));
    break;
  }
}

void setup()
{
  setupHardware();
  LOG_PRINTLN("Hardware Initialized");

  esp_zb_cfg_t zb_cfg;
  esp_zb_param_list_t *param_list = (esp_zb_param_list_t *)malloc(sizeof(esp_zb_param_list_t));
  param_list->param_list_length = 0;
  esp_zb_platform_config_t config = {
      .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
      .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
  };
  zb_cfg.esp_zb_role = ESP_ZB_DEVICE_TYPE_ED;
  zb_cfg.install_cfg = config;
  zb_cfg.param_list = param_list;
  esp_zb_init(&zb_cfg);

  esp_zb_attribute_list_t *iot_button_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(iot_button_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &buttonStatus);
  esp_zb_attribute_list_t *switch1_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(switch1_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &switch1Status);
  esp_zb_attribute_list_t *switch2_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(switch2_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &switch2Status);
  esp_zb_attribute_list_t *switch3_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_ON_OFF);
  esp_zb_on_off_cluster_add_attr(switch3_cluster, ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID, &switch3Status);

#if defined(IOT_BUTTON_V2)
  esp_zb_attribute_list_t *power_config_cluster = esp_zb_zcl_attr_list_create(ESP_ZB_ZCL_CLUSTER_ID_POWER_CONFIG);
  esp_zb_power_config_cluster_add_attr(power_config_cluster, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_VOLTAGE_ID, 0);
  esp_zb_power_config_cluster_add_attr(power_config_cluster, ESP_ZB_ZCL_ATTR_POWER_CONFIG_BAT_PERCENTAGE_REMAINING_ID, 0);
#endif

  esp_zb_ep_list_t *ep_list = esp_zb_ep_list_create();
  esp_zb_ep_list_add_ep(ep_list, iot_button_cluster, BUTTON_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
  esp_zb_ep_list_add_ep(ep_list, switch1_cluster, SWITCH1_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
  esp_zb_ep_list_add_ep(ep_list, switch2_cluster, SWITCH2_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
  esp_zb_ep_list_add_ep(ep_list, switch3_cluster, SWITCH3_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
#if defined(IOT_BUTTON_V2)
  esp_zb_ep_list_add_ep(ep_list, power_config_cluster, HA_POWER_CONFIG_ENDPOINT, ESP_ZB_AF_HA_PROFILE_ID, ESP_ZB_HA_ON_OFF_LIGHT_DEVICE_ID);
#endif

  esp_zb_device_register(ep_list);
  esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
  esp_zb_start(false);
  esp_zb_set_app_signal_callback(esp_zb_app_signal_handler);

  eventQueue = xQueueCreate(10, sizeof(ButtonEvent));
  xTaskCreate(buttonTask, "ButtonTask", 4096, NULL, 5, NULL);
  xTaskCreate(clickTimeoutTask, "ClickTimeoutTask", 4096, NULL, 10, &clickTimeoutTaskHandle);
  xTaskCreate(zigbeeTask, "ZigbeeTask", 4096, NULL, 4, NULL);
#if defined(IOT_BUTTON_V2)
  xTaskCreate(batteryTask, "BatteryTask", 4096, NULL, 3, NULL);
#endif

  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), button_isr, CHANGE);
  lastActivityTime = millis();
}

void loop()
{
  if (isAwake)
  {
    bool connected = esp_zb_is_device_joined();
    if (connected != lastConnected)
    {
      LOG_PRINTF("Zigbee connection status: %s\n", connected ? "Connected" : "Disconnected");
      lastConnected = connected;
    }
    digitalWrite(BLUE_LED_PIN, connected ? HIGH : LOW);

    if (millis() - lastActivityTime > INACTIVITY_TIMEOUT)
    {
      enterSleep();
    }
  }
  vTaskDelay(100 / portTICK_PERIOD_MS);
}
```

</details>

La documentación puede no estar actualizada con las actualizaciones del código, también puedes hacer clic en el botón de abajo para obtener los procedimientos más recientes.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/Seeed_IoT_Button_Zigbee/Seeed_IoT_Button_Zigbee.ino" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Haz Clic Aquí 🖱️</font></span></strong>
    </a>
</div>

### Paso 5: Cargar y Probar tu Firmware

1.  Conecta tu Botón IoT a tu computadora vía USB.
2.  Selecciona el puerto correcto en Arduino IDE.
3.  Haz clic en el botón **Cargar**.
4.  Abre el **Monitor Serie** (velocidad de baudios 115200) para ver la información de depuración.
5.  Una vez que la carga esté completa, el botón está listo para ser emparejado.

### Paso 6: Configurar Zigbee en Home Assistant

Antes de emparejar tu Botón IoT, necesitas configurar un coordinador Zigbee en Home Assistant:

1.  **Instalar un Coordinador Zigbee**: Conecta un coordinador Zigbee como el Home Assistant Connect ZBT-1 a tu servidor Home Assistant.
2.  **Configurar Zigbee Home Automation (ZHA)**:
    -   Ve a **Configuración > Dispositivos y Servicios**.
    -   Haz clic en "**Agregar Integración**" y busca "**Zigbee Home Automation**".
    -   Sigue las indicaciones para configurar ZHA con tu coordinador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7: Emparejar el Botón IoT con Home Assistant

1.  En Home Assistant, ve a **Configuración > Dispositivos y Servicios > Zigbee Home Automation**.
2.  Haz clic en tu dispositivo coordinador Zigbee.
3.  Haz clic en "**Agregar Dispositivo**" para poner el coordinador en modo de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4.  Presiona el botón en tu Botón IoT una vez para despertarlo e iniciar el emparejamiento. Si no se empareja, intenta mantener presionado el botón por más de 5 segundos para activar un restablecimiento de fábrica, lo cual también lo pondrá en modo de emparejamiento.
5.  Home Assistant debería descubrir el Botón IoT como "**Seeed Studio IoT_Button**".
6.  Sigue las indicaciones para completar el proceso de emparejamiento. Verás un dispositivo con múltiples entidades (un sensor binario y tres interruptores).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 8: Crear Automatizaciones en Home Assistant

Una vez emparejado, puedes crear automatizaciones basadas en las acciones del botón. El firmware expone diferentes tipos de clic como interruptores separados, haciendo la automatización simple.

1.  Ve a **Configuración > Automatizaciones y Escenas > Crear Automatización**.
2.  Selecciona "**Dispositivo**" como el tipo de disparador.
3.  Encuentra tu Botón IoT en la lista de dispositivos.
4.  Selecciona el disparador deseado de la lista. ZHA expondrá los diferentes clics como acciones del dispositivo, por ejemplo:
    -   "Presión simple" (del interruptor virtual en Endpoint 11)
    -   "Presión doble" (del interruptor virtual en Endpoint 12)
    -   "Presión larga" (del interruptor virtual en Endpoint 13)
5.  Configura las acciones que quieres realizar cuando el botón sea presionado.
6.  Guarda la automatización.

Ejemplo de automatización en YAML de Home Assistant para alternar una luz con un **doble clic**:

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

El Seeed Studio IoT Button con funcionalidad Zigbee ofrece una forma versátil y eficiente en energía para controlar tu hogar inteligente. Ya sea que uses el firmware precompilado o desarrolles tu propia solución personalizada, el botón proporciona una interfaz simple para activar automatizaciones complejas en Home Assistant.

Al aprovechar las capacidades Zigbee integradas del ESP32-C6, el IoT Button puede operar durante períodos extendidos con alimentación por batería mientras mantiene conectividad confiable con tu ecosistema de hogar inteligente.

## Solución de problemas

### P1: ¿Por qué mi dispositivo se sigue desconectando y no puede conectarse a internet después de reemplazar la batería? Puedo confirmar que la batería está cargada.

Después de que la batería ha sido removida, debido a la estrategia de protección del chip de la batería 18650, necesita ser activada un poco por un cable de alimentación USB cargado para funcionar correctamente.

## Recursos

- **[GITHUB]** [Repositorio Github del Seeed IoT Button](https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button)
- **[PDF]** [PDF del esquemático del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Esquemático y PCB del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div> 