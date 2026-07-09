---
title: Grove - Mini Fan
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Mini_Fan/
slug: /Grove-Mini_Fan
sku: 108020021, 105020004, 101020084
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mini_Fan/
---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_Fan%20head.jpg)

O módulo **Grove - Mini Fan** é um driver de motor DC baseado no microcontrolador AVR Atmega168. O módulo também fornece um breakout através do qual você pode alterar o código do microcontrolador. Por exemplo, o código pode ser alterado para que o módulo possa ser usado para acionar um [servomotor](https://en.wikipedia.org/wiki/Servomotor). Por padrão, o módulo é configurado para acionar o motor DC que está incluído no seu mixer pack. O ventilador de pás macias também incluído no kit pode ser conectado ao motor para fazer um projeto divertido com crianças. Por ter pás macias, o ventilador é completamente seguro e não há chance de qualquer ferimento, mesmo que esteja girando em alta velocidade.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)

## Recursos

---

* Módulo de saída fácil de usar que aciona um motor DC em operação com base no sinal recebido de um sensor de entrada ou módulo de comutação
* Usado em conjunto com o motor DC incluído no kit
* Interface JST 2.0 usada para conectar ao motor
* Motor DC vem com um acessório de ventilador colorido com pás macias (como mostrado na imagem)
* Microcontrolador on-board pode ser reprogramado para alterar a operação do módulo
* Microcontrolador executa código compatível com Arduino
* Altere o código para acionar servomotores em vez de motores DC
* Usa cabos Grove padrão de 4 pinos para conectar a outros módulos Grove
<div>
  <span style={{color: 'red'}}>Note:</span>for latest version(v1.1), the output voltage for motor is updated to 3.3 volts.
</div>

## Função da Interface

---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_fan.jpg)

<dl>
  <dt>① Interface UartSBee: Use esta interface para alterar o código do microcontrolador. Use um módulo [UartSBee](/pt-br/UartSBee_V4) para se conectar ao microcontrolador usando a interface Uart.</dt>
  <dt>② Interface JST 2.0: Usada para conectar a um motor DC de 3,3 volts (apenas 3,3 volts)</dt>
  <dt>③ Interface Grove</dt>
  <dt>④ Interface ICSP</dt>
  <dt>⑤ Microcontrolador Atmega168</dt>
  <dt>⑥ Interface Servo</dt>
</dl>

## Uso

---
Siga estas etapas para montar um circuito de exemplo usando este módulo:

1.Primeiro conecte o motor DC ao módulo **Grove - Mini Fan** usando a interface JST2.0 de dois fios.

2.Conecte o módulo Mini Fan ao lado de saída do seu circuito (à direita do módulo de alimentação). No lado de entrada do circuito, você pode usar uma variedade de módulos de entrada baseados em sensores ([Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor"), [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor"), [Grove - Button](/pt-br/Grove-Button "Grove - Button") ou [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")).

3.Ligue o circuito.

4.O motor DC começa a girar quando o módulo de entrada fornece um disparo:

* Se estiver usando com uma chave momentânea como a do módulo [Grove - Button](/pt-br/Grove-Button "Grove - Button"), basta pressionar o botão para ligar o motor.

* Se estiver usando com um [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"), mova o cursor da posição GND para VCC e observe a velocidade do motor aumentar conforme a tensão fornecida aumenta. Conecte o ventilador de pás macias e você terá um ventilador pessoal de velocidade variável que pode funcionar na velocidade que você desejar para combater o calor!

* Se estiver usando com um [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor") conectado diretamente ao lado de entrada do circuito, você deverá ver que o motor funciona em luz forte e para no escuro:

![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Light_Sensitive_Fan.gif)

* Se você quiser que o motor funcione apenas no escuro, adicione um módulo Grove - NOT entre o sensor de luz e o módulo de alimentação.
* Se estiver usando com um [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor"), você deverá ver que o motor funciona ao detectar som. Novamente, se você quiser reverter a função, ou seja, se quiser que o motor fique LIGADO o tempo todo, exceto quando houver um som, adicione um módulo Grove - NOT entre o sensor de som e o módulo de alimentação.

Você pode usar tanto o módulo Grove - USB Power quanto o módulo Grove - DC Jack Power para o circuito Grove.

Para montar um circuito que controla um servomotor usando um potenciômetro, siga as etapas abaixo:

1. Abra o código diretamente no caminho: \libraries\Servo\examples\Knob

2. Envie o seu código para o MCU on-board. Certifique-se de selecionar o tipo de placa e a porta COM corretos ao fazer o upload.

3. Agora você já deve conseguir controlar o seu servomotor com um potenciômetro

### Brinque com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Mini Fan à porta D2 e conecte um Grove - Light Sensor à porta A0 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte Seeeduino/Arduino ao seu PC através de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste blocos como na imagem abaixo ou abra o arquivo cdc, que pode ser baixado ao final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/cc_Mini_Fan.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
    When the code finishes uploaded, cover the light of the Light Sensor with your hand and the fan will turn on.
:::

## Disponibilidade

---
Este módulo Grove está disponível como parte das seguintes séries de kits Grove:

* Grove Mixer Pack V2

Alternativamente, ele pode ser comprado separadamente no Seeed Studio Bazaar.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - Mini Fan v1.0 (Eagle Files)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip)

* [Grove - Mini Fan v1.0 (pdf)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.pdf)

* [Arquivo Codecraft CDC](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove_Mini_Fan_CDC_File.zip)

## Projetos

**Controlador Grove Mini Fan + TI LaunchPad**: Alimente um mini ventilador com PWM usando Seeed Grove e TI LaunchPad.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/measley2/grove-mini-fan-controller-ti-launchpad-cba304/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
