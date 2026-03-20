---
description: Grove - Sensor Laser PM2.5 (HM3301)
title: Grove - Sensor Laser PM2.5 (HM3301)
keywords:
  - Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Laser_PM2.5_Sensor-HM3301
sku: 101020613
last_update:
  date: 1/20/2023
  author: jianjing huang
createdAt: '2023-01-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Laser_PM2.5_Sensor-HM3301/
---

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/main.jpg)

O Grove - Sensor Laser PM2.5 (HM3301) é uma nova geração de sensor de detecção de poeira a laser, utilizado para detecção contínua e em tempo real de partículas de poeira no ar.

Diferente do sensor de detecção de poeira por sucção, o HM-3301 utiliza de forma inovadora pás de ventilador para impulsionar o ar, e o ar que passa pela câmara de detecção é usado como amostra de teste para realizar testes contínuos e em tempo real sobre poeira de diferentes tamanhos de partículas no ar.

Este módulo é adequado para detectores de poeira, purificadores de ar inteligentes, condicionadores de ar inteligentes, ventiladores inteligentes, testes de qualidade do ar, medidores de neblina, monitoramento ambiental e produtos e aplicações relacionados.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/zQj8RRJcZsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Alta sensibilidade a partículas de poeira de 0,3 μm ou maiores
- Detecção em tempo real e contínua da concentração de poeira no ar
- Baseado em tecnologia de espalhamento de luz a laser, as leituras são precisas, estáveis e consistentes
- Baixo ruído
- Consumo de energia ultrabaixo

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|3.3V / 5V|
|Temperatura de operação|-10～60℃|
|Umidade de operação|10%～90%RH (sem condensação)|
|Tamanho de partícula|3 canais -- 1,0µm, 2,5µm, 10µm |
|Faixa<br />(valor padrão de PM2.5)|1~500µg/ m<sup>3</sup> (Faixa efetiva)<br />1000 µg/ m<sup>3</sup> (Faixa máxima)|
|Resolução|Concentração: 1µg/ m<sup>3</sup> <br />Concentração de contagem: 1s/0.1L|
|Tempo de estabilização|30 segundos após a energização|
|Interface|I2C|
|Endereço I2C|0x40|

## Aplicações típicas

- Purificador de ar / condicionador de ar
- Equipamento de teste de qualidade do ar
- Análise industrial de valores de PM
- Detecção e análise de poeira e fumaça
- Detector em tempo real de PM2.5, PM10, TSP
- Contador de partículas multicanal
- Equipamento de teste ambiental

## Visão geral de hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/pin_out.jpg)

## Princípio de funcionamento

O Sensor de Poeira HM-3301 é baseado na avançada teoria de espalhamento de Mie. Quando a luz passa através de partículas com quantidade igual ou maior do que o comprimento de onda da luz, ocorre o espalhamento da luz. A luz espalhada é concentrada em um fotodiodo de alta sensibilidade, que é então amplificado e analisado por um circuito. Com um modelo matemático e algoritmo específicos, são obtidas a concentração numérica e a concentração em massa das partículas de poeira.

O sensor de poeira HM-3301 é composto por componentes principais como um ventilador, uma fonte de laser infravermelho, um espelho de condensação, um tubo fotosensível, um circuito de amplificação de sinal e um circuito de triagem de sinal.

![HM-3301 Module structure diagram](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/principle.jpg "Diagrama da estrutura do módulo HM-3301")

## Plataformas suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Sensor Laser PM2.5 (HM3301) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">Get One Now</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Sensor Laser PM2.5 (HM3301) à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/connect.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente este módulo ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - Sensor Laser PM2.5 (HM3301) |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_PM2_5_sensor_HM3301](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri-lo das três maneiras a seguir：
    1. Abra-o diretamente na IDE do Arduino pelo caminho: **File --> Examples --> PM2.5 sensor --> basic_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path1.jpg)

    2. Abra-o no seu computador clicando em **basic_demo.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_PM2_5_sensor_HM3301-master\examples\basic_demo**, em que **XXXX** é o local onde você instalou a IDE do Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path2.jpg)

    3. Ou, você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na IDE do Arduino.

```cpp

#include "Seeed_HM330X.h"

#ifdef  ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif


HM330X sensor;
u8 buf[30];


const char *str[]={"sensor num: ","PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",
                    "PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",
                    "PM10 concentration(Atmospheric environment,unit:ug/m3): ",
                    };

err_t print_result(const char* str,u16 value)
{
    if(NULL==str)
        return ERROR_PARAM;
    SERIAL.print(str);
    SERIAL.println(value);
    return NO_ERROR;
}

/*parse buf with 29 u8-data*/
err_t parse_result(u8 *data)
{
    u16 value=0;
    err_t NO_ERROR;
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=1;i<8;i++)
    {
         value = (u16)data[i*2]<<8|data[i*2+1];
         print_result(str[i-1],value);

    }
}

err_t parse_result_value(u8 *data)
{
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=0;i<28;i++)
    {
        SERIAL.print(data[i],HEX);
        SERIAL.print("  ");
        if((0==(i)%5)||(0==i))
        {
            SERIAL.println(" ");
        }
    }
    u8 sum=0;
    for(int i=0;i<28;i++)
    {
        sum+=data[i];
    }
    if(sum!=data[28])
    {
        SERIAL.println("wrong checkSum!!!!");
    }
    SERIAL.println(" ");
    SERIAL.println(" ");
    return NO_ERROR;
}


/*30s*/
void setup()
{
    SERIAL.begin(115200);
    delay(100);
    SERIAL.println("Serial start");
    if(sensor.init())
    {
        SERIAL.println("HM330X init failed!!!");
        while(1);
    }

}



void loop()
{
    if(sensor.read_sensor_value(buf,29))
    {
        SERIAL.println("HM330X read result failed!!!");
    }
    parse_result_value(buf);
    parse_result(buf);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    delay(5000);
}

```

:::caution
O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Passo 4.** Envie o demo. Se você não sabe como fazer o upload do código, por favor verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina a taxa de transmissão para **115200**.

:::tip
        Se tudo correr bem, quando você abrir o Serial Monitor ele poderá mostrar como abaixo:
:::

```c
Serial start
0   
FF  0  0  0  2D   
0  3F  0  45  0   
22  0  32  0  3B   
0  0  0  0  0   
0  0  0  0  0   
0  0   

sensor num: 0
PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): 45
PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): 63
PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): 69
PM1.0 concentration(Atmospheric environment,unit:ug/m3): 34
PM2.5 concentration(Atmospheric environment,unit:ug/m3): 50
PM10 concentration(Atmospheric environment,unit:ug/m3): 59
```

:::note
O **valor padrão de concentração de massa de material particulado** refere-se ao valor de concentração de massa obtido pela conversão de densidade de partículas metálicas industriais como partículas equivalentes, e é adequado para uso em oficinas de produção industrial e similares. A **concentração de material particulado no ambiente atmosférico** é convertida pela densidade dos principais poluentes no ar como partículas equivalentes, e é adequada para ambientes atmosféricos internos e externos comuns. Portanto, você pode ver que há dois conjuntos de dados acima.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Laser PM2.5 Sensor (HM3301) Eagle Files](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip)

- **[Zip]** [Seeed_PM2_5_sensor_HM3301 Software Library](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301/archive/master.zip)

- **[PDF]** [Datasheet HM3301](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/HM-3300%263600_V2.1.pdf)

## Projetos

**Visualização de Poluição Atmosférica**：O problema da poluição do ar atrai cada vez mais atenção. Desta vez tentamos monitorar PM2.5 com Wio LTE e o novo Laser PM2.5 Sensor.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

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

Com o SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
