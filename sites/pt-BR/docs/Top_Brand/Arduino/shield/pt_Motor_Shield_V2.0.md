---
description: Motor_Shield_V2.0
title: Motor Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Motor_Shield_V2.0
sku: 105030001
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Motor_Shield_V2.0/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Este documento funciona para Motor Shield V2.0/2.1/2.2.
:::

O Motor Shield é um módulo driver para motores que permite usar o Arduino para controlar a velocidade de operação e a direção do motor. Baseado no chip Dual Full-Bridge Drive L298, ele é capaz de controlar dois motores DC ou um motor de passo. O Motor Shield pode ser alimentado diretamente pelo Arduino ou por uma fonte de alimentação externa de 6V~15V através da entrada por terminal. Este módulo pode ser usado para o desenvolvimento de micro robôs e veículos inteligentes, etc.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Motor-Shield-V2-0.html?queryID=4a07292b83eeca2fc091c32620ff0c76&objectID=1498&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<table align="center">
 <caption> <h2>Versão</h2> </caption>
  <tbody>
  <tr>
    <td><h3>Revisão</h3></td>
    <td><h3>Descrições</h3></td>
    <td><h3>Lançamento</h3></td>
  </tr>
  <tr>
    <td><h4>v1.0</h4></td>
    <td><h4>Lançamento público inicial</h4></td>
    <td><h4>N/A</h4></td>
  </tr>
  <tr>
    <td><h4>v2.0</h4></td>
    <td><h4>Habilita o pino +5V do Arduino/Seeeduino para alimentar o motor </h4></td>
    <td><h4>2013-2</h4></td>
  </tr>  
  </tbody></table>

## Recursos

-------------------

- Pinout padrão de Shield para Arduino UNO
- Baseado no CI de ponte completa L298
- Aciona 2 motores DC ou 1 motor de passo
- Entrada de alimentação externa disponível
- Indicadores LED
- Dissipador de calor para melhor desempenho
- Biblioteca para Arduino

## Especificações

-------------------

<table align="center">
  <tbody>
  <tr>
    <td><h3>Especificação</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>Tensão de operação</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>Alimentação externa</h4></td>
    <td><h4>6-15V</h4></td>
  </tr>  
  <tr>
    <td><h4>Corrente de saída</h4></td>
    <td><h4>2,0A máx @ cada canal</h4></td>
  </tr>
    <tr>
    <td><h4>Faixa de PWM</h4></td>
    <td><h4>0-100%</h4></td>
  </tr>
    <tr>
    <td><h4>Saída</h4></td>
    <td><h4>2 canais, 4 portas</h4></td>
  </tr>
  </tbody></table>

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/700px-MotorShieldHardware.png" alt="pir" width={600} height="auto" /></p>

**1**.Indicador do canal 1, inclui 3 LEDs

- EB - canal 1 habilitado, nível alto ativo
- IN3 - status de OUT3
- IN4 - status de OUT4

**2**.Detecção do canal 1 - Conecte os 2 pinos da esquerda juntos para uso normal.

**Observe** que é uma aplicação de alto nível para detecção de corrente, consulte o datasheet e o esquemático para mais informações.

**3**.SAÍDA - Há 2 canais, cada canal tem 2 saídas

- Canal 0 - OUT1, OUT2
- Canal 1 - OUT3, OUT4

**4**.Detecção do canal 0

**5**.Indicador do canal 0, inclui 3 LEDs

- EB - canal 0 habilitado, nível alto ativo
- IN1 - status de OUT1
- IN2 - status de OUT2

**6**.Entrada de alimentação externa, faixa 6-15V

**7**.Indicador de Reset - fica vermelho quando o botão Reset é pressionado

**8**.Botão de Reset - pressione para resetar o shield e o Arduino

**9**.Indicador de alimentação - fica verde quando há alimentação, interna ou externa

**A.** Interruptor de alimentação

- Connect - Recebe alimentação do Arduino
- Disconnect - Recebe alimentação de fontes externas

**B.** Pinout padrão de shield para Arduino

### Pinos digitais usados

<table align="center">
  <tbody>
  <tr>
    <td><h3>Pino do Arduino</h3></td>
    <td><h3>Função</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>OUT1</h4></td>
  </tr>  
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>Habilitação do Canal0</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>Habilitação do Canal1</h4></td>
  </tr>  
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  </tbody></table>

:::note
D8~D13 são usados pelo Motor Shield. Por favor, não use esses pinos para evitar conflitos.
:::

### Pinos analógicos usados

<table align="center">
  <tbody>
  <tr>
    <td><h3>Pino do Arduino</h3></td>
    <td><h3>Função</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  </tbody></table>

:::note
Não usado significa que você pode usar esses pinos livremente.
:::

## Primeiros passos

-------------------

### Controlar um motor DC

#### Conexão

Aqui mostraremos como este Motor Shield funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os itens abaixo:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>Motor DC</h3></td>
    <td><h3>Motor Shield</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/130%20DC%20Motor_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Defina **SEN_A** e **SEN_B**, conecte os 2 pinos da esquerda juntos com um jumper.
- Conecte **MB_EN** junto com um jumper, pois não vamos usar uma alimentação externa.
- Conecte o motor DC ao Canal 0 (OUT1 e OUT2).
- Conecte o Motor Shield ao Arduino.
- Conecte o Arduino ao PC via cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/DC%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- Clique no botão abaixo para baixar a biblioteca do motor shield.
- Siga os procedimentos de [como instalar uma biblioteca do arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para instalar a biblioteca.

<p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/400px-Motor_shield_v2_library.png" /></a></p>

- Envie o código para o Seeeduino V4.

```cpp
//  Demo function:The application method to drive the DC motor.
//  Author:Loovee (luweicong@seeed.cc)
//  2016-3-11

#include "MotorDriver.h"

MotorDriver motor;

void setup()
{
    // initialize
    motor.begin();
}

void loop()
{
    motor.speed(0, 100);            // set motor0 to speed 100
    delay(1000);
    motor.brake(0);                 // brake
    delay(1000);
    motor.speed(0, -100);           // set motor0 to speed -100
    delay(1000);
    motor.stop(0);                  // stop
    delay(1000);
}
// END FILE
```

- Então você verá seu motor girar (1s), parar (1s), girar para trás (1s), parar (1s) e repetir em loop.

Se nada acontecer, certifique-se de que:

- Enviamos o código com sucesso
- O motor está conectado corretamente
- Os indicadores LED piscam corretamente

### Controlar um motor de passo

#### Conexão

Aqui mostraremos como este Motor Shield funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os itens abaixo:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>Motor de passo</h3></td>
    <td><h3>Motor Shield</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/Motor%2024BYJ48_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Defina **SEN_A** e **SEN_B**, conecte os 2 pinos da esquerda juntos com um jumper.
- Conecte **MB_EN** junto com um jumper, pois não vamos usar uma alimentação externa.
- Encontre as definições de pino do seu motor de passo e conecte-o à SAÍDA do shield, conforme abaixo:

<table align="center">
  <tbody>
  <tr>
    <td><h3>stepper</h3></td>
    <td><h3>OUT1</h3></td>
  </tr>
  <tr>
    <td><h4>A+</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>A-</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>B+</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  <tr>
    <td><h4>B-</h4></td>
    <td><h4>Não usado</h4></td>
  </tr>
  </tbody></table>

- Conecte o Motor Shield ao Arduino.
- Conecte o Arduino ao PC por meio de um cabo USB.

#### Software

Copie o código abaixo para o Arduino IDE e carregue-o para o Seeeduino V4, então você verá o seu motor de passo se mover.

```cpp
/*
 * Stepper test for Seeed Motor Shield V2
 * loovee @ 15 Mar, 2016
 */

#include <Stepper.h>

// change this to the number of steps on your motor
#define STEPS 200

// create an instance of the stepper class, specifying
// the number of steps of the motor and the pins it's
// attached to
Stepper stepper(STEPS, 8, 11, 12, 13);

// the previous reading from the analog input
int previous = 0;

void step(int steps)
{
    digitalWrite(9, HIGH);
    digitalWrite(10, HIGH);
    stepper.step(steps);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
}

void setup()
{
    // set the speed of the motor to 30 RPMs
    pinMode(9, OUTPUT);
    pinMode(10, OUTPUT);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    stepper.setSpeed(30);
}

void loop()
{
    step(1000);
    step(-1000);
}

// END FILE
```

Se nada acontecer, verifique novamente se você conectou o fio corretamente.

## APIs da Biblioteca

---------

### APIs do Motor DC

#### begin

**Descrição**

```Javascript
void begin();
```

#### speed

**Descrição**

```Javascript
void move(int motor_id, int speed);
```

- motor_id
  - 0 - Canal 0
  - 1 - Canal 1
- velocidade: -100~100, quanto maior mais rápido, 0 para parar

**stop**

```Javascript
void stop(unsigned char motor_id);
```

**brake**

```Javascript
void brake(unsigned char motor_id);
```

#### Stepper

**Observação**: usamos a biblioteca fornecida pelo Arduino IDE para acionar um motor de passo.

Há algo que precisa ser modificado, consulte os exemplos.

## FAQs

**Q1: A finalidade do jumper MB_EN**

A1: Você pode ver um jumper de energia (MB_EN) no motor shield. Se você movê-lo, o Arduino pode fornecer energia ao Shield, mas o shield (se o shield estiver conectado a uma fonte de alimentação externa) não pode fornecer energia ao Arduino.

Se o jumper existir, um pode fornecer energia ao outro em duas situações:

- USB para Arduino: se nenhuma fonte de alimentação externa estiver conectada ao Shield separadamente, o Arduino fornecerá energia ao Shield através do pino VCC.

- Fonte de alimentação externa conectada ao Shield: se o shield tiver uma fonte de alimentação separada, a tensão passará primeiro por um retificador (78M05) e então fornecerá energia ao Arduino. Nesta situação, nenhuma corrente do Arduino poderá passar pelo Arduino para o Shield através do 78M05.

Portanto, a finalidade deste jumper é uma escolha de se você deseja usar o shield para fornecer energia ao Arduino ou não.

**Q2: Existe um conflito de pinos entre o SD card shield (103030005) e o Motor shield (105030001) no Arduino UNO? Como usá-los juntos?**

A2: Existe um conflito de pinos entre o Motor shield e o SD card shield nos pinos digitais D11, D12, D13 do Arduino Uno. Portanto, você não pode empilhá-los juntos com a placa Arduino Uno. Aqui está a solução para usá-los juntos.

- Passo 1. Empilhe o SD card shield no Arduino.
- Passo 2. Modifique a biblioteca Motordriver.h da seguinte forma.

```cpp
/******Pins definitions*************/
#define MOTORSHIELD_IN1    8
#define MOTORSHIELD_IN2    7
#define MOTORSHIELD_IN3    6
#define MOTORSHIELD_IN4    5
#define SPEEDPIN_A        9
#define SPEEDPIN_B        10
```

**Q3. Não empilhe o motor shield, mas faça as conexões separadamente a partir do Arduino usando jumpers, conforme abaixo.**

A3: Aqui está a conexão.

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino</h3></td>
    <td><h3>Motor shield</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>GND</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>D13</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>D12</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>D11</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>D8</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>D9</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>D10</h4></td>
  </tr>
  </tbody></table>

## Visualizador Online do Esquemático do Arquivo Eagle do Motor Shield V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do Arquivo Eagle do Motor shield V2.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-------------------

- **[Eagle]** [Arquivo Eagle do Motor Shield V2.0](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip)
- **[Eagle]** [Arquivo Eagle do Motor shield V2.1](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar)
- **[PDF]** [Esquemático do Motor Shield 2.0](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.0.pdf)
- **[PDF]** [Esquemático do Motor Shield 2.1](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.pdf)
- **[PDF]** [Esquemático do Motor Shield 2.2](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor%20Shield%20v2.2.pdf)
- **[Library]** [Biblioteca do Motor Shield](https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip)
- **[Datasheet]** [L298 Datasheet](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/L298.pdf)
- **[Datasheet]** [78M05 Datasheet](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/78M05_datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
