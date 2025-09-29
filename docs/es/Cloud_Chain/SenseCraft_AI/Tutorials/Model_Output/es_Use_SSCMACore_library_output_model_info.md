---
sidebar_position: 11
description: Este artículo describe cómo usar las librerías SSCMACore en XIAO.
title: Usar la librería SSCMACore para obtener información del modelo
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.webp
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library
aliases:
  - /es/sensecraft_ai_sscmacore_library
last_update:
  date: 12/12/2024
  author: Citric
---

# Configurando la Salida del Modelo en SenseCraft AI para XIAO ESP32S3 Sense usando la Librería SSCMACore

Esta wiki proporciona una guía paso a paso sobre cómo configurar la salida del modelo en SenseCraft AI para la placa XIAO ESP32S3 Sense usando la librería SSCMACore (Seeed SenseCraft Model Assistant Core). Siguiendo estas instrucciones, podrás configurar tu XIAO ESP32S3 Sense para trabajar con un modelo pre-entrenado y utilizar la librería SSCMACore para procesar la salida del modelo.

## Prerrequisitos

Antes de proceder, asegúrate de tener lo siguiente:

- XIAO ESP32S3 Sense
- Cable de datos USB-C para conectar el XIAO ESP32S3 Sense a tu computadora
- Arduino IDE con la librería [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) instalada

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1. Asegurar que un Modelo esté Cargado en el XIAO ESP32S3 Sense

Antes de proceder, asegúrate de que tu placa XIAO ESP32S3 Sense tenga un modelo entrenado cargado. Si aún no has cargado un modelo, consulta la documentación de SenseCraft AI sobre cómo entrenar e implementar modelos en tu dispositivo.

- [Usando un modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/sensecraft_ai_pretrained_models_for_xiao/)

Si quieres usar tu propio modelo entrenado, puedes consultar las siguientes dos Wikis.

- [Tipo de entrenamiento - Clasificación](https://wiki.seeedstudio.com/es/sensecraft_ai_training_classification/)
- [Tipo de entrenamiento - Detección de Objetos](https://wiki.seeedstudio.com/es/sensecraft_ai_training_object_detection/)

## Paso 2. Configurar la Librería SSCMA

Descarga la librería [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) desde el repositorio de GitHub.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Agrega la librería descargada a tu entorno de Arduino siguiendo estos pasos:

- Abre el Arduino IDE.
- Ve a **Sketch -> Include Library -> Add .ZIP Library**.
- Navega a la librería **Seeed_Arduino_SSCMACore** descargada y selecciónala.
- Haz clic en **Open** para agregar la librería a tu entorno de Arduino.

## Paso 3. Elegir y Configurar el Código de Ejemplo

La librería SSCMA proporciona dos códigos de ejemplo que demuestran cómo trabajar con la salida del modelo en la placa XIAO ESP32S3 Sense. Elige uno de los siguientes ejemplos según tus requerimientos:

### Ejemplo 1: Inferencia

1. Abre el código de ejemplo [`inference.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference/inference.ino).

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

    for (const auto& box : instance.getBoxes()) {
        Serial.printf("Box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", box.x, box.y, box.w, box.h, box.score, box.target);
    }

    for (const auto& cls : instance.getClasses()) {
        Serial.printf("Class: target=%d, score=%f\n", cls.target, cls.score);
    }

    for (const auto& point : instance.getPoints()) {
        Serial.printf("Point: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
    }

    for (const auto& kp : instance.getKeypoints()) {
        Serial.printf("Keypoints: box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", kp.box.x, kp.box.y, kp.box.w, kp.box.h, kp.box.score, kp.box.target);
        for (const auto& point : kp.points) {
            Serial.printf("Keypoint: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
        }
    }

    auto perf = instance.getPerf();
    Serial.printf("Perf: preprocess=%dms, inference=%dms, postprocess=%dms\n", perf.preprocess, perf.inference, perf.postprocess);

}
```

Este código de ejemplo demuestra cómo realizar inferencia usando la biblioteca SSCMA y recuperar la salida del modelo, incluyendo cajas delimitadoras, clases, puntos y puntos clave. El código inicializa la captura de video, SSCMA Micro Core, y realiza inferencia en cada frame capturado por la cámara. La salida del modelo, como cajas delimitadoras, clases, puntos y puntos clave, se imprime en el monitor serie.

:::note
La función `loop()` es donde tiene lugar el proceso de inferencia. Comienza capturando un frame usando `capture.getManagedFrame()` e invocando la inferencia en el frame capturado usando `instance.invoke(frame)`.

Después de la inferencia, el código recupera e imprime varias salidas del modelo:

- **Cajas delimitadoras**: La función `instance.getBoxes()` devuelve un vector de cajas delimitadoras. Cada caja delimitadora contiene información como coordenadas (x, y, w, h), puntuación y clase objetivo.
- **Clases**: La función `instance.getClasses()` devuelve un vector de clases detectadas. Cada clase contiene información sobre la clase objetivo y su puntuación correspondiente.
- **Puntos**: La función `instance.getPoints()` devuelve un vector de puntos detectados. Cada punto contiene información como coordenadas (x, y, z), puntuación y clase objetivo.
- **Puntos clave**: La función `instance.getKeypoints()` devuelve un vector de puntos clave detectados. Cada punto clave contiene una caja delimitadora y un vector de puntos asociados. El código imprime la información de la caja delimitadora e itera sobre los puntos, imprimiendo sus coordenadas, puntuación y clase objetivo.

Finalmente, el código recupera las métricas de rendimiento usando `instance.getPerf()` e imprime los tiempos de preprocesamiento, inferencia y postprocesamiento en milisegundos.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/74.png" style={{width:1000, height:'auto'}}/></div>

### Ejemplo 2: Inferencia con Callbacks

1. Abra el código de ejemplo [`inference_cb.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference_cb/inference_cb.ino).

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    instance.registerPerfCallback(SSCMAMicroCore::DefaultPerfCallback);
    instance.registerBoxesCallback(SSCMAMicroCore::DefaultBoxesCallback);
    instance.registerClassesCallback(SSCMAMicroCore::DefaultClassesCallback);
    instance.registerPointsCallback(SSCMAMicroCore::DefaultPointsCallback);
    instance.registerKeypointsCallback(SSCMAMicroCore::DefaultKeypointsCallback);

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

}
```

Este código de ejemplo demuestra cómo realizar inferencia usando la biblioteca SSCMA y registrar funciones callback para manejar la salida del modelo. El código inicializa la captura de video, SSCMA Micro Core, y registra funciones callback para métricas de rendimiento, cajas delimitadoras, clases, puntos y puntos clave. Durante el proceso de inferencia, las funciones callback registradas son invocadas, permitiéndole personalizar el manejo de la salida del modelo.

:::note
El código define varias funciones callback:

- `perfCb`: Esta función es llamada cuando las métricas de rendimiento están disponibles. Recibe una instancia de `SSCMAMicroCore::PerfMetrics` e imprime los tiempos de preprocesamiento, inferencia y postprocesamiento.
- `boxCb`: Esta función es llamada para cada caja delimitadora detectada. Recibe una instancia de `SSCMAMicroCore::Box` e imprime las coordenadas de la caja, puntuación y clase objetivo.
- `classCb`: Esta función es llamada para cada clase detectada. Recibe una instancia de `SSCMAMicroCore::Class` e imprime la clase objetivo y puntuación.
- `pointCb`: Esta función es llamada para cada punto detectado. Recibe una instancia de `SSCMAMicroCore::Point3D` e imprime las coordenadas del punto, puntuación y clase objetivo.
- `keypointsCb`: Esta función es llamada para cada punto clave detectado. Recibe una instancia de `SSCMAMicroCore::Keypoints`, que contiene una caja delimitadora y un vector de puntos asociados. La función imprime la información de la caja delimitadora e itera sobre los puntos, imprimiendo sus coordenadas, puntuación y clase objetivo.

En la función `setup()`, la comunicación serie se inicializa con una velocidad de baudios de 115200. La captura de video se inicializa entonces usando la función `capture.begin()` con la configuración de cámara predeterminada para XIAO ESP32S3 Sense. El SSCMA Micro Core se inicializa usando la función `instance.begin()` con la configuración predeterminada.

Después de la inicialización, el código registra las funciones callback usando los métodos apropiados proporcionados por la instancia SSCMAMicroCore:

- `instance.setPerfCallback(perfCb)`: Registra la función perfCb como el callback para métricas de rendimiento.
- `instance.setBoxCallback(boxCb)`: Registra la función boxCb como el callback para cajas delimitadoras.
- `instance.setClassCallback(classCb)`: Registra la función classCb como el callback para clases detectadas.
- `instance.setPointCallback(pointCb)`: Registra la función pointCb como el callback para puntos detectados.
- `instance.setKeypointsCallback(keypointsCb)`: Registra la función keypointsCb como el callback para puntos clave detectados.

La función `loop()` captura un frame usando `capture.getManagedFrame()` e invoca la inferencia en el frame capturado usando `instance.invoke(frame)`. Durante el proceso de inferencia, las funciones callback registradas serán invocadas cuando los datos de salida correspondientes estén disponibles.

Puede modificar las funciones callback para realizar acciones específicas o procesar adicionalmente los datos recibidos basándose en los requisitos de su aplicación.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4. Subir y Ejecutar el Código

Conecta tu placa XIAO ESP32S3 Sense a tu computadora usando el cable de datos USB-C. Abre el código de ejemplo seleccionado (`inference.ino` o `inference_cb.ino`) en el IDE de Arduino.

Selecciona la placa y puerto apropiados en el IDE de Arduino:

- Ve a **Tools -> Board** y selecciona "XIAO ESP32S3 Sense".
- Ve a **Tools -> Port** y selecciona el puerto al cual está conectado tu XIAO ESP32S3 Sense.
- Ve a **Tools -> PSRAM -> OPI PSRAM**. ¡Asegúrate de activar PSRAM!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/75.png" style={{width:600, height:'auto'}}/></div>

Haz clic en el botón "Upload" en el IDE de Arduino para compilar y subir el código a tu placa XIAO ESP32S3 Sense. Una vez que la subida esté completa, abre el Monitor Serie en el IDE de Arduino para ver la salida del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## Conclusión

Siguiendo esta guía paso a paso, ahora deberías poder configurar la salida del modelo en SenseCraft AI para tu placa XIAO ESP32S3 Sense usando la biblioteca SSCMA. Dependiendo del código de ejemplo que hayas elegido, puedes obtener la salida del modelo directamente o usar funciones de callback para personalizar el manejo de la salida.

Siéntete libre de explorar y modificar los códigos de ejemplo para adaptarlos a tus requisitos específicos. La biblioteca SSCMA proporciona un conjunto poderoso de herramientas y funciones para trabajar con modelos de visión por computadora y aprendizaje automático en la placa XIAO ESP32S3 Sense.

Si encuentras algún problema o tienes más preguntas, por favor consulta la documentación de SenseCraft AI o busca asistencia en los foros de la comunidad de Seeed Studio.

¡Feliz programación y exploración del mundo de la visión por computadora y el aprendizaje automático con tu placa XIAO ESP32S3 Sense!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
