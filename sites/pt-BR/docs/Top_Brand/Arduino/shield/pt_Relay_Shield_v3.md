---
description: Relay_Shield_v3
title: Relay Shield v3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Relay_Shield_v3
sku: 103030009
last_update:
  date: 01/11/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Relay_Shield_v3/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_L_v3.0.jpg" alt="pir" width={600} height="auto" /></p>

O Relay Shield oferece uma solução para controlar dispositivos de alta corrente que não podem ser controlados pelos pinos de I/O digitais do Arduino devido aos limites de corrente e tensão.

O Relay Shield possui quatro relés de alta qualidade e fornece interfaces NA/NF, quatro indicadores LED dinâmicos para mostrar o estado ligado/desligado de cada relé e o formato de shield padronizado para fornecer uma conexão simples à placa Arduino/Seeeduino ou a outras placas compatíveis com Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Relay-Shield-v3.0-p-2440.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

---

- Compatível com Arudino Uno/Leonardo/Seeeduino; Outras placas ou microcontroladores via cabos jumper
- Interface via pinos de I/O digitais 4, 5, 6 e 7
- Bornes de parafuso para o relé
- Formato e design de shield padronizados
- LEDs indicadores de status de funcionamento para cada relé
- Relés de alta qualidade
- Pinos de relé COM, NO (Normalmente Aberto) e NC (Normalmente Fechado) para cada relé
- Atualização dos pinos SCL, SDA, IOREF, NC.

## Especificação

<table align="center">
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Mín</h3></td>
    <td><h3>Típico</h3></td>
    <td><h3>Máx</h3></td>
    <td><h3>Unidade</h3></td>
  </tr>
  <tr>
    <td><h4>Tensão de Alimentação</h4></td>
    <td><h4>4.75</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.25</h4></td>
    <td><h4>VCC</h4></td>
  </tr>
  <tr>
    <td><h4>Corrente de Trabalho</h4></td>
    <td><h4>8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>250</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h4>Tensão de Comutação</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>30</h4></td>
    <td><h4>VCC</h4></td>
  </tr>
    <tr>
    <td><h4>Corrente de Comutação</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>8</h4></td>
    <td><h4>A</h4></td>
  </tr>
    <tr>
    <td><h4>Frequência</h4></td>
    <td><h4>-</h4></td>
    <td><h4>1</h4></td>
    <td><h4>-</h4></td>
    <td><h4>HZ</h4></td>
  </tr>
    <tr>
    <td><h4>Potência de Comutação</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>70</h4></td>
    <td><h4>W</h4></td>
  </tr>
    <tr>
    <td><h4>Vida Útil do Relé</h4></td>
    <td><h4>100000</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>Ciclos</h4></td>
  </tr>
    <tr>
    <td><h4>Descarga ESD por contato </h4></td>
    <td><h4>-</h4></td>
    <td><h4>±4</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>Descarga ESD pelo ar</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>Dimensão</h4></td>
    <td><h4>-</h4></td>
    <td><h4>68.7X53.5X30.8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>mm</h4></td>
  </tr>
    <tr>
    <td><h4>Peso Líquido</h4></td>
    <td><h4>-</h4></td>
    <td><h4>55±2</h4></td>
    <td><h4>-</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

:::caution

1. Coloque 2 camadas de fita isolante sobre o conector USB do Arduino. Isso evitará que o Relay Shield entre em contato.
2. Não opere com tensão superior a 35V CC.
:::

## Descrição da Interface do Shield

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_v3.0.png" alt="pir" width={600} height="auto" /></p>

- Digital 4 – controla o pino COM4 do RELAY4 (localizado em J4)
- Digital 5 – controla o pino COM3 do RELAY3 (localizado em J3)
- Digital 6 – controla o pino COM2 do RELAY2 (localizado em J2)
- Digital 7 – controla o pino COM1 do RELAY1 (localizado em J1)

**Descrição dos Pinos da Interface/Terminal J1:**

- **COM1 (Pino Comum)** : O pino do relé controlado a partir do pino digital.

- **NC1 (Normalmente Fechado)**: Este terminal será conectado a COM1 quando o pino de controle do RELAY1 (pino de I/O Digital 7) estiver em nível baixo e será desconectado quando o pino de controle do RELAY1 estiver em nível alto.

- **NO1 (Normalmente Aberto)**: Este terminal será conectado a COM1 quando o pino de controle do RELAY1 (pino de I/O Digital 7) estiver em nível alto e será desconectado quando o pino de controle do RELAY1 estiver em nível baixo.

**Os terminais J2-4 são semelhantes ao J1, exceto pelo fato de controlarem, respectivamente, RELAY2-RELAY4.**

:::note
Apenas quatro pinos de I/O digitais do Arduino, os pinos 4-7, são necessários para controlar os quatro relés diferentes. Além disso, os pinos 5V e dois GND do Arduino também são necessários para alimentar o Relay Shield.
:::

## Operação/Tutorial de Relés

---
Relés são basicamente chaves eletromagnéticas: quando o relé é energizado pelo circuito de controle (ou seja, quando uma tensão e corrente são aplicadas à bobina), a corrente e a bobina criam um campo magnético que consegue atrair o terminal COM em direção ao terminal NO; quando o circuito de controle remove a tensão e a corrente aplicadas, o terminal COM retorna ao contato com o terminal NC devido a uma força mecânica (normalmente uma mola).

Algumas aplicações práticas de relés incluem: controle de alta tensão usando baixa tensão, controle de motores, controle remoto, alarme anti-interferência, alarme automático de temperatura, incubadoras e assim por diante.

Uma aplicação de controle de motor com um relé e um motor é mostrada abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Low_Level_Control4.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/High_Level_Control3.jpg" alt="pir" width={600} height="auto" /></p>

No caso do Relay Shield, os dois terminais do “Circuito de Controle” para cada um dos quatro relés são controlados por apenas um pino de I/O digital do Arduino. Os pinos 4, 5, 6 e 7 controlam, respectivamente, os relés 4, 3, 2 e 1.

## Exemplo(s)/Uso do Relay Shield

Agora que você sabe como um relé funciona internamente, vamos mostrar como usar o Relay Shield.

**Exemplo nº 1: Controle de Motor CC**

1.Empilhe o Relay Shield sobre a placa de desenvolvimento Arduino.

2.Conecte o Arduino ao seu PC usando um cabo USB.

3.Usaremos o RELAY3 para controlar o motor CC. Conecte o motor CC e o Relay Shield como mostrado no esquema e na figura abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Motor-shield-schematic-drawing.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_Connector.jpg" alt="pir" width={600} height="auto" /></p>

:::note
A fonte de alimentação externa na figura acima pode ser uma bateria ou uma fonte de alimentação. A fonte externa deve ser capaz de fornecer corrente suficiente e estar ajustada para a tensão correta do motor. Em nossos testes, usamos uma bateria de lítio como fonte de alimentação externa para o motor.
:::

4.Inicie a IDE Arduino e carregue o seguinte código para a placa Arduino:

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

Quando você tiver carregado o código na sua placa Arduino/Seeeduino, o motor deverá funcionar por um segundo, parar por outro segundo e repetir o processo indefinidamente. Quando o motor estiver funcionando (NO3 e COM3 estão conectados), o indicador LED NO3 ficará aceso.

**Exemplo nº 2: Como Usar Mais de um Relay Shield com Apenas Uma Placa Arduino/Seeeduino**

Como o Relay Shield usa pinos digitais no Arduino para controlar cada relé, mais de um Relay Shield pode ser usado com a mesma placa Arduino; para isso, basta seguir estes passos:

1.Empilhe um dos Relay Shields (vamos chamá-lo de Relay Shield nº 1) sobre a placa de desenvolvimento Arduino

2.Conecte outro Relay Shield (vamos chamá-lo de Relay Shield nº 2) usando cabos/fios jumper ao Relay Shield nº 1, como mostrado na figura abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Two-relay-shields-one-arduino.png" alt="pir" width={600} height="auto" /></p>

- O pino GND do Relay Shield nº 1 está conectado ao pino GND do Relay Shield nº 2
- O pino 5V do Relay Shield nº 1 está conectado ao pino 5V do Relay Shield nº 2
- Os pinos Digitais 8, 9, 10 e 11 do Relay Shield nº 1 estão conectados, respectivamente, aos pinos Digitais 7, 6, 5 e 4 do Relay Shield nº 2.

3.Agora você pode controlar os relés 1, 2, 3 e 4 no Relay Shield nº 2 usando os pinos de I/O digitais 8, 9, 10 e 11 do Arduino. Veja o código de exemplo abaixo para controlar o RELAY1 no Relay Shield nº 2:

```cpp
int relay1inShield2 = 8;    // Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 8 to be an output:
  pinMode(relay1inShield2, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
  digitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)
  delay(1000); // wait 1000 milliseconds (1 second)
  digitalWrite(relay1inShield2,LOW); // NO is disconnected from COM
  delay(1000); // wait 1000 milliseconds (1 second)
}
```

## Leitura Relacionada

---

- [FAQ of Relay Shield](http://support.seeedstudio.com/knowledgebase/articles/462030-relay-shield-sku-sld01101p)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Relay Shield v3.0](https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
