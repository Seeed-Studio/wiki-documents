---
description: Grove - Sensor de Temperatura Infrarrojo Digital
title: Grove - Sensor de Temperatura Infrarrojo Digital
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Digital_Infrared_Temperature_Sensor
last_update:
  date: 1/4/2023
  author: jianjing Huang
---


<table>
  <tbody><tr>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_1.jpg" /></td>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_2.jpg" /></td>
    </tr>
  </tbody></table>

El sensor de temperatura infrarrojo digital es un módulo de medición de temperatura sin contacto que se basa en el MLX90615. Tanto el chip detector termopila sensible a IR como el chip de acondicionamiento de señal están integrados en el mismo paquete. Este módulo se comunica con Arduino usando SMBus, hasta 127 sensores pueden ser leídos a través de 2 cables comunes. Gracias al amplificador de bajo ruido del módulo, ADC de 16 bits y potente unidad DSP, puede lograr una alta precisión de 1℃ sobre un amplio rango de temperatura y una alta resolución de medición de 0.02℃.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Especificaciones
-------------

<table border="1" cellspacing="0" width="70%">
<tr>
<th>
Elemento
</th>
<th>
Mín
</th>
<th>
Típico
</th>
<th>
Máx
</th>
<th>
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje
</th>
<td>
2.6
</td>
<td>
3
</td>
<td>
5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente
</th>
<td>
</td>
<td>
1.4
</td>
<td>
1.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Temperatura Ambiente
</th>
<td colspan="3">
-40 - 85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Temperatura del Objeto
</th>
<td colspan="3">
-40 - 115
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensión
</th>
<td colspan="3">
 20x40x9.6
</td>
<td>
mm
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción General del Hardware
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_4.jpg" /></div>

| Número de Pin | Nombre | Tipo   | Descripción de la Función                             |
|---------------|--------|--------|-------------------------------------------------------|
| 1             | GND    | -      | Tierra de señal                                       |
| 2             | VCC    | in     | Terminal de Entrada de Alimentación Positiva(3.3V o 5V) |
| 3             | SDA    | in/out | Entrada/salida de datos I2C                           |
| 4             | SCL    | in     | CLK I2C                                               |

## Comenzando

### Jugar con Arduino

Proporcionamos un ejemplo aquí para mostrarte cómo usar este sensor para medir la temperatura del objetivo que está frente al sensor, e imprimir el resultado en el monitor serie.

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

#### Hardware

**Componentes de hardware:**

| Seeeduino V4.2 | Base Shield|  Grove - Digital Infrared Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/thumbnail.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

- **Paso 1.** Conecta Grove - Digital Infrared Temperature Sensor al puerto D2 del Grove-Base Shield.
- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/connection.JPG" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Digital Infrared Temperature Sensor a Arduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Digital Infrared Temperature Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| D3           | NA                   |
| D2            | Yellow                  |

#### Software

- **Paso 1.** Descarga la biblioteca y el código de demostración [Digital_Infrared_Temperature_Sensor_MLX90615](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615).
- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.
- **Paso 3.** Abre el código de demostración directamente por la ruta:

  **File -> Examples -> Digital_Infrared_Temperature_Sensor_MLX90615 -> MLX90615Soft**. Como se muestra en la siguiente imagen:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/example.png" /></div>

Dado que el sensor está calibrado de fábrica con la interfaz digital compatible con SMBus habilitada, pero la biblioteca está basada en una biblioteca i2c suave, puedes usar cualquier pin digital en cualquier chip AVR para manejar las líneas **SDA** y **SCL**. Usamos **D2** como el pin **SCL** y **D3** como el pin **SDA** en este código de demostración. Puedes usar otro puerto siempre que modifiques el código con los pines correspondientes.

- **Paso 4.** Sube el código a Arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).
- **Paso 5.** Haz clic en **Tool -> Serial Monitor** para iniciar el Monitor Serie. Y verás el resultado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg" /></div>

Ahora, puedes medir la temperatura con este sensor. La temperatura ambiente es la temperatura del paquete MLX90615 y la temperatura del objeto es la temperatura objetivo del objeto. Según nuestro experimento, cuando colocas el sensor en la temperatura interior normal, y te aseguras de que no hay ninguna fuente de calor frente al alcance de 1M del sensor. La temperatura del objeto será aproximadamente igual a la temperatura ambiente. Al medir la temperatura del objeto, debes asegurar que el objeto esté lo más cerca posible del sensor, pero no toques la superficie del sensor, recomendamos que la distancia sea menor a 3cm. Esperamos que tengas una prueba divertida.

:::tip
Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- **[Zip]** [Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip)
- **[PDF]** [MLX90615.pdf](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf "File:MLX90615.pdf")
- **[Code]** [Código de Demostración](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor -->

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

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
