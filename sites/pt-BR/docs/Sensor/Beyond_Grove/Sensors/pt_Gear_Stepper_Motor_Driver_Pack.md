---
title: Pacote de Driver de Motor de Passo com Engrenagem
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Gear_Stepper_Motor_Driver_Pack/
slug: /Gear_Stepper_Motor_Driver_Pack
sku: 105990072, 105990028
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Gear_Stepper_Motor_Driver_Pack/
---

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/main.jpg)

O Pacote de Driver de Motor de Passo com Engrenagem inclui um motor de passo e uma placa controladora de motor. É um motor de passo de quatro fases e oito passos, e você pode controlar facilmente esse motor de passo por meio da placa controladora.

Você pode usar este pacote para controle de posição.

<p style={{}}><a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Baixo ruído
- Grande torque
- Caixa de engrenagens integrada

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|5V|
|Fase|4|
|Taxa de redução|1/64|
|Ângulo de passo|5.625°/64|
|Diâmetro|28mm / Nema 11|
|Frequência de tração em vazio (entrada)|>500HZ|
|Frequência de tração em vazio (saída)|>1000HZ|
|Resistência|21±7%|
|Ruído|≤40dB|
|Modo de acionamento|quatro fases e oito passos|

## Aplicações típicas

- Impressoras de mesa
- Plotters
- Impressoras 3D
- Máquinas de fresagem CNC

## Visão geral de hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_1.jpg)

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_2.jpg)

### Desenho mecânico

você pode clicar nele para ver a imagem original.

<p style={{}}><a href="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" /></a></p>

## Plataformas suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::tip
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Pacote de Driver de Motor de Passo com Engrenagem |Jumpers fêmea-macho|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Para fazer o Pacote de Driver de Motor de Passo com Engrenagem funcionar com o seu Arduino, também são necessários vários jumpers fêmea-macho. Caso você não tenha jumpers, pode clicar [aqui](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) para comprar.
:::note

- **Passo 1.** Conecte a Placa Controladora do Motor de Passo com Engrenagem ao seu Seeeduino por meio de jumpers.

|Seeeduino|Placa Controladora do Motor de Passo com Engrenagem|
|---|---|
|Pino Digital 8|IN1|
|Pino Digital 9|IN2|
|Pino Digital 10|IN3|
|Pino Digital 11|IN4|
|GND|GND|
|VCC_5V|VCC|
|VCC_5V |VM|

:::tip
Você pode conectar o pino VM ao VCC_5V ou simplesmente não usá-lo, desde que você escolha o VCC na chave.
:::

- **Passo 2.** Conecte o motor de passo na Placa Controladora do Motor de Passo com Engrenagem.

- **Passo 3.** Conecte o Seeeduino ao PC via cabo USB.

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/connect.jpg)

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Clique no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

```cpp
int pwm1=9;
int pwm2=10;
int ctr_a =9;
int ctr_b =8;
int ctr_c =11;
int ctr_d =10;
int sd =6;
int i=0;
int t=1500;

void setup()
{
    pinMode(ctr_a,OUTPUT);
    pinMode(ctr_b,OUTPUT);
    pinMode(ctr_c,OUTPUT);
    pinMode(ctr_d,OUTPUT); 
    delay(1);     
}


void loop ()
{
   for(i=1500;i>=1;i--)
   {
       digitalWrite(ctr_a,LOW);//A
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,LOW);//AB
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);//B
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);
       digitalWrite(ctr_c,LOW);//BC
        digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//C
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//CD
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
        digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//D
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//DA
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);

   }
}
```

- **Passo 2.** Envie o demo. Se você não souber como enviar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
     Se tudo correr bem, você poderá ver o motor funcionando:
:::

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/_DAS7726.MOV_20181115_134717.gif)

### Raspberry Pi + Python

#### Materiais necessários

| Pi Pico | Pacote de Driver de Motor de Passo com Engrenagem | Jumpers fêmea-fêmea|
|--------------|-------------|-----------------|
|![A Raspberry Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![Gear Stepper Motor Driver Pack](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![Female-Female jumpers](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html" target="_blank">Adquira agora</a>|

#### Contexto

O motor de passo possui 4 eletroímãs separados em seu interior, que você deve energizar um por um em sequência para girar um entalhe na engrenagem. A engrenagem tem 64 entalhes, portanto você precisa fazer isso 64 vezes para uma rotação completa do eixo.

Você pode fazer isso manualmente energizando os pinos um por um, ou usando uma biblioteca como a [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib).

#### Método

1. Se você ainda não fez isso, [siga este guia](https://projects.raspberrypi.org/en/pathways/pico-intro) para configurar seu Raspberry Pi Pico executando Python por meio do Thonny + picozero no seu computador.

1. Conecte a Placa Controladora do Motor de Passo com Engrenagem ao seu Pi Pico usando jumpers.

    |Pi Pico|Placa Controladora do Motor de Passo com Engrenagem
    |---|---|
    |VBUS|VCC|
    |GND|GND|
    |GP2|IN1|
    |GP3|IN2|
    |GP4|IN3|
    |GP5|IN4|

1. Observe com atenção a sua Placa Controladora do Motor de Passo com Engrenagem e você verá uma minúscula chave que diz VCC em uma extremidade e VM na outra. Isso permite escolher se você alimenta o motor a partir do mesmo pino do driver (VCC) ou de uma fonte de tensão separada (VM). Por enquanto, usaremos apenas VCC. Certifique-se de que a chave esteja em VCC.

1. Conecte o seu Pi Pico ao computador via USB (ou conecte-se a ele sem fio) e abra o Thonny.

1. Envie o seguinte código para o Thonny e execute-o.

```python
from gpiozero import Button, LED
from time import sleep

wait = 0.001 # seconds

ctrA = LED(2) # IN1
ctrB = LED(3) # IN2
ctrC = LED(4) # IN3
ctrD = LED(5) # IN4

while True:
  # A
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # AB
  ctrA.on()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # B
  ctrA.off()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # BC
  ctrA.off()
  ctrB.on()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # C
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # CD
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.on()
  sleep(wait)

  # D
  ctrA.off()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)

  # DA
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)
```

:::tip
_O que está acontecendo aqui?_
O motor de passo tem 4 eletroímãs separados dentro dele. Você os está alimentando um por um em um loop, o que gira a engrenagem um dente. Faça isso 64 vezes bem rápido e o eixo gira uma volta completa!
:::

#### Usando uma biblioteca

Você também pode usar bibliotecas como a [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib) para eliminar a parte difícil:

1. Thonny -> Tools -> Manage packages -> procure por `RpiMotorLib` -> instale

1. Siga os mesmos passos de fiação da seção anterior

1. Substitua o seu código por este:

```
from RpiMotorLib import RpiMotorLib

GpioPins = [2, 3, 4, 5]
mymotortest = RpiMotorLib.BYJMotor("MyMotorName", "28BYJ")
mymotortest.motor_run(GpioPins, 0.001, 512, False, False, "half", 0.05)
```

:::tip
A parte "28BYJ" acima se refere ao modelo de motor de passo que você está usando. Você pode encontrar explicações para os outros argumentos [na documentação da RpiMotorLib.](https://github.com/gavinlyonsrepo/RpiMotorLib/blob/master/Documentation/28BYJ.md) (isso usa uma placa controladora diferente, mas a maior parte das coisas é igual).
:::

## Recursos

- **[Zip]** [Arquivos Eagle da Placa Controladora do Motor de Passo com Engrenagem](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/Stepper%20Motor%20Driver.rar)

- **[PDF]** [Datasheet do Motor CX28BYJ48](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/CX28BYJ48.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
