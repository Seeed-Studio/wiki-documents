---
description: Conteo de personas con sensor ultrasónico
title: Conteo de personas con sensor ultrasónico
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-4
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Wio Terminal Edge Impulse Conteo de personas con sensor ultrasónico

En este proyecto crearemos un sistema de conteo de personas utilizando Wio Terminal, un sensor ultrasónico común y una salsa especial de Deep Learning para completarlo y hacer que realmente funcione.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/image_zM8pM16fk9.jpeg"/></div>

También utilizaremos el servicio Microsoft Azure IoT Central para almacenar los datos de ocupación de la habitación en la nube y visualizarlos en PC.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/iotedge.png"/></div>

¡Para más detalles y tutorial en video, mira el video correspondiente!

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pt1maDNXznI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Entendiendo los datos

Primero, entendamos los datos que podemos obtener del sensor ultrasónico y cómo podemos utilizarlos para determinar la dirección de los objetos.

Grove - Ultrasonic ranger es un módulo de medición de distancia sin contacto que funciona a 40KHz. Cuando proporcionamos una señal de pulso disparador con más de 10uS a través del pin de señal, el Grove_Ultrasonic_Ranger emitirá 8 ciclos de nivel de ciclo de 40kHz y detectará el eco. El ancho de pulso de la señal de eco es proporcional a la distancia medida. Aquí está la fórmula: Distancia = tiempo alto de la señal de eco * Velocidad del sonido (340M/S)/2.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Ultrasonic_Working_Principle.png"/></div>

:::caution
No conectes en caliente Grove-Ultrasonic-Ranger, de lo contrario dañarás el sensor. El área medida no debe ser menor a 0.5 metros cuadrados y debe ser lisa.
:::

Después de instalar la librería Grove - Ultrasonic Ranger para Arduino IDE y conectar el Ultrasonic Ranger al puerto D1/D2 del Wio Terminal, podemos subir este script simple al Wio Terminal conectado al Grove Ultrasonic Ranger y luego caminar hacia adentro y hacia afuera de la habitación.

```cpp
#include "Ultrasonic.h"
#define INTERVAL_MS 50
Ultrasonic ultrasonic(0);
void setup() {
    Serial.begin(115200);
    }
void loop() {
    static unsigned long last_interval_ms = 0;
    float distance;
    if (millis() > last_interval_ms + INTERVAL_MS) {
        last_interval_ms = millis();
        distance = ultrasonic.MeasureInCentimeters();
        if (distance < 200.0) {
        Serial.println(distance);
        }
        else
        Serial.println(-1);
        //Serial.print('\t');
    }
}
```

Podemos ver inmediatamente que al caminar hacia él, obtenemos valores relativamente altos (correspondientes a la distancia del objeto) primero, que luego disminuyen. Y al alejarse caminando, obtenemos una señal completamente opuesta.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/full (Time 0_02_01;29).png"/></div>

Teóricamente podríamos escribir nosotros mismos un algoritmo a mano, que pueda determinar la dirección. Desafortunadamente, las situaciones de la vida real son complicadas – tenemos personas que caminan rápido (longitud de curva más corta) y lento (longitud de curva más larga), tenemos personas más delgadas y personas que son... no tan delgadas y así sucesivamente. Así que nuestro algoritmo escrito a mano necesita tomar todo esto en cuenta, lo que inevitablemente lo hará complicado y enrevesado. Tenemos una tarea que involucra procesamiento de señales de inferencia y muchos datos ruidosos con variaciones significativas... Y la solución es — Aprendizaje Profundo.

## Adquisición de datos de entrenamiento

Conecta el terminal Wio y el sensor ultrasónico con tornillos a un marco de madera o impreso en 3D, ejemplo a continuación:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/device.png"/></div>

Para poner el marco en la pared, se usaron tiras de velcro 3M.

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/3m.png" />

Las opciones adicionales incluyen usar cinta de espuma, tornillos o clavos.

Creemos un nuevo proyecto en el Panel de Edge Impulse y preparémonos para obtener los datos. Para recopilar los datos, ya que no necesitamos una frecuencia de muestreo muy alta, podemos usar la herramienta de reenvío de datos de edge-impulse-cli. Sube el script ei_people_counter_data_collection.ino (exactamente el mismo script que se pegó arriba) al Terminal Wio – los siguientes pasos asumen que ya has instalado Edge Impulse CLI como se describe en Comenzando con Edge Impulse.

En este script particular filtramos todos los valores por encima de 200 cm, estableciéndolos en -1.

```cpp
if (distance < 200.0) {
 Serial.println(distance);
}
else {
    Serial.println(-1);
}
```

Para tu aplicación podrías necesitar establecer este valor más bajo o más alto, dependiendo de la configuración. Luego comienza a caminar.
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif"/></div>

Para este proyecto grabamos 1 minuto 30 segundos de datos para cada clase, cada vez grabando muestras de 5000 ms y luego recortándolas para obtener muestras de 1500 ms – recuerda que la variedad es muy importante en el conjunto de datos, así que asegúrate de tener muestras donde tú (u otras personas) caminen rápido, lento, corran, etc.

<div>
<img width="{180}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/in.png" />

<img width ={570} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/out.png"/>

<img width="{175}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/none.png" />
</div>

Para la categoría none, además de muestras que no tengan a nadie frente al dispositivo, es una buena idea incluir muestras que tengan a una persona simplemente parada cerca del dispositivo y caminando al lado de él, para evitar que cualquier movimiento sea falsamente clasificado como entrada o salida.

<br />

## Construyendo un modelo de aprendizaje automático

Cuando hayas terminado con la recolección de datos, crea tu impulso – establece la longitud de ventana a 1500 ms y el aumento del tamaño de ventana a 500 ms.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture.PNG"/></div>

1500 ms es más que suficiente para cubrir la duración de tiempo que toma una persona cuando camina hacia la puerta o sale caminando, excepto si se mueve extremadamente lento. Para los bloques de procesamiento, solo tenemos dos bloques esta vez para experimentar – Datos en bruto o Análisis espectral. El bloque Flatten borrará toda la información del dominio del tiempo de los datos, haciéndolo completamente inútil para determinar la dirección, así que no lo usaremos.
El bloque de análisis espectral aplica la Transformada Rápida de Fourier a las muestras de datos, convirtiendo la señal del dominio del tiempo al dominio de la frecuencia. Aunque FFT puede funcionar para otros tipos de señales, como sonidos o datos del acelerómetro, en nuestro caso la frecuencia de la señal en realidad tampoco importa tanto, ya que no podemos juzgar si una persona está entrando o saliendo de la habitación basándose en la frecuencia. Si observas la visualización de datos después del bloque de Análisis espectral, es claro que es difícil separar las muestras de datos de entrada y salida.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture1.PNG"/></div>

Cambiar el bloque de procesamiento a Espectrograma realmente no alivia el problema y la precisión resultante sigue siendo bastante baja – lo más alto que pudimos obtener fue 79.6%, con mucha confusión entre las clases de entrada y salida. Y el ganador, una vez más, son los Datos en bruto (con escalado) + Red Convolucional 1D. Los mejores resultados se lograron ajustando un poco la arquitectura de la red para obtener 92% de precisión, para eso necesitarás cambiar al modo "experto" y cambiar los strides de MaxPool1D a 1 y el tamaño del pool a 4.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture2.PNG"/></div>

¿Qué tan buena es una precisión del 92% y qué se puede hacer para mejorarla?
92% es bastante bueno como prueba de concepto o prototipo, pero horrible como modelo de producción. Para producción, puede variar – si tu aplicación es crítica y de alguna manera se usa en control automatizado y toma de decisiones, realmente no quieres tener nada por debajo del 98 – 99 por ciento e incluso eso podría ser bajo, piensa en algo como un sistema de reconocimiento facial para pagos o autenticación. ¿Hay formas de mejorar la precisión de este sistema?
• El sensor ultrasónico es un sensor barato y ubicuo, pero es relativamente lento y no muy preciso.

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Grove-TF-Mini-LiDAR.JPG" />

 Podemos obtener mejores datos usando el Módulo LiDAR Grove TF Mini.

• Obtener más datos y posiblemente colocar el sensor más bajo, a la altura normal de la cintura humana para asegurarse de que pueda detectar personas de estatura más baja de lo normal y niños.
• Dos son mejor que uno – tener dos sensores tomando mediciones en lugares ligeramente diferentes no agregará demasiados datos (solo tenemos 31 puntos de datos en cada muestra), pero podría aumentar la precisión. Para explorar ideas más interesantes, se puede usar un sensor de luz incorporado si el Wio Terminal está ubicado apropiadamente.

## Desplegando en Wio Terminal

Una vez que el modelo está entrenado podemos realizar clasificación en vivo con datos del dispositivo – aquí encontramos que el aumento del tamaño de ventana de 500 ms en realidad no funciona tan bien y produce más falsos positivos, así que en el siguiente paso, al desplegar en el dispositivo, es mejor aumentar el valor a 750 ms. Para desplegar el modelo en Wio Terminal ve a la pestaña de despliegue, elige la biblioteca de Arduino, descárgala, extrae el archivo y ponlo dentro de tu carpeta de bibliotecas de Arduino.

Esta vez usaremos el ejemplo de inferencia continua para asegurarnos de que no estamos perdiendo ningún dato importante.
Si recuerdas, en el primer proyecto, para la inferencia, recopilaríamos todos los puntos de datos en la muestra, realizaríamos la inferencia y luego volveríamos al muestreo – eso significa que al alimentar los datos a la red neuronal pausaríamos la recopilación de datos y perderíamos algunos de los datos.

<img width="{200}" align="right" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/10df57c-RunImpulse.png" />

Eso no es óptimo y podemos usar DMA (Acceso Directo a Memoria), hilos o multiprocesamiento para solucionar este problema.
<div align="center">
<img width ={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/DMA.gif"/></div>

El MCU de Wio Terminal (núcleo Cortex M4F) solo tiene un núcleo, así que el multiprocesamiento no es una opción – así que en este caso usaremos FreeRTOS e hilos. Lo que va a pasar es que durante el proceso de inferencia, FreeRTOS pausará la inferencia por un breve momento, recopilará la muestra de datos y luego volverá a la inferencia.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/TaskExecution.png"/></div>

De esta manera la inferencia real tomará un poco más de tiempo, pero la diferencia es insignificante para este caso de uso particular. Realizamos inferencia cada 500 ms, así que cada segmento de 500 ms de la ventana de tiempo se realizará inferencia 3 veces. Luego tomamos el resultado que tiene la mayor confianza a través de 3 inferencias – por ejemplo tenemos la mayor confianza para la etiqueta "out" 2 veces y para la etiqueta "none" una vez, por lo tanto el resultado debería clasificarse como "out". Para simplificar las pruebas añadiremos las líneas que encienden la pantalla de Wio Terminal cuando una persona está entrando a la habitación y la apaga cuando una persona sale.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test1.gif"/></div>

Abre Ejemplos -> nombre de tu proyecto -> sketch nano_ble33_sense_accelerometer_continuous y reemplaza todo (incluyendo la declaración de la función run_inference_background) arriba de la función setup con el siguiente bloque de código:

```cpp
/* Includes ---------------------------------------------------------------- */
#include <people_counter_raw_inference.h>
#include <Seeed_Arduino_FreeRTOS.h>
#include "Ultrasonic.h"
#include "TFT_eSPI.h"

#define ERROR_LED_LIGHTUP_STATE HIGH

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static uint32_t run_inference_every_ms = 500;

static float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = {0};
static float inference_buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE];
float distance;
uint8_t axis_num = 1;

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;
Ultrasonic ultrasonic(0);
TFT_eSPI tft;
```

En la función de configuración, inicializar la pantalla LCD

```cpp
    tft.begin();
    tft.setRotation(3);
```

y elimina todas las líneas que están relacionadas con el acelerómetro. Luego, en lugar de ```inference_thread.start(mbed::callback(&run_inference_background));``` pega el siguiente bloque de código - la razón por la que necesitamos reemplazar esta línea es porque la inicialización del Thread se hace de manera diferente en Arduino BLE33 Sense y Wio Terminal.

```cpp
    vSetErrorLed(LED_BUILTIN, ERROR_LED_LIGHTUP_STATE);
    
    // Create the threads that will be managed by the rtos
    // Sets the stack size and priority of each task
    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks

    xTaskCreate(run_inference_background,"Inference", 512, NULL, tskIDLE_PRIORITY + 1, &Handle_aTask);
    xTaskCreate(read_data, "Data collection", 256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);

    // Start the RTOS, this function will never return and will schedule the tasks.

    vTaskStartScheduler();
```

La función run_inference_continuous permanece en gran medida sin cambios, las únicas dos cosas que necesitan cambiarse aquí son
• ```void run_inference_background()``` a ```static void run_inference_background(void*pvParameters)```
• ```ei_classifier_smooth_init(&smooth, 10 /* no. of readings */, 7 /* min. readings the same */, 0.8 /* min. confidence */, 0.3 /* max anomaly */);``` a
    ```ei_classifier_smooth_init(&smooth, 3 /* no. of readings */, 2 /* min. readings the same */, 0.6 /* min. confidence */, 0.3 /* max anomaly */);```
La línea anterior controla los parámetros de promediado (o suavizado), que aplicamos a la salida del modelo. Puedes experimentar con los valores para ver qué valores permiten el mejor rendimiento en términos de tasa de verdaderos positivos/falsos positivos.
Mientras que en el código original, la recolección de datos ocurre en la función loop, para el puerto de Wio Terminal FreeRTOS, es mejor implementar la recolección de datos en un hilo y dejar la función loop vacía. Elimina la función loop en el código original y reemplázala con el siguiente bloque de código

```cpp
/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
static void read_data(void* pvParameters)
{
    while (1) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        // roll the buffer -axis_num points so we can overwrite the last one
        numpy::roll(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, -axis_num);
        
        distance = ultrasonic.MeasureInCentimeters();
        if (distance > 200.0) { distance = -1;}
        
        buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE - 1] = distance;

        // and wait for next tick
        uint64_t time_to_wait = next_tick - micros();
        delay((int)floor((float)time_to_wait / 1000.0f));
        delayMicroseconds(time_to_wait % 1000);
    }
}

void loop()
{
  //nothing, all the work is done in two threads
}
```

Aquí esperamos hasta que sea el momento de obtener los datos, luego tomamos la medición de distancia con el sensor ultrasónico y la copiamos al buffer de inferencia. Recuerda que dado que es un hilo, tener un retraso aquí no afecta todo el sistema y solo "detiene" temporalmente el hilo - hasta que sea el momento de tomar la siguiente lectura. FreeRTOS puede realizar tareas en otros hilos mientras el hilo de recolección de datos está inactivo.

## Integración con Azure IoT Central

Bien, el modelo funciona, pero nuevamente por sí solo no es adecuado para aplicarlo realmente en el mundo real. Agreguemos dos elementos para convertirlo en una aplicación completa: una GUI simple y carga de datos a la nube con gráficos bonitos. Usaremos la [biblioteca LVGL](https://wiki.seeedstudio.com/es/Wio-Terminal-LVGL/) para crear la interfaz gráfica de usuario y el servicio Microsoft Azure IoT Central para envío de datos y visualización. El sketch resultante tiene 693 líneas de largo y tiene 3 hilos concurrentes ejecutándose en RTOS. Aquí hay un resumen rápido de los pasos que necesitas para hacerlo funcionar con IoT Central.
Encuentra el proyecto en el repositorio de Github para este proyecto, bajo el nombre WioTerminal_Azure_Central.ino y ábrelo en Arduino IDE. Después de que el sketch sea cargado, entra al modo de configuración presionando los tres botones en la parte superior del Wio Terminal y reiniciando el dispositivo.

"En modo de configuración" se mostrará en la pantalla del dispositivo. Conéctate al dispositivo con el monitor Serial (velocidad de baudios 115200, retorno de carro) y establece el SSID de WiFi, contraseña y credenciales de Azure IoT Central (en el siguiente formato ```set_az_iotc tu_ID_scope tu_primary_key tu_device_ID```), que puedes obtener siguiendo estos pasos:
• Ve a [https://apps.azureiotcentral.com/](https://apps.azureiotcentral.com/)
• Si aún no tienes una cuenta de Microsoft, registra una.
• Ve a Build -> Custom app. Ingresa el nombre de la aplicación y URL única (puede ser similar al nombre de la aplicación). Elige el plan Gratuito.
• Después de que se cree una aplicación, ve a Device Templates. Crea una nueva plantilla de tipo dispositivo IoT. Elige modelo personalizado, agrega tres capacidades como en la captura de pantalla de abajo y dos interfaces (presiona en Views -> Visualizing the device). Después de terminar eso y asegurarte de que todo esté correcto, publica la plantilla.
• Crea un nuevo dispositivo desde la plantilla yendo a Devices y presionando en New, ¡recuerda elegir la Plantilla que acabas de crear y publicar!
• Obtén el ID scope desde Administration -> Device connection, Primary key desde Administration -> Device connection -> SAS-IoT-Devices y device ID desde la pestaña Devices, donde creaste tu dispositivo en el Paso 5.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure1.jpeg"/></div>

Después de que la configuración sea exitosa, reinicia el Wio Terminal y comenzará a conectarse a Azure IoT Central, puedes ver el progreso detallado en el Terminal Serial. Entonces podrás ver a) El estado del dispositivo en el dashboard ha cambiado a Provisioned b) Datos de telemetría del sensor Acelerómetro en Device -> Raw data.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure2.jpeg"/></div>

Luego agregamos las partes responsables de la inferencia del modelo de Edge Impulse, hilos y modificamos la función de envío de telemetría para enviar valores del número de personas que entraron, personas que salieron y número total de personas en la habitación. También agregamos una GUI simple que consiste en tres botones y un campo de texto, que muestra actualizaciones de información - puedes ver el sketch resultante abriendo WioTerminal_EI_People_Counting_Azure_Central_LVGL.ino desde el repositorio Github del proyecto.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test2.gif"/></div>

La parte más difícil fue realmente asegurarse de que todo funcione normalmente en cada hilo separado y no influya en otros hilos. Se hicieron sacrificios para acomodar eso sin complicar demasiado el código, por ejemplo colocando la función de actualización de tarea LVGL justo después de las actualizaciones de interfaz y no dejándola ejecutarse periódicamente.

## Referencia

- [Proyecto público de Edge Impulse](https://studio.edgeimpulse.com/public/18808/latest)

- [Github del proyecto](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_3_People_Counting)
