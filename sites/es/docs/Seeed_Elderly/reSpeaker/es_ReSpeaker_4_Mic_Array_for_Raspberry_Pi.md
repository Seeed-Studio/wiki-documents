---
description: ReSpeaker 4-Mic Array para Raspberry Pi
title: reSpeaker 4-Mic Array para Raspberry Pi
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_4_Mic_Array_for_Raspberry_Pi
sku: 103030216
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array para Raspberry Pi es una placa de expansión con cuatro micrófonos para Raspberry Pi diseñada para aplicaciones de IA y voz. Esto significa que podemos construir un producto de voz más potente y flexible que integre Amazon Alexa Voice Service, Google Assistant, etc.

A diferencia de [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), esta placa está desarrollada sobre AC108, un ADC de cuatro canales altamente integrado con transición de salida I2S/TDM para captura de voz en alta definición, lo que permite que el dispositivo capte sonidos en un radio de 3 metros. Además, esta versión de 4 micrófonos incorpora un anillo LED con 12 LEDs programables APA102. Con esos 4 micrófonos y el anillo LED, Raspberry Pi tendrá la capacidad de hacer VAD (Voice Activity Detection), estimar DOA (Direction of Arrival), hacer KWS (Keyword Search) y mostrar la dirección mediante el anillo LED, igual que Amazon Echo o Google Home.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IkSfBSf1IRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Características

- Compatible con Raspberry Pi (soporta Raspberry Pi Zero y Zero W, Raspberry PiB+, Raspberry Pi 2B, Raspberry Pi 3B, Raspberry Pi 3B+, Raspberry Pi3 A+ y Raspberry Pi 4B)
- 4 micrófonos
- Captura de voz en un radio de 3 metros
- 2 interfaces Grove
- 12 LEDs de usuario APA102
- Algoritmos de software: VAD (Voice Activity Detection), DOA (Direction of Arrival) y KWS (Keyword Search)

Nota: No hay interfaz de salida de audio en ReSpeaker 4-Mic Array para Raspberry Pi. Es solo para captura de voz. Podemos usar el [conector de auriculares](https://www.raspberrypi.org/documentation/configuration/audio-config.md) en Raspberry Pi para la salida de audio.

## Ideas de aplicación

- Aplicación de interacción por voz
- Asistente de IA

## Descripción general del hardware

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 micrófonos analógicos
- LED: 12 LEDs RGB programables APA102, conectados a la interfaz SPI
- Encabezados de 40 pines de Raspberry Pi: compatible con Raspberry Pi Zero y Zero W, Raspberry PiB+, Raspberry Pi 2B, Raspberry Pi 3B, Raspberry Pi 3B+, Raspberry Pi3 A+ y Raspberry Pi 4
- AC108: ADC de cuatro canales altamente integrado con transición de salida I2S/TDM
- I2C: puerto Grove I2C, conectado a I2C-1
- GPIO12: puerto digital Grove, conectado a GPIO12 y GPIO13

Nota: Si utilizas los LEDs RGB APA102, asegúrate de escribir HIGH en `GPIO5` primero para habilitar el VCC de los LEDs.

## Primeros pasos

**Conectar ReSpeaker 4-Mic Array a Raspberry Pi**

Monta ReSpeaker 4-Mic Array en Raspberry Pi, asegúrate de que los pines estén correctamente alineados al apilar ReSpeaker 4-Mic Array para Raspberry Pi.

Nota: No se permite la conexión en caliente de ReSpeaker 4-Mic Array. Dañará el respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Instalar el controlador**

Asegúrate de estar ejecutando [la última Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) en tu Pi. *(actualizado el 30.06.2021)*

- Paso 1. Obtén el código fuente de la tarjeta de voz de Seeed, instálalo y reinicia.

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

- Paso 2. Luego selecciona la salida de audio en Raspberry Pi:

```sh
sudo raspi-config
# Select 1 System options
# Select S2 Audio
# Select your preferred Audio output device
# Select Finish
```

- Paso 3. Comprueba que el nombre de la tarjeta de sonido se vea así:

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

Si queremos cambiar la configuración de `alsa`, podemos usar `sudo alsactl --file=ac108_asound.state store` para guardarla. Y cuando necesitemos usar la configuración de nuevo, cópiala a: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Paso 4. Abre Audacity y selecciona **AC108 & 4 channels** como entrada y **bcm2835 alsa: - (hw:0:0)** como salida para hacer la prueba:

```sh
sudo apt update
sudo apt install audacity
audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Alternativamente, si utilizas la imagen Lite de Raspbian Pi OS y no tienes GUI, puedes grabar con `arecord` y reproducir con `aplay`:

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

Todos los scripts de Python mencionados en los ejemplos siguientes se pueden encontrar dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta del repositorio mic_hat, ejecuta

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**LEDs APA102**

Cada LED APA102 integrado en la placa tiene un chip controlador adicional. El chip controlador se encarga de recibir el color deseado a través de sus líneas de entrada y luego mantener este color hasta que se reciba un nuevo comando.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Paso 1. Activar SPI:

```bash
sudo raspi-config
```

1. Select "Interfacing Options"
2. Select "SPI"
3. Select Enable SPI
4. Finally , Exit the tool

- Paso 2. Luego ejecuta el código de ejemplo, ahora podemos ver los LEDs parpadear como Alexa Assistant.

```bash
python3 interfaces/pixels.py
```

### Grabar sonido con Python

Usamos la [librería de Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el número de índice de dispositivo de 2 Mic pi hat:

```bash
python3 recording_examples/get_device_index.py
```

Verás el ID del dispositivo como se muestra a continuación.

```txt
Input Device id  2  -  seeed-4mic-voicecard: - (hw:1,0)
```

Para grabar el sonido, abre el archivo ```recording_examples/record.py``` con nano u otro editor de texto y cambia `RESPEAKER_INDEX = 2` al número de índice de ReSpeaker en tu sistema. Luego ejecuta el script de Python record.py para hacer una grabación:

```bash
python3 recording_examples/record.py
```

- Paso 6. Si quieres extraer los datos del canal 0 de los 4 canales, echa un vistazo al contenido de ```record_one_channel.py```. Para otro canal X, cambia [0::4] a [X::4].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproducir las muestras grabadas puedes usar la utilidad del sistema aplay, por ejemplo

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## Localización y seguimiento de la fuente de sonido en tiempo real

[ODAS](https://github.com/introlab/odas) significa Open embeddeD Audition System. Es una biblioteca dedicada a realizar localización, seguimiento, separación y postfiltrado de fuentes de sonido.

- Paso 1. Obtén [ODAS](https://github.com/introlab/odas.git) y compílalo.

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

- Paso 2. Obtén [ODAS Studio](https://github.com/introlab/odas_web) y ejecútalo.

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

Instalar las dependencias de odas_web con npm

```bash
cd ~/Desktop
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
```

Nuestro objetivo es instalar los módulos dependientes relevantes sin tener que recompilar, por lo que podemos ignorar los errores durante la recompilación. Luego ejecuta npm start.

```bash
npm start
```

O podemos bajar la versión de Python a 2.7 para compilar el antiguo módulo election-rebuild. (No tenemos que hacer este paso)

```bash
sudo apt remove python3 -y
sudo apt install python2 -y
```

- Paso 3. El odascore estará en **~/Desktop/odas/build/bin/odaslive**, el archivo de configuración está en **~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg**.

Necesitamos modificar la configuración para especificar la tarjeta de sonido para nuestro dispositivo

```bash
arecord -l  #type this commond  make sure u have arecord installed
```

Verás una salida similar a la siguiente

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

Luego abrimos la interfaz web de odas, donde podemos ver los datos de monitorización del sistema en la interfaz **Local System Monitor** y seleccionar el núcleo de control y el archivo de configuración que se va a leer en la interfaz **ODAS Control**.

Para iniciar la GUI web de odas

```bash
cd ~/Desktop/odas_web
npm start
```

Haz clic en la sección en blanco bajo **ODAS Core** para abrir el explorador de archivos y selecciona la ruta del núcleo en "~/Desktop/odas/build/bin/odaslive"

Haz clic en la sección en blanco bajo **ODAS Config** para abrir el explorador de archivos y selecciona la ruta de configuración en "~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg"

Cuando esté configurado correctamente se verá así

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/odas.png)

## Habilitar el reconocimiento de voz en el borde con Picovoice

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **permite a las empresas innovar y diferenciarse rápidamente con IA de voz privada**. Crea una estrategia de IA unificada en torno a tu marca y productos con nuestro reconocimiento de voz y [**tecnologías de comprensión del lenguaje natural (NLU)**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU).

**Seeed se ha asociado con Picovice para ofrecer una solución de reconocimiento de voz en el borde usando [ReSpeaker 4 Mic](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi.html) para desarrolladores.**

Picovoice es una plataforma integral para crear productos de voz en tus propios términos. Permite crear experiencias de voz similares a Alexa y Google. Pero se ejecuta completamente al 100% en el dispositivo. Hay ventajas de Picovoice:

- **Privado**: Todo se procesa sin conexión. Intrínsecamente compatible con HIPAA y GDPR.
- **Fiable**: Funciona sin necesidad de conectividad constante.
- **Cero latencia**: La arquitectura orientada al borde elimina los retrasos de red impredecibles.
- **Preciso**: Resistente al ruido y a la reverberación. Supera ampliamente a las alternativas basadas en la nube.
- **Multiplataforma**: Diseña una vez, despliega en cualquier lugar. Crea usando lenguajes y frameworks conocidos.

### Picovocie con ReSpeaker 4-Mic Array Guía de inicio

**Paso 1.** Sigue el **tutorial paso a paso anterior de ReSpeaker 4-Mic Array con Raspberry Pi** antes de lo siguiente.

**Nota:** Asegúrate de que `Audacity` y los LED `APA102` funcionen correctamente en el ReSpeaker 4-Mic Array con Raspberry Pi.

**Paso 2.** Abre la Terminal y escribe el siguiente comando para instalar el controlador `pyaudio`.

```sh
pip3 install pyaudio
```

**Nota**: Asegúrate de tener `pip3` instalado en tu Raspberry Pi

**Paso 3.** Escribe el siguiente comando en la terminal para **instalar la demo de Picovoice para ReSpeaker 4-Mic Array**.

```sh
pip3 install pvrespeakerdemo
```

### Uso de la demo

La demo utiliza el array ReSpeaker 4-Mic en una Raspberry Pi con tecnología Picovoice para controlar los LED. **Esta demo se activa con la palabra de activación "`Picovoice`" y estará lista para realizar acciones posteriores, como encender y apagar los LED y cambiar los colores de los LED.**

Cuando termine la instalación, escribe este comando para ejecutar la demo en la terminal:

```sh
picovoice_respeaker_demo
```

### Comandos de voz

Aquí están los comandos de voz para esta demo:

- **Picovoice**

La demo muestra:

```txt
wake word
```

- **Turn on the lights**

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

además, puedes probar este comando para cambiar el color:

- **Picovoice, set the lights to orange**

Apaga las luces con:

- **Picovoice, turn off all lights**

**Video de demostración de la demo**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/icTZeMIJAxw" frameBorder={0} allow="accelerometer; encrypted-media;gyroscope; picture-in-picture" allowFullScreen /></p>

### Código fuente de la demo

La demo está construida con el **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. El código fuente de la demo está disponible en GitHub en [Picovoice Respeaker Demo](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker)

### Diferentes palabras de activación

El [**Picovoice SDK**](https://github.com/Picovoice/picovoice) incluye palabras de activación de muestra gratuitas con licencia Apache 2.0, incluidas las principales asistentes de voz (por ejemplo, "**`Hey Google`**", "**`Alexa`**") y algunas divertidas como "**`Computer`**" y "**`Jarvis`**".

### Comandos de voz personalizados

Los comandos de iluminación se definen mediante un *contexto de Speech-to-Intent* de Picovoice. Puedes diseñar y entrenar contextos escribiendo la gramática permitida usando Picovoice Console. Puedes probar tus cambios en el navegador mientras editas con el botón del micrófono. Ve a [Picovoice Console](https://picovoice.ai/console/) y regístrate para obtener una cuenta. Usa el **editor Rhino Speech-to-Intent** para crear contextos y luego entrénalos para Raspberry Pi.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Ejemplos de múltiples palabras de activación

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Dfn3wBE2pwY" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Para demostrar la capacidad de Picovoice también hemos preparado ejemplos de múltiples palabras de activación usando ReSpeaker 4-Mic Array con Raspberry Pi. Diferentes palabras de activación se pueden configurar para ejecutar ciertas tareas.

*Este paquete contiene una demo de línea de comandos para controlar los LED del array de micrófonos ReSpeaker 4-mic usando Porcupine.*

### Porcupine

**Porcupine** es un motor de palabras de activación muy preciso y ligero. Permite crear aplicaciones siempre a la escucha habilitadas por voz. Es

- usa redes neuronales profundas entrenadas en entornos del mundo real.
- compacto y computacionalmente eficiente. Es perfecto para IoT.
- multiplataforma. Se admiten Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64) y navegadores web. Además, los clientes empresariales tienen acceso al SDK ARM Cortex-M.
- escalable. Puede detectar múltiples comandos de voz siempre a la escucha sin aumentar la huella de ejecución.
- autoservicio. Los desarrolladores pueden entrenar modelos de palabras de activación personalizados usando [Picovoice Console](https://picovoice.ai/console/).

#### Guía de inicio de múltiples palabras de activación

Ejecuta el siguiente comando en la terminal para instalar el controlador de la demo:

```sh
pip3 install ppnrespeakerdemo
```

#### Uso de múltiples palabras de activación

Ejecuta lo siguiente en la terminal después de la instalación del controlador:

```sh
porcupine_respeaker_demo
```

Espera a que la demo se inicialice y muestre `[Listening]` en la terminal. Di:

> Picovoice

La demo muestra:

```text
detected 'Picovoice'
```

Las luces ahora están configuradas en `green`. Di:

> Alexa

Las luces ahora están configuradas en `yellow`. Di:

> Terminator

para apagar las luces.

#### Palabra de activación a colores

A continuación se muestran los colores asociados con las palabras de activación compatibles para esta demo:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código fuente del ejemplo de múltiples palabras de activación

Consulta el código fuente completo de este ejemplo aquí: [Porcupine Respeaker Demo](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)

### Soporte técnico de Picovoice

Si encuentras problemas técnicos al usar Picovoice, visita **[Picovoice](https://github.com/Picovoice)** para debatirlos.

## Preguntas frecuentes

**P1: No hay respuesta cuando ejecutamos kws_doa.py y decimos snow boy**

R2: Ejecuta audacity para asegurarte de que los 4 canales estén bien. Si hay un canal sin datos, no habrá respuesta cuando digamos snow boy.

**P2: Error #include "portaudio.h" al ejecutar "sudo pip install pyaudio".**

R3: Ejecuta el siguiente comando para resolver el problema.

```sh
sudo apt-get install portaudio19-dev
```

**P3: ...WARNING: memory leak will occur if overlay removed... mensaje en journalctl**

R4: Hay una pequeña pérdida de memoria real y única cuando el controlador se carga por primera vez (después del arranque). Sin embargo, dado que es por arranque o por carga, y el usuario típico solo necesita cargar el controlador una vez por arranque, perder el rastro de unos pocos bytes por arranque no importa. Así que esto es solo un pequeño problema que probablemente no afecte a ningún usuario de una manera real, aparte de ver un mensaje preocupante sobre la pérdida de memoria por arranque.

## Recursos

- **[PDF]** [ReSpeaker 4-Mic Array for Raspberry Pi(PDF)](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
- **[DXF]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20v1.0.dxf.zip)
- **[3D]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0 3D Model](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mics%20Pi%20HAT%20v1.0.skp.zip)
- **[AC108]** [AC108 DataSheet](http://www.x-powers.com/en.php/Info/product_detail/article_id/41)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerle diferentes tipos de soporte para garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
