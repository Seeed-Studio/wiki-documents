---
description: Comenzando con Raspberry Pi
title: Comenzando con Raspberry Pi
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /es/respeaker_2_mics_pi_hat_raspberry_v2
last_update:
  date: 04/18/2025
  author: Jiahao
---

:::caution
Esta wiki está escrita para ReSpeaker 2-Mics Pi HAT **v2**, para distinguir los dispositivos v1 y v2, consulte [Cómo Distinguir las Revisiones de Hardware de ReSpeaker 2-Mics Pi HAT](/es/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

En el último Raspberry Pi OS, el método tradicional de instalación de controladores (para dispositivos v1) ya no está disponible y puede llevar a los siguientes problemas conocidos:

- El entorno de escritorio puede corromperse después de la instalación.
- El dispositivo ReSpeaker puede no ser detectado por `aplay` / `arecord`.

Por lo tanto, hemos relanzado una nueva wiki sobre este problema, si está usando el Raspberry Pi OS más moderno en lugar de versiones anteriores, siga estos pasos para hacer funcionar su ReSpeaker.

## Instalación y configuración del controlador

### 1. Conectar ReSpeaker 2-Mics Pi HAT a Raspberry Pi

Monte ReSpeaker 2-Mics Pi HAT en su Raspberry Pi, asegúrese de que los pines estén correctamente alineados al apilar el ReSpeaker 2-Mics Pi HAT.

Conexión Raspberry Pi

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Conexión Raspberry Pi Zero

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

### 2. Configurar el controlador en Raspberry Pi

Asegúrese de que está ejecutando [el último Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/) en su Pi. *(actualizado el 2024.11.19)*
<details>
<summary style={{ color: 'red' }}>Preparar para Raspberry Pi Zero W</summary>

```sh
## Install kernel 
sudo apt install flex bison libssl-dev bc build-essential libncurses5-dev libncursesw5-dev linux-headers-6.6.51+rpt-rpi-v6
git clone --depth=1 --branch rpi-6.6.y https://github.com/raspberrypi/linux.git

## Make target directory
mkdir ~/tlv320aic3x_i2c_driver
cd ~/tlv320aic3x_i2c_driver
## Copy code
cp ~/linux/sound/soc/codecs/tlv320aic3x.c ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x.h ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x-i2c.c ~/tlv320aic3x_i2c_driver/
## Modify Makefile
nano Makefile
-------------------
obj-m += snd-soc-tlv320aic3x-i2c.o
snd-soc-tlv320aic3x-i2c-objs := tlv320aic3x.o tlv320aic3x-i2c.o

KDIR := /lib/modules/$(shell uname -r)/build
PWD := $(shell pwd)

all:
        $(MAKE) -C $(KDIR) M=$(PWD) modules

clean:
        $(MAKE) -C $(KDIR) M=$(PWD) clean

install:
        sudo cp snd-soc-tlv320aic3x-i2c.ko /lib/modules/$(shell uname -r)/kernel/sound/soc/codecs/
        sudo depmod -a

-------------------

## Compile the driver 
make
sudo make install
sudo modprobe snd-soc-tlv320aic3x-i2c

## Check logs
lsmod | grep tlv320
dmesg | grep tlv320

```

</details>

- Paso 1: Obtener el Device Tree Source (DTS) para el ReSpeaker 2-Mics Pi HAT (V2.0), compilarlo e instalar el device tree overlay.

```bash
curl https://raw.githubusercontent.com/Seeed-Studio/seeed-linux-dtoverlays/refs/heads/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dts
dtc -I dts respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dtbo
sudo dtoverlay respeaker-2mic-v2_0-overlay.dtbo
sudo cp respeaker-2mic-v2_0-overlay.dtbo /boot/firmware/overlays
```

- Paso 2: Edita `/boot/firmware/config.txt` y añade las siguientes líneas:

```
dtoverlay=respeaker-2mic-v2_0-overlay
dtoverlay=i2s-mmap
```

> **Nota:** Si tu versión del kernel es mayor que 4.0, no necesitas añadir `dtoverlay=i2s-mmap`.

![config example](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/dtoverlays.png)

- Paso 3: Reinicia tu Pi.

```bash
sudo reboot
```

- Paso 4: Verificar si el dispositivo es detectado por `aplay` / `arecord`.

La salida esperada para `aplay` debería ser:

```
$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

La salida esperada para `arecord` debería ser:

```
$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**Donde `card 2` es el índice del ReSpeaker 2-Mics Pi HAT, dependiendo de tu sistema este número puede diferir. Para acceder al ReSpeaker en este ejemplo, puedes usar `arecord -D plughw:2,0` o `aplay -D plughw:2,0`.**

### 3. Configurar ajustes de sonido y ajustar el volumen con alsamixer

`alsamixer` es un programa mezclador de interfaz de usuario de terminal para la Arquitectura de Sonido Avanzada de Linux (ALSA) que se usa para configurar ajustes de sonido y ajustar el volumen.

```bash
alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

Las teclas de flecha izquierda y derecha se utilizan para seleccionar el canal o dispositivo y las flechas arriba y abajo controlan el volumen del dispositivo actualmente seleccionado. Salga del programa con ALT+Q, o presionando la tecla Esc. [Más información](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    Por favor use F6 para seleccionar primero el dispositivo seeed-2mic-voicecard.
:::

## Resumen de uso

Para comenzar, clone el repositorio [https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) en su Raspberry Pi.

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

Todos los scripts de Python mencionados en los ejemplos a continuación se pueden encontrar dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta del repositorio mic_hat, ejecuta

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### LEDs APA102

Para usar los LEDs, necesitas habilitar primero la interfaz SPI. Para habilitar la interfaz SPI, abre la herramienta de configuración de software de Raspberry Pi:

```bash
sudo raspi-config
```

Elige "3 Interface Options" -> "I4 SPI" para habilitar la interfaz SPI. Luego reinicia tu Raspberry Pi.

```bash
sudo reboot
```

Cada LED APA102 integrado tiene un chip controlador adicional. El chip controlador se encarga de recibir el color deseado a través de sus líneas de entrada, y luego mantener este color hasta que se reciba un nuevo comando.

```bash
cd mic_hat
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
</video>

### Botón de Usuario

Hay un Botón de Usuario integrado, que está conectado al GPIO_17.

:::caution
    El código de demostración del repositorio no está disponible para Raspberry Pi 5 debido a la incompatibilidad de `RPI.GPIO`. Pero hemos proporcionado un código de demostración alternativo para Raspberry Pi 5 usando la librería `gpiozero`.
:::

#### Dispositivo que no es Raspberry Pi 5

Ejecuta el script de ejemplo del repositorio que clonaste en el Paso 4, y debería mostrar "on" cuando presiones el botón:

```txt
$ python3 button.py
off
off
on
on
off
```

#### Dispositivo Raspberry Pi 5

Copia el siguiente código y guárdalo en `~/button.py`:

```python
from gpiozero import DigitalInputDevice
from time import sleep

def main():
    pin = DigitalInputDevice(pin=17, pull_up=True)
    try:
        while True:
            print("on" if pin.value == 1 else "off")
            sleep(1)
    finally:
        pin.close()

if __name__ == '__main__':
    main()
```

También debería mostrar "on" cuando presiones el botón:

```bash
$ python3 ~/button.py
off
on
on
off
on
off
```

:::note
No funciona en un entorno virtual, necesitas salir de él primero:

```bash
deactivate
python3 ~/button.py
```

:::

### Grabar sonido con Python

Usamos la [biblioteca de Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el número de índice del dispositivo del ReSpeaker:

```bash
cd mic_hit
python3 recording_examples/get_device_index.py
```

Verás el ID del dispositivo como se muestra a continuación.

```bash
Input Device id  1  -  seeed2micvoicec: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 (hw:2,0)
```

Para grabar el sonido, abre el archivo ```recording_examples/record.py``` con `nano`, `vim` u otro editor de texto y cambia `RESPEAKER_INDEX = 2` al número de índice del ReSpeaker en tu sistema. Luego ejecuta el script de python `record.py` para hacer una grabación:

```bash
python3 recording_examples/record.py
```

Si quieres extraer datos del canal 0 de 2 canales, echa un vistazo al contenido de ```record_one_channel.py```. Para otro canal X, por favor cambia [0::2] a [X::2].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproducir las muestras grabadas puedes usar la utilidad del sistema aplay, por ejemplo

```bash
aplay -f cd -D hw:2,0 output.wav # for Stereo sound
aplay -D plughw:2,0 output_one_channel.wav #for Mono sound from one channel
```

Alternativamente puedes usar el script recording_examples/play.py para reproducir los archivos .wav con PyAudio.

```bash
python3 recording_examples/play.py path-to-wav-file
```

¡Asegúrate de especificar el índice correcto del dispositivo de salida en play.py - de lo contrario PyAudio se congelará!

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
