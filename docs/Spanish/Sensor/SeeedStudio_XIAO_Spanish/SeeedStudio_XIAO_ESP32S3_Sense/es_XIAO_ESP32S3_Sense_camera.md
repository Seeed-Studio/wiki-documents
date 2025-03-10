---
description: This tutorial will explain how to properly use the camera on the XIAO ESP32S3 Sense.
title: Uso de la cámara en XIAO ESP32S3 Sense
keywords:
- xiao esp32s3
- esp32s3
- camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_camera_usage
last_update:
  date: 02/15/2025
  author: Guillermo
---

# Uso de la cámara en XIAO ESP32S3 Sense de Seeed Studio

:::tip
El contenido de este tutorial es aplicable únicamente a Seeed Studio XIAO ESP32S3 Sense.
:::

En este tutorial, te guiaremos en el uso del módulo de cámara en la XIAO ESP32S3 Sense. Este tutorial se divide en las siguientes partes: primero, explicaremos la función de la cámara proporcionada por el ESP32 y sus características. En segundo lugar, veremos cómo utilizar la cámara en dos dimensiones: tomar fotos y grabar videos. Finalmente, crearemos algunos proyectos interesantes relacionados con la captura de imágenes y la grabación de videos.

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

## Primeros pasos  

Este tutorial puede requerir el uso de una tarjeta microSD, cámara, antena, entre otros. Por favor, prepara los siguientes materiales e instálalos correctamente según las necesidades de tu proyecto.  

#### Instalación de la antena  

En la parte inferior izquierda del frente de la XIAO ESP32S3, hay un conector independiente marcado como "WiFi/BT Antenna Connector". Para obtener una mejor señal de WiFi/Bluetooth, es necesario tomar la antena incluida en el paquete e instalarla en el conector.  

Hay un pequeño truco para instalar la antena correctamente. Si presionas directamente con fuerza, notarás que es muy difícil de colocar y podrías lastimarte los dedos. La forma correcta de instalarla es introducir primero un lado del conector de la antena en el bloque del conector y luego presionar ligeramente el otro lado hasta que quede correctamente instalada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

### Instalación de placas de expansión (para Sense)  

Instalar la placa de expansión es muy sencillo. Solo necesitas alinear el conector de la placa de expansión con el conector B2B de la XIAO ESP32S3, presionar con firmeza hasta escuchar un "clic" y la instalación estará completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos disponible una nueva y potente cámara totalmente compatible con la XIAO ESP32S3 Sense, la OV5640. Si la adquieres, puedes reemplazar la cámara actual para utilizarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
</div>

Si necesitas conocer información detallada sobre los parámetros de la OV5640, puedes consultar el siguiente gráfico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos los programas sobre cámaras en la Wiki son compatibles tanto con las cámaras OV5640 como con OV2640.
:::

### Preparar la tarjeta microSD  

XIAO ESP32S3 Sense admite tarjetas microSD de hasta **32GB**, por lo que si planeas comprar una microSD para XIAO, ten en cuenta esta especificación. Además, antes de usarla, formatea la tarjeta microSD en formato **FAT32**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Después de formatearla, puedes insertar la tarjeta microSD en la ranura correspondiente. Asegúrate de insertarla en la dirección correcta: el lado con los contactos dorados debe estar orientado hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### Diseño del circuito de la ranura de la cámara para placas de expansión  

La ranura de la cámara en la XIAO ESP32S3 Sense utiliza 14 GPIOs del ESP32-S3. Los detalles de los pines ocupados se muestran en la siguiente tabla.

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

### Activar la opción de PSRAM  

El PSRAM en el ESP32 se refiere a la memoria PSRAM (Pseudo Static Random Access Memory) externa en el chip ESP32, la cual proporciona espacio adicional para aumentar la memoria disponible del sistema. En el ESP32, el PSRAM tiene los siguientes usos principales:  

1. **Ampliación de la RAM disponible:** La RAM interna del ESP32 es limitada, especialmente en aplicaciones que requieren una gran cantidad de memoria, como el procesamiento de imágenes o audio. En estos casos, la RAM interna puede no ser suficiente. Al usar PSRAM, se amplía la RAM disponible para satisfacer las necesidades de estas aplicaciones.  

2. **Acceso acelerado a la memoria:** Aunque el PSRAM es una memoria externa y su velocidad de acceso es menor que la RAM interna, puede utilizarse como caché o memoria temporal para acelerar el acceso a la memoria y el procesamiento de datos.  

3. **Almacenamiento de búferes:** Para aplicaciones que requieren grandes búferes, como búferes de red o de audio, el PSRAM proporciona suficiente espacio de almacenamiento para evitar problemas de falta de memoria.  

Para este tutorial, es **necesario activar la función PSRAM** en el Arduino IDE para garantizar el correcto funcionamiento de la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>


## Descripción general de la biblioteca de la cámara  

Antes de comenzar, te recomendamos leer este capítulo para comprender las funciones comunes de la cámara. Así podrás utilizar estas funciones para completar el desarrollo de tu propio proyecto o para leer el programa más fácilmente.  

### Parte I: esp_camera.h  

1. **Estructura de configuración para la inicialización de la cámara**  

A continuación, se muestra un ejemplo de la configuración; solo tienes que completar según la situación real de los pines.

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

        .xclk_freq_hz   = 20000000, // La frecuencia del reloj del sensor de imagen
        .fb_location = CAMERA_FB_IN_PSRAM; // Establecer la ubicación del almacenamiento del búfer de fotogramas
        .pixel_format   = PIXFORMAT_JPEG, // El formato de píxeles de la imagen: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size     = FRAMESIZE_UXGA, // El tamaño de resolución de la imagen: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality   = 12, // La calidad de la imagen JPEG, que varía de 0 a 63.
        .fb_count       = 2, // El número de búferes de fotogramas a utilizar.
        .grab_mode      = CAMERA_GRAB_WHEN_EMPTY // El modo de captura de imagen.
    };
```

2. **Inicializar el controlador de la cámara**  

Después de configurar `camera_example_config` en el formato anterior, necesitamos usar esta función para inicializar el controlador de la cámara.

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **Parámetros de entrada**: Parámetros de configuración de la cámara  

- **Salida**: ESP_OK si tiene éxito

:::note
Actualmente, esta función solo se puede llamar una vez y no hay forma de des-inicializar este módulo.
:::

3. **Obtener un puntero al búfer de fotogramas**

```cpp
camera_fb_t* esp_camera_fb_get();
```

Estructura de datos del búfer de fotogramas de la cámara:

```cpp
typedef struct {
    uint8_t * buf;              /*!< Puntero a los datos de píxeles */
    size_t len;                 /*!< Longitud del búfer en bytes */
    size_t width;               /*!< Ancho del búfer en píxeles */
    size_t height;              /*!< Altura del búfer en píxeles */
    pixformat_t format;         /*!< Formato de los datos de píxeles */
    struct timeval timestamp;   /*!< Marca de tiempo desde el arranque del primer búfer DMA del fotograma */
} camera_fb_t;
```

4. Devolver el búfer de fotogramas para que se vuelva a utilizar.

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **Parámetros de entrada**: Puntero al búfer de fotogramas  

5. Obtener un puntero a la estructura de control del sensor de imagen.

```cpp
sensor_t * esp_camera_sensor_get();
```

- **Salida**: Puntero al sensor  

6. Guardar la configuración de la cámara en el almacenamiento no volátil (NVS).

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **Parámetros de entrada**: Un nombre único de clave NVS para la configuración de la cámara  

7. Cargar la configuración de la cámara desde el almacenamiento no volátil (NVS).

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **Parámetros de entrada**: Un nombre único de clave NVS para la configuración de la cámara

### Parte II: img_converters.h  

1. **Convertir el búfer de imagen a JPEG**.

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parámetros de entrada**:
    - **src**:       Búfer de origen en formato RGB565, RGB888, YUYV o GRAYSCALE
    - **src_len**:   Longitud en bytes del búfer de origen
    - **width**:     Ancho en píxeles de la imagen de origen
    - **height**:    Altura en píxeles de la imagen de origen
    - **format**:    Formato de la imagen de origen
    - **quality**:   Calidad JPEG de la imagen resultante
    - **cp**:        Función de retroalimentación (callback) que se llamará para escribir los bytes del JPEG de salida
    - **arg**:       Puntero que se pasará a la función de retroalimentación

- **Salida**: true si tiene éxito  

2. Convertir el búfer de fotogramas de la cámara a JPEG.

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parámetros de entrada**:
    - **fb**:       Búfer de fotogramas de la cámara de origen
    - **quality**:  Calidad JPEG de la imagen resultante
    - **cp**:       Función de retroalimentación (callback) que se llamará para escribir los bytes del JPEG de salida
    - **arg**:      Puntero que se pasará a la función de retroalimentación

- **Salida**: true si tiene éxito  

3. Convertir el búfer de imagen a un búfer JPEG.

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
    - **src**:       Búfer de origen en formato RGB565, RGB888, YUYV o en escala de grises
    - **src_len**:   Longitud en bytes del búfer de origen
    - **width**:     Ancho en píxeles de la imagen de origen
    - **height**:    Altura en píxeles de la imagen de origen
    - **format**:    Formato de la imagen de origen
    - **quality**:   Calidad JPEG de la imagen resultante
    - **out**:       Puntero que se llenará con la dirección del búfer resultante. DEBES liberar el puntero una vez que hayas terminado de usarlo.
    - **out_len**:   Puntero que se llenará con la longitud del búfer de salida

- **Salida**: verdadero en caso de éxito

4. Convertir el búfer del marco de la cámara a un búfer JPEG.

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
    - **fb**:       Búfer del marco de la cámara de origen
    - **quality**:  Calidad JPEG de la imagen resultante
    - **out**:      Puntero que se llenará con la dirección del búfer resultante
    - **out_len**:  Puntero que se llenará con la longitud del búfer de salida

- **Salida**: verdadero en caso de éxito

5. Convertir el búfer de imagen a un búfer BMP.

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
    - **src**:       Búfer de origen en formato RGB565, RGB888, YUYV o en escala de grises
    - **src_len**:   Longitud en bytes del búfer de origen
    - **width**:     Ancho en píxeles de la imagen de origen
    - **height**:    Altura en píxeles de la imagen de origen
    - **format**:    Formato de la imagen de origen
    - **quality**:   Calidad JPEG de la imagen resultante
    - **out**:       Puntero que se llenará con la dirección del búfer resultante
    - **out_len**:   Puntero que se llenará con la longitud del búfer de salida

- **Salida**: verdadero en caso de éxito

6. Convertir el búfer del marco de la cámara a un búfer BMP.

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **Parámetros de entrada**:
    - **fb**:       Búfer del marco de la cámara de origen
    - **quality**:  Calidad JPEG de la imagen resultante
    - **cp**:       Función de devolución de llamada que se llamará para escribir los bytes del JPEG de salida
    - **arg**:      Puntero que se pasará a la función de devolución de llamada

- **Salida**: verdadero en caso de éxito

### Parte III: app_httpd.cpp

:::note
Esta parte de la introducción de la biblioteca está basada en la sección [Crear un terminal de preservación de video -- Basado en WebServer](#project-iii-create-a-video-preservation-terminal----based-webserver). Esta biblioteca se utiliza principalmente para realizar funciones de adquisición de imágenes y reconocimiento facial para el servidor web. No está incluida directamente en el paquete a bordo de ESP.
:::

1. Función de reconocimiento facial.

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **Parámetros de entrada**:
    - **fb**: un puntero a una estructura que representa un búfer de imagen que contiene datos de la imagen.
    - **results**: un puntero a una lista de resultados de rostros detectados.

2. Maneja solicitudes HTTP para archivos de imagen BMP.

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **Parámetro de entrada**: un puntero a una estructura que representa la solicitud HTTP.

3. Codifica datos de imagen JPEG de manera continua.

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **Parámetros de entrada**:
    - **arg**: un puntero a un argumento definido por el usuario que se pasa a la función.
    - **index**: un valor de índice que indica la posición actual dentro de los datos de la imagen.
    - **data**: un puntero a un búfer que contiene los datos de la imagen a ser codificados.
    - **len**: la longitud del búfer de datos.

4. Maneja solicitudes HTTP para capturar y transmitir imágenes desde la cámara.

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **Parámetro de entrada**: un puntero a una estructura que representa la solicitud HTTP.

5. Maneja solicitudes HTTP para transmitir video desde una cámara.

```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **Parámetro de entrada**: un puntero a una estructura que representa la solicitud HTTP.

6. Inicializa e inicia un servidor de cámara que captura y transmite video a través de HTTP.

```cpp
void startCameraServer()
```

## Tomando fotos con la cámara

A continuación, comenzamos con el uso más básico de la cámara. Por ejemplo, primero utilizaremos la cámara para completar la adquisición de imágenes. En el primer proyecto utilizaremos la tarjeta microSD. La tarea principal de este programa es obtener las imágenes de la cámara cada minuto y luego guardar las imágenes en la tarjeta microSD.

Antes de comenzar, haz lo que hice yo: instala la tarjeta microSD y la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

Puedes encontrar el código completo del programa y los archivos de dependencias necesarios en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Tiene PSRAM

#include "camera_pins.h"

unsigned long lastCaptureTime = 0; // Última hora de captura
int imageCount = 1;                // Contador de archivos
bool camera_sign = false;          // Verificar estado de la cámara
bool sd_sign = false;              // Verificar estado de la tarjeta SD

// Guardar fotos en la tarjeta SD
void photo_save(const char * fileName) {
  // Tomar una foto
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Error al obtener el búfer de la cámara");
    return;
  }
  // Guardar la foto en el archivo
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // Liberar el búfer de la imagen
  esp_camera_fb_return(fb);

  Serial.println("Foto guardada en el archivo");
}

// Escribir archivo en la tarjeta SD
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Escribiendo archivo: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Error al abrir el archivo para escribir");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("Archivo escrito");
    } else {
        Serial.println("Error al escribir");
    }
    file.close();
}

void setup() {
  Serial.begin(115200);
  while(!Serial); // Cuando el monitor serie se enciende, el programa empieza a ejecutarse

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
  config.pixel_format = PIXFORMAT_JPEG; // para streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // Si el IC PSRAM está presente, inicializar con resolución UXGA y mayor calidad JPEG
  //                      para un búfer de cuadro más grande preasignado.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limitar el tamaño del cuadro cuando no se dispone de PSRAM
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Mejor opción para detección/recocimiento de rostros
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // Inicialización de la cámara
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Error al inicializar la cámara con error 0x%x", err);
    return;
  }
  
  camera_sign = true; // Verificación de inicialización de la cámara pasa

  // Inicializar la tarjeta SD
  if(!SD.begin(21)){
    Serial.println("Fallo en el montaje de la tarjeta");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determinar si el tipo de tarjeta SD está disponible
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

  sd_sign = true; // Verificación de inicialización de la tarjeta SD pasa

  Serial.println("Las fotos comenzarán en un minuto, por favor prepárate.");
}

void loop() {
  // Cámara y tarjeta SD disponibles, comenzar a tomar fotos
  if(camera_sign && sd_sign){
    // Obtener el tiempo actual
    unsigned long now = millis();
  
    // Si ha pasado más de 1 minuto desde la última toma, tomar una foto y guardarla en la tarjeta SD
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Foto guardada: %s\n", filename);
      Serial.println("Las fotos comenzarán en un minuto, por favor prepárate.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::note
La compilación y carga de este programa requiere dos dependencias adicionales. Por favor, ve a GitHub y descárgalas en su totalidad.
:::

Por favor, sube el programa a XIAO ESP32S3. Después de que el programa se haya cargado correctamente, enciende el monitor serial, ajusta la cámara para que apunte al objeto que deseas fotografiar, espera un minuto, y la foto se guardará en la tarjeta SD. Luego, XIAO tomará una foto cada minuto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

Retira la tarjeta microSD y, con la ayuda del lector de tarjetas, podrás ver las fotos guardadas dentro de la tarjeta.

### Anotación del programa

El programa comienza con las bibliotecas necesarias para la cámara y la tarjeta SD, así como la importación de algunos archivos de dependencia de pines que hemos definido para el XIAO ESP32S3.

Luego, para facilitar la lectura, definimos dos funciones una después de la otra: una es la función `photo_save()` que guarda la imagen capturada en la tarjeta SD, y la otra es la función `writeFile()` que escribe el archivo.

```cpp
// Guardar fotos en la tarjeta SD
void photo_save(const char * fileName) {
  // Tomar una foto
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Error al obtener el búfer de la cámara");
    return;
  }
  // Guardar la foto en el archivo
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // Liberar el búfer de la imagen
  esp_camera_fb_return(fb);

  Serial.println("Foto guardada en el archivo");
}
```

En la función que guarda la imagen en la tarjeta microSD, se realizan dos tareas principales. La primera es la adquisición de la imagen y la segunda es la llamada a la función que escribe el archivo.

La adquisición de la imagen se puede realizar con `esp_camera_fb_get()`, la información de la imagen se guardará en el puntero `fb`, y luego podemos escribir el `buf` de `fb` en la tarjeta SD.

En la función `Setup()`, un segmento grande del programa configura los pines de la cámara y la inicialización de la cámara. Podemos aplicarlo directamente por defecto. Si tienes requisitos específicos para los píxeles o la calidad de la cámara, puedes ajustar los valores dentro de esta función según las funciones descritas en el capítulo [Resumen de la Biblioteca de la Cámara](#camera-library-overview).

Lo último que debe hacerse en la función `loop()` es controlar que las fotos se tomen cada minuto y seguir el número incremental como sufijo del nombre del archivo de las fotos tomadas.

```cpp
if(camera_sign && sd_sign){
    // Obtener el tiempo actual
    unsigned long now = millis();
  
    // Si ha pasado más de 1 minuto desde la última toma, tomar una foto y guardarla en la tarjeta SD
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Foto guardada: %s\n", filename);
      Serial.println("Las fotos comenzarán en un minuto, por favor prepárate.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
```

Before executing the `loop()`, we configure two flag checks `camera_sign` and `sd_sign`. This ensures that the task of taking and saving pictures must be run after the camera and SD card checks have been successfully executed in `Setup()`.


## Project I: Making a handheld camera

Next, we use the above theoretical knowledge to create a super small photo artifact. The end result of this project is that the live camera feed is displayed on the Seeed Studio Round Display for XIAO, and when you lock the object you want to photograph, touch the screen and take a picture to record on the microSD card.

### Preliminary Preparation

Before starting this project, you will need to prepare the following hardware in advance.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Display Redondo para XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Dado que este proyecto utilizará la **Round Display for XIAO**, por favor lee el contenido de la **[Wiki sobre la configuración del entorno de la placa de expansión de la pantalla](https://wiki.seeedstudio.com/get_start_round_display#software-preparation)**, instala las bibliotecas necesarias y configura el entorno TFT antes de ejecutar las rutinas de este proyecto.

Dado que el XIAO ESP32S3 Sense está diseñado con tres resistencias pull-up R4~R6 conectadas al slot de la tarjeta SD, y la pantalla redonda también tiene resistencias pull-up, la tarjeta SD no puede leerse cuando ambos se usan al mismo tiempo. Para resolver este problema, necesitamos cortar el J3 en la placa de expansión del XIAO ESP32S3 Sense.

:::tip
Sin embargo, **debemos agradecer al ingeniero Mjrovai por el nuevo método de usar el slot de la tarjeta microSD en el XIAO ESP32S3 Sense al mismo tiempo**, lo cual también es posible a nivel de software. Podemos referirnos a **[sus métodos y procedimientos](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

Después de desconectar el J3, el slot de la tarjeta SD en el XIAO ESP32S3 Sense no funcionará correctamente, por lo que necesitarás insertar una tarjeta microSD en el slot de la tarjeta SD en la Round Display.

A continuación, instala la tarjeta microSD, el XIAO ESP32S3 Sense y la Round Display en el orden correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::tip
Te recomendamos que retires primero el módulo de la cámara para evitar rayar la cámara al cortar la conexión J3 con la cuchilla.
:::

### Operación específica

Puedes encontrar el código completo del programa y los archivos de dependencia necesarios en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```c
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Tiene PSRAM
#define TOUCH_INT D7

#include "camera_pins.h"

// Ancho y alto de la pantalla redonda
const int camera_width = 240;
const int camera_height = 240;

// Contador de archivos
int imageCount = 1;
bool camera_sign = false;          // Verificar el estado de la cámara
bool sd_sign = false;              // Verificar el estado de la tarjeta SD

TFT_eSPI tft = TFT_eSPI();

// Escribir archivo en la tarjeta SD
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Escribiendo archivo: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Error al abrir el archivo para escritura");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("Archivo escrito");
    } else {
        Serial.println("Error al escribir");
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
  // poner tu código de configuración aquí, para ejecutarse una vez:
  Serial.begin(115200);
//  while(!Serial);

  // Pines de la cámara
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
//  config.pixel_format = PIXFORMAT_JPEG; // para transmisión
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // si se encuentra el IC PSRAM, iniciar con resolución UXGA y mayor calidad JPEG
  //                      para un mayor búfer de cuadros preasignado.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limitar el tamaño del cuadro cuando PSRAM no está disponible
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

  // inicialización de la cámara
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Error al inicializar la cámara con error 0x%x", err);
    return;
  }
  Serial.println("Cámara lista");
  camera_sign = true; // Verificación de la inicialización de la cámara exitosa

  // Inicialización de la pantalla
  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // Inicialización de la tarjeta SD
  if(!SD.begin(D2)){
    Serial.println("Error al montar la tarjeta");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determinar si el tipo de tarjeta SD está disponible
  if(cardType == CARD_NONE){
    Serial.println("No se ha conectado ninguna tarjeta SD");
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

  sd_sign = true; // Verificación de la inicialización de la tarjeta SD exitosa
}

void loop() {
  if( sd_sign && camera_sign){

    // Tomar una foto
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Error al obtener el búfer de la cámara");
      return;
    }
    
    if(display_is_pressed()){
      Serial.println("pantalla tocada");
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      // Guardar foto en archivo
      writeFile(SD, filename, fb->buf, fb->len);
      Serial.printf("Imagen guardada: %s\n", filename);
      imageCount++;
    }
  
    // Decodificar imágenes JPEG
    uint8_t* buf = fb->buf;
    uint32_t len = fb->len;
    tft.startWrite();
    tft.setAddrWindow(0, 0, camera_width, camera_height);
    tft.pushColors(buf, len);
    tft.endWrite();
      
    // Liberar búfer de la imagen
    esp_camera_fb_return(fb);

    delay(10);
  }
}
```

Sube el programa al XIAO ESP32S3 Sense. Si la pantalla no se enciende después de la carga exitosa, es posible que necesites presionar el botón de Reset en el XIAO. Luego, verás la pantalla de monitoreo mostrada en tiempo real en la Round Display. Haz clic en cualquier parte de la pantalla, la imagen será registrada y guardada en la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

La configuración de la cámara y la tarjeta microSD son los contenidos anteriores, por lo que no los repetiremos aquí. Para el uso de la tarjeta microSD, puedes consultar el [sistema de archivos XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem) en la Wiki para aprender cómo usarlo.

```cpp
// Tomar una foto
camera_fb_t *fb = esp_camera_fb_get();
if (!fb) {
  Serial.println("Error al obtener el búfer de la cámara");
  return;
}

...

// Liberar el búfer de la imagen
esp_camera_fb_return(fb);

delay(10);
```

El programa anterior, que es el bloque básico de código para llamar a la cámara, se divide en tres partes: captura de pantalla, salida por excepción y liberación del búfer de la foto.

```cpp
if(display_is_pressed()){
  Serial.println("la pantalla fue tocada");
  char filename[32];
  sprintf(filename, "/image%d.jpg", imageCount);
  // Guardar foto en el archivo
  writeFile(SD, filename, fb->buf, fb->len);
  Serial.printf("Imagen guardada:%s\n", filename);
  imageCount++;
}
```

El programa anterior se utiliza para verificar si se toca la pantalla. Si se toca, el código guarda la imagen capturada en un archivo en la tarjeta microSD.

```cpp
// Decodificar imágenes JPEG
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

Esta parte del código muestra la imagen capturada en la pantalla. Primero recupera el búfer de la imagen y su longitud desde la estructura `camera_fb_t`. Luego, configura la pantalla para recibir los datos de la imagen y muestra la imagen en la pantalla usando la función `pushColors()`.

## Grabar videos cortos y guardarlos en la tarjeta microSD

:::note
No recomendamos la exportación de codificación de video en el MCU debido a que los recursos de la biblioteca de codificación actual son demasiado pequeños y la operación es muy complicada y tediosa.

Este ejemplo no involucra la codificación de video, y el video exportado es un compuesto MJPG de AVI por fotograma, por lo que la grabación de video puede no ser particularmente buena o satisfactoria. El propósito de este tutorial es proporcionar métodos e ideas sencillas para grabar videos cortos, y damos la bienvenida a los colaboradores que tengan mejores soluciones para enviar un PR.
:::

En los capítulos anteriores, aprendimos cómo usar la cámara para capturar imágenes. Sabemos que una imagen individual se une para hacer una imagen de video en movimiento. Basado en esta teoría, nuestro proyecto en este capítulo te guiará para escribir un programa que grabe un video de 10 segundos cada 1 minuto y lo guarde en una tarjeta microSD.

Puedes encontrar el código completo del programa y los archivos de dependencia necesarios en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa Arduino para este proyecto.

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_timer.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Tiene PSRAM

#include "camera_pins.h"

const int SD_PIN_CS = 21;

File videoFile;
bool camera_sign = false;
bool sd_sign = false;
unsigned long lastCaptureTime = 0;
unsigned long captureDuration = 10000; // 10 segundos
int imageCount = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial);
  
  // Inicializar la cámara
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

  // Inicialización de la cámara
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Error al inicializar la cámara con el error 0x%x", err);
    return;
  }
  
  camera_sign = true;
  
  // Inicializar la tarjeta SD
  if (!SD.begin(SD_PIN_CS)) {
    Serial.println("¡Error en la inicialización de la tarjeta SD!");
    return;
  }

  uint8_t cardType = SD.cardType();

  // Determinar si el tipo de tarjeta SD está disponible
  if(cardType == CARD_NONE){
    Serial.println("No se ha conectado ninguna tarjeta SD");
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
  
  sd_sign = true;

  Serial.println("El video comenzará en un minuto, por favor prepárate.");
}

void loop() {
  // Cámara y tarjeta SD disponibles, comenzar a grabar video
  if (camera_sign && sd_sign) {
    // Obtener el tiempo actual
    unsigned long now = millis();

    // Si ha pasado más de 1 minuto desde la última captura de video, comenzar a capturar un nuevo video
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/video%d.avi", imageCount);
      videoFile = SD.open(filename, FILE_WRITE);
      if (!videoFile) {
        Serial.println("¡Error al abrir el archivo de video!");
        return;
      }
      Serial.printf("Grabando video: %s\n", filename);
      lastCaptureTime = now;
      
      // Comenzar a capturar cuadros de video
      while ((millis() - lastCaptureTime) < captureDuration) {
        camera_fb_t *fb = esp_camera_fb_get();
        if (!fb) {
          Serial.println("¡Error al obtener el búfer de la cámara!");
          break;
        }
        videoFile.write(fb->buf, fb->len);
        esp_camera_fb_return(fb);
      }
      
      // Cerrar el archivo de video
      videoFile.close();
      Serial.printf("Video guardado: %s\n", filename);
      imageCount++;

      Serial.println("El video comenzará en un minuto, por favor prepárate.");

      // Esperar el tiempo restante del minuto
      delay(60000 - (millis() - lastCaptureTime));
    }
  }
}
```

Sube el código al XIAO ESP32S3 Sense, enciende el monitor serial, y en este momento ajusta la posición de la cámara hacia el objeto que deseas grabar. Después de un minuto, el LED naranja en el XIAO comenzará a parpadear, y la grabación comenzará y se guardará en la tarjeta microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::note
Dado que el programa no involucra configuraciones como codificación y tasa de fotogramas, el video puede abrirse solo durante un segundo si no hay cambios en cada fotograma del metraje grabado.
:::


### Anotación del programa

El núcleo y la clave en el procedimiento de grabación de video es seguir adquiriendo el flujo de fotos durante un período continuo de 10 segundos y escribirlo continuamente en la tarjeta microSD.

```cpp
// Comenzar a capturar cuadros de video
while ((millis() - lastCaptureTime) < captureDuration) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("¡Error al obtener el búfer de la cámara!");
    break;
  }
  videoFile.write(fb->buf, fb->len);
  esp_camera_fb_return(fb);
}
```

On top of that, we nest a layer of 1-minute wait judgments on the outside to ensure that the video starts every 1 minute.

```cpp
// Si ha pasado más de 1 minuto desde la última captura de video, comienza a capturar un nuevo video
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

## Proyecto II: Transmisión de Video

Al final de este tutorial, mostramos un proyecto de transmisión de video. Este proyecto te permite ver una transmisión de video en vivo en una página web creada por XIAO ESP32S3 Sense, y puedes cambiar la visualización de la pantalla ajustando algunos parámetros.

Puedes encontrar el código completo del programa y los archivos de dependencia necesarios en el siguiente enlace.

Si estás utilizando el paquete de placas esp32 con la versión **2.0.x** en Arduino, por favor descarga desde:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Si estás utilizando el paquete de placas esp32 con la versión **3.0.x** en Arduino, por favor descarga desde:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_3.0.x">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí está el programa de Arduino para este proyecto.

```cpp
#include "esp_camera.h"
#include <WiFi.h>

#define CAMERA_MODEL_XIAO_ESP32S3 // Tiene PSRAM

#include "camera_pins.h"

// ===========================
// Ingresa tus credenciales de WiFi
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
  config.pixel_format = PIXFORMAT_JPEG; // para transmisión
  //config.pixel_format = PIXFORMAT_RGB565; // para detección/reconocimiento de rostros
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // Si el IC PSRAM está presente, inicializar con resolución UXGA y mayor calidad JPEG
  //                      para un buffer de cuadro preasignado más grande.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limitar el tamaño del cuadro cuando PSRAM no está disponible
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

  // inicialización de la cámara
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Fallo en la inicialización de la cámara con error 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // los sensores iniciales están volteados verticalmente y los colores están un poco saturados
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // volver a voltear
    s->set_brightness(s, 1); // aumentar un poco el brillo
    s->set_saturation(s, -2); // reducir la saturación
  }
  // reducir el tamaño del cuadro para una mayor tasa de fotogramas inicial
  if(config.pixel_format == PIXFORMAT_JPEG){
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

  // Configurar el flash LED si el pin LED está definido en camera_pins.h
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
  Serial.println("WiFi conectado");

  startCameraServer();

  Serial.print("¡Cámara lista! Usa 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' para conectarte");
}

void loop() {
  // No hacer nada. Todo se maneja en otra tarea por el servidor web
  delay(10000);
}
```

Antes de subir el programa, necesitas cambiar el nombre y la contraseña de WiFi en el código por los tuyos. Después de subir el programa, si el XIAO ESP32C3 se conecta correctamente a tu WiFi, su dirección IP se imprimirá en el monitor serial.

:::caution
Si realizas este proyecto con el XIAO ESP32S3 durante un largo período de tiempo, por favor presta atención a la disipación de calor. El XIAO se calentará mucho, ¡ten cuidado con las quemaduras!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

:::tip
Como puedes ver en la figura anterior, si activas la salida de la información de depuración, entonces podrás ver parte de la información de depuración del núcleo del chip impresa en el monitor serial. Por ejemplo, `[0;31mE (2947) MFN: Partition Not found[0m`, no te preocupes por ello, no afecta el funcionamiento del programa.
:::

Por favor, abre tu navegador, recomendamos Edge o Google Chrome, e ingresa esa dirección IP y verás la página de configuración para el video.

:::note
Ten en cuenta que el dispositivo en el que estás utilizando el navegador debe estar en la misma red LAN que XIAO.
:::

Después de configurar las especificaciones del flujo de video que deseas establecer, haz clic en **Start Stream** en la parte inferior de la barra de herramientas izquierda y verás la transmisión en vivo de la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

Afortunadamente, ESP32 también ha agregado oficialmente el reconocimiento facial al programa. Puedes experimentar la función activando el interruptor para el reconocimiento facial con calidad de imagen reducida.

:::tip
Por razones de rendimiento, la calidad de la pantalla no puede ser superior a **CIF**, de lo contrario, la página web mostrará un error al activar el interruptor para el reconocimiento facial.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

¡Vaya, mi gran rostro está marcado!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>


## Solución de problemas

### P1: Cuando se usan XIAO ESP32S3 Sense y Round Display juntos, ¿es necesario cortar el pin J3? ¿Qué ranura para tarjeta SD se puede usar?

R: En principio, es necesario cortar el pin J3 cuando se usa XIAO ESP32S3 Sense junto con Round Display para utilizar la tarjeta microSD. La razón es que ambos tableros de expansión tienen resistencias pull-up en su diseño de circuito, por lo que, teóricamente, si ambas resistencias pull-up funcionan al mismo tiempo, la ranura para la tarjeta SD no funcionará correctamente. Aparecerá un mensaje de error de fallo al montar la tarjeta SD. Dado que la resistencia pull-up en el Round Display no puede ser bloqueada, es necesario cortar el J3 en la placa de expansión Sense para asegurarse de que solo una resistencia pull-up esté funcionando cuando ambos se usen juntos. Esto también determina que, cuando se usan juntos, solo la ranura de tarjeta SD en el Round Display está activa.

Sin embargo, **debemos agradecer al ingeniero Mjrovai por el nuevo método de usar la ranura para tarjeta microSD en el XIAO ESP32S3 Sense al mismo tiempo**, lo cual también es posible a nivel de software. Podemos consultar **[sus métodos y procedimientos](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>








