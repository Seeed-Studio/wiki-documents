---
title: Sensor de Fluxo de Água G1/8 polegada
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/G1-8_Water_Flow_Sensor/
slug: /G1-8_Water_Flow_Sensor
sku: 314150001
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/G1-8_Water_Flow_Sensor/
---
[![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/G18_Water_Flow_Sensor.jpg)](https://www.seeedstudio.com/depot/G18-Water-Flow-Sensor-p-1346.html?cPath=25_32)

O sensor de fluxo de água é composto por um corpo de válvula de plástico, um rotor de água e um sensor de efeito Hall. Quando a água flui através do rotor, o rotor gira. Sua velocidade muda conforme a taxa de fluxo. O sensor de efeito Hall gera o sinal de pulso correspondente. Este modelo é adequado para detectar fluxo em bebedouros ou máquinas de café.

Temos uma linha abrangente de sensores de fluxo de água em diferentes diâmetros. Confira para encontrar aquele que melhor atende às suas necessidades.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)

##  Recursos

*   Compacto, fácil de instalar

*   Alto desempenho de vedação

*   Sensor de efeito Hall de alta qualidade

*   Compatível com RoHS

##  Especificação

<table>
  <tr>
    <td>Tensão mínima de trabalho</td>
    <td>DC 4.5V</td>
  </tr>
  <tr>
    <td>Corrente máxima de trabalho</td>
    <td>15mA(DC 5V)</td>
  </tr>
  <tr>
    <td width="400px">Tensão de trabalho</td>
    <td width="400px">5V～24V</td>
  </tr>
  <tr>
    <td>Faixa de taxa de fluxo</td>
    <td>0.3~6L/min</td>
  </tr>
  <tr>
    <td>Capacidade de carga</td>
    <td>≤10mA(DC 5V)</td>
  </tr>
  <tr>
    <td>Temperatura de operação</td>
    <td>≤80℃</td>
  </tr>
  <tr>
    <td>Temperatura do líquido</td>
    <td>≤120℃</td>
  </tr>
  <tr>
    <td>Umidade de operação</td>
    <td>35%～90%RH</td>
  </tr>
  <tr>
    <td>Pressão da água</td>
    <td>≤0.8MPa</td>
  </tr>
  <tr>
    <td>Temperatura de armazenamento</td>
    <td>-25℃～+80℃</td>
  </tr>
  <tr>
    <td>Umidade de armazenamento</td>
    <td>25%～95%RH</td>
  </tr>
</table>

##  Primeiros Passos

<font>Nota: Este exemplo é extraído do fórum, e foi feito por Charles Gantt. Agradecemos por sua contribuição. Vamos ver como funciona.</font>

###   Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água

Isto é parte de um projeto em que venho trabalhando e achei que deveria compartilhar aqui, já que houve alguns tópicos sobre como ler a taxa de fluxo de água em litros por hora usando o Sensor de Fluxo de Água encontrado no Depo da Seeed Studio. Ele usa uma simples roda giratória que gera pulsos em um sensor de efeito Hall. Lendo esses pulsos e aplicando um pouco de matemática, podemos ler a taxa de fluxo de líquidos com precisão de até 3%. As roscas são G3/4 simples, então encontrar conexões com bico não será tão difícil.

**Instalação de hardware**

Você vai precisar de Seeeduino / Arduino, Sensor de Fluxo de Água, resistor de 10K, uma protoboard e alguns jumpers.

Fazer a fiação do Sensor de Fluxo de Água é bem simples. Há 3 fios: preto, vermelho e amarelo.
Preto ao pino de terra do Seeeduino
Vermelho ao pino de 5v do Seeeduino
O fio amarelo precisará ser conectado a um resistor de pull-up de 10k e então ao pino 2 do Seeeduino.

Aqui está um diagrama em Fritzing que fiz para mostrar como ligar tudo.

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Depois de ter tudo ligado, você precisará enviar o seguinte código para o seu Seeeduino. Assim que o código for carregado e você tiver algum fluido passando pelo Sensor de Fluxo de Água, poderá abrir o monitor serial e ele exibirá a taxa de fluxo, atualizando a cada segundo.

**Programação**
```
// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com
// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; //measuring the rising edges of the signal
int Calc;
int hallsensor = 2;    //The pin location of the sensor

void rpm ()     //This is the function that the interupt calls
{
    NbTopsFan++;  //This function measures the rising and falling edge of the

    hall effect sensors signal
}
// The setup() method runs once, when the sketch starts
void setup() //
{
    pinMode(hallsensor, INPUT); //initializes digital pin 2 as an input
    Serial.begin(9600); //This is the setup function where the serial port is

    initialised,
    attachInterrupt(0, rpm, RISING); //and the interrupt is attached
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop ()
{
    NbTopsFan = 0;   //Set NbTops to 0 ready for calculations
    sei();      //Enables interrupts
    delay (1000);   //Wait 1 second
    cli();      //Disable interrupts
    Calc = (NbTopsFan * 60 / 7.5); //(Pulse frequency x 60) / 7.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Você pode consultar nosso fórum para mais detalhes sobre [Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

##  Diagrama de Fiação

O diâmetro externo da rosca usada nas conexões é 1,4 mm.

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Wfs-wiring.jpg)

##  Tabela de Saída

Frequência de pulso (Hz) no teste horizontal = 7,5Q, Q é a taxa de fluxo em L/min. (Resultados na faixa de +/- 3%)

<table>
  <tr>
    <td width="400px">Nível alto do pulso de saída</td>
    <td width="400px">Tensão de sinal &gt;4.5 V( entrada DC 5 V)</td>
  </tr>
  <tr>
    <td>Nível baixo do pulso de saída</td>
    <td>Tensão de sinal &lt;0.5V( entrada DC 5V)</td>
  </tr>
  <tr>
    <td>Precisão</td>
    <td>3% (Taxa de fluxo de 1L/min a 10L/min)</td>
  </tr>
  <tr>
    <td>Ciclo de trabalho do sinal de saída</td>
    <td>40%～60%</td>
  </tr>
</table>

##  Recursos

*   [Water flow sensor datasheet.pdf](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)

*   [Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [Exibição da taxa de fluxo de água em LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [folha de dados do material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Suporte Técnico & Discussão sobre o Produto
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>