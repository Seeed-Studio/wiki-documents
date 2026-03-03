---
description: Clasificar perros y gatos a partir de una imagen.
title: Clasificación de imágenes
keywords:
  - tinyml course
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/image_classification.webp
slug: /es/tinyml_course_Image_classification_project
last_update:
  date: 11/29/2024
  author: Salman
---

# Clasificación de Imágenes XIAO ESP32S3-Sense

Aquí vamos a construir un proyecto tinyML con XIAO ESP32S3-Sense para clasificar perros y gatos en fotos. Comencemos.

## Cómo funciona

Estamos ejecutando el modelo de aprendizaje automático en nuestro XIAO y alimentándolo con el flujo de la cámara. Luego el XIAO infiere el resultado y predice con la ayuda de la red neuronal a bordo que implementamos. Construyamos uno.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/digram.png?raw=true" style={{width:1000, height:'auto'}}/></div>

### Cosas necesarias

- XIAO ESP32-Sense
- Tarjeta MicroSD &lt;32GB
- Cable Type-C
- Arduino IDE
- Cuenta de Edge Impulse

:::info

1. Usa arduino-esp32 versión 2.x ya que no es compatible con 3.x.
2. Habilita PSRAM para activar el módulo/función de la cámara.

:::

## Paso 1. Recolectar las Imágenes de Gatos y Perros

El primer paso de un proyecto de aprendizaje automático es recolectar el conjunto de datos y aquí necesitamos recolectar imágenes de perros y gatos. Aquí, podemos recolectar las imágenes de dos maneras.

1. Recolectar imágenes directamente desde el XIAO-ESP32S3 Sense y guardar en la tarjeta SD luego subirlas a Edge Impulse
2. Recolectar directamente las imágenes vía teléfono móvil, internet o conjunto de datos abierto luego subirlas a Edge Impulse.

### 1.1 Método 1: Recolectar Imágenes vía XIAO-ESP32S3 Sense

Aquí estamos recolectando imágenes usando el módulo de cámara sense y guardándolas en la tarjeta SD, luego más tarde las subiremos a EdgeImpulse.

#### 1.1.1 Conectar Cámara

Si estás comprando el XIAO ESP32S3 Sense, entonces también deberías incluir una placa de expansión. Esta placa de expansión tiene un sensor de cámara OV2640 de 1600\*1200, ranura para tarjeta SD integrada y micrófono digital.

Al instalar la placa de expansión con XIAO ESP32S3 Sense, puedes usar las funciones en la placa de expansión.

Instalar la placa de expansión es muy simple, solo necesitas alinear el conector en la placa de expansión con el conector B2B en el XIAO ESP32S3, presionarlo fuerte y escuchar un "clic", la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos una nueva cámara potente totalmente compatible con XIAO ESP32S3 Sense, la OV5640, en nuestros estantes, y si la compras, puedes reemplazar la cámara para usarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

#### 1.1.2 Instalar XIAO-ESP32S3 Sense en Arduino

- **Paso 1.** Añade el paquete de placa ESP32 a tu Arduino IDE.

  Navega a **Archivo > Preferencias**, y llena **"URLs Adicionales del Gestor de Placas"** con la url de abajo:
  *https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

  Navega a **Herramientas > Placa > Gestor de Placas...**, escribe la palabra clave **esp32** en la caja de búsqueda, selecciona la última versión de **esp32**, e instálala.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete a bordo para XIAO ESP32S3 requiere al menos la versión **2.0.8** para estar disponible.
:::

- **Paso 2.** Selecciona tu placa y puerto.

En la parte superior del Arduino IDE, puedes seleccionar el puerto directamente. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware).

También, busca **xiao** en la placa de desarrollo a la izquierda. selecciona **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

Con esta preparación, puedes comenzar a escribir programas para XIAO ESP32S3 para compilar y subir.

#### 1.1.3 Subir sketch que puede tomar imágenes y guardar en tarjeta SD

Descarga el archivo sketch desde [aquí](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/take_photos_command.ino.zip), y descomprímelo en tu computadora y haz clic en "take_photos_command.ino" para abrir el sketch. Luego selecciona el puerto y placa correctos para XIAO para subir.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/img_CaptureSketch01.png?raw=true
" style={{width:600, height:'auto'}}/></div>

Mientras tomas fotos, asegúrate de apuntar a la imagen u objeto que necesitamos recolectar como conjunto de datos.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/cat_image_snap.png?raw=true" style={{width:600, height:'auto'}}/></div>

Dado que es una clasificación de imágenes necesitamos recolectar tantas imágenes como sea posible para hacer el sistema más estable. Así que recolecta más imágenes lindas de perros y gatos.

### 1.2 Método 2: Subir imágenes a EdgeImpulse Directamente

Para este método, necesitamos recopilar imágenes de internet o a través del teléfono. Afortunadamente, tenemos servicios como [Kaggle](https://www.kaggle.com/) que nos proporcionan conjuntos de datos para imágenes de perros y gatos, por favor [ver aquí](https://www.kaggle.com/datasets/tongpython/cat-and-dog).

Una vez que hayas recopilado el conjunto de datos, abre tu proyecto de EdgeImpulse y ve a **Data acquisition** y selecciona **+ Add data** y luego elige la opción **Upload data**.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/collectData1.png" style={{width:600, height:'auto'}}/></div>

Desde la página, selecciona los modos de carga como **"Select a folder"**, luego selecciona los archivos de la opción de abajo. Asegúrate de seleccionar **"Automaticlly split between training and testing"** y Label como **"Infer from file name"**

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection01.png?raw=true" style={{width:600, height:'auto'}}/></div>

Una vez que hayas terminado la carga, puedes ver la ventana como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection02.png?raw=true" style={{width:600, height:'auto'}}/></div>

## Paso 2. Diseñar el Impulso y Entrenar nuestra Red Neuronal

Después de recopilar datos para tu proyecto, ahora puedes crear tu Impulso. Un Impulso completo consistirá en 3 bloques principales: bloque de entrada, bloque de procesamiento y un bloque de aprendizaje.

1. Para diseñar un impulso, selecciona **Create an impulse** bajo **Impulse design**.
2. **Bloque de entrada**: El bloque de entrada indica el tipo de datos de entrada con los que estás entrenando tu modelo. Esto puede ser series temporales (audio, vibración, movimientos) o imágenes. Aquí seleccionamos los datos de imagen como bloque de entrada
3. **Bloques de procesamiento**: Un bloque de procesamiento es básicamente un extractor de características. Consiste en operaciones DSP (Procesamiento Digital de Señales) que se utilizan para extraer características sobre las que nuestro modelo aprende. Estas operaciones varían dependiendo del tipo de datos utilizados en tu proyecto. Aquí estamos usando la imagen pre-construida de EdgeImpulse como bloque de procesamiento.
4. **Bloques de aprendizaje**: Después de agregar tu bloque de procesamiento, ahora es momento de agregar un bloque de aprendizaje para hacer tu impulso completo. Un bloque de aprendizaje es simplemente una red neuronal que está entrenada para aprender sobre tus datos. Aquí estamos usando Transfer Learning (Images) que ajustará finamente un modelo de clasificación de imágenes pre-entrenado en tus datos. Buen rendimiento incluso con conjuntos de datos de imágenes relativamente pequeños.
5. Después de diseñar el impulso, haz clic en **save impulse** para continuar.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse01.png?raw=true" style={{width:600, height:'auto'}}/></div>

### Paso 2.1: Extracción de características usando bloque de procesamiento

Aquí utilizaremos operaciones DSP (Procesamiento Digital de Señales) que se usan para extraer características sobre las que nuestro modelo aprende. Estas operaciones varían dependiendo del tipo de datos utilizados en tu proyecto. Primero necesitamos establecer los parámetros como se menciona a continuación.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse02.png?raw=true
" style={{width:600, height:'auto'}}/></div>

Una vez que establecemos los parámetros, necesitamos generar las características, haz clic en **generate features** para iniciar la operación.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/feature03.png?raw=true" style={{width:600, height:'auto'}}/></div>

Una vez que generamos las características, necesitamos configurar la red neuronal que está entrenada para aprender sobre tus datos. Aquí estamos usando Transfer Learning (Images) que ajustará finamente un modelo de clasificación de imágenes pre-entrenado en tus datos. Buen rendimiento incluso con conjuntos de datos de imágenes relativamente pequeños. Selecciona la red neuronal como se menciona a continuación y haz clic en **Start Training**. Tomará algo de tiempo y necesitas esperar.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/train2.png?raw=true" style={{width:600, height:'auto'}}/></div>

Una vez que el entrenamiento esté terminado, estamos listos para descargar nuestra biblioteca tinyML que se creó. Ve a la **opción Deployment** y selecciona **Arduino library** como despliegue y haz clic en **Build** para generar la biblioteca.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/deployment1.png?raw=true" style={{width:600, height:'auto'}}/></div>

La biblioteca se descargará automáticamente. Y después de eso, agrégala al IDE de Arduino. Abre tu IDE de Arduino, haz clic en Sketch > Include Library > Add .ZIP Library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div>

Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás Library added to your libraries en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div>

## Paso 3. Ejecutar el sketch de ejemplo

<!-- Aunque Edge Impulse no ha lanzado su SDK para ESP32S3 usando el acelerador ESP NN, gracias a Dmitry Maslov, podemos tener sus optimizaciones de ensamblado restauradas y corregidas para ESP32-S3. Esta solución aún no es oficial, y EI la incluirá en el SDK de EI una vez que arreglen los conflictos con otras placas.

:::caution
Por ahora, esto solo funciona con la versión no-EON. Por lo tanto, también debes mantener la opción **Enable EON Compiler** sin seleccionar.
:::

Cuando se selecciona el botón Build, se creará un archivo Zip y se descargará a tu computadora.

Antes de usar la biblioteca descargada, necesitamos habilitar el Acelerador **ESP NN**. Para eso, puedes descargar una versión preliminar desde el [GitHub del proyecto](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip), descomprimirla, y reemplazar la carpeta ESP NN con ella en: `src/edge-impulse-sdk/porting/espressif/ESP-NN`, en tu carpeta de bibliotecas de Arduino.

:::warning Atención

- Recuerda reemplazar la carpeta ESP-NN, no tengas una carpeta existente o cambies su nombre para restaurarla. simplemente elimínala.
- El orden del archivo de cabecera podría afectar la compilación, así que asegúrate de mantener el orden correcto de los archivos de cabecera.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div> -->

Copia el código de inferencia de abajo y pégalo en tu Arduino IDE.

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* Includes ---------------------------------------------------------------- */
#include <XIAO_esp32S3_CatDog2_inferencing.h>
#include "edge-impulse-sdk/dsp/image/image.hpp"

#include "esp_camera.h"

// Select camera model - find more camera models in camera_pins.h file here
// https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Camera/CameraWebServer/camera_pins.h

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM     10
#define SIOD_GPIO_NUM     40
#define SIOC_GPIO_NUM     39

#define Y9_GPIO_NUM       48
#define Y8_GPIO_NUM       11
#define Y7_GPIO_NUM       12
#define Y6_GPIO_NUM       14
#define Y5_GPIO_NUM       16
#define Y4_GPIO_NUM       18
#define Y3_GPIO_NUM       17
#define Y2_GPIO_NUM       15
#define VSYNC_GPIO_NUM    38
#define HREF_GPIO_NUM     47
#define PCLK_GPIO_NUM     13

#define LED_GPIO_NUM      21


/* Constant defines -------------------------------------------------------- */
#define EI_CAMERA_RAW_FRAME_BUFFER_COLS           320
#define EI_CAMERA_RAW_FRAME_BUFFER_ROWS           240
#define EI_CAMERA_FRAME_BYTE_SIZE                 3

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static bool is_initialised = false;
uint8_t *snapshot_buf; //points to the output of the capture

static camera_config_t camera_config = {
    .pin_pwdn = PWDN_GPIO_NUM,
    .pin_reset = RESET_GPIO_NUM,
    .pin_xclk = XCLK_GPIO_NUM,
    .pin_sscb_sda = SIOD_GPIO_NUM,
    .pin_sscb_scl = SIOC_GPIO_NUM,

    .pin_d7 = Y9_GPIO_NUM,
    .pin_d6 = Y8_GPIO_NUM,
    .pin_d5 = Y7_GPIO_NUM,
    .pin_d4 = Y6_GPIO_NUM,
    .pin_d3 = Y5_GPIO_NUM,
    .pin_d2 = Y4_GPIO_NUM,
    .pin_d1 = Y3_GPIO_NUM,
    .pin_d0 = Y2_GPIO_NUM,
    .pin_vsync = VSYNC_GPIO_NUM,
    .pin_href = HREF_GPIO_NUM,
    .pin_pclk = PCLK_GPIO_NUM,

    //XCLK 20MHz or 10MHz for OV2640 double FPS (Experimental)
    .xclk_freq_hz = 20000000,
    .ledc_timer = LEDC_TIMER_0,
    .ledc_channel = LEDC_CHANNEL_0,

    .pixel_format = PIXFORMAT_JPEG, //YUV422,GRAYSCALE,RGB565,JPEG
    .frame_size = FRAMESIZE_QVGA,    //QQVGA-UXGA Do not use sizes above QVGA when not JPEG

    .jpeg_quality = 12, //0-63 lower number means higher quality
    .fb_count = 1,       //if more than one, i2s runs in continuous mode. Use only with JPEG
    .fb_location = CAMERA_FB_IN_PSRAM,
    .grab_mode = CAMERA_GRAB_WHEN_EMPTY,
};

/* Function definitions ------------------------------------------------------- */
bool ei_camera_init(void);
void ei_camera_deinit(void);
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) ;

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    //comment out the below line to start inference immediately after upload
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    if (ei_camera_init() == false) {
        ei_printf("Failed to initialize Camera!\r\n");
    }
    else {
        ei_printf("Camera initialized\r\n");
    }

    ei_printf("\nStarting continious inference in 2 seconds...\n");
    ei_sleep(2000);
}

/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{

    // instead of wait_ms, we'll wait on the signal, this allows threads to cancel us...
    if (ei_sleep(5) != EI_IMPULSE_OK) {
        return;
    }

    snapshot_buf = (uint8_t*)malloc(EI_CAMERA_RAW_FRAME_BUFFER_COLS * EI_CAMERA_RAW_FRAME_BUFFER_ROWS * EI_CAMERA_FRAME_BYTE_SIZE);

    // check if allocation was successful
    if(snapshot_buf == nullptr) {
        ei_printf("ERR: Failed to allocate snapshot buffer!\n");
        return;
    }

    ei::signal_t signal;
    signal.total_length = EI_CLASSIFIER_INPUT_WIDTH * EI_CLASSIFIER_INPUT_HEIGHT;
    signal.get_data = &ei_camera_get_data;

    if (ei_camera_capture((size_t)EI_CLASSIFIER_INPUT_WIDTH, (size_t)EI_CLASSIFIER_INPUT_HEIGHT, snapshot_buf) == false) {
        ei_printf("Failed to capture image\r\n");
        free(snapshot_buf);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions (DSP: %d ms., Classification: %d ms., Anomaly: %d ms.): \n",
                result.timing.dsp, result.timing.classification, result.timing.anomaly);

#if EI_CLASSIFIER_OBJECT_DETECTION == 1
    bool bb_found = result.bounding_boxes[0].value > 0;
    for (size_t ix = 0; ix < result.bounding_boxes_count; ix++) {
        auto bb = result.bounding_boxes[ix];
        if (bb.value == 0) {
            continue;
        }
        ei_printf("    %s (%f) [ x: %u, y: %u, width: %u, height: %u ]\n", bb.label, bb.value, bb.x, bb.y, bb.width, bb.height);
    }
    if (!bb_found) {
        ei_printf("    No objects found\n");
    }
#else
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label,
                                    result.classification[ix].value);
    }
#endif

#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif


    free(snapshot_buf);

}

/**
 * @brief   Setup image sensor & start streaming
 *
 * @retval  false if initialisation failed
 */
bool ei_camera_init(void) {

    if (is_initialised) return true;

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

    //initialize the camera
    esp_err_t err = esp_camera_init(&camera_config);
    if (err != ESP_OK) {
      Serial.printf("Camera init failed with error 0x%x\n", err);
      return false;
    }

    sensor_t * s = esp_camera_sensor_get();
    // initial sensors are flipped vertically and colors are a bit saturated
    if (s->id.PID == OV3660_PID) {
      s->set_vflip(s, 1); // flip it back
      s->set_brightness(s, 1); // up the brightness just a bit
      s->set_saturation(s, 0); // lower the saturation
    }

#if defined(CAMERA_MODEL_M5STACK_WIDE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
#elif defined(CAMERA_MODEL_ESP_EYE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
    s->set_awb_gain(s, 1);
#endif

    is_initialised = true;
    return true;
}

/**
 * @brief      Stop streaming of sensor data
 */
void ei_camera_deinit(void) {

    //deinitialize the camera
    esp_err_t err = esp_camera_deinit();

    if (err != ESP_OK)
    {
        ei_printf("Camera deinit failed\n");
        return;
    }

    is_initialised = false;
    return;
}


/**
 * @brief      Capture, rescale and crop image
 *
 * @param[in]  img_width     width of output image
 * @param[in]  img_height    height of output image
 * @param[in]  out_buf       pointer to store output image, NULL may be used
 *                           if ei_camera_frame_buffer is to be used for capture and resize/cropping.
 *
 * @retval     false if not initialised, image captured, rescaled or cropped failed
 *
 */
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) {
    bool do_resize = false;

    if (!is_initialised) {
        ei_printf("ERR: Camera is not initialized\r\n");
        return false;
    }

    camera_fb_t *fb = esp_camera_fb_get();

    if (!fb) {
        ei_printf("Camera capture failed\n");
        return false;
    }

   bool converted = fmt2rgb888(fb->buf, fb->len, PIXFORMAT_JPEG, snapshot_buf);

   esp_camera_fb_return(fb);

   if(!converted){
       ei_printf("Conversion failed\n");
       return false;
   }

    if ((img_width != EI_CAMERA_RAW_FRAME_BUFFER_COLS)
        || (img_height != EI_CAMERA_RAW_FRAME_BUFFER_ROWS)) {
        do_resize = true;
    }

    if (do_resize) {
        ei::image::processing::crop_and_interpolate_rgb888(
        out_buf,
        EI_CAMERA_RAW_FRAME_BUFFER_COLS,
        EI_CAMERA_RAW_FRAME_BUFFER_ROWS,
        out_buf,
        img_width,
        img_height);
    }


    return true;
}

static int ei_camera_get_data(size_t offset, size_t length, float *out_ptr)
{
    // we already have a RGB888 buffer, so recalculate offset into pixel index
    size_t pixel_ix = offset * 3;
    size_t pixels_left = length;
    size_t out_ptr_ix = 0;

    while (pixels_left != 0) {
        out_ptr[out_ptr_ix] = (snapshot_buf[pixel_ix] << 16) + (snapshot_buf[pixel_ix + 1] << 8) + snapshot_buf[pixel_ix + 2];

        // go to the next pixel
        out_ptr_ix++;
        pixel_ix+=3;
        pixels_left--;
    }
    // and done!
    return 0;
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_CAMERA
#error "Invalid model for current sensor"
#endif
```

Asegúrate de reemplazar el **`#include <XIAO_esp32S3_CatDog2_inferencing.h>`** con la biblioteca que generaste. Sube el código y apunta a las imágenes de Gato o Perro o a las reales, podemos ver los resultados en el Monitor Serie.

¡Felicidades 🙌 por completar el proyecto de clasificación de imágenes tinyML!

## Recursos

[PDF] **[Hoja de datos ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Para Seeed Studio XIAO ESP32S3

- **[PDF]** [Esquemático Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Bibliotecas Eagle Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 en DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Huella Eagle Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Firmware de fábrica Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Hoja de pines Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Modelo 3D Seeed Studio XIAO ESP32S3]() -->


### Para Seeed Studio XIAO ESP32S3 Sense

- **[PDF]** [Esquemático Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Bibliotecas KiCAD Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Bibliotecas Eagle Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 Sense en DXF (superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 Sense en DXF (inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Firmware de fábrica Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Hoja de pines Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Modelo 3D Seeed Studio XIAO ESP32S3 Sense]() -->


### Otros

- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (superior)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp>)

- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (inferior)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp>)

_¡El material de código abierto restante se está compilando, así que mantente atento!_

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
