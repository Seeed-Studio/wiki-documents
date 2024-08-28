---
description: XIAO ESP32 Sense Use different Sleep Modes Consumptions
title: XIAO ESP32S3 Sense Sleep Modes
keywords:
- Sleep_Modes
image: https://files.seeedstudio.com//wiki/ESP32S3_Sense_SleepMode/1.png
slug: /XIAO_ESP32S3_Consumption
last_update:
  date: 08/27/2024
  author: Jason
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/1.png" style={{width:700, height:'auto'}}/></div>

ESP32 supports two major power saving modes: Light-sleep and Deep-sleep. According to the features used by an application, there are some sub sleep modes. See Sleep Modes for these sleep modes and sub sleep modes. Additionally, there are some power-down options that can be configured to further reduce the power consumption. See Power-down Options for more details.

Here, I will use some simple examples to demonstrate the use of these low-power sleep modes. All ESP32s are universal, and the development board I am using here is XIAO ESP32S3 Sense

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Softare Preparetion

Before starting this article, you need to prepare some software installation work if you have not yet used all the hardware features on XIAO ESP32S3 Sense

Below, I have provided the redirect link

- [Micrphone Use](https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/)
- [MicroSD](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/)
- [Camera Use](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/)

## Light Sleep-Mode

### Introduce Light Sleep

In Light-sleep mode, the digital peripherals, most of the RAM, and CPUs are clock-gated and their supply voltage is reduced. Upon exit from Light-sleep, the digital peripherals, RAM, and CPUs resume operation and their internal states are preserved.

### Wake-up Methods

- Timer Wake-up
- External interrupt Wake-up
- Touch sensor Wake-up
- ULP coprocessor Wake-up
- GPIO Wake-up
- UART Wake-up
- UART target Wake-up
- Network socket Wake-up

Detail Wake up Source information , you can watch it from [**Here**](https://docs.espressif.com/projects/esp-idf/en/v5.3/esp32/api-reference/system/sleep_modes.html)

### Use Light Sleep Code

You can check the complete code on ESP IDF here, Because it's not very smooth to use on Arduino platform

## Deep Sleep-Mode

### Introduce Deep Sleep

In Deep-sleep mode, the CPUs, most of the RAM, and all digital peripherals that are clocked from APB_CLK are powered off. The only parts of the chip that remain powered on are:

- RTC controller RTC

- ULP coprocessor ULP

- RTC FAST memory RTC

- RTC SLOW memory RTC

### Wake-up Methods

- Timer Wake-up
- Touchpad Wake-up
- External Wake-up(ext0)
- External Wake-up(ext1)
- ULP Coprocessor Wake-up

Detail Wake up Source information , you can watch it from [**Here**](https://docs.espressif.com/projects/esp-idf/en/v5.3/esp32/api-reference/system/sleep_modes.html)


### Use Deep Sleep Code

In in this code , i'am use Timer regard as Wakeup Source , Wake up every 7 seconds.

``` cpp
/*need inlcude head file*/
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include <ESP_I2S.h>
#include "esp_camera.h"
#include "camera_pins.h"


/*set wake up tiem seven second*/
#define uS_TO_S_FACTOR 1000000ULL /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  7          /* Time ESP32 will go to sleep (in seconds) */
#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

RTC_DATA_ATTR int bootCount = 0;

I2SClass I2S;


/*Declaration function*/
void print_wakeup_reason();//print wake_up source 
void SDCard_enable();//SDCard begin 
void Microphone_enable();//Microphone begin 
void Camera_enable();//camera init 
void Deep_Sleep_enable();//start deep_sleep
void close_SDCard();
void close_Camera();
void close_Microphone();
void startCameraServer();
void setupLedFlash(int pin);



void setup() {
  Serial.begin(115200);
  while(!Serial);//Ensure that the serial port is enabled
}

void loop() {
  while(!Serial);
  /*enable or close your peripheral*/
  Deep_Sleep_enable();
  delay(10000);
}


void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Wakeup caused by ULP program"); break;
    default:                        Serial.printf("Wakeup was not caused by deep sleep: %d\n", wakeup_reason); break;
  }
}


void SDCard_Function(){
    if(!SD.begin(21)){
      Serial.println("Card Mount Failed");
      return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE){
      Serial.println("No SD card attached");
      return;
  }
  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
      Serial.println("MMC");
  } else if(cardType == CARD_SD){
      Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
      Serial.println("SDHC");
  } else {
      Serial.println("UNKNOWN");
  }

  uint64_t cardSize = SD.cardSize() / (1024 * 1024);
  Serial.printf("SD Card Size: %lluMB\n", cardSize);
  Serial.println("the sc card is connecting");
}

void Microphone_Function(){
    // setup 42 PDM clock and 41 PDM data pins
  I2S.setPinsPdmRx(42, 41);
  // // start I2S at 16 kHz with 16-bits per sample
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
  Serial.println("microphone is open");
  // Stop reading after 5 seconds
  delay(500);
}

void Camera_Function(){
  Serial.setDebugOutput(true);
  Serial.println();

/*config设置*/
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;


  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // flip it back
    s->set_brightness(s, 1);   // up the brightness just a bit
    s->set_saturation(s, -2);  // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);
  }


#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif
#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif
// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  Serial.println("the camera open");
}

void Deep_Sleep_Function(){
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  //Print the wakeup reason for ESP32
  print_wakeup_reason();
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);//set wake up source
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) + " Seconds");
  Serial.println("Going to deep sleep now");
  Serial.flush();
  esp_deep_sleep_start();
}

void close_SDCard(){
  SD.end();
  Serial.println("the sd card already closed");
}
void close_Camera(){
  esp_camera_deinit();
  Serial.println("the camera already closed");
}
void close_Microphone(){
  I2S.end();
  Serial.println("the microphone already closed");
}

```

:::tip
if use deep sleep mode in XIAO ESPS3 Sense ,you need to Put XIAO ESP32S3 Sense back into download mode , Press the boot button and then press reset
:::


## Modem-Sleep

### Introduce Modem-Sleep

Modem Sleep mode is another important low-power mode in ESP32, which is different from the Deep Sleep mode. Modem Sleep mode is primarily optimized for the wireless communication module of the ESP32.

In this mode, the WiFi/Bluetooth module of the ESP32 enters a sleep state, while the CPU cores remain active. This allows the ESP32 to maintain a certain level of wireless connectivity while significantly reducing the power consumption.

### Wake-up Methods

- Timer Wake-up

- External Interrupt Wake-up

- Task Wake-up

- Network Activity Wake-up


### Use Modem Sleep Code

``` cpp
#include <WiFi.h>
#include <esp_wifi.h>
#include <ESP_I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_camera.h"

/*You cannot change the order here, otherwise an error will occur: no select camera mode*/
#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#include "camera_pins.h"
/**************************/
I2SClass I2S;

const char* ssid = "************";
const char* password = "***********";

/*Declaration function*/
void print_wakeup_reason();//print wake_up source 
void SDCard_enable();//SDCard begin 
void Microphone_enable();//Microphone begin 
void Camera_enable();//camera init 
void wifi_enable();//
void Deep_Sleep_enable();//start deep_sleep
void close_SDCard();
void close_Camera();
void close_Microphone();
void startCameraServer();
void setupLedFlash(int pin);



void setup() {
  Serial.begin(115200);
  while(!Serial);
}

void loop() {
  delay(500);
  Serial.println("ready into deep sleep");
  esp_deep_sleep_start();
  Serial.flush();
  delay(5000);
}


void Camera_enable(){
  Serial.setDebugOutput(true);
  Serial.println();

/*config设置*/
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;


  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // flip it back
    s->set_brightness(s, 1);   // up the brightness just a bit
    s->set_saturation(s, -2);  // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);
  }


#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif
#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif
// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  Serial.println("the camera open");
}

void SDCard_Function(){
    if(!SD.begin(21)){
      Serial.println("Card Mount Failed");
      return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE){
      Serial.println("No SD card attached");
      return;
  }
  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
      Serial.println("MMC");
  } else if(cardType == CARD_SD){
      Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
      Serial.println("SDHC");
  } else {
      Serial.println("UNKNOWN");
  }

  uint64_t cardSize = SD.cardSize() / (1024 * 1024);
  Serial.printf("SD Card Size: %lluMB\n", cardSize);
  Serial.println("the sc card is connecting");
}

void Microphone_Function(){
    // setup 42 PDM clock and 41 PDM data pins
  I2S.setPinsPdmRx(42, 41);
  // // start I2S at 16 kHz with 16-bits per sample
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
  Serial.println("microphone is open");
  // Stop reading after 5 seconds
  delay(500);
}

void wifi_enable(){
  WiFi.mode(WIFI_STA);//set wifi client mode
  esp_wifi_start();//enalbe wifi peripheral
  Serial.println("Wifi open!");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
  Serial.println("address ip is : ");
  Serial.print(WiFi.localIP());
}

void Modem_Sleep_enalbe(){
  //close wifi 
  WiFi.mode(WIFI_OFF);

  //check whether or not
  if (WiFi.getMode() == WIFI_OFF) {
    Serial.println("WiFi is off");
  } else {
    Serial.println("WiFi is still on");
  }
}

void close_SDCard(){
  SD.end();
  Serial.println("the sd card already closed");
}
void close_Camera(){
  esp_camera_deinit();
  Serial.println("the camera already closed");
}
void close_Microphone(){
  I2S.end();
  Serial.println("the microphone already closed");
}

```

## To conclude

### Why use Deep Sleep mode
maximize power savings without compromising functionality, in order to extend the battery life of the device.
Suitable scenarios: Applications where battery life is crucial, such as remote sensor nodes, wearable devices, and other low-power IoT devices. Although the wakeup time is relatively slow, this trade-off is worthwhile.

### Why use Light Sleep mode
reduce power consumption while still maintaining a certain level of responsiveness.
Suitable scenarios: Applications that need to balance power consumption and performance, such as IoT devices with interactive interfaces and intermittently working sensor nodes. Compared to Deep Sleep, Light Sleep offers faster wakeup times.

### Why use Modem Sleep mode
optimize the power consumption of the wireless communication module, while still maintaining network connectivity.
Suitable scenarios: Applications that need to maintain network connection but also require low power, such as intermittently working IoT devices. Modem Sleep can significantly reduce the power consumption of the wireless module while still providing fast wakeup response.

### In summary
these three sleep modes provide developers with different power/performance trade-off options that can be flexibly chosen based on the specific requirements of the application. For devices with battery life requirements, Deep Sleep mode is a good choice; for applications that need to balance power consumption and responsiveness, Light Sleep is a better option; and for IoT devices that need to maintain network connectivity, Modem Sleep mode is the optimal choice.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>