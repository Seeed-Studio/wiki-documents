---
description: Xadow - Grove Adaptor
title: Xadow - Grove Adaptor
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Grove_Adaptor
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Grove_Adaptor/
---
![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/X_adaptor_01.jpg) 

O Xadow Grove Adaptor é um dispositivo que converte a interface Grove para a Interface Xadow, tornando-o compatível com o Sistema Xadow. Ele pode realizar esta função: o sinal analógico de duas interfaces Grove analógicas será enviado pelo barramento I2C do Xadow através do ADC. O sinal da interface I2C do Grove será direcionado diretamente para o barramento I2C do Xadow sem conversão. A conversão A/D baseada no ADCC121C021, um ADC de 12 bits de precisão, garante alta precisão.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html)

##  Especificação
---
*   Tensão de Trabalho: 3,3 V

*   Resolução A/D: 12 bits

*   Taxa de Amostragem: 188,9 ksps

*   Endereço I2C variável

*   Dimensões: 25,43 mm x 20,35 mm

##  Demonstração
---
A seguir mostraremos como ler o valor de saída dos módulos Grove usando o Xadow Grove Adaptor.

**Medir Sinal Analógico**

Se medir o sinal analógico que o módulo Grove emite, você precisa conectar o módulo Grove à interface Grove analógica onde estão marcadas como "A0" e "A1".

**A instalação de hardware deve ser:**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor2.jpg)

Aqui o Grove - Gas sensor, que emite sinal analógico, está conectado ao AO, então o endereço I2C aplicado ao código de teste é 0x58 (padrão). Em outras palavras, o endereço I2C deve ser 0x59 quando o Grove - Gas Sensor é conectado à interface A1.

**O código de teste é:**
```
<pre>
#include <Wire.h>
#include <Streaming.h>

#define ADDR_ADC121             0x58

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
{
    read_adc();//adcRead);
    delay(50);
}</pre>
```
Envie o código para a Xadow Main Board e, em seguida, abra o monitor serial para observar o valor de saída:

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Xadow_Grove_Adaptor_Result.png)

**Medir Sinal I2C**

Você precisa conectar o módulo Grove à interface I2C do Xadow Grove Adaptor quando o modo de comunicação do módulo Grove for I2C. Agora o servidor do Xadow Grove Adaptor está entregando o sinal ao barramento I2C do Xadow sem ADC.
Tomando o Grove - Digital Light Sensor como exemplo, vamos aprender seu uso.

**Instalação de Hardware:**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor1.jpg)


**Baixe o código:**

<!-- *   Download the[Digital_Light_Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor) of Grove - Digital Light Sensor from Github website and install it to your Arduino Library. Refer to [How to install Arduino Library](/pt-br/How_to_install_Arduino_Library) in wiki page, you will familiar with the installation.
*   Open code after you finish installing. -->

```
<pre>
/* Digital Light sensor demo V1.0
* Connect the sensor to I2C port of Arduino to use.
*
* By:https://www.seeedstudio.com
*/
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
void setup()
{
  Wire.begin();
  Serial.begin(9600);
  TSL2561.init();
}

void loop()
{
  unsigned long  Lux;
  TSL2561.getLux();
  Serial.print("The Light value is: ");
  Serial.println(TSL2561.calculateLux(0,0,1));
  delay(1000);
  }</pre>
```

*   Abra o monitor serial para observar o valor de LUX. Altere artificialmente a intensidade de luz do ambiente ao redor e você verá a mudança evidente do valor de saída.


![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Digital_Light_Sensor_Score_Picture.jpg)

<!-- The ADC IC ADC121C021 used in  Xadow Grove Adaptor have been adopter on  Grove - I2C ADC. Of course, the way to change I2C Address are same. Please refer to [Reference part](/pt-br/Grove-I2C_ADC#Reference) of Grove - I2C ADC about the varying method. In addition,"0" and "1" on board are the address varying area of A0 interface,"2" and "3" are the address varying area of A1 interface. -->


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
*   [Arquivo Eagle do Xadow Grove Adaptor](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

*   [Folha de dados do CI A/DC ADC121C021](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
