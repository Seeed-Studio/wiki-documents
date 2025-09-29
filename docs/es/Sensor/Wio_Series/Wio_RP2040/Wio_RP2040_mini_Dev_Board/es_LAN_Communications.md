---
title: LAN_Communications
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/LAN_Communications/
slug: /es/LAN_Communications
last_update:
  date: 01/11/2022
  author: gunengyu
---

### 1. Configurar el Servidor LAN

Este proyecto requiere que el Servidor y la placa de control principal trabajen en la misma red de área local. El principio: Configurar una PC como servidor, conectar la placa de control principal al Servidor a través de la red de área local, y luego la PC y la placa se comunican a través de un puerto fijo.
Primero, descarga e instala el asistente de depuración de red (software asistente de depuración de red Net Assistant en este proyecto).
Si la instalación es exitosa, abre el software, selecciona "TCP Server" en la esquina superior izquierda para configurar el "Protocol", y luego configura la "Local host addr" y "Local host port" abajo. Si todo está hecho, haz clic en "Open" para ingresar al Servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png)
### 2. Depurar programa MicroPython
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
    s=usocket.socket()
    addr=('192.168.9.243',9999)
    s.connect(addr)
    s.send('Hello! Wio RP2040')
```
Por favor completa la línea 17 (el nombre y contraseña del WiFi) y la línea 22 (la dirección IP y número de puerto del servidor de la computadora). Luego ejecuta el programa, deberías ver el mensaje enviado por la placa de control principal en el registro de datos del asistente de depuración de red.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png)

---

Si quieres ejecutar otros códigos después de ejecutar un programa con funciones de red, por favor haz clic en el botón "RUN" en la placa de control principal para reiniciar. Después de reiniciar, la placa de control principal puede ejecutar otros programas.

---

## Soporte Técnico y Discusión del Producto
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