---
description: Classify Dog and Cat from an image.
title: Clasificación de imágenes
keywords:
  - tinyml course
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/image_classification.webp
slug: /es/tinyml_course_Image_classification_project
last_update:
  date: 02/10/2024
  author: Guillermo
---

# Clasificación de Imágenes con XIAO ESP32S3-Sense

Aquí vamos a construir un proyecto de tinyML con XIAO ESP32S3-Sense para clasificar imágenes de perros y gatos. Empecemos.

## Cómo funciona

Estamos ejecutando el modelo de aprendizaje automático en nuestro XIAO y alimentándolo con una transmisión de la cámara. Luego, el XIAO infiere el resultado y realiza la predicción con la ayuda de la red neuronal integrada que hemos implementado. Vamos a construir uno.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/digram.png?raw=true" style={{width:1000, height:'auto'}}/></div>

### Cosas Necesarias

- XIAO ESP32-Sense
- Tarjeta microSD (no mayor a 32GB)
- Cable Tipo-C 
- Arduino IDE
- Cuenta de Edge Impulse

:::info

1. Usa la versión 2.x de arduino-esp32, ya que no es compatible con la versión 3.x.
2. Habilita PSRAM para activar el módulo/característica de la cámara.

:::

## Paso 1. Recopilación de Imágenes de Perro y Gato

El primer paso de un proyecto de aprendizaje automático es recopilar el conjunto de datos, y aquí necesitamos recopilar imágenes de perros y gatos. Aquí, podemos recopilar las imágenes de dos maneras.

1. Recopilar imágenes directamente desde el XIAO-ESP32S3 Sense y guardarlas en la tarjeta SD, luego subirlas a Edge Impulse.
2. Recopilar las imágenes directamente a través de un teléfono móvil, internet o un conjunto de datos abierto, luego cargarlas a Edge Impulse.

### 1.1 Método 1: Recopilar Imágenes con el XIAO-ESP32S3 Sense

Aquí estamos recopilando imágenes utilizando el módulo de cámara Sense y guardándolas en la tarjeta SD, luego más tarde las subiremos a EdgeImpulse.

#### 1.1.1 Conectar la Cámara

Si estás comprando el XIAO ESP32S3 Sense, también deberías incluir una placa de expansión. Esta placa de expansión tiene un sensor de cámara OV2640 de 1600\*1200, ranura para tarjeta SD integrada y micrófono digital.

Al instalar la placa de expansión con el XIAO ESP32S3 Sense, podrás usar las funciones de la placa de expansión.

La instalación de la placa de expansión es muy sencilla, solo necesitas alinear el conector de la placa de expansión con el conector B2B del XIAO ESP32S3, presionarlo con firmeza y escuchar un "clic", lo que indica que la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos una nueva cámara potente totalmente compatible con el XIAO ESP32S3 Sense, la OV5640, en nuestras estanterías, y si la compras, puedes reemplazar la cámara actual para utilizarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descarga la IDE de Arduino</font></span></strong>
    </a>
</div>

#### 1.1.2 Instalar XIAO-ESP32S3 Sense en Arduino

- **Paso 1.** Agrega el paquete de la placa ESP32 a tu Arduino IDE.

  Dirígete a **Archivo > Preferencias** y completa el campo **"URLs adicionales del Administrador de Placas"** con la siguiente URL:
  _<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json>_

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

  Dirígete a **Herramientas > Placa > Gestor de Placas...**, escribe la palabra clave **esp32** en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete integrado para XIAO ESP32S3 requiere al menos la versión **2.0.8** para estar disponible.
:::

- **Paso 2.** Selecciona tu placa y puerto.

En la parte superior del Arduino IDE, puedes seleccionar el puerto directamente. Probablemente será COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos seriales de hardware).

También, busca **xiao** en la lista de placas de desarrollo a la izquierda y selecciona **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

Con esta preparación, ya puedes comenzar a escribir programas para el XIAO ESP32S3 para compilar y cargar.

#### 1.1.3 Cargar el sketch que toma una imagen y la guarda en la tarjeta SD

Descarga el archivo del sketch desde [aquí](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/take_photos_command.ino.zip), descomprímelo en tu computadora y haz clic en "take_photos_command.ino" para abrir el sketch. Luego, selecciona el puerto y la placa correctos para el XIAO para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/img_CaptureSketch01.png?raw=true
" style={{width:600, height:'auto'}}/></div>

Mientras tomas las fotos, asegúrate de apuntar hacia la imagen u objeto que necesitamos recopilar como conjunto de datos. 

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/cat_image_snap.png?raw=true" style={{width:600, height:'auto'}}/></div>

Dado que se trata de clasificación de imágenes, necesitamos recopilar tantas imágenes como sea posible para que el sistema sea más estable. Así que recopila más imágenes de perros y gatos lindos.

### 1.2 Método 2: Subir imágenes directamente a EdgeImpulse

Para este método, necesitamos recopilar imágenes de internet o a través del teléfono. Afortunadamente, tenemos servicios como [Kaggle](https://www.kaggle.com/) que nos proporcionan conjuntos de datos de imágenes de perros y gatos, por favor [mira aquí](https://www.kaggle.com/datasets/tongpython/cat-and-dog).

Una vez que hayas recopilado el conjunto de datos, abre tu proyecto en EdgeImpulse, ve a **Adquisición de datos**, selecciona **+ Agregar datos** y luego elige la opción **Subir datos**.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/collectData1.png" style={{width:600, height:'auto'}}/></div>

Desde la página, selecciona el modo de carga como **"Seleccionar una carpeta"**, luego selecciona los archivos de la opción que aparece abajo. Asegúrate de seleccionar **"Dividir automáticamente entre entrenamiento y prueba"** y **Etiquetar como "Inferir desde el nombre del archivo"**.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection01.png?raw=true" style={{width:600, height:'auto'}}/></div>

Una vez que hayan terminado de subirse, podrás ver la ventana como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection02.png?raw=true" style={{width:600, height:'auto'}}/></div>

## Paso 2. Diseñar el Impulso y Entrenar nuestra Red Neuronal

Después de recopilar los datos para tu proyecto, ahora puedes crear tu Impulso. Un Impulso completo constará de 3 bloques principales: bloque de entrada, bloque de procesamiento y bloque de aprendizaje.

1. Para diseñar un impulso, selecciona **Crear un impulso** bajo **Diseño del impulso**.
2. **Bloque de entrada**: El bloque de entrada indica el tipo de datos de entrada con los que estás entrenando tu modelo. Esto puede ser series de tiempo (audio, vibración, movimientos) o imágenes. Aquí seleccionamos los datos de imagen como bloque de entrada.
3. **Bloques de procesamiento**: Un bloque de procesamiento es básicamente un extractor de características. Consiste en operaciones de DSP (Procesamiento Digital de Señales) que se utilizan para extraer características con las que nuestro modelo aprende. Estas operaciones varían dependiendo del tipo de datos utilizados en tu proyecto. Aquí estamos usando el bloque de procesamiento de imagen preconstruido de EdgeImpulse.
4. **Bloques de aprendizaje**: Después de agregar el bloque de procesamiento, ahora es momento de agregar un bloque de aprendizaje para completar tu impulso. Un bloque de aprendizaje es simplemente una red neuronal entrenada para aprender con tus datos. Aquí estamos utilizando Transfer Learning (Imágenes), lo que ajustará un modelo preentrenado de clasificación de imágenes a tus datos. Un buen rendimiento incluso con conjuntos de datos de imágenes relativamente pequeños.
5. Después de diseñar el impulso, haz clic en **guardar impulso** para continuar.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse01.png?raw=true" style={{width:600, height:'auto'}}/></div>

### Paso 2.1: Extracción de características utilizando el bloque de procesamiento

Aquí utilizaremos operaciones de DSP (Procesamiento Digital de Señales) que se usan para extraer características con las que nuestro modelo aprende. Estas operaciones varían dependiendo del tipo de datos utilizados en tu proyecto. Primero necesitamos configurar los parámetros como se menciona a continuación.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse02.png?raw=true
" style={{width:600, height:'auto'}}/></div>

Una vez que establecemos los parámetros, necesitamos generar las características, haz clic en **Generar características** Para iniciar la operación.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/feature03.png?raw=true" style={{width:600, height:'auto'}}/></div>

Una vez que generemos las características, necesitamos configurar la red neuronal que será entrenada para aprender con tus datos. Aquí estamos utilizando Transfer Learning (Imágenes), lo que ajustará un modelo preentrenado de clasificación de imágenes a tus datos. Obtendrás un buen rendimiento incluso con conjuntos de datos de imágenes relativamente pequeños. Selecciona la red neuronal como se menciona a continuación y haz clic en **Iniciar Entrenamiento**. Tomará algún tiempo, así que deberás esperar.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/train2.png?raw=true" style={{width:600, height:'auto'}}/></div>

Una vez que el entrenamiento esté completo, estamos listos para descargar la librería de tinyML que se ha creado. Ve a la opción **Despliegue** y selecciona **Librería de Arduino** como opción de despliegue, luego haz clic en **Construir** para generar la librería.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/deployment1.png?raw=true" style={{width:600, height:'auto'}}/></div>

La librería se descargará automáticamente. Después de eso, añádela al Arduino IDE. Abre tu Arduino IDE, haz clic en Esquema > Incluir librería > Añadir librería .ZIP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div>

Selecciona el archivo .zip que acabas de descargar, y si la librería se instala correctamente, verás el mensaje Librería añadida en la ventana de notificaciones. Esto significa que la librería se ha instalado con éxito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div>

## Paso 3. Ejecutar el sketch de ejemplo

Aunque Edge Impulse no ha lanzado su SDK para ESP32S3 utilizando el acelerador ESP NN, gracias a Dmitry Maslov, podemos tener sus optimizaciones de ensamblaje restauradas y corregidas para el ESP32-S3. Esta solución aún no es oficial, y EI la incluirá en su SDK una vez que solucionen los conflictos con otras placas.

:::caution
Por ahora, esto solo funciona con la versión no-EON. Por lo tanto, también debes asegurarte de que la opción **Habilitar compilador EON** no esté seleccionada.
:::

Cuando se seleccione el botón **Construir**, se creará un archivo Zip y se descargará en tu computadora.

Antes de usar la librería descargada, necesitamos habilitar el **Acelerador ESP NN**. Para ello, puedes descargar una versión preliminar desde el [GitHub del proyecto](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip), descomprimirla y reemplazar la carpeta **ESP NN** con ella en: `src/edge-impulse-sdk/porting/espressif/ESP-NN`, dentro de tu carpeta de librerías de Arduino.

:::warning Attention

- Recuerda reemplazar la carpeta **ESP-NN**, no dejes una carpeta existente ni cambies su nombre para restaurarla. Simplemente elimínala.
- El orden de los archivos de encabezado puede afectar la compilación, así que asegúrate de mantener el orden correcto de los archivos de encabezado.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div>

Copie el siguiente código de inferencia y pegalo en tu IDE de Arduino.

```cpp
/* Ejemplos de Arduino para Edge Impulse
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
 * de este software y los archivos de documentación asociados (el "Software"), para tratar
 * el Software sin restricción, incluyendo sin limitación los derechos
 * de usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar y/o vender
 * copias del Software, y permitir que las personas a quienes se les proporcione el Software
 * hagan lo mismo, sujeto a las siguientes condiciones:
 *
 * El aviso de copyright anterior y este aviso de permiso deberán incluirse en
 * todas las copias o partes sustanciales del Software.
 *
 * EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
 * IMPLÍCITA, INCLUYENDO PERO NO LIMITÁNDOSE A LAS GARANTÍAS DE COMERCIABILIDAD,
 * ADECUACIÓN PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
 * AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE CUALQUIER RECLAMO, DAÑOS O
 * CUALQUIER OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRA MANERA, QUE SURJA DE,
 * FUERA O EN CONEXIÓN CON EL SOFTWARE O EL USO O CUALQUIER OTRA OPERACIÓN EN EL
 * SOFTWARE.
 */

/* Inclusiones ---------------------------------------------------------------- */
#include <XIAO_esp32S3_CatDog2_inferencing.h>
#include "edge-impulse-sdk/dsp/image/image.hpp"

#include "esp_camera.h"

// Selecciona el modelo de cámara - encuentra más modelos en el archivo camera_pins.h aquí
// https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Camera/CameraWebServer/camera_pins.h

#define CAMERA_MODEL_XIAO_ESP32S3 // Tiene PSRAM

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


/* Definiciones constantes --------------------------------------------------- */
#define EI_CAMERA_RAW_FRAME_BUFFER_COLS           320
#define EI_CAMERA_RAW_FRAME_BUFFER_ROWS           240
#define EI_CAMERA_FRAME_BYTE_SIZE                 3

/* Variables privadas ------------------------------------------------------- */
static bool debug_nn = false; // Establecer esto en verdadero para ver, por ejemplo, las características generadas desde la señal sin procesar
static bool is_initialised = false;
uint8_t *snapshot_buf; // Apunta a la salida de la captura

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

    // XCLK 20MHz o 10MHz para OV2640 para doble FPS (experimental)
    .xclk_freq_hz = 20000000,
    .ledc_timer = LEDC_TIMER_0,
    .ledc_channel = LEDC_CHANNEL_0,

    .pixel_format = PIXFORMAT_JPEG, // YUV422, GRAYSCALE, RGB565, JPEG
    .frame_size = FRAMESIZE_QVGA,    // QQVGA-UXGA No usar tamaños mayores a QVGA cuando no se usa JPEG

    .jpeg_quality = 12, // 0-63, un número más bajo significa mayor calidad
    .fb_count = 1,       // Si hay más de uno, i2s funciona en modo continuo. Usar solo con JPEG
    .fb_location = CAMERA_FB_IN_PSRAM,
    .grab_mode = CAMERA_GRAB_WHEN_EMPTY,
};

/* Definiciones de funciones -------------------------------------------------- */
bool ei_camera_init(void);
void ei_camera_deinit(void);
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) ;

/**
* @brief      Función de configuración de Arduino
*/
void setup()
{
    // coloca tu código de configuración aquí, para ejecutar una vez:
    Serial.begin(115200);
    // comentar la línea de abajo para comenzar la inferencia inmediatamente después de la carga
    while (!Serial);
    Serial.println("Demostración de Inferencia de Edge Impulse");
    if (ei_camera_init() == false) {
        ei_printf("¡Falló la inicialización de la cámara!\r\n");
    }
    else {
        ei_printf("Cámara inicializada\r\n");
    }

    ei_printf("\nComenzando inferencia continua en 2 segundos...\n");
    ei_sleep(2000);
}

/**
* @brief      Obtener datos y ejecutar inferencia
*
* @param[in]  debug  Obtener información de depuración si es verdadero
*/
void loop()
{

    // en lugar de wait_ms, esperaremos la señal, esto permite que los hilos nos cancelen...
    if (ei_sleep(5) != EI_IMPULSE_OK) {
        return;
    }

    snapshot_buf = (uint8_t*)malloc(EI_CAMERA_RAW_FRAME_BUFFER_COLS * EI_CAMERA_RAW_FRAME_BUFFER_ROWS * EI_CAMERA_FRAME_BYTE_SIZE);

    // comprobar si la asignación fue exitosa
    if(snapshot_buf == nullptr) {
        ei_printf("ERR: ¡Falló la asignación del buffer de instantáneas!\n");
        return;
    }

    ei::signal_t signal;
    signal.total_length = EI_CLASSIFIER_INPUT_WIDTH * EI_CLASSIFIER_INPUT_HEIGHT;
    signal.get_data = &ei_camera_get_data;

    if (ei_camera_capture((size_t)EI_CLASSIFIER_INPUT_WIDTH, (size_t)EI_CLASSIFIER_INPUT_HEIGHT, snapshot_buf) == false) {
        ei_printf("Error al capturar imagen\r\n");
        free(snapshot_buf);
        return;
    }

    // Ejecutar el clasificador
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: ¡Error al ejecutar el clasificador (%d)\n", err);
        return;
    }

    // imprimir las predicciones
    ei_printf("Predicciones (DSP: %d ms., Clasificación: %d ms., Anomalía: %d ms.): \n",
                result.timing.dsp, result.timing.classification, result.timing.anomaly);

#if EI_CLASSIFIER_OBJECT_DETECTION == 1
    bool bb_found = result.bounding_boxes[0].value > 0;
    for (size_t ix = 0; ix < result.bounding_boxes_count; ix++) {
        auto bb = result.bounding_boxes[ix];
        if (bb.value == 0) {
            continue;
        }
        ei_printf("    %s (%f) [ x: %u, y: %u, ancho: %u, altura: %u ]\n", bb.label, bb.value, bb.x, bb.y, bb.width, bb.height);
    }
    if (!bb_found) {
        ei_printf("    No se encontraron objetos\n");
    }
#else
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label,
                                    result.classification[ix].value);
    }
#endif

#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf("    puntaje de anomalía: %.3f\n", result.anomaly);
#endif


    free(snapshot_buf);

}

/**
 * @brief   Configura el sensor de imagen e inicia la transmisión
 *
 * @retval  falso si la inicialización falló
 */
bool ei_camera_init(void) {

    if (is_initialised) return true;

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

    // inicializa la cámara
    esp_err_t err = esp_camera_init(&camera_config);
    if (err != ESP_OK) {
      Serial.printf("Falló la inicialización de la cámara con error 0x%x\n", err);
      return false;
    }

    sensor_t * s = esp_camera_sensor_get();
    // los sensores iniciales están volteados verticalmente y los colores están un poco saturados
    if (s->id.PID == OV3660_PID) {
      s->set_vflip(s, 1); // volver a voltear
      s->set_brightness(s, 1); // aumentar un poco el brillo
      s->set_saturation(s, 0); // reducir la saturación
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
 * @brief      Detener la transmisión de datos del sensor
 */
void ei_camera_deinit(void) {

    // desinicializa la cámara
    esp_err_t err = esp_camera_deinit();

    if (err != ESP_OK)
    {
        ei_printf("Desinicialización de la cámara fallida\n");
        return;
    }

    is_initialised = false;
    return;
}


/**
 * @brief      Captura, redimensiona y recorta la imagen
 *
 * @param[in]  img_width     ancho de la imagen de salida
 * @param[in]  img_height    altura de la imagen de salida
 * @param[in]  out_buf       puntero para almacenar la imagen de salida, NULL puede ser usado
 *                           si ei_camera_frame_buffer se va a usar para capturar y redimensionar/recortar.
 *
 * @retval     falso si no está inicializado, captura de imagen, redimensionamiento o recorte fallido
 *
 */
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) {
    bool do_resize = false;

    if (!is_initialised) {
        ei_printf("ERR: La cámara no está inicializada\r\n");
        return false;
    }

    camera_fb_t *fb = esp_camera_fb_get();

    if (!fb) {
        ei_printf("Captura de cámara fallida\n");
        return false;
    }

   bool converted = fmt2rgb888(fb->buf, fb->len, PIXFORMAT_JPEG, snapshot_buf);

   esp_camera_fb_return(fb);

   if(!converted){
       ei_printf("Conversión fallida\n");
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
    // ya tenemos un buffer RGB888, así que recalculamos el offset en el índice del píxel
    size_t pixel_ix = offset * 3;
    size_t pixels_left = length;
    size_t out_ptr_ix = 0;

    while (pixels_left != 0) {
        out_ptr[out_ptr_ix] = (snapshot_buf[pixel_ix] << 16) + (snapshot_buf[pixel_ix + 1] << 8) + snapshot_buf[pixel_ix + 2];

        // ir al siguiente píxel
        out_ptr_ix++;
        pixel_ix+=3;
        pixels_left--;
    }
    // ¡y listo!
    return 0;
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_CAMERA
#error "Modelo inválido para el sensor actual"
#endif
```

Asegúrate de reemplazar **"#include <XIAO_esp32S3_CatDog2_inferencing.h>"** con la librería que generaste. Luego, sube el código y apunta hacia las imágenes de un gato o perro, o usa las imágenes reales. Podrás ver los resultados en el monitor serial.

¡Felicidades por completar el proyecto de clasificación de imágenes con tinyML! 🙌

## Recursos

[PDF] **[ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Para XIAO ESP32S3 de Seeed Studio 

- **[PDF]** [Seeed Studio XIAO ESP32S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Dimension in DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle footprint](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model]() -->

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32S3 Certification files]() -->

### Para XIAO ESP32S3 Sense de Seeed Studio

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D Model]() -->

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Certification files]() -->

### Otras

- **[STP]** [XIAO ESP32S3 Sense housing design (top)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp>)

- **[STP]** [XIAO ESP32S3 Sense housing design (bottom)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp>)

_El material de código abierto restante sigue compilando, ¡así que quedense atentos!_

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diversos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
