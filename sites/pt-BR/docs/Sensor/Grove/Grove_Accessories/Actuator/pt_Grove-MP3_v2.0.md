---
title: Grove - MP3 v2.0
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-MP3_v2.0/
slug: /Grove-MP3_v2.0
sku: 107020008
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-MP3_v2.0/
---

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Product_View_700_S.jpg)

Grove - MP3 v2.0 é um módulo de áudio compacto e de tamanho reduzido. Ele suporta várias operações de arquivos de áudio para um arquivo de áudio nos formatos MP3, WAV e WMV, como reprodução de músicas aleatórias, reprodução de músicas em arquivos específicos e assim por diante. Com comunicação serial, você pode usar todos os comandos predefinidos ou combinações de comandos para realizar todas as operações em arquivos de música. Este módulo também suporta sistemas de arquivos gerais, como FAT16 e FAT32. Ele possui uma interface Grove UART, um conector de áudio de 3,5 mm e um slot para micro-SD. Com este módulo, você pode adicionar um pouco de barulho às suas aplicações silenciosas.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/3FMlt_aqhOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-v2-0-p-2597.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versão

| Versão do Produto | Alterações        | Data de Lançamento |
|-------------------|-------------------|--------------------|
|  Grove - MP3 v1.0 | Inicial           | 28 de abril de 2013 |
|  Grove - MP3 v2.0 | Mudança para KT403A | 15 de dez de 2015  |

## Recursos

- Operações gerais em arquivos de áudio
- Slot para micro-SD e conector de áudio de 3,5 mm integrados
- Suporta taxa de amostragem de 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)
- Saída DAC de 24 bits, faixa dinâmica de saída de 90 dB (no Máx.), relação sinal-ruído de 85 dB
- Formatos de áudio MP3, WMV e WAV e sistemas de arquivos FAT16, FAT32 suportados
- Incorpora um total de 10 níveis de equalização

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Ideias de aplicação

- Módulo de áudio de nível intermediário para quaisquer aplicações.

## Especificações

| Parâmetro                                 | Valor                                                                                                             |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Entrada                                    | 5 V (CC)                                                                                                          |
| Corrente de operação (sem saída de sinal)  | menor que 15 mA                                                                                                   |
| Corrente de operação                       | menor que 40 mA                                                                                                   |
| Chip                                       | KT403A [(datasheet)](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) |
| Tensão de saída LDO do chip                | 3,3 V                                                                                                             |
| Corrente de saída do chip                  | 100mA(no Máx.)                                                                                                    |
| Formatos de arquivo suportados             | MP3, WAV, WMA                                                                                                     |
| Memória máxima suportada para cartão SD    | 8 GB                                                                                                             |
| Taxa de amostragem                         | 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)                                                           |

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_view-front-1200_S.jpg)

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_View-Back-1200_S.jpg)

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - MP3 v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57)|

:::note
    Também precisamos de um cartão SD com músicas e um fone de ouvido/headset ou aparelho de som com conector de áudio de 3,5 mm.
:::

- **Passo 2.** Conecte o Grove-MP3 v2.0 à porta D2 do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/seeeduino_mp3.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar o Grove-MP3 v2.0 diretamente ao Seeeduino como abaixo.
:::
| Seeeduino       | Grove-MP3 v2.0 |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| D3            | Branco                  |
| D2            | Amarelo                 |

#### Software

- **Passo 1.** Baixe o  [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)  no Github.
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Você pode selecionar o exemplo **Seeed_Serial_MP3_Player/examples/KT403A_Terminal_player** e enviá-lo para o arduino. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).
- **Passo 4.** Veremos as informações no terminal COM conforme abaixo.

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

:::note
    Para programação avançada, você pode [download](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) o datasheet do chip KT403A.
:::

- **Passo 5.** Digite o comando correspondente para reproduzir a música.

:::tip
    A biblioteca suporta dispositivos AVR/SAMD/STM32F4, tanto serial de hardware quanto de software.
:::
Existem 2 tipos de portas seriais. Uma é a COMSerial, que representa a porta de comunicação (conectando ao módulo Grove-MP3). A outra é a ShowSerial, que representa a porta de exibição de informações seriais (conectando ao PC).

A maior parte das placas arduino possui pelo menos uma Serial, algumas possuem múltiplas seriais (o Arduino Mega possui 4 Serials). Ela se comunica nos pinos digitais 0 (RX) e 1 (TX), bem como com o computador via USB. Portanto, se você conectar um dispositivo UART no pino D0 e no pino D1, terá que removê-lo antes de baixar o programa via USB. Caso contrário, isso causará falha no upload. Às vezes você precisa de mais portas seriais do que o número de portas seriais de hardware disponíveis. Se este for o caso, você pode usar uma Software Serial que utiliza software para emular o hardware serial. A Software Serial exige muita ajuda do controlador Arduino para enviar e receber dados, portanto não é tão rápida ou eficiente quanto a serial de hardware. Para mais informações sobre a Serial, consulte [Seeed Arduino Serial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Serial/).

- **AVR:** No exemplo abaixo, definimos Software Serial como COMSerial (conectando com o módulo Grove-MP3). Nem todos os pinos digitais podem ser usados para software serial. Você pode consultar [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) para detalhes dos pinos. Definimos o hardware Serial como ShowSerial (conectando com o PC). Se você usar o Arduino Mega, pode conectar o hardware Serial a ShowSerial e o outro Serial1/Serial2/Serial3 a COMSerial. Assim, você pode consultar a configuração do AVR Mega.

- **SAMD:** No exemplo abaixo, o SAMD não suporta software serial. Usamos o hardware serial **Serial1** para se comunicar com o Módulo Grove-MP3 e **SerialUSB** para imprimir mensagens no PC.

- **STM32F4:** No exemplo abaixo, usamos o hardware serial **Serial** para se comunicar com o Módulo Grove-MP3 e **SerialUSB** para imprimir mensagens no PC.

:::note
    Para mais informações sobre o Serial, consulte [Seeed Arduino Serial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Serial/).
:::

```cpp
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

KT403A<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

KT403A<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

KT403A<HardwareSerial> Mp3Player;
#endif
```

## Visualizador Online de Esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Grove-MP3_v2.0_Schematic files](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip)
- **[Librarie]**  [Grove-Serial MP3 Player V2.0 Libraries](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- **[Datasheet]** [KT403A Datasheet](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)

## Projetos

**Projeto de Segurança com Arduino Usando Cayenne**: Projeto de segurança residencial baseado em Arduino. Alertas por SMS/e-mail quando um intruso é detectado. Mensagens personalizadas para pessoas autorizadas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

**Piano de Folhas**: Fizemos um piano usando um sensor de toque, bem como folhas como teclas do piano.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
