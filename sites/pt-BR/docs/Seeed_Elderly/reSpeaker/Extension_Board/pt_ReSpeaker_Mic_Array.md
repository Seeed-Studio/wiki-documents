---
description: ReSpeaker Mic Array
title: ReSpeaker Mic Array
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Mic_Array
sku: 107010001
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_Mic_Array/
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

## Descrição

O ReSpeaker Mic Array pode ser empilhado (conectado) diretamente na parte superior do ReSpeaker Core para melhorar significativamente a experiência de interação por voz. Ele é desenvolvido com base no Smart Microphone XVSM-2000 da XMOS. A placa integra 7 microfones PDM para ajudar a aprimorar o desempenho de DSP acústico do ReSpeaker para um nível muito mais alto.

## Principais Recursos

- Captura de voz em campo distante
- Localização da fonte acústica
- Beamforming
- Supressão de ruído
- Desreverberação
- Cancelamento de eco acústico

## Especificações Técnicas

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

- XVSM-2000 com 16 núcleos internos:
  - 16 núcleos lógicos em tempo real em 2 tiles xCore.
  - Os núcleos compartilham até 2000 MIPS em modo de dupla emissão.
  - 512KB de SRAM interna de ciclo único e 2MB de flash integrada.
  - 16KB de OTP interna (máx. 8KB por tile),
  - USB PHY, totalmente compatível com a especificação USB 2.0.
  - I/O programável.
  - Fornece modo DFU.
- 7 microfones digitais:
  - úteis para reconhecimento de voz em campo distante ou localização de som.
  - ST MP34DT01-M.
  - Sensibilidade de -26 dBFS.
  - Ponto de sobrecarga acústica de 120 dBSPL.
  - Relação sinal-ruído de 61 dB.
  - Sensibilidade omnidirecional.
  - Saída PDM.
- 12 LEDs RGB:
  - 256 níveis de brilho.
  - Transmissão de dados em linha de 800kHz.
- Saída de áudio:
  - Saída auxiliar de 3,5 mm integrada.
  - WOLFSON WM8960.
  - Saída estéreo de 24 ou 16 bits a 16kHz.
  - Potência de saída de 40 mW em 16 Ω @ 3,3 V.
- Sincronização de clock：
  - PLL integrado.
  - Clock de amostragem programável para DAC, MIC.
    (Desative se o DSP for usado no XVSM-2000).
- Fonte de alimentação:
  - Alimentação de 5V via Micro USB ou conector de expansão.
- Tamanho:
  - Diâmetro de 70mm.
- Peso:
  - 15,25g

## Driver para ReSpeaker Mic Array

- Para usuários Windows, clique [aqui](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Driver) para instalar o driver
- Para usuários Linux ou Mac, não é necessário instalar o driver

## Extrair voz com ReSpeaker Core

Quando o Mic Array é empilhado sobre o ReSpeaker Core, ele será detectado (verifique com `aplay -l`) automaticamente. E recomendamos que você use nossa [respeaker_python_library](https://github.com/respeaker/respeaker_python_library) para desenvolver sua aplicação de interação por voz, de modo que você não precise se preocupar se o Mic Array está conectado ou não. Nossa biblioteca verificará isso e escolherá o Mic Array quando ele estiver conectado.

Além disso, nessa biblioteca, a [*classe Microphone*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py), que é baseada em **Pyaudio**, possui um método chamado [*listen*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py#L207), para extrair voz. Veja nosso [código de exemplo](https://github.com/respeaker/respeaker_python_library/blob/master/examples/SpeechRecognition_translator.py) aqui para uso.

## Extrair voz em PC ou Mac ou Linux ou Raspberry Pi

Aqui está um exemplo também baseado em Pyaudio:

Primeiro, você precisa executar o seguinte script para obter o número de índice do dispositivo do Mic Array:

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

Em seguida, altere `RESPEAKER_INDEX = 1` para o número de índice do seu dispositivo. Execute o script para gravar uma fala.

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

Você pode baixar firmwares do ReSpeaker Mic Array para DFU [aqui](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Firmware). Fornecemos duas versões:

- *versão xvsm* : versão inicial, gera dados de 2 canais com suporte a DSP.
- *versão raw* : gera dados brutos de microfone de 8 canais, este firmware não possui suporte a xvsm dsp, portanto não oferece suporte a algumas funções como DOA, AEC e assim por diante.

Consulte [aqui](https://github.com/respeaker/mic_array_dfu) para **atualizar o firmware no Linux**.
Consulte [aqui](https://github.com/jerryyip/respeaker_micarray_dfu_mac_linux) para **atualizar o firmware no Mac**.

## HID para controlar o ReSpeaker Mic Array

Os usuários podem controlar o ReSpeaker Mic Array via USB HID. Consulte nosso [protocolo de comunicação](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool).

Observe que, se você estiver usando a versão *raw* mais recente, poderá controlar apenas os LEDs.

E aqui está um exemplo em python:

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

### P1: Como obter a direção da fonte de áudio do Mic Array com o firmware *xvsm version*?

  Ao usar Windows, siga o [guia](https://github.com/respeaker/get_started_with_respeaker/wiki/Mic-Array) ou use nossa [ferramenta HID](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool).

  Exemplos de hidapi em Python & C estão [aqui](https://github.com/elthef/respeaker-xmos-hid)

### P2: Como usar o Audacity para extrair os dados brutos de 8 canais no Windows?

  Selecione Windows WASA, aqui está a imagem. Se você quiser alternar a versão do firmware de 0x032 para 0x082, antes de fazer isso, desinstale primeiro o seu dispositivo no gerenciador de dispositivos. Após desinstalar, atualize o firmware via DFU e reinstale o dispositivo.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/audacity.png)

### P3: Como o Mic Array se comunica com o Respeaker Core?

  O Mic Array se comunica com o Respeaker Core via USB.

### P4: O que significa VAD na ferramenta [ReSpeaker-Microphone-Array-HID-tool](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool)?

  ![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/VAD.png)

  | Dados | Grau  |
  |-------|--------|
  | 1e, 0 | 30     |
  | e, 1  | 270    |
  | d2,0  | 210    |
  | 96,0  | 150    |

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Eagle%20File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]**[ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.sch.zip)
- **[Eagle]**[ReSpeaker Microphone Array BRD](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.brd.zip)
- **[PDF]** [ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Sch.pdf)
- **[PDF]** [ReSpeaker Microphone Array PCB](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20PCB.pdf)

## Projeto

**Criar o Google Assistant em um RPi com ReSpeaker Mic Array**: Com o ReSpeaker Mic Array, agora podemos criar o Google Assistant no Raspberry Pi!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/build-google-assistant-on-rpi-with-respeaker-mic-array-1030bb/embed' width='350'></iframe>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
