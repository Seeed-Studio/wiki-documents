---
title: Grove - Motor de Vibração
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Vibration_Motor/
slug: /Grove-Vibration_Motor
sku: 103020027, 105020003
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Vibration_Motor/
---

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib.jpg)

Este é um mini motor de vibração adequado como indicador não audível. Quando a entrada está em HIGH, o motor irá vibrar como o seu celular no modo silencioso.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

## Rastreador de Versão

| Revisão | Descrição                                                    | Lançamento       |
|----------|----------------------------------------------------------------|---------------|
| v0.9b    | Lançamento público inicial                                      | 10 de maio de 2011  |
| v1.0     | Usa diretamente uma porta de I/O para acionar o Motor de Vibração | 5 de nov. de 2011   |
| v1.2     | Transistor adicionado, usa corrente maior para acionar o Motor de Vibração | 11 de jul. de 2013 |

## Recursos

- Compatível com Grove
- Não audível
- Baixo consumo de energia
- Alta confiabilidade

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típ
</th>
<th scope="col">
Máx
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de operação
</th>
<td>
3.0V
</td>
<td>
5.0V
</td>
<td>
5.5V
</td>
</tr>
<tr align="center">
<th scope="row">
Modo de controle
</th>
<td colspan="3" rowspan="1">
Nível lógico
(Quando a lógica está em HIGH, o motor está ON. Quando LOW, o motor está OFF.)
</td>
</tr>
<tr align="center">
<th scope="row">
Velocidade nominal
</th>
<td colspan="3" rowspan="1">
9000 rpm
</td>
</tr>
</table>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

Fazê-lo vibrar é tão fácil quanto acender um LED. Aqui está um exemplo mostrando como ligar o motor de vibração.

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield|  Grove - Motor de Vibração |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **Passo 2.** Conecte o Grove - Motor de Vibração à porta D2 do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/vibration_motor.png)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Motor de Vibração ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Motor de Vibração |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Not Conencted | Branco                  |
| D2            | Amarelo                 |

#### Software

- **Passo 1.** Copie o código para o Arduino IDE e envie-o. Se você não sabe como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
int MoPin = 2;    // vibrator Grove connected to digital pin 9

void setup()  {
    pinMode( MoPin, OUTPUT );
}

void loop()  {

    digitalWrite(MoPin, HIGH);
    delay(1000);

    digitalWrite(MoPin, LOW);
    delay(1000);
}

```

- **Passo 2.** Agora, sinta a vibração do seu motor!

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte o Grove - Motor de Vibração à porta D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/cc_Vibration_Motor.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
    Quando o código terminar de ser enviado, você sentirá a vibração do motor de vibração.
:::

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove - Motor de Vibração |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/img/Gvib_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove - Motor de Vibração à porta **D8** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

#### Software

- **Passo 1.** Navegue até o diretório de demonstrações:

```
cd yourpath/GrovePi/Software/Python/
```

- **Passo 2.** Para ver o código

```
nano grove_vibration_motor.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Vibration Motor to digital port D8
# SIG,NC,VCC,GND
vibration_motor = 8

grovepi.pinMode(vibration_motor,"OUTPUT")

while True:
    try:
        # Start vibrating for 1 second
        grovepi.digitalWrite(vibration_motor,1)
        print 'start'
        time.sleep(1)

        # Stop vibrating for 1 second, then repeat
        grovepi.digitalWrite(vibration_motor,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(vibration_motor,0)
        break
    except IOError:
        print "Error"
```

- **Passo 3.** Execute a demonstração.

```
sudo python grove_vibration_motor.py
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático do Grove - Motor de Vibração](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/Grove-Vibration_Motor_Eagle_Files.zip)

- **[Datasheet]** [S9013 Datasheet](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/S9013.pdf)

- **[Datasheet]** [ANDA-B1020 Datasheet](https://files.seeedstudio.com/wiki/Grove-Vibration_Motor/res/ANDA-B1020_datasheet.pdf)

- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove_Vibration_Motor/resource/Grove_Vibration_Motor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor -->

## Projeto

**Grove - Introdução a um Motor de Vibração - apenas para adultos**: Exemplo para iniciantes

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-vibration-motor-only-for-adults-2acfc2/embed' width='350'></iframe>

**Inspirados em OVERWATCH, fizemos nestes dias um brinquedo muito legal de Pistola de Laser de Madeira para nos divertir!**

A Pistola de Laser de Madeira e o Alvo da Pistola são todos baseados em uma placa Arduino chamada Seeeduino Lotus. O emissor de laser na Pistola de Laser é controlado para disparar pulsos de laser para "ativar" o Alvo da Pistola. E há 3 sensores de luz no Alvo da Pistola para detectar o pulso de laser. Parece muito simples, certo? Se você estiver interessado em nosso projeto, faça um para você ou para seu filho! Vale a pena gastar um dia fazendo isso como um presente de Natal DIY.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
