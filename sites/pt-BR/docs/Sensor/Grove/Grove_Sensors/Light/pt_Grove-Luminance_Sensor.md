---
description: Grove - Sensor de Luminância
title: Grove - Sensor de Luminância
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Luminance_Sensor
sku: 101020076
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Luminance_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Luminance.jpg" /></div>

O Grove - Sensor de Luminância detecta a intensidade da luz ambiente em uma área de superfície. Ele usa o sensor de luz ambiente analógico **APDS-9002**. Este possui responsividade mais próxima ao olho humano.

Este Sensor de Luminância pode ser usado em aplicações que exigem ajuste automático de luz em iluminação residencial ou comercial.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Especificações
-------------

| Parâmetro                  | Valor       |
|-----------------------------|--------------|
| Vcc                         | 2.4V ~ 5.5V  |
| Faixa linear de saída       | 0.0 ~ 2.3V   |
| Faixa de medição de luminância | 0 ~ 1000 Lux |

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Demonstração
-------------

**Conecte o sensor Grove Luminance ao Seeduino Lotus**

1.Conecte o sensor Grove-Luminance à porta A0 do Seeeduino Lotus com um conector Grove.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Interface_Grove-Luminance.jpg" /></div>

2.Copie o código a seguir em um sketch do Arduino.

```
float VoutArray[] =  { 0.0011498,  0.0033908,   0.011498, 0.041803,0.15199,     0.53367, 1.3689,   1.9068,  2.3};
float  LuxArray[] =  { 1.0108,     3.1201,  9.8051,   27.43,   69.545,   232.67,  645.11,   730.52,  1000};

void setup() {
    // put your setup code here, to run once:
    Serial.begin(9600);

}

void loop() {
    // put your main code here, to run repeatedly:

    Serial.print("Vout =");
    Serial.print(readAPDS9002Vout(A0));
    Serial.print(" V,Luminance =");
    Serial.print(readLuminance(A0));
    Serial.println("Lux");
    delay(500);
}

float readAPDS9002Vout(uint8_t analogpin)
{
    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)
    // Vout samples are with reference to 3V Vcc
    // The above expression is simplified by cancelling out Vcc
    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);
    //Above 2.3V , the sensor value is saturated

    return MeasuredVout;

}

float readLuminance(uint8_t analogpin)
{

    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)
    // Vout samples are with reference to 3V Vcc
    // The above expression is simplified by cancelling out Vcc
    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);
    float Luminance = FmultiMap(MeasuredVout, VoutArray, LuxArray, 9);

    /**************************************************************************

    The Luminance in Lux is calculated based on APDS9002 datasheet -- > Graph 1
    ( Output voltage vs. luminance at different load resistor)
    The load resistor is 1k in this board. Vout is referenced to 3V Vcc.

    The data from the graph is extracted using WebPlotDigitizer
    http://arohatgi.info/WebPlotDigitizer/app/

    VoutArray[] and LuxArray[] are these extracted data. Using MultiMap, the data
    is interpolated to get the Luminance in Lux.

    This implementation uses floating point arithmetic and hence will consume
    more flash, RAM and time.

    The Luminance in Lux is an approximation and depends on the accuracy of
    Graph 1 used.

    ***************************************************************************/

    return Luminance;
}


//This code uses MultiMap implementation from http://playground.arduino.cc/Main/MultiMap

float FmultiMap(float val, float * _in, float * _out, uint8_t size)
{
    // take care the value is within range
    // val = constrain(val, _in[0], _in[size-1]);
    if (val <= _in[0]) return _out[0];
    if (val >= _in[size-1]) return _out[size-1];

    // search right interval
    uint8_t pos = 1;  // _in[0] allready tested
    while(val > _in[pos]) pos++;

    // this will handle all exact "points" in the _in array
    if (val == _in[pos]) return _out[pos];

    // interpolate in the right segment for the rest
    return (val - _in[pos-1]) * (_out[pos] - _out[pos-1]) / (_in[pos] - _in[pos-1]) + _out[pos-1];
}
```

3.Faça o upload do código para o Seeeduino Lotus.

4.Segure o sensor Grove Luminance sob uma fonte de luz ou em um lugar onde o lux precisa ser detectado.

5.Abra o monitor serial.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/LuminanceOutput.png" /></div>

6.O Vout e o Lux são exibidos no monitor serial.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Código de demonstração do Grove-Luminance Sensor](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance.zip)
- [Arquivo eagle do Grove-Luminance Sensor](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip)
- [Esquemático do Grove-Luminance Sensor (PDF)](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor_v1.0.pdf)
- [Folha de dados APDS-900](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/APDS-9002-.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Luminance_Sensor -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

