---
description: Grove-LED Button
title: Grove-LED Button
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_Button
sku: 111020046, 111020045, 111020044
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-LED_Button/
---
<!-- ---
name: Grove-LED Button
category: Acator
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020044,111020045,111020046
tags: 2-链接 
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg)

O Grove - LED Button é composto pelo Grove - Yellow Button, Grove - Blue LED Button e Grove - Red LED Button. Este botão é estável e confiável, com uma longa vida útil de 100 000 acionamentos.
Com o LED integrado, você pode aplicá-lo a muitos projetos interessantes; é realmente útil usar o LED para mostrar o status do botão. Usamos um MOSFET de canal N de alta qualidade para controlar o LED, garantindo alta velocidade de comutação e baixo consumo. Enfim, você quer um botão realmente incrível? Aqui está ...

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/Y.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/B.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/R.png"  height="48" width="300" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                           | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|--------------------|
| Grove-LED Button | Inicial                                                                                               | Jun 2018           |

## Versão

| Versão do Produto  | Alterações                                                                                           | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|--------------------|
| Grove-LED Button | Inicial                                                                                               | Jun 2018           |

## Versão

| Versão do Produto  | Alterações                                                                                           | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|--------------------|
| Grove-LED Button | Inicial                                                                                               | Jun 2018           |

## Recursos

- Longa vida útil de operação
- Fácil de usar
- Interface digital Grove

## Especificação

|Item|Valor|
|---|---|
|Tensão de trabalho|3.3V/5V|
|Vida útil de operação sem carga|100 000 vezes|
|Corrente nominal do LED|50mA|
|Resistência ao pressionar^1^|&lt;100mΩ|
|Resistência ao soltar^2^|&gt;100MΩ|
|Tamanho|C: 40mm L: 20mm A: 13mm|
|Peso|4.3g|
|Tamanho da embalagem|C: 140mm L: 90mm A: 10mm|
|Peso bruto|11g|

:::tip
1,2- Se você quiser medir a resistência, remova a tecla da placa. Caso contrário, você obterá o valor da resistência equivalente da placa em vez da verdadeira resistência da tecla.
:::

## Visão Geral de Hardware

### Mapa de Pinos

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/schematic.jpg)

**SIG1** é o sinal de controle do LED; o valor padrão é baixo, então o MOSFET de canal N está desligado, e o LED também está desligado. Quando **SIG1** se torna alto, o MOSFET de canal N liga e o LED acende.

**SIG2** está conectado ao pino do botão. Com um resistor de pull-up, o valor padrão de **SIG2** é alto. Quando você pressiona o botão, a tensão é puxada para baixo e **SIG2** se torna baixa.

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## Primeiros Passos

:::tip
Nesta parte, usamos o Grove - Red LED Button como exemplo. As partes seguintes também se aplicam ao Yellow e ao Blue.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove- Red LED Button |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank">Get One Now</a>|

- **Passo 1.** Conecte o Grove- Red LED Button à porta **D3** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/red%20LED.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove- Red LED Button           |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SIG2           | Branco                 |
| SIG1          | Amarelo                 |

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Começando com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Abra a IDE do Arduino e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp
#include "Arduino.h"

//1: toggle mode, 2: follow mode
#define LED_MODE   1

const int ledPin = 3;      // the number of the LED pin, D3
const int buttonPin = 4;    // the number of the pushbutton pin, D4
const boolean breathMode = true;  // if or not the led lights as breath mode when it's on

// Variables will change:
int ledState = LOW;         // the current state of the output pin
int ledFadeValue = 0;
int ledFadeStep = 5;
int ledFadeInterval = 20;   //milliseconds
int buttonState;             // the current reading from the input pin
int lastButtonState = HIGH;   // the previous reading from the input pin

unsigned long lastDebounceTime = 0;  // the last time the output pin was toggled
unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers
unsigned long lastLedFadeTime = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, ledState);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // If the switch changed, due to noise or pressing:
  if (reading != lastButtonState) {
    // reset the debouncing timer
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // whatever the reading is at, it's been there for longer
    // than the debounce delay, so take it as the actual current state:

    // if the button state has changed:
    if (reading != buttonState) {
      buttonState = reading;

#if LED_MODE == 1
      if (buttonState == LOW) {  //button is pressed
          ledState = !ledState;
          ledFadeValue = 0;
          lastLedFadeTime = millis();
      }
#else
      if (buttonState == LOW) {  //button is pressed
        ledState = HIGH;
        ledFadeValue = 0;
        lastLedFadeTime = millis();
      } else {                   //button is released
        ledState = LOW;
      }
#endif
    }
  }

  // set the LED:
  if (breathMode && ledState != LOW) {
    if (millis() - lastLedFadeTime > ledFadeInterval) {
      lastLedFadeTime = millis();
      analogWrite(ledPin, ledFadeValue);
      ledFadeValue += ledFadeStep;
      if (ledFadeValue > 255){
        ledFadeValue = 255 - ledFadeStep;
        ledFadeStep = -ledFadeStep;
      } else if (ledFadeValue < 0) {
        ledFadeValue = 0;
        ledFadeStep = -ledFadeStep;
      }
    }
  } else {
    digitalWrite(ledPin, ledState);
  }

  lastButtonState = reading;
}

```

:::tip
Neste demo, escolhemos o modo 1, que é o modo de alternância; você pode alterar a linha 4 <mark>#define LED_MODE   1</mark> para <mark>#define LED_MODE   2</mark> para usar o modo a seguir.
:::

- **Passo 2.** Faça o upload da demonstração. Se você não sabe como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 3.** Agora, tente pressionar o botão, você verá o LED acender com um efeito de fade in/fade out.

Deve ser assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/result.gif"  /></p>

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Red LED Button|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o botão de LED vermelho à porta D5 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/LED_Hat.jpg)

:::note
No passo 3 você pode conectar o botão de LED a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
sudo pip3 install Seeed-grove.py
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
sudo python3 grove_ryb_led_button.py 5

```

A seguir está o código grove_ryb_led_button.py.

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveLedButton(object):
    def __init__(self, pin):
        # High = light on
        self.__led = Factory.getOneLed("GPIO-HIGH", pin)
        # Low = pressed
        self.__btn = Factory.getButton("GPIO-LOW", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveLedButton.__handle_event)

    @property
    def on_event(self):
        return self.__on_event

    @on_event.setter
    def on_event(self, callback):
        if not callable(callback):
            return
        self.__on_event = callback

    def __handle_event(self, evt):
        # print("event index:{} event:{} pressed:{}".format(evt['index'], evt['code'], evt['presesed']))
        if callable(self.__on_event):
            self.__on_event(evt['index'], evt['code'], evt['time'])
            return

        self.__led.brightness = self.__led.MAX_BRIGHT
        event = evt['code']
        if event & Button.EV_SINGLE_CLICK:
            self.__led.light(True)
            print("turn on  LED")
        elif event & Button.EV_DOUBLE_CLICK:
            self.__led.blink()
            print("blink    LED")
        elif event & Button.EV_LONG_PRESS:
            self.__led.light(False)
            print("turn off LED")


Grove = GroveLedButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    ledbtn = GroveLedButton(pin)

    # remove ''' pairs below to begin your experiment
    '''
    # define a customized event handle your self
    def cust_on_event(index, event, tm):
        print("event with code {}, time {}".format(event, tm))

    ledbtn.on_event = cust_on_event
    '''
    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
Se tudo correr bem, você verá o LED acender quando você o pressionar e apagar quando você o pressionar longamente. Se você clicar duas vezes no botão de LED, o LED irá piscar.
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ryb_led_button.py 5
Hat Name = 'Grove Base Hat RPi'
turn on  LED
turn on  LED
blink    LED
turn on  LED
turn off LED
^CTraceback (most recent call last):
  File "grove_ryb_led_button.py", line 101, in <module>
    main()
  File "grove_ryb_led_button.py", line 97, in main
    time.sleep(1)
KeyboardInterrupt

```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo Eagle do Grove-LED Button](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip)

## Suporte Técnico & Discussão de Produto

<br />
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
