---
description: Grove - Switch(P)
title: Grove - Switch(P)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Switch-P
sku: 101020004
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Switch-P/
---


![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/switch_p.jpg)

Este Grove – Switch é um mini slide SPDT, ótimo para situações de “LIGADO/DESLIGADO”. É uma chave confiável, de ótima qualidade de construção, que adotamos em muitas das nossas placas. Você deve manter algumas em estoque para o seu sistema de prototipagem Grove.

O que significa “P”? “P” significa “montagem em painel” neste produto.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## Versão

| Versão do Produto           | Alterações                               | Data de Lançamento |
|------------------------------|-------------------------------------------|---------------------|
|Grove-Switch(P) V1.0          | Inicial                                   | Jul 2012            |

## Recursos

- Interface Grove
- Fácil de usar
- Elemento Grove básico

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificação

| Parâmetro             | Valor/Faixa    |
|-----------------------|----------------|
| Tensão de operação    | 3.3/5V         |
| Vida elétrica          | 10.000 ciclos  |
| Força de operação      | 200 ± 50gf     |
| Temperatura de operação| -20℃ a +80℃    |
| Tamanho                | 20mmX20mm      |

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

**Hardware**

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield|  Grove-Switch(P) |Grove - Purple LED (3mm)|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/grove_led_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Purple-LED-%283mm%29-p-1143.html)|

- **Passo 2.** Conecte o Grove-Switch(P) à porta **D2** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove-LED à porta **D6** do Grove-Base Shield.
- **Passo 4.** Pluge o Grove - Base Shield no Seeeduino.
- **Passo 5.** Conecte o Seeeduino ao PC via cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/seeeduino_switch_led.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Switch(P) e o Grove - Purple LED (3mm) ao Seeeduino como abaixo.
:::

| Seeeduino | Grove-Switch(P) | Seeeduino | Grove - Purple LED (3mm) |
|-----------|-----------------|-----------|--------------------------|
| 5V        | Vermelho        | 5V        | Vermelho                 |
| GND       | Preto           | GND       | Preto                    |
| NC        | Branco          | NC        | Branco                   |
| D2        | Amarelo         | D6        | Amarelo                  |

**Software**

- **Passo 1.** Copie o código abaixo para a IDE do Arduino e faça o upload para o Arduino. Se você não sabe como enviar o código, confira [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```
const int switchPin = 2;     // the number of the pushbutton pin
const int ledPin =  6;      // the number of the LED pin

int switchState = 0;         // variable for reading the pushbutton status

void setup() {
    // initialize the LED pin as an output:
    pinMode(ledPin, OUTPUT);
    // initialize the switch pin as an input:
    pinMode(switchPin, INPUT);
    Serial.begin(9600);
}

void loop(){
    // read the state of the switch value:
    switchState = digitalRead(switchPin);

    if (switchState == HIGH) {
        //turn LED on:
        digitalWrite(ledPin, HIGH);
        Serial.println("switch high!");
    }
    else {
        //turn LED off:
        digitalWrite(ledPin, LOW);
        Serial.println("switch low");
    }
}

```

- **Passo 2.** Quando mudarmos para nível alto, o LED acenderá. Também podemos ver a saída Serial como abaixo.

```
switch high!
switch high!
switch high!
```

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Switch P |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **Passo 2**. Pluge o Grove Base Hat no Raspberry.
- **Passo 3**. Conecte o Switch à porta 12 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/Switch_Hat.jpg)

:::note
No passo 3 você pode conectar o switch a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, terá que usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_switch.py 12

```

A seguir está o código grove_switch.py.

```python


import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)

    @property
    def state(self):
        return super(GroveTiltSwitch, self).read()


Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))


    while True:
        if swicth.state is 1:
            print("on")
        else:
            print("off")
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
    Se tudo correr bem, você poderá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_switch.py 12
off
off
on
off
on
on
off
^CTraceback (most recent call last):
  File "grove_switch.py", line 70, in <module>
    main()
  File "grove_switch.py", line 66, in main
    time.sleep(1)
KeyboardInterrupt


```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

### Brincar com Raspberry Pi (com GrovePi_Plus)

**Hardware**

- **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove-Switch(P) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Switch(P) à porta **D3** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/rpi_switch.jpg)

**Software**

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Faça o git clone do repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 3.** Execute os comandos abaixo para monitorar o status do interruptor.

```python
cd ~/GrovePi/Software/Python
python3 grove_switch.py
```

Aqui está o código grove_switch.py.

```python
import time
import grovepi

# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND
switch = 3

grovepi.pinMode(switch,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(switch))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **Passo 4.** Veremos o status do interruptor como abaixo.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_switch.py 
1
1
0
0
0
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Esquemático do Grove-Switch(P)](https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip)

## Projetos

**Usando um Interruptor para Abrir e Fechar um Relé**: Você aprenderá o valor de um interruptor, com suas funções High e Low. Além disso, você aprenderá como usar um relé como atuador.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe>

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
