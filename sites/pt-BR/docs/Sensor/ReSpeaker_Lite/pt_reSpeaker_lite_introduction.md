---
description: ReSpeaker Lite é uma placa de desenvolvimento de interface de voz USB/I2S com chipset XMOS XU316 e matriz de dois microfones para captura de fala em campo distante. Ela conta com algoritmos de front-end de áudio com IA integrados, incluindo cancelamento de eco acústico, supressão de ruído, cancelamento de interferência e controle automático de ganho. Comece com a gravação de firmware, fiação e uso pronto para uso.
title: Introdução ao reSpeaker Lite
keywords:
  - ReSpeaker
  - Xiao esp32
  - Assistente de voz 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_usb_v3
sku: 107990273,E24072601
last_update:
  date: 6/28/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-02-12'
url: https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/
---

## Introdução


<table align="center">
  <tr>
    <th>reSpeaker Lite 2-Mic Array com XIAO ESP32-S3 </th>
    <th>reSpeaker Lite 2-Mic Array </th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/9/0/904832d1-b0d8-461a-bbbc-cbfa5a1f71a9.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


Alimentada pelo chipset de som e áudio com IA XMOS XU316, esta placa de desenvolvimento se destaca em processamento de áudio com sua matriz integrada de dois microfones, ideal para reconhecimento de fala e controle por voz. Com avançados algoritmos de front-end de áudio integrados, o chip XU316 oferece cancelamento de interferência, cancelamento de eco e supressão de ruído. Ele suporta conexões I2S e USB e é compatível com Seeed Studio XIAO ESP32S3 (Sense), Adafruit QT Py, Raspberry Pi e PC.

## Recursos

- **Matriz de dois microfones para captura de voz em campo distante**: Os 2 microfones digitais de alto desempenho capturam e extraem fala e voz em campo distante (até 3 metros), mesmo em ambientes ruidosos, pois cancelam ruídos pontuais usando duas entradas de microfone.
- **Algoritmos de IA ASR integrados**: Alimentado pelo chip de som e áudio com IA XMOS XU-316, o kit inclui algoritmos de compreensão de linguagem natural para Cancelamento de Interferência (IC), Cancelamento de Eco Acústico, Supressão de Ruído, Relação Voz-Ruído (VNR) e Controle Automático de Ganho (AGC), permitindo captura de voz de alta qualidade.
- **Aderindo ao código aberto**：Esta placa é compatível com plataformas de hardware populares (XIAO ESP32S3 (Sense), Adafruit QT Py) via I2S, e compatível com Raspberry Pi e PC via USB (Audio Class 2.0 (UAC2)).
- **LED RGB integrado**: a placa possui um LED RGB WS2812 programável, que suporta efeitos personalizados e oferece uma interface visual para suas aplicações.
- **Suporte a fonte de alimentação externa**: esta placa suporta fonte de alimentação externa de 5 V, que pode ser aplicada de forma flexível em diferentes cenários.
- **DFU para desenvolvimento personalizado**: a placa suporta atualização de firmware personalizado via DFU-Util.

## Especificações

|**Chip principal**|XMOS XU316|
| :- | :- |
|**Microfones digitais**|Microfones digitais de alto desempenho \* 2|
|**Sensibilidade**|-26 dBFS|
|**Ponto de sobrecarga acústica**|120 dBL|
|**SNR**|64 dBA|
|**Fonte de alimentação**|USB 5V, 5V externa|
|**Dimensões**|35\*86 mm|
|**Saída de áudio**|Conector para alto-falante / Conector para fone de ouvido de 3,5 mm|
|**Taxa máxima de amostragem**|16Khz|
|**Alto-falante**|Suporta alto-falantes amplificados de 5 W.|

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## Pinagem

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Matriz de dois microfones**|Fornece entrada de áudio de alta qualidade.|
| :- | :- | :- |
|**2**|**Luz indicadora de alimentação**|Acende quando está ligado.|
|**3**|**Luz RGB**|WS2812 programável, fornece interface visual|
|**4**|**Luz indicadora de mudo**|Acende em vermelho quando o botão de mudo é pressionado.|
|**5**|**Botão USR**|Botão definido pelo usuário.|
|**6**|**Botão de mudo**|Silencia a entrada de áudio quando pressionado.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para desenvolvimento e integração adicionais.|
|**8**|**Processador principal XU316**|Responsável pelo processamento e transmissão de áudio.|
|**9**|**Ilha de solda para alimentação externa**|Suporta fonte de alimentação externa de 5 V.|
|**10**|**Porta USB Type-C**|Usada para alimentação e transmissão de dados.|
|**11**|**Conector para alto-falante**|Para saída de áudio. Suporta alto-falantes amplificados de 5 W.|
|**12**|**Conector para fone de ouvido de 3,5 mm**|Saída de áudio. Podemos conectar alto-falantes ativos ou fones de ouvido nesta porta.|
|**13**|**Ilha de alimentação externa 1**|Pinos de IO não utilizados no XIAO ESP32.|
|**14**|**Ilha de alimentação externa 2**|Pinos de IO não utilizados no XU316.|
|**15**|**JTAG**|Para depuração e programação do XU316.|

## Primeiros passos

### Uso pronto para uso

ReSpeaker Lite é uma interface de voz modular plug-and-play, sem necessidade de driver; basta conectá-la ao seu PC e você verá um dispositivo de voz chamado 'ReSpeaker Lite'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### Atualizar firmware

#### [Download de firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
Existem 2 versões para a placa ReSpeaker Lite:

Para usá-la como um dispositivo de som USB, grave o firmware da versão USB (firmware padrão).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/usb_firmware.png" alt="pir" width={900} height="auto" /></p>

Para usá-la com XIAO ESP32S3, grave o firmware da versão I2S.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/i2s_firmware.png" alt="pir" width={900} height="auto" /></p>
:::

#### Fiação

Conecte a placa ReSpeaker Lite ao seu PC por meio do cabo USB.

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
  por exemplo, D:\dfu-util-0.11-binaries\win64\(se você estiver usando win32, altere win64 para win32)

- Acrescente o caminho do `dfu-util.exe` à variável de ambiente do sistema Path: `My Computer` > `Properties` > `Advanced` > `Environment Variables` > `Path`.
 Observe que os caminhos na variável Path são separados por ponto e vírgula ;.
 Isso permitirá que o dfu-util seja executado globalmente no prompt de comando.

- Abra o menu Iniciar e digite cmd. Pressione a tecla Enter. No terminal que aparecer, verifique se o caminho do dfu-util.exe está definido com o comando dfu-util -V:

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- Execute `dfu-util -l` para verificar se o ReSpeaker Lite foi detectado:

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
Se você receber um erro "Cannot open DFU device" como este, continue seguindo esta etapa. Caso contrário, vá para a Etapa 3 para gravar o firmware.
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

- Encontre `ReSpeaker 2 Mics Array` ou `ReSpeaker Lite` ou DFU `FACTORY (Interface 3)` na lista de dispositivos e instale o driver `WINUSB v6.x.xxxx.xxxxx`.

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- Após a conclusão da instalação (isso levará alguns minutos), desligue e ligue o dispositivo e execute `dfu-util -l` novamente; o ReSpeaker Lite deve ser detectado agora

</TabItem>

<TabItem value="mac" label="MacOS">

- Instale o dfu-util com o [brew](https://brew.sh/): `brew install dfu-util`

- Execute `dfu-util -l` para verificar se o ReSpeaker Lite foi detectado:

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

- Execute `sudo dfu-util -l` para verificar se o ReSpeaker Lite foi detectado:

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
Após a conclusão da gravação, reinicie a placa.
:::

- Verifique a versão do firmware:

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>


## Gravação e Reprodução 

### Configurar o Audacity 

1. Abra o **Audacity**
2. Vá em **Audio Setup > Audio Settings**


3. Defina:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker Lite`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz` (para **Project** e **Default Sample Rate**)
   - **Sample Format**: `32-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/audio_settings.png" alt="pir" width={600} height="auto"/></p>

1. Clique em **OK**
2. Tudo pronto — comece a gravar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/audio_recording .png" alt="pir" width={600} height="auto"/></p>

### FAQ

- **Não é possível encontrar o dispositivo de som `ReSpeaker Lite`.**

 Verifique a versão do firmware e certifique-se de que o firmware é a versão USB e acima de `2.0.5`.

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 Se não for a versão USB, siga [esta etapa](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/#gravar-firmware) para gravar o firmware.

- **Não é possível detectar o dispositivo de som USB ReSpeaker Lite no Windows após gravar o firmware USB?**

- Abra o menu Iniciar e digite `Device manager`. Encontre o dispositivo `ReSpeaker Lite`, clique com o botão direito nele e selecione `Uninstall device`. Selecione `Delete the driver software for this device` e clique em `Uninstall`. Depois disso, reinicie o dispositivo e o Windows irá reinstalar o driver correto da placa de som para ele.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)

[Arquivo 3D do ReSpeaker Lite](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
