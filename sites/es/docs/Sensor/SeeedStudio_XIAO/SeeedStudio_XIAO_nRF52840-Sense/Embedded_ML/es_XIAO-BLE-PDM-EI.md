---
description: Reconocimiento de voz basado en Edge Impulse
title: Reconocimiento de voz basado en Edge Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-PDM-EI
last_update:
  date: 10/12/2023
  author: Bruno Santos (Feiticeir0)
---

:::caution
El contenido de este tutorial puede que ya no sea válido y ya no se proporciona mantenimiento de software ni soporte técnico.
:::

# Reconocimiento de voz basado en Edge Impulse usando XIAO nRF52840

En este wiki, mostraré cómo usar Edge Impulse con las capacidades de ML del Seeed Studio XIAO nRF52840 para Reconocimiento de Voz. Usaremos el Micrófono que ya está en el XIAO nRF52840 Sense.

## Conocimientos previos al proyecto

El XIAO nRF52840 no está oficialmente soportado por Edge Impulse y no está presente como un dispositivo para recopilar datos, pero voy a demostrar cómo podemos usarlo para ejecutar inferencia usando el micrófono del dispositivo.

## Primeros pasos

Para seguir este tutorial, necesitas el siguiente hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del Hardware

No necesitamos ninguna preparación de hardware. El XIAO nRF52840 ya tiene todo lo que necesitamos para este proyecto. Solo necesitamos el micrófono PDM.

#### Aquí está el pinout del hardware para XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## Preparación del Software

Para probar esto, solo necesitamos tres cosas:

1. Dataset de comandos de voz de Google (ver abajo)
2. [Cuenta de Edge Impulse](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### Dataset

- Voy a usar el dataset de comandos de voz de Google. No todo el dataset, solo algunas palabras de él.
- Por ahora, descarga el dataset y descomprímelo. El dataset completo es de 2.3GB.
- Este <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">dataset de comandos de voz de Google</a> es usado por Google en su ejemplo de micro speech para TensorFlow Lite para MicroControllers.
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank"> Puedes encontrar el código aquí.</a>

Podemos descargar el dataset desde el primer enlace de arriba y se extraerá como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>


## Comenzando

Ahora comencemos usando Edge Impulse para crear un modelo ML basado en el dataset.

### Paso 1 - Abrir Edge Impulse

- Edge Impulse es una plataforma de desarrollo de aprendizaje automático (ML) que permite a los desarrolladores crear e implementar modelos ML personalizados en dispositivos edge, como microcontroladores y smartphones.
- Proporciona una variedad de herramientas y recursos para ayudar a construir y optimizar modelos ML para tareas específicas, como detección de palabras clave, detección de anomalías y clasificación.

Vamos a crear un nuevo proyecto. Dale un nombre.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>


Después de crear un nuevo proyecto, ve a la página de adquisición de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### Paso 2 - Añadir datos

Porque vamos a usar el dataset de comandos de voz de Google, elige "Add existing data".
A continuación, elige "Upload data"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

A continuación, llegamos a seleccionar los datos - Vamos a elegir una de las carpetas del dataset de voz.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

El dataset tiene muchas palabras para entrenar. Vamos a elegir 3 carpetas (nuestras etiquetas) para entrenar y el ruido de fondo. Obtenemos 4 etiquetas.
Presiona el botón "Browse".
La primera es "go". Elige la carpeta - puedes ver todos los archivos .wav - y presiona "Upload".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

A continuación, mantengamos las opciones predeterminadas para la categoría. Deja que Edge Impulse divida los datos.
Para la etiqueta, escribe la etiqueta tú mismo. Después de todo esto, presiona "Upload data".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

En el lado derecho, verás los archivos siendo subidos. Puede tomar un tiempo, porque son muchos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

Después de un tiempo, se completa y muestra un pequeño resumen de los archivos subidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="Files upload resume" width={600} height="auto" /></p>

Después de esto, esta es la pantalla

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Para subir más datos, presiona el pequeño botón de subida en el lado derecho, arriba de la lista de archivos.
Repite esto 3 veces más - 2 etiquetas más y el ruido de fondo.
Voy a elegir happy, bird y la carpeta "background noise" con la etiqueta "noise".
Al final, estas son todas las etiquetas que tenemos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

A continuación, vamos a crear la red para aprender nuestras palabras. Haz clic en Impulse design para crear el impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### Paso 3 - Seleccionar método de entrenamiento

Porque los clips son de 1 segundo cada uno y 16Khz, mantengamos el tamaño de ventana igual y la frecuencia. Ahora, vamos a añadir un bloque de procesamiento.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Edge Impulse nos ayuda mucho aquí también. Haz clic en "Add a processing block" y elige Audio (MFCC).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

A continuación, haz clic en "Add learning block" y elige Classification.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Para ahora, nuestra última columna - Output features - tiene nuestras 4 etiquetas (bird, go, happy, noise). 
Presiona "Save Impulse" para guardar nuestro trabajo hasta ahora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### Paso 4 - Generar las características

Ahora, echemos un vistazo a los parámetros MFCC. Si quieres, puedes cambiar los valores. 
Por ahora, mantengamos los valores predeterminados. Haz clic en "Save Parameters". 
Después de guardar los parámetros, obtenemos una nueva ventana para "Generate features".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Después de hacer clic, Edge Impulse comenzará a generar las características.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="Generate features" width={600} height="auto" /></p>

Después de un tiempo, obtenemos nuestras características generadas y podemos visualizarlas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="Feature explorer" width={600} height="auto" /></p>

Ahora llegamos a entrenar nuestra red con los parámetros elegidos. Haz clic en "Classifier".

### Paso 5 - Clasificador

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="Classifier" width={600} height="auto" /></p>

Aquí podemos ajustar la configuración de nuestra red, como ciclos de entrenamiento, si queremos aumento de datos y demás. 
Edge Impulse proporciona una arquitectura de red neuronal simple pero efectiva para detección de palabras clave. La arquitectura consiste en las siguientes capas:
  - <b>Capa de entrada:</b> La capa de entrada toma las características MFCC como entrada.
  - <b>Capas ocultas:</b> Las capas ocultas aprenden a extraer características de nivel superior de las características MFCC. Edge Impulse soporta una variedad de tipos de capas ocultas, como capas convolucionales y capas recurrentes.
  - <b>Capa de salida:</b> La capa de salida predice la probabilidad de que la entrada de audio contenga una palabra clave.

Podemos cambiar los parámetros predeterminados, pero los predeterminados son suficientes. Haz clic en "Start Training".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="Network architecture" width={600} height="auto" /></p>

Después de iniciar el entrenamiento, en el lado derecho de la pantalla podemos observar el progreso del entrenamiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="Training progress" width={600} height="auto" /></p>

Podemos cambiar el Target device a nRF52840 - como nuestro XIAO nRF52840 Sense - para que podamos ver cálculos de rendimiento y optimizaciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="Target device" width={600} height="auto" /></p>

Después de que el entrenamiento esté completo, obtenemos la matriz de confusión y el explorador de datos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="Confusion Matrix" width={600} height="auto" /></p>

Ahora con la red lista, probemos algunas muestras y hagamos algo de clasificación en vivo. 
Si vas a clasificación en vivo, podemos elegir una muestra y obtener el resultado de clasificación. Aquí, para un ejemplo de pájaro, obtenemos bird en el resultado. Eso es genial. El modelo está funcionando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="Live classification" width={600} height="auto" /></p>

Ahora, vayamos a las pruebas del modelo. 
Probemos el modelo usando las muestras divididas para pruebas. Haz clic en "Classify all".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="Test data" width={600} height="auto" /></p>

Obtenemos casi 90% de precisión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="Accuracy" width={600} height="auto" /></p>


### Paso 6 - Despliegue y obtener la biblioteca de Arduino

Ahora, vayamos al despliegue para obtener los archivos para nuestro microcontrolador.

#### Opciones de Despliegue

Elijamos Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="Accuracy" width={600} height="auto" /></p>

A continuación, mantengamos seleccionado Quantized(int8) y hagamos clic en "Build" para descargar los archivos para usar con el IDE de Arduino
Podemos jugar un poco con las optimizaciones. Si te das cuenta de que la precisión es baja, intenta desactivar el compilador EON e intenta de nuevo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="Accuracy" width={600} height="auto" /></p>

Después de un tiempo, los archivos se descargarán automáticamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino Files download" width={600} height="auto" /></p>

### Paso 7 - Agregar la biblioteca al IDE de Arduino

En Arduino IDE, agreguemos los archivos recién descargados.
Ve a Sketch > Include Library > Add .ZIP Library

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE Add library" width={600} height="auto" /></p>

Elige el archivo descargado. Después de un momento, aparecerá un mensaje en la ventana de salida diciendo que la librería está instalada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="Library installed" width={600} height="auto" /></p>

### Paso 8 - Control por voz de las luces RGB en el XIAO nRF52840 Sense 

Abramos un ejemplo
Ve a Examples > &lt;your_files_names&gt; > nano_ble33_sense > nano_ble33_sense_microphone

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="Library installed" width={600} height="auto" /></p>

¿Por qué el Arduino BLE 33 Sense? Usan la misma librería - PDM (modulación de densidad de pulsos) - para controlar el micrófono. Arduino Nano BLE 33 Sense tiene un MP34DT05 y el XIAO nRF52840 Sense tiene el MSM261D3526H1CPM.
Con el sketch abierto, compilémoslo y veamos si no tenemos errores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="Sketch open" width={600} height="auto" /></p>

Después de un momento, el sketch se compila y no se reportan errores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="Sketch open" width={600} height="auto" /></p>

Ahora, conecta el XIAO nRF52840 Sense (si no lo has hecho ya) y sube el código a la placa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="Sketch open" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="Compile result" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="Upload" width={600} height="auto" /></p>

Ahora, abre el puerto serie (Ctrl+Shift+M) y verifica los resultados de inferencia (la placa ya comenzó a grabar, hacer inferencias y predicciones)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="Serial Monitor" width={600} height="auto" /></p>

Trata de decir una de las palabras elegidas. He dicho go

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="Serial Monitor" width={600} height="auto" /></p>

Si detecta la palabra correctamente, la palabra más probable tendrá un resultado más cercano a 1.0 y las otras un valor más cercano a 0.0
Ahora, divirtámonos un poco y cambiemos el código un poco.
El XIAO nRF52840 Sense tiene un LED incorporado que tiene 3 colores:

- Rojo - LED_BUILTIN o LED_RED
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="Red LED" width={600} height="auto" /></p>
- Verde - LED_GREEN
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="Green LED" width={600} height="auto" /></p>
- Azul - LED_BLUE
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="Blue LED" width={600} height="auto" /></p>

Dado que tenemos 3 palabras, asignemos un color a cada una y encendamos el color respectivo para la palabra.
- Rojo será para bird
- Verde para Go
- Azul para happy

Porque será más fácil, he verificado las definiciones de PIN de la placa y los siguientes PINs están asignados al color del LED:
- ROJO - Pin 11
- VERDE - Pin 13
- AZUL - Pin 12

Primero, necesitamos definir un umbral. Sabemos que las predicciones van de 0.0 a 1.0. Mientras más cerca de 1.0, más seguros estamos de la clasificación de la palabra. Este valor puede ajustarse más adelante. Voy a establecerlo en 0.7.

Primero, define algunas variables. He definido estas justo después de las librerías incluidas:

```cpp
/* threshold for predictions */
float threshold = 0.7;

/** 
  LABELS INDEX:
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// LED pin (defines color) to light up
/**
 PIN 11 - RED
 PIN 12 - BLUE
 PIN 13 - GREEN
*/
int LED = 0;
int oldLED;
```

<i>int oldLED</i> definirá el LED anterior que se encendió para que podamos apagarlo cuando no hay predicción o la predicción cambia.

<i>int LED</i> es el LED actual que encenderemos.

A continuación, en la función loop(), dentro de la instrucción del bucle for, donde iteramos a través de CLASSIFIER_LABEL_COUNT (alrededor de la línea 129 - ya con las líneas anteriores):

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

Usamos una instrucción if para verificar el valor de clasificación. Si está por encima del umbral definido, verificamos qué palabra ha sido registrada usando una instrucción switch.

El bucle for completo, con nuestras adiciones, es:

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        //lets light up some LEDS

        if (result.classification[ix].value > threshold) {
          //now let's see what label were in
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          //in Sense, LOW will light up the LED
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); //if we enter a word right next to previous - we turn off the previous LED
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else //turn off LED
            digitalWrite (oldLED, HIGH);
        }
    }
```

Después de los cambios, simplemente sube el código a tu microcontrolador e intenta decir las palabras entrenadas y observa cómo el LED se enciende según la palabra.

Y esto es todo. Aunque no está directamente soportado, ahora podemos usar el XIAO nRF52840 Sense para ejecutar algunos modelos de ML usando Edge Impulse


## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Bruno](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

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
