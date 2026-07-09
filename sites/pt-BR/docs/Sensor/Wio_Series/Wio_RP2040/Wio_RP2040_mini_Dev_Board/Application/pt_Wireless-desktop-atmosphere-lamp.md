---
title: Luminária de atmosfera de mesa sem fio
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wireless-desktop-atmosphere-lamp/
slug: /Wireless-desktop-atmosphere-lamp
sku: 102991555
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wireless-desktop-atmosphere-lamp/
---
# Luminária de atmosfera de mesa sem fio

Manter um humor saudável em um ambiente de trabalho agitado é muito importante, e pessoas comuns costumam comprar um vaso de cacto para colocar na mesa para decoração e relaxamento. Como engenheiros, também precisamos de itens com a mesma função, e seria a coisa mais incrível fazer um pequeno bonsai luminoso por conta própria. Neste projeto, faremos uma luz ambiente de mesa sem fio iluminada. Podemos enviar comandos sem fio para controlá-la para acender em cores diferentes para combinar com nossos diferentes humores, então vamos ver como fazer isso!

<div align="center">
  <iframe width={560} height={315} src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/display.mp4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
</div>


## Hardware

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
- [WS2812](https://www.seeedstudio.com/Digital-Full-Color-LED-Strip-with-APP-p-4780.html)
- Cabo de dados Type-C
- PC
- WiFi

### Diagrama de Fiação

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/wiring.jpg)

## Software

### 1. Instalar Thonny​

Fácil de começar. O Thonny vem com o Python 3.7 embutido, então apenas um instalador simples é necessário e você já estará pronto para aprender a programar. Primeiro, clique em [Thonny.org](https://thonny.org/) para entrar na página de download. No canto superior direito da página, selecione o pacote de instalação do Thonny de acordo com o seu sistema operacional para fazer o download. Dê um clique duplo no pacote de instalação que você baixou para abri-lo e instale-o seguindo os passos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny1.jpg)

Agora que você instalou o Thonny, abra o aplicativo. Você deverá ver a interface principal do Thonny:

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny2.jpg)

1. Barra de ferramentas: ferramentas básicas comuns, como novo, abrir, salvar, executar o script atual, parar, etc.

2. Editor de código: área central do Thonny, onde escreveremos código em Python/MicroPython.

3. Shell: Podemos executar comandos aqui, e os resultados dos comandos serão exibidos imediatamente no Shell. Também podemos ver as saídas do nosso código na janela Shell.

4. Interpretador: Aqui você pode selecionar o tipo de interpretador para compilar o programa. Clique em Python 3.7.9, encontre MicroPython (Raspberry pi Pico) no menu pop-up e clique em OK para mudar o interpretador para o interpretador Pico. Você também pode clicar em "Tools>>>Options>>>Interpreter" para selecionar.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny4.jpg)

### 2.Conectar Wio RP2040 mini Dev Board

Use o cabo de dados para conectar a placa de desenvolvimento ao computador e, em seguida, clique no botão "Restart backend" na barra de ferramentas. Se o Wio RP2040 for conectado com sucesso ao computador, você verá as informações da versão do MicroPython e o nome do dispositivo no Shell.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny5.jpg)

### 3.Código

Para chamar o LED RGB WS2812B no MicroPython, precisamos importar o arquivo de biblioteca deste WS2812B para a memória do Wio RP2040.
Isso é feito da seguinte forma: copie o código a seguir, cole-o em uma nova janela do editor Thonny e, em seguida, salve-o na placa de desenvolvimento e renomeie-o para "ws2812.py "

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
Em seguida, crie uma nova janela de programa para escrever o código a seguir.
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

**Observe que, na linha 20 do programa, altere o nome e a senha corretos do seu WiFi.**

### 4.Configurando o cliente MQTT

MQTT é um protocolo de transporte de mensagens Client Server de publicação/assinatura. O cliente pode funcionar como publicador ou assinante, ou ambos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt1.jpg)

O publicador pode criar um tópico com mensagens anexadas ao tópico. Por exemplo, posso criar um novo tópico "Today's Weather" e o conteúdo da mensagem é "25 degrees Celsius", e então enviar a mensagem para o servidor. Depois de receber a mensagem do tópico, o publicador distribui a informação para quaisquer clientes que tenham assinado esse tópico. Ou seja, o assinante receberá a mensagem "25 degrees Celsius" somente se ele assinar o tópico "Today's Weather". Se o assinante não assinar o tópico "Today's Weather", não importa qual mensagem o publicador envie, o assinante não receberá a mensagem.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt2.jpg)

Baixe o software de servidor MQTTX e instale-o no computador e, em seguida, configure o servidor MQTT.

---

Usaremos o servidor gratuito "mqtt.p2hp.com" neste projeto. **Servidor online**

- Endereço: mqtt.p2hp.com
- Portas: 1883 (TCP), 8083 (WebSocket)
- Tipo: EMQ
- Compatível com MQTT V3.1.1/V5.0

---

Entre no software MQTTX para criar uma nova conexão, preencha o nome, servidor, porta, tópico e clique em "Connect" para se conectar ao servidor. 

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt3.jpg)

Após a conexão ser bem-sucedida, haverá um pop-up no canto superior direito do software.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt4.jpg)

Em seguida, defina o tópico e a mensagem abaixo.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt6.jpg)

Quando os dados são recebidos, o número de mensagens é exibido na parte superior. Se você não vir a mensagem, clique no tópico de inscrição. 

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt7.jpg)

Aqui, a implantação do cliente MQTT está concluída. Em seguida, volte para o editor Thonny e execute o código. Quando aparecer "ok" e o WS2812B conectado acender em vermelho, o programa foi executado com sucesso.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt8.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/led.jpg)

## Aparência

Para a parte externa usamos placa de acrílico + placa de madeira para fazer, você pode precisar de uma máquina de gravação a laser ou serra.

Você pode simplesmente usar meu design finalizado para a base e o painel e cortá-lo com um gravador a laser.

**[panel.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/panel.zip)**

**[base.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/base.zip)**

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img1.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img2.jpg)

As seguintes partes foram então obtidas.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img3.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img4.jpg)

Em seguida, una as partes da base

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img6.jpg)

Depois cole o WS2812B na peça

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img7.jpg)

Depure o programa e observe se o hardware está funcionando corretamente

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img8.jpg)

Se tudo estiver pronto, você pode usar cola quente para colar as placas restantes

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img9.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img10.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img11.jpg)

Por fim, enviamos diferentes comandos no MQTTX para mudar sua cor sem fio!

---

**Topic:** RGB_LED

**msg:** RED,BLACK,YELLOW,GREEN,CYAN,BLUE,PURPLE,WHITE

---

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt9.jpg)

Claro, você também pode editar o código para tentar alguns efeitos de iluminação diferentes. Compartilhe seu trabalho comigo!

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img12.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img13.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img14.jpg)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

