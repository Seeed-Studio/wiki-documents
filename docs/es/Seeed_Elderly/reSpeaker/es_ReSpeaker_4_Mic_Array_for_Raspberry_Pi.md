---
description: ReSpeaker 4-Mic Array para Raspberry Pi
title: ReSpeaker 4-Mic Array para Raspberry Pi
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_4_Mic_Array_for_Raspberry_Pi
sku: 103030216
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array para Raspberry Pi es una placa de expansión de cuatro micrófonos para Raspberry Pi diseñada para aplicaciones de IA y voz. Esto significa que podemos construir un producto de voz más potente y flexible que integre Amazon Alexa Voice Service, Google Assistant, y más.

A diferencia del [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), esta placa está desarrollada basándose en AC108, un ADC de cuatro canales altamente integrado con transición de salida I2S/TDM para captura de voz de alta definición, que permite al dispositivo captar sonidos en un radio de 3 metros. Adicionalmente, esta versión de 4 micrófonos cuenta con un anillo LED con 12 LEDs programables APA102. Con esos 4 micrófonos y el anillo LED, Raspberry Pi tendría la capacidad de hacer VAD(Detección de Actividad de Voz), estimar DOA(Dirección de Llegada), hacer KWS(Búsqueda de Palabras Clave) y mostrar la dirección a través del anillo LED, justo como Amazon Echo o Google Home.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IkSfBSf1IRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Características

* Compatible con Raspberry Pi (soporta Raspberry Pi Zero y Zero W, Raspberry PiB+, Raspberry Pi 2B, Raspberry Pi 3B, Raspberry Pi 3B+, Raspberry Pi3 A+ y Raspberry Pi 4B)
* 4 Micrófonos
* Captura de voz en radio de 3 metros
* 2 Interfaces Grove
* 12 LEDs de Usuario APA102
* Algoritmos de Software: VAD(Detección de Actividad de Voz), DOA(Dirección de Llegada) y KWS(Búsqueda de Palabras Clave)

Nota: No hay interfaz de salida de audio en ReSpeaker 4-Mic Array para Raspberry Pi. Es solo para captura de voz. Podemos usar el [conector de auriculares](https://www.raspberrypi.org/documentation/configuration/audio-config.md) en Raspberry Pi para salida de audio.

## Ideas de Aplicación

* Aplicación de Interacción por Voz
* Asistente de IA

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

* MIC: 4 micrófonos analógicos
* LED: 12 LEDs RGB programables APA102, conectados a la interfaz SPI
* Conectores de 40 Pines de Raspberry Pi: compatible con Raspberry Pi Zero y Zero W, Raspberry PiB+, Raspberry Pi 2B, Raspberry Pi 3B, Raspberry Pi 3B+, Raspberry Pi3 A+ y Raspberry Pi 4
* AC108: ADC de cuatro canales altamente integrado con transición de salida I2S/TDM
* I2C: puerto Grove I2C, conectado a I2C-1
* GPIO12: puerto digital Grove, conectado a GPIO12 & GPIO13

Nota: Si usas los LEDs RGB APA102, asegúrate de escribir HIGH a `GPIO5` primero para habilitar VCC de los LEDs.

## Comenzando

**Conectar ReSpeaker 4-Mic Array a Raspberry Pi**

Monte ReSpeaker 4-Mic Array en Raspberry Pi, asegúrese de que los pines estén correctamente alineados al apilar el ReSpeaker 4-Mic Array para Raspberry Pi.

Nota: No se permite la conexión en caliente de ReSpeaker 4-Mic Array. Esto dañará el respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Instalar controlador**

Asegúrese de que está ejecutando [la última versión de Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) en su Pi. *(actualizado el 30.06.2021)*

* Paso 1. Obtenga el código fuente de la tarjeta de voz Seeed, instale y reinicie.

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

* Paso 2. Luego selecciona la salida de audio en Raspberry Pi:

```sh
sudo raspi-config
# Select 1 System options
# Select S2 Audio
# Select your preferred Audio output device
# Select Finish
```

* Paso 3. Verifica que el nombre de la tarjeta de sonido se vea así:

```sh
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

Si queremos cambiar la configuración de `alsa`, podemos usar `sudo alsactl --file=ac108_asound.state store` para guardarla. Y cuando necesitemos usar la configuración nuevamente, copiarla a: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

* Paso 4. Abrir Audacity y seleccionar **AC108 & 4 channels** como entrada y **bcm2835 alsa: - (hw:0:0)** como salida para probar:

```sh
sudo apt update
sudo apt install audacity
audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

* Alternativamente, si usas la imagen Lite de Raspbian Pi OS y no tienes GUI, puedes grabar con `arecord` y reproducir con `aplay`:

```
sudo apt-get install sox                             //for audio conversion
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
sox hello.wav -c 2 stereo.wav                        // convert to stereo
aplay stereo.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

## Descripción general del uso

Para ejecutar los siguientes ejemplos, clona el repositorio [4mics_hat repository](https://github.com/respeaker/4mics_hat.git) en tu Raspberry Pi

```
git clone https://github.com/respeaker/4mics_hat.git
```

Todos los scripts de Python mencionados en los ejemplos a continuación se pueden encontrar dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta del repositorio mic_hat, ejecuta

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**LEDs APA102**

Cada LED APA102 integrado tiene un chip controlador adicional. El chip controlador se encarga de recibir el color deseado a través de sus líneas de entrada y luego mantener este color hasta que se reciba un nuevo comando.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

* Paso 1. Activar SPI:

```bash
sudo raspi-config
```

1. Selecciona "Interfacing Options"
2. Selecciona "SPI"
3. Selecciona Enable SPI
4. Finalmente, sal de la herramienta

* Paso 2. Luego ejecuta el código de ejemplo, ahora podemos ver los LEDs parpadear como Alexa Assistant.

```bash
python3 interfaces/pixels.py
```

### Grabar sonido con Python

Usamos la [biblioteca de Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el número de índice del dispositivo del 2 Mic pi hat:

```bash
python3 recording_examples/get_device_index.py
```

Verás el ID del dispositivo como se muestra a continuación.

```txt
Input Device id  2  -  seeed-4mic-voicecard: - (hw:1,0)
```

Para grabar el sonido, abre el archivo ```recording_examples/record.py``` con nano u otro editor de texto y cambia `RESPEAKER_INDEX = 2` al número de índice del ReSpeaker en tu sistema. Luego ejecuta el script de python record.py para hacer una grabación:

```bash
python3 recording_examples/record.py
```

* Paso 6. Si quieres extraer datos del canal 0 de 4 canales, echa un vistazo al contenido de ```record_one_channel.py```. Para otro canal X, por favor cambia [0::4] a [X::4].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproducir las muestras grabadas puedes usar la utilidad del sistema aplay, por ejemplo

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## Localización y Seguimiento de Fuentes de Sonido en Tiempo Real

[ODAS](https://github.com/introlab/odas) significa Open embeddeD Audition System. Esta es una biblioteca dedicada a realizar localización de fuentes de sonido, seguimiento, separación y post-filtrado.

* Paso 1. Obtén [ODAS](https://github.com/introlab/odas.git) y compílalo.

El archivo ejecutable que llamaremos se generará en el directorio bin

```bash
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
cd ~/Desktop
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

* Paso 2. Obtén [ODAS Studio](https://github.com/introlab/odas_web) y ejecútalo.

Instala nodejs v12.22 y npm 6.14.

```bash
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

Asegúrate de que las herramientas de compilación relevantes estén instaladas

```bash
sudo apt -y install gcc g++ make
sudo apt -y install nodejs
```

Instalando dependencias de odas_web con npm

```bash
cd ~/Desktop
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
```

Nuestro propósito es instalar los módulos dependientes relevantes sin tener que reconstruir, por lo que podemos ignorar los errores durante la reconstrucción. Luego ejecutar npm start.

```bash
npm start
```

O podemos degradar Python a 2.7 para construir el módulo election-rebuild antiguo. (No tenemos que hacer este paso)

```bash
sudo apt remove python3 -y
sudo apt install python2 -y
```

* Paso 3. El odascore estará en **~/Desktop/odas/build/bin/odaslive**, el archivo de configuración está en **~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg**.

Necesitamos modificar la configuración para especificar la tarjeta de sonido a nuestro dispositivo

```bash
arecord -l  #type this commond  make sure u have arecord installed
```

Verás algo como la siguiente salida

```bash
pi@raspberrypi:~/Desktop/odas/config/odaslive $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed4micvoicec [seeed-4mic-voicecard], device 0: bcm2835-i2s-ac10x-codec0 ac10x-codec0-0 [bcm2835-i2s-ac10x-codec0 ac10x-codec0-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

Cambia la designación de la tarjeta de sonido en la línea 18, en el archivo de configuración cfg

```bash
vim ~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg
# Then type :18
# Then press Enter
# Then press i
# Change card = YOUR CARD ;  # We found in "arecord -l"
# For mine is
# card = 3 ;
# Then type  :wq  # To save the configuration file
```

Luego abrimos la interfaz web de odas, donde podemos ver los datos de monitoreo del sistema en la interfaz **Local System Monitor** y seleccionar el kernel de control y el archivo de configuración a leer en la interfaz **ODAS Control**.

Para iniciar la GUI web de odas

```bash
cd ~/Desktop/odas_web
npm start
```

Haz clic en la sección en blanco bajo **ODAS Core** para abrir el explorador de archivos y selecciona la ruta del núcleo en "~/Desktop/odas/build/bin/odaslive"

Haz clic en la sección en blanco bajo **ODAS Config** para abrir el explorador de archivos y selecciona la ruta de configuración en "~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg"

Cuando esté configurado correctamente se verá así

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/odas.png)

## Habilitando el Reconocimiento de Voz en el Borde con Picovoice

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **permite a las empresas innovar y diferenciarse rápidamente con IA de voz privada**. Construye una estrategia de IA unificada alrededor de tu marca y productos con nuestro reconocimiento de voz y [**tecnologías de comprensión de lenguaje natural (NLU)**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU).

**Seeed se ha asociado con Picovice para traer una solución de Reconocimiento de Voz en el borde usando [ReSpeaker 4 Mic](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi.html) para desarrolladores.**

Picovoice es una plataforma integral para construir productos de voz en tus términos. Permite crear experiencias de voz similares a Alexa y Google. Pero funciona completamente al 100% en el dispositivo. Hay ventajas de Picovoice:

* **Privado**: Todo se procesa sin conexión. Intrínsecamente compatible con HIPAA y GDPR.
* **Confiable**: Funciona sin necesidad de conectividad constante.
* **Latencia Cero**: La arquitectura edge-first elimina el retraso impredecible de la red.
* **Preciso**: Resistente al ruido y la reverberación. Supera a las alternativas basadas en la nube por amplios márgenes.
* **Multiplataforma**: Diseña una vez, despliega en cualquier lugar. Construye usando lenguajes y frameworks familiares.

### Primeros Pasos con Picovocie con ReSpeaker 4-Mic Array

**Paso 1.** Por favor sigue el **tutorial paso a paso anterior de ReSpeaker 4-Mic Array con Raspberry Pi** antes de lo siguiente.

**Nota:** Por favor asegúrate de que `Audacity` y los LEDs `APA102` estén funcionando correctamente en el ReSpeaker 4-Mic Array con Raspberry Pi.

**Paso 2.** Abre Terminal y escribe el siguiente comando para instalar el controlador `pyaudio`.

```sh
pip3 install pyaudio
```

**Nota**: Asegúrate de tener `pip3` instalado en tu Raspberry Pi

**Paso 3.** Escribe el siguiente comando en la terminal para **instalar la demostración de Picovoice para ReSpeaker 4-Mic Array**.

```sh
pip3 install pvrespeakerdemo
```

### Uso de la Demostración

La demostración utiliza el array ReSpeaker 4-Mic en una Raspberry Pi con tecnología Picovoice para controlar los LEDs. **Esta demostración se activa con la palabra de activación "`Picovoice`" y estará lista para realizar acciones de seguimiento, como encender y apagar LEDs, y cambiar los colores de los LEDs.**

Después de que la instalación haya terminado, escribe este comando para ejecutar la demostración en la terminal:

```sh
picovoice_respeaker_demo
```

### Comandos de Voz

Aquí están los comandos de voz para esta demostración:

* **Picovoice**

La demostración produce:

```txt
wake word
```

* **Encender las luces**

Deberías ver las luces encendidas y el siguiente mensaje en la terminal:

```config
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

La lista de comandos se muestra en la terminal:

```config
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

también, puedes probar este comando para cambiar el color con:

* **Picovoice, set the lights to orange**

Apagar las luces con:

* **Picovoice, turn off all lights**

**Demostración del Video Demo**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/icTZeMIJAxw" frameBorder={0} allow="accelerometer; encrypted-media;gyroscope; picture-in-picture" allowFullScreen /></p>

### Código Fuente del Demo

El demo está construido con el **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. El código fuente del demo está disponible en GitHub en [Picovoice Respeaker Demo](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker)

### Diferentes Palabras de Activación

El [**Picovoice SDK**](https://github.com/Picovoice/picovoice) incluye palabras de activación de muestra gratuitas licenciadas bajo Apache 2.0, incluyendo asistentes de voz principales (ej. "**`Hey Google`**", "**`Alexa`**") y divertidas como "**`Computer`**" y "**`Jarvis`**".

### Comandos de Voz Personalizados

Los comandos de iluminación están definidos por un *contexto de Voz-a-Intención* de Picovoice. Puedes diseñar y entrenar contextos escribiendo la gramática permitida usando Picovoice Console. Puedes probar tus cambios en el navegador mientras editas con el botón del micrófono. Ve a [Picovoice Console](https://picovoice.ai/console/) y regístrate para una cuenta. Usa el **editor Rhino Speech-to-Intent** para hacer contextos, luego entrenalos para Raspberry Pi.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Ejemplos de Múltiples Palabras de Activación

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Dfn3wBE2pwY" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Para demostrar la capacidad de Picovoice también hemos preparado ejemplos de múltiples palabras de activación usando ReSpeaker 4-Mic Array con Raspberry Pi! Diferentes palabras de activación pueden configurarse para ejecutar ciertas tareas.

*Este paquete contiene un demo de línea de comandos para controlar los LEDs del arreglo de micrófonos ReSpeaker 4-mic usando Porcupine.*

### Porcupine

**Porcupine** es un motor de palabras de activación altamente preciso y liviano. Permite construir aplicaciones habilitadas por voz que siempre escuchan. Es

* usando redes neuronales profundas entrenadas en entornos del mundo real.
* compacto y computacionalmente eficiente. Es perfecto para IoT.
* multiplataforma. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64), y navegadores web
  son compatibles. Adicionalmente, los clientes empresariales tienen acceso al ARM Cortex-M SDK.
* escalable. Puede detectar múltiples comandos de voz que siempre escuchan sin huella de tiempo de ejecución adicional.
* autoservicio. Los desarrolladores pueden entrenar modelos de palabras de activación personalizados usando [Picovoice Console](https://picovoice.ai/console/).

#### Primeros Pasos con Múltiples Palabras de Activación

Ejecuta el siguiente comando en terminal para instalar el controlador del demo:

```sh
pip3 install ppnrespeakerdemo
```

#### Uso de Múltiples Palabras de Activación

Ejecuta lo siguiente en la terminal después de la instalación del controlador:

```sh
porcupine_respeaker_demo
```

Espera a que la demostración se inicialice e imprima `[Listening]` en la terminal. Di:

> Picovoice

La demostración produce la salida:

```text
detected 'Picovoice'
```

Las luces ahora están configuradas en `verde`. Di:

> Alexa

Las luces están configuradas en `amarillo` ahora. Di:

> Terminator

para apagar las luces.

#### Palabra de Activación a Colores

A continuación se muestran los colores asociados con las palabras de activación compatibles para esta demostración:

* ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
* ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
* ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
* ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
* ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
* ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
* ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
* ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
* ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código Fuente del Ejemplo de Múltiples Palabras de Activación

Por favor consulte el código fuente completo de este ejemplo aquí: [Porcupine Respeaker Demo](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)

### Soporte Técnico de Picovoice

Si encuentras problemas técnicos usando Picovoice, por favor visita **[Picovoice](https://github.com/Picovoice)** para discusiones.

## FAQ

**P1: No hay respuesta cuando ejecutamos kws_doa.py y decimos snow boy**

R2: Por favor ejecuta audacity para asegurarte de que los 4 canales estén bien. Si hay un canal sin datos, no habrá respuesta cuando digamos snow boy.

**P2: Error #include "portaudio.h" cuando ejecutamos "sudo pip install pyaudio".**

R3: Por favor ejecuta el siguiente comando para resolver el problema.

```sh
sudo apt-get install portaudio19-dev
```

**P3: ...WARNING: memory leak will occur if overlay removed... mensaje en journalctl**

R4: Hay una pérdida de memoria pequeña genuina que ocurre una sola vez cuando el controlador se carga por primera vez (después del arranque). Sin embargo, dado que es por arranque o por carga, y el usuario típico solo necesita cargar el controlador una vez por arranque, perder el rastro de unos pocos bytes por arranque no importa. Así que esto es solo un problema menor que es poco probable que afecte a los usuarios de manera real, aparte de ver un mensaje preocupante sobre pérdida de memoria por arranque.

## Recursos

* **[PDF]** [ReSpeaker 4-Mic Array for Raspberry Pi(PDF)](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
* **[DXF]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20v1.0.dxf.zip)
* **[3D]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0 3D Model](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mics%20Pi%20HAT%20v1.0.skp.zip)
* **[AC108]** [AC108 DataSheet](http://www.x-powers.com/en.php/Info/product_detail/article_id/41)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
* **[Voice Engine** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Soporte Técnico y Discusión del Producto


¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
