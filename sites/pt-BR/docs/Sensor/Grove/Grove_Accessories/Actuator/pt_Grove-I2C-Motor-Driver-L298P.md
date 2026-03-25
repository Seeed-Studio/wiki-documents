---
title: Grove - I2C Motor Driver (L298P)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-I2C-Motor-Driver-L298P/
slug: /Grove-I2C-Motor-Driver-L298P
sku: 105020093
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C-Motor-Driver-L298P/
---

![](https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png)

Grove - I2C Motor Driver(L298P) é um driver de motor de uso comum para motor de passo e motor servo. Ele incorpora um chip STM32 para gravar o código para controlar o
driver de motor. Este é um driver de motor de 2 canais, cada canal pode suportar até 1A de corrente. Você também pode usar a interface I2C para transmitir dados a partir do microcontrolador periférico. O endereço I2C padrão é 0x0f e você pode alterar o endereço do driver de motor conectando o chapéu de fio I2C. O endereço I2C é selecionável de 0x00 a 0x0f.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
  </a>
</div>

## Características

- MCU: microcontrolador STM32f030f4P6 para gravar o código e controlar o Driver de Motor.
- Chip driver de motor L298P: de uso comum para um driver de motor e pode acionar motor de passo e motor servo.
- Endereço I2C selecionável: altere a conexão do chapéu de fio para obter o endereço I2C de 0x00 a 0x0f, o endereço I2C padrão é 0x0f.
- Saída de 2 canais: capaz de suportar 1A de corrente em cada canal, máximo de 2A de corrente; Necessita de entrada de tensão CC de 6V-12V.
- LED de usuário: LED verde aceso para a direção no sentido horário e LED vermelho aceso para a direção anti-horária para cada canal.

## Especificação

|Item|Valor|
|---|---|
|MCU|STM32f030f4P6|
|Fonte de Alimentação|6-12V CC|
|Interface|Grove I2C|
|Endereço I2C|Padrão 0x0f, pode ser alterado conectando o chapéu de fio|
|Canal|2|
|Corrente de saída|MÁX 2A, 1A para cada canal|
|Tensão de saída|5V|

## Plataforma Suportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Usar a plataforma Arduino

#### Materiais Necessários

| Seeeduino V4.2 | Base Shield|  Grove - I2C Motor Driver (L298P)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html)|

#### Conexão de hardware

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg" style={{width:'auto', height:400}}/>
</div>

- **Etapa 1** Conecte o Grove - I2C Motor Driver (L298P) à porta I2C do Grove-Base Shield.

- **Etapa 2** Conecte o Grove - Base Shield ao Seeeduino.

- **Etapa 3** Conecte o Seeeduino ao PC via um cabo USB.

#### Código de Software 1 - Motor CC

```cpp
#include "Grove_I2C_Motor_Driver.h"

#define I2C_ADDRESS 0x0f /* default I2C address is 0x0f */

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // Set speed of MOTOR1, Clockwise, speed: -100~100
    Motor.speed(MOTOR1, 50);
    // Set speed of MOTOR2, Anticlockwise
    Motor.speed(MOTOR2, -70);
    delay(2000);
    // Change speed and direction of MOTOR1
    Motor.speed(MOTOR1, -100);
    // Change speed and direction of MOTOR2
    Motor.speed(MOTOR2, 100);
    delay(2000);
    // Stop MOTOR1 and MOTOR2
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    delay(2000);
}
```

- **Etapa 1** Baixe a [Biblioteca Grove_I2C_Motor_Driver_v1_3](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip) do Github.

- **Etapa 2** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Etapa 3** Copie o código para a IDE Arduino e faça o upload. Se você não sabe como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

Com a função speed(), você é capaz de acionar um motor na velocidade desejada.

- **motor_id** representa qual motor usar. Você pode preencher MOTOR1 ou MOTOR2.

- **_speed** representa a velocidade que você define para o motor. Você pode preencher -100~100 aqui. Quando _speed&gt;0, o motor CC gira no sentido horário, enquanto _speed&lt;0, o motor CC gira no sentido anti-horário. E quanto maior o valor absoluto de _speed, mais rápida será a velocidade do motor CC.

Com a função stop(), você é capaz de parar um motor CC em funcionamento.

- **motor_id** representa qual motor usar. Você pode preencher MOTOR1 ou MOTOR2.

#### Código de Software 2 - Motor de Passo

```cpp
#include <Grove_I2C_Motor_Driver.h>

#define I2C_ADDRESS 0x0f // default I2C address is 0x0f

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
    // Drive a stepper motor
    // \_step: -1024~1024, when \_step>0, stepper motor runs clockwise; \_step<0, stepper
// motor runs anticlockwise; when \_step is 512, the stepper motor will run a complete
    // turn; if step is 1024, the stepper motor will run 2 turns.
    Motor.StepperRun(-1024);
    Motor.StepperRun(512);
}

void loop() {
    // your code here
}
```

Tomando o [Motor de Passo 24BYJ48](https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html) como exemplo, a instalação de hardware é mostrada abaixo:

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg" style={{width:600, height:'auto'}}/>
</div>

A conexão entre o **Motor de Passo 24BYJ48** e o I2C Motor Driver é como mostrado abaixo:

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg" style={{width:'auto', height:'auto'}}/>
</div>


- **_step** representa os passos que você define para o motor de passo executar. Você pode preencher -1024~1024. Quando _step&gt;0, o motor de passo gira no sentido horário, enquanto _step&lt;0, o motor de passo gira no sentido anti-horário. Quando _step é 512/-512, o motor de passo executará uma volta completa e se _step for 1024/-1024, o motor de passo executará 2 voltas. O motor de passo irá parar automaticamente depois que terminar seus passos.

:::note

Se você encontrar uma situação em que a frequência PWM não pode ser alterada e permanece fixa em 24Hz, é necessário atualizar o firmware usando um Jlink ou ST-link. Você pode encontrar o novo firmware aqui:

[https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin](https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin)

Para alterar a frequência PWM, use `Motor.frequence(50)` onde o valor é a frequência, até um máximo de 255Hz.

:::

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Datasheet STM32f030f4P6](https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [Datasheet L298P](https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf)

- **[Zip]** [Biblioteca do Driver de Motor](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
