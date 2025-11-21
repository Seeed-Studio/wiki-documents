---
description: El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo de micrófonos circular profesional con AEC, formación de haz, supresión de ruido y captura de voz de 360°. Emparejado con el XIAO ESP32S3, permite control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre la integración perfecta y flexibilidad de modo dual.

title: Control del reSpeaker XVF3800 con Python
keywords:
- reSpeaker
- python
- sdk
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /es/respeaker_xvf3800_python_sdk
last_update:
  date: 11/14/2025
  author: Kasun Thushara
---

## Introducción 

En esta sección, vamos a hablar sobre cómo controlar tu ReSpeaker XVF-3800 usando el SDK de Python. Hace que el desarrollo sea más conveniente para usuarios que quieren construir sus propias aplicaciones.
Por ejemplo, puedes detectar de dónde viene la voz, realizar detección de actividad de voz (VAD), controlar LEDs y mucho más.

## SDK de Python

Tenemos una guía completa de Python sobre cómo comunicarse con el XVF3800 usando el firmware USB. Este script de Python puede ejecutarse en tu IDE favorito sin requerir el **XVF_Host** del XVF3800.

Necesitas instalar la librería `pyusb`.

### Cómo obtener DOA y VAD 

```python
import sys
import struct
import usb.core
import usb.util
import time

# name, resid, cmdid, length, type
PARAMETERS = {
    "VERSION": (48, 0, 3, "ro", "uint8"),
    "AEC_AZIMUTH_VALUES": (33, 75, 16, "ro", "radians"),
    "DOA_VALUE": (20, 18, 4, "ro", "uint16"),
    "REBOOT": (48, 7, 1, "wo", "uint8"),
}

class ReSpeaker:
    TIMEOUT = 100000  # USB timeout

    def __init__(self, dev):
        self.dev = dev  # store device

    def write(self, name, data_list):
        try:
            data = PARAMETERS[name]  # get param data
        except KeyError:
            return

        if data[3] == "ro":  # check read-only
            raise ValueError('{} is read-only'.format(name))

        if len(data_list) != data[2]:  # count mismatch
            raise ValueError('{} value count is not {}'.format(name, data[2]))

        windex = data[0]  # resid index
        wvalue = data[1]  # command ID
        data_type = data[4]  # type info
        data_cnt = data[2]  # value count
        payload = []  # USB payload

        if data_type == 'float' or data_type == 'radians':  # float pack
            for i in range(data_cnt):
                payload += struct.pack(b'f', float(data_list[i]))
        elif data_type == 'char' or data_type == 'uint8':  # byte pack
            for i in range(data_cnt):
                payload += data_list[i].to_bytes(1, byteorder='little')
        else:  # int pack
            for i in range(data_cnt):
                payload += struct.pack(b'i', data_list[i])

        print("WriteCMD: cmdid: {}, resid: {}, payload: {}".format(wvalue, windex, payload))

        # send control transfer
        self.dev.ctrl_transfer(
            usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, wvalue, windex, payload, self.TIMEOUT)

    def read(self, name):
        try:
            data = PARAMETERS[name]  # get param info
        except KeyError:
            return

        resid = data[0]  # resource ID
        cmdid = 0x80 | data[1]  # read command
        length = data[2] + 1  # add status byte

        # read control transfer
        response = self.dev.ctrl_transfer(
            usb.util.CTRL_IN | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, cmdid, resid, length, self.TIMEOUT)

        if data[4] == 'uint8':  # return bytes
            result = response.tolist()
        elif data[4] == 'radians':  # unpack floats
            byte_data = response.tobytes()
            num_values = (length - 1) / 4
            match_str = '<'
            for i in range(int(num_values)):
                match_str += 'f'
            result = struct.unpack(match_str, byte_data[1:length])
        elif data[4] == 'uint16':  # return uint16 list
            result = response.tolist()

        return result  # return parsed data

    def close(self):
        usb.util.dispose_resources(self.dev)  # release device

def find(vid=0x2886, pid=0x001A):
    dev = usb.core.find(idVendor=vid, idProduct=pid)  # find device
    if not dev:
        return
    return ReSpeaker(dev)  # return instance

def main():
    dev = find()  # find device
    if not dev:
        print('No device found')
        sys.exit(1)

    print('{}: {}'.format("VERSION", dev.read("VERSION")))  # print version

    while True:
        result = dev.read("DOA_VALUE")  # read direction
        print('{}: {}, {}: {}'.format("SPEECH_DETECTED", result[3], "DOA_VALUE", result[1]))
        time.sleep(1)  # delay 1 sec

    dev.close()  # close device

if __name__ == '__main__':
    main()  # run program

```

## Usando XVF_Host 

Por favor consulta la documentación para entender qué es XVF_Host.
En esta sección, vamos a trabajar con [XVF_Host](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#cómo-controlar-respeaker-xvf3800) usando un script de Python.

### Ejemplos de Python para ReSpeaker XVF3800

:::note
Si te gustaría explorar más sobre el control vía xvf_host con scripts de Python, por favor lee este [artículo](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md).
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="windows" label="Windows">

### Para Windows

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF.git
cd reSpeakerXVF
python test.py
```

Asegúrate de que Python esté instalado y el ReSpeaker XVF3800 esté conectado vía USB.

</TabItem>

<TabItem value="rpi" label="Raspberry Pi / Linux">

### Para Raspberry Pi

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF_rpi.git
cd reSpeakerXVF_rpi
chmod +x xvf_host
python3 test.py
```

Asegúrate de que `xvf_host` sea ejecutable y tu placa esté conectada vía USB o I2C.

</TabItem>
</Tabs>

El archivo `test.py` puede explorarse de la siguiente manera. Esto es para tu referencia en Linux.

```python
import subprocess
import sys
import time

# Path to your xvf_host binary
XVF_HOST_PATH = "./xvf_host"  # Change this if xvf_host is in a different location

def run_command(*args):
    """Run a command using the xvf_host tool."""
    command = ["sudo", XVF_HOST_PATH] + list(map(str, args))
    try:
        print(f"Running: {' '.join(command)}")
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True, text=True)
        print("Output:\n", result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:\n", e.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Example: Get device version
    run_command("VERSION")
    time.sleep(0.005)

    # Example: Set LED to breath mode with orange color
    run_command("led_effect", 1)
    time.sleep(0.005)
    run_command("led_color", "0xff8800")
    time.sleep(0.005)
    run_command("led_speed", 1)
    time.sleep(0.005)
    run_command("led_brightness", 255)
    time.sleep(0.005)

    # Example: Save current configuration
    #run_command("save_configuration", 1)

    # Uncomment to clear config
    run_command("clear_configuration", 1)
    time.sleep(0.005)

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/led_2.gif" alt="pir" width={600} height="auto"/></p>





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