---
description: Grove-Sensor de Gas VOC y eCO2 (SGP30)
title: Grove-Sensor de Gas VOC y eCO2 (SGP30)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-VOC_and_eCO2_Gas_Sensor-SGP30
last_update:
  date: 1/4/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" alt="pir" width={600} height="auto" /></p>

El Grove-Sensor de Gas VOC y eCO2 (SGP30) es un sensor de detección de calidad del aire. Este módulo grove está basado en SGP30, proporcionamos salida de TVOC (Compuestos Orgánicos Volátiles Totales) y CO2eq para este módulo.

El SGP30 es un sensor de gas digital multi-píxel diseñado para fácil integración en purificadores de aire, ventilación controlada por demanda y aplicaciones IoT. La tecnología CMOSens® de Sensirion ofrece un sistema de sensor completo en un solo chip que incluye una interfaz digital I2C, una microplaca caliente controlada por temperatura y dos señales preprocesadas de calidad del aire interior. Como el primer sensor de gas de óxido metálico que presenta múltiples elementos sensores en un chip, el SGP30 proporciona información más detallada sobre la calidad del aire.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::tip
Hemos lanzado la [Guía de Selección de Sensores de Gas Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para detección ambiental. Por favor consulta el Sensor Inalámbrico S2103 de CO2, Temperatura y Humedad con mayor rendimiento y robustez para monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center">
        <font size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
          <strong>S2103 Temp. y Humedad del Aire y CO2</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Características

- Sensor de gas multipíxel para aplicaciones de calidad del aire interior
- Excelente estabilidad a largo plazo
- Interfaz I2C con señales de salida TVOC y CO2eq
- Bajo consumo de energía
- Módulo de chip empaquetado en cinta y carrete, soldable por reflujo

## Especificaciones

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-eh2d{background-color:#ffffff;border-color:inherit;vertical-align:top}
.tg .tg-xf7g{background-color:#444444;border-color:inherit;:center}
.tg .tg-f5ry{background-color:#ffffff;border-color:inherit}
.tg .tg-28l8{background-color:#ffffff;border-color:inherit;:center}
.tg .tg-3xi5{background-color:#ffffff;border-color:inherit;:center;vertical-align:top}
.tg .tg-3we0{background-color:#ffffff;vertical-align:top}
.tg .tg-i81m{background-color:#ffffff;:center;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 529px">
<colgroup>
<col style="width: 143px">
<col style="width: 98px">
<col style="width: 288px">
</colgroup>
  <tr>
    <th class="tg-xf7g">Parámetro</th>
    <th class="tg-xf7g">Señal</th>
    <th class="tg-xf7g">Valores</th>
  </tr>
  <tr>
    <td class="tg-f5ry">Voltaje de Trabajo</td>
    <td class="tg-f5ry" colspan="2">                           3.3V/5V</td>
  </tr>
  <tr>
    <td class="tg-f5ry" rowspan="2">Rango de salida</td>
    <td class="tg-f5ry">TVOC</td>
    <td class="tg-28l8">    0 ppb a 60000ppb</td>
  </tr>
  <tr>
    <td class="tg-eh2d">CO₂eq</td>
    <td class="tg-3xi5">    400 ppm a 60000 ppm</td>
  </tr>
  <tr>
    <td class="tg-eh2d" rowspan="2"><br><br>Frecuencia de muestreo</td>
    <td class="tg-eh2d">TVOC</td>
    <td class="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td class="tg-eh2d">CO₂eq</td>
    <td class="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td class="tg-3we0" rowspan="7"><br><br><br><br><br><br><br>Resolución<br></td>
    <td class="tg-3we0" rowspan="3"><br><br>TVOC</td>
    <td class="tg-i81m">0 - 2008 ppb / 1 ppb</td>
  </tr>
  <tr>
    <td class="tg-i81m">2008 - 11110 ppb / 6 ppb</td>
  </tr>
  <tr>
    <td class="tg-i81m">11110 - 60000 ppb / 32 ppb</td>
  </tr>
  <tr>
    <td class="tg-3we0" rowspan="4"><br><br><br>CO₂eq</td>
    <td class="tg-i81m">400 - 1479 ppm / 1 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">1479 -5144 ppm / 3 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">5144 - 17597 ppm / 9 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">17597 - 60000 ppm / 31 ppm</td>
  </tr>
  <tr>
    <td class="tg-3we0">Dirección I2C predeterminada</td>
    <td class="tg-i81m" colspan="2">0X58</td>
  </tr>
</table>

<table border="2" style={{ width: 529}}>
  <colgroup>
    <col style={{width: 143}}/>
    <col style={{width: 98}}/>
    <col style={{width: 288}}/>
  </colgroup>
  <tr>
    <th>Parámetro</th>
    <th>Señal</th>
    <th>Valores</th>
  </tr>
  <tr>
    <td>Voltaje de Trabajo</td>
    <td colspan="2">3.3V/5V</td>
  </tr>
  <tr>
    <td rowspan="2">Rango de salida</td>
    <td>TVOC</td>
    <td>0 ppb a 60000ppb</td>
  </tr>
  <tr>
    <td>CO₂eq</td>
    <td>400 ppm a 60000 ppm</td>
  </tr>
   <tr>
    <td rowspan="2">Frecuencia de muestreo</td>
    <td>TVOC</td>
    <td>1HZ</td>
  </tr>
  <tr>
    <td>CO₂eq</td>
    <td>1HZ</td>
  </tr>
  <tr>
    <td rowspan="7">Resolución</td>
    <td rowspan="3">TVOC</td>
    <td>0 - 2008 ppb / 1 ppb</td>
  </tr>
  <tr>
    <td>2008 - 11110 ppb / 6 ppb</td>
  </tr>
  <tr>
    <td>11110 - 60000 ppb / 32 ppb</td>
  </tr>
  <tr>
    <td rowspan="4">CO₂eq</td>
    <td>400 - 1479 ppm / 1 ppm</td>
  </tr>
  <tr>
    <td>1479 -5144 ppm / 3 ppm</td>
  </tr>
  <tr>
    <td>5144 - 17597 ppm / 9 ppm</td>
  </tr>
  <tr>
    <td>17597 - 60000 ppm / 31 ppm</td>
  </tr>
  <tr>
    <td>Dirección I2C por defecto</td>
    <td colspan="2">0X58</td>
  </tr>
</table>

## Aplicaciones

- Purificador de aire
- Ventilación controlada por demanda
- Aplicaciones IoT
- Monitor de condición de aire para casas nuevas

## Descripción General del Hardware

### Mapa de Pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg" alt="pir" width={600} height="auto" /></p>

### Esquemático

**Alimentación**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg" alt="pir" width={600} height="auto" /></p>

El voltaje de operación típico del SGP30 es 1.8v, usamos un chip de conversión de energía *XC6206P182MR* para proporcionar un 3.3V estable para el MCP9600.

**Circuito cambiador de nivel bidireccional**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg" alt="pir" width={600} height="auto" /></p>

Este es un circuito cambiador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I^2^C. El bus I<sup>2</sup>C de este sensor usa 1.8V, si el bus I<sup>2</sup>C del Arduino usa 5V o 3.3V, este circuito será necesario. En el esquemático anterior, **Q7** y **Q8** son MOSFET de Canal N [BSS138LT3G](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Soportadas
<!-- 

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de hardware o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove-Sensor de Gas VOC y eCO2 (SGP30) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Sensor de Gas VOC y eCO2 Grove(SGP30) al puerto **I2C** del Shield Base Grove.

- **Paso 2.** Conecta el Shield Base Grove al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos el Shield Base Grove, también podemos conectar directamente el Sensor de Gas VOC y eCO2 Grove(SGP30) al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Sensor de Gas VOC y eCO2 Grove(SGP30) |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

- **Paso 1.** Descarga la [biblioteca Seeed SGP30](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Extrae el archivo `SGP30_Gas_Sensor-master.zip` que acabas de descargar, en la carpeta `examples` verás 3 subcarpetas:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png" alt="pir" width={600} height="auto" /></p>

El `absolute_humidity_example` requiere calibración externa del sensor de humedad

El `base_example` simplemente recopila datos sin ninguna calibración

El `baseline_operation_example` puede guardar el valor base de datos en flash. El software automáticamente recopila los valores base y los almacena.

Recomendamos usar el `baseline_operation_example`, luego haz clic en el archivo `xxx.ino` para abrir el ejemplo.

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás el resultado.

El resultado debería ser como:

```

318
tVOC  Concentration:74ppb
CO2eq Concentration:506ppm
319
tVOC  Concentration:80ppb
CO2eq Concentration:509ppm
320
tVOC  Concentration:66ppb
CO2eq Concentration:500ppm
321
tVOC  Concentration:69ppb
CO2eq Concentration:511ppm
322
tVOC  Concentration:70ppb
CO2eq Concentration:511ppm
323
tVOC  Concentration:60ppb
CO2eq Concentration:493ppm
324
tVOC  Concentration:72ppb
CO2eq Concentration:502ppm

```

:::tip
        1- ppm: partes por millón. 1 ppm = 1000 ppb (partes por billón)
        
        2- El resultado se basa en `baseline_operation_example.ino`

        3- Probamos esta demostración en nuestra oficina, según tu entorno de prueba, los resultados pueden ser diferentes
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove-Sensor de Gas VOC y eCO2 (SGP30)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove-VOC and eCO2 Gas Sensor(SGP30) al puerto I2C del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note

     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_Python_SGP30.git

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd Seeed_Python_SGP30
sudo python3 setup.py install
cd examples
python3 sgp30_simpleread.py
```

**Error**

Podría causar algunos errores pero no deberíamos preocuparnos por ello.

Copiamos la ruta al archivo de error.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png" alt="pir" width={600} height="auto" /></p>

Aquí está la ruta que se muestra como ejemplo: "/usr/local/lib/python3.7/dist-packages/sgp30-0.1.6-py3.7.egg/sgp30"

Usa el comando "cd" para saltar a esa ruta y usa tu compilador para cambiar los códigos de "sgp30.py", por ejemplo: "sudo nano sgp30.py".

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png" alt="pir" width={600} height="auto" /></p>

Eliminamos "SMBusWrapper" en la segunda línea y luego lo guardamos.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png" alt="pir" width={600} height="auto" /></p>

Regresa a la carpeta "Seeed_Python_SGP30/examples", aplica "python3 sgp30_simpleread.py" y todo estará bien.

A continuación está el código sgp30_simpleread.py.

```python
import seeed_sgp30
from grove.i2c import Bus

sgp30 = seeed_sgp30.grove_sgp30(Bus())
while True:
  data = sgp30.read_measurements()
  co2_eq_ppm, tvoc_ppb = data.data
  print("\r  tVOC = {} ppb CO2eq = {}  ".format(
                               tvoc_ppb, co2_eq_ppm))
```

:::success
    Si todo va bien, podrás ver el siguiente resultado.
:::

```python

pi@raspberrypi:~/Seeed_Python_SGP30/examples $ python3 sgp30_simpleread.py
  tVOC = 9 ppb CO2eq = 943  
  tVOC = 9 ppb CO2eq = 931  
  tVOC = 10 ppb CO2eq = 920  
  tVOC = 14 ppb CO2eq = 904  
  tVOC = 12 ppb CO2eq = 888  
  tVOC = 13 ppb CO2eq = 873  
  tVOC = 11 ppb CO2eq = 865  
  tVOC = 11 ppb CO2eq = 842  
  tVOC = 9 ppb CO2eq = 828  
  tVOC = 10 ppb CO2eq = 814  
  tVOC = 11 ppb CO2eq = 794  
  tVOC = 14 ppb CO2eq = 786  
  tVOC = 9 ppb CO2eq = 764  
  tVOC = 12 ppb CO2eq = 744  
  tVOC = 11 ppb CO2eq = 739  
  tVOC = 12 ppb CO2eq = 715  
  tVOC = 15 ppb CO2eq = 688  
  tVOC = 13 ppb CO2eq = 669  

```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

## Aviso

- El SGP30 utiliza un algoritmo de compensación de línea base dinámica y parámetros de calibración en chip para proporcionar dos señales de calidad del aire complementarias. La línea base debe almacenarse en EEPROM. Cuando no hay valor de línea base en EEPROM en el primer encendido o el registro de línea base tiene más de siete días. El sensor tiene que funcionar durante 12 horas hasta que la línea base pueda almacenarse. Puedes consultar el diagrama de flujo del programa a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png" alt="pir" width={600} height="auto" /></p>

- La H2_Signal y Ethanol_signal, ambas señales pueden usarse para calcular concentraciones de gas c relativas a una concentración de referencia cref mediante ln(C/Cref)=(Sref-Sout)/a con a = 512, sref la salida H2_signal o Ethanol_signal en la concentración de referencia, y sout = Sout_H2 o Sout = Sout_EthOH.

- Para una medición más precisa, puedes configurar la compensación de humedad absoluta. El valor predeterminado es 11.57g/m3. Un poco problemático es que debes obtener el valor de humedad relativa del ambiente de otra manera, porque no hay una parte de medición de humedad integrada en el SGP30.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png" alt="pir" width={600} height="auto" /></p>

Afortunadamente, no es muy necesario en una situación normal

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo eagle del Grove-Sensor de Gas VOC y eCO2(SGP30)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip)
- **[PDF]** [Hoja de datos SGP30](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)
- **[PDF]** [Hoja de datos BSS138L](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf)
- **[PDF]** [Guía de Integración del Controlador SGP30 HW I2C](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf)

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
