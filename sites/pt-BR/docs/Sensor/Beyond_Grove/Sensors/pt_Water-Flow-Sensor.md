---
title: Sensor de Fluxo de Água
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Water-Flow-Sensor/
slug: /Water-Flow-Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Water-Flow-Sensor/
---

<div align="center">
  <figure>
    <img src="https://static-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2017-06bazaar483771_1.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

O sensor de fluxo de água consiste em um corpo de cobre, um rotor de água e um sensor de efeito Hall. Quando a água flui através do rotor, o rotor gira e sua velocidade muda com a diferente taxa de fluxo. E o sensor de efeito Hall gera o sinal de pulso correspondente. Este é adequado para detectar fluxo em bebedouros ou máquinas de café. **Mais importante ainda, a vida útil do modelo de cobre é maior do que a do corpo de plástico.**

## Características

- Compacto, fácil de instalar
- Alto desempenho de vedação
- Sensor de efeito Hall de alta qualidade
- Compatível com RoHS

## Especificação

|Parâmetros|Valor|
|---|---|
|Dimensões |0mm x0mm x0mm|
|Peso| G.W 79g|
|Bateria |Excluída|
|Tensão mínima de trabalho| DC 4.5V|
|Corrente máxima de trabalho| 15mA (DC 5V)|
|Tensão de trabalho |DC 5V~15V|
|Dimensões da interface| G1/2Inch|
|Faixa de vazão |1~25L/min|
|Frequência |F=(11*Q)Q=L/MIN±3%|
|Faixa de erro |(1~30L\MIN) ±3%|
|Capacidade de carga |≤10mA (DC 5V)|
|Temperatura de operação| 0 ~ 80℃|
|Temperatura do líquido |≤120℃|
|Umidade de operação |35%～90%RH|
|Pressão da água| ≤1.75MPa|
|Descrição do material |H57Copper+POM|
|Temperatura de armazenamento |-25～+ 80℃|
|Umidade de armazenamento |25%～95%RH|
|Nível alto do pulso de saída |&gt;DC 4.7V (Input Voltage DC5V)|
|Nível baixo do pulso de saída |&lt;DC 0.5V (Input Voltage DC5V)|
|Ciclo de trabalho do pulso de saída| 50%±10%|

## O que é um sensor (medidor) de fluxo de água

Usamos um sensor de fluxo de água para medir a vazão de água. A vazão de água é o volume de fluido que passa por unidade de tempo. As pessoas costumam usar sensores de fluxo de água para controle automático de aquecedores de água, máquinas de café DIY, máquinas de venda de água, etc. Há uma variedade de sensores de fluxo de diferentes princípios, mas para makers usando Arduino ou Raspberry Pi, o sensor de fluxo mais comum é baseado em um dispositivo Hall. Por exemplo, os sensores de fluxo de água mais clássicos [YF-S402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) e [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html) dependem de sensores Hall.

## Como o sensor de fluxo de água funciona

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/DSC03966-1030x686.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 1</b>. <i>Todos os componentes do YF-402</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/how-does-water-flow-sensor-work-1030x599.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 2</b>. <i>Princípio de funcionamento do sensor de fluxo de água</i></figcaption>
</figure>
</div>

É bem simples por dentro. Os principais componentes são o sensor de efeito Hall, a roda da turbina e o ímã. A água entra pela entrada e sai pela saída. A corrente de água faz a roda girar, e o ímã na roda gira com ela. A rotação do campo magnético aciona o sensor Hall, que gera ondas quadradas de nível alto e baixo (pulso).

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/Water-flow-sensor-principle-1.gif" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 3</b>. <i>Princípio de funcionamento do sensor de fluxo de água</i></figcaption>
</figure>
</div>

A cada volta da roda, o volume de água que flui através dela é uma certa quantidade, assim como o número de ondas quadradas geradas. Portanto, podemos calcular o fluxo de água contando o número de ondas quadradas (pulso).

## Plataforma suportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

#### Materiais necessários

|Placa Seeeduino |Grove Base Shield|Sensor de Fluxo de Água|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_s.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/base_shield.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Water_Flow_Sensor/IMG/Water-Flow-Sensor.png)
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2.html)|[Adquira agora](https://www.seeedstudio.com/catalogsearch/result/?q=Water+flow+sensor)|

#### Conexão de Hardware

Para a série YF, há 3 fios:

- Vermelho para Vcc
- Preto para GND
- Amarelo para saída de pulso.

Para a placa baseada em Atmega 328 como a [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html). Existem dois pinos digitais que podem ser usados como interrupção. Pino digital 2 para **interrupt 0**, e pino digital 3 para ***interrupt 1**. Neste artigo, usamos o pino **D2** para detectar o pulso gerado pelo sensor de fluxo de água. Se você estiver usando Seeeduino + [Grove base shield](https://www.seeedstudio.com/Base-Shield-V2.html), basta conectar o sensor de fluxo de água ao conector D2. Se você estiver usando outra placa Arduino, use cabos jumpers para conectar ao pino correto.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-34.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 4</b>. <i>Sensor de fluxo de água conectado ao Arduino</i></figcaption>
</figure>
</div>

:::tip
    Conecte o cabo USB e o conector do Sensor de Fluxo de Água à interface da placa Seeeduino com cuidado, caso contrário você pode danificar a porta.
:::

#### Software

Claro, você pode usar digitalread() na função **LOOP** para ler a saída do sensor de fluxo de água. Some um ao contador sempre que um nível alto for lido. No entanto, essa abordagem não é em tempo real, e o programa exige um certo tempo de espera para cada execução, durante o qual novos pulsos não são detectados. Para aplicações que exigem resposta em tempo real, normalmente usamos interrupção. Sempre que a borda de subida do pulso é detectada, uma interrupção é acionada, somando mais um à contagem.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-33.png" alt="Water-Flow-Sensor'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

Para mais detalhes sobre **interrupt** consulte [attachinterrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/).

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Conecte a placa Grove Base com o Sensor de Fluxo de Água à placa Seeeduino e conecte a placa Seeeduino ao PC por meio de um cabo USB.

- **Passo 2.** Em seguida, abra sua IDE Arduino e copie o código abaixo. Por fim, faça o download do código para o Arduino.

:::note
O código aqui **FUNCIONA** para os modelos mais clássicos YF – S201, YF - S402 e outros Sensores de Fluxo de Água da Seeed, assim como o princípio de funcionamento dos sensores de fluxo de água.
:::

#### Código de Software

```cpp
/*
YF‐ S201 Water Flow Sensor
Water Flow Sensor output processed to read in litres/hour
Adaptation Courtesy: www.hobbytronics.co.uk
*/

volatile int flow_frequency; // Measures flow sensor pulsesunsigned 

int l_hour; // Calculated litres/hour
unsigned char flowsensor = 2; // Sensor Input
unsigned long currentTime;
unsigned long cloopTime;

void flow () // Interrupt function

{
   flow_frequency++;
}

   void setup()
 {
   pinMode(flowsensor, INPUT);
   digitalWrite(flowsensor, HIGH); // Optional Internal Pull-Up
   Serial.begin(9600);
   attachInterrupt(0, flow, RISING); // Setup Interrupt
   sei(); // Enable interrupts
   currentTime = millis();
   cloopTime = currentTime;
}

   void loop ()
{
   currentTime = millis();// Every second, calculate and print litres/hour
   if(currentTime >= (cloopTime + 1000))
   {
      cloopTime = currentTime; // Updates cloopTime
      // Pulse frequency (Hz) = 7.5Q, Q is flow rate in L/min.
      l_hour = (flow_frequency * 60 / 7.5); // (Pulse frequency x 60 min) / 7.5Q = flowrate in L/hour
      flow_frequency = 0; // Reset Counter
      Serial.print(l_hour, DEC); // Print litres/hour
      Serial.println(" L/hour");
   }
}
```

:::tip
Se tudo correr bem, abra a ferramenta de monitor serial e ajuste a taxa de transmissão para 9600. À medida que a água passar, o valor do fluxo será impresso na janela apropriada.
:::

## A fórmula para o cálculo do sensor de fluxo de água

Na seção de código, usamos a seguinte fórmula, então como essa fórmula foi criada?

```cpp
l_hour = (flow_frequency * 60 / 7.5)
```

Mencionamos anteriormente que a cada revolução da roda, o volume de fluido que flui através é certo. Ao mesmo tempo, o número de pulsos gerados por revolução da roda também é uma quantidade definida. Assim, podemos estabelecer uma equação entre o número de pulsos e o fluxo de água.

Para o YF-S201, para cada litro de água que flui, o sensor Hall gera 450 pulsos. Vamos fazer um pouco de matemática aqui. 450 pulsos para 1 litro, então cada pulso significa 1/450 de litro de água fluindo através. Tomamos o volume total de líquido que flui através do sensor de fluxo de água em um certo tempo **t**(unidade s) como **V_total**(unidade L), e o número total de pulsos detectados como **N**. Então obtemos:

```cpp
V_total(L) = N* 1/450(L) 
```

Além disso, o volume total de fluido que flui através do sensor de fluxo de água é igual à **taxa de fluxo de água (Q - unidade L/s)** multiplicada pelo tempo **t**(unidade s).

```cpp
V_total(L) = Q(L/s)*t(s) 
```

Então obtemos:

```cpp
N* 1/450 = Q(L/s)*t(s) 
N/t = 450 * Q(L/s) 
```

**N/t** é justamente a frequência **f**, então:

```cpp
f = 450*Q(L/s); 
Q(L/s) = f/450; 
Q(L/min) = f*60/450 = f/7.5 
Q(L/hour) = f*60*60/450 = f*60 /7.5 
```

Para o YF – S402, para cada litro de água que flui, o sensor Hall gera 4380 pulsos. Portanto, a fórmula deve ser:

```cpp
f = 4380*Q(L/s); 
Q(L/s) = f/4380; 
Q(L/min) = f*60/4380 = f/73 
Q(L/hour) = f*60*60/4380 = f*60 /73 
```

## Sensores de Fluxo de Água na Seeed

:::tip
Há inúmeros sensores de fluxo de água à venda na Seeed, incluindo [YF - 402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) e [YF - S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html). Além disso, oferecemos uma variedade de sensores de fluxo de água com diferentes dimensões, faixas de detecção, materiais etc., conforme a seguir:
:::

|   Tipo   | Dimensões(DN) | Tensão de Trabalho | Faixa de Taxa de Fluxo | Comprimento |    Macho & Fêmea   | Comprimento da Rosca | Material |
|:--------:|:--------------:|:------------------:|:----------------------:|:-----------:|:------------------:|:--------------------:|:--------:|
|   [YF-B1](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  44mm  |     Duplo Macho    |       10mm       |  Cobre  |
|   [YF-B2](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B2-p-2879.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  50mm  | Macho entrada Fêmea saída |       10mm       |  Cobre  |
|   [YF-B3](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B3-p-2880.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Duplo Macho    |       18mm       |  Cobre  |
|   [YF-B4](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B4-p-2881.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  | Macho entrada Fêmea saída |       10mm       |  Cobre  |
|   [YF-B5](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B5-p-2882.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  50mm  |     Duplo Macho    |       10mm       |  Cobre  |
|   [YF-B6](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B6-p-2883.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  60mm  |     Duplo Macho    |       11mm       |  Cobre  |
|   [YF-B7](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B7-p-2884.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Duplo Macho    |       10mm       |  Cobre  |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-Enclosure-p-1915.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |    -   |     Duplo Macho    |         -        |  Plástico |
|   [G3&4](https://www.seeedstudio.com/G3-4-Water-Flow-Sensor-p-1083.html)   |      DN20      |    5V~24V(DC)   |    1~60L/min    |    -   |     Duplo Macho    |         -        |  Plástico |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |  60mm  |     Duplo Macho    |       13mm       |  Plástico |
|   [G1&8](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)   |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plástico |
| [M11*1.25](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plástico |

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
