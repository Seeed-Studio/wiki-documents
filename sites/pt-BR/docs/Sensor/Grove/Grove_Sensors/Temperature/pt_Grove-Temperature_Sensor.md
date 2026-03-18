---
description: Grove-Temperature_Sensor
title: Grove-Temperature_Sensor
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Temperature_Sensor
last_update:
  date: 1/3/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Temperature_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Temperature1.jpg" /></div>

O Grove - Temperature Sensor usa um [Thermistor](http://www.legacydistribution.co.uk/downloads/NTC-thermistors/TTC03.pdf) para detectar a temperatura ambiente. A resistência de um termistor irá aumentar quando a temperatura ambiente diminuir. É essa característica que usamos para calcular a temperatura ambiente. A faixa detectável deste sensor é de -40 - 125ºC, e a precisão é de ±1,5ºC.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificações

---

* Tensão: 3,3 ~ 5V

* Potência máxima nominal a 25℃: 300mW

* Resistência em potência zero: 10 KΩ

* Faixa de temperatura de operação: -40 ~ +125 ℃

## Demonstração

---

### Com Arduino

Aqui está um exemplo para mostrar como ler as informações de temperatura do sensor.

1. Conecte o módulo à porta Analógica 0 do Grove - Basic Shield usando o cabo grove de 4 pinos.

2. Conecte o Grove - Basic Shield ao Arduino.
3. Conecte o Arduino ao PC usando um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Tempreture_Sensor_Connector.jpg" /></div>

4. Faça o upload do código abaixo. Clique [aqui](/pt-br/Upload_Code/) se você não souber como fazer o upload.

```
/*
/* Grove - Temperature Sensor demo v1.0
*  This sensor detects the environment temperature,
*  Connect the signal of this sensor to A0, use the
*  Serial monitor to get the result.
*  By: https://www.seeedstudio.com
*/
#include <math.h>
int a;
float temperature;
int B=3975;                  //B value of the thermistor
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a; //get the resistance of the sensor;
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;//convert to temperature via datasheet&nbsp;;
    delay(1000);
    Serial.print("Current temperature is ");
    Serial.println(temperature);
}
```

5. Você pode verificar as leituras pelo Serial Monitor. A unidade padrão é grau Celsius.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Temperature_Sensor_Score.jpg" /></div>

Como referência, a seguir está a curva de resistência do TTC3A103*39H, o termistor que usamos neste sensor. Quanto mais alta a temperatura, menor se torna a resistência.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Twig-Temperature-Sensor-value.jpg" /></div>

### Com [Raspberry Pi](/pt-br/GrovePi_Plus/ "GrovePi+")

1.Você deve ter um raspberry pi e um grovepi ou grovepi+.

2.Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](/pt-br/GrovePi_Plus/#Introducing_the_GrovePi.2B).

3.Conexão

* Conecte o sensor ao soquete D3 do grovepi usando um cabo grove.

4.Navegue até o diretório de demonstrações:

```
cd yourpath/GrovePi/Software/Python/
```

* Para ver o código

```
nano grove_temperature_sensor.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove Temperature Sensor to analog port A0
# SIG,NC,VCC,GND
sensor = 0

while True:
try:
temp = grovepi.temp(sensor,'1.1')
print "temp =", temp
time.sleep(.5)

except KeyboardInterrupt:
break
except IOError:
print "Error"
```

5.Execute a demonstração.

```
sudo python grove_temperature_sensor.py
```

### Com Beaglebone Green

Para começar a editar programas que estão no BBG, você pode usar o Cloud9 IDE.

Como um exercício simples para se familiarizar com o Cloud9 IDE, criar uma aplicação simples para piscar um dos 4 LEDs programáveis do usuário no BeagleBone é um bom começo.

Se esta é a primeira vez que você usa o Cloud9 IDE, siga este [**link**](/pt-br/BeagleBone_Green/#getting-started).

**Passo1:** Clique no "+" no canto superior direito para criar um novo arquivo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/C9-create-tab.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/C9_newfile.jpg" /></div>

**Passo2:** Copie e cole o código a seguir na nova aba

```
from Adafruit_I2C import Adafruit_I2C
import time

ADDR_ADC121 = 0x50

REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07

i2c = Adafruit_I2C(ADDR_ADC121)

class I2cAdc:
def __init__(self):
i2c.write8(REG_ADDR_CONFIG, 0x20)

def read_adc(self):
"Read ADC data 0-4095."
data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
return data

if __name__ == '__main__':
    # Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green.
adc = I2cAdc()
while True:
print 'sensor value ', adc.read_adc()
time.sleep(.2)
```

**Passo3:** Salve o arquivo clicando no ícone de disco com o nome "grove_i2c_adc.py".

**Passo4:** Crie um novo arquivo, copie o código a seguir para a nova aba e salve-o com a extensão .py.

```
import time
import math
import grove_i2c_adc
import Adafruit_BBIO.GPIO as GPIO

BUZZER = "P9_22"            # GPIO P9_22
GPIO.setup(BUZZER, GPIO.OUT)

# The threshold to turn the buzzer on 28 Celsius
THRESHOLD_TEMPERATURE = 28

adc = grove_i2c_adc.I2cAdc()

#   The argument in the read_temperature() method defines which Grove board(Grove Temperature Sensor) version you have connected.
#   Defaults to 'v1.2'. eg.
#       temp = read_temperature('v1.0')          # B value = 3975
#       temp = read_temperature('v1.1')          # B value = 4250
#       temp = read_temperature('v1.2')          # B value = 4250
def read_temperature(model = 'v1.2'):
"Read temperature values in Celsius from Grove Temperature Sensor"
    # each of the sensor revisions use different thermistors, each with their own B value constant
if model == 'v1.2':
bValue = 4250  # sensor v1.2 uses thermistor ??? (assuming NCP18WF104F03RC until SeeedStudio clarifies)
elif model == 'v1.1':
bValue = 4250  # sensor v1.1 uses thermistor NCP18WF104F03RC
else:
bValue = 3975  # sensor v1.0 uses thermistor TTC3A103*39H

total_value = 0
for index in range(20):
sensor_value = adc.read_adc()
total_value += sensor_value
time.sleep(0.05)
average_value = float(total_value / 20)

    # Transform the ADC data into the data of Arduino platform.
sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)
resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp
temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)
return temperature

# Function: If the temperature sensor senses the temperature that is up to the threshold you set in the code, the buzzer is ringing for 1s.
# Hardware: Grove - I2C ADC, Grove - Temperature Sensor, Grove - Buzzer
# Note: Use P9_22(UART2_RXD) as GPIO.
# Connect the Grove Buzzer to UART Grove port of Beaglebone Green.
# Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green, and then connect the Grove - Temperature Sensor to Grove - I2C ADC.
if __name__ == '__main__':

while True:
try:
            # Read temperature values in Celsius from Grove Temperature Sensor
temperature = read_temperature('v1.2')

            # When the temperature reached predetermined value, buzzer is ringing.

print "temperature = ", temperature

except IOError:
print "Error"
```

**Passo5:** Conecte o Grove Temperature ao Grove I2C ADC, que está conectado ao soquete Grove I2C no BBG.

**Passo6:** Execute o código.
Você verá que o terminal exibe o valor da Temperatura a cada 2 segundos.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/res/Grove-Temperature_Sensor-Analog-v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recurso

---

* [Grove - Temperature Sensor v1.0 Arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/res/Grove-Temperature_Sensor-Analog-v1.0_Source_File.zip)

* [Código de demonstração no github](https://github.com/Seeed-Studio/Grove_Temperature_Sensor)

## Projetos

**The Environment Cube! Know the Land Beneath You using Sigfox**: Um cubo com todos os sensores necessários, adequado para uma ampla gama de aplicações como agricultura, monitoramento etc.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>