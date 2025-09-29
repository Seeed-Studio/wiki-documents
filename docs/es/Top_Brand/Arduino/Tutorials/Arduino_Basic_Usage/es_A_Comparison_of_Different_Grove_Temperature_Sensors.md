---
description: Una Comparación de Diferentes Sensores de Temperatura Grove
title: Una Comparación de Diferentes Sensores de Temperatura Grove

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/A_Comparison_of_Different_Grove_Temperature_Sensors
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---


La temperatura es un parámetro físico muy importante en nuestras vidas diarias. La medición de temperatura puede ser crítica en aplicaciones industriales y pruebas experimentales en laboratorios, algunos electrodomésticos también requieren medir la temperatura para el control de temperatura.
La familia Grove proporciona hasta diez tipos de sensores que pueden ser utilizados para medir temperatura. Todos se caracterizan por su alta confiabilidad y la interfaz Grove fácil de usar, pero sí tienen sus diferencias y pueden ser utilizados para diferentes proyectos y aplicaciones.
Aquí en este wiki hacemos una lista de las características clave de cada sensor de temperatura Grove, incluyendo costo, rango de medición, precisión, sensibilidad, tiempo de respuesta, estabilidad a largo plazo y así sucesivamente. La tabla puede ser una referencia para que elijas el sensor óptimo para tus proyectos.

# Cómo Elegir el Sensor de Temperatura Óptimo

Antes de que mires la tabla, hay varias cosas que necesitan ser consideradas para seleccionar un sensor correcto para tu proyecto.

### En primer lugar, ¿cuál es el objeto a ser medido?

¿Es la temperatura del aire ambiente en la habitación o un recinto específico? ¿Es una salida de aire para flujo de aire o un tanque de agua para líquido? ¿O tal vez un sistema electrónico que puede encontrar alto voltaje y causar calentamiento? Cosas como estas afectarían tu elección de sensores basada en presupuesto de costo, consumo de energía, factores de seguridad, tiempo de respuesta, e incluso la distancia del sensor al instrumento. Por ejemplo, si estás midiendo la temperatura en tu habitación, podrías solo necesitar un termómetro barato, de bajo costo que no necesite ser muy sensible. Pero si tu objeto es un invernadero para cultivar plantas, podrías necesitar un sensor de alta precisión y sensible que mida precisamente tanto la temperatura como la humedad.

### En segundo lugar, ¿cuál es el rango esperado de temperatura a ser medida?

El rango esperado de temperatura a ser medida es muy importante. Si la temperatura del objeto excede el rango de medición del sensor, puede resultar en daño irreversible al módulo del sensor o incluso al sistema que está conectado al sensor.

### Otra consideración es, ¿qué tan preciso necesitas que sea?

Los sensores de temperatura como los termopares tienen un rango de medición muy amplio y son adecuados para ser utilizados en ambiente hostil, pero usualmente carecen de precisión y estabilidad a largo plazo. La precisión de medición es crítica en algunos casos como dispositivos médicos, dispositivos portátiles y algunas instalaciones domésticas etc. Los sensores con mayor precisión usualmente tienen mayor costo y tienen que ser utilizados muy cuidadosamente para evitar daño físico en él (algunos pueden requerir no tocarlo con la mano desnuda).

# Especificación

|Nombre del Sensor de Temperatura|Interfaz|Rango|Precisión|Sensibilidad|Hoja de Datos|
|-----------------------|---------|----|---------|-----------|----|
|[Sensor de Temp y Humedad](https://wiki.seeedstudio.com/es/Grove-TemperatureAndHumidity_Sensor/) | Digital | 0~50C|+-2C|1C|[DHT11](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/DHT11.pdf)|
|[Sensor de Temp y Humedad Pro](https://wiki.seeedstudio.com/es/Grove-Temperature_and_Humidity_Sensor_Pro/) | Digital | -40~80C|+-0.5C|0.1C| [DHT22/AM2302](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302.pdf) |
|[Sensor de Temperatura](https://wiki.seeedstudio.com/es/Grove-Temperature_Sensor_V1.2/) | Analógico | -40~125C|+-1.5C|N/A|[NCP18WF104F03RC](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf) |
|[Sensor de Temperatura One Wire](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) | One Wire | -55~125C|+-0.5C|0.5C|[DS18B20](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) |
|[Sensor de Alta Temperatura](https://wiki.seeedstudio.com/es/Grove-High_Temperature_Sensor/) |Analógico|-50~600C|2%|N/A|Termopar Tipo K|
|[Sensor de Temperatura y Humedad (Alta Precisión y Mini)](https://wiki.seeedstudio.com/es/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/) |I2C|0~70C|+-0.5C|1C|[TH02](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf) |
|[SENSOR DE TEMPERATURA INFRARROJO DIGITAL](https://wiki.seeedstudio.com/es/Grove-Digital_Infrared_Temperature_Sensor/) |I2C|-40~85C|+-0.5C|0.02C|[MLX90615](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf) |
|[Sensor de Temperatura y Humedad(SHT31)](https://wiki.seeedstudio.com/es/Grove-TempAndHumi_Sensor-SHT31/) |I2C|-40~125C|+-0.3C|0.01C|[SHT31](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip) |
|[SENSOR DE TEMPERATURA INFRARROJO](https://wiki.seeedstudio.com/es/Grove-Infrared_Temperature_Sensor/) |Analógico|-10~100C|N/A|N/A|[OTP-538U](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip) |
|[Sensor de Temperatura y Humedad(HDC1000)](https://wiki.seeedstudio.com/es/Grove-TemperatureAndHumidity_Sensor-HDC1000/) |I2C|-40~125C|+-0.2C|0.01C|[HDC1000](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf) |
|[Sensor Barómetro(BMP180)](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BMP180/) |I2C|-40~85C|+-0.5C|0.1C|[BMP180](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf) |
|[Sensor Barómetro(BMP280)](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BMP280/) |I2C|-40~85C|+-0.5C|0.01C|[BMP280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf) |
|[Sensor de Temp, Humedad y Barómetro(BME280)](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BME280/) |I2C|-40~85C|+-0.5C|0.01C|[BME280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf) |

Para más detalles, por favor descarga la siguiente lista.

[![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/list.png)](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/res/temperature%C2%A0sensor%20v2.xlsx)

# Groves

|Sensor Temp&Humi | Sensor Temp&Humi Pro | Termistor |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/1.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/2.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/3.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

|Termopar | TH02| Infrarrojo Digital|
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/4.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/5.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/6.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/depot/Grove-High-Temperature-Sensor-p-1810.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

|SHT31| Infrarrojo| HDC1000 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/7.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/8.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/9.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

| BMP180 | BMP280 | BME280 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/10.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/11.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/12.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)|

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
