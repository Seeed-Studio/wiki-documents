---
description: Grove - Sensor de Temperatura Infrarrojo
title: Grove - Sensor de Temperatura Infrarrojo
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Infrared_Temperature_Sensor
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/main.jpg" /></div>

El sensor de temperatura infrarrojo es un modelo de medición de temperatura sin contacto. Está compuesto por 116 elementos de termopar en serie sobre una micro-membrana flotante, la superficie negra del sensor es buena para absorber la radiación térmica infrarroja incidente, lo que puede desencadenar una respuesta de voltaje en la salida. Este sensor emite un voltaje analógico (0~1.1V) según la temperatura objetivo.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Versión

Versión del Producto | Cambios | Fecha de Lanzamiento
--|--|--
Grove - Sensor de Temperatura Infrarrojo v1.0 | Inicial | 11 Dic. 2015
Grove - Sensor de Temperatura Infrarrojo v1.1 | Optimizar el diseño  | 24 Jul. 2016
Grove - Sensor de Temperatura Infrarrojo v1.2 | Cambiar el chip de alimentación para hacer la alimentación más estable  | 10 Feb. 2018

## Especificaciones

- Voltaje: 3-5V
- Corriente de Alimentación de Medición: 160-200 uA
- Rango de Medición: -10~100°C
- Tiempo de Retención: 2S
- Temperatura de Operación: -10~80 °C
- Temperatura de Almacenamiento: -35-80 °C

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

El siguiente sketch demuestra una aplicación simple de medir la temperatura del entorno alrededor del sensor y la temperatura del objetivo que está frente al sensor. E imprimir el resultado en el monitor serie.

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2 | Base Shield| Grove - Sensor de Temperatura Infrarrojo |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/JUH4jM8D85pxTHah3QXYxhe7.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|

- **Paso 2.** Conecta Grove - Sensor de Temperatura Infrarrojo al puerto **A0** del Grove-Base Shield.

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/connect.jpg" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Sensor de Temperatura Infrarrojo al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Sensor de Temperatura Infrarrojo |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| A1            | Blanco                   |
| A0            | Amarillo                  |

#### Software

- **Paso 1.** Descarga el [Código de Demostración](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip), luego haz doble clic para abrir la demostración.

Antes de medir la temperatura, necesitas una configuración simple. Sigue las instrucciones a continuación antes de tu prueba y obtendrás un resultado preciso.

- **Paso 2.** Regula el voltaje del sensor

Después de cargar el programa de demostración, mantén el sensor en un ambiente normal por más de 5 minutos para que la temperatura del sensor sea igual a la temperatura del entorno. Luego abre el monitor serie para verificar el voltaje que produce el sensor. Idealmente, cuando la temperatura ambiente es igual a la del sensor de temperatura, la salida del sensor infrarrojo (TP-538U) es 0V. Debemos regular el voltaje de referencia que se desplaza a 0.5V por hardware. Como se muestra a continuación, el voltaje del sensor es 0.014V, solo necesitamos cambiar el valor offset_vol a 0.014 que obtienes del monitor serie en el programa.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_code2.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Serialmonitor.jpg" /></div>

- **Paso 3.** Regula la distancia de detección del sensor

Según nuestro experimento, la distancia nominal de medición del sensor es 9CM, pero no podemos asegurar que todos los sensores tengan las mismas características. Así que si quieres tener un resultado preciso, necesitas regularlo con una mezcla de hielo y agua para medir los 0℃, y usar agua hervida para regular los 100℃. Después de eso, puedes obtener la distancia efectiva del sensor.

El método específico para medir es llenar con hielo y agua un contenedor oscuro que tenga una superficie plana. Espera a que el contenedor baje a 0℃, mantén el sensor a 9CM del objeto, mueve el sensor hacia adelante o hacia atrás y verifica el resultado, si la salida es 0℃, anota el valor de la distancia. El mismo método para verificar el agua hervida. Cuando obtengas un par de valores, haz un cálculo promedio. Puedes comenzar a medir en una distancia nominal que acabas de obtener.

Ahora podemos medir la temperatura del entorno alrededor del sensor. El sensor se aplica en una distancia nominal, puedes probarlo en otra distancia, pero el diagrama distancia-temperatura ni el fabricante del sensor ni nosotros lo obtuvimos, puedes dibujarlo siguiendo las dos instrucciones anteriores. Reservamos la variable **"temperature_range"** en el código de demostración. Asumimos que la distancia objetivo es 3 cm, el coeficiente que mediste puede ser 5 más o menos. Esperamos que tengas una prueba divertida.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_Code_1.jpg" /></div>

:::note
**1**. El código de demostración no es compatible con Atmega168.

**2**. Para obtener una medición precisa, la relación entre la distancia(D) y el diámetro objetivo(S) D:S debe ser menor que 0.5.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Dsdiagram.jpg" /></div>

- **Paso 4.** Carga la demostración. Si no sabes cómo cargar el código, por favor revisa [Cómo cargar código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás la temperatura.

El resultado debería ser así:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/result_arduino.png" /></div>

# Grove-Sensor de Temperatura Infrarrojo V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Sensor de Temperatura Infrarrojo V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo Eagle del Grove-Sensor de Temperatura Infrarrojo V1.2](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip)
- **[Zip]** [Archivo Eagle del Grove-Sensor de Temperatura Infrarrojo V1.0](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip)
- **[Zip]** [Hoja de Datos OTP-538U](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip)
- **[Zip]** [Código de Demostración](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip)
- **[Zip]** [Código de Demostración de Temperatura Infrarroja con SerialLCD](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_temperature_demo_code_with_serialLCD.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Infrared_Temperature_Sensor -->

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
