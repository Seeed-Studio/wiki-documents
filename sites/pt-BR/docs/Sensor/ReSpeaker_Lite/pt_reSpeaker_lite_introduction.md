---
description: Começando com o ReSpeaker Lite
title: Começando com o reSpeaker Lite
keywords:
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_usb_v3
sku: 107990273,E24072601
last_update:
  date: 6/28/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/
---

## Introdução

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

Alimentada pelo chipset de áudio e som de IA XMOS XU316, esta placa de desenvolvimento se destaca no processamento de áudio com sua matriz integrada de dois microfones, ideal para reconhecimento de fala e controle por voz. Com algoritmos avançados de front-end de áudio onboard, o chip XU316 oferece cancelamento de interferência, cancelamento de eco e supressão de ruído. Ele suporta conexões I2S e USB e é compatível com Seeed Studio XIAO ESP32S3 (Sense), Adafruit QT Py, Raspberry Pi e PC.

## Recursos

- **Matriz de microfone duplo para captura de voz em campo distante**: Os 2 microfones digitais de alto desempenho capturam e extraem fala e voz em campo distante (até 3 metros) mesmo em ambientes barulhentos, pois cancelam o ruído pontual usando duas entradas de microfone.
- **Algoritmos de IA ASR onboard**: Alimentado pelo chip de som e áudio de IA XMOS XU-316, o kit inclui algoritmos de Compreensão de Linguagem Natural para Cancelamento de Interferência (IC), Cancelamento de Eco Acústico, Supressão de Ruído, Relação Voz-Ruído (VNR) e Controle Automático de Ganho (AGC), permitindo captura de voz de alta qualidade.
- **Aderindo ao código aberto**: Esta placa é compatível com plataformas de hardware populares (XIAO ESP32S3 (Sense), Adafruit QT Py) via I2S, e compatível com Raspberry Pi, PC via USB (Audio Class 2.0 (UAC2)).
- **LED RGB onboard**: a placa possui um LED RGB WS2812 programável, suportando efeitos personalizados e oferecendo uma interface visual para suas aplicações.
- **Suporte a fonte de alimentação externa**: esta placa suporta fonte de alimentação externa de 5 V, que pode ser aplicada de forma flexível em diferentes cenários.
- **DFU para desenvolvimento personalizado**: a placa suporta atualização de firmware personalizado via DFU-Util.

## Especificação

|**Chip Principal**|XMOS XU316|
| :- | :- |
|**Microfones Digitais**|Microfones Digitais de Alto Desempenho \* 2|
|**Sensibilidade**|-26 dBFS|
|**Ponto de Sobrecarga Acústica**|120 dBL|
|**SNR**|64 dBA|
|**Fonte de Alimentação**|USB 5V, 5V Externo|
|**Dimensões**|35\*86 mm|
|**Saída de Áudio**|Conector de Alto-Falante / Conector de Fone de Ouvido 3,5 mm|
|**Taxa Máxima de Amostragem**|16Khz|
|**Alto-falante**|Suporta alto-falantes amplificados de 5 W.|

## Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## Pin Out

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Matriz de Microfone Duplo**|Fornece entrada de áudio de alta qualidade.|
| :- | :- | :- |
|**2**|**Luz Indicadora de Alimentação**|Acende quando energizado.|
|**3**|**Luz RGB**|WS2812 programável, fornece interface visual|
|**4**|**Luz Indicadora de Mudo**|Acende em vermelho quando o botão de mudo é pressionado.|
|**5**|**Botão USR**|Botão definido pelo usuário.|
|**6**|**Botão de Mudo**|Silencia a entrada de áudio quando pressionado.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para desenvolvimento e integração adicionais.|
|**8**|**Processador Central XU316**|Responsável pelo processamento e transmissão de áudio.|
|**9**|**Ilha de Solda para Fonte de Alimentação Externa**|Suporta fonte de alimentação externa de 5 V.|
|**10**|**Porta USB Tipo-C**|Usada para alimentação e transmissão de dados.|
|**11**|**Conector de Alto-Falante**|Para saída de áudio. Suporta alto-falantes amplificados de 5 W.|
|**12**|**Conector de Fone de Ouvido 3,5 mm**|Sai o áudio; podemos conectar alto-falantes ativos ou fones de ouvido nesta porta.|
|**13**|**Pad de alimentação externa 1**|Pinos de IO não utilizados no XIAO ESP32.|
|**14**|**Pad de alimentação externa 2**|Pinos de IO não utilizados no XU316.|
|**15**|**JTAG**|Para depuração e programação do XU316.|

## Primeiros Passos

### Uso Fora da Caixa

ReSpeaker Lite é uma interface de voz modular plug-and-play, sem necessidade de driver, basta conectá-lo ao seu PC e você verá um dispositivo de voz chamado 'ReSpeaker Lite'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### Atualizar firmware

#### [Download de Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
Existem 2 versões para a placa ReSpeaker Lite:

Para usá-la como um dispositivo de som USB, por favor grave o firmware da versão USB (firmware padrão).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png" alt="pir" width={300} height="auto" /></p>

Para usá-la com XIAO ESP32S3, por favor grave o firmware da versão I2S.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png" alt="pir" width={300} height="auto" /></p>
:::

#### Fiação

Conecte a placa ReSpeaker Lite ao seu PC via cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### Instalar DFU Util

[dfu-util](http://dfu-util.sourceforge.net/) é uma ferramenta de linha de comando para atualização de firmware de dispositivo via porta USB.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

- Baixe `dfu-util-0.11-binaries.tar.xz` e extraia-o para o seu sistema local,
  por exemplo, D:\

- Altere o diretório para o `dfu-util.exe`<br/>
  por exemplo, D:\dfu-util-0.11-binaries\win64\(se você estiver usando win32, por favor altere win64 para win32)

- Acrescente o caminho do `dfu-util.exe` à variável de ambiente de sistema Path: `My Computer` > `Properties` > `Advanced` > `Environment Variables` > `Path`.
 Observe que os caminhos na variável Path são separados por ponto e vírgula ;.
 Isso permitirá que o dfu-util seja executado globalmente no prompt de comando.

- Abra o menu iniciar e digite cmd. Pressione a tecla Enter. No terminal que aparecer, verifique se o caminho do dfu-util.exe está definido com o comando dfu-util -V:

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- Execute `dfu-util -l` para verificar se o ReSpeaker Lite é detectado:

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

:::tip
Se você receber um erro "Cannot open DFU device" como este, por favor continue seguindo esta etapa. Caso contrário, vá para a Etapa 3 para gravar o firmware.
:::

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Cannot open DFU device 2886:0019 found on devnum 9 (LIBUSB_ERROR_NOT_SUPPORTED)
```

- Instale o [Zadig](https://zadig.akeo.ie/) e abra-o. Clique em `Options` -> `List All Devices`.

- Encontre `ReSpeaker 2 Mics Array` ou `ReSpeaker Lite` ou DFU `FACTORY (Interface 3)` na lista de dispositivos, instale o driver `WINUSB v6.x.xxxx.xxxxx`.

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- Após a conclusão da instalação (isso levará alguns minutos), por favor faça um power-cycle e execute `dfu-util -l` novamente; o ReSpeaker Lite deve ser detectado agora

</TabItem>

<TabItem value="mac" label="MacOS">

- Instale o dfu-util com o [brew](https://brew.sh/): `brew install dfu-util`

- Execute `dfu-util -l` para verificar se o ReSpeaker Lite é detectado:

```
➜  ~ dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

<TabItem value="lin" label="Linux">

- Instale o dfu-util com apt: `sudo apt install dfu-util`

- Execute `sudo dfu-util -l` para verificar se o ReSpeaker Lite é detectado:

```
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

</Tabs>

#### Gravar Firmware

- Conecte a placa ReSpeaker ao seu PC.

- Execute o seguinte comando `dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`:
  - No Linux, execute `sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`

```
C:\Users\yiping>dfu-util -R -e -a 1 -D D:\Downloads\respeaker_lite_i2s_dfu_firmware_v1.0.7.bin
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Warning: Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release
Opening DFU capable USB device...
Device ID 2886:0019
Device DFU version 0101
Claiming USB DFU Interface...
Setting Alternate Interface #1 ...
Determining device status...
DFU state(2) = dfuIDLE, status(0) = No error condition is present
DFU mode device DFU version 0101
Device returned transfer size 4096
Copying data from PC to DFU device
Download        [=========================] 100%       270336 bytes
Download done.
DFU state(7) = dfuMANIFEST, status(0) = No error condition is present
DFU state(2) = dfuIDLE, status(0) = No error condition is present
Done!
Resetting USB to switch back to Run-Time mode
```

:::caution
Depois que a gravação for concluída, reinicie a placa.
:::

- Verifique a versão do firmware:

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

## Comparação

||[ReSpeaker Lite](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)|[ReSpeaker Mic Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)|[reSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|
|--|--|--|--|
||<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-array2.0.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-pi-hat.png" alt="pir" width={150} height="auto" /></p>|
|<p style={{textAlign: 'center'}}>Chip Principal</p>|<p style={{textAlign: 'center'}}>XMOS XU316</p>|<p style={{textAlign: 'center'}}>XMOS XVF-3000</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Microfones</p>|<p style={{textAlign: 'center'}}>Microfones PDM MEMS x2</p>|<p style={{textAlign: 'center'}}>Microfones PDM MEMS x4</p>|<p style={{textAlign: 'center'}}>Microfones analógicos MEMS x2</p>
|<p style={{textAlign: 'center'}}>Distância de Captura de Voz</p>|<p style={{textAlign: 'center'}}>3m</p>|<p style={{textAlign: 'center'}}>5m</p>|<p style={{textAlign: 'center'}}>3m</p>|
|<p style={{textAlign: 'center'}}>Sensibilidade</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Ponto de Sobrecarga Acústica</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>SNR</p>|<p style={{textAlign: 'center'}}>64 dB</p>|<p style={{textAlign: 'center'}}>63 dB</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Algoritmos de Processamento de Áudio Embarcados</p>|<ul><li>Cancelamento de Eco Acústico (AEC)</li><li>Controle Automático de Ganho (AGC)</li><li>Supressão de Ruído (NS)</li><li>Cancelamento de Interferência (IC)</li><li>Relação Voz-Ruído (VNR)</li></ul>|<ul><li>Cancelamento de Eco Acústico (AEC)</li><li>Controle Automático de Ganho (AGC)</li><li>Supressão de Ruído (NS)</li><li>Formação de Feixe (Beamforming)</li><li>Direção de Chegada (DoA)</li><li>Des-reverberação</li><li>Detecção de Atividade de Voz (VAD)</li></ul>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Hardware Compatível</p>|<ul><li>XIAO ESP32S3(Sense)</li><li>Adafruit QT Py via I2S</li><li>Raspberry Pi</li><li>Qualquer computador ou SBC executando Linux, macOS e Windows via USB</li></ul>|<ul><li>Raspberry Pi</li><li>Qualquer computador ou SBC executando Linux, macOS e Windows via USB</li></ul>|Raspberry Pi SOMENTE|
|<p style={{textAlign: 'center'}}>Perfeito para</p>|Captação direcional de som, ideal para configurações lineares ou alongadas|Captação e localização de som omnidirecional, melhor colocado no centro de ambientes abertos e multidirecionais|Captação direcional de som, ideal para configurações lineares ou alongadas|

### FAQ

- **Não é possível encontrar o dispositivo de som `ReSpeaker Lite`.**

 Verifique a versão do firmware, certifique-se de que o firmware é versão USB e acima de`2.0.5`.

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 Se não for a versão USB, siga [esta etapa](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/#Gravar-firmware) para gravar o firmware.

- **Não consegue detectar o dispositivo de som USB ReSpeaker Lite no Windows após gravar o firmware USB?**

- Abra o menu iniciar e digite `Device manager`. Encontre o dispositivo `ReSpeaker Lite`, clique com o botão direito nele e selecione `Uninstall device`. Selecione `Delete the driver software for this device` e clique em `Uninstall`. Depois disso, reinicie o dispositivo e o Windows irá reinstalar o driver de placa de som correto para ele.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)

[ReSpeaker Lite Arquivo 3D](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
