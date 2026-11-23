---
description: ReSpeaker Mic Array v3.0/v3.2
title: reSpeaker USB 4-Mic Array XVF3000 v3.0/v3.2
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/ReSpeaker_Mic_Array_v3.0.webp
slug: /respeaker_mic_array_v3.0
last_update:
  date: 10/30/2026
  author: ray
createdAt: '2023-08-20'
updatedAt: '2026-02-24'
url: https://wiki.seeedstudio.com/pt-br/respeaker_mic_array_v3.0/
---


![](https://files.seeedstudio.com/products/107990053/01.png)

Estamos empolgados em apresentar formalmente o **reSpeaker XVF3800** — uma atualização abrangente do reSpeaker XVF 3000. Com base na arquitetura de matriz de 4 microfones de seu antecessor, na compatibilidade universal (Windows / macOS / Linux) e na conveniência plug-and-play de firmware duplo (I2S / USB), o XVF3800 oferece um salto significativo tanto em **fidelidade de áudio quanto em desempenho algorítmico**.

**Principais destaques da atualização**
- **Algoritmos de áudio com IA**: Conjunto integrado com AEC (Acoustic Echo Cancellation), AGC (Automatic Gain Control), detecção de DoA (Direction of Arrival), beamforming, VAD (Voice Activity Detection), supressão de ruído e desreverberação — estabelecendo uma base robusta para aplicações avançadas de voz.  
- **Captação de voz em campo distante 360°**: Captação de voz precisa em um raio de 5 metros, atendendo com facilidade sistemas de conferência, interação inteligente e cenários controlados por voz.  
- **Modos de operação duplos**: Troca flexível de firmware USB/I2S para atender a diferentes requisitos de desenvolvimento e implantação.
- **Detalhes e especificações do produto**: [ReSpeaker XVF3800 4-Mic Array Store Page](https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html)
- **Guia de início rápido e Wiki**: [reSpeaker XVF3800 Getting Started Guide | Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/)

ReSpeaker Mic Array v3.0/v3.2 é a próxima evolução das matrizes de microfone USB da Seeed Studio, sucedendo a ReSpeaker Mic Array v2.0. Enquanto a v2.0 foi construída sobre o chipset XVF-3000 da XMOS e projetada como uma grande atualização em relação à v1.0, a v3.0/v3.2 foca em aprimorar a qualidade de áudio e o desempenho dos algoritmos, mesmo com uma contagem física menor de microfones.

**A v3.2 adiciona filtragem para reduzir o ruído de fundo do alto-falante. Fora esse filtro, v3.0 e v3.2 compartilham o mesmo hardware e recursos, portanto esta página se aplica a ambas as versões.**

Comparada à matriz de 4 microfones da v2.0, a v3.0/v3.2 também usa 4 microfones, mas integra algoritmos de processamento de áudio embutidos aprimorados, oferecendo captação de voz em campo distante mais clara e melhor tratamento de ruído do que sua antecessora. A v3.0/v3.2 substitui o codec WM8960 da v2.0 por um codec TLV320AIC3104, contribuindo para uma captura de som de maior fidelidade.

Enquanto a v2.0 era frequentemente emparelhada com a ReSpeaker Core ou usada como placa de desenvolvimento, a v3.0/v3.2 é mais um dispositivo USB plug-and-play — semelhante à v2.0 ao suportar USB Audio Class 1.0 para compatibilidade total com Windows, macOS e Linux — porém ajustada para desempenho de interface de voz pronto para uso, sem exigir hardware adicional.

Em termos de recursos, ambas suportam captação de voz em campo distante e algoritmos de aprimoramento de fala como AEC (Acoustic Echo Cancellation), VAD (Voice Activity Detection), DOA (Direction of Arrival), Beamforming e Noise Suppression, mas as otimizações de algoritmo da v3.0/v3.2 fornecem áudio mais limpo em ambientes ruidosos do mundo real.

O sistema de LEDs permanece com 12 LEDs RGB programáveis em ambas as versões, mas a v3.0/v3.2 é modelada com base no design mais recente da USB 4 Mic Array, tornando-a menor e mais simples do que o formato voltado a desenvolvedores da v2.0, ao mesmo tempo em que mantém recursos profissionais essenciais de interface de voz.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2.0-p-3053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07D29L3Q1" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## Versão

| Versão do produto        | Alterações                                                               | Data de lançamento |
|--------------------------|--------------------------------------------------------------------------|--------------------|
| ReSpeaker Mic Array v1.0 | Inicial                                                                  | 15 Ago, 2016       |
| ReSpeaker Mic Array v2.0 | XVSM-2000 está EOL, muda o MCU para XVF-3000 e reduz os microfones de 7 para 4. | 25 Jan, 2018       |
| ReSpeaker Mic Array v3.0 | Codec alterado para TLV320AIC3104  | 19 Jan, 2021       |
| ReSpeaker Mic Array v3.2 | Adicionada filtragem para reduzir o ruído de fundo do alto-falante. | 18 Jan, 2026       |

## Recursos

- Captação de voz em campo distante
- Suporta USB Audio Class 1.0 (UAC 1.0)
- Matriz de quatro microfones
- 12 indicadores LED RGB programáveis
- Algoritmos e recursos de fala
  - Voice Activity Detection
  - Direction of Arrival
  - Beamforming
  - Noise Suppression
  - De-reverberation
  - Acoustic Echo Cancellation

## Especificação

- XVF-3000 da XMOS
- 4 microfones digitais de alto desempenho
- Suporta captação de voz em campo distante
- Algoritmo de fala em chip
- 12 indicadores LED RGB programáveis  
- Microfones: ST MP34DT01TR-M  
- Sensibilidade: -26 dBFS (Omnidirecional)  
- Ponto de sobrecarga acústica: 120 dBSPL  
- SNR: 61 dB  
- Fonte de alimentação: 5V DC pela Micro USB ou pelo conector de expansão  
- Dimensões: 70mm (diâmetro)  
- Saída de áudio com conector P2 (3,5 mm)
- Consumo de energia: 5V, 180mA com LED ligado e 170mA com LED desligado
- Taxa máxima de amostragem: 16Khz

## Visão geral do hardware

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Hardware%20Overview.png)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000:**
Integra algoritmos DSP avançados que incluem Acoustic Echo Cancellation (AEC), beamforming, desreverberação, supressão de ruído e controle de ganho.

- **<font face="" size="3" font color="ff0000">②</font> Microfone digital:**
O MP34DT01-M é um microfone digital MEMS omnidirecional, de baixíssimo consumo e ultracompacto, construído com um elemento de detecção capacitivo e uma interface IC.

- **<font face="" size="3" font color="ff0000">③</font> LED RGB:**
LED RGB de três cores.

- **<font face="" size="3" font color="ff0000">④</font> Porta USB:**
Fornece energia e controla a matriz de microfones.

- **<font face="" size="3" font color="ff0000">⑤</font> Conector de fone de ouvido 3,5 mm:**
Saída de áudio. Podemos conectar alto-falantes ativos ou fones de ouvido a esta porta.

- **<font face="" size="3" font color="ff0000">⑥</font> TLV320AIC3104:**
O TLV320AIC3104 é um codec estéreo de baixo consumo com drivers de alto-falante Classe D para fornecer 1 W por canal em cargas de 8 W.

**Diagrama do sistema**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/system_diag.png)

**Mapa de pinos**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Pin_Map.png)

**Dimensões**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/Dimension.png)

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/Dimension1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=759d56d7-c97c-4aa7-ad96-3ca1e0d5a13e" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## Aplicações

- Captação de voz via USB
- Smart Speaker
- Sistemas inteligentes de assistente de voz
- Gravadores de voz
- Sistema de conferência de voz
- Equipamentos de comunicação para reuniões
- Robô de interação por voz
- Assistente de voz automotivo
- Outros cenários de interface de voz

## Introdução

:::note
ReSpeaker Mic Array v3.0/v3.2 é compatível com sistemas Windows, Mac, Linux e Android. Os scripts abaixo foram testados em Python2.7.
:::

Para Android, testamos com [emteria.OS](https://help.emteria.com/kb/emteria-os-installation)(Android 7.1) no Raspberry. Conectamos a mic array v3.0/v3.2 à porta USB do Raspberry Pi e selecionamos a ReSpeaker mic array v3.0/v3.2 como dispositivo de áudio. Aqui está a tela de gravação de áudio.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_record.png)

Aqui está a tela de reprodução de áudio. Conectamos o alto-falante ao conector de áudio P2 (3,5 mm) da ReSpeaker mic array v3.0/v3.2 e ouvimos o que gravamos.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_play.png)

### Atualizar firmware

Existem 2 firmwares. Um inclui dados de 1 canal, enquanto o outro inclui dados de 6 canais (firmware de fábrica). Aqui está a tabela com as diferenças.

| Firmware             | Canais | Observação                                                                                                                                                                    |
|----------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin  | 1              | Áudio processado para ASR |
| 6_channels_firmware.bin | 6  |Channel 0: processed audio for ASR <br /> Channel 1: mic1 raw data <br />Channel 2: mic2 raw data <br />Channel 3: mic3 raw data <br />Channel 4: mic4 raw data <br />Channel 5: merged playback|

**Para Linux:** A Mic array suporta USB DFU. Desenvolvemos um script em Python, dfu.py, para atualizar o firmware via USB.

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download MicArrayV3_firmware/6_channels_dfu_4.0.0_firmware.bin # The 6 channels version 

# if you want to use 1 channel,then the command should be like:

sudo python dfu.py --download MicArrayV3_firmware/1_channel_dfu_4.0.0_firmware.bin


```

**Para Windows/Mac:** Não recomendamos usar máquina virtual Windows/Mac e Linux para atualizar o firmware.

### Demonstração pronta para uso

Aqui está o exemplo de Acoustic Echo Cancellation com o firmware de 6 canais.

- Passo 1. Conecte o cabo USB ao PC e o conector de áudio ao alto-falante.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/playback.jpg)

- Passo 2. Selecione a mic array v3.0/v3.2 como dispositivo de saída no PC.
- Passo 3. Inicie o Audacity para gravar.
- Passo 4. Primeiro reproduza música no PC e depois fale.
- Passo 5. Veremos a tela do Audacity como abaixo. Clique em **Solo** para ouvir o áudio de cada canal.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

Canal0 Áudio(processado por algoritmos):

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg" />
</audio>

Canal1 Áudio(dados brutos do Mic1):

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg" />
</audio>

Canal5 Áudio(dados de reprodução):

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg" />
</audio>

Aqui está o vídeo sobre DOA e AEC.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/XivM-6PRgX8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

### Instalar o driver de controle de DFU e LED  

- **Windows:** A gravação e reprodução de áudio funcionam bem por padrão. O driver Libusb-win32 só é necessário para controlar os LEDs e os parâmetros de DSP no Windows. Usamos [uma ferramenta prática - Zadig](http://zadig.akeo.ie/) para instalar o driver libusb-win32 tanto para `SEEED DFU` quanto para `SEEED Control` (ReSpeaker Mic Array tem 2 dispositivos no Gerenciador de Dispositivos do Windows).

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    Certifique-se de que libusb-win32 esteja selecionado, não WinUSB ou libusbK.
:::

- **MAC:** Nenhum driver é necessário.
- **Linux:** Nenhum driver é necessário.

### Ajuste fino

**Para Linux/Mac/Windows:** Podemos configurar alguns parâmetros dos algoritmos integrados.

- Obtenha a lista completa de parâmetros; para mais informações, consulte o FAQ.

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- Exemplo nº 1, podemos desativar o Controle Automático de Ganho (AGC):

```
python tuning.py AGCONOFF 0
```

- Exemplo nº 2, podemos verificar o ângulo de DOA.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### Controlar os LEDs

Podemos controlar os LEDs do ReSpeaker Mic Array V2 através de USB. O dispositivo USB possui uma Interface de Classe Específica do Fabricante que pode ser usada para enviar dados por meio de USB Control Transfer. Referenciamos a [biblioteca python pyusb](https://github.com/pyusb/pyusb) e criamos a [biblioteca python usb_pixel_ring](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py).

O comando de controle de LED é enviado por usb.core.Device.ctrl_transfer() do pyusb, com seus parâmetros conforme abaixo：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

Aqui estão as APIs do usb_pixel_ring.

| Comando | Dados                          | API                            | Observação                                                                                                        |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | modo trace, mudança dos LEDs depende de VAD* e DOA*                                                               |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | modo mono, define todos os LEDs RGB para uma única cor, por exemplo Red(0xFF0000), Green(0x00FF00)， Blue(0x0000FF) |
| 2       | [0]                            | pixel_ring.listen()            | modo listen, semelhante ao modo trace, mas não desliga os LEDs                                                   |
| 3       | [0]                            | pixel_ring.speak()             | modo de espera                                                                                                    |
| 4       | [0]                            | pixel_ring.think()             | modo speak                                                                                                        |
| 5       | [0]                            | pixel_ring.spin()              | modo spin                                                                                                         |
| 6       | [r, g, b, 0] * 12              | pixel_ring.custimize()         | modo custom, define cada LED com sua própria cor                                                                  |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | define o brilho, faixa: 0x00~0x1F                                                                                |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | define a paleta de cores, por exemplo, pixel_ring.set_color_palette(0xff0000, 0x00ff00) junto com pixel_ring.think() |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | define o LED central: 0 - desligado, 1 - ligado, outros - depende do VAD                                         |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | mostra o volume, faixa: 0 ~ 12                                                                                   |
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
    pixel_ring.change_pattern('echo')
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

- Passo 2. Crie um [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py) com o código abaixo na pasta usb_4_mic_array e execute 'python DOA.py'

:::note
Se você estiver usando Python 3, este arquivo é adequado para uso [DOA.py](https://github.com/KasunThushara/xvf3000/blob/main/DOA.py). E o arquivo de ajuste é [tuning.py](https://github.com/KasunThushara/xvf3000/blob/main/tuning.py)
:::

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

- Passo 2. Crie um [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py) com o código abaixo na pasta usb_4_mic_array e execute 'python VAD.py'

:::note
Se você estiver usando Python 3, este arquivo é adequado para uso [VAD.py](https://github.com/KasunThushara/xvf3000/blob/main/VAD.py).E o arquivo de ajuste é [tuning.py](https://github.com/KasunThushara/xvf3000/blob/main/tuning.py)
:::

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

- Etapa 3. Veremos o DOA como abaixo.

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
Para o limite de VAD, também podemos usar o GAMMAVAD_SR para configurar. Consulte [Tuning](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Mic_Array_v2.0/#tuning) para mais detalhes.
:::

### Extrair voz

Usamos a [biblioteca PyAudio para python](https://people.csail.mit.edu/hubert/pyaudio/) para extrair voz via USB.

**Para Linux:** Podemos usar os comandos abaixo para gravar ou reproduzir a voz.

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

Também podemos usar script em python para extrair voz.

- Etapa 1, precisamos executar o seguinte script para obter o número de índice do dispositivo do Mic Array:

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- Etapa 2, copie o código abaixo e cole em [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py).

:::note
Se você estiver usando Python 3, este arquivo é adequado para uso [get_index.py](https://github.com/KasunThushara/xvf3000/blob/main/get_index.py)
:::

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- Etapa 3, pressione `Ctrl` + `X` para sair e pressione Y para salvar.

- Etapa 4, execute 'sudo python get_index.py' e veremos o ID do dispositivo como abaixo.

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- Etapa 5, altere `RESPEAKER_INDEX = 2` para o número de índice. Execute o script python [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) para gravar uma fala.

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

- Etapa 6. Se você quiser extrair dados do canal 0 a partir de 6 canais, siga o código abaixo. Para outro canal X, altere [0::6] para [X::6].

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

- Etapa 1. Executamos o comando abaixo para instalar o pyaudio.

```
 pip install pyaudio
```

- Etapa 2. Use [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) para obter o índice do dispositivo.

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- Etapa 3. Modifique o índice do dispositivo e os canais de [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) e então extraia a voz.

```
C:\Users\XXX\Desktop>python record.py
* recording
* done recording
```

:::caution
Se virmos "Error: %1 is not a valid Win32 application.", instale a versão Win32 do Python.
:::

**Para MAC:**

- Etapa 1. Executamos o comando abaixo para instalar o pyaudio.

```
 pip install pyaudio
```

- Etapa 2. Use [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) para obter o índice do dispositivo.

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- Etapa 3. Modifique o índice do dispositivo e os canais de [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) e então extraia a voz.

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: This application, or a library it uses, is using the deprecated Carbon Component Manager for hosting Audio Units. Support for this will be removed in a future release. Also, this makes the host incompatible with version 3 audio units. Please transition to the API's in AudioComponent.h.
* recording
* done recording
```

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

**Q2: ImportError: No module named usb.core**

A2: Execute sudo pip install pyusb para instalar o pyusb.

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

**Q3: Vocês têm um exemplo para aplicação alexa no Raspberry?**

A3: Sim, podemos conectar o mic array v3.0/v3.2 à porta usb do Raspberry e seguir o [Raspberry Pi Quick Start Guide with Script](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) para fazer a interação por voz com a alexa.

**Q4: Vocês têm um exemplo para o Mic array v3.0/v3.2 com sistema ROS?**

A4: Sim, agradecemos ao Yuki por compartilhar o pacote para integrar o [ReSpeaker Mic Array v2 com ROS (Robot Operating System) Middleware](https://github.com/furushchev/respeaker_ros).

**Q5: Como habilitar a porta de áudio de 3,5 mm para receber o sinal assim como a porta usb?**

A5: Baixe o [novo firmware](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin) e grave o XMOS seguindo o guia [How to update firmware](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Mic_Array_v2.0/#update-firmware).

## Recursos

- **[PDF]** [Esquemático do ReSpeaker MicArray v3.2](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/202004229_ReSpeakerMicArray_V3.0_SCH%26PCB_250427.zip)
- **[PDF]** [Resumo do Produto ReSpeaker MicArray v3.2](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/ReSpeaker%20Mic%20Array%20v3.2%20Product%20Brief.pdf)
- **[PDF]** [Modelo 3D do ReSpeaker MicArray v3.2](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC%20v2.0.pdf)
- **[SKP]** [Modelo 3D do ReSpeaker MicArray v3.2](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/Respeaker%20Microphone%20Array%20v2.0_20180316.skp.zip)
- **[STP]** [Modelo 3D do ReSpeaker MicArray v3.2](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC-3D%20v2.0.stp.zip)
- **[PDF]** [Resumo do Produto XVF3000](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [Datasheet do XVF3000](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)
- **[Github]** [ReSpeaker Mic Array v2 com ROS (Robot Operating System) Middleware](https://github.com/furushchev/respeaker_ros)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
