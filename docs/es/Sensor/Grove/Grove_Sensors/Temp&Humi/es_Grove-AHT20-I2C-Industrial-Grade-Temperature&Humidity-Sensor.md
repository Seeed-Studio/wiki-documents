---
description: Grove - AHT20 I2C Sensor de Temperatura y Humedad de Grado Industrial
title: Grove - AHT20 I2C Sensor de Temperatura y Humedad de Grado Industrial
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" /></div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

AHT20 es una nueva generación de sensor de temperatura y humedad integrado con un paquete SMD plano de doble fila y sin cables, adecuado para soldadura por reflujo. AHT20 está equipado con un chip ASIC de nuevo diseño: un sensor de humedad capacitivo semiconductor MEMS mejorado, y un sensor de temperatura estándar en chip. El rendimiento del AHT20 es más estable en entornos adversos comparado con la generación anterior de sensores de temperatura y humedad como Grove - Temperature & Humidity Sensor Pro (AM2302/DHT22), de hecho, AHT20 es adecuado para la mayoría de escenarios industriales.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para detección ambiental. Por favor consulta el S2101 Sensor Inalámbrico de Temperatura y Humedad con mayor rendimiento y robustez para monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 Temp. y Humedad del Aire</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Característica

- Rango de medición de temperatura -40 ~ 85°C, Rango de medición de humedad 0 ~ 100% RH
- Salida digital, interfaz Grove I2C
- Excelente estabilidad a largo plazo
- Paquete SMD adecuado para soldadura por reflujo
- Respuesta rápida y fuerte capacidad anti-interferencia
- Compatible con Arduino
- Interfaz de 4 pines reservada

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de Operación |DC: 2.0V-5.5V|
|Rango de Medición (humedad) |0 ~ 100% RH|
|Rango de Temperatura| -40 ~ + 85 ℃|
|Precisión de Humedad|± 2% RH (25 ℃)|
|Precisión de Temperatura| ± 0.3 ℃|
|Resolución| Temperatura : 0.01 ℃; Humedad : 0.024% RH|
|Interfaz de Salida|Interfaz Grove I²C|

|Dirección I2C|0x38| -->

## Plataforma Soportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Comenzando

### Materiales Requeridos

| Seeeduino Lotus V1.1 |Grove-AHT20 Sensor de Temperatura y Humedad|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/small.png" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)|

### Conexión de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/hardware-connection.jpg" /></div>

:::tip
Por favor conecta el cable USB, Grove-AHT20 Sensor de Temperatura y Humedad en la interfaz de Seeeduino Lotus V1.1 con cuidado, de lo contrario podrías dañar el puerto.
:::

- **Paso 1.** Conecta el Grove-AHT20 Sensor de Temperatura y Humedad en la interfaz **I2C** de Seeeduino Lotus V1.1 con un cable Grove.

- **Paso 2.** Conecta Seeeduino Lotus V1.1 a la PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Monitor Serie** en tu Arduino IDE.

### Software

:::caution
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga el [código de demostración](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/archive/master.zip).

- **Paso 2.** Copia todo el archivo **Seeed_Arduino_AHT20** y pégalo en tu archivo de biblioteca de Arduino IDE.

- **Paso 3.** Abre el archivo **BasicRead** de **examples** con tu Arduino IDE.

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

#### Código de Software

```cpp
// ARDUINO DEMO FOR GROVE-AHT20
//
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void setup()
{
    Serial.begin(115200);
    Serial.println("AHT20 DEMO");
    AHT.begin();
}

void loop()
{
    float humi, temp;
    
    int ret = AHT.getSensor(&humi, &temp);
    
    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temerature: ");
        Serial.println(temp);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }
    
    delay(100);
}

// END FILE
```

:::tip
  Si todo va bien, puedes ir al **Monitor Serie** para ver un resultado como el siguiente:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/outcome_aht20.png" /></div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box' }}>
</div>

## Recursos

- **[ZIP]** [Grove-AHT-eagle-file](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip)
- **[PDF]** [Hoja de datos del AHT20](https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/AHT20-datasheet-2020-4-16.pdf)

## Soporte Técnico y Discusión de Productos

Por favor envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
