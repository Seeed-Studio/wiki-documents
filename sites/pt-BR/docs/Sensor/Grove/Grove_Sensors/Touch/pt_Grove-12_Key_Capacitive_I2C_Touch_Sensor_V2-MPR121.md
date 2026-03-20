---
description: Grove - Sensor de Toque Capacitivo I2C de 12 Teclas V2 (MPR121)
title: Grove - Sensor de Toque Capacitivo I2C de 12 Teclas V2 (MPR121)
keywords:
  - Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121
sku: 101020534
last_update:
  date: 1/19/2023
  author: jianjing Huang
createdAt: '2023-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/
---



![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/main.jpg)

O **Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)** é um sensor de toque capacitivo de proximidade multicanal. É um módulo 3 em 1 com as seguintes funcionalidades: detecção de capacitância, detecção de toque e detecção de proximidade.

**Detecção de Capacitância**: Este módulo usa um esquema de detecção de capacitância com corrente contínua (DC) constante. Ele pode medir capacitâncias na faixa de 10 pF a mais de 2000 pF com resolução de até 0,01 pF.

**Detecção de Toque**: Uma vez que os dados de capacitância do eletrodo são adquiridos, o status de toque/liberação do eletrodo é determinado comparando‑os com o valor de referência (baseline) de capacitância.

**Detecção de Proximidade**: Um novo recurso do MPR121 é o sistema de detecção de proximidade. Isso significa que todos os eletrodos do sistema podem ser
somados para criar um único eletrodo grande.

Baseado no Freescale MPR121, este sensor possui 12 eletrodos completamente independentes com autoconfiguração integrada. Graças à interface I2C, você pode detectar todos os 12 sinais de eletrodos com apenas uma porta Grove, e o endereço I2C é configurável por hardware, de 0X5B a 0X5D. Isso também torna possível que múltiplos
**Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)** sejam usados juntos para expansão de canais em um único sistema; você pode construir um sistema de toque que contenha no máximo 36 eletrodos.

Este sensor é uma versão atualizada do [Grove - I2C Touch Sensor](https://www.seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html); para atender às necessidades de Matsuzawa.Takashi (um de nossos clientes), tornamos o endereço I2C alterável e ainda mais barato que a versão antiga. Portanto, se você tiver quaisquer sugestões sobre qualquer Grove, por favor envie para nós. Nós sempre ouviremos a sua opinião; ela pode gerar outra atualização ou até um novo Grove. Por gentileza escreva suas sugestões na página [Grove 100+](https://www.seeedstudio.com/grove_100).

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Alterações de Versão

|Item| Grove - 12 Key Capacitive I2C Touch Sensor V2 | Grove - I2C Touch Sensor |
|---|---|---|
|Chip Principal|MPR121|MPR121|
|Endereço I2C|alterável (0X5B ~ 0X5D)|imutável (0X5A)|
|Sensor de Toque Táctil|x|√|
|Interface de Entrada|interface para jacaré|conector fêmea DIP 2 pinos|
|Custo‑benefício|Alto|Baixo|
|Data de Lançamento|11 de setembro de 2018|31 de outubro de 2015|

## Recursos

- ADC interno de 10 bits
- Autocalibração independente integrada para cada entrada de eletrodo
- Eletrodos completamente independentes com autoconfiguração integrada
- Interface I2C, com saída de interrupção IRQ para indicar mudanças de status dos eletrodos
- Endereço I2C configurável por hardware
- 12 entradas de eletrodos/detecção de capacitância, das quais 8 são multifuncionais para acionamento de LED e GPIO
- Autoconfiguração da corrente de carga e do tempo de carga para cada entrada de eletrodo
- Limiares separados de toque e liberação para cada eletrodo, proporcionando histerese e independência entre eletrodos

## Especificações

|Item|Valor|
|---|---|
|Tensão de operação|3,3V / 5V|
|Temperatura de operação|-40°C a +85°C|
|Faixa de temperatura de armazenamento|-40°C a +125°C|
|Faixa de capacitância|10 pF a mais de 2000 pF|
|Resolução|0,01 pF|
|Corrente de fonte GPIO por pino|12 mA|
|Corrente de dreno GPIO por pino|1,2 mA|
|Interface|I2C|
|Faixa de endereço I2C|0x5B,0x5C,0x5D|
|Endereço I2C padrão|0x5B|

## Aplicações

- Periféricos de PC
- Reprodutores de MP3
- Controles remotos
- Telefones celulares
- Controles de iluminação

## Visão Geral de Hardware

### Mapa de Pinos

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map.jpg)

|Número do pino|Nome do pino|Função|Multiplexação de pinos|
|---|---|---|---|
|8|CH0| Canal 0, Eletrodo 0, entrada do valor de capacitância|-|
|9|CH1| Canal 1, Eletrodo 1, entrada do valor de capacitância|-|
|10|CH2| Canal 2, Eletrodo 2, entrada do valor de capacitância|-|
|11|CH3| Canal 3, Eletrodo 3, entrada do valor de capacitância|-|
|12|CH4| Canal 4, Eletrodo 4, entrada do valor de capacitância|GPIO ou driver de LED|
|13|CH5| Canal 5, Eletrodo 5, entrada do valor de capacitância|GPIO ou driver de LED|
|14|CH6| Canal 6, Eletrodo 6, entrada do valor de capacitância|GPIO ou driver de LED|
|15|CH7| Canal 7, Eletrodo 7, entrada do valor de capacitância|GPIO ou driver de LED|
|16|CH8| Canal 8, Eletrodo 8, entrada do valor de capacitância|GPIO ou driver de LED|
|17|CH9| Canal 9, Eletrodo 9, entrada do valor de capacitância|GPIO ou driver de LED|
|18|CH10| Canal 10, Eletrodo 10, entrada do valor de capacitância|GPIO ou driver de LED|
|19|CH11| Canal 11, Eletrodo 11, entrada do valor de capacitância|GPIO ou driver de LED|

:::tip
Para os CH0 ~ CH11, uma vez que os dados de capacitância do eletrodo são adquiridos, o status de toque/liberação do eletrodo é determinado comparando‑os com o valor de referência (baseline) de capacitância. E você pode definir o valor de referência para cada canal separadamente. Os pinos 12 ~ 19 são multifuncionais, o que significa que você pode configurá‑los como GPIO ou driver de LED; para mais detalhes, consulte a nota de aplicação da Freescale [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf).
:::

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/pin_map_back_1.jpg)

:::caution
O pad central está conectado ao fio de endereço; você pode alterar o endereço I2C cortando o fio e o ressoldando. Para a sua segurança e a de outras pessoas, tenha cuidado com a faca ou ferro de solda que você possa usar.
:::

### Esquemático

**Alimentação**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic.jpg)

A tensão de operação do Freescale MPR121 é de 1,71V a 3,6V; porém, a tensão do Arduino é 3,3V ou 5V. Para torná‑lo compatível com sistemas de 5V, usamos um CI de conversão de tensão para fornecer 3,3V ao Freescale MPR121.

**Circuito de conversão de nível bidirecional**

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/schematic_1.jpg)

Este é um circuito típico de conversão de nível bidirecional para conectar duas seções de tensão diferentes de um barramento I2C. O barramento I<sup>2</sup>C deste sensor usa 3,3V; se o barramento I<sup>2</sup>C do Arduino usar 5V, este circuito será necessário. No esquemático acima, **Q1** e **Q2** são MOSFETs de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atuam como chaves bidirecionais. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

Nesta parte, mostraremos como usar o **Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)** como um sensor de toque; quanto à configuração como sensor de capacitância ou sensor de proximidade, consulte o [Datasheet](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf).

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | I2C Touch Sensor V2|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html" target="_blank">Adquira agora</a>|

:::note
**1** Por favor, conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use um cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) à porta **I2C** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/connect.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove-MPR121          |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove touch sensor MPR121](https://github.com/linux-downey/Grove_touch_sensor_MPR121) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo, você pode abri-lo das três maneiras a seguir：
    1. Abra-o diretamente na IDE do Arduino através do caminho: **File --> Examples --> Grove touch sensor MPR121 --> MPR121_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path.jpg)

    2. Abra-o no seu computador clicando em **MPR121_demo.ino**, que você pode encontrar em **xxxx\Arduino\libraries\Grove_touch_sensor_MPR121-master**, onde **XXXX** é o local em que você instalou a IDE do Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/path_1.jpg)

    3. Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na IDE do Arduino.

```cpp
#include "Seeed_MPR121_driver.h"

Mpr121 mpr121;

u16 touch_status_flag[CHANNEL_NUM]={0};
void setup()
{
  s32 ret=0;
  Serial.begin(115200);
  if(mpr121.begin()<0)
  {
    Serial.println("Can't detect device!!!!");
  }
  else
  {
    Serial.println("mpr121 init OK!");
  }
  delay(100);
}
void loop()
{
  u16 result=0;
  u16 filtered_data_buf[CHANNEL_NUM]={0};
  u8 baseline_buf[CHANNEL_NUM]={0};

  result=mpr121.check_status_register();

  mpr121.get_filtered_reg_data(&result,filtered_data_buf);

  for(int i=0;i<CHANNEL_NUM;i++)
  {
    if(result&(1<<i))                             /*key i is pressed!!*/
    {
      if(0==touch_status_flag[i])             
      { 
        touch_status_flag[i]=1;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("pressed");
      }
    }
    else
    {
      if(1==touch_status_flag[i])
      {
        touch_status_flag[i]=0;
        Serial.print("key ");
        Serial.print(i);
        Serial.println("release");
      }
    }
  }
  delay(50); 
}
```

- **Passo 4.** Faça o upload do demo. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina a taxa de baud para **115200**.

:::tip
Se tudo correr bem, você obterá o resultado. Quando você tocar nos pads CH0 ~ CH11, isso acionará **key ?pressed** e **key ?release**
:::

```cpp
mpr121 inmpr121 init OK!
key 11pressed
key 11release
key 10pressed
key 10release
key 0pressed
key 0release
key 2pressed
key 2release

```

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| I2C Touch Sensor V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-%28MPR121%29-p-3141.html)|

- **Passo 2.** Conecte o Grove Base Hat ao Raspberry.
- **Passo 3.** Conecte o Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121) à porta **I2C** do Base Hat.
- **Passo 4.** Conecte o Raspberry Pi ao PC por meio de um cabo USB.
![](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/img/rasp_MPR121.jpg)

#### Software

:::caution
Se você estiver usando um **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1.** Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2.** Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3.** Execute o comando abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_12_chan_touch_sensor_MPR121.py
```

A seguir está o código grove_12_chan_touch_sensor_MPR121.py.

```python
import time
from grove.i2c import Bus


TOUCH_SENSOR_DEFAULT_ADDR                 = 0x5b

MODE_CONFIG_REG_ADDR                      = 0x5e
GLOBAL_PARAM_REG_ADDR_L                   = 0x5c
TOUCH_STATUS_REG_ADDR_L                   = 0x00
SET_DEBOUNCE_REG_ADDR                     = 0x5b

FILTERED_DATA_REG_START_ADDR_L            = 0x04
CHANNEL_NUM                               = 12

STOP_MODE                                 = 0
NORMAL_MODE                               = 0x3c

class TouchSensorMpr121():
    def __init__(self,bus_num = 1,addr = TOUCH_SENSOR_DEFAULT_ADDR):
        self.bus = Bus(bus_num)
        self.addr = addr
        self.threshold = 0
        self.touch_flag = [0]*CHANNEL_NUM

    def sensor_init(self):
        self._set_mode(STOP_MODE)
        data = [0x23,0x10]
        self._set_global_param(data)
        self._set_debounce(0x22)
        self._set_mode(NORMAL_MODE)

    def set_threshold(self,threshold):
        self.threshold = threshold

    def wait_for_ready(self):
        time.sleep(.2)

    def _set_mode(self,mode):
        self.bus.write_byte_data(self.addr,MODE_CONFIG_REG_ADDR,mode)

    def _set_global_param(self,data):
        self.bus.write_i2c_block_data(self.addr,GLOBAL_PARAM_REG_ADDR_L,data)

    def _set_debounce(self,data):
        self.bus.write_byte_data(self.addr,SET_DEBOUNCE_REG_ADDR,data)

    def _check_status_register(self):
        data_status = self.bus.read_i2c_block_data(self.addr,TOUCH_STATUS_REG_ADDR_L,2)
        return data_status

    def get_filtered_touch_data(self,sensor_status):
        result_value = []
        for i in range(CHANNEL_NUM):
            time.sleep(.01)
            if(sensor_status & (1<<i)):
                channel_data = self.bus.read_i2c_block_data(self.addr,FILTERED_DATA_REG_START_ADDR_L+2*i,2)
                result_value.append(channel_data[0] | channel_data[1]<<8 )
            else:
                result_value.append(0)
        return result_value

    def listen_sensor_status(self):
        data = self._check_status_register()
        touch_status = data[0] | (data[1]<<8) 
        touch_result_value = self.get_filtered_touch_data(touch_status)

        for i in range(CHANNEL_NUM):
            if(touch_result_value[i] < self.threshold ):
                touch_result_value[i] = 0
        return touch_result_value

    def parse_and_print_result(self,result):
        for i in range(CHANNEL_NUM):
            if(result[i] != 0):
                if(0 == self.touch_flag[i]):
                    self.touch_flag[i] = 1
                    print("Channel %d is pressed,value is %d" %(i,result[i]))
            else:
                if(1 == self.touch_flag[i]):
                    self.touch_flag[i] = 0
                    print("Channel %d is released,value is %d" %(i,result[i]))



mpr121 = TouchSensorMpr121() 
def main():
    mpr121.sensor_init()
    mpr121.set_threshold(0x60)
    mpr121.wait_for_ready()
    while 1:
        result = mpr121.listen_sensor_status()
        mpr121.parse_and_print_result(result)
        time.sleep(.1)

if __name__  == '__main__':
    main()
```

:::tip
Se tudo correr bem, você obterá o resultado. Quando você tocar nos pads CH0 ~ CH11, isso acionará **channel # pressed** e **Channel # released** com os valores de pressão correspondentes.
:::

```cpp
>>> %Run grove_12_chan_touch_sensor_MPR121.py
    Channel 8 is pressed, value is 308
    Channel 8 is released, value is 0
    Channel 9 is pressed, value is 170
    Channel 9 is released, value is 0
    Channel 10 is pressed, value is 340
    Channel 8 is pressed, value is 180
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 12 Key Capacitive I2C Touch Sensor V2 eagle files](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121.zip)

- **[Zip]** [Biblioteca Grove touch sensor MPR121](https://github.com/linux-downey/Grove_touch_sensor_MPR121/archive/master.zip)

- **[PDF]** [Folha de dados do MPR121](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/MPR121.pdf)

- **[PDF]** [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Piano de Folhas**: Fizemos um piano usando um sensor de toque, bem como folhas como teclas do piano.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Brincar com Scratch**: Como jogar um jogo de Scratch com um sensor de toque?

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
