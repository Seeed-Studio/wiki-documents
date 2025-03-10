---
description: TinyML en XIAO SAMD21 Seeed Studio
title: TinyML en XIAO SAMD21 Seeed Studio
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-TinyML
last_update:
  date: 02/18/2025
  author: Guillermo
---
# TinyML en la serie XIAO de Seeed Studio

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>


Gracias a las recientes mejoras en la optimización de modelos y la aparición de marcos de trabajo específicamente creados para ejecutar la inferencia de modelos de aprendizaje automático en microcontroladores, se ha vuelto posible dotar de más inteligencia a estos pequeños dispositivos. Ahora podemos desplegar redes neuronales en microcontroladores para el reconocimiento de escenas de audio (por ejemplo, actividad de elefantes o el sonido de cristales rotos), detección de palabras clave (para activar un dispositivo con una frase específica) o incluso para tareas sencillas de reconocimiento de imágenes. Los dispositivos con microcontroladores integrados pueden usarse para dar nueva vida y sentido a sensores antiguos, como utilizar un acelerómetro instalado en un mecanismo para detección de anomalías y mantenimiento predictivo, o incluso para distinguir varios tipos de licores como en [esta demostración](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)! 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>


**Las posibilidades de TinyML son realmente enormes.**

Hemos hecho una [serie completa sobre cómo desplegar modelos de aprendizaje automático pequeños](https://wiki.seeedstudio.com/Wio-Terminal-TinyML/) en otro producto de Seeed Studio, una placa de desarrollo compacta en una caja de plástico, Wio Terminal. Pero es posible ir aún más pequeño y desplegar modelos similares en ARM Cortex M0+ y la pequeña placa [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), que está construida alrededor de este chip. La placa es tan pequeña como un pulgar (21×17.8 mm), consume solo 1.33 mAh de energía (lo que significa que puede funcionar unas ~112 horas con una batería de 150 mA, mucho más si se pone en modo de suspensión profunda) y cuesta solo 4.3 USD.

Este proyecto cubre el entrenamiento y despliegue del modelo en las placas de desarrollo Seeed Studio XIAO SAMD21 y Seeed Studio XIAO RP2040. Para más información, ¡echa un vistazo al video correspondiente!

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## Adquisición de datos y entrenamiento del modelo

Los ingenieros de software pasan mucho tiempo frente a la pantalla brillante en mi silla. Y más tarde en el día, se vuelve difícil mantener una postura adecuada. ¡Si tan solo existiera una manera de hacer un dispositivo que pudiera aprender tu posición corporal específica para identificar posturas correctas e incorrectas y advertirte cuando te encorvas demasiado o entras en la "postura de Python"... Espera un momento, ¡sí existe!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>


El mejor sensor para la tarea que proporcionará los datos para el modelo de aprendizaje automático es, obviamente, el acelerómetro. Los modelos originales de Seeed Studio XIAO SAMD21 y Seeed Studio XIAO RP2040, al ser muy pequeños, no vienen equipados con un sensor de acelerómetro, mientras que el más reciente Seeed Studio XIAO nRF52840 Sense viene con un acelerómetro integrado.

Si usas los modelos originales Seeed Studio XIAO SAMD21 y Seeed Studio XIAO RP2040, puedes conectar el módulo [Grove LIS3DH acelerómetro](https://wiki.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/) a la [placa de expansión Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y comenzar a recolectar los datos. Recoge 3 muestras de datos para cada postura, de 60 segundos cada una, con el dispositivo sujeto a una camiseta en tu espalda.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>


Para cada muestra, mantén la misma postura, pero incluye algunos movimientos de los brazos, cabeza y torso para simular una actividad normal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

Elige una ventana de tiempo de 5 segundos con un desplazamiento de ventana de 1 segundo y el bloque de procesamiento Flatten, ya que estamos trabajando con datos de movimiento muy lento. Una red totalmente conectada muy simple proporcionó una buena precisión. En la sección de Referencias al final del artículo, puedes encontrar el enlace a la versión pública del proyecto Edge Impulse.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

Se puede mejorar algo recolectando más datos y asegurándose de que las posturas correctas e incorrectas puedan ser reconocidas con algunas variaciones en la posición del dispositivo sobre la ropa. Dado que el dispositivo está pensado para uso individual, no necesita generalizar las posturas de diferentes personas y puede ser fácilmente reentrenado. Puedes verificar qué tan bien detecta tus posturas después del entrenamiento en la pestaña de Clasificación en vivo.

## Despliegue del modelo

Una vez que estés satisfecho con la precisión, descarga el modelo resultante como una biblioteca de Arduino y cópiala en la carpeta de bibliotecas de tus bocetos de Arduino. Puedes encontrar el código de ejemplo en la sección de Referencias al final del artículo. El código de ejemplo recoge una muestra de 5 segundos, realiza la inferencia y enciende el zumbador si se detecta alguna de las posturas incorrectas.

```cpp
void loop()
{

    ei_printf("Tomando muestras...\n");

    // Asigna un buffer para los valores que leeremos del IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determina el siguiente tick (y luego duerme más tarde)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Convierte el buffer crudo en una señal que luego podemos clasificar
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Error al crear la señal a partir del buffer (%d)\n", err);
        return;
    }

    // Ejecuta el clasificador
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Falló la ejecución del clasificador (%d)\n", err);
        return;
    }

    // Imprime las predicciones
    ei_printf("Predicciones ");
    ei_printf("(DSP: %d ms., Clasificación: %d ms., Anomalía: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    puntuación de anomalía: %.3f\n", result.anomaly);
#endif
    
    // Si el valor de clasificación supera el umbral de alarma, se activa el zumbador
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

Dado que se trata de datos que cambian relativamente lento y no necesitamos tiempos de respuesta rápidos, una tubería de inferencia secuencial normal se adapta bien a esta aplicación.

Un paso más avanzado sería utilizar el más reciente Seeed Studio XIAO nRF52840 y conectar el dispositivo al teléfono inteligente del usuario, lo que permitiría mejores alertas, estadísticas, y más.

¡Feliz experimentación y recuerda mantener una buena postura!

## Referencias

- [Proyecto público de Edge Impulse](https://studio.edgeimpulse.com/public/20025/latest)

- [Proyecto en GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)