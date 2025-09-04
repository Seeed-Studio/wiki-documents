---
description: Grove - Sensor HCHO
title: Grove - Sensor HCHO
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-HCHO_Sensor
last_update:
  date: 1/5/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


El Grove - Sensor HCHO es un sensor de gas VOC semiconductor. Su diseño está basado en el WSP2110 cuya conductividad cambia con la concentración de gas VOC en el aire. A través del circuito, la conductividad puede convertirse en una señal de salida que corresponde a la concentración de gas. Este sensor puede detectar gas cuya concentración es de hasta 1ppm. Es adecuado para detectar formaldehído, benceno, tolueno y otros componentes volátiles. Este producto puede usarse para detectar gas dañino en el ambiente doméstico. Por lo tanto, es un buen asistente para mejorar la calidad de vida del ambiente interior.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

<div class="admonition warning">
<p class="admonition-title">Advertencia</p>
El valor del sensor solo refleja la tendencia aproximada de la concentración de gas en un rango de error permisible, NO representa la concentración exacta de gas. La detección de ciertos componentes en el aire usualmente requiere un instrumento más preciso y costoso, lo cual no puede hacerse con un solo sensor de gas. Si tu proyecto está dirigido a obtener la concentración de gas a un nivel muy preciso, entonces no recomendamos este sensor de gas.
</div>

:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::
Especificaciones
-------------

-   Voltaje de Operación: 5.0V ± 0.3V
-   Gases Objetivo: HCHO, Benceno, Tolueno, Alcohol
-   Rango de Concentración: 1~50 ppm
-   Valor de Resistencia del Sensor(Rs): 10KΩ-100KΩ(en 10ppm HCHO)
-   Sensibilidad: Rs(en aire)/Rs(10ppm HCHO)≥5

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
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

Primeros Pasos
--------------

El Grove - Sensor HCHO puede usarse para detectar COVs, como HCHO, tolueno, benceno, alcohol. Aquí tomamos HCHO como ejemplo para demostrar cómo usar este sensor.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>


```
// demo of Grove - HCHO Sensor

#define Vc 4.95

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    float R0=(1023.0/sensorValue)-1;
    Serial.print("R0 = ");
    Serial.println(R0);
    delay(500);
}
```

Después de cargar el código, abre el monitor serie para obtener el R0 bajo condiciones normales (al aire libre es lo mejor).

Ajusta la resistencia de R1 (el potenciómetro azul) con un destornillador pequeño para hacer que el número de R0 esté en el rango de 10-100 y registra ese número (mi número R0 aquí es 34.28).

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png" alt="pir" width={600} height="auto" /></p>


Escribe tu número de R0 en `#define R0 ***`, luego carga el código. Recuerda no girar más R1, a menos que decidas detectar R0 nuevamente.

```
// demo of Grove - HCHO Sensor
#include <math.h>
#define Vc 4.95
//the number of R0 you detected just now
#define R0 34.28

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    double Rs=(1023.0/sensorValue)-1;
    Serial.print("Rs = ");
    Serial.println(Rs);
    double ppm=pow(10.0,((log10(Rs/R0)-0.0827)/(-0.4807)));
    Serial.print("HCHO ppm = ");
    Serial.println(ppm);
    delay(1000);
}
```

Luego mueve el sensor a la oficina, y lee el valor de HCHO en ppm:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png" alt="pir" width={600} height="auto" /></p>


De la Curva de Sensibilidad Típica podríamos saber que el rango de detección es 1-50ppm.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg" alt="pir" width={600} height="auto" /></p>


Para detectar otros gases VOC, podrías calcular Rs/R0, luego referirte al diagrama de características de sensibilidad y encontrar la concentración del gas. O usar el siguiente script de python para ajustar la curva de sensibilidad típica y calcular el valor de a y b:

`ppm = 10 ^ ((log10(Rs/R0) + a) / b)`

```
# coding=utf-8
# calculate a and b of HCHO
import numpy as np
import matplotlib.pyplot as plt

#get the measure data from the Typical Sensitivity Curve
x = np.array([1, 5, 10, 20, 40])
y = np.array([1.21, 0.56, 0.4, 0.3, 0.21])

plt.subplot(221)
plt.loglog(x,y,lw=2)
#plt.ylim(0,1.5)  
plt.xlabel('log(x)')  
plt.ylabel('log(y)')  
plt.show()  
```


## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
--------

-   [Archivo Eagle del Sensor HCHO Grove](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip)
-   [Esquemático del Sensor HCHO Grove en PDF](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove%20-%20HCHO%20Sensor.pdf)
-   [Hoja de Datos WSP2110 (Chino)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/WSP2110.pdf)
-   [Hoja de Datos WSP2110 (Inglés)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Wsp2110-1-.pdf)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_HCHO_Sensor -->

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
Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


