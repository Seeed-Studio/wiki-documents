---
title: Grove - Relé SPDT de 2 Canais
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-2-Channel_SPDT_Relay/
slug: /Grove-2-Channel_SPDT_Relay
sku: 103020132
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-2-Channel_SPDT_Relay/
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/mian.jpg)

O Grove - Relé SPDT de 2 Canais possui duas chaves de polo simples - dupla posição (SPDT). Ele requer apenas sinais de baixa tensão e baixa corrente para
controlar essas chaves. Especificamente, você pode usar 5V DC para controlar no máximo 250V AC ou 110V DC.

A melhor parte é que você pode controlar os dois canais separadamente. Por exemplo, controlado por SIG1, você pode conectar o COM1 ao NC1 ou NO1 como desejar.
É tão conveniente e confiável que pode ser aplicado a uma grande quantidade de produtos ou projetos que precisam comutar dispositivos de alta tensão/alta corrente.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Caixa plástica resistente a altas temperaturas
- Carga de alta tensão
- Baixo consumo de energia
- Longa durabilidade

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|5V|
|Corrente Nominal da Bobina|89.3mA|
|Carga com Certificação TUV |10A 250VAC/  10A 30VDC|
|Carga com Certificação UL|10A 125VAC/ 10A 28VDC|
|Tensão Máxima Permitida|250VAC/110VDC|
|Consumo de Energia|aprox. 0.45W|
|Resistência de Contato|100mΩ Máx.|
|Resistência de Isolamento|100MΩ Mín. (500VDC)|
|Comutação Máx. LIGA/DESLIGA|30 operações/min|
|Temperatura Ambiente|-40°C a +85°C|
|Umidade de Operação|45% a 85%UR|
|Material de Contato|AgCdO|
|Interface de Entrada|Digital SIG1/SIG2|
|Porta de Saída|Terminal de Parafuso Fêmea DIP de 3 Pinos - Verde|

## Aplicações

- Eletrodomésticos
- Equipamento de escritório
- Receptor de TV com controle remoto
- Monitor de exibição
- Aplicação de uso em equipamentos de áudio com alta corrente de pico

## Visão Geral do Hardware

### Mapa de Pinos

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/schematic.jpg)

**K1** é o módulo de Relé, há uma bobina entre o **pino1** e o **pino3** de K1. Por padrão, o **COM1** estará conectado ao **NC1**. Se o pino3 de K1 for conectado ao terra, então essa bobina ficará “fechada”, assim o **COM1** será conectado ao **NO1**.

Para ativar essa bobina, são necessários cerca de 90mA, porém, normalmente o pino GPIO do Arduino só pode fornecer 20mA (40mA máx.). Portanto, usamos um transistor NPN [S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf) que pode fornecer 500mA.

O **SIG1** é puxado para baixo pelo resistor de 10k R2, se não houver sinal, a “Gate” de **Q1** será 0V, e Q1 estará desligado, de modo que o K1 ficará “aberto”. Se o **SIG1** se tornar 5V, então o Q1 será ligado.
O **Pino3** de k1 será conectado ao GND do sistema, para o K1 haverá 5V entre o **pino3** e o **pino1**, então a bobina ficará “fechada” e o **COM1** será conectado ao **NO1**

:::tip
    O **D3** é um [flyback diode(kickback diode)](https://en.wikipedia.org/wiki/Flyback_diode). Um diodo de flyback é um diodo conectado em paralelo a um indutor usado para eliminar o flyback, que é o súbito pico de tensão observado em uma carga indutiva quando sua corrente de alimentação é subitamente reduzida ou interrompida. Ele é usado em circuitos nos quais cargas indutivas são controladas por chaves, e em fontes de alimentação chaveadas e inversores.
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Nós fornecemos biblioteca de software ou exemplos de código apenas para a plataforma Arduino na maioria dos casos. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - Relé SPDT de 2 Canais |Grove-LED x2|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">Adquira agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o pino **SIG** do Grove-LED à porta **COM** do Grove - Relé SPDT de 2 Canais. Conecte o pino **GND** do Grove-LED ao **GND** do Base Shield.

- **Passo 2.** Conecte a porta **NO** do Grove - Relé SPDT de 2 Canais ao **5V** do Base Shield. Conecte a porta **NC** do Grove - Relé SPDT de 2 Canais ao **GND** do Base Shield.

:::tip
        Passo 1. e Passo 2. Conecte o GND do Grove LED ao GND do sistema e o SIG à porta COM do Relé. Se o COM se conectar ao NO (5V), o LED irá acender, e se o COM se conectar ao NC (0V), o LED irá apagar. Usamos dois LEDs neste wiki, certifique-se de que o LED<sub>1</sub> seja para o Switch<sub>1</sub>, e o LED<sub>2</sub> para o Switch<sub>2</sub>.
:::

- **Passo 3.** Conecte o Grove - Relé SPDT de 2 Canais à porta **D7** do Base Shield.

- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 5.** Conecte o Seeeduino ao PC via um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/connect.jpg)

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Abra a IDE do Arduino e crie um novo arquivo, então copie o código a seguir para o novo arquivo.

```cpp
#include <Arduino.h>
uint8_t channel1 = 7;
uint8_t channel2 = 8;
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

- **Passo 2.** Faça o upload do demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
    Você verá os LEDs on-board acendendo e apagando alternadamente, o mesmo acontecerá com os dois Grove - LEDs.
:::

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/test20180821_142634.gif)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos eagle do Grove-2-Channel SPDT Relay](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip)
- **[PDF]** [Datasheet do Relé SRD 05VDC-SL-C](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
- **[PDF]** [Datasheet do S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_8au__eavKk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
