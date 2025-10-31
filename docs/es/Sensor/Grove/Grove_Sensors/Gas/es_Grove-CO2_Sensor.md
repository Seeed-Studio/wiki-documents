---
description: Grove - Sensor de CO2
title: Grove - Sensor de CO2
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-CO2_Sensor
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Grove_CO2_Sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Grove_CO2_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


El módulo Grove - Sensor de CO2 es un sensor de CO2 infrarrojo de alta sensibilidad y alta resolución. El sensor de CO2 infrarrojo MH-Z16 es un sensor pequeño de propósito general que utiliza el principio infrarrojo no dispersivo (NDIR) para detectar CO2 presente en el aire, con buena selectividad, independiente del oxígeno, larga vida útil, sensor de temperatura incorporado, compensación de temperatura, con salida UART, fácil de usar. Puede ser ampliamente utilizado en HVAC y monitoreo de calidad del aire interior, monitoreo de procesos industriales y seguridad, agricultura y monitoreo de procesos de producción ganadera.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html)

<div class="admonition warning">
<p class="admonition-title">Precaución</p>
Tenga en cuenta que el valor del sensor solo refleja la tendencia aproximada de la concentración de gas dentro de un rango de error permisible. NO representa la concentración exacta de gas. La detección de ciertos componentes en el aire generalmente requiere un instrumento más preciso y costoso, lo cual no se puede lograr con un solo sensor de gas. Si su proyecto tiene como objetivo obtener la concentración de gas a un nivel muy preciso, entonces no recomendamos este sensor de gas.
</div>


:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), le ayudará a elegir el sensor de gas que mejor se adapte a sus necesidades.
:::
Especificaciones
-------------

-   Rango de medición de 0-2000 partes por millón (PPM)
-   Resolución de 1 PPM 0-2000 partes por millón (PPM)
-   Precisión de 200 PPM
-   Tiempo de calentamiento 3 minutos
-   Tiempo de respuesta < 90s
-   Temperatura de funcionamiento 0 a 50℃
-   Humedad de funcionamiento 0% ~ 90% RH
-   Temperatura de almacenamiento - 20-60℃
-   Voltaje de funcionamiento 4.5 V a 6 V DC
-   Corriente máxima menor a 100 ma, corriente promedio menor a 50 ma
-   Modo de salida UART

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Plataformas Soportadas
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Demostración
------------

Conecta el módulo con Grove Shield usando la siguiente imagen y usa el programa de abajo para obtener el voltaje.

Ten en cuenta que el mejor tiempo de precalentamiento del sensor es de aproximadamente 180s. Para información detallada sobre el sensor, consulta la hoja de datos.

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


Calibración
------------
Si necesitas calibrar el sensor, por favor sube el siguiente código a tu Arduino. 

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
    Por favor precaliente el sensor durante al menos 5 minutos antes de calibrar y asegúrese de que el sensor esté en aire fresco.
:::
Referencia
----------

-   350~450ppm: Ambiente exterior general
-   350~1000ppm: El aire está fresco y la respiración es fluida
-   1000~2000ppm: El aire estaba estancado y se siente somnoliento
-   5000ppm: Límite de exposición permisible para una jornada laboral de 8h

Recursos
--------

-   [MH-Z16_CO2 datasheet_ZH_CN.pdf](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2.pdf)
-   [MH-Z16_CO2 datasheet_EN.pdf](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2_datasheet_EN.pdf)
-   [Health Risk Evaluation for Carbon Dioxide](http://www.blm.gov/style/medialib/blm/wy/information/NEPA/cfodocs/howell.Par.2800.File.dat/25apxC.pdf)


## Proyectos

**LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales
Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

