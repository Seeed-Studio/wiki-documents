---
description: Grove - Sensor de Temperatura y Humedad(DHT20)
title: Grove - Sensor de Temperatura y Humedad(DHT20)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Temperature-Humidity-Sensor-DH20
last_update:
  date: 12/29/2025
  author: Brandy
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" /></div>

El nuevo Grove - Sensor de Temperatura y Humedad está basado en el sensor DHT20. El DHT20 es una versión mejorada del DHT11, comparado con la versión anterior, la precisión de medición de temperatura y humedad es mayor, y el rango de medición es más amplio. Cuenta con salida I2C lo que significa que es más fácil de usar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para el monitoreo ambiental. Por favor consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para el monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

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

## Características

- Alta Precisión:
  - Precisión de Temperatura:± 0.5 ℃
  - Precisión de Humedad:± 3 % RH ( 25 ℃ )
- Amplios rangos de medición:
  - Rango de Medición (Humedad):0 ~ 100% RH
  - Rango de Medición (Temperatura):-40 ~ + 80 ℃
- Mejor compatibilidad：
  - Salida digital
  - Interfaz I²C
- Completamente calibrado
- Excelente estabilidad a largo plazo
- Respuesta rápida y capacidad anti-interferencia
- Amplio soporte de voltaje 2.5-5.5V DC

## Especificaciones

|Parámetro |Valor|
|---|---|
|Voltaje de Entrada|2.0 V – 5.5 V|
|Rango de Medición de Humedad|0 ~ 100% RH|
|Rango de Medición de Temperatura|-40 ~ + 80 ℃ |
|Precisión de Humedad|± 3 % RH ( 25 ℃ )|
|Precisión de Temperatura|± 0.5 ℃|
|Señal de Salida|Señal I2C|

## Descripción del Hardware

### Mapa de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pin-mode.jpg" /></div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software/código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - Sensor de Temperatura y Humedad V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">Obtener Uno Ahora</a>|

- **Paso 1.** Conecta el Grove Sensor de Temperatura y Humedad V2.0 al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC a través de un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu4.png" /></div>

#### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

Comparado con el DHT11, el Sensor de Temperatura y Humedad DHT20 tiene cambios claros en el voltaje de alimentación, rango de medición de temperatura y humedad, precisión y calidad de la señal de salida.

Está equipado con una interfaz digital I2C completamente calibrada, por lo que hay definiciones ligeramente diferentes de los pines. Debes descargar e instalar la biblioteca [aquí](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) para usar el DHT20.

Una vez que todo esté configurado, podemos subir el código de ejemplo para ver si funciona:

```cpp
// Example testing sketch for various DHT humidity/temperature sensors
// Written by ladyada, public domain
#include "Wire.h"
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humidity: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperature: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("Failed to get temprature and humidity value.");
    }

    delay(1500);
}
```

Después de terminar la carga, podemos usar el Monitor Serie en Arduino para ver el resultado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Serial-Monitor.png" /></div>

Y la salida debería ser algo como... :

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/output.png" /></div>

Los valores están basados en el ambiente actual.


### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Cosas usadas en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi|Grove - Sensor de Temperatura y Humedad V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - Temperature & Humidity Sensor V2.0 al puerto **I2C** del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/GROVE-fix/DHT20.jpg" /></div>

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
nano ~/grove_env/dht20_demo.py
```

Copia el siguiente código

```python
import time
import seeed_dht

# for DHT10/20
sensor = seeed_dht.DHT("20") 
# sensor = seeed_dht.DHT("10") 
# for DHT11/DHT22
#sensor = seeed_dht.DHT("22", 12) 

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

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht20_demo.py

DHT20, humidity 39.2%, temperature 29.1*
DHT20, humidity 39.2%, temperature 29.1*
DHT20, humidity 39.2%, temperature 29.1*
DHT20, humidity 39.1%, temperature 29.1*
DHT20, humidity 40.0%, temperature 29.1*
DHT20, humidity 39.9%, temperature 29.1*
DHT20, humidity 40.3%, temperature 29.1*
DHT20, humidity 42.0%, temperature 29.1*
```

Puedes salir de este programa simplemente presionando ++ctrl+c++.



## Jugar con MicroPython

### Conectar RaspberryPi Pico

**Materiales requeridos**

| RaspberryPi Pico | Grove Shield for Pi Pico v1.0 | Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https:///files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-shield1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

#### Conexión I2C

- **Paso 1.** Conecta RaspberryPi Pico al Grove Shield for Pi Pico.

- **Paso 2.**  Conecta Grove - CO2 & Temperature & Humidity Sensor - SCD41 al puerto **I2C0** del Grove Shield for Pi Pico.

- **Paso 3.** Conecta RaspberryPi Pico a una PC a través de un cable USB.
:::tip
por favor presta atención a usar I2C0, si usas I2C1, no funcionará.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-connect.jpeg" /></div>

Esta es la conexión básica del hardware.

### Software

- **Paso 1.** Necesitamos usar una biblioteca de terceros para controlar **Grove - Temperature & Humidity Sensor V2.0**

1. Descarga [dht20_demo2.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/dht20_demo2.py) y la biblioteca [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py) y guárdala en la computadora.

2. Usa Thonny para abrir dht20_demo2.py y DHT20.py, haz clic en la opción "file" en la parte superior izquierda, y luego selecciona "save as".

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny1.png" /></div>

3. Selecciona "Raspberry Pi Pico" y guárdalo en Pico.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny2.png" /></div>

:::note
Una vez que guardemos, Thonny pedirá nombrar el archivo. Aquí escribimos "dht20_demo2.py" como su nombre, y también necesitamos escribir la extensión del archivo, o no se podrá usar.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny3.png" /></div>

- **Paso 2.** Inicia el proceso.

1. Inicializa DHT20.py primero.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny4.png" /></div>

2. Inicia el proceso de demostración y luego puedes ver los resultados a continuación.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny5.png" /></div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove-Temperature&Humidity-Sensor-V2.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - Temperature & Humidity Sensor V2.0(DHT20)](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Pico-micropython-master.zip)

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

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
