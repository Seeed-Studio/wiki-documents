---
description: Grove - Sensor de Poeira
title: Grove - Sensor de Poeira
keywords:
  - Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Dust_Sensor
sku: 101020012
last_update:
  date: 1/20/2023
  author: jianjing huang
createdAt: '2023-01-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Dust_Sensor/
---


![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust1.JPG)

Este Sensor de Poeira fornece uma boa indicação da qualidade do ar em um ambiente medindo a concentração de poeira. O nível de Material Particulado (nível de PM) no ar é medido contando o tempo de Low Pulse Occupancy (tempo de LPO) em uma determinada unidade de tempo. O tempo de LPO é proporcional à concentração de PM. Este sensor pode fornecer dados confiáveis para sistemas de purificação de ar; ele é sensível a MP com diâmetro de 1 μm.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/4df5kaaKa6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution

- Este sensor usa o método de contagem para medir a concentração de poeira, não o método de pesagem, e a unidade é pcs/L ou pcs/0.01cf.
- Por favor, preste atenção aos avisos listados aqui:
  - Por favor, mantenha-o na posição vertical.
  - É necessário um tempo de pré-aquecimento de 3 min ao usar pela primeira vez.
  - Operações arbitrárias podem causar danos inesperados.
  - Os seguintes componentes (marcados com retângulo vermelho) são usados apenas para a configuração de fábrica. Por favor, **NÃO** altere a configuração padrão.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## Versão

| Versão do Produto           | Alterações                                 | Data de Lançamento |
|------------------------------|-------------------------------------------|--------------------|
|Grove-Dust Sensor V1.0        | Inicial                                   | Nov 2012           |

## Recursos

- Detecção estável e sensível não só de fumaça de cigarro, mas também de poeira doméstica, que são gatilhos de asma em ambientes internos.
- O ar é auto-aspirado com a corrente do mecanismo de geração de ar com um aquecedor embutido.
- Manutenção fácil. Alta sensibilidade duradoura a longo prazo.
- Saída dupla para partículas com diâmetro acima de 1 mícron e 2,5 mícrons (aprox.).
- Mais compacto e leve, e fácil de instalar.

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

|Item| Norma| Unidade |
|----|-----|-------|
|VCC | 4.75~5.75| V    |
|Corrente em Standby| 90| mA|
|Faixa detectável de concentração| 0~28,000 / 0 ~ 8000 | pcs/litro / pcs/0.01cf|
|Faixa de Temperatura de Operação| 0~45| °C|
|Método de Saída| Lógica Negativa, saída digital, High: acima de 4.0V(Rev.2), Low: abaixo de 0.7V|-|
|Diâmetro das partículas detectadas| >1 |μm|
|Dimensões| 59(L) × 45(A) × 22(P) |mm|
|Faixa de Umidade| 95% rh ou menos|-|

:::note
    Na versão mais recente, a tensão de saída em nível alto foi alterada de 4.0V para 4.5V.
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Ideias de Aplicação

- Purificador de Ar
- Monitor de Qualidade do Ar
- Ar-Condicionado
- Ventilador / Exaustor

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

**Hardware**

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield|  Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **Passo 2.** Conecte o Grove-Dust Sensor à porta **D8** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/seeeduino_dust.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar o Grove-Dust Sensor diretamente ao Seeeduino como abaixo.
:::

| Seeeduino |  Grove-Loudness Sensor |
|-----------|-----------------|
| 5V        | Vermelho         |
| GND       | Preto            |
| NC        | Branco           |
| D8        | Amarelo          |

**Software**

- **Passo 1.** Por favor, copie o código abaixo para a IDE do Arduino e faça o upload para o Arduino. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```
int pin = 8;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 30000;//sampe 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

void setup() 
{
    Serial.begin(9600);
    pinMode(pin,INPUT);
    starttime = millis();//get the current time;
}

void loop() 
{
    duration = pulseIn(pin, LOW);
    lowpulseoccupancy = lowpulseoccupancy+duration;

    if ((millis()-starttime) > sampletime_ms)//if the sampel time == 30s
    {
        ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // Integer percentage 0=>100
        concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // using spec sheet curve
        Serial.print(lowpulseoccupancy);
        Serial.print(",");
        Serial.print(ratio);
        Serial.print(",");
        Serial.println(concentration);
        lowpulseoccupancy = 0;
        starttime = millis();
    }
}

```

- **Passo 2.** Neste programa, o Seeeduino amostra a duração total de "logic low" em 30 s, e essa duração ilustra a densidade de poeira do ambiente. Abra o Serial Monitor; podemos obter o valor da qualidade do ar detectado pelo sensor a partir da porta serial do PC.

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Serial.png)

**Terminologia：**

- **"Lowpulseoccupancy"** representa o Low Pulse Occupancy Time(LPO Time) detectado em 30 s. Sua unidade é microssegundos.

- **"Ratio"** reflete em que nível o tempo de LPO ocupa todo o tempo de amostragem.

- **"Concentration"** é um valor que tem um significado físico. Ele é calculado a partir do gráfico característico abaixo usando o tempo de LPO.
![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Characteristics.jpg)

- Aqui está um gráfico da concentração de poeira medida no escritório:

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Dust_sensor_4.jpg)

Podemos ver que a concentração de poeira é muito baixa à noite, mas é mais alta à tarde. Um limite pode ser definido quando a concentração estiver acima de um determinado valor. Além disso, se você quiser tornar o sensor mais sensível, pode adicionar um ventilador ao sensor e adicionar um resistor de 10 kΩ entre o pino 5 e o terra. Para mais informações, visite o [blog de A.J](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/).

### Brincar com Raspberry Pi

**Hardware**

- **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-Dust Sensor à porta **D2** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/rpi_dust.jpg)

**Software**

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Faça o git clone do repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 3.** Execute os comandos abaixo para monitorar a poeira.

```python
cd ~/GrovePi/Software/Python
python grove_dust_sensor.py
```

Aqui está o código grove_dust_sensor.py.

```python
import time
import grovepi
import atexit

atexit.register(grovepi.dust_sensor_dis)

print("Reading from the dust sensor")
grovepi.dust_sensor_en()
while True:
    try:
  [new_val,lowpulseoccupancy] = grovepi.dustSensorRead()
  if new_val:
   print(lowpulseoccupancy)
  time.sleep(5) 

    except IOError:
        print ("Error")

```

- **Passo 4.** Veremos o status da poeira como abaixo.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_dust_sensor.py 
Reading from the dust sensor
14029
2621
1725
1978
2533
1619
```

## Projetos Relacionados

Se você quiser fazer alguns projetos incríveis com o Grove - Dust Sensor, aqui está um projeto para referência.

**Air Quality Box**

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Overview0.png)

Esta seção é uma demonstração de IoT feita com Seeeduino e [Grove](https://www.seeedstudio.com/wiki/Grove_System).

Hoje em dia, está sendo dada mais atenção à qualidade do ar ambiental porque as pequenas partículas no ar ao redor podem colocar em sério risco a saúde das pessoas. Nós sempre obtemos as informações do meio ambiente a partir dos órgãos governamentais. Mas esse é o valor médio de toda a cidade/seção. Ele não consegue refletir com precisão o ambiente ao seu redor.

[![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Air-Quality-Test-Box/?ALLSTEPS)

## FAQs

**P1: Como o Grove - Dust Sensor (com lógica de 5V) pode ser usado com o Seeeduino Stalker (com lógica de 3,3V)?**

R1: O sinal de saída do Dust Sensor precisa ser reduzido para lógica de 3,3V para funcionar com o Seeeduino Stalker (ou qualquer placa similar). A saída do Dust Sensor é 0,7V para Nível Lógico Baixo e maior que 4,0V para Nível Lógico Alto. Você pode usar um divisor de tensão para reduzir a saída e torná-la compatível com a lógica de 3,3V ou usar um conversor de nível lógico TTL.

## Recursos

- **[Datasheet]** [Grove-Dust_sensor datasheet](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/Grove_-_Dust_sensor.pdf)
- **[Datasheet]** [De-construction of the Shinyei PPD42NS dust sensor Made by Tracy Allen](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf)
- **[Demo]**[Building a low-cost networked PM2.5 monitor](https://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/) -- Made by A.J.
- **[Demo]** [Measuring the Pickle Jr. – a modified PPD42 with an attached fan.](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/) -- Made by A.J.
- **[Demo]** [Testing the Shinyei PPD42NS](http://irq5.io/2013/07/24/testing-the-shinyei-ppd42ns/) -- Made by darell tan
- **[Demo]** [Air Quality Monitoring](http://www.howmuchsnow.com/arduino/airquality/grovedust/) -- Made by Chris Nafis

## Projetos

**Air Quality Box**: Monitore a qualidade do ar ao seu redor

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ye-xiaobo/air-quality-box-d7658a/embed' width='350'></iframe>

**Smart Crops: Implementando IoT na Agricultura Convencional!**: Nossa missão com a natureza é preservá-la, projetando e implementando tecnologias e métodos de monitoramento com a ajuda de IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**LoRa IoTea**: Um sistema automático de coleta de informações aplicado a plantações de chá. Faz parte da coleta inteligente de informações agrícolas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
