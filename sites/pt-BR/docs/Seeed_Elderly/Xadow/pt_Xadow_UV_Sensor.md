---
description: Xadow - Sensor UV
title: Xadow - Sensor UV
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_UV_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_UV_Sensor/
---
![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/xadow%20uv.jpg)

O Xadow UV Sensor é adequado para medir a radiação UV na luz solar. Ele pode detectar o comprimento de onda UV de 290 ~ 400 nm. O UV Sensor fornece um valor de tensão digital correspondente à intensidade da luz UV. Com o diagrama de tensão de saída e UV, podemos saber facilmente o índice UV atual. O Xadow UV Sensor pode ser alimentado por 3,3 V e é compatível com o sistema Xadow.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-UV-Sensor-p-1694.html)

##  Especificação
---
*   Pode detectar faixas de UV-A e UV-B
*   Detecção de comprimento de onda UV: 290 ~ 400nm
*   Comprimento de onda de sensibilidade máxima: 330nm
*   Circuito ADC integrado, alta precisão de conversão
*   Precisão de teste: ±0,1 índice UV
*   Temperatura de operação: -25 ~ 70 ℃
*   Dimensões: 25,43mm x 20,35mm

##  Demonstração
---
O Xadow UV Sensor pode fornecer um valor de tensão correspondente ao índice UV. Como existe uma relação linear entre a tensão de saída e o índice UV, você também pode ver diretamente o índice UV por meio de uma fórmula. A seguir mostramos como usar o sensor UV para saber o índice UV e exibi-lo na tela OLED.

<!-- Required Xadow module: [Xadow - Main Board](/pt-br/Xadow_Main_Board/), [Xadow - OLED 128*64](/pt-br/Xado_OLED_128multiply64/), **Xadow - UV Sensor** -->

**Instalação de Hardware**


:::note
    Ao conectar o Xadow UV Sensor ao Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
**Baixar Código**

<!-- *   Firstly, you should make sure there are [the library:OLED_Display12864](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/OLED_Display12864.zip) in your Arduino Library. If not, please click [here](https://github.com/Seeed-Studio/Grove_OLED_Display_128X64) to download and add it to Arduino Library. Refer to [How to install Arduino Library](/pt-br/How_to_install_Arduino_Library/) in wiki page, you will familiar with the operation. -->

*   Agora você pode carregá-lo para o Xadow Main Board copiando e colando no Arduino IDE.

```
#include <Wire.h>
#include <SeeedOLED.h>
#include <Streaming.h>

#define ADDR_ADC121    0x5A

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
float analogVal=0;
float UVIndex = 0;
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_CONFIG);                // Configuration Register
    Wire.write(0x20);
    Wire.endTransmission();
}
void setup()
{
    Wire.begin();
    Serial.begin(38400);
    SeeedOled.init();  //initialize SEEED OLED display
    SeeedOled.clearDisplay();  // clear the screen and set start position to top left corner

    init_adc();
}

void loop()
{
    readVoltage();
    //SeeedOled.clearDisplay();
    SeeedOled.setTextXY(1,0);
    SeeedOled.putString("Voltage: ");
    SeeedOled.setTextXY(1,8);
    SeeedOled.putFloat(analogVal);
    SeeedOled.setTextXY(1,12);
    SeeedOled.putString("mV");
    SeeedOled.setTextXY(2,0);
    SeeedOled.putString("UVIndex: ");
    SeeedOled.setTextXY(2,8);
    SeeedOled.putFloat(UVIndex);
    delay(50);
}
void readVoltage()     //unsigned int *data
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
    delay(50);
    analogVal = getData*V_REF/4096/2;
    Serial.print("analogVal:");
    Serial.print(analogVal);
    Serial.println("mV");
    UVIndex = analogVal/9.71;
    Serial.print("UVIndex:");
    Serial.println(UVIndex);

}
```

*   Abra o monitor serial, o valor da tensão e o índice UV serão exibidos:

*   Você pode ver na tela OLED:

*   Descobrir o índice UV não é uma tarefa difícil consultando o diagrama abaixo.

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Voltage_and_UVI.jpg)

Sobre o Xadow UV Sensor, usamos um resistor cujo valor de resistência é 3M, então você precisa consultar esta linha para RL=3M.

É possível observar de forma linear a relação entre tensão e UV. E a fórmula calculada pode ser obtida: Índice UV = Tensão/9,71, que já foi usada no código.

##  Referência
---
###  Endereço I2C do UV Sensor

O Xadow UV Sensor tem um endereço de hardware de sete bits que é referido como endereço escravo. E o endereço escravo é configurado pelas entradas de seleção de endereço ADR0 e ADR1. ADR0 e ADR1 podem estar em nível baixo, deixados em aberto ou conectados ao nível alto. O estado dessas entradas define o endereço de hardware ao qual o módulo responde no barramento I2C (veja a Tabela abaixo).

<table  cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">  Endereço Escravo[A6 - A0]</th>
<th colspan="2" scope="col"> Estado das entradas ADR0 e ADR1</th>
</tr>
<tr>
<td scope="col"> ADR1</td>
<td scope="col"> ADR0</td>
</tr>
<tr>
<td scope="row"> 1010000(0x50)</td>
<td>Flutuante</td>
<td>Flutuante</td>
</tr>
<tr>
<td scope="row"> 1010001(0x51)</td>
<td> Floating</td>
<td> L </td>
</tr>
<tr>
<td scope="row"> 1010010(0x52)</td>
<td> Floating</td>
<td> H </td>
</tr>
<tr>
<td scope="row"> 1010100(0x54)</td>
<td> L </td>
<td> Floating </td>
</tr>
<tr>
<td scope="row"> 1010101(0x55) </td>
<td>L </td>
<td>L </td>
</tr>
<tr>
<td scope="row"> 1010110(0x56) </td>
<td> L </td>
<td> H </td>
</tr>
<tr>
<td scope="row"> 1011000(0x58) </td>
<td> H </td>
<td> Floating </td>
</tr>
<tr>
<td scope="row"> 1011001(0x59) </td>
<td> H </td>
<td> L </td>
</tr>
<tr>
<td scope="row">1011010(default 0x5A) </td>
<td> H </td>
<td> H </td>
</tr>
</table>

No modo padrão, ADR0 e ADR1 estão conectados a "H" (veja o Xadow UV Sensor)

###  Curva de resposta espectral do UV Sensor

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Responsivity.jpg)


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Recursos
---
[Xadow UV Sensor Eagle File](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
