---
description: Este tutorial explicará cómo usar correctamente la cámara en el XIAO ESP32S3 Sense.
title: Uso de Cámara para Versión Sense
keywords:
- xiao esp32s3
- esp32s3
- camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_camera_usage
last_update:
  date: 04/17/2023
  author: Citric
---

# Uso de Cámara en Seeed Studio XIAO ESP32S3 Sense

:::tip
El contenido de este tutorial solo es aplicable al Seeed Studio XIAO ESP32S3 Sense.
:::

En este tutorial, te guiaremos a través del uso del módulo de cámara en el XIAO ESP32S3 Sense. Este tutorial se divide en las siguientes partes: primero, explicaremos la función de cámara proporcionada por ESP32 y sus funciones. En segundo lugar, te mostraremos cómo usar la cámara en dos dimensiones: tomar fotos y grabar videos, y finalmente, crearemos algunos proyectos interesantes en torno a tomar fotos y grabar videos.

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introducción

Este tutorial puede involucrar el uso de tarjeta microSD, cámara, antena, etc. Por favor prepara los siguientes materiales e instálalos correctamente según las necesidades de tu proyecto.

#### Instalación de antena

En la parte inferior izquierda del frente del XIAO ESP32S3, hay un "Conector de Antena WiFi/BT" separado. Para obtener una mejor señal WiFi/Bluetooth, necesitas sacar la antena del interior del paquete e instalarla en el conector.

Hay un pequeño truco para la instalación de la antena: si presionas directamente hacia abajo con fuerza, encontrarás que es muy difícil presionar y te dolerán los dedos. La forma correcta de instalar la antena es poner primero un lado del conector de la antena en el bloque del conector, luego presionar un poco hacia abajo en el otro lado, y la antena se instalará.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

### Instalación de placas de expansión (para Sense)

Instalar la placa de expansión es muy simple, solo necesitas alinear el conector en la placa de expansión con el conector B2B en el XIAO ESP32S3, presionarlo fuerte y escuchar un "clic", la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos una nueva cámara potente completamente compatible con XIAO ESP32S3 Sense, la OV5640, en nuestros estantes, y si la compras, puedes reemplazar la cámara para usarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

Si necesitas conocer la información detallada de parámetros de ov5640, puedes consultar el siguiente gráfico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos los programas sobre cámaras en la Wiki son compatibles tanto con cámaras OV5640 como OV2640.
:::

### Preparar la tarjeta microSD

XIAO ESP32S3 Sense soporta tarjetas microSD de hasta **32GB**, así que si estás listo para comprar una tarjeta microSD para XIAO, por favor consulta esta especificación. Y formatea la tarjeta microSD al formato **FAT32** antes de usar la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después del formateo, puedes insertar la tarjeta microSD en la ranura de tarjeta microSD. Por favor nota la dirección de inserción, el lado con el contacto dorado debe mirar hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### Diseño del circuito de ranura de cámara para placas de expansión

La ranura de tarjeta XIAO ESP32S3 Sense ocupa 14 GPIOs del ESP32-S3, y los detalles de pines de la ocupación se muestran en la tabla a continuación.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Cámara</th>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Cámara</th>
        </tr>
        <tr>
            <td align="center">GPIO10</td>
            <td align="center">XMCLK</td>
            <td align="center">GPIO11</td>
            <td align="center">DVP_Y8</td>
        </tr>
        <tr>
            <td align="center">GPIO12</td>
            <td align="center">DVP_Y7</td>
            <td align="center">GPIO13</td>
            <td align="center">DVP_PCLK</td>
        </tr>
        <tr>
            <td align="center">GPIO14</td>
            <td align="center">DVP_Y6</td>
            <td align="center">GPIO15</td>
            <td align="center">DVP_Y2</td>
        </tr>
        <tr>
            <td align="center">GPIO16</td>
            <td align="center">DVP_Y5</td>
            <td align="center">GPIO17</td>
            <td align="center">DVP_Y3</td>
        </tr>
        <tr>
            <td align="center">GPIO18</td>
            <td align="center">DVP_Y4</td>
            <td align="center">GPIO38</td>
            <td align="center">DVP_VSYNC</td>
        </tr>
        <tr>
            <td align="center">GPIO39</td>
            <td align="center">CAM_SCL</td>
            <td align="center">GPIO40</td>
            <td align="center">CAM_SDA</td>
        </tr>
        <tr>
            <td align="center">GPIO47</td>
            <td align="center">DVP_HREF</td>
            <td align="center">GPIO48</td>
            <td align="center">DVP_Y9</td>
        </tr>
    </table>
</div>

### Activar la opción PSRAM

La PSRAM de ESP32 se refiere a la PSRAM externa (Pseudo Static Random Access Memory) en el chip ESP32, que proporciona espacio de memoria adicional para aumentar la memoria disponible del sistema ESP32. En el sistema ESP32, PSRAM tiene los siguientes usos principales:

1. Extender la RAM disponible: La RAM incorporada de ESP32 es limitada, especialmente para algunas aplicaciones que necesitan mucha memoria, como procesamiento de imágenes, procesamiento de audio, etc., la RAM incorporada puede no ser suficiente. Al usar PSRAM, la RAM disponible de ESP32 puede extenderse para satisfacer las necesidades de estas aplicaciones.

2. Acceso acelerado a memoria: Dado que PSRAM es memoria externa, la velocidad de acceso es más lenta que la RAM interna, sin embargo puede usarse como caché o memoria temporal para acelerar el acceso a memoria y el procesamiento de datos.

3. Búferes de almacenamiento: Para aplicaciones que requieren búferes grandes, como búferes de red, búferes de audio, etc., PSRAM puede proporcionar suficiente espacio de almacenamiento para evitar situaciones de falta de memoria.

Para el contenido de este tutorial, **necesitas activar la función PSRAM** del Arduino IDE para asegurar que la cámara funcione correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

## Descripción General de la Biblioteca de Cámara

Antes de comenzar, te recomendamos leer este capítulo para entender las funciones comunes de la cámara. Para que puedas usar estas funciones para completar el desarrollo de tu propio proyecto o ser capaz de leer el programa más fácilmente.

### Parte I: esp_camera.h

1. Estructura de configuración para inicialización de cámara.

Lo siguiente es un ejemplo de la configuración, solo llena según la situación real de pines.

```cpp
static camera_config_t camera_example_config = {
        .pin_pwdn       = PWDN_GPIO_NUM,
        .pin_reset      = RESET_GPIO_NUM,
        .pin_xclk       = XCLK_GPIO_NUM,
        .pin_sccb_sda   = SIOD_GPIO_NUM,
        .pin_sccb_scl   = SIOC_GPIO_NUM,
        .pin_d7         = Y9_GPIO_NUM,
        .pin_d6         = Y8_GPIO_NUM,
        .pin_d5         = Y7_GPIO_NUM,
        .pin_d4         = Y6_GPIO_NUM,
        .pin_d3         = Y5_GPIO_NUM,
        .pin_d2         = Y4_GPIO_NUM,
        .pin_d1         = Y3_GPIO_NUM,
        .pin_d0         = Y2_GPIO_NUM,
        .pin_vsync      = VSYNC_GPIO_NUM,
        .pin_href       = HREF_GPIO_NUM,
        .pin_pclk       = PCLK_GPIO_NUM,

        .xclk_freq_hz   = 20000000, // The clock frequency of the image sensor
        .fb_location = CAMERA_FB_IN_PSRAM; // Set the frame buffer storage location
        .pixel_format   = PIXFORMAT_JPEG, // The pixel format of the image: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size     = FRAMESIZE_UXGA, // The resolution size of the image: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality   = 12, // The quality of the JPEG image, ranging from 0 to 63.
        .fb_count       = 2, // The number of frame buffers to use.
        .grab_mode      = CAMERA_GRAB_WHEN_EMPTY //  The image capture mode.
    };
```

2. Inicializar el controlador de cámara.

Después de configurar `camera_example_config` en el formato anterior, necesitamos usar esta función para inicializar el controlador de cámara.

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **Parámetros de Entrada**: Parámetros de configuración de cámara

- **Salida**: ESP_OK en caso de éxito

:::note
Actualmente esta función solo puede llamarse una vez y no hay forma de desinicializar este módulo.
:::

3. Obtener puntero a un búfer de marco.

```cpp
camera_fb_t* esp_camera_fb_get();
```

Estructura de datos del búfer de marco de cámara:

```cpp
typedef struct {
    uint8_t * buf;              /*!< Pointer to the pixel data */
    size_t len;                 /*!< Length of the buffer in bytes */
    size_t width;               /*!< Width of the buffer in pixels */
    size_t height;              /*!< Height of the buffer in pixels */
    pixformat_t format;         /*!< Format of the pixel data */
    struct timeval timestamp;   /*!< Timestamp since boot of the first DMA buffer of the frame */
} camera_fb_t;
```

4. Devolver el búfer de fotograma para ser reutilizado nuevamente.

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **Parámetros de Entrada**: Puntero al búfer de fotograma

5. Obtener un puntero a la estructura de control del sensor de imagen.

```cpp
sensor_t * esp_camera_sensor_get();
```

- **Salida**: puntero al sensor

6. Guardar configuraciones de cámara en almacenamiento no volátil (NVS).

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **Parámetros de Entrada**: Un nombre de clave nvs único para las configuraciones de cámara

7. Cargar configuraciones de cámara desde almacenamiento no volátil (NVS).

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **Parámetros de Entrada**: Un nombre de clave nvs único para las configuraciones de cámara

### Parte II: img_converters.h

1. Convertir búfer de imagen a JPEG.

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parámetros de Entrada**:
  - **src**:       Búfer fuente en formato RGB565, RGB888, YUYV o GRAYSCALE
  - **src_len**:   Longitud en bytes del búfer fuente
  - **width**:     Ancho en píxeles de la imagen fuente
  - **height**:    Alto en píxeles de la imagen fuente
  - **format**:    Formato de la imagen fuente
  - **quality**:   Calidad JPEG de la imagen resultante
  - **cp**:        Callback a ser llamado para escribir los bytes del JPEG de salida
  - **arg**:       Puntero a ser pasado al callback

- **Salida**: true en caso de éxito

2. Convertir búfer de fotograma de cámara a JPEG.

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parámetros de Entrada**:
  - **fb**:       Búfer de fotograma de cámara fuente
  - **quality**:  Calidad JPEG de la imagen resultante
  - **cp**:       Callback a ser llamado para escribir los bytes del JPEG de salida
  - **arg**:      Puntero a ser pasado al callback

- **Salida**: true en caso de éxito

3. Convertir búfer de imagen a búfer JPEG.

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parámetros de Entrada**:
  - **src**:       Búfer fuente en formato RGB565, RGB888, YUYV o GRAYSCALE
  - **src_len**:   Longitud en bytes del búfer fuente
  - **width**:     Ancho en píxeles de la imagen fuente
  - **height**:    Alto en píxeles de la imagen fuente
  - **format**:    Formato de la imagen fuente
  - **quality**:   Calidad JPEG de la imagen resultante
  - **out**:       Puntero a ser poblado con la dirección del búfer resultante. DEBES liberar el puntero una vez que hayas terminado con él.
  - **out_len**:   Puntero a ser poblado con la longitud del búfer de salida

- **Salida**: true en caso de éxito

4. Convertir búfer de fotograma de cámara a búfer JPEG.

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parámetros de Entrada**:
  - **fb**:       Búfer de fotograma de cámara fuente
  - **quality**:  Calidad JPEG de la imagen resultante
  - **out**:      Puntero a ser poblado con la dirección del búfer resultante
  - **out_len**:  Puntero a ser poblado con la longitud del búfer de salida

- **Salida**: true en caso de éxito

5. Convertir búfer de imagen a búfer BMP.

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **Parámetros de Entrada**:
  - **src**:       Búfer fuente en formato RGB565, RGB888, YUYV o GRAYSCALE
  - **src_len**:   Longitud en bytes del búfer fuente
  - **width**:     Ancho en píxeles de la imagen fuente
  - **height**:    Alto en píxeles de la imagen fuente
  - **format**:    Formato de la imagen fuente
  - **quality**:   Calidad JPEG de la imagen resultante
  - **out**:       Puntero a ser poblado con la dirección del búfer resultante.
  - **out_len**:   Puntero a ser poblado con la longitud del búfer de salida

- **Salida**: true en caso de éxito

6. Convertir búfer de fotograma de cámara a búfer BMP.

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **Parámetros de Entrada**:
  - **fb**:       Búfer de fotograma de cámara fuente
  - **quality**:  Calidad JPEG de la imagen resultante
  - **cp**:       Callback a ser llamado para escribir los bytes del JPEG de salida
  - **arg**:      Puntero a ser pasado al callback

- **Salida**: true en caso de éxito

### Parte III: app_httpd.cpp

:::note
Esta parte de la introducción de la biblioteca está basada en la sección Crear un terminal de preservación de video -- Basado en WebServer. Esta biblioteca se utiliza principalmente para realizar funciones de adquisición de imágenes y reconocimiento facial para el servidor web. No está incluida directamente en el paquete a bordo del ESP.
:::

1. Función de reconocimiento facial.

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **Parámetros de Entrada**:
  - **fb**: un puntero a una estructura que representa un búfer de fotograma que contiene datos de imagen.
  - **results**: un puntero a una lista de resultados de rostros detectados.

2. Maneja solicitudes HTTP para archivos de imagen BMP.

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **Parámetros de Entrada**: un puntero a una estructura que representa la solicitud HTTP.

3. Codifica datos de imagen JPEG de manera streaming.

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **Parámetros de Entrada**:
  - **arg**: un puntero a un argumento definido por el usuario que se pasa a la función.
  - **index**: un valor de índice que indica la posición actual dentro de los datos de imagen.
  - **data**: un puntero a un búfer que contiene los datos de imagen a ser codificados.
  - **len**: la longitud del búfer de datos.

4. Maneja solicitudes HTTP para capturar y transmitir imágenes desde la cámara.

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **Parámetros de Entrada**: un puntero a una estructura que representa la solicitud HTTP.

5. Maneja solicitudes HTTP para transmitir video desde una cámara.

```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **Parámetros de Entrada**: un puntero a una estructura que representa la solicitud HTTP.

6. Inicializa e inicia un servidor de cámara que captura y transmite video sobre HTTP.

```cpp
void startCameraServer()
```

## Tomando fotos con la cámara

A continuación comenzamos con el uso más básico de la cámara, por ejemplo, primero usaremos la cámara para completar la adquisición de imágenes. El primer proyecto utilizaremos la tarjeta microSD, la tarea principal de este programa es obtener las imágenes de la cámara cada minuto y luego guardar las imágenes en la tarjeta microSD.

Antes de comenzar, haz lo que hice e instala la tarjeta microSD y la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

Puedes encontrar el código completo del programa y los archivos de dependencia requeridos en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

unsigned long lastCaptureTime = 0; // Last shooting time
int imageCount = 1;                // File Counter
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);

  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

void setup() {
  Serial.begin(115200);
  while(!Serial); // When the serial monitor is turned on, the program starts to execute

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
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
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

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true; // Camera initialization check passes

  // Initialize SD card
  if(!SD.begin(21)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
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

  sd_sign = true; // sd initialization check passes

  Serial.println("Photos will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking pictures
  if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture：%s\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::note
La compilación y carga de este programa requiere otras dos dependencias, por favor ve a GitHub y descárgalas completamente.
:::

Por favor sube el programa para XIAO ESP32S3, después de que el programa se haya subido exitosamente, por favor enciende el monitor serie, ajusta la cámara para que mire hacia el objeto que quieres fotografiar, espera un minuto, la foto se guardará en la tarjeta SD. A continuación, XIAO tomará una foto cada minuto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

Retira la tarjeta microSD y con la ayuda del lector de tarjetas, puedes ver las fotos guardadas dentro de la tarjeta.

### Anotación del programa

El programa comienza con las librerías de cámara y tarjeta SD que necesitamos usar, y la importación de algunos archivos de dependencias de pines que definimos para el XIAO ESP32S3.

Luego para facilitar la lectura, definimos dos funciones una tras otra, una es la función `photo_save()` que guarda la imagen capturada en la tarjeta SD, y la otra es la función `writeFile()` que escribe el archivo.

```cpp
// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);

  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}
```

En la función que guarda la imagen en la tarjeta microSD, se realizan dos tareas principales. La primera es la adquisición de la imagen y la segunda es la llamada a la función que escribe el archivo.

Obtener la imagen se puede hacer con `esp_camera_fb_get()`, la información de la imagen se guardará en el puntero `fb`, y luego podemos escribir el `buf` de `fb` en la tarjeta SD.

En la función `Setup()`, un gran segmento del programa está configurando los pines de la cámara y la inicialización de la cámara, podemos simplemente aplicarlo directamente por defecto. Si tienes requisitos para los píxeles o calidad de la cámara, puedes ajustar los valores internos según las funciones descritas en el capítulo [Resumen de la Librería de Cámara](#resumen-de-la-librería-de-cámara).

Lo último que hacer en la función `loop()` es controlar que las fotos se tomen cada minuto y seguir el número incremental como el sufijo del nombre de archivo de las fotos tomadas.

```cpp
if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture：%s\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
```

Antes de ejecutar el `loop()`, configuramos dos verificaciones de bandera `camera_sign` y `sd_sign`. Esto asegura que la tarea de tomar y guardar fotos debe ejecutarse después de que las verificaciones de la cámara y la tarjeta SD se hayan ejecutado exitosamente en `Setup()`.

## Proyecto I: Hacer una cámara portátil

A continuación, usamos el conocimiento teórico anterior para crear un artefacto fotográfico súper pequeño. El resultado final de este proyecto es que la transmisión en vivo de la cámara se muestra en el Seeed Studio Round Display para XIAO, y cuando bloqueas el objeto que quieres fotografiar, tocas la pantalla y tomas una foto para grabar en la tarjeta microSD.

### Preparación preliminar

Antes de comenzar este proyecto, necesitarás preparar el siguiente hardware con anticipación.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display para XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Dado que este proyecto usará Round Display para XIAO, por favor lee el contenido de la **[configuración del entorno Wiki de la placa de expansión de pantalla](https://wiki.seeedstudio.com/es/get_start_round_display#software-preparation)**, instala las librerías necesarias y configura el entorno TFT antes de ejecutar las rutinas de este proyecto.

Dado que el XIAO EPS32S3 Sense está diseñado con tres resistencias pull-up R4~R6 conectadas a la ranura de la tarjeta SD, y la pantalla redonda también tiene resistencias pull-up, la tarjeta SD no se puede leer cuando ambas se usan al mismo tiempo. Para resolver este problema, necesitamos cortar J3 en la placa de expansión XIAO ESP32S3 Sense.

:::tip
Sin embargo, **necesitamos agradecer al ingeniero Mjrovai por el nuevo método de usar la ranura de tarjeta microSD en el XIAO ESP32S3 Sense al mismo tiempo**, lo cual también es posible a nivel de software. Podemos referirnos a **[sus métodos y procedimientos](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

Después de desconectar J3, la ranura de tarjeta SD en XIAO ESP32S3 Sense no funcionará correctamente, por lo que necesitas insertar una tarjeta microSD en la ranura de tarjeta SD en el Round Display.

A continuación, por favor instala la tarjeta microSD, XIAO ESP32S3 Sense y Round Display en orden.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::tip
Recomendamos que retires primero el módulo de cámara para evitar rayar la cámara cuando cortes la conexión J3 con la cuchilla.
:::

### Operación específica

Puedes encontrar el código completo del programa y los archivos de dependencias requeridos en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa Arduino para este proyecto.

```c
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#define TOUCH_INT D7

#include "camera_pins.h"

// Width and height of round display
const int camera_width = 240;
const int camera_height = 240;

// File Counter
int imageCount = 1;
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

TFT_eSPI tft = TFT_eSPI();

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

bool display_is_pressed(void)
{
    if(digitalRead(TOUCH_INT) != LOW) {
        delay(3);
        if(digitalRead(TOUCH_INT) != LOW)
        return false;
    }
    return true;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
//  while(!Serial);

  // Camera pinout
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
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
//  config.frame_size = FRAMESIZE_UXGA;
  config.frame_size = FRAMESIZE_240X240;
//  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
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

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
  Serial.println("Camera ready");
  camera_sign = true; // Camera initialization check passes

  // Display initialization
  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // Initialize SD card
  if(!SD.begin(D2)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
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

  sd_sign = true; // sd initialization check passes

}

void loop() {
  if( sd_sign && camera_sign){

    // Take a photo
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Failed to get camera frame buffer");
      return;
    }

    if(display_is_pressed()){
      Serial.println("display is touched");
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      // Save photo to file
      writeFile(SD, filename, fb->buf, fb->len);
      Serial.printf("Saved picture：%s\n", filename);
      imageCount++;
    }

    // Decode JPEG images
    uint8_t* buf = fb->buf;
    uint32_t len = fb->len;
    tft.startWrite();
    tft.setAddrWindow(0, 0, camera_width, camera_height);
    tft.pushColors(buf, len);
    tft.endWrite();

    // Release image buffer
    esp_camera_fb_return(fb);

    delay(10);
  }
}
```

Sube el programa al XIAO ESP32S3 Sense, si la pantalla no se enciende después de una carga exitosa, es posible que necesites hacer clic en el botón Reset en XIAO, entonces verás la pantalla de monitoreo mostrada en la Round Display en tiempo real. Haz clic en cualquier lugar de la pantalla, la imagen será grabada y guardada en la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

La configuración de la cámara y la tarjeta microSD son contenidos previos, por lo que no los repetiremos aquí. Para el uso de la tarjeta microSD, puedes consultar el Wiki del [sistema de archivos XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem) para aprender cómo usarla.

```cpp
// Take a photo
camera_fb_t *fb = esp_camera_fb_get();
if (!fb) {
  Serial.println("Failed to get camera frame buffer");
  return;
}

...

// Release image buffer
esp_camera_fb_return(fb);

delay(10);
```

El programa anterior, que es el bloque básico de código para llamar a la cámara, se divide en tres partes: captura de pantalla, salida de excepción y liberación del búfer de fotos.

```cpp
if(display_is_pressed()){
  Serial.println("display is touched");
  char filename[32];
  sprintf(filename, "/image%d.jpg", imageCount);
  // Save photo to file
  writeFile(SD, filename, fb->buf, fb->len);
  Serial.printf("Saved picture：%s\n", filename);
  imageCount++;
}
```

El programa anterior se usa para verificar si la pantalla es tocada. Si es así, el código guarda la imagen capturada en un archivo en una tarjeta microSD.

```cpp
// Decode JPEG images
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

Esta parte del código muestra la imagen capturada en una pantalla. Primero recupera el búfer de imagen y su longitud de la estructura `camera_fb_t`. Luego, configura la pantalla para recibir los datos de imagen y muestra la imagen en la pantalla usando la función `pushColors()`.

## Grabar videos cortos y guardar en tarjeta microSD

:::note
No recomendamos la exportación de codificación de video en MCU porque los recursos de biblioteca de codificación actualmente soportados son demasiado pequeños y la operación es muy complicada y tediosa.

Este ejemplo no involucra codificación de video, y el video exportado es un compuesto MJPG de AVI por frame, por lo que la grabación de video puede no ser particularmente buena y satisfactoria. El propósito de este tutorial es proporcionarte métodos simples e ideas para grabar videos cortos, y damos la bienvenida a socios que tengan mejores soluciones para enviarnos PR.
:::

En los capítulos anteriores, dominamos cómo usar la cámara para capturar imágenes. Sabemos que una sola imagen se une para hacer una imagen de video en movimiento. Basado en esta teoría, nuestro proyecto en este capítulo te guiará sobre cómo escribir un programa para grabar un video de 10 segundos cada 1 minuto y guardarlo en una tarjeta microSD.

Puedes encontrar el código completo del programa y los archivos de dependencia requeridos en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_timer.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const int SD_PIN_CS = 21;

File videoFile;
bool camera_sign = false;
bool sd_sign = false;
unsigned long lastCaptureTime = 0;
unsigned long captureDuration = 10000; // 10 seconds
int imageCount = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial);

  // Initialize the camera
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
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_SVGA;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true;

  // Initialize the SD card
  if (!SD.begin(SD_PIN_CS)) {
    Serial.println("SD card initialization failed!");
    return;
  }

  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
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

  sd_sign = true;

  Serial.println("Video will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking video
  if (camera_sign && sd_sign) {
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last video capture, start capturing a new video
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/video%d.avi", imageCount);
      videoFile = SD.open(filename, FILE_WRITE);
      if (!videoFile) {
        Serial.println("Error opening video file!");
        return;
      }
      Serial.printf("Recording video：%s\n", filename);
      lastCaptureTime = now;

      // Start capturing video frames
      while ((millis() - lastCaptureTime) < captureDuration) {
        camera_fb_t *fb = esp_camera_fb_get();
        if (!fb) {
          Serial.println("Error getting framebuffer!");
          break;
        }
        videoFile.write(fb->buf, fb->len);
        esp_camera_fb_return(fb);
      }

      // Close the video file
      videoFile.close();
      Serial.printf("Video saved: %s\n", filename);
      imageCount++;

      Serial.println("Video will begin in one minute, please be ready.");

      // Wait for the remaining time of the minute
      delay(60000 - (millis() - lastCaptureTime));
    }
  }
}
```

Sube el código al XIAO ESP32S3 Sense, enciende el monitor serie, en este momento por favor ajusta la posición de la cámara al objeto que quieres grabar, después de un minuto, el LED naranja en XIAO comenzará a parpadear y la grabación comenzará y se guardará en la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::note
Dado que el programa no involucra configuraciones como codificación y velocidad de fotogramas, el video puede abrirse por solo un segundo si no hay cambio en cada frame del metraje grabado.
:::

### Anotación del programa

El núcleo y la clave en el procedimiento de grabación de video es seguir adquiriendo el flujo de fotos por un período continuo de 10 segundos y escribirlo a la tarjeta microSD continuamente.

```cpp
// Start capturing video frames
while ((millis() - lastCaptureTime) < captureDuration) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Error getting framebuffer!");
    break;
  }
  videoFile.write(fb->buf, fb->len);
  esp_camera_fb_return(fb);
}
```

Además de eso, anidamos una capa de juicios de espera de 1 minuto en el exterior para asegurar que el video comience cada 1 minuto.

```cpp
//If it has been more than 1 minute since the last video capture, start capturing a new video
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

## Proyecto II: Transmisión de Video

Al final de este tutorial, mostremos un proyecto de transmisión de video. Este proyecto te permite ver una transmisión de video en vivo en una página web creada por XIAO ESP32S3 Sense, y puedes cambiar la visualización de la pantalla configurando algunos parámetros.

Puedes encontrar el código completo del programa y los archivos de dependencia requeridos en el siguiente enlace.

Si estás usando el paquete de placas esp32 con versión **2.0.x** en Arduino. Por favor descarga con:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_2.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Si estás usando el paquete de placas esp32 con versión **3.0.x** en Arduino. Por favor descarga con:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_3.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```cpp
#include "esp_camera.h"
#include <WiFi.h>

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

// ===========================
// Enter your WiFi credentials
// ===========================
const char* ssid = "**********";
const char* password = "**********";

void startCameraServer();
void setupLedFlash(int pin);

void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.setDebugOutput(true);
  Serial.println();

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
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
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

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // flip it back
    s->set_brightness(s, 1); // up the brightness just a bit
    s->set_saturation(s, -2); // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  if(config.pixel_format == PIXFORMAT_JPEG){
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  // Do nothing. Everything is done in another task by the web server
  delay(10000);
}
```

Antes de subir el programa, necesitas cambiar el nombre de WiFi y la contraseña en el código por los tuyos. Después de subir el programa, si el XIAO ESP32C3 se conecta exitosamente a tu WiFi, su dirección IP será impresa.

:::caution
XIAO ESP32S3 Si realizas este proyecto por un tiempo prolongado, por favor presta atención a la disipación de calor, XIAO se volverá muy caliente, ¡ten cuidado con las quemaduras!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

:::tip
Como puedes ver en la figura anterior, si activas la salida de información de depuración, entonces podrías ver parte de la información de depuración del kernel del chip impresa en el monitor serie. Por ejemplo `[0;31mE (2947) MFN: Partition Not found[0m`, por favor no te preocupes por eso, no afecta la ejecución del programa.
:::

Por favor abre tu navegador, recomendamos Edge o Google Chrome, e ingresa esa dirección IP y verás la página de configuración para el video.

:::note
Por favor ten en cuenta que el dispositivo en el que estás usando el navegador necesita estar en la misma LAN que XIAO.
:::

Después de configurar las especificaciones de transmisión de video que quieres establecer, haz clic en **Start Stream** en la parte inferior de la barra de herramientas izquierda y verás la transmisión en vivo de la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

Afortunadamente, ESP32 también ha añadido oficialmente reconocimiento facial al programa. Puedes experimentar la función activando el interruptor de botón para reconocimiento facial con calidad de imagen reducida.

:::tip
Por razones de rendimiento, la calidad de la pantalla no puede ser mayor que **CIF**, de lo contrario la página web mostrará un error cuando actives el interruptor para reconocimiento facial.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

Oh, mi cara grande está encerrada en un círculo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>

## Enfoque Automático OV5640

### Preparación de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Cámara OV5640 para XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html?qid=UXYOXT_08tfc9pt_1746512260418" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación de Software

#### Método 1

Agradecimientos especiales a **@Eric** por proporcionar el código de código abierto

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/0015/ESP32-OV5640-AF/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**Ejemplo de Código**

``` cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const char* ssid = "";
const char* password = "";

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.setDebugOutput(true);
  Serial.println();

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
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
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

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  ov5640.start(s);

    if (ov5640.focusInit() == 0) {
    Serial.println("OV5640_Focus_Init Successful!");
  }

  if (ov5640.autoFocusMode() == 0) {
    Serial.println("OV5640_Auto_Focus Successful!");
  }

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("Check your OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("Focused!");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("Focusing!");
  }
}

```

### Gráfico de Resultados

:::tip
La resolución debe ser superior a 1280*1024 para ver el efecto de enfoque, la pantalla se ralentizará y necesitarás esperar un momento para que la pantalla responda durante el enfoque.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.gif" style={{width:700, height:'auto'}}/></div>

#### Método 2

:::tip
La resolución debe ser superior a 1600*1200 para ver el efecto de enfoque, la pantalla se ralentizará y necesitarás esperar un momento para que la pantalla responda durante el enfoque.
:::

Descarga el siguiente archivo zip y agrégalo a Arduino

- **[ZIP]** [OV5640 Auto](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640_AF.zip)

:::tip
Las librerías OV5640 del método 1 y método 2 no pueden existir al mismo tiempo
:::

```cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const char *ssid = "";
const char *password = "";

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);

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
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode = CAMERA_GRAB_LATEST;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 10;
  config.fb_count = 2;

  if(psramFound()){
    config.jpeg_quality = 10;
    config.fb_count = 2;
    config.grab_mode = CAMERA_GRAB_LATEST;
  } else {
    // Limit the frame size when PSRAM is not available
    config.frame_size = FRAMESIZE_SVGA;
    config.fb_location = CAMERA_FB_IN_DRAM;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  // auto focus
#if 1
  sensor_t* sensor = esp_camera_sensor_get();
  int ret = 0;
  ov5640.start(sensor);

  if (ov5640.focusInit() == 0) {
      Serial.println("OV5640_Focus_Init Successful!");
  } else {
      Serial.println("OV5640_Focus_Init Failed!");
  }

  ret = ov5640.autoFocusMode(false);
  if (ret == 0) {
    Serial.println("OV5640_Auto_Focus Successful!");
  } else {
    Serial.printf("OV5640_Auto_Focus Failed! - [%d]\n", ret);
  }
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");

  startCameraServer();

  Serial.printf("Camera Ready! Use 'http://%s' to connect\n", WiFi.localIP().toString().c_str());
}

void loop() {
  if (Serial.available()) {
    sensor_t* sensor = esp_camera_sensor_get();
    int ret = 0;

    switch (Serial.read()) {
      case 'b':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x03);
        Serial.printf("begin to auto focus - %d\n", ret);
        break;
      case 's':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x06);
        Serial.printf("focus stop here - %d\n", ret);
        break;
    }
  }

  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("Check your OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("Focused!");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("Focusing!");
  } else {
  }

  delay(1000);
}
```

:::tip
Se recomienda el Modo 1 porque tiene un efecto de enfoque más pronunciado que el Modo 2 y proporciona una imagen más nítida.
:::

## Solución de Problemas

### P1: Cuando se usan juntos XIAO ESP32S3 Sense y Round Display, ¿tengo que cortar el pin J3? ¿Qué ranura de tarjeta SD se puede usar?

R: En principio, necesitas cortar el pin J3 cuando XIAO ESP32S3 Sense se usa junto con Round Display para usar la tarjeta microSD. La razón es que hay resistencias pull-up en el diseño del circuito de ambas placas de expansión, por lo que teóricamente, si dos resistencias pull-up funcionan al mismo tiempo, entonces la ranura de tarjeta SD no funcionará correctamente. Aparecerá un mensaje de error de fallo en el montaje de la tarjeta SD. Dado que la resistencia pull-up en el Round Display no se puede bloquear, necesitas cortar J3 en la placa de expansión sense para asegurar que solo una resistencia pull-up esté funcionando cuando ambas se usan juntas. Esto también determina que cuando ambas se usan juntas, existe y solo la ranura de tarjeta SD en el Round Display está activa.

Sin embargo, **necesitamos agradecer al ingeniero Mjrovai por el nuevo método de usar la ranura de tarjeta microSD en el XIAO ESP32S3 Sense al mismo tiempo**, lo cual también es posible a nivel de software. Podemos consultar **[sus métodos y procedimientos](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.

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
