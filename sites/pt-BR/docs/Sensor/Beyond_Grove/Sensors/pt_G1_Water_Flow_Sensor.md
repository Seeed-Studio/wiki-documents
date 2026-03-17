---
title: Sensor de Fluxo de Água G1
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/G1_Water_Flow_Sensor/
slug: /G1_Water_Flow_Sensor
sku: 314150000
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/G1_Water_Flow_Sensor/
---
![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/G1inch_Water_Flow_sensor.jpeg)

O sensor de fluxo de água consiste em um corpo de válvula de plástico, um rotor de água e um sensor de efeito Hall. Quando a água flui através do rotor, o rotor gira. Sua velocidade muda de acordo com diferentes taxas de fluxo. O sensor de efeito Hall emite o sinal de pulso correspondente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

## Especificação

---
<table>
  <tbody><tr>
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
      <td>Faixa da taxa de fluxo</td>
      <td>1～60L/min</td>
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
      <td>≤1.75MPa(Max 2MPa)</td>
    </tr>
    <tr>
      <td>Temperatura de armazenamento</td>
      <td>-25℃～+80℃</td>
    </tr>
    <tr>
      <td>Umidade de armazenamento</td>
      <td>25%～95%RH</td>
    </tr></tbody></table>

## Dimensões Mecânicas

---

### Componentes do Sensor

<table>
  <tbody><tr>
      <th>Nº</th>
      <th>Nome</th>
      <th>Quantidade</th>
      <th>Material</th>
      <th>Observação</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>1</td>
      <td width={150}>Corpo da válvula</td>
      <td width={150}>1</td>
      <td width={150}>PA66+33% fibra de vidro</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>2</td>
      <td width={150}>Esfera de aço inoxidável</td>
      <td width={150}>1</td>
      <td width={150}>Aço inoxidável SUS304</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>3</td>
      <td>Eixo</td>
      <td>1</td>
      <td>Aço inoxidável SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>4</td>
      <td>Impulsor</td>
      <td>1</td>
      <td>POM</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>5</td>
      <td>Ímã em anel</td>
      <td>1</td>
      <td>Ferrite</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>6</td>
      <td>Anel intermediário</td>
      <td>1</td>
      <td>PA66+33% fibra de vidro</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>7</td>
      <td>Anel de vedação em O</td>
      <td>1</td>
      <td>Borracha</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>8</td>
      <td>Anel de vedação eletrônica</td>
      <td>1</td>
      <td>Borracha</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>9</td>
      <td>Tampa</td>
      <td>1</td>
      <td>PA66+33% fibra de vidro</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>10</td>
      <td>Parafuso</td>
      <td>4</td>
      <td>Aço inoxidável SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>11</td>
      <td>Cabo</td>
      <td>1</td>
      <td>1007 24AWG</td>
      <td></td>
    </tr></tbody></table>

## Exemplo de Uso

---
<font>Nota: Este exemplo é extraído do fórum, feito por Charles Gantt. Agradecemos pela sua contribuição. Vamos ver como funciona.</font>

### Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água

Isto é parte de um projeto em que eu tenho trabalhado e pensei em compartilhar aqui, já que houve alguns tópicos sobre como ler a taxa de fluxo de água em litros por hora usando o Sensor de Fluxo de Água encontrado no Depo da Seeed Studio. Ele usa uma simples roda giratória que gera pulsos em um sensor de efeito Hall. Lendo esses pulsos e aplicando um pouco de matemática, conseguimos ler a taxa de fluxo de líquidos com precisão de até 3%. As roscas são G1 simples, então encontrar bicos com espigão não será tão difícil.

**Instalação de Hardware**

Você vai precisar de um Seeeduino / Arduino, Sensor de Fluxo de Água, resistor de 10K, uma protoboard e alguns jumpers.

A ligação do Sensor de Fluxo de Água é bem simples. Há 3 fios: Preto, Vermelho e Amarelo.
Preto no pino de terra do Seeeduino
Vermelho no pino de 5v do Seeeduino
O fio amarelo precisa ser conectado a um resistor de pull-up de 10k e então ao pino 2 do Seeeduino.

Aqui está um diagrama em Fritzing que fiz para mostrar como ligar tudo.

![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Depois de fazer toda a ligação, você precisará enviar o código a seguir para o seu Seeeduino. Quando o upload terminar e você tiver algum fluido fluindo através do Sensor de Fluxo de Água, poderá abrir o monitor serial e ele exibirá a taxa de fluxo, atualizando a cada segundo.

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
    NbTopsFan++;  //This function measures the rising and falling edge of the hall effect sensors signal
}
// The setup() method runs once, when the sketch starts
void setup() //
{
    pinMode(hallsensor, INPUT); //initializes digital pin 2 as an input
    Serial.begin(9600); //This is the setup function where the serial port is initialised,
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
    Calc = (NbTopsFan * 60); //(Pulse frequency x 60) / Q, = flow rate in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Você pode consultar nosso fórum para mais detalhes sobre [Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

## Diagrama de Fiação

---
O diâmetro externo da rosca usada nas conexões é 1,4 mm.

![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## Tabela de Saída

---
Frequência de pulso (Hz) no teste horizontal = 1*Q, onde Q é a taxa de fluxo em L/min. (Resultados dentro de uma faixa de +/- 3%)

<table>
  <tr>
    <td width="400px">Nível alto de pulso de saída</td>
    <td width="400px">Tensão do sinal &gt;4.5 V( entrada DC 5 V)</td>
  </tr>
  <tr>
    <td width="400px">Nível baixo de pulso de saída</td>
    <td width="400px">Tensão do sinal &lt;0.5V( entrada DC 5V)</td>
  </tr>
  <tr>
    <td width="400px">Precisão</td>
    <td width="400px">3% (Taxa de fluxo de 1L/min a 10L/min)</td>
  </tr>
  <tr>
    <td width="400px">Ciclo de trabalho do sinal de saída</td>
    <td width="400px">40%～60%</td>
  </tr>
</table>

## FAQ

---
**De quais materiais é feito o sensor de fluxo de água?**

Nylon com fibra, evitando ácido forte e base forte.

**O sensor de fluxo de água é seguro para água potável?**

Sim, seu uso é seguro para consumo humano. Ele é frequentemente usado em máquinas de água potável.

## Recursos

* [Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

* [Exibição da taxa de fluxo de água em LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

* [folha de dados do material](https://wiki.seeedstudio.com/pt-br/images/4/4e/YEE70G30HSLNC..pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe proporcionar diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
