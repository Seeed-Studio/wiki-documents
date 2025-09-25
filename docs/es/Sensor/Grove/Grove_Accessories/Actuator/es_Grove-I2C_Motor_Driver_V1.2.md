---
title: Grove - Controlador de Motor I2C V1.2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-I2C_Motor_Driver_V1.2/
slug: /es/Grove-I2C_Motor_Driver_V1.2
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-2.jpg)

El controlador de motor I2C Grove es una nueva adición a la serie Grove con la misma interfaz fácil de usar. Su corazón es un chip controlador de puente H de doble canal (L298N) que puede manejar corriente hasta 2A por canal, controlado por un Atmel ATmega8L que maneja la comunicación I2C con, por ejemplo, un Arduino. Ambos motores pueden ser accionados simultáneamente mientras se configuran a diferente velocidad y dirección. Puede alimentar dos motores DC con escobillas o un motor paso a paso de dos fases de 4 cables. Requiere una fuente de alimentación de 6V a 15V para alimentar el motor y tiene un regulador de voltaje de 5V integrado que puede alimentar el bus I2C y el Arduino (seleccionable por jumper). Todas las líneas del controlador están protegidas con diodos contra la FEM inversa.

La interfaz de software fácil no es la única característica fácil de usar porque el controlador de motor I2C Grove está diseñado para que puedas empezar a funcionar en poco tiempo. Cuenta con un LED para alimentación y cuatro LEDs para indicar si cada motor está funcionando y en qué dirección. Los terminales de tornillo facilitan las conexiones del motor y la alimentación, y el conector del sistema Grove y la interfaz I2C te permiten conectar en cadena el controlador con muchos otros dispositivos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html)

## Seguimiento de Versiones

---
<table width="494">
<tr>
<th>Revisión</th>
<th>Descripciones</th>
<th>Lanzamiento</th>
</tr>
<tr>
<td>v1.0</td>
<td>Lanzamiento público inicial</td>
<td>17 de mayo, 2012</td>
</tr>
<tr>
<td>v1.2</td>
<td>Dirección I2C configurada por hardware</td>
<td>2 de julio, 2012</td>
</tr>
</table>

## Característica

---

* Compatible con Grove

* Interfaz I2C

* La velocidad y dirección del motor se pueden controlar

* Número de canales: 2

* Dirección esclava cambiable por Hardware

## Especificaciones

---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Mín</th>
<th scope="col">Típico</th>
<th scope="col">Máx</th>
<th scope="col">Unidad</th>
</tr>
<tr>
<th scope="row">Voltaje de Trabajo</th>
<td>6</td>
<td>-</td>
<td>15</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">Corriente Máxima de Salida por canal</th>
<td colspan="3">0.5</td>
<td>A</td>
</tr>
<tr>
<th scope="row">Corriente Total Máxima</th>
<td colspan="3">1.0</td>
<td>A</td>
</tr>
<tr>
<th scope="row">Voltaje de entrada/salida en bus I2C</th>
<td colspan="3">5</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Protocolo de comunicación</th>
<td colspan="3">I2C</td>
<td>/</td>
</tr>
</table>

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-1.jpg)

**IC 78M05:** regulador de voltaje de 5v

**IC L298:** controlador de puente completo dual

**IC Atmega8:** Controla la rotación del motor.

**NOTA:** El voltaje de entrada en los terminales de tornillo se regula a 5v y se conecta al I2C +5v a través de un puente (J4). Retire el puente si se usa tanto alimentación externa a través de los terminales de tornillo como alimentación a través del conector I2C. Use el puente si se debe suministrar 5v al bus I2C.

## Ideas de Aplicación

---
Este controlador de motor se puede usar para manejar cualquier motor electrónico con escobillas siempre que no consuma más de 2A a 5v. Dos motores se pueden manejar simultáneamente mientras se configuran a diferente velocidad y dirección. La velocidad se puede configurar completamente proporcional y es controlada por el ATmega8 en la placa usando PWM. Se configura mediante comandos I2C enviados desde Arduino o Seeeduino.
Es perfecto para aplicaciones como robots, autos RC caseros, ventiladores de caja, iluminación LED de alta potencia o cualquier otro proyecto que involucre control de carga proporcional.

## Precauciones

---

* ¡La placa estará muy caliente si opera con más de 1 Amperio. ¡Mantenga sus manos alejadas!

* Se soporta Arduino IDE (versión 1.0 o superior).

## Uso

---
El Controlador de Motor I2C puede controlar motores basados en el chip L298. El L298 no es solo un controlador de motor dual, es un puente H dual. Un puente h es básicamente una configuración específica de transistores que le permite cambiar la dirección de la corriente. Así que conectado a un motor, eso significa que puede hacerlo girar en ambas direcciones, y con entrada PWM, puede usar su Arduino para hacerlos girar a cualquier velocidad. Debido a que el L298 tiene 2 puentes H, no solo puede hacer que un robot vaya hacia adelante y hacia atrás, sino también girar haciendo que cada rueda gire en una dirección diferente.

Ahora, usemos el Controlador de Motor I2C para controlar dos motores DC o un motor paso a paso girando en dirección positiva u opuesta.

### Configurar la dirección del Controlador de Motor I2C

* Configure la dirección mediante el interruptor de marcación como una nueva función añadida al nuevo Controlador de Motor I2C.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-9.jpg)

* Luego mantenga la configuración de dirección en el programa igual a la configuración de dirección en el controlador de motor I2C. La configuración de dirección predeterminada en el programa es 0x0f.

```
#define I2CMotorDriverAdd         0x0f   // Set the address of the I2CMotorDriver
```

###

Cómo controlar 2 motores DC

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-4.jpg)

<div>
  <span style={{color: 'red'}}>**Nota:**</span>
  <dl>
    <dd>Lo primero que hay que tener en cuenta, sin embargo, es que necesitas una fuente de alimentación externa para tus motores DC, el pin de 5v en el Arduino no puede suministrar suficiente energía para controlar 2 motores, puedes dañar tu Arduino si lo haces.</dd>
  </dl>
</div>

Y luego programa tu Arduino como se muestra a continuación:

```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,20);
        delay(10); //this delay needed
        MotorDirectionSet(0b1010);  //0b1010  Rotating in the positive direction
        delay(1000);
        MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
        delay(500);
    }
}
```

En este programa, Arduino primero establece la velocidad de los 2 motores DC con el comando _MotorSpeedSetAB()_, y luego establece las direcciones de trabajo de los motores DC con el comando _MotorDirectionSet()_. por favor consulte Grove-I2C_Motor_Driver_V1.2#Function_Reference para más detalles, puede descargar todo el código de demostración en Grove-I2C_Motor_Driver_V1.2#Resources.

### Cómo controlar un motor paso a paso de 4 cables

El controlador de motor I2C también se puede usar para controlar un motor paso a paso de 4 cables. conecte su motor paso a paso a los pines de salida del controlador de motor I2C, y luego conecte el controlador de motor a su Arduino/Seeeduino con el bus I2C. Programe su Arduino como se muestra a continuación:

```
#include <Wire.h>
.......
.......
< Driver functions >
.......
.......
void setup()  {
    Wire.begin(); // join i2c bus (address optional for master)
    delayMicroseconds(10000); //wait for motor driver to initialization
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,100);//when driving a stepper, the speed should be set to 100;
        delay(10);
        MotorDirectionSet(0b0001);
        delay(4);
        MotorDirectionSet(0b0011);
        delay(4);
        MotorDirectionSet(0b0010);
        delay(4);
        MotorDirectionSet(0b0110);
        delay(4);
        MotorDirectionSet(0b0100);
        delay(4);
        MotorDirectionSet(0b1100);
        delay(4);
        MotorDirectionSet(0b1000);
        delay(4);
        MotorDirectionSet(0b1001);
        delay(4);
    }
}
```

Este motor paso a paso conectado de 4 cables rotará, puedes ajustar la velocidad de rotación o el número de pasos en tu programa de Arduino. También puedes usar otras librerías de motores paso a paso para controlarlo, puedes descargar todo el código de demostración en los Recursos.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/2.gif)

## Referencia de Funciones

---
**1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB)**

_Descripción: define la velocidad del motor 1 y motor 2_

_MotorSpeedA: la velocidad del motor DC A, debe ser 0~100;_

_MotorSpeedB: la velocidad del motor DC B, debe ser 0~100;_

Uso:

```
Serial.println("sent DC speed 100");
MotorSpeedSetAB(100,100);//defines the speed of motor 1 and motor 2;
delay(10); //this delay needed
```

**2. void MotorPWMFrequenceSet(unsigned char Frequence)**

_Descripción: establece la frecuencia de preescala del PWM, 0x03 por defecto._

_Frequence: la frecuencia de preescala del PWM._

**3. void MotorDirectionSet(unsigned char Dirección)**

_Descripción: Ajusta la dirección de los motores._

_Direction: puede ser rotación Forward/Reverse._

Uso:

```
MotorDirectionSet(0b1010);  //"0b1010" defines the output polarity, "10" means the M+ is "positive" while the M- is "negative"
                            // make sure M+ and M- is different polarity when driving DC motors.
delay(1000);
MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction
delay(500);
```

**4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)**

_Descripción: Ajustar la dirección y velocidad conjuntamente de los Motores._

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - I2C Motor Driver Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip)

* [I2C Motor DriverV1.2 Código Demo](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/I2CMotorDriver12Demo.zip)

* [Hoja de Datos L298](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/L298datasheet.pdf)

* [Hoja de Datos 78M05](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/ST_78M05DataSheet.pdf)

* [Archivo:Grabar Firmware para Atmega8 usando ISP](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Burn_firmware_for_Atmega8_using_ISP.zip)

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
