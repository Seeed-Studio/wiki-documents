---
description: Grove - Sensor de Corriente DC de 10A (ACS725)
title: Grove - Sensor de Corriente DC de 10A (ACS725)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-10A_DC_Current_Sensor-ACS725
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/preview.png" /></div>

El Grove - Sensor de Corriente DC de 10A (ACS725) es un sensor de corriente DC de alta precisión basado en ACS725. El IC sensor de corriente Allegro™ ACS725 es una solución económica y precisa para la detección de corriente DC en sistemas industriales, automotrices, comerciales y de comunicaciones.

El Grove - Sensor de Corriente DC de 10A (ACS725) puede medir la corriente DC hasta 10A y tiene una sensibilidad base de 264mV/A. Este sensor no soporta corriente AC, si desea medir la carga AC por favor consulte el:

[Grove - Sensor de Corriente DC/AC de ±5A (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Salida analógica de alto ancho de banda de 120 kHz para tiempos de respuesta más rápidos en aplicaciones de control
- Rendimiento de ruido líder en la industria con ancho de banda muy mejorado a través de técnicas de diseño de amplificador y filtro propietarias
- Resistencia del conductor primario de 1.2 mΩ para baja pérdida de potencia y alta capacidad de resistencia a corriente de arranque
- La detección Hall diferencial rechaza campos de modo común
- Salida analógica

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura ambiente de operación| -40 – 150℃|
|Temperatura de almacenamiento|- 65°C – 165°C|
|Voltaje de trabajo|&lt;400V|
|Rango de detección de corriente|0 – 10A|
|Sensibilidad|264mV/A(Típ.)|
|Interfaz de salida|Analógica|
|Interfaz de entrada|Terminal de tornillo|

## Principio de Funcionamiento

Existen dos tipos de detección de corriente: directa e indirecta. La clasificación se basa principalmente en la tecnología utilizada para medir la corriente.

**Detección directa:**

- Ley de Ohm

**Detección indirecta:**

- Ley de Inducción de Faraday
- Sensores de campo magnético
- Efecto Faraday

El Grove - Sensor de Corriente DC de 10A (ACS725) utiliza tecnología de sensores de campo magnético. Y existen tres tipos de tecnología de sensores de campo magnético:

- Efecto Hall
- Sensores de compuerta de flujo
- Sensor de corriente magneto-resistivo

El Grove - Sensor de Corriente DC de 10A (ACS725) se basa en el principio Hall, la detección Hall diferencial rechaza el modo común.

## Descripción del Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" /></a></p>
  <figcaption><b>Figura 3</b>. <i>Diagrama de pines</i></figcaption>
</figure>
</div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Comenzando

:::caution
Está prohibido que el cuerpo humano toque el módulo durante la prueba, de lo contrario existe peligro de descarga eléctrica.
:::

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Sensor de Corriente DC de 10A (ACS725)|
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/thumbnail.jpg" /></div>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
**1** Por favor conecta el cable USB suavemente, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Sensor de Corriente DC de 10A(ACS725) al puerto **A0** del Base Shield.

- **Paso 2.** Conecta los polos positivo y negativo del circuito a probar a los correspondientes polos positivo y negativo del terminal de tornillo.

:::tip
Si inviertes los polos positivo y negativo, la lectura será invertida. Este sensor necesita calibración antes del uso, así que por favor no enciendas el circuito primero.
:::

- **Paso 3.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" /></a></p>
  <figcaption><b>Figura 4</b>. <i>Usamos la Fuente de Alimentación DC en esta demostración, por favor configura la corriente a 0A o no la enciendas al principio</i></figcaption>
</figure>
</div>

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la Librería [Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor) desde Github.

- **Paso 2.** En la carpeta /example/, puedes encontrar el código de demostración. Aquí tomamos el **Grove_10A_Current_Sensor** como ejemplo. Solo haz clic en [Grove_10A_Current_Sensor.ino](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_10A_Current_Sensor/Grove_10A_Current_Sensor.ino) para abrir la demostración. O puedes copiar el siguiente código:

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A0

// Take the average of 500 times
const int averageValue = 500;

long int sensorValue = 0;
float sensitivity = 1000.0 / 264.0; //1000mA per 264mV 


float Vref = 322;   //Vref is zero drift value, you need to change this value to the value you actually measured before using it.
void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // Read the value 10 times:
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // wait 2 milliseconds before the next loop
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // Calculate the corresponding current
  float current = (voltage - Vref) * sensitivity;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // Print display current (mA)
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // Reset the sensorValue for the next reading
  sensorValue = 0;
  // Read it once per second
  delay(1000);
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **9600**.

- **Paso 5. Calibración**  
        Cuando no hay corriente fluyendo, el sensor aún tendrá un pequeño valor de salida. Llamamos a este valor **desplazamiento cero**.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" /></a></p>
  <figcaption><b>Figura 5</b>. <i>El desplazamiento cero de esta placa es 346.68mV，Convertido en corriente es 93.48mA</i></figcaption>
</figure>
</div>

Debido a la presencia del desplazamiento cero, el sensor también tendrá una lectura cuando no hay corriente. Así que establecemos un parámetro **Vref** para corregirlo, puedes encontrarlo en el bloque de código anterior.

Línea 19:

```cpp
float Vref = 322;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

En el código de demostración, establecemos el Vref a 322, sin embargo, el valor de desplazamiento cero varía de placa a placa. Como sabes, la placa que usamos en esta demostración es 346.68. Así que modifiquemos la Línea 21:

```cpp
float Vref = 346.68;
```

Luego guarda el código y sube el código nuevamente, sigue el Paso 2. y Paso 3. Ahora veamos:

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" /></a></p>
  <figcaption><b>Figura 6</b>. <i>Ahora el desplazamiento cero de corriente se convierte a 0mA</i></figcaption>
</figure>
</div>

Cuando la salida de corriente se convierte a 0mA o un valor pequeño, has completado la calibración.

- **Paso 6.** Ahora es todo tuyo, puedes encender la corriente. Por favor siéntete libre de usarlo, ¡recuerda que este es un Sensor de Corriente DC de 10A, la corriente no puede exceder 10A!

Si quieres conocer la fórmula de cálculo del resultado, por favor consulta la [FAQ Q1](#faq)

### Jugar con Raspberry

**Materiales requeridos**

| Raspberry pi | Grove Base Hat para RasPi| Sensor de Corriente DC 10A |
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

#### Conexión de Hardware

- **Paso 1**. Conecta el Grove Base Hat al Raspberry Pi.

- **Paso 2**. Conecta el Grove - Sensor de Corriente DC 10A(ACS70331) al puerto **A0** del Base Hat.

- **Paso 3**. Conecta los polos positivo y negativo del circuito a probar a los correspondientes polos positivo y negativo del terminal de tornillo.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" /></a></p>
  <figcaption><b>Figura 7</b>. <i>Usamos la Fuente de Alimentación DC en esta demostración, por favor configura la corriente a 0A o no la enciendas al principio</i></figcaption>
</figure>
</div>

:::tip
Si inviertes los polos positivo y negativo, la lectura será invertida. Este sensor necesita calibración antes del uso, así que por favor no enciendas el circuito primero.
:::

- **Paso 4**. Alimenta el Raspberry Pi a través del cable Micro-USB.

:::caution
Puedes alimentar el Raspberry Pi por puerto USB de computadora o adaptador DC, sin embargo, si estás usando el Raspberry pi 3B+, te recomendamos encarecidamente alimentarlo por adaptador DC, si usas el puerto USB de la PC, puedes dañar el Raspberry Pi 3B+.
:::

#### Software

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.

- **Paso 2**. Descarga el archivo fuente clonando la biblioteca [grove.py](https://github.com/Seeed-Studio/grove.py).

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```python
cd grove.py/grove   # to enter the demo file folder
python grove_current_sensor.py 0 10A   # to run the demo program 
```

Entonces la terminal mostrará la siguiente salida:

```python
pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
323
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

Presiona `ctrl`+`c` para salir.

:::note
Ten en cuenta el segundo comando. Hay dos parámetros después del nombre del archivo:

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>0</font>   significa que el sensor está conectado al puerto A0. Si conectas el sensor al puerto A2, entonces necesitas cambiar este parámetro a 2. Este parámetro tiene un rango de 0-7, pero si usas el sombrero base Grove, solo puedes usar 0/2/4/6 debido a las limitaciones físicas de la interfaz.

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>10A</font> significa que el tipo de sensor de corriente es 10A DC
:::

Sensor                                     |Tipo de corriente|Valor del parámetro
-------------------------------------------|------------|----
Grove - Sensor de corriente DC 2.5A (ACS70331)   |DC          |2.5A
Grove - Sensor de corriente DC/AC ±5A (ACS70331)|DC          |5A_DC
                                           |AC          |5A_AC
Grove - Sensor de corriente DC 10A (ACS725)     |DC          |10A

<div align="center"><i>Esta serie tiene tres sensores de corriente, la lista de parámetros es la anterior</i></div>

:::note
Ten en cuenta que el sensor de corriente DC de 10A tendrá un gran error al medir un rango pequeño, por lo que se recomienda que proporciones una corriente de más de 200mA para las pruebas. Además, el entorno de medición afectará la precisión, como que la ondulación del voltaje de alimentación sea lo más pequeña posible.
:::

- **Paso 4 Calibración**.

    Cuando no hay corriente fluyendo, el sensor aún tendrá un pequeño valor de salida. Llamamos a este valor desplazamiento cero. Como puedes ver, en el paso 3, el desplazamiento cero de esta placa es 324mV, convertido en corriente es 8mA.

    Debido a la presencia del desplazamiento cero, el sensor también tendrá una lectura cuando no hay corriente. Así que establecemos un parámetro **Vref** para corregirlo, puedes encontrarlo en el **python grove_current_sensor.py**. Para el Grove - Sensor de corriente DC 10A (ACS725), establecemos el **Vref** a 322 por defecto, sin embargo el desplazamiento cero varía de placa a placa. Por eso necesitamos hacer la calibración primero.

    Revisa el código python a continuación.

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
#
# This is the library for Grove Base Hat
# which used to connect grove sensors for Raspberry Pi.
'''
This is the code for
    - `Grove - 2.5A DC current sensor  <https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html>`_
    - `Grove - 5A AC/DC current sensor <https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html>`_
    - `Grove - 10A current sensor      <https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html>`_
Examples:
    .. code-block:: python
        import time
        from grove_current_sensor import Current
        pin = 0
        sensor_type = "2.5A"
        #if use 10A current sensor input: pin = 0 , sensor_type = "10A"
        if (sensor_type == "2.5A"):
            sensitivity = 1000.0 / 800.0
            Vref = 260
        if (sensor_type == "5A_DC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "5A_AC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "10A"):
            sensitivity = 1000.0 / 264.0
            Vref = 322
        averageValue = 500
        ADC = Current()
        while True:
            if(sensor_type == "5A_AC"):
                pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
            else:
                temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                current = temp[0]
                pin_voltage = temp[1]
        
            current = round(current)
            print("pin_voltage(mV):")
            print(pin_voltage)
            print("current(mA):")
            print(current)
            print()
            time.sleep(1)
    
'''

import sys
import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0

__all__ = ['Current','Bus']

class Current():
    '''
    Grove Current Sensor class
    '''

    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        '''
        Init iic.
        Args: 
            bus_num(int): the bus number;
            addr(int): iic address;
        '''
        self.bus = Bus(bus_num)
        self.addr = addr
  
    def get_nchan_vol_milli_data(self,n,averageValue):
        '''
        Get n chanel data with unit mV.
        :param int n: the adc pin.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: voltage value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        return val

    def get_nchan_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        2.5A/5A DC/10A cunrrent sensor get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        currentVal = (val - Vref) * sensitivity
        return currentVal,val

    def get_nchan_AC_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        5A current sensor AC output and get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        sensorValue = 0
        for i in range(averageValue):
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val=data[1]<<8|data[0]
            if(val > sensorValue):
                sensorValue=val
            time.sleep(0.00004)
        currentVal = ((sensorValue - Vref) * sensitivity)*0.707
        return currentVal   

ADC = Current()
def main():
    if(len(sys.argv) == 3):

        pin = int(sys.argv[1])
        sensor_type = sys.argv[2]
        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

            while True:

                if(sensor_type == "5A_AC"):
                    pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                    current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
                else:
                    temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                    current = temp[0]
                    pin_voltage = temp[1]

                current = round(current)
                print("pin_voltage(mV):")
                print(pin_voltage)
                print("current(mA):")
                print(current)
                print()
                time.sleep(1)
            
        else:
            print("parameter input error!")
            print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
            print("parameter1: 0-7")
            print("parameter2: 2.5A/5A_DC/5A_AC/10A")
    
    else:
        print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
        print("parameter1: 0-7")
        print("parameter2: 2.5A/5A_DC/5A_AC/10A")
    
    
if __name__ == '__main__':
    main()

```

Puedes modificar el **Vref** en la línea 156 del bloque de código anterior:

```python

        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

```

Como puedes ver, para el Sensor de Corriente de 10A el **Vref** predeterminado es 322, y en el **Paso 3**, podemos encontrar que cuando no hay corriente el valor de desplazamiento cero es 324mV. Así que vamos a cambiarlo a 324.

```python
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 324
```

Ahora, ejecutemos esta demostración nuevamente.

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
325
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
323
current(mA):
-4.0
()
pin_voltage(mV):
324
current(mA):
0.0

```

Bueno, mejor que antes, ahora puedes medir la corriente con mayor precisión 😄

## FAQ

**P1#** ¿Cuál es la fórmula de cálculo de corriente?

**R1:** Si piensas que la [parte del principio](#working-principle) es muy complicada, vamos a explicarlo de manera sencilla. La corriente en el circuito a probar excita el campo magnético, lo que causa que el valor de resistencia de los elementos GMR cambie. Y el cambio de resistencia en el puente causa un cambio en el voltaje a la salida del chip. Llamamos a la salida de voltaje como **V<sub>IOUT</sub>**.

<div><p style={{textAlign: 'center'}}>
   V<sub>IOUT</sub> = Sens × I<sub>p</sub> +  V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens es el coeficiente que convierte la corriente en un voltaje de salida. Para este módulo es 264mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> es el valor de corriente en el circuito a probar, Unidad mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> es la salida de voltaje cuando I<sub>p</sub> es 0mA (lo que significa que no hay corriente en el circuito a probar), Unidad mV.

Aquí viene el valor de corriente:  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

Ahora, revisemos la figura 5, explicaremos por qué el valor de corriente de la salida no es 0 cuando el valor de corriente real en el circuito a probar es 0. Como puedes ver en la figura 5, el **initialValue** es 346.68mV, que es el **V<sub>IOUT</sub>**; la corriente es 93.48mA, que es el **I<sub>p</sub>**. En cuanto al **V<sub>IOUT(Q)</sub>**, es el **Vref** que establecemos en el código.
En la figura 5, es 265. Y el **Sens** es 264mA/V, que es 264mA/1000mV. Ahora, hagamos algunos cálculos:

<div><p style={{textAlign: 'center'}}>
  {'{'}(346.68mV-322mV) / (264mA/1000mV){'}'} = 93.48mA
</p></div>

Entonces, en la figura 6, cuando establecemos el **Vref** a 346.68, el **Ip** se convierte en 0mA.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - 10A DC Current Sensor (ACS725) Archivo de esquemático](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip)
- **[PDF]** [Hoja de datos ACS725](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/ACS725.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
