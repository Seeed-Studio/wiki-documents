---
description: Grove - Tira de Luces LED
title: Grove - Tira de Luces LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-LED_String_Light
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg" alt="pir" width={600} height="auto" /></p>

El módulo Grove - Tira de Luces LED es esencialmente un controlador LED para las tiras de luces LED incluidas en el paquete. El voltaje de funcionamiento del módulo es 3.3V/5V. Sin embargo, las tiras de luces LED requieren un voltaje de funcionamiento de 12V. Por lo tanto, este módulo utiliza un convertidor DC-DC elevador de modo de corriente AIC1896 para proporcionar el voltaje requerido a las tiras de luces LED. La tira de luces LED tiene 5 metros de longitud y tiene 50 LEDs RGB conectados a distancias equidistantes entre sí. Puedes usarlas para decorar un árbol de Navidad, iluminar tu fiesta o decorar tu habitación.

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)
##  Características
---
*   Se utiliza en conjunto con tiras de luces LED

*   Tiras de luces LED de 5 metros de longitud incluidas en el paquete

*   50 LEDs RGB conectados a distancias iguales a lo largo de toda la longitud de 5 metros dan una apariencia colorida

*   Interfaz JST 2.0 utilizada para conectar las tiras de luces LED con el módulo controlador

 *   Utiliza cables Grove estándar de 4 pines para conectar con otros módulos Grove

##  Función de la Interfaz
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg" alt="pir" width={600} height="auto" /></p>

<dl>
<dt>① Interfaz JST 2.0: Se utiliza para conectar a las Tiras de Luces LED</dt>
<dt>② Interfaz Grove: ALTO en SIG (Pin 1) enciende las Tiras de Luces LED, BAJO las apaga</dt>
</dl>

##  Uso
---
Sigue estos pasos para construir un circuito de muestra usando este módulo:

1.  Primero conecta las tiras de luces LED al módulo **Grove - Tira de Luces LED** usando la interfaz de dos cables JST2.0.

 2.  Conecta el módulo de tiras de luces LED al lado de salida de tu circuito (a la derecha del módulo de alimentación). En el lado de entrada del circuito, puedes usar una gama de módulos de entrada basados en sensores ([Grove - Sensor de Luz](/es/Grove-Light_Sensor/), [Grove - Sensor de Sonido](/es/Grove-Sound_Sensor/), [Grove - Botón](/es/Grove-Button/) o [Grove - Potenciómetro Deslizante](/es/Grove-Slide_Potentiometer/)).

3.  Enciende el circuito.

4.  Las tiras de luces LED se encienden cuando el módulo de entrada suministra un disparador:


 Si usas con un sensor de luz conectado directamente al lado de entrada del circuito, deberías ver el LED encenderse con luz brillante. Si quieres que las luces se enciendan en la oscuridad, añade un módulo Grove - NOT entre el sensor de luz y el módulo de alimentación.

Si usas con un sensor de sonido, deberías ver los LEDs encenderse al detectar sonido. De nuevo, si quieres invertir la función, o en otras palabras, si quieres que las luces estén ENCENDIDAS en todo momento excepto cuando hay sonido, añade un módulo Grove - NOT entre el sensor de sonido y el módulo de alimentación.

Si usas con un interruptor momentáneo como el del módulo [Grove - Botón](/es/Grove-Button/), simplemente presiona el botón para encender las tiras de luces.

*   Si usas con un potenciómetro deslizante, mueve el deslizador desde la posición GND a VCC y observa cómo aumenta el brillo de las luces a medida que aumenta el voltaje suministrado.
<!-- </dd></dl>
</dd></dl>
</dd></dl> -->

A continuación se muestra una ilustración de un circuito Grove construido usando el módulo de alimentación Grove - USB Power:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif" alt="pir" width={600} height="auto" /></p>

Si no tienes el módulo Grove - USB Power, usa el módulo Grove - DC Jack Power en su lugar para encender las tiras de luces LED.

##  Disponibilidad
---
Este módulo Grove está disponible como parte de las siguientes Series de Kit Grove

<!-- 链接有问题*   [Grove Mixer Pack V2](/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

Alternativamente, se puede comprar por separado en el Seeed Studio Bazaar.


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
*   [[PDF de Esquemas](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.pdf)]

*   [[Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip)]

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
