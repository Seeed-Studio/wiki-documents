---
description: Relay Shield V2.0
title: Relay Shield V2.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Relay_Shield_V2
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Relay_Shield_V2/
---

<!-- ---
name:  Relay Shield V2.0
category: Discontinued
bzurl:
oldwikiname: Relay_Shield_V2.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Relay-Shield_V2-0
sku: 103030003
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relayshield_01.jpg)

O Relay Shield oferece uma solução para controlar dispositivos de alta corrente que não podem ser controlados pelos pinos de E/S digitais do Arduino devido aos seus limites de corrente e tensão.

O Relay Shield possui quatro relés de alta qualidade e fornece interfaces NA/NF, quatro indicadores LED dinâmicos para mostrar o estado ligado/desligado de cada relé e o formato de shield padronizado para fornecer uma conexão simples à placa Arduino/Seeeduino ou a outras placas compatíveis com Arduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)
](https://www.seeedstudio.com/depot/relay-shield-v20-p-1376.html)

## Recursos ##

- Compatível com Arudino Uno/Leonardo/Seeeduino; Outra placa ou microcontrolador via cabos jumper

- Interface via pinos de E/S digitais 4, 5, 6 e 7

- Terminais de parafuso dos relés

- Formato e design de shield padronizados

- LEDs indicadores de status de funcionamento para cada relé

- Relés de alta qualidade

- Pinos de relé COM, NO (Normalmente Aberto) e NC (Normalmente Fechado) para cada relé

## Especificação ##

|  Item|Min|Típico|Máx|Unidade |
|---|---|---|---|---|
|   Tensão de Alimentação|4.75| 5|5.25|VCC |  
| Corrente de Trabalho|8|/|250|mA  |
| Tensão de Comutação|/|/|35|VCC  |
|   Corrente de Comutação|/|/| 8| A|
|  Frequência|/|1|/|HZ |
| Potência de Comutação|/|/|70|W  |
|  Vida Útil do Relé|100,000|/|/|Ciclos |
| Descarga por contato ESD|±4|||KV  |
| Descarga pelo ar ESD|±8|||KV  |  
| Dimensão|68.7X53.5X30.8|||mm  |  
| Peso Líquido|55±2|||g|

:::note

- Coloque 2 camadas de fita isolante sobre o conector USB do [Arduino]. Isso evitará que o Relay Shield entre em contato.
- Não opere com tensão superior a 35V CC.
:::

## Descrição da Interface do Shield ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relays-Shield-PCB-Explained-real.png)

Descrição das conexões dos terminais do Relay Shield V2.0

- Digital 4 – controla o pino COM4 do RELAY4 (localizado em J4)

- Digital 5 – controla o pino COM3 do RELAY3 (localizado em J3)

- Digital 6 – controla o pino COM2 do RELAY2 (localizado em J2)

- Digital 7 – controla o pino COM1 do RELAY1 (localizado em J1)

Descrição dos Pinos da Interface/Terminal J1:

- **COM1 (Pino Comum):**  O pino do relé controlado a partir do pino digital.

- **NC1 (Normalmente Fechado):** Este terminal estará conectado ao COM1 quando o pino de controle do RELAY1 (pino de E/S Digital 7) estiver em nível baixo e desconectado quando o pino de controle do RELAY1 estiver em nível alto.

- **NO1 (Normalmente Aberto):** Este terminal estará conectado ao COM1 quando o pino de controle do RELAY1 (pino de E/S Digital 7) estiver em nível alto e desconectado quando o pino de controle do RELAY1 estiver em nível baixo.

**Os terminais J2-4 são semelhantes ao J1, exceto pelo fato de controlarem RELAY2-RELAY4 respectivamente.**

**Nota:** Somente quatro pinos de E/S digitais do Arduino, pinos 4-7, são necessários para controlar os quatro relés diferentes. Além disso, os pinos 5V e dois GND do Arduino também são necessários para alimentar o Relay Shield.

## Como o Relé funciona ##

Relés são basicamente chaves eletromagnéticas: quando o relé é energizado pelo circuito de controle (ou seja, quando uma tensão e corrente são aplicadas à bobina), a corrente e a bobina criam um campo magnético que é capaz de atrair o terminal COM em direção ao terminal NO; quando o circuito de controle remove a tensão e corrente aplicadas, o terminal COM retorna ao contato com o terminal NC devido a uma força mecânica (geralmente uma mola).

Algumas aplicações práticas de relé incluem: controle de alta tensão usando baixa tensão, controle de motor, controle remoto, alarme anti-escuta, alarme automático de temperatura, incubadoras e assim por diante.

Uma aplicação de controle de motor com um relé e um motor é mostrada abaixo:

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Low_Level_Control4.jpg)
O motor não está funcionando no momento, pois não há conexão da fonte de alimentação ao motor. O circuito de controle não está energizando o relé, portanto o terminal COM não é atraído para o terminal NO

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/High_Level_Control3.jpg)
O motor está funcionando, pois está em contato com os terminais + e - da fonte de alimentação. O circuito de controle está energizando o relé e sua força magnética atraiu o terminal COM para o terminal NO.

No caso do Relay Shield, os dois terminais do “Circuito de Controle” para cada um dos quatro relés são controlados por apenas um pino de E/S digital do Arduino. Os pinos 4, 5, 6 e 7 controlam os relés 4, 3, 2 e 1 respectivamente.

## Primeiros Passos ##

Agora que você sabe como um relé funciona internamente, vamos mostrar como usar o Relay Shield.

### Exemplo nº 1: Controle de Motor CC ###

1.Empilhe o Relay Shield sobre a placa de desenvolvimento Arduino.

2.Conecte o Arduino ao PC usando um cabo USB.

3.Usaremos o RELAY3 para controlar o motor CC. Conecte o motor CC e o Relay Shield conforme mostrado no esquema e figura abaixo:

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Motor-shield-schematic-drawing.png)
Esquema do motor e do Relay Shield

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relay_Shield_Connector.jpg)
Placa Arduino com Relay Shield e um motor conectado ao Relay Shield

**Nota:** A fonte de alimentação externa na figura acima pode ser uma bateria ou fonte de alimentação. A alimentação externa deve ser capaz de fornecer corrente suficiente e estar ajustada para a tensão correta do motor. Em nossos testes, usamos uma bateria de lítio como fonte de alimentação externa para o motor.

4.Inicie a IDE do Arduino e envie o seguinte código para a placa Arduino:

```cpp
int MotorControl = 5;    // Digital Arduino Pin used to control the motor

// the setup routine runs once when you press reset:
void setup()  {
    // declare pin 5 to be an output:
    pinMode(MotorControl, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
    digitalWrite(MotorControl,HIGH);// NO3 and COM3 Connected (the motor is running)
    delay(1000); // wait 1000 milliseconds (1 second)
    digitalWrite(MotorControl,LOW);// NO3 and COM3 Disconnected (the motor is not running)
    delay(1000); // wait 1000 milliseconds (1 second)
}
```

Quando você tiver enviado o código para sua placa Arduino/Seeeduino, o motor deverá funcionar por um segundo, parar por outro segundo e repetir o processo indefinidamente. Quando o motor estiver funcionando (NO3 e COM3 estiverem conectados), o LED indicador NO3 ficará aceso.

### Exemplo nº 2: Como Usar Mais de um Relay Shield com Apenas uma Placa Arduino/Seeeduino ###

Como o Relay Shield usa pinos digitais no Arduino para controlar cada um dos relés, mais de um Relay Shield pode ser usado com a mesma placa Arduino; para fazer isso, basta seguir estas etapas:

1.Empilhe um dos Relay Shields (vamos chamá-lo de Relay Shield nº 1) sobre a placa de desenvolvimento Arduino

2.Conecte outro Relay Shield (vamos chamá-lo de Relay Shield nº 2) usando cabos/fios jumper ao Relay Shield nº 1, conforme mostrado na figura abaixo:

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Two-relay-shields-one-arduino.png)
Esquema de dois Relay Shields com apenas uma placa Arduino.

- Os pinos GND do Relay Shield nº 1 estão conectados aos pinos GND do Relay Shield nº 2

- O pino 5V do Relay Shield nº 1 está conectado ao pino 5V do Relay Shield nº 2

- Os pinos digitais 8, 9, 10 e 11 do Relay Shield nº 1 estão conectados aos pinos digitais 7, 6, 5 e 4 do Relay Shield nº 2, respectivamente.

3. Agora você pode controlar os relés 1, 2, 3 e 4 no Relay Shield nº 2 usando os pinos de E/S digitais 8, 9, 10 e 11 do Arduino. Veja abaixo o código de exemplo para controlar o RELAY1 no Relay Shield nº 2:

```
int relay1inShield2 =8;// Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2

//the setup routine runs once when you press reset:
voidsetup(){
pinMode(relay1inShield2, OUTPUT);// declare pin 8 to be an output:
}

// the loop routine runs over and over again forever:
voidloop(){
digitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)
delay(1000);// wait 1000 milliseconds (1 second)
digitalWrite(relay1inShield2,LOW); // NO is disconnected from COM
delay(1000); // wait 1000 milliseconds (1 second)}
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[EAGLE]**[Arquivos Relay Shield EagleCAD](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip)
- **[PDF]**[PCB do Relay shield](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20PCB.pdf)
- **[PDF]**[Esquemático do Relay shield](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20sch.pdf)

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
