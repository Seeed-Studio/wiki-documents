---
description: Reconocimiento de Movimiento basado en Edge Impulse
title: Reconocimiento de Movimiento basado en Edge Impulse
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-RP2040-EI
last_update:
  date: 04/17/2023
  author: Citric
---

# TinyML en SEEED XIAO RP2040 (Reconocimiento de Movimiento)

En este wiki, te mostraremos cómo utilizar el acelerómetro en Seeed Studio XIAO RP2040 combinado con Edge Impulse para habilitar el reconocimiento de movimiento. Los códigos que presentamos aquí son compatibles con la última versión de las placas XIAO RP2040.

## Materiales Requeridos

### Hardware

En este wiki, necesitamos preparar los siguientes materiales:

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove - Shield para Seeeduino Xiao](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - Acelerómetro Digital de 3 Ejes(±1.5g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**Configuración del Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### Software

Las librerías requeridas se listan a continuación. Es altamente recomendado que uses los códigos aquí para verificar si el hardware está funcionando bien. Si tienes problemas instalando la librería, por favor consulta [aquí](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)

## Comenzar

Primero vamos a ejecutar algunas demostraciones para verificar si la placa y la pantalla están funcionando bien. Si las tuyas están bien, puedes continuar con la siguiente instrucción.

### Verificar la conexión del circuito y el acelerómetro

Abre el Arduino IDE, navega a Sketch -> Include Library -> Manage Libraries... y Busca e Instala la `librería U8g2` en el Administrador de Librerías.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png" alt="pir" width={400} height="auto" /></p>

Después de la instalación, copia el siguiente código y ejecútalo.

```cpp
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;
#define CONVERT_G_TO_MS2    9.80665f

void setup() {
    Serial.begin(115200);
    while (!Serial);
    accelemeter.init();
}

 
void loop() {

    float ax, ay, az;
    accelemeter.getAcceleration(&ax, &ay, &az);

    Serial.print(ax * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.print(ay * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.println(az * CONVERT_G_TO_MS2,4);
    
}

```

Después de cargar el código y desconectar el Seeed Studio XIAO RP2040.
Luego, abre el monitor serie y verás una salida como esta:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

Si todo está bien, podemos continuar y conectar el Seeed Studio XIAO RP2040 a Edge Impulse.

## Conectado con Edge Impulse

La precisión del modelo de entrenamiento es muy importante para el resultado final. Si los resultados de tu entrenamiento de salida son tan bajos como menos del 65%, te recomendamos encarecidamente que entrenes más veces o agregues más datos.

- **Paso 1.** Crea un nuevo proyecto en [Edge Impulse](https://studio.edgeimpulse.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 2.** Elige "Accelerometer data" y haz clic en "Let's get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Instala [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation) en tu computadora.

- **Paso 4.** Ejecuta el comando en tu `terminal` o `cmd` o `powershell` para iniciarlo.

```bash
sudo edge-impulse-data-forwarder
```

- **Paso 5.** Necesitamos usar la CLI para conectar el Seeed Studio XIAO RP2040 con Edge Impulse. Primero, inicia sesión en tu cuenta y elige tu proyecto

Nombra el acelerómetro y el dispositivo.

Regresa a la página "Data acquisition" de Edge Impulse, el resultado debería verse así si la conexión es exitosa. Puedes encontrar el dispositivo "XIAO RP2040" mostrado en el lado derecho de la página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 6.** Selecciona el sensor como "3 axes". Nombra tu etiqueta como `up` y `down`, modifica Sample length (ms.) a 20000 y haz clic en start sampling.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 7.** Balancea el [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/es/XIAO-RP2040/) hacia arriba y hacia abajo y mantén el movimiento durante 20 segundos. Puedes encontrar que la adquisición se muestra así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 8.** Divide los datos haciendo clic en la parte superior derecha de los datos sin procesar y elige "Split Sample". Haz clic en +Add Segment y luego haz clic en el gráfico. Repítelo más de 20 veces para agregar segmentos. Haz clic en Split y verás los datos de muestra cada uno de 1 segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 9.** Repite el **Paso 7.** y el **Paso 8.** y etiqueta los datos con diferentes nombres para hacer clic en diferentes datos de movimiento, como `circle` y `line` y así sucesivamente. El ejemplo proporcionado está clasificando arriba y abajo, izquierda y derecha, y círculo. Puedes cambiarlo como quieras cambiarlo aquí.

:::note
En el Paso 8. el tiempo de división es de 1 segundo, lo que significa que al menos debes hacer un balanceo de arriba y abajo en un segundo en el Paso 7. De lo contrario, los resultados no serán precisos. Mientras tanto, puedes ajustar el tiempo de división según tu propia velocidad de movimiento.
:::

- **Paso 10.** Crear Impulse

Haz clic en **Create impulse** -> Add a processing block -> Elige **Spectral Analysis** -> Add a learning block -> Elige **Classification (Keras)** -> Save Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 11.** Características espectrales

Haz clic y configura

Haz clic en **Spectral features** -> Desplázate hacia abajo en la página para hacer clic en Save parameters -> Haz clic en **Generate features**

La página de salida debería verse así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 12.** Entrenar tu modelo

Haz clic en NN Classifier -> Haz clic en Start training -> Elige Unoptimized (float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 13.** Prueba del modelo

Haz clic en Model testing -> Haz clic en Classify all

**Si tu precisión es baja, puedes verificar tu conjunto de datos aumentando el conjunto de entrenamiento y extendiendo el tiempo de muestra**

También podemos obtener la evaluación al descargar el modelo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 14.** Construir biblioteca de Arduino

Haz clic en Deployment -> Haz clic en Arduino Library -> Haz clic en **Build** -> Descarga el archivo .ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 15.** El nombre del archivo .ZIP es muy importante, está configurado como el nombre de tu proyecto de Edge Impulse por defecto. Como aquí el proyecto del nombre es "RP2040". Selecciona el archivo como "Agrega el archivo .ZIP" a tus bibliotecas de Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 16.** Abre Arduino -> Haz clic en Sketch -> Haz clic en **Include Library** ->
 **ADD .ZIP Library**

Copia el código de abajo, si el nombre del proyecto en edgeimpluse está personalizado, entonces el texto del archivo zip tendrá el mismo nombre. Puedes cambiar la primera línea del include a tu archivo de encabezado.

```c
#include <XIAO_RP2040_inferencing.h> // customed name need change this header file to your own file name
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;

#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f         

static bool debug_nn = false; 

void setup()
{
    Serial.begin(115200);
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    accelemeter.init();
}

float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        accelemeter.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

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

}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 17.** Mueve o sostén el Seeed Studio XIAO RP2040 y verifica los resultados:

Haz clic en el monitor en la esquina superior derecha de Arduino.

Cuando muevas el Seeed Studio XIAO RP2040 en la dirección de **círculo y línea**:

El monitor mostrará algo como:

```bash
15:45:45.434 -> 
15:45:45.434 -> Starting inferencing in 2 seconds...
15:45:47.414 -> Sampling...
15:45:48.439 -> Predictions (DSP: 6 ms., Classification: 1 ms., Anomaly: 0 ms.): 
15:45:48.439 ->     Circle: 0.59766
15:45:48.439 ->     line: 0.40234
15:45:48.439 -> 
```

¡Felicitaciones! Has llegado al final del proyecto. Se te anima a que pruebes más direcciones y compruebes cuál producirá el mejor resultado.

## Recursos

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/es/XIAO-RP2040/)
- [Edge Impluse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
