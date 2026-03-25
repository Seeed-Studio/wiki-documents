---
description: Grove - Sensor de Vibração (SW-420)
title: Grove - Sensor de Vibração (SW-420)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Vibration_Sensor_SW-420
sku: 101020586
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Vibration_Sensor_SW-420/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg" alt="pir" width={600} height="auto" /></p>

O Grove - Sensor de Vibração (SW-420) é um sensor de vibração não direcional de alta sensibilidade. Quando o módulo está estável, o circuito é ligado e a saída é alta. Quando ocorre movimento ou vibração, o circuito será brevemente desconectado e a saída será baixa. Ao mesmo tempo, você também pode ajustar a sensibilidade de acordo com suas próprias necessidades.

Em resumo, este é um módulo perfeito para sensor de vibração ou inclinação.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html)

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Vibration Sensor (SW-420) | Inicial                                                                                               | Set 2018      |

## Recursos

- Não direcional
- Alta sensibilidade
- Responde à vibração, inclinação
- À prova d'água
- Resistência à compressão

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|3.3V / 5V|
|Interface|Digital|
|Tamanho|C: 40mm L: 20mm A: 10mm|
|Peso|4.3g|
|Tamanho da embalagem|C: 140mm L: 85mm A: 10mm|
|Peso bruto|10g|

## Aplicações

- Alarme contra roubo para carro, bicicleta, motocicleta
- Controle de jogos
- Detecção de vibração

## Visão Geral do Hardware

### Mapa de Pinos

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

### Esquemático

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg" alt="pir" width={600} height="auto" /></p>

Primeiro, vamos começar com o **SW1**, que fica no canto inferior esquerdo. Na verdade, o **SW1** é o módulo de vibração **SW-420**. Quando o módulo está em um estado estável, o módulo é ligado. O **Pino2** do **U1A** é conectado ao **GND** através do **SW1**.

O **VR1** é o potenciômetro, o **Pino2** do potenciômetro é conectado ao **Pino3** do **U1A**

O **U1A** é um [comparador](https://en.wikipedia.org/wiki/Comparator). Para os comparadores, o comportamento de saída segue esta lógica:

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0'}}>
<strong>V<sub>out</sub> = High quando V<sub>+</sub> > V<sub>-</sub></strong><br/>
<strong>V<sub>out</sub> = Low quando V<sub>+</sub> < V<sub>-</sub></strong>
</div>

**V+** conecta ao **Pino3**, **V-** conecta ao **Pino2**, **V<sub>out</sub>** conecta ao **Pino1**.

Para o **V+** você pode ajustá-lo girando o potenciômetro, por exemplo, podemos defini-lo como VCC/2.

Para o **V-**, ele depende do **SW1(SW-420)**:

- Se este módulo estiver em um estado estável, o **SW1** é ligado, o Pino2 do **U1A** é conectado ao **GND** através do **SW1**. Será:

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '15px 0'}}>
<strong>V<sub>-</sub> = 0V</strong><br/>
<strong>V<sub>+</sub> = VCC/2</strong><br/>
<strong>Portanto: V<sub>out</sub> = High</strong>
</div>

- Se o módulo vibrar ou inclinar, o **SW1** será desligado, a tensão de **V-** será puxada para cima pelo **VCC** através de R1. Uma vez que **V-** seja maior que VCC/2, então:

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '15px 0'}}>
<strong>V<sub>-</sub> > VCC/2</strong><br/>
<strong>V<sub>+</sub> = VCC/2</strong><br/>
<strong>Portanto: V<sub>out</sub> = Low</strong>
</div>

Agora você pode ajustar o **V+** para configurar a sensibilidade, apenas lembre-se: quanto menor a tensão de **V+**, maior a sensibilidade😆

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincando com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Vibration Sensor|Grove - Buzzer|
|--------------|-------------|-----------------|----|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank">Adquira agora</a>|

:::note
    **1** Por favor, conecte o cabo USB suavemente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Etapa 1.** Conecte o Grove - Vibration Sensor (SW-420) à porta **D2** do Base Shield.

- **Etapa 2.** Conecte o Grove - Buzzer à porta **D3** do Base Shield.

- **Etapa 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Etapa 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/connect.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/connect.JPG" alt="pir" width={600} height="auto" /></p>

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove - Vibration Sensor         |
|---------------|-------------------------|
| 5V            | Vermelho                     |
| GND           | Preto                   |
| NC           | Branco                    |
| D2           | Amarelo                   |

| Seeeduino     |  Grove - Buzzer         |
|---------------|-------------------------|
| 5V            | Vermelho                     |
| GND           | Preto                   |
| NC           | Branco                    |
| D3           | Amarelo                   |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Abra a sua Arduino IDE e inicie um novo sketch.

- **Passo 2.** Copie todo o código abaixo, ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para o novo sketch.

```cpp
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;     // the number of the pushbutton pin
const int buzzer =  3;      // the number of the buzzer pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(buzzer, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(buzzer, LOW);
  } else {
    // turn LED off:
    digitalWrite(buzzer, HIGH);
  }
}
```

- **Passo 3.** Faça o upload do demo. Se você não souber como enviar o código, por favor confira [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::success
    Se tudo correr bem, sempre que você mover, sacudir ou inclinar o Grove - Vibration Sensor, o Grove - buzzer irá tocar.
:::

### Brinque com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Vibration Sensor à porta D2 e conecte um Grove - Buzzer à porta D3 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta for a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png" alt="pir" width={600} height="auto" /></p>

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser enviado, o buzzer irá apitar quando o sensor de vibração detectar vibração.
:::

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos eagle do Grove - Vibration Sensor (SW-420)](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove_Vibration_Sensor_CDC_File.zip)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
