---
description: TinyML en Seeed Studio XIAO SAMD21
title: TinyML en Seeed Studio XIAO SAMD21
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-TinyML
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# TinyML en la Serie Seeed Studio XIAO

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>


Gracias a las mejoras recientes en la optimización de modelos y la aparición de marcos de trabajo creados específicamente para ejecutar inferencia de modelos de aprendizaje automático en microcontroladores, se ha vuelto posible dar más inteligencia a estos pequeños dispositivos. Ahora podemos desplegar redes neuronales en microcontroladores para reconocimiento de escenas de audio (por ejemplo, actividad de elefantes o sonido de vidrio rompiéndose), detección de palabras clave (para activar dispositivos con una frase específica) o incluso para tareas simples de reconocimiento de imágenes. Los dispositivos con microcontroladores integrados pueden usarse para dar nueva vida y significado a sensores antiguos, como usar un acelerómetro instalado en un mecanismo para detección de anomalías y mantenimiento predictivo – ¡o para distinguir varios tipos de licores como en [esta demostración](https://wiki.seeedstudio.com/es/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)! 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>


**Las posibilidades de TinyML son realmente enormes.**

Hemos hecho una [serie completa sobre el despliegue de modelos de aprendizaje automático pequeños](https://wiki.seeedstudio.com/es/Wio-Terminal-TinyML/) en otro producto de Seeed studio, una placa de desarrollo compacta en una carcasa de plástico, Wio Terminal. Pero es posible ir más pequeño y desplegar modelos similares al ARM Cortex M0+ y la pequeña placa [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) que está construida alrededor de él – la placa es tan pequeña como un pulgar (21×17.8mm), consume solo 1.33 mAh de energía (lo que significa que puede funcionar ~112 horas con una batería de 150 mA, mucho más si se pone en sueño profundo) y cuesta tan poco como 4.3 USD.

Este proyecto cubre el entrenamiento y despliegue de modelos en las placas de desarrollo Seeed Studio XIAO SAMD21 y Seeed Studio XIAO RP2040. Para información adicional, ¡echa un vistazo al video correspondiente!

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## Adquisición de datos y entrenamiento del modelo

Los ingenieros de software pasan mucho tiempo frente a la pantalla brillante en mi silla. Y más tarde en el día se vuelve difícil mantener una postura adecuada. Si tan solo hubiera una manera de hacer un dispositivo que pudiera aprender tu posición corporal específica para posturas correctas e incorrectas y advertirte cuando te encorves demasiado o adoptes la "postura Python"... Espera un momento, ¡la hay!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>


El mejor sensor para la tarea que proporcionará los datos para el modelo de aprendizaje automático es obviamente el acelerómetro. El Seeed Studio XIAO SAMD21 original y el Seeed Studio XIAO RP2040, siendo muy pequeños, no vienen equipados con sensor acelerómetro, mientras que el más nuevo Seeed Studio XIAO nRF52840 Sense viene con acelerómetro integrado.

Si usas el Seeed Studio XIAO SAMD21 original y el Seeed Studio XIAO RP2040, puedes conectar el módulo [acelerómetro Grove LIS3DH](https://wiki.seeedstudio.com/es/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/) a la [placa de expansión Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y comenzar a recopilar los datos. Recopila 3 muestras de datos para cada postura, 60 segundos cada una con el dispositivo adherido a una camiseta en tu espalda.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>


Para cada muestra, mantén la misma pose, pero incluye algunos movimientos de brazos, cabeza y torso para simular actividad normal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

Elige una ventana de tiempo de 5 segundos con desplazamiento de ventana de 1 segundo y bloque de procesamiento Flatten, ya que estamos tratando con datos que se mueven muy lentamente. Una red completamente conectada muy simple proporcionó una buena precisión. En la sección de Referencias al final del artículo, puedes encontrar el enlace a la versión pública del proyecto Edge Impulse.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

Se pueden hacer algunas mejoras recopilando más datos y asegurándose de que las posturas correctas e incorrectas puedan ser reconocidas con algunas variaciones en el posicionamiento del dispositivo en la ropa. Dado que el dispositivo está pensado para ser un dispositivo de uso individual, no necesita generalizar a las posturas de diferentes personas y puede ser fácilmente re-entrenado. Puedes verificar qué tan bien detecta tus posturas después del entrenamiento en la pestaña Live classification.

## Despliegue del modelo

Después de que estés satisfecho con la precisión, descarga el modelo resultante como biblioteca de Arduino y cópialo a tu carpeta sketches/libraries de Arduino. Puedes encontrar código de ejemplo en la sección de Referencias al final del artículo. El código de ejemplo recopila una muestra de 5 segundos, realiza la inferencia y enciende el zumbador si se detecta una de las poses incorrectas.

```cpp
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
#endif
    
  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)
  {     
  tone(BUZZER_PIN, 523, 250);
  delay(250);
  noTone(BUZZER_PIN);
  delay(250);  
  tone(BUZZER_PIN, 523, 250);
  delay(250);  
  noTone(BUZZER_PIN);    
  }

}
```

Dado que son datos que cambian relativamente lentamente y no necesitamos tiempos de respuesta rápidos, el pipeline de inferencia secuencial normal se adapta bien a esta aplicación.

Un paso más adelante sería usar el más reciente Seeed Studio XIAO nRF52840 y conectar el dispositivo al smartphone del usuario, lo que permitiría mejores alertas, estadísticas y demás.

¡Feliz experimentación y recuerda mantener una buena postura!

## Referencia

- [Proyecto público de Edge Impulse](https://studio.edgeimpulse.com/public/20025/latest)

- [Github del proyecto](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)