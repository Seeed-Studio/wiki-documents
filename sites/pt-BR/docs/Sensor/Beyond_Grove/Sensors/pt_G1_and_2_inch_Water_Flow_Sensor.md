---
title: Sensor de Fluxo de Água G1/2 polegada
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/G1_and_2_inch_Water_Flow_Sensor/
slug: /G1_and_2_inch_Water_Flow_Sensor
sku: 314150005
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/G1_and_2_inch_Water_Flow_Sensor/
---
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/flowsensor_LRG.jpg)

O sensor de fluxo de água consiste em um corpo de válvula de plástico, um rotor de água e um sensor de efeito Hall. Quando a água flui através do rotor, o rotor gira. Sua velocidade muda com diferentes taxas de fluxo. O sensor de efeito Hall emite o sinal de pulso correspondente.

**Rastreador de Versões**

|Revisão|	Descrições|	Lançamento|
|---|---|---|---|
|v1.0|	Lançamento público inicial	|31 de maio de 2010|
|v2.0|	Lançamento público 2.0|	05 de jul. de 2010|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g12-water-flow-sensor-p-635.html?cPath=84_87&zenid=020999c566d2f31841dc54602b7d02ef)

## Especificação
---
|itens|valor|
|---|---|
|Tensão mínima de trabalho|DC 4,5V|
|Corrente máxima de trabalho|15mA(DC 5V)|
|Tensão de trabalho|5V～24V|
|Faixa de vazão|1～30L/min|
|Capacidade de carga|≤10mA(DC 5V)|
|Temperatura de operação|≤80℃|
|Temperatura do líquido|≤120℃|
|Umidade de operação|35%～90%RH|
|Pressão da água|≤2,0MPa|
|Temperatura de armazenamento|-25℃～+80℃|
|Umidade de armazenamento|25%～95%RH|

## Dimensões Mecânicas
---
Unidade:mm

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem1.png)

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem2.png)

## Componentes do Sensor
---

|Nº	|Nome|	Quantidade|	Material	|Observação|
|---|---|---|---|---|
|1|	Corpo da válvula	|1|	PA66+33%fibra de vidro	||
|2|	Esfera de aço inoxidável|	1|	Aço inoxidável SUS304	||
|3|	Eixo	|1	|Aço inoxidável SUS304	||
|4|	Impulsor|	1|	POM	||
|5|	Ímã anelar	|1|	Ferrite	||
|6|	Anel intermediário	|1|	PA66+33%fibra de vidro	||
|7|	Anel de vedação em O	|1|	Borracha	||
|8|	Anel de vedação eletrônica	|1|	Borracha	||
|9|	Capa	|1|	PA66+33%fibra de vidro	||
|10|	Parafuso	|4|	Aço inoxidável SUS304	|3.0*11|
|11	|Cabo	|1	|1007 24AWG|||

## Exemplo de Uso

:::note
    Este exemplo é extraído do fórum, foi feito por Charles Gantt. Agradecemos pela contribuição dele. Vamos ver como funciona.
:::

**Lendo a taxa de fluxo de água com o Sensor de Fluxo de Água**

Isto é parte de um projeto em que tenho trabalhado e achei que deveria compartilhá-lo aqui, já que houve alguns tópicos sobre como ler a taxa de fluxo de água em litros por hora usando o Sensor de Fluxo de Água encontrado no Depo da Seeed Studio. Ele usa uma simples roda giratória que gera pulsos em um sensor de efeito Hall. Lendo esses pulsos e aplicando um pouco de matemática, podemos ler a taxa de fluxo de líquidos com precisão de até 3%. As roscas são G3/4 simples, então encontrar pontas com engate não será tão difícil.

**Instalação de Hardware**

Você vai precisar de Seeeduino / Arduino, Sensor de Fluxo de Água, resistor de 10K, uma protoboard e alguns jumpers.

A fiação do Sensor de Fluxo de Água é bem simples. Há 3 fios: Preto, Vermelho e Amarelo. Preto no pino de terra do Seeeduino, Vermelho no pino de 5v do Seeeduino. O fio amarelo precisará ser conectado a um resistor pull-up de 10k e então ao pino 2 do Seeeduino.

Aqui está um diagrama em Fritzing que fiz para mostrar como ligar tudo.

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Depois que tudo estiver ligado, você precisará carregar o seguinte código em seu Seeeduino. Depois de carregado e com algum fluido fluindo através do Sensor de Fluxo de Água, você pode abrir o monitor serial e ele exibirá a taxa de fluxo, atualizando a cada segundo.


**Programação**

```c
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

Você pode consultar nosso fórum para mais detalhes sobre leitura da taxa de fluxo de água com o Sensor de Fluxo de Água.

## Diagrama de Fiação
---

O diâmetro externo da rosca das conexões é 1,4mm.
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## Tabela de Saída
---

Frequência de pulso (Hz) no Teste Horizontal = 7.5Q, Q é a taxa de fluxo em L/min. (Resulta em faixa de +/- 3%)

|itens|valor|
|---|---|
|Nível alto de pulso de saída|	Tensão de sinal &gt;4,5 V( entrada DC 5 V)|
|Nível baixo de pulso de saída	|Tensão de sinal &lt;0,5V( entrada DC 5V)|
|Precisão	|3% (Taxa de fluxo de 1L/min a 10L/min)|
|Ciclo de trabalho do sinal de saída	|40%～60%|

## Projetos Relacionados

É uma pena que ainda não tenhamos nenhum demo sobre o Sensor de Fluxo de Água G1/2 no [Recipe](https://community.seeedstudio.com/projects.html#recipe).

Aqui apresentamos alguns projetos sobre o [Grove-Water Sensor](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

**O que é o Grove - Water Sensor**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Twig_-_Water_Sensor.jpg)

Este módulo de sensor de água faz parte do sistema Twig. Você pode usá-lo com os pinos analógicos para detectar a quantidade de contato induzido por água entre as trilhas aterradas e as trilhas do sensor.

Ele funciona tendo uma série de trilhas expostas conectadas ao terra e, intercaladas entre as trilhas aterradas, estão as trilhas do sensor.

As trilhas do sensor têm um resistor pull-up fraco de 1 MΩ. O resistor puxará o valor da trilha do sensor para alto até que uma gota de água coloque a trilha do sensor em curto com a trilha aterrada.

Este circuito funcionará com os pinos de E/S digitais do seu Arduino.


**Arduino Plant Warden**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/552c2c4f2e5a8.jpg)

Este projeto usa o Grove - Water Sensor para criar uma solução simples, mas eficaz, para regar plantas.
Como funciona:
- Exibir leituras do sensor de água e do sensor de temperatura na tela OLED
- Enviar alerta e ativar um driver de bomba quando a água estiver abaixo do limite.
- Fornecer variação de cor por 10 LEDs RGB.


[I want to make it.](https://community.seeedstudio.com/project_detail.html?id=103)

[More Awesome Projects by Water Sensor](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

**Compartilhe Seus Projetos Incríveis Conosco**

Nascido com o espírito de fazer e compartilhar, isso é o que acreditamos que faz um maker.
E só por causa disso a comunidade de código aberto pode ser tão próspera como é hoje.
Não importa quem você é e o que você fez, hacker, maker, artista ou engenheiro.
Contanto que você comece a compartilhar seus trabalhos com outros, você já está fazendo parte da comunidade de código aberto e fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco no [Recipe](https://community.seeedstudio.com/), e ganhe a chance de se tornar um Usuário Core da Seeed.

- Usuários Core são aqueles que demonstram alto interesse nos produtos Seeed e fazem contribuições significativas no Recipe.

- Nós cooperamos com nossos Usuários Core no desenvolvimento de nossos novos produtos, ou seja, os Usuários Core terão a chance de experimentar quaisquer novos produtos da Seeed antes de seu lançamento oficial e, em troca, esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E na maioria dos casos, quando nossos Usuários Core têm algumas boas ideias de fazer coisas, ofereceremos peças de hardware, serviços de PCBA, bem como suporte técnico. Além disso, uma cooperação comercial futura com os Usuários Core é altamente possível.

Para obter mais informações sobre Usuário Core, envie um e-mail para: recipe@seeed.cc

## Licenciamento
---

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição-CompartilhaIgual 3.0](https://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulte os arquivos de código-fonte para detalhes.


## FAQ

Aqui está o FAQ de Sensores, onde as pessoas podem encontrar perguntas e respostas para esse tipo de produto.

1. **De que materiais é feito o sensor de fluxo de água?**

  - Nylon com fibra, evitando ácido forte e base forte.

2. **O sensor de fluxo de água é seguro para água potável?**

  - Sim, ele já foi usado em máquina de água potável.

## Recurso
---
- [Water flow sensor datasheet.pdf](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)
- [Reading Water Flow rate with Water Flow Sensor](https://community.seeedstudio.com/topic_detail.html?id=575#p3632)
- [Water Flow rate display on LCD](https://github.com/practicalarduino/WaterFlowGauge)
- [datasheet for the material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Suporte Técnico & Discussão de Produto
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>