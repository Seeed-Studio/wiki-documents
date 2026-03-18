---
title: Sensor de Fluxo de Água G3-4
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/G3-4_Water_Flow_sensor/
slug: /G3-4_Water_Flow_sensor
sku: 314150003
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/G3-4_Water_Flow_sensor/
---
![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/P21408651.jpg)

O sensor de fluxo de água é composto por um corpo de válvula de plástico, um rotor de água e um sensor de efeito Hall. Quando a água flui através do rotor, o rotor gira. Sua velocidade muda com diferentes taxas de fluxo. O sensor de efeito Hall gera o sinal de pulso correspondente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)]( https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

## Especificação

---
<table>
  <tbody>
    <tr>
      <td>Tensão mínima de operação</td>
      <td>DC 4.5V</td>
    </tr>
    <tr>
      <td>Corrente máxima de operação</td>
      <td>15mA(DC 5V)</td>
    </tr>
    <tr>
      <td width="400px">Tensão de operação</td>
      <td width="400px">5V～24V</td>
    </tr>
    <tr>
      <td>Faixa de vazão</td>
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
      <td>≤2.0MPa</td>
    </tr>
    <tr>
      <td>Temperatura de armazenamento</td>
      <td>-25℃～+80℃</td>
    </tr>
    <tr>
      <td>Umidade de armazenamento</td>
      <td>25%～95%RH</td>
    </tr>
  </tbody>
</table>

## Dimensões Mecânicas

---

### Componentes do Sensor

<table>
  <tbody>
    <tr>
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
      <td width={150}>PA66+33%fibra de vidro</td>
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
      <td>PA66+33%fibra de vidro</td>
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
      <td>Anel de vedação eletrônico</td>
      <td>1</td>
      <td>Borracha</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>9</td>
      <td>Tampa</td>
      <td>1</td>
      <td>PA66+33%fibra de vidro</td>
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
    </tr>
  </tbody>
</table>

## Exemplo de Uso

---
<font>Nota: Este exemplo foi abstraído do fórum e foi feito por Charles Gantt. Agradecemos por sua contribuição. Vamos ver como isso funciona.</font>

### Lendo a taxa de fluxo de água com o sensor de fluxo de água

Isto é parte de um projeto em que tenho trabalhado e pensei em compartilhá-lo aqui, já que houve alguns tópicos sobre como ler a taxa de fluxo de água em litros por hora usando o sensor de fluxo de água encontrado no Depo da Seeed Studio. Ele usa uma simples roda giratória que gera pulsos em um sensor de efeito Hall. Lendo esses pulsos e aplicando um pouco de matemática, podemos ler a taxa de fluxo de líquidos com precisão de até 3%. As roscas são simples G3/4, então encontrar extremidades com engate (barb) não será tão difícil.

**Instalação de Hardware**

Você vai precisar de um Seeeduino / Arduino, Sensor de Fluxo de Água, resistor de 10K, uma protoboard e alguns jumpers.

A fiação do Sensor de Fluxo de Água é bem simples. Há 3 fios: Preto, Vermelho e Amarelo.
Preto para o pino de terra do Seeeduino
Vermelho para o pino de 5v do Seeeduino
O fio amarelo precisará ser conectado a um resistor pull-up de 10k e então ao pino 2 do Seeeduino.

Aqui está um diagrama feito no Fritzing que eu fiz para mostrar como ligar tudo.

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Depois de ter tudo ligado, você precisará fazer o upload do seguinte código para o seu Seeeduino. Quando o upload for concluído e você tiver algum fluido passando pelo Sensor de Fluxo de Água, poderá abrir o monitor serial e ele exibirá a taxa de fluxo, atualizando a cada segundo.

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
    Calc = (NbTopsFan * 60 / 5.5); //(Pulse frequency x 60) / 5.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Você pode consultar nosso fórum para mais detalhes sobre [Lendo a taxa de fluxo de água com o sensor de fluxo de água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

## Diagrama de Fiação

---
O diâmetro externo da rosca usada nas conexões é 1,4 mm.

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Wfs-wiring.jpg)

## Tabela de Saída

---
Frequência de pulso (Hz) no teste horizontal = 5,5Q, sendo Q a taxa de fluxo em L/min. (Resultados na faixa de +/- 3%)

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

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/G34_Flow_rate_to_frequency.jpg)

## Perguntas Frequentes

---
Aqui está o FAQ de Sensores; as pessoas podem vir aqui para encontrar perguntas e respostas para esse tipo de produto.

**De quais materiais é feito o sensor de fluxo de água?**

Náilon com fibra, evitando ácido forte e base forte.

**O sensor de fluxo de água é seguro para água potável?**

Sim, ele já foi usado em máquina de água potável.

## Recursos

---

* [Lendo a taxa de fluxo de água com o sensor de fluxo de água](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

* [Exibição da taxa de fluxo de água em LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

* [folha de dados para o material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Projetos Relacionados

---
É uma pena que ainda não tenhamos nenhum demo sobre o Sensor de Fluxo de Água G3/4 na [Recipe](https://www.seeedstudio.com/recipe/).

Publique seu projeto incrível sobre o Sensor de Fluxo de Água G3/4 para <font color="#FF0000">ganhar um cupom de US$100!</font>. Sinta-se à vontade para entrar em contato conosco: [recipe@seeed.cc](mailto:recipe@seeed.cc)

Aqui apresentamos alguns projetos sobre o [Grove-Water Sensor](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

### O que é Grove - Water Sensor

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Twig-Water_Sensor.jpg)

Este módulo de sensor de água faz parte do sistema Twig. Você pode usá-lo com os pinos analógicos para detectar a quantidade de contato induzido por água entre os trilhos aterrados e os trilhos do sensor.

Ele funciona tendo uma série de trilhas expostas conectadas ao terra e, intercaladas entre as trilhas aterradas, estão as trilhas do sensor.

As trilhas do sensor possuem um resistor pull-up fraco de 1 MΩ. O resistor puxará o valor da trilha do sensor para alto até que uma gota de água faça curto entre a trilha do sensor e a trilha aterrada.

Este circuito funcionará com os pinos de E/S digitais do seu Arduino.

### Arduino Plant Warden

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/552c2c4f2e5a8.jpg)

Este projeto usa o Grove - Water Sensor para criar uma solução simples, mas eficaz, para regar plantas.

Como funciona:

* Exibir leituras do sensor de água e do sensor de temperatura na tela OLED

* Enviar alerta e ativar um driver de bomba quando a água estiver abaixo do limite.

* Fornecer variação de cor por 10 LEDs RGB.

[**Quero fazê-lo.**](https://www.seeedstudio.com/recipe/102-arduino-plant-warden.html)

[**Mais Projetos Incríveis com Water Sensor**](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

### Compartilhe Seus Projetos Incríveis Conosco

Nascido com o espírito de fazer e compartilhar, é isso que acreditamos que faz um maker.

E é apenas por causa disso que a comunidade de código aberto pode ser tão próspera como é hoje.

Não importa o que você é e o que você fez, hacker, maker, artista ou engenheiro.

Contanto que você comece a compartilhar seus trabalhos com outras pessoas, você está fazendo parte da comunidade de código aberto e fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco no [Recipe](https://www.seeedstudio.com/recipe/), e ganhe a chance de se tornar um Usuário Core da Seeed.

* Usuários Core são aqueles que demonstram grande interesse nos produtos Seeed e fazem contribuições significativas no Recipe.
* Nós cooperamos com nossos Usuários Core no desenvolvimento de nossos novos produtos, isto é, em outras palavras, os Usuários Core terão a chance de experimentar qualquer novo produto da Seeed antes de seu lançamento oficial e, em troca, esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E, na maioria dos casos, quando nossos Usuários Core têm boas ideias para fazer coisas, ofereceremos peças de hardware, serviços de PCBA, bem como suporte técnico. Além disso, uma cooperação comercial futura com os Usuários Core é altamente possível.

<font color="#FF0000">Para obter mais informações sobre Usuário Core, envie um e-mail para:</font> [recipe@seeed.cc](mailto:recipe@seeed.cc)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
