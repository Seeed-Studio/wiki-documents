---
description: El ReSpeaker XVF3800 USB 4-Mic Array es una matriz de micrófonos circular profesional con AEC, formación de haz, supresión de ruido y captura de voz de 360°. Combinado con el XIAO ESP32S3, permite un control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre una integración perfecta y flexibilidad de doble modo.
title: reSpeaker Controla la palabra de activación y el NLU con Pico-voice
keywords:
  - reSpeaker
  - python
  - picovoice
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_picovoice
sku: 114993700,100005504,100099135,100070894
last_update:
  date: 3/24/2026
  author: Kasun Thushara
createdAt: '2026-03-24'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_picovoice/
---

## Introducción 

[Picovoice](https://picovoice.ai/) es una empresa especializada en IA de voz en el dispositivo, que proporciona un stack completo de tecnologías como detección de palabra de activación, conversión de voz a texto y reconocimiento de intención que se ejecutan localmente en dispositivos embebidos y de borde sin depender de la nube. Sus soluciones están diseñadas para baja latencia, privacidad y despliegue multiplataforma, lo que las hace adecuadas para sistemas IoT y robóticos. 

[Porcupine](https://picovoice.ai/docs/porcupine/) es el motor de detección de palabra de activación de Picovoice, ligero y de alta precisión, construido usando redes neuronales profundas y optimizado para sistemas embebidos. Permite aplicaciones siempre en escucha manteniendo un bajo coste computacional y puede ejecutarse en plataformas como microcontroladores, Raspberry Pi, móviles y ordenadores de escritorio. 

Picovoice [Rhino](https://picovoice.ai/docs/rhino/) es un motor de voz a intención que convierte directamente los comandos hablados en intenciones estructuradas sin requerir un paso separado de voz a texto. Utiliza un enfoque de aprendizaje profundo de un solo paso, combinando reconocimiento de voz y comprensión del lenguaje natural para mejorar la precisión y reducir la latencia.

## ¿Qué son NLP, NLU y STT?

El Procesamiento del Lenguaje Natural (NLP) es el campo amplio que permite a las máquinas procesar el lenguaje humano, mientras que la Comprensión del Lenguaje Natural (NLU) es un subconjunto que se centra específicamente en extraer el significado o la intención de ese lenguaje. La conversión de voz a texto (STT) transforma el audio hablado en texto, que luego normalmente se pasa a NLU para entender la intención del usuario. Picovoice Rhino adopta un enfoque diferente al omitir STT y convertir directamente la voz en intención (voz a intención), mejorando la eficiencia y la precisión.

La detección de palabras clave (palabra de activación) (por ejemplo, “Hey device”) es el primer paso que activa el sistema y, tras la activación, se utiliza la canalización STT → NLU o voz a intención (Rhino) para entender y ejecutar el comando.

## Objetivo

Esta demostración muestra cómo la detección de palabra de activación usando Picovoice Porcupine funciona junto con Picovoice Rhino para un procesamiento eficiente de voz a intención en una Raspberry Pi. El sistema primero escucha una palabra clave para activarse y, una vez activado, convierte directamente los comandos hablados en intenciones accionables sin depender de un procesamiento pesado en la nube. Este enfoque está altamente optimizado para dispositivos embebidos de bajos recursos, lo que lo hace ideal para aplicaciones de robótica e IA en el borde. Permite una interacción de voz en tiempo real y baja latencia, garantizando un rendimiento rápido y fiable incluso en hardware limitado.

## Hardware necesario 

<table align="center">
  <tr>
    <th>ReSpeaker XVF3800 </th>
    <th>Kit Jetson AGX Orin 32GB H01</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Detección de palabra de activación 

Una palabra de activación en sistemas embebidos robóticos permite el **procesamiento dirigido por eventos**, lo que permite que el dispositivo permanezca en un estado de escucha de bajo consumo y solo active el procesamiento pesado de voz cuando sea necesario. Esto reduce significativamente el consumo de CPU, memoria y energía en hardware con recursos limitados como microcontroladores y dispositivos de borde. También actúa como un **mecanismo de compuerta** en la canalización de audio, filtrando el ruido irrelevante y evitando activaciones innecesarias del reconocimiento de voz y la lógica de control. Desde la perspectiva de la privacidad, la detección de palabra de activación garantiza que el audio solo se capture o transmita después de detectar una intención explícita del usuario, manteniendo la mayor parte del procesamiento de datos en el dispositivo. Además, mejora la interacción humano-robot al proporcionar un disparador natural para el compromiso, ayudando al sistema a distinguir entre conversación ambiental y comandos dirigidos.

Usar una palabra de activación junto con un sistema avanzado de matriz de micrófonos como reSpeaker permite una interacción de voz **eficiente y fiable** en sistemas encarnados. La palabra de activación garantiza que el sistema solo active el procesamiento completo de voz cuando sea necesario, reduciendo el consumo de energía y el uso de CPU en hardware embebido. La matriz de micrófonos mejora esto proporcionando **formación de haz, supresión de ruido y detección de dirección en la matriz de micrófonos circular**, lo que permite un reconocimiento preciso de la palabra de activación incluso en entornos ruidosos. Esta combinación minimiza los disparos falsos y mejora la capacidad de respuesta general del sistema. También favorece una mejor interacción humano-robot al garantizar que el dispositivo responda solo cuando se le habla explícitamente y pueda centrarse en el hablante correcto.

## Cómo usar la palabra de activación con Pico-voice

Regístrate en [Picovoice](https://console.picovoice.ai/) y obtendrás una Access Key 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic1.png" alt="pir" width={800} height="auto" /></p>


### Opción A: Palabras clave integradas 

 Porcupine proporciona varias opciones de palabras de activación integradas como **AMERICANO, BLUEBERRY, BUMBLEBEE, GRAPEFRUIT, GRASSHOPPER, PICOVOICE, PORCUPINE, TERMINATOR y JARVIS,** que pueden usarse directamente con una clave de acceso válida. Con la clave de acceso, estas palabras clave pueden integrarse fácilmente en tu aplicación sin entrenar un modelo personalizado.

En esta configuración, utilizamos una **Raspberry Pi 5** como dispositivo host, y la detección de la palabra de activación se ejecutará localmente en el dispositivo. El sistema de micrófonos basado en XMOS está flasheado con **firmware de audio USB**, lo que permite que el sistema operativo lo reconozca como un dispositivo de entrada de audio estándar.

Para comenzar, es necesario instalar en el entorno las bibliotecas y dependencias requeridas de Porcupine.

```bash
pip install pvporcupine
```

Después de la instalación, se puede usar un código de ejemplo para inicializar el grabador de audio, cargar la palabra clave seleccionada y escuchar continuamente la palabra de activación. Una vez que se detecta la palabra clave, el sistema puede desencadenar acciones adicionales como grabar o procesar comandos de voz.

```python
import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keywords=["porcupine"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

### Opción B: Palabras clave personalizadas 

Ve a la consola de Picovoice y abre la página de palabra de activación personalizada. Selecciona tu idioma preferido y define una palabra de activación, por ejemplo “hi flex”. Puedes probar la palabra de activación en la consola para verificar su rendimiento de detección.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic2.png" alt="pir" width={400} height="auto" /></p>

Una vez satisfecho, haz clic en Train para generar el modelo. Luego selecciona tu plataforma de destino—aquí elegimos Raspberry Pi. Finalmente, descarga el archivo .ppn generado, que se utilizará en tu aplicación para la detección de palabras de activación personalizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic3.png" alt="pir" width={600} height="auto" /></p>

**Código de ejemplo**

```python

import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keyword_paths=["/home/pi/porcupine_env/hi-flex_en_raspberry-pi_v4_0_0.ppn"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

## De voz a intención 

Picovoice Rhino es un motor de voz a intención que convierte directamente los comandos hablados en intenciones estructuradas sin requerir un paso separado de voz a texto. Utiliza un **enfoque de aprendizaje profundo de un solo paso**, combinando reconocimiento de voz y comprensión del lenguaje natural para mejorar la precisión y reducir la latencia. 
Rhino está optimizado para el **procesamiento en tiempo real en el dispositivo**, lo que significa que funciona sin conexión, con cero retraso de red y mantiene todos los datos de voz en privado. Es altamente eficiente y está diseñado para sistemas embebidos e IoT como Raspberry Pi y microcontroladores. 
Además, Rhino permite a los desarrolladores definir contextos personalizados con intenciones y ranuras, lo que permite que los sistemas entiendan comandos específicos de un dominio y desencadenen acciones directamente a partir de la entrada de voz. 

### Crear un contexto 

Un contexto define el conjunto de comandos hablados, intenciones y ranuras para un dominio específico; aquí creamos un contexto **“Bumblebee”** para controlar ReSpeaker Flex mediante comandos de voz. Ve a la consola Rhino Speech-to-Intent en Picovoice y crea un nuevo contexto llamado **Bumblebee** usando la plantilla **“Empty”**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic4.png" alt="pir" width={600} height="auto" /></p>

### Crear intenciones

En el nivel superior, un contexto es una colección de intenciones que representan acciones del usuario dentro de un dominio. Por ejemplo, crea una intención llamada “Gesture” en el contexto HiFlex para representar comandos de voz relacionados con gestos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic5.png" alt="pir" width={600} height="auto" /></p>

### Añadir expresiones a una intención

Un usuario puede expresar la misma intención de múltiples maneras, y cada variación se denomina expresión. Para la intención **Gesture**, añade expresiones como **“wave your head” y “shake your antenna”**, ya que ambas se asignan al mismo grupo de acciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic6.png" alt="pir" width={600} height="auto" /></p>

### Usar slots para capturar variables 


Utiliza slots para capturar las partes variables dentro de las expresiones del usuario. En este caso, palabras como **“wave”** y **“shake”** representan un estado cambiante dentro del comando, por lo que pueden modelarse como una variable. Crea un slot llamado **“commands”** en el contexto de Rhino para capturar estas variaciones de forma dinámica.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic8.png" alt="pir" width={800} height="auto" /></p>

Modifica las expresiones existentes para incluir el slot recién creado. Al añadir un slot, utiliza el símbolo `$` para indicar un slot, luego selecciona el tipo de slot deseado en el menú desplegable de autocompletado y asígnale un nombre.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic9.png" alt="pir" width={800} height="auto" /></p>

Si estás listo, primero haz la prueba haciendo clic en test 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic10.png" alt="pir" width={800} height="auto" /></p>

### Vamos a descargar el modelo

Una vez que el diseño del contexto esté completo, haz clic en el icono de descarga en la esquina superior derecha, selecciona la plataforma de destino y haz clic en **“Download.”** La Picovoice Console entrenará automáticamente el modelo Rhino para esa plataforma, lo que normalmente tarda entre 5 y 10 segundos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic11.png" alt="pir" width={800} height="auto" /></p>

### Código de ejemplo

```python
import pvporcupine
import pvrhino
from pvrecorder import PvRecorder

access_key = "ACCESS KEY"

rhino = pvrhino.create(
    access_key=access_key,
    context_path="/home/pi/porcupine_env/Bumblebee_en_raspberry-pi_v4_0_0.rhn",
)

recorder = PvRecorder(device_index=-1, frame_length=rhino.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    is_finalized = rhino.process(pcm)

    if is_finalized:
        inference = rhino.get_inference()
        if inference.is_understood:
            print("Intent:", inference.intent)
            print("Slots:", inference.slots)
        else:
            print("Didn't understand")

        rhino.reset()


```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
