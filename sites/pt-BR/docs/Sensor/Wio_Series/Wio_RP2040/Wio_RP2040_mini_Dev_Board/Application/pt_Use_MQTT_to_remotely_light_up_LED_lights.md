---
title: Use MQTT para acender remotamente luzes de LED
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Use_MQTT_to_remotely_light_up_LED_lights/
slug: /Use_MQTT_to_remotely_light_up_LED_lights
sku: 102991555
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Use_MQTT_to_remotely_light_up_LED_lights/
---

MQTT é um protocolo de transporte de mensagens Client Server baseado em publicação/assinatura. O cliente pode funcionar como publicador, assinante ou ambos.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_10.png)
O 
publicador pode criar um tópico com mensagens anexadas ao tópico. Por exemplo, posso criar um novo tópico "Clima de hoje" e o conteúdo da mensagem é "25 graus Celsius", e então enviar a mensagem para o servidor. Depois de receber a mensagem do tópico, o publicador distribui as informações para quaisquer clientes que tenham assinado esse tópico. Ou seja, o assinante receberá a mensagem de "25 graus Celsius" somente se ele assinar o tópico "Clima de hoje". Se o assinante não assinar o tópico "Clima de hoje", não importa qual mensagem o publicador envie, o assinante não receberá a mensagem.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_11.png)
### 1. Configurar o servidor MQTT
Baixe o software de servidor MQTTX e instale‑o no computador e, em seguida, configure o servidor MQTT.

---

Usaremos o servidor gratuito "mqtt.p2hp.com" neste projeto.
**Servidor online** 

- Endereço: mqtt.p2hp.com
- Portas: 1883 (TCP), 8083 (WebSocket)
- Tipo: EMQ
- Compatível com MQTT V3.1.1/V5.0

---

Entre no software MQTTX para criar uma nova conexão, preencha o nome, servidor, porta, tópico e então clique em "Connect" para conectar ao servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

Após a conexão ser bem‑sucedida, haverá um pop‑up no canto superior direito do software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

Em seguida, defina o tópico e a mensagem abaixo. Neste projeto, usamos mensagens MQTT para controlar o ligar e desligar do LED na placa de controle principal, portanto, preencha o tópico ("LED") e o conteúdo da mensagem ("on") abaixo.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_14.png)
### 2. Código
Insira o seguinte código no editor de código:
```python
import network
import mqtt
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)

led = Pin(13, Pin.OUT)
led.value(0)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio RP2040_Dev_board'
TOPIC = 'LED'

def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    if(topic[1] == "off"):
        led.value(0)
    if(topic[1] == "on"):
        led.value(1)

cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()


cl.publish("webscket_test","start")
cl.subscribe(TOPIC)
cl.set_callback(mqtt_callback)
print('ok')

while True:
    cl.wait_msg()
    sleep(0.1)
```
**Preste atenção para preencher o nome e a senha do seu WiFi na linha 8 do código**, e depois execute o programa. Aguarde o aviso "ok" na janela Shell, o que significa que a conexão foi bem‑sucedida. Nesse momento você pode enviar informações no MQTTX para controle.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_15.png)

Preencha "LED" e "on" no canto inferior direito do software e clique no ícone de envio. Nesse momento, o LED azul da placa de controle principal deverá acender. Você também pode apagar o LED enviando "off".

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_16.png)
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_17.png)

## Suporte Técnico & Discussão de Produtos
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


