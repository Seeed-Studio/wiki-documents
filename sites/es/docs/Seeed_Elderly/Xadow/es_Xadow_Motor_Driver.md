---
description: Xadow - Controlador de Motor
title: Xadow - Controlador de Motor
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Motor_Driver
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/x%20motor.jpg)

Xadow Motor puede ser usado para controlar motores DC. Su corazón es un chip controlador de motor bidireccional de dos canales de baja saturación LB1836M, controlado por ATmega168 que maneja la comunicación I2C con la Placa Principal Xadow. Xadow Motor cuenta con una dirección I2C cambiable. Y necesita una alimentación separada de baja potencia para impulsar los motores.

## Especificaciones
---
- Controlador de Motor: LB1836M
- Voltaje de Batería: 2.5V ~ 9V
- Corriente de Salida por canal (Máx): 300mA
- Modo de Comunicación: I2C
- La Dirección I2C es cambiable
- Dimensiones: 25.43mm x 20.35mm


## Vista del Producto
---
![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/Xadow_Motor_Black_View.png)

- ①: IC LB1836, un controlador de motor bidireccional de dos canales de baja saturación.
- ②： Conexión de Alimentación de Motores.
- ③,④: Conexión de Motores DC.
- ⑤,⑥: usados para establecer la dirección IIC. A0 y A1 vienen conectados a H de fábrica. Puedes cambiarlos a "L" con una pequeña modificación en la placa. Encuentra detalles en la Referencia.
- ⑦: Interfaz SPI, usada para cargar firmware para Atmega168.
- ⑧: Microcontrolador Atmega168.
- ⑨: usado para seleccionar la alimentación para el IC Atmega168. En modo predeterminado, DVCC está conectado a VOUT lo que significa que la alimentación viene de la fuente de alimentación del Motor. Cuando DVCC está conectado a 3.3V, la Placa Principal Xadow suministra alimentación para Atmega168.

## Demostración
---
Xadow Motor puede impulsar dos motores DC simultáneamente. Basado en nuestra biblioteca disponible, es más fácil hacer que los motores funcionen. Ahora comencemos.

:::note
    La biblioteca no está disponible para controlar motor paso a paso.
:::
**Instalación de Hardware: **

1.Conecta los Motores DC a la interfaz J5,J6. Puedes usar el soldador para soldar y asegurar que las conexiones estén fijas. Configuramos una batería de litio de 3.7V para ti. Así que no puedes impulsar motores de alta potencia usando la batería.

2.Conecta la batería a la Interfaz de Batería de Xadow Motor. Sin batería, los Motores no rotarían.

3.Conecta Xadow Motor a la Placa Principal Xadow. No olvides instalar el Controlador Xadow.

:::note
    Cuando conectes el Acelerómetro de 3 Ejes Xadow a la Placa Principal Xadow, debes considerar la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo xadow necesita conectarse al ángulo recto de otro módulo(ve las cuatro esquinas de cada módulo xadow).
:::
Cargar Código:

4.Descarga la [Biblioteca Xadow Motor](https://github.com/Seeed-Studio/Xadow_Motor_Driver) e instálala en la Biblioteca de Arduino.

5. Abre el código directamente por la ruta:Archivo -> Ejemplo ->xadow_motor->motorCtrl.

```
/*
there are four motor state you can use:

-MSTOP                -> stop
-MFOR                        -> go forward
-MREV                        -> go reverse
-MHOLD                -> hold the recent state
**NOTE:
there are four addresses you can choose, it's up to the hardware,
for more information, refer to www.seeedstudio.com
-MOTORADDRESS0 0x40 // A0 LOW, A1 LOW
-MOTORADDRESS1 0x41 // A0 HIGH, A1 LOW
-MOTORADDRESS2 0x42 // A0 LOW, A1 HIGH
-MOTORADDRESS3 0x43 // A0 HIGH, A1 HIGH
use this function: setMotorRun(unsigned char sMotorA, unsigned char sMotorB);
you can contrl the both motor.
*/

#include <Wire.h>

#include "XadowMotor.h"

void setup()
{
    Serial.begin(38400);
    xadowMotor.begin(MOTORADDRESS3);
}

void loop()
{

    Serial.print("bat vol :");
    Serial.println(xadowMotor.getBatVol());

    xadowMotor.setMotorRun(MFOR, MFOR);

    delay(2000);

    xadowMotor.setMotorRun(MSTOP, MSTOP);

    delay(500);

    xadowMotor.setMotorRun(MREV, MREV);

    delay(2000);

    xadowMotor.setPwrDown();
    delay(1000);
    xadowMotor.setWakeUp();

}
```

En este código, la función xadowMotor.begin(MOTORADDRESS3) se utiliza para establecer la dirección I2C del Xadow Motor. Necesitas cambiar el parámetro "MOTORADDRESS3" cuando cambies la conexión del pin A0 y el pin A1. Encuentra los detalles en la Referencia.

6. Sube el Código. Recuerda seleccionar Seeeduino Xadow desde el menú Herramientas | Placa del entorno Arduino, y selecciona el puerto serie correcto que está usando la Placa Principal Xadow.

Ahora puedes ver que tus motores funcionarán hacia adelante o hacia atrás a intervalos regulares. Al abrir el monitor serie, puedes observar el voltaje de tu batería.

## Referencia
---
El Xadow Motor tiene cuatro direcciones I2C que están determinadas por el pin A0 y el pin A1. A0 y A1 están conectados a H dentro de la placa por defecto. Pero puedes cambiarlo. Por ejemplo, usa un soldador para romper la conexión entre H y A0, luego solda ADR0 y L, así haces que el valor de A0 sea L. Puedes encontrar la relación de la dirección I2C de hardware y los valores de A0 y A1 en la siguiente tabla.

|Dirección I2C	|Estado de entrada A0| Estado de entrada A1|	el parámetro correspondiente en el código|
|---|:---:|:---:|---|
|0x40	|L|	L|	MOTORADDRESS0|
|0x41|	L|	H|	MOTORADDRESS1|
|0x42	|H|	L|	MOTORADDRESS2|
|0x43	|H	|H|	MOTORADDRESS3|

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Xadow Motor](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip)
- [Esquemático de Xadow Motor en PDF](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Schematic_in_PDF.pdf)
- [Librería de Xadow Motor](https://github.com/Seeed-Studio/Xadow_Motor_Driver)
- [Hoja de datos LB1836](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/LB1836M.PDF)

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
