---
description: Sensor de Fluxo de Água G5/4 polegada
title: Sensor de Fluxo de Água G5/4 polegada
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /G1-1-4_Water_Flow_sensor
sku: 314150004
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/G1-1-4_Water_Flow_sensor/
---
![](http://bz.seeedstudio.com/depot/images/P2231345_01.JPG)

O sensor de fluxo de água consiste em um corpo de válvula de plástico, um rotor de água e um sensor de efeito Hall. Quando a água flui através do rotor, o rotor gira. Sua velocidade muda com diferentes taxas de fluxo. O sensor de efeito Hall gera o sinal de pulso correspondente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g114-water-flow-sensor-p-1082.html?cPath=144_151)

##   Especificação
---
<table>
<tr><td>Tensão Mín. de Trabalho</td><td>DC 4.5V</td></tr>
<tr><td>Corrente Máx. de Trabalho</td><td>15mA(DC 5V)</td></tr>
<tr><td>Tensão de Trabalho</td><td>5V～24V</td></tr>
<tr><td>Faixa de Vazão</td><td>1～120L/min</td></tr>
<tr><td>Capacidade de Carga</td><td>≤10mA(DC 5V)</td></tr>
<tr><td>Temperatura de Operação</td><td>≤80℃</td></tr>
<tr><td>Temperatura do Líquido</td><td>≤120℃</td></tr>
<tr><td>Umidade de Operação</td><td>35%～90%RH</td></tr>
<tr><td>Pressão da Água</td><td>≤2.0MPa</td></tr>
<tr><td>Temperatura de Armazenamento</td><td>-25℃～+80℃</td></tr>
<tr><td>Umidade de Armazenamento</td><td>25%～95%RH</td></tr>
</table>

##   Dimensões Mecânicas
---
###   Componentes do Sensor

<table>
<tr><th>Nº</th><th>Nome</th><th>Quantidade</th><th>Material</th><th>Observação</th></tr>
<tr><td>1</td><td>Corpo da válvula</td><td>1</td><td>PA66+33% fibra de vidro</td><td></td></tr>
<tr><td>2</td><td>Esfera de aço inoxidável</td><td>1</td><td>Aço inoxidável SUS304</td><td></td></tr>
<tr><td>3</td><td>Eixo</td><td>1</td><td>Aço inoxidável SUS304</td><td></td></tr>
<tr><td>4</td><td>Impulsor</td><td>1</td><td>POM</td><td></td></tr>
<tr><td>5</td><td>Ímã de anel</td><td>1</td><td>Ferrite</td><td></td></tr>
<tr><td>6</td><td>Anel intermediário</td><td>1</td><td>PA66+33% fibra de vidro</td><td></td></tr>
<tr><td>7</td><td>Anel de vedação em O</td><td>1</td><td>Borracha</td><td></td></tr>
<tr><td>8</td><td>Anel de vedação eletrônico</td><td>1</td><td>Borracha</td><td></td></tr>
<tr><td>9</td><td>Tampa</td><td>1</td><td>PA66+33% fibra de vidro</td><td></td></tr>
<tr><td>10</td><td>Parafuso</td><td>8</td><td>Aço inoxidável SUS304</td><td></td></tr>
<tr><td>11</td><td>Cabo</td><td>1</td><td>1007 24AWG</td><td></td></tr>
</table>

##  Exemplo de Uso
---
<font>Nota: Este exemplo é extraído do fórum, e foi feito por Charles Gantt. Agradecemos por sua contribuição. Vamos ver como ele funciona.</font>

###   Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água

Esta é parte de um projeto em que estive trabalhando e achei que seria interessante compartilhar aqui, já que houve alguns tópicos sobre como ler a taxa de fluxo de água em litros por hora usando o Sensor de Fluxo de Água encontrado no Depo da Seeed Studio. Ele usa uma roda giratória simples que pulsa um sensor de efeito Hall. Lendo esses pulsos e aplicando um pouco de matemática, podemos ler a taxa de fluxo de líquidos com precisão de até 3%. As roscas são simples G3/4, então encontrar conexões com bico não será tão difícil.

####   Instalação de Hardware

Você vai precisar de um Seeeduino / Arduino, Sensor de Fluxo de Água, resistor de 10K, uma protoboard e alguns jumpers.

A fiação do Sensor de Fluxo de Água é bem simples. Existem 3 fios: preto, vermelho e amarelo.
Preto ao pino de terra do Seeeduino
Vermelho ao pino de 5V do Seeeduino
O fio amarelo precisa ser conectado a um resistor pull-up de 10k e então ao pino 2 do Seeeduino.

Aqui está um diagrama em Fritzing que eu fiz para mostrar como ligar tudo.

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Depois de fazer todas as conexões, você precisará enviar o seguinte código para o seu Seeeduino. Depois que ele for enviado e você tiver algum fluido passando pelo Sensor de Fluxo de Água, você pode abrir o monitor serial e ele exibirá a taxa de fluxo, atualizando a cada segundo.

####   Programação
```
// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com
// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan;                       // measuring the rising edges of the signal
int Calc;
int hallsensor = 2;                           // The pin location of the sensor


void rpm ()                                   // This is the function that the interupt calls
{
    NbTopsFan++;                              // This function measures the rising and falling edge of the hall effect sensors signal
}


void setup()
{
    pinMode(hallsensor, INPUT);               // initializes digital pin 2 as an input
    Serial.begin(9600);                       // This is the setup function where the serial port is initialised,
    attachInterrupt(0, rpm, RISING);          // and the interrupt is attached
}


void loop ()
{
    NbTopsFan = 0;                            // Set NbTops to 0 ready for calculations

    sei();                                    // Enables interrupts
    delay (1000);                             // Wait 1 second
    cli();                                    // Disable interrupts

    Calc = (NbTopsFan * 60 / 4.5);            // (Pulse frequency x 60) / 4.5Q, = flow rate in L/hour

    Serial.print (Calc, DEC);                 // Prints the number calculated above

    Serial.print (" L/hour\r\n");             // Prints "L/hour" and returns a  new line
}
```

Você pode consultar nosso fórum para mais detalhes sobre [Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

##   Diagrama de Fiação
---
O diâmetro externo da rosca usada nas conexões é de 1,4 mm.

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/Wfs-wiring.jpg)

##   Tabela de Saída
---
Frequência de pulso (Hz) no Teste Horizontal = 4.5Q, em que Q é a taxa de fluxo em L/min. (Resultados na faixa de +/- 3%)

<table>
<tr><td>Nível alto de pulso de saída</td><td>Tensão do sinal &gt;4.5 V( entrada DC 5 V)</td></tr>
<tr><td>Nível baixo de pulso de saída</td><td>Tensão do sinal &lt;0.5V( entrada DC 5V)</td></tr>
<tr><td>Precisão</td><td>3% (Taxa de fluxo de 1L/min a 10L/min)</td></tr>
<tr><td>Ciclo de trabalho do sinal de saída</td><td>40%～60%</td></tr>
</table>

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/G54_Flow_rate_to_frequency.png.png)

##   Perguntas Frequentes (FAQ)
---

**De que materiais é feito o sensor de fluxo de água?**

Náilon com fibra, evitando ácido forte e base forte.

**O sensor de fluxo de água é seguro para água potável?**

Sim, ele tem sido usado em máquinas de água potável.


##   Recursos
---
*   [Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [Exibição da taxa de fluxo de água em LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [folha de dados do material](https://wiki.seeedstudio.com/pt-br/images/4/4e/YEE70G30HSLNC..pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
