---
title: Grove - I2C Motor Driver V1.2
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver_V1.2/
slug: /Grove-I2C_Motor_Driver_V1.2
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver_V1.2/
---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-2.jpg)

O driver de motor I2C Grove é uma nova adição à série Grove com a mesma interface fácil de usar. Seu coração é um CI driver em ponte H de canal duplo (L298N) que pode lidar com corrente de até 2A por canal, controlado por um Atmel ATmega8L que gerencia a comunicação I2C com, por exemplo, um Arduino. Ambos os motores podem ser acionados simultaneamente, ajustados para velocidades e direções diferentes. Ele pode alimentar dois motores DC com escovas ou um motor de passo bifásico de 4 fios. Requer uma fonte de alimentação de 6V a 15V para alimentar o motor e possui um regulador de tensão de 5V onboard que pode alimentar o barramento I2C e o Arduino (selecionável por jumper). Todas as linhas do driver são protegidas por diodos contra EMF de retorno.

A interface de software fácil não é o único recurso simples de usar, pois o driver de motor I2C Grove foi projetado para colocar você em funcionamento em pouco tempo. Ele apresenta um LED de alimentação e quatro LEDs para indicar se e em qual direção cada motor está girando. Terminais de parafuso facilitam as conexões de motor e alimentação, e o conector do sistema Grove e a interface I2C permitem encadear o driver em série com muitos outros dispositivos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html)

## Rastreador de Versões

---
<table width="494">
<tr>
<th>Revisão</th>
<th>Descrições</th>
<th>Lançamento</th>
</tr>
<tr>
<td>v1.0</td>
<td>Lançamento público inicial</td>
<td>17 de maio de 2012</td>
</tr>
<tr>
<td>v1.2</td>
<td>Endereço I2C definido por hardware</td>
<td>2 de julho de 2012</td>
</tr>
</table>

## Características

---

* Compatível com Grove

* Interface I2C

* Velocidade e direção do motor podem ser controladas

* Número de canais: 2

* Endereço slave alterável por hardware

## Especificações

---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Item</th>
<th scope="col">Mín</th>
<th scope="col">Típico</th>
<th scope="col">Máx</th>
<th scope="col">Unidade</th>
</tr>
<tr>
<th scope="row">Tensão de funcionamento</th>
<td>6</td>
<td>-</td>
<td>15</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">Corrente máxima de saída por canal</th>
<td colspan="3">0,5</td>
<td>A</td>
</tr>
<tr>
<th scope="row">Corrente total máxima</th>
<td colspan="3">1,0</td>
<td>A</td>
</tr>
<tr>
<th scope="row">Tensão de entrada/saída no barramento I2C</th>
<td colspan="3">5</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Protocolo de comunicação</th>
<td colspan="3">I2C</td>
<td>/</td>
</tr>
</table>

## Função da Interface

---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-1.jpg)

**CI 78M05:** regulador de tensão de 5V

**CI L298:** driver de ponte completa dupla

**CI Atmega8:** controla a rotação do motor.

**NOTA:** A tensão de entrada nos terminais de parafuso é regulada para 5V e conectada ao +5V do I2C por meio de um jumper (J4). Remova o jumper se forem usados ao mesmo tempo alimentação externa pelos terminais de parafuso e alimentação pelo conector I2C. Use o jumper se os 5V devem ser fornecidos ao barramento I2C.

## Ideias de Aplicação

---
Este driver de motor pode ser usado para acionar qualquer motor eletrônico com escovas, desde que ele não consuma mais de 2A a 5V. Dois motores podem ser acionados simultaneamente, ajustados para velocidades e direções diferentes. A velocidade pode ser definida de forma totalmente proporcional e é controlada pelo ATmega8 na placa usando PWM. Ela é definida por comandos I2C enviados a partir de um Arduino ou Seeeduino.
É perfeito para aplicações como robôs, carrinhos de controle remoto caseiros, ventoinhas de gabinete, iluminação com LED de alta potência ou qualquer outro projeto que envolva controle proporcional de carga.

## Cuidados

---

* A placa ficará muito quente quando estiver operando acima de 1 Ampere. Mantenha suas mãos afastadas!

* Arduino IDE (versão 1.0 ou superior) é suportado.

## Uso

---
O I2C Motor Driver pode controlar motor baseado no chip L298. O L298 não é apenas um driver de motor duplo, ele é uma ponte H dupla. Uma ponte H é basicamente uma configuração específica de transistores que permite inverter a direção da corrente. Assim, conectado a um motor, isso significa que você pode fazê-lo girar em ambas as direções e, com entrada PWM, pode usar seu Arduino para fazê-los girar em qualquer velocidade. Como o L298 tem 2 pontes H, você pode não apenas fazer um robô ir para frente e para trás, mas também girar em torno de si mesmo fazendo cada roda girar em uma direção diferente.

Agora, vamos usar o I2C Motor Driver para controlar dois motores DC ou um motor de passo girando no sentido horário ou anti-horário.

### Definir o endereço do I2C Motor Driver

* Defina o endereço pelo chaveador rotativo como uma nova função adicionada ao novo I2C Motor Driver.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-9.jpg)

* Em seguida, mantenha o endereço configurado no programa igual ao endereço configurado no driver de motor I2C. O endereço padrão configurado no programa é 0x0f.

```
#define I2CMotorDriverAdd         0x0f   // Set the address of the I2CMotorDriver
```

###

Como acionar 2 motores DC

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-4.jpg)

<div>
  <span style={{color: 'red'}}>**Nota:**</span>
  <dl>
    <dd>A primeira coisa a notar, porém, é que você precisa de uma fonte de alimentação externa para seus motores DC; o pino de 5V no Arduino não pode fornecer energia suficiente para acionar 2 motores, e você pode danificar seu Arduino se o fizer.</dd>
  </dl>
</div>

E então programe seu Arduino como abaixo:

```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,20);
        delay(10); //this delay needed
        MotorDirectionSet(0b1010);  //0b1010  Rotating in the positive direction
        delay(1000);
        MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
        delay(500);
    }
}
```

Neste programa, o Arduino primeiro define a velocidade dos 2 motores DC com o comando _MotorSpeedSetAB()_ e então define as direções de funcionamento dos motores DC com o comando _MotorDirectionSet()_. Consulte Grove-I2C_Motor_Driver_V1.2#Function_Reference para detalhes; você pode baixar todo o código de demonstração em Grove-I2C_Motor_Driver_V1.2#Resources.

### Como acionar um motor de passo de 4 fios

O I2C Motor Driver também pode ser usado para acionar um motor de passo de 4 fios. Conecte seu motor de passo aos pinos de saída do driver de motor I2C e então conecte o driver de motor ao seu Arduino/Seeeduino com o barramento I2C. Programe seu Arduino como segue:

```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,100);//when driving a stepper, the speed should be set to 100;
        delay(10);
        MotorDirectionSet(0b0001);
        delay(4);
        MotorDirectionSet(0b0011);
        delay(4);
        MotorDirectionSet(0b0010);
        delay(4);
        MotorDirectionSet(0b0110);
        delay(4);
        MotorDirectionSet(0b0100);
        delay(4);
        MotorDirectionSet(0b1100);
        delay(4);
        MotorDirectionSet(0b1000);
        delay(4);
        MotorDirectionSet(0b1001);
        delay(4);
    }
}
```

Este motor de passo de 4 fios conectado irá girar; você pode ajustar a velocidade de rotação ou o número de passos no seu programa Arduino. Você também pode usar outras bibliotecas de motor de passo para controlá-lo; você pode baixar todo o código de demonstração em Resource.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/2.gif)

## Referência de Funções

---
**1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB)**

_Descrição: define a velocidade do motor 1 e do motor 2_

_MotorSpeedA: velocidade do motor DC A, deve ser 0~100;_

_MotorSpeedB: velocidade do motor DC B, deve ser 0~100;_

Uso:

```
Serial.println("sent DC speed 100");
MotorSpeedSetAB(100,100);//defines the speed of motor 1 and motor 2;
delay(10); //this delay needed
```

**2. void MotorPWMFrequenceSet(unsigned char Frequence)**

_Descrição: define a frequência de prescale do PWM, 0x03 por padrão._

_Frequence: a frequência de prescale do PWM._

**3. void MotorDirectionSet(unsigned char Direction)**

_Descrição: ajusta a direção dos motores._

_Direction: pode ser rotação para frente/reversa._

Uso:

```
MotorDirectionSet(0b1010);  //"0b1010" defines the output polarity, "10" means the M+ is "positive" while the M- is "negative"
                            // make sure M+ and M- is different polarity when driving DC motors.
delay(1000);
MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
delay(500);
```

**4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)**

_Descrição: ajusta conjuntamente a direção e a velocidade dos motores._

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - I2C Motor Driver Eagle File](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip)

* [I2C Motor DriverV1.2 Demo Code](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/I2CMotorDriver12Demo.zip)

* [L298 Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/L298datasheet.pdf)

* [78M05 Datssheet](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/ST_78M05DataSheet.pdf)

* [File:Burn Firmware for Atmega8 using ISP](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Burn_firmware_for_Atmega8_using_ISP.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
