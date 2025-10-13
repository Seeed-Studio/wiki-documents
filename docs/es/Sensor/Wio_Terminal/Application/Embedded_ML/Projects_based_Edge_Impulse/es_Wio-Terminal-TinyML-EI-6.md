---
description: Detección de anomalías para Mantenimiento Predictivo
title: Detección de anomalías para Mantenimiento Predictivo
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-6
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Detección de Anomalías con Edge Impulse en Wio Terminal para Mantenimiento Predictivo

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

En este proyecto, utilizaremos datos del acelerómetro integrado de Wio Terminal, realizaremos detección de anomalías en el dispositivo y luego enviaremos los datos a Blynk Edgent Cloud.

Anomalías. O específicamente detección de anomalías para mantenimiento predictivo. Vamos a utilizar datos del acelerómetro integrado de Wio Terminal, realizar inferencia de modelo de red neuronal y detección de anomalías en el dispositivo y luego enviar datos a la nueva versión de la plataforma IoT Blynk con una gran cantidad de nuevas características, que es totalmente compatible con Wio Terminal.

Para el tutorial completo y demostración en video, echa un vistazo al video que lo acompaña:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gXs-h3eeT1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Eso es QUÉ, ahora para la parte de CÓMO, comencemos con un ejemplo que podría ser más familiar.

## Detección de anomalías y mantenimiento predictivo en pocas palabras

Si entrenas un modelo simple de reconocimiento de imágenes para reconocer digamos 5 clases diferentes de animales (tigre, elefante, oso, serpiente y jirafa) y luego le das una imagen de una persona, hará una predicción lo mejor que pueda y posiblemente diga que es un elefante. Cue las risas de la gente común, que realmente no entiende mucho sobre el funcionamiento interno de este modelo particular y la visión por computadora en general.

Por supuesto, el modelo no hizo nada malo – procesó la imagen, calculó las características presentes y luego produjo el resultado de clasificación basado en estas características. Aunque si graficamos las características de las clases y las agrupamos, veríamos que idealmente las características de la imagen humana están lejos de cualquier grupo de clases y por lo tanto representan un "valor atípico".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"/></div>

Lo cual por supuesto podría ser solo una imagen muy extraña de uno de los animales, pero en la mayoría de los casos es mucho más probable que sea un objeto que el modelo no fue entrenado para reconocer.

Para tareas de visión por computadora y reconocimiento de voz a menudo tenemos una clase de "fondo" para lidiar con este problema, que básicamente representa cualquier cosa que no sean las clases de interés. En algunas situaciones, realmente solo queremos que nuestro modelo sea capaz de interpretar todos los datos como "normal" y "anormal". No importa cuáles son las características exactas de "anormal" – pueden ser muy diferentes, lo importante es que si se detecta la clase "anormal", se necesitan implementar algunas medidas. Lo que describí ahora es la premisa detrás del uso de Aprendizaje Automático para mantenimiento predictivo. Monitoreamos el estado del dispositivo, ya sea un aire acondicionado, bomba de agua u otra maquinaria con sensores y basándonos en el perfil de operación "normal" conocida, tratamos de detectar cuándo algo va LIGERAMENTE mal, antes de que vaya SERIAMENTE mal.

## Recopilación de datos y entrenamiento del modelo

Para este proyecto instalé Wio Terminal en una bomba de agua en el patio exterior de nuestra oficina, que tiene algunas plantas y peces.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"/></div>

Luego recopilé dos categorías de muestras: inactivo y operación normal, y entrené un modelo simple para reconocer estas dos basándose en la salida del bloque de procesamiento de Características Espectrales.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"/></div>

Para los parámetros exactos de los bloques de procesamiento y aprendizaje, puedes echar un vistazo a la versión pública del proyecto que compartí. El único ajuste significativo que hice fue cambiar el filtro de bajo a alto, lo que hizo que las características de diferentes clases fueran más prominentes. Distinguir entre operación inactiva y normal de la bomba por supuesto resultó ser realmente fácil. La tarea más desafiante fue la detección de mal funcionamiento. Para simular un mal funcionamiento sacaría la bomba de agua del tanque, esto básicamente llevaba a que los niveles de sonido y vibración disminuyeran.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

Observando la muestra de mal funcionamiento, en el explorador de características en los ejes accX RMS, accY RMS y accZ RMS, vemos que está a medio camino entre las muestras de operación inactiva y normal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"/></div>

Podemos usar esto a nuestro favor entrenando una nueva (segunda) red que crea grupos alrededor de datos que hemos visto antes, y compara los datos entrantes contra estos grupos. Si la distancia de un grupo es demasiado grande, la muestra es marcada como una anomalía.

Después de prueba y error encontré que un conteo de grupos muy bajo y un umbral de distancia de 0.5 funciona mejor para la detección de anomalías, pero esto es muy específico del caso y depende de tus datos. Una cosa que ayudó a aumentar la precisión fue fijar Wio Terminal en la bomba de agua firmemente con pegamento; para un dispositivo real puedes usar tornillos. Antes de fijarlo firmemente, Wio Terminal se tambaleaba aleatoriamente, lo que introducía demasiado ruido en las muestras de operación normal.

## Despliegue y pruebas

Después de que el modelo es entrenado y probado usando el modo de clasificación en vivo, es hora de desplegarlo de vuelta al dispositivo. Compilamos y descargamos la biblioteca de Arduino, la extraemos a la carpeta de bibliotecas de Arduino y luego modificamos el sketch nano33_ble_sense_accelerometer para que coincida con el acelerómetro que tenemos en Wio Terminal. Para una prueba simple usamos la pantalla LCD que se ilumina en rojo si se detecta una anomalía.

```cpp
#define ANOMALY_THRESHOLD 0.5

/* Includes ---------------------------------------------------------------- */
#include <wio_anomaly_detection_inference.h>
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;
LIS3DHTR<TwoWire> lis;

/* Constant defines -------------------------------------------------------- */
#define CONVERT_G_TO_MS2    9.80665f

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    //while (!Serial) {delay(10);}
    
    Serial.println("Edge Impulse Inferencing Demo");
    
    tft.begin();
    tft.setRotation(3);
    
    lis.begin(Wire1);
 
    if (!lis.available()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g
   

    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\n");
        return;
    }
}

/**
* @brief      Printf function uses vsnprintf and output using Arduino Serial
*
* @param[in]  format     Variable argument list
*/
void ei_printf(const char *format, ...) {
   static char print_buf[1024] = { 0 };

   va_list args;
   va_start(args, format);
   int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
   va_end(args);

   if (r > 0) {
       Serial.write(print_buf);
   }
}

/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Turn the raw buffer in a signal which we can the classify
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);

  if (result.anomaly > ANOMALY_THRESHOLD)
  {       
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Anomaly detected", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
  }
    
#endif
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "Invalid model for current sensor"
#endif
```

Por supuesto, para una aplicación real, este tipo de notificación probablemente no va a funcionar, porque no hay una persona que la vigile constantemente.

## Utilizando la nueva versión de la plataforma Blynk IoT

Para hacer útil esta demostración, vamos a usar la plataforma Blynk IoT.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

La plataforma Blynk IoT incluye características como un panel web para monitorear dispositivos, gestionar quién accede a los datos, un administrador de Wi-Fi para un procedimiento de configuración fácil, un nuevo enfoque para la creación de modelos de dispositivos y otros.

Ve a blynk.cloud, registra una cuenta o crea una nueva. Luego crea una nueva plantilla – las plantillas son modelos digitales del dispositivo que pueden ser heredados por múltiples dispositivos con funcionalidad similar. El poder de las plantillas es una actualización instantánea del modelo de datos del dispositivo sin importar el tamaño de tu flota de dispositivos.

Elige Arduino Uno como hardware y Wi-Fi como tipo de conexión. Luego completa las pestañas Datastreams y Dashboard como en las siguientes capturas de pantalla y guarda los cambios.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"/></div>

No estamos usando las pestañas Metadata o Events en este proyecto. El propósito principal de los componentes principales de la plantilla del dispositivo:

- Metadata – datos adicionales sobre el dispositivo que puedes configurar.
- Datastreams – una entidad para definir los datos que fluyen hacia y desde el dispositivo. En general, es muy similar a los Pines Virtuales (que también se pueden usar).
- Events – una lista de alertas y notificaciones importantes.
- Web Dashboard – Un conjunto de Widgets en la aplicación Web
- Mobile Dashboard – Un conjunto de Widgets en la aplicación Móvil

Crea un nuevo dispositivo en la pestaña My Devices – elige la plantilla que has creado y dale un nombre único.

Ahora la interfaz web está lista para recibir los datos de nuestro dispositivo. Descarga el sketch de ejemplo del repositorio de sketches de ejemplo de Seeed Wio Terminal – además del archivo principal del sketch también contiene archivos auxiliares, donde se encuentra el código del administrador de Wi-Fi. En el archivo principal del sketch, el código de recolección de datos/procesamiento de datos/inferencia que usamos para probar con la pantalla LCD fue movido a la función run_inference(). El ID de clase de la clase con mayor confianza (si la confianza está por encima del umbral establecido) se guarda dentro de la variable global best_result y junto con los datos de los sensores de luz y sonido se envía al servidor Blynk a intervalos periódicos. Recuerda cambiar BLYNK_TEMPLATE_ID y BLYNK_DEVICE_NAME por los de tu plantilla de dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"/></div>

Después de subir el código a Wio Terminal, creará un punto de acceso, al cual puedes conectarte con tu teléfono. Al conectarte serás automáticamente redirigido a una página de configuración simple, donde necesitas ingresar tus credenciales de WiFi, tu token de API (puedes encontrarlo haciendo clic en tu dispositivo en la pestaña My Devices y luego yendo a Device Info) y luego hacer clic en Connect. Entonces Wio Terminal se conectará a la red WiFi y al servidor en la nube de Blynk y comenzará a enviar los datos. Puedes presionar en el dispositivo en la pestaña My Devices y ver los gráficos bonitos y el mensaje de estado. Puedes ver los resultados de la prueba hacia el final del video.

Obviamente, el mismo enfoque se puede aplicar para detectar irregularidades en la operación de otra maquinaria – podemos usar el acelerómetro para prácticamente todo lo que tenga partes móviles, ya que estas producen vibración que podemos medir. Si el dispositivo emite sonidos audibles, también podemos usar el micrófono. Una combinación de sensores podría funcionar incluso mejor. ¿Hay otras buenas aplicaciones donde se pueda usar el mantenimiento predictivo? ¡Escribe tus ideas en los comentarios! ¡Espero que este artículo y video hayan sido útiles para ti!

## Referencia

- [Proyecto público de Edge Impulse](https://studio.edgeimpulse.com/public/31205/latest)

- [Github del proyecto](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection)
