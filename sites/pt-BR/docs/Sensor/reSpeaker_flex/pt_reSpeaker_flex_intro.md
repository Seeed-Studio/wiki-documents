---
description: reSpeaker Flex é um poderoso sistema de voz modular com XMOS XVF3800, com arrays de 4 microfones circulares e lineares intercambiáveis para captura de áudio precisa em 360° ou direcional — perfeito para robótica e dispositivos inteligentes.
title: Introdução ao reSpeaker Flex
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg
slug: /respeaker_flex_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 03/26/2026
  author: Kasun Thushara
createdAt: '2026-03-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_introduction/
---
# Introdução ao reSpeaker Flex

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex-banner.jpg" alt="pir" width={800} height="auto" /></p>

O reSpeaker Flex é um sistema modular de processamento de voz com arquitetura dividida, construído em torno do processador XMOS XVF3800, projetado especificamente para robôs e terminais de interação inteligente. Diferente dos arrays de microfones convencionais tudo‑em‑um, o Flex separa a placa principal de processamento da placa do array de microfones, conectadas por um cabo flat FPC flexível, permitindo que o array seja embutido em qualquer posição física dentro do gabinete de um produto enquanto mantém a eletrônica de processamento em outro local.
O sistema suporta duas configurações intercambiáveis de array de microfones: um **array circular de 4 microfones** para captura omnidirecional em 360°, e um **array linear de 4 microfones** para captação direcional frontal com supressão traseira. Ambas as placas se conectam à mesma placa principal por meio de uma interface FPC padronizada de 24 pinos, e o sistema opera em modo USB (UAC 2.0 plug‑and‑play) ou modo I2S para integração embarcada. Um módulo XIAO ESP32S3 opcional pode ser soldado na placa principal para conectividade sem fio e controle expandido.

### Série de microfones circulares

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Circular </th>
    <th>reSpeaker Flex XVF3800 Circular com XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

### Série de microfones lineares

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear</th>
    <th>reSpeaker Flex XVF3800 Linear com XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## Recursos

- **Design modular dividido**: placa principal e placa do array de microfones são fisicamente separadas, conectadas via cabo flat FPC para posicionamento flexível em qualquer chassi de produto

- **Opções de configuração de microfones**: alterne entre array circular de 4 microfones (captação em 360°, espaçamento de 44 mm) ou array linear de 4 microfones (diretividade frontal de 180°, espaçamento de 33 mm) usando a mesma placa principal

- **Processamento de áudio XMOS XVF3800**: conjunto completo de AEC, AGC, DoA, formação de feixe multicanal, VAD, supressão de ruído e desreverberação

- **Modos duplos de operação**: USB UAC 2.0 para plug‑and‑play com PCs e SBCs; modo I2S para integração embarcada direta

- **Conectividade USB dupla**: porta USB‑C e porta com trava PH2.0, ambas com suporte a áudio UAC 2.0 e atualização de firmware DFU

- **Amplificador de alto‑falante integrado**: suporta acionamento de alto‑falantes de 10 W 4 Ohms via conector JST, com saída de fone de ouvido AUX de 3,5 mm

- **Suporte a XIAO ESP32S3 (opcional)**: módulo soldado adiciona Wi‑Fi/Bluetooth, com barramentos I2S e I2C conectados diretamente ao XVF3800 para controle sem fio e encaminhamento de áudio

- **Flexibilidade de firmware**: variantes de firmware USB duplo (2 canais e 6 canais), firmware I2S, atualização DFU via dfu-util e persistência de configuração entre ciclos de energia

- **SDK em Python**: formato de gravação, volume, parâmetros de algoritmo e roteamento de canais ajustáveis via Python

## Componentes principais

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg" alt="pir" width={800} height="auto" /></p>

### Placa principal

| Componente / Recurso | Descrição |
|--------------------|------------|
| **Processador de áudio principal** | XMOS XVF3800 (firmware v3.2.1), lida com todo o DSP de áudio incluindo AEC, formação de feixe, DoA e supressão de ruído |
| **Codec de áudio** | TLV320AIC3104, realiza conversão de áudio e saída DAC |
| **Interface do array de microfones FPC** | Conector FPC de 24 pinos com trava, suporta arrays de até 8 microfones com 2 linhas GPIO |
| **Porta USB‑C** | Áudio UAC 2.0, atualização de firmware DFU e alimentação |
| **Porta PH2.0** | Conector com trava; fornece o mesmo áudio UAC 2.0 e suporte DFU que a porta USB‑C |
| **Conector AUX de 3,5 mm** | Saída lateral de fone de ouvido acionada pelo DAC integrado |
| **Conector JST para alto‑falante** | Conector montado na vertical que aciona alto‑falantes de até 10 W a 4Ω; ilha de solda preservada para conexão de alto‑falante cabeado |
| **Terminal de alimentação externa** | Fornece 12 V para todo o sistema e suporta cargas de alto‑falante de 10 W (prioridade P1) |
| **Botão RST** | Reset de hardware para o XVF3800 |
| **Botão SafeMode (Boot)** | Mantenha pressionado durante a energização para entrar em modo seguro para recuperação de firmware |
| **LED PWR** | Indicador verde de ligado |
| **Ilha de depuração** | Ilha reservada para XMOS XTAG4 (não soldada de fábrica) |
| **Headers de IO do XMOS 3800** | Pinos/ilhas expostos para I2C, I2S, 5V/GND, pinos de alto‑falante e IO restante do XVF3800 |
| **Orifícios de fixação** | 4 × orifícios de montagem M3 |
| **XIAO ESP32S3** | Suporta soldagem do XIAO ESP32S3 quando usado como dispositivo host |
| **GPIO do XIAO ESP32S3** | GPIO restante pode ser usado para IO e expansão de periféricos |

### Placa do array circular

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Recurso | Descrição |
|--------------------|------------|
| **Microfones** | 4× microfones PDM MEMS com espaçamento de 44 mm dispostos em um layout circular |
| **Padrão de captação** | Captura de áudio omnidirecional em 360° |
| **Interface** | Conector FPC para a placa principal |
| **Fixação** | 3 × orifícios de montagem M3 para fixação em gabinete ou carcaça |

### Placa do array linear

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Recurso | Descrição |
|--------------------|------------|
| **Microfones** | 4× microfones PDM MEMS com espaçamento de 33 mm dispostos em um layout linear |
| **Padrão de captação** | Padrão de captação frontal de aproximadamente 180°, com som traseiro suprimido |
| **Interface** | Conector FPC; o cabo pode ser roteado pela lateral ou pela parte traseira |
| **Fixação** | 2 × orifícios de montagem M3 |

### Suporte ao XIAO ESP32S3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>

A placa principal do reSpeaker Flex inclui uma área dedicada para soldagem de um módulo Seeed Studio XIAO ESP32S3, habilitando conectividade Wi‑Fi e Bluetooth além do pipeline de processamento de áudio do XVF3800. Os SKUs que incluem XIAO (-C4-1 e -L4-1) são enviados com esse módulo já montado; os SKUs básicos (-C4-0 e -L4-0) deixam essa área sem população.
Quando o XIAO está instalado, as seguintes conexões são feitas entre ele e o XVF3800:

- **Barramento I2S** — barramento duplo (reprodução e gravação) com BCLK, MCLK e LRCLK compartilhados para streaming de áudio em ambas as direções
- **Barramento I2C** — para leitura e escrita de parâmetros de configuração do XVF3800 a partir do XIAO
- **Linha RST** — o XIAO pode acionar um reset de hardware no XVF3800 por meio de um pino de IO dedicado
- **IO restante do XIAO** — disponibilizado em headers/ilhas de pinos identificados para expansão pelo usuário

### Header de pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>

### Cabo FPC de 24 vias

A interface do array de microfones FPC é um conector de 24 pinos, passo de 0,5 mm, com trava, e o cabo flat FPC de 20 cm incluído na caixa é chaveado para esse conector.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| Pino | Nome do sinal | Tipo | Descrição da função | Notas |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Power | Alimentação dos microfones | Alimentação de 3,3 V |
| 2 | MIC_VDD | Power | Alimentação dos microfones | Pino duplo para maior estabilidade de alimentação |
| 3 | GND | GND | Terra de retorno de alimentação | GND de alimentação |
| 4 | MIC_CLK | Out | Sinal de clock global | Sinal principal, 2–4 MHz |
| 5 | GND | GND | Terra de blindagem do clock | Terra dedicado para o clock |
| 6 | MIC_D1 | In | Linha de dados 1 | Microfone CH1 |
| 7 | GND | GND | Terra de isolamento de D1 | |
| 8 | MIC_D2 | In | Linha de dados 2 | Microfone CH2 |
| 9 | GND | GND | Terra de isolamento de D2 | |
| 10 | MIC_D3 | In | Linha de dados 3 | Microfone CH3 |
| 11 | GND | GND | Terra de isolamento de D3 | |
| 12 | MIC_D4 | In | Linha de dados 4 | Microfone CH4 |
| 13 | GND | GND | Terra de isolamento de D4 | |
| 14 | MIC_D5 | In | Linha de dados 5 | Microfone CH5 |
| 15 | GND | GND | Terra de isolamento de D5 | |
| 16 | MIC_D6 | In | Linha de dados 6 | Microfone CH6 |
| 17 | GND | GND | Terra de isolamento de D6 | |
| 18 | MIC_D7 | In | Linha de dados 7 | Microfone CH7 |
| 19 | GND | GND | Terra de isolamento de D7 | |
| 20 | MIC_D8 | In | Linha de dados 8 | Microfone CH8 |
| 21 | GND | GND | Terra de isolamento de D8 | |
| 22 | GPIO_1 | I/O | Entrada/saída de uso geral | Função de expansão |
| 23 | GPIO_2 | I/O | Entrada/saída de uso geral | Função de expansão |
| 24 | GND | GND | Terra de blindagem dos GPIO | Absorve ruído dos GPIO |

## Introdução

### Preparação de hardware

- Cabo USB Tipo-C
- Computador host ou Raspberry Pi

### Preparação de software

### Uso imediato (Out of Box)

#### Reset

O botão de reset (RST) fornece um reset de hardware para o reSpeaker Flex quando pressionado; ele reinicia o chip e reinicializa o sistema desde o começo, como em um ciclo completo de energia.

#### Conexão do alto-falante

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

Aqui você pode ver como conectar alto-falantes usando o conector de fone de ouvido AUX de 3,5 mm ou a interface JST de alto-falante onboard, dependendo da sua preferência de saída de áudio.

#### Modo de segurança

**Safe Mode** é um modo especial de recuperação no **reSpeaker Flex** que permite gravar firmware via **USB DFU** ou I2C para dispositivos como o **ESP32**.

Se você já tiver gravado o **firmware I2S** e quiser voltar para o **firmware USB**, você pode entrar no **Safe Mode** e regravar o firmware USB usando **USB DFU**.

:::note

- Firmware USB
  - Suporta apenas USB DFU.
  - Você pode atualizar o dispositivo por meio de uma conexão USB.
  - Não suporta I2C DFU.
- Firmware I2S
  - Suporta I2C DFU.
  - Permite atualizações de firmware através da interface I2C.
  - Não suporta USB DFU.
- Firmware Safe Mode
  - Armazenado na partição Factory.
  - Suporta tanto USB DFU quanto I2C DFU.
  - Este é o firmware de recuperação mais flexível.

:::

**Use o Safe Mode nas seguintes situações**

- Seu firmware **não está funcionando corretamente** (por exemplo, **USB não é detectado**).
- Você precisa **regravar um novo firmware**, mas o firmware atual **não está respondendo**.
- Você **gravou o firmware errado por engano** e quer recuperar o dispositivo.

 **Como entrar no Safe Mode**

- **Desligue** completamente o dispositivo.
- **Pressione e segure o botão Boot**.
- Enquanto mantém pressionado o **botão Boot, reconecte a alimentação.**
Use a ferramenta de linha de comando DFU util para verificar as partições DFU; consulte a seção **Install DFU Util** abaixo para mais detalhes.

### Atualizar firmware

Três versões de firmware estão disponíveis no repositório oficial do GitHub. Você pode escolher e gravar o firmware apropriado dependendo dos requisitos da sua aplicação. Para mais detalhes e downloads, consulte o [Link](https://github.com/respeaker/reSpeaker_Flex) do Github

:::note
Certifique-se de que você precisa baixar todo o repositório.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

O firmware USB é projetado para uso com sistemas operacionais host como **Windows, Linux e macOS** ao se comunicar através da interface de hardware USB.
Duas variantes de firmware estão disponíveis: **respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin**, que fornece áudio de 2 canais, e **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin**, que fornece áudio de 6 canais. Ambas as versões de firmware operam a uma taxa de amostragem de 16 kHz com profundidade de 32 bits.

Você pode explorar esses arquivos de firmware neste link

| Firmware                         | Canais | Observações                                                   |
|----------------------------------|--------|---------------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 Canais | 16 kHz, 6 canais usando matriz de microfones circular         |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 Canais | 16 kHz, 6 canais usando matriz de microfones linear           |
| respeaker_flex_ua-io16-cir.bin     | 2 Canais | 16 kHz, saída estéreo usando matriz de microfones circular    |
| respeaker_flex_ua-io16-lin.bin     | 2 Canais | 16 kHz, saída estéreo usando matriz de microfones linear      |
| respeaker_flex_ua-io48-cir.bin     | 2 Canais | 48 kHz, saída estéreo usando matriz de microfones circular    |
| respeaker_flex_ua-io48-lin.bin     | 2 Canais | 48 kHz, saída estéreo usando matriz de microfones linear      |

Conecte o reSpeaker Flex ao seu PC via cabo USB. Observe que você precisa usar a porta XMOS USB-C (próxima ao botão RST) para gravar o firmware da XMOS.

</TabItem>

 <TabItem value="I2S" label="I2S">

O firmware I2S é destinado ao uso quando o dispositivo está conectado a um microcontrolador host como o XIAO ESP32S3. Nessa configuração, os dados de voz são transmitidos usando o protocolo I2S. O arquivo de firmware **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** está disponível aqui. Este firmware suporta áudio de 2 canais com profundidade de 32 bits a uma taxa de amostragem de 16 kHz.

| Firmware                                      | Canais | Observações                                                     |
|-----------------------------------------------|--------|-----------------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 Canais | 16 kHz, saída estéreo, matriz de microfones circular   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 Canais | 16 kHz, saída estéreo, matriz de microfones linear|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 Canais | 48 kHz, saída estéreo, matriz de microfones circular|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 Canais | 48 kHz, saída estéreo, matriz de microfones linear|

Conecte o reSpeaker Flex ao seu PC via cabo USB. Observe que você precisa usar a porta XMOS USB-C (próxima ao botão RST) para gravar o firmware da XMOS.

</TabItem>
</Tabs>

### Instalar DFU Util

`dfu-util` é uma ferramenta de linha de comando para atualização de firmware de dispositivo via USB.

<Tabs>
<TabItem value="windows" label="Windows">

- Baixe `dfu-util-0.11-binaries.tar.xz` e extraia-o, por exemplo, em `D:\dfu-util-0.11-binaries\win64\`  
  [Download Link](http://dfu-util.sourceforge.net/)

- Adicione o caminho para `dfu-util.exe` à variável de sistema `Path`:  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- Abra o **Command Prompt** (`cmd`) e verifique a instalação:

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- Conecte o reSpeaker Flex e verifique a detecção do dispositivo:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> Se você obtiver:  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> Prossiga com a etapa de instalação do driver abaixo.

- Instale [Zadig](https://zadig.akeo.ie/)  
  - Abra o Zadig → `Options > List All Devices`  
  - Selecione `reSpeaker XVF3800 Flex`  
  - Instale o driver **WinUSB**  
  - Desligue e ligue o dispositivo  
  - Execute `dfu-util -l` novamente para confirmar a detecção.

</TabItem>

 <TabItem value="macos" label="macOS">

- Instale o dfu-util com Homebrew:

```bash
brew install dfu-util
```

- Verifique se o dispositivo foi detectado:

```bash
dfu-util -l
```

**Saída esperada:**

```
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

</TabItem>

<TabItem value="linux" label="Linux">

- Instale o dfu-util:

```bash
sudo apt install dfu-util
```

- Conecte o XVF3800 e verifique a detecção:

```bash
sudo dfu-util -l
```

**Saída esperada:**

```bash
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

  </TabItem>
</Tabs>

### Gravar firmware

Baixe o repositório completo de firmware do GitHub aqui reSpeaker Flex XVF 3800

- Execute o seguinte comando para gravar o firmware

  - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- No Linux, execute com sudo

  - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

## Gravar e reproduzir com o firmware USB

<Tabs>
<TabItem value="windows" label="Windows">

### Configurar o Audacity (Windows)

1. Abra o **Audacity**
2. Vá para **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting.png" alt="pir" width={600} height="auto" /></p>

3. Defina:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker XVF3800 Flex`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz` (tanto para **Project** quanto para **Default Sample Rate**)
   - **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. Clique em **OK**
2. Tudo pronto — comece a gravar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Configurar o Audacity (macOS)

1. Abra o **Audacity**
2. Vá para **Audio Setup** e selecione **Recording Device** como **reSpeaker 3800 Flex**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. Vá para **Audio Setting** e defina:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Dispositivo de gravação**: `reSpeaker 3800 Flex`
- **Canais**: `2 (Stereo)`
- **Taxa de amostragem**: `16000 Hz` (para ambos **Project** e **Default Sample Rate**)
- **Formato de amostra**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. Clique em **OK**
5. Pronto para gravar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Gravando no Raspberry Pi (linha de comando)

1. **Encontrar o número da placa de som**:

```bash
arecord -l
```

Exemplo de saída:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 Neste caso, **o número da placa é 3**

---

2. **Gravar áudio (5 segundos)**:

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 Substitua `3` pelo número real da sua placa de som

---

3. **Ajustando o volume do reSpeaker XVF3800 no ALSA**

```bash
alsamixer
```

No alsamixer, use as teclas de seta esquerda/direita para navegar até o dispositivo de som correto. Use a tecla de seta para cima para aumentar o volume.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **Reprodução**:

```bash
aplay -D plughw:3,0 output.wav
```

### Gravando no Raspberry Pi (Audacity)

1. **Instalar o Pi-Apps (se ainda não estiver instalado)**

Abra um terminal no seu Raspberry Pi. Execute o seguinte comando para instalar o Pi-Apps

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

Aguarde a conclusão da instalação. Um novo ícone do Pi-Apps aparecerá no seu menu.

2. **Instalar o Audacity via Pi-Apps**

3. **Configurar entrada e saída de áudio**

- Clique em "Audio Setup" na barra de ferramentas.
- Selecione "Audio Settings" no menu suspenso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- Na janela de configurações de áudio:
  - Escolha o dispositivo de gravação correto (por exemplo, reSpeaker XVF3800 Flex).
  - Escolha o dispositivo de reprodução apropriado (por exemplo, reSpeaker XVF3800 Flex).
  - Certifique-se de que Host esteja definido como ALSA para melhor compatibilidade no Raspberry Pi.
- Clique em OK para aplicar as configurações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Gravar e reproduzir áudio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## Como ajustar parâmetros?

O ajuste permite que os usuários configurem parâmetros dos algoritmos de áudio integrados e se comuniquem diretamente com o chip XMOS.

É fornecida uma interface de controle em Python dedicada para configuração de parâmetros e interação com o dispositivo.


[**Diretório de controle em Python**](https://github.com/respeaker/reSpeaker_Flex/tree/main/python_control)

Usando os scripts Python fornecidos, você pode:

* Configurar parâmetros de algoritmos de áudio integrados
* Obter dados de DoA (Direction of Arrival)
* Obter dados de VAD (Voice Activity Detection)
* Controlar os LEDs onboard
* Controlar o pipeline de processamento de voz
* Comunicar-se diretamente com o dispositivo XMOS

**Requisitos do sistema**

As seguintes dependências são necessárias para usar a interface de controle em Python:

* Python 3.6 ou superior
* Biblioteca Python `pyusb`
* Biblioteca de sistema `libusb`


### Instalação e dependências

Instale a dependência Python necessária usando:

```bash
pip install pyusb
```

Dependendo do seu sistema operacional, você também pode precisar instalar o pacote `libusb` separadamente.

---

### Uso

**Sintaxe básica**

```bash
python xvf_host.py [options] command [value(s)...]
```

---

**Opções de comando**

| Opção         | Descrição                                             |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | Lista todos os comandos suportados com informações detalhadas |
| `--vid`        | Define o USB Vendor ID (padrão: `0x2886`)            |
| `--pid`        | Define o USB Product ID (padrão: `0x001A`)           |
| `--values`     | Fornece valores para comandos de escrita (opcional)  |

---

### Exemplos de uso

**1. Listar todos os comandos disponíveis**

```bash
python xvf_host.py --list
```

Exibe todos os comandos suportados e suas descrições.

---

**2. Ler informações da versão do firmware**

```bash
python xvf_host.py VERSION
```

Lê e exibe as informações da versão atual do firmware a partir do dispositivo.

---

**3. Ler valores de DOA (Direction of Arrival)**

```bash
python xvf_host.py DOA_VALUE
```

Obtém o valor atual de Direction of Arrival (DOA) detectado pelo array de microfones.

## Solução de problemas

### A reprodução de som na saída do alto-falante não é suficiente?

Se o volume de saída do alto-falante do **reSpeaker Flex** estiver muito baixo no Linux, talvez seja necessário ajustar os **níveis do mixer ALSA** para a placa de som XVF3800. Siga as etapas abaixo para aumentar o volume de saída.

**Passo 1: Abrir o ALSA Mixer**

1. Abra um terminal.
2. Digite o seguinte comando e pressione **Enter**:

   ```bash
   alsamixer
   ```

**Passo 2: Selecionar a placa de som XVF3800 Flex**

1. Pressione **F6** para abrir o menu de seleção de placa de som.
2. Use as **setas para cima/baixo** para destacar a placa de som **XVF3800 Flex**.
3. Pressione **Enter** para confirmar a seleção.

**Passo 3: Ajustar o volume do PCM-1**

1. Use as **setas esquerda/direita** para navegar até **PCM-1**.
2. Use a **seta para cima** para aumentar o nível de volume até **100%**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**Passo 4: Salvar as configurações do ALSA**

1. Pressione **ESC** para sair do `alsamixer`.
2. Antes de desconectar o reSpeaker Flex, execute o seguinte comando para salvar suas configurações:

```bash
   sudo alsactl store
   ```

**Passo 5: Opção adicional (usando PulseAudio)**

Se você ainda não conseguir ouvir o som claramente após ajustar os níveis do ALSA, tente instalar o **PulseAudio Volume Control** para ajustes de volume mais detalhados:

```bash
sudo apt install pavucontrol -y
```

Você pode então abrir o **pavucontrol** e aumentar o volume de saída além de 100% se necessário.

### Não é possível usar como dispositivo de som no Windows após gravar o firmware?

Abra o menu Iniciar e digite Device manager. Encontre os dispositivos reSpeaker Flex relacionados, clique com o botão direito neles e selecione Uninstall devices. Depois disso, reinicie o dispositivo (desconecte e reconecte o USB) e o Windows irá reinstalar o driver de placa de som correto para ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>


## Recursos

[Arquivo step circular do reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_260210.step)

[Arquivo step linear do reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear.step)

[Arquivo Step da placa principal do reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate.step)



## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
