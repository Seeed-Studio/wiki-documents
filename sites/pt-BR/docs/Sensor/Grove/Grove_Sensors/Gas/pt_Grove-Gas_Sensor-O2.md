---
description: Grove - Sensor de Gás (O₂)
title: Grove - Sensor de Gás (O₂)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Gas_Sensor-O2
sku: 101020002
last_update:
  date: 1/3/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-O2/
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Sensor de Oxigênio (ME2-O2-Ф20) é um tipo de sensor para testar a concentração de oxigênio no ar, que é baseado no princípio da célula eletroquímica para o funcionamento original. Você pode saber claramente a concentração atual de oxigênio quando obtiver valores de tensão proporcionais à concentração de oxigênio e consultar o gráfico de característica linear de concentração de oxigênio. É muito adequado para detectar a concentração de oxigênio na proteção ambiental. Grove - Sensor de Gás (O2) é um módulo de reação orgânica, ele pode fornecer uma pequena corrente ao ser colocado no ar, não precisamos fornecer alimentação externa para ele, e a tensão de saída mudará conforme a corrente ao longo do tempo mudar.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)

:::tip
    Lançamos o [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que ajudará você a escolher o sensor de gás que melhor atenda às suas necessidades.
:::
## Características

- Alta precisão
- Alta sensibilidade
- Ampla faixa de linearidade
- Forte capacidade de anti-interferência
- Confiabilidade extraordinária

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Especificação

|Itens | Parâmetro |
|-------|---------------|
|Faixa de Medição | 0-25% |
| Vida Útil de Detecção | dois anos |
|Sensibilidade | 0.05~0.15 mA (no ar) |
|Faixa de Temperatura | -20 oC~50 oC |
|Tempo de Pré-aquecimento | 20 minutos|
|Tensão de entrada|3.3V / 5V|

## Hardware

**Conversor de Tensão**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>

O XC6206332MR converte entrada de 3.3v/5v para 3.3v.

**Fonte de corrente ME2-O2**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png" alt="pir" width={600} height="auto" /></p>

O ME2-O2 é uma fonte de corrente. A tensão do ponto marcado #3 é R7 * Corrente (ME2-O2).

**Amplificador**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png" alt="pir" width={600} height="auto" /></p>

O ganho do amplificador é 121, a tensão SIGA é 121 vezes a tensão do ponto marcado #3.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png" alt="pir" width={600} height="auto" /></p>

Aqui está a correlação entre a corrente de saída do ME2-O2 e a concentração de O2. A corrente de O2 com concentração de 20% é em torno de 120uA. Então a tensão SIGA do Grove @ 20% de concentração = R7 *Corrente (ME2-O2)* 121 = 100 *120uA* 121 = 1.452V.

:::warning
    A faixa de corrente do ME2-O2 é 80uA~160uA devido a diferenças individuais. Portanto, a tensão de saída do sensor também será diferente. Exponha o sensor ao ar fresco e obtenha a leitura da tensão de saída como referência no início. Você pode consultar [este exemplo](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip) para obter a calibração no início e então ler os valores do sensor.   
:::

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Este capítulo é baseado em Win10 e Arduino IDE 1.6.9
:::
Este é um módulo fácil de usar; o que você precisa fazer é conectar o pino de sinal (o pino AMARELO do cabo Grove) à entrada ADC do seu controlador. Se não houver ADC interno no seu controlador, o [Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) é recomendado.

Aqui mostraremos como este Grove - Sensor de Gás (O2) funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os seguintes itens:

| Seeeduino V4 | Grove - Sensor de Oxigênio (ME2-O2-Ф20) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/gas_sensor_210.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### Conexão

Graças à vantagem dos módulos da série Grove, você não precisa fazer soldagem ou usar protoboard; o que você precisa fazer é conectar os módulos à porta correta do Base Shield. Para esta demonstração, temos apenas um módulo Grove.

- Grove - Sensor de Oxigênio (ME2-O2-Ф20) é um módulo de entrada analógica, nós o conectamos ao **A0** nesta demonstração

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg" alt="pir" width={600} height="auto" /></p>

### Enviar o código para o Arduino

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
    Serial.println("Grove - Gas Sensor Test Code...");
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

Depois escolha a placa e a porta COM corretas e clique no botão Upload; esse processo leva alguns segundos.

### Obter dados

Abra o monitor serial do seu Arduino IDE, e você obterá os dados agora.

:::warning
    São necessários cerca de 20~30 minutos para pré-aquecer o sensor, caso contrário você obterá um valor maior.
:::
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [ME2-O2 Datasheet](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/ME2-O2-D20%200-25%25%20Manual%20%28ver1.2%29.pdf)
- [Esquemático em arquivo Eagle](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip)
- [Repositório Github deste Documento](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)

## Projetos

**LoRa IoTea**: Um sistema de coleta automática de informações aplicado a plantações de chá. Faz parte da coleta inteligente de informações agrícolas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Uma Caixa de Plantas com Iluminação e Chuva** Você nunca viu uma forma assim de regar sua planta.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

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

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte via APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
