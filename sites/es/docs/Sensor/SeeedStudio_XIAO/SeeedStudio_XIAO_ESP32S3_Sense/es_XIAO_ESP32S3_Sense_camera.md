---
description: Este tutorial explicará cómo usar correctamente la cámara en la XIAO ESP32S3 Sense.
title: Uso de la cámara para la versión Sense
keywords:
  - xiao esp32s3
  - esp32s3
  - camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_camera_usage
last_update:
  date: 04/17/2023
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2025-12-24'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage/
---

# Uso de la cámara en Seeed Studio XIAO ESP32S3 Sense

:::tip
El contenido de este tutorial solo es aplicable a Seeed Studio XIAO ESP32S3 Sense.
:::

En este tutorial, te guiaremos en el uso del módulo de cámara en la XIAO ESP32S3 Sense. Este tutorial se divide en las siguientes partes: primero, explicaremos la función de cámara proporcionada por ESP32 y sus funciones. En segundo lugar, te mostraremos cómo usar la cámara en dos dimensiones: tomar fotos y grabar videos, y por último, crearemos algunos proyectos interesantes en torno a tomar fotos y grabar videos.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introducción

Este tutorial puede implicar el uso de tarjeta microSD, cámara, antena, etc. Por favor, prepara los siguientes materiales e instálalos correctamente según las necesidades de tu proyecto.

#### Instalación de la antena

En la parte inferior izquierda del frontal de la XIAO ESP32S3, hay un "WiFi/BT Antenna Connector" independiente. Para obtener una mejor señal WiFi/Bluetooth, necesitas sacar la antena del interior del paquete e instalarla en el conector.

La instalación de la antena tiene un pequeño truco: si la presionas directamente con fuerza hacia abajo, verás que es muy difícil de presionar y ¡te dolerán los dedos! La forma correcta de instalar la antena es introducir primero un lado del conector de la antena en el bloque del conector, luego presionar un poco el otro lado, y la antena quedará instalada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

### Instalación de las placas de expansión (para Sense)

Instalar la placa de expansión es muy sencillo, solo necesitas alinear el conector de la placa de expansión con el conector B2B de la XIAO ESP32S3, presionarlo con fuerza y escuchar un "clic"; la instalación estará completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos en nuestro catálogo una nueva y potente cámara totalmente compatible con XIAO ESP32S3 Sense, la OV5640, y si la compras, puedes sustituir la cámara para usarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

Si necesitas conocer la información detallada de los parámetros de la OV5640, puedes consultar la siguiente tabla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos los programas sobre cámaras en el Wiki son compatibles tanto con las cámaras OV5640 como con OV2640.
:::

### Preparar la tarjeta microSD

XIAO ESP32S3 Sense admite tarjetas microSD de hasta **32GB**, así que si estás listo para comprar una tarjeta microSD para XIAO, por favor, toma como referencia esta especificación. Y formatea la tarjeta microSD al formato **FAT32** antes de usarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después de formatearla, puedes insertar la tarjeta microSD en la ranura correspondiente. Por favor, presta atención a la dirección de inserción: el lado con los contactos dorados debe mirar hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### Diseño del circuito de la ranura de la cámara para las placas de expansión

La ranura de tarjeta de la XIAO ESP32S3 Sense ocupa 14 GPIO del ESP32-S3, y los detalles de los pines ocupados se muestran en la tabla siguiente.

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
        </tr]
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

La PSRAM del ESP32 se refiere a la PSRAM externa (Pseudo Static Random Access Memory) en el chip ESP32, que proporciona espacio de memoria adicional para aumentar la memoria disponible del sistema ESP32. En el sistema ESP32, la PSRAM tiene los siguientes usos principales:

1. Ampliar la RAM disponible: La RAM integrada del ESP32 es limitada, especialmente para algunas aplicaciones que necesitan mucha memoria, como el procesamiento de imágenes, el procesamiento de audio, etc., la RAM integrada puede no ser suficiente. Mediante el uso de PSRAM, se puede ampliar la RAM disponible del ESP32 para satisfacer las necesidades de estas aplicaciones.

2. Acelerar el acceso a la memoria: Dado que la PSRAM es memoria externa, la velocidad de acceso es más lenta que la de la RAM interna; sin embargo, puede utilizarse como caché o memoria temporal para acelerar el acceso a la memoria y el procesamiento de datos.

3. Almacenar búferes: Para aplicaciones que requieren búferes grandes, como búferes de red, búferes de audio, etc., la PSRAM puede proporcionar suficiente espacio de almacenamiento para evitar situaciones de falta de memoria.

Para el contenido de este tutorial, **necesitas activar la función PSRAM** del Arduino IDE para garantizar que la cámara funcione correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

## Descripción general de la biblioteca de la cámara

Antes de empezar, te recomendamos leer este capítulo para comprender las funciones comunes de la cámara, de modo que puedas usar estas funciones para completar el desarrollo de tu propio proyecto o poder leer el programa más fácilmente.

### Parte I: esp_camera.h

1. Estructura de configuración para la inicialización de la cámara.

A continuación se muestra un ejemplo de la configuración; solo tienes que rellenarla según la situación real de los pines.

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

2. Inicializar el controlador de la cámara.

Después de configurar `camera_example_config` en el formato anterior, necesitamos usar esta función para inicializar el controlador de la cámara.

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **Parámetros de entrada**: Parámetros de configuración de la cámara

- **Salida**: ESP_OK en caso de éxito

:::note
Actualmente esta función solo puede llamarse una vez y no hay forma de desinicializar este módulo.
:::

3. Obtener un puntero a un búfer de fotogramas.

```cpp
camera_fb_t* esp_camera_fb_get();
```

Estructura de datos del búfer de fotogramas de la cámara:

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

4. Devuelve el búfer de fotogramas para volver a utilizarlo.

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **Parámetros de entrada**: Puntero al búfer de fotogramas

5. Obtén un puntero a la estructura de control del sensor de imagen.

```cpp
sensor_t * esp_camera_sensor_get();
```

- **Salida**: puntero al sensor

6. Guarda la configuración de la cámara en la memoria no volátil (NVS).

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **Parámetros de entrada**: Un nombre de clave NVS único para la configuración de la cámara

7. Carga la configuración de la cámara desde la memoria no volátil (NVS).

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **Parámetros de entrada**: Un nombre de clave NVS único para la configuración de la cámara

### Parte II: img_converters.h

1. Convierte el búfer de imagen a JPEG.

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parámetros de entrada**:
  - **src**:       Búfer de origen en formato RGB565, RGB888, YUYV o GRAYSCALE
  - **src_len**:   Longitud en bytes del búfer de origen
  - **width**:     Ancho en píxeles de la imagen de origen
  - **height**:    Alto en píxeles de la imagen de origen
  - **format**:    Formato de la imagen de origen
  - **quality**:   Calidad JPEG de la imagen resultante
  - **cp**:        Callback que se llamará para escribir los bytes del JPEG de salida
  - **arg**:       Puntero que se pasará al callback

- **Salida**: true si tiene éxito

2. Convierte el búfer de fotogramas de la cámara a JPEG.

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parámetros de entrada**:
  - **fb**:       Búfer de fotogramas de la cámara de origen
  - **quality**:  Calidad JPEG de la imagen resultante
  - **cp**:       Callback que se llamará para escribir los bytes del JPEG de salida
  - **arg**:      Puntero que se pasará al callback

- **Salida**: true si tiene éxito

3. Convierte el búfer de imagen a un búfer JPEG.

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
  - **src**:       Búfer de origen en formato RGB565, RGB888, YUYV o GRAYSCALE
  - **src_len**:   Longitud en bytes del búfer de origen
  - **width**:     Ancho en píxeles de la imagen de origen
  - **height**:    Alto en píxeles de la imagen de origen
  - **format**:    Formato de la imagen de origen
  - **quality**:   Calidad JPEG de la imagen resultante
  - **out**:       Puntero que se rellenará con la dirección del búfer resultante. DEBES liberar el puntero cuando termines de usarlo.
  - **out_len**:   Puntero que se rellenará con la longitud del búfer de salida

- **Salida**: true si tiene éxito

4. Convierte el búfer de fotogramas de la cámara a un búfer JPEG.

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
  - **fb**:       Búfer de fotogramas de la cámara de origen
  - **quality**:  Calidad JPEG de la imagen resultante
  - **out**:      Puntero que se rellenará con la dirección del búfer resultante
  - **out_len**:  Puntero que se rellenará con la longitud del búfer de salida

- **Salida**: true si tiene éxito

5. Convierte el búfer de imagen a un búfer BMP.

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
  - **src**:       Búfer de origen en formato RGB565, RGB888, YUYV o GRAYSCALE
  - **src_len**:   Longitud en bytes del búfer de origen
  - **width**:     Ancho en píxeles de la imagen de origen
  - **height**:    Alto en píxeles de la imagen de origen
  - **format**:    Formato de la imagen de origen
  - **quality**:   Calidad JPEG de la imagen resultante
  - **out**:       Puntero que se rellenará con la dirección del búfer resultante.
  - **out_len**:   Puntero que se rellenará con la longitud del búfer de salida

- **Salida**: true si tiene éxito

6. Convierte el búfer de fotogramas de la cámara a un búfer BMP.

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
  - **fb**:       Búfer de fotogramas de la cámara de origen
  - **quality**:  Calidad JPEG de la imagen resultante
  - **cp**:       Callback que se llamará para escribir los bytes del JPEG de salida
  - **arg**:      Puntero que se pasará al callback

- **Salida**: true si tiene éxito

### Parte III: app_httpd.cpp

:::note
Esta parte de la introducción de la biblioteca se basa en la sección Create a video preservation terminal -- Based WebServer. Esta biblioteca se utiliza principalmente para realizar funciones de adquisición de imágenes y reconocimiento facial para el servidor web. No está incluida directamente en el paquete integrado de ESP.
:::

1. Función de reconocimiento facial.

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **Parámetros de entrada**:
  - **fb**: un puntero a una estructura que representa un búfer de fotogramas que contiene datos de imagen.
  - **results**: un puntero a una lista de resultados de rostros detectados.

2. Gestiona solicitudes HTTP para archivos de imagen BMP.

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **Parámetros de entrada**: un puntero a una estructura que representa la solicitud HTTP.

3. Codifica datos de imagen JPEG de forma continua (streaming).

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **Parámetros de entrada**:
  - **arg**: un puntero a un argumento definido por el usuario que se pasa a la función.
  - **index**: un valor de índice que indica la posición actual dentro de los datos de la imagen.
  - **data**: un puntero a un búfer que contiene los datos de imagen que se van a codificar.
  - **len**: la longitud del búfer de datos.

4. Gestiona solicitudes HTTP para capturar y transmitir imágenes desde la cámara.

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **Parámetros de entrada**: un puntero a una estructura que representa la solicitud HTTP.

5. Gestiona solicitudes HTTP para transmitir vídeo desde una cámara.

```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **Parámetros de entrada**: un puntero a una estructura que representa la solicitud HTTP.

6. Inicializa y arranca un servidor de cámara que captura y transmite vídeo a través de HTTP.

```cpp
void startCameraServer()
```


## Tomar fotos con la cámara

A continuación empezamos con el uso más básico de la cámara; por ejemplo, primero utilizaremos la cámara para completar la adquisición de imágenes. En el primer proyecto utilizaremos la tarjeta microSD; la tarea principal de este programa es obtener las imágenes de la cámara cada minuto y luego guardarlas en la tarjeta microSD.

Antes de empezar, haz lo mismo que yo e instala la tarjeta microSD y la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

Puedes encontrar el código completo del programa y los archivos de dependencias necesarios en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (github.com/0015/ESP32-OV5640-AF)

OV5640 ov5640 = OV5640();

#define OV5640_AF_FOCUS_FRAMESIZE FRAMESIZE_SXGA // AF focusing requires >=1280x1024
#define OV5640_FOCUS_TIMEOUT_MS  8000

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
    Serial.printf("Writing file: %s\r\n", path);

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

// Wait for the OV5640 continuous auto-focus to settle (FW_STATUS == 0x10 FOCUSED)
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) {
      Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status);
      return true;
    }
    delay(100);
  }
  Serial.printf("ERROR: OV5640 focus not settled within %u ms; last FW_STATUS=0x%02X\n",
                OV5640_FOCUS_TIMEOUT_MS, status);
  return false;
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

  // --- OV5640 auto-focus init (a key step missing from factory firmware; without it the lens defaults out of focus) ---
  sensor_t *s = esp_camera_sensor_get();
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    // Switch to SXGA for focusing (the AF firmware needs >=1280x1024 to evaluate contrast)
    if (s->set_framesize(s, OV5640_AF_FOCUS_FRAMESIZE) != 0) {
      Serial.println("WARN: cannot set SXGA for AF focus, captures will be out of focus");
    } else if (!ov5640.start(s)) {
      Serial.println("WARN: OV5640 CHIPID check failed, AF skipped");
      s->set_framesize(s, config.frame_size); // restore the capture framesize
    } else {
      int r1 = ov5640.focusInit();                       // load focus firmware, 0 = success
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;  // enable continuous auto-focus
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0 && waitForOv5640Focus()) {
        Serial.println("OV5640 AF ready.");
      } else {
        Serial.println("ERROR: OV5640 AF setup failed; captures will be out of focus.");
      }
      // Restore the capture framesize
      if (s->set_framesize(s, config.frame_size) != 0) {
        Serial.println("WARN: cannot restore capture framesize");
      }
    }
  }

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
      Serial.printf("Saved picture: %s\r\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::note
La compilación y carga de este programa requiere otras dos dependencias, por favor ve a GitHub y descárgalas completas.
:::

Por favor carga el programa para XIAO ESP32S3, después de que el programa se cargue correctamente, enciende el monitor serie, ajusta la cámara para que apunte al objeto que quieres fotografiar, espera un minuto y la toma se guardará en la tarjeta SD. A continuación, XIAO tomará una foto cada minuto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

Retira la tarjeta microSD y, con la ayuda del lector de tarjetas, podrás ver las fotos guardadas dentro de la tarjeta.

### Anotación del programa

El programa comienza con las librerías de la cámara y de la tarjeta SD que necesitamos usar, y la importación de algunos archivos de dependencia de pines que definimos para la XIAO ESP32S3.

Luego, para facilitar la lectura, definimos dos funciones una tras otra, una es la función `photo_save()` que guarda la imagen capturada en la tarjeta SD, y la otra es la función `writeFile()` que escribe el archivo.

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

La obtención de la imagen se puede hacer con `esp_camera_fb_get()`, la información de la imagen se guardará en el puntero `fb`, y luego podemos escribir el `buf` de `fb` en la tarjeta SD.

En la función `Setup()`, un gran segmento del programa está configurando los pines de la cámara y la inicialización de la cámara, podemos simplemente aplicarlo directamente por defecto. Si tienes requisitos para los píxeles o la calidad de la cámara, puedes ajustar los valores internos de acuerdo con las funciones descritas en el capítulo [Camera Library Overview](#visión-general-de-la-biblioteca-de-cámara).

Lo último que hay que hacer en la función `loop()` es controlar que las fotos se tomen cada minuto y seguir el número incremental como sufijo del nombre de archivo de las fotos tomadas.

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

Antes de ejecutar el `loop()`, configuramos dos comprobaciones de bandera `camera_sign` y `sd_sign`. Esto garantiza que la tarea de tomar y guardar imágenes solo se ejecute después de que las comprobaciones de la cámara y la tarjeta SD se hayan ejecutado correctamente en `Setup()`.

## Proyecto I: Fabricar una cámara de mano

A continuación, utilizamos los conocimientos teóricos anteriores para crear un artefacto fotográfico súper pequeño. El resultado final de este proyecto es que la transmisión en vivo de la cámara se muestra en la Seeed Studio Round Display for XIAO, y cuando fijes el objeto que quieres fotografiar, toques la pantalla y tomes una foto para registrarla en la tarjeta microSD.

### Preparación preliminar

Antes de comenzar este proyecto, tendrás que preparar con antelación el siguiente hardware.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Dado que este proyecto utilizará Round Display for XIAO, lee el contenido de **[Wiki environment configuration of the display expansion board](https://wiki.seeedstudio.com/es/get_start_round_display#software-preparation)**, instala las librerías necesarias y configura el entorno TFT antes de ejecutar las rutinas de este proyecto.

Dado que el XIAO EPS32S3 Sense está diseñado con tres resistencias pull-up R4~R6 conectadas a la ranura de la tarjeta SD, y la pantalla redonda también tiene resistencias pull-up, las dos ranuras de tarjeta SD entran en conflicto cuando ambas placas se utilizan al mismo tiempo. Hay dos maneras de resolver este problema:

- **Opción 1 — sin cambios de hardware (utilizada por el código de ejemplo de este proyecto)**: mantén J3 intacto y utiliza la ranura de tarjeta microSD en el propio XIAO ESP32S3 Sense. Como lo demuestra el **ingeniero Mjrovai**, esto es posible a nivel de software: el código siguiente inicializa la tarjeta SD con `SD_CS_PIN 21` (el lector de tarjetas Sense). Para más detalles, consulta **[sus métodos y procedimientos](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.
- **Opción 2 — cortar J3 y usar la ranura de Round Display**: corta J3 en la placa de expansión XIAO ESP32S3 Sense. Después de desconectar J3, la ranura de tarjeta SD en XIAO ESP32S3 Sense ya no funcionará, por lo que tendrás que insertar la tarjeta microSD en la ranura de tarjeta SD en la Round Display y cambiar `SD_CS_PIN` en el código de `21` a `D2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

:::tip
Si eliges la Opción 2, te recomendamos que primero retires el módulo de la cámara para evitar rayar la cámara cuando cortes la conexión J3 con la cuchilla.
:::

A continuación, instala la tarjeta microSD, XIAO ESP32S3 Sense y Round Display en orden.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

### Operación específica

Puedes encontrar el código completo del programa y los archivos de dependencia necesarios en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture_fix" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```c
/*
 * This code was adapted from the original, developed by Seeed Studio:
 * https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera
 *
 * Important changes:
 *  - It is not necessary to to cut off J3 on the XIAO ESP32S3 Sense expansion board.
 *  It is possible to use the XIAO's SD Card Reader. For that you need use SD_CS_PIN as 21.
 *
 * - The camera buffer data should be captured as RGB565 (raw image) with a 240x240 frame size
 * to be displayed on the round display. This raw image should be converted to jpeg before save
 * in the SD card. This can be done with the line:
 * bool ok = frame2jpg(fb, 12, &out_buf, &out_len);
 *
 * - The XCLK_FREQ_HZ should be reduced from 20KHz to 10KHz in order to prevent
 * the message "no EV-VSYNC-OVF message" that appears on Serial Monitor (probably due the time
 * added for JPEG conversion.
 *
 * Adapted by MRovai @02June23
 *
 * Generic OV5640 auto-focus patch (only applies to the OV5640; fixed-focus modules
 * such as the OV3660/NT99141 are skipped automatically):
 *  - After esp_camera_init, run focusInit / autoFocusMode only when PID == OV5640_PID
 *  - In RGB565 mode do not switch to SXGA (it would overflow the fb buffer);
 *    rely on the OV5640's internal full-size image for focus evaluation
*/

#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (github.com/0015/ESP32-OV5640-AF), OV5640 only
#include "FS.h"
#include "SD.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#define TOUCH_INT D7

/*
 * NOTE: This sketch keeps J3 intact and uses the microSD card slot on the
 * XIAO ESP32S3 Sense itself (SD_CS_PIN 21), so no hardware change is needed
 * (Mjrovai's software-level method). If you have cut J3 and want to use the
 * Round Display card reader instead, comment out the 21 line and use D2.
 */

#define SD_CS_PIN 21 // ESP32S3 Sense SD Card Reader
//#define SD_CS_PIN D2 // XIAO Round Display SD Card Reader (requires J3 cut)

#include "camera_pins.h"

// Width and height of round display
const int camera_width = 240;
const int camera_height = 240;

// File Counter
int imageCount = 1;
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

TFT_eSPI tft = TFT_eSPI();

// --- OV5640 AF (OV5640 module only) ---
OV5640 ov5640 = OV5640();
#define OV5640_FOCUS_TIMEOUT_MS 8000

// Wait for the OV5640 continuous auto-focus to settle (FW_STATUS == 0x10 FOCUSED)
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) {
      Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status);
      return true;
    }
    delay(100);
  }
  Serial.printf("WARN: OV5640 focus not settled within %u ms; last FW_STATUS=0x%02X\n",
                OV5640_FOCUS_TIMEOUT_MS, status);
  return false;
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
  Serial.begin(115200);
  delay(300);
  Serial.println();
  Serial.println("==== round_display_take_picture_fix ====");

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
  config.xclk_freq_hz = 10000000; // Reduced XCLK_FREQ_HZ from 20KHz to 10KHz (no EV-VSYNC-OVF message)
  config.frame_size = FRAMESIZE_240X240;
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  // RGB565 240x240 uses a single internal-DRAM buffer: TFT_eSPI's SPI DMA can read
  // DRAM directly, while reading from PSRAM crashes pushColors (see the Setup66 + PSRAM issue notes)
  config.fb_location = CAMERA_FB_IN_DRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
  Serial.println("Camera ready");
  camera_sign = true; // Camera initialization check passes

  // --- OV5640 auto-focus init (OV5640 only; fixed-focus modules are skipped) ---
  // A key step missing from factory firmware: esp_camera_init does not set up AF,
  // so the OV5640 defaults to an out-of-focus lens.
  // In RGB565 mode do not switch to SXGA (it would overflow the fb buffer);
  // rely on the OV5640's internal full-size image for focus evaluation.
  sensor_t *s = esp_camera_sensor_get();
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    if (!ov5640.start(s)) {
      Serial.println("WARN: OV5640 CHIPID check failed, AF skipped");
    } else {
      int r1 = ov5640.focusInit();                       // load focus firmware, 0 = success
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;  // enable continuous auto-focus
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0) {
        waitForOv5640Focus();
      } else {
        Serial.println("ERROR: OV5640 AF setup failed; captures will be out of focus.");
      }
    }
  } else {
    Serial.printf("PID=0x%04X (not OV5640), AF skipped - fixed-focus module works as-is.\n",
                  s ? s->id.PID : 0);
  }

  // Display initialization
  tft.init();
  pinMode(TFT_BL, OUTPUT);
  digitalWrite(TFT_BL, HIGH);  // turn on the backlight
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // Initialize SD card - Card Reader under the camera (21)
  // Change to D2 for using Display Card Reader
  if(!SD.begin(SD_CS_PIN)){
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

      // RGB565 -> JPEG, then save to SD (frame2jpg returns bool: true = success)
      size_t out_len = 0;
      uint8_t* out_buf = NULL;
      bool ok = frame2jpg(fb, 12, &out_buf, &out_len);
      if (ok) {
        // Save photo to file
        writeFile(SD, filename, out_buf, out_len);
        Serial.printf("Saved picture: %s\n", filename);
        imageCount++;
        free(out_buf);
      } else {
        Serial.println("JPEG conversion failed");
      }
    }

    // Draw image on the round display
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

Sube el programa a XIAO ESP32S3 Sense; si la pantalla no se enciende después de una carga correcta, puede que necesites pulsar el botón Reset en la XIAO. Entonces verás la pantalla de monitorización mostrada en la Round Display en tiempo real. Haz clic en cualquier parte de la pantalla, la imagen se grabará y guardará en la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

La configuración de la cámara y de la tarjeta microSD son contenidos anteriores, por lo que no los repetiremos aquí. Para el uso de la tarjeta microSD, puedes consultar el Wiki [XIAO ESP32S3 Sense file system](https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem) para aprender cómo utilizarla.

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

El programa anterior, que es el bloque básico de código para llamar a la cámara, se divide en tres partes: captura de pantalla, salida por excepción y liberación del búfer de la foto.

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

El programa anterior se utiliza para comprobar si la pantalla ha sido tocada. Si es así, el código guarda la imagen capturada en un archivo en una tarjeta microSD.

```cpp
// Decode JPEG images
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

Esta parte del código muestra la imagen capturada en una pantalla. Primero obtiene el búfer de imagen y su longitud desde la estructura `camera_fb_t`. Luego, configura la pantalla para recibir los datos de imagen y muestra la imagen en la pantalla usando la función `pushColors()`.

## Grabar vídeos cortos y guardarlos en la tarjeta microSD

:::note
No recomendamos la exportación de codificación de vídeo sobre un MCU porque los recursos de la biblioteca de codificación actualmente soportada son demasiado pequeños y la operación es muy complicada y tediosa.

Este ejemplo no implica codificación de vídeo, y el vídeo exportado es un MJPG compuesto de AVI por fotograma, por lo que la grabación de vídeo puede no ser especialmente buena ni satisfactoria. El propósito de este tutorial es proporcionarte métodos e ideas sencillos para grabar vídeos cortos, y damos la bienvenida a los compañeros que tengan mejores soluciones a enviarnos PR.
:::

En los capítulos anteriores, dominamos cómo usar la cámara para capturar imágenes. Sabemos que una sola imagen se une con otras para formar un vídeo en movimiento. Basándonos en esta teoría, nuestro proyecto en este capítulo te guiará para escribir un programa que grabe un vídeo de 10 segundos cada 1 minuto y lo guarde en una tarjeta microSD.

Puedes encontrar el código completo del programa y los archivos de dependencias necesarios en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

Sube el código a XIAO ESP32S3 Sense, enciende el monitor serie; en este momento ajusta la posición de la cámara hacia el objeto que quieres grabar. Después de un minuto, el LED naranja en la XIAO empezará a parpadear y la grabación comenzará y se guardará en la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::note
Dado que el programa no implica ajustes como codificación y tasa de fotogramas, el vídeo puede abrirse solo durante un segundo si no hay cambios en cada fotograma de la grabación.
:::

### Anotación del programa

El núcleo y la clave en el procedimiento de grabación de vídeo es seguir adquiriendo el flujo de fotos durante un periodo continuo de 10 segundos y escribirlo continuamente en la tarjeta microSD.

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

Además de eso, anidamos una capa de juicios de espera de 1 minuto en el exterior para asegurar que el vídeo comience cada 1 minuto.

```cpp
//If it has been more than 1 minute since the last video capture, start capturing a new video
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

## Proyecto II: Transmisión de vídeo

Al final de este tutorial, mostremos un proyecto de transmisión de vídeo. Este proyecto te permite ver una transmisión de vídeo en vivo en una página web creada por XIAO ESP32S3 Sense, y puedes cambiar la visualización de la pantalla configurando algunos parámetros.

Puedes encontrar el código completo del programa y los archivos de dependencias necesarios en el siguiente enlace.

Si estás usando el paquete de placas esp32 con versión **2.0.x** en Arduino, descárgalo con:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_2.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Si estás utilizando el paquete de placas esp32 con la versión **3.0.x** en Arduino, descárgalo con:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_3.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```cpp
#include "esp_camera.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (OV5640 only)
#include <WiFi.h>

//
// WARNING!!! PSRAM IC required for UXGA resolution and high JPEG quality
//            Ensure ESP32 Wrover Module or other board with PSRAM is selected
//            Partial images will be transmitted if image exceeds buffer size
//
//            You must select partition scheme from the board menu that has at least 3MB APP space.
//            Face Recognition is DISABLED for ESP32 and ESP32-S2, because it takes up from 15
//            seconds to process single frame. Face Detection is ENABLED if PSRAM is enabled as well

// ===================
// Select camera model
// ===================
#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#include "camera_pins.h"

// ===========================
// Enter your WiFi credentials
// ===========================
const char *ssid = "**********";
const char *password = "**********";

void startCameraServer();
void setupLedFlash(int pin);

// --- OV5640 AF (OV5640 module only; fixed-focus modules such as the OV3660/NT99141 are skipped automatically) ---
OV5640 ov5640 = OV5640();
#define OV5640_AF_FOCUS_FRAMESIZE FRAMESIZE_SXGA  // AF focus evaluation requires >=1280x1024
#define OV5640_FOCUS_TIMEOUT_MS 8000
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) { Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status); return true; }
    delay(100);
  }
  Serial.printf("WARN: OV5640 focus not settled; last FW_STATUS=0x%02X\n", status);
  return false;
}

void setup() {
  Serial.begin(115200);
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
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (s && s->id.PID == OV5640_PID) {
    s->set_reg(s, 0x302C, 0xC0, 0x00);
  }
  // --- OV5640 auto-focus init (OV5640 only; fixed-focus modules are skipped) ---
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    if (s->set_framesize(s, OV5640_AF_FOCUS_FRAMESIZE) == 0 && ov5640.start(s)) {
      int r1 = ov5640.focusInit();
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0) waitForOv5640Focus();
      s->set_framesize(s, config.frame_size);  // restore the capture framesize
    } else {
      Serial.println("WARN: OV5640 AF setup failed, skipped");
      s->set_framesize(s, config.frame_size);
    }
  }
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

Antes de subir el programa, necesitas cambiar en el código el nombre y la contraseña de la red WiFi por los tuyos. Después de subir el programa, si el XIAO ESP32C3 se conecta correctamente a tu WiFi, se imprimirá su dirección IP.

:::caution
XIAO ESP32S3 se calentará mucho durante la transmisión de larga duración; por favor, ten cuidado para no quemarte. Para reducir la temperatura, aplica el parche [OV5640 Heat Optimization](#OV5640-optimización-del-calor) que aparece a continuación.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

:::tip
Como puedes ver en la figura anterior, si activas la salida de información de depuración, entonces podrás ver que se imprime en el monitor serie parte de la información de depuración del núcleo del chip. Por ejemplo `[0;31mE (2947) MFN: Partition Not found[0m`, por favor no te preocupes, no afecta a la ejecución del programa.
:::

Por favor, abre tu navegador, recomendamos Edge o Google Chrome, e introduce esa dirección IP y verás la página de configuración del vídeo.

:::note
Ten en cuenta que el dispositivo en el que estás utilizando el navegador debe estar en la misma LAN que el XIAO.
:::

Después de configurar las especificaciones del flujo de vídeo que quieras establecer, haz clic en **Start Stream** en la parte inferior de la barra de herramientas izquierda y verás la transmisión en directo de la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

Afortunadamente, ESP32 también ha añadido oficialmente el reconocimiento facial al programa. Puedes probar esta función activando el interruptor de botón para el reconocimiento facial con una calidad de imagen reducida.

:::tip
Por razones de rendimiento, la calidad de la pantalla no puede ser superior a **CIF**, de lo contrario la página web mostrará un error cuando actives el interruptor de reconocimiento facial.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

Oh, mi gran cara está rodeada por un círculo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>

## Autoenfoque OV5640

### Preparación de hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación de software

#### Método 1

Agradecimientos especiales a **@Eric** por proporcionar el código de código abierto

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/0015/ESP32-OV5640-AF/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**Ejemplo de código**

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
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (s && s->id.PID == OV5640_PID) {
    s->set_reg(s, 0x302C, 0xC0, 0x00);
  }
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

### Tabla de resultados

:::tip
La resolución debe ser superior a 1280*1024 para ver el efecto de enfoque; la pantalla se retrasará y tendrás que esperar un rato a la pantalla cuando esté enfocando.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.gif" style={{width:700, height:'auto'}}/></div>

#### Método 2

:::tip
La resolución debe ser superior a 1600*1200 para ver el efecto de enfoque; la pantalla se retrasará y tendrás que esperar un rato a la pantalla cuando esté enfocando.
:::

Descarga el siguiente archivo zip y añádelo a Arudino

- **[ZIP]** [OV5640 Auto](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640_AF.zip)

:::tip
El OV5640 en las bibliotecas del método 1 y del método 2 no pueden existir al mismo tiempo
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
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (sensor && sensor->id.PID == OV5640_PID) {
    sensor->set_reg(sensor, 0x302C, 0xC0, 0x00);
  }
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
Se recomienda el modo 1 porque tiene un efecto de enfoque más pronunciado que el modo 2 y proporciona una imagen más nítida.
:::

## Optimización de calor de la OV5640

El módulo OV5640 se calienta notablemente durante un uso prolongado. Esta sección ofrece dos formas de reducir la temperatura: ajustar los parámetros de software (Método 1) y reducir la capacidad de accionamiento de E/S mediante una configuración de registros (Método 2).

### Método 1: Reducir el calor ajustando parámetros

El código de ejemplo de este Wiki está ajustado para obtener la mejor calidad de imagen posible — resolución UXGA (1600×1200) con captura continua de fotogramas con doble búfer en los ejemplos de fotos y una CPU a 240 MHz — por lo que la placa se calienta notablemente durante ejecuciones prolongadas. Si consideras que la temperatura es demasiado alta, o no necesitas tanta resolución, puedes reducir el consumo de energía de las siguientes maneras, la mayoría de las cuales no afectan a la nitidez de las capturas individuales:

| Palanca | Qué cambiar | Reducción de calor | ¿Afecta la calidad de imagen? |
|---|---|---|---|
| Frecuencia de la CPU | Arduino IDE: `Tools → CPU Frequency: 240MHz` → `160MHz` (o añade `setCpuFrequencyMhz(160);` en `setup()`) | Media | No (la captura del sensor y la codificación JPEG se realizan dentro del OV5640, independientemente de la CPU) |
| Frecuencia de enfoque | Cambia el autoenfoque continuo (`autoFocusMode`) a enfoque de disparo único activado periódicamente, o alarga el intervalo de enfoque | Pequeña | Sin cambios para escenas estáticas; las escenas en movimiento tardan más en reenfocarse |
| Captura de fotogramas | `CAMERA_GRAB_LATEST` → `CAMERA_GRAB_WHEN_EMPTY` (la cámara llena los búferes disponibles, lo que reduce el procesamiento continuo de fotogramas; no es captura bajo demanda y no pone el sensor en modo de espera) | Media | El fotograma que capturas puede ser unos cuantos fotogramas más antiguo que con `CAMERA_GRAB_LATEST`; la nitidez no se ve afectada |
| Resolución | `FRAMESIZE_UXGA` (1600×1200) → `FRAMESIZE_HD` (1280×720) o `SVGA` (800×600) | Grande | Menos píxeles, por lo que hay menos detalle al ampliar (la nitidez por píxel no cambia) |
| Doble búfer | `fb_count` de 2 a 1 (junto con el cambio de modo de captura anterior) | Media | No |

> La combinación con mejor relación calidad‑precio es usar una resolución más baja y un único búfer de fotograma para reducir la sobrecarga de captura y procesamiento; es decir, bajar un nivel de resolución más `CAMERA_GRAB_WHEN_EMPTY` con `fb_count = 1`. La temperatura baja de forma notable, con casi ningún impacto en la nitidez de las capturas individuales. Ten en cuenta que `CAMERA_GRAB_WHEN_EMPTY` llena los búferes disponibles; no proporciona captura del sensor bajo demanda ni modo de espera.

### Método 2: Reducir la potencia bajando la capacidad de accionamiento de E/S
:::tip
Esta sección solo se aplica al módulo de cámara **OV5640**. El OV2640 no tiene tal registro y se omite automáticamente mediante la comprobación de `PID` en el código siguiente.
:::

Cuando el OV5640 funciona continuamente durante mucho tiempo —transmisión de vídeo, vista previa en vivo o autoenfoque continuo— la temperatura del chip puede subir por encima de 70°C. Esta es una causa raíz a nivel de hardware y no puede eliminarse completamente por software; solo puede mitigarse.

#### Por qué se calienta el OV5640

1. **Caída del regulador interno DVDD**: cuando la alimentación de E/S (DOVDD) es de 2,8 V y se utiliza el regulador interno de DVDD, la gran caída de tensión en sí misma disipa una potencia significativa (indicado en la hoja de datos oficial).
2. **Una secuencia de encendido incorrecta** introduce corriente de fuga y aumenta el consumo de potencia estática.
3. La hoja de datos **recomienda encarecidamente cortar toda la alimentación (incluida la DVDD externa) cuando el sensor no está en uso**, lo que confirma que el consumo en espera del OV5640 no es ideal.

La única palanca de software efectiva es **bajar la corriente de accionamiento de los pines de E/S** para reducir la potencia dinámica.

#### Cómo funciona — registro 0x302C

El registro `0x302C` (llamado `DRIVE_CAPABILITY` en el código fuente de esp32-camera) controla la capacidad de accionamiento de los pines de E/S (D0–D7, PCLK, VSYNC, HREF). El campo clave es **Bit[7:6]**:

| Bit[7:6] | Capacidad de accionamiento |
|---|---|
| `11` | 4x (valor predeterminado al encender el chip) |
| `10` | 3x |
| `01` | 2x |
| `00` | 1x (la más débil, menor corriente, menos calor) |

Cambiar Bit[7:6] de `11` a `00` reduce la capacidad de accionamiento de 4x a 1x. Ese es todo el principio: no hay ninguna otra magia implicada.

#### Código — añade esto justo después de `esp_camera_init()`

```cpp
// --- OV5640 Heat Optimization ---
// Lower IO drive capability via register 0x302C.
// Bit[7:6]: 11=4x (chip default) -> 00=1x (lowest current, least heat).
// Drops chip temperature from ~70°C+ to ~54°C during continuous streaming.
// OV5640 only; the PID check skips OV2640, which has no such register.
sensor_t * s = esp_camera_sensor_get();
if (s && s->id.PID == OV5640_PID) {
  s->set_reg(s, 0x302C, 0xC0, 0x00);
}
```

- `esp_camera_init(&config)` — se llama como de costumbre, la función **no** se modifica. Internamente llama a `sensor.reset()`, que escribe un lote de registros predeterminados.
- `esp_camera_sensor_get()` — obtiene el puntero `sensor_t *` necesario para comunicarse con el sensor.
- `if (s->id.PID == OV5640_PID)` — solo se aplica al OV5640. Todos los ejemplos de este wiki también son compatibles con el OV2640, y `0x302C` es específico del OV5640, por lo que no debe escribirse en un OV2640. El ejemplo de transmisión de vídeo ya utiliza el mismo patrón `if (s->id.PID == OV3660_PID)`.
- `s->set_reg(s, 0x302C, 0xC0, 0x00)` — lee de vuelta `0x302C`, borra solo **Bit[7:6]** a `00` (máscara `0xC0 = 0b11000000`, valor `0x00`), y deja los otros bits tal como los configuró la biblioteca. Esto es más seguro que escribir `0x03` directamente: no depende del valor predeterminado de la biblioteca y solo toca los bits de capacidad de accionamiento.

#### Efecto y riesgos

- **Efecto**: bajo transmisión continua de larga duración, la temperatura del chip OV5640 baja de ~70°C+ a ~54°C (varía con la temperatura ambiente y el disipador).
- **Riesgo**: una menor capacidad de accionamiento ralentiza los flancos de señal, lo que eleva el listón para la inmunidad al ruido de las pistas de PCB; en casos extremos puede introducir ruido de imagen o distorsión de muestreo. En el XIAO ESP32S3 Sense + OV5640 (versión con disipador) el impacto es aceptable en las pruebas.
- **Alcance**: solo OV5640; el OV2640 no tiene tal registro y se omite mediante la comprobación de `PID`.

## Solución de problemas

### P1: Cuando se usan juntos XIAO ESP32S3 Sense y Round Display, ¿tengo que cortar el pin J3? ¿Qué ranura de tarjeta SD se puede usar?

R: En principio, necesitas cortar el pin J3 cuando XIAO ESP32S3 Sense se usa junto con Round Display para usar la tarjeta microSD. La razón es que hay resistencias de pull‑up en el diseño del circuito de ambas placas de expansión, por lo que, teóricamente, si dos resistencias de pull‑up funcionan al mismo tiempo, entonces la ranura de la tarjeta SD no funcionará correctamente. Aparecerá un mensaje de error de fallo al montar la tarjeta SD. Dado que la resistencia de pull‑up en el Round Display no se puede bloquear, necesitas cortar J3 en la placa de expansión Sense para asegurarte de que solo una resistencia de pull‑up esté funcionando cuando se usan ambas juntas. Esto también determina que, cuando se usan ambas juntas, hay y solo la ranura de tarjeta SD en el Round Display está activa.

Sin embargo, **debemos agradecer al ingeniero Mjrovai por el nuevo método de usar la ranura de tarjeta microSD en el XIAO ESP32S3 Sense al mismo tiempo**, lo cual también es posible a nivel de software. Podemos remitirnos a **[sus métodos y procedimientos](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.

### P2: El OV5640 se calienta mucho durante la transmisión de larga duración. ¿Qué debo hacer?

R: Esto es de esperar para el OV5640 bajo captura continua. Reduce la capacidad de accionamiento de E/S mediante el registro `0x302C` como se describe en [OV5640 Heat Optimization](#ov5640-optimización-del-calor), lo que baja la temperatura del chip de ~70°C+ a ~54°C. Si no necesitas alta resolución, reducir también el tamaño de fotograma y cambiar a `CAMERA_GRAB_WHEN_EMPTY` reduce aún más la potencia.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
