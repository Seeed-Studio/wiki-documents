---
title: Grove - Mini I2C Motor Driver v1.0
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Mini_I2C_Motor_Driver_v1.0/
slug: /Grove-Mini_I2C_Motor_Driver_v1.0
sku: 105020010
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mini_I2C_Motor_Driver_v1.0/
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_2.png)

Este Grove - Mini I2C motor driver inclui dois DRV8830. O DRV8830 fornece uma solução integrada de driver de motor para brinquedos alimentados por bateria, impressoras e outras aplicações de controle de movimento de baixa tensão ou alimentadas por bateria. O módulo possui dois drivers em ponte H e pode acionar dois motores DC ou dois enrolamentos de motores de passo, bem como outras cargas como solenoides. Ele requer um regulador de tensão de 5V onboard que pode alimentar o barramento I2C. Todas as linhas do driver são protegidas por diodos contra EMF reversa. Ele possui dois LEDs como indicadores de falha e quatro LEDs para indicar em que direção cada motor está girando. O conector do sistema GROVE e a interface I2C permitem que você faça daisy‑chain do driver com muitos outros dispositivos.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)

Recursos
--------

- Sem fonte de alimentação externa
- Dois LEDs para indicar falha
- Corrente máxima de acionamento padrão 200 mA
- Compatível com Grove
- Interface I2C
- Velocidade e direção do motor podem ser controladas
- Número de canais: 2
- Fácil de usar

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Ideias de Aplicação
-----------------

Este driver de motor pode ser usado para acionar qualquer motor elétrico com escovas desde que ele não consuma mais de 1A a 5V.
Dois motores podem ser acionados simultaneamente configurados com velocidades e direções diferentes.
A velocidade pode ser configurada totalmente proporcional e é controlada por comando I2C.

- Alimentado por bateria:
  - Impressoras
  - Brinquedos
  - Robótica
  - Câmeras
  - Telefones

- Pequenos atuadores, bombas, etc.

Aqui estão alguns projetos para sua referência.

| **Faça um Mini Carrinho de Brinquedo**                                              | **Faça um Troféu Estilo Steampunk**                                       |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_toy_car.jpg)   | ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Seeed_award2015.jpg)  |

Especificações
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de trabalho
</th>
<td>
2.75
</td>
<td>
5
</td>
<td>
6.8
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente máxima de saída por canal
</th>
<td>
0.2(default)
</td>
<td>
-
</td>
<td>
1
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Tensão de entrada/saída no barramento I2C
</th>
<td colspan="3">
3.3/5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Protocolo de comunicação
</th>
<td colspan="3">
I2C
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Endereço I2C padrão
</th>
<td colspan="3">
0xC0, 0xC4
</td>
<td>
/
</td>
</tr>
</table>

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver.jpg)

- **Interface Grove** - Os produtos Grove têm um ecossistema e todos possuem o mesmo conector que pode ser encaixado no **Base Shield**. Conecte este módulo à porta I<sup>2</sup>C do Base Shield e então ele poderá funcionar bem com o Arduino. Porém, você também pode conectar o Grove - Mini I2C Motor Driver ao Arduino sem o Base Shield usando jumpers.

<table>
<tr>
<th width="150">
Arduino UNO
</th>
<th width="150">
Base Shield
</th>
<th width="150">
Grove - Mini I2C Motor Driver
</th>
</tr>
<tr align="center">
<td>
5V
</td>
<td rowspan="4">
Porta I2C
</td>
<td>
VCC
</td>
</tr>
<tr align="center">
<td>
GND
</td>
<td>
GND
</td>
</tr>
<tr align="center">
<td>
SDA
</td>
<td>
SDA
</td>
</tr>
<tr align="center">
<td>
SCL
</td>
<td>
SCL
</td>
</tr>
</table>

- **Indicador de falha do CH1** - Indicador de falha do canal 1.
- **Indicador de falha do CH2** - Indicador de falha do canal 2.
- **Indicador de direção** - Indicador de direção do motor.
- **Conector de saída do CH1** - Conector do motor 1.
- **Conector de saída do CH2** - Conector do motor 2.

Função de hardware
-----------------

### Alterar a corrente máxima de acionamento padrão

A corrente máxima de acionamento padrão de cada canal é 200mA, veja a imagem frontal da placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/QQ20150817-3.png" alt="pir" width={600} height="auto" /></p>

Cada canal (CH1, CH2) recebeu um resistor, e o valor de cada resistor (R5, R12) é 1 Ω, portanto a corrente máxima de acionamento é 200mA de acordo com a equação a seguir

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_7.png" alt="pir" width={600} height="auto" /></p>

</center>

Ao mesmo tempo, cada canal fornece uma ilha de solda reservada (R6 para CH1, R13 para CH2), então você pode soldar um resistor na placa para alterar o valor do resistor de cada canal. A seguir está a nova equação se adicionar um resistor à placa

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_8.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_9.png" alt="pir" width={600} height="auto" /></p>
</center>

:::caution
A corrente máxima de trabalho de cada canal deve ser menor que 1A. Portanto, o valor mínimo do resistor soldado na ilha reservada não deve ser inferior a 0,2 Ω.
:::

### Alterar o endereço I<sup>2</sup>C padrão

O endereço I<sup>2</sup>C de cada canal é modificável. Dê uma olhada na parte de trás da placa, você encontrará 4 ilhas de jumper; A0_CH1 e A1_CH1 são para o canal 1, A0_CH2 e A1_CH2 são para o canal 2, como mostrado abaixo:

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Address_mini_i2c_motor_driver.png" alt="pir" width={600} height="auto" /></p>
</center>

Você pode soldar ou dessoldar cada jumper para alterar o endereço I2C:

- 1 - Você precisa de um ferro de solda, apenas solde os dois lados do jumper juntos
- 0 - Você precisa de um ferro de solda, apenas dessolde os dois lados do jumper.

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_12.png" alt="pir" width={600} height="auto" /></p>
</center>

:::note
A biblioteca do Grove - Mini I2C Motor Driver é dependente do endereço padrão.
:::
Primeiros Passos
---------------

Agora, vamos começar a usar o Grove - Mini I2C Motor Driver.

### Preparativos

Agora estamos fazendo uma demonstração para o Grove - Mini I2C Motor Driver v1.0 que requer os seguintes módulos.

- 2 * Motor DC 2V-6V
- Seeeduino Lite

**O Seeeduino Lite é compatível com Arduino.**

Se você estiver usando um Arduino UNO ou qualquer outra placa compatível com Arduino que não tenha um conector Grove,

você precisará de um Grove Base Shield para conectar facilmente os módulos Grove.

Se esta é sua primeira vez usando Arduino ou Seeeduino, coloque a mão em Getting_Started_with_Seeeduino para iniciar sua jornada com Arduino.

### Instalação de Hardware

O Grove - Mini I2C Motor Driver possui um soquete Grove para conectar os dois módulos acima.
Eles são:

- 2 * Motor DC 2V-6V - conecte aos conectores de saída CH1 e CH2.
- Seeeduino Lite

Conecte a Interface I2C Grove do Seeeduino à Interface Grove do Mini Motor Driver como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver_demo.jpg)

### Trabalho de Software

[![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Arduino_mini_i2c_motor_driver.jpg)](https://www.arduino.cc/)

O Grove - Mini I2C Motor Driver pode controlar motor que é baseado no chip DRV8830. O DRV8830 não é apenas um driver de motor duplo, é uma ponte H dupla. Uma ponte H é basicamente uma configuração específica de transistores que permite que você comute a direção da corrente. Você pode usar seu Arduino para fazê-los girar em qualquer velocidade.

Como o módulo possui 2 pontes H, você não só pode fazer um robô ir para frente e para trás, mas também girar, fazendo cada roda girar em uma direção diferente.

Conecte o Seeeduino ao computador usando um cabo micro USB.

Agora, vamos usar o Grove - Mini I2C Motor Driver para controlar dois motores DC girando no sentido horário ou anti-horário.

A seguir está um programa de exemplo para ser usado com um Arduino. O código é bem básico, mas você também pode modificá-lo e fazer do seu próprio jeito.

```
/****************************************************************
Example code demonstrating the use of the Arduino Library for
the SparkFun MiniMoto board, which uses the TI DRV8830 IC for I2C
low-voltage DC motor control.

This code is beerware; if you use it, please buy me (or any other
SparkFun employee) a cold beverage next time you run into one of
us at the local.

17 Sep 2013- Mike Hord, SparkFun Electronics

Code developed in Arduino 1.0.5, on a Fio classic board.

**Updated for Arduino 1.6.4 5/2015**
****************************************************************/

#include <SparkFunMiniMoto.h>  // Include the MiniMoto library

// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)

#define FAULTn  16     // Pin used for fault detection.

// Nothing terribly special in the setup() function- prep the
//  serial port, print a little greeting, and set up our fault
//  pin as an input.
void setup()
{
    Serial.begin(9600);
    Serial.println("Hello, world!");
    pinMode(FAULTn, INPUT);
}

// The loop() function just spins the motors one way, then the
//  other, while constantly monitoring for any fault conditions
//  to occur. If a fault does occur, it will be reported over
//  the serial port, and then operation continues.
void loop()
{
    Serial.println("Forward!");
    motor0.drive(100);
    motor1.drive(100);
    delayUntil(1000);
    Serial.println("Stop!");
    motor0.stop();
    motor1.stop();
    delay(1000);
    Serial.println("Reverse!");
    motor0.drive(-100);
    motor1.drive(-100);
    delayUntil(1000);
    Serial.println("Brake!");
    motor0.brake();
    motor1.brake();
    delay(1000);
}

// delayUntil() is a little function to run the motor either for
//  a designated time OR until a fault occurs. Note that this is
//  a very simple demonstration; ideally, an interrupt would be
//  used to service faults rather than blocking the application
//  during motion and polling for faults.
void delayUntil(unsigned long elapsedTime)
{
    // See the "BlinkWithoutDelay" example for more details on how
    //  and why this loop works the way it does.
    unsigned long startTime = millis();
    while (startTime + elapsedTime > millis())
    {
        // If FAULTn goes low, a fault condition *may* exist. To be
        //  sure, we'll need to check the FAULT bit.
        if (digitalRead(FAULTn) == LOW)
        {
            // We're going to check both motors; the logic is the same
            //  for each...
            byte result = motor0.getFault();
            // If result masked by FAULT is non-zero, we've got a fault
            //  condition, and we should report it.
            if (result & FAULT)
            {
                Serial.print("Motor 0 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break; // We want to break out of the motion immediately,
                //  so we can stop motion in response to our fault.
            }
            result = motor1.getFault();
            if (result & FAULT)
            {
                Serial.print("Motor 1 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break;
            }
        }
    }
}
```

Agora clique em Upload (CTRL+U) para gravar o código de teste. Consulte Getting_Started_with_Seeeduino para qualquer mensagem de erro e você também pode adicionar comentários na comunidade.

### Verificar Resultados

Após a conclusão do upload, os motores irão girar no sentido horário ou anti-horário em ciclo.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [DRV8830 Datasheet](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/DRV8830.pdf)
- [Grove - Mini I2C Motor Driver_Eagle_File](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip)
- [Grove - Mini I2C Motor Driver Schematic Document](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH.pdf)
- [Grove - Mini I2C Motor Driver Source Library](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mini_I2C_Motor_Driver_v1.0 -->

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
