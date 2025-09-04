---
title: Dispositivo Inalámbrico de Detección de Caídas
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wireless-Fall-Detection-Device/
slug: /es/Wireless-Fall-Detection-Device
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Dispositivo Inalámbrico de Detección de Caídas
## Prefacio
A medida que más y más personas trabajan duro en sus carreras, la economía nacional está comenzando a despegar. Sin embargo, el envejecimiento de la sociedad también se profundizará. Sin el cuidado de los jóvenes, la vida para los ancianos siempre es difícil y peligrosa.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/fall.jpg)

Cada año, entre un tercio y la mitad de todas las personas de 65 años o más experimentan una caída. Las caídas son la principal causa de lesiones en adultos mayores y la principal causa de muerte accidental en aquellos de 75 años o más. Para una persona experimentar una caída sin ser notada puede ser doblemente peligroso. La clara posibilidad de una lesión inicial puede exacerbar aún más las posibles consecuencias si no se trata en un corto período de tiempo. Las estadísticas muestran que las consecuencias más graves no son el resultado directo de una caída, sino más bien el resultado de un retraso en la asistencia y el tratamiento. Las consecuencias de una caída pueden reducirse considerablemente si los rescatistas son alertados de manera oportuna.

Muchos ancianos viven solos en apartamentos o casas más pequeñas después de que sus hijos han crecido y se han ido de casa. Después de una caída, no es raro que los ancianos no puedan levantarse por sí mismos o pedir ayuda. Por lo tanto, existe la necesidad de un sistema automático de detección de caídas que pueda pedir ayuda incluso si el paciente pierde la conciencia o no puede levantarse después de una caída.

## Hardware

-  [Grove - Acelerómetro Digital de 3 Ejes (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) 
-  [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) para completar este proyecto. 

[Grove - Acelerómetro Digital de 3 Ejes (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) puede usarse como sensor para detectar caídas, y [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) puede usarse para procesar datos y enviar información de socorro de forma inalámbrica. Además, necesitas una computadora y WiFi.
​

### Diagrama de Conexiones

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/wiring.jpg)
​

## [Software](https://wiki.seeedstudio.com/es/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/#software)
### 1. Instalar Thonny
Fácil de comenzar. Thonny viene con Python 3.7 integrado, por lo que solo se necesita un instalador simple y estás listo para aprender a programar. Primero, haz clic en [Thonny.org](https://thonny.org/) para ingresar a la página de descarga. En la esquina superior derecha de la página, selecciona el paquete de instalación de Thonny según tu sistema operativo para descargarlo. Haz doble clic en el paquete de instalación que descargaste para abrirlo, e instálalo siguiendo los pasos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny1.jpg)

Ahora que tienes Thonny instalado, abre la aplicación. Deberías ver la interfaz principal de Thonny:

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny2.jpg)
 La interfaz principal de Thonny es muy simple, dividida en las siguientes cuatro partes:

1. Barra de herramientas: herramientas básicas comunes, como nuevo, abrir, guardar, ejecutar el script actual, detener, etc.

2. Editor de código: el área central de Thonny, donde escribiremos código Python/MicroPython.  

3. Shell: Podemos ejecutar comandos aquí, y los resultados de los comandos se mostrarán en el Shell inmediatamente. También podemos ver las salidas de nuestro código en la ventana del Shell.

4. Intérprete: Aquí puedes seleccionar el tipo de intérprete para compilar el programa. Haz clic en Python 3.7.9, encuentra MicroPython (Raspberry pi Pico) en el menú emergente, y haz clic en OK para cambiar el intérprete al intérprete de Pico. También puedes hacer clic en "Tools>>>Options>>>Interpreter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny4.jpg)

### 2.Conectar Wio RP2040 mini Dev Board

Usa el cable de datos para conectar la placa de desarrollo a la computadora, y luego haz clic en el botón "Restart backend" en la barra de herramientas. Si Wio RP2040 se conecta exitosamente a la computadora, verás la información de la versión de MicroPython y el nombre del dispositivo en el Shell.

 ![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny5.jpg)

### 3.Código

Para usar el Acelerómetro Digital de 3 Ejes, necesitamos importar el archivo de biblioteca del sensor en la memoria de Wio RP2040. Esto se hace de la siguiente manera:
Copia el siguiente código, pégalo en una nueva ventana del editor de thonny, luego guárdalo en la placa de desarrollo y renómbralo como "ACC_ Adxl345.py "
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


Luego crea una nueva ventana de programa para escribir el siguiente código.
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

**Nota que en la línea 12 del programa, cambia tu nombre de WiFi y contraseña correctos.**
**​**

### 4.Configuración del cliente MQTT
MQTT es un protocolo de transporte de mensajería de publicación/suscripción Cliente-Servidor. El cliente puede funcionar como publicador o suscriptor o ambos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt1.jpg)

El publicador puede crear un tema con mensajes adjuntos al tema. Por ejemplo, puedo crear un nuevo tema "El Clima de Hoy" y el contenido del mensaje es "25 grados Celsius", y luego enviar el mensaje al Servidor. Después de recibir el mensaje del tema, el publicador distribuye la información a cualquier cliente que se haya suscrito a ese tema. Es decir, el suscriptor recibirá el mensaje de "25 grados Celsius" solo si se suscribe al tema "El Clima de Hoy". Si el suscriptor no se suscribe al tema de "El Clima de Hoy", sin importar qué mensaje envíe el publicador, el suscriptor no recibirá el mensaje.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt2.jpg)


Descarga el software del servidor MQTTX e instálalo en la computadora, y luego configura el servidor MQTT.

---

Usaremos el servidor gratuito de "mqtt.p2hp.com" en este proyecto. **Servidor en línea**

- Dirección: mqtt.p2hp.com
- Puertos: 1883 (TCP), 8083 (WebSocket)
- Tipo: EMQ
- Compatible con MQTT V3.1.1/V5.0

---

Ingresa al software MQTTX para crear una nueva conexión, completa el nombre, servidor, puerto, tema, y luego haz clic en "Conectar" para conectarte al servidor.
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt3.jpg)

Después de que la conexión sea exitosa, habrá una ventana emergente en la esquina superior derecha del software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt4.jpg)

Luego configura el tema y mensaje abajo.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt6.jpg)

Cuando se reciben datos, el número de mensajes se muestra en la parte superior. Si no ves el mensaje, haz clic en el tema de suscripción.
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt7.jpg)

Aquí, el despliegue del cliente MQTT está completado. Regresemos al editor Thorny para ejecutar el código, y luego deja caer el acelerómetro digital de 3 ejes desde un lugar alto para observar si el cliente mqtt ha recibido el mensaje.

<iframe width="560" height="315" src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/show.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt8.jpg)

## Instalación y pruebas

Si recibiste el mensaje exitosamente, felicidades, has completado la mayor parte del trabajo. A continuación, solo necesitas conectar la batería a la placa de desarrollo y fijar el dispositivo en un cartón de 5cm * 5cm.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/sample.jpg)

Finalmente, colócalo en un bolsillo de tela. ¡Este simple dispositivo de detección de caídas está completo! Hasta ahora, este proyecto es solo un prototipo experimental simple. Puede haber algunos toques accidentales en la aplicación práctica. También puedes darnos retroalimentación y optimizaremos este proyecto juntos.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/device.jpg)

## Soporte Técnico y Discusión de Productos
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
