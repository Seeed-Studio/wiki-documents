---
description: Introduction to EdgeImpulse.
title: Edgeimpulse
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/edgeimpulse
last_update:
  date: 02/10/2025
  author: Guillermo
---

## Edge Impulse

Edge Impulse es la plataforma de desarrollo líder en aprendizaje automático para dispositivos en el borde, gratuita para desarrolladores y confiable para empresas en todo el mundo.  

* Con Edge Impulse, los desarrolladores de software, ingenieros y expertos en el área pueden resolver problemas reales utilizando aprendizaje automático en dispositivos edge, sin necesidad de un doctorado o conocimientos avanzados en ingeniería embebida. Desde los primeros pasos hasta MLOps en producción, Edge Impulse proporciona máxima eficiencia y velocidad en una amplia gama de hardware, desde MCUs hasta CPUs.  

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/MakerGram/workshops/main/docs/tiny-ml-workshop/img/edgeimpulse/EI_homepage.png" style={{width:1000, height:'auto'}}/></div> 

Con Edge Impulse podemos:  
* Recopilar un conjunto de datos directamente desde el dispositivo.  
* Recopilar un conjunto de datos desde otras fuentes, como un archivo .zip, mediante API o a través de la ingesta de datos desde la nube de terceros.  
* Crear datos de prueba y entrenamiento y clasificarlos en diferentes etiquetas.  
* Entrenar nuestro modelo.  
* Seleccionar los algoritmos de ML adecuados: Edge Impulse proporciona algoritmos recomendados según nuestro conjunto de datos.  
* Desplegar el modelo en nuestro hardware.  
* Colaborar en proyectos de TinyML con control de versiones.  
* Y mucho más que facilita la construcción de aplicaciones TinyML.  

### Experiencia rápida práctica  

Antes de pasar por el proceso completo de aprendizaje de Edge Impulse, proporcionamos bibliotecas pre-generadas para Arduino, y puedes ver los resultados simplemente cargando este programa de Arduino directamente en el XIAO ESP32S3 Sense.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeImpulse/src/img/EdegeImpulse-lib.png" style={{width:1000, height:'auto'}}/></div> 

### Configurar XIAO ESP32S3 Sense en Arduino  

Antes de comenzar a usar las bibliotecas de Edge Impulse, necesitamos configurar el XIAO ESP32S3 en el IDE de Arduino. Sigue la guía [aquí](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/).  

#### Compilar y cargar el ejemplo Blink 

```cpp
// La función setup() se ejecuta una vez cuando presionas reset o enciendes la placa
void setup() {
  // Inicializa el pin digital LED_BUILTIN como una salida.
  pinMode(LED_BUILTIN, OUTPUT);
}

// La función loop() se ejecuta repetidamente para siempre
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // Enciende el LED (HIGH es el nivel de voltaje)
  delay(1000);                      // Espera un segundo
  digitalWrite(LED_BUILTIN, LOW);   // Apaga el LED haciendo el voltaje LOW
  delay(1000);                      // Espera un segundo
}
```

Asegúrate de seleccionar la placa correcta y el puerto adecuado antes de cargar el código.



#### Tareas pendientes  
- [ ] Instalar la placa XIAO ESP32S3 en Arduino IDE  
- [ ] Compilar y cargar el ejemplo Blink en XIAO ESP32S3  

### Bibliotecas disponibles de Edge Impulse  

También estamos avanzando en paralelo con la creación de algunas bibliotecas de Arduino exportadas desde Edge Impulse, las cuales han sido verificadas y editadas para funcionar directamente con XIAO ESP32S3 Sense. Al usar estas bibliotecas, tenemos más control en nuestro programa y podemos tomar decisiones.  

- [Biblioteca Arduino para reconocimiento de palabras clave (Yes & No)](https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/lib/XIAO_Esp32_KWS_inferencing.zip)  
- [Biblioteca Arduino para identificación de frutas (manzanas, plátanos, uvas)](https://files.seeedstudio.com/wiki/tinyml-topic/res/xiao-esp32s3-fruits-classify_inferencing.zip)  

### Cómo usar las bibliotecas de Edge Impulse en Arduino  

Es similar a una biblioteca genérica de Arduino: primero debemos instalarla en Arduino IDE y luego usar el código de ejemplo para ejecutar la demostración.  

### Biblioteca Arduino para reconocimiento de palabras clave (Yes & No)  

#### Demostración

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### ¿Cómo funciona?

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 


#### Paso 1. Descargar la biblioteca de demostración KWS  
Descarga la [biblioteca Arduino para reconocimiento de palabras clave (Yes & No)](https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/lib/XIAO_esp32S3_YesNo_inferencing.zip) en formato .zip.  

#### Paso 2. Agregar la biblioteca ZIP a Arduino IDE  

Como ya has descargado la biblioteca en formato ZIP, abre tu Arduino IDE y haz clic en **Sketch > Incluir Biblioteca > Agregar Biblioteca .ZIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div> 

Selecciona el archivo ZIP que acabas de descargar y, si la biblioteca se instala correctamente, verás el mensaje **"Library added to your libraries"** en la ventana de notificación. Esto significa que la biblioteca se ha instalado con éxito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div> 


#### Paso 3. Ejecutar el sketch de inferencia

```cpp
/* Ejemplos de Arduino con Edge Impulse
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
 * de este software y la documentación asociada (el "Software"), para tratar
 * el Software sin restricciones, incluyendo sin limitación los derechos
 * de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
 * copias del Software, y permitir a las personas a quienes se les proporcione el Software
 * hacerlo, sujeto a las siguientes condiciones:
 *
 * La nota de copyright anterior y esta nota de permiso deberán incluirse en
 * todas las copias o porciones sustanciales del Software.
 *
 * EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
 * IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIABILIDAD,
 * IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
 * AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U
 * OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, AGRAVIO O DE OTRO MODO, QUE SURJA DE,
 * O EN RELACIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE TRATAMIENTO EN EL
 * SOFTWARE.
 * 
 * Este código fue adaptado por Marcelo Rovai para ejecutarse en un XIAO ESP32S3
 * 29 de mayo de 2023
 * Modificado por Salman Faris
 * 14 de agosto de 2023
 * 
 */

// Si tu dispositivo tiene poca memoria, elimina esta macro para ahorrar 10 KB de RAM
#define EIDSP_QUANTIZE_FILTERBANK 0

/*
 ** NOTA: Si encuentras problemas de asignación de memoria en TFLite.
 **
 ** Esto puede deberse a una fragmentación excesiva de la memoria dinámica.
 ** Intenta definir "-DEI_CLASSIFIER_ALLOCATION_STATIC" en boards.local.txt (créalo
 ** si no existe) y copia este archivo en
 ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`.
 **
 ** Consulta
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 ** para encontrar dónde instala Arduino los núcleos en tu máquina.
 **
 ** Si el problema persiste, entonces no hay suficiente memoria para este modelo y aplicación.
 */

/* Includes ---------------------------------------------------------------- */
#include <XIAO_esp32S3_YesNo_inferencing.h>

#include <I2S.h>
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

/** Audio buffers, pointers and selectors */
typedef struct {
  int16_t *buffer;
  uint8_t buf_ready;
  uint32_t buf_count;
  uint32_t n_samples;
} inference_t;

static inference_t inference;
static const uint32_t sample_buffer_size = 2048;
static signed short sampleBuffer[sample_buffer_size];
static bool debug_nn = false;  // Configura en true para ver, por ejemplo, las características generadas a partir de la señal cruda
static bool record_status = true;

/**
 * @brief      Función de configuración de Arduino
 */
void setup() {
  // Ponga su código de configuración aquí para ejecutar una vez:
  Serial.begin(115200);

  pinMode(LED_BUILTIN, OUTPUT);
  // Comente la línea a continuación para cancelar la conexión de espera para USB (necesaria para USB nativo)
  while (!Serial)
    ;
  Serial.println("Edge Impulse Inferencing Demo");

  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1)
      ;
  }

  // Resumen de los parámetros de inferencia (desde model_metadata.h)
  ei_printf("Inferencing settings:\n");
  ei_printf("\tInterval: ");
  ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
  ei_printf(" ms.\n");
  ei_printf("\tFrame size: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
  ei_printf("\tSample length: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
  ei_printf("\tNo. of classes: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

  ei_printf("\nStarting continious inference in 2 seconds...\n");
  ei_sleep(2000);

  if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
    ei_printf("ERR: Could not allocate audio buffer (size %d), this could be due to the window length of your model\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
    return;
  }

  ei_printf("Recording...\n");
}

/**
 * @brief      Función principal de Arduino.Ejecuta el bucle de inferencia.
 */
void loop() {
  bool m = microphone_inference_record();
  if (!m) {
    ei_printf("ERR: Failed to record audio...\n");
    return;
  }

  signal_t signal;
  signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
  signal.get_data = &microphone_audio_signal_get_data;
  ei_impulse_result_t result = { 0 };

  EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
  if (r != EI_IMPULSE_OK) {
    ei_printf("ERR: Failed to run classifier (%d)\n", r);
    return;
  }

  int pred_index = 0;    // Inicializa pred_index
  float pred_value = 0;  // Inicializa pred_value

  // Imprime las predicciones
  ei_printf("Predictions ");
  ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
            result.timing.dsp, result.timing.classification, result.timing.anomaly);
  ei_printf(": \n");
  for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
    ei_printf("    %s: ", result.classification[ix].label);
    ei_printf_float(result.classification[ix].value);
    ei_printf("\n");

    if (result.classification[ix].value > pred_value) {
      pred_index = ix;
      pred_value = result.classification[ix].value;
    }
  }

    // Muestra resultado de inferencia
    if ((pred_index == 0 && (pred_value > 0.8))) {
      digitalWrite(LED_BUILTIN, HIGH);  //Encendiende
    } else if ((pred_index == 2) && (pred_value > 0.8)) {
      digitalWrite(LED_BUILTIN, LOW);  //Apaga
    } else {
      //nada que hacer. 
    }

#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
  }

  static void audio_inference_callback(uint32_t n_bytes) {
    for (int i = 0; i < n_bytes >> 1; i++) {
      inference.buffer[inference.buf_count++] = sampleBuffer[i];

      if (inference.buf_count >= inference.n_samples) {
        inference.buf_count = 0;
        inference.buf_ready = 1;
      }
    }
  }

  static void capture_samples(void *arg) {

    const int32_t i2s_bytes_to_read = (uint32_t)arg;
    size_t bytes_read = i2s_bytes_to_read;

    while (record_status) {

      /* Leer datos a la vez de i2s */
      esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void *)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

      if (bytes_read <= 0) {
        ei_printf("Error in I2S read : %d", bytes_read);
      } else {
        if (bytes_read < i2s_bytes_to_read) {
          ei_printf("Partial I2S read");
        }

        // escalar los datos (de lo contrario, el sonido es demasiado silencioso)
        for (int x = 0; x < i2s_bytes_to_read / 2; x++) {
          sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
          audio_inference_callback(i2s_bytes_to_read);
        } else {
          break;
        }
      }
    }
    vTaskDelete(NULL);
  }

  /**
 * @brief      Inicializa la estructura de inferencia y configura/inicia PDM
 *
 * @param[in]  n_samples  n_samples    El número de muestras
 *
 * @return     { description_of_the_return_value }
 */
  static bool microphone_inference_start(uint32_t n_samples) {
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if (inference.buffer == NULL) {
      return false;
    }

    inference.buf_count = 0;
    inference.n_samples = n_samples;
    inference.buf_ready = 0;

    //    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
    //        ei_printf("Failed to start I2S!");
    //    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void *)sample_buffer_size, 10, NULL);

    return true;
  }

  /**
 * @brief      Espera nuevos datos
 *
 * @return     Verdadero cuando termina
 */
  static bool microphone_inference_record(void) {
    bool ret = true;

    while (inference.buf_ready == 0) {
      delay(10);
    }

    inference.buf_ready = 0;
    return ret;
  }

  /**
 * Obtener datos de señal de audio sin procesar
 */
  static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr) {
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
  }

  /**
 * @brief      Detener PDM y liberar búferes
 */
  static void microphone_inference_end(void) {
    free(sampleBuffer);
    ei_free(inference.buffer);
  }


#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "Invalid model for current sensor."
#endif

```
Copia el código anterior o descargalo desde [aquí](https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/XIAO_esp32_s3_sense_kWS_Yes_No.ino) y luego cargue el código al XIAO. 

```cpp
// imprimir las predicciones
ei_printf("Predicciones ");
ei_printf("(DSP: %d ms., Clasificación: %d ms., Anomalía: %d ms.)",
          result.timing.dsp, result.timing.classification, result.timing.anomaly);
ei_printf(": \n");
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
  ei_printf("    %s: ", result.classification[ix].label);
  ei_printf_float(result.classification[ix].value);
  ei_printf("\n");

  if (result.classification[ix].value > pred_value) {
    pred_index = ix;
    pred_value = result.classification[ix].value;
  }
}

// Mostrar el resultado de la inferencia
if ((pred_index == 0 && (pred_value > 0.8))) {
  digitalWrite(LED_BUILTIN, HIGH);  //Encender
} else if ((pred_index == 2) && (pred_value > 0.8)) {
  digitalWrite(LED_BUILTIN, LOW);  //Apagar
} else {
  //nada que hacer.
}
```

En el código anterior, podemos ver dónde se tomaron las decisiones para **ENCENDER** y **APAGAR** el **LED**. También podemos agregar otra lógica aquí y usar KWS para controlar nuestros proyectos.
<hr></hr>

### Identificación de frutas (manzanas, plátanos, uvas) Biblioteca de Arduino
#### Paso 1. Descargar la biblioteca de identificación de frutas
Descarga la [Biblioteca de identificación de frutas (manzanas, plátanos, uvas) para Arduino](https://files.seeedstudio.com/wiki/tinyml-topic/res/xiao-esp32s3-fruits-classify_inferencing.zip) como archivo .Zip.

#### Paso 2. Añadir la biblioteca ZIP a Arduino IDE. 

Una vez que hayas descargado la biblioteca en formato ZIP, abre tu IDE de Arduino, haz clic en Sketch > Incluir Biblioteca > Añadir Biblioteca .ZIP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div> 

Selecciona el archivo ZIP que acabas de descargar, y si la biblioteca se instala correctamente, aparecerá un mensaje de confirmación que indica que la biblioteca se ha agregado correctamente a tu lista de bibliotecas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div> 

#### Paso 3. Ejecutar el ejemplo de sketch

Puedes encontrar el sketch de ejemplo bajo **Archivos -> Ejemplos -> xiao-esp323-fruits-classify_inferencing -> XIAO-ESP32S3-Sense**

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/fruitClassifications_Lib_path.png" style={{width:1000, height:'auto'}}/></div> 

#### Prueba la demo. 

Abre la página del conjunto de datos de muestra [aquí](https://www.kaggle.com/kritikseth/fruit-and-vegetable-image-recognition) y abre una imagen de fruta, luego apunta la cámara del XIAO ESP32S3 hacia la imagen de la fruta y observa los resultados en la pantalla.

# Tareas pendientes
- [ ] Instalar XIAO ESP32S3 en Arduino
- [ ] Compilar y cargar
- [ ] Instalar la biblioteca KWS de Arduino y ejecutar el ejemplo
- [ ] Instalar la biblioteca de Reconocimiento de Imágenes y ejecutar el ejemplo

## Recursos

- **[GITHUB]** [SenseCraft Model Assistant Models](https://github.com/Seeed-Studio/edgelab-model-zoo/tree/main/detection)
- **[GITHUB]** [Project Github](https://github.com/Mjrovai/XIAO-ESP32S3-Sense)
- **[EDGE-IMPULSE]** [edge impulse KWS demo](https://studio.edgeimpulse.com/public/270277/latest)
- **[EDGE-IMPULSE]** [edge impulse Fruits classify demo](https://studio.edgeimpulse.com/public/269519/latest)