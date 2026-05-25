---
description: Grove Shield / Grove Starter Kit para Raspberry Pi Pico
title: Grove Basic Kit para Raspberry Pi Pico
keywords:
  - Pi_Pico
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Starter-Kit-for-Raspberry-Pi-Pico
sku: 102110537, 110061282, 102110545, 103100142, 110061283
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Starter-Kit-for-Raspberry-Pi-Pico/
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Pico_hardware.png)

O Raspberry Pi Pico é uma nova e popular placa de microcontrolador de baixo custo e alto desempenho, então como integrar o sensor Grove a ela? O Grove Shield resolveu perfeitamente esse problema.

O Grove Shield for Pi Pico v1.0 é um shield plug-and-play para Raspberry Pi Pico que integra vários tipos de conectores Grove, incluindo 2*I2C, 3*Analógico, 2*UART, 3*portas Digitais, interface de depuração SWD e pino SPI, chave de alimentação selecionável 3,3 V/5 V. Ele permite construir protótipos e projetos de forma fácil e rápida, sem fio jumper e protoboard, para que você possa explorar possibilidades infinitas com o Pico. A placa shield é uma placa de expansão empilhável que atua como uma ponte entre o Pi Pico e o sistema Grove da Seeed.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Especificações

| Parâmetro             | Valor/Faixa  |
|-----------------------|--------------|
| Tensão de operação    | 3.3/5V       |
| Temperatura de operação | -25℃ a +85℃ |
| Portas analógicas     | 3            |
| Portas digitais       | 3            |
| Portas UART           | 2            |
| Portas I2C            | 2            |
| Tamanho               | 56mm x56mm   |

## Placas Compatíveis

O Base Shield foi testado e é totalmente compatível com o [Pi Pico](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html).

## Visão Geral do Hardware

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareoverview.png)

- **1-Portas analógicas**: inclui 3 portas analógicas, A0, A1, A2.
- **2-Portas digitais**: inclui 3 portas digitais, D16, D18, D20.
- **3-Porta UART**: 2 portas UART.
- **4-Portas I2C**: 2 portas I2C.
- **5-Chave de alimentação**: chave de alimentação selecionável 5V/3.3V.
- **6-Porta SPI**: 1 porta spi0.

- **Dimensões**: 56mm * 56mm  

## Primeiros Passos

### Projeto 1: Sons Diferentes de um Buzzer

#### Materiais Necessários

**Passo 1.** Prepare os seguintes itens:

| Pi Pico | Grove Shield for Pi Pico | Grove - Buzzer | Grove - Rotary Angle Sensor |
|---------|--------------------------|----------------|-----------------------------|
| ![Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg) | ![Grove Shield for Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png) | ![Grove Buzzer](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png) | ![Grove Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png) |
| [Compre AGORA](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html) | [Compre AGORA](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html) | [Compre AGORA](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) | [Compre AGORA](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html) |

**Passo 2.** Conecte o Grove Buzzer à porta A1 do Grove Shield.

**Passo 3.** Conecte o Grove Rotary Angle Sensor à porta A0 do Grove Shield.

**Passo 4.** Conecte o Grove Shield ao Pi Pico.

**Passo 5.** Conecte o Pi Pico ao seu PC usando um cabo USB.

![Configuração de Hardware](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/hardwareconnection.jpg)

#### Configuração de Software

**Passo 1.** Baixe o Thonny IDE:

- [Windows](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.exe)
- [Mac](https://github.com/thonny/thonny/releases/download/v3.3.3/thonny-3.3.3.pkg)

**Para ambiente de desenvolvimento Linux**:

Você pode instalar o Thonny de diferentes maneiras, dependendo do seu sistema:

- **Pacote binário para PC (Thonny + Python)**:

  ```bash
  bash <(wget -O - https://thonny.org/installer-for-linux)
  ```

- **Usando pip**:

  ```bash
  pip3 install thonny
  ```

- **Para Debian, Raspbian, Ubuntu, Mint e distribuições semelhantes**:

  ```bash
  sudo apt install thonny
  ```

- **Para Fedora**:

  ```bash
  sudo dnf install thonny
  ```

**Passo 2.** Abra o Thonny e conecte seu computador ao Raspberry Pi Pico. No Thonny, vá ao menu **Run**, selecione **Select Interpreter** e escolha "**MicroPython (Raspberry Pi Pico)**" na lista. Em seguida, selecione a porta COM do seu Pi Pico.

**Nota**: Se você não vir "**MicroPython (Raspberry Pi Pico)**" na lista de interpretadores, certifique-se de que tem instalada a versão mais recente do Thonny.

![Seleção do Interpretador](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/interpreter.png)
![Seleção da Porta COM](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/comport.png)

**Passo 3.** Se o Raspberry Pi Pico estiver conectado e executando MicroPython, o Thonny deverá se conectar automaticamente ao REPL. Agora, copie o seguinte código para o Thonny IDE e pressione o botão verde **Run**.

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

Agora, gire o **Grove Rotary Angle Sensor** e você ouvirá sons diferentes do buzzer conforme ajustar o ângulo.

### Projeto 2: Detectando Temperatura e Umidade

<Tabs>
<TabItem  value="Old" label="Opção 1: DHT11 e SSD1315" default>

#### Materiais Necessários

**Passo 1.** Prepare os seguintes itens:

<div class="table-center">
 <table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Grove Shield for Pi Pico</th>
        <th>Grove OLED Display 0.96" (SSD1315)</th>
        <th>Grove Temperature & Humidity Sensor (DHT11)</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
    </tr>
    </table>
</div>

**Passo 2.** Conecte o Grove OLED Display 0.96" à porta I2C1 do Grove Shield.

**Passo 3.** Conecte o Grove Temperature Humidity Sensor (DHT11) à porta D18 do Grove Shield.

**Passo 4.** Conecte o Grove Shield ao Pi Pico.

**Passo 5.** Conecte o Pi Pico ao seu PC usando um cabo USB.

#### Configuração de Software

Consulte a seção de software do Demo 1.

1. Copie o seguinte código para o Thonny IDE:

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

2. Baixe os seguintes arquivos Python necessários para a sua máquina local:
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

3. Abra **dht11.py** no Thonny IDE, clique em `File -> Save As -> MicroPython device` e salve o arquivo com o nome **dht11.py** no seu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/saveas.png" style={{width:700, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/open.png" style={{width:700, height:'auto'}}/></div>

4. Repita o mesmo processo para salvar **ssd1306.py** no seu dispositivo MicroPython.

#### Executando o Projeto

Depois que ambos os arquivos forem salvos no seu dispositivo MicroPython, execute o código de demonstração pressionando o botão verde **Run** no Thonny.

Agora você deverá ver a temperatura e a umidade exibidas na tela OLED, semelhante à imagem abaixo:

![OLED Display Output](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/oled1.jpg)

</TabItem>
<TabItem value="New" label="Opção 2: DHT20 e LCD1602" default>

#### Materiais Necessários

**Passo 1.** Prepare os seguintes itens:

<div class="table-center">
 <table align="center" style={{width: 950, height: "auto", overflowX: 'scroll', textAlign: 'left',}}>
    <tr>
        <th>Pi Pico</th>
        <th>Grove Shield para Pi Pico</th>
        <th>Grove 16x2 LCD (Branco em Azul)</th>
        <th>Grove Sensor de Temperatura e Umidade V2.0 (DHT20)</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16x2-LCD-White-on-Blue.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
    </tr>
    </table>
</div>

**Passo 2.** Conecte o Grove 16x2 LCD (Branco em Azul) à porta I2C1 do Grove Shield.

**Passo 3.** Conecte o Grove Sensor de Temperatura e Umidade V2.0 (DHT20) à porta D18 do Grove Shield.

**Passo 4.** Conecte o Grove Shield ao Pi Pico.

**Passo 5.** Conecte o Pi Pico ao seu PC usando um cabo USB.

#### Configuração de Software

Consulte a seção de software do Demo 1.

1. Copie o código a seguir para o Thonny IDE:

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

2. Baixe os seguintes arquivos Python necessários para a sua máquina local:
   - [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py)
   - [lcd1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py)

3. Abra **DHT20.py** no Thonny IDE, clique em `File -> Save As -> MicroPython device` e salve o arquivo com o nome **DHT20.py** no seu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/saveas.png" style={{width:750, height:'auto'}}/></div>

<br></br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/open.png" style={{width:750, height:'auto'}}/></div>

4. Repita o mesmo processo para salvar **lcd1602.py** no seu dispositivo MicroPython.

#### Executando o Projeto

Depois que ambos os arquivos forem salvos no seu dispositivo MicroPython, execute o código de demonstração pressionando o botão verde **Run** no Thonny.

Agora você deverá ver a temperatura e a umidade exibidas na tela OLED, semelhante à imagem abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/oled_output.jpg" style={{width:750, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Projeto 3: Controlando LED e Relé

#### Materiais Necessários

- Passo 1. Prepare os itens abaixo:

| Pi Pico | Grove Shield para Pi Pico|  Grove-button |Grove-LED|Grove relay|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ledsocket.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Adquira agora](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- Passo 2. Conecte o Grove button ao pino digital 18 do Base Shield.
- Passo 3. Conecte o Grove LED à porta D16 do Base Shield.
- Passo 4. Conecte o Grove Relay à porta D20 do Base Shield.
- Passo 5. Conecte o Grove Shield para Pi Pico ao Pi Pico.
- Passo 6. Conecte o Pi Pico ao PC através de um cabo USB.

#### Software

Consulte a parte de software do demo1.

Copie o código abaixo para o Thonny IDE primeiro.

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

Agora clique no botão verde para executar o código de demonstração.

Em seguida, você pode pressionar o Grove button para controlar o LED e o relé abrindo e fechando.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo3.jpg)

### Projeto 4: Cores Piscando

#### Materiais Necessários

- Passo 1. Prepare os itens abaixo:

| Pi Pico | Grove Shield para Pi Pico|  RGB LED WS2813 mini |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/redrgb.png)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Adquira agora](https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html)|

- Passo 2. Conecte o RGB LED WS2813 mini à porta 18 do Base Shield.
- Passo 3. Conecte o Grove Shield para Pi Pico ao Pi Pico.
- Passo 4. Conecte o Pi Pico ao PC através de um cabo USB.

#### Software

Consulte a parte de software do demo1.

Copie o código abaixo para o Thonny IDE primeiro.

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

Em seguida, baixe o [ws2812.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/ws2812.py) para o seu computador local. Use o Thonny para abrir ws2812.py, clique em file->save as->MicroPython device.

Digite **ws2812.py** na coluna File name, clique em "ok" e então o arquivo será salvo em File->Open->MicroPython device.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813savelocal.png)

Depois de salvar os arquivos no seu dispositivo MicroPython, clique agora no botão verde para executar o código de demonstração.
Então você verá o mini LED RGB WS2813 piscar em belas cores como abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/ws2813mini.gif)

### Projeto 5: Detectando Som e Luz

#### Materiais Necessários

- Passo 1. Prepare os seguintes itens:

| Pi Pico | Grove Shield for Pi Pico| grove sound sensor |Grove light sensor|Grove-16x2 LCD|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[Adquira agora](https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html)|

- Passo 2. Conecte o Grove sound sensor ao pino analógico 0 do Base Shield.
- Passo 3. Conecte o Grove light à porta A1 do Base Shield.
- Passo 4. Conecte o Grove 16X2 lcd à porta I2C1 do Base Shield.
- Passo 5. Conecte o Grove Shield for Pi Pico ao Pi Pico.
- Passo 6. Conecte o Pi Pico ao PC por meio de um cabo USB.

#### Software

Por favor, consulte a parte de software do demo1.

Primeiro, copie o código abaixo para o Thonny IDE.

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

Em seguida, baixe o [LCD1602.py](https://files.seeedstudio.com/wiki/Grove-16x2_LCD--White_on_Blue/lcd1602.py) para o seu computador local. Use o Thonny para abrir LCD1602.py, clique em file->save as->MicroPython device.

Digite **LCD1602.py** na coluna File name, clique em "ok" e então o arquivo será salvo em File->Open->MicroPython device.

:::note
Neste exemplo, a versão do LCD1602 que estamos usando é uma versão com luz de fundo monocromática. Se você precisar controlar a versão com luz de fundo em cores completas do LCD1602, verifique as funções neste arquivo de biblioteca para aprender como usá-la.
:::

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/lcdlightsound.png)

Depois de salvar os arquivos no seu dispositivo MicroPython, clique agora no botão verde para executar o código de demonstração.
Então você poderá obter os dados do sensor de som e do sensor de luz como abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/demo5.jpg)

### Projeto 6: Detectando Movimento

#### Materiais Necessários

- Passo 1. Prepare os seguintes itens:

| Pi Pico | Grove Shield for Pi Pico| grove servo |Grove Mini Fan|Grove mini pir motion sensor|
|--------------|-------------|-----------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/picobaseshield.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/groveminifan.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/minipir.png)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)|[Adquira agora](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)|

- Passo 2. Conecte o Grove servo ao pino analógico 1 do Base Shield.
- Passo 3. Conecte o Grove Mini fan à porta D16 do Base Shield.
- Passo 4. Conecte o Grove Mini pir motion sensor à porta D18 do Base Shield.
- Passo 5. Conecte o Grove Shield for Pi Pico ao Pi Pico.
- Passo 6. Conecte o Pi Pico ao PC por meio de um cabo USB.

#### Software

Por favor, consulte a parte de software do demo1.

Primeiro, copie o código abaixo para o Thonny IDE.

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

Agora clique no botão verde para executar o código de demonstração.
Então você verá o Grove Mini Fan e o Grove servo funcionarem quando sua mão passar pelo sensor pir, como abaixo.

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/tutieshi_480x272_3s.gif)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Pico python SDK](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/pico_python_sdk.pdf)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Grove_shield_for_PI_PICOv1.0SCH.pdf)
- **[Eagle]** [PCB&SCH](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/res/Grove_Shield_for_Pi_Pico.zip)

## Recursos do Curso

<div align="center"><img width = "{400}" src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/book.png"/></div>

- **[ZIP]** [Beginners Guide of Raspberry Pi Pico Based on MicroPython](https://files.seeedstudio.com/Seeed_EDU/Course_documents/Beginner's-Guide-for-Raspberry-Pi-Pico.zip)
- **[ZIP]** [Codes](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Codes.rar)
- **[ZIP]** [Libraries](https:///files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Libraries.rar)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
