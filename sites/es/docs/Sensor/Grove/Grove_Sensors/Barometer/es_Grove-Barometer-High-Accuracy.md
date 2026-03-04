---
description: Grove - Barómetro (Alta Precisión)
title: Grove - Barómetro (Alta Precisión)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.webp
slug: /Grove-Barometer-High-Accuracy
sku: 101020068
last_update:
  date: 4/22/2025
  author: carla guo
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Este Sensor Grove - Barómetro (Alta Precisión) cuenta con un chip HP206F de alta precisión para detectar presión barométrica, altímetro y temperatura. Puede medir ampliamente presión en el rango de 300mbar~1200mbar, con una resolución de 0.02mbar durante la medición.
El chip solo acepta voltaje de entrada de 1.8V a 3.6V. Sin embargo, con el circuito externo añadido, este módulo se vuelve compatible con 3.3V y 5V. Por lo tanto, puede ser usado en Arduino/Seeeduino o Seeeduino Stalker sin modificación. Está diseñado para conectarse directamente a un microcontrolador a través del bus I2C.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Obtener Uno Ahora </font></span></strong></a>
</div>

## Características

- Interfaz digital de dos cables (I2C)
- Lectura basada en comandos, compensada (opcional)
- Controles de eventos e interrupciones programables
- Compensación completa de datos
- Amplio rango de presión barométrica
- Rango flexible de voltaje de alimentación
- Consumo de energía ultra bajo
- Resolución de altitud hasta 0.01 metro
- Medición de temperatura incluida
- Dirección I2C: 0x76

:::note
    Si deseas usar múltiples dispositivos I2C, por favor consulta [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Ideas de Aplicación

- Altímetro / Barómetro móvil de alta precisión
- Sistema de sensor de presión y temperatura industrial
- Sistemas automotrices
- Altimetría de electrónicos personales
- Relojes de aventura y deportes
- Sistema de control de gas médico
- Equipo de estación meteorológica
- Navegación interior y asistencia de mapas
- Calefacción, ventilación, aire acondicionado

## Especificaciones

<div class="table-center">
<table align="center">
 <tr>
     <th style={{width:300, height:'auto'}}>Parámetro</th>
      <th style={{width:300, height:'auto'}}>Descripción</th>
 </tr>
  <tr>
    <td>Voltaje de alimentación</td>
    <td>1.8v~3.6v</td>
  </tr>
  <tr>
    <td>Rango de temperatura de operación</td>
    <td>-40℃~85℃</td>
  </tr>
  <tr>
    <td>Rango de medición de presión</td>
    <td>300mbar~1200mbar</td>
  </tr>
  <tr>
    <td>Resolución de presión</td>
    <td>0.02mbar</td>
  </tr>
  <tr>
    <td>Resolución de altitud</td>
    <td>0.2m</td>
  </tr>
  <tr>
    <td>Dimensión</td>
    <td>20.4 × 41.8 × 9.7 mm</td>
  </tr>
</table>
</div>

## Plataformas Compatibles

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción del Hardware
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg) -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg" style={{width:700, height:'auto'}}/></div>

## Primeros pasos

### Jugar con Arduino

La condición barométrica es uno de los criterios utilizados para predecir cambios próximos en el clima y la altitud sobre el nivel del mar. Aquí hay una demostración para mostrarte cómo leer los datos barométricos de este Sensor de Barómetro Grove.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.2</th>
   <th>Base Shield</th>
   <th>Grove-Barometer-High-Accuracy</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Paso 2.** Conecta Grove-Barometer-High-Accuracy al puerto **I2C** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer-High-Accuracy  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### Software

**Paso 1.** Descarga la [biblioteca](https://github.com/Seeed-Studio/Grove_Barometer_HP20x) desde Github.

**Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

**Paso 3.** Crea un nuevo sketch de Arduino y pega los códigos a continuación o abre el código directamente por la ruta: File -> Example -> Grove barometer HP20x -> HP20x_demo.

Aquí está el código

```c
/*
* Demo name  : HP20x_dev demo
* Usage      : I2C PRECISION BAROMETER AND ALTIMETER [HP206F hopeRF]
* Author     : Oliver Wang from Seeed Studio
* Version    : V0.2
* Change log : Add kalman filter 2014/04/04
               Update the chip to HP206F 2025/04/07
*/

#include <HP20x_dev.h>
#include <KalmanFilter.h>

#include "Arduino.h"
#include "Wire.h"

unsigned char ret = 0;

    /* Instance */
KalmanFilter t_filter;    //temperature filter
KalmanFilter p_filter;    //pressure filter
KalmanFilter a_filter;    //altitude filter


void setup()
{
    Serial.begin(9600);        // start serial for output

    Serial.println("****HP20x_dev demo by seeed studio****\n");
    Serial.println("Calculation formula: H = [8.5(101325-P)]/100 \n");
      /* Power up,delay 150ms,until voltage is stable*/
    delay(150);
      /* Reset HP20x_dev*/
    HP20x.begin();
    delay(100);

      /* Determine HP20x_dev is available or not*/
    ret = HP20x.isAvailable();
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("HP20x_dev is available.\n");
    }
    else
    {
        Serial.println("HP20x_dev isn't available.\n");
    }

}


void loop()
{
    char display[40];
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("------------------\n");
        long Temper = HP20x.ReadTemperature();
        Serial.println("Temper:");
        float t = Temper/100.0;
        Serial.print(t);
        Serial.println("C.\n");
        Serial.println("Filter:");
        Serial.print(t_filter.Filter(t));
        Serial.println("C.\n");

        long Pressure = HP20x.ReadPressure();
        Serial.println("Pressure:");
        t = Pressure/100.0;
        Serial.print(t);
        Serial.println("hPa.\n");
        Serial.println("Filter:");
        Serial.print(p_filter.Filter(t));
        Serial.println("hPa\n");

        long Altitude = HP20x.ReadAltitude();
        Serial.println("Altitude:");
        t = Altitude/100.0;
        Serial.print(t);
        Serial.println("m.\n");
        Serial.println("Filter:");
        Serial.print(a_filter.Filter(t));
        Serial.println("m.\n");
        Serial.println("------------------\n");
        delay(1000);
    }
}
```

**Paso 4.** Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica, presión atmosférica relativa y altitud.

### Jugar Con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

<div class="table-center">
 <table align="center">
  <tr>
   <th>SRaspberry pi</th>
   <th>Grove Base Hat for Raspberry Pi</th>
   <th>Grove-Barometer-High-Accuracy</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Paso 2.** Conecta el Grove Base Hat para Raspberry Pi en la Raspberry.
- **Paso 3.** Conecta el Grove-Barometer-High-Accuracy al puerto **I2C** del Grove Base Hat para Raspberry Pi.
- **Paso 4.** Conecta la Raspberry a la PC a través del cable USB.

<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1.** Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#install-dependencies) para configurar el entorno de desarrollo e instalar las dependencias.

- **Paso 2.** Clona el repositorio de Github con Git.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

- **Paso 3.** Ejecuta los siguientes comandos para usar este sensor

```bash
sudo apt install python3-virtualenv
virtualenv -p python3 env
source env/bin/activate
cd ./grove.py/grove
python3 grove_i2c_hp206f_driver.py
```

Aquí está el código:

```python
#!/usr/bin/env python
#
# Library for interacting with Grove - HP20x sensor (used to measure temperature, pressure and altitude)
#
# This is the library for Grove Base Hat which used to connect grove sensors for raspberry pi.
#

'''
## License

The MIT License (MIT)

Grove Base Hat for the Raspberry Pi, used to connect grove sensors.
Copyright (C) [Your Company Name or Relevant Party] 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

import time
from grove.i2c import Bus

# Class for interacting with the HP20x sensor
class HP20x:
    def __init__(self):
        # Initialize the I2C bus on Raspberry Pi (bus 1)
        self.bus = Bus()
        # I2C address of the HP206F sensor, may need adjustment based on actual situation
        self.address = 0x76

        # I2C device ID when CSB PIN is at VDD level (address is 0x76)
        self.HP20X_I2C_DEV_ID = (0xEC) >> 1
        # I2C device ID when CSB PIN is at GND level (address is 0x77)
        self.HP20X_I2C_DEV_ID2 = (0XEE) >> 1
        # Soft reset command for the HP20x sensor
        self.HP20X_SOFT_RST = 0x06
        # Write conversion command for the HP20x sensor
        self.HP20X_WR_CONVERT_CMD = 0x40
        # Different oversampling rate (OSR) configurations for conversion
        self.HP20X_CONVERT_OSR4096 = 0 << 2
        self.HP20X_CONVERT_OSR2048 = 1 << 2
        self.HP20X_CONVERT_OSR1024 = 2 << 2
        self.HP20X_CONVERT_OSR512 = 3 << 2
        self.HP20X_CONVERT_OSR256 = 4 << 2
        self.HP20X_CONVERT_OSR128 = 5 << 2

        # Commands for reading pressure, altitude, temperature, etc.
        self.HP20X_READ_P = 0x30  # Read pressure command
        self.HP20X_READ_A = 0x31  # Read altitude command
        self.HP20X_READ_T = 0x32  # Read temperature command
        self.HP20X_READ_PT = 0x10  # Read pressure and temperature command
        self.HP20X_READ_AT = 0x11  # Read altitude and temperature command
        self.HP20X_READ_CAL = 0X28  # RE-CAL ANALOG command

        # Write register mode for the HP20x sensor
        self.HP20X_WR_REG_MODE = 0xC0
        # Read register mode for the HP20x sensor
        self.HP20X_RD_REG_MODE = 0x80

        # Set the oversampling rate configuration
        self.OSR_CFG = self.HP20X_CONVERT_OSR1024
        # Conversion time corresponding to the oversampling rate (in milliseconds)
        self.OSR_ConvertTime = 25

    def begin(self):
        # Send a soft reset command to the HP20x sensor
        self.HP20X_IIC_WriteCmd(self.HP20X_SOFT_RST)
        # Wait for 0.1 seconds to ensure the reset operation is completed
        time.sleep(0.1)

    def isAvailable(self):
        # Check if the HP20x sensor is available by reading the register at address 0x0F
        return self.HP20X_IIC_ReadReg(0x0F)

    def ReadTemperature(self):
        # Send a conversion command with the specified oversampling rate configuration
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # Wait for the conversion time (converted to seconds)
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # Read 3 bytes of raw temperature data from the sensor
        t_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_T, 3)
        # Combine the 3 bytes of data to form a single value
        t = t_raw[0] << 16 | t_raw[1] << 8 | t_raw[2]
        # Handle negative values using 2's complement
        if t & 0x800000:
            t |= 0xff000000
            us = (1 << 32)
            t = -1 * (us - t)
        # Return the temperature value in degrees Celsius (divided by 100)
        return t / 100.0

    def ReadPressure(self):
        # Send a conversion command with the specified oversampling rate configuration
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # Wait for the conversion time (converted to seconds)
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # Read 3 bytes of raw pressure data from the sensor
        p_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_P, 3)
        # Combine the 3 bytes of data to form a single value
        p = p_raw[0] << 16 | p_raw[1] << 8 | p_raw[2]
        # Handle negative values using 2's complement
        if p & 0x800000:
            p |= 0xff000000
        # Return the pressure value in hectopascals (divided by 100)
        return p / 100.0

    def ReadAltitude(self):
        # Send a conversion command with the specified oversampling rate configuration
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # Wait for the conversion time (converted to seconds)
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # Read 3 bytes of raw altitude data from the sensor
        a_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_A, 3)
        # Combine the 3 bytes of data to form a single value
        a = a_raw[0] << 16 | a_raw[1] << 8 | a_raw[2]
        # Handle negative values using 2's complement
        if a & 0x800000:
            a |= 0xff000000
            us = (1 << 32)
            a = -1 * (us - a)
        # Return the altitude value in meters (divided by 100)
        return a / 100.0

    def HP20X_IIC_WriteCmd(self, uCmd):
        # Write a command byte to the specified I2C address
        self.bus.write_byte(self.address, uCmd)

    def HP20X_IIC_ReadReg(self, bReg):
        # Read a byte from the specified register address
        return self.bus.read_byte_data(self.address, bReg | self.HP20X_RD_REG_MODE)


# Class representing the Kalman filter
class KalmanFilter:
    def __init__(self):
        # Process noise covariance
        self.q = 0.01
        # Measurement noise covariance
        self.r = 0.1
        # Initial estimated value
        self.x = 0
        # Initial estimated error covariance
        self.p = 1
        # Initial Kalman gain
        self.k = 0

    def Filter(self, measurement):
        # Prediction step: Update the estimated error covariance
        self.p = self.p + self.q
        # Update step: Calculate the Kalman gain
        self.k = self.p / (self.p + self.r)
        # Update step: Update the estimated value based on the measurement
        self.x = self.x + self.k * (measurement - self.x)
        # Update step: Update the estimated error covariance
        self.p = (1 - self.k) * self.p
        # Return the filtered estimated value
        return self.x


# Kalman filter for temperature data
t_filter = KalmanFilter()
# Kalman filter for pressure data
p_filter = KalmanFilter()
# Kalman filter for altitude data
a_filter = KalmanFilter()

# Create an instance of the HP20x sensor
hp20x = HP20x()


# Function to simulate the setup process
def setup():
    print("****HP20x_dev demo by seeed studio****\n")
    print("Calculation formula: H = [8.5(101325-P)]/100 \n")
    # Wait for 0.15 seconds after power-on to stabilize the voltage
    time.sleep(0.15)
    # Initialize the HP20x sensor
    hp20x.begin()
    # Wait for 0.1 seconds
    time.sleep(0.1)
    # Check if the HP20x sensor is available
    ret = hp20x.isAvailable()
    if ret:
        print("HP20x_dev is available.\n")
    else:
        print("HP20x_dev isn't available.\n")
    return ret


# Function to simulate the loop process
def loop(ret):
    if ret:
        while True:
            print("------------------\n")
            # Read the temperature value from the HP20x sensor
            temper = hp20x.ReadTemperature()
            print("Temper:")
            print(f"{temper}C.\n")
            print("Filter:")
            # Apply the Kalman filter to the temperature value
            print(f"{t_filter.Filter(temper)}C.\n")

            # Read the pressure value from the HP20x sensor
            pressure = hp20x.ReadPressure()
            print("Pressure:")
            print(f"{pressure}hPa.\n")
            print("Filter:")
            # Apply the Kalman filter to the pressure value
            print(f"{p_filter.Filter(pressure)}hPa\n")

            # Read the altitude value from the HP20x sensor
            altitude = hp20x.ReadAltitude()
            print("Altitude:")
            print(f"{altitude}m.\n")
            print("Filter:")
            # Apply the Kalman filter to the altitude value
            print(f"{a_filter.Filter(altitude)}m.\n")
            print("------------------\n")
            # Wait for 1 second before the next reading
            time.sleep(1)


if __name__ == "__main__":
    # Perform the setup process
    ret = setup()
    # Start the loop process if the sensor is available
    loop(ret)
    
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Archivo Eagle Grove_Barometer_High-Accuracy_v1.0_sch_pcb](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_ v1.0_sch_pcb.zip)
- **[Hoja de Datos]** [Hoja de Datos HP206F](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/HP206F_Datasheet.pdf)
- **[Librería]** [Repositorio Github para Grove_Barometer_HP20x con arduino](https://github.com/Carla-Guo/Grove_Barometer_HP20x)

## Proyectos

**Cultivos Inteligentes**: ¡Implementando IoT en la Agricultura Convencional!
Nuestra misión con la naturaleza es preservarla, diseñando e implementando tecnologías y métodos de monitoreo con la ayuda de IoT a través de Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

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
