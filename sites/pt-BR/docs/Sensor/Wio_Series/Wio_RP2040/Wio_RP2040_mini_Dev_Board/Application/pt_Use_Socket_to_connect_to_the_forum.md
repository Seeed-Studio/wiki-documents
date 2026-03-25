---
title: Use Socket to connect to the forum
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Use_Socket_to_connect_to_the_forum/
slug: /Use_Socket_to_connect_to_the_forum
sku: 102991555
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Use_Socket_to_connect_to_the_forum/
---
Socket é quase a base de toda a comunicação de rede. Neste projeto, usaremos Socket para conectar a um servidor designado para obter suas informações da Internet. Você pode pesquisar muitos servidores com protocolo telnet na Internet. Ao se conectar a esses servidores, você pode navegar na web e em fóruns, e até mesmo ler animações de caracteres no terminal!


Neste exemplo, vamos nos conectar ao fórum "freechess.org" para obter informações no terminal.
Digite o seguinte código no editor de código:
```python
import network
import usocket
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)

print("API list:")
dir(N1)

print("wifi list:")
lis = N1.scan()
for q in lis:
    print(q)

N1.connect("CHCK","depot0510")
if N1.isconnected():
    print("    ip               gateway           netmask            MAC            ssid")
    print(N1.ifconfig())
    addr_info = usocket.getaddrinfo('freechess.org',5000)
    print(addr_info)
    addr = addr_info[0][-1]
    print(addr)
    s=usocket.socket()
   # addr=('171.160.169.200',23)
    s.connect(addr)
   # s.send('Hello!')
while True:
    data = s.recv(500)
    print(str(data, 'utf8'), end = '')
```
**Preste atenção em substituir pelo seu próprio nome e senha de WiFi na linha 17, depois execute o programa e obtenha o resultado na janela Shell.**
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_20.png)
Você também pode encontrar outros servidores que suportam o protocolo telnet na Internet e, em seguida, preencher o endereço e a porta do servidor como mostrado. Agora você pode usar o terminal para visitar esses sites!
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_21.png)
## 

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
