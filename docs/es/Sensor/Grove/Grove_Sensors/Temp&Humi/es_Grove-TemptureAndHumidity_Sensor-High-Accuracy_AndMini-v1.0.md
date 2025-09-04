---
description: Grove - Sensor de Temperatura y Humedad (Alta Precisión y Mini) v1.0
title: Grove - Sensor de Temperatura y Humedad (Alta Precisión y Mini) v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/main.jpg" /></div>

Este es un sensor multifuncional que te proporciona información de temperatura y humedad relativa al mismo tiempo. Utiliza un sensor TH02 que puede satisfacer las necesidades de medición para propósitos generales. Proporciona lecturas confiables cuando las condiciones de humedad del ambiente están entre 0-80% HR, y las condiciones de temperatura entre 0-70°C, cubriendo las necesidades en la mayoría de aplicaciones domésticas y diarias que no contienen condiciones extremas.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Por favor, consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de la calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
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
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temp. y Humedad del Aire</strong></a></td>
    </tr>
  </tbody></table>

Especificaciones
--------------

- Amplio rango de voltaje de operación
  - (3.3V ~ 5V)
- Bajo Consumo de Energía
  - 350 µA durante la conversión de HR
- Rango de operación de 0 a 100% HR
- Rango de Medición:
  - Humedad: 0% - 80% HR
  - Temperatura: 0 ~ 70 °C
- Precisión:
  - Humedad: ±4.5% HR
  - Temperatura: ±0.5°C
- Interfaz host I2C
- Excelente estabilidad a largo plazo

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## 　Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Aplicaciones

- HVAC/R industrial
- Termostatos/humidistatos
- Microambientes/centros de datos

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Sensor de Temperatura y Humedad |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/Thumbnail.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|

- **Paso 2.** Conecta Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) v1.0 al puerto **I2C** del Grove-Base Shield.

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/arduino_connect.jpg" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Temperature and Humidity Sensor Pro al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Temperature&Humidity Sensor |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| SDA           | Blanco                   |
| SCL            | Amarillo                  |

#### Software

- **Paso 1.** Descarga la [biblioteca Grove Temperature&Humidity TH02](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo "TH02_demo" a través de la ruta: **File --> Examples --> Grove Temper Humidity_TH02 --> TH02_demo**. A través de esta demostración, podemos leer la información de temperatura y humedad relativa del ambiente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/path.png" /></div>

Esta demostración te va a mostrar cómo leer información de temperatura y humedad desde este Sensor Grove - Temperature&Humidity Sensor (High-Accuracy &Mini).

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás la temperatura.

El resultado debería ser como:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/result_arduino.png" /></div>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Temperature&Humidity Sensor (High-Accuracy & Mini) V1.0 sch pcb](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip)
- **[PDF]** [TH02_SENSOR.pdf](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf)
- **[Biblioteca]** [Biblioteca Grove_Temper_Humidity_TH02](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)

## Proyectos

**Smart Mali**: ¡Una Maceta Inteligente para Jardinería Interior! *(¿Te preguntas qué significa Mali?)*

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/smartmali-1fbdda/embed' width='350'></iframe>

**Monitoreo y Seguimiento de Cadena de Transporte en Frío**: Solución basada en IoT para hacer más eficiente la entrega de productos perecederos sensibles a la temperatura y reducir el desperdicio.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/musketeers/cold-transport-chain-monitoring-and-tracking-48b2c5/embed' width='350'></iframe>

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

