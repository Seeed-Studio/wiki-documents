---
description: Grove - Sensor de CO2
title: Grove - Sensor de CO2
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-CO2_Sensor
sku: 101020067
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-CO2_Sensor/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Grove_CO2_Sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Grove_CO2_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


O módulo Grove - CO2 Sensor é um sensor infravermelho de CO2 com alta sensibilidade e alta resolução. O sensor infravermelho de CO2 MH-Z16 é um sensor pequeno e de uso geral, que utiliza o princípio de infravermelho não dispersivo (NDIR) para detectar o CO2 presente no ar, com boa seletividade, independência de oxigênio, longa vida útil, sensor de temperatura integrado, compensação de temperatura, com saída UART, fácil de usar. Ele pode ser amplamente utilizado em HVAC e monitoramento de qualidade do ar interno, monitoramento de processos industriais e segurança, monitoramento de processos de produção agrícola e pecuária.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html)

<div class="admonition warning">
<p class="admonition-title">Cuidado</p>
Observe que o valor do sensor apenas reflete a tendência aproximada da concentração de gás dentro de uma faixa de erro admissível. Ele NÃO representa a concentração exata de gás. A detecção de certos componentes no ar geralmente requer um instrumento mais preciso e caro, o que não pode ser feito com um único sensor de gás. Se o seu projeto tem como objetivo obter a concentração de gás em um nível muito preciso, então não recomendamos este sensor de gás.
</div>


:::tip
    Lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que irá ajudar você a escolher o sensor de gás que melhor atende às suas necessidades.
:::
Especificações
-------------

-   Faixa de medição de 0–2000 partes por milhão (PPM)
-   Resolução de 1 PPM em 0–2000 partes por milhão (PPM)
-   Exatidão de 200 PPM
-   Tempo de aquecimento de 3 minutos
-   Tempo de resposta &lt; 90s
-   Temperatura de operação de 0 a 50℃
-   Umidade de operação 0% ~ 90% RH
-   Temperatura de armazenamento -20–60℃
-   Tensão de operação de 4,5 V a 6 V DC
-   Corrente máxima menor que 100 mA, corrente média menor que 50 mA
-   Modo de saída UART

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Plataformas Suportadas
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Demonstração
-------------

Conecte o módulo ao Grove Shield usando a imagem a seguir como referência e use o programa abaixo para obter a tensão.

Observe que o melhor tempo de pré-aquecimento do sensor é de cerca de 180 s. Para informações detalhadas sobre o sensor, consulte o datasheet.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/5.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/5.jpg" alt="pir" width={600} height="auto" /></p>


```
/*
  This test code is write for Arduino AVR Series(UNO, Leonardo, Mega)
  If you want to use with LinkIt ONE, please connect the module to D0/1 and modify:

  // #include <SoftwareSerial.h>
  // SoftwareSerial s_serial(2, 3);      // TX, RX

  #define sensor Serial1
*/


#include <SoftwareSerial.h>
SoftwareSerial s_serial(2, 3);      // TX, RX

#define sensor s_serial

const unsigned char cmd_get_sensor[] =
{
    0xff, 0x01, 0x86, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x79
};

unsigned char dataRevice[9];
int temperature;
int CO2PPM;

void setup()
{
    sensor.begin(9600);
    Serial.begin(115200);
    Serial.println("get a 'g', begin to read from sensor!");
    Serial.println("********************************************************");
    Serial.println();
}

void loop()
{
    if(dataRecieve())
    {
        Serial.print("Temperature: ");
        Serial.print(temperature);
        Serial.print("  CO2: ");
        Serial.print(CO2PPM);
        Serial.println("");
    }
    delay(1000);
}

bool dataRecieve(void)
{
    byte data[9];
    int i = 0;

    //transmit command data
    for(i=0; i<sizeof(cmd_get_sensor); i++)
    {
        sensor.write(cmd_get_sensor[i]);
    }
    delay(10);
    //begin reveiceing data
    if(sensor.available())
    {
        while(sensor.available())
        {
            for(int i=0;i<9; i++)
            {
                data[i] = sensor.read();
            }
        }
    }

    for(int j=0; j<9; j++)
    {
        Serial.print(data[j]);
        Serial.print(" ");
    }
    Serial.println("");

    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])
    {
        return false;
    }

    CO2PPM = (int)data[2] * 256 + (int)data[3];
    temperature = (int)data[4] - 40;

    return true;
}
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Uart_co2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Uart_co2.jpg" alt="pir" width={600} height="auto" /></p>


Calibração
------------
Se você precisar calibrar o sensor, faça o upload do código abaixo para o seu Arduino. 

```
// Grove - Co2 Sensor calibration

#include <SoftwareSerial.h>
SoftwareSerial sensor(A5, A4);      // TX, RX


const unsigned char cmd_calibrate[] = 
{
    0xff, 0x87, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf2
};

void setup()
{
    sensor.begin(9600);
    Serial.begin(115200);
    Serial.println("begin to calibrate");

    for(int i=0; i<sizeof(cmd_calibrate); i++)
    {
        sensor.write(cmd_calibrate[i]);
    }

    Serial.println("calibrate done");
}

void loop()
{
    // nothing to do
}
```

:::warning
    Pré-aqueça o sensor por pelo menos 5 minutos antes de calibrar e certifique-se de que o sensor esteja em ar fresco. 
:::
Referência
---------

-   350~450 ppm: Ambiente externo geral
-   350~1000 ppm: O ar está fresco e a respiração é tranquila
-   1000~2000 ppm: O ar está estagnado e provoca sonolência
-   5000 ppm: Limite permissível de exposição para um dia de trabalho de 8 h

Recursos
---------

-   [MH-Z16_CO2 datasheet_ZH_CN.pdf](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2.pdf)
-   [MH-Z16_CO2 datasheet_EN.pdf](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2_datasheet_EN.pdf)
-   [Avaliação de Risco à Saúde para Dióxido de Carbono](http://www.blm.gov/style/medialib/blm/wy/information/NEPA/cfodocs/howell.Par.2800.File.dat/25apxC.pdf)


## Projetos

**LoRa IoTea**: Um sistema automático de coleta de informações aplicado a plantações de chá. É parte da coleta inteligente de informações agrícolas.

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
Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo bem-sucedido projeto industrial.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

