---
description: Matriz de Microfones USB ReSpeaker
title: reSpeaker USB Mic Array
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker-USB-Mic-Array
sku: 107990193
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker-USB-Mic-Array/
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/ReSpeaker-USB-Mics-box-preview.jpg)

:::important 
Este produto atingiu o status de fim de vida (EOL).
Se você está planejando comprar ou iniciar um novo projeto, recomendamos fortemente usar o [**XVF3000**](https://wiki.seeedstudio.com/pt-br/respeaker_mic_array_v3.0/), a alternativa mais nova e com suporte.
Ele não é mais fabricado nem mantido ativamente.
:::

Um dispositivo de captação de voz pronto para uso é a voz do cliente.

No último ano, o [Respeaker Mic Array V2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) foi vendido em mais de 10 mil unidades no formato de placa de desenvolvimento. Os clientes continuam solicitando um dispositivo completo com gabinete, o que é desafiador para eles projetarem, considerando os princípios acústicos.

E aqui a Seeed fornece a resposta com o ReSpeaker USB Mic Array:

- Um dispositivo pronto para uso com uma estrutura acústica bem projetada traz flexibilidade para o cliente integrá-lo em sua solução.
- Gabinete injetado em molde disponível, economizando tempo para ir ao mercado e o custo do molde.

A diferença entre a PCBA dentro do ReSpeaker USB Mic Array e o Respeaker Mic Array V2.0:

- Circuito de alimentação otimizado
- Mover o conector de áudio e a porta micro USB para a parte traseira.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Captação de voz em campo distante
- Suporta USB Audio Class 1.0 (UAC 1.0)
- Matriz de quatro microfones
- 12 indicadores LED RGB programáveis
- Algoritmos e recursos de fala
  - Detecção de Atividade de Voz
  - Direção de Chegada
  - Formação de Feixe (Beamforming)
  - Supressão de Ruído
  - Desreverberação
  - Cancelamento de Eco Acústico

## Especificações

- XVF-3000 da XMOS
- 4 microfones digitais de alto desempenho
- Suporta Captação de Voz em Campo Distante
- Algoritmo de fala em chip
- 12 indicadores LED RGB programáveis  
- Microfones: ST MP34DT01TR-M  
- Sensibilidade: -26 dBFS (Omnidirecional)  
- Ponto de sobrecarga acústica: 120 dBSPL  
- SNR: 61 dB  
- Fonte de Alimentação: 5V DC pela Micro USB
- Dimensões: 70mm (Diâmetro)  
- Conector de saída de áudio de 3,5 mm
- Consumo de energia: 5V, 180mA com LED ligado e 170mA com LED desligado
- Taxa Máxima de Amostragem: 16Khz

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/ReSpeaker-Mic-Array-v2.1/img/hardware_overview.jpg)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000:**
Integra algoritmos DSP avançados que incluem Cancelamento de Eco Acústico (AEC), formação de feixe, desreverberação, supressão de ruído e controle de ganho.

- **<font face="" size="3" font color="ff0000">②</font> Microfone Digital:**
O MP34DT01-M é um microfone digital MEMS omnidirecional, de baixíssimo consumo e ultracompacto, construído com um elemento sensor capacitivo e uma interface CI.

- **<font face="" size="3" font color="ff0000">③</font> LED RGB:**
LED RGB de três cores.

- **<font face="" size="3" font color="ff0000">④</font> Porta USB:**
Fornece energia e controla a matriz de microfones.

- **<font face="" size="3" font color="ff0000">⑤</font> Conector de fone de ouvido de 3,5 mm:**
Saída de áudio. Podemos conectar caixas de som ativas ou fones de ouvido a esta porta.

- **<font face="" size="3" font color="ff0000">⑥</font> WM8960:**
O WM8960 é um codec estéreo de baixo consumo com drivers de alto-falante classe D capazes de fornecer 1 W por canal em cargas de 8 W.

**Diagrama do Sistema**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/system_diag.png)

## Aplicações

- Captura de Voz via USB
- Caixa de Som Inteligente
- Sistemas de Assistente de Voz Inteligente
- Gravadores de Voz
- Sistema de Conferência por Voz
- Equipamentos de Comunicação para Reuniões
- Robô de Interação por Voz
- Assistente de Voz para Carro
- Outros Cenários de Interface por Voz

## Primeiros Passos

:::note
O ReSpeaker USB Mic Array é compatível com sistemas Windows, Mac, Linux e Android. Os scripts abaixo foram testados no Python2.7.
:::

### Atualizar Firmware

Aqui está a tabela com as diferenças.

| Firmware                           | Canais  | Observação                                                                                     |
|------------------------------------|----------|-----------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin             | 1        | áudio processado para ASR                                                                     |
| 6_channels_firmware.bin            | 6        | canal 0: áudio processado para ASR, canal 1-4: dados brutos dos 4 microfones, canal 5: reprodução（firmware de fábrica） |

**Para Linux:**  A matriz de microfones suporta USB DFU. Desenvolvemos um script em Python dfu.py para atualizar o firmware via USB.

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 6_channels_firmware.bin  # The 6 channels version 

# if you want to use 1 channel,then the command should be like:

sudo python dfu.py --download 1_channel_firmware.bin

```

Aqui está o resultado do download do firmware.
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**Para Windows/Mac:** Não recomendamos usar Windows/Mac e máquina virtual Linux para atualizar o firmware.

### Demo Pronto para Uso

Aqui está o exemplo de Cancelamento de Eco Acústico com o firmware de 6 canais.

- Passo 1. Conecte o cabo USB ao PC e o conector de áudio ao alto-falante.

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/_DAS5930.jpg)

- Passo 2. Selecione o mic array v2.1 como dispositivo de saída no PC.
- Passo 3. Inicie o Audacity para gravar.
- Passo 4. Primeiro reproduza música no PC e então fale.
- Passo 5. Veremos a tela do Audacity como abaixo. Clique em **Solo** para ouvir o áudio de cada canal.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

Áudio do Canal 0 (processado por algoritmos):

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg"></source>
</audio>

Áudio do Canal 1 (dados brutos do Mic1):

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg"></source>
</audio>

Áudio do Canal 5 (dados de reprodução):

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg"></source>
</audio>

Aqui está o vídeo sobre DOA e AEC.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/gGVQ-9f7azs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Instalar Driver de Controle de DFU e LED  

- **Windows:** A gravação e reprodução de áudio funcionam bem por padrão. O driver Libusb-win32 só é necessário para controlar os LEDs e parâmetros do DSP no Windows. Utilizamos [uma ferramenta prática - Zadig](http://zadig.akeo.ie/) para instalar o driver libusb-win32 tanto para `SEEED DFU` quanto para `SEEED Control` (o ReSpeaker Mic Array possui 2 dispositivos no Gerenciador de Dispositivos do Windows).

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    Certifique-se de que libusb-win32 esteja selecionado, e não WinUSB ou libusbK.
:::

- **MAC:** Nenhum driver é necessário.
- **Linux:** Nenhum driver é necessário.

### Ajuste Fino

**Para Linux/Mac/Windows:** Podemos configurar alguns parâmetros dos algoritmos integrados.

- Obtenha a lista completa de parâmetros; para mais informações, consulte o FAQ.

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- Exemplo nº 1, podemos desativar o Controle Automático de Ganho (AGC):

```
sudo python tuning.py AGCONOFF 0
```

- Exemplo nº 2, podemos verificar o ângulo DOA.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### Controlar os LEDs

Podemos controlar os LEDs do ReSpeaker USB Mic Array através de USB. O dispositivo USB possui uma Interface de Classe Específica do Fornecedor que pode ser usada para enviar dados através de Transferência de Controle USB. Fazemos referência à [biblioteca python pyusb](https://github.com/pyusb/pyusb) e criamos a [biblioteca python usb_pixel_ring](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py).

O comando de controle do LED é enviado pela função ctrl_transfer() de pyusb em usb.core.Device; seus parâmetros são os seguintes：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

Aqui estão as APIs de usb_pixel_ring.

| Comando | Dados                          | API                            | Observação                                                                                                        |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | modo trace, LEDs mudam dependendo de VAD* e DOA*                                                                 |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | modo mono, define todos os LEDs RGB para uma única cor, por exemplo Red(0xFF0000), Green(0x00FF00)， Blue(0x0000FF)         |
| 2       | [0]                            | pixel_ring.listen()            | modo listen, semelhante ao modo trace, mas não desliga os LEDs                                                   |
| 3       | [0]                            | pixel_ring.speak()             | modo de espera                                                                                                   |
| 4       | [0]                            | pixel_ring.think()             | modo speak                                                                                                       |
| 5       | [0]                            | pixel_ring.spin()              | modo spin                                                                                                        |
| 6       | [r, g, b, 0] * 12              | pixel_ring.customize()         | modo custom, define cada LED com sua própria cor                                                                 |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | define o brilho, intervalo: 0x00~0x1F                                                                            |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | define a paleta de cores, por exemplo, pixel_ring.set_color_palette(0xff0000, 0x00ff00) junto com pixel_ring.think() |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | define o LED central: 0 - desligado, 1 - ligado, outro valor - depende de VAD                                   |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | mostra o volume, intervalo: 0 ~ 12                                                                               |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | define o padrão, 0 - padrão Google Home, outros - padrão Echo                                                    |

**Para Linux:** Aqui está o exemplo para controlar os LEDs. Siga os comandos abaixo para executar a demonstração.

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

Aqui está o código do usb_mic_array.py.

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
    while True:

        try:
            pixel_ring.wakeup()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.speak()
            time.sleep(6)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break


    pixel_ring.off()
    time.sleep(1)

```

**Para Windows/Mac:** Aqui está o exemplo para controlar os LEDs.

- Passo 1. Baixe o pixel_ring.

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- Passo 2. Crie um [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py) com o código abaixo e execute 'python led_control.py'

```python
from usb_pixel_ring_v2 import PixelRing
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
print dev
if dev:
    pixel_ring = PixelRing(dev)

    while True:
        try:
            pixel_ring.wakeup(180)
            time.sleep(3)
            pixel_ring.listen()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.set_volume(8)
            time.sleep(3)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break

    pixel_ring.off()
```

:::note
    Se você vir "None" impresso na tela, reinstale o driver libusb-win32.
:::

### DOA (Direction of Arrival)

**Para Windows/Mac/Linux:** Aqui está o exemplo para visualizar o DOA. O LED verde é o indicador da direção da voz. Para o ângulo, consulte a visão geral de hardware.  

- Passo 1. Baixe o usb_4_mic_array.

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- Passo 2. Crie um [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py) com o código abaixo na pasta usb_4_mic_array e execute 'sudo python DOA.py'

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)

if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.direction
    while True:
        try:
            print Mic_tuning.direction
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- Passo 3. Veremos o DOA como abaixo.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python doa.py 
184
183
175
105
104
104
103
```

### VAD (Voice Activity Detection)

**Para Windows/Mac/Linux:** Aqui está o exemplo para visualizar o VAD. O LED vermelho é o indicador do VAD.

- Passo 1. Baixe o usb_4_mic_array.

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- Passo 2. Crie um [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py) com o código abaixo na pasta usb_4_mic_array e execute 'sudo python VAD.py'

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
#print dev
if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.is_voice()
    while True:
        try:
            print Mic_tuning.is_voice()
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- Passo 3. Veremos o DOA como abaixo.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python VAD.py 
0
0
0
1
0
1
0
```

:::note
Para o limiar do VAD, também podemos usar o GAMMAVAD_SR para definir. Consulte [Tuning](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Mic_Array_v2.0/#Tuning) para mais detalhes.
:::

### Extrair Voz

Usamos a [biblioteca Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para extrair voz via USB.

**Para Linux:** Podemos usar os comandos abaixo para gravar ou reproduzir a voz.

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

Também podemos usar script em Python para extrair voz.

- Passo 1, precisamos executar o script a seguir para obter o número de índice de dispositivo do Mic Array:

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- Passo 2, copie o código abaixo e cole em [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py).

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- Passo 3, pressione Ctrl + X para sair e pressione Y para salvar.

- Passo 4, execute 'sudo python get_index.py' e veremos o ID do dispositivo como abaixo.

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- Passo 5, altere `RESPEAKER_INDEX = 2` para o número de índice. Execute o script Python [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) para gravar uma fala.

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
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

- Passo 6. Se você quiser extrair dados do canal 0 de 6 canais, siga o código abaixo. Para outro canal X, altere [0::6] para [X::6].

```
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 3  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 3
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
    # extract channel 0 data from 6 channels, if you want to extract channel 1, please change to [1::6]
    a = np.fromstring(data,dtype=np.int16)[0::6]
    frames.append(a.tostring())

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

**Para Windows:**

- Passo 1. Executamos o comando abaixo para instalar o pyaudio.

```
 pip install pyaudio
```

- Passo 2. Use [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) para obter o índice do dispositivo.

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- Passo 3. Modifique o índice do dispositivo e os canais de [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) e então extraia a voz.

```
C:\Users\XXX\Desktop>python record.py
* recording
* done recording
```

:::caution
    Se virmos "Error: %1 is not a valid Win32 application.", instale a versão Win32 do Python.
:::

**Para MAC:**

- Passo 1. Executamos o comando abaixo para instalar o pyaudio.

```
 pip install pyaudio
```

- Passo 2. Use [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) para obter o índice do dispositivo.

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- Passo 3. Modifique o índice do dispositivo e os canais de [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) e então extraia a voz.

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: This application, or a library it uses, is using the deprecated Carbon Component Manager for hosting Audio Units. Support for this will be removed in a future release. Also, this makes the host incompatible with version 3 audio units. Please transition to the API's in AudioComponent.h.
* recording
* done recording
```

### Localização e Rastreamento em Tempo Real da Fonte Sonora

[ODAS](https://github.com/introlab/odas) significa Open embeddeD Audition System. Esta é uma biblioteca dedicada a realizar localização, rastreamento, separação e pós-filtragem de fontes sonoras. Vamos nos divertir com ela.

**Para Linux:**

- Passo 1. Obtenha o ODAS e faça o build.

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- Passo 2. Obtenha o [ODAS Studio](https://github.com/introlab/odas_web/releases) e abra-o.

- Passo 3. O odascore estará em **odas/bin/odaslive**, o **arquivo de configuração** é [odas.cfg](https://raw.githubusercontent.com/respeaker/usb_4_mic_array/master/odas.cfg).

- Passo 4. Atualize o array de microfones com 6_channels_firmware.bin, que inclui dados de áudio bruto de 4 canais.

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/K5gZabfaaPI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## FAQ

**P1: Parâmetros dos algoritmos integrados**

```
pi@raspberrypi:~/usb_4_mic_array $ python tuning.py -p
name   type max min r/w info
-------------------------------
AECFREEZEONOFF   int 1 0 rw Adaptive Echo Canceler updates inhibit.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
AECNORM          float 16 0.25 rw Limit on norm of AEC filter coefficients
AECPATHCHANGE    int 1 0 ro AEC Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
AECSILENCELEVEL  float 1 1e-09 rw Threshold for signal detection in AEC [-inf .. 0] dBov (Default: -80dBov = 10log10(1x10-8))
AECSILENCEMODE   int 1 0 ro AEC far-end silence detection status. 
                                                            0 = false (signal detected) 
                                                            1 = true (silence detected)
AGCDESIREDLEVEL  float 0.99 1e-08 rw Target power level of the output signal. 
                                                            [−inf .. 0] dBov (default: −23dBov = 10log10(0.005))
AGCGAIN          float 1000 1 rw Current AGC gain factor. 
                                                            [0 .. 60] dB (default: 0.0dB = 20log10(1.0))
AGCMAXGAIN       float 1000 1 rw Maximum AGC gain factor. 
                                                            [0 .. 60] dB (default 30dB = 20log10(31.6))
AGCONOFF         int 1 0 rw Automatic Gain Control. 
                                                            0 = OFF 
                                                            1 = ON
AGCTIME          float 1 0.1 rw Ramps-up / down time-constant in seconds.
CNIONOFF         int 1 0 rw Comfort Noise Insertion.
                                                            0 = OFF
                                                            1 = ON
DOAANGLE         int 359 0 ro DOA angle. Current value. Orientation depends on build configuration.
ECHOONOFF        int 1 0 rw Echo suppression.
                                                            0 = OFF
                                                            1 = ON
FREEZEONOFF      int 1 0 rw Adaptive beamformer updates.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
FSBPATHCHANGE    int 1 0 ro FSB Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
FSBUPDATED       int 1 0 ro FSB Update Decision.
                                                            0 = false (FSB was not updated)
                                                            1 = true (FSB was updated)
GAMMAVAD_SR      float 1000 0 rw Set the threshold for voice activity detection.
                                                            [−inf .. 60] dB (default: 3.5dB 20log10(1.5))
GAMMA_E          float 3 0 rw Over-subtraction factor of echo (direct and early components). min .. max attenuation
GAMMA_ENL        float 5 0 rw Over-subtraction factor of non-linear echo. min .. max attenuation
GAMMA_ETAIL      float 3 0 rw Over-subtraction factor of echo (tail components). min .. max attenuation
GAMMA_NN         float 3 0 rw Over-subtraction factor of non- stationary noise. min .. max attenuation
GAMMA_NN_SR      float 3 0 rw Over-subtraction factor of non-stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.1)
GAMMA_NS         float 3 0 rw Over-subtraction factor of stationary noise. min .. max attenuation
GAMMA_NS_SR      float 3 0 rw Over-subtraction factor of stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.0)
HPFONOFF         int 3 0 rw High-pass Filter on microphone signals.
                                                            0 = OFF
                                                            1 = ON - 70 Hz cut-off
                                                            2 = ON - 125 Hz cut-off
                                                            3 = ON - 180 Hz cut-off
MIN_NN           float 1 0 rw Gain-floor for non-stationary noise suppression.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NN_SR        float 1 0 rw Gain-floor for non-stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NS           float 1 0 rw Gain-floor for stationary noise suppression.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
MIN_NS_SR        float 1 0 rw Gain-floor for stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
NLAEC_MODE       int 2 0 rw Non-Linear AEC training mode.
                                                            0 = OFF
                                                            1 = ON - phase 1
                                                            2 = ON - phase 2
NLATTENONOFF     int 1 0 rw Non-Linear echo attenuation.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF int 1 0 rw Non-stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF_SR int 1 0 rw Non-stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
RT60             float 0.9 0.25 ro Current RT60 estimate in seconds
RT60ONOFF        int 1 0 rw RT60 Estimation for AES. 0 = OFF 1 = ON
SPEECHDETECTED   int 1 0 ro Speech detection status.
                                                            0 = false (no speech detected)
                                                            1 = true (speech detected)
STATNOISEONOFF   int 1 0 rw Stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
STATNOISEONOFF_SR int 1 0 rw Stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
TRANSIENTONOFF   int 1 0 rw Transient echo suppression.
                                                            0 = OFF
                                                            1 = ON
VOICEACTIVITY    int 1 0 ro VAD voice activity status.
                                                            0 = false (no voice activity)
                                                            1 = true (voice activity)
```

**P2: ImportError: No module named usb.core**

R2: Execute sudo pip install pyusb para instalar o pyusb.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
Traceback (most recent call last):
  File "tuning.py", line 5, in <module>
    import usb.core
ImportError: No module named usb.core
pi@raspberrypi:~/usb_4_mic_array $ sudo pip install pyusb
Collecting pyusb
  Downloading pyusb-1.0.2.tar.gz (54kB)
    100% |████████████████████████████████| 61kB 101kB/s 
Building wheels for collected packages: pyusb
  Running setup.py bdist_wheel for pyusb ... done
  Stored in directory: /root/.cache/pip/wheels/8b/7f/fe/baf08bc0dac02ba17f3c9120f5dd1cf74aec4c54463bc85cf9
Successfully built pyusb
Installing collected packages: pyusb
Successfully installed pyusb-1.0.2
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

**P3: Vocês têm o exemplo para aplicação Raspberry alexa?**

R3: Sim, podemos conectar o mic array v2.0 à porta usb do Raspberry e seguir o [Raspberry Pi Quick Start Guide with Script](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) para fazer a interação por voz com a Alexa.

**P4: Vocês têm o exemplo para Mic array v2.1 com sistema ROS?**

R4: Sim, graças ao Yuki por compartilhar o pacote para integrar o [ReSpeaker USB Mic Array com o middleware ROS (Robot Operating System)](https://github.com/furushchev/respeaker_ros).

**P5: Como habilitar a porta de áudio de 3,5 mm para receber o sinal assim como a porta usb?**

R5: Baixe o [novo firmware](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin) e grave o XMOS seguindo [How to update firmware](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Mic_Array_v2.0/#update-firmware).

**P6: #include "portaudio.h" Erro ao executar "sudo pip install pyaudio".**

A6: Execute o comando abaixo para resolver o problema.

```
sudo apt-get install portaudio19-dev
```

## Recursos

- **[PDF]** [Dimensões do ReSpeaker USB Mic Array](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/dimension.pdf)
- **[DWG]** [Modelo 3D do Case do ReSpeaker USB Mic Array](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/case.dwg)
- **[PDF]** [Resumo do Produto XVF3000](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [Folha de Dados XVF3000](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
