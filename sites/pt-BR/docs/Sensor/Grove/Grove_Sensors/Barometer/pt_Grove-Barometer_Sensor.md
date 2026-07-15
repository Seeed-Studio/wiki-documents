---
description: Grove - Sensor Barométrico
title: Grove - Sensor Barométrico
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor
sku: 101020032
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor/
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg" alt="pir" width={600} height="auto" /></p>


Este Grove - Sensor Barométrico possui um chip Bosch BMP085 de alta precisão para detectar pressão barométrica e temperatura. Ele pode medir amplamente a pressão na faixa de 300hPa a 1100hPa, ou seja, de +9000m a -500m acima do nível do mar, com uma precisão superalta de 0.03hPa(0.25m) no modo de ultra-alta resolução. O chip aceita apenas tensão de entrada de 1.8V a 3.6V. Entretanto, com o circuito externo adicionado, este módulo se torna compatível com 3.3V e 5V. Portanto, pode ser usado em Arduino/#Seeeduino ou Seeeduino Stalker sem modificação. Ele é projetado para ser conectado diretamente a um microcontrolador via barramento I2C.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/Grove-Barometer-Sensor-p-1199.html)

Recursos
--------

-   Interface digital de dois fios (I2C)
-   Ampla faixa de pressão barométrica
-   Faixa flexível de tensão de alimentação
-   Consumo de energia ultra-baixo
-   Medição de baixo ruído
-   Totalmente calibrado
-   Medição de temperatura incluída

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Ideias de Aplicação
-----------------

-   Reforço da navegação por GPS
-   Navegação interna e externa
-   Lazer e esportes
-   Previsão do tempo
-   Indicação de velocidade vertical (velocidade de subida/descida)

Especificações
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
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
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão
</th>
<td>
3
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente
</th>
<td>
89
</td>
<td>
/
</td>
<td>
130
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de Pressão
</th>
<td>
300
</td>
<td>
/
</td>
<td>
1100
</td>
<td>
hPa
</td>
</tr>
<tr align="center">
<th scope="row">
Transferência de dados I2C mais rápida
</th>
<td>
/
</td>
<td>
/
</td>
<td>
3.4
</td>
<td>
MHZ
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensão
</th>
<td colspan="3">
20.4*24.3*9.7
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
Peso
</th>
<td colspan="3">
2
</td>
<td>
g
</td>
</tr>
</table>
Uso
-----

### Com Arduino

A condição barométrica é um dos critérios usados para prever mudanças climáticas e deduzir a altitude acima do nível do mar. Aqui está uma demonstração para mostrar como ler os dados barométricos deste Grove - Sensor Barométrico.

1.Conecte-o à porta IIC do Seeeduino ou do Grove - Base Shield por meio de um cabo Grove. E conecte o Arduino ao PC por um cabo USB.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG" alt="pir" width={600} height="auto" /></p>


2.Baixe a biblioteca [Barometer_Sensor Library](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip); descompacte-a na pasta libraries da IDE do Arduino pelo caminho: ..\\arduino-1.0.1\\libraries.

3.Crie um novo sketch Arduino e cole o código abaixo nele ou abra o código diretamente pelo caminho:File -> Example ->Barometer_Sensor->Barometer_Sensor.

```
/* Barometer demo V1.0
*  Based largely on code by  Jim Lindblom
*  Get pressure, altitude, and temperature from the BMP085.
*  Serial.print it out at 9600 baud to serial monitor.
*
*  By:https://www.seeedstudio.com
*/
#include "Barometer.h"
#include <Wire.h>

float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;

void setup(){
    Serial.begin(9600);
    myBarometer.init();
}

void loop()
{
    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature
    altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters
    atm = pressure / 101325;

    Serial.print("Temperature: ");
    Serial.print(temperature, 2); //display 2 decimal places
    Serial.println("deg C");

    Serial.print("Pressure: ");
    Serial.print(pressure, 0); //whole number only.
    Serial.println(" Pa");

    Serial.print("Ralated Atmosphere: ");
    Serial.println(atm, 4); //display 4 decimal places

    Serial.print("Altitude: ");
    Serial.print(altitude, 2); //display 2 decimal places
    Serial.println(" m");

    Serial.println();

    delay(1000); //wait a second and get values again.
}
```

4.Abra o monitor serial para receber os dados do sensor, incluindo temperatura, valor da pressão barométrica, pressão atmosférica relativa e altitude.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


A seguir está um gráfico de referência traçando a relação entre altitude acima do nível do mar e pressão barométrica.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


### Com Raspberry Pi

1.Você deve ter um raspberry pi e um grovepi ou grovepi+.

2.Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](/pt-br/GrovePi_Plus/).

3.Conexão

-   Conecte o sensor barométrico nos soquetes i2c do grovepi.

4.Navegue até o diretório de demos:
```
cd yourpath/GrovePi/Software/Python/grove_barometer/adafruit/
```

-   Para ver o código

```
nano grove_i2c_barometic_sensor_example.py   # "Ctrl+x" to exit #
```

```
#!/usr/bin/python

import smbus
import RPi.GPIO as GPIO
#import grovepi from grove_i2c_barometic_sensor import BMP085

# ===========================================================================
# Example Code
# ===========================================================================

# Initialise the BMP085 and use STANDARD mode (default value)
# bmp = BMP085(0x77, debug=True)
bmp = BMP085(0x77, 1)

# To specify a different operating mode, uncomment one of the following:
# bmp = BMP085(0x77, 0)  # ULTRALOWPOWER Mode
# bmp = BMP085(0x77, 1)  # STANDARD Mode
# bmp = BMP085(0x77, 2)  # HIRES Mode
# bmp = BMP085(0x77, 3)  # ULTRAHIRES Mode

rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = smbus.SMBus(1)
else:
    bus = smbus.SMBus(0)

temp = bmp.readTemperature()

# Read the current barometric pressure level
pressure = bmp.readPressure()

# To calculate altitude based on an estimated mean sea level pressure
# (1013.25 hPa) call the function as follows, but this won't be very accurate
# altitude = bmp.readAltitude()

# To specify a more accurate altitude, enter the correct mean sea level
# pressure level.  For example, if the current pressure level is 1023.50 hPa
# enter 102350 since we include two decimal places in the integer value
altitude = bmp.readAltitude(101560)

print "Temperature: %.2f C" % temp
print "Pressure:    %.2f hPa" % (pressure / 100.0)
print "Altitude:    %.2f m" % altitude
```

5.Execute a demonstração.
```
sudo python grove_i2c_barometic_sensor_example.py
```

6.Resultado

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>



## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Recursos
---------

-   [Grove - Barometer Sensor Eagle File](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip)
-   [Barometer_Sensor Library](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip)
-   [Repositório Github para Barometer Sensor Library](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
-   [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/BST-BMP085-DS000-06.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Barometer_Sensor -->

## Suporte Técnico e Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
