---
description: Grove - Sensor de Gás (MQ5)
title: Grove - Sensor de Gás (MQ5)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Gas_Sensor-MQ5
sku: 101020056
last_update:
  date: 1/3/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-MQ5/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Twig-Gas_Sensor.bmp) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Twig-Gas_Sensor.bmp" alt="pir" width={600} height="auto" /></p>


O módulo Grove - Sensor de Gás (MQ5) é útil para detecção de vazamento de gás (em casa e na indústria). Ele é adequado para detectar <font color="Blue">H2, LPG, CH4, CO, Álcool</font>. Devido à sua alta sensibilidade e rápido tempo de resposta, as medições podem ser feitas o mais rápido possível. A sensibilidade do sensor pode ser ajustada usando o potenciômetro.

<div class="admonition danger">
<p class="admonition-title">Note</p>
O valor do sensor apenas reflete a tendência aproximada da concentração de gás dentro de uma faixa de erro permissível, ele NÃO representa a concentração exata de gás. A detecção de certos componentes no ar geralmente requer um instrumento mais preciso e caro, o que não pode ser feito com um único sensor de gás. Se o objetivo do seu projeto é obter a concentração de gás em um nível muito preciso, então não recomendamos este sensor de gás.
</div>


<!-- |Sensor|Gas Type|Adquira agora|
|---|---|---|
|MQ2|Combustible Gas, Smoke|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)|
|MQ3|Alcohol Vapor|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|
|MQ5|LPG, Natural Gas, Town Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|
|MQ9|Carbon Monoxide, Coal Gas, Liquefied Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html)| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Tipo de Gás</h4></td>
    <td><h4>Adquira Agora</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>Gás combustível, Fumaça</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>Vapor de álcool</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>GLP, Gás Natural, Gás de Cidade</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>Monóxido de Carbono, Gás de Coque, Gás Liquefeito</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>


:::tip
    Lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), ele ajudará você a escolher o sensor de gás que melhor atende às suas necessidades.
:::
## Recursos


-  Ampla faixa de detecção
-  Estável e longa vida útil
-  Resposta rápida e alta sensibilidade

## Especificação

| Item  | Parâmetro               | Min | Típico     | Máx   | Unidade |
|-------|-------------------------|-----|------------|-------|--------|
| VCC   | Tensão de trabalho      | 4.9 | 5          | 5.1   | V      |
| PH    | Consumo de aquecimento  | 0.5 | -          | 800   | mW     |
| RL    | Resistência de carga    |     | ajustável  |       |        |
| RH    | Resistência do aquecedor| -   | 31±10%     | -     | Ω      |
| Rs    | Resistência de detecção | 10  | -          | 60    | kΩ     |
| Scope | Concentração de detecção| 200 | -          | 10000 | ppm    |

## Aplicações

-  Detecção de vazamento de gás.
-  Brinquedos.


## Visão Geral de Hardware

Este é um sensor de saída analógica. Ele precisa ser conectado a qualquer soquete Analógico no Grove Base Shield. Os exemplos usados neste tutorial fazem uso do pino analógico A0. Conecte este módulo à porta A0 do Base Shield.

É possível conectar o módulo Grove ao Arduino diretamente usando jumpers, utilizando a conexão mostrada na tabela abaixo:

| Arduino   | Sensor de Gás |
|-----------|---------------|
| 5V        | VCC           |
| GND       | GND           |
| NC        | NC            |
| Analog A0 | SIG           |

A tensão de saída do sensor de gás aumenta quando a concentração de gás aumenta. A sensibilidade pode ser ajustada variando o potenciômetro. <font color="Red">Observe que o melhor tempo de pré-aquecimento para o sensor é acima de 24 horas</font>. Para informações detalhadas sobre o sensor MQ-5, consulte o datasheet fornecido na seção **Resources**.


## Plataformas Suportadas


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={500} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={500} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={500} height="auto" /></p>| -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::


##Getting Started

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Sensor de Gás (MQ5) |
|--------------|-------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira Agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira Agora</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html" target="_blank">Adquira Agora</a>|



<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Read_Gas_Sensor_data_MQ2_MQ5.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Read_Gas_Sensor_data_MQ2_MQ5.jpg" alt="pir" width={600} height="auto" /></p>


Conecte o Grove - Sensor de Gás (MQ5) à porta A0, como mostrado na imagem acima.

#### Detecção de Gás : Exemplo Básico

Neste exemplo, o sensor é conectado ao pino A0. A tensão lida do sensor é exibida. Esse valor pode ser usado como um limite para detectar qualquer aumento/diminuição na concentração de gás.

<div class="admonition note">
<p class="admonition-title">Note</p>
Você precisa de uma ferramenta extra para encontrar um determinado limite para várias condições do ar. E então definir o limite no código.
</div>

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float sensorValue;

    sensorValue = analogRead(A0);
    sensor_volt = sensorValue/1024*5.0;

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    delay(1000);
}
```

#### Medição : Aproximação

Este exemplo demonstra uma forma de conhecer a concentração aproximada de gás. De acordo com o datasheet dos sensores MQ5, essas equações são testadas para condições padrão e não são calibradas. Elas podem variar com alterações de temperatura ou umidade.

1. Mantenha o Sensor de Gás em um ambiente de ar limpo. Faça o upload do programa abaixo.

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float R0;  // Get the value of R0 via in H2
    float sensorValue;

        /*--- Get a average data by testing 100 times ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
        /*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // omit *RL
    R0 = RS_air/6.5; // The ratio of RS/R0 is 6.5 in a clear air from Graph (Found using WebPlotDigitizer)

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);
}
```

2. Em seguida, abra o monitor serial da Arduino IDE. Anote o valor de R0 e este precisa ser usado no próximo programa. Por favor, anote o R0 depois que a leitura se estabilizar.

<font color="Red">Substitua o R0 abaixo pelo valor de R0 testado acima </font>. Exponha o sensor a qualquer um dos gases listados acima.

```
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // omit *RL

          /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/R0;  // ratio = RS/R0
          /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

Agora, podemos obter a concentração de gás a partir da figura abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Gas_Sensor_4.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Gas_Sensor_4.png" alt="pir" width={600} height="auto" /></p>


De acordo com a figura, podemos ver que a concentração mínima que podemos testar é 200ppm e a máxima é 10000ppm, em outras palavras, podemos obter uma concentração de gás entre 0,02% e 1%. Entretanto, não podemos fornecer uma fórmula porque a relação entre a razão e a concentração é não linear.



### Brinque com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Gas Sensor(MQ5)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - Gas Sensor(MQ5) à porta A0 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.


<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ5/image/With_Hat.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ5/image/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    No passo 3 você pode conectar o Grove - Gas Sensor(MQ5) a **qualquer Porta Analógica**, mas certifique-se de alterar o comando com o número da porta correspondente.
:::

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para escrever o código.

```
cd grove.py/grove
nano grove_gas_sensor_mq5.py

```
Então você deve copiar o código a seguir neste arquivo e pressionar ++ctrl+x++ para sair e salvar.


```python

import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ5:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ5(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ5


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ5(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ5))
        time.sleep(.3)

if __name__ == '__main__':
    main()

```

- **Passo 4**. Execute os comandos abaixo para rodar o código.

```python 

python grove_gas_sensor_mq5.py  0

```


:::success
    Se tudo correr bem, você poderá ver o seguinte resultado
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq5.py  0
Detecting...
Gas value: 28
Gas value: 28
Gas value: 27
Gas value: 26
Gas value: 26
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq5.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq5.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt

```


Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

:::note
        Você pode ter notado que, para a porta analógica, o número do pino na serigrafia é algo como **A0, A1**, porém no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário pode haver conflitos de pinos.
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

**Leitura Sugerida / Referências**

-   Como escolher um Sensor de Gás
-   [O que é LEL](https://en.wikipedia.org/wiki/Flammability_limit)

**Esquemático**

-   [Grove Gas Sensor - arquivos EAGLE (Esquemático e Placa)](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip)
-   [Grove Gas Sensor - Esquemático em PDF](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Schematic.pdf)

**Datasheet**

-   [MQ-5 Datasheet](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/MQ-5.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5) -->

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
Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


