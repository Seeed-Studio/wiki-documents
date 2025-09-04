---
description: Grove - Relé SPDT(30A)
title: Grove - Relé SPDT(30A)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-SPDT_Relay_30A
last_update:
  date: 1/10/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay_01.jpg" /></div>

El Relé SPDT(30A) es un Relé de Un Polo Dos Tiros (SPDT) de alta calidad. El Relé consiste en una bobina, 1 terminal común, 1 terminal normalmente cerrado, y un terminal normalmente abierto. Cuando la bobina del relé está en reposo (no energizada), el terminal común y el terminal normalmente cerrado tienen continuidad. Cuando la bobina está energizada, el terminal común y el terminal normalmente abierto tienen continuidad. La bobina de este relé está clasificada hasta 5V y el contacto está clasificado hasta 30A (@250VAC, 30VDC). Puedes usarlo para controlar dispositivos de alta corriente.

## Característica

---

- Alta Corriente de Conmutación
- Relé SPDT
- Relé normalmente cerrado

:::tip
  Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificación

---
|Elemento| Mín| Típico |Máx |Unidad|
|---|---|---|---|---|
|Voltaje de trabajo| 4.75| 5.0| 5.25 |VDC|
|Corriente |-|185|-| mA|
|Voltaje de Activación(Máx) |-|3.75|-| VDC|
|Tiempo de Operación(Máx)|-| 15|-| ms|
|Tiempo de Liberación(Máx)|-| 10|-| ms|
|Temperatura Ambiente de Operación| -25| - |70 |°C|

## Uso

---
**Con Arduino**

¿Por qué queremos usar un relé y realmente lo necesitamos? Cada vez que quieras encender/apagar un dispositivo que consume más corriente o funciona con alto voltaje, necesitarás usar un relé. Es decir, el relé es "un interruptor de alto voltaje o corriente controlado por bajo voltaje". La bobina de un relé SPDT que más comúnmente usamos consume muy poca corriente (el [Grove - Relay](https://wiki.seeedstudio.com/es/Grove-Relay/) soporta 10A). Ahora, con este relé de 30A, puedes controlar dispositivos de conmutación de mucha más alta corriente como faros, luces de estacionamiento, bocinas, etc.

La estructura interna del Relé SPDT:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/Relay_Struction.jpg" /></div>

Puedes ver que el terminal común y el terminal normalmente cerrado tienen continuidad cuando la bobina del relé está en reposo.

Pero cuando la bobina está energizada, el terminal común y el terminal normalmente abierto tendrán continuidad.

La instalación del hardware puede referirse a la siguiente imagen:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay.jpg" /></div>

La codificación para controlar este relé es la misma que el [Grove - Relay](https://wiki.seeedstudio.com/es/Grove-Relay/)

Buena suerte controlando tu aire acondicionado o lavadora, con Arduino y el Grove - Relé SPDT(30A).

**Con Raspberry Pi**

1.Deberías tener una raspberry pi y un grovepi o grovepi+.

2.Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](https://wiki.seeedstudio.com/es/GrovePi_Plus#Introducing_the_GrovePi.2B).

3.Conexión

- Conecta el sensor al socket grovepi D4 usando un cable grove.

4.Navega al directorio de demos:

```
   cd yourpath/GrovePi/Software/Python/
```

Para ver el código

```
   nano grove_spdt_relay.py   # "Ctrl+x" para salir #
```

```
import time
import grovepi

# Connect the Grove SPDT Relay to digital port D4
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

5.Ejecuta la demo.

```
   sudo python grove_spdt_relay.py
```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recurso

---

- [Archivo Eagle del Grove - Relé SPDT(30A)](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip)
- [Hoja de Datos SLA-05VDC-SL-C](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/SLA-05VDC-SL-C_Datasheet.pdf)

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