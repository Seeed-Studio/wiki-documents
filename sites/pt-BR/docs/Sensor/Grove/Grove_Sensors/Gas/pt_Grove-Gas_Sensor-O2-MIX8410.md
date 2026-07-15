---
description: Grove - Sensor de Gás O₂(MIX8410)
title: Grove - Sensor de Gás O₂(MIX8410)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Gas_Sensor-O2-MIX8410
sku: 101990680
last_update:
  date: 1/3/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-O2-MIX8410/
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/101990680_preview-34.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/101990680_preview-34.png" alt="pir" width={600} height="auto" /></p>

Grove - Oxygen Sensor(MIX8410) é um tipo de sensor para testar a concentração de oxigênio no ar, que é baseado no princípio da célula eletroquímica como trabalho original. Você pode saber claramente a concentração atual de oxigênio quando obtém valores de tensão de saída proporcionais à concentração de oxigênio e consulta o gráfico de característica linear de concentração de oxigênio. É muito adequado para detectar a concentração de oxigênio na proteção ambiental. Grove - Oxygen Sensor(MIX8410) é um módulo de reação orgânica, ele pode fornecer uma pequena corrente enquanto estiver exposto ao ar, não precisamos fornecer uma alimentação externa para ele, e a tensão de saída mudará conforme a corrente de tempo muda.

Grove - Oxygen Sensor(MIX8410) é uma nova versão lançada em comparação com a antiga Grove - Oxygen Sensor(ME2-O2-Ф20). Então, em quais áreas fizemos atualizações? A nova versão possui tratamento anti-vazamento avançado, o que reduz muito a probabilidade de vazamento e resolve o problema de vazamento da versão antiga. A corrente de saída da nova versão é menor, portanto o consumo de eletrólito é mais lento e a vida útil do sensor é mais longa. Além disso, os pinos inferiores, dimensões físicas, placa de acionamento superior e métodos de uso das versões nova e antiga são os mesmos.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html"><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></a></p>

:::tip
    Lançamos o [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que o ajudará a escolher o sensor de gás que melhor se adapta às suas necessidades.
:::

## Características

- Alta sensibilidade (0.1±0.03 mA) com saída linear
- Alta estabilidade com tempo de resposta &lt;10s
- Design de proteção ambiental
- Tecnologia avançada anti-vazamento que reduz muito a probabilidade de vazamento
- Baixa corrente de saída para maior vida útil do sensor

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

|Itens | Parâmetro |
|-------|---------------|
|Faixa de medição | 0-25% |
|Concentração de sobrecarga| 30%|
|Sensibilidade | 0.05~0.15 mA(no ar) |
|Repetibilidade  | ±2% |
|Tempo de resposta(t90) | ＜ 10s |
|Estabilidade| ＜ 2% / mês |
|Carga recomendada| 100Ω |
|Deriva de longo prazo|  ＜ 5% / ano|
|Faixa de temperatura | -20 °C~50 °C |
|Tempo de pré-aquecimento | 20 minutos|
|Temperatura de armazenamento| 0-25 °C|
|Tensão de entrada|3.3V / 5V|
|Vida útil de detecção | dois anos(ar) |

:::note
    Os condutores podem ser soldados durante a instalação, e é proibido que a solda toque o sensor; 
    O tempo de envelhecimento após ligar não deve ser inferior a 30 min; 
    Evite o contato de longo prazo com solventes orgânicos voláteis; 
    O ambiente de uso ou armazenamento não pode ser um ambiente ácido-base.
:::

## Hardware

**Conversor de Tensão**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>

O XC6206332MR converte entrada de 3.3v/5v para 3.3v.

**Fonte de Corrente**

<!-- ![](https://files.seeedstudio.com/products/101990680/currentsource.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/currentsource.png" alt="pir" width={600} height="auto" /></p>

O MIX8410-O2 é uma fonte de corrente. A tensão do ponto de rótulo #3 é R7 * Current(MIX8410-O2).

**Amplificador**

<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png" alt="pir" width={600} height="auto" /></p>

O ganho do amplificador é 241, a tensão SIGA é 241 vezes a tensão do ponto de rótulo #3.

<!-- ![](https://files.seeedstudio.com/products/101990680/outputcurrent.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/outputcurrent.png" alt="pir" width={600} height="auto" /></p>

Aqui está a correlação entre a corrente de saída do MIX8410 e a concentração de O2. A corrente de O2 com concentração de 20% é em torno de 96uA. Então a tensão SIGA do Grove @ 20% de concentração = R7 *Current(MIX8410)* 241 = 100 *96uA* 241 = 2.314V.

:::warning
    A faixa de corrente do MIX8410 é 8uA~100uA devido a diferenças individuais. Portanto, a tensão de saída do sensor também será diferente. Por favor, exponha o sensor ao ar fresco e obtenha a leitura da tensão de saída como referência no início. Você pode consultar [este exemplo](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip) para obter a calibração no início e então ler os valores do sensor.   
:::

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Este capítulo é baseado em Win10 e Arduino IDE 1.7.9
:::

Este novo método de uso do Grove Gas Sensor O2(MIX8410) é exatamente o mesmo do antigo [ME2-O2-Ф20](https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-O2/).

Este é um módulo fácil de usar, o que você precisa fazer é conectar o pino de sinal (o pino AMARELO do cabo Grove) à entrada ADC do seu controlador. Se não houver ADC interno no seu controlador, o [Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) é recomendado.

Aqui mostraremos como este Grove - Oxygen Sensor(MIX8410) funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os seguintes itens:

| Seeeduino V4 | Grove - Oxygen Sensor(MIX8410) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/101990680overview.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### Conexão

Graças ao benefício dos módulos da série Grove, você não precisa fazer soldagem ou usar protoboard, o que você precisa fazer é conectar os módulos à porta correta do Base Shield. Para esta demonstração, temos apenas um módulo Grove.

- Grove - Oxygen Sensor(MIX8410) é um módulo de entrada analógica, nós o conectamos à **A0** nesta demonstração

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>

### Envie o código para o Arduino

Copie o código abaixo para o Arduino IDE.

```
// Grove - Gas Sensor(O2) test code
// Note:
// 1. It need about about 5-10 minutes to preheat the sensor
// 2. modify VRefer if needed

const float VRefer = 3.3;       // voltage of adc reference

const int pinAdc   = A0;

void setup() 
{
    // put your setup code here, to run once:
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) Test Code...");
}

void loop() 
{
    // put your main code here, to run repeatedly:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, Concentration of O2 is ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout samples are with reference to 3.3V
    float MeasuredVout = readO2Vout();

    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //when its output voltage is 2.0V,
    float Concentration = MeasuredVout * 0.21 / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}

```

Em seguida, escolha a placa e a porta COM corretas e clique no botão Upload; esse processo leva alguns segundos.

### Obter dados

Abra o monitor serial da sua Arduino IDE e você receberá os dados agora.

:::warning
    É necessário cerca de 20~30 minutos para pré-aquecer o sensor, caso contrário você obterá um valor maior.
:::

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## Primeiros Passos com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Gas Sensor O₂(MIX8410)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/MIX8410py.png" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - Gas Sensor O₂(MIX8410) à porta analógica A0 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para criar o código em Python.

```
cd grove.py/grove/
nano MIX8410.py


```

- **Passo 4**. Copie o código a seguir para dentro do arquivo:

```python
import time , sys, math
from adc import ADC

__all__ = ["GroveMix8410Sensor"]

VRefer = 3.3
total = 0
Measuredvout = 0

class GroveMix8410:



    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def Mix8410(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*3.3/1024.0
            Mix8410Value = voltage* 0.21 *100/ 2.0
            return Mix8410Value
        else:
            return 0

Grove = GroveMix8410

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveMix8410(int(sys.argv[1]))
    print('Detecting 02 value...')

    while True:
        print('Mix8410 Value: {0}'.format(sensor.Mix8410))
        time.sleep(1)

if __name__ == '__main__':
    main()  

```

- **Passo 5**. Use Ctrl+O para salvar e Ctrl+X para sair.
- **Passo 6**. Execute o seguinte para rodar:

```
python MIX8410.py 0
```

:::success
    Se tudo correr bem, você poderá ver o seguinte resultado.
:::

```python

pi@raspberrypi:~/grove.py/grove$ python MIX8410.py 0

Detecting 02 value...
Mix8410 Value: 23.6419354839
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.8451612903
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258


```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [MIX8410 Datasheet](https://files.seeedstudio.com/products/101990680/MIX841datasheetV1.6.pdf)
- [Esquemático em Arquivo Eagle](http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip)
- [Repositório Github deste Documento](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
- [PDF SCH](https://files.seeedstudio.com/products/101990680/MIX841v1.0_SCH_200811.pdf)

## Projetos

**LoRa IoTea**: Um sistema de coleta automática de informações aplicado a plantações de chá. Ele faz parte da coleta inteligente de informações agrícolas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Uma Caixa de Plantas com Iluminação e Chuva** Você nunca viu uma forma assim de regar sua planta.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
