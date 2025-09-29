---
description: Grove - Bee Socket
title: Grove - Bee Socket
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Bee_Socket
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_01.jpg)

Grove - Bee Socket es un adaptador de las series Xbee que puede conectar módulos inalámbricos con Arduino, como WIFI Bee, RF Bee, Bluetooth Bee, etc. Es compatible con Arduino y más efectivo para realizar operaciones de punto a punto y redes de malla ejecutadas por módulos inalámbricos. El regulador CJT1117 garantiza un voltaje estable de 3.3V para Xbee. Los LEDs pueden mostrar claramente los modos de trabajo del grove.
<!-- Grove-Bee Socket tiene las mismas funciones que [XBee Shield](/es/XBee_Shield_V2.0). Grove-Bee Socket y Arduino se conectan por cables, y XB Shield es un adaptador estándar que se puede conectar a Arduino. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Bee-Socket-p-1449.html)


##  Características
---
*   Socket Bee estándar e interfaz Grove

*   Regulador de 3.3V integrado para alimentar tu XBee

*   Circuito de cambio de nivel

*   Botón de reinicio para módulos Bee

*   LEDs para operaciones Bee

##  Función de la Interfaz
---
![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_Interface.jpg)

**J1:** Interfaz Grove, utilizada para conectar a la interfaz UART de Arduino/Seeeduino.

**J2,J3:** Conexión de derivación para cada pin de Xbee.

**J4,J5:** Sockets Bee

**U1:** IC CJT1117, regulador lineal de baja caída. Utilizado para alimentar 3.3V para módulos XBee.

**U2,U3:** IC SN74LVC1G125, protege tu XBee de señales de 5V, convirtiéndolas a 3.3V.

**Indicador RSSI:** Indicador de intensidad de señal RX de XBee.

**LED PWR:** Indicador de alimentación.

**Indicador ASSOC:** Indicador de asociación Xbee.

**LED ON/SLEEP:** Indicador de estado del módulo XBee.

##  Uso
---
Usando el Grove - Bee Socket, es fácil controlar módulos Bee con Arduino/Seeeduino. Aquí tomamos el RF Bee como ejemplo, te diremos cómo usarlo.

*   Conecta el módulo XBee al Bee Socket.

*   Luego conecta Grove - Bee Socket a la interfaz UART de Arduino/Seeeduino usando un cable Grove. Y conecta tu Arduino/Seeeduino a la computadora a través de un cable USB para encenderlo.

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Grove-Bee_Socket.jpg)

*   Ahora puedes enviar algunos comandos AT simples para hacer configuraciones básicas para el RF Bee y enviar/recibir datos. Por supuesto, puedes actualizar el firmware sin cambiar la conexión del hardware.

Si necesitas más información sobre cómo comunicarte, por favor consulta las páginas WIKI de los módulos Bee relevantes.


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
[Archivo Eagle de Bee Socket](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>