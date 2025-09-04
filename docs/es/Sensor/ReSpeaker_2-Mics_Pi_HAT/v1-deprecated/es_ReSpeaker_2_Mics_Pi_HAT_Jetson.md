---
description: Comenzando con Nvidia Jetson
title: Comenzando con Nvidia Jetson
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_2_Mics_Pi_HAT_Jetson
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

:::caution
Esta wiki está escrita para ReSpeaker 2-Mics Pi HAT **v1**, para distinguir los dispositivos v1 y v2, consulte [Cómo distinguir las revisiones de hardware de ReSpeaker 2-Mics Pi HAT](/es/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

### Instalación y configuración del controlador

**1. Conectar ReSpeaker 2-Mics Pi HAT a Jetson Nano**

Monte ReSpeaker 2-Mics Pi HAT en su Jetson Nano, asegúrese de que los pines estén correctamente alineados al apilar el ReSpeaker 2-Mics Pi HAT.

Conexión Jetson Nano

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

**2. Configurar el controlador en Jetson Nano**

Asegúrese de que esté ejecutando [la imagen más reciente del SO de Jetson Nano](https://developer.nvidia.com/embedded/downloads) en su dispositivo. *(actualizada el 2021.07.03)*

:::note
Esto está probado para JetPack 4.5.1. Para otras versiones, necesitará verificar el número de versión de los encabezados del kernel con ```ls /usr/src/linux-headers-*```
:::

**PASO 1.** Clonar el repositorio

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd ~/seeed-linux-dtoverlays
```

**PASO 2.** Construir dtbo y controlador

```sh
export CUSTOM_MOD_FILTER_OUT="lis3lv02d mcp25xxfd gt9xx seeed-voicecard"
KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make all_jetsonnano
```

**PASO 3.** Instalar el Controlador

```sh
sudo -E KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make install_jetsonnano
```

**PASO 4.** Instalar dtbo

```sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed Voice Card 2MIC"
```

**PASO 5.** Reiniciar

```sh
sudo reboot
```

**PASO 6.** Restaurar la configuración de widgets de Alsa

:::note
        Debe esperar un momento mientras la tarjeta de sonido está ocupada después del inicio de sesión.
:::

```sh
cd ~/seeed-linux-dtoverlays
alsactl -f extras/wm8960_asound.state-jetson-nano restore 1
```

**PASO 7.**  Verifica que el nombre de la tarjeta de sonido coincida con el código fuente seeed-voicecard mediante el comando ```aplay -l``` y ```arecord -l```.

```
jetson@jetson:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: tegrahda [tegra-hda], device 3: HDMI 0 [HDMI 0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 0/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0


jetson@jetson:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

- Paso 3. Prueba, escucharás lo que digas a los micrófonos (no olvides conectar un auricular o un altavoz):

```
arecord -f cd -Dhw:1 test.wav
aplay -Dhw:1 test.wav
```

o (para reproducir el sonido del micrófono inmediatamente a los altavoces/auriculares):

```sh
arecord -D hw:1,0 -f S32_LE -r 48000 -c 2 | aplay -D hw:1,0 -f S32_LE -r 48000 -c 2
```

**Nota:** -Dhw:1 es el número del dispositivo de grabación (o reproducción), dependiendo de tu sistema este número puede diferir.

## Resumen de uso

Para ejecutar los siguientes ejemplos, clona el repositorio [https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) en tu Jetson Nano

```
git clone https://github.com/respeaker/mic_hat.git
```

Todos los scripts de Python mencionados en los ejemplos a continuación se pueden encontrar dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta del repositorio mic_hat, ejecuta

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install Jetson.GPIO spidev pyaudio
```

**LEDs APA102**

Cada LED APA102 integrado tiene un chip controlador adicional. El chip controlador se encarga de recibir el color deseado a través de sus líneas de entrada, y luego mantener este color hasta que se reciba un nuevo comando.

```
python3 interfaces/pixels.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker/img/IMG_20210703_125819.jpg"/></div>

### Grabar sonido con Python

Usamos la [biblioteca de Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el número de índice del dispositivo del 2 Mic pi hat:

```
python3 recording_examples/get_device_index.py
```

Verás el ID del dispositivo como se muestra a continuación.

```
Input Device id  1  -  tegra-snd-t210ref-mobile-rt565x: - (hw:1,1)
```

Para grabar el sonido, abre el archivo ```recording_examples/record.py``` con nano u otro editor de texto y cambia `RESPEAKER_INDEX = 1` al número de índice del ReSpeaker en tu sistema. Luego ejecuta el script de python record.py para hacer una grabación:

```
python3 recording_examples/record.py
```

Si quieres extraer datos del canal 0 de 2 canales, echa un vistazo al contenido de ```record_one_channel.py```. Para otro canal X, por favor cambia [0::2] a [X::2].

```
python3 recording_examples/record_one_channel.py
```

Para reproducir las muestras grabadas puedes usar la utilidad del sistema aplay, por ejemplo

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
```
