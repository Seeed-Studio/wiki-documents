---
description: Grove - Sensor de Temperatura y Humedad (HDC1000)
title: Grove - Sensor de Temperatura y Humedad (HDC1000)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-TemperatureAndHumidity_Sensor-HDC1000
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/main.jpg" /></div>

Grove - Sensor de Temperatura y Humedad (HDC1000) utiliza un sensor HDC1000. El HDC1000 fue diseñado por Texas Instruments. Es un sensor de humedad digital con sensor de temperatura integrado que proporciona una excelente precisión de medición con muy bajo consumo de energía. El dispositivo mide la humedad basándose en un sensor capacitivo novedoso. Los sensores de humedad y temperatura están calibrados de fábrica. El innovador WLCSP (Wafer Level Chip Scale Package) simplifica el diseño de la placa con el uso de un paquete ultra-compacto. El elemento sensor del HDC1000 está ubicado en la parte inferior del dispositivo, lo que hace que el HDC1000 sea más robusto contra suciedad, polvo y otros contaminantes ambientales. El HDC1000 es funcional dentro del rango completo de temperatura de –40°C a +125°C, y rango de 0-100% RH.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Compatible con conector Grove
- Interfaz IIC
- Bajo consumo de energía
- Amplio rango de voltaje de operación
- Configuración de dirección del bus serie I2C

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

<table border="1" cellspacing="0" width="800">
<tr>
<th scope="col">
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
<th scope="row">
Voltaje de Alimentación
</th>
<td>
3
</td>
<td>
/
</td>
<td>
5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Trabajo
</th>
<td>
0.12
</td>
<td>
/
</td>
<td>
90
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Precisión de Humedad Relativa (Típ)
</th>
<td>
/
</td>
<td>
±3
</td>
<td>
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Operación de Humedad Relativa (Típ)
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Precisión de Temperatura
</th>
<td>
/
</td>
<td>
±0.2
</td>
<td>
/
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Temperatura
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Temperatura de Operación
</th>
<td>
-20
</td>
<td>
/
</td>
<td>
85
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
40*20
</td>
<td>
mm
</td>
</tr>
</table>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción del Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p3.jpg" /></div>

1. Conector Grove.
2. Ready: Listo para una conversión.
3. Dirección predeterminada: 0x40.
4. ADDR0, ADDR1: Configuración de Dirección del Bus Serie I2C (0x40,0x41,0x42,0x43)

## Primeros Pasos

### Jugar con Arduino

Aquí se muestra cómo usar Grove - Sensor de Temperatura y Humedad (HDC1000) con Seeeduino v4.2.

#### Materiales requeridos

| Seeeduino V4.2 | Base Shield| Grove - Sensor de Temperatura y Humedad(HDC1000) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Paso 1.** Conecta Grove - Temperature&Humidity Sensor(HDC1000) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/connect_arduino.jpg" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Temperature&Humidity Sensor(HDC1000) al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(HDC1000) |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| SDA           | Blanco                   |
| SCL           | Amarillo                  |


#### Software

- **Paso 1.** Descarga la [librería Seeed DHT](https://github.com/Seeed-Studio/HDC1000) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre un nuevo sketch, y copia el siguiente código en el nuevo sketch.

```cpp
/*
 * HDC1000.h
 * A library for HDC1000 1.0
 *
 * Copyright (c) 2015 seeed technology inc.
 * Author     : Pillar Zuo (baozhu.zuo@seeed.cc)
 * Create Time: April 2015
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#include <Wire.h>
#include <HDC1000.h>
 
HDC1000 mySensor;
//HDC1000 mySensor(0x41, 2) <-- DRDYn enabled and connected to Arduino pin 2 (allows for faster measurements).
 
void setup(){
 Serial.begin(9600);
 mySensor.begin();
}
 
void loop(){
 Serial.print("Temperature: ");
 Serial.print(mySensor.getTemp()); 
 Serial.print("C, Humidity: ");     
 Serial.print(mySensor.getHumi());
 Serial.println("%");
 delay(1000);
}


```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**. Si todo va bien, obtendrás los resultados.

El resultado debería ser como:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/result.png" /></div>

:::tip
        Puede necesitar un período de tiempo antes de que el resultado se vuelva estable.
:::

### Jugar Con Raspberry Pi

#### Hardware

**Materiales requeridos**

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank">Obtener Uno Ahora</a>|

- **Paso 1.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 2.** Conecta este sensor al puerto **I2C** del GrovePi_Plus.

- **Paso 3.** Conecta el Raspberry a la PC mediante cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/pi_connect.jpg" /></div>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::

:::note
Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 3.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Ejecuta los siguientes comandos para obtener el valor.

```
cd ~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000
sudo python3 grove_hdc_1000_example.py
```

El resultado debería ser como:

```python

pi@raspberrypi:~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000$ sudo python3 grove_hdc_1000_example.py 
Temp    : 27.94 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.21 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.43 %
-----------------
Temp    : 29.23 C
Humidity: 78.04 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------

```

Si quieres revisar el código, puedes usar el siguiente comando:

```
sudo nano grove_hdc_1000_example.py

```

### Con Launchpad

#### Material requerido

- TI MSP430FR4133 LaunchPad\] × 1
- Cable USB (tipo A a mini tipo-b) × 1
- [Grove - Cable de Conversión de 4 pines Hembra Jumper a Grove 4 pines](https://www.seeedstudio.com/depot/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck-p-1020.html) × 1
- [Grove - Sensor de Temperatura y Humedad (HDC1000)](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125) × 1

#### Conexiones de hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_connections-with_launchpad-2400_s.JPG" /></div>

#### Descargar código y grabarlo en Launchpad

1. Descarga el [código de demostración](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000-HDC1000_energia.zip).

  <div className="admonition note">
  <p className="admonition-title">Nota</p>
  Tienes que copiar el archivo <span style={{fontStyle: 'italic'}}>readTempHumi.ino</span> (en la carpeta <span style={{fontStyle: 'italic'}}>examples</span>) en la misma carpeta que <span style={{fontStyle: 'italic'}}>HDC1000.h</span>.
</div>

2. Graba el código en Launchpad.

3. Abre *Monitor Serie* (**Herramienta**->**Monitor Serie**) para ver los datos detectados.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_result-with_launchpad-600.png" /></div>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Sensor de Temperatura y Humedad(HDC1000) v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip)
- **[Pdf]** [Grove - Sensor de Temperatura y Humedad(HDC1000) v1.0 sch.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch.pdf)
- **[Librería]** [Código de demostración](https://github.com/Seeed-Studio/HDC1000)
- **[Hoja de datos]** [HDC1000_DataSheet.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_Temperature&Humidity_Sensor_(HDC1000) -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>