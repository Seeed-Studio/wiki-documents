---
description: Edge Impulse Tuner
title: Edge Impulse Tuner
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edge-Impulse-Tuner
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# EON Tuner - Función Optimizada en Edge Impulse

## **Introducción**

Edge Impulse introdujo una función optimizada que puede optimizar los modelos de Aprendizaje Automático embebidos y el uso de memoria de los dispositivos. Al ajustar los parámetros, ayuda a las personas que no están familiarizadas con los algoritmos de Aprendizaje Automático a seleccionar rápidamente el mejor modelo de aprendizaje para su aplicación. Mientras tanto, permite que los dispositivos usen menos memoria y menos rendimiento, lo que significa que puede ayudar a las personas a desplegar el modelo TinyML en ciertos equipos dentro de las limitaciones.

El EON Tuner primero analiza tus datos de entrada, los bloques potenciales de procesamiento de señales y las arquitecturas de redes neuronales. Luego te da una visión general de las posibles arquitecturas de modelo que se ajustarán a los requisitos de latencia y memoria de tu dispositivo elegido. Puedes elegir cualquiera de ellas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## **La Posición del EON Tuner**

![](https://files.seeedstudio.com/wiki/EON-Tuner/weizhituner.png)

Como puedes ver, la posición del EON Tuner está en el lado izquierdo de la página del proyecto de [Edge Impulse](https://www.edgeimpulse.com/) y justo debajo de la clasificación. Cuando hayas terminado tus aplicaciones, puedes seleccionar fácilmente el Tuner para mejorar tus proyectos.

## **La Mejora del EON Tuner**

Este es el ejemplo que te muestra la diferencia entre usar EON Tuner y no usarlo.

![](https://files.seeedstudio.com/wiki/EON-Tuner/duibi.png)

## **Comenzando**

Aquí vamos a proporcionar el proyecto de clasificación de audio y mostrarte el uso del EON Tuner. Si estás interesado en [Usar LoRa para transmitir datos basado en Wio Terminal y Edge Impulse](https://wiki.seeedstudio.com/es/AIoTs_GPS_state_tester/), siempre puedes hacer clic y ver el proyecto de ejemplo.

### **Hardware**

**Hardware Requerido**

En esta demostración necesitarás los dispositivos listados a continuación:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal Chassis - Battery (Opcional)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**Conexión del Hardware**

Se conecta a una computadora a través del cable Type-C.

![](https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png)

### **Software**

**Software Requerido**

- [Arduino IDE](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/)

### Aprendizaje Automático con Wio Terminal

Aquí vamos a mostrarte cómo usar Wio Terminal para entrenar un modelo de Aprendizaje Automático y usarlo. El proyecto está basado en la plataforma Arduino, lo que significa que se requieren Arduino IDE y varias librerías de Arduino. Si esta es tu primera vez usando el Wio terminal, recomendamos una guía para rápidamente [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/).

#### Inicio del Entrenamiento en Edge Impulse

Primero, necesitas tener tu propia cuenta de Edge Impulse y luego crear un proyecto.

- **Paso 1**. Abre el [sitio web de Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), y luego registra una cuenta.

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **Paso 2**. Crea un nuevo proyecto.

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Conexión del Sitio Web con Wio Terminal

- **Paso 3**. Descarga el firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) para la preparación de la conexión.

Como sugieren las pautas de [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/):

 Haciendo doble clic hacia abajo en el Wio Terminal (ya conectado a tu PC) en la parte inferior izquierda, verás un controlador (como "Arduino (F:)" abajo) aparecer en la computadora. Luego puedes arrastrar el firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) al controlador. Y cuando veas que el controlador desaparece, significa que el firmware ha sido programado. Ahora puedes ir al sitio web para conectar Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **Paso 4**. Una vez que el firmware esté configurado, haz clic en "connect using WebUSB" para conectar el Wio Terminal al sitio web.

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

Cuando "Device", "Label" y "Sensor" como se muestra abajo aparezcan, significa que la conexión está hecha y la adquisición de datos puede ser activada.

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### Adquisición de Datos

Ahora puedes recopilar datos en Edge Impulse.

- **Paso 5**. Ingresa "Label", "Sample length (ms.)" y haz clic en "Start sampling"

  - "Label" significa las categorías que quieres clasificar.
  - "Sample length" significa el tiempo durante tu muestreo.

El proyecto de ejemplo que hacemos aquí es clasificación de audio, así que vamos a usar el micrófono incorporado.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji.png)

Se recomienda altamente que muestrees los datos más de 10 veces. Porque la grabación necesita usar SPI Flash que operará borrando, el tiempo que toma usualmente es más largo de lo que configuramos.(Toma alrededor de 7 segundos en este proyecto y aún el tiempo de configuración es '3 segundos') .

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji2.png)

#### Generación del Modelo de Aprendizaje Automático

Una vez que los datos han sido recopilados, puedes usarlos para entrenar tu modelo ML.

- **Paso 6**. Después de muestrear los datos, haz clic en "create impulse" para procesar los datos.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji3.png)

El bloque de procesamiento y el bloque de aprendizaje que seleccionamos aquí son Audio(MFE) y Neural Network (Keras). Puedes encontrarlos agregando un bloque de procesamiento y agregando un bloque de aprendizaje. Después de eso, haz clic en "Save Impulse" y continúa.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji4.png)

- **Paso 7**. Ve a la página "Spectral features", y luego en la parte inferior haz clic en "Save parameters", se moverá automáticamente al lado "Generate feature". Los datos pueden verse así:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi.png)

Aquí está el lado "Generate feature", puede ayudar a traducir tus datos a las características necesarias en Machine Learning.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi2.png)

Haz clic en "Generate feature" y el resultado debería aparecer a la derecha:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi3.png)

- **Paso 8**. Ve a la página "NN Classifier" para usar tus características entrenando un modelo de Machine Learning. En la parte inferior de la página, haz clic en "Start training".

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi4.png)

La salida del entrenamiento está a la derecha de la página. Cuando veas la salida, significa que el modelo ha sido generado.

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

Como puedes ver aquí, la salida no es lo que esperábamos:

![](https://files.seeedstudio.com/wiki/EON-Tuner/inputfail.png)

Es opcional que recolectemos los datos nuevamente, pero otro método que podemos usar aquí es **"EON Tuner"**.

#### Usando EON Tuner para Optimizar el Modelo ML

Ahora podemos usar EON Tuner para optimizar nuestro modelo de Machine Learning embebido.

- **Paso 9** Selecciona "EON Tuner" a la derecha de la página y haz clic en "Start EON Tuner".

![](https://files.seeedstudio.com/wiki/EON-Tuner/button.png)

Hay modelos de salida masivos, los modelos que aparecen primero pueden no ser adecuados:

![](https://files.seeedstudio.com/wiki/EON-Tuner/outputfail.png)

Pero espera unos segundos, los modelos están cada vez mejor entrenados y están listos para ser desplegados:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi5.png)

Haz clic en "Select" y el sitio web te preguntará si te gusta establecer este modelo como tu modelo principal y luego haz clic en "Yes":

![](https://files.seeedstudio.com/wiki/EON-Tuner/dataupdate.png)

#### Despliegue del Modelo de Machine Learning

Ahora puedes desplegar tu nuevo modelo de Machine Learning en tu Wio Terminal.

- **Paso 10**. Selecciona y haz clic en la columna "Deployment" a la izquierda.

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

Luego elige "Arduino Library", en la parte inferior selecciona "build" para crear la biblioteca necesaria en tu Arduino. Automáticamente descargará un archivo zip que incluye la biblioteca de terceros.

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

El nombre de la biblioteca deseada es sobre el nombre del proyecto, lo que significa que cualquier nombre que hayas escrito al proyecto en el **paso 2** se mostrará aquí. Puede ayudarte a encontrar el archivo correcto que necesitas.

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **Paso 10**. Puedes descargar el código [aquí](https://files.seeedstudio.com/wiki/EON-Tuner/EON_tuner_HelloWorld.ino) y abrirlo con Arduino IDE. Cambia la biblioteca de terceros por la tuya como se muestra arriba y luego ejecuta el código.

![](https://files.seeedstudio.com/wiki/EON-Tuner/librarymingzi.png)

Finalmente, haz clic en "Serial Monitor" en el Arduino IDE y di las palabras al Wio Terminal que configuraste en la "Data Acquisition". El monitor debería mostrarte los resultados y "cuánta confianza tiene el Wio Terminal" sobre el resultado, es decir, la precisión.

![](https://files.seeedstudio.com/wiki/EON-Tuner/jieguo.png)

Si te interesa qué diferencia hace el tuner, puedes omitir el **Paso 9** y luego seguir los mismos pasos para verificarlo.
