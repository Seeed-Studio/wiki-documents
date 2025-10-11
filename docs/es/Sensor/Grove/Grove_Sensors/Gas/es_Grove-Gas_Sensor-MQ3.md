---
description: Grove - Sensor de Gas(MQ3)
title: Grove - Sensor de Gas(MQ3) 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Gas_Sensor-MQ3
last_update:
  date: 1/3/2023
  author: shuxu hu
---

<!-- <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/wiki.jpg" /></div> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/wiki.jpg" alt="pir" width={600} height="auto" /></p>

El módulo Grove - Sensor de Gas(MQ3) es útil para la detección de fugas de gas (en el hogar y la industria). Es adecuado para detectar <font color="Blue">Alcohol, Bencina, CH4, Hexano, GLP, CO.</font> Debido a su alta sensibilidad y tiempo de respuesta rápido, las mediciones se pueden tomar lo antes posible. La sensibilidad del sensor se puede ajustar usando el potenciómetro.

<div class="admonition danger">
<p class="admonition-title">Nota</p>
El valor del sensor solo refleja la tendencia aproximada de la concentración de gas en un rango de error permisible, NO representa la concentración exacta de gas. La detección de ciertos componentes en el aire generalmente requiere un instrumento más preciso y costoso, lo cual no se puede hacer con un solo sensor de gas. Si tu proyecto está dirigido a obtener la concentración de gas a un nivel muy preciso, entonces no recomendamos este sensor de gas.
</div>

<!-- |Sensor|Gas Type|Compra ahora|
|---|---|---|
|MQ2|Combustible Gas, Smoke|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)|
|MQ3|Alcohol Vapor|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|
|MQ5|LPG, Natural Gas, Town Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|
|MQ9|Carbon Monoxide, Coal Gas, Liquefied Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html)| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Tipo de Gas</h4></td>
    <td><h4>Consigue Uno Ahora</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>Gas Combustible, Humo</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>Vapor de Alcohol</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>GLP, Gas Natural, Gas de Ciudad</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>Monóxido de Carbono, Gas de Carbón, Gas Licuado</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>

:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

## Características

- Alta sensibilidad al alcohol y pequeña sensibilidad a la bencina
- Estable y larga vida útil
- Respuesta rápida y alta sensibilidad

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Elemento | Parámetro               | Mín  | Típico     | Máx | Unidad |
|----------|-------------------------|------|------------|-----|--------|
| VCC      | Voltaje de Trabajo      | 4.9  | 5          | 5.1 | V      |
| PH       | Consumo de Calentamiento| 0.5  | -          | 750 | mW     |
| RL       | Resistencia de Carga    |      | ajustable  |     |        |
| RH       | Resistencia del Calentador| -  | 33         | -   | Ω      |
| Rs       | Resistencia de Detección| 1    | -          | 8   | MΩ     |
| Alcance  | Concentración de Detección| 0.05| -         | 10  | mg/L   |

## Aplicación

- Detector de alcohol.
- Alcoholímetro.
- Juguetes.

## Descripción General del Hardware

Este es un sensor de salida analógica. Necesita conectarse a cualquier conector analógico en el Grove Base Shield. Los ejemplos utilizados en este tutorial hacen uso del pin analógico A0. Conecta este módulo al puerto A0 del Base Shield.

Es posible conectar el módulo Grove directamente a Arduino usando cables jumper mediante la conexión mostrada en la tabla a continuación:

| Arduino   | Sensor de Gas |
|-----------|---------------|
| 5V        | VCC           |
| GND       | GND           |
| NC        | NC            |
| Analog A0 | SIG           |

El voltaje de salida del sensor de gas aumenta cuando la concentración de gas aumenta. La sensibilidad se puede ajustar variando el potenciómetro. <font color="Red">Tenga en cuenta que el mejor tiempo de precalentamiento para el sensor es superior a 24 horas</font>. Para información detallada sobre el sensor MQ-3, consulte la hoja de datos proporcionada en la sección **Recursos**.

## Plataformas Compatibles

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={500} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

| Seeeduino V4.2 | Base Shield | Grove - Sensor de Gas(MQ3) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html" target="_blank">Obtener Uno Ahora</a>|

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Read_Gas_Sensor_data.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Read_Gas_Sensor_data.jpg" alt="pir" width={600} height="auto" /></p>

Conecta el Grove - Gas Sensor(MQ3) al puerto A0 como se muestra en la imagen anterior.

#### Detección de Gas : Ejemplo Básico

En este ejemplo, el sensor está conectado al pin A0. Se muestra el voltaje leído del sensor. Este valor puede usarse como umbral para detectar cualquier aumento/disminución en la concentración de gas.

```cpp
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  float sensor_volt;
  float sensorValue;
 
  sensorValue = analogRead(A0);
  sensor_volt = sensorValue/1024*5.0;
 
  Serial.print("sensor_volt = ");
  Serial.print(sensor_volt);
  Serial.println("V");
  delay(1000);
}
```

#### Medición : Aproximación

Este ejemplo demuestra una forma de conocer la concentración aproximada de Gas. Según la hoja de datos de los sensores MQ3, estas ecuaciones están probadas para condiciones estándar y no están calibradas. Puede variar según los cambios de temperatura o humedad.

1. Mantén el Sensor de Gas en un ambiente de aire limpio. Sube el programa a continuación.

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float R0;  // Get the value of R0 via in Alcohol
    float sensorValue;

    /*--- Get a average data by testing 100 times ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
    /*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // omit *RL
    R0 = RS_air/60.0; // The ratio of RS/R0 is 60 in a clear air from Graph (Found using WebPlotDigitizer)

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

2. Luego, abre el monitor serie del IDE de Arduino. Anota el valor de R0 y esto necesita ser usado en el siguiente programa. Por favor anota el R0 después de que la lectura se estabilice.

<font color="Red">Reemplaza el R0 de abajo con el valor de R0 probado arriba </font>. Expón el sensor a cualquiera de los gases listados arriba.

```cpp
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // omit *RL

    /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/R0;  // ratio = RS/R0
    /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

Ahora, podemos obtener la concentración de gas de la figura a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/GAS_Sensor_3.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/GAS_Sensor_3.png" alt="pir" width={600} height="auto" /></p>

Según la figura, podemos ver que la concentración mínima que podemos probar es 0.1mg/L y la máxima es 10mg/L. Sin embargo, no podemos proporcionar una fórmula porque la relación entre la proporción y la concentración es no lineal. Pero también, podemos convertir mg/L a ppm, puede ser conveniente para nosotros observar el valor.

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Cosas utilizadas en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor de Gas(MQ3)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - Gas Sensor(MQ3) al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/With_Hat.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar el Grove - Gas Sensor(MQ3) a **cualquier Puerto Analógico** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para escribir el código.

```sh
cd grove.py/grove
nano grove_gas_sensor_mq3.py
```

Luego debes copiar el siguiente código en este archivo y presionar ++ctrl+x++ para salir y guardar.

```python
import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ3:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ3(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ3


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ3(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ3))
        time.sleep(.3)

if __name__ == '__main__':
    main()

```

- **Paso 4**. Ejecuta los siguientes comandos para ejecutar el código.

```python
python grove_gas_sensor_mq3.py  0
```

:::success
    Si todo va bien, podrás ver el siguiente resultado
:::

```python
pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq3.py 0
Detecting...
Gas value: 564
Gas value: 564
Gas value: 564
Gas value: 565
Gas value: 565
Gas value: 565
Gas value: 566
Gas value: 566
Gas value: 566
Gas value: 566
Gas value: 566
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq3.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq3.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

:::note
        Puede que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A0, A1**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

### Jugar Con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Wio Terminal | Grove - Sensor de Gas(MQ3) |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ3.html)|

- **Paso 2.** Conecta Grove - Gas Sensor(MQ3) al puerto **A0** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/WT-MQ3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/WT-MQ3.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [**ArduPy Getting Started**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy esté flasheado en Wio Terminal. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-mq3.py`:

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time

mq3 = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.BLUE)
        spr.drawString("MQ3 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Current Level: ", 20, 50)
        spr.drawNumber(mq3.read(), 220,50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("MQ3 Gas Sensor Reading is: ", mq3.read())

if __name__ == "__main__":
    main()
```

- **Paso 4.** Guarda el `ArduPy-mq3.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-mq3.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq3.py"
```

- **Paso 5.** Veremos la visualización del valor del gas en la terminal como se muestra a continuación, y se mostrará en la pantalla de la Wio Terminal LCD.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq3.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
MQ3 Gas Sensor Reading is:  609
MQ3 Gas Sensor Reading is:  611
MQ3 Gas Sensor Reading is:  614
MQ3 Gas Sensor Reading is:  616
MQ3 Gas Sensor Reading is:  618
MQ3 Gas Sensor Reading is:  621
MQ3 Gas Sensor Reading is:  623
MQ3 Gas Sensor Reading is:  625
MQ3 Gas Sensor Reading is:  627
MQ3 Gas Sensor Reading is:  628
MQ3 Gas Sensor Reading is:  629
MQ3 Gas Sensor Reading is:  632
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Ardupy-MQ3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Ardupy-MQ3.png" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

**Lectura Sugerida / Referencias**

- Cómo elegir un Sensor de Gas
- [Qué es LEL](https://en.wikipedia.org/wiki/Flammability_limit)

**Esquemático**

- [Grove Sensor de Gas - archivos EAGLE (Esquemático y Placa)](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Eagle_files.zip)
- [Grove Sensor de Gas - Esquemático PDF](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Schematic.pdf)

**Hoja de Datos**

- [Hoja de Datos MQ-3](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/MQ-3.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ3) -->

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

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
