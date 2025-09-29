---
description: Grove - Sensor UV
title: Grove - Sensor UV
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-UV_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/UV_Sensor_01.jpg" /></div>

El Grove – Sensor UV se utiliza para detectar la intensidad de la radiación ultravioleta (UV) incidente. Esta forma de radiación electromagnética tiene longitudes de onda más cortas que la radiación visible. El Grove - Sensor UV está basado en el sensor GUVA-S12D que tiene un amplio rango espectral de 200nm-400nm. El módulo produce una señal eléctrica que varía con la intensidad UV, lo que te da una sugerencia sobre si es una buena idea ir a la playa hoy.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Características
--------

- Alta estabilidad
- Buena sensibilidad
- Bajo consumo de energía
- Sensor de fotodiodo tipo Schottky
- Amplio rango de respuesta
- Interfaz Grove

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
--------------

| Elemento            | Mín | Típico | Máx | Unidad |
|---------------------|-----|---------|-----|------|
| Voltaje de Operación   | 3.0 | 5.0     | 5.1 | VDC  |
| Corriente             |     | 0.31    |     | mA   |
| Voltaje de Salida      |     |         |     | mV   |
| Longitud de onda de respuesta | 240 | ~       | 370 | nm   |
| Temperatura de Trabajo | -30 | ~       | 85  | ℃    |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Ideas de Aplicación
-----

- Los sensores UV se utilizan en muchas aplicaciones diferentes, incluyendo productos farmacéuticos, automóviles y robótica.
- Los sensores UV también se utilizan en la industria de la impresión para el manejo de solventes y procesos de teñido.
- Además, los sensores UV se utilizan en la industria química para la producción, almacenamiento y transporte de químicos también.

La teoría del sensor UV es: En la luz solar, el índice UV y la fotocorriente tienen una relación lineal.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/The%20theory%20of%20UV%20sensor.png" /></div>

Acerca de nuestro Grove - Sensor UV, hemos convertido la fotocorriente al valor de voltaje correspondiente recolectado por Arduino/Seeeduino. El voltaje de salida y el índice UV es lineal:

**intensidad de iluminación = 307 * Vsig**

Vsig es el valor de voltaje medido desde el pin SIG de la interfaz Grove, unidad V.
unidad de intensidad de iluminación: mW/m<sup>2</sup> para la fuerza combinada de luz UV con rango de longitud de onda: 240nm~370nm

:::note
Para calcular el valor del índice UV, por favor consulte <a href="http://www2.epa.gov/sunwise/uv-index">US EPA</a>. Es difícil decir que la medición de este sensor puede ser convertida al índice UV estándar de la EPA, pero puede ser estimada aproximadamente.
:::

Índice UV = intensidad de iluminación / 200

Primeros Pasos
--------------

:::note
    Este capítulo está basado en Win10 y Arduino IDE 1.6.9
:::

Te mostraremos cómo funciona este Grove - Sensor UV a través de una demostración simple. Primero que todo, necesitas preparar las siguientes cosas:

| Seeeduino V4 | Grove - Sensor UV | Base Shield |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

**Conexión**

Gracias a los beneficios de los módulos de la serie Grove, no necesitas hacer soldaduras o usar una protoboard, lo que necesitas hacer es conectar los módulos al puerto correcto del Base Shield. Para esta demostración, solo necesitamos un módulo Grove.

- Conecta el Sensor UV Grove al puerto A0 del Grove - Base Shield.
- Conecta el Grove - Base Shield al Arduino/Seeeduino y conéctalos a la PC usando un cable USB.
- El código de demostración se muestra a continuación.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/connection.jpg" /></div>

**Sube el sketch al Arduino y abre el puerto serie para monitorear los datos**

```
// modified by Victor
// to calculate UV index directly
void setup(){

    Serial.begin(9600);
}

void loop()
{
    int sensorValue;
    long  sum=0;
    for(int i=0;i<1024;i++)// accumulate readings for 1024 times
    {
        sensorValue=analogRead(A0);
        sum=sensorValue+sum;
        delay(2);
    }
    long meanVal = sum/1024;  // get mean value
    Serial.print("The current UV index is:");
    Serial.print((meanVal*1000/4.3-83)/21);// get a detailed calculating expression for UV index in schematic files.
    Serial.print("\n");
    delay(20);

}
```

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - UV Sensor v1.1 PCB y esquemáticos (versión actual) en formato Eagle](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip)
- [Grove - UV Sensor v1.1 PCB (versión actual) en formato PDF](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1%20brd.pdf)
- [Grove - UV Sensor v1.1 esquemáticos (versión actual) en formato PDF](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1sch.pdf)
- [Grove - UV Sensor v1.1 Hojas de datos del sensor (versión actual)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.1_Datasheets.zip)
- [Sugerencias de la EPA de EE.UU. sobre radiación UV](https://www.epa.gov/sunsafety/uv-index-scale-1)
- [Grove - UV Sensor v1.0 esquemáticos y hojas de datos (versión anterior)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.0_Datasheets.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_UV_Sensor -->

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

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
