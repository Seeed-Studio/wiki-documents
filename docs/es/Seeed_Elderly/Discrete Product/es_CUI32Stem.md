---
description: CUI32Stem
title: CUI32Stem
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/CUI32Stem
last_update:
  date: 1/13/2023
  author: shuxu hu
---

La Interfaz USB Creativa es una placa microcontroladora de código abierto que puede programarse en lenguajes C, BASIC o Arduino. Esta última versión se llama CUI32Stem, que está diseñada para trabajar 'mano a mano' con el sistema de prototipado GROVE incluyendo una amplia gama de sensores y actuadores. Utiliza un microcontrolador Microchip® PIC32 de alto rendimiento, permitiendo interacción programable con todo tipo de inventos de usuario, ¡sin necesidad de soldadura! :)

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemFrontSmall.png)

Las versiones de alta resolución de estas imágenes están disponibles aquí ([Lado Frontal](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemFront.jpg)) y aquí ([Lado Posterior](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemBack.jpg)).

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemBackSmall.png)

El CUI32Stem puede ejecutar código Arduino (compilado a través de la versión multiplataforma [ChipKIT MPIDE](http://themakersworkbench.com/node/422) del IDE de Arduino), y también viene con un Sistema Operativo en Tiempo Real gratuito llamado [StickOS](http://www.cpustick.com/) preinstalado para el camino más rápido hacia la programación de la placa (BASIC en una ventana de terminal, sin necesidad de instalar ningún software en tu computadora). Ambas características hacen que sea muy fácil comenzar si eres nuevo en el mundo de las Unidades Microcontroladoras (MCUs). Para usuarios avanzados que deseen aprovechar al máximo el potente microcontrolador de 32 bits en el CUI32Stem*, los programas en lenguaje C pueden por supuesto desarrollarse directamente en Microchip [MPLAB X](http://www.microchip.com/mplabx/), que está disponible para Windows, Mac OS X y Linux.

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32Stem_Grove_Dash_Kit-2.jpg)

[Kit CUI32Stem Dash]

El CUI32Stem está disponible para comprar solo (conectores en una bolsa, no soldados, proporcionando un perfil delgado para ubicaciones de montaje de perfil bajo), o como parte de dos paquetes GROVE diferentes (el primero de los cuales se muestra arriba - un kit más grande con inalámbrico y más elementos Grove está por venir). Cuando se envía como parte de un paquete, las placas CUI32Stem tendrán pines de conector presoldados (permitiendo conexión/desconexión simple para elementos GROVE). Ver la sección a continuación sobre 'cómo comprar' para más detalles. Puedes elegir si los "pines V*" deben proporcionar 3.3V o 5V a través del "selector V*" en la placa, para correlacionar con el voltaje apropiado para el/los elemento(s) GROVE elegido(s) - los pines no analógicos en el CUI32Stem toleran 5V (aunque el microcontrolador en sí funciona a 3.3V).

Algunos de los elementos GROVE añaden características inalámbricas al CUI32Stem, incluyendo módulos Bluetooth y 'RF Serial' simples, así como un próximo módulo 'WiFi Serial' que está en diseño ahora (aún no lanzado). Este módulo WiFi Serial permite al CUI32Stem acceder a internet y/o usar el protocolo Open Sound Control ([OSC](http://opensoundcontrol.org/)) vía inalámbrico 802.11. StickOS soporta enlaces inalámbricos extremadamente simples (ver ejemplo [aquí](http://www.cpustick.com/examples.htm#ex3)) a través de una placa complementaria diseñada específicamente para el CUI32Stem llamada ZigFlea, así como la posibilidad de registro simple de datos a una memoria USB. Hay una huella para un conector USB hembra (tanto en el lado superior como inferior de la placa, tu elección cuál usar - conector USB hembra comprado por separado, o incluido en los paquetes) que te permite usar el modo USB-host - StickOS incluye un sistema de archivos FAT32 y soporta el registro de datos a una unidad flash estándar.

[StickOS](http://www.cpustick.com/), que viene preinstalado en cada CUI32Stem enviado, incluye un compilador BASIC a bordo, editor de líneas, depurador, perfilador y sistema de ayuda en línea para crear nuevos programas de firmware, guardarlos y ejecutarlos. Todo esto se puede hacer sin tener que instalar ningún software en tu computadora, solo usando un emulador de terminal estándar para comunicación.

El código Arduino puede compilarse y ejecutarse en el CUI32Stem usando [MPIDE](https://github.com/chipKIT32/chipKIT32-MAX/downloads) (Entorno de Desarrollo Integrado Multi-Plataforma), que tiene su propio [foro](http://chipkit.cc/forum/). Finalmente, el código C puede por supuesto compilarse para el CUI32Stem a través del propio IDE MPLAB X de Microchip y el compilador C32 correspondiente, ambas descargas gratuitas. La 'Librería de Aplicaciones de Microchip', [MAL](http://www.microchip.com/MAL) también es gratuita para descargar y tiene bastantes buenos ejemplos. Más ejemplos para código C en un PIC32 también se pueden encontrar [aquí [http://www.schmalzhaus.com/UBW32/](http://www.schmalzhaus.com/UBW32/)].

- Para aquellos interesados en benchmarks, un Arduino estándar tiene un Coremark de 18, mientras que el Coremark del CUI32Stem es 203 - esto es con código C nativo compilado con optimización completa en ambos. Aunque este rendimiento obviamente no se verá mientras se ejecuta código BASIC en StickOS, el compromiso ahí es por facilidad de uso. El código Arduino claramente se acercará un poco más al rendimiento del código C nativo. Un proyecto de ejemplo que mostrará el rendimiento del CUI32Stem (escrito en lenguaje Arduino con MPIDE), es el proyecto de código abierto de Philip Burgess para construir un [sintetizador polifónico](http://hackaday.com/2011/06/08/chipkit-sketch-mini-polyphonic-sampling-synth/) autocontenido usando un PIC32. Con sensores piezoeléctricos como entradas, implementa un sintetizador polifónico de reproducción de muestras incluyendo efectos de audio en tiempo real. Este proyecto no sería posible en un Arduino estándar, debido a la falta de memoria interna suficiente – y añadir un 'wave-shield' o similar a un Arduino para acceder a memoria externa haría difícil (si no imposible) lograr la polifonía (notas/sonidos musicales superpuestos), como lo demuestra Burgess.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/cui32stem-p-1100.html?cPath=132_208)

## Características

---
CUI32Stem está diseñado para ser el cerebro del sistema GROVE

El código Arduino puede compilarse para el CUI32Stem a través de MPIDE

Potente microcontrolador de 32 bits funcionando a 80MHz

Sistema operativo en tiempo real fácil de usar preinstalado - StickOS:

**Características de StickOS BASIC**

- rastrear o ejecutar el programa paso a paso,

- usar perfilado de muestreo para ver dónde está gastando tiempo el programa,

- usar puntos de interrupción, aserciones y puntos de vigilancia,

- usar manipulación y examen en vivo de variables (y pines) mientras el programa está detenido, y

- ¡incluso editar y continuar el programa!

El CUI32Stem es parte del proyecto Microcontroladores Para Todos ([proyecto MFE](http://www.cpustick.com/downloads/mfe.pdf)), iniciado por Rich Testardi creador de StickOS BASIC. El objetivo de este proyecto es alentar a nuevos conjuntos de usuarios casuales, incluyendo estudiantes, aficionados y otros usuarios no profesionales, a aprender sobre, divertirse con, y construir proyectos útiles con tecnologías de microcontroladores de última generación. El objetivo de MFE explícitamente no es ocultar o abstraer las tecnologías de microcontroladores, sino más bien, hacerlas más accesibles, transparentes y tolerantes para que los usuarios casuales puedan aprender los mismos conceptos fundamentales que usan los usuarios profesionales, pero sin la inversión profesional.

## Especificaciones

---
Procesador [PIC32MX795F512H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en545655):

- Reloj de 80 MHz

- 1.56 DMIPS/MHz

- 512K Flash

- 128K RAM

- 8 canales DMA

- 3 SPI

- 4 I2C

- 6 UART (puertos serie)

- USB 2.0 de velocidad completa modo dispositivo o host

- 16 canales A/D, resolución de 10 bits

## Instalación de Hardware

---
Iniciar sesión en StickOS es tan fácil como:

1. Si estás ejecutando Windows, descarga "CPUStick.inf" desde [aquí](http://cpustick.com/downloads.htm), luego haz clic derecho en el archivo y selecciona "Instalar"; Mac y Linux automáticamente saben cómo comunicarse con el CUI32Stem, no se requiere instalación.

2. Si estás ejecutando Windows o Linux, descarga un programa emulador de terminal (yo uso "Tera Term" en Windows y "minicom" en Linux); Mac tiene el comando incorporado "screen".

3. Conecta tu CUI32Stem a la computadora host con un cable USB.

4. Determina tu puerto COM o nombre de archivo de dispositivo; en Windows solo busca CPUStick en el Administrador de dispositivos; en Mac, busca un archivo /dev/tty.usbmodemXXX, donde XXX coincida con el ID de ubicación del dispositivo CPUStick en "Acerca de esta Mac -&gt; Más información... -&gt; Hardware -&gt; USB"; en Linux el nombre del archivo de dispositivo depende de la distribución.

5. Abre el programa emulador de terminal en tu sistema, y conéctate al puerto COM o archivo de dispositivo apropiado.

6. Presiona &lt;Enter&gt; para obtener un prompt:

```
Welcome to StickOS for Microchip PIC32MX2-F128B v1.92c!
Copyright (c) 2008-2012; all rights reserved.
http://www.cpustick.com
support@cpustick.com
(checksum 0x8725)
> _
```

Ayuda específica para Mac para principiantes:
Como se mencionó anteriormente, todas las Mac vienen con una utilidad "screen" incorporada - esta se usa dentro de la aplicación Terminal como se describe a continuación:

Primero, abre Terminal. Si nunca lo has usado antes, está en Aplicaciones/Utilidades/Terminal. A continuación, escribe

ls /dev/tty.*

para obtener una lista de todos tus puertos serie. Elige el que quieras abrir. Por ejemplo, mi lista se ve así:

```
/dev/tty.Bluetooth-Modem
/dev/tty.Bluetooth-PDA-Sync
/dev/tty.usbmodemfa141
```

Tu placa CUI32Stem aparecerá con un nombre similar al último, en el sentido de que incluirá 'tty.usbmodem' en el nombre.

Así que ahora puedes simplemente escribir 'screen portname' seguido de return, para mostrar StickOS en la pantalla. En mi caso, escribí: screen /dev/tty.usbmodemfa141

Después de esto, es posible que necesites presionar la tecla enter nuevamente para que el CUI32Stem envíe de vuelta el mensaje de bienvenida de StickOS...

Para salir de la aplicación screen, escribe control-A, luego control-.

Nota final: Este mismo procedimiento también funcionará cuando tengas un elemento [GROVE Serial Bluetooth](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html) conectado a tu CUI32Stem.
La única diferencia es que el nombre tendrá 'bluetooth' en algún lugar, por supuesto... si no estás seguro, simplemente pruébalos todos hasta que encuentres el correcto.

## Ideas de Aplicaciones

---
¡Hacer proyectos interactivos es fácil con el CUI32Stem! Hay literalmente miles de ejemplos disponibles en línea en forma de proyectos Arduino que solo deberían requerir pequeños cambios para compilar (cambiar los nombres de los pines para que correspondan a los del CUI32Stem, etc).

Para aquellos curiosos sobre BASIC - recién comenzando o que quieren probarlo... ¿Qué tan fácil es StickOS, realmente?

Los siguientes ejemplos, que dan resultados inmediatos, aliento y retroalimentación, usan el CUI32Stem como ejemplo de los tipos de cosas triviales que puedes hacer con StickOS. Un "Currículo" más completo será desarrollado para dar ejemplos de trabajo con muchos de los elementos GROVE en el futuro cercano.

**1 de 5: Parpadear un LED**
Como el "¡hola mundo!" de la programación embebida, hagamos que un LED parpadee en el pin 'rd0' del CUI32Stem:

```
> 10 dim led as pin rd0 for digital output
> 20 while 1 do
> 30 let led = !led
> 40 endwhile
> run
 _
```

La línea 10 del programa dimensiona (declara) una variable llamada "led" que está vinculada al pin rd0 del CUI32Stem, el cual está configurado para salida digital; a partir de entonces, cualquier manipulación de la variable se refleja inmediatamente en el pin. Las líneas 20-40 del programa forman el bucle principal del programa. La línea 30 simplemente invierte el estado del led en el pin rd0 del CUI32Stem, dentro del bucle.
¡Ups! Algo está mal -- el LED no está parpadeando pero parece estar medio encendido... ¡Oh! ¡Olvidamos agregar un retardo! Así que detengamos el programa con un &lt;Ctrl-C&gt;, arreglemos el programa agregando un retardo de 500ms, y luego continuemos desde donde lo dejamos:

```
<Ctrl-C>
STOP at line 30
> 35 sleep 500 ms
> cont
 _
```

¡Mucho mejor!

OK, ahora vamos a ser un poco más interactivos con el CUI32Stem y detener el programa nuevamente con un &lt;Ctrl-C&gt;... Luego examinaremos el estado del LED (es decir, imprimir el valor de la variable "led") y después haremos parpadear el LED manualmente...

```
<Ctrl-C>
STOP at line 35
> print led
0
> let led = 1
> print led
1
> let led = 0
> print led
0
>_
```

¡Observa que cuando cambiamos la variable, el LED cambia de estado!

**2 de 5: Hacer parpadear un LED con una ISR de temporizador**
Ahora que nuestro LED está parpadeando, vamos a avanzar al uso de una ISR de temporizador (Rutina de Servicio de Interrupción) en lugar de un bucle programado -- de esta manera podremos hacer otras cosas con el "bucle principal" en el futuro. Mantendremos la línea 10 del programa, pero eliminaremos todas las líneas que siguieron, listaremos el programa y comenzaremos desde ahí:

```
 source-c"><pre class="de1"><span class="sy0">></span> delete <span class="nu0">20</span><span class="sy0">-</span>
<span class="sy0">></span> list
<span class="nu0">10</span> dim led as pin rd0 <span class="kw1">for</span> digital output
end
<span class="sy0">></span> <span class="n
```

La línea 10 aún dimensiona (declara) una variable llamada "led" que está vinculada al pin rd0 del CUI32Stem, que está configurado para salida digital; la línea 20 configura el temporizador #1 para activarse cada 500ms; la línea 30 habilita la interrupción del temporizador y dice que cada vez que el temporizador se active, deberíamos ejecutar la declaración "let led = !led" (si tuviéramos más trabajo que hacer podríamos haber llamado a una subrutina); finalmente la línea 40 simplemente pone el bucle principal a dormir -- ¡solo atendemos interrupciones a partir de entonces!
¡Vaya, eso funcionó al primer intento! :-)

**3 de 5: Parpadear un LED con un Módulo de Comparación de Salida**
Ahora que entendemos un poco los temporizadores, ¡intentemos usar uno de los periféricos "módulo de comparación de salida" del CUI32Stem para que podamos hacer parpadear el LED sin usar la CPU en absoluto! De nuevo, ¡¡¡estos son todos los mismos conceptos fundamentales utilizados por usuarios profesionales!!!
Tenemos que detener el programa nuevamente con un &lt;Ctrl-C&gt;, y luego simplemente haremos esto en la línea de comandos (ni siquiera escribiendo un programa) porque estamos un poco inseguros de nosotros mismos...

```
<Ctrl-C>
STOP at line 40
> dim hz as pin rd0 for frequency output
> hz = 1
>_
>
```

La primera línea allí dimensionó (declaró) una variable llamada "hz" que está vinculada al pin rd0 del CUI32Stem, que está configurado para recibir la salida de un módulo de comparación de salida; a partir de entonces, cualquier manipulación de la variable se programa inmediatamente como la frecuencia de salida, en Hz, del módulo de comparación de salida.
¡¡¡Wow, eso es genial!!! Hagamos que vaya más rápido:

```
> hz = 10
>_
```

And faster:

```
> hz = 100
>_
```

Quiero conectar un zumbador a esta cosa, pero antes de continuar, probemos otro experimento...

**4 de 5: Leer un Potenciómetro con un Convertidor A/D**
Para este experimento, conectaremos el cable del medio de un potenciómetro al pin an0 del CUI32Stem, y los cables exteriores del potenciómetro a tierra y 3.3V (por supuesto, puedes simplemente conectar un elemento potenciómetro GROVE). Hagamos esto nuevamente en la línea de comandos (sin programa) para que podamos ver cómo funciona:

```
> dim pot as pin an0 for analog input
> print pot
1876
>_
```

La primera línea allí dimensionó (declaró) una variable llamada "pot" que está vinculada al pin 'an0' del CUI32Stem, que está configurado para entrada analógica a través del convertidor A/D; ¡desde entonces, cualquier referencia de la variable refleja el número actual de milivoltios leídos en el pin!
Ahora giremos un poco el potenciómetro y probémoslo de nuevo:

```
> print pot
1201
>_
```

¡¡¡Genial!!!

**5 de 5: Juntando Todo -- ¡Un Convertidor de Analógico a Frecuencia!**
OK, reemplacemos el LED en el pin rd0 del CUI32Stem con un pequeño zumbador... ¡Y ahora escribamos un programa usando todas las habilidades que acabamos de aprender para crear un "convertidor de analógico a frecuencia"! Comenzaremos borrando todo lo que hemos hecho hasta ahora con un comando "new", y luego continuaremos desde ahí:

```
> new
> 10 dim buzzer as pin rd0 for frequency output
> 20 dim pot as pin an0 for analog input
> 30 configure timer 1 for 100 ms
> 40 on timer 1 do let buzzer = pot
> 50 halt
> run
 _
```

Ahora gira la perilla y escucha el zumbador -- va de 0 a 3300 Hz, actualizado desde la perilla cada 100ms! ¡Genial! :-)

Continuando con ejemplos más avanzados de StickOS a continuación:

- [Atenuador LED Remoto Inalámbrico ZigFlea™](http://www.cpustick.com/examples.htm#ex3)

- [Termómetro Digital LCD](http://www.cpustick.com/examples.htm#ex2)

- [¡Conócete Íntimamente (e Interactivamente!) Con Tu MCU!](http://www.cpustick.com/examples.htm#int)

- [Controlador de Perfil de Temperatura para Horno Tostador](http://www.cpustick.com/examples.htm#ex1)

## Programación Más Avanzada

La instalación del IDE Multi-Plataforma MPIDE para compilar código Arduino para el CUI32Stem se describe [aquí](http://www.chipkit.cc/wiki/index.php?title=MPIDE_Installation "MPIDE_Installation").

Programa simple en C usando MPLAB que alterna el LED dependiendo de la pulsación de un botón:

```
#define SYSCLK 80000000L

#include <p32xxxx.h>
#include <plib.h>

int main(void)
{
 SYSTEMConfigPerformance(SYSCLK);

 LATE = 0xFFFE; TRISE = 0xFFFE;

 while (1) {
  LATEbits.LATE0 = PORTEbits.RE7;
 }

 return 0;
}
```

## Soporte

[Haz preguntas en el foro de Seeed](https://www.seeedstudio.com/forum).

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Archivo ZIP que contiene Esquema y Diseño en formato Eagle, Esquema en formato PDF, archivos Gerber y BOM](http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip)

- [Bootloader y firmware BASIC StickOS](http://code.google.com/p/cui32/source/browse/trunk/firmware/CUI32Stem/)

## Cómo comprar

Haz clic aquí para comprar en Seeedstudio Bazaar.

La placa CUI32Stem sola (sin conectores):
**Modelo: [https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208](https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208)**

Un "kit de inicio": (insertar enlace al bazaar)
Wiki de documentación: CUI32Stem GROVE Dash Bundle, y

Un "kit completo": (insertar enlace al bazaar)
Wiki de documentación: CUI32Stem GROVE Lab Bundle.

## Ver También

- [http://www.cpustick.com/](http://www.cpustick.com/)

- [http://code.google.com/p/cui32/](http://code.google.com/p/cui32/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
