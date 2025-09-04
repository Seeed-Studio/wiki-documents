---
description: Primeros pasos con Raspberry Pi
title: Primeros pasos con Raspberry Pi
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /es/ReSpeaker_2_Mics_Pi_HAT_Raspberry
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

:::caution
Esta wiki está escrita para ReSpeaker 2-Mics Pi HAT **v1**, para distinguir los dispositivos v1 y v2, consulte [Cómo distinguir las revisiones de hardware de ReSpeaker 2-Mics Pi HAT](/es/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

### Instalación y configuración del controlador

**1. Conectar ReSpeaker 2-Mics Pi HAT a Raspberry Pi**

Monte ReSpeaker 2-Mics Pi HAT en su Raspberry Pi, asegúrese de que los pines estén correctamente alineados al apilar el ReSpeaker 2-Mics Pi HAT.

Conexión Raspberry Pi

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Conexión Raspberry Pi Zero

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

**2. Configurar el controlador en Raspberry Pi**

Asegúrese de que está ejecutando [la última versión de Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) en su Pi. *(actualizado el 01.05.2021)*

- Paso 1. Obtenga el código fuente de la tarjeta de voz Seeed, instale y reinicie.

```bash
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```


<!--
:::note
Si la versión del kernel Linux de tu raspberry pi es [rpi-6.6.y](https://github.com/raspberrypi/linux/tree/rpi-6.6.y) (como Raspberry Pi 5), puedes encontrar errores de compilación debido a cambios en simple_card_utils.h[simple_card_utils.h](https://github.com/raspberrypi/linux/blob/rpi-6.6.y/include/sound/simple_card_utils.h), Para solucionarlo, realiza los siguientes cambios en seeed-voicecard.c.

- abre el archivo seeed-voicecard/seeed-voicecard.c
- Reemplaza todas las instancias del prefijo "simple_util_" con "asoc_simple_"
- Reemplaza todas las instancias de: "rtd->id" con "rtd->num"
- Guarda y sal
- Instala de nuevo y reinicia

```bash
sudo ./install.sh
sudo reboot now
```

:::
-->

- Paso 2. Verifica que el nombre de la tarjeta de sonido coincida con el código fuente seeed-voicecard mediante el comando ```aplay -l``` y ```arecord -l```.

```shell
pi@raspberrypi:~/Desktop/mic_hat $ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: Headphones [bcm2835 Headphones], device 0: bcm2835 Headphones [bcm2835 Headphones]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 1: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

pi@raspberrypi:~/Desktop/mic_hat $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- Paso 3. Prueba, escucharás lo que digas a los micrófonos (no olvides conectar un auricular o un altavoz):

```bash
arecord -D "plughw:3,0" -f S16_LE -r 16000 -d 5 -t wav test.wav
aplay -D "plughw:3,0" test.wav
```

**Nota:** "plughw:3,0" es el número del dispositivo de grabación (o reproducción), dependiendo de tu sistema este número puede diferir (por ejemplo, en Raspberry Pi 0 será 0, ya que no tiene conector de audio). Podemos encontrarlo mediante "arecord -l" y "aplay -l".

**3. Configurar ajustes de sonido y ajustar el volumen con alsamixer**

**alsamixer** es un programa mezclador gráfico para la Arquitectura de Sonido Avanzada de Linux (ALSA) que se utiliza para configurar ajustes de sonido y ajustar el volumen.

```bash
pi@raspberrypi:~ $ alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

Las teclas de flecha izquierda y derecha se utilizan para seleccionar el canal o dispositivo y las flechas arriba y abajo controlan el volumen del dispositivo actualmente seleccionado. Salga del programa con ALT+Q, o presionando la tecla Esc. [Más información](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    Por favor use F6 para seleccionar primero el dispositivo seeed-2mic-voicecard.
:::

## Resumen de uso

Para ejecutar los siguientes ejemplos, clone el repositorio [https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) en su Raspberry Pi

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

Todos los scripts de Python mencionados en los ejemplos a continuación se pueden encontrar dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta del repositorio mic_hat, ejecuta

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**LEDs APA102**

Cada LED APA102 integrado tiene un chip controlador adicional. El chip controlador se encarga de recibir el color deseado a través de sus líneas de entrada, y luego mantener este color hasta que se reciba un nuevo comando.

```bash
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
</video>

**Botón de Usuario**

Hay un Botón de Usuario integrado, que está conectado al GPIO17. Ahora intentaremos detectarlo con python y RPi.GPIO.

Ejecuta el siguiente código desde la carpeta del repositorio mic_hat, que clonaste en el Paso 4.

```bash
python3 interfaces/button.py
```

Debería mostrar "on" cuando presiones el botón:

```bash
python3 button.py
```

Salida como

```txt
pi@raspberrypi:~ $ python3 button.py
off
off
on
on
off
```

### Grabar sonido con Python

Usamos la [biblioteca de Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el número de índice del dispositivo del 2 Mic pi hat:

```bash
python3 recording_examples/get_device_index.py
```

Verás el ID del dispositivo como se muestra a continuación.

```bash
Input Device id  2  -  seeed-2mic-voicecard: - (hw:1,0)
```

Para grabar el sonido, abre el archivo ```recording_examples/record.py``` con nano u otro editor de texto y cambia `RESPEAKER_INDEX = 2` al número de índice del ReSpeaker en tu sistema. Luego ejecuta el script de python record.py para hacer una grabación:

```bash
python3 recording_examples/record.py
```

Si quieres extraer datos del canal 0 de 2 canales, echa un vistazo al contenido de ```record_one_channel.py```. Para otro canal X, por favor cambia [0::2] a [X::2].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproducir las muestras grabadas puedes usar la utilidad del sistema aplay, por ejemplo

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
aplay -D plughw:1,0 output_one_channel.wav #for Mono sound from one channel
```

Alternativamente, puedes usar el script recording_examples/play.py para reproducir los archivos .wav con PyAudio.

```bash
python3 recording_examples/play.py path-to-wav-file
```

Asegúrate de especificar el índice correcto del dispositivo de salida en play.py - ¡de lo contrario PyAudio se congelará!

### Picovoice con ReSpeaker 2-Mic Pi HAT y Raspberry Pi

**Paso 1.** Sigue el **tutorial paso a paso anterior de ReSpeaker 2-Mic Pi HAT con Raspberry Pi** antes de continuar con lo siguiente.

**Nota:** Por favor asegúrate de que los LEDs `APA102` estén funcionando correctamente en el ReSpeaker 2-Mic Pi HAT con Raspberry Pi.

**Paso 2.** Escribe el siguiente comando en la terminal para **instalar la demostración de Picovoice para ReSpeaker 2-Mic Pi HAT**.

```bash
pip3 install pvrespeakerdemo
```

**Nota:** En una instalación nueva de Raspberry Pi OS podrías notar la siguiente advertencia al instalar esta demostración:
  El script picovoice_respeaker_demo está instalado en '/home/pi/.local/bin' que no está en PATH.

Esto significa que para ejecutar la demostración, necesitas añadir /home/pi/.local/bin a tu PATH del sistema:

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

#### Uso de la Demostración

La demostración utiliza el ReSpeaker 2-Mic Pi HAT en una Raspberry Pi con tecnología Picovoice para controlar los LEDs. **Esta demostración se activa con la palabra de activación "`Picovoice`" y estará lista para realizar acciones de seguimiento, como encender y apagar LEDs, y cambiar los colores de los LEDs.**

Después de que la instalación haya terminado, escribe este comando para ejecutar la demostración en la terminal:

```sh
picovoice_respeaker_demo
```

#### Comandos de Voz

Aquí están los comandos de voz para esta demostración:

- **Picovoice**

La demostración produce:

```txt
wake word
```

- **Enciende las luces**

Deberías ver las luces encendidas y el siguiente mensaje en la terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

La lista de comandos se muestra en la terminal:

```yaml
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

- **Picovoice, set the lights to orange**

Apagar las luces con:

- **Picovoice, turn off all lights**

**Demostración del Video de Demostración**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/mPfZZQXjWMI" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

#### Código Fuente de la Demostración

La demostración está construida con el **[SDK de Picovoice](https://github.com/Picovoice/picovoice)**. El código fuente de la demostración está disponible en GitHub en [https://github.com/Picovoice/picovoice/tree/master/demo/respeaker](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker).

#### Diferentes Palabras de Activación

El [**SDK de Picovoice**](https://github.com/Picovoice/picovoice) incluye palabras de activación de muestra gratuitas licenciadas bajo Apache 2.0, incluyendo asistentes de voz principales (p. ej. "**`Hey Google`**", "**`Alexa`**") y divertidas como "**`Computer`**" y "**`Jarvis`**".

#### Comandos de Voz Personalizados

Los comandos de iluminación están definidos por un *contexto de Voz-a-Intención* de Picovoice. Puedes diseñar y entrenar contextos escribiendo la gramática permitida usando Picovoice Console. Puedes probar tus cambios en el navegador mientras editas con el botón del micrófono. Ve a Picovoice Console ([https://picovoice.ai/console/](https://picovoice.ai/console/)) y regístrate para obtener una cuenta. Usa el **editor de Voz-a-Intención Rhino** para crear contextos, luego entrenalos para Raspberry Pi.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Ejemplos de Múltiples Palabras de Activación

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/GqxWHoQ560g" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Porcupine

**Porcupine** es un motor de palabras de activación altamente preciso y ligero. Permite construir aplicaciones habilitadas por voz que siempre están escuchando. Es

- usando redes neuronales profundas entrenadas en entornos del mundo real.
- compacto y computacionalmente eficiente. Es perfecto para IoT.
- multiplataforma. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64), y navegadores web
  son compatibles. Además, los clientes empresariales tienen acceso al SDK ARM Cortex-M.
- escalable. Puede detectar múltiples comandos de voz que siempre están escuchando sin huella de tiempo de ejecución añadida.
- autoservicio. Los desarrolladores pueden entrenar modelos de palabras de activación personalizados usando [Picovoice Console](https://picovoice.ai/console/).

Para demostrar la capacidad de Picovoice también hemos preparado ejemplos de múltiples palabras de activación usando ReSpeaker 2-Mic Pi HAT con Raspberry Pi! Diferentes palabras de activación pueden configurarse para ejecutar ciertas tareas.

*Este paquete contiene una demostración de línea de comandos para controlar los LEDs de ReSpeaker 2-Mic Pi HAT usando Porcupine.*

#### Primeros Pasos con Múltiples Palabras de Activación

Ejecuta el siguiente comando en la terminal para instalar el controlador de demostración:

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

Las luces ahora están configuradas en `green`. Di:

> Alexa

Las luces están configuradas en `yellow` ahora. Di:

> Terminator

para apagar las luces.

#### Palabra de Activación a Colores

A continuación se muestran los colores asociados con las palabras de activación compatibles para esta demostración:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código Fuente del Ejemplo de Múltiples Palabras de Activación

Por favor, consulta el código fuente completo de este ejemplo aquí: [https://github.com/Picovoice/porcupine/tree/master/demo/respeaker](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker).

## Detección de palabras clave con ReSpeaker 2-Mic Pi HAT y Mycroft Precise

Mycroft Precise es un motor de detección de palabras clave completamente de código abierto. Aunque tiene funcionalidad más limitada en comparación con Picovoice, también tiene una licencia más permisiva (Apache 2.0), que permite modificación y redistribución, incluyendo código cerrado y comercial, siempre que se preserve la licencia.

Para comenzar con Mycroft Precise, instala la última versión estable del fork de Mycroft Precise de Seeed:

```bash
sudo apt-get install libatlas-base-dev
pip3 install git+https://github.com/respeaker/mycroft_runner_simple.git
```

**Nota:** En una instalación nueva de Raspberry Pi OS podrías notar la siguiente advertencia al instalar esta demostración:
  El script picovoice_respeaker_demo está instalado en '/home/pi/.local/bin' que no está en PATH.

Esto significa que para ejecutar la demostración, necesitas añadir /home/pi/.local/bin a tu PATH del sistema:

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Luego puedes probar la instalación de Mycroft Precise simplemente ejecutando

```bash
mycroft-precise --model hey-mycroft
```

Si deseas integrar Mycroft Precise en tu propio proyecto, consulta el archivo README del repositorio de Github para obtener más información sobre la API.

## Asistente Inteligente con ReSpeaker 2-Mic Pi HAT y Mycroft Core

Mycroft es un asistente de voz de código abierto hackeable. Es similar en funcionalidad a Amazon Alexa o Google Assistant, pero tiene una licencia más permisiva (Apache 2.0), que permite modificación y redistribución, incluyendo código cerrado y comercial, siempre que se preserve la licencia.

**Esta sección está actualmente en desarrollo, añadiremos más detalles sobre el uso de Mycroft Core con Respeaker**

## Picovoice con ReSpeaker 2-Mic Pi HAT y Raspberry Pi Zero Primeros Pasos

**Paso 1.** Instala los controladores y configura el dispositivo como se describe en **Instalación y configuración del controlador**.

Luego clona el repositorio de github de Picovoice:

```bash
git clone --recurse-submodules https://github.com/Picovoice/picovoice.git
cd picovoice
```

**Nota:** Asegúrate de que los LEDs `APA102` estén funcionando correctamente en el ReSpeaker 2-Mic Pi HAT con Raspberry Pi Zero.

**Paso 2.** Instala la librería `wiringpi` escribiendo lo siguiente en la terminal.

```sh
sudo apt-get install wiringpi
```

**Paso 3.** Desde la raíz del repositorio, escribe el siguiente comando en la terminal para **instalar la demo de Picovoice para ReSpeaker 2-Mic Pi HAT**.

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/picovoice_demo_mic \
-I sdk/c/include/ demo/respeaker-rpi0/picovoice_demo_mic.c \
-ldl -lasound -lwiringPi
```

### Uso de la Demostración

La demostración utiliza el ReSpeaker 2-Mic Pi HAT en una Raspberry Pi Zero con tecnología Picovoice para controlar los LEDs. **Esta demostración se activa con la palabra de activación "`Picovoice`" y estará lista para realizar acciones de seguimiento, como encender y apagar LEDs, y cambiar los colores de los LEDs.**

Después de que la instalación haya terminado, escribe este comando desde la raíz del repositorio, para ejecutar la demostración en la terminal:

```sh
./demo/respeaker-rpi0/picovoice_demo_mic \
sdk/c/lib/raspberry-pi/arm11/libpicovoice.so \
resources/porcupine/lib/common/porcupine_params.pv \
resources/porcupine/resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
0.65 \
resources/rhino/lib/common/rhino_params.pv \
demo/respeaker/pvrespeakerdemo/respeaker_raspberry-pi.rhn \
0.5 \
plughw:CARD=seeed2micvoicec,DEV=0
```

### Comandos de Voz

Aquí están los comandos de voz para esta demostración:

- **Picovoice**

La demostración produce:

```txt
wake word
```

- **Enciende las luces**

Deberías ver las luces encendidas y el siguiente mensaje en la terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

La lista de comandos se muestra en la terminal:

```yaml
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

- **Picovoice, set the lights to orange**

Apagar las luces con:

- **Picovoice, turn off all lights**

**Demostración del Video de Demostración**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/X12N2Rn-q5o" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Código Fuente de la Demostración

La demostración está construida con el **[SDK de Picovoice](https://github.com/Picovoice/picovoice)**. El código fuente de la demostración está disponible en GitHub en [https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0).

### Diferentes Palabras de Activación

El [**SDK de Picovoice**](https://github.com/Picovoice/picovoice) incluye palabras de activación de muestra gratuitas licenciadas bajo Apache 2.0, incluyendo asistentes de voz principales (ej. "**`Hey Google`**", "**`Alexa`**") y divertidas como "**`Computer`**" y "**`Jarvis`**".

### Comandos de Voz Personalizados

Los comandos de iluminación están definidos por un *contexto de Voz-a-Intención* de Picovoice. Puedes diseñar y entrenar contextos escribiendo la gramática permitida usando la Consola de Picovoice. Puedes probar tus cambios en el navegador mientras editas con el botón del micrófono. Ve a la Consola de Picovoice ([https://picovoice.ai/console/](https://picovoice.ai/console/)) y regístrate para una cuenta. Usa el **editor de Voz-a-Intención Rhino** para hacer contextos, luego entrenalos para Raspberry Pi Zero.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Ejemplos de Múltiples Palabras de Activación

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Fi_IJEcNr3I" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Para demostrar la capacidad de Picovoice también hemos preparado ejemplos de múltiples palabras de activación usando ReSpeaker 2-Mic Pi HAT con Raspberry Pi Zero! Diferentes palabras de activación pueden configurarse para ejecutar ciertas tareas.

*Este paquete contiene una demostración de línea de comandos para controlar los LEDs del ReSpeaker 2-Mic Pi HAT usando Porcupine.*

### Porcupine

**Porcupine** es un motor de palabras de activación altamente preciso y liviano. Permite construir aplicaciones habilitadas por voz que siempre escuchan. Es

- usando redes neuronales profundas entrenadas en entornos del mundo real.
- compacto y computacionalmente eficiente. Es perfecto para IoT.
- multiplataforma. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64), y navegadores web
  están soportados. Adicionalmente, los clientes empresariales tienen acceso al SDK ARM Cortex-M.
- escalable. Puede detectar múltiples comandos de voz que siempre escuchan sin huella de tiempo de ejecución añadida.
- autoservicio. Los desarrolladores pueden entrenar modelos de palabras de activación personalizados usando la [Consola de Picovoice](https://picovoice.ai/console/).

#### Primeros Pasos con Múltiples Palabras de Activación

**Paso 1** Instala la librería `wiringpi` (si no la has instalado ya) escribiendo lo siguiente en la terminal.

```sh
sudo apt-get install wiringpi
```

Luego clona el repositorio de github de Picovoice:

```bash
git clone --recurse-submodules https://github.com/Picovoice/porcupine.git
cd picovoice
```

**Paso 2.** Desde la raíz del repositorio, escribe el siguiente comando en la terminal para **instalar la demostración de Porcupine para ReSpeaker 2-Mic Pi HAT**.

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/porcupine_demo_mic \
-I include/ demo/respeaker-rpi0/porcupine_demo_mic.c \
-ldl -lasound -lwiringPi
```

#### Uso de Múltiples Palabras de Activación

Ejecuta lo siguiente en la terminal desde la raíz del repositorio:

```sh
./demo/respeaker-rpi0/porcupine_demo_mic \
lib/raspberry-pi/arm11/libpv_porcupine.so \
lib/common/porcupine_params.pv \
0.65 \
plughw:CARD=seeed2micvoicec,DEV=0 \
resources/keyword_files/raspberry-pi/alexa_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/computer_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ google_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ siri_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/jarvis_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/porcupine_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/bumblebee_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/terminator_raspberry-pi.ppn
```

Wait for the demo to initialize and print `[Listening]` in the terminal. Say:

> Picovoice

The demo outputs:

```text
detected 'Picovoice'
```

Las luces ahora están configuradas en `green`. Di:

> Alexa

Las luces están configuradas en `yellow` ahora. Di:

> Terminator

para apagar las luces.

#### Palabra de Activación a Colores

A continuación se muestran los colores asociados con las palabras de activación compatibles para esta demostración:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código Fuente del Ejemplo de Múltiples Palabras de Activación

Por favor consulta el código fuente completo de este ejemplo aquí: [https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0).

### Soporte Técnico de Picovoice

Si encuentras problemas técnicos usando Picovoice, por favor visita **[Picovoice](https://github.com/Picovoice)** para discusiones.

## FAQ

**P1: Error #include "portaudio.h" al ejecutar "sudo pip install pyaudio".**

R1: Por favor ejecuta el siguiente comando para resolver el problema.

```bash
sudo apt-get install portaudio19-dev
```

**P2: ¿Cómo cambiar la fuente de Raspbian Mirrors?**

R2: Por favor consulte [Raspbian Mirrors](http://www.raspbian.org/RaspbianMirrors) y siga las siguientes instrucciones para modificar la fuente al principio.

```bash
pi@raspberrypi ~ $ sudo nano /etc/apt/sources.list
```

Por ejemplo, sugerimos usar la fuente de Tsinghua para usuarios de China. Así que por favor modifica el sources.list como se muestra a continuación.

```d
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
```
