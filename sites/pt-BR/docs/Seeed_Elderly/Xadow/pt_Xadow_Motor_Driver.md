---
description: Xadow - Driver de Motor
title: Xadow - Driver de Motor
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Motor_Driver
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Motor_Driver/
---

![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/x%20motor.jpg)

O Xadow Motor pode ser usado para controlar motores DC. Seu coração é um chip driver de motor bidirecional de dois canais e baixa saturação LB1836M, controlado por um ATmega168 que lida com a comunicação I2C com a Xadow Main Board. O Xadow Motor possui um endereço I2C alterável. E ele precisa de uma alimentação separada de baixa potência para acionar os motores.

## Especificação
---
- Driver de Motor: LB1836M
- Tensão da Bateria: 2.5V ~ 9V
- Corrente de Saída por canal (Máx): 300mA
- Modo de Comunicação: I2C
- Endereço I2C é alterável
- Dimensões: 25.43mm x 20.35mm


## Visão do Produto
---
![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/Xadow_Motor_Black_View.png)

- ①: CI LB1836, um driver de motor bidirecional de dois canais e baixa saturação.
- ②： Conexão da Fonte de Alimentação dos Motores.
- ③,④: Conexão dos Motores DC.
- ⑤,⑥: usados para definir o endereço IIC. A0 e A1 são enviados conectados a H. Você pode alterá-los para "L" com uma pequena modificação na placa. Encontre detalhes na Referência.
- ⑦: Interface SPI, usada para fazer upload de firmware para o Atmega168.
- ⑧: Microcontrolador Atmega168.
- ⑨: usado para selecionar a fonte de alimentação para o CI Atmega168. No modo padrão, DVCC é conectado a VOUT, o que significa que a alimentação vem da fonte de alimentação do Motor. Quando DVCC é conectado a 3.3V, a Xadow Main Board fornece energia para o Atmega168.

## Demonstração
---
O Xadow Motor pode acionar dois motores DC simultaneamente. Com base em nossa biblioteca disponível, é mais fácil fazer os motores funcionarem. Agora vamos começar.

:::note
    A biblioteca não está disponível para controlar motor de passo.
:::
**Instalação de Hardware: **

1.Conecte os motores DC à interface J5, J6. Você pode usar o ferro de solda para soldar e garantir que as conexões fiquem firmes. Nós configuramos uma bateria de lítio de 3.7V para você. Portanto, você não pode acionar motores de alta potência usando essa bateria.

2.Conecte a bateria à Interface da Bateria do Xadow Motor. Sem bateria, os motores não irão girar.

3.Conecte o Xadow Motor à Xadow Main Board. Não se esqueça de instalar o Xadow Driver.

:::note
    Ao conectar o Xadow 3-Axis Accelerometer à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo xadow precisa se conectar ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo xadow).
:::
Fazer Upload do Código:

4.Faça o download da [Xadow Motor Library](https://github.com/Seeed-Studio/Xadow_Motor_Driver) e instale-a na Biblioteca do Arduino.

5. Abra o código diretamente pelo caminho:File -> Example ->xadow_motor->motorCtrl.

```
/*
there are four motor state you can use:

-MSTOP                -> stop
-MFOR                        -> go forward
-MREV                        -> go reverse
-MHOLD                -> hold the recent state
**NOTE:
there are four addresses you can choose, it's up to the hardware,
for more information, refer to www.seeedstudio.com
-MOTORADDRESS0 0x40 // A0 LOW, A1 LOW
-MOTORADDRESS1 0x41 // A0 HIGH, A1 LOW
-MOTORADDRESS2 0x42 // A0 LOW, A1 HIGH
-MOTORADDRESS3 0x43 // A0 HIGH, A1 HIGH
use this function: setMotorRun(unsigned char sMotorA, unsigned char sMotorB);
you can contrl the both motor.
*/

#include <Wire.h>

#include "XadowMotor.h"

void setup()
{
    Serial.begin(38400);
    xadowMotor.begin(MOTORADDRESS3);
}

void loop()
{

    Serial.print("bat vol :");
    Serial.println(xadowMotor.getBatVol());

    xadowMotor.setMotorRun(MFOR, MFOR);

    delay(2000);

    xadowMotor.setMotorRun(MSTOP, MSTOP);

    delay(500);

    xadowMotor.setMotorRun(MREV, MREV);

    delay(2000);

    xadowMotor.setPwrDown();
    delay(1000);
    xadowMotor.setWakeUp();

}
```

Neste código, a função xadowMotor.begin(MOTORADDRESS3) é utilizada para definir o endereço I2C do Xadow Motor. Você precisa alterar o parâmetro "MOTORADDRESS3" quando mudar a conexão do pino A0 e do pino A1. Encontre detalhes na Referência.

6. Faça upload do Código. Lembre-se de selecionar Seeeduino Xadow no menu Tools | Board do ambiente Arduino, e selecione a porta serial correta que a Xadow Main Board está usando.

Agora você pode ver que seus motores irão girar para frente ou para trás em intervalos regulares. Ao abrir o monitor serial, você pode observar a tensão da sua bateria.

## Referência
---
O Xadow Motor possui quatro endereços I2C que são determinados pelo pino A0 e pelo pino A1. A0 e A1 são conectados a H dentro da placa por padrão. Mas você pode alterá-los. Por exemplo, use um ferro de solda para quebrar a conexão entre H e A0, depois solde ADR0 e L, assim você faz o valor de A0 ser L. Você pode encontrar a relação entre o endereço I2C de hardware e os valores de A0 e A1 na tabela a seguir.

|Endereço I2C	|Estado de entrada A0| Estado de entrada A1|	parâmetro correspondente no código|
|---|:---:|:---:|---|
|0x40	|L|	L|	MOTORADDRESS0|
|0x41|	L|	H|	MOTORADDRESS1|
|0x42	|H|	L|	MOTORADDRESS2|
|0x43	|H	|H|	MOTORADDRESS3|


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Xadow Motor](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip)
- [Esquemático do Xadow Motor em PDF](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Schematic_in_PDF.pdf)
- [Biblioteca do Xadow Motor](https://github.com/Seeed-Studio/Xadow_Motor_Driver)
- [Datasheet do LB1836](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/LB1836M.PDF)

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
