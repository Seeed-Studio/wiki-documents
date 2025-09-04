---
title: Usar Socket para conectarse al foro
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Use_Socket_to_connect_to_the_forum/
slug: /es/Use_Socket_to_connect_to_the_forum
last_update:
  date: 01/11/2022
  author: gunengyu
---
Socket es casi la base de toda la comunicación de red. En este proyecto, usaremos Socket para conectarnos a un servidor designado para obtener su información desde Internet. Puedes buscar muchos servidores con protocolo telnet en Internet. Al conectarte a estos servidores, puedes navegar por la web y foros, ¡e incluso leer animaciones de caracteres en la terminal!


Nos conectaremos al foro "freechess.org" para obtener información en la terminal en este ejemplo.
Ingresa el siguiente código en el editor de código:
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
**Presta atención a reemplazar con tu propio nombre de WiFi y contraseña en la línea 17, luego ejecuta el programa y obtén el resultado en la ventana Shell.**
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_20.png)
También puedes encontrar otros servidores que soporten el protocolo telnet en Internet, y luego llenar la dirección del servidor y el puerto como se muestra. ¡Ahora, puedes usar la terminal para visitar estos sitios web!
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_21.png)
## 

## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>