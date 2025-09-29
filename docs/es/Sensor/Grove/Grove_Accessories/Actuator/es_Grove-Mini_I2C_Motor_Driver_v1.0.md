---
title: Grove - Mini I2C Motor Driver v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Mini_I2C_Motor_Driver_v1.0/
slug: /es/Grove-Mini_I2C_Motor_Driver_v1.0
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_2.png)

Este Grove - Mini I2C motor driver incluye dos DRV8830. El DRV8830 proporciona una solución integrada de controlador de motor para juguetes alimentados por batería, impresoras y otras aplicaciones de control de movimiento de bajo voltaje o alimentadas por batería. El módulo tiene dos controladores de puente H, y puede controlar dos motores DC o dos bobinados de motores paso a paso, así como otras cargas como solenoides. Requiere un regulador de voltaje de 5V integrado que puede alimentar el bus I2C. Todas las líneas del controlador están protegidas con diodos contra la FEM inversa. Cuenta con dos LEDs para indicador de falla y cuatro LEDs para indicar en qué dirección está funcionando cada motor. El conector del sistema GROVE y la interfaz I2C te permiten conectar en cadena el controlador con muchos otros dispositivos.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)

Características
--------

- Sin fuente de alimentación externa
- Dos leds para indicador de falla
- Corriente máxima de manejo por defecto 200 mA
- Compatible con Grove
- Interfaz I2C
- Se puede controlar la velocidad y dirección del motor
- Número de canales: 2
- Fácil de usar

:::tip
    Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Ideas de Aplicación
-----------------

Este controlador de motor se puede usar para manejar cualquier motor electrónico con escobillas siempre que no consuma más de 1A a 5v.
Dos motores se pueden manejar simultáneamente mientras se configuran a diferente velocidad y dirección.
La velocidad se puede configurar completamente proporcional y se controla por comando I2C.

- Alimentado por Batería:
  - Impresoras
  - Juguetes
  - Robótica
  - Cámaras
  - Teléfonos

- Actuadores Pequeños, Bombas, etc.

Aquí hay algunos proyectos para tu referencia.

| **Hacer un Mini Auto de Juguete**                                              | **Hacer un Premio Estilo Steampunk**                                       |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_toy_car.jpg)   | ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Seeed_award2015.jpg)  |

Especificaciones
--------------

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
2.75
</td>
<td>
5
</td>
<td>
6.8
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente Máxima de Salida por canal
</th>
<td>
0.2(por defecto)
</td>
<td>
-
</td>
<td>
1
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de entrada/salida en bus I2C
</th>
<td colspan="3">
3.3/5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Protocolo de comunicación
</th>
<td colspan="3">
I2C
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Dirección I2C por Defecto
</th>
<td colspan="3">
0xC0, 0xC4
</td>
<td>
/
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver.jpg)

- **Interfaz Grove** - Los productos Grove tienen un ecosistema y todos tienen el mismo conector que se puede conectar al **Base Shield**. Conecta este módulo al puerto I<sup>2</sup>C del Base Shield, y entonces puede funcionar bien con Arduino. Sin embargo, también puedes conectar Grove - Mini I2C Motor Driver a Arduino sin Base Shield mediante cables puente.

<table>
<tr>
<th width="150">
Arduino UNO
</th>
<th width="150">
Base Shield
</th>
<th width="150">
Grove - Mini I2C Motor Driver
</th>
</tr>
<tr align="center">
<td>
5V
</td>
<td rowspan="4">
Puerto I2C
</td>
<td>
VCC
</td>
</tr>
<tr align="center">
<td>
GND
</td>
<td>
GND
</td>
</tr>
<tr align="center">
<td>
SDA
</td>
<td>
SDA
</td>
</tr>
<tr align="center">
<td>
SCL
</td>
<td>
SCL
</td>
</tr>
</table>

- **Indicador de falla CH1** - Indicador de falla del canal 1.
- **Indicador de falla CH2** - Indicador de falla del canal 2.
- **Indicador de dirección** - Indicador de dirección del motor.
- **Conector de salida CH1** - Conector del motor 1.
- **Conector de salida CH2** - Conector del motor 2.

Función del hardware
-------------------

### Cambiar la corriente máxima de manejo predeterminada

La corriente máxima de manejo predeterminada de cada canal es 200mA, vea la imagen frontal de la placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/QQ20150817-3.png" alt="pir" width={600} height="auto" /></p>

Cada canal (CH1,CH2) tiene agregada una resistencia, y cada valor de resistencia (R5,R12) es 1 Ω, por lo que la corriente máxima de manejo es 200mA según la siguiente ecuación

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_7.png" alt="pir" width={600} height="auto" /></p>

</center>

Mientras tanto, cada canal proporciona una almohadilla soldable reservada (R6 para CH1, R13 para CH2), por lo que puede soldar una resistencia en la placa para cambiar el valor de resistencia de cada canal. A continuación se muestra la nueva ecuación si se agrega resistencia a la placa

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_8.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_9.png" alt="pir" width={600} height="auto" /></p>
</center>

:::caution
La corriente máxima de trabajo de cada canal debe ser menor a 1A. Por lo tanto, el valor mínimo de resistencia soldada a la almohadilla reservada no debe ser menor a 0.2 Ω.
:::

### Cambiar la dirección I<sup>2</sup>C predeterminada

La dirección I<sup>2</sup>C de cada canal es modificable. Por favor, observe la parte posterior de la placa, encontrará que hay 4 almohadillas de puente; A0_CH1 y A1_CH1 son para el canal 1, A0_CH2 y A1_CH2 son para el canal 2, como se muestra a continuación:

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Address_mini_i2c_motor_driver.png" alt="pir" width={600} height="auto" /></p>
</center>

Puede soldar o desoldar cada puente para cambiar la dirección I2C:

- 1 - Necesita un soldador, simplemente suelde los dos lados del puente juntos
- 0 - Necesita un soldador, simplemente desuelde los dos lados del puente.

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_12.png" alt="pir" width={600} height="auto" /></p>
</center>

:::note
La biblioteca del Grove - Mini I2C Motor driver depende de la dirección predeterminada.
:::
Comenzando
----------

Ahora, comencemos a usar el Grove - Mini I2C Motor Driver.

### Preparaciones

Ahora estamos haciendo una demostración para el Grove - Mini I2C Motor Driver v1.0 que requiere los siguientes módulos.

- 2 * Motor DC 2V-6V
- Seeeduino Lite

**Seeeduino Lite es compatible con Arduino.**

Si está usando un Arduino UNO o cualquier otra placa compatible con Arduino que no tenga un conector Grove,

Necesitará un Grove Base Shield para conectar el Grove fácilmente.

Si esta es su primera vez usando Arduino o Seeeduino, por favor consulte Getting_Started_with_Seeeduino para comenzar su viaje con Arduino.

### Instalación del hardware

El Grove - Mini I2C Motor Driver tiene un socket Grove para conectar los dos módulos anteriores.
Estos son:

- 2 * Motor DC 2V-6V - conectar a los conectores de salida CH1 y CH2.
- Seeeduino Lite

Conecte la interfaz I2C Grove del Seeeduino a la interfaz Grove del Mini Motor Driver como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver_demo.jpg)

### Trabajo de software

[![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Arduino_mini_i2c_motor_driver.jpg)](https://www.arduino.cc/)

El Grove - Mini I2C Motor Driver puede controlar motores basado en el chip DRV8830. El DRV8830 no es solo un controlador de motor dual, es un puente H dual. Un puente h es básicamente una configuración específica de transistores que le permite cambiar la dirección de la corriente. Puede usar su Arduino para hacerlos girar a cualquier velocidad.

Debido a que el módulo tiene 2 puentes H, no solo puede hacer que un robot vaya hacia adelante y hacia atrás, sino también girar haciendo que cada rueda gire en una dirección diferente.

Conecte el Seeeduino a la computadora usando un cable micro USB.

Ahora, usemos el Grove - Mini I2C Motor Driver para controlar dos motores DC girando en dirección positiva u opuesta.

A continuación se proporciona un programa de ejemplo para usar con Arduino. El código para esto es muy básico, pero también puede cambiarlo y hacerlo a su manera.

```
/****************************************************************
Example code demonstrating the use of the Arduino Library for
the SparkFun MiniMoto board, which uses the TI DRV8830 IC for I2C
low-voltage DC motor control.
 
This code is beerware; if you use it, please buy me (or any other
SparkFun employee) a cold beverage next time you run into one of
us at the local.
 
17 Sep 2013- Mike Hord, SparkFun Electronics
 
Code developed in Arduino 1.0.5, on a Fio classic board.
 
**Updated for Arduino 1.6.4 5/2015**
****************************************************************/
 
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
 
// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)
 
#define FAULTn  16     // Pin used for fault detection.
 
// Nothing terribly special in the setup() function- prep the
//  serial port, print a little greeting, and set up our fault
//  pin as an input.
void setup()
{
    Serial.begin(9600);
    Serial.println("Hello, world!");
    pinMode(FAULTn, INPUT);
}
 
// The loop() function just spins the motors one way, then the
//  other, while constantly monitoring for any fault conditions
//  to occur. If a fault does occur, it will be reported over
//  the serial port, and then operation continues.
void loop()
{
    Serial.println("Forward!");
    motor0.drive(100);
    motor1.drive(100);
    delayUntil(1000);
    Serial.println("Stop!");
    motor0.stop();
    motor1.stop();
    delay(1000);
    Serial.println("Reverse!");
    motor0.drive(-100);
    motor1.drive(-100);
    delayUntil(1000);
    Serial.println("Brake!");
    motor0.brake();
    motor1.brake();
    delay(1000);
}
 
// delayUntil() is a little function to run the motor either for
//  a designated time OR until a fault occurs. Note that this is
//  a very simple demonstration; ideally, an interrupt would be
//  used to service faults rather than blocking the application
//  during motion and polling for faults.
void delayUntil(unsigned long elapsedTime)
{
    // See the "BlinkWithoutDelay" example for more details on how
    //  and why this loop works the way it does.
    unsigned long startTime = millis();
    while (startTime + elapsedTime > millis())
    {
        // If FAULTn goes low, a fault condition *may* exist. To be
        //  sure, we'll need to check the FAULT bit.
        if (digitalRead(FAULTn) == LOW)
        {
            // We're going to check both motors; the logic is the same
            //  for each...
            byte result = motor0.getFault();
            // If result masked by FAULT is non-zero, we've got a fault
            //  condition, and we should report it.
            if (result & FAULT)
            {
                Serial.print("Motor 0 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break; // We want to break out of the motion immediately,
                //  so we can stop motion in response to our fault.
            }
            result = motor1.getFault();
            if (result & FAULT)
            {
                Serial.print("Motor 1 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break;
            }
        }
    }
}
```

Ahora haz clic en Upload(CTRL+U) para cargar el código de prueba. Consulta Getting_Started_with_Seeeduino para cualquier mensaje de error y también puedes añadir comentarios en la comunidad.

### Revisar Resultados

Después de que se complete la carga, los motores rotarán en dirección positiva u opuesta en ciclo.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Hoja de Datos DRV8830](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/DRV8830.pdf)
- [Grove - Mini I2C Motor Driver_Archivo_Eagle](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip)
- [Grove - Documento de Esquema Mini I2C Motor Driver](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH.pdf)
- [Grove - Librería Fuente Mini I2C Motor Driver](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mini_I2C_Motor_Driver_v1.0 -->

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
