---
title: Grove - Relé de Enclavamiento de 2 Bobinas
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-2-Coil_Latching_Relay/
slug: /es/Grove-2-Coil_Latching_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/2Coil_Latching_Relay_01.jpg)

Este módulo está basado en un Relé de Enclavamiento de 2 Bobinas. A diferencia del relé ordinario, este relé de enclavamiento no necesita alimentación continua para mantener el estado, solo se necesita un pulso ascendente/descendente para cambiar el estado de trabajo. Incluso se puede quitar la alimentación cuando el estado de trabajo no necesita cambiar, haciendo que este módulo sea especialmente adecuado para proyectos de bajo consumo.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)

Características
-------

- Conector Grove
- Bajo consumo de energía
- Interruptor Dual

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Trabajo
</th>
<td>
4.7
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Activación/Reinicio(Máx)
</th>
<td colspan="3">
4.0
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Resistencia de Bobina
</th>
<td>
151
</td>
<td>
167
</td>
<td>
183
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Conmutación(Máx)
</th>
<td colspan="3">
35VAC/35VDC
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Conmutación(Máx)
</th>
<td colspan="3">
3
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Tiempo de Activación(Enclavamiento)
</th>
<td colspan="3">
4.5(máx)
</td>
<td>
ms
</td>
</tr>
<tr align="center">
<th scope="row">
Tiempo de Reinicio(Enclavamiento)
</th>
<td colspan="3">
3.5(máx)
</td>
<td>
ms
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Antes del uso
------------

### Lectura relacionada

Te sugerimos leer esos conocimientos antes de usar el sensor de gas, te ayudará a aprender más sobre Arduino y nuestros productos, y también te permitirá usar hardware de código abierto más fácilmente.

<!-- - [Getting Started with Arduino](/es/Getting_Started_with_Seeeduino)
- [What is Grove system](/es/Grove_System)
- [Why i need a Base shield?](/es/Base_Shield_V2) -->

- Comenzando con Arduino
- Qué es el sistema Grove
- ¿Por qué necesito un Base shield?

Después de leer eso sabrás cómo usar Base shield con productos Grove para trabajar bien con Arduino. ¡Comencemos!

### Para estar preparado

Este tutorial incluirá algunos productos necesarios:

<!-- - [Arduino UNO R3](https://www.seeedstudio.com/depot/Arduino-Uno-Rev3-p-694.html) or [Seeeduino v4](https://www.seeedstudio.com/depot/Seeeduino-V4-p-669.html)
- [Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)
- Grove - 2-Coil Latching Relay -->

- Arduino UNO R3 o Seeeduino v4
- Base Shield
- Grove - 2-Coil Latching Relay

Comenzando
-----

### Con Arduino

El relé de enclavamiento solo consume energía durante el cambio de estado. Un pulso de voltaje ascendente/descendente en el pin de señal cambia su estado de funcionamiento. Esto es muy útil en situaciones donde la eficiencia energética es importante, y también en situaciones donde necesitas que el relé recuerde su estado.

Comencemos a usarlo.

- Conecta el módulo al puerto D3 del Grove - Base Shield.
- El relé se mantiene en estado "set" (Comm y NO conectados) por defecto, cuando hay un flanco ascendente en el pin SIG. Cambia al estado "reset" (Comm y NC conectados). El código de referencia se muestra a continuación:

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(LatchingRelay,LOW);
    delay(1000);
    digitalWrite(LatchingRelay,HIGH);
    delay(1000);
}
void loop()
{

}
```

- El relé se mantiene en estado "reset" (Comm y NC conectados), cuando hay un flanco descendente en el pin SIG. Cambia al estado "set" (Comm y NO conectados). El código de referencia se muestra a continuación:

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(3,HIGH);
    delay(1000);
    digitalWrite(3,LOW);
    delay(1000);
}
void loop()
{

}
```

- Este módulo consume poca energía cuando el estado de funcionamiento no cambia. Después de establecer el estado del relé, ya no necesitas suministrar energía al Relé de Enclavamiento, lo que lo hace especialmente de bajo consumo de energía.

<div class="admonition note">
<p class="admonition-title">Nota</p>
El relé está en estado "reset" cuando se libera del stock.
</div>

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/Latching_Relay_Diagram.jpg)

<div class="admonition note">
<p class="admonition-title">Notas</p>
<p> 1. Los relés de dos vías se controlan al mismo tiempo.</p>
<p> 2. El indicador NO(NC) parpadeará una vez cuando cambie al estado "set"("reset").</p>
</div>

### Con Raspberry Pi

1.Deberías tener una raspberry pi y un grovepi o grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](/es/GrovePi_Plus).

3.Conexión

- Conecta el sensor al socket D4 del grovepi usando un cable grove.

4.Navega al directorio de las demos:

```
cd yourpath/GrovePi/Software/Python/
```

- Para ver el código

```
nano grove_2_coil_latching_relay.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove 2-Coil Latching Relay to digital port D4
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # switch on for 5 seconds
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # switch off for 5 seconds
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5.Run the demo.

```
sudo python grove_2_coil_latching_relay.py
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - Archivo Eagle de Relé de Enganche de 2 Bobinas](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip)
- [Hoja de Datos del Relé de Enganche](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Latching_Relay_Datesheet.pdf)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_2-Coil_Latching_Relay -->

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
