---
description: Grove Breakout para LinkIt Smart 7688 Duo
title: Grove Breakout para LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Breakout_for_LinkIt_Smart_7688_Duo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg)

:::danger
Debido al cierre de MediaTek Labs, todos los enlaces relacionados se han vuelto inválidos. Si necesitas descargar archivos relevantes, por favor búscalos en el siguiente enlace: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

Grove Breakout para LinkIt Smart 7688 Duo es una placa de expansión de características con puerto grove integrado para la placa de desarrollo LinkIt Smart 7688 Duo[1]. Esta placa breakout ahorrará mucho trabajo para prototipos más rápidos, mediante el procedimiento de cableado simplificado, incluso un principiante que tenga poco conocimiento electrónico puede iniciar un proyecto rápidamente. Soporta buses serie como I2C, UART y proporciona acceso a los pines originales reservados del LinkItTM Smart 7688 Duo.

[1] LinkItTM Smart 7688 Duo es una placa de desarrollo abierta basada en la distribución Linux OpenWrt, MT7688 y ATmega32u4. La placa está diseñada especialmente para habilitar el prototipado de dispositivos IoT de Aplicaciones Ricas para Smart-Home.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html)

## Características
---
- Interfaz Grove, hace el cableado más fácil.
- Más puertos Grove, más expandible a módulos Grove ricos.
- Costo-efectivo.

:::tip
    <!-- Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/) -->
:::
## Ideas de aplicación
---
- Dispositivo IoT/Gateway.
- Robótica
- Dispositivos multimedia inteligentes
- Enseñanza y aprendizaje

## Especificación
---
- Voltaje de entrada:	5.0V (Con puerto de alimentación USB)
- Voltaje de operación:	3.3V
- Los pines de depuración se conectan con MT7688, otros pines se conectan con ATmega32U4.


## Descripción del Hardware
 ---
 ![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Grove_Breakout_for_LinkIt_Smart_7688_Duo_component_with_text_1200_s.jpg)

:::note
     Como necesitas conectar LinkIt Smart 7688 Duo en este breakout, alinea el lado con USB micro tipo-B del LinkIt Smart 7688 Duo al lado con serigrafía Host del Grove Breakout para LinkIt Smart 7688 Duo.
:::
**Interfaz Grove**

<!-- Conecta módulos funcionales con interfaz [Grove](/es/Grove_System/) ricos. Con este tipo de puertos, nunca necesitas cables puente o trabajo de soldadura, y puedes hacer aplicaciones más poderosas con esos módulos funcionales. -->

## Primeros pasos

**Materiales requeridos**

- LinkIt Smart 7688 Duo × 1
- Cable USB (tipo A a micro tipo-B) × 1
- Adaptador USB a Serial × 1
- Cables puente × 3
- Grove - Buzzer × 1

**Hacer algo de sonido con un Grove Buzzer**

<!-- 1.Consulta [wiki de LinkIt Smart 7688 Duo](/es/LinkIt_Smart_7688_Duo/) para conectar tu LinkIt Smart 7688 Duo a internet. -->

:::note
    1. Puedes encontrar Pin 8, Pin 9 y Pin GND cerca del puerto a ser conectado LinkIt Smart 7688.
    2. Puedes conectar cables puente en el puerto MT7688 UART2 en lugar de soldarlos al Pin 8, Pin 9 y Pin GND.
:::
2.Abre una consola después de conectar un adaptador USB a Serial al LinkIt Smart 7688 Duo.

3.Conecta todas las partes como se muestra abajo:

![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

:::note
    Conecta Grove - Buzzer en el puerto D4.
:::
<!-- 4.Consulta [wiki de LinkIt Smart 7688 Duo](/es/LinkIt_Smart_7688_Duo/)para construir el entorno Arduino para la plataforma LinkIt Smart 7688 Duo en la computadora host. -->

<!-- 5.Descarga [firmata](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Firmata_to_build_Arduino_IDE_for.zip). Consulta [wiki de LinkIt Smart 7688 Duo](/es/LinkIt_Smart_7688_Duo/) para instalar Arduino IDE para la plataforma LinkIt Smart 7688, y flashea el archivo firmata a la placa de desarrollo. -->

:::note
    Los siguientes pasos se realizan en el SO embebido (OpenWRT).
:::
6.Escribe **pip install pyfirmata** en la consola y presiona Enter para instalar la librería python pyfirmata.

7.Crea un archivo llamado buzzer.py escribiendo vi buzzer.py en la consola, copia el código de abajo en él.

```
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```

8.Guarda buzzer.py y escribe python buzzer.py para ejecutar el código de ejemplo.

9.Ahora escucharás el zumbido.


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivos de esquemático](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
