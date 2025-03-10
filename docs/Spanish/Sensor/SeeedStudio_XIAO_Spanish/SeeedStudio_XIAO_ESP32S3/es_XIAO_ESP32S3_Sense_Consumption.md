---
description: XIAO ESP32 Sense Use different Sleep Modes Consumptions
title: Modos de Sueño del XIAO ESP32S3 Sense
keywords:
- Sleep_Modes
image: https://files.seeedstudio.com//wiki/ESP32S3_Sense_SleepMode/1.png
slug: /es/XIAO_ESP32S3_Consumption
last_update:
  date: 02/12/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32S3_Sense_SleepMode/1.png" style={{width:700, height:'auto'}}/></div>


Aquí, utilizaré algunos ejemplos sencillos para demostrar el uso de estos modos de bajo consumo. Todos los ESP32 son universales, y la placa de desarrollo que estoy utilizando aquí es el XIAO ESP32S3 Sense.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Preparación del Software

Antes de comenzar este artículo, debes realizar algunos trabajos de instalación de software si aún no has utilizado todas las características de hardware del XIAO ESP32S3 Sense.

A continuación, te proporciono los enlaces de redirección:

- [Uso del Micrófono](https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/)
- [MicroSD](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/)
- [Uso de la Cámara](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/)


## Sueño Profundo

### Introducción al Sueño Profundo
En el modo de sueño profundo, las CPU, la mayor parte de la RAM y todos los periféricos digitales que reciben señal del APB_CLK se apagan. Las únicas partes del chip que permanecen encendidas son:

- Controlador RTC
- Coprocesador ULP
- Memoria RTC FAST
- Memoria RTC SLOW

### Métodos de Despertar

- Despertar por Temporizador

- Despertar por Interrupción del Touchpad

- Despertar Externo

- Despertar por Actividad del Coprocesador ULP

- Despertar por GPIO

### Código para Usar Sueño Profundo

En este código, utilizo el temporizador como fuente de despertar, configurando un despertar cada 7 segundos.

``` cpp
/*necesita incluir el archivo de cabecera*/
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include <ESP_I2S.h>
#include "esp_camera.h"
#include "camera_pins.h"


/*establecer el tiempo de despertar a siete segundos*/
#define uS_TO_S_FACTOR 1000000ULL /* Factor de conversión de microsegundos a segundos */
#define TIME_TO_SLEEP  7          /* Tiempo en que el ESP32 entrará en sueño (en segundos) */
#define CAMERA_MODEL_XIAO_ESP32S3 // Tiene PSRAM

RTC_DATA_ATTR int bootCount = 0;

I2SClass I2S;


/*Declaración de funciones*/
void print_wakeup_reason();//imprimir fuente de despertar 
void SDCard_enable();//iniciar SDCard 
void Microphone_enable();//iniciar micrófono 
void Camera_enable();//iniciar cámara 
void Deep_Sleep_enable();//iniciar sueño profundo
void close_SDCard();
void close_Camera();
void close_Microphone();
void startCameraServer();
void setupLedFlash(int pin);



void setup() {
  Serial.begin(115200);
  while(!Serial);//Asegurarse de que el puerto serial esté habilitado
}

void loop() {
  while(!Serial);
  /*habilitar o deshabilitar los periféricos*/
  Deep_Sleep_enable();
  delay(10000);
}


void print_wakeup_reason() {
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch (wakeup_reason) {
    case ESP_SLEEP_WAKEUP_EXT0:     Serial.println("Despertó debido a una señal externa usando RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1:     Serial.println("Despertó debido a una señal externa usando RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER:    Serial.println("Despertó debido al temporizador"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD: Serial.println("Despertó debido al touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP:      Serial.println("Despertó debido al programa ULP"); break;
    default:                        Serial.printf("El despertar no fue causado por el sueño profundo: %d\n", wakeup_reason); break;
  }
}


void SDCard_Function(){
    if(!SD.begin(21)){
      Serial.println("Error al montar la tarjeta");
      return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE){
      Serial.println("No hay tarjeta SD conectada");
      return;
  }
  Serial.print("Tipo de tarjeta SD: ");
  if(cardType == CARD_MMC){
      Serial.println("MMC");
  } else if(cardType == CARD_SD){
      Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
      Serial.println("SDHC");
  } else {
      Serial.println("DESCONOCIDO");
  }

  uint64_t cardSize = SD.cardSize() / (1024 * 1024);
  Serial.printf("Tamaño de la tarjeta SD: %lluMB\n", cardSize);
  Serial.println("La tarjeta SD está conectada");
}

void Microphone_Function(){
    // configurar los pines 42 de reloj PDM y 41 de datos PDM
  I2S.setPinsPdmRx(42, 41);
  // iniciar I2S a 16 kHz con 16 bits por muestra
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("¡Fallo al inicializar I2S!");
    while (1); // no hace nada
  }
  Serial.println("Micrófono abierto");
  // Detener la lectura después de 5 segundos
  delay(500);
}

void Camera_Function(){
  Serial.setDebugOutput(true);
  Serial.println();

/*configuración*/
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
  config.pixel_format = PIXFORMAT_JPEG;  // para transmisión
  //config.pixel_format = PIXFORMAT_RGB565; // para detección/reconocimiento de rostros
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;


  // si PSRAM IC está presente, inicializar con resolución UXGA y mayor calidad JPEG
  //                      para mayor tamaño de buffer de cuadro preasignado.
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limitar el tamaño de cuadro cuando no se dispone de PSRAM
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Mejor opción para detección/reconocimiento de rostros
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // inicializar cámara
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Falló la inicialización de la cámara con el error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  // los sensores iniciales están volteados verticalmente y los colores un poco saturados
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // voltearlo
    s->set_brightness(s, 1);   // aumentar el brillo un poco
    s->set_saturation(s, -2);  // reducir la saturación
  }
  // reducir el tamaño del cuadro para una mayor tasa de fotogramas inicial
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
// Configurar LED FLash si el pin LED está definido en camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  Serial.println("La cámara está abierta");
}

void Deep_Sleep_Function(){
  ++bootCount;
  Serial.println("Número de inicio: " + String(bootCount));
  //Imprimir la razón del despertar para ESP32
  print_wakeup_reason();
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);//configurar fuente de despertar
  Serial.println("Configurando ESP32 para dormir durante " + String(TIME_TO_SLEEP) + " segundos");
  Serial.println("Entrando en sueño profundo ahora");
  Serial.flush();
  esp_deep_sleep_start();
}

void close_SDCard(){
  SD.end();
  Serial.println("La tarjeta SD ya está cerrada");
}
void close_Camera(){
  esp_camera_deinit();
  Serial.println("La cámara ya está cerrada");
}
void close_Microphone(){
  I2S.end();
  Serial.println("El micrófono ya está cerrado");
}

```

:::tip
Si usas el modo de sueño profundo en XIAO ESP32S3 Sense, necesitarás poner nuevamente el XIAO ESP32S3 Sense en modo de descarga, presionar el botón de arranque y luego presionar el botón de reinicio.
:::


## Modo Modem-Sleep

### Introducción al Modo Modem-Sleep

El modo Modem Sleep es otro modo de bajo consumo importante en el ESP32, que es diferente del modo Deep Sleep. Este modo está optimizado principalmente para el módulo de comunicación inalámbrica del ESP32.

En este modo, el módulo WiFi/Bluetooth del ESP32 entra en un estado de reposo, mientras que los núcleos del CPU permanecen activos. Esto permite que el ESP32 mantenga un cierto nivel de conectividad inalámbrica mientras reduce significativamente el consumo de energía.

### Métodos de Despertar

- Despertar por Temporizador

- Despertar por Interrupción Externa

- Despertar por Tarea

- Despertar por Actividad de Red

### Código para Usar Modem Sleep

``` cpp
#include <WiFi.h>
#include <esp_wifi.h>
#include <ESP_I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_camera.h"

/*No puedes cambiar el orden aquí, de lo contrario ocurrirá un error: no seleccionar el modo de cámara*/
#define CAMERA_MODEL_XIAO_ESP32S3 // Tiene PSRAM
#include "camera_pins.h"
/**************************/
I2SClass I2S;

const char* ssid = "************";
const char* password = "***********";

/*Declaración de funciones*/
void print_wakeup_reason();//imprimir la fuente de despertado 
void SDCard_enable();//iniciar tarjeta SD
void Microphone_enable();//iniciar micrófono
void Camera_enable();//inicializar cámara
void wifi_enable();//habilitar WiFi
void Deep_Sleep_enable();//iniciar modo de sueño profundo
void close_SDCard();//cerrar tarjeta SD
void close_Camera();//cerrar cámara
void close_Microphone();//cerrar micrófono
void startCameraServer();//iniciar servidor de cámara
void setupLedFlash(int pin);//configurar flash LED


void setup() {
  Serial.begin(115200);
  while(!Serial);
}

void loop() {
  delay(500);
  Serial.println("listo para entrar en sueño profundo");
  esp_deep_sleep_start();
  Serial.flush();
  delay(5000);
}


void Camera_enable(){
  Serial.setDebugOutput(true);
  Serial.println();

/*configuración de cámara*/
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
  config.pixel_format = PIXFORMAT_JPEG;  // para streaming
  //config.pixel_format = PIXFORMAT_RGB565; // para detección/reconocimiento facial
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;


  // si el IC de PSRAM está presente, inicializar con resolución UXGA y mayor calidad JPEG
  //                      para un mayor búfer de frames preasignado.
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limitar el tamaño del frame cuando PSRAM no está disponible
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Mejor opción para detección/reconocimiento facial
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // inicialización de la cámara
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Error al inicializar la cámara con error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  // los sensores iniciales están volteados verticalmente y los colores están algo saturados
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // voltear de nuevo
    s->set_brightness(s, 1);   // aumentar un poco el brillo
    s->set_saturation(s, -2);  // reducir la saturación
  }
  // reducir el tamaño del frame para una mayor tasa de frames inicial
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
// Configurar LED FLash si el pin LED está definido en camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  Serial.println("la cámara está abierta");
}

void SDCard_Function(){
    if(!SD.begin(21)){
      Serial.println("Error al montar la tarjeta");
      return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE){
      Serial.println("No hay tarjeta SD conectada");
      return;
  }
  Serial.print("Tipo de tarjeta SD: ");
  if(cardType == CARD_MMC){
      Serial.println("MMC");
  } else if(cardType == CARD_SD){
      Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
      Serial.println("SDHC");
  } else {
      Serial.println("DESCONOCIDO");
  }

  uint64_t cardSize = SD.cardSize() / (1024 * 1024);
  Serial.printf("Tamaño de la tarjeta SD: %lluMB\n", cardSize);
  Serial.println("la tarjeta SD está conectada");
}

void Microphone_Function(){
    // configurar los pines de reloj y datos PDM en 42 y 41
  I2S.setPinsPdmRx(42, 41);
  // iniciar I2S a 16 kHz con 16 bits por muestra
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("¡Error al inicializar I2S!");
    while (1); // no hacer nada
  }
  Serial.println("micrófono está abierto");
  // Detener la lectura después de 5 segundos
  delay(500);
}

void wifi_enable(){
  WiFi.mode(WIFI_STA);//poner WiFi en modo cliente
  esp_wifi_start();//habilitar periférico WiFi
  Serial.println("¡WiFi abierto!");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi conectado");
  Serial.println("la dirección IP es: ");
  Serial.print(WiFi.localIP());
}

void Modem_Sleep_enalbe(){
  //cerrar WiFi
  WiFi.mode(WIFI_OFF);

  //verificar si está apagado
  if (WiFi.getMode() == WIFI_OFF) {
    Serial.println("WiFi está apagado");
  } else {
    Serial.println("WiFi sigue encendido");
  }
}

void close_SDCard(){
  SD.end();
  Serial.println("la tarjeta SD ya está cerrada");
}
void close_Camera(){
  esp_camera_deinit();
  Serial.println("la cámara ya está cerrada");
}
void close_Microphone(){
  I2S.end();
  Serial.println("el micrófono ya está cerrado");
}

```

## Para Concluir

### ¿Por qué usar el modo de sueño profundo?
Maximiza el ahorro de energía sin comprometer la funcionalidad, con el fin de extender la vida útil de la batería del dispositivo.  
Escenarios adecuados: Aplicaciones donde la duración de la batería es crucial, como nodos de sensores remotos, dispositivos portátiles y otros dispositivos IoT de bajo consumo. Aunque el tiempo de despertar es relativamente lento, esta compensación vale la pena.

### ¿Por qué usar el modo de sueño de módem?
Optimiza el consumo de energía del módulo de comunicación inalámbrica, mientras mantiene la conectividad de red.  
Escenarios adecuados: Aplicaciones que necesitan mantener la conexión de red pero también requieren bajo consumo, como dispositivos IoT que funcionan de manera intermitente. El Modo de Sueño de Módem puede reducir significativamente el consumo de energía del módulo inalámbrico mientras sigue proporcionando un tiempo de respuesta rápido al despertar.

### En resumen
Estos tres modos de sueño ofrecen a los desarrolladores diferentes opciones de compensación entre energía y rendimiento que se pueden elegir de manera flexible según los requisitos específicos de la aplicación. Para dispositivos con requisitos de duración de la batería, el modo de sueño profundo es una buena opción; y para dispositivos IoT que necesitan mantener la conectividad de la red, el modo de sueño de módem es la opción óptima.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>