---
description: Grove - Sensor de Luminancia
title: Grove - Sensor de Luminancia
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Luminance_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Luminance.jpg" /></div>

Grove - Sensor de Luminancia detecta la intensidad de la luz ambiental en un área de superficie. Utiliza el fotosensor de luz ambiental de salida analógica **APDS-9002**. Este tiene una capacidad de respuesta más cercana al ojo humano.

Este Sensor de Luminancia puede ser utilizado en aplicaciones que requieren ajuste automático de luz en iluminación residencial o comercial.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Especificaciones
-------------

| Parámetro                   | Valor        |
|-----------------------------|--------------|
| Vcc                         | 2.4V ~ 5.5V  |
| Rango de salida lineal      | 0.0 ~ 2.3V   |
| Rango de medición de luminancia | 0 ~ 1000 Lux |

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Soportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Demostración
-------------

**Conectar el sensor de luminancia Grove con Seeduino Lotus**

1.Conecta el sensor Grove-Luminance al puerto A0 del Seeeduino Lotus con un conector Grove.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Interface_Grove-Luminance.jpg" /></div>

2.Copia el siguiente código en un sketch de arduino.

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

3.Sube el código al seeeduino lotus.

4.Mantén el sensor de luminancia Grove bajo una fuente de luz o en un lugar donde se deba detectar lux.

5.Abre el monitor serie.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/LuminanceOutput.png" /></div>

6.El Vout y Lux se muestran en el monitor serie.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Código de demostración del Sensor de Luminancia Grove](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance.zip)
- [Archivo eagle del Sensor de Luminancia Grove](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip)
- [Esquemático del Sensor de Luminancia Grove (PDF)](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor_v1.0.pdf)
- [Hoja de datos APDS-900](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/APDS-9002-.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Luminance_Sensor -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

