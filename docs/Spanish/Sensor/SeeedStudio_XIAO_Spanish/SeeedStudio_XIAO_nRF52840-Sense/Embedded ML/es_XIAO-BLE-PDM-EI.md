---
description: Reconocimiento de Voz basado en Edge Impulse con XIAO
title: Reconocimiento de Voz basado en Edge Impulse con XIAO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-PDM-EI
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Reconocimiento de Voz basado en Edge Impulse con XIAO nRF52840

En esta wiki, mostraré cómo utilizar Edge Impulse con las capacidades de Machine Learning del Seeed Studio XIAO nRF52840 para el reconocimiento de voz. Usaremos el micrófono integrado en la XIAO nRF52840 Sense.

## Conocimientos previos al proyecto

La XIAO nRF52840 no es oficialmente compatible con Edge Impulse y no aparece como un dispositivo para la recopilación de datos. Sin embargo, en este tutorial demostraré cómo se puede utilizar para ejecutar inferencias utilizando el micrófono del dispositivo.

## Primeros pasos

Para seguir este tutorial, necesitarás el siguiente hardware:

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del Hardware

No se requiere ninguna preparación de hardware. La XIAO nRF52840 ya cuenta con todo lo necesario para este proyecto. Solo necesitamos el micrófono PDM.

#### Aquí está el diagrama de pines de la XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

### Preparación del Software

Para probar esto, solo necesitamos tres cosas:

1. El conjunto de datos de comandos de voz de Google (ver más abajo).  
2. [Una cuenta en Edge Impulse](https://edgeimpulse.com/).  
3. [Arduino IDE](https://www.arduino.cc/).  

### Conjunto de Datos  

- Se utilizará el conjunto de datos de comandos de voz de Google, pero no en su totalidad, solo algunas palabras.  
- Primero, descarga el conjunto de datos y descomprímelo. El conjunto completo pesa 2.3GB.  
- Este <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">conjunto de datos de comandos de voz de Google</a> es utilizado por Google en su ejemplo de micro speech para TensorFlow Lite for MicroControllers.  
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank">Aquí puedes encontrar el código.</a>  

Podemos descargar el conjunto de datos desde el primer enlace y se extraerá en la siguiente estructura:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>


## Introducción

Ahora comencemos a usar Edge Impulse para crear un modelo de Machine Learning basado en el conjunto de datos.

### Paso 1 - Abrir Edge Impulse

- Edge Impulse es una plataforma de desarrollo de Machine Learning (ML) que permite a los desarrolladores crear y desplegar modelos de ML personalizados en dispositivos de borde, como microcontroladores y teléfonos inteligentes.  
- Proporciona una variedad de herramientas y recursos para ayudar a construir y optimizar modelos de ML para tareas específicas, como detección de palabras clave, detección de anomalías y clasificación.  

Crea un nuevo proyecto y asígnale un nombre.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>


Después de crear el nuevo proyecto, dirígete a la página de adquisición de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### Paso 2 - Agregar datos  

Como vamos a utilizar el conjunto de datos de comandos de voz de Google, selecciona "Agregar datos existentes".  
Luego, elige "Subir datos".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

A continuación, seleccionamos los datos. Elige una de las carpetas del conjunto de datos de comandos de voz.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

El conjunto de datos tiene muchas palabras para entrenar. Seleccionemos 3 carpetas (nuestros labels) para entrenar y el ruido de fondo. En total, tendremos 4 etiquetas.  
Presiona el botón "Browse".  
La primera es "go". Selecciona la carpeta (puedes ver todos los archivos .wav) y presiona "Upload".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

A continuación, mantén las opciones predeterminadas para la categoría y deja que Edge Impulse divida los datos.  
Para la etiqueta, escribe el nombre de la etiqueta manualmente.  
Después de esto, presiona "Upload data".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

En el lado derecho, verás los archivos subiendo. Puede tomar un tiempo, ya que son muchos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

Después de un tiempo, se completa y muestra un pequeño resumen de los archivos subidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="Files upload resume" width={600} height="auto" /></p>

Después de esto, esta es la pantalla

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Para subir más datos, presiona el pequeño botón de carga en el lado derecho, encima de la lista de archivos.  
Repite este proceso dos veces más: una para cada etiqueta adicional y otra para el fondo de ruido.  
Voy a elegir "happy", "bird" y la carpeta "background noise" con la etiqueta "noise".  
Al final, estos serán todos los labels que tendremos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

A continuación, vamos a crear la red para aprender nuestras palabras. Haz clic en Impulse design para crear el impulso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### Paso 3 - Seleccionar el método de entrenamiento

Dado que los clips tienen 1 segundo de duración y 16 kHz, mantengamos el tamaño de la ventana y la frecuencia igual. Ahora, agreguemos un bloque de procesamiento.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Edge Impulse nos facilita mucho este paso. Haz clic en "Add a processing block" y elige Audio (MFCC).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

A continuación, haz clic en "Add learning block" y elege Classification.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Hasta ahora, nuestra última columna, Output features, tiene nuestras 4 etiquetas (bird, go, happy, noise).  
Haz clic en "Save Impulse" para guardar nuestro progreso hasta ahora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Ahora, echemos un vistazo a los parámetros de MFCC. Si lo deseas, puedes cambiar los valores, pero por ahora, mantén los valores predeterminados.  
Haz clic en "Save Parameters".  
Después de guardar los parámetros, aparecerá una nueva ventana para "Generate features".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Después de hacer clic, Edge Impulse comenzará a generar las características. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="Generate features" width={600} height="auto" /></p>

Después de un rato, veremos que las características se han generado y podremos visualizarlas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="Feature explorer" width={600} height="auto" /></p>

Ahora, podemos entrenar nuestra red con los parámetros elegidos. Haz clic en "Classifier".

### Paso 5 - Clasificador

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="Classifier" width={600} height="auto" /></p>

Aquí podemos ajustar la configuración de nuestra red, como el número de ciclos de entrenamiento, si queremos usar aumento de datos, etc. Edge Impulse proporciona una arquitectura de red neuronal simple pero efectiva para el reconocimiento de palabras clave. La arquitectura consta de las siguientes capas:
  - <b>Capa de entrada:</b> La capa de entrada toma las características MFCC como entrada.
  - <b>Capas ocultas:</b> Las capas ocultas aprenden a extraer características de mayor nivel a partir de las características MFCC. Edge Impulse admite varios tipos de capas ocultas, como capas convolucionales y recurrentes.
  - <b>Capa de salida:</b> La capa de salida predice la probabilidad de que la entrada de audio contenga una palabra clave.

Podemos cambiar los parámetros predeterminados, pero los valores predeterminados son suficientes. Haz clic en "Start Training".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="Network architecture" width={600} height="auto" /></p>

Después de comenzar el entrenamiento, en el lado derecho de la pantalla podemos ver el progreso del entrenamiento. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="Training progress" width={600} height="auto" /></p>

Podemos cambiar el Target device a nRF52840, como el XIAO nRF52840 Sense, para que podamos ver los cálculos de rendimiento y las optimizaciones realizadas para este dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="Target device" width={600} height="auto" /></p>

Cuando el entrenamiento se complete, veremos la Matriz de Confusión y el Data Explorer.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="Confusion Matrix" width={600} height="auto" /></p>

Ahora que la red está lista, intentemos algunas muestras y realicemos una clasificación en vivo.  
Si vamos a clasificación en vivo, podemos elegir una muestra y ver el resultado de la clasificación. Aquí, para un ejemplo de ave, obtenemos "ave" en el resultado. Eso es genial. El modelo está funcionando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="Live classification" width={600} height="auto" /></p>

Ahora, pasemos a la prueba del modelo.  
Probemos el modelo utilizando las muestras divididas para la prueba. Haz clic en "Clasificar todo".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="Test data" width={600} height="auto" /></p>

Obtenemos casi el 90% de precisión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="Accuracy" width={600} height="auto" /></p>


### Paso 6 - Despliegue y obtención de la biblioteca de Arduino

Ahora, pasemos al despliegue para obtener los archivos para nuestro microcontrolador.

#### Opciones de Despliegue

Elijamos Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="Accuracy" width={600} height="auto" /></p>

A continuación, mantengamos seleccionada la opción Quantized (int8) y hagamos clic en "Construir" para descargar los archivos que usaremos con el IDE de Arduino.  
Podemos experimentar un poco con las optimizaciones. Si te das cuenta de que la precisión es baja, intenta desactivar el compilador EON y prueba de nuevo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="Accuracy" width={600} height="auto" /></p>

Después de un tiempo, los archivos se descargarán automáticamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino Files download" width={600} height="auto" /></p>

### Paso 7 - Agregar la biblioteca al IDE de Arduino

En el IDE de Arduino, vamos a agregar los archivos recién descargados.
Ve a Esquema > Incluir biblioteca > Agregar biblioteca .ZIP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE Add library" width={600} height="auto" /></p>

Elige el archivo descargado. Después de un momento, aparecerá un mensaje en la ventana de salida indicando que la biblioteca está instalada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="Library installed" width={600} height="auto" /></p>

### Paso 8 - Controlar por voz las luces RGB en el XIAO nRF52840 Sense

Abramos un ejemplo.  
Ve a **Ejemplos > <tus_nombres_de_archivos> > nano_ble33_sense > nano_ble33_sense_microphone**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="Library installed" width={600} height="auto" /></p>

¿Por qué el Arduino BLE 33 Sense? Usan la misma biblioteca — PDM (modulación por densidad de pulsos) — para controlar el micrófono. El Arduino Nano BLE 33 Sense tiene un MP34DT05 y el XIAO nRF52840 Sense tiene un MSM261D3526H1CPM.  
Con el sketch abierto, vamos a compilarlo y ver si no tenemos errores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="Sketch open" width={600} height="auto" /></p>

Después de un momento, el sketch se compila y no se reportan errores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="Sketch open" width={600} height="auto" /></p>

Ahora, conecta el XIAO nRF52840 Sense (si aún no lo has hecho) y sube el código a la placa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="Sketch open" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="Compile result" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="Upload" width={600} height="auto" /></p>

Ahora, abre el puerto serie (Ctrl+Shift+M) y verifica los resultados de la inferencia (la placa ya ha comenzado a grabar, hacer inferencias y realizar predicciones).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="Serial Monitor" width={600} height="auto" /></p>

Intenta decir una de las palabras elegidas. Yo dije "go"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="Serial Monitor" width={600} height="auto" /></p>

Si detecta la palabra correctamente, la palabra más probable tendrá un resultado cercano a 1.0 y las demás un valor más cercano a 0.0.  
Ahora, divirtámonos un poco y cambiemos un poco el código.  
El XIAO nRF52840 Sense tiene un LED integrado que tiene 3 colores:

- Rojo - LED_BUILTIN o LED_RED
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="Red LED" width={600} height="auto" /></p>
- Verde - LED_GREEN
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="Green LED" width={600} height="auto" /></p>
- Azul - LED_BLUE
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="Blue LED" width={600} height="auto" /></p>

Dado que tenemos 3 palabras, asignemos un color a cada una y encendamos el color respectivo para la palabra.  
- Rojo será para "bird"  
- Verde para "Go"  
- Azul para "happy"  

Porque será más fácil, he revisado las definiciones de los pines de la placa y los siguientes pines están asignados al color del LED:  
- ROJO - Pin 11  
- VERDE - Pin 13  
- AZUL - Pin 12  

Primero, necesitamos definir un umbral. Sabemos que las predicciones van de 0.0 a 1.0. Cuanto más cerca de 1.0, más seguros estamos de la clasificación de la palabra. Este valor se puede ajustar más tarde. Lo voy a fijar en 0.7.  

Primero, definamos algunas variables. Las he definido justo después de las bibliotecas incluidas:+

```cpp
/* umbral para predicciones */
float threshold = 0.7;

/** 
  LABELS INDEX:
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// LED pin (Define el color) que se encenderá
/**
 PIN 11 - RED
 PIN 12 - BLUE
 PIN 13 - GREEN
*/
int LED = 0;
int oldLED;
```

<i>int oldLED</i> definirá el LED anterior que se encendió, para que podamos apagarlo cuando no haya predicción o cuando la predicción cambie.

<i>int LED</i> es el LED actual que encenderemos.

A continuación, en la función loop(), dentro de la instrucción del bucle for, donde recorremos el CLASSIFIER_LABEL_COUNT (alrededor de la línea 129 — ya con las líneas anteriores):

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

Usamos una instrucción if para verificar el valor de clasificación. Si está por encima del umbral definido, verificamos qué palabra ha sido grabada utilizando una instrucción switch.

El bucle completo for, con nuestras adiciones, es el siguiente:

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        //vamos a encender algunos LEDS

        if (result.classification[ix].value > threshold) {
          //ahora veamos en qué etiqueta estamos
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          //en Sense, LOW encenderá el LED
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); //si entramos a una palabra justo después de la anterior, apagamos el LED anterior
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else //apagar el LED
            digitalWrite (oldLED, HIGH);
        }
    }
```
Después de los cambios, simplemente sube el código a tu microcontrolador y prueba decir las palabras entrenadas para ver cómo el LED se enciende de acuerdo con la palabra.

Y eso es todo. Aunque no está directamente soportado, ahora podemos usar el XIAO nRF52840 Sense para ejecutar algunos modelos de ML usando Edge Impulse.

## ✨ Proyecto del Contribuidor

- Este proyecto es apoyado por el [Proyecto del Contribuidor de Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Gracias por tus [esfuerzos, Bruno](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) tu trabajo será [exhibido aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).

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
