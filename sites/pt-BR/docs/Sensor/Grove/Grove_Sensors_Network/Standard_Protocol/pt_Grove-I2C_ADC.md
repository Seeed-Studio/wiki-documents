---
title: Grove- I2C ADC
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-I2C_ADC/
slug: /Grove-I2C_ADC
sku: 103020013
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2022-01-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_ADC/
---

![](https://files.seeedstudio.com/wiki/Grove-RGB-LED-Stick-20-WS2813-Mini/img/ssd.jpg)

O Grove - I2C ADC é um módulo ADC de precisão de 12 bits baseado no ADC121C021. Ele ajuda você a aumentar a precisão dos valores coletados de sensores analógicos, fornecendo uma tensão de referência constante. Como seu endereço é alterável, você pode usar até 9 I2C ADCs ao mesmo tempo, no máximo. Por outro lado, este módulo fornece função de suspensão automática, o que reduz consideravelmente o consumo de energia.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-ADC.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

## Versão

|Versão|Endereço I2C padrão|
|---|---|
|Grove - I2C ADC v1.0/v1.1|0x55|
|Grove - I2C ADC v1.2|0x50|

## Recursos

- Baixo consumo de energia
- Alta precisão
- Modo de desligamento automático
- Endereço alterável

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

-------------

| Item            | Típico | Unidade |
|-----------------|---------|------|
| Tensão de trabalho | 5.0     | VCC  |
| Resolução      | 12      | Bit  |
| Taxa de amostragem     | 188.9   | ksps |
| Dimensão       | 40X20   | mm   |

## Plataformas compatíveis

-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Visão geral de hardware

------------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Interface.png) -->
**J1:** usado para conectar à interface IIC do Arduino como interface de saída do Grove - I2C ADC.

**J2:** usado para conectar o sensor analógico como interface de entrada do Grove - I2C ADC.

**U1:** CI ADC121C021, Conversor Analógico-Digital de 12 bits

**A área da linha preta é usada para definir o endereço IIC. ADDR0 e ADDR1 são enviados conectados a L. Você pode alterá-los para "H" ou flutuante com uma pequena modificação na placa (flutuante significa nem conectado a "H" nem conectado a "L"). Encontre detalhes na Referência.**

## Primeiros Passos

---------------

### Com Arduino

O Grove - I2C ADC possui duas interfaces: soquete de entrada (J2) e soquete de saída (J1). Conecte um sensor analógico ao seu soquete de entrada e conecte o I2C ADC ao Arduino/Seeeduino também através de cabos Grove.

Pegando o Grove - Gas Sensor como exemplo, vamos aprender agora como ler dados do sensor usando o Grove - I2C ADC.
A instalação de hardware deve ser assim:

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_gas_sensor_data_using_I2C_ADC.jpg)

Agora você pode ler o valor do sensor de gás usando o código abaixo.

```
#include <Wire.h>

#define ADDR_ADC121             0x50 // For v1.0 & v1.1, I2C address is 0x55

#define V_REF 3.00

#define REG_ADDR_RESULT         0x00
#define REG_ADDR_ALERT          0x01
#define REG_ADDR_CONFIG         0x02
#define REG_ADDR_LIMITL         0x03
#define REG_ADDR_LIMITH         0x04
#define REG_ADDR_HYST           0x05
#define REG_ADDR_CONVL          0x06
#define REG_ADDR_CONVH          0x07

unsigned int getData;
float analogVal=0;         // convert
void init_adc()
{
  Wire.beginTransmission(ADDR_ADC121);        // transmit to device
  Wire.write(REG_ADDR_CONFIG);                // Configuration Register
  Wire.write(0x20);
  Wire.endTransmission();  
}

void read_adc()     //unsigned int *data
{


    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_RESULT);                // get result
    Wire.endTransmission();

    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device
    delay(1);
    if(Wire.available()<=2)
    {
      getData = (Wire.read()&0x0f)<<8;
      getData |= Wire.read();
    }
    Serial.print("getData:");
    Serial.println(getData);
    delay(5);
    Serial.print("The analog value is:");
    Serial.print(getData*V_REF*2/4096); 
    Serial.println("V");
}
void setup()
{
  Serial.begin(9600);
  Wire.begin();
  init_adc();
}

void loop()
{  read_adc();//adcRead);
   delay(50);
}
```

No código acima, definimos o Vref como 3,0 V, que é determinado pelo módulo I2C ADC. Essa tensão de referência é mais precisa do que a gerada pelo microcontrolador. E você pode torná-la ainda mais precisa medindo a tensão entre VA e GND e usando esse valor para substituir 3,00 no código acima.

Agora você pode enviar o código.

Depois, abra o monitor serial e leia os valores:

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

<div class="admonition note">
<p class="admonition-title">note</p>
O endereço do Grove - I2C ADC é alterável, o que significa que você pode redefinir seu endereço. Isso requer alguma modificação de hardware na placa. Se você está pensando em usar mais de um I2C ADC ao mesmo tempo, siga as instruções na parte de Referência abaixo para fazer isso. O número máximo de I2C ADCs que podem ser usados simultaneamente é 9, mas há apenas 4 soquetes I2C no Grove - Base Shield V1.2, então, se você quiser usar mais de 4 I2C ADCs, use um <a href="/pt-br/Grove-I2C_Hub">Grove - I2C Hub</a> para criar mais soquetes I2C.
</div>
### Com Beaglebone Green

Para começar a editar programas que estão no BBG, você pode usar o Cloud9 IDE.
Como um exercício simples para se familiarizar com o Cloud9 IDE, criar uma aplicação simples para piscar um dos 4 LEDs programáveis pelo usuário no BeagleBone é um bom começo.

Se esta é a primeira vez que você usa o Cloud9 IDE, siga este [**link**](/pt-br/BeagleBone_Green).

**Passo 1:** Defina o soquete Grove - UART como um soquete Grove - GPIO, simplesmente siga este [**link**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html).

**Passo 2:** Clique no "+" no canto superior direito para criar um novo arquivo.

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9_newfile.jpg)

**Passo 3:** Copie e cole o código a seguir na nova aba

```
from Adafruit_I2C import Adafruit_I2C
import time

ADDR_ADC121 = 0x50

REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07

i2c = Adafruit_I2C(ADDR_ADC121)           

class I2cAdc:
    def __init__(self):
        i2c.write8(REG_ADDR_CONFIG, 0x20)

    def read_adc(self):
        "Read ADC data 0-4095."
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data

if __name__ == '__main__':
    # Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green.
    adc = I2cAdc()
    while True:
        print 'sensor value ', adc.read_adc()
        time.sleep(.2)
```

**Passo 4:** Salve o arquivo clicando no ícone de disco e dando ao arquivo um nome com a extensão .py.

**Passo 5:** Conecte o Grove I2C ADC ao soquete Grove I2C no BBG.

**Passo 6:** Execute o código. Você verá que o terminal exibe o valor AD a cada 2 segundos.

Referência
---------

### Configuração de endereço I2C

O I2C do ADC possui um endereço de hardware de sete bits que é determinado por ADR0 e ADR1. ADR0 e ADR1 são conectados a L dentro da placa por padrão. Mas você pode alterá-los. Por exemplo, use uma faca para cortar a conexão entre L e ADR0 (como mostrado na figura abaixo), então você coloca o estado de ADR0 como flutuante (conectado a nada). E se você soldar ADR0 e H dessa vez, então você faz o valor de ADR0 ser H.

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Change_I2C_Address.jpg)

Você pode encontrar a relação entre o endereço de hardware I2C e os valores de ADR0 e ADR1 na tabela a seguir.

<table border="1" cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">
Endereço escravo [A6 - A0]
</th>
<th colspan="2" scope="col">
Estado de entrada de ADR0 e ADR1
</th>
</tr>
<tr>
<td scope="col">
ADR1
</td>
<td scope="col">
ADR0
</td>
</tr>
<tr>
<td scope="row">
1010000(0x50)
</td>
<td>
Flutuante
</td>
<td>
Flutuante
</td>
</tr>
<tr>
<td scope="row">
1010001(0x51)
</td>
<td>
Flutuante
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010010(0x52)
</td>
<td>
Flutuante
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1010100(0x54)
</td>
<td>
L
</td>
<td>
Flutuando
</td>
</tr>
<tr>
<td scope="row">
1010101(default 0x55)
</td>
<td>
L
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010110(0x56)
</td>
<td>
L
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1011000(0x58)
</td>
<td>
H
</td>
<td>
Flutuando
</td>
</tr>
<tr>
<td scope="row">
1011001(0x59)
</td>
<td>
H
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1011010(0x5A)
</td>
<td>
H
</td>
<td>
H
</td>
</tr>
</table>

### Quanto o I2C ADC aumenta a precisão?

Aqui está um experimento que fazemos para dar a você uma ideia de quanto o I2C ADC aumenta a precisão de um sensor analógico. Primeiro, vamos verificar os valores coletados diretamente pela porta analógica no Arduino/Seeeduino de um Grove - Gas Sensor(MQ5)

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_Gas_Sensor_data.jpg)

Fazemos o upload do código abaixo para obter os dados.

```
    /*
     * Grove - Gas Sensor(MQ5)  
     *
     * The Gas Sensor detect the related Gas density, 
     * Arduino get the result by analogread. the gas Density is 
     * 0~1, larger the output is, the denser the gas.
     * Connect the Sensor to A0 in this demo;
     * 
     *  By: https://www.seeedstudio.com
    */
    #define Vref 4.95
    void setup() {
      Serial.begin(9600);
    }

    void loop() {
      float vol;
      int sensorValue = analogRead(A0);
      vol=(float)sensorValue/1023*Vref;
      Serial.print("The sensorValue is ");
      Serial.println(sensorValue);
      Serial.print("The analog value is ");
      Serial.print(vol);
      Serial.println("V");
      delay(100);
    }
```

O resultado é:

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_ADC_2.jpg)

Por padrão, Vref é gerado pelo Arduino, que teoricamente é 5V. Mas, na verdade, é um valor flutuante, o que resulta no desvio dos dados finais. Esse tipo de imprecisão é evitado ao usar o Grove - I2C ADC, porque ele fornece 3,0V exatos como Vref.
Para comparação, na mesma condição, os valores do sensor coletados pelo circuito com o Grove - I2C ADC no osciloscópio são mostrados abaixo:

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

Para descobrir qual resultado está mais próximo da condição real, aqui usamos um multímetro para medir a tensão entre o pino SIG e o pino GND do sensor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Measure_the_real_sensor_value_using_DMM.JPG)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

--------

- [I2C ADC Eagle File](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip)
- [ADC121C021 Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/ADC121C021_Datasheet.pdf)

## Projeto

**BeagleBone Green Temperature Monitor on Artik Cloud** Publica valores do Grove Temperature Sensor coletados por um BeagleBone Green na Artik Cloud.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/LaurenceHR/beaglebone-green-temperature-monitor-on-artik-cloud-08ca3b/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_ADC -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
