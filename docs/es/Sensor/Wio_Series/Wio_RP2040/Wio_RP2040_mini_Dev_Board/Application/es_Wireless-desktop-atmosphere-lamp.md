---
title: Lámpara de ambiente inalámbrica para escritorio
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wireless-desktop-atmosphere-lamp/
slug: /es/Wireless-desktop-atmosphere-lamp
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Lámpara de ambiente inalámbrica para escritorio

Mantener un estado de ánimo saludable en un lugar de trabajo ocupado es muy importante, y las personas comunes comprarán una maceta de cactus para poner en su escritorio para decoración y relajación. Como ingenieros, también necesitamos elementos con la misma función, y sería lo más maravilloso hacer un pequeño bonsái luminoso por nosotros mismos. En este proyecto, haremos una luz ambiental inalámbrica iluminada para escritorio. Podemos enviar comandos de forma inalámbrica para controlarla y que se ilumine con diferentes colores para coincidir con nuestros diferentes estados de ánimo, ¡así que veamos cómo hacerlo!

<div align="center">
  <iframe width={560} height={315} src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/display.mp4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
</div>


## Hardware

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
- [WS2812](https://www.seeedstudio.com/Digital-Full-Color-LED-Strip-with-APP-p-4780.html)
- Cable de datos Type-C
- PC
- WiFi

### Diagrama de Conexiones

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/wiring.jpg)

## Software

### 1. Instalar Thonny​

Fácil de comenzar. Thonny viene con Python 3.7 integrado, por lo que solo se necesita un instalador simple y estás listo para aprender a programar. Primero, haz clic en [Thonny.org](https://thonny.org/) para ingresar a la página de descarga. En la esquina superior derecha de la página, selecciona el paquete de instalación de Thonny según tu sistema operativo para descargarlo. Haz doble clic en el paquete de instalación que descargaste para abrirlo, e instálalo siguiendo los pasos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny1.jpg)

Ahora que tienes Thonny instalado, abre la aplicación. Deberías ver la interfaz principal de Thonny:

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny2.jpg)

1. Barra de herramientas: herramientas básicas comunes, como nuevo, abrir, guardar, ejecutar el script actual, detener, etc.

2. Editor de código: el área central de Thonny, donde escribiremos código Python/MicroPython.

3. Shell: Podemos ejecutar comandos aquí, y los resultados de los comandos se mostrarán en el Shell inmediatamente. También podemos ver las salidas de nuestro código en la ventana del Shell.

4. Intérprete: Aquí puedes seleccionar el tipo de intérprete para compilar el programa. Haz clic en Python 3.7.9, encuentra MicroPython (Raspberry pi Pico) en el menú emergente, y haz clic en OK para cambiar el intérprete al intérprete de Pico. También puedes hacer clic en "Tools>>>Options>>>Interpreter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny4.jpg)

### 2.Conectar Wio RP2040 mini Dev Board

Usa el cable de datos para conectar la placa de desarrollo a la computadora, y luego haz clic en el botón "Restart backend" en la barra de herramientas. Si Wio RP2040 se conecta exitosamente a la computadora, verás la información de la versión de MicroPython y el nombre del dispositivo en el Shell.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny5.jpg)

### 3.Código

Para poder llamar al LED RGB WS2812B en MicroPython necesitamos importar el archivo de biblioteca de este WS2812B en la memoria del Wio RP2040.
Esto se hace de la siguiente manera: Copia el siguiente código, pégalo en una nueva ventana del editor de thonny, luego guárdalo en la placa de desarrollo y renómbralo como "ws2812.py"

```python
import array, time
from machine import Pin
import rp2

# Configure the number of WS2812 LEDs.
# brightness = 0.2

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True,pull_thresh=24)

def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1) .side(0) [T3 - 1]
    jmp(not_x, "do_zero") .side(1) [T1 - 1]
    jmp("bitloop") .side(1) [T2 - 1]
    label("do_zero")
    nop() .side(0) [T2 - 1]
    wrap()
class WS2812():        
    def __init__(self, pin_num, led_count, brightness = 0.5):
        self.Pin = Pin
        self.led_count = led_count
        self.brightness = brightness
        self.sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(pin_num))
        self.sm.active(1)
        self.ar = array.array("I", [0 for _ in range(led_count)])
        
    def pixels_show(self):
        dimmer_ar = array.array("I", [0 for _ in range(self.led_count)])
        for i,c in enumerate(self.ar):
            r = int(((c >> 8) & 0xFF) * self.brightness)
            g = int(((c >> 16) & 0xFF) * self.brightness)
            b = int((c & 0xFF) * self.brightness)
            dimmer_ar[i] = (g<<16) + (r<<8) + b
        self.sm.put(dimmer_ar, 8)
        time.sleep_ms(10)

    def pixels_set(self, i, color):
        self.ar[i] = (color[1]<<16) + (color[0]<<8) + color[2]

    def pixels_fill(self, color):
        for i in range(len(self.ar)):
            self.pixels_set(i, color)

    def color_chase(self,color, wait):
        for i in range(self.led_count):
            self.pixels_set(i, color)
            time.sleep(wait)
            self.pixels_show()
        time.sleep(0.2)
    def wheel(self, pos):
    # Input a value 0 to 255 to get a color value.
    # The colours are a transition r - g - b - back to r.
        if pos < 0 or pos > 255:
            return (0, 0, 0)
        if pos < 85:
            return (255 - pos * 3, pos * 3, 0)
        if pos < 170:
            pos -= 85
            return (0, 255 - pos * 3, pos * 3)
        pos -= 170
        return (pos * 3, 0, 255 - pos * 3)


    def rainbow_cycle(self, wait):
        for j in range(255):
            for i in range(self.led_count):
                rc_index = (i * 256 // self.led_count) + j
                self.pixels_set(i, self.wheel(rc_index & 255))
            self.pixels_show()
            time.sleep(wait)


```

Luego crea una nueva ventana de programa para escribir el siguiente código.
```python
import network
import mqtt
import utime
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep
from ws2812 import WS2812

BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
led = WS2812(13,10)#WS2812(pin_num,led_count)

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)
 
SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio RP2040_Dev_board'
TOPIC = 'RGB_LED'
 
def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    if(topic[1] == "RED"):
        print('RED')
        led.pixels_fill(RED)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "GREEN"):
        print('GREEN')
        led.pixels_fill(GREEN)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "YELLOW"):
        print('YELLOW')
        led.pixels_fill(YELLOW)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "CYAN"):
        print('CYAN')
        led.pixels_fill(CYAN)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "BLUE"):
        print('BLUE')
        led.pixels_fill(BLUE)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "PURPLE"):
        print('PURPLE')
        led.pixels_fill(PURPLE)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "WHITE"):
        print('WHITE')
        led.pixels_fill(WHITE)
        led.pixels_show()
        utime.sleep(0.2)
 
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()
 
 
cl.publish(TOPIC,"start")
cl.subscribe(TOPIC)
cl.set_callback(mqtt_callback)
print('ok')

led.pixels_fill(RED)
led.pixels_show()
utime.sleep(0.2)
while True:
    cl.wait_msg()
    sleep(0.1)
```

**Nota que en la línea 20 del programa, cambia tu nombre y contraseña de WiFi correctos.**

### 4.Configuración del cliente MQTT

MQTT es un protocolo de transporte de mensajería de publicación/suscripción Cliente-Servidor. El cliente puede funcionar como publicador o suscriptor o ambos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt1.jpg)

El publicador puede crear un tema con mensajes adjuntos al tema. Por ejemplo, puedo crear un nuevo tema "El Clima de Hoy" y el contenido del mensaje es "25 grados Celsius", y luego enviar el mensaje al Servidor. Después de recibir el mensaje del tema, el publicador distribuye la información a cualquier cliente que se haya suscrito a ese tema. Es decir, el suscriptor recibirá el mensaje de "25 grados Celsius" solo si se suscribe al tema "El Clima de Hoy". Si el suscriptor no se suscribe al tema de "El Clima de Hoy", sin importar qué mensaje envíe el publicador, el suscriptor no recibirá el mensaje.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt2.jpg)

Descarga el software del servidor MQTTX e instálalo en la computadora, y luego configura el servidor MQTT.

---

Usaremos el servidor gratuito de "mqtt.p2hp.com" en este proyecto. **Servidor en línea**

- Dirección: mqtt.p2hp.com
- Puertos: 1883 (TCP), 8083 (WebSocket)
- Tipo: EMQ
- Compatible con MQTT V3.1.1/V5.0

---

Ingresa al software MQTTX para crear una nueva conexión, llena el nombre, servidor, puerto, tema, y luego haz clic en "Conectar" para conectarte al servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt3.jpg)

Después de que la conexión sea exitosa, habrá una ventana emergente en la esquina superior derecha del software.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt4.jpg)

Luego configura el tema y mensaje abajo.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt6.jpg)

Cuando se reciben datos, el número de mensajes se muestra en la parte superior. Si no ves el mensaje, haz clic en el tema de suscripción.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt7.jpg)

Aquí, se completa la implementación del cliente MQTT. A continuación, regresa al editor Thonny y ejecuta el código. Cuando diga "ok" y el WS2812B conectado se encienda en rojo, el programa se ejecuta exitosamente.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt8.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/led.jpg)

## Apariencia

Para la parte exterior usamos tablero acrílico + tablero de madera para hacer, puedes necesitar una máquina de grabado láser o sierra.

Puedes simplemente usar mi diseño terminado para la base y panel y cortarlo con un grabador láser.

**[panel.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/panel.zip)**

**[base.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/base.zip)**

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img1.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img2.jpg)

Luego se obtuvieron las siguientes partes.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img3.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img4.jpg)

A continuación, ensambla la parte de la base

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img6.jpg)

Luego pega el WS2812B en la parte

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img7.jpg)

Depura el programa y observa si el hardware está funcionando correctamente

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img8.jpg)

Si todo está hecho, puedes usar pegamento termofusible para pegar los tableros restantes juntos

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img9.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img10.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img11.jpg)

¡Finalmente, enviamos diferentes comandos en MQTTX para cambiar su color de forma inalámbrica!

---

**Tema:** RGB_LED

**msg:** RED,BLACK,YELLOW,GREEN,CYAN,BLUE,PURPLE,WHITE

---

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt9.jpg)

Por supuesto, también puedes editar el código para probar algunos efectos de iluminación diferentes. ¡Comparte tu trabajo conmigo!

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img12.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img13.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img14.jpg)

## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

