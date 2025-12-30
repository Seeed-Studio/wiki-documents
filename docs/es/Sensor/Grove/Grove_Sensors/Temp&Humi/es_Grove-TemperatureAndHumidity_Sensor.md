---
description: Grove - Sensor de Temperatura y Humedad (DHT11)
title: Grove - Sensor de Temperatura y Humedad (DHT11)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-TemperatureAndHumidity_Sensor
last_update:
  date: 12/29/2025
  author: Brandy
---


# Grove - Sensor de Temperatura y Humedad (DHT11)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" /></div>

Este sensor de temperatura y humedad proporciona una salida digital precalibrada. Un elemento sensor capacitivo único mide la humedad relativa y la temperatura se mide mediante un termistor de coeficiente de temperatura negativo (NTC). Tiene excelente confiabilidad y estabilidad a largo plazo. Ten en cuenta que este sensor no funcionará para temperaturas por debajo de 0 grados.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de la calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

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
          <strong>S2101 Temperatura y Humedad del Aire</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Características

--------

- Medición de humedad relativa y temperatura
- Compensación de temperatura de rango completo calibrada
- Señal digital
- Estabilidad a largo plazo
- Larga distancia de transmisión (>20m)
- Bajo consumo de energía

:::tip
Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Ideas de Aplicaciones

------------------

- Producto de consumo
- Estación meteorológica
- Regulador de humedad
- Aire acondicionado

## Especificaciones

--------------

### Especificaciones Clave

| Elementos    |   Mín                  |
|--------------|------------------------|
| Tamaño PCB   | 2.0cm*4.0cm            |
| Interfaz     | Conector de pines de 2.0mm |
| Estructura E/S | SIG,VCC,GND,NC       |
| ROHS         | SÍ                     |

### Características Electrónicas

<table border="1">
<tr>
<th>
Elementos
</th>
<th>
Condiciones
</th>
<th>
Mín
</th>
<th>
Nom
</th>
<th>
Máx
</th>
<th>
Unidad
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Voltios
</td>
</tr>
<tr align="center">
<td>
Suministro de Corriente de Medición
</td>
<td>
-
</td>
<td>
1.3
</td>
<td>
-
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Suministro de Corriente Promedio
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Rango de Medición
</td>
<td>
Humedad
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Precisión
</td>
<td>
Humedad
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensibilidad
</td>
<td>
Humedad
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repetibilidad
</td>
<td>
Humedad
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Estabilidad a Largo Plazo
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/año
</td>
</tr>
<tr align="center">
<td>
Período de Recolección de Señal
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>

Plataformas Compatibles
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::note
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Primeros Pasos

Cuando el MCU envía una señal de activación, el sensor cambiará del modo de bajo consumo de energía al modo activo. Después de la señal de activación, el sensor enviará una señal de respuesta de vuelta al MCU, luego se envían 40 bits de datos recolectados y se activa una nueva recolección de señal. (Ten en cuenta que los 40 bits de datos recolectados que se envían del sensor al MCU ya fueron recolectados antes de que llegue la señal de activación.) Una señal de activación recibe una vez 40 bits de datos de respuesta del sensor. Se utiliza datos de bus único para la comunicación entre MCU y sensor.
El proceso de comunicación se muestra a continuación:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg" /></div>

Cuesta 5ms para una sola comunicación. El bit de orden superior de los datos se envía primero. Los Datos de Señal son de 40 bits, compuestos por 16 bits de datos de humedad, 16 bits de datos de temperatura y 8 bits de suma de verificación. El formato de datos es:

    8bits parte entera de humedad+8bits parte decimal de humedad
    +8bits parte entera de temperatura+8bits parte decimal de temperatura
    +8bits suma de verificación.

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Sensor de Temperatura y Humedad|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **Paso 2.** Conecta Grove - Sensor de Temperatura y Humedad al puerto **D2** del Grove-Base Shield.

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Temperature and Humidity Sensor Pro a Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Temperature&Humidity Sensor |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D2            | Amarillo                  |

#### Software

- **Paso 1.** Descarga la [librería Seeed DHT](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo "DHTtester" a través de la ruta: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. A través de esta demostración, podemos leer la información de temperatura y humedad relativa del ambiente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
Este Grove - Temperature&Humidity Sensor y nuestro otro producto [Grove-Temperature&Humidity Sensor pro](https://wiki.seeedstudio.com/es/Grove-Temperature_and_Humidity_Sensor_Pro/) comparten esta librería. Sin importar qué producto estés usando, asegúrate de haber activado la línea de definición del sensor de tu placa y comentado las líneas de definición de otras especificaciones. Por ejemplo, el sensor que usamos en Grove - Temperature&Humidity Sensor es DHT 11. Así que la parte de definición de la especificación del sensor debería ser:
:::

```
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

La configuración predeterminada de la librería es `DHT 22`, así que necesitas cambiarla a `DHT 11` manualmente.

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Serial Monitor** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás la temperatura.

El resultado debería ser como:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/result_ar.png" /></div>

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Temperature&Humidity Sensor al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/cc_Temperature_Humidity.png" /></div>

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, verás la temperatura y humedad mostradas en el Serial Monitor.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Temp & Hum Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el sensor de temperatura y humedad al Puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC mediante cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Temp_Hum_Hat.jpg" /></div>

:::note
Para el paso 3 puedes conectar el sensor de temperatura y humedad a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comando **solo con Python3**.
:::

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
:::tip
Uno de los pasos es añadir la librería DHT necesaria, por favor asegúrate de que esté instalada.
:::
- **Paso 2**.Entra al entorno virtual relevante.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Paso 3**. Ejecuta los comandos de abajo para ejecutar el código.

```
nano ~/grove_env/dht11_demo.py
```

Copia el siguiente código

```python
import time
import seeed_dht

sensor = seeed_dht.DHT("11", 12)  
print("DHT11 reading every second, Ctrl+C to quit")
try:
    while True:
        humi, temp = sensor.read()
        print(f"DHT11  Humidity {humi:.1f}%  Temperature {temp:.1f}°C")
        time.sleep(1)
except KeyboardInterrupt:
    print("\nBye")

```

:::tip
    Guardar y salir:
Ctrl+O → Enter → Ctrl+X
:::

  Si todo va bien, podrás ver el siguiente resultado


```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht11_demo.py 
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.1%, temperature 29.1*
DHT11, humidity 40.0%, temperature 29.1*
DHT11, humidity 39.9%, temperature 29.1*
DHT11, humidity 40.3%, temperature 29.1*
DHT11, humidity 42.0%, temperature 29.1*
```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

Primero, necesitas preparar las siguientes cosas:

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 3.** Conecta Grove - Temperature&Humidity Sensor al puerto **D4** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC mediante cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_pi.jpg" /></div>

#### Software

- **Paso 1.** Sigue [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Actualización del Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::

:::note
Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comando **solo con Python3**.
:::

- **Paso 3.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Revisa el código.

```python

cd ~/GrovePi/Software/Python
sudo nano grove_dht_pro.py

```

El código debería ser como:

```python
import grovepi
import math
# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# This example uses the blue colored sensor.
# SIG,NC,VCC,GND
sensor = 4  # The Sensor goes on digital port 4.

# temp_humidity_sensor_type
# Grove Base Kit comes with the blue sensor.
blue = 0    # The Blue colored sensor.
white = 1   # The White colored sensor.

while True:
    try:
        # This example uses the blue colored sensor.
        # The first parameter is the port, the second parameter is the type of sensor.
        [temp,humidity] = grovepi.dht(sensor,blue)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Luego presiona ++ctrl+x++ para salir de nano.

:::note
El Grove - Temperature&Humidity Sensor y el Grove - Temperature&Humidity Sensor pro comparten el mismo código python que se llama `grove_dht_pro.py`. La única diferencia es que para la sentencia `[temp,humidity] = grovepi.dht(sensor,blue)`. Usamos el parámetro `blue` para Grove - Temperature&Humidity Sensor mientras que usamos `white` para el Grove - Temperature&Humidity Sensor pro. El valor predeterminado es blue, así que para este sensor no necesitas cambiar el código.
:::

- **Paso 5.** Ejecuta los comandos de abajo para obtener el valor.

```
sudo python3 grove_dht_pro.py
```

El resultado debería ser así:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%

```

### Jugar con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara lo siguiente:

| Wio Terminal | Grove - Sensor de Temperatura y Humedad (DHT11) |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new.jpeg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

- **Paso 2.** Conecta Grove - Sensor de Temperatura y Humedad al puerto **D0** del Wio Terminal.

- **Paso 3.** Conecta Wio Terminal a la PC a través del cable USB Type-C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-connect.jpeg" /></div>

#### Software

- **Paso 1.** Sigue [**Introducción a ArduPy**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy contenga la biblioteca DHT usando los siguientes comandos. Para más información, sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-dht/archive/main.zip
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-DHT.py`:

```python
from arduino import grove_dht
from machine import LCD, Sprite
import time 

dht = grove_dht(0,11)
lcd = LCD() # initialize TFT LCD 
spr = Sprite(lcd) # initialize buffer

def main(): # main function 
    spr.createSprite(320, 240) # create buffer
    while True: # while loop
        spr.fillSprite(spr.color.WHITE) # fill background 

        # two fill rectangles
        spr.fillRect(0,0,160,240,spr.color.DARKGREEN) # fill rectangle in color
        spr.fillRect(160,0,160,240,spr.color.BLUE)

        # temp and humid text draw 
        spr.setTextSize(2) # set text size
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN) # set text color
        spr.drawString("Temperature", 15, 65) # draw string 
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) 
        spr.drawString("Humidity", 190, 65) 

        # obtain readings 
        t = dht.temperature # store temperature readings in variable 
        h = dht.humidity # store humidity readings in variable 

        # display temp readings
        spr.setTextSize(4)
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN)
        spr.drawNumber(int(t),50,110) # display number  
        spr.drawString("C", 100, 110) 

        # display humi readings
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) # set text color
        spr.drawNumber(int(h),180,110)  
        spr.drawString("%RH", 235, 110) 

        spr.pushSprite(0,0) # push to LCD
        time.sleep_ms(100)

        print("temperature:",t,"C", end ="     ")
        print("humidity:",h,"%RH")

if __name__ == "__main__": # check whether this is run from main.py
    main() # execute function
```

- **Paso 4.** Guarda el `ArduPy-DHT.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-DHT.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
```

Ahora, la información de temperatura y humedad se mostrará en la ventana del símbolo del sistema/terminal y también en la pantalla LCD del Wio Terminal.

```python
C:\Users\user>aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
Positional argument (COM4) takes precedence over --open.
Connected to ardupy
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-demo.jpeg" /></div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo eagle del Sensor de Temperatura y Humedad](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip)

- **[Zip]** [Biblioteca del Sensor de Temperatura y Humedad](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Grove_Temperature_and_Humidity_Sensor_CDC_File.zip)

## Proyectos

**Sistema de Gestión de Baños**: Usando el sistema, múltiples personas pueden compartir un solo baño de manera eficiente.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/toilet-management-system-8e2786/embed' width='350'></iframe>

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

