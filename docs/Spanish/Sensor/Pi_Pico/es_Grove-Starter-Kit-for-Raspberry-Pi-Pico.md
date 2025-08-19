---
description: Grove Shield / Grove Starter Kit for Raspberry Pi Pico
title: Grove Basic Kit para Raspberry Pi Pico
keywords:
- Pi_Pico
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Starter-Kit-for-Raspberry-Pi-Pico
last_update:
  date: 07/19/2025
  author: Guillermo
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Pico_hardware.png)

La Raspberry Pi Pico es una nueva placa de microcontrolador de bajo costo y alto rendimiento, así que ¿cómo integrar sensores Grove con ella? El Grove Shield resuelve perfectamente este problema.

El Grove Shield para Pi Pico v1.0 es una shield plug-and-play para Raspberry Pi Pico que integra varios tipos de conectores Grove, incluidos 2*I2C, 3*puertos analógicos, 2*UART, 3*puertos digitales, interfaz de depuración SWD y pin SPI, con un interruptor de voltaje seleccionable 3.3v/5v. Permite construir prototipos y proyectos de forma rápida y sencilla sin cables ni protoboard. La placa shield es un accesorio apilable que actúa como un puente entre el Pi Pico y el sistema Grove de Seeed.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Especificaciones

| Parámetro              | Valor/Rango     |
|------------------------|-----------------|
| Voltaje de operación   | 3.3V / 5V        |
| Temperatura de trabajo | -25℃ a +85℃     |
| Puertos analógicos     | 3               |
| Puertos digitales      | 3               |
| Puertos UART           | 2               |
| Puertos I2C            | 2               |
| Tamaño                 | 56mm x 56mm     |

## Placas Compatibles

El Grove Shield es probado y totalmente compatible con la [Pi Pico](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html).

## Descripción del Hardware

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareoverview.png)

- **1 - Puertos analógicos**: incluye 3 puertos analógicos, A0, A1, A2.
- **2 - Puertos digitales**: incluye 3 puertos digitales, D16, D18, D20.
- **3 - Puertos UART**: 2 puertos UART.
- **4 - Puertos I2C**: 2 puertos I2C.
- **5 - Interruptor de voltaje**: selector de voltaje 5V/3.3V.
- **6 - Puerto SPI**: 1 puerto SPI0.

- **Dimensiones**: 56mm * 56mm

## Primeros Pasos

### Proyecto 1: Diferentes sonidos con un zumbador

#### Materiales necesarios

**Paso 1.** Prepara los siguientes elementos:

| Pi Pico | Grove Shield para Pi Pico | Grove - Zumbador | Grove - Sensor de Ángulo Rotatorio |
|---------|----------------------------|------------------|-------------------------------------|
| ![Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg) | ![Grove Shield para Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png) | ![Zumbador Grove](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png) | ![Sensor de Ángulo Rotatorio](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png) |
| [Comprar](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html) | [Comprar](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html) | [Comprar](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) | [Comprar](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html) |

**Paso 2.** Conecta el zumbador Grove al puerto A1 del Grove Shield.

**Paso 3.** Conecta el sensor rotatorio Grove al puerto A0 del Grove Shield.

**Paso 4.** Conecta el Grove Shield al Pi Pico.

**Paso 5.** Conecta el Pi Pico a tu PC mediante un cable USB.

![Hardware Setup](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareconnection.jpg)

#### Configuración del Software

**Paso 1.** Descarga Thonny IDE:

- [Windows](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.exe)
- [Mac](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.pkg)

**Para entornos Linux**:

Puedes instalar Thonny de distintas formas según tu distribución:

- **Paquete binario (Thonny + Python)**:

  ```bash
  bash <(wget -O - https://thonny.org/installer-for-linux)
  ```

- **Usando pip:**:

  ```bash
  pip3 install thonny
  ```

- **Para Debian, Raspbian, Ubuntu, Mint y similares:**:

  ```bash
  sudo apt install thonny
  ```

- **Para Fedora**:

  ```bash
  sudo dnf install thonny
  ```

**Paso 2.** Abre Thonny y conecta tu computadora al Raspberry Pi Pico. En Thonny, ve al menú **Ejecutar**, selecciona **Seleccionar intérprete**, y elige **"MicroPython (Raspberry Pi Pico)"** en el menú desplegable. Luego, selecciona el puerto COM de tu Pico.

**Nota**: Si no ves "**MicroPython (Raspberry Pi Pico)**" en la lista de intérpretes, asegúrate de tener la última versión de Thonny instalada.

![Interpreter Selection](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/interpreter.png)
![COM Port Selection](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/comport.png)

**Paso 3.** Si el Raspberry Pi Pico está conectado y ejecutando MicroPython, Thonny debería conectarse automáticamente al REPL. Ahora copia el siguiente código en el IDE de Thonny y presiona el botón verde **Ejecutar**.

```python
from machine import Pin, PWM, ADC
from time import sleep

adc = ADC(0)  # ADC input (knob potentiometer) connected to A0
pwm = PWM(Pin(27))  # DAC output (buzzer) connected to A1
pwm.freq(10000)

while True:
    val = adc.read_u16()  # Read A0 port ADC value (65535~0)
    # Drive the buzzer, turn off the buzzer when the ADC value is less than 300
    if val > 300:
        pwm.freq(int(val / 10))
        pwm.duty_u16(10000)
    else:
        pwm.duty_u16(0)
    
    print(val)
    sleep(0.05)
```

Ahora, gira el **Sensor Giratorio Grove (Rotary Angle Sensor)**, y escucharás distintos sonidos del zumbador (buzzer) conforme ajustas el ángulo.

### Proyecto 2: Detección de Temperatura y Humedad

<Tabs>
<TabItem  value="Old" label="Option 1: DHT11 and SSD1315" default>

#### Materiales Requeridos

**Paso 1.** Prepara los siguientes componentes:

<div class="table-center">
	<table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Grove Shield para Pi Pico</th>
        <th>Pantalla OLED Grove 0.96" (SSD1315)</th>
        <th>Sensor de Temperatura y Humedad Grove (DHT11)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
    </tr>
    </table>
</div>

**Paso 2.** Conecta la pantalla OLED Grove 0.96" al puerto I2C1 del Grove Shield.

**Paso 3.** Conecta el sensor de temperatura y humedad Grove (DHT11) al puerto I2C0 del Grove Shield.

**Paso 4.** Inserta el Grove Shield en el Pi Pico.

**Paso 5.** Conecta el Pi Pico a tu computadora mediante un cable USB.

#### Configuración del Software

Consulta la sección de software del Demo 1.

1. Copia el siguiente código en el IDE Thonny:

```python
from ssd1306 import SSD1306_I2C
from dht11 import *
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)  # OLED connected to I2C1
oled = SSD1306_I2C(128, 64, i2c)
dht2 = DHT(18)  # Temperature and humidity sensor connected to D18

while True:
    temp, humid = dht2.readTempHumid()  # Read temperature and humidity
    '''I2C port test and OLED display test'''
    oled.fill(0)  # Clear the screen
    oled.text("Temp:  " + str(temp), 0, 0)  # Display temperature on line 1
    oled.text("Humid: " + str(humid), 0, 8)  # Display humidity on line 2
    oled.show()
    sleep(0.5)
```

2. Download the following required Python files to your local machine:
   - [ssd1306.py](https://github.com/micropython/micropython-lib/blob/master/micropython/drivers/display/ssd1306/ssd1306.py)

```python title=dht11.py
import time
from machine import Pin

MAXTIMINGS  = 85

DHT11 = 11
DHT22 = 22
DHT21 = 21
AM2301 = 21

class DHT(object):
    def __init__(self, data_pin,Type=DHT11):
        self.Data_pin = data_pin
        self.__pinData = Pin(data_pin, Pin.OUT)
        self.firstreading = True
        self.__pinData.value(1)
        self._lastreadtime = 0
        self.data=[0]*5
        self.temp = 0
        self.humid = 0

    def read(self):
        i=0
        j=0
        self.__pinData.value(1) 
        #time.sleep(0.25) 

        self.data[0] =  self.data[1] =  self.data[2] =  self.data[3] =  self.data[4] = 0 
        
        # now pull it low for ~20 milliseconds
        pinData = Pin(self.Data_pin, Pin.OUT, None)
        pinData.value(0) 
        time.sleep_ms(20)
        pinData.value(1)
        time.sleep_us(41)
        pinData = Pin(self.Data_pin, Pin.IN)
        DHT11_TIMEOUT = -1
        time_cnt=0
        while(0 ==pinData.value()):
            time.sleep_us(5)  
            time_cnt = time_cnt+1
            if(time_cnt > 16): 
                return
        
        # DHT11 pulls the bus up at least 80 US in preparation for sending sensor data.
        time_cnt=0
        while(1 == pinData.value()):
            time.sleep_us(5)   
            time_cnt = time_cnt+1
            if(time_cnt > 16): 
                return  
        
        
        for j in range(5):
            i = 0
            result=0
            PINC = 1
            for i in range(8):

                while(not (PINC & pinData.value())):  # wait for 50us
                    pass
                    #print('wait 50us')
                time.sleep_us(25)

                if(PINC & pinData.value()):
                    result |=(1<<(7-i))
                while(PINC & pinData.value()):  # wait '1' finish
                    pass
                    #print('wait 1')
            self.data[j] = result

        pinData = Pin(self.Data_pin, Pin.OUT, None)
        pinData.value(1)   

        dht11_check_sum = (self.data[0]+self.data[1]+self.data[2]+self.data[3]&0xff)
        # check check_sum
        if(self.data[4] is not dht11_check_sum):
            print("DHT11 checksum error")
        #print(self.data) 
        if ((j >= 4) and ( self.data[4] == dht11_check_sum)):
            return True 
        return False
        
    def readHumidity(self):
        if (self.read()):
            self.humid = float(self.data[0])
            self.humid = self.humid + float(self.data[1]/10)
        return self.humid

    def readTemperature(self):
        if (self.read()):
            self.temp = float(self.data[2])
            self.temp = self.temp + float(self.data[3]/10)
        return self.temp
    
    def readTempHumid(self):
        if (self.read()):        
            self.temp = float(self.data[2])
            self.temp = self.temp + float(self.data[3]/10)
            self.humid = float(self.data[0])
            self.humid = self.humid + float(self.data[1]/10)
        return self.temp , self.humid
```

3. Abre **dht11.py** en Thonny IDE, haz clic en `Archivo -> Guardar como -> Dispositivo MicroPython` y guarda el archivo con el nombre **dht11.py** en tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/saveas.png" style={{width:700, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/open.png" style={{width:700, height:'auto'}}/></div>

4. Repite el mismo proceso para guardar **ssd1306.py** en tu dispositivo MicroPython.

#### Ejecución del proyecto

Una vez que ambos archivos estén guardados en tu dispositivo MicroPython, ejecuta el código de demostración presionando el botón verde **Run** en Thonny.

Ahora deberías ver la temperatura y la humedad mostradas en la pantalla OLED, similar a la imagen siguiente:

![OLED Display Output](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/oled1.jpg)


</TabItem>
<TabItem value="New" label="Option 2: DHT20 and LCD1602" default>

#### Materials Required

**Step 1.** Prepare the following items:

<div class="table-center">
	<table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Grove Shield for Pi Pico</th>
        <th>Grove 16x2 LCD (White on Blue)</th>
        <th>Grove Temperature & Humidity Sensor V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-10bazaar969249_front.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101020932_preview-07-min_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16x2-LCD-White-on-Blue.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
    </tr>
    </table>
</div>


**Paso 2.** Conecta la pantalla Grove 16x2 LCD (blanca sobre azul) al puerto I2C1 del Grove Shield.

**Paso 3.** Conecta el sensor de temperatura y humedad Grove V2.0 (DHT20) al puerto D18 del Grove Shield.

**Paso 4.** Inserta el Grove Shield en la Raspberry Pi Pico.

**Paso 5.** Conecta la Pi Pico a tu PC usando un cable USB.

#### Configuración del software

Por favor, consulta la sección de software de la Demo 1.

1. Copia el siguiente código en Thonny IDE:

```python
from lcd1602 import LCD1602
from dht20 import DHT20
from machine import I2C,Pin
from time import sleep

i2c1 = I2C(1,scl=Pin(7), sda=Pin(6), freq=400000)
d = LCD1602(i2c1, 2, 16)
i2c0 = I2C(0, scl=Pin(9), sda=Pin(8),freq=400000)
dht20 = DHT20(0x38, i2c0)

while True:

    measurements = dht20.measurements
    temp_rounded = round(measurements['t'], 1)
    humidity_rounded = round(measurements['rh'], 1)
    print(f"Temperature: {temp_rounded} °C, humidity: {humidity_rounded} %RH")
    d.home()
    d.print('temp=')
    d.print(str(temp_rounded))
    d.print('C')
    sleep(1)
    d.setCursor(0, 1)
    d.print('humidity=')
    d.print(str(humidity_rounded))
    d.print('%RH')
    sleep(1)
```

2. Descarga los siguientes archivos Python requeridos a tu computadora local:
   - [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py)
   - [lcd1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py)

3. Abre **DHT20.py** en Thonny IDE, haz clic en `Archivo -> Guardar como -> MicroPython device`, y guarda el archivo con el nombre **DHT20.py** en tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/saveas.png" style={{width:750, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/open.png" style={{width:750, height:'auto'}}/></div>

4. Repite el mismo proceso para guardar **lcd1602.py** en tu dispositivo MicroPython.

#### Ejecutar el proyecto

Una vez que ambos archivos estén guardados en tu dispositivo MicroPython, ejecuta el código de demostración presionando el botón verde **Run** en Thonny.

Ahora deberías ver la temperatura y la humedad mostradas en la pantalla OLED, similar a la imagen a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/oled_output.jpg" style={{width:750, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Proyecto 3: Control de LED y Relé

#### Materiales necesarios

- **Paso 1.** Prepara los siguientes elementos:

| Pi Pico | Grove Shield para Pi Pico|  Grove-button |Grove-LED|Grove relay|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ledsocket.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[Compra ahora](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Compra ahora](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Compra ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Compra ahora](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Compra ahora](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- **Paso 2.** Conecta el botón Grove al pin digital 18 del Grove Shield.  
- **Paso 3.** Conecta el LED Grove al puerto D16 del Grove Shield.  
- **Paso 4.** Conecta el relé Grove al puerto D20 del Grove Shield.  
- **Paso 5.** Inserta el Grove Shield en la Pi Pico.  
- **Paso 6.** Conecta la Pi Pico a tu computadora mediante un cable USB.

#### Software

Por favor, consulta la sección de software de la Demo 1.

Copia el siguiente código en el IDE Thonny:

```python showLineNumbers
from machine import Pin

button = Pin(18, Pin.IN, Pin.PULL_UP)# button connect to D18
button.irq(lambda pin: InterruptsButton(),Pin.IRQ_FALLING)#Set key interrupt
led = Pin(16, Pin.OUT)#led connect to D16
relay = Pin(20, Pin.OUT)
tmp = 0
'''Key interrupt function, change the state of the light when the key is pressed'''
def InterruptsButton(): #button input
    global tmp
    tmp = ~tmp
    led.value(tmp)
    relay.value(tmp)
while True:  
    pass
    
```

Ahora haz clic en el botón verde para ejecutar el código de demostración.

Luego podrás presionar el botón Grove para controlar el encendido y apagado del LED y del relé.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo3.jpg)

### Proyecto 4: Cambio de Colores (RGB)

#### Materiales necesarios

- **Paso 1.** Prepara los siguientes elementos:

| Pi Pico | Grove Shield para Pi Pico|  RGB LED WS2813 mini |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/redrgb.png)|
|[Compra ahora](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Compra ahora](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Compra ahora](https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html)|

- **Paso 2.** Conecta el LED RGB WS2813 mini al puerto 18 del Grove Shield.  
- **Paso 3.** Inserta el Grove Shield en la Pi Pico.  
- **Paso 4.** Conecta la Pi Pico a tu computadora mediante un cable USB.

#### Software

Por favor, consulta la sección de software de la Demo 1.

Copia el siguiente código en el IDE Thonny:

```python showLineNumbers
from ws2812 import WS2812
import time

BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
COLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)

#WS2812(pin_num,led_count)
led = WS2812(18,30)

print("fills")
for color in COLORS:
    led.pixels_fill(color)
    led.pixels_show()
    time.sleep(0.2)

print("chases")
for color in COLORS:
    led.color_chase(color, 0.01)

print("rainbow")
led.rainbow_cycle(0)


```

Luego, descarga el archivo [ws2812.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/ws2812.py) a tu computadora local.  
Ábrelo con Thonny, haz clic en `Archivo -> Guardar como -> MicroPython device`.

Escribe **ws2812.py** en la columna del nombre del archivo y haz clic en "Aceptar".  
El archivo se guardará en `Archivo -> Abrir -> MicroPython device`.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813savelocal.png)

Una vez que hayas guardado el archivo en tu dispositivo MicroPython, haz clic en el botón verde para ejecutar el código de demostración.  
Ahora podrás ver el LED RGB WS2813 mini encenderse en colores brillantes como se muestra a continuación:

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813mini.gif)

### Proyecto 5: Detección de Sonido y Luz

#### Materiales necesarios

- **Paso 1.** Prepara los siguientes elementos:

| Pi Pico | Grove Shield para Pi Pico| grove sound sensor |Grove light sensor|Grove-16x2 LCD|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg)|
|[Compra uno](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Compra uno](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Compra uno](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[Compra uno](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[Compra uno](https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html)|

- **Paso 2.** Conecta el sensor de sonido Grove al pin analógico 0 del Grove Shield.  
- **Paso 3.** Conecta el sensor de luz Grove al puerto A1 del Grove Shield.  
- **Paso 4.** Conecta la pantalla LCD Grove 16x2 al puerto I2C1 del Grove Shield.  
- **Paso 5.** Inserta el Grove Shield en la Raspberry Pi Pico.  
- **Paso 6.** Conecta la Pi Pico a tu computadora usando un cable USB.

#### Software

Por favor, consulta la sección de software del Proyecto Demo 1.

Copia el siguiente código en el IDE Thonny:

```python
#from lcd1602 import LCD1602_RGB  #LCD1602 RGB grove
from lcd1602 import LCD1602
from machine import I2C,Pin,ADC
from time import sleep
i2c = I2C(1,scl=Pin(7), sda=Pin(6), freq=400000)
d = LCD1602(i2c, 2, 16)
#d = LCD1602_RGB.display(i2c, 2, 16)
#d.set_rgb(255, 0, 0)
sleep(1)
light = ADC(0)
sound = ADC(1)

while True:
    
    lightVal = light.read_u16()
    soundVal = sound.read_u16()
    d.home()
    d.print('lightvalue=')
    d.print(str(lightVal))
    #d.set_rgb(0, 255, 0)
    sleep(1)
    d.setCursor(0, 1)
    d.print('soundvalue=')
    d.print(str(soundVal))
    #d.set_rgb(0, 0, 255)
    sleep(1)
    
```

Luego, descarga el archivo [LCD1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py) a tu computadora local.  
Ábrelo con Thonny, haz clic en `Archivo -> Guardar como -> MicroPython device`.

Escribe **LCD1602.py** en la columna del nombre del archivo y haz clic en "Aceptar".  
El archivo se guardará en `Archivo -> Abrir -> MicroPython device`.

:::note
En este ejemplo, la versión de la pantalla LCD1602 que estamos utilizando es de retroiluminación monocromática.  
Si necesitas controlar la versión con retroiluminación a todo color del LCD1602, consulta las funciones del archivo de biblioteca para aprender cómo utilizarla.
:::

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/lcdlightsound.png)

Una vez que hayas guardado los archivos en tu dispositivo MicroPython, haz clic en el botón verde para ejecutar el código de demostración.  
Ahora deberías ver los datos del sensor de sonido y del sensor de luz como se muestra a continuación:

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo5.jpg)

### Proyecto 6: Detección de Movimiento

#### Materiales necesarios

- **Paso 1.** Prepara los siguientes elementos:

| Pi Pico | Grove Shield para Pi Pico| grove servo |Grove Mini Fan|Grove mini pir motion sensor|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/groveminifan.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/minipir.png)|
|[Compra uno](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Compra uno](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Compra uno](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[Compra uno](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)|[Compra uno](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)|

- **Paso 2.** Conecta el servo Grove al pin analógico 1 del Grove Shield.  
- **Paso 3.** Conecta el mini ventilador Grove al puerto D16 del Grove Shield.  
- **Paso 4.** Conecta el sensor de movimiento PIR mini Grove al puerto D18 del Grove Shield.  
- **Paso 5.** Inserta el Grove Shield en la Raspberry Pi Pico.  
- **Paso 6.** Conecta la Pi Pico a tu computadora usando un cable USB.

#### Software

Por favor, consulta la sección de software del Proyecto Demo 1.

Copia el siguiente código en el IDE Thonny:

```python
from machine import Pin,ADC,PWM
from time import sleep
import utime

miniFun = Pin(16, Pin.OUT)  
miniPir = Pin(18, Pin.IN)  

pwm_Servo=PWM(Pin(27))
pwm_Servo.freq(500)
Servo_Val =0  

while True:
    
    if  miniPir.value() == 1 :
        miniFun.value(1)
            
        while  Servo_Val<65535:
            Servo_Val=Servo_Val+50
            utime.sleep_ms(1)
            pwm_Servo.duty_u16(Servo_Val)
        while Servo_Val>0: 
            Servo_Val=Servo_Val-50
            utime.sleep_ms(1)
            pwm_Servo.duty_u16(Servo_Val)
        
    else :
        miniFun.value(0)
        
        pwm_Servo.duty_u16(0)    
       
          

```

Ahora, haz clic en el botón verde para ejecutar el código de demostración.  
Entonces verás que el mini ventilador Grove y el servo Grove se activan cuando pasas la mano frente al sensor PIR, como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/tutieshi_480x272_3s.gif)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Pico python SDK](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/pico_python_sdk.pdf)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Grove_shield_for_PI_PICOv1.0SCH.pdf)
- **[Eagle]** [PCB&SCH](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip)

## Recursos del Curso

<div align="center"><img width = "{400}" src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/book.png"/></div>

- **[ZIP]** [Guía para principiantes del Raspberry Pi Pico con MicroPython](https://files.seeedstudio.com/Seeed_EDU/Course_documents/Beginner's-Guide-for-Raspberry-Pi-Pico.zip)
- **[ZIP]** [Códigos de ejemplo](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Codes.rar)
- **[ZIP]** [Librerías necesarias](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Libraries.rar)

## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para ofrecerte diversos medios de soporte para asegurar que tu experiencia sea lo más fluida posible.  
Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
