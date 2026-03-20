---
title: Grove - Relé de Estado Sólido de 2 Canais
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-2-Channel_Solid_State_Relay/
slug: /Grove-2-Channel_Solid_State_Relay
sku: 103020134
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-2-Channel_Solid_State_Relay/
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/mian.jpg)

Em vez de usar bobina, relés de estado sólido encapsulados (SSR) usam dispositivos semicondutores de potência, como tiristores e transistores, que fornecem uma velocidade de comutação muito mais rápida do que os relés mecânicos. O **Grove - 2-Channel Solid State Relay** é baseado no módulo de alta qualidade **G3MC202P**, que permite usar 5VDC para controlar MÁX. 240VAC. Este módulo possui dois canais, você pode controlá‑los separadamente. Com a ajuda da interface Grove, torna‑se muito conveniente usar o SSR com o seu Arduino.

De acordo com diferentes cenários de aplicação, preparamos uma série de relés de estado sólido para você.

[Grove - Solid State Relay V2](https://wiki.seeedstudio.com/pt-br/Grove-Solid_State_Relay_V2)

Grove - 2-Channel Solid State Relay

[Grove - 4-Channel Solid State Relay](https://wiki.seeedstudio.com/pt-br/Grove-4-Channel_Solid_State_Relay)

[Grove - 8-Channel Solid State Relay](https://wiki.seeedstudio.com/pt-br/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 2-Channel Solid State Relay | Inicial                                                                                               | Ago 2018      |

## Recursos

- Vantagens em relação aos relés mecânicos:

  - Relés de estado sólido têm velocidades de comutação rápidas em comparação com relés mecânicos, e não possuem contatos físicos que se desgastem
  - Operação totalmente silenciosa
  - A ausência de contatos físicos significa ausência de faíscas, permitindo que seja usado em ambientes explosivos, onde é crítico que nenhuma faísca seja gerada durante a comutação
  - Vida útil aumentada, mesmo que seja acionado muitas vezes, pois não há partes móveis para se desgastarem e nenhum contato para formar crateras ou acumular carbono
  - SSR compacto, de perfil fino, com construção monobloco, com uma estrutura de terminais “all-in-one” que incorpora uma PCB, terminais e dissipador de calor, que é muito menor do que relés mecânicos e pode integrar mais canais

- Desvantagens:

  - Quando fechado, maior resistência (gerando calor) e ruído elétrico aumentado
  - Quando aberto, menor resistência e corrente de fuga reversa
  - Só funciona para carga AC

## Especificação

|Item|Valor|
|---|---|
|Tensão de entrada de operação|4~6V|
|Tensão de Entrada Nominal|5V|
|Tensão de Carga Nominal|100 a 240 VAC 50/60 Hz|
|Faixa de Tensão de Carga|75 a 264 VAC 50/60 Hz||
|Corrente de carga|0,1 a 2 A por chave|
|Corrente de fuga|1,5 mA máx. (a 200 VAC)|
|Resistência de Isolação|mín. 1.000 MΩ (a 500 VDC)|
|Tempo de Ativação|1/2 do ciclo da fonte de energia de carga +1 ms máx.|
|Tempo de Desativação|1/2 do ciclo da fonte de energia de carga + 1 ms máx.|
|Temperatura de Armazenamento|-30°C a 100°C (sem gelo ou condensação)|
|Temperatura de Operação|-30°C a 80°C (sem gelo ou condensação)|
|Umidade de Operação| 45% a 85%RH|
|Interface de Entrada|Digital|
|Porta de Saída|Dois conectores fêmea DIP azuis de 2 pinos |
|Cruzamento por Zero|suporta|
|Certificação|UL /  CSA|
|Tamanho|C: 40mm L: 40mm A: 23mm|
|Peso|16,0g|
|Tamanho da Embalagem|C: 115mm L: 65mm A: 50mm|
|Peso Bruto|138g|

:::note
        Você pode prestar atenção à **corrente de fuga**; 1,5mA é forte o suficiente para acionar um LED de baixa potência, então quando o relé estiver desligado, o LED ainda poderá emitir uma luz fraca.
:::

## Aplicações

- Operações que exigem comutação de baixa latência, por exemplo, controle de iluminação de palco
- Dispositivos que exigem alta estabilidade, por exemplo, dispositivos médicos, sinais de trânsito
- Situações que exigem à prova de explosão, anticorrosão, à prova de umidade, por exemplo, indústrias de carvão, químicas.

## Visão Geral de Hardware

### Mapa de Pinos

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/schematic_.jpg)

**K1** é o módulo de relé. Quando uma tensão de 5V é aplicada entre **INT+** e **INT-**, o relé será ligado. Então o **LOAD1** será conectado ao **LOAD2**. Usamos um transistor NPN **Q2**(BC817-40) para controlar a tensão entre **INT+** e **INT-**.

O **CTR1** é o sinal de controle vindo do Arduino ou outra placa. Ele é puxado para baixo pelo resistor de 10k R7, se não houver sinal, o “Gate”(porta 1) do **Q2** será 0V, e o Q2 ficará desligado, de modo que o K1 ficará desligado. Se o **CTR1** se tornar 5V, então o Q2 será ligado. O **INT-** do K1 será conectado ao GND do sistema, para o K1 haverá 5V entre **INT+** e **INT-**, então o K1 será ligado, e o **LOAD1** será conectado ao **LOAD2**.

:::note
        Nesta seção mostramos apenas parte do esquemático; para o documento completo, consulte a seção [Resources](#Resources)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - 2-Channel Solid State Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank">Get One Now</a>|

:::note
    **1** Por favor, conecte o cabo USB delicadamente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** Você precisa preparar dois ventiladores por conta própria.
:::

- **Passo 1.** Conecte o Grove - 2-Channel Solid State Relay à porta **D2** do Grove-Base Shield.

- **Passo 2.** Corte um fio, uma ponta é conectada ao **LOAD1** do switch1, e a outra ponta é conectada ao **LOAD2** do switch1.

- **Passo 3.** Corte outro fio, uma ponta é conectada ao **LOAD1** do switch2, e a outra ponta é conectada ao **LOAD2** do switch2.

- **Passo 4.** Conecte o **LOAD1** do switch1 à alimentação e conecte o **LOAD2** do switch1 ao Ventilador1

- **Passo 5.** Conecte o **LOAD1** do switch2 à alimentação e conecte o **LOAD2** do switch2 ao Ventilador2

- **Passo 6.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 7.** Conecte o Seeeduino ao PC por meio de um cabo Micro-USB.

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/connect.jpg)

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Abra a IDE do Arduino e crie um novo arquivo; você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

```cpp
#include <Arduino.h>
uint8_t channel1 = 2;
uint8_t channel2 = 3;
void setup() {
  pinMode(channel1, OUTPUT);
  pinMode(channel2, OUTPUT);
}
void loop() {
  digitalWrite(channel1, HIGH);
  digitalWrite(channel2, LOW);
  delay(2000);
  digitalWrite(channel1, LOW);
  digitalWrite(channel2, HIGH);
  delay(2000);
}
```

- **Passo 2.** Carregue a demonstração. Se você não souber como carregar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
    Você verá os dois LEDs integrados acendendo e apagando alternadamente, e dois ventiladores ligando e desligando alternadamente.
:::

## Visualizador Online de Esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos eagle do Grove - 2-Channel Solid State Relay](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip)
- **[PDF]** [Datasheet do G3MC202P](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
