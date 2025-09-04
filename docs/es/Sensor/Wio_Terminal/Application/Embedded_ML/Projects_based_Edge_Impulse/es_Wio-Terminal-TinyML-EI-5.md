---
description: Distinguir Bebidas
title: Distinguir Bebidas
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-5
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Wio Terminal Edge Impulse Distinguir Bebidas con Sensor de Gas Multicanal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"/></div>

En este wiki, presentaremos cómo usar [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) con [**Edge Impulse**](http://edgeimpulse.com/) para desplegar simplemente un proyecto de aprendizaje automático. Wio Terminal con los [**sistemas Grove**](https://www.seeedstudio.com/category/Grove-c-1003.html) puede ser muy poderoso, ¡lo que aporta cientos de datos de sensores para análisis y posiblemente evaluar diferentes escenarios!

Este es un proyecto inspirado por [el proyecto de nariz artificial de Benjamin Cabé](https://twitter.com/kartben/status/1258791793073815552). A través de este artículo, obtendrás una comprensión del flujo de trabajo de Edge Impulse usando Wio Terminal.

## Hardware Requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Grove - Sensor de Gas Multicanal v2**](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

- Algo de alcohol, café, cola

## Comenzar

Vamos a guiarte a través del flujo de trabajo de Edge Impulse con Wio Terminal.

### 1. Conectando a Edge Impulse

#### ① Cargar el firmware más reciente del dispositivo a Wio Terminal

Conecta Wio Terminal a tu computadora. Entra al modo bootloader deslizando el interruptor de encendido dos veces rápidamente. Para más referencia, por favor también ve [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra los [**archivos de firmware uf2 de Edge Impulse**](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2) descargados a la unidad `Arduino`. ¡Ahora, Edge Impulse está cargado en Seeeduino Wio Terminal!

**NOTA:** Aquí está el [código fuente de Wio Terminal Edge Impulse](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse), también puedes construir el firmware desde aquí.

#### ② Conectar usando WebUSB

Ve a tu proyecto de Edge Impulse, y haz clic en la pestaña Data acquisition, luego puedes ver la selección `Connect using WebUSB` en la parte superior derecha. Haz clic en ella.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/webusb.jpg" /></div>
Luego, puedes ver un pop-tip, selecciona el puerto serie emparejado y "Connect" como en la siguiente imagen.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/paired.jpg" /></div>
Ahora, has conectado exitosamente el Wio Terminal con Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/connected.jpg" /></div>

### 2. Recolectando Datos

Conecta el **Grove - Sensor de Gas Multicanal v2 al puerto Grove I2C de Wio Terminal**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg" /></div>

Coloca el Grove - Sensor de Gas Multicanal v2 sobre la bebida que vas a probar, en mi caso es cola primero. Una cosa a señalar aquí, el **Grove - Sensor de Gas Multicanal v2 puede ser afectado por el entorno fácilmente, puedes querer usar una cubierta para asegurarte de que esté detectando solo el contenido de prueba**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"/></div>

En el **panel de Edge Impulse**, navega a **Data acquisition**, elige tu dispositivo, y nombra tu **Label**. Como implica, la etiqueta debería nombrarse según tu contenido de prueba, así que aquí también será **cola**.

**Sample length (ms.)** será la duración de tu tiempo de muestreo en ms, **Sensor** elige **External multichannel gas** y **Frequency** elige **10Hz**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/cola.jpg"/></div>

Haz clic en **Start Sampling** y comenzará a recolectar datos.

En mi prueba, he obtenido datos de cola por **10s** por **9 veces** y cada vez tienen resultados similares. Necesitarás tener conjuntos de datos que sean bastante similares entre sí.

:::note
    Si tienes datos fluctuando mucho, esto puede ser causado por el entorno.
:::

Una vez que tengas suficientes datos para una etiqueta, ¡puedes hacer exactamente el mismo paso para otras etiquetas! En mi prueba, tengo tres conjuntos de datos más: aire, café y alcohol:

- **conjunto de datos de aire:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/air.jpg"/></div>

- **conjunto de datos de café:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/coffee.jpg"/></div>

- **conjunto de datos de alcohol:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/alcohol.jpg"/></div>

Deberías ver que diferentes bebidas tendrán diferentes valores de gas, ¡lo que lo hace perfecto para aprendizaje automático! Para agregar más, siempre es mejor tener más datos para que sea entrenado después, ¡así que siéntete libre de recolectar más datos!

:::note
    ¡Siéntete libre de hacer más categorías de alcohol!
:::

### 3. Diseñando el Impulso

A continuación, necesitaremos diseñar el impulso haciendo clic en **Impulse Design** -> **Create Impulse**. Un impulso toma datos en bruto, usa procesamiento de señales para extraer características, y luego usa un bloque de aprendizaje para clasificar nuevos datos. En este ejemplo, agregué un bloque de procesamiento de **raw data** con todos los ejes de entrada y agregué un bloque de aprendizaje **Neural Network (Keras)** como sigue:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/impulse.jpg"/></div>

Haz clic en **Save Impulse** y bajo Impulse design haz clic en **Raw data** y deberías ver las características en bruto de los conjuntos de datos:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/rawdata.jpg"/></div>

Haz clic en **Save parameters** y luego navegará a otra página. Haz clic en **Generate Features**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/feature.jpg"/></div>

Esto generará características a partir de los conjuntos de datos anteriores y verás un gráfico a la derecha. Si los conjuntos de datos están separados entre sí, significa que los conjuntos de datos son únicos entre sí, lo que los hace mejores para el aprendizaje automático de las diferencias.

### 4. Entrenamiento de Datos

Bajo **Impulse Design**, haz clic en **NN Classifier** para configurar los ajustes para la Red Neuronal, los siguientes son mis ajustes:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/net.jpg" /></div>

Es posible que quieras ajustar estos parámetros según tus necesidades y configurar tu **arquitectura de red neuronal**, luego haz clic en **Start training**! Esto realizará el entrenamiento y puede tomar un tiempo.

Una vez entrenado, verás una tabla del rendimiento del entrenamiento. Si tus conjuntos de datos son únicos entre sí, ¡deberías obtener resultados bastante buenos! Aquí está mi rendimiento:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/performance.jpg"/></div>

A partir de esto, puedes ver que la precisión no está mal, esto se debe a que solo hay 4 casos. Es posible que quieras agregar más casos/pruebas a este ejemplo.

### 5. Clasificación en Vivo

Ahora que tenemos el modelo entrenado, podemos probar el modelo con nuevos datos. Navega a **Live classification**, y toma nuevos conjuntos de datos para pruebas.

- Ejemplo de Prueba 1:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test1.jpg"/></div>

- Ejemplo de Prueba 2:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test2.jpg"/></div>

Como podemos ver en los resultados, estos son resultados bastante buenos donde puedes distinguir alcohol usando el Grove - Multichannel Gas Sensor v2 con la ayuda de Edge Impulse!

## Desplegando en Wio Terminal

El siguiente paso es el despliegue en el dispositivo. Después de hacer clic en la pestaña Deployment, elige la biblioteca de Arduino y descárgala.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

Extrae el archivo y colócalo en tu carpeta de bibliotecas de Arduino. Abre Arduino IDE y elige el sketch de buffer estático (ubicado en File -> Examples -> nombre de tu proyecto -> static_buffer), que ya tiene todo el código base para clasificación con tu modelo en su lugar. ¡Genial!

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/code.jpg" /></div>

Lo único que los usuarios necesitan completar es la función raw_feature_get_data(size_t offset, size_t length, float *out_ptr) .

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];
    features[0]=gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2]=gas.getGM502B();
    features[3]=gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

## Código Completo

```cpp
#include <coffee_cola_alcohol_big_inferencing.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];

    features[0]=gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2]=gas.getGM502B();
    features[3]=gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}

void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    gas.begin(Wire, 0x08); // use the hardware I2C
    Serial.println("Edge Impulse Inferencing Demo");
}

void loop()
{
    ei_printf("Edge Impulse standalone inferencing (Arduino)\n");

 
    ei_impulse_result_t result = { 0 };

    // the features are stored into flash, and we don't want to load everything into RAM
    signal_t features_signal;
    features_signal.total_length = sizeof(features) / sizeof(features[0]);
    features_signal.get_data = &raw_feature_get_data;

    // invoke the impulse
    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false /* debug */);
    ei_printf("run_classifier returned: %d\n", res);

    if (res != 0) return;

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    ei_printf("[");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("%.5f", result.classification[ix].value);
#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf(", ");
#else
        if (ix != EI_CLASSIFIER_LABEL_COUNT - 1) {
            ei_printf(", ");
        }
#endif
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("%.3f", result.anomaly);
#endif
    ei_printf("]\n");

    // human-readable predictions
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

    delay(1);
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
```

## Referencia

- [Proyecto de nariz artificial de Benjamin Cabé](https://twitter.com/kartben/status/1258791793073815552)

- [Proyecto público de Edge Impulse](https://studio.edgeimpulse.com/public/37392/latest)

- [Github del proyecto](https://wiki.seeedstudio.com/es/Wio-Terminal-Edge-Impulse)
