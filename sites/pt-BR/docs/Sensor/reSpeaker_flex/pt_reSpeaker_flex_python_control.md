---
description: reSpeaker Flex é um poderoso sistema de voz modular com XMOS XVF3800, com matrizes de 4 microfones circulares e lineares intercambiáveis para captura de áudio 360° ou direcional precisa — perfeito para robótica e dispositivos inteligentes.
title: Controle do reSpeaker Flex com Python
keywords:
  - reSpeaker flex
  - xvf3800
  - python
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg
slug: /respeaker_flex_python_control
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/10/2026
  author: Kasun Thushara
createdAt: '2026-04-10'
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_python_control/
---

## Introdução 

Nesta seção, vamos falar sobre como controlar seu reSpeaker Flex usando o SDK em Python. Isso torna o desenvolvimento mais conveniente para usuários que desejam criar suas próprias aplicações.
Por exemplo, você pode detectar de onde a voz está vindo, realizar detecção de atividade de voz (VAD), controlar LEDs e muito mais.

## SDK em Python

Temos um guia completo em Python sobre como se comunicar com o Flex usando o firmware USB. Este script em Python pode ser executado na sua IDE favorita sem exigir o Flex **XVF_Host**. Você pode encontrar mais comandos neste [link](https://github.com/respeaker/reSpeaker_Flex/tree/main/python_control).

Você precisa instalar a biblioteca `pyusb`.

### Como obter DOA e VAD 

```python

import sys
import struct
import argparse
import usb.core
import usb.util
import time

try:
    import libusb_package
except ImportError:
    libusb_package = None

DEFAULT_VID = 0x2886

# name, resid, cmdid, length, type
PARAMETERS = {
    "VERSION": (48, 0, 3, "ro", "uint8"),
    "AEC_AZIMUTH_VALUES": (33, 75, 16, "ro", "radians"),
    "DOA_VALUE": (20, 18, 4, "ro", "uint16"),
    "REBOOT": (48, 7, 1, "wo", "uint8"),
}

class ReSpeaker:
    TIMEOUT = 100000

    def __init__(self, dev):
        self.dev = dev

    def write(self, name, data_list):
        try:
            data = PARAMETERS[name]
        except KeyError:
            return

        if data[3] == "ro":
            raise ValueError('{} is read-only'.format(name))

        if len(data_list) != data[2]:
            raise ValueError('{} value count is not {}'.format(name, data[2]))

        windex = data[0] # resid
        wvalue = data[1] # cmdid
        data_type = data[4] # type
        data_cnt = data[2] # cnt
        payload = []

        if data_type == 'float' or data_type == 'radians':
            for i in range(data_cnt):
                payload += struct.pack(b'f', float(data_list[i]))
        elif data_type == 'char' or data_type == 'uint8':
            for i in range(data_cnt):
                payload += data_list[i].to_bytes(1, byteorder='little')
        else:
            for i in range(data_cnt):
                payload += struct.pack(b'i', data_list[i])

        print("WriteCMD: cmdid: {}, resid: {}, payload: {}".format(wvalue, windex, payload))

        self.dev.ctrl_transfer(
            usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, wvalue, windex, payload, self.TIMEOUT)


    def read(self, name):
        try:
            data = PARAMETERS[name]
        except KeyError:
            return

        resid = data[0]
        cmdid = 0x80 | data[1]
        length = data[2] + 1 # 1 byte for status

        response = self.dev.ctrl_transfer(
            usb.util.CTRL_IN | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, cmdid, resid, length, self.TIMEOUT)

        if data[4] == 'uint8':
            result = response.tolist()
        elif data[4] == 'radians':
            byte_data = response.tobytes()
            num_values = ( length - 1 ) / 4
            match_str = '<'
            for i in range(int(num_values)):
                match_str += 'f'
            result = struct.unpack(match_str, byte_data[1:length])
        elif data[4] == 'uint16':
            result = response.tolist()

        return result

    def close(self):
        """
        close the interface
        """
        usb.util.dispose_resources(self.dev)


def find(vid=DEFAULT_VID, pid=None):
    if sys.platform.startswith('win') and libusb_package is None:
        raise RuntimeError("Windows requires libusb-package. Install it with: pip install libusb-package")

    usb_find = libusb_package.find if sys.platform.startswith('win') else usb.core.find

    if pid is not None:
        dev = usb_find(idVendor=vid, idProduct=pid)
        if not dev:
            return None
        return ReSpeaker(dev)

    devices = list(usb_find(find_all=True, idVendor=vid) or [])
    if not devices:
        return None

    devices.sort(key=lambda device: getattr(device, 'idProduct', 0))
    return ReSpeaker(devices[0])

def main():
    parser = argparse.ArgumentParser(description='Read DoA values from ReSpeaker over USB control interface')
    parser.add_argument('--vid', type=lambda x: int(x, 0), default=DEFAULT_VID,
                        help='usb vendor ID (default: 0x2886)')
    parser.add_argument('--pid', type=lambda x: int(x, 0), default=None,
                        help='usb product ID; if omitted, auto-discover by VID for compatibility across firmware PIDs')
    parser.add_argument('--interval', type=float, default=1.0,
                        help='read interval in seconds (default: 1.0)')

    args = parser.parse_args()

    dev = find(vid=args.vid, pid=args.pid)
    if not dev:
        if args.pid is None:
            print(f'No device found for VID=0x{args.vid:04x}')
        else:
            print(f'No device found for VID=0x{args.vid:04x}, PID=0x{args.pid:04x}')
        sys.exit(1)

    print(f'Connected device VID=0x{dev.dev.idVendor:04x}, PID=0x{dev.dev.idProduct:04x}')
    print('{}: {}'.format("VERSION", dev.read("VERSION")))
    while True:
        result = dev.read("DOA_VALUE")
        print(result)
        print('{}: {}, {}: {}'.format("SPEECH_DETECTED", result[3], "DOA_VALUE", result[1] + result[2] * 256))
        time.sleep(args.interval)

    dev.close()

if __name__ == '__main__':
    main()

```




## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>