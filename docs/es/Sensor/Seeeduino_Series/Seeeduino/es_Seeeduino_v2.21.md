---
description: Seeeduino V2.21
title: Seeeduino V2.21 
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_v2.21
last_update:
  date: 1/11/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino-168p.jpg) ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino_fritzing.png)

Aquí está la página wiki para ambos Seeeduino V2.21 Atmega 168P y Seeeduino V2.21 Atmega 328P.

Seeeduino es una placa compatible con Arduino. Su diseño está basado en el esquema Diecimila, 100% compatible con sus programas, shields e IDEs existentes. En la parte de hardware, se han realizado cambios notables para mejorar la flexibilidad y la experiencia del usuario.

## Características ##

- Hereda todas las características de Arduino Diecimila.

- Compatible con el diseño de pines, orificios de tornillos y dimensiones de Diecimila.

- Evolucionado con componentes SMD

- Mejorado en extensibilidad y conveniencia

## FAQ ##

Aquí está el FAQ de Seeeduino, ahora la versión es v2.21, los usuarios pueden listar las Preguntas Frecuentes aquí, ejemplo como se muestra a continuación:

### ¿Qué es Seeeduino? ###

**Respuesta:** Seeeduino es un ...

### ¿Cómo uso el Seeduino 328 con el IDE de Arduino? ###

Respuesta: Selecciona "Arduino Dueminalove 328" en el IDE de Arduino y también asegúrate de que el interruptor de reset esté configurado en AUTO para la programación.

### ¿Qué voltajes puedo alimentar a través del conector de alimentación JST? ###

**Respuesta:** Esta es una respuesta no autorizada (enviada por el usuario). El conector JST está conectado a un regulador de voltaje L1117-50 que reduce el voltaje de entrada a 5.0 VDC. El L1117 es un regulador LDO (low-drop out), por lo que necesita un mínimo de +1.2 voltios sobre el voltaje regulado para operar. En conclusión, necesitas un mínimo de al menos 6.2 VDC pero se prefiere más. El voltaje máximo es de 15 voltios DC para el regulador, sin embargo esto asume el mejor escenario para el regulador. Para estar en el lado seguro con márgenes adecuados en ambos extremos, deberías mantener el voltaje entre 7 VDC y 13 VDC.

### ¿Cuál es el uso del interruptor M_RST_A? ###

""Respuesta:""Interruptor M_RST_A, activar 'M' significa que cuando descargas el programa la placa se reiniciará automáticamente, activar 'A' no se reiniciará automáticamente, por defecto activar 'M'

## Soporte ##

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **desear** discutir.

## Seguimiento de Versiones ##

|Revisión|Descripciones|Fecha de Lanzamiento|
|---|---|---|
 |Seeeduino V0.9|Lanzamiento público inicial||
 |Seeeduino v1.1|**1.** Corregido error - vía innecesaria en el cable del Pin4.**2.** Corregido error - Etiqueta cubierta por error por interruptores. **3.** Agregado puerto I2C y sensor.**4.** Agregado un capacitor de 100uF para el interruptor vcc.**5.** Agrupados nuevos pines de cuadrícula de 100mil.**6.** Reemplazados botones de reset con metálicos.**7.** Reorganizados textos y etiquetas para indicaciones más claras.||
 |Seeeduino v2.12|**1.** Cero consumo de energía externa cuando está apagado **2.** Interruptores más fuertes**3.** Segunda fuente de alimentación para entrada directa de 5V. [Precaución] ¡USA SOLO 5V!**4.** Capacidad de controlador de 150mA bajo 3.3V**5.** PCB delgado de 1.0mm para pesos más ligeros**6.** Fila extra reservada para cabeceras de pines||
 |Seeeduino v2.2|**1.** Selección automática de alimentación USB/EXT**2.** Actualizar capacitor de alimentación**3.** Limpiar diseños**4.** Reset más fácil**5.** Cristal de Cuarzo Real**6.** Diodo de alimentación externa cambiado a 1N4004(más potencia en pin Vin)|16 de diciembre, 2010|
 |Seeeduino v2.21|1.Actualizado a conector mini USB más fuerte.|12 de enero, 2011|
 |Seeeduino v3.0|1.cambiar conector JST a conector DC Jack|1 de enero, 2012|

## Seguimiento de Errores ##

El Seguimiento de Errores es el lugar donde puedes publicar cualquier error que creas que podrías haber encontrado durante el uso. Por favor escribe lo que tienes que decir, tus respuestas nos ayudarán a mejorar nuestros productos.

- El conector mini-USB puede romperse de la placa muy fácilmente si aplicas fuerza lateral mientras un cable mini-USB está conectado. Considera usar un cable USB de extensión y abstente de conectar/desconectar el cable mini-USB hacia/desde la placa Seeduino muy a menudo.

## Idea Adicional ##

La Idea Adicional es el lugar para escribir tus ideas de proyecto sobre este producto, u otros usos que hayas encontrado. O puedes escribirlos en la página de Proyectos.

## Cómo comprar ##

Aquí para comprar Seeeduino v2.21 [(Atmega 168P)](https://www.seeedstudio.com/depot/seeeduino-v221-atmega-168p-p-690.html) y Seeeduino v3.0 [(Atmega 328P)](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=132_133) en SEEED **Bazaar**

## Licencias ##

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciadas bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), ver archivos de código fuente para detalles.

## Recursos ##

- **[PDF]** [Esquemático en pdf](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/res/Seeeduino_v2.21.pdf)

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
