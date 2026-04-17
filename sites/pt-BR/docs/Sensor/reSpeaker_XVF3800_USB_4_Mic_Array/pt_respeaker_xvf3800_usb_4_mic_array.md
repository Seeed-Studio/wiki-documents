---
description: Comece a usar o ReSpeaker XVF3800 USB 4-Mic Array — um módulo de interface de voz de alto desempenho com captura de voz e suporte multiplataforma via USB ou I2C.
title: Introdução ao reSpeaker XVF3800 USB Mic Array
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_xvf3800_introduction
sku: 101991441,114993701
last_update:
  date: 11/10/2025
  author: Kasun Thushara
createdAt: '2025-08-20'
updatedAt: '2026-03-06'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/
---

# Introdução ao ReSpeaker XVF3800

## Visão geral

O ReSpeaker XVF3800 USB 4-Mic Array é um array circular profissional de 4 microfones com XMOS XVF3800, com AEC, AGC, DoA, formação de feixe, VAD, supressão de ruído, desreverberação, captura de voz em 360° (até 5 m) e modos de operação duplos para aplicações avançadas de voz.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- **Atualização de chip** :De XVF3000 para XVF3800

- **Array de quatro microfones** :4 microfones de alto desempenho em padrão circular para captura de voz em campo distante de 360° até 5 metros

- **Processamento de áudio avançado** :Com tecnologia XVF3800 com AEC, formação de múltiplos feixes, desreverberação, detecção de DoA, supressão dinâmica de ruído, faixa de AGC de 60 dB

- **Número de série exclusivo do dispositivo** :SN integrado permite implantações com múltiplos dispositivos e gerenciamento avançado de dispositivos

- **Modos de operação duplos** :Modo USB plug-and-play para conectividade instantânea ao PC e modo INT-Device (I2S) para integração com sistemas embarcados — configurável via comandos USB ou I2C alternando o firmware conforme necessário

- **Compatível com código aberto** :Funciona com hosts USB (Windows, macOS, Raspberry Pi OS) e hosts I2S (XIAO Series, ESP32, Arduino).

- **Feedback visual** :LEDs RGB programáveis e indicadores de status mostram os estados do dispositivo e a atividade de voz

- **Qualidade de áudio igual ou melhor** :em comparação com o modelo anterior

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Principais componentes

| **Componente / Recurso**      | **Descrição**                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Processador de áudio principal** | **XMOS XVF3800**, realiza o processamento de áudio incluindo AEC, formação de feixe, supressão de ruído, etc. |
| **Array de microfones**       | **Quatro microfones PDM MEMS** em padrão circular, com suporte a **captura de voz em campo distante de 360° (5 m)**. |
| **Codec de áudio**            | **TLV320AIC3104**, realiza a conversão e saída de áudio.                                             |
| **LEDs RGB**                  | **12x WS2812** LEDs RGB endereçáveis individualmente para feedback visual (por exemplo, status, atividade de voz). |
| **Botão de mute**             | Pressione para **ativar/desativar o mute** da entrada do microfone.                                 |
| **LED indicador de mute**     | Acende (normalmente vermelho) para indicar que o áudio está em mute.                                |
| **Botão de reset**            | Reset de hardware para a placa/sistema.                                                             |
| **Porta USB Type-C**          | Usada tanto para **alimentação quanto para dados** (compatível com USB Audio Class 2.0).            |
| **Conector de fone de ouvido 3,5 mm AUX** | Saída de áudio para fones de ouvido ou caixas de som ativas.                                        |
| **Conector de alto-falante**  | **Interface de alto-falante JST**, suporta **alto-falantes amplificados de 5 W**.                   |
| **Pads de depuração**         | Acesso de depuração para **XTAG4** ou outros programadores.                                         |
| **Headers I2C e I2S**         | Headers expostos para **comunicação I2C e I2S** com dispositivos externos.                           |
| **Pads de IO não utilizados (XIAO)** | Pads de I/O adicionais soldados conectados ao módulo XIAO.                                          |
| **Comunicação I2S e I2C**     | Suporta conexão a hosts externos como Raspberry Pi, PC, etc. usando esses protocolos.               |
| **Modos USB e INT-Device**    | Operação em modo duplo: USB plug-and-play ou modo de dispositivo interno INT via I2S.               |
| **Número de série exclusivo** | **SN do dispositivo** integrado para identificação e gerenciamento de múltiplos dispositivos.        |
| **Compatibilidade com código aberto** | Funciona com **Arduino, Raspberry Pi, PC/Mac** e é compatível com **XIAO Series**.                  |
| **Recursos avançados de áudio** | AEC, formação de feixe, desreverberação, **detecção de DoA**, supressão de ruído baseada em DNN, AGC de 60 dB. |
| **Feedback visual**           | Estado do dispositivo e atividade de áudio exibidos por meio de **padrões de LED RGB** e **indicadores de status**. |
| **Qualidade de áudio**        | Igual ou melhor que os **projetos anteriores baseados em XVF3000**.                                 |

:::note
O ReSpeaker XVF3800 é oferecido em duas variantes — uma sem XIAO e outra com o XIAO ESP32S3 integrado. A versão sem XIAO opera com o firmware USB padrão. Para usar a versão com XIAO integrado, você deve gravar um firmware desenvolvido para o **modo INT-Device (I2S)**. Para instruções detalhadas de configuração, consulte o [guia oficial da wiki](/pt-br/respeaker_xvf3800_xiao_getting_started).
:::

### Suporte ao XIAO ESP32S3

- Entrada/saída I2S estéreo com múltiplas opções de saída; interface I2C para configurar e gerenciar parâmetros do XVF3800.
- Reset do XIAO via pino de IO
- Interface e pads de solda

### Pinagem

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### Visão geral dos GPIO

O reSpeaker XVF3800 expõe 3 pinos de entrada (GPI) e 5 pinos de saída (GPO) para controle externo. Você pode usá-los para ler estados de botões ou controlar hardware como o LED de mute, o amplificador ou LEDs.

| **Nome do pino** | **Direção** | **Função**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Entrada (RO)  | Status do botão de mute (alto quando liberado)       |
| X1D13        | Entrada (RO)  | Flutuante                                           |
| X1D34        | Entrada (RO)  | Flutuante                                           |
| X0D11        | Saída (RW)    | Flutuante                                           |
| X0D30        | Saída (RW)    | Controle do LED de mute + mute do microfone (alto = mute) |
| X0D31        | Saída (RW)    | Habilitação do amplificador (baixo = habilitado)     |
| X0D33        | Saída (RW)    | Controle de alimentação do LED WS2812 (alto = ligado) |
| X0D39        | Saída (RW)    | Flutuante                                           |

## Introdução

### Preparação de hardware

- Cabo USB Type-C  
- Computador host ou Raspberry Pi

### Preparação de software

### Uso imediato (Out of Box)

#### DOA (Direction of Arrival)

Você pode experimentar o array de LEDs seguindo a direção da voz que chega.

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/nYxsTq_2bw4"
          title="ReSpeaker XVF3800 Plug & Play: Boot Light Show and DOA Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

#### Botão de mute

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

O **botão de mute** do seu ReSpeaker é usado para **desativar temporariamente a captura de voz** do array de microfones.
O que acontece quando você pressiona o botão de mute?

- Os **microfones são silenciados** — vozes externas não serão mais capturadas ou processadas.
- Um **LED vermelho acende** para indicar que o **modo mute está ativo**.
- Isso significa que o ReSpeaker **não enviará nenhuma entrada de áudio** para o seu computador ou dispositivo host.

**Experimente você mesmo com o Audacity**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### Botão de reset

O botão de reset (RST) fornece um reset de hardware para o XVF3800 — quando pressionado, ele reinicia o chip e reinicializa o sistema desde o começo, como em um ciclo completo de energia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### Conexão de alto-falante

Aqui você pode ver como conectar alto-falantes usando o conector de fone de ouvido 3,5 mm AUX ou a interface de alto-falante JST integrada, dependendo da sua preferência de saída de áudio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### Modo de segurança

O Modo de segurança é um modo especial de recuperação no ReSpeaker XVF3800 que permite gravar firmware via USB DFU ou I2C — para dispositivos como o Raspberry Pi e o ESP32. Se você já gravou o firmware I2S anteriormente e deseja voltar para o firmware USB, pode entrar no Modo de segurança e regravar o firmware USB usando USB DFU.

:::note
Cada tipo de firmware no ReSpeaker XVF3800 oferece suporte a diferentes métodos de atualização:

- O **firmware USB** oferece suporte apenas a **USB DFU**, o que significa que você pode atualizar o dispositivo usando uma conexão USB. No entanto, ele **não oferece suporte a I2C DFU**.

- O **firmware I2S** é o oposto — ele oferece suporte a **I2C DFU**, permitindo atualizações de firmware por meio de uma interface I2C, mas **não oferece suporte a USB DFU**.

- O **firmware de Modo de Segurança**, que é armazenado na partição Factory, é o mais flexível. Ele oferece suporte a **USB DFU e I2C DFU**.

:::

**Quando usar o Modo de Segurança**

- Seu firmware não está funcionando corretamente (por exemplo, USB não é detectado, o LED não acende como esperado).
- Você precisa regravar um novo firmware, mas o atual não responde.
- Você acidentalmente gravou algo errado e quer recuperar o dispositivo.

**Como entrar no Modo de Segurança**

- Desligue completamente o dispositivo.
- Pressione e segure o botão Mute.
- Enquanto mantém o botão mute pressionado, reconecte a alimentação.
- O LED vermelho começará a piscar — isso confirma que o dispositivo agora está em Modo de Segurança.
- Agora o dispositivo executa o firmware de Modo de Segurança armazenado na partição Factory.

### Atualizar Firmware

Três versões de firmware estão disponíveis no repositório oficial do GitHub. Você pode escolher e gravar o firmware apropriado dependendo dos requisitos da sua aplicação. Para mais detalhes e downloads, consulte o [Github Link](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

:::note 
Certifique-se de que você precisa baixar o repositório inteiro. 
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

O firmware USB é projetado para uso com sistemas operacionais host como **Windows, Linux e macOS** ao se comunicar por meio da interface de hardware USB.

Duas variantes de firmware estão disponíveis: **respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin**, que fornece áudio de **2 canais**, e **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin**, que fornece áudio de **6 canais**. Ambas as versões de firmware operam a uma taxa de amostragem de **16 kHz** com profundidade de **32 bits**.

Você pode explorar esses arquivos de firmware [neste link](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)



| Firmware | Canais | Observações |
|---------|----------|-------|
| respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin | 2 | Saída processada de 2 canais <br /> Canal 0: Conferência <br /> Canal 1: ASR |
| respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin | 6 | Canal 0: Áudio processado (Conferência) <br /> Canal 1: Áudio processado (ASR) <br /> Canal 2: Dados brutos do Mic 0 <br /> Canal 3: Dados brutos do Mic 1 <br /> Canal 4: Dados brutos do Mic 2 <br /> Canal 5: Dados brutos do Mic 3 |


</TabItem>

 <TabItem value="I2S" label="I2S">

O firmware I2S é destinado ao uso quando o dispositivo está conectado a um microcontrolador host como o **XIAO ESP32S3**. Nessa configuração, os dados de voz são transmitidos usando o protocolo I2S.

O arquivo de firmware **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** está disponível [aqui](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s). Este firmware oferece suporte a áudio de **2 canais** com profundidade de **32 bits**.

| Firmware | Canais | Observações |
|---------|----------|-------|
| respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin | 2 | Saída processada de 2 canais <br /> Canal 0: Conferência <br /> Canal 1: ASR |

</TabItem>

<TabItem value="HA" label="HA">

O firmware para Home Assistant é outro firmware baseado em I2S, projetado especificamente para integração com o Home Assistant. Este firmware otimizado usa áudio de 2 canais com taxa de amostragem de 48 kHz, proporcionando melhor compatibilidade e desempenho dentro do ambiente Home Assistant.
Você pode visualizar o firmware a partir de [aqui](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration/tree/main)



| Firmware | Canais | Observações |
|---------|----------|-------|
| respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k.bin | 2 | Saída processada de 2 canais <br /> Canal 0: ASR <br /> Canal 1: Palavra de ativação |

  </TabItem>
</Tabs>



Conecte o reSpeaker XVF3800 ao seu PC via cabo USB. Observe que você precisa usar a porta XMOS USB-C (próxima à porta jack de 3,5 mm) para gravar o firmware da XMOS.



#### Instalar DFU Util

[`dfu-util`](http://dfu-util.sourceforge.net/) é uma ferramenta de linha de comando para atualização de firmware de dispositivos via USB.



<Tabs>
<TabItem value="windows" label="Windows">

- Baixe `dfu-util-0.11-binaries.tar.xz` e extraia-o, por exemplo, para `D:\dfu-util-0.11-binaries\win64\`  
  [Download Link](http://dfu-util.sourceforge.net/)

- Adicione o caminho para `dfu-util.exe` à variável de sistema `Path`:  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- Abra o **Prompt de Comando** (`cmd`) e verifique a instalação:

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- Conecte o ReSpeaker XVF3800 e verifique a detecção do dispositivo:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> Se você obtiver:  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> Prossiga com a etapa de instalação do driver abaixo.

- Instale o [Zadig](https://zadig.akeo.ie/)  
  - Abra o Zadig → `Options > List All Devices`  
  - Selecione `reSpeaker 3800` ou `reSpeaker XVF3800 4-Mic Array`  
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

#### Gravar Firmware

Baixe o repositório completo de firmware do GitHub aqui [`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- Execute o seguinte comando para gravar o firmware

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- No Linux, execute-o com sudo

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- A opção `-R` irá reiniciar automaticamente a placa após a gravação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- Verifique novamente a versão do firmware com o comando `dfu-util -l`, para garantir que o novo firmware foi gravado

## Gravação e Reprodução

<Tabs>
<TabItem value="windows" label="Windows">

### Configurar o Audacity (Windows)

1. Abra o **Audacity**
2. Vá para **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw1.png" alt="pir" width={600} height="auto"/></p>

3. Defina:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker 3800`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz` (para **Project** e **Default Sample Rate**)
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. Clique em **OK**
2. Tudo pronto — comece a gravar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Configurar o Audacity (macOS)

1. Abra o **Audacity**
2. Vá para **Audio Setup** e selecione **Recording Device** como **reSpeaker 3800**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. Vá para **Audio Setting** e defina:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz` (para **Project** e **Default Sample Rate**)
- **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. Clique em **OK**
5. Pronto para gravar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Gravação no Raspberry Pi (Linha de Comando)

1. **Encontrar o número da placa de som**:

```bash
arecord -l
```

Exemplo de saída:

```
**** List of CAPTURE Hardware Devices ****
card 4: Array [reSpeaker XVF3800 4-Mic Array], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

 Neste caso, **o número da placa é 4**

---

2. **Gravar áudio (5 segundos)**:

```bash
arecord -D plughw:4,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 Substitua `4` pelo número real da sua placa de som

---

3. **Ajustando o volume do ReSpeaker XVF3800 no ALSA**

```bash
alsamixer
```

No alsamixer, use as teclas de seta esquerda/direita para navegar até o dispositivo de som correto. Use a tecla de seta para cima para aumentar o volume.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **Reprodução**:

```bash
aplay -D plughw:4,0 output.wav
```

### Gravação no Raspberry Pi (Audacity)

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

- Na janela Audio Settings:
  - Escolha o dispositivo de gravação correto (por exemplo, reSpeaker XVF3800).
  - Escolha o dispositivo de reprodução apropriado (por exemplo, reSpeaker XVF3800).
  - Certifique-se de que Host esteja definido como ALSA para melhor compatibilidade no Raspberry Pi.
- Clique em OK para aplicar as configurações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Gravar e reproduzir áudio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## Como controlar o reSpeaker XVF3800

O reSpeaker XVF3800 está equipado com uma interface de controle que permite aos usuários configurar a operação do dispositivo, definir ou ler dados de parâmetros e salvar dados de parâmetros no dispositivo. Os usuários podem controlar o dispositivo via interface USB ou I2C. Um aplicativo host de exemplo, xvf_host (para Linux, macOS e Raspberry Pi OS) ou xvf_host.exe (para Windows), é fornecido para se conectar facilmente à interface de controle do reSpeaker XVF3800.

Baixe a partir [daqui](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)

:::note
Se você quiser explorar mais sobre o controle via xvf_host, leia este [artigo](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md).
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Usuários Windows

- Certifique-se de que o ReSpeaker XVF3800 esteja conectado via USB
- Extraia `xvf_host.exe` para uma pasta como:

```text
C:\Tools\xvf_host\
```

---

**Verificar instalação**

```bash
cd C:\Tools\xvf_host
xvf_host.exe --help
```

---

**Verificar conexão do dispositivo**

```bash
xvf_host.exe VERSION
```

Saída esperada:

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

---

**Controle de LED**

| Comando | Exemplo | Descrição |
|--------|---------|-------------|
| `led_effect` | `xvf_host.exe led_effect 1` | 0=desligado, 1=respiração, 2=arco-íris, 3=sólido, 4=DoA |
| `led_color` | `xvf_host.exe led_color 0xff8800` | Define a cor em hexadecimal (laranja) |
| `led_speed` | `xvf_host.exe led_speed 1` | Define a velocidade do efeito |
| `led_brightness` | `xvf_host.exe led_brightness 255` | Define o brilho |
| `led_gammify` | `xvf_host.exe led_gammify 1` | Ativa a correção de gama |
| `led_doa_color` | `xvf_host.exe led_doa_color 0x0000ff 0xff0000` | Define a cor base/direcional do DoA |

🟠 Exemplo (respiração laranja):

```bash
xvf_host.exe led_effect 1
xvf_host.exe led_color 0xff8800
xvf_host.exe led_speed 1
xvf_host.exe led_brightness 255
```

**Configuração**

```bash
xvf_host.exe save_configuration 1
xvf_host.exe clear_configuration 1
```

---

**Controle de GPIO**

**Ler entradas:**

```bash
xvf_host.exe GPI_READ_VALUES
```

Exemplo de saída: `GPI_READ_VALUES 1 0 0`

Neste exemplo, o retorno 1 0 0 significa que o pino X1D09 está em nível alto, o pino X1D13 está em nível baixo e o pino X1D34 está em nível baixo.

**Ler saídas:**

```bash
xvf_host.exe GPO_READ_VALUES
```

Exemplo de saída: `GPO_READ_VALUES 0 1 1 0 0`

Neste exemplo, o retorno 0 0 0 1 0 significa que o pino X0D11 está em nível baixo, o pino X0D30 está em nível baixo, o pino X0D31 está em nível alto, o pino X0D33 está em nível alto e o pino X0D39 está em nível baixo.

**Definir saída:**

```bash
xvf_host.exe GPO_WRITE_VALUE 30 1  # Turn ON mute LED
xvf_host.exe GPO_WRITE_VALUE 30 0  # Turn OFF mute LED
```

**Direção de chegada (DoA)**

- O DoA informa de qual direção alguém está falando.
- O **anel de LED** no ReSpeaker XVF3800 mostra a direção usando luzes.
- Você também pode ler os valores de DoA usando a ferramenta `xvf_host`.

Comando para verificar valores de DoA

```bash
xvf_host.exe AEC_AZIMUTH_VALUES
```

Exemplo de saída

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Focused beam 1**: Primeira direção fixa de escuta
- **Focused beam 2**: Segunda direção fixa de escuta
- **Free running beam**: Sempre escaneando a direção
- **Auto selected beam**: Feixe final escolhido para o melhor áudio (usado para indicação de DoA)

**Indicação de fala**

- A energia de fala mostra quão forte é o sinal de voz — como um medidor de volume de fala.
- Usada para detectar se alguém está falando e quão alto/perto está.
- Ruído, eco e distância podem afetar o valor de energia.

 Comando para verificar a energia de fala:

```bash
xvf_host.exe AEC_SPENERGY_VALUES
```

Exemplo de saída

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Focused beam 1**: Energia do primeiro feixe
- **Focused beam 2**: Energia do segundo feixe
- **Free running beam**: Energia do feixe de varredura
- **Auto selected beam**: Energia do feixe escolhido para a saída final

**Canais de saída de áudio**

- O XVF3800 fornece **2 canais de áudio**:
  - **Canal esquerdo**: Áudio limpo, pós-processado
  - **Canal direito**: Feixe de ASR ou dados de eco/referência

Você pode **redirecionar** esses canais para emitir diferentes fontes.

Comandos de exemplo

Definir o canal esquerdo para Microfone Amplificado 0

```bash
xvf_host.exe AUDIO_MGR_OP_L 3 0
```

Definir o canal direito para dados de Far End (referência)

```bash
xvf_host.exe AUDIO_MGR_OP_R 5 0
```

Exemplo de saída:

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**Modo de feixe fixo**

Veja como configurar o modo de feixe fixo para detectar a faixa de 0–45 graus

Definir ângulos de azimute 
```bash
xvf_host.exe AEC_FIXEDBEAMSAZIMUTH_VALUES  0.0 0.785
```
Definir elevação para 0

```bash
xvf_host.exe AEC_FIXEDBEAMSELEVATION_VALUES  0.0 0.0
```
Ativar modo de feixe fixo
```bash
xvf_host.exe AEC_FIXEDBEAMSONOFF  1
```

**Parâmetros de ajuste (Deixe o som melhor!)**

- Essas configurações ajudam a melhorar **cancelamento de eco**, **supressão de ruído**, **ganho**, etc.
- **Use-as quando as configurações padrão não forem boas o suficiente.**

 Parâmetros comuns:

| Parâmetro             | Significado                                         |
|-----------------------|-------------------------------------------------|
| **AUDIO_MGR_REF_GAIN**   | Ganho de entrada do alto-falante (sinal de eco)             |
| **AUDIO_MGR_MIC_GAIN**   | Ganho de entrada do microfone (quão alto o microfone ouve) |
| **AUDIO_MGR_SYS_DELAY**  | Atraso entre os sinais do microfone e do alto-falante         |
| **PP_AGCMAXGAIN**        | Nível máximo de controle automático de ganho              |
| **AEC_ASROUTGAIN**       | Ganho para a saída do feixe de ASR                      |

Para documentação mais detalhada e comandos avançados, visite o repositório oficial no GitHub:  
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>

<TabItem value="linux" label="macOS / Linux / Raspberry Pi">

### Para Raspberry Pi

- Conecte o XVF3800 via USB ou I2C
- Torne `xvf_host` executável:

```bash
cd /path/to/xvf_host
chmod +x xvf_host
```

---

**Verificar instalação**

```bash
./xvf_host --help
./xvf_host VERSION
```

Esperado:

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

**Usando I2C:**

```bash
./xvf_host --use i2c VERSION
```

---

**Controle de LED (igual ao Windows, prefixe com ./)**

```bash
./xvf_host led_effect 1
./xvf_host led_color 0xff8800
./xvf_host led_speed 1
./xvf_host led_brightness 255
```

**Configuração**

```bash
./xvf_host save_configuration 1
./xvf_host clear_configuration 1
```

---

**Controle de GPIO**

```bash
chmod +x ./xvf_host
```

**Ler entradas:**

```bash
./xvf_host GPI_READ_VALUES
```

Exemplo de saída: `GPI_READ_VALUES 1 0 0`

Neste exemplo, o retorno 1 0 0 significa que o pino X1D09 está em nível alto, o pino X1D13 está em nível baixo e o pino X1D34 está em nível baixo.

**Ler saídas:**

```bash
./xvf_host GPO_READ_VALUES
```

Exemplo de saída: `GPO_READ_VALUES 0 1 1 0 0`

Neste exemplo, o retorno 0 0 0 1 0 significa que o pino X0D11 está em nível baixo, o pino X0D30 está em nível baixo, o pino X0D31 está em nível alto, o pino X0D33 está em nível alto e o pino X0D39 está em nível baixo.

**Definir saídas:**

```bash
./xvf_host GPO_WRITE_VALUE 30 1
./xvf_host GPO_WRITE_VALUE 30 0
```

**Direção de chegada (DoA)**

- O DoA informa de qual direção alguém está falando.
- O **anel de LED** no ReSpeaker XVF3800 mostra a direção usando luzes.
- Você também pode ler os valores de DoA usando a ferramenta `xvf_host`.

Comando para verificar valores de DoA

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

Exemplo de saída

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Focused beam 1**: Primeira direção fixa de escuta
- **Feixe focado 2**: Segunda direção de escuta fixa
- **Feixe em execução livre**: Direção sempre em varredura
- **Feixe selecionado automaticamente**: Feixe final escolhido para o melhor áudio (usado para indicação de DoA)

**Indicação de fala**

- A Energia de Fala mostra quão forte é o sinal de voz — como um medidor de volume de fala.
- Usada para detectar se alguém está falando e quão alto/perto essa pessoa está.
- Ruído, eco e distância podem afetar o valor de energia.

Comando para verificar a Energia de Fala:

```bash
./xvf_host AEC_SPENERGY_VALUES
```

Exemplo de saída

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Feixe focado 1**: Energia do primeiro feixe
- **Feixe focado 2**: Energia do segundo feixe
- **Feixe em execução livre**: Energia do feixe de varredura
- **Feixe selecionado automaticamente**: Energia do feixe escolhido para a saída final

**Canais de saída de áudio**

- O XVF3800 fornece **2 canais de áudio**:

  - **Canal esquerdo**: Áudio limpo, pós-processado
  - **Canal direito**: Feixe de ASR ou dados de eco/referência

Você pode **redirecionar** esses canais para emitir diferentes fontes.

Comandos de exemplo

Definir o canal esquerdo para Microfone Amplificado 0

```bash
./xvf_host AUDIO_MGR_OP_L 3 0
```

Definir o canal direito para dados de Extremidade Distante (referência)

```bash
./xvf_host AUDIO_MGR_OP_R 5 0
```

Exemplo de saída:

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**Parâmetros de ajuste (Deixe o som melhor!)**

- Essas configurações ajudam a melhorar **cancelamento de eco**, **supressão de ruído**, **ganho**, etc.
- **Use-as quando as configurações padrão não forem boas o suficiente.**

**Modo de feixe fixo**

Veja como configurar o modo de feixe fixo para detectar a faixa de 0–45 graus

Definir ângulos de azimute 
```bash
./xvf_host AEC_FIXEDBEAMSAZIMUTH_VALUES  0.0 0.785
```
Definir elevação para 0

```bash
./xvf_host AEC_FIXEDBEAMSELEVATION_VALUES  0.0 0.0
```
Ativar modo de feixe fixo
```bash
./xvf_host AEC_FIXEDBEAMSONOFF  1
```

Parâmetros comuns:

| Parâmetro                  | Significado                                      |
| -------------------------- | ---------------------------------------------- |
| **AUDIO_MGR_REF_GAIN**  | Ganho de entrada do alto-falante (sinal de eco) |
| **AUDIO_MGR_MIC_GAIN**  | Ganho de entrada do microfone (quão alto o mic ouve) |
| **AUDIO_MGR_SYS_DELAY** | Atraso entre os sinais do microfone e do alto-falante |
| **PP_AGCMAXGAIN**         | Nível máximo de controle automático de ganho   |
| **AEC_ASROUTGAIN**        | Ganho para saída do feixe de ASR               |

Para documentação mais detalhada e comandos avançados, visite o repositório oficial no GitHub:
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>
</Tabs>

## Solução de problemas

### A reprodução de som pela saída do alto-falante não é suficiente?

Se o volume de saída do alto-falante do **ReSpeaker XVF3800** estiver muito baixo no Linux, talvez seja necessário ajustar os **níveis do mixer ALSA** para a placa de som XVF3800. Siga as etapas abaixo para aumentar o volume de saída.

**Passo 1: Abrir o ALSA Mixer**

1. Abra um terminal.
2. Digite o seguinte comando e pressione **Enter**:

   ```bash
   alsamixer
   ```
**Passo 2: Selecionar a placa de som XVF3800**

1. Pressione **F6** para abrir o menu de seleção de placa de som.
2. Use as **setas para cima/baixo** para destacar a placa de som **XVF3800**.
3. Pressione **Enter** para confirmar a seleção.

**Passo 3: Ajustar o volume de PCM-1**

1. Use as **setas esquerda/direita** para navegar até **PCM-1**.
2. Use a **seta para cima** para aumentar o nível de volume até **100%**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**Passo 4: Salvar as configurações do ALSA**

1. Pressione **ESC** para sair do `alsamixer`.
2. Antes de desconectar o XVF3800, execute o seguinte comando para salvar suas configurações:

```bash
   sudo alsactl store
   ```

**Passo 5: Opção adicional (usando PulseAudio)**

Se você ainda não conseguir ouvir o som claramente após ajustar os níveis do ALSA, tente instalar o **Controle de Volume do PulseAudio** para ajustes de volume mais detalhados:

```bash
sudo apt install pavucontrol -y
```

Você pode então abrir o **pavucontrol** e aumentar o volume de saída além de 100% se necessário.

### Após reinstalar os drivers USB, meu ReSpeaker não grava nem reproduz

Desinstale todos os drivers associados ao ReSpeaker no Gerenciador de Dispositivos. Isso resolveu o problema.

### Não é possível usar como dispositivos de som no Windows após gravar o firmware?

Abra o menu Iniciar e digite Device manager. Encontre os dispositivos reSpeaker XVF 3800 relacionados, clique com o botão direito neles e selecione Uninstall devices. Depois disso, reinicie o dispositivo (desconecte e reconecte o USB) e o Windows irá reinstalar o driver correto de placa de som para ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>

## Recursos

- [Arquivo 3D do ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/respeaker_mic_array_xvf3800_1_with-xiao-0820.stp)
- [Arquivo ReSpeaker XVF3800 3D-Enclosure-Up](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-up.stp)
- [Arquivo ReSpeaker XVF3800 3D-Enclosure-Down](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-down.stp)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
