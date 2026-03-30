---
title: Dispositivo Sem Fio de Detecção de Quedas
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wireless-Fall-Detection-Device/
slug: /Wireless-Fall-Detection-Device
sku: 102991555
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wireless-Fall-Detection-Device/
---
# Dispositivo Sem Fio de Detecção de Quedas
## Prefácio
À medida que mais e mais pessoas se dedicam às suas carreiras, a economia nacional começa a decolar. No entanto, o envelhecimento da sociedade também se aprofundará. Sem o cuidado dos jovens, a vida dos idosos é sempre difícil e perigosa.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/fall.jpg)

Todos os anos, de um terço à metade de todas as pessoas com 65 anos ou mais sofrem uma queda. As quedas são a principal causa de lesões em idosos e a principal causa de morte acidental em pessoas com 75 anos ou mais. Para uma pessoa, sofrer uma queda sem ser notada pode ser duplamente perigoso. A possibilidade de uma lesão inicial pode agravar ainda mais as possíveis consequências se não for tratada em um curto período de tempo. As estatísticas mostram que as consequências mais graves não são o resultado direto de uma queda, mas sim o resultado de um atraso na assistência e no tratamento. As consequências de uma queda podem ser muito reduzidas se os socorristas forem alertados em tempo hábil.

Muitos idosos vivem sozinhos em apartamentos ou casas menores depois que seus filhos crescem e saem de casa. Após uma queda, não é incomum que o idoso não consiga se levantar sozinho ou pedir ajuda. Portanto, há necessidade de um sistema automático de detecção de quedas que possa solicitar ajuda mesmo que o paciente perca a consciência ou seja incapaz de se levantar após uma queda.

## Hardware

-  [Grove - 3-Axis Digital Accelerometer (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) 
-  [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) para completar este projeto. 

[Grove - 3-Axis Digital Accelerometer (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) pode ser usado como um sensor para detectar quedas, e a [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) pode ser usada para processar dados e enviar informações de socorro sem fio. Além disso, você precisa de um computador e WiFi.
​

### Diagrama de Fiação

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/wiring.jpg)
​

## [Software](https://wiki.seeedstudio.com/pt-br/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/#Software)
### 1. Instalar o Thonny
É fácil começar. O Thonny vem com o Python 3.7 embutido, portanto, é necessário apenas um instalador simples e você estará pronto para aprender a programar. Primeiro, clique em [Thonny.org](https://thonny.org/) para entrar na página de download. No canto superior direito da página, selecione o pacote de instalação do Thonny de acordo com seu sistema operacional para fazer o download. Dê um clique duplo no pacote de instalação que você baixou para abri-lo e instale-o seguindo as etapas.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny1.jpg)

Agora que você instalou o Thonny, abra o aplicativo. Você deverá ver a interface principal do Thonny:

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny2.jpg)
 A interface principal do Thonny é muito simples, dividida nas quatro partes a seguir:

1. Barra de ferramentas: ferramentas comuns básicas, como novo, abrir, salvar, executar o script atual, parar, etc.

2. Editor de código: a área central do Thonny, onde escreveremos código Python/MicroPython.  

3. Shell: podemos executar comandos aqui, e os resultados dos comandos serão exibidos imediatamente no Shell. Também podemos ver saídas do nosso código na janela do Shell.

4. Interpretador: aqui você pode selecionar o tipo de interpretador para compilar o programa. Clique em Python 3.7.9, encontre MicroPython (Raspberry pi Pico) no menu pop-up e clique em OK para alternar o interpretador para o interpretador Pico. Você também pode clicar em "Tools>>>Options>>>Interpreter" para selecionar.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny4.jpg)

### 2.Conectar a Wio RP2040 mini Dev Board

Use o cabo de dados para conectar a placa de desenvolvimento ao computador e, em seguida, clique no botão "Restart backend" na barra de ferramentas. Se a Wio RP2040 for conectada com sucesso ao computador, você verá as informações da versão do MicroPython e o nome do dispositivo no Shell.

 ![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny5.jpg)

### 3.Código

Para usar o 3-Axis Digital Accelerometer, precisamos importar o arquivo de biblioteca do sensor para a memória da Wio RP2040. Isso é feito da seguinte forma:
Copie o código a seguir, cole-o em uma nova janela do editor Thonny e, em seguida, salve-o na placa de desenvolvimento e renomeie-o para "ACC_ Adxl345.py "
```python
from machine import I2C
import time

ADXL345_DEVICE = (0x53)

""" ------- Register names ------- """
ADXL345_DEVID           =0x00
ADXL345_RESERVED1       =0x01
ADXL345_THRESH_TAP      =0x1d
ADXL345_OFSX            =0x1e
ADXL345_OFSY            =0x1f
ADXL345_OFSZ            =0x20
ADXL345_DUR             =0x21
ADXL345_LATENT          =0x22
ADXL345_WINDOW          =0x23
ADXL345_THRESH_ACT      =0x24
ADXL345_THRESH_INACT    =0x25
ADXL345_TIME_INACT      =0x26
ADXL345_ACT_INACT_CTL   =0x27
ADXL345_THRESH_FF       =0x28
ADXL345_TIME_FF         =0x29
ADXL345_TAP_AXES        =0x2a
ADXL345_ACT_TAP_STATUS  =0x2b
ADXL345_BW_RATE         =0x2c
ADXL345_POWER_CTL       =0x2d
ADXL345_INT_ENABLE      =0x2e
ADXL345_INT_MAP         =0x2f
ADXL345_INT_SOURCE      =0x30
ADXL345_DATA_FORMAT     =0x31
ADXL345_DATAX0          =0x32
ADXL345_DATAX1          =0x33
ADXL345_DATAY0          =0x34
ADXL345_DATAY1          =0x35
ADXL345_DATAZ0          =0x36
ADXL345_DATAZ1          =0x37
ADXL345_FIFO_CTL        =0x38
ADXL345_FIFO_STATUS     =0x39

ADXL345_BW_1600         =0xF                 #  1111
ADXL345_BW_800          =0xE                 #  1110
ADXL345_BW_400          =0xD                 #  1101
ADXL345_BW_200          =0xC                 #  1100
ADXL345_BW_100          =0xB                 #  1011
ADXL345_BW_50           =0xA                 #  1010
ADXL345_BW_25           =0x9                 #  1001
ADXL345_BW_12           =0x8                 #  1000
ADXL345_BW_6            =0x7                 #  0111
ADXL345_BW_3            =0x6                 #  0110

"""
Interrupt PINs
INT1: 0
INT2: 1
"""
ADXL345_INT1_PIN            =0x00
ADXL345_INT2_PIN            =0x01

"""Interrupt bit position"""
ADXL345_INT_DATA_READY_BIT  =0x07
ADXL345_INT_SINGLE_TAP_BIT  =0x06
ADXL345_INT_DOUBLE_TAP_BIT  =0x05
ADXL345_INT_ACTIVITY_BIT    =0x04
ADXL345_INT_INACTIVITY_BIT  =0x03
ADXL345_INT_FREE_FALL_BIT   =0x02
ADXL345_INT_WATERMARK_BIT   =0x01
ADXL345_INT_OVERRUNY_BIT    =0x00

ADXL345_DATA_READY          =0x07
ADXL345_SINGLE_TAP          =0x06
ADXL345_DOUBLE_TAP          =0x05
ADXL345_ACTIVITY            =0x04
ADXL345_INACTIVITY          =0x03
ADXL345_FREE_FALL           =0x02
ADXL345_WATERMARK           =0x01
ADXL345_OVERRUNY            =0x00

ADXL345_OK                  =1                   #  no error
ADXL345_ERROR               =0                   #  indicates error is predent

ADXL345_NO_ERROR            =0                   #  initial state
ADXL345_READ_ERROR          =1                   #  problem reading accel
ADXL345_BAD_ARG             =2                   #  bad method argument


class AccelerationAdxl345(object):

    def __init__(self, i2c, addr=ADXL345_DEVICE, drdy=None):
        self.i2c_device = i2c
        time.sleep(0.1)
        #self.rgbMatrixData = [0xFF]*64

    def read(self, reg_base, reg, buf):
        self.write(reg)
        time.sleep(.001)
        self.i2c_device.readfrom_into(59,buf)

    def write(self, buf=None):
        if buf is not None:
            self.i2c_device.writeto(ADXL345_DEVICE, buf)
        # i2c_device.writeto(0x58, bytearray([3,100,100,16,39]))

    def writeTo(self,address, val):
        dta_send = bytearray([address, val])
        self.write(dta_send)

    def readFrom(self, address, num):
        data_0 = address & 0xff
        dta_send = bytearray([data_0])
        self.write(dta_send)
        time.sleep(.001)
        result=self.i2c_device.readfrom(ADXL345_DEVICE, num)
        return result

    def setRegisterBit(self, regAdress,  bitPos,  state):  
        bytes=self.readFrom(regAdress, 1)
        for _b in bytes:
            value = int(_b)
        if (state):
            value |= (1 << bitPos)                 
        else:
            value &= ~(1 << bitPos)                   
        self.writeTo(regAdress, value)

    def acc_adxl345_init(self):
        #Turning on the ADXL345
        self.writeTo(ADXL345_POWER_CTL, 0)
        self.writeTo(ADXL345_POWER_CTL, 16)
        self.writeTo(ADXL345_POWER_CTL, 8)

        self.writeTo(ADXL345_THRESH_ACT, 75)
        self.writeTo(ADXL345_THRESH_INACT, 75)
        self.writeTo(ADXL345_TIME_INACT, 10)

        #look of activity movement on this axes - 1 == on; 0 == off
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 6, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 5, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 4, 1)

        #look of inactivity movement on this axes - 1 == on; 0 == off
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 2, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 1, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 0, 1)

        self.setRegisterBit(ADXL345_TAP_AXES, 2, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 1, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 0, 0)

        #set values for what is a tap, and what is a double tap (0-255)
        #setTapThreshold(50); # 62.5mg per increment
        self.writeTo(ADXL345_THRESH_TAP, 50)

        self.writeTo(ADXL345_DUR, 15)

        self.writeTo(ADXL345_LATENT, 80)

        #setDoubleTapWindow(200); # 1.25ms per increment
        self.writeTo(ADXL345_WINDOW, 200)

        #set values for what is considered freefall (0-255)

        self.writeTo(ADXL345_THRESH_FF, 7)

        self.writeTo(ADXL345_TIME_FF, 45)
        #setting all interrupts to take place on int pin 1
        #I had issues with int pin 2, was unable to reset it

        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_SINGLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_DOUBLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_FREE_FALL_BIT,    ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_ACTIVITY_BIT,     ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_INACTIVITY_BIT,   ADXL345_INT1_PIN)

        #register interrupt actions - 1 == on; 0 == off
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_SINGLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_DOUBLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_FREE_FALL_BIT,  1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_ACTIVITY_BIT,   1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_INACTIVITY_BIT, 1)

    def acc_adxl345_read_xyz(self):
        ADXL345_TO_READ = (6)
        _buff = self.readFrom(ADXL345_DATAX0, ADXL345_TO_READ) #read the acceleration data from the ADXL345
        if _buff[1] <= 0:
            x=_buff[0]
        else:
            x=(_buff[0]-255)

        if _buff[3] <= 0:
            y=_buff[2]
        else:
            y=(_buff[2]-255)

        if _buff[5] <= 0:
            z=_buff[4]
        else:
            z=(_buff[4]-255)

        #x = int(((_buff[1]) << 8) | _buff[0]) 
        #y = int(((_buff[3]) << 8) | _buff[2]) 
        #z = int(((_buff[5]) << 8) | _buff[4]) 

        #print("%d, %d, %d\r\n", x, y, z) 
        return [x,y,z]

    def acc_adxl345_read_acc(self):
        __Gains = [0.00376390, 0.00376009, 0.00389265]
        xyz=self.acc_adxl345_read_xyz()

        ax = xyz[0] * __Gains[0]
        ay = xyz[1] * __Gains[1]
        az = xyz[2] * __Gains[2]
        return [ax,ay,az]

    def get_acc_adxl345_property(self,xyz):
        axyz=self.acc_adxl345_read_acc()
        if(xyz == 0):
            return axyz[0]
        if(xyz == 1):
            return axyz[1]
        if(xyz == 2):
            return axyz[2]

"""
acceleration = AccelerationAdxl345()
acceleration.acc_adxl345_init()
acceleration.get_acc_adxl345_property(0)
acceleration.get_acc_adxl345_property(1)
acceleration.get_acc_adxl345_property(2)
"""


```


Em seguida, crie uma nova janela de programa para escrever o seguinte código.
```python
import network
import mqtt
from Acc_Adxl345 import AccelerationAdxl345
from machine import Pin,I2C
from time import sleep
i2c = I2C(0,sda = Pin(4),scl= Pin(5))
ax = AccelerationAdxl345(i2c)
ax.acc_adxl345_init()

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)
print('network information:', N1.ifconfig())
led = Pin(13, Pin.OUT)
button = Pin(12,Pin.IN,Pin.PULL_UP)
led.value(1)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio_RP2040'
TOPIC = 'Security_status'

def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))

cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()
cl.set_callback(mqtt_callback)

val_last = 1
print("ready")
cl.publish(TOPIC,"ready")

while True:
    a = ax.acc_adxl345_read_acc()
    b = ax.acc_adxl345_read_acc()
    for i in range(0,3):
        a[0] = a[i] * a[i]
        b[0] = b[i] * b[i]
    if a[0] - b[0] > 0.4 or b[0] - a[0] > 0.4:
        cl.publish(TOPIC,"help!")
```
**Observe que na linha 12 do programa, altere para o nome e senha corretos da sua rede WiFi.**
**​**

### 4.Configurando o cliente MQTT
MQTT é um protocolo de transporte de mensagens Client Server do tipo publicar/assinar. O cliente pode funcionar como publicador ou assinante, ou ambos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt1.jpg)

O publicador pode criar um tópico com mensagens anexadas a esse tópico. Por exemplo, posso criar um novo tópico "Today's Weather" e o conteúdo da mensagem é "25 degrees Celsius", e então enviar a mensagem para o servidor. Após receber a mensagem do tópico, o servidor distribui as informações para quaisquer clientes que tenham assinado esse tópico. Ou seja, o assinante receberá a mensagem de "25 degrees Celsius" somente se ele assinar o tópico "Today's Weather". Se o assinante não assinar o tópico "Today's Weather", não importa qual mensagem o publicador envie, o assinante não receberá a mensagem.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt2.jpg)



Baixe o software de servidor MQTTX e instale-o no computador e, em seguida, configure o servidor MQTT.

---

Usaremos o servidor gratuito "mqtt.p2hp.com" neste projeto. **Servidor online**

- Endereço: mqtt.p2hp.com
- Portas: 1883 (TCP), 8083 (WebSocket)
- Tipo: EMQ
- Compatível com MQTT V3.1.1/V5.0

---

Entre no software MQTTX para criar uma nova conexão, preencha o nome, servidor, porta, tópico e depois clique em "Connect" para se conectar ao servidor.
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt3.jpg)

Depois que a conexão for bem-sucedida, aparecerá um pop-up no canto superior direito do software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt4.jpg)

Em seguida, defina o tópico e a mensagem abaixo. 

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt6.jpg)

Quando os dados forem recebidos, o número de mensagens será exibido na parte superior. Se você não vir a mensagem, clique no tópico assinado.
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt7.jpg)

Aqui, a implantação do cliente MQTT está concluída. Vamos voltar ao editor Thorny para executar o código e, em seguida, deixar cair o acelerômetro digital de 3 eixos de um lugar alto para observar se o cliente mqtt recebeu a mensagem.

<iframe width="560" height="315" src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/show.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt8.jpg)

## Instalação e teste

Se você receber a mensagem com sucesso, parabéns, você concluiu a maior parte do trabalho. Em seguida, você só precisa conectar a bateria à placa de desenvolvimento e fixar o dispositivo em um pedaço de papelão de 5cm * 5cm.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/sample.jpg)

Por fim, coloque-o em um bolso de tecido. Este simples dispositivo de detecção de quedas está completo! Até agora, este projeto é apenas um protótipo experimental simples. Pode haver alguns falsos toques na aplicação prática. Você também pode me enviar feedback e vamos otimizar este projeto juntos.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/device.jpg)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie a questão para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
