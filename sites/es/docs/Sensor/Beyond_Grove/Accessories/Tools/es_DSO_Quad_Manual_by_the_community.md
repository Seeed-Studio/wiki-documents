---
title: Manual del DSO Quad (por la comunidad)
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/DSO_Quad_Manual_by_the_community/
slug: /es/DSO_Quad_Manual_by_the_community
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/P10308912-1024x684.jpg)

El DSO Quad es un osciloscopio de bolsillo. Tiene muchas características excelentes en un paquete pequeño:

* 2 Entradas Analógicas a 72 MS/s (10[Vpp](#definitions) usando la [sonda x1](#definitions), 80[Vpp](#definitions) es posible con una actualización).

* 2 Entradas Digitales a (3.3V máx, diseñado con diodo para permitir voltajes más altos necesita una actualización). Sondas digitales no incluidas.

* Salida del Generador de Señales, 10 Hz-20kHz analógico o 10 Hz-100kHz digital (salida digital de 8 MHz es posible con una actualización).

* Modos de disparo Automático, Normal, Individual, Barrido y funcionamiento libre.

Si esta es tu primera vez usando el DSO Quad, por favor lee la sección [Primeros Pasos](#getting-started).

La sección [Especificaciones](#specifications) tiene todos los detalles sobre las capacidades del DSO Quad.

<!-- [&gt; Descargar este manual como PDF &lt;](#PDF) -->

_**Nota: El DSO Quad es actualmente un producto BETA. Esto significa que aún existen problemas significativos de hardware y software en el producto. Se ha hecho todo intento de describir con precisión el producto actual en este manual. Sin embargo, este manual viene SIN GARANTÍA ABSOLUTA.**_

## ¿Por Qué Otro Manual?

El manual oficial de Seeedstudio se puede descargar [aquí](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929). Comencé esta página como un proyecto en mi tiempo libre para responder todas las preguntas que tuve cuando obtuve mi DSO Quad por primera vez.

Este manual puede ayudar si te preguntas:

1. ¿Cómo instalo la batería? (¡Me preocupa que mi batería pueda estar al revés! ¿Cómo puedo estar seguro?)

2. ¿Cómo abro la cubierta trasera?

3. ¿Cómo enciendo la unidad?

4. ¿Qué significan los LEDs indicadores de carga?

5. ¿Cómo actualizo el firmware?

6. ¿Cómo pruebo la unidad?

7. ¿Para qué son los botones?

Sentí que todo esto pertenece en un lugar -- un manual -- y simplemente seguí trabajando en él hasta que es lo que ves ahora.

### Otra Documentación de Seeedstudio

* [Manual del DSO Quad (página wiki oficial)](/DSO_Quad "DSO Quad")

* [DSO Quad Compilando Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")

* [Tutorial de instalación de batería del DSO Quad con video](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2074)

## Primeros Pasos

Cuando recibas el DSO Quad, deberías tener algo como esto:

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_plastic_cover.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_usb_cable.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_pouch.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_probes.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_battery.jpg)<br />
(Esta es la batería de Polímero de Litio, aún en su bolsa antiestática)

### Instalar la Batería

1. Primero, asegúrate de que el interruptor de encendido/apagado del DSO Quad esté **apagado**:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Turn_off.jpg)

2. Sostén el DSO Quad de manera que estés mirando el texto en la cara trasera, del lado derecho hacia arriba como se muestra:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_right_side_up.jpg)

3. Desliza la cara trasera hacia la izquierda:<br />
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_slide_to_left.jpg)

4. La cara trasera debería entonces caerse fácilmente, revelando la cavidad vacía de la batería:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_back_removed.jpg)<br />
 **Nota:** Hay reportes de baterías con polaridad inversa. _**Esto destruirá tu circuito de carga si no se corrige.**_ Por favor verifica cuidadosamente la alineación correcta de los cables rojo y negro.

5. Verifica que el cable rojo esté más cerca del exterior del DSO Quad. El cable negro está en el interior.
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_observe_polarity.jpg)

6. Si tu batería fue conectada incorrectamente, _**¡no la conectes!**_ Ve a [este hilo del foro](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1911) para obtener ayuda.

7. Si tu batería está conectada correctamente, pasa los cables a través de los clips en el lado izquierdo:

8. Desliza la cubierta trasera en su lugar.
Sostén el lado izquierdo firmemente mientras deslizas la cubierta hacia la derecha. Ve [http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/](http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/) para una demostración.

9. <div className="thumb tright"><div className="thumbinner" style={{width: 202}}> <div className="thumbcaption">LED rojo "cargando"</div></div></div> Voltea el DSO Quad hacia arriba y conecta el cable USB. Deberías ver el LED rojo "cargando". Por favor carga tu DSO Quad por al menos 1 hora la primera vez antes de usarlo.

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_red_charging_led.jpg)

10. Por favor [actualiza tu firmware](#firmware-updates) a la versión más reciente.

### Indicadores LED y Modos de Energía

El DSO Quad se carga conectando el cable USB. El controlador de batería LTC4054 [no cargará la batería](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922) mientras el interruptor de energía esté encendido. Esto se explica mejor en una tabla:

<table>
<tr>
<th> Interruptor de Energía</th>
<th> Cable USB</th>
<th> Batería</th>
<th> Lo que ves</th>
<th> Modo de Energía del DSO Quad</th>
</tr>
<tr>
<td> APAGADO</td>
<td> Desconectado</td>
<td> Inactiva</td>
<td> LEDs apagados, pantalla apagada</td>
<td> Apagado</td>
</tr>
<tr>
<td> ENCENDIDO</td>
<td> Desconectado</td>
<td> Descargándose</td>
<td> LEDs apagados, pantalla encendida</td>
<td> Normal (encendido)</td>
</tr>
<tr>
<td> ENCENDIDO</td>
<td> Desconectado</td>
<td> Descargándose</td>
<td> LED verde encendido, pantalla apagada</td>
<td> Modo de ahorro de energía: después de 600 segundos sin presionar botones, la pantalla se apaga</td>
</tr>
<tr>
<td> ENCENDIDO</td>
<td> Desconectado</td>
<td> Vacía</td>
<td> LEDs apagados, pantalla apagada</td>
<td> Sin batería, apagado. Por favor conecta el cable USB: la batería necesita ser cargada</td>
</tr>
<tr>
<td> ENCENDIDO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Inactiva</td>
<td> LED rojo encendido, pantalla encendida</td>
<td> Encendido, [la batería no se cargará mientras esté encendido](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922)</td>
</tr>
<tr>
<td> APAGADO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Cargando</td>
<td> LED rojo encendido, pantalla apagada</td>
<td> Apagado, batería cargando</td>
</tr>
<tr>
<td> APAGADO</td>
<td> El puerto USB no está suministrando energía*</td>
<td> Inactiva</td>
<td> LEDs apagados, pantalla apagada</td>
<td> Apagado, incapaz de cargar</td>
</tr>
<tr>
<td> APAGADO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Llena</td>
<td> LEDs apagados, pantalla apagada</td>
<td> Apagado, batería está llena</td>
</tr>
<tr>
<td> APAGADO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Sin batería instalada</td>
<td> LED rojo encendido tenuemente, pantalla apagada</td>
<td> Apagado, sin batería instalada</td>
</tr>
</table>

*** El puerto USB no está suministrando energía:** si tu DSO quad no se está cargando, puede ser el puerto USB. Aquí tienes algunos consejos de solución de problemas:

1. Por favor asegúrate de que el cable USB esté conectado correctamente.

2. Por favor prueba un puerto diferente en la computadora. Algunos hubs USB no pueden suministrar suficiente energía, especialmente si varios dispositivos están conectados.

3. Por favor prueba un puerto diferente en otra computadora. Algunas laptops pueden apagar la energía a los puertos USB cuando están en modo de suspensión.

### Actualizaciones de Firmware

Hay varias versiones del DSO Quad, y el firmware para cada una es diferente. Por favor identifica cuidadosamente tu hardware. Cuando enciendas por primera vez el DSO Quad, busca la versión de hardware. Compara lo que veas con la siguiente tabla:

Consulta aquí para el firmware más reciente: [DSO Quad Building Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")
Aquí está el firmware más reciente bajo contrato especial con [FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip).

<table>
<tr>
<th> Pantalla de Inicio</th>
<th> Ver Hardware</th>
<th> FW de Fábrica</th>
<th> Última Actualización FW</th>
<th> Notas</th>
</tr>
<tr>
<td></td>
<td>2.7</td>
<td>APP 2.53<br/>SYS 1.52<br/>FPGA 2.</td>
<td>APP P1.00<br/>SYS B1.52<br/>FPGA 2.61</td>
<td>Seeed Studio envía esta versión.<br/>¡Este firmware tiene una GUI mucho mejor!<br/>(Además, el firmware de fábrica en 2.7 se congelaba mucho, por lo que este firmware es altamente recomendado)<br/><img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_26.jpg" /></td>
</tr>
<tr>
<td></td>
<td>2.6</td>
<td>APP 2.33<br/>SYS 1.33<br/>FPGA 2.5</td>
<td>APP 2.53<br/>SYS 1.52<br/>FPGA 2.61<br/>Seeed Studio envió esta versión<br/><img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_22.jpg" /><br/>2.2 APP<br/>SYS 1.02</td>
<td>[APP 2.34?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)<br/>[SYS 1.32?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Los dispositivos Ver 2.2 solo se dieron a probadores Beta, con una <a href="http://ourdev.cn/bbs/bbs_content_all.jsp?bbs_sn=4138839">actualización gratuita a 2.6</a>. Esta versión no recibirá más actualizaciones de software.</td>
</tr>
</table>

Puedes encontrar más información en [https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929).

El código fuente del firmware está disponible [aquí](http://github.com/Seeed-Studio/DSOQuad_SourceCode). **Nota:** Seeedstudio no recomienda que crees tu propio firmware FPGA, debido al riesgo de dañar el hardware.

### Calibración

El DSO Quad requiere calibración antes del primer uso, y debe ser recalibrado después de un uso prolongado. Los dos parámetros a calibrar son ganancia y sesgo (desplazamiento DC).

#### GUI Antigua (versión de aplicación 2.x)

1. Calibración de Sesgo

    1. Mantén presionado el botón marcado con un cuadrado durante 2 segundos, y aparece la "hoja de cálculo" de calibración

        2. Ajusta los valores a 0 en cada casilla. Muévete arriba/abajo rotando el interruptor de "navegación" del extremo derecho hacia izquierda/derecha. Muévete entre columnas haciendo clic en el interruptor de "navegación" del extremo derecho.

        3. Cancela la calibración dejando algunas entradas sin cambiar. O, guarda la calibración después de calibrar en cada nivel. Sigue las instrucciones en la parte superior.

2. Calibración de Ganancia

    1. (Consulta el manual regular para esto)

#### GUI Nueva (hardware 2.7, versión de aplicación P1.00 y superior)

(no estoy seguro de qué está pasando con la numeración de versiones, tal vez es una beta o vista previa, pero no me queda claro)

1. Calibración de Sesgo

    1. Presiona el botón cuadrado una vez

        2. Selecciona "Calibrat" en el menú.

        3. Sigue las instrucciones

Más detalles ver aquí: [DSO Quad:Calibration](/DSO_Quad-Calibration "DSO Quad:Calibration")

Nota: Noté que la calibración es diferente cuando conectas o desconectas una fuente de alimentación a la conexión micro USB. Así que calibra de la manera que más lo vayas a usar.

1. Calibración de Ganancia

    1. (Consulta el manual regular para esto)

## Usando El DSO Quad

Los interruptores más importantes son los dos interruptores giratorios de la derecha. El del extremo derecho es el interruptor de "navegación" para cambiar qué parte principal de la interfaz está parpadeando actualmente. El otro interruptor es el interruptor de "submenú" usado para cambiar Voltios/div, microsegundos, posiciones de disparo, etc.

Cada uno de estos interruptores puede rotarse hacia izquierda o derecha, y presionarse como un botón pulsador.

La pantalla principal tiene estos bloques:

<table>
<tr>
<th> Título</th>
<th> Descripción del bloque</th>
</tr>
<tr>
<td> RUN/HOLD</td>
<td> Pausar el osciloscopio, y comenzar a ejecutar de nuevo</td>
</tr>
<tr>
<td> CH(A)</td>
<td> gráfico y mediciones de color cian</td>
</tr>
<tr>
<td> CH(B)</td>
<td> gráfico y mediciones de color amarillo</td>
</tr>
<tr>
<td> CH(C)</td>
<td> gráfico y mediciones de color púrpura</td>
</tr>
<tr>
<td> CH(D)</td>
<td> gráfico y mediciones de color verde</td>
</tr>
<tr>
<td> SCAN</td>
<td> modo de disparo de color marrón SCAN/AUTO/NORM (NORMAL)/SINGL (SINGLE)/NONE</td>
</tr>
<tr>
<td> Generador de Señal</td>
<td> "salida de onda" digital y analógica de color azul</td>
</tr>
<tr>
<td> Trigger</td>
<td> Todos los niveles de disparo (para CH(A) hasta CH(D)) y el modo de disparo</td>
</tr>
<tr>
<td> YPOS</td>
<td> YPOS</td>
</tr>
<tr>
<td> V1</td>
<td> V1</td>
</tr>
<tr>
<td> V2</td>
<td> V2</td>
</tr>
<tr>
<td> Desplazador horizontal</td>
<td> Desplazador horizontal</td>
</tr>
<tr>
<td> T1</td>
<td> T1</td>
</tr>
<tr>
<td> T2</td>
<td> T2</td>
</tr>
<tr>
<td> XPOS</td>
<td> XPOS</td>
</tr>
<tr>
<td> Delta V</td>
<td> diferencia entre los marcadores V1 y V2</td>
</tr>
<tr>
<td> Delta T</td>
<td> diferencia entre los marcadores T1 y T2</td>
</tr>
<tr>
<td> mediciones en vivo</td>
<td> lecturas de medición personalizables. Por ejemplo, Vbt, FPS, Vdc, RMS, Max, Min, Vpp, FRQ, DUT, CIR, TL, TH</td>
</tr>
</table>

### Medición de Voltaje

Vmax, Vmin, Vpp, Vdc (V promedio), Vrms (sqrt(promedio(V*V)))

## Especificaciones

Muestreo 0.1 usec - 1 sec

Ancho de banda de entrada digital [Este hilo del foro](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1978)

### Definiciones

<table>
<tr>
<th> Vpp</th>
<td> Voltios pico a pico</td>
</tr>
<tr>
<th> sonda x1</th>
<td> Mide señales de bajo voltaje. No exceda 80Vpp o puede dañar su DSO Quad. (Puede usarse como una sonda de baja impedancia.)</td>
</tr>
<tr>
<th> sonda x10</th>
<td> Mide señales de alto voltaje. No exceda 400Vpp o puede dañar su DSO Quad. (Puede usarse como una sonda de alta impedancia.)<br/><br/>Tenga en cuenta que los valores en pantalla son 1/10 de la entrada, así que multiplique por 10 mentalmente.</td>
</tr>
<tr>
<th> ...</th>
<td> ...</td>
</tr>
</table>

### Requisitos

El DSO Quad puede cargarse desde cualquier puerto USB normal. Por favor, cargue su DSO Quad durante al menos 1 hora antes de usarlo.

El firmware del DSO Quad realiza una desconexión-reconexión USB rápida para hacer una actualización de firmware "en vivo". Este método es incompatible con Mac OS X o Linux. Por favor, consulte [este hilo del foro](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1934) para más información. Vea [DSO Quad Building Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware") para saber cómo actualizar el firmware desde Linux.

## Recursos

[FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
