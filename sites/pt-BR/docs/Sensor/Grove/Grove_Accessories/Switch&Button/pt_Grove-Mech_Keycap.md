---
description: Grove-Mech keycap
title: Grove-Mech keycap
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mech_Keycap
sku: 111020049
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mech_Keycap/
---
<!-- ---
name: Grove-Mech keycap
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020049
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/2.jpg)

O Grove-Mech keycap é um switch mecânico com um LED embutido. O LED RGB de 255 cores completas torna simples e fácil mostrar o estado do seu switch. Este keycap é muito confiável, com vida útil operacional de 20.000.000 de pressionamentos.

Você achará que este é um módulo interessante e estável para fazer projetos ou produtos realmente divertidos. Na verdade, você pode até fazer um teclado mecânico usando vários Grove-Mech keycaps.

:::tip
20.000.000 ciclos de operação devem ser executados continuamente a uma taxa de 300 ciclos por minuto sem carga.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mech-Keycap.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- LED programável
- Estrutura mecânica confiável  
- Vida útil operacional extremamente longa

## Especificação

|Item|Valor|
|---|---|
|Tensão de trabalho|3v-5v|
|Resistência de isolação|100MΩ mín.|
|Resistência de contato|200 mΩ máx.|
|Vida útil de operação sem carga|20.000.000|

## Aplicações

- dispositivos automotivos
- dispositivos visuais
- eletrodomésticos
- dispositivos de informação

## Hardware

### Mapa de pinos

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg)

O K1 está ligado ao botão, quando a tecla está aberta, o **SIG1** será puxado para baixo por R2, então a saída de **SIG1** deve ser baixa.
Assim que o botão for pressionado, o K1 será fechado e o **SIG1** será conectado ao **VCC**, então a saída de **SIG1** se tornará alta.

:::note
Nesta seção mostramos apenas parte do esquemático, para o documento completo consulte [Resources](/pt-br/#Recursos)
:::

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove-Mech keycap |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank">Get One Now</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Step 1.** Conecte o Grove-Mech keycap à porta **D2** do Grove-Base Shield.

- **Step 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Step 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar o Grove-Mech keycap diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove-Mech keycap       |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D3         | White                   |
| D2            | Yellow                  |

#### Software

- **Step 1.** Baixe a biblioteca [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip) do Github.

- **Step 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Step 3.** Abra a IDE do Arduino e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp
/**
 * This is an exmaple of the Grove - Mech Keycap.
 * Every press of the key will change the color the SK6805 RGB LED. The SK6805 is a NeoPixel compatible chip.
 * 
 * Credit:
 * Adafruit_NeoPixel - https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING
 */

#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN   2    // Digital IO pin connected to the button.  This will be
                          // driven with a pull-up resistor so the switch should
                          // pull the pin to ground momentarily.  On a high -> low
                          // transition the button press logic will execute.

#define PIXEL_PIN    3    // Digital IO pin connected to the NeoPixels.

#define PIXEL_COUNT 60

// Parameter 1 = number of pixels in strip,  neopixel stick has 8
// Parameter 2 = pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_RGB     Pixels are wired for RGB bitstream
//   NEO_GRB     Pixels are wired for GRB bitstream, correct for neopixel stick
//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)
//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip), correct for neopixel stick
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

bool oldState = LOW;
uint8_t color_pos = 0;
int i=0;
int longpress=2000;
long timecheck;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.clear();
  strip.show(); // Initialize all pixels to 'off'
  Serial.begin(9600); 
}

void loop()
{

  // Get current button state.
  bool newState = digitalRead(BUTTON_PIN);

  // Check if state changed from low to high (button press).
  if (newState == HIGH && oldState == LOW) {
      timecheck = millis(); 
    // Short delay to debounce button.
    delay(20);
    // Check if button is still low after debounce.
    newState = digitalRead(BUTTON_PIN);
    if (newState == HIGH){
      color_pos+=8;
      strip.setPixelColor(0, Wheel(color_pos));
      strip.show();
    }
  }

 if( millis()-timecheck > 300)
 {
   if (digitalRead(BUTTON_PIN)==HIGH)
   {
 if(millis()-timecheck > longpress)
 {
  while(digitalRead(BUTTON_PIN) == HIGH)
  {
  strip.setPixelColor(0,Wheel(color_pos));
  strip.show();
  delay(300);

  strip.setPixelColor(0,0,0,0);
  strip.show();
  delay(300);
  bool newState = digitalRead(BUTTON_PIN);
  }
  strip.setPixelColor(0,0,0,0);
  strip.show();
   timecheck = millis(); 
 }
  }
   }

  // Set the last button state to the old state.
  oldState = newState;
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

```

- **Step 4.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Step 5.** Toda vez que você pressionar o Grove-Mech Keycap, verá a cor do LED mudar. Se você pressionar e segurar o botão por cerca de 2 segundos, verá o efeito de luz respiratória.

### Brincar com Raspberry Pi

#### Hardware

- **Step 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Mech Keycap|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - Mech Keycap à porta PWM (porta 12) do Base Hat.

:::note
o pino pode ser um dos valores abaixo na coluna de pinos para a função PWM e conecte o dispositivo ao slot correspondente.
:::

|Pino|Slot|
|---|---|
|18|D18|
|12|PWM|

- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg)

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
sudo python grove_mech_keycap.py 12

```

:::caution
Unix tem um "modelo de segurança". Como usuário normal você pode fazer coisas, mas não deve ser capaz de acessar os arquivos de outras pessoas no mesmo computador. E, como usuário, você não deve ser capaz de fazer o computador parar de funcionar. Agora, "/dev/mem" permite muito, muito mais "travessuras" do que apenas mudar um GPIO. Por isso /dev/mem deve ser protegido contra usuários normais. Assim, para rodar este código, você deve digitar **sudo python grove_mech_keycap.py** na linha de comando
:::

A seguir está o código grove_mech_keycap.py.

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveKeycap(object):
    def __init__(self, pin):
        # High = pressed
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        # single WS2812 LED
        self.__led = Factory.getOneLed("WS2812-PWM", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveKeycap.__handle_event)

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


Grove = GroveKeycap

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.PWM)
    pin = sh.argv2pin()

    ledbtn = GroveKeycap(pin)

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
Se tudo correr bem, você conseguirá ver o seguinte resultado. Se você clicar uma vez no keycap, verá "turn on LED", se você der um clique duplo no keycap, verá "blink LED". Pressionar o keycap por tempo prolongado mostrará "turn off LED".
:::

```python

pi@raspberrypi:~/grove.py/grove $ sudo python grove_mech_keycap.py 12
Hat Name = 'Grove Base Hat RPi'
turn on  LED
turn on  LED
blink    LED
turn on  LED
turn off LED
^CTraceback (most recent call last):
  File "grove_mech_keycap.py", line 98, in <module>
    main()
  File "grove_mech_keycap.py", line 94, in main
    time.sleep(1)
KeyboardInterrupt


```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo eagle do Grove-Mech Keycap](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [Resumo do produto do interruptor](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples; você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
