---
title: Grove - Interruptor de Distancia IR v1.2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-IR_Distance_Interrupter_v1.2/
slug: /es/Grove-IR_Distance_Interrupter_v1.2
last_update:
  date: 01/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Grove_-_IR_Distance_Interrupter_v1.2.jpg)

**Grove - Interruptor de Distancia IR** se utiliza para detectar cualquier objeto que bloquee el paso de la luz. El módulo consiste en un par de LED IR y un fotosensor (fototransistor). La luz emitida por el LED IR se refleja por cualquier objeto colocado frente al sensor y esta reflexión es detectada por el fotosensor (fototransistor). Cualquier superficie de color blanco (o más claro) refleja más que una superficie de color negro (o más oscuro).

Cuando se detecta la luz reflejada, produce una salida **HIGH Digital** (o Binario **1**) en el pin **SIG**. El indicador LED a bordo también se encenderá. Si no se detecta reflexión o si el objeto está demasiado lejos del sensor, la salida en el pin **SIG** permanece en **LOW Digital** (Binario **0**). El indicador LED a bordo también estará apagado. El rango detectable de este sensor es de 7.5–40 cm. El módulo incorpora un Amplificador Operacional Rail-to-Rail para amplificar la salida del fototransistor. Hay un potenciómetro que se puede usar para ajustar la ganancia del amplificador, es decir, la sensibilidad de detección.

Con este sensor, puedes construir las siguientes aplicaciones (pero no limitadas a): **robots seguidores de línea, codificadores ópticos** y **aplicaciones de conteo de objetos**.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)

<div class="admonition note">
<p class="admonition-title">Nota</p>
Este producto es ligeramente sensible también a radiaciones no IR y por lo tanto cualquier luz brillante en el fotosensor deteriora o perturba la detección de luz IR.
</div>

<div className="admonition tip">
  <p className="admonition-title">Consejo</p>
  Las instrucciones para usar este producto son las mismas que las del <span style={{fontWeight: 'bold'}}>Grove - Sensor Reflectivo Infrarrojo</span>. Puedes usar este producto directamente si has usado Grove - Sensor Reflectivo Infrarrojo.
</div>

Seguimiento de Versiones
------------------------

| Versión del producto                                  | Fecha de lanzamiento | Estado de soporte |
|-------------------------------------------------------|----------------------|-------------------|
| Versiones anteriores a v1.2                          | Junio 2012‎          | No soportado      |
| Grove - Interruptor de Distancia IR v1.2(versión actual) | Abril 2016           | Soportado         |

Características
-----------

- Compatible con Grove y fácil de usar
- Altamente sensible y confiable
- Mayor distancia de detección
- Sensibilidad ajustable para diversas ocasiones
- Más duradero

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
----------------

| Parámetro                     | Valor                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------|
| Voltaje de operación(V)       | 3.3 o 5 Voltios                                                                       |
| Corriente de operación(mA)    | Máximo: 20 mA                                                                         |
| Distancia efectiva detectable | 7.5–40 cm                                                                             |
| Fotosensor reflectivo         | [hoja de datos](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf) |
| Amplificadores operacionales de salida | [hoja de datos](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)                  |
| Peso                          | 2.5 g(para el módulo), 8.5 g(para todo el paquete individual)                        |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción general del hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/hardware_overview.png)

- **Fotosensor reflectivo ITR9909**, Fotosensor reflectivo altamente sensible.
- **Amplificador operacional LM393**, amplificador operacional rail-to-rail.
- **Indicador LED**, El LED se encenderá cuando la intensidad de luz infrarroja recibida exceda un nivel preestablecido.
- **Potenciómetro de ajuste de sensibilidad a la luz**, ajusta la sensibilidad del fotosensor reflectivo a la luz.

### **El paquete incluye**

| Nombre de las partes                                                                                                                    | Cantidad |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Sensor Reflectivo Infrarrojo                                                                                            | 1 pieza  |
| [Cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 pieza  |

Primeros Pasos
---------

Veamos cómo implementar algunas aplicaciones básicas con este módulo:

### Con Arduino

#### Material requerido

- Grove - IR Distance Interrupter v1.2 × 1
- Arduino UNO (otros modelos también están bien) × 1
- Cable Grove × 1
- Grove - Base Shield × 1

#### Conexiones

1.Conecta Grove - IR Distance Interrupter v1.2 a Arduino UNO con cable Grove.

2.Coloca y mantén el fotosensor reflectivo hacia una superficie de color blanco (o claro).

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor3.jpg)

3.Ajusta el potenciómetro con un destornillador para cambiar la sensibilidad del fotosensor reflectivo, hasta que el indicador LED se encienda. Al rotar en sentido horario, el fotosensor reflectivo será más sensible a la luz.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Usa un destornillador apropiado para ajustar el pequeño potenciómetro. Aplicar presión excesiva o ajustes frecuentes podría dañar el cursor del potenciómetro.
</div>

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor1.jpg)

4.Crea un sketch de Arduino y copia el código de abajo en él.

```
void setup()  {
    Serial.begin(9600);
    pinMode(6,INPUT);
}
void loop()  {
    while(1)  {
        delay(500);
        if(digitalRead(6)==LOW)  {
            Serial.println("Somebody is here.");
        }
        else  {
            Serial.println("Nobody.");
        }
    }
}
```

5.Sube el código. Si no sabes cómo subir un sketch de Arduino, por favor visita [https://www.arduino.cc/en/Guide/Windows](https://www.arduino.cc/en/Guide/Windows) para usuarios de Windows o [https://www.arduino.cc/en/Guide/MacOSX](https://www.arduino.cc/en/Guide/MacOSX) para usuarios de Mac. Puedes ver el resultado como se muestra a continuación.

6.Cuando la trayectoria de luz es bloqueada por algún objeto, verás "Somebody is here." en el Terminal Serie, de lo contrario verás "Nobody."

### Con Raspberry Pi

#### Material requerido

- Raspberry Pi (otros modelos también están bien) × 1
- [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html?cPath=73) o [Grovepi+](https://www.seeedstudio.com/depot/GrovePi-p-2241.html?cPath=122_154_158) × 1
- [Cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### Conexiones de Hardware y Trabajo de Software

1.Deberías tener una Raspberry Pi y un GrovePi o GrovePi+. En esta demostración, usamos GrovePi.

2.Asumimos que has construido el entorno de desarrollo exitosamente. Si no, sigue este tutorial

3.Conexión:

Conecta Grove - IR Distance Interrupter en el puerto D4 del GrovePi con [cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57).

4.Navega al directorio de las demostraciones, ejecuta el siguiente comando en una terminal.

```
    cd yourpath/GrovePi/Software/Python/
```

Ejecuta el comando en una terminal:

```
    nano grove_infrared_distance_interrupt.py
```

Copia y guarda el siguiente código en él.

```
import time
import grovepi
 
# Connect the Grove Infrared Distance Interrupt Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # Sensor returns LOW and onboard LED lights up when the
        # received infrared light intensity exceeds the calibrated level
        if grovepi.digitalRead(sensor) == 0:
            print "found something"
        else:
            print "nothing"
 
        time.sleep(.5)
 
    except IOError:
        print "Error"
```

5.Ejecuta la demostración, ejecuta el siguiente comando en la terminal.

```
    sudo python grove_infrared_distance_interrupt.py
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - IR Distance Interrupter v1.2 archivo Eagle](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip)
- [Hoja de datos del Fotosensor Reflectivo (ITR9909)](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf)
- [Hoja de datos LM393](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)
- [Hoja de datos LMV358](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LMV358_datasheet.pdf)
- [Archivos fuente del Sensor Reflectivo Infrarrojo](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip)

Este archivo Markdown fue creado desde [https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2](https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
