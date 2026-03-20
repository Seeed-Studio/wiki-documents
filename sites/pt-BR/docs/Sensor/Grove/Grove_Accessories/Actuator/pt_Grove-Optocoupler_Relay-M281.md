---
title: Grove - Relé Optoacoplador (M281)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Optocoupler_Relay-M281/
slug: /Grove-Optocoupler_Relay-M281
sku: 101020603
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Optocoupler_Relay-M281/
---


![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/preview.png)

Este módulo é um relé SSR (relé de estado sólido) unidirecional SPSD (single-pole, single-throw), normalmente aberto. O Grove Optocoupler Relay (M281) oferece uma resistência em condução muito baixa, o que permite uma alta corrente de carga nominal.

Ao contrário de outros SSR de TRIAC em nosso site, este relé é baseado em MOSFET, portanto pode conduzir tanto carga CA quanto carga CC. Se você precisa usar um SSR com carga CC, é isto que você procura!

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                             | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|--------------------|
| Grove-Optocoupler Relay (M281) | Inicial                                                                                               | Dez 2018           |

## Recursos

- Baixa resistência em condução (0,5Ω MÁX.)
- 1A de corrente de carga contínua
- Tensão de carga nominal de 60V
- Baixa corrente de controle de entrada (3mA TÍP.)
- Alto isolamento entre entrada e saída (1,5kV MÍN.)

## Aplicações

- Equipamentos de teste automatizados
- Sistemas de leitura de medidores
- Equipamentos médicos
- Monitoramento de bateria
- Multiplexadores

## Especificação

  |Parâmetro|Valor|
  |---|---|
  |Tensão de alimentação|3,3V / 5V|
  |Temperatura de operação| -40 – 85℃|
  |Temperatura de armazenamento|- 55°C – 125°C|
  |Tensão de bloqueio|60 V|
  |Corrente de carga contínua|1A|
  |Corrente de fuga|0,2 uA(TÍP.)<br />1 uA(Máx.)|
  |Resistência em condução|0,5 Ω(TÍP.)<br />0,7 Ω(Máx.)|
  |Resistência de isolação|100 GΩ|
  |Tempo de acionamento (Turn-On)|1,4 ms(TÍP.)<br />5 ms(Máx.)|
  |Tempo de desligamento (Turn-Off)|0,2 ms(TÍP.)<br />2 ms(Máx.)|
  |Interface|Digital|
  |Tamanho|C: 40mm L: 20mm A: 13mm|
  |Peso|10,6g|
  |Tamanho da embalagem|C: 135mm L: 85mm A: 13mm|
  |Peso bruto|11g|
  <div align="center"><b>Tabela 1.</b><i>Especificação Geral</i></div>

## Visão Geral de Hardware

### Pinagem

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" /></a></p>
    <figcaption><b>Figura 1</b>. <i>Pinagem</i></figcaption>
  </figure>
</div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Optocoupler Relay (M281)|LED Vermelho|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/led.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|[Adquira agora](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Baseshield.

:::note
    **1** Por favor conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

**Conexão de Hardware**

- **Passo 1.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 2.** Conecte o Grove - Optocoupler Relay (M281) à porta **D5** do Base Shield.

- **Passo 3.** Conecte o LED e o Grove - Optocoupler Relay (M281) aos pinos **3.3V** e **GND** do Grove - Base Shield. (Por favor, consulte a figura abaixo)

- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" /></a></p>
    <figcaption><b>Figura 2</b>. <i>Pinagem, por favor, certifique-se de conectar ao pino de 3.3v, 5v irá danificar este LED.</i></figcaption>
  </figure>
</div>

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Copie o código a seguir para um novo sketch na Arduino IDE

```cpp
const int Pinout = 5;      

void setup() {
 pinMode(Pinout, OUTPUT);
 Serial.begin(9600);
}

void loop() {

  digitalWrite(Pinout, HIGH); 
  delay(500);
  digitalWrite(Pinout, LOW); 
  delay(500);
}
```

- **Passo 2.** Envie o demo. Se você não sabe como fazer o upload do código, por favor verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
  Se tudo correr bem, veremos o LED piscando.
:::

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - Optocoupler Relay (M281)](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip)
- **[PDF]** [M281 Datasheet](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/M281_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
