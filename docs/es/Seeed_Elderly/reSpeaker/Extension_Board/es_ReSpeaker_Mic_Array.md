---
description: ReSpeaker Mic Array
title: ReSpeaker Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_Mic_Array
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

## Descripción

El ReSpeaker Mic Array puede apilarse (conectarse) directamente en la parte superior del ReSpeaker Core para mejorar significativamente la experiencia de interacción por voz. Está desarrollado basándose en el micrófono inteligente XVSM-2000 de XMOS. La placa integra 7 micrófonos PDM para ayudar a mejorar el rendimiento DSP acústico del ReSpeaker a un nivel mucho más alto.

## Características Clave

- Captura de Voz de Campo Lejano
- Localización de Fuente Acústica
- Formación de Haz
- Supresión de Ruido
- Desreverberación
- Cancelación de Eco Acústico

## Especificaciones Técnicas

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

- XVSM-2000 con 16 núcleos en su interior:
  - 16 núcleos lógicos en tiempo real en 2 tiles xCore.
  - Los núcleos comparten hasta 2000 MIPS en modo de doble emisión.
  - 512KB de SRAM interna de ciclo único y 2MB de flash integrada.
  - 16KB de OTP interna (máx. 8KB por tile),
  - PHY USB, totalmente compatible con la especificación USB 2.0.
  - E/S programable.
  - Suministra modo DFU.
- 7 Micrófonos Digitales:
  - utilidad para reconocimiento de voz de campo lejano o localización de sonido.
  - ST MP34DT01-M.
  - Sensibilidad de -26 dBFS.
  - Punto de sobrecarga acústica de 120 dBSPL.
  - Relación señal-ruido de 61 dB.
  - Sensibilidad omnidireccional.
  - Salida PDM.
- 12 LEDs RGB:
  - 256 niveles de brillo.
  - Transmisión de datos de línea de 800kHz.
- Salida de audio:
  - Salida Aux de 3.5mm en la placa.
  - WOLFSON WM8960.
  - Salida estéreo de 24 o 16 bits a 16kHz.
  - 40 mW de potencia de salida en 16 Ω @ 3.3 V.
- Sincronización de Reloj:
  - PLL en la placa.
  - Reloj de muestra programable para DAC, MIC.
    (Deshabilitado si se usa DSP en XVSM-2000).
- Fuente de alimentación:
  - Suministro de 5V desde Micro USB o cabecera de expansión.
- Tamaño:
  - Diámetro 70mm.
- Peso:
  - 15.25g

## Controlador para ReSpeaker Mic Array

- Para usuarios de Windows, haga clic [aquí](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Driver) para instalar el controlador
- Para usuarios de Linux o Mac, no es necesario instalar el controlador

## Extraer voz con ReSpeaker Core

Cuando el Mic Array está apilado en el ReSpeaker Core, será detectado automáticamente (verificar con `aplay -l`). Y recomendamos que puedas usar nuestra [respeaker_python_library](https://github.com/respeaker/respeaker_python_library) para desarrollar tu aplicación de interacción por voz para que no necesites preocuparte por si el Mic Array está encendido o no. Nuestra biblioteca verificará esto y elegirá el Mic Array cuando esté encendido.

También, en esa biblioteca, [*class Microphone*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py), que está basada en **Pyaudio**, tiene un método llamado [*listen*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py#L207), para extraer voz. Ve nuestro [código de ejemplo](https://github.com/respeaker/respeaker_python_library/blob/master/examples/SpeechRecognition_translator.py) aquí para su uso.

## Extraer voz en PC o Mac o Linux o Raspberry Pi

Aquí hay un ejemplo también basado en Pyaudio:

Primero, necesitas ejecutar el siguiente script para obtener el número de índice del dispositivo del Mic Array:

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

Luego, cambia `RESPEAKER_INDEX = 1` a tu número de índice. Ejecuta el script para grabar un discurso.

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 2
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 1
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## Firmwares para ReSpeaker Mic Array

Puedes descargar los firmwares de ReSpeaker Mic array para DFU [aquí](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Firmware). Hemos proporcionado dos versiones:

- *versión xvsm* : versión inicial, produce datos de 2 canales con soporte dsp.
- *versión raw* : produce datos en bruto de 8 canales de micrófono, este firmware no tiene soporte xvsm dsp, por lo que no admite algunas funciones como DOA, AEC y demás.

Por favor consulta [aquí](https://github.com/respeaker/mic_array_dfu) para **actualizar firmware en Linux**.
Por favor consulta [aquí](https://github.com/jerryyip/respeaker_micarray_dfu_mac_linux) para **actualizar firmware en Mac**.

## HID para controlar ReSpeaker Mic Array

Los usuarios pueden controlar ReSpeaker Mic Array a través de USB HID. Por favor consulta nuestro [Protocolo de comunicación](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool).

Ten en cuenta que si estás usando la última *versión raw*, solo puedes controlar los LEDs.

Y aquí hay un ejemplo en python :

```python
#!/usr/bin/env python

import respeaker.usb_hid as usb_hid

class MicArray:
    def __init__(self):
        self.hid = usb_hid.get()

    def write(self, address, data):
        data = self.to_bytearray(data)
        length = len(data)
        if self.hid:
            packet = bytearray([address & 0xFF, (address >> 8) & 0x7F, length & 0xFF, (length >> 8) & 0xFF]) + data
            packet = list(packet)
            self.hid.write(packet)

    def read(self, address, length):
        self.hid.write(list(bytearray([address & 0xFF, (address >> 8) & 0xFF | 0x80, length & 0xFF, (length >> 8) & 0xFF])))
        for _ in range(6):
            data = self.hid.read()
            # print [int(x) for x in data]
            # skip VAD data
            if int(data[0]) != 0xFF and int(data[1]) != 0xFF:
                return data[4:(4 + length)]

    @staticmethod
    def to_bytearray(data):
        if type(data) is int:
            array = bytearray([data & 0xFF])
        elif type(data) is bytearray:
            array = data
        elif type(data) is str:
            array = bytearray(data)
        elif type(data) is list:
            array = bytearray(data)
        else:
            raise TypeError('%s is not supported' % type(data))
        return array

def main():
    import sys
    import struct

    mic = MicArray()

    print("Using: %s" % usb_hid.usb_backend)

    if len(sys.argv) < 3:
        print('Usage: python {} w 0x0 0x000003'.format(sys.argv[0]))
        sys.exit(1)

    try:
        if sys.argv[2].startswith('0x'):
            address = int(sys.argv[2], 16)
        else:
            address = int(sys.argv[2])

        if sys.argv[1] == 'w':
            if sys.argv[3].startswith('0x'):
                data = int(sys.argv[3], 16)
            else:
                data = int(sys.argv[3])

            if data > 0xFFFF:
                data = struct.pack('<I', data)
            elif data > 0xFF:
                data = struct.pack('<H', data)

            mic.write(address, data)
        else:
            print [int(x) for x in mic.read(address, 4)]
    except Exception as e:
        print(e.message)

if __name__ == '__main__':
    main()
```

## FAQ

### P1: ¿Cómo obtener la dirección de la fuente de audio desde Mic Array con firmware *versión xvsm*?

  Cuando uses Windows, sigue la [guía](https://github.com/respeaker/get_started_with_respeaker/wiki/Mic-Array) o usa nuestra [herramienta HID](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool).

  Los ejemplos de hidapi en Python y C están [aquí](https://github.com/elthef/respeaker-xmos-hid)

### P2: ¿Cómo usar audacity para extraer los datos sin procesar de 8 canales en Windows?

  Por favor selecciona Windows WASA, aquí está la imagen. Si quieres cambiar la versión del firmware de 0x032 a 0x082, antes de hacerlo, por favor desinstala tu dispositivo en
el administrador de dispositivos primero. después de desinstalar, actualiza el firmware vía DFU y reinstala el dispositivo.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/audacity.png)

### P3: ¿Cómo se comunica Mic array con Respeaker Core?

  Mic array se comunica con Respeaker Core a través de USB.

### P4: ¿Qué significa VAD en [ReSpeaker-Microphone-Array-HID-tool](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool)?

  ![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/VAD.png)

  | Datos | Grados |
  |-------|--------|
  | 1e, 0 | 30     |
  | e, 1  | 270    |
  | d2,0  | 210    |
  | 96,0  | 150    |

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Eagle%20File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]**[ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.sch.zip)
- **[Eagle]**[ReSpeaker Microphone Array BRD](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.brd.zip)
- **[PDF]** [ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Sch.pdf)
- **[PDF]** [ReSpeaker Microphone Array PCB](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20PCB.pdf)

## Proyecto

**Construir Google Assistant en RPi con ReSpeaker Mic Array**: ¡Con ReSpeaker Mic Array, ahora podemos construir Google Assistant en Raspberry Pi!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/build-google-assistant-on-rpi-with-respeaker-mic-array-1030bb/embed' width='350'></iframe>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
