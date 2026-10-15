---
description: Motor Shield V1.0
title: Motor Shield V1.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Motor_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Motor_Shield_V1.0/
---
<!-- ---
name:  Motor Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Motor_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Motor-Shield_V1-0
sku: 103030012
tags:

--- -->

O Motor Shield é uma plataforma perfeita para aplicações de robótica e mecânica. Ele permite que o Arduino acione dois motores DC escovados ou um motor de passo de duas fases com 4 fios. Baseado no circuito integrado driver de motor H-bridge L298N, ele requer uma fonte de alimentação de 6 V a 15 V para alimentar o motor e também inclui um regulador de tensão de 5 V onboard para alimentar a placa Arduino principal. Sensores Grove adicionais plug and play podem ser conectados aos 13 conectores Grove onboard.

Modelo: [SLD80256P](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134)

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Smotoshield2.jpg)

## Características

- Compatível com Arduino padrão

- Modo de controle de velocidade por modulação por largura de pulso (PWM)

- 4 luzes indicadoras de direção

- Compatível com sensores Grove plug and play

- Dissipador de calor extra grande ajuda a lidar com grandes cargas

- Suporta até 14 servos

**CUIDADO:**

O CI driver e o dissipador de calor podem ficar muito quentes quando trabalham com corrente superior a 1000 mA.

## Especificações

| Item | Mín | Típico | Máx | Unidade |
|------|-----|---------|-----|------|
| Tensão de Controle Lógica | 4.5 | 5 | 5.5 | V |
| Tensão de Alimentação do Motor | 6 | / | 15 | V |
| Tensão de Saída | 0 | / | Vinput - 1 | V |
| Corrente de Saída (Para Cada Canal) | / | / | 2000 | mA |
| Faixa de Duty de Saída | 0% - 100% | | | / |
| Dimensão | 68.5×54.5×29.5 | | | mm |
| Peso Líquido | 37 | | | g |

- Recomenda-se duty máximo &lt;50% na carga total

## Função da Interface

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield-hard3.jpg)

**Conector de Energia Externa:** Fonte de alimentação externa para o Motor Shield.

**Interface do Motor:** Out 1 e Out 2 (Out 3 e Out 4) podem conectar o Motor A(B) para motor DC.

**Conector Enable Motor A:** Conecte as duas interfaces acima com um jumper ao acionar o motor DC A.

**Conector Enable Motor B:** Conecte as duas interfaces abaixo com um jumper ao acionar o motor DC B.

**Conector de Seleção de Fonte de Alimentação:** USB/Energia Externa podem fornecer energia para acionar o motor. Quando conectar o conector usando um jumper, a alimentação USB é usada para o motor shield.

A tabela a seguir descreve os LEDs indicadores do Motor A/B.

|  Indicadores|Descrição |
|---|---|
| IN1_red|acende quando o motor A gira no sentido horário, o pino out1 fornece nível alto  |
| IN2_green|acende quando o motor A gira no sentido anti-horário, o pino out2 fornece nível alto  |
|  IN3_red|acende quando o motor B gira no sentido horário, o pino out3 fornece nível alto |
| IN4_green|acende quando o motor B gira no sentido anti-horário, o pino out4 fornece nível alto  |

|  Nome do Pino|Direção|Conexão ao Arduino|Descrição
|---|---|---|---|
|VCC|/|VCC|Seletor de fonte de alimentação   |
|  VS, GND|/|/|Fonte de Alimentação para o Motor, 6 V - 15 V |
| EA|Entrada|D9|Entrada Enable TTL compatível da Ponte A  |
|  EB|Entrada|D10|Entrada Enable TTL compatível da Ponte B |
|  IN1|Entrada|D8|Entradas TTL compatíveis da Ponte A |
| IN2|Entrada|D11|Entradas TTL compatíveis da Ponte A  |
|  IN3|Entrada|D12|Entradas TTL compatíveis da Ponte B |
|  IN4|Entrada|D13|Entradas TTL compatíveis da Ponte B |  
|  M1-, M1+|Saída|/|Saídas da Ponte A |
| M2-, M2+|Saída|/|Saídas da Ponte B  |  

## Uso

### Instalação de Hardware

Conecte o motor DC aos pinos de saída M1+ & M1- (M2+ & M2-) do motor shield; se estiver usando um motor de passo de 4 fios, certifique-se de que os 4 pinos estejam conectados corretamente. Conecte a tensão de acionamento (a tensão necessária depende do motor usado. Consulte o datasheet do motor) aos terminais da fonte de alimentação.

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor-basic.jpg)

Com o jumper J4 inserido, o Arduino pode ser alimentado pela tensão de acionamento por meio de um regulador de tensão onboard, que regula a tensão de acionamento para 5 V.

### Software

Baixe o [código de demonstração do Motor shield](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip) e abra o sketch **Motor_shield_demo_code**. Selecione a placa Arduino correspondente em **tools-boards** e a porta serial em **tools-serial port**.

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield.png)

Envie o sketch para sua placa Arduino, então você verá que os 2 motores começam a funcionar. Se você alimentar o motor shield através do terminal de alimentação e o jumper de alimentação J4 estiver inserido, você pode remover o cabo USB agora.

O controle de velocidade é obtido por meio do PWM convencional, que pode ser obtido a partir das saídas PWM D9(EA) e D10(EB) do Arduino. Use a função **analogWrite()** para gerar o PWM de acionamento:

```cpp
int speedpinA=9;//enable motor A
int speedpinB=10;//enable motor B
int speed =127;//define the speed of motor
    ......
analogWrite(speedpinA,speed);//AnalogWrite to Generate PWM to control the motor speed
analogWrite(speedpinB,speed);
```

E defina os pinos digitais D8(IN1) e D11(IN2) para controlar o motor conectado a OUT1/2, enquanto os digitais D12(IN3) e D13(IN4) controlam o motor conectado a OUT3/4.

```cpp
int pinI1=8;//define I1 interface
int pinI2=11;//define I2 interface
    ......
digitalWrite(pinI2,HIGH);//turn DC Motor A move clockwise
digitalWrite(pinI1,LOW);
```

Segue a lógica entre EA(B) e INx com o movimento do motor:

| EA(B)|IN1(IN3)|IN2(IN4)|Movimento do MotorA(B)  |
|---|---|---|---|
|   0|x|x|Parado  |
|   1|0|0|Parado |
|   1|0|1|Sentido horário |
|  1|1|0|Sentido anti-horário |  
| 1|1|1|Parado  |

```cpp
/*
 SEEED Studio Stepper Motor Control - one revolution

 Adapts the Stepper example for use with the SEEED STUDIO motor shield.
 This program drives a unipolar or bipolar stepper motor
 by using the included Stepper library of the Arduino.
 The motor is attached to the Seeed Studio motor shield and an Arduino.

 The digital pins 8,11,12,13 drive the L298N and are used when creating the stepper object
 Digital pins 9 and 10 must be high to enable the chip.

 The motor should revolves one revolution in one direction, then
 one revolution in the other direction.


 Created 11 Mar. 2007
 Modified 30 Nov. 2009
 by Tom Igoe
 Modified 4 July 2012
 By R. Dumouchelle

 */

#include <Stepper.h>

const int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution
// for your motor

// initialize the stepper library on pins 8 through 11:
Stepper myStepper(stepsPerRevolution, 8,11,12,13);           

void setup() {
  // set the speed at 60 rpm:
  myStepper.setSpeed(60);
  // initialize the serial port:
  Serial.begin(9600);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  digitalWrite(9,HIGH);
  digitalWrite(10,HIGH);
}

void loop() {
  // step one revolution  in one direction:
  Serial.println("clockwise");
  myStepper.step(stepsPerRevolution);
  delay(500);

  // step one revolution in the other direction:
  Serial.println("counterclockwise");
  myStepper.step(-stepsPerRevolution);
  delay(500);
}
```

## Rastreador de Versão

|  Revisão|Descrições| Lançamento  |  
|---|---|---|
| v1.0|Lançamento V1.0|2012/3/29  |

## Projetos Relacionados

### Demonstração do Motor Shield V2.0

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Seeed-Recipe-Motor_Shield_V2.0_.png)

Esta é uma receita sobre como controlar motores individualmente com o motor shield 2.0 da Seeedstudio.

[Quero fazer isso](https://www.seeedstudio.com/recipe/171-seeed-2-0-motor-shield-individual-control.html).

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Datasheet]** [L298datasheet](https://wiki.seeedstudio.com/pt-br/images/5/5e/L298datasheet.pdf)
- **[EAGLE]**  [Arquivos eagle do Motor Shield](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip)
- **[PDF]**[PCB do Driver de Motor](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver.pdf)
- **[PDF]**[Esquemático do Driver de Motor](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver%20SCH.pdf)
- **[Code]**  [Código de demonstração do Motor shield](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
