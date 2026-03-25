---
description: Grove - MOSFET
title: Grove - MOSFET
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-MOSFET
sku: 103020008
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-MOSFET/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_01.jpg" /></div>

Grove – MOSFET permite que você controle projetos com tensão mais alta, digamos 15V DC, com baixa tensão, digamos 5V, em um microcontrolador. MOSFET também é um tipo de chave, mas sua frequência de comutação pode chegar a 5 MHz, muito mais rápida do que um relé mecânico normal. Existem dois terminais de parafuso na placa. Um para a fonte de alimentação externa e outro para o dispositivo que você deseja controlar. Grove – MOSFET irá passar a energia de uma extremidade para a outra quando estiver fechado. Mas se a fonte de alimentação externa estiver ausente, seu dispositivo ainda poderá obter energia do microcontrolador através da interface Grove.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-MOSFET-p-1594.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - MOSFET V1.0 | Inicial                                                                                                                                                                                    | Out 2015      |

## Especificação

|Parâmetro| Valor/Faixa|
|:--------|:-----------|
|Tensão de operação|  5V|
|Vin      |   5 ~ 15V|
|Modelo do MOSFET| CJQ4435|

:::tip
Para mais detalhes sobre os módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Demonstração

Aqui demonstramos como usar Grove - MOSFET para controlar um motor. Fornecemos energia para ele com uma fonte de alimentação externa, mas se o seu dispositivo controlado precisar de uma corrente menor que 300 mA, o Seeeduino pode suportá-lo totalmente e nenhuma fonte de alimentação extra é necessária.、

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - MOSFET |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **Passo 2.** Conecte o Grove - MOSFET à porta D6 do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/2.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar o Grove_MOSFET diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove_MOSFET |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Not Conencted | Branco                   |
| D6            | Amarelo                  |

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/MOSFET_Interface_Function.jpg" /></div>

Vin: Aceita alimentação de 5V ~ 15V com corrente inferior a 2A.

Vout: Conecte atuadores aqui.

#### Software

- **Passo 1.** Copie o código para a Arduino IDE e faça o upload. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
// demo of Grove - MOSFET
// use  pwm pin 6 to control a motor

int motorPin = 6;

void setup()
{
    Serial.begin(38400);
    pinMode(motorPin, OUTPUT);
    Serial.println("Grove - MOSFET Test Demo!");
}

void loop()
{
    motorOnThenOffWithSpeed();
    motorAcceleration();
}

void motorOnThenOffWithSpeed()
{
    int onSpeed  = 200;                         // a number between 0 (stopped) and 255 (full speed)
    int onTime   = 2500;
    int offSpeed = 50;                          // a number between 0 (stopped) and 255 (full speed)
    int offTime  = 1000;
    analogWrite(motorPin, onSpeed);
    delay(onTime);
    analogWrite(motorPin, offSpeed);
    delay(offTime);
}

void motorAcceleration()
{
    int delayTime = 50;
    for(int i=0; i<256; i++)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }

    for(int i=255; i>=0; i--)
    {
        analogWrite(motorPin, i);
        delay(delayTime);
    }
}
```

- **Passo 2.** Observe o estado do motor

![](https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Static_image.gif)

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - MOSFET |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-MOSFET ranger à porta **D6** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/1.jpg" /></div>

#### Software

- **Passo 1.** Navegue até o diretório de demos:

```
cd yourpath/GrovePi/Software/Python/
```

- **Passo 2.**  Para ver o código

```
nano grove_mosfet.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove MOSFET to digital port D6
# SIG,NC,VCC,GND
mosfet = 6

grovepi.pinMode(mosfet,"OUTPUT")
time.sleep(1)

while True:
    try:
        # Full speed
        grovepi.analogWrite(mosfet,255)
        print "full speed"
        time.sleep(2)

        # Half speed
        grovepi.analogWrite(mosfet,128)
        print "half speed"
        time.sleep(2)

        # Off
        grovepi.analogWrite(mosfet,0)
        print "off"
        time.sleep(2)

    except KeyboardInterrupt:
        grovepi.analogWrite(mosfet,0)
        break
    except IOError:
        print "Error"
```

- **Passo 3.** Execute a demonstração.

```
sudo python grove_mosfet.py
```

- **Passo 4.** Veremos a saída exibida no terminal como abaixo.

<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/Grove-MOSFET/img/pi_result.png" /></div>
|
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Arquivo de esquema do Grove - MOSFET](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip)
- **[PDF]** [PDF do esquema do Grove - MOSFET](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf)
- **[Datasheet]** [Datasheet do CJQ4435](https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf)
- **[WIKI]** [MOSFET na Wikipedia](https://en.wikipedia.org/wiki/MOSFET)

<!-- Este arquivo Markdown foi criado a partir de https://www.seeedstudio.com/wiki/Grove_-_MOSFET -->

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
