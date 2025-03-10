---
description: Motion Recognition based on Edge Impulse
title: Reconocimiento de Movimiento basado en Edge Impulse
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-RP2040-EI
last_update:
  date: 02/18/2025
  author: Guillermo
---

# TinyML en SEEED XIAO RP2040 (Reconocimiento de Movimiento)

En esta wiki, te mostraremos cómo utilizar el acelerómetro en el Seeed Studio XIAO RP2040 junto con Edge Impulse para habilitar el reconocimiento de movimiento. Los códigos que presentamos aquí son compatibles con la última versión de las placas XIAO RP2040.

## Materiales Requeridos  

### Hardware  

En esta wiki, necesitamos preparar los siguientes materiales:

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove - Shield para Seeeduino Xiao](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - Acelerómetro digital de 3 ejes (±1.5g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**Configuración de Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### Software  

A continuación, se enumeran las bibliotecas necesarias. Se recomienda encarecidamente utilizar los códigos aquí proporcionados para verificar si el hardware funciona correctamente. Si tienes problemas para instalar la biblioteca, consulta [aquí](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).  

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)  

## Comenzar  

Primero, ejecutaremos algunos demos para comprobar si la placa y la pantalla funcionan correctamente. Si todo está en orden, puedes continuar con la siguiente instrucción.  

### Verificar la conexión del circuito y el acelerómetro  

Abre el IDE de Arduino, navega a Sketch -> Incluir Biblioteca -> Administrar Bibliotecas... y busca e instala la biblioteca `U8g2` en el Administrador de Bibliotecas.

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

Después de cargar el código y desconectar el Seeed Studio XIAO RP2040,  
abre el monitor serie y verás una salida como esta:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

Si todo está en orden, podemos continuar y conectar el Seeed Studio XIAO RP2040 a Edge Impulse.  

## Conexión con Edge Impulse  

La precisión del modelo de entrenamiento es fundamental para el resultado final. Si los resultados de tu entrenamiento son inferiores al 65%, te recomendamos encarecidamente entrenar más veces o agregar más datos.  

- **Paso 1.** Crea un nuevo proyecto en [Edge Impulse](https://studio.edgeimpulse.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 2.** Elige "Accelerometer data" y haz clic en "Let’s get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Instala [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation) en tu computadora.  

- **Paso 4.** Ejecuta el siguiente comando en tu `terminal`, `cmd` o `powershell` para iniciarlo.

```bash
sudo edge-impulse-data-forwarder
```

- **Paso 5.** Necesitamos usar la CLI para conectar el Seeed Studio XIAO RP2040 con Edge Impulse. Primero, inicia sesión en tu cuenta y elige tu proyecto.  

Nombra el acelerómetro y el dispositivo.  

Vuelve a la página de "Adquisición de datos" en Edge Impulse. Si la conexión es exitosa, deberías ver un resultado similar a este. En el lado derecho de la página, aparecerá el dispositivo "XIAO RP2040".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 6.** Selecciona el sensor como "3 axes". Nombra tu etiqueta como `up` y `down`, modifica la duración de la muestra (ms) a 20000 y haz clic en "Start sampling".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 7.** Mueve el [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/XIAO-RP2040/) hacia arriba y hacia abajo y mantén el movimiento durante 20 segundos. Verás que la adquisición de datos se muestra de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 8.** Divide los datos haciendo clic en la parte superior derecha de los datos en bruto y selecciona "Split Sample". Haz clic en "+Add Segment" y luego en el gráfico. Repite este proceso más de 20 veces para agregar segmentos. Luego, haz clic en "Split" y verás los datos de muestra divididos en segmentos de 1 segundo cada uno.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 9.** Repite el **Paso 7** y el **Paso 8** y etiqueta los datos con nombres diferentes para hacer clic en distintos datos de movimiento, como `circle` y `line`, entre otros. El ejemplo proporcionado clasifica hacia arriba y hacia abajo, izquierda y derecha, y círculo. Puedes cambiar estos nombres según lo que desees clasificar.

:::note
En el Paso 8, el tiempo de división es de 1 segundo, lo que significa que debes hacer al menos un movimiento de arriba y abajo en un segundo durante el Paso 7. De lo contrario, los resultados no serán precisos. Mientras tanto, puedes ajustar el tiempo de división según la velocidad de tu propio movimiento.
:::

- **Paso 10.** Crear el Impulso

Haz clic en **Create impulse** -> Añadir un bloque de procesamiento -> Elige **Spectral Analysis** -> Añadir un bloque de aprendizaje -> Elige **Classification (Keras)** -> Guarda el Impulso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 11.** Características espectrales

Haz clic y configura

Haz clic en **Spectral features** -> Desplázate hacia abajo y haz clic en **Save parameters** -> Haz clic en **Generate features**.

La página de salida debería verse como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 12.** Entrenar tu modelo

Haz clic en **NN Classifier** -> Haz clic en **Start training** -> Elige **Unoptimized (float32)**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 13.** Pruebas del modelo

Haz clic en **Model testing** -> Haz clic en **Classify all**.

**Si la precisión es baja, puedes revisar tu conjunto de datos aumentando el conjunto de entrenamiento y extendiendo el tiempo de muestra.**

También podrás obtener la evaluación al descargar el modelo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 14.** Construir la librería de Arduino

Haz clic en **Deployment** -> Haz clic en **Arduino Library** -> Haz clic en **Build** -> Descarga el archivo .ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 15.** El nombre del archivo .ZIP es muy importante, se configura por defecto con el nombre de tu proyecto en Edge Impulse. Por ejemplo, en este caso el nombre del proyecto es "RP2040". Selecciona el archivo y **agrega el archivo ".ZIP" a tus bibliotecas de Arduino**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 16.** Abre Arduino -> Haz clic en **Sketch** -> Haz clic en **Include Library** -> **ADD .ZIP Library**.

Copia el código a continuación. Si el nombre del proyecto en Edge Impulse es personalizado, entonces el texto del archivo .ZIP será el mismo nombre. Puedes cambiar la primera línea del `#include` a tu archivo de encabezado.

```c
#include <XIAO_RP2040_inferencing.h> // Si el nombre es personalizado, cambia este archivo de encabezado al nombre de tu propio archivo
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
    Serial.println("Demostración de Inferencia de Edge Impulse");
    accelemeter.init();
}

float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

void loop()
{
    ei_printf("\nIniciando inferencia en 2 segundos...\n");

    delay(2000);

    ei_printf("Muestreo...\n");

    // Asigna un búfer para los valores que leeremos del IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determina el siguiente tick (y luego duerme más tarde)
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

    // Convierte el búfer crudo en una señal que luego podemos clasificar
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Error al crear la señal desde el búfer (%d)\n", err);
        return;
    }

    // Ejecuta el clasificador
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Error al ejecutar el clasificador (%d)\n", err);
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
    ei_printf("    puntaje de anomalía: %.3f\n", result.anomaly);
#endif
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg" alt="pir" width={800} height="auto" /></p>

- **Paso 17.** Mueve o sostiene el Seeed Studio XIAO RP2040 y verifica los resultados:

Haz clic en el monitor en la esquina superior derecha de Arduino.

Cuando mueves el Seeed Studio XIAO RP2040 en la dirección de **círculo y línea**:

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

¡Felicidades! Has alcanzado el final del proyecto. Se te anima a que pruebes más direcciones y verifiques cuál ofrece el mejor rendimiento.

## Recursos

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/XIAO-RP2040/)
- [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte apoyo en diversas formas y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
