---
description: Grove - Sensor de Temperatura y Humedad Pro(DHT22)
title: Grove - Sensor de Temperatura y Humedad Pro(DHT22)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Temperature_and_Humidity_Sensor_Pro
last_update:
  date: 12/29/2025
  author: Brandy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/main.jpg" /></div>

 Esta es una versión hermana poderosa de nuestro Grove - Sensor de Temperatura y Humedad Pro. Tiene un rendimiento más completo y preciso que la versión básica. El rango de detección de este sensor es 5% RH - 99% RH, y -40°C - 80°C. Y su precisión alcanza hasta 2% RH y 0.5°C. Una opción profesional para aplicaciones que tienen requisitos relativamente estrictos.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro%EF%BC%88AM2302%EF%BC%89-p-838.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Por favor, consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de la calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

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

## Especificaciones

|Elemento|  Mín |Norm |Máx |Unidad|
|---|---|---|---|---|
|Voltaje de entrada (VCC) | 3.3| -| 6| V|
|Nivel Lógico de E/S|-|basado en VCC|-| V|
|Suministro de Corriente de Medición | 1| -| 1.5| mA|
|Suministro de Corriente en Espera | 40| -| 50| uA|
|Rango de medición **(Humedad)** |5%| -| 99%| RH|
|Rango de medición **(Temperatura)**| -40| - |80| °C|
|Precisión **(Humedad)**|- | -| ±2%| RH|
|Precisión **(Temperatura)** |-|-| ±0.5| °C|
|Resolución **(Humedad)** |-| -| 0.1% |RH|
|Resolución **(Temperatura)** | -|-| 0.1| °C|
|Repetibilidad **(Humedad)**| -| -| ±0.3%| RH|
|Repetibilidad **(Temperatura)**| - |- |±0.2| °C|
|Estabilidad a Largo Plazo|  -| - |±0.5% |RH/año|
|Período de Recolección de Señal |-| 2| -| S|
|Tiempo de Respuesta 1/e(63%)| 6| - |20| S|
|Modo de pin de señal|-|Digital|-|-|

:::tip
    Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Sensor de Temperatura y Humedad Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Obtener Uno Ahora</a>|

:::note
 **1** Por favor conecta el cable USB suavemente, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

- **Paso 1.** Conecta Grove - Sensor de Temperatura y Humedad Pro al puerto **D2** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC a través de un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_arduino.jpg" /></div>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Sensor de Temperatura y Humedad Pro al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Sensor de Temperatura y Humedad Pro |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conectar | Blanco                   |
| D2            | Amarillo                  |

#### Software

- **Paso 1.** Descarga la [biblioteca Seeed DHT](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo "DHTtester" a través de la ruta: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. A través de esta demostración, podemos leer la información de temperatura y humedad relativa del ambiente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
Este Grove - Sensor de Temperatura y Humedad Pro y nuestro otro producto [Grove-Sensor de Temperatura y Humedad](https://wiki.seeedstudio.com/es/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/) están compartiendo esta biblioteca. No importa qué producto estés usando, asegúrate de haber hecho efectiva la línea de definición del sensor de tu placa y comentado las líneas de definición de otras especificaciones. Por ejemplo, el sensor que usamos en Grove - Sensor de Temperatura y Humedad Pro es DHT 22. Así que la parte de definición de la especificación del sensor debería ser:
:::

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Serial Monitor** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás el resultado.

El resultado debería ser así:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/result_arduino.png" /></div>

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor de Temp y Hum Pro|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM230-p-838.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el sensor de temperatura y humedad pro al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Temp&Hum_Pro_Hat.jpg" /></div>

:::note
Para el paso 3 puedes conectar el sensor de temperatura y humedad pro a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::


- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
:::tip
Uno de los pasos es agregar la biblioteca DHT necesaria, por favor asegúrate de que esté instalada.
:::
- **Paso 2**. Ingresa al entorno virtual relevante.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
nano ~/grove_env/dht22_demo.py
```

Copia el siguiente código

```python
import time
import seeed_dht

# for DHT11/DHT22
    sensor = seeed_dht.DHT("22", 12)
    # for DHT10
    # sensor = seeed_dht.DHT("10") 
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

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht22_demo.py
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.1%, temperature 29.1*
DHT22, humidity 40.0%, temperature 29.1*
DHT22, humidity 39.9%, temperature 29.1*
DHT22, humidity 40.3%, temperature 29.1*
DHT22, humidity 42.0%, temperature 29.1*
```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

**Materiales requeridos**

| Raspberry pi | GrovePi_Plus | Sensor de Temperatura y Humedad Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Obtener Uno Ahora</a>|

- **Paso 1.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 2.** Conecta Grove - Sensor de Temperatura y Humedad Pro al puerto **D4** del GrovePi_Plus.

- **Paso 3.** Conecta el Raspberry a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_pi.jpg" /></div>

#### Software

Si esta es la primera vez que usas GrovePi, por favor haz esta parte paso a paso. Si eres un viejo amigo de GrovePi, puedes omitir el **Paso1** y el **Paso2**.

- **Paso 1.** Configurando el Software. En la línea de comandos, escribe los siguientes comandos:

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, **no puedes usar esta línea de comandos**.
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash
```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

Para más detalles sobre esta parte, por favor consulta [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente de GrovePi.

:::note
Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::

- **Paso 3.** Configura el parámetro

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

```

cd /home/pi/Desktop/GrovePi/Software/Python/
sudo nano grove_dht_pro.py

```

:::note
El Grove - Sensor de Temperatura y Humedad y el Grove - Sensor de Temperatura y Humedad pro comparten el mismo código python que se llama
`grove_dht_pro.py`. La única diferencia es que para la sentencia `[temp,humidity] = grovepi.dht(sensor,blue)`. Usamos el parámetro `blue` para Grove - Sensor de Temperatura y Humedad mientras que usamos `white` para el Grove - Sensor de Temperatura y Humedad pro. El valor por defecto es blue, así que para este sensor necesitas cambiar el código.
:::

Cambia el parámetro por defecto `[temp,humidity] = grovepi.dht(sensor,blue)` por `[temp,humidity] = grovepi.dht(sensor,white)`. Entonces el código debería ser así:

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
        [temp,humidity] = grovepi.dht(sensor,white)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Luego presiona ++ctrl+x++ para salir de nano. Presiona ++y++ para guardar el cambio.

- **Paso 4.** Ejecuta el siguiente comando para obtener el resultado.

```
sudo python3 grove_dht_pro.py
```

El resultado debería ser así:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%

```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Sensor de Temperatura y Humedad Pro en formato eagle](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip)
- **[PDF]** [PCB del Sensor de Temperatura y Humedad Pro en formato PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- **[PDF]** [Esquema del Sensor de Temperatura y Humedad Pro en formato PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- **[Biblioteca]** [Biblioteca del Sensor de Temperatura y Humedad Pro](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Humidity_Temperature_Sensor_pro.zip)
- **[Hoja de Datos]** [AM2302-CN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-CN.pdf)
- **[Hoja de Datos]**  [AM2302-EN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf)

## Proyectos

**Registrador de Datos de Temperatura y Humedad**: Este proyecto ayuda a monitorear los valores de temperatura y humedad de una ubicación particular junto con el nivel de batería del dispositivo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/temperature-humidity-data-logger-767570/embed' width='350'></iframe>

**Demo IoT de LinkIt ONE**: Un demo IoT hecho por LinkIt ONE.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/loovee/linkit-one-iot-demo-546a9c/embed' width='350'></iframe>

**Recinto Automatizado para Serpientes con Cámara**: Recinto interactivo para serpientes que está controlado por temperatura y humedad y usa lat-long para imitar los ciclos de luz natural, con una cámara en línea.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/hagakure/automated-snake-enclosure-with-camera-a56ea9/embed' width='350'></iframe>

**Foton - El sable de luz conectado**: Foton es un sable de luz especial, que puede monitorear la temperatura y humedad de una habitación, detectar movimientos, y enviar esos datos a un smartphone.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/Momy93/foton-the-connected-lightsaber-a6c159/embed' width='350'></iframe>

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
