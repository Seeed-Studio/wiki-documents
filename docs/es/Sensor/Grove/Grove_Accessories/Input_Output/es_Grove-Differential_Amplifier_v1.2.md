---
title: Grove - Amplificador Diferencial v1.2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Differential_Amplifier_v1.2/
slug: /es/Grove-Differential_Amplifier_v1.2
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Grove-Differential_Amplifier_v1.2.jpg)

Este Grove está diseñado para amplificación precisa de entrada diferencial. Ingresa las señales diferenciales de tu sensor a este módulo a través de los pines macho, luego tu Arduino obtendrá una salida precisamente amplificada desde la interfaz Grove. El factor de escala de ganancia es seleccionable. Puedes obtener una amplificación de 35 veces o 1085 veces mediante un interruptor en la placa.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

Características
-------

- Alta precisión de amplificación
- Factor de escala seleccionable
- Puede ser leído convenientemente por Arduino

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Aplicaciones
-----------

- Adquisición de datos
- Sistemas operados por batería
- Amplificadores de puente de presión y temperatura
- Instrumentación de propósito general

Especificaciones
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th colspan="2" scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th colspan="2" scope="row">
Voltaje de Operación
</th>
<td>
2.7
</td>
<td>
5.0
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
Voltaje de Entrada
</th>
<td>
0.1
</td>
<td>
\\
</td>
<td>
(Vcc-0.8)/Ganancia
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
Voltaje de Salida
</th>
<td>
0
</td>
<td>
\\
</td>
<td>
Vcc-0.80
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th rowspan="2">
Ganancia
</th>
<td>
Seleccionar 35
</td>
<td>
/
</td>
<td>
35
</td>
<td>
/
</td>
<td colspan="2" rowspan="2">
/
</td>
</tr>
<tr align="center">
<td>
Seleccionar 1085
</td>
<td>
/
</td>
<td>
1085
</td>
<td>
/
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

**1. Selección del Sensor**

El amplificador puede convertir señales en escala de mA hasta escala de A. Antes de usarlo, asegúrate de que el rango de salida de tu sensor esté en escala de mA. Por ejemplo, [Sensor de Peso](/es/Weight_Sensor_Load_Cell_0-500g) es uno de ellos.

**2. Reformado del Conector**

Para emparejar el sensor de peso con los pines macho del amplificador, es necesario soldar conectores hembra en sus cables.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Solder.jpg)

**3. Conexión del Hardware**

Conecta el sensor de peso al amplificador como muestra la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Connect5.jpg)

**4. Medición**

Copia y pega el código de demostración a continuación en Arduino IDE y súbelo.

```
    void setup()
    {
      Serial.begin(9600);
      Serial.println("start");
    }

    void loop()
    {
      int i;
      int value;
      float V,Vo;
      float Sum=0;
      for(i=0;i<10;i++)
      {
        value=analogRead(4);
        V=value*5.00/1023;
        Sum+=V;
        delay(10);
      }
      Vo=Sum/10;
      Serial.print("Output score:");
      Serial.println(Vo);
      delay(1000);
    } 
```

Puedes ver las señales amplificadas a través del monitor serie. Para el valor de la señal de entrada, necesitas usar el multímetro para medir la diferencia de voltaje entre VIN+ y VIN-.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle v1.2](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip)
- [Esquemático v1.2](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2.pdf)
- [Hoja de Datos INA132](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Ina132.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Differential_Amplifier_v1.2 -->

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
