---
title: Grove-Doppler-Radar
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Doppler-Radar/
slug: /Grove-Doppler-Radar
sku: 109020021
last_update:
  date: 01/04/2022
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Doppler-Radar/
---

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Como você construiria um sistema que pudesse calcular a distância até um objeto ou detectar se há movimento presente? Normalmente você usaria um Sensor Ultrassônico ou LiDAR para medição de distância e um Sensor de Movimento PIR para detecção de movimento. E se disséssemos que existe um módulo tudo‑em‑um que pode realizar todas essas funções com mais precisão e também executar funções como detecção de velocidade de objetos em movimento e detecção de ângulo de objetos. Você acreditaria? Estávamos cansados de usar esses módulos tradicionais para aplicações de detecção de movimento e queríamos oferecer a você uma solução melhor, integrando novas tecnologias. Pois bem… Pela primeira vez na história do Grove, estamos muito empolgados em trazer para você um Módulo Grove baseado em Tecnologia de Radar!

Este é o Grove – Doppler Radar.

O Grove – Doppler Radar é baseado no BGT24LTR11 Silicon Germanium MMIC, que é um transceptor de radar de 24GHz. Ele é controlado por um MCU XMC1302 baseado em Arm® Cortex®‑M0. Ele vem em um pacote compacto e funciona com consumo de energia muito baixo, fornecendo medições de alta precisão. A alta frequência deste módulo permite alta penetração através de objetos e, portanto, este módulo não precisa ser exposto para fora ao ser instalado, podendo ficar atrás de um objeto. Isso, por sua vez, é extremamente útil em sistemas de segurança. Além disso, ele consegue operar em condições climáticas severas, como altas temperaturas, poeira e chuva.

## Características

- O primeiro sensor baseado em radar da família Grove
- Tamanho compacto para fácil implantação
- Design leve, adequado para aplicações em VANT
- Baixo consumo de energia para uso prolongado
- Transceptor MMIC de 24GHz para medições de alta precisão
- Resposta rápida usando ondas eletromagnéticas
- Proteção ESD para evitar falhas do sistema causadas por descargas eletrostáticas (ESD)
- Alta penetração que permite ser instalado atrás de um objeto
- Mantém a operação em condições climáticas severas (temperatura, luz, poeira, chuva)

## Especificações

|Item|Valor|
|---|---|
|MMIC |BGT24LTR11|
|MCU |XMC1302 Arm® Cortex®-M0|
|Frequência de Transmissão |Mín: 24GHz|
|Típica|21.125GHz|
|Máx|24.25GHz|
|Potência de Saída (EIRP) |7dBm @ 25°C|
|Tempo de Atualização| 300ms|
|Interface de Comunicação |UART (115200)|
|Distância de Detecção |10m @ 0dBsm|
|Campo de Detecção Padrão|65° / horizontal (-6dB); 22° / vertical (-6dB)|
|Tensão de Alimentação |3.3-5V|
|Peso|5g|

## Aplicações

- Casa Inteligente
- Prédio Inteligente
- Porta Automática
- Controle de Iluminação
- Robótica Industrial
- Sistemas de Alarme contra Intrusos
- VANT

### Como a Tecnologia de Radar Doppler Funciona Neste Módulo?

O radar Doppler funciona enviando um feixe de ondas de radiação eletromagnética do transmissor (Antena TX), com uma frequência precisa, em direção a um objeto em movimento. Quando a onda de radiação eletromagnética entra em contato com um objeto, ela viaja de volta em direção ao receptor (Antena RX). No entanto, quando a onda é refletida pelo objeto em movimento, ela passa a ter uma frequência diferente em comparação com a frequência original que foi emitida. Então, a variação dessa frequência pode ser usada para calcular a velocidade do objeto em movimento.

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

#### Materiais Necessários

| Seeeduino XIAO | Grove-Doppler-Radar| Placa de Expansão XIAO|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png)
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Coming SOON](https://www.seeedstudio.com/)|

#### Visão Geral do Hardware

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

#### Descrição dos pinos dos conectores externos

|Número do pino|Nome do sinal|Descrição do pino|
|---|---|----|
|1| DIV_OUT |Saída do divisor de frequência do BGT24LTR11 |
|2|GND|Terra|
|3|VCC_5V_EXT|Pino de alimentação de entrada externa +5,0V (máximo=5,5V)|
|4|VTUNE|Tensão de sintonia de frequência do VCO|
|5|IFQ_HG|Saída de sinal analógico do canal Q do BGT24LTR11 ‑ segundo estágio de ganho|
|6|IFI_HG|Saída de sinal analógico do canal I do BGT24LTR11 ‑ segundo estágio de ganho|
|7|PWM_OUT|GPIO externo configurável pelo usuário com CCU4|
|8|OUT1|Pino GPIO externo (configurável pelo usuário)|
|9|OUT2|Pino GPIO externo (configurável pelo usuário)|

#### Conexão de Hardware

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

:::tip
    Conecte o cabo USB e a interface do Doppler Radar na interface da placa de expansão Seeeduino XIAO com cuidado, caso contrário você poderá danificar a porta.

- **Passo 1.** Conecte o Doppler Radar à placa de expansão Seeeduino XIAO com um Cabo Grove.

- **Passo 2.** Conecte o Seeeduino XIAO ao PC por meio de um cabo USB.

- **Passo 3.** Baixe o código, consulte a parte de software.

- **Passo 4.** Execute o código e o resultado será exibido na tela do **Serial Monitor** na sua Arduino IDE.

:::

#### Software

:::tip
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [código de demonstração](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip).

- **Passo 2.** Copie todo o arquivo **Seeed_Arduino_DopplerRadar** e cole-o na pasta de bibliotecas da sua Arduino IDE.

- **Passo 3.** Abra o arquivo **BGT24LTR11_DETECTION_TARGET** com a sua Arduino IDE.

- **Passo 4.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

#### Código de Software

```cpp
#include "GBT24LTR11.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    GBT24LTR11<SoftwareSerial> GBT;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    GBT24LTR11<Uart> GBT;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    GBT24LTR11<HardwareSerial> GBT;
#endif

void setup() {
    // put your setup code here, to run once:
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODE 0 -->detection target mode
        MODE 1 -->I/Q ADC mode
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // put your main code here, to run repeatedly:
    uint16_t state = 0;
    ShowSerial.print("target speed:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    //2 --> target approach
    //1 --> target leave
    //0 --> Not Found target
    if (state == 2) {
        ShowSerial.println("target approach");
    } else if (state == 1) {
        ShowSerial.println("target leave");
    }
    delay(200);
}
```

:::success
  Se tudo ocorrer bem, você pode ir ao **Serial Monitor** para ver um resultado como o seguinte:
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 3</b>. <i> Nenhum objeto se aproximando</i></figcaption>
</figure>
</div>

E se houver um objeto se aproximando do radar ou passando por ele, o resultado mudará como abaixo:

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 3</b>. <i>Objeto se aproximando</i></figcaption>
</figure>
</div>

:::note
    A precisão mínima de velocidade que o sensor é capaz de detectar é 52cm/s, o que equivale a 0,52m/s, 3,6km/h e 2,23mph. Além disso, os resultados retornados pela função getSpeed() são múltiplos de 52cm/s e são valores absolutos, respectivamente.
:::

## Recursos

- **[ZIP]** [Biblioteca de código de demonstração](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)

## Suporte Técnico e Discussão sobre Produtos

 se você tiver qualquer problema técnico, envie o problema para o nosso [forum](http://forum.seeedstudio.com/).

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
