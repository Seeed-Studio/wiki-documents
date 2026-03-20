---
description: Grove Shield para Seeed Studio XIAO com chip de gerenciamento de bateria integrado
title: Grove Shield para XIAO com chip de gerenciamento de bateria
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
sku: 103020312
last_update:
  date: 1/10/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## Visão Geral

Seeed Studio Grove Base for XIAO é uma placa de extensão Grove plug-and-play para **[Seeed Studio XIAO](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/)**. Com o chip de gerenciamento de bateria onboard e o pad de conexão de bateria, você pode facilmente alimentar o seu Seeed Studio XIAO com bateria de lítio e recarregá-lo. Os 8 conectores Grove onboard incluem dois Grove I2C e um UART. Ele atua como uma ponte entre o Seeed Studio XIAO e o sistema Grove da Seeed. O pad de conexão Flash SPI permite que você adicione Flash ao Seeed Studio XIAO para expandir seu espaço de memória, proporcionando ao Seeed Studio XIAO mais possibilidades.

Com o chip de gerenciamento de bateria onboard e o pad de conexão de bateria, você pode facilmente alimentar o seu Seeed Studio XIAO com bateria de lítio de 3,7 V e recarregá-lo, tornando seus projetos, especialmente os vestíveis, mais flexíveis e portáteis. Você pode até quebrar a placa através dos furos de ruptura da própria PCB de acordo com suas necessidades reais do projeto (apenas 25*39 mm de dimensão após a separação), tornando-a ainda menor e o peso seria reduzido de 13 g para 10 g também!
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

Como uma placa de extensão, a Seeed Studio Grove Base for XIAO também traz para fora todos os 14 pinos do Seeed Studio XIAO, e seu interruptor de energia onboard e a luz indicadora de status de carregamento a tornam mais amigável ao usuário. O Shield ainda reserva o pad de conexão SPI-Flash para um desenvolvedor avançado que possa precisar adicionar Flash ao Seeed Studio XIAO para expandir seu espaço de memória, proporcionando ao Seeed Studio XIAO mais possibilidades.

No formato do Seeed Studio XIAO, todas as placas Seeed Studio XIAO suportam tanto o [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) quanto a [Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Há uma pequena diferença entre os pinos e, consultando o Pinout, é fácil de gerenciar.

:::note
Este produto não inclui uma placa Seeed Studio XIAO, clique [here](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) se você precisar de uma.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o Seu Agora 🖱️</font></span></strong>
    </a>
</div>

#### Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### Descrição do Pinout

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## Características

- Função de carregamento e gerenciamento de bateria de lítio onboard
- Conectores Grove (Grove IIC x 2, Grove UART x 1), todos os 14 GPIO trazidos para fora
- Design compacto e destacável
- Pad de conexão Flash SPI reservado
- Interruptor de energia onboard e luz indicadora de status de carregamento

## Especificações

|Item|Valor|
|---|---|
|Tensão de operação|3,3 V / bateria de lítio de 3,7 V|
|Capacidade de carga|800 mA|
|Corrente de carregamento| 400 mA (Máx)|
|Temperatura de operação|- 40°C a 85°C|
|Temperatura de armazenamento|-55°C a 150°C|
|Interface Grove|I2C *2 / UART* 1|

## Aplicações

- Dispositivos vestíveis
- Protótipo rápido
- Teste de módulos Grove
- Projetos que exigem tamanho pequeno

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Materiais Necessários

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base for XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1. -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Descrição dos pinos dos headers externos para Grove-Doppler Radar

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|Número do pino|Nome do sinal|Descrição do pino|
|---|---|----|
|1| DIV_OUT |Saída do divisor de frequência do BGT24LTR11 |
|2|GND|Terra|
|3|VCC_5V_EXT|Pino de alimentação de entrada +5,0 V externa (máximo=5,5 V)|
|4|VTUNE|Tensão de sintonia de frequência do VCO|
|5|IFQ_HG|Saída de sinal analógico do canal Q do BGT24LTR11 - segundo estágio de ganho|
|6|IFI_HG|Saída de sinal analógico do canal I do BGT24LTR11 - segundo estágio de ganho|
|7|PWM_OUT|GPIO externo configurável pelo usuário com CCU4|
|8|OUT1|Pino GPIO externo (configurável pelo usuário)|
|9|OUT2|Pino GPIO externo (configurável pelo usuário)|

### Conexão de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
Conecte gentilmente o cabo USB e a interface do Doppler Radar na interface da placa de expansão Seeed Studio XIAO, caso contrário você pode danificar a porta.
:::

- **Passo 1.** Conecte o Doppler Radar à placa de expansão Seeed Studio XIAO com um cabo Grove.

- **Passo 2.** Conecte o Seeed Studio XIAO ao PC via um cabo USB.

- **Passo 3.** Baixe o código, consulte a parte de software.

- **Passo 4.** Execute o código e o resultado será exibido na tela do **Serial Monitor** na sua IDE Arduino.

### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [código de demonstração](https://github.com/Seeed-Studio/Seeed_Arduino_DopplerRadar).

- **Passo 2.** Copie todo o arquivo **Seeed_Arduino_DopplerRadar** e cole-o na pasta de bibliotecas da sua IDE Arduino.

- **Passo 3.** Abra o arquivo **BGT24LTR11_DETECTION_TARGET** com a sua IDE Arduino.

- **Passo 4.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

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
  Se tudo correr bem, você pode ir ao **Serial Monitor** para ver um resultado como o seguinte:
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>Figura 3</b>. <i> Nenhum objeto se aproximando</i></figcaption>
  </figure>
</div>

E se houver um objeto se aproximando do radar ou passando por ele, o resultado mudará conforme abaixo:

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>Figura 3</b>. <i>Objeto se aproximando</i></figcaption>
  </figure>
</div>

:::note
A precisão mínima de velocidade que o sensor é capaz de detectar é 52cm/s, o que equivale a 0,52m/s, 3,6km/h e 2,23mph. Além disso, os resultados retornados pela função getSpeed() são múltiplos de 52cm/s e são valores absolutos, respectivamente.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Anexo do Seeed Studio Grove Base para XIAO](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar)
- **[ZIP]** [Biblioteca de código de demonstração](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) Protocolo de comunicação do módulo de radar v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [ETA 3410 Datasheet](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## Projeto

<p><div class="video-container">
<iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
</div></p>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
