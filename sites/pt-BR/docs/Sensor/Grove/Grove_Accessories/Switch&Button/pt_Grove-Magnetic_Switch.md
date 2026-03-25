---
description: Grove - Magnetic Switch
title: Grove - Magnetic Switch
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Magnetic_Switch
sku: 101020038
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Magnetic_Switch/
---
<!-- ---
name: Grove - Magnetic Switch
category: Sensor
bzurl: https://seeedstudio.com/Grove-Magnetic-Switch-p-744.html
oldwikiname: Grove_-_Magnetic_Switch
prodimagename: Magnetic_Switch.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020038 1.jpg
surveyurl: https://www.research.net/r/Grove-Magnetic_Switch
sku: 101020038
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d.jpg)

Este é um módulo de chave magnética compatível com a interface Grove. Ele é baseado na chave reed encapsulada CT10. A CT10 é do tipo SPST (single-pole, single throw), com contatos de rutênio normalmente abertos. O sensor é do tipo de dupla extremidade e pode ser acionado com um eletroímã, um ímã permanente ou uma combinação de ambos. A chave magnética é uma ferramenta excelente para projetistas que desejam ligar e desligar um circuito com base em proximidade.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

## Recursos

- Interface compatível com Grove
- Módulo Grove de 2,0 cm x 2,0 cm
- Mínimas partes externas
- Potência nominal de 10 W
- Encapsulamento robusto

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Ideias de Aplicação

- Sensor de proximidade
- Sensor de alarme de segurança
- Sensor de nível
- Sensor de fluxo
- Contador de pulsos

## Especificações

<table border="1">
<tr>
<th scope="col">
Itens
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Norm
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<td>
Tensão de trabalho
</td>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Potência comutada
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
Tensão comutada CA, valor RMS (máx)
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Corrente comutada CC
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Corrente de condução CC
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
Resistência de contato
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
Resistência de isolação
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
Temperatura de operação
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
Faixa de operação
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Demonstração

O pino SIG do módulo normalmente gera nível BAIXO. Quando um ímã se aproxima da chave, a chave magnética fecha e o pino SIG gera nível ALTO.

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove - Magnetic Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **Passo 2.** Conecte o Grove - Magnetic Switch à porta **D2** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_ardu.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Magnetic-Switch ao Seeeduino como abaixo.
:::

| Seeeduino | Grove-Magnetic_Switch |
|------|----------------------------|
| 5V/3.3V   | Vermelho                        |
| GND  | Preto                      |
| NC   | Branco                      |
| D2   | Amarelo                     |

#### Software

- **Passo 1.** Copie o código para a IDE do Arduino e faça o upload. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
/*******************************************************************************/

/*macro definitions of magnetic pin and LED pin*/
#define MAGNECTIC_SWITCH 2
#define LED 13//the on board LED of the Arduino or Seeeduino

void setup()
{
    pinsInit();
}

void loop() 
{
    if(isNearMagnet())//if the magnetic switch is near the magnet?
    {
        turnOnLED();
    }
    else
    {
        turnOffLED();
    }
}
void pinsInit()
{
    pinMode(MAGNECTIC_SWITCH, INPUT);
    pinMode(LED,OUTPUT);
}

/*If the magnetic switch is near the magnet, it will return ture, */
/*otherwise it will return false                                */
boolean isNearMagnet()
{
    int sensorValue = digitalRead(MAGNECTIC_SWITCH);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
```

- **Passo 2.**  Então o LED acende quando há um ímã se aproximando da chave. Experimente!

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Magnetic Switch à porta D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta é a primeira vez que você usa o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/cc_Magnetic_Switch.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser enviado, aproxime o ímã da chave magnética e você verá o LED no pino 13 do Arduino acender.
:::

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - Magnetic Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Magnetic-Switch ranger à porta **D2** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_rpi.jpg)

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você tem que usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Navegue para o diretório de demonstrações:

```
cd yourpath/GrovePi/Software/Python/
```

- **Etapa 3.** Para ver o código (esta demonstração tem o mesmo uso que o tilt switch)

```
nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Connect the Grove Tilt Switch to digital port D2
# SIG,NC,VCC,GND
tilt_switch = 2

grovepi.pinMode(tilt_switch,"INPUT")

while True:
    try:
        print grovepi.digitalRead(tilt_switch)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Etapa 4.** Execute a demonstração.

```
sudo python grovepi_tilt_switch.py
```

- **Etapa 5.** Resultado

Coloque um ímã sobre o sensor, o pino SIG irá gerar saída em HIGH.

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/Grovepi_tilt_Switch_00.png)

# Grove-Magnetic Switch v0.9

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Magnetic Switch v1.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]**  [Esquemático do Grove-Magnetic Switch v0.9](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip)

- **[Eagle]**  [Esquemático do Grove-Magnetic Switch v1.3](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)

- **[PDF]**  [Arquivo PDF do Grove-Magnetic Switch v1.3](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)

- **[Datasheet]**  [Datasheet do CT10](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/CT10.pdf)

- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove_Magnetic_Switch_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch -->

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
