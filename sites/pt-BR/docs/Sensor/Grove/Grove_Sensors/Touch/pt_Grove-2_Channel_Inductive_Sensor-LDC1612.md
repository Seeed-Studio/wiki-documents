---
description: Grove - Sensor indutivo de 2 canais (LDC1612)
title: Grove - Sensor indutivo de 2 canais (LDC1612)
keywords:
  - Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-2_Channel_Inductive_Sensor-LDC1612
sku: 101020599
last_update:
  date: 1/19/2023
  author: jianjing Huang
createdAt: '2023-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-2_Channel_Inductive_Sensor-LDC1612/
---


![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/main.jpg)

O Grove - Sensor indutivo de 2 canais é baseado no LDC1612 da Texas Instruments (TI), um conversor de indutância para digital (LDC) de 28 bits para soluções de detecção indutiva. Com múltiplos canais e suporte para detecção remota, o LDC1612 permite que os benefícios de desempenho e confiabilidade da detecção indutiva sejam alcançados com custo e consumo de energia mínimos. Indutância é um efeito causado pelo campo magnético de um condutor percorrido por corrente atuando de volta sobre o condutor. Portanto, ao medir a indutância, este sensor pode detectar a proximidade de condutores, especialmente metais próximos.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- 2 canais com acionamento de sensor correspondente
- Fácil de usar: configuração mínima necessária
- Múltiplos canais suportam compensação ambiental e de envelhecimento
- Posição do sensor remoto de >20 cm suporta operação em ambientes agressivos
- Parâmetro da bobina: Diâmetro: 16 mm/ Voltas: 20

## Especificação

|Item|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura de junção|-55～150℃|
|Faixa de frequência do sensor suportada|1kHz~10MHz|
|Melhor faixa de detecção|15mm|
|Interface|I2C|
|Endereço I2C|0x2B(defult)<br />0x2A(configurable)|
|Tamanho do pacote|C: 140mm L: 90mm A: 10mm|
|Peso bruto|12g|

Quando o pino ADDR é colocado em nível baixo, o endereço I2C do LDC é 0x2A; quando o pino ADDR é colocado em nível alto, o endereço I2C do LDC é 0x2B.

## Aplicações típicas

- Botões rotativos em eletrônicos de consumo, eletrodomésticos e automotivo
- Codificadores lineares e rotativos
- Botões em eletrônicos domésticos, vestíveis, manufatura e automotivo
- Teclados em manufatura e eletrodomésticos
- Botões deslizantes em produtos de consumo
- Detecção de metal em aplicações industriais e automotivas
- POS e EPOS
- Medidores de fluxo em produtos de consumo e eletrodomésticos

## Visão geral de hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/pinout_back.jpg)

:::note
**1.** Defina Rb (unidade de resistência - kom), L (unidade de indutância - uH), C (unidade de capacitância - pf) pelas APIs se você não usar a bobina indutiva que fornecemos. Usado para calcular e definir o registrador de frequência correspondente do sensor.

**2.** Há um pad INT na placa do sensor. Ele vai para nível baixo quando a conversão é concluída, caso contrário permanece em nível alto, mas você deve configurar o registrador correspondente do sensor.
:::

## Princípio de funcionamento

O LDC1612 funciona com base na medição dos parâmetros do oscilador LC, formado pela trilha de cobre da PCB e pelo capacitor.

O LDC1612 consegue medir a quantidade de energia que precisa fornecer para manter a oscilação LC quando um objeto condutor magneticamente acoplado ao oscilador LC se aproxima. Como a perda de potência do circuito oscilador é proporcional à impedância do objeto condutor, e o valor de impedância é afetado pela distância do objeto, isso pode então ser usado para determinar a distância entre o objeto e o oscilador LC. Nesse caso, a trilha de cobre da PCB pode ser vista como um sensor de impedância.

## Plataformas suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação de compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - 2-Channel Inductive Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html)|

:::note
 **1** Conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - 2-Channel Inductive Sensor (LDC1612) à porta  **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC via um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/With_ard.jpg)

Agora, demonstraremos como executar o código para detecção de distância de moeda; o procedimento é similar se você quiser executar outros programas.

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove-2-Channel_Inductive_Sensor-LDC1612](https://github.com/Seeed-Studio/Seeed_LDC1612) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri-lo das seguintes três maneiras：
    1. Abra-o diretamente na IDE do Arduino pelo caminho: **File --> Examples -->Seeed Inductive Sensor LDC1612--> coin_test_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/arduino1.png)

    2. Abra-o no seu computador clicando em **basic_demo.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\examples\coin_test_demo\coin_test_demo.ino**, em que **XXXX** é o local onde você instalou a IDE do Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/arduino2.png)

    3. Ou, você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

**Demo da moeda**
Este programa permite ao usuário detectar a distância da moeda até a trilha de cobre.

```cpp


#include "Seeed_LDC1612.h"

LDC1612 sensor;
const u32 DISTANCE_00=44000000;  //do not detect
const u32 DISTANCE_00_01=60000000;  // distance:<1mm
const u32 DISTANCE_01_05=45000000;  // distance:1mm~5mm
const u32 DISTANCE_05_10=44250000; // distance:5mm~10mm
const u32 DISTANCE_10_15=44080000; // distance:10mm~15mm
const u32 DISTANCE_15_20=44020000; // distance:15mm~20mm

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("can't detect sensor!");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*Get channel 0 result and parse it.*/
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /*Test the distance between the coin and the sensor. 
    Note that the accuracy is for reference only.
    Please suspend the sensor during the test! */
    if(0!=result_channel1)
    {
        if(result_channel1<DISTANCE_00)
        {
            Serial.println("There is no coin here!");
        }

        if(result_channel1>=DISTANCE_00_01)
        {
            Serial.println("The distance between the COIN is 0~1mm");
        }

        if(result_channel1<DISTANCE_00_01&&result_channel1>=DISTANCE_01_05)
        {
            Serial.println("The distance between the COIN is 1~5mm");
        }

        if(result_channel1<DISTANCE_01_05&&result_channel1>=DISTANCE_05_10)
        {
            Serial.println("The distance between the COIN is 5~10mm");
        }

        if(result_channel1<DISTANCE_05_10&&result_channel1>=DISTANCE_10_15)
        {
            Serial.println("The distance between the COIN is 10~15mm");
        }

        if(result_channel1<DISTANCE_10_15&&result_channel1>=DISTANCE_15_20)
        {
            Serial.println("The distance between the COIN is 15~20mm");
        }

        if(result_channel1<DISTANCE_15_20&&result_channel1>=DISTANCE_00)
        {
            Serial.println("The distance between the COIN is more than 2mm");
        }

    }

    delay(1000);
}


```

:::caution
O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

:::tip
  Se tudo correr bem, você verá o seguinte resultado
:::

```cpp

The distance between the COIN is 5~10mm
The distance between the COIN is 5~10mm
There is no coin here!
The distance between the COIN is 10~15mm
The distance between the COIN is 5~10mm
The distance between the COIN is 1~5mm
The distance between the COIN is 5~10mm
The distance between the COIN is 5~10mm

```

**Demo básico**

Código para basic_demo.ino

```cpp


#include "Seeed_LDC1612.h"

LDC1612 sensor;


void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("can't detect sensor!");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*Get channel 0 result and parse it.*/
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /*sensor result value.you can make a lot of application according to its changes.*/
    if(0!=result_channel1)
    {
        Serial.print("result_channel0 is ");
        Serial.println(result_channel1);
    }

    delay(1000);
}



```

:::success
    Se tudo correr bem, você verá o seguinte resultado
:::

```cpp

start!
17:06:16.418 -> fsensor =3.74
17:06:16.418 -> result_channel0 is 44387993
result_channel0 is 44387847
result_channel0 is 43476136
result_channel0 is 43799295
result_channel0 is 48988429
result_channel0 is 48828492
result_channel0 is 48682647
result_channel0 is 48845443

```

**Demo multicanal**

Este exemplo mostra a medição de múltiplos canais e observe que o LDC1612 suporta dois canais.

Você pode conectar a bobina 1 como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/link.png)

Código para muti_channel_demo.ino

```cpp

#include "Seeed_LDC1612.h"
#include "math.h"

LDC1612 sensor;

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("start!");

    sensor.init();

    /*Enable INT-PIN,Interrupted after measurement is completed.*/
    //sensor.set_ERROR_CONFIG(0x01);

    /*multiple channel use case configuration.*/
    if(sensor.LDC1612_mutiple_channel_config())
    {
        Serial.println("can't detect sensor!");
        while(1);
    }
}


void loop()
{
    u32 result_channel0=0;
    u32 result_channel1=0;

    /*shows the status of sensor.*/
    //sensor.get_sensor_status();

    /*sensor result value.you can make a lot of application according to its changes.*/
    sensor.get_channel_result(0,&result_channel0);
    sensor.get_channel_result(1,&result_channel1);

    if(0!=result_channel0)
    {
        Serial.print("result_channel0 is ");
        Serial.println(result_channel0);
    }
    if(0!=result_channel1)
    {
        Serial.print("result_channel1 is ");
        Serial.println(result_channel1);
    }
    delay(1000);
}



```

:::tip
        Se tudo correr bem, você verá o seguinte resultado
:::

```cpp

start!
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> result_channel0 is 44399351
17:04:34.063 -> result_channel1 is 43599310
result_channel0 is 44648052
17:04:35.078 -> result_channel1 is 43803483
result_channel0 is 44786926
17:04:36.056 -> result_channel1 is 43990824
result_channel0 is 44266733
17:04:37.069 -> result_channel1 is 43305067
result_channel0 is 44767222
17:04:38.092 -> result_channel1 is 43553768
result_channel0 is 46081099
17:04:39.068 -> result_channel1 is 45089497
result_channel0 is 44681202
17:04:40.083 -> result_channel1 is 43207588
can't detect coil Coil Inductance!!!
17:04:41.098 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!
17:04:42.106 -> result_channel0 is 89478485
can't detect coil Coil Inductance!!!
17:04:43.081 -> result_channel0 is 49469095
result_channel0 is 51374493
17:04:44.113 -> result_channel1 is 49895644
can't detect coil Coil Inductance!!!
17:04:45.090 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!

```

:::note
Nos exemplos basic_demo e muti_channel_demo, você deve ter em mente que cada saída corresponde à intensidade da indutância. Existe uma relação funcional entre a saída e a intensidade da indutância; se você tiver interesse em mais informações, talvez queira consultar o [Datasheet LDC1612](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/LDC1612.pdf) fornecido pela Texas Instrument(TI).
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) Arquivos Eagle](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip)

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) Biblioteca de Software](https://github.com/Seeed-Studio/Seeed_LDC1612/archive/master.zip)

- **[PDF]** [Datasheet LDC1612](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/LDC1612.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
