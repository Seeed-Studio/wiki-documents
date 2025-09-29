---
title: Grove - Relé de Lámina Seca
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Dry-Reed_Relay/
slug: /es/Grove-Dry-Reed_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/img/DryReed_Relay_01.jpg)

El **Grove-Relé de Lámina Seca** es un módulo de relé que funciona mediante la magnetización de la lámina vibratoria a través de la corriente en las bobinas. Comparado con los relés electromagnéticos, los contactos completamente sellados es la característica más importante del Relé de Lámina Seca. Además, presenta simplicidad en la construcción, compacidad, alta velocidad y larga vida útil, lo que lo hace ampliamente aplicado en muchos campos como detección microelectrónica, Control Automático, etc.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)

Características
-------

- Interfaz Grove
- Alta Velocidad
- Buena estabilidad
- Larga vida útil de contacto
- Contacto completamente sellado

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
Voltaje
</th>
<td>
4.8
</td>
<td>
5.0
</td>
<td>
5.2
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
225
</td>
<td>
250
</td>
<td>
275
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Activación
</th>
<td colspan="3">
3.75
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Conmutación(Máx)
</th>
<td colspan="3">
0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Conmutación(Máx)
</th>
<td colspan="3">
120 VAC/60VDC
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Transporte(Máx)
</th>
<td colspan="3">
1.0
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Tiempo de Operación(Máx)
</th>
<td colspan="3">
1.0
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
Tiempo de Liberación(Máx)
</th>
<td colspan="3">
0.5
</td>
<td>
mS
</td>
</tr>
<tr align="center">
<th scope="row">
Vida Mecánica(sin carga)
</th>
<td colspan="3">
1×108 operaciones
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura Ambiente
</th>
<td>
-30
</td>
<td>
/
</td>
<td>
70
</td>
<td>
˚C
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

### Con Arduino

El Relé de Lámina Seca puede soportar hasta 60VDC 1A de carga. Puedes usarlo para controlar carga resistiva,<font color="red"> **pero no es aplicable a carga inductiva (como Motor)**</font>.

El uso de este relé de lámina seca es bastante similar al de los relés comunes.

- Conecta la luz eléctrica al Grove - Relé de Lámina Seca y la alimentación para la luz eléctrica.
- Conecta el Grove - Relé de Lámina Seca al puerto D2 del Grove - Base Shield y conéctalo al Arduino/Seeeduino.

- Sube el código de abajo.

```
    int Relay = 2;

    // the setup routine runs once when you press reset:
    void setup() {                
      // initialize the digital pin as an output.
      pinMode(Relay, OUTPUT);     
    }

    // the loop routine runs over and over again forever:
    void loop() {
      digitalWrite(Relay, HIGH);   //the Relay close(HIGH is the voltage level)
      delay(5000);               // wait for five seconds
      digitalWrite(Relay, LOW);    //the Relay normally open by making the voltage LOW
      delay(5000);               // wait for five seconds
    }
```

- La luz eléctrica se encenderá durante segundos, luego se apagará durante segundos, repetidamente. Para aplicaciones especiales, es posible que necesites escribir el código por ti mismo.

### Con Raspberry Pi

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::
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
    nano grove_relay.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Relay to digital port D4
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

5.Ejecuta la demostración.

```
    sudo python3 grove_relay.py
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - Archivo Eagle de Relé de Láminas Secas](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip)
- [Hoja de Datos del Relé de Láminas Secas](https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Dry-Reed_Relay_Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Dry-Reed_Relay -->

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
