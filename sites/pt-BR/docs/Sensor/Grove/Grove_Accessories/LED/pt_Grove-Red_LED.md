---
description: Grove - LED Vermelho
title: Grove - LED Vermelho
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Red_LED
sku: 104030007, 104020002, 104030005, 104020228, 104030014
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Red_LED/
---

<!-- ![](https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" alt="pir" width={600} height="auto" /></p>

Grove - LED Vermelho é semelhante ao módulo Grove - LED que abriga uma fonte de luz LED. Além disso, ele também possui um potenciômetro integrado para gerenciar os requisitos de energia do LED. A PCI deste módulo possui furos de montagem que podem ser fixados na superfície necessária do seu protótipo. Por exemplo, ele pode ser usado como uma lâmpada piloto para indicar presença de energia ou de sinal.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED_v1.3 | Inicial                                                                                                                                                                                    | 15 Mar 2016      |

## Recursos

- Fornece uma indicação luminosa em LED para o seu projeto
- Suporta LEDs de diferentes cores, o LED é encaixado no suporte de LED em vez de ser soldado na placa
- Suporta controle de brilho e faixa maior de tensões de entrada com ajuste por potenciômetro on-board

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

- Etapa 1. Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - LED Vermelho |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Compre AGORA](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Compre AGORA](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Compre AGORA](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- Etapa 2. Conecte o Grove-Red LED à porta D2 do Grove-Base Shield.
- Etapa 3. Conecte o Grove - Base Shield ao Seeeduino.
- Etapa 4. Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar o Grove-Red_Led diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove-Red Led |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Not Conencted | Branco                   |
| D2            | Amarelo                  |

#### Software

- **Etapa 1**. Copie o código para a IDE do Arduino e faça o upload.

```
void setup() {
  // initialize digital pin2  as an output.
  pinMode(2, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(2, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(2, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

- **Etapa 2**. Veremos o LED acender e apagar.

### Brincar com Codecraft

#### Hardware

**Etapa 1.** Conecte o Grove - LED Vermelho à porta D2 de um Base Shield.

**Etapa 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Etapa 3.** Conecte o Seeeduino/Arduino ao seu PC através de um cabo USB.

#### Software

**Etapa 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guia para Codecraft usando Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Etapa 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png" alt="pir" width={600} height="auto" /></p>

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o upload do código terminar, você verá o LED piscando.
:::

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Etapa 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Red LED |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Compre AGORA](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Compre AGORA](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Compre AGORA](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **Etapa 2**. Conecte o Grove Base Hat ao Raspberry.
- **Etapa 3**. Conecte o LED Vermelho à porta 12 do Base Hat.
- **Etapa 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Na etapa 3 você pode conectar o LED Vermelho a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Etapa 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Etapa 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Etapa 3**. Execute o comando abaixo para rodar o código.

```
cd yourpath/grove.py/grove
python3 grove_led.py 12
```

Se você conectar o LED Vermelho a uma porta diferente do Base Hat, em vez de executar **python grove_led.py 12**, você deve rodar o seguinte comando.

```
python3 grove_led.py portnumber
```

A seguir está o código grove_led.py.

```python

from grove.gpio import GPIO


class GroveLed(GPIO):
    def __init__(self, pin):
        super(GroveLed, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveLed


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    led = GroveLed(int(sys.argv[1]))

    while True:
        led.on()
        time.sleep(1)
        led.off()
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    Se tudo correr bem, você conseguirá ver o LED ligando e desligando.
:::
:::note
    Para a maioria dos módulos Grove, você precisa adicionar o parâmetro do número do pino, como neste exemplo  `python3 grove_led.py 12`, **12** é o pino GPIO escolhido e a saída do pino 12 irá alimentar o LED.  
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- Passo 1. Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - LED Vermelho |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- Passo 2. Conecte o GrovePi_Plus ao Raspberry.
- Passo 3. Conecte o Grove-Red LED à porta D4 do GrovePi_Plus.
- Passo 4. Conecte o Raspberry ao PC através do cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Faça o git clone do repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 3**. Execute os comandos abaixo.

```
cd ~/GrovePi/Software/Python
python3 grove_led_blink.py
```

Aqui está o código grove_led_blink.py.

```python

import time
from grovepi import *

# Connect the Grove LED to digital port D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

print ("This example will blink a Grove LED connected to the GrovePi+ on the port labeled D4. If you're having trouble seeing the LED blink, be sure to check the LED connection and the port number. You may also try reversing the direction of the LED on the sensor.")
print (" ")
print ("Connect the LED to the port labele D4!" )

while True:
    try:
        #Blink the LED
        digitalWrite(led,1)  # Send HIGH to switch on LED
        print ("LED ON!")
        time.sleep(1)

        digitalWrite(led,0)  # Send LOW to switch off LED
        print ("LED OFF!")
        time.sleep(1)

    except KeyboardInterrupt: # Turn LED off before stopping
        digitalWrite(led,0)
        break
    except IOError:    # Print "Error" if communication error encountered
        print ("Error")

```

- **Passo 4**. Veremos o LED ligando e desligando.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_led_blink.py
This example will blink a Grove LED connected to the GrovePi+ on the port labeled D4.
If you're having trouble seeing the LED blink, be sure to check the LED connection and the port number.
You may also try reversing the direction of the LED on the sensor.

Connect the LED to the port labele D4!
LED ON!
LED OFF!
LED ON!
LED OFF!
```

## Recursos

- **[PDF]** [Esquema do Grove-Red LED](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove-LED_v1.3.pdf)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove_Red_LED_CDC_File.zip)

## Projetos

**Usando Grove Button para controlar Grove LED**: Como conectar e usar o Grove Button para controlar o kit de soquete Grove LED.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**Módulos Grove de Botão e LED**:

<iframe width={560} height={315} src="https://www.youtube.com/embed/RCtsxwx4OaA" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

<iframe width={560} height={315} src="https://www.youtube.com/embed/78lVn_-oYaY" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

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
