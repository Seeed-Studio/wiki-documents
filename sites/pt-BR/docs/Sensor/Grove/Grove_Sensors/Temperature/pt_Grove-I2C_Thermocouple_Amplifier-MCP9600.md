---
description: Grove - Amplificador de Termopar I2C (MCP9600)
title: Grove - Amplificador de Termopar I2C (MCP9600)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-I2C_Thermocouple_Amplifier-MCP9600
sku: 101020594
last_update:
  date: 1/4/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Thermocouple_Amplifier-MCP9600/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Main.jpg" /></div>

O Grove - I2C Thermocouple Amplifier (MCP9600) é um conversor de termopar para digital com compensação de junta fria integrada e protocolo de comunicação I2C. Este módulo foi projetado para ser usado em conjunto com um termopar tipo K. Os termopares têm uma faixa de medição muito maior do que os termistores. Por exemplo, este [termopar tipo K](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) em nosso site tem uma faixa de medição de -50℃ a +600℃.

Também fornecemos a função de alerta para este módulo; você pode usar o pino de alerta programável para fornecer um sinal de interrupção ao controlador.

Novamente, este módulo não pode funcionar sozinho, ele deve funcionar com um termopar tipo K. Se você não tiver um, pode considerar o [Thermocouple Temperature Sensor K Type-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) em nosso bazar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-%28MCP9600%29-p-3199.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Thermocouple Amplifier (MCP9600) | Inicial                                                                                               | Ago 2018      |

## Recursos

- Compensação de Junta Fria Integrada
- Tipos Suportados (designados por NIST ITS-90): Tipo K, J, T, N, S, E, B e R
- Quatro Saídas de Alerta de Temperatura Programáveis:
  - Monitorar a junta quente ou fria
  - temperaturas
  - Detectar temperaturas ascendentes ou descendentes
  - Até 255°C de histerese programável
- Filtro digital programável para temperatura
- Baixo consumo de energia

:::note
O Grove - I2C Thermocouple Amplifier (MCP9600) suporta os tipos K, J, T, N, S, E, B e R em hardware, porém, no momento, nossa biblioteca não suporta nenhum outro tipo de termopar exceto o tipo K.
:::

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V/5V|
|Temperatura Ambiente|-40℃ ~ +125℃|
|Temperatura de Armazenamento|-65℃ ~ +150℃|
|Temperatura Máx. da Junta|+150℃|
|Precisão da Junta Quente|±1.5°C (Máx.)|
|Resolução de Medição|Juntas quente e fria: 0.0625°C (típica)|
|Interface|I2C|
|Endereço I2C|0x60(padrão) / 0x67(opcional)|
|Tamanho|C: 40mm L: 20mm A: 18mm|
|Peso|4.8g|
|Tamanho da Embalagem|C: 130mm L: 85mm A: 20mm|
|Peso Bruto|11g|

## Aplicações

- Gestão térmica petroquímica
- Equipamentos de medição portáteis
- Gestão térmica de equipamentos industriais
- Fornos
- Monitor térmico de motores industriais
- Racks de detecção de temperatura

## Visão Geral de Hardware

### Mapa de Pinos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map_back.jpg" /></div>

### Esquemático

**Alimentação**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_1.jpg" /></div>

A faixa de tensão de operação do MCP9600 é de 2.7V ~ 5.5V, usamos um chip de conversão de energia *XC6206P332MR-G* para fornecer 3.3V estáveis para o MCP9600.

**Conector de Entrada**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic.jpg" /></div>

Devido aos pequenos níveis de sinal envolvidos, tomamos muitas medidas para filtrar o ruído.

- **1--L1,L2**  Usamos termopar de até 1 metro de comprimento. Fios tão longos podem ser considerados antenas, que receberão interferência de campo elétrico espacial e gerarão ruído de alta frequência. Portanto, usamos duas indutâncias para filtrar o ruído de alta frequência.

- **2--C1**  É fortemente recomendado pelo fabricante do chip adicionar um capacitor diferencial cerâmico SMD de 100nF, colocado entre os pinos T+ e T-, para filtrar o ruído nas linhas do termopar.

- **3--D1** Usamos o supressor de tensão bidirecional duplo SZNUP2105LT3G para proteger este módulo contra ESD (descarga eletrostática).

**Circuito de conversor de nível bidirecional**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_2.jpg" /></div>

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferentes de um barramento I2C. O barramento I<sup>2</sup>C deste sensor usa 3.3V; se o barramento I<sup>2</sup>C do Arduino usar 5V, este circuito será necessário. No esquemático acima, **Q1** e **Q5** são MOSFETs de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atuam como chaves bidirecionais. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - I2C Thermocouple Amplifier |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - I2C Thermocouple Amplifier (MCP9600) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC via cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/connect.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente este módulo ao Seeeduino como abaixo.
:::

| Seeeduino     |  Cabo Grove |Grove - I2C Thermocouple Amplifier       |
|---------------|-------------------------|--------|
| GND            |     Preto               |GND |
| 5V / 3.3V          |   Vermelho                    | VCC |
| SDA           | Branco                   |  SDA  |
| SCL           | Amarelo                  |  SCL  |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_MCP9600](https://github.com/Seeed-Studio/Seeed_MCP9600) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri‑lo das três maneiras a seguir：
    1. Abra-o diretamente na IDE do Arduino pelo caminho: **File --> Examples --> Grove Temperature sensor MCP9600 --> MCP9600_4channel_INT_demo**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path.jpg" /></div>

    2. Abra-o no seu computador clicando em **MCP9600_4channel_INT_demo.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_MCP9600-master\examples\MCP9600_4channel_INT_demo**, em que **XXXX** é o local onde você instalou a IDE do Arduino.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path_1.jpg" /></div>

    3. Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

```cpp
#include "Seeed_MCP9600.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

MCP9600 sensor;

/**@brief interruption cfg.
 * 
 * 
 * */
err_t sensor_INT_config()
{
    err_t ret=NO_ERROR;
    CHECK_RESULT(ret,sensor.set_filt_coefficients(FILT_MID));

    for(int i=0;i<4;i++)
    {
        /*Conver temp num to 16bit data*/
        CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));
        /*Set hysteresis.for example,set hysteresis to 2℃,when the INT limitation is 30℃,interruption will be generated when 
        the temp ecceed limitation,and the interruption flag will stay unless the temp below 30-2(limitation-hysteresis) 28℃. */
        CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 

         /*Set when interruption generated the pin's status*/
        CHECK_RESULT(ret,sensor.set_alert_bit(i,ACTIVE_LOW));

        CHECK_RESULT(ret,sensor.clear_int_flag(i));

        /*default is comparator mode*/
        CHECK_RESULT(ret,sensor.set_alert_mode_bit(i,COMPARE_MODE));

        /*Set alert pin ENABLE.*/
        CHECK_RESULT(ret,sensor.set_alert_enable(i,ENABLE));



    }    

    /*device cfg*/
    CHECK_RESULT(ret,sensor.set_cold_junc_resolution(COLD_JUNC_RESOLUTION_0_25));
    CHECK_RESULT(ret,sensor.set_ADC_meas_resolution(ADC_14BIT_RESOLUTION));
    CHECK_RESULT(ret,sensor.set_burst_mode_samp(BURST_32_SAMPLE));
    CHECK_RESULT(ret,sensor.set_sensor_mode(NORMAL_OPERATION));

    return NO_ERROR;
}


err_t get_temperature(float *value)
{
    err_t ret=NO_ERROR;
    float hot_junc=0;
    float junc_delta=0;
    float cold_junc=0;
    bool stat=true;

    CHECK_RESULT(ret,sensor.check_data_update(&stat));
    if(stat)
    {
        CHECK_RESULT(ret,sensor.read_hot_junc(&hot_junc));
        CHECK_RESULT(ret,sensor.read_junc_temp_delta(&junc_delta));

        CHECK_RESULT(ret,sensor.read_cold_junc(&cold_junc));

        *value=hot_junc;
    }
    else
    {
        SERIAL.println("data not ready!!");
    }

    return NO_ERROR;
}


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    if(sensor.init(THER_TYPE_K))
    {
        SERIAL.println("sensor init failed!!");
    }
    sensor_INT_config();
}



void loop()
{
    float temp=0;
    u8 byte=0;
    u8 stat=0;


    get_temperature(&temp);
    SERIAL.print("temperature ==============================>>");
    SERIAL.println(temp);

    sensor.read_INT_stat(&stat);

    SERIAL.println(" ");
    SERIAL.println(" ");

    delay(1000);
}
```

:::note
        Existem 2 demos na biblioteca:  
**MCP9600_basic_demo.ino**
        >Este exemplo é um uso básico do sensor de temperatura, em que você precisa fazer polling para obter os dados.  

**MCP9600_4channel_INT_demo.ino**  
        >há quatro pads de alerta no módulo do sensor que se conectam ao pino de alerta. Você pode definir limites de temperatura chamando a API que fornecemos. O pino de alerta gera nível baixo quando o valor de temperatura ultrapassa o limite. Você pode conectar o pino de alerta a um pino de interrupção do host para melhorar a eficiência da operação do programa.
:::

- **Passo 4.** Faça o upload do demo. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

:::tip
Se tudo correr bem, quando você abrir o Serial Monitor, verá o valor da temperatura e as informações de alerta.
:::

```cpp
serial start!!
version =4011

temperature ==============================>>25.81


temperature ==============================>>27.62


temperature ==============================>>29.37
channel 0generate interruption!!!
channel 1generate interruption!!!


temperature ==============================>>30.81
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!


temperature ==============================>>31.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!
channel 3generate interruption!!!


temperature ==============================>>28.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!


temperature ==============================>>27.33
channel 0generate interruption!!!
channel 1generate interruption!!!


temperature ==============================>>26.71
channel 0generate interruption!!!
```

#### Função de Alerta

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Function_ep.jpg" /></div>

Como você pode ver, há uma histerese quando o aumento e a queda da temperatura disparam uma interrupção. Por exemplo, quando a temperatura sobe e atinge 28 ℃, o pino de alerta 0 será disparado, e quando a temperatura cai, o ponto limite se torna 26 ℃. Somente quando a temperatura ficar abaixo de 26 ℃ o pino de alerta 0 será liberado.

```
hysteresis= 28℃-26℃ = 2℃
```

Os pinos de alerta 1, 2 e 3 seguem o mesmo princípio. Você pode alterar o valor de histerese e o limite modificando a linha 23 e a linha 26.

```cpp
CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));

/*Set hysteresis.for example,set hysteresis to 2℃,when the INT limitation is 30℃,interruption will be generated when 
the temp ecceed limitation,and the interruption flag will stay unless the temp below 30-2(limitation-hysteresis) 28℃. */

CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 
```

Use o parâmetro **i** para escolher o número do pino de alerta, e o parâmetro **28** é o valor limite; quanto à histerese, usamos a função **sensor.set_alert_hys(i,2)**.
O parâmetro **2** é o valor de histerese.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C Thermocouple Amplifier (MCP9600) Eagle Files](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip)

- **[Zip]** [Seeed MCP9600 Library](https://github.com/Seeed-Studio/Seeed_MCP9600/archive/master.zip)

- **[PDF]** [Datasheet of MCP9600](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/MCP9600.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
