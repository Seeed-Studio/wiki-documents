---
description: Grove - Sensor de PH
title: Grove - Sensor de PH
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-PH_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Sensor de PH
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html
oldwikiname:  Grove - Sensor de PH
prodimagename: Phsensor.jpg
surveyurl: https://www.research.net/r/Grove_PH_Sensor
sku:  101020065
--- -->
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/Phsensor.jpg)

¿Necesitas medir el pH de una solución acuosa? Aquí, el sensor Grove - PH puede ayudarte a hacerlo. Este sensor puede generar una señal que corresponde a la concentración de iones de hidrógeno medida por el electrodo de PH. Debido a que puede conectarse directamente al controlador, puedes observar el valor de PH en cualquier momento. Este dispositivo puede utilizarse para mediciones de PH, como aguas residuales, alcantarillado y otras ocasiones.

:::note
Solo serán válidos los pedidos nacionales. No realices un pedido si tu dirección no está en China.
:::

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html)

## Características

---

* Interfaz Grove
* Amplio rango de medición
* Vida útil de dos años
* Punto Isopotencial: pH 7.00 (0 mV)

## Especificaciones

---
<center>
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Típico</th>
<th scope="col">Unidades</th>
</tr>
<tr>
<th scope="row">Voltaje de Trabajo</th>
<td>5</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Punto isopotencial</th>
<td>7±0.5</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">Rango de Medición</th>
<td>0~14</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">Rango de Salida del Sensor de pH</th>
<td>-414.12 ~ 414.12</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">Precisión de Medición</th>
<td>&lt;15</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">Tiempo de Respuesta</th>
<td>&lt;2</td>
<td>min</td>
</tr>
<tr>
<th scope="row">Rango de Temperatura</th>
<td>0~60</td>
<td>℃</td>
</tr>
</table>

</center>

## Esquemático

---
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Schematic.jpg)

## Uso

---
El sensor de pH puede ayudarte a detectar el valor de pH. El éxito o fracaso de la medición de pH depende de la calibración y mantenimiento del sensor de pH. Ahora comencemos desde cómo calibrar.

### Calibración

* Antes de usar, necesitas usar agua pura o agua desionizada para lavarlo y luego absorber el agua con papel (el papel debe estar sin fibras). Recuerda, es mejor no limpiarlo porque limpiar el electrodo de pH causará errores. Aquí hay una imagen de referencia:
*

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Usage.jpg)

En esta imagen, se usa una [solución tampón](http://www.chemguide.co.uk/physical/acidbaseeqia/buffers.html) de pH 9.18 como solución de referencia, que nos ayuda a saber si el valor medido es preciso.
Ahora veamos cuál es el valor medido.

* Sube el código de demostración. Por favor haz clic [aquí](/es/Upload_Code) si no sabes cómo subir

```
//Function: The PH sensor output voltage value,
//          convert into PH and then display in the serial monitor.
#define Vref 4.95
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    int sensorValue;
    int m;
    long sensorSum;
    for(m=0;m<50;m++)
    {
        sensorValue=analogRead(A0);//Connect the PH Sensor to A0 port
        sensorSum += sensorValue;
    }
    sensorValue =   sensorSum/50;
    Serial.print(" the PH value is");
    Serial.println(7-1000*(sensorValue-372)*Vref/59.16/1023);

}
```

* Abre el monitor serie para ver el resultado:

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_result.jpg)

* Observa el resultado, puedes ver que el resultado de la prueba es consistente con el valor real. Así que puedes comenzar a medir el pH de soluciones acuosas. Si hubiera errores entre el pH del líquido de referencia y el valor de pH medido, sería mejor remojar el electrodo de pH durante varias horas y luego recalibrar. [Aquí](http://www.ehow.com/how_4796148_calibrate-ph-meter.html) hay una guía sobre cómo calibrar para referencia.

**Nota:** Si el valor medido que obtienes se mantiene más alto o más bajo de lo que debería ser, la razón podría ser un valor Vref inapropiado. Vref es el voltaje de trabajo de Arduino.

La relación entre el valor de pH y el voltaje de salida:
<font color="blue">E=59.16(mV/PH)</font>

### Limpieza y Almacenamiento

El electrodo de pH es el componente más sensible de tu instrumento de pH. Y el electrodo de pH no puede dejarse secar o congelar. El mantenimiento adecuado proporcionará años de medición confiable. Así que [el cuidado y mantenimiento del electrodo de pH](http://www.eutechinst.com/techtips/tech-tips26.htm) no es menos importante que la calibración. Por favor recuerda: cuando no esté en uso, debes lavarlo y mantenerlo en el contenedor de KCl 3mol. El KCL 3mol necesitas prepararlo. El método de preparación puede referirse a la información siguiente:

Basado en<font color="red"> 3 mol * ( 74.55 g / 1 mol KCl) = 223.65 g KCl)</font>
Así que para preparar una solución KCl de 3 mol / L, necesitarías disolver 223.65 g de KCl en algo de agua, mezclar, y luego llenarlo hasta la marca de 1 L con agua.

¡Espero que esto ayude!

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - Archivo Eagle del Sensor PH](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip)

* [Grove - Esquemático del Sensor PH en PDF](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_v1.0.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
